const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

const navLinks = document.querySelectorAll("nav a"); // all links inside the nav element
/*navLinks[0].textContent = siteContent.nav["nav-item-1"];
navLinks[1].textContent = siteContent.nav["nav-item-2"];
navLinks[2].textContent = siteContent.nav["nav-item-3"];
navLinks[3].textContent = siteContent.nav["nav-item-4"];
navLinks[4].textContent = siteContent.nav["nav-item-5"];
navLinks[5].textContent = siteContent.nav["nav-item-6"];*/

navLinks.forEach((item, index) => {
  item.textContent = siteContent.nav["nav-item-" + (index + 1)]; // nav-item-1 to nav-item-6
  item.style = "color: green";
});

document.querySelector("#logo-img").setAttribute("src", siteContent.nav["img-src"]); // set img src attributes by ID

document.querySelector(".cta-text h1").textContent = siteContent.cta.h1;
document.querySelector(".cta-text button").textContent = siteContent.cta.button;
document.querySelector("#cta-img").setAttribute("src", siteContent.cta["img-src"]);

const topContents = document.querySelectorAll(".top-content .text-content");
topContents[0].querySelector("h4").textContent = siteContent["main-content"]["features-h4"];
topContents[0].querySelector("p").textContent = siteContent["main-content"]["features-content"];
topContents[1].querySelector("h4").textContent = siteContent["main-content"]["about-h4"];
topContents[1].querySelector("p").textContent = siteContent["main-content"]["about-content"];

document.querySelector("#middle-img").setAttribute("src", siteContent["main-content"]["middle-img-src"]);

const bottomContents = document.querySelectorAll(".bottom-content .text-content");
bottomContents[0].querySelector("h4").textContent = siteContent["main-content"]["services-h4"];
bottomContents[0].querySelector("p").textContent = siteContent["main-content"]["services-content"];
bottomContents[1].querySelector("h4").textContent = siteContent["main-content"]["product-h4"];
bottomContents[1].querySelector("p").textContent = siteContent["main-content"]["product-content"];
bottomContents[2].querySelector("h4").textContent = siteContent["main-content"]["vision-h4"];
bottomContents[2].querySelector("p").textContent = siteContent["main-content"]["vision-content"];

const contact = document.querySelector(".contact");
contact.querySelector("h4").textContent = siteContent.contact["contact-h4"];
const contactParas = contact.querySelectorAll("p");
contactParas[0].textContent = siteContent.contact.address;
contactParas[1].textContent = siteContent.contact.phone;
contactParas[2].textContent = siteContent.contact.email;

document.querySelector("footer p").textContent = siteContent.footer.copyright;

// add new items to nav

const nav7 = navLinks[0].cloneNode(true);
nav7.textContent = "Jobs";

const nav8 = navLinks[0].cloneNode(true);
nav8.textContent = "Outreach";

document.querySelector("nav").append(nav7, nav8);