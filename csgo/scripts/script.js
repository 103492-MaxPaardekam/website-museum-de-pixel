(function(){
  const modal = document.getElementById('modal');
  const modalContent = document.getElementById('modal-content');
  const modalClose = document.getElementById('modal-close');

  function ensureModal(){
    if (!modal) return false;
    return true;
  }

  function escapeHtml(str){
    return String(str)
      .replace(/&/g,'&amp;')
      .replace(/</g,'&lt;')
      .replace(/>/g,'&gt;')
      .replace(/"/g,'&quot;')
      .replace(/'/g,'&#39;');
  }

  function showModal(html){
    if (!ensureModal()) return;
    modalContent.innerHTML = html;
    modal.setAttribute('aria-hidden','false');
    document.body.style.overflow = 'hidden';
    const focusable = modal.querySelector('button, a, input, [tabindex]');
    if (focusable) focusable.focus();
  }

  function hideModal(){
    if (!ensureModal()) return;
    modal.setAttribute('aria-hidden','true');
    modalContent.innerHTML = '';
    document.body.style.overflow = '';
  }

  document.addEventListener('click', (e) => {
    const open = e.target.closest('[data-open]');
    if (open) {
      e.preventDefault();
      const card = open.closest('.card');
      if (!card) return;
      const title = card.querySelector('h2')?.textContent || 'Detail';
      const desc = card.querySelector('.muted')?.textContent || '';
      const metaItems = Array.from(card.querySelectorAll('.meta li'))
        .map(li => escapeHtml(li.textContent)).join('<br>');

      const html = `\n        <div style="display:flex;gap:12px;align-items:flex-start;flex-wrap:wrap">\n          <div style=\"width:140px;height:90px;background-size:cover;background-position:center;border-radius:8px;flex:0 0 140px\" id=\"modal-thumb\"></div>\n          <div style=\"flex:1\">\n            <h2 style=\"margin:0 0 8px;color:var(--accent);font-size:20px\">${escapeHtml(title)}</h2>\n            <p style=\"margin:0 0 8px;color:var(--muted)\">${escapeHtml(desc)}</p>\n            <p style=\"font-size:13px;color:rgba(255,255,255,0.8);margin:0\">${metaItems}</p>\n            <div style=\"margin-top:10px\">\n              <a class=\"btn\" href=\"#\" id=\"modal-readmore\">Read more</a>\n              <a class=\"btn ghost\" href=\"about.html\">About</a>\n            </div>\n          </div>\n        </div>\n      `;

      showModal(html);

      const media = card.querySelector('.card-media');
      const thumb = document.getElementById('modal-thumb');
      if (media && thumb) {
        const bg = media.style.backgroundImage || '';
        thumb.style.backgroundImage = bg;
      }
    }
  });

  if (modalClose) modalClose.addEventListener('click', hideModal);

  if (modal) modal.addEventListener('click', (e) => {
    if (e.target === modal) hideModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') hideModal();
  });

  document.addEventListener('DOMContentLoaded', () => {
    const url = location.pathname.split('/').pop() || 'index.html';
    const links = document.querySelectorAll('nav a');
    links.forEach(a => {
      const href = a.getAttribute('href');
      if (href === url) {
        a.classList.add('active');
      }
    });
  });

})();
