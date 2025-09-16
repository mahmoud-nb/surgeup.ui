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
var ze = ["disabled", "tabindex"];
var De = {
  key: 0,
  class: "su-button__spinner"
};
var Re = {
  key: 1,
  class: "su-button__content"
};
var ge = defineComponent({
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
  setup(b, { emit: h2 }) {
    const a = b, e = h2, v = computed(() => [
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
    ]), q = computed(() => !(a.icon && a.iconDisplay === "only")), m = (f) => {
      a.disabled || a.loading || e("click", f);
    }, w = (f) => {
      (f.key === "Enter" || f.key === " ") && (f.preventDefault(), !a.disabled && !a.loading && e("click", f)), e("keydown", f);
    }, y = (f) => {
      e("focus", f);
    }, C = (f) => {
      e("blur", f);
    }, $ = computed(() => {
      const f = {};
      return a.ariaLabel && (f["aria-label"] = a.ariaLabel), a.ariaDescribedBy && (f["aria-describedby"] = a.ariaDescribedBy), a.ariaExpanded !== void 0 && (f["aria-expanded"] = a.ariaExpanded), a.ariaPressed !== void 0 && (f["aria-pressed"] = a.ariaPressed), a.role && (f.role = a.role), a.loading && (f["aria-busy"] = "true", f["aria-live"] = "polite"), a.disabled && (f["aria-disabled"] = "true"), a.icon && a.iconDisplay === "only" && !a.ariaLabel && console.warn('Button with icon and iconDisplay="only" should have an ariaLabel for accessibility'), f;
    });
    return (f, k) => (openBlock(), createElementBlock("button", mergeProps({
      class: v.value,
      disabled: f.disabled || f.loading,
      tabindex: f.disabled ? -1 : f.tabIndex
    }, $.value, {
      onClick: m,
      onKeydown: w,
      onFocus: y,
      onBlur: C
    }), [
      f.loading ? (openBlock(), createElementBlock("span", De, [...k[0] || (k[0] = [
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
      f.loading ? createCommentVNode("", true) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
        f.icon ? (openBlock(), createBlock(resolveDynamicComponent(f.icon), {
          key: 0,
          class: "su-button__icon",
          "aria-hidden": "true"
        })) : createCommentVNode("", true),
        q.value ? (openBlock(), createElementBlock("span", Re, [
          renderSlot(f.$slots, "default")
        ])) : createCommentVNode("", true)
      ], 64))
    ], 16, ze));
  }
});
var Fe = defineComponent({
  __name: "ButtonsGroup",
  props: {
    gap: { default: "md" },
    size: {},
    variant: {},
    ariaLabel: {},
    ariaDescribedBy: {},
    role: {}
  },
  setup(b) {
    const h2 = b, a = useSlots(), e = computed(() => [
      "su-buttons-group",
      `su-buttons-group--gap-${h2.gap}`,
      {
        "su-buttons-group--connected": h2.gap === "none"
      }
    ]), v = computed(() => {
      if (!a.default) return [];
      const m = a.default(), w = [];
      for (const y of m)
        if (y.type === ge) {
          const C = { ...y.props };
          if (h2.size && (C.size = h2.size), h2.variant && (C.variant = h2.variant), h2.gap === "none") {
            const $ = C.class || "";
            C.class = `${$} su-buttons-group__button`.trim();
          }
          w.push(h(y.type, C, y.children));
        } else {
          if (y.type === Comment || y.type === Text || y.type === Fragment)
            continue;
          console.warn("ButtonsGroup expects only Button components as children. Found:", y.type);
        }
      return w;
    }), q = computed(() => {
      const m = {};
      return h2.ariaLabel && (m["aria-label"] = h2.ariaLabel), h2.ariaDescribedBy && (m["aria-describedby"] = h2.ariaDescribedBy), h2.role && (m.role = h2.role), m;
    });
    return (m, w) => (openBlock(), createElementBlock("div", mergeProps({ class: e.value }, q.value), [
      (openBlock(true), createElementBlock(Fragment, null, renderList(v.value, (y, C) => (openBlock(), createBlock(resolveDynamicComponent(y), { key: C }))), 128))
    ], 16));
  }
});
var Se = 0;
function X(b = "su") {
  return `${b}-${++Se}-${Date.now().toString(36)}`;
}
function Ae(b) {
  return [
    "button:not([disabled])",
    "input:not([disabled])",
    "select:not([disabled])",
    "textarea:not([disabled])",
    "a[href]",
    '[tabindex]:not([tabindex="-1"])'
  ].some((a) => b.matches(a));
}
function ye(b) {
  const h2 = b.querySelectorAll(
    'button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), a[href], [tabindex]:not([tabindex="-1"])'
  ), a = h2[0], e = h2[h2.length - 1], v = (q) => {
    q.key === "Tab" && (q.shiftKey ? document.activeElement === a && (q.preventDefault(), e.focus()) : document.activeElement === e && (q.preventDefault(), a.focus()));
  };
  return b.addEventListener("keydown", v), a == null || a.focus(), () => {
    b.removeEventListener("keydown", v);
  };
}
function P(b, h2 = "polite") {
  const a = document.createElement("div");
  a.setAttribute("aria-live", h2), a.setAttribute("aria-atomic", "true"), a.className = "sr-only", a.textContent = b, document.body.appendChild(a), setTimeout(() => {
    document.body.removeChild(a);
  }, 1e3);
}
function He() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
function Me() {
  return window.matchMedia("(prefers-contrast: high)").matches;
}
function Te(b, h2) {
  return 4.5;
}
function Ee(b, h2 = "AA") {
  return b >= (h2 === "AAA" ? 7 : 4.5);
}
var Ps = Object.freeze(Object.defineProperty({
  __proto__: null,
  announceToScreenReader: P,
  generateId: X,
  getContrastRatio: Te,
  isContrastValid: Ee,
  isFocusable: Ae,
  prefersHighContrast: Me,
  prefersReducedMotion: He,
  trapFocus: ye
}, Symbol.toStringTag, { value: "Module" }));
var je = ["dir"];
var Oe = ["for"];
var Pe = {
  key: 0,
  class: "su-input-required",
  "aria-label": "requis"
};
var Ke = ["id", "type", "value", "placeholder", "disabled", "readonly", "required"];
var Ve = ["id", "aria-live"];
var Ze = defineComponent({
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
  setup(b, { expose: h2, emit: a }) {
    const e = b, v = a, q = useAttrs(), m = ref(), w = computed(() => q.id || X("input")), y = computed(() => e.message ? `${w.value}-message` : void 0), C = computed(() => [
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
    ]), f = computed(() => {
      const o = {};
      if (e.ariaLabel && (o["aria-label"] = e.ariaLabel), e.ariaDescribedBy || y.value) {
        const K = [e.ariaDescribedBy, y.value].filter(Boolean).join(" ");
        o["aria-describedby"] = K;
      }
      return e.ariaInvalid !== void 0 && (o["aria-invalid"] = e.ariaInvalid), e.ariaRequired !== void 0 && (o["aria-required"] = e.ariaRequired), e.required && (o["aria-required"] = "true"), e.state === "error" && (o["aria-invalid"] = "true"), o;
    }), k = computed(() => {
      const o = {};
      return e.autocomplete && (o.autocomplete = e.autocomplete), e.min !== void 0 && (o.min = e.min), e.max !== void 0 && (o.max = e.max), e.step !== void 0 && (o.step = e.step), e.minLength !== void 0 && (o.minlength = e.minLength), e.maxLength !== void 0 && (o.maxlength = e.maxLength), e.pattern && (o.pattern = e.pattern), o;
    }), M = (o) => {
      const K = o.target, Y = e.type === "number" ? Number(K.value) : K.value;
      v("update:value", Y), v("input", o);
    }, i = (o) => {
      v("change", o);
    }, F = (o) => {
      v("focus", o);
    }, u = (o) => {
      v("blur", o);
    }, S = (o) => {
      v("keydown", o);
    }, z = (o) => {
      v("keyup", o);
    }, L = (o) => {
      e.disabled || e.readonly || v("prefix-click", o);
    }, D = (o) => {
      e.disabled || e.readonly || v("prefix-icon-click", o);
    }, O = (o) => {
      e.disabled || e.readonly || v("suffix-click", o);
    }, te = (o) => {
      e.disabled || e.readonly || v("suffix-icon-click", o);
    };
    return h2({
      focus: () => {
        var o;
        (o = m.value) == null || o.focus();
      },
      select: () => {
        var o;
        (o = m.value) == null || o.select();
      },
      inputRef: m
    }), (o, K) => (openBlock(), createElementBlock("div", {
      class: "su-input-wrapper",
      dir: o.dir
    }, [
      o.label ? (openBlock(), createElementBlock("label", {
        key: 0,
        for: w.value,
        class: normalizeClass(["su-input-label", {
          "su-input-label--required": o.required,
          "su-input-label--disabled": o.disabled
        }])
      }, [
        createTextVNode(toDisplayString(o.label) + " ", 1),
        o.required ? (openBlock(), createElementBlock("span", Pe, "*")) : createCommentVNode("", true)
      ], 10, Oe)) : createCommentVNode("", true),
      createBaseVNode("div", {
        class: normalizeClass(C.value)
      }, [
        o.prefixIcon ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: "su-input-prefix su-input-prefix--icon su-input-prefix--clickable",
          onClick: D
        }, [
          (openBlock(), createBlock(resolveDynamicComponent(o.prefixIcon), {
            class: "su-input-icon",
            "aria-hidden": "true"
          }))
        ])) : o.prefix ? (openBlock(), createElementBlock("div", {
          key: 1,
          class: "su-input-prefix su-input-prefix--text su-input-prefix--clickable",
          onClick: L
        }, toDisplayString(o.prefix), 1)) : createCommentVNode("", true),
        createBaseVNode("input", mergeProps({
          ref_key: "inputRef",
          ref: m,
          id: w.value,
          class: $.value,
          type: o.type,
          value: o.value,
          placeholder: o.placeholder,
          disabled: o.disabled,
          readonly: o.readonly,
          required: o.required
        }, { ...k.value, ...f.value }, {
          onInput: M,
          onChange: i,
          onFocus: F,
          onBlur: u,
          onKeydown: S,
          onKeyup: z
        }), null, 16, Ke),
        o.suffix ? (openBlock(), createElementBlock("div", {
          key: 2,
          class: "su-input-suffix su-input-suffix--text su-input-suffix--clickable",
          onClick: O
        }, toDisplayString(o.suffix), 1)) : o.suffixIcon ? (openBlock(), createElementBlock("div", {
          key: 3,
          class: "su-input-suffix su-input-suffix--icon su-input-suffix--clickable",
          onClick: te
        }, [
          (openBlock(), createBlock(resolveDynamicComponent(o.suffixIcon), {
            class: "su-input-icon",
            "aria-hidden": "true"
          }))
        ])) : createCommentVNode("", true)
      ], 2),
      o.message ? (openBlock(), createElementBlock("div", {
        key: 1,
        id: y.value,
        class: normalizeClass(["su-input-message", `su-input-message--${o.state}`]),
        "aria-live": o.state === "error" ? "assertive" : "polite"
      }, toDisplayString(o.message), 11, Ve)) : createCommentVNode("", true)
    ], 8, je));
  }
});
function Ge(b, h2) {
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
function ve(b, h2) {
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
function Ne(b, h2) {
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
function Ue(b, h2) {
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
function We(b, h2) {
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
function Ye(b, h2) {
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
function Qe(b, h2) {
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
function Je(b, h2) {
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
function he(b, h2) {
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
var Xe = ["dir"];
var ea = ["for"];
var aa = {
  key: 0,
  class: "su-select-required",
  "aria-label": "requis"
};
var sa = ["id", "tabindex"];
var ta = { class: "su-select-content" };
var la = {
  key: 0,
  class: "su-select-tags"
};
var ia = { class: "su-select-tag-label" };
var ra = ["aria-label", "onClick"];
var oa = {
  key: 0,
  class: "su-select-tag su-select-tag--more"
};
var na = {
  key: 1,
  class: "su-select-display"
};
var ua = { class: "su-select-display-text" };
var da = { class: "su-select-actions" };
var ca = {
  key: 0,
  class: "su-select-spinner"
};
var pa = ["id", "aria-multiselectable"];
var fa = {
  key: 0,
  class: "su-select-search"
};
var va = { class: "su-select-search-container" };
var ha = ["placeholder", "value"];
var ba = { class: "su-select-options" };
var ma = ["aria-label"];
var ga = ["aria-selected", "aria-disabled", "onClick", "onMouseenter"];
var ya = {
  key: 0,
  class: "su-select-option-checkbox"
};
var ka = { class: "su-select-option-content" };
var wa = { class: "su-select-option-label" };
var $a = {
  key: 0,
  class: "su-select-option-description"
};
var Ba = {
  key: 1,
  class: "su-select-no-options"
};
var xa = ["id", "aria-live"];
var _a = defineComponent({
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
  setup(b, { expose: h2, emit: a }) {
    const e = b, v = a, q = useAttrs(), m = ref(), w = ref(), y = ref(), C = ref(), $ = ref(false), f = ref(""), k = ref(-1), M = ref(null), i = computed(() => q.id || X("select")), F = computed(() => `${i.value}-listbox`), u = computed(() => e.groups && e.groups.length > 0 ? e.groups.flatMap(
      (l) => l.options.map((x) => ({ ...x, group: l.label }))
    ) : e.options || []), S = computed(() => {
      if (!e.searchable || !f.value)
        return u.value;
      const l = f.value.toLowerCase();
      return u.value.filter(
        (x) => x.label.toLowerCase().includes(l) || x.description && x.description.toLowerCase().includes(l)
      );
    }), z = computed(() => {
      const l = {};
      return S.value.forEach((x) => {
        const Q = x.group || "";
        l[Q] || (l[Q] = []), l[Q].push(x);
      }), l;
    }), L = computed({
      get() {
        return e.multiple ? Array.isArray(e.value) ? e.value : e.value !== void 0 && e.value !== null ? [e.value] : [] : e.value;
      },
      set(l) {
        v("update:value", l), v("change", l);
      }
    }), D = computed(() => {
      if (console.log("selectedOptions computed updated", L.value), e.multiple) {
        const l = L.value;
        return l ? u.value.filter((x) => l.includes(x.value)) : [];
      } else {
        const l = L.value;
        return l != null ? u.value.filter((x) => x.value === l) : [];
      }
    }), O = computed(() => {
      var l;
      return D.value.length === 0 ? e.placeholder : e.multiple ? D.value.length === 1 ? D.value[0].label : `${D.value.length} éléments sélectionnés` : ((l = D.value[0]) == null ? void 0 : l.label) || e.placeholder;
    }), te = computed(() => [
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
        "su-select-trigger--has-value": D.value.length > 0,
        "su-select-trigger--placeholder": D.value.length === 0
      }
    ]), G = computed(() => e.message ? `${i.value}-message` : void 0), o = computed(() => {
      const l = {
        "aria-haspopup": "listbox",
        "aria-expanded": $.value,
        "aria-controls": $.value ? F.value : void 0,
        role: "combobox"
      };
      if (e.ariaLabel && (l["aria-label"] = e.ariaLabel), e.ariaDescribedBy || G.value) {
        const x = [e.ariaDescribedBy, G.value].filter(Boolean).join(" ");
        l["aria-describedby"] = x;
      }
      return e.ariaInvalid !== void 0 && (l["aria-invalid"] = e.ariaInvalid), e.ariaRequired !== void 0 && (l["aria-required"] = e.ariaRequired), e.required && (l["aria-required"] = "true"), e.state === "error" && (l["aria-invalid"] = "true"), e.multiple && (l["aria-multiselectable"] = "true"), l;
    }), K = () => {
      e.disabled || e.readonly || ($.value ? N() : Y());
    }, Y = async () => {
      e.disabled || e.readonly || ($.value = true, f.value = "", k.value = -1, v("open"), await nextTick(), e.searchable && C.value && C.value.focus(), y.value && (M.value = ye(y.value)));
    }, N = () => {
      $.value = false, k.value = -1, M.value && (M.value(), M.value = null), v("close"), w.value && w.value.focus();
    }, d = (l) => {
      if (l.disabled) return;
      let x;
      if (e.multiple) {
        const T = L.value || [];
        if (T.includes(l.value))
          x = T.filter((H) => H !== l.value);
        else {
          if (e.maxSelectedItems && T.length >= e.maxSelectedItems) {
            P(`Maximum ${e.maxSelectedItems} éléments sélectionnables`);
            return;
          }
          x = [...T, l.value];
        }
      } else
        x = l.value;
      console.log(">>>>", x), L.value = x;
      const Q = e.multiple && L.value.includes(l.value) ? "désélectionné" : "sélectionné";
      P(`${l.label} ${Q}`), !e.multiple && e.closeOnSelect && N();
    }, V = (l) => {
      l.stopPropagation();
      const x = e.multiple ? [] : void 0;
      L.value = x, P("Sélection effacée");
    }, ue = (l, x) => {
      if (x.stopPropagation(), e.multiple) {
        const T = (L.value || []).filter((J) => J !== l.value);
        L.value = T, P(`${l.label} retiré de la sélection`);
      }
    }, pe = (l) => {
      const x = l.target;
      f.value = x.value, k.value = -1, v("search", f.value);
    }, de = (l) => {
      switch (l.key) {
        case "Enter":
        case " ":
          if (l.preventDefault(), !$.value)
            Y();
          else if (k.value >= 0) {
            const x = S.value[k.value];
            x && d(x);
          }
          break;
        case "Escape":
          l.preventDefault(), N();
          break;
        case "ArrowDown":
          l.preventDefault(), $.value ? k.value = Math.min(k.value + 1, S.value.length - 1) : Y();
          break;
        case "ArrowUp":
          l.preventDefault(), $.value && (k.value = Math.max(k.value - 1, -1));
          break;
        case "Home":
          $.value && (l.preventDefault(), k.value = 0);
          break;
        case "End":
          $.value && (l.preventDefault(), k.value = S.value.length - 1);
          break;
        case "Tab":
          $.value && N();
          break;
      }
    }, t = (l) => {
      v("focus", l);
    }, I = (l) => {
      setTimeout(() => {
        $.value && m.value && !m.value.contains(document.activeElement) && (N(), v("blur", l));
      }, 0);
    }, B = (l) => {
      $.value && m.value && !m.value.contains(l.target) && N();
    };
    return h2({
      focus: () => {
        var l;
        (l = w.value) == null || l.focus();
      },
      open: () => {
        Y();
      },
      close: () => {
        N();
      },
      selectRef: m,
      inputRef: w
    }), onMounted(() => {
      document.addEventListener("click", B, { passive: true });
    }), onUnmounted(() => {
      document.removeEventListener("click", B, { passive: true }), M.value && M.value();
    }), watch(() => e.value, () => {
      console.log("Value changed:", e.value), k.value = -1;
    }), (l, x) => {
      var Q;
      return openBlock(), createElementBlock("div", {
        class: "su-select-wrapper",
        dir: l.dir
      }, [
        l.label ? (openBlock(), createElementBlock("label", {
          key: 0,
          for: i.value,
          class: normalizeClass(["su-select-label", {
            "su-select-label--required": l.required,
            "su-select-label--disabled": l.disabled
          }])
        }, [
          createTextVNode(toDisplayString(l.label) + " ", 1),
          l.required ? (openBlock(), createElementBlock("span", aa, "*")) : createCommentVNode("", true)
        ], 10, ea)) : createCommentVNode("", true),
        createBaseVNode("div", {
          ref_key: "selectRef",
          ref: m,
          class: normalizeClass(te.value)
        }, [
          createBaseVNode("div", mergeProps({
            ref_key: "inputRef",
            ref: w,
            id: i.value,
            class: oe.value,
            tabindex: l.disabled ? -1 : 0
          }, o.value, {
            onClick: K,
            onKeydown: de,
            onFocus: t,
            onBlur: I
          }), [
            createBaseVNode("div", ta, [
              l.multiple && D.value.length > 0 ? (openBlock(), createElementBlock("div", la, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(D.value.slice(0, 3), (T) => (openBlock(), createElementBlock("span", {
                  key: T.value,
                  class: "su-select-tag"
                }, [
                  T.icon ? (openBlock(), createBlock(resolveDynamicComponent(T.icon), {
                    key: 0,
                    class: "su-select-tag-icon",
                    "aria-hidden": "true"
                  })) : createCommentVNode("", true),
                  createBaseVNode("span", ia, toDisplayString(T.label), 1),
                  createBaseVNode("button", {
                    type: "button",
                    class: "su-select-tag-remove",
                    "aria-label": `Retirer ${T.label}`,
                    onClick: (J) => ue(T, J)
                  }, [
                    createVNode(unref(he), { class: "su-select-tag-remove-icon" })
                  ], 8, ra)
                ]))), 128)),
                D.value.length > 3 ? (openBlock(), createElementBlock("span", oa, " +" + toDisplayString(D.value.length - 3), 1)) : createCommentVNode("", true)
              ])) : (openBlock(), createElementBlock("div", na, [
                (Q = D.value[0]) != null && Q.icon ? (openBlock(), createBlock(resolveDynamicComponent(D.value[0].icon), {
                  key: 0,
                  class: "su-select-display-icon",
                  "aria-hidden": "true"
                })) : createCommentVNode("", true),
                createBaseVNode("span", ua, toDisplayString(O.value), 1)
              ]))
            ]),
            createBaseVNode("div", da, [
              l.loading ? (openBlock(), createElementBlock("div", ca, [...x[0] || (x[0] = [
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
              ])])) : l.clearable && D.value.length > 0 && !l.disabled && !l.readonly ? (openBlock(), createElementBlock("button", {
                key: 1,
                type: "button",
                class: "su-select-clear",
                "aria-label": "Effacer la sélection",
                onClick: V
              }, [
                createVNode(unref(he), { class: "su-select-clear-icon" })
              ])) : createCommentVNode("", true),
              createVNode(unref(Ne), {
                class: normalizeClass(["su-select-chevron", { "su-select-chevron--open": $.value }]),
                "aria-hidden": "true"
              }, null, 8, ["class"])
            ])
          ], 16, sa),
          createVNode(Transition, { name: "su-select-dropdown" }, {
            default: withCtx(() => [
              $.value ? (openBlock(), createElementBlock("div", {
                key: 0,
                ref_key: "dropdownRef",
                ref: y,
                id: F.value,
                class: "su-select-dropdown",
                style: normalizeStyle({ maxHeight: l.maxHeight }),
                role: "listbox",
                "aria-multiselectable": l.multiple
              }, [
                l.searchable ? (openBlock(), createElementBlock("div", fa, [
                  createBaseVNode("div", va, [
                    createVNode(unref(Qe), {
                      class: "su-select-search-icon",
                      "aria-hidden": "true"
                    }),
                    createBaseVNode("input", {
                      ref_key: "searchInputRef",
                      ref: C,
                      type: "text",
                      class: "su-select-search-input",
                      placeholder: l.searchPlaceholder,
                      value: f.value,
                      onInput: pe,
                      onKeydown: de
                    }, null, 40, ha)
                  ])
                ])) : createCommentVNode("", true),
                createBaseVNode("div", ba, [
                  S.value.length > 0 ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList(z.value, (T, J) => (openBlock(), createElementBlock(Fragment, { key: J }, [
                    J && e.groups && e.groups.length > 0 ? (openBlock(), createElementBlock("div", {
                      key: 0,
                      class: "su-select-group-header",
                      role: "group",
                      "aria-label": J
                    }, toDisplayString(J), 9, ma)) : createCommentVNode("", true),
                    (openBlock(true), createElementBlock(Fragment, null, renderList(T, (H) => (openBlock(), createElementBlock("div", {
                      key: H.value,
                      class: normalizeClass(["su-select-option", {
                        "su-select-option--selected": l.multiple ? L.value.includes(H.value) : L.value === H.value,
                        "su-select-option--disabled": H.disabled,
                        "su-select-option--focused": S.value.indexOf(H) === k.value
                      }]),
                      role: "option",
                      "aria-selected": l.multiple ? L.value.includes(H.value) : L.value === H.value,
                      "aria-disabled": H.disabled,
                      onClick: (ke) => d(H),
                      onMouseenter: (ke) => k.value = S.value.indexOf(H)
                    }, [
                      l.multiple ? (openBlock(), createElementBlock("div", ya, [
                        createBaseVNode("div", {
                          class: normalizeClass(["su-select-checkbox", {
                            "su-select-checkbox--checked": L.value.includes(H.value)
                          }])
                        }, [
                          L.value.includes(H.value) ? (openBlock(), createBlock(unref(ve), {
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
                      createBaseVNode("div", ka, [
                        createBaseVNode("div", wa, toDisplayString(H.label), 1),
                        H.description ? (openBlock(), createElementBlock("div", $a, toDisplayString(H.description), 1)) : createCommentVNode("", true)
                      ]),
                      !l.multiple && L.value === H.value ? (openBlock(), createBlock(unref(ve), {
                        key: 2,
                        class: "su-select-option-check",
                        "aria-hidden": "true"
                      })) : createCommentVNode("", true)
                    ], 42, ga))), 128))
                  ], 64))), 128)) : (openBlock(), createElementBlock("div", Ba, toDisplayString(f.value ? l.noResultsText : l.noOptionsText), 1))
                ])
              ], 12, pa)) : createCommentVNode("", true)
            ]),
            _: 1
          })
        ], 2),
        l.message ? (openBlock(), createElementBlock("div", {
          key: 1,
          id: G.value,
          class: normalizeClass(["su-select-message", `su-select-message--${l.state}`]),
          "aria-live": l.state === "error" ? "assertive" : "polite"
        }, toDisplayString(l.message), 11, xa)) : createCommentVNode("", true)
      ], 8, Xe);
    };
  }
});
var Ca = { class: "su-radio-group-wrapper" };
var qa = {
  key: 0,
  class: "su-radio-group-required",
  "aria-label": "requis"
};
var La = {
  key: 0,
  class: "su-radio-group-before"
};
var Ia = ["for"];
var za = ["id", "name", "value", "checked", "disabled", "required", "onChange"];
var Da = { class: "su-radio-content" };
var Ra = { class: "su-radio-text" };
var Fa = { class: "su-radio-label" };
var Sa = {
  key: 0,
  class: "su-radio-description"
};
var Aa = {
  key: 1,
  class: "su-radio-group-after"
};
var Ha = ["id", "aria-live"];
var Ma = defineComponent({
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
  setup(b, { emit: h2 }) {
    const a = b, e = h2, v = useAttrs(), q = computed(() => v.id || X("radio-group")), m = computed(() => a.message ? `${q.value}-message` : void 0), w = computed(() => a.name || q.value), y = computed(() => [
      "su-radio-group",
      `su-radio-group--${a.size}`,
      `su-radio-group--${a.state}`,
      `su-radio-group--${a.displayType}`,
      `su-radio-group--${a.direction}`,
      {
        "su-radio-group--disabled": a.disabled,
        "su-radio-group--scrollable": a.maxHeight
      }
    ]), C = (i) => [
      "su-radio-option",
      `su-radio-option--${a.size}`,
      `su-radio-option--${a.state}`,
      `su-radio-option--${a.displayType}`,
      {
        "su-radio-option--selected": a.value === i.value,
        "su-radio-option--disabled": i.disabled || a.disabled
      }
    ], $ = computed(() => {
      const i = {
        role: "radiogroup"
      };
      if (a.ariaLabel && (i["aria-label"] = a.ariaLabel), a.ariaDescribedBy || m.value) {
        const F = [a.ariaDescribedBy, m.value].filter(Boolean).join(" ");
        i["aria-describedby"] = F;
      }
      return a.required && (i["aria-required"] = "true"), a.state === "error" && (i["aria-invalid"] = "true"), i;
    }), f = (i) => {
      a.disabled || (e("update:value", i), e("change", i));
    }, k = (i) => {
      e("focus", i);
    }, M = (i) => {
      e("blur", i);
    };
    return (i, F) => (openBlock(), createElementBlock("div", Ca, [
      createBaseVNode("fieldset", mergeProps({ class: y.value }, $.value), [
        i.label ? (openBlock(), createElementBlock("legend", {
          key: 0,
          class: normalizeClass(["su-radio-group-label", {
            "su-radio-group-label--required": i.required,
            "su-radio-group-label--disabled": i.disabled
          }])
        }, [
          createTextVNode(toDisplayString(i.label) + " ", 1),
          i.required ? (openBlock(), createElementBlock("span", qa, "*")) : createCommentVNode("", true)
        ], 2)) : createCommentVNode("", true),
        createBaseVNode("div", {
          class: "su-radio-group-options",
          style: normalizeStyle({ maxHeight: i.maxHeight || void 0, overflowY: i.maxHeight ? "auto" : void 0 })
        }, [
          i.$slots.before ? (openBlock(), createElementBlock("div", La, [
            renderSlot(i.$slots, "before")
          ])) : createCommentVNode("", true),
          (openBlock(true), createElementBlock(Fragment, null, renderList(i.options, (u) => (openBlock(), createElementBlock("label", {
            key: u.value,
            class: normalizeClass(C(u)),
            for: `${q.value}-${u.value}`
          }, [
            createBaseVNode("input", {
              id: `${q.value}-${u.value}`,
              type: "radio",
              name: w.value,
              value: u.value,
              checked: i.value === u.value,
              disabled: u.disabled || i.disabled,
              required: i.required,
              class: "su-radio-input",
              onChange: (S) => f(u.value),
              onFocus: k,
              onBlur: M
            }, null, 40, za),
            F[0] || (F[0] = createBaseVNode("div", { class: "su-radio-indicator" }, [
              createBaseVNode("div", { class: "su-radio-dot" })
            ], -1)),
            createBaseVNode("div", Da, [
              u.icon ? (openBlock(), createBlock(resolveDynamicComponent(u.icon), {
                key: 0,
                class: "su-radio-icon",
                "aria-hidden": "true"
              })) : createCommentVNode("", true),
              createBaseVNode("div", Ra, [
                createBaseVNode("div", Fa, toDisplayString(u.label), 1),
                u.description ? (openBlock(), createElementBlock("div", Sa, toDisplayString(u.description), 1)) : createCommentVNode("", true)
              ])
            ])
          ], 10, Ia))), 128))
        ], 4),
        i.$slots.after ? (openBlock(), createElementBlock("div", Aa, [
          renderSlot(i.$slots, "after")
        ])) : createCommentVNode("", true)
      ], 16),
      i.message ? (openBlock(), createElementBlock("div", {
        key: 0,
        id: m.value,
        class: normalizeClass(["su-radio-group-message", `su-radio-group-message--${i.state}`]),
        "aria-live": i.state === "error" ? "assertive" : "polite"
      }, toDisplayString(i.message), 11, Ha)) : createCommentVNode("", true)
    ]));
  }
});
var Ta = { class: "su-checkbox-group-wrapper" };
var Ea = {
  key: 0,
  class: "su-checkbox-group-required",
  "aria-label": "requis"
};
var ja = {
  key: 0,
  class: "su-checkbox-group-before"
};
var Oa = ["for"];
var Pa = ["id", "value", "checked", "disabled", "required", "onChange"];
var Ka = { class: "su-checkbox-content" };
var Va = { class: "su-checkbox-text" };
var Za = { class: "su-checkbox-label" };
var Ga = {
  key: 1,
  class: "su-checkbox-group-after"
};
var Na = ["id", "aria-live"];
var Ua = defineComponent({
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
  setup(b, { emit: h2 }) {
    const a = b, e = h2, v = useAttrs(), q = computed(() => v.id || X("checkbox-group")), m = computed(() => a.message ? `${q.value}-message` : void 0), w = computed({
      get() {
        return Array.isArray(a.value) ? a.value : [];
      },
      set(u) {
        e("update:value", u), e("change", u);
      }
    }), y = computed(() => [
      "su-checkbox-group",
      `su-checkbox-group--${a.size}`,
      `su-checkbox-group--${a.state}`,
      `su-checkbox-group--${a.displayType}`,
      `su-checkbox-group--${a.direction}`,
      {
        "su-checkbox-group--disabled": a.disabled,
        "su-checkbox-group--scrollable": a.maxHeight
      }
    ]), C = (u) => [
      "su-checkbox-option",
      `su-checkbox-option--${a.size}`,
      `su-checkbox-option--${a.state}`,
      `su-checkbox-option--${a.displayType}`,
      {
        "su-checkbox-option--selected": w.value.includes(u.value),
        "su-checkbox-option--disabled": u.disabled || a.disabled
      }
    ], $ = computed(() => {
      const u = {
        role: "group"
      };
      if (a.ariaLabel && (u["aria-label"] = a.ariaLabel), a.ariaDescribedBy || m.value) {
        const S = [a.ariaDescribedBy, m.value].filter(Boolean).join(" ");
        u["aria-describedby"] = S;
      }
      return a.required && (u["aria-required"] = "true"), a.state === "error" && (u["aria-invalid"] = "true"), u;
    }), f = (u, S) => {
      if (a.disabled) return;
      let z;
      if (S) {
        if (a.maxSelections && w.value.length >= a.maxSelections) {
          P(`Maximum ${a.maxSelections} sélections autorisées`);
          return;
        }
        z = [...w.value, u];
      } else
        z = w.value.filter((O) => O !== u);
      w.value = z;
      const L = a.options.find((O) => O.value === u), D = S ? "sélectionné" : "désélectionné";
      P(`${L == null ? void 0 : L.label} ${D}`);
    }, k = (u) => {
      e("focus", u);
    }, M = (u) => {
      e("blur", u);
    }, i = (u) => w.value.includes(u), F = (u) => u.disabled || a.disabled;
    return (u, S) => (openBlock(), createElementBlock("div", Ta, [
      createBaseVNode("fieldset", mergeProps({ class: y.value }, $.value), [
        u.label ? (openBlock(), createElementBlock("legend", {
          key: 0,
          class: normalizeClass(["su-checkbox-group-label", {
            "su-checkbox-group-label--required": u.required,
            "su-checkbox-group-label--disabled": u.disabled
          }])
        }, [
          createTextVNode(toDisplayString(u.label) + " ", 1),
          u.required ? (openBlock(), createElementBlock("span", Ea, "*")) : createCommentVNode("", true)
        ], 2)) : createCommentVNode("", true),
        createBaseVNode("div", {
          class: "su-checkbox-group-options",
          style: normalizeStyle({ maxHeight: u.maxHeight || void 0, overflowY: u.maxHeight ? "auto" : void 0 })
        }, [
          u.$slots.before ? (openBlock(), createElementBlock("div", ja, [
            renderSlot(u.$slots, "before")
          ])) : createCommentVNode("", true),
          (openBlock(true), createElementBlock(Fragment, null, renderList(u.options, (z) => (openBlock(), createElementBlock("label", {
            key: z.value,
            class: normalizeClass(C(z)),
            for: `${q.value}-${z.value}`
          }, [
            createBaseVNode("input", {
              id: `${q.value}-${z.value}`,
              type: "checkbox",
              value: z.value,
              checked: i(z.value),
              disabled: F(z),
              required: u.required && w.value.length === 0,
              class: "su-checkbox-input",
              onChange: (L) => f(z.value, L.target.checked),
              onFocus: k,
              onBlur: M
            }, null, 40, Pa),
            createBaseVNode("div", {
              class: normalizeClass(["su-checkbox-indicator", {
                "su-checkbox-indicator--checked": i(z.value),
                "su-checkbox-indicator--indeterminate": false
              }])
            }, [
              i(z.value) ? (openBlock(), createBlock(unref(ve), {
                key: 0,
                class: "su-checkbox-check",
                "aria-hidden": "true"
              })) : createCommentVNode("", true)
            ], 2),
            createBaseVNode("div", Ka, [
              z.icon ? (openBlock(), createBlock(resolveDynamicComponent(z.icon), {
                key: 0,
                class: "su-checkbox-icon",
                "aria-hidden": "true"
              })) : createCommentVNode("", true),
              createBaseVNode("div", Va, [
                createBaseVNode("div", Za, toDisplayString(z.label), 1)
              ])
            ])
          ], 10, Oa))), 128))
        ], 4),
        u.$slots.after ? (openBlock(), createElementBlock("div", Ga, [
          renderSlot(u.$slots, "after")
        ])) : createCommentVNode("", true)
      ], 16),
      u.message ? (openBlock(), createElementBlock("div", {
        key: 0,
        id: m.value,
        class: normalizeClass(["su-checkbox-group-message", `su-checkbox-group-message--${u.state}`]),
        "aria-live": u.state === "error" ? "assertive" : "polite"
      }, toDisplayString(u.message), 11, Na)) : createCommentVNode("", true)
    ]));
  }
});
var Wa = { class: "su-switch-wrapper" };
var Ya = ["for"];
var Qa = {
  key: 0,
  class: "su-switch-required",
  "aria-label": "requis"
};
var Ja = ["id", "tabindex"];
var Xa = { class: "su-switch-track" };
var es = { class: "su-switch-thumb" };
var as = { class: "su-switch-indicator" };
var ss = {
  key: 0,
  class: "su-switch-icon su-switch-icon--check",
  viewBox: "0 0 16 16",
  "aria-hidden": "true"
};
var ts = {
  key: 1,
  class: "su-switch-icon su-switch-icon--cross",
  viewBox: "0 0 16 16",
  "aria-hidden": "true"
};
var ls = ["id", "aria-live"];
var is = defineComponent({
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
  setup(b, { emit: h2 }) {
    const a = b, e = h2, v = useAttrs(), q = computed(() => v.id || X("switch")), m = computed(() => a.message ? `${q.value}-message` : void 0), w = computed(() => [
      "su-switch-container",
      `su-switch-container--${a.size}`,
      `su-switch-container--${a.state}`,
      {
        "su-switch-container--disabled": a.disabled,
        "su-switch-container--readonly": a.readonly,
        "su-switch-container--has-labels": a.leftLabel || a.rightLabel,
        "su-switch-container--centered": a.leftLabel && a.rightLabel
      }
    ]), y = computed(() => [
      "su-switch",
      `su-switch--${a.size}`,
      `su-switch--${a.state}`,
      {
        "su-switch--checked": a.value,
        "su-switch--disabled": a.disabled,
        "su-switch--readonly": a.readonly
      }
    ]), C = computed(() => {
      const i = {
        role: "switch",
        "aria-checked": a.value
      };
      if (a.ariaLabel && (i["aria-label"] = a.ariaLabel), a.ariaDescribedBy || m.value) {
        const F = [a.ariaDescribedBy, m.value].filter(Boolean).join(" ");
        i["aria-describedby"] = F;
      }
      return a.ariaInvalid !== void 0 && (i["aria-invalid"] = a.ariaInvalid), a.ariaRequired !== void 0 && (i["aria-required"] = a.ariaRequired), a.required && (i["aria-required"] = "true"), a.state === "error" && (i["aria-invalid"] = "true"), i;
    }), $ = () => {
      if (a.disabled || a.readonly) return;
      const i = !a.value;
      e("update:value", i), e("change", i);
    }, f = (i) => {
      (i.key === " " || i.key === "Enter") && (i.preventDefault(), $()), e("keydown", i);
    }, k = (i) => {
      e("focus", i);
    }, M = (i) => {
      e("blur", i);
    };
    return (i, F) => (openBlock(), createElementBlock("div", Wa, [
      i.label ? (openBlock(), createElementBlock("label", {
        key: 0,
        for: q.value,
        class: normalizeClass(["su-switch-main-label", {
          "su-switch-main-label--required": i.required,
          "su-switch-main-label--disabled": i.disabled
        }])
      }, [
        createTextVNode(toDisplayString(i.label) + " ", 1),
        i.required ? (openBlock(), createElementBlock("span", Qa, "*")) : createCommentVNode("", true)
      ], 10, Ya)) : createCommentVNode("", true),
      createBaseVNode("div", {
        class: normalizeClass(w.value)
      }, [
        i.leftLabel ? (openBlock(), createElementBlock("span", {
          key: 0,
          class: normalizeClass(["su-switch-side-label su-switch-side-label--left", {
            "su-switch-side-label--active": !i.value,
            "su-switch-side-label--disabled": i.disabled
          }])
        }, toDisplayString(i.leftLabel), 3)) : createCommentVNode("", true),
        createBaseVNode("div", mergeProps({
          id: q.value,
          class: y.value,
          tabindex: i.disabled ? -1 : 0
        }, C.value, {
          onClick: $,
          onKeydown: f,
          onFocus: k,
          onBlur: M
        }), [
          createBaseVNode("div", Xa, [
            createBaseVNode("div", es, [
              createBaseVNode("div", as, [
                i.value ? (openBlock(), createElementBlock("svg", ss, [...F[0] || (F[0] = [
                  createBaseVNode("path", { d: "M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" }, null, -1)
                ])])) : (openBlock(), createElementBlock("svg", ts, [...F[1] || (F[1] = [
                  createBaseVNode("path", { d: "M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" }, null, -1)
                ])]))
              ])
            ])
          ])
        ], 16, Ja),
        i.rightLabel ? (openBlock(), createElementBlock("span", {
          key: 1,
          class: normalizeClass(["su-switch-side-label su-switch-side-label--right", {
            "su-switch-side-label--active": i.value,
            "su-switch-side-label--disabled": i.disabled
          }])
        }, toDisplayString(i.rightLabel), 3)) : createCommentVNode("", true)
      ], 2),
      i.message ? (openBlock(), createElementBlock("div", {
        key: 1,
        id: m.value,
        class: normalizeClass(["su-switch-message", `su-switch-message--${i.state}`]),
        "aria-live": i.state === "error" ? "assertive" : "polite"
      }, toDisplayString(i.message), 11, ls)) : createCommentVNode("", true)
    ]));
  }
});
var rs = { class: "su-file-upload-wrapper" };
var os = ["for"];
var ns = {
  key: 0,
  class: "su-file-upload-required",
  "aria-label": "requis"
};
var us = ["id", "accept", "multiple", "disabled", "required"];
var ds = ["tabindex", "aria-label"];
var cs = { class: "su-file-upload-text" };
var ps = { class: "su-file-upload-primary-text" };
var fs = { class: "su-file-upload-secondary-text" };
var vs = ["disabled"];
var hs = { key: 0 };
var bs = { key: 0 };
var ms = { key: 1 };
var gs = ["aria-label"];
var ys = { class: "su-file-upload-item-preview" };
var ks = ["src", "alt"];
var ws = { class: "su-file-upload-item-info" };
var $s = { class: "su-file-upload-item-name" };
var Bs = { class: "su-file-upload-item-details" };
var xs = { class: "su-file-upload-item-size" };
var _s = {
  key: 0,
  class: "su-file-upload-item-progress"
};
var Cs = {
  key: 1,
  class: "su-file-upload-item-error"
};
var qs = { class: "su-file-upload-item-status" };
var Ls = {
  key: 2,
  class: "su-file-upload-spinner",
  "aria-hidden": "true"
};
var Is = ["aria-label", "onClick"];
var zs = ["id", "aria-live"];
var Ds = defineComponent({
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
  setup(b, { expose: h2, emit: a }) {
    const e = b, v = a, q = useAttrs(), m = ref(), w = ref(), y = ref(false), C = ref(0), $ = computed(() => q.id || X("file-upload")), f = computed(() => e.message ? `${$.value}-message` : void 0), k = computed(() => Array.isArray(e.value) ? e.value : []), M = computed(() => [
      "su-file-upload-container",
      `su-file-upload-container--${e.size}`,
      `su-file-upload-container--${e.state}`,
      {
        "su-file-upload-container--disabled": e.disabled,
        "su-file-upload-container--readonly": e.readonly,
        "su-file-upload-container--dragging": y.value,
        "su-file-upload-container--has-files": k.value.length > 0
      }
    ]), i = computed(() => [
      "su-file-upload-dropzone",
      `su-file-upload-dropzone--${e.size}`,
      `su-file-upload-dropzone--${e.state}`,
      {
        "su-file-upload-dropzone--disabled": e.disabled,
        "su-file-upload-dropzone--readonly": e.readonly,
        "su-file-upload-dropzone--dragging": y.value
      }
    ]), F = computed(() => {
      const t = {};
      if (e.ariaLabel && (t["aria-label"] = e.ariaLabel), e.ariaDescribedBy || f.value) {
        const I = [e.ariaDescribedBy, f.value].filter(Boolean).join(" ");
        t["aria-describedby"] = I;
      }
      return e.ariaInvalid !== void 0 && (t["aria-invalid"] = e.ariaInvalid), e.ariaRequired !== void 0 && (t["aria-required"] = e.ariaRequired), e.required && (t["aria-required"] = "true"), e.state === "error" && (t["aria-invalid"] = "true"), t;
    }), u = (t) => {
      if (t === 0) return "0 B";
      const I = 1024, B = ["B", "KB", "MB", "GB"], R = Math.floor(Math.log(t) / Math.log(I));
      return parseFloat((t / Math.pow(I, R)).toFixed(1)) + " " + B[R];
    }, S = (t) => t.type.startsWith("image/") ? Je : We, z = (t) => t.type.startsWith("image/"), L = (t) => new Promise((I) => {
      if (!z(t)) {
        I("");
        return;
      }
      const B = new FileReader();
      B.onload = (R) => {
        var A;
        return I(((A = R.target) == null ? void 0 : A.result) || "");
      }, B.readAsDataURL(t);
    }), D = (t) => e.maxSize && t.size > e.maxSize ? `Le fichier "${t.name}" est trop volumineux (${u(t.size)}). Taille maximale : ${u(e.maxSize)}` : e.accept && !e.accept.split(",").map((R) => R.trim()).some((R) => {
      if (R.startsWith("."))
        return t.name.toLowerCase().endsWith(R.toLowerCase());
      if (R.includes("*")) {
        const A = R.split("/")[0];
        return t.type.startsWith(A);
      }
      return t.type === R;
    }) ? `Le type de fichier "${t.type}" n'est pas accepté pour "${t.name}"` : null, O = async (t) => {
      if (e.disabled || e.readonly) return;
      const I = Array.from(t), B = k.value;
      if (e.maxFiles && B.length + I.length > e.maxFiles) {
        const A = `Nombre maximum de fichiers dépassé (${e.maxFiles})`;
        v("error", A), P(A, "assertive");
        return;
      }
      const R = [];
      for (const A of I) {
        const ne = D(A);
        if (ne) {
          v("error", ne, A), P(ne, "assertive");
          continue;
        }
        const l = {
          id: X("file"),
          file: A,
          name: A.name,
          size: A.size,
          type: A.type,
          status: "pending"
        };
        if (e.allowPreview && z(A))
          try {
            l.preview = await L(A);
          } catch (x) {
            console.warn("Erreur lors de la création de l'aperçu:", x);
          }
        R.push(l);
      }
      if (R.length > 0) {
        const A = e.multiple ? [...B, ...R] : R;
        v("update:value", A), v("change", A);
        const ne = R.length === 1 ? `Fichier "${R[0].name}" ajouté` : `${R.length} fichiers ajoutés`;
        P(ne), R.forEach((l) => v("upload", l));
      }
    }, te = (t) => {
      if (e.disabled || e.readonly) return;
      const I = k.value.filter((B) => B.id !== t.id);
      v("update:value", I), v("change", I), v("remove", t), P(`Fichier "${t.name}" supprimé`);
    }, oe = (t) => {
      const I = t.target;
      I.files && I.files.length > 0 && O(I.files), I.value = "";
    }, G = () => {
      var t;
      e.disabled || e.readonly || (t = m.value) == null || t.click();
    }, o = (t) => {
      (t.key === "Enter" || t.key === " ") && (t.preventDefault(), G());
    }, K = (t) => {
      v("focus", t);
    }, Y = (t) => {
      v("blur", t);
    }, N = (t) => {
      t.preventDefault(), t.stopPropagation(), !(e.disabled || e.readonly) && (C.value++, C.value === 1 && (y.value = true));
    }, d = (t) => {
      t.preventDefault(), t.stopPropagation(), !(e.disabled || e.readonly) && (C.value--, C.value === 0 && (y.value = false));
    }, V = (t) => {
      t.preventDefault(), t.stopPropagation(), !(e.disabled || e.readonly) && t.dataTransfer && (t.dataTransfer.dropEffect = "copy");
    }, ue = (t) => {
      var B;
      if (t.preventDefault(), t.stopPropagation(), e.disabled || e.readonly) return;
      y.value = false, C.value = 0;
      const I = (B = t.dataTransfer) == null ? void 0 : B.files;
      I && I.length > 0 && O(I);
    };
    return h2({
      focus: () => {
        var t;
        (t = w.value) == null || t.focus();
      },
      clear: () => {
        e.disabled || e.readonly || (v("update:value", []), v("change", []), P("Tous les fichiers ont été supprimés"));
      },
      fileInputRef: m,
      dropZoneRef: w
    }), (t, I) => (openBlock(), createElementBlock("div", rs, [
      t.label ? (openBlock(), createElementBlock("label", {
        key: 0,
        for: $.value,
        class: normalizeClass(["su-file-upload-label", {
          "su-file-upload-label--required": t.required,
          "su-file-upload-label--disabled": t.disabled
        }])
      }, [
        createTextVNode(toDisplayString(t.label) + " ", 1),
        t.required ? (openBlock(), createElementBlock("span", ns, "*")) : createCommentVNode("", true)
      ], 10, os)) : createCommentVNode("", true),
      createBaseVNode("div", {
        class: normalizeClass(M.value)
      }, [
        createBaseVNode("input", mergeProps({
          ref_key: "fileInputRef",
          ref: m,
          id: $.value,
          type: "file",
          accept: t.accept,
          multiple: t.multiple,
          disabled: t.disabled,
          required: t.required,
          class: "su-file-upload-input"
        }, F.value, {
          onChange: oe,
          onFocus: K,
          onBlur: Y
        }), null, 16, us),
        createBaseVNode("div", {
          ref_key: "dropZoneRef",
          ref: w,
          class: normalizeClass(i.value),
          tabindex: t.disabled ? -1 : 0,
          role: "button",
          "aria-label": t.placeholder,
          onClick: G,
          onKeydown: o,
          onDragenter: N,
          onDragleave: d,
          onDragover: V,
          onDrop: ue
        }, [
          createVNode(unref(Ue), {
            class: normalizeClass(["su-file-upload-icon", { "su-file-upload-icon--dragging": y.value }]),
            "aria-hidden": "true"
          }, null, 8, ["class"]),
          createBaseVNode("div", cs, [
            createBaseVNode("p", ps, toDisplayString(y.value ? t.dragText : t.placeholder), 1),
            createBaseVNode("p", fs, [
              createBaseVNode("button", {
                type: "button",
                class: "su-file-upload-browse-button",
                disabled: t.disabled || t.readonly,
                onClick: withModifiers(G, ["stop"])
              }, toDisplayString(t.browseText), 9, vs),
              t.accept || t.maxSize ? (openBlock(), createElementBlock("span", hs, [
                t.accept ? (openBlock(), createElementBlock("span", bs, " • " + toDisplayString(t.accept), 1)) : createCommentVNode("", true),
                t.maxSize ? (openBlock(), createElementBlock("span", ms, " • Max " + toDisplayString(u(t.maxSize)), 1)) : createCommentVNode("", true)
              ])) : createCommentVNode("", true)
            ])
          ])
        ], 42, ds),
        t.showFileList && k.value.length > 0 ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: "su-file-upload-list",
          role: "list",
          "aria-label": `${k.value.length} fichier(s) sélectionné(s)`
        }, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(k.value, (B) => (openBlock(), createElementBlock("div", {
            key: B.id,
            class: normalizeClass(["su-file-upload-item", `su-file-upload-item--${B.status}`]),
            role: "listitem"
          }, [
            createBaseVNode("div", ys, [
              B.preview ? (openBlock(), createElementBlock("img", {
                key: 0,
                src: B.preview,
                alt: `Aperçu de ${B.name}`,
                class: "su-file-upload-preview-image"
              }, null, 8, ks)) : (openBlock(), createBlock(resolveDynamicComponent(S(B.file)), {
                key: 1,
                class: "su-file-upload-item-icon",
                "aria-hidden": "true"
              }))
            ]),
            createBaseVNode("div", ws, [
              createBaseVNode("div", $s, toDisplayString(B.name), 1),
              createBaseVNode("div", Bs, [
                createBaseVNode("span", xs, toDisplayString(u(B.size)), 1),
                B.status === "uploading" && B.progress !== void 0 ? (openBlock(), createElementBlock("span", _s, toDisplayString(B.progress) + "% ", 1)) : createCommentVNode("", true),
                B.error ? (openBlock(), createElementBlock("span", Cs, toDisplayString(B.error), 1)) : createCommentVNode("", true)
              ])
            ]),
            createBaseVNode("div", qs, [
              B.status === "success" ? (openBlock(), createBlock(unref(Ge), {
                key: 0,
                class: "su-file-upload-status-icon su-file-upload-status-icon--success",
                "aria-hidden": "true"
              })) : B.status === "error" ? (openBlock(), createBlock(unref(Ye), {
                key: 1,
                class: "su-file-upload-status-icon su-file-upload-status-icon--error",
                "aria-hidden": "true"
              })) : B.status === "uploading" ? (openBlock(), createElementBlock("div", Ls, [...I[0] || (I[0] = [
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
            !t.disabled && !t.readonly ? (openBlock(), createElementBlock("button", {
              key: 0,
              type: "button",
              class: "su-file-upload-remove-button",
              "aria-label": `Supprimer ${B.name}`,
              onClick: (R) => te(B)
            }, [
              createVNode(unref(he), {
                class: "su-file-upload-remove-icon",
                "aria-hidden": "true"
              })
            ], 8, Is)) : createCommentVNode("", true)
          ], 2))), 128))
        ], 8, gs)) : createCommentVNode("", true)
      ], 2),
      t.message ? (openBlock(), createElementBlock("div", {
        key: 1,
        id: f.value,
        class: normalizeClass(["su-file-upload-message", `su-file-upload-message--${t.state}`]),
        "aria-live": t.state === "error" ? "assertive" : "polite"
      }, toDisplayString(t.message), 11, zs)) : createCommentVNode("", true)
    ]));
  }
});
var Rs = { class: "su-textarea-wrapper" };
var Fs = ["for"];
var Ss = {
  key: 0,
  class: "su-textarea-required",
  "aria-label": "requis"
};
var As = ["id", "value", "placeholder", "disabled", "readonly", "required", "rows"];
var Hs = {
  key: 1,
  class: "su-textarea-footer"
};
var Ms = ["id", "aria-live"];
var Ts = ["id", "aria-live"];
var Es = { class: "sr-only" };
var js = defineComponent({
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
  setup(b, { expose: h2, emit: a }) {
    const e = b, v = a, q = useAttrs(), m = ref(), w = computed(() => q.id || X("textarea")), y = computed(() => e.message ? `${w.value}-message` : void 0), C = computed(() => e.showCounter && e.maxLength ? `${w.value}-counter` : void 0), $ = computed(() => e.value || ""), f = computed(() => $.value.length), k = computed(() => e.maxLength ? e.maxLength - f.value : null), M = computed(() => e.maxLength ? k.value !== null && k.value <= e.maxLength * 0.1 : false), i = computed(() => e.maxLength ? k.value !== null && k.value < 0 : false), F = computed(() => [
      "su-textarea-container",
      `su-textarea-container--${e.size}`,
      `su-textarea-container--${e.state}`,
      {
        "su-textarea-container--disabled": e.disabled,
        "su-textarea-container--readonly": e.readonly,
        "su-textarea-container--auto-resize": e.autoResize,
        "su-textarea-container--over-limit": i.value
      }
    ]), u = computed(() => [
      "su-textarea",
      `su-textarea--${e.size}`,
      `su-textarea--${e.state}`,
      {
        "su-textarea--disabled": e.disabled,
        "su-textarea--readonly": e.readonly,
        "su-textarea--auto-resize": e.autoResize,
        "su-textarea--over-limit": i.value
      }
    ]), S = computed(() => [
      "su-textarea-counter",
      {
        "su-textarea-counter--near-limit": M.value,
        "su-textarea-counter--over-limit": i.value
      }
    ]), z = computed(() => {
      const d = {};
      e.ariaLabel && (d["aria-label"] = e.ariaLabel);
      const V = [
        e.ariaDescribedBy,
        y.value,
        C.value
      ].filter(Boolean);
      return V.length > 0 && (d["aria-describedby"] = V.join(" ")), e.ariaInvalid !== void 0 && (d["aria-invalid"] = e.ariaInvalid), e.ariaRequired !== void 0 && (d["aria-required"] = e.ariaRequired), e.required && (d["aria-required"] = "true"), (e.state === "error" || i.value) && (d["aria-invalid"] = "true"), d;
    }), L = computed(() => {
      const d = {};
      return e.autocomplete && (d.autocomplete = e.autocomplete), e.maxLength && (d.maxlength = e.maxLength), e.spellcheck !== void 0 && (d.spellcheck = e.spellcheck), e.wrap && (d.wrap = e.wrap), d;
    }), D = async () => {
      if (!e.autoResize || !m.value) return;
      await nextTick();
      const d = m.value, V = e.minRows ? e.minRows * 1.5 : 3 * 1.5, ue = e.maxRows ? e.maxRows * 1.5 : 10 * 1.5;
      d.style.height = "auto";
      const pe = d.scrollHeight, de = Math.max(V * 16, Math.min(ue * 16, pe));
      d.style.height = `${de}px`;
    }, O = (d) => {
      const V = d.target;
      v("update:value", V.value), v("input", d), e.autoResize && D();
    }, te = (d) => {
      v("change", d);
    }, oe = (d) => {
      v("focus", d);
    }, G = (d) => {
      v("blur", d);
    }, o = (d) => {
      v("keydown", d);
    }, K = (d) => {
      v("keyup", d);
    };
    return h2({
      focus: () => {
        var d;
        (d = m.value) == null || d.focus();
      },
      select: () => {
        var d;
        (d = m.value) == null || d.select();
      },
      textareaRef: m
    }), watch(() => e.value, () => {
      e.autoResize && D();
    }, { immediate: true }), watch(() => e.autoResize, (d) => {
      d && D();
    }), (d, V) => (openBlock(), createElementBlock("div", Rs, [
      d.label ? (openBlock(), createElementBlock("label", {
        key: 0,
        for: w.value,
        class: normalizeClass(["su-textarea-label", {
          "su-textarea-label--required": d.required,
          "su-textarea-label--disabled": d.disabled
        }])
      }, [
        createTextVNode(toDisplayString(d.label) + " ", 1),
        d.required ? (openBlock(), createElementBlock("span", Ss, "*")) : createCommentVNode("", true)
      ], 10, Fs)) : createCommentVNode("", true),
      createBaseVNode("div", {
        class: normalizeClass(F.value)
      }, [
        createBaseVNode("textarea", mergeProps({
          ref_key: "textareaRef",
          ref: m,
          id: w.value,
          class: u.value,
          value: d.value,
          placeholder: d.placeholder,
          disabled: d.disabled,
          readonly: d.readonly,
          required: d.required,
          rows: d.autoResize ? d.minRows : d.rows
        }, { ...L.value, ...z.value }, {
          onInput: O,
          onChange: te,
          onFocus: oe,
          onBlur: G,
          onKeydown: o,
          onKeyup: K
        }), null, 16, As)
      ], 2),
      d.message || d.showCounter && d.maxLength ? (openBlock(), createElementBlock("div", Hs, [
        d.message ? (openBlock(), createElementBlock("div", {
          key: 0,
          id: y.value,
          class: normalizeClass(["su-textarea-message", `su-textarea-message--${d.state}`]),
          "aria-live": d.state === "error" ? "assertive" : "polite"
        }, toDisplayString(d.message), 11, Ms)) : createCommentVNode("", true),
        d.showCounter && d.maxLength ? (openBlock(), createElementBlock("div", {
          key: 1,
          id: C.value,
          class: normalizeClass(S.value),
          "aria-live": M.value || i.value ? "polite" : "off"
        }, [
          createBaseVNode("span", Es, toDisplayString(i.value ? "Limite de caractères dépassée" : "Caractères restants") + ": ", 1),
          createTextVNode(" " + toDisplayString(f.value) + "/" + toDisplayString(d.maxLength), 1)
        ], 10, Ts)) : createCommentVNode("", true)
      ])) : createCommentVNode("", true)
    ]));
  }
});
var Ks = {
  install(b, h2 = {}) {
    const a = h2.prefix || "Su";
    b.component(`${a}Button`, ge), b.component(`${a}ButtonsGroup`, Fe), b.component(`${a}Input`, Ze), b.component(`${a}SelectBox`, _a), b.component(`${a}RadioGroup`, Ma), b.component(`${a}CheckboxGroup`, Ua), b.component(`${a}Switch`, is), b.component(`${a}FileUpload`, Ds), b.component(`${a}Textarea`, js);
  }
};
export {
  ge as Button,
  Fe as ButtonsGroup,
  Ua as CheckboxGroup,
  Ds as FileUpload,
  Ze as Input,
  Ma as RadioGroup,
  _a as SelectBox,
  is as Switch,
  js as Textarea,
  Ps as accessibility,
  Ks as default
};
//# sourceMappingURL=@surgeup_ds-vue.js.map
