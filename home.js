// next = document.querySelector("#next1");
// prev = document.querySelector("#prev1");
// imageslider = document.querySelector(".imageshome");
// images = document.querySelectorAll(".images")
// let slidernumber = 1;
// // console.log(images);
// next.onclick = function () {
//     if (slidernumber < images.length) {
//         console.log("Next");
//         imageslider.style.transform = `translateX(-${slidernumber * 100}vw)`;
//         slidernumber++;

//     }
//     else {

//         console.log("Next");
//         imageslider.style.transform = `translateX(0vw)`;
//         slidernumber = 1;

//     }
// }

// prev.onclick = function () {
//     if (slidernumber > 1) {
//         console.log("Previous");
//         slidernumber--;
//         imageslider.style.transform = `translateX(-${(slidernumber - 1) * 100}vw)`;
//     }
//     else {
//         console.log("Previous");
//         slidernumber = images.length;
//         imageslider.style.transform = `translateX(-${(slidernumber - 1) * 100}vw)`;
//     }
// }

next = document.querySelector("#next1");
prev = document.querySelector("#prev1");
imageslider = document.querySelector(".imageshome");
images = document.querySelectorAll(".images")
let slidernumber = 1;

//navbar close mobo view 
document.addEventListener("DOMContentLoaded", function () {
    var links = document.querySelectorAll(".navbar nav ul li a");

    links.forEach(function (link) {
        link.addEventListener("click", function () {
            var checkbox = document.getElementById("check");
            checkbox.checked = false;
        });
    });
});

// function mobo(){
//     if(ul==onclick){
//         print("hello")
//     }
// }

// Function to move to the next slide
function nextSlide() {
    if (slidernumber < images.length) {
        slidernumber++;
    } else {
        slidernumber = 1;
    }
    updateSlider();
}

// Function to move to the previous slide
function prevSlide() {
    if (slidernumber > 1) {
        slidernumber--;
    } else {
        slidernumber = images.length;
    }
    updateSlider();
}

// Function to update the slider position
function updateSlider() {
    imageslider.style.transform = `translateX(-${(slidernumber - 1) * 100}vw)`;
}

// Event listener for next button
next.onclick = function () {
    nextSlide();
}

// Event listener for previous button
prev.onclick = function () {
    prevSlide();
}

// Automatically loop every 5 seconds
let intervalId = setInterval(nextSlide, 10000);

// Stop the interval when the mouse hovers over the slider
imageslider.addEventListener("mouseenter", function () {
    clearInterval(intervalId);
});

// Resume the interval when the mouse leaves the slider
imageslider.addEventListener("mouseleave", function () {
    intervalId = setInterval(nextSlide, 10000);
});
// loading

function loading(){
   var load = document.querySelector("#loading");
   setTimeout(function() {
          load.style.top="-100vh";
   }, 3000);

}
loading();