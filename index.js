var slides = [
    {image: 'img0.jpeg', heading: 'LETS MOVE TOWARDS SUCCESS'},
    {image: 'img1.jpeg', heading: 'WITH CONTINUAL GROWTH AND PROGRESS'},
    {image: 'img2.jpeg', heading: 'DO THE BEST'},
    {image: 'img3.jpeg', heading: 'WITH SETTING GOALS'},
    {image: 'img4.jpg', heading: 'START WHERE YOU ARE'},
    {image: 'img5.jpg', heading: 'BELIEVE IN YOURSELF'},
    
];

// Function to update slide
function updateSlide(index) {
    var slide = slides[index];
    document.getElementById('sliderimg').src = slide.image;
    document.getElementById('myslides').textContent = slide.heading;
}

// Initial slide index
var slideIndex = 0;

// Function to show next slide
function nextSlide() {
    slideIndex++;
    if (slideIndex >= slides.length) {
        slideIndex = 0;
    }
    updateSlide(slideIndex);
}

// Show the first slide initially
updateSlide(slideIndex);

// Set interval to automatically show next slide every 3 seconds
setInterval(nextSlide, 3000);