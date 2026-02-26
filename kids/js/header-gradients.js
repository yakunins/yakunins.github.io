(function () {
  var nav = document.querySelector('#course-header nav');
  if (!nav) return;

  // Seeded PRNG (mulberry32) based on lesson number
  var match = location.pathname.match(/lesson-(\d+)/);
  var seed = match ? parseInt(match[1], 10) : 0;
  function mulberry32(s) {
    return function () {
      s |= 0; s = s + 0x6D2B79F5 | 0;
      var t = Math.imul(s ^ s >>> 15, 1 | s);
      t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
      return ((t ^ t >>> 14) >>> 0) / 4294967296;
    };
  }
  var rand = mulberry32(seed);

  var colors = [
    'rgba(255,59,48,.35)',   // red
    'rgba(0,199,190,.35)',   // teal
    'rgba(255,204,0,.35)',   // yellow
    'rgba(88,86,214,.35)',   // indigo
    'rgba(255,45,85,.35)',   // pink
    'rgba(52,199,89,.35)',   // green
    'rgba(0,122,255,.35)',   // blue
    'rgba(255,149,0,.35)'    // orange
  ];

  var picked = colors.sort(function () { return rand() - 0.5; }).slice(0, 5);
  var gradients = picked.map(function (c) {
    var x = (rand() * 100).toFixed(0);
    var y = (rand() * 100).toFixed(0);
    var size = (130 + rand() * 40).toFixed(0);
    return 'radial-gradient(circle ' + size + 'px at ' + x + '% ' + y + '%, ' + c + ', transparent)';
  });

  nav.style.backgroundImage = gradients.join(', ');
})();
