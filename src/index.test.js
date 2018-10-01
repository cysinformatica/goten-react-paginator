import React from 'react'
import GotenPaginator from './index.js'
import { shallow } from 'enzyme'
import List from './../example/src/components/List'
import Buscador from './../example/src/components/Buscador'

describe('GotenPaginator have 3 elements: 2 childs passed and 1 own',()=>{

    it('Elements into GotenPaginator', ()=>{
        const wrapper = shallow(
            <GotenPaginator
                totalElements={7}
                offset={0}
                limit={2}
                >
                <Buscador/>
                <List/>
            </GotenPaginator>
        )
        let countChildren = wrapper.children().length
        expect(countChildren).toEqual(3)
    })

})