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
  inject,
  mergeProps,
  nextTick,
  normalizeClass,
  normalizeStyle,
  onMounted,
  onUnmounted,
  openBlock,
  provide,
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
var Se = 0;
function ce(y = "su") {
  return `${y}-${++Se}-${Date.now().toString(36)}`;
}
function Ae(y) {
  return [
    "button:not([disabled])",
    "input:not([disabled])",
    "select:not([disabled])",
    "textarea:not([disabled])",
    "a[href]",
    '[tabindex]:not([tabindex="-1"])'
  ].some((a) => y.matches(a));
}
function _e(y) {
  const n = y.querySelectorAll(
    'button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), a[href], [tabindex]:not([tabindex="-1"])'
  ), a = n[0], e = n[n.length - 1], v = (w) => {
    w.key === "Tab" && (w.shiftKey ? document.activeElement === a && (w.preventDefault(), e.focus()) : document.activeElement === e && (w.preventDefault(), a.focus()));
  };
  return y.addEventListener("keydown", v), a == null || a.focus(), () => {
    y.removeEventListener("keydown", v);
  };
}
function Y(y, n = "polite") {
  const a = document.createElement("div");
  a.setAttribute("aria-live", n), a.setAttribute("aria-atomic", "true"), a.className = "sr-only", a.textContent = y, document.body.appendChild(a), setTimeout(() => {
    document.body.removeChild(a);
  }, 1e3);
}
function Me() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
function je() {
  return window.matchMedia("(prefers-contrast: high)").matches;
}
function He(y, n) {
  return 4.5;
}
function Te(y, n = "AA") {
  return y >= (n === "AAA" ? 7 : 4.5);
}
var ei = Object.freeze(Object.defineProperty({
  __proto__: null,
  announceToScreenReader: Y,
  generateId: ce,
  getContrastRatio: He,
  isContrastValid: Te,
  isFocusable: Ae,
  prefersHighContrast: je,
  prefersReducedMotion: Me,
  trapFocus: _e
}, Symbol.toStringTag, { value: "Module" }));
var Ee = { class: "su-form-field-wrapper" };
var Ke = ["for"];
var Pe = {
  key: 0,
  class: "su-indicator-required",
  "aria-label": "requis"
};
var Oe = ["id"];
var be = defineComponent({
  __name: "FormField",
  props: {
    label: {},
    message: {},
    state: { default: "default" },
    required: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false },
    ariaLabel: {},
    ariaDescribedBy: {}
  },
  setup(y) {
    const n = y, a = useAttrs(), e = computed(() => a.id || ce("field")), v = computed(() => n.message ? `${e.value}-message` : void 0);
    provide("fieldId", e.value), provide("messageId", v.value), provide("isRequired", n.required), provide("isDisabled", n.disabled), provide("fieldState", n.state);
    const w = computed(() => {
      const p = {};
      return n.state === "error" ? p["aria-live"] = "assertive" : (n.state === "success" || n.state === "warning") && (p["aria-live"] = "polite"), p;
    }), k = computed(() => [
      "su-form-field-message",
      `su-form-field-message--${n.state}`
    ]), x = computed(() => [
      "su-form-field-label",
      {
        "su-form-field-label--required": n.required,
        "su-form-field-label--disabled": n.disabled
      }
    ]);
    return (p, $) => (openBlock(), createElementBlock("div", Ee, [
      p.label ? (openBlock(), createElementBlock("label", {
        key: 0,
        for: e.value,
        class: normalizeClass(x.value)
      }, [
        createTextVNode(toDisplayString(p.label) + " ", 1),
        p.required ? (openBlock(), createElementBlock("span", Pe, "*")) : createCommentVNode("", true)
      ], 10, Ke)) : createCommentVNode("", true),
      renderSlot(p.$slots, "default", {
        fieldId: e.value,
        messageId: v.value,
        isRequired: p.required,
        isDisabled: p.disabled,
        fieldState: p.state
      }),
      p.message ? (openBlock(), createElementBlock("div", mergeProps({
        key: 1,
        id: v.value,
        class: k.value
      }, w.value), toDisplayString(p.message), 17, Oe)) : createCommentVNode("", true)
    ]));
  }
});
var Ve = ["disabled", "tabindex"];
var Ge = {
  key: 0,
  class: "su-button__spinner"
};
var Ze = {
  key: 1,
  class: "su-button__content"
};
var Ce = defineComponent({
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
  setup(y, { emit: n }) {
    const a = y, e = n, v = computed(() => [
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
    ]), w = computed(() => !(a.icon && a.iconDisplay === "only")), k = (h2) => {
      a.disabled || a.loading || e("click", h2);
    }, x = (h2) => {
      (h2.key === "Enter" || h2.key === " ") && (h2.preventDefault(), !a.disabled && !a.loading && e("click", h2)), e("keydown", h2);
    }, p = (h2) => {
      e("focus", h2);
    }, $ = (h2) => {
      e("blur", h2);
    }, L = computed(() => {
      const h2 = {};
      return a.ariaLabel && (h2["aria-label"] = a.ariaLabel), a.ariaDescribedBy && (h2["aria-describedby"] = a.ariaDescribedBy), a.ariaExpanded !== void 0 && (h2["aria-expanded"] = a.ariaExpanded), a.ariaPressed !== void 0 && (h2["aria-pressed"] = a.ariaPressed), a.role && (h2.role = a.role), a.loading && (h2["aria-busy"] = "true", h2["aria-live"] = "polite"), a.disabled && (h2["aria-disabled"] = "true"), a.icon && a.iconDisplay === "only" && !a.ariaLabel && console.warn('Button with icon and iconDisplay="only" should have an ariaLabel for accessibility'), h2;
    });
    return (h2, _) => (openBlock(), createElementBlock("button", mergeProps({
      class: v.value,
      disabled: h2.disabled || h2.loading,
      tabindex: h2.disabled ? -1 : h2.tabIndex
    }, L.value, {
      onClick: k,
      onKeydown: x,
      onFocus: p,
      onBlur: $
    }), [
      h2.loading ? (openBlock(), createElementBlock("span", Ge, [..._[0] || (_[0] = [
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
      h2.loading ? createCommentVNode("", true) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
        h2.icon ? (openBlock(), createBlock(resolveDynamicComponent(h2.icon), {
          key: 0,
          class: "su-button__icon",
          "aria-hidden": "true"
        })) : createCommentVNode("", true),
        w.value ? (openBlock(), createElementBlock("span", Ze, [
          renderSlot(h2.$slots, "default")
        ])) : createCommentVNode("", true)
      ], 64))
    ], 16, Ve));
  }
});
var Ne = defineComponent({
  __name: "ButtonsGroup",
  props: {
    gap: { default: "md" },
    size: {},
    variant: {},
    ariaLabel: {},
    ariaDescribedBy: {},
    role: {}
  },
  setup(y) {
    const n = y, a = useSlots(), e = computed(() => [
      "su-buttons-group",
      `su-buttons-group--gap-${n.gap}`,
      {
        "su-buttons-group--connected": n.gap === "none"
      }
    ]), v = computed(() => {
      if (!a.default) return [];
      const k = a.default(), x = [];
      for (const p of k)
        if (p.type === Ce) {
          const $ = { ...p.props };
          if (n.size && ($.size = n.size), n.variant && ($.variant = n.variant), n.gap === "none") {
            const L = $.class || "";
            $.class = `${L} su-buttons-group__button`.trim();
          }
          x.push(h(p.type, $, p == null ? void 0 : p.children));
        } else {
          if (p.type === Comment || p.type === Text || p.type === Fragment)
            continue;
          console.warn("ButtonsGroup expects only Button components as children. Found:", p.type);
        }
      return x;
    }), w = computed(() => {
      const k = {};
      return n.ariaLabel && (k["aria-label"] = n.ariaLabel), n.ariaDescribedBy && (k["aria-describedby"] = n.ariaDescribedBy), n.role && (k.role = n.role), k;
    });
    return (k, x) => (openBlock(), createElementBlock("div", mergeProps({ class: e.value }, w.value), [
      (openBlock(true), createElementBlock(Fragment, null, renderList(v.value, (p, $) => (openBlock(), createBlock(resolveDynamicComponent(p), { key: $ }))), 128))
    ], 16));
  }
});
function We(y, n) {
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
function Ue(y, n) {
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
function me(y, n) {
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
function Ye(y, n) {
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
function Qe(y, n) {
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
function Je(y, n) {
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
function Xe(y, n) {
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
function ea(y, n) {
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
function aa(y, n) {
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
function ge(y, n) {
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
var sa = {
  key: 1,
  class: "su-link__content"
};
var qe = defineComponent({
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
  setup(y, { emit: n }) {
    const a = y, e = n, v = computed(() => a.to !== void 0), w = computed(() => a.external || a.href && (a.href.startsWith("http") || a.href.startsWith("//") || a.target === "_blank")), k = computed(() => {
      const m = {};
      return v.value || (m.href = a.href, w.value ? (m.target = a.target || "_blank", m.rel = a.rel || "noopener noreferrer") : (a.target && (m.target = a.target), a.rel && (m.rel = a.rel))), a.ariaLabel && (m["aria-label"] = a.ariaLabel), a.ariaDescribedBy && (m["aria-describedby"] = a.ariaDescribedBy), a.role && (m.role = a.role), a.disabled ? (m["aria-disabled"] = "true", m.tabindex = -1) : m.tabindex = a.tabIndex, m;
    }), x = computed(() => [
      "su-link",
      `su-link--${a.variant}`,
      `su-link--${a.size}`,
      `su-link--underline-${a.underline}`,
      {
        "su-link--disabled": a.disabled,
        "su-link--external": w.value,
        "su-link--icon-only": a.icon && a.iconDisplay === "only",
        "su-link--icon-right": a.icon && a.iconDisplay === "right"
      }
    ]), p = computed(() => !(a.icon && a.iconDisplay === "only")), $ = (m) => {
      if (a.disabled) {
        m.preventDefault();
        return;
      }
      e("click", m);
    }, L = (m) => {
      if ((m.key === "Enter" || m.key === " ") && a.disabled) {
        m.preventDefault();
        return;
      }
      e("keydown", m);
    }, h2 = (m) => {
      e("focus", m);
    }, _ = (m) => {
      e("blur", m);
    };
    return a.icon && a.iconDisplay === "only" && !a.ariaLabel && console.warn('Link with icon and iconDisplay="only" should have an ariaLabel for accessibility'), (m, g) => (openBlock(), createBlock(resolveDynamicComponent(v.value ? "router-link" : "a"), mergeProps({ class: x.value }, v.value ? { to: m.to, ...k.value } : k.value, {
      onClick: $,
      onKeydown: L,
      onFocus: h2,
      onBlur: _
    }), {
      default: withCtx(() => [
        m.icon ? (openBlock(), createBlock(resolveDynamicComponent(m.icon), {
          key: 0,
          class: "su-link__icon",
          "aria-hidden": "true"
        })) : createCommentVNode("", true),
        p.value ? (openBlock(), createElementBlock("span", sa, [
          renderSlot(m.$slots, "default")
        ])) : createCommentVNode("", true),
        w.value && !m.icon && p.value ? (openBlock(), createBlock(unref(We), {
          key: 2,
          class: "su-link__external-icon",
          "aria-hidden": "true"
        })) : createCommentVNode("", true)
      ]),
      _: 3
    }, 16, ["class"]));
  }
});
var ia = defineComponent({
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
  setup(y) {
    const n = y, a = useSlots(), e = computed(() => [
      "su-links-group",
      `su-links-group--gap-${n.gap}`,
      `su-links-group--${n.direction}`,
      {
        "su-links-group--connected": n.gap === "none"
      }
    ]), v = computed(() => {
      if (!a.default) return [];
      const k = a.default(), x = [];
      for (const p of k)
        if (p.type === qe) {
          const $ = { ...p.props };
          if (n.size && ($.size = n.size), n.variant && ($.variant = n.variant), n.underline && ($.underline = n.underline), n.gap === "none") {
            const L = $.class || "";
            $.class = `${L} su-links-group__link`.trim();
          }
          x.push(h(p.type, $, p == null ? void 0 : p.children));
        } else {
          if (p.type === Comment || p.type === Text || p.type === Fragment)
            continue;
          console.warn("LinksGroup expects only Link components as children. Found:", p.type);
        }
      return x;
    }), w = computed(() => {
      const k = {};
      return n.ariaLabel && (k["aria-label"] = n.ariaLabel), n.ariaDescribedBy && (k["aria-describedby"] = n.ariaDescribedBy), n.role && (k.role = n.role), k;
    });
    return (k, x) => (openBlock(), createElementBlock("div", mergeProps({ class: e.value }, w.value), [
      (openBlock(true), createElementBlock(Fragment, null, renderList(v.value, (p, $) => (openBlock(), createBlock(resolveDynamicComponent(p), { key: $ }))), 128))
    ], 16));
  }
});
var la = ["dir"];
var ta = ["id", "type", "value", "placeholder", "disabled", "readonly", "required"];
var ra = ["dir"];
var oa = ["id", "type", "value", "placeholder", "disabled", "readonly", "required", "aria-describedby"];
var na = defineComponent({
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
  setup(y, { expose: n, emit: a }) {
    const e = y, v = a, w = ref(), k = inject("fieldId", ""), x = inject("messageId", ""), p = inject("isRequired", false), $ = inject("isDisabled", false), L = inject("fieldState", "default"), h2 = computed(() => L || e.state), _ = computed(() => p || e.required), m = computed(() => $ || e.disabled), g = computed(() => [
      "su-input-container",
      `su-input-container--${e.size}`,
      `su-input-container--${h2.value}`,
      {
        "su-input-container--disabled": m.value,
        "su-input-container--readonly": e.readonly,
        "su-input-container--has-prefix": e.prefix || e.prefixIcon,
        "su-input-container--has-suffix": e.suffix || e.suffixIcon,
        "su-input-container--rtl": e.dir === "rtl"
      }
    ]), M = computed(() => [
      "su-input",
      `su-input--${e.size}`,
      `su-input--${h2.value}`,
      `su-input--align-${e.textAlign}`,
      {
        "su-input--disabled": m.value,
        "su-input--readonly": e.readonly,
        "su-input--has-prefix": e.prefix || e.prefixIcon,
        "su-input--has-suffix": e.suffix || e.suffixIcon
      }
    ]), u = computed(() => {
      const o = {};
      e.ariaLabel && (o["aria-label"] = e.ariaLabel);
      const X = [
        e.ariaDescribedBy,
        x
      ].filter(Boolean);
      return X.length > 0 && (o["aria-describedby"] = X.join(" ")), e.ariaInvalid !== void 0 && (o["aria-invalid"] = e.ariaInvalid), e.ariaRequired !== void 0 && (o["aria-required"] = e.ariaRequired), _.value && (o["aria-required"] = "true"), h2.value === "error" && (o["aria-invalid"] = "true"), o;
    }), F = computed(() => {
      const o = {};
      return e.autocomplete && (o.autocomplete = e.autocomplete), e.min !== void 0 && (o.min = e.min), e.max !== void 0 && (o.max = e.max), e.step !== void 0 && (o.step = e.step), e.minLength !== void 0 && (o.minlength = e.minLength), e.maxLength !== void 0 && (o.maxlength = e.maxLength), e.pattern && (o.pattern = e.pattern), o;
    }), q = (o) => {
      const X = o.target, oe = e.type === "number" ? Number(X.value) : X.value;
      v("update:value", oe), v("input", o);
    }, d = (o) => {
      v("change", o);
    }, I = (o) => {
      v("focus", o);
    }, E = (o) => {
      v("blur", o);
    }, J = (o) => {
      v("keydown", o);
    }, ee = (o) => {
      v("keyup", o);
    }, G = (o) => {
      m.value || e.readonly || v("prefix-click", o);
    }, ae = (o) => {
      m.value || e.readonly || v("prefix-icon-click", o);
    }, se = (o) => {
      m.value || e.readonly || v("suffix-click", o);
    }, U = (o) => {
      m.value || e.readonly || v("suffix-icon-click", o);
    };
    return n({
      focus: () => {
        var o;
        (o = w.value) == null || o.focus();
      },
      select: () => {
        var o;
        (o = w.value) == null || o.select();
      },
      inputRef: w
    }), (o, X) => unref(k) ? (openBlock(), createElementBlock("div", {
      key: 0,
      class: normalizeClass(g.value),
      dir: o.dir
    }, [
      o.prefixIcon ? (openBlock(), createElementBlock("div", {
        key: 0,
        class: "su-input-prefix su-input-prefix--icon su-input-prefix--clickable",
        onClick: ae
      }, [
        (openBlock(), createBlock(resolveDynamicComponent(o.prefixIcon), {
          class: "su-input-icon",
          "aria-hidden": "true"
        }))
      ])) : o.prefix ? (openBlock(), createElementBlock("div", {
        key: 1,
        class: "su-input-prefix su-input-prefix--text su-input-prefix--clickable",
        onClick: G
      }, toDisplayString(o.prefix), 1)) : createCommentVNode("", true),
      createBaseVNode("input", mergeProps({
        ref_key: "inputRef",
        ref: w,
        id: unref(k),
        class: M.value,
        type: o.type,
        value: o.value,
        placeholder: o.placeholder,
        disabled: m.value,
        readonly: o.readonly,
        required: _.value
      }, { ...F.value, ...u.value }, {
        onInput: q,
        onChange: d,
        onFocus: I,
        onBlur: E,
        onKeydown: J,
        onKeyup: ee
      }), null, 16, ta),
      o.suffix ? (openBlock(), createElementBlock("div", {
        key: 2,
        class: "su-input-suffix su-input-suffix--text su-input-suffix--clickable",
        onClick: se
      }, toDisplayString(o.suffix), 1)) : o.suffixIcon ? (openBlock(), createElementBlock("div", {
        key: 3,
        class: "su-input-suffix su-input-suffix--icon su-input-suffix--clickable",
        onClick: U
      }, [
        (openBlock(), createBlock(resolveDynamicComponent(o.suffixIcon), {
          class: "su-input-icon",
          "aria-hidden": "true"
        }))
      ])) : createCommentVNode("", true)
    ], 10, la)) : (openBlock(), createBlock(be, {
      key: 1,
      label: o.label,
      message: o.message,
      state: o.state,
      required: o.required,
      disabled: o.disabled,
      ariaLabel: o.ariaLabel,
      ariaDescribedBy: o.ariaDescribedBy
    }, {
      default: withCtx(({ fieldId: oe, messageId: f }) => [
        createBaseVNode("div", {
          class: normalizeClass(g.value),
          dir: o.dir
        }, [
          o.prefixIcon ? (openBlock(), createElementBlock("div", {
            key: 0,
            class: "su-input-prefix su-input-prefix--icon su-input-prefix--clickable",
            onClick: ae
          }, [
            (openBlock(), createBlock(resolveDynamicComponent(o.prefixIcon), {
              class: "su-input-icon",
              "aria-hidden": "true"
            }))
          ])) : o.prefix ? (openBlock(), createElementBlock("div", {
            key: 1,
            class: "su-input-prefix su-input-prefix--text su-input-prefix--clickable",
            onClick: G
          }, toDisplayString(o.prefix), 1)) : createCommentVNode("", true),
          createBaseVNode("input", mergeProps({
            ref_key: "inputRef",
            ref: w,
            id: oe,
            class: M.value,
            type: o.type,
            value: o.value,
            placeholder: o.placeholder,
            disabled: o.disabled,
            readonly: o.readonly,
            required: o.required,
            "aria-describedby": f
          }, { ...F.value, ...u.value }, {
            onInput: q,
            onChange: d,
            onFocus: I,
            onBlur: E,
            onKeydown: J,
            onKeyup: ee
          }), null, 16, oa),
          o.suffix ? (openBlock(), createElementBlock("div", {
            key: 2,
            class: "su-input-suffix su-input-suffix--text su-input-suffix--clickable",
            onClick: se
          }, toDisplayString(o.suffix), 1)) : o.suffixIcon ? (openBlock(), createElementBlock("div", {
            key: 3,
            class: "su-input-suffix su-input-suffix--icon su-input-suffix--clickable",
            onClick: U
          }, [
            (openBlock(), createBlock(resolveDynamicComponent(o.suffixIcon), {
              class: "su-input-icon",
              "aria-hidden": "true"
            }))
          ])) : createCommentVNode("", true)
        ], 10, ra)
      ]),
      _: 1
    }, 8, ["label", "message", "state", "required", "disabled", "ariaLabel", "ariaDescribedBy"]));
  }
});
var ua = ["dir"];
var da = ["for"];
var ca = {
  key: 0,
  class: "su-indicator-required",
  "aria-label": "requis"
};
var fa = ["id", "tabindex"];
var pa = { class: "su-select-content" };
var va = {
  key: 0,
  class: "su-select-tags"
};
var ha = { class: "su-select-tag-label" };
var ba = ["aria-label", "onClick"];
var ya = {
  key: 0,
  class: "su-select-tag su-select-tag--more"
};
var ma = {
  key: 1,
  class: "su-select-display"
};
var ga = { class: "su-select-display-text" };
var ka = { class: "su-select-actions" };
var wa = {
  key: 0,
  class: "su-select-spinner"
};
var $a = ["id", "aria-multiselectable"];
var Ba = {
  key: 0,
  class: "su-select-search"
};
var xa = { class: "su-select-search-container" };
var La = ["placeholder", "value"];
var _a = { class: "su-select-options" };
var Ca = ["aria-label"];
var qa = ["aria-selected", "aria-disabled", "onClick", "onMouseenter"];
var Ia = {
  key: 0,
  class: "su-select-option-checkbox"
};
var Da = { class: "su-select-option-content" };
var za = { class: "su-select-option-label" };
var Ra = {
  key: 0,
  class: "su-select-option-description"
};
var Fa = {
  key: 1,
  class: "su-select-no-options"
};
var Sa = ["id", "aria-live"];
var Aa = defineComponent({
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
  setup(y, { expose: n, emit: a }) {
    const e = y, v = a, w = useAttrs(), k = ref(), x = ref(), p = ref(), $ = ref(), L = ref(false), h2 = ref(""), _ = ref(-1), m = ref(null), g = computed(() => w.id || ce("select")), M = computed(() => `${g.value}-listbox`), u = computed(() => e.groups && e.groups.length > 0 ? e.groups.flatMap(
      (t) => t.options.map((z) => ({ ...z, group: t.label }))
    ) : e.options || []), F = computed(() => {
      if (!e.searchable || !h2.value)
        return u.value;
      const t = h2.value.toLowerCase();
      return u.value.filter(
        (z) => z.label.toLowerCase().includes(t) || z.description && z.description.toLowerCase().includes(t)
      );
    }), q = computed(() => {
      const t = {};
      return F.value.forEach((z) => {
        const ie = z.group || "";
        t[ie] || (t[ie] = []), t[ie].push(z);
      }), t;
    }), d = computed({
      get() {
        return e.multiple ? Array.isArray(e.value) ? e.value : e.value !== void 0 && e.value !== null ? [e.value] : [] : e.value;
      },
      set(t) {
        v("update:value", t), v("change", t);
      }
    }), I = computed(() => {
      if (e.multiple) {
        const t = d.value;
        return t ? u.value.filter((z) => t.includes(z.value)) : [];
      } else {
        const t = d.value;
        return t != null ? u.value.filter((z) => z.value === t) : [];
      }
    }), E = computed(() => {
      var t;
      return I.value.length === 0 ? e.placeholder : e.multiple ? I.value.length === 1 ? I.value[0].label : `${I.value.length} éléments sélectionnés` : ((t = I.value[0]) == null ? void 0 : t.label) || e.placeholder;
    }), J = computed(() => [
      "su-select-container",
      `su-select-container--${e.size}`,
      `su-select-container--${e.state}`,
      {
        "su-select-container--disabled": e.disabled,
        "su-select-container--readonly": e.readonly,
        "su-select-container--open": L.value,
        "su-select-container--multiple": e.multiple,
        "su-select-container--rtl": e.dir === "rtl"
      }
    ]), ee = computed(() => [
      "su-select-trigger",
      `su-select-trigger--${e.size}`,
      `su-select-trigger--${e.state}`,
      `su-select-trigger--align-${e.textAlign}`,
      {
        "su-select-trigger--disabled": e.disabled,
        "su-select-trigger--readonly": e.readonly,
        "su-select-trigger--open": L.value,
        "su-select-trigger--has-value": I.value.length > 0,
        "su-select-trigger--placeholder": I.value.length === 0
      }
    ]), G = computed(() => e.message ? `${g.value}-message` : void 0), ae = computed(() => {
      const t = {
        "aria-haspopup": "listbox",
        "aria-expanded": L.value,
        "aria-controls": L.value ? M.value : void 0,
        role: "combobox"
      };
      if (e.ariaLabel && (t["aria-label"] = e.ariaLabel), e.ariaDescribedBy || G.value) {
        const z = [e.ariaDescribedBy, G.value].filter(Boolean).join(" ");
        t["aria-describedby"] = z;
      }
      return e.ariaInvalid !== void 0 && (t["aria-invalid"] = e.ariaInvalid), e.ariaRequired !== void 0 && (t["aria-required"] = e.ariaRequired), e.required && (t["aria-required"] = "true"), e.state === "error" && (t["aria-invalid"] = "true"), e.multiple && (t["aria-multiselectable"] = "true"), t;
    }), se = () => {
      e.disabled || e.readonly || (L.value ? N() : U());
    }, U = async () => {
      e.disabled || e.readonly || (L.value = true, h2.value = "", _.value = -1, v("open"), await nextTick(), e.searchable && $.value && $.value.focus(), p.value && (m.value = _e(p.value)));
    }, N = () => {
      L.value = false, _.value = -1, m.value && (m.value(), m.value = null), v("close"), x.value && x.value.focus();
    }, te = (t) => {
      if (t.disabled) return;
      let z;
      if (e.multiple) {
        const K = d.value || [];
        if (K.includes(t.value))
          z = K.filter((H) => H !== t.value);
        else {
          if (e.maxSelectedItems && K.length >= e.maxSelectedItems) {
            Y(`Maximum ${e.maxSelectedItems} éléments sélectionnables`);
            return;
          }
          z = [...K, t.value];
        }
      } else
        z = t.value;
      d.value = z;
      const ie = e.multiple && d.value.includes(t.value) ? "désélectionné" : "sélectionné";
      Y(`${t.label} ${ie}`), !e.multiple && e.closeOnSelect && N();
    }, o = (t) => {
      t.stopPropagation();
      const z = e.multiple ? [] : void 0;
      d.value = z, Y("Sélection effacée");
    }, X = (t, z) => {
      if (z.stopPropagation(), e.multiple) {
        const K = (d.value || []).filter((le) => le !== t.value);
        d.value = K, Y(`${t.label} retiré de la sélection`);
      }
    }, oe = (t) => {
      const z = t.target;
      h2.value = z.value, _.value = -1, v("search", h2.value);
    }, f = (t) => {
      switch (t.key) {
        case "Enter":
        case " ":
          if (t.preventDefault(), !L.value)
            U();
          else if (_.value >= 0) {
            const z = F.value[_.value];
            z && te(z);
          }
          break;
        case "Escape":
          t.preventDefault(), N();
          break;
        case "ArrowDown":
          t.preventDefault(), L.value ? _.value = Math.min(_.value + 1, F.value.length - 1) : U();
          break;
        case "ArrowUp":
          t.preventDefault(), L.value && (_.value = Math.max(_.value - 1, -1));
          break;
        case "Home":
          L.value && (t.preventDefault(), _.value = 0);
          break;
        case "End":
          L.value && (t.preventDefault(), _.value = F.value.length - 1);
          break;
        case "Tab":
          L.value && N();
          break;
      }
    }, i = (t) => {
      v("focus", t);
    }, D = (t) => {
      setTimeout(() => {
        L.value && k.value && !k.value.contains(document.activeElement) && (N(), v("blur", t));
      }, 0);
    }, C = (t) => {
      L.value && k.value && !k.value.contains(t.target) && N();
    };
    return n({
      focus: () => {
        var t;
        (t = x.value) == null || t.focus();
      },
      open: () => {
        U();
      },
      close: () => {
        N();
      },
      selectRef: k,
      inputRef: x
    }), onMounted(() => {
      document.addEventListener("click", C, { passive: true });
    }), onUnmounted(() => {
      document.removeEventListener("click", C, { passive: true }), m.value && m.value();
    }), watch(() => e.value, () => {
      _.value = -1;
    }), (t, z) => {
      var ie;
      return openBlock(), createElementBlock("div", {
        class: "su-select-wrapper",
        dir: t.dir
      }, [
        t.label ? (openBlock(), createElementBlock("label", {
          key: 0,
          for: g.value,
          class: normalizeClass(["su-select-label", {
            "su-select-label--required": t.required,
            "su-select-label--disabled": t.disabled
          }])
        }, [
          createTextVNode(toDisplayString(t.label) + " ", 1),
          t.required ? (openBlock(), createElementBlock("span", ca, "*")) : createCommentVNode("", true)
        ], 10, da)) : createCommentVNode("", true),
        createBaseVNode("div", {
          ref_key: "selectRef",
          ref: k,
          class: normalizeClass(J.value)
        }, [
          createBaseVNode("div", mergeProps({
            ref_key: "inputRef",
            ref: x,
            id: g.value,
            class: ee.value,
            tabindex: t.disabled ? -1 : 0
          }, ae.value, {
            onClick: se,
            onKeydown: f,
            onFocus: i,
            onBlur: D
          }), [
            createBaseVNode("div", pa, [
              t.multiple && I.value.length > 0 ? (openBlock(), createElementBlock("div", va, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(I.value.slice(0, 3), (K) => (openBlock(), createElementBlock("span", {
                  key: K.value,
                  class: "su-select-tag"
                }, [
                  K.icon ? (openBlock(), createBlock(resolveDynamicComponent(K.icon), {
                    key: 0,
                    class: "su-select-tag-icon",
                    "aria-hidden": "true"
                  })) : createCommentVNode("", true),
                  createBaseVNode("span", ha, toDisplayString(K.label), 1),
                  createBaseVNode("button", {
                    type: "button",
                    class: "su-select-tag-remove",
                    "aria-label": `Retirer ${K.label}`,
                    onClick: (le) => X(K, le)
                  }, [
                    createVNode(unref(ge), { class: "su-select-tag-remove-icon" })
                  ], 8, ba)
                ]))), 128)),
                I.value.length > 3 ? (openBlock(), createElementBlock("span", ya, " +" + toDisplayString(I.value.length - 3), 1)) : createCommentVNode("", true)
              ])) : (openBlock(), createElementBlock("div", ma, [
                (ie = I.value[0]) != null && ie.icon ? (openBlock(), createBlock(resolveDynamicComponent(I.value[0].icon), {
                  key: 0,
                  class: "su-select-display-icon",
                  "aria-hidden": "true"
                })) : createCommentVNode("", true),
                createBaseVNode("span", ga, toDisplayString(E.value), 1)
              ]))
            ]),
            createBaseVNode("div", ka, [
              t.loading ? (openBlock(), createElementBlock("div", wa, [...z[0] || (z[0] = [
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
              ])])) : t.clearable && I.value.length > 0 && !t.disabled && !t.readonly ? (openBlock(), createElementBlock("button", {
                key: 1,
                type: "button",
                class: "su-select-clear",
                "aria-label": "Effacer la sélection",
                onClick: o
              }, [
                createVNode(unref(ge), { class: "su-select-clear-icon" })
              ])) : createCommentVNode("", true),
              createVNode(unref(Ye), {
                class: normalizeClass(["su-select-chevron", { "su-select-chevron--open": L.value }]),
                "aria-hidden": "true"
              }, null, 8, ["class"])
            ])
          ], 16, fa),
          createVNode(Transition, { name: "su-select-dropdown" }, {
            default: withCtx(() => [
              L.value ? (openBlock(), createElementBlock("div", {
                key: 0,
                ref_key: "dropdownRef",
                ref: p,
                id: M.value,
                class: "su-select-dropdown",
                style: normalizeStyle({ maxHeight: t.maxHeight }),
                role: "listbox",
                "aria-multiselectable": t.multiple
              }, [
                t.searchable ? (openBlock(), createElementBlock("div", Ba, [
                  createBaseVNode("div", xa, [
                    createVNode(unref(ea), {
                      class: "su-select-search-icon",
                      "aria-hidden": "true"
                    }),
                    createBaseVNode("input", {
                      ref_key: "searchInputRef",
                      ref: $,
                      type: "text",
                      class: "su-select-search-input",
                      placeholder: t.searchPlaceholder,
                      value: h2.value,
                      onInput: oe,
                      onKeydown: f
                    }, null, 40, La)
                  ])
                ])) : createCommentVNode("", true),
                createBaseVNode("div", _a, [
                  F.value.length > 0 ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList(q.value, (K, le) => (openBlock(), createElementBlock(Fragment, { key: le }, [
                    le && e.groups && e.groups.length > 0 ? (openBlock(), createElementBlock("div", {
                      key: 0,
                      class: "su-select-group-header",
                      role: "group",
                      "aria-label": le
                    }, toDisplayString(le), 9, Ca)) : createCommentVNode("", true),
                    (openBlock(true), createElementBlock(Fragment, null, renderList(K, (H) => (openBlock(), createElementBlock("div", {
                      key: H.value,
                      class: normalizeClass(["su-select-option", {
                        "su-select-option--selected": t.multiple ? d.value.includes(H.value) : d.value === H.value,
                        "su-select-option--disabled": H.disabled,
                        "su-select-option--focused": F.value.indexOf(H) === _.value
                      }]),
                      role: "option",
                      "aria-selected": t.multiple ? d.value.includes(H.value) : d.value === H.value,
                      "aria-disabled": H.disabled,
                      onClick: (Ie) => te(H),
                      onMouseenter: (Ie) => _.value = F.value.indexOf(H)
                    }, [
                      t.multiple ? (openBlock(), createElementBlock("div", Ia, [
                        createBaseVNode("div", {
                          class: normalizeClass(["su-select-checkbox", {
                            "su-select-checkbox--checked": d.value.includes(H.value)
                          }])
                        }, [
                          d.value.includes(H.value) ? (openBlock(), createBlock(unref(me), {
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
                      createBaseVNode("div", Da, [
                        createBaseVNode("div", za, toDisplayString(H.label), 1),
                        H.description ? (openBlock(), createElementBlock("div", Ra, toDisplayString(H.description), 1)) : createCommentVNode("", true)
                      ]),
                      !t.multiple && d.value === H.value ? (openBlock(), createBlock(unref(me), {
                        key: 2,
                        class: "su-select-option-check",
                        "aria-hidden": "true"
                      })) : createCommentVNode("", true)
                    ], 42, qa))), 128))
                  ], 64))), 128)) : (openBlock(), createElementBlock("div", Fa, toDisplayString(h2.value ? t.noResultsText : t.noOptionsText), 1))
                ])
              ], 12, $a)) : createCommentVNode("", true)
            ]),
            _: 1
          })
        ], 2),
        t.message ? (openBlock(), createElementBlock("div", {
          key: 1,
          id: G.value,
          class: normalizeClass(["su-select-message", `su-select-message--${t.state}`]),
          "aria-live": t.state === "error" ? "assertive" : "polite"
        }, toDisplayString(t.message), 11, Sa)) : createCommentVNode("", true)
      ], 8, ua);
    };
  }
});
var Ma = { class: "su-radio-group-wrapper" };
var ja = {
  key: 0,
  class: "su-indicator-required",
  "aria-label": "requis"
};
var Ha = {
  key: 0,
  class: "su-radio-group-before"
};
var Ta = ["for"];
var Ea = ["id", "name", "value", "checked", "disabled", "required", "onChange"];
var Ka = { class: "su-radio-content" };
var Pa = { class: "su-radio-text" };
var Oa = { class: "su-radio-label" };
var Va = {
  key: 0,
  class: "su-radio-description"
};
var Ga = {
  key: 1,
  class: "su-radio-group-after"
};
var Za = ["id", "aria-live"];
var Na = defineComponent({
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
  setup(y, { emit: n }) {
    const a = y, e = n, v = useAttrs(), w = computed(() => v.id || ce("radio-group")), k = computed(() => a.message ? `${w.value}-message` : void 0), x = computed(() => a.name || w.value), p = computed(() => [
      "su-radio-group",
      `su-radio-group--${a.size}`,
      `su-radio-group--${a.state}`,
      `su-radio-group--${a.displayType}`,
      `su-radio-group--${a.direction}`,
      {
        "su-radio-group--disabled": a.disabled,
        "su-radio-group--scrollable": a.maxHeight
      }
    ]), $ = (g) => [
      "su-radio-option",
      `su-radio-option--${a.size}`,
      `su-radio-option--${a.state}`,
      `su-radio-option--${a.displayType}`,
      {
        "su-radio-option--selected": a.value === g.value,
        "su-radio-option--disabled": g.disabled || a.disabled
      }
    ], L = computed(() => {
      const g = {
        role: "radiogroup"
      };
      if (a.ariaLabel && (g["aria-label"] = a.ariaLabel), a.ariaDescribedBy || k.value) {
        const M = [a.ariaDescribedBy, k.value].filter(Boolean).join(" ");
        g["aria-describedby"] = M;
      }
      return a.required && (g["aria-required"] = "true"), a.state === "error" && (g["aria-invalid"] = "true"), g;
    }), h2 = (g) => {
      a.disabled || (e("update:value", g), e("change", g));
    }, _ = (g) => {
      e("focus", g);
    }, m = (g) => {
      e("blur", g);
    };
    return (g, M) => (openBlock(), createElementBlock("div", Ma, [
      createBaseVNode("fieldset", mergeProps({ class: p.value }, L.value), [
        g.label ? (openBlock(), createElementBlock("legend", {
          key: 0,
          class: normalizeClass(["su-radio-group-label", {
            "su-radio-group-label--required": g.required,
            "su-radio-group-label--disabled": g.disabled
          }])
        }, [
          createTextVNode(toDisplayString(g.label) + " ", 1),
          g.required ? (openBlock(), createElementBlock("span", ja, "*")) : createCommentVNode("", true)
        ], 2)) : createCommentVNode("", true),
        createBaseVNode("div", {
          class: "su-radio-group-options",
          style: normalizeStyle({ maxHeight: g.maxHeight || void 0, overflowY: g.maxHeight ? "auto" : void 0 })
        }, [
          g.$slots.before ? (openBlock(), createElementBlock("div", Ha, [
            renderSlot(g.$slots, "before")
          ])) : createCommentVNode("", true),
          (openBlock(true), createElementBlock(Fragment, null, renderList(g.options, (u) => (openBlock(), createElementBlock("label", {
            key: u.value,
            class: normalizeClass($(u)),
            for: `${w.value}-${u.value}`
          }, [
            createBaseVNode("input", {
              id: `${w.value}-${u.value}`,
              type: "radio",
              name: x.value,
              value: u.value,
              checked: g.value === u.value,
              disabled: u.disabled || g.disabled,
              required: g.required,
              class: "su-radio-input",
              onChange: (F) => h2(u.value),
              onFocus: _,
              onBlur: m
            }, null, 40, Ea),
            M[0] || (M[0] = createBaseVNode("div", { class: "su-radio-indicator" }, [
              createBaseVNode("div", { class: "su-radio-dot" })
            ], -1)),
            createBaseVNode("div", Ka, [
              u.icon ? (openBlock(), createBlock(resolveDynamicComponent(u.icon), {
                key: 0,
                class: "su-radio-icon",
                "aria-hidden": "true"
              })) : createCommentVNode("", true),
              createBaseVNode("div", Pa, [
                createBaseVNode("div", Oa, toDisplayString(u.label), 1),
                u.description ? (openBlock(), createElementBlock("div", Va, toDisplayString(u.description), 1)) : createCommentVNode("", true)
              ])
            ])
          ], 10, Ta))), 128))
        ], 4),
        g.$slots.after ? (openBlock(), createElementBlock("div", Ga, [
          renderSlot(g.$slots, "after")
        ])) : createCommentVNode("", true)
      ], 16),
      g.message ? (openBlock(), createElementBlock("div", {
        key: 0,
        id: k.value,
        class: normalizeClass(["su-radio-group-message", `su-radio-group-message--${g.state}`]),
        "aria-live": g.state === "error" ? "assertive" : "polite"
      }, toDisplayString(g.message), 11, Za)) : createCommentVNode("", true)
    ]));
  }
});
var Wa = { class: "su-checkbox-group-wrapper" };
var Ua = {
  key: 0,
  class: "su-indicator-required",
  "aria-label": "requis"
};
var Ya = {
  key: 0,
  class: "su-checkbox-group-before"
};
var Qa = ["for"];
var Ja = ["id", "value", "checked", "disabled", "required", "onChange"];
var Xa = { class: "su-checkbox-content" };
var es = { class: "su-checkbox-text" };
var as = { class: "su-checkbox-label" };
var ss = {
  key: 1,
  class: "su-checkbox-group-after"
};
var is = ["id", "aria-live"];
var ls = defineComponent({
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
  setup(y, { emit: n }) {
    const a = y, e = n, v = useAttrs(), w = computed(() => v.id || ce("checkbox-group")), k = computed(() => a.message ? `${w.value}-message` : void 0), x = computed({
      get() {
        return Array.isArray(a.value) ? a.value : [];
      },
      set(u) {
        e("update:value", u), e("change", u);
      }
    }), p = computed(() => [
      "su-checkbox-group",
      `su-checkbox-group--${a.size}`,
      `su-checkbox-group--${a.state}`,
      `su-checkbox-group--${a.displayType}`,
      `su-checkbox-group--${a.direction}`,
      {
        "su-checkbox-group--disabled": a.disabled,
        "su-checkbox-group--scrollable": a.maxHeight
      }
    ]), $ = (u) => [
      "su-checkbox-option",
      `su-checkbox-option--${a.size}`,
      `su-checkbox-option--${a.state}`,
      `su-checkbox-option--${a.displayType}`,
      {
        "su-checkbox-option--selected": x.value.includes(u.value),
        "su-checkbox-option--disabled": u.disabled || a.disabled
      }
    ], L = computed(() => {
      const u = {
        role: "group"
      };
      if (a.ariaLabel && (u["aria-label"] = a.ariaLabel), a.ariaDescribedBy || k.value) {
        const F = [a.ariaDescribedBy, k.value].filter(Boolean).join(" ");
        u["aria-describedby"] = F;
      }
      return a.required && (u["aria-required"] = "true"), a.state === "error" && (u["aria-invalid"] = "true"), u;
    }), h2 = (u, F) => {
      if (a.disabled) return;
      let q;
      if (F) {
        if (a.maxSelections && x.value.length >= a.maxSelections) {
          Y(`Maximum ${a.maxSelections} sélections autorisées`);
          return;
        }
        q = [...x.value, u];
      } else
        q = x.value.filter((E) => E !== u);
      x.value = q;
      const d = a.options.find((E) => E.value === u), I = F ? "sélectionné" : "désélectionné";
      Y(`${d == null ? void 0 : d.label} ${I}`);
    }, _ = (u) => {
      e("focus", u);
    }, m = (u) => {
      e("blur", u);
    }, g = (u) => x.value.includes(u), M = (u) => u.disabled || a.disabled;
    return (u, F) => (openBlock(), createElementBlock("div", Wa, [
      createBaseVNode("fieldset", mergeProps({ class: p.value }, L.value), [
        u.label ? (openBlock(), createElementBlock("legend", {
          key: 0,
          class: normalizeClass(["su-checkbox-group-label", {
            "su-checkbox-group-label--required": u.required,
            "su-checkbox-group-label--disabled": u.disabled
          }])
        }, [
          createTextVNode(toDisplayString(u.label) + " ", 1),
          u.required ? (openBlock(), createElementBlock("span", Ua, "*")) : createCommentVNode("", true)
        ], 2)) : createCommentVNode("", true),
        createBaseVNode("div", {
          class: "su-checkbox-group-options",
          style: normalizeStyle({ maxHeight: u.maxHeight || void 0, overflowY: u.maxHeight ? "auto" : void 0 })
        }, [
          u.$slots.before ? (openBlock(), createElementBlock("div", Ya, [
            renderSlot(u.$slots, "before")
          ])) : createCommentVNode("", true),
          (openBlock(true), createElementBlock(Fragment, null, renderList(u.options, (q) => (openBlock(), createElementBlock("label", {
            key: q.value,
            class: normalizeClass($(q)),
            for: `${w.value}-${q.value}`
          }, [
            createBaseVNode("input", {
              id: `${w.value}-${q.value}`,
              type: "checkbox",
              value: q.value,
              checked: g(q.value),
              disabled: M(q),
              required: u.required && x.value.length === 0,
              class: "su-checkbox-input",
              onChange: (d) => h2(q.value, d.target.checked),
              onFocus: _,
              onBlur: m
            }, null, 40, Ja),
            createBaseVNode("div", {
              class: normalizeClass(["su-checkbox-indicator", {
                "su-checkbox-indicator--checked": g(q.value),
                "su-checkbox-indicator--indeterminate": false
              }])
            }, [
              g(q.value) ? (openBlock(), createBlock(unref(me), {
                key: 0,
                class: "su-checkbox-check",
                "aria-hidden": "true"
              })) : createCommentVNode("", true)
            ], 2),
            createBaseVNode("div", Xa, [
              q.icon ? (openBlock(), createBlock(resolveDynamicComponent(q.icon), {
                key: 0,
                class: "su-checkbox-icon",
                "aria-hidden": "true"
              })) : createCommentVNode("", true),
              createBaseVNode("div", es, [
                createBaseVNode("div", as, toDisplayString(q.label), 1)
              ])
            ])
          ], 10, Qa))), 128))
        ], 4),
        u.$slots.after ? (openBlock(), createElementBlock("div", ss, [
          renderSlot(u.$slots, "after")
        ])) : createCommentVNode("", true)
      ], 16),
      u.message ? (openBlock(), createElementBlock("div", {
        key: 0,
        id: k.value,
        class: normalizeClass(["su-checkbox-group-message", `su-checkbox-group-message--${u.state}`]),
        "aria-live": u.state === "error" ? "assertive" : "polite"
      }, toDisplayString(u.message), 11, is)) : createCommentVNode("", true)
    ]));
  }
});
var ts = ["id", "tabindex"];
var rs = { class: "su-switch-track" };
var os = { class: "su-switch-thumb" };
var ns = { class: "su-switch-indicator" };
var us = {
  key: 0,
  class: "su-switch-icon su-switch-icon--check",
  viewBox: "0 0 16 16",
  "aria-hidden": "true"
};
var ds = {
  key: 1,
  class: "su-switch-icon su-switch-icon--cross",
  viewBox: "0 0 16 16",
  "aria-hidden": "true"
};
var cs = ["id", "tabindex", "aria-describedby"];
var fs = { class: "su-switch-track" };
var ps = { class: "su-switch-thumb" };
var vs = { class: "su-switch-indicator" };
var hs = {
  key: 0,
  class: "su-switch-icon su-switch-icon--check",
  viewBox: "0 0 16 16",
  "aria-hidden": "true"
};
var bs = {
  key: 1,
  class: "su-switch-icon su-switch-icon--cross",
  viewBox: "0 0 16 16",
  "aria-hidden": "true"
};
var ys = defineComponent({
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
  setup(y, { emit: n }) {
    const a = y, e = n, v = inject("fieldId", ""), w = inject("messageId", ""), k = inject("isRequired", false), x = inject("isDisabled", false), p = inject("fieldState", "default"), $ = computed(() => p || a.state), L = computed(() => k || a.required), h2 = computed(() => x || a.disabled), _ = computed(() => [
      "su-switch-container",
      `su-switch-container--${a.size}`,
      `su-switch-container--${$.value}`,
      {
        "su-switch-container--disabled": h2.value,
        "su-switch-container--readonly": a.readonly,
        "su-switch-container--has-labels": a.leftLabel || a.rightLabel,
        "su-switch-container--centered": a.leftLabel && a.rightLabel
      }
    ]), m = computed(() => [
      "su-switch",
      `su-switch--${a.size}`,
      `su-switch--${$.value}`,
      {
        "su-switch--checked": a.value,
        "su-switch--disabled": h2.value,
        "su-switch--readonly": a.readonly
      }
    ]), g = computed(() => {
      const d = {
        role: "switch",
        "aria-checked": a.value
      };
      a.ariaLabel && (d["aria-label"] = a.ariaLabel);
      const I = [
        a.ariaDescribedBy,
        w
      ].filter(Boolean);
      return I.length > 0 && (d["aria-describedby"] = I.join(" ")), a.ariaInvalid !== void 0 && (d["aria-invalid"] = a.ariaInvalid), a.ariaRequired !== void 0 && (d["aria-required"] = a.ariaRequired), L.value && (d["aria-required"] = "true"), $.value === "error" && (d["aria-invalid"] = "true"), d;
    }), M = () => {
      if (h2.value || a.readonly) return;
      const d = !a.value;
      e("update:value", d), e("change", d);
    }, u = (d) => {
      (d.key === " " || d.key === "Enter") && (d.preventDefault(), M()), e("keydown", d);
    }, F = (d) => {
      e("focus", d);
    }, q = (d) => {
      e("blur", d);
    };
    return (d, I) => unref(v) ? (openBlock(), createElementBlock("div", {
      key: 0,
      class: normalizeClass(_.value)
    }, [
      d.leftLabel ? (openBlock(), createElementBlock("span", {
        key: 0,
        class: normalizeClass(["su-switch-side-label su-switch-side-label--left", {
          "su-switch-side-label--active": !d.value,
          "su-switch-side-label--disabled": h2.value
        }])
      }, toDisplayString(d.leftLabel), 3)) : createCommentVNode("", true),
      createBaseVNode("div", mergeProps({
        id: unref(v),
        class: m.value,
        tabindex: h2.value ? -1 : 0
      }, g.value, {
        onClick: M,
        onKeydown: u,
        onFocus: F,
        onBlur: q
      }), [
        createBaseVNode("div", rs, [
          createBaseVNode("div", os, [
            createBaseVNode("div", ns, [
              d.value ? (openBlock(), createElementBlock("svg", us, [...I[0] || (I[0] = [
                createBaseVNode("path", { d: "M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" }, null, -1)
              ])])) : (openBlock(), createElementBlock("svg", ds, [...I[1] || (I[1] = [
                createBaseVNode("path", { d: "M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" }, null, -1)
              ])]))
            ])
          ])
        ])
      ], 16, ts),
      d.rightLabel ? (openBlock(), createElementBlock("span", {
        key: 1,
        class: normalizeClass(["su-switch-side-label su-switch-side-label--right", {
          "su-switch-side-label--active": d.value,
          "su-switch-side-label--disabled": h2.value
        }])
      }, toDisplayString(d.rightLabel), 3)) : createCommentVNode("", true)
    ], 2)) : (openBlock(), createBlock(be, {
      key: 1,
      label: d.label,
      message: d.message,
      state: d.state,
      required: d.required,
      disabled: d.disabled,
      ariaLabel: d.ariaLabel,
      ariaDescribedBy: d.ariaDescribedBy
    }, {
      default: withCtx(({ fieldId: E, messageId: J }) => [
        createBaseVNode("div", {
          class: normalizeClass(_.value)
        }, [
          d.leftLabel ? (openBlock(), createElementBlock("span", {
            key: 0,
            class: normalizeClass(["su-switch-side-label su-switch-side-label--left", {
              "su-switch-side-label--active": !d.value,
              "su-switch-side-label--disabled": d.disabled
            }])
          }, toDisplayString(d.leftLabel), 3)) : createCommentVNode("", true),
          createBaseVNode("div", mergeProps({
            id: E,
            class: m.value,
            tabindex: d.disabled ? -1 : 0,
            "aria-describedby": J
          }, g.value, {
            onClick: M,
            onKeydown: u,
            onFocus: F,
            onBlur: q
          }), [
            createBaseVNode("div", fs, [
              createBaseVNode("div", ps, [
                createBaseVNode("div", vs, [
                  d.value ? (openBlock(), createElementBlock("svg", hs, [...I[2] || (I[2] = [
                    createBaseVNode("path", { d: "M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" }, null, -1)
                  ])])) : (openBlock(), createElementBlock("svg", bs, [...I[3] || (I[3] = [
                    createBaseVNode("path", { d: "M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" }, null, -1)
                  ])]))
                ])
              ])
            ])
          ], 16, cs),
          d.rightLabel ? (openBlock(), createElementBlock("span", {
            key: 1,
            class: normalizeClass(["su-switch-side-label su-switch-side-label--right", {
              "su-switch-side-label--active": d.value,
              "su-switch-side-label--disabled": d.disabled
            }])
          }, toDisplayString(d.rightLabel), 3)) : createCommentVNode("", true)
        ], 2)
      ]),
      _: 1
    }, 8, ["label", "message", "state", "required", "disabled", "ariaLabel", "ariaDescribedBy"]));
  }
});
var ms = { class: "su-file-upload-wrapper" };
var gs = ["for"];
var ks = {
  key: 0,
  class: "su-indicator-required",
  "aria-label": "requis"
};
var ws = ["id", "accept", "multiple", "disabled", "required"];
var $s = ["tabindex", "aria-label"];
var Bs = { class: "su-file-upload-text" };
var xs = { class: "su-file-upload-primary-text" };
var Ls = { class: "su-file-upload-secondary-text" };
var _s = ["disabled"];
var Cs = { key: 0 };
var qs = { key: 0 };
var Is = { key: 1 };
var Ds = ["aria-label"];
var zs = { class: "su-file-upload-item-preview" };
var Rs = ["src", "alt"];
var Fs = { class: "su-file-upload-item-info" };
var Ss = { class: "su-file-upload-item-name" };
var As = { class: "su-file-upload-item-details" };
var Ms = { class: "su-file-upload-item-size" };
var js = {
  key: 0,
  class: "su-file-upload-item-progress"
};
var Hs = {
  key: 1,
  class: "su-file-upload-item-error"
};
var Ts = { class: "su-file-upload-item-status" };
var Es = {
  key: 2,
  class: "su-file-upload-spinner",
  "aria-hidden": "true"
};
var Ks = ["aria-label", "onClick"];
var Ps = ["id", "aria-live"];
var Os = defineComponent({
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
  setup(y, { expose: n, emit: a }) {
    const e = y, v = a, w = useAttrs(), k = ref(), x = ref(), p = ref(false), $ = ref(0), L = computed(() => w.id || ce("file-upload")), h2 = computed(() => e.message ? `${L.value}-message` : void 0), _ = computed(() => Array.isArray(e.value) ? e.value : []), m = computed(() => [
      "su-file-upload-container",
      `su-file-upload-container--${e.size}`,
      `su-file-upload-container--${e.state}`,
      {
        "su-file-upload-container--disabled": e.disabled,
        "su-file-upload-container--readonly": e.readonly,
        "su-file-upload-container--dragging": p.value,
        "su-file-upload-container--has-files": _.value.length > 0
      }
    ]), g = computed(() => [
      "su-file-upload-dropzone",
      `su-file-upload-dropzone--${e.size}`,
      `su-file-upload-dropzone--${e.state}`,
      {
        "su-file-upload-dropzone--disabled": e.disabled,
        "su-file-upload-dropzone--readonly": e.readonly,
        "su-file-upload-dropzone--dragging": p.value
      }
    ]), M = computed(() => {
      const i = {};
      if (e.ariaLabel && (i["aria-label"] = e.ariaLabel), e.ariaDescribedBy || h2.value) {
        const D = [e.ariaDescribedBy, h2.value].filter(Boolean).join(" ");
        i["aria-describedby"] = D;
      }
      return e.ariaInvalid !== void 0 && (i["aria-invalid"] = e.ariaInvalid), e.ariaRequired !== void 0 && (i["aria-required"] = e.ariaRequired), e.required && (i["aria-required"] = "true"), e.state === "error" && (i["aria-invalid"] = "true"), i;
    }), u = (i) => {
      if (i === 0) return "0 B";
      const D = 1024, C = ["B", "KB", "MB", "GB"], S = Math.floor(Math.log(i) / Math.log(D));
      return parseFloat((i / Math.pow(D, S)).toFixed(1)) + " " + C[S];
    }, F = (i) => i.type.startsWith("image/") ? aa : Je, q = (i) => i.type.startsWith("image/"), d = (i) => new Promise((D) => {
      if (!q(i)) {
        D("");
        return;
      }
      const C = new FileReader();
      C.onload = (S) => {
        var j;
        return D(((j = S.target) == null ? void 0 : j.result) || "");
      }, C.readAsDataURL(i);
    }), I = (i) => e.maxSize && i.size > e.maxSize ? `Le fichier "${i.name}" est trop volumineux (${u(i.size)}). Taille maximale : ${u(e.maxSize)}` : e.accept && !e.accept.split(",").map((S) => S.trim()).some((S) => {
      if (S.startsWith("."))
        return i.name.toLowerCase().endsWith(S.toLowerCase());
      if (S.includes("*")) {
        const j = S.split("/")[0];
        return i.type.startsWith(j);
      }
      return i.type === S;
    }) ? `Le type de fichier "${i.type}" n'est pas accepté pour "${i.name}"` : null, E = async (i) => {
      if (e.disabled || e.readonly) return;
      const D = Array.from(i), C = _.value;
      if (e.maxFiles && C.length + D.length > e.maxFiles) {
        const j = `Nombre maximum de fichiers dépassé (${e.maxFiles})`;
        v("error", j), Y(j, "assertive");
        return;
      }
      const S = [];
      for (const j of D) {
        const fe = I(j);
        if (fe) {
          v("error", fe, j), Y(fe, "assertive");
          continue;
        }
        const t = {
          id: ce("file"),
          file: j,
          name: j.name,
          size: j.size,
          type: j.type,
          status: "pending"
        };
        if (e.allowPreview && q(j))
          try {
            t.preview = await d(j);
          } catch (z) {
            console.warn("Erreur lors de la création de l'aperçu:", z);
          }
        S.push(t);
      }
      if (S.length > 0) {
        const j = e.multiple ? [...C, ...S] : S;
        v("update:value", j), v("change", j);
        const fe = S.length === 1 ? `Fichier "${S[0].name}" ajouté` : `${S.length} fichiers ajoutés`;
        Y(fe), S.forEach((t) => v("upload", t));
      }
    }, J = (i) => {
      if (e.disabled || e.readonly) return;
      const D = _.value.filter((C) => C.id !== i.id);
      v("update:value", D), v("change", D), v("remove", i), Y(`Fichier "${i.name}" supprimé`);
    }, ee = (i) => {
      const D = i.target;
      D.files && D.files.length > 0 && E(D.files), D.value = "";
    }, G = () => {
      var i;
      e.disabled || e.readonly || (i = k.value) == null || i.click();
    }, ae = (i) => {
      (i.key === "Enter" || i.key === " ") && (i.preventDefault(), G());
    }, se = (i) => {
      v("focus", i);
    }, U = (i) => {
      v("blur", i);
    }, N = (i) => {
      i.preventDefault(), i.stopPropagation(), !(e.disabled || e.readonly) && ($.value++, $.value === 1 && (p.value = true));
    }, te = (i) => {
      i.preventDefault(), i.stopPropagation(), !(e.disabled || e.readonly) && ($.value--, $.value === 0 && (p.value = false));
    }, o = (i) => {
      i.preventDefault(), i.stopPropagation(), !(e.disabled || e.readonly) && i.dataTransfer && (i.dataTransfer.dropEffect = "copy");
    }, X = (i) => {
      var C;
      if (i.preventDefault(), i.stopPropagation(), e.disabled || e.readonly) return;
      p.value = false, $.value = 0;
      const D = (C = i.dataTransfer) == null ? void 0 : C.files;
      D && D.length > 0 && E(D);
    };
    return n({
      focus: () => {
        var i;
        (i = x.value) == null || i.focus();
      },
      clear: () => {
        e.disabled || e.readonly || (v("update:value", []), v("change", []), Y("Tous les fichiers ont été supprimés"));
      },
      fileInputRef: k,
      dropZoneRef: x
    }), (i, D) => (openBlock(), createElementBlock("div", ms, [
      i.label ? (openBlock(), createElementBlock("label", {
        key: 0,
        for: L.value,
        class: normalizeClass(["su-file-upload-label", {
          "su-file-upload-label--required": i.required,
          "su-file-upload-label--disabled": i.disabled
        }])
      }, [
        createTextVNode(toDisplayString(i.label) + " ", 1),
        i.required ? (openBlock(), createElementBlock("span", ks, "*")) : createCommentVNode("", true)
      ], 10, gs)) : createCommentVNode("", true),
      createBaseVNode("div", {
        class: normalizeClass(m.value)
      }, [
        createBaseVNode("input", mergeProps({
          ref_key: "fileInputRef",
          ref: k,
          id: L.value,
          type: "file",
          accept: i.accept,
          multiple: i.multiple,
          disabled: i.disabled,
          required: i.required,
          class: "su-file-upload-input"
        }, M.value, {
          onChange: ee,
          onFocus: se,
          onBlur: U
        }), null, 16, ws),
        createBaseVNode("div", {
          ref_key: "dropZoneRef",
          ref: x,
          class: normalizeClass(g.value),
          tabindex: i.disabled ? -1 : 0,
          role: "button",
          "aria-label": i.placeholder,
          onClick: G,
          onKeydown: ae,
          onDragenter: N,
          onDragleave: te,
          onDragover: o,
          onDrop: X
        }, [
          createVNode(unref(Qe), {
            class: normalizeClass(["su-file-upload-icon", { "su-file-upload-icon--dragging": p.value }]),
            "aria-hidden": "true"
          }, null, 8, ["class"]),
          createBaseVNode("div", Bs, [
            createBaseVNode("p", xs, toDisplayString(p.value ? i.dragText : i.placeholder), 1),
            createBaseVNode("p", Ls, [
              createBaseVNode("button", {
                type: "button",
                class: "su-file-upload-browse-button",
                disabled: i.disabled || i.readonly,
                onClick: withModifiers(G, ["stop"])
              }, toDisplayString(i.browseText), 9, _s),
              i.accept || i.maxSize ? (openBlock(), createElementBlock("span", Cs, [
                i.accept ? (openBlock(), createElementBlock("span", qs, " • " + toDisplayString(i.accept), 1)) : createCommentVNode("", true),
                i.maxSize ? (openBlock(), createElementBlock("span", Is, " • Max " + toDisplayString(u(i.maxSize)), 1)) : createCommentVNode("", true)
              ])) : createCommentVNode("", true)
            ])
          ])
        ], 42, $s),
        i.showFileList && _.value.length > 0 ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: "su-file-upload-list",
          role: "list",
          "aria-label": `${_.value.length} fichier(s) sélectionné(s)`
        }, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(_.value, (C) => (openBlock(), createElementBlock("div", {
            key: C.id,
            class: normalizeClass(["su-file-upload-item", `su-file-upload-item--${C.status}`]),
            role: "listitem"
          }, [
            createBaseVNode("div", zs, [
              C.preview ? (openBlock(), createElementBlock("img", {
                key: 0,
                src: C.preview,
                alt: `Aperçu de ${C.name}`,
                class: "su-file-upload-preview-image"
              }, null, 8, Rs)) : (openBlock(), createBlock(resolveDynamicComponent(F(C.file)), {
                key: 1,
                class: "su-file-upload-item-icon",
                "aria-hidden": "true"
              }))
            ]),
            createBaseVNode("div", Fs, [
              createBaseVNode("div", Ss, toDisplayString(C.name), 1),
              createBaseVNode("div", As, [
                createBaseVNode("span", Ms, toDisplayString(u(C.size)), 1),
                C.status === "uploading" && C.progress !== void 0 ? (openBlock(), createElementBlock("span", js, toDisplayString(C.progress) + "% ", 1)) : createCommentVNode("", true),
                C.error ? (openBlock(), createElementBlock("span", Hs, toDisplayString(C.error), 1)) : createCommentVNode("", true)
              ])
            ]),
            createBaseVNode("div", Ts, [
              C.status === "success" ? (openBlock(), createBlock(unref(Ue), {
                key: 0,
                class: "su-file-upload-status-icon su-file-upload-status-icon--success",
                "aria-hidden": "true"
              })) : C.status === "error" ? (openBlock(), createBlock(unref(Xe), {
                key: 1,
                class: "su-file-upload-status-icon su-file-upload-status-icon--error",
                "aria-hidden": "true"
              })) : C.status === "uploading" ? (openBlock(), createElementBlock("div", Es, [...D[0] || (D[0] = [
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
            !i.disabled && !i.readonly ? (openBlock(), createElementBlock("button", {
              key: 0,
              type: "button",
              class: "su-file-upload-remove-button",
              "aria-label": `Supprimer ${C.name}`,
              onClick: (S) => J(C)
            }, [
              createVNode(unref(ge), {
                class: "su-file-upload-remove-icon",
                "aria-hidden": "true"
              })
            ], 8, Ks)) : createCommentVNode("", true)
          ], 2))), 128))
        ], 8, Ds)) : createCommentVNode("", true)
      ], 2),
      i.message ? (openBlock(), createElementBlock("div", {
        key: 1,
        id: h2.value,
        class: normalizeClass(["su-file-upload-message", `su-file-upload-message--${i.state}`]),
        "aria-live": i.state === "error" ? "assertive" : "polite"
      }, toDisplayString(i.message), 11, Ps)) : createCommentVNode("", true)
    ]));
  }
});
var Vs = ["id", "value", "placeholder", "disabled", "readonly", "required", "rows"];
var Gs = {
  key: 0,
  class: "su-textarea-footer"
};
var Zs = ["id", "aria-live"];
var Ns = { class: "sr-only" };
var Ws = ["id", "value", "placeholder", "disabled", "readonly", "required", "rows", "aria-describedby"];
var Us = {
  key: 0,
  class: "su-textarea-footer"
};
var Ys = ["id", "aria-live"];
var Qs = { class: "sr-only" };
var Js = defineComponent({
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
  setup(y, { expose: n, emit: a }) {
    const e = y, v = a, w = ref(), k = inject("fieldId", ""), x = inject("messageId", ""), p = inject("isRequired", false), $ = inject("isDisabled", false), L = inject("fieldState", "default"), h2 = computed(() => L || e.state), _ = computed(() => p || e.required), m = computed(() => $ || e.disabled), g = computed(() => e.value || ""), M = computed(() => g.value.length), u = computed(() => e.maxLength ? e.maxLength - M.value : null), F = computed(() => e.maxLength ? u.value !== null && u.value <= e.maxLength * 0.1 : false), q = computed(() => e.maxLength ? u.value !== null && u.value < 0 : false), d = computed(() => [
      "su-textarea-container",
      `su-textarea-container--${e.size}`,
      `su-textarea-container--${h2.value}`,
      {
        "su-textarea-container--disabled": m.value,
        "su-textarea-container--readonly": e.readonly,
        "su-textarea-container--auto-resize": e.autoResize,
        "su-textarea-container--over-limit": q.value
      }
    ]), I = computed(() => [
      "su-textarea",
      `su-textarea--${e.size}`,
      `su-textarea--${h2.value}`,
      {
        "su-textarea--disabled": m.value,
        "su-textarea--readonly": e.readonly,
        "su-textarea--auto-resize": e.autoResize,
        "su-textarea--over-limit": q.value
      }
    ]), E = computed(() => [
      "su-textarea-counter",
      {
        "su-textarea-counter--near-limit": F.value,
        "su-textarea-counter--over-limit": q.value
      }
    ]), J = computed(() => {
      const f = {};
      e.ariaLabel && (f["aria-label"] = e.ariaLabel);
      const i = [
        e.ariaDescribedBy,
        x,
        e.showCounter && e.maxLength ? `${k || "textarea"}-counter` : null
      ].filter(Boolean);
      return i.length > 0 && (f["aria-describedby"] = i.join(" ")), e.ariaInvalid !== void 0 && (f["aria-invalid"] = e.ariaInvalid), e.ariaRequired !== void 0 && (f["aria-required"] = e.ariaRequired), _.value && (f["aria-required"] = "true"), (h2.value === "error" || q.value) && (f["aria-invalid"] = "true"), f;
    }), ee = computed(() => {
      const f = {};
      return e.autocomplete && (f.autocomplete = e.autocomplete), e.maxLength && (f.maxlength = e.maxLength), e.spellcheck !== void 0 && (f.spellcheck = e.spellcheck), e.wrap && (f.wrap = e.wrap), f;
    }), G = async () => {
      if (!e.autoResize || !w.value) return;
      await nextTick();
      const f = w.value, i = e.minRows ? e.minRows * 1.5 : 3 * 1.5, D = e.maxRows ? e.maxRows * 1.5 : 10 * 1.5;
      f.style.height = "auto";
      const C = f.scrollHeight, S = Math.max(i * 16, Math.min(D * 16, C));
      f.style.height = `${S}px`;
    }, ae = (f) => {
      const i = f.target;
      v("update:value", i.value), v("input", f), e.autoResize && G();
    }, se = (f) => {
      v("change", f);
    }, U = (f) => {
      v("focus", f);
    }, N = (f) => {
      v("blur", f);
    }, te = (f) => {
      v("keydown", f);
    }, o = (f) => {
      v("keyup", f);
    };
    return n({
      focus: () => {
        var f;
        (f = w.value) == null || f.focus();
      },
      select: () => {
        var f;
        (f = w.value) == null || f.select();
      },
      textareaRef: w
    }), watch(() => e.value, () => {
      e.autoResize && G();
    }, { immediate: true }), watch(() => e.autoResize, (f) => {
      f && G();
    }), (f, i) => unref(k) ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
      createBaseVNode("div", {
        class: normalizeClass(d.value)
      }, [
        createBaseVNode("textarea", mergeProps({
          ref_key: "textareaRef",
          ref: w,
          id: unref(k),
          class: I.value,
          value: f.value,
          placeholder: f.placeholder,
          disabled: m.value,
          readonly: f.readonly,
          required: _.value,
          rows: f.autoResize ? f.minRows : f.rows
        }, { ...ee.value, ...J.value }, {
          onInput: ae,
          onChange: se,
          onFocus: U,
          onBlur: N,
          onKeydown: te,
          onKeyup: o
        }), null, 16, Vs)
      ], 2),
      f.showCounter && f.maxLength ? (openBlock(), createElementBlock("div", Gs, [
        i[0] || (i[0] = createBaseVNode("div", { class: "su-textarea-footer-spacer" }, null, -1)),
        createBaseVNode("div", {
          id: `${unref(k)}-counter`,
          class: normalizeClass(E.value),
          "aria-live": F.value || q.value ? "polite" : "off"
        }, [
          createBaseVNode("span", Ns, toDisplayString(q.value ? "Limite de caractères dépassée" : "Caractères restants") + ": ", 1),
          createTextVNode(" " + toDisplayString(M.value) + "/" + toDisplayString(f.maxLength), 1)
        ], 10, Zs)
      ])) : createCommentVNode("", true)
    ], 64)) : (openBlock(), createBlock(be, {
      key: 1,
      label: f.label,
      message: f.message,
      state: f.state,
      required: f.required,
      disabled: f.disabled,
      ariaLabel: f.ariaLabel,
      ariaDescribedBy: f.ariaDescribedBy
    }, {
      default: withCtx(({ fieldId: D, messageId: C }) => [
        createBaseVNode("div", {
          class: normalizeClass(d.value)
        }, [
          createBaseVNode("textarea", mergeProps({
            ref_key: "textareaRef",
            ref: w,
            id: D,
            class: I.value,
            value: f.value,
            placeholder: f.placeholder,
            disabled: f.disabled,
            readonly: f.readonly,
            required: f.required,
            rows: f.autoResize ? f.minRows : f.rows,
            "aria-describedby": C
          }, { ...ee.value, ...J.value }, {
            onInput: ae,
            onChange: se,
            onFocus: U,
            onBlur: N,
            onKeydown: te,
            onKeyup: o
          }), null, 16, Ws)
        ], 2),
        f.showCounter && f.maxLength ? (openBlock(), createElementBlock("div", Us, [
          i[1] || (i[1] = createBaseVNode("div", { class: "su-textarea-footer-spacer" }, null, -1)),
          createBaseVNode("div", {
            id: `${D}-counter`,
            class: normalizeClass(E.value),
            "aria-live": F.value || q.value ? "polite" : "off"
          }, [
            createBaseVNode("span", Qs, toDisplayString(q.value ? "Limite de caractères dépassée" : "Caractères restants") + ": ", 1),
            createTextVNode(" " + toDisplayString(M.value) + "/" + toDisplayString(f.maxLength), 1)
          ], 10, Ys)
        ])) : createCommentVNode("", true)
      ]),
      _: 1
    }, 8, ["label", "message", "state", "required", "disabled", "ariaLabel", "ariaDescribedBy"]));
  }
});
var ai = {
  install(y, n = {}) {
    const a = n.prefix || "Su";
    y.component(`${a}FormField`, be), y.component(`${a}Button`, Ce), y.component(`${a}ButtonsGroup`, Ne), y.component(`${a}Link`, qe), y.component(`${a}LinksGroup`, ia), y.component(`${a}Input`, na), y.component(`${a}SelectBox`, Aa), y.component(`${a}RadioGroup`, Na), y.component(`${a}CheckboxGroup`, ls), y.component(`${a}Switch`, ys), y.component(`${a}FileUpload`, Os), y.component(`${a}Textarea`, Js);
  }
};
export {
  Ce as Button,
  Ne as ButtonsGroup,
  ls as CheckboxGroup,
  Os as FileUpload,
  be as FormField,
  na as Input,
  qe as Link,
  ia as LinksGroup,
  Na as RadioGroup,
  Aa as SelectBox,
  ys as Switch,
  Js as Textarea,
  ei as accessibility,
  ai as default
};
//# sourceMappingURL=@surgeup_ds-vue.js.map
