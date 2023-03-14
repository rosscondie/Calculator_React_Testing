import React from 'react';
import Calculator from '../containers/Calculator';
import {render, fireEvent} from '@testing-library/react';

describe('Calculator', () => {
  let container;
  beforeEach(() => {
    container = render(<Calculator/>)
  })

  it('should change running total on number enter', () => {
    const button4 = container.getByTestId('number4');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button4);
    expect(runningTotal.textContent).toEqual('4');
  })

  it('should add 1 to 4 and get 5', () => {
    const button1 = container.getByTestId('number1');
    const button4 = container.getByTestId('number4');
    const buttonAdd = container.getByTestId('operator-add');
    const buttonEquals = container.getByTestId('operator-equals');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button1);
    fireEvent.click(buttonAdd);
    fireEvent.click(button4);
    fireEvent.click(buttonEquals);
    expect(runningTotal.textContent).toEqual('5');
  })

  it('should subtract 4 from 7 and get 3', () => {
    const button4 = container.getByTestId('number4');
    const button7 = container.getByTestId('number7');
    const buttonSubtract = container.getByTestId('operator-subtract');
    const buttonEquals = container.getByTestId('operator-equals');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button7);
    fireEvent.click(buttonSubtract);
    fireEvent.click(button4);
    fireEvent.click(buttonEquals);
    expect(runningTotal.textContent).toEqual('3');
  })

  it('should multiply 3 by 5 and get 15', () => {
    const button3 = container.getByTestId('number3');
    const button5 = container.getByTestId('number5');
    const buttonMulitply = container.getByTestId('operator-multiply');
    const buttonEquals = container.getByTestId('operator-equals');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button3);
    fireEvent.click(buttonMulitply);
    fireEvent.click(button5);
    fireEvent.click(buttonEquals);
    expect(runningTotal.textContent).toEqual('15');
  })

  it('should divide 21 by 7 and get 3', () => {
    const button2 = container.getByTestId('number2');
    const button1 = container.getByTestId('number1');
    const buttonDivide = container.getByTestId('operator-divide');
    const button7 = container.getByTestId('number7');
    const buttonEquals = container.getByTestId('operator-equals');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button2);
    fireEvent.click(button1);
    fireEvent.click(buttonDivide);
    fireEvent.click(button7);
    fireEvent.click(buttonEquals);
    expect(runningTotal.textContent).toEqual('3');
  })

  it('should concatenate multiple number button clicks', () => {
    const button1 = container.getByTestId('number1');
    const button2 = container.getByTestId('number2');
    const button3 = container.getByTestId('number3');
    const button4 = container.getByTestId('number4');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button1);
    fireEvent.click(button2);
    fireEvent.click(button3);
    fireEvent.click(button4);
    expect(runningTotal.textContent).toEqual('1234');
  })

  it('should chain multiple operations together', () => {
    const button3 = container.getByTestId('number3');
    const buttonMultiply = container.getByTestId('operator-multiply');
    const button2 = container.getByTestId('number2');
    const buttonAdd = container.getByTestId('operator-add');
    const button4 = container.getByTestId('number4');
    const buttonEquals = container.getByTestId('operator-equals');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button3);
    fireEvent.click(buttonMultiply);
    fireEvent.click(button2);
    fireEvent.click(buttonAdd);
    fireEvent.click(button4);
    fireEvent.click(buttonEquals);
    expect(runningTotal.textContent).toEqual('10');
  })

  it('should clear the running total without affecting the calculation', () => {
    const button5 = container.getByTestId('number5');
    const buttonMultiply = container.getByTestId('operator-multiply');
    const button4 = container.getByTestId('number4');
    const buttonAdd = container.getByTestId('operator-add');
    const button7 = container.getByTestId('number7');
    const buttonClear = container.getByTestId('clear');
    const buttonEquals = container.getByTestId('operator-equals');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button5);
    fireEvent.click(buttonMultiply);
    fireEvent.click(button4);
    fireEvent.click(buttonAdd);
    fireEvent.click(button7);
    fireEvent.click(buttonClear);
    fireEvent.click(button5);
    fireEvent.click(buttonEquals);
    expect(runningTotal.textContent).toEqual('25');
  })
})

