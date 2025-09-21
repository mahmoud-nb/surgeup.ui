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
} from "./chunk-PKWBPT5R.js";

// ../package/dist/index.es.js
var Te = { class: "su-form-field-wrapper" };
var He = ["for"];
var Ee = {
  key: 0,
  class: "su-indicator-required",
  "aria-label": "requis"
};
var Ke = ["id"];
var fe = defineComponent({
  __name: "FormField",
  props: {
    fieldId: {},
    label: {},
    message: {},
    state: { default: "default" },
    required: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false }
  },
  setup(p) {
    const u = p, a = computed(() => u.message ? `${u.fieldId}-message` : void 0), e = computed(() => {
      const w = {};
      return u.state === "error" ? w["aria-live"] = "assertive" : (u.state === "success" || u.state === "warning") && (w["aria-live"] = "polite"), w;
    }), k = computed(() => [
      "su-form-field-message",
      `su-form-field-message--${u.state}`
    ]), h2 = computed(() => [
      "su-form-field-label",
      {
        "su-form-field-label--required": u.required,
        "su-form-field-label--disabled": u.disabled
      }
    ]);
    return (w, D) => (openBlock(), createElementBlock("div", Te, [
      w.label ? (openBlock(), createElementBlock("label", {
        key: 0,
        for: w.fieldId,
        class: normalizeClass(h2.value)
      }, [
        createTextVNode(toDisplayString(w.label) + " ", 1),
        w.required ? (openBlock(), createElementBlock("span", Ee, "*")) : createCommentVNode("", true)
      ], 10, He)) : createCommentVNode("", true),
      renderSlot(w.$slots, "default", {
        fieldId: w.fieldId,
        messageId: a.value
      }),
      w.message ? (openBlock(), createElementBlock("div", mergeProps({
        key: 1,
        id: a.value,
        class: k.value
      }, e.value), toDisplayString(w.message), 17, Ke)) : createCommentVNode("", true)
    ]));
  }
});
var Pe = ["disabled", "tabindex"];
var je = {
  key: 0,
  class: "su-button__spinner"
};
var Oe = {
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
  setup(p, { emit: u }) {
    const a = p, e = u, k = computed(() => [
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
    ]), h2 = computed(() => !(a.icon && a.iconDisplay === "only")), w = (y) => {
      a.disabled || a.loading || e("click", y);
    }, D = (y) => {
      (y.key === "Enter" || y.key === " ") && (y.preventDefault(), !a.disabled && !a.loading && e("click", y)), e("keydown", y);
    }, L = (y) => {
      e("focus", y);
    }, g = (y) => {
      e("blur", y);
    }, z = computed(() => {
      const y = {};
      return a.ariaLabel && (y["aria-label"] = a.ariaLabel), a.ariaDescribedBy && (y["aria-describedby"] = a.ariaDescribedBy), a.ariaExpanded !== void 0 && (y["aria-expanded"] = a.ariaExpanded), a.ariaPressed !== void 0 && (y["aria-pressed"] = a.ariaPressed), a.role && (y.role = a.role), a.loading && (y["aria-busy"] = "true", y["aria-live"] = "polite"), a.disabled && (y["aria-disabled"] = "true"), a.icon && a.iconDisplay === "only" && !a.ariaLabel && console.warn('Button with icon and iconDisplay="only" should have an ariaLabel for accessibility'), y;
    });
    return (y, C) => (openBlock(), createElementBlock("button", mergeProps({
      class: k.value,
      disabled: y.disabled || y.loading,
      tabindex: y.disabled ? -1 : y.tabIndex
    }, z.value, {
      onClick: w,
      onKeydown: D,
      onFocus: L,
      onBlur: g
    }), [
      y.loading ? (openBlock(), createElementBlock("span", je, [...C[0] || (C[0] = [
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
      y.loading ? createCommentVNode("", true) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
        y.icon ? (openBlock(), createBlock(resolveDynamicComponent(y.icon), {
          key: 0,
          class: "su-button__icon",
          "aria-hidden": "true"
        })) : createCommentVNode("", true),
        h2.value ? (openBlock(), createElementBlock("span", Oe, [
          renderSlot(y.$slots, "default")
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
  setup(p) {
    const u = p, a = useSlots(), e = computed(() => [
      "su-buttons-group",
      `su-buttons-group--gap-${u.gap}`,
      {
        "su-buttons-group--connected": u.gap === "none"
      }
    ]), k = computed(() => {
      var L;
      if (!(a != null && a.default)) return [];
      const w = ((L = a == null ? void 0 : a.default) == null ? void 0 : L.call(a)) ?? [], D = [];
      for (const g of w)
        if (g.type === De) {
          const z = { ...g.props };
          if (u.size && (z.size = u.size), u.variant && (z.variant = u.variant), u.gap === "none") {
            const y = z.class || "";
            z.class = `${y} su-buttons-group__button`.trim();
          }
          D.push(h(g.type, z, g == null ? void 0 : g.children));
        } else {
          if (g.type === Comment || g.type === Text || g.type === Fragment)
            continue;
          console.warn("ButtonsGroup expects only Button components as children. Found:", g.type);
        }
      return D;
    }), h2 = computed(() => {
      const w = {};
      return u.ariaLabel && (w["aria-label"] = u.ariaLabel), u.ariaDescribedBy && (w["aria-describedby"] = u.ariaDescribedBy), u.role && (w.role = u.role), w;
    });
    return (w, D) => (openBlock(), createElementBlock("div", mergeProps({ class: e.value }, h2.value), [
      (openBlock(true), createElementBlock(Fragment, null, renderList(k.value, (L, g) => (openBlock(), createBlock(resolveDynamicComponent(L), { key: g }))), 128))
    ], 16));
  }
});
function Ze(p, u) {
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
function Ue(p, u) {
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
function xe(p, u) {
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
function Ne(p, u) {
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
function We(p, u) {
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
function Ye(p, u) {
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
function Xe(p, u) {
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
function Qe(p, u) {
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
function Je(p, u) {
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
function Be(p, u) {
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
var Me = defineComponent({
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
  setup(p, { emit: u }) {
    const a = p, e = u, k = computed(() => a.to !== void 0), h2 = computed(() => a.external || a.href && (a.href.startsWith("http") || a.href.startsWith("//") || a.target === "_blank")), w = computed(() => {
      const m = {};
      return k.value || (m.href = a.href, h2.value ? (m.target = a.target || "_blank", m.rel = a.rel || "noopener noreferrer") : (a.target && (m.target = a.target), a.rel && (m.rel = a.rel))), a.ariaLabel && (m["aria-label"] = a.ariaLabel), a.ariaDescribedBy && (m["aria-describedby"] = a.ariaDescribedBy), a.role && (m.role = a.role), a.disabled ? (m["aria-disabled"] = "true", m.tabindex = -1) : m.tabindex = a.tabIndex, m;
    }), D = computed(() => [
      "su-link",
      `su-link--${a.variant}`,
      `su-link--${a.size}`,
      `su-link--underline-${a.underline}`,
      {
        "su-link--disabled": a.disabled,
        "su-link--external": h2.value,
        "su-link--icon-only": a.icon && a.iconDisplay === "only",
        "su-link--icon-right": a.icon && a.iconDisplay === "right"
      }
    ]), L = computed(() => !(a.icon && a.iconDisplay === "only")), g = (m) => {
      if (a.disabled) {
        m.preventDefault();
        return;
      }
      e("click", m);
    }, z = (m) => {
      if ((m.key === "Enter" || m.key === " ") && a.disabled) {
        m.preventDefault();
        return;
      }
      e("keydown", m);
    }, y = (m) => {
      e("focus", m);
    }, C = (m) => {
      e("blur", m);
    };
    return a.icon && a.iconDisplay === "only" && !a.ariaLabel && console.warn('Link with icon and iconDisplay="only" should have an ariaLabel for accessibility'), (m, M) => (openBlock(), createBlock(resolveDynamicComponent(k.value ? "router-link" : "a"), mergeProps({ class: D.value }, k.value ? { to: m.to, ...w.value } : w.value, {
      onClick: g,
      onKeydown: z,
      onFocus: y,
      onBlur: C
    }), {
      default: withCtx(() => [
        m.icon ? (openBlock(), createBlock(resolveDynamicComponent(m.icon), {
          key: 0,
          class: "su-link__icon",
          "aria-hidden": "true"
        })) : createCommentVNode("", true),
        L.value ? (openBlock(), createElementBlock("span", ea, [
          renderSlot(m.$slots, "default")
        ])) : createCommentVNode("", true),
        h2.value && !m.icon && L.value ? (openBlock(), createBlock(unref(Ze), {
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
  setup(p) {
    const u = p, a = useSlots(), e = computed(() => [
      "su-links-group",
      `su-links-group--gap-${u.gap}`,
      `su-links-group--${u.direction}`,
      {
        "su-links-group--connected": u.gap === "none"
      }
    ]), k = computed(() => {
      var L;
      if (!(a != null && a.default)) return [];
      const w = ((L = a == null ? void 0 : a.default) == null ? void 0 : L.call(a)) ?? [], D = [];
      for (const g of w)
        if (g.type === Me) {
          const z = { ...g.props };
          if (u.size && (z.size = u.size), u.variant && (z.variant = u.variant), u.underline && (z.underline = u.underline), u.gap === "none") {
            const y = z.class || "";
            z.class = `${y} su-links-group__link`.trim();
          }
          D.push(h(g.type, z, g == null ? void 0 : g.children));
        } else {
          if (g.type === Comment || g.type === Text || g.type === Fragment)
            continue;
          console.warn("LinksGroup expects only Link components as children. Found:", g.type);
        }
      return D;
    }), h2 = computed(() => {
      const w = {};
      return u.ariaLabel && (w["aria-label"] = u.ariaLabel), u.ariaDescribedBy && (w["aria-describedby"] = u.ariaDescribedBy), u.role && (w.role = u.role), w;
    });
    return (w, D) => (openBlock(), createElementBlock("div", mergeProps({ class: e.value }, h2.value), [
      (openBlock(true), createElementBlock(Fragment, null, renderList(k.value, (L, g) => (openBlock(), createBlock(resolveDynamicComponent(L), { key: g }))), 128))
    ], 16));
  }
});
var sa = ["dir"];
var ta = ["tabindex", "onKeydown"];
var la = ["tabindex", "onKeydown"];
var ia = ["id", "type", "value", "placeholder", "disabled", "readonly", "required", "aria-describedby"];
var ra = ["tabindex", "onKeydown"];
var na = ["tabindex", "onKeydown"];
var oa = defineComponent({
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
  setup(p, { expose: u, emit: a }) {
    const e = p, k = useModel(p, "modelValue"), h2 = a, w = useAttrs(), D = ref(), L = "input-" + useId(), g = computed(() => w.id || L), z = computed(() => typeof w.onPrefixClick == "function"), y = computed(() => typeof w.onPrefixIconClick == "function"), C = computed(() => typeof w.onSuffixClick == "function"), m = computed(() => typeof w.onSuffixIconClick == "function"), M = computed(() => [
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
    ]), d = computed(() => [
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
    ]), P = computed(() => {
      const n = {};
      return e.ariaLabel && (n["aria-label"] = e.ariaLabel), e.ariaInvalid !== void 0 && (n["aria-invalid"] = e.ariaInvalid), e.ariaRequired !== void 0 && (n["aria-required"] = e.ariaRequired), e.required && (n["aria-required"] = "true"), e.state === "error" && (n["aria-invalid"] = "true"), n;
    }), b = computed(() => {
      const n = {};
      return e.autocomplete && (n.autocomplete = e.autocomplete), e.min !== void 0 && (n.min = e.min), e.max !== void 0 && (n.max = e.max), e.step !== void 0 && (n.step = e.step), e.minLength !== void 0 && (n.minlength = e.minLength), e.maxLength !== void 0 && (n.maxlength = e.maxLength), e.pattern && (n.pattern = e.pattern), n;
    }), S = (n) => {
      const Z = n.target;
      k.value = e.type === "number" ? Number(Z.value) : Z.value, h2("input", n);
    }, q = (n) => {
      h2("change", n);
    }, K = (n) => {
      h2("focus", n);
    }, B = (n) => {
      h2("blur", n);
    }, A = (n) => {
      h2("keydown", n);
    }, ae = (n) => {
      h2("keyup", n);
    }, le = (n) => {
      e.disabled || e.readonly || h2("prefix-click", n);
    }, ie = (n) => {
      e.disabled || e.readonly || h2("prefix-icon-click", n);
    }, X = (n) => {
      e.disabled || e.readonly || h2("suffix-click", n);
    }, re = (n) => {
      e.disabled || e.readonly || h2("suffix-icon-click", n);
    };
    return u({
      focus: () => {
        var n;
        (n = D.value) == null || n.focus();
      },
      select: () => {
        var n;
        (n = D.value) == null || n.select();
      },
      inputRef: D
    }), (n, Z) => (openBlock(), createBlock(fe, {
      fieldId: g.value,
      label: n.label,
      message: n.message,
      state: n.state,
      required: n.required,
      disabled: n.disabled
    }, {
      default: withCtx(({ fieldId: se, messageId: de }) => [
        createBaseVNode("div", {
          class: normalizeClass(M.value),
          dir: n.dir
        }, [
          n.prefixIcon ? (openBlock(), createElementBlock("div", {
            key: 0,
            class: normalizeClass(["su-input-prefix su-input-prefix--icon", { "su-input-prefix--clickable": y.value }]),
            tabindex: y.value && !n.disabled && !n.readonly ? 0 : -1,
            onClick: ie,
            onKeydown: [
              withKeys(withModifiers(ie, ["prevent"]), ["enter"]),
              withKeys(withModifiers(ie, ["prevent"]), ["space"])
            ]
          }, [
            (openBlock(), createBlock(resolveDynamicComponent(n.prefixIcon), {
              class: "su-input-icon",
              "aria-hidden": "true"
            }))
          ], 42, ta)) : n.prefix ? (openBlock(), createElementBlock("div", {
            key: 1,
            class: normalizeClass(["su-input-prefix su-input-prefix--text", { "su-input-prefix--clickable": z.value }]),
            tabindex: z.value && !n.disabled && !n.readonly ? 0 : -1,
            onClick: le,
            onKeydown: [
              withKeys(withModifiers(le, ["prevent"]), ["enter"]),
              withKeys(withModifiers(le, ["prevent"]), ["space"])
            ]
          }, toDisplayString(n.prefix), 43, la)) : createCommentVNode("", true),
          createBaseVNode("input", mergeProps({
            ref_key: "inputRef",
            ref: D,
            id: se,
            class: d.value,
            type: n.type,
            value: k.value,
            placeholder: n.placeholder,
            disabled: n.disabled,
            readonly: n.readonly,
            required: n.required,
            "aria-describedby": de
          }, { ...b.value, ...P.value }, {
            onInput: S,
            onChange: q,
            onFocus: K,
            onBlur: B,
            onKeydown: A,
            onKeyup: ae
          }), null, 16, ia),
          n.suffix ? (openBlock(), createElementBlock("div", {
            key: 2,
            class: normalizeClass(["su-input-suffix su-input-suffix--text", { "su-input-suffix--clickable": C.value }]),
            tabindex: C.value && !n.disabled && !n.readonly ? 0 : -1,
            onClick: X,
            onKeydown: [
              withKeys(withModifiers(X, ["prevent"]), ["enter"]),
              withKeys(withModifiers(X, ["prevent"]), ["space"])
            ]
          }, toDisplayString(n.suffix), 43, ra)) : n.suffixIcon ? (openBlock(), createElementBlock("div", {
            key: 3,
            class: normalizeClass(["su-input-suffix su-input-suffix--icon", { "su-input-suffix--clickable": m.value }]),
            tabindex: m.value && !n.disabled && !n.readonly ? 0 : -1,
            onClick: re,
            onKeydown: [
              withKeys(withModifiers(re, ["prevent"]), ["enter"]),
              withKeys(withModifiers(re, ["prevent"]), ["space"])
            ]
          }, [
            (openBlock(), createBlock(resolveDynamicComponent(n.suffixIcon), {
              class: "su-input-icon",
              "aria-hidden": "true"
            }))
          ], 42, na)) : createCommentVNode("", true)
        ], 10, sa)
      ]),
      _: 1
    }, 8, ["fieldId", "label", "message", "state", "required", "disabled"]));
  }
});
var ua = 0;
function da(p = "su") {
  return `${p}-${++ua}-${Date.now().toString(36)}`;
}
function ca(p) {
  return [
    "button:not([disabled])",
    "input:not([disabled])",
    "select:not([disabled])",
    "textarea:not([disabled])",
    "a[href]",
    '[tabindex]:not([tabindex="-1"])'
  ].some((a) => p.matches(a));
}
function Re(p) {
  const u = p.querySelectorAll(
    'button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), a[href], [tabindex]:not([tabindex="-1"])'
  ), a = u[0], e = u[u.length - 1], k = (h2) => {
    h2.key === "Tab" && (h2.shiftKey ? document.activeElement === a && (h2.preventDefault(), e.focus()) : document.activeElement === e && (h2.preventDefault(), a.focus()));
  };
  return p.addEventListener("keydown", k), a == null || a.focus(), () => {
    p.removeEventListener("keydown", k);
  };
}
function Q(p, u = "polite") {
  const a = document.createElement("div");
  a.setAttribute("aria-live", u), a.setAttribute("aria-atomic", "true"), a.className = "sr-only", a.textContent = p, document.body.appendChild(a), setTimeout(() => {
    document.body.removeChild(a);
  }, 1e3);
}
function fa() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
function pa() {
  return window.matchMedia("(prefers-contrast: high)").matches;
}
function va(p, u) {
  return 4.5;
}
function ba(p, u = "AA") {
  return p >= (u === "AAA" ? 7 : 4.5);
}
var tt = Object.freeze(Object.defineProperty({
  __proto__: null,
  announceToScreenReader: Q,
  generateId: da,
  getContrastRatio: va,
  isContrastValid: ba,
  isFocusable: ca,
  prefersHighContrast: pa,
  prefersReducedMotion: fa,
  trapFocus: Re
}, Symbol.toStringTag, { value: "Module" }));
var ha = ["dir"];
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
var La = { class: "su-select-actions" };
var Ca = {
  key: 0,
  class: "su-select-spinner"
};
var Ia = ["id", "aria-multiselectable"];
var _a = {
  key: 0,
  class: "su-select-search"
};
var qa = { class: "su-select-search-container" };
var za = ["placeholder", "value"];
var Da = ["aria-label"];
var Ma = ["aria-selected", "aria-disabled", "onClick", "onMouseenter"];
var Ra = {
  key: 0,
  class: "su-select-option-checkbox"
};
var Va = { class: "su-select-option-content" };
var Fa = { class: "su-select-option-label" };
var Aa = {
  key: 0,
  class: "su-select-option-description"
};
var Sa = {
  key: 1,
  class: "su-select-no-options"
};
var Ta = defineComponent({
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
  setup(p, { expose: u, emit: a }) {
    const e = p, k = useModel(p, "modelValue"), h2 = a, w = useAttrs(), D = "selectbox-" + useId(), L = ref(), g = ref(), z = ref(), y = ref(), C = ref(false), m = ref(""), M = ref(-1), d = ref(null), P = computed(() => w.id || D), b = computed(() => `${P.value}-listbox`), S = computed(() => e.groups && e.groups.length > 0 ? e.groups.flatMap(
      (i) => i.options.map((s) => ({ ...s, group: i.label }))
    ) : e.options || []), q = computed(() => {
      if (!e.searchable || !m.value)
        return S.value;
      const i = m.value.toLowerCase();
      return S.value.filter(
        (s) => s.label.toLowerCase().includes(i) || s.description && s.description.toLowerCase().includes(i)
      );
    }), K = computed(() => {
      const i = {};
      return q.value.forEach((s) => {
        const f = s.group || "";
        i[f] || (i[f] = []), i[f].push(s);
      }), i;
    }), B = computed({
      get() {
        return e.multiple ? Array.isArray(k.value) ? k.value : k.value !== void 0 && k.value !== null ? [k.value] : [] : k.value;
      },
      set(i) {
        k.value = i, h2("change", i);
      }
    }), A = computed(() => {
      if (e.multiple) {
        const i = B.value;
        return i ? S.value.filter((s) => i.includes(s.value)) : [];
      } else {
        const i = B.value;
        return i != null ? S.value.filter((s) => s.value === i) : [];
      }
    }), ae = computed(() => {
      var i;
      return A.value.length === 0 ? e.placeholder : e.multiple ? A.value.length === 1 ? A.value[0].label : `${A.value.length} éléments sélectionnés` : ((i = A.value[0]) == null ? void 0 : i.label) || e.placeholder;
    }), le = computed(() => [
      "su-select-container",
      `su-select-container--${e.size}`,
      `su-select-container--${e.state}`,
      {
        "su-select-container--disabled": e.disabled,
        "su-select-container--readonly": e.readonly,
        "su-select-container--open": C.value,
        "su-select-container--multiple": e.multiple,
        "su-select-container--rtl": e.dir === "rtl"
      }
    ]), ie = computed(() => [
      "su-select-trigger",
      `su-select-trigger--${e.size}`,
      `su-select-trigger--${e.state}`,
      `su-select-trigger--align-${e.textAlign}`,
      {
        "su-select-trigger--disabled": e.disabled,
        "su-select-trigger--readonly": e.readonly,
        "su-select-trigger--open": C.value,
        "su-select-trigger--has-value": A.value.length > 0,
        "su-select-trigger--placeholder": A.value.length === 0
      }
    ]), X = computed(() => {
      const i = {
        "aria-haspopup": "listbox",
        "aria-expanded": C.value,
        "aria-controls": C.value ? b.value : void 0,
        role: "combobox"
      };
      return e.ariaLabel && (i["aria-label"] = e.ariaLabel), e.ariaInvalid !== void 0 && (i["aria-invalid"] = e.ariaInvalid), e.ariaRequired !== void 0 && (i["aria-required"] = e.ariaRequired), e.required && (i["aria-required"] = "true"), e.state === "error" && (i["aria-invalid"] = "true"), e.multiple && (i["aria-multiselectable"] = "true"), i;
    }), re = () => {
      e.disabled || e.readonly || (C.value ? v() : ne());
    }, ne = async () => {
      e.disabled || e.readonly || (C.value = true, m.value = "", M.value = -1, h2("open"), await nextTick(), e.searchable && y.value && y.value.focus(), z.value && (d.value = Re(z.value)));
    }, v = () => {
      C.value = false, M.value = -1, d.value && (d.value(), d.value = null), h2("close"), g.value && g.value.focus();
    }, n = (i) => {
      if (i.disabled) return;
      let s;
      if (e.multiple) {
        const I = B.value || [];
        if (I.includes(i.value))
          s = I.filter(($) => $ !== i.value);
        else {
          if (e.maxSelectedItems && I.length >= e.maxSelectedItems) {
            Q(`Maximum ${e.maxSelectedItems} éléments sélectionnables`);
            return;
          }
          s = [...I, i.value];
        }
      } else
        s = i.value;
      B.value = s;
      const f = e.multiple && B.value.includes(i.value) ? "désélectionné" : "sélectionné";
      Q(`${i.label} ${f}`), !e.multiple && e.closeOnSelect && v();
    }, Z = (i) => {
      i.stopPropagation();
      const s = e.multiple ? [] : void 0;
      B.value = s, Q("Sélection effacée");
    }, se = (i, s) => {
      if (s.stopPropagation(), e.multiple) {
        const I = (B.value || []).filter((F) => F !== i.value);
        B.value = I, Q(`${i.label} retiré de la sélection`);
      }
    }, de = (i) => {
      const s = i.target;
      m.value = s.value, M.value = -1, h2("search", m.value);
    }, ge = (i) => {
      switch (i.key) {
        case "Enter":
        case " ":
          if (i.preventDefault(), !C.value)
            ne();
          else if (M.value >= 0) {
            const s = q.value[M.value];
            s && n(s);
          }
          break;
        case "Escape":
          i.preventDefault(), v();
          break;
        case "ArrowDown":
          i.preventDefault(), C.value ? M.value = Math.min(M.value + 1, q.value.length - 1) : ne();
          break;
        case "ArrowUp":
          i.preventDefault(), C.value && (M.value = Math.max(M.value - 1, -1));
          break;
        case "Home":
          C.value && (i.preventDefault(), M.value = 0);
          break;
        case "End":
          C.value && (i.preventDefault(), M.value = q.value.length - 1);
          break;
        case "Tab":
          C.value && v();
          break;
      }
    }, we = (i) => {
      h2("focus", i);
    }, l = (i) => {
      setTimeout(() => {
        C.value && L.value && !L.value.contains(document.activeElement) && (v(), h2("blur", i));
      }, 0);
    }, V = (i) => {
      C.value && L.value && !L.value.contains(i.target) && v();
    };
    return u({
      focus: () => {
        var i;
        (i = g.value) == null || i.focus();
      },
      open: () => {
        ne();
      },
      close: () => {
        v();
      },
      selectRef: L,
      inputRef: g
    }), onMounted(() => {
      document.addEventListener("click", V, { passive: true });
    }), onUnmounted(() => {
      document.removeEventListener("click", V, { passive: true }), d.value && d.value();
    }), watch(k, () => {
      M.value = -1;
    }), (i, s) => (openBlock(), createBlock(fe, {
      fieldId: P.value,
      label: i.label,
      message: i.message,
      state: i.state,
      required: i.required,
      disabled: i.disabled
    }, {
      default: withCtx(({ fieldId: f, messageId: I }) => {
        var F;
        return [
          createBaseVNode("div", {
            class: "su-select-wrapper",
            dir: i.dir
          }, [
            createBaseVNode("div", {
              ref_key: "selectRef",
              ref: L,
              class: normalizeClass(le.value)
            }, [
              createBaseVNode("div", mergeProps({
                ref_key: "inputRef",
                ref: g,
                id: f,
                class: ie.value,
                tabindex: i.disabled ? -1 : 0
              }, X.value, {
                "aria-describedby": I,
                onClick: re,
                onKeydown: ge,
                onFocus: we,
                onBlur: l
              }), [
                createBaseVNode("div", ya, [
                  i.multiple && A.value.length > 0 ? (openBlock(), createElementBlock("div", ga, [
                    (openBlock(true), createElementBlock(Fragment, null, renderList(A.value.slice(0, 3), ($) => (openBlock(), createElementBlock("span", {
                      key: $.value,
                      class: "su-select-tag"
                    }, [
                      $.icon ? (openBlock(), createBlock(resolveDynamicComponent($.icon), {
                        key: 0,
                        class: "su-select-tag-icon",
                        "aria-hidden": "true"
                      })) : createCommentVNode("", true),
                      createBaseVNode("span", ka, toDisplayString($.label), 1),
                      createBaseVNode("button", {
                        type: "button",
                        class: "su-select-tag-remove",
                        "aria-label": `Retirer ${$.label}`,
                        onClick: (U) => se($, U)
                      }, [
                        createVNode(unref(Be), { class: "su-select-tag-remove-icon" })
                      ], 8, wa)
                    ]))), 128)),
                    A.value.length > 3 ? (openBlock(), createElementBlock("span", $a, " +" + toDisplayString(A.value.length - 3), 1)) : createCommentVNode("", true)
                  ])) : (openBlock(), createElementBlock("div", xa, [
                    (F = A.value[0]) != null && F.icon ? (openBlock(), createBlock(resolveDynamicComponent(A.value[0].icon), {
                      key: 0,
                      class: "su-select-display-icon",
                      "aria-hidden": "true"
                    })) : createCommentVNode("", true),
                    createBaseVNode("span", Ba, toDisplayString(ae.value), 1)
                  ]))
                ]),
                createBaseVNode("div", La, [
                  i.loading ? (openBlock(), createElementBlock("div", Ca, [...s[0] || (s[0] = [
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
                    onClick: Z
                  }, [
                    createVNode(unref(Be), { class: "su-select-clear-icon" })
                  ])) : createCommentVNode("", true),
                  createVNode(unref(Ne), {
                    class: normalizeClass(["su-select-chevron", { "su-select-chevron--open": C.value }]),
                    "aria-hidden": "true"
                  }, null, 8, ["class"])
                ])
              ], 16, ma),
              createVNode(Transition, { name: "su-select-dropdown" }, {
                default: withCtx(() => [
                  C.value ? (openBlock(), createElementBlock("div", {
                    key: 0,
                    ref_key: "dropdownRef",
                    ref: z,
                    id: b.value,
                    class: "su-select-dropdown",
                    role: "listbox",
                    "aria-multiselectable": i.multiple
                  }, [
                    i.searchable ? (openBlock(), createElementBlock("div", _a, [
                      createBaseVNode("div", qa, [
                        createVNode(unref(Qe), {
                          class: "su-select-search-icon",
                          "aria-hidden": "true"
                        }),
                        createBaseVNode("input", {
                          ref_key: "searchInputRef",
                          ref: y,
                          type: "text",
                          class: "su-select-search-input",
                          placeholder: i.searchPlaceholder,
                          value: m.value,
                          onInput: de,
                          onKeydown: ge
                        }, null, 40, za)
                      ])
                    ])) : createCommentVNode("", true),
                    createBaseVNode("div", {
                      class: "su-select-options",
                      style: normalizeStyle({ maxHeight: i.maxHeight })
                    }, [
                      q.value.length > 0 ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList(K.value, ($, U) => (openBlock(), createElementBlock(Fragment, { key: U }, [
                        U && e.groups && e.groups.length > 0 ? (openBlock(), createElementBlock("div", {
                          key: 0,
                          class: "su-select-group-header",
                          role: "group",
                          "aria-label": U
                        }, toDisplayString(U), 9, Da)) : createCommentVNode("", true),
                        (openBlock(true), createElementBlock(Fragment, null, renderList($, (j) => (openBlock(), createElementBlock("div", {
                          key: j.value,
                          class: normalizeClass(["su-select-option", {
                            "su-select-option--selected": i.multiple ? B.value.includes(j.value) : B.value === j.value,
                            "su-select-option--disabled": j.disabled,
                            "su-select-option--focused": q.value.indexOf(j) === M.value
                          }]),
                          role: "option",
                          "aria-selected": i.multiple ? B.value.includes(j.value) : B.value === j.value,
                          "aria-disabled": j.disabled,
                          onClick: (Ve) => n(j),
                          onMouseenter: (Ve) => M.value = q.value.indexOf(j)
                        }, [
                          i.multiple ? (openBlock(), createElementBlock("div", Ra, [
                            createBaseVNode("div", {
                              class: normalizeClass(["su-select-checkbox", {
                                "su-select-checkbox--checked": B.value.includes(j.value)
                              }])
                            }, [
                              B.value.includes(j.value) ? (openBlock(), createBlock(unref(xe), {
                                key: 0,
                                class: "su-select-checkbox-icon",
                                "aria-hidden": "true"
                              })) : createCommentVNode("", true)
                            ], 2)
                          ])) : createCommentVNode("", true),
                          j.icon ? (openBlock(), createBlock(resolveDynamicComponent(j.icon), {
                            key: 1,
                            class: "su-select-option-icon",
                            "aria-hidden": "true"
                          })) : createCommentVNode("", true),
                          createBaseVNode("div", Va, [
                            createBaseVNode("div", Fa, toDisplayString(j.label), 1),
                            j.description ? (openBlock(), createElementBlock("div", Aa, toDisplayString(j.description), 1)) : createCommentVNode("", true)
                          ]),
                          !i.multiple && B.value === j.value ? (openBlock(), createBlock(unref(xe), {
                            key: 2,
                            class: "su-select-option-check",
                            "aria-hidden": "true"
                          })) : createCommentVNode("", true)
                        ], 42, Ma))), 128))
                      ], 64))), 128)) : (openBlock(), createElementBlock("div", Sa, toDisplayString(m.value ? i.noResultsText : i.noOptionsText), 1))
                    ], 4)
                  ], 8, Ia)) : createCommentVNode("", true)
                ]),
                _: 1
              })
            ], 2)
          ], 8, ha)
        ];
      }),
      _: 1
    }, 8, ["fieldId", "label", "message", "state", "required", "disabled"]));
  }
});
var Ha = ["aria-describedby"];
var Ea = {
  key: 0,
  class: "su-radio-group-before"
};
var Ka = ["for"];
var Pa = ["id", "name", "value", "checked", "disabled", "required", "onChange"];
var ja = { class: "su-radio-content" };
var Oa = { class: "su-radio-text" };
var Ga = { class: "su-radio-label" };
var Za = {
  key: 0,
  class: "su-radio-description"
};
var Ua = {
  key: 0,
  class: "su-radio-group-after"
};
var Na = defineComponent({
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
  setup(p, { emit: u }) {
    const a = useModel(p, "modelValue"), e = p, k = u, h2 = useAttrs(), w = "radio-group-" + useId(), D = computed(() => h2.id || w), L = computed(() => e.name || w), g = computed(() => [
      "su-radio-group",
      `su-radio-group--${e.size}`,
      `su-radio-group--${e.state}`,
      `su-radio-group--${e.displayType}`,
      `su-radio-group--${e.direction}`,
      {
        "su-radio-group--disabled": e.disabled,
        "su-radio-group--scrollable": e.maxHeight
      }
    ]), z = (d) => [
      "su-radio-option",
      `su-radio-option--${e.size}`,
      `su-radio-option--${e.state}`,
      `su-radio-option--${e.displayType}`,
      {
        "su-radio-option--selected": a.value === d.value,
        "su-radio-option--disabled": d.disabled || e.disabled
      }
    ], y = computed(() => {
      const d = {
        role: "radiogroup"
      };
      if (e.ariaLabel && (d["aria-label"] = e.ariaLabel), e.ariaDescribedBy) {
        const P = [e.ariaDescribedBy].filter(Boolean).join(" ");
        d["aria-describedby"] = P;
      }
      return e.required && (d["aria-required"] = "true"), e.state === "error" && (d["aria-invalid"] = "true"), d;
    }), C = (d) => {
      e.disabled || (a.value = d, k("change", d));
    }, m = (d) => {
      k("focus", d);
    }, M = (d) => {
      k("blur", d);
    };
    return (d, P) => (openBlock(), createBlock(fe, {
      fieldId: D.value,
      label: d.label,
      message: d.message,
      state: d.state,
      required: d.required,
      disabled: d.disabled
    }, {
      default: withCtx(({ fieldId: b, messageId: S }) => [
        createBaseVNode("fieldset", mergeProps({ class: g.value }, y.value, { "aria-describedby": S }), [
          createBaseVNode("div", {
            class: "su-radio-group-options",
            style: normalizeStyle({ maxHeight: d.maxHeight || void 0, overflowY: d.maxHeight ? "auto" : void 0 })
          }, [
            d.$slots.before ? (openBlock(), createElementBlock("div", Ea, [
              renderSlot(d.$slots, "before")
            ])) : createCommentVNode("", true),
            (openBlock(true), createElementBlock(Fragment, null, renderList(d.options, (q) => (openBlock(), createElementBlock("label", {
              key: q.value,
              class: normalizeClass(z(q)),
              for: `${b}-${q.value}`
            }, [
              createBaseVNode("input", {
                id: `${b}-${q.value}`,
                type: "radio",
                name: L.value,
                value: q.value,
                checked: a.value === q.value,
                disabled: q.disabled || d.disabled,
                required: d.required,
                class: "su-radio-input",
                onChange: (K) => C(q.value),
                onFocus: m,
                onBlur: M
              }, null, 40, Pa),
              P[0] || (P[0] = createBaseVNode("div", { class: "su-radio-indicator" }, [
                createBaseVNode("div", { class: "su-radio-dot" })
              ], -1)),
              createBaseVNode("div", ja, [
                q.icon ? (openBlock(), createBlock(resolveDynamicComponent(q.icon), {
                  key: 0,
                  class: "su-radio-icon",
                  "aria-hidden": "true"
                })) : createCommentVNode("", true),
                createBaseVNode("div", Oa, [
                  createBaseVNode("div", Ga, toDisplayString(q.label), 1),
                  q.description ? (openBlock(), createElementBlock("div", Za, toDisplayString(q.description), 1)) : createCommentVNode("", true)
                ])
              ])
            ], 10, Ka))), 128))
          ], 4),
          d.$slots.after ? (openBlock(), createElementBlock("div", Ua, [
            renderSlot(d.$slots, "after")
          ])) : createCommentVNode("", true)
        ], 16, Ha)
      ]),
      _: 3
    }, 8, ["fieldId", "label", "message", "state", "required", "disabled"]));
  }
});
var Wa = ["aria-describedby"];
var Ya = {
  key: 0,
  class: "su-checkbox-group-before"
};
var Xa = ["for"];
var Qa = ["id", "value", "checked", "disabled", "required", "onChange"];
var Ja = { class: "su-checkbox-content" };
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
  setup(p, { emit: u }) {
    const a = p, e = useModel(p, "modelValue"), k = u, h2 = useAttrs(), w = "checkbox-group-" + useId(), D = computed(() => h2.id || w), L = computed({
      get() {
        return Array.isArray(e.value) ? e.value : [];
      },
      set(b) {
        e.value = b, k("change", b);
      }
    }), g = computed(() => [
      "su-checkbox-group",
      `su-checkbox-group--${a.size}`,
      `su-checkbox-group--${a.state}`,
      `su-checkbox-group--${a.displayType}`,
      `su-checkbox-group--${a.direction}`,
      {
        "su-checkbox-group--disabled": a.disabled,
        "su-checkbox-group--scrollable": a.maxHeight
      }
    ]), z = (b) => [
      "su-checkbox-option",
      `su-checkbox-option--${a.size}`,
      `su-checkbox-option--${a.state}`,
      `su-checkbox-option--${a.displayType}`,
      {
        "su-checkbox-option--selected": L.value.includes(b.value),
        "su-checkbox-option--disabled": b.disabled || a.disabled
      }
    ], y = computed(() => {
      const b = {
        role: "group"
      };
      if (a.ariaLabel && (b["aria-label"] = a.ariaLabel), a.ariaDescribedBy) {
        const S = [a.ariaDescribedBy].filter(Boolean).join(" ");
        b["aria-describedby"] = S;
      }
      return a.required && (b["aria-required"] = "true"), a.state === "error" && (b["aria-invalid"] = "true"), b;
    }), C = (b, S) => {
      if (a.disabled) return;
      let q;
      if (S) {
        if (a.maxSelections && L.value.length >= a.maxSelections) {
          Q(`Maximum ${a.maxSelections} sélections autorisées`);
          return;
        }
        q = [...L.value, b];
      } else
        q = L.value.filter((A) => A !== b);
      L.value = q;
      const K = a.options.find((A) => A.value === b), B = S ? "sélectionné" : "désélectionné";
      Q(`${K == null ? void 0 : K.label} ${B}`);
    }, m = (b) => {
      k("focus", b);
    }, M = (b) => {
      k("blur", b);
    }, d = (b) => L.value.includes(b), P = (b) => b.disabled || a.disabled;
    return (b, S) => (openBlock(), createBlock(fe, {
      fieldId: D.value,
      label: b.label,
      message: b.message,
      state: b.state,
      required: b.required,
      disabled: b.disabled
    }, {
      default: withCtx(({ fieldId: q, messageId: K }) => [
        createBaseVNode("fieldset", mergeProps({ class: g.value }, y.value, { "aria-describedby": K }), [
          createBaseVNode("div", {
            class: "su-checkbox-group-options",
            style: normalizeStyle({ maxHeight: b.maxHeight || void 0, overflowY: b.maxHeight ? "auto" : void 0 })
          }, [
            b.$slots.before ? (openBlock(), createElementBlock("div", Ya, [
              renderSlot(b.$slots, "before")
            ])) : createCommentVNode("", true),
            (openBlock(true), createElementBlock(Fragment, null, renderList(b.options, (B) => (openBlock(), createElementBlock("label", {
              key: B.value,
              class: normalizeClass(z(B)),
              for: `${q}-${B.value}`
            }, [
              createBaseVNode("input", {
                id: `${q}-${B.value}`,
                type: "checkbox",
                value: B.value,
                checked: d(B.value),
                disabled: P(B),
                required: b.required && L.value.length === 0,
                class: "su-checkbox-input",
                onChange: (A) => C(B.value, A.target.checked),
                onFocus: m,
                onBlur: M
              }, null, 40, Qa),
              createBaseVNode("div", {
                class: normalizeClass(["su-checkbox-indicator", {
                  "su-checkbox-indicator--checked": d(B.value),
                  "su-checkbox-indicator--indeterminate": false
                }])
              }, [
                d(B.value) ? (openBlock(), createBlock(unref(xe), {
                  key: 0,
                  class: "su-checkbox-check",
                  "aria-hidden": "true"
                })) : createCommentVNode("", true)
              ], 2),
              createBaseVNode("div", Ja, [
                B.icon ? (openBlock(), createBlock(resolveDynamicComponent(B.icon), {
                  key: 0,
                  class: "su-checkbox-icon",
                  "aria-hidden": "true"
                })) : createCommentVNode("", true),
                createBaseVNode("div", es, [
                  createBaseVNode("div", as, toDisplayString(B.label), 1)
                ])
              ])
            ], 10, Xa))), 128))
          ], 4),
          b.$slots.after ? (openBlock(), createElementBlock("div", ss, [
            renderSlot(b.$slots, "after")
          ])) : createCommentVNode("", true)
        ], 16, Wa)
      ]),
      _: 3
    }, 8, ["fieldId", "label", "message", "state", "required", "disabled"]));
  }
});
var ls = ["id", "tabindex", "aria-describedby"];
var is = { class: "su-switch-track" };
var rs = { class: "su-switch-thumb" };
var ns = { class: "su-switch-indicator" };
var os = {
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
  setup(p, { emit: u }) {
    const a = p, e = useModel(p, "modelValue"), k = u, h2 = useAttrs(), w = "switch-" + useId(), D = computed(() => h2.id || w), L = computed(() => [
      "su-switch-container",
      `su-switch-container--${a.size}`,
      `su-switch-container--${a.state}`,
      {
        "su-switch-container--disabled": a.disabled,
        "su-switch-container--readonly": a.readonly,
        "su-switch-container--has-labels": a.leftLabel || a.rightLabel,
        "su-switch-container--centered": a.leftLabel && a.rightLabel
      }
    ]), g = computed(() => [
      "su-switch",
      `su-switch--${a.size}`,
      `su-switch--${a.state}`,
      {
        "su-switch--checked": e.value,
        "su-switch--disabled": a.disabled,
        "su-switch--readonly": a.readonly
      }
    ]), z = computed(() => {
      const d = {
        role: "switch",
        "aria-checked": e.value
      };
      return a.ariaLabel && (d["aria-label"] = a.ariaLabel), a.ariaInvalid !== void 0 && (d["aria-invalid"] = a.ariaInvalid), a.ariaRequired !== void 0 && (d["aria-required"] = a.ariaRequired), a.required && (d["aria-required"] = "true"), a.state === "error" && (d["aria-invalid"] = "true"), d;
    }), y = () => {
      if (a.disabled || a.readonly) return;
      const d = !e.value;
      e.value = d, k("change", d);
    }, C = (d) => {
      (d.key === " " || d.key === "Enter") && (d.preventDefault(), y()), k("keydown", d);
    }, m = (d) => {
      k("focus", d);
    }, M = (d) => {
      k("blur", d);
    };
    return (d, P) => (openBlock(), createBlock(fe, {
      fieldId: D.value,
      label: d.label,
      message: d.message,
      state: d.state,
      required: d.required,
      disabled: d.disabled
    }, {
      default: withCtx(({ fieldId: b, messageId: S }) => [
        createBaseVNode("div", {
          class: normalizeClass(L.value)
        }, [
          d.leftLabel ? (openBlock(), createElementBlock("span", {
            key: 0,
            class: normalizeClass(["su-switch-side-label su-switch-side-label--left", {
              "su-switch-side-label--active": !e.value,
              "su-switch-side-label--disabled": d.disabled
            }])
          }, toDisplayString(d.leftLabel), 3)) : createCommentVNode("", true),
          createBaseVNode("div", mergeProps({
            id: b,
            class: g.value,
            tabindex: d.disabled ? -1 : 0,
            "aria-describedby": S
          }, z.value, {
            onClick: y,
            onKeydown: C,
            onFocus: m,
            onBlur: M
          }), [
            createBaseVNode("div", is, [
              createBaseVNode("div", rs, [
                createBaseVNode("div", ns, [
                  e.value ? (openBlock(), createElementBlock("svg", os, [...P[0] || (P[0] = [
                    createBaseVNode("path", { d: "M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" }, null, -1)
                  ])])) : (openBlock(), createElementBlock("svg", us, [...P[1] || (P[1] = [
                    createBaseVNode("path", { d: "M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" }, null, -1)
                  ])]))
                ])
              ])
            ])
          ], 16, ls),
          d.rightLabel ? (openBlock(), createElementBlock("span", {
            key: 1,
            class: normalizeClass(["su-switch-side-label su-switch-side-label--right", {
              "su-switch-side-label--active": e.value,
              "su-switch-side-label--disabled": d.disabled
            }])
          }, toDisplayString(d.rightLabel), 3)) : createCommentVNode("", true)
        ], 2)
      ]),
      _: 1
    }, 8, ["fieldId", "label", "message", "state", "required", "disabled"]));
  }
});
var cs = ["id", "accept", "multiple", "disabled", "required", "aria-describedby"];
var fs = ["tabindex", "aria-label"];
var ps = { class: "su-file-upload-text" };
var vs = { class: "su-file-upload-primary-text" };
var bs = { class: "su-file-upload-secondary-text" };
var hs = { key: 0 };
var ms = { key: 0 };
var ys = { key: 1 };
var gs = ["aria-label"];
var ks = { class: "su-file-upload-item-preview" };
var ws = ["src", "alt"];
var $s = { class: "su-file-upload-item-info" };
var xs = { class: "su-file-upload-item-name" };
var Bs = { class: "su-file-upload-item-details" };
var Ls = { class: "su-file-upload-item-size" };
var Cs = {
  key: 0,
  class: "su-file-upload-item-progress"
};
var Is = {
  key: 1,
  class: "su-file-upload-item-error"
};
var _s = { class: "su-file-upload-item-status" };
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
  setup(p, { expose: u, emit: a }) {
    const e = p, k = useModel(p, "modelValue"), h2 = a, w = useAttrs(), D = ref(), L = ref(), g = ref(false), z = ref(0), y = "file-upload-" + useId(), C = computed(() => w.id || y), m = computed(() => Array.isArray(k.value) ? k.value : []), M = computed(() => [
      "su-file-upload-container",
      `su-file-upload-container--${e.size}`,
      `su-file-upload-container--${e.state}`,
      {
        "su-file-upload-container--disabled": e.disabled,
        "su-file-upload-container--readonly": e.readonly,
        "su-file-upload-container--dragging": g.value,
        "su-file-upload-container--has-files": m.value.length > 0
      }
    ]), d = computed(() => [
      "su-file-upload-dropzone",
      `su-file-upload-dropzone--${e.size}`,
      `su-file-upload-dropzone--${e.state}`,
      {
        "su-file-upload-dropzone--disabled": e.disabled,
        "su-file-upload-dropzone--readonly": e.readonly,
        "su-file-upload-dropzone--dragging": g.value
      }
    ]), P = computed(() => {
      const l = {};
      if (e.ariaLabel && (l["aria-label"] = e.ariaLabel), e.ariaDescribedBy) {
        const V = [e.ariaDescribedBy].filter(Boolean).join(" ");
        l["aria-describedby"] = V;
      }
      return e.ariaInvalid !== void 0 && (l["aria-invalid"] = e.ariaInvalid), e.ariaRequired !== void 0 && (l["aria-required"] = e.ariaRequired), e.required && (l["aria-required"] = "true"), e.state === "error" && (l["aria-invalid"] = "true"), l;
    }), b = (l) => {
      if (l === 0) return "0 B";
      const V = 1024, G = ["B", "KB", "MB", "GB"], H = Math.floor(Math.log(l) / Math.log(V));
      return parseFloat((l / Math.pow(V, H)).toFixed(1)) + " " + G[H];
    }, S = (l) => l.type.startsWith("image/") ? Je : Ye, q = (l) => `${l}-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`, K = (l) => l.type.startsWith("image/"), B = (l) => new Promise((V) => {
      if (!K(l)) {
        V("");
        return;
      }
      const G = new FileReader();
      G.onload = (H) => {
        var _;
        return V(((_ = H.target) == null ? void 0 : _.result) || "");
      }, G.readAsDataURL(l);
    }), A = (l) => e.maxSize && l.size > e.maxSize ? `Le fichier "${l.name}" est trop volumineux (${b(l.size)}). Taille maximale : ${b(e.maxSize)}` : e.accept && !e.accept.split(",").map((H) => H.trim()).some((H) => {
      if (H.startsWith("."))
        return l.name.toLowerCase().endsWith(H.toLowerCase());
      if (H.includes("*")) {
        const _ = H.split("/")[0];
        return l.type.startsWith(_);
      }
      return l.type === H;
    }) ? `Le type de fichier "${l.type}" n'est pas accepté pour "${l.name}"` : null, ae = async (l) => {
      if (e.disabled || e.readonly) return;
      const V = Array.from(l), G = m.value;
      if (e.maxFiles && G.length + V.length > e.maxFiles) {
        const _ = `Nombre maximum de fichiers dépassé (${e.maxFiles})`;
        h2("error", _), Q(_, "assertive");
        return;
      }
      const H = [];
      for (const _ of V) {
        const i = A(_);
        if (i) {
          h2("error", i, _), Q(i, "assertive");
          continue;
        }
        const s = {
          id: q("file"),
          file: _,
          name: _.name,
          size: _.size,
          type: _.type,
          status: "pending"
        };
        if (e.allowPreview && K(_))
          try {
            s.preview = await B(_);
          } catch (f) {
            console.warn("Erreur lors de la création de l'aperçu:", f);
          }
        H.push(s);
      }
      if (H.length > 0) {
        const _ = e.multiple ? [...G, ...H] : H;
        k.value = _, h2("change", _);
        const i = H.length === 1 ? `Fichier "${H[0].name}" ajouté` : `${H.length} fichiers ajoutés`;
        Q(i), H.forEach((s) => h2("upload", s));
      }
    }, le = (l) => {
      if (e.disabled || e.readonly) return;
      const V = m.value.filter((G) => G.id !== l.id);
      k.value = V, h2("change", V), h2("remove", l), Q(`Fichier "${l.name}" supprimé`);
    }, ie = (l) => {
      const V = l.target;
      V.files && V.files.length > 0 && ae(V.files), V.value = "";
    }, X = () => {
      var l;
      e.disabled || e.readonly || (l = D.value) == null || l.click();
    }, re = (l) => {
      (l.key === "Enter" || l.key === " ") && (l.preventDefault(), X());
    }, ne = (l) => {
      h2("focus", l);
    }, v = (l) => {
      h2("blur", l);
    }, n = (l) => {
      l.preventDefault(), l.stopPropagation(), !(e.disabled || e.readonly) && (z.value++, z.value === 1 && (g.value = true));
    }, Z = (l) => {
      l.preventDefault(), l.stopPropagation(), !(e.disabled || e.readonly) && (z.value--, z.value === 0 && (g.value = false));
    }, se = (l) => {
      l.preventDefault(), l.stopPropagation(), !(e.disabled || e.readonly) && l.dataTransfer && (l.dataTransfer.dropEffect = "copy");
    }, de = (l) => {
      var G;
      if (l.preventDefault(), l.stopPropagation(), e.disabled || e.readonly) return;
      g.value = false, z.value = 0;
      const V = (G = l.dataTransfer) == null ? void 0 : G.files;
      V && V.length > 0 && ae(V);
    };
    return u({
      focus: () => {
        var l;
        (l = L.value) == null || l.focus();
      },
      clear: () => {
        e.disabled || e.readonly || (k.value = [], h2("change", []), Q("Tous les fichiers ont été supprimés"));
      },
      fileInputRef: D,
      dropZoneRef: L
    }), (l, V) => (openBlock(), createBlock(fe, {
      fieldId: C.value,
      label: l.label,
      message: l.message,
      state: l.state,
      required: l.required,
      disabled: l.disabled
    }, {
      default: withCtx(({ fieldId: G, messageId: H }) => [
        createBaseVNode("div", {
          class: normalizeClass(M.value)
        }, [
          createBaseVNode("input", mergeProps({
            ref_key: "fileInputRef",
            ref: D,
            id: G,
            type: "file",
            accept: l.accept,
            multiple: l.multiple,
            disabled: l.disabled,
            required: l.required,
            "aria-describedby": H,
            class: "su-file-upload-input"
          }, P.value, {
            onChange: ie,
            onFocus: ne,
            onBlur: v
          }), null, 16, cs),
          createBaseVNode("div", {
            ref_key: "dropZoneRef",
            ref: L,
            class: normalizeClass(d.value),
            tabindex: l.disabled ? -1 : 0,
            role: "button",
            "aria-label": l.placeholder,
            onClick: X,
            onKeydown: re,
            onDragenter: n,
            onDragleave: Z,
            onDragover: se,
            onDrop: de
          }, [
            createVNode(unref(We), {
              class: normalizeClass(["su-file-upload-icon", { "su-file-upload-icon--dragging": g.value }]),
              "aria-hidden": "true"
            }, null, 8, ["class"]),
            createBaseVNode("div", ps, [
              createBaseVNode("p", vs, toDisplayString(g.value ? l.dragText : l.placeholder), 1),
              createBaseVNode("p", bs, [
                createTextVNode(toDisplayString(l.browseText) + " ", 1),
                l.accept || l.maxSize ? (openBlock(), createElementBlock("span", hs, [
                  l.accept ? (openBlock(), createElementBlock("span", ms, " • " + toDisplayString(l.accept), 1)) : createCommentVNode("", true),
                  l.maxSize ? (openBlock(), createElementBlock("span", ys, " • Max " + toDisplayString(b(l.maxSize)), 1)) : createCommentVNode("", true)
                ])) : createCommentVNode("", true)
              ])
            ])
          ], 42, fs),
          l.showFileList && m.value.length > 0 ? (openBlock(), createElementBlock("div", {
            key: 0,
            class: "su-file-upload-list",
            role: "list",
            "aria-label": `${m.value.length} fichier(s) sélectionné(s)`
          }, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(m.value, (_) => (openBlock(), createElementBlock("div", {
              key: _.id,
              class: normalizeClass(["su-file-upload-item", `su-file-upload-item--${_.status}`]),
              role: "listitem"
            }, [
              createBaseVNode("div", ks, [
                _.preview ? (openBlock(), createElementBlock("img", {
                  key: 0,
                  src: _.preview,
                  alt: `Aperçu de ${_.name}`,
                  class: "su-file-upload-preview-image"
                }, null, 8, ws)) : (openBlock(), createBlock(resolveDynamicComponent(S(_.file)), {
                  key: 1,
                  class: "su-file-upload-item-icon",
                  "aria-hidden": "true"
                }))
              ]),
              createBaseVNode("div", $s, [
                createBaseVNode("div", xs, toDisplayString(_.name), 1),
                createBaseVNode("div", Bs, [
                  createBaseVNode("span", Ls, toDisplayString(b(_.size)), 1),
                  _.status === "uploading" && _.progress !== void 0 ? (openBlock(), createElementBlock("span", Cs, toDisplayString(_.progress) + "% ", 1)) : createCommentVNode("", true),
                  _.error ? (openBlock(), createElementBlock("span", Is, toDisplayString(_.error), 1)) : createCommentVNode("", true)
                ])
              ]),
              createBaseVNode("div", _s, [
                _.status === "success" ? (openBlock(), createBlock(unref(Ue), {
                  key: 0,
                  class: "su-file-upload-status-icon su-file-upload-status-icon--success",
                  "aria-hidden": "true"
                })) : _.status === "error" ? (openBlock(), createBlock(unref(Xe), {
                  key: 1,
                  class: "su-file-upload-status-icon su-file-upload-status-icon--error",
                  "aria-hidden": "true"
                })) : _.status === "uploading" ? (openBlock(), createElementBlock("div", qs, [...V[0] || (V[0] = [
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
                "aria-label": `Supprimer ${_.name}`,
                onClick: (i) => le(_)
              }, [
                createVNode(unref(Be), {
                  class: "su-file-upload-remove-icon",
                  "aria-hidden": "true"
                })
              ], 8, zs)) : createCommentVNode("", true)
            ], 2))), 128))
          ], 8, gs)) : createCommentVNode("", true)
        ], 2)
      ]),
      _: 1
    }, 8, ["fieldId", "label", "message", "state", "required", "disabled"]));
  }
});
var Ms = ["id", "value", "placeholder", "disabled", "readonly", "required", "rows", "aria-describedby"];
var Rs = {
  key: 0,
  class: "su-textarea-footer"
};
var Vs = ["id", "aria-live"];
var Fs = { class: "sr-only" };
var As = defineComponent({
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
  setup(p, { expose: u, emit: a }) {
    const e = p, k = useModel(p, "modelValue"), h2 = a, w = useAttrs(), D = ref(), L = "textarea-" + useId(), g = computed(() => w.id || L), z = computed(() => k.value || ""), y = computed(() => z.value.length), C = computed(() => e.maxLength ? e.maxLength - y.value : null), m = computed(() => e.maxLength ? C.value !== null && C.value <= e.maxLength * 0.1 : false), M = computed(() => e.maxLength ? C.value !== null && C.value < 0 : false), d = computed(() => [
      "su-textarea-container",
      `su-textarea-container--${e.size}`,
      `su-textarea-container--${e.state}`,
      {
        "su-textarea-container--disabled": e.disabled,
        "su-textarea-container--readonly": e.readonly,
        "su-textarea-container--auto-resize": e.autoResize,
        "su-textarea-container--over-limit": M.value
      }
    ]), P = computed(() => [
      "su-textarea",
      `su-textarea--${e.size}`,
      `su-textarea--${e.state}`,
      {
        "su-textarea--disabled": e.disabled,
        "su-textarea--readonly": e.readonly,
        "su-textarea--auto-resize": e.autoResize,
        "su-textarea--over-limit": M.value
      }
    ]), b = computed(() => [
      "su-textarea-counter",
      {
        "su-textarea-counter--near-limit": m.value,
        "su-textarea-counter--over-limit": M.value
      }
    ]), S = computed(() => {
      const v = {};
      return e.ariaLabel && (v["aria-label"] = e.ariaLabel), e.ariaInvalid !== void 0 && (v["aria-invalid"] = e.ariaInvalid), e.ariaRequired !== void 0 && (v["aria-required"] = e.ariaRequired), e.required && (v["aria-required"] = "true"), (e.state === "error" || M.value) && (v["aria-invalid"] = "true"), v;
    }), q = computed(() => {
      const v = {};
      return e.autocomplete && (v.autocomplete = e.autocomplete), e.maxLength && (v.maxlength = e.maxLength), e.spellcheck !== void 0 && (v.spellcheck = e.spellcheck), e.wrap && (v.wrap = e.wrap), v;
    }), K = async () => {
      if (!e.autoResize || !D.value) return;
      await nextTick();
      const v = D.value, n = e.minRows ? e.minRows * 1.5 : 3 * 1.5, Z = e.maxRows ? e.maxRows * 1.5 : 10 * 1.5;
      v.style.height = "auto";
      const se = v.scrollHeight, de = Math.max(n * 16, Math.min(Z * 16, se));
      v.style.height = `${de}px`;
    }, B = (v) => {
      const n = v.target;
      k.value = n.value, h2("input", v), e.autoResize && K();
    }, A = (v) => {
      h2("change", v);
    }, ae = (v) => {
      h2("focus", v);
    }, le = (v) => {
      h2("blur", v);
    }, ie = (v) => {
      h2("keydown", v);
    }, X = (v) => {
      h2("keyup", v);
    };
    return u({
      focus: () => {
        var v;
        (v = D.value) == null || v.focus();
      },
      select: () => {
        var v;
        (v = D.value) == null || v.select();
      },
      textareaRef: D
    }), watch(k, () => {
      e.autoResize && K();
    }, { immediate: true }), watch(() => e.autoResize, (v) => {
      v && K();
    }), (v, n) => (openBlock(), createBlock(fe, {
      fieldId: g.value,
      label: v.label,
      message: v.message,
      state: v.state,
      required: v.required,
      disabled: v.disabled
    }, {
      default: withCtx(({ fieldId: Z, messageId: se }) => [
        createBaseVNode("div", null, [
          createBaseVNode("div", {
            class: normalizeClass(d.value)
          }, [
            createBaseVNode("textarea", mergeProps({
              ref_key: "textareaRef",
              ref: D,
              id: Z,
              class: P.value,
              value: k.value,
              placeholder: v.placeholder,
              disabled: v.disabled,
              readonly: v.readonly,
              required: v.required,
              rows: v.autoResize ? v.minRows : v.rows,
              "aria-describedby": se
            }, { ...q.value, ...S.value }, {
              onInput: B,
              onChange: A,
              onFocus: ae,
              onBlur: le,
              onKeydown: ie,
              onKeyup: X
            }), null, 16, Ms)
          ], 2),
          v.showCounter && v.maxLength ? (openBlock(), createElementBlock("div", Rs, [
            n[0] || (n[0] = createBaseVNode("div", { class: "su-textarea-footer-spacer" }, null, -1)),
            createBaseVNode("div", {
              id: `${Z}-counter`,
              class: normalizeClass(b.value),
              "aria-live": m.value || M.value ? "polite" : "off"
            }, [
              createBaseVNode("span", Fs, toDisplayString(M.value ? "Limite de caractères dépassée" : "Caractères restants") + ": ", 1),
              createTextVNode(" " + toDisplayString(y.value) + "/" + toDisplayString(v.maxLength), 1)
            ], 10, Vs)
          ])) : createCommentVNode("", true)
        ])
      ]),
      _: 1
    }, 8, ["fieldId", "label", "message", "state", "required", "disabled"]));
  }
});
var Ss = ["dir"];
var Ts = {
  key: 0,
  class: "su-slider-before"
};
var Hs = {
  key: 1,
  class: "su-slider-labels"
};
var Es = { class: "su-slider-label su-slider-label--min" };
var Ks = { class: "su-slider-label su-slider-label--max" };
var Ps = { class: "su-slider-wrapper" };
var js = {
  key: 0,
  class: "su-slider-value"
};
var Os = {
  key: 0,
  class: "su-slider-value-display"
};
var Gs = {
  key: 1,
  class: "su-slider-value-dual"
};
var Zs = { class: "su-slider-value-min" };
var Us = { class: "su-slider-value-max" };
var Ns = ["aria-describedby"];
var Ws = {
  key: 0,
  class: "su-slider-ticks"
};
var Ys = {
  key: 1,
  class: "su-slider-marks"
};
var Xs = { class: "su-slider-mark-label" };
var Qs = ["id", "tabindex"];
var Js = ["id", "tabindex"];
var et = {
  key: 2,
  class: "su-slider-after"
};
var at = defineComponent({
  __name: "Slider",
  props: mergeModels({
    min: { default: 0 },
    max: { default: 100 },
    step: { default: 1 },
    size: { default: "md" },
    state: { default: "default" },
    disabled: { type: Boolean, default: false },
    readonly: { type: Boolean, default: false },
    required: { type: Boolean, default: false },
    orientation: { default: "horizontal" },
    tooltip: { default: "none" },
    marks: { default: () => [] },
    showValue: { type: Boolean, default: true },
    showTicks: { type: Boolean, default: false },
    showLabels: { type: Boolean, default: false },
    formatValue: {},
    label: {},
    message: {},
    ariaInvalid: { type: Boolean },
    ariaRequired: { type: Boolean },
    ariaValueText: {},
    dir: { default: "auto" },
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
  emits: mergeModels(["change", "input", "focus", "blur", "keydown"], ["update:modelValue"]),
  setup(p, { expose: u, emit: a }) {
    const e = p, k = useModel(p, "modelValue"), h2 = a, w = useAttrs(), D = ref(), L = ref(), g = ref(), z = ref(), y = ref(false), C = ref(null), m = ref(false), M = ref(false), d = "slider-" + useId(), P = computed(() => w.id || d), b = computed(() => Array.isArray(k.value)), S = computed({
      get() {
        return k.value === void 0 || k.value === null ? e.min : k.value;
      },
      set(s) {
        k.value = s, h2("change", s), h2("input", s);
      }
    }), q = computed(() => b.value ? S.value[0] : S.value), K = computed(() => b.value ? S.value[1] : S.value), B = (s) => e.formatValue ? e.formatValue(s) : s.toString(), A = computed(() => {
      const s = (q.value - e.min) / (e.max - e.min) * 100;
      return e.dir === "rtl" ? 100 - s : s;
    }), ae = computed(() => {
      const s = (K.value - e.min) / (e.max - e.min) * 100;
      return e.dir === "rtl" ? 100 - s : s;
    }), le = computed(() => [
      "su-slider-container",
      `su-slider-container--${e.size}`,
      `su-slider-container--${e.state}`,
      `su-slider-container--${e.orientation}`,
      {
        "su-slider-container--disabled": e.disabled,
        "su-slider-container--readonly": e.readonly,
        "su-slider-container--dual": b.value,
        "su-slider-container--dragging": y.value,
        "su-slider-container--rtl": e.dir === "rtl"
      }
    ]), ie = computed(() => [
      "su-slider-track",
      `su-slider-track--${e.size}`,
      `su-slider-track--${e.state}`,
      `su-slider-track--${e.orientation}`
    ]), X = (s) => [
      "su-slider-thumb",
      `su-slider-thumb--${e.size}`,
      `su-slider-thumb--${e.state}`,
      `su-slider-thumb--${e.orientation}`,
      {
        "su-slider-thumb--disabled": e.disabled,
        "su-slider-thumb--readonly": e.readonly,
        "su-slider-thumb--active": C.value === s
      }
    ], re = (s) => {
      const f = s === "min" ? q.value : K.value, I = {
        role: "slider",
        "aria-valuemin": e.min,
        "aria-valuemax": e.max,
        "aria-valuenow": f,
        "aria-valuetext": e.ariaValueText || B(f),
        "aria-orientation": e.orientation
      };
      return e.ariaLabel && (I["aria-label"] = b.value ? `${e.ariaLabel} ${s === "min" ? "minimum" : "maximum"}` : e.ariaLabel), e.ariaInvalid !== void 0 && (I["aria-invalid"] = e.ariaInvalid), e.ariaRequired !== void 0 && (I["aria-required"] = e.ariaRequired), e.required && (I["aria-required"] = "true"), e.state === "error" && (I["aria-invalid"] = "true"), I;
    }, ne = (s) => Math.max(e.min, Math.min(e.max, s)), v = (s) => {
      const f = Math.round((s - e.min) / e.step);
      return e.min + f * e.step;
    }, n = (s, f) => {
      if (!L.value) return e.min;
      const I = L.value.getBoundingClientRect();
      let F;
      e.orientation === "horizontal" ? (F = (s - I.left) / I.width, e.dir === "rtl" && (F = 1 - F)) : F = 1 - (f - I.top) / I.height, F = Math.max(0, Math.min(1, F));
      const $ = e.min + F * (e.max - e.min);
      return v(ne($));
    }, Z = (s, f = "min") => {
      if (e.disabled || e.readonly) return;
      const I = ne(v(s));
      if (b.value) {
        const [$, U] = S.value;
        f === "min" ? S.value = [Math.min(I, U), U] : S.value = [$, Math.max(I, $)];
      } else
        S.value = I;
      const F = b.value ? `${f === "min" ? "Minimum" : "Maximum"} : ${B(I)}` : B(I);
      Q(F);
    }, se = (s, f = "min") => {
      if (e.disabled || e.readonly) return;
      s.preventDefault(), y.value = true, C.value = f;
      const I = ($) => {
        const U = n($.clientX, $.clientY);
        Z(U, f);
      }, F = () => {
        y.value = false, C.value = null, document.removeEventListener("mousemove", I), document.removeEventListener("mouseup", F);
      };
      document.addEventListener("mousemove", I), document.addEventListener("mouseup", F);
    }, de = (s) => {
      if (e.disabled || e.readonly) return;
      const f = n(s.clientX, s.clientY);
      if (b.value) {
        const [I, F] = S.value, $ = Math.abs(f - I), U = Math.abs(f - F), j = $ <= U ? "min" : "max";
        Z(f, j);
      } else
        Z(f);
    }, ge = (s, f = "min") => {
      if (e.disabled || e.readonly) return;
      const I = f === "min" ? q.value : K.value;
      let F = I;
      const $ = (e.max - e.min) / 10;
      switch (s.key) {
        case "ArrowRight":
        case "ArrowUp":
          s.preventDefault(), F = I + e.step;
          break;
        case "ArrowLeft":
        case "ArrowDown":
          s.preventDefault(), F = I - e.step;
          break;
        case "PageUp":
          s.preventDefault(), F = I + $;
          break;
        case "PageDown":
          s.preventDefault(), F = I - $;
          break;
        case "Home":
          s.preventDefault(), F = e.min;
          break;
        case "End":
          s.preventDefault(), F = e.max;
          break;
        default:
          return;
      }
      Z(F, f), h2("keydown", s);
    }, we = (s, f = "min") => {
      e.tooltip !== "none" && (f === "min" ? m.value = true : M.value = true), h2("focus", s);
    }, l = (s, f = "min") => {
      e.tooltip !== "none" && (f === "min" ? m.value = false : M.value = false), h2("blur", s);
    }, V = (s = "min") => {
      e.tooltip !== "none" && !e.disabled && (s === "min" ? m.value = true : M.value = true);
    }, G = (s = "min") => {
      e.tooltip !== "none" && (s === "min" ? m.value = false : M.value = false);
    }, H = computed(() => {
      if (!e.showTicks) return [];
      const s = Math.min(21, (e.max - e.min) / e.step + 1), f = (e.max - e.min) / (s - 1);
      return Array.from({ length: s }, (I, F) => {
        const $ = e.min + F * f, U = ($ - e.min) / (e.max - e.min) * 100, j = e.dir === "rtl" ? 100 - U : U;
        return { value: v($), percent: j };
      });
    }), _ = computed(() => !e.marks || e.marks.length === 0 ? [] : e.marks.filter((s) => s >= e.min && s <= e.max).map((s) => {
      const f = (s - e.min) / (e.max - e.min) * 100, I = e.dir === "rtl" ? 100 - f : f;
      return { value: s, percent: I };
    }));
    return u({
      focus: () => {
        var s;
        (s = g.value) == null || s.focus();
      },
      sliderRef: D,
      thumb1Ref: g,
      thumb2Ref: z
    }), (s, f) => (openBlock(), createBlock(fe, {
      fieldId: P.value,
      label: s.label,
      message: s.message,
      state: s.state,
      required: s.required,
      disabled: s.disabled
    }, {
      default: withCtx(({ fieldId: I, messageId: F }) => [
        createBaseVNode("div", {
          class: normalizeClass(le.value),
          dir: s.dir
        }, [
          s.$slots.before ? (openBlock(), createElementBlock("div", Ts, [
            renderSlot(s.$slots, "before")
          ])) : createCommentVNode("", true),
          s.showLabels ? (openBlock(), createElementBlock("div", Hs, [
            createBaseVNode("span", Es, toDisplayString(B(s.min)), 1),
            createBaseVNode("span", Ks, toDisplayString(B(s.max)), 1)
          ])) : createCommentVNode("", true),
          createBaseVNode("div", Ps, [
            s.showValue && s.tooltip === "none" ? (openBlock(), createElementBlock("div", js, [
              b.value ? (openBlock(), createElementBlock("div", Gs, [
                createBaseVNode("span", Zs, toDisplayString(B(q.value)), 1),
                f[12] || (f[12] = createBaseVNode("span", { class: "su-slider-value-separator" }, "-", -1)),
                createBaseVNode("span", Us, toDisplayString(B(K.value)), 1)
              ])) : (openBlock(), createElementBlock("span", Os, toDisplayString(B(q.value)), 1))
            ])) : createCommentVNode("", true),
            createBaseVNode("div", {
              ref_key: "sliderRef",
              ref: D,
              class: "su-slider-slider",
              "aria-describedby": F,
              onClick: de
            }, [
              createBaseVNode("div", {
                ref_key: "trackRef",
                ref: L,
                class: normalizeClass(ie.value)
              }, [
                createBaseVNode("div", {
                  class: "su-slider-track-active",
                  style: normalizeStyle({
                    [s.orientation === "horizontal" ? "left" : "bottom"]: `${b.value ? Math.min(A.value, ae.value) : 0}%`,
                    [s.orientation === "horizontal" ? "width" : "height"]: `${b.value ? Math.abs(ae.value - A.value) : Math.abs(A.value)}%`
                  })
                }, null, 4),
                s.showTicks ? (openBlock(), createElementBlock("div", Ws, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(H.value, ($) => (openBlock(), createElementBlock("div", {
                    key: $.value,
                    class: "su-slider-tick",
                    style: normalizeStyle({
                      [s.orientation === "horizontal" ? "left" : "bottom"]: `${$.percent}%`
                    })
                  }, null, 4))), 128))
                ])) : createCommentVNode("", true),
                _.value.length > 0 ? (openBlock(), createElementBlock("div", Ys, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(_.value, ($) => (openBlock(), createElementBlock("div", {
                    key: $.value,
                    class: "su-slider-mark",
                    style: normalizeStyle({
                      [s.orientation === "horizontal" ? "left" : "bottom"]: `${$.percent}%`
                    })
                  }, [
                    f[13] || (f[13] = createBaseVNode("div", { class: "su-slider-mark-dot" }, null, -1)),
                    createBaseVNode("div", Xs, toDisplayString(B($.value)), 1)
                  ], 4))), 128))
                ])) : createCommentVNode("", true),
                createBaseVNode("div", mergeProps({
                  ref_key: "thumb1Ref",
                  ref: g,
                  id: b.value ? `${I}-min` : I,
                  class: X("min"),
                  style: {
                    [s.orientation === "horizontal" ? "left" : "bottom"]: `${A.value}%`
                  },
                  tabindex: s.disabled ? -1 : 0
                }, re("min"), {
                  onMousedown: f[0] || (f[0] = ($) => se($, "min")),
                  onKeydown: f[1] || (f[1] = ($) => ge($, "min")),
                  onFocus: f[2] || (f[2] = ($) => we($, "min")),
                  onBlur: f[3] || (f[3] = ($) => l($, "min")),
                  onMouseenter: f[4] || (f[4] = ($) => V("min")),
                  onMouseleave: f[5] || (f[5] = ($) => G("min"))
                }), [
                  f[14] || (f[14] = createBaseVNode("div", { class: "su-slider-thumb-handle" }, null, -1)),
                  s.tooltip !== "none" && (m.value || y.value && C.value === "min") ? (openBlock(), createElementBlock("div", {
                    key: 0,
                    class: normalizeClass(["su-slider-tooltip", `su-slider-tooltip--${s.tooltip}`])
                  }, toDisplayString(B(q.value)), 3)) : createCommentVNode("", true)
                ], 16, Qs),
                b.value ? (openBlock(), createElementBlock("div", mergeProps({
                  key: 2,
                  ref_key: "thumb2Ref",
                  ref: z,
                  id: `${I}-max`,
                  class: X("max"),
                  style: {
                    [s.orientation === "horizontal" ? "left" : "bottom"]: `${ae.value}%`
                  },
                  tabindex: s.disabled ? -1 : 0
                }, re("max"), {
                  onMousedown: f[6] || (f[6] = ($) => se($, "max")),
                  onKeydown: f[7] || (f[7] = ($) => ge($, "max")),
                  onFocus: f[8] || (f[8] = ($) => we($, "max")),
                  onBlur: f[9] || (f[9] = ($) => l($, "max")),
                  onMouseenter: f[10] || (f[10] = ($) => V("max")),
                  onMouseleave: f[11] || (f[11] = ($) => G("max"))
                }), [
                  f[15] || (f[15] = createBaseVNode("div", { class: "su-slider-thumb-handle" }, null, -1)),
                  s.tooltip !== "none" && (M.value || y.value && C.value === "max") ? (openBlock(), createElementBlock("div", {
                    key: 0,
                    class: normalizeClass(["su-slider-tooltip", `su-slider-tooltip--${s.tooltip}`])
                  }, toDisplayString(B(K.value)), 3)) : createCommentVNode("", true)
                ], 16, Js)) : createCommentVNode("", true)
              ], 2)
            ], 8, Ns)
          ]),
          s.$slots.after ? (openBlock(), createElementBlock("div", et, [
            renderSlot(s.$slots, "after")
          ])) : createCommentVNode("", true)
        ], 10, Ss)
      ]),
      _: 3
    }, 8, ["fieldId", "label", "message", "state", "required", "disabled"]));
  }
});
var lt = {
  install(p, u = {}) {
    const a = u.prefix || "Su";
    p.component(`${a}FormField`, fe), p.component(`${a}Button`, De), p.component(`${a}ButtonsGroup`, Ge), p.component(`${a}Link`, Me), p.component(`${a}LinksGroup`, aa), p.component(`${a}Input`, oa), p.component(`${a}SelectBox`, Ta), p.component(`${a}RadioGroup`, Na), p.component(`${a}CheckboxGroup`, ts), p.component(`${a}Switch`, ds), p.component(`${a}FileUpload`, Ds), p.component(`${a}Textarea`, As), p.component(`${a}Slider`, at);
  }
};
export {
  De as Button,
  Ge as ButtonsGroup,
  ts as CheckboxGroup,
  Ds as FileUpload,
  fe as FormField,
  oa as Input,
  Me as Link,
  aa as LinksGroup,
  Na as RadioGroup,
  Ta as SelectBox,
  at as Slider,
  ds as Switch,
  As as Textarea,
  tt as accessibility,
  lt as default
};
//# sourceMappingURL=@surgeup_ds-vue.js.map
