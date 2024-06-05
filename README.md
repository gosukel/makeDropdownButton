# makeDropdownButton

template files for custom dropdown button

## index.html

has the html template for a standard dropdown button and its contents
create parent div ('.dropdown-div')
inside that div, create button ('.dropdown-btn') and another div ('.dropdown-content')
inside '.dropdown-content', create as many anchor tags as you need ('.dropdown-link')

also includes the js script for event listeners for button click, link click, and 'click away' (to close dropdown)

## index.js and makeDropdownButton.js

includes a template of how to implement dynamically created buttons with the dom. provide a parent div for the newly created '.dropdown-div' (which has button and links), as well as object containing the button text, and an array of link information ie. link text, and link urls (for the 'href'). see the 'config2' variable for the template

## makeDropdownStyle.css

contains basic styling for dropdown button and links

## makeDropdownStyle.css
