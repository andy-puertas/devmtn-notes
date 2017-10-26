## Using Matchers to Run Tests in _Jest_

- Best practice is to test exact equality (`toBe()`). However...
- Jest has 'matchers' that let you test values in different ways.

`toBe()` -- uses `===` to test exact equality

`toEqual()` -- checks for value, not literal equality

### Truthiness

Used to distinguish between `undefined`, `null`, and `false`.

- `toBeNull()` matches only `null`
- `toBeUndefined()` matches only `undefined`
- `toBeDefined()` works opposite `toBeUndefined()`
- `toBeTruthy()` matches anything than an `if` statement treats as true
- `toBeFalsy()` matches anything that an `if` statement treats as false

### Numbers

- `toBeGreaterThan()`
- `toBeGreaterThanOrEqual()`
- `toBeLessThan()`
- `toBeLessThanOrEqual()`

### Strings

- `toMatch()`
- `notToMatch()`

### Arrays

- `toContain()`