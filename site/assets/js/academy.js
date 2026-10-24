/* Goblin Express Academy: OS tabs, copy buttons, checklists, achievements and
   progress. Every page under learn/goblin-express-academy/ loads this with
   defer. Saved state lives in this browser only, under keys prefixed "gea:". */
(function(){
  var store = {
    get: function(k){ try { return localStorage.getItem('gea:' + k); } catch(e){ return null; } },
    set: function(k,v){ try { localStorage.setItem('gea:' + k, v); } catch(e){} },
    remove: function(k){ try { localStorage.removeItem('gea:' + k); } catch(e){} }
  };
  var root = document.documentElement;
  function all(sel, el){ return Array.prototype.slice.call((el || document).querySelectorAll(sel)); }

  // OS tabs: one choice for the whole site. The <head> script already set
  // data-os on <html> from the saved choice or a guess; CSS hides the other
  // OS's panels. Markup per group:
  //   <div class="os"><div class="os-tabs" role="tablist" aria-label="Operating system">
  //     <button type="button" role="tab" data-os="mac">macOS</button> ...</div>
  //   <div class="os-panel" data-panel="mac" role="tabpanel">...</div> ...</div>
  var groups = all('.os');
  function showOs(os, save){
    root.dataset.os = os;
    if (save) store.set('os', os);
    all('.os-tabs [data-os]').forEach(function(b){
      var on = b.dataset.os === os;
      b.setAttribute('aria-selected', on ? 'true' : 'false');
      b.tabIndex = on ? 0 : -1;
    });
  }
  groups.forEach(function(g, gi){
    var buttons = all('.os-tabs [data-os]', g);
    buttons.forEach(function(b, i){
      var panel = g.querySelector('.os-panel[data-panel="' + b.dataset.os + '"]');
      b.id = 'os-' + gi + '-' + b.dataset.os;
      if (panel){ panel.id = b.id + '-panel'; b.setAttribute('aria-controls', panel.id); panel.setAttribute('aria-labelledby', b.id); }
      b.addEventListener('click', function(){ showOs(b.dataset.os, true); });
      b.addEventListener('keydown', function(e){
        var j = e.key === 'ArrowRight' ? i + 1 : e.key === 'ArrowLeft' ? i - 1 : e.key === 'Home' ? 0 : e.key === 'End' ? buttons.length - 1 : null;
        if (j === null) return;
        e.preventDefault();
        var n = buttons[(j + buttons.length) % buttons.length];
        showOs(n.dataset.os, true); n.focus();
      });
    });
  });
  if (groups.length) showOs(root.dataset.os === 'win' ? 'win' : 'mac', false);

  // Copy buttons: <div class="code"><span class="lbl">…</span><pre>…</pre><button type="button">Copy</button></div>
  all('.code button').forEach(function(btn){
    btn.addEventListener('click', function(){
      var pre = btn.parentNode.querySelector('pre');
      function done(msg){ btn.textContent = msg; setTimeout(function(){ btn.textContent = 'Copy'; }, 1600); }
      function fallback(){
        var r = document.createRange(); r.selectNodeContents(pre);
        var s = window.getSelection(); s.removeAllRanges(); s.addRange(r);
        done('Selected');
      }
      try { navigator.clipboard.writeText(pre.textContent).then(function(){ done('Copied'); }, fallback); }
      catch(e){ fallback(); }
    });
  });

  // Checklists and achievements. Each box is saved as gea:<lesson>:<box id>.
  // Ticking them all earns the lesson's badge and records gea:done:<lesson>,
  // which the week pages and the world map read.
  //   <ul class="checklist" data-lesson="w1d1"> … <input type="checkbox" id="c1"> …
  //   <div class="badge" data-lesson="w1d1" data-earned="Earned. …"> … <p class="badge-text">
  all('.checklist[data-lesson]').forEach(function(list){
    var lesson = list.dataset.lesson;
    var boxes = all('input[type="checkbox"]', list);
    var badge = document.querySelector('.badge[data-lesson="' + lesson + '"]');
    var badgeText = badge && badge.querySelector('.badge-text');
    function update(){
      var n = boxes.filter(function(b){ return b.checked; }).length;
      var done = n === boxes.length;
      if (done) store.set('done:' + lesson, '1'); else store.remove('done:' + lesson);
      if (!badge) return;
      badge.classList.toggle('earned', done);
      badgeText.textContent = done ? badge.dataset.earned : 'Locked. ' + n + ' of ' + boxes.length + ' done.';
    }
    boxes.forEach(function(b){
      b.checked = store.get(lesson + ':' + b.id) === '1';
      b.addEventListener('change', function(){ store.set(lesson + ':' + b.id, b.checked ? '1' : '0'); update(); });
    });
    update();
  });

  // Progress on the course home and week pages.
  //   [data-done-for="w1d1"]       gets .is-done once that lesson is signed off
  //   [data-progress="w1d1 w1d2"]  shows "1 of 2 signed off"
  all('[data-done-for]').forEach(function(el){
    el.classList.toggle('is-done', store.get('done:' + el.dataset.doneFor) === '1');
  });
  all('[data-progress]').forEach(function(el){
    var ids = el.dataset.progress.split(/\s+/);
    var n = ids.filter(function(id){ return store.get('done:' + id) === '1'; }).length;
    el.textContent = n + ' of ' + ids.length + ' signed off';
  });
})();
