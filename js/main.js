window.addEventListener("load", () => injectGtag("G-KRJWXG2HZQ"));

const injectGtag = (gid) => {
    const s1 = document.createElement("script");
    s1.setAttribute("async", true);
    s1.setAttribute(
        "src",
        `https://www.googletagmanager.com/gtag/js?id=${gid}`
    );

    const s2 = document.createElement("script");
    s2.textContent = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag("js", new Date());
        gtag("config", "${gid}");
    `;

    document.body.append(s1);
    document.body.append(s2);
};

/*
window.addEventListener("load", () => handleLinks());

const handleLinks = () =>
    getLinks().forEach((a) => {
        underlineWhitespaces(a);
    });

const underlineWhitespaces = (el) =>
    (el.innerHTML = el.textContent.replaceAll(" ", "<i> </i>"));

const getLinks = () =>
    document.querySelectorAll("p > a:not(:has(*)), li > a:not(:has(*))");
*/
