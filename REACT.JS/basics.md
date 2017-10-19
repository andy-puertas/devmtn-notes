# React.js! 

## What is a component?
- A page of script saved and later imported and inserted into mainframe code
- Structured similarly to a tree / branches
- Every component can contain CSS, HTML, or/and JavaScript
- Every component _must_ `render()` to be considered valid
    + this means to make seen, to make visual
- A component must be defined with a Capital Letter

## How is a component similar to a function?
- It calls back input to process an output
- Functional component: a component that exports solely a function, not a class 

## Syntax
- `{CURLY BRACES}` indicates JSX to be executed within our HTML
    + in JSX, we use `"className"` instead of `"class"` for the same purpose
- You cannot use `var` for long-term storage in components 
- At the top of your component:
    - `import Thing, { Component } from './path/of/component'; `
        + '/path' will default to a `.js` extension, so you only need to indicate script type if it's _not_ JavaScript
        + when importing a default export, no curly braces are needed
        + when important functions _within_ a component, {curly braces are needed}

# Syntax for Creating a Component

        class This extends Component {
            constructor() {
                things: 'here',
                define: 'your component',
                this.state = {
                    state: state
                }
            }
            
            render() {
                return (
                    <div>
                        <h1>Hello</h1>
                    </div>
                )
            }
        };

        export default This;

## Binding in React
- `"this"` always points to the object in which your method is originally defined
    + if working on `'foo'` method in the `Bar` class, `"this"` indicates the `Bar` class
    + in JS, function context is defined while calling the function, not when defining 

# What do we use state for?
- Anything we want to track change in
- Always set an initial state in the constructor function
- Update state later using `this.setState()` as a function
- State is considered an immutable object in React

