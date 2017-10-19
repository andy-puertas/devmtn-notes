### CSS Properties

## Position
* defaults to static, where elements render in order as they appear in the document flow
* `absolute`: element is positioned relative to its first positioned ancestor element
* `fixed`: element is positioned relative to the browser window
* `relative`: the element is positioned relative to its normal position (so left: 20px adds 20 pixels to the element’s left position)
* `initial`: sets this property to its default value
* `inherit`: inherits this property from its parent element

## Display
- FlexBox: used alternatively to CSS position, clear, float, etc. elements 
    + [Handy FlexBox Guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
    + solves a lot of varying layout issues
    + initiated with `display: flex;` under a group element defined 
        - this tells your page that each element within a group is going to share the same ratio of space 
    
    * `flex-direction:` allows elements to stack in a specified arrangement
        + `row` — default - flexible items are displayed horizontally, as a row
        + `row-reverse` — what do you think?
        + `column` — flexible items are displayed vertically, in a column
        + `column-reverse` — again…

    * `flex-wrap:` 
        + `nowrap` — default - specifies that flexible items will not wrap 
        + `wrap` — specifies that flexible items will wrap if necessary 
        + `wrap-reverse` — specifies that the flexible items will wrap, if necessary, in reverse order 

    * `justify-content:` specifies how extra space should be divided in the flex-direction
        + `center` — all items are clustered together at the center
        + `flex-start` — all items are clustered together at the start of the flex-direction
        + `flex-end` — all items are clustered together at the end of the flex-direction
        + `space-between` — items are spaced out completely, leaving no room at the sides
        + `space-around` — space is evenly distributed between the items, leaving space at sides 

    * `align-items:` specifies how extra space should be divided in the other direction // works opposite justify-content
        + `flex-start` — cross-start margin edge of the items is placed on the cross-start line
        + `flex-end` — cross-end margin edge of the items is placed on the cross-end line
        + `center` — items are aligned at the center of the flex area // centered in the cross-axis
        + `baseline` — items are aligned at the baseline of the flex area 
        + `stretch` — default - flexible items are stretched to fill the entire flex area // can be overrode using a width measurement 