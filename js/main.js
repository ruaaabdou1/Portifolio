// navbar.js
document.addEventListener("DOMContentLoaded", function(){
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            document.querySelector('.navbar').classList.add('scrolled');
        } else {
            document.querySelector('.navbar').classList.remove('scrolled');
        }
    });
});



//button toggle navigation in smaller and medium screens

document.getElementById('menubar').addEventListener('click', function () {
  var dropdown = document.getElementById('menulist');
  
  // Toggle the display style between 'block' and 'none'
  if (dropdown.style.display === 'block') {
    dropdown.style.display = 'none';
  } else {
    dropdown.style.display = 'block';
  }
});


// -------------------------------------------------------------------

// numbers in services section 

let disvalue = document.querySelectorAll(".number_loaded");
let interval = 3500;

disvalue.forEach((validisplays) => {
    let startval = 0;
    let endval = parseInt(validisplays.getAttribute("data-value"));
    let stopValue = parseInt(validisplays.getAttribute("data-stop")); // Unique stop value for each element
    endval = Math.min(endval, stopValue); // Ensure endval does not exceed stopValue
    let duration = Math.floor(interval / endval);
    let counter = setInterval(function() {
        startval += 1;
        validisplays.textContent = startval;
        if (startval >= endval) {
            clearInterval(counter);
        }
    }, duration);
});


//----------------------------------------------------------------
//button let's talk

// Select the button and the contact section
let button = document.getElementById('AdamButton');
let contactSection = document.getElementById('contact');

// Function to scroll to the contact section
function scrollToContact() {
    contactSection.scrollIntoView({ behavior: 'smooth' });
}

// Attach the scroll function to the button's click event
button.onclick = scrollToContact;
//--------------------------------------------------
