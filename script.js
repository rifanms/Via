document.addEventListener('DOMContentLoaded', function() {

  // ─── BIRTHDAY: Cute Floating Elements ───
  var cuteEmojis = ['efek emot/3dicons-heart-dynamic-color.png', 'efek emot/3dicons-heart-dynamic-gradient.png', 'efek emot/3dicons-heart-front-color.png'];
  var cuteContainer = document.getElementById('cuteFloats');
  if (cuteContainer) {
    function spawnCuteFloat() {
      var el = document.createElement('img');
      el.className = 'cute-float';
      el.src = cuteEmojis[Math.floor(Math.random() * cuteEmojis.length)];
      el.alt = '';
      el.draggable = false;
      el.style.left = Math.random() * 100 + '%';
      el.style.top = '100%';
      el.style.width = (30 + Math.random() * 20) + 'px';
      el.style.height = 'auto';
      el.style.setProperty('--drift', (Math.random() * 160 - 80) + 'px');
      el.style.setProperty('--rx', (Math.random() * 720 - 360) + 'deg');
      el.style.setProperty('--ry', (Math.random() * 720 - 360) + 'deg');
      el.style.setProperty('--blur', (Math.random() * 2).toFixed(1) + 'px');
      el.style.zIndex = Math.random() < 0.5 ? 2 : 1;
      var dur = 6 + Math.random() * 8;
      el.style.animationDuration = dur + 's';
      el.style.animationDelay = '0s';
      cuteContainer.appendChild(el);
      setTimeout(function() { el.remove(); }, dur * 1000 + 500);
    }
    setInterval(spawnCuteFloat, 1500);
    for (var ci = 0; ci < 10; ci++) setTimeout(spawnCuteFloat, ci * 250);
  }

  // ─── FOTO: Semua Slot Foto dari Folder assets ───
  var PHOTOS = [
    'assets/foto manis/1.jpeg',
    'assets/foto manis/2.jpeg',
    'assets/foto manis/3.jpeg',
    'assets/frame of hugs/1.jpeg',
    'assets/frame of hugs/2.jpeg',
    'assets/frame of hugs/3.jpeg',
    'assets/frame of hugs/4.jpeg',
    'assets/foto kecantikan kamu/1.jpeg',
    'assets/foto kecantikan kamu/2.jpeg',
    'assets/foto kecantikan kamu/3.jpeg',
    'assets/foto kecantikan kamu/4.jpeg',
    'assets/foto kecantikan kamu/5.jpeg',
    'assets/foto kecantikan kamu/6.jpeg',
    'assets/foto kecantikan kamu/7.jpeg',
    'assets/foto kecantikan kamu/8.jpeg',
    'assets/foto kecantikan kamu/9.jpeg',
    'assets/foto isian album/1.jpeg',
    'assets/foto isian album/2.jpeg',
    'assets/foto isian album/3.jpeg',
    'assets/foto isian album/4.jpeg',
    'assets/foto isian album/5.jpeg',
    'assets/foto isian album/6.jpeg',
    'assets/foto isian album/7.jpeg',
    'assets/foto isian album/8.jpeg',
    'assets/foto isian album/9.jpeg',
    'assets/foto isian album/10.jpeg',
    'assets/foto isian album/11.jpeg',
    'assets/foto isian album/12.jpeg',
    'assets/foto isian album/13.jpeg'
  ];
  (function fillAllPhotos() {
    var manis = document.querySelectorAll('.cute-card img');
    var hugs = document.querySelectorAll('#hofTrack img');
    var galImg = document.querySelectorAll('#lightgallery img');
    var galA = document.querySelectorAll('#lightgallery a');
    var book = document.querySelectorAll('.page .page-face.back img');
    var i;
    for (i = 0; i < manis.length && i < 3; i++) manis[i].src = PHOTOS[i];
    for (i = 0; i < hugs.length && i < 4; i++) hugs[i].src = PHOTOS[3 + i];
    for (i = 0; i < galImg.length && i < 9; i++) { galImg[i].src = PHOTOS[7 + i]; if (galA[i]) galA[i].href = PHOTOS[7 + i]; }
    for (i = 0; i < book.length && i < 13; i++) book[i].src = PHOTOS[16 + i];
  })();

  // ─── BIRTHDAY: Sakura Petals ───
  const canvas = document.getElementById('sakura-canvas');
  if (canvas) {
    const ctx = canvas.getContext('2d');
    let petals = [];
    const numPetals = 50;
    function resizeCanvas() { canvas.width = window.innerWidth; canvas.height = window.innerHeight; }
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    function Petal() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height * 2 - canvas.height;
      this.w = 25 + Math.random() * 15;
      this.h = 20 + Math.random() * 10;
      this.opacity = this.w / 40;
      this.flip = Math.random();
      this.xSpeed = 1.5 + Math.random() * 2;
      this.ySpeed = 1 + Math.random() * 1;
      this.flipSpeed = Math.random() * 0.03;
    }
    Petal.prototype.draw = function() {
      if (this.y > canvas.height || this.x > canvas.width) {
        this.x = -this.w; this.y = Math.random() * canvas.height * 2 - canvas.height;
        this.xSpeed = 1.5 + Math.random() * 2; this.ySpeed = 1 + Math.random() * 1; this.flip = Math.random();
      }
      ctx.globalAlpha = this.opacity;
      ctx.beginPath();
      ctx.moveTo(this.x, this.y);
      ctx.bezierCurveTo(this.x + this.w / 2, this.y - this.h / 2, this.x + this.w, this.y, this.x + this.w / 2, this.y + this.h / 2);
      ctx.bezierCurveTo(this.x, this.y + this.h, this.x - this.w / 2, this.y, this.x, this.y);
      ctx.closePath();
      ctx.fillStyle = '#FFB7C5';
      ctx.fill();
    };
    Petal.prototype.update = function() { this.x += this.xSpeed; this.y += this.ySpeed; this.flip += this.flipSpeed; this.draw(); };
    function createPetals() { petals = []; for (let i = 0; i < numPetals; i++) petals.push(new Petal()); }
    function animate() { ctx.clearRect(0, 0, canvas.width, canvas.height); petals.forEach(function(p) { p.update(); }); requestAnimationFrame(animate); }
    createPetals();
    animate();
  }

  // ─── BIRTHDAY: AOS ───
  if (typeof AOS !== 'undefined') {
    AOS.init({ duration: 800, once: true });
  }

  // ─── BIRTHDAY: Surat Spesial 3D per kata (tampil hanya saat dilihat) ───
  var letterSection = document.getElementById('letterSection');
  if (letterSection && 'IntersectionObserver' in window) {
    var wordIndex = 0;
    var letterLines = letterSection.querySelectorAll('.letter-line');
    for (var li = 0; li < letterLines.length; li++) {
      var line = letterLines[li];
      var words = line.textContent.trim().split(/\s+/);
      var wordHtml = '';
      for (var wi = 0; wi < words.length; wi++) {
        var delay = (wordIndex++) * 0.12;
        var cls = 'letter-word';
        if (line.classList.contains('letter-signature')) { cls += ' font-anime text-sakura'; }
        wordHtml += '<span class="' + cls + '" style="--d:' + delay + 's">' + words[wi] + '</span>';
        if (wi < words.length - 1) { wordHtml += ' '; }
      }
      line.innerHTML = wordHtml;
    }
    var letterObserver = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          letterSection.classList.add('letter-visible');
        } else {
          letterSection.classList.remove('letter-visible');
        }
      });
    }, { threshold: 0.2 });
    letterObserver.observe(letterSection);
  }

  // ─── BIRTHDAY: LightGallery ───
  var lgEl = document.getElementById('lightgallery');
  if (lgEl && typeof lightGallery !== 'undefined') {
    lightGallery(lgEl, { speed: 500, download: false });
  }

  // ─── BIRTHDAY: Hall of Fame Carousel (Swap) ───
  var hofTrack = document.getElementById('hofTrack');
  var hofPrev = document.getElementById('hofPrev');
  var hofNext = document.getElementById('hofNext');
  var hofDots = document.getElementById('hofDots');
  if (hofTrack && hofPrev && hofNext && hofDots) {
    var hofSlides = hofTrack.children;
    var hofIndex = 0;
    var hofTotal = hofSlides.length;
    for (var i = 0; i < hofTotal; i++) {
      var dot = document.createElement('button');
      dot.className = 'w-3 h-3 rounded-full bg-gray-300 hover:bg-pink-300 transition-colors';
      dot.setAttribute('data-index', i);
      dot.addEventListener('click', function() { hofIndex = parseInt(this.getAttribute('data-index')); hofUpdate(); });
      hofDots.appendChild(dot);
    }
    function hofUpdate() {
      hofTrack.style.transform = 'translateX(-' + (hofIndex * 100) + '%)';
      var dots = hofDots.children;
      for (var j = 0; j < dots.length; j++) dots[j].className = 'w-3 h-3 rounded-full transition-colors ' + (j === hofIndex ? 'bg-pink-400' : 'bg-gray-300');
    }
    hofNext.addEventListener('click', function() { hofIndex = (hofIndex + 1) % hofTotal; hofUpdate(); });
    hofPrev.addEventListener('click', function() { hofIndex = (hofIndex - 1 + hofTotal) % hofTotal; hofUpdate(); });
    // Touch swipe support
    var hofStartX = 0;
    var hofSlider = document.getElementById('hofSlider');
    hofSlider.addEventListener('touchstart', function(e) { hofStartX = e.changedTouches[0].screenX; });
    hofSlider.addEventListener('touchend', function(e) {
      var diff = hofStartX - e.changedTouches[0].screenX;
      if (Math.abs(diff) > 50) { if (diff > 0) { hofIndex = (hofIndex + 1) % hofTotal; } else { hofIndex = (hofIndex - 1 + hofTotal) % hofTotal; } hofUpdate(); }
    });
    hofUpdate();
  }

  // ─── BIRTHDAY → ALBUM TRANSITION ───
  var birthdaySection = document.getElementById('birthdaySection');
  var albumSection = document.getElementById('albumSection');
  var openAlbumBtn = document.getElementById('openAlbumBtn');
  var music = document.getElementById('romanticMusic');
  var bodyEl = document.body;

  if (openAlbumBtn) {
    openAlbumBtn.addEventListener('click', function() {
      birthdaySection.style.display = 'none';
      albumSection.classList.remove('hidden');
      bodyEl.className = 'album-mode';
      if (music) music.play().catch(function() {});
      setTimeout(function() { spawnHeartBurst(10); }, 300);
      updateBook();
    });
  }

  // ─── ALBUM: Flipbook ───
  var pages = document.querySelectorAll('.page');
  var prevBtn = document.getElementById('prevBtn');
  var nextBtn = document.getElementById('nextBtn');
  var togglePlay = document.getElementById('togglePlay');
  var bookContainer = document.getElementById('bookContainer');
  var controls = document.getElementById('controls');
  var flowerOverlay = document.getElementById('flowerOverlay');
  var currentPage = 0;
  var isPlaying = false;
  var playInterval;
  var heartInterval;
  var totalPages = pages.length;

  // Sparkles
  (function createSparkles() {
    var c = document.getElementById('sparkleContainer');
    if (!c) return;
    for (var i = 0; i < 60; i++) {
      var d = document.createElement('div');
      d.className = 'sparkle-dot';
      d.style.left = Math.random() * 100 + '%';
      d.style.top = Math.random() * 100 + '%';
      d.style.setProperty('--dur', (2 + Math.random() * 3) + 's');
      d.style.setProperty('--delay', (Math.random() * 5) + 's');
      d.style.setProperty('--max-op', (0.2 + Math.random() * 0.5));
      d.style.width = (1 + Math.random() * 2) + 'px';
      d.style.height = d.style.width;
      c.appendChild(d);
    }
  })();

  function bombExplosion() {
    var w = window.innerWidth, h = window.innerHeight;
    var cx = w / 2, cy = h / 2;
    var container = document.createElement('div');
    container.className = 'bomb-explosion';
    document.body.appendChild(container);

    var flash = document.createElement('div');
    flash.className = 'bomb-flash';
    container.appendChild(flash);

    var smoke = document.createElement('div');
    smoke.className = 'bomb-smoke';
    container.appendChild(smoke);

    var photos = PHOTOS;
    for (var i = 0; i < 16; i++) {
      var el = document.createElement('img');
      el.className = 'bomb-photo';
      el.src = photos[Math.floor(Math.random() * photos.length)];
      var angle = Math.random() * Math.PI * 2;
      var dist = 180 + Math.random() * Math.max(w, h) * 0.45;
      el.style.setProperty('--dx', (Math.cos(angle) * dist) + 'px');
      el.style.setProperty('--dy', (Math.sin(angle) * dist) + 'px');
      el.style.setProperty('--rot', (Math.random() * 720 - 360) + 'deg');
      el.style.setProperty('--dur', (2.4 + Math.random() * 1.8) + 's');
      el.style.setProperty('--delay', (Math.random() * 0.4) + 's');
      el.style.left = cx + 'px';
      el.style.top = cy + 'px';
      container.appendChild(el);
    }

    for (var s = 0; s < 40; s++) {
      var sp = document.createElement('div');
      sp.className = 'bomb-spark';
      var sa = Math.random() * Math.PI * 2;
      var sd = 90 + Math.random() * Math.max(w, h) * 0.55;
      sp.style.setProperty('--dx', (Math.cos(sa) * sd) + 'px');
      sp.style.setProperty('--dy', (Math.sin(sa) * sd) + 'px');
      sp.style.setProperty('--dur', (1.6 + Math.random() * 1.2) + 's');
      sp.style.setProperty('--delay', (Math.random() * 0.5) + 's');
      sp.style.left = cx + 'px';
      sp.style.top = cy + 'px';
      container.appendChild(sp);
    }

    document.body.classList.add('bomb-shake');
    setTimeout(function() { document.body.classList.remove('bomb-shake'); }, 1600);
    setTimeout(function() { container.remove(); }, 7000);
  }

  function setFinalMode(isFinal) {
    controls.classList.toggle('hidden', isFinal);
    bookContainer.classList.toggle('hidden', isFinal);
    if (isFinal) {
      bombExplosion();
      setTimeout(function() {
        flowerOverlay.classList.add('visible');
        setTimeout(function() { flowerOverlay.classList.remove('flower-paused'); }, 800);
      }, 3600);
    } else {
      flowerOverlay.classList.remove('visible');
      flowerOverlay.classList.add('flower-paused');
    }
  }

  function spawnHeart(x, y, delay) {
    var h = document.createElement('img');
    h.className = 'floating-heart';
    h.src = ['efek emot/1.png', 'efek emot/2.png', 'efek emot/3.png'][Math.floor(Math.random() * 3)];
    h.alt = '';
    h.draggable = false;
    h.style.left = x + 'px';
    h.style.top = y + 'px';
    var size = 26 + Math.random() * 30;
    h.style.width = size + 'px';
    h.style.height = 'auto';
    var dur = 2.5 + Math.random() * 2.5;
    h.style.animationDuration = dur + 's';
    h.style.animationDelay = (delay || 0) + 's';
    document.body.appendChild(h);
    setTimeout(function() { h.remove(); }, (dur + (delay || 0)) * 1000 + 200);
  }

  function spawnHeartBurst(count) {
    var w = window.innerWidth, h = window.innerHeight, cx = w / 2, cy = h / 2;
    for (var i = 0; i < count; i++) {
      var x = cx + (Math.random() - 0.5) * w * 0.6;
      var y = cy + (Math.random() - 0.5) * h * 0.4;
      spawnHeart(x, y, Math.random() * 0.5);
    }
  }

  function spawnHeartRing(count) {
    var cx = window.innerWidth / 2, cy = window.innerHeight / 2;
    for (var i = 0; i < count; i++) {
      var angle = (i / count) * Math.PI * 2;
      var radius = 90 + Math.random() * 140;
      spawnHeart(cx + Math.cos(angle) * radius, cy + Math.sin(angle) * radius, Math.random() * 0.3);
    }
  }

  function stopAutoPlay() {
    isPlaying = false;
    togglePlay.innerText = '\u25B6 Auto Play';
    clearInterval(playInterval);
  }

  function updateBook() {
    pages.forEach(function(page, index) {
      if (index < currentPage) {
        page.classList.add('flipped');
        page.style.zIndex = totalPages + index;
      } else {
        page.classList.remove('flipped');
        page.style.zIndex = totalPages - index;
      }
    });
    var isFinal = currentPage === totalPages;
    setFinalMode(isFinal);
    if (isFinal) {
      setTimeout(function() { spawnHeartBurst(18); }, 3200);
      setTimeout(function() { spawnHeartBurst(12); }, 4700);
      heartInterval = setInterval(function() { spawnHeartBurst(4); }, 4500);
    } else {
      if (heartInterval) { clearInterval(heartInterval); heartInterval = null; }
    }
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', function() {
      if (currentPage < totalPages) { currentPage++; if (currentPage === totalPages && isPlaying) stopAutoPlay(); updateBook(); if (currentPage > 0 && currentPage < totalPages) { spawnHeartBurst(6); setTimeout(function() { spawnHeartBurst(4); }, 400); setTimeout(function() { spawnHeartRing(6); }, 200); } }
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', function() {
      if (currentPage > 0) { currentPage--; updateBook(); }
    });
  }

  if (togglePlay) {
    togglePlay.addEventListener('click', function() {
      if (!isPlaying) {
        isPlaying = true;
        togglePlay.innerText = '\u23F8 Pause';
        playInterval = setInterval(function() {
          if (currentPage < totalPages) { currentPage++; updateBook(); spawnHeartBurst(6); setTimeout(function() { spawnHeartRing(6); }, 150); } else { stopAutoPlay(); }
        }, 3000);
      } else { stopAutoPlay(); }
    });
  }

  // ─── ALBUM: Music Toggle (assets/lagu.mp3.mp3) ───
  var musicBtn = document.getElementById('musicBtn');
  if (musicBtn && music) {
    var updateMusicBtn = function() {
      musicBtn.innerHTML = music.paused ? '\uD83C\uDFB5 Music' : '\uD83C\uDFB5 Pause';
      if (!music.paused) musicBtn.classList.add('active');
      else musicBtn.classList.remove('active');
    };
    musicBtn.addEventListener('click', function() {
      if (music.paused) { music.play().catch(function() {}); } else { music.pause(); }
      updateMusicBtn();
    });
    music.addEventListener('play', updateMusicBtn);
    music.addEventListener('pause', updateMusicBtn);
    updateMusicBtn();
  }

});
