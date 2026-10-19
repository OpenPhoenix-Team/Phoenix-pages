(() => {
  'use strict';
  function initPredictionFigure(figure) {
    const tabs = [...figure.querySelectorAll('[role="tab"]')];
    const panel = figure.querySelector('[role="tabpanel"]');
    const video = figure.querySelector('video');
    const speed = figure.querySelector('select');
    const error = figure.querySelector('.prediction-error');
    const otherPlayers = [...document.querySelectorAll('video')].filter(item => item !== video);
    let current = tabs.find(tab => tab.getAttribute('aria-selected') === 'true');

    function activate(tab) {
      if (tab === current) return;
      const resume = !video.paused;
      video.pause();
      current = tab;
      tabs.forEach(item => {
        const selected = item === tab;
        item.setAttribute('aria-selected', String(selected));
        item.tabIndex = selected ? 0 : -1;
      });
      panel.setAttribute('aria-labelledby', tab.id);
      figure.querySelector('.prediction-shift').textContent = tab.dataset.shift;
      figure.querySelector('.prediction-view').textContent = tab.dataset.view;
      const base = figure.dataset.videoRoot + '/' + tab.dataset.clip + '/';
      video.poster = base + 'poster_frames.jpg';
      video.src = base + 'comparison_frames.mp4';
      video.setAttribute('aria-label', tab.textContent.trim() +
        ': synchronized predictions from FastWAM, Phoenix-MWA (w/o. Pretrain), and Phoenix-MWA (w. Pretrain)');
      video.querySelector('a').href = video.src;
      figure.querySelector('.prediction-original').href = video.src;
      error.hidden = true;
      video.load();
      video.playbackRate = Number(speed.value);
      if (resume) video.play().catch(() => {});
    }

    tabs.forEach((tab, index) => {
      tab.addEventListener('click', () => activate(tab));
      tab.addEventListener('keydown', event => {
        let next;
        if (event.key === 'ArrowRight') next = (index + 1) % tabs.length;
        if (event.key === 'ArrowLeft') next = (index + tabs.length - 1) % tabs.length;
        if (event.key === 'Home') next = 0;
        if (event.key === 'End') next = tabs.length - 1;
        if (next === undefined) return;
        event.preventDefault();
        activate(tabs[next]);
        tabs[next].focus();
      });
    });

    speed.addEventListener('change', () => { video.playbackRate = Number(speed.value); });
    video.addEventListener('loadedmetadata', () => { video.playbackRate = Number(speed.value); });
    video.addEventListener('loadeddata', () => { error.hidden = true; });
    video.addEventListener('error', () => { error.hidden = false; });
    video.addEventListener('play', () => otherPlayers.forEach(item => item.pause()));
    otherPlayers.forEach(item => item.addEventListener('play', () => video.pause()));
    document.addEventListener('visibilitychange', () => { if (document.hidden) video.pause(); });
    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => { if (!entry.isIntersecting) video.pause(); });
      }, {threshold: 0});
      observer.observe(video);
    }
  }

  document.querySelectorAll('.prediction-examples[data-video-root]').forEach(initPredictionFigure);
})();
