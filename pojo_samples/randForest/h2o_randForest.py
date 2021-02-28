import h2o
import os

from h2o.estimators import H2ORandomForestEstimator
h2o.init()

# Import the cars dataset into H2O:
cars = h2o.import_file("https://s3.amazonaws.com/h2o-public-test-data/smalldata/junit/cars_20mpg.csv")

# Set the predictors and response;
# set the response as a factor:
cars["economy_20mpg"] = cars["economy_20mpg"].asfactor()
predictors = ["displacement","power","weight","acceleration","year"]
response = "economy_20mpg"

# Split the dataset into a train and valid set:
train, valid = cars.split_frame(ratios=[.8], seed=1234)

# Build and train the model:
cars_drf = H2ORandomForestEstimator(ntrees=10,
                                    max_depth=5,
                                    min_rows=10,
                                    calibrate_model=True,
                                    calibration_frame=valid,
                                    binomial_double_trees=True)
cars_drf.train(x=predictors,
               y=response,
               training_frame=train,
               validation_frame=valid)

# Eval performance:
perf = cars_drf.model_performance()

# Generate predictions on a validation set (if necessary):
pred = cars_drf.predict(valid)
# print(pred)

# print out training data
cars_drf.download_mojo(path=os.getcwd())
