// Using Matchers

const functions = require('./functions.js');

test('returnTwo() should return 2.', () => {
    expect( functions.returnTwo() ).toEqual( 2 );
});

test('greeting() should return a greeting + an input name.', () => {
    expect( functions.greeting('James') ).toEqual( "Hello, James." );
    expect( functions.greeting('Jill') ).toEqual( "Hello, Jill." );
});

test('add() should add two input numbers together and return the result.', () => {
    expect( functions.add(1, 2) ).toEqual( 3 );
    expect( functions.add(5, 9) ).toEqual( 14 );
})

describe("Math functions:", () => {
    test('multiply() should return the product of two inputs multiplied together', () => {
        expect( functions.multiply(2, 8) ).toEqual( 16 );
        expect( functions.multiply(3, 3) ).toEqual( 9 );    
    })

    test('divide() should divide two nums and return the result', () => {
        expect( functions.divide(4, 2) ).toEqual( 2 );    
        expect( functions.divide(6, 3) ).toEqual( 2 );
    })

    test('subtract() should subtract one num from another num and return the result', () => {
        expect( functions.subtract(9, 6) ).toEqual( 3 );
        expect( functions.subtract(5, 4) ).toEqual( 1 );
    })
});