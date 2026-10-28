// Mobile menu, active nav link, dark-mode toggle, footer year
(function () {
  var root = document.documentElement;
  try {
    var saved = localStorage.getItem('theme');
    if (saved) root.setAttribute('data-theme', saved);
  } catch (e) {}

  document.addEventListener('DOMContentLoaded', function () {
    // Active link
    var page = location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-links a').forEach(function (a) {
      if (a.getAttribute('href') === page) a.classList.add('active');
    });

    // Mobile menu
    var btn = document.querySelector('.menu-btn');
    var links = document.querySelector('.nav-links');
    if (btn && links) btn.addEventListener('click', function () { links.classList.toggle('open'); });

    // Theme toggle
    var t = document.querySelector('.theme-btn');
    if (t) t.addEventListener('click', function () {
      var dark = root.getAttribute('data-theme') === 'dark' ||
        (!root.getAttribute('data-theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);
      var next = dark ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      try { localStorage.setItem('theme', next); } catch (e) {}
    });

    // Year
    var y = document.getElementById('year');
    if (y) y.textContent = new Date().getFullYear();

    // Publication filter
    var chips = document.querySelectorAll('.chip');
    chips.forEach(function (c) {
      c.addEventListener('click', function () {
        chips.forEach(function (x) { x.classList.remove('active'); });
        c.classList.add('active');
        var f = c.dataset.filter;
        document.querySelectorAll('.pub').forEach(function (p) {
          p.style.display = (f === 'all' || p.dataset.type === f) ? '' : 'none';
        });
        document.querySelectorAll('.pub-group').forEach(function (g) {
          var any = Array.prototype.some.call(g.querySelectorAll('.pub'), function (p) { return p.style.display !== 'none'; });
          g.style.display = any ? '' : 'none';
        });
      });
    });
  });
})();
