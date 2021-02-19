Order of Operations
================
1. <strong>pojoFilter.sh</strong> filters out POJO to make it h2o-genmodel.jar independent </br>
1. <strong>javaFilter.sh</strong> clear up JSweet-Java remnants in the outputted JS </br>
1. <strong>exports.sh</strong> append export class to JS classes </br>
1. <strong>import.sh</strong> prepends import class into JS files </br>

These bash scripts are all called in order in main.sh. To use it, make sure you put main.sh and whatever POJO file you want to convert into JavaScript into the same directory, and then run: </br>
```
> ./main.sh pojo_file.java
```
