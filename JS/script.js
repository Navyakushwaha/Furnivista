"use strict";

AOS.init();

document.addEventListener("DOMContentLoaded", function () {
  const sidebar = document.getElementById("sidebar");
  const menuBtn = document.querySelector(".bars");
  const closeBtn = document.getElementById("sidebarCloseBtn");
  const sidebarLinks = document.querySelectorAll(".sidebar-link");


  menuBtn.addEventListener("click", function () {
    sidebar.classList.toggle("open");
  });


  closeBtn.addEventListener("click", function (e) {
    e.preventDefault();
    sidebar.classList.remove("open");
  });


  sidebarLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      sidebar.classList.remove("open");
    });
  });
});

// Loader
window.addEventListener("load", function () {
  const loader = document.querySelector(".loader");


  setTimeout(() => {
    if (loader) {
      loader.style.opacity = "0";
      loader.style.transition = "opacity 0.5s ease";
      setTimeout(() => {
        loader.style.display = "none";
      }, 500);
    }
  }, 2500);
});



// Alternate autoplay direction
$(document).ready(function () {

  // header sticky
  const h = document.querySelector("#header");
  window.addEventListener("scroll", function () {
    if (this.window.scrollY > 70) {
      h.classList.add("sticky");
    } else {
      h.classList.remove("sticky");
    }
  });
});



$(document).ready(function () {
  $('#testimonial-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
        nav: true,
        dots: true,

      },
      1200: {
        items: 1,
        nav: true,
        dots: true,
      }

    }
  })
})


// Typewriter Effect

var TxtType = function (el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtType.prototype.tick = function () {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

  var that = this;
  var delta = 200 - Math.random() * 100;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function () {
    that.tick();
  }, delta);
};

window.onload = function () {
  var elements = document.getElementsByClassName('typewrite');
  for (var i = 0; i < elements.length; i++) {
    var toRotate = elements[i].getAttribute('data-type');
    var period = elements[i].getAttribute('data-period');
    if (toRotate) {
      new TxtType(elements[i], JSON.parse(toRotate), period);
    }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
  document.body.appendChild(css);
};


///form

function toggleForm() {
  const outer = document.getElementById("outer");
  const inner = document.getElementById("inner");

  if (outer.style.display === "block") {
    outer.style.display = "none";
    inner.style.display = "block";
  } else {
    outer.style.display = "block";
    inner.style.display = "none";
  }
}