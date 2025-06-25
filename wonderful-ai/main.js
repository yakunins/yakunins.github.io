const updatePeriod = 100;

const state = {
    id: `amazing_ai_${now()}`,
    fg: rndColor(),
    bg: rndColor(),
};

const h1 = paint({ ...state, z: 10 });

setInterval(() => {
    state.winpos = winpos();
    state.latest = now();
    state.fontSize = window.getComputedStyle(h1).fontSize;
    localStorage.setItem(state.id, JSON.stringify(state));
    sync(state.id, state.winpos);
    clean();
}, updatePeriod);

window.addEventListener("beforeunload", () => {
    localStorage.removeItem(state.id);
});

function now() {
    return new Date().getTime();
}

function winpos() {
    return {
        x: window.screenX + Math.round(window.innerWidth / 2),
        y: window.screenY + Math.round(window.innerHeight / 2),
    };
}

function rndColor() {
    return Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, "0");
}

function paint(o) {
    let el = document.getElementById(o.id);
    if (!el) {
        el = document.createElement("h1");
        el.textContent = o?.textContent || "wonderful ai";
        o.id && el.setAttribute("id", o.id);
        document.body.appendChild(el);
    }
    o.fg && el.style.setProperty("--random-fg", "#" + o.fg);
    o.bg && el.style.setProperty("--random-bg", "#" + o.bg);
    o.shift?.x && el.style.setProperty("--shift-x", o.shift.x + "px");
    o.shift?.y && el.style.setProperty("--shift-y", o.shift.y + "px");
    o.z && el.style.setProperty("--z", o.z);
    o.fontSize && el.style.setProperty("--font-size", o.fontSize);
    return el;
}

function sync(id, pos) {
    const rest = Object.fromEntries(
        [...Object.keys(localStorage)]
            .filter((k) => k.startsWith("amazing_ai_"))
            .filter((k) => k !== id)
            .map((k) => [k, JSON.parse(localStorage.getItem(k))])
    );
    for (const r in rest) {
        const o = rest[r];
        if (now() - o.latest > updatePeriod * 10) {
            localStorage.removeItem(o.id); // cleanup
        }
        const shift = {
            x: o.winpos.x - pos.x,
            y: o.winpos.y - pos.y,
        };
        paint({ ...o, shift });
    }
}

function clean() {
    const els = Array.from(document.querySelectorAll("[id^=amazing_ai]"));
    for (const e of els) {
        const ids = [...Object.keys(localStorage)];
        const id = e.getAttribute("id");
        if (!ids.includes(id)) {
            e.remove();
        }
    }
}
