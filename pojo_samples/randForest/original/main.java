import java.io.*;
import hex.genmodel.easy.RowData;
import hex.genmodel.easy.EasyPredictModelWrapper;
import hex.genmodel.easy.prediction.*;
import java.lang.Math;



public class main {
  private static String modelClassName = "DRF_model_python_1613267082863_1";

  public static void main(String[] args) throws Exception {
    hex.genmodel.GenModel rawModel;
    rawModel = (hex.genmodel.GenModel) Class.forName(modelClassName).newInstance();
    EasyPredictModelWrapper model = new EasyPredictModelWrapper(rawModel);
/*"displacement";
      sa[1] = "power";
      sa[2] = "weight";
      sa[3] = "acceleration";
      sa[4] = "year";*/
    RowData row = new RowData();
    row.put("displacement", "360");
    row.put("power", "175");
    row.put("weight", "3821");
    row.put("acceleration", "11");
    row.put("year", "73");

    BinomialModelPrediction p = model.predictBinomial(row);
    System.out.println("Label (aka prediction) is flight departure delayed: " + p.label);
    System.out.print("Class probabilities: ");
    for (int i = 0; i < p.classProbabilities.length; i++) {
      if (i > 0) {
        System.out.print(",");
      }
      System.out.print(p.classProbabilities[i]);
    }
    System.out.println("");
  }
}