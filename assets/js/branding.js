/**
 * CSE-Sem5-PrepHub — Dual Avatar Interaction & Branding System
 * 
 * 1. Homepage (index.html):
 *    - Prominent, center-focused personal study assistant with backdrop overlay.
 *    - Large character image (avatar-home.png).
 *    - Interactive state pills (Welcome, Strategy, Explore, Motivation, Creator).
 *    - Minimized launcher in bottom-left for instant reopening.
 * 
 * 2. All Other Pages (ml.html, toc.html, os.html, dbms.html, wc.html, cg.html, sem4index.html):
 *    - Compact corner speech bubble & circular avatar in bottom-left.
 *    - Exam strategy / subject-focused dialogues (avatar-thinking.png, avatar-explore.png, etc.).
 *    - Smooth appearance, auto-dismiss, and click-to-cycle interactivity.
 *    - Zero collision with the bottom-right progress widget.
 */

(function () {
  'use strict';

  // ─── DIALOGUE & ASSET DEFINITIONS ───
  var STATES = {
    home: {
      id: 'home',
      name: 'Welcome',
      tag: 'PREPHUB STUDY ASSISTANT',
      image: 'assets/avatars/avatar-home.png',
      dialogue: "Hey, future engineer! 👋 Welcome to PrepHub. Your next exam preparation starts here. Let's make every question count!",
      ctaText: "Let's Prepare 🚀"
    },
    thinking: {
      id: 'thinking',
      name: 'Strategy',
      tag: 'EXAM STRATEGY',
      image: 'assets/avatars/avatar-thinking.png',
      dialogue: "Not every question is equally important. Let's focus on frequently repeated topics and prepare smarter, not harder!",
      ctaText: "Got it! 🎯"
    },
    explore: {
      id: 'explore',
      name: 'Explore',
      tag: 'SUBJECT EXPLORATION',
      image: 'assets/avatars/avatar-explore.png',
      dialogue: "Not sure where to start? Explore your subjects, check important PYQs, and discover the topics that matter most!",
      ctaText: "Explore PYQs 📚"
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

  // ─── PAGE DETECTION ───
  function isHomePage() {
    var path = window.location.pathname.toLowerCase();
    var file = path.substring(path.lastIndexOf('/') + 1);
    return file === '' || file === 'index.html';
  }

  function getSubjectInitialState() {
    var path = window.location.pathname.toLowerCase();
    if (path.indexOf('sem4index') !== -1) {
      return 'explore';
    } else if (path.indexOf('wc.html') !== -1 || path.indexOf('cg.html') !== -1) {
      return 'motivation';
    } else {
      // Default for subject question banks (ml, toc, os, dbms)
      return 'thinking';
    }
  }

  // ═══════════════════════════════════════════════════════════════════
  // 1. HOMEPAGE SYSTEM — PROMINENT CENTER-FOCUSED ASSISTANT
  // ═══════════════════════════════════════════════════════════════════
  function initHomeCenterModal() {
    if (document.getElementById('prephub-modal-backdrop')) return;

    var currentStateKey = 'home';
    var initial = STATES.home;
    var autoDismissTimer = null;
    var userInteracted = false;

    // Create Center Modal Backdrop & Stage
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
      '        <button class="state-pill active" data-state="home">👋 Welcome</button>',
      '        <button class="state-pill" data-state="thinking">💡 Strategy</button>',
      '        <button class="state-pill" data-state="explore">🔍 Explore</button>',
      '        <button class="state-pill" data-state="motivation">🚀 Motivation</button>',
      '        <button class="state-pill" data-state="about">👤 Creator</button>',
      '      </div>',
      '      <button class="prephub-cta-btn" id="prephub-cta-btn">' + initial.ctaText + '</button>',
      '    </div>',
      '  </div>',
      '</div>'
    ].join('\n');

    document.body.appendChild(backdrop);

    // Create Minimized Floating Launcher (Bottom-Left)
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

    modalBox.addEventListener('mouseenter', function () {
      userInteracted = true;
      if (autoDismissTimer) clearTimeout(autoDismissTimer);
    });
    modalBox.addEventListener('touchstart', function () {
      userInteracted = true;
      if (autoDismissTimer) clearTimeout(autoDismissTimer);
    }, { passive: true });

    closeBtn.addEventListener('click', function (e) {
      e.stopPropagation();
      userInteracted = true;
      closeModal();
    });

    backdrop.addEventListener('click', function (e) {
      if (e.target === backdrop) {
        userInteracted = true;
        closeModal();
      }
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && backdrop.classList.contains('active')) {
        closeModal();
      }
    });

    ctaBtn.addEventListener('click', function () {
      userInteracted = true;
      closeModal();
      if (currentStateKey === 'about') {
        var aboutEl = document.getElementById('about');
        if (aboutEl) aboutEl.scrollIntoView({ behavior: 'smooth' });
      }
    });

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

    launcher.addEventListener('click', function () {
      userInteracted = true;
      openModal(currentStateKey);
    });

    // Session-based entrance on first visit
    var hasShown = sessionStorage.getItem('prephub_modal_shown_home');
    if (!hasShown) {
      sessionStorage.setItem('prephub_modal_shown_home', 'true');
      setTimeout(function () {
        openModal('home');
      }, 650);
    }
  }

  // ═══════════════════════════════════════════════════════════════════
  // 2. ALL OTHER PAGES — COMPACT CORNER SPEECH BUBBLE ASSISTANT
  // ═══════════════════════════════════════════════════════════════════
  function initCornerAssistant() {
    if (document.getElementById('prephub-corner-widget')) return;

    var initialKey = getSubjectInitialState();
    var cycleKeys = ['thinking', 'motivation', 'explore', 'about'];
    var currentCycleIdx = cycleKeys.indexOf(initialKey);
    if (currentCycleIdx === -1) currentCycleIdx = 0;

    var state = STATES[initialKey] || STATES.thinking;
    var autoDismissTimer = null;

    var widget = document.createElement('div');
    widget.id = 'prephub-corner-widget';
    widget.className = 'prephub-corner-widget';
    widget.setAttribute('role', 'region');
    widget.setAttribute('aria-label', 'Study Assistant Guide');

    widget.innerHTML = [
      '<div class="corner-speech-bubble" id="corner-speech-bubble" role="dialog" aria-live="polite">',
      '  <div class="corner-bubble-header">',
      '    <span class="corner-bubble-tag" id="corner-bubble-tag">' + state.tag + '</span>',
      '    <button class="corner-bubble-close" id="corner-bubble-close" title="Dismiss" aria-label="Close dialogue">&times;</button>',
      '  </div>',
      '  <div class="corner-bubble-message" id="corner-bubble-message">' + state.dialogue + '</div>',
      '  <div class="corner-bubble-footer">',
      '    <span>Tap avatar for tips 💡</span>',
      '  </div>',
      '</div>',
      '<button class="corner-avatar-btn" id="corner-avatar-btn" title="Click for study tips" aria-label="Open study assistant">',
      '  <img src="' + state.image + '" alt="Study Assistant" class="corner-avatar-img" id="corner-avatar-img">',
      '  <span class="corner-status-dot"></span>',
      '</button>'
    ].join('\n');

    document.body.appendChild(widget);

    var bubble = document.getElementById('corner-speech-bubble');
    var avatarBtn = document.getElementById('corner-avatar-btn');
    var closeBtn = document.getElementById('corner-bubble-close');
    var tagEl = document.getElementById('corner-bubble-tag');
    var msgEl = document.getElementById('corner-bubble-message');
    var imgEl = document.getElementById('corner-avatar-img');

    function showBubble(st, duration) {
      if (autoDismissTimer) clearTimeout(autoDismissTimer);

      if (tagEl) tagEl.textContent = st.tag;
      if (msgEl) msgEl.textContent = st.dialogue;
      if (imgEl && imgEl.src.indexOf(st.image) === -1) {
        imgEl.src = st.image;
      }

      bubble.classList.add('active');

      var d = duration || 4800;
      autoDismissTimer = setTimeout(function () {
        hideBubble();
      }, d);
    }

    function hideBubble() {
      bubble.classList.remove('active');
      if (autoDismissTimer) clearTimeout(autoDismissTimer);
    }

    closeBtn.addEventListener('click', function (e) {
      e.stopPropagation();
      hideBubble();
      sessionStorage.setItem('prephub_corner_dismissed_' + initialKey, 'true');
    });

    avatarBtn.addEventListener('click', function () {
      if (!bubble.classList.contains('active')) {
        var currentSt = STATES[cycleKeys[currentCycleIdx]];
        showBubble(currentSt, 5500);
      } else {
        // Cycle to next tip
        currentCycleIdx = (currentCycleIdx + 1) % cycleKeys.length;
        var nextSt = STATES[cycleKeys[currentCycleIdx]];
        showBubble(nextSt, 5500);
      }
    });

    // Session-based entrance
    var isDismissed = sessionStorage.getItem('prephub_corner_dismissed_' + initialKey);
    if (!isDismissed) {
      setTimeout(function () {
        showBubble(state, 4800);
      }, 750);
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

  // ─── INITIALIZE BASED ON PAGE ───
  function init() {
    if (isHomePage()) {
      initHomeCenterModal();
    } else {
      initCornerAssistant();
    }
    initDynamicYear();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
