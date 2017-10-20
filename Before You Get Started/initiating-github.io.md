## Setting up a github.io

## Customizing a [Jekyll Theme](https://help.github.com/articles/customizing-css-and-html-in-your-jekyll-theme/#customizing-your-jekyll-themes-css)
1. create a file in `assets/css/style.scss`
2. add the following content to the top of the file, exactly as shown:

   ```
    ---
    ---

    @import "{{ site.theme }}";
   ```
3. throw some customs CSS in there! 

## Customizing a [Jekyll Layout](https://help.github.com/articles/customizing-css-and-html-in-your-jekyll-theme/#customizing-your-jekyll-themes-html-layout)
1. 