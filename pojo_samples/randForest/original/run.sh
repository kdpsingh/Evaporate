javac -cp h2o-genmodel.jar -J-Xmx2g -J-XX:MaxPermSize=128m DRF_model_python_1613267082863_1.java main.java
java -cp .:h2o-genmodel.jar main
rm *.class
