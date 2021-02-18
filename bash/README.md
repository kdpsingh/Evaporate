# Order of Operations
1. pojoFilter   : filters out POJO to make it h2o-genmodel.jar independent </br>
2. javaFilter	: after JavaScript file is produced, run it to clear up JSweet Java-remnants into JS </br>
3. exports	: append export class to JS classes </br>
4. import	: prepends import class into JS files that calls that JS class </br>

These bash scripts are all called in order in main.sh. To use it, make sure you put main.sh and whatever POJO file you want to convert into JavaScript into the same directory, and then run: </br>
> ./main.sh pojo_file.java
 
