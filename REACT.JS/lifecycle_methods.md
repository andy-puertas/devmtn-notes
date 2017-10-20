## Todd's Focus Questions:
- _What are the differences between props and state?_
- _How do we update values on state? Why do we do it this way?_
- _In JavaScript, what are events?_
- _How do we use props to pass information from a parent component to a child component?_

## Overview
- Components allow you to split the UI into independent, reusable pieces, and think about each piece in isolation. 
- `React.Component` is an abstract base class, so we refer to it indirectly. 
- Every `React.Component` has a `render()` method. 
- You define a Component as a plain JavaScript class:

        class Greeting extends React.Component {
            render() {
                return <h1>Hello, {this.props.name}</h1>;
            }
        }

## The Component Lifecycle
- Each component exhibits the same lifecycle methods that you can override to run code at particular times in the process. 

- Methods prefixed with... 
    - will: called right before something happens
    - did: called right after something happens

* **Mounting** — called when an instance of a component is being created and inserted into the DOM:
    - `constructor()`
        * Called before the component is mounted 
        * Where state and bind is initialized

    - `componentWillMount()`
        * Invoked immediately before mounting occurs
        * Avoid introducing any side-effects or subscriptions in this method
        * Only lifecycle hook called on server rendering 

    - `render()`
    - `componentDidMount()`
        * Invoked immediately after a component is mounted
        * Initialization that require DOM nodes should go here
        * If data is needed from a remote endpoint, this is a good place to initiate the request

* **Updating** — can be caused by changes to `props` or `state`. Called when a component is being re-rendered:
    - `componentWillReceiveProps()`
        * Invoked before a mounted component receives new props
    
    - `shouldComponentUpdate()`
        * Used to let React know if a component’s output is not affected by the current change in state or props
        * Default behavior is to re-render on every state change
    
    - `componentWillUpdate()`
        * Invoked immediately before rendering when new props or state are being received 
        * Cannot call `this.setState()` here
    
    - `render()`
        * Required method for all components
        * It should examine `this.props` and `this.state` and return a single React element when called
    
    - `componentDidUpdate()`
        * Invoked immediately after updating occurs 
        * An opportunity to operate on the DOM when the component has already been updated
        * Good place to do network requests (as long as you compare prev props to current props)

* **Unmounting** — called when a component is being removed from the DOM:
    - `componentWillUnmount()` 
        * Invoked immediately before a component is unmounted and destroyed. 
        * Perform any necessary cleanup here (i.e. invalidating timers, canceling network requests, cleaning up DOM elements created in an earlier stage)
