const header = document.querySelector("#header");
const backToTop = document.querySelector(".backto-top");
const navLink = document.querySelectorAll(".nav__link");
const section = document.querySelectorAll("section");
const toggleDarkMode = document.querySelector(".toggle-dark-mode");
let navLinkCurrent = "#home";
window.addEventListener("scroll", () => {
  if (scrollY > 400) {
    header.classList.add("header-fixed");
  } else header.classList.remove("header-fixed");

  if (scrollY > 700) {
    backToTop.classList.add("backto-top-active");
  } else backToTop.classList.remove("backto-top-active");
});

backToTop.addEventListener("click", (e) => {
  window.scrollTo(0, 0);
});

/** ===============scroll- active-link========== */

window.addEventListener("scroll", (e) => {
  section.forEach((item) => {
    if (scrollY >= item.offsetTop - 200) {
      navLinkCurrent = "#" + item.getAttribute("id");
    }
  });

  navLink.forEach((item) => {
    item.classList.remove("active-link");

    if (navLinkCurrent === item.getAttribute("href")) {
      item.classList.add("active-link");
    }
  });
});

/** ===============dark-mode========== */

// let boolean = localStorage.getItem("boolean") || false
let theme = localStorage.getItem("theme");

if (theme === "dark") {
  document.body.classList.add("dark-theme");
  toggleDarkMode.classList.add("bi-moon-stars");
}

toggleDarkMode.addEventListener("click", (e) => {
  toggleDarkMode.classList.toggle("bi-moon-stars");

  if (toggleDarkMode.classList.contains("bi-moon-stars")) {
    document.body.classList.add("dark-theme");
    localStorage.setItem("theme", "dark");
  } else {
    document.body.classList.remove("dark-theme");
    localStorage.setItem("theme", "light");
  }
});

const element = document.querySelectorAll(".scroll-animation");
// const isInViewport = (elem) => {
//   var rect = elem.getBoundingClientRect();
//   return (
//     (rect.top <= 0 && rect.bottom >= 0) ||
//     (rect.bottom >=
//       (window.innerHeight || document.documentElement.clientHeight) &&
//       rect.top <=
//         (window.innerHeight || document.documentElement.clientHeight)) ||
//     (rect.top >= 0 &&
//       rect.bottom <=
//         (window.innerHeight || document.documentElement.clientHeight))
//   );
// };

// const loop = () => {
//   element.forEach((item) => {
//     if (isInViewport(item)) {
//       item.classList.add("start");
//     } else {
//       item.classList.remove("start");
//     }
//   });

//   window.requestAnimationFrame(loop);
// };

// window.requestAnimationFrame(loop);

function ready() {
  if ("IntersectionObserver" in window) {
    function callback(entries, observer) {
      entries.forEach((item) => {
        if (!item.isIntersecting) return;
        item.target.classList.add("start");
      });
    }
    let observer = new IntersectionObserver(callback);
    element.forEach((item) => {
      observer.observe(item);
    });
  }
}

document.addEventListener("DOMContentLoaded", ready);
