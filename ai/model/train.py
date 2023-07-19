```python
import tensorflow as tf
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import Dense, Dropout, Flatten
from tensorflow.keras.optimizers import Adam
from sklearn.model_selection import train_test_split
from ai.utils.dataProcessing import load_data, preprocess_data

def trainModel():
    # Load and preprocess data
    X, y = load_data('data/drawings.csv')
    X = preprocess_data(X)

    # Split data into training and testing sets
    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

    # Define model architecture
    model = Sequential([
        Flatten(input_shape=(28, 28)),
        Dense(128, activation='relu'),
        Dropout(0.2),
        Dense(10, activation='softmax')
    ])

    # Compile model
    model.compile(optimizer=Adam(), 
                  loss='sparse_categorical_crossentropy', 
                  metrics=['accuracy'])

    # Train model
    model.fit(X_train, y_train, epochs=5)

    # Evaluate model
    test_loss, test_acc = model.evaluate(X_test, y_test, verbose=2)

    print('\nTest accuracy:', test_acc)

    # Save model
    model.save('ai/model/model.h5')

if __name__ == "__main__":
    trainModel()
```