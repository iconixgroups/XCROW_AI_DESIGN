import unittest
import sys
sys.path.append('../../ai/model')
from train import trainModel

class TestModel(unittest.TestCase):

    def setUp(self):
        self.model = trainModel()

    def test_model_exists(self):
        self.assertIsNotNone(self.model)

    def test_model_has_correct_layers(self):
        layers = [layer.name for layer in self.model.layers]
        expected_layers = ['input', 'hidden1', 'hidden2', 'output']
        self.assertEqual(layers, expected_layers)

    def test_model_compiles(self):
        try:
            self.model.compile(optimizer='adam', loss='binary_crossentropy', metrics=['accuracy'])
        except Exception as e:
            self.fail(f"Test failed: {str(e)}")

    def test_model_trains_on_sample_data(self):
        import numpy as np
        sample_input = np.random.rand(10, 100)
        sample_output = np.random.randint(2, size=(10, 1))
        try:
            history = self.model.fit(sample_input, sample_output, epochs=1)
            self.assertIsNotNone(history)
        except Exception as e:
            self.fail(f"Test failed: {str(e)}")

if __name__ == '__main__':
    unittest.main()