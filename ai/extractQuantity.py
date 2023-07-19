```python
import cv2
import numpy as np
import tensorflow as tf
from utils.dataProcessing import preprocess_image

def extractQuantity(image_path, model_path="model/model.h5"):
    # Load the trained model
    model = tf.keras.models.load_model(model_path)

    # Preprocess the image
    image = cv2.imread(image_path)
    image = preprocess_image(image)

    # Predict the quantity
    quantity = model.predict(np.array([image]))[0]

    return quantity
```