## Documents:
- All HTML documents must start with a document type declaration: `<!DOCTYPE html>`.
- The HTML document itself begins with `<html>` and ends with `</html>`.
- The visible park of the HTML document is between `<body>` and `</body>`.
- For example…

        <!DOCTYPE html>
        <html>
            <body>
                <h1>My First Heading</h1>
                <p>My first paragraph.</p>
            </body>
        </html> 

## Headings: 
- HTML headings are ranked in order of important. 1 is most important and the larger value is of less importance. 
- HTML headings are defined with the `<h1>` `<h2>` `<h3>` `<h4>` `<h5>` `<h6>` `<h7>` tags.
- `<h1>` defines the most important heading. `<h7>` defines the least important. 
- For example…

        <h1>This is heading 1</h1>
        <h2>This is heading 2</h2>
        <h3>This is heading 3</h3>

- Search engines use the headings to index the structure and content of your web pages.

### Horizontal Rules:
+ The `<hr>` tag defines a thematic break in an HTML page. Most often displayed as a horizontal rule. 
+ The `<hr>` element is used to separate content (or define a change) in an HTML page. 
+ The HTML `<head>` element has nothing to do with HTML headings. 
+ The `<head>` is a container for metadata. HTML metadata is about the document. This metadata is not displayed. 
+ The `<head>` element is placed between the `<html>` tag and the `<body>` tag
+ For example…

        <!DOCTYPE html>
        <html>
        <head>
            <title>My First HTML</title>
            <meta charset=“UTF-8”>
        </head>
        <body>
        .
        .
        .

## Paragraphs:
- Defined using the `<p>` `</p>` tags.
- Browsers automatically add some white space (a margin) before and after a paragraph. Browsers also remove any extra spaces and extra lines when the page is displayed.
- For example…

        <p>
        This paragraph
        contains a lot of lines
        in the source code,
        but the browser
        ignores it. 
        </p>
    
## HTML Links:
- Defined using the `<a>` `</a>` tags.
- The link’s destination is specified in the href attribute. This is used to provide additional information about the HTML element. 
- For example…

        <a href =“https://devmountain.com”>This is a link</a>

## HTML Images:
- Defined using the `<img>` tag. 
- Defined attributes: source file (`src`), alternative text (`alt`), `width`, and `height`. 
- For example…

        <img src=“devmtn.jpg” alt=“devmtn.com” width=“104” height=“142”>

## Nested HTML Elements Explained… 
- All HTML documents can be nested (elements containing other elements). 
- The key is knowing which element defines what within the HTML document. 

    - `<!DOCTYPE html>` : declares the format of whole document // what language are we speaking in?
    - => `<html>` : defines the whole document // has a start and end tag 
    - => => `<body>` : defines the document body // has a start and end tag 
    - => => => `<h1> My First Heading </h1>`  : defines a heading // has a start and end tag 
    - => => => `<p> My first paragraph. </p>` : defines a paragraph // has a start and end tag 
    - => => `</body>` 
    - => `</html> `


## Attributes 
- All HTML elements can have attributes. They provide additional information about an element. Always specified in the start tag. Typically come in name/value pairs like: name=“value"
    * `lang=` — declares the language of the document in the `<html>` tag. 
    * `title=` — declares the title of the paragraph in the `<p>` element. Specifies extra information about an element (displayed as a tool tip).     
    * `href=` — defines an HTML image within the `<img>` tag. The filename of the source (`src`), and the size of the image (width and height) are all provided as separate attributes. 
    * `alt=` — specifies an alternative text to be used when an image cannot be displayed, defined in the <img> tag. Is read out loud by screenreaders. 
    * `disabled=` — specifies that an input element should be disabled. 
    * `id=` — specifies a unique id for the element. 
    * `style=` — specifies an inline CSS style for an element.


## STRING WRAP METHODS 
* `anchor()` — creates an anchor
* `big()` — displays string using a big font
* `blink()` — displays a blinking string
* `bold()` — displays a string in bold
* `fixed()` — displays a string using a fixed-pitch font
* `fontcolor()` — displays a string using a specified color
* `fontsize()` — displays a string using a specified size
* `italics()` — displays a string in italic
* `link()` — displays a string as a hyperlink
* `small()` — displays a string using a small font
* `strike()` — displays a string with a strikethrough
* `sub()` — displays a string as subscript text
* `sup()` — displays a string as superscript text