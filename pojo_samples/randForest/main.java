import java.io.*;
import java.util.Arrays;

public class main {

  public static void main(String[] args) throws Exception {
    DRF_model_python_1613267082863_1 m = new DRF_model_python_1613267082863_1();

    double[] r = {360.0,
                  175.0,
                  3821.0,
                  11.0,
                  73.0
                  };

    double[] rawData = new double[m.nfeatures()];
    Arrays.fill(rawData, Double.NaN);

    // Get prediction results
    double[] preds = m.score0(r, rawData);
    System.out.println(Arrays.toString(preds));

  }
}
