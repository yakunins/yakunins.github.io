(function () {
  var match = location.pathname.match(/lesson-(\d+)/);
  if (!match) return;

  var num = parseInt(match[1], 10);
  var total = 20;
  var prevHref = num > 1 ? '../lessons/lesson-' + String(num - 1).padStart(2, '0') + '.html' : null;
  var nextHref = num < total ? '../lessons/lesson-' + String(num + 1).padStart(2, '0') + '.html' : null;

  function navigate(href) {
    if (!href) return;
    sessionStorage.setItem('nav-restore', '1');
    location.href = href;
  }

  // Insert buttons into header nav
  var nav = document.querySelector('#course-header nav');
  if (!nav) return;

  function makeBtn(href, label, cls, tooltip) {
    var a = document.createElement('a');
    a.href = href;
    a.className = 'lesson-nav-btn ' + cls;
    a.setAttribute('data-tooltip', tooltip);
    a.textContent = label;
    a.addEventListener('click', function (e) { e.preventDefault(); navigate(href); });
    return a;
  }

  if (prevHref) {
    nav.insertBefore(makeBtn(prevHref, '\u2190', 'lesson-nav-prev', 'Ctrl + Left'), nav.firstChild);
  }
  if (nextHref) {
    nav.appendChild(makeBtn(nextHref, '\u2192', 'lesson-nav-next', 'Ctrl + Right'));
  }

  // Keyboard shortcuts
  document.addEventListener('keydown', function (e) {
    if (!e.ctrlKey || e.shiftKey || e.altKey || e.metaKey) return;
    if (e.key === 'ArrowLeft') { e.preventDefault(); navigate(prevHref); }
    if (e.key === 'ArrowRight') { e.preventDefault(); navigate(nextHref); }
  });
})();
