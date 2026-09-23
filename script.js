const yearNodes = document.querySelectorAll("[data-copyright-year]");
const currentYear = String(new Date().getFullYear());

yearNodes.forEach((node) => {
  node.textContent = currentYear;
});

function initLightbox() {
  const root = document.querySelector("[data-lightbox]");
  if (!root) return;

  const image = root.querySelector("[data-lightbox-image]");
  const caption = root.querySelector("[data-lightbox-caption]");
  const count = root.querySelector("[data-lightbox-count]");
  const stage = root.querySelector("[data-lightbox-stage]");
  const prev = root.querySelector("[data-lightbox-prev]");
  const next = root.querySelector("[data-lightbox-next]");
  const closeBtn = root.querySelector("[data-lightbox-close]");
  if (!image || !prev || !next || !closeBtn) return;

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const groups = new Map();
  let items = [];
  let index = 0;
  let lastFocus = null;
  let drag = null;
  const isRtl = () => document.documentElement.dir === "rtl";

  const pad = (value) => String(value).padStart(2, "0");

  document.querySelectorAll("[data-gallery]").forEach((trigger) => {
    const name = trigger.getAttribute("data-gallery");
    const img = trigger.querySelector("img");
    if (!name || !img) return;

    if (!groups.has(name)) groups.set(name, []);
    const list = groups.get(name);
    const src = img.getAttribute("src");
    let itemIndex = list.findIndex((item) => item.src === src);
    if (itemIndex < 0) {
      list.push({ src, img });
      itemIndex = list.length - 1;
    }

    trigger.addEventListener("click", (event) => {
      event.preventDefault();
      open(name, itemIndex);
    });
    if (!trigger.getAttribute("aria-label") && img.alt) {
      trigger.setAttribute("aria-label", img.alt);
    }
  });

  const render = () => {
    const item = items[index];
    if (!item) return;
    image.src = item.src;
    image.alt = item.img.alt || "";
    if (caption) caption.textContent = item.img.alt || "";
    if (count) count.textContent = `${pad(index + 1)} / ${pad(items.length)}`;
    prev.disabled = items.length < 2;
    next.disabled = items.length < 2;
  };

  const go = (delta) => {
    if (items.length === 0) return;
    index = (index + delta + items.length) % items.length;
    render();
  };

  const open = (name, start) => {
    items = groups.get(name) || [];
    if (items.length === 0) return;
    index = Math.max(0, Math.min(start, items.length - 1));
    lastFocus = document.activeElement;
    root.hidden = false;
    document.body.classList.add("lightbox-open");
    render();
    closeBtn.focus();
  };

  const close = () => {
    root.hidden = true;
    document.body.classList.remove("lightbox-open");
    image.removeAttribute("src");
    items = [];
    if (lastFocus && typeof lastFocus.focus === "function") lastFocus.focus();
  };

  prev.addEventListener("click", () => go(-1));
  next.addEventListener("click", () => go(1));
  closeBtn.addEventListener("click", close);

  root.addEventListener("click", (event) => {
    if (event.target === root) close();
  });

  document.addEventListener("keydown", (event) => {
    if (root.hidden) return;
    if (event.key === "Escape") {
      event.preventDefault();
      close();
    }
    if (event.key === "ArrowRight") {
      event.preventDefault();
      go(isRtl() ? -1 : 1);
    }
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      go(isRtl() ? 1 : -1);
    }
  });

  const surface = stage || image;
  surface.addEventListener("pointerdown", (event) => {
    if (event.pointerType === "mouse" && event.button !== 0) return;
    drag = { id: event.pointerId, x: event.clientX };
    surface.setPointerCapture(event.pointerId);
  });

  surface.addEventListener("pointerup", (event) => {
    if (!drag || event.pointerId !== drag.id) return;
    const dx = event.clientX - drag.x;
    drag = null;
    if (Math.abs(dx) < 40) return;
    const rtl = isRtl();
    go(dx < 0 ? (rtl ? -1 : 1) : rtl ? 1 : -1);
  });

  surface.addEventListener("pointercancel", () => {
    drag = null;
  });

  document.addEventListener("langchange", () => {
    document.querySelectorAll("[data-gallery]").forEach((trigger) => {
      const img = trigger.querySelector("img");
      if (img && img.alt) trigger.setAttribute("aria-label", img.alt);
    });
    if (!root.hidden) render();
  });

  if (reduceMotion) {
    image.style.transition = "none";
  }
}

initLightbox();

function initAboutMotion() {
  const about = document.querySelector(".about");
  if (!about) return;

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduceMotion || !("IntersectionObserver" in window)) return;

  about.classList.add("js-motion");

  const reveal = () => {
    about.classList.add("is-in");
  };

  const rect = about.getBoundingClientRect();
  if (rect.top < window.innerHeight * 0.88 && rect.bottom > 0) {
    reveal();
    return;
  }

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        reveal();
        io.disconnect();
      });
    },
    { threshold: 0.18, rootMargin: "0px 0px -8% 0px" }
  );

  io.observe(about);
}

initAboutMotion();

function initCaseMotion() {
  const cases = document.querySelectorAll(".case");
  if (!cases.length) return;

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduceMotion || !("IntersectionObserver" in window)) return;

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-in");
        io.unobserve(entry.target);
      });
    },
    { threshold: 0.16, rootMargin: "0px 0px -6% 0px" }
  );

  cases.forEach((item) => {
    item.classList.add("js-motion");
    const rect = item.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.9 && rect.bottom > 0) {
      item.classList.add("is-in");
      return;
    }
    io.observe(item);
  });
}

initCaseMotion();

function translate(key) {
  const i18n = window.PortfolioI18n;
  if (!i18n) return "";
  return i18n.t(i18n.getLang(), key);
}

function initBackToTop() {
  const button = document.querySelector("[data-back-to-top]");
  if (!button) return;

  const toggle = () => {
    button.classList.toggle("is-visible", window.scrollY > 420);
  };

  window.addEventListener("scroll", toggle, { passive: true });
  toggle();

  button.addEventListener("click", (event) => {
    event.preventDefault();
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
    const home = document.getElementById("top");
    if (home) home.focus({ preventScroll: true });
  });
}

initBackToTop();

function initContactForm() {
  const form = document.querySelector("#contact-form");
  const openBtn = document.querySelector("[data-contact-open]");
  if (!form) return;

  const fieldsWrap = form.querySelector(".contact-form-fields");
  const submitBtn = form.querySelector(".contact-submit");
  const status = form.querySelector("[data-contact-status]");
  const success = form.querySelector("[data-contact-success]");
  const nameInput = form.querySelector("#contact-name");
  const emailInput = form.querySelector("#contact-email");
  const messageInput = form.querySelector("#contact-message");
  const honeyInput = form.querySelector("[name='_honey']");
  const endpoint = "https://formsubmit.co/ajax/prhuzaifa@gmail.com";
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const fieldMap = {
    name: nameInput,
    email: emailInput,
    message: messageInput,
  };
  let attempted = false;

  const revealForm = () => {
    form.hidden = false;
    if (openBtn) openBtn.setAttribute("aria-expanded", "true");
    if (form.classList.contains("is-success")) {
      form.classList.remove("is-success");
      form.reset();
      attempted = false;
      if (success) success.hidden = true;
      if (fieldsWrap) fieldsWrap.hidden = false;
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.textContent = translate("formSubmit");
      }
      clearErrors();
    }
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    form.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "nearest" });
    window.requestAnimationFrame(() => {
      nameInput?.focus();
    });
  };

  const setStatus = (text, isError = false) => {
    if (!status) return;
    status.textContent = text;
    status.hidden = !text;
    status.classList.toggle("is-error", Boolean(text) && isError);
  };

  const setFieldError = (key, message) => {
    const input = fieldMap[key];
    const error = form.querySelector(`[data-error-for="${key}"]`);
    const wrap = input?.closest(".contact-field");
    if (wrap) wrap.classList.toggle("is-invalid", Boolean(message));
    if (input) {
      input.setAttribute("aria-invalid", message ? "true" : "false");
      if (error?.id) {
        if (message) input.setAttribute("aria-describedby", error.id);
        else input.removeAttribute("aria-describedby");
      }
    }
    if (error) {
      error.textContent = message || "";
      error.hidden = !message;
    }
  };

  const clearErrors = () => {
    Object.keys(fieldMap).forEach((key) => setFieldError(key, ""));
    setStatus("");
  };

  const validate = () => {
    const name = (nameInput?.value || "").trim();
    const email = (emailInput?.value || "").trim();
    const message = (messageInput?.value || "").trim();
    let valid = true;

    if (!name) {
      setFieldError("name", translate("formNameError"));
      valid = false;
    } else {
      setFieldError("name", "");
    }

    if (!email || !emailPattern.test(email)) {
      setFieldError("email", translate("formEmailError"));
      valid = false;
    } else {
      setFieldError("email", "");
    }

    if (!message) {
      setFieldError("message", translate("formMessageError"));
      valid = false;
    } else {
      setFieldError("message", "");
    }

    return valid ? { name, email, message } : null;
  };

  const setSending = (sending) => {
    form.classList.toggle("is-sending", sending);
    if (!submitBtn) return;
    submitBtn.disabled = sending;
    submitBtn.textContent = sending ? translate("formSending") : translate("formSubmit");
  };

  const markSuccess = () => {
    form.classList.add("is-success");
    form.classList.remove("is-sending");
    if (success) success.hidden = false;
    if (fieldsWrap) fieldsWrap.hidden = true;
    setStatus("");
    if (success) success.focus();
  };

  openBtn?.addEventListener("click", revealForm);

  form.addEventListener("input", (event) => {
    if (!attempted || form.classList.contains("is-sending")) return;
    if (!(event.target instanceof HTMLElement)) return;
    const key = event.target.getAttribute("name");
    if (key && fieldMap[key]) validate();
  });

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    if (form.classList.contains("is-sending")) return;
    attempted = true;

    const values = validate();
    if (!values) {
      const firstInvalid = form.querySelector(".contact-field.is-invalid input, .contact-field.is-invalid textarea");
      firstInvalid?.focus();
      return;
    }

    if (honeyInput && honeyInput.value) {
      markSuccess();
      return;
    }

    setSending(true);
    setStatus("");

    try {
      const body = new FormData();
      body.append("name", values.name);
      body.append("email", values.email);
      body.append("_replyto", values.email);
      body.append("message", values.message);
      body.append("_subject", `Portfolio message from ${values.name}`);
      body.append("_template", "table");
      body.append("_captcha", "false");

      const response = await fetch(endpoint, {
        method: "POST",
        headers: { Accept: "application/json" },
        body,
      });

      const payload = await response.json().catch(() => ({}));
      const accepted =
        payload.success === true ||
        payload.success === "true" ||
        /activat/i.test(String(payload.message || ""));

      if (!accepted) throw new Error(payload.message || "submit failed");
      markSuccess();
    } catch (err) {
      setSending(false);
      setStatus(translate("formError"), true);
    }
  });

  document.addEventListener("langchange", () => {
    if (form.classList.contains("is-sending")) {
      if (submitBtn) submitBtn.textContent = translate("formSending");
    }
    if (status && status.textContent) {
      setStatus(translate("formError"), true);
    }
    if (form.classList.contains("is-success")) return;
    const invalid = form.querySelector(".contact-field.is-invalid");
    if (invalid) validate();
  });
}

initContactForm();
