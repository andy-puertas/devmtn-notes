# ROUND ONE

Inline elements default width is... 
<details>
<summary> <code> answer </code> </summary>

only what they need

</details>

What is the correct HTML element for inserting a line break? 
<details>
<summary> <code> answer </code> </summary>

`<br>`

</details>

What doctype is correct for HTML5? 
<details>
<summary> <code> answer </code> </summary>

`<!DOCTYPE html>`

</details>

How can you make a bulleted list? 
<details>
<summary> <code> answer </code> </summary>
    
`<ul>`

</details>

What is the correct HTML for inserting an image? 
<details>
<summary> <code> answer </code> </summary>

`img src = “image.jpg" alt = “MyImage"`

</details>

What is the correct HTML for adding a background color? 
<details>
<summary> <code> answer </code> </summary>

`body style = “background-color: yellow;”`
`background-color` is not a CSS style reference
inline styling is the only option

</details>

Block elements are normally displayed without starting a new line: TRUE or FALSE? 
<details>
<summary> <code> answer </code> </summary>

FALSE
+ forces a new line by occupying the entire width of the block above 

</details>

Which of the following does not need a pair tag?
- `<i> </i>`   
- `<img>` 
- `<u>`
- `<p> </p>`

<details>
<summary> <code> answer </code> </summary>

- `<img>` 

</details>

Block elements default width is... 
<details>
<summary> <code> answer </code> </summary>

the full width of the page. 
+ inline elements only take what they need while block elements take the entire width

</details>

A webpage displays a picture. What tag was used to display that picture? 
<details>
<summary> <code> answer </code> </summary>

`<img>`
+ the “tag” refers to the beginning of the entire line of command in HTML, not attributes 
    - like `src=` or `style=` or `class=` designations within the tag

</details>

What should be the first tag in any HTML document? 
<details>
<summary> <code> answer </code> </summary>

`<html>`

</details>

Choose the correct HTML tag for the smallest size heading:
- `<head>`   
- `<h6>`   
- `<heading>`
- `<h1>`

<details>
<summary> <code> answer </code> </summary>
  
- `<h6>`   
</details>

- Which HTML attribute specifies an alternate text for an image, if image cannot be displayed? `<alt>`

- Span is a(n) `<inline element>`.

- Which HTML element defines the title of a document? `<title>`
    + where does it go? Inside of the `<head>` 

- Inline elements are normally displayed without starting a new line: `TRUE`

- Which is the correct HTML element for the largest heading?
    - `<h6>`      
    - `<head>`  
    - `<h1>`
    - `<heading>` 

- The part of an HTML element that modifies how the base is rendered are the `attributes`. 

- In HTML documents, the tags can be written in both uppercase or lowercase `TRUE`.
    + HTML is case insensitive. It has no preference. 

- How can you make a numbered list?
    - `<ol>`          
    - `<ul>`
    - `<list>`        
    - `<dl>`

- Which attribute is used to name an element uniquely?
    - `class`      
    - `dot`
    - `id` <-- this one        
    - all of the above


## ROUND TWO

- Which one of these will select a group of elements with the same class?
    - `.items` <-- correct!                 
    - `items` <— elements 
    - `#items` <— id        
    - `{items}` <— not a selector 

- What does CSS stand for? 

    ```
    C ascading 
        S tyle 
            S heets
    ``` 

+ “cascading”: it reads from top to bottom
+ if there is ever a conflict, the last command declared wins. 

- Which changes the font to Arial style? 
    + `font-family: Arial;`

- Where do you place styles? Inside the `<style></style>` tags.

- Which changes the size of the font?
    + `font-size: 30 px;`

- Which of these will select an id tag?
    - `<style> first paragraph </style>`    
    - `first_paragraph`
    - `#first-paragraph` <-- correct answer                               
    - `.first_paragraph` <— looks for class 

- What does padding do? 
    + Adds space between content and the containing box/border. 
    + `margin:` adds space between the border and other elements.  

- Which of these CSS statements will change the color of the font?
    - `color: red;` <-- correct answer                   
    - `class= “red”`
    - `red: font;`                    
    - `font-color: red;`

- Creates a separate section of text for styling purposes: `<div></div>`.


## ROUND THREE

- From inside to outside what is the correct order? 
    + `Element` -> `Padding` -> `Border` -> `Margin`. 

- How do I create a 1px wide green frame around my image? 
    + `border: 1px solid green;`
    + `width`, `style`, `color` --  always in this order

- How do I set the margin to 1px on all sides except the right (the right one should be 5px)? 
    - `margin: 1px 5px 1px 1px;` _or_ `margin: 1px; margin-right: 5px;`
    + `margin-right: 5px;` overrides the rest of the settings for the one side

- What is an example of a tag with a default display type of block? 
    - `<div> or <p>`

- What part of the box model represent the space between the content and the border? `padding`. 
    + `margin` is between the border and the other elements 

- How do you center an element with a display property of block? `margin: 0 auto;`
    + `text-align: center;` works for centering text inside of something
    + `margin: 0 auto;` will take any content and center it horizontally
    + tag names never influence layout properties 

- Which is the most specific type of CSS selector? `inline style`. 
    + element is the least specific type of selector

- What property would you use to make the text bold? `font-weight: bold;`
    + font-weight affects darkness/lightness of the font element

- What display type gives an element its own line? 
    + block

- What property controls how round the corners of an element are? 
    + border-radius