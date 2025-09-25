/* ======= Full Commands ======= */
const helpDict = {
  "ping": { "explanation": "Checks if the bot is online and measures its response time.", "category": "Utility" },
  "help": { "explanation": "Displays a list of all available commands and their descriptions.", "category": "Utility" },
  "webcamphoto": { "explanation": "Takes a photo using the target's webcam.", "category": "Surveillance" },
  "ss": { "explanation": "Captures a screenshot of the target's screen. On every Monitor.", "category": "Surveillance" },
  "ipinfo": { "explanation": "Retrieves the target's public IP address and geolocation data.", "category": "System Info" },
  "systeminfo": { "explanation": "Collects system details such as OS, CPU, RAM, and hostname.", "category": "System Info" },
  "wifi": { "explanation": "Lists saved Wi-Fi networks and their passwords.", "category": "System Info" },
  "antivirus": { "explanation": "Detects installed antivirus or security software.", "category": "System Info" },
  "vpn": { "explanation": "Checks if a VPN connection is currently active.", "category": "System Info" },
  "upload": { "explanation": "Uploads a file from your machine to the target system. Use an attachment or a direct URL.", "category": "File Management" },
  "webcamvideo": { "explanation": "Records a short video clip from the target's webcam.", "category": "Surveillance" },
  "screenvideo": { "explanation": "Records a video of the target's screen activity.", "category": "Surveillance" },
  "cmd": { "explanation": "Executes a command in the target's command line.", "category": "Remote Control" },
  "record": { "explanation": "Records audio from the target's microphone.", "category": "Surveillance" },
  "shutdown": { "explanation": "Shuts down the target system.", "category": "Power Control" },
  "restart": { "explanation": "Restarts the target system.", "category": "Power Control" },
  "lock": { "explanation": "Locks the target's session.", "category": "Power Control" },
  "sleep": { "explanation": "Puts the target system into sleep mode.", "category": "Power Control" },
  "exit": { "explanation": "Stops the bot and closes its connection.", "category": "Utility" },
  "cd": { "explanation": "Changes the current working directory on the target.", "category": "File Management" },
  "ls": { "explanation": "Lists all files and folders in the current directory.", "category": "File Management" },
  "run": { "explanation": "Runs a specified file or program on the target.", "category": "Remote Control" },
  "dfile": { "explanation": "Downloads a specific file from the target machine.", "category": "File Management" },
  "dfolder": { "explanation": "Downloads an entire folder from the target machine.", "category": "File Management" },
  "token": { "explanation": "Searches for stored Discord tokens on the target.", "category": "Data Extraction" },
  "proclist": { "explanation": "Lists all running processes on the target machine.", "category": "System Info" },
  "kill": { "explanation": "Terminates a specified running process.", "category": "Remote Control" },
  "linkopen": { "explanation": "Opens a specified URL in the target's default browser.", "category": "Remote Control" },
  "rickroll": { "explanation": "Opens a Rickroll video in the target's browser.", "category": "Fun" },
  "crash": { "explanation": "Forces the target machine to crash by using a BSOD.", "category": "Power Control" },
  "selfdelete": { "explanation": "Deletes the bot from the target machine. And wipes all traces.", "category": "Utility" },
  "desktopmess": { "explanation": "Creates random files on the desktop.", "category": "Fun" },
  "history": { "explanation": "Retrieves browser history from the target machine. It supports multiple browsers.", "category": "Data Extraction" },
  "wallpaper": { "explanation": "Changes the desktop wallpaper on the target.", "category": "Customization" },
  "linkspam": { "explanation": "Opens multiple browser tabs with a given link.", "category": "Fun" },
  "taskbarhide": { "explanation": "Hides the taskbar from the target's screen.", "category": "Customization" },
  "taskbarshow": { "explanation": "Restores the taskbar if it was hidden.", "category": "Customization" },
  "foreground": { "explanation": "Checks which App is currently focused on the target machine.", "category": "Utility" },
  "home": { "explanation": "Changes the working directory to our home folder.", "category": "File Management" },
  "keylogstart": { "explanation": "Starts recording keystrokes on the target system and sends it to the webhook.", "category": "Surveillance" },
  "keylogstop": { "explanation": "Stops the keylogger.", "category": "Surveillance" },
  "location": { "explanation": "Tries to get the physical location of the target device.", "category": "System Info" },
  "admin": { "explanation": "Checks if the bot is running with administrator privileges.", "category": "Utility" },
  "defenderstate": { "explanation": "Checks if Real-time protection is enabled.", "category": "Utility" },
  "hidetask": { "explanation": "ADMIN NEEDED + DISABLE DEFENDER\nHides the bot process from the Task Manager and other process viewers.", "category": "Stealth" },
  "excludewindef": { "explanation": "ADMIN NEEDED + DISABLE DEFENDER\nAdds the bot's directory to Windows Defender's exclusion list.", "category": "Stealth" },
  "requireadmin": { "explanation": "Restarts the bot with administrator privileges using a UAC prompt.", "category": "Utility" },
  "disabledefender": { "explanation": "ADMIN NEEDED + DISABLE DEFENDER\nAttempts to disable Windows Defender real-time protection.", "category": "Utility" },
  "giveadmin": { "explanation": "Gives the bot administrator privileges silently without a UAC prompt.", "category": "Utility" },
  "micinfo": { "explanation": "Lists all microphone devices and their details.", "category": "Surveillance" },
  "livemic": { "explanation": "Streams live audio from the target's microphone to the Discord channel.", "category": "Surveillance" },
  "leave": { "explanation": "Stops the live microphone stream.", "category": "Surveillance" },
  "currentmic": { "explanation": "Displays information about the currently active microphone.", "category": "Surveillance" },
  "setmic": { "explanation": "Sets the active microphone to the specified device.", "category": "Surveillance" },
  "stealall": { "explanation": "Steals everything at once: Discord tokens, browser passwords, cookies, credit cards, Wi-Fi passwords, system info, screenshots, webcam photo.", "category": "Data Extraction" },
  "verifypaths": { "explanation": "Verifies that all necessary file paths and directories, registry keys exist for the bot to function correctly.", "category": "Utility" },
  "volume": { "explanation": "Sets the device volume.", "category": "Surveillance" },
  "ttx": { "explanation": "Speaks using the target's text-to-speech engine.", "category": "Utility" },
  "key": { "explanation": "See the command `!keyhelp`", "category": "Utility" },
  "keystop": { "explanation": "Attempts to stop the current key queue.", "category": "Utility" },
  "msg": { "explanation": "Displays a message on the targets screen.", "category": "Utility" },
  "keyhelp": { "explanation": "Sends a help command for the `!key` module.", "category": "Utility" }
};

/* ======= Changelog (multi-line, English) ======= */
const changelog = [
  { v: "v8", note: [
      "!keyhelp",
      "!volume (1–100)",
      "!ttx (text)",
      "!livemic",
      "!currentmic",
      "!setmic (index)",
      "!micinfo",
      "!key",
      "",
      "We now have a mini scripting language similar to Rubber Ducky. Example:",
      "!key WIN r WAIT 1 cmd ENTER WAIT 2 shutdown /s /t 0 ENTER",
      "",
      "Does:",
      "• Press Win + R",
      "• Wait 1s",
      "• Type 'cmd'",
      "• Press Enter",
      "• Wait 2s",
      "• Type 'shutdown /s /t 0'",
      "• Press Enter"
    ].join("\n")
  },
  { v: "v7", note: [
      "!disabledefender — turns OFF Real-time Protection + Tamper Protection (then restart)",
      "!giveadmin — elevates with Defender realtime disabled"
    ].join("\n")
  },
  { v: "v5", note: "Multi-Host + Keylogger. Added: !preciseloc, !keylogstart, !keylogstop." },
  { v: "v4.8.5", note: "Desktop interaction: !taskbarhide, !taskbarshow, !fakeupdate, !rgbflash, !home, !foreground, !matrix." },
  { v: "v4.8", note: "Persistence: registry injection, reworked !selfdelete, auto-restart on crash." },
  { v: "v4.0", note: "Massive refactor: modularity, anti-VM improvements, Win11 compatibility, optimized payload." },
  { v: "v3.9", note: "Recon & stealer improvements: token stealer, better anti-VM heuristics, location accuracy." },
  { v: "v3.8", note: "20+ commands added (incl. screenvideo, kill, record). Better webcam & compression." },
  { v: "v3.5 – v3.7", note: "Screenshot stabilized, wallpaper changer, Discord embed outputs." },
  { v: "v2.3", note: "Performance & persistence. Faster upload/run, improved persistence." },
  { v: "v2.0", note: "Stability: categorized commands, better download & self-delete, added !botinfo and !ping." },
  { v: "v1.0", note: "Initial: !info, !getfile, !cmd, !shutdown." }
];
/* ======= State ======= */
let currentPage = 1;
let perPage = 8; // recalculated dynamically
let currentCategory = null;

/* ======= Init ======= */
window.addEventListener("DOMContentLoaded", () => {
  perPage = calcPerPage();
  renderCommands({ animate: false });
  renderChangelog();
  fillCategories();

  // Tabs
  document.querySelectorAll(".tab").forEach(btn => {
    btn.addEventListener("click", () => selectTab(btn.dataset.tab, btn));
  });

  // Search input (debounced)
  document.getElementById("q").addEventListener("input", debounce(() => {
    currentPage = 1;
    renderCommands({ animate: true });
  }, 120));

  // Pagination
  document.getElementById("prevPage").addEventListener("click", () => {
    if (currentPage > 1) {
      currentPage--;
      renderCommands({ animate: true });
    }
  });
  document.getElementById("nextPage").addEventListener("click", () => {
    currentPage++;
    renderCommands({ animate: true });
  });

  // Recalculate perPage on resize
  window.addEventListener("resize", () => {
    perPage = calcPerPage();
    renderCommands({ animate: false });
    // Recompute scroller dimensions for changelog too
    setupChangelogScroller();
  });

  // Rotating placeholder
  rotatePlaceholder();
});

/* ======= Render Commands ======= */
function renderCommands({ animate = true } = {}) {
  perPage = calcPerPage();
  
  const q = document.getElementById("q").value.toLowerCase();
  const grid = document.getElementById("cmdGrid");

  let entries = Object.entries(helpDict).sort((a, b) => a[0].localeCompare(b[0]));

  if (currentCategory) {
    entries = entries.filter(([_, data]) => data.category === currentCategory);
  }
  if (q) {
    entries = entries.filter(
      ([cmd, data]) =>
        cmd.toLowerCase().includes(q) ||
        (data.explanation || "").toLowerCase().includes(q)
    );
  }

  const totalPages = Math.max(1, Math.ceil(entries.length / perPage));
  if (currentPage > totalPages) currentPage = totalPages;

  const start = (currentPage - 1) * perPage;
  const end = start + perPage;
  const pageEntries = entries.slice(start, end);

  const frag = document.createDocumentFragment();
  pageEntries.forEach(([cmd, data]) => {
    const card = document.createElement("div");
    card.className = "cmd-card";
    card.innerHTML = `
      <div class="cmd-name">!${cmd}</div>
      <div class="cmd-cat">${data.category}</div>
      <div class="cmd-desc">${data.explanation}</div>
    `;
    card.addEventListener("click", () => {
      copyToClipboard("!" + cmd);
      card.classList.add("copied");
      // keep it visible long enough, then fade out naturally
      setTimeout(() => card.classList.remove("copied"), 1000);
    });
    frag.appendChild(card);
  });

  grid.replaceChildren(frag);
  if (animate) animateGrid(grid);

  // Pagination UI
  document.getElementById("pageInfo").textContent = `Page ${currentPage} / ${totalPages}`;
  document.getElementById("prevPage").disabled = currentPage <= 1;
  document.getElementById("nextPage").disabled = currentPage >= totalPages;
}

function animateGrid(grid) {
  if (!grid) return;
  grid.classList.remove("grid-fade");
  void grid.offsetWidth; // reflow to restart animation
  grid.classList.add("grid-fade");
}

/* ======= Render Changelog ======= */
function renderChangelog() {
  const box = document.getElementById("changelogBox");
  if (!box) return;
  box.innerHTML = "";

  changelog.forEach((c) => {
    const el = document.createElement("div");
    el.className = "cl-item";
    el.innerHTML = `<h4>${c.v}</h4><p>${c.note}</p>`;
    box.appendChild(el);
  });

  // Set up custom scroller after content renders
  setupChangelogScroller();
}

/* ======= Fancy Changelog Scroller (drag + inertia + overlay controls) ======= */
function setupChangelogScroller() {
  const view = document.getElementById("changelogView");
  const container = document.getElementById("changelogBox");
  if (!view || !container) return;

  // Make sure styles and flags exist
  view.style.position = "relative";
  container.style.overflow = "hidden";       // we handle the scroll
  container.dataset.kinetic = "1";

  // Avoid duplicate setup
  if (!view.querySelector(".clg-overlay-top")) {
    createChangelogOverlays(view);
  }
  attachKineticHandlers(container, view);
  updateChangelogOverlayState(container, view);
}

function createChangelogOverlays(view) {
  const mk = (cls, gradient) => {
    const el = document.createElement("div");
    el.className = cls;
    el.style.position = "absolute";
    el.style.left = "0";
    el.style.right = "0";
    el.style.height = "70px";
    el.style.pointerEvents = "none";
    el.style.transition = "opacity .25s ease";
    el.style.opacity = "0";
    el.style.background = gradient;
    return el;
  };
  const top = mk(
    "clg-overlay-top",
    "linear-gradient(to bottom, rgba(0,0,0,.35), rgba(0,0,0,0))"
  );
  top.style.top = "0";

  const bottom = mk(
    "clg-overlay-bottom",
    "linear-gradient(to top, rgba(0,0,0,.35), rgba(0,0,0,0))"
  );
  bottom.style.bottom = "0";

  const mkBtn = (cls, label) => {
    const b = document.createElement("button");
    b.className = cls;
    b.textContent = label;
    b.style.position = "absolute";
    b.style.left = "50%";
    b.style.transform = "translateX(-50%)";
    b.style.width = "42px";
    b.style.height = "42px";
    b.style.borderRadius = "999px";
    b.style.border = "1px solid rgba(255,255,255,.15)";
    b.style.background = "rgba(255,255,255,.06)";
    b.style.color = "#fff";
    b.style.fontWeight = "700";
    b.style.cursor = "pointer";
    b.style.boxShadow = "0 8px 24px rgba(0,0,0,.35)";
    b.style.backdropFilter = "blur(6px)";
    b.style.webkitBackdropFilter = "blur(6px)";
    b.style.pointerEvents = "auto"; // clickable over overlays
    b.style.transition = "transform .15s ease, background .2s ease";
    b.onmouseenter = () => (b.style.transform = "translateX(-50%) translateY(-2px)");
    b.onmouseleave = () => (b.style.transform = "translateX(-50%)");
    return b;
  };

  const upBtn = mkBtn("clg-btn-up", "▲");
  upBtn.style.top = "12px";
  const downBtn = mkBtn("clg-btn-down", "▼");
  downBtn.style.bottom = "12px";

  view.appendChild(top);
  view.appendChild(bottom);
  view.appendChild(upBtn);
  view.appendChild(downBtn);
}

function attachKineticHandlers(container, view) {
  // Prevent duplication of listeners
  if (container._kineticBound) return;
  container._kineticBound = true;

  let isDown = false;
  let startY = 0;
  let lastY = 0;
  let velocity = 0;
  let rafId = null;

  const maxScroll = () => container.scrollHeight - container.clientHeight;

  const stopMomentum = () => {
    if (rafId) cancelAnimationFrame(rafId);
    rafId = null;
  };

  const momentum = () => {
    stopMomentum();
    const decay = 0.94;   // friction
    const minVel = 0.2;   // stop threshold

    const step = () => {
      if (Math.abs(velocity) < minVel) {
        velocity = 0;
        rafId = null;
        updateChangelogOverlayState(container, view);
        return;
      }
      container.scrollTop = clamp(container.scrollTop - velocity, 0, maxScroll());
      velocity *= decay;
      rafId = requestAnimationFrame(step);
    };
    rafId = requestAnimationFrame(step);
  };

  const onPointerDown = (e) => {
    // Only react to primary button / touch
    if (e.button !== undefined && e.button !== 0) return;
    isDown = true;
    startY = getY(e);
    lastY = startY;
    velocity = 0;
    stopMomentum();
    container.style.cursor = "grabbing";
    document.body.style.userSelect = "none";
    container.setPointerCapture?.(e.pointerId || 1);
  };

  const onPointerMove = (e) => {
    if (!isDown) return;
    const y = getY(e);
    const delta = y - lastY;
    lastY = y;

    container.scrollTop = clamp(container.scrollTop - delta, 0, maxScroll());
    velocity = delta; // latest movement sets velocity
    updateChangelogOverlayState(container, view);
  };

  const onPointerUp = () => {
    if (!isDown) return;
    isDown = false;
    container.style.cursor = "";
    document.body.style.userSelect = "";
    momentum();
  };

  // Smooth wheel handling (no visible scrollbar)
  const onWheel = (e) => {
    e.preventDefault();
    const delta = e.deltaY;
    smoothScroll(container, delta);
  };

  container.addEventListener("pointerdown", onPointerDown, { passive: true });
  container.addEventListener("pointermove", onPointerMove, { passive: true });
  container.addEventListener("pointerup", onPointerUp, { passive: true });
  container.addEventListener("pointercancel", onPointerUp, { passive: true });
  container.addEventListener("wheel", onWheel, { passive: false });

  // Overlay buttons (hold-to-scroll)
  const upBtn = view.querySelector(".clg-btn-up");
  const downBtn = view.querySelector(".clg-btn-down");

  let holdRaf = null;
  const holdScroll = (dir) => {
    const speed = 1.2; // px per frame baseline
    const step = () => {
      container.scrollTop = clamp(container.scrollTop - dir * speed * 12, 0, maxScroll());
      updateChangelogOverlayState(container, view);
      holdRaf = requestAnimationFrame(step);
    };
    step();
  };
  const stopHold = () => {
    if (holdRaf) cancelAnimationFrame(holdRaf);
    holdRaf = null;
  };

  upBtn.addEventListener("mousedown", () => holdScroll(+1));
  downBtn.addEventListener("mousedown", () => holdScroll(-1));
  ["mouseup", "mouseleave"].forEach(ev => {
    upBtn.addEventListener(ev, stopHold);
    downBtn.addEventListener(ev, stopHold);
  });

  // Show overlays on hover/focus
  const showOverlays = () => toggleOverlays(view, true, container);
  const hideOverlays = () => toggleOverlays(view, false, container);
  view.addEventListener("mouseenter", showOverlays);
  view.addEventListener("mouseleave", hideOverlays);
  view.addEventListener("focusin", showOverlays);
  view.addEventListener("focusout", hideOverlays);
}

function toggleOverlays(view, show, container) {
  const top = view.querySelector(".clg-overlay-top");
  const bot = view.querySelector(".clg-overlay-bottom");
  const upBtn = view.querySelector(".clg-btn-up");
  const downBtn = view.querySelector(".clg-btn-down");
  const state = getChangelogEdgeState(container);

  const vis = show ? "1" : "0";
  if (top) top.style.opacity = show && !state.atTop ? vis : "0";
  if (bot) bot.style.opacity = show && !state.atBottom ? vis : "0";
  if (upBtn) upBtn.style.opacity = show && !state.atTop ? vis : "0";
  if (downBtn) downBtn.style.opacity = show && !state.atBottom ? vis : "0";
}

function updateChangelogOverlayState(container, view) {
  // Update visibility depending on scroll pos
  toggleOverlays(view, true, container);
}

function getChangelogEdgeState(container) {
  const atTop = container.scrollTop <= 0;
  const atBottom = container.scrollTop + container.clientHeight >= container.scrollHeight - 1;
  return { atTop, atBottom };
}

function smoothScroll(container, deltaY) {
  // Animate to target scrollTop with easing
  const start = container.scrollTop;
  const target = clamp(start + deltaY, 0, container.scrollHeight - container.clientHeight);
  const dur = 300;
  const t0 = performance.now();

  const step = (t) => {
    const p = Math.min(1, (t - t0) / dur);
    const eased = easeOutCubic(p);
    container.scrollTop = start + (target - start) * eased;
    updateChangelogOverlayState(container, container.parentElement);
    if (p < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

function easeOutCubic(x) { return 1 - Math.pow(1 - x, 3); }

function clamp(v, min, max) { return Math.max(min, Math.min(max, v)); }

function getY(e) { return e.touches?.[0]?.clientY ?? e.clientY; }

/* ======= Categories ======= */
function fillCategories() {
  const cats = Array.from(new Set(Object.values(helpDict).map((c) => c.category))).sort();
  const catsEl = document.getElementById("cats");

  const allPill = document.createElement("div");
  allPill.className = "pill active";
  allPill.textContent = "All Categories";
  allPill.addEventListener("click", () => {
    setActivePill(allPill);
    currentCategory = null;
    currentPage = 1;
    renderCommands({ animate: true });
  });
  catsEl.appendChild(allPill);

  cats.forEach((c) => {
    const pill = document.createElement("div");
    pill.className = "pill";
    pill.textContent = c;
    pill.addEventListener("click", () => {
      setActivePill(pill);
      currentCategory = c;
      currentPage = 1;
      renderCommands({ animate: true });
    });
    catsEl.appendChild(pill);
  });

  function setActivePill(activeEl) {
    catsEl.querySelectorAll(".pill").forEach((p) => p.classList.remove("active"));
    activeEl.classList.add("active");
  }
}

/* ======= Tabs ======= */
function selectTab(tabName, btn) {
  document.querySelectorAll(".tab").forEach((b) => b.classList.remove("active"));
  btn.classList.add("active");
  ["commands", "changelog", "about"].forEach((id) => {
    const view = document.getElementById(id + "View");
    view.style.display = id === tabName ? "flex" : "none";
    if (id === tabName) {
      if (id === "commands") {
        animateGrid(view.querySelector(".cmd-grid") || view);
      } else if (id === "changelog") {
        setupChangelogScroller(); // ensure scroller ready when shown
      }
    }
  });
}

/* ======= Utils ======= */
function copyToClipboard(text) {
  navigator.clipboard.writeText(text).then(() => showToast("Copied: " + text));
}
function showToast(msg) {
  const t = document.getElementById("toast");
  t.textContent = msg;
  t.style.display = "block";
  setTimeout(() => { t.style.display = "none"; }, 1400);
}
function debounce(fn, delay) {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => fn.apply(this, args), delay);
  };
}

/* ======= Placeholder Rotator ======= */
function rotatePlaceholder() {
  const input = document.getElementById("q");
  const list = JSON.parse(input.dataset.placeholder || "[]");
  if (!list.length) return;
  let i = 0;
  setInterval(() => {
    input.setAttribute("placeholder", list[i]);
    i = (i + 1) % list.length;
  }, 4000);
}

/* ======= PerPage Calculation (Commands grid) ======= */
function calcPerPage() {
  const grid = document.getElementById("cmdGrid");
  const pagination = document.querySelector(".pagination");
  const area = document.querySelector(".area");

  if (!grid || !pagination || !area) return 8;

  const cardHeight = 200; // average card height incl. gap
  const availableHeight = area.clientHeight - pagination.offsetHeight - 60; 
  const rows = Math.max(1, Math.floor(availableHeight / cardHeight));
  const cols = Math.max(1, Math.floor(grid.offsetWidth / 280));

  return rows * cols;
}
