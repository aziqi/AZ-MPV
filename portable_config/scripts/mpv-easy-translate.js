var _excluded = ["text"],
  _excluded2 = ["mousePos"];
var _jt$console;
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i.return) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n2 = 0, F = function F() {}; return { s: F, n: function n() { return _n2 >= r.length ? { done: !0 } : { done: !1, value: r[_n2++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t.return || t.return(); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var wj = Object.create;
var H1 = Object.defineProperty;
var Mj = Object.getOwnPropertyDescriptor;
var Dj = Object.getOwnPropertyNames;
var Bj = Object.getPrototypeOf,
  Ij = Object.prototype.hasOwnProperty;
var F1 = function (e) {
  return (typeof require === "undefined" ? "undefined" : _typeof(require)) < "u" ? require : (typeof Proxy === "undefined" ? "undefined" : _typeof(Proxy)) < "u" ? new Proxy(e, {
    get: function get(t, a) {
      return ((typeof require === "undefined" ? "undefined" : _typeof(require)) < "u" ? require : t)[a];
    }
  }) : e;
}(function (e) {
  if ((typeof require === "undefined" ? "undefined" : _typeof(require)) < "u") return require.apply(this, arguments);
  throw Error('Dynamic require of "' + e + '" is not supported');
});
var v = function v(e, t) {
  return function () {
    try {
      return t || e((t = {
        exports: {}
      }).exports, t), t.exports;
    } catch (a) {
      throw t = 0, a;
    }
  };
};
var Pj = function Pj(e, t, a, i) {
  if (t && _typeof(t) == "object" || typeof t == "function") {
    var _iterator = _createForOfIteratorHelper(Dj(t)),
      _step;
    try {
      var _loop = function _loop() {
        var u = _step.value;
        !Ij.call(e, u) && u !== a && H1(e, u, {
          get: function get() {
            return t[u];
          },
          enumerable: !(i = Mj(t, u)) || i.enumerable
        });
      };
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        _loop();
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  }
  return e;
};
var J = function J(e, t, a) {
  return a = e != null ? wj(Bj(e)) : {}, Pj(t || !e || !e.__esModule ? H1(a, "default", {
    value: e,
    enumerable: !0
  }) : a, e);
};
var ae = v(function (ih, G1) {
  "use strict";

  var qs = function qs(e) {
    return e && e.Math === Math && e;
  };
  G1.exports = qs((typeof globalThis === "undefined" ? "undefined" : _typeof(globalThis)) == "object" && globalThis) || qs((typeof window === "undefined" ? "undefined" : _typeof(window)) == "object" && window) || qs((typeof self === "undefined" ? "undefined" : _typeof(self)) == "object" && self) || qs((typeof global === "undefined" ? "undefined" : _typeof(global)) == "object" && global) || qs(_typeof(ih) == "object" && ih) || function () {
    return this;
  }() || Function("return this")();
});
var W = v(function (Vve, K1) {
  "use strict";

  K1.exports = function (e) {
    try {
      return !!e();
    } catch (_unused) {
      return !0;
    }
  };
});
var De = v(function (Yve, V1) {
  "use strict";

  var Lj = W();
  V1.exports = !Lj(function () {
    return Object.defineProperty({}, 1, {
      get: function get() {
        return 7;
      }
    })[1] !== 7;
  });
});
var _s = v(function (Xve, Y1) {
  "use strict";

  var jj = W();
  Y1.exports = !jj(function () {
    var e = function () {}.bind();
    return typeof e != "function" || e.hasOwnProperty("prototype");
  });
});
var Oe = v(function (kve, X1) {
  "use strict";

  var Hj = _s(),
    lf = Function.prototype.call;
  X1.exports = Hj ? lf.bind(lf) : function () {
    return lf.apply(lf, arguments);
  };
});
var cf = v(function (Z1) {
  "use strict";

  var k1 = {}.propertyIsEnumerable,
    Q1 = Object.getOwnPropertyDescriptor,
    Fj = Q1 && !k1.call({
      1: 2
    }, 1);
  Z1.f = Fj ? function (t) {
    var a = Q1(this, t);
    return !!a && a.enumerable;
  } : k1;
});
var jn = v(function (Zve, J1) {
  "use strict";

  J1.exports = function (e, t) {
    return {
      enumerable: !(e & 1),
      configurable: !(e & 2),
      writable: !(e & 4),
      value: t
    };
  };
});
var Z = v(function (Jve, eT) {
  "use strict";

  var W1 = _s(),
    $1 = Function.prototype,
    oh = $1.call,
    Gj = W1 && $1.bind.bind(oh, oh);
  eT.exports = W1 ? Gj : function (e) {
    return function () {
      return oh.apply(e, arguments);
    };
  };
});
var _r = v(function (Wve, rT) {
  "use strict";

  var tT = Z(),
    Kj = tT({}.toString),
    Vj = tT("".slice);
  rT.exports = function (e) {
    return Vj(Kj(e), 8, -1);
  };
});
var As = v(function ($ve, nT) {
  "use strict";

  var Yj = Z(),
    Xj = W(),
    kj = _r(),
    uh = Object,
    Qj = Yj("".split);
  nT.exports = Xj(function () {
    return !uh("z").propertyIsEnumerable(0);
  }) ? function (e) {
    return kj(e) === "String" ? Qj(e, "") : uh(e);
  } : uh;
});
var Hn = v(function (ehe, aT) {
  "use strict";

  aT.exports = function (e) {
    return e == null;
  };
});
var Ue = v(function (the, iT) {
  "use strict";

  var Zj = Hn(),
    Jj = TypeError;
  iT.exports = function (e) {
    if (Zj(e)) throw new Jj("Can't call method on " + e);
    return e;
  };
});
var Fn = v(function (rhe, oT) {
  "use strict";

  var Wj = As(),
    $j = Ue();
  oT.exports = function (e) {
    return Wj($j(e));
  };
});
var Ce = v(function (nhe, uT) {
  "use strict";

  var sh = (typeof document === "undefined" ? "undefined" : _typeof(document)) == "object" && document.all;
  uT.exports = _typeof(sh) > "u" && sh !== void 0 ? function (e) {
    return typeof e == "function" || e === sh;
  } : function (e) {
    return typeof e == "function";
  };
});
var Te = v(function (ahe, sT) {
  "use strict";

  var e5 = Ce();
  sT.exports = function (e) {
    return _typeof(e) == "object" ? e !== null : e5(e);
  };
});
var Ut = v(function (ihe, lT) {
  "use strict";

  var lh = ae(),
    t5 = Ce(),
    r5 = function r5(e) {
      return t5(e) ? e : void 0;
    };
  lT.exports = function (e, t) {
    return arguments.length < 2 ? r5(lh[e]) : lh[e] && lh[e][t];
  };
});
var Ra = v(function (ohe, cT) {
  "use strict";

  var n5 = Z();
  cT.exports = n5({}.isPrototypeOf);
});
var Ai = v(function (uhe, dT) {
  "use strict";

  var a5 = ae(),
    fT = a5.navigator,
    pT = fT && fT.userAgent;
  dT.exports = pT ? String(pT) : "";
});
var pf = v(function (she, bT) {
  "use strict";

  var yT = ae(),
    ch = Ai(),
    mT = yT.process,
    vT = yT.Deno,
    hT = mT && mT.versions || vT && vT.version,
    gT = hT && hT.v8,
    jr,
    ff;
  gT && (jr = gT.split("."), ff = jr[0] > 0 && jr[0] < 4 ? 1 : +(jr[0] + jr[1]));
  !ff && ch && (jr = ch.match(/Edge\/(\d+)/), (!jr || jr[1] >= 74) && (jr = ch.match(/Chrome\/(\d+)/), jr && (ff = +jr[1])));
  bT.exports = ff;
});
var fh = v(function (lhe, ST) {
  "use strict";

  var xT = pf(),
    i5 = W(),
    o5 = ae(),
    u5 = o5.String;
  ST.exports = !!Object.getOwnPropertySymbols && !i5(function () {
    var e = Symbol("symbol detection");
    return !u5(e) || !(Object(e) instanceof Symbol) || !Symbol.sham && xT && xT < 41;
  });
});
var ph = v(function (che, ET) {
  "use strict";

  var s5 = fh();
  ET.exports = s5 && !Symbol.sham && _typeof(Symbol.iterator) == "symbol";
});
var Os = v(function (fhe, TT) {
  "use strict";

  var l5 = Ut(),
    c5 = Ce(),
    f5 = Ra(),
    p5 = ph(),
    d5 = Object;
  TT.exports = p5 ? function (e) {
    return _typeof(e) == "symbol";
  } : function (e) {
    var t = l5("Symbol");
    return c5(t) && f5(t.prototype, d5(e));
  };
});
var Io = v(function (phe, qT) {
  "use strict";

  var m5 = String;
  qT.exports = function (e) {
    try {
      return m5(e);
    } catch (_unused2) {
      return "Object";
    }
  };
});
var Dt = v(function (dhe, _T) {
  "use strict";

  var v5 = Ce(),
    h5 = Io(),
    g5 = TypeError;
  _T.exports = function (e) {
    if (v5(e)) return e;
    throw new g5(h5(e) + " is not a function");
  };
});
var nn = v(function (mhe, AT) {
  "use strict";

  var y5 = Dt(),
    b5 = Hn();
  AT.exports = function (e, t) {
    var a = e[t];
    return b5(a) ? void 0 : y5(a);
  };
});
var CT = v(function (vhe, OT) {
  "use strict";

  var dh = Oe(),
    mh = Ce(),
    vh = Te(),
    x5 = TypeError;
  OT.exports = function (e, t) {
    var a, i;
    if (t === "string" && mh(a = e.toString) && !vh(i = dh(a, e)) || mh(a = e.valueOf) && !vh(i = dh(a, e)) || t !== "string" && mh(a = e.toString) && !vh(i = dh(a, e))) return i;
    throw new x5("Can't convert object to primitive value");
  };
});
var Ve = v(function (hhe, RT) {
  "use strict";

  RT.exports = !1;
});
var df = v(function (ghe, wT) {
  "use strict";

  var NT = ae(),
    S5 = Object.defineProperty;
  wT.exports = function (e, t) {
    try {
      S5(NT, e, {
        value: t,
        configurable: !0,
        writable: !0
      });
    } catch (_unused3) {
      NT[e] = t;
    }
    return t;
  };
});
var mf = v(function (yhe, BT) {
  "use strict";

  var E5 = Ve(),
    T5 = ae(),
    q5 = df(),
    MT = "__core-js_shared__",
    DT = BT.exports = T5[MT] || q5(MT, {});
  (DT.versions || (DT.versions = [])).push({
    version: "3.49.0",
    mode: E5 ? "pure" : "global",
    copyright: "© 2013–2025 Denis Pushkarev (zloirock.ru), 2025–2026 CoreJS Company (core-js.io). All rights reserved.",
    license: "https://github.com/zloirock/core-js/blob/v3.49.0/LICENSE",
    source: "https://github.com/zloirock/core-js"
  });
});
var vf = v(function (bhe, PT) {
  "use strict";

  var IT = mf();
  PT.exports = function (e, t) {
    return IT[e] || (IT[e] = t || {});
  };
});
var mr = v(function (xhe, UT) {
  "use strict";

  var _5 = Ue(),
    A5 = Object;
  UT.exports = function (e) {
    return A5(_5(e));
  };
});
var st = v(function (She, zT) {
  "use strict";

  var O5 = Z(),
    C5 = mr(),
    R5 = O5({}.hasOwnProperty);
  zT.exports = Object.hasOwn || function (t, a) {
    return R5(C5(t), a);
  };
});
var Po = v(function (Ehe, LT) {
  "use strict";

  var N5 = Z(),
    w5 = 0,
    M5 = Math.random(),
    D5 = N5(1.1.toString);
  LT.exports = function (e) {
    return "Symbol(" + (e === void 0 ? "" : e) + ")_" + D5(++w5 + M5, 36);
  };
});
var ze = v(function (The, HT) {
  "use strict";

  var B5 = ae(),
    I5 = vf(),
    jT = st(),
    P5 = Po(),
    U5 = fh(),
    z5 = ph(),
    Uo = B5.Symbol,
    hh = I5("wks"),
    L5 = z5 ? Uo.for || Uo : Uo && Uo.withoutSetter || P5;
  HT.exports = function (e) {
    return jT(hh, e) || (hh[e] = U5 && jT(Uo, e) ? Uo[e] : L5("Symbol." + e)), hh[e];
  };
});
var gh = v(function (qhe, KT) {
  "use strict";

  var j5 = Oe(),
    FT = Te(),
    GT = Os(),
    H5 = nn(),
    F5 = CT(),
    G5 = ze(),
    K5 = TypeError,
    V5 = G5("toPrimitive");
  KT.exports = function (e, t) {
    if (!FT(e) || GT(e)) return e;
    var a = H5(e, V5),
      i;
    if (a) {
      if (t === void 0 && (t = "default"), i = j5(a, e, t), !FT(i) || GT(i)) return i;
      throw new K5("Can't convert object to primitive value");
    }
    return t === void 0 && (t = "number"), F5(e, t);
  };
});
var yh = v(function (_he, VT) {
  "use strict";

  var Y5 = gh(),
    X5 = Os();
  VT.exports = function (e) {
    var t = Y5(e, "string");
    return X5(t) ? t : t + "";
  };
});
var Cs = v(function (Ahe, XT) {
  "use strict";

  var k5 = ae(),
    YT = Te(),
    bh = k5.document,
    Q5 = YT(bh) && YT(bh.createElement);
  XT.exports = function (e) {
    return Q5 ? bh.createElement(e) : {};
  };
});
var xh = v(function (Ohe, kT) {
  "use strict";

  var Z5 = De(),
    J5 = W(),
    W5 = Cs();
  kT.exports = !Z5 && !J5(function () {
    return Object.defineProperty(W5("div"), "a", {
      get: function get() {
        return 7;
      }
    }).a !== 7;
  });
});
var zo = v(function (ZT) {
  "use strict";

  var $5 = De(),
    eH = Oe(),
    tH = cf(),
    rH = jn(),
    nH = Fn(),
    aH = yh(),
    iH = st(),
    oH = xh(),
    QT = Object.getOwnPropertyDescriptor;
  ZT.f = $5 ? QT : function (t, a) {
    if (t = nH(t), a = aH(a), oH) try {
      return QT(t, a);
    } catch (_unused4) {}
    if (iH(t, a)) return rH(!eH(tH.f, t, a), t[a]);
  };
});
var Sh = v(function (Rhe, JT) {
  "use strict";

  var uH = De(),
    sH = W();
  JT.exports = uH && sH(function () {
    return Object.defineProperty(function () {}, "prototype", {
      value: 42,
      writable: !1
    }).prototype !== 42;
  });
});
var Le = v(function (Nhe, WT) {
  "use strict";

  var lH = Te(),
    cH = String,
    fH = TypeError;
  WT.exports = function (e) {
    if (lH(e)) return e;
    throw new fH(cH(e) + " is not an object");
  };
});
var Yt = v(function (eq) {
  "use strict";

  var pH = De(),
    dH = xh(),
    mH = Sh(),
    hf = Le(),
    $T = yh(),
    vH = TypeError,
    Eh = Object.defineProperty,
    hH = Object.getOwnPropertyDescriptor,
    Th = "enumerable",
    qh = "configurable",
    _h = "writable";
  eq.f = pH ? mH ? function (t, a, i) {
    if (hf(t), a = $T(a), hf(i), typeof t == "function" && a === "prototype" && "value" in i && _h in i && !i[_h]) {
      var u = hH(t, a);
      u && u[_h] && (t[a] = i.value, i = {
        configurable: qh in i ? i[qh] : u[qh],
        enumerable: Th in i ? i[Th] : u[Th],
        writable: !1
      });
    }
    return Eh(t, a, i);
  } : Eh : function (t, a, i) {
    if (hf(t), a = $T(a), hf(i), dH) try {
      return Eh(t, a, i);
    } catch (_unused5) {}
    if ("get" in i || "set" in i) throw new vH("Accessors not supported");
    return "value" in i && (t[a] = i.value), t;
  };
});
var Ar = v(function (Mhe, tq) {
  "use strict";

  var gH = De(),
    yH = Yt(),
    bH = jn();
  tq.exports = gH ? function (e, t, a) {
    return yH.f(e, t, bH(1, a));
  } : function (e, t, a) {
    return e[t] = a, e;
  };
});
var Rs = v(function (Dhe, nq) {
  "use strict";

  var Ah = De(),
    xH = st(),
    rq = Function.prototype,
    SH = Ah && Object.getOwnPropertyDescriptor,
    Oh = xH(rq, "name"),
    EH = Oh && function () {}.name === "something",
    TH = Oh && (!Ah || Ah && SH(rq, "name").configurable);
  nq.exports = {
    EXISTS: Oh,
    PROPER: EH,
    CONFIGURABLE: TH
  };
});
var gf = v(function (Bhe, aq) {
  "use strict";

  var qH = Z(),
    _H = Ce(),
    Ch = mf(),
    AH = qH(Function.toString);
  _H(Ch.inspectSource) || (Ch.inspectSource = function (e) {
    return AH(e);
  });
  aq.exports = Ch.inspectSource;
});
var Rh = v(function (Ihe, oq) {
  "use strict";

  var OH = ae(),
    CH = Ce(),
    iq = OH.WeakMap;
  oq.exports = CH(iq) && /native code/.test(String(iq));
});
var yf = v(function (Phe, sq) {
  "use strict";

  var RH = vf(),
    NH = Po(),
    uq = RH("keys");
  sq.exports = function (e) {
    return uq[e] || (uq[e] = NH(e));
  };
});
var Ns = v(function (Uhe, lq) {
  "use strict";

  lq.exports = {};
});
var vr = v(function (zhe, pq) {
  "use strict";

  var wH = Rh(),
    fq = ae(),
    MH = Te(),
    DH = Ar(),
    Nh = st(),
    wh = mf(),
    BH = yf(),
    IH = Ns(),
    cq = "Object already initialized",
    Mh = fq.TypeError,
    PH = fq.WeakMap,
    bf,
    ws,
    xf,
    UH = function UH(e) {
      return xf(e) ? ws(e) : bf(e, {});
    },
    zH = function zH(e) {
      return function (t) {
        var a;
        if (!MH(t) || (a = ws(t)).type !== e) throw new Mh("Incompatible receiver, " + e + " required");
        return a;
      };
    };
  wH || wh.state ? (Hr = wh.state || (wh.state = new PH()), Hr.get = Hr.get, Hr.has = Hr.has, Hr.set = Hr.set, bf = function bf(e, t) {
    if (Hr.has(e)) throw new Mh(cq);
    return t.facade = e, Hr.set(e, t), t;
  }, ws = function ws(e) {
    return Hr.get(e) || {};
  }, xf = function xf(e) {
    return Hr.has(e);
  }) : (Oi = BH("state"), IH[Oi] = !0, bf = function bf(e, t) {
    if (Nh(e, Oi)) throw new Mh(cq);
    return t.facade = e, DH(e, Oi, t), t;
  }, ws = function ws(e) {
    return Nh(e, Oi) ? e[Oi] : {};
  }, xf = function xf(e) {
    return Nh(e, Oi);
  });
  var Hr, Oi;
  pq.exports = {
    set: bf,
    get: ws,
    has: xf,
    enforce: UH,
    getterFor: zH
  };
});
var Ih = v(function (Lhe, vq) {
  "use strict";

  var Bh = Z(),
    LH = W(),
    jH = Ce(),
    Sf = st(),
    Dh = De(),
    HH = Rs().CONFIGURABLE,
    FH = gf(),
    mq = vr(),
    GH = mq.enforce,
    KH = mq.get,
    dq = String,
    Ef = Object.defineProperty,
    VH = Bh("".slice),
    YH = Bh("".replace),
    XH = Bh([].join),
    kH = Dh && !LH(function () {
      return Ef(function () {}, "length", {
        value: 8
      }).length !== 8;
    }),
    QH = String(String).split("String"),
    ZH = vq.exports = function (e, t, a) {
      VH(dq(t), 0, 7) === "Symbol(" && (t = "[" + YH(dq(t), /^Symbol\(([^)]*)\).*$/, "$1") + "]"), a && a.getter && (t = "get " + t), a && a.setter && (t = "set " + t), (!Sf(e, "name") || HH && e.name !== t) && (Dh ? Ef(e, "name", {
        value: t,
        configurable: !0
      }) : e.name = t), kH && a && Sf(a, "arity") && e.length !== a.arity && Ef(e, "length", {
        value: a.arity
      });
      try {
        a && Sf(a, "constructor") && a.constructor ? Dh && Ef(e, "prototype", {
          writable: !1
        }) : e.prototype && (e.prototype = void 0);
      } catch (_unused6) {}
      var i = GH(e);
      return Sf(i, "source") || (i.source = XH(QH, typeof t == "string" ? t : "")), e;
    };
  Function.prototype.toString = ZH(function () {
    return jH(this) && KH(this).source || FH(this);
  }, "toString");
});
var zt = v(function (jhe, hq) {
  "use strict";

  var JH = Ce(),
    WH = Yt(),
    $H = Ih(),
    eF = df();
  hq.exports = function (e, t, a, i) {
    i || (i = {});
    var u = i.enumerable,
      l = i.name !== void 0 ? i.name : t;
    if (JH(a) && $H(a, l, i), i.global) u ? e[t] = a : eF(t, a);else {
      try {
        i.unsafe ? e[t] && (u = !0) : delete e[t];
      } catch (_unused7) {}
      u ? e[t] = a : WH.f(e, t, {
        value: a,
        enumerable: !1,
        configurable: !i.nonConfigurable,
        writable: !i.nonWritable
      });
    }
    return e;
  };
});
var yq = v(function (Hhe, gq) {
  "use strict";

  var tF = Math.ceil,
    rF = Math.floor;
  gq.exports = Math.trunc || function (t) {
    var a = +t;
    return (a > 0 ? rF : tF)(a);
  };
});
var Xt = v(function (Fhe, bq) {
  "use strict";

  var nF = yq();
  bq.exports = function (e) {
    var t = +e;
    return t !== t || t === 0 ? 0 : nF(t);
  };
});
var Ms = v(function (Ghe, xq) {
  "use strict";

  var aF = Xt(),
    iF = Math.max,
    oF = Math.min;
  xq.exports = function (e, t) {
    var a = aF(e);
    return a < 0 ? iF(a + t, 0) : oF(a, t);
  };
});
var Fr = v(function (Khe, Sq) {
  "use strict";

  var uF = Xt(),
    sF = Math.min;
  Sq.exports = function (e) {
    var t = uF(e);
    return t > 0 ? sF(t, 9007199254740991) : 0;
  };
});
var an = v(function (Vhe, Eq) {
  "use strict";

  var lF = Fr();
  Eq.exports = function (e) {
    return lF(e.length);
  };
});
var Ph = v(function (Yhe, qq) {
  "use strict";

  var cF = Fn(),
    fF = Ms(),
    pF = an(),
    Tq = function Tq(e) {
      return function (t, a, i) {
        var u = cF(t),
          l = pF(u);
        if (l === 0) return !e && -1;
        var c = fF(i, l),
          d;
        if (e && a !== a) {
          for (; l > c;) if (d = u[c++], d !== d) return !0;
        } else for (; l > c; c++) if ((e || c in u) && u[c] === a) return e || c || 0;
        return !e && -1;
      };
    };
  qq.exports = {
    includes: Tq(!0),
    indexOf: Tq(!1)
  };
});
var zh = v(function (Xhe, Aq) {
  "use strict";

  var dF = Z(),
    Uh = st(),
    mF = Fn(),
    vF = Ph().indexOf,
    hF = Ns(),
    _q = dF([].push);
  Aq.exports = function (e, t) {
    var a = mF(e),
      i = 0,
      u = [],
      l;
    for (l in a) !Uh(hF, l) && Uh(a, l) && _q(u, l);
    for (; t.length > i;) Uh(a, l = t[i++]) && (~vF(u, l) || _q(u, l));
    return u;
  };
});
var Tf = v(function (khe, Oq) {
  "use strict";

  Oq.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"];
});
var Ds = v(function (Cq) {
  "use strict";

  var gF = zh(),
    yF = Tf(),
    bF = yF.concat("length", "prototype");
  Cq.f = Object.getOwnPropertyNames || function (t) {
    return gF(t, bF);
  };
});
var Lh = v(function (Rq) {
  "use strict";

  Rq.f = Object.getOwnPropertySymbols;
});
var wq = v(function (Jhe, Nq) {
  "use strict";

  var xF = Ut(),
    SF = Z(),
    EF = Ds(),
    TF = Lh(),
    qF = Le(),
    _F = SF([].concat);
  Nq.exports = xF("Reflect", "ownKeys") || function (t) {
    var a = EF.f(qF(t)),
      i = TF.f;
    return i ? _F(a, i(t)) : a;
  };
});
var qf = v(function (Whe, Dq) {
  "use strict";

  var Mq = st(),
    AF = wq(),
    OF = zo(),
    CF = Yt();
  Dq.exports = function (e, t, a) {
    for (var i = AF(t), u = CF.f, l = OF.f, c = 0; c < i.length; c++) {
      var d = i[c];
      !Mq(e, d) && !(a && Mq(a, d)) && u(e, d, l(t, d));
    }
  };
});
var Is = v(function ($he, Bq) {
  "use strict";

  var RF = W(),
    NF = Ce(),
    wF = /#|\.prototype\./,
    Bs = function Bs(e, t) {
      var a = DF[MF(e)];
      return a === IF ? !0 : a === BF ? !1 : NF(t) ? RF(t) : !!t;
    },
    MF = Bs.normalize = function (e) {
      return String(e).replace(wF, ".").toLowerCase();
    },
    DF = Bs.data = {},
    BF = Bs.NATIVE = "N",
    IF = Bs.POLYFILL = "P";
  Bq.exports = Bs;
});
var P = v(function (ege, Iq) {
  "use strict";

  var _f = ae(),
    PF = zo().f,
    UF = Ar(),
    zF = zt(),
    LF = df(),
    jF = qf(),
    HF = Is();
  Iq.exports = function (e, t) {
    var a = e.target,
      i = e.global,
      u = e.stat,
      l,
      c,
      d,
      m,
      h,
      g;
    if (i ? c = _f : u ? c = _f[a] || LF(a, {}) : c = _f[a] && _f[a].prototype, c) for (d in t) {
      if (h = t[d], e.dontCallGetSet ? (g = PF(c, d), m = g && g.value) : m = c[d], l = HF(i ? d : a + (u ? "." : "#") + d, e.forced), !l && m !== void 0) {
        if (_typeof(h) == _typeof(m)) continue;
        jF(h, m);
      }
      (e.sham || m && m.sham) && UF(h, "sham", !0), zF(c, d, h, e);
    }
  };
});
var Lo = v(function (tge, Pq) {
  "use strict";

  var FF = _r(),
    GF = Z();
  Pq.exports = function (e) {
    if (FF(e) === "Function") return GF(e);
  };
});
var Na = v(function (rge, zq) {
  "use strict";

  var Uq = Lo(),
    KF = Dt(),
    VF = _s(),
    YF = Uq(Uq.bind);
  zq.exports = function (e, t) {
    return KF(e), t === void 0 ? e : VF ? YF(e, t) : function () {
      return e.apply(t, arguments);
    };
  };
});
var jh = v(function (nge, Lq) {
  "use strict";

  var XF = _r();
  Lq.exports = Array.isArray || function (t) {
    return XF(t) === "Array";
  };
});
var Af = v(function (age, Hq) {
  "use strict";

  var kF = ze(),
    QF = kF("toStringTag"),
    jq = {};
  jq[QF] = "z";
  Hq.exports = String(jq) === "[object z]";
});
var Ci = v(function (ige, Fq) {
  "use strict";

  var ZF = Af(),
    JF = Ce(),
    Of = _r(),
    WF = ze(),
    $F = WF("toStringTag"),
    e7 = Object,
    t7 = Of(function () {
      return arguments;
    }()) === "Arguments",
    r7 = function r7(e, t) {
      try {
        return e[t];
      } catch (_unused8) {}
    };
  Fq.exports = ZF ? Of : function (e) {
    var t, a, i;
    return e === void 0 ? "Undefined" : e === null ? "Null" : typeof (a = r7(t = e7(e), $F)) == "string" ? a : t7 ? Of(t) : (i = Of(t)) === "Object" && JF(t.callee) ? "Arguments" : i;
  };
});
var Us = v(function (oge, Xq) {
  "use strict";

  var n7 = Z(),
    a7 = W(),
    Gq = Ce(),
    i7 = Ci(),
    o7 = Ut(),
    u7 = gf(),
    Kq = function Kq() {},
    Vq = o7("Reflect", "construct"),
    Hh = /^\s*(?:class|function)\b/,
    s7 = n7(Hh.exec),
    l7 = !Hh.test(Kq),
    Ps = function Ps(t) {
      if (!Gq(t)) return !1;
      try {
        return Vq(Kq, [], t), !0;
      } catch (_unused9) {
        return !1;
      }
    },
    Yq = function Yq(t) {
      if (!Gq(t)) return !1;
      switch (i7(t)) {
        case "AsyncFunction":
        case "GeneratorFunction":
        case "AsyncGeneratorFunction":
          return !1;
      }
      try {
        return l7 || !!s7(Hh, u7(t));
      } catch (_unused0) {
        return !0;
      }
    };
  Yq.sham = !0;
  Xq.exports = !Vq || a7(function () {
    var e;
    return Ps(Ps.call) || !Ps(Object) || !Ps(function () {
      e = !0;
    }) || e;
  }) ? Yq : Ps;
});
var Jq = v(function (uge, Zq) {
  "use strict";

  var kq = jh(),
    c7 = Us(),
    f7 = Te(),
    p7 = ze(),
    d7 = p7("species"),
    Qq = Array;
  Zq.exports = function (e) {
    var t;
    return kq(e) && (t = e.constructor, c7(t) && (t === Qq || kq(t.prototype)) ? t = void 0 : f7(t) && (t = t[d7], t === null && (t = void 0))), t === void 0 ? Qq : t;
  };
});
var $q = v(function (sge, Wq) {
  "use strict";

  var m7 = Jq();
  Wq.exports = function (e, t) {
    return new (m7(e))(t === 0 ? 0 : t);
  };
});
var Cf = v(function (lge, e2) {
  "use strict";

  var v7 = De(),
    h7 = Yt(),
    g7 = jn();
  e2.exports = function (e, t, a) {
    v7 ? h7.f(e, t, g7(0, a)) : e[t] = a;
  };
});
var Ri = v(function (cge, r2) {
  "use strict";

  var y7 = Na(),
    b7 = As(),
    x7 = mr(),
    S7 = an(),
    t2 = $q(),
    Fh = Cf(),
    wa = function wa(e) {
      var t = e === 1,
        a = e === 2,
        i = e === 3,
        u = e === 4,
        l = e === 6,
        c = e === 7,
        d = e === 5 || l;
      return function (m, h, g) {
        for (var b = x7(m), x = b7(b), S = S7(x), O = y7(h, g), C = 0, _ = 0, T = t ? t2(m, S) : a || c ? t2(m, 0) : void 0, q, M; S > C; C++) if ((d || C in x) && (q = x[C], M = O(q, C, b), e)) if (t) Fh(T, C, M);else if (M) switch (e) {
          case 3:
            return !0;
          case 5:
            return q;
          case 6:
            return C;
          case 2:
            Fh(T, _++, q);
        } else switch (e) {
          case 4:
            return !1;
          case 7:
            Fh(T, _++, q);
        }
        return l ? -1 : i || u ? u : T;
      };
    };
  r2.exports = {
    forEach: wa(0),
    map: wa(1),
    filter: wa(2),
    some: wa(3),
    every: wa(4),
    find: wa(5),
    findIndex: wa(6),
    filterReject: wa(7)
  };
});
var Rf = v(function (fge, n2) {
  "use strict";

  var E7 = W();
  n2.exports = function (e, t) {
    var a = [][e];
    return !!a && E7(function () {
      a.call(null, t || function () {
        return 1;
      }, 1);
    });
  };
});
var a2 = v(function () {
  "use strict";

  var T7 = P(),
    q7 = Ri().every,
    _7 = Rf(),
    A7 = _7("every");
  T7({
    target: "Array",
    proto: !0,
    forced: !A7
  }, {
    every: function every(t) {
      return q7(this, t, arguments.length > 1 ? arguments[1] : void 0);
    }
  });
});
var kt = v(function (mge, i2) {
  "use strict";

  var O7 = ae(),
    C7 = Z();
  i2.exports = function (e, t) {
    return C7(O7[e].prototype[t]);
  };
});
var u2 = v(function (vge, o2) {
  "use strict";

  a2();
  var R7 = kt();
  o2.exports = R7("Array", "every");
});
var l2 = v(function (hge, s2) {
  "use strict";

  var N7 = u2();
  s2.exports = N7;
});
var Gh = v(function (gge, f2) {
  "use strict";

  var w7 = mr(),
    c2 = Ms(),
    M7 = an();
  f2.exports = function (t) {
    for (var a = w7(this), i = M7(a), u = arguments.length, l = c2(u > 1 ? arguments[1] : void 0, i), c = u > 2 ? arguments[2] : void 0, d = c === void 0 ? i : c2(c, i); d > l;) a[l++] = t;
    return a;
  };
});
var zs = v(function (yge, p2) {
  "use strict";

  var D7 = zh(),
    B7 = Tf();
  p2.exports = Object.keys || function (t) {
    return D7(t, B7);
  };
});
var m2 = v(function (d2) {
  "use strict";

  var I7 = De(),
    P7 = Sh(),
    U7 = Yt(),
    z7 = Le(),
    L7 = Fn(),
    j7 = zs();
  d2.f = I7 && !P7 ? Object.defineProperties : function (t, a) {
    z7(t);
    for (var i = L7(a), u = j7(a), l = u.length, c = 0, d; l > c;) U7.f(t, d = u[c++], i[d]);
    return t;
  };
});
var Kh = v(function (xge, v2) {
  "use strict";

  var H7 = Ut();
  v2.exports = H7("document", "documentElement");
});
var Ma = v(function (Sge, E2) {
  "use strict";

  var F7 = Le(),
    G7 = m2(),
    h2 = Tf(),
    K7 = Ns(),
    V7 = Kh(),
    Y7 = Cs(),
    X7 = yf(),
    g2 = ">",
    y2 = "<",
    Yh = "prototype",
    Xh = "script",
    x2 = X7("IE_PROTO"),
    Vh = function Vh() {},
    S2 = function S2(e) {
      return y2 + Xh + g2 + e + y2 + "/" + Xh + g2;
    },
    b2 = function b2(e) {
      e.write(S2("")), e.close();
      var t = e.parentWindow.Object;
      return e = null, t;
    },
    k7 = function k7() {
      var e = Y7("iframe"),
        t = "java" + Xh + ":",
        a;
      return e.style.display = "none", V7.appendChild(e), e.src = String(t), a = e.contentWindow.document, a.open(), a.write(S2("document.F=Object")), a.close(), a.F;
    },
    Nf,
    _wf = function wf() {
      try {
        Nf = new ActiveXObject("htmlfile");
      } catch (_unused1) {}
      _wf = (typeof document === "undefined" ? "undefined" : _typeof(document)) < "u" ? document.domain && Nf ? b2(Nf) : k7() : b2(Nf);
      for (var e = h2.length; e--;) delete _wf[Yh][h2[e]];
      return _wf();
    };
  K7[x2] = !0;
  E2.exports = Object.create || function (t, a) {
    var i;
    return t !== null ? (Vh[Yh] = F7(t), i = new Vh(), Vh[Yh] = null, i[x2] = t) : i = _wf(), a === void 0 ? i : G7.f(i, a);
  };
});
var Gn = v(function (Ege, T2) {
  "use strict";

  var Q7 = ze(),
    Z7 = Ma(),
    J7 = Yt().f,
    kh = Q7("unscopables"),
    Qh = Array.prototype;
  Qh[kh] === void 0 && J7(Qh, kh, {
    configurable: !0,
    value: Z7(null)
  });
  T2.exports = function (e) {
    Qh[kh][e] = !0;
  };
});
var q2 = v(function () {
  "use strict";

  var W7 = P(),
    $7 = Gh(),
    eG = Gn();
  W7({
    target: "Array",
    proto: !0
  }, {
    fill: $7
  });
  eG("fill");
});
var A2 = v(function (_ge, _2) {
  "use strict";

  q2();
  var tG = kt();
  _2.exports = tG("Array", "fill");
});
var C2 = v(function (Age, O2) {
  "use strict";

  var rG = A2();
  O2.exports = rG;
});
var N2 = v(function () {
  "use strict";

  var nG = P(),
    aG = Ri().findIndex,
    iG = Gn(),
    Zh = "findIndex",
    R2 = !0;
  Zh in [] && Array(1)[Zh](function () {
    R2 = !1;
  });
  nG({
    target: "Array",
    proto: !0,
    forced: R2
  }, {
    findIndex: function findIndex(t) {
      return aG(this, t, arguments.length > 1 ? arguments[1] : void 0);
    }
  });
  iG(Zh);
});
var M2 = v(function (Rge, w2) {
  "use strict";

  N2();
  var oG = kt();
  w2.exports = oG("Array", "findIndex");
});
var B2 = v(function (Nge, D2) {
  "use strict";

  var uG = M2();
  D2.exports = uG;
});
var P2 = v(function () {
  "use strict";

  var sG = P(),
    lG = Ri().find,
    cG = Gn(),
    Jh = "find",
    I2 = !0;
  Jh in [] && Array(1)[Jh](function () {
    I2 = !1;
  });
  sG({
    target: "Array",
    proto: !0,
    forced: I2
  }, {
    find: function find(t) {
      return lG(this, t, arguments.length > 1 ? arguments[1] : void 0);
    }
  });
  cG(Jh);
});
var z2 = v(function (Dge, U2) {
  "use strict";

  P2();
  var fG = kt();
  U2.exports = fG("Array", "find");
});
var j2 = v(function (Bge, L2) {
  "use strict";

  var pG = z2();
  L2.exports = pG;
});
var Wh = v(function (Ige, F2) {
  "use strict";

  var dG = Na(),
    mG = As(),
    vG = mr(),
    hG = an(),
    H2 = function H2(e) {
      var t = e === 1;
      return function (a, i, u) {
        for (var l = vG(a), c = mG(l), d = hG(c), m = dG(i, u), h, g; d-- > 0;) if (h = c[d], g = m(h, d, l), g) switch (e) {
          case 0:
            return h;
          case 1:
            return d;
        }
        return t ? -1 : void 0;
      };
    };
  F2.exports = {
    findLast: H2(0),
    findLastIndex: H2(1)
  };
});
var G2 = v(function () {
  "use strict";

  var gG = P(),
    yG = Wh().findLast,
    bG = Gn();
  gG({
    target: "Array",
    proto: !0
  }, {
    findLast: function findLast(t) {
      return yG(this, t, arguments.length > 1 ? arguments[1] : void 0);
    }
  });
  bG("findLast");
});
var V2 = v(function (zge, K2) {
  "use strict";

  G2();
  var xG = kt();
  K2.exports = xG("Array", "findLast");
});
var X2 = v(function (Lge, Y2) {
  "use strict";

  Y2.exports = V2();
});
var Ls = v(function (jge, k2) {
  "use strict";

  k2.exports = (typeof ArrayBuffer === "undefined" ? "undefined" : _typeof(ArrayBuffer)) < "u" && (typeof DataView === "undefined" ? "undefined" : _typeof(DataView)) < "u";
});
var Da = v(function (Hge, Z2) {
  "use strict";

  var Q2 = Ih(),
    SG = Yt();
  Z2.exports = function (e, t, a) {
    return a.get && Q2(a.get, t, {
      getter: !0
    }), a.set && Q2(a.set, t, {
      setter: !0
    }), SG.f(e, t, a);
  };
});
var js = v(function (Fge, J2) {
  "use strict";

  var EG = zt();
  J2.exports = function (e, t, a) {
    for (var i in t) EG(e, i, t[i], a);
    return e;
  };
});
var Ba = v(function (Gge, W2) {
  "use strict";

  var TG = Ra(),
    qG = TypeError;
  W2.exports = function (e, t) {
    if (TG(t, e)) return e;
    throw new qG("Incorrect invocation");
  };
});
var $h = v(function (Kge, $2) {
  "use strict";

  var _G = Xt(),
    AG = Fr(),
    OG = RangeError;
  $2.exports = function (e) {
    if (e === void 0) return 0;
    var t = _G(e),
      a = AG(t);
    if (t !== a) throw new OG("Wrong length or index");
    return a;
  };
});
var t_ = v(function (Vge, e_) {
  "use strict";

  e_.exports = Math.sign || function (t) {
    var a = +t;
    return a === 0 || a !== a ? a : a < 0 ? -1 : 1;
  };
});
var a_ = v(function (Yge, n_) {
  "use strict";

  var CG = 2220446049250313e-31,
    r_ = 1 / CG;
  n_.exports = function (e) {
    return e + r_ - r_;
  };
});
var o_ = v(function (Xge, i_) {
  "use strict";

  var RG = t_(),
    NG = a_(),
    wG = Math.abs,
    MG = 2220446049250313e-31;
  i_.exports = function (e, t, a, i) {
    var u = +e,
      l = wG(u),
      c = RG(u);
    if (l < i) return c * NG(l / i / t) * i * t;
    var d = (1 + t / MG) * l,
      m = d - (d - l);
    return m > a || m !== m ? c * (1 / 0) : c * m;
  };
});
var s_ = v(function (kge, u_) {
  "use strict";

  var DG = o_(),
    BG = 11920928955078125e-23,
    IG = 34028234663852886e22,
    PG = 11754943508222875e-54;
  u_.exports = Math.fround || function (t) {
    return DG(t, BG, IG, PG);
  };
});
var c_ = v(function (Qge, l_) {
  "use strict";

  var UG = Array,
    zG = Math.abs,
    Kn = Math.pow,
    LG = Math.floor,
    jG = Math.log,
    HG = Math.LN2,
    FG = function FG(e, t, a) {
      var i = UG(a),
        u = a * 8 - t - 1,
        l = (1 << u) - 1,
        c = l >> 1,
        d = t === 23 ? Kn(2, -24) - Kn(2, -77) : 0,
        m = e < 0 || e === 0 && 1 / e < 0 ? 1 : 0,
        h = 0,
        g,
        b,
        x;
      for (e = zG(e), e !== e || e === 1 / 0 ? (b = e !== e ? 1 : 0, g = l) : (g = LG(jG(e) / HG), x = Kn(2, -g), e * x < 1 && (g--, x *= 2), g + c >= 1 ? e += d / x : e += d * Kn(2, 1 - c), e * x >= 2 && (g++, x /= 2), g + c >= l ? (b = 0, g = l) : g + c >= 1 ? (b = (e * x - 1) * Kn(2, t), g += c) : (b = e * Kn(2, c - 1) * Kn(2, t), g = 0)); t >= 8;) i[h++] = b & 255, b /= 256, t -= 8;
      for (g = g << t | b, u += t; u > 0;) i[h++] = g & 255, g /= 256, u -= 8;
      return i[h - 1] |= m * 128, i;
    },
    GG = function GG(e, t) {
      var a = e.length,
        i = a * 8 - t - 1,
        u = (1 << i) - 1,
        l = u >> 1,
        c = i - 7,
        d = a - 1,
        m = e[d--],
        h = m & 127,
        g;
      for (m >>= 7; c > 0;) h = h * 256 + e[d--], c -= 8;
      for (g = h & (1 << -c) - 1, h >>= -c, c += t; c > 0;) g = g * 256 + e[d--], c -= 8;
      if (h === 0) h = 1 - l;else {
        if (h === u) return g ? NaN : m ? -1 / 0 : 1 / 0;
        g += Kn(2, t), h -= l;
      }
      return (m ? -1 : 1) * g * Kn(2, h - t);
    };
  l_.exports = {
    pack: FG,
    unpack: GG
  };
});
var p_ = v(function (Zge, f_) {
  "use strict";

  var KG = W();
  f_.exports = !KG(function () {
    function e() {}
    return e.prototype.constructor = null, Object.getPrototypeOf(new e()) !== e.prototype;
  });
});
var Ni = v(function (Jge, m_) {
  "use strict";

  var VG = st(),
    YG = Ce(),
    XG = mr(),
    kG = yf(),
    QG = p_(),
    d_ = kG("IE_PROTO"),
    eg = Object,
    ZG = eg.prototype;
  m_.exports = QG ? eg.getPrototypeOf : function (e) {
    var t = XG(e);
    if (VG(t, d_)) return t[d_];
    var a = t.constructor;
    return YG(a) && t instanceof a ? a.prototype : t instanceof eg ? ZG : null;
  };
});
var Hs = v(function (Wge, v_) {
  "use strict";

  var JG = Z(),
    WG = Dt();
  v_.exports = function (e, t, a) {
    try {
      return JG(WG(Object.getOwnPropertyDescriptor(e, t)[a]));
    } catch (_unused10) {}
  };
});
var tg = v(function ($ge, h_) {
  "use strict";

  var $G = Te();
  h_.exports = function (e) {
    return $G(e) || e === null;
  };
});
var y_ = v(function (eye, g_) {
  "use strict";

  var eK = tg(),
    tK = String,
    rK = TypeError;
  g_.exports = function (e) {
    if (eK(e)) return e;
    throw new rK("Can't set " + tK(e) + " as a prototype");
  };
});
var wi = v(function (tye, b_) {
  "use strict";

  var nK = Hs(),
    aK = Te(),
    iK = Ue(),
    oK = y_();
  b_.exports = Object.setPrototypeOf || ("__proto__" in {} ? function () {
    var e = !1,
      t = {},
      a;
    try {
      a = nK(Object.prototype, "__proto__", "set"), a(t, []), e = t instanceof Array;
    } catch (_unused11) {}
    return function (u, l) {
      return iK(u), oK(l), aK(u) && (e ? a(u, l) : u.__proto__ = l), u;
    };
  }() : void 0);
});
var Fs = v(function (rye, x_) {
  "use strict";

  var uK = Z();
  x_.exports = uK([].slice);
});
var Gs = v(function (nye, E_) {
  "use strict";

  var sK = Ce(),
    lK = Te(),
    S_ = wi();
  E_.exports = function (e, t, a) {
    var i, u;
    return S_ && sK(i = t.constructor) && i !== a && lK(u = i.prototype) && u !== a.prototype && S_(e, u), e;
  };
});
var Ia = v(function (aye, q_) {
  "use strict";

  var cK = Yt().f,
    fK = st(),
    pK = ze(),
    T_ = pK("toStringTag");
  q_.exports = function (e, t, a) {
    e && !a && (e = e.prototype), e && !fK(e, T_) && cK(e, T_, {
      configurable: !0,
      value: t
    });
  };
});
var Uf = v(function (iye, H_) {
  "use strict";

  var If = ae(),
    og = Z(),
    rg = De(),
    dK = Ls(),
    P_ = Rs(),
    mK = Ar(),
    vK = Da(),
    __ = js(),
    ng = W(),
    Mf = Ba(),
    hK = Xt(),
    Vs = $h(),
    gK = s_(),
    U_ = c_(),
    yK = Ni(),
    A_ = wi(),
    bK = Gh(),
    xK = Fs(),
    SK = Gs(),
    EK = qf(),
    z_ = Ia(),
    ug = vr(),
    TK = P_.PROPER,
    O_ = P_.CONFIGURABLE,
    Ho = "ArrayBuffer",
    Pf = "DataView",
    Fo = "prototype",
    qK = "Wrong length",
    L_ = "Wrong index",
    C_ = ug.getterFor(Ho),
    Ys = ug.getterFor(Pf),
    R_ = ug.set,
    Gr = If[Ho],
    _hr = Gr,
    jo = _hr && _hr[Fo],
    on = If[Pf],
    Mi = on && on[Fo],
    N_ = Object.prototype,
    _K = If.Array,
    Bf = If.RangeError,
    AK = og(bK),
    OK = og([].reverse),
    j_ = U_.pack,
    w_ = U_.unpack,
    M_ = function M_(e) {
      return [e & 255];
    },
    D_ = function D_(e) {
      return [e & 255, e >> 8 & 255];
    },
    B_ = function B_(e) {
      return [e & 255, e >> 8 & 255, e >> 16 & 255, e >> 24 & 255];
    },
    I_ = function I_(e) {
      return e[3] << 24 | e[2] << 16 | e[1] << 8 | e[0];
    },
    CK = function CK(e) {
      return j_(gK(e), 23, 4);
    },
    RK = function RK(e) {
      return j_(e, 52, 8);
    },
    Df = function Df(e, t, a) {
      vK(e[Fo], t, {
        configurable: !0,
        get: function get() {
          return a(this)[t];
        }
      });
    },
    Pa = function Pa(e, t, a, i) {
      var u = Ys(e),
        l = Vs(a),
        c = !!i;
      if (l + t > u.byteLength) throw new Bf(L_);
      var d = u.bytes,
        m = l + u.byteOffset,
        h = xK(d, m, m + t);
      return c ? h : OK(h);
    },
    Ua = function Ua(e, t, a, i, u, l) {
      var c = Ys(e),
        d = Vs(a),
        m = i(+u),
        h = !!l;
      if (d + t > c.byteLength) throw new Bf(L_);
      for (var g = c.bytes, b = d + c.byteOffset, x = 0; x < t; x++) g[b + x] = m[h ? x : t - x - 1];
    };
  dK ? (ag = TK && Gr.name !== Ho, !ng(function () {
    Gr(1);
  }) || !ng(function () {
    new Gr(-1);
  }) || ng(function () {
    return new Gr(), new Gr(1.5), new Gr(NaN), Gr.length !== 1 || ag && !O_;
  }) ? (_hr = function hr(t) {
    return Mf(this, jo), SK(new Gr(Vs(t)), this, _hr);
  }, _hr[Fo] = jo, jo.constructor = _hr, EK(_hr, Gr)) : ag && O_ && mK(Gr, "name", Ho), A_ && yK(Mi) !== N_ && A_(Mi, N_), Ks = new on(new _hr(2)), ig = og(Mi.setInt8), Ks.setInt8(0, 2147483648), Ks.setInt8(1, 2147483649), (Ks.getInt8(0) || !Ks.getInt8(1)) && __(Mi, {
    setInt8: function setInt8(t, a) {
      ig(this, t, a << 24 >> 24);
    },
    setUint8: function setUint8(t, a) {
      ig(this, t, a << 24 >> 24);
    }
  }, {
    unsafe: !0
  })) : (_hr = function _hr(t) {
    Mf(this, jo);
    var a = Vs(t);
    R_(this, {
      type: Ho,
      bytes: AK(_K(a), 0),
      byteLength: a
    }), rg || (this.byteLength = a, this.detached = !1);
  }, jo = _hr[Fo], on = function on(t, a, i) {
    Mf(this, Mi), Mf(t, jo);
    var u = C_(t),
      l = u.byteLength,
      c = hK(a);
    if (c < 0 || c > l) throw new Bf("Wrong offset");
    if (i = i === void 0 ? l - c : Vs(i), c + i > l) throw new Bf(qK);
    R_(this, {
      type: Pf,
      buffer: t,
      byteLength: i,
      byteOffset: c,
      bytes: u.bytes
    }), rg || (this.buffer = t, this.byteLength = i, this.byteOffset = c);
  }, Mi = on[Fo], rg && (Df(_hr, "byteLength", C_), Df(on, "buffer", Ys), Df(on, "byteLength", Ys), Df(on, "byteOffset", Ys)), __(Mi, {
    getInt8: function getInt8(t) {
      return Pa(this, 1, t)[0] << 24 >> 24;
    },
    getUint8: function getUint8(t) {
      return Pa(this, 1, t)[0];
    },
    getInt16: function getInt16(t) {
      var a = Pa(this, 2, t, arguments.length > 1 ? arguments[1] : !1);
      return (a[1] << 8 | a[0]) << 16 >> 16;
    },
    getUint16: function getUint16(t) {
      var a = Pa(this, 2, t, arguments.length > 1 ? arguments[1] : !1);
      return a[1] << 8 | a[0];
    },
    getInt32: function getInt32(t) {
      return I_(Pa(this, 4, t, arguments.length > 1 ? arguments[1] : !1));
    },
    getUint32: function getUint32(t) {
      return I_(Pa(this, 4, t, arguments.length > 1 ? arguments[1] : !1)) >>> 0;
    },
    getFloat32: function getFloat32(t) {
      return w_(Pa(this, 4, t, arguments.length > 1 ? arguments[1] : !1), 23);
    },
    getFloat64: function getFloat64(t) {
      return w_(Pa(this, 8, t, arguments.length > 1 ? arguments[1] : !1), 52);
    },
    setInt8: function setInt8(t, a) {
      Ua(this, 1, t, M_, a);
    },
    setUint8: function setUint8(t, a) {
      Ua(this, 1, t, M_, a);
    },
    setInt16: function setInt16(t, a) {
      Ua(this, 2, t, D_, a, arguments.length > 2 ? arguments[2] : !1);
    },
    setUint16: function setUint16(t, a) {
      Ua(this, 2, t, D_, a, arguments.length > 2 ? arguments[2] : !1);
    },
    setInt32: function setInt32(t, a) {
      Ua(this, 4, t, B_, a, arguments.length > 2 ? arguments[2] : !1);
    },
    setUint32: function setUint32(t, a) {
      Ua(this, 4, t, B_, a, arguments.length > 2 ? arguments[2] : !1);
    },
    setFloat32: function setFloat32(t, a) {
      Ua(this, 4, t, CK, a, arguments.length > 2 ? arguments[2] : !1);
    },
    setFloat64: function setFloat64(t, a) {
      Ua(this, 8, t, RK, a, arguments.length > 2 ? arguments[2] : !1);
    }
  }));
  var ag, Ks, ig;
  z_(_hr, Ho);
  z_(on, Pf);
  H_.exports = {
    ArrayBuffer: _hr,
    DataView: on
  };
});
var zf = v(function (oye, G_) {
  "use strict";

  var NK = Ut(),
    wK = Da(),
    MK = ze(),
    DK = De(),
    F_ = MK("species");
  G_.exports = function (e) {
    var t = NK(e);
    DK && t && !t[F_] && wK(t, F_, {
      configurable: !0,
      get: function get() {
        return this;
      }
    });
  };
});
var V_ = v(function () {
  "use strict";

  var BK = P(),
    IK = ae(),
    PK = Uf(),
    UK = zf(),
    sg = "ArrayBuffer",
    K_ = PK[sg],
    zK = IK[sg];
  BK({
    global: !0,
    constructor: !0,
    forced: zK !== K_
  }, {
    ArrayBuffer: K_
  });
  UK(sg);
});
var rA = v(function (lye, tA) {
  "use strict";

  var LK = Ls(),
    pg = De(),
    Lt = ae(),
    Q_ = Ce(),
    Hf = Te(),
    La = st(),
    dg = Ci(),
    jK = Io(),
    HK = Ar(),
    lg = zt(),
    FK = Da(),
    GK = Ra(),
    Ff = Ni(),
    Ko = wi(),
    KK = ze(),
    VK = Po(),
    Z_ = vr(),
    J_ = Z_.enforce,
    YK = Z_.get,
    Lf = Lt.Int8Array,
    cg = Lf && Lf.prototype,
    Y_ = Lt.Uint8ClampedArray,
    X_ = Y_ && Y_.prototype,
    un = Lf && Ff(Lf),
    Kr = cg && Ff(cg),
    XK = Object.prototype,
    mg = Lt.TypeError,
    k_ = KK("toStringTag"),
    fg = VK("TYPED_ARRAY_TAG"),
    jf = "TypedArrayConstructor",
    Vn = LK && !!Ko && dg(Lt.opera) !== "Opera",
    W_ = !1,
    Qt,
    za,
    Go,
    Yn = {
      Int8Array: 1,
      Uint8Array: 1,
      Uint8ClampedArray: 1,
      Int16Array: 2,
      Uint16Array: 2,
      Int32Array: 4,
      Uint32Array: 4,
      Float32Array: 4,
      Float64Array: 8
    },
    vg = {
      BigInt64Array: 8,
      BigUint64Array: 8
    },
    kK = function kK(t) {
      if (!Hf(t)) return !1;
      var a = dg(t);
      return a === "DataView" || La(Yn, a) || La(vg, a);
    },
    _$_ = function $_(e) {
      var t = Ff(e);
      if (Hf(t)) {
        var a = YK(t);
        return a && La(a, jf) ? a[jf] : _$_(t);
      }
    },
    eA = function eA(e) {
      if (!Hf(e)) return !1;
      var t = dg(e);
      return La(Yn, t) || La(vg, t);
    },
    QK = function QK(e) {
      if (eA(e)) return e;
      throw new mg("Target is not a typed array");
    },
    ZK = function ZK(e) {
      if (Q_(e) && (!Ko || GK(un, e))) return e;
      throw new mg(jK(e) + " is not a typed array constructor");
    },
    JK = function JK(e, t, a, i) {
      if (pg) {
        if (a) for (var u in Yn) {
          var l = Lt[u];
          if (l && La(l.prototype, e)) try {
            delete l.prototype[e];
          } catch (_unused12) {
            try {
              l.prototype[e] = t;
            } catch (_unused13) {}
          }
        }
        (!Kr[e] || a) && lg(Kr, e, a ? t : Vn && cg[e] || t, i);
      }
    },
    WK = function WK(e, t, a) {
      var i, u;
      if (pg) {
        if (Ko) {
          if (a) {
            for (i in Yn) if (u = Lt[i], u && La(u, e)) try {
              delete u[e];
            } catch (_unused14) {}
          }
          if (!un[e] || a) try {
            return lg(un, e, a ? t : Vn && un[e] || t);
          } catch (_unused15) {} else return;
        }
        for (i in Yn) u = Lt[i], u && (!u[e] || a) && lg(u, e, t);
      }
    };
  for (Qt in Yn) za = Lt[Qt], Go = za && za.prototype, Go ? J_(Go)[jf] = za : Vn = !1;
  for (Qt in vg) za = Lt[Qt], Go = za && za.prototype, Go && (J_(Go)[jf] = za);
  if ((!Vn || !Q_(un) || un === Function.prototype) && (un = function un() {
    throw new mg("Incorrect invocation");
  }, Vn)) for (Qt in Yn) Lt[Qt] && Ko(Lt[Qt], un);
  if ((!Vn || !Kr || Kr === XK) && (Kr = un.prototype, Vn)) for (Qt in Yn) Lt[Qt] && Ko(Lt[Qt].prototype, Kr);
  Vn && Ff(X_) !== Kr && Ko(X_, Kr);
  if (pg && !La(Kr, k_)) {
    W_ = !0, FK(Kr, k_, {
      configurable: !0,
      get: function get() {
        return Hf(this) ? this[fg] : void 0;
      }
    });
    for (Qt in Yn) Lt[Qt] && HK(Lt[Qt].prototype, fg, Qt);
  }
  tA.exports = {
    NATIVE_ARRAY_BUFFER_VIEWS: Vn,
    TYPED_ARRAY_TAG: W_ && fg,
    aTypedArray: QK,
    aTypedArrayConstructor: ZK,
    exportTypedArrayMethod: JK,
    exportTypedArrayStaticMethod: WK,
    getTypedArrayConstructor: _$_,
    isView: kK,
    isTypedArray: eA,
    TypedArray: un,
    TypedArrayPrototype: Kr
  };
});
var aA = v(function () {
  "use strict";

  var $K = P(),
    nA = rA(),
    e9 = nA.NATIVE_ARRAY_BUFFER_VIEWS;
  $K({
    target: "ArrayBuffer",
    stat: !0,
    forced: !e9
  }, {
    isView: nA.isView
  });
});
var cA = v(function () {
  "use strict";

  var t9 = P(),
    gg = Lo(),
    r9 = W(),
    sA = Uf(),
    iA = Le(),
    oA = Ms(),
    n9 = Fr(),
    yg = sA.ArrayBuffer,
    hg = sA.DataView,
    lA = hg.prototype,
    uA = gg(yg.prototype.slice),
    a9 = gg(lA.getUint8),
    i9 = gg(lA.setUint8),
    o9 = r9(function () {
      return !new yg(2).slice(1, void 0).byteLength;
    });
  t9({
    target: "ArrayBuffer",
    proto: !0,
    unsafe: !0,
    forced: o9
  }, {
    slice: function slice(t, a) {
      if (uA && a === void 0) return uA(iA(this), t);
      for (var i = iA(this).byteLength, u = oA(t, i), l = oA(a === void 0 ? i : a, i), c = new yg(n9(l - u)), d = new hg(this), m = new hg(c), h = 0; u < l;) i9(m, h++, a9(d, u++));
      return c;
    }
  });
});
var fA = v(function () {
  "use strict";

  var u9 = P(),
    s9 = Uf(),
    l9 = Ls();
  u9({
    global: !0,
    constructor: !0,
    forced: !l9
  }, {
    DataView: s9.DataView
  });
});
var pA = v(function () {
  "use strict";

  fA();
});
var bg = v(function (yye, vA) {
  "use strict";

  var mA = ae(),
    c9 = Hs(),
    f9 = _r(),
    dA = mA.ArrayBuffer,
    p9 = mA.TypeError;
  vA.exports = dA && c9(dA.prototype, "byteLength", "get") || function (e) {
    if (f9(e) !== "ArrayBuffer") throw new p9("ArrayBuffer expected");
    return e.byteLength;
  };
});
var xg = v(function (bye, hA) {
  "use strict";

  var d9 = ae(),
    m9 = Ls(),
    v9 = bg(),
    h9 = d9.DataView;
  hA.exports = function (e) {
    if (!m9 || v9(e) !== 0) return !1;
    try {
      return new h9(e), !1;
    } catch (_unused16) {
      return !0;
    }
  };
});
var yA = v(function () {
  "use strict";

  var g9 = De(),
    y9 = Da(),
    b9 = xg(),
    gA = ArrayBuffer.prototype;
  g9 && !("detached" in gA) && y9(gA, "detached", {
    configurable: !0,
    get: function get() {
      return b9(this);
    }
  });
});
var xA = v(function (Eye, bA) {
  "use strict";

  var x9 = xg(),
    S9 = TypeError;
  bA.exports = function (e) {
    if (x9(e)) throw new S9("ArrayBuffer is detached");
    return e;
  };
});
var Kf = v(function (Tye, SA) {
  "use strict";

  var Xs = ae(),
    E9 = Ai(),
    T9 = _r(),
    Gf = function Gf(e) {
      return E9.slice(0, e.length) === e;
    };
  SA.exports = function () {
    return Gf("Bun/") ? "BUN" : Gf("Cloudflare-Workers") ? "CLOUDFLARE" : Gf("Deno/") ? "DENO" : Gf("Node.js/") ? "NODE" : Xs.Bun && typeof Bun.version == "string" ? "BUN" : Xs.Deno && _typeof(Deno.version) == "object" ? "DENO" : T9(Xs.process) === "process" ? "NODE" : Xs.window && Xs.document ? "BROWSER" : "REST";
  }();
});
var ks = v(function (qye, EA) {
  "use strict";

  var q9 = Kf();
  EA.exports = q9 === "NODE";
});
var Sg = v(function (_ye, TA) {
  "use strict";

  var _9 = ae(),
    A9 = ks();
  TA.exports = function (e) {
    if (A9) {
      try {
        return _9.process.getBuiltinModule(e);
      } catch (_unused17) {}
      try {
        return Function('return require("' + e + '")')();
      } catch (_unused18) {}
    }
  };
});
var Vf = v(function (Aye, _A) {
  "use strict";

  var O9 = ae(),
    C9 = W(),
    Eg = pf(),
    Tg = Kf(),
    qA = O9.structuredClone;
  _A.exports = !!qA && !C9(function () {
    if (Tg === "DENO" && Eg > 92 || Tg === "NODE" && Eg > 94 || Tg === "BROWSER" && Eg > 97) return !1;
    var e = new ArrayBuffer(8),
      t = qA(e, {
        transfer: [e]
      });
    return e.byteLength !== 0 || t.byteLength !== 8;
  });
});
var Cg = v(function (Oye, CA) {
  "use strict";

  var Og = ae(),
    R9 = Sg(),
    N9 = Vf(),
    w9 = Og.structuredClone,
    AA = Og.ArrayBuffer,
    Yf = Og.MessageChannel,
    Ag = !1,
    qg,
    OA,
    Xf,
    _g;
  if (N9) Ag = function Ag(e) {
    w9(e, {
      transfer: [e]
    });
  };else if (AA) try {
    Yf || (qg = R9("worker_threads"), qg && (Yf = qg.MessageChannel)), Yf && (OA = new Yf(), Xf = new AA(2), _g = function _g(e) {
      OA.port1.postMessage(null, [e]);
    }, Xf.byteLength === 2 && (_g(Xf), Xf.byteLength === 0 && (Ag = _g)));
  } catch (_unused19) {}
  CA.exports = Ag;
});
var Bg = v(function (Cye, IA) {
  "use strict";

  var wg = ae(),
    Mg = Z(),
    MA = Hs(),
    M9 = $h(),
    D9 = xA(),
    B9 = bg(),
    RA = Cg(),
    Rg = Vf(),
    I9 = wg.structuredClone,
    DA = wg.ArrayBuffer,
    Ng = wg.DataView,
    P9 = Math.max,
    U9 = Math.min,
    Dg = DA.prototype,
    BA = Ng.prototype,
    z9 = Mg(Dg.slice),
    NA = MA(Dg, "resizable", "get"),
    wA = MA(Dg, "maxByteLength", "get"),
    L9 = Mg(BA.getInt8),
    j9 = Mg(BA.setInt8);
  IA.exports = (Rg || RA) && function (e, t, a) {
    var i = B9(e),
      u = t === void 0 ? i : M9(t),
      l = !NA || !NA(e),
      c;
    if (D9(e), Rg && (e = I9(e, {
      transfer: [e]
    }), i === u && (a || l))) return e;
    if (i >= u && (!a || l)) c = z9(e, 0, u);else {
      var d = a && !l && wA ? {
        maxByteLength: P9(u, wA(e))
      } : void 0;
      c = new DA(u, d);
      for (var m = new Ng(e), h = new Ng(c), g = U9(u, i), b = 0; b < g; b++) j9(h, b, L9(m, b));
    }
    return Rg || RA(e), c;
  };
});
var UA = v(function () {
  "use strict";

  var H9 = P(),
    PA = Bg();
  PA && H9({
    target: "ArrayBuffer",
    proto: !0
  }, {
    transfer: function transfer() {
      return PA(this, arguments.length ? arguments[0] : void 0, !0);
    }
  });
});
var LA = v(function () {
  "use strict";

  var F9 = P(),
    zA = Bg();
  zA && F9({
    target: "ArrayBuffer",
    proto: !0
  }, {
    transferToFixedLength: function transferToFixedLength() {
      return zA(this, arguments.length ? arguments[0] : void 0, !1);
    }
  });
});
var HA = v(function (Dye, jA) {
  "use strict";

  var G9 = Af(),
    K9 = Ci();
  jA.exports = G9 ? {}.toString : function () {
    return "[object " + K9(this) + "]";
  };
});
var Xn = v(function () {
  "use strict";

  var V9 = Af(),
    Y9 = zt(),
    X9 = HA();
  V9 || Y9(Object.prototype, "toString", X9, {
    unsafe: !0
  });
});
var lt = v(function (Pye, FA) {
  "use strict";

  var k9 = ae();
  FA.exports = k9;
});
var KA = v(function (Uye, GA) {
  "use strict";

  V_();
  aA();
  cA();
  pA();
  yA();
  UA();
  LA();
  Xn();
  var Q9 = lt();
  GA.exports = Q9.ArrayBuffer;
});
var YA = v(function (zye, VA) {
  "use strict";

  var Z9 = KA();
  VA.exports = Z9;
});
var XA = v(function () {
  "use strict";

  var J9 = P(),
    W9 = Wh().findLastIndex,
    $9 = Gn();
  J9({
    target: "Array",
    proto: !0
  }, {
    findLastIndex: function findLastIndex(t) {
      return W9(this, t, arguments.length > 1 ? arguments[1] : void 0);
    }
  });
  $9("findLastIndex");
});
var QA = v(function (Hye, kA) {
  "use strict";

  XA();
  var eV = kt();
  kA.exports = eV("Array", "findLastIndex");
});
var JA = v(function (Fye, ZA) {
  "use strict";

  ZA.exports = QA();
});
var $A = v(function (Gye, WA) {
  "use strict";

  var tV = Ri().forEach,
    rV = Rf(),
    nV = rV("forEach");
  WA.exports = nV ? [].forEach : function (t) {
    return tV(this, t, arguments.length > 1 ? arguments[1] : void 0);
  };
});
var tO = v(function () {
  "use strict";

  var aV = P(),
    eO = $A();
  aV({
    target: "Array",
    proto: !0,
    forced: [].forEach !== eO
  }, {
    forEach: eO
  });
});
var nO = v(function (Yye, rO) {
  "use strict";

  tO();
  var iV = kt();
  rO.exports = iV("Array", "forEach");
});
var iO = v(function (Xye, aO) {
  "use strict";

  var oV = nO();
  aO.exports = oV;
});
var Ne = v(function (kye, oO) {
  "use strict";

  var uV = Ci(),
    sV = String;
  oO.exports = function (e) {
    if (uV(e) === "Symbol") throw new TypeError("Cannot convert a Symbol value to a string");
    return sV(e);
  };
});
var kf = v(function (Qye, lO) {
  "use strict";

  var Ig = Z(),
    lV = Xt(),
    cV = Ne(),
    fV = Ue(),
    pV = Ig("".charAt),
    uO = Ig("".charCodeAt),
    dV = Ig("".slice),
    sO = function sO(e) {
      return function (t, a) {
        var i = cV(fV(t)),
          u = lV(a),
          l = i.length,
          c,
          d;
        return u < 0 || u >= l ? e ? "" : void 0 : (c = uO(i, u), c < 55296 || c > 56319 || u + 1 === l || (d = uO(i, u + 1)) < 56320 || d > 57343 ? e ? pV(i, u) : c : e ? dV(i, u, u + 2) : (c - 55296 << 10) + (d - 56320) + 65536);
      };
    };
  lO.exports = {
    codeAt: sO(!1),
    charAt: sO(!0)
  };
});
var Lg = v(function (Zye, pO) {
  "use strict";

  var mV = W(),
    vV = Ce(),
    hV = Te(),
    gV = Ma(),
    cO = Ni(),
    yV = zt(),
    bV = ze(),
    xV = Ve(),
    zg = bV("iterator"),
    fO = !1,
    kn,
    Pg,
    Ug;
  [].keys && (Ug = [].keys(), "next" in Ug ? (Pg = cO(cO(Ug)), Pg !== Object.prototype && (kn = Pg)) : fO = !0);
  var SV = !hV(kn) || mV(function () {
    var e = {};
    return kn[zg].call(e) !== e;
  });
  SV ? kn = {} : xV && (kn = gV(kn));
  vV(kn[zg]) || yV(kn, zg, function () {
    return this;
  });
  pO.exports = {
    IteratorPrototype: kn,
    BUGGY_SAFARI_ITERATORS: fO
  };
});
var Vo = v(function (Jye, dO) {
  "use strict";

  dO.exports = {};
});
var jg = v(function (Wye, mO) {
  "use strict";

  var EV = Lg().IteratorPrototype,
    TV = Ma(),
    qV = jn(),
    _V = Ia(),
    AV = Vo(),
    OV = function OV() {
      return this;
    };
  mO.exports = function (e, t, a, i) {
    var u = t + " Iterator";
    return e.prototype = TV(EV, {
      next: qV(+!i, a)
    }), _V(e, u, !1, !0), AV[u] = OV, e;
  };
});
var Jf = v(function ($ye, qO) {
  "use strict";

  var CV = P(),
    RV = Oe(),
    Qf = Ve(),
    EO = Rs(),
    NV = Ce(),
    wV = jg(),
    vO = Ni(),
    hO = wi(),
    MV = Ia(),
    DV = Ar(),
    Hg = zt(),
    BV = ze(),
    gO = Vo(),
    TO = Lg(),
    IV = EO.PROPER,
    PV = EO.CONFIGURABLE,
    yO = TO.IteratorPrototype,
    Zf = TO.BUGGY_SAFARI_ITERATORS,
    Qs = BV("iterator"),
    bO = "keys",
    Zs = "values",
    xO = "entries",
    SO = function SO() {
      return this;
    };
  qO.exports = function (e, t, a, i, u, l, c) {
    wV(a, t, i);
    var d = function d(T) {
        if (T === u && x) return x;
        if (!Zf && T && T in g) return g[T];
        switch (T) {
          case bO:
            return function () {
              return new a(this, T);
            };
          case Zs:
            return function () {
              return new a(this, T);
            };
          case xO:
            return function () {
              return new a(this, T);
            };
        }
        return function () {
          return new a(this);
        };
      },
      m = t + " Iterator",
      h = !1,
      g = e.prototype,
      b = g[Qs] || g["@@iterator"] || u && g[u],
      x = !Zf && b || d(u),
      S = t === "Array" && g.entries || b,
      O,
      C,
      _;
    if (S && (O = vO(S.call(new e())), O !== Object.prototype && O.next && (!Qf && vO(O) !== yO && (hO ? hO(O, yO) : NV(O[Qs]) || Hg(O, Qs, SO)), MV(O, m, !0, !0), Qf && (gO[m] = SO))), IV && u === Zs && b && b.name !== Zs && (!Qf && PV ? DV(g, "name", Zs) : (h = !0, x = function x() {
      return RV(b, this);
    })), u) if (C = {
      values: d(Zs),
      keys: l ? x : d(bO),
      entries: d(xO)
    }, c) for (_ in C) (Zf || h || !(_ in g)) && Hg(g, _, C[_]);else CV({
      target: t,
      proto: !0,
      forced: Zf || h
    }, C);
    return (!Qf || c) && g[Qs] !== x && Hg(g, Qs, x, {
      name: u
    }), gO[t] = x, C;
  };
});
var Js = v(function (e0e, _O) {
  "use strict";

  _O.exports = function (e, t) {
    return {
      value: e,
      done: t
    };
  };
});
var Yo = v(function () {
  "use strict";

  var UV = kf().charAt,
    zV = Ne(),
    OO = vr(),
    LV = Jf(),
    AO = Js(),
    CO = "String Iterator",
    jV = OO.set,
    HV = OO.getterFor(CO);
  LV(String, "String", function (e) {
    jV(this, {
      type: CO,
      string: zV(e),
      index: 0
    });
  }, function () {
    var t = HV(this),
      a = t.string,
      i = t.index,
      u;
    return i >= a.length ? AO(void 0, !0) : (u = UV(a, i), t.index += u.length, AO(u, !1));
  });
});
var Xo = v(function (n0e, NO) {
  "use strict";

  var FV = Oe(),
    RO = Le(),
    GV = nn();
  NO.exports = function (e, t, a) {
    var i, u;
    RO(e);
    try {
      if (i = GV(e, "return"), !i) {
        if (t === "throw") throw a;
        return a;
      }
      i = FV(i, e);
    } catch (l) {
      u = !0, i = l;
    }
    if (t === "throw") throw a;
    if (u) throw i;
    return RO(i), a;
  };
});
var MO = v(function (a0e, wO) {
  "use strict";

  var KV = Le(),
    VV = Xo();
  wO.exports = function (e, t, a, i) {
    try {
      return i ? t(KV(a)[0], a[1]) : t(a);
    } catch (u) {
      VV(e, "throw", u);
    }
  };
});
var Fg = v(function (i0e, DO) {
  "use strict";

  var YV = ze(),
    XV = Vo(),
    kV = YV("iterator"),
    QV = Array.prototype;
  DO.exports = function (e) {
    return e !== void 0 && (XV.Array === e || QV[kV] === e);
  };
});
var IO = v(function (o0e, BO) {
  "use strict";

  var ZV = De(),
    JV = jh(),
    WV = TypeError,
    $V = Object.getOwnPropertyDescriptor,
    eY = ZV && !function () {
      if (this !== void 0) return !0;
      try {
        Object.defineProperty([], "length", {
          writable: !1
        }).length = 1;
      } catch (e) {
        return e instanceof TypeError;
      }
    }();
  BO.exports = eY ? function (e, t) {
    if (JV(e) && !$V(e, "length").writable) throw new WV("Cannot set read only .length");
    return e.length = t;
  } : function (e, t) {
    return e.length = t;
  };
});
var Wf = v(function (u0e, UO) {
  "use strict";

  var tY = Ci(),
    PO = nn(),
    rY = Hn(),
    nY = Vo(),
    aY = ze(),
    iY = aY("iterator");
  UO.exports = function (e) {
    if (!rY(e)) return PO(e, iY) || PO(e, "@@iterator") || nY[tY(e)];
  };
});
var Gg = v(function (s0e, zO) {
  "use strict";

  var oY = Oe(),
    uY = Dt(),
    sY = Le(),
    lY = Io(),
    cY = Wf(),
    fY = TypeError;
  zO.exports = function (e, t) {
    var a = arguments.length < 2 ? cY(e) : t;
    if (uY(a)) return sY(oY(a, e));
    throw new fY(lY(e) + " is not iterable");
  };
});
var FO = v(function (l0e, HO) {
  "use strict";

  var pY = Na(),
    dY = Oe(),
    mY = mr(),
    vY = MO(),
    hY = Fg(),
    gY = Us(),
    yY = an(),
    LO = Cf(),
    bY = IO(),
    xY = Gg(),
    SY = Wf(),
    EY = Xo(),
    jO = Array;
  HO.exports = function (t) {
    var a = gY(this),
      i = arguments.length,
      u = i > 1 ? arguments[1] : void 0,
      l = u !== void 0;
    l && (u = pY(u, i > 2 ? arguments[2] : void 0));
    var c = mY(t),
      d = SY(c),
      m = 0,
      h,
      g,
      b,
      x,
      S,
      O;
    if (d && !(this === jO && hY(d))) for (g = a ? new this() : [], x = xY(c, d), S = x.next; !(b = dY(S, x)).done; m++) {
      O = l ? vY(x, u, [b.value, m], !0) : b.value;
      try {
        LO(g, m, O);
      } catch (C) {
        EY(x, "throw", C);
      }
    } else for (h = yY(c), g = a ? new this(h) : jO(h); h > m; m++) O = l ? u(c[m], m) : c[m], LO(g, m, O);
    return bY(g, m), g;
  };
});
var $f = v(function (c0e, YO) {
  "use strict";

  var TY = ze(),
    KO = TY("iterator"),
    VO = !1;
  try {
    GO = 0, Kg = {
      next: function next() {
        return {
          done: !!GO++
        };
      },
      return: function _return() {
        VO = !0;
      }
    }, Kg[KO] = function () {
      return this;
    }, Array.from(Kg, function () {
      throw 2;
    });
  } catch (_unused20) {}
  var GO, Kg;
  YO.exports = function (e, t) {
    try {
      if (!t && !VO) return !1;
    } catch (_unused21) {
      return !1;
    }
    var a = !1;
    try {
      var i = {};
      i[KO] = function () {
        return {
          next: function next() {
            return {
              done: a = !0
            };
          }
        };
      }, e(i);
    } catch (_unused22) {}
    return a;
  };
});
var XO = v(function () {
  "use strict";

  var qY = P(),
    _Y = FO(),
    AY = $f(),
    OY = !AY(function (e) {
      Array.from(e);
    });
  qY({
    target: "Array",
    stat: !0,
    forced: OY
  }, {
    from: _Y
  });
});
var QO = v(function (d0e, kO) {
  "use strict";

  Yo();
  XO();
  var CY = lt();
  kO.exports = CY.Array.from;
});
var JO = v(function (m0e, ZO) {
  "use strict";

  var RY = QO();
  ZO.exports = RY;
});
var WO = v(function () {
  "use strict";

  var NY = P(),
    wY = Ri().some,
    MY = Rf(),
    DY = MY("some");
  NY({
    target: "Array",
    proto: !0,
    forced: !DY
  }, {
    some: function some(t) {
      return wY(this, t, arguments.length > 1 ? arguments[1] : void 0);
    }
  });
});
var eC = v(function (g0e, $O) {
  "use strict";

  WO();
  var BY = kt();
  $O.exports = BY("Array", "some");
});
var rC = v(function (y0e, tC) {
  "use strict";

  var IY = eC();
  tC.exports = IY;
});
var aC = v(function () {
  "use strict";

  var PY = P(),
    UY = Ph().includes,
    nC = W(),
    zY = Gn(),
    LY = nC(function () {
      return !Array(1).includes();
    }),
    jY = nC(function () {
      return [, 1].includes(void 0, 1);
    });
  PY({
    target: "Array",
    proto: !0,
    forced: LY || jY
  }, {
    includes: function includes(t) {
      return UY(this, t, arguments.length > 1 ? arguments[1] : void 0);
    }
  });
  zY("includes");
});
var oC = v(function (S0e, iC) {
  "use strict";

  aC();
  var HY = kt();
  iC.exports = HY("Array", "includes");
});
var sC = v(function (E0e, uC) {
  "use strict";

  var FY = oC();
  uC.exports = FY;
});
var lC = v(function () {
  "use strict";

  var GY = P(),
    KY = mr(),
    VY = an(),
    YY = Xt(),
    XY = Gn();
  GY({
    target: "Array",
    proto: !0
  }, {
    at: function at(t) {
      var a = KY(this),
        i = VY(a),
        u = YY(t),
        l = u >= 0 ? u : i + u;
      return l < 0 || l >= i ? void 0 : a[l];
    }
  });
  XY("at");
});
var fC = v(function (_0e, cC) {
  "use strict";

  lC();
  var kY = kt();
  cC.exports = kY("Array", "at");
});
var dC = v(function (A0e, pC) {
  "use strict";

  var QY = fC();
  pC.exports = QY;
});
var Ws = v(function (O0e, mC) {
  "use strict";

  var ZY = Z();
  mC.exports = ZY(1.1.valueOf);
});
var $s = v(function (C0e, vC) {
  "use strict";

  vC.exports = "\t\n\x0B\f\r \xA0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF";
});
var Di = v(function (R0e, gC) {
  "use strict";

  var JY = Z(),
    WY = Ue(),
    $Y = Ne(),
    Yg = $s(),
    hC = JY("".replace),
    eX = RegExp("^[" + Yg + "]+"),
    tX = RegExp("(^|[^" + Yg + "])[" + Yg + "]+$"),
    Vg = function Vg(e) {
      return function (t) {
        var a = $Y(WY(t));
        return e & 1 && (a = hC(a, eX, "")), e & 2 && (a = hC(a, tX, "$1")), a;
      };
    };
  gC.exports = {
    start: Vg(1),
    end: Vg(2),
    trim: Vg(3)
  };
});
var qC = v(function () {
  "use strict";

  var rX = P(),
    Xg = Ve(),
    nX = De(),
    xC = ae(),
    kg = lt(),
    SC = Z(),
    aX = Is(),
    yC = st(),
    iX = Gs(),
    oX = Ra(),
    uX = Os(),
    EC = gh(),
    sX = W(),
    lX = Ds().f,
    cX = zo().f,
    fX = Yt().f,
    pX = Ws(),
    dX = Di().trim,
    el = "Number",
    ko = xC[el],
    bC = kg[el],
    Qg = ko.prototype,
    mX = xC.TypeError,
    vX = SC("".slice),
    ep = SC("".charCodeAt),
    hX = function hX(e) {
      var t = EC(e, "number");
      return typeof t == "bigint" ? t : gX(t);
    },
    gX = function gX(e) {
      var t = EC(e, "number"),
        a,
        i,
        u,
        l,
        c,
        d,
        m,
        h;
      if (uX(t)) throw new mX("Cannot convert a Symbol value to a number");
      if (typeof t == "string" && t.length > 2) {
        if (t = dX(t), a = ep(t, 0), a === 43 || a === 45) {
          if (i = ep(t, 2), i === 88 || i === 120) return NaN;
        } else if (a === 48) {
          switch (ep(t, 1)) {
            case 66:
            case 98:
              u = 2, l = 49;
              break;
            case 79:
            case 111:
              u = 8, l = 55;
              break;
            default:
              return +t;
          }
          for (c = vX(t, 2), d = c.length, m = 0; m < d; m++) if (h = ep(c, m), h < 48 || h > l) return NaN;
          return parseInt(c, u);
        }
      }
      return +t;
    },
    Zg = aX(el, !ko(" 0o1") || !ko("0b1") || ko("+0x1")),
    yX = function yX(e) {
      return oX(Qg, e) && sX(function () {
        pX(e);
      });
    },
    _tp = function tp(t) {
      var a = arguments.length < 1 ? 0 : ko(hX(t));
      return yX(this) ? iX(Object(a), this, _tp) : a;
    };
  _tp.prototype = Qg;
  Zg && !Xg && (Qg.constructor = _tp);
  rX({
    global: !0,
    constructor: !0,
    wrap: !0,
    forced: Zg
  }, {
    Number: _tp
  });
  var TC = function TC(e, t) {
    for (var a = nX ? lX(t) : "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","), i = 0, u; a.length > i; i++) yC(t, u = a[i]) && !yC(e, u) && fX(e, u, cX(t, u));
  };
  Xg && bC && TC(kg[el], bC);
  (Zg || Xg) && TC(kg[el], ko);
});
var _C = v(function () {
  "use strict";

  var bX = P();
  bX({
    target: "Number",
    stat: !0,
    nonConfigurable: !0,
    nonWritable: !0
  }, {
    EPSILON: Math.pow(2, -52)
  });
});
var OC = v(function (B0e, AC) {
  "use strict";

  var xX = ae(),
    SX = xX.isFinite;
  AC.exports = Number.isFinite || function (t) {
    return typeof t == "number" && SX(t);
  };
});
var CC = v(function () {
  "use strict";

  var EX = P(),
    TX = OC();
  EX({
    target: "Number",
    stat: !0
  }, {
    isFinite: TX
  });
});
var Jg = v(function (U0e, RC) {
  "use strict";

  var qX = Te(),
    _X = Math.floor;
  RC.exports = Number.isInteger || function (t) {
    return !qX(t) && isFinite(t) && _X(t) === t;
  };
});
var NC = v(function () {
  "use strict";

  var AX = P(),
    OX = Jg();
  AX({
    target: "Number",
    stat: !0
  }, {
    isInteger: OX
  });
});
var wC = v(function () {
  "use strict";

  var CX = P();
  CX({
    target: "Number",
    stat: !0
  }, {
    isNaN: function isNaN(t) {
      return t !== t;
    }
  });
});
var MC = v(function () {
  "use strict";

  var RX = P(),
    NX = Jg(),
    wX = Math.abs;
  RX({
    target: "Number",
    stat: !0
  }, {
    isSafeInteger: function isSafeInteger(t) {
      return NX(t) && wX(t) <= 9007199254740991;
    }
  });
});
var DC = v(function () {
  "use strict";

  var MX = P();
  MX({
    target: "Number",
    stat: !0,
    nonConfigurable: !0,
    nonWritable: !0
  }, {
    MAX_SAFE_INTEGER: 9007199254740991
  });
});
var BC = v(function () {
  "use strict";

  var DX = P();
  DX({
    target: "Number",
    stat: !0,
    nonConfigurable: !0,
    nonWritable: !0
  }, {
    MIN_SAFE_INTEGER: -9007199254740991
  });
});
var LC = v(function (k0e, zC) {
  "use strict";

  var UC = ae(),
    BX = W(),
    IX = Z(),
    PX = Ne(),
    UX = Di().trim,
    zX = $s(),
    LX = IX("".charAt),
    rp = UC.parseFloat,
    IC = UC.Symbol,
    PC = IC && IC.iterator,
    jX = 1 / rp(zX + "-0") !== -1 / 0 || PC && !BX(function () {
      rp(Object(PC));
    });
  zC.exports = jX ? function (t) {
    var a = UX(PX(t)),
      i = rp(a);
    return i === 0 && LX(a, 0) === "-" ? -0 : i;
  } : rp;
});
var HC = v(function () {
  "use strict";

  var HX = P(),
    jC = LC();
  HX({
    target: "Number",
    stat: !0,
    forced: Number.parseFloat !== jC
  }, {
    parseFloat: jC
  });
});
var kC = v(function (J0e, XC) {
  "use strict";

  var VC = ae(),
    FX = W(),
    GX = Z(),
    KX = Ne(),
    VX = Di().trim,
    FC = $s(),
    tl = VC.parseInt,
    GC = VC.Symbol,
    KC = GC && GC.iterator,
    YC = /^[+-]?0x/i,
    YX = GX(YC.exec),
    XX = tl(FC + "08") !== 8 || tl(FC + "0x16") !== 22 || KC && !FX(function () {
      tl(Object(KC));
    });
  XC.exports = XX ? function (t, a) {
    var i = VX(KX(t));
    return tl(i, a >>> 0 || (YX(YC, i) ? 16 : 10));
  } : tl;
});
var ZC = v(function () {
  "use strict";

  var kX = P(),
    QC = kC();
  kX({
    target: "Number",
    stat: !0,
    forced: Number.parseInt !== QC
  }, {
    parseInt: QC
  });
});
var rl = v(function (ebe, JC) {
  "use strict";

  var QX = Xt(),
    ZX = Ne(),
    JX = Ue(),
    WX = RangeError,
    $X = Math.floor;
  JC.exports = function (t) {
    var a = ZX(JX(this)),
      i = "",
      u = QX(t);
    if (u < 0 || u === 1 / 0) throw new WX("Wrong number of repetitions");
    for (; u > 0; (u = $X(u / 2)) && (a += a)) u % 2 && (i += a);
    return i;
  };
});
var $C = v(function (tbe, WC) {
  "use strict";

  var ek = Math.log,
    tk = Math.LOG10E;
  WC.exports = Math.log10 || function (t) {
    return ek(t) * tk;
  };
});
var nR = v(function () {
  "use strict";

  var rk = P(),
    $g = Z(),
    nk = Xt(),
    ak = Ws(),
    ik = rl(),
    ok = $C(),
    Wg = W(),
    uk = RangeError,
    eR = String,
    sk = isFinite,
    lk = Math.abs,
    ck = Math.floor,
    np = Math.pow,
    fk = Math.round,
    sn = $g(1.1.toExponential),
    pk = $g(ik),
    tR = $g("".slice),
    dk = np(10, 308),
    rR = sn(-69e-12, 4) === "-6.9000e-11" && sn(1.255, 2) === "1.25e+0" && sn(12345, 3) === "1.235e+4" && sn(25, 0) === "3e+1",
    mk = function mk() {
      return Wg(function () {
        sn(1, 1 / 0);
      }) && Wg(function () {
        sn(1, -1 / 0);
      });
    },
    vk = function vk() {
      return !Wg(function () {
        sn(1 / 0, 1 / 0), sn(NaN, 1 / 0);
      });
    },
    hk = !rR || !mk() || !vk();
  rk({
    target: "Number",
    proto: !0,
    forced: hk
  }, {
    toExponential: function toExponential(t) {
      var a = ak(this);
      if (t === void 0) return sn(a);
      var i = nk(t);
      if (!sk(a)) return String(a);
      if (i < 0 || i > 20) throw new uk("Incorrect fraction digits");
      if (rR) return sn(a, i);
      var u = "",
        l,
        c,
        d,
        m,
        h,
        g,
        b;
      return a < 0 && (u = "-", a = -a), a === 0 ? (c = 0, l = pk("0", i + 1)) : (h = ok(a), c = ck(h), i - c >= 308 ? b = a * dk * np(10, i - c - 308) : b = a / np(10, c - i), g = fk(b), b - g >= .5 && (g += 1), g >= np(10, i + 1) && (g /= 10, c += 1), l = eR(g)), i !== 0 && (l = tR(l, 0, 1) + "." + tR(l, 1)), c === 0 ? (d = "+", m = "0") : (d = c > 0 ? "+" : "-", m = eR(lk(c))), l += "e" + d + m, u + l;
    }
  });
});
var lR = v(function () {
  "use strict";

  var gk = P(),
    ry = Z(),
    yk = Xt(),
    bk = Ws(),
    xk = rl(),
    aR = W(),
    Sk = RangeError,
    uR = String,
    sR = Math.floor,
    ty = ry(xk),
    iR = ry("".slice),
    nl = ry(1.1.toFixed),
    _Zo = function Zo(e, t, a) {
      return t === 0 ? a : t % 2 === 1 ? _Zo(e, t - 1, a * e) : _Zo(e * e, t / 2, a);
    },
    Ek = function Ek(e) {
      for (var t = 0, a = e; a >= 4096;) t += 12, a /= 4096;
      for (; a >= 2;) t += 1, a /= 2;
      return t;
    },
    Qo = function Qo(e, t, a) {
      for (var i = -1, u = a; ++i < 6;) u += t * e[i], e[i] = u % 1e7, u = sR(u / 1e7);
    },
    ey = function ey(e, t) {
      for (var a = 6, i = 0; --a >= 0;) i += e[a], e[a] = sR(i / t), i = i % t * 1e7;
    },
    oR = function oR(e) {
      for (var t = 6, a = ""; --t >= 0;) if (a !== "" || t === 0 || e[t] !== 0) {
        var i = uR(e[t]);
        a = a === "" ? i : a + ty("0", 7 - i.length) + i;
      }
      return a;
    },
    Tk = aR(function () {
      return nl(8e-5, 3) !== "0.000" || nl(.9, 0) !== "1" || nl(1.255, 2) !== "1.25" || nl(0xde0b6b3a7640080, 0) !== "1000000000000000128";
    }) || !aR(function () {
      nl({});
    });
  gk({
    target: "Number",
    proto: !0,
    forced: Tk
  }, {
    toFixed: function toFixed(t) {
      var a = bk(this),
        i = yk(t),
        u = [0, 0, 0, 0, 0, 0],
        l = "",
        c = "0",
        d,
        m,
        h,
        g;
      if (i < 0 || i > 20) throw new Sk("Incorrect fraction digits");
      if (a !== a) return "NaN";
      if (a <= -1e21 || a >= 1e21) return uR(a);
      if (a < 0 && (l = "-", a = -a), a > 1e-21) if (d = Ek(a * _Zo(2, 69, 1)) - 69, m = d < 0 ? a * _Zo(2, -d, 1) : a / _Zo(2, d, 1), m *= 4503599627370496, d = 52 - d, d > 0) {
        for (Qo(u, 0, m), h = i; h >= 7;) Qo(u, 1e7, 0), h -= 7;
        for (Qo(u, _Zo(10, h, 1), 0), h = d - 1; h >= 23;) ey(u, 1 << 23), h -= 23;
        ey(u, 1 << h), Qo(u, 1, 1), ey(u, 2), c = oR(u);
      } else Qo(u, 0, m), Qo(u, 1 << -d, 0), c = oR(u) + ty("0", i);
      return i > 0 ? (g = c.length, c = l + (g <= i ? "0." + ty("0", i - g) + c : iR(c, 0, g - i) + "." + iR(c, g - i))) : c = l + c, c;
    }
  });
});
var pR = v(function () {
  "use strict";

  var qk = P(),
    _k = Z(),
    cR = W(),
    fR = Ws(),
    ap = _k(1.1.toPrecision),
    Ak = cR(function () {
      return ap(1, void 0) !== "1";
    }) || !cR(function () {
      ap({});
    });
  qk({
    target: "Number",
    proto: !0,
    forced: Ak
  }, {
    toPrecision: function toPrecision(t) {
      return t === void 0 ? ap(fR(this)) : ap(fR(this), t);
    }
  });
});
var mR = v(function (sbe, dR) {
  "use strict";

  qC();
  _C();
  CC();
  NC();
  wC();
  MC();
  DC();
  BC();
  HC();
  ZC();
  nR();
  lR();
  pR();
  var Ok = lt();
  dR.exports = Ok.Number;
});
var hR = v(function (lbe, vR) {
  "use strict";

  var Ck = mR();
  vR.exports = Ck;
});
var xR = v(function (cbe, bR) {
  "use strict";

  var gR = De(),
    Rk = Z(),
    Nk = Oe(),
    wk = W(),
    ny = zs(),
    Mk = Lh(),
    Dk = cf(),
    Bk = mr(),
    Ik = As(),
    Jo = Object.assign,
    yR = Object.defineProperty,
    Pk = Rk([].concat);
  bR.exports = !Jo || wk(function () {
    if (gR && Jo({
      b: 1
    }, Jo(yR({}, "a", {
      enumerable: !0,
      get: function get() {
        yR(this, "b", {
          value: 3,
          enumerable: !1
        });
      }
    }), {
      b: 2
    })).b !== 1) return !0;
    var e = {},
      t = {},
      a = Symbol("assign detection"),
      i = "abcdefghijklmnopqrst";
    return e[a] = 7, i.split("").forEach(function (u) {
      t[u] = u;
    }), Jo({}, e)[a] !== 7 || ny(Jo({}, t)).join("") !== i;
  }) ? function (t, a) {
    for (var i = Bk(t), u = arguments.length, l = 1, c = Mk.f, d = Dk.f; u > l;) for (var m = Ik(arguments[l++]), h = c ? Pk(ny(m), c(m)) : ny(m), g = h.length, b = 0, x; g > b;) x = h[b++], (!gR || Nk(d, m, x)) && (i[x] = m[x]);
    return i;
  } : Jo;
});
var ER = v(function () {
  "use strict";

  var Uk = P(),
    SR = xR();
  Uk({
    target: "Object",
    stat: !0,
    arity: 2,
    forced: Object.assign !== SR
  }, {
    assign: SR
  });
});
var qR = v(function (dbe, TR) {
  "use strict";

  ER();
  var zk = lt();
  TR.exports = zk.Object.assign;
});
var AR = v(function (mbe, _R) {
  "use strict";

  var Lk = qR();
  _R.exports = Lk;
});
var wR = v(function () {
  "use strict";

  var jk = De(),
    Hk = Da(),
    Fk = Te(),
    Gk = tg(),
    Kk = mr(),
    Vk = Ue(),
    OR = Object.getPrototypeOf,
    CR = Object.setPrototypeOf,
    RR = Object.prototype,
    NR = "__proto__";
  if (jk && OR && CR && !(NR in RR)) try {
    Hk(RR, NR, {
      configurable: !0,
      get: function get() {
        return OR(Kk(this));
      },
      set: function set(t) {
        var a = Vk(this);
        Gk(t) && Fk(a) && CR(a, t);
      }
    });
  } catch (_unused23) {}
});
var MR = v(function () {
  "use strict";

  wR();
});
var BR = v(function (bbe, DR) {
  "use strict";

  var Yk = MR();
  DR.exports = Yk;
});
var ay = v(function (xbe, LR) {
  "use strict";

  var PR = De(),
    Xk = W(),
    UR = Z(),
    kk = Ni(),
    Qk = zs(),
    Zk = Fn(),
    Jk = cf().f,
    zR = UR(Jk),
    Wk = UR([].push),
    $k = PR && Xk(function () {
      var e = Object.create(null);
      return e[2] = 2, !zR(e, 2);
    }),
    IR = function IR(e) {
      return function (t) {
        for (var a = Zk(t), i = Qk(a), u = $k && kk(a) === null, l = i.length, c = 0, d = [], m; l > c;) m = i[c++], (!PR || (u ? m in a : zR(a, m))) && Wk(d, e ? [m, a[m]] : a[m]);
        return d;
      };
    };
  LR.exports = {
    entries: IR(!0),
    values: IR(!1)
  };
});
var jR = v(function () {
  "use strict";

  var eQ = P(),
    tQ = ay().entries;
  eQ({
    target: "Object",
    stat: !0
  }, {
    entries: function entries(t) {
      return tQ(t);
    }
  });
});
var FR = v(function (Tbe, HR) {
  "use strict";

  jR();
  var rQ = lt();
  HR.exports = rQ.Object.entries;
});
var KR = v(function (qbe, GR) {
  "use strict";

  var nQ = FR();
  GR.exports = nQ;
});
var iy = v(function (_be, VR) {
  "use strict";

  VR.exports = Object.is || function (t, a) {
    return t === a ? t !== 0 || 1 / t === 1 / a : t !== t && a !== a;
  };
});
var YR = v(function () {
  "use strict";

  var aQ = P(),
    iQ = iy();
  aQ({
    target: "Object",
    stat: !0
  }, {
    is: iQ
  });
});
var kR = v(function (Cbe, XR) {
  "use strict";

  YR();
  var oQ = lt();
  XR.exports = oQ.Object.is;
});
var ZR = v(function (Rbe, QR) {
  "use strict";

  var uQ = kR();
  QR.exports = uQ;
});
var JR = v(function () {
  "use strict";

  var sQ = P(),
    lQ = ay().values;
  sQ({
    target: "Object",
    stat: !0
  }, {
    values: function values(t) {
      return lQ(t);
    }
  });
});
var $R = v(function (Mbe, WR) {
  "use strict";

  JR();
  var cQ = lt();
  WR.exports = cQ.Object.values;
});
var tN = v(function (Dbe, eN) {
  "use strict";

  var fQ = $R();
  eN.exports = fQ;
});
var oy = v(function (Bbe, iN) {
  "use strict";

  var aN = Z(),
    pQ = Fr(),
    rN = Ne(),
    dQ = rl(),
    mQ = Ue(),
    vQ = aN(dQ),
    hQ = aN("".slice),
    gQ = Math.ceil,
    nN = function nN(e) {
      return function (t, a, i) {
        var u = rN(mQ(t)),
          l = pQ(a),
          c = u.length;
        if (l <= c) return u;
        var d = i === void 0 ? " " : rN(i),
          m,
          h;
        return d === "" ? u : (m = l - c, h = vQ(d, gQ(m / d.length)), h.length > m && (h = hQ(h, 0, m)), e ? u + h : h + u);
      };
    };
  iN.exports = {
    start: nN(!1),
    end: nN(!0)
  };
});
var uy = v(function (Ibe, oN) {
  "use strict";

  var yQ = Ai();
  oN.exports = /Version\/10(?:\.\d+){1,2}(?: [\w./]+)?(?: Mobile\/\w+)? Safari\//.test(yQ);
});
var sy = v(function () {
  "use strict";

  var bQ = P(),
    xQ = oy().end,
    SQ = uy();
  bQ({
    target: "String",
    proto: !0,
    forced: SQ
  }, {
    padEnd: function padEnd(t) {
      return xQ(this, t, arguments.length > 1 ? arguments[1] : void 0);
    }
  });
});
var sN = v(function (zbe, uN) {
  "use strict";

  sy();
  var EQ = kt();
  uN.exports = EQ("String", "padEnd");
});
var cN = v(function (Lbe, lN) {
  "use strict";

  var TQ = sN();
  lN.exports = TQ;
});
var ly = v(function () {
  "use strict";

  var qQ = P(),
    _Q = oy().start,
    AQ = uy();
  qQ({
    target: "String",
    proto: !0,
    forced: AQ
  }, {
    padStart: function padStart(t) {
      return _Q(this, t, arguments.length > 1 ? arguments[1] : void 0);
    }
  });
});
var pN = v(function (Fbe, fN) {
  "use strict";

  ly();
  var OQ = kt();
  fN.exports = OQ("String", "padStart");
});
var mN = v(function (Gbe, dN) {
  "use strict";

  var CQ = pN();
  dN.exports = CQ;
});
var cy = v(function () {
  "use strict";

  var RQ = P(),
    NQ = Z(),
    wQ = Ue(),
    MQ = Xt(),
    DQ = Ne(),
    BQ = W(),
    IQ = NQ("".charAt),
    PQ = BQ(function () {
      return "𠮷".at(-2) !== "\uD842";
    });
  RQ({
    target: "String",
    proto: !0,
    forced: PQ
  }, {
    at: function at(t) {
      var a = DQ(wQ(this)),
        i = a.length,
        u = MQ(t),
        l = u >= 0 ? u : i + u;
      return l < 0 || l >= i ? void 0 : IQ(a, l);
    }
  });
});
var hN = v(function (Ybe, vN) {
  "use strict";

  cy();
  var UQ = kt();
  vN.exports = UQ("String", "at");
});
var yN = v(function (Xbe, gN) {
  "use strict";

  var zQ = hN();
  gN.exports = zQ;
});
var fy = v(function (kbe, bN) {
  "use strict";

  var LQ = Le();
  bN.exports = function () {
    var e = LQ(this),
      t = "";
    return e.hasIndices && (t += "d"), e.global && (t += "g"), e.ignoreCase && (t += "i"), e.multiline && (t += "m"), e.dotAll && (t += "s"), e.unicode && (t += "u"), e.unicodeSets && (t += "v"), e.sticky && (t += "y"), t;
  };
});
var vy = v(function (Qbe, xN) {
  "use strict";

  var py = W(),
    jQ = ae(),
    dy = jQ.RegExp,
    my = py(function () {
      var e = dy("a", "y");
      return e.lastIndex = 2, e.exec("abcd") !== null;
    }),
    HQ = my || py(function () {
      return !dy("a", "y").sticky;
    }),
    FQ = my || py(function () {
      var e = dy("^r", "gy");
      return e.lastIndex = 2, e.exec("str") !== null;
    });
  xN.exports = {
    BROKEN_CARET: FQ,
    MISSED_STICKY: HQ,
    UNSUPPORTED_Y: my
  };
});
var EN = v(function (Zbe, SN) {
  "use strict";

  var GQ = W(),
    KQ = ae(),
    VQ = KQ.RegExp;
  SN.exports = GQ(function () {
    var e = VQ(".", "s");
    return !(e.dotAll && e.test("\n") && e.flags === "s");
  });
});
var qN = v(function (Jbe, TN) {
  "use strict";

  var YQ = W(),
    XQ = ae(),
    kQ = XQ.RegExp;
  TN.exports = YQ(function () {
    var e = kQ("(?<a>b)", "g");
    return e.exec("b").groups.a !== "b" || "b".replace(e, "$<a>c") !== "bc";
  });
});
var up = v(function (Wbe, CN) {
  "use strict";

  var Wo = Oe(),
    op = Z(),
    QQ = Ne(),
    ZQ = fy(),
    JQ = vy(),
    WQ = vf(),
    $Q = Ma(),
    eZ = vr().get,
    tZ = EN(),
    rZ = qN(),
    nZ = WQ("native-string-replace", String.prototype.replace),
    ip = RegExp.prototype.exec,
    _hy = ip,
    aZ = op("".charAt),
    iZ = op("".indexOf),
    oZ = op("".replace),
    _N = op("".slice),
    gy = function () {
      var e = /a/,
        t = /b*/g;
      return Wo(ip, e, "a"), Wo(ip, t, "a"), e.lastIndex !== 0 || t.lastIndex !== 0;
    }(),
    ON = JQ.BROKEN_CARET,
    yy = /()??/.exec("")[1] !== void 0,
    uZ = gy || yy || ON || tZ || rZ,
    AN = function AN(e, t) {
      for (var a = e.groups = $Q(null), i = 0; i < t.length; i++) {
        var u = t[i];
        a[u[0]] = e[u[1]];
      }
    };
  uZ && (_hy = function hy(t) {
    var a = this,
      i = eZ(a),
      u = QQ(t),
      l = i.raw,
      c,
      d,
      m;
    if (l) return l.lastIndex = a.lastIndex, c = Wo(_hy, l, u), a.lastIndex = l.lastIndex, c && i.groups && AN(c, i.groups), c;
    var h = i.groups,
      g = ON && a.sticky,
      b = Wo(ZQ, a),
      x = a.source,
      S = 0,
      O = u;
    if (g) {
      b = oZ(b, "y", ""), iZ(b, "g") === -1 && (b += "g"), O = _N(u, a.lastIndex);
      var C = a.lastIndex > 0 && aZ(u, a.lastIndex - 1);
      a.lastIndex > 0 && (!a.multiline || a.multiline && C !== "\n" && C !== "\r" && C !== "\u2028" && C !== "\u2029") && (x = "(?: (?:" + x + "))", O = " " + O, S++), d = new RegExp("^(?:" + x + ")", b);
    }
    yy && (d = new RegExp("^" + x + "$(?!\\s)", b)), gy && (m = a.lastIndex);
    var _ = Wo(ip, g ? d : a, O);
    return g ? _ ? (_.input = u, _[0] = _N(_[0], S), _.index = a.lastIndex, a.lastIndex += _[0].length) : a.lastIndex = 0 : gy && _ && (a.lastIndex = a.global ? _.index + _[0].length : m), yy && _ && _.length > 1 && Wo(nZ, _[0], d, function () {
      for (var T = 1; T < arguments.length - 2; T++) arguments[T] === void 0 && (_[T] = void 0);
    }), _ && h && AN(_, h), _;
  });
  CN.exports = _hy;
});
var by = v(function () {
  "use strict";

  var sZ = P(),
    RN = up();
  sZ({
    target: "RegExp",
    proto: !0,
    forced: /./.exec !== RN
  }, {
    exec: RN
  });
});
var MN = v(function () {
  "use strict";

  var lZ = P(),
    cZ = Z(),
    fZ = Ms(),
    pZ = RangeError,
    NN = String.fromCharCode,
    wN = String.fromCodePoint,
    dZ = cZ([].join),
    mZ = !!wN && wN.length !== 1;
  lZ({
    target: "String",
    stat: !0,
    arity: 1,
    forced: mZ
  }, {
    fromCodePoint: function fromCodePoint(t) {
      for (var a = [], i = arguments.length, u = 0, l; i > u;) {
        if (l = +arguments[u], fZ(l, 1114111) !== l) throw new pZ(l + " is not a valid code point");
        a[u++] = l < 65536 ? NN(l) : NN(((l -= 65536) >> 10) + 55296, l % 1024 + 56320);
      }
      return dZ(a, "");
    }
  });
});
var PN = v(function () {
  "use strict";

  var vZ = P(),
    IN = Z(),
    hZ = Fn(),
    gZ = mr(),
    DN = Ne(),
    yZ = an(),
    BN = IN([].push),
    bZ = IN([].join);
  vZ({
    target: "String",
    stat: !0
  }, {
    raw: function raw(t) {
      var a = hZ(gZ(t).raw),
        i = yZ(a);
      if (!i) return "";
      for (var u = arguments.length, l = [], c = 0;;) {
        if (BN(l, DN(a[c++])), c === i) return bZ(l, "");
        c < u && BN(l, DN(arguments[c]));
      }
    }
  });
});
var UN = v(function () {
  "use strict";

  var xZ = P(),
    SZ = kf().codeAt;
  xZ({
    target: "String",
    proto: !0
  }, {
    codePointAt: function codePointAt(t) {
      return SZ(this, t);
    }
  });
});
var sp = v(function (uxe, zN) {
  "use strict";

  var EZ = Te(),
    TZ = _r(),
    qZ = ze(),
    _Z = qZ("match");
  zN.exports = function (e) {
    var t;
    return EZ(e) && ((t = e[_Z]) !== void 0 ? !!t : TZ(e) === "RegExp");
  };
});
var lp = v(function (sxe, LN) {
  "use strict";

  var AZ = sp(),
    OZ = TypeError;
  LN.exports = function (e) {
    if (AZ(e)) throw new OZ("The method doesn't accept regular expressions");
    return e;
  };
});
var cp = v(function (lxe, jN) {
  "use strict";

  var CZ = ze(),
    RZ = CZ("match");
  jN.exports = function (e) {
    var t = /./;
    try {
      "/./"[e](t);
    } catch (_unused24) {
      try {
        return t[RZ] = !1, "/./"[e](t);
      } catch (_unused25) {}
    }
    return !1;
  };
});
var GN = v(function () {
  "use strict";

  var NZ = P(),
    wZ = Lo(),
    MZ = zo().f,
    DZ = Fr(),
    HN = Ne(),
    BZ = lp(),
    IZ = Ue(),
    PZ = cp(),
    UZ = Ve(),
    zZ = wZ("".slice),
    LZ = Math.min,
    FN = PZ("endsWith"),
    jZ = !UZ && !FN && !!function () {
      var e = MZ(String.prototype, "endsWith");
      return e && !e.writable;
    }();
  NZ({
    target: "String",
    proto: !0,
    forced: !jZ && !FN
  }, {
    endsWith: function endsWith(t) {
      var a = HN(IZ(this));
      BZ(t);
      var i = HN(t),
        u = arguments.length > 1 ? arguments[1] : void 0,
        l = a.length,
        c = u === void 0 ? l : LZ(DZ(u), l);
      return zZ(a, c - i.length, c) === i;
    }
  });
});
var VN = v(function () {
  "use strict";

  var HZ = P(),
    FZ = Z(),
    GZ = lp(),
    KZ = Ue(),
    KN = Ne(),
    VZ = cp(),
    YZ = FZ("".indexOf);
  HZ({
    target: "String",
    proto: !0,
    forced: !VZ("includes")
  }, {
    includes: function includes(t) {
      return !!~YZ(KN(KZ(this)), KN(GZ(t)), arguments.length > 1 ? arguments[1] : void 0);
    }
  });
});
var XN = v(function () {
  "use strict";

  var XZ = P(),
    kZ = Z(),
    QZ = Ue(),
    ZZ = Ne(),
    YN = kZ("".charCodeAt);
  XZ({
    target: "String",
    proto: !0
  }, {
    isWellFormed: function isWellFormed() {
      for (var t = ZZ(QZ(this)), a = t.length, i = 0; i < a; i++) {
        var u = YN(t, i);
        if ((u & 63488) === 55296 && (u >= 56320 || ++i >= a || (YN(t, i) & 64512) !== 56320)) return !1;
      }
      return !0;
    }
  });
});
var al = v(function (hxe, WN) {
  "use strict";

  by();
  var kN = Oe(),
    QN = zt(),
    JZ = up(),
    ZN = W(),
    JN = ze(),
    WZ = Ar(),
    $Z = JN("species"),
    xy = RegExp.prototype;
  WN.exports = function (e, t, a, i) {
    var u = JN(e),
      l = !ZN(function () {
        var h = {};
        return h[u] = function () {
          return 7;
        }, ""[e](h) !== 7;
      }),
      c = l && !ZN(function () {
        var h = !1,
          g = /a/;
        if (e === "split") {
          var b = {};
          b[$Z] = function () {
            return g;
          }, g = {
            constructor: b,
            flags: ""
          }, g[u] = /./[u];
        }
        return g.exec = function () {
          return h = !0, null;
        }, g[u](""), !h;
      });
    if (!l || !c || a) {
      var d = /./[u],
        m = t(u, ""[e], function (h, g, b, x, S) {
          var O = g.exec;
          return O === JZ || O === xy.exec ? l && !S ? {
            done: !0,
            value: kN(d, g, b, x)
          } : {
            done: !0,
            value: kN(h, b, g, x)
          } : {
            done: !1
          };
        });
      QN(String.prototype, e, m[0]), QN(xy, u, m[1]);
    }
    i && WZ(xy[u], "sham", !0);
  };
});
var il = v(function (gxe, $N) {
  "use strict";

  var eJ = kf().charAt;
  $N.exports = function (e, t, a) {
    return t + (a && eJ(e, t).length || 1);
  };
});
var rw = v(function (yxe, tw) {
  "use strict";

  var tJ = ae(),
    rJ = W(),
    ew = tJ.RegExp,
    nJ = !rJ(function () {
      var e = !0;
      try {
        ew(".", "d");
      } catch (_unused26) {
        e = !1;
      }
      var t = {},
        a = "",
        i = e ? "dgimsy" : "gimsy",
        u = function u(m, h) {
          Object.defineProperty(t, m, {
            get: function get() {
              return a += h, !0;
            }
          });
        },
        l = {
          dotAll: "s",
          global: "g",
          ignoreCase: "i",
          multiline: "m",
          sticky: "y"
        };
      e && (l.hasIndices = "d");
      for (var c in l) u(c, l[c]);
      var d = Object.getOwnPropertyDescriptor(ew.prototype, "flags").get.call(t);
      return d !== i || a !== i;
    });
  tw.exports = {
    correct: nJ
  };
});
var Bi = v(function (bxe, aw) {
  "use strict";

  var aJ = Oe(),
    iJ = st(),
    oJ = Ra(),
    nw = rw(),
    uJ = fy(),
    sJ = RegExp.prototype;
  aw.exports = nw.correct ? function (e) {
    return e.flags;
  } : function (e) {
    return !nw.correct && oJ(sJ, e) && !iJ(e, "flags") ? aJ(uJ, e) : e.flags;
  };
});
var $o = v(function (xxe, ow) {
  "use strict";

  var iw = Oe(),
    lJ = Le(),
    cJ = Ce(),
    fJ = _r(),
    pJ = up(),
    dJ = TypeError;
  ow.exports = function (e, t) {
    var a = e.exec;
    if (cJ(a)) {
      var i = iw(a, e, t);
      return i !== null && lJ(i), i;
    }
    if (fJ(e) === "RegExp") return iw(pJ, e, t);
    throw new dJ("RegExp#exec called on incompatible receiver");
  };
});
var sw = v(function () {
  "use strict";

  var mJ = Oe(),
    vJ = Z(),
    hJ = al(),
    gJ = Le(),
    yJ = Te(),
    bJ = Fr(),
    fp = Ne(),
    xJ = Ue(),
    SJ = nn(),
    EJ = il(),
    TJ = Bi(),
    uw = $o(),
    Sy = vJ("".indexOf);
  hJ("match", function (e, t, a) {
    return [function (u) {
      var l = xJ(this),
        c = yJ(u) ? SJ(u, e) : void 0;
      return c ? mJ(c, u, l) : new RegExp(u)[e](fp(l));
    }, function (i) {
      var u = gJ(this),
        l = fp(i),
        c = a(t, u, l);
      if (c.done) return c.value;
      var d = fp(TJ(u));
      if (!~Sy(d, "g")) return uw(u, l);
      var m = !!~Sy(d, "u") || !!~Sy(d, "v");
      u.lastIndex = 0;
      for (var h = [], g = 0, b; (b = uw(u, l)) !== null;) {
        var x = fp(b[0]);
        h[g] = x, x === "" && (u.lastIndex = EJ(l, bJ(u.lastIndex), m)), g++;
      }
      return g === 0 ? null : h;
    }];
  });
});
var cw = v(function (Txe, lw) {
  "use strict";

  var qJ = Us(),
    _J = Io(),
    AJ = TypeError;
  lw.exports = function (e) {
    if (qJ(e)) return e;
    throw new AJ(_J(e) + " is not a constructor");
  };
});
var ol = v(function (qxe, pw) {
  "use strict";

  var fw = Le(),
    OJ = cw(),
    CJ = Hn(),
    RJ = ze(),
    NJ = RJ("species");
  pw.exports = function (e, t) {
    var a = fw(e).constructor,
      i;
    return a === void 0 || CJ(i = fw(a)[NJ]) ? t : OJ(i);
  };
});
var Ew = v(function () {
  "use strict";

  var wJ = P(),
    dw = Oe(),
    hw = Lo(),
    MJ = jg(),
    pp = Js(),
    mw = Ue(),
    gw = Fr(),
    ul = Ne(),
    DJ = Le(),
    BJ = Te(),
    IJ = _r(),
    PJ = sp(),
    yw = Bi(),
    UJ = nn(),
    zJ = zt(),
    LJ = W(),
    jJ = ze(),
    HJ = ol(),
    FJ = il(),
    GJ = $o(),
    bw = vr(),
    Ty = Ve(),
    vp = jJ("matchAll"),
    xw = "RegExp String",
    Sw = xw + " Iterator",
    KJ = bw.set,
    VJ = bw.getterFor(Sw),
    vw = RegExp.prototype,
    YJ = TypeError,
    dp = hw("".indexOf),
    hp = hw("".matchAll),
    Ey = !!hp && !LJ(function () {
      hp("a", /./);
    }),
    XJ = MJ(function (t, a, i, u) {
      KJ(this, {
        type: Sw,
        regexp: t,
        string: a,
        global: i,
        unicode: u,
        done: !1
      });
    }, xw, function () {
      var t = VJ(this);
      if (t.done) return pp(void 0, !0);
      var a = t.regexp,
        i = t.string,
        u = GJ(a, i);
      return u === null ? (t.done = !0, pp(void 0, !0)) : t.global ? (ul(u[0]) === "" && (a.lastIndex = FJ(i, gw(a.lastIndex), t.unicode)), pp(u, !1)) : (t.done = !0, pp(u, !1));
    }),
    qy = function qy(e) {
      var t = DJ(this),
        a = ul(e),
        i = HJ(t, RegExp),
        u = ul(yw(t)),
        l,
        c,
        d;
      return l = new i(i === RegExp ? t.source : t, u), c = !!~dp(u, "g"), d = !!~dp(u, "u") || !!~dp(u, "v"), l.lastIndex = gw(t.lastIndex), new XJ(l, a, c, d);
    };
  wJ({
    target: "String",
    proto: !0,
    forced: Ey
  }, {
    matchAll: function matchAll(t) {
      var a = mw(this),
        i,
        u,
        l,
        c;
      if (BJ(t)) {
        if (PJ(t) && (i = ul(mw(yw(t))), !~dp(i, "g"))) throw new YJ("`.matchAll` does not allow non-global regexes");
        if (Ey) return hp(a, t);
        if (l = UJ(t, vp), l === void 0 && Ty && IJ(t) === "RegExp" && (l = qy), l) return dw(l, t, a);
      } else if (Ey) return hp(a, t);
      return u = ul(a), c = new RegExp(t, "g"), Ty ? dw(qy, c, u) : c[vp](u);
    }
  });
  Ty || vp in vw || zJ(vw, vp, qy);
});
var Tw = v(function () {
  "use strict";

  var kJ = P(),
    QJ = rl();
  kJ({
    target: "String",
    proto: !0
  }, {
    repeat: QJ
  });
});
var gp = v(function (Rxe, Ow) {
  "use strict";

  var ZJ = _s(),
    Aw = Function.prototype,
    qw = Aw.apply,
    _w = Aw.call;
  Ow.exports = (typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) == "object" && Reflect.apply || (ZJ ? _w.bind(qw) : function () {
    return _w.apply(qw, arguments);
  });
});
var Cy = v(function (Nxe, Cw) {
  "use strict";

  var Oy = Z(),
    JJ = mr(),
    WJ = Math.floor,
    _y = Oy("".charAt),
    $J = Oy("".replace),
    Ay = Oy("".slice),
    eW = /\$([$&'`]|\d{1,2}|<[^>]*>)/g,
    tW = /\$([$&'`]|\d{1,2})/g;
  Cw.exports = function (e, t, a, i, u, l) {
    var c = a + e.length,
      d = i.length,
      m = tW;
    return u !== void 0 && (u = JJ(u), m = eW), $J(l, m, function (h, g) {
      var b;
      switch (_y(g, 0)) {
        case "$":
          return "$";
        case "&":
          return e;
        case "`":
          return Ay(t, 0, a);
        case "'":
          return Ay(t, c);
        case "<":
          b = u[Ay(g, 1, -1)];
          break;
        default:
          var x = +g;
          if (x === 0) return h;
          if (x > d) {
            var S = WJ(x / 10);
            return S === 0 ? h : S <= d ? i[S - 1] === void 0 ? _y(g, 1) : i[S - 1] + _y(g, 1) : h;
          }
          b = i[x - 1];
      }
      return b === void 0 ? "" : b;
    });
  };
});
var Mw = v(function () {
  "use strict";

  var rW = gp(),
    Rw = Oe(),
    yp = Z(),
    nW = al(),
    aW = W(),
    iW = Le(),
    oW = Ce(),
    uW = Te(),
    sW = Xt(),
    lW = Fr(),
    Ii = Ne(),
    cW = Ue(),
    fW = il(),
    pW = nn(),
    dW = Cy(),
    mW = Bi(),
    vW = $o(),
    hW = ze(),
    Ny = hW("replace"),
    gW = Math.max,
    yW = Math.min,
    bW = yp([].concat),
    Ry = yp([].push),
    eu = yp("".indexOf),
    Nw = yp("".slice),
    xW = function xW(e) {
      return e === void 0 ? e : String(e);
    },
    SW = function () {
      return "a".replace(/./, "$0") === "$0";
    }(),
    ww = function () {
      return /./[Ny] ? /./[Ny]("a", "$0") === "" : !1;
    }(),
    EW = !aW(function () {
      var e = /./;
      return e.exec = function () {
        var t = [];
        return t.groups = {
          a: "7"
        }, t;
      }, "".replace(e, "$<a>") !== "7";
    });
  nW("replace", function (e, t, a) {
    var i = ww ? "$" : "$0";
    return [function (l, c) {
      var d = cW(this),
        m = uW(l) ? pW(l, Ny) : void 0;
      return m ? Rw(m, l, d, c) : Rw(t, Ii(d), l, c);
    }, function (u, l) {
      var c = iW(this),
        d = Ii(u),
        m = oW(l);
      m || (l = Ii(l));
      var h = Ii(mW(c));
      if (typeof l == "string" && !~eu(l, i) && !~eu(l, "$<") && !~eu(h, "y")) {
        var g = a(t, c, d, l);
        if (g.done) return g.value;
      }
      var b = !!~eu(h, "g"),
        x;
      b && (x = !!~eu(h, "u") || !!~eu(h, "v"), c.lastIndex = 0);
      for (var S = [], O; O = vW(c, d), !(O === null || (Ry(S, O), !b));) {
        var C = Ii(O[0]);
        C === "" && (c.lastIndex = fW(d, lW(c.lastIndex), x));
      }
      for (var _ = "", T = 0, q = 0; q < S.length; q++) {
        O = S[q];
        for (var M = Ii(O[0]), B = gW(yW(sW(O.index), d.length), 0), G = [], V, te = 1; te < O.length; te++) Ry(G, xW(O[te]));
        var ie = O.groups;
        if (m) {
          var k = bW([M], G, B, d);
          ie !== void 0 && Ry(k, ie), V = Ii(rW(l, void 0, k));
        } else V = dW(M, d, B, G, ie, l);
        B >= T && (_ += Nw(d, T, B) + V, T = B + M.length);
      }
      return _ + Nw(d, T);
    }];
  }, !EW || !SW || ww);
});
var Iw = v(function () {
  "use strict";

  var TW = P(),
    qW = Oe(),
    My = Z(),
    Dw = Ue(),
    _W = Ce(),
    AW = Te(),
    OW = sp(),
    tu = Ne(),
    CW = nn(),
    RW = Bi(),
    NW = Cy(),
    wW = ze(),
    MW = Ve(),
    DW = wW("replace"),
    BW = TypeError,
    wy = My("".indexOf),
    IW = My("".replace),
    Bw = My("".slice),
    PW = Math.max;
  TW({
    target: "String",
    proto: !0
  }, {
    replaceAll: function replaceAll(t, a) {
      var i = Dw(this),
        u,
        l,
        c,
        d,
        m,
        h,
        g,
        b,
        x,
        S,
        O = 0,
        C = "";
      if (AW(t)) {
        if (u = OW(t), u && (l = tu(Dw(RW(t))), !~wy(l, "g"))) throw new BW("`.replaceAll` does not allow non-global regexes");
        if (c = CW(t, DW), c) return qW(c, t, i, a);
        if (MW && u) return IW(tu(i), t, a);
      }
      for (d = tu(i), m = tu(t), h = _W(a), h || (a = tu(a)), g = m.length, b = PW(1, g), x = wy(d, m); x !== -1;) S = h ? tu(a(m, x, d)) : NW(m, d, x, [], void 0, a), C += Bw(d, O, x) + S, O = x + g, x = x + b > d.length ? -1 : wy(d, m, x + b);
      return O < d.length && (C += Bw(d, O)), C;
    }
  });
});
var zw = v(function () {
  "use strict";

  var UW = Oe(),
    zW = al(),
    LW = Le(),
    jW = Te(),
    HW = Ue(),
    Pw = iy(),
    Uw = Ne(),
    FW = nn(),
    GW = $o();
  zW("search", function (e, t, a) {
    return [function (u) {
      var l = HW(this),
        c = jW(u) ? FW(u, e) : void 0;
      return c ? UW(c, u, l) : new RegExp(u)[e](Uw(l));
    }, function (i) {
      var u = LW(this),
        l = Uw(i),
        c = a(t, u, l);
      if (c.done) return c.value;
      var d = u.lastIndex;
      Pw(d, 0) || (u.lastIndex = 0);
      var m = GW(u, l);
      return Pw(u.lastIndex, d) || (u.lastIndex = d), m === null ? -1 : m.index;
    }];
  });
});
var Hw = v(function () {
  "use strict";

  var Dy = Oe(),
    Uy = Z(),
    KW = al(),
    VW = Le(),
    YW = Te(),
    XW = Ue(),
    kW = ol(),
    QW = il(),
    ZW = Fr(),
    By = Ne(),
    JW = nn(),
    WW = Bi(),
    Lw = $o(),
    $W = vy(),
    e$ = W(),
    ru = $W.UNSUPPORTED_Y,
    t$ = 4294967295,
    r$ = Math.min,
    Iy = Uy([].push),
    Py = Uy("".slice),
    bp = Uy("".indexOf),
    n$ = !e$(function () {
      var e = /(?:)/,
        t = e.exec;
      e.exec = function () {
        return t.apply(this, arguments);
      };
      var a = "ab".split(e);
      return a.length !== 2 || a[0] !== "a" || a[1] !== "b";
    }),
    jw = "abbc".split(/(b)*/)[1] === "c" || "test".split(/(?:)/, -1).length !== 4 || "ab".split(/(?:ab)*/).length !== 2 || ".".split(/(.?)(.?)/).length !== 4 || ".".split(/()()/).length > 1 || "".split(/.?/).length;
  KW("split", function (e, t, a) {
    var i = "0".split(void 0, 0).length ? function (u, l) {
      return u === void 0 && l === 0 ? [] : Dy(t, this, u, l);
    } : t;
    return [function (l, c) {
      var d = XW(this),
        m = YW(l) ? JW(l, e) : void 0;
      return m ? Dy(m, l, d, c) : Dy(i, By(d), l, c);
    }, function (u, l) {
      var c = VW(this),
        d = By(u);
      if (!jw) {
        var m = a(i, c, d, l, i !== t);
        if (m.done) return m.value;
      }
      var h = kW(c, RegExp),
        g = By(WW(c)),
        b = !!~bp(g, "u") || !!~bp(g, "v");
      ru ? ~bp(g, "g") || (g += "g") : ~bp(g, "y") || (g += "y");
      var x = new h(ru ? "^(?:" + c.source + ")" : c, g),
        S = l === void 0 ? t$ : l >>> 0;
      if (S === 0) return [];
      if (d.length === 0) return Lw(x, d) === null ? [d] : [];
      for (var O = 0, C = 0, _ = []; C < d.length;) {
        x.lastIndex = ru ? 0 : C;
        var T = Lw(x, ru ? Py(d, C) : d),
          q;
        if (T === null || (q = r$(ZW(x.lastIndex + (ru ? C : 0)), d.length)) === O) C = QW(d, C, b);else {
          if (Iy(_, Py(d, O, C)), _.length === S) return _;
          for (var M = 1; M <= T.length - 1; M++) if (Iy(_, T[M]), _.length === S) return _;
          C = O = q;
        }
      }
      return Iy(_, Py(d, O)), _;
    }];
  }, jw || !n$, ru);
});
var Kw = v(function () {
  "use strict";

  var a$ = P(),
    i$ = Lo(),
    o$ = zo().f,
    u$ = Fr(),
    Fw = Ne(),
    s$ = lp(),
    l$ = Ue(),
    c$ = cp(),
    f$ = Ve(),
    p$ = i$("".slice),
    d$ = Math.min,
    Gw = c$("startsWith"),
    m$ = !f$ && !Gw && !!function () {
      var e = o$(String.prototype, "startsWith");
      return e && !e.writable;
    }();
  a$({
    target: "String",
    proto: !0,
    forced: !m$ && !Gw
  }, {
    startsWith: function startsWith(t) {
      var a = Fw(l$(this));
      s$(t);
      var i = Fw(t),
        u = u$(d$(arguments.length > 1 ? arguments[1] : void 0, a.length));
      return p$(a, u, u + i.length) === i;
    }
  });
});
var Xw = v(function () {
  "use strict";

  var v$ = P(),
    h$ = Z(),
    g$ = Ue(),
    Vw = Xt(),
    y$ = Ne(),
    b$ = h$("".slice),
    x$ = Math.max,
    Yw = Math.min,
    S$ = !"".substr || "ab".substr(-1) !== "b";
  v$({
    target: "String",
    proto: !0,
    forced: S$
  }, {
    substr: function substr(t, a) {
      var i = y$(g$(this)),
        u = i.length,
        l = Vw(t),
        c = l < 0 ? x$(u + l, 0) : Yw(l, u),
        d = a === void 0 ? u : Vw(a);
      if (d <= 0) return "";
      var m = Yw(c + d, u);
      return c >= m ? "" : b$(i, c, m);
    }
  });
});
var Jw = v(function () {
  "use strict";

  var E$ = P(),
    Zw = Oe(),
    jy = Z(),
    T$ = Ue(),
    q$ = Ne(),
    _$ = W(),
    A$ = Array,
    zy = jy("".charAt),
    kw = jy("".charCodeAt),
    O$ = jy([].join),
    Ly = "".toWellFormed,
    C$ = "�",
    Qw = Ly && _$(function () {
      return Zw(Ly, 1) !== "1";
    });
  E$({
    target: "String",
    proto: !0,
    forced: Qw
  }, {
    toWellFormed: function toWellFormed() {
      var t = q$(T$(this));
      if (Qw) return Zw(Ly, t);
      for (var a = t.length, i = A$(a), u = 0; u < a; u++) {
        var l = kw(t, u);
        (l & 63488) !== 55296 ? i[u] = zy(t, u) : l >= 56320 || u + 1 >= a || (kw(t, u + 1) & 64512) !== 56320 ? i[u] = C$ : (i[u] = zy(t, u), i[++u] = zy(t, u));
      }
      return O$(i, "");
    }
  });
});
var xp = v(function (Vxe, eM) {
  "use strict";

  var R$ = Rs().PROPER,
    N$ = W(),
    Ww = $s(),
    $w = "​᠎";
  eM.exports = function (e) {
    return N$(function () {
      return !!Ww[e]() || $w[e]() !== $w || R$ && Ww[e].name !== e;
    });
  };
});
var tM = v(function () {
  "use strict";

  var w$ = P(),
    M$ = Di().trim,
    D$ = xp();
  w$({
    target: "String",
    proto: !0,
    forced: D$("trim")
  }, {
    trim: function trim() {
      return M$(this);
    }
  });
});
var Hy = v(function (kxe, rM) {
  "use strict";

  var B$ = Di().start,
    I$ = xp();
  rM.exports = I$("trimStart") ? function () {
    return B$(this);
  } : "".trimStart;
});
var aM = v(function () {
  "use strict";

  var P$ = P(),
    nM = Hy();
  P$({
    target: "String",
    proto: !0,
    name: "trimStart",
    forced: "".trimLeft !== nM
  }, {
    trimLeft: nM
  });
});
var oM = v(function () {
  "use strict";

  aM();
  var U$ = P(),
    iM = Hy();
  U$({
    target: "String",
    proto: !0,
    name: "trimStart",
    forced: "".trimStart !== iM
  }, {
    trimStart: iM
  });
});
var Fy = v(function ($xe, uM) {
  "use strict";

  var z$ = Di().end,
    L$ = xp();
  uM.exports = L$("trimEnd") ? function () {
    return z$(this);
  } : "".trimEnd;
});
var lM = v(function () {
  "use strict";

  var j$ = P(),
    sM = Fy();
  j$({
    target: "String",
    proto: !0,
    name: "trimEnd",
    forced: "".trimRight !== sM
  }, {
    trimRight: sM
  });
});
var fM = v(function () {
  "use strict";

  lM();
  var H$ = P(),
    cM = Fy();
  H$({
    target: "String",
    proto: !0,
    name: "trimEnd",
    forced: "".trimEnd !== cM
  }, {
    trimEnd: cM
  });
});
var Zt = v(function (aSe, dM) {
  "use strict";

  var F$ = Z(),
    G$ = Ue(),
    pM = Ne(),
    K$ = /"/g,
    V$ = F$("".replace);
  dM.exports = function (e, t, a, i) {
    var u = pM(G$(e)),
      l = "<" + t;
    return a !== "" && (l += " " + a + '="' + V$(pM(i), K$, "&quot;") + '"'), l + ">" + u + "</" + t + ">";
  };
});
var Jt = v(function (iSe, mM) {
  "use strict";

  var Y$ = W();
  mM.exports = function (e) {
    return Y$(function () {
      var t = ""[e]('"');
      return t !== t.toLowerCase() || t.split('"').length > 3;
    });
  };
});
var vM = v(function () {
  "use strict";

  var X$ = P(),
    k$ = Zt(),
    Q$ = Jt();
  X$({
    target: "String",
    proto: !0,
    forced: Q$("anchor")
  }, {
    anchor: function anchor(t) {
      return k$(this, "a", "name", t);
    }
  });
});
var hM = v(function () {
  "use strict";

  var Z$ = P(),
    J$ = Zt(),
    W$ = Jt();
  Z$({
    target: "String",
    proto: !0,
    forced: W$("big")
  }, {
    big: function big() {
      return J$(this, "big", "", "");
    }
  });
});
var gM = v(function () {
  "use strict";

  var $$ = P(),
    eee = Zt(),
    tee = Jt();
  $$({
    target: "String",
    proto: !0,
    forced: tee("blink")
  }, {
    blink: function blink() {
      return eee(this, "blink", "", "");
    }
  });
});
var yM = v(function () {
  "use strict";

  var ree = P(),
    nee = Zt(),
    aee = Jt();
  ree({
    target: "String",
    proto: !0,
    forced: aee("bold")
  }, {
    bold: function bold() {
      return nee(this, "b", "", "");
    }
  });
});
var bM = v(function () {
  "use strict";

  var iee = P(),
    oee = Zt(),
    uee = Jt();
  iee({
    target: "String",
    proto: !0,
    forced: uee("fixed")
  }, {
    fixed: function fixed() {
      return oee(this, "tt", "", "");
    }
  });
});
var xM = v(function () {
  "use strict";

  var see = P(),
    lee = Zt(),
    cee = Jt();
  see({
    target: "String",
    proto: !0,
    forced: cee("fontcolor")
  }, {
    fontcolor: function fontcolor(t) {
      return lee(this, "font", "color", t);
    }
  });
});
var SM = v(function () {
  "use strict";

  var fee = P(),
    pee = Zt(),
    dee = Jt();
  fee({
    target: "String",
    proto: !0,
    forced: dee("fontsize")
  }, {
    fontsize: function fontsize(t) {
      return pee(this, "font", "size", t);
    }
  });
});
var EM = v(function () {
  "use strict";

  var mee = P(),
    vee = Zt(),
    hee = Jt();
  mee({
    target: "String",
    proto: !0,
    forced: hee("italics")
  }, {
    italics: function italics() {
      return vee(this, "i", "", "");
    }
  });
});
var TM = v(function () {
  "use strict";

  var gee = P(),
    yee = Zt(),
    bee = Jt();
  gee({
    target: "String",
    proto: !0,
    forced: bee("link")
  }, {
    link: function link(t) {
      return yee(this, "a", "href", t);
    }
  });
});
var qM = v(function () {
  "use strict";

  var xee = P(),
    See = Zt(),
    Eee = Jt();
  xee({
    target: "String",
    proto: !0,
    forced: Eee("small")
  }, {
    small: function small() {
      return See(this, "small", "", "");
    }
  });
});
var _M = v(function () {
  "use strict";

  var Tee = P(),
    qee = Zt(),
    _ee = Jt();
  Tee({
    target: "String",
    proto: !0,
    forced: _ee("strike")
  }, {
    strike: function strike() {
      return qee(this, "strike", "", "");
    }
  });
});
var AM = v(function () {
  "use strict";

  var Aee = P(),
    Oee = Zt(),
    Cee = Jt();
  Aee({
    target: "String",
    proto: !0,
    forced: Cee("sub")
  }, {
    sub: function sub() {
      return Oee(this, "sub", "", "");
    }
  });
});
var OM = v(function () {
  "use strict";

  var Ree = P(),
    Nee = Zt(),
    wee = Jt();
  Ree({
    target: "String",
    proto: !0,
    forced: wee("sup")
  }, {
    sup: function sup() {
      return Nee(this, "sup", "", "");
    }
  });
});
var RM = v(function (MSe, CM) {
  "use strict";

  Xn();
  by();
  MN();
  PN();
  UN();
  cy();
  GN();
  VN();
  XN();
  sw();
  Ew();
  sy();
  ly();
  Tw();
  Mw();
  Iw();
  zw();
  Hw();
  Kw();
  Xw();
  Jw();
  tM();
  oM();
  fM();
  Yo();
  vM();
  hM();
  gM();
  yM();
  bM();
  xM();
  SM();
  EM();
  TM();
  qM();
  _M();
  AM();
  OM();
  var Mee = lt();
  CM.exports = Mee.String;
});
var wM = v(function (DSe, NM) {
  "use strict";

  var Dee = RM();
  NM.exports = Dee;
});
var sl = v(function (BSe, MM) {
  "use strict";

  var Bee = Ne();
  MM.exports = function (e, t) {
    return e === void 0 ? arguments.length < 2 ? "" : t : Bee(e);
  };
});
var Gy = v(function (ISe, BM) {
  "use strict";

  var Iee = De(),
    Pee = W(),
    Uee = Le(),
    DM = sl(),
    Sp = Error.prototype.toString,
    zee = Pee(function () {
      if (Iee) {
        var e = Object.create(Object.defineProperty({}, "name", {
          get: function get() {
            return this === e;
          }
        }));
        if (Sp.call(e) !== "true") return !0;
      }
      return Sp.call({
        message: 1,
        name: 2
      }) !== "2: 1" || Sp.call({}) !== "Error";
    });
  BM.exports = zee ? function () {
    var t = Uee(this),
      a = DM(t.name, "Error"),
      i = DM(t.message);
    return a ? i ? a + ": " + i : a : i;
  } : Sp;
});
var UM = v(function () {
  "use strict";

  var Lee = zt(),
    IM = Gy(),
    PM = Error.prototype;
  PM.toString !== IM && Lee(PM, "toString", IM);
});
var ja = v(function (zSe, FM) {
  "use strict";

  var jee = Fn(),
    Ky = Gn(),
    zM = Vo(),
    jM = vr(),
    Hee = Yt().f,
    Fee = Jf(),
    Ep = Js(),
    Gee = Ve(),
    Kee = De(),
    HM = "Array Iterator",
    Vee = jM.set,
    Yee = jM.getterFor(HM);
  FM.exports = Fee(Array, "Array", function (e, t) {
    Vee(this, {
      type: HM,
      target: jee(e),
      index: 0,
      kind: t
    });
  }, function () {
    var e = Yee(this),
      t = e.target,
      a = e.index++;
    if (!t || a >= t.length) return e.target = null, Ep(void 0, !0);
    switch (e.kind) {
      case "keys":
        return Ep(a, !1);
      case "values":
        return Ep(t[a], !1);
    }
    return Ep([a, t[a]], !1);
  }, "values");
  var LM = zM.Arguments = zM.Array;
  Ky("keys");
  Ky("values");
  Ky("entries");
  if (!Gee && Kee && LM.name !== "values") try {
    Hee(LM, "name", {
      value: "values"
    });
  } catch (_unused27) {}
});
var KM = v(function () {
  "use strict";

  var Xee = P(),
    kee = mr(),
    GM = zs(),
    Qee = W(),
    Zee = Qee(function () {
      GM(1);
    });
  Xee({
    target: "Object",
    stat: !0,
    forced: Zee
  }, {
    keys: function keys(t) {
      return GM(kee(t));
    }
  });
});
var kM = v(function (HSe, XM) {
  "use strict";

  var Jee = _r(),
    Wee = Fn(),
    VM = Ds().f,
    $ee = Fs(),
    YM = (typeof window === "undefined" ? "undefined" : _typeof(window)) == "object" && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [],
    ete = function ete(e) {
      try {
        return VM(e);
      } catch (_unused28) {
        return $ee(YM);
      }
    };
  XM.exports.f = function (t) {
    return YM && Jee(t) === "Window" ? ete(t) : VM(Wee(t));
  };
});
var ZM = v(function (FSe, QM) {
  "use strict";

  var tte = W();
  QM.exports = tte(function () {
    if (typeof ArrayBuffer == "function") {
      var e = new ArrayBuffer(8);
      Object.isExtensible(e) && Object.defineProperty(e, "a", {
        value: 8
      });
    }
  });
});
var $M = v(function (GSe, WM) {
  "use strict";

  var rte = W(),
    nte = Te(),
    ate = _r(),
    JM = ZM(),
    Tp = Object.isExtensible,
    ite = rte(function () {
      Tp(1);
    });
  WM.exports = ite || JM ? function (t) {
    return !nte(t) || JM && ate(t) === "ArrayBuffer" ? !1 : Tp ? Tp(t) : !0;
  } : Tp;
});
var Vy = v(function (KSe, eD) {
  "use strict";

  var ote = W();
  eD.exports = !ote(function () {
    return Object.isExtensible(Object.preventExtensions({}));
  });
});
var ll = v(function (VSe, nD) {
  "use strict";

  var ute = P(),
    ste = Z(),
    lte = Ns(),
    cte = Te(),
    Yy = st(),
    fte = Yt().f,
    tD = Ds(),
    pte = kM(),
    Xy = $M(),
    dte = Po(),
    mte = Vy(),
    rD = !1,
    Qn = dte("meta"),
    vte = 0,
    ky = function ky(e) {
      fte(e, Qn, {
        value: {
          objectID: "O" + vte++,
          weakData: {}
        }
      });
    },
    hte = function hte(e, t) {
      if (!cte(e)) return _typeof(e) == "symbol" ? e : (typeof e == "string" ? "S" : "P") + e;
      if (!Yy(e, Qn)) {
        if (!Xy(e)) return "F";
        if (!t) return "E";
        ky(e);
      }
      return e[Qn].objectID;
    },
    gte = function gte(e, t) {
      if (!Yy(e, Qn)) {
        if (!Xy(e)) return !0;
        if (!t) return !1;
        ky(e);
      }
      return e[Qn].weakData;
    },
    yte = function yte(e) {
      return mte && rD && Xy(e) && !Yy(e, Qn) && ky(e), e;
    },
    bte = function bte() {
      xte.enable = function () {}, rD = !0;
      var e = tD.f,
        t = ste([].splice),
        a = {};
      a[Qn] = 1, e(a).length && (tD.f = function (i) {
        for (var u = e(i), l = 0, c = u.length; l < c; l++) if (u[l] === Qn) {
          t(u, l, 1);
          break;
        }
        return u;
      }, ute({
        target: "Object",
        stat: !0,
        forced: !0
      }, {
        getOwnPropertyNames: pte.f
      }));
    },
    xte = nD.exports = {
      enable: bte,
      fastKey: hte,
      getWeakData: gte,
      onFreeze: yte
    };
  lte[Qn] = !0;
});
var Vr = v(function (YSe, uD) {
  "use strict";

  var Ste = Na(),
    Ete = Oe(),
    Tte = Le(),
    qte = Io(),
    _te = Fg(),
    Ate = an(),
    aD = Ra(),
    Ote = Gg(),
    Cte = Wf(),
    iD = Xo(),
    Rte = TypeError,
    qp = function qp(e, t) {
      this.stopped = e, this.result = t;
    },
    oD = qp.prototype;
  uD.exports = function (e, t, a) {
    var i = a && a.that,
      u = !!(a && a.AS_ENTRIES),
      l = !!(a && a.IS_RECORD),
      c = !!(a && a.IS_ITERATOR),
      d = !!(a && a.INTERRUPTED),
      m = Ste(t, i),
      h,
      g,
      b,
      x,
      S,
      O,
      C,
      _ = function _(M) {
        var B = h;
        return h = void 0, B && iD(B, "normal"), new qp(!0, M);
      },
      T = function T(M) {
        return u ? (Tte(M), d ? m(M[0], M[1], _) : m(M[0], M[1])) : d ? m(M, _) : m(M);
      };
    if (l) h = e.iterator;else if (c) h = e;else {
      if (g = Cte(e), !g) throw new Rte(qte(e) + " is not iterable");
      if (_te(g)) {
        for (b = 0, x = Ate(e); x > b; b++) if (S = T(e[b]), S && aD(oD, S)) return S;
        return new qp(!1);
      }
      h = Ote(e, g);
    }
    for (O = l ? e.next : h.next; !(C = Ete(O, h)).done;) {
      var q = C.value;
      try {
        S = T(q);
      } catch (M) {
        if (h) iD(h, "throw", M);else throw M;
      }
      if (_typeof(S) == "object" && S && aD(oD, S)) return S;
    }
    return new qp(!1);
  };
});
var cl = v(function (XSe, lD) {
  "use strict";

  var Nte = P(),
    wte = ae(),
    Mte = Z(),
    sD = Is(),
    Dte = zt(),
    Bte = ll(),
    Ite = Vr(),
    Pte = Ba(),
    Ute = Ce(),
    zte = Hn(),
    Qy = Te(),
    Zy = W(),
    Lte = $f(),
    jte = Ia(),
    Hte = Gs();
  lD.exports = function (e, t, a) {
    var i = e.indexOf("Map") !== -1,
      u = e.indexOf("Weak") !== -1,
      l = i ? "set" : "add",
      c = wte[e],
      d = c && c.prototype,
      m = c,
      h = {},
      g = function g(T) {
        var q = Mte(d[T]);
        Dte(d, T, T === "add" ? function (B) {
          return q(this, B === 0 ? 0 : B), this;
        } : T === "delete" ? function (M) {
          return u && !Qy(M) ? !1 : q(this, M === 0 ? 0 : M);
        } : T === "get" ? function (B) {
          return u && !Qy(B) ? void 0 : q(this, B === 0 ? 0 : B);
        } : T === "has" ? function (B) {
          return u && !Qy(B) ? !1 : q(this, B === 0 ? 0 : B);
        } : function (B, G) {
          return q(this, B === 0 ? 0 : B, G), this;
        });
      },
      b = sD(e, !Ute(c) || !(u || d.forEach && !Zy(function () {
        new c().entries().next();
      })));
    if (b) m = a.getConstructor(t, e, i, l), Bte.enable();else if (sD(e, !0)) {
      var x = new m(),
        S = x[l](u ? {} : -0, 1) !== x,
        O = Zy(function () {
          x.has(1);
        }),
        C = Lte(function (T) {
          new c(T);
        }),
        _ = !u && Zy(function () {
          for (var T = new c(), q = 5; q--;) T[l](q, q);
          return !T.has(-0);
        });
      C || (m = t(function (T, q) {
        Pte(T, d);
        var M = Hte(new c(), T, m);
        return zte(q) || Ite(q, M[l], {
          that: M,
          AS_ENTRIES: i
        }), M;
      }), m.prototype = d, d.constructor = m), (O || _) && (g("delete"), g("has"), i && g("get")), (_ || S) && g(l), u && d.clear && delete d.clear;
    }
    return h[e] = m, Nte({
      global: !0,
      constructor: !0,
      forced: m !== c
    }, h), jte(m, e), u || a.setStrong(m, e, i), m;
  };
});
var Wy = v(function (kSe, vD) {
  "use strict";

  var cD = Ma(),
    Fte = Da(),
    fD = js(),
    Gte = Na(),
    Kte = Ba(),
    Vte = Hn(),
    Yte = Vr(),
    Xte = Jf(),
    _p = Js(),
    kte = zf(),
    fl = De(),
    pD = ll().fastKey,
    mD = vr(),
    dD = mD.set,
    Jy = mD.getterFor;
  vD.exports = {
    getConstructor: function getConstructor(e, t, a, i) {
      var u = e(function (h, g) {
          Kte(h, l), dD(h, {
            type: t,
            index: cD(null),
            first: null,
            last: null,
            size: 0
          }), fl || (h.size = 0), Vte(g) || Yte(g, h[i], {
            that: h,
            AS_ENTRIES: a
          });
        }),
        l = u.prototype,
        c = Jy(t),
        d = function d(h, g, b) {
          var x = c(h),
            S = m(h, g),
            O,
            C;
          return S ? S.value = b : (x.last = S = {
            index: C = pD(g, !0),
            key: g,
            value: b,
            previous: O = x.last,
            next: null,
            removed: !1
          }, x.first || (x.first = S), O && (O.next = S), fl ? x.size++ : h.size++, C !== "F" && (x.index[C] = S)), h;
        },
        m = function m(h, g) {
          var b = c(h),
            x = pD(g),
            S;
          if (x !== "F") return b.index[x];
          for (S = b.first; S; S = S.next) if (S.key === g) return S;
        };
      return fD(l, {
        clear: function clear() {
          for (var g = this, b = c(g), x = b.first; x;) x.removed = !0, x.previous && (x.previous = x.previous.next = null), x = x.next;
          b.first = b.last = null, b.index = cD(null), fl ? b.size = 0 : g.size = 0;
        },
        delete: function _delete(h) {
          var g = this,
            b = c(g),
            x = m(g, h);
          if (x) {
            var S = x.next,
              O = x.previous;
            delete b.index[x.index], x.removed = !0, O && (O.next = S), S && (S.previous = O), b.first === x && (b.first = S), b.last === x && (b.last = O), fl ? b.size-- : g.size--;
          }
          return !!x;
        },
        forEach: function forEach(g) {
          for (var b = c(this), x = Gte(g, arguments.length > 1 ? arguments[1] : void 0), S; S = S ? S.next : b.first;) for (x(S.value, S.key, this); S && S.removed;) S = S.previous;
        },
        has: function has(g) {
          return !!m(this, g);
        }
      }), fD(l, a ? {
        get: function get(g) {
          var b = m(this, g);
          return b && b.value;
        },
        set: function set(g, b) {
          return d(this, g === 0 ? 0 : g, b);
        }
      } : {
        add: function add(g) {
          return d(this, g = g === 0 ? 0 : g, g);
        }
      }), fl && Fte(l, "size", {
        configurable: !0,
        get: function get() {
          return c(this).size;
        }
      }), u;
    },
    setStrong: function setStrong(e, t, a) {
      var i = t + " Iterator",
        u = Jy(t),
        l = Jy(i);
      Xte(e, t, function (c, d) {
        dD(this, {
          type: i,
          target: c,
          state: u(c),
          kind: d,
          last: null
        });
      }, function () {
        for (var c = l(this), d = c.kind, m = c.last; m && m.removed;) m = m.previous;
        return !c.target || !(c.last = m = m ? m.next : c.state.first) ? (c.target = null, _p(void 0, !0)) : _p(d === "keys" ? m.key : d === "values" ? m.value : [m.key, m.value], !1);
      }, a ? "entries" : "values", !a, !0), kte(t);
    }
  };
});
var hD = v(function () {
  "use strict";

  var Qte = cl(),
    Zte = Wy();
  Qte("Map", function (e) {
    return function () {
      return e(this, arguments.length ? arguments[0] : void 0);
    };
  }, Zte);
});
var $y = v(function () {
  "use strict";

  hD();
});
var gD = v(function () {
  "use strict";

  var Jte = cl(),
    Wte = Wy();
  Jte("Set", function (e) {
    return function () {
      return e(this, arguments.length ? arguments[0] : void 0);
    };
  }, Wte);
});
var e0 = v(function () {
  "use strict";

  gD();
});
var t0 = v(function (nEe, yD) {
  "use strict";

  yD.exports = {
    IndexSizeError: {
      s: "INDEX_SIZE_ERR",
      c: 1,
      m: 1
    },
    DOMStringSizeError: {
      s: "DOMSTRING_SIZE_ERR",
      c: 2,
      m: 0
    },
    HierarchyRequestError: {
      s: "HIERARCHY_REQUEST_ERR",
      c: 3,
      m: 1
    },
    WrongDocumentError: {
      s: "WRONG_DOCUMENT_ERR",
      c: 4,
      m: 1
    },
    InvalidCharacterError: {
      s: "INVALID_CHARACTER_ERR",
      c: 5,
      m: 1
    },
    NoDataAllowedError: {
      s: "NO_DATA_ALLOWED_ERR",
      c: 6,
      m: 0
    },
    NoModificationAllowedError: {
      s: "NO_MODIFICATION_ALLOWED_ERR",
      c: 7,
      m: 1
    },
    NotFoundError: {
      s: "NOT_FOUND_ERR",
      c: 8,
      m: 1
    },
    NotSupportedError: {
      s: "NOT_SUPPORTED_ERR",
      c: 9,
      m: 1
    },
    InUseAttributeError: {
      s: "INUSE_ATTRIBUTE_ERR",
      c: 10,
      m: 1
    },
    InvalidStateError: {
      s: "INVALID_STATE_ERR",
      c: 11,
      m: 1
    },
    SyntaxError: {
      s: "SYNTAX_ERR",
      c: 12,
      m: 1
    },
    InvalidModificationError: {
      s: "INVALID_MODIFICATION_ERR",
      c: 13,
      m: 1
    },
    NamespaceError: {
      s: "NAMESPACE_ERR",
      c: 14,
      m: 1
    },
    InvalidAccessError: {
      s: "INVALID_ACCESS_ERR",
      c: 15,
      m: 1
    },
    ValidationError: {
      s: "VALIDATION_ERR",
      c: 16,
      m: 0
    },
    TypeMismatchError: {
      s: "TYPE_MISMATCH_ERR",
      c: 17,
      m: 1
    },
    SecurityError: {
      s: "SECURITY_ERR",
      c: 18,
      m: 1
    },
    NetworkError: {
      s: "NETWORK_ERR",
      c: 19,
      m: 1
    },
    AbortError: {
      s: "ABORT_ERR",
      c: 20,
      m: 1
    },
    URLMismatchError: {
      s: "URL_MISMATCH_ERR",
      c: 21,
      m: 1
    },
    QuotaExceededError: {
      s: "QUOTA_EXCEEDED_ERR",
      c: 22,
      m: 1
    },
    TimeoutError: {
      s: "TIMEOUT_ERR",
      c: 23,
      m: 1
    },
    InvalidNodeTypeError: {
      s: "INVALID_NODE_TYPE_ERR",
      c: 24,
      m: 1
    },
    DataCloneError: {
      s: "DATA_CLONE_ERR",
      c: 25,
      m: 1
    }
  };
});
var Ap = v(function (aEe, SD) {
  "use strict";

  var $te = Z(),
    bD = Error,
    ere = $te("".replace),
    tre = function (e) {
      return String(new bD(e).stack);
    }("zxcasd"),
    xD = /\n\s*at [^:]*:[^\n]*/,
    rre = xD.test(tre);
  SD.exports = function (e, t) {
    if (rre && typeof e == "string" && !bD.prepareStackTrace) for (; t--;) e = ere(e, xD, "");
    return e;
  };
});
var MD = v(function () {
  "use strict";

  var nre = P(),
    Rp = Ut(),
    are = Sg(),
    u0 = W(),
    ire = Ma(),
    s0 = jn(),
    Np = Yt().f,
    ore = zt(),
    Op = Da(),
    Cp = st(),
    ure = Ba(),
    sre = Le(),
    qD = Gy(),
    ED = sl(),
    nu = t0(),
    lre = Ap(),
    _D = vr(),
    l0 = De(),
    AD = Ve(),
    au = "DOMException",
    o0 = "DATA_CLONE_ERR",
    Mp = Rp("Error"),
    Zn = Rp(au) || function () {
      try {
        var e = Rp("MessageChannel") || are("worker_threads").MessageChannel;
        new e().port1.postMessage(new WeakMap());
      } catch (t) {
        if (t.name === o0 && t.code === 25) return t.constructor;
      }
    }(),
    cre = Zn && Zn.prototype,
    OD = Mp.prototype,
    fre = _D.set,
    pre = _D.getterFor(au),
    dre = "stack" in new Mp(au),
    CD = function CD(e) {
      return Cp(nu, e) && nu[e].m ? nu[e].c : 0;
    },
    c0 = function c0() {
      ure(this, dl);
      var t = arguments.length,
        a = ED(t < 1 ? void 0 : arguments[0]),
        i = ED(t < 2 ? void 0 : arguments[1], "Error"),
        u = CD(i);
      if (fre(this, {
        type: au,
        name: i,
        message: a,
        code: u
      }), l0 || (this.name = i, this.message = a, this.code = u), dre) {
        var l = new Mp(a);
        l.name = au, Np(this, "stack", s0(1, lre(l.stack, 1)));
      }
    },
    dl = c0.prototype = ire(OD),
    RD = function RD(e) {
      return {
        enumerable: !0,
        configurable: !0,
        get: e
      };
    },
    r0 = function r0(e) {
      return RD(function () {
        return pre(this)[e];
      });
    };
  l0 && (Op(dl, "code", r0("code")), Op(dl, "message", r0("message")), Op(dl, "name", r0("name")));
  Np(dl, "constructor", s0(1, c0));
  var Dp = u0(function () {
      return !(new Zn() instanceof Mp);
    }),
    ND = Dp || u0(function () {
      return OD.toString !== qD || String(new Zn(1, 2)) !== "2: 1";
    }),
    wD = Dp || u0(function () {
      return new Zn(1, "DataCloneError").code !== 25;
    }),
    mre = Dp || Zn[o0] !== 25 || cre[o0] !== 25,
    TD = AD ? ND || wD || mre : Dp;
  nre({
    global: !0,
    constructor: !0,
    forced: TD
  }, {
    DOMException: TD ? c0 : Zn
  });
  var ml = Rp(au),
    wp = ml.prototype;
  ND && (AD || Zn === ml) && ore(wp, "toString", qD);
  wD && l0 && Zn === ml && Op(wp, "code", RD(function () {
    return CD(sre(this).name);
  }));
  for (n0 in nu) Cp(nu, n0) && (a0 = nu[n0], pl = a0.s, i0 = s0(6, a0.c), Cp(ml, pl) || Np(ml, pl, i0), Cp(wp, pl) || Np(wp, pl, i0));
  var a0, pl, i0, n0;
});
var LD = v(function () {
  "use strict";

  var vre = P(),
    hre = ae(),
    y0 = Ut(),
    h0 = jn(),
    g0 = Yt().f,
    DD = st(),
    gre = Ba(),
    yre = Gs(),
    BD = sl(),
    f0 = t0(),
    bre = Ap(),
    xre = De(),
    UD = Ve(),
    hl = "DOMException",
    zD = y0("Error"),
    gl = y0(hl),
    _b2 = function b0() {
      gre(this, Sre);
      var t = arguments.length,
        a = BD(t < 1 ? void 0 : arguments[0]),
        i = BD(t < 2 ? void 0 : arguments[1], "Error"),
        u = new gl(a, i),
        l = new zD(a);
      return l.name = hl, g0(u, "stack", h0(1, bre(l.stack, 1))), yre(u, this, _b2), u;
    },
    Sre = _b2.prototype = gl.prototype,
    Ere = "stack" in new zD(hl),
    Tre = "stack" in new gl(1, 2),
    p0 = gl && xre && Object.getOwnPropertyDescriptor(hre, hl),
    qre = !!p0 && !(p0.writable && p0.configurable),
    ID = Ere && !qre && !Tre;
  vre({
    global: !0,
    constructor: !0,
    forced: UD || ID
  }, {
    DOMException: ID ? _b2 : gl
  });
  var vl = y0(hl),
    PD = vl.prototype;
  if (PD.constructor !== vl) {
    UD || g0(PD, "constructor", h0(1, vl));
    for (d0 in f0) DD(f0, d0) && (m0 = f0[d0], v0 = m0.s, DD(vl, v0) || g0(vl, v0, h0(6, m0.c)));
  }
  var m0, v0, d0;
});
var HD = v(function () {
  "use strict";

  var _re = Ut(),
    Are = Ia(),
    jD = "DOMException";
  Are(_re(jD), jD);
});
var x0 = v(function (fEe, FD) {
  "use strict";

  var Ore = TypeError;
  FD.exports = function (e, t) {
    if (e < t) throw new Ore("Not enough arguments");
    return e;
  };
});
var bl = v(function (pEe, GD) {
  "use strict";

  var Bp = Z(),
    yl = Map.prototype;
  GD.exports = {
    Map: Map,
    set: Bp(yl.set),
    get: Bp(yl.get),
    has: Bp(yl.has),
    remove: Bp(yl.delete),
    proto: yl
  };
});
var Or = v(function (dEe, KD) {
  "use strict";

  var S0 = Z(),
    Ip = Set.prototype;
  KD.exports = {
    Set: Set,
    add: S0(Ip.add),
    has: S0(Ip.has),
    remove: S0(Ip.delete),
    proto: Ip
  };
});
var Ha = v(function (mEe, VD) {
  "use strict";

  var Cre = Oe();
  VD.exports = function (e, t, a) {
    for (var i = a ? e : e.iterator, u = e.next, l, c; !(l = Cre(u, i)).done;) if (c = t(l.value), c !== void 0) return c;
  };
});
var Pi = v(function (vEe, ZD) {
  "use strict";

  var YD = Z(),
    Rre = Ha(),
    XD = Or(),
    Nre = XD.Set,
    kD = XD.proto,
    wre = YD(kD.forEach),
    QD = YD(kD.keys),
    Mre = QD(new Nre()).next;
  ZD.exports = function (e, t, a) {
    return a ? Rre({
      iterator: QD(e),
      next: Mre
    }, t) : wre(e, t);
  };
});
var E0 = v(function (hEe, JD) {
  "use strict";

  var Dre = W(),
    Bre = jn();
  JD.exports = !Dre(function () {
    var e = new Error("a");
    return "stack" in e ? (Object.defineProperty(e, "stack", Bre(1, 7)), e.stack !== 7) : !0;
  });
});
var sB = v(function () {
  "use strict";

  var Ire = Ve(),
    Pre = P(),
    Tt = ae(),
    Sl = Ut(),
    Tl = Z(),
    C0 = W(),
    Ure = Po(),
    iu = Ce(),
    zre = Us(),
    Lre = Hn(),
    jp = Te(),
    jre = Os(),
    Hre = Vr(),
    eB = Le(),
    zp = Ci(),
    Fre = st(),
    Gre = Cf(),
    T0 = Ar(),
    Pp = an(),
    Kre = x0(),
    Vre = Bi(),
    Hp = bl(),
    R0 = Or(),
    Yre = Pi(),
    WD = Cg(),
    Xre = E0(),
    N0 = Vf(),
    xl = Tt.Object,
    kre = Tt.Array,
    tB = Tt.Date,
    rB = Tt.Error,
    Qre = Tt.TypeError,
    Zre = Tt.PerformanceMark,
    zi = Sl("DOMException"),
    A0 = Hp.Map,
    w0 = Hp.has,
    nB = Hp.get,
    Lp = Hp.set,
    aB = R0.Set,
    iB = R0.add,
    Jre = R0.has,
    Wre = Sl("Object", "keys"),
    $re = Tl([].push),
    ene = Tl((!0).valueOf),
    tne = Tl(1.1.valueOf),
    rne = Tl("".valueOf),
    nne = Tl(tB.prototype.getTime),
    O0 = Ure("structuredClone"),
    El = "DataCloneError",
    Up = "Transferring",
    oB = function oB(e) {
      return !C0(function () {
        var t = new Tt.Set([7]),
          a = e(t),
          i = e(xl(7));
        return a === t || !a.has(7) || !jp(i) || +i != 7;
      }) && e;
    },
    $D = function $D(e, t) {
      return !C0(function () {
        var a = new t(),
          i = e({
            a: a,
            b: a
          });
        return !(i && i.a === i.b && i.a instanceof t && i.a.stack === a.stack);
      });
    },
    ane = function ane(e) {
      return !C0(function () {
        var t = e(new Tt.AggregateError([1], O0, {
          cause: 3
        }));
        return t.name !== "AggregateError" || t.errors[0] !== 1 || t.message !== O0 || t.cause !== 3;
      });
    },
    Ui = Tt.structuredClone,
    ine = Ire || !$D(Ui, rB) || !$D(Ui, zi) || !ane(Ui),
    one = !Ui && oB(function (e) {
      return new Zre(O0, {
        detail: e
      }).detail;
    }),
    Fa = oB(Ui) || one,
    q0 = function q0(e) {
      throw new zi("Uncloneable type: " + e, El);
    },
    Wt = function Wt(e, t) {
      throw new zi((t || "Cloning") + " of " + e + " cannot be properly polyfilled in this engine", El);
    },
    _0 = function _0(e, t) {
      return Fa || Wt(t), Fa(e);
    },
    une = function une() {
      var e;
      try {
        e = new Tt.DataTransfer();
      } catch (_unused29) {
        try {
          e = new Tt.ClipboardEvent("").clipboardData;
        } catch (_unused30) {}
      }
      return e && e.items && e.files ? e : null;
    },
    uB = function uB(e, t, a) {
      if (w0(t, e)) return nB(t, e);
      var i = a || zp(e),
        u,
        l,
        c,
        d,
        m,
        h;
      if (i === "SharedArrayBuffer") Fa ? u = Fa(e) : u = e;else {
        var g = Tt.DataView;
        !g && !iu(e.slice) && Wt("ArrayBuffer");
        try {
          if (iu(e.slice) && !e.resizable) u = e.slice(0);else for (l = e.byteLength, c = ("maxByteLength" in e) ? {
            maxByteLength: e.maxByteLength
          } : void 0, u = new ArrayBuffer(l, c), d = new g(e), m = new g(u), h = 0; h < l; h++) m.setUint8(h, d.getUint8(h));
        } catch (_unused31) {
          throw new zi("ArrayBuffer is detached", El);
        }
      }
      return Lp(t, e, u), u;
    },
    sne = function sne(e, t, a, i, u) {
      var l = Tt[t];
      return jp(l) || Wt(t), new l(uB(e.buffer, u), a, i);
    },
    _Et = function Et(e, t) {
      if (jre(e) && q0("Symbol"), !jp(e)) return e;
      if (t) {
        if (w0(t, e)) return nB(t, e);
      } else t = new A0();
      var a = zp(e),
        i,
        u,
        l,
        c,
        d,
        m,
        h,
        g;
      switch (a) {
        case "Array":
          l = kre(Pp(e));
          break;
        case "Object":
          l = {};
          break;
        case "Map":
          l = new A0();
          break;
        case "Set":
          l = new aB();
          break;
        case "RegExp":
          l = new RegExp(e.source, Vre(e));
          break;
        case "Error":
          switch (u = e.name, u) {
            case "AggregateError":
              l = new (Sl(u))([]);
              break;
            case "EvalError":
            case "RangeError":
            case "ReferenceError":
            case "SuppressedError":
            case "SyntaxError":
            case "TypeError":
            case "URIError":
              l = new (Sl(u))();
              break;
            case "CompileError":
            case "LinkError":
            case "RuntimeError":
              l = new (Sl("WebAssembly", u))();
              break;
            default:
              l = new rB();
          }
          break;
        case "DOMException":
          l = new zi(e.message, e.name);
          break;
        case "ArrayBuffer":
        case "SharedArrayBuffer":
          l = uB(e, t, a);
          break;
        case "DataView":
        case "Int8Array":
        case "Uint8Array":
        case "Uint8ClampedArray":
        case "Int16Array":
        case "Uint16Array":
        case "Int32Array":
        case "Uint32Array":
        case "Float16Array":
        case "Float32Array":
        case "Float64Array":
        case "BigInt64Array":
        case "BigUint64Array":
          m = a === "DataView" ? e.byteLength : e.length, l = sne(e, a, e.byteOffset, m, t);
          break;
        case "DOMQuad":
          try {
            l = new DOMQuad(_Et(e.p1, t), _Et(e.p2, t), _Et(e.p3, t), _Et(e.p4, t));
          } catch (_unused32) {
            l = _0(e, a);
          }
          break;
        case "File":
          if (Fa) try {
            l = Fa(e), zp(l) !== a && (l = void 0);
          } catch (_unused33) {}
          if (!l) try {
            l = new File([e], e.name, e);
          } catch (_unused34) {}
          l || Wt(a);
          break;
        case "FileList":
          if (c = une(), c) {
            for (d = 0, m = Pp(e); d < m; d++) c.items.add(_Et(e[d], t));
            l = c.files;
          } else l = _0(e, a);
          break;
        case "ImageData":
          try {
            l = new ImageData(_Et(e.data, t), e.width, e.height, {
              colorSpace: e.colorSpace
            });
          } catch (_unused35) {
            l = _0(e, a);
          }
          break;
        default:
          if (Fa) l = Fa(e);else switch (a) {
            case "BigInt":
              l = xl(e.valueOf());
              break;
            case "Boolean":
              l = xl(ene(e));
              break;
            case "Number":
              l = xl(tne(e));
              break;
            case "String":
              l = xl(rne(e));
              break;
            case "Date":
              l = new tB(nne(e));
              break;
            case "Blob":
              try {
                l = e.slice(0, e.size, e.type);
              } catch (_unused36) {
                Wt(a);
              }
              break;
            case "DOMPoint":
            case "DOMPointReadOnly":
              i = Tt[a];
              try {
                l = i.fromPoint ? i.fromPoint(e) : new i(e.x, e.y, e.z, e.w);
              } catch (_unused37) {
                Wt(a);
              }
              break;
            case "DOMRect":
            case "DOMRectReadOnly":
              i = Tt[a];
              try {
                l = i.fromRect ? i.fromRect(e) : new i(e.x, e.y, e.width, e.height);
              } catch (_unused38) {
                Wt(a);
              }
              break;
            case "DOMMatrix":
            case "DOMMatrixReadOnly":
              i = Tt[a];
              try {
                l = i.fromMatrix ? i.fromMatrix(e) : new i(e);
              } catch (_unused39) {
                Wt(a);
              }
              break;
            case "AudioData":
            case "VideoFrame":
              iu(e.clone) || Wt(a);
              try {
                l = e.clone();
              } catch (_unused40) {
                q0(a);
              }
              break;
            case "CropTarget":
            case "CryptoKey":
            case "FileSystemDirectoryHandle":
            case "FileSystemFileHandle":
            case "FileSystemHandle":
            case "GPUCompilationInfo":
            case "GPUCompilationMessage":
            case "ImageBitmap":
            case "RTCCertificate":
            case "WebAssembly.Module":
              Wt(a);
            default:
              q0(a);
          }
      }
      switch (Lp(t, e, l), a) {
        case "Array":
        case "Object":
          for (h = Wre(e), d = 0, m = Pp(h); d < m; d++) g = h[d], Gre(l, g, _Et(e[g], t));
          break;
        case "Map":
          e.forEach(function (b, x) {
            Lp(l, _Et(x, t), _Et(b, t));
          });
          break;
        case "Set":
          e.forEach(function (b) {
            iB(l, _Et(b, t));
          });
          break;
        case "Error":
          T0(l, "message", _Et(e.message, t)), Fre(e, "cause") && T0(l, "cause", _Et(e.cause, t)), u === "AggregateError" ? l.errors = _Et(e.errors, t) : u === "SuppressedError" && (l.error = _Et(e.error, t), l.suppressed = _Et(e.suppressed, t));
        case "DOMException":
          Xre && T0(l, "stack", _Et(e.stack, t));
      }
      return l;
    },
    lne = function lne(e, t) {
      if (!jp(e)) throw new Qre("Transfer option cannot be converted to a sequence");
      var a = [];
      Hre(e, function (x) {
        $re(a, eB(x));
      });
      for (var i = 0, u = Pp(a), l = new aB(), c, d, m, h, g, b; i < u;) {
        if (c = a[i++], d = zp(c), h = void 0, d === "ArrayBuffer" ? Jre(l, c) : w0(t, c)) throw new zi("Duplicate transferable", El);
        if (d === "ArrayBuffer") {
          iB(l, c);
          continue;
        }
        if (N0) h = Ui(c, {
          transfer: [c]
        });else switch (d) {
          case "ImageBitmap":
            m = Tt.OffscreenCanvas, zre(m) || Wt(d, Up);
            try {
              g = new m(c.width, c.height), b = g.getContext("bitmaprenderer"), b.transferFromImageBitmap(c), h = g.transferToImageBitmap();
            } catch (_unused41) {}
            break;
          case "AudioData":
          case "VideoFrame":
            (!iu(c.clone) || !iu(c.close)) && Wt(d, Up);
            try {
              h = c.clone(), c.close();
            } catch (_unused42) {}
            break;
          case "MediaSourceHandle":
          case "MessagePort":
          case "MIDIAccess":
          case "OffscreenCanvas":
          case "ReadableStream":
          case "RTCDataChannel":
          case "TransformStream":
          case "WebTransportReceiveStream":
          case "WebTransportSendStream":
          case "WritableStream":
            Wt(d, Up);
        }
        if (h === void 0) throw new zi("This object cannot be transferred: " + d, El);
        Lp(t, c, h);
      }
      return l;
    },
    cne = function cne(e) {
      Yre(e, function (t) {
        N0 ? Ui(t, {
          transfer: [t]
        }) : iu(t.transfer) ? t.transfer() : WD ? WD(t) : Wt("ArrayBuffer", Up);
      });
    };
  Pre({
    global: !0,
    enumerable: !0,
    sham: !N0,
    forced: ine
  }, {
    structuredClone: function structuredClone(t) {
      var a = Kre(arguments.length, 1) > 1 && !Lre(arguments[1]) ? eB(arguments[1]) : void 0,
        i = a ? a.transfer : void 0,
        u,
        l;
      i !== void 0 && (u = new A0(), l = lne(i, u));
      var c = _Et(t, u);
      return l && cne(l), c;
    }
  });
});
var cB = v(function (bEe, lB) {
  "use strict";

  UM();
  ja();
  KM();
  Xn();
  $y();
  e0();
  MD();
  LD();
  HD();
  sB();
  var fne = lt();
  lB.exports = fne.structuredClone;
});
var dB = v(function () {
  "use strict";

  var pne = P(),
    ql = Z(),
    dne = Ne(),
    mne = ql("".charAt),
    vne = ql("".charCodeAt),
    hne = ql(/./.exec),
    gne = ql(1.1.toString),
    fB = ql("".toUpperCase),
    yne = /[\w*+\-./@]/,
    pB = function pB(e, t) {
      for (var a = gne(e, 16); a.length < t;) a = "0" + a;
      return a;
    };
  pne({
    global: !0
  }, {
    escape: function escape(t) {
      for (var a = dne(t), i = "", u = a.length, l = 0, c, d; l < u;) c = mne(a, l++), hne(yne, c) ? i += c : (d = vne(c, 0), d < 256 ? i += "%" + fB(pB(d, 2)) : i += "%u" + fB(pB(d, 4)));
      return i;
    }
  });
});
var vB = v(function (EEe, mB) {
  "use strict";

  dB();
  var bne = lt();
  mB.exports = bne.escape;
});
var gB = v(function (TEe, hB) {
  "use strict";

  var xne = vB();
  hB.exports = xne;
});
var EB = v(function () {
  "use strict";

  var Sne = P(),
    M0 = Z(),
    Ene = Ne(),
    yB = String.fromCharCode,
    bB = M0("".charAt),
    xB = M0(/./.exec),
    SB = M0("".slice),
    Tne = /^[\da-f]{2}$/i,
    qne = /^[\da-f]{4}$/i;
  Sne({
    global: !0
  }, {
    unescape: function unescape(t) {
      for (var a = Ene(t), i = "", u = a.length, l = 0, c, d; l < u;) {
        if (c = bB(a, l++), c === "%") {
          if (bB(a, l) === "u") {
            if (d = SB(a, l + 1, l + 5), xB(qne, d)) {
              i += yB(parseInt(d, 16)), l += 5;
              continue;
            }
          } else if (d = SB(a, l, l + 2), xB(Tne, d)) {
            i += yB(parseInt(d, 16)), l += 2;
            continue;
          }
        }
        i += c;
      }
      return i;
    }
  });
});
var qB = v(function (AEe, TB) {
  "use strict";

  EB();
  var _ne = lt();
  TB.exports = _ne.unescape;
});
var AB = v(function (OEe, _B) {
  "use strict";

  var Ane = qB();
  _B.exports = Ane;
});
var CB = v(function (CEe, OB) {
  "use strict";

  var One = Te(),
    Cne = Ar();
  OB.exports = function (e, t) {
    One(t) && "cause" in t && Cne(e, "cause", t.cause);
  };
});
var wB = v(function (REe, NB) {
  "use strict";

  var Rne = Ar(),
    Nne = Ap(),
    wne = E0(),
    RB = Error.captureStackTrace;
  NB.exports = function (e, t, a, i) {
    wne && (RB ? RB(e, t) : Rne(e, "stack", Nne(a, i)));
  };
});
var DB = v(function () {
  "use strict";

  var Mne = P(),
    Dne = Ra(),
    Bne = Ni(),
    Fp = wi(),
    Ine = qf(),
    MB = Ma(),
    D0 = Ar(),
    B0 = jn(),
    Pne = CB(),
    Une = wB(),
    zne = Vr(),
    Lne = sl(),
    jne = ze(),
    Hne = jne("toStringTag"),
    Gp = Error,
    Fne = [].push,
    _ou = function ou(t, a) {
      var i = Dne(I0, this),
        u;
      Fp ? u = Fp(new Gp(), i ? Bne(this) : I0) : (u = i ? this : MB(I0), D0(u, Hne, "Error")), a !== void 0 && D0(u, "message", Lne(a)), Une(u, _ou, u.stack, 1), arguments.length > 2 && Pne(u, arguments[2]);
      var l = [];
      return zne(t, Fne, {
        that: l
      }), D0(u, "errors", l), u;
    };
  Fp ? Fp(_ou, Gp) : Ine(_ou, Gp, {
    name: !0
  });
  var I0 = _ou.prototype = MB(Gp.prototype, {
    constructor: B0(1, _ou),
    message: B0(1, ""),
    name: B0(1, "AggregateError")
  });
  Mne({
    global: !0,
    constructor: !0,
    arity: 2
  }, {
    AggregateError: _ou
  });
});
var BB = v(function () {
  "use strict";

  DB();
});
var P0 = v(function (BEe, PB) {
  "use strict";

  var IB = Ai();
  PB.exports = /ipad|iphone|ipod/i.test(IB) && /applewebkit/i.test(IB);
});
var V0 = v(function (IEe, VB) {
  "use strict";

  var gr = ae(),
    Gne = gp(),
    Kne = Na(),
    UB = Ce(),
    Vne = st(),
    KB = W(),
    zB = Kh(),
    Yne = Fs(),
    LB = Cs(),
    Xne = x0(),
    kne = P0(),
    Qne = ks(),
    F0 = gr.setImmediate,
    G0 = gr.clearImmediate,
    Zne = gr.process,
    U0 = gr.Dispatch,
    Jne = gr.Function,
    jB = gr.MessageChannel,
    Wne = gr.String,
    z0 = 0,
    _l = {},
    HB = "onreadystatechange",
    Al,
    Li,
    L0,
    j0;
  KB(function () {
    Al = gr.location;
  });
  var K0 = function K0(e) {
      if (Vne(_l, e)) {
        var t = _l[e];
        delete _l[e], t();
      }
    },
    H0 = function H0(e) {
      return function () {
        K0(e);
      };
    },
    FB = function FB(e) {
      K0(e.data);
    },
    GB = function GB(e) {
      gr.postMessage(Wne(e), Al.protocol + "//" + Al.host);
    };
  (!F0 || !G0) && (F0 = function F0(t) {
    Xne(arguments.length, 1);
    var a = UB(t) ? t : Jne(t),
      i = Yne(arguments, 1);
    return _l[++z0] = function () {
      Gne(a, void 0, i);
    }, Li(z0), z0;
  }, G0 = function G0(t) {
    delete _l[t];
  }, Qne ? Li = function Li(e) {
    Zne.nextTick(H0(e));
  } : U0 && U0.now ? Li = function Li(e) {
    U0.now(H0(e));
  } : jB && !kne ? (L0 = new jB(), j0 = L0.port2, L0.port1.onmessage = FB, Li = Kne(j0.postMessage, j0)) : gr.addEventListener && UB(gr.postMessage) && !gr.importScripts && Al && Al.protocol !== "file:" && !KB(GB) ? (Li = GB, gr.addEventListener("message", FB, !1)) : HB in LB("script") ? Li = function Li(e) {
    zB.appendChild(LB("script"))[HB] = function () {
      zB.removeChild(this), K0(e);
    };
  } : Li = function Li(e) {
    setTimeout(H0(e), 0);
  });
  VB.exports = {
    set: F0,
    clear: G0
  };
});
var kB = v(function (PEe, XB) {
  "use strict";

  var YB = ae(),
    $ne = De(),
    eae = Object.getOwnPropertyDescriptor;
  XB.exports = function (e) {
    if (!$ne) return YB[e];
    var t = eae(YB, e);
    return t && t.value;
  };
});
var Y0 = v(function (UEe, ZB) {
  "use strict";

  var QB = function QB() {
    this.head = null, this.tail = null;
  };
  QB.prototype = {
    add: function add(e) {
      var t = {
          item: e,
          next: null
        },
        a = this.tail;
      a ? a.next = t : this.head = t, this.tail = t;
    },
    get: function get() {
      var e = this.head;
      if (e) {
        var t = this.head = e.next;
        return t === null && (this.tail = null), e.item;
      }
    }
  };
  ZB.exports = QB;
});
var WB = v(function (zEe, JB) {
  "use strict";

  var tae = Ai();
  JB.exports = /ipad|iphone|ipod/i.test(tae) && (typeof Pebble === "undefined" ? "undefined" : _typeof(Pebble)) < "u";
});
var e3 = v(function (LEe, $B) {
  "use strict";

  var rae = Ai();
  $B.exports = /web0s(?!.*chrome)/i.test(rae);
});
var u3 = v(function (jEe, o3) {
  "use strict";

  var su = ae(),
    nae = kB(),
    t3 = Na(),
    X0 = V0().set,
    aae = Y0(),
    iae = P0(),
    oae = WB(),
    uae = e3(),
    k0 = ks(),
    r3 = su.MutationObserver || su.WebKitMutationObserver,
    n3 = su.document,
    a3 = su.process,
    Kp = su.Promise,
    J0 = nae("queueMicrotask"),
    uu,
    Q0,
    Z0,
    Vp,
    i3;
  J0 || (Ol = new aae(), Cl = function Cl() {
    var e, t;
    for (k0 && (e = a3.domain) && e.exit(); t = Ol.get();) try {
      t();
    } catch (a) {
      throw Ol.head && uu(), a;
    }
    e && e.enter();
  }, !iae && !k0 && !uae && r3 && n3 ? (Q0 = !0, Z0 = n3.createTextNode(""), new r3(Cl).observe(Z0, {
    characterData: !0
  }), uu = function uu() {
    Z0.data = Q0 = !Q0;
  }) : !oae && Kp && Kp.resolve ? (Vp = Kp.resolve(void 0), Vp.constructor = Kp, i3 = t3(Vp.then, Vp), uu = function uu() {
    i3(Cl);
  }) : k0 ? uu = function uu() {
    a3.nextTick(Cl);
  } : (X0 = t3(X0, su), uu = function uu() {
    X0(Cl);
  }), J0 = function J0(e) {
    Ol.head || uu(), Ol.add(e);
  });
  var Ol, Cl;
  o3.exports = J0;
});
var l3 = v(function (HEe, s3) {
  "use strict";

  s3.exports = function (e, t) {
    try {
      arguments.length === 1 ? console.error(e) : console.error(e, t);
    } catch (_unused43) {}
  };
});
var ji = v(function (FEe, c3) {
  "use strict";

  c3.exports = function (e) {
    try {
      return {
        error: !1,
        value: e()
      };
    } catch (t) {
      return {
        error: !0,
        value: t
      };
    }
  };
});
var Hi = v(function (GEe, f3) {
  "use strict";

  var sae = ae();
  f3.exports = sae.Promise;
});
var lu = v(function (KEe, v3) {
  "use strict";

  var lae = ae(),
    Rl = Hi(),
    cae = Ce(),
    fae = Is(),
    pae = gf(),
    dae = ze(),
    p3 = Kf(),
    mae = Ve(),
    W0 = pf(),
    d3 = Rl && Rl.prototype,
    vae = dae("species"),
    $0 = !1,
    m3 = cae(lae.PromiseRejectionEvent),
    hae = fae("Promise", function () {
      var e = pae(Rl),
        t = e !== String(Rl);
      if (!t && W0 === 66 || mae && !(d3.catch && d3.finally)) return !0;
      if (!W0 || W0 < 51 || !/native code/.test(e)) {
        var a = new Rl(function (l) {
            l(1);
          }),
          i = function i(l) {
            l(function () {}, function () {});
          },
          u = a.constructor = {};
        if (u[vae] = i, $0 = a.then(function () {}) instanceof i, !$0) return !0;
      }
      return !t && (p3 === "BROWSER" || p3 === "DENO") && !m3;
    });
  v3.exports = {
    CONSTRUCTOR: hae,
    REJECTION_EVENT: m3,
    SUBCLASSING: $0
  };
});
var ln = v(function (VEe, g3) {
  "use strict";

  var h3 = Dt(),
    gae = TypeError,
    yae = function yae(e) {
      var t, a;
      this.promise = new e(function (i, u) {
        if (t !== void 0 || a !== void 0) throw new gae("Bad Promise constructor");
        t = i, a = u;
      }), this.resolve = h3(t), this.reject = h3(a);
    };
  g3.exports.f = function (e) {
    return new yae(e);
  };
});
var U3 = v(function () {
  "use strict";

  var bae = P(),
    xae = Ve(),
    Qp = ks(),
    Ga = ae(),
    Sae = lt(),
    du = Oe(),
    y3 = zt(),
    b3 = wi(),
    Eae = Ia(),
    Tae = zf(),
    qae = Dt(),
    kp = Ce(),
    _ae = Te(),
    Aae = Ba(),
    Oae = ol(),
    q3 = V0().set,
    ab = u3(),
    Cae = l3(),
    Rae = ji(),
    Nae = Y0(),
    _3 = vr(),
    Zp = Hi(),
    ib = lu(),
    A3 = ln(),
    Jp = "Promise",
    O3 = ib.CONSTRUCTOR,
    wae = ib.REJECTION_EVENT,
    Mae = ib.SUBCLASSING,
    eb = _3.getterFor(Jp),
    Dae = _3.set,
    cu = Zp && Zp.prototype,
    Fi = Zp,
    Yp = cu,
    C3 = Ga.TypeError,
    tb = Ga.document,
    ob = Ga.process,
    rb = A3.f,
    Bae = rb,
    Iae = !!(tb && tb.createEvent && Ga.dispatchEvent),
    R3 = "unhandledrejection",
    Pae = "rejectionhandled",
    x3 = 0,
    N3 = 1,
    Uae = 2,
    ub = 1,
    w3 = 2,
    Xp,
    S3,
    M3,
    E3,
    D3 = function D3(e) {
      var t;
      return _ae(e) && kp(t = e.then) ? t : !1;
    },
    B3 = function B3(e, t) {
      var a = t.value,
        i = t.state === N3,
        u = i ? e.ok : e.fail,
        l = e.resolve,
        c = e.reject,
        d = e.domain,
        m,
        h,
        g;
      try {
        u ? (i || (t.rejection === w3 && Lae(t), t.rejection = ub), u === !0 ? m = a : (d && d.enter(), m = u(a), d && (d.exit(), g = !0)), m === e.promise ? c(new C3("Promise-chain cycle")) : (h = D3(m)) ? du(h, m, l, c) : l(m)) : c(a);
      } catch (b) {
        d && !g && d.exit(), c(b);
      }
    },
    I3 = function I3(e, t) {
      e.notified || (e.notified = !0, ab(function () {
        for (var a = e.reactions, i; i = a.get();) B3(i, e);
        e.notified = !1, t && !e.rejection && zae(e);
      }));
    },
    P3 = function P3(e, t, a) {
      var i, u;
      Iae ? (i = tb.createEvent("Event"), i.promise = t, i.reason = a, i.initEvent(e, !1, !0), Ga.dispatchEvent(i)) : i = {
        promise: t,
        reason: a
      }, !wae && (u = Ga["on" + e]) ? u(i) : e === R3 && Cae("Unhandled promise rejection", a);
    },
    zae = function zae(e) {
      du(q3, Ga, function () {
        var t = e.facade,
          a = e.value,
          i = T3(e),
          u;
        if (i && (u = Rae(function () {
          Qp ? ob.emit("unhandledRejection", a, t) : P3(R3, t, a);
        }), e.rejection = Qp || T3(e) ? w3 : ub, u.error)) throw u.value;
      });
    },
    T3 = function T3(e) {
      return e.rejection !== ub && !e.parent;
    },
    Lae = function Lae(e) {
      du(q3, Ga, function () {
        var t = e.facade;
        Qp ? ob.emit("rejectionHandled", t) : P3(Pae, t, e.value);
      });
    },
    fu = function fu(e, t, a) {
      return function (i) {
        e(t, i, a);
      };
    },
    pu = function pu(e, t, a) {
      e.done || (e.done = !0, a && (e = a), e.value = t, e.state = Uae, I3(e, !0));
    },
    _nb = function nb(e, t, a) {
      if (!e.done) {
        e.done = !0, a && (e = a);
        try {
          if (e.facade === t) throw new C3("Promise can't be resolved itself");
          var i = D3(t);
          i ? ab(function () {
            var u = {
              done: !1
            };
            try {
              du(i, t, fu(_nb, u, e), fu(pu, u, e));
            } catch (l) {
              pu(u, l, e);
            }
          }) : (e.value = t, e.state = N3, I3(e, !1));
        } catch (u) {
          pu({
            done: !1
          }, u, e);
        }
      }
    };
  if (O3 && (Fi = function Fi(t) {
    Aae(this, Yp), qae(t), du(Xp, this);
    var a = eb(this);
    try {
      t(fu(_nb, a), fu(pu, a));
    } catch (i) {
      pu(a, i);
    }
  }, Yp = Fi.prototype, Xp = function Xp(t) {
    Dae(this, {
      type: Jp,
      done: !1,
      notified: !1,
      parent: !1,
      reactions: new Nae(),
      rejection: !1,
      state: x3,
      value: null
    });
  }, Xp.prototype = y3(Yp, "then", function (t, a) {
    var i = eb(this),
      u = rb(Oae(this, Fi));
    return i.parent = !0, u.ok = kp(t) ? t : !0, u.fail = kp(a) && a, u.domain = Qp ? ob.domain : void 0, i.state === x3 ? i.reactions.add(u) : ab(function () {
      B3(u, i);
    }), u.promise;
  }), S3 = function S3() {
    var e = new Xp(),
      t = eb(e);
    this.promise = e, this.resolve = fu(_nb, t), this.reject = fu(pu, t);
  }, A3.f = rb = function rb(e) {
    return e === Fi || e === M3 ? new S3(e) : Bae(e);
  }, !xae && kp(Zp) && cu !== Object.prototype)) {
    E3 = cu.then, Mae || y3(cu, "then", function (t, a) {
      var i = this;
      return new Fi(function (u, l) {
        du(E3, i, u, l);
      }).then(t, a);
    }, {
      unsafe: !0
    });
    try {
      delete cu.constructor;
    } catch (_unused44) {}
    b3 && b3(cu, Yp);
  }
  bae({
    global: !0,
    constructor: !0,
    wrap: !0,
    forced: O3
  }, {
    Promise: Fi
  });
  M3 = Sae.Promise;
  Eae(Fi, Jp, !1, !0);
  Tae(Jp);
});
var Nl = v(function (kEe, z3) {
  "use strict";

  var jae = Hi(),
    Hae = $f(),
    Fae = lu().CONSTRUCTOR;
  z3.exports = Fae || !Hae(function (e) {
    jae.all(e).then(void 0, function () {});
  });
});
var L3 = v(function () {
  "use strict";

  var Gae = P(),
    Kae = Oe(),
    Vae = Dt(),
    Yae = ln(),
    Xae = ji(),
    kae = Vr(),
    Qae = Nl();
  Gae({
    target: "Promise",
    stat: !0,
    forced: Qae
  }, {
    all: function all(t) {
      var a = this,
        i = Yae.f(a),
        u = i.resolve,
        l = i.reject,
        c = Xae(function () {
          var d = Vae(a.resolve),
            m = [],
            h = 0,
            g = 1;
          kae(t, function (b) {
            var x = h++,
              S = !1;
            g++, Kae(d, a, b).then(function (O) {
              S || (S = !0, m[x] = O, --g || u(m));
            }, l);
          }), --g || u(m);
        });
      return c.error && l(c.value), i.promise;
    }
  });
});
var H3 = v(function () {
  "use strict";

  var Zae = P(),
    Jae = Ve(),
    Wae = lu().CONSTRUCTOR,
    lb = Hi(),
    $ae = Ut(),
    eie = Ce(),
    tie = zt(),
    j3 = lb && lb.prototype;
  Zae({
    target: "Promise",
    proto: !0,
    forced: Wae,
    real: !0
  }, {
    catch: function _catch(e) {
      return this.then(void 0, e);
    }
  });
  !Jae && eie(lb) && (sb = $ae("Promise").prototype.catch, j3.catch !== sb && tie(j3, "catch", sb, {
    unsafe: !0
  }));
  var sb;
});
var F3 = v(function () {
  "use strict";

  var rie = P(),
    nie = Oe(),
    aie = Dt(),
    iie = ln(),
    oie = ji(),
    uie = Vr(),
    sie = Nl();
  rie({
    target: "Promise",
    stat: !0,
    forced: sie
  }, {
    race: function race(t) {
      var a = this,
        i = iie.f(a),
        u = i.reject,
        l = oie(function () {
          var c = aie(a.resolve);
          uie(t, function (d) {
            nie(c, a, d).then(i.resolve, u);
          });
        });
      return l.error && u(l.value), i.promise;
    }
  });
});
var G3 = v(function () {
  "use strict";

  var lie = P(),
    cie = ln(),
    fie = lu().CONSTRUCTOR;
  lie({
    target: "Promise",
    stat: !0,
    forced: fie
  }, {
    reject: function reject(t) {
      var a = cie.f(this),
        i = a.reject;
      return i(t), a.promise;
    }
  });
});
var cb = v(function (n1e, K3) {
  "use strict";

  var pie = Le(),
    die = Te(),
    mie = ln();
  K3.exports = function (e, t) {
    if (pie(e), die(t) && t.constructor === e) return t;
    var a = mie.f(e),
      i = a.resolve;
    return i(t), a.promise;
  };
});
var X3 = v(function () {
  "use strict";

  var vie = P(),
    hie = Ut(),
    V3 = Ve(),
    gie = Hi(),
    Y3 = lu().CONSTRUCTOR,
    yie = cb(),
    bie = hie("Promise"),
    xie = V3 && !Y3;
  vie({
    target: "Promise",
    stat: !0,
    forced: V3 || Y3
  }, {
    resolve: function resolve(t) {
      return yie(xie && this === bie ? gie : this, t);
    }
  });
});
var k3 = v(function () {
  "use strict";

  U3();
  L3();
  H3();
  F3();
  G3();
  X3();
});
var Q3 = v(function () {
  "use strict";

  var Sie = P(),
    Eie = Oe(),
    Tie = Dt(),
    qie = ln(),
    _ie = ji(),
    Aie = Vr(),
    Oie = Nl();
  Sie({
    target: "Promise",
    stat: !0,
    forced: Oie
  }, {
    allSettled: function allSettled(t) {
      var a = this,
        i = qie.f(a),
        u = i.resolve,
        l = i.reject,
        c = _ie(function () {
          var d = Tie(a.resolve),
            m = [],
            h = 0,
            g = 1;
          Aie(t, function (b) {
            var x = h++,
              S = !1;
            g++, Eie(d, a, b).then(function (O) {
              S || (S = !0, m[x] = {
                status: "fulfilled",
                value: O
              }, --g || u(m));
            }, function (O) {
              S || (S = !0, m[x] = {
                status: "rejected",
                reason: O
              }, --g || u(m));
            });
          }), --g || u(m);
        });
      return c.error && l(c.value), i.promise;
    }
  });
});
var J3 = v(function () {
  "use strict";

  var Cie = P(),
    Rie = Oe(),
    Nie = Dt(),
    wie = Ut(),
    Mie = ln(),
    Die = ji(),
    Bie = Vr(),
    Iie = Nl(),
    Z3 = "No one promise resolved";
  Cie({
    target: "Promise",
    stat: !0,
    forced: Iie
  }, {
    any: function any(t) {
      var a = this,
        i = wie("AggregateError"),
        u = Mie.f(a),
        l = u.resolve,
        c = u.reject,
        d = Die(function () {
          var m = Nie(a.resolve),
            h = [],
            g = 0,
            b = 1,
            x = !1;
          Bie(t, function (S) {
            var O = g++,
              C = !1;
            b++, Rie(m, a, S).then(function (_) {
              C || x || (x = !0, l(_));
            }, function (_) {
              C || x || (C = !0, h[O] = _, --b || c(new i(h, Z3)));
            });
          }), --b || c(new i(h, Z3));
        });
      return d.error && c(d.value), u.promise;
    }
  });
});
var eI = v(function () {
  "use strict";

  var Pie = P(),
    Uie = ae(),
    zie = gp(),
    Lie = Fs(),
    jie = ln(),
    Hie = Dt(),
    $3 = ji(),
    fb = Uie.Promise,
    W3 = !1,
    Fie = !fb || !fb.try || $3(function () {
      fb.try(function (e) {
        W3 = e === 8;
      }, 8);
    }).error || !W3;
  Pie({
    target: "Promise",
    stat: !0,
    forced: Fie
  }, {
    try: function _try(e) {
      var t = arguments.length > 1 ? Lie(arguments, 1) : [],
        a = jie.f(this),
        i = $3(function () {
          return zie(Hie(e), void 0, t);
        });
      return (i.error ? a.reject : a.resolve)(i.value), a.promise;
    }
  });
});
var tI = v(function () {
  "use strict";

  var Gie = P(),
    Kie = ln();
  Gie({
    target: "Promise",
    stat: !0
  }, {
    withResolvers: function withResolvers() {
      var t = Kie.f(this);
      return {
        promise: t.promise,
        resolve: t.resolve,
        reject: t.reject
      };
    }
  });
});
var iI = v(function () {
  "use strict";

  var Vie = P(),
    Yie = Ve(),
    Wp = Hi(),
    Xie = W(),
    nI = Ut(),
    aI = Ce(),
    kie = ol(),
    rI = cb(),
    Qie = zt(),
    db = Wp && Wp.prototype,
    Zie = !!Wp && Xie(function () {
      db.finally.call({
        then: function then() {}
      }, function () {});
    });
  Vie({
    target: "Promise",
    proto: !0,
    real: !0,
    forced: Zie
  }, {
    finally: function _finally(e) {
      var t = kie(this, nI("Promise")),
        a = aI(e);
      return this.then(a ? function (i) {
        return rI(t, e()).then(function () {
          return i;
        });
      } : e, a ? function (i) {
        return rI(t, e()).then(function () {
          throw i;
        });
      } : e);
    }
  });
  !Yie && aI(Wp) && (pb = nI("Promise").prototype.finally, db.finally !== pb && Qie(db, "finally", pb, {
    unsafe: !0
  }));
  var pb;
});
var uI = v(function (y1e, oI) {
  "use strict";

  BB();
  ja();
  Xn();
  k3();
  Q3();
  J3();
  eI();
  tI();
  iI();
  Yo();
  var Jie = lt();
  oI.exports = Jie.Promise;
});
var lI = v(function (b1e, sI) {
  "use strict";

  sI.exports = {
    CSSRuleList: 0,
    CSSStyleDeclaration: 0,
    CSSValueList: 0,
    ClientRectList: 0,
    DOMRectList: 0,
    DOMStringList: 0,
    DOMTokenList: 1,
    DataTransferItemList: 0,
    FileList: 0,
    HTMLAllCollection: 0,
    HTMLCollection: 0,
    HTMLFormElement: 0,
    HTMLSelectElement: 0,
    MediaList: 0,
    MimeTypeArray: 0,
    NamedNodeMap: 0,
    NodeList: 1,
    PaintRequestList: 0,
    Plugin: 0,
    PluginArray: 0,
    SVGLengthList: 0,
    SVGNumberList: 0,
    SVGPathSegList: 0,
    SVGPointList: 0,
    SVGStringList: 0,
    SVGTransformList: 0,
    SourceBufferList: 0,
    StyleSheetList: 0,
    TextTrackCueList: 0,
    TextTrackList: 0,
    TouchList: 0
  };
});
var pI = v(function (x1e, fI) {
  "use strict";

  var Wie = Cs(),
    mb = Wie("span").classList,
    cI = mb && mb.constructor && mb.constructor.prototype;
  fI.exports = cI === Object.prototype ? void 0 : cI;
});
var mu = v(function () {
  "use strict";

  var dI = ae(),
    vI = lI(),
    $ie = pI(),
    wl = ja(),
    mI = Ar(),
    eoe = Ia(),
    toe = ze(),
    vb = toe("iterator"),
    hb = wl.values,
    hI = function hI(e, t) {
      if (e) {
        if (e[vb] !== hb) try {
          mI(e, vb, hb);
        } catch (_unused45) {
          e[vb] = hb;
        }
        if (eoe(e, t, !0), vI[t]) {
          for (var a in wl) if (e[a] !== wl[a]) try {
            mI(e, a, wl[a]);
          } catch (_unused46) {
            e[a] = wl[a];
          }
        }
      }
    };
  for ($p in vI) hI(dI[$p] && dI[$p].prototype, $p);
  var $p;
  hI($ie, "DOMTokenList");
});
var yI = v(function (T1e, gI) {
  "use strict";

  var roe = uI();
  mu();
  gI.exports = roe;
});
var Ka = v(function (q1e, bI) {
  "use strict";

  var noe = Or().has;
  bI.exports = function (e) {
    return noe(e), e;
  };
});
var ed = v(function (_1e, SI) {
  "use strict";

  var xI = Or(),
    aoe = Pi(),
    ioe = xI.Set,
    ooe = xI.add;
  SI.exports = function (e) {
    var t = new ioe();
    return aoe(e, function (a) {
      ooe(t, a);
    }), t;
  };
});
var vu = v(function (A1e, EI) {
  "use strict";

  var uoe = Hs(),
    soe = Or();
  EI.exports = uoe(soe.proto, "size", "get") || function (e) {
    return e.size;
  };
});
var qI = v(function (O1e, TI) {
  "use strict";

  TI.exports = function (e) {
    return {
      iterator: e,
      next: e.next,
      done: !1
    };
  };
});
var Va = v(function (C1e, NI) {
  "use strict";

  var _I = Dt(),
    CI = Le(),
    AI = Oe(),
    loe = Xt(),
    coe = qI(),
    OI = "Invalid size",
    foe = RangeError,
    poe = TypeError,
    doe = Math.max,
    RI = function RI(e, t) {
      this.set = e, this.size = doe(t, 0), this.has = _I(e.has), this.keys = _I(e.keys);
    };
  RI.prototype = {
    getIterator: function getIterator() {
      return coe(CI(AI(this.keys, this.set)));
    },
    includes: function includes(e) {
      return AI(this.has, this.set, e);
    }
  };
  NI.exports = function (e) {
    CI(e);
    var t = +e.size;
    if (t !== t) throw new poe(OI);
    var a = loe(t);
    if (a < 0) throw new foe(OI);
    return new RI(e, a);
  };
});
var BI = v(function (R1e, DI) {
  "use strict";

  var moe = Ka(),
    MI = Or(),
    voe = ed(),
    hoe = vu(),
    goe = Va(),
    yoe = Pi(),
    boe = Ha(),
    xoe = MI.has,
    wI = MI.remove;
  DI.exports = function (t) {
    var a = moe(this),
      i = goe(t),
      u = voe(a);
    return hoe(u) <= i.size ? yoe(u, function (l) {
      i.includes(l) && wI(u, l);
    }) : boe(i.getIterator(), function (l) {
      xoe(u, l) && wI(u, l);
    }), u;
  };
});
var Ya = v(function (N1e, UI) {
  "use strict";

  var Soe = Ut(),
    II = function II(e) {
      return {
        size: e,
        has: function has() {
          return !1;
        },
        keys: function keys() {
          return {
            next: function next() {
              return {
                done: !0
              };
            }
          };
        }
      };
    },
    PI = function PI(e) {
      return {
        size: e,
        has: function has() {
          return !0;
        },
        keys: function keys() {
          throw new Error("e");
        }
      };
    };
  UI.exports = function (e, t) {
    var a = Soe("Set");
    try {
      new a()[e](II(0));
      try {
        return new a()[e](II(-1)), !1;
      } catch (_unused47) {
        if (!t) return !0;
        try {
          return new a()[e](PI(-1 / 0)), !1;
        } catch (_unused48) {
          var i = new a([1, 2]);
          return t(i[e](PI(1 / 0)));
        }
      }
    } catch (_unused49) {
      return !1;
    }
  };
});
var zI = v(function () {
  "use strict";

  var Eoe = P(),
    Toe = BI(),
    qoe = W(),
    _oe = Ya(),
    Aoe = !_oe("difference", function (e) {
      return e.size === 0;
    }),
    Ooe = Aoe || qoe(function () {
      var e = {
          size: 1,
          has: function has() {
            return !0;
          },
          keys: function keys() {
            var a = 0;
            return {
              next: function next() {
                var i = a++ > 1;
                return t.has(1) && t.clear(), {
                  done: i,
                  value: 2
                };
              }
            };
          }
        },
        t = new Set([1, 2, 3, 4]);
      return t.difference(e).size !== 3;
    });
  Eoe({
    target: "Set",
    proto: !0,
    real: !0,
    forced: Ooe
  }, {
    difference: Toe
  });
});
var HI = v(function (D1e, jI) {
  "use strict";

  var Coe = Ka(),
    gb = Or(),
    Roe = vu(),
    Noe = Va(),
    woe = Pi(),
    Moe = Ha(),
    Doe = gb.Set,
    LI = gb.add,
    Boe = gb.has;
  jI.exports = function (t) {
    var a = Coe(this),
      i = Noe(t),
      u = new Doe();
    return Roe(a) > i.size ? Moe(i.getIterator(), function (l) {
      Boe(a, l) && LI(u, l);
    }) : woe(a, function (l) {
      i.includes(l) && LI(u, l);
    }), u;
  };
});
var FI = v(function () {
  "use strict";

  var Ioe = P(),
    Poe = W(),
    Uoe = HI(),
    zoe = Ya(),
    Loe = !zoe("intersection", function (e) {
      return e.size === 2 && e.has(1) && e.has(2);
    }) || Poe(function () {
      return String(Array.from(new Set([1, 2, 3]).intersection(new Set([3, 2])))) !== "3,2";
    });
  Ioe({
    target: "Set",
    proto: !0,
    real: !0,
    forced: Loe
  }, {
    intersection: Uoe
  });
});
var KI = v(function (P1e, GI) {
  "use strict";

  var joe = Ka(),
    Hoe = Or().has,
    Foe = vu(),
    Goe = Va(),
    Koe = Pi(),
    Voe = Ha(),
    Yoe = Xo();
  GI.exports = function (t) {
    var a = joe(this),
      i = Goe(t);
    if (Foe(a) <= i.size) return Koe(a, function (l) {
      if (i.includes(l)) return !1;
    }, !0) !== !1;
    var u = i.getIterator();
    return Voe(u, function (l) {
      if (Hoe(a, l)) return Yoe(u.iterator, "normal", !1);
    }) !== !1;
  };
});
var VI = v(function () {
  "use strict";

  var Xoe = P(),
    koe = KI(),
    Qoe = Ya(),
    Zoe = !Qoe("isDisjointFrom", function (e) {
      return !e;
    });
  Xoe({
    target: "Set",
    proto: !0,
    real: !0,
    forced: Zoe
  }, {
    isDisjointFrom: koe
  });
});
var XI = v(function (L1e, YI) {
  "use strict";

  var Joe = Ka(),
    Woe = vu(),
    $oe = Pi(),
    eue = Va();
  YI.exports = function (t) {
    var a = Joe(this),
      i = eue(t);
    return Woe(a) > i.size ? !1 : $oe(a, function (u) {
      if (!i.includes(u)) return !1;
    }, !0) !== !1;
  };
});
var kI = v(function () {
  "use strict";

  var tue = P(),
    rue = XI(),
    nue = Ya(),
    aue = !nue("isSubsetOf", function (e) {
      return e;
    });
  tue({
    target: "Set",
    proto: !0,
    real: !0,
    forced: aue
  }, {
    isSubsetOf: rue
  });
});
var ZI = v(function (F1e, QI) {
  "use strict";

  var iue = Ka(),
    oue = Or().has,
    uue = vu(),
    sue = Va(),
    lue = Ha(),
    cue = Xo();
  QI.exports = function (t) {
    var a = iue(this),
      i = sue(t);
    if (uue(a) < i.size) return !1;
    var u = i.getIterator();
    return lue(u, function (l) {
      if (!oue(a, l)) return cue(u.iterator, "normal", !1);
    }) !== !1;
  };
});
var JI = v(function () {
  "use strict";

  var fue = P(),
    pue = ZI(),
    due = Ya(),
    mue = !due("isSupersetOf", function (e) {
      return !e;
    });
  fue({
    target: "Set",
    proto: !0,
    real: !0,
    forced: mue
  }, {
    isSupersetOf: pue
  });
});
var $I = v(function (V1e, WI) {
  "use strict";

  var vue = Ka(),
    yb = Or(),
    hue = ed(),
    gue = Va(),
    yue = Ha(),
    bue = yb.add,
    xue = yb.has,
    Sue = yb.remove;
  WI.exports = function (t) {
    var a = vue(this),
      i = gue(t).getIterator(),
      u = hue(a);
    return yue(i, function (l) {
      xue(a, l) ? Sue(u, l) : bue(u, l);
    }), u;
  };
});
var bb = v(function (Y1e, e8) {
  "use strict";

  e8.exports = function (e) {
    try {
      var t = new Set(),
        a = {
          size: 0,
          has: function has() {
            return !0;
          },
          keys: function keys() {
            return Object.defineProperty({}, "next", {
              get: function get() {
                return t.clear(), t.add(4), function () {
                  return {
                    done: !0
                  };
                };
              }
            });
          }
        },
        i = t[e](a);
      return i.size === 1 && i.values().next().value === 4;
    } catch (_unused50) {
      return !1;
    }
  };
});
var t8 = v(function () {
  "use strict";

  var Eue = P(),
    Tue = $I(),
    que = bb(),
    _ue = Ya(),
    Aue = !_ue("symmetricDifference") || !que("symmetricDifference");
  Eue({
    target: "Set",
    proto: !0,
    real: !0,
    forced: Aue
  }, {
    symmetricDifference: Tue
  });
});
var n8 = v(function (Q1e, r8) {
  "use strict";

  var Oue = Ka(),
    Cue = Or().add,
    Rue = ed(),
    Nue = Va(),
    wue = Ha();
  r8.exports = function (t) {
    var a = Oue(this),
      i = Nue(t).getIterator(),
      u = Rue(a);
    return wue(i, function (l) {
      Cue(u, l);
    }), u;
  };
});
var a8 = v(function () {
  "use strict";

  var Mue = P(),
    Due = n8(),
    Bue = bb(),
    Iue = Ya(),
    Pue = !Iue("union") || !Bue("union");
  Mue({
    target: "Set",
    proto: !0,
    real: !0,
    forced: Pue
  }, {
    union: Due
  });
});
var o8 = v(function (W1e, i8) {
  "use strict";

  ja();
  Xn();
  e0();
  zI();
  FI();
  VI();
  kI();
  JI();
  t8();
  a8();
  Yo();
  var Uue = lt();
  i8.exports = Uue.Set;
});
var s8 = v(function ($1e, u8) {
  "use strict";

  var zue = o8();
  mu();
  u8.exports = zue;
});
var f8 = v(function () {
  "use strict";

  var Lue = P(),
    jue = Z(),
    Hue = Dt(),
    Fue = Ue(),
    Gue = Vr(),
    td = bl(),
    l8 = Ve(),
    Kue = W(),
    c8 = td.Map,
    Vue = td.has,
    Yue = td.get,
    Xue = td.set,
    kue = jue([].push),
    Que = l8 || Kue(function () {
      return c8.groupBy("ab", function (e) {
        return e;
      }).get("a").length !== 1;
    });
  Lue({
    target: "Map",
    stat: !0,
    forced: l8 || Que
  }, {
    groupBy: function groupBy(t, a) {
      Fue(t), Hue(a);
      var i = new c8(),
        u = 0;
      return Gue(t, function (l) {
        var c = a(l, u++);
        Vue(i, c) ? kue(Yue(i, c), l) : Xue(i, c, [l]);
      }), i;
    }
  });
});
var p8 = v(function () {
  "use strict";

  var Zue = P(),
    xb = bl(),
    Jue = Ve(),
    Wue = xb.get,
    $ue = xb.has,
    ese = xb.set;
  Zue({
    target: "Map",
    proto: !0,
    real: !0,
    forced: Jue
  }, {
    getOrInsert: function getOrInsert(t, a) {
      return $ue(this, t) ? Wue(this, t) : (ese(this, t, a), a);
    }
  });
});
var d8 = v(function () {
  "use strict";

  var tse = P(),
    rse = Dt(),
    Sb = bl(),
    nse = Ve(),
    ase = Sb.get,
    ise = Sb.has,
    ose = Sb.set;
  tse({
    target: "Map",
    proto: !0,
    real: !0,
    forced: nse
  }, {
    getOrInsertComputed: function getOrInsertComputed(t, a) {
      var i = ise(this, t);
      if (rse(a), i) return ase(this, t);
      t === 0 && 1 / t === -1 / 0 && (t = 0);
      var u = a(t);
      return ose(this, t, u), u;
    }
  });
});
var v8 = v(function (oTe, m8) {
  "use strict";

  ja();
  $y();
  f8();
  p8();
  d8();
  Xn();
  Yo();
  var use = lt();
  m8.exports = use.Map;
});
var g8 = v(function (uTe, h8) {
  "use strict";

  var sse = v8();
  mu();
  h8.exports = sse;
});
var qb = v(function (sTe, T8) {
  "use strict";

  var lse = Z(),
    y8 = js(),
    rd = ll().getWeakData,
    cse = Ba(),
    fse = Le(),
    pse = Hn(),
    Eb = Te(),
    dse = Vr(),
    x8 = Ri(),
    b8 = st(),
    S8 = vr(),
    mse = S8.set,
    vse = S8.getterFor,
    hse = x8.find,
    gse = x8.findIndex,
    yse = lse([].splice),
    bse = 0,
    nd = function nd(e) {
      return e.frozen || (e.frozen = new E8());
    },
    E8 = function E8() {
      this.entries = [];
    },
    Tb = function Tb(e, t) {
      return hse(e.entries, function (a) {
        return a[0] === t;
      });
    };
  E8.prototype = {
    get: function get(e) {
      var t = Tb(this, e);
      if (t) return t[1];
    },
    has: function has(e) {
      return !!Tb(this, e);
    },
    set: function set(e, t) {
      var a = Tb(this, e);
      a ? a[1] = t : this.entries.push([e, t]);
    },
    delete: function _delete(e) {
      var t = gse(this.entries, function (a) {
        return a[0] === e;
      });
      return ~t && yse(this.entries, t, 1), !!~t;
    }
  };
  T8.exports = {
    getConstructor: function getConstructor(e, t, a, i) {
      var u = e(function (m, h) {
          cse(m, l), mse(m, {
            type: t,
            id: bse++,
            frozen: null
          }), pse(h) || dse(h, m[i], {
            that: m,
            AS_ENTRIES: a
          });
        }),
        l = u.prototype,
        c = vse(t),
        d = function d(m, h, g) {
          var b = c(m),
            x = rd(fse(h), !0);
          return x === !0 ? nd(b).set(h, g) : x[b.id] = g, m;
        };
      return y8(l, {
        delete: function _delete(m) {
          var h = c(this);
          if (!Eb(m)) return !1;
          var g = rd(m);
          return g === !0 ? nd(h).delete(m) : g && b8(g, h.id) && delete g[h.id];
        },
        has: function has(h) {
          var g = c(this);
          if (!Eb(h)) return !1;
          var b = rd(h);
          return b === !0 ? nd(g).has(h) : b && b8(b, g.id);
        }
      }), y8(l, a ? {
        get: function get(h) {
          var g = c(this);
          if (Eb(h)) {
            var b = rd(h);
            if (b === !0) return nd(g).get(h);
            if (b) return b[g.id];
          }
        },
        set: function set(h, g) {
          return d(this, h, g);
        }
      } : {
        add: function add(h) {
          return d(this, h, !0);
        }
      }), u;
    }
  };
});
var w8 = v(function () {
  "use strict";

  var xse = Vy(),
    q8 = ae(),
    ud = Z(),
    _8 = js(),
    Sse = ll(),
    Ese = cl(),
    A8 = qb(),
    ad = Te(),
    id = vr().enforce,
    Tse = W(),
    qse = Rh(),
    Bl = Object,
    _se = Array.isArray,
    od = Bl.isExtensible,
    O8 = Bl.isFrozen,
    Ase = Bl.isSealed,
    C8 = Bl.freeze,
    Ose = Bl.seal,
    Cse = !q8.ActiveXObject && "ActiveXObject" in q8,
    Ml,
    R8 = function R8(e) {
      return function () {
        return e(this, arguments.length ? arguments[0] : void 0);
      };
    },
    N8 = Ese("WeakMap", R8, A8),
    hu = N8.prototype,
    sd = ud(hu.set),
    Rse = function Rse() {
      return xse && Tse(function () {
        var e = C8([]);
        return sd(new N8(), e, 1), !O8(e);
      });
    };
  qse && (Cse ? (Ml = A8.getConstructor(R8, "WeakMap", !0), Sse.enable(), _b = ud(hu.delete), Dl = ud(hu.has), Ab = ud(hu.get), _8(hu, {
    delete: function _delete(e) {
      if (ad(e) && !od(e)) {
        var t = id(this);
        return t.frozen || (t.frozen = new Ml()), _b(this, e) || t.frozen.delete(e);
      }
      return _b(this, e);
    },
    has: function has(t) {
      if (ad(t) && !od(t)) {
        var a = id(this);
        return a.frozen || (a.frozen = new Ml()), Dl(this, t) || a.frozen.has(t);
      }
      return Dl(this, t);
    },
    get: function get(t) {
      if (ad(t) && !od(t)) {
        var a = id(this);
        return a.frozen || (a.frozen = new Ml()), Dl(this, t) ? Ab(this, t) : a.frozen.get(t);
      }
      return Ab(this, t);
    },
    set: function set(t, a) {
      if (ad(t) && !od(t)) {
        var i = id(this);
        i.frozen || (i.frozen = new Ml()), Dl(this, t) ? sd(this, t, a) : i.frozen.set(t, a);
      } else sd(this, t, a);
      return this;
    }
  })) : Rse() && _8(hu, {
    set: function set(t, a) {
      var i;
      return _se(t) && (O8(t) ? i = C8 : Ase(t) && (i = Ose)), sd(this, t, a), i && i(t), this;
    }
  }));
  var _b, Dl, Ab;
});
var M8 = v(function () {
  "use strict";

  w8();
});
var Il = v(function (dTe, D8) {
  "use strict";

  var ld = Z(),
    cd = WeakMap.prototype;
  D8.exports = {
    WeakMap: WeakMap,
    set: ld(cd.set),
    get: ld(cd.get),
    has: ld(cd.has),
    remove: ld(cd.delete)
  };
});
var B8 = v(function () {
  "use strict";

  var Nse = P(),
    Ob = Il(),
    wse = Ve(),
    Mse = Ob.get,
    Dse = Ob.has,
    Bse = Ob.set;
  Nse({
    target: "WeakMap",
    proto: !0,
    real: !0,
    forced: wse
  }, {
    getOrInsert: function getOrInsert(t, a) {
      return Dse(this, t) ? Mse(this, t) : (Bse(this, t, a), a);
    }
  });
});
var P8 = v(function (hTe, I8) {
  "use strict";

  var Ise = Il().has;
  I8.exports = function (e) {
    return Ise(e), e;
  };
});
var L8 = v(function (gTe, z8) {
  "use strict";

  var Cb = Il(),
    U8 = new Cb.WeakMap(),
    Pse = Cb.set,
    Use = Cb.remove;
  z8.exports = function (e) {
    return Pse(U8, e, 1), Use(U8, e), e;
  };
});
var H8 = v(function () {
  "use strict";

  var zse = P(),
    Lse = Dt(),
    jse = P8(),
    Hse = L8(),
    Rb = Il(),
    j8 = Ve(),
    Fse = Rb.get,
    Gse = Rb.has,
    Kse = Rb.set,
    Vse = j8 || !function () {
      try {
        WeakMap.prototype.getOrInsertComputed && new WeakMap().getOrInsertComputed(1, function () {
          throw 1;
        });
      } catch (e) {
        return e instanceof TypeError;
      }
    }();
  zse({
    target: "WeakMap",
    proto: !0,
    real: !0,
    forced: Vse
  }, {
    getOrInsertComputed: function getOrInsertComputed(t, a) {
      if (j8 || jse(this), Hse(t), Lse(a), Gse(this, t)) return Fse(this, t);
      var i = a(t);
      return Kse(this, t, i), i;
    }
  });
});
var G8 = v(function (xTe, F8) {
  "use strict";

  ja();
  Xn();
  M8();
  B8();
  H8();
  var Yse = lt();
  F8.exports = Yse.WeakMap;
});
var V8 = v(function (STe, K8) {
  "use strict";

  var Xse = G8();
  mu();
  K8.exports = Xse;
});
var Y8 = v(function () {
  "use strict";

  var kse = cl(),
    Qse = qb();
  kse("WeakSet", function (e) {
    return function () {
      return e(this, arguments.length ? arguments[0] : void 0);
    };
  }, Qse);
});
var X8 = v(function () {
  "use strict";

  Y8();
});
var Q8 = v(function (ATe, k8) {
  "use strict";

  ja();
  Xn();
  X8();
  var Zse = lt();
  k8.exports = Zse.WeakSet;
});
var J8 = v(function (OTe, Z8) {
  "use strict";

  var Jse = Q8();
  mu();
  Z8.exports = Jse;
});
var r4 = v(function (CTe, t4) {
  "use strict";

  var Xa = {},
    e4 = Object.create,
    Nb = Object.defineProperties,
    fd = Object.defineProperty,
    it = function it(e) {
      var t = arguments[1] === void 0 ? {} : arguments[1];
      return {
        value: e,
        configurable: !!t.c,
        writable: !!t.w,
        enumerable: !!t.e
      };
    },
    Wse = function Wse(e) {
      return e && e[ct.toStringTag] === "Symbol";
    },
    Gi = void 0;
  try {
    W8 = fd({}, "y", {
      get: function get() {
        return 1;
      }
    }), Gi = W8.y === 1;
  } catch (_unused51) {
    Gi = !1;
  }
  var W8,
    $8 = {},
    $se = function $se(e) {
      e = String(e);
      for (var t = "", a = 0; $8[e + t];) t = a += 1;
      $8[e + t] = 1;
      var i = "Symbol(" + e + t + ")";
      return Gi && fd(Object.prototype, i, {
        get: void 0,
        set: function set(u) {
          fd(this, i, it(u, {
            c: !0,
            w: !0
          }));
        },
        configurable: !0,
        enumerable: !1
      }), i;
    },
    wb = e4(null);
  function ct(e) {
    if (this instanceof ct) throw new TypeError("Symbol is not a constructor");
    e = e === void 0 ? "" : String(e);
    var t = $se(e);
    return Gi ? e4(wb, {
      __description__: it(e),
      __tag__: it(t)
    }) : t;
  }
  Nb(ct, {
    for: it(function (e) {
      var t = String(e);
      if (Xa[t]) return Xa[t];
      var a = ct(t);
      return Xa[t] = a, a;
    }),
    keyFor: it(function (e) {
      if (Gi && !Wse(e)) throw new TypeError("" + e + " is not a symbol");
      for (var t in Xa) if (Xa[t] === e) return Gi ? Xa[t].__description__ : Xa[t].substr(7, Xa[t].length - 8);
    })
  });
  Nb(ct, {
    hasInstance: it(ct("hasInstance")),
    isConcatSpreadable: it(ct("isConcatSpreadable")),
    iterator: it(ct("iterator")),
    match: it(ct("match")),
    replace: it(ct("replace")),
    search: it(ct("search")),
    species: it(ct("species")),
    split: it(ct("split")),
    toPrimitive: it(ct("toPrimitive")),
    toStringTag: it(ct("toStringTag")),
    unscopables: it(ct("unscopables"))
  });
  Nb(wb, {
    constructor: it(ct),
    toString: it(function () {
      return this.__tag__;
    }),
    valueOf: it(function () {
      return "Symbol(" + this.__description__ + ")";
    })
  });
  Gi && fd(wb, ct.toStringTag, it("Symbol", {
    c: !0
  }));
  t4.exports = typeof Symbol == "function" ? Symbol : ct;
});
var c4 = v(function (ne) {
  var ale = 1e5,
    je = function () {
      var e = Object.prototype.toString,
        t = Object.prototype.hasOwnProperty;
      return {
        Class: function Class(a) {
          return e.call(a).replace(/^\[object *|\]$/g, "");
        },
        HasProperty: function HasProperty(a, i) {
          return i in a;
        },
        HasOwnProperty: function HasOwnProperty(a, i) {
          return t.call(a, i);
        },
        IsCallable: function IsCallable(a) {
          return typeof a == "function";
        },
        ToInt32: function ToInt32(a) {
          return a >> 0;
        },
        ToUint32: function ToUint32(a) {
          return a >>> 0;
        }
      };
    }(),
    ile = Math.LN2,
    ole = Math.abs,
    hd = Math.floor,
    ule = Math.log,
    sle = Math.min,
    Xr = Math.pow,
    lle = Math.round;
  function i4(e, t, a) {
    return e < t ? t : e > a ? a : e;
  }
  var o4 = Object.getOwnPropertyNames || function (e) {
      if (e !== Object(e)) throw new TypeError("Object.getOwnPropertyNames called on non-object");
      var t = [],
        a;
      for (a in e) je.HasOwnProperty(e, a) && t.push(a);
      return t;
    },
    gu;
  Object.defineProperty && function () {
    try {
      return Object.defineProperty({}, "x", {}), !0;
    } catch (_unused52) {
      return !1;
    }
  }() ? gu = Object.defineProperty : gu = function gu(e, t, a) {
    if (!e === Object(e)) throw new TypeError("Object.defineProperty called on non-object");
    return je.HasProperty(a, "get") && Object.prototype.__defineGetter__ && Object.prototype.__defineGetter__.call(e, t, a.get), je.HasProperty(a, "set") && Object.prototype.__defineSetter__ && Object.prototype.__defineSetter__.call(e, t, a.set), je.HasProperty(a, "value") && (e[t] = a.value), e;
  };
  function Mb(e) {
    if (o4 && gu) {
      var t = o4(e),
        a;
      for (a = 0; a < t.length; a += 1) gu(e, t[a], {
        value: e[t[a]],
        writable: !1,
        enumerable: !1,
        configurable: !1
      });
    }
  }
  function cle(e) {
    if (!gu) return;
    if (e.length > ale) throw new RangeError("Array too large for polyfill");
    function t(i) {
      gu(e, i, {
        get: function get() {
          return e._getter(i);
        },
        set: function set(u) {
          e._setter(i, u);
        },
        enumerable: !0,
        configurable: !1
      });
    }
    var a;
    for (a = 0; a < e.length; a += 1) t(a);
  }
  function Db(e, t) {
    var a = 32 - t;
    return e << a >> a;
  }
  function Bb(e, t) {
    var a = 32 - t;
    return e << a >>> a;
  }
  function fle(e) {
    return [e & 255];
  }
  function ple(e) {
    return Db(e[0], 8);
  }
  function dle(e) {
    return [e & 255];
  }
  function u4(e) {
    return Bb(e[0], 8);
  }
  function mle(e) {
    return e = lle(Number(e)), [e < 0 ? 0 : e > 255 ? 255 : e & 255];
  }
  function vle(e) {
    return [e >> 8 & 255, e & 255];
  }
  function hle(e) {
    return Db(e[0] << 8 | e[1], 16);
  }
  function gle(e) {
    return [e >> 8 & 255, e & 255];
  }
  function yle(e) {
    return Bb(e[0] << 8 | e[1], 16);
  }
  function ble(e) {
    return [e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, e & 255];
  }
  function xle(e) {
    return Db(e[0] << 24 | e[1] << 16 | e[2] << 8 | e[3], 32);
  }
  function Sle(e) {
    return [e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, e & 255];
  }
  function Ele(e) {
    return Bb(e[0] << 24 | e[1] << 16 | e[2] << 8 | e[3], 32);
  }
  function s4(e, t, a) {
    var i = (1 << t - 1) - 1,
      u,
      l,
      c,
      d,
      m,
      h,
      g;
    function b(x) {
      var S = hd(x),
        O = x - S;
      return O < .5 ? S : O > .5 || S % 2 ? S + 1 : S;
    }
    for (e !== e ? (l = (1 << t) - 1, c = Xr(2, a - 1), u = 0) : e === 1 / 0 || e === -1 / 0 ? (l = (1 << t) - 1, c = 0, u = e < 0 ? 1 : 0) : e === 0 ? (l = 0, c = 0, u = 1 / e === -1 / 0 ? 1 : 0) : (u = e < 0, e = ole(e), e >= Xr(2, 1 - i) ? (l = sle(hd(ule(e) / ile), 1023), c = b(e / Xr(2, l) * Xr(2, a)), c / Xr(2, a) >= 2 && (l = l + 1, c = 1), l > i ? (l = (1 << t) - 1, c = 0) : (l = l + i, c = c - Xr(2, a))) : (l = 0, c = b(e / Xr(2, 1 - i - a)))), m = [], d = a; d; d -= 1) m.push(c % 2 ? 1 : 0), c = hd(c / 2);
    for (d = t; d; d -= 1) m.push(l % 2 ? 1 : 0), l = hd(l / 2);
    for (m.push(u ? 1 : 0), m.reverse(), h = m.join(""), g = []; h.length;) g.push(parseInt(h.substring(0, 8), 2)), h = h.substring(8);
    return g;
  }
  function l4(e, t, a) {
    var i = [],
      u,
      l,
      c,
      d,
      m,
      h,
      g,
      b;
    for (u = e.length; u; u -= 1) for (c = e[u - 1], l = 8; l; l -= 1) i.push(c % 2 ? 1 : 0), c = c >> 1;
    return i.reverse(), d = i.join(""), m = (1 << t - 1) - 1, h = parseInt(d.substring(0, 1), 2) ? -1 : 1, g = parseInt(d.substring(1, 1 + t), 2), b = parseInt(d.substring(1 + t), 2), g === (1 << t) - 1 ? b === 0 ? h * (1 / 0) : NaN : g > 0 ? h * Xr(2, g - m) * (1 + b / Xr(2, a)) : b !== 0 ? h * Xr(2, -(m - 1)) * (b / Xr(2, a)) : h < 0 ? -0 : 0;
  }
  function Tle(e) {
    return l4(e, 11, 52);
  }
  function qle(e) {
    return s4(e, 11, 52);
  }
  function _le(e) {
    return l4(e, 8, 23);
  }
  function Ale(e) {
    return s4(e, 8, 23);
  }
  (function () {
    function e(x) {
      if (x = je.ToInt32(x), x < 0) throw new RangeError("ArrayBuffer size is not a small enough positive integer");
      this.byteLength = x, this._bytes = [], this._bytes.length = x;
      var S;
      for (S = 0; S < this.byteLength; S += 1) this._bytes[S] = 0;
      Mb(this);
    }
    ne.ArrayBuffer = ne.ArrayBuffer || e;
    function t() {}
    function a(x, S, O) {
      var _C2;
      return _C2 = function C(_, T, q) {
        var M, B, G, V;
        if (!arguments.length || typeof arguments[0] == "number") {
          if (this.length = je.ToInt32(arguments[0]), q < 0) throw new RangeError("ArrayBufferView size is not a small enough positive integer");
          this.byteLength = this.length * this.BYTES_PER_ELEMENT, this.buffer = new e(this.byteLength), this.byteOffset = 0;
        } else if (_typeof(arguments[0]) == "object" && arguments[0].constructor === _C2) for (M = arguments[0], this.length = M.length, this.byteLength = this.length * this.BYTES_PER_ELEMENT, this.buffer = new e(this.byteLength), this.byteOffset = 0, G = 0; G < this.length; G += 1) this._setter(G, M._getter(G));else if (_typeof(arguments[0]) == "object" && !(arguments[0] instanceof e || je.Class(arguments[0]) === "ArrayBuffer")) for (B = arguments[0], this.length = je.ToUint32(B.length), this.byteLength = this.length * this.BYTES_PER_ELEMENT, this.buffer = new e(this.byteLength), this.byteOffset = 0, G = 0; G < this.length; G += 1) V = B[G], this._setter(G, Number(V));else if (_typeof(arguments[0]) == "object" && (arguments[0] instanceof e || je.Class(arguments[0]) === "ArrayBuffer")) {
          if (this.buffer = _, this.byteOffset = je.ToUint32(T), this.byteOffset > this.buffer.byteLength) throw new RangeError("byteOffset out of range");
          if (this.byteOffset % this.BYTES_PER_ELEMENT) throw new RangeError("ArrayBuffer length minus the byteOffset is not a multiple of the element size.");
          if (arguments.length < 3) {
            if (this.byteLength = this.buffer.byteLength - this.byteOffset, this.byteLength % this.BYTES_PER_ELEMENT) throw new RangeError("length of buffer minus byteOffset not a multiple of the element size");
            this.length = this.byteLength / this.BYTES_PER_ELEMENT;
          } else this.length = je.ToUint32(q), this.byteLength = this.length * this.BYTES_PER_ELEMENT;
          if (this.byteOffset + this.byteLength > this.buffer.byteLength) throw new RangeError("byteOffset and length reference an area beyond the end of the buffer");
        } else throw new TypeError("Unexpected argument type(s)");
        this.constructor = _C2, Mb(this), cle(this);
      }, _C2.prototype = new t(), _C2.prototype.BYTES_PER_ELEMENT = x, _C2.prototype._pack = S, _C2.prototype._unpack = O, _C2.BYTES_PER_ELEMENT = x, _C2.prototype._getter = function (_) {
        if (arguments.length < 1) throw new SyntaxError("Not enough arguments");
        if (_ = je.ToUint32(_), !(_ >= this.length)) {
          for (var T = [], q = 0, M = this.byteOffset + _ * this.BYTES_PER_ELEMENT; q < this.BYTES_PER_ELEMENT; q += 1, M += 1) T.push(this.buffer._bytes[M]);
          return this._unpack(T);
        }
      }, _C2.prototype.get = _C2.prototype._getter, _C2.prototype._setter = function (_, T) {
        if (arguments.length < 2) throw new SyntaxError("Not enough arguments");
        if (_ = je.ToUint32(_), _ < this.length) {
          var q = this._pack(T),
            M,
            B;
          for (M = 0, B = this.byteOffset + _ * this.BYTES_PER_ELEMENT; M < this.BYTES_PER_ELEMENT; M += 1, B += 1) this.buffer._bytes[B] = q[M];
        }
      }, _C2.prototype.set = function (_, T) {
        if (arguments.length < 1) throw new SyntaxError("Not enough arguments");
        var q, M, B, G, V, te, ie, k, Q, X;
        if (_typeof(arguments[0]) == "object" && arguments[0].constructor === this.constructor) {
          if (q = arguments[0], B = je.ToUint32(arguments[1]), B + q.length > this.length) throw new RangeError("Offset plus length of array is out of range");
          if (k = this.byteOffset + B * this.BYTES_PER_ELEMENT, Q = q.length * this.BYTES_PER_ELEMENT, q.buffer === this.buffer) {
            for (X = [], V = 0, te = q.byteOffset; V < Q; V += 1, te += 1) X[V] = q.buffer._bytes[te];
            for (V = 0, ie = k; V < Q; V += 1, ie += 1) this.buffer._bytes[ie] = X[V];
          } else for (V = 0, te = q.byteOffset, ie = k; V < Q; V += 1, te += 1, ie += 1) this.buffer._bytes[ie] = q.buffer._bytes[te];
        } else if (_typeof(arguments[0]) == "object" && _typeof(arguments[0].length) < "u") {
          if (M = arguments[0], G = je.ToUint32(M.length), B = je.ToUint32(arguments[1]), B + G > this.length) throw new RangeError("Offset plus length of array is out of range");
          for (V = 0; V < G; V += 1) te = M[V], this._setter(B + V, Number(te));
        } else throw new TypeError("Unexpected argument type(s)");
      }, _C2.prototype.subarray = function (_, T) {
        _ = je.ToInt32(_), T = je.ToInt32(T), arguments.length < 1 && (_ = 0), arguments.length < 2 && (T = this.length), _ < 0 && (_ = this.length + _), T < 0 && (T = this.length + T), _ = i4(_, 0, this.length), T = i4(T, 0, this.length);
        var q = T - _;
        return q < 0 && (q = 0), new this.constructor(this.buffer, this.byteOffset + _ * this.BYTES_PER_ELEMENT, q);
      }, _C2;
    }
    var i = a(1, fle, ple),
      u = a(1, dle, u4),
      l = a(1, mle, u4),
      c = a(2, vle, hle),
      d = a(2, gle, yle),
      m = a(4, ble, xle),
      h = a(4, Sle, Ele),
      g = a(4, Ale, _le),
      b = a(8, qle, Tle);
    ne.Int8Array = ne.Int8Array || i, ne.Uint8Array = ne.Uint8Array || u, ne.Uint8ClampedArray = ne.Uint8ClampedArray || l, ne.Int16Array = ne.Int16Array || c, ne.Uint16Array = ne.Uint16Array || d, ne.Int32Array = ne.Int32Array || m, ne.Uint32Array = ne.Uint32Array || h, ne.Float32Array = ne.Float32Array || g, ne.Float64Array = ne.Float64Array || b;
  })();
  (function () {
    function e(l, c) {
      return je.IsCallable(l.get) ? l.get(c) : l[c];
    }
    var t = function () {
      var l = new ne.Uint16Array([4660]),
        c = new ne.Uint8Array(l.buffer);
      return e(c, 0) === 18;
    }();
    function a(l, c, d) {
      if (arguments.length === 0) l = new ne.ArrayBuffer(0);else if (!(l instanceof ne.ArrayBuffer || je.Class(l) === "ArrayBuffer")) throw new TypeError("TypeError");
      if (this.buffer = l || new ne.ArrayBuffer(0), this.byteOffset = je.ToUint32(c), this.byteOffset > this.buffer.byteLength) throw new RangeError("byteOffset out of range");
      if (arguments.length < 3 ? this.byteLength = this.buffer.byteLength - this.byteOffset : this.byteLength = je.ToUint32(d), this.byteOffset + this.byteLength > this.buffer.byteLength) throw new RangeError("byteOffset and length reference an area beyond the end of the buffer");
      Mb(this);
    }
    function i(l) {
      return function (c, d) {
        if (c = je.ToUint32(c), c + l.BYTES_PER_ELEMENT > this.byteLength) throw new RangeError("Array index out of range");
        c += this.byteOffset;
        var m = new ne.Uint8Array(this.buffer, c, l.BYTES_PER_ELEMENT),
          h = [],
          g;
        for (g = 0; g < l.BYTES_PER_ELEMENT; g += 1) h.push(e(m, g));
        return !!d == !!t && h.reverse(), e(new l(new ne.Uint8Array(h).buffer), 0);
      };
    }
    a.prototype.getUint8 = i(ne.Uint8Array), a.prototype.getInt8 = i(ne.Int8Array), a.prototype.getUint16 = i(ne.Uint16Array), a.prototype.getInt16 = i(ne.Int16Array), a.prototype.getUint32 = i(ne.Uint32Array), a.prototype.getInt32 = i(ne.Int32Array), a.prototype.getFloat32 = i(ne.Float32Array), a.prototype.getFloat64 = i(ne.Float64Array);
    function u(l) {
      return function (c, d, m) {
        if (c = je.ToUint32(c), c + l.BYTES_PER_ELEMENT > this.byteLength) throw new RangeError("Array index out of range");
        var h = new l([d]),
          g = new ne.Uint8Array(h.buffer),
          b = [],
          x,
          S;
        for (x = 0; x < l.BYTES_PER_ELEMENT; x += 1) b.push(e(g, x));
        !!m == !!t && b.reverse(), S = new ne.Uint8Array(this.buffer, c, l.BYTES_PER_ELEMENT), S.set(b);
      };
    }
    a.prototype.setUint8 = u(ne.Uint8Array), a.prototype.setInt8 = u(ne.Int8Array), a.prototype.setUint16 = u(ne.Uint16Array), a.prototype.setInt16 = u(ne.Int16Array), a.prototype.setUint32 = u(ne.Uint32Array), a.prototype.setInt32 = u(ne.Int32Array), a.prototype.setFloat32 = u(ne.Float32Array), a.prototype.setFloat64 = u(ne.Float64Array), ne.DataView = ne.DataView || a;
  })();
});
var p4 = v(function (QTe, f4) {
  "use strict";

  f4.exports = function (t, a) {
    if (a = a.split(":")[0], t = +t, !t) return !1;
    switch (a) {
      case "http":
      case "ws":
        return t !== 80;
      case "https":
      case "wss":
        return t !== 443;
      case "ftp":
        return t !== 21;
      case "gopher":
        return t !== 70;
      case "file":
        return !1;
    }
    return t !== 0;
  };
});
var v4 = v(function (Pb) {
  "use strict";

  var Cle = Object.prototype.hasOwnProperty,
    Rle;
  function d4(e) {
    try {
      return decodeURIComponent(e.replace(/\+/g, " "));
    } catch (_unused53) {
      return null;
    }
  }
  function m4(e) {
    try {
      return encodeURIComponent(e);
    } catch (_unused54) {
      return null;
    }
  }
  function Nle(e) {
    for (var t = /([^=?#&]+)=?([^&]*)/g, a = {}, i; i = t.exec(e);) {
      var u = d4(i[1]),
        l = d4(i[2]);
      u === null || l === null || u in a || (a[u] = l);
    }
    return a;
  }
  function wle(e, t) {
    t = t || "";
    var a = [],
      i,
      u;
    typeof t != "string" && (t = "?");
    for (u in e) if (Cle.call(e, u)) {
      if (i = e[u], !i && (i === null || i === Rle || isNaN(i)) && (i = ""), u = m4(u), i = m4(i), u === null || i === null) continue;
      a.push(u + "=" + i);
    }
    return a.length ? t + a.join("&") : "";
  }
  Pb.stringify = wle;
  Pb.parse = Nle;
});
var T4 = v(function (JTe, E4) {
  "use strict";

  var g4 = p4(),
    xd = v4(),
    Mle = /^[\x00-\x20\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]+/,
    y4 = /[\n\r\t]/g,
    Dle = /^[A-Za-z][A-Za-z0-9+-.]*:\/\//,
    b4 = /:\d+$/,
    Ble = /^([a-z][a-z0-9.+-]*:)?(\/\/)?([\\/]+)?([\S\s]*)/i,
    Ile = /^[a-zA-Z]:/;
  function zb(e) {
    return (e || "").toString().replace(Mle, "");
  }
  var Ub = [["#", "hash"], ["?", "query"], function (t, a) {
      return cn(a.protocol) ? t.replace(/\\/g, "/") : t;
    }, ["/", "pathname"], ["@", "auth", 1], [NaN, "host", void 0, 1, 1], [/:(\d*)$/, "port", void 0, 1], [NaN, "hostname", void 0, 1, 1]],
    h4 = {
      hash: 1,
      query: 1
    };
  function x4(e) {
    var t;
    (typeof window === "undefined" ? "undefined" : _typeof(window)) < "u" ? t = window : (typeof global === "undefined" ? "undefined" : _typeof(global)) < "u" ? t = global : (typeof self === "undefined" ? "undefined" : _typeof(self)) < "u" ? t = self : t = {};
    var a = t.location || {};
    e = e || a;
    var i = {},
      u = _typeof(e),
      l;
    if (e.protocol === "blob:") i = new fn(unescape(e.pathname), {});else if (u === "string") {
      i = new fn(e, {});
      for (l in h4) delete i[l];
    } else if (u === "object") {
      for (l in e) l in h4 || (i[l] = e[l]);
      i.slashes === void 0 && (i.slashes = Dle.test(e.href));
    }
    return i;
  }
  function cn(e) {
    return e === "file:" || e === "ftp:" || e === "http:" || e === "https:" || e === "ws:" || e === "wss:";
  }
  function S4(e, t) {
    e = zb(e), e = e.replace(y4, ""), t = t || {};
    var a = Ble.exec(e),
      i = a[1] ? a[1].toLowerCase() : "",
      u = !!a[2],
      l = !!a[3],
      c = 0,
      d;
    return u ? l ? (d = a[2] + a[3] + a[4], c = a[2].length + a[3].length) : (d = a[2] + a[4], c = a[2].length) : l ? (d = a[3] + a[4], c = a[3].length) : d = a[4], i === "file:" ? c >= 2 && (d = d.slice(2)) : cn(i) ? d = a[4] : i ? u && (d = d.slice(2)) : c >= 2 && cn(t.protocol) && (d = a[4]), {
      protocol: i,
      slashes: u || cn(i),
      slashesCount: c,
      rest: d
    };
  }
  function Ple(e, t) {
    if (e === "") return t;
    for (var a = (t || "/").split("/").slice(0, -1).concat(e.split("/")), i = a.length, u = a[i - 1], l = !1, c = 0; i--;) a[i] === "." ? a.splice(i, 1) : a[i] === ".." ? (a.splice(i, 1), c++) : c && (i === 0 && (l = !0), a.splice(i, 1), c--);
    return l && a.unshift(""), (u === "." || u === "..") && a.push(""), a.join("/");
  }
  function fn(e, t, a) {
    if (e = zb(e), e = e.replace(y4, ""), !(this instanceof fn)) return new fn(e, t, a);
    var i,
      u,
      l,
      c,
      d,
      m,
      h = Ub.slice(),
      g = _typeof(t),
      b = this,
      x = 0;
    for (g !== "object" && g !== "string" && (a = t, t = null), a && typeof a != "function" && (a = xd.parse), t = x4(t), u = S4(e || "", t), i = !u.protocol && !u.slashes, b.slashes = u.slashes || i && t.slashes, b.protocol = u.protocol || t.protocol || "", e = u.rest, (u.protocol === "file:" && (u.slashesCount !== 2 || Ile.test(e)) || !u.slashes && (u.protocol || u.slashesCount < 2 || !cn(b.protocol))) && (h[3] = [/(.*)/, "pathname"]); x < h.length; x++) {
      if (c = h[x], typeof c == "function") {
        e = c(e, b);
        continue;
      }
      l = c[0], m = c[1], l !== l ? b[m] = e : typeof l == "string" ? (d = l === "@" ? e.lastIndexOf(l) : e.indexOf(l), ~d && (typeof c[2] == "number" ? (b[m] = e.slice(0, d), e = e.slice(d + c[2])) : (b[m] = e.slice(d), e = e.slice(0, d)))) : (d = l.exec(e)) && (b[m] = d[1], e = e.slice(0, d.index)), b[m] = b[m] || i && c[3] && t[m] || "", c[4] && (b[m] = b[m].toLowerCase());
    }
    a && (b.query = a(b.query)), i && t.slashes && b.pathname.charAt(0) !== "/" && (b.pathname !== "" || t.pathname !== "") && (b.pathname = Ple(b.pathname, t.pathname)), b.pathname.charAt(0) !== "/" && cn(b.protocol) && (b.pathname = "/" + b.pathname), g4(b.port, b.protocol) || (b.host = b.hostname, b.port = ""), b.username = b.password = "", b.auth && (d = b.auth.indexOf(":"), ~d ? (b.username = b.auth.slice(0, d), b.username = encodeURIComponent(decodeURIComponent(b.username)), b.password = b.auth.slice(d + 1), b.password = encodeURIComponent(decodeURIComponent(b.password))) : b.username = encodeURIComponent(decodeURIComponent(b.auth)), b.auth = b.password ? b.username + ":" + b.password : b.username), b.origin = b.protocol !== "file:" && cn(b.protocol) && b.host ? b.protocol + "//" + b.host : "null", b.href = b.toString();
  }
  function Ule(e, t, a) {
    var i = this;
    switch (e) {
      case "query":
        typeof t == "string" && t.length && (t = (a || xd.parse)(t)), i[e] = t;
        break;
      case "port":
        i[e] = t, g4(t, i.protocol) ? t && (i.host = i.hostname + ":" + t) : (i.host = i.hostname, i[e] = "");
        break;
      case "hostname":
        i[e] = t, i.port && (t += ":" + i.port), i.host = t;
        break;
      case "host":
        i[e] = t, b4.test(t) ? (t = t.split(":"), i.port = t.pop(), i.hostname = t.join(":")) : (i.hostname = t, i.port = "");
        break;
      case "protocol":
        i.protocol = t.toLowerCase(), i.slashes = !a;
        break;
      case "pathname":
      case "hash":
        if (t) {
          var u = e === "pathname" ? "/" : "#";
          i[e] = t.charAt(0) !== u ? u + t : t;
        } else i[e] = t;
        break;
      case "username":
      case "password":
        i[e] = encodeURIComponent(t);
        break;
      case "auth":
        var l = t.indexOf(":");
        ~l ? (i.username = t.slice(0, l), i.username = encodeURIComponent(decodeURIComponent(i.username)), i.password = t.slice(l + 1), i.password = encodeURIComponent(decodeURIComponent(i.password))) : i.username = encodeURIComponent(decodeURIComponent(t));
    }
    for (var c = 0; c < Ub.length; c++) {
      var d = Ub[c];
      d[4] && (i[d[1]] = i[d[1]].toLowerCase());
    }
    return i.auth = i.password ? i.username + ":" + i.password : i.username, i.origin = i.protocol !== "file:" && cn(i.protocol) && i.host ? i.protocol + "//" + i.host : "null", i.href = i.toString(), i;
  }
  function zle(e) {
    (!e || typeof e != "function") && (e = xd.stringify);
    var t,
      a = this,
      i = a.host,
      u = a.protocol;
    u && u.charAt(u.length - 1) !== ":" && (u += ":");
    var l = u + (a.protocol && a.slashes || cn(a.protocol) ? "//" : "");
    return a.username ? (l += a.username, a.password && (l += ":" + a.password), l += "@") : a.password ? (l += ":" + a.password, l += "@") : a.protocol !== "file:" && cn(a.protocol) && !i && a.pathname !== "/" && (l += "@"), (i[i.length - 1] === ":" || b4.test(a.hostname) && !a.port) && (i += ":"), l += i + a.pathname, t = _typeof(a.query) == "object" ? e(a.query) : a.query, t && (l += t.charAt(0) !== "?" ? "?" + t : t), a.hash && (l += a.hash), l;
  }
  fn.prototype = {
    set: Ule,
    toString: zle
  };
  fn.extractProtocol = S4;
  fn.location = x4;
  fn.trimLeft = zb;
  fn.qs = xd;
  E4.exports = fn;
});
var C4 = v(function (Sd) {
  "use strict";

  Sd.byteLength = jle;
  Sd.toByteArray = Fle;
  Sd.fromByteArray = Vle;
  var pn = [],
    Cr = [],
    Lle = (typeof Uint8Array === "undefined" ? "undefined" : _typeof(Uint8Array)) < "u" ? Uint8Array : Array,
    Lb = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
  for (Ki = 0, A4 = Lb.length; Ki < A4; ++Ki) pn[Ki] = Lb[Ki], Cr[Lb.charCodeAt(Ki)] = Ki;
  var Ki, A4;
  Cr[45] = 62;
  Cr[95] = 63;
  function O4(e) {
    var t = e.length;
    if (t % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
    var a = e.indexOf("=");
    a === -1 && (a = t);
    var i = a === t ? 0 : 4 - a % 4;
    return [a, i];
  }
  function jle(e) {
    var t = O4(e),
      a = t[0],
      i = t[1];
    return (a + i) * 3 / 4 - i;
  }
  function Hle(e, t, a) {
    return (t + a) * 3 / 4 - a;
  }
  function Fle(e) {
    var t,
      a = O4(e),
      i = a[0],
      u = a[1],
      l = new Lle(Hle(e, i, u)),
      c = 0,
      d = u > 0 ? i - 4 : i,
      m;
    for (m = 0; m < d; m += 4) t = Cr[e.charCodeAt(m)] << 18 | Cr[e.charCodeAt(m + 1)] << 12 | Cr[e.charCodeAt(m + 2)] << 6 | Cr[e.charCodeAt(m + 3)], l[c++] = t >> 16 & 255, l[c++] = t >> 8 & 255, l[c++] = t & 255;
    return u === 2 && (t = Cr[e.charCodeAt(m)] << 2 | Cr[e.charCodeAt(m + 1)] >> 4, l[c++] = t & 255), u === 1 && (t = Cr[e.charCodeAt(m)] << 10 | Cr[e.charCodeAt(m + 1)] << 4 | Cr[e.charCodeAt(m + 2)] >> 2, l[c++] = t >> 8 & 255, l[c++] = t & 255), l;
  }
  function Gle(e) {
    return pn[e >> 18 & 63] + pn[e >> 12 & 63] + pn[e >> 6 & 63] + pn[e & 63];
  }
  function Kle(e, t, a) {
    for (var i, u = [], l = t; l < a; l += 3) i = (e[l] << 16 & 16711680) + (e[l + 1] << 8 & 65280) + (e[l + 2] & 255), u.push(Gle(i));
    return u.join("");
  }
  function Vle(e) {
    for (var t, a = e.length, i = a % 3, u = [], l = 16383, c = 0, d = a - i; c < d; c += l) u.push(Kle(e, c, c + l > d ? d : c + l));
    return i === 1 ? (t = e[a - 1], u.push(pn[t >> 2] + pn[t << 4 & 63] + "==")) : i === 2 && (t = (e[a - 2] << 8) + e[a - 1], u.push(pn[t >> 10] + pn[t >> 4 & 63] + pn[t << 2 & 63] + "=")), u.join("");
  }
});
var R4 = v(function (jb) {
  jb.read = function (e, t, a, i, u) {
    var l,
      c,
      d = u * 8 - i - 1,
      m = (1 << d) - 1,
      h = m >> 1,
      g = -7,
      b = a ? u - 1 : 0,
      x = a ? -1 : 1,
      S = e[t + b];
    for (b += x, l = S & (1 << -g) - 1, S >>= -g, g += d; g > 0; l = l * 256 + e[t + b], b += x, g -= 8);
    for (c = l & (1 << -g) - 1, l >>= -g, g += i; g > 0; c = c * 256 + e[t + b], b += x, g -= 8);
    if (l === 0) l = 1 - h;else {
      if (l === m) return c ? NaN : (S ? -1 : 1) * (1 / 0);
      c = c + Math.pow(2, i), l = l - h;
    }
    return (S ? -1 : 1) * c * Math.pow(2, l - i);
  };
  jb.write = function (e, t, a, i, u, l) {
    var c,
      d,
      m,
      h = l * 8 - u - 1,
      g = (1 << h) - 1,
      b = g >> 1,
      x = u === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
      S = i ? 0 : l - 1,
      O = i ? 1 : -1,
      C = t < 0 || t === 0 && 1 / t < 0 ? 1 : 0;
    for (t = Math.abs(t), isNaN(t) || t === 1 / 0 ? (d = isNaN(t) ? 1 : 0, c = g) : (c = Math.floor(Math.log(t) / Math.LN2), t * (m = Math.pow(2, -c)) < 1 && (c--, m *= 2), c + b >= 1 ? t += x / m : t += x * Math.pow(2, 1 - b), t * m >= 2 && (c++, m /= 2), c + b >= g ? (d = 0, c = g) : c + b >= 1 ? (d = (t * m - 1) * Math.pow(2, u), c = c + b) : (d = t * Math.pow(2, b - 1) * Math.pow(2, u), c = 0)); u >= 8; e[a + S] = d & 255, S += O, d /= 256, u -= 8);
    for (c = c << u | d, h += u; h > 0; e[a + S] = c & 255, S += O, c /= 256, h -= 8);
    e[a + S - O] |= C * 128;
  };
});
var Y4 = v(function (Su) {
  "use strict";

  var Hb = C4(),
    bu = R4(),
    N4 = typeof Symbol == "function" && typeof Symbol.for == "function" ? Symbol.for("nodejs.util.inspect.custom") : null;
  Su.Buffer = D;
  Su.SlowBuffer = Jle;
  Su.INSPECT_MAX_BYTES = 50;
  var Ed = 2147483647;
  Su.kMaxLength = Ed;
  D.TYPED_ARRAY_SUPPORT = Yle();
  !D.TYPED_ARRAY_SUPPORT && (typeof console === "undefined" ? "undefined" : _typeof(console)) < "u" && typeof console.error == "function" && console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");
  function Yle() {
    try {
      var e = new Uint8Array(1),
        t = {
          foo: function foo() {
            return 42;
          }
        };
      return Object.setPrototypeOf(t, Uint8Array.prototype), Object.setPrototypeOf(e, t), e.foo() === 42;
    } catch (_unused55) {
      return !1;
    }
  }
  Object.defineProperty(D.prototype, "parent", {
    enumerable: !0,
    get: function get() {
      if (D.isBuffer(this)) return this.buffer;
    }
  });
  Object.defineProperty(D.prototype, "offset", {
    enumerable: !0,
    get: function get() {
      if (D.isBuffer(this)) return this.byteOffset;
    }
  });
  function Jn(e) {
    if (e > Ed) throw new RangeError('The value "' + e + '" is invalid for option "size"');
    var t = new Uint8Array(e);
    return Object.setPrototypeOf(t, D.prototype), t;
  }
  function D(e, t, a) {
    if (typeof e == "number") {
      if (typeof t == "string") throw new TypeError('The "string" argument must be of type string. Received type number');
      return Vb(e);
    }
    return B4(e, t, a);
  }
  D.poolSize = 8192;
  function B4(e, t, a) {
    if (typeof e == "string") return kle(e, t);
    if (ArrayBuffer.isView(e)) return Qle(e);
    if (e == null) throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + _typeof(e));
    if (dn(e, ArrayBuffer) || e && dn(e.buffer, ArrayBuffer) || (typeof SharedArrayBuffer === "undefined" ? "undefined" : _typeof(SharedArrayBuffer)) < "u" && (dn(e, SharedArrayBuffer) || e && dn(e.buffer, SharedArrayBuffer))) return Gb(e, t, a);
    if (typeof e == "number") throw new TypeError('The "value" argument must not be of type number. Received type number');
    var i = e.valueOf && e.valueOf();
    if (i != null && i !== e) return D.from(i, t, a);
    var u = Zle(e);
    if (u) return u;
    if ((typeof Symbol === "undefined" ? "undefined" : _typeof(Symbol)) < "u" && Symbol.toPrimitive != null && typeof e[Symbol.toPrimitive] == "function") return D.from(e[Symbol.toPrimitive]("string"), t, a);
    throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + _typeof(e));
  }
  D.from = function (e, t, a) {
    return B4(e, t, a);
  };
  Object.setPrototypeOf(D.prototype, Uint8Array.prototype);
  Object.setPrototypeOf(D, Uint8Array);
  function I4(e) {
    if (typeof e != "number") throw new TypeError('"size" argument must be of type number');
    if (e < 0) throw new RangeError('The value "' + e + '" is invalid for option "size"');
  }
  function Xle(e, t, a) {
    return I4(e), e <= 0 ? Jn(e) : t !== void 0 ? typeof a == "string" ? Jn(e).fill(t, a) : Jn(e).fill(t) : Jn(e);
  }
  D.alloc = function (e, t, a) {
    return Xle(e, t, a);
  };
  function Vb(e) {
    return I4(e), Jn(e < 0 ? 0 : Yb(e) | 0);
  }
  D.allocUnsafe = function (e) {
    return Vb(e);
  };
  D.allocUnsafeSlow = function (e) {
    return Vb(e);
  };
  function kle(e, t) {
    if ((typeof t != "string" || t === "") && (t = "utf8"), !D.isEncoding(t)) throw new TypeError("Unknown encoding: " + t);
    var a = P4(e, t) | 0,
      i = Jn(a),
      u = i.write(e, t);
    return u !== a && (i = i.slice(0, u)), i;
  }
  function Fb(e) {
    var t = e.length < 0 ? 0 : Yb(e.length) | 0,
      a = Jn(t);
    for (var i = 0; i < t; i += 1) a[i] = e[i] & 255;
    return a;
  }
  function Qle(e) {
    if (dn(e, Uint8Array)) {
      var t = new Uint8Array(e);
      return Gb(t.buffer, t.byteOffset, t.byteLength);
    }
    return Fb(e);
  }
  function Gb(e, t, a) {
    if (t < 0 || e.byteLength < t) throw new RangeError('"offset" is outside of buffer bounds');
    if (e.byteLength < t + (a || 0)) throw new RangeError('"length" is outside of buffer bounds');
    var i;
    return t === void 0 && a === void 0 ? i = new Uint8Array(e) : a === void 0 ? i = new Uint8Array(e, t) : i = new Uint8Array(e, t, a), Object.setPrototypeOf(i, D.prototype), i;
  }
  function Zle(e) {
    if (D.isBuffer(e)) {
      var t = Yb(e.length) | 0,
        a = Jn(t);
      return a.length === 0 || e.copy(a, 0, 0, t), a;
    }
    if (e.length !== void 0) return typeof e.length != "number" || kb(e.length) ? Jn(0) : Fb(e);
    if (e.type === "Buffer" && Array.isArray(e.data)) return Fb(e.data);
  }
  function Yb(e) {
    if (e >= Ed) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + Ed.toString(16) + " bytes");
    return e | 0;
  }
  function Jle(e) {
    return +e != e && (e = 0), D.alloc(+e);
  }
  D.isBuffer = function (t) {
    return t != null && t._isBuffer === !0 && t !== D.prototype;
  };
  D.compare = function (t, a) {
    if (dn(t, Uint8Array) && (t = D.from(t, t.offset, t.byteLength)), dn(a, Uint8Array) && (a = D.from(a, a.offset, a.byteLength)), !D.isBuffer(t) || !D.isBuffer(a)) throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
    if (t === a) return 0;
    var i = t.length,
      u = a.length;
    for (var l = 0, c = Math.min(i, u); l < c; ++l) if (t[l] !== a[l]) {
      i = t[l], u = a[l];
      break;
    }
    return i < u ? -1 : u < i ? 1 : 0;
  };
  D.isEncoding = function (t) {
    switch (String(t).toLowerCase()) {
      case "hex":
      case "utf8":
      case "utf-8":
      case "ascii":
      case "latin1":
      case "binary":
      case "base64":
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return !0;
      default:
        return !1;
    }
  };
  D.concat = function (t, a) {
    if (!Array.isArray(t)) throw new TypeError('"list" argument must be an Array of Buffers');
    if (t.length === 0) return D.alloc(0);
    var i;
    if (a === void 0) for (a = 0, i = 0; i < t.length; ++i) a += t[i].length;
    var u = D.allocUnsafe(a),
      l = 0;
    for (i = 0; i < t.length; ++i) {
      var c = t[i];
      if (dn(c, Uint8Array)) l + c.length > u.length ? (D.isBuffer(c) || (c = D.from(c)), c.copy(u, l)) : Uint8Array.prototype.set.call(u, c, l);else if (D.isBuffer(c)) c.copy(u, l);else throw new TypeError('"list" argument must be an Array of Buffers');
      l += c.length;
    }
    return u;
  };
  function P4(e, t) {
    if (D.isBuffer(e)) return e.length;
    if (ArrayBuffer.isView(e) || dn(e, ArrayBuffer)) return e.byteLength;
    if (typeof e != "string") throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + _typeof(e));
    var a = e.length,
      i = arguments.length > 2 && arguments[2] === !0;
    if (!i && a === 0) return 0;
    var u = !1;
    for (;;) switch (t) {
      case "ascii":
      case "latin1":
      case "binary":
        return a;
      case "utf8":
      case "utf-8":
        return Kb(e).length;
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return a * 2;
      case "hex":
        return a >>> 1;
      case "base64":
        return V4(e).length;
      default:
        if (u) return i ? -1 : Kb(e).length;
        t = ("" + t).toLowerCase(), u = !0;
    }
  }
  D.byteLength = P4;
  function Wle(e, t, a) {
    var i = !1;
    if ((t === void 0 || t < 0) && (t = 0), t > this.length || ((a === void 0 || a > this.length) && (a = this.length), a <= 0) || (a >>>= 0, t >>>= 0, a <= t)) return "";
    for (e || (e = "utf8");;) switch (e) {
      case "hex":
        return sce(this, t, a);
      case "utf8":
      case "utf-8":
        return z4(this, t, a);
      case "ascii":
        return oce(this, t, a);
      case "latin1":
      case "binary":
        return uce(this, t, a);
      case "base64":
        return ace(this, t, a);
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return lce(this, t, a);
      default:
        if (i) throw new TypeError("Unknown encoding: " + e);
        e = (e + "").toLowerCase(), i = !0;
    }
  }
  D.prototype._isBuffer = !0;
  function Vi(e, t, a) {
    var i = e[t];
    e[t] = e[a], e[a] = i;
  }
  D.prototype.swap16 = function () {
    var t = this.length;
    if (t % 2 !== 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
    for (var a = 0; a < t; a += 2) Vi(this, a, a + 1);
    return this;
  };
  D.prototype.swap32 = function () {
    var t = this.length;
    if (t % 4 !== 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
    for (var a = 0; a < t; a += 4) Vi(this, a, a + 3), Vi(this, a + 1, a + 2);
    return this;
  };
  D.prototype.swap64 = function () {
    var t = this.length;
    if (t % 8 !== 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
    for (var a = 0; a < t; a += 8) Vi(this, a, a + 7), Vi(this, a + 1, a + 6), Vi(this, a + 2, a + 5), Vi(this, a + 3, a + 4);
    return this;
  };
  D.prototype.toString = function () {
    var t = this.length;
    return t === 0 ? "" : arguments.length === 0 ? z4(this, 0, t) : Wle.apply(this, arguments);
  };
  D.prototype.toLocaleString = D.prototype.toString;
  D.prototype.equals = function (t) {
    if (!D.isBuffer(t)) throw new TypeError("Argument must be a Buffer");
    return this === t ? !0 : D.compare(this, t) === 0;
  };
  D.prototype.inspect = function () {
    var t = "",
      a = Su.INSPECT_MAX_BYTES;
    return t = this.toString("hex", 0, a).replace(/(.{2})/g, "$1 ").trim(), this.length > a && (t += " ... "), "<Buffer " + t + ">";
  };
  N4 && (D.prototype[N4] = D.prototype.inspect);
  D.prototype.compare = function (t, a, i, u, l) {
    if (dn(t, Uint8Array) && (t = D.from(t, t.offset, t.byteLength)), !D.isBuffer(t)) throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + _typeof(t));
    if (a === void 0 && (a = 0), i === void 0 && (i = t ? t.length : 0), u === void 0 && (u = 0), l === void 0 && (l = this.length), a < 0 || i > t.length || u < 0 || l > this.length) throw new RangeError("out of range index");
    if (u >= l && a >= i) return 0;
    if (u >= l) return -1;
    if (a >= i) return 1;
    if (a >>>= 0, i >>>= 0, u >>>= 0, l >>>= 0, this === t) return 0;
    var c = l - u,
      d = i - a,
      m = Math.min(c, d),
      h = this.slice(u, l),
      g = t.slice(a, i);
    for (var b = 0; b < m; ++b) if (h[b] !== g[b]) {
      c = h[b], d = g[b];
      break;
    }
    return c < d ? -1 : d < c ? 1 : 0;
  };
  function U4(e, t, a, i, u) {
    if (e.length === 0) return -1;
    if (typeof a == "string" ? (i = a, a = 0) : a > 2147483647 ? a = 2147483647 : a < -2147483648 && (a = -2147483648), a = +a, kb(a) && (a = u ? 0 : e.length - 1), a < 0 && (a = e.length + a), a >= e.length) {
      if (u) return -1;
      a = e.length - 1;
    } else if (a < 0) if (u) a = 0;else return -1;
    if (typeof t == "string" && (t = D.from(t, i)), D.isBuffer(t)) return t.length === 0 ? -1 : w4(e, t, a, i, u);
    if (typeof t == "number") return t = t & 255, typeof Uint8Array.prototype.indexOf == "function" ? u ? Uint8Array.prototype.indexOf.call(e, t, a) : Uint8Array.prototype.lastIndexOf.call(e, t, a) : w4(e, [t], a, i, u);
    throw new TypeError("val must be string, number or Buffer");
  }
  function w4(e, t, a, i, u) {
    var l = 1,
      c = e.length,
      d = t.length;
    if (i !== void 0 && (i = String(i).toLowerCase(), i === "ucs2" || i === "ucs-2" || i === "utf16le" || i === "utf-16le")) {
      if (e.length < 2 || t.length < 2) return -1;
      l = 2, c /= 2, d /= 2, a /= 2;
    }
    function m(g, b) {
      return l === 1 ? g[b] : g.readUInt16BE(b * l);
    }
    var h;
    if (u) {
      var g = -1;
      for (h = a; h < c; h++) if (m(e, h) === m(t, g === -1 ? 0 : h - g)) {
        if (g === -1 && (g = h), h - g + 1 === d) return g * l;
      } else g !== -1 && (h -= h - g), g = -1;
    } else for (a + d > c && (a = c - d), h = a; h >= 0; h--) {
      var _g2 = !0;
      for (var b = 0; b < d; b++) if (m(e, h + b) !== m(t, b)) {
        _g2 = !1;
        break;
      }
      if (_g2) return h;
    }
    return -1;
  }
  D.prototype.includes = function (t, a, i) {
    return this.indexOf(t, a, i) !== -1;
  };
  D.prototype.indexOf = function (t, a, i) {
    return U4(this, t, a, i, !0);
  };
  D.prototype.lastIndexOf = function (t, a, i) {
    return U4(this, t, a, i, !1);
  };
  function $le(e, t, a, i) {
    a = Number(a) || 0;
    var u = e.length - a;
    i ? (i = Number(i), i > u && (i = u)) : i = u;
    var l = t.length;
    i > l / 2 && (i = l / 2);
    var c;
    for (c = 0; c < i; ++c) {
      var d = parseInt(t.substr(c * 2, 2), 16);
      if (kb(d)) return c;
      e[a + c] = d;
    }
    return c;
  }
  function ece(e, t, a, i) {
    return Td(Kb(t, e.length - a), e, a, i);
  }
  function tce(e, t, a, i) {
    return Td(dce(t), e, a, i);
  }
  function rce(e, t, a, i) {
    return Td(V4(t), e, a, i);
  }
  function nce(e, t, a, i) {
    return Td(mce(t, e.length - a), e, a, i);
  }
  D.prototype.write = function (t, a, i, u) {
    if (a === void 0) u = "utf8", i = this.length, a = 0;else if (i === void 0 && typeof a == "string") u = a, i = this.length, a = 0;else if (isFinite(a)) a = a >>> 0, isFinite(i) ? (i = i >>> 0, u === void 0 && (u = "utf8")) : (u = i, i = void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
    var l = this.length - a;
    if ((i === void 0 || i > l) && (i = l), t.length > 0 && (i < 0 || a < 0) || a > this.length) throw new RangeError("Attempt to write outside buffer bounds");
    u || (u = "utf8");
    var c = !1;
    for (;;) switch (u) {
      case "hex":
        return $le(this, t, a, i);
      case "utf8":
      case "utf-8":
        return ece(this, t, a, i);
      case "ascii":
      case "latin1":
      case "binary":
        return tce(this, t, a, i);
      case "base64":
        return rce(this, t, a, i);
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return nce(this, t, a, i);
      default:
        if (c) throw new TypeError("Unknown encoding: " + u);
        u = ("" + u).toLowerCase(), c = !0;
    }
  };
  D.prototype.toJSON = function () {
    return {
      type: "Buffer",
      data: Array.prototype.slice.call(this._arr || this, 0)
    };
  };
  function ace(e, t, a) {
    return t === 0 && a === e.length ? Hb.fromByteArray(e) : Hb.fromByteArray(e.slice(t, a));
  }
  function z4(e, t, a) {
    a = Math.min(e.length, a);
    var i = [],
      u = t;
    for (; u < a;) {
      var l = e[u],
        c = null,
        d = l > 239 ? 4 : l > 223 ? 3 : l > 191 ? 2 : 1;
      if (u + d <= a) {
        var m = void 0,
          h = void 0,
          g = void 0,
          b = void 0;
        switch (d) {
          case 1:
            l < 128 && (c = l);
            break;
          case 2:
            m = e[u + 1], (m & 192) === 128 && (b = (l & 31) << 6 | m & 63, b > 127 && (c = b));
            break;
          case 3:
            m = e[u + 1], h = e[u + 2], (m & 192) === 128 && (h & 192) === 128 && (b = (l & 15) << 12 | (m & 63) << 6 | h & 63, b > 2047 && (b < 55296 || b > 57343) && (c = b));
            break;
          case 4:
            m = e[u + 1], h = e[u + 2], g = e[u + 3], (m & 192) === 128 && (h & 192) === 128 && (g & 192) === 128 && (b = (l & 15) << 18 | (m & 63) << 12 | (h & 63) << 6 | g & 63, b > 65535 && b < 1114112 && (c = b));
        }
      }
      c === null ? (c = 65533, d = 1) : c > 65535 && (c -= 65536, i.push(c >>> 10 & 1023 | 55296), c = 56320 | c & 1023), i.push(c), u += d;
    }
    return ice(i);
  }
  var M4 = 4096;
  function ice(e) {
    var t = e.length;
    if (t <= M4) return String.fromCharCode.apply(String, e);
    var a = "",
      i = 0;
    for (; i < t;) a += String.fromCharCode.apply(String, e.slice(i, i += M4));
    return a;
  }
  function oce(e, t, a) {
    var i = "";
    a = Math.min(e.length, a);
    for (var u = t; u < a; ++u) i += String.fromCharCode(e[u] & 127);
    return i;
  }
  function uce(e, t, a) {
    var i = "";
    a = Math.min(e.length, a);
    for (var u = t; u < a; ++u) i += String.fromCharCode(e[u]);
    return i;
  }
  function sce(e, t, a) {
    var i = e.length;
    (!t || t < 0) && (t = 0), (!a || a < 0 || a > i) && (a = i);
    var u = "";
    for (var l = t; l < a; ++l) u += vce[e[l]];
    return u;
  }
  function lce(e, t, a) {
    var i = e.slice(t, a),
      u = "";
    for (var l = 0; l < i.length - 1; l += 2) u += String.fromCharCode(i[l] + i[l + 1] * 256);
    return u;
  }
  D.prototype.slice = function (t, a) {
    var i = this.length;
    t = ~~t, a = a === void 0 ? i : ~~a, t < 0 ? (t += i, t < 0 && (t = 0)) : t > i && (t = i), a < 0 ? (a += i, a < 0 && (a = 0)) : a > i && (a = i), a < t && (a = t);
    var u = this.subarray(t, a);
    return Object.setPrototypeOf(u, D.prototype), u;
  };
  function mt(e, t, a) {
    if (e % 1 !== 0 || e < 0) throw new RangeError("offset is not uint");
    if (e + t > a) throw new RangeError("Trying to access beyond buffer length");
  }
  D.prototype.readUintLE = D.prototype.readUIntLE = function (t, a, i) {
    t = t >>> 0, a = a >>> 0, i || mt(t, a, this.length);
    var u = this[t],
      l = 1,
      c = 0;
    for (; ++c < a && (l *= 256);) u += this[t + c] * l;
    return u;
  };
  D.prototype.readUintBE = D.prototype.readUIntBE = function (t, a, i) {
    t = t >>> 0, a = a >>> 0, i || mt(t, a, this.length);
    var u = this[t + --a],
      l = 1;
    for (; a > 0 && (l *= 256);) u += this[t + --a] * l;
    return u;
  };
  D.prototype.readUint8 = D.prototype.readUInt8 = function (t, a) {
    return t = t >>> 0, a || mt(t, 1, this.length), this[t];
  };
  D.prototype.readUint16LE = D.prototype.readUInt16LE = function (t, a) {
    return t = t >>> 0, a || mt(t, 2, this.length), this[t] | this[t + 1] << 8;
  };
  D.prototype.readUint16BE = D.prototype.readUInt16BE = function (t, a) {
    return t = t >>> 0, a || mt(t, 2, this.length), this[t] << 8 | this[t + 1];
  };
  D.prototype.readUint32LE = D.prototype.readUInt32LE = function (t, a) {
    return t = t >>> 0, a || mt(t, 4, this.length), (this[t] | this[t + 1] << 8 | this[t + 2] << 16) + this[t + 3] * 16777216;
  };
  D.prototype.readUint32BE = D.prototype.readUInt32BE = function (t, a) {
    return t = t >>> 0, a || mt(t, 4, this.length), this[t] * 16777216 + (this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3]);
  };
  D.prototype.readBigUInt64LE = Qa(function (t) {
    t = t >>> 0, xu(t, "offset");
    var a = this[t],
      i = this[t + 7];
    (a === void 0 || i === void 0) && Ul(t, this.length - 8);
    var u = a + this[++t] * Math.pow(2, 8) + this[++t] * Math.pow(2, 16) + this[++t] * Math.pow(2, 24),
      l = this[++t] + this[++t] * Math.pow(2, 8) + this[++t] * Math.pow(2, 16) + i * Math.pow(2, 24);
    return BigInt(u) + (BigInt(l) << BigInt(32));
  });
  D.prototype.readBigUInt64BE = Qa(function (t) {
    t = t >>> 0, xu(t, "offset");
    var a = this[t],
      i = this[t + 7];
    (a === void 0 || i === void 0) && Ul(t, this.length - 8);
    var u = a * Math.pow(2, 24) + this[++t] * Math.pow(2, 16) + this[++t] * Math.pow(2, 8) + this[++t],
      l = this[++t] * Math.pow(2, 24) + this[++t] * Math.pow(2, 16) + this[++t] * Math.pow(2, 8) + i;
    return (BigInt(u) << BigInt(32)) + BigInt(l);
  });
  D.prototype.readIntLE = function (t, a, i) {
    t = t >>> 0, a = a >>> 0, i || mt(t, a, this.length);
    var u = this[t],
      l = 1,
      c = 0;
    for (; ++c < a && (l *= 256);) u += this[t + c] * l;
    return l *= 128, u >= l && (u -= Math.pow(2, 8 * a)), u;
  };
  D.prototype.readIntBE = function (t, a, i) {
    t = t >>> 0, a = a >>> 0, i || mt(t, a, this.length);
    var u = a,
      l = 1,
      c = this[t + --u];
    for (; u > 0 && (l *= 256);) c += this[t + --u] * l;
    return l *= 128, c >= l && (c -= Math.pow(2, 8 * a)), c;
  };
  D.prototype.readInt8 = function (t, a) {
    return t = t >>> 0, a || mt(t, 1, this.length), this[t] & 128 ? (255 - this[t] + 1) * -1 : this[t];
  };
  D.prototype.readInt16LE = function (t, a) {
    t = t >>> 0, a || mt(t, 2, this.length);
    var i = this[t] | this[t + 1] << 8;
    return i & 32768 ? i | 4294901760 : i;
  };
  D.prototype.readInt16BE = function (t, a) {
    t = t >>> 0, a || mt(t, 2, this.length);
    var i = this[t + 1] | this[t] << 8;
    return i & 32768 ? i | 4294901760 : i;
  };
  D.prototype.readInt32LE = function (t, a) {
    return t = t >>> 0, a || mt(t, 4, this.length), this[t] | this[t + 1] << 8 | this[t + 2] << 16 | this[t + 3] << 24;
  };
  D.prototype.readInt32BE = function (t, a) {
    return t = t >>> 0, a || mt(t, 4, this.length), this[t] << 24 | this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3];
  };
  D.prototype.readBigInt64LE = Qa(function (t) {
    t = t >>> 0, xu(t, "offset");
    var a = this[t],
      i = this[t + 7];
    (a === void 0 || i === void 0) && Ul(t, this.length - 8);
    var u = this[t + 4] + this[t + 5] * Math.pow(2, 8) + this[t + 6] * Math.pow(2, 16) + (i << 24);
    return (BigInt(u) << BigInt(32)) + BigInt(a + this[++t] * Math.pow(2, 8) + this[++t] * Math.pow(2, 16) + this[++t] * Math.pow(2, 24));
  });
  D.prototype.readBigInt64BE = Qa(function (t) {
    t = t >>> 0, xu(t, "offset");
    var a = this[t],
      i = this[t + 7];
    (a === void 0 || i === void 0) && Ul(t, this.length - 8);
    var u = (a << 24) + this[++t] * Math.pow(2, 16) + this[++t] * Math.pow(2, 8) + this[++t];
    return (BigInt(u) << BigInt(32)) + BigInt(this[++t] * Math.pow(2, 24) + this[++t] * Math.pow(2, 16) + this[++t] * Math.pow(2, 8) + i);
  });
  D.prototype.readFloatLE = function (t, a) {
    return t = t >>> 0, a || mt(t, 4, this.length), bu.read(this, t, !0, 23, 4);
  };
  D.prototype.readFloatBE = function (t, a) {
    return t = t >>> 0, a || mt(t, 4, this.length), bu.read(this, t, !1, 23, 4);
  };
  D.prototype.readDoubleLE = function (t, a) {
    return t = t >>> 0, a || mt(t, 8, this.length), bu.read(this, t, !0, 52, 8);
  };
  D.prototype.readDoubleBE = function (t, a) {
    return t = t >>> 0, a || mt(t, 8, this.length), bu.read(this, t, !1, 52, 8);
  };
  function $t(e, t, a, i, u, l) {
    if (!D.isBuffer(e)) throw new TypeError('"buffer" argument must be a Buffer instance');
    if (t > u || t < l) throw new RangeError('"value" argument is out of bounds');
    if (a + i > e.length) throw new RangeError("Index out of range");
  }
  D.prototype.writeUintLE = D.prototype.writeUIntLE = function (t, a, i, u) {
    if (t = +t, a = a >>> 0, i = i >>> 0, !u) {
      var d = Math.pow(2, 8 * i) - 1;
      $t(this, t, a, i, d, 0);
    }
    var l = 1,
      c = 0;
    for (this[a] = t & 255; ++c < i && (l *= 256);) this[a + c] = t / l & 255;
    return a + i;
  };
  D.prototype.writeUintBE = D.prototype.writeUIntBE = function (t, a, i, u) {
    if (t = +t, a = a >>> 0, i = i >>> 0, !u) {
      var d = Math.pow(2, 8 * i) - 1;
      $t(this, t, a, i, d, 0);
    }
    var l = i - 1,
      c = 1;
    for (this[a + l] = t & 255; --l >= 0 && (c *= 256);) this[a + l] = t / c & 255;
    return a + i;
  };
  D.prototype.writeUint8 = D.prototype.writeUInt8 = function (t, a, i) {
    return t = +t, a = a >>> 0, i || $t(this, t, a, 1, 255, 0), this[a] = t & 255, a + 1;
  };
  D.prototype.writeUint16LE = D.prototype.writeUInt16LE = function (t, a, i) {
    return t = +t, a = a >>> 0, i || $t(this, t, a, 2, 65535, 0), this[a] = t & 255, this[a + 1] = t >>> 8, a + 2;
  };
  D.prototype.writeUint16BE = D.prototype.writeUInt16BE = function (t, a, i) {
    return t = +t, a = a >>> 0, i || $t(this, t, a, 2, 65535, 0), this[a] = t >>> 8, this[a + 1] = t & 255, a + 2;
  };
  D.prototype.writeUint32LE = D.prototype.writeUInt32LE = function (t, a, i) {
    return t = +t, a = a >>> 0, i || $t(this, t, a, 4, 4294967295, 0), this[a + 3] = t >>> 24, this[a + 2] = t >>> 16, this[a + 1] = t >>> 8, this[a] = t & 255, a + 4;
  };
  D.prototype.writeUint32BE = D.prototype.writeUInt32BE = function (t, a, i) {
    return t = +t, a = a >>> 0, i || $t(this, t, a, 4, 4294967295, 0), this[a] = t >>> 24, this[a + 1] = t >>> 16, this[a + 2] = t >>> 8, this[a + 3] = t & 255, a + 4;
  };
  function L4(e, t, a, i, u) {
    K4(t, i, u, e, a, 7);
    var l = Number(t & BigInt(4294967295));
    e[a++] = l, l = l >> 8, e[a++] = l, l = l >> 8, e[a++] = l, l = l >> 8, e[a++] = l;
    var c = Number(t >> BigInt(32) & BigInt(4294967295));
    return e[a++] = c, c = c >> 8, e[a++] = c, c = c >> 8, e[a++] = c, c = c >> 8, e[a++] = c, a;
  }
  function j4(e, t, a, i, u) {
    K4(t, i, u, e, a, 7);
    var l = Number(t & BigInt(4294967295));
    e[a + 7] = l, l = l >> 8, e[a + 6] = l, l = l >> 8, e[a + 5] = l, l = l >> 8, e[a + 4] = l;
    var c = Number(t >> BigInt(32) & BigInt(4294967295));
    return e[a + 3] = c, c = c >> 8, e[a + 2] = c, c = c >> 8, e[a + 1] = c, c = c >> 8, e[a] = c, a + 8;
  }
  D.prototype.writeBigUInt64LE = Qa(function (t) {
    var a = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    return L4(this, t, a, BigInt(0), BigInt("0xffffffffffffffff"));
  });
  D.prototype.writeBigUInt64BE = Qa(function (t) {
    var a = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    return j4(this, t, a, BigInt(0), BigInt("0xffffffffffffffff"));
  });
  D.prototype.writeIntLE = function (t, a, i, u) {
    if (t = +t, a = a >>> 0, !u) {
      var m = Math.pow(2, 8 * i - 1);
      $t(this, t, a, i, m - 1, -m);
    }
    var l = 0,
      c = 1,
      d = 0;
    for (this[a] = t & 255; ++l < i && (c *= 256);) t < 0 && d === 0 && this[a + l - 1] !== 0 && (d = 1), this[a + l] = (t / c >> 0) - d & 255;
    return a + i;
  };
  D.prototype.writeIntBE = function (t, a, i, u) {
    if (t = +t, a = a >>> 0, !u) {
      var m = Math.pow(2, 8 * i - 1);
      $t(this, t, a, i, m - 1, -m);
    }
    var l = i - 1,
      c = 1,
      d = 0;
    for (this[a + l] = t & 255; --l >= 0 && (c *= 256);) t < 0 && d === 0 && this[a + l + 1] !== 0 && (d = 1), this[a + l] = (t / c >> 0) - d & 255;
    return a + i;
  };
  D.prototype.writeInt8 = function (t, a, i) {
    return t = +t, a = a >>> 0, i || $t(this, t, a, 1, 127, -128), t < 0 && (t = 255 + t + 1), this[a] = t & 255, a + 1;
  };
  D.prototype.writeInt16LE = function (t, a, i) {
    return t = +t, a = a >>> 0, i || $t(this, t, a, 2, 32767, -32768), this[a] = t & 255, this[a + 1] = t >>> 8, a + 2;
  };
  D.prototype.writeInt16BE = function (t, a, i) {
    return t = +t, a = a >>> 0, i || $t(this, t, a, 2, 32767, -32768), this[a] = t >>> 8, this[a + 1] = t & 255, a + 2;
  };
  D.prototype.writeInt32LE = function (t, a, i) {
    return t = +t, a = a >>> 0, i || $t(this, t, a, 4, 2147483647, -2147483648), this[a] = t & 255, this[a + 1] = t >>> 8, this[a + 2] = t >>> 16, this[a + 3] = t >>> 24, a + 4;
  };
  D.prototype.writeInt32BE = function (t, a, i) {
    return t = +t, a = a >>> 0, i || $t(this, t, a, 4, 2147483647, -2147483648), t < 0 && (t = 4294967295 + t + 1), this[a] = t >>> 24, this[a + 1] = t >>> 16, this[a + 2] = t >>> 8, this[a + 3] = t & 255, a + 4;
  };
  D.prototype.writeBigInt64LE = Qa(function (t) {
    var a = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    return L4(this, t, a, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
  });
  D.prototype.writeBigInt64BE = Qa(function (t) {
    var a = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    return j4(this, t, a, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
  });
  function H4(e, t, a, i, u, l) {
    if (a + i > e.length) throw new RangeError("Index out of range");
    if (a < 0) throw new RangeError("Index out of range");
  }
  function F4(e, t, a, i, u) {
    return t = +t, a = a >>> 0, u || H4(e, t, a, 4, 34028234663852886e22, -34028234663852886e22), bu.write(e, t, a, i, 23, 4), a + 4;
  }
  D.prototype.writeFloatLE = function (t, a, i) {
    return F4(this, t, a, !0, i);
  };
  D.prototype.writeFloatBE = function (t, a, i) {
    return F4(this, t, a, !1, i);
  };
  function G4(e, t, a, i, u) {
    return t = +t, a = a >>> 0, u || H4(e, t, a, 8, 17976931348623157e292, -17976931348623157e292), bu.write(e, t, a, i, 52, 8), a + 8;
  }
  D.prototype.writeDoubleLE = function (t, a, i) {
    return G4(this, t, a, !0, i);
  };
  D.prototype.writeDoubleBE = function (t, a, i) {
    return G4(this, t, a, !1, i);
  };
  D.prototype.copy = function (t, a, i, u) {
    if (!D.isBuffer(t)) throw new TypeError("argument should be a Buffer");
    if (i || (i = 0), !u && u !== 0 && (u = this.length), a >= t.length && (a = t.length), a || (a = 0), u > 0 && u < i && (u = i), u === i || t.length === 0 || this.length === 0) return 0;
    if (a < 0) throw new RangeError("targetStart out of bounds");
    if (i < 0 || i >= this.length) throw new RangeError("Index out of range");
    if (u < 0) throw new RangeError("sourceEnd out of bounds");
    u > this.length && (u = this.length), t.length - a < u - i && (u = t.length - a + i);
    var l = u - i;
    return this === t && typeof Uint8Array.prototype.copyWithin == "function" ? this.copyWithin(a, i, u) : Uint8Array.prototype.set.call(t, this.subarray(i, u), a), l;
  };
  D.prototype.fill = function (t, a, i, u) {
    if (typeof t == "string") {
      if (typeof a == "string" ? (u = a, a = 0, i = this.length) : typeof i == "string" && (u = i, i = this.length), u !== void 0 && typeof u != "string") throw new TypeError("encoding must be a string");
      if (typeof u == "string" && !D.isEncoding(u)) throw new TypeError("Unknown encoding: " + u);
      if (t.length === 1) {
        var c = t.charCodeAt(0);
        (u === "utf8" && c < 128 || u === "latin1") && (t = c);
      }
    } else typeof t == "number" ? t = t & 255 : typeof t == "boolean" && (t = Number(t));
    if (a < 0 || this.length < a || this.length < i) throw new RangeError("Out of range index");
    if (i <= a) return this;
    a = a >>> 0, i = i === void 0 ? this.length : i >>> 0, t || (t = 0);
    var l;
    if (typeof t == "number") for (l = a; l < i; ++l) this[l] = t;else {
      var _c2 = D.isBuffer(t) ? t : D.from(t, u),
        d = _c2.length;
      if (d === 0) throw new TypeError('The value "' + t + '" is invalid for argument "value"');
      for (l = 0; l < i - a; ++l) this[l + a] = _c2[l % d];
    }
    return this;
  };
  var yu = {};
  function Xb(e, t, a) {
    yu[e] = /*#__PURE__*/function (_a2) {
      function _class() {
        var _this;
        _classCallCheck(this, _class);
        _this = _callSuper(this, _class), Object.defineProperty(_assertThisInitialized(_this), "message", {
          value: t.apply(_assertThisInitialized(_this), arguments),
          writable: !0,
          configurable: !0
        }), _this.name = "".concat(_this.name, " [").concat(e, "]"), _this.stack, delete _this.name;
        return _this;
      }
      _inherits(_class, _a2);
      return _createClass(_class, [{
        key: "code",
        get: function get() {
          return e;
        },
        set: function set(u) {
          Object.defineProperty(this, "code", {
            configurable: !0,
            enumerable: !0,
            value: u,
            writable: !0
          });
        }
      }, {
        key: "toString",
        value: function toString() {
          return "".concat(this.name, " [").concat(e, "]: ").concat(this.message);
        }
      }]);
    }(a);
  }
  Xb("ERR_BUFFER_OUT_OF_BOUNDS", function (e) {
    return e ? "".concat(e, " is outside of buffer bounds") : "Attempt to access memory outside buffer bounds";
  }, RangeError);
  Xb("ERR_INVALID_ARG_TYPE", function (e, t) {
    return "The \"".concat(e, "\" argument must be of type number. Received type ").concat(_typeof(t));
  }, TypeError);
  Xb("ERR_OUT_OF_RANGE", function (e, t, a) {
    var i = "The value of \"".concat(e, "\" is out of range."),
      u = a;
    return Number.isInteger(a) && Math.abs(a) > Math.pow(2, 32) ? u = D4(String(a)) : typeof a == "bigint" && (u = String(a), (a > Math.pow(BigInt(2), BigInt(32)) || a < -Math.pow(BigInt(2), BigInt(32))) && (u = D4(u)), u += "n"), i += " It must be ".concat(t, ". Received ").concat(u), i;
  }, RangeError);
  function D4(e) {
    var t = "",
      a = e.length,
      i = e[0] === "-" ? 1 : 0;
    for (; a >= i + 4; a -= 3) t = "_".concat(e.slice(a - 3, a)).concat(t);
    return "".concat(e.slice(0, a)).concat(t);
  }
  function cce(e, t, a) {
    xu(t, "offset"), (e[t] === void 0 || e[t + a] === void 0) && Ul(t, e.length - (a + 1));
  }
  function K4(e, t, a, i, u, l) {
    if (e > a || e < t) {
      var c = typeof t == "bigint" ? "n" : "",
        d;
      throw l > 3 ? t === 0 || t === BigInt(0) ? d = ">= 0".concat(c, " and < 2").concat(c, " ** ").concat((l + 1) * 8).concat(c) : d = ">= -(2".concat(c, " ** ").concat((l + 1) * 8 - 1).concat(c, ") and < 2 ** ").concat((l + 1) * 8 - 1).concat(c) : d = ">= ".concat(t).concat(c, " and <= ").concat(a).concat(c), new yu.ERR_OUT_OF_RANGE("value", d, e);
    }
    cce(i, u, l);
  }
  function xu(e, t) {
    if (typeof e != "number") throw new yu.ERR_INVALID_ARG_TYPE(t, "number", e);
  }
  function Ul(e, t, a) {
    throw Math.floor(e) !== e ? (xu(e, a), new yu.ERR_OUT_OF_RANGE(a || "offset", "an integer", e)) : t < 0 ? new yu.ERR_BUFFER_OUT_OF_BOUNDS() : new yu.ERR_OUT_OF_RANGE(a || "offset", ">= ".concat(a ? 1 : 0, " and <= ").concat(t), e);
  }
  var fce = /[^+/0-9A-Za-z-_]/g;
  function pce(e) {
    if (e = e.split("=")[0], e = e.trim().replace(fce, ""), e.length < 2) return "";
    for (; e.length % 4 !== 0;) e = e + "=";
    return e;
  }
  function Kb(e, t) {
    t = t || 1 / 0;
    var a,
      i = e.length,
      u = null,
      l = [];
    for (var c = 0; c < i; ++c) {
      if (a = e.charCodeAt(c), a > 55295 && a < 57344) {
        if (!u) {
          if (a > 56319) {
            (t -= 3) > -1 && l.push(239, 191, 189);
            continue;
          } else if (c + 1 === i) {
            (t -= 3) > -1 && l.push(239, 191, 189);
            continue;
          }
          u = a;
          continue;
        }
        if (a < 56320) {
          (t -= 3) > -1 && l.push(239, 191, 189), u = a;
          continue;
        }
        a = (u - 55296 << 10 | a - 56320) + 65536;
      } else u && (t -= 3) > -1 && l.push(239, 191, 189);
      if (u = null, a < 128) {
        if ((t -= 1) < 0) break;
        l.push(a);
      } else if (a < 2048) {
        if ((t -= 2) < 0) break;
        l.push(a >> 6 | 192, a & 63 | 128);
      } else if (a < 65536) {
        if ((t -= 3) < 0) break;
        l.push(a >> 12 | 224, a >> 6 & 63 | 128, a & 63 | 128);
      } else if (a < 1114112) {
        if ((t -= 4) < 0) break;
        l.push(a >> 18 | 240, a >> 12 & 63 | 128, a >> 6 & 63 | 128, a & 63 | 128);
      } else throw new Error("Invalid code point");
    }
    return l;
  }
  function dce(e) {
    var t = [];
    for (var a = 0; a < e.length; ++a) t.push(e.charCodeAt(a) & 255);
    return t;
  }
  function mce(e, t) {
    var a,
      i,
      u,
      l = [];
    for (var c = 0; c < e.length && !((t -= 2) < 0); ++c) a = e.charCodeAt(c), i = a >> 8, u = a % 256, l.push(u), l.push(i);
    return l;
  }
  function V4(e) {
    return Hb.toByteArray(pce(e));
  }
  function Td(e, t, a, i) {
    var u;
    for (u = 0; u < i && !(u + a >= t.length || u >= e.length); ++u) t[u + a] = e[u];
    return u;
  }
  function dn(e, t) {
    return e instanceof t || e != null && e.constructor != null && e.constructor.name != null && e.constructor.name === t.name;
  }
  function kb(e) {
    return e !== e;
  }
  var vce = function () {
    var e = "0123456789abcdef",
      t = new Array(256);
    for (var a = 0; a < 16; ++a) {
      var i = a * 16;
      for (var u = 0; u < 16; ++u) t[i + u] = e[a] + e[u];
    }
    return t;
  }();
  function Qa(e) {
    return (typeof BigInt === "undefined" ? "undefined" : _typeof(BigInt)) > "u" ? hce : e;
  }
  function hce() {
    throw new Error("BigInt not supported");
  }
});
var a6 = v(function (ue) {
  "use strict";

  var Jb = Symbol.for("react.transitional.element"),
    gce = Symbol.for("react.portal"),
    yce = Symbol.for("react.fragment"),
    bce = Symbol.for("react.strict_mode"),
    xce = Symbol.for("react.profiler"),
    Sce = Symbol.for("react.consumer"),
    Ece = Symbol.for("react.context"),
    Tce = Symbol.for("react.forward_ref"),
    qce = Symbol.for("react.suspense"),
    _ce = Symbol.for("react.memo"),
    W4 = Symbol.for("react.lazy"),
    Ace = Symbol.for("react.activity"),
    k4 = Symbol.iterator;
  function Oce(e) {
    return e === null || _typeof(e) != "object" ? null : (e = k4 && e[k4] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var $4 = {
      isMounted: function isMounted() {
        return !1;
      },
      enqueueForceUpdate: function enqueueForceUpdate() {},
      enqueueReplaceState: function enqueueReplaceState() {},
      enqueueSetState: function enqueueSetState() {}
    },
    e6 = Object.assign,
    t6 = {};
  function Tu(e, t, a) {
    this.props = e, this.context = t, this.refs = t6, this.updater = a || $4;
  }
  Tu.prototype.isReactComponent = {};
  Tu.prototype.setState = function (e, t) {
    if (_typeof(e) != "object" && typeof e != "function" && e != null) throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, e, t, "setState");
  };
  Tu.prototype.forceUpdate = function (e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate");
  };
  function r6() {}
  r6.prototype = Tu.prototype;
  function Wb(e, t, a) {
    this.props = e, this.context = t, this.refs = t6, this.updater = a || $4;
  }
  var $b = Wb.prototype = new r6();
  $b.constructor = Wb;
  e6($b, Tu.prototype);
  $b.isPureReactComponent = !0;
  var Q4 = Array.isArray;
  function Zb() {}
  var Be = {
      H: null,
      A: null,
      T: null,
      S: null
    },
    n6 = Object.prototype.hasOwnProperty;
  function ex(e, t, a) {
    var i = a.ref;
    return {
      $$typeof: Jb,
      type: e,
      key: t,
      ref: i !== void 0 ? i : null,
      props: a
    };
  }
  function Cce(e, t) {
    return ex(e.type, t, e.props);
  }
  function tx(e) {
    return _typeof(e) == "object" && e !== null && e.$$typeof === Jb;
  }
  function Rce(e) {
    var t = {
      "=": "=0",
      ":": "=2"
    };
    return "$" + e.replace(/[=:]/g, function (a) {
      return t[a];
    });
  }
  var Z4 = /\/+/g;
  function Qb(e, t) {
    return _typeof(e) == "object" && e !== null && e.key != null ? Rce("" + e.key) : t.toString(36);
  }
  function Nce(e) {
    switch (e.status) {
      case "fulfilled":
        return e.value;
      case "rejected":
        throw e.reason;
      default:
        switch (typeof e.status == "string" ? e.then(Zb, Zb) : (e.status = "pending", e.then(function (t) {
          e.status === "pending" && (e.status = "fulfilled", e.value = t);
        }, function (t) {
          e.status === "pending" && (e.status = "rejected", e.reason = t);
        })), e.status) {
          case "fulfilled":
            return e.value;
          case "rejected":
            throw e.reason;
        }
    }
    throw e;
  }
  function Eu(e, t, a, i, u) {
    var l = _typeof(e);
    (l === "undefined" || l === "boolean") && (e = null);
    var c = !1;
    if (e === null) c = !0;else switch (l) {
      case "bigint":
      case "string":
      case "number":
        c = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case Jb:
          case gce:
            c = !0;
            break;
          case W4:
            return c = e._init, Eu(c(e._payload), t, a, i, u);
        }
    }
    if (c) return u = u(e), c = i === "" ? "." + Qb(e, 0) : i, Q4(u) ? (a = "", c != null && (a = c.replace(Z4, "$&/") + "/"), Eu(u, t, a, "", function (h) {
      return h;
    })) : u != null && (tx(u) && (u = Cce(u, a + (u.key == null || e && e.key === u.key ? "" : ("" + u.key).replace(Z4, "$&/") + "/") + c)), t.push(u)), 1;
    c = 0;
    var d = i === "" ? "." : i + ":";
    if (Q4(e)) for (var m = 0; m < e.length; m++) i = e[m], l = d + Qb(i, m), c += Eu(i, t, a, l, u);else if (m = Oce(e), typeof m == "function") for (e = m.call(e), m = 0; !(i = e.next()).done;) i = i.value, l = d + Qb(i, m++), c += Eu(i, t, a, l, u);else if (l === "object") {
      if (typeof e.then == "function") return Eu(Nce(e), t, a, i, u);
      throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
    }
    return c;
  }
  function qd(e, t, a) {
    if (e == null) return e;
    var i = [],
      u = 0;
    return Eu(e, i, "", "", function (l) {
      return t.call(a, l, u++);
    }), i;
  }
  function wce(e) {
    if (e._status === -1) {
      var t = e._result;
      t = t(), t.then(function (a) {
        (e._status === 0 || e._status === -1) && (e._status = 1, e._result = a);
      }, function (a) {
        (e._status === 0 || e._status === -1) && (e._status = 2, e._result = a);
      }), e._status === -1 && (e._status = 0, e._result = t);
    }
    if (e._status === 1) return e._result.default;
    throw e._result;
  }
  var J4 = typeof reportError == "function" ? reportError : function (e) {
      if ((typeof window === "undefined" ? "undefined" : _typeof(window)) == "object" && typeof window.ErrorEvent == "function") {
        var t = new window.ErrorEvent("error", {
          bubbles: !0,
          cancelable: !0,
          message: _typeof(e) == "object" && e !== null && typeof e.message == "string" ? String(e.message) : String(e),
          error: e
        });
        if (!window.dispatchEvent(t)) return;
      } else if ((typeof process === "undefined" ? "undefined" : _typeof(process)) == "object" && typeof process.emit == "function") {
        process.emit("uncaughtException", e);
        return;
      }
      console.error(e);
    },
    Mce = {
      map: qd,
      forEach: function forEach(e, t, a) {
        qd(e, function () {
          t.apply(this, arguments);
        }, a);
      },
      count: function count(e) {
        var t = 0;
        return qd(e, function () {
          t++;
        }), t;
      },
      toArray: function toArray(e) {
        return qd(e, function (t) {
          return t;
        }) || [];
      },
      only: function only(e) {
        if (!tx(e)) throw Error("React.Children.only expected to receive a single React element child.");
        return e;
      }
    };
  ue.Activity = Ace;
  ue.Children = Mce;
  ue.Component = Tu;
  ue.Fragment = yce;
  ue.Profiler = xce;
  ue.PureComponent = Wb;
  ue.StrictMode = bce;
  ue.Suspense = qce;
  ue.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = Be;
  ue.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function c(e) {
      return Be.H.useMemoCache(e);
    }
  };
  ue.cache = function (e) {
    return function () {
      return e.apply(null, arguments);
    };
  };
  ue.cacheSignal = function () {
    return null;
  };
  ue.cloneElement = function (e, t, a) {
    if (e == null) throw Error("The argument must be a React element, but you passed " + e + ".");
    var i = e6({}, e.props),
      u = e.key;
    if (t != null) for (l in t.key !== void 0 && (u = "" + t.key), t) !n6.call(t, l) || l === "key" || l === "__self" || l === "__source" || l === "ref" && t.ref === void 0 || (i[l] = t[l]);
    var l = arguments.length - 2;
    if (l === 1) i.children = a;else if (1 < l) {
      for (var c = Array(l), d = 0; d < l; d++) c[d] = arguments[d + 2];
      i.children = c;
    }
    return ex(e.type, u, i);
  };
  ue.createContext = function (e) {
    return e = {
      $$typeof: Ece,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, e.Provider = e, e.Consumer = {
      $$typeof: Sce,
      _context: e
    }, e;
  };
  ue.createElement = function (e, t, a) {
    var i,
      u = {},
      l = null;
    if (t != null) for (i in t.key !== void 0 && (l = "" + t.key), t) n6.call(t, i) && i !== "key" && i !== "__self" && i !== "__source" && (u[i] = t[i]);
    var c = arguments.length - 2;
    if (c === 1) u.children = a;else if (1 < c) {
      for (var d = Array(c), m = 0; m < c; m++) d[m] = arguments[m + 2];
      u.children = d;
    }
    if (e && e.defaultProps) for (i in c = e.defaultProps, c) u[i] === void 0 && (u[i] = c[i]);
    return ex(e, l, u);
  };
  ue.createRef = function () {
    return {
      current: null
    };
  };
  ue.forwardRef = function (e) {
    return {
      $$typeof: Tce,
      render: e
    };
  };
  ue.isValidElement = tx;
  ue.lazy = function (e) {
    return {
      $$typeof: W4,
      _payload: {
        _status: -1,
        _result: e
      },
      _init: wce
    };
  };
  ue.memo = function (e, t) {
    return {
      $$typeof: _ce,
      type: e,
      compare: t === void 0 ? null : t
    };
  };
  ue.startTransition = function (e) {
    var t = Be.T,
      a = {};
    Be.T = a;
    try {
      var i = e(),
        u = Be.S;
      u !== null && u(a, i), _typeof(i) == "object" && i !== null && typeof i.then == "function" && i.then(Zb, J4);
    } catch (l) {
      J4(l);
    } finally {
      t !== null && a.types !== null && (t.types = a.types), Be.T = t;
    }
  };
  ue.unstable_useCacheRefresh = function () {
    return Be.H.useCacheRefresh();
  };
  ue.use = function (e) {
    return Be.H.use(e);
  };
  ue.useActionState = function (e, t, a) {
    return Be.H.useActionState(e, t, a);
  };
  ue.useCallback = function (e, t) {
    return Be.H.useCallback(e, t);
  };
  ue.useContext = function (e) {
    return Be.H.useContext(e);
  };
  ue.useDebugValue = function () {};
  ue.useDeferredValue = function (e, t) {
    return Be.H.useDeferredValue(e, t);
  };
  ue.useEffect = function (e, t) {
    return Be.H.useEffect(e, t);
  };
  ue.useEffectEvent = function (e) {
    return Be.H.useEffectEvent(e);
  };
  ue.useId = function () {
    return Be.H.useId();
  };
  ue.useImperativeHandle = function (e, t, a) {
    return Be.H.useImperativeHandle(e, t, a);
  };
  ue.useInsertionEffect = function (e, t) {
    return Be.H.useInsertionEffect(e, t);
  };
  ue.useLayoutEffect = function (e, t) {
    return Be.H.useLayoutEffect(e, t);
  };
  ue.useMemo = function (e, t) {
    return Be.H.useMemo(e, t);
  };
  ue.useOptimistic = function (e, t) {
    return Be.H.useOptimistic(e, t);
  };
  ue.useReducer = function (e, t, a) {
    return Be.H.useReducer(e, t, a);
  };
  ue.useRef = function (e) {
    return Be.H.useRef(e);
  };
  ue.useState = function (e) {
    return Be.H.useState(e);
  };
  ue.useSyncExternalStore = function (e, t, a) {
    return Be.H.useSyncExternalStore(e, t, a);
  };
  ue.useTransition = function () {
    return Be.H.useTransition();
  };
  ue.version = "19.2.7";
});
var _t = v(function (jqe, i6) {
  "use strict";

  i6.exports = a6();
});
var lU = v(function () {});
var fU = v(function (am, cU) {
  (function (e, t) {
    _typeof(am) == "object" ? cU.exports = am = t() : typeof define == "function" && define.amd ? define([], t) : e.CryptoJS = t();
  })(am, function () {
    var e = e || function (t, a) {
      var i;
      if ((typeof window === "undefined" ? "undefined" : _typeof(window)) < "u" && window.crypto && (i = window.crypto), (typeof self === "undefined" ? "undefined" : _typeof(self)) < "u" && self.crypto && (i = self.crypto), (typeof globalThis === "undefined" ? "undefined" : _typeof(globalThis)) < "u" && globalThis.crypto && (i = globalThis.crypto), !i && (typeof window === "undefined" ? "undefined" : _typeof(window)) < "u" && window.msCrypto && (i = window.msCrypto), !i && (typeof global === "undefined" ? "undefined" : _typeof(global)) < "u" && global.crypto && (i = global.crypto), !i && typeof F1 == "function") try {
        i = lU();
      } catch (_unused56) {}
      var u = function u() {
          if (i) {
            if (typeof i.getRandomValues == "function") try {
              return i.getRandomValues(new Uint32Array(1))[0];
            } catch (_unused57) {}
            if (typeof i.randomBytes == "function") try {
              return i.randomBytes(4).readInt32LE();
            } catch (_unused58) {}
          }
          throw new Error("Native crypto module could not be used to get secure random number.");
        },
        l = Object.create || function () {
          function T() {}
          return function (q) {
            var M;
            return T.prototype = q, M = new T(), T.prototype = null, M;
          };
        }(),
        c = {},
        d = c.lib = {},
        m = d.Base = function () {
          return {
            extend: function extend(T) {
              var q = l(this);
              return T && q.mixIn(T), (!q.hasOwnProperty("init") || this.init === q.init) && (q.init = function () {
                q.$super.init.apply(this, arguments);
              }), q.init.prototype = q, q.$super = this, q;
            },
            create: function create() {
              var T = this.extend();
              return T.init.apply(T, arguments), T;
            },
            init: function init() {},
            mixIn: function mixIn(T) {
              for (var q in T) T.hasOwnProperty(q) && (this[q] = T[q]);
              T.hasOwnProperty("toString") && (this.toString = T.toString);
            },
            clone: function clone() {
              return this.init.prototype.extend(this);
            }
          };
        }(),
        h = d.WordArray = m.extend({
          init: function init(T, q) {
            T = this.words = T || [], q != a ? this.sigBytes = q : this.sigBytes = T.length * 4;
          },
          toString: function toString(T) {
            return (T || b).stringify(this);
          },
          concat: function concat(T) {
            var q = this.words,
              M = T.words,
              B = this.sigBytes,
              G = T.sigBytes;
            if (this.clamp(), B % 4) for (var V = 0; V < G; V++) {
              var te = M[V >>> 2] >>> 24 - V % 4 * 8 & 255;
              q[B + V >>> 2] |= te << 24 - (B + V) % 4 * 8;
            } else for (var ie = 0; ie < G; ie += 4) q[B + ie >>> 2] = M[ie >>> 2];
            return this.sigBytes += G, this;
          },
          clamp: function clamp() {
            var T = this.words,
              q = this.sigBytes;
            T[q >>> 2] &= 4294967295 << 32 - q % 4 * 8, T.length = t.ceil(q / 4);
          },
          clone: function clone() {
            var T = m.clone.call(this);
            return T.words = this.words.slice(0), T;
          },
          random: function random(T) {
            for (var q = [], M = 0; M < T; M += 4) q.push(u());
            return new h.init(q, T);
          }
        }),
        g = c.enc = {},
        b = g.Hex = {
          stringify: function stringify(T) {
            for (var q = T.words, M = T.sigBytes, B = [], G = 0; G < M; G++) {
              var V = q[G >>> 2] >>> 24 - G % 4 * 8 & 255;
              B.push((V >>> 4).toString(16)), B.push((V & 15).toString(16));
            }
            return B.join("");
          },
          parse: function parse(T) {
            for (var q = T.length, M = [], B = 0; B < q; B += 2) M[B >>> 3] |= parseInt(T.substr(B, 2), 16) << 24 - B % 8 * 4;
            return new h.init(M, q / 2);
          }
        },
        x = g.Latin1 = {
          stringify: function stringify(T) {
            for (var q = T.words, M = T.sigBytes, B = [], G = 0; G < M; G++) {
              var V = q[G >>> 2] >>> 24 - G % 4 * 8 & 255;
              B.push(String.fromCharCode(V));
            }
            return B.join("");
          },
          parse: function parse(T) {
            for (var q = T.length, M = [], B = 0; B < q; B++) M[B >>> 2] |= (T.charCodeAt(B) & 255) << 24 - B % 4 * 8;
            return new h.init(M, q);
          }
        },
        S = g.Utf8 = {
          stringify: function stringify(T) {
            try {
              return decodeURIComponent(escape(x.stringify(T)));
            } catch (_unused59) {
              throw new Error("Malformed UTF-8 data");
            }
          },
          parse: function parse(T) {
            return x.parse(unescape(encodeURIComponent(T)));
          }
        },
        O = d.BufferedBlockAlgorithm = m.extend({
          reset: function reset() {
            this._data = new h.init(), this._nDataBytes = 0;
          },
          _append: function _append(T) {
            typeof T == "string" && (T = S.parse(T)), this._data.concat(T), this._nDataBytes += T.sigBytes;
          },
          _process: function _process(T) {
            var q,
              M = this._data,
              B = M.words,
              G = M.sigBytes,
              V = this.blockSize,
              te = V * 4,
              ie = G / te;
            T ? ie = t.ceil(ie) : ie = t.max((ie | 0) - this._minBufferSize, 0);
            var k = ie * V,
              Q = t.min(k * 4, G);
            if (k) {
              for (var X = 0; X < k; X += V) this._doProcessBlock(B, X);
              q = B.splice(0, k), M.sigBytes -= Q;
            }
            return new h.init(q, Q);
          },
          clone: function clone() {
            var T = m.clone.call(this);
            return T._data = this._data.clone(), T;
          },
          _minBufferSize: 0
        }),
        C = d.Hasher = O.extend({
          cfg: m.extend(),
          init: function init(T) {
            this.cfg = this.cfg.extend(T), this.reset();
          },
          reset: function reset() {
            O.reset.call(this), this._doReset();
          },
          update: function update(T) {
            return this._append(T), this._process(), this;
          },
          finalize: function finalize(T) {
            T && this._append(T);
            var q = this._doFinalize();
            return q;
          },
          blockSize: 512 / 32,
          _createHelper: function _createHelper(T) {
            return function (q, M) {
              return new T.init(M).finalize(q);
            };
          },
          _createHmacHelper: function _createHmacHelper(T) {
            return function (q, M) {
              return new _.HMAC.init(T, M).finalize(q);
            };
          }
        }),
        _ = c.algo = {};
      return c;
    }(Math);
    return e;
  });
});
var dU = v(function (im, pU) {
  (function (e, t) {
    _typeof(im) == "object" ? pU.exports = im = t(fU()) : typeof define == "function" && define.amd ? define(["./core"], t) : t(e.CryptoJS);
  })(im, function (e) {
    return function (t) {
      var a = e,
        i = a.lib,
        u = i.WordArray,
        l = i.Hasher,
        c = a.algo,
        d = [];
      (function () {
        for (var S = 0; S < 64; S++) d[S] = t.abs(t.sin(S + 1)) * 4294967296 | 0;
      })();
      var m = c.MD5 = l.extend({
        _doReset: function _doReset() {
          this._hash = new u.init([1732584193, 4023233417, 2562383102, 271733878]);
        },
        _doProcessBlock: function _doProcessBlock(S, O) {
          for (var C = 0; C < 16; C++) {
            var _ = O + C,
              T = S[_];
            S[_] = (T << 8 | T >>> 24) & 16711935 | (T << 24 | T >>> 8) & 4278255360;
          }
          var q = this._hash.words,
            M = S[O + 0],
            B = S[O + 1],
            G = S[O + 2],
            V = S[O + 3],
            te = S[O + 4],
            ie = S[O + 5],
            k = S[O + 6],
            Q = S[O + 7],
            X = S[O + 8],
            ce = S[O + 9],
            me = S[O + 10],
            Ee = S[O + 11],
            ge = S[O + 12],
            Je = S[O + 13],
            ht = S[O + 14],
            Pe = S[O + 15],
            U = q[0],
            j = q[1],
            z = q[2],
            L = q[3];
          U = h(U, j, z, L, M, 7, d[0]), L = h(L, U, j, z, B, 12, d[1]), z = h(z, L, U, j, G, 17, d[2]), j = h(j, z, L, U, V, 22, d[3]), U = h(U, j, z, L, te, 7, d[4]), L = h(L, U, j, z, ie, 12, d[5]), z = h(z, L, U, j, k, 17, d[6]), j = h(j, z, L, U, Q, 22, d[7]), U = h(U, j, z, L, X, 7, d[8]), L = h(L, U, j, z, ce, 12, d[9]), z = h(z, L, U, j, me, 17, d[10]), j = h(j, z, L, U, Ee, 22, d[11]), U = h(U, j, z, L, ge, 7, d[12]), L = h(L, U, j, z, Je, 12, d[13]), z = h(z, L, U, j, ht, 17, d[14]), j = h(j, z, L, U, Pe, 22, d[15]), U = g(U, j, z, L, B, 5, d[16]), L = g(L, U, j, z, k, 9, d[17]), z = g(z, L, U, j, Ee, 14, d[18]), j = g(j, z, L, U, M, 20, d[19]), U = g(U, j, z, L, ie, 5, d[20]), L = g(L, U, j, z, me, 9, d[21]), z = g(z, L, U, j, Pe, 14, d[22]), j = g(j, z, L, U, te, 20, d[23]), U = g(U, j, z, L, ce, 5, d[24]), L = g(L, U, j, z, ht, 9, d[25]), z = g(z, L, U, j, V, 14, d[26]), j = g(j, z, L, U, X, 20, d[27]), U = g(U, j, z, L, Je, 5, d[28]), L = g(L, U, j, z, G, 9, d[29]), z = g(z, L, U, j, Q, 14, d[30]), j = g(j, z, L, U, ge, 20, d[31]), U = b(U, j, z, L, ie, 4, d[32]), L = b(L, U, j, z, X, 11, d[33]), z = b(z, L, U, j, Ee, 16, d[34]), j = b(j, z, L, U, ht, 23, d[35]), U = b(U, j, z, L, B, 4, d[36]), L = b(L, U, j, z, te, 11, d[37]), z = b(z, L, U, j, Q, 16, d[38]), j = b(j, z, L, U, me, 23, d[39]), U = b(U, j, z, L, Je, 4, d[40]), L = b(L, U, j, z, M, 11, d[41]), z = b(z, L, U, j, V, 16, d[42]), j = b(j, z, L, U, k, 23, d[43]), U = b(U, j, z, L, ce, 4, d[44]), L = b(L, U, j, z, ge, 11, d[45]), z = b(z, L, U, j, Pe, 16, d[46]), j = b(j, z, L, U, G, 23, d[47]), U = x(U, j, z, L, M, 6, d[48]), L = x(L, U, j, z, Q, 10, d[49]), z = x(z, L, U, j, ht, 15, d[50]), j = x(j, z, L, U, ie, 21, d[51]), U = x(U, j, z, L, ge, 6, d[52]), L = x(L, U, j, z, V, 10, d[53]), z = x(z, L, U, j, me, 15, d[54]), j = x(j, z, L, U, B, 21, d[55]), U = x(U, j, z, L, X, 6, d[56]), L = x(L, U, j, z, Pe, 10, d[57]), z = x(z, L, U, j, k, 15, d[58]), j = x(j, z, L, U, Je, 21, d[59]), U = x(U, j, z, L, te, 6, d[60]), L = x(L, U, j, z, Ee, 10, d[61]), z = x(z, L, U, j, G, 15, d[62]), j = x(j, z, L, U, ce, 21, d[63]), q[0] = q[0] + U | 0, q[1] = q[1] + j | 0, q[2] = q[2] + z | 0, q[3] = q[3] + L | 0;
        },
        _doFinalize: function _doFinalize() {
          var S = this._data,
            O = S.words,
            C = this._nDataBytes * 8,
            _ = S.sigBytes * 8;
          O[_ >>> 5] |= 128 << 24 - _ % 32;
          var T = t.floor(C / 4294967296),
            q = C;
          O[(_ + 64 >>> 9 << 4) + 15] = (T << 8 | T >>> 24) & 16711935 | (T << 24 | T >>> 8) & 4278255360, O[(_ + 64 >>> 9 << 4) + 14] = (q << 8 | q >>> 24) & 16711935 | (q << 24 | q >>> 8) & 4278255360, S.sigBytes = (O.length + 1) * 4, this._process();
          for (var M = this._hash, B = M.words, G = 0; G < 4; G++) {
            var V = B[G];
            B[G] = (V << 8 | V >>> 24) & 16711935 | (V << 24 | V >>> 8) & 4278255360;
          }
          return M;
        },
        clone: function clone() {
          var S = l.clone.call(this);
          return S._hash = this._hash.clone(), S;
        }
      });
      function h(S, O, C, _, T, q, M) {
        var B = S + (O & C | ~O & _) + T + M;
        return (B << q | B >>> 32 - q) + O;
      }
      function g(S, O, C, _, T, q, M) {
        var B = S + (O & _ | C & ~_) + T + M;
        return (B << q | B >>> 32 - q) + O;
      }
      function b(S, O, C, _, T, q, M) {
        var B = S + (O ^ C ^ _) + T + M;
        return (B << q | B >>> 32 - q) + O;
      }
      function x(S, O, C, _, T, q, M) {
        var B = S + (C ^ (O | ~_)) + T + M;
        return (B << q | B >>> 32 - q) + O;
      }
      a.MD5 = l._createHelper(m), a.HmacMD5 = l._createHmacHelper(m);
    }(Math), e.MD5;
  });
});
var VU = v(function (He) {
  "use strict";

  function jx(e, t) {
    var a = e.length;
    e.push(t);
    e: for (; 0 < a;) {
      var i = a - 1 >>> 1,
        u = e[i];
      if (0 < ym(u, t)) e[i] = t, e[a] = u, a = i;else break e;
    }
  }
  function qn(e) {
    return e.length === 0 ? null : e[0];
  }
  function xm(e) {
    if (e.length === 0) return null;
    var t = e[0],
      a = e.pop();
    if (a !== t) {
      e[0] = a;
      e: for (var i = 0, u = e.length, l = u >>> 1; i < l;) {
        var c = 2 * (i + 1) - 1,
          d = e[c],
          m = c + 1,
          h = e[m];
        if (0 > ym(d, a)) m < u && 0 > ym(h, d) ? (e[i] = h, e[m] = a, i = m) : (e[i] = d, e[c] = a, i = c);else if (m < u && 0 > ym(h, a)) e[i] = h, e[m] = a, i = m;else break e;
      }
    }
    return t;
  }
  function ym(e, t) {
    var a = e.sortIndex - t.sortIndex;
    return a !== 0 ? a : e.id - t.id;
  }
  He.unstable_now = void 0;
  (typeof performance === "undefined" ? "undefined" : _typeof(performance)) == "object" && typeof performance.now == "function" ? (PU = performance, He.unstable_now = function () {
    return PU.now();
  }) : (Ux = Date, UU = Ux.now(), He.unstable_now = function () {
    return Ux.now() - UU;
  });
  var PU,
    Ux,
    UU,
    fa = [],
    oi = [],
    kme = 1,
    Dr = null,
    Bt = 3,
    Hx = !1,
    nc = !1,
    ac = !1,
    Fx = !1,
    jU = typeof setTimeout == "function" ? setTimeout : null,
    HU = typeof clearTimeout == "function" ? clearTimeout : null,
    zU = (typeof setImmediate === "undefined" ? "undefined" : _typeof(setImmediate)) < "u" ? setImmediate : null;
  function bm(e) {
    for (var t = qn(oi); t !== null;) {
      if (t.callback === null) xm(oi);else if (t.startTime <= e) xm(oi), t.sortIndex = t.expirationTime, jx(fa, t);else break;
      t = qn(oi);
    }
  }
  function Gx(e) {
    if (ac = !1, bm(e), !nc) if (qn(fa) !== null) nc = !0, Gu || (Gu = !0, Fu());else {
      var t = qn(oi);
      t !== null && Kx(Gx, t.startTime - e);
    }
  }
  var Gu = !1,
    ic = -1,
    FU = 5,
    GU = -1;
  function KU() {
    return Fx ? !0 : !(He.unstable_now() - GU < FU);
  }
  function zx() {
    if (Fx = !1, Gu) {
      var e = He.unstable_now();
      GU = e;
      var t = !0;
      try {
        e: {
          nc = !1, ac && (ac = !1, HU(ic), ic = -1), Hx = !0;
          var a = Bt;
          try {
            t: {
              for (bm(e), Dr = qn(fa); Dr !== null && !(Dr.expirationTime > e && KU());) {
                var i = Dr.callback;
                if (typeof i == "function") {
                  Dr.callback = null, Bt = Dr.priorityLevel;
                  var u = i(Dr.expirationTime <= e);
                  if (e = He.unstable_now(), typeof u == "function") {
                    Dr.callback = u, bm(e), t = !0;
                    break t;
                  }
                  Dr === qn(fa) && xm(fa), bm(e);
                } else xm(fa);
                Dr = qn(fa);
              }
              if (Dr !== null) t = !0;else {
                var l = qn(oi);
                l !== null && Kx(Gx, l.startTime - e), t = !1;
              }
            }
            break e;
          } finally {
            Dr = null, Bt = a, Hx = !1;
          }
          t = void 0;
        }
      } finally {
        t ? Fu() : Gu = !1;
      }
    }
  }
  var Fu;
  typeof zU == "function" ? Fu = function Fu() {
    zU(zx);
  } : (typeof MessageChannel === "undefined" ? "undefined" : _typeof(MessageChannel)) < "u" ? (Lx = new MessageChannel(), LU = Lx.port2, Lx.port1.onmessage = zx, Fu = function Fu() {
    LU.postMessage(null);
  }) : Fu = function Fu() {
    jU(zx, 0);
  };
  var Lx, LU;
  function Kx(e, t) {
    ic = jU(function () {
      e(He.unstable_now());
    }, t);
  }
  He.unstable_IdlePriority = 5;
  He.unstable_ImmediatePriority = 1;
  He.unstable_LowPriority = 4;
  He.unstable_NormalPriority = 3;
  He.unstable_Profiling = null;
  He.unstable_UserBlockingPriority = 2;
  He.unstable_cancelCallback = function (e) {
    e.callback = null;
  };
  He.unstable_forceFrameRate = function (e) {
    0 > e || 125 < e ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : FU = 0 < e ? Math.floor(1e3 / e) : 5;
  };
  He.unstable_getCurrentPriorityLevel = function () {
    return Bt;
  };
  He.unstable_next = function (e) {
    switch (Bt) {
      case 1:
      case 2:
      case 3:
        var t = 3;
        break;
      default:
        t = Bt;
    }
    var a = Bt;
    Bt = t;
    try {
      return e();
    } finally {
      Bt = a;
    }
  };
  He.unstable_requestPaint = function () {
    Fx = !0;
  };
  He.unstable_runWithPriority = function (e, t) {
    switch (e) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        e = 3;
    }
    var a = Bt;
    Bt = e;
    try {
      return t();
    } finally {
      Bt = a;
    }
  };
  He.unstable_scheduleCallback = function (e, t, a) {
    var i = He.unstable_now();
    switch (_typeof(a) == "object" && a !== null ? (a = a.delay, a = typeof a == "number" && 0 < a ? i + a : i) : a = i, e) {
      case 1:
        var u = -1;
        break;
      case 2:
        u = 250;
        break;
      case 5:
        u = 1073741823;
        break;
      case 4:
        u = 1e4;
        break;
      default:
        u = 5e3;
    }
    return u = a + u, e = {
      id: kme++,
      callback: t,
      priorityLevel: e,
      startTime: a,
      expirationTime: u,
      sortIndex: -1
    }, a > i ? (e.sortIndex = a, jx(oi, e), qn(fa) === null && e === qn(oi) && (ac ? (HU(ic), ic = -1) : ac = !0, Kx(Gx, a - i))) : (e.sortIndex = u, jx(fa, e), nc || Hx || (nc = !0, Gu || (Gu = !0, Fu()))), e;
  };
  He.unstable_shouldYield = KU;
  He.unstable_wrapCallback = function (e) {
    var t = Bt;
    return function () {
      var a = Bt;
      Bt = t;
      try {
        return e.apply(this, arguments);
      } finally {
        Bt = a;
      }
    };
  };
});
var XU = v(function (tMe, YU) {
  "use strict";

  YU.exports = VU();
});
var kU = v(function (rMe, oc) {
  "use strict";

  oc.exports = function (e) {
    function t(r, n, o, s) {
      return new Pz(r, n, o, s);
    }
    function a() {}
    function i(r) {
      var n = "https://react.dev/errors/" + r;
      if (1 < arguments.length) {
        n += "?args[]=" + encodeURIComponent(arguments[1]);
        for (var o = 2; o < arguments.length; o++) n += "&args[]=" + encodeURIComponent(arguments[o]);
      }
      return "Minified React error #" + r + "; visit " + n + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
    }
    function u(r) {
      var n = r,
        o = r;
      if (r.alternate) for (; n.return;) n = n.return;else {
        r = n;
        do n = r, (n.flags & 4098) !== 0 && (o = n.return), r = n.return; while (r);
      }
      return n.tag === 3 ? o : null;
    }
    function l(r) {
      if (u(r) !== r) throw Error(i(188));
    }
    function c(r) {
      var n = r.alternate;
      if (!n) {
        if (n = u(r), n === null) throw Error(i(188));
        return n !== r ? null : r;
      }
      for (var o = r, s = n;;) {
        var f = o.return;
        if (f === null) break;
        var p = f.alternate;
        if (p === null) {
          if (s = f.return, s !== null) {
            o = s;
            continue;
          }
          break;
        }
        if (f.child === p.child) {
          for (p = f.child; p;) {
            if (p === o) return l(f), r;
            if (p === s) return l(f), n;
            p = p.sibling;
          }
          throw Error(i(188));
        }
        if (o.return !== s.return) o = f, s = p;else {
          for (var y = !1, E = f.child; E;) {
            if (E === o) {
              y = !0, o = f, s = p;
              break;
            }
            if (E === s) {
              y = !0, s = f, o = p;
              break;
            }
            E = E.sibling;
          }
          if (!y) {
            for (E = p.child; E;) {
              if (E === o) {
                y = !0, o = p, s = f;
                break;
              }
              if (E === s) {
                y = !0, s = p, o = f;
                break;
              }
              E = E.sibling;
            }
            if (!y) throw Error(i(189));
          }
        }
        if (o.alternate !== s) throw Error(i(190));
      }
      if (o.tag !== 3) throw Error(i(188));
      return o.stateNode.current === o ? r : n;
    }
    function d(r) {
      var n = r.tag;
      if (n === 5 || n === 26 || n === 27 || n === 6) return r;
      for (r = r.child; r !== null;) {
        if (n = d(r), n !== null) return n;
        r = r.sibling;
      }
      return null;
    }
    function m(r) {
      var n = r.tag;
      if (n === 5 || n === 26 || n === 27 || n === 6) return r;
      for (r = r.child; r !== null;) {
        if (r.tag !== 4 && (n = m(r), n !== null)) return n;
        r = r.sibling;
      }
      return null;
    }
    function h(r) {
      return r === null || _typeof(r) != "object" ? null : (r = o1 && r[o1] || r["@@iterator"], typeof r == "function" ? r : null);
    }
    function g(r) {
      if (r == null) return null;
      if (typeof r == "function") return r.$$typeof === Hz ? null : r.displayName || r.name || null;
      if (typeof r == "string") return r;
      switch (r) {
        case vo:
          return "Fragment";
        case _v:
          return "Profiler";
        case a1:
          return "StrictMode";
        case Ov:
          return "Suspense";
        case Cv:
          return "SuspenseList";
        case Nv:
          return "Activity";
      }
      if (_typeof(r) == "object") switch (r.$$typeof) {
        case mo:
          return "Portal";
        case ya:
          return r.displayName || "Context";
        case i1:
          return (r._context.displayName || "Context") + ".Consumer";
        case Av:
          var n = r.render;
          return r = r.displayName, r || (r = n.displayName || n.name || "", r = r !== "" ? "ForwardRef(" + r + ")" : "ForwardRef"), r;
        case Rv:
          return n = r.displayName || null, n !== null ? n : g(r.type) || "Memo";
        case ba:
          n = r._payload, r = r._init;
          try {
            return g(r(n));
          } catch (_unused60) {}
      }
      return null;
    }
    function b(r) {
      return {
        current: r
      };
    }
    function x(r) {
      0 > yo || (r.current = Pv[yo], Pv[yo] = null, yo--);
    }
    function S(r, n) {
      yo++, Pv[yo] = r.current, r.current = n;
    }
    function O(r) {
      return r >>>= 0, r === 0 ? 32 : 31 - (vj(r) / hj | 0) | 0;
    }
    function C(r) {
      var n = r & 42;
      if (n !== 0) return n;
      switch (r & -r) {
        case 1:
          return 1;
        case 2:
          return 2;
        case 4:
          return 4;
        case 8:
          return 8;
        case 16:
          return 16;
        case 32:
          return 32;
        case 64:
          return 64;
        case 128:
          return 128;
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
          return r & 261888;
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
          return r & 3932160;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
          return r & 62914560;
        case 67108864:
          return 67108864;
        case 134217728:
          return 134217728;
        case 268435456:
          return 268435456;
        case 536870912:
          return 536870912;
        case 1073741824:
          return 0;
        default:
          return r;
      }
    }
    function _(r, n, o) {
      var s = r.pendingLanes;
      if (s === 0) return 0;
      var f = 0,
        p = r.suspendedLanes,
        y = r.pingedLanes;
      r = r.warmLanes;
      var E = s & 134217727;
      return E !== 0 ? (s = E & ~p, s !== 0 ? f = C(s) : (y &= E, y !== 0 ? f = C(y) : o || (o = E & ~r, o !== 0 && (f = C(o))))) : (E = s & ~p, E !== 0 ? f = C(E) : y !== 0 ? f = C(y) : o || (o = s & ~r, o !== 0 && (f = C(o)))), f === 0 ? 0 : n !== 0 && n !== f && (n & p) === 0 && (p = f & -f, o = n & -n, p >= o || p === 32 && (o & 4194048) !== 0) ? n : f;
    }
    function T(r, n) {
      return (r.pendingLanes & ~(r.suspendedLanes & ~r.pingedLanes) & n) === 0;
    }
    function q(r, n) {
      switch (r) {
        case 1:
        case 2:
        case 4:
        case 8:
        case 64:
          return n + 250;
        case 16:
        case 32:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
          return n + 5e3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
          return -1;
        case 67108864:
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
          return -1;
        default:
          return -1;
      }
    }
    function M() {
      var r = Gc;
      return Gc <<= 1, (Gc & 62914560) === 0 && (Gc = 4194304), r;
    }
    function B(r) {
      for (var n = [], o = 0; 31 > o; o++) n.push(r);
      return n;
    }
    function G(r, n) {
      r.pendingLanes |= n, n !== 268435456 && (r.suspendedLanes = 0, r.pingedLanes = 0, r.warmLanes = 0);
    }
    function V(r, n, o, s, f, p) {
      var y = r.pendingLanes;
      r.pendingLanes = o, r.suspendedLanes = 0, r.pingedLanes = 0, r.warmLanes = 0, r.expiredLanes &= o, r.entangledLanes &= o, r.errorRecoveryDisabledLanes &= o, r.shellSuspendCounter = 0;
      var E = r.entanglements,
        w = r.expirationTimes,
        I = r.hiddenUpdates;
      for (o = y & ~o; 0 < o;) {
        var K = 31 - sr(o),
          H = 1 << K;
        E[K] = 0, w[K] = -1;
        var Y = I[K];
        if (Y !== null) for (I[K] = null, K = 0; K < Y.length; K++) {
          var oe = Y[K];
          oe !== null && (oe.lane &= -536870913);
        }
        o &= ~H;
      }
      s !== 0 && te(r, s, 0), p !== 0 && f === 0 && r.tag !== 0 && (r.suspendedLanes |= p & ~(y & ~n));
    }
    function te(r, n, o) {
      r.pendingLanes |= n, r.suspendedLanes &= ~n;
      var s = 31 - sr(n);
      r.entangledLanes |= n, r.entanglements[s] = r.entanglements[s] | 1073741824 | o & 261930;
    }
    function ie(r, n) {
      var o = r.entangledLanes |= n;
      for (r = r.entanglements; o;) {
        var s = 31 - sr(o),
          f = 1 << s;
        f & n | r[s] & n && (r[s] |= n), o &= ~f;
      }
    }
    function k(r, n) {
      var o = n & -n;
      return o = (o & 42) !== 0 ? 1 : Q(o), (o & (r.suspendedLanes | n)) !== 0 ? 0 : o;
    }
    function Q(r) {
      switch (r) {
        case 2:
          r = 1;
          break;
        case 8:
          r = 4;
          break;
        case 32:
          r = 16;
          break;
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
          r = 128;
          break;
        case 268435456:
          r = 134217728;
          break;
        default:
          r = 0;
      }
      return r;
    }
    function X(r) {
      return r &= -r, 2 < r ? 8 < r ? (r & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
    }
    function ce(r) {
      if (typeof Sj == "function" && Ej(r), lr && typeof lr.setStrictMode == "function") try {
        lr.setStrictMode(ps, r);
      } catch (_unused61) {}
    }
    function me(r, n) {
      return r === n && (r !== 0 || 1 / r === 1 / n) || r !== r && n !== n;
    }
    function Ee(r) {
      if (Lv === void 0) try {
        throw Error();
      } catch (o) {
        var n = o.stack.trim().match(/\n( *(at )?)/);
        Lv = n && n[1] || "", M1 = -1 < o.stack.indexOf("\n    at") ? " (<anonymous>)" : -1 < o.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
      return "\n" + Lv + r + M1;
    }
    function ge(r, n) {
      if (!r || jv) return "";
      jv = !0;
      var o = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      try {
        var s = {
          DetermineComponentFrameRoot: function DetermineComponentFrameRoot() {
            try {
              if (n) {
                var H = function H() {
                  throw Error();
                };
                if (Object.defineProperty(H.prototype, "props", {
                  set: function set() {
                    throw Error();
                  }
                }), (typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) == "object" && Reflect.construct) {
                  try {
                    Reflect.construct(H, []);
                  } catch (oe) {
                    var Y = oe;
                  }
                  Reflect.construct(r, [], H);
                } else {
                  try {
                    H.call();
                  } catch (oe) {
                    Y = oe;
                  }
                  r.call(H.prototype);
                }
              } else {
                try {
                  throw Error();
                } catch (oe) {
                  Y = oe;
                }
                (H = r()) && typeof H.catch == "function" && H.catch(function () {});
              }
            } catch (oe) {
              if (oe && Y && typeof oe.stack == "string") return [oe.stack, Y.stack];
            }
            return [null, null];
          }
        };
        s.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
        var f = Object.getOwnPropertyDescriptor(s.DetermineComponentFrameRoot, "name");
        f && f.configurable && Object.defineProperty(s.DetermineComponentFrameRoot, "name", {
          value: "DetermineComponentFrameRoot"
        });
        var p = s.DetermineComponentFrameRoot(),
          y = p[0],
          E = p[1];
        if (y && E) {
          var w = y.split("\n"),
            I = E.split("\n");
          for (f = s = 0; s < w.length && !w[s].includes("DetermineComponentFrameRoot");) s++;
          for (; f < I.length && !I[f].includes("DetermineComponentFrameRoot");) f++;
          if (s === w.length || f === I.length) for (s = w.length - 1, f = I.length - 1; 1 <= s && 0 <= f && w[s] !== I[f];) f--;
          for (; 1 <= s && 0 <= f; s--, f--) if (w[s] !== I[f]) {
            if (s !== 1 || f !== 1) do if (s--, f--, 0 > f || w[s] !== I[f]) {
              var K = "\n" + w[s].replace(" at new ", " at ");
              return r.displayName && K.includes("<anonymous>") && (K = K.replace("<anonymous>", r.displayName)), K;
            } while (1 <= s && 0 <= f);
            break;
          }
        }
      } finally {
        jv = !1, Error.prepareStackTrace = o;
      }
      return (o = r ? r.displayName || r.name : "") ? Ee(o) : "";
    }
    function Je(r, n) {
      switch (r.tag) {
        case 26:
        case 27:
        case 5:
          return Ee(r.type);
        case 16:
          return Ee("Lazy");
        case 13:
          return r.child !== n && n !== null ? Ee("Suspense Fallback") : Ee("Suspense");
        case 19:
          return Ee("SuspenseList");
        case 0:
        case 15:
          return ge(r.type, !1);
        case 11:
          return ge(r.type.render, !1);
        case 1:
          return ge(r.type, !0);
        case 31:
          return Ee("Activity");
        default:
          return "";
      }
    }
    function ht(r) {
      try {
        var n = "",
          o = null;
        do n += Je(r, o), o = r, r = r.return; while (r);
        return n;
      } catch (s) {
        return "\nError generating stack: " + s.message + "\n" + s.stack;
      }
    }
    function Pe(r, n) {
      if (_typeof(r) == "object" && r !== null) {
        var o = D1.get(r);
        return o !== void 0 ? o : (n = {
          value: r,
          source: n,
          stack: ht(n)
        }, D1.set(r, n), n);
      }
      return {
        value: r,
        source: n,
        stack: ht(n)
      };
    }
    function U(r, n) {
      xo[So++] = ds, xo[So++] = Vc, Vc = r, ds = n;
    }
    function j(r, n, o) {
      xr[Sr++] = tn, xr[Sr++] = rn, xr[Sr++] = xa, xa = r;
      var s = tn;
      r = rn;
      var f = 32 - sr(s) - 1;
      s &= ~(1 << f), o += 1;
      var p = 32 - sr(n) + f;
      if (30 < p) {
        var y = f - f % 5;
        p = (s & (1 << y) - 1).toString(32), s >>= y, f -= y, tn = 1 << 32 - sr(n) + f | o << f | s, rn = p + r;
      } else tn = 1 << p | o << f | s, rn = r;
    }
    function z(r) {
      r.return !== null && (U(r, 1), j(r, 1, 0));
    }
    function L(r) {
      for (; r === Vc;) Vc = xo[--So], xo[So] = null, ds = xo[--So], xo[So] = null;
      for (; r === xa;) xa = xr[--Sr], xr[Sr] = null, rn = xr[--Sr], xr[Sr] = null, tn = xr[--Sr], xr[Sr] = null;
    }
    function Zr(r, n) {
      xr[Sr++] = tn, xr[Sr++] = rn, xr[Sr++] = xa, tn = n.id, rn = n.overflow, xa = r;
    }
    function We(r, n) {
      S(Sa, n), S(ms, r), S(bt, null), r = Kz(n), x(bt), S(bt, r);
    }
    function ar() {
      x(bt), x(ms), x(Sa);
    }
    function _n(r) {
      r.memoizedState !== null && S(Yc, r);
      var n = bt.current,
        o = Vz(n, r.type);
      n !== o && (S(ms, r), S(bt, o));
    }
    function Jr(r) {
      ms.current === r && (x(bt), x(ms)), Yc.current === r && (x(Yc), Dn ? gi._currentValue = ho : gi._currentValue2 = ho);
    }
    function Rt(r) {
      var n = Error(i(418, 1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML", ""));
      throw si(Pe(n, r)), Hv;
    }
    function lc(r, n) {
      if (!Mt) throw Error(i(175));
      VL(r.stateNode, r.type, r.memoizedProps, n, r) || Rt(r, !0);
    }
    function Yu(r) {
      for (xt = r.return; xt;) switch (xt.tag) {
        case 5:
        case 31:
        case 13:
          Er = !1;
          return;
        case 27:
        case 3:
          Er = !0;
          return;
        default:
          xt = xt.return;
      }
    }
    function An(r) {
      if (!Mt || r !== xt) return !1;
      if (!he) return Yu(r), he = !0, !1;
      var n = r.tag;
      if (ot ? n !== 3 && n !== 27 && (n !== 5 || b1(r.type) && !jc(r.type, r.memoizedProps)) && Fe && Rt(r) : n !== 3 && (n !== 5 || b1(r.type) && !jc(r.type, r.memoizedProps)) && Fe && Rt(r), Yu(r), n === 13) {
        if (!Mt) throw Error(i(316));
        if (r = r.memoizedState, r = r !== null ? r.dehydrated : null, !r) throw Error(i(317));
        Fe = ZL(r);
      } else if (n === 31) {
        if (r = r.memoizedState, r = r !== null ? r.dehydrated : null, !r) throw Error(i(317));
        Fe = QL(r);
      } else Fe = ot && n === 27 ? IL(r.type, Fe) : xt ? y1(r.stateNode) : null;
      return !0;
    }
    function On() {
      Mt && (Fe = xt = null, he = !1);
    }
    function Xu() {
      var r = Ea;
      return r !== null && (Vt === null ? Vt = r : Vt.push.apply(Vt, r), Ea = null), r;
    }
    function si(r) {
      Ea === null ? Ea = [r] : Ea.push(r);
    }
    function br(r, n, o) {
      Dn ? (S(Xc, n._currentValue), n._currentValue = o) : (S(Xc, n._currentValue2), n._currentValue2 = o);
    }
    function Br(r) {
      var n = Xc.current;
      Dn ? r._currentValue = n : r._currentValue2 = n, x(Xc);
    }
    function li(r, n, o) {
      for (; r !== null;) {
        var s = r.alternate;
        if ((r.childLanes & n) !== n ? (r.childLanes |= n, s !== null && (s.childLanes |= n)) : s !== null && (s.childLanes & n) !== n && (s.childLanes |= n), r === o) break;
        r = r.return;
      }
    }
    function ku(r, n, o, s) {
      var f = r.child;
      for (f !== null && (f.return = r); f !== null;) {
        var p = f.dependencies;
        if (p !== null) {
          var y = f.child;
          p = p.firstContext;
          e: for (; p !== null;) {
            var E = p;
            p = f;
            for (var w = 0; w < n.length; w++) if (E.context === n[w]) {
              p.lanes |= o, E = p.alternate, E !== null && (E.lanes |= o), li(p.return, o, r), s || (y = null);
              break e;
            }
            p = E.next;
          }
        } else if (f.tag === 18) {
          if (y = f.return, y === null) throw Error(i(341));
          y.lanes |= o, p = y.alternate, p !== null && (p.lanes |= o), li(y, o, r), y = null;
        } else y = f.child;
        if (y !== null) y.return = f;else for (y = f; y !== null;) {
          if (y === r) {
            y = null;
            break;
          }
          if (f = y.sibling, f !== null) {
            f.return = y.return, y = f;
            break;
          }
          y = y.return;
        }
        f = y;
      }
    }
    function _e(r, n, o, s) {
      r = null;
      for (var f = n, p = !1; f !== null;) {
        if (!p) {
          if ((f.flags & 524288) !== 0) p = !0;else if ((f.flags & 262144) !== 0) break;
        }
        if (f.tag === 10) {
          var y = f.alternate;
          if (y === null) throw Error(i(387));
          if (y = y.memoizedProps, y !== null) {
            var E = f.type;
            cr(f.pendingProps.value, y.value) || (r !== null ? r.push(E) : r = [E]);
          }
        } else if (f === Yc.current) {
          if (y = f.alternate, y === null) throw Error(i(387));
          y.memoizedState.memoizedState !== f.memoizedState.memoizedState && (r !== null ? r.push(gi) : r = [gi]);
        }
        f = f.return;
      }
      r !== null && ku(n, r, o, s), n.flags |= 262144;
    }
    function we(r) {
      for (r = r.firstContext; r !== null;) {
        var n = r.context;
        if (!cr(Dn ? n._currentValue : n._currentValue2, r.memoizedValue)) return !0;
        r = r.next;
      }
      return !1;
    }
    function Xe(r) {
      yi = r, In = null, r = r.dependencies, r !== null && (r.firstContext = null);
    }
    function gt(r) {
      return Yx(yi, r);
    }
    function cc(r, n) {
      return yi === null && Xe(r), Yx(r, n);
    }
    function Yx(r, n) {
      var o = Dn ? n._currentValue : n._currentValue2;
      if (n = {
        context: n,
        memoizedValue: o,
        next: null
      }, In === null) {
        if (r === null) throw Error(i(308));
        In = n, r.dependencies = {
          lanes: 0,
          firstContext: n
        }, r.flags |= 524288;
      } else In = In.next = n;
      return o;
    }
    function qm() {
      return {
        controller: new qj(),
        data: new Map(),
        refCount: 0
      };
    }
    function Qu(r) {
      r.refCount--, r.refCount === 0 && _j(Aj, function () {
        r.controller.abort();
      });
    }
    function fc() {}
    function Wr(r) {
      r !== Eo && r.next === null && (Eo === null ? kc = Eo = r : Eo = Eo.next = r), Qc = !0, Fv || (Fv = !0, pz());
    }
    function so(r, n) {
      if (!Gv && Qc) {
        Gv = !0;
        do for (var o = !1, s = kc; s !== null;) {
          if (!n) if (r !== 0) {
            var f = s.pendingLanes;
            if (f === 0) var p = 0;else {
              var y = s.suspendedLanes,
                E = s.pingedLanes;
              p = (1 << 31 - sr(42 | r) + 1) - 1, p &= f & ~(y & ~E), p = p & 201326741 ? p & 201326741 | 1 : p ? p | 2 : 0;
            }
            p !== 0 && (o = !0, Jx(s, p));
          } else p = ve, p = _(s, s === Re ? p : 0, s.cancelPendingCommit !== null || s.timeoutHandle !== hi), (p & 3) === 0 || T(s, p) || (o = !0, Jx(s, p));
          s = s.next;
        } while (o);
        Gv = !1;
      }
    }
    function Xx() {
      kx();
    }
    function kx() {
      Qc = Fv = !1;
      var r = 0;
      bi !== 0 && eL() && (r = bi);
      for (var n = Gt(), o = null, s = kc; s !== null;) {
        var f = s.next,
          p = Qx(s, n);
        p === 0 ? (s.next = null, o === null ? kc = f : o.next = f, f === null && (Eo = o)) : (o = s, (r !== 0 || (p & 3) !== 0) && (Qc = !0)), s = f;
      }
      ut !== 0 && ut !== 5 || so(r, !1), bi !== 0 && (bi = 0);
    }
    function Qx(r, n) {
      for (var o = r.suspendedLanes, s = r.pingedLanes, f = r.expirationTimes, p = r.pendingLanes & -62914561; 0 < p;) {
        var y = 31 - sr(p),
          E = 1 << y,
          w = f[y];
        w === -1 ? ((E & o) === 0 || (E & s) !== 0) && (f[y] = q(E, n)) : w <= n && (r.expiredLanes |= E), p &= ~E;
      }
      if (n = Re, o = ve, o = _(r, r === n ? o : 0, r.cancelPendingCommit !== null || r.timeoutHandle !== hi), s = r.callbackNode, o === 0 || r === n && (qe === 2 || qe === 9) || r.cancelPendingCommit !== null) return s !== null && s !== null && Uv(s), r.callbackNode = null, r.callbackPriority = 0;
      if ((o & 3) === 0 || T(r, o)) {
        if (n = o & -o, n === r.callbackPriority) return n;
        switch (s !== null && Uv(s), X(o)) {
          case 2:
          case 8:
            o = bj;
            break;
          case 32:
            o = zv;
            break;
          case 268435456:
            o = xj;
            break;
          default:
            o = zv;
        }
        return s = Zx.bind(null, r), o = Kc(o, s), r.callbackPriority = n, r.callbackNode = o, n;
      }
      return s !== null && s !== null && Uv(s), r.callbackPriority = 2, r.callbackNode = null, 2;
    }
    function Zx(r, n) {
      if (ut !== 0 && ut !== 5) return r.callbackNode = null, r.callbackPriority = 0, null;
      var o = r.callbackNode;
      if (ss() && r.callbackNode !== o) return null;
      var s = ve;
      return s = _(r, r === Re ? s : 0, r.cancelPendingCommit !== null || r.timeoutHandle !== hi), s === 0 ? null : (DE(r, s, n), Qx(r, Gt()), r.callbackNode != null && r.callbackNode === o ? Zx.bind(null, r) : null);
    }
    function Jx(r, n) {
      if (ss()) return null;
      DE(r, n, !0);
    }
    function pz() {
      uL ? sL(function () {
        (pe & 6) !== 0 ? Kc(N1, Xx) : kx();
      }) : Kc(N1, Xx);
    }
    function _m() {
      if (bi === 0) {
        var r = To;
        r === 0 && (r = Hc, Hc <<= 1, (Hc & 261888) === 0 && (Hc = 256)), bi = r;
      }
      return bi;
    }
    function dz(r, n) {
      if (vs === null) {
        var o = vs = [];
        Kv = 0, To = _m(), qo = {
          status: "pending",
          value: void 0,
          then: function then(s) {
            o.push(s);
          }
        };
      }
      return Kv++, n.then(Wx, Wx), n;
    }
    function Wx() {
      if (--Kv === 0 && vs !== null) {
        qo !== null && (qo.status = "fulfilled");
        var r = vs;
        vs = null, To = 0, qo = null;
        for (var n = 0; n < r.length; n++) (0, r[n])();
      }
    }
    function mz(r, n) {
      var o = [],
        s = {
          status: "pending",
          value: null,
          reason: null,
          then: function then(f) {
            o.push(f);
          }
        };
      return r.then(function () {
        s.status = "fulfilled", s.value = n;
        for (var f = 0; f < o.length; f++) (0, o[f])(n);
      }, function (f) {
        for (s.status = "rejected", s.reason = f, f = 0; f < o.length; f++) (0, o[f])(void 0);
      }), s;
    }
    function Am() {
      var r = xi.current;
      return r !== null ? r : Re.pooledCache;
    }
    function pc(r, n) {
      n === null ? S(xi, xi.current) : S(xi, n.pool);
    }
    function $x() {
      var r = Am();
      return r === null ? null : {
        parent: Dn ? Ge._currentValue : Ge._currentValue2,
        pool: r
      };
    }
    function dc(r, n) {
      if (cr(r, n)) return !0;
      if (_typeof(r) != "object" || r === null || _typeof(n) != "object" || n === null) return !1;
      var o = Object.keys(r),
        s = Object.keys(n);
      if (o.length !== s.length) return !1;
      for (s = 0; s < o.length; s++) {
        var f = o[s];
        if (!Tj.call(n, f) || !cr(r[f], n[f])) return !1;
      }
      return !0;
    }
    function eS(r) {
      return r = r.status, r === "fulfilled" || r === "rejected";
    }
    function tS(r, n, o) {
      switch (o = r[o], o === void 0 ? r.push(n) : o !== n && (n.then(fc, fc), n = o), n.status) {
        case "fulfilled":
          return n.value;
        case "rejected":
          throw r = n.reason, nS(r), r;
        default:
          if (typeof n.status == "string") n.then(fc, fc);else {
            if (r = Re, r !== null && 100 < r.shellSuspendCounter) throw Error(i(482));
            r = n, r.status = "pending", r.then(function (s) {
              if (n.status === "pending") {
                var f = n;
                f.status = "fulfilled", f.value = s;
              }
            }, function (s) {
              if (n.status === "pending") {
                var f = n;
                f.status = "rejected", f.reason = s;
              }
            });
          }
          switch (n.status) {
            case "fulfilled":
              return n.value;
            case "rejected":
              throw r = n.reason, nS(r), r;
          }
          throw Si = n, _o;
      }
    }
    function ci(r) {
      try {
        var n = r._init;
        return n(r._payload);
      } catch (o) {
        throw o !== null && _typeof(o) == "object" && typeof o.then == "function" ? (Si = o, _o) : o;
      }
    }
    function rS() {
      if (Si === null) throw Error(i(459));
      var r = Si;
      return Si = null, r;
    }
    function nS(r) {
      if (r === _o || r === Zc) throw Error(i(483));
    }
    function mc(r) {
      var n = hs;
      return hs += 1, Ao === null && (Ao = []), tS(Ao, r, n);
    }
    function Zu(r, n) {
      n = n.props.ref, r.ref = n !== void 0 ? n : null;
    }
    function vc(r, n) {
      throw n.$$typeof === Lz ? Error(i(525)) : (r = Object.prototype.toString.call(n), Error(i(31, r === "[object Object]" ? "object with keys {" + Object.keys(n).join(", ") + "}" : r)));
    }
    function aS(r) {
      function n(R, A) {
        if (r) {
          var N = R.deletions;
          N === null ? (R.deletions = [A], R.flags |= 16) : N.push(A);
        }
      }
      function o(R, A) {
        if (!r) return null;
        for (; A !== null;) n(R, A), A = A.sibling;
        return null;
      }
      function s(R) {
        for (var A = new Map(); R !== null;) R.key !== null ? A.set(R.key, R) : A.set(R.index, R), R = R.sibling;
        return A;
      }
      function f(R, A) {
        return R = Mn(R, A), R.index = 0, R.sibling = null, R;
      }
      function p(R, A, N) {
        return R.index = N, r ? (N = R.alternate, N !== null ? (N = N.index, N < A ? (R.flags |= 67108866, A) : N) : (R.flags |= 67108866, A)) : (R.flags |= 1048576, A);
      }
      function y(R) {
        return r && R.alternate === null && (R.flags |= 67108866), R;
      }
      function E(R, A, N, F) {
        return A === null || A.tag !== 6 ? (A = Sv(N, R.mode, F), A.return = R, A) : (A = f(A, N), A.return = R, A);
      }
      function w(R, A, N, F) {
        var ee = N.type;
        return ee === vo ? K(R, A, N.props.children, F, N.key) : A !== null && (A.elementType === ee || _typeof(ee) == "object" && ee !== null && ee.$$typeof === ba && ci(ee) === A.type) ? (A = f(A, N.props), Zu(A, N), A.return = R, A) : (A = Uc(N.type, N.key, N.props, null, R.mode, F), Zu(A, N), A.return = R, A);
      }
      function I(R, A, N, F) {
        return A === null || A.tag !== 4 || A.stateNode.containerInfo !== N.containerInfo || A.stateNode.implementation !== N.implementation ? (A = Ev(N, R.mode, F), A.return = R, A) : (A = f(A, N.children || []), A.return = R, A);
      }
      function K(R, A, N, F, ee) {
        return A === null || A.tag !== 7 ? (A = vi(N, R.mode, F, ee), A.return = R, A) : (A = f(A, N), A.return = R, A);
      }
      function H(R, A, N) {
        if (typeof A == "string" && A !== "" || typeof A == "number" || typeof A == "bigint") return A = Sv("" + A, R.mode, N), A.return = R, A;
        if (_typeof(A) == "object" && A !== null) {
          switch (A.$$typeof) {
            case zc:
              return N = Uc(A.type, A.key, A.props, null, R.mode, N), Zu(N, A), N.return = R, N;
            case mo:
              return A = Ev(A, R.mode, N), A.return = R, A;
            case ba:
              return A = ci(A), H(R, A, N);
          }
          if (Lc(A) || h(A)) return A = vi(A, R.mode, N, null), A.return = R, A;
          if (typeof A.then == "function") return H(R, mc(A), N);
          if (A.$$typeof === ya) return H(R, cc(R, A), N);
          vc(R, A);
        }
        return null;
      }
      function Y(R, A, N, F) {
        var ee = A !== null ? A.key : null;
        if (typeof N == "string" && N !== "" || typeof N == "number" || typeof N == "bigint") return ee !== null ? null : E(R, A, "" + N, F);
        if (_typeof(N) == "object" && N !== null) {
          switch (N.$$typeof) {
            case zc:
              return N.key === ee ? w(R, A, N, F) : null;
            case mo:
              return N.key === ee ? I(R, A, N, F) : null;
            case ba:
              return N = ci(N), Y(R, A, N, F);
          }
          if (Lc(N) || h(N)) return ee !== null ? null : K(R, A, N, F, null);
          if (typeof N.then == "function") return Y(R, A, mc(N), F);
          if (N.$$typeof === ya) return Y(R, A, cc(R, N), F);
          vc(R, N);
        }
        return null;
      }
      function oe(R, A, N, F, ee) {
        if (typeof F == "string" && F !== "" || typeof F == "number" || typeof F == "bigint") return R = R.get(N) || null, E(A, R, "" + F, ee);
        if (_typeof(F) == "object" && F !== null) {
          switch (F.$$typeof) {
            case zc:
              return R = R.get(F.key === null ? N : F.key) || null, w(A, R, F, ee);
            case mo:
              return R = R.get(F.key === null ? N : F.key) || null, I(A, R, F, ee);
            case ba:
              return F = ci(F), oe(R, A, N, F, ee);
          }
          if (Lc(F) || h(F)) return R = R.get(N) || null, K(A, R, F, ee, null);
          if (typeof F.then == "function") return oe(R, A, N, mc(F), ee);
          if (F.$$typeof === ya) return oe(R, A, N, cc(A, F), ee);
          vc(A, F);
        }
        return null;
      }
      function St(R, A, N, F) {
        for (var ee = null, Ke = null, re = A, be = A = 0, dt = null; re !== null && be < N.length; be++) {
          re.index > be ? (dt = re, re = null) : dt = re.sibling;
          var xe = Y(R, re, N[be], F);
          if (xe === null) {
            re === null && (re = dt);
            break;
          }
          r && re && xe.alternate === null && n(R, re), A = p(xe, A, be), Ke === null ? ee = xe : Ke.sibling = xe, Ke = xe, re = dt;
        }
        if (be === N.length) return o(R, re), he && U(R, be), ee;
        if (re === null) {
          for (; be < N.length; be++) re = H(R, N[be], F), re !== null && (A = p(re, A, be), Ke === null ? ee = re : Ke.sibling = re, Ke = re);
          return he && U(R, be), ee;
        }
        for (re = s(re); be < N.length; be++) dt = oe(re, R, be, N[be], F), dt !== null && (r && dt.alternate !== null && re.delete(dt.key === null ? be : dt.key), A = p(dt, A, be), Ke === null ? ee = dt : Ke.sibling = dt, Ke = dt);
        return r && re.forEach(function (Ca) {
          return n(R, Ca);
        }), he && U(R, be), ee;
      }
      function Ts(R, A, N, F) {
        if (N == null) throw Error(i(151));
        for (var ee = null, Ke = null, re = A, be = A = 0, dt = null, xe = N.next(); re !== null && !xe.done; be++, xe = N.next()) {
          re.index > be ? (dt = re, re = null) : dt = re.sibling;
          var Ca = Y(R, re, xe.value, F);
          if (Ca === null) {
            re === null && (re = dt);
            break;
          }
          r && re && Ca.alternate === null && n(R, re), A = p(Ca, A, be), Ke === null ? ee = Ca : Ke.sibling = Ca, Ke = Ca, re = dt;
        }
        if (xe.done) return o(R, re), he && U(R, be), ee;
        if (re === null) {
          for (; !xe.done; be++, xe = N.next()) xe = H(R, xe.value, F), xe !== null && (A = p(xe, A, be), Ke === null ? ee = xe : Ke.sibling = xe, Ke = xe);
          return he && U(R, be), ee;
        }
        for (re = s(re); !xe.done; be++, xe = N.next()) xe = oe(re, R, be, xe.value, F), xe !== null && (r && xe.alternate !== null && re.delete(xe.key === null ? be : xe.key), A = p(xe, A, be), Ke === null ? ee = xe : Ke.sibling = xe, Ke = xe);
        return r && re.forEach(function (Nj) {
          return n(R, Nj);
        }), he && U(R, be), ee;
      }
      function _i(R, A, N, F) {
        if (_typeof(N) == "object" && N !== null && N.type === vo && N.key === null && (N = N.props.children), _typeof(N) == "object" && N !== null) {
          switch (N.$$typeof) {
            case zc:
              e: {
                for (var ee = N.key; A !== null;) {
                  if (A.key === ee) {
                    if (ee = N.type, ee === vo) {
                      if (A.tag === 7) {
                        o(R, A.sibling), F = f(A, N.props.children), F.return = R, R = F;
                        break e;
                      }
                    } else if (A.elementType === ee || _typeof(ee) == "object" && ee !== null && ee.$$typeof === ba && ci(ee) === A.type) {
                      o(R, A.sibling), F = f(A, N.props), Zu(F, N), F.return = R, R = F;
                      break e;
                    }
                    o(R, A);
                    break;
                  } else n(R, A);
                  A = A.sibling;
                }
                N.type === vo ? (F = vi(N.props.children, R.mode, F, N.key), F.return = R, R = F) : (F = Uc(N.type, N.key, N.props, null, R.mode, F), Zu(F, N), F.return = R, R = F);
              }
              return y(R);
            case mo:
              e: {
                for (ee = N.key; A !== null;) {
                  if (A.key === ee) {
                    if (A.tag === 4 && A.stateNode.containerInfo === N.containerInfo && A.stateNode.implementation === N.implementation) {
                      o(R, A.sibling), F = f(A, N.children || []), F.return = R, R = F;
                      break e;
                    } else {
                      o(R, A);
                      break;
                    }
                  } else n(R, A);
                  A = A.sibling;
                }
                F = Ev(N, R.mode, F), F.return = R, R = F;
              }
              return y(R);
            case ba:
              return N = ci(N), _i(R, A, N, F);
          }
          if (Lc(N)) return St(R, A, N, F);
          if (h(N)) {
            if (ee = h(N), typeof ee != "function") throw Error(i(150));
            return N = ee.call(N), Ts(R, A, N, F);
          }
          if (typeof N.then == "function") return _i(R, A, mc(N), F);
          if (N.$$typeof === ya) return _i(R, A, cc(R, N), F);
          vc(R, N);
        }
        return typeof N == "string" && N !== "" || typeof N == "number" || typeof N == "bigint" ? (N = "" + N, A !== null && A.tag === 6 ? (o(R, A.sibling), F = f(A, N), F.return = R, R = F) : (o(R, A), F = Sv(N, R.mode, F), F.return = R, R = F), y(R)) : o(R, A);
      }
      return function (R, A, N, F) {
        try {
          hs = 0;
          var ee = _i(R, A, N, F);
          return Ao = null, ee;
        } catch (re) {
          if (re === _o || re === Zc) throw re;
          var Ke = t(29, re, null, R.mode);
          return Ke.lanes = F, Ke.return = R, Ke;
        }
      };
    }
    function hc() {
      for (var r = Oo, n = Yv = Oo = 0; n < r;) {
        var o = Tr[n];
        Tr[n++] = null;
        var s = Tr[n];
        Tr[n++] = null;
        var f = Tr[n];
        Tr[n++] = null;
        var p = Tr[n];
        if (Tr[n++] = null, s !== null && f !== null) {
          var y = s.pending;
          y === null ? f.next = f : (f.next = y.next, y.next = f), s.pending = f;
        }
        p !== 0 && iS(o, f, p);
      }
    }
    function gc(r, n, o, s) {
      Tr[Oo++] = r, Tr[Oo++] = n, Tr[Oo++] = o, Tr[Oo++] = s, Yv |= s, r.lanes |= s, r = r.alternate, r !== null && (r.lanes |= s);
    }
    function Om(r, n, o, s) {
      return gc(r, n, o, s), yc(r);
    }
    function fi(r, n) {
      return gc(r, null, null, n), yc(r);
    }
    function iS(r, n, o) {
      r.lanes |= o;
      var s = r.alternate;
      s !== null && (s.lanes |= o);
      for (var f = !1, p = r.return; p !== null;) p.childLanes |= o, s = p.alternate, s !== null && (s.childLanes |= o), p.tag === 22 && (r = p.stateNode, r === null || r._visibility & 1 || (f = !0)), r = p, p = p.return;
      return r.tag === 3 ? (p = r.stateNode, f && n !== null && (f = 31 - sr(o), r = p.hiddenUpdates, s = r[f], s === null ? r[f] = [n] : s.push(n), n.lane = o | 536870912), p) : null;
    }
    function yc(r) {
      if (50 < Es) throw Es = 0, ah = null, Error(i(185));
      for (var n = r.return; n !== null;) r = n, n = r.return;
      return r.tag === 3 ? r.stateNode : null;
    }
    function Cm(r) {
      r.updateQueue = {
        baseState: r.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
          pending: null,
          lanes: 0,
          hiddenCallbacks: null
        },
        callbacks: null
      };
    }
    function Rm(r, n) {
      r = r.updateQueue, n.updateQueue === r && (n.updateQueue = {
        baseState: r.baseState,
        firstBaseUpdate: r.firstBaseUpdate,
        lastBaseUpdate: r.lastBaseUpdate,
        shared: r.shared,
        callbacks: null
      });
    }
    function pa(r) {
      return {
        lane: r,
        tag: 0,
        payload: null,
        callback: null,
        next: null
      };
    }
    function da(r, n, o) {
      var s = r.updateQueue;
      if (s === null) return null;
      if (s = s.shared, (pe & 2) !== 0) {
        var f = s.pending;
        return f === null ? n.next = n : (n.next = f.next, f.next = n), s.pending = n, n = yc(r), iS(r, null, o), n;
      }
      return gc(r, s, n, o), yc(r);
    }
    function Ju(r, n, o) {
      if (n = n.updateQueue, n !== null && (n = n.shared, (o & 4194048) !== 0)) {
        var s = n.lanes;
        s &= r.pendingLanes, o |= s, n.lanes = o, ie(r, o);
      }
    }
    function Nm(r, n) {
      var o = r.updateQueue,
        s = r.alternate;
      if (s !== null && (s = s.updateQueue, o === s)) {
        var f = null,
          p = null;
        if (o = o.firstBaseUpdate, o !== null) {
          do {
            var y = {
              lane: o.lane,
              tag: o.tag,
              payload: o.payload,
              callback: null,
              next: null
            };
            p === null ? f = p = y : p = p.next = y, o = o.next;
          } while (o !== null);
          p === null ? f = p = n : p = p.next = n;
        } else f = p = n;
        o = {
          baseState: s.baseState,
          firstBaseUpdate: f,
          lastBaseUpdate: p,
          shared: s.shared,
          callbacks: s.callbacks
        }, r.updateQueue = o;
        return;
      }
      r = o.lastBaseUpdate, r === null ? o.firstBaseUpdate = n : r.next = n, o.lastBaseUpdate = n;
    }
    function Wu() {
      if (Xv) {
        var r = qo;
        if (r !== null) throw r;
      }
    }
    function $u(r, n, o, s) {
      Xv = !1;
      var f = r.updateQueue;
      Ta = !1;
      var p = f.firstBaseUpdate,
        y = f.lastBaseUpdate,
        E = f.shared.pending;
      if (E !== null) {
        f.shared.pending = null;
        var w = E,
          I = w.next;
        w.next = null, y === null ? p = I : y.next = I, y = w;
        var K = r.alternate;
        K !== null && (K = K.updateQueue, E = K.lastBaseUpdate, E !== y && (E === null ? K.firstBaseUpdate = I : E.next = I, K.lastBaseUpdate = w));
      }
      if (p !== null) {
        var H = f.baseState;
        y = 0, K = I = w = null, E = p;
        do {
          var Y = E.lane & -536870913,
            oe = Y !== E.lane;
          if (oe ? (ve & Y) === Y : (s & Y) === Y) {
            Y !== 0 && Y === To && (Xv = !0), K !== null && (K = K.next = {
              lane: 0,
              tag: E.tag,
              payload: E.payload,
              callback: null,
              next: null
            });
            e: {
              var St = r,
                Ts = E;
              Y = n;
              var _i = o;
              switch (Ts.tag) {
                case 1:
                  if (St = Ts.payload, typeof St == "function") {
                    H = St.call(_i, H, Y);
                    break e;
                  }
                  H = St;
                  break e;
                case 3:
                  St.flags = St.flags & -65537 | 128;
                case 0:
                  if (St = Ts.payload, Y = typeof St == "function" ? St.call(_i, H, Y) : St, Y == null) break e;
                  H = qv({}, H, Y);
                  break e;
                case 2:
                  Ta = !0;
              }
            }
            Y = E.callback, Y !== null && (r.flags |= 64, oe && (r.flags |= 8192), oe = f.callbacks, oe === null ? f.callbacks = [Y] : oe.push(Y));
          } else oe = {
            lane: Y,
            tag: E.tag,
            payload: E.payload,
            callback: E.callback,
            next: null
          }, K === null ? (I = K = oe, w = H) : K = K.next = oe, y |= Y;
          if (E = E.next, E === null) {
            if (E = f.shared.pending, E === null) break;
            oe = E, E = oe.next, oe.next = null, f.lastBaseUpdate = oe, f.shared.pending = null;
          }
        } while (!0);
        K === null && (w = H), f.baseState = w, f.firstBaseUpdate = I, f.lastBaseUpdate = K, p === null && (f.shared.lanes = 0), _a |= y, r.lanes = y, r.memoizedState = H;
      }
    }
    function oS(r, n) {
      if (typeof r != "function") throw Error(i(191, r));
      r.call(n);
    }
    function uS(r, n) {
      var o = r.callbacks;
      if (o !== null) for (r.callbacks = null, r = 0; r < o.length; r++) oS(o[r], n);
    }
    function sS(r, n) {
      r = zn, S(Wc, r), S(Co, n), zn = r | n.baseLanes;
    }
    function wm() {
      S(Wc, zn), S(Co, Co.current);
    }
    function Mm() {
      zn = Wc.current, x(Co), x(Wc);
    }
    function ma(r) {
      var n = r.alternate;
      S(et, et.current & 1), S(fr, r), qr === null && (n === null || Co.current !== null || n.memoizedState !== null) && (qr = r);
    }
    function Dm(r) {
      S(et, et.current), S(fr, r), qr === null && (qr = r);
    }
    function lS(r) {
      r.tag === 22 ? (S(et, et.current), S(fr, r), qr === null && (qr = r)) : va(r);
    }
    function va() {
      S(et, et.current), S(fr, fr.current);
    }
    function ir(r) {
      x(fr), qr === r && (qr = null), x(et);
    }
    function bc(r) {
      for (var n = r; n !== null;) {
        if (n.tag === 13) {
          var o = n.memoizedState;
          if (o !== null && (o = o.dehydrated, o === null || Dv(o) || Bv(o))) return n;
        } else if (n.tag === 19 && (n.memoizedProps.revealOrder === "forwards" || n.memoizedProps.revealOrder === "backwards" || n.memoizedProps.revealOrder === "unstable_legacy-backwards" || n.memoizedProps.revealOrder === "together")) {
          if ((n.flags & 128) !== 0) return n;
        } else if (n.child !== null) {
          n.child.return = n, n = n.child;
          continue;
        }
        if (n === r) break;
        for (; n.sibling === null;) {
          if (n.return === null || n.return === r) return null;
          n = n.return;
        }
        n.sibling.return = n.return, n = n.sibling;
      }
      return null;
    }
    function ke() {
      throw Error(i(321));
    }
    function Bm(r, n) {
      if (n === null) return !1;
      for (var o = 0; o < n.length && o < r.length; o++) if (!cr(r[o], n[o])) return !1;
      return !0;
    }
    function Im(r, n, o, s, f, p) {
      return Pn = p, se = n, n.memoizedState = null, n.updateQueue = null, n.lanes = 0, $.H = r === null || r.memoizedState === null ? P1 : kv, Ti = !1, p = o(s, f), Ti = !1, Ro && (p = fS(n, o, s, f)), cS(r), p;
    }
    function cS(r) {
      $.H = ys;
      var n = Ae !== null && Ae.next !== null;
      if (Pn = 0, tt = Ae = se = null, $c = !1, gs = 0, No = null, n) throw Error(i(300));
      r === null || rt || (r = r.dependencies, r !== null && we(r) && (rt = !0));
    }
    function fS(r, n, o, s) {
      se = r;
      var f = 0;
      do {
        if (Ro && (No = null), gs = 0, Ro = !1, 25 <= f) throw Error(i(301));
        if (f += 1, tt = Ae = null, r.updateQueue != null) {
          var p = r.updateQueue;
          p.lastEffect = null, p.events = null, p.stores = null, p.memoCache != null && (p.memoCache.index = 0);
        }
        $.H = U1, p = n(o, s);
      } while (Ro);
      return p;
    }
    function vz() {
      var r = $.H,
        n = r.useState()[0];
      return n = typeof n.then == "function" ? es(n) : n, r = r.useState()[0], (Ae !== null ? Ae.memoizedState : null) !== r && (se.flags |= 1024), n;
    }
    function Pm() {
      var r = ef !== 0;
      return ef = 0, r;
    }
    function Um(r, n, o) {
      n.updateQueue = r.updateQueue, n.flags &= -2053, r.lanes &= ~o;
    }
    function zm(r) {
      if ($c) {
        for (r = r.memoizedState; r !== null;) {
          var n = r.queue;
          n !== null && (n.pending = null), r = r.next;
        }
        $c = !1;
      }
      Pn = 0, tt = Ae = se = null, Ro = !1, gs = ef = 0, No = null;
    }
    function It() {
      var r = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      return tt === null ? se.memoizedState = tt = r : tt = tt.next = r, tt;
    }
    function $e() {
      if (Ae === null) {
        var r = se.alternate;
        r = r !== null ? r.memoizedState : null;
      } else r = Ae.next;
      var n = tt === null ? se.memoizedState : tt.next;
      if (n !== null) tt = n, Ae = r;else {
        if (r === null) throw se.alternate === null ? Error(i(467)) : Error(i(310));
        Ae = r, r = {
          memoizedState: Ae.memoizedState,
          baseState: Ae.baseState,
          baseQueue: Ae.baseQueue,
          queue: Ae.queue,
          next: null
        }, tt === null ? se.memoizedState = tt = r : tt = tt.next = r;
      }
      return tt;
    }
    function xc() {
      return {
        lastEffect: null,
        events: null,
        stores: null,
        memoCache: null
      };
    }
    function es(r) {
      var n = gs;
      return gs += 1, No === null && (No = []), r = tS(No, r, n), n = se, (tt === null ? n.memoizedState : tt.next) === null && (n = n.alternate, $.H = n === null || n.memoizedState === null ? P1 : kv), r;
    }
    function Sc(r) {
      if (r !== null && _typeof(r) == "object") {
        if (typeof r.then == "function") return es(r);
        if (r.$$typeof === ya) return gt(r);
      }
      throw Error(i(438, String(r)));
    }
    function Lm(r) {
      var n = null,
        o = se.updateQueue;
      if (o !== null && (n = o.memoCache), n == null) {
        var s = se.alternate;
        s !== null && (s = s.updateQueue, s !== null && (s = s.memoCache, s != null && (n = {
          data: s.data.map(function (f) {
            return f.slice();
          }),
          index: 0
        })));
      }
      if (n == null && (n = {
        data: [],
        index: 0
      }), o === null && (o = xc(), se.updateQueue = o), o.memoCache = n, o = n.data[n.index], o === void 0) for (o = n.data[n.index] = Array(r), s = 0; s < r; s++) o[s] = jz;
      return n.index++, o;
    }
    function Cn(r, n) {
      return typeof n == "function" ? n(r) : n;
    }
    function Ec(r) {
      var n = $e();
      return jm(n, Ae, r);
    }
    function jm(r, n, o) {
      var s = r.queue;
      if (s === null) throw Error(i(311));
      s.lastRenderedReducer = o;
      var f = r.baseQueue,
        p = s.pending;
      if (p !== null) {
        if (f !== null) {
          var y = f.next;
          f.next = p.next, p.next = y;
        }
        n.baseQueue = f = p, s.pending = null;
      }
      if (p = r.baseState, f === null) r.memoizedState = p;else {
        n = f.next;
        var E = y = null,
          w = null,
          I = n,
          K = !1;
        do {
          var H = I.lane & -536870913;
          if (H !== I.lane ? (ve & H) === H : (Pn & H) === H) {
            var Y = I.revertLane;
            if (Y === 0) w !== null && (w = w.next = {
              lane: 0,
              revertLane: 0,
              gesture: null,
              action: I.action,
              hasEagerState: I.hasEagerState,
              eagerState: I.eagerState,
              next: null
            }), H === To && (K = !0);else if ((Pn & Y) === Y) {
              I = I.next, Y === To && (K = !0);
              continue;
            } else H = {
              lane: 0,
              revertLane: I.revertLane,
              gesture: null,
              action: I.action,
              hasEagerState: I.hasEagerState,
              eagerState: I.eagerState,
              next: null
            }, w === null ? (E = w = H, y = p) : w = w.next = H, se.lanes |= Y, _a |= Y;
            H = I.action, Ti && o(p, H), p = I.hasEagerState ? I.eagerState : o(p, H);
          } else Y = {
            lane: H,
            revertLane: I.revertLane,
            gesture: I.gesture,
            action: I.action,
            hasEagerState: I.hasEagerState,
            eagerState: I.eagerState,
            next: null
          }, w === null ? (E = w = Y, y = p) : w = w.next = Y, se.lanes |= H, _a |= H;
          I = I.next;
        } while (I !== null && I !== n);
        if (w === null ? y = p : w.next = E, !cr(p, r.memoizedState) && (rt = !0, K && (o = qo, o !== null))) throw o;
        r.memoizedState = p, r.baseState = y, r.baseQueue = w, s.lastRenderedState = p;
      }
      return f === null && (s.lanes = 0), [r.memoizedState, s.dispatch];
    }
    function Hm(r) {
      var n = $e(),
        o = n.queue;
      if (o === null) throw Error(i(311));
      o.lastRenderedReducer = r;
      var s = o.dispatch,
        f = o.pending,
        p = n.memoizedState;
      if (f !== null) {
        o.pending = null;
        var y = f = f.next;
        do p = r(p, y.action), y = y.next; while (y !== f);
        cr(p, n.memoizedState) || (rt = !0), n.memoizedState = p, n.baseQueue === null && (n.baseState = p), o.lastRenderedState = p;
      }
      return [p, s];
    }
    function pS(r, n, o) {
      var s = se,
        f = $e(),
        p = he;
      if (p) {
        if (o === void 0) throw Error(i(407));
        o = o();
      } else o = n();
      var y = !cr((Ae || f).memoizedState, o);
      if (y && (f.memoizedState = o, rt = !0), f = f.queue, Km(vS.bind(null, s, f, r), [r]), f.getSnapshot !== n || y || tt !== null && tt.memoizedState.tag & 1) {
        if (s.flags |= 2048, lo(9, {
          destroy: void 0
        }, mS.bind(null, s, f, o, n), null), Re === null) throw Error(i(349));
        p || (Pn & 127) !== 0 || dS(s, n, o);
      }
      return o;
    }
    function dS(r, n, o) {
      r.flags |= 16384, r = {
        getSnapshot: n,
        value: o
      }, n = se.updateQueue, n === null ? (n = xc(), se.updateQueue = n, n.stores = [r]) : (o = n.stores, o === null ? n.stores = [r] : o.push(r));
    }
    function mS(r, n, o, s) {
      n.value = o, n.getSnapshot = s, hS(n) && gS(r);
    }
    function vS(r, n, o) {
      return o(function () {
        hS(n) && gS(r);
      });
    }
    function hS(r) {
      var n = r.getSnapshot;
      r = r.value;
      try {
        var o = n();
        return !cr(r, o);
      } catch (_unused62) {
        return !0;
      }
    }
    function gS(r) {
      var n = fi(r, 2);
      n !== null && Ft(n, r, 2);
    }
    function Fm(r) {
      var n = It();
      if (typeof r == "function") {
        var o = r;
        if (r = o(), Ti) {
          ce(!0);
          try {
            o();
          } finally {
            ce(!1);
          }
        }
      }
      return n.memoizedState = n.baseState = r, n.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Cn,
        lastRenderedState: r
      }, n;
    }
    function yS(r, n, o, s) {
      return r.baseState = o, jm(r, Ae, typeof s == "function" ? s : Cn);
    }
    function hz(r, n, o, s, f) {
      if (_c(r)) throw Error(i(485));
      if (r = n.action, r !== null) {
        var p = {
          payload: f,
          action: r,
          next: null,
          isTransition: !0,
          status: "pending",
          value: null,
          reason: null,
          listeners: [],
          then: function then(y) {
            p.listeners.push(y);
          }
        };
        $.T !== null ? o(!0) : p.isTransition = !1, s(p), o = n.pending, o === null ? (p.next = n.pending = p, bS(n, p)) : (p.next = o.next, n.pending = o.next = p);
      }
    }
    function bS(r, n) {
      var o = n.action,
        s = n.payload,
        f = r.state;
      if (n.isTransition) {
        var p = $.T,
          y = {};
        $.T = y;
        try {
          var E = o(f, s),
            w = $.S;
          w !== null && w(y, E), xS(r, n, E);
        } catch (I) {
          Gm(r, n, I);
        } finally {
          p !== null && y.types !== null && (p.types = y.types), $.T = p;
        }
      } else try {
        p = o(f, s), xS(r, n, p);
      } catch (I) {
        Gm(r, n, I);
      }
    }
    function xS(r, n, o) {
      o !== null && _typeof(o) == "object" && typeof o.then == "function" ? o.then(function (s) {
        SS(r, n, s);
      }, function (s) {
        return Gm(r, n, s);
      }) : SS(r, n, o);
    }
    function SS(r, n, o) {
      n.status = "fulfilled", n.value = o, ES(n), r.state = o, n = r.pending, n !== null && (o = n.next, o === n ? r.pending = null : (o = o.next, n.next = o, bS(r, o)));
    }
    function Gm(r, n, o) {
      var s = r.pending;
      if (r.pending = null, s !== null) {
        s = s.next;
        do n.status = "rejected", n.reason = o, ES(n), n = n.next; while (n !== s);
      }
      r.action = null;
    }
    function ES(r) {
      r = r.listeners;
      for (var n = 0; n < r.length; n++) (0, r[n])();
    }
    function TS(r, n) {
      return n;
    }
    function qS(r, n) {
      if (he) {
        var o = Re.formState;
        if (o !== null) {
          e: {
            var s = se;
            if (he) {
              if (Fe) {
                var f = DL(Fe, Er);
                if (f) {
                  Fe = y1(f), s = BL(f);
                  break e;
                }
              }
              Rt(s);
            }
            s = !1;
          }
          s && (n = o[0]);
        }
      }
      o = It(), o.memoizedState = o.baseState = n, s = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: TS,
        lastRenderedState: n
      }, o.queue = s, o = FS.bind(null, se, s), s.dispatch = o, s = Fm(!1);
      var p = km.bind(null, se, !1, s.queue);
      return s = It(), f = {
        state: n,
        dispatch: null,
        action: r,
        pending: null
      }, s.queue = f, o = hz.bind(null, se, f, p, o), f.dispatch = o, s.memoizedState = r, [n, o, !1];
    }
    function _S(r) {
      var n = $e();
      return AS(n, Ae, r);
    }
    function AS(r, n, o) {
      if (n = jm(r, n, TS)[0], r = Ec(Cn)[0], _typeof(n) == "object" && n !== null && typeof n.then == "function") try {
        var s = es(n);
      } catch (y) {
        throw y === _o ? Zc : y;
      } else s = n;
      n = $e();
      var f = n.queue,
        p = f.dispatch;
      return o !== n.memoizedState && (se.flags |= 2048, lo(9, {
        destroy: void 0
      }, gz.bind(null, f, o), null)), [s, p, r];
    }
    function gz(r, n) {
      r.action = n;
    }
    function OS(r) {
      var n = $e(),
        o = Ae;
      if (o !== null) return AS(n, o, r);
      $e(), n = n.memoizedState, o = $e();
      var s = o.queue.dispatch;
      return o.memoizedState = r, [n, s, !1];
    }
    function lo(r, n, o, s) {
      return r = {
        tag: r,
        create: o,
        deps: s,
        inst: n,
        next: null
      }, n = se.updateQueue, n === null && (n = xc(), se.updateQueue = n), o = n.lastEffect, o === null ? n.lastEffect = r.next = r : (s = o.next, o.next = r, r.next = s, n.lastEffect = r), r;
    }
    function CS() {
      return $e().memoizedState;
    }
    function Tc(r, n, o, s) {
      var f = It();
      se.flags |= r, f.memoizedState = lo(1 | n, {
        destroy: void 0
      }, o, s === void 0 ? null : s);
    }
    function qc(r, n, o, s) {
      var f = $e();
      s = s === void 0 ? null : s;
      var p = f.memoizedState.inst;
      Ae !== null && s !== null && Bm(s, Ae.memoizedState.deps) ? f.memoizedState = lo(n, p, o, s) : (se.flags |= r, f.memoizedState = lo(1 | n, p, o, s));
    }
    function RS(r, n) {
      Tc(8390656, 8, r, n);
    }
    function Km(r, n) {
      qc(2048, 8, r, n);
    }
    function yz(r) {
      se.flags |= 4;
      var n = se.updateQueue;
      if (n === null) n = xc(), se.updateQueue = n, n.events = [r];else {
        var o = n.events;
        o === null ? n.events = [r] : o.push(r);
      }
    }
    function NS(r) {
      var n = $e().memoizedState;
      return yz({
        ref: n,
        nextImpl: r
      }), function () {
        if ((pe & 2) !== 0) throw Error(i(440));
        return n.impl.apply(void 0, arguments);
      };
    }
    function wS(r, n) {
      return qc(4, 2, r, n);
    }
    function MS(r, n) {
      return qc(4, 4, r, n);
    }
    function DS(r, n) {
      if (typeof n == "function") {
        r = r();
        var o = n(r);
        return function () {
          typeof o == "function" ? o() : n(null);
        };
      }
      if (n != null) return r = r(), n.current = r, function () {
        n.current = null;
      };
    }
    function BS(r, n, o) {
      o = o != null ? o.concat([r]) : null, qc(4, 4, DS.bind(null, n, r), o);
    }
    function Vm() {}
    function IS(r, n) {
      var o = $e();
      n = n === void 0 ? null : n;
      var s = o.memoizedState;
      return n !== null && Bm(n, s[1]) ? s[0] : (o.memoizedState = [r, n], r);
    }
    function PS(r, n) {
      var o = $e();
      n = n === void 0 ? null : n;
      var s = o.memoizedState;
      if (n !== null && Bm(n, s[1])) return s[0];
      if (s = r(), Ti) {
        ce(!0);
        try {
          r();
        } finally {
          ce(!1);
        }
      }
      return o.memoizedState = [s, n], s;
    }
    function Ym(r, n, o) {
      return o === void 0 || (Pn & 1073741824) !== 0 && (ve & 261930) === 0 ? r.memoizedState = n : (r.memoizedState = o, r = ME(), se.lanes |= r, _a |= r, o);
    }
    function US(r, n, o, s) {
      return cr(o, n) ? o : Co.current !== null ? (r = Ym(r, o, s), cr(r, n) || (rt = !0), r) : (Pn & 42) === 0 || (Pn & 1073741824) !== 0 && (ve & 261930) === 0 ? (rt = !0, r.memoizedState = o) : (r = ME(), se.lanes |= r, _a |= r, n);
    }
    function zS(r, n, o, s, f) {
      var p = Bn();
      ft(p !== 0 && 8 > p ? p : 8);
      var y = $.T,
        E = {};
      $.T = E, km(r, !1, n, o);
      try {
        var w = f(),
          I = $.S;
        if (I !== null && I(E, w), w !== null && _typeof(w) == "object" && typeof w.then == "function") {
          var K = mz(w, s);
          ts(r, n, K, or(r));
        } else ts(r, n, s, or(r));
      } catch (H) {
        ts(r, n, {
          then: function then() {},
          status: "rejected",
          reason: H
        }, or());
      } finally {
        ft(p), y !== null && E.types !== null && (y.types = E.types), $.T = y;
      }
    }
    function LS(r) {
      var n = r.memoizedState;
      if (n !== null) return n;
      n = {
        memoizedState: ho,
        baseState: ho,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: Cn,
          lastRenderedState: ho
        },
        next: null
      };
      var o = {};
      return n.next = {
        memoizedState: o,
        baseState: o,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: Cn,
          lastRenderedState: o
        },
        next: null
      }, r.memoizedState = n, r = r.alternate, r !== null && (r.memoizedState = n), n;
    }
    function Xm() {
      return gt(gi);
    }
    function jS() {
      return $e().memoizedState;
    }
    function HS() {
      return $e().memoizedState;
    }
    function bz(r) {
      for (var n = r.return; n !== null;) {
        switch (n.tag) {
          case 24:
          case 3:
            var o = or();
            r = pa(o);
            var s = da(n, r, o);
            s !== null && (Ft(s, n, o), Ju(s, n, o)), n = {
              cache: qm()
            }, r.payload = n;
            return;
        }
        n = n.return;
      }
    }
    function xz(r, n, o) {
      var s = or();
      o = {
        lane: s,
        revertLane: 0,
        gesture: null,
        action: o,
        hasEagerState: !1,
        eagerState: null,
        next: null
      }, _c(r) ? GS(n, o) : (o = Om(r, n, o, s), o !== null && (Ft(o, r, s), KS(o, n, s)));
    }
    function FS(r, n, o) {
      var s = or();
      ts(r, n, o, s);
    }
    function ts(r, n, o, s) {
      var f = {
        lane: s,
        revertLane: 0,
        gesture: null,
        action: o,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (_c(r)) GS(n, f);else {
        var p = r.alternate;
        if (r.lanes === 0 && (p === null || p.lanes === 0) && (p = n.lastRenderedReducer, p !== null)) try {
          var y = n.lastRenderedState,
            E = p(y, o);
          if (f.hasEagerState = !0, f.eagerState = E, cr(E, y)) return gc(r, n, f, 0), Re === null && hc(), !1;
        } catch (_unused63) {}
        if (o = Om(r, n, f, s), o !== null) return Ft(o, r, s), KS(o, n, s), !0;
      }
      return !1;
    }
    function km(r, n, o, s) {
      if (s = {
        lane: 2,
        revertLane: _m(),
        gesture: null,
        action: s,
        hasEagerState: !1,
        eagerState: null,
        next: null
      }, _c(r)) {
        if (n) throw Error(i(479));
      } else n = Om(r, o, s, 2), n !== null && Ft(n, r, 2);
    }
    function _c(r) {
      var n = r.alternate;
      return r === se || n !== null && n === se;
    }
    function GS(r, n) {
      Ro = $c = !0;
      var o = r.pending;
      o === null ? n.next = n : (n.next = o.next, o.next = n), r.pending = n;
    }
    function KS(r, n, o) {
      if ((o & 4194048) !== 0) {
        var s = n.lanes;
        s &= r.pendingLanes, o |= s, n.lanes = o, ie(r, o);
      }
    }
    function Qm(r, n, o, s) {
      n = r.memoizedState, o = o(s, n), o = o == null ? n : qv({}, n, o), r.memoizedState = o, r.lanes === 0 && (r.updateQueue.baseState = o);
    }
    function VS(r, n, o, s, f, p, y) {
      return r = r.stateNode, typeof r.shouldComponentUpdate == "function" ? r.shouldComponentUpdate(s, p, y) : n.prototype && n.prototype.isPureReactComponent ? !dc(o, s) || !dc(f, p) : !0;
    }
    function YS(r, n, o, s) {
      r = n.state, typeof n.componentWillReceiveProps == "function" && n.componentWillReceiveProps(o, s), typeof n.UNSAFE_componentWillReceiveProps == "function" && n.UNSAFE_componentWillReceiveProps(o, s), n.state !== r && Qv.enqueueReplaceState(n, n.state, null);
    }
    function pi(r, n) {
      var o = n;
      if ("ref" in n) {
        o = {};
        for (var s in n) s !== "ref" && (o[s] = n[s]);
      }
      if (r = r.defaultProps) {
        o === n && (o = qv({}, o));
        for (var f in r) o[f] === void 0 && (o[f] = r[f]);
      }
      return o;
    }
    function Ac(r, n) {
      try {
        var o = r.onUncaughtError;
        o(n.value, {
          componentStack: n.stack
        });
      } catch (s) {
        setTimeout(function () {
          throw s;
        });
      }
    }
    function XS(r, n, o) {
      try {
        var s = r.onCaughtError;
        s(o.value, {
          componentStack: o.stack,
          errorBoundary: n.tag === 1 ? n.stateNode : null
        });
      } catch (f) {
        setTimeout(function () {
          throw f;
        });
      }
    }
    function Zm(r, n, o) {
      return o = pa(o), o.tag = 3, o.payload = {
        element: null
      }, o.callback = function () {
        Ac(r, n);
      }, o;
    }
    function kS(r) {
      return r = pa(r), r.tag = 3, r;
    }
    function QS(r, n, o, s) {
      var f = o.type.getDerivedStateFromError;
      if (typeof f == "function") {
        var p = s.value;
        r.payload = function () {
          return f(p);
        }, r.callback = function () {
          XS(n, o, s);
        };
      }
      var y = o.stateNode;
      y !== null && typeof y.componentDidCatch == "function" && (r.callback = function () {
        XS(n, o, s), typeof f != "function" && (Aa === null ? Aa = new Set([this]) : Aa.add(this));
        var E = s.stack;
        this.componentDidCatch(s.value, {
          componentStack: E !== null ? E : ""
        });
      });
    }
    function Sz(r, n, o, s, f) {
      if (o.flags |= 32768, s !== null && _typeof(s) == "object" && typeof s.then == "function") {
        if (n = o.alternate, n !== null && _e(n, o, f, !0), o = fr.current, o !== null) {
          switch (o.tag) {
            case 31:
            case 13:
              return qr === null ? Ic() : o.alternate === null && Qe === 0 && (Qe = 3), o.flags &= -257, o.flags |= 65536, o.lanes = f, s === Jc ? o.flags |= 16384 : (n = o.updateQueue, n === null ? o.updateQueue = new Set([s]) : n.add(s), bv(r, s, f)), !1;
            case 22:
              return o.flags |= 65536, s === Jc ? o.flags |= 16384 : (n = o.updateQueue, n === null ? (n = {
                transitions: null,
                markerInstances: null,
                retryQueue: new Set([s])
              }, o.updateQueue = n) : (o = n.retryQueue, o === null ? n.retryQueue = new Set([s]) : o.add(s)), bv(r, s, f)), !1;
          }
          throw Error(i(435, o.tag));
        }
        return bv(r, s, f), Ic(), !1;
      }
      if (he) return n = fr.current, n !== null ? ((n.flags & 65536) === 0 && (n.flags |= 256), n.flags |= 65536, n.lanes = f, s !== Hv && (r = Error(i(422), {
        cause: s
      }), si(Pe(r, o)))) : (s !== Hv && (n = Error(i(423), {
        cause: s
      }), si(Pe(n, o))), r = r.current.alternate, r.flags |= 65536, f &= -f, r.lanes |= f, s = Pe(s, o), f = Zm(r.stateNode, s, f), Nm(r, f), Qe !== 4 && (Qe = 2)), !1;
      var p = Error(i(520), {
        cause: s
      });
      if (p = Pe(p, o), xs === null ? xs = [p] : xs.push(p), Qe !== 4 && (Qe = 2), n === null) return !0;
      s = Pe(s, o), o = n;
      do {
        switch (o.tag) {
          case 3:
            return o.flags |= 65536, r = f & -f, o.lanes |= r, r = Zm(o.stateNode, s, r), Nm(o, r), !1;
          case 1:
            if (n = o.type, p = o.stateNode, (o.flags & 128) === 0 && (typeof n.getDerivedStateFromError == "function" || p !== null && typeof p.componentDidCatch == "function" && (Aa === null || !Aa.has(p)))) return o.flags |= 65536, f &= -f, o.lanes |= f, f = kS(f), QS(f, r, o, s), Nm(o, f), !1;
        }
        o = o.return;
      } while (o !== null);
      return !1;
    }
    function yt(r, n, o, s) {
      n.child = r === null ? I1(n, null, o, s) : Ei(n, r.child, o, s);
    }
    function ZS(r, n, o, s, f) {
      o = o.render;
      var p = n.ref;
      if ("ref" in s) {
        var y = {};
        for (var E in s) E !== "ref" && (y[E] = s[E]);
      } else y = s;
      return Xe(n), s = Im(r, n, o, y, p, f), E = Pm(), r !== null && !rt ? (Um(r, n, f), Rn(r, n, f)) : (he && E && z(n), n.flags |= 1, yt(r, n, s, f), n.child);
    }
    function JS(r, n, o, s, f) {
      if (r === null) {
        var p = o.type;
        return typeof p == "function" && !xv(p) && p.defaultProps === void 0 && o.compare === null ? (n.tag = 15, n.type = p, WS(r, n, p, s, f)) : (r = Uc(o.type, null, s, n, n.mode, f), r.ref = n.ref, r.return = n, n.child = r);
      }
      if (p = r.child, !nv(r, f)) {
        var y = p.memoizedProps;
        if (o = o.compare, o = o !== null ? o : dc, o(y, s) && r.ref === n.ref) return Rn(r, n, f);
      }
      return n.flags |= 1, r = Mn(p, s), r.ref = n.ref, r.return = n, n.child = r;
    }
    function WS(r, n, o, s, f) {
      if (r !== null) {
        var p = r.memoizedProps;
        if (dc(p, s) && r.ref === n.ref) if (rt = !1, n.pendingProps = s = p, nv(r, f)) (r.flags & 131072) !== 0 && (rt = !0);else return n.lanes = r.lanes, Rn(r, n, f);
      }
      return Jm(r, n, o, s, f);
    }
    function $S(r, n, o, s) {
      var f = s.children,
        p = r !== null ? r.memoizedState : null;
      if (r === null && n.stateNode === null && (n.stateNode = {
        _visibility: 1,
        _pendingMarkers: null,
        _retryCache: null,
        _transitions: null
      }), s.mode === "hidden") {
        if ((n.flags & 128) !== 0) {
          if (p = p !== null ? p.baseLanes | o : o, r !== null) {
            for (s = n.child = r.child, f = 0; s !== null;) f = f | s.lanes | s.childLanes, s = s.sibling;
            s = f & ~p;
          } else s = 0, n.child = null;
          return eE(r, n, p, o, s);
        }
        if ((o & 536870912) !== 0) n.memoizedState = {
          baseLanes: 0,
          cachePool: null
        }, r !== null && pc(n, p !== null ? p.cachePool : null), p !== null ? sS(n, p) : wm(), lS(n);else return s = n.lanes = 536870912, eE(r, n, p !== null ? p.baseLanes | o : o, o, s);
      } else p !== null ? (pc(n, p.cachePool), sS(n, p), va(n), n.memoizedState = null) : (r !== null && pc(n, null), wm(), va(n));
      return yt(r, n, f, o), n.child;
    }
    function rs(r, n) {
      return r !== null && r.tag === 22 || n.stateNode !== null || (n.stateNode = {
        _visibility: 1,
        _pendingMarkers: null,
        _retryCache: null,
        _transitions: null
      }), n.sibling;
    }
    function eE(r, n, o, s, f) {
      var p = Am();
      return p = p === null ? null : {
        parent: Dn ? Ge._currentValue : Ge._currentValue2,
        pool: p
      }, n.memoizedState = {
        baseLanes: o,
        cachePool: p
      }, r !== null && pc(n, null), wm(), lS(n), r !== null && _e(r, n, s, !0), n.childLanes = f, null;
    }
    function Oc(r, n) {
      return n = Rc({
        mode: n.mode,
        children: n.children
      }, r.mode), n.ref = r.ref, r.child = n, n.return = r, n;
    }
    function tE(r, n, o) {
      return Ei(n, r.child, null, o), r = Oc(n, n.pendingProps), r.flags |= 2, ir(n), n.memoizedState = null, r;
    }
    function Ez(r, n, o) {
      var s = n.pendingProps,
        f = (n.flags & 128) !== 0;
      if (n.flags &= -129, r === null) {
        if (he) {
          if (s.mode === "hidden") return r = Oc(n, s), n.lanes = 536870912, rs(null, r);
          if (Dm(n), (r = Fe) ? (r = GL(r, Er), r !== null && (n.memoizedState = {
            dehydrated: r,
            treeContext: xa !== null ? {
              id: tn,
              overflow: rn
            } : null,
            retryLane: 536870912,
            hydrationErrors: null
          }, o = WE(r), o.return = n, n.child = o, xt = n, Fe = null)) : r = null, r === null) throw Rt(n);
          return n.lanes = 536870912, null;
        }
        return Oc(n, s);
      }
      var p = r.memoizedState;
      if (p !== null) {
        var y = p.dehydrated;
        if (Dm(n), f) {
          if (n.flags & 256) n.flags &= -257, n = tE(r, n, o);else if (n.memoizedState !== null) n.child = r.child, n.flags |= 128, n = null;else throw Error(i(558));
        } else if (rt || _e(r, n, o, !1), f = (o & r.childLanes) !== 0, rt || f) {
          if (s = Re, s !== null && (y = k(s, o), y !== 0 && y !== p.retryLane)) throw p.retryLane = y, fi(r, y), Ft(s, r, y), Zv;
          Ic(), n = tE(r, n, o);
        } else r = p.treeContext, Mt && (Fe = zL(y), xt = n, he = !0, Ea = null, Er = !1, r !== null && Zr(n, r)), n = Oc(n, s), n.flags |= 4096;
        return n;
      }
      return r = Mn(r.child, {
        mode: s.mode,
        children: s.children
      }), r.ref = n.ref, n.child = r, r.return = n, r;
    }
    function Cc(r, n) {
      var o = n.ref;
      if (o === null) r !== null && r.ref !== null && (n.flags |= 4194816);else {
        if (typeof o != "function" && _typeof(o) != "object") throw Error(i(284));
        (r === null || r.ref !== o) && (n.flags |= 4194816);
      }
    }
    function Jm(r, n, o, s, f) {
      return Xe(n), o = Im(r, n, o, s, void 0, f), s = Pm(), r !== null && !rt ? (Um(r, n, f), Rn(r, n, f)) : (he && s && z(n), n.flags |= 1, yt(r, n, o, f), n.child);
    }
    function rE(r, n, o, s, f, p) {
      return Xe(n), n.updateQueue = null, o = fS(n, s, o, f), cS(r), s = Pm(), r !== null && !rt ? (Um(r, n, p), Rn(r, n, p)) : (he && s && z(n), n.flags |= 1, yt(r, n, o, p), n.child);
    }
    function nE(r, n, o, s, f) {
      if (Xe(n), n.stateNode === null) {
        var p = bo,
          y = o.contextType;
        _typeof(y) == "object" && y !== null && (p = gt(y)), p = new o(s, p), n.memoizedState = p.state !== null && p.state !== void 0 ? p.state : null, p.updater = Qv, n.stateNode = p, p._reactInternals = n, p = n.stateNode, p.props = s, p.state = n.memoizedState, p.refs = {}, Cm(n), y = o.contextType, p.context = _typeof(y) == "object" && y !== null ? gt(y) : bo, p.state = n.memoizedState, y = o.getDerivedStateFromProps, typeof y == "function" && (Qm(n, o, y, s), p.state = n.memoizedState), typeof o.getDerivedStateFromProps == "function" || typeof p.getSnapshotBeforeUpdate == "function" || typeof p.UNSAFE_componentWillMount != "function" && typeof p.componentWillMount != "function" || (y = p.state, typeof p.componentWillMount == "function" && p.componentWillMount(), typeof p.UNSAFE_componentWillMount == "function" && p.UNSAFE_componentWillMount(), y !== p.state && Qv.enqueueReplaceState(p, p.state, null), $u(n, s, p, f), Wu(), p.state = n.memoizedState), typeof p.componentDidMount == "function" && (n.flags |= 4194308), s = !0;
      } else if (r === null) {
        p = n.stateNode;
        var E = n.memoizedProps,
          w = pi(o, E);
        p.props = w;
        var I = p.context,
          K = o.contextType;
        y = bo, _typeof(K) == "object" && K !== null && (y = gt(K));
        var H = o.getDerivedStateFromProps;
        K = typeof H == "function" || typeof p.getSnapshotBeforeUpdate == "function", E = n.pendingProps !== E, K || typeof p.UNSAFE_componentWillReceiveProps != "function" && typeof p.componentWillReceiveProps != "function" || (E || I !== y) && YS(n, p, s, y), Ta = !1;
        var Y = n.memoizedState;
        p.state = Y, $u(n, s, p, f), Wu(), I = n.memoizedState, E || Y !== I || Ta ? (typeof H == "function" && (Qm(n, o, H, s), I = n.memoizedState), (w = Ta || VS(n, o, w, s, Y, I, y)) ? (K || typeof p.UNSAFE_componentWillMount != "function" && typeof p.componentWillMount != "function" || (typeof p.componentWillMount == "function" && p.componentWillMount(), typeof p.UNSAFE_componentWillMount == "function" && p.UNSAFE_componentWillMount()), typeof p.componentDidMount == "function" && (n.flags |= 4194308)) : (typeof p.componentDidMount == "function" && (n.flags |= 4194308), n.memoizedProps = s, n.memoizedState = I), p.props = s, p.state = I, p.context = y, s = w) : (typeof p.componentDidMount == "function" && (n.flags |= 4194308), s = !1);
      } else {
        p = n.stateNode, Rm(r, n), y = n.memoizedProps, K = pi(o, y), p.props = K, H = n.pendingProps, Y = p.context, I = o.contextType, w = bo, _typeof(I) == "object" && I !== null && (w = gt(I)), E = o.getDerivedStateFromProps, (I = typeof E == "function" || typeof p.getSnapshotBeforeUpdate == "function") || typeof p.UNSAFE_componentWillReceiveProps != "function" && typeof p.componentWillReceiveProps != "function" || (y !== H || Y !== w) && YS(n, p, s, w), Ta = !1, Y = n.memoizedState, p.state = Y, $u(n, s, p, f), Wu();
        var oe = n.memoizedState;
        y !== H || Y !== oe || Ta || r !== null && r.dependencies !== null && we(r.dependencies) ? (typeof E == "function" && (Qm(n, o, E, s), oe = n.memoizedState), (K = Ta || VS(n, o, K, s, Y, oe, w) || r !== null && r.dependencies !== null && we(r.dependencies)) ? (I || typeof p.UNSAFE_componentWillUpdate != "function" && typeof p.componentWillUpdate != "function" || (typeof p.componentWillUpdate == "function" && p.componentWillUpdate(s, oe, w), typeof p.UNSAFE_componentWillUpdate == "function" && p.UNSAFE_componentWillUpdate(s, oe, w)), typeof p.componentDidUpdate == "function" && (n.flags |= 4), typeof p.getSnapshotBeforeUpdate == "function" && (n.flags |= 1024)) : (typeof p.componentDidUpdate != "function" || y === r.memoizedProps && Y === r.memoizedState || (n.flags |= 4), typeof p.getSnapshotBeforeUpdate != "function" || y === r.memoizedProps && Y === r.memoizedState || (n.flags |= 1024), n.memoizedProps = s, n.memoizedState = oe), p.props = s, p.state = oe, p.context = w, s = K) : (typeof p.componentDidUpdate != "function" || y === r.memoizedProps && Y === r.memoizedState || (n.flags |= 4), typeof p.getSnapshotBeforeUpdate != "function" || y === r.memoizedProps && Y === r.memoizedState || (n.flags |= 1024), s = !1);
      }
      return p = s, Cc(r, n), s = (n.flags & 128) !== 0, p || s ? (p = n.stateNode, o = s && typeof o.getDerivedStateFromError != "function" ? null : p.render(), n.flags |= 1, r !== null && s ? (n.child = Ei(n, r.child, null, f), n.child = Ei(n, null, o, f)) : yt(r, n, o, f), n.memoizedState = p.state, r = n.child) : r = Rn(r, n, f), r;
    }
    function aE(r, n, o, s) {
      return On(), n.flags |= 256, yt(r, n, o, s), n.child;
    }
    function Wm(r) {
      return {
        baseLanes: r,
        cachePool: $x()
      };
    }
    function $m(r, n, o) {
      return r = r !== null ? r.childLanes & ~o : 0, n && (r |= dr), r;
    }
    function iE(r, n, o) {
      var s = n.pendingProps,
        f = !1,
        p = (n.flags & 128) !== 0,
        y;
      if ((y = p) || (y = r !== null && r.memoizedState === null ? !1 : (et.current & 2) !== 0), y && (f = !0, n.flags &= -129), y = (n.flags & 32) !== 0, n.flags &= -33, r === null) {
        if (he) {
          if (f ? ma(n) : va(n), (r = Fe) ? (r = KL(r, Er), r !== null && (n.memoizedState = {
            dehydrated: r,
            treeContext: xa !== null ? {
              id: tn,
              overflow: rn
            } : null,
            retryLane: 536870912,
            hydrationErrors: null
          }, o = WE(r), o.return = n, n.child = o, xt = n, Fe = null)) : r = null, r === null) throw Rt(n);
          return Bv(r) ? n.lanes = 32 : n.lanes = 536870912, null;
        }
        var E = s.children;
        return s = s.fallback, f ? (va(n), f = n.mode, E = Rc({
          mode: "hidden",
          children: E
        }, f), s = vi(s, f, o, null), E.return = n, s.return = n, E.sibling = s, n.child = E, s = n.child, s.memoizedState = Wm(o), s.childLanes = $m(r, y, o), n.memoizedState = Jv, rs(null, s)) : (ma(n), ev(n, E));
      }
      var w = r.memoizedState;
      if (w !== null && (E = w.dehydrated, E !== null)) {
        if (p) n.flags & 256 ? (ma(n), n.flags &= -257, n = tv(r, n, o)) : n.memoizedState !== null ? (va(n), n.child = r.child, n.flags |= 128, n = null) : (va(n), E = s.fallback, f = n.mode, s = Rc({
          mode: "visible",
          children: s.children
        }, f), E = vi(E, f, o, null), E.flags |= 2, s.return = n, E.return = n, s.sibling = E, n.child = s, Ei(n, r.child, null, o), s = n.child, s.memoizedState = Wm(o), s.childLanes = $m(r, y, o), n.memoizedState = Jv, n = rs(null, s));else if (ma(n), Bv(E)) y = wL(E).digest, s = Error(i(419)), s.stack = "", s.digest = y, si({
          value: s,
          source: null,
          stack: null
        }), n = tv(r, n, o);else if (rt || _e(r, n, o, !1), y = (o & r.childLanes) !== 0, rt || y) {
          if (y = Re, y !== null && (s = k(y, o), s !== 0 && s !== w.retryLane)) throw w.retryLane = s, fi(r, s), Ft(y, r, s), Zv;
          Dv(E) || Ic(), n = tv(r, n, o);
        } else Dv(E) ? (n.flags |= 192, n.child = r.child, n = null) : (r = w.treeContext, Mt && (Fe = LL(E), xt = n, he = !0, Ea = null, Er = !1, r !== null && Zr(n, r)), n = ev(n, s.children), n.flags |= 4096);
        return n;
      }
      return f ? (va(n), E = s.fallback, f = n.mode, w = r.child, p = w.sibling, s = Mn(w, {
        mode: "hidden",
        children: s.children
      }), s.subtreeFlags = w.subtreeFlags & 65011712, p !== null ? E = Mn(p, E) : (E = vi(E, f, o, null), E.flags |= 2), E.return = n, s.return = n, s.sibling = E, n.child = s, rs(null, s), s = n.child, E = r.child.memoizedState, E === null ? E = Wm(o) : (f = E.cachePool, f !== null ? (w = Dn ? Ge._currentValue : Ge._currentValue2, f = f.parent !== w ? {
        parent: w,
        pool: w
      } : f) : f = $x(), E = {
        baseLanes: E.baseLanes | o,
        cachePool: f
      }), s.memoizedState = E, s.childLanes = $m(r, y, o), n.memoizedState = Jv, rs(r.child, s)) : (ma(n), o = r.child, r = o.sibling, o = Mn(o, {
        mode: "visible",
        children: s.children
      }), o.return = n, o.sibling = null, r !== null && (y = n.deletions, y === null ? (n.deletions = [r], n.flags |= 16) : y.push(r)), n.child = o, n.memoizedState = null, o);
    }
    function ev(r, n) {
      return n = Rc({
        mode: "visible",
        children: n
      }, r.mode), n.return = r, r.child = n;
    }
    function Rc(r, n) {
      return r = t(22, r, null, n), r.lanes = 0, r;
    }
    function tv(r, n, o) {
      return Ei(n, r.child, null, o), r = ev(n, n.pendingProps.children), r.flags |= 2, n.memoizedState = null, r;
    }
    function oE(r, n, o) {
      r.lanes |= n;
      var s = r.alternate;
      s !== null && (s.lanes |= n), li(r.return, n, o);
    }
    function rv(r, n, o, s, f, p) {
      var y = r.memoizedState;
      y === null ? r.memoizedState = {
        isBackwards: n,
        rendering: null,
        renderingStartTime: 0,
        last: s,
        tail: o,
        tailMode: f,
        treeForkCount: p
      } : (y.isBackwards = n, y.rendering = null, y.renderingStartTime = 0, y.last = s, y.tail = o, y.tailMode = f, y.treeForkCount = p);
    }
    function uE(r, n, o) {
      var s = n.pendingProps,
        f = s.revealOrder,
        p = s.tail;
      s = s.children;
      var y = et.current,
        E = (y & 2) !== 0;
      if (E ? (y = y & 1 | 2, n.flags |= 128) : y &= 1, S(et, y), yt(r, n, s, o), s = he ? ds : 0, !E && r !== null && (r.flags & 128) !== 0) e: for (r = n.child; r !== null;) {
        if (r.tag === 13) r.memoizedState !== null && oE(r, o, n);else if (r.tag === 19) oE(r, o, n);else if (r.child !== null) {
          r.child.return = r, r = r.child;
          continue;
        }
        if (r === n) break e;
        for (; r.sibling === null;) {
          if (r.return === null || r.return === n) break e;
          r = r.return;
        }
        r.sibling.return = r.return, r = r.sibling;
      }
      switch (f) {
        case "forwards":
          for (o = n.child, f = null; o !== null;) r = o.alternate, r !== null && bc(r) === null && (f = o), o = o.sibling;
          o = f, o === null ? (f = n.child, n.child = null) : (f = o.sibling, o.sibling = null), rv(n, !1, f, o, p, s);
          break;
        case "backwards":
        case "unstable_legacy-backwards":
          for (o = null, f = n.child, n.child = null; f !== null;) {
            if (r = f.alternate, r !== null && bc(r) === null) {
              n.child = f;
              break;
            }
            r = f.sibling, f.sibling = o, o = f, f = r;
          }
          rv(n, !0, o, null, p, s);
          break;
        case "together":
          rv(n, !1, null, null, void 0, s);
          break;
        default:
          n.memoizedState = null;
      }
      return n.child;
    }
    function Rn(r, n, o) {
      if (r !== null && (n.dependencies = r.dependencies), _a |= n.lanes, (o & n.childLanes) === 0) if (r !== null) {
        if (_e(r, n, o, !1), (o & n.childLanes) === 0) return null;
      } else return null;
      if (r !== null && n.child !== r.child) throw Error(i(153));
      if (n.child !== null) {
        for (r = n.child, o = Mn(r, r.pendingProps), n.child = o, o.return = n; r.sibling !== null;) r = r.sibling, o = o.sibling = Mn(r, r.pendingProps), o.return = n;
        o.sibling = null;
      }
      return n.child;
    }
    function nv(r, n) {
      return (r.lanes & n) !== 0 ? !0 : (r = r.dependencies, !!(r !== null && we(r)));
    }
    function Tz(r, n, o) {
      switch (n.tag) {
        case 3:
          We(n, n.stateNode.containerInfo), br(n, Ge, r.memoizedState.cache), On();
          break;
        case 27:
        case 5:
          _n(n);
          break;
        case 4:
          We(n, n.stateNode.containerInfo);
          break;
        case 10:
          br(n, n.type, n.memoizedProps.value);
          break;
        case 31:
          if (n.memoizedState !== null) return n.flags |= 128, Dm(n), null;
          break;
        case 13:
          var s = n.memoizedState;
          if (s !== null) return s.dehydrated !== null ? (ma(n), n.flags |= 128, null) : (o & n.child.childLanes) !== 0 ? iE(r, n, o) : (ma(n), r = Rn(r, n, o), r !== null ? r.sibling : null);
          ma(n);
          break;
        case 19:
          var f = (r.flags & 128) !== 0;
          if (s = (o & n.childLanes) !== 0, s || (_e(r, n, o, !1), s = (o & n.childLanes) !== 0), f) {
            if (s) return uE(r, n, o);
            n.flags |= 128;
          }
          if (f = n.memoizedState, f !== null && (f.rendering = null, f.tail = null, f.lastEffect = null), S(et, et.current), s) break;
          return null;
        case 22:
          return n.lanes = 0, $S(r, n, o, n.pendingProps);
        case 24:
          br(n, Ge, r.memoizedState.cache);
      }
      return Rn(r, n, o);
    }
    function sE(r, n, o) {
      if (r !== null) {
        if (r.memoizedProps !== n.pendingProps) rt = !0;else {
          if (!nv(r, o) && (n.flags & 128) === 0) return rt = !1, Tz(r, n, o);
          rt = (r.flags & 131072) !== 0;
        }
      } else rt = !1, he && (n.flags & 1048576) !== 0 && j(n, ds, n.index);
      switch (n.lanes = 0, n.tag) {
        case 16:
          e: {
            var s = n.pendingProps;
            if (r = ci(n.elementType), n.type = r, typeof r == "function") xv(r) ? (s = pi(r, s), n.tag = 1, n = nE(null, n, r, s, o)) : (n.tag = 0, n = Jm(null, n, r, s, o));else {
              if (r != null) {
                var f = r.$$typeof;
                if (f === Av) {
                  n.tag = 11, n = ZS(null, n, r, s, o);
                  break e;
                } else if (f === Rv) {
                  n.tag = 14, n = JS(null, n, r, s, o);
                  break e;
                }
              }
              throw n = g(r) || r, Error(i(306, n, ""));
            }
          }
          return n;
        case 0:
          return Jm(r, n, n.type, n.pendingProps, o);
        case 1:
          return s = n.type, f = pi(s, n.pendingProps), nE(r, n, s, f, o);
        case 3:
          e: {
            if (We(n, n.stateNode.containerInfo), r === null) throw Error(i(387));
            var p = n.pendingProps;
            f = n.memoizedState, s = f.element, Rm(r, n), $u(n, p, null, o);
            var y = n.memoizedState;
            if (p = y.cache, br(n, Ge, p), p !== f.cache && ku(n, [Ge], o, !0), Wu(), p = y.element, Mt && f.isDehydrated) {
              if (f = {
                element: p,
                isDehydrated: !1,
                cache: y.cache
              }, n.updateQueue.baseState = f, n.memoizedState = f, n.flags & 256) {
                n = aE(r, n, p, o);
                break e;
              } else if (p !== s) {
                s = Pe(Error(i(424)), n), si(s), n = aE(r, n, p, o);
                break e;
              } else for (Mt && (Fe = UL(n.stateNode.containerInfo), xt = n, he = !0, Ea = null, Er = !0), o = I1(n, null, p, o), n.child = o; o;) o.flags = o.flags & -3 | 4096, o = o.sibling;
            } else {
              if (On(), p === s) {
                n = Rn(r, n, o);
                break e;
              }
              yt(r, n, p, o);
            }
            n = n.child;
          }
          return n;
        case 26:
          if (zr) return Cc(r, n), r === null ? (o = S1(n.type, null, n.pendingProps, null)) ? n.memoizedState = o : he || (n.stateNode = cj(n.type, n.pendingProps, Sa.current, n)) : n.memoizedState = S1(n.type, r.memoizedProps, n.pendingProps, r.memoizedState), null;
        case 27:
          if (ot) return _n(n), r === null && ot && he && (s = n.stateNode = O1(n.type, n.pendingProps, Sa.current, bt.current, !1), xt = n, Er = !0, Fe = jL(n.type, s, Fe)), yt(r, n, n.pendingProps.children, o), Cc(r, n), r === null && (n.flags |= 4194304), n.child;
        case 5:
          return r === null && he && (uj(n.type, n.pendingProps, bt.current), (f = s = Fe) && (s = HL(s, n.type, n.pendingProps, Er), s !== null ? (n.stateNode = s, xt = n, Fe = PL(s), Er = !1, f = !0) : f = !1), f || Rt(n)), _n(n), f = n.type, p = n.pendingProps, y = r !== null ? r.memoizedProps : null, s = p.children, jc(f, p) ? s = null : y !== null && jc(f, y) && (n.flags |= 32), n.memoizedState !== null && (f = Im(r, n, vz, null, null, o), Dn ? gi._currentValue = f : gi._currentValue2 = f), Cc(r, n), yt(r, n, s, o), n.child;
        case 6:
          return r === null && he && (sj(n.pendingProps, bt.current), (r = o = Fe) && (o = FL(o, n.pendingProps, Er), o !== null ? (n.stateNode = o, xt = n, Fe = null, r = !0) : r = !1), r || Rt(n)), null;
        case 13:
          return iE(r, n, o);
        case 4:
          return We(n, n.stateNode.containerInfo), s = n.pendingProps, r === null ? n.child = Ei(n, null, s, o) : yt(r, n, s, o), n.child;
        case 11:
          return ZS(r, n, n.type, n.pendingProps, o);
        case 7:
          return yt(r, n, n.pendingProps, o), n.child;
        case 8:
          return yt(r, n, n.pendingProps.children, o), n.child;
        case 12:
          return yt(r, n, n.pendingProps.children, o), n.child;
        case 10:
          return s = n.pendingProps, br(n, n.type, s.value), yt(r, n, s.children, o), n.child;
        case 9:
          return f = n.type._context, s = n.pendingProps.children, Xe(n), f = gt(f), s = s(f), n.flags |= 1, yt(r, n, s, o), n.child;
        case 14:
          return JS(r, n, n.type, n.pendingProps, o);
        case 15:
          return WS(r, n, n.type, n.pendingProps, o);
        case 19:
          return uE(r, n, o);
        case 31:
          return Ez(r, n, o);
        case 22:
          return $S(r, n, o, n.pendingProps);
        case 24:
          return Xe(n), s = gt(Ge), r === null ? (f = Am(), f === null && (f = Re, p = qm(), f.pooledCache = p, p.refCount++, p !== null && (f.pooledCacheLanes |= o), f = p), n.memoizedState = {
            parent: s,
            cache: f
          }, Cm(n), br(n, Ge, f)) : ((r.lanes & o) !== 0 && (Rm(r, n), $u(n, null, null, o), Wu()), f = r.memoizedState, p = n.memoizedState, f.parent !== s ? (f = {
            parent: s,
            cache: s
          }, n.memoizedState = f, n.lanes === 0 && (n.memoizedState = n.updateQueue.baseState = f), br(n, Ge, s)) : (s = p.cache, br(n, Ge, s), s !== f.cache && ku(n, [Ge], o, !0))), yt(r, n, n.pendingProps.children, o), n.child;
        case 29:
          throw n.pendingProps;
      }
      throw Error(i(156, n.tag));
    }
    function Ir(r) {
      r.flags |= 4;
    }
    function Nc(r) {
      en && (r.flags |= 8);
    }
    function lE(r, n) {
      if (r !== null && r.child === n.child) return !1;
      if ((n.flags & 16) !== 0) return !0;
      for (r = n.child; r !== null;) {
        if ((r.flags & 8218) !== 0 || (r.subtreeFlags & 8218) !== 0) return !0;
        r = r.sibling;
      }
      return !1;
    }
    function av(r, n, o, s) {
      if (wt) for (o = n.child; o !== null;) {
        if (o.tag === 5 || o.tag === 6) wv(r, o.stateNode);else if (!(o.tag === 4 || ot && o.tag === 27) && o.child !== null) {
          o.child.return = o, o = o.child;
          continue;
        }
        if (o === n) break;
        for (; o.sibling === null;) {
          if (o.return === null || o.return === n) return;
          o = o.return;
        }
        o.sibling.return = o.return, o = o.sibling;
      } else if (en) for (var f = n.child; f !== null;) {
        if (f.tag === 5) {
          var p = f.stateNode;
          o && s && (p = h1(p, f.type, f.memoizedProps)), wv(r, p);
        } else if (f.tag === 6) p = f.stateNode, o && s && (p = g1(p, f.memoizedProps)), wv(r, p);else if (f.tag !== 4) {
          if (f.tag === 22 && f.memoizedState !== null) p = f.child, p !== null && (p.return = f), av(r, f, !0, !0);else if (f.child !== null) {
            f.child.return = f, f = f.child;
            continue;
          }
        }
        if (f === n) break;
        for (; f.sibling === null;) {
          if (f.return === null || f.return === n) return;
          f = f.return;
        }
        f.sibling.return = f.return, f = f.sibling;
      }
    }
    function cE(r, n, o, s) {
      var f = !1;
      if (en) for (var p = n.child; p !== null;) {
        if (p.tag === 5) {
          var y = p.stateNode;
          o && s && (y = h1(y, p.type, p.memoizedProps)), m1(r, y);
        } else if (p.tag === 6) y = p.stateNode, o && s && (y = g1(y, p.memoizedProps)), m1(r, y);else if (p.tag !== 4) {
          if (p.tag === 22 && p.memoizedState !== null) f = p.child, f !== null && (f.return = p), cE(r, p, !0, !0), f = !0;else if (p.child !== null) {
            p.child.return = p, p = p.child;
            continue;
          }
        }
        if (p === n) break;
        for (; p.sibling === null;) {
          if (p.return === null || p.return === n) return f;
          p = p.return;
        }
        p.sibling.return = p.return, p = p.sibling;
      }
      return f;
    }
    function fE(r, n) {
      if (en && lE(r, n)) {
        r = n.stateNode;
        var o = r.containerInfo,
          s = d1();
        cE(s, n, !1, !1), r.pendingChildren = s, Ir(n), NL(o, s);
      }
    }
    function iv(r, n, o, s) {
      if (wt) r.memoizedProps !== s && Ir(n);else if (en) {
        var f = r.stateNode,
          p = r.memoizedProps;
        if ((r = lE(r, n)) || p !== s) {
          var y = bt.current;
          p = RL(f, o, p, s, !r, null), p === f ? n.stateNode = f : (Nc(n), s1(p, o, s, y) && Ir(n), n.stateNode = p, r && av(p, n, !1, !1));
        } else n.stateNode = f;
      }
    }
    function ov(r, n, o, s, f) {
      if ((r.mode & 32) !== 0 && (o === null ? rL(n, s) : nL(n, o, s))) {
        if (r.flags |= 16777216, (f & 335544128) === f || Mv(n, s)) if (c1(r.stateNode, n, s)) r.flags |= 8192;else if (UE()) r.flags |= 8192;else throw Si = Jc, Vv;
      } else r.flags &= -16777217;
    }
    function pE(r, n) {
      if (pj(n)) {
        if (r.flags |= 16777216, !A1(n)) if (UE()) r.flags |= 8192;else throw Si = Jc, Vv;
      } else r.flags &= -16777217;
    }
    function wc(r, n) {
      n !== null && (r.flags |= 4), r.flags & 16384 && (n = r.tag !== 22 ? M() : 536870912, r.lanes |= n, Do |= n);
    }
    function ns(r, n) {
      if (!he) switch (r.tailMode) {
        case "hidden":
          n = r.tail;
          for (var o = null; n !== null;) n.alternate !== null && (o = n), n = n.sibling;
          o === null ? r.tail = null : o.sibling = null;
          break;
        case "collapsed":
          o = r.tail;
          for (var s = null; o !== null;) o.alternate !== null && (s = o), o = o.sibling;
          s === null ? n || r.tail === null ? r.tail = null : r.tail.sibling = null : s.sibling = null;
      }
    }
    function Me(r) {
      var n = r.alternate !== null && r.alternate.child === r.child,
        o = 0,
        s = 0;
      if (n) for (var f = r.child; f !== null;) o |= f.lanes | f.childLanes, s |= f.subtreeFlags & 65011712, s |= f.flags & 65011712, f.return = r, f = f.sibling;else for (f = r.child; f !== null;) o |= f.lanes | f.childLanes, s |= f.subtreeFlags, s |= f.flags, f.return = r, f = f.sibling;
      return r.subtreeFlags |= s, r.childLanes = o, n;
    }
    function qz(r, n, o) {
      var s = n.pendingProps;
      switch (L(n), n.tag) {
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
          return Me(n), null;
        case 1:
          return Me(n), null;
        case 3:
          return o = n.stateNode, s = null, r !== null && (s = r.memoizedState.cache), n.memoizedState.cache !== s && (n.flags |= 2048), Br(Ge), ar(), o.pendingContext && (o.context = o.pendingContext, o.pendingContext = null), (r === null || r.child === null) && (An(n) ? Ir(n) : r === null || r.memoizedState.isDehydrated && (n.flags & 256) === 0 || (n.flags |= 1024, Xu())), fE(r, n), Me(n), null;
        case 26:
          if (zr) {
            var f = n.type,
              p = n.memoizedState;
            return r === null ? (Ir(n), p !== null ? (Me(n), pE(n, p)) : (Me(n), ov(n, f, null, s, o))) : p ? p !== r.memoizedState ? (Ir(n), Me(n), pE(n, p)) : (Me(n), n.flags &= -16777217) : (p = r.memoizedProps, wt ? p !== s && Ir(n) : iv(r, n, f, s), Me(n), ov(n, f, p, s, o)), null;
          }
        case 27:
          if (ot) {
            if (Jr(n), o = Sa.current, f = n.type, r !== null && n.stateNode != null) wt ? r.memoizedProps !== s && Ir(n) : iv(r, n, f, s);else {
              if (!s) {
                if (n.stateNode === null) throw Error(i(166));
                return Me(n), null;
              }
              r = bt.current, An(n) ? lc(n, r) : (r = O1(f, s, o, r, !0), n.stateNode = r, Ir(n));
            }
            return Me(n), null;
          }
        case 5:
          if (Jr(n), f = n.type, r !== null && n.stateNode != null) iv(r, n, f, s);else {
            if (!s) {
              if (n.stateNode === null) throw Error(i(166));
              return Me(n), null;
            }
            if (p = bt.current, An(n)) lc(n, p), tj(n.stateNode, f, s, p) && (n.flags |= 64);else {
              var y = kz(f, s, Sa.current, p, n);
              Nc(n), av(y, n, !1, !1), n.stateNode = y, s1(y, f, s, p) && Ir(n);
            }
          }
          return Me(n), ov(n, n.type, r === null ? null : r.memoizedProps, n.pendingProps, o), null;
        case 6:
          if (r && n.stateNode != null) o = r.memoizedProps, wt ? o !== s && Ir(n) : en && (o !== s ? (r = Sa.current, o = bt.current, Nc(n), n.stateNode = l1(s, r, o, n)) : n.stateNode = r.stateNode);else {
            if (typeof s != "string" && n.stateNode === null) throw Error(i(166));
            if (r = Sa.current, o = bt.current, An(n)) {
              if (!Mt) throw Error(i(176));
              if (r = n.stateNode, o = n.memoizedProps, s = null, f = xt, f !== null) switch (f.tag) {
                case 27:
                case 5:
                  s = f.memoizedProps;
              }
              YL(r, o, n, s) || Rt(n, !0);
            } else Nc(n), n.stateNode = l1(s, r, o, n);
          }
          return Me(n), null;
        case 31:
          if (o = n.memoizedState, r === null || r.memoizedState !== null) {
            if (s = An(n), o !== null) {
              if (r === null) {
                if (!s) throw Error(i(318));
                if (!Mt) throw Error(i(556));
                if (r = n.memoizedState, r = r !== null ? r.dehydrated : null, !r) throw Error(i(557));
                XL(r, n);
              } else On(), (n.flags & 128) === 0 && (n.memoizedState = null), n.flags |= 4;
              Me(n), r = !1;
            } else o = Xu(), r !== null && r.memoizedState !== null && (r.memoizedState.hydrationErrors = o), r = !0;
            if (!r) return n.flags & 256 ? (ir(n), n) : (ir(n), null);
            if ((n.flags & 128) !== 0) throw Error(i(558));
          }
          return Me(n), null;
        case 13:
          if (s = n.memoizedState, r === null || r.memoizedState !== null && r.memoizedState.dehydrated !== null) {
            if (f = An(n), s !== null && s.dehydrated !== null) {
              if (r === null) {
                if (!f) throw Error(i(318));
                if (!Mt) throw Error(i(344));
                if (f = n.memoizedState, f = f !== null ? f.dehydrated : null, !f) throw Error(i(317));
                kL(f, n);
              } else On(), (n.flags & 128) === 0 && (n.memoizedState = null), n.flags |= 4;
              Me(n), f = !1;
            } else f = Xu(), r !== null && r.memoizedState !== null && (r.memoizedState.hydrationErrors = f), f = !0;
            if (!f) return n.flags & 256 ? (ir(n), n) : (ir(n), null);
          }
          return ir(n), (n.flags & 128) !== 0 ? (n.lanes = o, n) : (o = s !== null, r = r !== null && r.memoizedState !== null, o && (s = n.child, f = null, s.alternate !== null && s.alternate.memoizedState !== null && s.alternate.memoizedState.cachePool !== null && (f = s.alternate.memoizedState.cachePool.pool), p = null, s.memoizedState !== null && s.memoizedState.cachePool !== null && (p = s.memoizedState.cachePool.pool), p !== f && (s.flags |= 2048)), o !== r && o && (n.child.flags |= 8192), wc(n, n.updateQueue), Me(n), null);
        case 4:
          return ar(), fE(r, n), r === null && Wz(n.stateNode.containerInfo), Me(n), null;
        case 10:
          return Br(n.type), Me(n), null;
        case 19:
          if (x(et), s = n.memoizedState, s === null) return Me(n), null;
          if (f = (n.flags & 128) !== 0, p = s.rendering, p === null) {
            if (f) ns(s, !1);else {
              if (Qe !== 0 || r !== null && (r.flags & 128) !== 0) for (r = n.child; r !== null;) {
                if (p = bc(r), p !== null) {
                  for (n.flags |= 128, ns(s, !1), r = p.updateQueue, n.updateQueue = r, wc(n, r), n.subtreeFlags = 0, r = o, o = n.child; o !== null;) JE(o, r), o = o.sibling;
                  return S(et, et.current & 1 | 2), he && U(n, s.treeForkCount), n.child;
                }
                r = r.sibling;
              }
              s.tail !== null && Gt() > Ss && (n.flags |= 128, f = !0, ns(s, !1), n.lanes = 4194304);
            }
          } else {
            if (!f) if (r = bc(p), r !== null) {
              if (n.flags |= 128, f = !0, r = r.updateQueue, n.updateQueue = r, wc(n, r), ns(s, !0), s.tail === null && s.tailMode === "hidden" && !p.alternate && !he) return Me(n), null;
            } else 2 * Gt() - s.renderingStartTime > Ss && o !== 536870912 && (n.flags |= 128, f = !0, ns(s, !1), n.lanes = 4194304);
            s.isBackwards ? (p.sibling = n.child, n.child = p) : (r = s.last, r !== null ? r.sibling = p : n.child = p, s.last = p);
          }
          return s.tail !== null ? (r = s.tail, s.rendering = r, s.tail = r.sibling, s.renderingStartTime = Gt(), r.sibling = null, o = et.current, S(et, f ? o & 1 | 2 : o & 1), he && U(n, s.treeForkCount), r) : (Me(n), null);
        case 22:
        case 23:
          return ir(n), Mm(), s = n.memoizedState !== null, r !== null ? r.memoizedState !== null !== s && (n.flags |= 8192) : s && (n.flags |= 8192), s ? (o & 536870912) !== 0 && (n.flags & 128) === 0 && (Me(n), n.subtreeFlags & 6 && (n.flags |= 8192)) : Me(n), o = n.updateQueue, o !== null && wc(n, o.retryQueue), o = null, r !== null && r.memoizedState !== null && r.memoizedState.cachePool !== null && (o = r.memoizedState.cachePool.pool), s = null, n.memoizedState !== null && n.memoizedState.cachePool !== null && (s = n.memoizedState.cachePool.pool), s !== o && (n.flags |= 2048), r !== null && x(xi), null;
        case 24:
          return o = null, r !== null && (o = r.memoizedState.cache), n.memoizedState.cache !== o && (n.flags |= 2048), Br(Ge), Me(n), null;
        case 25:
          return null;
        case 30:
          return null;
      }
      throw Error(i(156, n.tag));
    }
    function _z(r, n) {
      switch (L(n), n.tag) {
        case 1:
          return r = n.flags, r & 65536 ? (n.flags = r & -65537 | 128, n) : null;
        case 3:
          return Br(Ge), ar(), r = n.flags, (r & 65536) !== 0 && (r & 128) === 0 ? (n.flags = r & -65537 | 128, n) : null;
        case 26:
        case 27:
        case 5:
          return Jr(n), null;
        case 31:
          if (n.memoizedState !== null) {
            if (ir(n), n.alternate === null) throw Error(i(340));
            On();
          }
          return r = n.flags, r & 65536 ? (n.flags = r & -65537 | 128, n) : null;
        case 13:
          if (ir(n), r = n.memoizedState, r !== null && r.dehydrated !== null) {
            if (n.alternate === null) throw Error(i(340));
            On();
          }
          return r = n.flags, r & 65536 ? (n.flags = r & -65537 | 128, n) : null;
        case 19:
          return x(et), null;
        case 4:
          return ar(), null;
        case 10:
          return Br(n.type), null;
        case 22:
        case 23:
          return ir(n), Mm(), r !== null && x(xi), r = n.flags, r & 65536 ? (n.flags = r & -65537 | 128, n) : null;
        case 24:
          return Br(Ge), null;
        case 25:
          return null;
        default:
          return null;
      }
    }
    function dE(r, n) {
      switch (L(n), n.tag) {
        case 3:
          Br(Ge), ar();
          break;
        case 26:
        case 27:
        case 5:
          Jr(n);
          break;
        case 4:
          ar();
          break;
        case 31:
          n.memoizedState !== null && ir(n);
          break;
        case 13:
          ir(n);
          break;
        case 19:
          x(et);
          break;
        case 10:
          Br(n.type);
          break;
        case 22:
        case 23:
          ir(n), Mm(), r !== null && x(xi);
          break;
        case 24:
          Br(Ge);
      }
    }
    function as(r, n) {
      try {
        var o = n.updateQueue,
          s = o !== null ? o.lastEffect : null;
        if (s !== null) {
          var f = s.next;
          o = f;
          do {
            if ((o.tag & r) === r) {
              s = void 0;
              var p = o.create,
                y = o.inst;
              s = p(), y.destroy = s;
            }
            o = o.next;
          } while (o !== f);
        }
      } catch (E) {
        ye(n, n.return, E);
      }
    }
    function ha(r, n, o) {
      try {
        var s = n.updateQueue,
          f = s !== null ? s.lastEffect : null;
        if (f !== null) {
          var p = f.next;
          s = p;
          do {
            if ((s.tag & r) === r) {
              var y = s.inst,
                E = y.destroy;
              if (E !== void 0) {
                y.destroy = void 0, f = n;
                var w = o,
                  I = E;
                try {
                  I();
                } catch (K) {
                  ye(f, w, K);
                }
              }
            }
            s = s.next;
          } while (s !== p);
        }
      } catch (K) {
        ye(n, n.return, K);
      }
    }
    function mE(r) {
      var n = r.updateQueue;
      if (n !== null) {
        var o = r.stateNode;
        try {
          uS(n, o);
        } catch (s) {
          ye(r, r.return, s);
        }
      }
    }
    function vE(r, n, o) {
      o.props = pi(r.type, r.memoizedProps), o.state = r.memoizedState;
      try {
        o.componentWillUnmount();
      } catch (s) {
        ye(r, n, s);
      }
    }
    function is(r, n) {
      try {
        var o = r.ref;
        if (o !== null) {
          switch (r.tag) {
            case 26:
            case 27:
            case 5:
              var s = ls(r.stateNode);
              break;
            case 30:
              s = r.stateNode;
              break;
            default:
              s = r.stateNode;
          }
          typeof o == "function" ? r.refCleanup = o(s) : o.current = s;
        }
      } catch (f) {
        ye(r, n, f);
      }
    }
    function $r(r, n) {
      var o = r.ref,
        s = r.refCleanup;
      if (o !== null) if (typeof s == "function") try {
        s();
      } catch (f) {
        ye(r, n, f);
      } finally {
        r.refCleanup = null, r = r.alternate, r != null && (r.refCleanup = null);
      } else if (typeof o == "function") try {
        o(null);
      } catch (f) {
        ye(r, n, f);
      } else o.current = null;
    }
    function hE(r) {
      var n = r.type,
        o = r.memoizedProps,
        s = r.stateNode;
      try {
        yL(s, n, o, r);
      } catch (f) {
        ye(r, r.return, f);
      }
    }
    function uv(r, n, o) {
      try {
        bL(r.stateNode, r.type, o, n, r);
      } catch (s) {
        ye(r, r.return, s);
      }
    }
    function gE(r) {
      return r.tag === 5 || r.tag === 3 || (zr ? r.tag === 26 : !1) || (ot ? r.tag === 27 && go(r.type) : !1) || r.tag === 4;
    }
    function sv(r) {
      e: for (;;) {
        for (; r.sibling === null;) {
          if (r.return === null || gE(r.return)) return null;
          r = r.return;
        }
        for (r.sibling.return = r.return, r = r.sibling; r.tag !== 5 && r.tag !== 6 && r.tag !== 18;) {
          if (ot && r.tag === 27 && go(r.type) || r.flags & 2 || r.child === null || r.tag === 4) continue e;
          r.child.return = r, r = r.child;
        }
        if (!(r.flags & 2)) return r.stateNode;
      }
    }
    function lv(r, n, o) {
      var s = r.tag;
      if (s === 5 || s === 6) r = r.stateNode, n ? SL(o, r, n) : hL(o, r);else if (s !== 4 && (ot && s === 27 && go(r.type) && (o = r.stateNode, n = null), r = r.child, r !== null)) for (lv(r, n, o), r = r.sibling; r !== null;) lv(r, n, o), r = r.sibling;
    }
    function Mc(r, n, o) {
      var s = r.tag;
      if (s === 5 || s === 6) r = r.stateNode, n ? xL(o, r, n) : vL(o, r);else if (s !== 4 && (ot && s === 27 && go(r.type) && (o = r.stateNode), r = r.child, r !== null)) for (Mc(r, n, o), r = r.sibling; r !== null;) Mc(r, n, o), r = r.sibling;
    }
    function yE(r, n, o) {
      r = r.containerInfo;
      try {
        v1(r, o);
      } catch (s) {
        ye(n, n.return, s);
      }
    }
    function bE(r) {
      var n = r.stateNode,
        o = r.memoizedProps;
      try {
        mj(r.type, o, n, r);
      } catch (s) {
        ye(r, r.return, s);
      }
    }
    function Az(r, n) {
      for (Yz(r.containerInfo), pt = n; pt !== null;) if (r = pt, n = r.child, (r.subtreeFlags & 1028) !== 0 && n !== null) n.return = r, pt = n;else for (; pt !== null;) {
        r = pt;
        var o = r.alternate;
        switch (n = r.flags, r.tag) {
          case 0:
            if ((n & 4) !== 0 && (n = r.updateQueue, n = n !== null ? n.events : null, n !== null)) for (var s = 0; s < n.length; s++) {
              var f = n[s];
              f.ref.impl = f.nextImpl;
            }
            break;
          case 11:
          case 15:
            break;
          case 1:
            if ((n & 1024) !== 0 && o !== null) {
              n = void 0, s = r, f = o.memoizedProps, o = o.memoizedState;
              var p = s.stateNode;
              try {
                var y = pi(s.type, f);
                n = p.getSnapshotBeforeUpdate(y, o), p.__reactInternalSnapshotBeforeUpdate = n;
              } catch (E) {
                ye(s, s.return, E);
              }
            }
            break;
          case 3:
            (n & 1024) !== 0 && wt && CL(r.stateNode.containerInfo);
            break;
          case 5:
          case 26:
          case 27:
          case 6:
          case 4:
          case 17:
            break;
          default:
            if ((n & 1024) !== 0) throw Error(i(163));
        }
        if (n = r.sibling, n !== null) {
          n.return = r.return, pt = n;
          break;
        }
        pt = r.return;
      }
    }
    function xE(r, n, o) {
      var s = o.flags;
      switch (o.tag) {
        case 0:
        case 11:
        case 15:
          Nn(r, o), s & 4 && as(5, o);
          break;
        case 1:
          if (Nn(r, o), s & 4) if (r = o.stateNode, n === null) try {
            r.componentDidMount();
          } catch (y) {
            ye(o, o.return, y);
          } else {
            var f = pi(o.type, n.memoizedProps);
            n = n.memoizedState;
            try {
              r.componentDidUpdate(f, n, r.__reactInternalSnapshotBeforeUpdate);
            } catch (y) {
              ye(o, o.return, y);
            }
          }
          s & 64 && mE(o), s & 512 && is(o, o.return);
          break;
        case 3:
          if (Nn(r, o), s & 64 && (s = o.updateQueue, s !== null)) {
            if (r = null, o.child !== null) switch (o.child.tag) {
              case 27:
              case 5:
                r = ls(o.child.stateNode);
                break;
              case 1:
                r = o.child.stateNode;
            }
            try {
              uS(s, r);
            } catch (y) {
              ye(o, o.return, y);
            }
          }
          break;
        case 27:
          ot && n === null && s & 4 && bE(o);
        case 26:
        case 5:
          if (Nn(r, o), n === null) {
            if (s & 4) hE(o);else if (s & 64) {
              r = o.type, n = o.memoizedProps, f = o.stateNode;
              try {
                JL(f, r, n, o);
              } catch (y) {
                ye(o, o.return, y);
              }
            }
          }
          s & 512 && is(o, o.return);
          break;
        case 12:
          Nn(r, o);
          break;
        case 31:
          Nn(r, o), s & 4 && EE(r, o);
          break;
        case 13:
          Nn(r, o), s & 4 && TE(r, o), s & 64 && (s = o.memoizedState, s !== null && (s = s.dehydrated, s !== null && (o = Dz.bind(null, o), ML(s, o))));
          break;
        case 22:
          if (s = o.memoizedState !== null || Un, !s) {
            n = n !== null && n.memoizedState !== null || nt, f = Un;
            var p = nt;
            Un = s, (nt = n) && !p ? wn(r, o, (o.subtreeFlags & 8772) !== 0) : Nn(r, o), Un = f, nt = p;
          }
          break;
        case 30:
          break;
        default:
          Nn(r, o);
      }
    }
    function SE(r) {
      var n = r.alternate;
      n !== null && (r.alternate = null, SE(n)), r.child = null, r.deletions = null, r.sibling = null, r.tag === 5 && (n = r.stateNode, n !== null && tL(n)), r.stateNode = null, r.return = null, r.dependencies = null, r.memoizedProps = null, r.memoizedState = null, r.pendingProps = null, r.stateNode = null, r.updateQueue = null;
    }
    function Pr(r, n, o) {
      for (o = o.child; o !== null;) cv(r, n, o), o = o.sibling;
    }
    function cv(r, n, o) {
      if (lr && typeof lr.onCommitFiberUnmount == "function") try {
        lr.onCommitFiberUnmount(ps, o);
      } catch (_unused64) {}
      switch (o.tag) {
        case 26:
          if (zr) {
            nt || $r(o, n), Pr(r, n, o), o.memoizedState ? T1(o.memoizedState) : o.stateNode && _1(o.stateNode);
            break;
          }
        case 27:
          if (ot) {
            nt || $r(o, n);
            var s = at,
              f = Kt;
            go(o.type) && (at = o.stateNode, Kt = !1), Pr(r, n, o), C1(o.stateNode), at = s, Kt = f;
            break;
          }
        case 5:
          nt || $r(o, n);
        case 6:
          if (wt) {
            if (s = at, f = Kt, at = null, Pr(r, n, o), at = s, Kt = f, at !== null) if (Kt) try {
              TL(at, o.stateNode);
            } catch (p) {
              ye(o, n, p);
            } else try {
              EL(at, o.stateNode);
            } catch (p) {
              ye(o, n, p);
            }
          } else Pr(r, n, o);
          break;
        case 18:
          wt && at !== null && (Kt ? aj(at, o.stateNode) : nj(at, o.stateNode));
          break;
        case 4:
          wt ? (s = at, f = Kt, at = o.stateNode.containerInfo, Kt = !0, Pr(r, n, o), at = s, Kt = f) : (en && yE(o.stateNode, o, d1()), Pr(r, n, o));
          break;
        case 0:
        case 11:
        case 14:
        case 15:
          ha(2, o, n), nt || ha(4, o, n), Pr(r, n, o);
          break;
        case 1:
          nt || ($r(o, n), s = o.stateNode, typeof s.componentWillUnmount == "function" && vE(o, n, s)), Pr(r, n, o);
          break;
        case 21:
          Pr(r, n, o);
          break;
        case 22:
          nt = (s = nt) || o.memoizedState !== null, Pr(r, n, o), nt = s;
          break;
        default:
          Pr(r, n, o);
      }
    }
    function EE(r, n) {
      if (Mt && n.memoizedState === null && (r = n.alternate, r !== null && (r = r.memoizedState, r !== null))) {
        r = r.dehydrated;
        try {
          $L(r);
        } catch (o) {
          ye(n, n.return, o);
        }
      }
    }
    function TE(r, n) {
      if (Mt && n.memoizedState === null && (r = n.alternate, r !== null && (r = r.memoizedState, r !== null && (r = r.dehydrated, r !== null)))) try {
        ej(r);
      } catch (o) {
        ye(n, n.return, o);
      }
    }
    function Oz(r) {
      switch (r.tag) {
        case 31:
        case 13:
        case 19:
          var n = r.stateNode;
          return n === null && (n = r.stateNode = new z1()), n;
        case 22:
          return r = r.stateNode, n = r._retryCache, n === null && (n = r._retryCache = new z1()), n;
        default:
          throw Error(i(435, r.tag));
      }
    }
    function Dc(r, n) {
      var o = Oz(r);
      n.forEach(function (s) {
        if (!o.has(s)) {
          o.add(s);
          var f = Bz.bind(null, r, s);
          s.then(f, f);
        }
      });
    }
    function Nt(r, n) {
      var o = n.deletions;
      if (o !== null) for (var s = 0; s < o.length; s++) {
        var f = o[s],
          p = r,
          y = n;
        if (wt) {
          var E = y;
          e: for (; E !== null;) {
            switch (E.tag) {
              case 27:
                if (ot) {
                  if (go(E.type)) {
                    at = E.stateNode, Kt = !1;
                    break e;
                  }
                  break;
                }
              case 5:
                at = E.stateNode, Kt = !1;
                break e;
              case 3:
              case 4:
                at = E.stateNode.containerInfo, Kt = !0;
                break e;
            }
            E = E.return;
          }
          if (at === null) throw Error(i(160));
          cv(p, y, f), at = null, Kt = !1;
        } else cv(p, y, f);
        p = f.alternate, p !== null && (p.return = null), f.return = null;
      }
      if (n.subtreeFlags & 13886) for (n = n.child; n !== null;) qE(n, r), n = n.sibling;
    }
    function qE(r, n) {
      var o = r.alternate,
        s = r.flags;
      switch (r.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Nt(n, r), Pt(r), s & 4 && (ha(3, r, r.return), as(3, r), ha(5, r, r.return));
          break;
        case 1:
          Nt(n, r), Pt(r), s & 512 && (nt || o === null || $r(o, o.return)), s & 64 && Un && (r = r.updateQueue, r !== null && (s = r.callbacks, s !== null && (o = r.shared.hiddenCallbacks, r.shared.hiddenCallbacks = o === null ? s : o.concat(s))));
          break;
        case 26:
          if (zr) {
            var f = Lr;
            if (Nt(n, r), Pt(r), s & 512 && (nt || o === null || $r(o, o.return)), s & 4) {
              s = o !== null ? o.memoizedState : null;
              var p = r.memoizedState;
              o === null ? p === null ? r.stateNode === null ? r.stateNode = lj(f, r.type, r.memoizedProps, r) : q1(f, r.type, r.stateNode) : r.stateNode = E1(f, p, r.memoizedProps) : s !== p ? (s === null ? o.stateNode !== null && _1(o.stateNode) : T1(s), p === null ? q1(f, r.type, r.stateNode) : E1(f, p, r.memoizedProps)) : p === null && r.stateNode !== null && uv(r, r.memoizedProps, o.memoizedProps);
            }
            break;
          }
        case 27:
          if (ot) {
            Nt(n, r), Pt(r), s & 512 && (nt || o === null || $r(o, o.return)), o !== null && s & 4 && uv(r, r.memoizedProps, o.memoizedProps);
            break;
          }
        case 5:
          if (Nt(n, r), Pt(r), s & 512 && (nt || o === null || $r(o, o.return)), wt) {
            if (r.flags & 32) {
              f = r.stateNode;
              try {
                p1(f);
              } catch (H) {
                ye(r, r.return, H);
              }
            }
            s & 4 && r.stateNode != null && (f = r.memoizedProps, uv(r, f, o !== null ? o.memoizedProps : f)), s & 1024 && (Wv = !0);
          } else en && r.alternate !== null && (r.alternate.stateNode = r.stateNode);
          break;
        case 6:
          if (Nt(n, r), Pt(r), s & 4 && wt) {
            if (r.stateNode === null) throw Error(i(162));
            s = r.memoizedProps, o = o !== null ? o.memoizedProps : s, f = r.stateNode;
            try {
              gL(f, o, s);
            } catch (H) {
              ye(r, r.return, H);
            }
          }
          break;
        case 3:
          if (zr ? (fj(), f = Lr, Lr = Iv(n.containerInfo), Nt(n, r), Lr = f) : Nt(n, r), Pt(r), s & 4) {
            if (wt && Mt && o !== null && o.memoizedState.isDehydrated) try {
              WL(n.containerInfo);
            } catch (H) {
              ye(r, r.return, H);
            }
            if (en) {
              s = n.containerInfo, o = n.pendingChildren;
              try {
                v1(s, o);
              } catch (H) {
                ye(r, r.return, H);
              }
            }
          }
          Wv && (Wv = !1, _E(r));
          break;
        case 4:
          zr ? (o = Lr, Lr = Iv(r.stateNode.containerInfo), Nt(n, r), Pt(r), Lr = o) : (Nt(n, r), Pt(r)), s & 4 && en && yE(r.stateNode, r, r.stateNode.pendingChildren);
          break;
        case 12:
          Nt(n, r), Pt(r);
          break;
        case 31:
          Nt(n, r), Pt(r), s & 4 && (s = r.updateQueue, s !== null && (r.updateQueue = null, Dc(r, s)));
          break;
        case 13:
          Nt(n, r), Pt(r), r.child.flags & 8192 && r.memoizedState !== null != (o !== null && o.memoizedState !== null) && (uf = Gt()), s & 4 && (s = r.updateQueue, s !== null && (r.updateQueue = null, Dc(r, s)));
          break;
        case 22:
          f = r.memoizedState !== null;
          var y = o !== null && o.memoizedState !== null,
            E = Un,
            w = nt;
          if (Un = E || f, nt = w || y, Nt(n, r), nt = w, Un = E, Pt(r), s & 8192 && (n = r.stateNode, n._visibility = f ? n._visibility & -2 : n._visibility | 1, f && (o === null || y || Un || nt || di(r)), wt)) {
            e: if (o = null, wt) for (n = r;;) {
              if (n.tag === 5 || zr && n.tag === 26) {
                if (o === null) {
                  y = o = n;
                  try {
                    p = y.stateNode, f ? qL(p) : AL(y.stateNode, y.memoizedProps);
                  } catch (H) {
                    ye(y, y.return, H);
                  }
                }
              } else if (n.tag === 6) {
                if (o === null) {
                  y = n;
                  try {
                    var I = y.stateNode;
                    f ? _L(I) : OL(I, y.memoizedProps);
                  } catch (H) {
                    ye(y, y.return, H);
                  }
                }
              } else if (n.tag === 18) {
                if (o === null) {
                  y = n;
                  try {
                    var K = y.stateNode;
                    f ? ij(K) : oj(y.stateNode);
                  } catch (H) {
                    ye(y, y.return, H);
                  }
                }
              } else if ((n.tag !== 22 && n.tag !== 23 || n.memoizedState === null || n === r) && n.child !== null) {
                n.child.return = n, n = n.child;
                continue;
              }
              if (n === r) break e;
              for (; n.sibling === null;) {
                if (n.return === null || n.return === r) break e;
                o === n && (o = null), n = n.return;
              }
              o === n && (o = null), n.sibling.return = n.return, n = n.sibling;
            }
          }
          s & 4 && (s = r.updateQueue, s !== null && (o = s.retryQueue, o !== null && (s.retryQueue = null, Dc(r, o))));
          break;
        case 19:
          Nt(n, r), Pt(r), s & 4 && (s = r.updateQueue, s !== null && (r.updateQueue = null, Dc(r, s)));
          break;
        case 30:
          break;
        case 21:
          break;
        default:
          Nt(n, r), Pt(r);
      }
    }
    function Pt(r) {
      var n = r.flags;
      if (n & 2) {
        try {
          for (var o, s = r.return; s !== null;) {
            if (gE(s)) {
              o = s;
              break;
            }
            s = s.return;
          }
          if (wt) {
            if (o == null) throw Error(i(160));
            switch (o.tag) {
              case 27:
                if (ot) {
                  var f = o.stateNode,
                    p = sv(r);
                  Mc(r, p, f);
                  break;
                }
              case 5:
                var y = o.stateNode;
                o.flags & 32 && (p1(y), o.flags &= -33);
                var E = sv(r);
                Mc(r, E, y);
                break;
              case 3:
              case 4:
                var w = o.stateNode.containerInfo,
                  I = sv(r);
                lv(r, I, w);
                break;
              default:
                throw Error(i(161));
            }
          }
        } catch (K) {
          ye(r, r.return, K);
        }
        r.flags &= -3;
      }
      n & 4096 && (r.flags &= -4097);
    }
    function _E(r) {
      if (r.subtreeFlags & 1024) for (r = r.child; r !== null;) {
        var n = r;
        _E(n), n.tag === 5 && n.flags & 1024 && oL(n.stateNode), r = r.sibling;
      }
    }
    function Nn(r, n) {
      if (n.subtreeFlags & 8772) for (n = n.child; n !== null;) xE(r, n.alternate, n), n = n.sibling;
    }
    function di(r) {
      for (r = r.child; r !== null;) {
        var n = r;
        switch (n.tag) {
          case 0:
          case 11:
          case 14:
          case 15:
            ha(4, n, n.return), di(n);
            break;
          case 1:
            $r(n, n.return);
            var o = n.stateNode;
            typeof o.componentWillUnmount == "function" && vE(n, n.return, o), di(n);
            break;
          case 27:
            ot && C1(n.stateNode);
          case 26:
          case 5:
            $r(n, n.return), di(n);
            break;
          case 22:
            n.memoizedState === null && di(n);
            break;
          case 30:
            di(n);
            break;
          default:
            di(n);
        }
        r = r.sibling;
      }
    }
    function wn(r, n, o) {
      for (o = o && (n.subtreeFlags & 8772) !== 0, n = n.child; n !== null;) {
        var s = n.alternate,
          f = r,
          p = n,
          y = p.flags;
        switch (p.tag) {
          case 0:
          case 11:
          case 15:
            wn(f, p, o), as(4, p);
            break;
          case 1:
            if (wn(f, p, o), s = p, f = s.stateNode, typeof f.componentDidMount == "function") try {
              f.componentDidMount();
            } catch (I) {
              ye(s, s.return, I);
            }
            if (s = p, f = s.updateQueue, f !== null) {
              var E = s.stateNode;
              try {
                var w = f.shared.hiddenCallbacks;
                if (w !== null) for (f.shared.hiddenCallbacks = null, f = 0; f < w.length; f++) oS(w[f], E);
              } catch (I) {
                ye(s, s.return, I);
              }
            }
            o && y & 64 && mE(p), is(p, p.return);
            break;
          case 27:
            ot && bE(p);
          case 26:
          case 5:
            wn(f, p, o), o && s === null && y & 4 && hE(p), is(p, p.return);
            break;
          case 12:
            wn(f, p, o);
            break;
          case 31:
            wn(f, p, o), o && y & 4 && EE(f, p);
            break;
          case 13:
            wn(f, p, o), o && y & 4 && TE(f, p);
            break;
          case 22:
            p.memoizedState === null && wn(f, p, o), is(p, p.return);
            break;
          case 30:
            break;
          default:
            wn(f, p, o);
        }
        n = n.sibling;
      }
    }
    function fv(r, n) {
      var o = null;
      r !== null && r.memoizedState !== null && r.memoizedState.cachePool !== null && (o = r.memoizedState.cachePool.pool), r = null, n.memoizedState !== null && n.memoizedState.cachePool !== null && (r = n.memoizedState.cachePool.pool), r !== o && (r != null && r.refCount++, o != null && Qu(o));
    }
    function pv(r, n) {
      r = null, n.alternate !== null && (r = n.alternate.memoizedState.cache), n = n.memoizedState.cache, n !== r && (n.refCount++, r != null && Qu(r));
    }
    function Ur(r, n, o, s) {
      if (n.subtreeFlags & 10256) for (n = n.child; n !== null;) AE(r, n, o, s), n = n.sibling;
    }
    function AE(r, n, o, s) {
      var f = n.flags;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          Ur(r, n, o, s), f & 2048 && as(9, n);
          break;
        case 1:
          Ur(r, n, o, s);
          break;
        case 3:
          Ur(r, n, o, s), f & 2048 && (r = null, n.alternate !== null && (r = n.alternate.memoizedState.cache), n = n.memoizedState.cache, n !== r && (n.refCount++, r != null && Qu(r)));
          break;
        case 12:
          if (f & 2048) {
            Ur(r, n, o, s), r = n.stateNode;
            try {
              var p = n.memoizedProps,
                y = p.id,
                E = p.onPostCommit;
              typeof E == "function" && E(y, n.alternate === null ? "mount" : "update", r.passiveEffectDuration, -0);
            } catch (w) {
              ye(n, n.return, w);
            }
          } else Ur(r, n, o, s);
          break;
        case 31:
          Ur(r, n, o, s);
          break;
        case 13:
          Ur(r, n, o, s);
          break;
        case 23:
          break;
        case 22:
          p = n.stateNode, y = n.alternate, n.memoizedState !== null ? p._visibility & 2 ? Ur(r, n, o, s) : os(r, n) : p._visibility & 2 ? Ur(r, n, o, s) : (p._visibility |= 2, co(r, n, o, s, (n.subtreeFlags & 10256) !== 0 || !1)), f & 2048 && fv(y, n);
          break;
        case 24:
          Ur(r, n, o, s), f & 2048 && pv(n.alternate, n);
          break;
        default:
          Ur(r, n, o, s);
      }
    }
    function co(r, n, o, s, f) {
      for (f = f && ((n.subtreeFlags & 10256) !== 0 || !1), n = n.child; n !== null;) {
        var p = r,
          y = n,
          E = o,
          w = s,
          I = y.flags;
        switch (y.tag) {
          case 0:
          case 11:
          case 15:
            co(p, y, E, w, f), as(8, y);
            break;
          case 23:
            break;
          case 22:
            var K = y.stateNode;
            y.memoizedState !== null ? K._visibility & 2 ? co(p, y, E, w, f) : os(p, y) : (K._visibility |= 2, co(p, y, E, w, f)), f && I & 2048 && fv(y.alternate, y);
            break;
          case 24:
            co(p, y, E, w, f), f && I & 2048 && pv(y.alternate, y);
            break;
          default:
            co(p, y, E, w, f);
        }
        n = n.sibling;
      }
    }
    function os(r, n) {
      if (n.subtreeFlags & 10256) for (n = n.child; n !== null;) {
        var o = r,
          s = n,
          f = s.flags;
        switch (s.tag) {
          case 22:
            os(o, s), f & 2048 && fv(s.alternate, s);
            break;
          case 24:
            os(o, s), f & 2048 && pv(s.alternate, s);
            break;
          default:
            os(o, s);
        }
        n = n.sibling;
      }
    }
    function mi(r, n, o) {
      if (r.subtreeFlags & wo) for (r = r.child; r !== null;) OE(r, n, o), r = r.sibling;
    }
    function OE(r, n, o) {
      switch (r.tag) {
        case 26:
          if (mi(r, n, o), r.flags & wo) if (r.memoizedState !== null) dj(o, Lr, r.memoizedState, r.memoizedProps);else {
            var s = r.stateNode,
              f = r.type;
            r = r.memoizedProps, ((n & 335544128) === n || Mv(f, r)) && f1(o, s, f, r);
          }
          break;
        case 5:
          mi(r, n, o), r.flags & wo && (s = r.stateNode, f = r.type, r = r.memoizedProps, ((n & 335544128) === n || Mv(f, r)) && f1(o, s, f, r));
          break;
        case 3:
        case 4:
          zr ? (s = Lr, Lr = Iv(r.stateNode.containerInfo), mi(r, n, o), Lr = s) : mi(r, n, o);
          break;
        case 22:
          r.memoizedState === null && (s = r.alternate, s !== null && s.memoizedState !== null ? (s = wo, wo = 16777216, mi(r, n, o), wo = s) : mi(r, n, o));
          break;
        default:
          mi(r, n, o);
      }
    }
    function CE(r) {
      var n = r.alternate;
      if (n !== null && (r = n.child, r !== null)) {
        n.child = null;
        do n = r.sibling, r.sibling = null, r = n; while (r !== null);
      }
    }
    function us(r) {
      var n = r.deletions;
      if ((r.flags & 16) !== 0) {
        if (n !== null) for (var o = 0; o < n.length; o++) {
          var s = n[o];
          pt = s, NE(s, r);
        }
        CE(r);
      }
      if (r.subtreeFlags & 10256) for (r = r.child; r !== null;) RE(r), r = r.sibling;
    }
    function RE(r) {
      switch (r.tag) {
        case 0:
        case 11:
        case 15:
          us(r), r.flags & 2048 && ha(9, r, r.return);
          break;
        case 3:
          us(r);
          break;
        case 12:
          us(r);
          break;
        case 22:
          var n = r.stateNode;
          r.memoizedState !== null && n._visibility & 2 && (r.return === null || r.return.tag !== 13) ? (n._visibility &= -3, Bc(r)) : us(r);
          break;
        default:
          us(r);
      }
    }
    function Bc(r) {
      var n = r.deletions;
      if ((r.flags & 16) !== 0) {
        if (n !== null) for (var o = 0; o < n.length; o++) {
          var s = n[o];
          pt = s, NE(s, r);
        }
        CE(r);
      }
      for (r = r.child; r !== null;) {
        switch (n = r, n.tag) {
          case 0:
          case 11:
          case 15:
            ha(8, n, n.return), Bc(n);
            break;
          case 22:
            o = n.stateNode, o._visibility & 2 && (o._visibility &= -3, Bc(n));
            break;
          default:
            Bc(n);
        }
        r = r.sibling;
      }
    }
    function NE(r, n) {
      for (; pt !== null;) {
        var o = pt;
        switch (o.tag) {
          case 0:
          case 11:
          case 15:
            ha(8, o, n);
            break;
          case 23:
          case 22:
            if (o.memoizedState !== null && o.memoizedState.cachePool !== null) {
              var s = o.memoizedState.cachePool.pool;
              s != null && s.refCount++;
            }
            break;
          case 24:
            Qu(o.memoizedState.cache);
        }
        if (s = o.child, s !== null) s.return = o, pt = s;else e: for (o = r; pt !== null;) {
          s = pt;
          var f = s.sibling,
            p = s.return;
          if (SE(s), s === o) {
            pt = null;
            break e;
          }
          if (f !== null) {
            f.return = p, pt = f;
            break e;
          }
          pt = p;
        }
      }
    }
    function dv(r) {
      var n = Jz(r);
      if (n != null) {
        if (typeof n.memoizedProps["data-testname"] != "string") throw Error(i(364));
        return n;
      }
      if (r = lL(r), r === null) throw Error(i(362));
      return r.stateNode.current;
    }
    function mv(r, n) {
      var o = r.tag;
      switch (n.$$typeof) {
        case tf:
          if (r.type === n.value) return !0;
          break;
        case rf:
          e: {
            for (n = n.value, r = [r, 0], o = 0; o < r.length;) {
              var s = r[o++],
                f = s.tag,
                p = r[o++],
                y = n[p];
              if (f !== 5 && f !== 26 && f !== 27 || !fs(s)) {
                for (; y != null && mv(s, y);) p++, y = n[p];
                if (p === n.length) {
                  n = !0;
                  break e;
                } else for (s = s.child; s !== null;) r.push(s, p), s = s.sibling;
              }
            }
            n = !1;
          }
          return n;
        case nf:
          if ((o === 5 || o === 26 || o === 27) && pL(r.stateNode, n.value)) return !0;
          break;
        case of:
          if ((o === 5 || o === 6 || o === 26 || o === 27) && (r = fL(r), r !== null && 0 <= r.indexOf(n.value))) return !0;
          break;
        case af:
          if ((o === 5 || o === 26 || o === 27) && (r = r.memoizedProps["data-testname"], typeof r == "string" && r.toLowerCase() === n.value.toLowerCase())) return !0;
          break;
        default:
          throw Error(i(365));
      }
      return !1;
    }
    function vv(r) {
      switch (r.$$typeof) {
        case tf:
          return "<" + (g(r.value) || "Unknown") + ">";
        case rf:
          return ":has(" + (vv(r) || "") + ")";
        case nf:
          return '[role="' + r.value + '"]';
        case of:
          return '"' + r.value + '"';
        case af:
          return '[data-testname="' + r.value + '"]';
        default:
          throw Error(i(365));
      }
    }
    function wE(r, n) {
      var o = [];
      r = [r, 0];
      for (var s = 0; s < r.length;) {
        var f = r[s++],
          p = f.tag,
          y = r[s++],
          E = n[y];
        if (p !== 5 && p !== 26 && p !== 27 || !fs(f)) {
          for (; E != null && mv(f, E);) y++, E = n[y];
          if (y === n.length) o.push(f);else for (f = f.child; f !== null;) r.push(f, y), f = f.sibling;
        }
      }
      return o;
    }
    function hv(r, n) {
      if (!cs) throw Error(i(363));
      r = dv(r), r = wE(r, n), n = [], r = Array.from(r);
      for (var o = 0; o < r.length;) {
        var s = r[o++],
          f = s.tag;
        if (f === 5 || f === 26 || f === 27) fs(s) || n.push(s.stateNode);else for (s = s.child; s !== null;) r.push(s), s = s.sibling;
      }
      return n;
    }
    function or() {
      return (pe & 2) !== 0 && ve !== 0 ? ve & -ve : $.T !== null ? _m() : $z();
    }
    function ME() {
      if (dr === 0) if ((ve & 536870912) === 0 || he) {
        var r = Fc;
        Fc <<= 1, (Fc & 3932160) === 0 && (Fc = 262144), dr = r;
      } else dr = 536870912;
      return r = fr.current, r !== null && (r.flags |= 32), dr;
    }
    function Ft(r, n, o) {
      (r === Re && (qe === 2 || qe === 9) || r.cancelPendingCommit !== null) && (fo(r, 0), ga(r, ve, dr, !1)), G(r, o), ((pe & 2) === 0 || r !== Re) && (r === Re && ((pe & 2) === 0 && (qi |= o), Qe === 4 && ga(r, ve, dr, !1)), Wr(r));
    }
    function DE(r, n, o) {
      if ((pe & 6) !== 0) throw Error(i(327));
      var s = !o && (n & 127) === 0 && (n & r.expiredLanes) === 0 || T(r, n),
        f = s ? Nz(r, n) : yv(r, n, !0),
        p = s;
      do {
        if (f === 0) {
          Mo && !s && ga(r, n, 0, !1);
          break;
        } else {
          if (o = r.current.alternate, p && !Cz(o)) {
            f = yv(r, n, !1), p = !1;
            continue;
          }
          if (f === 2) {
            if (p = n, r.errorRecoveryDisabledLanes & p) var y = 0;else y = r.pendingLanes & -536870913, y = y !== 0 ? y : y & 536870912 ? 536870912 : 0;
            if (y !== 0) {
              n = y;
              e: {
                var E = r;
                f = xs;
                var w = Mt && E.current.memoizedState.isDehydrated;
                if (w && (fo(E, y).flags |= 256), y = yv(E, y, !1), y !== 2) {
                  if ($v && !w) {
                    E.errorRecoveryDisabledLanes |= p, qi |= p, f = 4;
                    break e;
                  }
                  p = Vt, Vt = f, p !== null && (Vt === null ? Vt = p : Vt.push.apply(Vt, p));
                }
                f = y;
              }
              if (p = !1, f !== 2) continue;
            }
          }
          if (f === 1) {
            fo(r, 0), ga(r, n, 0, !0);
            break;
          }
          e: {
            switch (s = r, p = f, p) {
              case 0:
              case 1:
                throw Error(i(345));
              case 4:
                if ((n & 4194048) !== n) break;
              case 6:
                ga(s, n, dr, !qa);
                break e;
              case 2:
                Vt = null;
                break;
              case 3:
              case 5:
                break;
              default:
                throw Error(i(329));
            }
            if ((n & 62914560) === n && (f = uf + 300 - Gt(), 10 < f)) {
              if (ga(s, n, dr, !qa), _(s, 0, !0) !== 0) break e;
              Ln = n, s.timeoutHandle = Qz(BE.bind(null, s, o, Vt, sf, th, n, dr, qi, Do, qa, p, "Throttled", -0, 0), f);
              break e;
            }
            BE(s, o, Vt, sf, th, n, dr, qi, Do, qa, p, null, -0, 0);
          }
        }
        break;
      } while (!0);
      Wr(r);
    }
    function BE(r, n, o, s, f, p, y, E, w, I, K, H, Y, oe) {
      if (r.timeoutHandle = hi, H = n.subtreeFlags, H & 8192 || (H & 16785408) === 16785408) {
        H = aL(), OE(n, p, H);
        var St = (p & 62914560) === p ? uf - Gt() : (p & 4194048) === p ? L1 - Gt() : 0;
        if (St = iL(H, St), St !== null) {
          Ln = p, r.cancelPendingCommit = St(GE.bind(null, r, n, p, o, s, f, y, E, w, K, H, null, Y, oe)), ga(r, p, y, !I);
          return;
        }
      }
      GE(r, n, p, o, s, f, y, E, w);
    }
    function Cz(r) {
      for (var n = r;;) {
        var o = n.tag;
        if ((o === 0 || o === 11 || o === 15) && n.flags & 16384 && (o = n.updateQueue, o !== null && (o = o.stores, o !== null))) for (var s = 0; s < o.length; s++) {
          var f = o[s],
            p = f.getSnapshot;
          f = f.value;
          try {
            if (!cr(p(), f)) return !1;
          } catch (_unused65) {
            return !1;
          }
        }
        if (o = n.child, n.subtreeFlags & 16384 && o !== null) o.return = n, n = o;else {
          if (n === r) break;
          for (; n.sibling === null;) {
            if (n.return === null || n.return === r) return !0;
            n = n.return;
          }
          n.sibling.return = n.return, n = n.sibling;
        }
      }
      return !0;
    }
    function ga(r, n, o, s) {
      n &= ~eh, n &= ~qi, r.suspendedLanes |= n, r.pingedLanes &= ~n, s && (r.warmLanes |= n), s = r.expirationTimes;
      for (var f = n; 0 < f;) {
        var p = 31 - sr(f),
          y = 1 << p;
        s[p] = -1, f &= ~y;
      }
      o !== 0 && te(r, o, n);
    }
    function IE() {
      return (pe & 6) === 0 ? (so(0, !1), !1) : !0;
    }
    function gv() {
      if (de !== null) {
        if (qe === 0) var r = de.return;else r = de, In = yi = null, zm(r), Ao = null, hs = 0, r = de;
        for (; r !== null;) dE(r.alternate, r), r = r.return;
        de = null;
      }
    }
    function fo(r, n) {
      var o = r.timeoutHandle;
      o !== hi && (r.timeoutHandle = hi, Zz(o)), o = r.cancelPendingCommit, o !== null && (r.cancelPendingCommit = null, o()), Ln = 0, gv(), Re = r, de = o = Mn(r.current, null), ve = n, qe = 0, pr = null, qa = !1, Mo = T(r, n), $v = !1, Do = dr = eh = qi = _a = Qe = 0, Vt = xs = null, th = !1, (n & 8) !== 0 && (n |= n & 32);
      var s = r.entangledLanes;
      if (s !== 0) for (r = r.entanglements, s &= n; 0 < s;) {
        var f = 31 - sr(s),
          p = 1 << f;
        n |= r[f], s &= ~p;
      }
      return zn = n, hc(), o;
    }
    function PE(r, n) {
      se = null, $.H = ys, n === _o || n === Zc ? (n = rS(), qe = 3) : n === Vv ? (n = rS(), qe = 4) : qe = n === Zv ? 8 : n !== null && _typeof(n) == "object" && typeof n.then == "function" ? 6 : 1, pr = n, de === null && (Qe = 1, Ac(r, Pe(n, r.current)));
    }
    function UE() {
      var r = fr.current;
      return r === null ? !0 : (ve & 4194048) === ve ? qr === null : (ve & 62914560) === ve || (ve & 536870912) !== 0 ? r === qr : !1;
    }
    function zE() {
      var r = $.H;
      return $.H = ys, r === null ? ys : r;
    }
    function LE() {
      var r = $.A;
      return $.A = Cj, r;
    }
    function Ic() {
      Qe = 4, qa || (ve & 4194048) !== ve && fr.current !== null || (Mo = !0), (_a & 134217727) === 0 && (qi & 134217727) === 0 || Re === null || ga(Re, ve, dr, !1);
    }
    function yv(r, n, o) {
      var s = pe;
      pe |= 2;
      var f = zE(),
        p = LE();
      (Re !== r || ve !== n) && (sf = null, fo(r, n)), n = !1;
      var y = Qe;
      e: do try {
        if (qe !== 0 && de !== null) {
          var E = de,
            w = pr;
          switch (qe) {
            case 8:
              gv(), y = 6;
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              fr.current === null && (n = !0);
              var I = qe;
              if (qe = 0, pr = null, po(r, E, w, I), o && Mo) {
                y = 0;
                break e;
              }
              break;
            default:
              I = qe, qe = 0, pr = null, po(r, E, w, I);
          }
        }
        Rz(), y = Qe;
        break;
      } catch (K) {
        PE(r, K);
      } while (!0);
      return n && r.shellSuspendCounter++, In = yi = null, pe = s, $.H = f, $.A = p, de === null && (Re = null, ve = 0, hc()), y;
    }
    function Rz() {
      for (; de !== null;) jE(de);
    }
    function Nz(r, n) {
      var o = pe;
      pe |= 2;
      var s = zE(),
        f = LE();
      Re !== r || ve !== n ? (sf = null, Ss = Gt() + 500, fo(r, n)) : Mo = T(r, n);
      e: do try {
        if (qe !== 0 && de !== null) {
          n = de;
          var p = pr;
          t: switch (qe) {
            case 1:
              qe = 0, pr = null, po(r, n, p, 1);
              break;
            case 2:
            case 9:
              if (eS(p)) {
                qe = 0, pr = null, HE(n);
                break;
              }
              n = function n() {
                qe !== 2 && qe !== 9 || Re !== r || (qe = 7), Wr(r);
              }, p.then(n, n);
              break e;
            case 3:
              qe = 7;
              break e;
            case 4:
              qe = 5;
              break e;
            case 7:
              eS(p) ? (qe = 0, pr = null, HE(n)) : (qe = 0, pr = null, po(r, n, p, 7));
              break;
            case 5:
              var y = null;
              switch (de.tag) {
                case 26:
                  y = de.memoizedState;
                case 5:
                case 27:
                  var E = de,
                    w = E.type,
                    I = E.pendingProps;
                  if (y ? A1(y) : c1(E.stateNode, w, I)) {
                    qe = 0, pr = null;
                    var K = E.sibling;
                    if (K !== null) de = K;else {
                      var H = E.return;
                      H !== null ? (de = H, Pc(H)) : de = null;
                    }
                    break t;
                  }
              }
              qe = 0, pr = null, po(r, n, p, 5);
              break;
            case 6:
              qe = 0, pr = null, po(r, n, p, 6);
              break;
            case 8:
              gv(), Qe = 6;
              break e;
            default:
              throw Error(i(462));
          }
        }
        wz();
        break;
      } catch (Y) {
        PE(r, Y);
      } while (!0);
      return In = yi = null, $.H = s, $.A = f, pe = o, de !== null ? 0 : (Re = null, ve = 0, hc(), Qe);
    }
    function wz() {
      for (; de !== null && !gj();) jE(de);
    }
    function jE(r) {
      var n = sE(r.alternate, r, zn);
      r.memoizedProps = r.pendingProps, n === null ? Pc(r) : de = n;
    }
    function HE(r) {
      var n = r,
        o = n.alternate;
      switch (n.tag) {
        case 15:
        case 0:
          n = rE(o, n, n.pendingProps, n.type, void 0, ve);
          break;
        case 11:
          n = rE(o, n, n.pendingProps, n.type.render, n.ref, ve);
          break;
        case 5:
          zm(n);
        default:
          dE(o, n), n = de = JE(n, zn), n = sE(o, n, zn);
      }
      r.memoizedProps = r.pendingProps, n === null ? Pc(r) : de = n;
    }
    function po(r, n, o, s) {
      In = yi = null, zm(n), Ao = null, hs = 0;
      var f = n.return;
      try {
        if (Sz(r, f, n, o, ve)) {
          Qe = 1, Ac(r, Pe(o, r.current)), de = null;
          return;
        }
      } catch (p) {
        if (f !== null) throw de = f, p;
        Qe = 1, Ac(r, Pe(o, r.current)), de = null;
        return;
      }
      n.flags & 32768 ? (he || s === 1 ? r = !0 : Mo || (ve & 536870912) !== 0 ? r = !1 : (qa = r = !0, (s === 2 || s === 9 || s === 3 || s === 6) && (s = fr.current, s !== null && s.tag === 13 && (s.flags |= 16384))), FE(n, r)) : Pc(n);
    }
    function Pc(r) {
      var n = r;
      do {
        if ((n.flags & 32768) !== 0) {
          FE(n, qa);
          return;
        }
        r = n.return;
        var o = qz(n.alternate, n, zn);
        if (o !== null) {
          de = o;
          return;
        }
        if (n = n.sibling, n !== null) {
          de = n;
          return;
        }
        de = n = r;
      } while (n !== null);
      Qe === 0 && (Qe = 5);
    }
    function FE(r, n) {
      do {
        var o = _z(r.alternate, r);
        if (o !== null) {
          o.flags &= 32767, de = o;
          return;
        }
        if (o = r.return, o !== null && (o.flags |= 32768, o.subtreeFlags = 0, o.deletions = null), !n && (r = r.sibling, r !== null)) {
          de = r;
          return;
        }
        de = r = o;
      } while (r !== null);
      Qe = 6, de = null;
    }
    function GE(r, n, o, s, f, p, y, E, w) {
      r.cancelPendingCommit = null;
      do ss(); while (ut !== 0);
      if ((pe & 6) !== 0) throw Error(i(327));
      if (n !== null) {
        if (n === r.current) throw Error(i(177));
        if (p = n.lanes | n.childLanes, p |= Yv, V(r, o, p, y, E, w), r === Re && (de = Re = null, ve = 0), Bo = n, Oa = r, Ln = o, rh = p, nh = f, j1 = s, (n.subtreeFlags & 10256) !== 0 || (n.flags & 10256) !== 0 ? (r.callbackNode = null, r.callbackPriority = 0, Iz(zv, function () {
          return kE(), null;
        })) : (r.callbackNode = null, r.callbackPriority = 0), s = (n.flags & 13878) !== 0, (n.subtreeFlags & 13878) !== 0 || s) {
          s = $.T, $.T = null, f = Bn(), ft(2), y = pe, pe |= 4;
          try {
            Az(r, n, o);
          } finally {
            pe = y, ft(f), $.T = s;
          }
        }
        ut = 1, KE(), VE(), YE();
      }
    }
    function KE() {
      if (ut === 1) {
        ut = 0;
        var r = Oa,
          n = Bo,
          o = (n.flags & 13878) !== 0;
        if ((n.subtreeFlags & 13878) !== 0 || o) {
          o = $.T, $.T = null;
          var s = Bn();
          ft(2);
          var f = pe;
          pe |= 4;
          try {
            qE(n, r), Xz(r.containerInfo);
          } finally {
            pe = f, ft(s), $.T = o;
          }
        }
        r.current = n, ut = 2;
      }
    }
    function VE() {
      if (ut === 2) {
        ut = 0;
        var r = Oa,
          n = Bo,
          o = (n.flags & 8772) !== 0;
        if ((n.subtreeFlags & 8772) !== 0 || o) {
          o = $.T, $.T = null;
          var s = Bn();
          ft(2);
          var f = pe;
          pe |= 4;
          try {
            xE(r, n.alternate, n);
          } finally {
            pe = f, ft(s), $.T = o;
          }
        }
        ut = 3;
      }
    }
    function YE() {
      if (ut === 4 || ut === 3) {
        ut = 0, yj();
        var r = Oa,
          n = Bo,
          o = Ln,
          s = j1;
        (n.subtreeFlags & 10256) !== 0 || (n.flags & 10256) !== 0 ? ut = 5 : (ut = 0, Bo = Oa = null, XE(r, r.pendingLanes));
        var f = r.pendingLanes;
        if (f === 0 && (Aa = null), X(o), n = n.stateNode, lr && typeof lr.onCommitFiberRoot == "function") try {
          lr.onCommitFiberRoot(ps, n, void 0, (n.current.flags & 128) === 128);
        } catch (_unused66) {}
        if (s !== null) {
          n = $.T, f = Bn(), ft(2), $.T = null;
          try {
            for (var p = r.onRecoverableError, y = 0; y < s.length; y++) {
              var E = s[y];
              p(E.value, {
                componentStack: E.stack
              });
            }
          } finally {
            $.T = n, ft(f);
          }
        }
        (Ln & 3) !== 0 && ss(), Wr(r), f = r.pendingLanes, (o & 261930) !== 0 && (f & 42) !== 0 ? r === ah ? Es++ : (Es = 0, ah = r) : Es = 0, Mt && rj(), so(0, !1);
      }
    }
    function XE(r, n) {
      (r.pooledCacheLanes &= n) === 0 && (n = r.pooledCache, n != null && (r.pooledCache = null, Qu(n)));
    }
    function ss() {
      return KE(), VE(), YE(), kE();
    }
    function kE() {
      if (ut !== 5) return !1;
      var r = Oa,
        n = rh;
      rh = 0;
      var o = X(Ln),
        s = 32 > o ? 32 : o;
      o = $.T;
      var f = Bn();
      try {
        ft(s), $.T = null, s = nh, nh = null;
        var p = Oa,
          y = Ln;
        if (ut = 0, Bo = Oa = null, Ln = 0, (pe & 6) !== 0) throw Error(i(331));
        var E = pe;
        if (pe |= 4, RE(p.current), AE(p, p.current, y, s), pe = E, so(0, !1), lr && typeof lr.onPostCommitFiberRoot == "function") try {
          lr.onPostCommitFiberRoot(ps, p);
        } catch (_unused67) {}
        return !0;
      } finally {
        ft(f), $.T = o, XE(r, n);
      }
    }
    function QE(r, n, o) {
      n = Pe(o, n), n = Zm(r.stateNode, n, 2), r = da(r, n, 2), r !== null && (G(r, 2), Wr(r));
    }
    function ye(r, n, o) {
      if (r.tag === 3) QE(r, r, o);else for (; n !== null;) {
        if (n.tag === 3) {
          QE(n, r, o);
          break;
        } else if (n.tag === 1) {
          var s = n.stateNode;
          if (typeof n.type.getDerivedStateFromError == "function" || typeof s.componentDidCatch == "function" && (Aa === null || !Aa.has(s))) {
            r = Pe(o, r), o = kS(2), s = da(n, o, 2), s !== null && (QS(o, s, n, r), G(s, 2), Wr(s));
            break;
          }
        }
        n = n.return;
      }
    }
    function bv(r, n, o) {
      var s = r.pingCache;
      if (s === null) {
        s = r.pingCache = new Rj();
        var f = new Set();
        s.set(n, f);
      } else f = s.get(n), f === void 0 && (f = new Set(), s.set(n, f));
      f.has(o) || ($v = !0, f.add(o), r = Mz.bind(null, r, n, o), n.then(r, r));
    }
    function Mz(r, n, o) {
      var s = r.pingCache;
      s !== null && s.delete(n), r.pingedLanes |= r.suspendedLanes & o, r.warmLanes &= ~o, Re === r && (ve & o) === o && (Qe === 4 || Qe === 3 && (ve & 62914560) === ve && 300 > Gt() - uf ? (pe & 2) === 0 && fo(r, 0) : eh |= o, Do === ve && (Do = 0)), Wr(r);
    }
    function ZE(r, n) {
      n === 0 && (n = M()), r = fi(r, n), r !== null && (G(r, n), Wr(r));
    }
    function Dz(r) {
      var n = r.memoizedState,
        o = 0;
      n !== null && (o = n.retryLane), ZE(r, o);
    }
    function Bz(r, n) {
      var o = 0;
      switch (r.tag) {
        case 31:
        case 13:
          var s = r.stateNode,
            f = r.memoizedState;
          f !== null && (o = f.retryLane);
          break;
        case 19:
          s = r.stateNode;
          break;
        case 22:
          s = r.stateNode._retryCache;
          break;
        default:
          throw Error(i(314));
      }
      s !== null && s.delete(n), ZE(r, o);
    }
    function Iz(r, n) {
      return Kc(r, n);
    }
    function Pz(r, n, o, s) {
      this.tag = r, this.key = o, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = n, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = s, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
    }
    function xv(r) {
      return r = r.prototype, !(!r || !r.isReactComponent);
    }
    function Mn(r, n) {
      var o = r.alternate;
      return o === null ? (o = t(r.tag, n, r.key, r.mode), o.elementType = r.elementType, o.type = r.type, o.stateNode = r.stateNode, o.alternate = r, r.alternate = o) : (o.pendingProps = n, o.type = r.type, o.flags = 0, o.subtreeFlags = 0, o.deletions = null), o.flags = r.flags & 65011712, o.childLanes = r.childLanes, o.lanes = r.lanes, o.child = r.child, o.memoizedProps = r.memoizedProps, o.memoizedState = r.memoizedState, o.updateQueue = r.updateQueue, n = r.dependencies, o.dependencies = n === null ? null : {
        lanes: n.lanes,
        firstContext: n.firstContext
      }, o.sibling = r.sibling, o.index = r.index, o.ref = r.ref, o.refCleanup = r.refCleanup, o;
    }
    function JE(r, n) {
      r.flags &= 65011714;
      var o = r.alternate;
      return o === null ? (r.childLanes = 0, r.lanes = n, r.child = null, r.subtreeFlags = 0, r.memoizedProps = null, r.memoizedState = null, r.updateQueue = null, r.dependencies = null, r.stateNode = null) : (r.childLanes = o.childLanes, r.lanes = o.lanes, r.child = o.child, r.subtreeFlags = 0, r.deletions = null, r.memoizedProps = o.memoizedProps, r.memoizedState = o.memoizedState, r.updateQueue = o.updateQueue, r.type = o.type, n = o.dependencies, r.dependencies = n === null ? null : {
        lanes: n.lanes,
        firstContext: n.firstContext
      }), r;
    }
    function Uc(r, n, o, s, f, p) {
      var y = 0;
      if (s = r, typeof r == "function") xv(r) && (y = 1);else if (typeof r == "string") y = zr && ot ? x1(r, o, bt.current) ? 26 : R1(r) ? 27 : 5 : zr ? x1(r, o, bt.current) ? 26 : 5 : ot && R1(r) ? 27 : 5;else e: switch (r) {
        case Nv:
          return r = t(31, o, n, f), r.elementType = Nv, r.lanes = p, r;
        case vo:
          return vi(o.children, f, p, n);
        case a1:
          y = 8, f |= 24;
          break;
        case _v:
          return r = t(12, o, n, f | 2), r.elementType = _v, r.lanes = p, r;
        case Ov:
          return r = t(13, o, n, f), r.elementType = Ov, r.lanes = p, r;
        case Cv:
          return r = t(19, o, n, f), r.elementType = Cv, r.lanes = p, r;
        default:
          if (_typeof(r) == "object" && r !== null) switch (r.$$typeof) {
            case ya:
              y = 10;
              break e;
            case i1:
              y = 9;
              break e;
            case Av:
              y = 11;
              break e;
            case Rv:
              y = 14;
              break e;
            case ba:
              y = 16, s = null;
              break e;
          }
          y = 29, o = Error(i(130, r === null ? "null" : _typeof(r), "")), s = null;
      }
      return n = t(y, o, n, f), n.elementType = r, n.type = s, n.lanes = p, n;
    }
    function vi(r, n, o, s) {
      return r = t(7, r, s, n), r.lanes = o, r;
    }
    function Sv(r, n, o) {
      return r = t(6, r, null, n), r.lanes = o, r;
    }
    function WE(r) {
      var n = t(18, null, null, 0);
      return n.stateNode = r, n;
    }
    function Ev(r, n, o) {
      return n = t(4, r.children !== null ? r.children : [], r.key, n), n.lanes = o, n.stateNode = {
        containerInfo: r.containerInfo,
        pendingChildren: null,
        implementation: r.implementation
      }, n;
    }
    function Uz(r, n, o, s, f, p, y, E, w) {
      this.tag = 1, this.containerInfo = r, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = hi, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = B(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = B(0), this.hiddenUpdates = B(null), this.identifierPrefix = s, this.onUncaughtError = f, this.onCaughtError = p, this.onRecoverableError = y, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = w, this.incompleteTransitions = new Map();
    }
    function $E(r, n, o, s, f, p, y, E, w, I, K, H) {
      return r = new Uz(r, n, o, y, w, I, K, H, E), n = 1, p === !0 && (n |= 24), p = t(3, null, null, n), r.current = p, p.stateNode = r, n = qm(), n.refCount++, r.pooledCache = n, n.refCount++, p.memoizedState = {
        element: s,
        isDehydrated: o,
        cache: n
      }, Cm(p), r;
    }
    function e1(r) {
      return r ? (r = bo, r) : bo;
    }
    function t1(r) {
      var n = r._reactInternals;
      if (n === void 0) throw typeof r.render == "function" ? Error(i(188)) : (r = Object.keys(r).join(","), Error(i(268, r)));
      return r = c(n), r = r !== null ? d(r) : null, r === null ? null : ls(r.stateNode);
    }
    function r1(r, n, o, s, f, p) {
      f = e1(f), s.context === null ? s.context = f : s.pendingContext = f, s = pa(n), s.payload = {
        element: o
      }, p = p === void 0 ? null : p, p !== null && (s.callback = p), o = da(r, s, n), o !== null && (Ft(o, r, n), Ju(o, r, n));
    }
    function n1(r, n) {
      if (r = r.memoizedState, r !== null && r.dehydrated !== null) {
        var o = r.retryLane;
        r.retryLane = o !== 0 && o < n ? o : n;
      }
    }
    function Tv(r, n) {
      n1(r, n), (r = r.alternate) && n1(r, n);
    }
    var fe = {},
      zz = _t(),
      ur = XU(),
      qv = Object.assign,
      Lz = Symbol.for("react.element"),
      zc = Symbol.for("react.transitional.element"),
      mo = Symbol.for("react.portal"),
      vo = Symbol.for("react.fragment"),
      a1 = Symbol.for("react.strict_mode"),
      _v = Symbol.for("react.profiler"),
      i1 = Symbol.for("react.consumer"),
      ya = Symbol.for("react.context"),
      Av = Symbol.for("react.forward_ref"),
      Ov = Symbol.for("react.suspense"),
      Cv = Symbol.for("react.suspense_list"),
      Rv = Symbol.for("react.memo"),
      ba = Symbol.for("react.lazy"),
      Nv = Symbol.for("react.activity"),
      jz = Symbol.for("react.memo_cache_sentinel"),
      o1 = Symbol.iterator,
      Hz = Symbol.for("react.client.reference"),
      Lc = Array.isArray,
      $ = zz.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
      Fz = e.rendererVersion,
      Gz = e.rendererPackageName,
      u1 = e.extraDevToolsConfig,
      ls = e.getPublicInstance,
      Kz = e.getRootHostContext,
      Vz = e.getChildHostContext,
      Yz = e.prepareForCommit,
      Xz = e.resetAfterCommit,
      kz = e.createInstance;
    e.cloneMutableInstance;
    var wv = e.appendInitialChild,
      s1 = e.finalizeInitialChildren,
      jc = e.shouldSetTextContent,
      l1 = e.createTextInstance;
    e.cloneMutableTextInstance;
    var Qz = e.scheduleTimeout,
      Zz = e.cancelTimeout,
      hi = e.noTimeout,
      Dn = e.isPrimaryRenderer;
    e.warnsIfNotActing;
    var wt = e.supportsMutation,
      en = e.supportsPersistence,
      Mt = e.supportsHydration,
      Jz = e.getInstanceFromNode;
    e.beforeActiveInstanceBlur;
    var Wz = e.preparePortalMount;
    e.prepareScopeUpdate, e.getInstanceFromScope;
    var ft = e.setCurrentUpdatePriority,
      Bn = e.getCurrentUpdatePriority,
      $z = e.resolveUpdatePriority;
    e.trackSchedulerEvent, e.resolveEventType, e.resolveEventTimeStamp;
    var eL = e.shouldAttemptEagerTransition,
      tL = e.detachDeletedInstance;
    e.requestPostPaintCallback;
    var rL = e.maySuspendCommit,
      nL = e.maySuspendCommitOnUpdate,
      Mv = e.maySuspendCommitInSyncRender,
      c1 = e.preloadInstance,
      aL = e.startSuspendingCommit,
      f1 = e.suspendInstance;
    e.suspendOnActiveViewTransition;
    var iL = e.waitForCommitToBeReady;
    e.getSuspendedCommitReason;
    var ho = e.NotPendingTransition,
      gi = e.HostTransitionContext,
      oL = e.resetFormInstance;
    e.bindToConsole;
    var uL = e.supportsMicrotasks,
      sL = e.scheduleMicrotask,
      cs = e.supportsTestSelectors,
      lL = e.findFiberRoot,
      cL = e.getBoundingRect,
      fL = e.getTextContent,
      fs = e.isHiddenSubtree,
      pL = e.matchAccessibilityRole,
      dL = e.setFocusIfFocusable,
      mL = e.setupIntersectionObserver,
      vL = e.appendChild,
      hL = e.appendChildToContainer,
      gL = e.commitTextUpdate,
      yL = e.commitMount,
      bL = e.commitUpdate,
      xL = e.insertBefore,
      SL = e.insertInContainerBefore,
      EL = e.removeChild,
      TL = e.removeChildFromContainer,
      p1 = e.resetTextContent,
      qL = e.hideInstance,
      _L = e.hideTextInstance,
      AL = e.unhideInstance,
      OL = e.unhideTextInstance;
    e.cancelViewTransitionName, e.cancelRootViewTransitionName, e.restoreRootViewTransitionName, e.cloneRootViewTransitionContainer, e.removeRootViewTransitionClone, e.measureClonedInstance, e.hasInstanceChanged, e.hasInstanceAffectedParent, e.startViewTransition, e.startGestureTransition, e.stopViewTransition, e.getCurrentGestureOffset, e.createViewTransitionInstance;
    var CL = e.clearContainer;
    e.createFragmentInstance, e.updateFragmentInstanceFiber, e.commitNewChildToFragmentInstance, e.deleteChildFromFragmentInstance;
    var RL = e.cloneInstance,
      d1 = e.createContainerChildSet,
      m1 = e.appendChildToContainerChildSet,
      NL = e.finalizeContainerChildren,
      v1 = e.replaceContainerChildren,
      h1 = e.cloneHiddenInstance,
      g1 = e.cloneHiddenTextInstance,
      Dv = e.isSuspenseInstancePending,
      Bv = e.isSuspenseInstanceFallback,
      wL = e.getSuspenseInstanceFallbackErrorDetails,
      ML = e.registerSuspenseInstanceRetry,
      DL = e.canHydrateFormStateMarker,
      BL = e.isFormStateMarkerMatching,
      y1 = e.getNextHydratableSibling,
      IL = e.getNextHydratableSiblingAfterSingleton,
      PL = e.getFirstHydratableChild,
      UL = e.getFirstHydratableChildWithinContainer,
      zL = e.getFirstHydratableChildWithinActivityInstance,
      LL = e.getFirstHydratableChildWithinSuspenseInstance,
      jL = e.getFirstHydratableChildWithinSingleton,
      HL = e.canHydrateInstance,
      FL = e.canHydrateTextInstance,
      GL = e.canHydrateActivityInstance,
      KL = e.canHydrateSuspenseInstance,
      VL = e.hydrateInstance,
      YL = e.hydrateTextInstance,
      XL = e.hydrateActivityInstance,
      kL = e.hydrateSuspenseInstance,
      QL = e.getNextHydratableInstanceAfterActivityInstance,
      ZL = e.getNextHydratableInstanceAfterSuspenseInstance,
      JL = e.commitHydratedInstance,
      WL = e.commitHydratedContainer,
      $L = e.commitHydratedActivityInstance,
      ej = e.commitHydratedSuspenseInstance,
      tj = e.finalizeHydratedChildren,
      rj = e.flushHydrationEvents;
    e.clearActivityBoundary;
    var nj = e.clearSuspenseBoundary;
    e.clearActivityBoundaryFromContainer;
    var aj = e.clearSuspenseBoundaryFromContainer,
      ij = e.hideDehydratedBoundary,
      oj = e.unhideDehydratedBoundary,
      b1 = e.shouldDeleteUnhydratedTailInstances;
    e.diffHydratedPropsForDevWarnings, e.diffHydratedTextForDevWarnings, e.describeHydratableInstanceForDevWarnings;
    var uj = e.validateHydratableInstance,
      sj = e.validateHydratableTextInstance,
      zr = e.supportsResources,
      x1 = e.isHostHoistableType,
      Iv = e.getHoistableRoot,
      S1 = e.getResource,
      E1 = e.acquireResource,
      T1 = e.releaseResource,
      lj = e.hydrateHoistable,
      q1 = e.mountHoistable,
      _1 = e.unmountHoistable,
      cj = e.createHoistableInstance,
      fj = e.prepareToCommitHoistables,
      pj = e.mayResourceSuspendCommit,
      A1 = e.preloadResource,
      dj = e.suspendResource,
      ot = e.supportsSingletons,
      O1 = e.resolveSingletonInstance,
      mj = e.acquireSingletonInstance,
      C1 = e.releaseSingletonInstance,
      R1 = e.isHostSingletonType,
      go = e.isSingletonScope,
      Pv = [],
      yo = -1,
      bo = {},
      sr = Math.clz32 ? Math.clz32 : O,
      vj = Math.log,
      hj = Math.LN2,
      Hc = 256,
      Fc = 262144,
      Gc = 4194304,
      Kc = ur.unstable_scheduleCallback,
      Uv = ur.unstable_cancelCallback,
      gj = ur.unstable_shouldYield,
      yj = ur.unstable_requestPaint,
      Gt = ur.unstable_now,
      N1 = ur.unstable_ImmediatePriority,
      bj = ur.unstable_UserBlockingPriority,
      zv = ur.unstable_NormalPriority,
      xj = ur.unstable_IdlePriority,
      Sj = ur.log,
      Ej = ur.unstable_setDisableYieldValue,
      ps = null,
      lr = null,
      cr = typeof Object.is == "function" ? Object.is : me,
      w1 = typeof reportError == "function" ? reportError : function (r) {
        if ((typeof window === "undefined" ? "undefined" : _typeof(window)) == "object" && typeof window.ErrorEvent == "function") {
          var n = new window.ErrorEvent("error", {
            bubbles: !0,
            cancelable: !0,
            message: _typeof(r) == "object" && r !== null && typeof r.message == "string" ? String(r.message) : String(r),
            error: r
          });
          if (!window.dispatchEvent(n)) return;
        } else if ((typeof process === "undefined" ? "undefined" : _typeof(process)) == "object" && typeof process.emit == "function") {
          process.emit("uncaughtException", r);
          return;
        }
        console.error(r);
      },
      Tj = Object.prototype.hasOwnProperty,
      Lv,
      M1,
      jv = !1,
      D1 = new WeakMap(),
      xo = [],
      So = 0,
      Vc = null,
      ds = 0,
      xr = [],
      Sr = 0,
      xa = null,
      tn = 1,
      rn = "",
      bt = b(null),
      ms = b(null),
      Sa = b(null),
      Yc = b(null),
      xt = null,
      Fe = null,
      he = !1,
      Ea = null,
      Er = !1,
      Hv = Error(i(519)),
      Xc = b(null),
      yi = null,
      In = null,
      qj = (typeof AbortController === "undefined" ? "undefined" : _typeof(AbortController)) < "u" ? AbortController : function () {
        var r = [],
          n = this.signal = {
            aborted: !1,
            addEventListener: function addEventListener(o, s) {
              r.push(s);
            }
          };
        this.abort = function () {
          n.aborted = !0, r.forEach(function (o) {
            return o();
          });
        };
      },
      _j = ur.unstable_scheduleCallback,
      Aj = ur.unstable_NormalPriority,
      Ge = {
        $$typeof: ya,
        Consumer: null,
        Provider: null,
        _currentValue: null,
        _currentValue2: null,
        _threadCount: 0
      },
      kc = null,
      Eo = null,
      Fv = !1,
      Qc = !1,
      Gv = !1,
      bi = 0,
      vs = null,
      Kv = 0,
      To = 0,
      qo = null,
      B1 = $.S;
    $.S = function (r, n) {
      L1 = Gt(), _typeof(n) == "object" && n !== null && typeof n.then == "function" && dz(r, n), B1 !== null && B1(r, n);
    };
    var xi = b(null),
      _o = Error(i(460)),
      Vv = Error(i(474)),
      Zc = Error(i(542)),
      Jc = {
        then: function then() {}
      },
      Si = null,
      Ao = null,
      hs = 0,
      Ei = aS(!0),
      I1 = aS(!1),
      Tr = [],
      Oo = 0,
      Yv = 0,
      Ta = !1,
      Xv = !1,
      Co = b(null),
      Wc = b(0),
      fr = b(null),
      qr = null,
      et = b(0),
      Pn = 0,
      se = null,
      Ae = null,
      tt = null,
      $c = !1,
      Ro = !1,
      Ti = !1,
      ef = 0,
      gs = 0,
      No = null,
      Oj = 0,
      ys = {
        readContext: gt,
        use: Sc,
        useCallback: ke,
        useContext: ke,
        useEffect: ke,
        useImperativeHandle: ke,
        useLayoutEffect: ke,
        useInsertionEffect: ke,
        useMemo: ke,
        useReducer: ke,
        useRef: ke,
        useState: ke,
        useDebugValue: ke,
        useDeferredValue: ke,
        useTransition: ke,
        useSyncExternalStore: ke,
        useId: ke,
        useHostTransitionStatus: ke,
        useFormState: ke,
        useActionState: ke,
        useOptimistic: ke,
        useMemoCache: ke,
        useCacheRefresh: ke
      };
    ys.useEffectEvent = ke;
    var P1 = {
        readContext: gt,
        use: Sc,
        useCallback: function useCallback(r, n) {
          return It().memoizedState = [r, n === void 0 ? null : n], r;
        },
        useContext: gt,
        useEffect: RS,
        useImperativeHandle: function useImperativeHandle(r, n, o) {
          o = o != null ? o.concat([r]) : null, Tc(4194308, 4, DS.bind(null, n, r), o);
        },
        useLayoutEffect: function useLayoutEffect(r, n) {
          return Tc(4194308, 4, r, n);
        },
        useInsertionEffect: function useInsertionEffect(r, n) {
          Tc(4, 2, r, n);
        },
        useMemo: function useMemo(r, n) {
          var o = It();
          n = n === void 0 ? null : n;
          var s = r();
          if (Ti) {
            ce(!0);
            try {
              r();
            } finally {
              ce(!1);
            }
          }
          return o.memoizedState = [s, n], s;
        },
        useReducer: function useReducer(r, n, o) {
          var s = It();
          if (o !== void 0) {
            var f = o(n);
            if (Ti) {
              ce(!0);
              try {
                o(n);
              } finally {
                ce(!1);
              }
            }
          } else f = n;
          return s.memoizedState = s.baseState = f, r = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: r,
            lastRenderedState: f
          }, s.queue = r, r = r.dispatch = xz.bind(null, se, r), [s.memoizedState, r];
        },
        useRef: function useRef(r) {
          var n = It();
          return r = {
            current: r
          }, n.memoizedState = r;
        },
        useState: function useState(r) {
          r = Fm(r);
          var n = r.queue,
            o = FS.bind(null, se, n);
          return n.dispatch = o, [r.memoizedState, o];
        },
        useDebugValue: Vm,
        useDeferredValue: function useDeferredValue(r, n) {
          var o = It();
          return Ym(o, r, n);
        },
        useTransition: function useTransition() {
          var r = Fm(!1);
          return r = zS.bind(null, se, r.queue, !0, !1), It().memoizedState = r, [!1, r];
        },
        useSyncExternalStore: function useSyncExternalStore(r, n, o) {
          var s = se,
            f = It();
          if (he) {
            if (o === void 0) throw Error(i(407));
            o = o();
          } else {
            if (o = n(), Re === null) throw Error(i(349));
            (ve & 127) !== 0 || dS(s, n, o);
          }
          f.memoizedState = o;
          var p = {
            value: o,
            getSnapshot: n
          };
          return f.queue = p, RS(vS.bind(null, s, p, r), [r]), s.flags |= 2048, lo(9, {
            destroy: void 0
          }, mS.bind(null, s, p, o, n), null), o;
        },
        useId: function useId() {
          var r = It(),
            n = Re.identifierPrefix;
          if (he) {
            var o = rn,
              s = tn;
            o = (s & ~(1 << 32 - sr(s) - 1)).toString(32) + o, n = "_" + n + "R_" + o, o = ef++, 0 < o && (n += "H" + o.toString(32)), n += "_";
          } else o = Oj++, n = "_" + n + "r_" + o.toString(32) + "_";
          return r.memoizedState = n;
        },
        useHostTransitionStatus: Xm,
        useFormState: qS,
        useActionState: qS,
        useOptimistic: function useOptimistic(r) {
          var n = It();
          n.memoizedState = n.baseState = r;
          var o = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: null,
            lastRenderedState: null
          };
          return n.queue = o, n = km.bind(null, se, !0, o), o.dispatch = n, [r, n];
        },
        useMemoCache: Lm,
        useCacheRefresh: function useCacheRefresh() {
          return It().memoizedState = bz.bind(null, se);
        },
        useEffectEvent: function useEffectEvent(r) {
          var n = It(),
            o = {
              impl: r
            };
          return n.memoizedState = o, function () {
            if ((pe & 2) !== 0) throw Error(i(440));
            return o.impl.apply(void 0, arguments);
          };
        }
      },
      kv = {
        readContext: gt,
        use: Sc,
        useCallback: IS,
        useContext: gt,
        useEffect: Km,
        useImperativeHandle: BS,
        useInsertionEffect: wS,
        useLayoutEffect: MS,
        useMemo: PS,
        useReducer: Ec,
        useRef: CS,
        useState: function useState() {
          return Ec(Cn);
        },
        useDebugValue: Vm,
        useDeferredValue: function useDeferredValue(r, n) {
          var o = $e();
          return US(o, Ae.memoizedState, r, n);
        },
        useTransition: function useTransition() {
          var r = Ec(Cn)[0],
            n = $e().memoizedState;
          return [typeof r == "boolean" ? r : es(r), n];
        },
        useSyncExternalStore: pS,
        useId: jS,
        useHostTransitionStatus: Xm,
        useFormState: _S,
        useActionState: _S,
        useOptimistic: function useOptimistic(r, n) {
          var o = $e();
          return yS(o, Ae, r, n);
        },
        useMemoCache: Lm,
        useCacheRefresh: HS
      };
    kv.useEffectEvent = NS;
    var U1 = {
      readContext: gt,
      use: Sc,
      useCallback: IS,
      useContext: gt,
      useEffect: Km,
      useImperativeHandle: BS,
      useInsertionEffect: wS,
      useLayoutEffect: MS,
      useMemo: PS,
      useReducer: Hm,
      useRef: CS,
      useState: function useState() {
        return Hm(Cn);
      },
      useDebugValue: Vm,
      useDeferredValue: function useDeferredValue(r, n) {
        var o = $e();
        return Ae === null ? Ym(o, r, n) : US(o, Ae.memoizedState, r, n);
      },
      useTransition: function useTransition() {
        var r = Hm(Cn)[0],
          n = $e().memoizedState;
        return [typeof r == "boolean" ? r : es(r), n];
      },
      useSyncExternalStore: pS,
      useId: jS,
      useHostTransitionStatus: Xm,
      useFormState: OS,
      useActionState: OS,
      useOptimistic: function useOptimistic(r, n) {
        var o = $e();
        return Ae !== null ? yS(o, Ae, r, n) : (o.baseState = r, [r, o.queue.dispatch]);
      },
      useMemoCache: Lm,
      useCacheRefresh: HS
    };
    U1.useEffectEvent = NS;
    var Qv = {
        enqueueSetState: function enqueueSetState(r, n, o) {
          r = r._reactInternals;
          var s = or(),
            f = pa(s);
          f.payload = n, o != null && (f.callback = o), n = da(r, f, s), n !== null && (Ft(n, r, s), Ju(n, r, s));
        },
        enqueueReplaceState: function enqueueReplaceState(r, n, o) {
          r = r._reactInternals;
          var s = or(),
            f = pa(s);
          f.tag = 1, f.payload = n, o != null && (f.callback = o), n = da(r, f, s), n !== null && (Ft(n, r, s), Ju(n, r, s));
        },
        enqueueForceUpdate: function enqueueForceUpdate(r, n) {
          r = r._reactInternals;
          var o = or(),
            s = pa(o);
          s.tag = 2, n != null && (s.callback = n), n = da(r, s, o), n !== null && (Ft(n, r, o), Ju(n, r, o));
        }
      },
      Zv = Error(i(461)),
      rt = !1,
      Jv = {
        dehydrated: null,
        treeContext: null,
        retryLane: 0,
        hydrationErrors: null
      },
      Un = !1,
      nt = !1,
      Wv = !1,
      z1 = typeof WeakSet == "function" ? WeakSet : Set,
      pt = null,
      at = null,
      Kt = !1,
      Lr = null,
      wo = 8192,
      Cj = {
        getCacheForType: function getCacheForType(r) {
          var n = gt(Ge),
            o = n.data.get(r);
          return o === void 0 && (o = r(), n.data.set(r, o)), o;
        },
        cacheSignal: function cacheSignal() {
          return gt(Ge).controller.signal;
        }
      },
      tf = 0,
      rf = 1,
      nf = 2,
      af = 3,
      of = 4;
    if (typeof Symbol == "function" && Symbol.for) {
      var bs = Symbol.for;
      tf = bs("selector.component"), rf = bs("selector.has_pseudo_class"), nf = bs("selector.role"), af = bs("selector.test_id"), of = bs("selector.text");
    }
    var Rj = typeof WeakMap == "function" ? WeakMap : Map,
      pe = 0,
      Re = null,
      de = null,
      ve = 0,
      qe = 0,
      pr = null,
      qa = !1,
      Mo = !1,
      $v = !1,
      zn = 0,
      Qe = 0,
      _a = 0,
      qi = 0,
      eh = 0,
      dr = 0,
      Do = 0,
      xs = null,
      Vt = null,
      th = !1,
      uf = 0,
      L1 = 0,
      Ss = 1 / 0,
      sf = null,
      Aa = null,
      ut = 0,
      Oa = null,
      Bo = null,
      Ln = 0,
      rh = 0,
      nh = null,
      j1 = null,
      Es = 0,
      ah = null;
    return fe.attemptContinuousHydration = function (r) {
      if (r.tag === 13 || r.tag === 31) {
        var n = fi(r, 67108864);
        n !== null && Ft(n, r, 67108864), Tv(r, 67108864);
      }
    }, fe.attemptHydrationAtCurrentPriority = function (r) {
      if (r.tag === 13 || r.tag === 31) {
        var n = or();
        n = Q(n);
        var o = fi(r, n);
        o !== null && Ft(o, r, n), Tv(r, n);
      }
    }, fe.attemptSynchronousHydration = function (r) {
      switch (r.tag) {
        case 3:
          if (r = r.stateNode, r.current.memoizedState.isDehydrated) {
            var n = C(r.pendingLanes);
            if (n !== 0) {
              for (r.pendingLanes |= 2, r.entangledLanes |= 2; n;) {
                var o = 1 << 31 - sr(n);
                r.entanglements[1] |= o, n &= ~o;
              }
              Wr(r), (pe & 6) === 0 && (Ss = Gt() + 500, so(0, !1));
            }
          }
          break;
        case 31:
        case 13:
          n = fi(r, 2), n !== null && Ft(n, r, 2), IE(), Tv(r, 2);
      }
    }, fe.batchedUpdates = function (r, n) {
      return r(n);
    }, fe.createComponentSelector = function (r) {
      return {
        $$typeof: tf,
        value: r
      };
    }, fe.createContainer = function (r, n, o, s, f, p, y, E, w, I) {
      return $E(r, n, !1, null, o, s, p, null, y, E, w, I);
    }, fe.createHasPseudoClassSelector = function (r) {
      return {
        $$typeof: rf,
        value: r
      };
    }, fe.createHydrationContainer = function (r, n, o, s, f, p, y, E, w, I, K, H, Y, oe) {
      return r = $E(o, s, !0, r, f, p, E, oe, w, I, K, H), r.context = e1(null), o = r.current, s = or(), s = Q(s), f = pa(s), f.callback = n !== null && n !== void 0 ? n : null, da(o, f, s), n = s, r.current.lanes = n, G(r, n), Wr(r), r;
    }, fe.createPortal = function (r, n, o) {
      var s = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
      return {
        $$typeof: mo,
        key: s == null ? null : "" + s,
        children: r,
        containerInfo: n,
        implementation: o
      };
    }, fe.createRoleSelector = function (r) {
      return {
        $$typeof: nf,
        value: r
      };
    }, fe.createTestNameSelector = function (r) {
      return {
        $$typeof: af,
        value: r
      };
    }, fe.createTextSelector = function (r) {
      return {
        $$typeof: of,
        value: r
      };
    }, fe.defaultOnCaughtError = function (r) {
      console.error(r);
    }, fe.defaultOnRecoverableError = function (r) {
      w1(r);
    }, fe.defaultOnUncaughtError = function (r) {
      w1(r);
    }, fe.deferredUpdates = function (r) {
      var n = $.T,
        o = Bn();
      try {
        return ft(32), $.T = null, r();
      } finally {
        ft(o), $.T = n;
      }
    }, fe.discreteUpdates = function (r, n, o, s, f) {
      var p = $.T,
        y = Bn();
      try {
        return ft(2), $.T = null, r(n, o, s, f);
      } finally {
        ft(y), $.T = p, pe === 0 && (Ss = Gt() + 500);
      }
    }, fe.findAllNodes = hv, fe.findBoundingRects = function (r, n) {
      if (!cs) throw Error(i(363));
      n = hv(r, n), r = [];
      for (var o = 0; o < n.length; o++) r.push(cL(n[o]));
      for (n = r.length - 1; 0 < n; n--) {
        o = r[n];
        for (var s = o.x, f = s + o.width, p = o.y, y = p + o.height, E = n - 1; 0 <= E; E--) if (n !== E) {
          var w = r[E],
            I = w.x,
            K = I + w.width,
            H = w.y,
            Y = H + w.height;
          if (s >= I && p >= H && f <= K && y <= Y) {
            r.splice(n, 1);
            break;
          } else if (s !== I || o.width !== w.width || Y < p || H > y) {
            if (!(p !== H || o.height !== w.height || K < s || I > f)) {
              I > s && (w.width += I - s, w.x = s), K < f && (w.width = f - I), r.splice(n, 1);
              break;
            }
          } else {
            H > p && (w.height += H - p, w.y = p), Y < y && (w.height = y - H), r.splice(n, 1);
            break;
          }
        }
      }
      return r;
    }, fe.findHostInstance = t1, fe.findHostInstanceWithNoPortals = function (r) {
      return r = c(r), r = r !== null ? m(r) : null, r === null ? null : ls(r.stateNode);
    }, fe.findHostInstanceWithWarning = function (r) {
      return t1(r);
    }, fe.flushPassiveEffects = ss, fe.flushSyncFromReconciler = function (r) {
      var n = pe;
      pe |= 1;
      var o = $.T,
        s = Bn();
      try {
        if (ft(2), $.T = null, r) return r();
      } finally {
        ft(s), $.T = o, pe = n, (pe & 6) === 0 && so(0, !1);
      }
    }, fe.flushSyncWork = IE, fe.focusWithin = function (r, n) {
      if (!cs) throw Error(i(363));
      for (r = dv(r), n = wE(r, n), n = Array.from(n), r = 0; r < n.length;) {
        var o = n[r++],
          s = o.tag;
        if (!fs(o)) {
          if ((s === 5 || s === 26 || s === 27) && dL(o.stateNode)) return !0;
          for (o = o.child; o !== null;) n.push(o), o = o.sibling;
        }
      }
      return !1;
    }, fe.getFindAllNodesFailureDescription = function (r, n) {
      if (!cs) throw Error(i(363));
      var o = 0,
        s = [];
      r = [dv(r), 0];
      for (var f = 0; f < r.length;) {
        var p = r[f++],
          y = p.tag,
          E = r[f++],
          w = n[E];
        if ((y !== 5 && y !== 26 && y !== 27 || !fs(p)) && (mv(p, w) && (s.push(vv(w)), E++, E > o && (o = E)), E < n.length)) for (p = p.child; p !== null;) r.push(p, E), p = p.sibling;
      }
      if (o < n.length) {
        for (r = []; o < n.length; o++) r.push(vv(n[o]));
        return "findAllNodes was able to match part of the selector:\n  " + (s.join(" > ") + "\n\nNo matching component was found for:\n  ") + r.join(" > ");
      }
      return null;
    }, fe.getPublicRootInstance = function (r) {
      if (r = r.current, !r.child) return null;
      switch (r.child.tag) {
        case 27:
        case 5:
          return ls(r.child.stateNode);
        default:
          return r.child.stateNode;
      }
    }, fe.injectIntoDevTools = function () {
      var r = {
        bundleType: 0,
        version: Fz,
        rendererPackageName: Gz,
        currentDispatcherRef: $,
        reconcilerVersion: "19.2.0"
      };
      if (u1 !== null && (r.rendererConfig = u1), (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === "undefined" ? "undefined" : _typeof(__REACT_DEVTOOLS_GLOBAL_HOOK__)) > "u") r = !1;else {
        var n = __REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (n.isDisabled || !n.supportsFiber) r = !0;else {
          try {
            ps = n.inject(r), lr = n;
          } catch (_unused68) {}
          r = !!n.checkDCE;
        }
      }
      return r;
    }, fe.isAlreadyRendering = function () {
      return (pe & 6) !== 0;
    }, fe.observeVisibleRects = function (r, n, o, s) {
      if (!cs) throw Error(i(363));
      r = hv(r, n);
      var f = mL(r, o, s).disconnect;
      return {
        disconnect: function disconnect() {
          f();
        }
      };
    }, fe.shouldError = function () {
      return null;
    }, fe.shouldSuspend = function () {
      return !1;
    }, fe.startHostTransition = function (r, n, o, s) {
      if (r.tag !== 5) throw Error(i(476));
      var f = LS(r).queue;
      zS(r, f, n, ho, o === null ? a : function () {
        var p = LS(r);
        return p.next === null && (p = r.alternate.memoizedState), ts(r, p.next.queue, {}, or()), o(s);
      });
    }, fe.updateContainer = function (r, n, o, s) {
      var f = n.current,
        p = or();
      return r1(f, p, r, n, o, s), p;
    }, fe.updateContainerSync = function (r, n, o, s) {
      return r1(n.current, 2, r, n, o, s), 2;
    }, fe;
  };
  oc.exports.default = oc.exports;
  Object.defineProperty(oc.exports, "__esModule", {
    value: !0
  });
});
var ZU = v(function (nMe, QU) {
  "use strict";

  QU.exports = kU();
});
var JU = v(function (ui) {
  "use strict";

  ui.ConcurrentRoot = 1;
  ui.ContinuousEventPriority = 8;
  ui.DefaultEventPriority = 32;
  ui.DiscreteEventPriority = 2;
  ui.IdleEventPriority = 268435456;
  ui.LegacyRoot = 0;
  ui.NoEventPriority = 0;
});
var $U = v(function (iMe, WU) {
  "use strict";

  WU.exports = JU();
});
function Uj(e, t) {
  return e.__proto__ = t, e;
}
function zj(e, t) {
  for (var a in t) Object.prototype.hasOwnProperty.call(e, a) || (e[a] = t[a]);
  return e;
}
typeof Object.setPrototypeOf != "function" && (Object.setPrototypeOf = {
  __proto__: []
} instanceof Array ? Uj : zj);
var WTe = J(l2()),
  $Te = J(C2()),
  eqe = J(B2()),
  tqe = J(j2()),
  rqe = J(X2()),
  nqe = J(YA()),
  aqe = J(JA()),
  iqe = J(iO()),
  oqe = J(JO()),
  uqe = J(rC()),
  sqe = J(sC()),
  lqe = J(dC()),
  cqe = J(hR()),
  fqe = J(AR()),
  pqe = J(BR()),
  dqe = J(KR()),
  mqe = J(ZR()),
  vqe = J(tN()),
  hqe = J(cN()),
  gqe = J(mN()),
  yqe = J(yN()),
  bqe = J(wM()),
  xqe = J(cB()),
  Sqe = J(gB()),
  Eqe = J(AB()),
  Tqe = J(yI()),
  qqe = J(s8()),
  _qe = J(g8()),
  Aqe = J(V8()),
  Oqe = J(J8()),
  q4 = J(r4());
function ele(e) {
  var t = e.codePointAt(0);
  if (t < 128) return [t];
  if (t < 2048) {
    var a = 192 | t >> 6,
      i = 128 | t & 63;
    return [a, i];
  }
  if (t < 65536) {
    var _a3 = 224 | t >> 12,
      _i2 = 128 | t >> 6 & 63,
      u = 128 | t & 63;
    return [_a3, _i2, u];
  }
  if (t <= 1114111) {
    var _a4 = 240 | t >> 18,
      _i3 = 128 | t >> 12 & 63,
      _u2 = 128 | t >> 6 & 63,
      l = 128 | t & 63;
    return [_a4, _i3, _u2, l];
  }
  return [];
}
var pd = /*#__PURE__*/function () {
  function pd() {
    _classCallCheck(this, pd);
  }
  return _createClass(pd, [{
    key: "encode",
    value: function encode(t) {
      var a = [];
      var _iterator2 = _createForOfIteratorHelper(t),
        _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var i = _step2.value;
          a.push.apply(a, _toConsumableArray(ele(i)));
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
      return new Uint8Array(a);
    }
  }]);
}();
function Yr() {
  var e = typeof URIError != "function" ? Error : URIError;
  throw new e("Invalid UTF-8 sequence");
}
function dd(e) {
  var t = [];
  for (var a = 0; a < e.length;) if (e[a] < 128) t.push(String.fromCharCode(e[a])), a++;else if (e[a] > 191 && e[a] < 224) t.push(String.fromCharCode((e[a] & 31) << 6 | e[a + 1] & 63)), a += 2;else if (e[a] > 223 && e[a] < 240) t.push(String.fromCharCode((e[a] & 15) << 12 | (e[a + 1] & 63) << 6 | e[a + 2] & 63)), a += 3;else {
    var i = (e[a] & 7) << 18 | (e[a + 1] & 63) << 12 | (e[a + 2] & 63) << 6 | e[a + 3] & 63;
    t.push(String.fromCodePoint(i)), a += 4;
  }
  return t.join("");
}
function tle(e) {
  var t = [],
    a = e.length,
    i = 0;
  for (; i < a;) {
    var u = e[i];
    if (u < 128) t.push(String.fromCharCode(u)), i++;else if (u >> 5 === 6) {
      i + 2 > a && Yr();
      var l = e[i + 1];
      l >> 6 !== 2 && Yr(), t.push(dd([u, l])), i += 2;
    } else if (u >> 4 === 14) {
      i + 3 > a && Yr();
      var _l2 = e[i + 1];
      _l2 >> 6 !== 2 && Yr();
      var c = e[i + 2];
      c >> 6 !== 2 && Yr(), t.push(dd([u, _l2, c])), i += 3;
    } else if (u >> 3 === 30) {
      i + 4 > a && Yr();
      var _l3 = e[i + 1];
      _l3 >> 6 !== 2 && Yr();
      var _c3 = e[i + 2];
      _c3 >> 6 !== 2 && Yr();
      var d = e[i + 3];
      d >> 6 !== 2 && Yr(), t.push(dd([u, _l3, _c3, d])), i += 4;
    } else Yr();
  }
  return t.join("");
}
var md = /*#__PURE__*/function () {
  function md() {
    _classCallCheck(this, md);
  }
  return _createClass(md, [{
    key: "decode",
    value: function decode(t) {
      return tle(t);
    }
  }]);
}();
var vd = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.!~*'()";
function qt() {
  var e = typeof URIError != "function" ? Error : URIError;
  throw new e("URI malformed");
}
function rle(e) {
  return Number.parseInt(e, 16);
}
function Pl(e) {
  var t = [];
  for (var a = 0; a < e.length;) if (e[a] < 128) t.push(String.fromCharCode(e[a])), a++;else if (e[a] > 191 && e[a] < 224) t.push(String.fromCharCode((e[a] & 31) << 6 | e[a + 1] & 63)), a += 2;else if (e[a] > 223 && e[a] < 240) t.push(String.fromCharCode((e[a] & 15) << 12 | (e[a + 1] & 63) << 6 | e[a + 2] & 63)), a += 3;else {
    var i = (e[a] & 7) << 18 | (e[a + 1] & 63) << 12 | (e[a + 2] & 63) << 6 | e[a + 3] & 63;
    t.push(String.fromCodePoint(i)), a += 4;
  }
  return t.join("");
}
function ka(e, t) {
  t + 2 > e.length && qt();
  var a = e.slice(t, t + 2);
  return /^[0-9A-Fa-f]{2}$/.test(a) || qt(), rle(a);
}
function n4(e) {
  var t = [],
    a = e.length,
    i = 0;
  for (; i < a;) {
    var u = e[i];
    if (vd.includes(u)) t.push(u), i++;else if (u === "%") {
      var l = ka(e, i + 1);
      if (l < 128) t.push(Pl([l])), i += 3;else if (l >> 5 === 6) {
        (i + 6 > a || e[i + 3] !== "%") && qt();
        var c = ka(e, i + 4);
        c >> 6 !== 2 && qt(), t.push(Pl([l, c])), i += 6;
      } else if (l >> 4 === 14) {
        (i + 9 > a || e[i + 3] !== "%" || e[i + 6] !== "%") && qt();
        var _c4 = ka(e, i + 4);
        _c4 >> 6 !== 2 && qt();
        var d = ka(e, i + 7);
        d >> 6 !== 2 && qt(), t.push(Pl([l, _c4, d])), i += 9;
      } else if (l >> 3 === 30) {
        (i + 12 > a || e[i + 3] !== "%" || e[i + 6] !== "%" || e[i + 9] !== "%") && qt();
        var _c5 = ka(e, i + 4);
        _c5 >> 6 !== 2 && qt();
        var _d2 = ka(e, i + 7);
        _d2 >> 6 !== 2 && qt();
        var m = ka(e, i + 10);
        m >> 6 !== 2 && qt(), t.push(Pl([l, _c5, _d2, m])), i += 12;
      } else qt();
    } else qt();
  }
  return t.join("");
}
function nle(e) {
  var t = e.codePointAt(0);
  if (t >= 55296 && t <= 57343 && qt(), t < 128) return [t];
  if (t < 2048) {
    var a = 192 | t >> 6,
      i = 128 | t & 63;
    return [a, i];
  }
  if (t < 65536) {
    var _a5 = 224 | t >> 12,
      _i4 = 128 | t >> 6 & 63,
      u = 128 | t & 63;
    return [_a5, _i4, u];
  }
  if (t <= 1114111) {
    var _a6 = 240 | t >> 18,
      _i5 = 128 | t >> 12 & 63,
      _u3 = 128 | t >> 6 & 63,
      l = 128 | t & 63;
    return [_a6, _i5, _u3, l];
  }
  qt();
}
function a4(e) {
  var t = [];
  var _iterator3 = _createForOfIteratorHelper(e),
    _step3;
  try {
    for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
      var a = _step3.value;
      if (vd.indexOf(a) !== -1) t.push(a);else {
        var i = nle(a).map(function (u) {
          return "%".concat(u.toString(16).padStart(2, "0").toUpperCase());
        }).join("");
        t.push(i);
      }
    }
  } catch (err) {
    _iterator3.e(err);
  } finally {
    _iterator3.f();
  }
  return t.join("");
}
var Ze = J(c4());
var gd = /*#__PURE__*/function () {
    function gd() {
      _classCallCheck(this, gd);
      _defineProperty(this, "_otherPort", void 0);
      _defineProperty(this, "onmessage", null);
      _defineProperty(this, "_closed", !1);
      this._otherPort = null, this.onmessage = null;
    }
    return _createClass(gd, [{
      key: "connect",
      value: function connect(t) {
        this._otherPort = t;
      }
    }, {
      key: "postMessage",
      value: function postMessage(t) {
        var _this2 = this;
        if (this._closed) throw new Error("Cannot post message through a closed port");
        if (!this._otherPort) throw new Error("Port is not connected");
        setTimeout(function () {
          var _this2$_otherPort;
          ((_this2$_otherPort = _this2._otherPort) === null || _this2$_otherPort === void 0 ? void 0 : _this2$_otherPort.onmessage) && !_this2._otherPort._closed && _this2._otherPort.onmessage(t);
        }, 0);
      }
    }, {
      key: "close",
      value: function close() {
        this._closed = !0, this._otherPort = null;
      }
    }]);
  }(),
  yd = /*#__PURE__*/_createClass(function yd() {
    _classCallCheck(this, yd);
    _defineProperty(this, "port1", void 0);
    _defineProperty(this, "port2", void 0);
    var t = new gd(),
      a = new gd();
    t.connect(a), a.connect(t), this.port1 = t, this.port2 = a;
  });
var jt;
function Ib() {
  return jt || (jt = Function("return this")(), jt);
}
jt = Ib();
for (var _i6 = 0, _arr = ["globalThis", "global", "self"]; _i6 < _arr.length; _i6++) {
  var e = _arr[_i6];
  _typeof(jt[e]) != "object" && (jt[e] = jt);
}
var Ole = (_jt$console = jt.console) === null || _jt$console === void 0 ? void 0 : _jt$console.log;
typeof Ole != "function" && (jt.console = {
  log: jt.print,
  error: jt.print,
  info: jt.print,
  debug: jt.print,
  warn: jt.print
});
function bd(e) {
  var t = Ib();
  for (var _i7 = 0, _Object$keys = Object.keys(e); _i7 < _Object$keys.length; _i7++) {
    var a = _Object$keys[_i7];
    t[a] || (t[a] = e[a]);
  }
}
var _4 = J(T4());
bd({
  TextEncoder: pd,
  TextDecoder: md,
  Symbol: q4.default,
  encodeURIComponent: a4,
  decodeURIComponent: n4,
  ArrayBuffer: Ze.ArrayBuffer,
  DataView: Ze.DataView,
  Float32Array: Ze.Float32Array,
  Float64Array: Ze.Float64Array,
  Int8Array: Ze.Int8Array,
  Int16Array: Ze.Int16Array,
  Int32Array: Ze.Int32Array,
  Uint8Array: Ze.Uint8Array,
  Uint8ClampedArray: Ze.Uint8ClampedArray,
  Uint16Array: Ze.Uint16Array,
  Uint32Array: Ze.Uint32Array,
  MessageChannel: yd,
  URL: _4.default
});
var X4 = J(Y4());
bd({
  Buffer: X4.Buffer,
  performance: {
    now: function now() {
      return Date.now();
    }
  }
});
var o6 = J(_t()),
  u6 = J(_t()),
  mn = (0, u6.forwardRef)(function (e, t) {
    return e.display !== "none" && o6.default.createElement("mpv-box", _objectSpread({
      ref: t
    }, e));
  });
var s6 = ["!", "@", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "[", "]", "{", "}", "\\", "|", ";", ":", '"', ",", ".", "<", ">", "/", "?", "`", "~"],
  l6 = ["ESC", "ENTER", "BS", "SPACE"],
  c6 = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"],
  f6 = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
function p6() {
  var _mp;
  for (var _len = arguments.length, e = new Array(_len), _key = 0; _key < _len; _key++) {
    e[_key] = arguments[_key];
  }
  return (_mp = mp).commandv.apply(_mp, ["quit"].concat(e));
}
function zl() {
  for (var _len2 = arguments.length, e = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    e[_key2] = arguments[_key2];
  }
  return mp.command_native(["expand-path"].concat(e));
}
function _d() {
  for (var _len3 = arguments.length, e = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    e[_key3] = arguments[_key3];
  }
  return mp.command_native(["normalize-path"].concat(e));
}
function rx() {
  var _mp2;
  for (var _len4 = arguments.length, e = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
    e[_key4] = arguments[_key4];
  }
  return (_mp2 = mp).commandv.apply(_mp2, ["sub-add"].concat(e));
}
function Ll() {
  var _mp3;
  for (var _len5 = arguments.length, e = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
    e[_key5] = arguments[_key5];
  }
  return (_mp3 = mp).commandv.apply(_mp3, ["sub-remove"].concat(e));
}
function d6() {
  var _mp4;
  for (var _len6 = arguments.length, e = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
    e[_key6] = arguments[_key6];
  }
  return (_mp4 = mp).commandv.apply(_mp4, ["overlay-add"].concat(e));
}
function m6() {
  var _mp5;
  for (var _len7 = arguments.length, e = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
    e[_key7] = arguments[_key7];
  }
  return (_mp5 = mp).commandv.apply(_mp5, ["overlay-remove"].concat(e));
}
function Rr(e) {
  return e.replaceAll("\\\\", "//").replaceAll("\\", "/");
}
function nx(e) {
  var _Rr$split$at;
  return (_Rr$split$at = Rr(e).split("/").at(-1)) === null || _Rr$split$at === void 0 ? void 0 : _Rr$split$at.split("?").at(0);
}
var v6 = {
  GET: "GET",
  POST: "POST",
  PUT: "PUT",
  PATCH: "PATCH",
  DELETE: "DELETE",
  HEAD: "HEAD",
  OPTIONS: "OPTIONS"
};
var Dce = (typeof global === "undefined" ? "undefined" : _typeof(global)) == "object" && global && global.Object === Object && global,
  Ad = Dce;
var Bce = (typeof self === "undefined" ? "undefined" : _typeof(self)) == "object" && self && self.Object === Object && self,
  Ice = Ad || Bce || Function("return this")(),
  vt = Ice;
var Pce = vt.Symbol,
  Wn = Pce;
var h6 = Object.prototype,
  Uce = h6.hasOwnProperty,
  zce = h6.toString,
  jl = Wn ? Wn.toStringTag : void 0;
function Lce(e) {
  var t = Uce.call(e, jl),
    a = e[jl];
  try {
    e[jl] = void 0;
    var i = !0;
  } catch (_unused69) {}
  var u = zce.call(e);
  return i && (t ? e[jl] = a : delete e[jl]), u;
}
var g6 = Lce;
var jce = Object.prototype,
  Hce = jce.toString;
function Fce(e) {
  return Hce.call(e);
}
var y6 = Fce;
var Gce = "[object Null]",
  Kce = "[object Undefined]",
  b6 = Wn ? Wn.toStringTag : void 0;
function Vce(e) {
  return e == null ? e === void 0 ? Kce : Gce : b6 && b6 in Object(e) ? g6(e) : y6(e);
}
var $n = Vce;
function Yce(e) {
  return e != null && _typeof(e) == "object";
}
var ea = Yce;
var Xce = Array.isArray,
  Yi = Xce;
function kce(e) {
  var t = _typeof(e);
  return e != null && (t == "object" || t == "function");
}
var Od = kce;
var Qce = "[object AsyncFunction]",
  Zce = "[object Function]",
  Jce = "[object GeneratorFunction]",
  Wce = "[object Proxy]";
function $ce(e) {
  if (!Od(e)) return !1;
  var t = $n(e);
  return t == Zce || t == Jce || t == Qce || t == Wce;
}
var Cd = $ce;
var efe = vt["__core-js_shared__"],
  Rd = efe;
var x6 = function () {
  var e = /[^.]+$/.exec(Rd && Rd.keys && Rd.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function tfe(e) {
  return !!x6 && x6 in e;
}
var S6 = tfe;
var rfe = Function.prototype,
  nfe = rfe.toString;
function afe(e) {
  if (e != null) {
    try {
      return nfe.call(e);
    } catch (_unused70) {}
    try {
      return e + "";
    } catch (_unused71) {}
  }
  return "";
}
var ta = afe;
var ife = /[\\^$.*+?()[\]{}|]/g,
  ofe = /^\[object .+?Constructor\]$/,
  ufe = Function.prototype,
  sfe = Object.prototype,
  lfe = ufe.toString,
  cfe = sfe.hasOwnProperty,
  ffe = RegExp("^" + lfe.call(cfe).replace(ife, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
function pfe(e) {
  if (!Od(e) || S6(e)) return !1;
  var t = Cd(e) ? ffe : ofe;
  return t.test(ta(e));
}
var E6 = pfe;
function dfe(e, t) {
  return e === null || e === void 0 ? void 0 : e[t];
}
var T6 = dfe;
function mfe(e, t) {
  var a = T6(e, t);
  return E6(a) ? a : void 0;
}
var Nr = mfe;
var vfe = Nr(vt, "WeakMap"),
  Nd = vfe;
var hfe = 9007199254740991,
  gfe = /^(?:0|[1-9]\d*)$/;
function yfe(e, t) {
  var a = _typeof(e);
  return t = t !== null && t !== void 0 ? t : hfe, !!t && (a == "number" || a != "symbol" && gfe.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
var q6 = yfe;
function bfe(e, t) {
  return e === t || e !== e && t !== t;
}
var wd = bfe;
var xfe = 9007199254740991;
function Sfe(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= xfe;
}
var Md = Sfe;
function Efe(e) {
  return e != null && Md(e.length) && !Cd(e);
}
var _6 = Efe;
var Tfe = Object.prototype;
function qfe(e) {
  var t = e && e.constructor,
    a = typeof t == "function" && t.prototype || Tfe;
  return e === a;
}
var A6 = qfe;
function _fe(e, t) {
  for (var a = -1, i = Array(e); ++a < e;) i[a] = t(a);
  return i;
}
var O6 = _fe;
var Afe = "[object Arguments]";
function Ofe(e) {
  return ea(e) && $n(e) == Afe;
}
var ax = Ofe;
var C6 = Object.prototype,
  Cfe = C6.hasOwnProperty,
  Rfe = C6.propertyIsEnumerable,
  Nfe = ax(function () {
    return arguments;
  }()) ? ax : function (e) {
    return ea(e) && Cfe.call(e, "callee") && !Rfe.call(e, "callee");
  },
  R6 = Nfe;
function wfe() {
  return !1;
}
var N6 = wfe;
var D6 = (typeof exports === "undefined" ? "undefined" : _typeof(exports)) == "object" && exports && !exports.nodeType && exports,
  w6 = D6 && (typeof module === "undefined" ? "undefined" : _typeof(module)) == "object" && module && !module.nodeType && module,
  Mfe = w6 && w6.exports === D6,
  M6 = Mfe ? vt.Buffer : void 0,
  Dfe = M6 ? M6.isBuffer : void 0,
  Bfe = Dfe || N6,
  Hl = Bfe;
var Ife = "[object Arguments]",
  Pfe = "[object Array]",
  Ufe = "[object Boolean]",
  zfe = "[object Date]",
  Lfe = "[object Error]",
  jfe = "[object Function]",
  Hfe = "[object Map]",
  Ffe = "[object Number]",
  Gfe = "[object Object]",
  Kfe = "[object RegExp]",
  Vfe = "[object Set]",
  Yfe = "[object String]",
  Xfe = "[object WeakMap]",
  kfe = "[object ArrayBuffer]",
  Qfe = "[object DataView]",
  Zfe = "[object Float32Array]",
  Jfe = "[object Float64Array]",
  Wfe = "[object Int8Array]",
  $fe = "[object Int16Array]",
  epe = "[object Int32Array]",
  tpe = "[object Uint8Array]",
  rpe = "[object Uint8ClampedArray]",
  npe = "[object Uint16Array]",
  ape = "[object Uint32Array]",
  Ie = {};
Ie[Zfe] = Ie[Jfe] = Ie[Wfe] = Ie[$fe] = Ie[epe] = Ie[tpe] = Ie[rpe] = Ie[npe] = Ie[ape] = !0;
Ie[Ife] = Ie[Pfe] = Ie[kfe] = Ie[Ufe] = Ie[Qfe] = Ie[zfe] = Ie[Lfe] = Ie[jfe] = Ie[Hfe] = Ie[Ffe] = Ie[Gfe] = Ie[Kfe] = Ie[Vfe] = Ie[Yfe] = Ie[Xfe] = !1;
function ipe(e) {
  return ea(e) && Md(e.length) && !!Ie[$n(e)];
}
var B6 = ipe;
function ope(e) {
  return function (t) {
    return e(t);
  };
}
var I6 = ope;
var P6 = (typeof exports === "undefined" ? "undefined" : _typeof(exports)) == "object" && exports && !exports.nodeType && exports,
  Fl = P6 && (typeof module === "undefined" ? "undefined" : _typeof(module)) == "object" && module && !module.nodeType && module,
  upe = Fl && Fl.exports === P6,
  ix = upe && Ad.process,
  spe = function () {
    try {
      var e = Fl && Fl.require && Fl.require("util").types;
      return e || ix && ix.binding && ix.binding("util");
    } catch (_unused72) {}
  }(),
  ox = spe;
var U6 = ox && ox.isTypedArray,
  lpe = U6 ? I6(U6) : B6,
  Dd = lpe;
var cpe = Object.prototype,
  fpe = cpe.hasOwnProperty;
function ppe(e, t) {
  var a = Yi(e),
    i = !a && R6(e),
    u = !a && !i && Hl(e),
    l = !a && !i && !u && Dd(e),
    c = a || i || u || l,
    d = c ? O6(e.length, String) : [],
    m = d.length;
  for (var h in e) (t || fpe.call(e, h)) && !(c && (h == "length" || u && (h == "offset" || h == "parent") || l && (h == "buffer" || h == "byteLength" || h == "byteOffset") || q6(h, m))) && d.push(h);
  return d;
}
var z6 = ppe;
function dpe(e, t) {
  return function (a) {
    return e(t(a));
  };
}
var L6 = dpe;
var mpe = L6(Object.keys, Object),
  j6 = mpe;
var vpe = Object.prototype,
  hpe = vpe.hasOwnProperty;
function gpe(e) {
  if (!A6(e)) return j6(e);
  var t = [];
  for (var a in Object(e)) hpe.call(e, a) && a != "constructor" && t.push(a);
  return t;
}
var H6 = gpe;
function ype(e) {
  return _6(e) ? z6(e) : H6(e);
}
var F6 = ype;
var bpe = Nr(Object, "create"),
  ra = bpe;
function xpe() {
  this.__data__ = ra ? ra(null) : {}, this.size = 0;
}
var G6 = xpe;
function Spe(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var K6 = Spe;
var Epe = "__lodash_hash_undefined__",
  Tpe = Object.prototype,
  qpe = Tpe.hasOwnProperty;
function _pe(e) {
  var t = this.__data__;
  if (ra) {
    var a = t[e];
    return a === Epe ? void 0 : a;
  }
  return qpe.call(t, e) ? t[e] : void 0;
}
var V6 = _pe;
var Ape = Object.prototype,
  Ope = Ape.hasOwnProperty;
function Cpe(e) {
  var t = this.__data__;
  return ra ? t[e] !== void 0 : Ope.call(t, e);
}
var Y6 = Cpe;
var Rpe = "__lodash_hash_undefined__";
function Npe(e, t) {
  var a = this.__data__;
  return this.size += this.has(e) ? 0 : 1, a[e] = ra && t === void 0 ? Rpe : t, this;
}
var X6 = Npe;
function qu(e) {
  var t = -1,
    a = e == null ? 0 : e.length;
  for (this.clear(); ++t < a;) {
    var i = e[t];
    this.set(i[0], i[1]);
  }
}
qu.prototype.clear = G6;
qu.prototype.delete = K6;
qu.prototype.get = V6;
qu.prototype.has = Y6;
qu.prototype.set = X6;
var ux = qu;
function wpe() {
  this.__data__ = [], this.size = 0;
}
var k6 = wpe;
function Mpe(e, t) {
  for (var a = e.length; a--;) if (wd(e[a][0], t)) return a;
  return -1;
}
var Za = Mpe;
var Dpe = Array.prototype,
  Bpe = Dpe.splice;
function Ipe(e) {
  var t = this.__data__,
    a = Za(t, e);
  if (a < 0) return !1;
  var i = t.length - 1;
  return a == i ? t.pop() : Bpe.call(t, a, 1), --this.size, !0;
}
var Q6 = Ipe;
function Ppe(e) {
  var t = this.__data__,
    a = Za(t, e);
  return a < 0 ? void 0 : t[a][1];
}
var Z6 = Ppe;
function Upe(e) {
  return Za(this.__data__, e) > -1;
}
var J6 = Upe;
function zpe(e, t) {
  var a = this.__data__,
    i = Za(a, e);
  return i < 0 ? (++this.size, a.push([e, t])) : a[i][1] = t, this;
}
var W6 = zpe;
function _u(e) {
  var t = -1,
    a = e == null ? 0 : e.length;
  for (this.clear(); ++t < a;) {
    var i = e[t];
    this.set(i[0], i[1]);
  }
}
_u.prototype.clear = k6;
_u.prototype.delete = Q6;
_u.prototype.get = Z6;
_u.prototype.has = J6;
_u.prototype.set = W6;
var Ja = _u;
var Lpe = Nr(vt, "Map"),
  Wa = Lpe;
function jpe() {
  this.size = 0, this.__data__ = {
    hash: new ux(),
    map: new (Wa || Ja)(),
    string: new ux()
  };
}
var $6 = jpe;
function Hpe(e) {
  var t = _typeof(e);
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
var eP = Hpe;
function Fpe(e, t) {
  var a = e.__data__;
  return eP(t) ? a[typeof t == "string" ? "string" : "hash"] : a.map;
}
var $a = Fpe;
function Gpe(e) {
  var t = $a(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
var tP = Gpe;
function Kpe(e) {
  return $a(this, e).get(e);
}
var rP = Kpe;
function Vpe(e) {
  return $a(this, e).has(e);
}
var nP = Vpe;
function Ype(e, t) {
  var a = $a(this, e),
    i = a.size;
  return a.set(e, t), this.size += a.size == i ? 0 : 1, this;
}
var aP = Ype;
function Au(e) {
  var t = -1,
    a = e == null ? 0 : e.length;
  for (this.clear(); ++t < a;) {
    var i = e[t];
    this.set(i[0], i[1]);
  }
}
Au.prototype.clear = $6;
Au.prototype.delete = tP;
Au.prototype.get = rP;
Au.prototype.has = nP;
Au.prototype.set = aP;
var Bd = Au;
function Xpe(e, t) {
  for (var a = -1, i = t.length, u = e.length; ++a < i;) e[u + a] = t[a];
  return e;
}
var iP = Xpe;
function kpe() {
  this.__data__ = new Ja(), this.size = 0;
}
var oP = kpe;
function Qpe(e) {
  var t = this.__data__,
    a = t.delete(e);
  return this.size = t.size, a;
}
var uP = Qpe;
function Zpe(e) {
  return this.__data__.get(e);
}
var sP = Zpe;
function Jpe(e) {
  return this.__data__.has(e);
}
var lP = Jpe;
var Wpe = 200;
function $pe(e, t) {
  var a = this.__data__;
  if (a instanceof Ja) {
    var i = a.__data__;
    if (!Wa || i.length < Wpe - 1) return i.push([e, t]), this.size = ++a.size, this;
    a = this.__data__ = new Bd(i);
  }
  return a.set(e, t), this.size = a.size, this;
}
var cP = $pe;
function Ou(e) {
  var t = this.__data__ = new Ja(e);
  this.size = t.size;
}
Ou.prototype.clear = oP;
Ou.prototype.delete = uP;
Ou.prototype.get = sP;
Ou.prototype.has = lP;
Ou.prototype.set = cP;
var Id = Ou;
function ede(e, t) {
  for (var a = -1, i = e == null ? 0 : e.length, u = 0, l = []; ++a < i;) {
    var c = e[a];
    t(c, a, e) && (l[u++] = c);
  }
  return l;
}
var fP = ede;
function tde() {
  return [];
}
var pP = tde;
var rde = Object.prototype,
  nde = rde.propertyIsEnumerable,
  dP = Object.getOwnPropertySymbols,
  ade = dP ? function (e) {
    return e == null ? [] : (e = Object(e), fP(dP(e), function (t) {
      return nde.call(e, t);
    }));
  } : pP,
  mP = ade;
function ide(e, t, a) {
  var i = t(e);
  return Yi(e) ? i : iP(i, a(e));
}
var vP = ide;
function ode(e) {
  return vP(e, F6, mP);
}
var sx = ode;
var ude = Nr(vt, "DataView"),
  Pd = ude;
var sde = Nr(vt, "Promise"),
  Ud = sde;
var lde = Nr(vt, "Set"),
  zd = lde;
var hP = "[object Map]",
  cde = "[object Object]",
  gP = "[object Promise]",
  yP = "[object Set]",
  bP = "[object WeakMap]",
  xP = "[object DataView]",
  fde = ta(Pd),
  pde = ta(Wa),
  dde = ta(Ud),
  mde = ta(zd),
  vde = ta(Nd),
  Xi = $n;
(Pd && Xi(new Pd(new ArrayBuffer(1))) != xP || Wa && Xi(new Wa()) != hP || Ud && Xi(Ud.resolve()) != gP || zd && Xi(new zd()) != yP || Nd && Xi(new Nd()) != bP) && (Xi = function Xi(e) {
  var t = $n(e),
    a = t == cde ? e.constructor : void 0,
    i = a ? ta(a) : "";
  if (i) switch (i) {
    case fde:
      return xP;
    case pde:
      return hP;
    case dde:
      return gP;
    case mde:
      return yP;
    case vde:
      return bP;
  }
  return t;
});
var lx = Xi;
var hde = vt.Uint8Array,
  cx = hde;
var gde = "__lodash_hash_undefined__";
function yde(e) {
  return this.__data__.set(e, gde), this;
}
var SP = yde;
function bde(e) {
  return this.__data__.has(e);
}
var EP = bde;
function Ld(e) {
  var t = -1,
    a = e == null ? 0 : e.length;
  for (this.__data__ = new Bd(); ++t < a;) this.add(e[t]);
}
Ld.prototype.add = Ld.prototype.push = SP;
Ld.prototype.has = EP;
var TP = Ld;
function xde(e, t) {
  for (var a = -1, i = e == null ? 0 : e.length; ++a < i;) if (t(e[a], a, e)) return !0;
  return !1;
}
var qP = xde;
function Sde(e, t) {
  return e.has(t);
}
var _P = Sde;
var Ede = 1,
  Tde = 2;
function qde(e, t, a, i, u, l) {
  var c = a & Ede,
    d = e.length,
    m = t.length;
  if (d != m && !(c && m > d)) return !1;
  var h = l.get(e),
    g = l.get(t);
  if (h && g) return h == t && g == e;
  var b = -1,
    x = !0,
    S = a & Tde ? new TP() : void 0;
  for (l.set(e, t), l.set(t, e); ++b < d;) {
    var O = e[b],
      C = t[b];
    if (i) var _ = c ? i(C, O, b, t, e, l) : i(O, C, b, e, t, l);
    if (_ !== void 0) {
      if (_) continue;
      x = !1;
      break;
    }
    if (S) {
      if (!qP(t, function (T, q) {
        if (!_P(S, q) && (O === T || u(O, T, a, i, l))) return S.push(q);
      })) {
        x = !1;
        break;
      }
    } else if (!(O === C || u(O, C, a, i, l))) {
      x = !1;
      break;
    }
  }
  return l.delete(e), l.delete(t), x;
}
var jd = qde;
function _de(e) {
  var t = -1,
    a = Array(e.size);
  return e.forEach(function (i, u) {
    a[++t] = [u, i];
  }), a;
}
var AP = _de;
function Ade(e) {
  var t = -1,
    a = Array(e.size);
  return e.forEach(function (i) {
    a[++t] = i;
  }), a;
}
var OP = Ade;
var Ode = 1,
  Cde = 2,
  Rde = "[object Boolean]",
  Nde = "[object Date]",
  wde = "[object Error]",
  Mde = "[object Map]",
  Dde = "[object Number]",
  Bde = "[object RegExp]",
  Ide = "[object Set]",
  Pde = "[object String]",
  Ude = "[object Symbol]",
  zde = "[object ArrayBuffer]",
  Lde = "[object DataView]",
  CP = Wn ? Wn.prototype : void 0,
  fx = CP ? CP.valueOf : void 0;
function jde(e, t, a, i, u, l, c) {
  switch (a) {
    case Lde:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) return !1;
      e = e.buffer, t = t.buffer;
    case zde:
      return !(e.byteLength != t.byteLength || !l(new cx(e), new cx(t)));
    case Rde:
    case Nde:
    case Dde:
      return wd(+e, +t);
    case wde:
      return e.name == t.name && e.message == t.message;
    case Bde:
    case Pde:
      return e == t + "";
    case Mde:
      var d = AP;
    case Ide:
      var m = i & Ode;
      if (d || (d = OP), e.size != t.size && !m) return !1;
      var h = c.get(e);
      if (h) return h == t;
      i |= Cde, c.set(e, t);
      var g = jd(d(e), d(t), i, u, l, c);
      return c.delete(e), g;
    case Ude:
      if (fx) return fx.call(e) == fx.call(t);
  }
  return !1;
}
var RP = jde;
var Hde = 1,
  Fde = Object.prototype,
  Gde = Fde.hasOwnProperty;
function Kde(e, t, a, i, u, l) {
  var c = a & Hde,
    d = sx(e),
    m = d.length,
    h = sx(t),
    g = h.length;
  if (m != g && !c) return !1;
  for (var b = m; b--;) {
    var x = d[b];
    if (!(c ? x in t : Gde.call(t, x))) return !1;
  }
  var S = l.get(e),
    O = l.get(t);
  if (S && O) return S == t && O == e;
  var C = !0;
  l.set(e, t), l.set(t, e);
  for (var _ = c; ++b < m;) {
    x = d[b];
    var T = e[x],
      q = t[x];
    if (i) var M = c ? i(q, T, x, t, e, l) : i(T, q, x, e, t, l);
    if (!(M === void 0 ? T === q || u(T, q, a, i, l) : M)) {
      C = !1;
      break;
    }
    _ || (_ = x == "constructor");
  }
  if (C && !_) {
    var B = e.constructor,
      G = t.constructor;
    B != G && "constructor" in e && "constructor" in t && !(typeof B == "function" && B instanceof B && typeof G == "function" && G instanceof G) && (C = !1);
  }
  return l.delete(e), l.delete(t), C;
}
var NP = Kde;
var Vde = 1,
  wP = "[object Arguments]",
  MP = "[object Array]",
  Hd = "[object Object]",
  Yde = Object.prototype,
  DP = Yde.hasOwnProperty;
function Xde(e, t, a, i, u, l) {
  var c = Yi(e),
    d = Yi(t),
    m = c ? MP : lx(e),
    h = d ? MP : lx(t);
  m = m == wP ? Hd : m, h = h == wP ? Hd : h;
  var g = m == Hd,
    b = h == Hd,
    x = m == h;
  if (x && Hl(e)) {
    if (!Hl(t)) return !1;
    c = !0, g = !1;
  }
  if (x && !g) return l || (l = new Id()), c || Dd(e) ? jd(e, t, a, i, u, l) : RP(e, t, m, a, i, u, l);
  if (!(a & Vde)) {
    var S = g && DP.call(e, "__wrapped__"),
      O = b && DP.call(t, "__wrapped__");
    if (S || O) {
      var C = S ? e.value() : e,
        _ = O ? t.value() : t;
      return l || (l = new Id()), u(C, _, a, i, l);
    }
  }
  return x ? (l || (l = new Id()), NP(e, t, a, i, u, l)) : !1;
}
var BP = Xde;
function IP(e, t, a, i, u) {
  return e === t ? !0 : e == null || t == null || !ea(e) && !ea(t) ? e !== e && t !== t : BP(e, t, a, i, IP, u);
}
var PP = IP;
function kde(e, t) {
  return PP(e, t);
}
var Gl = kde;
var uCe = "3g2,3gp,asf,avi,f4v,flv,h264,h265,m2ts,m4v,mkv,mov,mp4,mp4v,mpeg,mpg,ogm,ogv,rm,rmvb,ts,vob,webm,wmv,y4m,m4s".split(","),
  sCe = "aac,ac3,aiff,ape,au,cue,dsf,dts,flac,m4a,mid,midi,mka,mp3,mp4a,oga,ogg,opus,spx,tak,tta,wav,weba,wma,wv".split(","),
  lCe = "apng,avif,bmp,gif,j2k,jp2,jfif,jpeg,jpg,jxl,mj2,png,svg,tga,tif,tiff,webp".split(","),
  Qde = "aqt,ass,gsub,idx,jss,lrc,mks,pgs,pjs,psb,rt,sbv,slt,smi,sub,sup,srt,ssa,ssf,ttxt,usf,vt,vtt".split(","),
  cCe = "ttf,otf,woff,woff2,eot".split(","),
  fCe = "dll,so,dylib".split(",");
function zP(e) {
  if (wr() === "windows") {
    var t = e.reduce(function (a, i) {
      return a + i.length + 1;
    }, 0);
    if (t > 8191) throw new Error("Command length (".concat(t, ") exceeds Windows limit (8191).\nCommand starts with: ").concat(e.join(" ").substring(0, 200), "..."));
  }
}
function na(e) {
  var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
  var a = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !0;
  var i = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : !0;
  zP(e);
  var u = jP({
    name: "subprocess",
    args: e,
    playback_only: t,
    capture_stdout: a,
    capture_stderr: i
  });
  if (u.status < 0) throw new Error("subprocess error status:".concat(u.status, " stderr:").concat(u.stderr));
  return u.stdout.replaceAll("\r\n", "\n");
}
function hn(e) {
  var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
  var a = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !0;
  var i = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : !0;
  return new Promise(function (u, l) {
    try {
      zP(e);
    } catch (c) {
      l(c);
      return;
    }
    Gd({
      name: "subprocess",
      args: e,
      playback_only: t,
      capture_stdout: a,
      capture_stderr: i
    }, function (c, d, m) {
      c ? d.status < 0 ? l(d.stderr.replaceAll("\r\n", "\n")) : u(d.stdout.replaceAll("\r\n", "\n")) : l(m);
    });
  });
}
var Zde = {
  windows: "windows",
  linux: "linux",
  osx: "darwin",
  mac: "darwin",
  darwin: "darwin",
  "^mingw": "windows",
  "^cygwin": "windows",
  bsd$: "darwin",
  sunos: "darwin",
  android: "android"
};
var Fd;
function wr() {
  if (Fd) return Fd;
  function e() {
    return Vl("platform");
  }
  var t;
  function a() {
    if (t) return t;
    var u = (na(["uname", "-s"]) || "").toLowerCase();
    t = "windows";
    for (var _i8 = 0, _Object$entries = Object.entries(Zde); _i8 < _Object$entries.length; _i8++) {
      var _Object$entries$_i = _slicedToArray(_Object$entries[_i8], 2),
        l = _Object$entries$_i[0],
        c = _Object$entries$_i[1];
      if (u.match(new RegExp(l))) {
        t = c;
        break;
      }
    }
    return t;
  }
  return Fd = e() || a(), Fd;
}
var vn = /*#__PURE__*/function () {
  function e(t, a, i, u) {
    _classCallCheck(this, e);
    _defineProperty(this, "x", void 0);
    _defineProperty(this, "y", void 0);
    _defineProperty(this, "width", void 0);
    _defineProperty(this, "height", void 0);
    this.x = t;
    this.y = a;
    this.width = i;
    this.height = u;
  }
  return _createClass(e, [{
    key: "cx",
    get: function get() {
      return this.x + this.width / 2;
    }
  }, {
    key: "cy",
    get: function get() {
      return this.y + this.height / 2;
    }
  }, {
    key: "x0",
    get: function get() {
      return this.x;
    }
  }, {
    key: "y0",
    get: function get() {
      return this.y;
    }
  }, {
    key: "x1",
    get: function get() {
      return this.x + this.width;
    }
  }, {
    key: "y1",
    get: function get() {
      return this.y + this.height;
    }
  }, {
    key: "toCoord",
    value: function toCoord() {
      return {
        x0: this.x0,
        y0: this.y0,
        x1: this.x1,
        y1: this.y1
      };
    }
  }, {
    key: "hasPoint",
    value: function hasPoint(t, a) {
      return t >= this.x0 && t <= this.x1 && a >= this.y0 && a <= this.y1;
    }
  }, {
    key: "placeCenter",
    value: function placeCenter(t) {
      var a = (this.width - t.width) / 2,
        i = (this.height - t.height) / 2,
        u = this.x + a,
        l = this.y + i;
      return new e(u, l, t.width, t.height);
    }
  }, {
    key: "scale",
    value: function scale(t) {
      return new e(this.x * t, this.y * t, this.width * t, this.height * t);
    }
  }, {
    key: "scaleFromPoint",
    value: function scaleFromPoint(t, a, i, u) {
      var l = this.width * i,
        c = this.height * u,
        d = (this.width - l) * ((t - this.x) / this.width),
        m = (this.height - c) * ((a - this.y) / this.height),
        h = this.x + d,
        g = this.y + m;
      return new e(h, g, l, c);
    }
  }, {
    key: "scaleCenterXY",
    value: function scaleCenterXY(t, a) {
      var i = this.x + this.width / 2,
        u = this.y + this.height / 2,
        l = this.width * t,
        c = this.height * a,
        d = i - l / 2,
        m = u - c / 2;
      return new e(d, m, l, c);
    }
  }, {
    key: "offsetXY",
    value: function offsetXY(t, a) {
      return new e(this.x + t, this.y + a, this.width, this.height);
    }
  }, {
    key: "scaleXY",
    value: function scaleXY(t, a) {
      return new e(this.x * t, this.y * a, this.width * t, this.height * a);
    }
  }, {
    key: "intersection",
    value: function intersection(t) {
      var a = Math.max(this.x, t.x),
        i = Math.max(this.y, t.y),
        u = Math.min(this.x + this.width, t.x + t.width),
        l = Math.min(this.y + this.height, t.y + t.height),
        c = u - a,
        d = l - i;
      if (c > 0 && d > 0) return new e(a, i, c, d);
    }
  }], [{
    key: "fromCoord",
    value: function fromCoord(t) {
      var a = Math.min(t.x0, t.x1),
        i = Math.min(t.y0, t.y1),
        u = Math.abs(t.x0 - t.x1),
        l = Math.abs(t.y0 - t.y1);
      return new e(a, i, u, l);
    }
  }]);
}();
var UP = !1,
  Kl = -1,
  px = 0;
function ki() {
  var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 720;
  return UP || (UP = !0, Kl = ei("osd-height") || 0, px = e / Kl, dx("osd-height", function (t, a) {
    Kl !== a && a && (Kl = a, px = e / Kl);
  })), px;
}
function yr(e) {
  var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  HP(e, t), print(e);
}
function LP() {
  return aa("HOME");
}
function FP(e) {
  return e[0] === "#" ? parseInt(e.slice(1), 16) : parseInt(e, 16);
}
function Yl(e) {
  return e >> 24 & 255;
}
function Qi(e) {
  return e >> 16 & 255;
}
function Zi(e) {
  return e >> 8 & 255;
}
function Ji(e) {
  return e & 255;
}
function Ru(e, t) {
  return e & 16777215 | t << 24;
}
function Wi(e, t) {
  return e & 4278255615 | t << 16;
}
function $i(e, t) {
  return e & 4294902015 | t << 8;
}
function Nu(e, t) {
  return e & 4294967040 | t;
}
function Ot(e) {
  this.color = typeof e == "number" ? e : FP(e);
}
Ot.prototype = new Ot(0);
Ot.prototype.byteCount = 6;
Ot.prototype.toRgba = function () {
  var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var t = arguments.length > 1 ? arguments[1] : undefined;
  var a = this.red << 24 | this.green << 16 | this.blue << 8 | (t ? 255 - e : e);
  return new eo(a, t);
};
Ot.prototype.toRgb = function () {
  var e = this.red << 16 | this.green << 8 | this.blue;
  return new ia(e);
};
Ot.prototype.toBgr = function () {
  return this.toRgb().toBgr();
};
Ot.prototype.toBgra = function () {
  var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var t = arguments.length > 1 ? arguments[1] : undefined;
  return this.toRgba(e, t).toBgra();
};
Ot.prototype.toArgb = function () {
  var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var t = arguments.length > 1 ? arguments[1] : undefined;
  return this.toRgba(e, t).toArgb();
};
Ot.prototype.toAbgr = function () {
  var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var t = arguments.length > 1 ? arguments[1] : undefined;
  return this.toRgba(e, t).toAbgr();
};
Ot.prototype.invert = function () {
  var e = ~this.color & 16777215;
  return new ia(e);
};
Ot.prototype.toHex = function () {
  var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
  var t = (this.color >>> 0).toString(16).padStart(this.byteCount, "0");
  return (e + t).toUpperCase();
};
function Ct(e) {
  var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
  Ot.call(this, e), this.invertAlpha = t, this.byteCount = 8, Object.defineProperty(this, "alpha", {
    get: function get() {
      return this.invertAlpha ? 255 - this.rawAlpha : this.rawAlpha;
    },
    set: function set(a) {
      this.rawAlpha = this.invertAlpha ? 255 - a : a;
    }
  });
}
Ct.prototype = new Ot(0);
Ct.prototype.byteCount = 8;
Ct.prototype.toRgba = function () {
  var e = this.red << 24 | this.green << 16 | this.blue << 8 | this.alpha;
  return new eo(e, this.invertAlpha);
};
Ct.prototype.toBgra = function () {
  var e = this.blue << 24 | this.green << 16 | this.red << 8 | this.alpha;
  return new wu(e, this.invertAlpha);
};
Ct.prototype.toAbgr = function () {
  var e = this.alpha << 24 | this.blue << 16 | this.green << 8 | this.red;
  return new mx(e, this.invertAlpha);
};
Ct.prototype.toArgb = function () {
  var e = this.alpha << 24 | this.red << 16 | this.green << 8 | this.blue;
  return new Xl(e, this.invertAlpha);
};
Ct.prototype.toRgb = function () {
  var e = this.red << 16 | this.green << 8 | this.blue;
  return new ia(e);
};
Ct.prototype.toBgr = function () {
  var e = this.blue << 16 | this.green << 8 | this.red;
  return new ia(e);
};
function eo(e) {
  var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
  Ct.call(this, e, t), Object.defineProperty(this, "red", {
    get: function get() {
      return Yl(this.color);
    },
    set: function set(a) {
      this.color = Ru(this.color, a);
    }
  }), Object.defineProperty(this, "green", {
    get: function get() {
      return Qi(this.color);
    },
    set: function set(a) {
      this.color = Wi(this.color, a);
    }
  }), Object.defineProperty(this, "blue", {
    get: function get() {
      return Zi(this.color);
    },
    set: function set(a) {
      this.color = $i(this.color, a);
    }
  }), Object.defineProperty(this, "rawAlpha", {
    get: function get() {
      return Ji(this.color);
    },
    set: function set(a) {
      this.color = Nu(this.color, a);
    }
  });
}
eo.prototype = Object.create(Ct.prototype);
eo.prototype.constructor = Ct;
eo.prototype.invert = function () {
  var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !1;
  var t = e ? ~this.color : ~this.color & 4294967040 | this.alpha;
  return new eo(t, this.invertAlpha);
};
function ia(e) {
  Ot.call(this, e), Object.defineProperty(this, "red", {
    get: function get() {
      return Qi(this.color);
    },
    set: function set(t) {
      this.color = Wi(this.color, t);
    }
  }), Object.defineProperty(this, "green", {
    get: function get() {
      return Zi(this.color);
    },
    set: function set(t) {
      this.color = $i(this.color, t);
    }
  }), Object.defineProperty(this, "blue", {
    get: function get() {
      return Ji(this.color);
    },
    set: function set(t) {
      this.color = Nu(this.color, t);
    }
  });
}
ia.prototype = new Ot(0);
ia.prototype.toRgba = function () {
  var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var t = arguments.length > 1 ? arguments[1] : undefined;
  var a = this.color << 8 | (t ? 255 - e : e);
  return new eo(a, t);
};
ia.prototype.toBgr = function () {
  var e = this.blue << 16 | this.green << 8 | this.red;
  return new GP(e);
};
function wu(e) {
  var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
  Ct.call(this, e, t), Object.defineProperty(this, "blue", {
    get: function get() {
      return Yl(this.color);
    },
    set: function set(a) {
      this.color = Ru(this.color, a);
    }
  }), Object.defineProperty(this, "green", {
    get: function get() {
      return Qi(this.color);
    },
    set: function set(a) {
      this.color = Wi(this.color, a);
    }
  }), Object.defineProperty(this, "red", {
    get: function get() {
      return Zi(this.color);
    },
    set: function set(a) {
      this.color = $i(this.color, a);
    }
  }), Object.defineProperty(this, "rawAlpha", {
    get: function get() {
      return Ji(this.color);
    },
    set: function set(a) {
      this.color = Nu(this.color, a);
    }
  });
}
wu.prototype = new Ct(0);
wu.prototype.invert = function () {
  var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !1;
  var t = e ? ~this.color : ~this.color & 4294967040 | this.alpha;
  return new wu(t);
};
function GP(e) {
  Ot.call(this, e), Object.defineProperty(this, "blue", {
    get: function get() {
      return Qi(this.color);
    },
    set: function set(t) {
      this.color = Ru(this.color, t);
    }
  }), Object.defineProperty(this, "green", {
    get: function get() {
      return Zi(this.color);
    },
    set: function set(t) {
      this.color = Wi(this.color, t);
    }
  }), Object.defineProperty(this, "red", {
    get: function get() {
      return Ji(this.color);
    },
    set: function set(t) {
      this.color = $i(this.color, t);
    }
  });
}
GP.prototype = new Ot(0);
function Xl(e) {
  var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
  Ct.call(this, e, t), Object.defineProperty(this, "rawAlpha", {
    get: function get() {
      return Yl(this.color);
    },
    set: function set(a) {
      this.color = Ru(this.color, a);
    }
  }), Object.defineProperty(this, "red", {
    get: function get() {
      return Qi(this.color);
    },
    set: function set(a) {
      this.color = Wi(this.color, a);
    }
  }), Object.defineProperty(this, "green", {
    get: function get() {
      return Zi(this.color);
    },
    set: function set(a) {
      this.color = $i(this.color, a);
    }
  }), Object.defineProperty(this, "blue", {
    get: function get() {
      return Ji(this.color);
    },
    set: function set(a) {
      this.color = Nu(this.color, a);
    }
  });
}
Xl.prototype = new Ct(0);
Xl.prototype.invert = function () {
  var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !1;
  var t = e ? ~this.color : ~this.color & 16777215 | this.alpha << 24;
  return new wu(t, this.invertAlpha);
};
function mx(e) {
  var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
  Ct.call(this, e, t), Object.defineProperty(this, "rawAlpha", {
    get: function get() {
      return Yl(this.color);
    },
    set: function set(a) {
      this.color = Ru(this.color, a);
    }
  }), Object.defineProperty(this, "blue", {
    get: function get() {
      return Qi(this.color);
    },
    set: function set(a) {
      this.color = Wi(this.color, a);
    }
  }), Object.defineProperty(this, "green", {
    get: function get() {
      return Zi(this.color);
    },
    set: function set(a) {
      this.color = $i(this.color, a);
    }
  }), Object.defineProperty(this, "red", {
    get: function get() {
      return Ji(this.color);
    },
    set: function set(a) {
      this.color = Nu(this.color, a);
    }
  });
}
mx.prototype = new Ct(0);
mx.prototype.invert = function () {
  var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !1;
  var t = e ? ~this.color : ~this.color & 16777215 | this.alpha << 24;
  return new wu(t, this.invertAlpha);
};
var Vd = {
  AliceBlue: 15792383,
  AntiqueWhite: 16444375,
  Aqua: 65535,
  Aquamarine: 8388564,
  Azure: 15794175,
  Beige: 16119260,
  Bisque: 16770244,
  Black: 0,
  BlanchedAlmond: 16772045,
  Blue: 255,
  BlueViolet: 9055202,
  Brown: 10824234,
  BurlyWood: 14596231,
  CadetBlue: 6266528,
  Chartreuse: 8388352,
  Chocolate: 13789470,
  Coral: 16744272,
  CornflowerBlue: 6591981,
  Cornsilk: 16775388,
  Crimson: 14423100,
  Cyan: 65535,
  DarkBlue: 139,
  DarkCyan: 35723,
  DarkGoldenRod: 12092939,
  DarkGray: 11119017,
  DarkGrey: 11119017,
  DarkGreen: 25600,
  DarkKhaki: 12433259,
  DarkMagenta: 9109643,
  DarkOliveGreen: 5597999,
  DarkOrange: 16747520,
  DarkOrchid: 10040012,
  DarkRed: 9109504,
  DarkSalmon: 15308410,
  DarkSeaGreen: 9419919,
  DarkSlateBlue: 4734347,
  DarkSlateGray: 3100495,
  DarkSlateGrey: 3100495,
  DarkTurquoise: 52945,
  DarkViolet: 9699539,
  DeepPink: 16716947,
  DeepSkyBlue: 49151,
  DimGray: 6908265,
  DimGrey: 6908265,
  DodgerBlue: 2003199,
  FireBrick: 11674146,
  FloralWhite: 16775920,
  ForestGreen: 2263842,
  Fuchsia: 16711935,
  Gainsboro: 14474460,
  GhostWhite: 16316671,
  Gold: 16766720,
  GoldenRod: 14329120,
  Gray: 8421504,
  Grey: 8421504,
  Green: 32768,
  GreenYellow: 11403055,
  HoneyDew: 15794160,
  HotPink: 16738740,
  IndianRed: 13458524,
  Indigo: 4915330,
  Ivory: 16777200,
  Khaki: 15787660,
  Lavender: 15132410,
  LavenderBlush: 16773365,
  LawnGreen: 8190976,
  LemonChiffon: 16775885,
  LightBlue: 11393254,
  LightCoral: 15761536,
  LightCyan: 14745599,
  LightGoldenRodYellow: 16448210,
  LightGray: 13882323,
  LightGrey: 13882323,
  LightGreen: 9498256,
  LightPink: 16758465,
  LightSalmon: 16752762,
  LightSeaGreen: 2142890,
  LightSkyBlue: 8900346,
  LightSlateGray: 7833753,
  LightSlateGrey: 7833753,
  LightSteelBlue: 11584734,
  LightYellow: 16777184,
  Lime: 65280,
  LimeGreen: 3329330,
  Linen: 16445670,
  Magenta: 16711935,
  Maroon: 8388608,
  MediumAquaMarine: 6737322,
  MediumBlue: 205,
  MediumOrchid: 12211667,
  MediumPurple: 9662683,
  MediumSeaGreen: 3978097,
  MediumSlateBlue: 8087790,
  MediumSpringGreen: 64154,
  MediumTurquoise: 4772300,
  MediumVioletRed: 13047173,
  MidnightBlue: 1644912,
  MintCream: 16121850,
  MistyRose: 16770273,
  Moccasin: 16770229,
  NavajoWhite: 16768685,
  Navy: 128,
  OldLace: 16643558,
  Olive: 8421376,
  OliveDrab: 7048739,
  Orange: 16753920,
  OrangeRed: 16729344,
  Orchid: 14315734,
  PaleGoldenRod: 15657130,
  PaleGreen: 10025880,
  PaleTurquoise: 11529966,
  PaleVioletRed: 14381203,
  PapayaWhip: 16773077,
  PeachPuff: 16767673,
  Peru: 13468991,
  Pink: 16761035,
  Plum: 14524637,
  PowderBlue: 11591910,
  Purple: 8388736,
  RebeccaPurple: 6697881,
  Red: 16711680,
  RosyBrown: 12357519,
  RoyalBlue: 4286945,
  SaddleBrown: 9127187,
  Salmon: 16416882,
  SandyBrown: 16032864,
  SeaGreen: 3050327,
  SeaShell: 16774638,
  Sienna: 10506797,
  Silver: 12632256,
  SkyBlue: 8900331,
  SlateBlue: 6970061,
  SlateGray: 7372944,
  SlateGrey: 7372944,
  Snow: 16775930,
  SpringGreen: 65407,
  SteelBlue: 4620980,
  Tan: 13808780,
  Teal: 32896,
  Thistle: 14204888,
  Tomato: 16737095,
  Turquoise: 4251856,
  Violet: 15631086,
  Wheat: 16113331,
  White: 16777215,
  WhiteSmoke: 16119285,
  Yellow: 16776960,
  YellowGreen: 10145074
};
function vx(e, t) {
  var a = hx(e, "files");
  if (!a) return;
  var i = a.find(function (u) {
    return u.startsWith(t);
  });
  if (i) return At(e, i);
}
function Ye(e) {
  try {
    return !!to(e);
  } catch (_unused73) {
    return !1;
  }
}
function Jde(e) {
  var _to;
  return !!((_to = to(e)) !== null && _to !== void 0 && _to.is_dir);
}
function Yd(e) {
  if (!(e !== null && e !== void 0 && e.length)) return;
  var t = e.replaceAll("\\", "/").split("/").slice(0, -1).join("/");
  if (Jde(t)) return t;
}
function jP(e) {
  return mp.command_native(e);
}
function Gd(e, t) {
  return mp.command_native_async(e, t);
}
function Vl(e, t) {
  var _mp$get_property;
  return (_mp$get_property = mp.get_property(e)) !== null && _mp$get_property !== void 0 ? _mp$get_property : t;
}
function Xd(e, t) {
  var _mp$get_property_bool;
  return (_mp$get_property_bool = mp.get_property_bool(e)) !== null && _mp$get_property_bool !== void 0 ? _mp$get_property_bool : t;
}
function Kd(e, t) {
  var _mp$get_property_nati;
  return (_mp$get_property_nati = mp.get_property_native(e)) !== null && _mp$get_property_nati !== void 0 ? _mp$get_property_nati : t;
}
function ei(e, t) {
  var _mp$get_property_numb;
  return (_mp$get_property_numb = mp.get_property_number(e)) !== null && _mp$get_property_numb !== void 0 ? _mp$get_property_numb : t;
}
function oa(e, t) {
  var _mp$get_property_nati2;
  return (_mp$get_property_nati2 = mp.get_property_native(e)) !== null && _mp$get_property_nati2 !== void 0 ? _mp$get_property_nati2 : t;
}
function KP(e, t) {
  return mp.set_property(e, t);
}
function ti(e, t) {
  return mp.set_property_bool(e, t);
}
function gx(e, t) {
  return mp.set_property_number(e, t);
}
function ua(e, t) {
  return mp.set_property_native(e, t);
}
function Mu(e, t, a, i) {
  return mp.add_key_binding(e, t, a, i);
}
function gn(e, t, a) {
  return mp.observe_property(e, t, a);
}
function dx(e, t) {
  return gn(e, "number", t);
}
function VP(e) {
  return mp.unobserve_property(e);
}
function HP(e, t) {
  return mp.osd_message(e, t);
}
function yn(e, t) {
  return mp.register_script_message(e, t);
}
function YP() {
  var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "ass-events";
  return mp.create_osd_overlay(e);
}
function Qd() {
  return mp.get_osd_size();
}
var kd;
function Cu() {
  return kd || (kd = Rr(mp.get_script_file().split("/").slice(0, -1).join("/")), kd);
}
function yx() {
  var _mp$msg;
  return (_mp$msg = mp.msg).debug.apply(_mp$msg, arguments);
}
function XP(e, t, a) {
  return typeof a == "function" ? mp.options.read_options(e, t, a) : mp.options.read_options(e, t);
}
function hx(e, t) {
  return mp.utils.readdir(e, t);
}
function to(e) {
  return mp.utils.file_info(e);
}
function Wde(e) {
  return mp.utils.split_path(e);
}
function At() {
  for (var _len8 = arguments.length, e = new Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
    e[_key8] = arguments[_key8];
  }
  return Rr(e.reduce(function (t, a) {
    return mp.utils.join_path(t, a);
  }));
}
function aa(e, t) {
  var _mp$utils$getenv;
  return (_mp$utils$getenv = mp.utils.getenv(e)) !== null && _mp$utils$getenv !== void 0 ? _mp$utils$getenv : t;
}
function er(e, t) {
  return mp.utils.read_file(e, t);
}
function bn(e, t) {
  var a = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "file://";
  var i = a + Rr(e);
  return mp.utils.write_file(i, t);
}
function Zd() {
  var e = kP(),
    t = wr() === "windows" ? "mpv.exe" : "mpv",
    a = At.apply(void 0, _toConsumableArray(Wde(e).slice(0, -1)).concat([t]));
  return wr() === "windows" ? Rr(a) : a;
}
function kP() {
  return Rr(zl("~~home/"));
}
function QP() {
  return At(kP(), "script-opts");
}
function xn() {
  return Yd(Zd());
}
function ZP() {
  return Rr(zl("~~desktop/"));
}
function JP() {
  return Math.random().toString(36).slice(2);
}
var Du = /*#__PURE__*/function () {
  function Du(t) {
    _classCallCheck(this, Du);
    _defineProperty(this, "name", void 0);
    _defineProperty(this, "_lastValue", void 0);
    this.name = t;
  }
  return _createClass(Du, [{
    key: "value",
    get: function get() {
      return oa(this.name);
    },
    set: function set(t) {
      ua(this.name, t);
    }
  }, {
    key: "set",
    value: function set(t) {
      return this.value = t, this;
    }
  }, {
    key: "get",
    value: function get() {
      return this.value;
    }
  }, {
    key: "observe",
    value: function observe(t) {
      var _this3 = this;
      var a = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Gl;
      var i = function i(u, l) {
        (_typeof(_this3._lastValue) > "u" || !a(l, _this3._lastValue)) && (_this3._lastValue = l, t(u, l));
      };
      return gn(this.name, "native", i), i;
    }
  }, {
    key: "unobserve",
    value: function unobserve(t) {
      return this._lastValue = void 0, VP(t);
    }
  }]);
}();
function WP(e, t, a) {
  var i = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "powershell";
  bn(e, t);
  var u = na([i, e]);
  return a && (u = er(a)), u;
}
var Jd = {};
function Bu(e) {
  if (_typeof(Jd[e]) < "u") return Jd[e];
  var t = ["where ".concat(e), "which ".concat(e), "command -v ".concat(e)];
  for (var _i9 = 0, _t2 = t; _i9 < _t2.length; _i9++) {
    var a = _t2[_i9];
    try {
      var i = $de(a).stdout;
      if (!i) continue;
      var u = i.trim().split("\n")[0];
      if (u && Ye(u)) return Jd[e] = u, u;
    } catch (i) {
      yx("[detectCmd](".concat(e, ") probe '").concat(a, "' error: ").concat(i));
    }
  }
  return Jd[e] = !1, !1;
}
function $de(e) {
  var t = wr(),
    _ref = t === "windows" ? ["cmd", "/c"] : ["sh", "-c"],
    _ref2 = _slicedToArray(_ref, 2),
    a = _ref2[0],
    i = _ref2[1];
  try {
    return {
      ok: !0,
      stdout: na([a, i, e]).replaceAll("\r\n", "\n"),
      stderr: ""
    };
  } catch (u) {
    return yx("[runCmdSync] ".concat(e, " failed: ").concat(u)), {
      ok: !1,
      stderr: String(u).replaceAll("\r\n", "\n"),
      stdout: ""
    };
  }
}
var Iu;
function eme() {
  if (Iu) return Iu;
  var e = na(["powershell", "-c", 'Get-ItemProperty -Path "HKCU:\\Control Panel\\Cursors"']).trim();
  Iu = {
    Arrow: "",
    Hand: ""
  };
  var _iterator4 = _createForOfIteratorHelper(e.split("\n")),
    _step4;
  try {
    for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
      var t = _step4.value;
      var a = t.indexOf(":"),
        i = t.slice(0, a).trim(),
        u = t.slice(a + 1).trim();
      i === "Arrow" ? Iu.Arrow = u : i === "Hand" && (Iu.Hand = u);
    }
  } catch (err) {
    _iterator4.e(err);
  } finally {
    _iterator4.f();
  }
  return Iu;
}
var bx;
function xx(e) {
  bx || (bx = eme());
  var t = bx[e];
  if (!t.length) return;
  var a = "Set-ItemProperty -Path 'HKCU:\\Control Panel\\Cursors' -Name 'Arrow' -Value '".concat(t, "';\nAdd-Type -TypeDefinition @'\npublic class SysParamsInfo {\n    [System.Runtime.InteropServices.DllImport(\"user32.dll\", EntryPoint = \"SystemParametersInfo\")]\n    public static extern bool SystemParametersInfo(uint uiAction, uint uiParam, uint pvParam, uint fWinIni);\n\n    const int SPI_SETCURSORS = 0x0057;\n    const int SPIF_UPDATEINIFILE = 0x01;\n    const int SPIF_SENDCHANGE = 0x02;\n\n    public static void CursorHasChanged() {\n        SystemParametersInfo(SPI_SETCURSORS, 0, 0, SPIF_UPDATEINIFILE | SPIF_SENDCHANGE);\n    }\n}\n'@\n[SysParamsInfo]::CursorHasChanged()"),
    u = At(Cu(), "mpv_easy_tool_set_mouse_style.ps1");
  WP(u, a);
}
function $P(e, t) {
  if (!e) throw new Error(t || "Assertion failed");
}
function Wd(e) {
  return rme(e), Number.parseFloat(e.slice(0, -1)) / 100;
}
function tme(e) {
  return e.endsWith("%");
}
function rme(e) {
  $P(tme(e), "not a valid percentage string: ".concat(e));
}
var $d = [];
function nme() {
  for (var t = 0; t < $d.length; t++) {
    var a = $d[t];
    if (a && !a.busy) return a.busy = !0, a.overlay;
  }
  var e = YP();
  return e.remove = function () {
    e.hidden = !0, e.data = "", e.compute_bounds = !1, e.update();
    var t = $d[e.id - 1];
    t && (t.busy = !1);
  }, $d[e.id - 1] = {
    overlay: e,
    busy: !0
  }, e;
}
var ame = {
    hidden: !1,
    resX: 0,
    resY: 720,
    z: 0,
    computeBounds: !0,
    data: "",
    cache: !1
  },
  Sn = /*#__PURE__*/function () {
    function Sn() {
      var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      _classCallCheck(this, Sn);
      _defineProperty(this, "overlay", void 0);
      _defineProperty(this, "option", void 0);
      _defineProperty(this, "_lastResY", void 0);
      _defineProperty(this, "_lastResX", void 0);
      _defineProperty(this, "_lastHidden", void 0);
      _defineProperty(this, "_lastComputeBounds", void 0);
      _defineProperty(this, "_lastData", void 0);
      _defineProperty(this, "_lastZ", void 0);
      _defineProperty(this, "_lastRect", void 0);
      this.option = _objectSpread(_objectSpread({}, ame), t);
    }
    return _createClass(Sn, [{
      key: "hidden",
      get: function get() {
        return this.option.hidden;
      },
      set: function set(t) {
        this.option.hidden = t;
      }
    }, {
      key: "computeBounds",
      get: function get() {
        return this.option.computeBounds;
      },
      set: function set(t) {
        this.option.computeBounds = t;
      }
    }, {
      key: "z",
      get: function get() {
        return this.option.z;
      },
      set: function set(t) {
        this.option.z = t;
      }
    }, {
      key: "data",
      get: function get() {
        return this.option.data;
      },
      set: function set(t) {
        this.option.data = t;
      }
    }, {
      key: "resX",
      get: function get() {
        return this.option.resX;
      },
      set: function set(t) {
        this.option.resX = t;
      }
    }, {
      key: "resY",
      get: function get() {
        return this.option.resY;
      },
      set: function set(t) {
        this.option.resY = t;
      }
    }, {
      key: "remove",
      value: function remove() {
        this.overlay && this.overlay.remove();
      }
    }, {
      key: "update",
      value: function update() {
        var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
        if (this.option.data && !this.overlay && (this.overlay = nme()), !this.overlay) return this._lastRect || new vn(0, 0, 0, 0);
        if (this.overlay.data = this.option.data, this.overlay.res_x = this.option.resX, this.overlay.res_y = this.option.resY, this.overlay.z = this.option.z, this.overlay.hidden = this.option.hidden, this.overlay.compute_bounds = this.option.computeBounds, this.option.cache) {
          if (this._lastResX === this.resX && this._lastResY === this.resY && this._lastHidden === this.hidden && this._lastComputeBounds === this.computeBounds && this._lastData === this.data && this._lastZ === this.z) return this._lastRect;
          this._lastResY = this.resY, this._lastResX = this.resX, this._lastHidden = this.hidden, this._lastComputeBounds = this.computeBounds, this._lastData = this.data, this._lastZ = this.z;
          var i = this.overlay.update();
          return this._lastRect = vn.fromCoord(i).scale(t), this._lastRect;
        }
        var a = this.overlay.update();
        return vn.fromCoord(a).scale(t);
      }
    }]);
  }();
var em = 64,
  kl = new Array(em).map(function () {
    return !1;
  });
function ime(e) {
  if (e < 0 || e >= em) throw new Error("overlay's id(".concat(e, ") must be in the range [0, 63]"));
  if (e >= 0 && e < em && !kl[e]) return kl[e] = !0, e;
  for (var t = 0; t < em; t++) if (!kl[t]) return kl[t] = !0, t;
  throw new Error("No available overlay ID (0-63)");
}
var tm = /*#__PURE__*/function () {
  function tm(t) {
    _classCallCheck(this, tm);
    _defineProperty(this, "x", 0);
    _defineProperty(this, "y", 0);
    _defineProperty(this, "file", "");
    _defineProperty(this, "offset", 0);
    _defineProperty(this, "fmt", "bgra");
    _defineProperty(this, "w", 0);
    _defineProperty(this, "h", 0);
    _defineProperty(this, "stride", 0);
    _defineProperty(this, "dw", void 0);
    _defineProperty(this, "dh", void 0);
    _defineProperty(this, "id", void 0);
    var a = ime(t);
    a !== t && print("[overlay] ID ".concat(t, " is already in use, assigned ").concat(a, " instead.")), this.id = a;
  }
  return _createClass(tm, [{
    key: "update",
    value: function update() {
      d6(this.id, this.x, this.y, this.file, 0, this.fmt, this.w, this.h, this.stride, this.dw != null ? this.dw : this.w, this.dh != null ? this.dh : this.h);
    }
  }, {
    key: "remove",
    value: function remove() {
      m6(this.id);
    }
  }, {
    key: "destroy",
    value: function destroy() {
      kl[this.id] = !1;
    }
  }]);
}();
var Ql;
function rm() {
  var _vx;
  if (Ql) return Ql;
  if (Ql = (_vx = vx(Cu(), "mpv-easy-ext")) !== null && _vx !== void 0 ? _vx : vx(xn(), "mpv-easy-ext"), !Ql) throw new Error("mpv-easy-ext binary not found in:\n  - ".concat(Cu(), "\n  - ").concat(xn()));
  return Ql;
}
function Pu() {
  return aa("TMPDIR") || aa("TMP") || aa("tmp") || ".";
}
function eU(e) {
  var t = JP(),
    a = e ? "".concat(t, ".").concat(e) : t;
  return At(Pu(), a);
}
function tU(_x2, _x3) {
  return _tU.apply(this, arguments);
}
function _tU() {
  _tU = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4(e, t) {
    var a,
      i,
      _JSON$parse,
      u,
      l,
      _args = arguments,
      _t9;
    return _regenerator().w(function (_context4) {
      while (1) switch (_context4.n) {
        case 0:
          a = _args.length > 2 && _args[2] !== undefined ? _args[2] : rm();
          i = t ? [a, "fetch", JSON.stringify(e), JSON.stringify(t)] : [a, "fetch", JSON.stringify(e)];
          _t9 = JSON;
          _context4.n = 1;
          return hn(i);
        case 1:
          _JSON$parse = _t9.parse.call(_t9, _context4.v);
          u = _JSON$parse.status;
          l = _JSON$parse.text;
          return _context4.a(2, {
            status: u,
            ok: u === 200,
            text: function text() {
              return Promise.resolve(l);
            },
            json: function json() {
              return Promise.resolve(JSON.parse(l));
            }
          });
      }
    }, _callee4);
  }));
  return _tU.apply(this, arguments);
}
var ome = ["C:/Windows/System32/curl.exe", "C:/Program Files/curl/bin/curl.exe", "/usr/bin/curl", "/usr/local/bin/curl", "/opt/homebrew/bin/curl", "/opt/local/bin/curl"],
  En;
function rU() {
  if (En || wr() === "windows" && (En = "C:/Windows/System32/curl.exe", Ye(En)) || (En = Bu("curl"), En)) return En;
  var _iterator5 = _createForOfIteratorHelper(ome),
    _step5;
  try {
    for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
      var t = _step5.value;
      if (print("[detectCurl] checking common path: ".concat(t), Ye(t)), Ye(t)) return En = t, En;
    }
  } catch (err) {
    _iterator5.e(err);
  } finally {
    _iterator5.f();
  }
  return !1;
}
function ume(e) {
  var t = e.method;
  return t ? ["-X", v6[t.toUpperCase()] || t.toUpperCase()] : ["-X", "GET"];
}
var sme = function sme(e, t) {
  return "".concat(e, ": ").concat("".concat(t).replace(/(\\|")/g, "\\$1"));
};
function lme() {
  var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var _e$headers = e.headers,
    t = _e$headers === void 0 ? {} : _e$headers,
    a = !1,
    i = ["-s"];
  return e.redirect === "follow" && i.push("-L"), Object.keys(t).forEach(function (u) {
    u.toLocaleLowerCase() !== "content-length" && (i.push("-H"), i.push(sme(u, t[u]))), u.toLocaleLowerCase() === "accept-encoding" && (a = !0);
  }), {
    params: i,
    isEncode: a
  };
}
function nU(e) {
  return typeof e != "string" ? JSON.stringify(e) : e.replace(/'/g, "'\\''");
}
function cme(e) {
  return e ? ["--data-binary", "".concat(nU(_typeof(e) == "object" ? JSON.stringify(e) : e))] : [];
}
function fme(e) {
  return e ? " --compressed" : "";
}
var pme = function pme(e) {
  var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var a = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "curl";
  var _t$body = t.body,
    i = _t$body === void 0 ? "" : _t$body,
    u = lme(t);
  return [a, "-k", "".concat(e)].concat(_toConsumableArray(ume(t)), _toConsumableArray(u.params), _toConsumableArray(cme(i)), [fme(u.isEncode)]).filter(function (l) {
    return !!l.length;
  });
};
function dme(_x4) {
  return _dme.apply(this, arguments);
}
function _dme() {
  _dme = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5(e) {
    var t,
      a,
      i,
      u,
      l,
      _args2 = arguments;
    return _regenerator().w(function (_context5) {
      while (1) switch (_context5.n) {
        case 0:
          t = _args2.length > 1 && _args2[1] !== undefined ? _args2[1] : {};
          a = _args2.length > 2 && _args2[2] !== undefined ? _args2[2] : "curl";
          i = pme(e, t, a);
          _context5.n = 1;
          return hn(i);
        case 1:
          u = _context5.v;
          l = 200;
          return _context5.a(2, {
            status: l,
            ok: l === 200,
            text: function text() {
              return Promise.resolve(u);
            },
            json: function json() {
              return Promise.resolve(JSON.parse(u));
            }
          });
      }
    }, _callee5);
  }));
  return _dme.apply(this, arguments);
}
function sa(_x5) {
  return _sa.apply(this, arguments);
}
function _sa() {
  _sa = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6(e) {
    var t,
      a,
      _args3 = arguments;
    return _regenerator().w(function (_context6) {
      while (1) switch (_context6.n) {
        case 0:
          t = _args3.length > 1 && _args3[1] !== undefined ? _args3[1] : {};
          a = rU();
          if (!a) {
            _context6.n = 1;
            break;
          }
          return _context6.a(2, dme(e, t, a));
        case 1:
          if (!Ye(rm())) {
            _context6.n = 2;
            break;
          }
          return _context6.a(2, tU(e, t));
        case 2:
          if (!(typeof globalThis.fetch == "function")) {
            _context6.n = 3;
            break;
          }
          return _context6.a(2, t ? globalThis.fetch(e, t) : globalThis.fetch(e));
        case 3:
          throw new Error("fetch command not found");
        case 4:
          return _context6.a(2);
      }
    }, _callee6);
  }));
  return _sa.apply(this, arguments);
}
var nm = ["en-US", "en-GB", "zh-CN", "zh-TW", "ja-JP", "ko-KR", "fr-FR", "de-DE", "es-ES", "it-IT", "ru-RU", "pt-BR", "ar-SA", "hi-IN", "tr-TR", "nl-NL", "pl-PL", "sv-SE", "fi-FI", "da-DK", "no-NO", "hu-HU", "cs-CZ", "el-GR", "he-IL", "th-TH", "vi-VN", "id-ID", "ms-MY", "fil-PH"],
  Sx;
function ri() {
  if (Sx) return Sx;
  switch (wr()) {
    case "windows":
      return Sx = na(["powershell", "-c", "(Get-Culture).Name"]).trim();
    case "linux":
    case "darwin":
    case "android":
      return "en-US";
  }
}
var Ex = {
    fatal: 0,
    error: 1,
    warn: 2,
    info: 3,
    v: 4,
    debug: 5,
    trace: 6
  },
  Zl;
function mme() {
  if (Zl) return Zl;
  try {
    var _aa;
    var t = ((_aa = aa("LOG_LEVEL")) !== null && _aa !== void 0 ? _aa : "").trim().toLowerCase();
    Zl = t === "verbose" ? "v" : t in Ex ? t : "info";
  } catch (_unused74) {
    Zl = "info";
  }
  return Zl;
}
function vme(e) {
  var _e$stack;
  if (typeof e == "string") return e;
  if (e instanceof Error) return (_e$stack = e.stack) !== null && _e$stack !== void 0 ? _e$stack : e.message;
  try {
    return JSON.stringify(e);
  } catch (_unused75) {
    return String(e);
  }
}
function ro(e, t) {
  var a = Ex[t !== null && t !== void 0 ? t : mme()];
  function i(u, l) {
    Ex[u] > a || print("[".concat(e, "] ").concat(l.map(vme).join(" ")));
  }
  return {
    namespace: e,
    fatal: function fatal() {
      for (var _len9 = arguments.length, u = new Array(_len9), _key9 = 0; _key9 < _len9; _key9++) {
        u[_key9] = arguments[_key9];
      }
      return i("fatal", u);
    },
    error: function error() {
      for (var _len0 = arguments.length, u = new Array(_len0), _key0 = 0; _key0 < _len0; _key0++) {
        u[_key0] = arguments[_key0];
      }
      return i("error", u);
    },
    warn: function warn() {
      for (var _len1 = arguments.length, u = new Array(_len1), _key1 = 0; _key1 < _len1; _key1++) {
        u[_key1] = arguments[_key1];
      }
      return i("warn", u);
    },
    info: function info() {
      for (var _len10 = arguments.length, u = new Array(_len10), _key10 = 0; _key10 < _len10; _key10++) {
        u[_key10] = arguments[_key10];
      }
      return i("info", u);
    },
    verbose: function verbose() {
      for (var _len11 = arguments.length, u = new Array(_len11), _key11 = 0; _key11 < _len11; _key11++) {
        u[_key11] = arguments[_key11];
      }
      return i("v", u);
    },
    debug: function debug() {
      for (var _len12 = arguments.length, u = new Array(_len12), _key12 = 0; _key12 < _len12; _key12++) {
        u[_key12] = arguments[_key12];
      }
      return i("debug", u);
    },
    trace: function trace() {
      for (var _len13 = arguments.length, u = new Array(_len13), _key13 = 0; _key13 < _len13; _key13++) {
        u[_key13] = arguments[_key13];
      }
      return i("trace", u);
    },
    child: function child(u) {
      return ro("".concat(e, ":").concat(u), t);
    }
  };
}
var _Re = ro("ffmpeg"),
  gme = "ffmpeg",
  yme = "ffmpeg.exe",
  bme = "ffmpeg",
  xme = "ffmpeg";
function Sme() {
  var e = wr();
  switch (e) {
    case "darwin":
      return At(xn(), gme);
    case "linux":
      return At(xn(), xme);
    case "windows":
      return "C:/mpv-lazy (UPDATED)/ffmpeg.exe";
    case "android":
      return At(xn(), bme);
    default:
      throw new Error("ffmpeg not found for os: ".concat(e));
  }
}
var no;
function Jl() {
  return no || (no = Sme(), Ye(no)) || (no = Bu("ffmpeg")), no;
}
var ni = ro("subtitle");
var Eme = "jellyfin_subtitles",
  MRe = "&".concat(Eme, "=");
function aU() {
  var e = [],
    t = oa("track-list", []).filter(function (a) {
      return a.type === "sub";
    });
  for (var a = 0; a < t.length; a++) {
    var i = t[a],
      u = i.title,
      l = i.lang,
      c = i.selected,
      d = i.external,
      m = i.id,
      h = i["external-filename"];
    e.push({
      title: u,
      lang: l,
      selected: c,
      id: m,
      external: d,
      externalFilename: h
    });
  }
  return e;
}
function ao() {
  return aU().find(function (e) {
    return e.selected;
  });
}
function Tx(_x6, _x7) {
  return _Tx.apply(this, arguments);
}
function _Tx() {
  _Tx = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee7(e, t) {
    var a, i, _t0;
    return _regenerator().w(function (_context7) {
      while (1) switch (_context7.p = _context7.n) {
        case 0:
          a = Jl();
          if (a) {
            _context7.n = 1;
            break;
          }
          ni.warn("convertSubtitle: ffmpeg not found"), yr("ffmpeg not found");
          return _context7.a(2);
        case 1:
          i = [a, "-y", "-hide_banner", "-loglevel", "error", "-i", e, t];
          ni.debug("convertSubtitle: ".concat(e, " \u2192 ").concat(t));
          _context7.p = 2;
          _context7.n = 3;
          return hn(i);
        case 3:
          _context7.n = 5;
          break;
        case 4:
          _context7.p = 4;
          _t0 = _context7.v;
          ni.error("convertSubtitle: ffmpeg failed", _t0);
          return _context7.a(2);
        case 5:
          return _context7.a(2, er(t));
      }
    }, _callee7, null, [[2, 4]]);
  }));
  return _Tx.apply(this, arguments);
}
function iU(_x8, _x9, _x0) {
  return _iU.apply(this, arguments);
}
function _iU() {
  _iU = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee8(e, t, a) {
    var i,
      u,
      l,
      c,
      _args5 = arguments,
      _t1;
    return _regenerator().w(function (_context8) {
      while (1) switch (_context8.p = _context8.n) {
        case 0:
          i = _args5.length > 3 && _args5[3] !== undefined ? _args5[3] : [];
          if (e) {
            _context8.n = 1;
            break;
          }
          ni.warn("saveSrt: no videoPath");
          return _context8.a(2);
        case 1:
          u = aU().find(function (d) {
            return d.id === t;
          });
          if (u) {
            _context8.n = 2;
            break;
          }
          ni.warn("saveSrt: track ".concat(t, " not found"));
          return _context8.a(2);
        case 2:
          l = Jl();
          if (l) {
            _context8.n = 3;
            break;
          }
          ni.warn("saveSrt: ffmpeg not found"), yr("ffmpeg not found");
          return _context8.a(2);
        case 3:
          c = [l, "-y", "-hide_banner", "-loglevel", "error", "-i", e, "-map", "0:s:".concat(u.id - 1)];
          i.length === 2 && c.push("-ss", i[0].toString(), "-to", i[1].toString()), c.push(a), ni.debug("saveSrt: ".concat(e, " track=").concat(t, " \u2192 ").concat(a));
          _context8.p = 4;
          _context8.n = 5;
          return hn(c);
        case 5:
          _context8.n = 7;
          break;
        case 6:
          _context8.p = 6;
          _t1 = _context8.v;
          ni.error("saveSrt: ffmpeg failed", _t1);
          return _context8.a(2);
        case 7:
          return _context8.a(2, er(a));
      }
    }, _callee8, null, [[4, 6]]);
  }));
  return _iU.apply(this, arguments);
}
function oU(e) {
  return String(Number(e)) === e;
}
function Tme(e) {
  return e.includes("-->");
}
function qme(e) {
  return e.trim().length === 0;
}
function _me(e) {
  var t = [],
    a = e.trim().replaceAll("\r\n", "\n").split("\n"),
    i = a.length,
    u = 0;
  for (; u < i;) {
    for (; u < i && !oU(a[u]);) u++;
    if (u >= i) continue;
    var l = u++,
      c = u++;
    for (; u + 2 < i && !(qme(a[u]) && oU(a[u + 1]) && Tme(a[u + 2]));) u++;
    u + 2 >= i && (u = i);
    var d = a.slice(c + 1, u).join("\n");
    t.push({
      id: a[l],
      time: a[c],
      text: d
    });
  }
  return t;
}
var ai = /*#__PURE__*/function () {
  function ai(t) {
    _classCallCheck(this, ai);
    _defineProperty(this, "srt", void 0);
    _defineProperty(this, "blocks", void 0);
    this.srt = t;
    this.blocks = _me(t);
  }
  return _createClass(ai, [{
    key: "toString",
    value: function toString() {
      return this.blocks.map(function (t) {
        return "".concat(t.id, "\n").concat(t.time, "\n").concat(t.text);
      }).join("\n\n");
    }
  }, {
    key: "toText",
    value: function toText() {
      return this.blocks.map(function (t) {
        return t.text;
      }).join("\n");
    }
  }]);
}();
var Ame = {
  loop: 0,
  volume: 100,
  start: 0
};
function uU(e) {
  var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var _Ame$t = _objectSpread(_objectSpread({}, Ame), t),
    a = _Ame$t.volume,
    i = _Ame$t.start,
    u = _Ame$t.loop,
    c = [Zd(), e, "--start=".concat(i), "--loop=".concat(u), "--volume=".concat(a), "--no-video", "--force-window=no", "--really-quiet", "--load-scripts=no", "--no-terminal", "--vo=null", "--load-auto-profiles=no", "--load-osd-console=no", "--load-stats-overlay=no", "--osc=no", "--vd-lavc-skiploopfilter=all", "--vd-lavc-skipidct=all", "--vd-lavc-software-fallback=1", "--vd-lavc-fast", "--vd-lavc-threads=2", "--hwdec=auto", "--edition=auto", "--sub=no", "--no-sub", "--sub-auto=no", "--audio-file-auto=no", "--keep-open=no", "--idle=no"];
  return Gd({
    name: "subprocess",
    args: c,
    playback_only: !1,
    capture_stdout: !0,
    capture_stderr: !0
  });
}
function Ome(e) {
  if (Ye(e)) return e;
  if (!(e.includes("/") || e.includes("\\"))) {
    var a = At(QP(), e);
    if (Ye(a)) return a;
  }
}
function sU(e, t, a) {
  var i = {};
  for (var l in t) i[l] = "";
  XP(i, e, a);
  var u = {};
  for (var _l4 in i) {
    var c = t[_l4].key || _l4,
      d = i[_l4].trim();
    if ((d.startsWith('"') && d.endsWith('"') || d.startsWith("'") && d.endsWith("'")) && (d = d.slice(1, -1)), d.length) switch (t[_l4].type) {
      case "number":
        {
          u[c] = +d;
          break;
        }
      case "string":
        {
          u[c] = d;
          break;
        }
      case "boolean":
        {
          u[c] = d === "yes";
          break;
        }
      case "color":
        {
          var m = new Xl(d.length === 7 ? d : "#FF".concat(d.slice(1)), !0).toBgra().toHex("#");
          u[c] = m;
          break;
        }
      case "json":
        {
          var _m2 = Ome(d);
          if (_m2) try {
            u[c] = JSON.parse(er(_m2));
          } catch (_unused76) {
            u[c] = void 0;
          }
          break;
        }
    } else t[_l4].default !== void 0 && (u[c] = t[_l4].default);
  }
  return u;
}
var mU = J(dU());
function om(e) {
  return (0, mU.default)(e).toString();
}
function Cme(e, t) {
  if (t <= 0) return !0;
  var a = to(e);
  return a ? Date.now() / 1e3 - a.mtime < t : !1;
}
function Uu(_x1, _x10) {
  return _Uu.apply(this, arguments);
}
function _Uu() {
  _Uu = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee9(e, t) {
    var a,
      i,
      u,
      l,
      d,
      c,
      _args6 = arguments;
    return _regenerator().w(function (_context9) {
      while (1) switch (_context9.n) {
        case 0:
          a = _args6.length > 2 && _args6[2] !== undefined ? _args6[2] : 0;
          i = Pu(), u = om(e), l = Rr("".concat(i, "/").concat(u));
          if (!(Ye(l) && Cme(l, a))) {
            _context9.n = 1;
            break;
          }
          d = er(l);
          if (!d) {
            _context9.n = 1;
            break;
          }
          return _context9.a(2, d);
        case 1:
          _context9.n = 2;
          return t();
        case 2:
          c = _context9.v;
          return _context9.a(2, (bn(l, c), c));
      }
    }, _callee9);
  }));
  return _Uu.apply(this, arguments);
}
var vU = {
  "&quot;": '"',
  "&#34;": '"',
  "&apos;": "'",
  "&#39;": "'",
  "&amp;": "&",
  "&#38;": "&",
  "&gt;": ">",
  "&#62;": ">",
  "&lt;": "<",
  "&#60;": "<"
};
function um(e) {
  for (var t in vU) e = e.replaceAll(t, vU[t]);
  return e;
}
var sm = .551915024494,
  la = /*#__PURE__*/function () {
    function la() {
      var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      _classCallCheck(this, la);
      _defineProperty(this, "_scale", void 0);
      _defineProperty(this, "_textBuffer", []);
      this._scale = t;
    }
    return _createClass(la, [{
      key: "newEvent",
      value: function newEvent() {
        return this._textBuffer.length > 0 && this._textBuffer.push("\n"), this;
      }
    }, {
      key: "font",
      value: function font(t) {
        return this.append("{\\fn".concat(t, "}"));
      }
    }, {
      key: "scale",
      value: function scale(t) {
        return this._scale = t, this;
      }
    }, {
      key: "clear",
      value: function clear() {
        return this._textBuffer = [], this;
      }
    }, {
      key: "drawStart",
      value: function drawStart() {
        return this._textBuffer.push("{\\p".concat(this._scale, "}")), this;
      }
    }, {
      key: "drawStop",
      value: function drawStop() {
        return this._textBuffer.push("{\\p0}"), this;
      }
    }, {
      key: "coord",
      value: function coord(t, a) {
        var i = Math.pow(2, this._scale - 1),
          u = Math.ceil(t * i),
          l = Math.ceil(a * i);
        return this._textBuffer.push(" ".concat(u, " ").concat(l)), this;
      }
    }, {
      key: "append",
      value: function append(t) {
        return this._textBuffer.push(t), this;
      }
    }, {
      key: "merge",
      value: function merge(t) {
        return this._textBuffer.push(t.toString()), this;
      }
    }, {
      key: "pos",
      value: function pos(t, a) {
        return this.append("{\\pos(".concat(t, ",").concat(a, ")}"));
      }
    }, {
      key: "an",
      value: function an(t) {
        return this.append("{\\an".concat(t, "}"));
      }
    }, {
      key: "moveTo",
      value: function moveTo(t, a) {
        return this.append(" m").coord(t, a);
      }
    }, {
      key: "lineTo",
      value: function lineTo(t, a) {
        return this.append(" l").coord(t, a);
      }
    }, {
      key: "frz",
      value: function frz(t) {
        return this.append("{\\frz".concat(t, "}"));
      }
    }, {
      key: "bezierCurve",
      value: function bezierCurve(t, a, i, u, l, c) {
        return this.append(" b").coord(t, a).coord(i, u).coord(l, c);
      }
    }, {
      key: "q",
      value: function q(t) {
        return this.append("{\\q".concat(t, "}"));
      }
    }, {
      key: "bold",
      value: function bold(t) {
        return this.append("{\\b".concat(+t, "}"));
      }
    }, {
      key: "borderSize",
      value: function borderSize(t) {
        return this.append("{\\bord".concat(t, "}"));
      }
    }, {
      key: "fontBorderSize",
      value: function fontBorderSize(t) {
        return this.append("{\\bord".concat(t, "}"));
      }
    }, {
      key: "borderColor",
      value: function borderColor(t) {
        return this.append("{\\3c&H".concat(t, "&}"));
      }
    }, {
      key: "blur",
      value: function blur(t) {
        return this.append("{\\blur".concat(t, "}"));
      }
    }, {
      key: "blurX",
      value: function blurX(t) {
        return this.append("{\\blurX".concat(t, "}"));
      }
    }, {
      key: "blurY",
      value: function blurY(t) {
        return this.append("{\\blurY".concat(t, "}"));
      }
    }, {
      key: "fontSize",
      value: function fontSize(t) {
        return this.append("{\\fs".concat(t, "}"));
      }
    }, {
      key: "fontBorderAlpha",
      value: function fontBorderAlpha(t) {
        if (t.length !== 2) throw new Error("alpha error: ".concat(t));
        return this.append("{\\3a&H".concat(t, "}"));
      }
    }, {
      key: "fontBorderColor",
      value: function fontBorderColor(t) {
        if (t.length === 6) return this.append("{\\3c".concat(t, "&}"));
        if (t.length === 8) return this.append("{\\3c&".concat(t.slice(0, 6), "&}")).fontBorderAlpha(t.slice(-2));
        if (t.length === 7) return this.append("{\\3c".concat(t.slice(1, 7), "&}"));
        if (t.length === 9) return this.append("{\\3c&".concat(t.slice(1, 7), "&}")).fontBorderAlpha(t.slice(7, 9));
        throw new Error("color error: ".concat(t));
      }
    }, {
      key: "newLine",
      value: function newLine() {
        return this.append("\r");
      }
    }, {
      key: "rectCcw",
      value: function rectCcw(t, a, i, u) {
        return this.moveTo(t, a).lineTo(t, u).lineTo(i, u).lineTo(i, a);
      }
    }, {
      key: "rectCw",
      value: function rectCw(t, a, i, u) {
        return this.moveTo(t, a).lineTo(i, a).lineTo(i, u).lineTo(t, u);
      }
    }, {
      key: "hexagonCw",
      value: function hexagonCw(t, a, i, u, l) {
        var c = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : l;
        return this.moveTo(t + l, a), t !== i && this.lineTo(i - c, a), this.lineTo(i, a + c), t !== i && this.lineTo(i - c, u), this.lineTo(t + l, u), this.lineTo(t, a + l), this;
      }
    }, {
      key: "hexagonCcw",
      value: function hexagonCcw(t, a, i, u, l) {
        var c = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : l;
        return this.moveTo(t + l, a), this.lineTo(t, a + l), this.lineTo(t + l, u), t !== i && this.lineTo(i - c, u), this.lineTo(i, a + c), t !== i && this.lineTo(i - c, a), this;
      }
    }, {
      key: "roundRectCw",
      value: function roundRectCw(t, a, i, u, l) {
        var c = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : l;
        var d = sm * l,
          m = sm * c;
        return this.moveTo(t + l, a), this.lineTo(i - c, a), c > 0 && this.bezierCurve(i - c + m, a, i, a + c - m, i, a + c), this.lineTo(i, u - c), c > 0 && this.bezierCurve(i, u - c + m, i - c + m, u, i - c, u), this.lineTo(t + l, u), l > 0 && this.bezierCurve(t + l - d, u, t, u - l + d, t, u - l), this.lineTo(t, a + l), l > 0 && this.bezierCurve(t, a + l - d, t + l - d, a, t + l, a), this;
      }
    }, {
      key: "roundRectCcw",
      value: function roundRectCcw(t, a, i, u, l) {
        var c = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : l;
        var d = sm * l,
          m = sm * c;
        return this.moveTo(t + l, a), l > 0 && this.bezierCurve(t + l - d, a, t, a + l - d, t, a + l), this.lineTo(t, u - l), l > 0 && this.bezierCurve(t, u - l + d, t + l - d, u, t + l, u), this.lineTo(i - c, u), c > 0 && this.bezierCurve(i - c + m, u, i, u - c + m, i, u - c), this.lineTo(i, a + c), c > 0 && this.bezierCurve(i, a + c - m, i - c + m, a, i - c, a), this;
      }
    }, {
      key: "drawTriangle",
      value: function drawTriangle(t, a, i, u, l, c) {
        return this.moveTo(t, a).lineTo(i, u).lineTo(l, c).lineTo(t, a);
      }
    }, {
      key: "drawRrhCw",
      value: function drawRrhCw(t, a, i, u, l, c, d) {
        return c ? this.hexagonCw(t, a, i, u, l, d) : this.roundRectCw(t, a, i, u, l, d);
      }
    }, {
      key: "drawRrHCcw",
      value: function drawRrHCcw(t, a, i, u, l, c, d) {
        return c ? this.hexagonCcw(t, a, i, u, l, d) : this.roundRectCcw(t, a, i, u, l, d);
      }
    }, {
      key: "end",
      value: function end() {
        return this.append(" s");
      }
    }, {
      key: "color",
      value: function color(t) {
        if (typeof t == "number" && (t = t.toString(16).padStart(6, "0")), t.length === 8) return this.append("{\\c&".concat(t.slice(0, 6), "&}")).alpha(t.slice(-2));
        if (t.length === 6) return this.append("{\\c&".concat(t, "&}"));
        if (t.length === 9) return this.append("{\\c&".concat(t.slice(1, 7), "&}")).alpha(t.slice(7, 9));
        if (t.length === 7) return this.append("{\\c&".concat(t.slice(1, 7), "&}"));
        throw new Error("AssDraw color error: ".concat(t));
      }
    }, {
      key: "colorText",
      value: function colorText(t, a) {
        return this.color(t).append(a);
      }
    }, {
      key: "alpha",
      value: function alpha(t) {
        return typeof t == "number" && (t = t.toString(16).padStart(2, "0")), this.append("{\\alpha&H".concat(t.padStart(2, "0"), "}"));
      }
    }, {
      key: "toString",
      value: function toString() {
        return this._textBuffer.join("");
      }
    }]);
  }();
var _loop2 = function _loop2() {
  var t = _e3.charAt(0).toLowerCase() + _e3.slice(1),
    a = new ia(Vd[_e3]);
  _typeof(a.color) > "u" && (a.color = Vd[_e3]);
  var i = a.toHex();
  la.prototype[t] = function () {
    return this.color(i);
  }, la.prototype["".concat(t, "Text")] = function (u) {
    return this.colorText(i, u);
  };
};
for (var _e3 in Vd) {
  _loop2();
}
var lm = new la();
function hU(_ref3) {
  var e = _ref3.x,
    t = _ref3.y,
    _ref3$borderSize = _ref3.borderSize,
    a = _ref3$borderSize === void 0 ? 0 : _ref3$borderSize,
    _ref3$color = _ref3.color,
    i = _ref3$color === void 0 ? "#00000000" : _ref3$color,
    u = _ref3.width,
    l = _ref3.height,
    _ref3$borderColor = _ref3.borderColor,
    c = _ref3$borderColor === void 0 ? "#00000000" : _ref3$borderColor,
    _ref3$borderRadius = _ref3.borderRadius,
    d = _ref3$borderRadius === void 0 ? 0 : _ref3$borderRadius;
  return lm.clear().color(i).drawStart().pos(e, t), lm.borderSize(a).borderColor(c), lm.roundRectCw(0, 0, u, l, d).end().toString();
}
function gU(_ref4) {
  var e = _ref4.x,
    t = _ref4.y,
    a = _ref4.width,
    i = _ref4.height,
    u = _ref4.borderSize,
    l = _ref4.borderColor;
  return lm.clear().color(l).drawStart().borderSize(0).pos(e, t).rectCw(0, 0, a, u).rectCw(0, 0, u, i).rectCw(0, i - u, a, i).rectCw(a - u, 0, a, i).toString();
}
var tr,
  zu = 0;
function io() {
  tr && (tr.data = "", tr.hidden = !0, tr.update(), tr.remove(), clearTimeout(zu), zu = 0);
}
function Mr(e) {
  var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  tr || (tr = new Sn()), zu && (clearTimeout(zu), zu = 0), tr.data = e, tr.computeBounds = !0, tr.hidden = !0;
  var a = ki(),
    i = tr.update(1 / a),
    u = Qd(),
    c = new vn(0, 0, (u === null || u === void 0 ? void 0 : u.width) || 0, (u === null || u === void 0 ? void 0 : u.height) || 0).placeCenter(i);
  tr.data = new la().pos(c.x * a, c.y * a).append(e).toString(), tr.hidden = !1, tr.update(), t > 0 && (zu = +setTimeout(function () {
    return io();
  }, t * 1e3)), print(e);
}
var Wl = J(_t());
function Rme(e) {
  return e.endsWith("Hover");
}
function Nme(e) {
  return e.slice(0, -5);
}
function wme(e) {
  var t = {};
  for (var a in e) {
    var i = Nme(a),
      u = e[a];
    Rme(a) && (t[i] = u);
  }
  return t;
}
var qx = Wl.default.forwardRef(function (_ref5, a) {
  var e = _ref5.text,
    t = _objectWithoutProperties(_ref5, _excluded);
  var i = wme(t),
    _ref6 = (0, Wl.useState)(!1),
    _ref7 = _slicedToArray(_ref6, 2),
    u = _ref7[0],
    l = _ref7[1];
  return Wl.default.createElement(mn, _objectSpread(_objectSpread(_objectSpread({}, t), u ? i : {}), {}, {
    ref: a,
    onMouseDown: function onMouseDown(c) {
      var _t$onMouseDown;
      (_t$onMouseDown = t.onMouseDown) === null || _t$onMouseDown === void 0 || _t$onMouseDown.call(t, c);
    },
    onMouseEnter: function onMouseEnter(c) {
      var _t$onMouseEnter;
      l(!0), t.enableMouseStyle && xx("Hand"), (_t$onMouseEnter = t.onMouseEnter) === null || _t$onMouseEnter === void 0 ? void 0 : _t$onMouseEnter.call(t, c);
    },
    onMouseLeave: function onMouseLeave(c) {
      var _t$onMouseLeave;
      l(!1), t.enableMouseStyle && xx("Arrow"), (_t$onMouseLeave = t.onMouseLeave) === null || _t$onMouseLeave === void 0 ? void 0 : _t$onMouseLeave.call(t, c);
    },
    text: e
  }));
});
var Mme = J(_t()),
  _x = J(_t());
var Tn = J(_t());
var $l = /*#__PURE__*/function () {
  function e(t, a, i, u) {
    _classCallCheck(this, e);
    _defineProperty(this, "x", void 0);
    _defineProperty(this, "y", void 0);
    _defineProperty(this, "width", void 0);
    _defineProperty(this, "height", void 0);
    this.x = t;
    this.y = a;
    this.width = i;
    this.height = u;
  }
  return _createClass(e, [{
    key: "x0",
    get: function get() {
      return this.x;
    }
  }, {
    key: "y0",
    get: function get() {
      return this.y;
    }
  }, {
    key: "x1",
    get: function get() {
      return this.x + this.width;
    }
  }, {
    key: "y1",
    get: function get() {
      return this.y + this.height;
    }
  }, {
    key: "toCoord",
    value: function toCoord() {
      return {
        x0: this.x0,
        y0: this.y0,
        x1: this.x1,
        y1: this.y1
      };
    }
  }, {
    key: "hasPoint",
    value: function hasPoint(t, a) {
      return t >= this.x0 && t <= this.x1 && a >= this.y0 && a <= this.y1;
    }
  }, {
    key: "placeCenter",
    value: function placeCenter(t) {
      var a = (this.width - t.width) / 2,
        i = (this.height - t.height) / 2,
        u = this.x + a,
        l = this.y + i;
      return new e(u, l, t.width, t.height);
    }
  }, {
    key: "scale",
    value: function scale(t) {
      return new e(this.x * t, this.y * t, this.width * t, this.height * t);
    }
  }], [{
    key: "fromCoord",
    value: function fromCoord(t) {
      return new e(t.x0, t.y0, t.x1 - t.x0, t.y1 - t.y0);
    }
  }]);
}();
var cm = /*#__PURE__*/function () {
    function cm(t, a, i, u, l) {
      _classCallCheck(this, cm);
      _defineProperty(this, "event", void 0);
      _defineProperty(this, "x", void 0);
      _defineProperty(this, "y", void 0);
      _defineProperty(this, "hover", void 0);
      _defineProperty(this, "target", void 0);
      _defineProperty(this, "bubbles", !0);
      _defineProperty(this, "defaultPrevented", !1);
      _defineProperty(this, "source", void 0);
      this.source = t, this.x = a, this.y = i, this.event = l, this.hover = u;
    }
    return _createClass(cm, [{
      key: "preventDefault",
      value: function preventDefault() {
        this.defaultPrevented = !0;
      }
    }, {
      key: "clientX",
      get: function get() {
        return this.x;
      }
    }, {
      key: "clientY",
      get: function get() {
        return this.y;
      }
    }, {
      key: "offsetX",
      get: function get() {
        var _this$target;
        return this.x - (((_this$target = this.target) === null || _this$target === void 0 ? void 0 : _this$target.layoutNode.x) || 0);
      }
    }, {
      key: "offsetY",
      get: function get() {
        var _this$target2;
        return this.y - (((_this$target2 = this.target) === null || _this$target2 === void 0 ? void 0 : _this$target2.layoutNode.y) || 0);
      }
    }, {
      key: "stopPropagation",
      value: function stopPropagation() {
        this.bubbles = !1;
      }
    }]);
  }(),
  fm = /*#__PURE__*/function (_$l) {
    function fm() {
      var _this4;
      var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var i = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var u = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      var l = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
      var c = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
      var d = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;
      var m = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : !1;
      var h = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : new $l(0, 0, 0, 0);
      var g = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : !1;
      var b = arguments.length > 9 && arguments[9] !== undefined ? arguments[9] : !1;
      var x = arguments.length > 10 && arguments[10] !== undefined ? arguments[10] : !1;
      var S = arguments.length > 11 && arguments[11] !== undefined ? arguments[11] : !1;
      var O = arguments.length > 12 && arguments[12] !== undefined ? arguments[12] : !1;
      var C = arguments.length > 13 && arguments[13] !== undefined ? arguments[13] : !1;
      _classCallCheck(this, fm);
      _this4 = _callSuper(this, fm, [a, i, u, l]);
      _defineProperty(_this4, "x", void 0);
      _defineProperty(_this4, "y", void 0);
      _defineProperty(_this4, "width", void 0);
      _defineProperty(_this4, "height", void 0);
      _defineProperty(_this4, "padding", void 0);
      _defineProperty(_this4, "border", void 0);
      _defineProperty(_this4, "hide", void 0);
      _defineProperty(_this4, "textRect", void 0);
      _defineProperty(_this4, "_hideCache", void 0);
      _defineProperty(_this4, "_renderCache", void 0);
      _defineProperty(_this4, "_mouseDown", void 0);
      _defineProperty(_this4, "_mouseUp", void 0);
      _defineProperty(_this4, "_mouseIn", void 0);
      _defineProperty(_this4, "_focus", void 0);
      _this4.x = a;
      _this4.y = i;
      _this4.width = u;
      _this4.height = l;
      _this4.padding = c;
      _this4.border = d;
      _this4.hide = m;
      _this4.textRect = h;
      _this4._hideCache = g;
      _this4._renderCache = b;
      _this4._mouseDown = x;
      _this4._mouseUp = S;
      _this4._mouseIn = O;
      _this4._focus = C;
      return _this4;
    }
    _inherits(fm, _$l);
    return _createClass(fm);
  }($l),
  Ax = ["onMouseDown", "onMouseUp", "onClick", "onMouseMove", "onMousePress", "onMouseEnter", "onMouseLeave", "onWheelDown", "onWheelUp", "onBlur", "onFocus"];
function dm(e, t) {
  t.parentNode && ec(t.parentNode, t), t.parentNode = e, e.childNodes.push(t);
}
function Ox(e, t, a) {
  t.parentNode && ec(t.parentNode, t), t.parentNode = e;
  var i = e.childNodes.indexOf(a);
  if (i >= 0) {
    e.childNodes.splice(i, 0, t);
    return;
  }
  e.childNodes.push(t);
}
function ec(e, t) {
  t.parentNode = void 0;
  var a = e.childNodes.indexOf(t);
  a >= 0 && e.childNodes.splice(a, 1);
}
function rr(e, t, a) {
  e.attributes[t] = a;
}
function oo(e, t, a) {
  e.layoutNode[t] = a;
}
function pm(e, t) {
  return e.attributes[t];
}
function ca(e, t) {
  for (; e && _typeof(pm(e, t)) > "u";) if (e.parentNode) e = e.parentNode;else return;
  return pm(e, t);
}
function Lu(e, t) {
  if (!e) throw new Error(t || "Assertion failed");
}
function Cx(e) {
  return Dme(e), Number.parseFloat(e.slice(0, -1)) / 100;
}
function Rx(e) {
  return e.charCodeAt(e.length - 1) === 37;
}
function Dme(e) {
  Lu(Rx(e), "not a valid percentage string: ".concat(e));
}
function xU(e) {
  return _typeof(e.attributes.top) < "u" || _typeof(e.attributes.left) < "u" || _typeof(e.attributes.bottom) < "u" || _typeof(e.attributes.right) < "u";
}
function ii(e, t, a) {
  var i = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
  switch (_typeof(t)) {
    case "number":
      return t;
    case "undefined":
      break;
    case "string":
      return Rx(t) ? Qr(e.parentNode, a) * Cx(t) : +t;
    default:
      throw new Error("len type error: ".concat(t));
  }
  return i;
}
function yU(e) {
  return e.attributes.position === "absolute" || xU(e) || _typeof(e.attributes.x) < "u" || _typeof(e.attributes.y) < "u";
}
var Bme = 1;
function Nx(e, t) {
  return t ? e.attributes.width : e.attributes.height;
}
function wx(e, t) {
  return t ? e.layoutNode.x : e.layoutNode.y;
}
function Qr(e, t) {
  return t ? e.layoutNode.width : e.layoutNode.height;
}
function kr(e, t, a) {
  a ? e.layoutNode.x = t : e.layoutNode.y = t;
}
function ju(e, t, a) {
  a ? e.layoutNode.width = t : e.layoutNode.height = t;
}
function bU(e, t) {
  switch (_typeof(t)) {
    case "number":
      return t;
    case "string":
      return e * Cx(t);
    case "undefined":
      return;
    default:
      throw new Error("offset type error: ".concat(t));
  }
}
var mm = /*#__PURE__*/function () {
  function mm() {
    _classCallCheck(this, mm);
    _defineProperty(this, "rootNode", void 0);
    this.rootNode = this.customCreateRootNode();
  }
  return _createClass(mm, [{
    key: "renderRoot",
    value: function renderRoot() {
      this.computeNodeSize(this.rootNode), this.computeNodeLayout(this.rootNode), this.customRenderRoot(this.rootNode);
    }
  }, {
    key: "resolveAxisTLBR",
    value: function resolveAxisTLBR(t, a, i, u, l) {
      var c = wx(a, l),
        d = Qr(a, l);
      Lu(!(i !== void 0 && u !== void 0), "absolute position: do not set both ".concat(l ? "left" : "top", " and ").concat(l ? "right" : "bottom")), kr(t, c, l);
      var m = bU(d, i);
      if (m !== void 0) {
        kr(t, c + m, l);
        return;
      }
      var h = bU(d, u);
      if (h !== void 0) {
        var g = Qr(t, l);
        kr(t, c + d - h - g, l);
      }
    }
  }, {
    key: "computedNodeTLBR",
    value: function computedNodeTLBR(t) {
      var a = t.attributes,
        i = t.parentNode ? t.parentNode : t;
      for (; i && i.attributes.position === "absolute";) i = i.parentNode;
      this.resolveAxisTLBR(t, i, a.left, a.right, !0), this.resolveAxisTLBR(t, i, a.top, a.bottom, !1);
    }
  }, {
    key: "computeZIndex",
    value: function computeZIndex(t) {
      if (typeof t.attributes.zIndex == "number") return t.attributes.zIndex;
      var a = t.parentNode,
        i = 1;
      for (; a;) {
        if (typeof a.attributes.zIndex == "number") return a.attributes.zIndex + i;
        i += Bme, a = a.parentNode;
      }
      return i;
    }
  }, {
    key: "computeNodeSizeAxis",
    value: function computeNodeSizeAxis(t, a, i, u) {
      switch (_typeof(a)) {
        case "number":
          {
            ju(t, a + u, i);
            return;
          }
        case "string":
          {
            Lu(a.endsWith("%"), "length string must end with %");
            var l = Nx(t.parentNode, i);
            Lu(!(l === "auto" || l === void 0), "The parent of a node of relative size cannot be auto or undefined"), ju(t, ii(t, a, i) + u, i);
            return;
          }
      }
      throw new Error("computeNodeSize error, not support length: ".concat(a));
    }
  }, {
    key: "applyAlignContentStretch",
    value: function applyAlignContentStretch(t, a, i) {
      if (t.attributes.alignContent === "stretch") {
        var _iterator6 = _createForOfIteratorHelper(t.childNodes),
          _step6;
        try {
          for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
            var u = _step6.value;
            a ? _typeof(u.attributes.height) > "u" && (u.layoutNode.height = t.layoutNode.height - i) : _typeof(u.attributes.width) > "u" && (u.layoutNode.width = t.layoutNode.width - i);
          }
        } catch (err) {
          _iterator6.e(err);
        } finally {
          _iterator6.f();
        }
      }
    }
  }, {
    key: "computeNodeSize",
    value: function computeNodeSize(t) {
      var a = t.attributes,
        i = t.layoutNode,
        u = a.flexDirection !== "column",
        l = this.computeZIndex(t);
      this.customComputeZIndex(t, l);
      var c = ii(t, a.padding, u);
      i.padding = c;
      var d = ii(t, a.borderSize, u);
      i.border = d;
      var m = c * 2 + d * 2,
        h = Nx(t, u),
        g = Nx(t, !u),
        b = h === void 0 || h === "auto",
        x = g === void 0 || g === "auto";
      if (typeof a.text == "string") {
        var _this$customMeasureNo = this.customMeasureNode(t),
          _ = _this$customMeasureNo.width,
          T = _this$customMeasureNo.height,
          q = u ? _ : T,
          M = u ? T : _;
        ju(t, b ? m + q : m + ii(t, h, u), u), ju(t, x ? m + M : m + ii(t, g, !u), !u);
        var _iterator7 = _createForOfIteratorHelper(t.childNodes),
          _step7;
        try {
          for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
            var B = _step7.value;
            this.computeNodeSize(B);
          }
        } catch (err) {
          _iterator7.e(err);
        } finally {
          _iterator7.f();
        }
        return;
      }
      b || this.computeNodeSizeAxis(t, h, u, m), x || this.computeNodeSizeAxis(t, g, !u, m);
      var S = 0,
        O = 0,
        C = 0;
      var _iterator8 = _createForOfIteratorHelper(t.childNodes),
        _step8;
      try {
        for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
          var _10 = _step8.value;
          if (this.computeNodeSize(_10), _10.attributes.position === "absolute") continue;
          var _T2 = Qr(_10, u),
            _q2 = Qr(_10, !u);
          S = Math.max(S, _T2), O = Math.max(O, _q2), C += _T2;
        }
      } catch (err) {
        _iterator8.e(err);
      } finally {
        _iterator8.f();
      }
      b && ju(t, C + m, u), x && ju(t, O + m, !u), this.applyAlignContentStretch(t, u, m);
    }
  }, {
    key: "computedNodeAlign",
    value: function computedNodeAlign(t) {
      var a = t.attributes,
        i = a.flexDirection !== "column",
        _a$justifyContent = a.justifyContent,
        u = _a$justifyContent === void 0 ? "start" : _a$justifyContent,
        _a$alignItems = a.alignItems,
        l = _a$alignItems === void 0 ? "start" : _a$alignItems,
        c = t.layoutNode.padding + t.layoutNode.border,
        d = wx(t, i) + c,
        m = wx(t, !i) + c,
        h = Qr(t, i) - c * 2,
        g = Qr(t, !i) - c * 2,
        b = d + h,
        x = 0,
        S = 0,
        O = 0;
      var _iterator9 = _createForOfIteratorHelper(t.childNodes),
        _step9;
      try {
        for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
          var _te2 = _step9.value;
          yU(_te2) || (x += Qr(_te2, i), S = Math.max(S, Qr(_te2, !i)), O++);
        }
      } catch (err) {
        _iterator9.e(err);
      } finally {
        _iterator9.f();
      }
      if (O === 0) return;
      var C = u === "end",
        _;
      switch (u) {
        case "start":
          _ = d;
          break;
        case "end":
          _ = b;
          break;
        case "center":
          _ = d + (h - x) / 2;
          break;
        case "space-between":
          {
            _ = d;
            break;
          }
        default:
          throw new Error("not support justifyContent: ".concat(u));
      }
      var T = u === "space-between" && O > 1 ? (h - x) / (O - 1) : 0,
        q = function q(te, ie, k) {
          switch (l) {
            case "start":
            case "space-between":
              return ie;
            case "end":
              return ie + k - te;
            case "center":
              return ie + (k - te) / 2;
            default:
              throw new Error("not support alignItems: ".concat(l));
          }
        },
        M = m,
        B = 0,
        G = t.childNodes,
        V = G.length;
      for (var te = 0; te < V; te++) {
        var ie = C ? V - 1 - te : te,
          k = G[ie];
        if (yU(k)) continue;
        var Q = Qr(k, i),
          X = Qr(k, !i);
        if (B = Math.max(B, X), C) {
          var ce = _ - Q;
          ce < d ? (M += B, _ = b, kr(k, _ - Q, i), kr(k, q(X, M, B), !i), _ -= Q) : (kr(k, ce, i), kr(k, q(X, M, g), !i), _ = ce);
        } else _ + Q > b && u !== "space-between" ? (M += B, _ = d, kr(k, _, i), kr(k, q(X, M, B), !i), _ += Q) : (kr(k, _, i), kr(k, q(X, M, g), !i), _ += Q + T);
      }
    }
  }, {
    key: "computeNodeLayout",
    value: function computeNodeLayout(t) {
      var a = t.layoutNode,
        i = t.attributes;
      switch (xU(t) && this.computedNodeTLBR(t), typeof i.x == "number" && (a.x = i.x), typeof i.y == "number" && (a.y = i.y), i.position) {
        case "relative":
        case void 0:
          {
            t.childNodes.length && i.display === "flex" && this.computedNodeAlign(t);
            break;
          }
        case "absolute":
          {
            t.childNodes.length && i.display === "flex" && this.computedNodeAlign(t);
            break;
          }
        default:
          throw new Error("error position: ".concat(i.position));
      }
      var _iterator0 = _createForOfIteratorHelper(t.childNodes),
        _step0;
      try {
        for (_iterator0.s(); !(_step0 = _iterator0.n()).done;) {
          var u = _step0.value;
          this.computeNodeLayout(u);
        }
      } catch (err) {
        _iterator0.e(err);
      } finally {
        _iterator0.f();
      }
    }
  }, {
    key: "dispatchMouseEventInner",
    value: function dispatchMouseEventInner(t, a, i) {
      if (!(t.attributes.hide || t.attributes.pointerEvents === "none")) {
        var _iterator1 = _createForOfIteratorHelper(t.childNodes),
          _step1;
        try {
          for (_iterator1.s(); !(_step1 = _iterator1.n()).done;) {
            var u = _step1.value;
            this.dispatchMouseEventInner(u, a, i);
          }
        } catch (err) {
          _iterator1.e(err);
        } finally {
          _iterator1.f();
        }
        this.dispatchMouseEventForNode(t, a, i);
      }
    }
  }, {
    key: "dispatchMouseEvent",
    value: function dispatchMouseEvent(t, a) {
      var i = {
        onMouseDown: [],
        onMouseUp: [],
        onClick: [],
        onMouseMove: [],
        onMousePress: [],
        onMouseEnter: [],
        onMouseLeave: [],
        onWheelDown: [],
        onWheelUp: [],
        onBlur: [],
        onFocus: []
      };
      this.dispatchMouseEventInner(t, a, i);
      for (var _i0 = 0, _Ax = Ax; _i0 < _Ax.length; _i0++) {
        var u = _Ax[_i0];
        var l = i[u];
        if (!l.length) continue;
        var c = l.sort(function (d, m) {
          return (m.attributes.zIndex || 0) - (d.attributes.zIndex || 0);
        });
        var _iterator10 = _createForOfIteratorHelper(c),
          _step10;
        try {
          for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
            var _d$attributes$u, _d$attributes;
            var d = _step10.value;
            a.bubbles && ((u === "onMouseLeave" || u === "onMouseEnter") && (a.target = d), (_d$attributes$u = (_d$attributes = d.attributes)[u]) === null || _d$attributes$u === void 0 ? void 0 : _d$attributes$u.call(_d$attributes, a));
          }
        } catch (err) {
          _iterator10.e(err);
        } finally {
          _iterator10.f();
        }
      }
    }
  }, {
    key: "dispatchMouseEventForNode",
    value: function dispatchMouseEventForNode(t, a, i) {
      if (!a.bubbles || t.attributes.pointerEvents === "none" || t.attributes.hide) return;
      var u = t.layoutNode;
      if (t.layoutNode.hasPoint(a.x, a.y)) {
        if (_typeof(a.target) > "u" && (a.target = t), a.hover) {
          if (this.customIsWheelDown(a)) {
            i.onWheelDown.push(t);
            return;
          }
          if (this.customIsWheelUp(a)) {
            i.onWheelUp.push(t);
            return;
          }
          this.customIsMousePress(a) ? u._mouseDown ? i.onMousePress.push(t) : u._mouseIn ? i.onMouseMove.push(t) : (i.onMouseEnter.push(t), u._mouseIn = !0) : !u._mouseDown && (this.customIsMouseDown(a) || this.customIsMouseClick(a)) ? u._mouseDown || (i.onMouseDown.push(t), i.onClick.push(t), u._mouseDown = !0, u._mouseUp = !1, u._focus || (u._focus = !0, i.onFocus.push(t)), this.customIsMouseClick(a) && (u._mouseDown = !1, i.onMouseUp.push(t))) : this.customIsMouseUp(a) && (u._mouseUp || (i.onMouseUp.push(t), u._mouseDown = !1, u._mouseUp = !0, u._focus || (i.onFocus.push(t), u._focus = !0)));
        } else u._mouseIn && (i.onMouseLeave.push(t), u._mouseIn = !1);
      } else u._mouseIn && (i.onMouseLeave.push(t), u._mouseIn = !1), u._focus && (this.customIsMouseDown(a) || this.customIsMouseUp(a)) && (i.onBlur.push(t), u._focus = !1);
    }
  }]);
}();
function Mx(e, t) {
  e.attributes = t;
}
var Ime = ["[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)", "(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-nq-uy=><~]))"].join("|"),
  Pme = new RegExp(Ime, "g");
var SU = "@mpv-easy/root";
var tc = function tc(e) {
  var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [new Sn({
    cache: !0
  }), new Sn({
    cache: !0
  }), new Sn({
    cache: !0
  })];
  return {
    attributes: {},
    childNodes: [],
    parentNode: void 0,
    layoutNode: new fm(),
    props: {
      nodeName: e,
      osdOverlays: t
    },
    dirty: !0
  };
};
var Ume = new la();
function zme(e) {
  var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var a = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "break-all";
  if (!t || e.length <= t) return e;
  switch (a) {
    case "break-word":
      {
        var i = [],
          u = [];
        var _iterator11 = _createForOfIteratorHelper(e.split(" ")),
          _step11;
        try {
          for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
            var l = _step11.value;
            l === "\n" ? (i.push(u.join(" ")), u = []) : (u.length === 0 || u.join(" ").length + l.length <= t ? u.push(l) : (i.push(u.join(" ")), u = [l]), u.join(" ").length >= t && (i.push(u.join(" ")), u = []));
          }
        } catch (err) {
          _iterator11.e(err);
        } finally {
          _iterator11.f();
        }
        return u.length && (i.push(u.join(" ")), u = []), i.join("\n");
      }
    default:
      {
        var _i1 = [],
          _u4 = [];
        var _iterator12 = _createForOfIteratorHelper(e.split("")),
          _step12;
        try {
          for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {
            var _l5 = _step12.value;
            _l5 === "\n" ? (_i1.push(_u4.join("")), _u4 = []) : (_u4.push(_l5), _u4.length === t && (_i1.push(_u4.join("")), _u4 = []));
          }
        } catch (err) {
          _iterator12.e(err);
        } finally {
          _iterator12.f();
        }
        return _u4.length && (_i1.push(_u4.join("")), _u4 = []), _i1.join("\n");
      }
  }
}
function Dx(e, t, a) {
  var _ca, _ca2, _ca3, _ca4, _ca5;
  var i = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : ki();
  var u = i * t,
    l = i * a,
    _e$attributes = e.attributes,
    _e$attributes$text = _e$attributes.text,
    c = _e$attributes$text === void 0 ? "" : _e$attributes$text,
    d = _e$attributes.draw;
  if (typeof d == "string") return d;
  if (typeof d == "function") return d(i);
  var m = zme(c.replaceAll("\r\n", "\n"), e.attributes.maxWidth, e.attributes.wordBreak).replaceAll("\n", "\\N").replaceAll("	", "    "),
    h = (_ca = ca(e, "font")) !== null && _ca !== void 0 ? _ca : "",
    g = (_ca2 = ca(e, "color")) !== null && _ca2 !== void 0 ? _ca2 : "#FFFFFFFF",
    b = (_ca3 = ca(e, "fontSize")) !== null && _ca3 !== void 0 ? _ca3 : "5%",
    x = ca(e, "fontWeight") === "bold",
    S = (_ca4 = ca(e, "fontBorderSize")) !== null && _ca4 !== void 0 ? _ca4 : 0,
    O = (_ca5 = ca(e, "fontBorderColor")) !== null && _ca5 !== void 0 ? _ca5 : "#000000",
    C = "FF";
  return (g.length === 7 || g.length === 6) && (C = "00"), (g.length === 8 || g.length === 9) && (C = g.slice(-2), g = g.slice(0, -2)), C === "FF" ? "" : Ume.clear().pos(u, l).font(h).fontSize(ii(e, b, !1, 32) * i).fontBorderColor(O).fontBorderSize(ii(e, S, !1, 0) * i).color(g).alpha(C).bold(x).append(m).toString();
}
var vm;
function EU(e) {
  var t = ki(),
    a = Dx(e, 0, 0, t);
  vm || (vm = new Sn({
    computeBounds: !0,
    hidden: !0
  })), vm.data = a;
  var _vm$update = vm.update(1 / t),
    i = _vm$update.width,
    u = _vm$update.height,
    l = e.layoutNode;
  return l.textRect.width = i, l.textRect.height = u, {
    width: i,
    height: u
  };
}
var TU = "@mpv-easy/root",
  Lme = "@mpv-easy/box",
  hm,
  Hu = function Hu() {
    return hm || (hm = tc(TU), hm);
  },
  qU = 30;
function jme(e) {
  var _ca6;
  var t = (_ca6 = ca(e, "hide")) !== null && _ca6 !== void 0 ? _ca6 : !1,
    _e$props$osdOverlays = _slicedToArray(e.props.osdOverlays, 3),
    a = _e$props$osdOverlays[0],
    i = _e$props$osdOverlays[1],
    u = _e$props$osdOverlays[2],
    l = e.layoutNode,
    c = e.attributes;
  if (t) {
    var _e$props$imageOverlay;
    if (l._hideCache) return;
    l._hideCache = !0;
    var _iterator13 = _createForOfIteratorHelper(e.props.osdOverlays),
      _step13;
    try {
      for (_iterator13.s(); !(_step13 = _iterator13.n()).done;) {
        var d = _step13.value;
        d.hidden = !0, d.computeBounds = !1, d.update();
      }
    } catch (err) {
      _iterator13.e(err);
    } finally {
      _iterator13.f();
    }
    typeof c.backgroundImage == "string" && e.props.imageOverlay && ((_e$props$imageOverlay = e.props.imageOverlay) === null || _e$props$imageOverlay === void 0 ? void 0 : _e$props$imageOverlay.remove());
  } else if (e.props.nodeName === "@mpv-easy/box") {
    l._hideCache = !1;
    var _d3 = ki(),
      m = c.backgroundColor,
      h = c.borderSize,
      _c$borderColor = c.borderColor,
      g = _c$borderColor === void 0 ? "#FFFFFFFF" : _c$borderColor,
      _c$padding = c.padding,
      b = _c$padding === void 0 ? 0 : _c$padding,
      _c$justifyContent = c.justifyContent,
      x = _c$justifyContent === void 0 ? "start" : _c$justifyContent,
      _c$alignItems = c.alignItems,
      S = _c$alignItems === void 0 ? "start" : _c$alignItems,
      _c$borderRadius = c.borderRadius,
      O = _c$borderRadius === void 0 ? 0 : _c$borderRadius,
      _c$flexDirection = c.flexDirection,
      C = _c$flexDirection === void 0 ? "column" : _c$flexDirection,
      _ = c.backgroundImage,
      _c$backgroundImageFor = c.backgroundImageFormat,
      T = _c$backgroundImageFor === void 0 ? "bgra" : _c$backgroundImageFor,
      q = typeof b == "string" ? Wd(b) * l.width : b,
      M = typeof O == "string" ? Wd(O) * l.width : O;
    g.length === 7 && (g += "00"), typeof h == "string" && (h = l.width * Wd(h));
    var B = l.x,
      G = l.y,
      V = l.width,
      te = l.height;
    if (_typeof(h) < "u" && !(g.length > 7 && g.slice(-2) === "FF") && (u.data = gU({
      x: B * _d3,
      y: G * _d3,
      width: V * _d3,
      height: te * _d3,
      borderColor: g,
      borderSize: h * _d3
    }), u.hidden = !1, u.computeBounds = !1, u.hidden = !1, u.update()), h = h || 0, _typeof(c.text) < "u" || _typeof(c.draw) < "u") {
      var Q = 0 + q + l.x + h,
        X = 0 + q + l.y + h,
        ce = l.textRect;
      switch (C) {
        case "column":
          {
            switch (x) {
              case "start":
                break;
              case "center":
                {
                  Q += (l.width - ce.width - 2 * q - 2 * h) / 2;
                  break;
                }
              case "end":
                {
                  Q += l.width - ce.width - 2 * q - 2 * h;
                  break;
                }
            }
            switch (S) {
              case "start":
                break;
              case "center":
                {
                  X += (l.height - ce.height - 2 * q - 2 * h) / 2;
                  break;
                }
              case "end":
                {
                  X += l.height - ce.height - 2 * q - 2 * h;
                  break;
                }
            }
            break;
          }
        case "row":
          {
            switch (x) {
              case "start":
                break;
              case "center":
                {
                  X += (l.height - ce.height - 2 * q - 2 * h) / 2;
                  break;
                }
              case "end":
                {
                  X += l.height - ce.height - 2 * q - 2 * h;
                  break;
                }
            }
            switch (S) {
              case "start":
                break;
              case "center":
                {
                  Q += (l.width - ce.width - 2 * q - 2 * h) / 2;
                  break;
                }
              case "end":
                {
                  Q += l.width - ce.width - 2 * q - 2 * h;
                  break;
                }
            }
          }
        default:
          throw new Error("text layout not support: justifyContent ".concat(x, " alignItems ").concat(S));
      }
      var me = Dx(e, Q, X, _d3);
      a.data = me, a.hidden = !1, a.computeBounds = !0;
    }
    var k = a.update(1 / _d3);
    if (_typeof(m) < "u" && !(m.length > 7 && m.slice(-2) === "FF")) {
      m.length === 7 && (m += "00");
      var _Q2 = new vn(B + h + q, G + h + q, V - 2 * h - 2 * q, te - 2 * h - 2 * q),
        _X2 = hU(_objectSpread(_objectSpread({}, _Q2.scale(_d3)), {}, {
          color: m,
          borderRadius: M * _d3
        }));
      i.data = _X2, i.hidden = !1, i.update();
    } else i.data = "", i.hidden = !0, i.update();
    if (typeof _ == "string" && !t) {
      var _Q3 = c.height || c.imageHeight,
        _X3 = c.width || c.imageWidth,
        _ce2 = c.imageWidth || _X3,
        _me2 = c.imageHeight || _Q3,
        Ee = c.id;
      if (typeof Ee != "number" || Ee < 0 || Ee > 63) throw new Error("backgroundImage'id must be a number in [0, 63]");
      if (typeof _X3 != "number" || typeof _Q3 != "number" || typeof _ce2 != "number" || typeof _me2 != "number") throw new Error("backgroundImage's width/imageWidth and height/imageHeight must be number");
      e.props.imageOverlay || (e.props.imageOverlay = new tm(Ee));
      var ge = e.props.imageOverlay;
      _ = _.split("?")[0];
      var Je = to(_);
      if (!Je) print("backgroundImage file not found: ".concat(_));else {
        var ht = Je.size;
        _ce2 * _me2 * 4 !== ht ? print("backgroundImage size error: ".concat(_ce2, "-").concat(_me2, "-").concat(ht)) : (ge.x = B | 0, ge.y = G | 0, ge.file = _, ge.fmt = T, ge.w = _ce2, ge.h = _me2, ge.offset = 0, ge.stride = (_ce2 | 0) << 2, ge.dw = _X3, ge.dh = _Q3, ge.update());
      }
    }
  }
}
function _U(e) {
  jme(e);
  var _iterator14 = _createForOfIteratorHelper(e.childNodes),
    _step14;
  try {
    for (_iterator14.s(); !(_step14 = _iterator14.n()).done;) {
      var t = _step14.value;
      _U(t);
    }
  } catch (err) {
    _iterator14.e(err);
  } finally {
    _iterator14.f();
  }
}
var Ix = /*#__PURE__*/function (_mm) {
    function Ix() {
      var _this5;
      var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      _classCallCheck(this, Ix);
      _this5 = _callSuper(this, Ix), _this5.rootNode = Hu();
      return _this5;
    }
    _inherits(Ix, _mm);
    return _createClass(Ix, [{
      key: "customCreateMouseEvent",
      value: function customCreateMouseEvent(t, a, i, u, l) {
        return new cm(t, a, i, u, l);
      }
    }, {
      key: "customIsWheelDown",
      value: function customIsWheelDown(t) {
        return t.event.key_name === "WHEEL_DOWN";
      }
    }, {
      key: "customIsWheelUp",
      value: function customIsWheelUp(t) {
        return t.event.key_name === "WHEEL_UP";
      }
    }, {
      key: "customIsMousePress",
      value: function customIsMousePress(t) {
        return t.event.event === "press";
      }
    }, {
      key: "customIsMouseDown",
      value: function customIsMouseDown(t) {
        return t.event.event === "down";
      }
    }, {
      key: "customIsMouseUp",
      value: function customIsMouseUp(t) {
        return t.event.event === "up";
      }
    }, {
      key: "customIsMouseClick",
      value: function customIsMouseClick(t) {
        return t.event.arg === "click";
      }
    }, {
      key: "customCreateNode",
      value: function customCreateNode() {
        return tc(Lme);
      }
    }, {
      key: "customIsRootNode",
      value: function customIsRootNode(t) {
        return t.props.nodeName === TU;
      }
    }, {
      key: "customCreateRootNode",
      value: function customCreateRootNode() {
        return Hu();
      }
    }, {
      key: "customRenderRoot",
      value: function customRenderRoot(t) {
        _U(t);
      }
    }, {
      key: "customComputeZIndex",
      value: function customComputeZIndex(t, a) {
        var _t$props$osdOverlays = _slicedToArray(t.props.osdOverlays, 3),
          i = _t$props$osdOverlays[0],
          u = _t$props$osdOverlays[1],
          l = _t$props$osdOverlays[2];
        i.z = a + 3, u.z = a + 2, l.z = a + 1;
      }
    }, {
      key: "customMeasureNode",
      value: function customMeasureNode(t) {
        return EU(t);
      }
    }]);
  }(mm),
  Bx;
function rc() {
  var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return Bx || (Bx = new Ix(e));
}
var AU = function AU(e, t, a) {
    var i = rc().customCreateMouseEvent(e, t.x, t.y, t.hover, a);
    rc().dispatchMouseEvent(e, i);
  },
  OU = function OU() {
    rc().renderRoot();
  };
function Hme(e, t, a, i) {
  var u = a / 2,
    l = i / 2;
  return e < u ? t < l ? "left-top" : "left-bottom" : t < l ? "right-top" : "right-bottom";
}
function Fme(e, t, a, i) {
  var _ref8 = Qd() || {},
    _ref8$width = _ref8.width,
    u = _ref8$width === void 0 ? 0 : _ref8$width,
    _ref8$height = _ref8.height,
    l = _ref8$height === void 0 ? 0 : _ref8$height,
    c = {
      x: 0,
      y: 0
    };
  if (!e) return c;
  var _e$layoutNode = e.layoutNode,
    d = _e$layoutNode.height,
    m = _e$layoutNode.width;
  if (!u && !l) switch (i) {
    case "left-bottom":
      {
        c.x = t, c.y = a - d;
        break;
      }
    case "left-top":
      {
        c.x = t, c.y = a;
        break;
      }
    case "right-bottom":
      {
        c.x = t - m, c.y = a - d;
        break;
      }
    case "right-top":
      {
        c.x = t - m, c.y = a;
        break;
      }
  } else switch (i) {
    case "left-bottom":
      {
        t >= m / 2 ? c.x = t - m / 2 : c.x = 0, c.y = a - d;
        break;
      }
    case "left-top":
      {
        t >= m / 2 ? c.x = t - m / 2 : c.x = 0, c.y = a;
        break;
      }
    case "right-bottom":
      {
        u - t >= m / 2 ? c.x = t - m / 2 : c.x = u - m, c.y = a - d;
        break;
      }
    case "right-top":
      {
        u - t >= m / 2 ? c.x = t - m / 2 : c.x = u - m, c.y = a;
        break;
      }
  }
  return c;
}
function CU(e, t, a) {
  if (!pm(e, "hide")) {
    var _e$attributes$title;
    var _iterator15 = _createForOfIteratorHelper(e.childNodes),
      _step15;
    try {
      for (_iterator15.s(); !(_step15 = _iterator15.n()).done;) {
        var i = _step15.value;
        var u = CU(i, t, a);
        if (u) return u;
      }
    } catch (err) {
      _iterator15.e(err);
    } finally {
      _iterator15.f();
    }
    if (e.layoutNode.hasPoint(t, a) && (_e$attributes$title = e.attributes.title) !== null && _e$attributes$title !== void 0 && _e$attributes$title.length) return e;
  }
}
var RU = function RU(_ref9) {
  var _h3;
  var e = _ref9.mousePos,
    t = _objectWithoutProperties(_ref9, _excluded2);
  var _ref0 = (0, Tn.useState)(!1),
    _ref1 = _slicedToArray(_ref0, 2),
    a = _ref1[0],
    i = _ref1[1],
    _ref10 = (0, Tn.useState)(""),
    _ref11 = _slicedToArray(_ref10, 2),
    u = _ref11[0],
    l = _ref11[1],
    _ref12 = (0, Tn.useState)({
      x: 0,
      y: 0
    }),
    _ref13 = _slicedToArray(_ref12, 2),
    c = _ref13[0],
    d = _ref13[1],
    m = (0, Tn.useRef)(null),
    h;
  if (!e) h = void 0;else {
    var g = e.x,
      b = e.y,
      x = e.hover;
    x ? h = CU(Hu(), g, b) : h = void 0;
  }
  return (0, Tn.useEffect)(function () {
    var _h2;
    if (!h) {
      i(!1);
      return;
    }
    var g = (_h2 = h) === null || _h2 === void 0 ? void 0 : _h2.attributes.title;
    if (g !== null && g !== void 0 && g.length && e) {
      var _b3 = Hme(e.x, e.y, Hu().layoutNode.width, Hu().layoutNode.height),
        _x11 = Fme(m.current, e.x, e.y, _b3);
      d(_x11), i(!0), l(g);
    } else i(!1);
  }, [e === null || e === void 0 ? void 0 : e.x, e === null || e === void 0 ? void 0 : e.y, e === null || e === void 0 ? void 0 : e.hover, (_h3 = h) === null || _h3 === void 0 ? void 0 : _h3.attributes.text]), Tn.default.createElement(mn, _objectSpread(_objectSpread({
    id: "tooltip"
  }, t), {}, {
    hide: !m.current || t.hide || !a,
    ref: m,
    x: c.x,
    y: c.y,
    text: u,
    position: "absolute"
  }));
};
var Px = J(_t());
var Gme = J(_t());
var Kme = J(_t()),
  Nwe = [].concat(l6, c6, f6, s6);
var gm = J(_t()),
  Vme = function Vme(e, t, a) {
    switch (t) {
      case "bool":
        {
          ti(e, a);
          break;
        }
      case "string":
        {
          KP(e, a);
          break;
        }
      case "number":
        {
          gx(e, a);
          break;
        }
      case "native":
        {
          ua(e, a);
          break;
        }
      default:
        throw new Error("prop type error: ".concat(e, " ").concat(t));
    }
  },
  Yme = function Yme(e, t) {
    switch (t) {
      case "bool":
        return Xd(e);
      case "string":
        return Vl(e);
      case "number":
        return ei(e);
      case "native":
        return oa(e);
      default:
        throw new Error("prop type error: ".concat(e, " ").concat(t));
    }
  };
function NU(e, t, a) {
  var _ref14 = (0, gm.useState)(_typeof(a) > "u" ? Yme(e, t) : a),
    _ref15 = _slicedToArray(_ref14, 2),
    i = _ref15[0],
    u = _ref15[1];
  return (0, gm.useEffect)(function () {
    var l = function l(c, d) {
      Gl(i, d) || u(d);
    };
    return gn(e, t, l), function () {
      try {
        mp.unobserve_property(l);
      } catch (_unused77) {}
    };
  }, [e, t]), [i, function (l) {
    var c = typeof l == "function" ? l(i) : l;
    i !== c && (u(c), Vme(e, t, c));
  }];
}
function wU(e, t) {
  return NU(e, "native", t);
}
function MU(e, t) {
  return NU(e, "string", t);
}
var DU = J(_t());
var IU = J(_t());
var BU = J(_t()),
  Xme = _typeof(globalThis.window) < "u",
  jwe = !Xme || "Deno" in globalThis;
var tz = J(ZU()),
  Sm = J($U());
var ez = {};
function rz(e) {
  var _iterator16 = _createForOfIteratorHelper(e.childNodes),
    _step16;
  try {
    for (_iterator16.s(); !(_step16 = _iterator16.n()).done;) {
      var t = _step16.value;
      rz(t);
    }
  } catch (err) {
    _iterator16.e(err);
  } finally {
    _iterator16.f();
  }
  var _iterator17 = _createForOfIteratorHelper(e.props.osdOverlays),
    _step17;
  try {
    for (_iterator17.s(); !(_step17 = _iterator17.n()).done;) {
      var _t3 = _step17.value;
      _t3.remove();
    }
  } catch (err) {
    _iterator17.e(err);
  } finally {
    _iterator17.f();
  }
  typeof e.attributes.backgroundImage == "string" && e.props.imageOverlay && (e.props.imageOverlay.remove(), e.props.imageOverlay.destroy());
}
function Qme(e) {
  return (0, tz.default)({
    supportsMutation: !0,
    supportsPersistence: !1,
    supportsMicrotasks: !1,
    resolveUpdatePriority: function resolveUpdatePriority() {
      return Sm.DiscreteEventPriority;
    },
    getCurrentUpdatePriority: function getCurrentUpdatePriority() {
      return Sm.DiscreteEventPriority;
    },
    setCurrentUpdatePriority: function setCurrentUpdatePriority() {
      return Sm.DiscreteEventPriority;
    },
    maySuspendCommit: function maySuspendCommit() {
      return !1;
    },
    appendChildToContainer: function appendChildToContainer(t, a) {
      dm(t, a), e();
    },
    insertInContainerBefore: Ox,
    commitUpdate: function commitUpdate(t, a, i, u) {
      Mx(t, u), e();
    },
    commitTextUpdate: function commitTextUpdate() {
      throw new Error("Text components not supported");
    },
    commitMount: function commitMount() {},
    removeChildFromContainer: function removeChildFromContainer(t, a) {
      ec(t, a), e();
    },
    createInstance: function createInstance(t, a, i, u, l) {
      var c = tc("@mpv-easy/box");
      return Mx(c, a), c;
    },
    createTextInstance: function createTextInstance(t, a, i, u) {
      throw new Error("not support Text components");
    },
    hideTextInstance: function hideTextInstance() {},
    unhideTextInstance: function unhideTextInstance() {},
    hideInstance: function hideInstance() {},
    unhideInstance: function unhideInstance() {},
    appendInitialChild: function appendInitialChild(t, a) {
      dm(t, a), e();
    },
    appendChild: function appendChild(t, a) {
      dm(t, a), e();
    },
    insertBefore: function insertBefore(t, a, i) {
      Ox(t, a, i), e();
    },
    removeChild: function removeChild(t, a) {
      ec(t, a), e();
    },
    finalizeInitialChildren: function finalizeInitialChildren() {
      return !1;
    },
    shouldSetTextContent: function shouldSetTextContent() {
      return !1;
    },
    getRootHostContext: function getRootHostContext() {
      return ez;
    },
    getChildHostContext: function getChildHostContext() {
      return ez;
    },
    getPublicInstance: function getPublicInstance(t) {
      return t;
    },
    prepareForCommit: function prepareForCommit() {
      return null;
    },
    resetTextContent: function resetTextContent() {},
    clearContainer: function clearContainer() {},
    resetAfterCommit: function resetAfterCommit() {},
    preparePortalMount: function preparePortalMount() {},
    scheduleTimeout: setTimeout,
    cancelTimeout: clearTimeout,
    noTimeout: -1,
    isPrimaryRenderer: !0,
    supportsHydration: !1,
    getInstanceFromNode: function getInstanceFromNode() {
      return null;
    },
    beforeActiveInstanceBlur: function beforeActiveInstanceBlur() {},
    afterActiveInstanceBlur: function afterActiveInstanceBlur() {},
    prepareScopeUpdate: function prepareScopeUpdate() {},
    getInstanceFromScope: function getInstanceFromScope() {
      return null;
    },
    detachDeletedInstance: rz,
    NotPendingTransition: void 0,
    HostTransitionContext: {},
    resolveEventType: function resolveEventType() {
      return null;
    },
    resolveEventTimeStamp: Date.now,
    trackSchedulerEvent: function trackSchedulerEvent() {},
    resetFormInstance: function resetFormInstance() {
      throw new Error("Forms not supported");
    },
    requestPostPaintCallback: function requestPostPaintCallback() {
      throw new Error("Post-paint callbacks not supported");
    },
    shouldAttemptEagerTransition: function shouldAttemptEagerTransition() {
      throw new Error("Eager transitions not supported");
    },
    preloadInstance: function preloadInstance() {
      throw new Error("Preloading not supported");
    },
    startSuspendingCommit: function startSuspendingCommit() {
      throw new Error("Suspending commits not supported");
    },
    suspendInstance: function suspendInstance() {
      throw new Error("Suspending instances not supported");
    },
    waitForCommitToBeReady: function waitForCommitToBeReady() {
      throw new Error("Commit waiting not supported");
    }
  });
}
var Zme = 64;
function Jme() {
  return {
    frame: 0,
    max: 0,
    lastRender: 0,
    renderHandle: 0,
    fpsList: []
  };
}
function Wme() {
  var _ref16 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
    _ref16$enableMouseMov = _ref16.enableMouseMoveEvent,
    e = _ref16$enableMouseMov === void 0 ? !0 : _ref16$enableMouseMov,
    _ref16$fps = _ref16.fps,
    t = _ref16$fps === void 0 ? qU : _ref16$fps,
    _ref16$flex = _ref16.flex,
    a = _ref16$flex === void 0 ? rc() : _ref16$flex,
    _ref16$showFps = _ref16.showFps,
    i = _ref16$showFps === void 0 ? !1 : _ref16$showFps,
    _ref16$maxFpsFrame = _ref16.maxFpsFrame,
    u = _ref16$maxFpsFrame === void 0 ? 64 : _ref16$maxFpsFrame,
    _ref16$throttle = _ref16.throttle,
    l = _ref16$throttle === void 0 ? !0 : _ref16$throttle,
    _ref16$frameLimit = _ref16.frameLimit,
    c = _ref16$frameLimit === void 0 ? 0 : _ref16$frameLimit,
    d = _ref16.customRender,
    _ref16$customDispatch = _ref16.customDispatch,
    m = _ref16$customDispatch === void 0 ? AU : _ref16$customDispatch,
    _ref16$mouseKeyBindin = _ref16.mouseKeyBinding,
    h = _ref16$mouseKeyBindin === void 0 ? !1 : _ref16$mouseKeyBindin;
  if (!d) {
    var C = function C() {
      x.lastRender = Date.now(), clearTimeout(x.renderHandle), x.renderHandle = 0, x.frame++;
      var _ = Date.now();
      OU();
      var T = Date.now() - _;
      if (x.max = Math.max(x.max, T), x.fpsList.length >= S && x.fpsList.shift(), x.fpsList.push(T), i) {
        var q = x.fpsList.reduce(function (M, B) {
          return M + B;
        }, 0) / x.fpsList.length;
        print("render time(react):", x.frame, T, x.max, q);
      }
      c && x.frame >= c && p6();
    };
    var b = C;
    var x = Jme(),
      S = Math.min(u, Zme),
      O = 1e3 / t;
    d = function d() {
      if (!l) {
        C();
        return;
      }
      var q = Date.now() - x.lastRender;
      q >= O ? C() : (clearTimeout(x.renderHandle), x.renderHandle = +setTimeout(C, O - q));
    };
  }
  var g = Qme(d);
  return function (x) {
    var S = function S(k) {
        throw k;
      },
      O = g.createContainer(a.rootNode, 0, null, !1, null, "mpv-easy", S, S, S, function () {}),
      C = {
        x: 0,
        y: 0,
        hover: !1
      },
      _ = function _(k, Q) {
        C = Q, e && m(a.rootNode, C, {
          event: "press",
          is_mouse: !0,
          key: "",
          canceled: !1,
          scale: 0,
          arg: ""
        });
      };
    gn("mouse-pos", "native", _);
    var T = function T(k) {
        var Q = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "down";
        m(a.rootNode, C, {
          key_name: k,
          key: k,
          event: Q,
          is_mouse: !0,
          canceled: !1,
          scale: 0
        });
      },
      q = {
        complex: !0,
        repeatable: !0,
        forced: !1
      };
    if (h) {
      var k = function k(Q) {
        return m(a.rootNode, C, Q);
      };
      Mu("MOUSE_BTN0", "MPV_EASY_MOUSE_LEFT", k, q), Mu("MOUSE_BTN1", "MPV_EASY_MOUSE_MID", k, q), Mu("MOUSE_BTN3", "MPV_EASY_WHEEL_UP", k, q), Mu("MOUSE_BTN4", "MPV_EASY_WHEEL_DOWN", k, q);
    } else yn("mouse-left-click", function () {
      T("MBTN_LEFT", "down"), T("MBTN_LEFT", "up");
    }), yn("mouse-mid-click", function () {
      T("MBTN_MID", "down"), T("MBTN_MID", "up");
    }), yn("mouse-right-click", function () {
      T("MOUSE_RIGHT", "down"), T("MOUSE_RIGHT", "up");
    }), yn("mouse-wheel-up", function () {
      return T("WHEEL_UP");
    }), yn("mouse-wheel-down", function () {
      return T("WHEEL_DOWN");
    });
    var M = 0,
      B = 0,
      G = new Du("osd-dimensions"),
      V = function V(k, Q) {
        var X = a.rootNode;
        rr(X, "id", SU), rr(X, "width", k), rr(X, "height", Q), rr(X, "position", "relative"), rr(X, "color", "#FFFFFF"), rr(X, "backgroundColor", "#000000FF"), rr(X, "display", "flex"), rr(X, "padding", 0), rr(X, "borderSize", 0), rr(X, "x", 0), rr(X, "y", 0), rr(X, "zIndex", 0), rr(X, "fontSize", 16), oo(X, "x", 0), oo(X, "y", 0), oo(X, "width", k), oo(X, "height", Q), oo(X, "padding", 0), oo(X, "border", 0);
      };
    function te() {
      var _ref17 = G.value || {
          w: 0,
          h: 0
        },
        k = _ref17.w,
        Q = _ref17.h;
      !k || !Q || M === k && B === Q || (M = k, B = Q, V(k, Q), g.updateContainer(x, O, null, null));
    }
    var ie = G.observe(te);
    return function () {
      try {
        G.unobserve(ie), mp.unobserve_property(_);
      } catch (_unused78) {}
    };
  };
}
var Vx,
  nz = function nz(e) {
    var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return Vx || (Vx = Wme(t)), Vx(e);
  };
var uc = 7500,
  Em = 7500,
  Ku = {
    subFontSize: 38,
    subColor: "#FFFFFF00",
    subBackColor: "#FFFFFFFF",
    subBackColorHover: "#000000BF",
    subColorHover: "#00FFFF00",
    subBold: !1,
    subScale: 1,
    subOutlineSize: 0,
    subOutlineColor: "#FF000000",
    subZIndex: 512,
    targetLang: ri(),
    sourceLang: "",
    subSrtScale: .6,
    firstSubColor: "",
    secondSubColor: "",
    firstSubFontface: "",
    secondSubFontface: "",
    subOutputPath: "",
    maxChunkChars: uc,
    maxChunkEncodeChars: Em
  },
  Tm = {
    tooltioFontSize: 32,
    tooltipColor: "#FFFFFF00",
    tooltipBackColor: "#00000000",
    tooltipScale: 1,
    tooltipBold: !1,
    tooltipOutlineSize: 0,
    tooltipOutlineColor: "#00000000",
    tooltipMaxWidth: 64,
    tooltipZIndex: 1024,
    tooltipLeft: 0,
    tooltipBottom: 32
  };
var az = {
  "sec-ch-ua": '"Google Chrome";v="129", "Not=A?Brand";v="8", "Chromium";v="129"',
  "x-browser-year": "2024",
  "x-browser-channel": "stable",
  "sec-ch-ua-arch": '"x86"',
  "sec-ch-ua-bitness": '"64"',
  "sec-ch-ua-form-factors": '"Desktop"',
  "x-browser-copyright": "Copyright 2024 Google LLC. All rights reserved."
};
function iz(_x12) {
  return _iz.apply(this, arguments);
}
function _iz() {
  _iz = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee0(e) {
    var t, a, _t10;
    return _regenerator().w(function (_context0) {
      while (1) switch (_context0.p = _context0.n) {
        case 0:
          if (!(e.trim().length !== 0)) {
            _context0.n = 4;
            break;
          }
          _context0.p = 1;
          t = "https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=en&dt=t&q=".concat(encodeURIComponent(e));
          _context0.n = 2;
          return sa(t, {
            headers: az
          }).then(function (u) {
            return u.text();
          });
        case 2:
          a = _context0.v;
          return _context0.a(2, JSON.parse(a)[2]);
        case 3:
          _context0.p = 3;
          _t10 = _context0.v;
          console.log("detect error: ", _t10);
          return _context0.a(2);
        case 4:
          return _context0.a(2);
      }
    }, _callee0, null, [[1, 3]]);
  }));
  return _iz.apply(this, arguments);
}
function sc(_x13, _x14, _x15) {
  return _sc.apply(this, arguments);
}
function _sc() {
  _sc = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee1(e, t, a) {
    var i, u, l, c, d, m, _t11;
    return _regenerator().w(function (_context1) {
      while (1) switch (_context1.p = _context1.n) {
        case 0:
          if (!(e.trim().length === 0)) {
            _context1.n = 1;
            break;
          }
          return _context1.a(2, "");
        case 1:
          i = a === null || a === void 0 ? void 0 : a.split("-")[0].toLowerCase(), u = t.split("-")[0].toLowerCase(), l = nm.map(function (c) {
            return c.split("-")[0];
          });
          (!u || !l.includes(u)) && (u = ri().split("-")[0].toLowerCase()), (!i || !l.includes(i)) && (i = "auto");
          _context1.p = 2;
          c = "https://translate.googleapis.com/translate_a/single?client=gtx&sl=".concat(i, "&tl=").concat(u, "&dt=t&q=").concat(encodeURIComponent(e));
          _context1.n = 3;
          return Uu(c, function () {
            return sa(c, {
              headers: az
            }).then(function (g) {
              return g.text();
            });
          });
        case 3:
          d = _context1.v;
          m = JSON.parse(d);
          return _context1.a(2, m !== null && m !== void 0 && m[0] ? m[0].map(function (g) {
            return g[0];
          }).join("") : "");
        case 4:
          _context1.p = 4;
          _t11 = _context1.v;
          return _context1.a(2, (console.log("translate error: ", _t11), ""));
      }
    }, _callee1, null, [[2, 4]]);
  }));
  return _sc.apply(this, arguments);
}
var le = ro("translate");
function $me(e, t) {
  return e.replace(/\$(\w+)/g, function (a, i) {
    var _t$i;
    return (_t$i = t[i]) !== null && _t$i !== void 0 ? _t$i : "";
  });
}
function eve(_x16, _x17, _x18) {
  return _eve.apply(this, arguments);
}
function _eve() {
  _eve = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee11(e, t, a) {
    var i,
      u,
      l,
      c,
      d,
      m,
      h,
      g,
      b,
      x,
      C,
      _,
      T,
      q,
      S,
      _iterator19,
      _step19,
      _C3,
      _11,
      _args0 = arguments;
    return _regenerator().w(function (_context11) {
      while (1) switch (_context11.n) {
        case 0:
          i = _args0.length > 3 && _args0[3] !== undefined ? _args0[3] : uc;
          u = _args0.length > 4 && _args0[4] !== undefined ? _args0[4] : Em;
          le.info("translateSrt: ".concat(a, " \u2192 ").concat(t, ", ").concat(i, "c / ").concat(u, "e"));
          l = new ai(e), c = l.blocks;
          le.debug("translateSrt: ".concat(c.length, " blocks"));
          d = [], m = [], h = 0, g = 0, b = c.length, x = "\n\n\n";
        case 1:
          if (!(g < b)) {
            _context11.n = 8;
            break;
          }
          C = g;
        case 2:
          if (!(g < b)) {
            _context11.n = 6;
            break;
          }
          _ = c[g].text, T = h + _.length;
          if (!(T >= i)) {
            _context11.n = 3;
            break;
          }
          return _context11.a(3, 6);
        case 3:
          q = [].concat(_toConsumableArray(m), [_]);
          if (!(encodeURIComponent(q.join(x)).length >= u)) {
            _context11.n = 4;
            break;
          }
          return _context11.a(3, 6);
        case 4:
          h = T, m.push(_), g++;
        case 5:
          _context11.n = 2;
          break;
        case 6:
          m.length === 0 && g < b && (m.push(c[g].text), g++), d.push({
            st: C,
            text: m.join(x)
          }), m = [], h = 0;
        case 7:
          _context11.n = 1;
          break;
        case 8:
          le.debug("translateSrt: ".concat(d.length, " chunks to translate"));
          _context11.n = 9;
          return Promise.all(d.map(/*#__PURE__*/function () {
            var _ref36 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee10(C, _) {
              var _q3, _t12;
              return _regenerator().w(function (_context10) {
                while (1) switch (_context10.p = _context10.n) {
                  case 0:
                    _context10.p = 0;
                    _context10.n = 1;
                    return sc(C.text, t, a);
                  case 1:
                    _q3 = _context10.v.split(x);
                    return _context10.a(2, (le.verbose("translateSrt: chunk ".concat(_ + 1, "/").concat(d.length, " done")), {
                      st: C.st,
                      ret: _q3
                    }));
                  case 2:
                    _context10.p = 2;
                    _t12 = _context10.v;
                    throw le.error("translateSrt: chunk ".concat(_ + 1, "/").concat(d.length, " failed"), _t12), _t12;
                  case 3:
                    return _context10.a(2);
                }
              }, _callee10, null, [[0, 2]]);
            }));
            return function (_x31, _x32) {
              return _ref36.apply(this, arguments);
            };
          }()));
        case 9:
          S = _context11.v;
          _iterator19 = _createForOfIteratorHelper(S);
          try {
            for (_iterator19.s(); !(_step19 = _iterator19.n()).done;) {
              _C3 = _step19.value;
              for (_11 = 0; _11 < _C3.ret.length; _11++) c[_C3.st + _11] && (c[_C3.st + _11].text = _C3.ret[_11]);
            }
          } catch (err) {
            _iterator19.e(err);
          } finally {
            _iterator19.f();
          }
          return _context11.a(2, l.toString());
      }
    }, _callee11);
  }));
  return _eve.apply(this, arguments);
}
function tve(_x19) {
  return _tve.apply(this, arguments);
}
function _tve() {
  _tve = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee12(e) {
    var t,
      i,
      u,
      l,
      _args1 = arguments;
    return _regenerator().w(function (_context12) {
      while (1) switch (_context12.n) {
        case 0:
          t = _args1.length > 1 && _args1[1] !== undefined ? _args1[1] : uc;
          i = new ai(e).blocks;
          if (!(i.length === 0)) {
            _context12.n = 1;
            break;
          }
          le.warn("guessLanguage: no blocks found");
          return _context12.a(2);
        case 1:
          u = i.filter(function (c) {
            return c.text.trim().length > 0;
          }).slice(0, 10).map(function (c) {
            return c.text;
          }).join(" ");
          _context12.n = 2;
          return iz(u.slice(0, t));
        case 2:
          l = _context12.v;
          return _context12.a(2, (le.debug("guessLanguage: detected ".concat(l)), l));
      }
    }, _callee12);
  }));
  return _tve.apply(this, arguments);
}
var nr, Ht;
function oz() {
  nr = void 0, Ht = void 0;
}
function rve(e) {
  var t = e.split(".");
  if (t.length < 2) return;
  var a = t[t.length - 2].toLowerCase(),
    i = nm.find(function (u) {
      return u.toLowerCase().startsWith(a);
    });
  if (i) return i;
}
function nve(e, t, a, i, u, l, c, d, m) {
  var h = er(e),
    g = er(t),
    b = new ai(h),
    x = new ai(g),
    S = new ai(h),
    O = ["size=\"".concat(i, "\"")],
    C = ["size=\"".concat(u, "\"")];
  l.length && O.push("color=\"".concat(l, "\"")), d.length && O.push("face=\"".concat(d, "\"")), c.length && C.push("color=\"".concat(c, "\"")), m.length && C.push("face=\"".concat(m, "\""));
  var _ = O.join(" "),
    T = C.join(" ");
  for (var M = 0; M < S.blocks.length; M++) {
    var B = b.blocks[M].text.split("\n"),
      G = x.blocks[M].text.split("\n"),
      V = [];
    for (var te = 0; te < B.length; te++) V.push("<font ".concat(_, " >").concat(B[te] || "", "</font>\n<font ").concat(T, " >").concat(G[te] || "", "</font>"));
    S.blocks[M].text = V.join("\n");
  }
  var q = S.toString();
  bn(a, q);
}
function uo() {
  return _uo.apply(this, arguments);
}
function _uo() {
  _uo = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee13() {
    var _e$targetLang, _e$sourceLang;
    var e,
      t,
      _e$firstFontSize,
      a,
      _e$secondFontSize,
      i,
      _e$firstSubColor,
      u,
      _e$secondSubColor,
      l,
      _e$firstSubFontface,
      c,
      _e$secondSubFontface,
      d,
      _e$maxChunkChars,
      m,
      _e$maxChunkEncodeChar,
      h,
      g,
      b,
      x,
      S,
      O,
      C,
      _,
      T,
      q,
      M,
      B,
      G,
      V,
      te,
      ie,
      me,
      Ee,
      ge,
      k,
      Q,
      X,
      _me3,
      _Ee,
      ce,
      _me4,
      _Ee2,
      _ge3,
      _me5,
      _args10 = arguments,
      _t13,
      _t14,
      _t15,
      _t16;
    return _regenerator().w(function (_context13) {
      while (1) switch (_context13.n) {
        case 0:
          e = _args10.length > 0 && _args10[0] !== undefined ? _args10[0] : {};
          t = e.dual, _e$firstFontSize = e.firstFontSize, a = _e$firstFontSize === void 0 ? 22 : _e$firstFontSize, _e$secondFontSize = e.secondFontSize, i = _e$secondFontSize === void 0 ? 11 : _e$secondFontSize, _e$firstSubColor = e.firstSubColor, u = _e$firstSubColor === void 0 ? "" : _e$firstSubColor, _e$secondSubColor = e.secondSubColor, l = _e$secondSubColor === void 0 ? "" : _e$secondSubColor, _e$firstSubFontface = e.firstSubFontface, c = _e$firstSubFontface === void 0 ? "" : _e$firstSubFontface, _e$secondSubFontface = e.secondSubFontface, d = _e$secondSubFontface === void 0 ? "" : _e$secondSubFontface, _e$maxChunkChars = e.maxChunkChars, m = _e$maxChunkChars === void 0 ? uc : _e$maxChunkChars, _e$maxChunkEncodeChar = e.maxChunkEncodeChars, h = _e$maxChunkEncodeChar === void 0 ? Em : _e$maxChunkEncodeChar;
          le.info("dual=".concat(t, ", target=").concat(e.targetLang || "auto", ", source=").concat(e.sourceLang || "auto"));
          g = ao();
          if (g) {
            _context13.n = 1;
            break;
          }
          return _context13.a(2, (le.warn("no subtitle track"), yr("subtitle not found"), !1));
        case 1:
          le.debug("sub id=".concat(g.id, " title=\"").concat(g.title, "\" lang=").concat(g.lang, " external=").concat(g.external));
          b = Kd("path");
          if (!(le.debug("videoPath=".concat(b)), !Ye(b) && !g.external)) {
            _context13.n = 2;
            break;
          }
          return _context13.a(2, (le.warn("remote video with embedded subs, not supported"), yr("not support remote video with embedded subtitles"), !1));
        case 2:
          x = (_e$targetLang = e.targetLang) !== null && _e$targetLang !== void 0 && _e$targetLang.length ? e.targetLang : ri();
          if (!(le.debug("targetLang=".concat(x)), t && Ht && g.title === "dual.".concat(x))) {
            _context13.n = 3;
            break;
          }
          return _context13.a(2, (le.info("restore dual backup"), ua("sid", Ht.id), Ll(g.id), Ht = void 0, !0));
        case 3:
          if (!(!t && nr && g.title === x)) {
            _context13.n = 4;
            break;
          }
          return _context13.a(2, (le.info("restore single backup"), ua("sid", nr.id), Ll(g.id), nr = void 0, !0));
        case 4:
          if (!(t && nr && (le.info("clear old single backup"), ua("sid", nr.id), Ll(g.id), nr = void 0), !t && Ht && (le.info("clear old dual backup"), ua("sid", Ht.id), Ll(g.id), Ht = void 0), g = ao(), !g)) {
            _context13.n = 5;
            break;
          }
          return _context13.a(2, (le.warn("no subtitle after restore"), yr("subtitle not found"), !1));
        case 5:
          S = g;
          g.title === x && nr ? (le.debug("fallback to backup source"), S = nr) : g.title === "dual.".concat(x) && Ht && (le.debug("fallback to dual backup source"), S = Ht), t ? (Ht = S, le.debug("dual backup saved id=".concat(S.id))) : (nr = S, le.debug("backup saved id=".concat(S.id)));
          O = Pu(), C = nx(b);
          if (C) {
            _context13.n = 6;
            break;
          }
          return _context13.a(2, (le.warn("videoName not found"), yr("videoName not found"), !1));
        case 6:
          _ = (_e$sourceLang = e.sourceLang) !== null && _e$sourceLang !== void 0 && _e$sourceLang.length ? e.sourceLang : S.lang;
          le.debug("sourceLang=".concat(_));
          T = om([b, _, x, S.id, a, i, u, l, c, d].join("-")), q = e.subOutputPath || "", M = function M(me) {
            return Rr("".concat(O, "/").concat(T, ".").concat(C, ".").concat(me));
          }, B = S.external ? _d(S.externalFilename) : M("".concat(_, ".srt")), G = M("".concat(_, ".srt")), V = M("".concat(_, ".").concat(x, ".srt")), te = /https?:\/\/[^\s]+/, ie = B.match(te);
          if (!ie) {
            _context13.n = 9;
            break;
          }
          me = ie[0];
          le.debug("fetch remote sub ".concat(me));
          _context13.n = 7;
          return sa(me).then(function (Je) {
            return Je.text();
          });
        case 7:
          Ee = _context13.v;
          ge = eU();
          bn(ge, Ee);
          _context13.n = 8;
          return Tx(ge, G);
        case 8:
          le.debug("remote sub converted");
        case 9:
          _t13 = S.external && !Ye(G);
          if (!_t13) {
            _context13.n = 10;
            break;
          }
          le.debug("convert external sub ".concat(B));
          _context13.n = 10;
          return Tx(B, G);
        case 10:
          if (Ye(G)) {
            _context13.n = 14;
            break;
          }
          le.debug("extract sub track ".concat(S.id));
          _context13.n = 11;
          return iU(b, S.id, G);
        case 11:
          _t14 = !_context13.v;
          if (_t14) {
            _context13.n = 12;
            break;
          }
          _t14 = !Ye(G);
        case 12:
          if (!_t14) {
            _context13.n = 13;
            break;
          }
          return _context13.a(2, (le.error("save srt failed ".concat(G)), yr("save subtitle error"), !1));
        case 13:
          le.debug("srt saved to ".concat(G));
        case 14:
          k = er(G), Q = S.external ? rve(S.externalFilename) : void 0;
          _t15 = Q;
          if (_t15) {
            _context13.n = 16;
            break;
          }
          le.debug("guessing source language...");
          _context13.n = 15;
          return tve(k, m);
        case 15:
          Q = _context13.v;
        case 16:
          if (Q) {
            _me3 = Q.split("-")[0].toLowerCase(), _Ee = x.split("-")[0].toLowerCase();
            _me3 === _Ee && (le.info("already in ".concat(x, ", skip")), yr("Subtitle already in ".concat(x, ", reusing content")), X = k);
          }
          _t16 = X === void 0;
          if (!_t16) {
            _context13.n = 18;
            break;
          }
          le.info("translating ".concat(_, " \u2192 ").concat(x));
          _context13.n = 17;
          return eve(k, x, _, m, h);
        case 17:
          X = _context13.v;
          le.debug("translation done, writing ".concat(V));
        case 18:
          bn(V, X);
          ce = function ce(me, Ee) {
            if (!Ye(b)) return le.debug("network source, use temp output"), me;
            try {
              var _ge2 = Yd(b),
                Je = C.lastIndexOf("."),
                ht = Je === -1 ? C : C.substring(0, Je),
                Pe = q || "$TMP/$NAME.$LANG.srt",
                U = LP() || Pu(),
                j = xn() || O,
                z = zl("~~home/") || O,
                L = ZP() || O,
                We = _d($me(Pe, {
                  HOME: U,
                  NAME: ht,
                  LANG: Ee,
                  SOURCE_LANG: _ || "en-US",
                  TARGET_LANG: x || "en-US",
                  TMP: O,
                  FOLDER: _ge2,
                  MPV: j,
                  MPV_CONFIG: z,
                  DESKTOP: L
                }));
              return le.debug("output ".concat(Ee, ": ").concat(me, " \u2192 ").concat(We)), _d(me) === We ? me : (bn(We, er(me)), We);
            } catch (ge) {
              return le.error("template error", ge), yr("Template error: ".concat(ge, ", using temp path")), me;
            }
          };
          if (t) {
            _me4 = M("dual.".concat(_, ".").concat(x, ".srt"));
            Ye(_me4) || (le.debug("creating dual srt"), nve(V, G, _me4, a, i, u, l, c, d));
            _Ee2 = "".concat(_, ".").concat(x), _ge3 = ce(_me4, _Ee2);
            le.info("add dual sub dual.".concat(x, " => ").concat(_ge3)), rx(_ge3, "select", "dual.".concat(x), _Ee2);
          } else {
            _me5 = ce(V, x);
            le.info("add sub ".concat(x, " => ").concat(_me5)), rx(_me5, "select", x, x);
          }
          return _context13.a(2, (le.info("done"), !0));
      }
    }, _callee13);
  }));
  return _uo.apply(this, arguments);
}
function uz(_x20) {
  return _uz.apply(this, arguments);
}
function _uz() {
  _uz = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee14(e) {
    var a;
    return _regenerator().w(function (_context14) {
      while (1) switch (_context14.n) {
        case 0:
          a = "https://cn.bing.com/dict/clientsearch?mkt=zh-CN&setLang=zh&form=BDVEHC&ClientVer=BDDTV3.5.1.4320&q=".concat(encodeURIComponent(e));
          _context14.n = 1;
          return Uu(a, function () {
            return sa(a).then(function (u) {
              return u.text();
            });
          });
        case 1:
          return _context14.a(2, _context14.v);
      }
    }, _callee14);
  }));
  return _uz.apply(this, arguments);
}
var Se = J(_t());
var ave = ["enes", "enfr", "deen", "enpl", "ensl", "defr", "dees", "deru", "depl", "desl", "deit", "dept", "detr", "deel", "dela", "espl", "frpl", "itpl", "plru", "essl", "frsl", "itsl", "enit", "enpt", "enru", "espt", "esfr", "delb", "dezh", "enzh", "eszh", "frzh", "denl", "arde", "aren", "dade", "csde", "dehu", "deno", "desv", "dede", "dedx"];
function sz(_x21, _x22, _x23) {
  return _sz.apply(this, arguments);
}
function _sz() {
  _sz = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee15(e, t, a) {
    var i, u, l;
    return _regenerator().w(function (_context15) {
      while (1) switch (_context15.n) {
        case 0:
          i = encodeURIComponent(e), u = a + t;
          if (ave.includes(u)) {
            _context15.n = 1;
            break;
          }
          return _context15.a(2, (yr("pons not support language combos: ".concat(u)), ""));
        case 1:
          l = "http://en.pons.com/translate?q=".concat(i, "&l=").concat(u, "&in=").concat(a);
          _context15.n = 2;
          return Uu(l, function () {
            return sa(l, {
              redirect: "follow"
            }).then(function (d) {
              return d.text();
            });
          });
        case 2:
          return _context15.a(2, _context15.v);
      }
    }, _callee15);
  }));
  return _sz.apply(this, arguments);
}
function lz(_x24) {
  return _lz.apply(this, arguments);
}
function _lz() {
  _lz = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee16(e) {
    var _t$match, _t$match2, _t$match3;
    var t, a, i, u, l;
    return _regenerator().w(function (_context16) {
      while (1) switch (_context16.n) {
        case 0:
          _context16.n = 1;
          return uz(e);
        case 1:
          t = _context16.v;
          a = ((_t$match = t.match(/data-definition="(.*?)"/)) === null || _t$match === void 0 ? void 0 : _t$match[1]) || "";
          i = um(a).split(";").map(function (c) {
            return c.trim();
          });
          u = um(((_t$match2 = t.match(/data-word="(.*?)"/)) === null || _t$match2 === void 0 ? void 0 : _t$match2[1]) || e).trim();
          l = um(((_t$match3 = t.match(/audiomd5="(.*?)"/)) === null || _t$match3 === void 0 ? void 0 : _t$match3[1]) || "").trim();
          return _context16.a(2, (l.startsWith("/") && (l = "https://cn.bing.com/".concat(l)), {
            word: u,
            detail: i,
            audio: l
          }));
      }
    }, _callee16);
  }));
  return _lz.apply(this, arguments);
}
function cz(_x25) {
  return _cz.apply(this, arguments);
}
function _cz() {
  _cz = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee17(e) {
    var _t$match4;
    var t, a, i, u, l, c, d, m, g;
    return _regenerator().w(function (_context17) {
      while (1) switch (_context17.n) {
        case 0:
          _context17.n = 1;
          return sz(e, "en", "de");
        case 1:
          t = _context17.v;
          a = ((_t$match4 = t.match(/<h2 class="">\s(.*?)<span class/)) === null || _t$match4 === void 0 ? void 0 : _t$match4[1].trim()) || e;
          i = 'class="translations first">';
          u = '<div class="link-examples-toolbar">';
          l = t.indexOf(i);
          c = t.indexOf(u);
          d = "@@NEW_LINE@@";
          m = "@@SPLIT@@";
          g = t.slice(l + i.length, c).replaceAll("</dl>", d).replaceAll("</h3>", d).replaceAll("</dt>", m).replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").replaceAll(d, "\n").replaceAll(m, "	").trim().split("\n").map(function (b) {
            var _b$trim$split$map = b.trim().split("	").map(function (O) {
                return O.trim();
              }),
              _b$trim$split$map2 = _slicedToArray(_b$trim$split$map, 2),
              x = _b$trim$split$map2[0],
              S = _b$trim$split$map2[1];
            return "".concat(x, "    ").concat(S !== null && S !== void 0 ? S : "").trim();
          });
          return _context17.a(2, {
            word: a,
            detail: g
          });
      }
    }, _callee17);
  }));
  return _cz.apply(this, arguments);
}
function ive(_x26, _x27, _x28) {
  return _ive.apply(this, arguments);
}
function _ive() {
  _ive = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee18(e, t, a) {
    var i;
    return _regenerator().w(function (_context18) {
      while (1) switch (_context18.n) {
        case 0:
          if (!(t.startsWith("zh") && a.startsWith("en"))) {
            _context18.n = 1;
            break;
          }
          return _context18.a(2, lz(e));
        case 1:
          if (!(t.startsWith("en") && a.startsWith("de"))) {
            _context18.n = 2;
            break;
          }
          return _context18.a(2, cz(e));
        case 2:
          _context18.n = 3;
          return sc(e, t, a);
        case 3:
          i = _context18.v;
          return _context18.a(2, Promise.resolve({
            word: e,
            detail: [i]
          }));
      }
    }, _callee18);
  }));
  return _ive.apply(this, arguments);
}
function ove(e) {
  return e.trim().replaceAll(/\s+/g, " ").replaceAll(" ", "  ").split(" ");
}
var uve = '!"#$%&()*+,./:;<=>?@[]^{|}~'.split("");
function sve(e) {
  var _iterator18 = _createForOfIteratorHelper(uve),
    _step18;
  try {
    for (_iterator18.s(); !(_step18 = _iterator18.n()).done;) {
      var t = _step18.value;
      e = e.replaceAll(t, "");
    }
  } catch (err) {
    _iterator18.e(err);
  } finally {
    _iterator18.f();
  }
  return e;
}
function lve(_ref18) {
  var e = _ref18.word,
    t = _ref18.showTitle,
    a = _ref18.subConfig,
    i = _ref18.skipTranslate,
    u = _ref18.videoScale;
  var _ref19 = (0, Se.useState)({
      word: "",
      detail: []
    }),
    _ref20 = _slicedToArray(_ref19, 2),
    l = _ref20[0],
    c = _ref20[1],
    d = (0, Se.useRef)(!1),
    m = Math.round(a.subFontSize * u * 2),
    h = Math.round(m / 1.5),
    g = i ? m : h,
    b = i ? a.subOutlineSize * u : a.subOutlineSize * u / 2;
  return (0, Se.useEffect)(function () {
    if (d.current || !e.length || i) return;
    d.current = !0;
    var x = e;
    ive(sve(e), a.targetLang, a.sourceLang).then(function (S) {
      x === e && c(S), d.current = !1;
    });
  }, [e]), e.length ? Se.default.createElement(qx, {
    onClick: function () {
      var _onClick = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(x) {
        var _l$audio;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.n) {
            case 0:
              x.event.key_name === "MBTN_LEFT" && ((_l$audio = l.audio) === null || _l$audio === void 0 ? void 0 : _l$audio.length) && uU(l.audio);
            case 1:
              return _context.a(2);
          }
        }, _callee);
      }));
      function onClick(_x29) {
        return _onClick.apply(this, arguments);
      }
      return onClick;
    }(),
    display: "flex",
    position: "relative",
    fontSize: g,
    color: a.subColor,
    fontBorderSize: b,
    fontBorderColor: a.subOutlineColor,
    fontWeight: a.subBold ? "bold" : "normal",
    colorHover: i ? a.subColor : a.subColorHover,
    backgroundColorHover: i ? a.subBackColor : a.subBackColorHover,
    backgroundColor: a.subBackColor,
    title: t ? i ? "" : l.detail.join("\n").trim() : "",
    text: e
  }) : Se.default.createElement(mn, {
    width: e === "" ? a.subFontSize / 2 : void 0,
    height: e === "" ? a.subFontSize / 2 : void 0
  });
}
function cve(_ref21) {
  var e = _ref21.line,
    t = _ref21.subConfig,
    a = _ref21.lineIndex,
    i = _ref21.isDual,
    u = _ref21.videoScale;
  var l = ove(e),
    _ref22 = (0, Se.useState)(!0),
    _ref23 = _slicedToArray(_ref22, 2),
    c = _ref23[0],
    d = _ref23[1],
    m = (0, Se.useRef)(!1),
    _ref24 = (0, Se.useState)(""),
    _ref25 = _slicedToArray(_ref24, 2),
    h = _ref25[0],
    g = _ref25[1],
    b = i && !(a & 1);
  return (0, Se.useEffect)(function () {
    if (m.current || !e.length || b) return;
    m.current = !0;
    var x = e;
    sc(e, ri()).then(function (S) {
      x === e && g(S.trim()), m.current = !1;
    });
  }, [e]), Se.default.createElement(mn, {
    position: "relative",
    display: "flex",
    width: "100%",
    justifyContent: "center",
    alignItems: "end",
    alignContent: "stretch",
    onClick: function onClick(x) {
      x.event.key_name === "MBTN_MID" && d(function (S) {
        return !S;
      });
    },
    title: c ? "" : h
  }, l.map(function (x, S) {
    return Se.default.createElement(lve, {
      videoScale: u,
      showTitle: c,
      key: [x, S].join(","),
      word: x.trim(),
      subConfig: t,
      skipTranslate: b
    });
  }));
}
function fz(e) {
  var _Ku$e = _objectSpread(_objectSpread({}, Ku), e),
    t = _Ku$e.subFontSize,
    a = _Ku$e.subColor,
    i = _Ku$e.subBackColor,
    u = _Ku$e.subBackColorHover,
    l = _Ku$e.subColorHover,
    c = _Ku$e.subBold,
    d = _Ku$e.subScale,
    m = _Ku$e.subOutlineSize,
    h = _Ku$e.subOutlineColor,
    g = _Ku$e.subZIndex,
    b = _Ku$e.targetLang,
    x = _Ku$e.sourceLang,
    S = _Ku$e.subSrtScale,
    O = _Ku$e.firstSubColor,
    C = _Ku$e.firstSubFontface,
    _ = _Ku$e.secondSubFontface,
    T = _Ku$e.secondSubColor,
    q = _Ku$e.subOutputPath,
    M = _Ku$e.maxChunkChars,
    B = _Ku$e.maxChunkEncodeChars,
    _ref26 = (0, Se.useState)(!1),
    _ref27 = _slicedToArray(_ref26, 2),
    G = _ref27[0],
    V = _ref27[1],
    _ref28 = (0, Se.useState)(""),
    _ref29 = _slicedToArray(_ref28, 2),
    te = _ref29[0],
    ie = _ref29[1],
    k = (0, Se.useRef)(""),
    _ref30 = (0, Se.useState)(0),
    _ref31 = _slicedToArray(_ref30, 2),
    Q = _ref31[0],
    X = _ref31[1],
    _ref32 = (0, Se.useState)(!1),
    _ref33 = _slicedToArray(_ref32, 2),
    ce = _ref33[0],
    me = _ref33[1],
    _ref34 = (0, Se.useState)(!1),
    _ref35 = _slicedToArray(_ref34, 2),
    Ee = _ref35[0],
    ge = _ref35[1],
    Je = (0, Se.useRef)(0),
    ht = (0, Se.useRef)(!1),
    Pe = (0, Se.useRef)(!1),
    U = (0, Se.useRef)(!1),
    j = (0, Se.useRef)(null),
    z = MU("path", "")[0];
  (0, Se.useEffect)(function () {
    Je.current = Q, ht.current = ce, Pe.current = Ee;
  }, [Q, ce, Ee]);
  var L = (0, Se.useRef)(null);
  L.current = function (_e) {
    G && ie(_e || "");
  };
  var Zr = b.toLocaleLowerCase(),
    We = x.toLocaleLowerCase();
  if (!We.length && (nr && (We = nr.lang || nr.title || ""), Ht && (We = Ht.lang || Ht.title || ""), !We.length)) {
    var _e = ao();
    _e && (We = (_e.lang || _e.title || "").toLocaleLowerCase());
  }
  var ar = Math.round(S * t * d),
    _n = Math.round(ar / 2),
    Jr = oa("video-params") || {
      w: 0,
      h: 0,
      aspect: 0
    },
    Rt = oa("video-target-params") || {
      w: 0,
      h: 0,
      aspect: 0
    },
    lc = Rt.w / Rt.h,
    Yu = Rt.w,
    An = Rt.h;
  lc <= Jr.aspect ? An = Rt.w / Jr.aspect : Yu = Rt.w / Jr.aspect;
  var On = Yu / Jr.w,
    Xu = An / Jr.h,
    si = Math.min(On, Xu),
    br = function br(_e, we) {
      var Xe = _e !== 0 && we;
      V(Xe), _e !== 0 ? ti("sub-visibility", !Xe) : ti("sub-visibility", !0);
    },
    Br = /*#__PURE__*/function () {
      var _Br = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(_e) {
        var we, _t4, _t5, _t6;
        return _regenerator().w(function (_context2) {
          while (1) switch (_context2.n) {
            case 0:
              we = Je.current;
              _t4 = we === _e && _e !== 0;
              if (_t4) {
                _context2.n = 8;
                break;
              }
              if (!(we === 1)) {
                _context2.n = 2;
                break;
              }
              _context2.n = 1;
              return uo({
                targetLang: Zr,
                sourceLang: We,
                dual: !1,
                firstFontSize: ar,
                secondFontSize: _n,
                firstSubColor: O,
                firstSubFontface: C,
                secondSubFontface: _,
                secondSubColor: T,
                subOutputPath: q,
                maxChunkChars: M,
                maxChunkEncodeChars: B
              });
            case 1:
              _context2.n = 3;
              break;
            case 2:
              _t5 = we === 2;
              if (!_t5) {
                _context2.n = 3;
                break;
              }
              _context2.n = 3;
              return uo({
                targetLang: Zr,
                sourceLang: We,
                dual: !0,
                firstFontSize: ar,
                secondFontSize: _n,
                firstSubColor: O,
                firstSubFontface: C,
                secondSubFontface: _,
                secondSubColor: T,
                subOutputPath: q,
                maxChunkChars: M,
                maxChunkEncodeChars: B
              });
            case 3:
              if (!(_e === 1)) {
                _context2.n = 5;
                break;
              }
              Mr("Translating...", 0);
              _context2.n = 4;
              return uo({
                targetLang: Zr,
                sourceLang: We,
                dual: !1,
                firstFontSize: ar,
                secondFontSize: _n,
                firstSubColor: O,
                firstSubFontface: C,
                secondSubFontface: _,
                secondSubColor: T,
                subOutputPath: q,
                maxChunkChars: M,
                maxChunkEncodeChars: B
              });
            case 4:
              io();
              _context2.n = 7;
              break;
            case 5:
              _t6 = _e === 2;
              if (!_t6) {
                _context2.n = 7;
                break;
              }
              Mr("Translating...", 0);
              _context2.n = 6;
              return uo({
                targetLang: Zr,
                sourceLang: We,
                dual: !0,
                firstFontSize: ar,
                secondFontSize: _n,
                firstSubColor: O,
                firstSubFontface: C,
                secondSubFontface: _,
                secondSubColor: T,
                subOutputPath: q,
                maxChunkChars: M,
                maxChunkEncodeChars: B
              });
            case 6:
              io();
            case 7:
              X(_e);
              br(_e, ht.current);
            case 8:
              return _context2.a(2);
          }
        }, _callee2);
      }));
      function Br(_x30) {
        return _Br.apply(this, arguments);
      }
      return Br;
    }(),
    li = /*#__PURE__*/function () {
      var _li = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3() {
        var we, Xe, _t7, _t8;
        return _regenerator().w(function (_context3) {
          while (1) switch (_context3.n) {
            case 0:
              if (!(!U.current || !ao())) {
                _context3.n = 1;
                break;
              }
              return _context3.a(2);
            case 1:
              U.current = !1;
              we = j.current;
              if (we) {
                _context3.n = 2;
                break;
              }
              return _context3.a(2);
            case 2:
              Xe = Je.current;
              _t7 = Xe !== 0;
              if (!_t7) {
                _context3.n = 6;
                break;
              }
              Mr("Auto Translating...", 0);
              if (!(Xe === 1)) {
                _context3.n = 4;
                break;
              }
              _context3.n = 3;
              return uo(_objectSpread(_objectSpread({}, we), {}, {
                dual: !1
              }));
            case 3:
              _context3.n = 5;
              break;
            case 4:
              _t8 = Xe === 2;
              if (!_t8) {
                _context3.n = 5;
                break;
              }
              _context3.n = 5;
              return uo(_objectSpread(_objectSpread({}, we), {}, {
                dual: !0
              }));
            case 5:
              io();
            case 6:
              return _context3.a(2);
          }
        }, _callee3);
      }));
      function li() {
        return _li.apply(this, arguments);
      }
      return li;
    }();
  (0, Se.useEffect)(function () {
    yn("cycle-translate-mode", function () {
      if (!ao()) {
        Mr("subtitle not found");
        return;
      }
      if (!Jl()) {
        Mr("ffmpeg not found");
        return;
      }
      if (!Bu("curl")) {
        Mr("curl not found");
        return;
      }
      var Xe = 0;
      switch (Je.current) {
        case 0:
          Xe = 1, Mr("Mode: Translate");
          break;
        case 1:
          Xe = 2, Mr("Mode: Dual");
          break;
        case 2:
          Xe = 0, Mr("Mode: None");
          break;
      }
      Br(Xe);
    }), yn("toggle-interactive-translate", function () {
      var we = !ht.current;
      me(we), br(Je.current, we), Mr("Interactive: ".concat(we ? "On" : "Off"));
    }), yn("toggle-auto-translate", function () {
      var we = !Pe.current;
      ge(we), Mr("Auto Translate: ".concat(we ? "On" : "Off"));
    }), gn("sub-text", "string", function (we, Xe) {
      var _L$current;
      (_L$current = L.current) !== null && _L$current !== void 0 && _L$current.call(L, Xe), k.current = Xe;
    }), new Du("track-list").observe(li), gn("sid", "native", li);
  }, []), j.current = {
    targetLang: Zr,
    sourceLang: We,
    firstFontSize: ar,
    secondFontSize: _n,
    firstSubColor: O,
    firstSubFontface: C,
    secondSubFontface: _,
    secondSubColor: T,
    subOutputPath: q,
    maxChunkChars: M,
    maxChunkEncodeChars: B
  }, (0, Se.useEffect)(function () {
    if (!z) return;
    if (io(), oz(), !Pe.current) {
      X(0), br(0, ht.current);
      return;
    }
    if (Je.current !== 0) return U.current = !0, li(), function () {
      U.current = !1, io();
    };
  }, [z]);
  var ku = !!Ht;
  return G && Se.default.createElement(mn, _objectSpread({
    display: "flex",
    position: "absolute",
    width: "100%",
    height: "100%",
    flexDirection: "column",
    justifyContent: "end",
    alignItems: "center"
  }, e), te.trim().replaceAll("\r\n", "\n").split("\n").map(function (_e, we) {
    return Se.default.createElement(cve, {
      videoScale: si,
      isDual: ku,
      key: [_e, we].join(),
      line: _e,
      lineIndex: we,
      subConfig: {
        subFontSize: t,
        subColor: a,
        subBackColor: i,
        subBackColorHover: u,
        subColorHover: l,
        subBold: c,
        subScale: d,
        subOutlineSize: m,
        subOutlineColor: h,
        targetLang: Zr,
        sourceLang: We,
        subZIndex: g,
        subSrtScale: S,
        firstSubColor: O,
        firstSubFontface: C,
        secondSubFontface: _,
        secondSubColor: T,
        subOutputPath: q,
        maxChunkChars: M,
        maxChunkEncodeChars: B
      }
    });
  }));
}
var fve = "@mpv-easy/translate",
  pve = _objectSpread(_objectSpread({}, Ku), Tm),
  WMe = function WMe(e, t) {
    return {
      name: fve,
      defaultConfig: pve,
      create: function create() {},
      destroy: function destroy() {}
    };
  };
var Vu = J(_t());
var _Ku$Tm$sU$subScale$su = _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, Ku), Tm), sU("mpv-easy-translate", {
    "sub-color": {
      type: "color",
      key: "subColor"
    },
    "sub-back-color": {
      type: "color",
      key: "subBackColor"
    },
    "sub-back-color-hover": {
      type: "color",
      key: "subBackColorHover"
    },
    "sub-color-hover": {
      type: "color",
      key: "subColorHover"
    },
    "sub-bold": {
      type: "boolean",
      key: "subBold"
    },
    "sub-outline-size": {
      type: "number",
      key: "subOutlineSize"
    },
    "sub-outline-color": {
      type: "color",
      key: "subOutlineColor"
    },
    "sub-zindex": {
      type: "number",
      key: "subZIndex"
    },
    "tooltip-font-size": {
      type: "number",
      key: "tooltioFontSize"
    },
    "tooltip-color": {
      type: "color",
      key: "tooltipColor"
    },
    "tooltip-back-color": {
      type: "color",
      key: "tooltipBackColor"
    },
    "tooltip-scale": {
      type: "number",
      key: "tooltipScale"
    },
    "tooltip-bold": {
      type: "boolean",
      key: "tooltipBold"
    },
    "tooltip-outline-size": {
      type: "number",
      key: "tooltipOutlineSize"
    },
    "tooltip-outline-color": {
      type: "color",
      key: "tooltipOutlineColor"
    },
    "tooltip-max-width": {
      type: "number",
      key: "tooltipMaxWidth"
    },
    "tooltip-zindex": {
      type: "number",
      key: "tooltipZIndex"
    },
    "tooltip-left": {
      type: "number",
      key: "tooltipLeft"
    },
    "tooltip-bottom": {
      type: "number",
      key: "tooltipBottom"
    },
    "target-lang": {
      type: "string",
      key: "targetLang"
    },
    "source-lang": {
      type: "string",
      key: "sourceLang"
    },
    "sub-srt-scale": {
      type: "number",
      key: "subSrtScale"
    },
    "first-sub-color": {
      type: "string",
      key: "firstSubColor"
    },
    "second-sub-color": {
      type: "string",
      key: "secondSubColor"
    },
    "first-sub-fontface": {
      type: "string",
      key: "firstSubFontface"
    },
    "second-sub-fontface": {
      type: "string",
      key: "secondSubFontface"
    },
    "sub-output-path": {
      type: "string",
      key: "subOutputPath"
    },
    "max-chunk-chars": {
      type: "number",
      key: "maxChunkChars"
    },
    "max-chunk-encode-chars": {
      type: "number",
      key: "maxChunkEncodeChars"
    }
  })), {}, {
    subScale: ei("sub-scale", 1),
    subFontSize: ei("sub-font-size", 38)
  }),
  dve = _Ku$Tm$sU$subScale$su.subFontSize,
  mve = _Ku$Tm$sU$subScale$su.subColor,
  vve = _Ku$Tm$sU$subScale$su.subBackColor,
  hve = _Ku$Tm$sU$subScale$su.subBackColorHover,
  gve = _Ku$Tm$sU$subScale$su.subColorHover,
  yve = _Ku$Tm$sU$subScale$su.subBold,
  bve = _Ku$Tm$sU$subScale$su.subScale,
  xve = _Ku$Tm$sU$subScale$su.subOutlineSize,
  Sve = _Ku$Tm$sU$subScale$su.subOutlineColor,
  Eve = _Ku$Tm$sU$subScale$su.subZIndex,
  Tve = _Ku$Tm$sU$subScale$su.targetLang,
  qve = _Ku$Tm$sU$subScale$su.sourceLang,
  _ve = _Ku$Tm$sU$subScale$su.tooltioFontSize,
  Ave = _Ku$Tm$sU$subScale$su.tooltipColor,
  Ove = _Ku$Tm$sU$subScale$su.tooltipBackColor,
  Cve = _Ku$Tm$sU$subScale$su.tooltipScale,
  Rve = _Ku$Tm$sU$subScale$su.tooltipBold,
  Nve = _Ku$Tm$sU$subScale$su.tooltipOutlineSize,
  wve = _Ku$Tm$sU$subScale$su.tooltipOutlineColor,
  Mve = _Ku$Tm$sU$subScale$su.tooltipMaxWidth,
  Dve = _Ku$Tm$sU$subScale$su.tooltipZIndex,
  Bve = _Ku$Tm$sU$subScale$su.tooltipLeft,
  Ive = _Ku$Tm$sU$subScale$su.tooltipBottom,
  Pve = _Ku$Tm$sU$subScale$su.firstSubColor,
  Uve = _Ku$Tm$sU$subScale$su.secondSubColor,
  zve = _Ku$Tm$sU$subScale$su.firstSubFontface,
  Lve = _Ku$Tm$sU$subScale$su.secondSubFontface,
  jve = _Ku$Tm$sU$subScale$su.subOutputPath,
  Hve = _Ku$Tm$sU$subScale$su.maxChunkChars,
  Fve = _Ku$Tm$sU$subScale$su.maxChunkEncodeChars;
function Gve() {
  var e = wU("mouse-pos")[0];
  return Vu.default.createElement(Vu.default.Fragment, null, Vu.default.createElement(RU, {
    mousePos: e,
    zIndex: Dve,
    maxWidth: Mve,
    backgroundColor: Ove,
    fontSize: _ve * Cve,
    color: Ave,
    fontWeight: Rve ? "bold" : "normal",
    borderColor: wve,
    borderSize: Nve,
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }), Vu.default.createElement(fz, {
    zIndex: Eve,
    subFontSize: dve,
    subScale: bve,
    subColor: mve,
    subBold: yve,
    subOutlineSize: xve,
    subOutlineColor: Sve,
    sourceLang: qve,
    targetLang: Tve,
    subBackColor: vve,
    subBackColorHover: hve,
    subColorHover: gve,
    left: Bve,
    bottom: Ive,
    firstSubColor: Pve,
    secondSubColor: Uve,
    firstSubFontface: zve,
    secondSubFontface: Lve,
    subOutputPath: jve,
    maxChunkChars: Hve,
    maxChunkEncodeChars: Fve
  }));
}
nz(Vu.default.createElement(Gve, null));
/*! Bundled license information:

ieee754/index.js:
  (*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> *)

buffer/index.js:
  (*!
   * The buffer module from node.js, for the browser.
   *
   * @author   Feross Aboukhadijeh <https://feross.org>
   * @license  MIT
   *)

react/cjs/react.production.js:
  (**
   * @license React
   * react.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

scheduler/cjs/scheduler.production.js:
  (**
   * @license React
   * scheduler.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-reconciler/cjs/react-reconciler.production.js:
  (**
   * @license React
   * react-reconciler.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-reconciler/cjs/react-reconciler-constants.production.js:
  (**
   * @license React
   * react-reconciler-constants.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

lodash-es/lodash.js:
  (**
   * @license
   * Lodash (Custom Build) <https://lodash.com/>
   * Build: `lodash modularize exports="es" --repo lodash/lodash#4.18.1 -o ./`
   * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
   * Released under MIT license <https://lodash.com/license>
   * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
   * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
   *)
*/