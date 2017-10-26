module.exports = {
    returnTwo: function() {
        return 2;
    },

    greeting: function(name) {
        return `Hello, ${name}.`;
    },

    add: function(num1, num2) {
        let sum = ( num1 + num2 );
        return sum;
    },

    multiply: function(num1, num2) {
        let product = ( num1 * num2 );
        return product;
    },

    divide: function(num1, num2) {
        let dividend = ( num1 / num2 );
        return dividend;
    },

    subtract: function(num1, num2) {
        let total = ( num1 - num2 );
        return total;
    }
}