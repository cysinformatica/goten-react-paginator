import React, { Component } from 'react'
import PubSub from 'pubsub-js'

import { getFakeResponse } from '../utils/utils'


export default class Buscador extends Component {
    search = (offset=0, limit=5) => {
        const response = getFakeResponse(offset, limit)
        PubSub.publish('updateElements', response)
    }

    render() {
        return (
            <div>
                <button onClick={() => this.search()}>BUSCAR</button>
            </div>
        )
    }
}