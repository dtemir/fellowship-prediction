from bento_service import ScoreIdentifier

# Create an instance for prediction
score_identifier = ScoreIdentifier()

# Save the service to disk for model serving
saved_path = score_identifier.save()
print("Your service is located at {}".format(saved_path))

# score_identifier.start_dev_server()
