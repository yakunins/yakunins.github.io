let delta = 10; // in pixels, gallery's background to be moved if mouse travelled this amount
jQuery(document).ready(function ($) {
    $("a i").closest("a").addClass("thin-underline");
    $(".gallery-link span").addClass("thin-underline").closest("a").removeClass("thin-underline");

    $.easing.smoothmove = function (x, t, b, c, d) {
        return -c * (t /= d) * (t - 2) + b;
    };
});

window.addEventListener("load", () => injectGtag("G-KRJWXG2HZQ"));
const injectGtag = (gid) => {
    const s1 = document.createElement("script");
    s1.setAttribute("async", true);
    s1.setAttribute("src", `https://www.googletagmanager.com/gtag/js?id=${gid}`);

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
let gamma = "gamma-light";
jQuery(document).ready(function () {
    setLight();
    if (window.location.href.indexOf("gamma-light") > -1) {
        setLight();
    }
    if (window.location.href.indexOf("gamma-dark") > -1) {
        setDark();
    }
});

function setDark() {
    gamma = "gamma-dark";
    $("body").removeClass("gamma-light").addClass("gamma-dark");
}
function setLight() {
    gamma = "gamma-light";
    $("body").removeClass("gamma-dark").addClass("gamma-light");
}
*/
