import java.util.Map;

public class GLM_model_python_1613185837037_1 {
  public boolean isSupervised() { return true; }
  public int nfeatures() { return 4; }
  public int nclasses() { return 2; }

  // Names of columns used by model.
  public static final String[] NAMES = NamesHolder_GLM_model_python_1613185837037_1.VALUES;
  // Number of output classes included in training data response column.
  public static final int NCLASSES = 2;

  // Column domains. The last array contains domain of response column.
  public static final String[][] DOMAINS = new String[][] {
    /* AGE */ null,
    /* RACE */ null,
    /* PSA */ null,
    /* GLEASON */ null,
    /* CAPSULE */ GLM_model_python_1613185837037_1_ColInfo_4.VALUES
  };
  // Prior class distribution
  public static final double[] PRIOR_CLASS_DISTRIB = null;
  // Class distribution used for model building
  public static final double[] MODEL_CLASS_DISTRIB = null;

  // public GLM_model_python_1613185837037_1() { super(NAMES,DOMAINS,"CAPSULE"); }
  public String getUUID() { return Long.toString(-131003003702305964L); }

  public static double GLM_logitInv( double x ) { return 1.0 / (Math.exp(-x) + 1.0); }


  // Pass in data in a double[], pre-aligned to the Model's requirements.
  // Jam predictions into the preds[] array; preds[0] is reserved for the
  // main prediction (class for classifiers or value for regression),
  // and remaining columns hold a probability distribution for classifiers.
  public final double[] score0( double[] data, double[] preds ) {
    final double [] b = BETA.VALUES;
    for(int i = 0; i < 0; ++i) if(Double.isNaN(data[i])) data[i] = CAT_MODES.VALUES[i];
    for(int i = 0; i < 4; ++i) if(Double.isNaN(data[i + 0])) data[i+0] = NUM_MEANS.VALUES[i];
    double eta = 0.0;
    for(int i = 0; i < CATOFFS.length-1; ++i) {
      int ival = (int)data[i];
      if(ival != data[i]) throw new IllegalArgumentException("categorical value out of range");
      ival += CATOFFS[i];
      if(ival < CATOFFS[i + 1])
        eta += b[ival];
    }
    for(int i = 0; i < b.length-1-0; ++i)
    eta += b[0+i]*data[i];
    eta += b[b.length-1]; // reduce intercept
    double mu = GLM_logitInv(eta);
    preds[0] = (mu >= 0.30183246546652454) ? 1 : 0; // threshold given by ROC
    preds[1] = 1.0 - mu; // class 0
    preds[2] =       mu; // class 1
    return preds;
  }
    public static class BETA implements java.io.Serializable {
      public static final double[] VALUES = new double[5];
      static {
        BETA_0.fill(VALUES);
      }
      static final class BETA_0 implements java.io.Serializable {
        static final void fill(double[] sa) {
          sa[0] = -0.02168030732498942;
          sa[1] = -0.5081360879035385;
          sa[2] = 0.02832790010586815;
          sa[3] = 1.0731274341195762;
          sa[4] = -5.766595526099149;
        }
      }
}
// Imputed numeric values
    static class NUM_MEANS implements java.io.Serializable {
      public static final double[] VALUES = new double[4];
      static {
        NUM_MEANS_0.fill(VALUES);
      }
      static final class NUM_MEANS_0 implements java.io.Serializable {
        static final void fill(double[] sa) {
          sa[0] = 66.03947368421103;
          sa[1] = 1.095490716180382;
          sa[2] = 15.408631578947343;
          sa[3] = 6.384210526315727;
        }
      }
}
// Imputed categorical values.
    static class CAT_MODES implements java.io.Serializable {
      public static final int[] VALUES = new int[0];
      static {
      }
}
    // Categorical Offsets
    public static final int[] CATOFFS = {0};
}
// The class representing training column names
class NamesHolder_GLM_model_python_1613185837037_1 implements java.io.Serializable {
  public static final String[] VALUES = new String[4];
  static {
    NamesHolder_GLM_model_python_1613185837037_1_0.fill(VALUES);
  }
  static final class NamesHolder_GLM_model_python_1613185837037_1_0 implements java.io.Serializable {
    static final void fill(String[] sa) {
      sa[0] = "AGE";
      sa[1] = "RACE";
      sa[2] = "PSA";
      sa[3] = "GLEASON";
    }
  }
}
// The class representing column CAPSULE
class GLM_model_python_1613185837037_1_ColInfo_4 implements java.io.Serializable {
  public static final String[] VALUES = new String[2];
  static {
    GLM_model_python_1613185837037_1_ColInfo_4_0.fill(VALUES);
  }
  static final class GLM_model_python_1613185837037_1_ColInfo_4_0 implements java.io.Serializable {
    static final void fill(String[] sa) {
      sa[0] = "0";
      sa[1] = "1";
    }
  }
}

