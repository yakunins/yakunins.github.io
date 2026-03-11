(function () {
  var key = 'quiz:' + location.pathname;

  function save() {
    var radios = document.querySelectorAll('.quiz-container input[type="radio"]:checked');
    var data = {};
    for (var i = 0; i < radios.length; i++) {
      data[radios[i].name] = radios[i].value;
    }
    try { localStorage.setItem(key, JSON.stringify(data)); } catch (e) {}
  }

  function restore() {
    var raw;
    try { raw = localStorage.getItem(key); } catch (e) {}
    if (!raw) return;
    var data;
    try { data = JSON.parse(raw); } catch (e) { return; }
    var names = Object.keys(data);
    for (var i = 0; i < names.length; i++) {
      var radio = document.querySelector(
        'input[type="radio"][name="' + names[i] + '"][value="' + data[names[i]] + '"]'
      );
      if (radio) radio.checked = true;
    }
  }

  restore();

  document.addEventListener('change', function (e) {
    if (e.target.matches('.quiz-container input[type="radio"]')) save();
  });
})();
