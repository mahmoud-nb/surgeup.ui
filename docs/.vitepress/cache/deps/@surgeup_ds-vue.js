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
var ve = defineComponent({
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
      const B = {};
      return l.state === "error" ? B["aria-live"] = "assertive" : (l.state === "success" || l.state === "warning") && (B["aria-live"] = "polite"), B;
    }), h2 = computed(() => [
      "su-form-field-message",
      `su-form-field-message--${l.state}`
    ]), i = computed(() => [
      "su-form-field-label",
      {
        "su-form-field-label--required": l.required,
        "su-form-field-label--disabled": l.disabled
      }
    ]);
    return (B, C) => (openBlock(), createElementBlock("div", Ze, [
      B.label ? (openBlock(), createElementBlock("label", {
        key: 0,
        for: B.fieldId,
        class: normalizeClass(i.value)
      }, [
        createTextVNode(toDisplayString(B.label) + " ", 1),
        B.required ? (openBlock(), createElementBlock("span", We, "*")) : createCommentVNode("", true)
      ], 10, Ne)) : createCommentVNode("", true),
      renderSlot(B.$slots, "default", {
        fieldId: B.fieldId,
        messageId: a.value
      }),
      B.message ? (openBlock(), createElementBlock("div", mergeProps({
        key: 1,
        id: a.value,
        class: h2.value
      }, e.value), toDisplayString(B.message), 17, Ye)) : createCommentVNode("", true)
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
var qe = defineComponent({
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
    const a = v, e = l, h2 = computed(() => [
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
    ]), i = computed(() => !(a.icon && a.iconDisplay === "only")), B = (w) => {
      a.disabled || a.loading || e("click", w);
    }, C = (w) => {
      (w.key === "Enter" || w.key === " ") && (w.preventDefault(), !a.disabled && !a.loading && e("click", w)), e("keydown", w);
    }, I = (w) => {
      e("focus", w);
    }, c = (w) => {
      e("blur", w);
    }, L = computed(() => {
      const w = {};
      return a.ariaLabel && (w["aria-label"] = a.ariaLabel), a.ariaDescribedBy && (w["aria-describedby"] = a.ariaDescribedBy), a.ariaExpanded !== void 0 && (w["aria-expanded"] = a.ariaExpanded), a.ariaPressed !== void 0 && (w["aria-pressed"] = a.ariaPressed), a.role && (w.role = a.role), a.loading && (w["aria-busy"] = "true", w["aria-live"] = "polite"), a.disabled && (w["aria-disabled"] = "true"), a.icon && a.iconDisplay === "only" && !a.ariaLabel && console.warn('Button with icon and iconDisplay="only" should have an ariaLabel for accessibility'), w;
    });
    return (w, _) => (openBlock(), createElementBlock("button", mergeProps({
      class: h2.value,
      disabled: w.disabled || w.loading,
      tabindex: w.disabled ? -1 : w.tabIndex
    }, L.value, {
      onClick: B,
      onKeydown: C,
      onFocus: I,
      onBlur: c
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
        i.value ? (openBlock(), createElementBlock("span", Je, [
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
function Le(v, l) {
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
var ba = ["tabindex", "onKeydown"];
var Me = defineComponent({
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
    const e = v, h2 = useModel(v, "modelValue"), i = a, B = useAttrs(), C = ref(), I = "input-" + useId(), c = computed(() => B.id || I), L = computed(() => typeof B.onPrefixClick == "function"), w = computed(() => typeof B.onPrefixIconClick == "function"), _ = computed(() => typeof B.onSuffixClick == "function"), $ = computed(() => typeof B.onSuffixIconClick == "function"), V = computed(() => [
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
    ]), K = computed(() => {
      const f = {};
      return e.ariaLabel && (f["aria-label"] = e.ariaLabel), e.ariaInvalid !== void 0 && (f["aria-invalid"] = e.ariaInvalid), e.ariaRequired !== void 0 && (f["aria-required"] = e.ariaRequired), e.required && (f["aria-required"] = "true"), e.state === "error" && (f["aria-invalid"] = "true"), f;
    }), g = computed(() => {
      const f = {};
      return e.autocomplete && (f.autocomplete = e.autocomplete), e.min !== void 0 && (f.min = e.min), e.max !== void 0 && (f.max = e.max), e.step !== void 0 && (f.step = e.step), e.minLength !== void 0 && (f.minlength = e.minLength), e.maxLength !== void 0 && (f.maxlength = e.maxLength), e.pattern && (f.pattern = e.pattern), f;
    }), R = (f) => {
      const G = f.target;
      h2.value = e.type === "number" ? Number(G.value) : G.value, i("input", f);
    }, M = (f) => {
      i("change", f);
    }, k = (f) => {
      i("focus", f);
    }, x = (f) => {
      i("blur", f);
    }, b = (f) => {
      i("keydown", f);
    }, Z = (f) => {
      i("keyup", f);
    }, te = (f) => {
      e.disabled || e.readonly || i("prefix-click", f);
    }, le = (f) => {
      e.disabled || e.readonly || i("prefix-icon-click", f);
    }, W = (f) => {
      e.disabled || e.readonly || i("suffix-click", f);
    }, ee = (f) => {
      e.disabled || e.readonly || i("suffix-icon-click", f);
    };
    return l({
      focus: () => {
        var f;
        (f = C.value) == null || f.focus();
      },
      select: () => {
        var f;
        (f = C.value) == null || f.select();
      },
      inputRef: C
    }), (f, G) => (openBlock(), createBlock(ve, {
      fieldId: c.value,
      label: f.label,
      message: f.message,
      state: f.state,
      required: f.required,
      disabled: f.disabled
    }, {
      default: withCtx(({ fieldId: ie, messageId: fe }) => [
        createBaseVNode("div", {
          class: normalizeClass(V.value),
          dir: f.dir
        }, [
          f.prefixIcon ? (openBlock(), createElementBlock("div", {
            key: 0,
            class: normalizeClass(["su-input-prefix su-input-prefix--icon", { "su-input-prefix--clickable": w.value }]),
            tabindex: w.value && !f.disabled && !f.readonly ? 0 : -1,
            onClick: le,
            onKeydown: [
              withKeys(withModifiers(le, ["prevent"]), ["enter"]),
              withKeys(withModifiers(le, ["prevent"]), ["space"])
            ]
          }, [
            (openBlock(), createBlock(resolveDynamicComponent(f.prefixIcon), {
              class: "su-input-icon",
              "aria-hidden": "true"
            }))
          ], 42, ca)) : f.prefix ? (openBlock(), createElementBlock("div", {
            key: 1,
            class: normalizeClass(["su-input-prefix su-input-prefix--text", { "su-input-prefix--clickable": L.value }]),
            tabindex: L.value && !f.disabled && !f.readonly ? 0 : -1,
            onClick: te,
            onKeydown: [
              withKeys(withModifiers(te, ["prevent"]), ["enter"]),
              withKeys(withModifiers(te, ["prevent"]), ["space"])
            ]
          }, toDisplayString(f.prefix), 43, fa)) : createCommentVNode("", true),
          createBaseVNode("input", mergeProps({
            ref_key: "inputRef",
            ref: C,
            id: ie,
            class: p.value,
            type: f.type,
            value: h2.value,
            placeholder: f.placeholder,
            disabled: f.disabled,
            readonly: f.readonly,
            required: f.required,
            "aria-describedby": fe
          }, { ...g.value, ...K.value }, {
            onInput: R,
            onChange: M,
            onFocus: k,
            onBlur: x,
            onKeydown: b,
            onKeyup: Z
          }), null, 16, pa),
          f.suffix ? (openBlock(), createElementBlock("div", {
            key: 2,
            class: normalizeClass(["su-input-suffix su-input-suffix--text", { "su-input-suffix--clickable": _.value }]),
            tabindex: _.value && !f.disabled && !f.readonly ? 0 : -1,
            onClick: W,
            onKeydown: [
              withKeys(withModifiers(W, ["prevent"]), ["enter"]),
              withKeys(withModifiers(W, ["prevent"]), ["space"])
            ]
          }, toDisplayString(f.suffix), 43, va)) : f.suffixIcon ? (openBlock(), createElementBlock("div", {
            key: 3,
            class: normalizeClass(["su-input-suffix su-input-suffix--icon", { "su-input-suffix--clickable": $.value }]),
            tabindex: $.value && !f.disabled && !f.readonly ? 0 : -1,
            onClick: ee,
            onKeydown: [
              withKeys(withModifiers(ee, ["prevent"]), ["enter"]),
              withKeys(withModifiers(ee, ["prevent"]), ["space"])
            ]
          }, [
            (openBlock(), createBlock(resolveDynamicComponent(f.suffixIcon), {
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
var ha = { class: "su-password-wrapper" };
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
var xa = {
  class: "sr-only",
  "aria-live": "polite",
  "aria-atomic": true
};
var Ba = { key: 0 };
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
    const a = v, e = useModel(v, "modelValue"), h2 = l, i = ref(false), B = computed(() => i.value ? "text" : "password"), C = computed(() => i.value ? ra : oa), I = (k) => {
      const x = a.rules || {}, b = k.length, Z = (k.match(/[A-Z]/g) || []).length, te = (k.match(/[a-z]/g) || []).length, le = (k.match(/[0-9]/g) || []).length, W = (k.match(/[^A-Za-z0-9]/g) || []).length, ee = {
        length: {
          required: x.minLength || 0,
          current: b,
          satisfied: b >= (x.minLength || 0)
        },
        uppercase: {
          required: x.minUppercase || 0,
          current: Z,
          satisfied: Z >= (x.minUppercase || 0)
        },
        lowercase: {
          required: x.minLowercase || 0,
          current: te,
          satisfied: te >= (x.minLowercase || 0)
        },
        digits: {
          required: x.minDigits || 0,
          current: le,
          satisfied: le >= (x.minDigits || 0)
        },
        specialChars: {
          required: x.minSpecialChars || 0,
          current: W,
          satisfied: W >= (x.minSpecialChars || 0)
        }
      }, ae = [], y = [];
      Object.entries(ee).forEach(([ue, be]) => {
        be.required > 0 && (be.satisfied ? ae.push(ue) : y.push(ue));
      });
      const f = Object.values(ee).filter((ue) => ue.required > 0).length, G = ae.length, ie = f > 0 ? Math.round(G / f * 100) : 100;
      return {
        isValid: y.length === 0 && k.length > 0,
        score: ie,
        satisfied: ae,
        unsatisfied: y,
        details: ee
      };
    }, c = computed(() => I(e.value || "")), L = computed(() => a.state !== "default" ? a.state : e.value ? c.value.isValid ? "success" : c.value.score < 25 ? "error" : c.value.score < 75 ? "warning" : "default" : "default"), w = computed(() => [
      "su-password-progress",
      `su-password-progress--${L.value}`,
      {
        "su-password-progress--empty": !e.value,
        "su-password-progress--weak": c.value.score < 25,
        "su-password-progress--fair": c.value.score >= 25 && c.value.score < 50,
        "su-password-progress--good": c.value.score >= 50 && c.value.score < 75,
        "su-password-progress--strong": c.value.score >= 75
      }
    ]), _ = () => {
      a.disabled || a.readonly || (i.value = !i.value, h2("toggle-visibility", i.value));
    }, $ = () => {
      _();
    }, V = (k) => {
      h2("input", k);
    }, p = (k) => {
      h2("change", k);
    }, K = (k) => {
      h2("focus", k);
    }, g = (k) => {
      h2("blur", k);
    }, R = (k) => {
      h2("keydown", k);
    }, M = (k) => {
      h2("keyup", k);
    };
    return watch(c, (k) => {
      h2("validation", k);
    }, { immediate: true }), computed(() => i.value ? "Masquer le mot de passe" : "Afficher le mot de passe"), (k, x) => (openBlock(), createElementBlock("div", ha, [
      createVNode(Me, {
        modelValue: e.value,
        "onUpdate:modelValue": x[0] || (x[0] = (b) => e.value = b),
        type: B.value,
        size: k.size,
        state: L.value,
        disabled: k.disabled,
        readonly: k.readonly,
        required: k.required,
        placeholder: k.placeholder,
        prefix: k.prefix,
        prefixIcon: k.prefixIcon,
        suffixIcon: k.showToggle ? C.value : void 0,
        textAlign: k.textAlign,
        dir: k.dir,
        label: k.label,
        message: k.message,
        ariaLabel: k.ariaLabel,
        ariaDescribedBy: k.ariaDescribedBy,
        ariaInvalid: k.ariaInvalid,
        ariaRequired: k.ariaRequired,
        autocomplete: k.autocomplete,
        minLength: k.minLength,
        maxLength: k.maxLength,
        pattern: k.pattern,
        onInput: V,
        onChange: p,
        onFocus: K,
        onBlur: g,
        onKeydown: R,
        onKeyup: M,
        onSuffixIconClick: $
      }, createSlots({ _: 2 }, [
        k.$slots.default ? {
          name: "message",
          fn: withCtx(() => [
            renderSlot(k.$slots, "default", {
              validation: c.value,
              isValid: c.value.isValid,
              score: c.value.score,
              satisfied: c.value.satisfied,
              unsatisfied: c.value.unsatisfied,
              details: c.value.details
            })
          ]),
          key: "0"
        } : void 0
      ]), 1032, ["modelValue", "type", "size", "state", "disabled", "readonly", "required", "placeholder", "prefix", "prefixIcon", "suffixIcon", "textAlign", "dir", "label", "message", "ariaLabel", "ariaDescribedBy", "ariaInvalid", "ariaRequired", "autocomplete", "minLength", "maxLength", "pattern"]),
      k.showProgress && e.value ? (openBlock(), createElementBlock("div", {
        key: 0,
        class: "su-password-progress-container",
        role: "progressbar",
        "aria-valuenow": c.value.score,
        "aria-valuemin": "0",
        "aria-valuemax": "100",
        "aria-label": `Force du mot de passe : ${c.value.score}%`
      }, [
        createBaseVNode("div", {
          class: normalizeClass(w.value),
          style: normalizeStyle({ width: `${c.value.score}%` })
        }, null, 6),
        createBaseVNode("div", ya, [
          c.value.score < 25 ? (openBlock(), createElementBlock("span", ga, " Faible ")) : c.value.score < 50 ? (openBlock(), createElementBlock("span", ka, " Moyen ")) : c.value.score < 75 ? (openBlock(), createElementBlock("span", wa, " Bon ")) : (openBlock(), createElementBlock("span", $a, " Fort "))
        ])
      ], 8, ma)) : createCommentVNode("", true),
      createBaseVNode("div", xa, [
        e.value ? (openBlock(), createElementBlock("span", Ba, " Mot de passe " + toDisplayString(c.value.isValid ? "valide" : "invalide") + ". Force : " + toDisplayString(c.value.score) + "%. " + toDisplayString(c.value.satisfied.length) + " règle(s) respectée(s), " + toDisplayString(c.value.unsatisfied.length) + " règle(s) non respectée(s). ", 1)) : createCommentVNode("", true)
      ])
    ]));
  }
});
var za = defineComponent({
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
    ]), h2 = computed(() => {
      var I;
      if (!(a != null && a.default)) return [];
      const B = ((I = a == null ? void 0 : a.default) == null ? void 0 : I.call(a)) ?? [], C = [];
      for (const c of B)
        if (c.type === qe) {
          const L = { ...c.props };
          if (l.size && (L.size = l.size), l.variant && (L.variant = l.variant), l.gap === "none") {
            const w = L.class || "";
            L.class = `${w} su-buttons-group__button`.trim();
          }
          C.push(h(c.type, L, c == null ? void 0 : c.children));
        } else {
          if (c.type === Comment || c.type === Text || c.type === Fragment)
            continue;
          console.warn("ButtonsGroup expects only Button components as children. Found:", c.type);
        }
      return C;
    }), i = computed(() => {
      const B = {};
      return l.ariaLabel && (B["aria-label"] = l.ariaLabel), l.ariaDescribedBy && (B["aria-describedby"] = l.ariaDescribedBy), l.role && (B.role = l.role), B;
    });
    return (B, C) => (openBlock(), createElementBlock("div", mergeProps({ class: e.value }, i.value), [
      (openBlock(true), createElementBlock(Fragment, null, renderList(h2.value, (I, c) => (openBlock(), createBlock(resolveDynamicComponent(I), { key: c }))), 128))
    ], 16));
  }
});
var Ca = {
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
  setup(v, { emit: l }) {
    const a = v, e = l, h2 = computed(() => a.to !== void 0), i = computed(() => a.external || a.href && (a.href.startsWith("http") || a.href.startsWith("//") || a.target === "_blank")), B = computed(() => {
      const $ = {};
      return h2.value || ($.href = a.href, i.value ? ($.target = a.target || "_blank", $.rel = a.rel || "noopener noreferrer") : (a.target && ($.target = a.target), a.rel && ($.rel = a.rel))), a.ariaLabel && ($["aria-label"] = a.ariaLabel), a.ariaDescribedBy && ($["aria-describedby"] = a.ariaDescribedBy), a.role && ($.role = a.role), a.disabled ? ($["aria-disabled"] = "true", $.tabindex = -1) : $.tabindex = a.tabIndex, $;
    }), C = computed(() => [
      "su-link",
      `su-link--${a.variant}`,
      `su-link--${a.size}`,
      `su-link--underline-${a.underline}`,
      {
        "su-link--disabled": a.disabled,
        "su-link--external": i.value,
        "su-link--icon-only": a.icon && a.iconDisplay === "only",
        "su-link--icon-right": a.icon && a.iconDisplay === "right"
      }
    ]), I = computed(() => !(a.icon && a.iconDisplay === "only")), c = ($) => {
      if (a.disabled) {
        $.preventDefault();
        return;
      }
      e("click", $);
    }, L = ($) => {
      if (($.key === "Enter" || $.key === " ") && a.disabled) {
        $.preventDefault();
        return;
      }
      e("keydown", $);
    }, w = ($) => {
      e("focus", $);
    }, _ = ($) => {
      e("blur", $);
    };
    return a.icon && a.iconDisplay === "only" && !a.ariaLabel && console.warn('Link with icon and iconDisplay="only" should have an ariaLabel for accessibility'), ($, V) => (openBlock(), createBlock(resolveDynamicComponent(h2.value ? "router-link" : "a"), mergeProps({ class: C.value }, h2.value ? { to: $.to, ...B.value } : B.value, {
      onClick: c,
      onKeydown: L,
      onFocus: w,
      onBlur: _
    }), {
      default: withCtx(() => [
        $.icon ? (openBlock(), createBlock(resolveDynamicComponent($.icon), {
          key: 0,
          class: "su-link__icon",
          "aria-hidden": "true"
        })) : createCommentVNode("", true),
        I.value ? (openBlock(), createElementBlock("span", Ca, [
          renderSlot($.$slots, "default")
        ])) : createCommentVNode("", true),
        i.value && !$.icon && I.value ? (openBlock(), createBlock(unref(ea), {
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
    ]), h2 = computed(() => {
      var I;
      if (!(a != null && a.default)) return [];
      const B = ((I = a == null ? void 0 : a.default) == null ? void 0 : I.call(a)) ?? [], C = [];
      for (const c of B)
        if (c.type === De) {
          const L = { ...c.props };
          if (l.size && (L.size = l.size), l.variant && (L.variant = l.variant), l.underline && (L.underline = l.underline), l.gap === "none") {
            const w = L.class || "";
            L.class = `${w} su-links-group__link`.trim();
          }
          C.push(h(c.type, L, c == null ? void 0 : c.children));
        } else {
          if (c.type === Comment || c.type === Text || c.type === Fragment)
            continue;
          console.warn("LinksGroup expects only Link components as children. Found:", c.type);
        }
      return C;
    }), i = computed(() => {
      const B = {};
      return l.ariaLabel && (B["aria-label"] = l.ariaLabel), l.ariaDescribedBy && (B["aria-describedby"] = l.ariaDescribedBy), l.role && (B.role = l.role), B;
    });
    return (B, C) => (openBlock(), createElementBlock("div", mergeProps({ class: e.value }, i.value), [
      (openBlock(true), createElementBlock(Fragment, null, renderList(h2.value, (I, c) => (openBlock(), createBlock(resolveDynamicComponent(I), { key: c }))), 128))
    ], 16));
  }
});
var _a = 0;
function qa(v = "su") {
  return `${v}-${++_a}-${Date.now().toString(36)}`;
}
function Ma(v) {
  return [
    "button:not([disabled])",
    "input:not([disabled])",
    "select:not([disabled])",
    "textarea:not([disabled])",
    "a[href]",
    '[tabindex]:not([tabindex="-1"])'
  ].some((a) => v.matches(a));
}
function Re(v) {
  const l = v.querySelectorAll(
    'button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), a[href], [tabindex]:not([tabindex="-1"])'
  ), a = l[0], e = l[l.length - 1], h2 = (i) => {
    i.key === "Tab" && (i.shiftKey ? document.activeElement === a && (i.preventDefault(), e.focus()) : document.activeElement === e && (i.preventDefault(), a.focus()));
  };
  return v.addEventListener("keydown", h2), a == null || a.focus(), () => {
    v.removeEventListener("keydown", h2);
  };
}
function re(v, l = "polite") {
  const a = document.createElement("div");
  a.setAttribute("aria-live", l), a.setAttribute("aria-atomic", "true"), a.className = "sr-only", a.textContent = v, document.body.appendChild(a), setTimeout(() => {
    document.body.removeChild(a);
  }, 1e3);
}
function Da() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
function Va() {
  return window.matchMedia("(prefers-contrast: high)").matches;
}
function Sa(v, l) {
  return 4.5;
}
function Fa(v, l = "AA") {
  return v >= (l === "AAA" ? 7 : 4.5);
}
var Bt = Object.freeze(Object.defineProperty({
  __proto__: null,
  announceToScreenReader: re,
  generateId: qa,
  getContrastRatio: Sa,
  isContrastValid: Fa,
  isFocusable: Ma,
  prefersHighContrast: Va,
  prefersReducedMotion: Da,
  trapFocus: Re
}, Symbol.toStringTag, { value: "Module" }));
var Ra = ["dir"];
var Aa = ["id", "tabindex", "aria-describedby"];
var Pa = { class: "su-select-content" };
var Ta = {
  key: 0,
  class: "su-select-tags"
};
var Ea = { class: "su-select-tag-label" };
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
var Ae = defineComponent({
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
    const e = v, h2 = useModel(v, "modelValue"), i = a, B = useAttrs(), C = "selectbox-" + useId(), I = ref(), c = ref(), L = ref(), w = ref(), _ = ref(false), $ = ref(""), V = ref(-1), p = ref(null), K = computed(() => B.id || C), g = computed(() => `${K.value}-listbox`), R = computed(() => e.groups && e.groups.length > 0 ? e.groups.flatMap(
      (u) => u.options.map((t) => ({ ...t, group: u.label }))
    ) : e.options || []), M = computed(() => {
      if (!e.searchable || !$.value)
        return R.value;
      const u = $.value.toLowerCase();
      return R.value.filter(
        (t) => t.label.toLowerCase().includes(u) || t.description && t.description.toLowerCase().includes(u)
      );
    }), k = computed(() => {
      const u = {};
      return M.value.forEach((t) => {
        const m = t.group || "";
        u[m] || (u[m] = []), u[m].push(t);
      }), u;
    }), x = computed({
      get() {
        return e.multiple ? Array.isArray(h2.value) ? h2.value : h2.value !== void 0 && h2.value !== null ? [h2.value] : [] : h2.value;
      },
      set(u) {
        h2.value = u, i("change", u);
      }
    }), b = computed(() => {
      if (e.multiple) {
        const u = x.value;
        return u ? R.value.filter((t) => u.includes(t.value)) : [];
      } else {
        const u = x.value;
        return u != null ? R.value.filter((t) => t.value === u) : [];
      }
    }), Z = computed(() => {
      var u;
      return b.value.length === 0 ? e.placeholder : e.multiple ? b.value.length === 1 ? b.value[0].label : `${b.value.length} éléments sélectionnés` : ((u = b.value[0]) == null ? void 0 : u.label) || e.placeholder;
    }), te = computed(() => [
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
    ]), le = computed(() => [
      "su-select-trigger",
      `su-select-trigger--${e.size}`,
      `su-select-trigger--${e.state}`,
      `su-select-trigger--align-${e.textAlign}`,
      {
        "su-select-trigger--disabled": e.disabled,
        "su-select-trigger--readonly": e.readonly,
        "su-select-trigger--open": _.value,
        "su-select-trigger--has-value": b.value.length > 0,
        "su-select-trigger--placeholder": b.value.length === 0
      }
    ]), W = computed(() => {
      const u = {
        "aria-haspopup": "listbox",
        "aria-expanded": _.value,
        "aria-controls": _.value ? g.value : void 0,
        role: "combobox"
      };
      return e.ariaLabel && (u["aria-label"] = e.ariaLabel), e.ariaInvalid !== void 0 && (u["aria-invalid"] = e.ariaInvalid), e.ariaRequired !== void 0 && (u["aria-required"] = e.ariaRequired), e.required && (u["aria-required"] = "true"), e.state === "error" && (u["aria-invalid"] = "true"), e.multiple && (u["aria-multiselectable"] = "true"), u;
    }), ee = () => {
      e.disabled || e.readonly || (_.value ? y() : ae());
    }, ae = async () => {
      e.disabled || e.readonly || (_.value = true, $.value = "", V.value = -1, i("open"), await nextTick(), e.searchable && w.value && w.value.focus(), L.value && (p.value = Re(L.value)));
    }, y = () => {
      _.value = false, V.value = -1, p.value && (p.value(), p.value = null), i("close"), c.value && c.value.focus();
    }, f = (u) => {
      if (u.disabled) return;
      let t;
      if (e.multiple) {
        const D = x.value || [];
        if (D.includes(u.value))
          t = D.filter((q) => q !== u.value);
        else {
          if (e.maxSelectedItems && D.length >= e.maxSelectedItems) {
            re(`Maximum ${e.maxSelectedItems} éléments sélectionnables`);
            return;
          }
          t = [...D, u.value];
        }
      } else
        t = u.value;
      x.value = t;
      const m = e.multiple && x.value.includes(u.value) ? "désélectionné" : "sélectionné";
      re(`${u.label} ${m}`), !e.multiple && e.closeOnSelect && y();
    }, G = (u) => {
      u.stopPropagation();
      const t = e.multiple ? [] : void 0;
      x.value = t, re("Sélection effacée");
    }, ie = (u, t) => {
      if (t.stopPropagation(), e.multiple) {
        const D = (x.value || []).filter((P) => P !== u.value);
        x.value = D, re(`${u.label} retiré de la sélection`);
      }
    }, fe = (u) => {
      const t = u.target;
      $.value = t.value, V.value = -1, i("search", $.value);
    }, ue = (u) => {
      switch (u.key) {
        case "Enter":
        case " ":
          if (u.preventDefault(), !_.value)
            ae();
          else if (V.value >= 0) {
            const t = M.value[V.value];
            t && f(t);
          }
          break;
        case "Escape":
          u.preventDefault(), y();
          break;
        case "ArrowDown":
          u.preventDefault(), _.value ? V.value = Math.min(V.value + 1, M.value.length - 1) : ae();
          break;
        case "ArrowUp":
          u.preventDefault(), _.value && (V.value = Math.max(V.value - 1, -1));
          break;
        case "Home":
          _.value && (u.preventDefault(), V.value = 0);
          break;
        case "End":
          _.value && (u.preventDefault(), V.value = M.value.length - 1);
          break;
        case "Tab":
          _.value && y();
          break;
      }
    }, be = (u) => {
      i("focus", u);
    }, n = (u) => {
      setTimeout(() => {
        _.value && I.value && !I.value.contains(document.activeElement) && (y(), i("blur", u));
      }, 0);
    }, A = (u) => {
      _.value && I.value && !I.value.contains(u.target) && y();
    };
    return l({
      focus: () => {
        var u;
        (u = c.value) == null || u.focus();
      },
      open: () => {
        ae();
      },
      close: () => {
        y();
      },
      selectRef: I,
      inputRef: c
    }), onMounted(() => {
      document.addEventListener("click", A, { passive: true });
    }), onUnmounted(() => {
      document.removeEventListener("click", A, { passive: true }), p.value && p.value();
    }), watch(h2, () => {
      V.value = -1;
    }), (u, t) => (openBlock(), createBlock(ve, {
      fieldId: K.value,
      label: u.label,
      message: u.message,
      state: u.state,
      required: u.required,
      disabled: u.disabled
    }, {
      default: withCtx(({ fieldId: m, messageId: D }) => {
        var P;
        return [
          createBaseVNode("div", {
            class: "su-select-wrapper",
            dir: u.dir
          }, [
            createBaseVNode("div", {
              ref_key: "selectRef",
              ref: I,
              class: normalizeClass(te.value)
            }, [
              createBaseVNode("div", mergeProps({
                ref_key: "inputRef",
                ref: c,
                id: m,
                class: le.value,
                tabindex: u.disabled ? -1 : 0
              }, W.value, {
                "aria-describedby": D,
                onClick: ee,
                onKeydown: ue,
                onFocus: be,
                onBlur: n
              }), [
                createBaseVNode("div", Pa, [
                  u.multiple && b.value.length > 0 ? (openBlock(), createElementBlock("div", Ta, [
                    (openBlock(true), createElementBlock(Fragment, null, renderList(b.value.slice(0, 3), (q) => (openBlock(), createElementBlock("span", {
                      key: q.value,
                      class: "su-select-tag"
                    }, [
                      q.icon ? (openBlock(), createBlock(resolveDynamicComponent(q.icon), {
                        key: 0,
                        class: "su-select-tag-icon",
                        "aria-hidden": "true"
                      })) : createCommentVNode("", true),
                      createBaseVNode("span", Ea, toDisplayString(q.label), 1),
                      createBaseVNode("button", {
                        type: "button",
                        class: "su-select-tag-remove",
                        "aria-label": `Retirer ${q.label}`,
                        onClick: (Y) => ie(q, Y)
                      }, [
                        createVNode(unref(ze), { class: "su-select-tag-remove-icon" })
                      ], 8, Ha)
                    ]))), 128)),
                    b.value.length > 3 ? (openBlock(), createElementBlock("span", Ka, " +" + toDisplayString(b.value.length - 3), 1)) : createCommentVNode("", true)
                  ])) : (openBlock(), createElementBlock("div", Oa, [
                    (P = b.value[0]) != null && P.icon ? (openBlock(), createBlock(resolveDynamicComponent(b.value[0].icon), {
                      key: 0,
                      class: "su-select-display-icon",
                      "aria-hidden": "true"
                    })) : createCommentVNode("", true),
                    createBaseVNode("span", ja, toDisplayString(Z.value), 1)
                  ]))
                ]),
                createBaseVNode("div", Ga, [
                  u.loading ? (openBlock(), createElementBlock("div", Ua, [...t[0] || (t[0] = [
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
                  ])])) : u.clearable && b.value.length > 0 && !u.disabled && !u.readonly ? (openBlock(), createElementBlock("button", {
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
                    ref: L,
                    id: g.value,
                    class: "su-select-dropdown",
                    role: "listbox",
                    "aria-multiselectable": u.multiple
                  }, [
                    u.searchable ? (openBlock(), createElementBlock("div", Na, [
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
                          placeholder: u.searchPlaceholder,
                          value: $.value,
                          onInput: fe,
                          onKeydown: ue
                        }, null, 40, Ya)
                      ])
                    ])) : createCommentVNode("", true),
                    createBaseVNode("div", {
                      class: "su-select-options",
                      style: normalizeStyle({ maxHeight: u.maxHeight })
                    }, [
                      M.value.length > 0 ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList(k.value, (q, Y) => (openBlock(), createElementBlock(Fragment, { key: Y }, [
                        Y && e.groups && e.groups.length > 0 ? (openBlock(), createElementBlock("div", {
                          key: 0,
                          class: "su-select-group-header",
                          role: "group",
                          "aria-label": Y
                        }, toDisplayString(Y), 9, Xa)) : createCommentVNode("", true),
                        (openBlock(true), createElementBlock(Fragment, null, renderList(q, (j) => (openBlock(), createElementBlock("div", {
                          key: j.value,
                          class: normalizeClass(["su-select-option", {
                            "su-select-option--selected": u.multiple ? x.value.includes(j.value) : x.value === j.value,
                            "su-select-option--disabled": j.disabled,
                            "su-select-option--focused": M.value.indexOf(j) === V.value
                          }]),
                          role: "option",
                          "aria-selected": u.multiple ? x.value.includes(j.value) : x.value === j.value,
                          "aria-disabled": j.disabled,
                          onClick: (je) => f(j),
                          onMouseenter: (je) => V.value = M.value.indexOf(j)
                        }, [
                          u.multiple ? (openBlock(), createElementBlock("div", Ja, [
                            createBaseVNode("div", {
                              class: normalizeClass(["su-select-checkbox", {
                                "su-select-checkbox--checked": x.value.includes(j.value)
                              }])
                            }, [
                              x.value.includes(j.value) ? (openBlock(), createBlock(unref(Le), {
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
                          !u.multiple && x.value === j.value ? (openBlock(), createBlock(unref(Le), {
                            key: 2,
                            class: "su-select-option-check",
                            "aria-hidden": "true"
                          })) : createCommentVNode("", true)
                        ], 42, Qa))), 128))
                      ], 64))), 128)) : (openBlock(), createElementBlock("div", ts, toDisplayString($.value ? u.noResultsText : u.noOptionsText), 1))
                    ], 4)
                  ], 8, Za)) : createCommentVNode("", true)
                ]),
                _: 1
              })
            ], 2)
          ], 8, Ra)
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
var Pe = defineComponent({
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
    const a = useModel(v, "modelValue"), e = v, h2 = l, i = useAttrs(), B = "radio-group-" + useId(), C = computed(() => i.id || B), I = computed(() => e.name || B), c = computed(() => [
      "su-radio-group",
      `su-radio-group--${e.size}`,
      `su-radio-group--${e.state}`,
      `su-radio-group--${e.displayType}`,
      `su-radio-group--${e.direction}`,
      {
        "su-radio-group--disabled": e.disabled,
        "su-radio-group--scrollable": e.maxHeight
      }
    ]), L = (p) => [
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
        const K = [e.ariaDescribedBy].filter(Boolean).join(" ");
        p["aria-describedby"] = K;
      }
      return e.required && (p["aria-required"] = "true"), e.state === "error" && (p["aria-invalid"] = "true"), p;
    }), _ = (p) => {
      e.disabled || (a.value = p, h2("change", p));
    }, $ = (p) => {
      h2("focus", p);
    }, V = (p) => {
      h2("blur", p);
    };
    return (p, K) => (openBlock(), createBlock(ve, {
      fieldId: C.value,
      label: p.label,
      message: p.message,
      state: p.state,
      required: p.required,
      disabled: p.disabled
    }, {
      default: withCtx(({ fieldId: g, messageId: R }) => [
        createBaseVNode("fieldset", mergeProps({ class: c.value }, w.value, { "aria-describedby": R }), [
          createBaseVNode("div", {
            class: "su-radio-group-options",
            style: normalizeStyle({ maxHeight: p.maxHeight || void 0, overflowY: p.maxHeight ? "auto" : void 0 })
          }, [
            p.$slots.before ? (openBlock(), createElementBlock("div", is, [
              renderSlot(p.$slots, "before")
            ])) : createCommentVNode("", true),
            (openBlock(true), createElementBlock(Fragment, null, renderList(p.options, (M) => (openBlock(), createElementBlock("label", {
              key: M.value,
              class: normalizeClass(L(M)),
              for: `${g}-${M.value}`
            }, [
              createBaseVNode("input", {
                id: `${g}-${M.value}`,
                type: "radio",
                name: I.value,
                value: M.value,
                checked: a.value === M.value,
                disabled: M.disabled || p.disabled,
                required: p.required,
                class: "su-radio-input",
                onChange: (k) => _(M.value),
                onFocus: $,
                onBlur: V
              }, null, 40, os),
              K[0] || (K[0] = createBaseVNode("div", { class: "su-radio-indicator" }, [
                createBaseVNode("div", { class: "su-radio-dot" })
              ], -1)),
              createBaseVNode("div", ns, [
                M.icon ? (openBlock(), createBlock(resolveDynamicComponent(M.icon), {
                  key: 0,
                  class: "su-radio-icon",
                  "aria-hidden": "true"
                })) : createCommentVNode("", true),
                createBaseVNode("div", us, [
                  createBaseVNode("div", ds, toDisplayString(M.label), 1),
                  M.description ? (openBlock(), createElementBlock("div", cs, toDisplayString(M.description), 1)) : createCommentVNode("", true)
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
var bs = ["for"];
var hs = ["id", "value", "checked", "disabled", "required", "onChange"];
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
    const a = v, e = useModel(v, "modelValue"), h2 = l, i = useAttrs(), B = "checkbox-group-" + useId(), C = computed(() => i.id || B), I = computed({
      get() {
        return Array.isArray(e.value) ? e.value : [];
      },
      set(g) {
        e.value = g, h2("change", g);
      }
    }), c = computed(() => [
      "su-checkbox-group",
      `su-checkbox-group--${a.size}`,
      `su-checkbox-group--${a.state}`,
      `su-checkbox-group--${a.displayType}`,
      `su-checkbox-group--${a.direction}`,
      {
        "su-checkbox-group--disabled": a.disabled,
        "su-checkbox-group--scrollable": a.maxHeight
      }
    ]), L = (g) => [
      "su-checkbox-option",
      `su-checkbox-option--${a.size}`,
      `su-checkbox-option--${a.state}`,
      `su-checkbox-option--${a.displayType}`,
      {
        "su-checkbox-option--selected": I.value.includes(g.value),
        "su-checkbox-option--disabled": g.disabled || a.disabled
      }
    ], w = computed(() => {
      const g = {
        role: "group"
      };
      if (a.ariaLabel && (g["aria-label"] = a.ariaLabel), a.ariaDescribedBy) {
        const R = [a.ariaDescribedBy].filter(Boolean).join(" ");
        g["aria-describedby"] = R;
      }
      return a.required && (g["aria-required"] = "true"), a.state === "error" && (g["aria-invalid"] = "true"), g;
    }), _ = (g, R) => {
      if (a.disabled) return;
      let M;
      if (R) {
        if (a.maxSelections && I.value.length >= a.maxSelections) {
          re(`Maximum ${a.maxSelections} sélections autorisées`);
          return;
        }
        M = [...I.value, g];
      } else
        M = I.value.filter((b) => b !== g);
      I.value = M;
      const k = a.options.find((b) => b.value === g), x = R ? "sélectionné" : "désélectionné";
      re(`${k == null ? void 0 : k.label} ${x}`);
    }, $ = (g) => {
      h2("focus", g);
    }, V = (g) => {
      h2("blur", g);
    }, p = (g) => I.value.includes(g), K = (g) => g.disabled || a.disabled;
    return (g, R) => (openBlock(), createBlock(ve, {
      fieldId: C.value,
      label: g.label,
      message: g.message,
      state: g.state,
      required: g.required,
      disabled: g.disabled
    }, {
      default: withCtx(({ fieldId: M, messageId: k }) => [
        createBaseVNode("fieldset", mergeProps({ class: c.value }, w.value, { "aria-describedby": k }), [
          createBaseVNode("div", {
            class: "su-checkbox-group-options",
            style: normalizeStyle({ maxHeight: g.maxHeight || void 0, overflowY: g.maxHeight ? "auto" : void 0 })
          }, [
            g.$slots.before ? (openBlock(), createElementBlock("div", vs, [
              renderSlot(g.$slots, "before")
            ])) : createCommentVNode("", true),
            (openBlock(true), createElementBlock(Fragment, null, renderList(g.options, (x) => (openBlock(), createElementBlock("label", {
              key: x.value,
              class: normalizeClass(L(x)),
              for: `${M}-${x.value}`
            }, [
              createBaseVNode("input", {
                id: `${M}-${x.value}`,
                type: "checkbox",
                value: x.value,
                checked: p(x.value),
                disabled: K(x),
                required: g.required && I.value.length === 0,
                class: "su-checkbox-input",
                onChange: (b) => _(x.value, b.target.checked),
                onFocus: $,
                onBlur: V
              }, null, 40, hs),
              createBaseVNode("div", {
                class: normalizeClass(["su-checkbox-indicator", {
                  "su-checkbox-indicator--checked": p(x.value),
                  "su-checkbox-indicator--indeterminate": false
                }])
              }, [
                p(x.value) ? (openBlock(), createBlock(unref(Le), {
                  key: 0,
                  class: "su-checkbox-check",
                  "aria-hidden": "true"
                })) : createCommentVNode("", true)
              ], 2),
              createBaseVNode("div", ms, [
                x.icon ? (openBlock(), createBlock(resolveDynamicComponent(x.icon), {
                  key: 0,
                  class: "su-checkbox-icon",
                  "aria-hidden": "true"
                })) : createCommentVNode("", true),
                createBaseVNode("div", ys, [
                  createBaseVNode("div", gs, toDisplayString(x.label), 1)
                ])
              ])
            ], 10, bs))), 128))
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
var xs = { class: "su-switch-thumb" };
var Bs = { class: "su-switch-indicator" };
var Ls = {
  key: 0,
  class: "su-switch-icon su-switch-icon--check",
  viewBox: "0 0 16 16",
  "aria-hidden": "true"
};
var zs = {
  key: 1,
  class: "su-switch-icon su-switch-icon--cross",
  viewBox: "0 0 16 16",
  "aria-hidden": "true"
};
var Ee = defineComponent({
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
  setup(v, { emit: l }) {
    const a = v, e = useModel(v, "modelValue"), h2 = l, i = useAttrs(), B = "switch-" + useId(), C = computed(() => i.id || B), I = computed(() => [
      "su-switch-container",
      `su-switch-container--${a.size}`,
      `su-switch-container--${a.state}`,
      {
        "su-switch-container--disabled": a.disabled,
        "su-switch-container--readonly": a.readonly,
        "su-switch-container--has-labels": a.leftLabel || a.rightLabel,
        "su-switch-container--centered": a.leftLabel && a.rightLabel
      }
    ]), c = computed(() => [
      "su-switch",
      `su-switch--${a.size}`,
      `su-switch--${a.state}`,
      {
        "su-switch--checked": e.value,
        "su-switch--disabled": a.disabled,
        "su-switch--readonly": a.readonly
      }
    ]), L = computed(() => {
      const p = {
        role: "switch",
        "aria-checked": e.value
      };
      return a.ariaLabel && (p["aria-label"] = a.ariaLabel), a.ariaInvalid !== void 0 && (p["aria-invalid"] = a.ariaInvalid), a.ariaRequired !== void 0 && (p["aria-required"] = a.ariaRequired), a.required && (p["aria-required"] = "true"), a.state === "error" && (p["aria-invalid"] = "true"), p;
    }), w = () => {
      if (a.disabled || a.readonly) return;
      const p = !e.value;
      e.value = p, h2("change", p);
    }, _ = (p) => {
      (p.key === " " || p.key === "Enter") && (p.preventDefault(), w()), h2("keydown", p);
    }, $ = (p) => {
      h2("focus", p);
    }, V = (p) => {
      h2("blur", p);
    };
    return (p, K) => (openBlock(), createBlock(ve, {
      fieldId: C.value,
      label: p.label,
      message: p.message,
      state: p.state,
      required: p.required,
      disabled: p.disabled
    }, {
      default: withCtx(({ fieldId: g, messageId: R }) => [
        createBaseVNode("div", {
          class: normalizeClass(I.value)
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
            class: c.value,
            tabindex: p.disabled ? -1 : 0,
            "aria-describedby": R
          }, L.value, {
            onClick: w,
            onKeydown: _,
            onFocus: $,
            onBlur: V
          }), [
            createBaseVNode("div", $s, [
              createBaseVNode("div", xs, [
                createBaseVNode("div", Bs, [
                  e.value ? (openBlock(), createElementBlock("svg", Ls, [...K[0] || (K[0] = [
                    createBaseVNode("path", { d: "M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" }, null, -1)
                  ])])) : (openBlock(), createElementBlock("svg", zs, [...K[1] || (K[1] = [
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
var Cs = ["id", "accept", "multiple", "disabled", "required", "aria-describedby"];
var Is = ["tabindex", "aria-label"];
var _s = { class: "su-file-upload-text" };
var qs = { class: "su-file-upload-primary-text" };
var Ms = { class: "su-file-upload-secondary-text" };
var Ds = { key: 0 };
var Vs = { key: 0 };
var Ss = { key: 1 };
var Fs = ["aria-label"];
var Rs = { class: "su-file-upload-item-preview" };
var As = ["src", "alt"];
var Ps = { class: "su-file-upload-item-info" };
var Ts = { class: "su-file-upload-item-name" };
var Es = { class: "su-file-upload-item-details" };
var Hs = { class: "su-file-upload-item-size" };
var Ks = {
  key: 0,
  class: "su-file-upload-item-progress"
};
var Os = {
  key: 1,
  class: "su-file-upload-item-error"
};
var js = { class: "su-file-upload-item-status" };
var Gs = {
  key: 2,
  class: "su-file-upload-spinner",
  "aria-hidden": "true"
};
var Us = ["aria-label", "onClick"];
var He = defineComponent({
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
  setup(v, { expose: l, emit: a }) {
    const e = v, h2 = useModel(v, "modelValue"), i = a, B = useAttrs(), C = ref(), I = ref(), c = ref(false), L = ref(0), w = "file-upload-" + useId(), _ = computed(() => B.id || w), $ = computed(() => Array.isArray(h2.value) ? h2.value : []), V = computed(() => [
      "su-file-upload-container",
      `su-file-upload-container--${e.size}`,
      `su-file-upload-container--${e.state}`,
      {
        "su-file-upload-container--disabled": e.disabled,
        "su-file-upload-container--readonly": e.readonly,
        "su-file-upload-container--dragging": c.value,
        "su-file-upload-container--has-files": $.value.length > 0
      }
    ]), p = computed(() => [
      "su-file-upload-dropzone",
      `su-file-upload-dropzone--${e.size}`,
      `su-file-upload-dropzone--${e.state}`,
      {
        "su-file-upload-dropzone--disabled": e.disabled,
        "su-file-upload-dropzone--readonly": e.readonly,
        "su-file-upload-dropzone--dragging": c.value
      }
    ]), K = computed(() => {
      const n = {};
      if (e.ariaLabel && (n["aria-label"] = e.ariaLabel), e.ariaDescribedBy) {
        const A = [e.ariaDescribedBy].filter(Boolean).join(" ");
        n["aria-describedby"] = A;
      }
      return e.ariaInvalid !== void 0 && (n["aria-invalid"] = e.ariaInvalid), e.ariaRequired !== void 0 && (n["aria-required"] = e.ariaRequired), e.required && (n["aria-required"] = "true"), e.state === "error" && (n["aria-invalid"] = "true"), n;
    }), g = (n) => {
      if (n === 0) return "0 B";
      const A = 1024, U = ["B", "KB", "MB", "GB"], O = Math.floor(Math.log(n) / Math.log(A));
      return parseFloat((n / Math.pow(A, O)).toFixed(1)) + " " + U[O];
    }, R = (n) => n.type.startsWith("image/") ? ua : la, M = (n) => `${n}-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`, k = (n) => n.type.startsWith("image/"), x = (n) => new Promise((A) => {
      if (!k(n)) {
        A("");
        return;
      }
      const U = new FileReader();
      U.onload = (O) => {
        var S;
        return A(((S = O.target) == null ? void 0 : S.result) || "");
      }, U.readAsDataURL(n);
    }), b = (n) => e.maxSize && n.size > e.maxSize ? `Le fichier "${n.name}" est trop volumineux (${g(n.size)}). Taille maximale : ${g(e.maxSize)}` : e.accept && !e.accept.split(",").map((O) => O.trim()).some((O) => {
      if (O.startsWith("."))
        return n.name.toLowerCase().endsWith(O.toLowerCase());
      if (O.includes("*")) {
        const S = O.split("/")[0];
        return n.type.startsWith(S);
      }
      return n.type === O;
    }) ? `Le type de fichier "${n.type}" n'est pas accepté pour "${n.name}"` : null, Z = async (n) => {
      if (e.disabled || e.readonly) return;
      const A = Array.from(n), U = $.value;
      if (e.maxFiles && U.length + A.length > e.maxFiles) {
        const S = `Nombre maximum de fichiers dépassé (${e.maxFiles})`;
        i("error", S), re(S, "assertive");
        return;
      }
      const O = [];
      for (const S of A) {
        const u = b(S);
        if (u) {
          i("error", u, S), re(u, "assertive");
          continue;
        }
        const t = {
          id: M("file"),
          file: S,
          name: S.name,
          size: S.size,
          type: S.type,
          status: "pending"
        };
        if (e.allowPreview && k(S))
          try {
            t.preview = await x(S);
          } catch (m) {
            console.warn("Erreur lors de la création de l'aperçu:", m);
          }
        O.push(t);
      }
      if (O.length > 0) {
        const S = e.multiple ? [...U, ...O] : O;
        h2.value = S, i("change", S);
        const u = O.length === 1 ? `Fichier "${O[0].name}" ajouté` : `${O.length} fichiers ajoutés`;
        re(u), O.forEach((t) => i("upload", t));
      }
    }, te = (n) => {
      if (e.disabled || e.readonly) return;
      const A = $.value.filter((U) => U.id !== n.id);
      h2.value = A, i("change", A), i("remove", n), re(`Fichier "${n.name}" supprimé`);
    }, le = (n) => {
      const A = n.target;
      A.files && A.files.length > 0 && Z(A.files), A.value = "";
    }, W = () => {
      var n;
      e.disabled || e.readonly || (n = C.value) == null || n.click();
    }, ee = (n) => {
      (n.key === "Enter" || n.key === " ") && (n.preventDefault(), W());
    }, ae = (n) => {
      i("focus", n);
    }, y = (n) => {
      i("blur", n);
    }, f = (n) => {
      n.preventDefault(), n.stopPropagation(), !(e.disabled || e.readonly) && (L.value++, L.value === 1 && (c.value = true));
    }, G = (n) => {
      n.preventDefault(), n.stopPropagation(), !(e.disabled || e.readonly) && (L.value--, L.value === 0 && (c.value = false));
    }, ie = (n) => {
      n.preventDefault(), n.stopPropagation(), !(e.disabled || e.readonly) && n.dataTransfer && (n.dataTransfer.dropEffect = "copy");
    }, fe = (n) => {
      var U;
      if (n.preventDefault(), n.stopPropagation(), e.disabled || e.readonly) return;
      c.value = false, L.value = 0;
      const A = (U = n.dataTransfer) == null ? void 0 : U.files;
      A && A.length > 0 && Z(A);
    };
    return l({
      focus: () => {
        var n;
        (n = I.value) == null || n.focus();
      },
      clear: () => {
        e.disabled || e.readonly || (h2.value = [], i("change", []), re("Tous les fichiers ont été supprimés"));
      },
      fileInputRef: C,
      dropZoneRef: I
    }), (n, A) => (openBlock(), createBlock(ve, {
      fieldId: _.value,
      label: n.label,
      message: n.message,
      state: n.state,
      required: n.required,
      disabled: n.disabled
    }, {
      default: withCtx(({ fieldId: U, messageId: O }) => [
        createBaseVNode("div", {
          class: normalizeClass(V.value)
        }, [
          createBaseVNode("input", mergeProps({
            ref_key: "fileInputRef",
            ref: C,
            id: U,
            type: "file",
            accept: n.accept,
            multiple: n.multiple,
            disabled: n.disabled,
            required: n.required,
            "aria-describedby": O,
            class: "su-file-upload-input"
          }, K.value, {
            onChange: le,
            onFocus: ae,
            onBlur: y
          }), null, 16, Cs),
          createBaseVNode("div", {
            ref_key: "dropZoneRef",
            ref: I,
            class: normalizeClass(p.value),
            tabindex: n.disabled ? -1 : 0,
            role: "button",
            "aria-label": n.placeholder,
            onClick: W,
            onKeydown: ee,
            onDragenter: f,
            onDragleave: G,
            onDragover: ie,
            onDrop: fe
          }, [
            createVNode(unref(ta), {
              class: normalizeClass(["su-file-upload-icon", { "su-file-upload-icon--dragging": c.value }]),
              "aria-hidden": "true"
            }, null, 8, ["class"]),
            createBaseVNode("div", _s, [
              createBaseVNode("p", qs, toDisplayString(c.value ? n.dragText : n.placeholder), 1),
              createBaseVNode("p", Ms, [
                createTextVNode(toDisplayString(n.browseText) + " ", 1),
                n.accept || n.maxSize ? (openBlock(), createElementBlock("span", Ds, [
                  n.accept ? (openBlock(), createElementBlock("span", Vs, " • " + toDisplayString(n.accept), 1)) : createCommentVNode("", true),
                  n.maxSize ? (openBlock(), createElementBlock("span", Ss, " • Max " + toDisplayString(g(n.maxSize)), 1)) : createCommentVNode("", true)
                ])) : createCommentVNode("", true)
              ])
            ])
          ], 42, Is),
          n.showFileList && $.value.length > 0 ? (openBlock(), createElementBlock("div", {
            key: 0,
            class: "su-file-upload-list",
            role: "list",
            "aria-label": `${$.value.length} fichier(s) sélectionné(s)`
          }, [
            (openBlock(true), createElementBlock(Fragment, null, renderList($.value, (S) => (openBlock(), createElementBlock("div", {
              key: S.id,
              class: normalizeClass(["su-file-upload-item", `su-file-upload-item--${S.status}`]),
              role: "listitem"
            }, [
              createBaseVNode("div", Rs, [
                S.preview ? (openBlock(), createElementBlock("img", {
                  key: 0,
                  src: S.preview,
                  alt: `Aperçu de ${S.name}`,
                  class: "su-file-upload-preview-image"
                }, null, 8, As)) : (openBlock(), createBlock(resolveDynamicComponent(R(S.file)), {
                  key: 1,
                  class: "su-file-upload-item-icon",
                  "aria-hidden": "true"
                }))
              ]),
              createBaseVNode("div", Ps, [
                createBaseVNode("div", Ts, toDisplayString(S.name), 1),
                createBaseVNode("div", Es, [
                  createBaseVNode("span", Hs, toDisplayString(g(S.size)), 1),
                  S.status === "uploading" && S.progress !== void 0 ? (openBlock(), createElementBlock("span", Ks, toDisplayString(S.progress) + "% ", 1)) : createCommentVNode("", true),
                  S.error ? (openBlock(), createElementBlock("span", Os, toDisplayString(S.error), 1)) : createCommentVNode("", true)
                ])
              ]),
              createBaseVNode("div", js, [
                S.status === "success" ? (openBlock(), createBlock(unref(aa), {
                  key: 0,
                  class: "su-file-upload-status-icon su-file-upload-status-icon--success",
                  "aria-hidden": "true"
                })) : S.status === "error" ? (openBlock(), createBlock(unref(ia), {
                  key: 1,
                  class: "su-file-upload-status-icon su-file-upload-status-icon--error",
                  "aria-hidden": "true"
                })) : S.status === "uploading" ? (openBlock(), createElementBlock("div", Gs, [...A[0] || (A[0] = [
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
              !n.disabled && !n.readonly ? (openBlock(), createElementBlock("button", {
                key: 0,
                type: "button",
                class: "su-file-upload-remove-button",
                "aria-label": `Supprimer ${S.name}`,
                onClick: (u) => te(S)
              }, [
                createVNode(unref(ze), {
                  class: "su-file-upload-remove-icon",
                  "aria-hidden": "true"
                })
              ], 8, Us)) : createCommentVNode("", true)
            ], 2))), 128))
          ], 8, Fs)) : createCommentVNode("", true)
        ], 2)
      ]),
      _: 1
    }, 8, ["fieldId", "label", "message", "state", "required", "disabled"]));
  }
});
var Zs = ["id", "value", "placeholder", "disabled", "readonly", "required", "rows", "aria-describedby"];
var Ns = {
  key: 0,
  class: "su-textarea-footer"
};
var Ws = ["id", "aria-live"];
var Ys = { class: "sr-only" };
var Ke = defineComponent({
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
    const e = v, h2 = useModel(v, "modelValue"), i = a, B = useAttrs(), C = ref(), I = "textarea-" + useId(), c = computed(() => B.id || I), L = computed(() => h2.value || ""), w = computed(() => L.value.length), _ = computed(() => e.maxLength ? e.maxLength - w.value : null), $ = computed(() => e.maxLength ? _.value !== null && _.value <= e.maxLength * 0.1 : false), V = computed(() => e.maxLength ? _.value !== null && _.value < 0 : false), p = computed(() => [
      "su-textarea-container",
      `su-textarea-container--${e.size}`,
      `su-textarea-container--${e.state}`,
      {
        "su-textarea-container--disabled": e.disabled,
        "su-textarea-container--readonly": e.readonly,
        "su-textarea-container--auto-resize": e.autoResize,
        "su-textarea-container--over-limit": V.value
      }
    ]), K = computed(() => [
      "su-textarea",
      `su-textarea--${e.size}`,
      `su-textarea--${e.state}`,
      {
        "su-textarea--disabled": e.disabled,
        "su-textarea--readonly": e.readonly,
        "su-textarea--auto-resize": e.autoResize,
        "su-textarea--over-limit": V.value
      }
    ]), g = computed(() => [
      "su-textarea-counter",
      {
        "su-textarea-counter--near-limit": $.value,
        "su-textarea-counter--over-limit": V.value
      }
    ]), R = computed(() => {
      const y = {};
      return e.ariaLabel && (y["aria-label"] = e.ariaLabel), e.ariaInvalid !== void 0 && (y["aria-invalid"] = e.ariaInvalid), e.ariaRequired !== void 0 && (y["aria-required"] = e.ariaRequired), e.required && (y["aria-required"] = "true"), (e.state === "error" || V.value) && (y["aria-invalid"] = "true"), y;
    }), M = computed(() => {
      const y = {};
      return e.autocomplete && (y.autocomplete = e.autocomplete), e.maxLength && (y.maxlength = e.maxLength), e.spellcheck !== void 0 && (y.spellcheck = e.spellcheck), e.wrap && (y.wrap = e.wrap), y;
    }), k = async () => {
      if (!e.autoResize || !C.value) return;
      await nextTick();
      const y = C.value, f = e.minRows ? e.minRows * 1.5 : 3 * 1.5, G = e.maxRows ? e.maxRows * 1.5 : 10 * 1.5;
      y.style.height = "auto";
      const ie = y.scrollHeight, fe = Math.max(f * 16, Math.min(G * 16, ie));
      y.style.height = `${fe}px`;
    }, x = (y) => {
      const f = y.target;
      h2.value = f.value, i("input", y), e.autoResize && k();
    }, b = (y) => {
      i("change", y);
    }, Z = (y) => {
      i("focus", y);
    }, te = (y) => {
      i("blur", y);
    }, le = (y) => {
      i("keydown", y);
    }, W = (y) => {
      i("keyup", y);
    };
    return l({
      focus: () => {
        var y;
        (y = C.value) == null || y.focus();
      },
      select: () => {
        var y;
        (y = C.value) == null || y.select();
      },
      textareaRef: C
    }), watch(h2, () => {
      e.autoResize && k();
    }, { immediate: true }), watch(() => e.autoResize, (y) => {
      y && k();
    }), (y, f) => (openBlock(), createBlock(ve, {
      fieldId: c.value,
      label: y.label,
      message: y.message,
      state: y.state,
      required: y.required,
      disabled: y.disabled
    }, {
      default: withCtx(({ fieldId: G, messageId: ie }) => [
        createBaseVNode("div", null, [
          createBaseVNode("div", {
            class: normalizeClass(p.value)
          }, [
            createBaseVNode("textarea", mergeProps({
              ref_key: "textareaRef",
              ref: C,
              id: G,
              class: K.value,
              value: h2.value,
              placeholder: y.placeholder,
              disabled: y.disabled,
              readonly: y.readonly,
              required: y.required,
              rows: y.autoResize ? y.minRows : y.rows,
              "aria-describedby": ie
            }, { ...M.value, ...R.value }, {
              onInput: x,
              onChange: b,
              onFocus: Z,
              onBlur: te,
              onKeydown: le,
              onKeyup: W
            }), null, 16, Zs)
          ], 2),
          y.showCounter && y.maxLength ? (openBlock(), createElementBlock("div", Ns, [
            f[0] || (f[0] = createBaseVNode("div", { class: "su-textarea-footer-spacer" }, null, -1)),
            createBaseVNode("div", {
              id: `${G}-counter`,
              class: normalizeClass(g.value),
              "aria-live": $.value || V.value ? "polite" : "off"
            }, [
              createBaseVNode("span", Ys, toDisplayString(V.value ? "Limite de caractères dépassée" : "Caractères restants") + ": ", 1),
              createTextVNode(" " + toDisplayString(w.value) + "/" + toDisplayString(y.maxLength), 1)
            ], 10, Ws)
          ])) : createCommentVNode("", true)
        ])
      ]),
      _: 1
    }, 8, ["fieldId", "label", "message", "state", "required", "disabled"]));
  }
});
var Xs = ["dir"];
var Qs = {
  key: 0,
  class: "su-slider-before"
};
var Js = {
  key: 1,
  class: "su-slider-labels"
};
var et = { class: "su-slider-label su-slider-label--min" };
var at = { class: "su-slider-label su-slider-label--max" };
var st = { class: "su-slider-wrapper" };
var tt = {
  key: 0,
  class: "su-slider-value"
};
var lt = {
  key: 0,
  class: "su-slider-value-display"
};
var it = {
  key: 1,
  class: "su-slider-value-dual"
};
var rt = { class: "su-slider-value-min" };
var ot = { class: "su-slider-value-max" };
var nt = ["aria-describedby"];
var ut = {
  key: 0,
  class: "su-slider-ticks"
};
var dt = {
  key: 1,
  class: "su-slider-marks"
};
var ct = { class: "su-slider-mark-label" };
var ft = ["id", "tabindex"];
var pt = ["id", "tabindex"];
var vt = {
  key: 2,
  class: "su-slider-after"
};
var Oe = defineComponent({
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
    const e = v, h2 = useModel(v, "modelValue"), i = a, B = useAttrs(), C = ref(), I = ref(), c = ref(), L = ref(), w = ref(false), _ = ref(null), $ = ref(false), V = ref(false), p = "slider-" + useId(), K = computed(() => B.id || p), g = computed(() => Array.isArray(h2.value)), R = computed({
      get() {
        return h2.value === void 0 || h2.value === null ? e.min : h2.value;
      },
      set(t) {
        h2.value = t, i("change", t), i("input", t);
      }
    }), M = computed(() => g.value ? R.value[0] : R.value), k = computed(() => g.value ? R.value[1] : R.value), x = (t) => e.formatValue ? e.formatValue(t) : t.toString(), b = computed(() => {
      const t = (M.value - e.min) / (e.max - e.min) * 100;
      return e.dir === "rtl" ? 100 - t : t;
    }), Z = computed(() => {
      const t = (k.value - e.min) / (e.max - e.min) * 100;
      return e.dir === "rtl" ? 100 - t : t;
    }), te = computed(() => [
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
    ]), le = computed(() => [
      "su-slider-track",
      `su-slider-track--${e.size}`,
      `su-slider-track--${e.state}`,
      `su-slider-track--${e.orientation}`
    ]), W = (t) => [
      "su-slider-thumb",
      `su-slider-thumb--${e.size}`,
      `su-slider-thumb--${e.state}`,
      `su-slider-thumb--${e.orientation}`,
      {
        "su-slider-thumb--disabled": e.disabled,
        "su-slider-thumb--readonly": e.readonly,
        "su-slider-thumb--active": _.value === t
      }
    ], ee = (t) => {
      const m = t === "min" ? M.value : k.value, D = {
        role: "slider",
        "aria-valuemin": e.min,
        "aria-valuemax": e.max,
        "aria-valuenow": m,
        "aria-valuetext": e.ariaValueText || x(m),
        "aria-orientation": e.orientation
      };
      return e.ariaLabel && (D["aria-label"] = g.value ? `${e.ariaLabel} ${t === "min" ? "minimum" : "maximum"}` : e.ariaLabel), e.ariaInvalid !== void 0 && (D["aria-invalid"] = e.ariaInvalid), e.ariaRequired !== void 0 && (D["aria-required"] = e.ariaRequired), e.required && (D["aria-required"] = "true"), e.state === "error" && (D["aria-invalid"] = "true"), D;
    }, ae = (t) => Math.max(e.min, Math.min(e.max, t)), y = (t) => {
      const m = Math.round((t - e.min) / e.step);
      return e.min + m * e.step;
    }, f = (t, m) => {
      if (!I.value) return e.min;
      const D = I.value.getBoundingClientRect();
      let P;
      e.orientation === "horizontal" ? (P = (t - D.left) / D.width, e.dir === "rtl" && (P = 1 - P)) : P = 1 - (m - D.top) / D.height, P = Math.max(0, Math.min(1, P));
      const q = e.min + P * (e.max - e.min);
      return y(ae(q));
    }, G = (t, m = "min") => {
      if (e.disabled || e.readonly) return;
      const D = ae(y(t));
      if (g.value) {
        const [q, Y] = R.value;
        m === "min" ? R.value = [Math.min(D, Y), Y] : R.value = [q, Math.max(D, q)];
      } else
        R.value = D;
      const P = g.value ? `${m === "min" ? "Minimum" : "Maximum"} : ${x(D)}` : x(D);
      re(P);
    }, ie = (t, m = "min") => {
      if (e.disabled || e.readonly) return;
      t.preventDefault(), w.value = true, _.value = m;
      const D = (q) => {
        const Y = f(q.clientX, q.clientY);
        G(Y, m);
      }, P = () => {
        w.value = false, _.value = null, document.removeEventListener("mousemove", D), document.removeEventListener("mouseup", P);
      };
      document.addEventListener("mousemove", D), document.addEventListener("mouseup", P);
    }, fe = (t) => {
      if (e.disabled || e.readonly) return;
      const m = f(t.clientX, t.clientY);
      if (g.value) {
        const [D, P] = R.value, q = Math.abs(m - D), Y = Math.abs(m - P), j = q <= Y ? "min" : "max";
        G(m, j);
      } else
        G(m);
    }, ue = (t, m = "min") => {
      if (e.disabled || e.readonly) return;
      const D = m === "min" ? M.value : k.value;
      let P = D;
      const q = (e.max - e.min) / 10;
      switch (t.key) {
        case "ArrowRight":
        case "ArrowUp":
          t.preventDefault(), P = D + e.step;
          break;
        case "ArrowLeft":
        case "ArrowDown":
          t.preventDefault(), P = D - e.step;
          break;
        case "PageUp":
          t.preventDefault(), P = D + q;
          break;
        case "PageDown":
          t.preventDefault(), P = D - q;
          break;
        case "Home":
          t.preventDefault(), P = e.min;
          break;
        case "End":
          t.preventDefault(), P = e.max;
          break;
        default:
          return;
      }
      G(P, m), i("keydown", t);
    }, be = (t, m = "min") => {
      e.tooltip !== "none" && (m === "min" ? $.value = true : V.value = true), i("focus", t);
    }, n = (t, m = "min") => {
      e.tooltip !== "none" && (m === "min" ? $.value = false : V.value = false), i("blur", t);
    }, A = (t = "min") => {
      e.tooltip !== "none" && !e.disabled && (t === "min" ? $.value = true : V.value = true);
    }, U = (t = "min") => {
      e.tooltip !== "none" && (t === "min" ? $.value = false : V.value = false);
    }, O = computed(() => {
      if (!e.showTicks) return [];
      const t = Math.min(21, (e.max - e.min) / e.step + 1), m = (e.max - e.min) / (t - 1);
      return Array.from({ length: t }, (D, P) => {
        const q = e.min + P * m, Y = (q - e.min) / (e.max - e.min) * 100, j = e.dir === "rtl" ? 100 - Y : Y;
        return { value: y(q), percent: j };
      });
    }), S = computed(() => !e.marks || e.marks.length === 0 ? [] : e.marks.filter((t) => t >= e.min && t <= e.max).map((t) => {
      const m = (t - e.min) / (e.max - e.min) * 100, D = e.dir === "rtl" ? 100 - m : m;
      return { value: t, percent: D };
    }));
    return l({
      focus: () => {
        var t;
        (t = c.value) == null || t.focus();
      },
      sliderRef: C,
      thumb1Ref: c,
      thumb2Ref: L
    }), (t, m) => (openBlock(), createBlock(ve, {
      fieldId: K.value,
      label: t.label,
      message: t.message,
      state: t.state,
      required: t.required,
      disabled: t.disabled
    }, {
      default: withCtx(({ fieldId: D, messageId: P }) => [
        createBaseVNode("div", {
          class: normalizeClass(te.value),
          dir: t.dir
        }, [
          t.$slots.before ? (openBlock(), createElementBlock("div", Qs, [
            renderSlot(t.$slots, "before")
          ])) : createCommentVNode("", true),
          t.showLabels ? (openBlock(), createElementBlock("div", Js, [
            createBaseVNode("span", et, toDisplayString(x(t.min)), 1),
            createBaseVNode("span", at, toDisplayString(x(t.max)), 1)
          ])) : createCommentVNode("", true),
          createBaseVNode("div", st, [
            t.showValue && t.tooltip === "none" ? (openBlock(), createElementBlock("div", tt, [
              g.value ? (openBlock(), createElementBlock("div", it, [
                createBaseVNode("span", rt, toDisplayString(x(M.value)), 1),
                m[12] || (m[12] = createBaseVNode("span", { class: "su-slider-value-separator" }, "-", -1)),
                createBaseVNode("span", ot, toDisplayString(x(k.value)), 1)
              ])) : (openBlock(), createElementBlock("span", lt, toDisplayString(x(M.value)), 1))
            ])) : createCommentVNode("", true),
            createBaseVNode("div", {
              ref_key: "sliderRef",
              ref: C,
              class: "su-slider-slider",
              "aria-describedby": P,
              onClick: fe
            }, [
              createBaseVNode("div", {
                ref_key: "trackRef",
                ref: I,
                class: normalizeClass(le.value)
              }, [
                createBaseVNode("div", {
                  class: "su-slider-track-active",
                  style: normalizeStyle({
                    [t.orientation === "horizontal" ? "left" : "bottom"]: `${g.value ? Math.min(b.value, Z.value) : 0}%`,
                    [t.orientation === "horizontal" ? "width" : "height"]: `${g.value ? Math.abs(Z.value - b.value) : Math.abs(b.value)}%`
                  })
                }, null, 4),
                t.showTicks ? (openBlock(), createElementBlock("div", ut, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(O.value, (q) => (openBlock(), createElementBlock("div", {
                    key: q.value,
                    class: "su-slider-tick",
                    style: normalizeStyle({
                      [t.orientation === "horizontal" ? "left" : "bottom"]: `${q.percent}%`
                    })
                  }, null, 4))), 128))
                ])) : createCommentVNode("", true),
                S.value.length > 0 ? (openBlock(), createElementBlock("div", dt, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(S.value, (q) => (openBlock(), createElementBlock("div", {
                    key: q.value,
                    class: "su-slider-mark",
                    style: normalizeStyle({
                      [t.orientation === "horizontal" ? "left" : "bottom"]: `${q.percent}%`
                    })
                  }, [
                    m[13] || (m[13] = createBaseVNode("div", { class: "su-slider-mark-dot" }, null, -1)),
                    createBaseVNode("div", ct, toDisplayString(x(q.value)), 1)
                  ], 4))), 128))
                ])) : createCommentVNode("", true),
                createBaseVNode("div", mergeProps({
                  ref_key: "thumb1Ref",
                  ref: c,
                  id: g.value ? `${D}-min` : D,
                  class: W("min"),
                  style: {
                    [t.orientation === "horizontal" ? "left" : "bottom"]: `${b.value}%`
                  },
                  tabindex: t.disabled ? -1 : 0
                }, ee("min"), {
                  onMousedown: m[0] || (m[0] = (q) => ie(q, "min")),
                  onKeydown: m[1] || (m[1] = (q) => ue(q, "min")),
                  onFocus: m[2] || (m[2] = (q) => be(q, "min")),
                  onBlur: m[3] || (m[3] = (q) => n(q, "min")),
                  onMouseenter: m[4] || (m[4] = (q) => A("min")),
                  onMouseleave: m[5] || (m[5] = (q) => U("min"))
                }), [
                  m[14] || (m[14] = createBaseVNode("div", { class: "su-slider-thumb-handle" }, null, -1)),
                  t.tooltip !== "none" && ($.value || w.value && _.value === "min") ? (openBlock(), createElementBlock("div", {
                    key: 0,
                    class: normalizeClass(["su-slider-tooltip", `su-slider-tooltip--${t.tooltip}`])
                  }, toDisplayString(x(M.value)), 3)) : createCommentVNode("", true)
                ], 16, ft),
                g.value ? (openBlock(), createElementBlock("div", mergeProps({
                  key: 2,
                  ref_key: "thumb2Ref",
                  ref: L,
                  id: `${D}-max`,
                  class: W("max"),
                  style: {
                    [t.orientation === "horizontal" ? "left" : "bottom"]: `${Z.value}%`
                  },
                  tabindex: t.disabled ? -1 : 0
                }, ee("max"), {
                  onMousedown: m[6] || (m[6] = (q) => ie(q, "max")),
                  onKeydown: m[7] || (m[7] = (q) => ue(q, "max")),
                  onFocus: m[8] || (m[8] = (q) => be(q, "max")),
                  onBlur: m[9] || (m[9] = (q) => n(q, "max")),
                  onMouseenter: m[10] || (m[10] = (q) => A("max")),
                  onMouseleave: m[11] || (m[11] = (q) => U("max"))
                }), [
                  m[15] || (m[15] = createBaseVNode("div", { class: "su-slider-thumb-handle" }, null, -1)),
                  t.tooltip !== "none" && (V.value || w.value && _.value === "max") ? (openBlock(), createElementBlock("div", {
                    key: 0,
                    class: normalizeClass(["su-slider-tooltip", `su-slider-tooltip--${t.tooltip}`])
                  }, toDisplayString(x(k.value)), 3)) : createCommentVNode("", true)
                ], 16, pt)) : createCommentVNode("", true)
              ], 2)
            ], 8, nt)
          ]),
          t.$slots.after ? (openBlock(), createElementBlock("div", vt, [
            renderSlot(t.$slots, "after")
          ])) : createCommentVNode("", true)
        ], 10, Xs)
      ]),
      _: 3
    }, 8, ["fieldId", "label", "message", "state", "required", "disabled"]));
  }
});
var bt = {
  key: 0,
  class: "su-form-fields-head"
};
var ht = { class: "su-form-fields-content" };
var mt = {
  key: 1,
  class: "su-form-fields-footer"
};
var yt = defineComponent({
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
      Me,
      Ae,
      Pe,
      Te,
      Ee,
      He,
      Ke,
      Oe
    ], h2 = computed(() => [
      "su-form-fields",
      `su-form-fields--gap-${l.gap}`,
      `su-form-fields--section-gap-${l.sectionGap}`,
      `su-form-fields--${l.direction}`
    ]), i = computed(() => {
      var c;
      if (!(a != null && a.default)) return [];
      const C = ((c = a == null ? void 0 : a.default) == null ? void 0 : c.call(a)) ?? [], I = [];
      for (const L of C)
        if (e.some((_) => L.type === _)) {
          const _ = { ...L.props };
          l.size && (_.size = l.size), I.push(h(L.type, _, L == null ? void 0 : L.children));
        } else {
          if (L.type === Comment || L.type === Text || L.type === Fragment)
            continue;
          console.warn("FormFields expects only form field components as children. Found:", L.type);
        }
      return I;
    });
    computed(() => a != null && a.head ? a.head() : []), computed(() => a != null && a.footer ? a.footer() : []);
    const B = computed(() => {
      const C = {};
      return l.ariaLabel && (C["aria-label"] = l.ariaLabel), l.ariaDescribedBy && (C["aria-describedby"] = l.ariaDescribedBy), l.role && (C.role = l.role), C;
    });
    return (C, I) => (openBlock(), createElementBlock("div", mergeProps({ class: h2.value }, B.value), [
      C.$slots.head ? (openBlock(), createElementBlock("div", bt, [
        renderSlot(C.$slots, "head")
      ])) : createCommentVNode("", true),
      createBaseVNode("div", ht, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(i.value, (c, L) => (openBlock(), createBlock(resolveDynamicComponent(c), { key: L }))), 128))
      ]),
      C.$slots.footer ? (openBlock(), createElementBlock("div", mt, [
        renderSlot(C.$slots, "footer")
      ])) : createCommentVNode("", true)
    ], 16));
  }
});
var gt = { class: "su-float-button-wrapper" };
var kt = ["aria-label"];
var wt = ["id"];
var $t = defineComponent({
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
    const e = v, h2 = a, i = useSlots(), B = ref(), C = ref(true), I = ref(false), c = ref(0), L = computed(() => {
      const b = {
        position: "fixed",
        zIndex: e.zIndex.toString()
      };
      return e.position === "right" ? b.right = `${e.offset.x || 24}px` : b.left = `${e.offset.x || 24}px`, b.bottom = `${e.offset.y || 24}px`, b;
    }), w = computed(() => [
      "su-float-button-container",
      `su-float-button-container--${e.position}`,
      `su-float-button-container--${e.size}`,
      {
        "su-float-button-container--hidden": !C.value,
        "su-float-button-container--has-slot": i.default,
        "su-float-button-container--disabled": e.disabled
      }
    ]), _ = computed(() => [
      "su-float-button",
      `su-float-button--${e.size}`,
      {
        "su-float-button--has-badge": e.badge,
        "su-float-button--has-tooltip": e.showTooltip && e.label
      }
    ]), $ = computed(() => [
      "su-float-button-tooltip",
      `su-float-button-tooltip--${e.tooltipPosition}`,
      `su-float-button-tooltip--in-${e.position}`
    ]), V = computed(() => {
      if (!e.href) return {};
      const b = {
        href: e.href
      };
      return e.target && (b.target = e.target), e.rel && (b.rel = e.rel), e.target === "_blank" && !e.rel && (b.rel = "noopener noreferrer"), b;
    }), p = () => {
      if (!e.hideOnScroll) return;
      const b = window.scrollY;
      b > c.value && b > 100 ? C.value = false : C.value = true, c.value = b;
    }, K = (b) => {
      e.disabled || e.loading || h2("click", b);
    }, g = (b) => {
      e.showTooltip && e.label && (I.value = true), h2("focus", b);
    }, R = (b) => {
      I.value = false, h2("blur", b);
    }, M = () => {
      e.showTooltip && e.label && !e.disabled && (I.value = true);
    }, k = () => {
      I.value = false;
    };
    return onMounted(() => {
      e.hideOnScroll && window.addEventListener("scroll", p, { passive: true });
    }), onUnmounted(() => {
      e.hideOnScroll && window.removeEventListener("scroll", p);
    }), l({
      focus: () => {
        var b;
        (b = B.value) == null || b.focus();
      },
      floatButtonRef: B
    }), (b, Z) => (openBlock(), createElementBlock("div", {
      class: normalizeClass(w.value),
      style: normalizeStyle(L.value)
    }, [
      b.$slots.default ? (openBlock(), createElementBlock("div", {
        key: 0,
        class: normalizeClass(["su-float-button-slot", `su-float-button-slot--${b.position}`])
      }, [
        renderSlot(b.$slots, "default")
      ], 2)) : createCommentVNode("", true),
      createBaseVNode("div", gt, [
        b.badge ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: "su-float-button-badge",
          "aria-label": `Badge: ${b.badge}`
        }, toDisplayString(b.badge), 9, kt)) : createCommentVNode("", true),
        (openBlock(), createElementBlock("div", {
          key: 1,
          class: normalizeClass($.value),
          role: "tooltip",
          id: `${b.$attrs.id || "float-button"}-tooltip`
        }, [
          createTextVNode(toDisplayString(b.label) + " ", 1),
          Z[0] || (Z[0] = createBaseVNode("div", { class: "su-float-button-tooltip-arrow" }, null, -1))
        ], 10, wt)),
        (openBlock(), createBlock(resolveDynamicComponent(b.href ? De : qe), mergeProps({
          ref_key: "floatButtonRef",
          ref: B,
          class: _.value,
          variant: b.variant,
          size: b.size,
          icon: b.icon,
          iconDisplay: "only",
          disabled: b.disabled,
          loading: b.loading,
          "aria-label": b.label || b.ariaLabel,
          "aria-describedby": I.value && b.label ? `${b.$attrs.id || "float-button"}-tooltip` : b.ariaDescribedBy
        }, b.href ? V.value : {}, {
          label: "test",
          onClick: K,
          onFocus: g,
          onBlur: R,
          onMouseenter: M,
          onMouseleave: k
        }), null, 16, ["class", "variant", "size", "icon", "disabled", "loading", "aria-label", "aria-describedby"]))
      ])
    ], 6));
  }
});
var Lt = {
  install(v, l = {}) {
    const a = l.prefix || "Su", e = document.documentElement;
    if (typeof document < "u") {
      if (l.buttonRadius && e.style.setProperty("--su-button-default-radius", `var(--su-border-radius-${l.buttonRadius})`), l.buttonVariant) {
        const i = {
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
        i && (e.style.setProperty("--su-button-variant-primary-bg", i.bg), e.style.setProperty("--su-button-variant-primary-color", i.color), e.style.setProperty("--su-button-variant-primary-border", i.border), e.style.setProperty("--su-button-variant-primary-hover-bg", i.hoverBg), e.style.setProperty("--su-button-variant-primary-hover-shadow", i.hoverShadow));
      }
      if (l.buttonSize) {
        const i = {
          sm: "sm",
          md: "md",
          lg: "lg"
        }[l.buttonSize];
        i && (e.style.setProperty("--su-button-size-md-padding", `var(--su-button-size-${i}-padding)`), e.style.setProperty("--su-button-size-md-font-size", `var(--su-button-size-${i}-font-size)`), e.style.setProperty("--su-button-size-md-line-height", `var(--su-button-size-${i}-line-height)`), e.style.setProperty("--su-button-size-md-min-height", `var(--su-button-size-${i}-min-height)`), e.style.setProperty("--su-button-size-md-icon-only-padding", `var(--su-button-size-${i}-icon-only-padding)`), e.style.setProperty("--su-button-size-md-icon-only-width", `var(--su-button-size-${i}-icon-only-width)`));
      }
    }
    if (l.linkVariant) {
      const i = {
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
      i && (e.style.setProperty("--su-link-variant-default-color", i.color), e.style.setProperty("--su-link-variant-default-hover-color", i.hoverColor), e.style.setProperty("--su-link-variant-default-active-color", i.activeColor));
    }
    if (l.linkSize) {
      const i = {
        sm: "sm",
        md: "md",
        lg: "lg"
      }[l.linkSize];
      i && (e.style.setProperty("--su-link-size-md-font-size", `var(--su-link-size-${i}-font-size)`), e.style.setProperty("--su-link-size-md-line-height", `var(--su-link-size-${i}-line-height)`), e.style.setProperty("--su-link-size-md-padding", `var(--su-link-size-${i}-padding)`), e.style.setProperty("--su-link-size-md-icon-size", `var(--su-link-size-${i}-icon-size)`), e.style.setProperty("--su-link-size-md-icon-only-padding", `var(--su-link-size-${i}-icon-only-padding)`), e.style.setProperty("--su-link-size-md-icon-only-size", `var(--su-link-size-${i}-icon-only-size)`));
    }
    l.linkUnderline && e.style.setProperty("--su-link-default-underline", l.linkUnderline), v.component(`${a}FormField`, ve), v.component(`${a}Button`, qe), v.component(`${a}Password`, La), v.component(`${a}ButtonsGroup`, za), v.component(`${a}Link`, De), v.component(`${a}LinksGroup`, Ia), v.component(`${a}Input`, Me), v.component(`${a}SelectBox`, Ae), v.component(`${a}RadioGroup`, Pe), v.component(`${a}CheckboxGroup`, Te), v.component(`${a}Switch`, Ee), v.component(`${a}FileUpload`, He), v.component(`${a}Textarea`, Ke), v.component(`${a}Slider`, Oe), v.component(`${a}FormFields`, yt), v.component(`${a}FloatButton`, $t);
  }
};
export {
  qe as Button,
  za as ButtonsGroup,
  Te as CheckboxGroup,
  He as FileUpload,
  $t as FloatButton,
  ve as FormField,
  yt as FormFields,
  Me as Input,
  De as Link,
  Ia as LinksGroup,
  La as Password,
  Pe as RadioGroup,
  Ae as SelectBox,
  Oe as Slider,
  Ee as Switch,
  Ke as Textarea,
  Bt as accessibility,
  Lt as default
};
//# sourceMappingURL=@surgeup_ds-vue.js.map
