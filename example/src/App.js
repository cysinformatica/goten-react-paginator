import React from 'react'
import PubSub from 'pubsub-js'

import './App.css'

import GotenPaginator from '../../src/index.js'

import List from './components/List'
import Buscador from './components/Buscador'


export default class App extends React.Component {
    constructor(){
        super()
        this.state = {
            elements: [],
            totalElements: 0,
            offset: 0,
            limit: 10,
        }
    }

    componentDidMount(){
        PubSub.subscribe('updateElements', (type, message) => {
            this.setState({
                totalElements: message.total,
                elements: message.elements,
                offset: message.offset,
                limit: message.limit
            })
        })
    }

    componentWillUnmount(){
        PubSub.unsubscribe('updateElements')
    }

    render() {
        return (
            <div className="App">
                <GotenPaginator
                    totalElements={this.state.totalElements}
                    offset={this.state.offset}
                    limit={this.state.limit}
                >
                    <Buscador limit={this.state.limit}/>
                    <List elements={this.state.elements}/>
                </GotenPaginator>
            </div>
        )
    }
}