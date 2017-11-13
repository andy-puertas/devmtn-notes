# What is `this`

## 4 Rules for determining `this`:
1. Default binding
2. Implicit binding
3. Explicit binding
    - `.call()`
    - `.apply()`
    - `.bind()`
4. New binding

## Methods coming from `React.Component`
- `setState` is an inherited function from the Component constructor
- eventHandlers junk this up

## 4 Ways to bind `this`
1. Bind in the constructor _#classic_
2. Bind in render
    - could be a performance issue
    - make your own damn choices
3. Arrow function in render
    - same caveat as before, `render()`-ing all of those functions could be a big hit
    - arrow functions look outward for `this` value
4. Experimental Class-Properties feature