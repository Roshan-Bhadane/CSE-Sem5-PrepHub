/**
 * CSE-Sem5-PrepHub — Unified Avatar & Branding System
 * 
 * Distinct Avatar Assignments per Subject/Page:
 * - Homepage (index.html): avatar-home.png (Centered modal with 3s auto-dismiss & bottom-left launcher)
 * - Machine Learning (ml.html): avatar-thinking.png (Bottom-left corner assistant)
 * - Theory of Computation (toc.html): avatar-explore.png (Bottom-left corner assistant)
 * - Operating Systems (os.html): avatar-motivation.png (Bottom-left corner assistant)
 * - DBMS (dbms.html / DBMS_QuestionBank_DBATU.html): avatar-about.png (Bottom-left corner assistant)
 * - Wireless Communication (wc.html): avatar-explore.png (Bottom-left corner assistant)
 * - Computer Graphics (cg.html): avatar-thinking.png (Bottom-left corner assistant)
 * - Semester 4 Archive (sem4index.html): avatar-explore.png (Bottom-left corner assistant)
 * - About Section / Creator (#about): avatar-about.png (Bottom-left corner assistant)
 */

(function () {
  'use strict';

  // Prevent multiple executions / duplicate initializations across script loads
  if (window.__prephub_assistant_initialized) {
    return;
  }
  window.__prephub_assistant_initialized = true;

  // ─── CENTRALIZED PAGE CONFIGURATIONS (DISTINCT PER SUBJECT) ───
  var PAGE_CONFIGS = {
    index: {
      id: 'index',
      style: 'centered',
      defaultAvatar: 'assets/avatars/avatar-home.png',
      tag: 'PREPHUB STUDY ASSISTANT',
      dialogue: "Hey, future engineer! 👋 Welcome to PrepHub. Your next exam preparation starts here. Let's make every question count!",
      ctaText: "Let's Prepare 🚀",
      states: {
        home: {
          tag: 'PREPHUB STUDY ASSISTANT',
          image: 'assets/avatars/avatar-home.png',
          dialogue: "Hey, future engineer! 👋 Welcome to PrepHub. Your next exam preparation starts here. Let's make every question count!",
          ctaText: "Let's Prepare 🚀"
        },
        thinking: {
          tag: 'EXAM STRATEGY',
          image: 'assets/avatars/avatar-thinking.png',
          dialogue: "Not every question is equally important. Let's focus on frequently repeated topics and prepare smarter, not harder!",
          ctaText: "Got it! 🎯"
        },
        explore: {
          tag: 'SUBJECT EXPLORATION',
          image: 'assets/avatars/avatar-explore.png',
          dialogue: "Not sure where to start? Explore your subjects, check important PYQs, and discover the topics that matter most!",
          ctaText: "Explore PYQs 📚"
        },
        motivation: {
          tag: 'STUDY MOTIVATION',
          image: 'assets/avatars/avatar-motivation.png',
          dialogue: "One question at a time, one concept at a time. Stay consistent, track your progress, and trust your preparation! 🚀",
          ctaText: "Stay Consistent 💪"
        },
        about: {
          tag: 'MEET THE CREATOR',
          image: 'assets/avatars/avatar-about.png',
          dialogue: "Hey! I'm Roshan, the creator of PrepHub. I built this platform to help DBATU CSE students prepare smarter using previous-year question papers and exam insights.",
          ctaText: "Behind PrepHub 👤"
        }
      }
    },
    ml: {
      id: 'ml',
      style: 'corner',
      defaultAvatar: 'assets/avatars/avatar-thinking.png',
      tag: 'MACHINE LEARNING PYQ',
      dialogue: "Focus heavily on Supervised Learning algorithms, loss functions, and evaluation metrics. These recur every year!",
      tips: [
        {
          tag: 'MACHINE LEARNING PYQ',
          image: 'assets/avatars/avatar-thinking.png',
          dialogue: "Focus heavily on Supervised Learning algorithms, loss functions, and evaluation metrics. These recur every year!"
        },
        {
          tag: 'EXAM STRATEGY',
          image: 'assets/avatars/avatar-explore.png',
          dialogue: "Review mathematical formulations for Linear Regression, SVM margins, and Neural Network backpropagation."
        },
        {
          tag: 'STUDY MOTIVATION',
          image: 'assets/avatars/avatar-motivation.png',
          dialogue: "One question at a time, one concept at a time. Stay consistent, track your progress, and trust your preparation! 🚀"
        }
      ]
    },
    toc: {
      id: 'toc',
      style: 'corner',
      defaultAvatar: 'assets/avatars/avatar-explore.png',
      tag: 'THEORY OF COMPUTATION PYQ',
      dialogue: "DFA/NFA conversions, pumping lemma proofs, and Turing Machine designs carry major marks. Practice these first!",
      tips: [
        {
          tag: 'THEORY OF COMPUTATION PYQ',
          image: 'assets/avatars/avatar-explore.png',
          dialogue: "DFA/NFA conversions, pumping lemma proofs, and Turing Machine designs carry major marks. Practice these first!"
        },
        {
          tag: 'EXAM STRATEGY',
          image: 'assets/avatars/avatar-thinking.png',
          dialogue: "Draw neat state transition diagrams and define 5-tuples and 7-tuples precisely for full marks."
        },
        {
          tag: 'STUDY MOTIVATION',
          image: 'assets/avatars/avatar-motivation.png',
          dialogue: "TOC looks abstract until you solve it step by step. Stay patient and conquer every automata! 🚀"
        }
      ]
    },
    os: {
      id: 'os',
      style: 'corner',
      defaultAvatar: 'assets/avatars/avatar-motivation.png',
      tag: 'OPERATING SYSTEMS PYQ',
      dialogue: "Deadlock avoidance (Banker's Algorithm), CPU scheduling, and page replacement algorithms appear in almost every exam paper!",
      tips: [
        {
          tag: 'OPERATING SYSTEMS PYQ',
          image: 'assets/avatars/avatar-motivation.png',
          dialogue: "Deadlock avoidance (Banker's Algorithm), CPU scheduling, and page replacement algorithms appear in almost every exam paper!"
        },
        {
          tag: 'EXAM STRATEGY',
          image: 'assets/avatars/avatar-thinking.png',
          dialogue: "Practice Gantt charts and numerical calculations for turnaround/waiting time—they are guaranteed points."
        },
        {
          tag: 'STUDY MOTIVATION',
          image: 'assets/avatars/avatar-explore.png',
          dialogue: "Consistent daily revision turns challenging concepts into easy exam wins. You've got this! 🚀"
        }
      ]
    },
    dbms: {
      id: 'dbms',
      style: 'corner',
      defaultAvatar: 'assets/avatars/avatar-about.png',
      tag: 'DBMS EXAM STRATEGY',
      dialogue: "Master Normalization (1NF to BCNF), ER modeling, and ACID transactions—they are guaranteed high-weightage questions!",
      tips: [
        {
          tag: 'DBMS EXAM STRATEGY',
          image: 'assets/avatars/avatar-about.png',
          dialogue: "Master Normalization (1NF to BCNF), ER modeling, and ACID transactions—they are guaranteed high-weightage questions!"
        },
        {
          tag: 'EXAM STRATEGY',
          image: 'assets/avatars/avatar-thinking.png',
          dialogue: "Practice relational algebra expressions, SQL joins, and conflict serializability testing."
        },
        {
          tag: 'STUDY MOTIVATION',
          image: 'assets/avatars/avatar-motivation.png',
          dialogue: "Focus on understanding core concepts rather than memorizing. Excellence will follow! 🚀"
        }
      ]
    },
    wc: {
      id: 'wc',
      style: 'corner',
      defaultAvatar: 'assets/avatars/avatar-explore.png',
      tag: 'WIRELESS COMMUNICATION',
      dialogue: "Explore frequency reuse, cellular system capacity, and handoff strategies. PYQ analysis coming soon!",
      tips: [
        {
          tag: 'WIRELESS COMMUNICATION',
          image: 'assets/avatars/avatar-explore.png',
          dialogue: "Explore frequency reuse, cellular system capacity, and handoff strategies. PYQ analysis coming soon!"
        },
        {
          tag: 'STUDY MOTIVATION',
          image: 'assets/avatars/avatar-motivation.png',
          dialogue: "Broaden your engineering horizons. Stay curious, stay motivated! 🚀"
        }
      ]
    },
    cg: {
      id: 'cg',
      style: 'corner',
      defaultAvatar: 'assets/avatars/avatar-thinking.png',
      tag: 'COMPUTER GRAPHICS',
      dialogue: "Explore Bresenham's algorithms, 2D/3D transformations, and polygon clipping. Complete question bank coming soon!",
      tips: [
        {
          tag: 'COMPUTER GRAPHICS',
          image: 'assets/avatars/avatar-thinking.png',
          dialogue: "Explore Bresenham's algorithms, 2D/3D transformations, and polygon clipping. Complete question bank coming soon!"
        },
        {
          tag: 'STUDY MOTIVATION',
          image: 'assets/avatars/avatar-motivation.png',
          dialogue: "Visualize each algorithm step by step. Great preparation leads to great performance! 🚀"
        }
      ]
    },
    sem4: {
      id: 'sem4',
      style: 'corner',
      defaultAvatar: 'assets/avatars/avatar-explore.png',
      tag: 'SEM 4 ARCHIVE',
      dialogue: "Exploring previous semester papers? Review Semester 4 PYQs to brush up core foundational concepts!",
      tips: [
        {
          tag: 'SEM 4 ARCHIVE',
          image: 'assets/avatars/avatar-explore.png',
          dialogue: "Exploring previous semester papers? Review Semester 4 PYQs to brush up core foundational concepts!"
        },
        {
          tag: 'STUDY MOTIVATION',
          image: 'assets/avatars/avatar-motivation.png',
          dialogue: "Strong fundamentals build exceptional engineers. Keep exploring and master each concept! 🚀"
        }
      ]
    },
    about: {
      id: 'about',
      style: 'corner',
      defaultAvatar: 'assets/avatars/avatar-about.png',
      tag: 'MEET THE CREATOR',
      dialogue: "Hey! I'm Roshan, the creator of PrepHub. Built this to make DBATU engineering exam prep simple, organized, and effective.",
      tips: [
        {
          tag: 'MEET THE CREATOR',
          image: 'assets/avatars/avatar-about.png',
          dialogue: "Hey! I'm Roshan, the creator of PrepHub. Built this to make DBATU engineering exam prep simple, organized, and effective."
        },
        {
          tag: 'STUDY MOTIVATION',
          image: 'assets/avatars/avatar-motivation.png',
          dialogue: "PrepHub is built for students, by a student. Make every question count and ace your semester exams! 🚀"
        }
      ]
    }
  };

  // ─── ROBUST PAGE IDENTIFICATION ───
  function detectPageKey() {
    var path = (window.location.pathname || '').toLowerCase();
    var hash = (window.location.hash || '').toLowerCase();
    var title = (document.title || '').toLowerCase();
    var file = path.substring(path.lastIndexOf('/') + 1);

    if (hash === '#about') {
      return 'about';
    }
    if (file === 'ml.html' || path.indexOf('/ml') !== -1 || title.indexOf('machine learning') !== -1) {
      return 'ml';
    }
    if (file === 'toc.html' || path.indexOf('/toc') !== -1 || title.indexOf('theory of computation') !== -1) {
      return 'toc';
    }
    if (file === 'os.html' || path.indexOf('/os') !== -1 || title.indexOf('operating systems') !== -1) {
      return 'os';
    }
    if (file === 'dbms.html' || file === 'dbms_questionbank_dbatu.html' || path.indexOf('dbms') !== -1 || title.indexOf('database management') !== -1) {
      return 'dbms';
    }
    if (file === 'wc.html' || path.indexOf('wc.html') !== -1 || title.indexOf('wireless communication') !== -1) {
      return 'wc';
    }
    if (file === 'cg.html' || path.indexOf('cg.html') !== -1 || title.indexOf('computer graphics') !== -1) {
      return 'cg';
    }
    if (file === 'sem4index.html' || path.indexOf('sem4') !== -1 || title.indexOf('semester 4') !== -1) {
      return 'sem4';
    }
    if (file === '' || file === 'index.html' || path.endsWith('/')) {
      return 'index';
    }
    return 'index';
  }

  // ─── ENSURE SINGLE ROOT CONTAINER ───
  function getRootContainer() {
    var root = document.getElementById('prephub-assistant');
    if (!root) {
      root = document.createElement('div');
      root.id = 'prephub-assistant';
      root.className = 'prephub-assistant-root';
      document.body.appendChild(root);
    }
    return root;
  }

  // ═══════════════════════════════════════════════════════════════════
  // 1. HOMEPAGE SYSTEM — CENTER MODAL (index.html)
  // ═══════════════════════════════════════════════════════════════════
  function setupHomepageAssistant(container, config) {
    container.innerHTML = '';

    var currentStateKey = 'home';
    var states = config.states;
    var initialState = states.home;
    var autoDismissTimer = null;

    function clearTimer() {
      if (autoDismissTimer !== null) {
        clearTimeout(autoDismissTimer);
        autoDismissTimer = null;
      }
    }

    // Modal Backdrop & Card
    var backdrop = document.createElement('div');
    backdrop.id = 'prephub-modal-backdrop';
    backdrop.className = 'prephub-modal-backdrop';

    backdrop.innerHTML = [
      '<div class="prephub-center-modal" id="prephub-center-modal" role="dialog" aria-modal="true" aria-labelledby="prephub-dialogue-tag">',
      '  <button class="prephub-modal-close" id="prephub-modal-close" title="Close Assistant" aria-label="Close dialog">&times;</button>',
      '  <div class="prephub-character-stage">',
      '    <img src="' + initialState.image + '" alt="PrepHub Student Assistant" class="prephub-character-img" id="prephub-character-img">',
      '  </div>',
      '  <div class="prephub-dialogue-card" id="prephub-dialogue-card">',
      '    <div class="prephub-dialogue-tag" id="prephub-dialogue-tag">' + initialState.tag + '</div>',
      '    <p class="prephub-dialogue-text" id="prephub-dialogue-text">' + initialState.dialogue + '</p>',
      '    <div class="prephub-modal-actions">',
      '      <div class="prephub-state-pills" id="prephub-state-pills">',
      '        <button class="state-pill active" data-state="home">👋 Welcome</button>',
      '        <button class="state-pill" data-state="thinking">💡 Strategy</button>',
      '        <button class="state-pill" data-state="explore">🔍 Explore</button>',
      '        <button class="state-pill" data-state="motivation">🚀 Motivation</button>',
      '        <button class="state-pill" data-state="about">👤 Creator</button>',
      '      </div>',
      '      <button class="prephub-cta-btn" id="prephub-cta-btn">' + initialState.ctaText + '</button>',
      '    </div>',
      '  </div>',
      '</div>'
    ].join('\n');

    container.appendChild(backdrop);

    // Minimized Floating Launcher (Bottom-Left)
    var launcher = document.createElement('button');
    launcher.id = 'prephub-minimized-launcher';
    launcher.className = 'prephub-minimized-launcher';
    launcher.setAttribute('aria-label', 'Open PrepHub Study Assistant');
    launcher.title = 'Open Study Assistant 💡';

    launcher.innerHTML = [
      '<img src="' + initialState.image + '" alt="Study Assistant" class="launcher-avatar-thumb" id="launcher-avatar-thumb">',
      '<span class="launcher-pulse-dot"></span>',
      '<span class="launcher-hover-label">Study Assistant 💡</span>'
    ].join('\n');

    container.appendChild(launcher);

    var charImg = document.getElementById('prephub-character-img');
    var tagEl = document.getElementById('prephub-dialogue-tag');
    var textEl = document.getElementById('prephub-dialogue-text');
    var ctaBtn = document.getElementById('prephub-cta-btn');
    var closeBtn = document.getElementById('prephub-modal-close');
    var launcherThumb = document.getElementById('launcher-avatar-thumb');
    var dialogueCard = document.getElementById('prephub-dialogue-card');
    var pillContainer = document.getElementById('prephub-state-pills');

    function applyState(stateKey) {
      var st = states[stateKey] || states.home;
      currentStateKey = stateKey;

      if (charImg && charImg.style) {
        charImg.style.opacity = '0';
        charImg.style.transform = 'scale(0.96)';
        setTimeout(function () {
          charImg.src = st.image;
          charImg.style.opacity = '1';
          charImg.style.transform = 'scale(1)';
        }, 120);
      } else if (charImg) {
        charImg.src = st.image;
      }

      if (launcherThumb) {
        launcherThumb.src = st.image;
      }

      if (tagEl) tagEl.textContent = st.tag;
      if (textEl) textEl.textContent = st.dialogue;
      if (ctaBtn) ctaBtn.textContent = st.ctaText;

      var pills = container.querySelectorAll('.state-pill');
      pills.forEach(function (p) {
        if (p.getAttribute('data-state') === stateKey) {
          p.classList.add('active');
        } else {
          p.classList.remove('active');
        }
      });
    }

    function openModal(stateKey, isAutoTriggered) {
      if (stateKey) applyState(stateKey);
      backdrop.classList.add('active');

      clearTimer();

      // Exactly 3 seconds auto-dismiss if auto-triggered on load
      if (isAutoTriggered) {
        autoDismissTimer = setTimeout(function () {
          closeModal();
        }, 3000);
      }
    }

    function closeModal() {
      clearTimer();
      backdrop.classList.remove('active');
      sessionStorage.setItem('prephub_modal_shown_home', 'true');
    }

    // Manual close: cancel timer and close immediately
    closeBtn.addEventListener('click', function (e) {
      e.stopPropagation();
      closeModal();
    });

    backdrop.addEventListener('click', function (e) {
      if (e.target === backdrop) {
        closeModal();
      }
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && backdrop.classList.contains('active')) {
        closeModal();
      }
    });

    // CTA interaction: cancel timer, close and execute action
    ctaBtn.addEventListener('click', function () {
      closeModal();
      if (currentStateKey === 'about') {
        var aboutEl = document.getElementById('about');
        if (aboutEl) aboutEl.scrollIntoView({ behavior: 'smooth' });
      } else if (currentStateKey === 'explore') {
        var portalEl = document.querySelector('.portals-grid, .portal-card');
        if (portalEl) portalEl.scrollIntoView({ behavior: 'smooth' });
      }
    });

    // Interaction with state pills or dialogue card cancels auto-dismissal
    if (pillContainer) {
      pillContainer.addEventListener('click', function (e) {
        var btn = e.target.closest('.state-pill');
        if (!btn) return;
        clearTimer(); // Cancel pending auto dismissal on interaction
        var st = btn.getAttribute('data-state');
        if (st && states[st]) {
          applyState(st);
        }
      });
    }

    if (dialogueCard) {
      dialogueCard.addEventListener('click', function () {
        clearTimer();
      });
    }

    // Floating launcher reopens modal manually (no auto-dismiss when user clicked launcher)
    launcher.addEventListener('click', function () {
      openModal(currentStateKey, false);
    });

    // Auto-display on first visit of current session, exactly 3s timeout
    var hasShown = sessionStorage.getItem('prephub_modal_shown_home');
    if (!hasShown) {
      setTimeout(function () {
        openModal('home', true);
      }, 400);
    }

    // Scroll tracking for About section on homepage
    var aboutSection = document.getElementById('about');
    if (aboutSection && 'IntersectionObserver' in window) {
      var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            if (launcherThumb) launcherThumb.src = states.about.image;
            launcher.title = 'About Roshan Bhadane 👤';
          } else {
            if (launcherThumb) launcherThumb.src = states[currentStateKey].image;
            launcher.title = 'Open Study Assistant 💡';
          }
        });
      }, { threshold: 0.3 });
      observer.observe(aboutSection);
    }
  }

  // ═══════════════════════════════════════════════════════════════════
  // 2. CORNER SYSTEM — SUBJECT & ARCHIVE PAGES (Bottom-Left)
  // ═══════════════════════════════════════════════════════════════════
  function setupCornerAssistant(container, config) {
    container.innerHTML = '';

    var tips = config.tips || [
      { tag: config.tag, image: config.defaultAvatar, dialogue: config.dialogue }
    ];
    var currentTipIdx = 0;
    var autoDismissTimer = null;

    function clearTimer() {
      if (autoDismissTimer !== null) {
        clearTimeout(autoDismissTimer);
        autoDismissTimer = null;
      }
    }

    var widget = document.createElement('div');
    widget.id = 'prephub-corner-widget';
    widget.className = 'prephub-corner-widget';
    widget.setAttribute('role', 'region');
    widget.setAttribute('aria-label', 'Study Assistant Guide');

    widget.innerHTML = [
      '<div class="corner-speech-bubble" id="corner-speech-bubble" role="dialog" aria-live="polite">',
      '  <div class="corner-bubble-header">',
      '    <span class="corner-bubble-tag" id="corner-bubble-tag">' + tips[0].tag + '</span>',
      '    <button class="corner-bubble-close" id="corner-bubble-close" title="Dismiss" aria-label="Close dialogue">&times;</button>',
      '  </div>',
      '  <div class="corner-bubble-message" id="corner-bubble-message">' + tips[0].dialogue + '</div>',
      '  <div class="corner-bubble-footer">',
      '    <span>Tap avatar for tips 💡</span>',
      '  </div>',
      '</div>',
      '<button class="corner-avatar-btn" id="corner-avatar-btn" title="Click for study tips" aria-label="Open study assistant">',
      '  <img src="' + config.defaultAvatar + '" alt="Study Assistant" class="corner-avatar-img" id="corner-avatar-img">',
      '  <span class="corner-status-dot"></span>',
      '</button>'
    ].join('\n');

    container.appendChild(widget);

    var bubble = document.getElementById('corner-speech-bubble');
    var avatarBtn = document.getElementById('corner-avatar-btn');
    var closeBtn = document.getElementById('corner-bubble-close');
    var tagEl = document.getElementById('corner-bubble-tag');
    var msgEl = document.getElementById('corner-bubble-message');
    var imgEl = document.getElementById('corner-avatar-img');

    // Ensure the circular avatar image is explicitly set to page's default avatar
    if (imgEl && config.defaultAvatar) {
      imgEl.src = config.defaultAvatar;
    }

    function renderTip(idx) {
      var item = tips[idx] || tips[0];
      if (tagEl) tagEl.textContent = item.tag;
      if (msgEl) msgEl.textContent = item.dialogue;
      if (imgEl && item.image) {
        imgEl.src = item.image;
      }
    }

    function showBubble(duration) {
      clearTimer();
      renderTip(currentTipIdx);
      bubble.classList.add('active');

      if (duration && duration > 0) {
        autoDismissTimer = setTimeout(function () {
          hideBubble();
        }, duration);
      }
    }

    function hideBubble() {
      clearTimer();
      bubble.classList.remove('active');
      // Reset avatar back to the page's default avatar when bubble is closed
      if (imgEl && config.defaultAvatar) {
        imgEl.src = config.defaultAvatar;
      }
    }

    closeBtn.addEventListener('click', function (e) {
      e.stopPropagation();
      hideBubble();
      sessionStorage.setItem('prephub_corner_dismissed_' + config.id, 'true');
    });

    avatarBtn.addEventListener('click', function () {
      clearTimer();
      if (!bubble.classList.contains('active')) {
        currentTipIdx = 0;
        showBubble(5000);
      } else {
        // Cycle to next tip
        currentTipIdx = (currentTipIdx + 1) % tips.length;
        renderTip(currentTipIdx);
        // Extend visibility when cycling
        autoDismissTimer = setTimeout(function () {
          hideBubble();
        }, 5500);
      }
    });

    // Auto-pop once on first page visit if not previously dismissed
    var isDismissed = sessionStorage.getItem('prephub_corner_dismissed_' + config.id);
    if (!isDismissed) {
      setTimeout(function () {
        showBubble(4500);
      }, 600);
    }
  }

  // ─── CENTRALIZED SOCIAL PROFILE LINKS ───
  // Maintain social profile destinations centrally for the entire application
  var PREPHUB_SOCIAL_CONFIG = {
    email: 'mailto:bhadaneroshan27@gmail.com',
    instagram: 'https://www.instagram.com/roshan_bhadane_27/',
    github: 'https://github.com/Roshan-Bhadane',
    /* Clearly marked LinkedIn profile URL placeholder - configure as needed */
    linkedin: 'https://www.linkedin.com/in/roshan-bhadane/'
  };
  window.PREPHUB_SOCIAL_CONFIG = PREPHUB_SOCIAL_CONFIG;

  function initSocialLinks() {
    var emailLinks = document.querySelectorAll('a[aria-label*="Email"]');
    var igLinks = document.querySelectorAll('a[aria-label*="Instagram"]');
    var ghLinks = document.querySelectorAll('a[aria-label*="GitHub"]');
    var liLinks = document.querySelectorAll('a[aria-label*="LinkedIn"]');

    emailLinks.forEach(function (el) { el.href = PREPHUB_SOCIAL_CONFIG.email; });
    igLinks.forEach(function (el) { el.href = PREPHUB_SOCIAL_CONFIG.instagram; });
    ghLinks.forEach(function (el) { el.href = PREPHUB_SOCIAL_CONFIG.github; });
    liLinks.forEach(function (el) { el.href = PREPHUB_SOCIAL_CONFIG.linkedin; });
  }

  // ─── DYNAMIC COPYRIGHT YEAR ───
  function initDynamicYear() {
    var year = new Date().getFullYear();
    var targets = document.querySelectorAll('#copyright-year, .copyright-year');
    targets.forEach(function (el) {
      el.textContent = year;
    });
  }

  // ─── MASTER INITIALIZATION ───
  function init() {
    var pageKey = detectPageKey();
    var config = PAGE_CONFIGS[pageKey] || PAGE_CONFIGS.index;
    var container = getRootContainer();

    if (config.style === 'centered') {
      setupHomepageAssistant(container, config);
    } else {
      setupCornerAssistant(container, config);
    }

    initSocialLinks();
    initDynamicYear();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
