import React from 'react' ;
import {shallow,mount,render} from 'enzyme' ;
import {expect} from 'chai' ;
import sinon from 'sinon';

import Box from './Box' ;

describe('Box' , () => {
    it('should render without error', () => {
        const wrapper = shallow(<Box />);
        expect(wrapper).to.be.ok ;
    })
    it('should find components using the class name', () => {
        const wrapper = shallow(<Box />);
        expect(wrapper.find(".box").length).to.equal(1);
    })


    it('should get the text from components', () => {
        const wrapper = shallow(<Box text ="krishna@gmail.com" />);
        expect(wrapper.text()).to.equal("krishna@gmail.com");
    })

        it('should get the html from components', () => {
        const wrapper = shallow(<Box />);
        const html = wrapper.html();
        expect(html).to.equal('<div class="box"><div></div></div>');
    }) 

    it('should get the primary key(id) from component', () => {
        const wrapper = shallow(<Box  id="3"/>);
        const html = wrapper.html();
        expect(html).to.equal('<div class="box"><div data-id="3"></div></div>');
    }) 

     it('should render out full component', () => {
        const wrapper = shallow(<Box  css="empty" text="krishna@gmail.com" id="3"/>);
        const html = wrapper.html();
        expect(html).to.equal('<div class="box"><div data-id="3" class="empty">krishna@gmail.com</div></div>');
    }) 

    it('should call the parent function when clicked', () => {
        const stub = sinon.stub();
        const wrapper  = mount(<Box click={stub} />);
        wrapper.find('.box > div').simulate('click');
        expect(stub.callCount).to.equal(1);
    }) 
});
