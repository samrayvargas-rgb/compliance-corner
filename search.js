(function () {
  const cfg = window.HS_SEARCH || {};
  const folder = cfg.folder || "sds";
  const emptyMsg = cfg.empty || "Nothing in this library yet.";
  const noMatch = cfg.noMatch || "Nothing matches those letters.";
  const aliases = cfg.aliases || {};

  let items = [], group = "All";
  const list = document.getElementById("list");
  const q = document.getElementById("q");
  const chips = document.getElementById("chips");
  const count = document.getElementById("count");

  function norm(s) {
    return (s || "").toLowerCase().replace(/[_./+\-]+/g, " ").replace(/\s+/g, " ").trim();
  }
  function haystack(it) {
    if (it._hay) return it._hay;
    const base = norm(it.name + " " + it.group + " " + it.file);
    const extra = [];
    Object.keys(aliases).forEach(function (key) {
      if (base.indexOf(key) !== -1) extra.push(aliases[key].join(" "));
    });
    it._hay = (base + " " + extra.join(" ")).trim();
    it._words = it._hay.split(" ");
    return it._hay;
  }
  function score(it, raw) {
    const term = norm(raw);
    if (!term) return 1;
    const hay = haystack(it);
    const words = term.split(" ");
    let s = 0;
    for (let i = 0; i < words.length; i++) {
      const w = words[i];
      if (!w) continue;
      if (hay.indexOf(w) === -1) return 0;
      if (norm(it.name).indexOf(w) === 0) s += 50;
      else if (it._words.some(function (x) { return x.indexOf(w) === 0; })) s += 20;
      else s += 8;
    }
    if (norm(it.name).indexOf(term) === 0) s += 30;
    return s;
  }
  function highlight(text, raw) {
    const safe = String(text || "").replace(/[&<>]/g, "");
    const term = norm(raw);
    if (!term) return safe;
    let out = safe;
    term.split(" ").filter(Boolean).forEach(function (w) {
      const re = new RegExp("(" + w.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + ")", "ig");
      out = out.replace(re, "<em>$1</em>");
    });
    return out;
  }
  function render() {
    if (!items.length) {
      count.textContent = "";
      list.innerHTML = "<div class='empty'>" + emptyMsg + "</div>";
      return;
    }
    const term = q.value || "";
    const ranked = items.map(function (it) {
      if (group !== "All" && it.group !== group) return null;
      const sc = score(it, term);
      return sc ? { it: it, sc: sc } : null;
    }).filter(Boolean).sort(function (a, b) {
      return b.sc - a.sc || a.it.name.localeCompare(b.it.name);
    });
    const typing = norm(term).length > 0;
    const shown = typing ? ranked.slice(0, 8) : ranked;
    count.textContent = typing
      ? (shown.length ? "Top matches — tap one" : "No match")
      : shown.length + " files — type to narrow";
    if (!shown.length) {
      list.innerHTML = "<div class='empty'>" + noMatch + "</div>";
      return;
    }
    list.innerHTML = shown.map(function (row, i) {
      const it = row.it;
      const cls = typing && i === 0 ? "row best" : "row";
      return "<a class='" + cls + "' href='/" + encodeURI((it.file || "").split("/").pop()) + "'>" +
        "<strong>" + highlight(it.name, term) + "</strong>" +
        "<span>" + it.group + (typing && i === 0 ? " · best match" : "") + "</span></a>";
    }).join("");
  }
  function load(data) {
    items = Array.isArray(data) ? data : [];
    items.forEach(haystack);
    const names = Array.from(new Set(items.map(function (i) { return i.group; }))).sort();
    const groups = names.length ? ["All"].concat(names) : [];
    chips.innerHTML = groups.map(function (g, i) {
      return "<button type='button' data-g='" + g + "' class='" + (i === 0 ? "on" : "") + "'>" + g + "</button>";
    }).join("");
    chips.onclick = function (e) {
      const btn = e.target.closest("button");
      if (!btn) return;
      group = btn.getAttribute("data-g");
      chips.querySelectorAll("button").forEach(function (b) { b.classList.toggle("on", b === btn); });
      render();
    };
    render();
  }
  fetch("/" + folder + "/catalog.json").then(function (r) {
    if (!r.ok) throw new Error("no catalog");
    return r.json();
  }).then(load).catch(function () {
    if (window.HS_CATALOG) load(window.HS_CATALOG);
    else { items = []; render(); }
  });
  q.addEventListener("input", render);
  q.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
      const first = list.querySelector("a.row");
      if (first) { e.preventDefault(); first.click(); }
    }
  });
  q.focus();
})();
