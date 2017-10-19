Redux
=====

## Pre-Class
- Redux is _not_ React-specific software
- Redux allows us to code our components to communicate with each other, but it is not inherent functionality of this software
- In React, we strive for a unidirectional data flow: TOP DOWN, never bottom to top
- "Redux provides a pattern that allow us to keep state in one place and interact with it from anywhere. Anytime the state changes, instead of passing that change down the line of components to the children components who need it, those components will be notified of the change directly, so they can rerender. Similarly, a component communicates necessary changes to state directly to the store, where all the global state management happens.”
- Immutability is essential: we don’t want our updated components to reset the original assignment. Creating a new state is key. Ways to make this easier: 
    - Use `Object.assign( )` and pass in a new empty object (`{}`) as the first parameter and `state` as another parameter. 
        - This will create a new object with all the properties from any objects that you pass in.
        - `return Object.assign({}, state, {prop: newValue});`
    - Use the spread operator `(...)` instead of `.push( )`. The spread operator takes all the elements from an array. This way, you can make sure all of the elements from the old state will wtill be there, and it will still be a completely new array.
        - `return [...state, newValue, newValue2];`
- Redux helps simplify this state-tracking process

## In-Class
### What's the problem with distant components in React?
- Connecting them is a nightmare
- Cumbersome and error-prone
- Parent components are responsible for maintaining unnecessary states

### What is Redux? Why/when do we use it?
- Redux is the store that holds app state
- The state is meant to be shared with components that need it
- Simplifies means of contact between distant components
- We use redux whenever it's easier than using React state
- Use Redux when you need to streamline communication between non-parent-child (grandparent-grandchild, uncle-child, a child being referred to globally)
- Rather than explicitly telling React to update state, we tell Redux that an action occured. The reducers decide how to update their state(s)

### What are the steps to add Redux to a React app?
- `npm i --save redux react-redux`
- `import { Provider } from 'react-redux';` 
- in `index.js` --> wrap `<App>` in `<Provider>` tags, key step

### What is a store?
- Where we create and keep state that is meant to be shared across the app
- `import { createStore } from 'redux’;`
- `{ applyMiddleware } from ‘redux’; `
- `{ combineReducers } from ‘redux’;` allows you to combine multiple reducers and create one, massive encompassing reducer

### What is a reducer? What does the reducer do for us in Redux?
- A constructor function within our store
- Receives state and action type
- Determines when state needs to update, dependent on instances occuring within your app
- When an action happens, new state should update

### What is immutability? Why do we use it?
- Changes made are not reflected on the original. They are immutable.
- What makes re-rendering our app quicker
- Redux requires that we don't mutate state
- Instead, we create a copy and modify that copy

# Vocab Words
- `action`: a plain JavaScript obkect. Describes what happened. Every action has a type. Actions may optionally have a payload.
- `action creator`: a function that returns an action.
- `dispatch`: the term we use to send an action to the store.

# Steps
1. Basics
- Create a Store in `src` > `redux-stuff` > `store.js`
- Inside of our store, we need a `reducer`
- Hook app to store with `<Provider>` in `index.js`
- The `<Provider>` needs a store component --> `<Provider store={store}>`
- Hook components to store with `connect()` and `mapStateToProps`

2. Allow Data Changes
- Create `reducer` with actions and action creators
- import `{ loginAs }` from `'./redux-stuff/reducer'`
- Dispatch actions with `dispatch`
- `onClick={ ()=>dispatch(whateverYoureDispatching()) }`
- Don't forget to (call) the function

