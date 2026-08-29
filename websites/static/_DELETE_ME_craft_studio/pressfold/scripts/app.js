// counts up on load — proves the external script actually loaded
(function () {
  var el = document.querySelector('#counter b');
  var target = 4820, n = 0;
  var step = function () {
    n += Math.ceil((target - n) / 12);
    el.textContent = n.toLocaleString();
    if (n < target) requestAnimationFrame(step);
  };
  step();
})();
