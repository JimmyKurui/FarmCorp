/*const slides = document.querySelector(".slides");
const slideImages = document.querySelectorAll(".slides img");
const right = document.querySelector("#rightBtn");
const left = document.querySelector("#leftBtn");

const width = slideImages[0].clientWidth;
let counter= 1;

// slides.style.transform = "translateX(" + (-size * counter) + ")px";

right.addEventListener("click", function() {
	slides.style.transition = "transform 0.4s ease-in-out";
	counter++;
	console.log(counter);
	slides.style.transform = "translateX(" + (-width * counter) + ")px";

});

left.addEventListener("click", ()=> {
	slides.style.transition = "transform 0.4s ease-in-out";
	counter--;
	slides.style.transform = "translateX(" + (-width * counter) + ")px";

});

*/
 // Initialize and add the map
      function initMap() {
        // The location of Uluru
        const uluru = { lat: -0.344, lng: 33.036 };
        // The map, centered at Uluru
        const map = new google.maps.Map(document.getElementById("map"), {
          zoom: 6,
          center: uluru,
        });
        // The marker, positioned at Uluru
        const marker = new google.maps.Marker({
          position: uluru,
          map: map,
        });
      }
