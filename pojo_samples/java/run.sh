javac -cp h2o-genmodel.jar -J-Xmx2g -J-XX:MaxPermSize=128m GLM_model_python_1613185837037_1.java main.java
java -cp .:h2o-genmodel.jar main
rm *.class
