 // Image sources
 const images = [
    ["1.png", "2.png", "3.png"], // Images for square 1
    ["3.png", "1.png", "2.png"], // Images for square 2
    ["2.png", "3.png", "1.png"]  // Images for square 3
];

// Function to cycle through images for each square
function startCarousel() {
    images.forEach((imageArray, index) => {
        let square = document.getElementById(`square${index + 1}`);
        let imageIndex = 0;
        
        setInterval(() => {
            square.style.backgroundImage = `url(${imageArray[imageIndex]})`;
            imageIndex = (imageIndex + 1) % imageArray.length;
        }, 2000); // Change image every 2 seconds
    });
}

// Initialize carousel on page load
window.onload = startCarousel;