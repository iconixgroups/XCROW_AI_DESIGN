```python
import os
import cv2
from PIL import Image

def convert_to_jpg(file_path):
    """
    Convert file to jpg format for further processing
    """
    file_name, file_extension = os.path.splitext(file_path)
    if file_extension.lower() not in ['.pdf', '.dwg', '.dwf', '.bim', '.revit']:
        raise ValueError("Invalid file format. Please upload a file in PDF, DWG, DWF, BIM, or REVIT format.")
    
    if file_extension.lower() == '.pdf':
        im = Image.open(file_path)
        im.save(file_name + '.jpg', 'JPEG')
    else:
        img = cv2.imread(file_path)
        cv2.imwrite(file_name + '.jpg', img)
    
    return file_name + '.jpg'

def resize_image(file_path, size=(1024, 1024)):
    """
    Resize image to specified size for model input
    """
    img = Image.open(file_path)
    img = img.resize(size, Image.ANTIALIAS)
    img.save(file_path)

def process_file(file_path):
    """
    Process file for AI analysis
    """
    jpg_file = convert_to_jpg(file_path)
    resize_image(jpg_file)
    return jpg_file
```