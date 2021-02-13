import java.io.*;
import java.util.Arrays;

public class main {
  private static String modelClassName = "GLM_model_python_1613185837037_1";

  public static void main(String[] args) throws Exception {
    GLM_model_python_1613185837037_1 m = new GLM_model_python_1613185837037_1();

    double[] r = {80, 1, 2.6, 2};

    double[] rawData = new double[m.nfeatures()];
    Arrays.fill(rawData, Double.NaN);

    // Get prediction results
    double[] preds = m.score0(r, rawData);
    System.out.println(Arrays.toString(preds));

  }
}
