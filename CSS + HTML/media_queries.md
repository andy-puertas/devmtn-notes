## Todd's Focus Questions:
- _What are the default vales for animation timing, and how does each one differ?_
    <details>
    <summary> <code> answer </code> </summary>
    </details>
- _What is the shorthand property in CSS animations?_
    <details>
    <summary> <code> answer </code> </summary>
    </details>
- _How is the keyframe animation approach different from the shorthand?_
    <details>
    <summary> <code> answer </code> </summary>
    </details>
- _What does mobile first development mean?_
    <details>
    <summary> <code> answer </code> </summary>
    </details>
- _When should you use min-width, and when should you use max-width?_
    <details>
    <summary> <code> answer </code> </summary>
    </details>

## What is a media query?
- Initiated with the `@media` call
- Parameter can be conditions in which to apply the new style 
- "breakpoint": the moment our changes take effect

## Where do we put media queries?
- Always place these queries at the bottom of your CSS file
  + whatever is lowest is applied last
  + means the animations will override other styles

## Syntax:
```
@media() {
  .className {
    newStyles: value;
  }
  .otherClass {
    newStyles: value;
    moreStyle: value;
  }
}
```

## Animations!
- Initiated with the `@keyframes` call
- `animation-duration:` how long do we want this animation to run?
- `animation-iteration-count:` how many times do we want this animation to repeat?

## Syntax:
```
@keyframes name-of-animation {
  from { setOfStyles: value }
  to { setOfStyles: newValue }
}

or! 

@keyframes another-animation {
  25% { style: value; otherStyle: otherValue }
  50% { diffStyle: diffValue }
  75% { style: value; otherStyle: otherValue }
  100% { otherStyle: otherValue }
}
```
- doesn't always need to be in increments of 25%
- freedom to manipulate many levels of value