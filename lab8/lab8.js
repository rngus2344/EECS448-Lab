function pwdFunc() {
    var password = document.getElementById("pwd").value
    var confirmPassword = document.getElementById("c_pwd").value

    if (!password || !confirmPassword) {
        document.getElementById("result").innerHTML = 'You did not put any password!';
        alert('You did not put any password!') 
    } else if (password !== confirmPassword) {
        document.getElementById("result").innerHTML = 'The passwords entered dont match!';
        alert('The passwords entered dont match!') 
    } else if (password.length < 8 || confirmPassword.length < 8) {
        document.getElementById("result").innerHTML = 'The passwords are not at least 8 characters long!';
        alert('The passwords are not at least 8 characters long!')
    } else {
        document.getElementById("result").innerHTML = 'You can use this password.';
        alert('You can use this password.')
    }
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

function CSSManipulateFunc() {
    var RVBorder = document.getElementById("RValueBorder").value
    var GVBorder = document.getElementById("GValueBorder").value
    var BVBorder = document.getElementById("BValueBorder").value
    var BVBorder = document.getElementById("BValueBorder").value
    var W_Border = document.getElementById("WBorder").value

    var RVBackground = document.getElementById("RValueBackground").value
    var GVBackground = document.getElementById("GValueBackground").value
    var BVBackground = document.getElementById("BValueBackground").value
    var BVBackground = document.getElementById("BValueBackground").value
    var W_Background = document.getElementById("WBackground").value

    if (RVBorder < 0 || RVBorder > 255 || GVBorder < 0 || GVBorder > 255 || BVBorder < 0 || BVBorder > 255) {
        alert('Invalid Value!') 
    }
    document.getElementById("heading").style.borderColor = "rgb(RVBorder, GVBorder, BVBorder)";
    document.getElementById("heading").style.borderWidth = W_Border;

    if (RVBackground < 0 || RVBackground > 255 || GVBackground < 0 || GVBackground > 255 || BVBackground < 0 || BVBackground > 255) {
        alert('Invalid Value!') 
    }
    document.getElementById("heading").style.backgroundColor = "rgb(RVBackground, GVBackground, BVBackground)";
}