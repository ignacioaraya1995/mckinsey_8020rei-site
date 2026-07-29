/* Rail navigation tracking + per-case scoring widget for the Interview Casefile.
   Loaded by interview-cases.html before its decrypt IIFE, and inlined into
   plaintext previews by scripts/render-casefile-preview.mjs. */
var onCaseActive = [];

function splitLegacyHypothesisMarkup(markup) {
  return markup
    .split(/\s*\(\d+\)\s*/)
    .slice(1)
    .map(function (item) { return item.trim().replace(/;\s*$/, '.'); })
    .filter(Boolean);
}

function normalizeHypothesisLists() {
  Array.from(document.querySelectorAll('.coach-card p')).forEach(function (paragraph) {
    if (paragraph.textContent.trim().indexOf('Expected MECE-ish set:') !== 0) return;

    var items = splitLegacyHypothesisMarkup(paragraph.innerHTML);
    if (items.length < 2) return;

    paragraph.innerHTML = '<b>Expected root-cause hypotheses (MECE):</b>';
    var list = document.createElement('ul');
    list.className = 'hypothesis-list';
    items.forEach(function (item) {
      var listItem = document.createElement('li');
      listItem.innerHTML = item;
      list.appendChild(listItem);
    });
    paragraph.insertAdjacentElement('afterend', list);
  });
}

function initCaseRail() {
  normalizeHypothesisLists();

  var links = Array.from(document.querySelectorAll('[data-case-link]'));
  var sections = links
    .map(function (link) { return document.getElementById(link.dataset.caseLink); })
    .filter(Boolean);

  function setActive(id) {
    links.forEach(function (link) {
      if (link.dataset.caseLink === id) {
        link.setAttribute('aria-current', 'true');
      } else {
        link.removeAttribute('aria-current');
      }
    });
    onCaseActive.forEach(function (fn) { fn(id); });
  }

  links.forEach(function (link) {
    link.addEventListener('click', function () { setActive(link.dataset.caseLink); });
  });

  if ('IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function (entries) {
      var visible = entries
        .filter(function (entry) { return entry.isIntersecting; })
        .sort(function (a, b) { return b.intersectionRatio - a.intersectionRatio; });
      if (visible.length) setActive(visible[0].target.id);
    }, { rootMargin: '-88px 0px -68% 0px', threshold: [0, 0.05, 0.2] });
    sections.forEach(function (section) { observer.observe(section); });
  }

  var initialId = window.location.hash.slice(1);
  setActive(sections.some(function (section) { return section.id === initialId; }) ? initialId : 'case01');
}

function initRubric() {
  var widget = document.querySelector('[data-rubric]');
  if (!widget) return;
  var dims = ['structure', 'quant', 'insight', 'synthesis', 'coachability'];
  var caseNames = {};
  document.querySelectorAll('[data-case-link]').forEach(function (link) {
    var number = link.querySelector('.rail-number');
    var title = link.querySelector('.rail-title');
    if (number && title && /^case\d{2}$/.test(link.dataset.caseLink)) {
      caseNames[link.dataset.caseLink] = number.textContent.trim() + ' · ' + title.textContent.trim();
    }
  });
  var currentCase = 'case01';
  var scores = {};

  function load(caseId) {
    try { return JSON.parse(localStorage.getItem('cf-rubric:' + caseId)) || {}; }
    catch (e) { return {}; }
  }
  function save(caseId, data) {
    try { localStorage.setItem('cf-rubric:' + caseId, JSON.stringify(data)); } catch (e) { /* private mode: non-persistent */ }
  }
  function total(data) {
    return dims.reduce(function (sum, dim) { return sum + (Number(data[dim]) || 0); }, 0);
  }
  function render() {
    var data = scores[currentCase] || {};
    widget.querySelector('[data-rubric-case]').textContent = caseNames[currentCase] || currentCase;
    dims.forEach(function (dim) {
      widget.querySelectorAll('[data-dim="' + dim + '"] [data-score]').forEach(function (btn) {
        btn.setAttribute('aria-pressed', Number(btn.dataset.score) === Number(data[dim]) ? 'true' : 'false');
      });
    });
    var sum = total(data);
    widget.querySelector('[data-rubric-total]').textContent = 'Total ' + sum + '/25';
    widget.querySelector('[data-rubric-head-total]').textContent = sum + '/25';
  }

  widget.addEventListener('click', function (ev) {
    var scoreBtn = ev.target.closest('[data-score]');
    if (scoreBtn) {
      var dim = scoreBtn.closest('[data-dim]').dataset.dim;
      var data = scores[currentCase] || (scores[currentCase] = load(currentCase));
      data[dim] = Number(scoreBtn.dataset.score);
      save(currentCase, data);
      render();
      return;
    }
    if (ev.target.closest('[data-rubric-reset]')) {
      scores[currentCase] = {};
      save(currentCase, {});
      render();
      return;
    }
    if (ev.target.closest('[data-rubric-toggle]') && window.matchMedia('(max-width:1040px)').matches) {
      var open = widget.classList.toggle('is-open');
      widget.querySelector('[data-rubric-toggle]').setAttribute('aria-expanded', open ? 'true' : 'false');
    }
  });

  onCaseActive.push(function (id) {
    if (!/^case\d{2}$/.test(id)) return;
    currentCase = id;
    if (!scores[id]) scores[id] = load(id);
    render();
  });

  var active = document.querySelector('[data-case-link][aria-current="true"]');
  if (active && /^case\d{2}$/.test(active.dataset.caseLink)) currentCase = active.dataset.caseLink;
  scores[currentCase] = load(currentCase);
  render();
}
