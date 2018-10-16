import React, { Component } from 'react'

import { UltimatePagination } from './paginator'
import PropTypes from 'prop-types'


const buttonClassName = {
    active: "btn btn-primary",
    default: "btn btn-default"
}

export default class GotenPaginator extends Component {
    constructor(){
        super()
        this.childRef = React.createRef()
      }
    
    changePage = (newPage) => {
        if (this.props.searchMethod)
            this.props.searchMethod((newPage-1)*this.props.limit, this.props.limit)
        else 
            this.childRef.current[this.props.searcherMethodName || "search"]((newPage-1)*this.props.limit, this.props.limit)
    }

    render(){
        return(
            <div>
                {React.cloneElement(this.props.children[0],{ref: this.childRef})}
                {this.props.children[1]}                                                            
                <UltimatePagination className={this.props.buttonClassName || buttonClassName} onChange={(newPage) => this.changePage(newPage)} currentPage={this.props.offset/this.props.limit + (this.props.totalElements==0?  0 : 1)} 
                    totalPages={Math.ceil(this.props.totalElements/this.props.limit)}/>
            </div>
        )
    }
}

GotenPaginator.propTypes = {
    totalElements:PropTypes.number.isRequired,
    offset:PropTypes.number.isRequired,
    limit:PropTypes.number.isRequired,
    searchMethod: PropTypes.func,
    searcherMethodName: PropTypes.string,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired
  };