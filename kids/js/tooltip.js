(function () {
  let counter = 0;

  // Single shared tooltip element
  const tip = document.createElement('div');
  tip.className = 'tooltip';
  tip.setAttribute('popover', '');
  document.body.appendChild(tip);

  // Load tooltip CSS
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = '../css/tooltip.css';
  document.head.appendChild(link);

  function show(e) {
    const anchor = e.currentTarget;
    const text = anchor.dataset.tooltip;
    if (!text) return;

    tip.textContent = text;

    // CSS anchor positioning
    if (CSS.supports('position-anchor', '--tooltip-anchor')) {
      if (!anchor.style.anchorName) {
        anchor.style.anchorName = '--tooltip-anchor';
      }
      tip.showPopover();
      requestAnimationFrame(() => tip.classList.add('visible'));
    } else {
      // Fallback: manual positioning
      const rect = anchor.getBoundingClientRect();
      tip.style.left = rect.left + rect.width / 2 + 'px';
      tip.style.top = rect.bottom + 6 + 'px';
      tip.style.translate = '-50% 0';
      tip.showPopover();
      requestAnimationFrame(() => tip.classList.add('visible'));
    }
  }

  function hide(e) {
    const anchor = e.currentTarget;
    tip.classList.remove('visible');
    try { tip.hidePopover(); } catch (_) {}
    if (CSS.supports('position-anchor', '--tooltip-anchor')) {
      anchor.style.anchorName = '';
    }
  }

  // Bind to all [data-tooltip] elements (current + future via MutationObserver)
  function bind(el) {
    if (el._tooltipBound) return;
    el._tooltipBound = true;
    el.addEventListener('mouseenter', show);
    el.addEventListener('mouseleave', hide);
    el.addEventListener('focus', show);
    el.addEventListener('blur', hide);
  }

  function scan(root) {
    (root || document).querySelectorAll('[data-tooltip]').forEach(bind);
  }

  // Initial scan
  scan();

  // Watch for dynamically added elements
  new MutationObserver((mutations) => {
    for (const m of mutations) {
      for (const node of m.addedNodes) {
        if (node.nodeType === 1) {
          if (node.dataset && node.dataset.tooltip) bind(node);
          scan(node);
        }
      }
    }
  }).observe(document.body, { childList: true, subtree: true });
})();
