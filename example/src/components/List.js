import React, { Component } from 'react';

class List extends Component {

    getElements = () =>{
        return (
            <ul>
                {
                    this.props.elements.map((element, i) => {
                    return (
                        <li key={i}>
                            {element}
                        </li>
                        )
                    })
                }
            </ul>
        )
    }
    
    render() {
        return (
        <div>
            { this.getElements() }
        </div>
        );
    }
}

export default List;