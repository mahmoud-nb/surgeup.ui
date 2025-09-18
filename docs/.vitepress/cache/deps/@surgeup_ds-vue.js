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
  mergeModels,
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
  useId,
  useModel,
  useSlots,
  watch,
  withCtx,
  withKeys,
  withModifiers
} from "./chunk-FJMVHDE5.js";

// ../package/dist/index.es.js
var He = { class: "su-form-field-wrapper" };
var Te = ["for"];
var Ke = {
  key: 0,
  class: "su-indicator-required",
  "aria-label": "requis"
};
var Ee = ["id"];
var ne = defineComponent({
  __name: "FormField",
  props: {
    fieldId: {},
    label: {},
    message: {},
    state: { default: "default" },
    required: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false }
  },
  setup(d) {
    const o = d, a = computed(() => o.message ? `${o.fieldId}-message` : void 0), e = computed(() => {
      const h2 = {};
      return o.state === "error" ? h2["aria-live"] = "assertive" : (o.state === "success" || o.state === "warning") && (h2["aria-live"] = "polite"), h2;
    }), y = computed(() => [
      "su-form-field-message",
      `su-form-field-message--${o.state}`
    ]), f = computed(() => [
      "su-form-field-label",
      {
        "su-form-field-label--required": o.required,
        "su-form-field-label--disabled": o.disabled
      }
    ]);
    return (h2, x) => (openBlock(), createElementBlock("div", He, [
      h2.label ? (openBlock(), createElementBlock("label", {
        key: 0,
        for: h2.fieldId,
        class: normalizeClass(f.value)
      }, [
        createTextVNode(toDisplayString(h2.label) + " ", 1),
        h2.required ? (openBlock(), createElementBlock("span", Ke, "*")) : createCommentVNode("", true)
      ], 10, Te)) : createCommentVNode("", true),
      renderSlot(h2.$slots, "default", {
        fieldId: h2.fieldId,
        messageId: a.value
      }),
      h2.message ? (openBlock(), createElementBlock("div", mergeProps({
        key: 1,
        id: a.value,
        class: y.value
      }, e.value), toDisplayString(h2.message), 17, Ee)) : createCommentVNode("", true)
    ]));
  }
});
var Pe = ["disabled", "tabindex"];
var Oe = {
  key: 0,
  class: "su-button__spinner"
};
var je = {
  key: 1,
  class: "su-button__content"
};
var De = defineComponent({
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
  setup(d, { emit: o }) {
    const a = d, e = o, y = computed(() => [
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
    ]), f = computed(() => !(a.icon && a.iconDisplay === "only")), h2 = (b) => {
      a.disabled || a.loading || e("click", b);
    }, x = (b) => {
      (b.key === "Enter" || b.key === " ") && (b.preventDefault(), !a.disabled && !a.loading && e("click", b)), e("keydown", b);
    }, m = (b) => {
      e("focus", b);
    }, g = (b) => {
      e("blur", b);
    }, _ = computed(() => {
      const b = {};
      return a.ariaLabel && (b["aria-label"] = a.ariaLabel), a.ariaDescribedBy && (b["aria-describedby"] = a.ariaDescribedBy), a.ariaExpanded !== void 0 && (b["aria-expanded"] = a.ariaExpanded), a.ariaPressed !== void 0 && (b["aria-pressed"] = a.ariaPressed), a.role && (b.role = a.role), a.loading && (b["aria-busy"] = "true", b["aria-live"] = "polite"), a.disabled && (b["aria-disabled"] = "true"), a.icon && a.iconDisplay === "only" && !a.ariaLabel && console.warn('Button with icon and iconDisplay="only" should have an ariaLabel for accessibility'), b;
    });
    return (b, k) => (openBlock(), createElementBlock("button", mergeProps({
      class: y.value,
      disabled: b.disabled || b.loading,
      tabindex: b.disabled ? -1 : b.tabIndex
    }, _.value, {
      onClick: h2,
      onKeydown: x,
      onFocus: m,
      onBlur: g
    }), [
      b.loading ? (openBlock(), createElementBlock("span", Oe, [...k[0] || (k[0] = [
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
        f.value ? (openBlock(), createElementBlock("span", je, [
          renderSlot(b.$slots, "default")
        ])) : createCommentVNode("", true)
      ], 64))
    ], 16, Pe));
  }
});
var Ge = defineComponent({
  __name: "ButtonsGroup",
  props: {
    gap: { default: "md" },
    size: {},
    variant: {},
    ariaLabel: {},
    ariaDescribedBy: {},
    role: {}
  },
  setup(d) {
    const o = d, a = useSlots(), e = computed(() => [
      "su-buttons-group",
      `su-buttons-group--gap-${o.gap}`,
      {
        "su-buttons-group--connected": o.gap === "none"
      }
    ]), y = computed(() => {
      if (!a.default) return [];
      const h2 = a.default(), x = [];
      for (const m of h2)
        if (m.type === De) {
          const g = { ...m.props };
          if (o.size && (g.size = o.size), o.variant && (g.variant = o.variant), o.gap === "none") {
            const _ = g.class || "";
            g.class = `${_} su-buttons-group__button`.trim();
          }
          x.push(h(m.type, g, m == null ? void 0 : m.children));
        } else {
          if (m.type === Comment || m.type === Text || m.type === Fragment)
            continue;
          console.warn("ButtonsGroup expects only Button components as children. Found:", m.type);
        }
      return x;
    }), f = computed(() => {
      const h2 = {};
      return o.ariaLabel && (h2["aria-label"] = o.ariaLabel), o.ariaDescribedBy && (h2["aria-describedby"] = o.ariaDescribedBy), o.role && (h2.role = o.role), h2;
    });
    return (h2, x) => (openBlock(), createElementBlock("div", mergeProps({ class: e.value }, f.value), [
      (openBlock(true), createElementBlock(Fragment, null, renderList(y.value, (m, g) => (openBlock(), createBlock(resolveDynamicComponent(m), { key: g }))), 128))
    ], 16));
  }
});
function Ze(d, o) {
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
function Ne(d, o) {
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
function we(d, o) {
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
function We(d, o) {
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
function Ue(d, o) {
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
function Ye(d, o) {
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
function Qe(d, o) {
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
function Je(d, o) {
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
function Xe(d, o) {
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
function $e(d, o) {
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
var ea = {
  key: 1,
  class: "su-link__content"
};
var Re = defineComponent({
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
  setup(d, { emit: o }) {
    const a = d, e = o, y = computed(() => a.to !== void 0), f = computed(() => a.external || a.href && (a.href.startsWith("http") || a.href.startsWith("//") || a.target === "_blank")), h2 = computed(() => {
      const s = {};
      return y.value || (s.href = a.href, f.value ? (s.target = a.target || "_blank", s.rel = a.rel || "noopener noreferrer") : (a.target && (s.target = a.target), a.rel && (s.rel = a.rel))), a.ariaLabel && (s["aria-label"] = a.ariaLabel), a.ariaDescribedBy && (s["aria-describedby"] = a.ariaDescribedBy), a.role && (s.role = a.role), a.disabled ? (s["aria-disabled"] = "true", s.tabindex = -1) : s.tabindex = a.tabIndex, s;
    }), x = computed(() => [
      "su-link",
      `su-link--${a.variant}`,
      `su-link--${a.size}`,
      `su-link--underline-${a.underline}`,
      {
        "su-link--disabled": a.disabled,
        "su-link--external": f.value,
        "su-link--icon-only": a.icon && a.iconDisplay === "only",
        "su-link--icon-right": a.icon && a.iconDisplay === "right"
      }
    ]), m = computed(() => !(a.icon && a.iconDisplay === "only")), g = (s) => {
      if (a.disabled) {
        s.preventDefault();
        return;
      }
      e("click", s);
    }, _ = (s) => {
      if ((s.key === "Enter" || s.key === " ") && a.disabled) {
        s.preventDefault();
        return;
      }
      e("keydown", s);
    }, b = (s) => {
      e("focus", s);
    }, k = (s) => {
      e("blur", s);
    };
    return a.icon && a.iconDisplay === "only" && !a.ariaLabel && console.warn('Link with icon and iconDisplay="only" should have an ariaLabel for accessibility'), (s, B) => (openBlock(), createBlock(resolveDynamicComponent(y.value ? "router-link" : "a"), mergeProps({ class: x.value }, y.value ? { to: s.to, ...h2.value } : h2.value, {
      onClick: g,
      onKeydown: _,
      onFocus: b,
      onBlur: k
    }), {
      default: withCtx(() => [
        s.icon ? (openBlock(), createBlock(resolveDynamicComponent(s.icon), {
          key: 0,
          class: "su-link__icon",
          "aria-hidden": "true"
        })) : createCommentVNode("", true),
        m.value ? (openBlock(), createElementBlock("span", ea, [
          renderSlot(s.$slots, "default")
        ])) : createCommentVNode("", true),
        f.value && !s.icon && m.value ? (openBlock(), createBlock(unref(Ze), {
          key: 2,
          class: "su-link__external-icon",
          "aria-hidden": "true"
        })) : createCommentVNode("", true)
      ]),
      _: 3
    }, 16, ["class"]));
  }
});
var aa = defineComponent({
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
  setup(d) {
    const o = d, a = useSlots(), e = computed(() => [
      "su-links-group",
      `su-links-group--gap-${o.gap}`,
      `su-links-group--${o.direction}`,
      {
        "su-links-group--connected": o.gap === "none"
      }
    ]), y = computed(() => {
      if (!a.default) return [];
      const h2 = a.default(), x = [];
      for (const m of h2)
        if (m.type === Re) {
          const g = { ...m.props };
          if (o.size && (g.size = o.size), o.variant && (g.variant = o.variant), o.underline && (g.underline = o.underline), o.gap === "none") {
            const _ = g.class || "";
            g.class = `${_} su-links-group__link`.trim();
          }
          x.push(h(m.type, g, m == null ? void 0 : m.children));
        } else {
          if (m.type === Comment || m.type === Text || m.type === Fragment)
            continue;
          console.warn("LinksGroup expects only Link components as children. Found:", m.type);
        }
      return x;
    }), f = computed(() => {
      const h2 = {};
      return o.ariaLabel && (h2["aria-label"] = o.ariaLabel), o.ariaDescribedBy && (h2["aria-describedby"] = o.ariaDescribedBy), o.role && (h2.role = o.role), h2;
    });
    return (h2, x) => (openBlock(), createElementBlock("div", mergeProps({ class: e.value }, f.value), [
      (openBlock(true), createElementBlock(Fragment, null, renderList(y.value, (m, g) => (openBlock(), createBlock(resolveDynamicComponent(m), { key: g }))), 128))
    ], 16));
  }
});
var sa = ["dir"];
var ta = ["tabindex", "onKeydown"];
var la = ["tabindex", "onKeydown"];
var ia = ["id", "type", "value", "placeholder", "disabled", "readonly", "required", "aria-describedby"];
var ra = ["tabindex", "onKeydown"];
var oa = ["tabindex", "onKeydown"];
var na = defineComponent({
  __name: "Input",
  props: mergeModels({
    type: { default: "text" },
    size: { default: "md" },
    state: { default: "default" },
    disabled: { type: Boolean, default: false },
    readonly: { type: Boolean, default: false },
    required: { type: Boolean, default: false },
    placeholder: {},
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
  }, {
    modelValue: { default: "" },
    modelModifiers: {}
  }),
  emits: mergeModels(["input", "change", "focus", "blur", "keydown", "keyup", "prefix-click", "prefix-icon-click", "suffix-click", "suffix-icon-click"], ["update:modelValue"]),
  setup(d, { expose: o, emit: a }) {
    const e = d, y = useModel(d, "modelValue"), f = a, h2 = useAttrs(), x = ref(), m = "input-" + useId(), g = computed(() => typeof h2.onPrefixClick == "function"), _ = computed(() => typeof h2.onPrefixIconClick == "function"), b = computed(() => typeof h2.onSuffixClick == "function"), k = computed(() => typeof h2.onSuffixIconClick == "function"), s = computed(() => [
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
    ]), B = computed(() => [
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
    ]), H = computed(() => {
      const r = {};
      return e.ariaLabel && (r["aria-label"] = e.ariaLabel), e.ariaInvalid !== void 0 && (r["aria-invalid"] = e.ariaInvalid), e.ariaRequired !== void 0 && (r["aria-required"] = e.ariaRequired), e.required && (r["aria-required"] = "true"), e.state === "error" && (r["aria-invalid"] = "true"), r;
    }), v = computed(() => {
      const r = {};
      return e.autocomplete && (r.autocomplete = e.autocomplete), e.min !== void 0 && (r.min = e.min), e.max !== void 0 && (r.max = e.max), e.step !== void 0 && (r.step = e.step), e.minLength !== void 0 && (r.minlength = e.minLength), e.maxLength !== void 0 && (r.maxlength = e.maxLength), e.pattern && (r.pattern = e.pattern), r;
    }), L = (r) => {
      const G = r.target;
      y.value = e.type === "number" ? Number(G.value) : G.value, f("input", r);
    }, M = (r) => {
      f("change", r);
    }, V = (r) => {
      f("focus", r);
    }, F = (r) => {
      f("blur", r);
    }, q = (r) => {
      f("keydown", r);
    }, A = (r) => {
      f("keyup", r);
    }, J = (r) => {
      e.disabled || e.readonly || f("prefix-click", r);
    }, X = (r) => {
      e.disabled || e.readonly || f("prefix-icon-click", r);
    }, ee = (r) => {
      e.disabled || e.readonly || f("suffix-click", r);
    }, se = (r) => {
      e.disabled || e.readonly || f("suffix-icon-click", r);
    };
    return o({
      focus: () => {
        var r;
        (r = x.value) == null || r.focus();
      },
      select: () => {
        var r;
        (r = x.value) == null || r.select();
      },
      inputRef: x
    }), (r, G) => (openBlock(), createBlock(ne, {
      fieldId: m,
      label: r.label,
      message: r.message,
      state: r.state,
      required: r.required,
      disabled: r.disabled
    }, {
      default: withCtx(({ fieldId: ue, messageId: ve }) => [
        createBaseVNode("div", {
          class: normalizeClass(s.value),
          dir: r.dir
        }, [
          r.prefixIcon ? (openBlock(), createElementBlock("div", {
            key: 0,
            class: normalizeClass(["su-input-prefix su-input-prefix--icon", { "su-input-prefix--clickable": _.value }]),
            tabindex: _.value && !r.disabled && !r.readonly ? 0 : -1,
            onClick: X,
            onKeydown: [
              withKeys(withModifiers(X, ["prevent"]), ["enter"]),
              withKeys(withModifiers(X, ["prevent"]), ["space"])
            ]
          }, [
            (openBlock(), createBlock(resolveDynamicComponent(r.prefixIcon), {
              class: "su-input-icon",
              "aria-hidden": "true"
            }))
          ], 42, ta)) : r.prefix ? (openBlock(), createElementBlock("div", {
            key: 1,
            class: normalizeClass(["su-input-prefix su-input-prefix--text", { "su-input-prefix--clickable": g.value }]),
            tabindex: g.value && !r.disabled && !r.readonly ? 0 : -1,
            onClick: J,
            onKeydown: [
              withKeys(withModifiers(J, ["prevent"]), ["enter"]),
              withKeys(withModifiers(J, ["prevent"]), ["space"])
            ]
          }, toDisplayString(r.prefix), 43, la)) : createCommentVNode("", true),
          createBaseVNode("input", mergeProps({
            ref_key: "inputRef",
            ref: x,
            id: ue,
            class: B.value,
            type: r.type,
            value: y.value,
            placeholder: r.placeholder,
            disabled: r.disabled,
            readonly: r.readonly,
            required: r.required,
            "aria-describedby": ve
          }, { ...v.value, ...H.value }, {
            onInput: L,
            onChange: M,
            onFocus: V,
            onBlur: F,
            onKeydown: q,
            onKeyup: A
          }), null, 16, ia),
          r.suffix ? (openBlock(), createElementBlock("div", {
            key: 2,
            class: normalizeClass(["su-input-suffix su-input-suffix--text", { "su-input-suffix--clickable": b.value }]),
            tabindex: b.value && !r.disabled && !r.readonly ? 0 : -1,
            onClick: ee,
            onKeydown: [
              withKeys(withModifiers(ee, ["prevent"]), ["enter"]),
              withKeys(withModifiers(ee, ["prevent"]), ["space"])
            ]
          }, toDisplayString(r.suffix), 43, ra)) : r.suffixIcon ? (openBlock(), createElementBlock("div", {
            key: 3,
            class: normalizeClass(["su-input-suffix su-input-suffix--icon", { "su-input-suffix--clickable": k.value }]),
            tabindex: k.value && !r.disabled && !r.readonly ? 0 : -1,
            onClick: se,
            onKeydown: [
              withKeys(withModifiers(se, ["prevent"]), ["enter"]),
              withKeys(withModifiers(se, ["prevent"]), ["space"])
            ]
          }, [
            (openBlock(), createBlock(resolveDynamicComponent(r.suffixIcon), {
              class: "su-input-icon",
              "aria-hidden": "true"
            }))
          ], 42, oa)) : createCommentVNode("", true)
        ], 10, sa)
      ]),
      _: 1
    }, 8, ["label", "message", "state", "required", "disabled"]));
  }
});
var ua = 0;
function da(d = "su") {
  return `${d}-${++ua}-${Date.now().toString(36)}`;
}
function ca(d) {
  return [
    "button:not([disabled])",
    "input:not([disabled])",
    "select:not([disabled])",
    "textarea:not([disabled])",
    "a[href]",
    '[tabindex]:not([tabindex="-1"])'
  ].some((a) => d.matches(a));
}
function Fe(d) {
  const o = d.querySelectorAll(
    'button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), a[href], [tabindex]:not([tabindex="-1"])'
  ), a = o[0], e = o[o.length - 1], y = (f) => {
    f.key === "Tab" && (f.shiftKey ? document.activeElement === a && (f.preventDefault(), e.focus()) : document.activeElement === e && (f.preventDefault(), a.focus()));
  };
  return d.addEventListener("keydown", y), a == null || a.focus(), () => {
    d.removeEventListener("keydown", y);
  };
}
function N(d, o = "polite") {
  const a = document.createElement("div");
  a.setAttribute("aria-live", o), a.setAttribute("aria-atomic", "true"), a.className = "sr-only", a.textContent = d, document.body.appendChild(a), setTimeout(() => {
    document.body.removeChild(a);
  }, 1e3);
}
function fa() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
function pa() {
  return window.matchMedia("(prefers-contrast: high)").matches;
}
function ha(d, o) {
  return 4.5;
}
function ba(d, o = "AA") {
  return d >= (o === "AAA" ? 7 : 4.5);
}
var Hs = Object.freeze(Object.defineProperty({
  __proto__: null,
  announceToScreenReader: N,
  generateId: da,
  getContrastRatio: ha,
  isContrastValid: ba,
  isFocusable: ca,
  prefersHighContrast: pa,
  prefersReducedMotion: fa,
  trapFocus: Fe
}, Symbol.toStringTag, { value: "Module" }));
var va = ["dir"];
var ma = ["id", "tabindex", "aria-describedby"];
var ya = { class: "su-select-content" };
var ga = {
  key: 0,
  class: "su-select-tags"
};
var ka = { class: "su-select-tag-label" };
var wa = ["aria-label", "onClick"];
var $a = {
  key: 0,
  class: "su-select-tag su-select-tag--more"
};
var xa = {
  key: 1,
  class: "su-select-display"
};
var Ba = { class: "su-select-display-text" };
var _a = { class: "su-select-actions" };
var Ca = {
  key: 0,
  class: "su-select-spinner"
};
var La = ["id", "aria-multiselectable"];
var Ia = {
  key: 0,
  class: "su-select-search"
};
var qa = { class: "su-select-search-container" };
var za = ["placeholder", "value"];
var Da = ["aria-label"];
var Ra = ["aria-selected", "aria-disabled", "onClick", "onMouseenter"];
var Fa = {
  key: 0,
  class: "su-select-option-checkbox"
};
var Sa = { class: "su-select-option-content" };
var Aa = { class: "su-select-option-label" };
var Ma = {
  key: 0,
  class: "su-select-option-description"
};
var Va = {
  key: 1,
  class: "su-select-no-options"
};
var Ha = defineComponent({
  __name: "SelectBox",
  props: mergeModels({
    options: { default: () => [] },
    groups: { default: () => [] },
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
  }, {
    modelValue: {},
    modelModifiers: {}
  }),
  emits: mergeModels(["change", "open", "close", "search", "focus", "blur"], ["update:modelValue"]),
  setup(d, { expose: o, emit: a }) {
    const e = d, y = useModel(d, "modelValue"), f = a, h2 = useAttrs(), x = "selectbox-" + useId(), m = ref(), g = ref(), _ = ref(), b = ref(), k = ref(false), s = ref(""), B = ref(-1), H = ref(null), v = computed(() => h2.id || x), L = computed(() => `${v.value}-listbox`), M = computed(() => e.groups && e.groups.length > 0 ? e.groups.flatMap(
      (i) => i.options.map((C) => ({ ...C, group: i.label }))
    ) : e.options || []), V = computed(() => {
      if (!e.searchable || !s.value)
        return M.value;
      const i = s.value.toLowerCase();
      return M.value.filter(
        (C) => C.label.toLowerCase().includes(i) || C.description && C.description.toLowerCase().includes(i)
      );
    }), F = computed(() => {
      const i = {};
      return V.value.forEach((C) => {
        const te = C.group || "";
        i[te] || (i[te] = []), i[te].push(C);
      }), i;
    }), q = computed({
      get() {
        return e.multiple ? Array.isArray(y.value) ? y.value : y.value !== void 0 && y.value !== null ? [y.value] : [] : y.value;
      },
      set(i) {
        y.value = i, f("change", i);
      }
    }), A = computed(() => {
      if (e.multiple) {
        const i = q.value;
        return i ? M.value.filter((C) => i.includes(C.value)) : [];
      } else {
        const i = q.value;
        return i != null ? M.value.filter((C) => C.value === i) : [];
      }
    }), J = computed(() => {
      var i;
      return A.value.length === 0 ? e.placeholder : e.multiple ? A.value.length === 1 ? A.value[0].label : `${A.value.length} éléments sélectionnés` : ((i = A.value[0]) == null ? void 0 : i.label) || e.placeholder;
    }), X = computed(() => [
      "su-select-container",
      `su-select-container--${e.size}`,
      `su-select-container--${e.state}`,
      {
        "su-select-container--disabled": e.disabled,
        "su-select-container--readonly": e.readonly,
        "su-select-container--open": k.value,
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
        "su-select-trigger--open": k.value,
        "su-select-trigger--has-value": A.value.length > 0,
        "su-select-trigger--placeholder": A.value.length === 0
      }
    ]), se = computed(() => {
      const i = {
        "aria-haspopup": "listbox",
        "aria-expanded": k.value,
        "aria-controls": k.value ? L.value : void 0,
        role: "combobox"
      };
      return e.ariaLabel && (i["aria-label"] = e.ariaLabel), e.ariaInvalid !== void 0 && (i["aria-invalid"] = e.ariaInvalid), e.ariaRequired !== void 0 && (i["aria-required"] = e.ariaRequired), e.required && (i["aria-required"] = "true"), e.state === "error" && (i["aria-invalid"] = "true"), e.multiple && (i["aria-multiselectable"] = "true"), i;
    }), p = () => {
      e.disabled || e.readonly || (k.value ? r() : E());
    }, E = async () => {
      e.disabled || e.readonly || (k.value = true, s.value = "", B.value = -1, f("open"), await nextTick(), e.searchable && b.value && b.value.focus(), _.value && (H.value = Fe(_.value)));
    }, r = () => {
      k.value = false, B.value = -1, H.value && (H.value(), H.value = null), f("close"), g.value && g.value.focus();
    }, G = (i) => {
      if (i.disabled) return;
      let C;
      if (e.multiple) {
        const le = q.value || [];
        if (le.includes(i.value))
          C = le.filter((Q) => Q !== i.value);
        else {
          if (e.maxSelectedItems && le.length >= e.maxSelectedItems) {
            N(`Maximum ${e.maxSelectedItems} éléments sélectionnables`);
            return;
          }
          C = [...le, i.value];
        }
      } else
        C = i.value;
      q.value = C;
      const te = e.multiple && q.value.includes(i.value) ? "désélectionné" : "sélectionné";
      N(`${i.label} ${te}`), !e.multiple && e.closeOnSelect && r();
    }, ue = (i) => {
      i.stopPropagation();
      const C = e.multiple ? [] : void 0;
      q.value = C, N("Sélection effacée");
    }, ve = (i, C) => {
      if (C.stopPropagation(), e.multiple) {
        const le = (q.value || []).filter((me) => me !== i.value);
        q.value = le, N(`${i.label} retiré de la sélection`);
      }
    }, _e = (i) => {
      const C = i.target;
      s.value = C.value, B.value = -1, f("search", s.value);
    }, ge = (i) => {
      switch (i.key) {
        case "Enter":
        case " ":
          if (i.preventDefault(), !k.value)
            E();
          else if (B.value >= 0) {
            const C = V.value[B.value];
            C && G(C);
          }
          break;
        case "Escape":
          i.preventDefault(), r();
          break;
        case "ArrowDown":
          i.preventDefault(), k.value ? B.value = Math.min(B.value + 1, V.value.length - 1) : E();
          break;
        case "ArrowUp":
          i.preventDefault(), k.value && (B.value = Math.max(B.value - 1, -1));
          break;
        case "Home":
          k.value && (i.preventDefault(), B.value = 0);
          break;
        case "End":
          k.value && (i.preventDefault(), B.value = V.value.length - 1);
          break;
        case "Tab":
          k.value && r();
          break;
      }
    }, l = (i) => {
      f("focus", i);
    }, I = (i) => {
      setTimeout(() => {
        k.value && m.value && !m.value.contains(document.activeElement) && (r(), f("blur", i));
      }, 0);
    }, T = (i) => {
      k.value && m.value && !m.value.contains(i.target) && r();
    };
    return o({
      focus: () => {
        var i;
        (i = g.value) == null || i.focus();
      },
      open: () => {
        E();
      },
      close: () => {
        r();
      },
      selectRef: m,
      inputRef: g
    }), onMounted(() => {
      document.addEventListener("click", T, { passive: true });
    }), onUnmounted(() => {
      document.removeEventListener("click", T, { passive: true }), H.value && H.value();
    }), watch(y, () => {
      B.value = -1;
    }), (i, C) => (openBlock(), createBlock(ne, {
      fieldId: x,
      label: i.label,
      message: i.message,
      state: i.state,
      required: i.required,
      disabled: i.disabled
    }, {
      default: withCtx(({ fieldId: te, messageId: le }) => {
        var me;
        return [
          createBaseVNode("div", {
            class: "su-select-wrapper",
            dir: i.dir
          }, [
            createBaseVNode("div", {
              ref_key: "selectRef",
              ref: m,
              class: normalizeClass(X.value)
            }, [
              createBaseVNode("div", mergeProps({
                ref_key: "inputRef",
                ref: g,
                id: te,
                class: ee.value,
                tabindex: i.disabled ? -1 : 0
              }, se.value, {
                "aria-describedby": le,
                onClick: p,
                onKeydown: ge,
                onFocus: l,
                onBlur: I
              }), [
                createBaseVNode("div", ya, [
                  i.multiple && A.value.length > 0 ? (openBlock(), createElementBlock("div", ga, [
                    (openBlock(true), createElementBlock(Fragment, null, renderList(A.value.slice(0, 3), (Q) => (openBlock(), createElementBlock("span", {
                      key: Q.value,
                      class: "su-select-tag"
                    }, [
                      Q.icon ? (openBlock(), createBlock(resolveDynamicComponent(Q.icon), {
                        key: 0,
                        class: "su-select-tag-icon",
                        "aria-hidden": "true"
                      })) : createCommentVNode("", true),
                      createBaseVNode("span", ka, toDisplayString(Q.label), 1),
                      createBaseVNode("button", {
                        type: "button",
                        class: "su-select-tag-remove",
                        "aria-label": `Retirer ${Q.label}`,
                        onClick: (be) => ve(Q, be)
                      }, [
                        createVNode(unref($e), { class: "su-select-tag-remove-icon" })
                      ], 8, wa)
                    ]))), 128)),
                    A.value.length > 3 ? (openBlock(), createElementBlock("span", $a, " +" + toDisplayString(A.value.length - 3), 1)) : createCommentVNode("", true)
                  ])) : (openBlock(), createElementBlock("div", xa, [
                    (me = A.value[0]) != null && me.icon ? (openBlock(), createBlock(resolveDynamicComponent(A.value[0].icon), {
                      key: 0,
                      class: "su-select-display-icon",
                      "aria-hidden": "true"
                    })) : createCommentVNode("", true),
                    createBaseVNode("span", Ba, toDisplayString(J.value), 1)
                  ]))
                ]),
                createBaseVNode("div", _a, [
                  i.loading ? (openBlock(), createElementBlock("div", Ca, [...C[0] || (C[0] = [
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
                  ])])) : i.clearable && A.value.length > 0 && !i.disabled && !i.readonly ? (openBlock(), createElementBlock("button", {
                    key: 1,
                    type: "button",
                    class: "su-select-clear",
                    "aria-label": "Effacer la sélection",
                    onClick: ue
                  }, [
                    createVNode(unref($e), { class: "su-select-clear-icon" })
                  ])) : createCommentVNode("", true),
                  createVNode(unref(We), {
                    class: normalizeClass(["su-select-chevron", { "su-select-chevron--open": k.value }]),
                    "aria-hidden": "true"
                  }, null, 8, ["class"])
                ])
              ], 16, ma),
              createVNode(Transition, { name: "su-select-dropdown" }, {
                default: withCtx(() => [
                  k.value ? (openBlock(), createElementBlock("div", {
                    key: 0,
                    ref_key: "dropdownRef",
                    ref: _,
                    id: L.value,
                    class: "su-select-dropdown",
                    role: "listbox",
                    "aria-multiselectable": i.multiple
                  }, [
                    i.searchable ? (openBlock(), createElementBlock("div", Ia, [
                      createBaseVNode("div", qa, [
                        createVNode(unref(Je), {
                          class: "su-select-search-icon",
                          "aria-hidden": "true"
                        }),
                        createBaseVNode("input", {
                          ref_key: "searchInputRef",
                          ref: b,
                          type: "text",
                          class: "su-select-search-input",
                          placeholder: i.searchPlaceholder,
                          value: s.value,
                          onInput: _e,
                          onKeydown: ge
                        }, null, 40, za)
                      ])
                    ])) : createCommentVNode("", true),
                    createBaseVNode("div", {
                      class: "su-select-options",
                      style: normalizeStyle({ maxHeight: i.maxHeight })
                    }, [
                      V.value.length > 0 ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList(F.value, (Q, be) => (openBlock(), createElementBlock(Fragment, { key: be }, [
                        be && e.groups && e.groups.length > 0 ? (openBlock(), createElementBlock("div", {
                          key: 0,
                          class: "su-select-group-header",
                          role: "group",
                          "aria-label": be
                        }, toDisplayString(be), 9, Da)) : createCommentVNode("", true),
                        (openBlock(true), createElementBlock(Fragment, null, renderList(Q, (K) => (openBlock(), createElementBlock("div", {
                          key: K.value,
                          class: normalizeClass(["su-select-option", {
                            "su-select-option--selected": i.multiple ? q.value.includes(K.value) : q.value === K.value,
                            "su-select-option--disabled": K.disabled,
                            "su-select-option--focused": V.value.indexOf(K) === B.value
                          }]),
                          role: "option",
                          "aria-selected": i.multiple ? q.value.includes(K.value) : q.value === K.value,
                          "aria-disabled": K.disabled,
                          onClick: (Se) => G(K),
                          onMouseenter: (Se) => B.value = V.value.indexOf(K)
                        }, [
                          i.multiple ? (openBlock(), createElementBlock("div", Fa, [
                            createBaseVNode("div", {
                              class: normalizeClass(["su-select-checkbox", {
                                "su-select-checkbox--checked": q.value.includes(K.value)
                              }])
                            }, [
                              q.value.includes(K.value) ? (openBlock(), createBlock(unref(we), {
                                key: 0,
                                class: "su-select-checkbox-icon",
                                "aria-hidden": "true"
                              })) : createCommentVNode("", true)
                            ], 2)
                          ])) : createCommentVNode("", true),
                          K.icon ? (openBlock(), createBlock(resolveDynamicComponent(K.icon), {
                            key: 1,
                            class: "su-select-option-icon",
                            "aria-hidden": "true"
                          })) : createCommentVNode("", true),
                          createBaseVNode("div", Sa, [
                            createBaseVNode("div", Aa, toDisplayString(K.label), 1),
                            K.description ? (openBlock(), createElementBlock("div", Ma, toDisplayString(K.description), 1)) : createCommentVNode("", true)
                          ]),
                          !i.multiple && q.value === K.value ? (openBlock(), createBlock(unref(we), {
                            key: 2,
                            class: "su-select-option-check",
                            "aria-hidden": "true"
                          })) : createCommentVNode("", true)
                        ], 42, Ra))), 128))
                      ], 64))), 128)) : (openBlock(), createElementBlock("div", Va, toDisplayString(s.value ? i.noResultsText : i.noOptionsText), 1))
                    ], 4)
                  ], 8, La)) : createCommentVNode("", true)
                ]),
                _: 1
              })
            ], 2)
          ], 8, va)
        ];
      }),
      _: 1
    }, 8, ["label", "message", "state", "required", "disabled"]));
  }
});
var Ta = ["aria-describedby"];
var Ka = {
  key: 0,
  class: "su-radio-group-before"
};
var Ea = ["for"];
var Pa = ["id", "name", "value", "checked", "disabled", "required", "onChange"];
var Oa = { class: "su-radio-content" };
var ja = { class: "su-radio-text" };
var Ga = { class: "su-radio-label" };
var Za = {
  key: 0,
  class: "su-radio-description"
};
var Na = {
  key: 0,
  class: "su-radio-group-after"
};
var Wa = defineComponent({
  __name: "RadioGroup",
  props: mergeModels({
    options: { default: () => [] },
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
  }, {
    modelValue: {},
    modelModifiers: {}
  }),
  emits: mergeModels(["change", "focus", "blur"], ["update:modelValue"]),
  setup(d, { emit: o }) {
    const a = useModel(d, "modelValue"), e = d, y = o, f = "radio-group-" + useId(), h2 = computed(() => e.name || f), x = computed(() => [
      "su-radio-group",
      `su-radio-group--${e.size}`,
      `su-radio-group--${e.state}`,
      `su-radio-group--${e.displayType}`,
      `su-radio-group--${e.direction}`,
      {
        "su-radio-group--disabled": e.disabled,
        "su-radio-group--scrollable": e.maxHeight
      }
    ]), m = (s) => [
      "su-radio-option",
      `su-radio-option--${e.size}`,
      `su-radio-option--${e.state}`,
      `su-radio-option--${e.displayType}`,
      {
        "su-radio-option--selected": a.value === s.value,
        "su-radio-option--disabled": s.disabled || e.disabled
      }
    ], g = computed(() => {
      const s = {
        role: "radiogroup"
      };
      if (e.ariaLabel && (s["aria-label"] = e.ariaLabel), e.ariaDescribedBy) {
        const B = [e.ariaDescribedBy].filter(Boolean).join(" ");
        s["aria-describedby"] = B;
      }
      return e.required && (s["aria-required"] = "true"), e.state === "error" && (s["aria-invalid"] = "true"), s;
    }), _ = (s) => {
      e.disabled || (a.value = s, y("change", s));
    }, b = (s) => {
      y("focus", s);
    }, k = (s) => {
      y("blur", s);
    };
    return (s, B) => (openBlock(), createBlock(ne, {
      fieldId: f,
      label: s.label,
      message: s.message,
      state: s.state,
      required: s.required,
      disabled: s.disabled
    }, {
      default: withCtx(({ fieldId: H, messageId: v }) => [
        createBaseVNode("fieldset", mergeProps({ class: x.value }, g.value, { "aria-describedby": v }), [
          createBaseVNode("div", {
            class: "su-radio-group-options",
            style: normalizeStyle({ maxHeight: s.maxHeight || void 0, overflowY: s.maxHeight ? "auto" : void 0 })
          }, [
            s.$slots.before ? (openBlock(), createElementBlock("div", Ka, [
              renderSlot(s.$slots, "before")
            ])) : createCommentVNode("", true),
            (openBlock(true), createElementBlock(Fragment, null, renderList(s.options, (L) => (openBlock(), createElementBlock("label", {
              key: L.value,
              class: normalizeClass(m(L)),
              for: `${H}-${L.value}`
            }, [
              createBaseVNode("input", {
                id: `${H}-${L.value}`,
                type: "radio",
                name: h2.value,
                value: L.value,
                checked: a.value === L.value,
                disabled: L.disabled || s.disabled,
                required: s.required,
                class: "su-radio-input",
                onChange: (M) => _(L.value),
                onFocus: b,
                onBlur: k
              }, null, 40, Pa),
              B[0] || (B[0] = createBaseVNode("div", { class: "su-radio-indicator" }, [
                createBaseVNode("div", { class: "su-radio-dot" })
              ], -1)),
              createBaseVNode("div", Oa, [
                L.icon ? (openBlock(), createBlock(resolveDynamicComponent(L.icon), {
                  key: 0,
                  class: "su-radio-icon",
                  "aria-hidden": "true"
                })) : createCommentVNode("", true),
                createBaseVNode("div", ja, [
                  createBaseVNode("div", Ga, toDisplayString(L.label), 1),
                  L.description ? (openBlock(), createElementBlock("div", Za, toDisplayString(L.description), 1)) : createCommentVNode("", true)
                ])
              ])
            ], 10, Ea))), 128))
          ], 4),
          s.$slots.after ? (openBlock(), createElementBlock("div", Na, [
            renderSlot(s.$slots, "after")
          ])) : createCommentVNode("", true)
        ], 16, Ta)
      ]),
      _: 3
    }, 8, ["label", "message", "state", "required", "disabled"]));
  }
});
var Ua = ["aria-describedby"];
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
  key: 0,
  class: "su-checkbox-group-after"
};
var ts = defineComponent({
  __name: "CheckboxGroup",
  props: mergeModels({
    options: { default: () => [] },
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
  }, {
    modelValue: { default: () => [] },
    modelModifiers: {}
  }),
  emits: mergeModels(["change", "focus", "blur"], ["update:modelValue"]),
  setup(d, { emit: o }) {
    const a = d, e = useModel(d, "modelValue"), y = o, f = useAttrs(), h2 = "checkbox-group-" + useId();
    computed(() => f.id || h2);
    const x = computed({
      get() {
        return Array.isArray(e.value) ? e.value : [];
      },
      set(v) {
        e.value = v, y("change", v);
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
    ]), g = (v) => [
      "su-checkbox-option",
      `su-checkbox-option--${a.size}`,
      `su-checkbox-option--${a.state}`,
      `su-checkbox-option--${a.displayType}`,
      {
        "su-checkbox-option--selected": x.value.includes(v.value),
        "su-checkbox-option--disabled": v.disabled || a.disabled
      }
    ], _ = computed(() => {
      const v = {
        role: "group"
      };
      if (a.ariaLabel && (v["aria-label"] = a.ariaLabel), a.ariaDescribedBy) {
        const L = [a.ariaDescribedBy].filter(Boolean).join(" ");
        v["aria-describedby"] = L;
      }
      return a.required && (v["aria-required"] = "true"), a.state === "error" && (v["aria-invalid"] = "true"), v;
    }), b = (v, L) => {
      if (a.disabled) return;
      let M;
      if (L) {
        if (a.maxSelections && x.value.length >= a.maxSelections) {
          N(`Maximum ${a.maxSelections} sélections autorisées`);
          return;
        }
        M = [...x.value, v];
      } else
        M = x.value.filter((q) => q !== v);
      x.value = M;
      const V = a.options.find((q) => q.value === v), F = L ? "sélectionné" : "désélectionné";
      N(`${V == null ? void 0 : V.label} ${F}`);
    }, k = (v) => {
      y("focus", v);
    }, s = (v) => {
      y("blur", v);
    }, B = (v) => x.value.includes(v), H = (v) => v.disabled || a.disabled;
    return (v, L) => (openBlock(), createBlock(ne, {
      fieldId: h2,
      label: v.label,
      message: v.message,
      state: v.state,
      required: v.required,
      disabled: v.disabled
    }, {
      default: withCtx(({ fieldId: M, messageId: V }) => [
        createBaseVNode("fieldset", mergeProps({ class: m.value }, _.value, { "aria-describedby": V }), [
          createBaseVNode("div", {
            class: "su-checkbox-group-options",
            style: normalizeStyle({ maxHeight: v.maxHeight || void 0, overflowY: v.maxHeight ? "auto" : void 0 })
          }, [
            v.$slots.before ? (openBlock(), createElementBlock("div", Ya, [
              renderSlot(v.$slots, "before")
            ])) : createCommentVNode("", true),
            (openBlock(true), createElementBlock(Fragment, null, renderList(v.options, (F) => (openBlock(), createElementBlock("label", {
              key: F.value,
              class: normalizeClass(g(F)),
              for: `${M}-${F.value}`
            }, [
              createBaseVNode("input", {
                id: `${M}-${F.value}`,
                type: "checkbox",
                value: F.value,
                checked: B(F.value),
                disabled: H(F),
                required: v.required && x.value.length === 0,
                class: "su-checkbox-input",
                onChange: (q) => b(F.value, q.target.checked),
                onFocus: k,
                onBlur: s
              }, null, 40, Ja),
              createBaseVNode("div", {
                class: normalizeClass(["su-checkbox-indicator", {
                  "su-checkbox-indicator--checked": B(F.value),
                  "su-checkbox-indicator--indeterminate": false
                }])
              }, [
                B(F.value) ? (openBlock(), createBlock(unref(we), {
                  key: 0,
                  class: "su-checkbox-check",
                  "aria-hidden": "true"
                })) : createCommentVNode("", true)
              ], 2),
              createBaseVNode("div", Xa, [
                F.icon ? (openBlock(), createBlock(resolveDynamicComponent(F.icon), {
                  key: 0,
                  class: "su-checkbox-icon",
                  "aria-hidden": "true"
                })) : createCommentVNode("", true),
                createBaseVNode("div", es, [
                  createBaseVNode("div", as, toDisplayString(F.label), 1)
                ])
              ])
            ], 10, Qa))), 128))
          ], 4),
          v.$slots.after ? (openBlock(), createElementBlock("div", ss, [
            renderSlot(v.$slots, "after")
          ])) : createCommentVNode("", true)
        ], 16, Ua)
      ]),
      _: 3
    }, 8, ["label", "message", "state", "required", "disabled"]));
  }
});
var ls = ["id", "tabindex", "aria-describedby"];
var is = { class: "su-switch-track" };
var rs = { class: "su-switch-thumb" };
var os = { class: "su-switch-indicator" };
var ns = {
  key: 0,
  class: "su-switch-icon su-switch-icon--check",
  viewBox: "0 0 16 16",
  "aria-hidden": "true"
};
var us = {
  key: 1,
  class: "su-switch-icon su-switch-icon--cross",
  viewBox: "0 0 16 16",
  "aria-hidden": "true"
};
var ds = defineComponent({
  __name: "Switch",
  props: mergeModels({
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
  }, {
    modelValue: { type: Boolean, default: false },
    modelModifiers: {}
  }),
  emits: mergeModels(["change", "focus", "blur", "keydown"], ["update:modelValue"]),
  setup(d, { emit: o }) {
    const a = d, e = useModel(d, "modelValue"), y = o, f = "switch-" + useId(), h2 = computed(() => [
      "su-switch-container",
      `su-switch-container--${a.size}`,
      `su-switch-container--${a.state}`,
      {
        "su-switch-container--disabled": a.disabled,
        "su-switch-container--readonly": a.readonly,
        "su-switch-container--has-labels": a.leftLabel || a.rightLabel,
        "su-switch-container--centered": a.leftLabel && a.rightLabel
      }
    ]), x = computed(() => [
      "su-switch",
      `su-switch--${a.size}`,
      `su-switch--${a.state}`,
      {
        "su-switch--checked": e.value,
        "su-switch--disabled": a.disabled,
        "su-switch--readonly": a.readonly
      }
    ]), m = computed(() => {
      const s = {
        role: "switch",
        "aria-checked": e.value
      };
      return a.ariaLabel && (s["aria-label"] = a.ariaLabel), a.ariaInvalid !== void 0 && (s["aria-invalid"] = a.ariaInvalid), a.ariaRequired !== void 0 && (s["aria-required"] = a.ariaRequired), a.required && (s["aria-required"] = "true"), a.state === "error" && (s["aria-invalid"] = "true"), s;
    }), g = () => {
      if (a.disabled || a.readonly) return;
      const s = !e.value;
      e.value = s, y("change", s);
    }, _ = (s) => {
      (s.key === " " || s.key === "Enter") && (s.preventDefault(), g()), y("keydown", s);
    }, b = (s) => {
      y("focus", s);
    }, k = (s) => {
      y("blur", s);
    };
    return (s, B) => (openBlock(), createBlock(ne, {
      fieldId: f,
      label: s.label,
      message: s.message,
      state: s.state,
      required: s.required,
      disabled: s.disabled
    }, {
      default: withCtx(({ fieldId: H, messageId: v }) => [
        createBaseVNode("div", {
          class: normalizeClass(h2.value)
        }, [
          s.leftLabel ? (openBlock(), createElementBlock("span", {
            key: 0,
            class: normalizeClass(["su-switch-side-label su-switch-side-label--left", {
              "su-switch-side-label--active": !e.value,
              "su-switch-side-label--disabled": s.disabled
            }])
          }, toDisplayString(s.leftLabel), 3)) : createCommentVNode("", true),
          createBaseVNode("div", mergeProps({
            id: H,
            class: x.value,
            tabindex: s.disabled ? -1 : 0,
            "aria-describedby": v
          }, m.value, {
            onClick: g,
            onKeydown: _,
            onFocus: b,
            onBlur: k
          }), [
            createBaseVNode("div", is, [
              createBaseVNode("div", rs, [
                createBaseVNode("div", os, [
                  e.value ? (openBlock(), createElementBlock("svg", ns, [...B[0] || (B[0] = [
                    createBaseVNode("path", { d: "M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" }, null, -1)
                  ])])) : (openBlock(), createElementBlock("svg", us, [...B[1] || (B[1] = [
                    createBaseVNode("path", { d: "M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" }, null, -1)
                  ])]))
                ])
              ])
            ])
          ], 16, ls),
          s.rightLabel ? (openBlock(), createElementBlock("span", {
            key: 1,
            class: normalizeClass(["su-switch-side-label su-switch-side-label--right", {
              "su-switch-side-label--active": e.value,
              "su-switch-side-label--disabled": s.disabled
            }])
          }, toDisplayString(s.rightLabel), 3)) : createCommentVNode("", true)
        ], 2)
      ]),
      _: 1
    }, 8, ["label", "message", "state", "required", "disabled"]));
  }
});
var cs = ["id", "accept", "multiple", "disabled", "required", "aria-describedby"];
var fs = ["tabindex", "aria-label"];
var ps = { class: "su-file-upload-text" };
var hs = { class: "su-file-upload-primary-text" };
var bs = { class: "su-file-upload-secondary-text" };
var vs = { key: 0 };
var ms = { key: 0 };
var ys = { key: 1 };
var gs = ["aria-label"];
var ks = { class: "su-file-upload-item-preview" };
var ws = ["src", "alt"];
var $s = { class: "su-file-upload-item-info" };
var xs = { class: "su-file-upload-item-name" };
var Bs = { class: "su-file-upload-item-details" };
var _s = { class: "su-file-upload-item-size" };
var Cs = {
  key: 0,
  class: "su-file-upload-item-progress"
};
var Ls = {
  key: 1,
  class: "su-file-upload-item-error"
};
var Is = { class: "su-file-upload-item-status" };
var qs = {
  key: 2,
  class: "su-file-upload-spinner",
  "aria-hidden": "true"
};
var zs = ["aria-label", "onClick"];
var Ds = defineComponent({
  __name: "FileUpload",
  props: mergeModels({
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
  }, {
    modelValue: { default: () => [] },
    modelModifiers: {}
  }),
  emits: mergeModels(["change", "upload", "remove", "error", "focus", "blur"], ["update:modelValue"]),
  setup(d, { expose: o, emit: a }) {
    const e = d, y = useModel(d, "modelValue"), f = a, h2 = useAttrs(), x = ref(), m = ref(), g = ref(false), _ = ref(0), b = "file-upload-" + useId();
    computed(() => h2.id || b);
    const k = computed(() => Array.isArray(y.value) ? y.value : []), s = computed(() => [
      "su-file-upload-container",
      `su-file-upload-container--${e.size}`,
      `su-file-upload-container--${e.state}`,
      {
        "su-file-upload-container--disabled": e.disabled,
        "su-file-upload-container--readonly": e.readonly,
        "su-file-upload-container--dragging": g.value,
        "su-file-upload-container--has-files": k.value.length > 0
      }
    ]), B = computed(() => [
      "su-file-upload-dropzone",
      `su-file-upload-dropzone--${e.size}`,
      `su-file-upload-dropzone--${e.state}`,
      {
        "su-file-upload-dropzone--disabled": e.disabled,
        "su-file-upload-dropzone--readonly": e.readonly,
        "su-file-upload-dropzone--dragging": g.value
      }
    ]), H = computed(() => {
      const l = {};
      if (e.ariaLabel && (l["aria-label"] = e.ariaLabel), e.ariaDescribedBy) {
        const I = [e.ariaDescribedBy].filter(Boolean).join(" ");
        l["aria-describedby"] = I;
      }
      return e.ariaInvalid !== void 0 && (l["aria-invalid"] = e.ariaInvalid), e.ariaRequired !== void 0 && (l["aria-required"] = e.ariaRequired), e.required && (l["aria-required"] = "true"), e.state === "error" && (l["aria-invalid"] = "true"), l;
    }), v = (l) => {
      if (l === 0) return "0 B";
      const I = 1024, T = ["B", "KB", "MB", "GB"], R = Math.floor(Math.log(l) / Math.log(I));
      return parseFloat((l / Math.pow(I, R)).toFixed(1)) + " " + T[R];
    }, L = (l) => l.type.startsWith("image/") ? Xe : Ye, M = (l) => `${l}-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`, V = (l) => l.type.startsWith("image/"), F = (l) => new Promise((I) => {
      if (!V(l)) {
        I("");
        return;
      }
      const T = new FileReader();
      T.onload = (R) => {
        var $;
        return I((($ = R.target) == null ? void 0 : $.result) || "");
      }, T.readAsDataURL(l);
    }), q = (l) => e.maxSize && l.size > e.maxSize ? `Le fichier "${l.name}" est trop volumineux (${v(l.size)}). Taille maximale : ${v(e.maxSize)}` : e.accept && !e.accept.split(",").map((R) => R.trim()).some((R) => {
      if (R.startsWith("."))
        return l.name.toLowerCase().endsWith(R.toLowerCase());
      if (R.includes("*")) {
        const $ = R.split("/")[0];
        return l.type.startsWith($);
      }
      return l.type === R;
    }) ? `Le type de fichier "${l.type}" n'est pas accepté pour "${l.name}"` : null, A = async (l) => {
      if (e.disabled || e.readonly) return;
      const I = Array.from(l), T = k.value;
      if (e.maxFiles && T.length + I.length > e.maxFiles) {
        const $ = `Nombre maximum de fichiers dépassé (${e.maxFiles})`;
        f("error", $), N($, "assertive");
        return;
      }
      const R = [];
      for (const $ of I) {
        const de = q($);
        if (de) {
          f("error", de, $), N(de, "assertive");
          continue;
        }
        const i = {
          id: M("file"),
          file: $,
          name: $.name,
          size: $.size,
          type: $.type,
          status: "pending"
        };
        if (e.allowPreview && V($))
          try {
            i.preview = await F($);
          } catch (C) {
            console.warn("Erreur lors de la création de l'aperçu:", C);
          }
        R.push(i);
      }
      if (R.length > 0) {
        const $ = e.multiple ? [...T, ...R] : R;
        y.value = $, f("change", $);
        const de = R.length === 1 ? `Fichier "${R[0].name}" ajouté` : `${R.length} fichiers ajoutés`;
        N(de), R.forEach((i) => f("upload", i));
      }
    }, J = (l) => {
      if (e.disabled || e.readonly) return;
      const I = k.value.filter((T) => T.id !== l.id);
      y.value = I, f("change", I), f("remove", l), N(`Fichier "${l.name}" supprimé`);
    }, X = (l) => {
      const I = l.target;
      I.files && I.files.length > 0 && A(I.files), I.value = "";
    }, ee = () => {
      var l;
      e.disabled || e.readonly || (l = x.value) == null || l.click();
    }, se = (l) => {
      (l.key === "Enter" || l.key === " ") && (l.preventDefault(), ee());
    }, p = (l) => {
      f("focus", l);
    }, E = (l) => {
      f("blur", l);
    }, r = (l) => {
      l.preventDefault(), l.stopPropagation(), !(e.disabled || e.readonly) && (_.value++, _.value === 1 && (g.value = true));
    }, G = (l) => {
      l.preventDefault(), l.stopPropagation(), !(e.disabled || e.readonly) && (_.value--, _.value === 0 && (g.value = false));
    }, ue = (l) => {
      l.preventDefault(), l.stopPropagation(), !(e.disabled || e.readonly) && l.dataTransfer && (l.dataTransfer.dropEffect = "copy");
    }, ve = (l) => {
      var T;
      if (l.preventDefault(), l.stopPropagation(), e.disabled || e.readonly) return;
      g.value = false, _.value = 0;
      const I = (T = l.dataTransfer) == null ? void 0 : T.files;
      I && I.length > 0 && A(I);
    };
    return o({
      focus: () => {
        var l;
        (l = m.value) == null || l.focus();
      },
      clear: () => {
        e.disabled || e.readonly || (y.value = [], f("change", []), N("Tous les fichiers ont été supprimés"));
      },
      fileInputRef: x,
      dropZoneRef: m
    }), (l, I) => (openBlock(), createBlock(ne, {
      fieldId: b,
      label: l.label,
      message: l.message,
      state: l.state,
      required: l.required,
      disabled: l.disabled
    }, {
      default: withCtx(({ fieldId: T, messageId: R }) => [
        createBaseVNode("div", {
          class: normalizeClass(s.value)
        }, [
          createBaseVNode("input", mergeProps({
            ref_key: "fileInputRef",
            ref: x,
            id: T,
            type: "file",
            accept: l.accept,
            multiple: l.multiple,
            disabled: l.disabled,
            required: l.required,
            "aria-describedby": R,
            class: "su-file-upload-input"
          }, H.value, {
            onChange: X,
            onFocus: p,
            onBlur: E
          }), null, 16, cs),
          createBaseVNode("div", {
            ref_key: "dropZoneRef",
            ref: m,
            class: normalizeClass(B.value),
            tabindex: l.disabled ? -1 : 0,
            role: "button",
            "aria-label": l.placeholder,
            onClick: ee,
            onKeydown: se,
            onDragenter: r,
            onDragleave: G,
            onDragover: ue,
            onDrop: ve
          }, [
            createVNode(unref(Ue), {
              class: normalizeClass(["su-file-upload-icon", { "su-file-upload-icon--dragging": g.value }]),
              "aria-hidden": "true"
            }, null, 8, ["class"]),
            createBaseVNode("div", ps, [
              createBaseVNode("p", hs, toDisplayString(g.value ? l.dragText : l.placeholder), 1),
              createBaseVNode("p", bs, [
                createTextVNode(toDisplayString(l.browseText) + " ", 1),
                l.accept || l.maxSize ? (openBlock(), createElementBlock("span", vs, [
                  l.accept ? (openBlock(), createElementBlock("span", ms, " • " + toDisplayString(l.accept), 1)) : createCommentVNode("", true),
                  l.maxSize ? (openBlock(), createElementBlock("span", ys, " • Max " + toDisplayString(v(l.maxSize)), 1)) : createCommentVNode("", true)
                ])) : createCommentVNode("", true)
              ])
            ])
          ], 42, fs),
          l.showFileList && k.value.length > 0 ? (openBlock(), createElementBlock("div", {
            key: 0,
            class: "su-file-upload-list",
            role: "list",
            "aria-label": `${k.value.length} fichier(s) sélectionné(s)`
          }, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(k.value, ($) => (openBlock(), createElementBlock("div", {
              key: $.id,
              class: normalizeClass(["su-file-upload-item", `su-file-upload-item--${$.status}`]),
              role: "listitem"
            }, [
              createBaseVNode("div", ks, [
                $.preview ? (openBlock(), createElementBlock("img", {
                  key: 0,
                  src: $.preview,
                  alt: `Aperçu de ${$.name}`,
                  class: "su-file-upload-preview-image"
                }, null, 8, ws)) : (openBlock(), createBlock(resolveDynamicComponent(L($.file)), {
                  key: 1,
                  class: "su-file-upload-item-icon",
                  "aria-hidden": "true"
                }))
              ]),
              createBaseVNode("div", $s, [
                createBaseVNode("div", xs, toDisplayString($.name), 1),
                createBaseVNode("div", Bs, [
                  createBaseVNode("span", _s, toDisplayString(v($.size)), 1),
                  $.status === "uploading" && $.progress !== void 0 ? (openBlock(), createElementBlock("span", Cs, toDisplayString($.progress) + "% ", 1)) : createCommentVNode("", true),
                  $.error ? (openBlock(), createElementBlock("span", Ls, toDisplayString($.error), 1)) : createCommentVNode("", true)
                ])
              ]),
              createBaseVNode("div", Is, [
                $.status === "success" ? (openBlock(), createBlock(unref(Ne), {
                  key: 0,
                  class: "su-file-upload-status-icon su-file-upload-status-icon--success",
                  "aria-hidden": "true"
                })) : $.status === "error" ? (openBlock(), createBlock(unref(Qe), {
                  key: 1,
                  class: "su-file-upload-status-icon su-file-upload-status-icon--error",
                  "aria-hidden": "true"
                })) : $.status === "uploading" ? (openBlock(), createElementBlock("div", qs, [...I[0] || (I[0] = [
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
                "aria-label": `Supprimer ${$.name}`,
                onClick: (de) => J($)
              }, [
                createVNode(unref($e), {
                  class: "su-file-upload-remove-icon",
                  "aria-hidden": "true"
                })
              ], 8, zs)) : createCommentVNode("", true)
            ], 2))), 128))
          ], 8, gs)) : createCommentVNode("", true)
        ], 2)
      ]),
      _: 1
    }, 8, ["label", "message", "state", "required", "disabled"]));
  }
});
var Rs = ["id", "value", "placeholder", "disabled", "readonly", "required", "rows", "aria-describedby"];
var Fs = {
  key: 0,
  class: "su-textarea-footer"
};
var Ss = ["id", "aria-live"];
var As = { class: "sr-only" };
var Ms = defineComponent({
  __name: "Textarea",
  props: mergeModels({
    size: { default: "md" },
    state: { default: "default" },
    disabled: { type: Boolean, default: false },
    readonly: { type: Boolean, default: false },
    required: { type: Boolean, default: false },
    placeholder: {},
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
  }, {
    modelValue: { default: "" },
    modelModifiers: {}
  }),
  emits: mergeModels(["input", "change", "focus", "blur", "keydown", "keyup"], ["update:modelValue"]),
  setup(d, { expose: o, emit: a }) {
    const e = d, y = useModel(d, "modelValue"), f = a, h2 = ref(), x = "textarea-" + useId(), m = computed(() => y.value || ""), g = computed(() => m.value.length), _ = computed(() => e.maxLength ? e.maxLength - g.value : null), b = computed(() => e.maxLength ? _.value !== null && _.value <= e.maxLength * 0.1 : false), k = computed(() => e.maxLength ? _.value !== null && _.value < 0 : false), s = computed(() => [
      "su-textarea-container",
      `su-textarea-container--${e.size}`,
      `su-textarea-container--${e.state}`,
      {
        "su-textarea-container--disabled": e.disabled,
        "su-textarea-container--readonly": e.readonly,
        "su-textarea-container--auto-resize": e.autoResize,
        "su-textarea-container--over-limit": k.value
      }
    ]), B = computed(() => [
      "su-textarea",
      `su-textarea--${e.size}`,
      `su-textarea--${e.state}`,
      {
        "su-textarea--disabled": e.disabled,
        "su-textarea--readonly": e.readonly,
        "su-textarea--auto-resize": e.autoResize,
        "su-textarea--over-limit": k.value
      }
    ]), H = computed(() => [
      "su-textarea-counter",
      {
        "su-textarea-counter--near-limit": b.value,
        "su-textarea-counter--over-limit": k.value
      }
    ]), v = computed(() => {
      const p = {};
      return e.ariaLabel && (p["aria-label"] = e.ariaLabel), e.ariaInvalid !== void 0 && (p["aria-invalid"] = e.ariaInvalid), e.ariaRequired !== void 0 && (p["aria-required"] = e.ariaRequired), e.required && (p["aria-required"] = "true"), (e.state === "error" || k.value) && (p["aria-invalid"] = "true"), p;
    }), L = computed(() => {
      const p = {};
      return e.autocomplete && (p.autocomplete = e.autocomplete), e.maxLength && (p.maxlength = e.maxLength), e.spellcheck !== void 0 && (p.spellcheck = e.spellcheck), e.wrap && (p.wrap = e.wrap), p;
    }), M = async () => {
      if (!e.autoResize || !h2.value) return;
      await nextTick();
      const p = h2.value, E = e.minRows ? e.minRows * 1.5 : 3 * 1.5, r = e.maxRows ? e.maxRows * 1.5 : 10 * 1.5;
      p.style.height = "auto";
      const G = p.scrollHeight, ue = Math.max(E * 16, Math.min(r * 16, G));
      p.style.height = `${ue}px`;
    }, V = (p) => {
      const E = p.target;
      y.value = E.value, f("input", p), e.autoResize && M();
    }, F = (p) => {
      f("change", p);
    }, q = (p) => {
      f("focus", p);
    }, A = (p) => {
      f("blur", p);
    }, J = (p) => {
      f("keydown", p);
    }, X = (p) => {
      f("keyup", p);
    };
    return o({
      focus: () => {
        var p;
        (p = h2.value) == null || p.focus();
      },
      select: () => {
        var p;
        (p = h2.value) == null || p.select();
      },
      textareaRef: h2
    }), watch(y, () => {
      e.autoResize && M();
    }, { immediate: true }), watch(() => e.autoResize, (p) => {
      p && M();
    }), (p, E) => (openBlock(), createBlock(ne, {
      fieldId: x,
      label: p.label,
      message: p.message,
      state: p.state,
      required: p.required,
      disabled: p.disabled
    }, {
      default: withCtx(({ fieldId: r, messageId: G }) => [
        createBaseVNode("div", null, [
          createBaseVNode("div", {
            class: normalizeClass(s.value)
          }, [
            createBaseVNode("textarea", mergeProps({
              ref_key: "textareaRef",
              ref: h2,
              id: r,
              class: B.value,
              value: y.value,
              placeholder: p.placeholder,
              disabled: p.disabled,
              readonly: p.readonly,
              required: p.required,
              rows: p.autoResize ? p.minRows : p.rows,
              "aria-describedby": G
            }, { ...L.value, ...v.value }, {
              onInput: V,
              onChange: F,
              onFocus: q,
              onBlur: A,
              onKeydown: J,
              onKeyup: X
            }), null, 16, Rs)
          ], 2),
          p.showCounter && p.maxLength ? (openBlock(), createElementBlock("div", Fs, [
            E[0] || (E[0] = createBaseVNode("div", { class: "su-textarea-footer-spacer" }, null, -1)),
            createBaseVNode("div", {
              id: `${r}-counter`,
              class: normalizeClass(H.value),
              "aria-live": b.value || k.value ? "polite" : "off"
            }, [
              createBaseVNode("span", As, toDisplayString(k.value ? "Limite de caractères dépassée" : "Caractères restants") + ": ", 1),
              createTextVNode(" " + toDisplayString(g.value) + "/" + toDisplayString(p.maxLength), 1)
            ], 10, Ss)
          ])) : createCommentVNode("", true)
        ])
      ]),
      _: 1
    }, 8, ["label", "message", "state", "required", "disabled"]));
  }
});
var Ts = {
  install(d, o = {}) {
    const a = o.prefix || "Su";
    d.component(`${a}FormField`, ne), d.component(`${a}Button`, De), d.component(`${a}ButtonsGroup`, Ge), d.component(`${a}Link`, Re), d.component(`${a}LinksGroup`, aa), d.component(`${a}Input`, na), d.component(`${a}SelectBox`, Ha), d.component(`${a}RadioGroup`, Wa), d.component(`${a}CheckboxGroup`, ts), d.component(`${a}Switch`, ds), d.component(`${a}FileUpload`, Ds), d.component(`${a}Textarea`, Ms);
  }
};
export {
  De as Button,
  Ge as ButtonsGroup,
  ts as CheckboxGroup,
  Ds as FileUpload,
  ne as FormField,
  na as Input,
  Re as Link,
  aa as LinksGroup,
  Wa as RadioGroup,
  Ha as SelectBox,
  ds as Switch,
  Ms as Textarea,
  Hs as accessibility,
  Ts as default
};
//# sourceMappingURL=@surgeup_ds-vue.js.map
