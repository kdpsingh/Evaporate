import java.util.*;

class GenMod {
  public static int getPrediction(double[] preds, double[] priorClassDist, double[] data, double threshold) {
    if (preds.length == 3) {
      return getPredictionBinomial(preds, threshold);
    } else {
      return getPredictionMultinomial(preds, priorClassDist, data);
    }
  }

  public static int getPredictionBinomial(double[] preds, double threshold) {
    return (preds[2] >= threshold) ? 1 : 0; //no tie-breaking
  }

  public static int getPredictionMultinomial(double[] preds, double[] priorClassDist, double[] data) {
    List<Integer> ties = new ArrayList<>();
    ties.add(0);
    int best=1, tieCnt=0;   // Best class; count of ties
    for( int c=2; c<preds.length; c++) {
      if( preds[best] < preds[c] ) {
        best = c;               // take the max index
        tieCnt=0;               // No ties
      } else if (preds[best] == preds[c]) {
        tieCnt++;               // Ties
        ties.add(c-1);
      }
    }
    if( tieCnt==0 ) return best-1; // Return zero-based best class

    long hash = 0;              // hash for tie-breaking
    if( data != null )
      for( double d : data ) hash ^= Double.doubleToRawLongBits(d) >> 6; // drop 6 least significants bits of mantissa (layout of long is: 1b sign, 11b exp, 52b mantisa)

    if (priorClassDist!=null) {
      assert(preds.length==priorClassDist.length+1);
      // Tie-breaking based on prior probabilities
      // Example: probabilities are 0.4, 0.2, 0.4 for a 3-class problem with priors 0.7, 0.1, 0.2
      // Probability of predicting class 1 should be higher than for class 3 based on the priors
      double sum = 0;
      for (Integer i : ties) { //ties = [0, 2]
        sum += priorClassDist[i]; //0.7 + 0.2
      }
      // sum is now 0.9
      Random rng = new Random(hash);
      double tie = rng.nextDouble(); //for example 0.4135 -> should pick the first of the ties, since it occupies 0.7777 = 0.7/0.9 of the 0...1 range, and 0.4135 < 0.7777
      double partialSum = 0;
      for (Integer i : ties) {
        partialSum += priorClassDist[i] / sum; //0.7777 at first iteration, 1.0000 at second iteration
        if (tie <= partialSum)
          return i;
      }
    }

    // Tie-breaking logic (should really never be triggered anymore)
    double res = preds[best];    // One of the tied best results
    int idx = (int)hash%(tieCnt+1);  // Which of the ties we'd like to keep
    for( best=1; best<preds.length; best++)
      if( res == preds[best] && --idx < 0 )
        return best-1;          // Return best
    throw new RuntimeException("Should Not Reach Here");
  }

}

public class DRF_model_python_1613267082863_1  {
  public boolean isSupervised() { return true; }
  public int nfeatures() { return 5; }
  public int nclasses() { return 2; }

  // Names of columns used by model.
  public static final String[] NAMES = NamesHolder_DRF_model_python_1613267082863_1.VALUES;
  // Number of output classes included in training data response column.
  public static final int NCLASSES = 2;

  // Column domains. The last array contains domain of response column.
  public static final String[][] DOMAINS = new String[][] {
    /* displacement */ null,
    /* power */ null,
    /* weight */ null,
    /* acceleration */ null,
    /* year */ null,
    /* economy_20mpg */ DRF_model_python_1613267082863_1_ColInfo_5.VALUES
  };
  // Prior class distribution
  public static final double[] PRIOR_CLASS_DISTRIB = {0.3723076923076923,0.6276923076923077};
  // Class distribution used for model building
  public static final double[] MODEL_CLASS_DISTRIB = {0.3723076923076923,0.6276923076923077};

  public String getUUID() { return Long.toString(-383297264146166539L); }

  // Pass in data in a double[], pre-aligned to the Model's requirements.
  // Jam predictions into the preds[] array; preds[0] is reserved for the
  // main prediction (class for classifiers or value for regression),
  // and remaining columns hold a probability distribution for classifiers.
  public final double[] score0( double[] data, double[] preds ) {
    java.util.Arrays.fill(preds,0);
    DRF_model_python_1613267082863_1_Forest_0.score0(data,preds);
    DRF_model_python_1613267082863_1_Forest_1.score0(data,preds);
    DRF_model_python_1613267082863_1_Forest_2.score0(data,preds);
    DRF_model_python_1613267082863_1_Forest_3.score0(data,preds);
    DRF_model_python_1613267082863_1_Forest_4.score0(data,preds);
    DRF_model_python_1613267082863_1_Forest_5.score0(data,preds);
    DRF_model_python_1613267082863_1_Forest_6.score0(data,preds);
    DRF_model_python_1613267082863_1_Forest_7.score0(data,preds);
    DRF_model_python_1613267082863_1_Forest_8.score0(data,preds);
    DRF_model_python_1613267082863_1_Forest_9.score0(data,preds);
    double sum = 0;
    for(int i=1; i<preds.length; i++) { sum += preds[i]; }
    if (sum>0) for(int i=1; i<preds.length; i++) { preds[i] /= sum; }
    preds[0] = GenMod.getPrediction(preds, PRIOR_CLASS_DISTRIB, data, 0.8000310820571308);
    return preds;
  }
}
// The class representing training column names
class NamesHolder_DRF_model_python_1613267082863_1 implements java.io.Serializable {
  public static final String[] VALUES = new String[5];
  static {
    NamesHolder_DRF_model_python_1613267082863_1_0.fill(VALUES);
  }
  static final class NamesHolder_DRF_model_python_1613267082863_1_0 implements java.io.Serializable {
    static final void fill(String[] sa) {
      sa[0] = "displacement";
      sa[1] = "power";
      sa[2] = "weight";
      sa[3] = "acceleration";
      sa[4] = "year";
    }
  }
}
// The class representing column economy_20mpg
class DRF_model_python_1613267082863_1_ColInfo_5 implements java.io.Serializable {
  public static final String[] VALUES = new String[2];
  static {
    DRF_model_python_1613267082863_1_ColInfo_5_0.fill(VALUES);
  }
  static final class DRF_model_python_1613267082863_1_ColInfo_5_0 implements java.io.Serializable {
    static final void fill(String[] sa) {
      sa[0] = "0";
      sa[1] = "1";
    }
  }
}

class DRF_model_python_1613267082863_1_Forest_0 {
  public static void score0(double[] fdata, double[] preds) {
    preds[1] += DRF_model_python_1613267082863_1_Tree_0_class_0.score0(fdata);
    preds[2] += DRF_model_python_1613267082863_1_Tree_0_class_1.score0(fdata);
  }
}
class DRF_model_python_1613267082863_1_Tree_0_class_0 {
  static final double score0(double[] data) {
    double pred =      (data[3 /* acceleration */] <13.750391f ? 
         (data[0 /* displacement */] <303.10547f ? 
            0.33333334f : 
            1.0f) : 
         (Double.isNaN(data[4]) || data[4 /* year */] <79.5f ? 
             (Double.isNaN(data[0]) || data[0 /* displacement */] <212.8711f ? 
                 (Double.isNaN(data[2]) || data[2 /* weight */] <2274.5f ? 
                    0.0f : 
                     (Double.isNaN(data[2]) || data[2 /* weight */] <2754.5f ? 
                        0.08695652f : 
                        0.2f)) : 
                 (data[0 /* displacement */] <231.87637f ? 
                    0.5833333f : 
                     (Double.isNaN(data[3]) || data[3 /* acceleration */] <16.721874f ? 
                        1.0f : 
                        0.8181818f))) : 
             (Double.isNaN(data[1]) || data[1 /* power */] <82.5f ? 
                0.0f : 
                 (data[2 /* weight */] <2853.5f ? 
                    0.0f : 
                    0.2f))));
    return pred;
  } // constant pool size = 42B, number of visited nodes = 10, static init size = 0B
}

class DRF_model_python_1613267082863_1_Tree_0_class_1 {
  static final double score0(double[] data) {
    double pred =      (data[3 /* acceleration */] <13.750391f ? 
         (data[0 /* displacement */] <303.10547f ? 
            0.6666667f : 
            0.0f) : 
         (Double.isNaN(data[4]) || data[4 /* year */] <79.5f ? 
             (Double.isNaN(data[0]) || data[0 /* displacement */] <212.8711f ? 
                 (Double.isNaN(data[2]) || data[2 /* weight */] <2274.5f ? 
                    1.0f : 
                     (Double.isNaN(data[2]) || data[2 /* weight */] <2754.5f ? 
                        0.9130435f : 
                        0.8f)) : 
                 (data[0 /* displacement */] <231.87637f ? 
                    0.41666666f : 
                     (Double.isNaN(data[3]) || data[3 /* acceleration */] <16.721874f ? 
                        0.0f : 
                        0.18181819f))) : 
             (Double.isNaN(data[1]) || data[1 /* power */] <82.5f ? 
                1.0f : 
                 (data[2 /* weight */] <2853.5f ? 
                    1.0f : 
                    0.8f))));
    return pred;
  } // constant pool size = 42B, number of visited nodes = 10, static init size = 0B
}


class DRF_model_python_1613267082863_1_Forest_1 {
  public static void score0(double[] fdata, double[] preds) {
    preds[1] += DRF_model_python_1613267082863_1_Tree_1_class_0.score0(fdata);
    preds[2] += DRF_model_python_1613267082863_1_Tree_1_class_1.score0(fdata);
  }
}
class DRF_model_python_1613267082863_1_Tree_1_class_0 {
  static final double score0(double[] data) {
    double pred =      (Double.isNaN(data[2]) || data[2 /* weight */] <3096.5f ? 
         (Double.isNaN(data[2]) || data[2 /* weight */] <2759.5f ? 
             (Double.isNaN(data[1]) || data[1 /* power */] <95.5f ? 
                0.0f : 
                0.09090909f) : 
             (data[0 /* displacement */] <189.56055f ? 
                0.0f : 
                0.46153846f)) : 
         (data[2 /* weight */] <3432.5f ? 
             (data[4 /* year */] <75.5f ? 
                1.0f : 
                0.33333334f) : 
             (data[2 /* weight */] <3742.5f ? 
                0.875f : 
                1.0f)));
    return pred;
  } // constant pool size = 30B, number of visited nodes = 7, static init size = 0B
}

class DRF_model_python_1613267082863_1_Tree_1_class_1 {
  static final double score0(double[] data) {
    double pred =      (Double.isNaN(data[2]) || data[2 /* weight */] <3072.5f ? 
         (Double.isNaN(data[2]) || data[2 /* weight */] <2759.5f ? 
             (Double.isNaN(data[1]) || data[1 /* power */] <95.5f ? 
                1.0f : 
                0.90909094f) : 
             (data[0 /* displacement */] <189.56055f ? 
                1.0f : 
                0.5f)) : 
         (data[2 /* weight */] <3432.5f ? 
             (data[4 /* year */] <75.5f ? 
                0.0f : 
                0.68421054f) : 
             (data[2 /* weight */] <3742.5f ? 
                0.125f : 
                0.0f)));
    return pred;
  } // constant pool size = 30B, number of visited nodes = 7, static init size = 0B
}


class DRF_model_python_1613267082863_1_Forest_2 {
  public static void score0(double[] fdata, double[] preds) {
    preds[1] += DRF_model_python_1613267082863_1_Tree_2_class_0.score0(fdata);
    preds[2] += DRF_model_python_1613267082863_1_Tree_2_class_1.score0(fdata);
  }
}
class DRF_model_python_1613267082863_1_Tree_2_class_0 {
  static final double score0(double[] data) {
    double pred =      (Double.isNaN(data[0]) || data[0 /* displacement */] <212.49512f ? 
         (Double.isNaN(data[1]) || data[1 /* power */] <84.5f ? 
            0.0f : 
             (data[3 /* acceleration */] <15.448438f ? 
                 (Double.isNaN(data[1]) || data[1 /* power */] <102.5f ? 
                    0.0f : 
                    0.1f) : 
                 (data[4 /* year */] <77.0f ? 
                    0.42857143f : 
                    0.0f))) : 
         (data[1 /* power */] <122.5f ? 
             (data[4 /* year */] <75.5f ? 
                0.93333334f : 
                 (data[1 /* power */] <102.0f ? 
                    0.6f : 
                    0.45454547f)) : 
            1.0f));
    return pred;
  } // constant pool size = 34B, number of visited nodes = 8, static init size = 0B
}

class DRF_model_python_1613267082863_1_Tree_2_class_1 {
  static final double score0(double[] data) {
    double pred =      (Double.isNaN(data[0]) || data[0 /* displacement */] <212.49512f ? 
         (Double.isNaN(data[1]) || data[1 /* power */] <84.5f ? 
            1.0f : 
             (data[3 /* acceleration */] <15.448438f ? 
                 (Double.isNaN(data[1]) || data[1 /* power */] <102.5f ? 
                    1.0f : 
                    0.9f) : 
                 (data[4 /* year */] <77.0f ? 
                    0.5714286f : 
                    1.0f))) : 
         (data[1 /* power */] <122.5f ? 
             (data[4 /* year */] <75.5f ? 
                0.06666667f : 
                 (data[1 /* power */] <102.0f ? 
                    0.4f : 
                    0.54545456f)) : 
            0.0f));
    return pred;
  } // constant pool size = 34B, number of visited nodes = 8, static init size = 0B
}


class DRF_model_python_1613267082863_1_Forest_3 {
  public static void score0(double[] fdata, double[] preds) {
    preds[1] += DRF_model_python_1613267082863_1_Tree_3_class_0.score0(fdata);
    preds[2] += DRF_model_python_1613267082863_1_Tree_3_class_1.score0(fdata);
  }
}
class DRF_model_python_1613267082863_1_Tree_3_class_0 {
  static final double score0(double[] data) {
    double pred =      (Double.isNaN(data[0]) || data[0 /* displacement */] <212.49512f ? 
         (Double.isNaN(data[1]) || data[1 /* power */] <94.5f ? 
             (Double.isNaN(data[3]) || data[3 /* acceleration */] <18.36875f ? 
                0.0f : 
                 (data[1 /* power */] <71.5f ? 
                    0.0f : 
                    0.1f)) : 
             (Double.isNaN(data[4]) || data[4 /* year */] <76.5f ? 
                0.23529412f : 
                0.0f)) : 
         (data[2 /* weight */] <3432.5f ? 
             (data[4 /* year */] <75.5f ? 
                1.0f : 
                0.36363637f) : 
             (data[1 /* power */] <142.5f ? 
                0.8666667f : 
                1.0f)));
    return pred;
  } // constant pool size = 34B, number of visited nodes = 8, static init size = 0B
}

class DRF_model_python_1613267082863_1_Tree_3_class_1 {
  static final double score0(double[] data) {
    double pred =      (Double.isNaN(data[0]) || data[0 /* displacement */] <212.49512f ? 
         (Double.isNaN(data[1]) || data[1 /* power */] <94.5f ? 
             (Double.isNaN(data[3]) || data[3 /* acceleration */] <18.36875f ? 
                1.0f : 
                 (data[1 /* power */] <71.5f ? 
                    1.0f : 
                    0.9f)) : 
             (Double.isNaN(data[4]) || data[4 /* year */] <76.5f ? 
                0.7647059f : 
                1.0f)) : 
         (data[2 /* weight */] <3432.5f ? 
             (data[4 /* year */] <75.5f ? 
                0.0f : 
                0.6363636f) : 
             (data[1 /* power */] <142.5f ? 
                0.13333334f : 
                0.0f)));
    return pred;
  } // constant pool size = 34B, number of visited nodes = 8, static init size = 0B
}


class DRF_model_python_1613267082863_1_Forest_4 {
  public static void score0(double[] fdata, double[] preds) {
    preds[1] += DRF_model_python_1613267082863_1_Tree_4_class_0.score0(fdata);
    preds[2] += DRF_model_python_1613267082863_1_Tree_4_class_1.score0(fdata);
  }
}
class DRF_model_python_1613267082863_1_Tree_4_class_0 {
  static final double score0(double[] data) {
    double pred =      (Double.isNaN(data[2]) || data[2 /* weight */] <3096.5f ? 
         (data[4 /* year */] <75.5f ? 
             (Double.isNaN(data[0]) || data[0 /* displacement */] <130.9082f ? 
                 (Double.isNaN(data[1]) || data[1 /* power */] <86.5f ? 
                    0.0f : 
                    0.10526316f) : 
                0.2857143f) : 
             (Double.isNaN(data[3]) || data[3 /* acceleration */] <18.138672f ? 
                0.0f : 
                0.09090909f)) : 
         (data[1 /* power */] <117.5f ? 
             (Double.isNaN(data[0]) || data[0 /* displacement */] <240.69336f ? 
                0.5f : 
                0.8333333f) : 
             (data[0 /* displacement */] <304.60938f ? 
                0.9166667f : 
                1.0f)));
    return pred;
  } // constant pool size = 34B, number of visited nodes = 8, static init size = 0B
}

class DRF_model_python_1613267082863_1_Tree_4_class_1 {
  static final double score0(double[] data) {
    double pred =      (Double.isNaN(data[2]) || data[2 /* weight */] <3072.5f ? 
         (data[4 /* year */] <75.5f ? 
             (Double.isNaN(data[0]) || data[0 /* displacement */] <130.9082f ? 
                 (Double.isNaN(data[1]) || data[1 /* power */] <86.5f ? 
                    1.0f : 
                    0.8947368f) : 
                0.71428573f) : 
             (Double.isNaN(data[3]) || data[3 /* acceleration */] <18.138672f ? 
                1.0f : 
                0.90909094f)) : 
         (data[1 /* power */] <117.5f ? 
             (Double.isNaN(data[0]) || data[0 /* displacement */] <240.69336f ? 
                0.5f : 
                0.16666667f) : 
             (data[0 /* displacement */] <304.60938f ? 
                0.083333336f : 
                0.0f)));
    return pred;
  } // constant pool size = 34B, number of visited nodes = 8, static init size = 0B
}


class DRF_model_python_1613267082863_1_Forest_5 {
  public static void score0(double[] fdata, double[] preds) {
    preds[1] += DRF_model_python_1613267082863_1_Tree_5_class_0.score0(fdata);
    preds[2] += DRF_model_python_1613267082863_1_Tree_5_class_1.score0(fdata);
  }
}
class DRF_model_python_1613267082863_1_Tree_5_class_0 {
  static final double score0(double[] data) {
    double pred =      (Double.isNaN(data[2]) || data[2 /* weight */] <3096.5f ? 
         (Double.isNaN(data[2]) || data[2 /* weight */] <2765.0f ? 
             (Double.isNaN(data[1]) || data[1 /* power */] <86.5f ? 
                0.0f : 
                 (data[2 /* weight */] <2351.0f ? 
                    0.2f : 
                    0.0f)) : 
             (data[0 /* displacement */] <183.54492f ? 
                0.1f : 
                0.5833333f)) : 
         (data[1 /* power */] <117.5f ? 
             (Double.isNaN(data[1]) || data[1 /* power */] <103.5f ? 
                0.8235294f : 
                0.46153846f) : 
            1.0f));
    return pred;
  } // constant pool size = 30B, number of visited nodes = 7, static init size = 0B
}

class DRF_model_python_1613267082863_1_Tree_5_class_1 {
  static final double score0(double[] data) {
    double pred =      (Double.isNaN(data[2]) || data[2 /* weight */] <3072.5f ? 
         (Double.isNaN(data[2]) || data[2 /* weight */] <2765.0f ? 
             (Double.isNaN(data[1]) || data[1 /* power */] <86.5f ? 
                1.0f : 
                 (data[2 /* weight */] <2351.0f ? 
                    0.8f : 
                    1.0f)) : 
             (data[0 /* displacement */] <183.54492f ? 
                0.9f : 
                0.45454547f)) : 
         (data[1 /* power */] <117.5f ? 
             (Double.isNaN(data[1]) || data[1 /* power */] <103.5f ? 
                0.1764706f : 
                0.53846157f) : 
            0.0f));
    return pred;
  } // constant pool size = 30B, number of visited nodes = 7, static init size = 0B
}


class DRF_model_python_1613267082863_1_Forest_6 {
  public static void score0(double[] fdata, double[] preds) {
    preds[1] += DRF_model_python_1613267082863_1_Tree_6_class_0.score0(fdata);
    preds[2] += DRF_model_python_1613267082863_1_Tree_6_class_1.score0(fdata);
  }
}
class DRF_model_python_1613267082863_1_Tree_6_class_0 {
  static final double score0(double[] data) {
    double pred =      (Double.isNaN(data[1]) || data[1 /* power */] <97.5f ? 
         (data[4 /* year */] <76.5f ? 
             (Double.isNaN(data[0]) || data[0 /* displacement */] <169.25781f ? 
                 (data[3 /* acceleration */] <14.745313f ? 
                    0.2f : 
                    0.0f) : 
                0.6363636f) : 
             (Double.isNaN(data[0]) || data[0 /* displacement */] <148.20312f ? 
                0.0f : 
                0.07692308f)) : 
         (Double.isNaN(data[4]) || data[4 /* year */] <77.5f ? 
             (data[2 /* weight */] <3432.5f ? 
                0.6666667f : 
                1.0f) : 
             (data[2 /* weight */] <3363.5f ? 
                0.09090909f : 
                0.5833333f)));
    return pred;
  } // constant pool size = 34B, number of visited nodes = 8, static init size = 0B
}

class DRF_model_python_1613267082863_1_Tree_6_class_1 {
  static final double score0(double[] data) {
    double pred =      (Double.isNaN(data[1]) || data[1 /* power */] <97.5f ? 
         (data[4 /* year */] <76.5f ? 
             (Double.isNaN(data[0]) || data[0 /* displacement */] <169.25781f ? 
                 (data[3 /* acceleration */] <14.745313f ? 
                    0.8f : 
                    1.0f) : 
                0.36363637f) : 
             (Double.isNaN(data[0]) || data[0 /* displacement */] <148.20312f ? 
                1.0f : 
                0.9230769f)) : 
         (Double.isNaN(data[4]) || data[4 /* year */] <77.5f ? 
             (data[2 /* weight */] <3432.5f ? 
                0.33333334f : 
                0.0f) : 
             (data[2 /* weight */] <3363.5f ? 
                0.90909094f : 
                0.41666666f)));
    return pred;
  } // constant pool size = 34B, number of visited nodes = 8, static init size = 0B
}


class DRF_model_python_1613267082863_1_Forest_7 {
  public static void score0(double[] fdata, double[] preds) {
    preds[1] += DRF_model_python_1613267082863_1_Tree_7_class_0.score0(fdata);
    preds[2] += DRF_model_python_1613267082863_1_Tree_7_class_1.score0(fdata);
  }
}
class DRF_model_python_1613267082863_1_Tree_7_class_0 {
  static final double score0(double[] data) {
    double pred =      (data[3 /* acceleration */] <13.750391f ? 
         (data[1 /* power */] <135.5f ? 
            0.09090909f : 
             (Double.isNaN(data[4]) || data[4 /* year */] <74.0f ? 
                1.0f : 
                0.9f)) : 
         (Double.isNaN(data[2]) || data[2 /* weight */] <3081.0f ? 
             (Double.isNaN(data[0]) || data[0 /* displacement */] <177.5293f ? 
                 (Double.isNaN(data[1]) || data[1 /* power */] <82.5f ? 
                    0.0f : 
                     (Double.isNaN(data[3]) || data[3 /* acceleration */] <16.816406f ? 
                        0.032258064f : 
                        0.18181819f)) : 
                0.4f) : 
             (Double.isNaN(data[2]) || data[2 /* weight */] <3425.5f ? 
                 (Double.isNaN(data[4]) || data[4 /* year */] <76.5f ? 
                    0.85714287f : 
                    0.4f) : 
                 (Double.isNaN(data[4]) || data[4 /* year */] <75.5f ? 
                    1.0f : 
                    0.90909094f))));
    return pred;
  } // constant pool size = 42B, number of visited nodes = 10, static init size = 0B
}

class DRF_model_python_1613267082863_1_Tree_7_class_1 {
  static final double score0(double[] data) {
    double pred =      (data[3 /* acceleration */] <13.750391f ? 
         (data[1 /* power */] <135.5f ? 
            0.90909094f : 
             (Double.isNaN(data[4]) || data[4 /* year */] <74.0f ? 
                0.0f : 
                0.1f)) : 
         (Double.isNaN(data[2]) || data[2 /* weight */] <3081.0f ? 
             (Double.isNaN(data[0]) || data[0 /* displacement */] <177.5293f ? 
                 (Double.isNaN(data[1]) || data[1 /* power */] <82.5f ? 
                    1.0f : 
                     (Double.isNaN(data[3]) || data[3 /* acceleration */] <16.816406f ? 
                        0.9677419f : 
                        0.8181818f)) : 
                0.6f) : 
             (Double.isNaN(data[2]) || data[2 /* weight */] <3425.5f ? 
                 (Double.isNaN(data[4]) || data[4 /* year */] <76.5f ? 
                    0.14285715f : 
                    0.6f) : 
                 (Double.isNaN(data[4]) || data[4 /* year */] <75.5f ? 
                    0.0f : 
                    0.09090909f))));
    return pred;
  } // constant pool size = 42B, number of visited nodes = 10, static init size = 0B
}


class DRF_model_python_1613267082863_1_Forest_8 {
  public static void score0(double[] fdata, double[] preds) {
    preds[1] += DRF_model_python_1613267082863_1_Tree_8_class_0.score0(fdata);
    preds[2] += DRF_model_python_1613267082863_1_Tree_8_class_1.score0(fdata);
  }
}
class DRF_model_python_1613267082863_1_Tree_8_class_0 {
  static final double score0(double[] data) {
    double pred =      (Double.isNaN(data[0]) || data[0 /* displacement */] <212.49512f ? 
         (Double.isNaN(data[1]) || data[1 /* power */] <84.5f ? 
            0.0f : 
             (Double.isNaN(data[2]) || data[2 /* weight */] <2763.5f ? 
                 (data[2 /* weight */] <2356.0f ? 
                    0.25f : 
                    0.0f) : 
                0.2777778f)) : 
         (Double.isNaN(data[4]) || data[4 /* year */] <77.5f ? 
             (data[0 /* displacement */] <254.17564f ? 
                0.85f : 
                1.0f) : 
            0.625f));
    return pred;
  } // constant pool size = 26B, number of visited nodes = 6, static init size = 0B
}

class DRF_model_python_1613267082863_1_Tree_8_class_1 {
  static final double score0(double[] data) {
    double pred =      (Double.isNaN(data[0]) || data[0 /* displacement */] <212.49512f ? 
         (Double.isNaN(data[1]) || data[1 /* power */] <84.5f ? 
            1.0f : 
             (Double.isNaN(data[2]) || data[2 /* weight */] <2763.5f ? 
                 (data[2 /* weight */] <2356.0f ? 
                    0.75f : 
                    1.0f) : 
                0.7222222f)) : 
         (Double.isNaN(data[4]) || data[4 /* year */] <77.5f ? 
             (data[0 /* displacement */] <254.17564f ? 
                0.15f : 
                0.0f) : 
            0.375f));
    return pred;
  } // constant pool size = 26B, number of visited nodes = 6, static init size = 0B
}


class DRF_model_python_1613267082863_1_Forest_9 {
  public static void score0(double[] fdata, double[] preds) {
    preds[1] += DRF_model_python_1613267082863_1_Tree_9_class_0.score0(fdata);
    preds[2] += DRF_model_python_1613267082863_1_Tree_9_class_1.score0(fdata);
  }
}
class DRF_model_python_1613267082863_1_Tree_9_class_0 {
  static final double score0(double[] data) {
    double pred =      (Double.isNaN(data[0]) || data[0 /* displacement */] <212.49512f ? 
         (Double.isNaN(data[1]) || data[1 /* power */] <86.5f ? 
            0.0f : 
             (Double.isNaN(data[3]) || data[3 /* acceleration */] <15.448438f ? 
                0.0f : 
                 (data[3 /* acceleration */] <15.927264f ? 
                    0.2f : 
                    0.09090909f))) : 
         (data[2 /* weight */] <3422.0f ? 
             (Double.isNaN(data[1]) || data[1 /* power */] <102.5f ? 
                0.72727275f : 
                0.5f) : 
             (data[2 /* weight */] <3741.0f ? 
                0.9411765f : 
                1.0f)));
    return pred;
  } // constant pool size = 30B, number of visited nodes = 7, static init size = 0B
}

class DRF_model_python_1613267082863_1_Tree_9_class_1 {
  static final double score0(double[] data) {
    double pred =      (Double.isNaN(data[0]) || data[0 /* displacement */] <212.49512f ? 
         (Double.isNaN(data[1]) || data[1 /* power */] <86.5f ? 
            1.0f : 
             (Double.isNaN(data[3]) || data[3 /* acceleration */] <15.448438f ? 
                1.0f : 
                 (data[3 /* acceleration */] <15.927264f ? 
                    0.8f : 
                    0.90909094f))) : 
         (data[2 /* weight */] <3422.0f ? 
             (Double.isNaN(data[1]) || data[1 /* power */] <102.5f ? 
                0.27272728f : 
                0.5f) : 
             (data[2 /* weight */] <3741.0f ? 
                0.05882353f : 
                0.0f)));
    return pred;
  } // constant pool size = 30B, number of visited nodes = 7, static init size = 0B
}


