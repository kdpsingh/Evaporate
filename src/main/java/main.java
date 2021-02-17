import java.io.*;
import java.util.Arrays;

public class main {

  public static void main(String[] args) throws Exception {
    DRF_model_python_1613526296143_1 m = new DRF_model_python_1613526296143_1();

    double[] r = {10.0, 10.3, 10.3, 1.2, 89};

    double[] rawData = new double[m.nfeatures()];
    Arrays.fill(rawData, Double.NaN);

    // Get prediction results
    double[] preds = m.score0(r, rawData);
    System.out.println(Arrays.toString(preds));

  }
}
