import java.io.*;
import java.util.Arrays;

public class main {
  private static String modelClassName = "gbm_pojo_test";

  public static void main(String[] args) throws Exception {
    gbm_pojo_test m = new gbm_pojo_test();

    double[] r = {1987.0, 
                  10.0, 
                  14.0, 
                  3.0, 
                  730.0, 
                  Double.NaN, 
                  5.0, 
                  Double.NaN, 
                  Double.NaN, 
                  106.0, 
                  118.0
                  };

    double[] rawData = new double[m.nfeatures()];
    Arrays.fill(rawData, Double.NaN);

    // Get prediction results
    double[] preds = m.score0(r, rawData);
    System.out.println(Arrays.toString(preds));

  }
}
