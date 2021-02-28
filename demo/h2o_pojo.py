import h2o
import os
from h2o.estimators.glm import H2OGeneralizedLinearEstimator
from h2o.estimators import H2ORandomForestEstimator

h2o.init()
path = "http://s3.amazonaws.com/h2o-public-test-data/smalldata/prostate/prostate.csv.zip"
h2o_df = h2o.import_file(path)
h2o_df['CAPSULE'] = h2o_df['CAPSULE'].asfactor()
h2o_df['RACE'] = h2o_df['RACE'].asfactor()

# glm 
glm_model = H2OGeneralizedLinearEstimator(family = "binomial", model_id="glm_model")
glm_model.train(y = "CAPSULE", x = ["AGE", "RACE", "PSA", "GLEASON"], training_frame = h2o_df)
glm_model_file = glm_model.download_mojo(path=os.getcwd(), get_genmodel_jar=True)
h2o.download_pojo(glm_model, os.getcwd())

# random forest
rf_model = H2ORandomForestEstimator(ntrees=10,
                                    max_depth=5,
                                    min_rows=10,
                                    model_id="rf_model")
rf_model.train(y = "CAPSULE", x = ["AGE", "RACE", "PSA", "GLEASON"], training_frame = h2o_df)
rf_model_file = rf_model.download_mojo(path=os.getcwd(), get_genmodel_jar=True)
h2o.download_pojo(rf_model, os.getcwd())
