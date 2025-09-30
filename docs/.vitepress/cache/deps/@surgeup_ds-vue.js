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
  createSlots,
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
var Ze = { class: "su-form-field-wrapper" };
var Ne = ["for"];
var We = {
  key: 0,
  class: "su-indicator-required",
  "aria-label": "requis"
};
var Ye = ["id"];
var ye = defineComponent({
  __name: "FormField",
  props: {
    fieldId: {},
    label: {},
    message: {},
    state: { default: "default" },
    required: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false }
  },
  setup(v) {
    const l = v, a = computed(() => l.message ? `${l.fieldId}-message` : void 0), e = computed(() => {
      const k = {};
      return l.state === "error" ? k["aria-live"] = "assertive" : (l.state === "success" || l.state === "warning") && (k["aria-live"] = "polite"), k;
    }), m = computed(() => [
      "su-form-field-message",
      `su-form-field-message--${l.state}`
    ]), o = computed(() => [
      "su-form-field-label",
      {
        "su-form-field-label--required": l.required,
        "su-form-field-label--disabled": l.disabled
      }
    ]);
    return (k, C) => (openBlock(), createElementBlock("div", Ze, [
      k.label ? (openBlock(), createElementBlock("label", {
        key: 0,
        for: k.fieldId,
        class: normalizeClass(o.value)
      }, [
        createTextVNode(toDisplayString(k.label) + " ", 1),
        k.required ? (openBlock(), createElementBlock("span", We, "*")) : createCommentVNode("", true)
      ], 10, Ne)) : createCommentVNode("", true),
      renderSlot(k.$slots, "default", {
        fieldId: k.fieldId,
        messageId: a.value
      }),
      k.message ? (openBlock(), createElementBlock("div", mergeProps({
        key: 1,
        id: a.value,
        class: m.value
      }, e.value), toDisplayString(k.message), 17, Ye)) : createCommentVNode("", true)
    ]));
  }
});
var Xe = ["disabled", "tabindex"];
var Qe = {
  key: 0,
  class: "su-button__spinner"
};
var Je = {
  key: 1,
  class: "su-button__content"
};
var Ve = defineComponent({
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
  setup(v, { emit: l }) {
    const a = v, e = l, m = computed(() => [
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
    ]), o = computed(() => !(a.icon && a.iconDisplay === "only")), k = (w) => {
      a.disabled || a.loading || e("click", w);
    }, C = (w) => {
      (w.key === "Enter" || w.key === " ") && (w.preventDefault(), !a.disabled && !a.loading && e("click", w)), e("keydown", w);
    }, z = (w) => {
      e("focus", w);
    }, d = (w) => {
      e("blur", w);
    }, D = computed(() => {
      const w = {};
      return a.ariaLabel && (w["aria-label"] = a.ariaLabel), a.ariaDescribedBy && (w["aria-describedby"] = a.ariaDescribedBy), a.ariaExpanded !== void 0 && (w["aria-expanded"] = a.ariaExpanded), a.ariaPressed !== void 0 && (w["aria-pressed"] = a.ariaPressed), a.role && (w.role = a.role), a.loading && (w["aria-busy"] = "true", w["aria-live"] = "polite"), a.disabled && (w["aria-disabled"] = "true"), a.icon && a.iconDisplay === "only" && !a.ariaLabel && console.warn('Button with icon and iconDisplay="only" should have an ariaLabel for accessibility'), w;
    });
    return (w, _) => (openBlock(), createElementBlock("button", mergeProps({
      class: m.value,
      disabled: w.disabled || w.loading,
      tabindex: w.disabled ? -1 : w.tabIndex
    }, D.value, {
      onClick: k,
      onKeydown: C,
      onFocus: z,
      onBlur: d
    }), [
      w.loading ? (openBlock(), createElementBlock("span", Qe, [..._[0] || (_[0] = [
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
      w.loading ? createCommentVNode("", true) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
        w.icon ? (openBlock(), createBlock(resolveDynamicComponent(w.icon), {
          key: 0,
          class: "su-button__icon",
          "aria-hidden": "true"
        })) : createCommentVNode("", true),
        o.value ? (openBlock(), createElementBlock("span", Je, [
          renderSlot(w.$slots, "default")
        ])) : createCommentVNode("", true)
      ], 64))
    ], 16, Xe));
  }
});
function ea(v, l) {
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
function aa(v, l) {
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
function Ce(v, l) {
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
function sa(v, l) {
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
function ta(v, l) {
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
function la(v, l) {
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
function ia(v, l) {
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
function ra(v, l) {
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
      d: "M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"
    })
  ]);
}
function oa(v, l) {
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
      d: "M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
    }),
    createBaseVNode("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
    })
  ]);
}
function na(v, l) {
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
function ua(v, l) {
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
function ze(v, l) {
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
var da = ["dir"];
var ca = ["tabindex", "onKeydown"];
var fa = ["tabindex", "onKeydown"];
var pa = ["id", "type", "value", "placeholder", "disabled", "readonly", "required", "aria-describedby"];
var va = ["tabindex", "onKeydown"];
var ha = ["tabindex", "onKeydown"];
var Se = defineComponent({
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
    linkVariant: {},
    linkSize: {},
    linkUnderline: {},
    buttonRadius: {},
    buttonVariant: {},
    buttonSize: {},
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
  setup(v, { expose: l, emit: a }) {
    const e = v, m = useModel(v, "modelValue"), o = a, k = useAttrs(), C = ref(), z = "input-" + useId(), d = computed(() => k.id || z), D = computed(() => typeof k.onPrefixClick == "function"), w = computed(() => typeof k.onPrefixIconClick == "function"), _ = computed(() => typeof k.onSuffixClick == "function"), L = computed(() => typeof k.onSuffixIconClick == "function"), M = computed(() => [
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
    ]), p = computed(() => [
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
    ]), A = computed(() => {
      const h2 = {};
      return e.ariaLabel && (h2["aria-label"] = e.ariaLabel), e.ariaInvalid !== void 0 && (h2["aria-invalid"] = e.ariaInvalid), e.ariaRequired !== void 0 && (h2["aria-required"] = e.ariaRequired), e.required && (h2["aria-required"] = "true"), e.state === "error" && (h2["aria-invalid"] = "true"), h2;
    }), g = computed(() => {
      const h2 = {};
      return e.autocomplete && (h2.autocomplete = e.autocomplete), e.min !== void 0 && (h2.min = e.min), e.max !== void 0 && (h2.max = e.max), e.step !== void 0 && (h2.step = e.step), e.minLength !== void 0 && (h2.minlength = e.minLength), e.maxLength !== void 0 && (h2.maxlength = e.maxLength), e.pattern && (h2.pattern = e.pattern), h2;
    }), F = (h2) => {
      const G = h2.target;
      m.value = e.type === "number" ? Number(G.value) : G.value, o("input", h2);
    }, b = (h2) => {
      o("change", h2);
    }, u = (h2) => {
      o("focus", h2);
    }, B = (h2) => {
      o("blur", h2);
    }, y = (h2) => {
      o("keydown", h2);
    }, N = (h2) => {
      o("keyup", h2);
    }, le = (h2) => {
      e.disabled || e.readonly || o("prefix-click", h2);
    }, ie = (h2) => {
      e.disabled || e.readonly || o("prefix-icon-click", h2);
    }, Q = (h2) => {
      e.disabled || e.readonly || o("suffix-click", h2);
    }, ae = (h2) => {
      e.disabled || e.readonly || o("suffix-icon-click", h2);
    };
    return l({
      focus: () => {
        var h2;
        (h2 = C.value) == null || h2.focus();
      },
      select: () => {
        var h2;
        (h2 = C.value) == null || h2.select();
      },
      inputRef: C
    }), (h2, G) => (openBlock(), createBlock(ye, {
      fieldId: d.value,
      label: h2.label,
      message: h2.message,
      state: h2.state,
      required: h2.required,
      disabled: h2.disabled
    }, {
      default: withCtx(({ fieldId: re, messageId: pe }) => [
        createBaseVNode("div", {
          class: normalizeClass(M.value),
          dir: h2.dir
        }, [
          h2.prefixIcon ? (openBlock(), createElementBlock("div", {
            key: 0,
            class: normalizeClass(["su-input-prefix su-input-prefix--icon", { "su-input-prefix--clickable": w.value }]),
            tabindex: w.value && !h2.disabled && !h2.readonly ? 0 : -1,
            onClick: ie,
            onKeydown: [
              withKeys(withModifiers(ie, ["prevent"]), ["enter"]),
              withKeys(withModifiers(ie, ["prevent"]), ["space"])
            ]
          }, [
            (openBlock(), createBlock(resolveDynamicComponent(h2.prefixIcon), {
              class: "su-input-icon",
              "aria-hidden": "true"
            }))
          ], 42, ca)) : h2.prefix ? (openBlock(), createElementBlock("div", {
            key: 1,
            class: normalizeClass(["su-input-prefix su-input-prefix--text", { "su-input-prefix--clickable": D.value }]),
            tabindex: D.value && !h2.disabled && !h2.readonly ? 0 : -1,
            onClick: le,
            onKeydown: [
              withKeys(withModifiers(le, ["prevent"]), ["enter"]),
              withKeys(withModifiers(le, ["prevent"]), ["space"])
            ]
          }, toDisplayString(h2.prefix), 43, fa)) : createCommentVNode("", true),
          createBaseVNode("input", mergeProps({
            ref_key: "inputRef",
            ref: C,
            id: re,
            class: p.value,
            type: h2.type,
            value: m.value,
            placeholder: h2.placeholder,
            disabled: h2.disabled,
            readonly: h2.readonly,
            required: h2.required,
            "aria-describedby": pe
          }, { ...g.value, ...A.value }, {
            onInput: F,
            onChange: b,
            onFocus: u,
            onBlur: B,
            onKeydown: y,
            onKeyup: N
          }), null, 16, pa),
          h2.suffix ? (openBlock(), createElementBlock("div", {
            key: 2,
            class: normalizeClass(["su-input-suffix su-input-suffix--text", { "su-input-suffix--clickable": _.value }]),
            tabindex: _.value && !h2.disabled && !h2.readonly ? 0 : -1,
            onClick: Q,
            onKeydown: [
              withKeys(withModifiers(Q, ["prevent"]), ["enter"]),
              withKeys(withModifiers(Q, ["prevent"]), ["space"])
            ]
          }, toDisplayString(h2.suffix), 43, va)) : h2.suffixIcon ? (openBlock(), createElementBlock("div", {
            key: 3,
            class: normalizeClass(["su-input-suffix su-input-suffix--icon", { "su-input-suffix--clickable": L.value }]),
            tabindex: L.value && !h2.disabled && !h2.readonly ? 0 : -1,
            onClick: ae,
            onKeydown: [
              withKeys(withModifiers(ae, ["prevent"]), ["enter"]),
              withKeys(withModifiers(ae, ["prevent"]), ["space"])
            ]
          }, [
            (openBlock(), createBlock(resolveDynamicComponent(h2.suffixIcon), {
              class: "su-input-icon",
              "aria-hidden": "true"
            }))
          ], 42, ha)) : createCommentVNode("", true)
        ], 10, da)
      ]),
      _: 1
    }, 8, ["fieldId", "label", "message", "state", "required", "disabled"]));
  }
});
var ba = { class: "su-password-wrapper" };
var ma = ["aria-valuenow", "aria-label"];
var ya = { class: "su-password-strength-label" };
var ga = {
  key: 0,
  class: "su-password-strength-text su-password-strength-text--weak"
};
var ka = {
  key: 1,
  class: "su-password-strength-text su-password-strength-text--fair"
};
var wa = {
  key: 2,
  class: "su-password-strength-text su-password-strength-text--good"
};
var $a = {
  key: 3,
  class: "su-password-strength-text su-password-strength-text--strong"
};
var Ba = {
  class: "sr-only",
  "aria-live": "polite",
  "aria-atomic": true
};
var xa = { key: 0 };
var La = defineComponent({
  __name: "Password",
  props: mergeModels({
    rules: { default: () => ({
      minLength: 8,
      minUppercase: 1,
      minLowercase: 1,
      minDigits: 1,
      minSpecialChars: 1
    }) },
    showProgress: { type: Boolean, default: false },
    showToggle: { type: Boolean, default: true },
    size: { default: "md" },
    state: { default: "default" },
    disabled: { type: Boolean, default: false },
    readonly: { type: Boolean, default: false },
    required: { type: Boolean, default: false },
    placeholder: {},
    value: {},
    prefix: {},
    linkVariant: {},
    linkSize: {},
    linkUnderline: {},
    buttonRadius: {},
    buttonVariant: {},
    buttonSize: {},
    suffix: {},
    prefixIcon: {},
    textAlign: {},
    dir: {},
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
  emits: mergeModels(["validation", "input", "change", "focus", "blur", "keydown", "keyup", "toggle-visibility"], ["update:modelValue"]),
  setup(v, { emit: l }) {
    const a = v, e = useModel(v, "modelValue"), m = l, o = ref(false), k = computed(() => o.value ? "text" : "password"), C = computed(() => o.value ? ra : oa), z = (u) => {
      const B = a.rules || {}, y = u.length, N = (u.match(/[A-Z]/g) || []).length, le = (u.match(/[a-z]/g) || []).length, ie = (u.match(/[0-9]/g) || []).length, Q = (u.match(/[^A-Za-z0-9]/g) || []).length, ae = {
        length: {
          required: B.minLength || 0,
          current: y,
          satisfied: y >= (B.minLength || 0)
        },
        uppercase: {
          required: B.minUppercase || 0,
          current: N,
          satisfied: N >= (B.minUppercase || 0)
        },
        lowercase: {
          required: B.minLowercase || 0,
          current: le,
          satisfied: le >= (B.minLowercase || 0)
        },
        digits: {
          required: B.minDigits || 0,
          current: ie,
          satisfied: ie >= (B.minDigits || 0)
        },
        specialChars: {
          required: B.minSpecialChars || 0,
          current: Q,
          satisfied: Q >= (B.minSpecialChars || 0)
        }
      }, se = [], x = [];
      Object.entries(ae).forEach(([fe, ge]) => {
        ge.required > 0 && (ge.satisfied ? se.push(fe) : x.push(fe));
      });
      const h2 = Object.values(ae).filter((fe) => fe.required > 0).length, G = se.length, re = h2 > 0 ? Math.round(G / h2 * 100) : 100;
      return {
        isValid: x.length === 0 && u.length > 0,
        score: re,
        satisfied: se,
        unsatisfied: x,
        details: ae
      };
    }, d = computed(() => z(e.value || "")), D = computed(() => a.state !== "default" ? a.state : e.value ? d.value.isValid ? "success" : d.value.score < 25 ? "error" : d.value.score < 75 ? "warning" : "default" : "default"), w = computed(() => [
      "su-password-progress",
      `su-password-progress--${D.value}`,
      {
        "su-password-progress--empty": !e.value,
        "su-password-progress--weak": d.value.score < 25,
        "su-password-progress--fair": d.value.score >= 25 && d.value.score < 50,
        "su-password-progress--good": d.value.score >= 50 && d.value.score < 75,
        "su-password-progress--strong": d.value.score >= 75
      }
    ]), _ = () => {
      a.disabled || a.readonly || (o.value = !o.value, m("toggle-visibility", o.value));
    }, L = () => {
      _();
    }, M = (u) => {
      m("input", u);
    }, p = (u) => {
      m("change", u);
    }, A = (u) => {
      m("focus", u);
    }, g = (u) => {
      m("blur", u);
    }, F = (u) => {
      m("keydown", u);
    }, b = (u) => {
      m("keyup", u);
    };
    return watch(d, (u) => {
      m("validation", u);
    }, { immediate: true }), computed(() => o.value ? "Masquer le mot de passe" : "Afficher le mot de passe"), (u, B) => (openBlock(), createElementBlock("div", ba, [
      createVNode(Se, {
        modelValue: e.value,
        "onUpdate:modelValue": B[0] || (B[0] = (y) => e.value = y),
        type: k.value,
        size: u.size,
        state: D.value,
        disabled: u.disabled,
        readonly: u.readonly,
        required: u.required,
        placeholder: u.placeholder,
        prefix: u.prefix,
        prefixIcon: u.prefixIcon,
        suffixIcon: u.showToggle ? C.value : void 0,
        textAlign: u.textAlign,
        dir: u.dir,
        label: u.label,
        message: u.message,
        ariaLabel: u.ariaLabel,
        ariaDescribedBy: u.ariaDescribedBy,
        ariaInvalid: u.ariaInvalid,
        ariaRequired: u.ariaRequired,
        autocomplete: u.autocomplete,
        minLength: u.minLength,
        maxLength: u.maxLength,
        pattern: u.pattern,
        onInput: M,
        onChange: p,
        onFocus: A,
        onBlur: g,
        onKeydown: F,
        onKeyup: b,
        onSuffixIconClick: L
      }, createSlots({ _: 2 }, [
        u.$slots.default ? {
          name: "message",
          fn: withCtx(() => [
            renderSlot(u.$slots, "default", {
              validation: d.value,
              isValid: d.value.isValid,
              score: d.value.score,
              satisfied: d.value.satisfied,
              unsatisfied: d.value.unsatisfied,
              details: d.value.details
            })
          ]),
          key: "0"
        } : void 0
      ]), 1032, ["modelValue", "type", "size", "state", "disabled", "readonly", "required", "placeholder", "prefix", "prefixIcon", "suffixIcon", "textAlign", "dir", "label", "message", "ariaLabel", "ariaDescribedBy", "ariaInvalid", "ariaRequired", "autocomplete", "minLength", "maxLength", "pattern"]),
      u.showProgress && e.value ? (openBlock(), createElementBlock("div", {
        key: 0,
        class: "su-password-progress-container",
        role: "progressbar",
        "aria-valuenow": d.value.score,
        "aria-valuemin": "0",
        "aria-valuemax": "100",
        "aria-label": `Force du mot de passe : ${d.value.score}%`
      }, [
        createBaseVNode("div", {
          class: normalizeClass(w.value),
          style: normalizeStyle({ width: `${d.value.score}%` })
        }, null, 6),
        createBaseVNode("div", ya, [
          d.value.score < 25 ? (openBlock(), createElementBlock("span", ga, " Faible ")) : d.value.score < 50 ? (openBlock(), createElementBlock("span", ka, " Moyen ")) : d.value.score < 75 ? (openBlock(), createElementBlock("span", wa, " Bon ")) : (openBlock(), createElementBlock("span", $a, " Fort "))
        ])
      ], 8, ma)) : createCommentVNode("", true),
      createBaseVNode("div", Ba, [
        e.value ? (openBlock(), createElementBlock("span", xa, " Mot de passe " + toDisplayString(d.value.isValid ? "valide" : "invalide") + ". Force : " + toDisplayString(d.value.score) + "%. " + toDisplayString(d.value.satisfied.length) + " règle(s) respectée(s), " + toDisplayString(d.value.unsatisfied.length) + " règle(s) non respectée(s). ", 1)) : createCommentVNode("", true)
      ])
    ]));
  }
});
var Ca = defineComponent({
  __name: "ButtonsGroup",
  props: {
    gap: { default: "md" },
    size: {},
    variant: {},
    ariaLabel: {},
    ariaDescribedBy: {},
    role: {}
  },
  setup(v) {
    const l = v, a = useSlots(), e = computed(() => [
      "su-buttons-group",
      `su-buttons-group--gap-${l.gap}`,
      {
        "su-buttons-group--connected": l.gap === "none"
      }
    ]), m = computed(() => {
      var z;
      if (!(a != null && a.default)) return [];
      const k = ((z = a == null ? void 0 : a.default) == null ? void 0 : z.call(a)) ?? [], C = [];
      for (const d of k)
        if (d.type === Ve) {
          const D = { ...d.props };
          if (l.size && (D.size = l.size), l.variant && (D.variant = l.variant), l.gap === "none") {
            const w = D.class || "";
            D.class = `${w} su-buttons-group__button`.trim();
          }
          C.push(h(d.type, D, d == null ? void 0 : d.children));
        } else {
          if (d.type === Comment || d.type === Text || d.type === Fragment)
            continue;
          console.warn("ButtonsGroup expects only Button components as children. Found:", d.type);
        }
      return C;
    }), o = computed(() => {
      const k = {};
      return l.ariaLabel && (k["aria-label"] = l.ariaLabel), l.ariaDescribedBy && (k["aria-describedby"] = l.ariaDescribedBy), l.role && (k.role = l.role), k;
    });
    return (k, C) => (openBlock(), createElementBlock("div", mergeProps({ class: e.value }, o.value), [
      (openBlock(true), createElementBlock(Fragment, null, renderList(m.value, (z, d) => (openBlock(), createBlock(resolveDynamicComponent(z), { key: d }))), 128))
    ], 16));
  }
});
var za = {
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
  setup(v, { emit: l }) {
    const a = v, e = l, m = computed(() => a.to !== void 0), o = computed(() => a.external || a.href && (a.href.startsWith("http") || a.href.startsWith("//") || a.target === "_blank")), k = computed(() => {
      const L = {};
      return m.value || (L.href = a.href, o.value ? (L.target = a.target || "_blank", L.rel = a.rel || "noopener noreferrer") : (a.target && (L.target = a.target), a.rel && (L.rel = a.rel))), a.ariaLabel && (L["aria-label"] = a.ariaLabel), a.ariaDescribedBy && (L["aria-describedby"] = a.ariaDescribedBy), a.role && (L.role = a.role), a.disabled ? (L["aria-disabled"] = "true", L.tabindex = -1) : L.tabindex = a.tabIndex, L;
    }), C = computed(() => [
      "su-link",
      `su-link--${a.variant}`,
      `su-link--${a.size}`,
      `su-link--underline-${a.underline}`,
      {
        "su-link--disabled": a.disabled,
        "su-link--external": o.value,
        "su-link--icon-only": a.icon && a.iconDisplay === "only",
        "su-link--icon-right": a.icon && a.iconDisplay === "right"
      }
    ]), z = computed(() => !(a.icon && a.iconDisplay === "only")), d = (L) => {
      if (a.disabled) {
        L.preventDefault();
        return;
      }
      e("click", L);
    }, D = (L) => {
      if ((L.key === "Enter" || L.key === " ") && a.disabled) {
        L.preventDefault();
        return;
      }
      e("keydown", L);
    }, w = (L) => {
      e("focus", L);
    }, _ = (L) => {
      e("blur", L);
    };
    return a.icon && a.iconDisplay === "only" && !a.ariaLabel && console.warn('Link with icon and iconDisplay="only" should have an ariaLabel for accessibility'), (L, M) => (openBlock(), createBlock(resolveDynamicComponent(m.value ? "router-link" : "a"), mergeProps({ class: C.value }, m.value ? { to: L.to, ...k.value } : k.value, {
      onClick: d,
      onKeydown: D,
      onFocus: w,
      onBlur: _
    }), {
      default: withCtx(() => [
        L.icon ? (openBlock(), createBlock(resolveDynamicComponent(L.icon), {
          key: 0,
          class: "su-link__icon",
          "aria-hidden": "true"
        })) : createCommentVNode("", true),
        z.value ? (openBlock(), createElementBlock("span", za, [
          renderSlot(L.$slots, "default")
        ])) : createCommentVNode("", true),
        o.value && !L.icon && z.value ? (openBlock(), createBlock(unref(ea), {
          key: 2,
          class: "su-link__external-icon",
          "aria-hidden": "true"
        })) : createCommentVNode("", true)
      ]),
      _: 3
    }, 16, ["class"]));
  }
});
var Ia = defineComponent({
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
  setup(v) {
    const l = v, a = useSlots(), e = computed(() => [
      "su-links-group",
      `su-links-group--gap-${l.gap}`,
      `su-links-group--${l.direction}`,
      {
        "su-links-group--connected": l.gap === "none"
      }
    ]), m = computed(() => {
      var z;
      if (!(a != null && a.default)) return [];
      const k = ((z = a == null ? void 0 : a.default) == null ? void 0 : z.call(a)) ?? [], C = [];
      for (const d of k)
        if (d.type === Re) {
          const D = { ...d.props };
          if (l.size && (D.size = l.size), l.variant && (D.variant = l.variant), l.underline && (D.underline = l.underline), l.gap === "none") {
            const w = D.class || "";
            D.class = `${w} su-links-group__link`.trim();
          }
          C.push(h(d.type, D, d == null ? void 0 : d.children));
        } else {
          if (d.type === Comment || d.type === Text || d.type === Fragment)
            continue;
          console.warn("LinksGroup expects only Link components as children. Found:", d.type);
        }
      return C;
    }), o = computed(() => {
      const k = {};
      return l.ariaLabel && (k["aria-label"] = l.ariaLabel), l.ariaDescribedBy && (k["aria-describedby"] = l.ariaDescribedBy), l.role && (k.role = l.role), k;
    });
    return (k, C) => (openBlock(), createElementBlock("div", mergeProps({ class: e.value }, o.value), [
      (openBlock(true), createElementBlock(Fragment, null, renderList(m.value, (z, d) => (openBlock(), createBlock(resolveDynamicComponent(z), { key: d }))), 128))
    ], 16));
  }
});
var Da = 0;
function _a(v = "su") {
  return `${v}-${++Da}-${Date.now().toString(36)}`;
}
function qa(v) {
  return [
    "button:not([disabled])",
    "input:not([disabled])",
    "select:not([disabled])",
    "textarea:not([disabled])",
    "a[href]",
    '[tabindex]:not([tabindex="-1"])'
  ].some((a) => v.matches(a));
}
function Fe(v) {
  const l = v.querySelectorAll(
    'button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), a[href], [tabindex]:not([tabindex="-1"])'
  ), a = l[0], e = l[l.length - 1], m = (o) => {
    o.key === "Tab" && (o.shiftKey ? document.activeElement === a && (o.preventDefault(), e.focus()) : document.activeElement === e && (o.preventDefault(), a.focus()));
  };
  return v.addEventListener("keydown", m), a == null || a.focus(), () => {
    v.removeEventListener("keydown", m);
  };
}
function oe(v, l = "polite") {
  const a = document.createElement("div");
  a.setAttribute("aria-live", l), a.setAttribute("aria-atomic", "true"), a.className = "sr-only", a.textContent = v, document.body.appendChild(a), setTimeout(() => {
    document.body.removeChild(a);
  }, 1e3);
}
function Ma() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
function Va() {
  return window.matchMedia("(prefers-contrast: high)").matches;
}
function Sa(v, l) {
  return 4.5;
}
function Ra(v, l = "AA") {
  return v >= (l === "AAA" ? 7 : 4.5);
}
var Tt = Object.freeze(Object.defineProperty({
  __proto__: null,
  announceToScreenReader: oe,
  generateId: _a,
  getContrastRatio: Sa,
  isContrastValid: Ra,
  isFocusable: qa,
  prefersHighContrast: Va,
  prefersReducedMotion: Ma,
  trapFocus: Fe
}, Symbol.toStringTag, { value: "Module" }));
var Fa = ["dir"];
var Aa = ["id", "tabindex", "aria-describedby"];
var Pa = { class: "su-select-content" };
var Ea = {
  key: 0,
  class: "su-select-tags"
};
var Ta = { class: "su-select-tag-label" };
var Ha = ["aria-label", "onClick"];
var Ka = {
  key: 0,
  class: "su-select-tag su-select-tag--more"
};
var Oa = {
  key: 1,
  class: "su-select-display"
};
var ja = { class: "su-select-display-text" };
var Ga = { class: "su-select-actions" };
var Ua = {
  key: 0,
  class: "su-select-spinner"
};
var Za = ["id", "aria-multiselectable"];
var Na = {
  key: 0,
  class: "su-select-search"
};
var Wa = { class: "su-select-search-container" };
var Ya = ["placeholder", "value"];
var Xa = ["aria-label"];
var Qa = ["aria-selected", "aria-disabled", "onClick", "onMouseenter"];
var Ja = {
  key: 0,
  class: "su-select-option-checkbox"
};
var es = { class: "su-select-option-content" };
var as = { class: "su-select-option-label" };
var ss = {
  key: 0,
  class: "su-select-option-description"
};
var ts = {
  key: 1,
  class: "su-select-no-options"
};
var Pe = defineComponent({
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
  setup(v, { expose: l, emit: a }) {
    const e = v, m = useModel(v, "modelValue"), o = a, k = useAttrs(), C = "selectbox-" + useId(), z = ref(), d = ref(), D = ref(), w = ref(), _ = ref(false), L = ref(""), M = ref(-1), p = ref(null), A = computed(() => k.id || C), g = computed(() => `${A.value}-listbox`), F = computed(() => e.groups && e.groups.length > 0 ? e.groups.flatMap(
      (f) => f.options.map((t) => ({ ...t, group: f.label }))
    ) : e.options || []), b = computed(() => {
      if (!e.searchable || !L.value)
        return F.value;
      const f = L.value.toLowerCase();
      return F.value.filter(
        (t) => t.label.toLowerCase().includes(f) || t.description && t.description.toLowerCase().includes(f)
      );
    }), u = computed(() => {
      const f = {};
      return b.value.forEach((t) => {
        const $ = t.group || "";
        f[$] || (f[$] = []), f[$].push(t);
      }), f;
    }), B = computed({
      get() {
        return e.multiple ? Array.isArray(m.value) ? m.value : m.value !== void 0 && m.value !== null ? [m.value] : [] : m.value;
      },
      set(f) {
        m.value = f, o("change", f);
      }
    }), y = computed(() => {
      if (e.multiple) {
        const f = B.value;
        return f ? F.value.filter((t) => f.includes(t.value)) : [];
      } else {
        const f = B.value;
        return f != null ? F.value.filter((t) => t.value === f) : [];
      }
    }), N = computed(() => {
      var f;
      return y.value.length === 0 ? e.placeholder : e.multiple ? y.value.length === 1 ? y.value[0].label : `${y.value.length} éléments sélectionnés` : ((f = y.value[0]) == null ? void 0 : f.label) || e.placeholder;
    }), le = computed(() => [
      "su-select-container",
      `su-select-container--${e.size}`,
      `su-select-container--${e.state}`,
      {
        "su-select-container--disabled": e.disabled,
        "su-select-container--readonly": e.readonly,
        "su-select-container--open": _.value,
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
        "su-select-trigger--open": _.value,
        "su-select-trigger--has-value": y.value.length > 0,
        "su-select-trigger--placeholder": y.value.length === 0
      }
    ]), Q = computed(() => {
      const f = {
        "aria-haspopup": "listbox",
        "aria-expanded": _.value,
        "aria-controls": _.value ? g.value : void 0,
        role: "combobox"
      };
      return e.ariaLabel && (f["aria-label"] = e.ariaLabel), e.ariaInvalid !== void 0 && (f["aria-invalid"] = e.ariaInvalid), e.ariaRequired !== void 0 && (f["aria-required"] = e.ariaRequired), e.required && (f["aria-required"] = "true"), e.state === "error" && (f["aria-invalid"] = "true"), e.multiple && (f["aria-multiselectable"] = "true"), f;
    }), ae = () => {
      e.disabled || e.readonly || (_.value ? x() : se());
    }, se = async () => {
      e.disabled || e.readonly || (_.value = true, L.value = "", M.value = -1, o("open"), await nextTick(), e.searchable && w.value && w.value.focus(), D.value && (p.value = Fe(D.value)));
    }, x = () => {
      _.value = false, M.value = -1, p.value && (p.value(), p.value = null), o("close"), d.value && d.value.focus();
    }, h2 = (f) => {
      if (f.disabled) return;
      let t;
      if (e.multiple) {
        const S = B.value || [];
        if (S.includes(f.value))
          t = S.filter((q) => q !== f.value);
        else {
          if (e.maxSelectedItems && S.length >= e.maxSelectedItems) {
            oe(`Maximum ${e.maxSelectedItems} éléments sélectionnables`);
            return;
          }
          t = [...S, f.value];
        }
      } else
        t = f.value;
      B.value = t;
      const $ = e.multiple && B.value.includes(f.value) ? "désélectionné" : "sélectionné";
      oe(`${f.label} ${$}`), !e.multiple && e.closeOnSelect && x();
    }, G = (f) => {
      f.stopPropagation();
      const t = e.multiple ? [] : void 0;
      B.value = t, oe("Sélection effacée");
    }, re = (f, t) => {
      if (t.stopPropagation(), e.multiple) {
        const S = (B.value || []).filter((T) => T !== f.value);
        B.value = S, oe(`${f.label} retiré de la sélection`);
      }
    }, pe = (f) => {
      const t = f.target;
      L.value = t.value, M.value = -1, o("search", L.value);
    }, fe = (f) => {
      switch (f.key) {
        case "Enter":
        case " ":
          if (f.preventDefault(), !_.value)
            se();
          else if (M.value >= 0) {
            const t = b.value[M.value];
            t && h2(t);
          }
          break;
        case "Escape":
          f.preventDefault(), x();
          break;
        case "ArrowDown":
          f.preventDefault(), _.value ? M.value = Math.min(M.value + 1, b.value.length - 1) : se();
          break;
        case "ArrowUp":
          f.preventDefault(), _.value && (M.value = Math.max(M.value - 1, -1));
          break;
        case "Home":
          _.value && (f.preventDefault(), M.value = 0);
          break;
        case "End":
          _.value && (f.preventDefault(), M.value = b.value.length - 1);
          break;
        case "Tab":
          _.value && x();
          break;
      }
    }, ge = (f) => {
      o("focus", f);
    }, c = (f) => {
      setTimeout(() => {
        _.value && z.value && !z.value.contains(document.activeElement) && (x(), o("blur", f));
      }, 0);
    }, P = (f) => {
      _.value && z.value && !z.value.contains(f.target) && x();
    };
    return l({
      focus: () => {
        var f;
        (f = d.value) == null || f.focus();
      },
      open: () => {
        se();
      },
      close: () => {
        x();
      },
      selectRef: z,
      inputRef: d
    }), onMounted(() => {
      document.addEventListener("click", P, { passive: true });
    }), onUnmounted(() => {
      document.removeEventListener("click", P, { passive: true }), p.value && p.value();
    }), watch(m, () => {
      M.value = -1;
    }), (f, t) => (openBlock(), createBlock(ye, {
      fieldId: A.value,
      label: f.label,
      message: f.message,
      state: f.state,
      required: f.required,
      disabled: f.disabled
    }, {
      default: withCtx(({ fieldId: $, messageId: S }) => {
        var T;
        return [
          createBaseVNode("div", {
            class: "su-select-wrapper",
            dir: f.dir
          }, [
            createBaseVNode("div", {
              ref_key: "selectRef",
              ref: z,
              class: normalizeClass(le.value)
            }, [
              createBaseVNode("div", mergeProps({
                ref_key: "inputRef",
                ref: d,
                id: $,
                class: ie.value,
                tabindex: f.disabled ? -1 : 0
              }, Q.value, {
                "aria-describedby": S,
                onClick: ae,
                onKeydown: fe,
                onFocus: ge,
                onBlur: c
              }), [
                createBaseVNode("div", Pa, [
                  f.multiple && y.value.length > 0 ? (openBlock(), createElementBlock("div", Ea, [
                    (openBlock(true), createElementBlock(Fragment, null, renderList(y.value.slice(0, 3), (q) => (openBlock(), createElementBlock("span", {
                      key: q.value,
                      class: "su-select-tag"
                    }, [
                      q.icon ? (openBlock(), createBlock(resolveDynamicComponent(q.icon), {
                        key: 0,
                        class: "su-select-tag-icon",
                        "aria-hidden": "true"
                      })) : createCommentVNode("", true),
                      createBaseVNode("span", Ta, toDisplayString(q.label), 1),
                      createBaseVNode("button", {
                        type: "button",
                        class: "su-select-tag-remove",
                        "aria-label": `Retirer ${q.label}`,
                        onClick: (J) => re(q, J)
                      }, [
                        createVNode(unref(ze), { class: "su-select-tag-remove-icon" })
                      ], 8, Ha)
                    ]))), 128)),
                    y.value.length > 3 ? (openBlock(), createElementBlock("span", Ka, " +" + toDisplayString(y.value.length - 3), 1)) : createCommentVNode("", true)
                  ])) : (openBlock(), createElementBlock("div", Oa, [
                    (T = y.value[0]) != null && T.icon ? (openBlock(), createBlock(resolveDynamicComponent(y.value[0].icon), {
                      key: 0,
                      class: "su-select-display-icon",
                      "aria-hidden": "true"
                    })) : createCommentVNode("", true),
                    createBaseVNode("span", ja, toDisplayString(N.value), 1)
                  ]))
                ]),
                createBaseVNode("div", Ga, [
                  f.loading ? (openBlock(), createElementBlock("div", Ua, [...t[0] || (t[0] = [
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
                  ])])) : f.clearable && y.value.length > 0 && !f.disabled && !f.readonly ? (openBlock(), createElementBlock("button", {
                    key: 1,
                    type: "button",
                    class: "su-select-clear",
                    "aria-label": "Effacer la sélection",
                    onClick: G
                  }, [
                    createVNode(unref(ze), { class: "su-select-clear-icon" })
                  ])) : createCommentVNode("", true),
                  createVNode(unref(sa), {
                    class: normalizeClass(["su-select-chevron", { "su-select-chevron--open": _.value }]),
                    "aria-hidden": "true"
                  }, null, 8, ["class"])
                ])
              ], 16, Aa),
              createVNode(Transition, { name: "su-select-dropdown" }, {
                default: withCtx(() => [
                  _.value ? (openBlock(), createElementBlock("div", {
                    key: 0,
                    ref_key: "dropdownRef",
                    ref: D,
                    id: g.value,
                    class: "su-select-dropdown",
                    role: "listbox",
                    "aria-multiselectable": f.multiple
                  }, [
                    f.searchable ? (openBlock(), createElementBlock("div", Na, [
                      createBaseVNode("div", Wa, [
                        createVNode(unref(na), {
                          class: "su-select-search-icon",
                          "aria-hidden": "true"
                        }),
                        createBaseVNode("input", {
                          ref_key: "searchInputRef",
                          ref: w,
                          type: "text",
                          class: "su-select-search-input",
                          placeholder: f.searchPlaceholder,
                          value: L.value,
                          onInput: pe,
                          onKeydown: fe
                        }, null, 40, Ya)
                      ])
                    ])) : createCommentVNode("", true),
                    createBaseVNode("div", {
                      class: "su-select-options",
                      style: normalizeStyle({ maxHeight: f.maxHeight })
                    }, [
                      b.value.length > 0 ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList(u.value, (q, J) => (openBlock(), createElementBlock(Fragment, { key: J }, [
                        J && e.groups && e.groups.length > 0 ? (openBlock(), createElementBlock("div", {
                          key: 0,
                          class: "su-select-group-header",
                          role: "group",
                          "aria-label": J
                        }, toDisplayString(J), 9, Xa)) : createCommentVNode("", true),
                        (openBlock(true), createElementBlock(Fragment, null, renderList(q, (j) => (openBlock(), createElementBlock("div", {
                          key: j.value,
                          class: normalizeClass(["su-select-option", {
                            "su-select-option--selected": f.multiple ? B.value.includes(j.value) : B.value === j.value,
                            "su-select-option--disabled": j.disabled,
                            "su-select-option--focused": b.value.indexOf(j) === M.value
                          }]),
                          role: "option",
                          "aria-selected": f.multiple ? B.value.includes(j.value) : B.value === j.value,
                          "aria-disabled": j.disabled,
                          onClick: (Ge) => h2(j),
                          onMouseenter: (Ge) => M.value = b.value.indexOf(j)
                        }, [
                          f.multiple ? (openBlock(), createElementBlock("div", Ja, [
                            createBaseVNode("div", {
                              class: normalizeClass(["su-select-checkbox", {
                                "su-select-checkbox--checked": B.value.includes(j.value)
                              }])
                            }, [
                              B.value.includes(j.value) ? (openBlock(), createBlock(unref(Ce), {
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
                          createBaseVNode("div", es, [
                            createBaseVNode("div", as, toDisplayString(j.label), 1),
                            j.description ? (openBlock(), createElementBlock("div", ss, toDisplayString(j.description), 1)) : createCommentVNode("", true)
                          ]),
                          !f.multiple && B.value === j.value ? (openBlock(), createBlock(unref(Ce), {
                            key: 2,
                            class: "su-select-option-check",
                            "aria-hidden": "true"
                          })) : createCommentVNode("", true)
                        ], 42, Qa))), 128))
                      ], 64))), 128)) : (openBlock(), createElementBlock("div", ts, toDisplayString(L.value ? f.noResultsText : f.noOptionsText), 1))
                    ], 4)
                  ], 8, Za)) : createCommentVNode("", true)
                ]),
                _: 1
              })
            ], 2)
          ], 8, Fa)
        ];
      }),
      _: 1
    }, 8, ["fieldId", "label", "message", "state", "required", "disabled"]));
  }
});
var ls = ["aria-describedby"];
var is = {
  key: 0,
  class: "su-radio-group-before"
};
var rs = ["for"];
var os = ["id", "name", "value", "checked", "disabled", "required", "onChange"];
var ns = { class: "su-radio-content" };
var us = { class: "su-radio-text" };
var ds = { class: "su-radio-label" };
var cs = {
  key: 0,
  class: "su-radio-description"
};
var fs = {
  key: 0,
  class: "su-radio-group-after"
};
var Ee = defineComponent({
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
  setup(v, { emit: l }) {
    const a = useModel(v, "modelValue"), e = v, m = l, o = useAttrs(), k = "radio-group-" + useId(), C = computed(() => o.id || k), z = computed(() => e.name || k), d = computed(() => [
      "su-radio-group",
      `su-radio-group--${e.size}`,
      `su-radio-group--${e.state}`,
      `su-radio-group--${e.displayType}`,
      `su-radio-group--${e.direction}`,
      {
        "su-radio-group--disabled": e.disabled,
        "su-radio-group--scrollable": e.maxHeight
      }
    ]), D = (p) => [
      "su-radio-option",
      `su-radio-option--${e.size}`,
      `su-radio-option--${e.state}`,
      `su-radio-option--${e.displayType}`,
      {
        "su-radio-option--selected": a.value === p.value,
        "su-radio-option--disabled": p.disabled || e.disabled
      }
    ], w = computed(() => {
      const p = {
        role: "radiogroup"
      };
      if (e.ariaLabel && (p["aria-label"] = e.ariaLabel), e.ariaDescribedBy) {
        const A = [e.ariaDescribedBy].filter(Boolean).join(" ");
        p["aria-describedby"] = A;
      }
      return e.required && (p["aria-required"] = "true"), e.state === "error" && (p["aria-invalid"] = "true"), p;
    }), _ = (p) => {
      e.disabled || (a.value = p, m("change", p));
    }, L = (p) => {
      m("focus", p);
    }, M = (p) => {
      m("blur", p);
    };
    return (p, A) => (openBlock(), createBlock(ye, {
      fieldId: C.value,
      label: p.label,
      message: p.message,
      state: p.state,
      required: p.required,
      disabled: p.disabled
    }, {
      default: withCtx(({ fieldId: g, messageId: F }) => [
        createBaseVNode("fieldset", mergeProps({ class: d.value }, w.value, { "aria-describedby": F }), [
          createBaseVNode("div", {
            class: "su-radio-group-options",
            style: normalizeStyle({ maxHeight: p.maxHeight || void 0, overflowY: p.maxHeight ? "auto" : void 0 })
          }, [
            p.$slots.before ? (openBlock(), createElementBlock("div", is, [
              renderSlot(p.$slots, "before")
            ])) : createCommentVNode("", true),
            (openBlock(true), createElementBlock(Fragment, null, renderList(p.options, (b) => (openBlock(), createElementBlock("label", {
              key: b.value,
              class: normalizeClass(D(b)),
              for: `${g}-${b.value}`
            }, [
              createBaseVNode("input", {
                id: `${g}-${b.value}`,
                type: "radio",
                name: z.value,
                value: b.value,
                checked: a.value === b.value,
                disabled: b.disabled || p.disabled,
                required: p.required,
                class: "su-radio-input",
                onChange: (u) => _(b.value),
                onFocus: L,
                onBlur: M
              }, null, 40, os),
              A[0] || (A[0] = createBaseVNode("div", { class: "su-radio-indicator" }, [
                createBaseVNode("div", { class: "su-radio-dot" })
              ], -1)),
              createBaseVNode("div", ns, [
                b.icon ? (openBlock(), createBlock(resolveDynamicComponent(b.icon), {
                  key: 0,
                  class: "su-radio-icon",
                  "aria-hidden": "true"
                })) : createCommentVNode("", true),
                createBaseVNode("div", us, [
                  createBaseVNode("div", ds, toDisplayString(b.label), 1),
                  b.description ? (openBlock(), createElementBlock("div", cs, toDisplayString(b.description), 1)) : createCommentVNode("", true)
                ])
              ])
            ], 10, rs))), 128))
          ], 4),
          p.$slots.after ? (openBlock(), createElementBlock("div", fs, [
            renderSlot(p.$slots, "after")
          ])) : createCommentVNode("", true)
        ], 16, ls)
      ]),
      _: 3
    }, 8, ["fieldId", "label", "message", "state", "required", "disabled"]));
  }
});
var ps = ["aria-describedby"];
var vs = {
  key: 0,
  class: "su-checkbox-group-before"
};
var hs = ["for"];
var bs = ["id", "value", "checked", "disabled", "required", "onChange"];
var ms = { class: "su-checkbox-content" };
var ys = { class: "su-checkbox-text" };
var gs = { class: "su-checkbox-label" };
var ks = {
  key: 0,
  class: "su-checkbox-group-after"
};
var Te = defineComponent({
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
  setup(v, { emit: l }) {
    const a = v, e = useModel(v, "modelValue"), m = l, o = useAttrs(), k = "checkbox-group-" + useId(), C = computed(() => o.id || k), z = computed({
      get() {
        return Array.isArray(e.value) ? e.value : [];
      },
      set(g) {
        e.value = g, m("change", g);
      }
    }), d = computed(() => [
      "su-checkbox-group",
      `su-checkbox-group--${a.size}`,
      `su-checkbox-group--${a.state}`,
      `su-checkbox-group--${a.displayType}`,
      `su-checkbox-group--${a.direction}`,
      {
        "su-checkbox-group--disabled": a.disabled,
        "su-checkbox-group--scrollable": a.maxHeight
      }
    ]), D = (g) => [
      "su-checkbox-option",
      `su-checkbox-option--${a.size}`,
      `su-checkbox-option--${a.state}`,
      `su-checkbox-option--${a.displayType}`,
      {
        "su-checkbox-option--selected": z.value.includes(g.value),
        "su-checkbox-option--disabled": g.disabled || a.disabled
      }
    ], w = computed(() => {
      const g = {
        role: "group"
      };
      if (a.ariaLabel && (g["aria-label"] = a.ariaLabel), a.ariaDescribedBy) {
        const F = [a.ariaDescribedBy].filter(Boolean).join(" ");
        g["aria-describedby"] = F;
      }
      return a.required && (g["aria-required"] = "true"), a.state === "error" && (g["aria-invalid"] = "true"), g;
    }), _ = (g, F) => {
      if (a.disabled) return;
      let b;
      if (F) {
        if (a.maxSelections && z.value.length >= a.maxSelections) {
          oe(`Maximum ${a.maxSelections} sélections autorisées`);
          return;
        }
        b = [...z.value, g];
      } else
        b = z.value.filter((y) => y !== g);
      z.value = b;
      const u = a.options.find((y) => y.value === g), B = F ? "sélectionné" : "désélectionné";
      oe(`${u == null ? void 0 : u.label} ${B}`);
    }, L = (g) => {
      m("focus", g);
    }, M = (g) => {
      m("blur", g);
    }, p = (g) => z.value.includes(g), A = (g) => g.disabled || a.disabled;
    return (g, F) => (openBlock(), createBlock(ye, {
      fieldId: C.value,
      label: g.label,
      message: g.message,
      state: g.state,
      required: g.required,
      disabled: g.disabled
    }, {
      default: withCtx(({ fieldId: b, messageId: u }) => [
        createBaseVNode("fieldset", mergeProps({ class: d.value }, w.value, { "aria-describedby": u }), [
          createBaseVNode("div", {
            class: "su-checkbox-group-options",
            style: normalizeStyle({ maxHeight: g.maxHeight || void 0, overflowY: g.maxHeight ? "auto" : void 0 })
          }, [
            g.$slots.before ? (openBlock(), createElementBlock("div", vs, [
              renderSlot(g.$slots, "before")
            ])) : createCommentVNode("", true),
            (openBlock(true), createElementBlock(Fragment, null, renderList(g.options, (B) => (openBlock(), createElementBlock("label", {
              key: B.value,
              class: normalizeClass(D(B)),
              for: `${b}-${B.value}`
            }, [
              createBaseVNode("input", {
                id: `${b}-${B.value}`,
                type: "checkbox",
                value: B.value,
                checked: p(B.value),
                disabled: A(B),
                required: g.required && z.value.length === 0,
                class: "su-checkbox-input",
                onChange: (y) => _(B.value, y.target.checked),
                onFocus: L,
                onBlur: M
              }, null, 40, bs),
              createBaseVNode("div", {
                class: normalizeClass(["su-checkbox-indicator", {
                  "su-checkbox-indicator--checked": p(B.value),
                  "su-checkbox-indicator--indeterminate": false
                }])
              }, [
                p(B.value) ? (openBlock(), createBlock(unref(Ce), {
                  key: 0,
                  class: "su-checkbox-check",
                  "aria-hidden": "true"
                })) : createCommentVNode("", true)
              ], 2),
              createBaseVNode("div", ms, [
                B.icon ? (openBlock(), createBlock(resolveDynamicComponent(B.icon), {
                  key: 0,
                  class: "su-checkbox-icon",
                  "aria-hidden": "true"
                })) : createCommentVNode("", true),
                createBaseVNode("div", ys, [
                  createBaseVNode("div", gs, toDisplayString(B.label), 1)
                ])
              ])
            ], 10, hs))), 128))
          ], 4),
          g.$slots.after ? (openBlock(), createElementBlock("div", ks, [
            renderSlot(g.$slots, "after")
          ])) : createCommentVNode("", true)
        ], 16, ps)
      ]),
      _: 3
    }, 8, ["fieldId", "label", "message", "state", "required", "disabled"]));
  }
});
var ws = ["id", "tabindex", "aria-describedby"];
var $s = { class: "su-switch-track" };
var Bs = { class: "su-switch-thumb" };
var xs = { class: "su-switch-indicator" };
var Ls = {
  key: 0,
  class: "su-switch-icon su-switch-icon--check",
  viewBox: "0 0 16 16",
  "aria-hidden": "true"
};
var Cs = {
  key: 1,
  class: "su-switch-icon su-switch-icon--cross",
  viewBox: "0 0 16 16",
  "aria-hidden": "true"
};
var He = defineComponent({
  __name: "Switch",
  props: mergeModels({
    leftIcon: {},
    rightIcon: {},
    labelPosition: {},
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
  setup(v, { emit: l }) {
    const a = v, e = useModel(v, "modelValue"), m = l, o = useAttrs(), k = "switch-" + useId(), C = computed(() => o.id || k), z = computed(() => [
      "su-switch-container",
      `su-switch-container--${a.size}`,
      `su-switch-container--${a.state}`,
      {
        "su-switch-container--disabled": a.disabled,
        "su-switch-container--readonly": a.readonly,
        "su-switch-container--has-labels": a.leftLabel || a.rightLabel,
        "su-switch-container--centered": a.leftLabel && a.rightLabel
      }
    ]), d = computed(() => [
      "su-switch",
      `su-switch--${a.size}`,
      `su-switch--${a.state}`,
      {
        "su-switch--checked": e.value,
        "su-switch--disabled": a.disabled,
        "su-switch--readonly": a.readonly
      }
    ]), D = computed(() => {
      const p = {
        role: "switch",
        "aria-checked": e.value
      };
      return a.ariaLabel && (p["aria-label"] = a.ariaLabel), a.ariaInvalid !== void 0 && (p["aria-invalid"] = a.ariaInvalid), a.ariaRequired !== void 0 && (p["aria-required"] = a.ariaRequired), a.required && (p["aria-required"] = "true"), a.state === "error" && (p["aria-invalid"] = "true"), p;
    }), w = () => {
      if (a.disabled || a.readonly) return;
      const p = !e.value;
      e.value = p, m("change", p);
    }, _ = (p) => {
      (p.key === " " || p.key === "Enter") && (p.preventDefault(), w()), m("keydown", p);
    }, L = (p) => {
      m("focus", p);
    }, M = (p) => {
      m("blur", p);
    };
    return (p, A) => (openBlock(), createBlock(ye, {
      fieldId: C.value,
      label: p.label,
      message: p.message,
      state: p.state,
      required: p.required,
      disabled: p.disabled
    }, {
      default: withCtx(({ fieldId: g, messageId: F }) => [
        createBaseVNode("div", {
          class: normalizeClass(z.value)
        }, [
          p.leftLabel ? (openBlock(), createElementBlock("span", {
            key: 0,
            class: normalizeClass(["su-switch-side-label su-switch-side-label--left", {
              "su-switch-side-label--active": !e.value,
              "su-switch-side-label--disabled": p.disabled
            }])
          }, toDisplayString(p.leftLabel), 3)) : createCommentVNode("", true),
          createBaseVNode("div", mergeProps({
            id: g,
            class: d.value,
            tabindex: p.disabled ? -1 : 0,
            "aria-describedby": F
          }, D.value, {
            onClick: w,
            onKeydown: _,
            onFocus: L,
            onBlur: M
          }), [
            createBaseVNode("div", $s, [
              createBaseVNode("div", Bs, [
                createBaseVNode("div", xs, [
                  e.value ? (openBlock(), createElementBlock("svg", Ls, [...A[0] || (A[0] = [
                    createBaseVNode("path", { d: "M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" }, null, -1)
                  ])])) : (openBlock(), createElementBlock("svg", Cs, [...A[1] || (A[1] = [
                    createBaseVNode("path", { d: "M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" }, null, -1)
                  ])]))
                ])
              ])
            ])
          ], 16, ws),
          p.rightLabel ? (openBlock(), createElementBlock("span", {
            key: 1,
            class: normalizeClass(["su-switch-side-label su-switch-side-label--right", {
              "su-switch-side-label--active": e.value,
              "su-switch-side-label--disabled": p.disabled
            }])
          }, toDisplayString(p.rightLabel), 3)) : createCommentVNode("", true)
        ], 2)
      ]),
      _: 1
    }, 8, ["fieldId", "label", "message", "state", "required", "disabled"]));
  }
});
var zs = ["id", "accept", "multiple", "disabled", "required", "aria-describedby"];
var Is = ["tabindex", "aria-label", "aria-busy"];
var Ds = {
  key: 0,
  class: "su-file-upload-loading",
  "aria-hidden": "true"
};
var _s = { class: "su-file-upload-text" };
var qs = { class: "su-file-upload-primary-text" };
var Ms = { class: "su-file-upload-secondary-text" };
var Vs = { key: 0 };
var Ss = { key: 0 };
var Rs = { key: 1 };
var Fs = ["aria-label"];
var As = { class: "su-file-upload-item-preview" };
var Ps = ["src", "alt"];
var Es = { class: "su-file-upload-item-info" };
var Ts = { class: "su-file-upload-item-name" };
var Hs = { class: "su-file-upload-item-details" };
var Ks = { class: "su-file-upload-item-size" };
var Os = {
  key: 0,
  class: "su-file-upload-item-progress"
};
var js = {
  key: 1,
  class: "su-file-upload-item-error"
};
var Gs = { class: "su-file-upload-item-status" };
var Us = {
  key: 2,
  class: "su-file-upload-spinner",
  "aria-hidden": "true"
};
var Zs = ["aria-label", "onClick"];
var Ns = ["aria-valuenow", "aria-label"];
var Ke = defineComponent({
  __name: "FileUpload",
  props: mergeModels({
    variant: { default: "default" },
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
    showProgress: { type: Boolean, default: false },
    loading: { type: Boolean, default: false },
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
  setup(v, { expose: l, emit: a }) {
    const e = v, m = useModel(v, "modelValue"), o = a, k = useAttrs(), C = ref(), z = ref(), d = ref(false), D = ref(0), w = "file-upload-" + useId(), _ = computed(() => k.id || w), L = computed(() => Array.isArray(m.value) ? m.value : []), M = computed(() => [
      "su-file-upload-container",
      `su-file-upload-container--${e.variant}`,
      `su-file-upload-container--${e.size}`,
      `su-file-upload-container--${e.state}`,
      {
        "su-file-upload-container--disabled": e.disabled,
        "su-file-upload-container--readonly": e.readonly,
        "su-file-upload-container--dragging": d.value,
        "su-file-upload-container--has-files": L.value.length > 0
      }
    ]), p = computed(() => [
      "su-file-upload-dropzone",
      `su-file-upload-dropzone--${e.variant}`,
      `su-file-upload-dropzone--${e.size}`,
      `su-file-upload-dropzone--${e.state}`,
      {
        "su-file-upload-dropzone--disabled": e.disabled,
        "su-file-upload-dropzone--readonly": e.readonly,
        "su-file-upload-dropzone--dragging": d.value
      }
    ]), A = computed(() => {
      const c = {};
      if (e.ariaLabel && (c["aria-label"] = e.ariaLabel), e.ariaDescribedBy) {
        const P = [e.ariaDescribedBy].filter(Boolean).join(" ");
        c["aria-describedby"] = P;
      }
      return e.ariaInvalid !== void 0 && (c["aria-invalid"] = e.ariaInvalid), e.ariaRequired !== void 0 && (c["aria-required"] = e.ariaRequired), e.required && (c["aria-required"] = "true"), e.state === "error" && (c["aria-invalid"] = "true"), c;
    }), g = (c) => {
      if (c === 0) return "0 B";
      const P = 1024, U = ["B", "KB", "MB", "GB"], O = Math.floor(Math.log(c) / Math.log(P));
      return parseFloat((c / Math.pow(P, O)).toFixed(1)) + " " + U[O];
    }, F = (c) => c.type.startsWith("image/") ? ua : la, b = (c) => `${c}-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`, u = (c) => c.type.startsWith("image/"), B = (c) => new Promise((P) => {
      if (!u(c)) {
        P("");
        return;
      }
      const U = new FileReader();
      U.onload = (O) => {
        var V;
        return P(((V = O.target) == null ? void 0 : V.result) || "");
      }, U.readAsDataURL(c);
    }), y = (c) => e.maxSize && c.size > e.maxSize ? `Le fichier "${c.name}" est trop volumineux (${g(c.size)}). Taille maximale : ${g(e.maxSize)}` : e.accept && !e.accept.split(",").map((O) => O.trim()).some((O) => {
      if (O.startsWith("."))
        return c.name.toLowerCase().endsWith(O.toLowerCase());
      if (O.includes("*")) {
        const V = O.split("/")[0];
        return c.type.startsWith(V);
      }
      return c.type === O;
    }) ? `Le type de fichier "${c.type}" n'est pas accepté pour "${c.name}"` : null, N = async (c) => {
      if (e.disabled || e.readonly) return;
      const P = Array.from(c), U = L.value;
      if (e.maxFiles && U.length + P.length > e.maxFiles) {
        const V = `Nombre maximum de fichiers dépassé (${e.maxFiles})`;
        o("error", V), oe(V, "assertive");
        return;
      }
      const O = [];
      for (const V of P) {
        const f = y(V);
        if (f) {
          o("error", f, V), oe(f, "assertive");
          continue;
        }
        const t = {
          id: b("file"),
          file: V,
          name: V.name,
          size: V.size,
          type: V.type,
          status: "pending"
        };
        if (e.allowPreview && u(V))
          try {
            t.preview = await B(V);
          } catch ($) {
            console.warn("Erreur lors de la création de l'aperçu:", $);
          }
        O.push(t);
      }
      if (O.length > 0) {
        const V = e.multiple ? [...U, ...O] : O;
        m.value = V, o("change", V);
        const f = O.length === 1 ? `Fichier "${O[0].name}" ajouté` : `${O.length} fichiers ajoutés`;
        oe(f), O.forEach((t) => o("upload", t));
      }
    }, le = (c) => {
      if (e.disabled || e.readonly) return;
      const P = L.value.filter((U) => U.id !== c.id);
      m.value = P, o("change", P), o("remove", c), oe(`Fichier "${c.name}" supprimé`);
    }, ie = (c) => {
      const P = c.target;
      P.files && P.files.length > 0 && N(P.files), P.value = "";
    }, Q = () => {
      var c;
      e.disabled || e.readonly || (c = C.value) == null || c.click();
    }, ae = (c) => {
      (c.key === "Enter" || c.key === " ") && (c.preventDefault(), Q());
    }, se = (c) => {
      o("focus", c);
    }, x = (c) => {
      o("blur", c);
    }, h2 = (c) => {
      c.preventDefault(), c.stopPropagation(), !(e.disabled || e.readonly) && (D.value++, D.value === 1 && (d.value = true));
    }, G = (c) => {
      c.preventDefault(), c.stopPropagation(), !(e.disabled || e.readonly) && (D.value--, D.value === 0 && (d.value = false));
    }, re = (c) => {
      c.preventDefault(), c.stopPropagation(), !(e.disabled || e.readonly) && c.dataTransfer && (c.dataTransfer.dropEffect = "copy");
    }, pe = (c) => {
      var U;
      if (c.preventDefault(), c.stopPropagation(), e.disabled || e.readonly) return;
      d.value = false, D.value = 0;
      const P = (U = c.dataTransfer) == null ? void 0 : U.files;
      P && P.length > 0 && N(P);
    };
    return l({
      focus: () => {
        var c;
        (c = z.value) == null || c.focus();
      },
      clear: () => {
        e.disabled || e.readonly || (m.value = [], o("change", []), oe("Tous les fichiers ont été supprimés"));
      },
      fileInputRef: C,
      dropZoneRef: z
    }), (c, P) => (openBlock(), createBlock(ye, {
      fieldId: _.value,
      label: c.label,
      message: c.message,
      state: c.state,
      required: c.required,
      disabled: c.disabled
    }, {
      default: withCtx(({ fieldId: U, messageId: O }) => [
        createBaseVNode("div", {
          class: normalizeClass(M.value)
        }, [
          createBaseVNode("input", mergeProps({
            ref_key: "fileInputRef",
            ref: C,
            id: U,
            type: "file",
            accept: c.accept,
            multiple: c.multiple,
            disabled: c.disabled,
            required: c.required,
            "aria-describedby": O,
            class: "su-file-upload-input"
          }, A.value, {
            onChange: ie,
            onFocus: se,
            onBlur: x
          }), null, 16, zs),
          createBaseVNode("div", {
            ref_key: "dropZoneRef",
            ref: z,
            class: normalizeClass(p.value),
            tabindex: c.disabled ? -1 : 0,
            role: "button",
            "aria-label": c.placeholder,
            "aria-busy": c.loading,
            onClick: Q,
            onKeydown: ae,
            onDragenter: h2,
            onDragleave: G,
            onDragover: re,
            onDrop: pe
          }, [
            createVNode(unref(ta), {
              class: normalizeClass(["su-file-upload-icon", { "su-file-upload-icon--dragging": d.value }]),
              "aria-hidden": "true"
            }, null, 8, ["class"]),
            c.loading ? (openBlock(), createElementBlock("div", Ds, [...P[0] || (P[0] = [
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
            ])])) : createCommentVNode("", true),
            createBaseVNode("div", _s, [
              createBaseVNode("p", qs, toDisplayString(c.loading ? "Chargement..." : d.value ? c.dragText : c.placeholder), 1),
              createBaseVNode("p", Ms, [
                createTextVNode(toDisplayString(c.loading ? "Veuillez patienter" : c.browseText) + " ", 1),
                c.accept || c.maxSize ? (openBlock(), createElementBlock("span", Vs, [
                  c.accept ? (openBlock(), createElementBlock("span", Ss, " • " + toDisplayString(c.accept), 1)) : createCommentVNode("", true),
                  c.maxSize ? (openBlock(), createElementBlock("span", Rs, " • Max " + toDisplayString(g(c.maxSize)), 1)) : createCommentVNode("", true)
                ])) : createCommentVNode("", true)
              ])
            ])
          ], 42, Is),
          c.showFileList && L.value.length > 0 ? (openBlock(), createElementBlock("div", {
            key: 0,
            class: "su-file-upload-list",
            role: "list",
            "aria-label": `${L.value.length} fichier(s) sélectionné(s)`
          }, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(L.value, (V) => (openBlock(), createElementBlock("div", {
              key: V.id,
              class: normalizeClass(["su-file-upload-item", `su-file-upload-item--${V.status}`]),
              role: "listitem"
            }, [
              createBaseVNode("div", As, [
                V.preview ? (openBlock(), createElementBlock("img", {
                  key: 0,
                  src: V.preview,
                  alt: `Aperçu de ${V.name}`,
                  class: "su-file-upload-preview-image"
                }, null, 8, Ps)) : (openBlock(), createBlock(resolveDynamicComponent(F(V.file)), {
                  key: 1,
                  class: "su-file-upload-item-icon",
                  "aria-hidden": "true"
                }))
              ]),
              createBaseVNode("div", Es, [
                createBaseVNode("div", Ts, toDisplayString(V.name), 1),
                createBaseVNode("div", Hs, [
                  createBaseVNode("span", Ks, toDisplayString(g(V.size)), 1),
                  V.status === "uploading" && V.progress !== void 0 ? (openBlock(), createElementBlock("span", Os, toDisplayString(V.progress) + "% ", 1)) : createCommentVNode("", true),
                  V.error ? (openBlock(), createElementBlock("span", js, toDisplayString(V.error), 1)) : createCommentVNode("", true)
                ])
              ]),
              createBaseVNode("div", Gs, [
                V.status === "success" ? (openBlock(), createBlock(unref(aa), {
                  key: 0,
                  class: "su-file-upload-status-icon su-file-upload-status-icon--success",
                  "aria-hidden": "true"
                })) : V.status === "error" ? (openBlock(), createBlock(unref(ia), {
                  key: 1,
                  class: "su-file-upload-status-icon su-file-upload-status-icon--error",
                  "aria-hidden": "true"
                })) : V.status === "uploading" ? (openBlock(), createElementBlock("div", Us, [...P[1] || (P[1] = [
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
              !c.disabled && !c.readonly ? (openBlock(), createElementBlock("button", {
                key: 0,
                type: "button",
                class: "su-file-upload-remove-button",
                "aria-label": `Supprimer ${V.name}`,
                onClick: (f) => le(V)
              }, [
                createVNode(unref(ze), {
                  class: "su-file-upload-remove-icon",
                  "aria-hidden": "true"
                })
              ], 8, Zs)) : V.status === "uploading" && c.showProgress ? (openBlock(), createElementBlock("div", {
                key: 1,
                class: "su-file-upload-progress-bar",
                role: "progressbar",
                "aria-valuenow": V.progress || 0,
                "aria-valuemin": "0",
                "aria-valuemax": "100",
                "aria-label": `Upload de ${V.name}: ${V.progress || 0}%`
              }, [
                createBaseVNode("div", {
                  class: "su-file-upload-progress-fill",
                  style: normalizeStyle({ width: `${V.progress || 0}%` })
                }, null, 4)
              ], 8, Ns)) : createCommentVNode("", true)
            ], 2))), 128))
          ], 8, Fs)) : createCommentVNode("", true)
        ], 2)
      ]),
      _: 1
    }, 8, ["fieldId", "label", "message", "state", "required", "disabled"]));
  }
});
var Ws = ["id", "value", "placeholder", "disabled", "readonly", "required", "rows", "aria-describedby"];
var Ys = {
  key: 0,
  class: "su-textarea-footer"
};
var Xs = ["id", "aria-live"];
var Qs = { class: "sr-only" };
var Oe = defineComponent({
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
  setup(v, { expose: l, emit: a }) {
    const e = v, m = useModel(v, "modelValue"), o = a, k = useAttrs(), C = ref(), z = "textarea-" + useId(), d = computed(() => k.id || z), D = computed(() => m.value || ""), w = computed(() => D.value.length), _ = computed(() => e.maxLength ? e.maxLength - w.value : null), L = computed(() => e.maxLength ? _.value !== null && _.value <= e.maxLength * 0.1 : false), M = computed(() => e.maxLength ? _.value !== null && _.value < 0 : false), p = computed(() => [
      "su-textarea-container",
      `su-textarea-container--${e.size}`,
      `su-textarea-container--${e.state}`,
      {
        "su-textarea-container--disabled": e.disabled,
        "su-textarea-container--readonly": e.readonly,
        "su-textarea-container--auto-resize": e.autoResize,
        "su-textarea-container--over-limit": M.value
      }
    ]), A = computed(() => [
      "su-textarea",
      `su-textarea--${e.size}`,
      `su-textarea--${e.state}`,
      {
        "su-textarea--disabled": e.disabled,
        "su-textarea--readonly": e.readonly,
        "su-textarea--auto-resize": e.autoResize,
        "su-textarea--over-limit": M.value
      }
    ]), g = computed(() => [
      "su-textarea-counter",
      {
        "su-textarea-counter--near-limit": L.value,
        "su-textarea-counter--over-limit": M.value
      }
    ]), F = computed(() => {
      const x = {};
      return e.ariaLabel && (x["aria-label"] = e.ariaLabel), e.ariaInvalid !== void 0 && (x["aria-invalid"] = e.ariaInvalid), e.ariaRequired !== void 0 && (x["aria-required"] = e.ariaRequired), e.required && (x["aria-required"] = "true"), (e.state === "error" || M.value) && (x["aria-invalid"] = "true"), x;
    }), b = computed(() => {
      const x = {};
      return e.autocomplete && (x.autocomplete = e.autocomplete), e.maxLength && (x.maxlength = e.maxLength), e.spellcheck !== void 0 && (x.spellcheck = e.spellcheck), e.wrap && (x.wrap = e.wrap), x;
    }), u = async () => {
      if (!e.autoResize || !C.value) return;
      await nextTick();
      const x = C.value, h2 = e.minRows ? e.minRows * 1.5 : 3 * 1.5, G = e.maxRows ? e.maxRows * 1.5 : 10 * 1.5;
      x.style.height = "auto";
      const re = x.scrollHeight, pe = Math.max(h2 * 16, Math.min(G * 16, re));
      x.style.height = `${pe}px`;
    }, B = (x) => {
      const h2 = x.target;
      m.value = h2.value, o("input", x), e.autoResize && u();
    }, y = (x) => {
      o("change", x);
    }, N = (x) => {
      o("focus", x);
    }, le = (x) => {
      o("blur", x);
    }, ie = (x) => {
      o("keydown", x);
    }, Q = (x) => {
      o("keyup", x);
    };
    return l({
      focus: () => {
        var x;
        (x = C.value) == null || x.focus();
      },
      select: () => {
        var x;
        (x = C.value) == null || x.select();
      },
      textareaRef: C
    }), watch(m, () => {
      e.autoResize && u();
    }, { immediate: true }), watch(() => e.autoResize, (x) => {
      x && u();
    }), (x, h2) => (openBlock(), createBlock(ye, {
      fieldId: d.value,
      label: x.label,
      message: x.message,
      state: x.state,
      required: x.required,
      disabled: x.disabled
    }, {
      default: withCtx(({ fieldId: G, messageId: re }) => [
        createBaseVNode("div", null, [
          createBaseVNode("div", {
            class: normalizeClass(p.value)
          }, [
            createBaseVNode("textarea", mergeProps({
              ref_key: "textareaRef",
              ref: C,
              id: G,
              class: A.value,
              value: m.value,
              placeholder: x.placeholder,
              disabled: x.disabled,
              readonly: x.readonly,
              required: x.required,
              rows: x.autoResize ? x.minRows : x.rows,
              "aria-describedby": re
            }, { ...b.value, ...F.value }, {
              onInput: B,
              onChange: y,
              onFocus: N,
              onBlur: le,
              onKeydown: ie,
              onKeyup: Q
            }), null, 16, Ws)
          ], 2),
          x.showCounter && x.maxLength ? (openBlock(), createElementBlock("div", Ys, [
            h2[0] || (h2[0] = createBaseVNode("div", { class: "su-textarea-footer-spacer" }, null, -1)),
            createBaseVNode("div", {
              id: `${G}-counter`,
              class: normalizeClass(g.value),
              "aria-live": L.value || M.value ? "polite" : "off"
            }, [
              createBaseVNode("span", Qs, toDisplayString(M.value ? "Limite de caractères dépassée" : "Caractères restants") + ": ", 1),
              createTextVNode(" " + toDisplayString(w.value) + "/" + toDisplayString(x.maxLength), 1)
            ], 10, Xs)
          ])) : createCommentVNode("", true)
        ])
      ]),
      _: 1
    }, 8, ["fieldId", "label", "message", "state", "required", "disabled"]));
  }
});
var Js = ["dir"];
var et = {
  key: 0,
  class: "su-slider-before"
};
var at = {
  key: 1,
  class: "su-slider-labels"
};
var st = { class: "su-slider-label su-slider-label--min" };
var tt = { class: "su-slider-label su-slider-label--max" };
var lt = { class: "su-slider-wrapper" };
var it = {
  key: 0,
  class: "su-slider-value"
};
var rt = {
  key: 0,
  class: "su-slider-value-display"
};
var ot = {
  key: 1,
  class: "su-slider-value-dual"
};
var nt = { class: "su-slider-value-min" };
var ut = { class: "su-slider-value-max" };
var dt = ["aria-describedby"];
var ct = {
  key: 0,
  class: "su-slider-ticks"
};
var ft = {
  key: 1,
  class: "su-slider-marks"
};
var pt = { class: "su-slider-mark-label" };
var vt = ["id", "tabindex"];
var ht = ["id", "tabindex"];
var bt = {
  key: 2,
  class: "su-slider-after"
};
var je = defineComponent({
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
  setup(v, { expose: l, emit: a }) {
    const e = v, m = useModel(v, "modelValue"), o = a, k = useAttrs(), C = ref(), z = ref(), d = ref(), D = ref(), w = ref(false), _ = ref(null), L = ref(false), M = ref(false), p = "slider-" + useId(), A = computed(() => k.id || p), g = computed(() => Array.isArray(m.value)), F = computed({
      get() {
        return m.value === void 0 || m.value === null ? e.min : m.value;
      },
      set(t) {
        m.value = t, o("change", t), o("input", t);
      }
    }), b = computed(() => g.value ? F.value[0] : F.value), u = computed(() => g.value ? F.value[1] : F.value), B = (t) => e.formatValue ? e.formatValue(t) : t.toString(), y = computed(() => {
      const t = (b.value - e.min) / (e.max - e.min) * 100;
      return e.dir === "rtl" ? 100 - t : t;
    }), N = computed(() => {
      const t = (u.value - e.min) / (e.max - e.min) * 100;
      return e.dir === "rtl" ? 100 - t : t;
    }), le = computed(() => [
      "su-slider-container",
      `su-slider-container--${e.size}`,
      `su-slider-container--${e.state}`,
      `su-slider-container--${e.orientation}`,
      {
        "su-slider-container--disabled": e.disabled,
        "su-slider-container--readonly": e.readonly,
        "su-slider-container--dual": g.value,
        "su-slider-container--dragging": w.value,
        "su-slider-container--rtl": e.dir === "rtl"
      }
    ]), ie = computed(() => [
      "su-slider-track",
      `su-slider-track--${e.size}`,
      `su-slider-track--${e.state}`,
      `su-slider-track--${e.orientation}`
    ]), Q = (t) => [
      "su-slider-thumb",
      `su-slider-thumb--${e.size}`,
      `su-slider-thumb--${e.state}`,
      `su-slider-thumb--${e.orientation}`,
      {
        "su-slider-thumb--disabled": e.disabled,
        "su-slider-thumb--readonly": e.readonly,
        "su-slider-thumb--active": _.value === t
      }
    ], ae = (t) => {
      const $ = t === "min" ? b.value : u.value, S = {
        role: "slider",
        "aria-valuemin": e.min,
        "aria-valuemax": e.max,
        "aria-valuenow": $,
        "aria-valuetext": e.ariaValueText || B($),
        "aria-orientation": e.orientation
      };
      return e.ariaLabel && (S["aria-label"] = g.value ? `${e.ariaLabel} ${t === "min" ? "minimum" : "maximum"}` : e.ariaLabel), e.ariaInvalid !== void 0 && (S["aria-invalid"] = e.ariaInvalid), e.ariaRequired !== void 0 && (S["aria-required"] = e.ariaRequired), e.required && (S["aria-required"] = "true"), e.state === "error" && (S["aria-invalid"] = "true"), S;
    }, se = (t) => Math.max(e.min, Math.min(e.max, t)), x = (t) => {
      const $ = Math.round((t - e.min) / e.step);
      return e.min + $ * e.step;
    }, h2 = (t, $) => {
      if (!z.value) return e.min;
      const S = z.value.getBoundingClientRect();
      let T;
      e.orientation === "horizontal" ? (T = (t - S.left) / S.width, e.dir === "rtl" && (T = 1 - T)) : T = 1 - ($ - S.top) / S.height, T = Math.max(0, Math.min(1, T));
      const q = e.min + T * (e.max - e.min);
      return x(se(q));
    }, G = (t, $ = "min") => {
      if (e.disabled || e.readonly) return;
      const S = se(x(t));
      if (g.value) {
        const [q, J] = F.value;
        $ === "min" ? F.value = [Math.min(S, J), J] : F.value = [q, Math.max(S, q)];
      } else
        F.value = S;
      const T = g.value ? `${$ === "min" ? "Minimum" : "Maximum"} : ${B(S)}` : B(S);
      oe(T);
    }, re = (t, $ = "min") => {
      if (e.disabled || e.readonly) return;
      t.preventDefault(), w.value = true, _.value = $;
      const S = (q) => {
        const J = h2(q.clientX, q.clientY);
        G(J, $);
      }, T = () => {
        w.value = false, _.value = null, document.removeEventListener("mousemove", S), document.removeEventListener("mouseup", T);
      };
      document.addEventListener("mousemove", S), document.addEventListener("mouseup", T);
    }, pe = (t) => {
      if (e.disabled || e.readonly) return;
      const $ = h2(t.clientX, t.clientY);
      if (g.value) {
        const [S, T] = F.value, q = Math.abs($ - S), J = Math.abs($ - T), j = q <= J ? "min" : "max";
        G($, j);
      } else
        G($);
    }, fe = (t, $ = "min") => {
      if (e.disabled || e.readonly) return;
      const S = $ === "min" ? b.value : u.value;
      let T = S;
      const q = (e.max - e.min) / 10;
      switch (t.key) {
        case "ArrowRight":
        case "ArrowUp":
          t.preventDefault(), T = S + e.step;
          break;
        case "ArrowLeft":
        case "ArrowDown":
          t.preventDefault(), T = S - e.step;
          break;
        case "PageUp":
          t.preventDefault(), T = S + q;
          break;
        case "PageDown":
          t.preventDefault(), T = S - q;
          break;
        case "Home":
          t.preventDefault(), T = e.min;
          break;
        case "End":
          t.preventDefault(), T = e.max;
          break;
        default:
          return;
      }
      G(T, $), o("keydown", t);
    }, ge = (t, $ = "min") => {
      e.tooltip !== "none" && ($ === "min" ? L.value = true : M.value = true), o("focus", t);
    }, c = (t, $ = "min") => {
      e.tooltip !== "none" && ($ === "min" ? L.value = false : M.value = false), o("blur", t);
    }, P = (t = "min") => {
      e.tooltip !== "none" && !e.disabled && (t === "min" ? L.value = true : M.value = true);
    }, U = (t = "min") => {
      e.tooltip !== "none" && (t === "min" ? L.value = false : M.value = false);
    }, O = computed(() => {
      if (!e.showTicks) return [];
      const t = Math.min(21, (e.max - e.min) / e.step + 1), $ = (e.max - e.min) / (t - 1);
      return Array.from({ length: t }, (S, T) => {
        const q = e.min + T * $, J = (q - e.min) / (e.max - e.min) * 100, j = e.dir === "rtl" ? 100 - J : J;
        return { value: x(q), percent: j };
      });
    }), V = computed(() => !e.marks || e.marks.length === 0 ? [] : e.marks.filter((t) => t >= e.min && t <= e.max).map((t) => {
      const $ = (t - e.min) / (e.max - e.min) * 100, S = e.dir === "rtl" ? 100 - $ : $;
      return { value: t, percent: S };
    }));
    return l({
      focus: () => {
        var t;
        (t = d.value) == null || t.focus();
      },
      sliderRef: C,
      thumb1Ref: d,
      thumb2Ref: D
    }), (t, $) => (openBlock(), createBlock(ye, {
      fieldId: A.value,
      label: t.label,
      message: t.message,
      state: t.state,
      required: t.required,
      disabled: t.disabled
    }, {
      default: withCtx(({ fieldId: S, messageId: T }) => [
        createBaseVNode("div", {
          class: normalizeClass(le.value),
          dir: t.dir
        }, [
          t.$slots.before ? (openBlock(), createElementBlock("div", et, [
            renderSlot(t.$slots, "before")
          ])) : createCommentVNode("", true),
          t.showLabels ? (openBlock(), createElementBlock("div", at, [
            createBaseVNode("span", st, toDisplayString(B(t.min)), 1),
            createBaseVNode("span", tt, toDisplayString(B(t.max)), 1)
          ])) : createCommentVNode("", true),
          createBaseVNode("div", lt, [
            t.showValue && t.tooltip === "none" ? (openBlock(), createElementBlock("div", it, [
              g.value ? (openBlock(), createElementBlock("div", ot, [
                createBaseVNode("span", nt, toDisplayString(B(b.value)), 1),
                $[12] || ($[12] = createBaseVNode("span", { class: "su-slider-value-separator" }, "-", -1)),
                createBaseVNode("span", ut, toDisplayString(B(u.value)), 1)
              ])) : (openBlock(), createElementBlock("span", rt, toDisplayString(B(b.value)), 1))
            ])) : createCommentVNode("", true),
            createBaseVNode("div", {
              ref_key: "sliderRef",
              ref: C,
              class: "su-slider-slider",
              "aria-describedby": T,
              onClick: pe
            }, [
              createBaseVNode("div", {
                ref_key: "trackRef",
                ref: z,
                class: normalizeClass(ie.value)
              }, [
                createBaseVNode("div", {
                  class: "su-slider-track-active",
                  style: normalizeStyle({
                    [t.orientation === "horizontal" ? "left" : "bottom"]: `${g.value ? Math.min(y.value, N.value) : 0}%`,
                    [t.orientation === "horizontal" ? "width" : "height"]: `${g.value ? Math.abs(N.value - y.value) : Math.abs(y.value)}%`
                  })
                }, null, 4),
                t.showTicks ? (openBlock(), createElementBlock("div", ct, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(O.value, (q) => (openBlock(), createElementBlock("div", {
                    key: q.value,
                    class: "su-slider-tick",
                    style: normalizeStyle({
                      [t.orientation === "horizontal" ? "left" : "bottom"]: `${q.percent}%`
                    })
                  }, null, 4))), 128))
                ])) : createCommentVNode("", true),
                V.value.length > 0 ? (openBlock(), createElementBlock("div", ft, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(V.value, (q) => (openBlock(), createElementBlock("div", {
                    key: q.value,
                    class: "su-slider-mark",
                    style: normalizeStyle({
                      [t.orientation === "horizontal" ? "left" : "bottom"]: `${q.percent}%`
                    })
                  }, [
                    $[13] || ($[13] = createBaseVNode("div", { class: "su-slider-mark-dot" }, null, -1)),
                    createBaseVNode("div", pt, toDisplayString(B(q.value)), 1)
                  ], 4))), 128))
                ])) : createCommentVNode("", true),
                createBaseVNode("div", mergeProps({
                  ref_key: "thumb1Ref",
                  ref: d,
                  id: g.value ? `${S}-min` : S,
                  class: Q("min"),
                  style: {
                    [t.orientation === "horizontal" ? "left" : "bottom"]: `${y.value}%`
                  },
                  tabindex: t.disabled ? -1 : 0
                }, ae("min"), {
                  onMousedown: $[0] || ($[0] = (q) => re(q, "min")),
                  onKeydown: $[1] || ($[1] = (q) => fe(q, "min")),
                  onFocus: $[2] || ($[2] = (q) => ge(q, "min")),
                  onBlur: $[3] || ($[3] = (q) => c(q, "min")),
                  onMouseenter: $[4] || ($[4] = (q) => P("min")),
                  onMouseleave: $[5] || ($[5] = (q) => U("min"))
                }), [
                  $[14] || ($[14] = createBaseVNode("div", { class: "su-slider-thumb-handle" }, null, -1)),
                  t.tooltip !== "none" && (L.value || w.value && _.value === "min") ? (openBlock(), createElementBlock("div", {
                    key: 0,
                    class: normalizeClass(["su-slider-tooltip", `su-slider-tooltip--${t.tooltip}`])
                  }, toDisplayString(B(b.value)), 3)) : createCommentVNode("", true)
                ], 16, vt),
                g.value ? (openBlock(), createElementBlock("div", mergeProps({
                  key: 2,
                  ref_key: "thumb2Ref",
                  ref: D,
                  id: `${S}-max`,
                  class: Q("max"),
                  style: {
                    [t.orientation === "horizontal" ? "left" : "bottom"]: `${N.value}%`
                  },
                  tabindex: t.disabled ? -1 : 0
                }, ae("max"), {
                  onMousedown: $[6] || ($[6] = (q) => re(q, "max")),
                  onKeydown: $[7] || ($[7] = (q) => fe(q, "max")),
                  onFocus: $[8] || ($[8] = (q) => ge(q, "max")),
                  onBlur: $[9] || ($[9] = (q) => c(q, "max")),
                  onMouseenter: $[10] || ($[10] = (q) => P("max")),
                  onMouseleave: $[11] || ($[11] = (q) => U("max"))
                }), [
                  $[15] || ($[15] = createBaseVNode("div", { class: "su-slider-thumb-handle" }, null, -1)),
                  t.tooltip !== "none" && (M.value || w.value && _.value === "max") ? (openBlock(), createElementBlock("div", {
                    key: 0,
                    class: normalizeClass(["su-slider-tooltip", `su-slider-tooltip--${t.tooltip}`])
                  }, toDisplayString(B(u.value)), 3)) : createCommentVNode("", true)
                ], 16, ht)) : createCommentVNode("", true)
              ], 2)
            ], 8, dt)
          ]),
          t.$slots.after ? (openBlock(), createElementBlock("div", bt, [
            renderSlot(t.$slots, "after")
          ])) : createCommentVNode("", true)
        ], 10, Js)
      ]),
      _: 3
    }, 8, ["fieldId", "label", "message", "state", "required", "disabled"]));
  }
});
var mt = ["id"];
var yt = {
  key: 0,
  class: "su-dialog-header"
};
var gt = ["id"];
var kt = ["id"];
var wt = { class: "su-dialog-content" };
var $t = {
  key: 2,
  class: "su-dialog-footer"
};
var Bt = defineComponent({
  __name: "Dialog",
  props: {
    modelValue: { type: Boolean, default: false },
    display: { default: "center" },
    title: {},
    description: {},
    closeOnOverlayClick: { type: Boolean, default: true },
    closeOnEscape: { type: Boolean, default: true },
    width: {},
    height: {},
    zIndex: { default: 1e3 },
    disableScroll: { type: Boolean, default: true },
    ariaLabel: {},
    ariaLabelledBy: {},
    ariaDescribedBy: {},
    ariaHidden: { type: Boolean },
    role: {},
    tabIndex: {}
  },
  emits: ["update:modelValue", "open", "close"],
  setup(v, { expose: l, emit: a }) {
    const e = v, m = a, o = useAttrs(), k = ref(), C = ref(null), z = "dialog-" + useId(), d = computed(() => o.id || z), D = computed(() => e.title ? d.value + "-title" : void 0), w = computed(() => e.description ? d.value + "-description" : void 0), _ = ref(e.modelValue), L = computed(() => [
      "su-dialog-overlay",
      `su-dialog-overlay--${e.display}`,
      {
        "su-dialog-overlay--open": _.value
      }
    ]), M = computed(() => [
      "su-dialog",
      `su-dialog--${e.display}`,
      {
        "su-dialog--open": _.value
      }
    ]), p = computed(() => {
      const u = {
        role: "dialog",
        "aria-modal": "true",
        "aria-hidden": !_.value
      };
      return e.ariaLabel && (u["aria-label"] = e.ariaLabel), e.ariaLabelledBy ? u["aria-labelledby"] = e.ariaLabelledBy : D.value && (u["aria-labelledby"] = D.value), e.ariaDescribedBy ? u["aria-describedby"] = e.ariaDescribedBy : w.value && (u["aria-describedby"] = w.value), u;
    }), A = async () => {
      _.value || (_.value = true, m("update:modelValue", true), m("open"), e.disableScroll && (document.body.style.overflow = "hidden"), await nextTick(), k.value && (C.value = Fe(k.value)));
    }, g = () => {
      _.value && (_.value = false, m("update:modelValue", false), m("close"), e.disableScroll && (document.body.style.overflow = ""), C.value && (C.value(), C.value = null));
    }, F = () => {
      e.closeOnOverlayClick && g();
    }, b = (u) => {
      u.key === "Escape" && e.closeOnEscape && g();
    };
    return watch(() => e.modelValue, (u) => {
      u ? A() : g();
    }), onMounted(() => {
      e.modelValue && A(), document.addEventListener("keydown", b);
    }), onUnmounted(() => {
      document.removeEventListener("keydown", b), e.disableScroll && (document.body.style.overflow = ""), C.value && C.value();
    }), l({
      open: A,
      close: g,
      dialogRef: k
    }), (u, B) => (openBlock(), createBlock(Transition, { name: "su-dialog-transition" }, {
      default: withCtx(() => [
        _.value ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: normalizeClass(L.value),
          style: normalizeStyle({ zIndex: u.zIndex }),
          onClick: F
        }, [
          createBaseVNode("div", mergeProps({
            ref_key: "dialogRef",
            ref: k,
            id: d.value,
            class: M.value,
            style: { width: u.width, height: u.height }
          }, p.value, {
            onClick: B[0] || (B[0] = withModifiers(() => {
            }, ["stop"]))
          }), [
            u.$slots.head || u.title ? (openBlock(), createElementBlock("div", yt, [
              renderSlot(u.$slots, "head", {}, () => [
                createBaseVNode("h2", {
                  id: D.value,
                  class: "su-dialog-title"
                }, toDisplayString(u.title), 9, gt)
              ])
            ])) : createCommentVNode("", true),
            u.description && !u.$slots.head ? (openBlock(), createElementBlock("p", {
              key: 1,
              id: w.value,
              class: "sr-only"
            }, toDisplayString(u.description), 9, kt)) : createCommentVNode("", true),
            createBaseVNode("div", wt, [
              renderSlot(u.$slots, "default")
            ]),
            u.$slots.footer ? (openBlock(), createElementBlock("div", $t, [
              renderSlot(u.$slots, "footer")
            ])) : createCommentVNode("", true)
          ], 16, mt)
        ], 6)) : createCommentVNode("", true)
      ]),
      _: 3
    }));
  }
});
var xt = {
  key: 0,
  class: "su-form-fields-head"
};
var Lt = { class: "su-form-fields-content" };
var Ct = {
  key: 1,
  class: "su-form-fields-footer"
};
var zt = defineComponent({
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
  setup(v) {
    const l = v, a = useSlots(), e = [
      Se,
      Pe,
      Ee,
      Te,
      He,
      Ke,
      Oe,
      je
    ], m = computed(() => [
      "su-form-fields",
      `su-form-fields--gap-${l.gap}`,
      `su-form-fields--section-gap-${l.sectionGap}`,
      `su-form-fields--${l.direction}`
    ]), o = computed(() => {
      var d;
      if (!(a != null && a.default)) return [];
      const C = ((d = a == null ? void 0 : a.default) == null ? void 0 : d.call(a)) ?? [], z = [];
      for (const D of C)
        if (e.some((_) => D.type === _)) {
          const _ = { ...D.props };
          l.size && (_.size = l.size), z.push(h(D.type, _, D == null ? void 0 : D.children));
        } else {
          if (D.type === Comment || D.type === Text || D.type === Fragment)
            continue;
          console.warn("FormFields expects only form field components as children. Found:", D.type);
        }
      return z;
    });
    computed(() => a != null && a.head ? a.head() : []), computed(() => a != null && a.footer ? a.footer() : []);
    const k = computed(() => {
      const C = {};
      return l.ariaLabel && (C["aria-label"] = l.ariaLabel), l.ariaDescribedBy && (C["aria-describedby"] = l.ariaDescribedBy), l.role && (C.role = l.role), C;
    });
    return (C, z) => (openBlock(), createElementBlock("div", mergeProps({ class: m.value }, k.value), [
      C.$slots.head ? (openBlock(), createElementBlock("div", xt, [
        renderSlot(C.$slots, "head")
      ])) : createCommentVNode("", true),
      createBaseVNode("div", Lt, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(o.value, (d, D) => (openBlock(), createBlock(resolveDynamicComponent(d), { key: D }))), 128))
      ]),
      C.$slots.footer ? (openBlock(), createElementBlock("div", Ct, [
        renderSlot(C.$slots, "footer")
      ])) : createCommentVNode("", true)
    ], 16));
  }
});
var It = { class: "su-float-button-wrapper" };
var Dt = ["aria-label"];
var _t = ["id"];
var qt = defineComponent({
  __name: "FloatButton",
  props: {
    position: { default: "right" },
    offset: { default: () => ({ x: 24, y: 24 }) },
    size: { default: "lg" },
    icon: {},
    label: {},
    href: {},
    target: {},
    rel: {},
    badge: {},
    variant: { default: "primary" },
    disabled: { type: Boolean, default: false },
    loading: { type: Boolean, default: false },
    zIndex: { default: 1e3 },
    hideOnScroll: { type: Boolean, default: false },
    showTooltip: { type: Boolean, default: true },
    tooltipPosition: { default: "left" },
    ariaLabel: {},
    ariaLabelledBy: {},
    ariaDescribedBy: {},
    ariaHidden: { type: Boolean },
    role: {},
    tabIndex: {}
  },
  emits: ["click", "focus", "blur"],
  setup(v, { expose: l, emit: a }) {
    const e = v, m = a, o = useSlots(), k = ref(), C = ref(true), z = ref(false), d = ref(0), D = computed(() => {
      const y = {
        position: "fixed",
        zIndex: e.zIndex.toString()
      };
      return e.position === "right" ? y.right = `${e.offset.x || 24}px` : y.left = `${e.offset.x || 24}px`, y.bottom = `${e.offset.y || 24}px`, y;
    }), w = computed(() => [
      "su-float-button-container",
      `su-float-button-container--${e.position}`,
      `su-float-button-container--${e.size}`,
      {
        "su-float-button-container--hidden": !C.value,
        "su-float-button-container--has-slot": o.default,
        "su-float-button-container--disabled": e.disabled
      }
    ]), _ = computed(() => [
      "su-float-button",
      `su-float-button--${e.size}`,
      {
        "su-float-button--has-badge": e.badge,
        "su-float-button--has-tooltip": e.showTooltip && e.label
      }
    ]), L = computed(() => [
      "su-float-button-tooltip",
      `su-float-button-tooltip--${e.tooltipPosition}`,
      `su-float-button-tooltip--in-${e.position}`
    ]), M = computed(() => {
      if (!e.href) return {};
      const y = {
        href: e.href
      };
      return e.target && (y.target = e.target), e.rel && (y.rel = e.rel), e.target === "_blank" && !e.rel && (y.rel = "noopener noreferrer"), y;
    }), p = () => {
      if (!e.hideOnScroll) return;
      const y = window.scrollY;
      y > d.value && y > 100 ? C.value = false : C.value = true, d.value = y;
    }, A = (y) => {
      e.disabled || e.loading || m("click", y);
    }, g = (y) => {
      e.showTooltip && e.label && (z.value = true), m("focus", y);
    }, F = (y) => {
      z.value = false, m("blur", y);
    }, b = () => {
      e.showTooltip && e.label && !e.disabled && (z.value = true);
    }, u = () => {
      z.value = false;
    };
    return onMounted(() => {
      e.hideOnScroll && window.addEventListener("scroll", p, { passive: true });
    }), onUnmounted(() => {
      e.hideOnScroll && window.removeEventListener("scroll", p);
    }), l({
      focus: () => {
        var y;
        (y = k.value) == null || y.focus();
      },
      floatButtonRef: k
    }), (y, N) => (openBlock(), createElementBlock("div", {
      class: normalizeClass(w.value),
      style: normalizeStyle(D.value)
    }, [
      y.$slots.default ? (openBlock(), createElementBlock("div", {
        key: 0,
        class: normalizeClass(["su-float-button-slot", `su-float-button-slot--${y.position}`])
      }, [
        renderSlot(y.$slots, "default")
      ], 2)) : createCommentVNode("", true),
      createBaseVNode("div", It, [
        y.badge ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: "su-float-button-badge",
          "aria-label": `Badge: ${y.badge}`
        }, toDisplayString(y.badge), 9, Dt)) : createCommentVNode("", true),
        (openBlock(), createElementBlock("div", {
          key: 1,
          class: normalizeClass(L.value),
          role: "tooltip",
          id: `${y.$attrs.id || "float-button"}-tooltip`
        }, [
          createTextVNode(toDisplayString(y.label) + " ", 1),
          N[0] || (N[0] = createBaseVNode("div", { class: "su-float-button-tooltip-arrow" }, null, -1))
        ], 10, _t)),
        (openBlock(), createBlock(resolveDynamicComponent(y.href ? Re : Ve), mergeProps({
          ref_key: "floatButtonRef",
          ref: k,
          class: _.value,
          variant: y.variant,
          size: y.size,
          icon: y.icon,
          iconDisplay: "only",
          disabled: y.disabled,
          loading: y.loading,
          "aria-label": y.label || y.ariaLabel,
          "aria-describedby": z.value && y.label ? `${y.$attrs.id || "float-button"}-tooltip` : y.ariaDescribedBy
        }, y.href ? M.value : {}, {
          label: "test",
          onClick: A,
          onFocus: g,
          onBlur: F,
          onMouseenter: b,
          onMouseleave: u
        }), null, 16, ["class", "variant", "size", "icon", "disabled", "loading", "aria-label", "aria-describedby"]))
      ])
    ], 6));
  }
});
var Mt = ["aria-label"];
var Vt = { key: 1 };
var St = ["srcset", "type", "media"];
var Rt = ["id", "src", "alt", "width", "height", "loading"];
var Ft = ["id", "src", "alt", "width", "height", "loading"];
var At = ["aria-label"];
var Pt = defineComponent({
  __name: "Image",
  props: {
    src: {},
    alt: {},
    fallback: {},
    sources: {},
    ratio: { default: "auto" },
    fit: { default: "cover" },
    position: { default: "center" },
    lazy: { type: Boolean, default: false },
    loading: { default: "lazy" },
    width: {},
    height: {},
    placeholder: { type: Boolean, default: true },
    placeholderColor: { default: "#f3f4f6" },
    ariaLabel: {},
    ariaLabelledBy: {},
    ariaDescribedBy: {},
    ariaHidden: { type: Boolean },
    role: {},
    tabIndex: {}
  },
  emits: ["load", "error"],
  setup(v, { expose: l, emit: a }) {
    const e = v, m = a, o = useAttrs(), k = ref(), C = ref(false), z = ref(false), d = ref(true), D = "image-" + useId(), w = computed(() => o.id || D), _ = computed(() => {
      if (e.ratio === "auto") return {};
      let b;
      return typeof e.ratio == "number" ? b = e.ratio.toString() : b = e.ratio, {
        aspectRatio: b
      };
    }), L = computed(() => [
      "su-image-container",
      {
        "su-image-container--loading": d.value,
        "su-image-container--loaded": C.value,
        "su-image-container--error": z.value,
        "su-image-container--has-ratio": e.ratio !== "auto"
      }
    ]), M = computed(() => [
      "su-image",
      `su-image--fit-${e.fit}`,
      `su-image--position-${e.position}`,
      {
        "su-image--loaded": C.value,
        "su-image--error": z.value
      }
    ]), p = computed(() => {
      const b = {};
      return e.ariaLabel && (b["aria-label"] = e.ariaLabel), e.ariaDescribedBy && (b["aria-describedby"] = e.ariaDescribedBy), e.ariaHidden !== void 0 && (b["aria-hidden"] = e.ariaHidden), e.role && (b.role = e.role), b;
    }), A = (b) => {
      C.value = true, d.value = false, z.value = false, m("load", b);
    }, g = (b) => {
      if (z.value = true, d.value = false, e.fallback && k.value) {
        const u = k.value;
        if (u.src !== e.fallback) {
          u.src = e.fallback;
          return;
        }
      }
      m("error", b);
    };
    return l({
      reload: () => {
        k.value && (C.value = false, d.value = true, z.value = false, k.value.src = e.src);
      },
      imageRef: k
    }), onMounted(() => {
      var b;
      (b = k.value) != null && b.complete && A(new Event("load"));
    }), (b, u) => (openBlock(), createElementBlock("div", {
      class: normalizeClass(L.value),
      style: normalizeStyle(_.value)
    }, [
      b.placeholder && d.value && !z.value ? (openBlock(), createElementBlock("div", {
        key: 0,
        class: "su-image-placeholder",
        style: normalizeStyle({ backgroundColor: b.placeholderColor }),
        "aria-label": b.alt + " - Chargement en cours"
      }, [...u[0] || (u[0] = [
        createBaseVNode("svg", {
          class: "su-image-placeholder-icon",
          viewBox: "0 0 24 24",
          fill: "none",
          stroke: "currentColor",
          "aria-hidden": "true"
        }, [
          createBaseVNode("rect", {
            x: "3",
            y: "3",
            width: "18",
            height: "18",
            rx: "2",
            ry: "2"
          }),
          createBaseVNode("circle", {
            cx: "9",
            cy: "9",
            r: "2"
          }),
          createBaseVNode("path", { d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" })
        ], -1)
      ])], 12, Mt)) : createCommentVNode("", true),
      b.sources && b.sources.length > 0 ? (openBlock(), createElementBlock("picture", Vt, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(b.sources, (B) => (openBlock(), createElementBlock("source", {
          key: B.srcset,
          srcset: B.srcset,
          type: B.type,
          media: B.media
        }, null, 8, St))), 128)),
        createBaseVNode("img", mergeProps({
          ref_key: "imageRef",
          ref: k,
          id: w.value,
          class: M.value,
          src: b.src,
          alt: b.alt,
          width: b.width,
          height: b.height,
          loading: b.lazy ? "lazy" : b.loading
        }, p.value, {
          onLoad: A,
          onError: g
        }), null, 16, Rt)
      ])) : (openBlock(), createElementBlock("img", mergeProps({
        key: 2,
        ref_key: "imageRef",
        ref: k,
        id: w.value,
        class: M.value,
        src: b.src,
        alt: b.alt,
        width: b.width,
        height: b.height,
        loading: b.lazy ? "lazy" : b.loading
      }, p.value, {
        onLoad: A,
        onError: g
      }), null, 16, Ft)),
      z.value ? (openBlock(), createElementBlock("div", {
        key: 3,
        class: "su-image-error",
        "aria-label": b.alt + " - Erreur de chargement"
      }, [...u[1] || (u[1] = [
        createBaseVNode("svg", {
          class: "su-image-error-icon",
          viewBox: "0 0 24 24",
          fill: "none",
          stroke: "currentColor",
          "aria-hidden": "true"
        }, [
          createBaseVNode("path", { d: "m21 21-6-6m0 0L9 9m6 6 6 6M9 9l-6-6m6 6V3m0 6H3" })
        ], -1),
        createBaseVNode("span", { class: "su-image-error-text" }, "Erreur de chargement", -1)
      ])], 8, At)) : createCommentVNode("", true)
    ], 6));
  }
});
var Ht = {
  install(v, l = {}) {
    const a = l.prefix || "Su", e = document.documentElement;
    if (typeof document < "u") {
      if (l.buttonRadius && e.style.setProperty("--su-button-default-radius", `var(--su-border-radius-${l.buttonRadius})`), l.buttonVariant) {
        const o = {
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
        o && (e.style.setProperty("--su-button-variant-primary-bg", o.bg), e.style.setProperty("--su-button-variant-primary-color", o.color), e.style.setProperty("--su-button-variant-primary-border", o.border), e.style.setProperty("--su-button-variant-primary-hover-bg", o.hoverBg), e.style.setProperty("--su-button-variant-primary-hover-shadow", o.hoverShadow));
      }
      if (l.buttonSize) {
        const o = {
          sm: "sm",
          md: "md",
          lg: "lg"
        }[l.buttonSize];
        o && (e.style.setProperty("--su-button-size-md-padding", `var(--su-button-size-${o}-padding)`), e.style.setProperty("--su-button-size-md-font-size", `var(--su-button-size-${o}-font-size)`), e.style.setProperty("--su-button-size-md-line-height", `var(--su-button-size-${o}-line-height)`), e.style.setProperty("--su-button-size-md-min-height", `var(--su-button-size-${o}-min-height)`), e.style.setProperty("--su-button-size-md-icon-only-padding", `var(--su-button-size-${o}-icon-only-padding)`), e.style.setProperty("--su-button-size-md-icon-only-width", `var(--su-button-size-${o}-icon-only-width)`));
      }
    }
    if (l.linkVariant) {
      const o = {
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
      o && (e.style.setProperty("--su-link-variant-default-color", o.color), e.style.setProperty("--su-link-variant-default-hover-color", o.hoverColor), e.style.setProperty("--su-link-variant-default-active-color", o.activeColor));
    }
    if (l.linkSize) {
      const o = {
        sm: "sm",
        md: "md",
        lg: "lg"
      }[l.linkSize];
      o && (e.style.setProperty("--su-link-size-md-font-size", `var(--su-link-size-${o}-font-size)`), e.style.setProperty("--su-link-size-md-line-height", `var(--su-link-size-${o}-line-height)`), e.style.setProperty("--su-link-size-md-padding", `var(--su-link-size-${o}-padding)`), e.style.setProperty("--su-link-size-md-icon-size", `var(--su-link-size-${o}-icon-size)`), e.style.setProperty("--su-link-size-md-icon-only-padding", `var(--su-link-size-${o}-icon-only-padding)`), e.style.setProperty("--su-link-size-md-icon-only-size", `var(--su-link-size-${o}-icon-only-size)`));
    }
    l.linkUnderline && e.style.setProperty("--su-link-default-underline", l.linkUnderline), v.component(`${a}FormField`, ye), v.component(`${a}Button`, Ve), v.component(`${a}Password`, La), v.component(`${a}ButtonsGroup`, Ca), v.component(`${a}Link`, Re), v.component(`${a}LinksGroup`, Ia), v.component(`${a}Input`, Se), v.component(`${a}SelectBox`, Pe), v.component(`${a}RadioGroup`, Ee), v.component(`${a}CheckboxGroup`, Te), v.component(`${a}Switch`, He), v.component(`${a}FileUpload`, Ke), v.component(`${a}Textarea`, Oe), v.component(`${a}Slider`, je), v.component(`${a}FormFields`, zt), v.component(`${a}FloatButton`, qt), v.component(`${a}Dialog`, Bt), v.component(`${a}Image`, Pt), v.component(`${a}Avatar`, Avatar), v.component(`${a}AvatarsGroup`, AvatarsGroup);
  }
};
export {
  Ve as Button,
  Ca as ButtonsGroup,
  Te as CheckboxGroup,
  Bt as Dialog,
  Ke as FileUpload,
  qt as FloatButton,
  ye as FormField,
  zt as FormFields,
  Pt as Image,
  Se as Input,
  Re as Link,
  Ia as LinksGroup,
  La as Password,
  Ee as RadioGroup,
  Pe as SelectBox,
  je as Slider,
  He as Switch,
  Oe as Textarea,
  Tt as accessibility,
  Ht as default
};
//# sourceMappingURL=@surgeup_ds-vue.js.map
