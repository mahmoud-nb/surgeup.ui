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
var Ue = { class: "su-form-field-wrapper" };
var Ze = ["for"];
var Ne = {
  key: 0,
  class: "su-indicator-required",
  "aria-label": "requis"
};
var We = ["id"];
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
    const l = p, a = computed(() => l.message ? `${l.fieldId}-message` : void 0), e = computed(() => {
      const $ = {};
      return l.state === "error" ? $["aria-live"] = "assertive" : (l.state === "success" || l.state === "warning") && ($["aria-live"] = "polite"), $;
    }), g = computed(() => [
      "su-form-field-message",
      `su-form-field-message--${l.state}`
    ]), n = computed(() => [
      "su-form-field-label",
      {
        "su-form-field-label--required": l.required,
        "su-form-field-label--disabled": l.disabled
      }
    ]);
    return ($, z) => (openBlock(), createElementBlock("div", Ue, [
      $.label ? (openBlock(), createElementBlock("label", {
        key: 0,
        for: $.fieldId,
        class: normalizeClass(n.value)
      }, [
        createTextVNode(toDisplayString($.label) + " ", 1),
        $.required ? (openBlock(), createElementBlock("span", Ne, "*")) : createCommentVNode("", true)
      ], 10, Ze)) : createCommentVNode("", true),
      renderSlot($.$slots, "default", {
        fieldId: $.fieldId,
        messageId: a.value
      }),
      $.message ? (openBlock(), createElementBlock("div", mergeProps({
        key: 1,
        id: a.value,
        class: g.value
      }, e.value), toDisplayString($.message), 17, We)) : createCommentVNode("", true)
    ]));
  }
});
var Ye = ["disabled", "tabindex"];
var Xe = {
  key: 0,
  class: "su-button__spinner"
};
var Qe = {
  key: 1,
  class: "su-button__content"
};
var De = defineComponent({
  __name: "Button",
  props: {
    variant: { default: "default" },
    size: { default: "default" },
    radius: { default: "default" },
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
  setup(p, { emit: l }) {
    const a = p, e = l, g = computed(() => [
      "su-button",
      a.variant !== "default" ? `su-button--${a.variant}` : "su-button--default-variant",
      a.size !== "default" ? `su-button--${a.size}` : "su-button--default-size",
      a.radius !== "default" ? `su-button--radius-${a.radius}` : "su-button--default-radius",
      {
        "su-button--disabled": a.disabled,
        "su-button--loading": a.loading,
        "su-button--block": a.block,
        "su-button--icon-only": a.icon && a.iconDisplay === "only",
        "su-button--icon-right": a.icon && a.iconDisplay === "right"
      }
    ]), n = computed(() => !(a.icon && a.iconDisplay === "only")), $ = (m) => {
      a.disabled || a.loading || e("click", m);
    }, z = (m) => {
      (m.key === "Enter" || m.key === " ") && (m.preventDefault(), !a.disabled && !a.loading && e("click", m)), e("keydown", m);
    }, C = (m) => {
      e("focus", m);
    }, k = (m) => {
      e("blur", m);
    }, x = computed(() => {
      const m = {};
      return a.ariaLabel && (m["aria-label"] = a.ariaLabel), a.ariaDescribedBy && (m["aria-describedby"] = a.ariaDescribedBy), a.ariaExpanded !== void 0 && (m["aria-expanded"] = a.ariaExpanded), a.ariaPressed !== void 0 && (m["aria-pressed"] = a.ariaPressed), a.role && (m.role = a.role), a.loading && (m["aria-busy"] = "true", m["aria-live"] = "polite"), a.disabled && (m["aria-disabled"] = "true"), a.icon && a.iconDisplay === "only" && !a.ariaLabel && console.warn('Button with icon and iconDisplay="only" should have an ariaLabel for accessibility'), m;
    });
    return (m, L) => (openBlock(), createElementBlock("button", mergeProps({
      class: g.value,
      disabled: m.disabled || m.loading,
      tabindex: m.disabled ? -1 : m.tabIndex
    }, x.value, {
      onClick: $,
      onKeydown: z,
      onFocus: C,
      onBlur: k
    }), [
      m.loading ? (openBlock(), createElementBlock("span", Xe, [...L[0] || (L[0] = [
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
      m.loading ? createCommentVNode("", true) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
        m.icon ? (openBlock(), createBlock(resolveDynamicComponent(m.icon), {
          key: 0,
          class: "su-button__icon",
          "aria-hidden": "true"
        })) : createCommentVNode("", true),
        n.value ? (openBlock(), createElementBlock("span", Qe, [
          renderSlot(m.$slots, "default")
        ])) : createCommentVNode("", true)
      ], 64))
    ], 16, Ye));
  }
});
var Je = defineComponent({
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
    const l = p, a = useSlots(), e = computed(() => [
      "su-buttons-group",
      `su-buttons-group--gap-${l.gap}`,
      {
        "su-buttons-group--connected": l.gap === "none"
      }
    ]), g = computed(() => {
      var C;
      if (!(a != null && a.default)) return [];
      const $ = ((C = a == null ? void 0 : a.default) == null ? void 0 : C.call(a)) ?? [], z = [];
      for (const k of $)
        if (k.type === De) {
          const x = { ...k.props };
          if (l.size && (x.size = l.size), l.variant && (x.variant = l.variant), l.gap === "none") {
            const m = x.class || "";
            x.class = `${m} su-buttons-group__button`.trim();
          }
          z.push(h(k.type, x, k == null ? void 0 : k.children));
        } else {
          if (k.type === Comment || k.type === Text || k.type === Fragment)
            continue;
          console.warn("ButtonsGroup expects only Button components as children. Found:", k.type);
        }
      return z;
    }), n = computed(() => {
      const $ = {};
      return l.ariaLabel && ($["aria-label"] = l.ariaLabel), l.ariaDescribedBy && ($["aria-describedby"] = l.ariaDescribedBy), l.role && ($.role = l.role), $;
    });
    return ($, z) => (openBlock(), createElementBlock("div", mergeProps({ class: e.value }, n.value), [
      (openBlock(true), createElementBlock(Fragment, null, renderList(g.value, (C, k) => (openBlock(), createBlock(resolveDynamicComponent(C), { key: k }))), 128))
    ], 16));
  }
});
function ea(p, l) {
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
function aa(p, l) {
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
function xe(p, l) {
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
function ta(p, l) {
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
function sa(p, l) {
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
function la(p, l) {
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
function ia(p, l) {
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
function ra(p, l) {
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
function na(p, l) {
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
function Be(p, l) {
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
var oa = {
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
  setup(p, { emit: l }) {
    const a = p, e = l, g = computed(() => a.to !== void 0), n = computed(() => a.external || a.href && (a.href.startsWith("http") || a.href.startsWith("//") || a.target === "_blank")), $ = computed(() => {
      const y = {};
      return g.value || (y.href = a.href, n.value ? (y.target = a.target || "_blank", y.rel = a.rel || "noopener noreferrer") : (a.target && (y.target = a.target), a.rel && (y.rel = a.rel))), a.ariaLabel && (y["aria-label"] = a.ariaLabel), a.ariaDescribedBy && (y["aria-describedby"] = a.ariaDescribedBy), a.role && (y.role = a.role), a.disabled ? (y["aria-disabled"] = "true", y.tabindex = -1) : y.tabindex = a.tabIndex, y;
    }), z = computed(() => [
      "su-link",
      {
        "su-link--disabled": a.disabled,
        "su-link--external": n.value,
        "su-link--icon-only": a.icon && a.iconDisplay === "only",
        "su-link--icon-right": a.icon && a.iconDisplay === "right"
      }
    ]), C = computed(() => !(a.icon && a.iconDisplay === "only")), k = (y) => {
      if (a.disabled) {
        y.preventDefault();
        return;
      }
      e("click", y);
    }, x = (y) => {
      if ((y.key === "Enter" || y.key === " ") && a.disabled) {
        y.preventDefault();
        return;
      }
      e("keydown", y);
    }, m = (y) => {
      e("focus", y);
    }, L = (y) => {
      e("blur", y);
    };
    return a.icon && a.iconDisplay === "only" && !a.ariaLabel && console.warn('Link with icon and iconDisplay="only" should have an ariaLabel for accessibility'), (y, M) => (openBlock(), createBlock(resolveDynamicComponent(g.value ? "router-link" : "a"), mergeProps({ class: z.value }, g.value ? { to: y.to, ...$.value } : $.value, {
      onClick: k,
      onKeydown: x,
      onFocus: m,
      onBlur: L
    }), {
      default: withCtx(() => [
        y.icon ? (openBlock(), createBlock(resolveDynamicComponent(y.icon), {
          key: 0,
          class: "su-link__icon",
          "aria-hidden": "true"
        })) : createCommentVNode("", true),
        C.value ? (openBlock(), createElementBlock("span", oa, [
          renderSlot(y.$slots, "default")
        ])) : createCommentVNode("", true),
        n.value && !y.icon && C.value ? (openBlock(), createBlock(unref(ea), {
          key: 2,
          class: "su-link__external-icon",
          "aria-hidden": "true"
        })) : createCommentVNode("", true)
      ]),
      _: 3
    }, 16, ["class"]));
  }
});
var ua = defineComponent({
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
    const l = p, a = useSlots(), e = computed(() => [
      "su-links-group",
      `su-links-group--gap-${l.gap}`,
      `su-links-group--${l.direction}`,
      {
        "su-links-group--connected": l.gap === "none"
      }
    ]), g = computed(() => {
      var C;
      if (!(a != null && a.default)) return [];
      const $ = ((C = a == null ? void 0 : a.default) == null ? void 0 : C.call(a)) ?? [], z = [];
      for (const k of $)
        if (k.type === Me) {
          const x = { ...k.props };
          if (l.size && (x.size = l.size), l.variant && (x.variant = l.variant), l.underline && (x.underline = l.underline), l.gap === "none") {
            const m = x.class || "";
            x.class = `${m} su-links-group__link`.trim();
          }
          z.push(h(k.type, x, k == null ? void 0 : k.children));
        } else {
          if (k.type === Comment || k.type === Text || k.type === Fragment)
            continue;
          console.warn("LinksGroup expects only Link components as children. Found:", k.type);
        }
      return z;
    }), n = computed(() => {
      const $ = {};
      return l.ariaLabel && ($["aria-label"] = l.ariaLabel), l.ariaDescribedBy && ($["aria-describedby"] = l.ariaDescribedBy), l.role && ($.role = l.role), $;
    });
    return ($, z) => (openBlock(), createElementBlock("div", mergeProps({ class: e.value }, n.value), [
      (openBlock(true), createElementBlock(Fragment, null, renderList(g.value, (C, k) => (openBlock(), createBlock(resolveDynamicComponent(C), { key: k }))), 128))
    ], 16));
  }
});
var da = ["dir"];
var ca = ["tabindex", "onKeydown"];
var fa = ["tabindex", "onKeydown"];
var pa = ["id", "type", "value", "placeholder", "disabled", "readonly", "required", "aria-describedby"];
var va = ["tabindex", "onKeydown"];
var ba = ["tabindex", "onKeydown"];
var Fe = defineComponent({
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
    buttonRadius: {},
    buttonVariant: {},
    buttonSize: {},
    linkVariant: {},
    linkSize: {},
    linkUnderline: {},
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
  setup(p, { expose: l, emit: a }) {
    const e = p, g = useModel(p, "modelValue"), n = a, $ = useAttrs(), z = ref(), C = "input-" + useId(), k = computed(() => $.id || C), x = computed(() => typeof $.onPrefixClick == "function"), m = computed(() => typeof $.onPrefixIconClick == "function"), L = computed(() => typeof $.onSuffixClick == "function"), y = computed(() => typeof $.onSuffixIconClick == "function"), M = computed(() => [
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
    ]), f = computed(() => [
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
    ]), K = computed(() => {
      const d = {};
      return e.ariaLabel && (d["aria-label"] = e.ariaLabel), e.ariaInvalid !== void 0 && (d["aria-invalid"] = e.ariaInvalid), e.ariaRequired !== void 0 && (d["aria-required"] = e.ariaRequired), e.required && (d["aria-required"] = "true"), e.state === "error" && (d["aria-invalid"] = "true"), d;
    }), h2 = computed(() => {
      const d = {};
      return e.autocomplete && (d.autocomplete = e.autocomplete), e.min !== void 0 && (d.min = e.min), e.max !== void 0 && (d.max = e.max), e.step !== void 0 && (d.step = e.step), e.minLength !== void 0 && (d.minlength = e.minLength), e.maxLength !== void 0 && (d.maxlength = e.maxLength), e.pattern && (d.pattern = e.pattern), d;
    }), A = (d) => {
      const U = d.target;
      g.value = e.type === "number" ? Number(U.value) : U.value, n("input", d);
    }, D = (d) => {
      n("change", d);
    }, H = (d) => {
      n("focus", d);
    }, _ = (d) => {
      n("blur", d);
    }, S = (d) => {
      n("keydown", d);
    }, ae = (d) => {
      n("keyup", d);
    }, le = (d) => {
      e.disabled || e.readonly || n("prefix-click", d);
    }, ie = (d) => {
      e.disabled || e.readonly || n("prefix-icon-click", d);
    }, J = (d) => {
      e.disabled || e.readonly || n("suffix-click", d);
    }, re = (d) => {
      e.disabled || e.readonly || n("suffix-icon-click", d);
    };
    return l({
      focus: () => {
        var d;
        (d = z.value) == null || d.focus();
      },
      select: () => {
        var d;
        (d = z.value) == null || d.select();
      },
      inputRef: z
    }), (d, U) => (openBlock(), createBlock(fe, {
      fieldId: k.value,
      label: d.label,
      message: d.message,
      state: d.state,
      required: d.required,
      disabled: d.disabled
    }, {
      default: withCtx(({ fieldId: te, messageId: ce }) => [
        createBaseVNode("div", {
          class: normalizeClass(M.value),
          dir: d.dir
        }, [
          d.prefixIcon ? (openBlock(), createElementBlock("div", {
            key: 0,
            class: normalizeClass(["su-input-prefix su-input-prefix--icon", { "su-input-prefix--clickable": m.value }]),
            tabindex: m.value && !d.disabled && !d.readonly ? 0 : -1,
            onClick: ie,
            onKeydown: [
              withKeys(withModifiers(ie, ["prevent"]), ["enter"]),
              withKeys(withModifiers(ie, ["prevent"]), ["space"])
            ]
          }, [
            (openBlock(), createBlock(resolveDynamicComponent(d.prefixIcon), {
              class: "su-input-icon",
              "aria-hidden": "true"
            }))
          ], 42, ca)) : d.prefix ? (openBlock(), createElementBlock("div", {
            key: 1,
            class: normalizeClass(["su-input-prefix su-input-prefix--text", { "su-input-prefix--clickable": x.value }]),
            tabindex: x.value && !d.disabled && !d.readonly ? 0 : -1,
            onClick: le,
            onKeydown: [
              withKeys(withModifiers(le, ["prevent"]), ["enter"]),
              withKeys(withModifiers(le, ["prevent"]), ["space"])
            ]
          }, toDisplayString(d.prefix), 43, fa)) : createCommentVNode("", true),
          createBaseVNode("input", mergeProps({
            ref_key: "inputRef",
            ref: z,
            id: te,
            class: f.value,
            type: d.type,
            value: g.value,
            placeholder: d.placeholder,
            disabled: d.disabled,
            readonly: d.readonly,
            required: d.required,
            "aria-describedby": ce
          }, { ...h2.value, ...K.value }, {
            onInput: A,
            onChange: D,
            onFocus: H,
            onBlur: _,
            onKeydown: S,
            onKeyup: ae
          }), null, 16, pa),
          d.suffix ? (openBlock(), createElementBlock("div", {
            key: 2,
            class: normalizeClass(["su-input-suffix su-input-suffix--text", { "su-input-suffix--clickable": L.value }]),
            tabindex: L.value && !d.disabled && !d.readonly ? 0 : -1,
            onClick: J,
            onKeydown: [
              withKeys(withModifiers(J, ["prevent"]), ["enter"]),
              withKeys(withModifiers(J, ["prevent"]), ["space"])
            ]
          }, toDisplayString(d.suffix), 43, va)) : d.suffixIcon ? (openBlock(), createElementBlock("div", {
            key: 3,
            class: normalizeClass(["su-input-suffix su-input-suffix--icon", { "su-input-suffix--clickable": y.value }]),
            tabindex: y.value && !d.disabled && !d.readonly ? 0 : -1,
            onClick: re,
            onKeydown: [
              withKeys(withModifiers(re, ["prevent"]), ["enter"]),
              withKeys(withModifiers(re, ["prevent"]), ["space"])
            ]
          }, [
            (openBlock(), createBlock(resolveDynamicComponent(d.suffixIcon), {
              class: "su-input-icon",
              "aria-hidden": "true"
            }))
          ], 42, ba)) : createCommentVNode("", true)
        ], 10, da)
      ]),
      _: 1
    }, 8, ["fieldId", "label", "message", "state", "required", "disabled"]));
  }
});
var ha = 0;
function ma(p = "su") {
  return `${p}-${++ha}-${Date.now().toString(36)}`;
}
function ya(p) {
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
  const l = p.querySelectorAll(
    'button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), a[href], [tabindex]:not([tabindex="-1"])'
  ), a = l[0], e = l[l.length - 1], g = (n) => {
    n.key === "Tab" && (n.shiftKey ? document.activeElement === a && (n.preventDefault(), e.focus()) : document.activeElement === e && (n.preventDefault(), a.focus()));
  };
  return p.addEventListener("keydown", g), a == null || a.focus(), () => {
    p.removeEventListener("keydown", g);
  };
}
function ee(p, l = "polite") {
  const a = document.createElement("div");
  a.setAttribute("aria-live", l), a.setAttribute("aria-atomic", "true"), a.className = "sr-only", a.textContent = p, document.body.appendChild(a), setTimeout(() => {
    document.body.removeChild(a);
  }, 1e3);
}
function ga() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
function ka() {
  return window.matchMedia("(prefers-contrast: high)").matches;
}
function $a(p, l) {
  return 4.5;
}
function wa(p, l = "AA") {
  return p >= (l === "AAA" ? 7 : 4.5);
}
var ns = Object.freeze(Object.defineProperty({
  __proto__: null,
  announceToScreenReader: ee,
  generateId: ma,
  getContrastRatio: $a,
  isContrastValid: wa,
  isFocusable: ya,
  prefersHighContrast: ka,
  prefersReducedMotion: ga,
  trapFocus: Re
}, Symbol.toStringTag, { value: "Module" }));
var xa = ["dir"];
var Ba = ["id", "tabindex", "aria-describedby"];
var za = { class: "su-select-content" };
var Ca = {
  key: 0,
  class: "su-select-tags"
};
var La = { class: "su-select-tag-label" };
var _a = ["aria-label", "onClick"];
var Ia = {
  key: 0,
  class: "su-select-tag su-select-tag--more"
};
var qa = {
  key: 1,
  class: "su-select-display"
};
var Da = { class: "su-select-display-text" };
var Ma = { class: "su-select-actions" };
var Fa = {
  key: 0,
  class: "su-select-spinner"
};
var Ra = ["id", "aria-multiselectable"];
var Va = {
  key: 0,
  class: "su-select-search"
};
var Sa = { class: "su-select-search-container" };
var Aa = ["placeholder", "value"];
var Pa = ["aria-label"];
var Ta = ["aria-selected", "aria-disabled", "onClick", "onMouseenter"];
var Ea = {
  key: 0,
  class: "su-select-option-checkbox"
};
var Ha = { class: "su-select-option-content" };
var Ka = { class: "su-select-option-label" };
var Oa = {
  key: 0,
  class: "su-select-option-description"
};
var ja = {
  key: 1,
  class: "su-select-no-options"
};
var Ve = defineComponent({
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
  setup(p, { expose: l, emit: a }) {
    const e = p, g = useModel(p, "modelValue"), n = a, $ = useAttrs(), z = "selectbox-" + useId(), C = ref(), k = ref(), x = ref(), m = ref(), L = ref(false), y = ref(""), M = ref(-1), f = ref(null), K = computed(() => $.id || z), h2 = computed(() => `${K.value}-listbox`), A = computed(() => e.groups && e.groups.length > 0 ? e.groups.flatMap(
      (r) => r.options.map((t) => ({ ...t, group: r.label }))
    ) : e.options || []), D = computed(() => {
      if (!e.searchable || !y.value)
        return A.value;
      const r = y.value.toLowerCase();
      return A.value.filter(
        (t) => t.label.toLowerCase().includes(r) || t.description && t.description.toLowerCase().includes(r)
      );
    }), H = computed(() => {
      const r = {};
      return D.value.forEach((t) => {
        const v = t.group || "";
        r[v] || (r[v] = []), r[v].push(t);
      }), r;
    }), _ = computed({
      get() {
        return e.multiple ? Array.isArray(g.value) ? g.value : g.value !== void 0 && g.value !== null ? [g.value] : [] : g.value;
      },
      set(r) {
        g.value = r, n("change", r);
      }
    }), S = computed(() => {
      if (e.multiple) {
        const r = _.value;
        return r ? A.value.filter((t) => r.includes(t.value)) : [];
      } else {
        const r = _.value;
        return r != null ? A.value.filter((t) => t.value === r) : [];
      }
    }), ae = computed(() => {
      var r;
      return S.value.length === 0 ? e.placeholder : e.multiple ? S.value.length === 1 ? S.value[0].label : `${S.value.length} éléments sélectionnés` : ((r = S.value[0]) == null ? void 0 : r.label) || e.placeholder;
    }), le = computed(() => [
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
    ]), ie = computed(() => [
      "su-select-trigger",
      `su-select-trigger--${e.size}`,
      `su-select-trigger--${e.state}`,
      `su-select-trigger--align-${e.textAlign}`,
      {
        "su-select-trigger--disabled": e.disabled,
        "su-select-trigger--readonly": e.readonly,
        "su-select-trigger--open": L.value,
        "su-select-trigger--has-value": S.value.length > 0,
        "su-select-trigger--placeholder": S.value.length === 0
      }
    ]), J = computed(() => {
      const r = {
        "aria-haspopup": "listbox",
        "aria-expanded": L.value,
        "aria-controls": L.value ? h2.value : void 0,
        role: "combobox"
      };
      return e.ariaLabel && (r["aria-label"] = e.ariaLabel), e.ariaInvalid !== void 0 && (r["aria-invalid"] = e.ariaInvalid), e.ariaRequired !== void 0 && (r["aria-required"] = e.ariaRequired), e.required && (r["aria-required"] = "true"), e.state === "error" && (r["aria-invalid"] = "true"), e.multiple && (r["aria-multiselectable"] = "true"), r;
    }), re = () => {
      e.disabled || e.readonly || (L.value ? b() : ne());
    }, ne = async () => {
      e.disabled || e.readonly || (L.value = true, y.value = "", M.value = -1, n("open"), await nextTick(), e.searchable && m.value && m.value.focus(), x.value && (f.value = Re(x.value)));
    }, b = () => {
      L.value = false, M.value = -1, f.value && (f.value(), f.value = null), n("close"), k.value && k.value.focus();
    }, d = (r) => {
      if (r.disabled) return;
      let t;
      if (e.multiple) {
        const I = _.value || [];
        if (I.includes(r.value))
          t = I.filter((B) => B !== r.value);
        else {
          if (e.maxSelectedItems && I.length >= e.maxSelectedItems) {
            ee(`Maximum ${e.maxSelectedItems} éléments sélectionnables`);
            return;
          }
          t = [...I, r.value];
        }
      } else
        t = r.value;
      _.value = t;
      const v = e.multiple && _.value.includes(r.value) ? "désélectionné" : "sélectionné";
      ee(`${r.label} ${v}`), !e.multiple && e.closeOnSelect && b();
    }, U = (r) => {
      r.stopPropagation();
      const t = e.multiple ? [] : void 0;
      _.value = t, ee("Sélection effacée");
    }, te = (r, t) => {
      if (t.stopPropagation(), e.multiple) {
        const I = (_.value || []).filter((V) => V !== r.value);
        _.value = I, ee(`${r.label} retiré de la sélection`);
      }
    }, ce = (r) => {
      const t = r.target;
      y.value = t.value, M.value = -1, n("search", y.value);
    }, ge = (r) => {
      switch (r.key) {
        case "Enter":
        case " ":
          if (r.preventDefault(), !L.value)
            ne();
          else if (M.value >= 0) {
            const t = D.value[M.value];
            t && d(t);
          }
          break;
        case "Escape":
          r.preventDefault(), b();
          break;
        case "ArrowDown":
          r.preventDefault(), L.value ? M.value = Math.min(M.value + 1, D.value.length - 1) : ne();
          break;
        case "ArrowUp":
          r.preventDefault(), L.value && (M.value = Math.max(M.value - 1, -1));
          break;
        case "Home":
          L.value && (r.preventDefault(), M.value = 0);
          break;
        case "End":
          L.value && (r.preventDefault(), M.value = D.value.length - 1);
          break;
        case "Tab":
          L.value && b();
          break;
      }
    }, $e = (r) => {
      n("focus", r);
    }, i = (r) => {
      setTimeout(() => {
        L.value && C.value && !C.value.contains(document.activeElement) && (b(), n("blur", r));
      }, 0);
    }, R = (r) => {
      L.value && C.value && !C.value.contains(r.target) && b();
    };
    return l({
      focus: () => {
        var r;
        (r = k.value) == null || r.focus();
      },
      open: () => {
        ne();
      },
      close: () => {
        b();
      },
      selectRef: C,
      inputRef: k
    }), onMounted(() => {
      document.addEventListener("click", R, { passive: true });
    }), onUnmounted(() => {
      document.removeEventListener("click", R, { passive: true }), f.value && f.value();
    }), watch(g, () => {
      M.value = -1;
    }), (r, t) => (openBlock(), createBlock(fe, {
      fieldId: K.value,
      label: r.label,
      message: r.message,
      state: r.state,
      required: r.required,
      disabled: r.disabled
    }, {
      default: withCtx(({ fieldId: v, messageId: I }) => {
        var V;
        return [
          createBaseVNode("div", {
            class: "su-select-wrapper",
            dir: r.dir
          }, [
            createBaseVNode("div", {
              ref_key: "selectRef",
              ref: C,
              class: normalizeClass(le.value)
            }, [
              createBaseVNode("div", mergeProps({
                ref_key: "inputRef",
                ref: k,
                id: v,
                class: ie.value,
                tabindex: r.disabled ? -1 : 0
              }, J.value, {
                "aria-describedby": I,
                onClick: re,
                onKeydown: ge,
                onFocus: $e,
                onBlur: i
              }), [
                createBaseVNode("div", za, [
                  r.multiple && S.value.length > 0 ? (openBlock(), createElementBlock("div", Ca, [
                    (openBlock(true), createElementBlock(Fragment, null, renderList(S.value.slice(0, 3), (B) => (openBlock(), createElementBlock("span", {
                      key: B.value,
                      class: "su-select-tag"
                    }, [
                      B.icon ? (openBlock(), createBlock(resolveDynamicComponent(B.icon), {
                        key: 0,
                        class: "su-select-tag-icon",
                        "aria-hidden": "true"
                      })) : createCommentVNode("", true),
                      createBaseVNode("span", La, toDisplayString(B.label), 1),
                      createBaseVNode("button", {
                        type: "button",
                        class: "su-select-tag-remove",
                        "aria-label": `Retirer ${B.label}`,
                        onClick: (Z) => te(B, Z)
                      }, [
                        createVNode(unref(Be), { class: "su-select-tag-remove-icon" })
                      ], 8, _a)
                    ]))), 128)),
                    S.value.length > 3 ? (openBlock(), createElementBlock("span", Ia, " +" + toDisplayString(S.value.length - 3), 1)) : createCommentVNode("", true)
                  ])) : (openBlock(), createElementBlock("div", qa, [
                    (V = S.value[0]) != null && V.icon ? (openBlock(), createBlock(resolveDynamicComponent(S.value[0].icon), {
                      key: 0,
                      class: "su-select-display-icon",
                      "aria-hidden": "true"
                    })) : createCommentVNode("", true),
                    createBaseVNode("span", Da, toDisplayString(ae.value), 1)
                  ]))
                ]),
                createBaseVNode("div", Ma, [
                  r.loading ? (openBlock(), createElementBlock("div", Fa, [...t[0] || (t[0] = [
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
                  ])])) : r.clearable && S.value.length > 0 && !r.disabled && !r.readonly ? (openBlock(), createElementBlock("button", {
                    key: 1,
                    type: "button",
                    class: "su-select-clear",
                    "aria-label": "Effacer la sélection",
                    onClick: U
                  }, [
                    createVNode(unref(Be), { class: "su-select-clear-icon" })
                  ])) : createCommentVNode("", true),
                  createVNode(unref(ta), {
                    class: normalizeClass(["su-select-chevron", { "su-select-chevron--open": L.value }]),
                    "aria-hidden": "true"
                  }, null, 8, ["class"])
                ])
              ], 16, Ba),
              createVNode(Transition, { name: "su-select-dropdown" }, {
                default: withCtx(() => [
                  L.value ? (openBlock(), createElementBlock("div", {
                    key: 0,
                    ref_key: "dropdownRef",
                    ref: x,
                    id: h2.value,
                    class: "su-select-dropdown",
                    role: "listbox",
                    "aria-multiselectable": r.multiple
                  }, [
                    r.searchable ? (openBlock(), createElementBlock("div", Va, [
                      createBaseVNode("div", Sa, [
                        createVNode(unref(ra), {
                          class: "su-select-search-icon",
                          "aria-hidden": "true"
                        }),
                        createBaseVNode("input", {
                          ref_key: "searchInputRef",
                          ref: m,
                          type: "text",
                          class: "su-select-search-input",
                          placeholder: r.searchPlaceholder,
                          value: y.value,
                          onInput: ce,
                          onKeydown: ge
                        }, null, 40, Aa)
                      ])
                    ])) : createCommentVNode("", true),
                    createBaseVNode("div", {
                      class: "su-select-options",
                      style: normalizeStyle({ maxHeight: r.maxHeight })
                    }, [
                      D.value.length > 0 ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList(H.value, (B, Z) => (openBlock(), createElementBlock(Fragment, { key: Z }, [
                        Z && e.groups && e.groups.length > 0 ? (openBlock(), createElementBlock("div", {
                          key: 0,
                          class: "su-select-group-header",
                          role: "group",
                          "aria-label": Z
                        }, toDisplayString(Z), 9, Pa)) : createCommentVNode("", true),
                        (openBlock(true), createElementBlock(Fragment, null, renderList(B, (O) => (openBlock(), createElementBlock("div", {
                          key: O.value,
                          class: normalizeClass(["su-select-option", {
                            "su-select-option--selected": r.multiple ? _.value.includes(O.value) : _.value === O.value,
                            "su-select-option--disabled": O.disabled,
                            "su-select-option--focused": D.value.indexOf(O) === M.value
                          }]),
                          role: "option",
                          "aria-selected": r.multiple ? _.value.includes(O.value) : _.value === O.value,
                          "aria-disabled": O.disabled,
                          onClick: (Ke) => d(O),
                          onMouseenter: (Ke) => M.value = D.value.indexOf(O)
                        }, [
                          r.multiple ? (openBlock(), createElementBlock("div", Ea, [
                            createBaseVNode("div", {
                              class: normalizeClass(["su-select-checkbox", {
                                "su-select-checkbox--checked": _.value.includes(O.value)
                              }])
                            }, [
                              _.value.includes(O.value) ? (openBlock(), createBlock(unref(xe), {
                                key: 0,
                                class: "su-select-checkbox-icon",
                                "aria-hidden": "true"
                              })) : createCommentVNode("", true)
                            ], 2)
                          ])) : createCommentVNode("", true),
                          O.icon ? (openBlock(), createBlock(resolveDynamicComponent(O.icon), {
                            key: 1,
                            class: "su-select-option-icon",
                            "aria-hidden": "true"
                          })) : createCommentVNode("", true),
                          createBaseVNode("div", Ha, [
                            createBaseVNode("div", Ka, toDisplayString(O.label), 1),
                            O.description ? (openBlock(), createElementBlock("div", Oa, toDisplayString(O.description), 1)) : createCommentVNode("", true)
                          ]),
                          !r.multiple && _.value === O.value ? (openBlock(), createBlock(unref(xe), {
                            key: 2,
                            class: "su-select-option-check",
                            "aria-hidden": "true"
                          })) : createCommentVNode("", true)
                        ], 42, Ta))), 128))
                      ], 64))), 128)) : (openBlock(), createElementBlock("div", ja, toDisplayString(y.value ? r.noResultsText : r.noOptionsText), 1))
                    ], 4)
                  ], 8, Ra)) : createCommentVNode("", true)
                ]),
                _: 1
              })
            ], 2)
          ], 8, xa)
        ];
      }),
      _: 1
    }, 8, ["fieldId", "label", "message", "state", "required", "disabled"]));
  }
});
var Ga = ["aria-describedby"];
var Ua = {
  key: 0,
  class: "su-radio-group-before"
};
var Za = ["for"];
var Na = ["id", "name", "value", "checked", "disabled", "required", "onChange"];
var Wa = { class: "su-radio-content" };
var Ya = { class: "su-radio-text" };
var Xa = { class: "su-radio-label" };
var Qa = {
  key: 0,
  class: "su-radio-description"
};
var Ja = {
  key: 0,
  class: "su-radio-group-after"
};
var Se = defineComponent({
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
  setup(p, { emit: l }) {
    const a = useModel(p, "modelValue"), e = p, g = l, n = useAttrs(), $ = "radio-group-" + useId(), z = computed(() => n.id || $), C = computed(() => e.name || $), k = computed(() => [
      "su-radio-group",
      `su-radio-group--${e.size}`,
      `su-radio-group--${e.state}`,
      `su-radio-group--${e.displayType}`,
      `su-radio-group--${e.direction}`,
      {
        "su-radio-group--disabled": e.disabled,
        "su-radio-group--scrollable": e.maxHeight
      }
    ]), x = (f) => [
      "su-radio-option",
      `su-radio-option--${e.size}`,
      `su-radio-option--${e.state}`,
      `su-radio-option--${e.displayType}`,
      {
        "su-radio-option--selected": a.value === f.value,
        "su-radio-option--disabled": f.disabled || e.disabled
      }
    ], m = computed(() => {
      const f = {
        role: "radiogroup"
      };
      if (e.ariaLabel && (f["aria-label"] = e.ariaLabel), e.ariaDescribedBy) {
        const K = [e.ariaDescribedBy].filter(Boolean).join(" ");
        f["aria-describedby"] = K;
      }
      return e.required && (f["aria-required"] = "true"), e.state === "error" && (f["aria-invalid"] = "true"), f;
    }), L = (f) => {
      e.disabled || (a.value = f, g("change", f));
    }, y = (f) => {
      g("focus", f);
    }, M = (f) => {
      g("blur", f);
    };
    return (f, K) => (openBlock(), createBlock(fe, {
      fieldId: z.value,
      label: f.label,
      message: f.message,
      state: f.state,
      required: f.required,
      disabled: f.disabled
    }, {
      default: withCtx(({ fieldId: h2, messageId: A }) => [
        createBaseVNode("fieldset", mergeProps({ class: k.value }, m.value, { "aria-describedby": A }), [
          createBaseVNode("div", {
            class: "su-radio-group-options",
            style: normalizeStyle({ maxHeight: f.maxHeight || void 0, overflowY: f.maxHeight ? "auto" : void 0 })
          }, [
            f.$slots.before ? (openBlock(), createElementBlock("div", Ua, [
              renderSlot(f.$slots, "before")
            ])) : createCommentVNode("", true),
            (openBlock(true), createElementBlock(Fragment, null, renderList(f.options, (D) => (openBlock(), createElementBlock("label", {
              key: D.value,
              class: normalizeClass(x(D)),
              for: `${h2}-${D.value}`
            }, [
              createBaseVNode("input", {
                id: `${h2}-${D.value}`,
                type: "radio",
                name: C.value,
                value: D.value,
                checked: a.value === D.value,
                disabled: D.disabled || f.disabled,
                required: f.required,
                class: "su-radio-input",
                onChange: (H) => L(D.value),
                onFocus: y,
                onBlur: M
              }, null, 40, Na),
              K[0] || (K[0] = createBaseVNode("div", { class: "su-radio-indicator" }, [
                createBaseVNode("div", { class: "su-radio-dot" })
              ], -1)),
              createBaseVNode("div", Wa, [
                D.icon ? (openBlock(), createBlock(resolveDynamicComponent(D.icon), {
                  key: 0,
                  class: "su-radio-icon",
                  "aria-hidden": "true"
                })) : createCommentVNode("", true),
                createBaseVNode("div", Ya, [
                  createBaseVNode("div", Xa, toDisplayString(D.label), 1),
                  D.description ? (openBlock(), createElementBlock("div", Qa, toDisplayString(D.description), 1)) : createCommentVNode("", true)
                ])
              ])
            ], 10, Za))), 128))
          ], 4),
          f.$slots.after ? (openBlock(), createElementBlock("div", Ja, [
            renderSlot(f.$slots, "after")
          ])) : createCommentVNode("", true)
        ], 16, Ga)
      ]),
      _: 3
    }, 8, ["fieldId", "label", "message", "state", "required", "disabled"]));
  }
});
var et = ["aria-describedby"];
var at = {
  key: 0,
  class: "su-checkbox-group-before"
};
var tt = ["for"];
var st = ["id", "value", "checked", "disabled", "required", "onChange"];
var lt = { class: "su-checkbox-content" };
var it = { class: "su-checkbox-text" };
var rt = { class: "su-checkbox-label" };
var nt = {
  key: 0,
  class: "su-checkbox-group-after"
};
var Ae = defineComponent({
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
  setup(p, { emit: l }) {
    const a = p, e = useModel(p, "modelValue"), g = l, n = useAttrs(), $ = "checkbox-group-" + useId(), z = computed(() => n.id || $), C = computed({
      get() {
        return Array.isArray(e.value) ? e.value : [];
      },
      set(h2) {
        e.value = h2, g("change", h2);
      }
    }), k = computed(() => [
      "su-checkbox-group",
      `su-checkbox-group--${a.size}`,
      `su-checkbox-group--${a.state}`,
      `su-checkbox-group--${a.displayType}`,
      `su-checkbox-group--${a.direction}`,
      {
        "su-checkbox-group--disabled": a.disabled,
        "su-checkbox-group--scrollable": a.maxHeight
      }
    ]), x = (h2) => [
      "su-checkbox-option",
      `su-checkbox-option--${a.size}`,
      `su-checkbox-option--${a.state}`,
      `su-checkbox-option--${a.displayType}`,
      {
        "su-checkbox-option--selected": C.value.includes(h2.value),
        "su-checkbox-option--disabled": h2.disabled || a.disabled
      }
    ], m = computed(() => {
      const h2 = {
        role: "group"
      };
      if (a.ariaLabel && (h2["aria-label"] = a.ariaLabel), a.ariaDescribedBy) {
        const A = [a.ariaDescribedBy].filter(Boolean).join(" ");
        h2["aria-describedby"] = A;
      }
      return a.required && (h2["aria-required"] = "true"), a.state === "error" && (h2["aria-invalid"] = "true"), h2;
    }), L = (h2, A) => {
      if (a.disabled) return;
      let D;
      if (A) {
        if (a.maxSelections && C.value.length >= a.maxSelections) {
          ee(`Maximum ${a.maxSelections} sélections autorisées`);
          return;
        }
        D = [...C.value, h2];
      } else
        D = C.value.filter((S) => S !== h2);
      C.value = D;
      const H = a.options.find((S) => S.value === h2), _ = A ? "sélectionné" : "désélectionné";
      ee(`${H == null ? void 0 : H.label} ${_}`);
    }, y = (h2) => {
      g("focus", h2);
    }, M = (h2) => {
      g("blur", h2);
    }, f = (h2) => C.value.includes(h2), K = (h2) => h2.disabled || a.disabled;
    return (h2, A) => (openBlock(), createBlock(fe, {
      fieldId: z.value,
      label: h2.label,
      message: h2.message,
      state: h2.state,
      required: h2.required,
      disabled: h2.disabled
    }, {
      default: withCtx(({ fieldId: D, messageId: H }) => [
        createBaseVNode("fieldset", mergeProps({ class: k.value }, m.value, { "aria-describedby": H }), [
          createBaseVNode("div", {
            class: "su-checkbox-group-options",
            style: normalizeStyle({ maxHeight: h2.maxHeight || void 0, overflowY: h2.maxHeight ? "auto" : void 0 })
          }, [
            h2.$slots.before ? (openBlock(), createElementBlock("div", at, [
              renderSlot(h2.$slots, "before")
            ])) : createCommentVNode("", true),
            (openBlock(true), createElementBlock(Fragment, null, renderList(h2.options, (_) => (openBlock(), createElementBlock("label", {
              key: _.value,
              class: normalizeClass(x(_)),
              for: `${D}-${_.value}`
            }, [
              createBaseVNode("input", {
                id: `${D}-${_.value}`,
                type: "checkbox",
                value: _.value,
                checked: f(_.value),
                disabled: K(_),
                required: h2.required && C.value.length === 0,
                class: "su-checkbox-input",
                onChange: (S) => L(_.value, S.target.checked),
                onFocus: y,
                onBlur: M
              }, null, 40, st),
              createBaseVNode("div", {
                class: normalizeClass(["su-checkbox-indicator", {
                  "su-checkbox-indicator--checked": f(_.value),
                  "su-checkbox-indicator--indeterminate": false
                }])
              }, [
                f(_.value) ? (openBlock(), createBlock(unref(xe), {
                  key: 0,
                  class: "su-checkbox-check",
                  "aria-hidden": "true"
                })) : createCommentVNode("", true)
              ], 2),
              createBaseVNode("div", lt, [
                _.icon ? (openBlock(), createBlock(resolveDynamicComponent(_.icon), {
                  key: 0,
                  class: "su-checkbox-icon",
                  "aria-hidden": "true"
                })) : createCommentVNode("", true),
                createBaseVNode("div", it, [
                  createBaseVNode("div", rt, toDisplayString(_.label), 1)
                ])
              ])
            ], 10, tt))), 128))
          ], 4),
          h2.$slots.after ? (openBlock(), createElementBlock("div", nt, [
            renderSlot(h2.$slots, "after")
          ])) : createCommentVNode("", true)
        ], 16, et)
      ]),
      _: 3
    }, 8, ["fieldId", "label", "message", "state", "required", "disabled"]));
  }
});
var ot = ["id", "tabindex", "aria-describedby"];
var ut = { class: "su-switch-track" };
var dt = { class: "su-switch-thumb" };
var ct = { class: "su-switch-indicator" };
var ft = {
  key: 0,
  class: "su-switch-icon su-switch-icon--check",
  viewBox: "0 0 16 16",
  "aria-hidden": "true"
};
var pt = {
  key: 1,
  class: "su-switch-icon su-switch-icon--cross",
  viewBox: "0 0 16 16",
  "aria-hidden": "true"
};
var Pe = defineComponent({
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
  setup(p, { emit: l }) {
    const a = p, e = useModel(p, "modelValue"), g = l, n = useAttrs(), $ = "switch-" + useId(), z = computed(() => n.id || $), C = computed(() => [
      "su-switch-container",
      `su-switch-container--${a.size}`,
      `su-switch-container--${a.state}`,
      {
        "su-switch-container--disabled": a.disabled,
        "su-switch-container--readonly": a.readonly,
        "su-switch-container--has-labels": a.leftLabel || a.rightLabel,
        "su-switch-container--centered": a.leftLabel && a.rightLabel
      }
    ]), k = computed(() => [
      "su-switch",
      `su-switch--${a.size}`,
      `su-switch--${a.state}`,
      {
        "su-switch--checked": e.value,
        "su-switch--disabled": a.disabled,
        "su-switch--readonly": a.readonly
      }
    ]), x = computed(() => {
      const f = {
        role: "switch",
        "aria-checked": e.value
      };
      return a.ariaLabel && (f["aria-label"] = a.ariaLabel), a.ariaInvalid !== void 0 && (f["aria-invalid"] = a.ariaInvalid), a.ariaRequired !== void 0 && (f["aria-required"] = a.ariaRequired), a.required && (f["aria-required"] = "true"), a.state === "error" && (f["aria-invalid"] = "true"), f;
    }), m = () => {
      if (a.disabled || a.readonly) return;
      const f = !e.value;
      e.value = f, g("change", f);
    }, L = (f) => {
      (f.key === " " || f.key === "Enter") && (f.preventDefault(), m()), g("keydown", f);
    }, y = (f) => {
      g("focus", f);
    }, M = (f) => {
      g("blur", f);
    };
    return (f, K) => (openBlock(), createBlock(fe, {
      fieldId: z.value,
      label: f.label,
      message: f.message,
      state: f.state,
      required: f.required,
      disabled: f.disabled
    }, {
      default: withCtx(({ fieldId: h2, messageId: A }) => [
        createBaseVNode("div", {
          class: normalizeClass(C.value)
        }, [
          f.leftLabel ? (openBlock(), createElementBlock("span", {
            key: 0,
            class: normalizeClass(["su-switch-side-label su-switch-side-label--left", {
              "su-switch-side-label--active": !e.value,
              "su-switch-side-label--disabled": f.disabled
            }])
          }, toDisplayString(f.leftLabel), 3)) : createCommentVNode("", true),
          createBaseVNode("div", mergeProps({
            id: h2,
            class: k.value,
            tabindex: f.disabled ? -1 : 0,
            "aria-describedby": A
          }, x.value, {
            onClick: m,
            onKeydown: L,
            onFocus: y,
            onBlur: M
          }), [
            createBaseVNode("div", ut, [
              createBaseVNode("div", dt, [
                createBaseVNode("div", ct, [
                  e.value ? (openBlock(), createElementBlock("svg", ft, [...K[0] || (K[0] = [
                    createBaseVNode("path", { d: "M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" }, null, -1)
                  ])])) : (openBlock(), createElementBlock("svg", pt, [...K[1] || (K[1] = [
                    createBaseVNode("path", { d: "M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" }, null, -1)
                  ])]))
                ])
              ])
            ])
          ], 16, ot),
          f.rightLabel ? (openBlock(), createElementBlock("span", {
            key: 1,
            class: normalizeClass(["su-switch-side-label su-switch-side-label--right", {
              "su-switch-side-label--active": e.value,
              "su-switch-side-label--disabled": f.disabled
            }])
          }, toDisplayString(f.rightLabel), 3)) : createCommentVNode("", true)
        ], 2)
      ]),
      _: 1
    }, 8, ["fieldId", "label", "message", "state", "required", "disabled"]));
  }
});
var vt = ["id", "accept", "multiple", "disabled", "required", "aria-describedby"];
var bt = ["tabindex", "aria-label"];
var ht = { class: "su-file-upload-text" };
var mt = { class: "su-file-upload-primary-text" };
var yt = { class: "su-file-upload-secondary-text" };
var gt = { key: 0 };
var kt = { key: 0 };
var $t = { key: 1 };
var wt = ["aria-label"];
var xt = { class: "su-file-upload-item-preview" };
var Bt = ["src", "alt"];
var zt = { class: "su-file-upload-item-info" };
var Ct = { class: "su-file-upload-item-name" };
var Lt = { class: "su-file-upload-item-details" };
var _t = { class: "su-file-upload-item-size" };
var It = {
  key: 0,
  class: "su-file-upload-item-progress"
};
var qt = {
  key: 1,
  class: "su-file-upload-item-error"
};
var Dt = { class: "su-file-upload-item-status" };
var Mt = {
  key: 2,
  class: "su-file-upload-spinner",
  "aria-hidden": "true"
};
var Ft = ["aria-label", "onClick"];
var Te = defineComponent({
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
  setup(p, { expose: l, emit: a }) {
    const e = p, g = useModel(p, "modelValue"), n = a, $ = useAttrs(), z = ref(), C = ref(), k = ref(false), x = ref(0), m = "file-upload-" + useId(), L = computed(() => $.id || m), y = computed(() => Array.isArray(g.value) ? g.value : []), M = computed(() => [
      "su-file-upload-container",
      `su-file-upload-container--${e.size}`,
      `su-file-upload-container--${e.state}`,
      {
        "su-file-upload-container--disabled": e.disabled,
        "su-file-upload-container--readonly": e.readonly,
        "su-file-upload-container--dragging": k.value,
        "su-file-upload-container--has-files": y.value.length > 0
      }
    ]), f = computed(() => [
      "su-file-upload-dropzone",
      `su-file-upload-dropzone--${e.size}`,
      `su-file-upload-dropzone--${e.state}`,
      {
        "su-file-upload-dropzone--disabled": e.disabled,
        "su-file-upload-dropzone--readonly": e.readonly,
        "su-file-upload-dropzone--dragging": k.value
      }
    ]), K = computed(() => {
      const i = {};
      if (e.ariaLabel && (i["aria-label"] = e.ariaLabel), e.ariaDescribedBy) {
        const R = [e.ariaDescribedBy].filter(Boolean).join(" ");
        i["aria-describedby"] = R;
      }
      return e.ariaInvalid !== void 0 && (i["aria-invalid"] = e.ariaInvalid), e.ariaRequired !== void 0 && (i["aria-required"] = e.ariaRequired), e.required && (i["aria-required"] = "true"), e.state === "error" && (i["aria-invalid"] = "true"), i;
    }), h2 = (i) => {
      if (i === 0) return "0 B";
      const R = 1024, G = ["B", "KB", "MB", "GB"], T = Math.floor(Math.log(i) / Math.log(R));
      return parseFloat((i / Math.pow(R, T)).toFixed(1)) + " " + G[T];
    }, A = (i) => i.type.startsWith("image/") ? na : la, D = (i) => `${i}-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`, H = (i) => i.type.startsWith("image/"), _ = (i) => new Promise((R) => {
      if (!H(i)) {
        R("");
        return;
      }
      const G = new FileReader();
      G.onload = (T) => {
        var q;
        return R(((q = T.target) == null ? void 0 : q.result) || "");
      }, G.readAsDataURL(i);
    }), S = (i) => e.maxSize && i.size > e.maxSize ? `Le fichier "${i.name}" est trop volumineux (${h2(i.size)}). Taille maximale : ${h2(e.maxSize)}` : e.accept && !e.accept.split(",").map((T) => T.trim()).some((T) => {
      if (T.startsWith("."))
        return i.name.toLowerCase().endsWith(T.toLowerCase());
      if (T.includes("*")) {
        const q = T.split("/")[0];
        return i.type.startsWith(q);
      }
      return i.type === T;
    }) ? `Le type de fichier "${i.type}" n'est pas accepté pour "${i.name}"` : null, ae = async (i) => {
      if (e.disabled || e.readonly) return;
      const R = Array.from(i), G = y.value;
      if (e.maxFiles && G.length + R.length > e.maxFiles) {
        const q = `Nombre maximum de fichiers dépassé (${e.maxFiles})`;
        n("error", q), ee(q, "assertive");
        return;
      }
      const T = [];
      for (const q of R) {
        const r = S(q);
        if (r) {
          n("error", r, q), ee(r, "assertive");
          continue;
        }
        const t = {
          id: D("file"),
          file: q,
          name: q.name,
          size: q.size,
          type: q.type,
          status: "pending"
        };
        if (e.allowPreview && H(q))
          try {
            t.preview = await _(q);
          } catch (v) {
            console.warn("Erreur lors de la création de l'aperçu:", v);
          }
        T.push(t);
      }
      if (T.length > 0) {
        const q = e.multiple ? [...G, ...T] : T;
        g.value = q, n("change", q);
        const r = T.length === 1 ? `Fichier "${T[0].name}" ajouté` : `${T.length} fichiers ajoutés`;
        ee(r), T.forEach((t) => n("upload", t));
      }
    }, le = (i) => {
      if (e.disabled || e.readonly) return;
      const R = y.value.filter((G) => G.id !== i.id);
      g.value = R, n("change", R), n("remove", i), ee(`Fichier "${i.name}" supprimé`);
    }, ie = (i) => {
      const R = i.target;
      R.files && R.files.length > 0 && ae(R.files), R.value = "";
    }, J = () => {
      var i;
      e.disabled || e.readonly || (i = z.value) == null || i.click();
    }, re = (i) => {
      (i.key === "Enter" || i.key === " ") && (i.preventDefault(), J());
    }, ne = (i) => {
      n("focus", i);
    }, b = (i) => {
      n("blur", i);
    }, d = (i) => {
      i.preventDefault(), i.stopPropagation(), !(e.disabled || e.readonly) && (x.value++, x.value === 1 && (k.value = true));
    }, U = (i) => {
      i.preventDefault(), i.stopPropagation(), !(e.disabled || e.readonly) && (x.value--, x.value === 0 && (k.value = false));
    }, te = (i) => {
      i.preventDefault(), i.stopPropagation(), !(e.disabled || e.readonly) && i.dataTransfer && (i.dataTransfer.dropEffect = "copy");
    }, ce = (i) => {
      var G;
      if (i.preventDefault(), i.stopPropagation(), e.disabled || e.readonly) return;
      k.value = false, x.value = 0;
      const R = (G = i.dataTransfer) == null ? void 0 : G.files;
      R && R.length > 0 && ae(R);
    };
    return l({
      focus: () => {
        var i;
        (i = C.value) == null || i.focus();
      },
      clear: () => {
        e.disabled || e.readonly || (g.value = [], n("change", []), ee("Tous les fichiers ont été supprimés"));
      },
      fileInputRef: z,
      dropZoneRef: C
    }), (i, R) => (openBlock(), createBlock(fe, {
      fieldId: L.value,
      label: i.label,
      message: i.message,
      state: i.state,
      required: i.required,
      disabled: i.disabled
    }, {
      default: withCtx(({ fieldId: G, messageId: T }) => [
        createBaseVNode("div", {
          class: normalizeClass(M.value)
        }, [
          createBaseVNode("input", mergeProps({
            ref_key: "fileInputRef",
            ref: z,
            id: G,
            type: "file",
            accept: i.accept,
            multiple: i.multiple,
            disabled: i.disabled,
            required: i.required,
            "aria-describedby": T,
            class: "su-file-upload-input"
          }, K.value, {
            onChange: ie,
            onFocus: ne,
            onBlur: b
          }), null, 16, vt),
          createBaseVNode("div", {
            ref_key: "dropZoneRef",
            ref: C,
            class: normalizeClass(f.value),
            tabindex: i.disabled ? -1 : 0,
            role: "button",
            "aria-label": i.placeholder,
            onClick: J,
            onKeydown: re,
            onDragenter: d,
            onDragleave: U,
            onDragover: te,
            onDrop: ce
          }, [
            createVNode(unref(sa), {
              class: normalizeClass(["su-file-upload-icon", { "su-file-upload-icon--dragging": k.value }]),
              "aria-hidden": "true"
            }, null, 8, ["class"]),
            createBaseVNode("div", ht, [
              createBaseVNode("p", mt, toDisplayString(k.value ? i.dragText : i.placeholder), 1),
              createBaseVNode("p", yt, [
                createTextVNode(toDisplayString(i.browseText) + " ", 1),
                i.accept || i.maxSize ? (openBlock(), createElementBlock("span", gt, [
                  i.accept ? (openBlock(), createElementBlock("span", kt, " • " + toDisplayString(i.accept), 1)) : createCommentVNode("", true),
                  i.maxSize ? (openBlock(), createElementBlock("span", $t, " • Max " + toDisplayString(h2(i.maxSize)), 1)) : createCommentVNode("", true)
                ])) : createCommentVNode("", true)
              ])
            ])
          ], 42, bt),
          i.showFileList && y.value.length > 0 ? (openBlock(), createElementBlock("div", {
            key: 0,
            class: "su-file-upload-list",
            role: "list",
            "aria-label": `${y.value.length} fichier(s) sélectionné(s)`
          }, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(y.value, (q) => (openBlock(), createElementBlock("div", {
              key: q.id,
              class: normalizeClass(["su-file-upload-item", `su-file-upload-item--${q.status}`]),
              role: "listitem"
            }, [
              createBaseVNode("div", xt, [
                q.preview ? (openBlock(), createElementBlock("img", {
                  key: 0,
                  src: q.preview,
                  alt: `Aperçu de ${q.name}`,
                  class: "su-file-upload-preview-image"
                }, null, 8, Bt)) : (openBlock(), createBlock(resolveDynamicComponent(A(q.file)), {
                  key: 1,
                  class: "su-file-upload-item-icon",
                  "aria-hidden": "true"
                }))
              ]),
              createBaseVNode("div", zt, [
                createBaseVNode("div", Ct, toDisplayString(q.name), 1),
                createBaseVNode("div", Lt, [
                  createBaseVNode("span", _t, toDisplayString(h2(q.size)), 1),
                  q.status === "uploading" && q.progress !== void 0 ? (openBlock(), createElementBlock("span", It, toDisplayString(q.progress) + "% ", 1)) : createCommentVNode("", true),
                  q.error ? (openBlock(), createElementBlock("span", qt, toDisplayString(q.error), 1)) : createCommentVNode("", true)
                ])
              ]),
              createBaseVNode("div", Dt, [
                q.status === "success" ? (openBlock(), createBlock(unref(aa), {
                  key: 0,
                  class: "su-file-upload-status-icon su-file-upload-status-icon--success",
                  "aria-hidden": "true"
                })) : q.status === "error" ? (openBlock(), createBlock(unref(ia), {
                  key: 1,
                  class: "su-file-upload-status-icon su-file-upload-status-icon--error",
                  "aria-hidden": "true"
                })) : q.status === "uploading" ? (openBlock(), createElementBlock("div", Mt, [...R[0] || (R[0] = [
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
                "aria-label": `Supprimer ${q.name}`,
                onClick: (r) => le(q)
              }, [
                createVNode(unref(Be), {
                  class: "su-file-upload-remove-icon",
                  "aria-hidden": "true"
                })
              ], 8, Ft)) : createCommentVNode("", true)
            ], 2))), 128))
          ], 8, wt)) : createCommentVNode("", true)
        ], 2)
      ]),
      _: 1
    }, 8, ["fieldId", "label", "message", "state", "required", "disabled"]));
  }
});
var Rt = ["id", "value", "placeholder", "disabled", "readonly", "required", "rows", "aria-describedby"];
var Vt = {
  key: 0,
  class: "su-textarea-footer"
};
var St = ["id", "aria-live"];
var At = { class: "sr-only" };
var Ee = defineComponent({
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
  setup(p, { expose: l, emit: a }) {
    const e = p, g = useModel(p, "modelValue"), n = a, $ = useAttrs(), z = ref(), C = "textarea-" + useId(), k = computed(() => $.id || C), x = computed(() => g.value || ""), m = computed(() => x.value.length), L = computed(() => e.maxLength ? e.maxLength - m.value : null), y = computed(() => e.maxLength ? L.value !== null && L.value <= e.maxLength * 0.1 : false), M = computed(() => e.maxLength ? L.value !== null && L.value < 0 : false), f = computed(() => [
      "su-textarea-container",
      `su-textarea-container--${e.size}`,
      `su-textarea-container--${e.state}`,
      {
        "su-textarea-container--disabled": e.disabled,
        "su-textarea-container--readonly": e.readonly,
        "su-textarea-container--auto-resize": e.autoResize,
        "su-textarea-container--over-limit": M.value
      }
    ]), K = computed(() => [
      "su-textarea",
      `su-textarea--${e.size}`,
      `su-textarea--${e.state}`,
      {
        "su-textarea--disabled": e.disabled,
        "su-textarea--readonly": e.readonly,
        "su-textarea--auto-resize": e.autoResize,
        "su-textarea--over-limit": M.value
      }
    ]), h2 = computed(() => [
      "su-textarea-counter",
      {
        "su-textarea-counter--near-limit": y.value,
        "su-textarea-counter--over-limit": M.value
      }
    ]), A = computed(() => {
      const b = {};
      return e.ariaLabel && (b["aria-label"] = e.ariaLabel), e.ariaInvalid !== void 0 && (b["aria-invalid"] = e.ariaInvalid), e.ariaRequired !== void 0 && (b["aria-required"] = e.ariaRequired), e.required && (b["aria-required"] = "true"), (e.state === "error" || M.value) && (b["aria-invalid"] = "true"), b;
    }), D = computed(() => {
      const b = {};
      return e.autocomplete && (b.autocomplete = e.autocomplete), e.maxLength && (b.maxlength = e.maxLength), e.spellcheck !== void 0 && (b.spellcheck = e.spellcheck), e.wrap && (b.wrap = e.wrap), b;
    }), H = async () => {
      if (!e.autoResize || !z.value) return;
      await nextTick();
      const b = z.value, d = e.minRows ? e.minRows * 1.5 : 3 * 1.5, U = e.maxRows ? e.maxRows * 1.5 : 10 * 1.5;
      b.style.height = "auto";
      const te = b.scrollHeight, ce = Math.max(d * 16, Math.min(U * 16, te));
      b.style.height = `${ce}px`;
    }, _ = (b) => {
      const d = b.target;
      g.value = d.value, n("input", b), e.autoResize && H();
    }, S = (b) => {
      n("change", b);
    }, ae = (b) => {
      n("focus", b);
    }, le = (b) => {
      n("blur", b);
    }, ie = (b) => {
      n("keydown", b);
    }, J = (b) => {
      n("keyup", b);
    };
    return l({
      focus: () => {
        var b;
        (b = z.value) == null || b.focus();
      },
      select: () => {
        var b;
        (b = z.value) == null || b.select();
      },
      textareaRef: z
    }), watch(g, () => {
      e.autoResize && H();
    }, { immediate: true }), watch(() => e.autoResize, (b) => {
      b && H();
    }), (b, d) => (openBlock(), createBlock(fe, {
      fieldId: k.value,
      label: b.label,
      message: b.message,
      state: b.state,
      required: b.required,
      disabled: b.disabled
    }, {
      default: withCtx(({ fieldId: U, messageId: te }) => [
        createBaseVNode("div", null, [
          createBaseVNode("div", {
            class: normalizeClass(f.value)
          }, [
            createBaseVNode("textarea", mergeProps({
              ref_key: "textareaRef",
              ref: z,
              id: U,
              class: K.value,
              value: g.value,
              placeholder: b.placeholder,
              disabled: b.disabled,
              readonly: b.readonly,
              required: b.required,
              rows: b.autoResize ? b.minRows : b.rows,
              "aria-describedby": te
            }, { ...D.value, ...A.value }, {
              onInput: _,
              onChange: S,
              onFocus: ae,
              onBlur: le,
              onKeydown: ie,
              onKeyup: J
            }), null, 16, Rt)
          ], 2),
          b.showCounter && b.maxLength ? (openBlock(), createElementBlock("div", Vt, [
            d[0] || (d[0] = createBaseVNode("div", { class: "su-textarea-footer-spacer" }, null, -1)),
            createBaseVNode("div", {
              id: `${U}-counter`,
              class: normalizeClass(h2.value),
              "aria-live": y.value || M.value ? "polite" : "off"
            }, [
              createBaseVNode("span", At, toDisplayString(M.value ? "Limite de caractères dépassée" : "Caractères restants") + ": ", 1),
              createTextVNode(" " + toDisplayString(m.value) + "/" + toDisplayString(b.maxLength), 1)
            ], 10, St)
          ])) : createCommentVNode("", true)
        ])
      ]),
      _: 1
    }, 8, ["fieldId", "label", "message", "state", "required", "disabled"]));
  }
});
var Pt = ["dir"];
var Tt = {
  key: 0,
  class: "su-slider-before"
};
var Et = {
  key: 1,
  class: "su-slider-labels"
};
var Ht = { class: "su-slider-label su-slider-label--min" };
var Kt = { class: "su-slider-label su-slider-label--max" };
var Ot = { class: "su-slider-wrapper" };
var jt = {
  key: 0,
  class: "su-slider-value"
};
var Gt = {
  key: 0,
  class: "su-slider-value-display"
};
var Ut = {
  key: 1,
  class: "su-slider-value-dual"
};
var Zt = { class: "su-slider-value-min" };
var Nt = { class: "su-slider-value-max" };
var Wt = ["aria-describedby"];
var Yt = {
  key: 0,
  class: "su-slider-ticks"
};
var Xt = {
  key: 1,
  class: "su-slider-marks"
};
var Qt = { class: "su-slider-mark-label" };
var Jt = ["id", "tabindex"];
var es = ["id", "tabindex"];
var as = {
  key: 2,
  class: "su-slider-after"
};
var He = defineComponent({
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
  setup(p, { expose: l, emit: a }) {
    const e = p, g = useModel(p, "modelValue"), n = a, $ = useAttrs(), z = ref(), C = ref(), k = ref(), x = ref(), m = ref(false), L = ref(null), y = ref(false), M = ref(false), f = "slider-" + useId(), K = computed(() => $.id || f), h2 = computed(() => Array.isArray(g.value)), A = computed({
      get() {
        return g.value === void 0 || g.value === null ? e.min : g.value;
      },
      set(t) {
        g.value = t, n("change", t), n("input", t);
      }
    }), D = computed(() => h2.value ? A.value[0] : A.value), H = computed(() => h2.value ? A.value[1] : A.value), _ = (t) => e.formatValue ? e.formatValue(t) : t.toString(), S = computed(() => {
      const t = (D.value - e.min) / (e.max - e.min) * 100;
      return e.dir === "rtl" ? 100 - t : t;
    }), ae = computed(() => {
      const t = (H.value - e.min) / (e.max - e.min) * 100;
      return e.dir === "rtl" ? 100 - t : t;
    }), le = computed(() => [
      "su-slider-container",
      `su-slider-container--${e.size}`,
      `su-slider-container--${e.state}`,
      `su-slider-container--${e.orientation}`,
      {
        "su-slider-container--disabled": e.disabled,
        "su-slider-container--readonly": e.readonly,
        "su-slider-container--dual": h2.value,
        "su-slider-container--dragging": m.value,
        "su-slider-container--rtl": e.dir === "rtl"
      }
    ]), ie = computed(() => [
      "su-slider-track",
      `su-slider-track--${e.size}`,
      `su-slider-track--${e.state}`,
      `su-slider-track--${e.orientation}`
    ]), J = (t) => [
      "su-slider-thumb",
      `su-slider-thumb--${e.size}`,
      `su-slider-thumb--${e.state}`,
      `su-slider-thumb--${e.orientation}`,
      {
        "su-slider-thumb--disabled": e.disabled,
        "su-slider-thumb--readonly": e.readonly,
        "su-slider-thumb--active": L.value === t
      }
    ], re = (t) => {
      const v = t === "min" ? D.value : H.value, I = {
        role: "slider",
        "aria-valuemin": e.min,
        "aria-valuemax": e.max,
        "aria-valuenow": v,
        "aria-valuetext": e.ariaValueText || _(v),
        "aria-orientation": e.orientation
      };
      return e.ariaLabel && (I["aria-label"] = h2.value ? `${e.ariaLabel} ${t === "min" ? "minimum" : "maximum"}` : e.ariaLabel), e.ariaInvalid !== void 0 && (I["aria-invalid"] = e.ariaInvalid), e.ariaRequired !== void 0 && (I["aria-required"] = e.ariaRequired), e.required && (I["aria-required"] = "true"), e.state === "error" && (I["aria-invalid"] = "true"), I;
    }, ne = (t) => Math.max(e.min, Math.min(e.max, t)), b = (t) => {
      const v = Math.round((t - e.min) / e.step);
      return e.min + v * e.step;
    }, d = (t, v) => {
      if (!C.value) return e.min;
      const I = C.value.getBoundingClientRect();
      let V;
      e.orientation === "horizontal" ? (V = (t - I.left) / I.width, e.dir === "rtl" && (V = 1 - V)) : V = 1 - (v - I.top) / I.height, V = Math.max(0, Math.min(1, V));
      const B = e.min + V * (e.max - e.min);
      return b(ne(B));
    }, U = (t, v = "min") => {
      if (e.disabled || e.readonly) return;
      const I = ne(b(t));
      if (h2.value) {
        const [B, Z] = A.value;
        v === "min" ? A.value = [Math.min(I, Z), Z] : A.value = [B, Math.max(I, B)];
      } else
        A.value = I;
      const V = h2.value ? `${v === "min" ? "Minimum" : "Maximum"} : ${_(I)}` : _(I);
      ee(V);
    }, te = (t, v = "min") => {
      if (e.disabled || e.readonly) return;
      t.preventDefault(), m.value = true, L.value = v;
      const I = (B) => {
        const Z = d(B.clientX, B.clientY);
        U(Z, v);
      }, V = () => {
        m.value = false, L.value = null, document.removeEventListener("mousemove", I), document.removeEventListener("mouseup", V);
      };
      document.addEventListener("mousemove", I), document.addEventListener("mouseup", V);
    }, ce = (t) => {
      if (e.disabled || e.readonly) return;
      const v = d(t.clientX, t.clientY);
      if (h2.value) {
        const [I, V] = A.value, B = Math.abs(v - I), Z = Math.abs(v - V), O = B <= Z ? "min" : "max";
        U(v, O);
      } else
        U(v);
    }, ge = (t, v = "min") => {
      if (e.disabled || e.readonly) return;
      const I = v === "min" ? D.value : H.value;
      let V = I;
      const B = (e.max - e.min) / 10;
      switch (t.key) {
        case "ArrowRight":
        case "ArrowUp":
          t.preventDefault(), V = I + e.step;
          break;
        case "ArrowLeft":
        case "ArrowDown":
          t.preventDefault(), V = I - e.step;
          break;
        case "PageUp":
          t.preventDefault(), V = I + B;
          break;
        case "PageDown":
          t.preventDefault(), V = I - B;
          break;
        case "Home":
          t.preventDefault(), V = e.min;
          break;
        case "End":
          t.preventDefault(), V = e.max;
          break;
        default:
          return;
      }
      U(V, v), n("keydown", t);
    }, $e = (t, v = "min") => {
      e.tooltip !== "none" && (v === "min" ? y.value = true : M.value = true), n("focus", t);
    }, i = (t, v = "min") => {
      e.tooltip !== "none" && (v === "min" ? y.value = false : M.value = false), n("blur", t);
    }, R = (t = "min") => {
      e.tooltip !== "none" && !e.disabled && (t === "min" ? y.value = true : M.value = true);
    }, G = (t = "min") => {
      e.tooltip !== "none" && (t === "min" ? y.value = false : M.value = false);
    }, T = computed(() => {
      if (!e.showTicks) return [];
      const t = Math.min(21, (e.max - e.min) / e.step + 1), v = (e.max - e.min) / (t - 1);
      return Array.from({ length: t }, (I, V) => {
        const B = e.min + V * v, Z = (B - e.min) / (e.max - e.min) * 100, O = e.dir === "rtl" ? 100 - Z : Z;
        return { value: b(B), percent: O };
      });
    }), q = computed(() => !e.marks || e.marks.length === 0 ? [] : e.marks.filter((t) => t >= e.min && t <= e.max).map((t) => {
      const v = (t - e.min) / (e.max - e.min) * 100, I = e.dir === "rtl" ? 100 - v : v;
      return { value: t, percent: I };
    }));
    return l({
      focus: () => {
        var t;
        (t = k.value) == null || t.focus();
      },
      sliderRef: z,
      thumb1Ref: k,
      thumb2Ref: x
    }), (t, v) => (openBlock(), createBlock(fe, {
      fieldId: K.value,
      label: t.label,
      message: t.message,
      state: t.state,
      required: t.required,
      disabled: t.disabled
    }, {
      default: withCtx(({ fieldId: I, messageId: V }) => [
        createBaseVNode("div", {
          class: normalizeClass(le.value),
          dir: t.dir
        }, [
          t.$slots.before ? (openBlock(), createElementBlock("div", Tt, [
            renderSlot(t.$slots, "before")
          ])) : createCommentVNode("", true),
          t.showLabels ? (openBlock(), createElementBlock("div", Et, [
            createBaseVNode("span", Ht, toDisplayString(_(t.min)), 1),
            createBaseVNode("span", Kt, toDisplayString(_(t.max)), 1)
          ])) : createCommentVNode("", true),
          createBaseVNode("div", Ot, [
            t.showValue && t.tooltip === "none" ? (openBlock(), createElementBlock("div", jt, [
              h2.value ? (openBlock(), createElementBlock("div", Ut, [
                createBaseVNode("span", Zt, toDisplayString(_(D.value)), 1),
                v[12] || (v[12] = createBaseVNode("span", { class: "su-slider-value-separator" }, "-", -1)),
                createBaseVNode("span", Nt, toDisplayString(_(H.value)), 1)
              ])) : (openBlock(), createElementBlock("span", Gt, toDisplayString(_(D.value)), 1))
            ])) : createCommentVNode("", true),
            createBaseVNode("div", {
              ref_key: "sliderRef",
              ref: z,
              class: "su-slider-slider",
              "aria-describedby": V,
              onClick: ce
            }, [
              createBaseVNode("div", {
                ref_key: "trackRef",
                ref: C,
                class: normalizeClass(ie.value)
              }, [
                createBaseVNode("div", {
                  class: "su-slider-track-active",
                  style: normalizeStyle({
                    [t.orientation === "horizontal" ? "left" : "bottom"]: `${h2.value ? Math.min(S.value, ae.value) : 0}%`,
                    [t.orientation === "horizontal" ? "width" : "height"]: `${h2.value ? Math.abs(ae.value - S.value) : Math.abs(S.value)}%`
                  })
                }, null, 4),
                t.showTicks ? (openBlock(), createElementBlock("div", Yt, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(T.value, (B) => (openBlock(), createElementBlock("div", {
                    key: B.value,
                    class: "su-slider-tick",
                    style: normalizeStyle({
                      [t.orientation === "horizontal" ? "left" : "bottom"]: `${B.percent}%`
                    })
                  }, null, 4))), 128))
                ])) : createCommentVNode("", true),
                q.value.length > 0 ? (openBlock(), createElementBlock("div", Xt, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(q.value, (B) => (openBlock(), createElementBlock("div", {
                    key: B.value,
                    class: "su-slider-mark",
                    style: normalizeStyle({
                      [t.orientation === "horizontal" ? "left" : "bottom"]: `${B.percent}%`
                    })
                  }, [
                    v[13] || (v[13] = createBaseVNode("div", { class: "su-slider-mark-dot" }, null, -1)),
                    createBaseVNode("div", Qt, toDisplayString(_(B.value)), 1)
                  ], 4))), 128))
                ])) : createCommentVNode("", true),
                createBaseVNode("div", mergeProps({
                  ref_key: "thumb1Ref",
                  ref: k,
                  id: h2.value ? `${I}-min` : I,
                  class: J("min"),
                  style: {
                    [t.orientation === "horizontal" ? "left" : "bottom"]: `${S.value}%`
                  },
                  tabindex: t.disabled ? -1 : 0
                }, re("min"), {
                  onMousedown: v[0] || (v[0] = (B) => te(B, "min")),
                  onKeydown: v[1] || (v[1] = (B) => ge(B, "min")),
                  onFocus: v[2] || (v[2] = (B) => $e(B, "min")),
                  onBlur: v[3] || (v[3] = (B) => i(B, "min")),
                  onMouseenter: v[4] || (v[4] = (B) => R("min")),
                  onMouseleave: v[5] || (v[5] = (B) => G("min"))
                }), [
                  v[14] || (v[14] = createBaseVNode("div", { class: "su-slider-thumb-handle" }, null, -1)),
                  t.tooltip !== "none" && (y.value || m.value && L.value === "min") ? (openBlock(), createElementBlock("div", {
                    key: 0,
                    class: normalizeClass(["su-slider-tooltip", `su-slider-tooltip--${t.tooltip}`])
                  }, toDisplayString(_(D.value)), 3)) : createCommentVNode("", true)
                ], 16, Jt),
                h2.value ? (openBlock(), createElementBlock("div", mergeProps({
                  key: 2,
                  ref_key: "thumb2Ref",
                  ref: x,
                  id: `${I}-max`,
                  class: J("max"),
                  style: {
                    [t.orientation === "horizontal" ? "left" : "bottom"]: `${ae.value}%`
                  },
                  tabindex: t.disabled ? -1 : 0
                }, re("max"), {
                  onMousedown: v[6] || (v[6] = (B) => te(B, "max")),
                  onKeydown: v[7] || (v[7] = (B) => ge(B, "max")),
                  onFocus: v[8] || (v[8] = (B) => $e(B, "max")),
                  onBlur: v[9] || (v[9] = (B) => i(B, "max")),
                  onMouseenter: v[10] || (v[10] = (B) => R("max")),
                  onMouseleave: v[11] || (v[11] = (B) => G("max"))
                }), [
                  v[15] || (v[15] = createBaseVNode("div", { class: "su-slider-thumb-handle" }, null, -1)),
                  t.tooltip !== "none" && (M.value || m.value && L.value === "max") ? (openBlock(), createElementBlock("div", {
                    key: 0,
                    class: normalizeClass(["su-slider-tooltip", `su-slider-tooltip--${t.tooltip}`])
                  }, toDisplayString(_(H.value)), 3)) : createCommentVNode("", true)
                ], 16, es)) : createCommentVNode("", true)
              ], 2)
            ], 8, Wt)
          ]),
          t.$slots.after ? (openBlock(), createElementBlock("div", as, [
            renderSlot(t.$slots, "after")
          ])) : createCommentVNode("", true)
        ], 10, Pt)
      ]),
      _: 3
    }, 8, ["fieldId", "label", "message", "state", "required", "disabled"]));
  }
});
var ts = {
  key: 0,
  class: "su-form-fields-head"
};
var ss = { class: "su-form-fields-content" };
var ls = {
  key: 1,
  class: "su-form-fields-footer"
};
var is = defineComponent({
  __name: "FormFields",
  props: {
    gap: { default: "md" },
    sectionGap: { default: "lg" },
    size: {},
    direction: { default: "vertical" },
    ariaLabel: {},
    ariaLabelledBy: {},
    ariaDescribedBy: {},
    ariaHidden: { type: Boolean },
    role: {},
    tabIndex: {}
  },
  setup(p) {
    const l = p, a = useSlots(), e = [
      Fe,
      Ve,
      Se,
      Ae,
      Pe,
      Te,
      Ee,
      He
    ], g = computed(() => [
      "su-form-fields",
      `su-form-fields--gap-${l.gap}`,
      `su-form-fields--section-gap-${l.sectionGap}`,
      `su-form-fields--${l.direction}`
    ]), n = computed(() => {
      var k;
      if (!(a != null && a.default)) return [];
      const z = ((k = a == null ? void 0 : a.default) == null ? void 0 : k.call(a)) ?? [], C = [];
      for (const x of z)
        if (e.some((L) => x.type === L)) {
          const L = { ...x.props };
          l.size && (L.size = l.size), C.push(h(x.type, L, x == null ? void 0 : x.children));
        } else {
          if (x.type === Comment || x.type === Text || x.type === Fragment)
            continue;
          console.warn("FormFields expects only form field components as children. Found:", x.type);
        }
      return C;
    });
    computed(() => a != null && a.head ? a.head() : []), computed(() => a != null && a.footer ? a.footer() : []);
    const $ = computed(() => {
      const z = {};
      return l.ariaLabel && (z["aria-label"] = l.ariaLabel), l.ariaDescribedBy && (z["aria-describedby"] = l.ariaDescribedBy), l.role && (z.role = l.role), z;
    });
    return (z, C) => (openBlock(), createElementBlock("div", mergeProps({ class: g.value }, $.value), [
      z.$slots.head ? (openBlock(), createElementBlock("div", ts, [
        renderSlot(z.$slots, "head")
      ])) : createCommentVNode("", true),
      createBaseVNode("div", ss, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(n.value, (k, x) => (openBlock(), createBlock(resolveDynamicComponent(k), { key: x }))), 128))
      ]),
      z.$slots.footer ? (openBlock(), createElementBlock("div", ls, [
        renderSlot(z.$slots, "footer")
      ])) : createCommentVNode("", true)
    ], 16));
  }
});
var os = {
  install(p, l = {}) {
    const a = l.prefix || "Su", e = document.documentElement;
    if (typeof document < "u") {
      if (l.buttonRadius && e.style.setProperty("--su-button-default-radius", `var(--su-border-radius-${l.buttonRadius})`), l.buttonVariant) {
        const n = {
          primary: {
            bg: "var(--su-button-variant-primary-bg)",
            color: "var(--su-button-variant-primary-color)",
            border: "var(--su-button-variant-primary-border)",
            hoverBg: "var(--su-button-variant-primary-hover-bg)",
            hoverShadow: "var(--su-button-variant-primary-hover-shadow)"
          },
          secondary: {
            bg: "var(--su-button-variant-secondary-bg)",
            color: "var(--su-button-variant-secondary-color)",
            border: "var(--su-button-variant-secondary-border)",
            hoverBg: "var(--su-button-variant-secondary-hover-bg)",
            hoverShadow: "var(--su-button-variant-secondary-hover-shadow)"
          },
          outline: {
            bg: "var(--su-button-variant-outline-bg)",
            color: "var(--su-button-variant-outline-color)",
            border: "var(--su-button-variant-outline-border)",
            hoverBg: "var(--su-button-variant-outline-hover-bg)",
            hoverShadow: "none"
          },
          ghost: {
            bg: "var(--su-button-variant-ghost-bg)",
            color: "var(--su-button-variant-ghost-color)",
            border: "var(--su-button-variant-ghost-border)",
            hoverBg: "var(--su-button-variant-ghost-hover-bg)",
            hoverShadow: "none"
          }
        }[l.buttonVariant];
        n && (e.style.setProperty("--su-button-variant-primary-bg", n.bg), e.style.setProperty("--su-button-variant-primary-color", n.color), e.style.setProperty("--su-button-variant-primary-border", n.border), e.style.setProperty("--su-button-variant-primary-hover-bg", n.hoverBg), e.style.setProperty("--su-button-variant-primary-hover-shadow", n.hoverShadow));
      }
      if (l.buttonSize) {
        const n = {
          sm: "sm",
          md: "md",
          lg: "lg"
        }[l.buttonSize];
        n && (e.style.setProperty("--su-button-size-md-padding", `var(--su-button-size-${n}-padding)`), e.style.setProperty("--su-button-size-md-font-size", `var(--su-button-size-${n}-font-size)`), e.style.setProperty("--su-button-size-md-line-height", `var(--su-button-size-${n}-line-height)`), e.style.setProperty("--su-button-size-md-min-height", `var(--su-button-size-${n}-min-height)`), e.style.setProperty("--su-button-size-md-icon-only-padding", `var(--su-button-size-${n}-icon-only-padding)`), e.style.setProperty("--su-button-size-md-icon-only-width", `var(--su-button-size-${n}-icon-only-width)`));
      }
    }
    if (l.linkVariant) {
      const n = {
        default: {
          color: "var(--su-link-variant-default-color)",
          hoverColor: "var(--su-link-variant-default-hover-color)",
          activeColor: "var(--su-link-variant-default-active-color)"
        },
        primary: {
          color: "var(--su-link-variant-primary-color)",
          hoverColor: "var(--su-link-variant-primary-hover-color)",
          activeColor: "var(--su-link-variant-primary-hover-color)"
        },
        secondary: {
          color: "var(--su-link-variant-secondary-color)",
          hoverColor: "var(--su-link-variant-secondary-hover-color)",
          activeColor: "var(--su-link-variant-secondary-hover-color)"
        },
        muted: {
          color: "var(--su-link-variant-muted-color)",
          hoverColor: "var(--su-link-variant-muted-hover-color)",
          activeColor: "var(--su-link-variant-muted-active-color)"
        }
      }[l.linkVariant];
      n && (e.style.setProperty("--su-link-variant-default-color", n.color), e.style.setProperty("--su-link-variant-default-hover-color", n.hoverColor), e.style.setProperty("--su-link-variant-default-active-color", n.activeColor));
    }
    if (l.linkSize) {
      const n = {
        sm: "sm",
        md: "md",
        lg: "lg"
      }[l.linkSize];
      n && (e.style.setProperty("--su-link-size-md-font-size", `var(--su-link-size-${n}-font-size)`), e.style.setProperty("--su-link-size-md-line-height", `var(--su-link-size-${n}-line-height)`), e.style.setProperty("--su-link-size-md-padding", `var(--su-link-size-${n}-padding)`), e.style.setProperty("--su-link-size-md-icon-size", `var(--su-link-size-${n}-icon-size)`), e.style.setProperty("--su-link-size-md-icon-only-padding", `var(--su-link-size-${n}-icon-only-padding)`), e.style.setProperty("--su-link-size-md-icon-only-size", `var(--su-link-size-${n}-icon-only-size)`));
    }
    l.linkUnderline && e.style.setProperty("--su-link-default-underline", l.linkUnderline), p.component(`${a}FormField`, fe), p.component(`${a}Button`, De), p.component(`${a}ButtonsGroup`, Je), p.component(`${a}Link`, Me), p.component(`${a}LinksGroup`, ua), p.component(`${a}Input`, Fe), p.component(`${a}SelectBox`, Ve), p.component(`${a}RadioGroup`, Se), p.component(`${a}CheckboxGroup`, Ae), p.component(`${a}Switch`, Pe), p.component(`${a}FileUpload`, Te), p.component(`${a}Textarea`, Ee), p.component(`${a}Slider`, He), p.component(`${a}FormFields`, is);
  }
};
export {
  De as Button,
  Je as ButtonsGroup,
  Ae as CheckboxGroup,
  Te as FileUpload,
  fe as FormField,
  is as FormFields,
  Fe as Input,
  Me as Link,
  ua as LinksGroup,
  Se as RadioGroup,
  Ve as SelectBox,
  He as Slider,
  Pe as Switch,
  Ee as Textarea,
  ns as accessibility,
  os as default
};
//# sourceMappingURL=@surgeup_ds-vue.js.map
