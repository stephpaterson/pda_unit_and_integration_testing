import React from 'react';
import Calculator from '../containers/Calculator';
import {mount, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

describe('Calculator', () => {
  let container;
  beforeEach(() => {
    container = mount(<Calculator/>)
  })

  it('should change running total on number enter', () => {
    const button4 = container.find('#number4');
    const runningTotal = container.find('#running-total');
    button4.simulate('click');
    expect(runningTotal.text()).toEqual('4');
  })

  it('should add two numbers together', ()=>{
    const button4 = container.find('#number4');
    const button1 = container.find('#number1');
    const operator_add = container.find('#operator_add');
    const operator_equals = container.find('#operator-equals');
    const runningTotal = container.find('#running-total');
    button4.simulate('click');
    operator_add.simulate('click');
    button1.simulate('click');
    operator_equals.simulate('click');
    expect(runningTotal.text()).toEqual('5');
  })

  it('should subtract one number from another', ()=>{
    const button9 = container.find('#number9');
    const button3 = container.find('#number3');
    const operator_subtract = container.find('#operator-subtract');
    const operator_equals = container.find('#operator-equals');
    const runningTotal = container.find('#running-total');
    button9.simulate('click');
    operator_subtract.simulate('click');
    button3.simulate('click');
    operator_equals.simulate('click');
    expect(runningTotal.text()).toEqual('6');
  })

  it('should multiple two numbers together', ()=>{
    const button6 = container.find('#number6');
    const button5 = container.find('#number5');
    const operator_multiply = container.find('#operator-multiply');
    const operator_equals = container.find('#operator-equals');
    const runningTotal = container.find('#running-total');
    button6.simulate('click');
    operator_multiply.simulate('click');
    button5.simulate('click');
    operator_equals.simulate('click');
    expect(runningTotal.text()).toEqual('30');
  })

  it('should divide two numbers', ()=>{
    const button8 = container.find('#number8');
    const button2 = container.find('#number2');
    const operator_divide = container.find('#operator-divide');
    const operator_equals = container.find('#operator-equals');
    const runningTotal = container.find('#running-total');
    button8.simulate('click');
    operator_divide.simulate('click');
    button2.simulate('click');
    operator_equals.simulate('click');
    expect(runningTotal.text()).toEqual('4');
  })

  it('should concatenate two numbers together', ()=>{
    const button8 = container.find('#number8');
    const button2 = container.find('#number2');
    const runningTotal = container.find('#running-total');
    button8.simulate('click');
    button2.simulate('click');
    expect(runningTotal.text()).toEqual('82');
  })

  it('should be able to perform two calculations one after the other', ()=>{
    const button8 = container.find('#number8');
    const button2 = container.find('#number2');
    const operator_divide = container.find('#operator-divide');
    const operator_multiply = container.find('#operator-multiply');
    const operator_equals = container.find('#operator-equals');
    const runningTotal = container.find('#running-total');
    button8.simulate('click');
    operator_divide.simulate('click');
    button2.simulate('click');
    operator_multiply.simulate('click')
    button2.simulate('click');
    operator_equals.simulate('click');
    expect(runningTotal.text()).toEqual('8');
  })

})

