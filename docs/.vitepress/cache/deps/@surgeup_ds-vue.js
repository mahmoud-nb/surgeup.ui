import {
  Comment,
  Fragment,
  Text,
  Transition,
  computed,
  createBaseVNode,
  createBlock,
  createCommentVNode,
  createElementBlock,
  createTextVNode,
  createVNode,
  defineComponent,
  h,
  mergeProps,
  nextTick,
  normalizeClass,
  normalizeStyle,
  onMounted,
  onUnmounted,
  openBlock,
  ref,
  renderList,
  renderSlot,
  resolveDynamicComponent,
  toDisplayString,
  unref,
  useAttrs,
  useSlots,
  watch,
  withCtx,
  withModifiers
} from "./chunk-FJMVHDE5.js";

// ../package/dist/index.es.js
var Ie = ["disabled", "tabindex"];
var Re = {
  key: 0,
  class: "su-button__spinner"
};
var Fe = {
  key: 1,
  class: "su-button__content"
};
var Be = defineComponent({
  __name: "Button",
  props: {
    variant: { default: "primary" },
    size: { default: "md" },
    disabled: { type: Boolean, default: false },
    loading: { type: Boolean, default: false },
    block: { type: Boolean, default: false },
    icon: {},
    iconDisplay: { default: "left" },
    ariaExpanded: { type: Boolean },
    ariaPressed: { type: Boolean },
    ariaLabel: {},
    ariaLabelledBy: {},
    ariaDescribedBy: {},
    ariaHidden: { type: Boolean },
    role: {},
    tabIndex: { default: 0 }
  },
  emits: ["click", "focus", "blur", "keydown"],
  setup(h2, { emit: u }) {
    const a = h2, e = u, v = computed(() => [
      "su-button",
      `su-button--${a.variant}`,
      `su-button--${a.size}`,
      {
        "su-button--disabled": a.disabled,
        "su-button--loading": a.loading,
        "su-button--block": a.block,
        "su-button--icon-only": a.icon && a.iconDisplay === "only",
        "su-button--icon-right": a.icon && a.iconDisplay === "right"
      }
    ]), _ = computed(() => !(a.icon && a.iconDisplay === "only")), y = (b) => {
      a.disabled || a.loading || e("click", b);
    }, k = (b) => {
      (b.key === "Enter" || b.key === " ") && (b.preventDefault(), !a.disabled && !a.loading && e("click", b)), e("keydown", b);
    }, m = (b) => {
      e("focus", b);
    }, w = (b) => {
      e("blur", b);
    }, $ = computed(() => {
      const b = {};
      return a.ariaLabel && (b["aria-label"] = a.ariaLabel), a.ariaDescribedBy && (b["aria-describedby"] = a.ariaDescribedBy), a.ariaExpanded !== void 0 && (b["aria-expanded"] = a.ariaExpanded), a.ariaPressed !== void 0 && (b["aria-pressed"] = a.ariaPressed), a.role && (b.role = a.role), a.loading && (b["aria-busy"] = "true", b["aria-live"] = "polite"), a.disabled && (b["aria-disabled"] = "true"), a.icon && a.iconDisplay === "only" && !a.ariaLabel && console.warn('Button with icon and iconDisplay="only" should have an ariaLabel for accessibility'), b;
    });
    return (b, B) => (openBlock(), createElementBlock("button", mergeProps({
      class: v.value,
      disabled: b.disabled || b.loading,
      tabindex: b.disabled ? -1 : b.tabIndex
    }, $.value, {
      onClick: y,
      onKeydown: k,
      onFocus: m,
      onBlur: w
    }), [
      b.loading ? (openBlock(), createElementBlock("span", Re, [...B[0] || (B[0] = [
        createBaseVNode("svg", {
          class: "su-spinner",
          viewBox: "0 0 24 24"
        }, [
          createBaseVNode("circle", {
            cx: "12",
            cy: "12",
            r: "10",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "aria-hidden": "true"
          }),
          createBaseVNode("path", {
            d: "M12 2a10 10 0 0 1 10 10",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "aria-hidden": "true"
          })
        ], -1),
        createBaseVNode("span", { class: "sr-only" }, "Chargement en cours...", -1)
      ])])) : createCommentVNode("", true),
      b.loading ? createCommentVNode("", true) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
        b.icon ? (openBlock(), createBlock(resolveDynamicComponent(b.icon), {
          key: 0,
          class: "su-button__icon",
          "aria-hidden": "true"
        })) : createCommentVNode("", true),
        _.value ? (openBlock(), createElementBlock("span", Fe, [
          renderSlot(b.$slots, "default")
        ])) : createCommentVNode("", true)
      ], 64))
    ], 16, Ie));
  }
});
var Ae = defineComponent({
  __name: "ButtonsGroup",
  props: {
    gap: { default: "md" },
    size: {},
    variant: {},
    ariaLabel: {},
    ariaDescribedBy: {},
    role: {}
  },
  setup(h2) {
    const u = h2, a = useSlots(), e = computed(() => [
      "su-buttons-group",
      `su-buttons-group--gap-${u.gap}`,
      {
        "su-buttons-group--connected": u.gap === "none"
      }
    ]), v = computed(() => {
      if (!a.default) return [];
      const y = a.default(), k = [];
      for (const m of y)
        if (m.type === Be) {
          const w = { ...m.props };
          if (u.size && (w.size = u.size), u.variant && (w.variant = u.variant), u.gap === "none") {
            const $ = w.class || "";
            w.class = `${$} su-buttons-group__button`.trim();
          }
          k.push(h(m.type, w, m == null ? void 0 : m.children));
        } else {
          if (m.type === Comment || m.type === Text || m.type === Fragment)
            continue;
          console.warn("ButtonsGroup expects only Button components as children. Found:", m.type);
        }
      return k;
    }), _ = computed(() => {
      const y = {};
      return u.ariaLabel && (y["aria-label"] = u.ariaLabel), u.ariaDescribedBy && (y["aria-describedby"] = u.ariaDescribedBy), u.role && (y.role = u.role), y;
    });
    return (y, k) => (openBlock(), createElementBlock("div", mergeProps({ class: e.value }, _.value), [
      (openBlock(true), createElementBlock(Fragment, null, renderList(v.value, (m, w) => (openBlock(), createBlock(resolveDynamicComponent(m), { key: w }))), 128))
    ], 16));
  }
});
function Se(h2, u) {
  return openBlock(), createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    createBaseVNode("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
    })
  ]);
}
function Me(h2, u) {
  return openBlock(), createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    createBaseVNode("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
    })
  ]);
}
function ve(h2, u) {
  return openBlock(), createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    createBaseVNode("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "m4.5 12.75 6 6 9-13.5"
    })
  ]);
}
function He(h2, u) {
  return openBlock(), createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    createBaseVNode("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "m19.5 8.25-7.5 7.5-7.5-7.5"
    })
  ]);
}
function Te(h2, u) {
  return openBlock(), createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    createBaseVNode("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M12 16.5V9.75m0 0 3 3m-3-3-3 3M6.75 19.5a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5H6.75Z"
    })
  ]);
}
function Ee(h2, u) {
  return openBlock(), createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    createBaseVNode("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
    })
  ]);
}
function je(h2, u) {
  return openBlock(), createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    createBaseVNode("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"
    })
  ]);
}
function Ke(h2, u) {
  return openBlock(), createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    createBaseVNode("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
    })
  ]);
}
function Pe(h2, u) {
  return openBlock(), createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    createBaseVNode("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
    })
  ]);
}
function he(h2, u) {
  return openBlock(), createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    createBaseVNode("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M6 18 18 6M6 6l12 12"
    })
  ]);
}
var Oe = {
  key: 1,
  class: "su-link__content"
};
var xe = defineComponent({
  __name: "Link",
  props: {
    href: {},
    to: {},
    target: {},
    rel: {},
    variant: { default: "default" },
    size: { default: "md" },
    underline: { default: "hover" },
    disabled: { type: Boolean, default: false },
    icon: {},
    iconDisplay: { default: "left" },
    external: { type: Boolean, default: false },
    ariaLabel: {},
    ariaDescribedBy: {},
    role: {},
    tabIndex: { default: 0 }
  },
  emits: ["click", "focus", "blur", "keydown"],
  setup(h2, { emit: u }) {
    const a = h2, e = u, v = computed(() => a.to !== void 0), _ = computed(() => a.external || a.href && (a.href.startsWith("http") || a.href.startsWith("//") || a.target === "_blank")), y = computed(() => {
      const g = {};
      return v.value || (g.href = a.href, _.value ? (g.target = a.target || "_blank", g.rel = a.rel || "noopener noreferrer") : (a.target && (g.target = a.target), a.rel && (g.rel = a.rel))), a.ariaLabel && (g["aria-label"] = a.ariaLabel), a.ariaDescribedBy && (g["aria-describedby"] = a.ariaDescribedBy), a.role && (g.role = a.role), a.disabled ? (g["aria-disabled"] = "true", g.tabindex = -1) : g.tabindex = a.tabIndex, g;
    }), k = computed(() => [
      "su-link",
      `su-link--${a.variant}`,
      `su-link--${a.size}`,
      `su-link--underline-${a.underline}`,
      {
        "su-link--disabled": a.disabled,
        "su-link--external": _.value,
        "su-link--icon-only": a.icon && a.iconDisplay === "only",
        "su-link--icon-right": a.icon && a.iconDisplay === "right"
      }
    ]), m = computed(() => !(a.icon && a.iconDisplay === "only")), w = (g) => {
      if (a.disabled) {
        g.preventDefault();
        return;
      }
      e("click", g);
    }, $ = (g) => {
      if ((g.key === "Enter" || g.key === " ") && a.disabled) {
        g.preventDefault();
        return;
      }
      e("keydown", g);
    }, b = (g) => {
      e("focus", g);
    }, B = (g) => {
      e("blur", g);
    };
    return a.icon && a.iconDisplay === "only" && !a.ariaLabel && console.warn('Link with icon and iconDisplay="only" should have an ariaLabel for accessibility'), (g, t) => (openBlock(), createBlock(resolveDynamicComponent(v.value ? "router-link" : "a"), mergeProps({ class: k.value }, v.value ? { to: g.to, ...y.value } : y.value, {
      onClick: w,
      onKeydown: $,
      onFocus: b,
      onBlur: B
    }), {
      default: withCtx(() => [
        g.icon ? (openBlock(), createBlock(resolveDynamicComponent(g.icon), {
          key: 0,
          class: "su-link__icon",
          "aria-hidden": "true"
        })) : createCommentVNode("", true),
        m.value ? (openBlock(), createElementBlock("span", Oe, [
          renderSlot(g.$slots, "default")
        ])) : createCommentVNode("", true),
        _.value && !g.icon && m.value ? (openBlock(), createBlock(unref(Se), {
          key: 2,
          class: "su-link__external-icon",
          "aria-hidden": "true"
        })) : createCommentVNode("", true)
      ]),
      _: 3
    }, 16, ["class"]));
  }
});
var Ve = defineComponent({
  __name: "LinksGroup",
  props: {
    gap: { default: "md" },
    size: {},
    variant: {},
    underline: {},
    direction: { default: "horizontal" },
    ariaLabel: {},
    ariaDescribedBy: {},
    role: {}
  },
  setup(h2) {
    const u = h2, a = useSlots(), e = computed(() => [
      "su-links-group",
      `su-links-group--gap-${u.gap}`,
      `su-links-group--${u.direction}`,
      {
        "su-links-group--connected": u.gap === "none"
      }
    ]), v = computed(() => {
      if (!a.default) return [];
      const y = a.default(), k = [];
      for (const m of y)
        if (m.type === xe) {
          const w = { ...m.props };
          if (u.size && (w.size = u.size), u.variant && (w.variant = u.variant), u.underline && (w.underline = u.underline), u.gap === "none") {
            const $ = w.class || "";
            w.class = `${$} su-links-group__link`.trim();
          }
          k.push(h(m.type, w, m == null ? void 0 : m.children));
        } else {
          if (m.type === Comment || m.type === Text || m.type === Fragment)
            continue;
          console.warn("LinksGroup expects only Link components as children. Found:", m.type);
        }
      return k;
    }), _ = computed(() => {
      const y = {};
      return u.ariaLabel && (y["aria-label"] = u.ariaLabel), u.ariaDescribedBy && (y["aria-describedby"] = u.ariaDescribedBy), u.role && (y.role = u.role), y;
    });
    return (y, k) => (openBlock(), createElementBlock("div", mergeProps({ class: e.value }, _.value), [
      (openBlock(true), createElementBlock(Fragment, null, renderList(v.value, (m, w) => (openBlock(), createBlock(resolveDynamicComponent(m), { key: w }))), 128))
    ], 16));
  }
});
var Ge = 0;
function ae(h2 = "su") {
  return `${h2}-${++Ge}-${Date.now().toString(36)}`;
}
function Ze(h2) {
  return [
    "button:not([disabled])",
    "input:not([disabled])",
    "select:not([disabled])",
    "textarea:not([disabled])",
    "a[href]",
    '[tabindex]:not([tabindex="-1"])'
  ].some((a) => h2.matches(a));
}
function _e(h2) {
  const u = h2.querySelectorAll(
    'button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), a[href], [tabindex]:not([tabindex="-1"])'
  ), a = u[0], e = u[u.length - 1], v = (_) => {
    _.key === "Tab" && (_.shiftKey ? document.activeElement === a && (_.preventDefault(), e.focus()) : document.activeElement === e && (_.preventDefault(), a.focus()));
  };
  return h2.addEventListener("keydown", v), a == null || a.focus(), () => {
    h2.removeEventListener("keydown", v);
  };
}
function V(h2, u = "polite") {
  const a = document.createElement("div");
  a.setAttribute("aria-live", u), a.setAttribute("aria-atomic", "true"), a.className = "sr-only", a.textContent = h2, document.body.appendChild(a), setTimeout(() => {
    document.body.removeChild(a);
  }, 1e3);
}
function Ne() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
function We() {
  return window.matchMedia("(prefers-contrast: high)").matches;
}
function Ue(h2, u) {
  return 4.5;
}
function Ye(h2, u = "AA") {
  return h2 >= (u === "AAA" ? 7 : 4.5);
}
var Zs = Object.freeze(Object.defineProperty({
  __proto__: null,
  announceToScreenReader: V,
  generateId: ae,
  getContrastRatio: Ue,
  isContrastValid: Ye,
  isFocusable: Ze,
  prefersHighContrast: We,
  prefersReducedMotion: Ne,
  trapFocus: _e
}, Symbol.toStringTag, { value: "Module" }));
var Qe = ["dir"];
var Je = ["for"];
var Xe = {
  key: 0,
  class: "su-indicator-required",
  "aria-label": "requis"
};
var ea = ["id", "type", "value", "placeholder", "disabled", "readonly", "required"];
var aa = ["id", "aria-live"];
var sa = defineComponent({
  __name: "Input",
  props: {
    type: { default: "text" },
    size: { default: "md" },
    state: { default: "default" },
    disabled: { type: Boolean, default: false },
    readonly: { type: Boolean, default: false },
    required: { type: Boolean, default: false },
    placeholder: {},
    value: {},
    prefix: {},
    suffix: {},
    prefixIcon: {},
    suffixIcon: {},
    textAlign: { default: "left" },
    dir: { default: "auto" },
    label: {},
    message: {},
    ariaInvalid: { type: Boolean },
    ariaRequired: { type: Boolean },
    autocomplete: {},
    min: {},
    max: {},
    step: {},
    minLength: {},
    maxLength: {},
    pattern: {},
    ariaLabel: {},
    ariaLabelledBy: {},
    ariaDescribedBy: {},
    ariaHidden: { type: Boolean },
    role: {},
    tabIndex: {}
  },
  emits: ["update:value", "input", "change", "focus", "blur", "keydown", "keyup", "prefix-click", "prefix-icon-click", "suffix-click", "suffix-icon-click"],
  setup(h2, { expose: u, emit: a }) {
    const e = h2, v = a, _ = useAttrs(), y = ref(), k = computed(() => _.id || ae("input")), m = computed(() => e.message ? `${k.value}-message` : void 0), w = computed(() => [
      "su-input-container",
      `su-input-container--${e.size}`,
      `su-input-container--${e.state}`,
      {
        "su-input-container--disabled": e.disabled,
        "su-input-container--readonly": e.readonly,
        "su-input-container--has-prefix": e.prefix || e.prefixIcon,
        "su-input-container--has-suffix": e.suffix || e.suffixIcon,
        "su-input-container--rtl": e.dir === "rtl"
      }
    ]), $ = computed(() => [
      "su-input",
      `su-input--${e.size}`,
      `su-input--${e.state}`,
      `su-input--align-${e.textAlign}`,
      {
        "su-input--disabled": e.disabled,
        "su-input--readonly": e.readonly,
        "su-input--has-prefix": e.prefix || e.prefixIcon,
        "su-input--has-suffix": e.suffix || e.suffixIcon
      }
    ]), b = computed(() => {
      const o = {};
      if (e.ariaLabel && (o["aria-label"] = e.ariaLabel), e.ariaDescribedBy || m.value) {
        const Z = [e.ariaDescribedBy, m.value].filter(Boolean).join(" ");
        o["aria-describedby"] = Z;
      }
      return e.ariaInvalid !== void 0 && (o["aria-invalid"] = e.ariaInvalid), e.ariaRequired !== void 0 && (o["aria-required"] = e.ariaRequired), e.required && (o["aria-required"] = "true"), e.state === "error" && (o["aria-invalid"] = "true"), o;
    }), B = computed(() => {
      const o = {};
      return e.autocomplete && (o.autocomplete = e.autocomplete), e.min !== void 0 && (o.min = e.min), e.max !== void 0 && (o.max = e.max), e.step !== void 0 && (o.step = e.step), e.minLength !== void 0 && (o.minlength = e.minLength), e.maxLength !== void 0 && (o.maxlength = e.maxLength), e.pattern && (o.pattern = e.pattern), o;
    }), g = (o) => {
      const Z = o.target, J = e.type === "number" ? Number(Z.value) : Z.value;
      v("update:value", J), v("input", o);
    }, t = (o) => {
      v("change", o);
    }, A = (o) => {
      v("focus", o);
    }, d = (o) => {
      v("blur", o);
    }, S = (o) => {
      v("keydown", o);
    }, I = (o) => {
      v("keyup", o);
    }, z = (o) => {
      e.disabled || e.readonly || v("prefix-click", o);
    }, R = (o) => {
      e.disabled || e.readonly || v("prefix-icon-click", o);
    }, P = (o) => {
      e.disabled || e.readonly || v("suffix-click", o);
    }, le = (o) => {
      e.disabled || e.readonly || v("suffix-icon-click", o);
    };
    return u({
      focus: () => {
        var o;
        (o = y.value) == null || o.focus();
      },
      select: () => {
        var o;
        (o = y.value) == null || o.select();
      },
      inputRef: y
    }), (o, Z) => (openBlock(), createElementBlock("div", {
      class: "su-input-wrapper",
      dir: o.dir
    }, [
      o.label ? (openBlock(), createElementBlock("label", {
        key: 0,
        for: k.value,
        class: normalizeClass(["su-input-label", {
          "su-input-label--required": o.required,
          "su-input-label--disabled": o.disabled
        }])
      }, [
        createTextVNode(toDisplayString(o.label) + " ", 1),
        o.required ? (openBlock(), createElementBlock("span", Xe, "*")) : createCommentVNode("", true)
      ], 10, Je)) : createCommentVNode("", true),
      createBaseVNode("div", {
        class: normalizeClass(w.value)
      }, [
        o.prefixIcon ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: "su-input-prefix su-input-prefix--icon su-input-prefix--clickable",
          onClick: R
        }, [
          (openBlock(), createBlock(resolveDynamicComponent(o.prefixIcon), {
            class: "su-input-icon",
            "aria-hidden": "true"
          }))
        ])) : o.prefix ? (openBlock(), createElementBlock("div", {
          key: 1,
          class: "su-input-prefix su-input-prefix--text su-input-prefix--clickable",
          onClick: z
        }, toDisplayString(o.prefix), 1)) : createCommentVNode("", true),
        createBaseVNode("input", mergeProps({
          ref_key: "inputRef",
          ref: y,
          id: k.value,
          class: $.value,
          type: o.type,
          value: o.value,
          placeholder: o.placeholder,
          disabled: o.disabled,
          readonly: o.readonly,
          required: o.required
        }, { ...B.value, ...b.value }, {
          onInput: g,
          onChange: t,
          onFocus: A,
          onBlur: d,
          onKeydown: S,
          onKeyup: I
        }), null, 16, ea),
        o.suffix ? (openBlock(), createElementBlock("div", {
          key: 2,
          class: "su-input-suffix su-input-suffix--text su-input-suffix--clickable",
          onClick: P
        }, toDisplayString(o.suffix), 1)) : o.suffixIcon ? (openBlock(), createElementBlock("div", {
          key: 3,
          class: "su-input-suffix su-input-suffix--icon su-input-suffix--clickable",
          onClick: le
        }, [
          (openBlock(), createBlock(resolveDynamicComponent(o.suffixIcon), {
            class: "su-input-icon",
            "aria-hidden": "true"
          }))
        ])) : createCommentVNode("", true)
      ], 2),
      o.message ? (openBlock(), createElementBlock("div", {
        key: 1,
        id: m.value,
        class: normalizeClass(["su-input-message", `su-input-message--${o.state}`]),
        "aria-live": o.state === "error" ? "assertive" : "polite"
      }, toDisplayString(o.message), 11, aa)) : createCommentVNode("", true)
    ], 8, Qe));
  }
});
var ta = ["dir"];
var la = ["for"];
var ia = {
  key: 0,
  class: "su-indicator-required",
  "aria-label": "requis"
};
var ra = ["id", "tabindex"];
var oa = { class: "su-select-content" };
var na = {
  key: 0,
  class: "su-select-tags"
};
var ua = { class: "su-select-tag-label" };
var da = ["aria-label", "onClick"];
var ca = {
  key: 0,
  class: "su-select-tag su-select-tag--more"
};
var pa = {
  key: 1,
  class: "su-select-display"
};
var fa = { class: "su-select-display-text" };
var va = { class: "su-select-actions" };
var ha = {
  key: 0,
  class: "su-select-spinner"
};
var ba = ["id", "aria-multiselectable"];
var ya = {
  key: 0,
  class: "su-select-search"
};
var ma = { class: "su-select-search-container" };
var ga = ["placeholder", "value"];
var ka = { class: "su-select-options" };
var wa = ["aria-label"];
var $a = ["aria-selected", "aria-disabled", "onClick", "onMouseenter"];
var Ba = {
  key: 0,
  class: "su-select-option-checkbox"
};
var xa = { class: "su-select-option-content" };
var _a = { class: "su-select-option-label" };
var La = {
  key: 0,
  class: "su-select-option-description"
};
var Ca = {
  key: 1,
  class: "su-select-no-options"
};
var qa = ["id", "aria-live"];
var Da = defineComponent({
  __name: "SelectBox",
  props: {
    options: { default: () => [] },
    groups: { default: () => [] },
    value: { default: void 0 },
    multiple: { type: Boolean, default: false },
    searchable: { type: Boolean, default: false },
    clearable: { type: Boolean, default: false },
    size: { default: "md" },
    state: { default: "default" },
    disabled: { type: Boolean, default: false },
    readonly: { type: Boolean, default: false },
    required: { type: Boolean, default: false },
    placeholder: { default: "Sélectionnez une option..." },
    searchPlaceholder: { default: "Rechercher..." },
    noOptionsText: { default: "Aucune option disponible" },
    noResultsText: { default: "Aucun résultat trouvé" },
    maxHeight: { default: "200px" },
    textAlign: { default: "left" },
    dir: { default: "auto" },
    label: {},
    message: {},
    ariaInvalid: { type: Boolean },
    ariaRequired: { type: Boolean },
    maxSelectedItems: { default: void 0 },
    closeOnSelect: { type: Boolean, default: true },
    loading: { type: Boolean, default: false },
    ariaLabel: {},
    ariaLabelledBy: {},
    ariaDescribedBy: {},
    ariaHidden: { type: Boolean },
    role: {},
    tabIndex: {}
  },
  emits: ["update:value", "change", "open", "close", "search", "focus", "blur"],
  setup(h2, { expose: u, emit: a }) {
    const e = h2, v = a, _ = useAttrs(), y = ref(), k = ref(), m = ref(), w = ref(), $ = ref(false), b = ref(""), B = ref(-1), g = ref(null), t = computed(() => _.id || ae("select")), A = computed(() => `${t.value}-listbox`), d = computed(() => e.groups && e.groups.length > 0 ? e.groups.flatMap(
      (i) => i.options.map((C) => ({ ...C, group: i.label }))
    ) : e.options || []), S = computed(() => {
      if (!e.searchable || !b.value)
        return d.value;
      const i = b.value.toLowerCase();
      return d.value.filter(
        (C) => C.label.toLowerCase().includes(i) || C.description && C.description.toLowerCase().includes(i)
      );
    }), I = computed(() => {
      const i = {};
      return S.value.forEach((C) => {
        const X = C.group || "";
        i[X] || (i[X] = []), i[X].push(C);
      }), i;
    }), z = computed({
      get() {
        return e.multiple ? Array.isArray(e.value) ? e.value : e.value !== void 0 && e.value !== null ? [e.value] : [] : e.value;
      },
      set(i) {
        v("update:value", i), v("change", i);
      }
    }), R = computed(() => {
      if (e.multiple) {
        const i = z.value;
        return i ? d.value.filter((C) => i.includes(C.value)) : [];
      } else {
        const i = z.value;
        return i != null ? d.value.filter((C) => C.value === i) : [];
      }
    }), P = computed(() => {
      var i;
      return R.value.length === 0 ? e.placeholder : e.multiple ? R.value.length === 1 ? R.value[0].label : `${R.value.length} éléments sélectionnés` : ((i = R.value[0]) == null ? void 0 : i.label) || e.placeholder;
    }), le = computed(() => [
      "su-select-container",
      `su-select-container--${e.size}`,
      `su-select-container--${e.state}`,
      {
        "su-select-container--disabled": e.disabled,
        "su-select-container--readonly": e.readonly,
        "su-select-container--open": $.value,
        "su-select-container--multiple": e.multiple,
        "su-select-container--rtl": e.dir === "rtl"
      }
    ]), oe = computed(() => [
      "su-select-trigger",
      `su-select-trigger--${e.size}`,
      `su-select-trigger--${e.state}`,
      `su-select-trigger--align-${e.textAlign}`,
      {
        "su-select-trigger--disabled": e.disabled,
        "su-select-trigger--readonly": e.readonly,
        "su-select-trigger--open": $.value,
        "su-select-trigger--has-value": R.value.length > 0,
        "su-select-trigger--placeholder": R.value.length === 0
      }
    ]), Y = computed(() => e.message ? `${t.value}-message` : void 0), o = computed(() => {
      const i = {
        "aria-haspopup": "listbox",
        "aria-expanded": $.value,
        "aria-controls": $.value ? A.value : void 0,
        role: "combobox"
      };
      if (e.ariaLabel && (i["aria-label"] = e.ariaLabel), e.ariaDescribedBy || Y.value) {
        const C = [e.ariaDescribedBy, Y.value].filter(Boolean).join(" ");
        i["aria-describedby"] = C;
      }
      return e.ariaInvalid !== void 0 && (i["aria-invalid"] = e.ariaInvalid), e.ariaRequired !== void 0 && (i["aria-required"] = e.ariaRequired), e.required && (i["aria-required"] = "true"), e.state === "error" && (i["aria-invalid"] = "true"), e.multiple && (i["aria-multiselectable"] = "true"), i;
    }), Z = () => {
      e.disabled || e.readonly || ($.value ? Q() : J());
    }, J = async () => {
      e.disabled || e.readonly || ($.value = true, b.value = "", B.value = -1, v("open"), await nextTick(), e.searchable && w.value && w.value.focus(), m.value && (g.value = _e(m.value)));
    }, Q = () => {
      $.value = false, B.value = -1, g.value && (g.value(), g.value = null), v("close"), k.value && k.value.focus();
    }, c = (i) => {
      if (i.disabled) return;
      let C;
      if (e.multiple) {
        const E = z.value || [];
        if (E.includes(i.value))
          C = E.filter((H) => H !== i.value);
        else {
          if (e.maxSelectedItems && E.length >= e.maxSelectedItems) {
            V(`Maximum ${e.maxSelectedItems} éléments sélectionnables`);
            return;
          }
          C = [...E, i.value];
        }
      } else
        C = i.value;
      z.value = C;
      const X = e.multiple && z.value.includes(i.value) ? "désélectionné" : "sélectionné";
      V(`${i.label} ${X}`), !e.multiple && e.closeOnSelect && Q();
    }, N = (i) => {
      i.stopPropagation();
      const C = e.multiple ? [] : void 0;
      z.value = C, V("Sélection effacée");
    }, de = (i, C) => {
      if (C.stopPropagation(), e.multiple) {
        const E = (z.value || []).filter((ee) => ee !== i.value);
        z.value = E, V(`${i.label} retiré de la sélection`);
      }
    }, pe = (i) => {
      const C = i.target;
      b.value = C.value, B.value = -1, v("search", b.value);
    }, ce = (i) => {
      switch (i.key) {
        case "Enter":
        case " ":
          if (i.preventDefault(), !$.value)
            J();
          else if (B.value >= 0) {
            const C = S.value[B.value];
            C && c(C);
          }
          break;
        case "Escape":
          i.preventDefault(), Q();
          break;
        case "ArrowDown":
          i.preventDefault(), $.value ? B.value = Math.min(B.value + 1, S.value.length - 1) : J();
          break;
        case "ArrowUp":
          i.preventDefault(), $.value && (B.value = Math.max(B.value - 1, -1));
          break;
        case "Home":
          $.value && (i.preventDefault(), B.value = 0);
          break;
        case "End":
          $.value && (i.preventDefault(), B.value = S.value.length - 1);
          break;
        case "Tab":
          $.value && Q();
          break;
      }
    }, l = (i) => {
      v("focus", i);
    }, D = (i) => {
      setTimeout(() => {
        $.value && y.value && !y.value.contains(document.activeElement) && (Q(), v("blur", i));
      }, 0);
    }, L = (i) => {
      $.value && y.value && !y.value.contains(i.target) && Q();
    };
    return u({
      focus: () => {
        var i;
        (i = k.value) == null || i.focus();
      },
      open: () => {
        J();
      },
      close: () => {
        Q();
      },
      selectRef: y,
      inputRef: k
    }), onMounted(() => {
      document.addEventListener("click", L, { passive: true });
    }), onUnmounted(() => {
      document.removeEventListener("click", L, { passive: true }), g.value && g.value();
    }), watch(() => e.value, () => {
      B.value = -1;
    }), (i, C) => {
      var X;
      return openBlock(), createElementBlock("div", {
        class: "su-select-wrapper",
        dir: i.dir
      }, [
        i.label ? (openBlock(), createElementBlock("label", {
          key: 0,
          for: t.value,
          class: normalizeClass(["su-select-label", {
            "su-select-label--required": i.required,
            "su-select-label--disabled": i.disabled
          }])
        }, [
          createTextVNode(toDisplayString(i.label) + " ", 1),
          i.required ? (openBlock(), createElementBlock("span", ia, "*")) : createCommentVNode("", true)
        ], 10, la)) : createCommentVNode("", true),
        createBaseVNode("div", {
          ref_key: "selectRef",
          ref: y,
          class: normalizeClass(le.value)
        }, [
          createBaseVNode("div", mergeProps({
            ref_key: "inputRef",
            ref: k,
            id: t.value,
            class: oe.value,
            tabindex: i.disabled ? -1 : 0
          }, o.value, {
            onClick: Z,
            onKeydown: ce,
            onFocus: l,
            onBlur: D
          }), [
            createBaseVNode("div", oa, [
              i.multiple && R.value.length > 0 ? (openBlock(), createElementBlock("div", na, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(R.value.slice(0, 3), (E) => (openBlock(), createElementBlock("span", {
                  key: E.value,
                  class: "su-select-tag"
                }, [
                  E.icon ? (openBlock(), createBlock(resolveDynamicComponent(E.icon), {
                    key: 0,
                    class: "su-select-tag-icon",
                    "aria-hidden": "true"
                  })) : createCommentVNode("", true),
                  createBaseVNode("span", ua, toDisplayString(E.label), 1),
                  createBaseVNode("button", {
                    type: "button",
                    class: "su-select-tag-remove",
                    "aria-label": `Retirer ${E.label}`,
                    onClick: (ee) => de(E, ee)
                  }, [
                    createVNode(unref(he), { class: "su-select-tag-remove-icon" })
                  ], 8, da)
                ]))), 128)),
                R.value.length > 3 ? (openBlock(), createElementBlock("span", ca, " +" + toDisplayString(R.value.length - 3), 1)) : createCommentVNode("", true)
              ])) : (openBlock(), createElementBlock("div", pa, [
                (X = R.value[0]) != null && X.icon ? (openBlock(), createBlock(resolveDynamicComponent(R.value[0].icon), {
                  key: 0,
                  class: "su-select-display-icon",
                  "aria-hidden": "true"
                })) : createCommentVNode("", true),
                createBaseVNode("span", fa, toDisplayString(P.value), 1)
              ]))
            ]),
            createBaseVNode("div", va, [
              i.loading ? (openBlock(), createElementBlock("div", ha, [...C[0] || (C[0] = [
                createBaseVNode("svg", {
                  class: "su-spinner",
                  viewBox: "0 0 24 24",
                  "aria-hidden": "true"
                }, [
                  createBaseVNode("circle", {
                    cx: "12",
                    cy: "12",
                    r: "10",
                    fill: "none",
                    stroke: "currentColor",
                    "stroke-width": "2"
                  }),
                  createBaseVNode("path", {
                    d: "M12 2a10 10 0 0 1 10 10",
                    fill: "none",
                    stroke: "currentColor",
                    "stroke-width": "2",
                    "stroke-linecap": "round"
                  })
                ], -1)
              ])])) : i.clearable && R.value.length > 0 && !i.disabled && !i.readonly ? (openBlock(), createElementBlock("button", {
                key: 1,
                type: "button",
                class: "su-select-clear",
                "aria-label": "Effacer la sélection",
                onClick: N
              }, [
                createVNode(unref(he), { class: "su-select-clear-icon" })
              ])) : createCommentVNode("", true),
              createVNode(unref(He), {
                class: normalizeClass(["su-select-chevron", { "su-select-chevron--open": $.value }]),
                "aria-hidden": "true"
              }, null, 8, ["class"])
            ])
          ], 16, ra),
          createVNode(Transition, { name: "su-select-dropdown" }, {
            default: withCtx(() => [
              $.value ? (openBlock(), createElementBlock("div", {
                key: 0,
                ref_key: "dropdownRef",
                ref: m,
                id: A.value,
                class: "su-select-dropdown",
                style: normalizeStyle({ maxHeight: i.maxHeight }),
                role: "listbox",
                "aria-multiselectable": i.multiple
              }, [
                i.searchable ? (openBlock(), createElementBlock("div", ya, [
                  createBaseVNode("div", ma, [
                    createVNode(unref(Ke), {
                      class: "su-select-search-icon",
                      "aria-hidden": "true"
                    }),
                    createBaseVNode("input", {
                      ref_key: "searchInputRef",
                      ref: w,
                      type: "text",
                      class: "su-select-search-input",
                      placeholder: i.searchPlaceholder,
                      value: b.value,
                      onInput: pe,
                      onKeydown: ce
                    }, null, 40, ga)
                  ])
                ])) : createCommentVNode("", true),
                createBaseVNode("div", ka, [
                  S.value.length > 0 ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList(I.value, (E, ee) => (openBlock(), createElementBlock(Fragment, { key: ee }, [
                    ee && e.groups && e.groups.length > 0 ? (openBlock(), createElementBlock("div", {
                      key: 0,
                      class: "su-select-group-header",
                      role: "group",
                      "aria-label": ee
                    }, toDisplayString(ee), 9, wa)) : createCommentVNode("", true),
                    (openBlock(true), createElementBlock(Fragment, null, renderList(E, (H) => (openBlock(), createElementBlock("div", {
                      key: H.value,
                      class: normalizeClass(["su-select-option", {
                        "su-select-option--selected": i.multiple ? z.value.includes(H.value) : z.value === H.value,
                        "su-select-option--disabled": H.disabled,
                        "su-select-option--focused": S.value.indexOf(H) === B.value
                      }]),
                      role: "option",
                      "aria-selected": i.multiple ? z.value.includes(H.value) : z.value === H.value,
                      "aria-disabled": H.disabled,
                      onClick: (Le) => c(H),
                      onMouseenter: (Le) => B.value = S.value.indexOf(H)
                    }, [
                      i.multiple ? (openBlock(), createElementBlock("div", Ba, [
                        createBaseVNode("div", {
                          class: normalizeClass(["su-select-checkbox", {
                            "su-select-checkbox--checked": z.value.includes(H.value)
                          }])
                        }, [
                          z.value.includes(H.value) ? (openBlock(), createBlock(unref(ve), {
                            key: 0,
                            class: "su-select-checkbox-icon",
                            "aria-hidden": "true"
                          })) : createCommentVNode("", true)
                        ], 2)
                      ])) : createCommentVNode("", true),
                      H.icon ? (openBlock(), createBlock(resolveDynamicComponent(H.icon), {
                        key: 1,
                        class: "su-select-option-icon",
                        "aria-hidden": "true"
                      })) : createCommentVNode("", true),
                      createBaseVNode("div", xa, [
                        createBaseVNode("div", _a, toDisplayString(H.label), 1),
                        H.description ? (openBlock(), createElementBlock("div", La, toDisplayString(H.description), 1)) : createCommentVNode("", true)
                      ]),
                      !i.multiple && z.value === H.value ? (openBlock(), createBlock(unref(ve), {
                        key: 2,
                        class: "su-select-option-check",
                        "aria-hidden": "true"
                      })) : createCommentVNode("", true)
                    ], 42, $a))), 128))
                  ], 64))), 128)) : (openBlock(), createElementBlock("div", Ca, toDisplayString(b.value ? i.noResultsText : i.noOptionsText), 1))
                ])
              ], 12, ba)) : createCommentVNode("", true)
            ]),
            _: 1
          })
        ], 2),
        i.message ? (openBlock(), createElementBlock("div", {
          key: 1,
          id: Y.value,
          class: normalizeClass(["su-select-message", `su-select-message--${i.state}`]),
          "aria-live": i.state === "error" ? "assertive" : "polite"
        }, toDisplayString(i.message), 11, qa)) : createCommentVNode("", true)
      ], 8, ta);
    };
  }
});
var za = { class: "su-radio-group-wrapper" };
var Ia = {
  key: 0,
  class: "su-indicator-required",
  "aria-label": "requis"
};
var Ra = {
  key: 0,
  class: "su-radio-group-before"
};
var Fa = ["for"];
var Aa = ["id", "name", "value", "checked", "disabled", "required", "onChange"];
var Sa = { class: "su-radio-content" };
var Ma = { class: "su-radio-text" };
var Ha = { class: "su-radio-label" };
var Ta = {
  key: 0,
  class: "su-radio-description"
};
var Ea = {
  key: 1,
  class: "su-radio-group-after"
};
var ja = ["id", "aria-live"];
var Ka = defineComponent({
  __name: "RadioGroup",
  props: {
    options: { default: () => [] },
    value: {},
    name: {},
    size: { default: "md" },
    state: { default: "default" },
    disabled: { type: Boolean, default: false },
    required: { type: Boolean, default: false },
    displayType: { default: "default" },
    label: {},
    message: {},
    direction: { default: "vertical" },
    maxHeight: { default: null },
    ariaLabel: {},
    ariaLabelledBy: {},
    ariaDescribedBy: {},
    ariaHidden: { type: Boolean },
    role: {},
    tabIndex: {}
  },
  emits: ["update:value", "change", "focus", "blur"],
  setup(h2, { emit: u }) {
    const a = h2, e = u, v = useAttrs(), _ = computed(() => v.id || ae("radio-group")), y = computed(() => a.message ? `${_.value}-message` : void 0), k = computed(() => a.name || _.value), m = computed(() => [
      "su-radio-group",
      `su-radio-group--${a.size}`,
      `su-radio-group--${a.state}`,
      `su-radio-group--${a.displayType}`,
      `su-radio-group--${a.direction}`,
      {
        "su-radio-group--disabled": a.disabled,
        "su-radio-group--scrollable": a.maxHeight
      }
    ]), w = (t) => [
      "su-radio-option",
      `su-radio-option--${a.size}`,
      `su-radio-option--${a.state}`,
      `su-radio-option--${a.displayType}`,
      {
        "su-radio-option--selected": a.value === t.value,
        "su-radio-option--disabled": t.disabled || a.disabled
      }
    ], $ = computed(() => {
      const t = {
        role: "radiogroup"
      };
      if (a.ariaLabel && (t["aria-label"] = a.ariaLabel), a.ariaDescribedBy || y.value) {
        const A = [a.ariaDescribedBy, y.value].filter(Boolean).join(" ");
        t["aria-describedby"] = A;
      }
      return a.required && (t["aria-required"] = "true"), a.state === "error" && (t["aria-invalid"] = "true"), t;
    }), b = (t) => {
      a.disabled || (e("update:value", t), e("change", t));
    }, B = (t) => {
      e("focus", t);
    }, g = (t) => {
      e("blur", t);
    };
    return (t, A) => (openBlock(), createElementBlock("div", za, [
      createBaseVNode("fieldset", mergeProps({ class: m.value }, $.value), [
        t.label ? (openBlock(), createElementBlock("legend", {
          key: 0,
          class: normalizeClass(["su-radio-group-label", {
            "su-radio-group-label--required": t.required,
            "su-radio-group-label--disabled": t.disabled
          }])
        }, [
          createTextVNode(toDisplayString(t.label) + " ", 1),
          t.required ? (openBlock(), createElementBlock("span", Ia, "*")) : createCommentVNode("", true)
        ], 2)) : createCommentVNode("", true),
        createBaseVNode("div", {
          class: "su-radio-group-options",
          style: normalizeStyle({ maxHeight: t.maxHeight || void 0, overflowY: t.maxHeight ? "auto" : void 0 })
        }, [
          t.$slots.before ? (openBlock(), createElementBlock("div", Ra, [
            renderSlot(t.$slots, "before")
          ])) : createCommentVNode("", true),
          (openBlock(true), createElementBlock(Fragment, null, renderList(t.options, (d) => (openBlock(), createElementBlock("label", {
            key: d.value,
            class: normalizeClass(w(d)),
            for: `${_.value}-${d.value}`
          }, [
            createBaseVNode("input", {
              id: `${_.value}-${d.value}`,
              type: "radio",
              name: k.value,
              value: d.value,
              checked: t.value === d.value,
              disabled: d.disabled || t.disabled,
              required: t.required,
              class: "su-radio-input",
              onChange: (S) => b(d.value),
              onFocus: B,
              onBlur: g
            }, null, 40, Aa),
            A[0] || (A[0] = createBaseVNode("div", { class: "su-radio-indicator" }, [
              createBaseVNode("div", { class: "su-radio-dot" })
            ], -1)),
            createBaseVNode("div", Sa, [
              d.icon ? (openBlock(), createBlock(resolveDynamicComponent(d.icon), {
                key: 0,
                class: "su-radio-icon",
                "aria-hidden": "true"
              })) : createCommentVNode("", true),
              createBaseVNode("div", Ma, [
                createBaseVNode("div", Ha, toDisplayString(d.label), 1),
                d.description ? (openBlock(), createElementBlock("div", Ta, toDisplayString(d.description), 1)) : createCommentVNode("", true)
              ])
            ])
          ], 10, Fa))), 128))
        ], 4),
        t.$slots.after ? (openBlock(), createElementBlock("div", Ea, [
          renderSlot(t.$slots, "after")
        ])) : createCommentVNode("", true)
      ], 16),
      t.message ? (openBlock(), createElementBlock("div", {
        key: 0,
        id: y.value,
        class: normalizeClass(["su-radio-group-message", `su-radio-group-message--${t.state}`]),
        "aria-live": t.state === "error" ? "assertive" : "polite"
      }, toDisplayString(t.message), 11, ja)) : createCommentVNode("", true)
    ]));
  }
});
var Pa = { class: "su-checkbox-group-wrapper" };
var Oa = {
  key: 0,
  class: "su-indicator-required",
  "aria-label": "requis"
};
var Va = {
  key: 0,
  class: "su-checkbox-group-before"
};
var Ga = ["for"];
var Za = ["id", "value", "checked", "disabled", "required", "onChange"];
var Na = { class: "su-checkbox-content" };
var Wa = { class: "su-checkbox-text" };
var Ua = { class: "su-checkbox-label" };
var Ya = {
  key: 1,
  class: "su-checkbox-group-after"
};
var Qa = ["id", "aria-live"];
var Ja = defineComponent({
  __name: "CheckboxGroup",
  props: {
    options: { default: () => [] },
    value: { default: () => [] },
    size: { default: "md" },
    state: { default: "default" },
    disabled: { type: Boolean, default: false },
    required: { type: Boolean, default: false },
    displayType: { default: "default" },
    label: {},
    message: {},
    direction: { default: "vertical" },
    maxSelections: {},
    maxHeight: {},
    ariaLabel: {},
    ariaLabelledBy: {},
    ariaDescribedBy: {},
    ariaHidden: { type: Boolean },
    role: {},
    tabIndex: {}
  },
  emits: ["update:value", "change", "focus", "blur"],
  setup(h2, { emit: u }) {
    const a = h2, e = u, v = useAttrs(), _ = computed(() => v.id || ae("checkbox-group")), y = computed(() => a.message ? `${_.value}-message` : void 0), k = computed({
      get() {
        return Array.isArray(a.value) ? a.value : [];
      },
      set(d) {
        e("update:value", d), e("change", d);
      }
    }), m = computed(() => [
      "su-checkbox-group",
      `su-checkbox-group--${a.size}`,
      `su-checkbox-group--${a.state}`,
      `su-checkbox-group--${a.displayType}`,
      `su-checkbox-group--${a.direction}`,
      {
        "su-checkbox-group--disabled": a.disabled,
        "su-checkbox-group--scrollable": a.maxHeight
      }
    ]), w = (d) => [
      "su-checkbox-option",
      `su-checkbox-option--${a.size}`,
      `su-checkbox-option--${a.state}`,
      `su-checkbox-option--${a.displayType}`,
      {
        "su-checkbox-option--selected": k.value.includes(d.value),
        "su-checkbox-option--disabled": d.disabled || a.disabled
      }
    ], $ = computed(() => {
      const d = {
        role: "group"
      };
      if (a.ariaLabel && (d["aria-label"] = a.ariaLabel), a.ariaDescribedBy || y.value) {
        const S = [a.ariaDescribedBy, y.value].filter(Boolean).join(" ");
        d["aria-describedby"] = S;
      }
      return a.required && (d["aria-required"] = "true"), a.state === "error" && (d["aria-invalid"] = "true"), d;
    }), b = (d, S) => {
      if (a.disabled) return;
      let I;
      if (S) {
        if (a.maxSelections && k.value.length >= a.maxSelections) {
          V(`Maximum ${a.maxSelections} sélections autorisées`);
          return;
        }
        I = [...k.value, d];
      } else
        I = k.value.filter((P) => P !== d);
      k.value = I;
      const z = a.options.find((P) => P.value === d), R = S ? "sélectionné" : "désélectionné";
      V(`${z == null ? void 0 : z.label} ${R}`);
    }, B = (d) => {
      e("focus", d);
    }, g = (d) => {
      e("blur", d);
    }, t = (d) => k.value.includes(d), A = (d) => d.disabled || a.disabled;
    return (d, S) => (openBlock(), createElementBlock("div", Pa, [
      createBaseVNode("fieldset", mergeProps({ class: m.value }, $.value), [
        d.label ? (openBlock(), createElementBlock("legend", {
          key: 0,
          class: normalizeClass(["su-checkbox-group-label", {
            "su-checkbox-group-label--required": d.required,
            "su-checkbox-group-label--disabled": d.disabled
          }])
        }, [
          createTextVNode(toDisplayString(d.label) + " ", 1),
          d.required ? (openBlock(), createElementBlock("span", Oa, "*")) : createCommentVNode("", true)
        ], 2)) : createCommentVNode("", true),
        createBaseVNode("div", {
          class: "su-checkbox-group-options",
          style: normalizeStyle({ maxHeight: d.maxHeight || void 0, overflowY: d.maxHeight ? "auto" : void 0 })
        }, [
          d.$slots.before ? (openBlock(), createElementBlock("div", Va, [
            renderSlot(d.$slots, "before")
          ])) : createCommentVNode("", true),
          (openBlock(true), createElementBlock(Fragment, null, renderList(d.options, (I) => (openBlock(), createElementBlock("label", {
            key: I.value,
            class: normalizeClass(w(I)),
            for: `${_.value}-${I.value}`
          }, [
            createBaseVNode("input", {
              id: `${_.value}-${I.value}`,
              type: "checkbox",
              value: I.value,
              checked: t(I.value),
              disabled: A(I),
              required: d.required && k.value.length === 0,
              class: "su-checkbox-input",
              onChange: (z) => b(I.value, z.target.checked),
              onFocus: B,
              onBlur: g
            }, null, 40, Za),
            createBaseVNode("div", {
              class: normalizeClass(["su-checkbox-indicator", {
                "su-checkbox-indicator--checked": t(I.value),
                "su-checkbox-indicator--indeterminate": false
              }])
            }, [
              t(I.value) ? (openBlock(), createBlock(unref(ve), {
                key: 0,
                class: "su-checkbox-check",
                "aria-hidden": "true"
              })) : createCommentVNode("", true)
            ], 2),
            createBaseVNode("div", Na, [
              I.icon ? (openBlock(), createBlock(resolveDynamicComponent(I.icon), {
                key: 0,
                class: "su-checkbox-icon",
                "aria-hidden": "true"
              })) : createCommentVNode("", true),
              createBaseVNode("div", Wa, [
                createBaseVNode("div", Ua, toDisplayString(I.label), 1)
              ])
            ])
          ], 10, Ga))), 128))
        ], 4),
        d.$slots.after ? (openBlock(), createElementBlock("div", Ya, [
          renderSlot(d.$slots, "after")
        ])) : createCommentVNode("", true)
      ], 16),
      d.message ? (openBlock(), createElementBlock("div", {
        key: 0,
        id: y.value,
        class: normalizeClass(["su-checkbox-group-message", `su-checkbox-group-message--${d.state}`]),
        "aria-live": d.state === "error" ? "assertive" : "polite"
      }, toDisplayString(d.message), 11, Qa)) : createCommentVNode("", true)
    ]));
  }
});
var Xa = { class: "su-switch-wrapper" };
var es = ["for"];
var as = {
  key: 0,
  class: "su-indicator-required",
  "aria-label": "requis"
};
var ss = ["id", "tabindex"];
var ts = { class: "su-switch-track" };
var ls = { class: "su-switch-thumb" };
var is = { class: "su-switch-indicator" };
var rs = {
  key: 0,
  class: "su-switch-icon su-switch-icon--check",
  viewBox: "0 0 16 16",
  "aria-hidden": "true"
};
var os = {
  key: 1,
  class: "su-switch-icon su-switch-icon--cross",
  viewBox: "0 0 16 16",
  "aria-hidden": "true"
};
var ns = ["id", "aria-live"];
var us = defineComponent({
  __name: "Switch",
  props: {
    value: { type: Boolean, default: false },
    size: { default: "md" },
    state: { default: "default" },
    disabled: { type: Boolean, default: false },
    readonly: { type: Boolean, default: false },
    required: { type: Boolean, default: false },
    label: {},
    leftLabel: {},
    rightLabel: {},
    message: {},
    ariaInvalid: { type: Boolean },
    ariaRequired: { type: Boolean },
    ariaLabel: {},
    ariaLabelledBy: {},
    ariaDescribedBy: {},
    ariaHidden: { type: Boolean },
    role: {},
    tabIndex: {}
  },
  emits: ["update:value", "change", "focus", "blur", "keydown"],
  setup(h2, { emit: u }) {
    const a = h2, e = u, v = useAttrs(), _ = computed(() => v.id || ae("switch")), y = computed(() => a.message ? `${_.value}-message` : void 0), k = computed(() => [
      "su-switch-container",
      `su-switch-container--${a.size}`,
      `su-switch-container--${a.state}`,
      {
        "su-switch-container--disabled": a.disabled,
        "su-switch-container--readonly": a.readonly,
        "su-switch-container--has-labels": a.leftLabel || a.rightLabel,
        "su-switch-container--centered": a.leftLabel && a.rightLabel
      }
    ]), m = computed(() => [
      "su-switch",
      `su-switch--${a.size}`,
      `su-switch--${a.state}`,
      {
        "su-switch--checked": a.value,
        "su-switch--disabled": a.disabled,
        "su-switch--readonly": a.readonly
      }
    ]), w = computed(() => {
      const t = {
        role: "switch",
        "aria-checked": a.value
      };
      if (a.ariaLabel && (t["aria-label"] = a.ariaLabel), a.ariaDescribedBy || y.value) {
        const A = [a.ariaDescribedBy, y.value].filter(Boolean).join(" ");
        t["aria-describedby"] = A;
      }
      return a.ariaInvalid !== void 0 && (t["aria-invalid"] = a.ariaInvalid), a.ariaRequired !== void 0 && (t["aria-required"] = a.ariaRequired), a.required && (t["aria-required"] = "true"), a.state === "error" && (t["aria-invalid"] = "true"), t;
    }), $ = () => {
      if (a.disabled || a.readonly) return;
      const t = !a.value;
      e("update:value", t), e("change", t);
    }, b = (t) => {
      (t.key === " " || t.key === "Enter") && (t.preventDefault(), $()), e("keydown", t);
    }, B = (t) => {
      e("focus", t);
    }, g = (t) => {
      e("blur", t);
    };
    return (t, A) => (openBlock(), createElementBlock("div", Xa, [
      t.label ? (openBlock(), createElementBlock("label", {
        key: 0,
        for: _.value,
        class: normalizeClass(["su-switch-main-label", {
          "su-switch-main-label--required": t.required,
          "su-switch-main-label--disabled": t.disabled
        }])
      }, [
        createTextVNode(toDisplayString(t.label) + " ", 1),
        t.required ? (openBlock(), createElementBlock("span", as, "*")) : createCommentVNode("", true)
      ], 10, es)) : createCommentVNode("", true),
      createBaseVNode("div", {
        class: normalizeClass(k.value)
      }, [
        t.leftLabel ? (openBlock(), createElementBlock("span", {
          key: 0,
          class: normalizeClass(["su-switch-side-label su-switch-side-label--left", {
            "su-switch-side-label--active": !t.value,
            "su-switch-side-label--disabled": t.disabled
          }])
        }, toDisplayString(t.leftLabel), 3)) : createCommentVNode("", true),
        createBaseVNode("div", mergeProps({
          id: _.value,
          class: m.value,
          tabindex: t.disabled ? -1 : 0
        }, w.value, {
          onClick: $,
          onKeydown: b,
          onFocus: B,
          onBlur: g
        }), [
          createBaseVNode("div", ts, [
            createBaseVNode("div", ls, [
              createBaseVNode("div", is, [
                t.value ? (openBlock(), createElementBlock("svg", rs, [...A[0] || (A[0] = [
                  createBaseVNode("path", { d: "M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" }, null, -1)
                ])])) : (openBlock(), createElementBlock("svg", os, [...A[1] || (A[1] = [
                  createBaseVNode("path", { d: "M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" }, null, -1)
                ])]))
              ])
            ])
          ])
        ], 16, ss),
        t.rightLabel ? (openBlock(), createElementBlock("span", {
          key: 1,
          class: normalizeClass(["su-switch-side-label su-switch-side-label--right", {
            "su-switch-side-label--active": t.value,
            "su-switch-side-label--disabled": t.disabled
          }])
        }, toDisplayString(t.rightLabel), 3)) : createCommentVNode("", true)
      ], 2),
      t.message ? (openBlock(), createElementBlock("div", {
        key: 1,
        id: y.value,
        class: normalizeClass(["su-switch-message", `su-switch-message--${t.state}`]),
        "aria-live": t.state === "error" ? "assertive" : "polite"
      }, toDisplayString(t.message), 11, ns)) : createCommentVNode("", true)
    ]));
  }
});
var ds = { class: "su-file-upload-wrapper" };
var cs = ["for"];
var ps = {
  key: 0,
  class: "su-indicator-required",
  "aria-label": "requis"
};
var fs = ["id", "accept", "multiple", "disabled", "required"];
var vs = ["tabindex", "aria-label"];
var hs = { class: "su-file-upload-text" };
var bs = { class: "su-file-upload-primary-text" };
var ys = { class: "su-file-upload-secondary-text" };
var ms = ["disabled"];
var gs = { key: 0 };
var ks = { key: 0 };
var ws = { key: 1 };
var $s = ["aria-label"];
var Bs = { class: "su-file-upload-item-preview" };
var xs = ["src", "alt"];
var _s = { class: "su-file-upload-item-info" };
var Ls = { class: "su-file-upload-item-name" };
var Cs = { class: "su-file-upload-item-details" };
var qs = { class: "su-file-upload-item-size" };
var Ds = {
  key: 0,
  class: "su-file-upload-item-progress"
};
var zs = {
  key: 1,
  class: "su-file-upload-item-error"
};
var Is = { class: "su-file-upload-item-status" };
var Rs = {
  key: 2,
  class: "su-file-upload-spinner",
  "aria-hidden": "true"
};
var Fs = ["aria-label", "onClick"];
var As = ["id", "aria-live"];
var Ss = defineComponent({
  __name: "FileUpload",
  props: {
    value: { default: () => [] },
    multiple: { type: Boolean, default: false },
    accept: {},
    maxSize: { default: 10 * 1024 * 1024 },
    maxFiles: { default: 5 },
    size: { default: "md" },
    state: { default: "default" },
    disabled: { type: Boolean, default: false },
    readonly: { type: Boolean, default: false },
    required: { type: Boolean, default: false },
    label: {},
    message: {},
    placeholder: { default: "Sélectionnez des fichiers ou glissez-les ici" },
    dragText: { default: "Relâchez pour déposer les fichiers" },
    browseText: { default: "Parcourir" },
    allowPreview: { type: Boolean, default: true },
    showFileList: { type: Boolean, default: true },
    ariaInvalid: { type: Boolean },
    ariaRequired: { type: Boolean },
    ariaLabel: {},
    ariaLabelledBy: {},
    ariaDescribedBy: {},
    ariaHidden: { type: Boolean },
    role: {},
    tabIndex: {}
  },
  emits: ["update:value", "change", "upload", "remove", "error", "focus", "blur"],
  setup(h2, { expose: u, emit: a }) {
    const e = h2, v = a, _ = useAttrs(), y = ref(), k = ref(), m = ref(false), w = ref(0), $ = computed(() => _.id || ae("file-upload")), b = computed(() => e.message ? `${$.value}-message` : void 0), B = computed(() => Array.isArray(e.value) ? e.value : []), g = computed(() => [
      "su-file-upload-container",
      `su-file-upload-container--${e.size}`,
      `su-file-upload-container--${e.state}`,
      {
        "su-file-upload-container--disabled": e.disabled,
        "su-file-upload-container--readonly": e.readonly,
        "su-file-upload-container--dragging": m.value,
        "su-file-upload-container--has-files": B.value.length > 0
      }
    ]), t = computed(() => [
      "su-file-upload-dropzone",
      `su-file-upload-dropzone--${e.size}`,
      `su-file-upload-dropzone--${e.state}`,
      {
        "su-file-upload-dropzone--disabled": e.disabled,
        "su-file-upload-dropzone--readonly": e.readonly,
        "su-file-upload-dropzone--dragging": m.value
      }
    ]), A = computed(() => {
      const l = {};
      if (e.ariaLabel && (l["aria-label"] = e.ariaLabel), e.ariaDescribedBy || b.value) {
        const D = [e.ariaDescribedBy, b.value].filter(Boolean).join(" ");
        l["aria-describedby"] = D;
      }
      return e.ariaInvalid !== void 0 && (l["aria-invalid"] = e.ariaInvalid), e.ariaRequired !== void 0 && (l["aria-required"] = e.ariaRequired), e.required && (l["aria-required"] = "true"), e.state === "error" && (l["aria-invalid"] = "true"), l;
    }), d = (l) => {
      if (l === 0) return "0 B";
      const D = 1024, L = ["B", "KB", "MB", "GB"], F = Math.floor(Math.log(l) / Math.log(D));
      return parseFloat((l / Math.pow(D, F)).toFixed(1)) + " " + L[F];
    }, S = (l) => l.type.startsWith("image/") ? Pe : Ee, I = (l) => l.type.startsWith("image/"), z = (l) => new Promise((D) => {
      if (!I(l)) {
        D("");
        return;
      }
      const L = new FileReader();
      L.onload = (F) => {
        var M;
        return D(((M = F.target) == null ? void 0 : M.result) || "");
      }, L.readAsDataURL(l);
    }), R = (l) => e.maxSize && l.size > e.maxSize ? `Le fichier "${l.name}" est trop volumineux (${d(l.size)}). Taille maximale : ${d(e.maxSize)}` : e.accept && !e.accept.split(",").map((F) => F.trim()).some((F) => {
      if (F.startsWith("."))
        return l.name.toLowerCase().endsWith(F.toLowerCase());
      if (F.includes("*")) {
        const M = F.split("/")[0];
        return l.type.startsWith(M);
      }
      return l.type === F;
    }) ? `Le type de fichier "${l.type}" n'est pas accepté pour "${l.name}"` : null, P = async (l) => {
      if (e.disabled || e.readonly) return;
      const D = Array.from(l), L = B.value;
      if (e.maxFiles && L.length + D.length > e.maxFiles) {
        const M = `Nombre maximum de fichiers dépassé (${e.maxFiles})`;
        v("error", M), V(M, "assertive");
        return;
      }
      const F = [];
      for (const M of D) {
        const ne = R(M);
        if (ne) {
          v("error", ne, M), V(ne, "assertive");
          continue;
        }
        const i = {
          id: ae("file"),
          file: M,
          name: M.name,
          size: M.size,
          type: M.type,
          status: "pending"
        };
        if (e.allowPreview && I(M))
          try {
            i.preview = await z(M);
          } catch (C) {
            console.warn("Erreur lors de la création de l'aperçu:", C);
          }
        F.push(i);
      }
      if (F.length > 0) {
        const M = e.multiple ? [...L, ...F] : F;
        v("update:value", M), v("change", M);
        const ne = F.length === 1 ? `Fichier "${F[0].name}" ajouté` : `${F.length} fichiers ajoutés`;
        V(ne), F.forEach((i) => v("upload", i));
      }
    }, le = (l) => {
      if (e.disabled || e.readonly) return;
      const D = B.value.filter((L) => L.id !== l.id);
      v("update:value", D), v("change", D), v("remove", l), V(`Fichier "${l.name}" supprimé`);
    }, oe = (l) => {
      const D = l.target;
      D.files && D.files.length > 0 && P(D.files), D.value = "";
    }, Y = () => {
      var l;
      e.disabled || e.readonly || (l = y.value) == null || l.click();
    }, o = (l) => {
      (l.key === "Enter" || l.key === " ") && (l.preventDefault(), Y());
    }, Z = (l) => {
      v("focus", l);
    }, J = (l) => {
      v("blur", l);
    }, Q = (l) => {
      l.preventDefault(), l.stopPropagation(), !(e.disabled || e.readonly) && (w.value++, w.value === 1 && (m.value = true));
    }, c = (l) => {
      l.preventDefault(), l.stopPropagation(), !(e.disabled || e.readonly) && (w.value--, w.value === 0 && (m.value = false));
    }, N = (l) => {
      l.preventDefault(), l.stopPropagation(), !(e.disabled || e.readonly) && l.dataTransfer && (l.dataTransfer.dropEffect = "copy");
    }, de = (l) => {
      var L;
      if (l.preventDefault(), l.stopPropagation(), e.disabled || e.readonly) return;
      m.value = false, w.value = 0;
      const D = (L = l.dataTransfer) == null ? void 0 : L.files;
      D && D.length > 0 && P(D);
    };
    return u({
      focus: () => {
        var l;
        (l = k.value) == null || l.focus();
      },
      clear: () => {
        e.disabled || e.readonly || (v("update:value", []), v("change", []), V("Tous les fichiers ont été supprimés"));
      },
      fileInputRef: y,
      dropZoneRef: k
    }), (l, D) => (openBlock(), createElementBlock("div", ds, [
      l.label ? (openBlock(), createElementBlock("label", {
        key: 0,
        for: $.value,
        class: normalizeClass(["su-file-upload-label", {
          "su-file-upload-label--required": l.required,
          "su-file-upload-label--disabled": l.disabled
        }])
      }, [
        createTextVNode(toDisplayString(l.label) + " ", 1),
        l.required ? (openBlock(), createElementBlock("span", ps, "*")) : createCommentVNode("", true)
      ], 10, cs)) : createCommentVNode("", true),
      createBaseVNode("div", {
        class: normalizeClass(g.value)
      }, [
        createBaseVNode("input", mergeProps({
          ref_key: "fileInputRef",
          ref: y,
          id: $.value,
          type: "file",
          accept: l.accept,
          multiple: l.multiple,
          disabled: l.disabled,
          required: l.required,
          class: "su-file-upload-input"
        }, A.value, {
          onChange: oe,
          onFocus: Z,
          onBlur: J
        }), null, 16, fs),
        createBaseVNode("div", {
          ref_key: "dropZoneRef",
          ref: k,
          class: normalizeClass(t.value),
          tabindex: l.disabled ? -1 : 0,
          role: "button",
          "aria-label": l.placeholder,
          onClick: Y,
          onKeydown: o,
          onDragenter: Q,
          onDragleave: c,
          onDragover: N,
          onDrop: de
        }, [
          createVNode(unref(Te), {
            class: normalizeClass(["su-file-upload-icon", { "su-file-upload-icon--dragging": m.value }]),
            "aria-hidden": "true"
          }, null, 8, ["class"]),
          createBaseVNode("div", hs, [
            createBaseVNode("p", bs, toDisplayString(m.value ? l.dragText : l.placeholder), 1),
            createBaseVNode("p", ys, [
              createBaseVNode("button", {
                type: "button",
                class: "su-file-upload-browse-button",
                disabled: l.disabled || l.readonly,
                onClick: withModifiers(Y, ["stop"])
              }, toDisplayString(l.browseText), 9, ms),
              l.accept || l.maxSize ? (openBlock(), createElementBlock("span", gs, [
                l.accept ? (openBlock(), createElementBlock("span", ks, " • " + toDisplayString(l.accept), 1)) : createCommentVNode("", true),
                l.maxSize ? (openBlock(), createElementBlock("span", ws, " • Max " + toDisplayString(d(l.maxSize)), 1)) : createCommentVNode("", true)
              ])) : createCommentVNode("", true)
            ])
          ])
        ], 42, vs),
        l.showFileList && B.value.length > 0 ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: "su-file-upload-list",
          role: "list",
          "aria-label": `${B.value.length} fichier(s) sélectionné(s)`
        }, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(B.value, (L) => (openBlock(), createElementBlock("div", {
            key: L.id,
            class: normalizeClass(["su-file-upload-item", `su-file-upload-item--${L.status}`]),
            role: "listitem"
          }, [
            createBaseVNode("div", Bs, [
              L.preview ? (openBlock(), createElementBlock("img", {
                key: 0,
                src: L.preview,
                alt: `Aperçu de ${L.name}`,
                class: "su-file-upload-preview-image"
              }, null, 8, xs)) : (openBlock(), createBlock(resolveDynamicComponent(S(L.file)), {
                key: 1,
                class: "su-file-upload-item-icon",
                "aria-hidden": "true"
              }))
            ]),
            createBaseVNode("div", _s, [
              createBaseVNode("div", Ls, toDisplayString(L.name), 1),
              createBaseVNode("div", Cs, [
                createBaseVNode("span", qs, toDisplayString(d(L.size)), 1),
                L.status === "uploading" && L.progress !== void 0 ? (openBlock(), createElementBlock("span", Ds, toDisplayString(L.progress) + "% ", 1)) : createCommentVNode("", true),
                L.error ? (openBlock(), createElementBlock("span", zs, toDisplayString(L.error), 1)) : createCommentVNode("", true)
              ])
            ]),
            createBaseVNode("div", Is, [
              L.status === "success" ? (openBlock(), createBlock(unref(Me), {
                key: 0,
                class: "su-file-upload-status-icon su-file-upload-status-icon--success",
                "aria-hidden": "true"
              })) : L.status === "error" ? (openBlock(), createBlock(unref(je), {
                key: 1,
                class: "su-file-upload-status-icon su-file-upload-status-icon--error",
                "aria-hidden": "true"
              })) : L.status === "uploading" ? (openBlock(), createElementBlock("div", Rs, [...D[0] || (D[0] = [
                createBaseVNode("svg", {
                  class: "su-spinner",
                  viewBox: "0 0 24 24"
                }, [
                  createBaseVNode("circle", {
                    cx: "12",
                    cy: "12",
                    r: "10",
                    fill: "none",
                    stroke: "currentColor",
                    "stroke-width": "2"
                  }),
                  createBaseVNode("path", {
                    d: "M12 2a10 10 0 0 1 10 10",
                    fill: "none",
                    stroke: "currentColor",
                    "stroke-width": "2",
                    "stroke-linecap": "round"
                  })
                ], -1)
              ])])) : createCommentVNode("", true)
            ]),
            !l.disabled && !l.readonly ? (openBlock(), createElementBlock("button", {
              key: 0,
              type: "button",
              class: "su-file-upload-remove-button",
              "aria-label": `Supprimer ${L.name}`,
              onClick: (F) => le(L)
            }, [
              createVNode(unref(he), {
                class: "su-file-upload-remove-icon",
                "aria-hidden": "true"
              })
            ], 8, Fs)) : createCommentVNode("", true)
          ], 2))), 128))
        ], 8, $s)) : createCommentVNode("", true)
      ], 2),
      l.message ? (openBlock(), createElementBlock("div", {
        key: 1,
        id: b.value,
        class: normalizeClass(["su-file-upload-message", `su-file-upload-message--${l.state}`]),
        "aria-live": l.state === "error" ? "assertive" : "polite"
      }, toDisplayString(l.message), 11, As)) : createCommentVNode("", true)
    ]));
  }
});
var Ms = { class: "su-textarea-wrapper" };
var Hs = ["for"];
var Ts = {
  key: 0,
  class: "su-indicator-required",
  "aria-label": "requis"
};
var Es = ["id", "value", "placeholder", "disabled", "readonly", "required", "rows"];
var js = {
  key: 1,
  class: "su-textarea-footer"
};
var Ks = ["id", "aria-live"];
var Ps = ["id", "aria-live"];
var Os = { class: "sr-only" };
var Vs = defineComponent({
  __name: "Textarea",
  props: {
    size: { default: "md" },
    state: { default: "default" },
    disabled: { type: Boolean, default: false },
    readonly: { type: Boolean, default: false },
    required: { type: Boolean, default: false },
    placeholder: {},
    value: {},
    rows: { default: 3 },
    minRows: { default: 2 },
    maxRows: { default: 10 },
    maxLength: {},
    showCounter: { type: Boolean, default: false },
    autoResize: { type: Boolean, default: false },
    label: {},
    message: {},
    ariaInvalid: { type: Boolean },
    ariaRequired: { type: Boolean },
    autocomplete: {},
    spellcheck: { type: Boolean, default: true },
    wrap: { default: "soft" },
    ariaLabel: {},
    ariaLabelledBy: {},
    ariaDescribedBy: {},
    ariaHidden: { type: Boolean },
    role: {},
    tabIndex: {}
  },
  emits: ["update:value", "input", "change", "focus", "blur", "keydown", "keyup"],
  setup(h2, { expose: u, emit: a }) {
    const e = h2, v = a, _ = useAttrs(), y = ref(), k = computed(() => _.id || ae("textarea")), m = computed(() => e.message ? `${k.value}-message` : void 0), w = computed(() => e.showCounter && e.maxLength ? `${k.value}-counter` : void 0), $ = computed(() => e.value || ""), b = computed(() => $.value.length), B = computed(() => e.maxLength ? e.maxLength - b.value : null), g = computed(() => e.maxLength ? B.value !== null && B.value <= e.maxLength * 0.1 : false), t = computed(() => e.maxLength ? B.value !== null && B.value < 0 : false), A = computed(() => [
      "su-textarea-container",
      `su-textarea-container--${e.size}`,
      `su-textarea-container--${e.state}`,
      {
        "su-textarea-container--disabled": e.disabled,
        "su-textarea-container--readonly": e.readonly,
        "su-textarea-container--auto-resize": e.autoResize,
        "su-textarea-container--over-limit": t.value
      }
    ]), d = computed(() => [
      "su-textarea",
      `su-textarea--${e.size}`,
      `su-textarea--${e.state}`,
      {
        "su-textarea--disabled": e.disabled,
        "su-textarea--readonly": e.readonly,
        "su-textarea--auto-resize": e.autoResize,
        "su-textarea--over-limit": t.value
      }
    ]), S = computed(() => [
      "su-textarea-counter",
      {
        "su-textarea-counter--near-limit": g.value,
        "su-textarea-counter--over-limit": t.value
      }
    ]), I = computed(() => {
      const c = {};
      e.ariaLabel && (c["aria-label"] = e.ariaLabel);
      const N = [
        e.ariaDescribedBy,
        m.value,
        w.value
      ].filter(Boolean);
      return N.length > 0 && (c["aria-describedby"] = N.join(" ")), e.ariaInvalid !== void 0 && (c["aria-invalid"] = e.ariaInvalid), e.ariaRequired !== void 0 && (c["aria-required"] = e.ariaRequired), e.required && (c["aria-required"] = "true"), (e.state === "error" || t.value) && (c["aria-invalid"] = "true"), c;
    }), z = computed(() => {
      const c = {};
      return e.autocomplete && (c.autocomplete = e.autocomplete), e.maxLength && (c.maxlength = e.maxLength), e.spellcheck !== void 0 && (c.spellcheck = e.spellcheck), e.wrap && (c.wrap = e.wrap), c;
    }), R = async () => {
      if (!e.autoResize || !y.value) return;
      await nextTick();
      const c = y.value, N = e.minRows ? e.minRows * 1.5 : 3 * 1.5, de = e.maxRows ? e.maxRows * 1.5 : 10 * 1.5;
      c.style.height = "auto";
      const pe = c.scrollHeight, ce = Math.max(N * 16, Math.min(de * 16, pe));
      c.style.height = `${ce}px`;
    }, P = (c) => {
      const N = c.target;
      v("update:value", N.value), v("input", c), e.autoResize && R();
    }, le = (c) => {
      v("change", c);
    }, oe = (c) => {
      v("focus", c);
    }, Y = (c) => {
      v("blur", c);
    }, o = (c) => {
      v("keydown", c);
    }, Z = (c) => {
      v("keyup", c);
    };
    return u({
      focus: () => {
        var c;
        (c = y.value) == null || c.focus();
      },
      select: () => {
        var c;
        (c = y.value) == null || c.select();
      },
      textareaRef: y
    }), watch(() => e.value, () => {
      e.autoResize && R();
    }, { immediate: true }), watch(() => e.autoResize, (c) => {
      c && R();
    }), (c, N) => (openBlock(), createElementBlock("div", Ms, [
      c.label ? (openBlock(), createElementBlock("label", {
        key: 0,
        for: k.value,
        class: normalizeClass(["su-textarea-label", {
          "su-textarea-label--required": c.required,
          "su-textarea-label--disabled": c.disabled
        }])
      }, [
        createTextVNode(toDisplayString(c.label) + " ", 1),
        c.required ? (openBlock(), createElementBlock("span", Ts, "*")) : createCommentVNode("", true)
      ], 10, Hs)) : createCommentVNode("", true),
      createBaseVNode("div", {
        class: normalizeClass(A.value)
      }, [
        createBaseVNode("textarea", mergeProps({
          ref_key: "textareaRef",
          ref: y,
          id: k.value,
          class: d.value,
          value: c.value,
          placeholder: c.placeholder,
          disabled: c.disabled,
          readonly: c.readonly,
          required: c.required,
          rows: c.autoResize ? c.minRows : c.rows
        }, { ...z.value, ...I.value }, {
          onInput: P,
          onChange: le,
          onFocus: oe,
          onBlur: Y,
          onKeydown: o,
          onKeyup: Z
        }), null, 16, Es)
      ], 2),
      c.message || c.showCounter && c.maxLength ? (openBlock(), createElementBlock("div", js, [
        c.message ? (openBlock(), createElementBlock("div", {
          key: 0,
          id: m.value,
          class: normalizeClass(["su-textarea-message", `su-textarea-message--${c.state}`]),
          "aria-live": c.state === "error" ? "assertive" : "polite"
        }, toDisplayString(c.message), 11, Ks)) : createCommentVNode("", true),
        c.showCounter && c.maxLength ? (openBlock(), createElementBlock("div", {
          key: 1,
          id: w.value,
          class: normalizeClass(S.value),
          "aria-live": g.value || t.value ? "polite" : "off"
        }, [
          createBaseVNode("span", Os, toDisplayString(t.value ? "Limite de caractères dépassée" : "Caractères restants") + ": ", 1),
          createTextVNode(" " + toDisplayString(b.value) + "/" + toDisplayString(c.maxLength), 1)
        ], 10, Ps)) : createCommentVNode("", true)
      ])) : createCommentVNode("", true)
    ]));
  }
});
var Ns = {
  install(h2, u = {}) {
    const a = u.prefix || "Su";
    h2.component(`${a}Button`, Be), h2.component(`${a}ButtonsGroup`, Ae), h2.component(`${a}Link`, xe), h2.component(`${a}LinksGroup`, Ve), h2.component(`${a}Input`, sa), h2.component(`${a}SelectBox`, Da), h2.component(`${a}RadioGroup`, Ka), h2.component(`${a}CheckboxGroup`, Ja), h2.component(`${a}Switch`, us), h2.component(`${a}FileUpload`, Ss), h2.component(`${a}Textarea`, Vs);
  }
};
export {
  Be as Button,
  Ae as ButtonsGroup,
  Ja as CheckboxGroup,
  Ss as FileUpload,
  sa as Input,
  xe as Link,
  Ve as LinksGroup,
  Ka as RadioGroup,
  Da as SelectBox,
  us as Switch,
  Vs as Textarea,
  Zs as accessibility,
  Ns as default
};
//# sourceMappingURL=@surgeup_ds-vue.js.map
