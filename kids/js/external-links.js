(function () {
  function mark(root) {
    (root || document).querySelectorAll('a[target="_blank"]').forEach(function (a) {
      if (a.querySelector('.arrow-target-blank')) return;
      var span = document.createElement('span');
      span.className = 'arrow-target-blank';
      span.textContent = '\u2197';
      a.appendChild(span);
    });
  }

  mark();

  new MutationObserver(function (mutations) {
    for (var i = 0; i < mutations.length; i++) {
      for (var j = 0; j < mutations[i].addedNodes.length; j++) {
        var node = mutations[i].addedNodes[j];
        if (node.nodeType === 1) {
          if (node.tagName === 'A' && node.target === '_blank') {
            mark(node.parentNode);
          } else {
            mark(node);
          }
        }
      }
    }
  }).observe(document.body, { childList: true, subtree: true });
})();
