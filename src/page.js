// Role pages: cursor-following spotlight inside each bento cell.
document.querySelectorAll('.cell').forEach((cell) => {
  cell.addEventListener(
    'pointermove',
    (e) => {
      const r = cell.getBoundingClientRect();
      cell.style.setProperty('--mx', `${e.clientX - r.left}px`);
      cell.style.setProperty('--my', `${e.clientY - r.top}px`);
    },
    { passive: true }
  );
});
