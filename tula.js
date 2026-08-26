(function () {
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const mobile = matchMedia("(max-width: 760px)").matches;
  const bar = document.getElementById("scroll-bar");
  const header = document.getElementById("header");

  const revealIo = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add("is-visible");
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
  );
  document.querySelectorAll(".reveal").forEach((el) => revealIo.observe(el));

  function onScroll() {
    const root = document.documentElement;
    const max = root.scrollHeight - root.clientHeight;
    if (bar) bar.style.width = max > 0 ? (root.scrollTop / max) * 100 + "%" : "0";
    if (header) header.classList.toggle("is-scrolled", root.scrollTop > 12);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (event) => {
      const id = link.getAttribute("href");
      if (!id || id === "#") return;
      const target = document.querySelector(id);
      if (!target) return;
      event.preventDefault();
      target.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
    });
  });

  /* Hero mouse parallax */
  const field = document.querySelector("[data-parallax]");
  if (field && !reduce && !mobile && matchMedia("(hover: hover)").matches) {
    let raf = 0;
    let tx = 0;
    let ty = 0;
    window.addEventListener(
      "pointermove",
      (event) => {
        tx = (event.clientX / innerWidth - 0.5) * 10;
        ty = (event.clientY / innerHeight - 0.5) * 8;
        if (raf) return;
        raf = requestAnimationFrame(() => {
          field.style.transform = "translate(" + tx.toFixed(1) + "px," + ty.toFixed(1) + "px)";
          raf = 0;
        });
      },
      { passive: true }
    );
  }

  /* На узком экране схема кадрируется по колонке блоков — иначе подписи нечитаемы */
  const scheme = document.querySelector(".scheme");
  if (scheme && mobile) scheme.setAttribute("viewBox", "104 12 352 628");

  /* Схемы собираются один раз при появлении секции */
  const builds = document.querySelectorAll("[data-build]");
  if (reduce) {
    builds.forEach((el) => el.classList.add("is-built"));
  } else {
    const bio = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-built");
          bio.unobserve(entry.target);
        });
      },
      { threshold: 0.2, rootMargin: "0px 0px -10% 0px" }
    );
    builds.forEach((el) => bio.observe(el));
  }

  /* Слои масштаба: подсветка по наведению и фокусу */
  const scaleViz = document.querySelector(".scale-viz");
  const legendItems = [...document.querySelectorAll(".scale-legend li")];
  if (scaleViz && legendItems.length) {
    const layers = [...scaleViz.querySelectorAll("[data-layer]")];
    const focusLayer = (index) => {
      scaleViz.classList.toggle("is-focused", index >= 0);
      layers.forEach((layer) => layer.classList.toggle("is-hot", Number(layer.dataset.layer) === index));
      legendItems.forEach((li) => li.classList.toggle("is-hot", Number(li.dataset.legend) === index));
    };
    legendItems.forEach((li, i) => {
      li.addEventListener("mouseenter", () => focusLayer(i));
      li.addEventListener("focus", () => focusLayer(i));
      li.addEventListener("blur", () => focusLayer(-1));
    });
    const legend = document.querySelector(".scale-legend");
    if (legend) legend.addEventListener("mouseleave", () => focusLayer(-1));
  }

  /* Единый контур: импульс по цепочке + наведение */
  const chain = document.querySelector("[data-chain]");
  if (chain) {
    const nodes = [...chain.querySelectorAll(".chain__node")];
    nodes.forEach((node, i) => {
      const idx = document.createElement("span");
      idx.className = "chain__idx";
      idx.setAttribute("aria-hidden", "true");
      idx.textContent = String(i + 1).padStart(2, "0");
      node.prepend(idx);
    });

    const light = (index) => nodes.forEach((node, i) => node.classList.toggle("is-on", i === index));
    let pinned = false;

    nodes.forEach((node, i) => {
      node.addEventListener("mouseenter", () => {
        pinned = true;
        light(i);
      });
      node.addEventListener("mouseleave", () => {
        pinned = false;
      });
    });

    if (!reduce) {
      let cursor = 0;
      const pio = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting || chain.dataset.live) return;
            chain.dataset.live = "1";
            light(0);
            setInterval(() => {
              if (pinned) return;
              cursor = (cursor + 1) % nodes.length;
              light(cursor);
            }, 900);
          });
        },
        { threshold: 0.15 }
      );
      pio.observe(chain);
    }
  }

  /* Stack appear + hover deps */
  const stack = document.getElementById("stack");
  if (stack) {
    const layers = [...stack.querySelectorAll(".stack__layer")];
    const sio = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) stack.classList.add("is-on");
        });
      },
      { threshold: 0.25 }
    );
    sio.observe(stack);
    if (reduce) stack.classList.add("is-on");

    function heat(index) {
      layers.forEach((layer, i) => {
        layer.classList.toggle("is-hot", i === index);
        layer.classList.toggle("is-near", index >= 0 && Math.abs(i - index) === 1);
      });
    }
    layers.forEach((layer, i) => {
      layer.addEventListener("mouseenter", () => {
        if (matchMedia("(hover: hover)").matches) heat(i);
      });
      layer.addEventListener("focus", () => heat(i));
      layer.addEventListener("blur", () => heat(-1));
    });
    stack.addEventListener("mouseleave", () => heat(-1));
  }

  /* Count-up */
  function animateCount(el) {
    const target = Number(el.dataset.count);
    if (!Number.isFinite(target)) return;
    const duration = 900;
    const start = performance.now();
    function frame(now) {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      const value = Math.round(target * eased);
      el.textContent = value.toLocaleString("ru-RU").replace(",", " ");
      if (t < 1) requestAnimationFrame(frame);
    }
    requestAnimationFrame(frame);
  }

  if (!reduce) {
    const cio = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting || entry.target.dataset.counted) return;
          entry.target.dataset.counted = "1";
          animateCount(entry.target);
        });
      },
      { threshold: 0.5 }
    );
    document.querySelectorAll("[data-count]").forEach((el) => cio.observe(el));
  }

  /* Action flow pulse */
  const flow = document.querySelector("[data-flow]");
  if (flow) {
    const items = [...flow.children];
    let idx = 0;
    function tick() {
      items.forEach((el, i) => el.classList.toggle("is-on", i <= idx));
      idx = (idx + 1) % items.length;
    }
    if (reduce) {
      items.forEach((el) => el.classList.add("is-on"));
    } else {
      const fio = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && !flow.dataset.live) {
              flow.dataset.live = "1";
              tick();
              setInterval(tick, 1100);
            }
          });
        },
        { threshold: 0.3 }
      );
      fio.observe(flow);
    }
  }

  /* Региональные кейсы — вкладки */
  const cases = document.querySelector("[data-cases]");
  if (cases) {
    const tabs = [...cases.querySelectorAll(".cases__tab")];
    const panels = [...cases.querySelectorAll("[data-case-panel]")];

    function selectCase(index, focus) {
      tabs.forEach((tab, i) => {
        const on = i === index;
        tab.classList.toggle("is-on", on);
        tab.setAttribute("aria-selected", on ? "true" : "false");
        tab.tabIndex = on ? 0 : -1;
      });
      panels.forEach((panel, i) => {
        panel.hidden = i !== index;
      });
      if (focus) tabs[index].focus();
    }

    tabs.forEach((tab, i) => {
      tab.addEventListener("click", () => selectCase(i));
      tab.addEventListener("keydown", (event) => {
        const step = event.key === "ArrowRight" || event.key === "ArrowDown" ? 1 : event.key === "ArrowLeft" || event.key === "ArrowUp" ? -1 : 0;
        if (!step) return;
        event.preventDefault();
        selectCase((i + step + tabs.length) % tabs.length, true);
      });
    });

    selectCase(0);
  }

  /* Карусель инфраструктуры */
  document.querySelectorAll("[data-carousel]").forEach((root) => {
    const track = root.querySelector(".carousel__track");
    const slides = [...root.querySelectorAll(".carousel__slide")];
    const prev = root.querySelector(".carousel__nav--prev");
    const next = root.querySelector(".carousel__nav--next");
    const dotsWrap = root.querySelector(".carousel__dots");
    if (!track || slides.length < 2) return;
    let index = 0;

    slides.forEach((_, i) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "carousel__dot" + (i === 0 ? " is-on" : "");
      btn.setAttribute("role", "tab");
      btn.setAttribute("aria-label", "Снимок " + (i + 1));
      btn.addEventListener("click", () => go(i));
      dotsWrap.appendChild(btn);
    });
    const dots = [...dotsWrap.querySelectorAll(".carousel__dot")];

    function go(nextIndex) {
      index = (nextIndex + slides.length) % slides.length;
      track.style.transform = "translateX(" + -index * 100 + "%)";
      slides.forEach((slide, i) => slide.classList.toggle("is-on", i === index));
      dots.forEach((dot, i) => dot.classList.toggle("is-on", i === index));
    }

    prev?.addEventListener("click", () => go(index - 1));
    next?.addEventListener("click", () => go(index + 1));
    root.querySelector(".carousel__frame")?.addEventListener("keydown", (event) => {
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        go(index - 1);
      }
      if (event.key === "ArrowRight") {
        event.preventDefault();
        go(index + 1);
      }
    });

    let startX = 0;
    track.addEventListener("pointerdown", (event) => {
      startX = event.clientX;
    });
    track.addEventListener("pointerup", (event) => {
      const dx = event.clientX - startX;
      if (Math.abs(dx) > 40) go(index + (dx < 0 ? 1 : -1));
    });
  });

  const drawingDialog = document.getElementById("drawing-dialog");
  const drawingImg = drawingDialog?.querySelector("img");
  function closeDrawing() {
    drawingDialog?.close();
  }
  document.querySelectorAll("[data-drawing-open]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const srcImg = btn.querySelector("img");
      if (!drawingDialog || !drawingImg || !srcImg) return;
      drawingImg.src = srcImg.currentSrc || srcImg.src;
      drawingImg.alt = srcImg.alt;
      drawingDialog.dataset.theme = btn.closest(".drawing--light") ? "light" : "dark";
      drawingDialog.showModal();
    });
  });
  drawingDialog?.querySelector("[data-drawing-close]")?.addEventListener("click", closeDrawing);
  drawingDialog?.addEventListener("click", (event) => {
    if (event.target === drawingDialog) closeDrawing();
  });
})();

/* —— Голосовой консультант (Vapi) —— */
(function (d, t) {
  const cfg = window.VAPI_TULA_CONFIG || {};
  const config = {
    apiKey: /^YOUR_/.test(cfg.apiKey || "") ? "" : cfg.apiKey || "",
    assistantId: /^YOUR_/.test(cfg.assistantId || "") ? "" : cfg.assistantId || "",
  };
  const fab = document.getElementById("tula-vapi-fab");
  const fabCall = fab?.querySelector(".vapiFab__icon--call");
  const fabEnd = fab?.querySelector(".vapiFab__icon--end");
  const startBtns = document.querySelectorAll(".js-vapi-start");
  const status = document.getElementById("tula-vapi-status");
  let vapi = null;
  let active = false;
  let connecting = false;
  let bound = false;

  function formatCallError(raw) {
    function pickMessage(value, depth) {
      if (depth > 5 || value == null) return "";
      if (typeof value === "string") return value.trim();
      if (typeof value === "number" || typeof value === "boolean") return String(value);
      if (value instanceof Error) return value.message || "";
      if (Array.isArray(value)) return value.map((v) => pickMessage(v, depth + 1)).filter(Boolean).join(". ");
      if (typeof value === "object") {
        for (const key of ["errorMsg", "message", "msg", "error", "detail", "description", "reason", "type", "statusText"]) {
          const nested = pickMessage(value[key], depth + 1);
          if (nested) return nested;
        }
      }
      return "";
    }

    const msg = pickMessage(raw, 0);
    if (/microphone|NotAllowed|Permission|NotFoundError|getUserMedia/i.test(msg)) {
      return "Разрешите доступ к микрофону в браузере и обновите страницу.";
    }
    if (/timed out|timeout|network|connection|room lookup/i.test(msg)) {
      return "Не удалось подключиться. Попробуйте ещё раз через несколько секунд.";
    }
    return "Не удалось начать звонок. Проверьте микрофон и попробуйте снова.";
  }

  function setStatus(msg, err) {
    if (!status) return;
    status.textContent = msg || "";
    status.hidden = !msg;
    status.classList.toggle("is-visible", Boolean(msg));
    status.classList.toggle("is-error", Boolean(err));
  }

  function setUI(on) {
    active = on;
    startBtns.forEach((btn) => {
      btn.disabled = on;
    });
    if (fab) {
      fab.classList.toggle("is-active", on);
      fab.setAttribute("aria-label", on ? "Завершить разговор" : "Задать вопрос виртуальному консультанту");
      fab.setAttribute("title", on ? "Завершить разговор" : "Задать вопрос виртуальному консультанту");
    }
    // У SVGElement нет свойства hidden — только атрибут
    if (fabCall) fabCall.toggleAttribute("hidden", on);
    if (fabEnd) fabEnd.toggleAttribute("hidden", !on);
  }

  function bindEvents(v) {
    if (!v || bound || typeof v.on !== "function") return;
    bound = true;
    v.on("call-start", () => {
      connecting = false;
      setUI(true);
      setStatus("Звонок идёт…");
    });
    v.on("call-end", () => {
      connecting = false;
      if (active) {
        setUI(false);
        setStatus("");
      }
    });
    v.on("call-start-failed", (e) => {
      connecting = false;
      setUI(false);
      setStatus(formatCallError(e?.error ?? e?.message ?? e), true);
      console.error("Vapi call-start-failed:", e);
    });
    v.on("error", (e) => {
      if (!connecting && !active) return;
      connecting = false;
      setUI(false);
      setStatus(formatCallError(e?.error ?? e?.message ?? e), true);
      console.error("Vapi error:", e);
    });
  }

  function init() {
    if (!window.vapiSDK) return null;
    if (vapi) return vapi;
    vapi = window.vapiSDK.run({ apiKey: config.apiKey, assistant: config.assistantId, config: {} });
    if (vapi) bindEvents(vapi);
    return vapi;
  }

  function start() {
    if (active || connecting) return;
    const v = init();
    if (!v?.start) {
      setStatus("Консультант загружается… Подождите и нажмите снова.", true);
      return;
    }
    connecting = true;
    setStatus("Подключение…");
    Promise.resolve(v.start(config.assistantId)).catch((err) => {
      connecting = false;
      setUI(false);
      setStatus(formatCallError(err), true);
      console.error("Vapi start error:", err);
    });
  }

  function stop() {
    connecting = false;
    try {
      vapi?.stop?.();
    } catch (_) {}
    setUI(false);
    setStatus("");
  }

  if (!config.apiKey || !config.assistantId) {
    if (fab) fab.hidden = true;
    startBtns.forEach((btn) => {
      btn.disabled = true;
      btn.title = "Голосовой консультант не настроен";
    });
    return;
  }

  startBtns.forEach((btn) => btn.addEventListener("click", start));
  fab?.addEventListener("click", () => (active || connecting ? stop() : start()));

  const g = d.createElement(t);
  const s = d.getElementsByTagName(t)[0];
  g.src = "https://cdn.jsdelivr.net/gh/VapiAI/html-script-tag@latest/dist/assets/index.js";
  g.async = true;
  g.defer = true;
  g.onload = init;
  g.onerror = () => setStatus("Не удалось загрузить модуль звонка.", true);
  s.parentNode.insertBefore(g, s);
})(document, "script");
