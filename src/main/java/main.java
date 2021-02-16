import java.io.*;
import java.util.Arrays;

public class main {

  public static void main(String[] args) throws Exception {
    GLM_model_python_1613488863363_1 m = new GLM_model_python_1613488863363_1();

    double[] r = {80, 1, 2.6, 2};

    double[] rawData = new double[m.nfeatures()];
    Arrays.fill(rawData, Double.NaN);

    // Get prediction results
    double[] preds = m.score0(r, rawData);
    System.out.println(Arrays.toString(preds));

  }
}
