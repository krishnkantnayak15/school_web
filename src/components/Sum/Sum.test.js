import React from 'react' ;
import {shallow,mount,render} from 'enzyme' ;
import {expect} from 'chai' ;
import sinon from 'sinon';

import Sum from './Sum' ;

describe('Sum' , () => {
    it('should render without error', () => {
        const wrapper = shallow(<Sum />);
        expect(wrapper).to.be.ok ;
    })
    it('should find components using the class name', () => {
        const wrapper = shallow(<Sum />);
        expect(wrapper.find(".sum").length).to.equal(1);
    })


    it('should get the text from components', () => {
        const wrapper = shallow(<Sum />);
        expect(wrapper.text()).to.equal('Sum+');
    })

        it('should get the html from components', () => {
        const wrapper = shallow(<Sum />);
         expect(wrapper.html()).to.equal('<div class="sum"><h1>Sum</h1><input type="number" class="a"/><button>+</button><input type="number" class="b"/><span></span></div>');
    })


    it('should call add function when + button is clicked', () => {
            const wrapper = mount(<Sum />);
            const instance = wrapper.instance();

            const add = sinon.stub(instance, 'add'  , () => null);
            instance.forceUpdate();
            wrapper.update();
       
        wrapper.find('button').simulate('click');
        wrapper.find('button').simulate('click');
        wrapper.find('button').simulate('click');
        wrapper.find('button').simulate('click');
        expect(add.callCount).to.equal(4);
    })

    it('should sum up 2 number and display result', () => {
        const wrapper = mount(<Sum />);
           wrapper.find('input.a').get(0);
       
        wrapper.find('input.a').get(0).value = 3;
         wrapper.find('input.b').get(0).value = 5;
        wrapper.find('button').simulate('click');
        
        expect(wrapper.state('sum')).to.equal(8);
        expect(wrapper.text()).to.equal('Sum+8');
    })
});
