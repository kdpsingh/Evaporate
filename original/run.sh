javac -cp h2o-genmodel.jar -J-Xmx2g -J-XX:MaxPermSize=128m gbm_pojo_test.java main.java
java -cp .:h2o-genmodel.jar main
rm *.class
