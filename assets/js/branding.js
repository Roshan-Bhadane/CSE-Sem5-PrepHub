/**
 * CSE-Sem5-PrepHub — Center-Focused Character Assistant & Branding System
 * 
 * Features:
 * 1. Prominent center-focused personal study assistant with backdrop overlay.
 * 2. Five contextual states & dialogues (Home, Explore, Thinking/Strategy, Motivation, About).
 * 3. Minimized bottom-left floating launcher for instant reopening.
 * 4. Interactive in-modal state pills allowing the student to switch character poses.
 * 5. Gentle auto-dismissal (5.5s) if user does not interact, cancellable on hover/click.
 * 6. SessionStorage awareness so students are not interrupted repeatedly.
 * 7. Dynamic copyright year in footers.
 */

(function () {
  'use strict';

  // ─── CHARACTER STATES & DIALOGUES ───
  var STATES = {
    home: {
      id: 'home',
      name: 'Welcome',
      tag: 'PREPHUB STUDY ASSISTANT',
      image: 'assets/avatars/avatar-home.png',
      dialogue: "Hey, future engineer! 👋 Welcome to PrepHub. Your next exam preparation starts here. Let's make every question count!",
      ctaText: "Let's Prepare 🚀"
    },
    explore: {
      id: 'explore',
      name: 'Explore',
      tag: 'SUBJECT EXPLORATION',
      image: 'assets/avatars/avatar-explore.png',
      dialogue: "Not sure where to start? Explore your subjects, check important PYQs, and discover the topics that matter most!",
      ctaText: "Explore PYQs 📚"
    },
    thinking: {
      id: 'thinking',
      name: 'Strategy',
      tag: 'EXAM STRATEGY',
      image: 'assets/avatars/avatar-thinking.png',
      dialogue: "Not every question is equally important. Let's focus on frequently repeated topics and prepare smarter, not harder!",
      ctaText: "Got it! 🎯"
    },
    motivation: {
      id: 'motivation',
      name: 'Motivation',
      tag: 'STUDY MOTIVATION',
      image: 'assets/avatars/avatar-motivation.png',
      dialogue: "One question at a time, one concept at a time. Stay consistent, track your progress, and trust your preparation! 🚀",
      ctaText: "Stay Consistent 💪"
    },
    about: {
      id: 'about',
      name: 'Creator',
      tag: 'MEET THE CREATOR',
      image: 'assets/avatars/avatar-about.png',
      dialogue: "Hey! I'm Roshan, the creator of PrepHub. I built this platform to help DBATU CSE students prepare smarter using previous-year question papers and exam insights.",
      ctaText: "Behind PrepHub 👤"
    }
  };

  // ─── PAGE CONTEXT DETECTION ───
  function getInitialState() {
    var path = window.location.pathname.toLowerCase();
    if (path.indexOf('sem4index') !== -1) {
      return 'explore';
    } else if (path.indexOf('ml.html') !== -1 || path.indexOf('toc.html') !== -1 || path.indexOf('os.html') !== -1 || path.indexOf('dbms') !== -1) {
      return 'thinking';
    } else if (path.indexOf('wc.html') !== -1 || path.indexOf('cg.html') !== -1) {
      return 'motivation';
    } else {
      // index.html or root
      return 'home';
    }
  }

  var currentStateKey = getInitialState();
  var autoDismissTimer = null;
  var userInteracted = false;

  // ─── DOM INJECTION & MOUNT ───
  function initAssistantSystem() {
    if (document.getElementById('prephub-modal-backdrop')) return;

    var initial = STATES[currentStateKey] || STATES.home;

    // 1. Center Modal Backdrop & Card
    var backdrop = document.createElement('div');
    backdrop.id = 'prephub-modal-backdrop';
    backdrop.className = 'prephub-modal-backdrop';

    backdrop.innerHTML = [
      '<div class="prephub-center-modal" id="prephub-center-modal" role="dialog" aria-modal="true" aria-labelledby="prephub-dialogue-tag">',
      '  <button class="prephub-modal-close" id="prephub-modal-close" title="Close Assistant" aria-label="Close dialog">&times;</button>',
      '  <div class="prephub-character-stage">',
      '    <img src="' + initial.image + '" alt="PrepHub Student Assistant" class="prephub-character-img" id="prephub-character-img">',
      '  </div>',
      '  <div class="prephub-dialogue-card">',
      '    <div class="prephub-dialogue-tag" id="prephub-dialogue-tag">' + initial.tag + '</div>',
      '    <p class="prephub-dialogue-text" id="prephub-dialogue-text">' + initial.dialogue + '</p>',
      '    <div class="prephub-modal-actions">',
      '      <div class="prephub-state-pills" id="prephub-state-pills">',
      '        <button class="state-pill' + (initial.id === 'home' ? ' active' : '') + '" data-state="home">👋 Welcome</button>',
      '        <button class="state-pill' + (initial.id === 'thinking' ? ' active' : '') + '" data-state="thinking">💡 Strategy</button>',
      '        <button class="state-pill' + (initial.id === 'explore' ? ' active' : '') + '" data-state="explore">🔍 Explore</button>',
      '        <button class="state-pill' + (initial.id === 'motivation' ? ' active' : '') + '" data-state="motivation">🚀 Motivation</button>',
      '        <button class="state-pill' + (initial.id === 'about' ? ' active' : '') + '" data-state="about">👤 Creator</button>',
      '      </div>',
      '      <button class="prephub-cta-btn" id="prephub-cta-btn">' + initial.ctaText + '</button>',
      '    </div>',
      '  </div>',
      '</div>'
    ].join('\n');

    document.body.appendChild(backdrop);

    // 2. Minimized Floating Launcher (Bottom-Left)
    var launcher = document.createElement('button');
    launcher.id = 'prephub-minimized-launcher';
    launcher.className = 'prephub-minimized-launcher';
    launcher.setAttribute('aria-label', 'Open PrepHub Study Assistant');
    launcher.title = 'Open Study Assistant 💡';

    launcher.innerHTML = [
      '<img src="' + initial.image + '" alt="Study Assistant" class="launcher-avatar-thumb" id="launcher-avatar-thumb">',
      '<span class="launcher-pulse-dot"></span>',
      '<span class="launcher-hover-label">Study Assistant 💡</span>'
    ].join('\n');

    document.body.appendChild(launcher);

    // ─── CONTROLLER FUNCTIONS ───
    var charImg = document.getElementById('prephub-character-img');
    var tagEl = document.getElementById('prephub-dialogue-tag');
    var textEl = document.getElementById('prephub-dialogue-text');
    var ctaBtn = document.getElementById('prephub-cta-btn');
    var closeBtn = document.getElementById('prephub-modal-close');
    var launcherThumb = document.getElementById('launcher-avatar-thumb');
    var modalBox = document.getElementById('prephub-center-modal');

    function applyState(stateKey) {
      var state = STATES[stateKey] || STATES.home;
      currentStateKey = stateKey;

      if (charImg) {
        charImg.style.opacity = '0';
        charImg.style.transform = 'scale(0.96)';
        setTimeout(function () {
          charImg.src = state.image;
          charImg.style.opacity = '1';
          charImg.style.transform = 'scale(1)';
        }, 150);
      }

      if (launcherThumb) {
        launcherThumb.src = state.image;
      }

      if (tagEl) tagEl.textContent = state.tag;
      if (textEl) textEl.textContent = state.dialogue;
      if (ctaBtn) ctaBtn.textContent = state.ctaText;

      // Update pills
      var pills = document.querySelectorAll('.state-pill');
      pills.forEach(function (p) {
        if (p.getAttribute('data-state') === stateKey) {
          p.classList.add('active');
        } else {
          p.classList.remove('active');
        }
      });
    }

    function openModal(stateKey) {
      if (stateKey) applyState(stateKey);
      backdrop.classList.add('active');

      // Clear any previous auto-dismiss timer
      if (autoDismissTimer) clearTimeout(autoDismissTimer);

      // Auto dismiss after 5.5s ONLY if user has not interacted
      autoDismissTimer = setTimeout(function () {
        if (!userInteracted && backdrop.classList.contains('active')) {
          closeModal();
        }
      }, 5500);
    }

    function closeModal() {
      backdrop.classList.remove('active');
      if (autoDismissTimer) clearTimeout(autoDismissTimer);
    }

    // Cancel auto-dismiss if user moves mouse inside modal or interacts
    modalBox.addEventListener('mouseenter', function () {
      userInteracted = true;
      if (autoDismissTimer) clearTimeout(autoDismissTimer);
    });
    modalBox.addEventListener('touchstart', function () {
      userInteracted = true;
      if (autoDismissTimer) clearTimeout(autoDismissTimer);
    }, { passive: true });

    // Close button
    closeBtn.addEventListener('click', function (e) {
      e.stopPropagation();
      userInteracted = true;
      closeModal();
    });

    // Backdrop click outside card
    backdrop.addEventListener('click', function (e) {
      if (e.target === backdrop) {
        userInteracted = true;
        closeModal();
      }
    });

    // Escape key
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && backdrop.classList.contains('active')) {
        closeModal();
      }
    });

    // CTA button click
    ctaBtn.addEventListener('click', function () {
      userInteracted = true;
      closeModal();
      // If on creator state, smoothly scroll to #about if available
      if (currentStateKey === 'about') {
        var aboutEl = document.getElementById('about');
        if (aboutEl) {
          aboutEl.scrollIntoView({ behavior: 'smooth' });
        } else if (window.location.pathname.indexOf('index.html') === -1) {
          window.location.href = 'index.html#about';
        }
      }
    });

    // State pills click
    var pillContainer = document.getElementById('prephub-state-pills');
    if (pillContainer) {
      pillContainer.addEventListener('click', function (e) {
        var btn = e.target.closest('.state-pill');
        if (!btn) return;
        userInteracted = true;
        var st = btn.getAttribute('data-state');
        if (st && STATES[st]) {
          applyState(st);
        }
      });
    }

    // Launcher click re-opens the center-focused assistant!
    launcher.addEventListener('click', function () {
      userInteracted = true;
      openModal(currentStateKey);
    });

    // ─── INITIAL TRIGGER PER SESSION ───
    var sessionKey = 'prephub_modal_shown_' + currentStateKey;
    var hasBeenShown = sessionStorage.getItem(sessionKey);

    if (!hasBeenShown) {
      sessionStorage.setItem(sessionKey, 'true');
      // Entrance delay for smooth page render
      setTimeout(function () {
        openModal(currentStateKey);
      }, 700);
    }
  }

  // ─── DYNAMIC COPYRIGHT YEAR ───
  function initDynamicYear() {
    var year = new Date().getFullYear();
    var targets = document.querySelectorAll('#copyright-year, .copyright-year');
    targets.forEach(function (el) {
      el.textContent = year;
    });
  }

  // ─── INITIALIZE ───
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () {
      initAssistantSystem();
      initDynamicYear();
    });
  } else {
    initAssistantSystem();
    initDynamicYear();
  }
})();
