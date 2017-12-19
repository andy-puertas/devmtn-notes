# Best Practices for Testing React Components

## Background

Understanding Component Contracts: "A contract defines the expected behavior of your component and what assumptions are reasonable to have about its usage."

... Writing tests allows us to formally define a component's contract.

We can define these behaviors in our tests:
- a `render` method **_← required_**
- any `props` the component expects to receive
- any `state` the component holds
- how the component reacts to user input (`clicks`, `drags`, `keyboard input`, etc.)
- the `context` in which the component is rendered
- how the component responds to different `methods`
- side effects of lifecycle methods (`componentWillMount`, `componentDidMount`, etc.)

## Determining Behaviors

Ask yourself: 
- _What does my component render?_
- _Does my component render different things under different circumstances?_
- _When I pass a function as a prop, what does my component use it for? How does it use it? Does it call the function, or pass it off to another component?_
- _When the user interacts with my component, what changes?_

## Determing What's Worth Testing

Ask yourself:
- _Will the test have to duplicate the app code **exactly**?_
- _Will making assertions in the test duplicate any behavior that is already covered by (and responsibility of) library code?_
- _From an outsider's perspective, is this detail important or only an internal concern? Can the effect of this internal detail be described using only the component's public API?_

By these rules, one wouldn't test `propTypes` because the documentation is typically already clear and concise. 

By these rules, you might want to test that a `<div>` is always rendered in your component or that the rendered `<div>` contains all other app content.

By these rules, one wouldn't test `inline styles` (unless one anticipates a change during runtime) because new styles could slow things down. 
- ... however, in this example, if the value of `background-image` was expected to change based on a `prop` update, we should test that.

## Sample Test of a LockScreen Component

```
import React from 'react';
import { mount } from 'enzyme';
import Component from './Component';

describe("Component", () => {
    let props;
    let mountedLockScreen;
    const Component = () => {
        if (!mountedLockScreen) {
            mountedLockScreen = mount(
                <LockScreen {...props} />
            );
        }
        return mountedLockScreen;
    }

    beforeEach( () => {
        props = {
            wallpaperPath: undefined,
            userInfoMessage: undefined,
            onUnlocked: undefined
        };
        mountedLockScreen = undefined;
    });

    it("always renders a div", () => {
        const divs = lockScreen().find("div");
        expect(divs.length).toBeGreaterThan(0);
    });

    describe("the rendered div", () => {
        it("contains everything else that gets rendered", () => {
            const divs = lockScreen().find("div");
            const wrappingDiv = divs.first();
            expect(wrappingDiv.children()).toEqual(lockScreen().children());
        })
    });


});
```

### Sources

[This Article about React](https://medium.freecodecamp.org/the-right-way-to-test-react-components-548a4736ab22)

[This Article on using Enzyme](https://hackernoon.com/testing-react-components-with-jest-and-enzyme-41d592c174f)