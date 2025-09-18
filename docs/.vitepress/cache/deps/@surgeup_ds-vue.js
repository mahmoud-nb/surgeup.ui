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
  useModel,
  useSlots,
  watch,
  withCtx,
  withModifiers
} from "./chunk-FJMVHDE5.js";

// ../package/dist/index.es.js
var Ve = { class: "su-form-field-wrapper" };
var He = ["for"];
var Te = {
  key: 0,
  class: "su-indicator-required",
  "aria-label": "requis"
};
var Ee = ["id"];
var se = defineComponent({
  __name: "FormField",
  props: {
    fieldId: {},
    label: {},
    message: {},
    state: { default: "default" },
    required: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false }
  },
  setup(u) {
    const r = u, a = computed(() => r.message ? `${r.fieldId}-message` : void 0), e = computed(() => {
      const h2 = {};
      return r.state === "error" ? h2["aria-live"] = "assertive" : (r.state === "success" || r.state === "warning") && (h2["aria-live"] = "polite"), h2;
    }), y = computed(() => [
      "su-form-field-message",
      `su-form-field-message--${r.state}`
    ]), b = computed(() => [
      "su-form-field-label",
      {
        "su-form-field-label--required": r.required,
        "su-form-field-label--disabled": r.disabled
      }
    ]);
    return (h2, $) => (openBlock(), createElementBlock("div", Ve, [
      h2.label ? (openBlock(), createElementBlock("label", {
        key: 0,
        for: h2.fieldId,
        class: normalizeClass(b.value)
      }, [
        createTextVNode(toDisplayString(h2.label) + " ", 1),
        h2.required ? (openBlock(), createElementBlock("span", Te, "*")) : createCommentVNode("", true)
      ], 10, He)) : createCommentVNode("", true),
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
var Ke = ["disabled", "tabindex"];
var Pe = {
  key: 0,
  class: "su-button__spinner"
};
var Oe = {
  key: 1,
  class: "su-button__content"
};
var qe = defineComponent({
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
  setup(u, { emit: r }) {
    const a = u, e = r, y = computed(() => [
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
    ]), b = computed(() => !(a.icon && a.iconDisplay === "only")), h2 = (c) => {
      a.disabled || a.loading || e("click", c);
    }, $ = (c) => {
      (c.key === "Enter" || c.key === " ") && (c.preventDefault(), !a.disabled && !a.loading && e("click", c)), e("keydown", c);
    }, g = (c) => {
      e("focus", c);
    }, k = (c) => {
      e("blur", c);
    }, I = computed(() => {
      const c = {};
      return a.ariaLabel && (c["aria-label"] = a.ariaLabel), a.ariaDescribedBy && (c["aria-describedby"] = a.ariaDescribedBy), a.ariaExpanded !== void 0 && (c["aria-expanded"] = a.ariaExpanded), a.ariaPressed !== void 0 && (c["aria-pressed"] = a.ariaPressed), a.role && (c.role = a.role), a.loading && (c["aria-busy"] = "true", c["aria-live"] = "polite"), a.disabled && (c["aria-disabled"] = "true"), a.icon && a.iconDisplay === "only" && !a.ariaLabel && console.warn('Button with icon and iconDisplay="only" should have an ariaLabel for accessibility'), c;
    });
    return (c, L) => (openBlock(), createElementBlock("button", mergeProps({
      class: y.value,
      disabled: c.disabled || c.loading,
      tabindex: c.disabled ? -1 : c.tabIndex
    }, I.value, {
      onClick: h2,
      onKeydown: $,
      onFocus: g,
      onBlur: k
    }), [
      c.loading ? (openBlock(), createElementBlock("span", Pe, [...L[0] || (L[0] = [
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
      c.loading ? createCommentVNode("", true) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
        c.icon ? (openBlock(), createBlock(resolveDynamicComponent(c.icon), {
          key: 0,
          class: "su-button__icon",
          "aria-hidden": "true"
        })) : createCommentVNode("", true),
        b.value ? (openBlock(), createElementBlock("span", Oe, [
          renderSlot(c.$slots, "default")
        ])) : createCommentVNode("", true)
      ], 64))
    ], 16, Ke));
  }
});
var je = defineComponent({
  __name: "ButtonsGroup",
  props: {
    gap: { default: "md" },
    size: {},
    variant: {},
    ariaLabel: {},
    ariaDescribedBy: {},
    role: {}
  },
  setup(u) {
    const r = u, a = useSlots(), e = computed(() => [
      "su-buttons-group",
      `su-buttons-group--gap-${r.gap}`,
      {
        "su-buttons-group--connected": r.gap === "none"
      }
    ]), y = computed(() => {
      if (!a.default) return [];
      const h2 = a.default(), $ = [];
      for (const g of h2)
        if (g.type === qe) {
          const k = { ...g.props };
          if (r.size && (k.size = r.size), r.variant && (k.variant = r.variant), r.gap === "none") {
            const I = k.class || "";
            k.class = `${I} su-buttons-group__button`.trim();
          }
          $.push(h(g.type, k, g == null ? void 0 : g.children));
        } else {
          if (g.type === Comment || g.type === Text || g.type === Fragment)
            continue;
          console.warn("ButtonsGroup expects only Button components as children. Found:", g.type);
        }
      return $;
    }), b = computed(() => {
      const h2 = {};
      return r.ariaLabel && (h2["aria-label"] = r.ariaLabel), r.ariaDescribedBy && (h2["aria-describedby"] = r.ariaDescribedBy), r.role && (h2.role = r.role), h2;
    });
    return (h2, $) => (openBlock(), createElementBlock("div", mergeProps({ class: e.value }, b.value), [
      (openBlock(true), createElementBlock(Fragment, null, renderList(y.value, (g, k) => (openBlock(), createBlock(resolveDynamicComponent(g), { key: k }))), 128))
    ], 16));
  }
});
function Ge(u, r) {
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
function Ze(u, r) {
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
function ge(u, r) {
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
function Ne(u, r) {
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
function We(u, r) {
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
function Ue(u, r) {
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
function Ye(u, r) {
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
function Qe(u, r) {
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
function Je(u, r) {
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
function ke(u, r) {
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
var Xe = {
  key: 1,
  class: "su-link__content"
};
var De = defineComponent({
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
  setup(u, { emit: r }) {
    const a = u, e = r, y = computed(() => a.to !== void 0), b = computed(() => a.external || a.href && (a.href.startsWith("http") || a.href.startsWith("//") || a.target === "_blank")), h2 = computed(() => {
      const i = {};
      return y.value || (i.href = a.href, b.value ? (i.target = a.target || "_blank", i.rel = a.rel || "noopener noreferrer") : (a.target && (i.target = a.target), a.rel && (i.rel = a.rel))), a.ariaLabel && (i["aria-label"] = a.ariaLabel), a.ariaDescribedBy && (i["aria-describedby"] = a.ariaDescribedBy), a.role && (i.role = a.role), a.disabled ? (i["aria-disabled"] = "true", i.tabindex = -1) : i.tabindex = a.tabIndex, i;
    }), $ = computed(() => [
      "su-link",
      `su-link--${a.variant}`,
      `su-link--${a.size}`,
      `su-link--underline-${a.underline}`,
      {
        "su-link--disabled": a.disabled,
        "su-link--external": b.value,
        "su-link--icon-only": a.icon && a.iconDisplay === "only",
        "su-link--icon-right": a.icon && a.iconDisplay === "right"
      }
    ]), g = computed(() => !(a.icon && a.iconDisplay === "only")), k = (i) => {
      if (a.disabled) {
        i.preventDefault();
        return;
      }
      e("click", i);
    }, I = (i) => {
      if ((i.key === "Enter" || i.key === " ") && a.disabled) {
        i.preventDefault();
        return;
      }
      e("keydown", i);
    }, c = (i) => {
      e("focus", i);
    }, L = (i) => {
      e("blur", i);
    };
    return a.icon && a.iconDisplay === "only" && !a.ariaLabel && console.warn('Link with icon and iconDisplay="only" should have an ariaLabel for accessibility'), (i, m) => (openBlock(), createBlock(resolveDynamicComponent(y.value ? "router-link" : "a"), mergeProps({ class: $.value }, y.value ? { to: i.to, ...h2.value } : h2.value, {
      onClick: k,
      onKeydown: I,
      onFocus: c,
      onBlur: L
    }), {
      default: withCtx(() => [
        i.icon ? (openBlock(), createBlock(resolveDynamicComponent(i.icon), {
          key: 0,
          class: "su-link__icon",
          "aria-hidden": "true"
        })) : createCommentVNode("", true),
        g.value ? (openBlock(), createElementBlock("span", Xe, [
          renderSlot(i.$slots, "default")
        ])) : createCommentVNode("", true),
        b.value && !i.icon && g.value ? (openBlock(), createBlock(unref(Ge), {
          key: 2,
          class: "su-link__external-icon",
          "aria-hidden": "true"
        })) : createCommentVNode("", true)
      ]),
      _: 3
    }, 16, ["class"]));
  }
});
var ea = defineComponent({
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
  setup(u) {
    const r = u, a = useSlots(), e = computed(() => [
      "su-links-group",
      `su-links-group--gap-${r.gap}`,
      `su-links-group--${r.direction}`,
      {
        "su-links-group--connected": r.gap === "none"
      }
    ]), y = computed(() => {
      if (!a.default) return [];
      const h2 = a.default(), $ = [];
      for (const g of h2)
        if (g.type === De) {
          const k = { ...g.props };
          if (r.size && (k.size = r.size), r.variant && (k.variant = r.variant), r.underline && (k.underline = r.underline), r.gap === "none") {
            const I = k.class || "";
            k.class = `${I} su-links-group__link`.trim();
          }
          $.push(h(g.type, k, g == null ? void 0 : g.children));
        } else {
          if (g.type === Comment || g.type === Text || g.type === Fragment)
            continue;
          console.warn("LinksGroup expects only Link components as children. Found:", g.type);
        }
      return $;
    }), b = computed(() => {
      const h2 = {};
      return r.ariaLabel && (h2["aria-label"] = r.ariaLabel), r.ariaDescribedBy && (h2["aria-describedby"] = r.ariaDescribedBy), r.role && (h2.role = r.role), h2;
    });
    return (h2, $) => (openBlock(), createElementBlock("div", mergeProps({ class: e.value }, b.value), [
      (openBlock(true), createElementBlock(Fragment, null, renderList(y.value, (g, k) => (openBlock(), createBlock(resolveDynamicComponent(g), { key: k }))), 128))
    ], 16));
  }
});
var aa = 0;
function fe(u = "su") {
  return `${u}-${++aa}-${Date.now().toString(36)}`;
}
var sa = ["dir"];
var ta = ["id", "type", "value", "placeholder", "disabled", "readonly", "required", "aria-describedby"];
var la = defineComponent({
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
  setup(u, { expose: r, emit: a }) {
    const e = u, y = useModel(u, "modelValue"), b = a, h2 = ref(), $ = fe("input"), g = computed(() => [
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
    ]), k = computed(() => [
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
    ]), I = computed(() => {
      const d = {};
      return e.ariaLabel && (d["aria-label"] = e.ariaLabel), e.ariaInvalid !== void 0 && (d["aria-invalid"] = e.ariaInvalid), e.ariaRequired !== void 0 && (d["aria-required"] = e.ariaRequired), e.required && (d["aria-required"] = "true"), e.state === "error" && (d["aria-invalid"] = "true"), d;
    }), c = computed(() => {
      const d = {};
      return e.autocomplete && (d.autocomplete = e.autocomplete), e.min !== void 0 && (d.min = e.min), e.max !== void 0 && (d.max = e.max), e.step !== void 0 && (d.step = e.step), e.minLength !== void 0 && (d.minlength = e.minLength), e.maxLength !== void 0 && (d.maxlength = e.maxLength), e.pattern && (d.pattern = e.pattern), d;
    }), L = (d) => {
      const Y = d.target;
      y.value = e.type === "number" ? Number(Y.value) : Y.value, b("input", d);
    }, i = (d) => {
      b("change", d);
    }, m = (d) => {
      b("focus", d);
    }, T = (d) => {
      b("blur", d);
    }, v = (d) => {
      b("keydown", d);
    }, A = (d) => {
      b("keyup", d);
    }, _ = (d) => {
      e.disabled || e.readonly || b("prefix-click", d);
    }, E = (d) => {
      e.disabled || e.readonly || b("prefix-icon-click", d);
    }, B = (d) => {
      e.disabled || e.readonly || b("suffix-click", d);
    }, z = (d) => {
      e.disabled || e.readonly || b("suffix-icon-click", d);
    };
    return r({
      focus: () => {
        var d;
        (d = h2.value) == null || d.focus();
      },
      select: () => {
        var d;
        (d = h2.value) == null || d.select();
      },
      inputRef: h2
    }), (d, Y) => (openBlock(), createBlock(se, {
      fieldId: unref($),
      label: d.label,
      message: d.message,
      state: d.state,
      required: d.required,
      disabled: d.disabled
    }, {
      default: withCtx(({ fieldId: de, messageId: p }) => [
        createBaseVNode("div", {
          class: normalizeClass(g.value),
          dir: d.dir
        }, [
          d.prefixIcon ? (openBlock(), createElementBlock("div", {
            key: 0,
            class: "su-input-prefix su-input-prefix--icon su-input-prefix--clickable",
            onClick: E
          }, [
            (openBlock(), createBlock(resolveDynamicComponent(d.prefixIcon), {
              class: "su-input-icon",
              "aria-hidden": "true"
            }))
          ])) : d.prefix ? (openBlock(), createElementBlock("div", {
            key: 1,
            class: "su-input-prefix su-input-prefix--text su-input-prefix--clickable",
            onClick: _
          }, toDisplayString(d.prefix), 1)) : createCommentVNode("", true),
          createBaseVNode("input", mergeProps({
            ref_key: "inputRef",
            ref: h2,
            id: de,
            class: k.value,
            type: d.type,
            value: y.value,
            placeholder: d.placeholder,
            disabled: d.disabled,
            readonly: d.readonly,
            required: d.required,
            "aria-describedby": p
          }, { ...c.value, ...I.value }, {
            onInput: L,
            onChange: i,
            onFocus: m,
            onBlur: T,
            onKeydown: v,
            onKeyup: A
          }), null, 16, ta),
          d.suffix ? (openBlock(), createElementBlock("div", {
            key: 2,
            class: "su-input-suffix su-input-suffix--text su-input-suffix--clickable",
            onClick: B
          }, toDisplayString(d.suffix), 1)) : d.suffixIcon ? (openBlock(), createElementBlock("div", {
            key: 3,
            class: "su-input-suffix su-input-suffix--icon su-input-suffix--clickable",
            onClick: z
          }, [
            (openBlock(), createBlock(resolveDynamicComponent(d.suffixIcon), {
              class: "su-input-icon",
              "aria-hidden": "true"
            }))
          ])) : createCommentVNode("", true)
        ], 10, sa)
      ]),
      _: 1
    }, 8, ["fieldId", "label", "message", "state", "required", "disabled"]));
  }
});
var ia = 0;
function ra(u = "su") {
  return `${u}-${++ia}-${Date.now().toString(36)}`;
}
function oa(u) {
  return [
    "button:not([disabled])",
    "input:not([disabled])",
    "select:not([disabled])",
    "textarea:not([disabled])",
    "a[href]",
    '[tabindex]:not([tabindex="-1"])'
  ].some((a) => u.matches(a));
}
function ze(u) {
  const r = u.querySelectorAll(
    'button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), a[href], [tabindex]:not([tabindex="-1"])'
  ), a = r[0], e = r[r.length - 1], y = (b) => {
    b.key === "Tab" && (b.shiftKey ? document.activeElement === a && (b.preventDefault(), e.focus()) : document.activeElement === e && (b.preventDefault(), a.focus()));
  };
  return u.addEventListener("keydown", y), a == null || a.focus(), () => {
    u.removeEventListener("keydown", y);
  };
}
function Z(u, r = "polite") {
  const a = document.createElement("div");
  a.setAttribute("aria-live", r), a.setAttribute("aria-atomic", "true"), a.className = "sr-only", a.textContent = u, document.body.appendChild(a), setTimeout(() => {
    document.body.removeChild(a);
  }, 1e3);
}
function na() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
function ua() {
  return window.matchMedia("(prefers-contrast: high)").matches;
}
function da(u, r) {
  return 4.5;
}
function ca(u, r = "AA") {
  return u >= (r === "AAA" ? 7 : 4.5);
}
var Ms = Object.freeze(Object.defineProperty({
  __proto__: null,
  announceToScreenReader: Z,
  generateId: ra,
  getContrastRatio: da,
  isContrastValid: ca,
  isFocusable: oa,
  prefersHighContrast: ua,
  prefersReducedMotion: na,
  trapFocus: ze
}, Symbol.toStringTag, { value: "Module" }));
var fa = ["dir"];
var pa = ["id", "tabindex"];
var ha = { class: "su-select-content" };
var ba = {
  key: 0,
  class: "su-select-tags"
};
var va = { class: "su-select-tag-label" };
var ma = ["aria-label", "onClick"];
var ya = {
  key: 0,
  class: "su-select-tag su-select-tag--more"
};
var ga = {
  key: 1,
  class: "su-select-display"
};
var ka = { class: "su-select-display-text" };
var wa = { class: "su-select-actions" };
var $a = {
  key: 0,
  class: "su-select-spinner"
};
var xa = ["id", "aria-multiselectable"];
var Ba = {
  key: 0,
  class: "su-select-search"
};
var _a = { class: "su-select-search-container" };
var La = ["placeholder", "value"];
var Ca = { class: "su-select-options" };
var Ia = ["aria-label"];
var qa = ["aria-selected", "aria-disabled", "onClick", "onMouseenter"];
var Da = {
  key: 0,
  class: "su-select-option-checkbox"
};
var za = { class: "su-select-option-content" };
var Ra = { class: "su-select-option-label" };
var Fa = {
  key: 0,
  class: "su-select-option-description"
};
var Aa = {
  key: 1,
  class: "su-select-no-options"
};
var Sa = defineComponent({
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
  setup(u, { expose: r, emit: a }) {
    const e = u, y = useModel(u, "modelValue"), b = a, h2 = useAttrs(), $ = ref(), g = ref(), k = ref(), I = ref(), c = ref(false), L = ref(""), i = ref(-1), m = ref(null), T = computed(() => h2.id || fieldId), v = computed(() => `${T.value}-listbox`), A = computed(() => e.groups && e.groups.length > 0 ? e.groups.flatMap(
      (l) => l.options.map((C) => ({ ...C, group: l.label }))
    ) : e.options || []), _ = computed(() => {
      if (!e.searchable || !L.value)
        return A.value;
      const l = L.value.toLowerCase();
      return A.value.filter(
        (C) => C.label.toLowerCase().includes(l) || C.description && C.description.toLowerCase().includes(l)
      );
    }), E = computed(() => {
      const l = {};
      return _.value.forEach((C) => {
        const ee = C.group || "";
        l[ee] || (l[ee] = []), l[ee].push(C);
      }), l;
    }), B = computed({
      get() {
        return e.multiple ? Array.isArray(y.value) ? y.value : y.value !== void 0 && y.value !== null ? [y.value] : [] : y.value;
      },
      set(l) {
        y.value = l, b("change", l);
      }
    }), z = computed(() => {
      if (e.multiple) {
        const l = B.value;
        return l ? A.value.filter((C) => l.includes(C.value)) : [];
      } else {
        const l = B.value;
        return l != null ? A.value.filter((C) => C.value === l) : [];
      }
    }), te = computed(() => {
      var l;
      return z.value.length === 0 ? e.placeholder : e.multiple ? z.value.length === 1 ? z.value[0].label : `${z.value.length} éléments sélectionnés` : ((l = z.value[0]) == null ? void 0 : l.label) || e.placeholder;
    }), ue = computed(() => [
      "su-select-container",
      `su-select-container--${e.size}`,
      `su-select-container--${e.state}`,
      {
        "su-select-container--disabled": e.disabled,
        "su-select-container--readonly": e.readonly,
        "su-select-container--open": c.value,
        "su-select-container--multiple": e.multiple,
        "su-select-container--rtl": e.dir === "rtl"
      }
    ]), d = computed(() => [
      "su-select-trigger",
      `su-select-trigger--${e.size}`,
      `su-select-trigger--${e.state}`,
      `su-select-trigger--align-${e.textAlign}`,
      {
        "su-select-trigger--disabled": e.disabled,
        "su-select-trigger--readonly": e.readonly,
        "su-select-trigger--open": c.value,
        "su-select-trigger--has-value": z.value.length > 0,
        "su-select-trigger--placeholder": z.value.length === 0
      }
    ]), Y = computed(() => e.message ? `${T.value}-message` : void 0), de = computed(() => {
      const l = {
        "aria-haspopup": "listbox",
        "aria-expanded": c.value,
        "aria-controls": c.value ? v.value : void 0,
        role: "combobox"
      };
      if (e.ariaLabel && (l["aria-label"] = e.ariaLabel), e.ariaDescribedBy || Y.value) {
        const C = [e.ariaDescribedBy, Y.value].filter(Boolean).join(" ");
        l["aria-describedby"] = C;
      }
      return e.ariaInvalid !== void 0 && (l["aria-invalid"] = e.ariaInvalid), e.ariaRequired !== void 0 && (l["aria-required"] = e.ariaRequired), e.required && (l["aria-required"] = "true"), e.state === "error" && (l["aria-invalid"] = "true"), e.multiple && (l["aria-multiselectable"] = "true"), l;
    }), p = () => {
      e.disabled || e.readonly || (c.value ? K() : j());
    }, j = async () => {
      e.disabled || e.readonly || (c.value = true, L.value = "", i.value = -1, b("open"), await nextTick(), e.searchable && I.value && I.value.focus(), k.value && (m.value = ze(k.value)));
    }, K = () => {
      c.value = false, i.value = -1, m.value && (m.value(), m.value = null), b("close"), g.value && g.value.focus();
    }, X = (l) => {
      if (l.disabled) return;
      let C;
      if (e.multiple) {
        const ie = B.value || [];
        if (ie.includes(l.value))
          C = ie.filter((Q) => Q !== l.value);
        else {
          if (e.maxSelectedItems && ie.length >= e.maxSelectedItems) {
            Z(`Maximum ${e.maxSelectedItems} éléments sélectionnables`);
            return;
          }
          C = [...ie, l.value];
        }
      } else
        C = l.value;
      B.value = C;
      const ee = e.multiple && B.value.includes(l.value) ? "désélectionné" : "sélectionné";
      Z(`${l.label} ${ee}`), !e.multiple && e.closeOnSelect && K();
    }, pe = (l) => {
      l.stopPropagation();
      const C = e.multiple ? [] : void 0;
      B.value = C, Z("Sélection effacée");
    }, ve = (l, C) => {
      if (C.stopPropagation(), e.multiple) {
        const ie = (B.value || []).filter((he) => he !== l.value);
        B.value = ie, Z(`${l.label} retiré de la sélection`);
      }
    }, $e = (l) => {
      const C = l.target;
      L.value = C.value, i.value = -1, b("search", L.value);
    }, me = (l) => {
      switch (l.key) {
        case "Enter":
        case " ":
          if (l.preventDefault(), !c.value)
            j();
          else if (i.value >= 0) {
            const C = _.value[i.value];
            C && X(C);
          }
          break;
        case "Escape":
          l.preventDefault(), K();
          break;
        case "ArrowDown":
          l.preventDefault(), c.value ? i.value = Math.min(i.value + 1, _.value.length - 1) : j();
          break;
        case "ArrowUp":
          l.preventDefault(), c.value && (i.value = Math.max(i.value - 1, -1));
          break;
        case "Home":
          c.value && (l.preventDefault(), i.value = 0);
          break;
        case "End":
          c.value && (l.preventDefault(), i.value = _.value.length - 1);
          break;
        case "Tab":
          c.value && K();
          break;
      }
    }, t = (l) => {
      b("focus", l);
    }, q = (l) => {
      setTimeout(() => {
        c.value && $.value && !$.value.contains(document.activeElement) && (K(), b("blur", l));
      }, 0);
    }, S = (l) => {
      c.value && $.value && !$.value.contains(l.target) && K();
    };
    return r({
      focus: () => {
        var l;
        (l = g.value) == null || l.focus();
      },
      open: () => {
        j();
      },
      close: () => {
        K();
      },
      selectRef: $,
      inputRef: g
    }), onMounted(() => {
      document.addEventListener("click", S, { passive: true });
    }), onUnmounted(() => {
      document.removeEventListener("click", S, { passive: true }), m.value && m.value();
    }), watch(y, () => {
      i.value = -1;
    }), (l, C) => (openBlock(), createBlock(se, {
      fieldId: l.fieldId,
      label: l.label,
      message: l.message,
      state: l.state,
      required: l.required,
      disabled: l.disabled
    }, {
      default: withCtx(({ fieldId: ee, messageId: ie }) => {
        var he;
        return [
          createBaseVNode("div", {
            class: "su-select-wrapper",
            dir: l.dir
          }, [
            createBaseVNode("div", {
              ref_key: "selectRef",
              ref: $,
              class: normalizeClass(ue.value)
            }, [
              createBaseVNode("div", mergeProps({
                ref_key: "inputRef",
                ref: g,
                id: ee,
                class: d.value,
                tabindex: l.disabled ? -1 : 0
              }, de.value, {
                onClick: p,
                onKeydown: me,
                onFocus: t,
                onBlur: q
              }), [
                createBaseVNode("div", ha, [
                  l.multiple && z.value.length > 0 ? (openBlock(), createElementBlock("div", ba, [
                    (openBlock(true), createElementBlock(Fragment, null, renderList(z.value.slice(0, 3), (Q) => (openBlock(), createElementBlock("span", {
                      key: Q.value,
                      class: "su-select-tag"
                    }, [
                      Q.icon ? (openBlock(), createBlock(resolveDynamicComponent(Q.icon), {
                        key: 0,
                        class: "su-select-tag-icon",
                        "aria-hidden": "true"
                      })) : createCommentVNode("", true),
                      createBaseVNode("span", va, toDisplayString(Q.label), 1),
                      createBaseVNode("button", {
                        type: "button",
                        class: "su-select-tag-remove",
                        "aria-label": `Retirer ${Q.label}`,
                        onClick: (ce) => ve(Q, ce)
                      }, [
                        createVNode(unref(ke), { class: "su-select-tag-remove-icon" })
                      ], 8, ma)
                    ]))), 128)),
                    z.value.length > 3 ? (openBlock(), createElementBlock("span", ya, " +" + toDisplayString(z.value.length - 3), 1)) : createCommentVNode("", true)
                  ])) : (openBlock(), createElementBlock("div", ga, [
                    (he = z.value[0]) != null && he.icon ? (openBlock(), createBlock(resolveDynamicComponent(z.value[0].icon), {
                      key: 0,
                      class: "su-select-display-icon",
                      "aria-hidden": "true"
                    })) : createCommentVNode("", true),
                    createBaseVNode("span", ka, toDisplayString(te.value), 1)
                  ]))
                ]),
                createBaseVNode("div", wa, [
                  l.loading ? (openBlock(), createElementBlock("div", $a, [...C[0] || (C[0] = [
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
                  ])])) : l.clearable && z.value.length > 0 && !l.disabled && !l.readonly ? (openBlock(), createElementBlock("button", {
                    key: 1,
                    type: "button",
                    class: "su-select-clear",
                    "aria-label": "Effacer la sélection",
                    onClick: pe
                  }, [
                    createVNode(unref(ke), { class: "su-select-clear-icon" })
                  ])) : createCommentVNode("", true),
                  createVNode(unref(Ne), {
                    class: normalizeClass(["su-select-chevron", { "su-select-chevron--open": c.value }]),
                    "aria-hidden": "true"
                  }, null, 8, ["class"])
                ])
              ], 16, pa),
              createVNode(Transition, { name: "su-select-dropdown" }, {
                default: withCtx(() => [
                  c.value ? (openBlock(), createElementBlock("div", {
                    key: 0,
                    ref_key: "dropdownRef",
                    ref: k,
                    id: v.value,
                    class: "su-select-dropdown",
                    style: normalizeStyle({ maxHeight: l.maxHeight }),
                    role: "listbox",
                    "aria-multiselectable": l.multiple
                  }, [
                    l.searchable ? (openBlock(), createElementBlock("div", Ba, [
                      createBaseVNode("div", _a, [
                        createVNode(unref(Qe), {
                          class: "su-select-search-icon",
                          "aria-hidden": "true"
                        }),
                        createBaseVNode("input", {
                          ref_key: "searchInputRef",
                          ref: I,
                          type: "text",
                          class: "su-select-search-input",
                          placeholder: l.searchPlaceholder,
                          value: L.value,
                          onInput: $e,
                          onKeydown: me
                        }, null, 40, La)
                      ])
                    ])) : createCommentVNode("", true),
                    createBaseVNode("div", Ca, [
                      _.value.length > 0 ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList(E.value, (Q, ce) => (openBlock(), createElementBlock(Fragment, { key: ce }, [
                        ce && e.groups && e.groups.length > 0 ? (openBlock(), createElementBlock("div", {
                          key: 0,
                          class: "su-select-group-header",
                          role: "group",
                          "aria-label": ce
                        }, toDisplayString(ce), 9, Ia)) : createCommentVNode("", true),
                        (openBlock(true), createElementBlock(Fragment, null, renderList(Q, (M) => (openBlock(), createElementBlock("div", {
                          key: M.value,
                          class: normalizeClass(["su-select-option", {
                            "su-select-option--selected": l.multiple ? B.value.includes(M.value) : B.value === M.value,
                            "su-select-option--disabled": M.disabled,
                            "su-select-option--focused": _.value.indexOf(M) === i.value
                          }]),
                          role: "option",
                          "aria-selected": l.multiple ? B.value.includes(M.value) : B.value === M.value,
                          "aria-disabled": M.disabled,
                          onClick: (Re) => X(M),
                          onMouseenter: (Re) => i.value = _.value.indexOf(M)
                        }, [
                          l.multiple ? (openBlock(), createElementBlock("div", Da, [
                            createBaseVNode("div", {
                              class: normalizeClass(["su-select-checkbox", {
                                "su-select-checkbox--checked": B.value.includes(M.value)
                              }])
                            }, [
                              B.value.includes(M.value) ? (openBlock(), createBlock(unref(ge), {
                                key: 0,
                                class: "su-select-checkbox-icon",
                                "aria-hidden": "true"
                              })) : createCommentVNode("", true)
                            ], 2)
                          ])) : createCommentVNode("", true),
                          M.icon ? (openBlock(), createBlock(resolveDynamicComponent(M.icon), {
                            key: 1,
                            class: "su-select-option-icon",
                            "aria-hidden": "true"
                          })) : createCommentVNode("", true),
                          createBaseVNode("div", za, [
                            createBaseVNode("div", Ra, toDisplayString(M.label), 1),
                            M.description ? (openBlock(), createElementBlock("div", Fa, toDisplayString(M.description), 1)) : createCommentVNode("", true)
                          ]),
                          !l.multiple && B.value === M.value ? (openBlock(), createBlock(unref(ge), {
                            key: 2,
                            class: "su-select-option-check",
                            "aria-hidden": "true"
                          })) : createCommentVNode("", true)
                        ], 42, qa))), 128))
                      ], 64))), 128)) : (openBlock(), createElementBlock("div", Aa, toDisplayString(L.value ? l.noResultsText : l.noOptionsText), 1))
                    ])
                  ], 12, xa)) : createCommentVNode("", true)
                ]),
                _: 1
              })
            ], 2)
          ], 8, fa)
        ];
      }),
      _: 1
    }, 8, ["fieldId", "label", "message", "state", "required", "disabled"]));
  }
});
var Ma = ["aria-describedby"];
var Va = {
  key: 0,
  class: "su-radio-group-before"
};
var Ha = ["for"];
var Ta = ["id", "name", "value", "checked", "disabled", "required", "onChange"];
var Ea = { class: "su-radio-content" };
var Ka = { class: "su-radio-text" };
var Pa = { class: "su-radio-label" };
var Oa = {
  key: 0,
  class: "su-radio-description"
};
var ja = {
  key: 0,
  class: "su-radio-group-after"
};
var Ga = defineComponent({
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
  setup(u, { emit: r }) {
    const a = useModel(u, "modelValue"), e = u, y = r, b = useAttrs(), h2 = fe("radio-group");
    computed(() => b.id || h2);
    const $ = computed(() => e.name || h2), g = computed(() => [
      "su-radio-group",
      `su-radio-group--${e.size}`,
      `su-radio-group--${e.state}`,
      `su-radio-group--${e.displayType}`,
      `su-radio-group--${e.direction}`,
      {
        "su-radio-group--disabled": e.disabled,
        "su-radio-group--scrollable": e.maxHeight
      }
    ]), k = (m) => [
      "su-radio-option",
      `su-radio-option--${e.size}`,
      `su-radio-option--${e.state}`,
      `su-radio-option--${e.displayType}`,
      {
        "su-radio-option--selected": a.value === m.value,
        "su-radio-option--disabled": m.disabled || e.disabled
      }
    ], I = computed(() => {
      const m = {
        role: "radiogroup"
      };
      if (e.ariaLabel && (m["aria-label"] = e.ariaLabel), e.ariaDescribedBy) {
        const T = [e.ariaDescribedBy].filter(Boolean).join(" ");
        m["aria-describedby"] = T;
      }
      return e.required && (m["aria-required"] = "true"), e.state === "error" && (m["aria-invalid"] = "true"), m;
    }), c = (m) => {
      e.disabled || (a.value = m, y("change", m));
    }, L = (m) => {
      y("focus", m);
    }, i = (m) => {
      y("blur", m);
    };
    return (m, T) => (openBlock(), createBlock(se, {
      fieldId: unref(h2),
      label: m.label,
      message: m.message,
      state: m.state,
      required: m.required,
      disabled: m.disabled
    }, {
      default: withCtx(({ fieldId: v, messageId: A }) => [
        createBaseVNode("fieldset", mergeProps({ class: g.value }, I.value, { "aria-describedby": A }), [
          createBaseVNode("div", {
            class: "su-radio-group-options",
            style: normalizeStyle({ maxHeight: m.maxHeight || void 0, overflowY: m.maxHeight ? "auto" : void 0 })
          }, [
            m.$slots.before ? (openBlock(), createElementBlock("div", Va, [
              renderSlot(m.$slots, "before")
            ])) : createCommentVNode("", true),
            (openBlock(true), createElementBlock(Fragment, null, renderList(m.options, (_) => (openBlock(), createElementBlock("label", {
              key: _.value,
              class: normalizeClass(k(_)),
              for: `${v}-${_.value}`
            }, [
              createBaseVNode("input", {
                id: `${v}-${_.value}`,
                type: "radio",
                name: $.value,
                value: _.value,
                checked: a.value === _.value,
                disabled: _.disabled || m.disabled,
                required: m.required,
                class: "su-radio-input",
                onChange: (E) => c(_.value),
                onFocus: L,
                onBlur: i
              }, null, 40, Ta),
              T[0] || (T[0] = createBaseVNode("div", { class: "su-radio-indicator" }, [
                createBaseVNode("div", { class: "su-radio-dot" })
              ], -1)),
              createBaseVNode("div", Ea, [
                _.icon ? (openBlock(), createBlock(resolveDynamicComponent(_.icon), {
                  key: 0,
                  class: "su-radio-icon",
                  "aria-hidden": "true"
                })) : createCommentVNode("", true),
                createBaseVNode("div", Ka, [
                  createBaseVNode("div", Pa, toDisplayString(_.label), 1),
                  _.description ? (openBlock(), createElementBlock("div", Oa, toDisplayString(_.description), 1)) : createCommentVNode("", true)
                ])
              ])
            ], 10, Ha))), 128))
          ], 4),
          m.$slots.after ? (openBlock(), createElementBlock("div", ja, [
            renderSlot(m.$slots, "after")
          ])) : createCommentVNode("", true)
        ], 16, Ma)
      ]),
      _: 3
    }, 8, ["fieldId", "label", "message", "state", "required", "disabled"]));
  }
});
var Za = ["aria-describedby"];
var Na = {
  key: 0,
  class: "su-checkbox-group-before"
};
var Wa = ["for"];
var Ua = ["id", "value", "checked", "disabled", "required", "onChange"];
var Ya = { class: "su-checkbox-content" };
var Qa = { class: "su-checkbox-text" };
var Ja = { class: "su-checkbox-label" };
var Xa = {
  key: 0,
  class: "su-checkbox-group-after"
};
var es = defineComponent({
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
  setup(u, { emit: r }) {
    const a = u, e = useModel(u, "modelValue"), y = r, b = useAttrs(), h2 = fe("checkbox-group");
    computed(() => b.id || h2);
    const $ = computed({
      get() {
        return Array.isArray(e.value) ? e.value : [];
      },
      set(v) {
        e.value = v, y("change", v);
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
    ]), k = (v) => [
      "su-checkbox-option",
      `su-checkbox-option--${a.size}`,
      `su-checkbox-option--${a.state}`,
      `su-checkbox-option--${a.displayType}`,
      {
        "su-checkbox-option--selected": $.value.includes(v.value),
        "su-checkbox-option--disabled": v.disabled || a.disabled
      }
    ], I = computed(() => {
      const v = {
        role: "group"
      };
      if (a.ariaLabel && (v["aria-label"] = a.ariaLabel), a.ariaDescribedBy) {
        const A = [a.ariaDescribedBy].filter(Boolean).join(" ");
        v["aria-describedby"] = A;
      }
      return a.required && (v["aria-required"] = "true"), a.state === "error" && (v["aria-invalid"] = "true"), v;
    }), c = (v, A) => {
      if (a.disabled) return;
      let _;
      if (A) {
        if (a.maxSelections && $.value.length >= a.maxSelections) {
          Z(`Maximum ${a.maxSelections} sélections autorisées`);
          return;
        }
        _ = [...$.value, v];
      } else
        _ = $.value.filter((z) => z !== v);
      $.value = _;
      const E = a.options.find((z) => z.value === v), B = A ? "sélectionné" : "désélectionné";
      Z(`${E == null ? void 0 : E.label} ${B}`);
    }, L = (v) => {
      y("focus", v);
    }, i = (v) => {
      y("blur", v);
    }, m = (v) => $.value.includes(v), T = (v) => v.disabled || a.disabled;
    return (v, A) => (openBlock(), createBlock(se, {
      fieldId: unref(h2),
      label: v.label,
      message: v.message,
      state: v.state,
      required: v.required,
      disabled: v.disabled
    }, {
      default: withCtx(({ fieldId: _, messageId: E }) => [
        createBaseVNode("fieldset", mergeProps({ class: g.value }, I.value, { "aria-describedby": E }), [
          createBaseVNode("div", {
            class: "su-checkbox-group-options",
            style: normalizeStyle({ maxHeight: v.maxHeight || void 0, overflowY: v.maxHeight ? "auto" : void 0 })
          }, [
            v.$slots.before ? (openBlock(), createElementBlock("div", Na, [
              renderSlot(v.$slots, "before")
            ])) : createCommentVNode("", true),
            (openBlock(true), createElementBlock(Fragment, null, renderList(v.options, (B) => (openBlock(), createElementBlock("label", {
              key: B.value,
              class: normalizeClass(k(B)),
              for: `${_}-${B.value}`
            }, [
              createBaseVNode("input", {
                id: `${_}-${B.value}`,
                type: "checkbox",
                value: B.value,
                checked: m(B.value),
                disabled: T(B),
                required: v.required && $.value.length === 0,
                class: "su-checkbox-input",
                onChange: (z) => c(B.value, z.target.checked),
                onFocus: L,
                onBlur: i
              }, null, 40, Ua),
              createBaseVNode("div", {
                class: normalizeClass(["su-checkbox-indicator", {
                  "su-checkbox-indicator--checked": m(B.value),
                  "su-checkbox-indicator--indeterminate": false
                }])
              }, [
                m(B.value) ? (openBlock(), createBlock(unref(ge), {
                  key: 0,
                  class: "su-checkbox-check",
                  "aria-hidden": "true"
                })) : createCommentVNode("", true)
              ], 2),
              createBaseVNode("div", Ya, [
                B.icon ? (openBlock(), createBlock(resolveDynamicComponent(B.icon), {
                  key: 0,
                  class: "su-checkbox-icon",
                  "aria-hidden": "true"
                })) : createCommentVNode("", true),
                createBaseVNode("div", Qa, [
                  createBaseVNode("div", Ja, toDisplayString(B.label), 1)
                ])
              ])
            ], 10, Wa))), 128))
          ], 4),
          v.$slots.after ? (openBlock(), createElementBlock("div", Xa, [
            renderSlot(v.$slots, "after")
          ])) : createCommentVNode("", true)
        ], 16, Za)
      ]),
      _: 3
    }, 8, ["fieldId", "label", "message", "state", "required", "disabled"]));
  }
});
var as = ["id", "tabindex", "aria-describedby"];
var ss = { class: "su-switch-track" };
var ts = { class: "su-switch-thumb" };
var ls = { class: "su-switch-indicator" };
var is = {
  key: 0,
  class: "su-switch-icon su-switch-icon--check",
  viewBox: "0 0 16 16",
  "aria-hidden": "true"
};
var rs = {
  key: 1,
  class: "su-switch-icon su-switch-icon--cross",
  viewBox: "0 0 16 16",
  "aria-hidden": "true"
};
var os = defineComponent({
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
  setup(u, { emit: r }) {
    const a = u, e = useModel(u, "modelValue"), y = r, b = fe("switch"), h2 = computed(() => [
      "su-switch-container",
      `su-switch-container--${a.size}`,
      `su-switch-container--${a.state}`,
      {
        "su-switch-container--disabled": a.disabled,
        "su-switch-container--readonly": a.readonly,
        "su-switch-container--has-labels": a.leftLabel || a.rightLabel,
        "su-switch-container--centered": a.leftLabel && a.rightLabel
      }
    ]), $ = computed(() => [
      "su-switch",
      `su-switch--${a.size}`,
      `su-switch--${a.state}`,
      {
        "su-switch--checked": e.value,
        "su-switch--disabled": a.disabled,
        "su-switch--readonly": a.readonly
      }
    ]), g = computed(() => {
      const i = {
        role: "switch",
        "aria-checked": e.value
      };
      return a.ariaLabel && (i["aria-label"] = a.ariaLabel), a.ariaInvalid !== void 0 && (i["aria-invalid"] = a.ariaInvalid), a.ariaRequired !== void 0 && (i["aria-required"] = a.ariaRequired), a.required && (i["aria-required"] = "true"), a.state === "error" && (i["aria-invalid"] = "true"), i;
    }), k = () => {
      if (a.disabled || a.readonly) return;
      const i = !e.value;
      e.value = i, y("change", i);
    }, I = (i) => {
      (i.key === " " || i.key === "Enter") && (i.preventDefault(), k()), y("keydown", i);
    }, c = (i) => {
      y("focus", i);
    }, L = (i) => {
      y("blur", i);
    };
    return (i, m) => (openBlock(), createBlock(se, {
      fieldId: unref(b),
      label: i.label,
      message: i.message,
      state: i.state,
      required: i.required,
      disabled: i.disabled
    }, {
      default: withCtx(({ fieldId: T, messageId: v }) => [
        createBaseVNode("div", {
          class: normalizeClass(h2.value)
        }, [
          i.leftLabel ? (openBlock(), createElementBlock("span", {
            key: 0,
            class: normalizeClass(["su-switch-side-label su-switch-side-label--left", {
              "su-switch-side-label--active": !e.value,
              "su-switch-side-label--disabled": i.disabled
            }])
          }, toDisplayString(i.leftLabel), 3)) : createCommentVNode("", true),
          createBaseVNode("div", mergeProps({
            id: T,
            class: $.value,
            tabindex: i.disabled ? -1 : 0,
            "aria-describedby": v
          }, g.value, {
            onClick: k,
            onKeydown: I,
            onFocus: c,
            onBlur: L
          }), [
            createBaseVNode("div", ss, [
              createBaseVNode("div", ts, [
                createBaseVNode("div", ls, [
                  e.value ? (openBlock(), createElementBlock("svg", is, [...m[0] || (m[0] = [
                    createBaseVNode("path", { d: "M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" }, null, -1)
                  ])])) : (openBlock(), createElementBlock("svg", rs, [...m[1] || (m[1] = [
                    createBaseVNode("path", { d: "M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" }, null, -1)
                  ])]))
                ])
              ])
            ])
          ], 16, as),
          i.rightLabel ? (openBlock(), createElementBlock("span", {
            key: 1,
            class: normalizeClass(["su-switch-side-label su-switch-side-label--right", {
              "su-switch-side-label--active": e.value,
              "su-switch-side-label--disabled": i.disabled
            }])
          }, toDisplayString(i.rightLabel), 3)) : createCommentVNode("", true)
        ], 2)
      ]),
      _: 1
    }, 8, ["fieldId", "label", "message", "state", "required", "disabled"]));
  }
});
var ns = ["id", "accept", "multiple", "disabled", "required", "aria-describedby"];
var us = ["tabindex", "aria-label"];
var ds = { class: "su-file-upload-text" };
var cs = { class: "su-file-upload-primary-text" };
var fs = { class: "su-file-upload-secondary-text" };
var ps = ["disabled"];
var hs = { key: 0 };
var bs = { key: 0 };
var vs = { key: 1 };
var ms = ["aria-label"];
var ys = { class: "su-file-upload-item-preview" };
var gs = ["src", "alt"];
var ks = { class: "su-file-upload-item-info" };
var ws = { class: "su-file-upload-item-name" };
var $s = { class: "su-file-upload-item-details" };
var xs = { class: "su-file-upload-item-size" };
var Bs = {
  key: 0,
  class: "su-file-upload-item-progress"
};
var _s = {
  key: 1,
  class: "su-file-upload-item-error"
};
var Ls = { class: "su-file-upload-item-status" };
var Cs = {
  key: 2,
  class: "su-file-upload-spinner",
  "aria-hidden": "true"
};
var Is = ["aria-label", "onClick"];
var qs = defineComponent({
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
  setup(u, { expose: r, emit: a }) {
    const e = u, y = useModel(u, "modelValue"), b = a, h2 = useAttrs(), $ = ref(), g = ref(), k = ref(false), I = ref(0), c = fe("file-upload");
    computed(() => h2.id || c);
    const L = computed(() => Array.isArray(y.value) ? y.value : []), i = computed(() => [
      "su-file-upload-container",
      `su-file-upload-container--${e.size}`,
      `su-file-upload-container--${e.state}`,
      {
        "su-file-upload-container--disabled": e.disabled,
        "su-file-upload-container--readonly": e.readonly,
        "su-file-upload-container--dragging": k.value,
        "su-file-upload-container--has-files": L.value.length > 0
      }
    ]), m = computed(() => [
      "su-file-upload-dropzone",
      `su-file-upload-dropzone--${e.size}`,
      `su-file-upload-dropzone--${e.state}`,
      {
        "su-file-upload-dropzone--disabled": e.disabled,
        "su-file-upload-dropzone--readonly": e.readonly,
        "su-file-upload-dropzone--dragging": k.value
      }
    ]), T = computed(() => {
      const t = {};
      if (e.ariaLabel && (t["aria-label"] = e.ariaLabel), e.ariaDescribedBy) {
        const q = [e.ariaDescribedBy].filter(Boolean).join(" ");
        t["aria-describedby"] = q;
      }
      return e.ariaInvalid !== void 0 && (t["aria-invalid"] = e.ariaInvalid), e.ariaRequired !== void 0 && (t["aria-required"] = e.ariaRequired), e.required && (t["aria-required"] = "true"), e.state === "error" && (t["aria-invalid"] = "true"), t;
    }), v = (t) => {
      if (t === 0) return "0 B";
      const q = 1024, S = ["B", "KB", "MB", "GB"], F = Math.floor(Math.log(t) / Math.log(q));
      return parseFloat((t / Math.pow(q, F)).toFixed(1)) + " " + S[F];
    }, A = (t) => t.type.startsWith("image/") ? Je : Ue, _ = (t) => `${t}-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`, E = (t) => t.type.startsWith("image/"), B = (t) => new Promise((q) => {
      if (!E(t)) {
        q("");
        return;
      }
      const S = new FileReader();
      S.onload = (F) => {
        var x;
        return q(((x = F.target) == null ? void 0 : x.result) || "");
      }, S.readAsDataURL(t);
    }), z = (t) => e.maxSize && t.size > e.maxSize ? `Le fichier "${t.name}" est trop volumineux (${v(t.size)}). Taille maximale : ${v(e.maxSize)}` : e.accept && !e.accept.split(",").map((F) => F.trim()).some((F) => {
      if (F.startsWith("."))
        return t.name.toLowerCase().endsWith(F.toLowerCase());
      if (F.includes("*")) {
        const x = F.split("/")[0];
        return t.type.startsWith(x);
      }
      return t.type === F;
    }) ? `Le type de fichier "${t.type}" n'est pas accepté pour "${t.name}"` : null, te = async (t) => {
      if (e.disabled || e.readonly) return;
      const q = Array.from(t), S = L.value;
      if (e.maxFiles && S.length + q.length > e.maxFiles) {
        const x = `Nombre maximum de fichiers dépassé (${e.maxFiles})`;
        b("error", x), Z(x, "assertive");
        return;
      }
      const F = [];
      for (const x of q) {
        const le = z(x);
        if (le) {
          b("error", le, x), Z(le, "assertive");
          continue;
        }
        const l = {
          id: _("file"),
          file: x,
          name: x.name,
          size: x.size,
          type: x.type,
          status: "pending"
        };
        if (e.allowPreview && E(x))
          try {
            l.preview = await B(x);
          } catch (C) {
            console.warn("Erreur lors de la création de l'aperçu:", C);
          }
        F.push(l);
      }
      if (F.length > 0) {
        const x = e.multiple ? [...S, ...F] : F;
        y.value = x, b("change", x);
        const le = F.length === 1 ? `Fichier "${F[0].name}" ajouté` : `${F.length} fichiers ajoutés`;
        Z(le), F.forEach((l) => b("upload", l));
      }
    }, ue = (t) => {
      if (e.disabled || e.readonly) return;
      const q = L.value.filter((S) => S.id !== t.id);
      y.value = q, b("change", q), b("remove", t), Z(`Fichier "${t.name}" supprimé`);
    }, d = (t) => {
      const q = t.target;
      q.files && q.files.length > 0 && te(q.files), q.value = "";
    }, Y = () => {
      var t;
      e.disabled || e.readonly || (t = $.value) == null || t.click();
    }, de = (t) => {
      (t.key === "Enter" || t.key === " ") && (t.preventDefault(), Y());
    }, p = (t) => {
      b("focus", t);
    }, j = (t) => {
      b("blur", t);
    }, K = (t) => {
      t.preventDefault(), t.stopPropagation(), !(e.disabled || e.readonly) && (I.value++, I.value === 1 && (k.value = true));
    }, X = (t) => {
      t.preventDefault(), t.stopPropagation(), !(e.disabled || e.readonly) && (I.value--, I.value === 0 && (k.value = false));
    }, pe = (t) => {
      t.preventDefault(), t.stopPropagation(), !(e.disabled || e.readonly) && t.dataTransfer && (t.dataTransfer.dropEffect = "copy");
    }, ve = (t) => {
      var S;
      if (t.preventDefault(), t.stopPropagation(), e.disabled || e.readonly) return;
      k.value = false, I.value = 0;
      const q = (S = t.dataTransfer) == null ? void 0 : S.files;
      q && q.length > 0 && te(q);
    };
    return r({
      focus: () => {
        var t;
        (t = g.value) == null || t.focus();
      },
      clear: () => {
        e.disabled || e.readonly || (y.value = [], b("change", []), Z("Tous les fichiers ont été supprimés"));
      },
      fileInputRef: $,
      dropZoneRef: g
    }), (t, q) => (openBlock(), createBlock(se, {
      fieldId: unref(c),
      label: t.label,
      message: t.message,
      state: t.state,
      required: t.required,
      disabled: t.disabled
    }, {
      default: withCtx(({ fieldId: S, messageId: F }) => [
        createBaseVNode("div", {
          class: normalizeClass(i.value)
        }, [
          createBaseVNode("input", mergeProps({
            ref_key: "fileInputRef",
            ref: $,
            id: S,
            type: "file",
            accept: t.accept,
            multiple: t.multiple,
            disabled: t.disabled,
            required: t.required,
            "aria-describedby": F,
            class: "su-file-upload-input"
          }, T.value, {
            onChange: d,
            onFocus: p,
            onBlur: j
          }), null, 16, ns),
          createBaseVNode("div", {
            ref_key: "dropZoneRef",
            ref: g,
            class: normalizeClass(m.value),
            tabindex: t.disabled ? -1 : 0,
            role: "button",
            "aria-label": t.placeholder,
            onClick: Y,
            onKeydown: de,
            onDragenter: K,
            onDragleave: X,
            onDragover: pe,
            onDrop: ve
          }, [
            createVNode(unref(We), {
              class: normalizeClass(["su-file-upload-icon", { "su-file-upload-icon--dragging": k.value }]),
              "aria-hidden": "true"
            }, null, 8, ["class"]),
            createBaseVNode("div", ds, [
              createBaseVNode("p", cs, toDisplayString(k.value ? t.dragText : t.placeholder), 1),
              createBaseVNode("p", fs, [
                createBaseVNode("button", {
                  type: "button",
                  class: "su-file-upload-browse-button",
                  disabled: t.disabled || t.readonly,
                  onClick: withModifiers(Y, ["stop"])
                }, toDisplayString(t.browseText), 9, ps),
                t.accept || t.maxSize ? (openBlock(), createElementBlock("span", hs, [
                  t.accept ? (openBlock(), createElementBlock("span", bs, " • " + toDisplayString(t.accept), 1)) : createCommentVNode("", true),
                  t.maxSize ? (openBlock(), createElementBlock("span", vs, " • Max " + toDisplayString(v(t.maxSize)), 1)) : createCommentVNode("", true)
                ])) : createCommentVNode("", true)
              ])
            ])
          ], 42, us),
          t.showFileList && L.value.length > 0 ? (openBlock(), createElementBlock("div", {
            key: 0,
            class: "su-file-upload-list",
            role: "list",
            "aria-label": `${L.value.length} fichier(s) sélectionné(s)`
          }, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(L.value, (x) => (openBlock(), createElementBlock("div", {
              key: x.id,
              class: normalizeClass(["su-file-upload-item", `su-file-upload-item--${x.status}`]),
              role: "listitem"
            }, [
              createBaseVNode("div", ys, [
                x.preview ? (openBlock(), createElementBlock("img", {
                  key: 0,
                  src: x.preview,
                  alt: `Aperçu de ${x.name}`,
                  class: "su-file-upload-preview-image"
                }, null, 8, gs)) : (openBlock(), createBlock(resolveDynamicComponent(A(x.file)), {
                  key: 1,
                  class: "su-file-upload-item-icon",
                  "aria-hidden": "true"
                }))
              ]),
              createBaseVNode("div", ks, [
                createBaseVNode("div", ws, toDisplayString(x.name), 1),
                createBaseVNode("div", $s, [
                  createBaseVNode("span", xs, toDisplayString(v(x.size)), 1),
                  x.status === "uploading" && x.progress !== void 0 ? (openBlock(), createElementBlock("span", Bs, toDisplayString(x.progress) + "% ", 1)) : createCommentVNode("", true),
                  x.error ? (openBlock(), createElementBlock("span", _s, toDisplayString(x.error), 1)) : createCommentVNode("", true)
                ])
              ]),
              createBaseVNode("div", Ls, [
                x.status === "success" ? (openBlock(), createBlock(unref(Ze), {
                  key: 0,
                  class: "su-file-upload-status-icon su-file-upload-status-icon--success",
                  "aria-hidden": "true"
                })) : x.status === "error" ? (openBlock(), createBlock(unref(Ye), {
                  key: 1,
                  class: "su-file-upload-status-icon su-file-upload-status-icon--error",
                  "aria-hidden": "true"
                })) : x.status === "uploading" ? (openBlock(), createElementBlock("div", Cs, [...q[0] || (q[0] = [
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
                "aria-label": `Supprimer ${x.name}`,
                onClick: (le) => ue(x)
              }, [
                createVNode(unref(ke), {
                  class: "su-file-upload-remove-icon",
                  "aria-hidden": "true"
                })
              ], 8, Is)) : createCommentVNode("", true)
            ], 2))), 128))
          ], 8, ms)) : createCommentVNode("", true)
        ], 2)
      ]),
      _: 1
    }, 8, ["fieldId", "label", "message", "state", "required", "disabled"]));
  }
});
var Ds = ["id", "value", "placeholder", "disabled", "readonly", "required", "rows", "aria-describedby"];
var zs = {
  key: 0,
  class: "su-textarea-footer"
};
var Rs = ["id", "aria-live"];
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
  setup(u, { expose: r, emit: a }) {
    const e = u, y = useModel(u, "modelValue"), b = a, h2 = ref(), $ = fe("textarea"), g = computed(() => y.value || ""), k = computed(() => g.value.length), I = computed(() => e.maxLength ? e.maxLength - k.value : null), c = computed(() => e.maxLength ? I.value !== null && I.value <= e.maxLength * 0.1 : false), L = computed(() => e.maxLength ? I.value !== null && I.value < 0 : false), i = computed(() => [
      "su-textarea-container",
      `su-textarea-container--${e.size}`,
      `su-textarea-container--${e.state}`,
      {
        "su-textarea-container--disabled": e.disabled,
        "su-textarea-container--readonly": e.readonly,
        "su-textarea-container--auto-resize": e.autoResize,
        "su-textarea-container--over-limit": L.value
      }
    ]), m = computed(() => [
      "su-textarea",
      `su-textarea--${e.size}`,
      `su-textarea--${e.state}`,
      {
        "su-textarea--disabled": e.disabled,
        "su-textarea--readonly": e.readonly,
        "su-textarea--auto-resize": e.autoResize,
        "su-textarea--over-limit": L.value
      }
    ]), T = computed(() => [
      "su-textarea-counter",
      {
        "su-textarea-counter--near-limit": c.value,
        "su-textarea-counter--over-limit": L.value
      }
    ]), v = computed(() => {
      const p = {};
      return e.ariaLabel && (p["aria-label"] = e.ariaLabel), e.ariaInvalid !== void 0 && (p["aria-invalid"] = e.ariaInvalid), e.ariaRequired !== void 0 && (p["aria-required"] = e.ariaRequired), e.required && (p["aria-required"] = "true"), (e.state === "error" || L.value) && (p["aria-invalid"] = "true"), p;
    }), A = computed(() => {
      const p = {};
      return e.autocomplete && (p.autocomplete = e.autocomplete), e.maxLength && (p.maxlength = e.maxLength), e.spellcheck !== void 0 && (p.spellcheck = e.spellcheck), e.wrap && (p.wrap = e.wrap), p;
    }), _ = async () => {
      if (!e.autoResize || !h2.value) return;
      await nextTick();
      const p = h2.value, j = e.minRows ? e.minRows * 1.5 : 3 * 1.5, K = e.maxRows ? e.maxRows * 1.5 : 10 * 1.5;
      p.style.height = "auto";
      const X = p.scrollHeight, pe = Math.max(j * 16, Math.min(K * 16, X));
      p.style.height = `${pe}px`;
    }, E = (p) => {
      const j = p.target;
      y.value = j.value, b("input", p), e.autoResize && _();
    }, B = (p) => {
      b("change", p);
    }, z = (p) => {
      b("focus", p);
    }, te = (p) => {
      b("blur", p);
    }, ue = (p) => {
      b("keydown", p);
    }, d = (p) => {
      b("keyup", p);
    };
    return r({
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
      e.autoResize && _();
    }, { immediate: true }), watch(() => e.autoResize, (p) => {
      p && _();
    }), (p, j) => (openBlock(), createBlock(se, {
      fieldId: unref($),
      label: p.label,
      message: p.message,
      state: p.state,
      required: p.required,
      disabled: p.disabled
    }, {
      default: withCtx(({ fieldId: K, messageId: X }) => [
        createBaseVNode("div", null, [
          createBaseVNode("div", {
            class: normalizeClass(i.value)
          }, [
            createBaseVNode("textarea", mergeProps({
              ref_key: "textareaRef",
              ref: h2,
              id: K,
              class: m.value,
              value: y.value,
              placeholder: p.placeholder,
              disabled: p.disabled,
              readonly: p.readonly,
              required: p.required,
              rows: p.autoResize ? p.minRows : p.rows,
              "aria-describedby": X
            }, { ...A.value, ...v.value }, {
              onInput: E,
              onChange: B,
              onFocus: z,
              onBlur: te,
              onKeydown: ue,
              onKeyup: d
            }), null, 16, Ds)
          ], 2),
          p.showCounter && p.maxLength ? (openBlock(), createElementBlock("div", zs, [
            j[0] || (j[0] = createBaseVNode("div", { class: "su-textarea-footer-spacer" }, null, -1)),
            createBaseVNode("div", {
              id: `${K}-counter`,
              class: normalizeClass(T.value),
              "aria-live": c.value || L.value ? "polite" : "off"
            }, [
              createBaseVNode("span", Fs, toDisplayString(L.value ? "Limite de caractères dépassée" : "Caractères restants") + ": ", 1),
              createTextVNode(" " + toDisplayString(k.value) + "/" + toDisplayString(p.maxLength), 1)
            ], 10, Rs)
          ])) : createCommentVNode("", true)
        ])
      ]),
      _: 1
    }, 8, ["fieldId", "label", "message", "state", "required", "disabled"]));
  }
});
var Vs = {
  install(u, r = {}) {
    const a = r.prefix || "Su";
    u.component(`${a}FormField`, se), u.component(`${a}Button`, qe), u.component(`${a}ButtonsGroup`, je), u.component(`${a}Link`, De), u.component(`${a}LinksGroup`, ea), u.component(`${a}Input`, la), u.component(`${a}SelectBox`, Sa), u.component(`${a}RadioGroup`, Ga), u.component(`${a}CheckboxGroup`, es), u.component(`${a}Switch`, os), u.component(`${a}FileUpload`, qs), u.component(`${a}Textarea`, As);
  }
};
export {
  qe as Button,
  je as ButtonsGroup,
  es as CheckboxGroup,
  qs as FileUpload,
  se as FormField,
  la as Input,
  De as Link,
  ea as LinksGroup,
  Ga as RadioGroup,
  Sa as SelectBox,
  os as Switch,
  As as Textarea,
  Ms as accessibility,
  Vs as default
};
//# sourceMappingURL=@surgeup_ds-vue.js.map
