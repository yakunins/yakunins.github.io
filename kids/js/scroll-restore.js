(function () {
  var key = 'scroll:' + location.pathname;
  var timer;

  window.addEventListener('scroll', function () {
    clearTimeout(timer);
    timer = setTimeout(function () {
      sessionStorage.setItem(key, window.scrollY);
    }, 100);
  });

  window.addEventListener('pageshow', function (e) {
    var nav = performance.getEntriesByType('navigation')[0];
    var isBack = e.persisted || (nav && nav.type === 'back_forward');
    var isNav = sessionStorage.getItem('nav-restore');

    if (isNav) sessionStorage.removeItem('nav-restore');
    if (!isBack && !isNav) { sessionStorage.removeItem(key); return; }

    var y = parseInt(sessionStorage.getItem(key), 10);
    if (y) window.scrollTo(0, y);
  });
})();
