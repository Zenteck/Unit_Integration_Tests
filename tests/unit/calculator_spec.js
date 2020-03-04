var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  })



  it('can add two numbers', function(){
    calculator.previousTotal = 1
    calculator.add(4);
    assert.equal(5, calculator.runningTotal);
  })

  it('can subtract one number from another', function(){
      calculator.previousTotal = 30;
      calculator.subtract(20);
      assert.equal(10, calculator.runningTotal);
  })

  it('can multiply two numbers', function(){
      calculator.previousTotal = 4;
      calculator.multiply(3);
      assert.equal(12, calculator.runningTotal);
  })

  it('can divide one number by another', function(){
      calculator.previousTotal = 20;
      calculator.divide(10);
      assert.equal(2, calculator.runningTotal);
  })

  it('can accept a series of clicks', function(){
    calculator.numberClick(1);
    calculator.operatorClick('+');
    calculator.numberClick(4);
    calculator.operatorClick('=');
    assert.equal(5 , calculator.runningTotal);
  })

  it('can be cleared', function(){
    calculator.numberClick(1);
    calculator.operatorClick('+');
    calculator.numberClick(4);
    
    calculator.clearClick();
    assert.equal(0, calculator.runningTotal);
  })



});
