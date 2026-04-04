function makeDraggable(sticker) {
  let isDragging = false;
  let currentAngle = 0;
  let startMouseAngle = 0;
  let startAngle = 0;

  function getCenter() {
    const r = sticker.getBoundingClientRect();
    return { x: r.left + r.width / 2, y: r.top + r.height / 2 };
  }

  function getMouseAngle(e) {
    const c = getCenter();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    return Math.atan2(clientY - c.y, clientX - c.x) * (180 / Math.PI);
  }

  sticker.addEventListener('mousedown', (e) => {
    isDragging = true;
    startMouseAngle = getMouseAngle(e);
    startAngle = currentAngle;
    sticker.style.cursor = 'grabbing';
    e.preventDefault();
  });

  window.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    const delta = getMouseAngle(e) - startMouseAngle;
    currentAngle = startAngle + delta;
    sticker.style.transform = `rotate(${currentAngle}deg)`;
  });

  window.addEventListener('mouseup', () => {
    isDragging = false;
    sticker.style.cursor = 'grab';
  });

  sticker.addEventListener('touchstart', (e) => {
    isDragging = true;
    startMouseAngle = getMouseAngle(e);
    startAngle = currentAngle;
    e.preventDefault();
  }, { passive: false });

  window.addEventListener('touchmove', (e) => {
    if (!isDragging) return;
    const delta = getMouseAngle(e) - startMouseAngle;
    currentAngle = startAngle + delta;
    sticker.style.transform = `rotate(${currentAngle}deg)`;
  }, { passive: false });

  window.addEventListener('touchend', () => { isDragging = false; });
}

// Aplica a todos los stickers
document.querySelectorAll('.sticker1, .sticker2-wrapper, .sticker3').forEach(makeDraggable);

 gsap.registerPlugin(ScrollTrigger);

        if (!CSS.supports('animation-timeline', 'scroll()')) {
            gsap.to('.first-text', {
                scrollTrigger: { scrub: true, start: 'top top', end: '+=400' },
                x: -400, fontSize: '80px'
            });

            gsap.to('header', {
                scrollTrigger: { scrub: true, start: 'top top', end: '+=400' },
                top: -250
            });
        }

        document.querySelector('.footer-copy-email img').addEventListener('click', () => {
            navigator.clipboard.writeText('info@abbdavid.co').then(() => {
                const btn = document.querySelector('.footer-copy');
                const wrapper = document.querySelector('.footer-copy-email');

                btn.style.opacity = '1';
                btn.textContent = 'COPIED!';

                setTimeout(() => {
                    btn.style.opacity = '0';
                    btn.textContent = 'COPY';
                    wrapper.style.opacity = '0';

                    setTimeout(() => {
                        wrapper.style.opacity = '';
                    }, 300);
                }, 1000);
            });
        });

        document.querySelector('.copy-email img').addEventListener('click', () => {
            navigator.clipboard.writeText('info@abbdavid.co').then(() => {
                const btn = document.querySelector('.copy');
                const wrapper = document.querySelector('.copy-email');

                btn.style.opacity = '1';
                btn.textContent = 'COPIED!';

                setTimeout(() => {
                    btn.style.opacity = '0';
                    btn.textContent = 'COPY';
                    wrapper.style.opacity = '0';

                    setTimeout(() => {
                        wrapper.style.opacity = '';
                    }, 300);
                }, 1000);
            });
        });