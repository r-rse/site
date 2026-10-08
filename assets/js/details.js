// Close button inside <details> course panels: collapse the panel and scroll back to its summary.
document.addEventListener('click', function (e) {
  var btn = e.target.closest('.detail-close');
  if (!btn) return;
  var details = btn.closest('details');
  if (!details) return;
  details.removeAttribute('open');
  details.scrollIntoView({ behavior: 'smooth', block: 'start' });
});
