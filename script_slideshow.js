// script_slideshow.js

document.addEventListener("DOMContentLoaded", function () {
    // Array of image filenames in the "Project images" folder
    const imageFiles = ["1.jpeg", "2.jpeg", "3.jpeg", "4.jpeg", "QAP3.png", "History of the Computer.png"];
  
    // Get the container where the slideshow will be displayed
    const slideshowContainer = document.querySelector("#projects");
  
    // Create an image element for the slideshow
    const slideshowImage = document.createElement("img");
    slideshowImage.classList.add("project-image");
  
    // Set the initial image source
    let currentImageIndex = 0;
    slideshowImage.src = `Project images/${imageFiles[currentImageIndex]}`;
  
    // Add the image to the container
    slideshowContainer.appendChild(slideshowImage);
  
    // Function to update the slideshow with the next image
    function nextImage() {
      currentImageIndex = (currentImageIndex + 1) % imageFiles.length;
      slideshowImage.src = `Project images/${imageFiles[currentImageIndex]}`;
    }
  
    // Function to update the slideshow with the previous image
    function prevImage() {
      currentImageIndex = (currentImageIndex - 1 + imageFiles.length) % imageFiles.length;
      slideshowImage.src = `Project images/${imageFiles[currentImageIndex]}`;
    }
  
    // Set an interval to automatically change images every 5 seconds (adjusted for a slower pace)
    const slideshowInterval = setInterval(nextImage, 5000);
  
    // Pause the slideshow when the mouse is over the image
    slideshowImage.addEventListener("mouseover", function () {
      clearInterval(slideshowInterval);
    });
  
    // Resume the slideshow when the mouse leaves the image
    slideshowImage.addEventListener("mouseout", function () {
      slideshowInterval = setInterval(nextImage, 5000);
    });
  
    // Add navigation buttons for next and previous images
    const nextButton = document.createElement("button");
    nextButton.textContent = "Next";
    nextButton.addEventListener("click", nextImage);
  
    const prevButton = document.createElement("button");
    prevButton.textContent = "Previous";
    prevButton.addEventListener("click", prevImage);
  
    slideshowContainer.appendChild(prevButton);
    slideshowContainer.appendChild(nextButton);
});
