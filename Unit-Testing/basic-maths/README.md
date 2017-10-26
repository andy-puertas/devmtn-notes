## Basic Unit Tests

### Setup
1. `cd` into `basic-maths`
2. `npm test` will run `jest` on function.tests.js

### Key Steps:

Syntax for creating a new test:
```
test('console.log statement here', () => {
    expect( thisFunction( param1, param2 ) ).toBe( foo );
    expect( thisFunction( param3, param4 ) ).toBe( bar );
})
```

- `console.log`: this statement will appear in the CLI when `jest` runs its tests, so you know more about the function that is throwing the error
- `thisFunction()`: destructure the call if importing from another file
- `params`: declare params for each test on each independent line
- `toBe()`: declare an expectation here. Replace `toBe()` with `toEqual()`, `not.toBe()`, or whatever syntax is necessary
    - These are called 'matchers'
    - for more on matchers, check [this link](http://facebook.github.io/jest/docs/en/using-matchers.html) out