function scoreQuiz(answers, resultId) {
  var score = 0;
  var total = Object.keys(answers).length;
  var missed = [];

  var keys = Object.keys(answers);
  for (var i = 0; i < keys.length; i++) {
    var q = keys[i];
    var selected = document.querySelector('input[name="' + q + '"]:checked');
    if (selected && selected.value === answers[q]) {
      score++;
    } else {
      missed.push(i + 1);
    }
  }

  var result = document.getElementById(resultId);
  result.classList.add('show');

  if (score === total) {
    result.style.background = '#c6f6d5';
    result.style.color = '#22543d';
    result.textContent = 'Perfect! ' + score + '/' + total + ' \u2014 You nailed it!';
  } else if (score >= total * 0.6) {
    result.style.background = '#fefcbf';
    result.style.color = '#744210';
    result.textContent = 'Good job! ' + score + '/' + total + ' \u2014 Review questions ' + missed.join(', ') + '.';
  } else {
    result.style.background = '#fed7d7';
    result.style.color = '#742a2a';
    result.textContent = score + '/' + total + ' \u2014 Re-read the theory and try again! Missed: ' + missed.join(', ') + '.';
  }
}
