import React, { Component } from 'react';
import PubSub from 'pubsub-js'

class Buscador extends Component {

    constructor(props){
        super(props)
        this.state={}
    }

    setPega = (event) => {
        const name = event.target.value
        this.setState({name})
    }

    getFakeResponse(offset, limit) {
        let elements = []
        for(let i=0; i < limit; i++) {
            elements[i] = "Item" + (i + offset + 1)
        }
        return {
            elements: elements,
            total: 35,
            offset: offset,
            limit: limit
        }
    }

    search = (offset=0, limit=5) => {
        const response = this.getFakeResponse(offset, limit)
        PubSub.publish('updateElements', response)
    }

    render() {
        return (
        <div>
            <input type="text" value={this.state.name} onChange={this.setPega} />
            <button onClick={() => this.search()}>BUSCAR</button>
        </div>
        );
    }

    toQueryString = (queryObject) =>{
        let queryString = ''
        Object.keys(queryObject).forEach((key)=>{
           queryString.concat(key + '=' + queryObject[key] + '&')
        })
        return queryString
      }
}

export default Buscador;