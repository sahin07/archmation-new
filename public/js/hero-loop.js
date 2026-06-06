/**
 * Hero loop: WELCOME TO ARCHMATION + CREATIVE & STUDIOS → fade → LET US | rotating phrases → fade → repeat.
 */
(function () {
  const WORDS = ['BUILD WEBSITE', 'MAKE VIDEOS', 'RANK ON GOOGLE'];
  const PHRASE_MS = 5000;
  const WELCOME_HOLD_MS = 2000;
  const FADE_MS = 600;
  const STAGGER = 0.05;
  const REVEAL_DURATION = 1;

  let phraseIndex = 0;
  let loopRunning = false;
  let maskRevealEnabled = null;

  function checkMaskAsset() {
    if (maskRevealEnabled !== null) {
      return Promise.resolve(maskRevealEnabled);
    }

    function probeImage() {
      return new Promise(function (resolve) {
        var img = new Image();
        img.onload = function () {
          maskRevealEnabled = img.naturalWidth > 16 && img.naturalHeight > 0;
          resolve(maskRevealEnabled);
        };
        img.onerror = function () {
          maskRevealEnabled = false;
          resolve(false);
        };
        img.src = 'images/masqueAccueil.png';
      });
    }

    if (typeof fetch !== 'function') {
      return probeImage();
    }

    return fetch('images/masqueAccueil.png', { method: 'HEAD' })
      .then(function (res) {
        var type = res.headers.get('content-type') || '';
        if (!res.ok || type.indexOf('image/') !== 0) {
          maskRevealEnabled = false;
          return false;
        }
        return probeImage();
      })
      .catch(function () {
        maskRevealEnabled = false;
        return false;
      });
  }

  function applyMaskMode(letter, useMask) {
    if (useMask) {
      letter.classList.add('t-mask');
      letter.style.webkitMaskImage = '';
      letter.style.maskImage = '';
      return;
    }
    letter.classList.remove('t-mask');
    letter.style.webkitMaskImage = 'none';
    letter.style.maskImage = 'none';
    letter.style.webkitMaskPosition = '';
    letter.style.maskPosition = '';
  }

  function getGsap() {
    return window.gsap || window.GSAP || null;
  }

  function isMobileLayout() {
    return window.innerWidth < 1024;
  }

  function delay(ms) {
    return new Promise(function (resolve) {
      setTimeout(resolve, ms);
    });
  }

  function waitForGsap(maxMs) {
    return new Promise(function (resolve) {
      const start = Date.now();
      (function tick() {
        if (getGsap()) return resolve(getGsap());
        if (Date.now() - start >= maxMs) return resolve(null);
        requestAnimationFrame(tick);
      })();
    });
  }

  function getPhases() {
    const root = document.querySelector('.hero-loop-root');
    if (!root) return null;
    return {
      welcome: root.querySelector('.hero-phase--welcome'),
      cta: root.querySelector('.hero-phase--cta'),
    };
  }

  function getWelcomeLetters(phase) {
    if (!phase) return [];
    if (isMobileLayout()) {
      const mobile = phase.querySelector('.hero-welcome-mobile');
      return mobile ? Array.from(mobile.querySelectorAll('i')) : [];
    }
    const letters = [];
    const welcome = phase.querySelector('.hero-welcome-desktop');
    const creative = phase.querySelector('.hero-welcome-creative');
    if (welcome) letters.push.apply(letters, welcome.querySelectorAll('i'));
    if (creative) letters.push.apply(letters, creative.querySelectorAll('i'));
    return letters;
  }

  function getCtaRotateEl(phase) {
    if (!phase) return null;
    return isMobileLayout()
      ? phase.querySelector('.hero-cta-mobile-communication')
      : phase.querySelector('.hero-cta-communication');
  }

  function getCtaPrefixLetters(phase) {
    if (!phase) return [];
    const block = isMobileLayout()
      ? phase.querySelector('.hero-cta-mobile')
      : phase.querySelector('.hero-cta-desktop');
    if (!block) return [];
    const row = block.querySelector('.hero-cta-row');
    if (!row) return [];
    return Array.from(row.querySelectorAll(':scope > i'));
  }

  function markVisible(letters) {
    letters.forEach(function (letter) {
      letter.classList.add('is-visible');
      letter.style.opacity = '1';
    });
  }

  function prepareLetters(letters) {
    var useMask = maskRevealEnabled === true;
    letters.forEach(function (letter) {
      applyMaskMode(letter, useMask);
      letter.classList.remove('is-visible');
      letter.style.opacity = '0';
      if (useMask) {
        letter.style.webkitMaskPosition = '-97% 0%';
        letter.style.maskPosition = '-97% 0%';
      }
      letter.style.animation = '';
    });
  }

  function revealLetters(letters) {
    if (!letters.length) return Promise.resolve();

    var useMask = maskRevealEnabled === true;
    const gsap = getGsap();

    if (!useMask) {
      if (gsap) {
        return new Promise(function (resolve) {
          gsap.fromTo(
            letters,
            { opacity: 0 },
            {
              opacity: 1,
              ease: 'power2.out',
              stagger: STAGGER,
              duration: REVEAL_DURATION,
              onComplete: function () {
                markVisible(letters);
                resolve();
              },
            }
          );
        });
      }

      letters.forEach(function (letter, idx) {
        letter.style.transition = 'opacity ' + REVEAL_DURATION + 's ease';
        letter.style.transitionDelay = idx * STAGGER + 's';
        letter.style.opacity = '1';
      });
      return delay(REVEAL_DURATION * 1000 + letters.length * STAGGER * 1000 + 200).then(
        function () {
          markVisible(letters);
        }
      );
    }

    if (gsap) {
      return new Promise(function (resolve) {
        gsap.fromTo(
          letters,
          { webkitMaskPosition: '-97% 0%', maskPosition: '-97% 0%', opacity: 0 },
          {
            webkitMaskPosition: '0% 0%',
            maskPosition: '0% 0%',
            opacity: 1,
            ease: 'steps(17)',
            stagger: STAGGER,
            duration: REVEAL_DURATION,
            onComplete: function () {
              markVisible(letters);
              resolve();
            },
          }
        );
      });
    }

    letters.forEach(function (letter, idx) {
      letter.style.animation = 'none';
      void letter.offsetWidth;
      letter.style.animation = 'heroLoopMaskReveal 1s steps(17) forwards';
      letter.style.animationDelay = idx * STAGGER + 's';
    });
    return delay(REVEAL_DURATION * 1000 + letters.length * STAGGER * 1000 + 200).then(
      function () {
        markVisible(letters);
      }
    );
  }

  function fadeLettersOut(letters) {
    const gsap = getGsap();
    letters.forEach(function (l) {
      l.classList.remove('is-visible');
    });
    if (gsap && letters.length) {
      return gsap.to(letters, { opacity: 0, duration: FADE_MS / 1000 });
    }
    letters.forEach(function (letter) {
      letter.style.transition = 'opacity ' + FADE_MS + 'ms ease';
      letter.style.opacity = '0';
    });
    return delay(FADE_MS);
  }

  function fadePhase(phase, show) {
    const gsap = getGsap();
    if (!phase) return delay(0);

    if (show) {
      phase.removeAttribute('hidden');
      phase.classList.add('is-active');
    }

    if (gsap) {
      return gsap.to(phase, {
        opacity: show ? 1 : 0,
        duration: FADE_MS / 1000,
        ease: 'power2.inOut',
        onComplete: function () {
          if (!show) {
            phase.setAttribute('hidden', '');
            phase.classList.remove('is-active');
          }
        },
      });
    }

    phase.style.transition = 'opacity ' + FADE_MS + 'ms ease';
    phase.style.opacity = show ? '1' : '0';
    return delay(FADE_MS).then(function () {
      if (!show) {
        phase.setAttribute('hidden', '');
        phase.classList.remove('is-active');
      }
    });
  }

  function setPhaseVisibility(phases, active) {
    if (active === 'welcome') {
      phases.welcome.removeAttribute('hidden');
      phases.welcome.classList.add('is-active');
      phases.welcome.style.opacity = '1';
      phases.cta.setAttribute('hidden', '');
      phases.cta.classList.remove('is-active');
      phases.cta.style.opacity = '0';
    } else {
      phases.cta.removeAttribute('hidden');
      phases.cta.classList.add('is-active');
      phases.cta.style.opacity = '1';
      phases.welcome.setAttribute('hidden', '');
      phases.welcome.classList.remove('is-active');
      phases.welcome.style.opacity = '0';
    }
  }

  function fillPhrase(container, text) {
    var useMask = maskRevealEnabled === true;
    container.innerHTML = '';
    text.split('').forEach(function (ch) {
      if (ch === ' ') {
        const space = document.createElement('span');
        space.className = 'space';
        container.appendChild(space);
        return;
      }
      const letter = document.createElement('i');
      letter.textContent = ch;
      applyMaskMode(letter, useMask);
      container.appendChild(letter);
    });
  }

  function swapPhrase(rotateEl, text) {
    const gsap = getGsap();
    const oldLetters = rotateEl.querySelectorAll('i');

    function swapIn() {
      fillPhrase(rotateEl, text);
      return revealLetters(Array.from(rotateEl.querySelectorAll('i')));
    }

    if (!oldLetters.length) {
      return swapIn();
    }

    if (gsap) {
      return new Promise(function (resolve) {
        gsap.to(oldLetters, {
          opacity: 0,
          duration: 0.2,
          onComplete: function () {
            swapIn().then(resolve);
          },
        });
      });
    }

    return fadeLettersOut(Array.from(oldLetters)).then(swapIn);
  }

  function clearThemeWordInterval() {
    if (window._wordChangeInterval) {
      clearInterval(window._wordChangeInterval);
      window._wordChangeInterval = null;
    }
  }

  function isLoaderComplete() {
    var loader = document.getElementById('loader-wrap');
    if (!loader || !loader.isConnected) return true;
    if (
      loader.classList.contains('hidden') ||
      loader.classList.contains('fadeOutLoader')
    ) {
      return true;
    }
    var pct = document.getElementById('percentage-text');
    if (pct) {
      var n = parseInt(pct.textContent.replace(/\D/g, ''), 10);
      if (!isNaN(n) && n >= 100) return true;
    }
    return (
      getComputedStyle(loader).display === 'none' || loader.offsetParent === null
    );
  }

  function waitForWindowLoad() {
    if (document.readyState === 'complete') return Promise.resolve();
    return new Promise(function (resolve) {
      window.addEventListener('load', resolve, { once: true });
    });
  }

  function waitForLoaderComplete() {
    if (isLoaderComplete()) return Promise.resolve();
    return new Promise(function (resolve) {
      var loader = document.getElementById('loader-wrap');
      var pct = document.getElementById('percentage-text');
      var settled = false;

      function done() {
        if (settled) return;
        settled = true;
        obs.disconnect();
        clearInterval(poll);
        clearTimeout(fallback);
        resolve();
      }

      var obs = new MutationObserver(done);
      if (loader) {
        obs.observe(loader, {
          attributes: true,
          attributeFilter: ['class', 'style'],
        });
      }
      if (pct) {
        obs.observe(pct, {
          childList: true,
          characterData: true,
          subtree: true,
        });
      }
      var poll = setInterval(function () {
        if (isLoaderComplete()) done();
      }, 80);
      var fallback = setTimeout(done, 45000);
    });
  }

  function waitForFullPageReady() {
    return waitForWindowLoad().then(waitForLoaderComplete);
  }

  function resetLettersForReveal(letters) {
    var gsap = getGsap();
    if (gsap && letters.length) {
      gsap.killTweensOf(letters);
    }
    prepareLetters(letters);
  }

  function primeWelcomeHidden() {
    var root = document.querySelector('.hero-loop-root');
    var phases = getPhases();
    if (!root || !phases) return;
    root.classList.add('hero-loop-pending');
    var letters = getWelcomeLetters(phases.welcome);
    resetLettersForReveal(letters);
  }

  async function runWelcomePhase(phases) {
    setPhaseVisibility(phases, 'welcome');
    const letters = getWelcomeLetters(phases.welcome);
    if (!letters.length) return;

    prepareLetters(letters);
    await revealLetters(letters);
    await delay(WELCOME_HOLD_MS);
    await fadeLettersOut(letters);
    await fadePhase(phases.welcome, false);
  }

  async function runCtaPhase(phases) {
    phraseIndex = 0;
    const rotateEl = getCtaRotateEl(phases.cta);
    if (!rotateEl) return;

    fillPhrase(rotateEl, WORDS[0]);
    await fadePhase(phases.cta, true);

    const prefix = getCtaPrefixLetters(phases.cta);
    const phraseLetters = Array.from(rotateEl.querySelectorAll('i'));
    const allLetters = prefix.concat(phraseLetters);
    prepareLetters(allLetters);
    await revealLetters(allLetters);

    for (var i = 1; i < WORDS.length; i++) {
      await delay(PHRASE_MS);
      await swapPhrase(rotateEl, WORDS[i]);
    }

    await delay(PHRASE_MS);

    const ctaBlock = isMobileLayout()
      ? phases.cta.querySelector('.hero-cta-mobile')
      : phases.cta.querySelector('.hero-cta-desktop');
    const ctaLetters = ctaBlock ? Array.from(ctaBlock.querySelectorAll('i')) : [];
    await fadeLettersOut(ctaLetters);
    await fadePhase(phases.cta, false);
  }

  async function runLoop() {
    const phases = getPhases();
    if (!phases || loopRunning) return;
    loopRunning = true;
    clearThemeWordInterval();

    while (loopRunning) {
      await runWelcomePhase(phases);
      await runCtaPhase(phases);
    }
  }

  function revealHeroTagline() {
    var tagline = document.querySelector('.accueilBlocTitreH1 > .hero-accueil-tagline');
    if (!tagline) return;

    var text = tagline.querySelector('.citation-txt');
    var arrows = tagline.querySelectorAll('.draw-arrow');
    if (text) {
      text.style.opacity = '1';
    }

    var gsap = getGsap();
    if (gsap && arrows.length) {
      gsap.killTweensOf(arrows);
      gsap.set(arrows, { strokeDashoffset: 400 });
      gsap.to(arrows, {
        strokeDashoffset: 0,
        duration: 2,
        stagger: 0.3,
        ease: 'power2.out',
      });
    } else {
      arrows.forEach(function (path) {
        path.style.strokeDashoffset = '0';
      });
    }
  }

  async function init() {
    var root = document.querySelector('.hero-loop-root');
    if (!root) return;

    primeWelcomeHidden();
    clearThemeWordInterval();

    await waitForFullPageReady();
    revealHeroTagline();
    await delay(200);
    clearThemeWordInterval();

    await waitForGsap(5000);
    clearThemeWordInterval();
    revealHeroTagline();

    var phases = getPhases();
    if (phases) {
      resetLettersForReveal(getWelcomeLetters(phases.welcome));
    }

    root.classList.remove('hero-loop-pending');
    revealHeroTagline();
    runLoop();
    setTimeout(revealHeroTagline, 500);
    setTimeout(revealHeroTagline, 2000);
    setTimeout(clearThemeWordInterval, 500);
    setInterval(clearThemeWordInterval, 3000);
  }

  async function bootstrap() {
    var root = document.querySelector('.hero-loop-root');
    if (!root) return;

    await checkMaskAsset();
    if (!maskRevealEnabled) {
      root.classList.add('hero-loop-no-mask');
    }

    primeWelcomeHidden();
    init();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', bootstrap);
  } else {
    bootstrap();
  }
})();
