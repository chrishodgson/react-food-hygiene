Introduction 
========

Small web application built using ReactJs to show a summary of food hygiene ratings across the establishments in a local authority. 

Assumptions
========

- The Establishments API will return all establishments for a particular local authority without requiring paging (ie pageSize=0).

Installation
========

- see `System Requirements` below
- clone the repository: `git clone https://github.com/chrishodgson/react-food-hygiene.git` 
- cd into the repository folder and run `npm install`
- run webpack: `./node_modules/.bin/webpack`
- double click on the `index.html` to open in a web browser

System Requirements
========

- node and npm # https://nodejs.org/

Browser Support
========

This app uses jQuery and Bootstrap which have certain restrictions when it comes to browser support, in particular Internet Explorer. More info...   
 
- https://jquery.com/browser-support/
- http://getbootstrap.com/getting-started/#support

Improvements
========

- Cache the list of local authorities and ratings returned for each Local Authority to improve performance    
- Add unit tests    
