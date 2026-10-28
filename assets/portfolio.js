(() => {
  const gallery = document.querySelector('.clips');
  const filters = document.querySelector('.filters');
  const count = document.getElementById('video-count');
  if (gallery && filters) {
    filters.hidden = false;
    filters.addEventListener('click', event => {
      const button = event.target.closest('button[data-filter]');
      if (!button || !filters.contains(button)) return;
      const category = button.dataset.filter;
      let visible = 0;
      gallery.querySelectorAll('.clip').forEach(clip => {
        clip.hidden = category !== 'all' && clip.dataset.category !== category;
        if (!clip.hidden) visible++;
      });
      filters.querySelectorAll('button').forEach(item => item.setAttribute('aria-pressed', String(item === button)));
      count.textContent = `${visible} ${visible === 1 ? 'vídeo' : 'vídeos'}`;
    });
  }

  const dialog = document.getElementById('portfolio-player');
  const player = document.getElementById('portfolio-video');
  if (!dialog || typeof dialog.showModal !== 'function') return;
  const title = document.getElementById('portfolio-title');
  const direct = document.getElementById('portfolio-direct');
  let trigger = null;
  document.querySelectorAll('a[data-portfolio-video]').forEach(link => {
    link.addEventListener('click', event => {
      if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
      event.preventDefault();
      trigger = link;
      title.textContent = link.dataset.title;
      player.setAttribute('aria-label', link.dataset.title);
      player.poster = link.querySelector('img').src;
      player.width = Number(link.dataset.width);
      player.height = Number(link.dataset.height);
      player.src = link.href;
      direct.href = link.href;
      dialog.showModal();
      // Playback follows an explicit click; nothing starts on page load.
      player.play().catch(() => { /* Native controls remain available. */ });
    });
  });
  dialog.querySelector('[data-close-video]').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => {
    if (event.target !== dialog) return;
    const box = dialog.getBoundingClientRect();
    if (event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom) dialog.close();
  });
  dialog.addEventListener('close', () => {
    player.pause();
    player.removeAttribute('src');
    player.load();
    trigger?.focus();
  });
})();
