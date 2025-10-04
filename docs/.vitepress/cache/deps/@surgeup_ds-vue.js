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
var We = { class: "su-form-field-wrapper" };
var Ye = ["for"];
var Xe = {
  key: 0,
  class: "su-indicator-required",
  "aria-label": "requis"
};
var Qe = ["id"];
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
  setup(p) {
    const r = p, a = computed(() => r.message ? `${r.fieldId}-message` : void 0), e = computed(() => {
      const k = {};
      return r.state === "error" ? k["aria-live"] = "assertive" : (r.state === "success" || r.state === "warning") && (k["aria-live"] = "polite"), k;
    }), h2 = computed(() => [
      "su-form-field-message",
      `su-form-field-message--${r.state}`
    ]), n = computed(() => [
      "su-form-field-label",
      {
        "su-form-field-label--required": r.required,
        "su-form-field-label--disabled": r.disabled
      }
    ]);
    return (k, C) => (openBlock(), createElementBlock("div", We, [
      k.label ? (openBlock(), createElementBlock("label", {
        key: 0,
        for: k.fieldId,
        class: normalizeClass(n.value)
      }, [
        createTextVNode(toDisplayString(k.label) + " ", 1),
        k.required ? (openBlock(), createElementBlock("span", Xe, "*")) : createCommentVNode("", true)
      ], 10, Ye)) : createCommentVNode("", true),
      renderSlot(k.$slots, "default", {
        fieldId: k.fieldId,
        messageId: a.value
      }),
      k.message ? (openBlock(), createElementBlock("div", mergeProps({
        key: 1,
        id: a.value,
        class: h2.value
      }, e.value), toDisplayString(k.message), 17, Qe)) : createCommentVNode("", true)
    ]));
  }
});
var Je = ["disabled", "tabindex"];
var ea = {
  key: 0,
  class: "su-button__spinner"
};
var aa = {
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
  setup(p, { emit: r }) {
    const a = p, e = r, h2 = computed(() => [
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
    ]), n = computed(() => !(a.icon && a.iconDisplay === "only")), k = (b) => {
      a.disabled || a.loading || e("click", b);
    }, C = (b) => {
      (b.key === "Enter" || b.key === " ") && (b.preventDefault(), !a.disabled && !a.loading && e("click", b)), e("keydown", b);
    }, x = (b) => {
      e("focus", b);
    }, u = (b) => {
      e("blur", b);
    }, D = computed(() => {
      const b = {};
      return a.ariaLabel && (b["aria-label"] = a.ariaLabel), a.ariaDescribedBy && (b["aria-describedby"] = a.ariaDescribedBy), a.ariaExpanded !== void 0 && (b["aria-expanded"] = a.ariaExpanded), a.ariaPressed !== void 0 && (b["aria-pressed"] = a.ariaPressed), a.role && (b.role = a.role), a.loading && (b["aria-busy"] = "true", b["aria-live"] = "polite"), a.disabled && (b["aria-disabled"] = "true"), a.icon && a.iconDisplay === "only" && !a.ariaLabel && console.warn('Button with icon and iconDisplay="only" should have an ariaLabel for accessibility'), b;
    });
    return (b, I) => (openBlock(), createElementBlock("button", mergeProps({
      class: h2.value,
      disabled: b.disabled || b.loading,
      tabindex: b.disabled ? -1 : b.tabIndex
    }, D.value, {
      onClick: k,
      onKeydown: C,
      onFocus: x,
      onBlur: u
    }), [
      b.loading ? (openBlock(), createElementBlock("span", ea, [...I[0] || (I[0] = [
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
        n.value ? (openBlock(), createElementBlock("span", aa, [
          renderSlot(b.$slots, "default")
        ])) : createCommentVNode("", true)
      ], 64))
    ], 16, Je));
  }
});
function sa(p, r) {
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
function ta(p, r) {
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
function Le(p, r) {
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
function la(p, r) {
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
function ia(p, r) {
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
function ra(p, r) {
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
function oa(p, r) {
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
function na(p, r) {
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
function ua(p, r) {
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
function da(p, r) {
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
function ca(p, r) {
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
function ze(p, r) {
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
var fa = ["dir"];
var pa = ["tabindex", "onKeydown"];
var va = ["tabindex", "onKeydown"];
var ba = ["id", "type", "value", "placeholder", "disabled", "readonly", "required", "aria-describedby"];
var ha = ["tabindex", "onKeydown"];
var ma = ["tabindex", "onKeydown"];
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
  setup(p, { expose: r, emit: a }) {
    const e = p, h2 = useModel(p, "modelValue"), n = a, k = useAttrs(), C = ref(), x = "input-" + useId(), u = computed(() => k.id || x), D = computed(() => typeof k.onPrefixClick == "function"), b = computed(() => typeof k.onPrefixIconClick == "function"), I = computed(() => typeof k.onSuffixClick == "function"), y = computed(() => typeof k.onSuffixIconClick == "function"), V = computed(() => [
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
    ]), E = computed(() => {
      const m = {};
      return e.ariaLabel && (m["aria-label"] = e.ariaLabel), e.ariaInvalid !== void 0 && (m["aria-invalid"] = e.ariaInvalid), e.ariaRequired !== void 0 && (m["aria-required"] = e.ariaRequired), e.required && (m["aria-required"] = "true"), e.state === "error" && (m["aria-invalid"] = "true"), m;
    }), $ = computed(() => {
      const m = {};
      return e.autocomplete && (m.autocomplete = e.autocomplete), e.min !== void 0 && (m.min = e.min), e.max !== void 0 && (m.max = e.max), e.step !== void 0 && (m.step = e.step), e.minLength !== void 0 && (m.minlength = e.minLength), e.maxLength !== void 0 && (m.maxlength = e.maxLength), e.pattern && (m.pattern = e.pattern), m;
    }), F = (m) => {
      const W = m.target;
      h2.value = e.type === "number" ? Number(W.value) : W.value, n("input", m);
    }, g = (m) => {
      n("change", m);
    }, d = (m) => {
      n("focus", m);
    }, B = (m) => {
      n("blur", m);
    }, w = (m) => {
      n("keydown", m);
    }, M = (m) => {
      n("keyup", m);
    }, N = (m) => {
      e.disabled || e.readonly || n("prefix-click", m);
    }, ie = (m) => {
      e.disabled || e.readonly || n("prefix-icon-click", m);
    }, ee = (m) => {
      e.disabled || e.readonly || n("suffix-click", m);
    }, se = (m) => {
      e.disabled || e.readonly || n("suffix-icon-click", m);
    };
    return r({
      focus: () => {
        var m;
        (m = C.value) == null || m.focus();
      },
      select: () => {
        var m;
        (m = C.value) == null || m.select();
      },
      inputRef: C
    }), (m, W) => (openBlock(), createBlock(ye, {
      fieldId: u.value,
      label: m.label,
      message: m.message,
      state: m.state,
      required: m.required,
      disabled: m.disabled
    }, {
      default: withCtx(({ fieldId: re, messageId: be }) => [
        createBaseVNode("div", {
          class: normalizeClass(V.value),
          dir: m.dir
        }, [
          m.prefixIcon ? (openBlock(), createElementBlock("div", {
            key: 0,
            class: normalizeClass(["su-input-prefix su-input-prefix--icon", { "su-input-prefix--clickable": b.value }]),
            tabindex: b.value && !m.disabled && !m.readonly ? 0 : -1,
            onClick: ie,
            onKeydown: [
              withKeys(withModifiers(ie, ["prevent"]), ["enter"]),
              withKeys(withModifiers(ie, ["prevent"]), ["space"])
            ]
          }, [
            (openBlock(), createBlock(resolveDynamicComponent(m.prefixIcon), {
              class: "su-input-icon",
              "aria-hidden": "true"
            }))
          ], 42, pa)) : m.prefix ? (openBlock(), createElementBlock("div", {
            key: 1,
            class: normalizeClass(["su-input-prefix su-input-prefix--text", { "su-input-prefix--clickable": D.value }]),
            tabindex: D.value && !m.disabled && !m.readonly ? 0 : -1,
            onClick: N,
            onKeydown: [
              withKeys(withModifiers(N, ["prevent"]), ["enter"]),
              withKeys(withModifiers(N, ["prevent"]), ["space"])
            ]
          }, toDisplayString(m.prefix), 43, va)) : createCommentVNode("", true),
          createBaseVNode("input", mergeProps({
            ref_key: "inputRef",
            ref: C,
            id: re,
            class: f.value,
            type: m.type,
            value: h2.value,
            placeholder: m.placeholder,
            disabled: m.disabled,
            readonly: m.readonly,
            required: m.required,
            "aria-describedby": be
          }, { ...$.value, ...E.value }, {
            onInput: F,
            onChange: g,
            onFocus: d,
            onBlur: B,
            onKeydown: w,
            onKeyup: M
          }), null, 16, ba),
          m.suffix ? (openBlock(), createElementBlock("div", {
            key: 2,
            class: normalizeClass(["su-input-suffix su-input-suffix--text", { "su-input-suffix--clickable": I.value }]),
            tabindex: I.value && !m.disabled && !m.readonly ? 0 : -1,
            onClick: ee,
            onKeydown: [
              withKeys(withModifiers(ee, ["prevent"]), ["enter"]),
              withKeys(withModifiers(ee, ["prevent"]), ["space"])
            ]
          }, toDisplayString(m.suffix), 43, ha)) : m.suffixIcon ? (openBlock(), createElementBlock("div", {
            key: 3,
            class: normalizeClass(["su-input-suffix su-input-suffix--icon", { "su-input-suffix--clickable": y.value }]),
            tabindex: y.value && !m.disabled && !m.readonly ? 0 : -1,
            onClick: se,
            onKeydown: [
              withKeys(withModifiers(se, ["prevent"]), ["enter"]),
              withKeys(withModifiers(se, ["prevent"]), ["space"])
            ]
          }, [
            (openBlock(), createBlock(resolveDynamicComponent(m.suffixIcon), {
              class: "su-input-icon",
              "aria-hidden": "true"
            }))
          ], 42, ma)) : createCommentVNode("", true)
        ], 10, fa)
      ]),
      _: 1
    }, 8, ["fieldId", "label", "message", "state", "required", "disabled"]));
  }
});
var ya = { class: "su-password-wrapper" };
var ga = ["aria-valuenow", "aria-label"];
var ka = { class: "su-password-strength-label" };
var $a = {
  key: 0,
  class: "su-password-strength-text su-password-strength-text--weak"
};
var wa = {
  key: 1,
  class: "su-password-strength-text su-password-strength-text--fair"
};
var Ba = {
  key: 2,
  class: "su-password-strength-text su-password-strength-text--good"
};
var Ca = {
  key: 3,
  class: "su-password-strength-text su-password-strength-text--strong"
};
var xa = {
  class: "sr-only",
  "aria-live": "polite",
  "aria-atomic": true
};
var La = { key: 0 };
var za = defineComponent({
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
  setup(p, { emit: r }) {
    const a = p, e = useModel(p, "modelValue"), h2 = r, n = ref(false), k = computed(() => n.value ? "text" : "password"), C = computed(() => n.value ? na : ua), x = (d) => {
      const B = a.rules || {}, w = d.length, M = (d.match(/[A-Z]/g) || []).length, N = (d.match(/[a-z]/g) || []).length, ie = (d.match(/[0-9]/g) || []).length, ee = (d.match(/[^A-Za-z0-9]/g) || []).length, se = {
        length: {
          required: B.minLength || 0,
          current: w,
          satisfied: w >= (B.minLength || 0)
        },
        uppercase: {
          required: B.minUppercase || 0,
          current: M,
          satisfied: M >= (B.minUppercase || 0)
        },
        lowercase: {
          required: B.minLowercase || 0,
          current: N,
          satisfied: N >= (B.minLowercase || 0)
        },
        digits: {
          required: B.minDigits || 0,
          current: ie,
          satisfied: ie >= (B.minDigits || 0)
        },
        specialChars: {
          required: B.minSpecialChars || 0,
          current: ee,
          satisfied: ee >= (B.minSpecialChars || 0)
        }
      }, te = [], z = [];
      Object.entries(se).forEach(([fe, ge]) => {
        ge.required > 0 && (ge.satisfied ? te.push(fe) : z.push(fe));
      });
      const m = Object.values(se).filter((fe) => fe.required > 0).length, W = te.length, re = m > 0 ? Math.round(W / m * 100) : 100;
      return {
        isValid: z.length === 0 && d.length > 0,
        score: re,
        satisfied: te,
        unsatisfied: z,
        details: se
      };
    }, u = computed(() => x(e.value || "")), D = computed(() => a.state !== "default" ? a.state : e.value ? u.value.isValid ? "success" : u.value.score < 25 ? "error" : u.value.score < 75 ? "warning" : "default" : "default"), b = computed(() => [
      "su-password-progress",
      `su-password-progress--${D.value}`,
      {
        "su-password-progress--empty": !e.value,
        "su-password-progress--weak": u.value.score < 25,
        "su-password-progress--fair": u.value.score >= 25 && u.value.score < 50,
        "su-password-progress--good": u.value.score >= 50 && u.value.score < 75,
        "su-password-progress--strong": u.value.score >= 75
      }
    ]), I = () => {
      a.disabled || a.readonly || (n.value = !n.value, h2("toggle-visibility", n.value));
    }, y = () => {
      I();
    }, V = (d) => {
      h2("input", d);
    }, f = (d) => {
      h2("change", d);
    }, E = (d) => {
      h2("focus", d);
    }, $ = (d) => {
      h2("blur", d);
    }, F = (d) => {
      h2("keydown", d);
    }, g = (d) => {
      h2("keyup", d);
    };
    return watch(u, (d) => {
      h2("validation", d);
    }, { immediate: true }), computed(() => n.value ? "Masquer le mot de passe" : "Afficher le mot de passe"), (d, B) => (openBlock(), createElementBlock("div", ya, [
      createVNode(Se, {
        modelValue: e.value,
        "onUpdate:modelValue": B[0] || (B[0] = (w) => e.value = w),
        type: k.value,
        size: d.size,
        state: D.value,
        disabled: d.disabled,
        readonly: d.readonly,
        required: d.required,
        placeholder: d.placeholder,
        prefix: d.prefix,
        prefixIcon: d.prefixIcon,
        suffixIcon: d.showToggle ? C.value : void 0,
        textAlign: d.textAlign,
        dir: d.dir,
        label: d.label,
        message: d.message,
        ariaLabel: d.ariaLabel,
        ariaDescribedBy: d.ariaDescribedBy,
        ariaInvalid: d.ariaInvalid,
        ariaRequired: d.ariaRequired,
        autocomplete: d.autocomplete,
        minLength: d.minLength,
        maxLength: d.maxLength,
        pattern: d.pattern,
        onInput: V,
        onChange: f,
        onFocus: E,
        onBlur: $,
        onKeydown: F,
        onKeyup: g,
        onSuffixIconClick: y
      }, createSlots({ _: 2 }, [
        d.$slots.default ? {
          name: "message",
          fn: withCtx(() => [
            renderSlot(d.$slots, "default", {
              validation: u.value,
              isValid: u.value.isValid,
              score: u.value.score,
              satisfied: u.value.satisfied,
              unsatisfied: u.value.unsatisfied,
              details: u.value.details
            })
          ]),
          key: "0"
        } : void 0
      ]), 1032, ["modelValue", "type", "size", "state", "disabled", "readonly", "required", "placeholder", "prefix", "prefixIcon", "suffixIcon", "textAlign", "dir", "label", "message", "ariaLabel", "ariaDescribedBy", "ariaInvalid", "ariaRequired", "autocomplete", "minLength", "maxLength", "pattern"]),
      d.showProgress && e.value ? (openBlock(), createElementBlock("div", {
        key: 0,
        class: "su-password-progress-container",
        role: "progressbar",
        "aria-valuenow": u.value.score,
        "aria-valuemin": "0",
        "aria-valuemax": "100",
        "aria-label": `Force du mot de passe : ${u.value.score}%`
      }, [
        createBaseVNode("div", {
          class: normalizeClass(b.value),
          style: normalizeStyle({ width: `${u.value.score}%` })
        }, null, 6),
        createBaseVNode("div", ka, [
          u.value.score < 25 ? (openBlock(), createElementBlock("span", $a, " Faible ")) : u.value.score < 50 ? (openBlock(), createElementBlock("span", wa, " Moyen ")) : u.value.score < 75 ? (openBlock(), createElementBlock("span", Ba, " Bon ")) : (openBlock(), createElementBlock("span", Ca, " Fort "))
        ])
      ], 8, ga)) : createCommentVNode("", true),
      createBaseVNode("div", xa, [
        e.value ? (openBlock(), createElementBlock("span", La, " Mot de passe " + toDisplayString(u.value.isValid ? "valide" : "invalide") + ". Force : " + toDisplayString(u.value.score) + "%. " + toDisplayString(u.value.satisfied.length) + " règle(s) respectée(s), " + toDisplayString(u.value.unsatisfied.length) + " règle(s) non respectée(s). ", 1)) : createCommentVNode("", true)
      ])
    ]));
  }
});
var Ia = defineComponent({
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
    const r = p, a = useSlots(), e = computed(() => [
      "su-buttons-group",
      `su-buttons-group--gap-${r.gap}`,
      {
        "su-buttons-group--connected": r.gap === "none"
      }
    ]), h2 = computed(() => {
      var x;
      if (!(a != null && a.default)) return [];
      const k = ((x = a == null ? void 0 : a.default) == null ? void 0 : x.call(a)) ?? [], C = [];
      for (const u of k)
        if (u.type === Ve) {
          const D = { ...u.props };
          if (r.size && (D.size = r.size), r.variant && (D.variant = r.variant), r.gap === "none") {
            const b = D.class || "";
            D.class = `${b} su-buttons-group__button`.trim();
          }
          C.push(h(u.type, D, u == null ? void 0 : u.children));
        } else {
          if (u.type === Comment || u.type === Text || u.type === Fragment)
            continue;
          console.warn("ButtonsGroup expects only Button components as children. Found:", u.type);
        }
      return C;
    }), n = computed(() => {
      const k = {};
      return r.ariaLabel && (k["aria-label"] = r.ariaLabel), r.ariaDescribedBy && (k["aria-describedby"] = r.ariaDescribedBy), r.role && (k.role = r.role), k;
    });
    return (k, C) => (openBlock(), createElementBlock("div", mergeProps({ class: e.value }, n.value), [
      (openBlock(true), createElementBlock(Fragment, null, renderList(h2.value, (x, u) => (openBlock(), createBlock(resolveDynamicComponent(x), { key: u }))), 128))
    ], 16));
  }
});
var _a = {
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
  setup(p, { emit: r }) {
    const a = p, e = r, h2 = computed(() => a.to !== void 0), n = computed(() => a.external || a.href && (a.href.startsWith("http") || a.href.startsWith("//") || a.target === "_blank")), k = computed(() => {
      const y = {};
      return h2.value || (y.href = a.href, n.value ? (y.target = a.target || "_blank", y.rel = a.rel || "noopener noreferrer") : (a.target && (y.target = a.target), a.rel && (y.rel = a.rel))), a.ariaLabel && (y["aria-label"] = a.ariaLabel), a.ariaDescribedBy && (y["aria-describedby"] = a.ariaDescribedBy), a.role && (y.role = a.role), a.disabled ? (y["aria-disabled"] = "true", y.tabindex = -1) : y.tabindex = a.tabIndex, y;
    }), C = computed(() => [
      "su-link",
      `su-link--${a.variant}`,
      `su-link--${a.size}`,
      `su-link--underline-${a.underline}`,
      {
        "su-link--disabled": a.disabled,
        "su-link--external": n.value,
        "su-link--icon-only": a.icon && a.iconDisplay === "only",
        "su-link--icon-right": a.icon && a.iconDisplay === "right"
      }
    ]), x = computed(() => !(a.icon && a.iconDisplay === "only")), u = (y) => {
      if (a.disabled) {
        y.preventDefault();
        return;
      }
      e("click", y);
    }, D = (y) => {
      if ((y.key === "Enter" || y.key === " ") && a.disabled) {
        y.preventDefault();
        return;
      }
      e("keydown", y);
    }, b = (y) => {
      e("focus", y);
    }, I = (y) => {
      e("blur", y);
    };
    return a.icon && a.iconDisplay === "only" && !a.ariaLabel && console.warn('Link with icon and iconDisplay="only" should have an ariaLabel for accessibility'), (y, V) => (openBlock(), createBlock(resolveDynamicComponent(h2.value ? "router-link" : "a"), mergeProps({ class: C.value }, h2.value ? { to: y.to, ...k.value } : k.value, {
      onClick: u,
      onKeydown: D,
      onFocus: b,
      onBlur: I
    }), {
      default: withCtx(() => [
        y.icon ? (openBlock(), createBlock(resolveDynamicComponent(y.icon), {
          key: 0,
          class: "su-link__icon",
          "aria-hidden": "true"
        })) : createCommentVNode("", true),
        x.value ? (openBlock(), createElementBlock("span", _a, [
          renderSlot(y.$slots, "default")
        ])) : createCommentVNode("", true),
        n.value && !y.icon && x.value ? (openBlock(), createBlock(unref(sa), {
          key: 2,
          class: "su-link__external-icon",
          "aria-hidden": "true"
        })) : createCommentVNode("", true)
      ]),
      _: 3
    }, 16, ["class"]));
  }
});
var Da = defineComponent({
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
    const r = p, a = useSlots(), e = computed(() => [
      "su-links-group",
      `su-links-group--gap-${r.gap}`,
      `su-links-group--${r.direction}`,
      {
        "su-links-group--connected": r.gap === "none"
      }
    ]), h2 = computed(() => {
      var x;
      if (!(a != null && a.default)) return [];
      const k = ((x = a == null ? void 0 : a.default) == null ? void 0 : x.call(a)) ?? [], C = [];
      for (const u of k)
        if (u.type === Re) {
          const D = { ...u.props };
          if (r.size && (D.size = r.size), r.variant && (D.variant = r.variant), r.underline && (D.underline = r.underline), r.gap === "none") {
            const b = D.class || "";
            D.class = `${b} su-links-group__link`.trim();
          }
          C.push(h(u.type, D, u == null ? void 0 : u.children));
        } else {
          if (u.type === Comment || u.type === Text || u.type === Fragment)
            continue;
          console.warn("LinksGroup expects only Link components as children. Found:", u.type);
        }
      return C;
    }), n = computed(() => {
      const k = {};
      return r.ariaLabel && (k["aria-label"] = r.ariaLabel), r.ariaDescribedBy && (k["aria-describedby"] = r.ariaDescribedBy), r.role && (k.role = r.role), k;
    });
    return (k, C) => (openBlock(), createElementBlock("div", mergeProps({ class: e.value }, n.value), [
      (openBlock(true), createElementBlock(Fragment, null, renderList(h2.value, (x, u) => (openBlock(), createBlock(resolveDynamicComponent(x), { key: u }))), 128))
    ], 16));
  }
});
var Ma = 0;
function qa(p = "su") {
  return `${p}-${++Ma}-${Date.now().toString(36)}`;
}
function Va(p) {
  return [
    "button:not([disabled])",
    "input:not([disabled])",
    "select:not([disabled])",
    "textarea:not([disabled])",
    "a[href]",
    '[tabindex]:not([tabindex="-1"])'
  ].some((a) => p.matches(a));
}
function Ae(p) {
  const r = p.querySelectorAll(
    'button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), a[href], [tabindex]:not([tabindex="-1"])'
  ), a = r[0], e = r[r.length - 1], h2 = (n) => {
    n.key === "Tab" && (n.shiftKey ? document.activeElement === a && (n.preventDefault(), e.focus()) : document.activeElement === e && (n.preventDefault(), a.focus()));
  };
  return p.addEventListener("keydown", h2), a == null || a.focus(), () => {
    p.removeEventListener("keydown", h2);
  };
}
function oe(p, r = "polite") {
  const a = document.createElement("div");
  a.setAttribute("aria-live", r), a.setAttribute("aria-atomic", "true"), a.className = "sr-only", a.textContent = p, document.body.appendChild(a), setTimeout(() => {
    document.body.removeChild(a);
  }, 1e3);
}
function Sa() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
function Ra() {
  return window.matchMedia("(prefers-contrast: high)").matches;
}
function Aa(p, r) {
  return 4.5;
}
function Fa(p, r = "AA") {
  return p >= (r === "AAA" ? 7 : 4.5);
}
var Jt = Object.freeze(Object.defineProperty({
  __proto__: null,
  announceToScreenReader: oe,
  generateId: qa,
  getContrastRatio: Aa,
  isContrastValid: Fa,
  isFocusable: Va,
  prefersHighContrast: Ra,
  prefersReducedMotion: Sa,
  trapFocus: Ae
}, Symbol.toStringTag, { value: "Module" }));
var Pa = ["dir"];
var Ea = ["id", "tabindex", "aria-describedby"];
var Ta = { class: "su-select-content" };
var Ha = {
  key: 0,
  class: "su-select-tags"
};
var Ka = { class: "su-select-tag-label" };
var Oa = ["aria-label", "onClick"];
var ja = {
  key: 0,
  class: "su-select-tag su-select-tag--more"
};
var Ga = {
  key: 1,
  class: "su-select-display"
};
var Ua = { class: "su-select-display-text" };
var Za = { class: "su-select-actions" };
var Na = {
  key: 0,
  class: "su-select-spinner"
};
var Wa = ["id", "aria-multiselectable"];
var Ya = {
  key: 0,
  class: "su-select-search"
};
var Xa = { class: "su-select-search-container" };
var Qa = ["placeholder", "value"];
var Ja = ["aria-label"];
var es = ["aria-selected", "aria-disabled", "onClick", "onMouseenter"];
var as = {
  key: 0,
  class: "su-select-option-checkbox"
};
var ss = { class: "su-select-option-content" };
var ts = { class: "su-select-option-label" };
var ls = {
  key: 0,
  class: "su-select-option-description"
};
var is = {
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
  setup(p, { expose: r, emit: a }) {
    const e = p, h2 = useModel(p, "modelValue"), n = a, k = useAttrs(), C = "selectbox-" + useId(), x = ref(), u = ref(), D = ref(), b = ref(), I = ref(false), y = ref(""), V = ref(-1), f = ref(null), E = computed(() => k.id || C), $ = computed(() => `${E.value}-listbox`), F = computed(() => e.groups && e.groups.length > 0 ? e.groups.flatMap(
      (v) => v.options.map((l) => ({ ...l, group: v.label }))
    ) : e.options || []), g = computed(() => {
      if (!e.searchable || !y.value)
        return F.value;
      const v = y.value.toLowerCase();
      return F.value.filter(
        (l) => l.label.toLowerCase().includes(v) || l.description && l.description.toLowerCase().includes(v)
      );
    }), d = computed(() => {
      const v = {};
      return g.value.forEach((l) => {
        const L = l.group || "";
        v[L] || (v[L] = []), v[L].push(l);
      }), v;
    }), B = computed({
      get() {
        return e.multiple ? Array.isArray(h2.value) ? h2.value : h2.value !== void 0 && h2.value !== null ? [h2.value] : [] : h2.value;
      },
      set(v) {
        h2.value = v, n("change", v);
      }
    }), w = computed(() => {
      if (e.multiple) {
        const v = B.value;
        return v ? F.value.filter((l) => v.includes(l.value)) : [];
      } else {
        const v = B.value;
        return v != null ? F.value.filter((l) => l.value === v) : [];
      }
    }), M = computed(() => {
      var v;
      return w.value.length === 0 ? e.placeholder : e.multiple ? w.value.length === 1 ? w.value[0].label : `${w.value.length} éléments sélectionnés` : ((v = w.value[0]) == null ? void 0 : v.label) || e.placeholder;
    }), N = computed(() => [
      "su-select-container",
      `su-select-container--${e.size}`,
      `su-select-container--${e.state}`,
      {
        "su-select-container--disabled": e.disabled,
        "su-select-container--readonly": e.readonly,
        "su-select-container--open": I.value,
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
        "su-select-trigger--open": I.value,
        "su-select-trigger--has-value": w.value.length > 0,
        "su-select-trigger--placeholder": w.value.length === 0
      }
    ]), ee = computed(() => {
      const v = {
        "aria-haspopup": "listbox",
        "aria-expanded": I.value,
        "aria-controls": I.value ? $.value : void 0,
        role: "combobox"
      };
      return e.ariaLabel && (v["aria-label"] = e.ariaLabel), e.ariaInvalid !== void 0 && (v["aria-invalid"] = e.ariaInvalid), e.ariaRequired !== void 0 && (v["aria-required"] = e.ariaRequired), e.required && (v["aria-required"] = "true"), e.state === "error" && (v["aria-invalid"] = "true"), e.multiple && (v["aria-multiselectable"] = "true"), v;
    }), se = () => {
      e.disabled || e.readonly || (I.value ? z() : te());
    }, te = async () => {
      e.disabled || e.readonly || (I.value = true, y.value = "", V.value = -1, n("open"), await nextTick(), e.searchable && b.value && b.value.focus(), D.value && (f.value = Ae(D.value)));
    }, z = () => {
      I.value = false, V.value = -1, f.value && (f.value(), f.value = null), n("close"), u.value && u.value.focus();
    }, m = (v) => {
      if (v.disabled) return;
      let l;
      if (e.multiple) {
        const A = B.value || [];
        if (A.includes(v.value))
          l = A.filter((q) => q !== v.value);
        else {
          if (e.maxSelectedItems && A.length >= e.maxSelectedItems) {
            oe(`Maximum ${e.maxSelectedItems} éléments sélectionnables`);
            return;
          }
          l = [...A, v.value];
        }
      } else
        l = v.value;
      B.value = l;
      const L = e.multiple && B.value.includes(v.value) ? "désélectionné" : "sélectionné";
      oe(`${v.label} ${L}`), !e.multiple && e.closeOnSelect && z();
    }, W = (v) => {
      v.stopPropagation();
      const l = e.multiple ? [] : void 0;
      B.value = l, oe("Sélection effacée");
    }, re = (v, l) => {
      if (l.stopPropagation(), e.multiple) {
        const A = (B.value || []).filter((K) => K !== v.value);
        B.value = A, oe(`${v.label} retiré de la sélection`);
      }
    }, be = (v) => {
      const l = v.target;
      y.value = l.value, V.value = -1, n("search", y.value);
    }, fe = (v) => {
      switch (v.key) {
        case "Enter":
        case " ":
          if (v.preventDefault(), !I.value)
            te();
          else if (V.value >= 0) {
            const l = g.value[V.value];
            l && m(l);
          }
          break;
        case "Escape":
          v.preventDefault(), z();
          break;
        case "ArrowDown":
          v.preventDefault(), I.value ? V.value = Math.min(V.value + 1, g.value.length - 1) : te();
          break;
        case "ArrowUp":
          v.preventDefault(), I.value && (V.value = Math.max(V.value - 1, -1));
          break;
        case "Home":
          I.value && (v.preventDefault(), V.value = 0);
          break;
        case "End":
          I.value && (v.preventDefault(), V.value = g.value.length - 1);
          break;
        case "Tab":
          I.value && z();
          break;
      }
    }, ge = (v) => {
      n("focus", v);
    }, c = (v) => {
      setTimeout(() => {
        I.value && x.value && !x.value.contains(document.activeElement) && (z(), n("blur", v));
      }, 0);
    }, H = (v) => {
      I.value && x.value && !x.value.contains(v.target) && z();
    };
    return r({
      focus: () => {
        var v;
        (v = u.value) == null || v.focus();
      },
      open: () => {
        te();
      },
      close: () => {
        z();
      },
      selectRef: x,
      inputRef: u
    }), onMounted(() => {
      document.addEventListener("click", H, { passive: true });
    }), onUnmounted(() => {
      document.removeEventListener("click", H, { passive: true }), f.value && f.value();
    }), watch(h2, () => {
      V.value = -1;
    }), (v, l) => (openBlock(), createBlock(ye, {
      fieldId: E.value,
      label: v.label,
      message: v.message,
      state: v.state,
      required: v.required,
      disabled: v.disabled
    }, {
      default: withCtx(({ fieldId: L, messageId: A }) => {
        var K;
        return [
          createBaseVNode("div", {
            class: "su-select-wrapper",
            dir: v.dir
          }, [
            createBaseVNode("div", {
              ref_key: "selectRef",
              ref: x,
              class: normalizeClass(N.value)
            }, [
              createBaseVNode("div", mergeProps({
                ref_key: "inputRef",
                ref: u,
                id: L,
                class: ie.value,
                tabindex: v.disabled ? -1 : 0
              }, ee.value, {
                "aria-describedby": A,
                onClick: se,
                onKeydown: fe,
                onFocus: ge,
                onBlur: c
              }), [
                createBaseVNode("div", Ta, [
                  v.multiple && w.value.length > 0 ? (openBlock(), createElementBlock("div", Ha, [
                    (openBlock(true), createElementBlock(Fragment, null, renderList(w.value.slice(0, 3), (q) => (openBlock(), createElementBlock("span", {
                      key: q.value,
                      class: "su-select-tag"
                    }, [
                      q.icon ? (openBlock(), createBlock(resolveDynamicComponent(q.icon), {
                        key: 0,
                        class: "su-select-tag-icon",
                        "aria-hidden": "true"
                      })) : createCommentVNode("", true),
                      createBaseVNode("span", Ka, toDisplayString(q.label), 1),
                      createBaseVNode("button", {
                        type: "button",
                        class: "su-select-tag-remove",
                        "aria-label": `Retirer ${q.label}`,
                        onClick: (ae) => re(q, ae)
                      }, [
                        createVNode(unref(ze), { class: "su-select-tag-remove-icon" })
                      ], 8, Oa)
                    ]))), 128)),
                    w.value.length > 3 ? (openBlock(), createElementBlock("span", ja, " +" + toDisplayString(w.value.length - 3), 1)) : createCommentVNode("", true)
                  ])) : (openBlock(), createElementBlock("div", Ga, [
                    (K = w.value[0]) != null && K.icon ? (openBlock(), createBlock(resolveDynamicComponent(w.value[0].icon), {
                      key: 0,
                      class: "su-select-display-icon",
                      "aria-hidden": "true"
                    })) : createCommentVNode("", true),
                    createBaseVNode("span", Ua, toDisplayString(M.value), 1)
                  ]))
                ]),
                createBaseVNode("div", Za, [
                  v.loading ? (openBlock(), createElementBlock("div", Na, [...l[0] || (l[0] = [
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
                  ])])) : v.clearable && w.value.length > 0 && !v.disabled && !v.readonly ? (openBlock(), createElementBlock("button", {
                    key: 1,
                    type: "button",
                    class: "su-select-clear",
                    "aria-label": "Effacer la sélection",
                    onClick: W
                  }, [
                    createVNode(unref(ze), { class: "su-select-clear-icon" })
                  ])) : createCommentVNode("", true),
                  createVNode(unref(la), {
                    class: normalizeClass(["su-select-chevron", { "su-select-chevron--open": I.value }]),
                    "aria-hidden": "true"
                  }, null, 8, ["class"])
                ])
              ], 16, Ea),
              createVNode(Transition, { name: "su-select-dropdown" }, {
                default: withCtx(() => [
                  I.value ? (openBlock(), createElementBlock("div", {
                    key: 0,
                    ref_key: "dropdownRef",
                    ref: D,
                    id: $.value,
                    class: "su-select-dropdown",
                    role: "listbox",
                    "aria-multiselectable": v.multiple
                  }, [
                    v.searchable ? (openBlock(), createElementBlock("div", Ya, [
                      createBaseVNode("div", Xa, [
                        createVNode(unref(da), {
                          class: "su-select-search-icon",
                          "aria-hidden": "true"
                        }),
                        createBaseVNode("input", {
                          ref_key: "searchInputRef",
                          ref: b,
                          type: "text",
                          class: "su-select-search-input",
                          placeholder: v.searchPlaceholder,
                          value: y.value,
                          onInput: be,
                          onKeydown: fe
                        }, null, 40, Qa)
                      ])
                    ])) : createCommentVNode("", true),
                    createBaseVNode("div", {
                      class: "su-select-options",
                      style: normalizeStyle({ maxHeight: v.maxHeight })
                    }, [
                      g.value.length > 0 ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList(d.value, (q, ae) => (openBlock(), createElementBlock(Fragment, { key: ae }, [
                        ae && e.groups && e.groups.length > 0 ? (openBlock(), createElementBlock("div", {
                          key: 0,
                          class: "su-select-group-header",
                          role: "group",
                          "aria-label": ae
                        }, toDisplayString(ae), 9, Ja)) : createCommentVNode("", true),
                        (openBlock(true), createElementBlock(Fragment, null, renderList(q, (G) => (openBlock(), createElementBlock("div", {
                          key: G.value,
                          class: normalizeClass(["su-select-option", {
                            "su-select-option--selected": v.multiple ? B.value.includes(G.value) : B.value === G.value,
                            "su-select-option--disabled": G.disabled,
                            "su-select-option--focused": g.value.indexOf(G) === V.value
                          }]),
                          role: "option",
                          "aria-selected": v.multiple ? B.value.includes(G.value) : B.value === G.value,
                          "aria-disabled": G.disabled,
                          onClick: (Ze) => m(G),
                          onMouseenter: (Ze) => V.value = g.value.indexOf(G)
                        }, [
                          v.multiple ? (openBlock(), createElementBlock("div", as, [
                            createBaseVNode("div", {
                              class: normalizeClass(["su-select-checkbox", {
                                "su-select-checkbox--checked": B.value.includes(G.value)
                              }])
                            }, [
                              B.value.includes(G.value) ? (openBlock(), createBlock(unref(Le), {
                                key: 0,
                                class: "su-select-checkbox-icon",
                                "aria-hidden": "true"
                              })) : createCommentVNode("", true)
                            ], 2)
                          ])) : createCommentVNode("", true),
                          G.icon ? (openBlock(), createBlock(resolveDynamicComponent(G.icon), {
                            key: 1,
                            class: "su-select-option-icon",
                            "aria-hidden": "true"
                          })) : createCommentVNode("", true),
                          createBaseVNode("div", ss, [
                            createBaseVNode("div", ts, toDisplayString(G.label), 1),
                            G.description ? (openBlock(), createElementBlock("div", ls, toDisplayString(G.description), 1)) : createCommentVNode("", true)
                          ]),
                          !v.multiple && B.value === G.value ? (openBlock(), createBlock(unref(Le), {
                            key: 2,
                            class: "su-select-option-check",
                            "aria-hidden": "true"
                          })) : createCommentVNode("", true)
                        ], 42, es))), 128))
                      ], 64))), 128)) : (openBlock(), createElementBlock("div", is, toDisplayString(y.value ? v.noResultsText : v.noOptionsText), 1))
                    ], 4)
                  ], 8, Wa)) : createCommentVNode("", true)
                ]),
                _: 1
              })
            ], 2)
          ], 8, Pa)
        ];
      }),
      _: 1
    }, 8, ["fieldId", "label", "message", "state", "required", "disabled"]));
  }
});
var rs = ["aria-describedby"];
var os = {
  key: 0,
  class: "su-radio-group-before"
};
var ns = ["for"];
var us = ["id", "name", "value", "checked", "disabled", "required", "onChange"];
var ds = { class: "su-radio-content" };
var cs = { class: "su-radio-text" };
var fs = { class: "su-radio-label" };
var ps = {
  key: 0,
  class: "su-radio-description"
};
var vs = {
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
  setup(p, { emit: r }) {
    const a = useModel(p, "modelValue"), e = p, h2 = r, n = useAttrs(), k = "radio-group-" + useId(), C = computed(() => n.id || k), x = computed(() => e.name || k), u = computed(() => [
      "su-radio-group",
      `su-radio-group--${e.size}`,
      `su-radio-group--${e.state}`,
      `su-radio-group--${e.displayType}`,
      `su-radio-group--${e.direction}`,
      {
        "su-radio-group--disabled": e.disabled,
        "su-radio-group--scrollable": e.maxHeight
      }
    ]), D = (f) => [
      "su-radio-option",
      `su-radio-option--${e.size}`,
      `su-radio-option--${e.state}`,
      `su-radio-option--${e.displayType}`,
      {
        "su-radio-option--selected": a.value === f.value,
        "su-radio-option--disabled": f.disabled || e.disabled
      }
    ], b = computed(() => {
      const f = {
        role: "radiogroup"
      };
      if (e.ariaLabel && (f["aria-label"] = e.ariaLabel), e.ariaDescribedBy) {
        const E = [e.ariaDescribedBy].filter(Boolean).join(" ");
        f["aria-describedby"] = E;
      }
      return e.required && (f["aria-required"] = "true"), e.state === "error" && (f["aria-invalid"] = "true"), f;
    }), I = (f) => {
      e.disabled || (a.value = f, h2("change", f));
    }, y = (f) => {
      h2("focus", f);
    }, V = (f) => {
      h2("blur", f);
    };
    return (f, E) => (openBlock(), createBlock(ye, {
      fieldId: C.value,
      label: f.label,
      message: f.message,
      state: f.state,
      required: f.required,
      disabled: f.disabled
    }, {
      default: withCtx(({ fieldId: $, messageId: F }) => [
        createBaseVNode("fieldset", mergeProps({ class: u.value }, b.value, { "aria-describedby": F }), [
          createBaseVNode("div", {
            class: "su-radio-group-options",
            style: normalizeStyle({ maxHeight: f.maxHeight || void 0, overflowY: f.maxHeight ? "auto" : void 0 })
          }, [
            f.$slots.before ? (openBlock(), createElementBlock("div", os, [
              renderSlot(f.$slots, "before")
            ])) : createCommentVNode("", true),
            (openBlock(true), createElementBlock(Fragment, null, renderList(f.options, (g) => (openBlock(), createElementBlock("label", {
              key: g.value,
              class: normalizeClass(D(g)),
              for: `${$}-${g.value}`
            }, [
              createBaseVNode("input", {
                id: `${$}-${g.value}`,
                type: "radio",
                name: x.value,
                value: g.value,
                checked: a.value === g.value,
                disabled: g.disabled || f.disabled,
                required: f.required,
                class: "su-radio-input",
                onChange: (d) => I(g.value),
                onFocus: y,
                onBlur: V
              }, null, 40, us),
              E[0] || (E[0] = createBaseVNode("div", { class: "su-radio-indicator" }, [
                createBaseVNode("div", { class: "su-radio-dot" })
              ], -1)),
              createBaseVNode("div", ds, [
                g.icon ? (openBlock(), createBlock(resolveDynamicComponent(g.icon), {
                  key: 0,
                  class: "su-radio-icon",
                  "aria-hidden": "true"
                })) : createCommentVNode("", true),
                createBaseVNode("div", cs, [
                  createBaseVNode("div", fs, toDisplayString(g.label), 1),
                  g.description ? (openBlock(), createElementBlock("div", ps, toDisplayString(g.description), 1)) : createCommentVNode("", true)
                ])
              ])
            ], 10, ns))), 128))
          ], 4),
          f.$slots.after ? (openBlock(), createElementBlock("div", vs, [
            renderSlot(f.$slots, "after")
          ])) : createCommentVNode("", true)
        ], 16, rs)
      ]),
      _: 3
    }, 8, ["fieldId", "label", "message", "state", "required", "disabled"]));
  }
});
var bs = ["aria-describedby"];
var hs = {
  key: 0,
  class: "su-checkbox-group-before"
};
var ms = ["for"];
var ys = ["id", "value", "checked", "disabled", "required", "onChange"];
var gs = { class: "su-checkbox-content" };
var ks = { class: "su-checkbox-text" };
var $s = { class: "su-checkbox-label" };
var ws = {
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
  setup(p, { emit: r }) {
    const a = p, e = useModel(p, "modelValue"), h2 = r, n = useAttrs(), k = "checkbox-group-" + useId(), C = computed(() => n.id || k), x = computed({
      get() {
        return Array.isArray(e.value) ? e.value : [];
      },
      set($) {
        e.value = $, h2("change", $);
      }
    }), u = computed(() => [
      "su-checkbox-group",
      `su-checkbox-group--${a.size}`,
      `su-checkbox-group--${a.state}`,
      `su-checkbox-group--${a.displayType}`,
      `su-checkbox-group--${a.direction}`,
      {
        "su-checkbox-group--disabled": a.disabled,
        "su-checkbox-group--scrollable": a.maxHeight
      }
    ]), D = ($) => [
      "su-checkbox-option",
      `su-checkbox-option--${a.size}`,
      `su-checkbox-option--${a.state}`,
      `su-checkbox-option--${a.displayType}`,
      {
        "su-checkbox-option--selected": x.value.includes($.value),
        "su-checkbox-option--disabled": $.disabled || a.disabled
      }
    ], b = computed(() => {
      const $ = {
        role: "group"
      };
      if (a.ariaLabel && ($["aria-label"] = a.ariaLabel), a.ariaDescribedBy) {
        const F = [a.ariaDescribedBy].filter(Boolean).join(" ");
        $["aria-describedby"] = F;
      }
      return a.required && ($["aria-required"] = "true"), a.state === "error" && ($["aria-invalid"] = "true"), $;
    }), I = ($, F) => {
      if (a.disabled) return;
      let g;
      if (F) {
        if (a.maxSelections && x.value.length >= a.maxSelections) {
          oe(`Maximum ${a.maxSelections} sélections autorisées`);
          return;
        }
        g = [...x.value, $];
      } else
        g = x.value.filter((w) => w !== $);
      x.value = g;
      const d = a.options.find((w) => w.value === $), B = F ? "sélectionné" : "désélectionné";
      oe(`${d == null ? void 0 : d.label} ${B}`);
    }, y = ($) => {
      h2("focus", $);
    }, V = ($) => {
      h2("blur", $);
    }, f = ($) => x.value.includes($), E = ($) => $.disabled || a.disabled;
    return ($, F) => (openBlock(), createBlock(ye, {
      fieldId: C.value,
      label: $.label,
      message: $.message,
      state: $.state,
      required: $.required,
      disabled: $.disabled
    }, {
      default: withCtx(({ fieldId: g, messageId: d }) => [
        createBaseVNode("fieldset", mergeProps({ class: u.value }, b.value, { "aria-describedby": d }), [
          createBaseVNode("div", {
            class: "su-checkbox-group-options",
            style: normalizeStyle({ maxHeight: $.maxHeight || void 0, overflowY: $.maxHeight ? "auto" : void 0 })
          }, [
            $.$slots.before ? (openBlock(), createElementBlock("div", hs, [
              renderSlot($.$slots, "before")
            ])) : createCommentVNode("", true),
            (openBlock(true), createElementBlock(Fragment, null, renderList($.options, (B) => (openBlock(), createElementBlock("label", {
              key: B.value,
              class: normalizeClass(D(B)),
              for: `${g}-${B.value}`
            }, [
              createBaseVNode("input", {
                id: `${g}-${B.value}`,
                type: "checkbox",
                value: B.value,
                checked: f(B.value),
                disabled: E(B),
                required: $.required && x.value.length === 0,
                class: "su-checkbox-input",
                onChange: (w) => I(B.value, w.target.checked),
                onFocus: y,
                onBlur: V
              }, null, 40, ys),
              createBaseVNode("div", {
                class: normalizeClass(["su-checkbox-indicator", {
                  "su-checkbox-indicator--checked": f(B.value),
                  "su-checkbox-indicator--indeterminate": false
                }])
              }, [
                f(B.value) ? (openBlock(), createBlock(unref(Le), {
                  key: 0,
                  class: "su-checkbox-check",
                  "aria-hidden": "true"
                })) : createCommentVNode("", true)
              ], 2),
              createBaseVNode("div", gs, [
                B.icon ? (openBlock(), createBlock(resolveDynamicComponent(B.icon), {
                  key: 0,
                  class: "su-checkbox-icon",
                  "aria-hidden": "true"
                })) : createCommentVNode("", true),
                createBaseVNode("div", ks, [
                  createBaseVNode("div", $s, toDisplayString(B.label), 1)
                ])
              ])
            ], 10, ms))), 128))
          ], 4),
          $.$slots.after ? (openBlock(), createElementBlock("div", ws, [
            renderSlot($.$slots, "after")
          ])) : createCommentVNode("", true)
        ], 16, bs)
      ]),
      _: 3
    }, 8, ["fieldId", "label", "message", "state", "required", "disabled"]));
  }
});
var Bs = ["id", "tabindex", "aria-describedby"];
var Cs = { class: "su-switch-track" };
var xs = { class: "su-switch-thumb" };
var Ls = { class: "su-switch-indicator" };
var zs = {
  key: 0,
  class: "su-switch-icon su-switch-icon--check",
  viewBox: "0 0 16 16",
  "aria-hidden": "true"
};
var Is = {
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
  setup(p, { emit: r }) {
    const a = p, e = useModel(p, "modelValue"), h2 = r, n = useAttrs(), k = "switch-" + useId(), C = computed(() => n.id || k), x = computed(() => [
      "su-switch-container",
      `su-switch-container--${a.size}`,
      `su-switch-container--${a.state}`,
      {
        "su-switch-container--disabled": a.disabled,
        "su-switch-container--readonly": a.readonly,
        "su-switch-container--has-labels": a.leftLabel || a.rightLabel,
        "su-switch-container--centered": a.leftLabel && a.rightLabel
      }
    ]), u = computed(() => [
      "su-switch",
      `su-switch--${a.size}`,
      `su-switch--${a.state}`,
      {
        "su-switch--checked": e.value,
        "su-switch--disabled": a.disabled,
        "su-switch--readonly": a.readonly
      }
    ]), D = computed(() => {
      const f = {
        role: "switch",
        "aria-checked": e.value
      };
      return a.ariaLabel && (f["aria-label"] = a.ariaLabel), a.ariaInvalid !== void 0 && (f["aria-invalid"] = a.ariaInvalid), a.ariaRequired !== void 0 && (f["aria-required"] = a.ariaRequired), a.required && (f["aria-required"] = "true"), a.state === "error" && (f["aria-invalid"] = "true"), f;
    }), b = () => {
      if (a.disabled || a.readonly) return;
      const f = !e.value;
      e.value = f, h2("change", f);
    }, I = (f) => {
      (f.key === " " || f.key === "Enter") && (f.preventDefault(), b()), h2("keydown", f);
    }, y = (f) => {
      h2("focus", f);
    }, V = (f) => {
      h2("blur", f);
    };
    return (f, E) => (openBlock(), createBlock(ye, {
      fieldId: C.value,
      label: f.label,
      message: f.message,
      state: f.state,
      required: f.required,
      disabled: f.disabled
    }, {
      default: withCtx(({ fieldId: $, messageId: F }) => [
        createBaseVNode("div", {
          class: normalizeClass(x.value)
        }, [
          f.leftLabel ? (openBlock(), createElementBlock("span", {
            key: 0,
            class: normalizeClass(["su-switch-side-label su-switch-side-label--left", {
              "su-switch-side-label--active": !e.value,
              "su-switch-side-label--disabled": f.disabled
            }])
          }, toDisplayString(f.leftLabel), 3)) : createCommentVNode("", true),
          createBaseVNode("div", mergeProps({
            id: $,
            class: u.value,
            tabindex: f.disabled ? -1 : 0,
            "aria-describedby": F
          }, D.value, {
            onClick: b,
            onKeydown: I,
            onFocus: y,
            onBlur: V
          }), [
            createBaseVNode("div", Cs, [
              createBaseVNode("div", xs, [
                createBaseVNode("div", Ls, [
                  e.value ? (openBlock(), createElementBlock("svg", zs, [...E[0] || (E[0] = [
                    createBaseVNode("path", { d: "M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" }, null, -1)
                  ])])) : (openBlock(), createElementBlock("svg", Is, [...E[1] || (E[1] = [
                    createBaseVNode("path", { d: "M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" }, null, -1)
                  ])]))
                ])
              ])
            ])
          ], 16, Bs),
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
var _s = ["id", "accept", "multiple", "disabled", "required", "aria-describedby"];
var Ds = ["tabindex", "aria-label", "aria-busy"];
var Ms = {
  key: 0,
  class: "su-file-upload-loading",
  "aria-hidden": "true"
};
var qs = { class: "su-file-upload-text" };
var Vs = { class: "su-file-upload-primary-text" };
var Ss = { class: "su-file-upload-secondary-text" };
var Rs = { key: 0 };
var As = { key: 0 };
var Fs = { key: 1 };
var Ps = ["aria-label"];
var Es = { class: "su-file-upload-item-preview" };
var Ts = ["src", "alt"];
var Hs = { class: "su-file-upload-item-info" };
var Ks = { class: "su-file-upload-item-name" };
var Os = { class: "su-file-upload-item-details" };
var js = { class: "su-file-upload-item-size" };
var Gs = {
  key: 0,
  class: "su-file-upload-item-progress"
};
var Us = {
  key: 1,
  class: "su-file-upload-item-error"
};
var Zs = { class: "su-file-upload-item-status" };
var Ns = {
  key: 2,
  class: "su-file-upload-spinner",
  "aria-hidden": "true"
};
var Ws = ["aria-label", "onClick"];
var Ys = ["aria-valuenow", "aria-label"];
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
  setup(p, { expose: r, emit: a }) {
    const e = p, h2 = useModel(p, "modelValue"), n = a, k = useAttrs(), C = ref(), x = ref(), u = ref(false), D = ref(0), b = "file-upload-" + useId(), I = computed(() => k.id || b), y = computed(() => Array.isArray(h2.value) ? h2.value : []), V = computed(() => [
      "su-file-upload-container",
      `su-file-upload-container--${e.variant}`,
      `su-file-upload-container--${e.size}`,
      `su-file-upload-container--${e.state}`,
      {
        "su-file-upload-container--disabled": e.disabled,
        "su-file-upload-container--readonly": e.readonly,
        "su-file-upload-container--dragging": u.value,
        "su-file-upload-container--has-files": y.value.length > 0
      }
    ]), f = computed(() => [
      "su-file-upload-dropzone",
      `su-file-upload-dropzone--${e.variant}`,
      `su-file-upload-dropzone--${e.size}`,
      `su-file-upload-dropzone--${e.state}`,
      {
        "su-file-upload-dropzone--disabled": e.disabled,
        "su-file-upload-dropzone--readonly": e.readonly,
        "su-file-upload-dropzone--dragging": u.value
      }
    ]), E = computed(() => {
      const c = {};
      if (e.ariaLabel && (c["aria-label"] = e.ariaLabel), e.ariaDescribedBy) {
        const H = [e.ariaDescribedBy].filter(Boolean).join(" ");
        c["aria-describedby"] = H;
      }
      return e.ariaInvalid !== void 0 && (c["aria-invalid"] = e.ariaInvalid), e.ariaRequired !== void 0 && (c["aria-required"] = e.ariaRequired), e.required && (c["aria-required"] = "true"), e.state === "error" && (c["aria-invalid"] = "true"), c;
    }), $ = (c) => {
      if (c === 0) return "0 B";
      const H = 1024, Y = ["B", "KB", "MB", "GB"], j = Math.floor(Math.log(c) / Math.log(H));
      return parseFloat((c / Math.pow(H, j)).toFixed(1)) + " " + Y[j];
    }, F = (c) => c.type.startsWith("image/") ? ca : ra, g = (c) => `${c}-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`, d = (c) => c.type.startsWith("image/"), B = (c) => new Promise((H) => {
      if (!d(c)) {
        H("");
        return;
      }
      const Y = new FileReader();
      Y.onload = (j) => {
        var S;
        return H(((S = j.target) == null ? void 0 : S.result) || "");
      }, Y.readAsDataURL(c);
    }), w = (c) => e.maxSize && c.size > e.maxSize ? `Le fichier "${c.name}" est trop volumineux (${$(c.size)}). Taille maximale : ${$(e.maxSize)}` : e.accept && !e.accept.split(",").map((j) => j.trim()).some((j) => {
      if (j.startsWith("."))
        return c.name.toLowerCase().endsWith(j.toLowerCase());
      if (j.includes("*")) {
        const S = j.split("/")[0];
        return c.type.startsWith(S);
      }
      return c.type === j;
    }) ? `Le type de fichier "${c.type}" n'est pas accepté pour "${c.name}"` : null, M = async (c) => {
      if (e.disabled || e.readonly) return;
      const H = Array.from(c), Y = y.value;
      if (e.maxFiles && Y.length + H.length > e.maxFiles) {
        const S = `Nombre maximum de fichiers dépassé (${e.maxFiles})`;
        n("error", S), oe(S, "assertive");
        return;
      }
      const j = [];
      for (const S of H) {
        const v = w(S);
        if (v) {
          n("error", v, S), oe(v, "assertive");
          continue;
        }
        const l = {
          id: g("file"),
          file: S,
          name: S.name,
          size: S.size,
          type: S.type,
          status: "pending"
        };
        if (e.allowPreview && d(S))
          try {
            l.preview = await B(S);
          } catch (L) {
            console.warn("Erreur lors de la création de l'aperçu:", L);
          }
        j.push(l);
      }
      if (j.length > 0) {
        const S = e.multiple ? [...Y, ...j] : j;
        h2.value = S, n("change", S);
        const v = j.length === 1 ? `Fichier "${j[0].name}" ajouté` : `${j.length} fichiers ajoutés`;
        oe(v), j.forEach((l) => n("upload", l));
      }
    }, N = (c) => {
      if (e.disabled || e.readonly) return;
      const H = y.value.filter((Y) => Y.id !== c.id);
      h2.value = H, n("change", H), n("remove", c), oe(`Fichier "${c.name}" supprimé`);
    }, ie = (c) => {
      const H = c.target;
      H.files && H.files.length > 0 && M(H.files), H.value = "";
    }, ee = () => {
      var c;
      e.disabled || e.readonly || (c = C.value) == null || c.click();
    }, se = (c) => {
      (c.key === "Enter" || c.key === " ") && (c.preventDefault(), ee());
    }, te = (c) => {
      n("focus", c);
    }, z = (c) => {
      n("blur", c);
    }, m = (c) => {
      c.preventDefault(), c.stopPropagation(), !(e.disabled || e.readonly) && (D.value++, D.value === 1 && (u.value = true));
    }, W = (c) => {
      c.preventDefault(), c.stopPropagation(), !(e.disabled || e.readonly) && (D.value--, D.value === 0 && (u.value = false));
    }, re = (c) => {
      c.preventDefault(), c.stopPropagation(), !(e.disabled || e.readonly) && c.dataTransfer && (c.dataTransfer.dropEffect = "copy");
    }, be = (c) => {
      var Y;
      if (c.preventDefault(), c.stopPropagation(), e.disabled || e.readonly) return;
      u.value = false, D.value = 0;
      const H = (Y = c.dataTransfer) == null ? void 0 : Y.files;
      H && H.length > 0 && M(H);
    };
    return r({
      focus: () => {
        var c;
        (c = x.value) == null || c.focus();
      },
      clear: () => {
        e.disabled || e.readonly || (h2.value = [], n("change", []), oe("Tous les fichiers ont été supprimés"));
      },
      fileInputRef: C,
      dropZoneRef: x
    }), (c, H) => (openBlock(), createBlock(ye, {
      fieldId: I.value,
      label: c.label,
      message: c.message,
      state: c.state,
      required: c.required,
      disabled: c.disabled
    }, {
      default: withCtx(({ fieldId: Y, messageId: j }) => [
        createBaseVNode("div", {
          class: normalizeClass(V.value)
        }, [
          createBaseVNode("input", mergeProps({
            ref_key: "fileInputRef",
            ref: C,
            id: Y,
            type: "file",
            accept: c.accept,
            multiple: c.multiple,
            disabled: c.disabled,
            required: c.required,
            "aria-describedby": j,
            class: "su-file-upload-input"
          }, E.value, {
            onChange: ie,
            onFocus: te,
            onBlur: z
          }), null, 16, _s),
          createBaseVNode("div", {
            ref_key: "dropZoneRef",
            ref: x,
            class: normalizeClass(f.value),
            tabindex: c.disabled ? -1 : 0,
            role: "button",
            "aria-label": c.placeholder,
            "aria-busy": c.loading,
            onClick: ee,
            onKeydown: se,
            onDragenter: m,
            onDragleave: W,
            onDragover: re,
            onDrop: be
          }, [
            createVNode(unref(ia), {
              class: normalizeClass(["su-file-upload-icon", { "su-file-upload-icon--dragging": u.value }]),
              "aria-hidden": "true"
            }, null, 8, ["class"]),
            c.loading ? (openBlock(), createElementBlock("div", Ms, [...H[0] || (H[0] = [
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
            createBaseVNode("div", qs, [
              createBaseVNode("p", Vs, toDisplayString(c.loading ? "Chargement..." : u.value ? c.dragText : c.placeholder), 1),
              createBaseVNode("p", Ss, [
                createTextVNode(toDisplayString(c.loading ? "Veuillez patienter" : c.browseText) + " ", 1),
                c.accept || c.maxSize ? (openBlock(), createElementBlock("span", Rs, [
                  c.accept ? (openBlock(), createElementBlock("span", As, " • " + toDisplayString(c.accept), 1)) : createCommentVNode("", true),
                  c.maxSize ? (openBlock(), createElementBlock("span", Fs, " • Max " + toDisplayString($(c.maxSize)), 1)) : createCommentVNode("", true)
                ])) : createCommentVNode("", true)
              ])
            ])
          ], 42, Ds),
          c.showFileList && y.value.length > 0 ? (openBlock(), createElementBlock("div", {
            key: 0,
            class: "su-file-upload-list",
            role: "list",
            "aria-label": `${y.value.length} fichier(s) sélectionné(s)`
          }, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(y.value, (S) => (openBlock(), createElementBlock("div", {
              key: S.id,
              class: normalizeClass(["su-file-upload-item", `su-file-upload-item--${S.status}`]),
              role: "listitem"
            }, [
              createBaseVNode("div", Es, [
                S.preview ? (openBlock(), createElementBlock("img", {
                  key: 0,
                  src: S.preview,
                  alt: `Aperçu de ${S.name}`,
                  class: "su-file-upload-preview-image"
                }, null, 8, Ts)) : (openBlock(), createBlock(resolveDynamicComponent(F(S.file)), {
                  key: 1,
                  class: "su-file-upload-item-icon",
                  "aria-hidden": "true"
                }))
              ]),
              createBaseVNode("div", Hs, [
                createBaseVNode("div", Ks, toDisplayString(S.name), 1),
                createBaseVNode("div", Os, [
                  createBaseVNode("span", js, toDisplayString($(S.size)), 1),
                  S.status === "uploading" && S.progress !== void 0 ? (openBlock(), createElementBlock("span", Gs, toDisplayString(S.progress) + "% ", 1)) : createCommentVNode("", true),
                  S.error ? (openBlock(), createElementBlock("span", Us, toDisplayString(S.error), 1)) : createCommentVNode("", true)
                ])
              ]),
              createBaseVNode("div", Zs, [
                S.status === "success" ? (openBlock(), createBlock(unref(ta), {
                  key: 0,
                  class: "su-file-upload-status-icon su-file-upload-status-icon--success",
                  "aria-hidden": "true"
                })) : S.status === "error" ? (openBlock(), createBlock(unref(oa), {
                  key: 1,
                  class: "su-file-upload-status-icon su-file-upload-status-icon--error",
                  "aria-hidden": "true"
                })) : S.status === "uploading" ? (openBlock(), createElementBlock("div", Ns, [...H[1] || (H[1] = [
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
                "aria-label": `Supprimer ${S.name}`,
                onClick: (v) => N(S)
              }, [
                createVNode(unref(ze), {
                  class: "su-file-upload-remove-icon",
                  "aria-hidden": "true"
                })
              ], 8, Ws)) : S.status === "uploading" && c.showProgress ? (openBlock(), createElementBlock("div", {
                key: 1,
                class: "su-file-upload-progress-bar",
                role: "progressbar",
                "aria-valuenow": S.progress || 0,
                "aria-valuemin": "0",
                "aria-valuemax": "100",
                "aria-label": `Upload de ${S.name}: ${S.progress || 0}%`
              }, [
                createBaseVNode("div", {
                  class: "su-file-upload-progress-fill",
                  style: normalizeStyle({ width: `${S.progress || 0}%` })
                }, null, 4)
              ], 8, Ys)) : createCommentVNode("", true)
            ], 2))), 128))
          ], 8, Ps)) : createCommentVNode("", true)
        ], 2)
      ]),
      _: 1
    }, 8, ["fieldId", "label", "message", "state", "required", "disabled"]));
  }
});
var Xs = ["id", "value", "placeholder", "disabled", "readonly", "required", "rows", "aria-describedby"];
var Qs = {
  key: 0,
  class: "su-textarea-footer"
};
var Js = ["id", "aria-live"];
var et = { class: "sr-only" };
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
  setup(p, { expose: r, emit: a }) {
    const e = p, h2 = useModel(p, "modelValue"), n = a, k = useAttrs(), C = ref(), x = "textarea-" + useId(), u = computed(() => k.id || x), D = computed(() => h2.value || ""), b = computed(() => D.value.length), I = computed(() => e.maxLength ? e.maxLength - b.value : null), y = computed(() => e.maxLength ? I.value !== null && I.value <= e.maxLength * 0.1 : false), V = computed(() => e.maxLength ? I.value !== null && I.value < 0 : false), f = computed(() => [
      "su-textarea-container",
      `su-textarea-container--${e.size}`,
      `su-textarea-container--${e.state}`,
      {
        "su-textarea-container--disabled": e.disabled,
        "su-textarea-container--readonly": e.readonly,
        "su-textarea-container--auto-resize": e.autoResize,
        "su-textarea-container--over-limit": V.value
      }
    ]), E = computed(() => [
      "su-textarea",
      `su-textarea--${e.size}`,
      `su-textarea--${e.state}`,
      {
        "su-textarea--disabled": e.disabled,
        "su-textarea--readonly": e.readonly,
        "su-textarea--auto-resize": e.autoResize,
        "su-textarea--over-limit": V.value
      }
    ]), $ = computed(() => [
      "su-textarea-counter",
      {
        "su-textarea-counter--near-limit": y.value,
        "su-textarea-counter--over-limit": V.value
      }
    ]), F = computed(() => {
      const z = {};
      return e.ariaLabel && (z["aria-label"] = e.ariaLabel), e.ariaInvalid !== void 0 && (z["aria-invalid"] = e.ariaInvalid), e.ariaRequired !== void 0 && (z["aria-required"] = e.ariaRequired), e.required && (z["aria-required"] = "true"), (e.state === "error" || V.value) && (z["aria-invalid"] = "true"), z;
    }), g = computed(() => {
      const z = {};
      return e.autocomplete && (z.autocomplete = e.autocomplete), e.maxLength && (z.maxlength = e.maxLength), e.spellcheck !== void 0 && (z.spellcheck = e.spellcheck), e.wrap && (z.wrap = e.wrap), z;
    }), d = async () => {
      if (!e.autoResize || !C.value) return;
      await nextTick();
      const z = C.value, m = e.minRows ? e.minRows * 1.5 : 3 * 1.5, W = e.maxRows ? e.maxRows * 1.5 : 10 * 1.5;
      z.style.height = "auto";
      const re = z.scrollHeight, be = Math.max(m * 16, Math.min(W * 16, re));
      z.style.height = `${be}px`;
    }, B = (z) => {
      const m = z.target;
      h2.value = m.value, n("input", z), e.autoResize && d();
    }, w = (z) => {
      n("change", z);
    }, M = (z) => {
      n("focus", z);
    }, N = (z) => {
      n("blur", z);
    }, ie = (z) => {
      n("keydown", z);
    }, ee = (z) => {
      n("keyup", z);
    };
    return r({
      focus: () => {
        var z;
        (z = C.value) == null || z.focus();
      },
      select: () => {
        var z;
        (z = C.value) == null || z.select();
      },
      textareaRef: C
    }), watch(h2, () => {
      e.autoResize && d();
    }, { immediate: true }), watch(() => e.autoResize, (z) => {
      z && d();
    }), (z, m) => (openBlock(), createBlock(ye, {
      fieldId: u.value,
      label: z.label,
      message: z.message,
      state: z.state,
      required: z.required,
      disabled: z.disabled
    }, {
      default: withCtx(({ fieldId: W, messageId: re }) => [
        createBaseVNode("div", null, [
          createBaseVNode("div", {
            class: normalizeClass(f.value)
          }, [
            createBaseVNode("textarea", mergeProps({
              ref_key: "textareaRef",
              ref: C,
              id: W,
              class: E.value,
              value: h2.value,
              placeholder: z.placeholder,
              disabled: z.disabled,
              readonly: z.readonly,
              required: z.required,
              rows: z.autoResize ? z.minRows : z.rows,
              "aria-describedby": re
            }, { ...g.value, ...F.value }, {
              onInput: B,
              onChange: w,
              onFocus: M,
              onBlur: N,
              onKeydown: ie,
              onKeyup: ee
            }), null, 16, Xs)
          ], 2),
          z.showCounter && z.maxLength ? (openBlock(), createElementBlock("div", Qs, [
            m[0] || (m[0] = createBaseVNode("div", { class: "su-textarea-footer-spacer" }, null, -1)),
            createBaseVNode("div", {
              id: `${W}-counter`,
              class: normalizeClass($.value),
              "aria-live": y.value || V.value ? "polite" : "off"
            }, [
              createBaseVNode("span", et, toDisplayString(V.value ? "Limite de caractères dépassée" : "Caractères restants") + ": ", 1),
              createTextVNode(" " + toDisplayString(b.value) + "/" + toDisplayString(z.maxLength), 1)
            ], 10, Js)
          ])) : createCommentVNode("", true)
        ])
      ]),
      _: 1
    }, 8, ["fieldId", "label", "message", "state", "required", "disabled"]));
  }
});
var at = ["dir"];
var st = {
  key: 0,
  class: "su-slider-before"
};
var tt = {
  key: 1,
  class: "su-slider-labels"
};
var lt = { class: "su-slider-label su-slider-label--min" };
var it = { class: "su-slider-label su-slider-label--max" };
var rt = { class: "su-slider-wrapper" };
var ot = {
  key: 0,
  class: "su-slider-value"
};
var nt = {
  key: 0,
  class: "su-slider-value-display"
};
var ut = {
  key: 1,
  class: "su-slider-value-dual"
};
var dt = { class: "su-slider-value-min" };
var ct = { class: "su-slider-value-max" };
var ft = ["aria-describedby"];
var pt = {
  key: 0,
  class: "su-slider-ticks"
};
var vt = {
  key: 1,
  class: "su-slider-marks"
};
var bt = { class: "su-slider-mark-label" };
var ht = ["id", "tabindex"];
var mt = ["id", "tabindex"];
var yt = {
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
  setup(p, { expose: r, emit: a }) {
    const e = p, h2 = useModel(p, "modelValue"), n = a, k = useAttrs(), C = ref(), x = ref(), u = ref(), D = ref(), b = ref(false), I = ref(null), y = ref(false), V = ref(false), f = "slider-" + useId(), E = computed(() => k.id || f), $ = computed(() => Array.isArray(h2.value)), F = computed({
      get() {
        return h2.value === void 0 || h2.value === null ? e.min : h2.value;
      },
      set(l) {
        h2.value = l, n("change", l), n("input", l);
      }
    }), g = computed(() => $.value ? F.value[0] : F.value), d = computed(() => $.value ? F.value[1] : F.value), B = (l) => e.formatValue ? e.formatValue(l) : l.toString(), w = computed(() => {
      const l = (g.value - e.min) / (e.max - e.min) * 100;
      return e.dir === "rtl" ? 100 - l : l;
    }), M = computed(() => {
      const l = (d.value - e.min) / (e.max - e.min) * 100;
      return e.dir === "rtl" ? 100 - l : l;
    }), N = computed(() => [
      "su-slider-container",
      `su-slider-container--${e.size}`,
      `su-slider-container--${e.state}`,
      `su-slider-container--${e.orientation}`,
      {
        "su-slider-container--disabled": e.disabled,
        "su-slider-container--readonly": e.readonly,
        "su-slider-container--dual": $.value,
        "su-slider-container--dragging": b.value,
        "su-slider-container--rtl": e.dir === "rtl"
      }
    ]), ie = computed(() => [
      "su-slider-track",
      `su-slider-track--${e.size}`,
      `su-slider-track--${e.state}`,
      `su-slider-track--${e.orientation}`
    ]), ee = (l) => [
      "su-slider-thumb",
      `su-slider-thumb--${e.size}`,
      `su-slider-thumb--${e.state}`,
      `su-slider-thumb--${e.orientation}`,
      {
        "su-slider-thumb--disabled": e.disabled,
        "su-slider-thumb--readonly": e.readonly,
        "su-slider-thumb--active": I.value === l
      }
    ], se = (l) => {
      const L = l === "min" ? g.value : d.value, A = {
        role: "slider",
        "aria-valuemin": e.min,
        "aria-valuemax": e.max,
        "aria-valuenow": L,
        "aria-valuetext": e.ariaValueText || B(L),
        "aria-orientation": e.orientation
      };
      return e.ariaLabel && (A["aria-label"] = $.value ? `${e.ariaLabel} ${l === "min" ? "minimum" : "maximum"}` : e.ariaLabel), e.ariaInvalid !== void 0 && (A["aria-invalid"] = e.ariaInvalid), e.ariaRequired !== void 0 && (A["aria-required"] = e.ariaRequired), e.required && (A["aria-required"] = "true"), e.state === "error" && (A["aria-invalid"] = "true"), A;
    }, te = (l) => Math.max(e.min, Math.min(e.max, l)), z = (l) => {
      const L = Math.round((l - e.min) / e.step);
      return e.min + L * e.step;
    }, m = (l, L) => {
      if (!x.value) return e.min;
      const A = x.value.getBoundingClientRect();
      let K;
      e.orientation === "horizontal" ? (K = (l - A.left) / A.width, e.dir === "rtl" && (K = 1 - K)) : K = 1 - (L - A.top) / A.height, K = Math.max(0, Math.min(1, K));
      const q = e.min + K * (e.max - e.min);
      return z(te(q));
    }, W = (l, L = "min") => {
      if (e.disabled || e.readonly) return;
      const A = te(z(l));
      if ($.value) {
        const [q, ae] = F.value;
        L === "min" ? F.value = [Math.min(A, ae), ae] : F.value = [q, Math.max(A, q)];
      } else
        F.value = A;
      const K = $.value ? `${L === "min" ? "Minimum" : "Maximum"} : ${B(A)}` : B(A);
      oe(K);
    }, re = (l, L = "min") => {
      if (e.disabled || e.readonly) return;
      l.preventDefault(), b.value = true, I.value = L;
      const A = (q) => {
        const ae = m(q.clientX, q.clientY);
        W(ae, L);
      }, K = () => {
        b.value = false, I.value = null, document.removeEventListener("mousemove", A), document.removeEventListener("mouseup", K);
      };
      document.addEventListener("mousemove", A), document.addEventListener("mouseup", K);
    }, be = (l) => {
      if (e.disabled || e.readonly) return;
      const L = m(l.clientX, l.clientY);
      if ($.value) {
        const [A, K] = F.value, q = Math.abs(L - A), ae = Math.abs(L - K), G = q <= ae ? "min" : "max";
        W(L, G);
      } else
        W(L);
    }, fe = (l, L = "min") => {
      if (e.disabled || e.readonly) return;
      const A = L === "min" ? g.value : d.value;
      let K = A;
      const q = (e.max - e.min) / 10;
      switch (l.key) {
        case "ArrowRight":
        case "ArrowUp":
          l.preventDefault(), K = A + e.step;
          break;
        case "ArrowLeft":
        case "ArrowDown":
          l.preventDefault(), K = A - e.step;
          break;
        case "PageUp":
          l.preventDefault(), K = A + q;
          break;
        case "PageDown":
          l.preventDefault(), K = A - q;
          break;
        case "Home":
          l.preventDefault(), K = e.min;
          break;
        case "End":
          l.preventDefault(), K = e.max;
          break;
        default:
          return;
      }
      W(K, L), n("keydown", l);
    }, ge = (l, L = "min") => {
      e.tooltip !== "none" && (L === "min" ? y.value = true : V.value = true), n("focus", l);
    }, c = (l, L = "min") => {
      e.tooltip !== "none" && (L === "min" ? y.value = false : V.value = false), n("blur", l);
    }, H = (l = "min") => {
      e.tooltip !== "none" && !e.disabled && (l === "min" ? y.value = true : V.value = true);
    }, Y = (l = "min") => {
      e.tooltip !== "none" && (l === "min" ? y.value = false : V.value = false);
    }, j = computed(() => {
      if (!e.showTicks) return [];
      const l = Math.min(21, (e.max - e.min) / e.step + 1), L = (e.max - e.min) / (l - 1);
      return Array.from({ length: l }, (A, K) => {
        const q = e.min + K * L, ae = (q - e.min) / (e.max - e.min) * 100, G = e.dir === "rtl" ? 100 - ae : ae;
        return { value: z(q), percent: G };
      });
    }), S = computed(() => !e.marks || e.marks.length === 0 ? [] : e.marks.filter((l) => l >= e.min && l <= e.max).map((l) => {
      const L = (l - e.min) / (e.max - e.min) * 100, A = e.dir === "rtl" ? 100 - L : L;
      return { value: l, percent: A };
    }));
    return r({
      focus: () => {
        var l;
        (l = u.value) == null || l.focus();
      },
      sliderRef: C,
      thumb1Ref: u,
      thumb2Ref: D
    }), (l, L) => (openBlock(), createBlock(ye, {
      fieldId: E.value,
      label: l.label,
      message: l.message,
      state: l.state,
      required: l.required,
      disabled: l.disabled
    }, {
      default: withCtx(({ fieldId: A, messageId: K }) => [
        createBaseVNode("div", {
          class: normalizeClass(N.value),
          dir: l.dir
        }, [
          l.$slots.before ? (openBlock(), createElementBlock("div", st, [
            renderSlot(l.$slots, "before")
          ])) : createCommentVNode("", true),
          l.showLabels ? (openBlock(), createElementBlock("div", tt, [
            createBaseVNode("span", lt, toDisplayString(B(l.min)), 1),
            createBaseVNode("span", it, toDisplayString(B(l.max)), 1)
          ])) : createCommentVNode("", true),
          createBaseVNode("div", rt, [
            l.showValue && l.tooltip === "none" ? (openBlock(), createElementBlock("div", ot, [
              $.value ? (openBlock(), createElementBlock("div", ut, [
                createBaseVNode("span", dt, toDisplayString(B(g.value)), 1),
                L[12] || (L[12] = createBaseVNode("span", { class: "su-slider-value-separator" }, "-", -1)),
                createBaseVNode("span", ct, toDisplayString(B(d.value)), 1)
              ])) : (openBlock(), createElementBlock("span", nt, toDisplayString(B(g.value)), 1))
            ])) : createCommentVNode("", true),
            createBaseVNode("div", {
              ref_key: "sliderRef",
              ref: C,
              class: "su-slider-slider",
              "aria-describedby": K,
              onClick: be
            }, [
              createBaseVNode("div", {
                ref_key: "trackRef",
                ref: x,
                class: normalizeClass(ie.value)
              }, [
                createBaseVNode("div", {
                  class: "su-slider-track-active",
                  style: normalizeStyle({
                    [l.orientation === "horizontal" ? "left" : "bottom"]: `${$.value ? Math.min(w.value, M.value) : 0}%`,
                    [l.orientation === "horizontal" ? "width" : "height"]: `${$.value ? Math.abs(M.value - w.value) : Math.abs(w.value)}%`
                  })
                }, null, 4),
                l.showTicks ? (openBlock(), createElementBlock("div", pt, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(j.value, (q) => (openBlock(), createElementBlock("div", {
                    key: q.value,
                    class: "su-slider-tick",
                    style: normalizeStyle({
                      [l.orientation === "horizontal" ? "left" : "bottom"]: `${q.percent}%`
                    })
                  }, null, 4))), 128))
                ])) : createCommentVNode("", true),
                S.value.length > 0 ? (openBlock(), createElementBlock("div", vt, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(S.value, (q) => (openBlock(), createElementBlock("div", {
                    key: q.value,
                    class: "su-slider-mark",
                    style: normalizeStyle({
                      [l.orientation === "horizontal" ? "left" : "bottom"]: `${q.percent}%`
                    })
                  }, [
                    L[13] || (L[13] = createBaseVNode("div", { class: "su-slider-mark-dot" }, null, -1)),
                    createBaseVNode("div", bt, toDisplayString(B(q.value)), 1)
                  ], 4))), 128))
                ])) : createCommentVNode("", true),
                createBaseVNode("div", mergeProps({
                  ref_key: "thumb1Ref",
                  ref: u,
                  id: $.value ? `${A}-min` : A,
                  class: ee("min"),
                  style: {
                    [l.orientation === "horizontal" ? "left" : "bottom"]: `${w.value}%`
                  },
                  tabindex: l.disabled ? -1 : 0
                }, se("min"), {
                  onMousedown: L[0] || (L[0] = (q) => re(q, "min")),
                  onKeydown: L[1] || (L[1] = (q) => fe(q, "min")),
                  onFocus: L[2] || (L[2] = (q) => ge(q, "min")),
                  onBlur: L[3] || (L[3] = (q) => c(q, "min")),
                  onMouseenter: L[4] || (L[4] = (q) => H("min")),
                  onMouseleave: L[5] || (L[5] = (q) => Y("min"))
                }), [
                  L[14] || (L[14] = createBaseVNode("div", { class: "su-slider-thumb-handle" }, null, -1)),
                  l.tooltip !== "none" && (y.value || b.value && I.value === "min") ? (openBlock(), createElementBlock("div", {
                    key: 0,
                    class: normalizeClass(["su-slider-tooltip", `su-slider-tooltip--${l.tooltip}`])
                  }, toDisplayString(B(g.value)), 3)) : createCommentVNode("", true)
                ], 16, ht),
                $.value ? (openBlock(), createElementBlock("div", mergeProps({
                  key: 2,
                  ref_key: "thumb2Ref",
                  ref: D,
                  id: `${A}-max`,
                  class: ee("max"),
                  style: {
                    [l.orientation === "horizontal" ? "left" : "bottom"]: `${M.value}%`
                  },
                  tabindex: l.disabled ? -1 : 0
                }, se("max"), {
                  onMousedown: L[6] || (L[6] = (q) => re(q, "max")),
                  onKeydown: L[7] || (L[7] = (q) => fe(q, "max")),
                  onFocus: L[8] || (L[8] = (q) => ge(q, "max")),
                  onBlur: L[9] || (L[9] = (q) => c(q, "max")),
                  onMouseenter: L[10] || (L[10] = (q) => H("max")),
                  onMouseleave: L[11] || (L[11] = (q) => Y("max"))
                }), [
                  L[15] || (L[15] = createBaseVNode("div", { class: "su-slider-thumb-handle" }, null, -1)),
                  l.tooltip !== "none" && (V.value || b.value && I.value === "max") ? (openBlock(), createElementBlock("div", {
                    key: 0,
                    class: normalizeClass(["su-slider-tooltip", `su-slider-tooltip--${l.tooltip}`])
                  }, toDisplayString(B(d.value)), 3)) : createCommentVNode("", true)
                ], 16, mt)) : createCommentVNode("", true)
              ], 2)
            ], 8, ft)
          ]),
          l.$slots.after ? (openBlock(), createElementBlock("div", yt, [
            renderSlot(l.$slots, "after")
          ])) : createCommentVNode("", true)
        ], 10, at)
      ]),
      _: 3
    }, 8, ["fieldId", "label", "message", "state", "required", "disabled"]));
  }
});
var gt = ["id"];
var kt = {
  key: 0,
  class: "su-dialog-header"
};
var $t = ["id"];
var wt = ["id"];
var Bt = { class: "su-dialog-content" };
var Ct = {
  key: 2,
  class: "su-dialog-footer"
};
var xt = defineComponent({
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
  setup(p, { expose: r, emit: a }) {
    const e = p, h2 = a, n = useAttrs(), k = ref(), C = ref(null), x = "dialog-" + useId(), u = computed(() => n.id || x), D = computed(() => e.title ? u.value + "-title" : void 0), b = computed(() => e.description ? u.value + "-description" : void 0), I = ref(e.modelValue), y = computed(() => [
      "su-dialog-overlay",
      `su-dialog-overlay--${e.display}`,
      {
        "su-dialog-overlay--open": I.value
      }
    ]), V = computed(() => [
      "su-dialog",
      `su-dialog--${e.display}`,
      {
        "su-dialog--open": I.value
      }
    ]), f = computed(() => {
      const d = {
        role: "dialog",
        "aria-modal": "true",
        "aria-hidden": !I.value
      };
      return e.ariaLabel && (d["aria-label"] = e.ariaLabel), e.ariaLabelledBy ? d["aria-labelledby"] = e.ariaLabelledBy : D.value && (d["aria-labelledby"] = D.value), e.ariaDescribedBy ? d["aria-describedby"] = e.ariaDescribedBy : b.value && (d["aria-describedby"] = b.value), d;
    }), E = async () => {
      I.value || (I.value = true, h2("update:modelValue", true), h2("open"), e.disableScroll && (document.body.style.overflow = "hidden"), await nextTick(), k.value && (C.value = Ae(k.value)));
    }, $ = () => {
      I.value && (I.value = false, h2("update:modelValue", false), h2("close"), e.disableScroll && (document.body.style.overflow = ""), C.value && (C.value(), C.value = null));
    }, F = () => {
      e.closeOnOverlayClick && $();
    }, g = (d) => {
      d.key === "Escape" && e.closeOnEscape && $();
    };
    return watch(() => e.modelValue, (d) => {
      d ? E() : $();
    }), onMounted(() => {
      e.modelValue && E(), document.addEventListener("keydown", g);
    }), onUnmounted(() => {
      document.removeEventListener("keydown", g), e.disableScroll && (document.body.style.overflow = ""), C.value && C.value();
    }), r({
      open: E,
      close: $,
      dialogRef: k
    }), (d, B) => (openBlock(), createBlock(Transition, { name: "su-dialog-transition" }, {
      default: withCtx(() => [
        I.value ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: normalizeClass(y.value),
          style: normalizeStyle({ zIndex: d.zIndex }),
          onClick: F
        }, [
          createBaseVNode("div", mergeProps({
            ref_key: "dialogRef",
            ref: k,
            id: u.value,
            class: V.value,
            style: { width: d.width, height: d.height }
          }, f.value, {
            onClick: B[0] || (B[0] = withModifiers(() => {
            }, ["stop"]))
          }), [
            d.$slots.head || d.title ? (openBlock(), createElementBlock("div", kt, [
              renderSlot(d.$slots, "head", {}, () => [
                createBaseVNode("h2", {
                  id: D.value,
                  class: "su-dialog-title"
                }, toDisplayString(d.title), 9, $t)
              ])
            ])) : createCommentVNode("", true),
            d.description && !d.$slots.head ? (openBlock(), createElementBlock("p", {
              key: 1,
              id: b.value,
              class: "sr-only"
            }, toDisplayString(d.description), 9, wt)) : createCommentVNode("", true),
            createBaseVNode("div", Bt, [
              renderSlot(d.$slots, "default")
            ]),
            d.$slots.footer ? (openBlock(), createElementBlock("div", Ct, [
              renderSlot(d.$slots, "footer")
            ])) : createCommentVNode("", true)
          ], 16, gt)
        ], 6)) : createCommentVNode("", true)
      ]),
      _: 3
    }));
  }
});
var Lt = {
  key: 0,
  class: "su-form-fields-head"
};
var zt = { class: "su-form-fields-content" };
var It = {
  key: 1,
  class: "su-form-fields-footer"
};
var _t = defineComponent({
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
    const r = p, a = useSlots(), e = [
      Se,
      Pe,
      Ee,
      Te,
      He,
      Ke,
      Oe,
      je
    ], h2 = computed(() => [
      "su-form-fields",
      `su-form-fields--gap-${r.gap}`,
      `su-form-fields--section-gap-${r.sectionGap}`,
      `su-form-fields--${r.direction}`
    ]), n = computed(() => {
      var u;
      if (!(a != null && a.default)) return [];
      const C = ((u = a == null ? void 0 : a.default) == null ? void 0 : u.call(a)) ?? [], x = [];
      for (const D of C)
        if (e.some((I) => D.type === I)) {
          const I = { ...D.props };
          r.size && (I.size = r.size), x.push(h(D.type, I, D == null ? void 0 : D.children));
        } else {
          if (D.type === Comment || D.type === Text || D.type === Fragment)
            continue;
          console.warn("FormFields expects only form field components as children. Found:", D.type);
        }
      return x;
    });
    computed(() => a != null && a.head ? a.head() : []), computed(() => a != null && a.footer ? a.footer() : []);
    const k = computed(() => {
      const C = {};
      return r.ariaLabel && (C["aria-label"] = r.ariaLabel), r.ariaDescribedBy && (C["aria-describedby"] = r.ariaDescribedBy), r.role && (C.role = r.role), C;
    });
    return (C, x) => (openBlock(), createElementBlock("div", mergeProps({ class: h2.value }, k.value), [
      C.$slots.head ? (openBlock(), createElementBlock("div", Lt, [
        renderSlot(C.$slots, "head")
      ])) : createCommentVNode("", true),
      createBaseVNode("div", zt, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(n.value, (u, D) => (openBlock(), createBlock(resolveDynamicComponent(u), { key: D }))), 128))
      ]),
      C.$slots.footer ? (openBlock(), createElementBlock("div", It, [
        renderSlot(C.$slots, "footer")
      ])) : createCommentVNode("", true)
    ], 16));
  }
});
var Dt = { class: "su-float-button-wrapper" };
var Mt = ["aria-label"];
var qt = ["id"];
var Vt = defineComponent({
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
  setup(p, { expose: r, emit: a }) {
    const e = p, h2 = a, n = useSlots(), k = ref(), C = ref(true), x = ref(false), u = ref(0), D = computed(() => {
      const w = {
        position: "fixed",
        zIndex: e.zIndex.toString()
      };
      return e.position === "right" ? w.right = `${e.offset.x || 24}px` : w.left = `${e.offset.x || 24}px`, w.bottom = `${e.offset.y || 24}px`, w;
    }), b = computed(() => [
      "su-float-button-container",
      `su-float-button-container--${e.position}`,
      `su-float-button-container--${e.size}`,
      {
        "su-float-button-container--hidden": !C.value,
        "su-float-button-container--has-slot": n.default,
        "su-float-button-container--disabled": e.disabled
      }
    ]), I = computed(() => [
      "su-float-button",
      `su-float-button--${e.size}`,
      {
        "su-float-button--has-badge": e.badge,
        "su-float-button--has-tooltip": e.showTooltip && e.label
      }
    ]), y = computed(() => [
      "su-float-button-tooltip",
      `su-float-button-tooltip--${e.tooltipPosition}`,
      `su-float-button-tooltip--in-${e.position}`
    ]), V = computed(() => {
      if (!e.href) return {};
      const w = {
        href: e.href
      };
      return e.target && (w.target = e.target), e.rel && (w.rel = e.rel), e.target === "_blank" && !e.rel && (w.rel = "noopener noreferrer"), w;
    }), f = () => {
      if (!e.hideOnScroll) return;
      const w = window.scrollY;
      w > u.value && w > 100 ? C.value = false : C.value = true, u.value = w;
    }, E = (w) => {
      e.disabled || e.loading || h2("click", w);
    }, $ = (w) => {
      e.showTooltip && e.label && (x.value = true), h2("focus", w);
    }, F = (w) => {
      x.value = false, h2("blur", w);
    }, g = () => {
      e.showTooltip && e.label && !e.disabled && (x.value = true);
    }, d = () => {
      x.value = false;
    };
    return onMounted(() => {
      e.hideOnScroll && window.addEventListener("scroll", f, { passive: true });
    }), onUnmounted(() => {
      e.hideOnScroll && window.removeEventListener("scroll", f);
    }), r({
      focus: () => {
        var w;
        (w = k.value) == null || w.focus();
      },
      floatButtonRef: k
    }), (w, M) => (openBlock(), createElementBlock("div", {
      class: normalizeClass(b.value),
      style: normalizeStyle(D.value)
    }, [
      w.$slots.default ? (openBlock(), createElementBlock("div", {
        key: 0,
        class: normalizeClass(["su-float-button-slot", `su-float-button-slot--${w.position}`])
      }, [
        renderSlot(w.$slots, "default")
      ], 2)) : createCommentVNode("", true),
      createBaseVNode("div", Dt, [
        w.badge ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: "su-float-button-badge",
          "aria-label": `Badge: ${w.badge}`
        }, toDisplayString(w.badge), 9, Mt)) : createCommentVNode("", true),
        (openBlock(), createElementBlock("div", {
          key: 1,
          class: normalizeClass(y.value),
          role: "tooltip",
          id: `${w.$attrs.id || "float-button"}-tooltip`
        }, [
          createTextVNode(toDisplayString(w.label) + " ", 1),
          M[0] || (M[0] = createBaseVNode("div", { class: "su-float-button-tooltip-arrow" }, null, -1))
        ], 10, qt)),
        (openBlock(), createBlock(resolveDynamicComponent(w.href ? Re : Ve), mergeProps({
          ref_key: "floatButtonRef",
          ref: k,
          class: I.value,
          variant: w.variant,
          size: w.size,
          icon: w.icon,
          iconDisplay: "only",
          disabled: w.disabled,
          loading: w.loading,
          "aria-label": w.label || w.ariaLabel,
          "aria-describedby": x.value && w.label ? `${w.$attrs.id || "float-button"}-tooltip` : w.ariaDescribedBy
        }, w.href ? V.value : {}, {
          label: "test",
          onClick: E,
          onFocus: $,
          onBlur: F,
          onMouseenter: g,
          onMouseleave: d
        }), null, 16, ["class", "variant", "size", "icon", "disabled", "loading", "aria-label", "aria-describedby"]))
      ])
    ], 6));
  }
});
var St = ["aria-label"];
var Rt = { key: 1 };
var At = ["srcset", "type", "media"];
var Ft = ["id", "src", "alt", "width", "height", "loading"];
var Pt = ["id", "src", "alt", "width", "height", "loading"];
var Et = ["aria-label"];
var Ge = defineComponent({
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
  setup(p, { expose: r, emit: a }) {
    const e = p, h2 = a, n = useAttrs(), k = ref(), C = ref(false), x = ref(false), u = ref(true), D = "image-" + useId(), b = computed(() => n.id || D), I = computed(() => {
      if (e.ratio === "auto") return {};
      let g;
      return typeof e.ratio == "number" ? g = e.ratio.toString() : g = e.ratio, {
        aspectRatio: g
      };
    }), y = computed(() => [
      "su-image-container",
      {
        "su-image-container--loading": u.value,
        "su-image-container--loaded": C.value,
        "su-image-container--error": x.value,
        "su-image-container--has-ratio": e.ratio !== "auto"
      }
    ]), V = computed(() => [
      "su-image",
      `su-image--fit-${e.fit}`,
      `su-image--position-${e.position}`,
      {
        "su-image--loaded": C.value,
        "su-image--error": x.value
      }
    ]), f = computed(() => {
      const g = {};
      return e.ariaLabel && (g["aria-label"] = e.ariaLabel), e.ariaDescribedBy && (g["aria-describedby"] = e.ariaDescribedBy), e.ariaHidden !== void 0 && (g["aria-hidden"] = e.ariaHidden), e.role && (g.role = e.role), g;
    }), E = (g) => {
      C.value = true, u.value = false, x.value = false, h2("load", g);
    }, $ = (g) => {
      if (x.value = true, u.value = false, e.fallback && k.value) {
        const d = k.value;
        if (d.src !== e.fallback) {
          d.src = e.fallback;
          return;
        }
      }
      h2("error", g);
    };
    return r({
      reload: () => {
        k.value && (C.value = false, u.value = true, x.value = false, k.value.src = e.src);
      },
      imageRef: k
    }), onMounted(() => {
      var g;
      (g = k.value) != null && g.complete && E(new Event("load"));
    }), (g, d) => (openBlock(), createElementBlock("div", {
      class: normalizeClass(y.value),
      style: normalizeStyle(I.value)
    }, [
      g.placeholder && u.value && !x.value ? (openBlock(), createElementBlock("div", {
        key: 0,
        class: "su-image-placeholder",
        style: normalizeStyle({ backgroundColor: g.placeholderColor }),
        "aria-label": g.alt + " - Chargement en cours"
      }, [...d[0] || (d[0] = [
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
      ])], 12, St)) : createCommentVNode("", true),
      g.sources && g.sources.length > 0 ? (openBlock(), createElementBlock("picture", Rt, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(g.sources, (B) => (openBlock(), createElementBlock("source", {
          key: B.srcset,
          srcset: B.srcset,
          type: B.type,
          media: B.media
        }, null, 8, At))), 128)),
        createBaseVNode("img", mergeProps({
          ref_key: "imageRef",
          ref: k,
          id: b.value,
          class: V.value,
          src: g.src,
          alt: g.alt,
          width: g.width,
          height: g.height,
          loading: g.lazy ? "lazy" : g.loading
        }, f.value, {
          onLoad: E,
          onError: $
        }), null, 16, Ft)
      ])) : (openBlock(), createElementBlock("img", mergeProps({
        key: 2,
        ref_key: "imageRef",
        ref: k,
        id: b.value,
        class: V.value,
        src: g.src,
        alt: g.alt,
        width: g.width,
        height: g.height,
        loading: g.lazy ? "lazy" : g.loading
      }, f.value, {
        onLoad: E,
        onError: $
      }), null, 16, Pt)),
      x.value ? (openBlock(), createElementBlock("div", {
        key: 3,
        class: "su-image-error",
        "aria-label": g.alt + " - Erreur de chargement"
      }, [...d[1] || (d[1] = [
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
      ])], 8, Et)) : createCommentVNode("", true)
    ], 6));
  }
});
var Tt = ["id"];
var Ht = {
  key: 0,
  class: "su-avatar-loading",
  "aria-hidden": "true"
};
var Kt = ["aria-label"];
var Ot = {
  key: 3,
  class: "su-avatar-placeholder",
  "aria-label": "Avatar par défaut"
};
var jt = ["aria-label"];
var Gt = ["aria-label"];
var Ue = defineComponent({
  __name: "Avatar",
  props: {
    src: {},
    alt: {},
    fallback: {},
    name: {},
    size: { default: "md" },
    variant: { default: "circle" },
    status: {},
    badge: {},
    badgeColor: {},
    loading: { type: Boolean, default: false },
    clickable: { type: Boolean, default: false },
    ariaLabel: {},
    ariaLabelledBy: {},
    ariaDescribedBy: {},
    ariaHidden: { type: Boolean },
    role: {},
    tabIndex: {}
  },
  emits: ["click", "load", "error"],
  setup(p, { expose: r, emit: a }) {
    const e = p, h2 = a, n = useAttrs(), k = ref(), C = ref(false), x = ref(false), u = "avatar-" + useId(), D = computed(() => n.id || u), b = computed(() => {
      if (!e.name) return "";
      const M = e.name.trim().split(/\s+/);
      return M.length === 1 ? M[0].charAt(0).toUpperCase() : (M[0].charAt(0) + M[M.length - 1].charAt(0)).toUpperCase();
    }), I = computed(() => (e.src || e.fallback) && !x.value), y = computed(() => !I.value && e.name), V = computed(() => [
      "su-avatar",
      `su-avatar--${e.size}`,
      `su-avatar--${e.variant}`,
      {
        "su-avatar--clickable": e.clickable,
        "su-avatar--loading": e.loading,
        "su-avatar--has-status": e.status,
        "su-avatar--has-badge": e.badge,
        "su-avatar--image": I.value,
        "su-avatar--initials": y.value
      }
    ]), f = computed(() => [
      "su-avatar-status",
      `su-avatar-status--${e.size}`,
      `su-avatar-status--${e.status}`
    ]), E = computed(() => [
      "su-avatar-badge",
      `su-avatar-badge--${e.size}`,
      {
        "su-avatar-badge--custom-color": e.badgeColor
      }
    ]), $ = computed(() => {
      const M = {};
      return e.ariaLabel && (M["aria-label"] = e.ariaLabel), e.ariaDescribedBy && (M["aria-describedby"] = e.ariaDescribedBy), e.role && (M.role = e.role), e.clickable && (M.role = M.role || "button", M.tabindex = e.tabIndex || 0), M;
    }), F = (M) => {
      e.clickable && !e.loading && h2("click", M);
    }, g = (M) => {
      C.value = true, x.value = false, h2("load", M);
    }, d = (M) => {
      x.value = true, h2("error", M);
    }, B = (M) => {
      e.clickable && (M.key === "Enter" || M.key === " ") && (M.preventDefault(), F(M));
    };
    return r({
      focus: () => {
        var M;
        (M = k.value) == null || M.focus();
      },
      avatarRef: k
    }), (M, N) => (openBlock(), createElementBlock("div", mergeProps({
      ref_key: "avatarRef",
      ref: k,
      id: D.value,
      class: V.value
    }, $.value, {
      onClick: F,
      onKeydown: B
    }), [
      M.loading ? (openBlock(), createElementBlock("div", Ht, [...N[0] || (N[0] = [
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
      ])])) : I.value ? (openBlock(), createBlock(Ge, {
        key: 1,
        src: M.src || M.fallback || "",
        fallback: M.fallback,
        alt: M.alt || `Avatar de ${M.name || "utilisateur"}`,
        ratio: "1/1",
        fit: "cover",
        position: "center",
        placeholder: false,
        class: "su-avatar-image",
        onLoad: g,
        onError: d
      }, null, 8, ["src", "fallback", "alt"])) : y.value ? (openBlock(), createElementBlock("div", {
        key: 2,
        class: "su-avatar-initials",
        "aria-label": `Avatar avec initiales de ${M.name}`
      }, toDisplayString(b.value), 9, Kt)) : (openBlock(), createElementBlock("div", Ot, [...N[1] || (N[1] = [
        createBaseVNode("svg", {
          class: "su-avatar-placeholder-icon",
          viewBox: "0 0 24 24",
          fill: "currentColor",
          "aria-hidden": "true"
        }, [
          createBaseVNode("path", { d: "M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" })
        ], -1)
      ])])),
      M.status ? (openBlock(), createElementBlock("div", {
        key: 4,
        class: normalizeClass(f.value),
        "aria-label": `Statut: ${M.status}`
      }, null, 10, jt)) : createCommentVNode("", true),
      M.badge ? (openBlock(), createElementBlock("div", {
        key: 5,
        class: normalizeClass(E.value),
        style: normalizeStyle(M.badgeColor ? { backgroundColor: M.badgeColor } : void 0),
        "aria-label": `${M.badge} notification(s)`
      }, toDisplayString(M.badge), 15, Gt)) : createCommentVNode("", true)
    ], 16, Tt));
  }
});
var Ut = {
  key: 0,
  class: "su-avatars-group-before"
};
var Zt = { class: "su-avatars-group-list" };
var Nt = ["aria-label"];
var Wt = { class: "su-avatars-group-more-text" };
var Yt = {
  key: 1,
  class: "su-avatars-group-after"
};
var Xt = defineComponent({
  __name: "AvatarsGroup",
  props: {
    avatars: { default: () => [] },
    size: { default: "md" },
    variant: { default: "circle" },
    max: { default: 5 },
    spacing: { default: "md" },
    clickable: { type: Boolean, default: false },
    ariaLabel: {},
    ariaLabelledBy: {},
    ariaDescribedBy: {},
    ariaHidden: { type: Boolean },
    role: {},
    tabIndex: {}
  },
  emits: ["avatar-click"],
  setup(p, { emit: r }) {
    const a = p, e = r;
    useSlots();
    const h2 = computed(() => a.avatars.slice(0, a.max)), n = computed(() => Math.max(0, a.avatars.length - a.max)), k = computed(() => [
      "su-avatars-group",
      `su-avatars-group--${a.size}`,
      `su-avatars-group--spacing-${a.spacing}`,
      {
        "su-avatars-group--clickable": a.clickable
      }
    ]), C = computed(() => [
      "su-avatar",
      "su-avatars-group-more",
      `su-avatar--${a.size}`,
      `su-avatar--${a.variant}`,
      {
        "su-avatar--clickable": a.clickable
      }
    ]), x = computed(() => {
      const b = {
        role: "group"
      };
      return a.ariaLabel && (b["aria-label"] = a.ariaLabel), a.ariaDescribedBy && (b["aria-describedby"] = a.ariaDescribedBy), a.role && (b.role = a.role), b;
    }), u = (b, I, y) => {
      a.clickable && e("avatar-click", b, I, y);
    }, D = (b) => {
      a.clickable && e("avatar-click", { type: "more", count: n.value }, -1, b);
    };
    return (b, I) => (openBlock(), createElementBlock("div", mergeProps({ class: k.value }, x.value), [
      b.$slots.before ? (openBlock(), createElementBlock("div", Ut, [
        renderSlot(b.$slots, "before")
      ])) : createCommentVNode("", true),
      createBaseVNode("div", Zt, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(h2.value, (y, V) => (openBlock(), createBlock(Ue, {
          key: `avatar-${V}`,
          src: y.src,
          alt: y.alt,
          fallback: y.fallback,
          name: y.name,
          size: b.size,
          variant: b.variant,
          status: y.status,
          badge: y.badge,
          badgeColor: y.badgeColor,
          loading: y.loading,
          clickable: b.clickable,
          ariaLabel: y.ariaLabel,
          class: "su-avatars-group-avatar",
          onClick: (f) => u(y, V, f)
        }, null, 8, ["src", "alt", "fallback", "name", "size", "variant", "status", "badge", "badgeColor", "loading", "clickable", "ariaLabel", "onClick"]))), 128)),
        n.value > 0 ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: normalizeClass(C.value),
          "aria-label": `${n.value} autre(s) utilisateur(s)`,
          onClick: D
        }, [
          createBaseVNode("span", Wt, " +" + toDisplayString(n.value), 1)
        ], 10, Nt)) : createCommentVNode("", true)
      ]),
      b.$slots.after ? (openBlock(), createElementBlock("div", Yt, [
        renderSlot(b.$slots, "after")
      ])) : createCommentVNode("", true)
    ], 16));
  }
});
var el = {
  install(p, r = {}) {
    const a = r.prefix || "Su", e = document.documentElement;
    if (typeof document < "u") {
      if (r.buttonRadius && e.style.setProperty("--su-button-default-radius", `var(--su-border-radius-${r.buttonRadius})`), r.buttonVariant) {
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
        }[r.buttonVariant];
        n && (e.style.setProperty("--su-button-variant-primary-bg", n.bg), e.style.setProperty("--su-button-variant-primary-color", n.color), e.style.setProperty("--su-button-variant-primary-border", n.border), e.style.setProperty("--su-button-variant-primary-hover-bg", n.hoverBg), e.style.setProperty("--su-button-variant-primary-hover-shadow", n.hoverShadow));
      }
      if (r.buttonSize) {
        const n = {
          sm: "sm",
          md: "md",
          lg: "lg"
        }[r.buttonSize];
        n && (e.style.setProperty("--su-button-size-md-padding", `var(--su-button-size-${n}-padding)`), e.style.setProperty("--su-button-size-md-font-size", `var(--su-button-size-${n}-font-size)`), e.style.setProperty("--su-button-size-md-line-height", `var(--su-button-size-${n}-line-height)`), e.style.setProperty("--su-button-size-md-min-height", `var(--su-button-size-${n}-min-height)`), e.style.setProperty("--su-button-size-md-icon-only-padding", `var(--su-button-size-${n}-icon-only-padding)`), e.style.setProperty("--su-button-size-md-icon-only-width", `var(--su-button-size-${n}-icon-only-width)`));
      }
    }
    if (r.linkVariant) {
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
      }[r.linkVariant];
      n && (e.style.setProperty("--su-link-variant-default-color", n.color), e.style.setProperty("--su-link-variant-default-hover-color", n.hoverColor), e.style.setProperty("--su-link-variant-default-active-color", n.activeColor));
    }
    if (r.linkSize) {
      const n = {
        sm: "sm",
        md: "md",
        lg: "lg"
      }[r.linkSize];
      n && (e.style.setProperty("--su-link-size-md-font-size", `var(--su-link-size-${n}-font-size)`), e.style.setProperty("--su-link-size-md-line-height", `var(--su-link-size-${n}-line-height)`), e.style.setProperty("--su-link-size-md-padding", `var(--su-link-size-${n}-padding)`), e.style.setProperty("--su-link-size-md-icon-size", `var(--su-link-size-${n}-icon-size)`), e.style.setProperty("--su-link-size-md-icon-only-padding", `var(--su-link-size-${n}-icon-only-padding)`), e.style.setProperty("--su-link-size-md-icon-only-size", `var(--su-link-size-${n}-icon-only-size)`));
    }
    r.linkUnderline && e.style.setProperty("--su-link-default-underline", r.linkUnderline), p.component(`${a}FormField`, ye), p.component(`${a}Button`, Ve), p.component(`${a}Password`, za), p.component(`${a}ButtonsGroup`, Ia), p.component(`${a}Link`, Re), p.component(`${a}LinksGroup`, Da), p.component(`${a}Input`, Se), p.component(`${a}SelectBox`, Pe), p.component(`${a}RadioGroup`, Ee), p.component(`${a}CheckboxGroup`, Te), p.component(`${a}Switch`, He), p.component(`${a}FileUpload`, Ke), p.component(`${a}Textarea`, Oe), p.component(`${a}Slider`, je), p.component(`${a}FormFields`, _t), p.component(`${a}FloatButton`, Vt), p.component(`${a}Dialog`, xt), p.component(`${a}Image`, Ge), p.component(`${a}Avatar`, Ue), p.component(`${a}AvatarsGroup`, Xt);
  }
};
export {
  Ue as Avatar,
  Xt as AvatarsGroup,
  Ve as Button,
  Ia as ButtonsGroup,
  Te as CheckboxGroup,
  xt as Dialog,
  Ke as FileUpload,
  Vt as FloatButton,
  ye as FormField,
  _t as FormFields,
  Ge as Image,
  Se as Input,
  Re as Link,
  Da as LinksGroup,
  za as Password,
  Ee as RadioGroup,
  Pe as SelectBox,
  je as Slider,
  He as Switch,
  Oe as Textarea,
  Jt as accessibility,
  el as default
};
//# sourceMappingURL=@surgeup_ds-vue.js.map
