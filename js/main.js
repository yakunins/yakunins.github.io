// window.addEventListener("load", () => handleLinks());

const handleLinks = () =>
    getLinks().forEach((a) => {
        underlineWhitespaces(a);
    });

const underlineWhitespaces = (el) =>
    (el.innerHTML = el.textContent.replaceAll(" ", "<i> </i>"));

const getLinks = () =>
    document.querySelectorAll("p > a:not(:has(*)), li > a:not(:has(*))");
