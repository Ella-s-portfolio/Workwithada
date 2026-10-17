/* ==========================================================
   WORK — add / edit reels here.
   video:    direct link to an .mp4 (or a file in assets/videos/).
             Google Drive and Dropbox share links are converted automatically.
   poster:   image shown before the video loads.
   category: skincare | lifestyle | fashion | fragrance | wellness  (display names in CATEGORY_LABELS)
   brand:    optional, shown under the title.
   ========================================================== */
const WORK = [
  { title: "4-step glow routine",       brand: "Tocobo",         category: "skincare", poster: "assets/img/skincare-01.jpg", video: "assets/videos/skincare-01.mp4" },
  { title: "All-day fragrance routine", brand: "",               category: "skincare", poster: "assets/img/skincare-02.jpg", video: "assets/videos/skincare-02.mp4" },
  { title: "Bouncy foaming cleanser",   brand: "Skeenlogic",     category: "skincare", poster: "assets/img/skincare-03.jpg", video: "assets/videos/skincare-03.mp4" },
  { title: "Night skincare routine",    brand: "Karis Naturals", category: "skincare", poster: "assets/img/skincare-04.jpg", video: "assets/videos/skincare-04.mp4" },
  { title: "Gentle cleanser",           brand: "Dang Lifestyle", category: "skincare", poster: "assets/img/skincare-05.jpg", video: "assets/videos/skincare-05.mp4" },
  { title: "How to layer skincare",     brand: "",               category: "skincare", poster: "assets/img/skincare-06.jpg", video: "assets/videos/skincare-06.mp4" },
  { title: "PR package unboxing",       brand: "",               category: "skincare", poster: "assets/img/skincare-07.jpg", video: "assets/videos/skincare-07.mp4" },
  { title: "SPF body lotion",           brand: "Karis Naturals", category: "skincare", poster: "assets/img/skincare-08.jpg", video: "assets/videos/skincare-08.mp4" },
  { title: "Dental check-up",           brand: "Leza Dental",    category: "lifestyle", poster: "assets/img/lifestyle-01.jpg", video: "assets/videos/lifestyle-01.mp4" },
  { title: "GRWM for school",           brand: "",               category: "lifestyle", poster: "assets/img/lifestyle-02.jpg", video: "assets/videos/lifestyle-02.mp4" },
  { title: "Self-care spa day",         brand: "Spa Imperial",   category: "lifestyle", poster: "assets/img/lifestyle-03.jpg", video: "assets/videos/lifestyle-03.mp4" },
  { title: "New hairstyle",             brand: "",               category: "lifestyle", poster: "assets/img/lifestyle-04.jpg", video: "assets/videos/lifestyle-04.mp4" },
  { title: "Lip combo",                 brand: "",               category: "lifestyle", poster: "assets/img/lifestyle-05.jpg", video: "assets/videos/lifestyle-05.mp4" },
  { title: "Cozy evening routine",      brand: "Closeup",        category: "lifestyle", poster: "assets/img/lifestyle-06.jpg", video: "assets/videos/lifestyle-06.mp4" },
  { title: "Weekend vlog",              brand: "",               category: "lifestyle", poster: "assets/img/lifestyle-07.jpg", video: "assets/videos/lifestyle-07.mp4" },
  { title: "Lip combo of the day",      brand: "Blossom Makeups", category: "lifestyle", poster: "assets/img/lifestyle-08.jpg", video: "assets/videos/lifestyle-08.mp4" },
  { title: "June recap",                brand: "",               category: "lifestyle", poster: "assets/img/lifestyle-09.jpg", video: "assets/videos/lifestyle-09.mp4" },
  { title: "Makeup transition",         brand: "",               category: "lifestyle", poster: "assets/img/lifestyle-10.jpg", video: "assets/videos/lifestyle-10.mp4" },
  { title: "GRWM for church",           brand: "",               category: "lifestyle", poster: "assets/img/lifestyle-11.jpg", video: "assets/videos/lifestyle-11.mp4" },
  { title: "Outfit of the day",         brand: "",               category: "fashion",   poster: "assets/img/fashion-01.jpg", video: "assets/videos/fashion-01.mp4" },
  { title: "Red dress OOTD",            brand: "",               category: "fashion",   poster: "assets/img/fashion-02.jpg", video: "assets/videos/fashion-02.mp4" },
  { title: "Clean-girl white fit",      brand: "",               category: "fashion",   poster: "assets/img/fashion-03.jpg", video: "assets/videos/fashion-03.mp4" },
  { title: "Brunch outfit transition",  brand: "",               category: "fashion",   poster: "assets/img/fashion-04.jpg", video: "assets/videos/fashion-04.mp4" },
  { title: "Saheeb review",             brand: "",               category: "fragrance", poster: "assets/img/fragrance-01.jpg", video: "assets/videos/fragrance-01.mp4" },
  { title: "Caramel Cascade review",    brand: "",               category: "fragrance", poster: "assets/img/fragrance-02.jpg", video: "assets/videos/fragrance-02.mp4" },
  { title: "Violet Blossom",            brand: "Zara",           category: "fragrance", poster: "assets/img/fragrance-03.jpg", video: "assets/videos/fragrance-03.mp4" },
  { title: "Khair Fusion review",       brand: "Paris Corner",   category: "fragrance", poster: "assets/img/fragrance-04.jpg", video: "" },
  { title: "Fusion & Flood body sprays", brand: "Storm",          category: "fragrance", poster: "assets/img/fragrance-05.jpg", video: "assets/videos/fragrance-05.mp4" },
  { title: "Venom × Live pairing",      brand: "Riggs × Confetti", category: "fragrance", poster: "assets/img/fragrance-06.jpg", video: "assets/videos/fragrance-06.mp4" },
  { title: "Three Lattafa moods",       brand: "Lattafa",        category: "fragrance", poster: "assets/img/fragrance-07.jpg", video: "assets/videos/fragrance-07.mp4" },
  { title: "Self-care routine",   brand: "", category: "wellness",  poster: "assets/img/pink-headband.jpg",    video: "" },
  { title: "Everyday glow",       brand: "", category: "wellness",  poster: "assets/img/floral-top.jpg",       video: "" },
];

/* ---------- helpers ---------- */
const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];
const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;

function directVideoUrl(url) {
  if (!url) return "";
  const drive = url.match(/drive\.google\.com\/(?:file\/d\/|open\?id=|uc\?.*id=)([\w-]+)/);
  if (drive) return `https://drive.google.com/uc?export=download&id=${drive[1]}`;
  if (url.includes("dropbox.com")) return url.replace(/[?&]dl=0/, "").replace(/\?$/, "") + (url.includes("?") ? "&raw=1" : "?raw=1");
  return url;
}

const ICON_MUTED = '<svg viewBox="0 0 24 24"><path d="M3 9v6h4l5 5V4L7 9H3Zm13.6 3 2.7-2.7-1.4-1.4-2.7 2.7-2.7-2.7-1.4 1.4 2.7 2.7-2.7 2.7 1.4 1.4 2.7-2.7 2.7 2.7 1.4-1.4-2.7-2.7Z"/></svg>';
const ICON_SOUND = '<svg viewBox="0 0 24 24"><path d="M3 9v6h4l5 5V4L7 9H3Zm13.5 3A4.5 4.5 0 0 0 14 8v8a4.5 4.5 0 0 0 2.5-4ZM14 3.2v2.1a7 7 0 0 1 0 13.4v2.1a9 9 0 0 0 0-17.6Z"/></svg>';

/* ---------- build reels ---------- */
const reelsEl = $("#reels");
const CATEGORY_LABELS = { lifestyle: "Lifestyle & Beauty" };
const label = (c) => CATEGORY_LABELS[c] || c.charAt(0).toUpperCase() + c.slice(1);

reelsEl.innerHTML = WORK.map((w, i) => {
  const src = directVideoUrl(w.video);
  return `
  <article class="reel" data-category="${w.category}" data-index="${i}" tabindex="0" aria-label="${w.title} — ${label(w.category)} reel">
    <img class="reel__poster" src="${w.poster}" alt="" loading="lazy" />
    ${src ? `<video class="reel__media" muted loop playsinline preload="none" data-src="${src}" poster="${w.poster}"></video>` : ""}
    <div class="reel__top"><span class="reel__tag">${label(w.category)}</span><span class="reel__num">${String(i + 1).padStart(2, "0")}</span></div>
    ${src ? "" : '<span class="reel__play" aria-hidden="true"></span>'}
    <div class="reel__bottom">
      <h3 class="reel__title">${w.title}</h3>
      ${w.brand ? `<p class="reel__brand">${w.brand}</p>` : ""}
    </div>
    ${src ? `<button class="reel__sound" aria-label="Unmute">${ICON_MUTED}</button><div class="reel__progress"><i></i></div>` : ""}
  </article>`;
}).join("");

const reels = $$(".reel", reelsEl);

/* ---------- autoplay on scroll ---------- */
// 1) load the video source shortly before a reel scrolls into view
const loader = new IntersectionObserver((entries) => {
  entries.forEach(({ isIntersecting, target }) => {
    if (!isIntersecting) return;
    const v = $("video", target);
    if (v && !v.src) { v.src = v.dataset.src; v.load(); }
    loader.unobserve(target);
  });
}, { rootMargin: "600px 0px" });

// 2) play while mostly visible, pause otherwise
const player = new IntersectionObserver((entries) => {
  entries.forEach(({ intersectionRatio, target }) => {
    const v = $("video", target);
    if (!v) return;
    if (intersectionRatio >= 0.55 && !reduceMotion && !lightbox.classList.contains("is-open")) {
      v.play().then(() => target.classList.add("is-playing")).catch(() => {});
    } else {
      v.pause();
    }
  });
}, { threshold: [0, 0.55] });

reels.forEach((reel) => {
  loader.observe(reel);
  player.observe(reel);
  const v = $("video", reel);
  if (!v) return;
  // video file missing or unplayable: keep the poster and drop the video controls
  v.addEventListener("error", () => { reel.classList.add("no-video"); v.remove(); });
  const bar = $(".reel__progress i", reel);
  v.addEventListener("timeupdate", () => { if (v.duration) bar.style.width = (v.currentTime / v.duration) * 100 + "%"; });

  const sound = $(".reel__sound", reel);
  sound.addEventListener("click", (e) => {
    e.stopPropagation();
    const unmute = v.muted;
    // only one reel speaks at a time
    reels.forEach((r) => { const o = $("video", r); if (o) { o.muted = true; $(".reel__sound", r).innerHTML = ICON_MUTED; } });
    v.muted = !unmute;
    if (unmute) v.play().catch(() => {});
    sound.innerHTML = unmute ? ICON_SOUND : ICON_MUTED;
    sound.setAttribute("aria-label", unmute ? "Mute" : "Unmute");
  });
});

/* ---------- entrance animation ---------- */
const revealer = new IntersectionObserver((entries) => {
  entries.forEach(({ isIntersecting, target }) => {
    if (!isIntersecting) return;
    target.classList.add("is-in");
    revealer.unobserve(target);
  });
}, { threshold: 0.12 });
$$(".reveal").forEach((el) => revealer.observe(el));
reels.forEach((el, i) => { el.style.transitionDelay = `${(i % 4) * 90}ms`; revealer.observe(el); });

/* ---------- filters ---------- */
$$(".filter").forEach((btn) => {
  btn.addEventListener("click", () => {
    $$(".filter").forEach((b) => { b.classList.toggle("is-active", b === btn); b.setAttribute("aria-selected", b === btn); });
    const f = btn.dataset.filter;
    reels.forEach((r) => {
      const show = f === "all" || r.dataset.category === f;
      r.classList.toggle("is-hidden", !show);
      if (!show) $("video", r)?.pause();
    });
  });
});

/* ---------- lightbox ---------- */
const lightbox = $("#lightbox");
const lbVideo = $("#lightbox-video");
const lbImg = $("#lightbox-img");
const lbCaption = $("#lightbox-caption");

function openLightbox(i) {
  const w = WORK[i];
  const src = reels[i].classList.contains("no-video") ? "" : directVideoUrl(w.video);
  reels.forEach((r) => $("video", r)?.pause());
  lbCaption.textContent = w.brand ? `${w.title} — ${w.brand}` : w.title;
  if (src) {
    lbImg.hidden = true; lbVideo.hidden = false;
    lbVideo.src = src; lbVideo.poster = w.poster; lbVideo.muted = false;
    lbVideo.play().catch(() => {});
  } else {
    lbVideo.hidden = true; lbImg.hidden = false;
    lbImg.src = w.poster; lbImg.alt = w.title;
  }
  lightbox.classList.add("is-open");
  lightbox.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}
function closeLightbox() {
  lightbox.classList.remove("is-open");
  lightbox.setAttribute("aria-hidden", "true");
  lbVideo.pause(); lbVideo.removeAttribute("src"); lbVideo.load();
  document.body.style.overflow = "";
}
reels.forEach((r) => {
  r.addEventListener("click", () => openLightbox(+r.dataset.index));
  r.addEventListener("keydown", (e) => { if (e.key === "Enter") openLightbox(+r.dataset.index); });
});
$(".lightbox__close").addEventListener("click", closeLightbox);
lightbox.addEventListener("click", (e) => { if (e.target === lightbox) closeLightbox(); });
document.addEventListener("keydown", (e) => { if (e.key === "Escape" && lightbox.classList.contains("is-open")) closeLightbox(); });

/* ---------- nav + footer ---------- */
const nav = $("#nav");
addEventListener("scroll", () => nav.classList.toggle("is-scrolled", scrollY > 40), { passive: true });
$("#year").textContent = new Date().getFullYear();
