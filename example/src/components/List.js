import React from 'react'


export default class List extends React.Component {
    getElements = () => (
        <ul>
            {this.props.elements.map((element, i) => {
                return (
                    <li key={i}>
                        {element}
                    </li>
                )
            })}
        </ul>
    )
    
    render() {
        return (
            <div>
                {this.getElements()}
            </div>
        )
    }
}