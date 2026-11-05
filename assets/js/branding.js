/**
 * CSE-Sem5-PrepHub — Reusable Avatar Guide & Branding System
 * 
 * Provides:
 * 1. Interactive animated avatar student guide with speech bubble.
 * 2. Automatic contextual dialogue per page.
 * 3. Dynamic copyright year in footers.
 * 4. SessionStorage awareness to avoid repetitive intrusive popups.
 */

(function () {
  'use strict';

  // ─── AVATAR DIALOGUES & ASSETS ───
  var AVATARS = {
    home: {
      src: 'assets/avatars/avatar-home.png',
      tag: 'WELCOME',
      text: 'Hey! Welcome to Preparation Hub. Ready to prepare smarter?'
    },
    explore: {
      src: 'assets/avatars/avatar-explore.png',
      tag: 'PYQ EXPLORATION',
      text: "Looking for important questions? I've got your PYQs covered!"
    },
    thinking: {
      src: 'assets/avatars/avatar-thinking.png',
      tag: 'EXAM STRATEGY',
      text: 'Not every question is equally important. Let\'s focus on what matters!'
    },
    motivation: {
      src: 'assets/avatars/avatar-motivation.png',
      tag: 'STUDY MOTIVATION',
      text: 'Less guessing, more smart preparation. Your exam game starts here!'
    },
    about: {
      src: 'assets/avatars/avatar-about.png',
      tag: 'THE CREATOR',
      text: 'I analysed the papers. I mapped the syllabus. Now it\'s your turn to prepare!'
    }
  };

  // Cycling sequence for interactive clicks
  var CYCLE_KEYS = ['home', 'explore', 'thinking', 'motivation'];

  // Determine current page context
  function getPageContext() {
    var path = window.location.pathname.toLowerCase();
    if (path.indexOf('ml.html') !== -1 || path.indexOf('toc.html') !== -1 || path.indexOf('os.html') !== -1 || path.indexOf('dbms') !== -1) {
      return 'thinking';
    } else if (path.indexOf('wc.html') !== -1 || path.indexOf('cg.html') !== -1) {
      return 'motivation';
    } else {
      // index.html or root
      return 'home';
    }
  }

  var currentContext = getPageContext();
  var currentCycleIndex = CYCLE_KEYS.indexOf(currentContext);
  if (currentCycleIndex === -1) currentCycleIndex = 0;

  var autoDismissTimer = null;

  // ─── MOUNT AVATAR GUIDE WIDGET ───
  function initAvatarWidget() {
    // Avoid duplicate creation
    if (document.getElementById('prephub-avatar-guide')) return;

    var initialData = AVATARS[currentContext] || AVATARS.home;

    var widget = document.createElement('div');
    widget.id = 'prephub-avatar-guide';
    widget.className = 'prephub-avatar-widget';
    widget.setAttribute('role', 'region');
    widget.setAttribute('aria-label', 'Preparation Hub Student Guide');

    widget.innerHTML = [
      '<div class="avatar-speech-bubble" id="avatar-speech-bubble" role="dialog" aria-live="polite">',
      '  <div class="bubble-header">',
      '    <span class="bubble-tag" id="bubble-tag">' + initialData.tag + '</span>',
      '    <button class="bubble-close-btn" id="bubble-close-btn" title="Dismiss guide" aria-label="Close dialogue">&times;</button>',
      '  </div>',
      '  <div class="bubble-message" id="bubble-message">' + initialData.text + '</div>',
      '  <div class="bubble-footer">',
      '    <span class="bubble-action-hint">Tap avatar for tips 💡</span>',
      '  </div>',
      '</div>',
      '<button class="avatar-trigger-btn" id="avatar-trigger-btn" title="Click for study guide tip" aria-label="Open study guide avatar">',
      '  <img src="' + initialData.src + '" alt="Preparation Hub Avatar Guide" class="avatar-img-circle" id="avatar-img-circle">',
      '  <span class="avatar-status-dot"></span>',
      '</button>'
    ].join('\n');

    document.body.appendChild(widget);

    var bubble = document.getElementById('avatar-speech-bubble');
    var triggerBtn = document.getElementById('avatar-trigger-btn');
    var closeBtn = document.getElementById('bubble-close-btn');

    // Show speech bubble
    function showBubble(data, duration) {
      if (autoDismissTimer) clearTimeout(autoDismissTimer);

      var tagEl = document.getElementById('bubble-tag');
      var msgEl = document.getElementById('bubble-message');
      var imgEl = document.getElementById('avatar-img-circle');

      if (tagEl) tagEl.textContent = data.tag;
      if (msgEl) msgEl.textContent = data.text;
      if (imgEl && imgEl.src.indexOf(data.src) === -1) {
        imgEl.src = data.src;
      }

      bubble.classList.add('visible');

      // Auto dismiss after specified time (default 3.8s)
      var d = duration || 3800;
      autoDismissTimer = setTimeout(function () {
        hideBubble();
      }, d);
    }

    // Hide speech bubble
    function hideBubble() {
      bubble.classList.remove('visible');
      if (autoDismissTimer) clearTimeout(autoDismissTimer);
    }

    // Manual click on close button
    closeBtn.addEventListener('click', function (e) {
      e.stopPropagation();
      hideBubble();
      sessionStorage.setItem('prephub_avatar_dismissed', 'true');
    });

    // Clicking avatar button cycles through helpful dialogues
    triggerBtn.addEventListener('click', function () {
      currentCycleIndex = (currentCycleIndex + 1) % CYCLE_KEYS.length;
      var nextKey = CYCLE_KEYS[currentCycleIndex];
      showBubble(AVATARS[nextKey], 4500);
    });

    // Initial load presentation (respect sessionStorage)
    var isDismissed = sessionStorage.getItem('prephub_avatar_dismissed');
    if (!isDismissed) {
      // Gentle delayed entrance so page finishes initial rendering
      setTimeout(function () {
        showBubble(initialData, 3500);
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

  // ─── INITIALIZE ON DOM READY ───
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () {
      initAvatarWidget();
      initDynamicYear();
    });
  } else {
    initAvatarWidget();
    initDynamicYear();
  }
})();
