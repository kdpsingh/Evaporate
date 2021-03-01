# Evaporate

This package tries to leverge JSweet (Java-to-JavaScript transpiler) to convert H2O POJO files into JavaScript </br>
It then uses browserify to bundle the JavaScript code into a browser-runable bundle code that can run in any web browser

# Instructions
To use this package, git clone this directory and follow these instructions: </br>

1. First, you need a H2O-generated POJO. If you don't have one (or just lazy--I mean come on, who has the time?), just use the one already in this directory: gbm_pojo_test.java
1. Move a copy of your POJO into this directory, and run main.sh in your command line: 
```
> ./main.sh name_of_pojo
```
1. There should now be a JavaScript file with the same name as your pojo (i.e. gbm_pojo_test.js)
1. Next, run the brow.sh command to generate the JavaScript file and HTML file to run your code (entirely in the front-end):
```
> ./brow.sh name_of_pojo.js
```
1. There should now be a new folder in this directory: browser/. cd into that directory and you should see 3 files: index.html, main.js, bundle.js
1. Click on the index.html. You should now be able to generate H2O responses by entering in the corresponding inputs
1. Feel free to modify any of the files to tailor to your needs! Evaporate is <strong>not</strong> meant to be the final solution; it is simply the starting point to get you to be able to display and run your H2O code in the browser. Have fun playing!
