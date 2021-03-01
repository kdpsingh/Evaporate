# Evaporate
<ul>
<li>This package leverages JSweet (Java-to-JavaScript transpiler) to convert H2O POJO files into JavaScript </li>
<li>It then uses browserify to bundle the JavaScript code into bundle code that can run in any web browser</li>
</ul>

# Instructions

To use this package, git clone this directory and follow these instructions: </br>
```
> git clone https://github.com/ML4LHS/Evaporate.git
```
1. Move your H2O POJO into this directory. (If you're just trying it out, use the one already in this directory: gbm_pojo_test.java)
2. Run main.sh in your command line with your POJO as its argument: 
```
> ./main.sh gbm_pojo_test.java
```
3. There should now be a JavaScript file with the same name as your pojo (i.e. gbm_pojo_test.js)
4. Next, run brow.sh command to generate the JavaScript and HTML file:
```
> ./brow.sh gbm_pojo_test.js
```
5. There should now be a new folder in this directory: browser/. There should see 3 files there: index.html, main.js, bundle.js
6. Open index.html. You should now be able to generate H2O responses by entering in the corresponding variables
7. Feel free to modify any of the files to tailor to your needs! Evaporate is <strong>not</strong> meant to be the final solution; it is simply the starting point to get you to be able to display and run your H2O code in the browser. Have fun coding!
