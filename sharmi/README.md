cd # Ex.08 Design of Interactive Image Gallery
## Date:18.12.2024

## AIM:
To design a web application for an inteactive image gallery with minimum five images.

## DESIGN STEPS:

### Step 1:
Clone the github repository and create Django admin interface.

### Step 2:
Change settings.py file to allow request from all hosts.

### Step 3:
Use CSS for positioning and styling.

### Step 4:
Write JavaScript program for implementing interactivity.

### Step 5:
Validate the HTML and CSS code.

### Step 6:
Publish the website in the given URL.

## PROGRAM :
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Image Gallery</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            display: flex;
            flex-direction: column;
            min-height: 100vh;
        }
        main {
            flex: 1; /* Ensures main content stretches to push footer to the bottom */
            padding: 20px;
        }
        .gallery {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 30px;
            padding: 20px;
        }
        .photo {
            background: rgb(201, 197, 197);
            border: 1px solid #080808;
            border-radius: 10px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            overflow: hidden;
            width: 250px;
            text-align: center;
        }
        .photo img {
            width: 100%;
            height: 200px;
            object-fit: cover;
        }
        .photo-title {
            font-size: 18px;
            font-weight: bold;
            margin: 10px 0;
        }
        .photo-description {
            font-size: 14px;
            color: #3c0d0d;
            margin: 0 10px 10px;
        }
        footer {
            background: #965151;
            color: rgb(14, 14, 14);
            text-align: center;
            padding: 10px;
            width: 100%;
        }
        footer a {
            color: rgb(11, 11, 11);
            text-decoration: none;
            margin: 0 5px;
        }
        footer a:hover {
            text-decoration: underline;
        }
    </style>
</head>
<body>
    <main>
        <h1 style="text-align: center; margin: 20px 0;">Image Gallery</h1>
        <div class="gallery">
                <div class="photo">
                <img src="waterfall.jpg" alt="waterfall">
                <p>waterfall</p>
                </div>
                <div class="photo">
                <img src="forest.jpg" alt="forest">
                <p>forest</p>
                </div>
                <div class="photo">
                <img src="sea.jpg" alt="sea">
                <p>Sea</p>
                </div>
                <div class="photo">
                <img src="flower.jpg" alt="flower">
                <p>flower</p>
                </div>
                <div class="photo">
                <img src="dogy.jpg" alt="dogy">
                <p>dogy</p>
                </div>
                <div class="photo">
                <img src="anil.jpg" alt="anil">
                <p>anil</p>
                </div>

                        </div>
    </main>
    <footer>
       <p> &copy; 2024 Designed and Developed by SHARMILA P</p>
    </footer>
</body>
</html>

image.js

const galleryImages = document.querySelectorAll('.gallery img');
const modal = document.getElementById('image-modal');
const modalImg = document.getElementById('modal-image');
const closeBtn = document.getElementById('close-modal');

galleryImages.forEach(image => {
  image.addEventListener('click', () => {

    modal.style.display = 'block';
    modal.setAttribute('aria-hidden', 'false');
    
    modalImg.src = image.src;
    modalImg.alt = image.alt;
  });
});

closeBtn.addEventListener('click', closeModal);

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && modal.style.display === 'block') {
    closeModal();
  }
});


function closeModal() {
  modal.style.display = 'none';
  modal.setAttribute('aria-hidden', 'true');
  modalImg.src = '';
  modalImg.alt = '';
}
```

## OUTPUT:
![alt text](../1.png)

## RESULT:
The program for designing an interactive image gallery using HTML, CSS and JavaScript is executed successfully.
