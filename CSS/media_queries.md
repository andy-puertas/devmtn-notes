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