```python
import pandas as pd
import numpy as np
from sklearn.preprocessing import LabelEncoder

def load_data(file_path):
    data = pd.read_csv(file_path)
    return data

def preprocess_data(data):
    # Fill missing values
    data = data.fillna(0)

    # Convert categorical data to numerical
    label_encoder = LabelEncoder()
    for column in data.columns:
        if data[column].dtype == type(object):
            data[column] = label_encoder.fit_transform(data[column])

    return data

def split_data(data, test_size=0.2):
    # Split data into training and testing sets
    from sklearn.model_selection import train_test_split
    train_data, test_data = train_test_split(data, test_size=test_size, random_state=42)
    return train_data, test_data

def normalize_data(data):
    # Normalize data
    from sklearn.preprocessing import StandardScaler
    scaler = StandardScaler()
    data = scaler.fit_transform(data)
    return data

def prepare_data(file_path):
    # Load data
    data = load_data(file_path)

    # Preprocess data
    data = preprocess_data(data)

    # Split data
    train_data, test_data = split_data(data)

    # Normalize data
    train_data = normalize_data(train_data)
    test_data = normalize_data(test_data)

    return train_data, test_data
```