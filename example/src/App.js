import React, { Component } from 'react';
import './App.css';
import List from './components/List'
import Buscador from './components/Buscador'
import GotenPaginator from '../../src/index.js'
import PubSub from 'pubsub-js'

class App extends Component {

  constructor(){
    super()
    this.state = {
      elements:[],
      totalElements:0,
      offset: 0,
      limit: 10,
    }
  }

  componentWillMount(){
    PubSub.subscribe('updateElements', (type, message) => {
      this.setState({
        elements: message.elements,
        totalElements: message.total,
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
        {/* <GotenPaginator
          totalElements={this.state.totalElements}
          offset={this.state.offset}
          limit={this.state.limit}> */}
          <Buscador limit={this.state.limit}/>
          <List elements={this.state.elements}/>
        {/* </GotenPaginator> */}
      </div>
    );
  }
}

export default App;
