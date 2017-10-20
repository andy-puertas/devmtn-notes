## Starting with React Native
### following Wes Bos' [Udemy Course](https://www.udemy.com/the-complete-react-native-and-redux-course/learn/v4/content)

REACT | REACT-NATIVE
----- | -------------
knows how a component should behave | knows how to take the output from a component and place it on the screen
knows how to take a bunch of components and make them work together | provides default core components (image, text)
    
## Component Types

Functional Components | Class-Based Components 
--------------------- | ----------------------
used for presenting static data | used for dynamic sources of data
can't handle fetching data | handles any data that might change (fetching data, user events, etc)
easy to write | knows when it gets rendered to the device (useful for data fetching)
typically used for displaying simple data to the user | more code to write
⛔️ | requirement: a render method _must_ be defined 
⛔️ | have the advantage of LifeCycle Methods - know when they are about to be rendered        



## Rules of State
- Definition: a plain JavaScript object used to record and respond to user-triggered events
    - think about state whenever we want to trigger changes based on user activity
    - when we need to update what a component shows, call `this.setState()`
    - only change state with `setState`, **never** `this.state = "this"`
    - state serves as a components internal record keeping
        - as opposed to...
            - parent --> child === props

## Dealing with Scope
- `import` statements come from ES6
- think scope!
    - by default, no file has access to any other global variables 
    - only by importing can we interact with code that exists elsewhere in the project

## When creating components...
we have to tell React Native to render components
- it does not explicitly know to do this on its own
- we must register at least ONE component per screen

## Starting your app:
- only the 'root' component uses AppRegistry
- for every child component we create...
    - instead of rendering it, we export 
- import destructuring:
    - `import ReactNative from 'react-native';` turns into `import { Text } from 'react-native';`
    - `ReactNative.AppRegistry.registerComponent('this', ()=> This);` turns into `AppRegistry.registerComponent('this', ()=>This);`

## Debugging your app:
- Where do console.logs appear in React Native?
    - debug feedback
    - built-in debugger
    - `CMD+D` > dev tools in our simulator > "remote bugger"
    - 'inspect' the dev console 

## Start building 'Albums'
What is this app supposed to look like?
- a single card, displays Album Name, Artist Name at the top
- displays an image of the Album Cover in the body of the card
- "Buy Now" button at the bottom of the card
- "Albums" Title Bar
    - => HEADER, 
    - => CARD, 
    - => CARDSECTION-HEADER, 
    - => CARDSECTION-BODY, 
    - => CARDSECTION-FOOTER

1. Structuring the Header Component
    - 1 component per file 
    - `src` > `components` > `newComponent.js`
    - `import` libraries
    - make component
    - `export` component - make available to other parts of the app

2. Using an exported Component
    - 'component nesting' -- the process of placing one component inside of another
    - `import` the header -- must be capitalized! 
    - nest it inside of the App -- self-closing tag -- `<Header />`
        - only one top level tag can be returned in JSX
        - wrap multiple children in one `<View>` tag

3. Styling the Component
    - not a great default package for React Native
    - we have to do all styling by hand, by ourselves
    - at the foot of the code, `const styles = {}`
        - camelcase! 
    - `View` tag: another primative element that helps us style components
    - Flexbox: allows us to center, position, align our elements
        - 'a system of positioning elements within a container'
        - everything in React Native defaults to the upper lefthand corner
        - `justifyContent` -- used to navigate in the vertical direction
            - `'flex-end'`: bottom of the view
            - `'center'`: center of the view
            - `'flex-start'`: basically default, top of the view
        - `alignItems` -- positioning in the horizontal direction
            - `'flex-start'`: far left of view
            - `'center'`: center of view
            - `'flex-end'`: far righthand view
        - `alignSelf` -- positioning a solo item
    - instead of borders, we use shadow
        - `shadowColor` kicks it off
        - `shadowOffset`
        - `shadowOpacity `

4. Making our Header Reusable
    - we want the Header to reflect the view of whatever screen we're in
    - `const Header = (props) => {}`
    - `header.js` > 
        - `{ props.headerText }` <-- waits and listens for a prop to render
    - `app.js` > 
        - `headerText={ 'Header of this Screen' }` <-- pushes props to the Header component when called 

5. Pulling values in from an API
    - Using Network Requests
    - http://rallycoding.herokuapp.com/api/music_albums
        - 1 AlbumDetail for each fetched album
        - class-based components can achieve this 
        - figure out exactly /where/ you want to make the AJAX request
        - using `axios` to make HTTP requests for data
            - `axios.get('url').then(res=>res)`
        - now what do we do with this data? --> tell `AlbumList` to rerender
            - how do we do that?

6. Re-rendering AlbumList to display Data
    - tracking state in our 'albums'
    - before:

                state = {
                    albums: []
                }

    - after:

                state = {
                    albums: [
                        { name: 'albumOne' },
                        { name: 'albumTwo' }
                    ]
                }

    - 'class-level property' -- immediately underneath the class declaration
        - set an `initialState` value, essentially 
    - `.then(res => this.setState({ albums: res.data }));`
        - pass an object of 'albums' to be filled with response data 
        - `res.data` is whatever Axios is able to pull from that url
    - `.map()` is called for every value in the arr being passed in

7. Wrap our data with Card component
    - `src` > `components` > `Card.js`

8. Wrap the Card component with a CardItem for styling purposes
    - allows us to display multiple structures of data

## Finicky things in react-native:
- by default: React Native does not allow for scroll
- to enable scrolling:
    - identify the content we want to be able to scroll through
    - `import { ScrollView } from react-native`, replace `<View>` with `<ScrollView>`
- `<TouchableOpacity>`: listens for user interaction, registers a 'tap'
