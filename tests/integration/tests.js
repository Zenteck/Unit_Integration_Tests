const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
const expect = chai.expect;

describe('calculator functionality', function() {
  beforeEach(function() {
    browser.ignoreSynchronization = true;
    browser.get('http://localhost:3000');
  });

  // write integration tests here in the form of "it should do something..."
  it('should have working number buttons', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number2')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('2')
  })

  it('should update the display when number buttons are pressed', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number5')).click();
    element(by.css('#number7')).click();
    element(by.css('#number3')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('573')
  })

  it('should refresh the display when arithmetical operators are pressed', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number5')).click();
    element(by.css('#number7')).click();
    element(by.css('#operator_divide')).click();
    element(by.css('#number3')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('19')
  })

  it('should be able to chain multiple operations', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number1')).click();
    element(by.css('#number2')).click();
    element(by.css('#operator_divide')).click();
    element(by.css('#number3')).click();
    element(by.css('#operator_add')).click();
    element(by.css('#number3')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('7')
  })

  // it('should output as expected for a range of numbers', function(){
  //   running_total = element(by.css('#running_total'))
  //   element(by.css('#number1')).click();
  //   element(by.css('#number2')).click();
  //   element(by.css('#operator_multiply')).click();
  //   element(by.css('#operator_subtract')).click();
  //   element(by.css('#number3')).click();
  //   element(by.css('#operator_add')).click();
  //   element(by.css('#number3')).click();
  //   element(by.css('#number1')).click();
  //   element(by.css('#number2')).click();
  //   element(by.css('#number9')).click();
  //   element(by.css('#number7')).click();
  //   element(by.css('#number1')).click();
  //   element(by.css('#operator_equals')).click();
  //   expect(running_total.getAttribute('value')).to.eventually.equal('312967')
  // })








});

// You need to write front-end integration tests to ensure the Calculator model and browser UI are working to meet the user requirements. The framework provided to do this is Protractor JS using Chai for assertions. There is one sample test written in /tests/integration/tests.js and you should continue writing your tests in this file.
//
// You should write tests to ensure the following requirements are met:
//
//     Do the number buttons update the display of the running total?
//     Do the arithmetical operations update the display with the result of the operation?
//     Can multiple operations be chained together?
//     Is the output as expected for a range of numbers (for example, positive, negative, decimals and very large numbers)?
//     What does the code do in exceptional circumstances? Specifically, if you divide by zero, what is the effect? Write a test to describe what you’d prefer to happen, and then correct the code to make that test pass (you will need to modify the Calculator model to meet this requirement).
