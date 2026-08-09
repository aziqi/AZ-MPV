"use strict";

var _excluded = ["text"],
  _excluded2 = ["mousePos"];
var _Lt$console;
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
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n2 = 0, F = function F() {}; return { s: F, n: function n() { return _n2 >= r.length ? { done: !0 } : { done: !1, value: r[_n2++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t.return || t.return(); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var yj = Object.create;
var D1 = Object.defineProperty;
var xj = Object.getOwnPropertyDescriptor;
var bj = Object.getOwnPropertyNames;
var Ej = Object.getPrototypeOf,
  Sj = Object.prototype.hasOwnProperty;
var B1 = function (e) {
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
    return t || e((t = {
      exports: {}
    }).exports, t), t.exports;
  };
};
var Tj = function Tj(e, t, a, i) {
  if (t && _typeof(t) == "object" || typeof t == "function") {
    var _iterator = _createForOfIteratorHelper(bj(t)),
      _step;
    try {
      var _loop = function _loop() {
        var u = _step.value;
        !Sj.call(e, u) && u !== a && D1(e, u, {
          get: function get() {
            return t[u];
          },
          enumerable: !(i = xj(t, u)) || i.enumerable
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
  return a = e != null ? yj(Ej(e)) : {}, Tj(t || !e || !e.__esModule ? D1(a, "default", {
    value: e,
    enumerable: !0
  }) : a, e);
};
var ae = v(function (Wv, I1) {
  "use strict";

  var xs = function xs(e) {
    return e && e.Math === Math && e;
  };
  I1.exports = xs((typeof globalThis === "undefined" ? "undefined" : _typeof(globalThis)) == "object" && globalThis) || xs((typeof window === "undefined" ? "undefined" : _typeof(window)) == "object" && window) || xs((typeof self === "undefined" ? "undefined" : _typeof(self)) == "object" && self) || xs((typeof global === "undefined" ? "undefined" : _typeof(global)) == "object" && global) || xs(_typeof(Wv) == "object" && Wv) || function () {
    return this;
  }() || Function("return this")();
});
var W = v(function (Uve, P1) {
  "use strict";

  P1.exports = function (e) {
    try {
      return !!e();
    } catch (_unused) {
      return !0;
    }
  };
});
var Me = v(function (zve, U1) {
  "use strict";

  var Aj = W();
  U1.exports = !Aj(function () {
    return Object.defineProperty({}, 1, {
      get: function get() {
        return 7;
      }
    })[1] !== 7;
  });
});
var bs = v(function (Lve, z1) {
  "use strict";

  var Oj = W();
  z1.exports = !Oj(function () {
    var e = function () {}.bind();
    return typeof e != "function" || e.hasOwnProperty("prototype");
  });
});
var Ae = v(function (jve, L1) {
  "use strict";

  var Cj = bs(),
    ef = Function.prototype.call;
  L1.exports = Cj ? ef.bind(ef) : function () {
    return ef.apply(ef, arguments);
  };
});
var tf = v(function (F1) {
  "use strict";

  var j1 = {}.propertyIsEnumerable,
    H1 = Object.getOwnPropertyDescriptor,
    Rj = H1 && !j1.call({
      1: 2
    }, 1);
  F1.f = Rj ? function (t) {
    var a = H1(this, t);
    return !!a && a.enumerable;
  } : j1;
});
var zn = v(function (Fve, G1) {
  "use strict";

  G1.exports = function (e, t) {
    return {
      enumerable: !(e & 1),
      configurable: !(e & 2),
      writable: !(e & 4),
      value: t
    };
  };
});
var k = v(function (Gve, Y1) {
  "use strict";

  var K1 = bs(),
    V1 = Function.prototype,
    $v = V1.call,
    Nj = K1 && V1.bind.bind($v, $v);
  Y1.exports = K1 ? Nj : function (e) {
    return function () {
      return $v.apply(e, arguments);
    };
  };
});
var qr = v(function (Kve, Q1) {
  "use strict";

  var X1 = k(),
    wj = X1({}.toString),
    Mj = X1("".slice);
  Q1.exports = function (e) {
    return Mj(wj(e), 8, -1);
  };
});
var Es = v(function (Vve, Z1) {
  "use strict";

  var Dj = k(),
    Bj = W(),
    Ij = qr(),
    eh = Object,
    Pj = Dj("".split);
  Z1.exports = Bj(function () {
    return !eh("z").propertyIsEnumerable(0);
  }) ? function (e) {
    return Ij(e) === "String" ? Pj(e, "") : eh(e);
  } : eh;
});
var Ln = v(function (Yve, k1) {
  "use strict";

  k1.exports = function (e) {
    return e == null;
  };
});
var Pe = v(function (Xve, J1) {
  "use strict";

  var Uj = Ln(),
    zj = TypeError;
  J1.exports = function (e) {
    if (Uj(e)) throw new zj("Can't call method on " + e);
    return e;
  };
});
var jn = v(function (Qve, W1) {
  "use strict";

  var Lj = Es(),
    jj = Pe();
  W1.exports = function (e) {
    return Lj(jj(e));
  };
});
var Oe = v(function (Zve, $1) {
  "use strict";

  var th = (typeof document === "undefined" ? "undefined" : _typeof(document)) == "object" && document.all;
  $1.exports = _typeof(th) > "u" && th !== void 0 ? function (e) {
    return typeof e == "function" || e === th;
  } : function (e) {
    return typeof e == "function";
  };
});
var Ee = v(function (kve, eT) {
  "use strict";

  var Hj = Oe();
  eT.exports = function (e) {
    return _typeof(e) == "object" ? e !== null : Hj(e);
  };
});
var Pt = v(function (Jve, tT) {
  "use strict";

  var rh = ae(),
    Fj = Oe(),
    Gj = function Gj(e) {
      return Fj(e) ? e : void 0;
    };
  tT.exports = function (e, t) {
    return arguments.length < 2 ? Gj(rh[e]) : rh[e] && rh[e][t];
  };
});
var Aa = v(function (Wve, rT) {
  "use strict";

  var Kj = k();
  rT.exports = Kj({}.isPrototypeOf);
});
var Ei = v(function ($ve, iT) {
  "use strict";

  var Vj = ae(),
    nT = Vj.navigator,
    aT = nT && nT.userAgent;
  iT.exports = aT ? String(aT) : "";
});
var nf = v(function (ehe, fT) {
  "use strict";

  var cT = ae(),
    nh = Ei(),
    oT = cT.process,
    uT = cT.Deno,
    sT = oT && oT.versions || uT && uT.version,
    lT = sT && sT.v8,
    Lr,
    rf;
  lT && (Lr = lT.split("."), rf = Lr[0] > 0 && Lr[0] < 4 ? 1 : +(Lr[0] + Lr[1]));
  !rf && nh && (Lr = nh.match(/Edge\/(\d+)/), (!Lr || Lr[1] >= 74) && (Lr = nh.match(/Chrome\/(\d+)/), Lr && (rf = +Lr[1])));
  fT.exports = rf;
});
var ah = v(function (the, dT) {
  "use strict";

  var pT = nf(),
    Yj = W(),
    Xj = ae(),
    Qj = Xj.String;
  dT.exports = !!Object.getOwnPropertySymbols && !Yj(function () {
    var e = Symbol("symbol detection");
    return !Qj(e) || !(Object(e) instanceof Symbol) || !Symbol.sham && pT && pT < 41;
  });
});
var ih = v(function (rhe, mT) {
  "use strict";

  var Zj = ah();
  mT.exports = Zj && !Symbol.sham && _typeof(Symbol.iterator) == "symbol";
});
var Ss = v(function (nhe, vT) {
  "use strict";

  var kj = Pt(),
    Jj = Oe(),
    Wj = Aa(),
    $j = ih(),
    e5 = Object;
  vT.exports = $j ? function (e) {
    return _typeof(e) == "symbol";
  } : function (e) {
    var t = kj("Symbol");
    return Jj(t) && Wj(t.prototype, e5(e));
  };
});
var No = v(function (ahe, hT) {
  "use strict";

  var t5 = String;
  hT.exports = function (e) {
    try {
      return t5(e);
    } catch (_unused2) {
      return "Object";
    }
  };
});
var Mt = v(function (ihe, gT) {
  "use strict";

  var r5 = Oe(),
    n5 = No(),
    a5 = TypeError;
  gT.exports = function (e) {
    if (r5(e)) return e;
    throw new a5(n5(e) + " is not a function");
  };
});
var rn = v(function (ohe, yT) {
  "use strict";

  var i5 = Mt(),
    o5 = Ln();
  yT.exports = function (e, t) {
    var a = e[t];
    return o5(a) ? void 0 : i5(a);
  };
});
var bT = v(function (uhe, xT) {
  "use strict";

  var oh = Ae(),
    uh = Oe(),
    sh = Ee(),
    u5 = TypeError;
  xT.exports = function (e, t) {
    var a, i;
    if (t === "string" && uh(a = e.toString) && !sh(i = oh(a, e)) || uh(a = e.valueOf) && !sh(i = oh(a, e)) || t !== "string" && uh(a = e.toString) && !sh(i = oh(a, e))) return i;
    throw new u5("Can't convert object to primitive value");
  };
});
var Ke = v(function (she, ET) {
  "use strict";

  ET.exports = !1;
});
var af = v(function (lhe, TT) {
  "use strict";

  var ST = ae(),
    s5 = Object.defineProperty;
  TT.exports = function (e, t) {
    try {
      s5(ST, e, {
        value: t,
        configurable: !0,
        writable: !0
      });
    } catch (_unused3) {
      ST[e] = t;
    }
    return t;
  };
});
var of = v(function (che, AT) {
  "use strict";

  var l5 = Ke(),
    c5 = ae(),
    f5 = af(),
    qT = "__core-js_shared__",
    _T = AT.exports = c5[qT] || f5(qT, {});
  (_T.versions || (_T.versions = [])).push({
    version: "3.48.0",
    mode: l5 ? "pure" : "global",
    copyright: "© 2013–2025 Denis Pushkarev (zloirock.ru), 2025–2026 CoreJS Company (core-js.io). All rights reserved.",
    license: "https://github.com/zloirock/core-js/blob/v3.48.0/LICENSE",
    source: "https://github.com/zloirock/core-js"
  });
});
var uf = v(function (fhe, CT) {
  "use strict";

  var OT = of();
  CT.exports = function (e, t) {
    return OT[e] || (OT[e] = t || {});
  };
});
var dr = v(function (phe, RT) {
  "use strict";

  var p5 = Pe(),
    d5 = Object;
  RT.exports = function (e) {
    return d5(p5(e));
  };
});
var ot = v(function (dhe, NT) {
  "use strict";

  var m5 = k(),
    v5 = dr(),
    h5 = m5({}.hasOwnProperty);
  NT.exports = Object.hasOwn || function (t, a) {
    return h5(v5(t), a);
  };
});
var wo = v(function (mhe, wT) {
  "use strict";

  var g5 = k(),
    y5 = 0,
    x5 = Math.random(),
    b5 = g5(1.1.toString);
  wT.exports = function (e) {
    return "Symbol(" + (e === void 0 ? "" : e) + ")_" + b5(++y5 + x5, 36);
  };
});
var Ue = v(function (vhe, DT) {
  "use strict";

  var E5 = ae(),
    S5 = uf(),
    MT = ot(),
    T5 = wo(),
    q5 = ah(),
    _5 = ih(),
    Mo = E5.Symbol,
    lh = S5("wks"),
    A5 = _5 ? Mo.for || Mo : Mo && Mo.withoutSetter || T5;
  DT.exports = function (e) {
    return MT(lh, e) || (lh[e] = q5 && MT(Mo, e) ? Mo[e] : A5("Symbol." + e)), lh[e];
  };
});
var ch = v(function (hhe, PT) {
  "use strict";

  var O5 = Ae(),
    BT = Ee(),
    IT = Ss(),
    C5 = rn(),
    R5 = bT(),
    N5 = Ue(),
    w5 = TypeError,
    M5 = N5("toPrimitive");
  PT.exports = function (e, t) {
    if (!BT(e) || IT(e)) return e;
    var a = C5(e, M5),
      i;
    if (a) {
      if (t === void 0 && (t = "default"), i = O5(a, e, t), !BT(i) || IT(i)) return i;
      throw new w5("Can't convert object to primitive value");
    }
    return t === void 0 && (t = "number"), R5(e, t);
  };
});
var fh = v(function (ghe, UT) {
  "use strict";

  var D5 = ch(),
    B5 = Ss();
  UT.exports = function (e) {
    var t = D5(e, "string");
    return B5(t) ? t : t + "";
  };
});
var Ts = v(function (yhe, LT) {
  "use strict";

  var I5 = ae(),
    zT = Ee(),
    ph = I5.document,
    P5 = zT(ph) && zT(ph.createElement);
  LT.exports = function (e) {
    return P5 ? ph.createElement(e) : {};
  };
});
var dh = v(function (xhe, jT) {
  "use strict";

  var U5 = Me(),
    z5 = W(),
    L5 = Ts();
  jT.exports = !U5 && !z5(function () {
    return Object.defineProperty(L5("div"), "a", {
      get: function get() {
        return 7;
      }
    }).a !== 7;
  });
});
var Do = v(function (FT) {
  "use strict";

  var j5 = Me(),
    H5 = Ae(),
    F5 = tf(),
    G5 = zn(),
    K5 = jn(),
    V5 = fh(),
    Y5 = ot(),
    X5 = dh(),
    HT = Object.getOwnPropertyDescriptor;
  FT.f = j5 ? HT : function (t, a) {
    if (t = K5(t), a = V5(a), X5) try {
      return HT(t, a);
    } catch (_unused4) {}
    if (Y5(t, a)) return G5(!H5(F5.f, t, a), t[a]);
  };
});
var mh = v(function (Ehe, GT) {
  "use strict";

  var Q5 = Me(),
    Z5 = W();
  GT.exports = Q5 && Z5(function () {
    return Object.defineProperty(function () {}, "prototype", {
      value: 42,
      writable: !1
    }).prototype !== 42;
  });
});
var ze = v(function (She, KT) {
  "use strict";

  var k5 = Ee(),
    J5 = String,
    W5 = TypeError;
  KT.exports = function (e) {
    if (k5(e)) return e;
    throw new W5(J5(e) + " is not an object");
  };
});
var Yt = v(function (YT) {
  "use strict";

  var $5 = Me(),
    eH = dh(),
    tH = mh(),
    sf = ze(),
    VT = fh(),
    rH = TypeError,
    vh = Object.defineProperty,
    nH = Object.getOwnPropertyDescriptor,
    hh = "enumerable",
    gh = "configurable",
    yh = "writable";
  YT.f = $5 ? tH ? function (t, a, i) {
    if (sf(t), a = VT(a), sf(i), typeof t == "function" && a === "prototype" && "value" in i && yh in i && !i[yh]) {
      var u = nH(t, a);
      u && u[yh] && (t[a] = i.value, i = {
        configurable: gh in i ? i[gh] : u[gh],
        enumerable: hh in i ? i[hh] : u[hh],
        writable: !1
      });
    }
    return vh(t, a, i);
  } : vh : function (t, a, i) {
    if (sf(t), a = VT(a), sf(i), eH) try {
      return vh(t, a, i);
    } catch (_unused5) {}
    if ("get" in i || "set" in i) throw new rH("Accessors not supported");
    return "value" in i && (t[a] = i.value), t;
  };
});
var _r = v(function (qhe, XT) {
  "use strict";

  var aH = Me(),
    iH = Yt(),
    oH = zn();
  XT.exports = aH ? function (e, t, a) {
    return iH.f(e, t, oH(1, a));
  } : function (e, t, a) {
    return e[t] = a, e;
  };
});
var qs = v(function (_he, ZT) {
  "use strict";

  var xh = Me(),
    uH = ot(),
    QT = Function.prototype,
    sH = xh && Object.getOwnPropertyDescriptor,
    bh = uH(QT, "name"),
    lH = bh && function () {}.name === "something",
    cH = bh && (!xh || xh && sH(QT, "name").configurable);
  ZT.exports = {
    EXISTS: bh,
    PROPER: lH,
    CONFIGURABLE: cH
  };
});
var lf = v(function (Ahe, kT) {
  "use strict";

  var fH = k(),
    pH = Oe(),
    Eh = of(),
    dH = fH(Function.toString);
  pH(Eh.inspectSource) || (Eh.inspectSource = function (e) {
    return dH(e);
  });
  kT.exports = Eh.inspectSource;
});
var Sh = v(function (Ohe, WT) {
  "use strict";

  var mH = ae(),
    vH = Oe(),
    JT = mH.WeakMap;
  WT.exports = vH(JT) && /native code/.test(String(JT));
});
var cf = v(function (Che, eq) {
  "use strict";

  var hH = uf(),
    gH = wo(),
    $T = hH("keys");
  eq.exports = function (e) {
    return $T[e] || ($T[e] = gH(e));
  };
});
var _s = v(function (Rhe, tq) {
  "use strict";

  tq.exports = {};
});
var mr = v(function (Nhe, aq) {
  "use strict";

  var yH = Sh(),
    nq = ae(),
    xH = Ee(),
    bH = _r(),
    Th = ot(),
    qh = of(),
    EH = cf(),
    SH = _s(),
    rq = "Object already initialized",
    _h = nq.TypeError,
    TH = nq.WeakMap,
    ff,
    As,
    pf,
    qH = function qH(e) {
      return pf(e) ? As(e) : ff(e, {});
    },
    _H = function _H(e) {
      return function (t) {
        var a;
        if (!xH(t) || (a = As(t)).type !== e) throw new _h("Incompatible receiver, " + e + " required");
        return a;
      };
    };
  yH || qh.state ? (jr = qh.state || (qh.state = new TH()), jr.get = jr.get, jr.has = jr.has, jr.set = jr.set, ff = function ff(e, t) {
    if (jr.has(e)) throw new _h(rq);
    return t.facade = e, jr.set(e, t), t;
  }, As = function As(e) {
    return jr.get(e) || {};
  }, pf = function pf(e) {
    return jr.has(e);
  }) : (Si = EH("state"), SH[Si] = !0, ff = function ff(e, t) {
    if (Th(e, Si)) throw new _h(rq);
    return t.facade = e, bH(e, Si, t), t;
  }, As = function As(e) {
    return Th(e, Si) ? e[Si] : {};
  }, pf = function pf(e) {
    return Th(e, Si);
  });
  var jr, Si;
  aq.exports = {
    set: ff,
    get: As,
    has: pf,
    enforce: qH,
    getterFor: _H
  };
});
var Ch = v(function (whe, uq) {
  "use strict";

  var Oh = k(),
    AH = W(),
    OH = Oe(),
    df = ot(),
    Ah = Me(),
    CH = qs().CONFIGURABLE,
    RH = lf(),
    oq = mr(),
    NH = oq.enforce,
    wH = oq.get,
    iq = String,
    mf = Object.defineProperty,
    MH = Oh("".slice),
    DH = Oh("".replace),
    BH = Oh([].join),
    IH = Ah && !AH(function () {
      return mf(function () {}, "length", {
        value: 8
      }).length !== 8;
    }),
    PH = String(String).split("String"),
    UH = uq.exports = function (e, t, a) {
      MH(iq(t), 0, 7) === "Symbol(" && (t = "[" + DH(iq(t), /^Symbol\(([^)]*)\).*$/, "$1") + "]"), a && a.getter && (t = "get " + t), a && a.setter && (t = "set " + t), (!df(e, "name") || CH && e.name !== t) && (Ah ? mf(e, "name", {
        value: t,
        configurable: !0
      }) : e.name = t), IH && a && df(a, "arity") && e.length !== a.arity && mf(e, "length", {
        value: a.arity
      });
      try {
        a && df(a, "constructor") && a.constructor ? Ah && mf(e, "prototype", {
          writable: !1
        }) : e.prototype && (e.prototype = void 0);
      } catch (_unused6) {}
      var i = NH(e);
      return df(i, "source") || (i.source = BH(PH, typeof t == "string" ? t : "")), e;
    };
  Function.prototype.toString = UH(function () {
    return OH(this) && wH(this).source || RH(this);
  }, "toString");
});
var Ut = v(function (Mhe, sq) {
  "use strict";

  var zH = Oe(),
    LH = Yt(),
    jH = Ch(),
    HH = af();
  sq.exports = function (e, t, a, i) {
    i || (i = {});
    var u = i.enumerable,
      l = i.name !== void 0 ? i.name : t;
    if (zH(a) && jH(a, l, i), i.global) u ? e[t] = a : HH(t, a);else {
      try {
        i.unsafe ? e[t] && (u = !0) : delete e[t];
      } catch (_unused7) {}
      u ? e[t] = a : LH.f(e, t, {
        value: a,
        enumerable: !1,
        configurable: !i.nonConfigurable,
        writable: !i.nonWritable
      });
    }
    return e;
  };
});
var cq = v(function (Dhe, lq) {
  "use strict";

  var FH = Math.ceil,
    GH = Math.floor;
  lq.exports = Math.trunc || function (t) {
    var a = +t;
    return (a > 0 ? GH : FH)(a);
  };
});
var Xt = v(function (Bhe, fq) {
  "use strict";

  var KH = cq();
  fq.exports = function (e) {
    var t = +e;
    return t !== t || t === 0 ? 0 : KH(t);
  };
});
var Os = v(function (Ihe, pq) {
  "use strict";

  var VH = Xt(),
    YH = Math.max,
    XH = Math.min;
  pq.exports = function (e, t) {
    var a = VH(e);
    return a < 0 ? YH(a + t, 0) : XH(a, t);
  };
});
var Ar = v(function (Phe, dq) {
  "use strict";

  var QH = Xt(),
    ZH = Math.min;
  dq.exports = function (e) {
    var t = QH(e);
    return t > 0 ? ZH(t, 9007199254740991) : 0;
  };
});
var nn = v(function (Uhe, mq) {
  "use strict";

  var kH = Ar();
  mq.exports = function (e) {
    return kH(e.length);
  };
});
var Rh = v(function (zhe, hq) {
  "use strict";

  var JH = jn(),
    WH = Os(),
    $H = nn(),
    vq = function vq(e) {
      return function (t, a, i) {
        var u = JH(t),
          l = $H(u);
        if (l === 0) return !e && -1;
        var c = WH(i, l),
          d;
        if (e && a !== a) {
          for (; l > c;) if (d = u[c++], d !== d) return !0;
        } else for (; l > c; c++) if ((e || c in u) && u[c] === a) return e || c || 0;
        return !e && -1;
      };
    };
  hq.exports = {
    includes: vq(!0),
    indexOf: vq(!1)
  };
});
var wh = v(function (Lhe, yq) {
  "use strict";

  var eF = k(),
    Nh = ot(),
    tF = jn(),
    rF = Rh().indexOf,
    nF = _s(),
    gq = eF([].push);
  yq.exports = function (e, t) {
    var a = tF(e),
      i = 0,
      u = [],
      l;
    for (l in a) !Nh(nF, l) && Nh(a, l) && gq(u, l);
    for (; t.length > i;) Nh(a, l = t[i++]) && (~rF(u, l) || gq(u, l));
    return u;
  };
});
var vf = v(function (jhe, xq) {
  "use strict";

  xq.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"];
});
var Cs = v(function (bq) {
  "use strict";

  var aF = wh(),
    iF = vf(),
    oF = iF.concat("length", "prototype");
  bq.f = Object.getOwnPropertyNames || function (t) {
    return aF(t, oF);
  };
});
var Mh = v(function (Eq) {
  "use strict";

  Eq.f = Object.getOwnPropertySymbols;
});
var Tq = v(function (Ghe, Sq) {
  "use strict";

  var uF = Pt(),
    sF = k(),
    lF = Cs(),
    cF = Mh(),
    fF = ze(),
    pF = sF([].concat);
  Sq.exports = uF("Reflect", "ownKeys") || function (t) {
    var a = lF.f(fF(t)),
      i = cF.f;
    return i ? pF(a, i(t)) : a;
  };
});
var hf = v(function (Khe, _q) {
  "use strict";

  var qq = ot(),
    dF = Tq(),
    mF = Do(),
    vF = Yt();
  _q.exports = function (e, t, a) {
    for (var i = dF(t), u = vF.f, l = mF.f, c = 0; c < i.length; c++) {
      var d = i[c];
      !qq(e, d) && !(a && qq(a, d)) && u(e, d, l(t, d));
    }
  };
});
var Ns = v(function (Vhe, Aq) {
  "use strict";

  var hF = W(),
    gF = Oe(),
    yF = /#|\.prototype\./,
    Rs = function Rs(e, t) {
      var a = bF[xF(e)];
      return a === SF ? !0 : a === EF ? !1 : gF(t) ? hF(t) : !!t;
    },
    xF = Rs.normalize = function (e) {
      return String(e).replace(yF, ".").toLowerCase();
    },
    bF = Rs.data = {},
    EF = Rs.NATIVE = "N",
    SF = Rs.POLYFILL = "P";
  Aq.exports = Rs;
});
var P = v(function (Yhe, Oq) {
  "use strict";

  var gf = ae(),
    TF = Do().f,
    qF = _r(),
    _F = Ut(),
    AF = af(),
    OF = hf(),
    CF = Ns();
  Oq.exports = function (e, t) {
    var a = e.target,
      i = e.global,
      u = e.stat,
      l,
      c,
      d,
      m,
      h,
      g;
    if (i ? c = gf : u ? c = gf[a] || AF(a, {}) : c = gf[a] && gf[a].prototype, c) for (d in t) {
      if (h = t[d], e.dontCallGetSet ? (g = TF(c, d), m = g && g.value) : m = c[d], l = CF(i ? d : a + (u ? "." : "#") + d, e.forced), !l && m !== void 0) {
        if (_typeof(h) == _typeof(m)) continue;
        OF(h, m);
      }
      (e.sham || m && m.sham) && qF(h, "sham", !0), _F(c, d, h, e);
    }
  };
});
var Bo = v(function (Xhe, Cq) {
  "use strict";

  var RF = qr(),
    NF = k();
  Cq.exports = function (e) {
    if (RF(e) === "Function") return NF(e);
  };
});
var Oa = v(function (Qhe, Nq) {
  "use strict";

  var Rq = Bo(),
    wF = Mt(),
    MF = bs(),
    DF = Rq(Rq.bind);
  Nq.exports = function (e, t) {
    return wF(e), t === void 0 ? e : MF ? DF(e, t) : function () {
      return e.apply(t, arguments);
    };
  };
});
var Dh = v(function (Zhe, wq) {
  "use strict";

  var BF = qr();
  wq.exports = Array.isArray || function (t) {
    return BF(t) === "Array";
  };
});
var yf = v(function (khe, Dq) {
  "use strict";

  var IF = Ue(),
    PF = IF("toStringTag"),
    Mq = {};
  Mq[PF] = "z";
  Dq.exports = String(Mq) === "[object z]";
});
var Ti = v(function (Jhe, Bq) {
  "use strict";

  var UF = yf(),
    zF = Oe(),
    xf = qr(),
    LF = Ue(),
    jF = LF("toStringTag"),
    HF = Object,
    FF = xf(function () {
      return arguments;
    }()) === "Arguments",
    GF = function GF(e, t) {
      try {
        return e[t];
      } catch (_unused8) {}
    };
  Bq.exports = UF ? xf : function (e) {
    var t, a, i;
    return e === void 0 ? "Undefined" : e === null ? "Null" : typeof (a = GF(t = HF(e), jF)) == "string" ? a : FF ? xf(t) : (i = xf(t)) === "Object" && zF(t.callee) ? "Arguments" : i;
  };
});
var Ms = v(function (Whe, Lq) {
  "use strict";

  var KF = k(),
    VF = W(),
    Iq = Oe(),
    YF = Ti(),
    XF = Pt(),
    QF = lf(),
    Pq = function Pq() {},
    Uq = XF("Reflect", "construct"),
    Bh = /^\s*(?:class|function)\b/,
    ZF = KF(Bh.exec),
    kF = !Bh.test(Pq),
    ws = function ws(t) {
      if (!Iq(t)) return !1;
      try {
        return Uq(Pq, [], t), !0;
      } catch (_unused9) {
        return !1;
      }
    },
    zq = function zq(t) {
      if (!Iq(t)) return !1;
      switch (YF(t)) {
        case "AsyncFunction":
        case "GeneratorFunction":
        case "AsyncGeneratorFunction":
          return !1;
      }
      try {
        return kF || !!ZF(Bh, QF(t));
      } catch (_unused0) {
        return !0;
      }
    };
  zq.sham = !0;
  Lq.exports = !Uq || VF(function () {
    var e;
    return ws(ws.call) || !ws(Object) || !ws(function () {
      e = !0;
    }) || e;
  }) ? zq : ws;
});
var Gq = v(function ($he, Fq) {
  "use strict";

  var jq = Dh(),
    JF = Ms(),
    WF = Ee(),
    $F = Ue(),
    e7 = $F("species"),
    Hq = Array;
  Fq.exports = function (e) {
    var t;
    return jq(e) && (t = e.constructor, JF(t) && (t === Hq || jq(t.prototype)) ? t = void 0 : WF(t) && (t = t[e7], t === null && (t = void 0))), t === void 0 ? Hq : t;
  };
});
var Vq = v(function (ege, Kq) {
  "use strict";

  var t7 = Gq();
  Kq.exports = function (e, t) {
    return new (t7(e))(t === 0 ? 0 : t);
  };
});
var bf = v(function (tge, Yq) {
  "use strict";

  var r7 = Me(),
    n7 = Yt(),
    a7 = zn();
  Yq.exports = function (e, t, a) {
    r7 ? n7.f(e, t, a7(0, a)) : e[t] = a;
  };
});
var qi = v(function (rge, Qq) {
  "use strict";

  var i7 = Oa(),
    o7 = Es(),
    u7 = dr(),
    s7 = nn(),
    Xq = Vq(),
    Ih = bf(),
    Ca = function Ca(e) {
      var t = e === 1,
        a = e === 2,
        i = e === 3,
        u = e === 4,
        l = e === 6,
        c = e === 7,
        d = e === 5 || l;
      return function (m, h, g) {
        for (var x = u7(m), b = o7(x), E = s7(b), A = i7(h, g), C = 0, O = 0, T = t ? Xq(m, E) : a || c ? Xq(m, 0) : void 0, q, D; E > C; C++) if ((d || C in b) && (q = b[C], D = A(q, C, x), e)) if (t) Ih(T, C, D);else if (D) switch (e) {
          case 3:
            return !0;
          case 5:
            return q;
          case 6:
            return C;
          case 2:
            Ih(T, O++, q);
        } else switch (e) {
          case 4:
            return !1;
          case 7:
            Ih(T, O++, q);
        }
        return l ? -1 : i || u ? u : T;
      };
    };
  Qq.exports = {
    forEach: Ca(0),
    map: Ca(1),
    filter: Ca(2),
    some: Ca(3),
    every: Ca(4),
    find: Ca(5),
    findIndex: Ca(6),
    filterReject: Ca(7)
  };
});
var Ef = v(function (nge, Zq) {
  "use strict";

  var l7 = W();
  Zq.exports = function (e, t) {
    var a = [][e];
    return !!a && l7(function () {
      a.call(null, t || function () {
        return 1;
      }, 1);
    });
  };
});
var kq = v(function () {
  "use strict";

  var c7 = P(),
    f7 = qi().every,
    p7 = Ef(),
    d7 = p7("every");
  c7({
    target: "Array",
    proto: !0,
    forced: !d7
  }, {
    every: function every(t) {
      return f7(this, t, arguments.length > 1 ? arguments[1] : void 0);
    }
  });
});
var Qt = v(function (oge, Jq) {
  "use strict";

  var m7 = ae(),
    v7 = k();
  Jq.exports = function (e, t) {
    return v7(m7[e].prototype[t]);
  };
});
var $q = v(function (uge, Wq) {
  "use strict";

  kq();
  var h7 = Qt();
  Wq.exports = h7("Array", "every");
});
var t2 = v(function (sge, e2) {
  "use strict";

  var g7 = $q();
  e2.exports = g7;
});
var Ph = v(function (lge, n2) {
  "use strict";

  var y7 = dr(),
    r2 = Os(),
    x7 = nn();
  n2.exports = function (t) {
    for (var a = y7(this), i = x7(a), u = arguments.length, l = r2(u > 1 ? arguments[1] : void 0, i), c = u > 2 ? arguments[2] : void 0, d = c === void 0 ? i : r2(c, i); d > l;) a[l++] = t;
    return a;
  };
});
var Ds = v(function (cge, a2) {
  "use strict";

  var b7 = wh(),
    E7 = vf();
  a2.exports = Object.keys || function (t) {
    return b7(t, E7);
  };
});
var o2 = v(function (i2) {
  "use strict";

  var S7 = Me(),
    T7 = mh(),
    q7 = Yt(),
    _7 = ze(),
    A7 = jn(),
    O7 = Ds();
  i2.f = S7 && !T7 ? Object.defineProperties : function (t, a) {
    _7(t);
    for (var i = A7(a), u = O7(a), l = u.length, c = 0, d; l > c;) q7.f(t, d = u[c++], i[d]);
    return t;
  };
});
var Uh = v(function (pge, u2) {
  "use strict";

  var C7 = Pt();
  u2.exports = C7("document", "documentElement");
});
var Ra = v(function (dge, m2) {
  "use strict";

  var R7 = ze(),
    N7 = o2(),
    s2 = vf(),
    w7 = _s(),
    M7 = Uh(),
    D7 = Ts(),
    B7 = cf(),
    l2 = ">",
    c2 = "<",
    Lh = "prototype",
    jh = "script",
    p2 = B7("IE_PROTO"),
    zh = function zh() {},
    d2 = function d2(e) {
      return c2 + jh + l2 + e + c2 + "/" + jh + l2;
    },
    f2 = function f2(e) {
      e.write(d2("")), e.close();
      var t = e.parentWindow.Object;
      return e = null, t;
    },
    I7 = function I7() {
      var e = D7("iframe"),
        t = "java" + jh + ":",
        a;
      return e.style.display = "none", M7.appendChild(e), e.src = String(t), a = e.contentWindow.document, a.open(), a.write(d2("document.F=Object")), a.close(), a.F;
    },
    Sf,
    _Tf = function Tf() {
      try {
        Sf = new ActiveXObject("htmlfile");
      } catch (_unused1) {}
      _Tf = (typeof document === "undefined" ? "undefined" : _typeof(document)) < "u" ? document.domain && Sf ? f2(Sf) : I7() : f2(Sf);
      for (var e = s2.length; e--;) delete _Tf[Lh][s2[e]];
      return _Tf();
    };
  w7[p2] = !0;
  m2.exports = Object.create || function (t, a) {
    var i;
    return t !== null ? (zh[Lh] = R7(t), i = new zh(), zh[Lh] = null, i[p2] = t) : i = _Tf(), a === void 0 ? i : N7.f(i, a);
  };
});
var Hn = v(function (mge, v2) {
  "use strict";

  var P7 = Ue(),
    U7 = Ra(),
    z7 = Yt().f,
    Hh = P7("unscopables"),
    Fh = Array.prototype;
  Fh[Hh] === void 0 && z7(Fh, Hh, {
    configurable: !0,
    value: U7(null)
  });
  v2.exports = function (e) {
    Fh[Hh][e] = !0;
  };
});
var h2 = v(function () {
  "use strict";

  var L7 = P(),
    j7 = Ph(),
    H7 = Hn();
  L7({
    target: "Array",
    proto: !0
  }, {
    fill: j7
  });
  H7("fill");
});
var y2 = v(function (gge, g2) {
  "use strict";

  h2();
  var F7 = Qt();
  g2.exports = F7("Array", "fill");
});
var b2 = v(function (yge, x2) {
  "use strict";

  var G7 = y2();
  x2.exports = G7;
});
var S2 = v(function () {
  "use strict";

  var K7 = P(),
    V7 = qi().findIndex,
    Y7 = Hn(),
    Gh = "findIndex",
    E2 = !0;
  Gh in [] && Array(1)[Gh](function () {
    E2 = !1;
  });
  K7({
    target: "Array",
    proto: !0,
    forced: E2
  }, {
    findIndex: function findIndex(t) {
      return V7(this, t, arguments.length > 1 ? arguments[1] : void 0);
    }
  });
  Y7(Gh);
});
var q2 = v(function (Ege, T2) {
  "use strict";

  S2();
  var X7 = Qt();
  T2.exports = X7("Array", "findIndex");
});
var A2 = v(function (Sge, _2) {
  "use strict";

  var Q7 = q2();
  _2.exports = Q7;
});
var C2 = v(function () {
  "use strict";

  var Z7 = P(),
    k7 = qi().find,
    J7 = Hn(),
    Kh = "find",
    O2 = !0;
  Kh in [] && Array(1)[Kh](function () {
    O2 = !1;
  });
  Z7({
    target: "Array",
    proto: !0,
    forced: O2
  }, {
    find: function find(t) {
      return k7(this, t, arguments.length > 1 ? arguments[1] : void 0);
    }
  });
  J7(Kh);
});
var N2 = v(function (_ge, R2) {
  "use strict";

  C2();
  var W7 = Qt();
  R2.exports = W7("Array", "find");
});
var M2 = v(function (Age, w2) {
  "use strict";

  var $7 = N2();
  w2.exports = $7;
});
var Vh = v(function (Oge, B2) {
  "use strict";

  var eG = Oa(),
    tG = Es(),
    rG = dr(),
    nG = nn(),
    D2 = function D2(e) {
      var t = e === 1;
      return function (a, i, u) {
        for (var l = rG(a), c = tG(l), d = nG(c), m = eG(i, u), h, g; d-- > 0;) if (h = c[d], g = m(h, d, l), g) switch (e) {
          case 0:
            return h;
          case 1:
            return d;
        }
        return t ? -1 : void 0;
      };
    };
  B2.exports = {
    findLast: D2(0),
    findLastIndex: D2(1)
  };
});
var I2 = v(function () {
  "use strict";

  var aG = P(),
    iG = Vh().findLast,
    oG = Hn();
  aG({
    target: "Array",
    proto: !0
  }, {
    findLast: function findLast(t) {
      return iG(this, t, arguments.length > 1 ? arguments[1] : void 0);
    }
  });
  oG("findLast");
});
var U2 = v(function (Nge, P2) {
  "use strict";

  I2();
  var uG = Qt();
  P2.exports = uG("Array", "findLast");
});
var L2 = v(function (wge, z2) {
  "use strict";

  z2.exports = U2();
});
var Bs = v(function (Mge, j2) {
  "use strict";

  j2.exports = (typeof ArrayBuffer === "undefined" ? "undefined" : _typeof(ArrayBuffer)) < "u" && (typeof DataView === "undefined" ? "undefined" : _typeof(DataView)) < "u";
});
var Na = v(function (Dge, F2) {
  "use strict";

  var H2 = Ch(),
    sG = Yt();
  F2.exports = function (e, t, a) {
    return a.get && H2(a.get, t, {
      getter: !0
    }), a.set && H2(a.set, t, {
      setter: !0
    }), sG.f(e, t, a);
  };
});
var Is = v(function (Bge, G2) {
  "use strict";

  var lG = Ut();
  G2.exports = function (e, t, a) {
    for (var i in t) lG(e, i, t[i], a);
    return e;
  };
});
var wa = v(function (Ige, K2) {
  "use strict";

  var cG = Aa(),
    fG = TypeError;
  K2.exports = function (e, t) {
    if (cG(t, e)) return e;
    throw new fG("Incorrect invocation");
  };
});
var Yh = v(function (Pge, V2) {
  "use strict";

  var pG = Xt(),
    dG = Ar(),
    mG = RangeError;
  V2.exports = function (e) {
    if (e === void 0) return 0;
    var t = pG(e),
      a = dG(t);
    if (t !== a) throw new mG("Wrong length or index");
    return a;
  };
});
var X2 = v(function (Uge, Y2) {
  "use strict";

  Y2.exports = Math.sign || function (t) {
    var a = +t;
    return a === 0 || a !== a ? a : a < 0 ? -1 : 1;
  };
});
var k2 = v(function (zge, Z2) {
  "use strict";

  var vG = 2220446049250313e-31,
    Q2 = 1 / vG;
  Z2.exports = function (e) {
    return e + Q2 - Q2;
  };
});
var W2 = v(function (Lge, J2) {
  "use strict";

  var hG = X2(),
    gG = k2(),
    yG = Math.abs,
    xG = 2220446049250313e-31;
  J2.exports = function (e, t, a, i) {
    var u = +e,
      l = yG(u),
      c = hG(u);
    if (l < i) return c * gG(l / i / t) * i * t;
    var d = (1 + t / xG) * l,
      m = d - (d - l);
    return m > a || m !== m ? c * (1 / 0) : c * m;
  };
});
var e_ = v(function (jge, $2) {
  "use strict";

  var bG = W2(),
    EG = 11920928955078125e-23,
    SG = 34028234663852886e22,
    TG = 11754943508222875e-54;
  $2.exports = Math.fround || function (t) {
    return bG(t, EG, SG, TG);
  };
});
var r_ = v(function (Hge, t_) {
  "use strict";

  var qG = Array,
    _G = Math.abs,
    Fn = Math.pow,
    AG = Math.floor,
    OG = Math.log,
    CG = Math.LN2,
    RG = function RG(e, t, a) {
      var i = qG(a),
        u = a * 8 - t - 1,
        l = (1 << u) - 1,
        c = l >> 1,
        d = t === 23 ? Fn(2, -24) - Fn(2, -77) : 0,
        m = e < 0 || e === 0 && 1 / e < 0 ? 1 : 0,
        h = 0,
        g,
        x,
        b;
      for (e = _G(e), e !== e || e === 1 / 0 ? (x = e !== e ? 1 : 0, g = l) : (g = AG(OG(e) / CG), b = Fn(2, -g), e * b < 1 && (g--, b *= 2), g + c >= 1 ? e += d / b : e += d * Fn(2, 1 - c), e * b >= 2 && (g++, b /= 2), g + c >= l ? (x = 0, g = l) : g + c >= 1 ? (x = (e * b - 1) * Fn(2, t), g += c) : (x = e * Fn(2, c - 1) * Fn(2, t), g = 0)); t >= 8;) i[h++] = x & 255, x /= 256, t -= 8;
      for (g = g << t | x, u += t; u > 0;) i[h++] = g & 255, g /= 256, u -= 8;
      return i[h - 1] |= m * 128, i;
    },
    NG = function NG(e, t) {
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
        g += Fn(2, t), h -= l;
      }
      return (m ? -1 : 1) * g * Fn(2, h - t);
    };
  t_.exports = {
    pack: RG,
    unpack: NG
  };
});
var a_ = v(function (Fge, n_) {
  "use strict";

  var wG = W();
  n_.exports = !wG(function () {
    function e() {}
    return e.prototype.constructor = null, Object.getPrototypeOf(new e()) !== e.prototype;
  });
});
var _i = v(function (Gge, o_) {
  "use strict";

  var MG = ot(),
    DG = Oe(),
    BG = dr(),
    IG = cf(),
    PG = a_(),
    i_ = IG("IE_PROTO"),
    Xh = Object,
    UG = Xh.prototype;
  o_.exports = PG ? Xh.getPrototypeOf : function (e) {
    var t = BG(e);
    if (MG(t, i_)) return t[i_];
    var a = t.constructor;
    return DG(a) && t instanceof a ? a.prototype : t instanceof Xh ? UG : null;
  };
});
var Ps = v(function (Kge, u_) {
  "use strict";

  var zG = k(),
    LG = Mt();
  u_.exports = function (e, t, a) {
    try {
      return zG(LG(Object.getOwnPropertyDescriptor(e, t)[a]));
    } catch (_unused10) {}
  };
});
var Qh = v(function (Vge, s_) {
  "use strict";

  var jG = Ee();
  s_.exports = function (e) {
    return jG(e) || e === null;
  };
});
var c_ = v(function (Yge, l_) {
  "use strict";

  var HG = Qh(),
    FG = String,
    GG = TypeError;
  l_.exports = function (e) {
    if (HG(e)) return e;
    throw new GG("Can't set " + FG(e) + " as a prototype");
  };
});
var Ai = v(function (Xge, f_) {
  "use strict";

  var KG = Ps(),
    VG = Ee(),
    YG = Pe(),
    XG = c_();
  f_.exports = Object.setPrototypeOf || ("__proto__" in {} ? function () {
    var e = !1,
      t = {},
      a;
    try {
      a = KG(Object.prototype, "__proto__", "set"), a(t, []), e = t instanceof Array;
    } catch (_unused11) {}
    return function (u, l) {
      return YG(u), XG(l), VG(u) && (e ? a(u, l) : u.__proto__ = l), u;
    };
  }() : void 0);
});
var Us = v(function (Qge, p_) {
  "use strict";

  var QG = k();
  p_.exports = QG([].slice);
});
var zs = v(function (Zge, m_) {
  "use strict";

  var ZG = Oe(),
    kG = Ee(),
    d_ = Ai();
  m_.exports = function (e, t, a) {
    var i, u;
    return d_ && ZG(i = t.constructor) && i !== a && kG(u = i.prototype) && u !== a.prototype && d_(e, u), e;
  };
});
var Ma = v(function (kge, h_) {
  "use strict";

  var JG = Yt().f,
    WG = ot(),
    $G = Ue(),
    v_ = $G("toStringTag");
  h_.exports = function (e, t, a) {
    e && !a && (e = e.prototype), e && !WG(e, v_) && JG(e, v_, {
      configurable: !0,
      value: t
    });
  };
});
var Nf = v(function (Jge, D_) {
  "use strict";

  var Cf = ae(),
    $h = k(),
    Zh = Me(),
    e9 = Bs(),
    C_ = qs(),
    t9 = _r(),
    r9 = Na(),
    g_ = Is(),
    kh = W(),
    qf = wa(),
    n9 = Xt(),
    a9 = Ar(),
    Af = Yh(),
    i9 = e_(),
    R_ = r_(),
    o9 = _i(),
    y_ = Ai(),
    u9 = Ph(),
    s9 = Us(),
    l9 = zs(),
    c9 = hf(),
    N_ = Ma(),
    eg = mr(),
    f9 = C_.PROPER,
    x_ = C_.CONFIGURABLE,
    Po = "ArrayBuffer",
    Rf = "DataView",
    Uo = "prototype",
    p9 = "Wrong length",
    w_ = "Wrong index",
    b_ = eg.getterFor(Po),
    js = eg.getterFor(Rf),
    E_ = eg.set,
    Hr = Cf[Po],
    _vr = Hr,
    Io = _vr && _vr[Uo],
    an = Cf[Rf],
    Oi = an && an[Uo],
    S_ = Object.prototype,
    d9 = Cf.Array,
    Of = Cf.RangeError,
    m9 = $h(u9),
    v9 = $h([].reverse),
    M_ = R_.pack,
    T_ = R_.unpack,
    q_ = function q_(e) {
      return [e & 255];
    },
    __ = function __(e) {
      return [e & 255, e >> 8 & 255];
    },
    A_ = function A_(e) {
      return [e & 255, e >> 8 & 255, e >> 16 & 255, e >> 24 & 255];
    },
    O_ = function O_(e) {
      return e[3] << 24 | e[2] << 16 | e[1] << 8 | e[0];
    },
    h9 = function h9(e) {
      return M_(i9(e), 23, 4);
    },
    g9 = function g9(e) {
      return M_(e, 52, 8);
    },
    _f = function _f(e, t, a) {
      r9(e[Uo], t, {
        configurable: !0,
        get: function get() {
          return a(this)[t];
        }
      });
    },
    Da = function Da(e, t, a, i) {
      var u = js(e),
        l = Af(a),
        c = !!i;
      if (l + t > u.byteLength) throw new Of(w_);
      var d = u.bytes,
        m = l + u.byteOffset,
        h = s9(d, m, m + t);
      return c ? h : v9(h);
    },
    Ba = function Ba(e, t, a, i, u, l) {
      var c = js(e),
        d = Af(a),
        m = i(+u),
        h = !!l;
      if (d + t > c.byteLength) throw new Of(w_);
      for (var g = c.bytes, x = d + c.byteOffset, b = 0; b < t; b++) g[x + b] = m[h ? b : t - b - 1];
    };
  e9 ? (Jh = f9 && Hr.name !== Po, !kh(function () {
    Hr(1);
  }) || !kh(function () {
    new Hr(-1);
  }) || kh(function () {
    return new Hr(), new Hr(1.5), new Hr(NaN), Hr.length !== 1 || Jh && !x_;
  }) ? (_vr = function vr(t) {
    return qf(this, Io), l9(new Hr(Af(t)), this, _vr);
  }, _vr[Uo] = Io, Io.constructor = _vr, c9(_vr, Hr)) : Jh && x_ && t9(Hr, "name", Po), y_ && o9(Oi) !== S_ && y_(Oi, S_), Ls = new an(new _vr(2)), Wh = $h(Oi.setInt8), Ls.setInt8(0, 2147483648), Ls.setInt8(1, 2147483649), (Ls.getInt8(0) || !Ls.getInt8(1)) && g_(Oi, {
    setInt8: function setInt8(t, a) {
      Wh(this, t, a << 24 >> 24);
    },
    setUint8: function setUint8(t, a) {
      Wh(this, t, a << 24 >> 24);
    }
  }, {
    unsafe: !0
  })) : (_vr = function _vr(t) {
    qf(this, Io);
    var a = Af(t);
    E_(this, {
      type: Po,
      bytes: m9(d9(a), 0),
      byteLength: a
    }), Zh || (this.byteLength = a, this.detached = !1);
  }, Io = _vr[Uo], an = function an(t, a, i) {
    qf(this, Oi), qf(t, Io);
    var u = b_(t),
      l = u.byteLength,
      c = n9(a);
    if (c < 0 || c > l) throw new Of("Wrong offset");
    if (i = i === void 0 ? l - c : a9(i), c + i > l) throw new Of(p9);
    E_(this, {
      type: Rf,
      buffer: t,
      byteLength: i,
      byteOffset: c,
      bytes: u.bytes
    }), Zh || (this.buffer = t, this.byteLength = i, this.byteOffset = c);
  }, Oi = an[Uo], Zh && (_f(_vr, "byteLength", b_), _f(an, "buffer", js), _f(an, "byteLength", js), _f(an, "byteOffset", js)), g_(Oi, {
    getInt8: function getInt8(t) {
      return Da(this, 1, t)[0] << 24 >> 24;
    },
    getUint8: function getUint8(t) {
      return Da(this, 1, t)[0];
    },
    getInt16: function getInt16(t) {
      var a = Da(this, 2, t, arguments.length > 1 ? arguments[1] : !1);
      return (a[1] << 8 | a[0]) << 16 >> 16;
    },
    getUint16: function getUint16(t) {
      var a = Da(this, 2, t, arguments.length > 1 ? arguments[1] : !1);
      return a[1] << 8 | a[0];
    },
    getInt32: function getInt32(t) {
      return O_(Da(this, 4, t, arguments.length > 1 ? arguments[1] : !1));
    },
    getUint32: function getUint32(t) {
      return O_(Da(this, 4, t, arguments.length > 1 ? arguments[1] : !1)) >>> 0;
    },
    getFloat32: function getFloat32(t) {
      return T_(Da(this, 4, t, arguments.length > 1 ? arguments[1] : !1), 23);
    },
    getFloat64: function getFloat64(t) {
      return T_(Da(this, 8, t, arguments.length > 1 ? arguments[1] : !1), 52);
    },
    setInt8: function setInt8(t, a) {
      Ba(this, 1, t, q_, a);
    },
    setUint8: function setUint8(t, a) {
      Ba(this, 1, t, q_, a);
    },
    setInt16: function setInt16(t, a) {
      Ba(this, 2, t, __, a, arguments.length > 2 ? arguments[2] : !1);
    },
    setUint16: function setUint16(t, a) {
      Ba(this, 2, t, __, a, arguments.length > 2 ? arguments[2] : !1);
    },
    setInt32: function setInt32(t, a) {
      Ba(this, 4, t, A_, a, arguments.length > 2 ? arguments[2] : !1);
    },
    setUint32: function setUint32(t, a) {
      Ba(this, 4, t, A_, a, arguments.length > 2 ? arguments[2] : !1);
    },
    setFloat32: function setFloat32(t, a) {
      Ba(this, 4, t, h9, a, arguments.length > 2 ? arguments[2] : !1);
    },
    setFloat64: function setFloat64(t, a) {
      Ba(this, 8, t, g9, a, arguments.length > 2 ? arguments[2] : !1);
    }
  }));
  var Jh, Ls, Wh;
  N_(_vr, Po);
  N_(an, Rf);
  D_.exports = {
    ArrayBuffer: _vr,
    DataView: an
  };
});
var wf = v(function (Wge, I_) {
  "use strict";

  var y9 = Pt(),
    x9 = Na(),
    b9 = Ue(),
    E9 = Me(),
    B_ = b9("species");
  I_.exports = function (e) {
    var t = y9(e);
    E9 && t && !t[B_] && x9(t, B_, {
      configurable: !0,
      get: function get() {
        return this;
      }
    });
  };
});
var U_ = v(function () {
  "use strict";

  var S9 = P(),
    T9 = ae(),
    q9 = Nf(),
    _9 = wf(),
    tg = "ArrayBuffer",
    P_ = q9[tg],
    A9 = T9[tg];
  S9({
    global: !0,
    constructor: !0,
    forced: A9 !== P_
  }, {
    ArrayBuffer: P_
  });
  _9(tg);
});
var Q_ = v(function (tye, X_) {
  "use strict";

  var O9 = Bs(),
    ig = Me(),
    zt = ae(),
    H_ = Oe(),
    Bf = Ee(),
    Pa = ot(),
    og = Ti(),
    C9 = No(),
    R9 = _r(),
    rg = Ut(),
    N9 = Na(),
    w9 = Aa(),
    If = _i(),
    Lo = Ai(),
    M9 = Ue(),
    D9 = wo(),
    F_ = mr(),
    G_ = F_.enforce,
    B9 = F_.get,
    Mf = zt.Int8Array,
    ng = Mf && Mf.prototype,
    z_ = zt.Uint8ClampedArray,
    L_ = z_ && z_.prototype,
    on = Mf && If(Mf),
    Fr = ng && If(ng),
    I9 = Object.prototype,
    ug = zt.TypeError,
    j_ = M9("toStringTag"),
    ag = D9("TYPED_ARRAY_TAG"),
    Df = "TypedArrayConstructor",
    Gn = O9 && !!Lo && og(zt.opera) !== "Opera",
    K_ = !1,
    Zt,
    Ia,
    zo,
    Kn = {
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
    sg = {
      BigInt64Array: 8,
      BigUint64Array: 8
    },
    P9 = function P9(t) {
      if (!Bf(t)) return !1;
      var a = og(t);
      return a === "DataView" || Pa(Kn, a) || Pa(sg, a);
    },
    _V_ = function V_(e) {
      var t = If(e);
      if (Bf(t)) {
        var a = B9(t);
        return a && Pa(a, Df) ? a[Df] : _V_(t);
      }
    },
    Y_ = function Y_(e) {
      if (!Bf(e)) return !1;
      var t = og(e);
      return Pa(Kn, t) || Pa(sg, t);
    },
    U9 = function U9(e) {
      if (Y_(e)) return e;
      throw new ug("Target is not a typed array");
    },
    z9 = function z9(e) {
      if (H_(e) && (!Lo || w9(on, e))) return e;
      throw new ug(C9(e) + " is not a typed array constructor");
    },
    L9 = function L9(e, t, a, i) {
      if (ig) {
        if (a) for (var u in Kn) {
          var l = zt[u];
          if (l && Pa(l.prototype, e)) try {
            delete l.prototype[e];
          } catch (_unused12) {
            try {
              l.prototype[e] = t;
            } catch (_unused13) {}
          }
        }
        (!Fr[e] || a) && rg(Fr, e, a ? t : Gn && ng[e] || t, i);
      }
    },
    j9 = function j9(e, t, a) {
      var i, u;
      if (ig) {
        if (Lo) {
          if (a) {
            for (i in Kn) if (u = zt[i], u && Pa(u, e)) try {
              delete u[e];
            } catch (_unused14) {}
          }
          if (!on[e] || a) try {
            return rg(on, e, a ? t : Gn && on[e] || t);
          } catch (_unused15) {} else return;
        }
        for (i in Kn) u = zt[i], u && (!u[e] || a) && rg(u, e, t);
      }
    };
  for (Zt in Kn) Ia = zt[Zt], zo = Ia && Ia.prototype, zo ? G_(zo)[Df] = Ia : Gn = !1;
  for (Zt in sg) Ia = zt[Zt], zo = Ia && Ia.prototype, zo && (G_(zo)[Df] = Ia);
  if ((!Gn || !H_(on) || on === Function.prototype) && (on = function on() {
    throw new ug("Incorrect invocation");
  }, Gn)) for (Zt in Kn) zt[Zt] && Lo(zt[Zt], on);
  if ((!Gn || !Fr || Fr === I9) && (Fr = on.prototype, Gn)) for (Zt in Kn) zt[Zt] && Lo(zt[Zt].prototype, Fr);
  Gn && If(L_) !== Fr && Lo(L_, Fr);
  if (ig && !Pa(Fr, j_)) {
    K_ = !0, N9(Fr, j_, {
      configurable: !0,
      get: function get() {
        return Bf(this) ? this[ag] : void 0;
      }
    });
    for (Zt in Kn) zt[Zt] && R9(zt[Zt], ag, Zt);
  }
  X_.exports = {
    NATIVE_ARRAY_BUFFER_VIEWS: Gn,
    TYPED_ARRAY_TAG: K_ && ag,
    aTypedArray: U9,
    aTypedArrayConstructor: z9,
    exportTypedArrayMethod: L9,
    exportTypedArrayStaticMethod: j9,
    getTypedArrayConstructor: _V_,
    isView: P9,
    isTypedArray: Y_,
    TypedArray: on,
    TypedArrayPrototype: Fr
  };
});
var k_ = v(function () {
  "use strict";

  var H9 = P(),
    Z_ = Q_(),
    F9 = Z_.NATIVE_ARRAY_BUFFER_VIEWS;
  H9({
    target: "ArrayBuffer",
    stat: !0,
    forced: !F9
  }, {
    isView: Z_.isView
  });
});
var rA = v(function () {
  "use strict";

  var G9 = P(),
    cg = Bo(),
    K9 = W(),
    eA = Nf(),
    J_ = ze(),
    W_ = Os(),
    V9 = Ar(),
    fg = eA.ArrayBuffer,
    lg = eA.DataView,
    tA = lg.prototype,
    $_ = cg(fg.prototype.slice),
    Y9 = cg(tA.getUint8),
    X9 = cg(tA.setUint8),
    Q9 = K9(function () {
      return !new fg(2).slice(1, void 0).byteLength;
    });
  G9({
    target: "ArrayBuffer",
    proto: !0,
    unsafe: !0,
    forced: Q9
  }, {
    slice: function slice(t, a) {
      if ($_ && a === void 0) return $_(J_(this), t);
      for (var i = J_(this).byteLength, u = W_(t, i), l = W_(a === void 0 ? i : a, i), c = new fg(V9(l - u)), d = new lg(this), m = new lg(c), h = 0; u < l;) X9(m, h++, Y9(d, u++));
      return c;
    }
  });
});
var nA = v(function () {
  "use strict";

  var Z9 = P(),
    k9 = Nf(),
    J9 = Bs();
  Z9({
    global: !0,
    constructor: !0,
    forced: !J9
  }, {
    DataView: k9.DataView
  });
});
var aA = v(function () {
  "use strict";

  nA();
});
var pg = v(function (cye, uA) {
  "use strict";

  var oA = ae(),
    W9 = Ps(),
    $9 = qr(),
    iA = oA.ArrayBuffer,
    eK = oA.TypeError;
  uA.exports = iA && W9(iA.prototype, "byteLength", "get") || function (e) {
    if ($9(e) !== "ArrayBuffer") throw new eK("ArrayBuffer expected");
    return e.byteLength;
  };
});
var dg = v(function (fye, sA) {
  "use strict";

  var tK = ae(),
    rK = Bs(),
    nK = pg(),
    aK = tK.DataView;
  sA.exports = function (e) {
    if (!rK || nK(e) !== 0) return !1;
    try {
      return new aK(e), !1;
    } catch (_unused16) {
      return !0;
    }
  };
});
var cA = v(function () {
  "use strict";

  var iK = Me(),
    oK = Na(),
    uK = dg(),
    lA = ArrayBuffer.prototype;
  iK && !("detached" in lA) && oK(lA, "detached", {
    configurable: !0,
    get: function get() {
      return uK(this);
    }
  });
});
var pA = v(function (mye, fA) {
  "use strict";

  var sK = dg(),
    lK = TypeError;
  fA.exports = function (e) {
    if (sK(e)) throw new lK("ArrayBuffer is detached");
    return e;
  };
});
var Uf = v(function (vye, dA) {
  "use strict";

  var Hs = ae(),
    cK = Ei(),
    fK = qr(),
    Pf = function Pf(e) {
      return cK.slice(0, e.length) === e;
    };
  dA.exports = function () {
    return Pf("Bun/") ? "BUN" : Pf("Cloudflare-Workers") ? "CLOUDFLARE" : Pf("Deno/") ? "DENO" : Pf("Node.js/") ? "NODE" : Hs.Bun && typeof Bun.version == "string" ? "BUN" : Hs.Deno && _typeof(Deno.version) == "object" ? "DENO" : fK(Hs.process) === "process" ? "NODE" : Hs.window && Hs.document ? "BROWSER" : "REST";
  }();
});
var Fs = v(function (hye, mA) {
  "use strict";

  var pK = Uf();
  mA.exports = pK === "NODE";
});
var mg = v(function (gye, vA) {
  "use strict";

  var dK = ae(),
    mK = Fs();
  vA.exports = function (e) {
    if (mK) {
      try {
        return dK.process.getBuiltinModule(e);
      } catch (_unused17) {}
      try {
        return Function('return require("' + e + '")')();
      } catch (_unused18) {}
    }
  };
});
var zf = v(function (yye, gA) {
  "use strict";

  var vK = ae(),
    hK = W(),
    vg = nf(),
    hg = Uf(),
    hA = vK.structuredClone;
  gA.exports = !!hA && !hK(function () {
    if (hg === "DENO" && vg > 92 || hg === "NODE" && vg > 94 || hg === "BROWSER" && vg > 97) return !1;
    var e = new ArrayBuffer(8),
      t = hA(e, {
        transfer: [e]
      });
    return e.byteLength !== 0 || t.byteLength !== 8;
  });
});
var Eg = v(function (xye, bA) {
  "use strict";

  var bg = ae(),
    gK = mg(),
    yK = zf(),
    xK = bg.structuredClone,
    yA = bg.ArrayBuffer,
    Lf = bg.MessageChannel,
    xg = !1,
    gg,
    xA,
    jf,
    yg;
  if (yK) xg = function xg(e) {
    xK(e, {
      transfer: [e]
    });
  };else if (yA) try {
    Lf || (gg = gK("worker_threads"), gg && (Lf = gg.MessageChannel)), Lf && (xA = new Lf(), jf = new yA(2), yg = function yg(e) {
      xA.port1.postMessage(null, [e]);
    }, jf.byteLength === 2 && (yg(jf), jf.byteLength === 0 && (xg = yg)));
  } catch (_unused19) {}
  bA.exports = xg;
});
var Og = v(function (bye, OA) {
  "use strict";

  var qg = ae(),
    _g = k(),
    qA = Ps(),
    bK = Yh(),
    EK = pA(),
    SK = pg(),
    EA = Eg(),
    Sg = zf(),
    TK = qg.structuredClone,
    _A = qg.ArrayBuffer,
    Tg = qg.DataView,
    qK = Math.min,
    Ag = _A.prototype,
    AA = Tg.prototype,
    _K = _g(Ag.slice),
    SA = qA(Ag, "resizable", "get"),
    TA = qA(Ag, "maxByteLength", "get"),
    AK = _g(AA.getInt8),
    OK = _g(AA.setInt8);
  OA.exports = (Sg || EA) && function (e, t, a) {
    var i = SK(e),
      u = t === void 0 ? i : bK(t),
      l = !SA || !SA(e),
      c;
    if (EK(e), Sg && (e = TK(e, {
      transfer: [e]
    }), i === u && (a || l))) return e;
    if (i >= u && (!a || l)) c = _K(e, 0, u);else {
      var d = a && !l && TA ? {
        maxByteLength: TA(e)
      } : void 0;
      c = new _A(u, d);
      for (var m = new Tg(e), h = new Tg(c), g = qK(u, i), x = 0; x < g; x++) OK(h, x, AK(m, x));
    }
    return Sg || EA(e), c;
  };
});
var RA = v(function () {
  "use strict";

  var CK = P(),
    CA = Og();
  CA && CK({
    target: "ArrayBuffer",
    proto: !0
  }, {
    transfer: function transfer() {
      return CA(this, arguments.length ? arguments[0] : void 0, !0);
    }
  });
});
var wA = v(function () {
  "use strict";

  var RK = P(),
    NA = Og();
  NA && RK({
    target: "ArrayBuffer",
    proto: !0
  }, {
    transferToFixedLength: function transferToFixedLength() {
      return NA(this, arguments.length ? arguments[0] : void 0, !1);
    }
  });
});
var DA = v(function (_ye, MA) {
  "use strict";

  var NK = yf(),
    wK = Ti();
  MA.exports = NK ? {}.toString : function () {
    return "[object " + wK(this) + "]";
  };
});
var Vn = v(function () {
  "use strict";

  var MK = yf(),
    DK = Ut(),
    BK = DA();
  MK || DK(Object.prototype, "toString", BK, {
    unsafe: !0
  });
});
var ut = v(function (Cye, BA) {
  "use strict";

  var IK = ae();
  BA.exports = IK;
});
var PA = v(function (Rye, IA) {
  "use strict";

  U_();
  k_();
  rA();
  aA();
  cA();
  RA();
  wA();
  Vn();
  var PK = ut();
  IA.exports = PK.ArrayBuffer;
});
var zA = v(function (Nye, UA) {
  "use strict";

  var UK = PA();
  UA.exports = UK;
});
var LA = v(function () {
  "use strict";

  var zK = P(),
    LK = Vh().findLastIndex,
    jK = Hn();
  zK({
    target: "Array",
    proto: !0
  }, {
    findLastIndex: function findLastIndex(t) {
      return LK(this, t, arguments.length > 1 ? arguments[1] : void 0);
    }
  });
  jK("findLastIndex");
});
var HA = v(function (Dye, jA) {
  "use strict";

  LA();
  var HK = Qt();
  jA.exports = HK("Array", "findLastIndex");
});
var GA = v(function (Bye, FA) {
  "use strict";

  FA.exports = HA();
});
var VA = v(function (Iye, KA) {
  "use strict";

  var FK = qi().forEach,
    GK = Ef(),
    KK = GK("forEach");
  KA.exports = KK ? [].forEach : function (t) {
    return FK(this, t, arguments.length > 1 ? arguments[1] : void 0);
  };
});
var XA = v(function () {
  "use strict";

  var VK = P(),
    YA = VA();
  VK({
    target: "Array",
    proto: !0,
    forced: [].forEach !== YA
  }, {
    forEach: YA
  });
});
var ZA = v(function (zye, QA) {
  "use strict";

  XA();
  var YK = Qt();
  QA.exports = YK("Array", "forEach");
});
var JA = v(function (Lye, kA) {
  "use strict";

  var XK = ZA();
  kA.exports = XK;
});
var Re = v(function (jye, WA) {
  "use strict";

  var QK = Ti(),
    ZK = String;
  WA.exports = function (e) {
    if (QK(e) === "Symbol") throw new TypeError("Cannot convert a Symbol value to a string");
    return ZK(e);
  };
});
var Hf = v(function (Hye, tO) {
  "use strict";

  var Cg = k(),
    kK = Xt(),
    JK = Re(),
    WK = Pe(),
    $K = Cg("".charAt),
    $A = Cg("".charCodeAt),
    eV = Cg("".slice),
    eO = function eO(e) {
      return function (t, a) {
        var i = JK(WK(t)),
          u = kK(a),
          l = i.length,
          c,
          d;
        return u < 0 || u >= l ? e ? "" : void 0 : (c = $A(i, u), c < 55296 || c > 56319 || u + 1 === l || (d = $A(i, u + 1)) < 56320 || d > 57343 ? e ? $K(i, u) : c : e ? eV(i, u, u + 2) : (c - 55296 << 10) + (d - 56320) + 65536);
      };
    };
  tO.exports = {
    codeAt: eO(!1),
    charAt: eO(!0)
  };
});
var Mg = v(function (Fye, aO) {
  "use strict";

  var tV = W(),
    rV = Oe(),
    nV = Ee(),
    aV = Ra(),
    rO = _i(),
    iV = Ut(),
    oV = Ue(),
    uV = Ke(),
    wg = oV("iterator"),
    nO = !1,
    Yn,
    Rg,
    Ng;
  [].keys && (Ng = [].keys(), "next" in Ng ? (Rg = rO(rO(Ng)), Rg !== Object.prototype && (Yn = Rg)) : nO = !0);
  var sV = !nV(Yn) || tV(function () {
    var e = {};
    return Yn[wg].call(e) !== e;
  });
  sV ? Yn = {} : uV && (Yn = aV(Yn));
  rV(Yn[wg]) || iV(Yn, wg, function () {
    return this;
  });
  aO.exports = {
    IteratorPrototype: Yn,
    BUGGY_SAFARI_ITERATORS: nO
  };
});
var jo = v(function (Gye, iO) {
  "use strict";

  iO.exports = {};
});
var Dg = v(function (Kye, oO) {
  "use strict";

  var lV = Mg().IteratorPrototype,
    cV = Ra(),
    fV = zn(),
    pV = Ma(),
    dV = jo(),
    mV = function mV() {
      return this;
    };
  oO.exports = function (e, t, a, i) {
    var u = t + " Iterator";
    return e.prototype = cV(lV, {
      next: fV(+!i, a)
    }), pV(e, u, !1, !0), dV[u] = mV, e;
  };
});
var Kf = v(function (Vye, hO) {
  "use strict";

  var vV = P(),
    hV = Ae(),
    Ff = Ke(),
    mO = qs(),
    gV = Oe(),
    yV = Dg(),
    uO = _i(),
    sO = Ai(),
    xV = Ma(),
    bV = _r(),
    Bg = Ut(),
    EV = Ue(),
    lO = jo(),
    vO = Mg(),
    SV = mO.PROPER,
    TV = mO.CONFIGURABLE,
    cO = vO.IteratorPrototype,
    Gf = vO.BUGGY_SAFARI_ITERATORS,
    Gs = EV("iterator"),
    fO = "keys",
    Ks = "values",
    pO = "entries",
    dO = function dO() {
      return this;
    };
  hO.exports = function (e, t, a, i, u, l, c) {
    yV(a, t, i);
    var d = function d(T) {
        if (T === u && b) return b;
        if (!Gf && T && T in g) return g[T];
        switch (T) {
          case fO:
            return function () {
              return new a(this, T);
            };
          case Ks:
            return function () {
              return new a(this, T);
            };
          case pO:
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
      x = g[Gs] || g["@@iterator"] || u && g[u],
      b = !Gf && x || d(u),
      E = t === "Array" && g.entries || x,
      A,
      C,
      O;
    if (E && (A = uO(E.call(new e())), A !== Object.prototype && A.next && (!Ff && uO(A) !== cO && (sO ? sO(A, cO) : gV(A[Gs]) || Bg(A, Gs, dO)), xV(A, m, !0, !0), Ff && (lO[m] = dO))), SV && u === Ks && x && x.name !== Ks && (!Ff && TV ? bV(g, "name", Ks) : (h = !0, b = function b() {
      return hV(x, this);
    })), u) if (C = {
      values: d(Ks),
      keys: l ? b : d(fO),
      entries: d(pO)
    }, c) for (O in C) (Gf || h || !(O in g)) && Bg(g, O, C[O]);else vV({
      target: t,
      proto: !0,
      forced: Gf || h
    }, C);
    return (!Ff || c) && g[Gs] !== b && Bg(g, Gs, b, {
      name: u
    }), lO[t] = b, C;
  };
});
var Vs = v(function (Yye, gO) {
  "use strict";

  gO.exports = function (e, t) {
    return {
      value: e,
      done: t
    };
  };
});
var Ho = v(function () {
  "use strict";

  var qV = Hf().charAt,
    _V = Re(),
    xO = mr(),
    AV = Kf(),
    yO = Vs(),
    bO = "String Iterator",
    OV = xO.set,
    CV = xO.getterFor(bO);
  AV(String, "String", function (e) {
    OV(this, {
      type: bO,
      string: _V(e),
      index: 0
    });
  }, function () {
    var t = CV(this),
      a = t.string,
      i = t.index,
      u;
    return i >= a.length ? yO(void 0, !0) : (u = qV(a, i), t.index += u.length, yO(u, !1));
  });
});
var Ys = v(function (Zye, SO) {
  "use strict";

  var RV = Ae(),
    EO = ze(),
    NV = rn();
  SO.exports = function (e, t, a) {
    var i, u;
    EO(e);
    try {
      if (i = NV(e, "return"), !i) {
        if (t === "throw") throw a;
        return a;
      }
      i = RV(i, e);
    } catch (l) {
      u = !0, i = l;
    }
    if (t === "throw") throw a;
    if (u) throw i;
    return EO(i), a;
  };
});
var qO = v(function (kye, TO) {
  "use strict";

  var wV = ze(),
    MV = Ys();
  TO.exports = function (e, t, a, i) {
    try {
      return i ? t(wV(a)[0], a[1]) : t(a);
    } catch (u) {
      MV(e, "throw", u);
    }
  };
});
var Ig = v(function (Jye, _O) {
  "use strict";

  var DV = Ue(),
    BV = jo(),
    IV = DV("iterator"),
    PV = Array.prototype;
  _O.exports = function (e) {
    return e !== void 0 && (BV.Array === e || PV[IV] === e);
  };
});
var OO = v(function (Wye, AO) {
  "use strict";

  var UV = Me(),
    zV = Dh(),
    LV = TypeError,
    jV = Object.getOwnPropertyDescriptor,
    HV = UV && !function () {
      if (this !== void 0) return !0;
      try {
        Object.defineProperty([], "length", {
          writable: !1
        }).length = 1;
      } catch (e) {
        return e instanceof TypeError;
      }
    }();
  AO.exports = HV ? function (e, t) {
    if (zV(e) && !jV(e, "length").writable) throw new LV("Cannot set read only .length");
    return e.length = t;
  } : function (e, t) {
    return e.length = t;
  };
});
var Vf = v(function ($ye, RO) {
  "use strict";

  var FV = Ti(),
    CO = rn(),
    GV = Ln(),
    KV = jo(),
    VV = Ue(),
    YV = VV("iterator");
  RO.exports = function (e) {
    if (!GV(e)) return CO(e, YV) || CO(e, "@@iterator") || KV[FV(e)];
  };
});
var Pg = v(function (e0e, NO) {
  "use strict";

  var XV = Ae(),
    QV = Mt(),
    ZV = ze(),
    kV = No(),
    JV = Vf(),
    WV = TypeError;
  NO.exports = function (e, t) {
    var a = arguments.length < 2 ? JV(e) : t;
    if (QV(a)) return ZV(XV(a, e));
    throw new WV(kV(e) + " is not iterable");
  };
});
var BO = v(function (t0e, DO) {
  "use strict";

  var $V = Oa(),
    eY = Ae(),
    tY = dr(),
    rY = qO(),
    nY = Ig(),
    aY = Ms(),
    iY = nn(),
    wO = bf(),
    oY = OO(),
    uY = Pg(),
    sY = Vf(),
    MO = Array;
  DO.exports = function (t) {
    var a = tY(t),
      i = aY(this),
      u = arguments.length,
      l = u > 1 ? arguments[1] : void 0,
      c = l !== void 0;
    c && (l = $V(l, u > 2 ? arguments[2] : void 0));
    var d = sY(a),
      m = 0,
      h,
      g,
      x,
      b,
      E,
      A;
    if (d && !(this === MO && nY(d))) for (g = i ? new this() : [], b = uY(a, d), E = b.next; !(x = eY(E, b)).done; m++) A = c ? rY(b, l, [x.value, m], !0) : x.value, wO(g, m, A);else for (h = iY(a), g = i ? new this(h) : MO(h); h > m; m++) A = c ? l(a[m], m) : a[m], wO(g, m, A);
    return oY(g, m), g;
  };
});
var Yf = v(function (r0e, zO) {
  "use strict";

  var lY = Ue(),
    PO = lY("iterator"),
    UO = !1;
  try {
    IO = 0, Ug = {
      next: function next() {
        return {
          done: !!IO++
        };
      },
      return: function _return() {
        UO = !0;
      }
    }, Ug[PO] = function () {
      return this;
    }, Array.from(Ug, function () {
      throw 2;
    });
  } catch (_unused20) {}
  var IO, Ug;
  zO.exports = function (e, t) {
    try {
      if (!t && !UO) return !1;
    } catch (_unused21) {
      return !1;
    }
    var a = !1;
    try {
      var i = {};
      i[PO] = function () {
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
var LO = v(function () {
  "use strict";

  var cY = P(),
    fY = BO(),
    pY = Yf(),
    dY = !pY(function (e) {
      Array.from(e);
    });
  cY({
    target: "Array",
    stat: !0,
    forced: dY
  }, {
    from: fY
  });
});
var HO = v(function (i0e, jO) {
  "use strict";

  Ho();
  LO();
  var mY = ut();
  jO.exports = mY.Array.from;
});
var GO = v(function (o0e, FO) {
  "use strict";

  var vY = HO();
  FO.exports = vY;
});
var KO = v(function () {
  "use strict";

  var hY = P(),
    gY = qi().some,
    yY = Ef(),
    xY = yY("some");
  hY({
    target: "Array",
    proto: !0,
    forced: !xY
  }, {
    some: function some(t) {
      return gY(this, t, arguments.length > 1 ? arguments[1] : void 0);
    }
  });
});
var YO = v(function (l0e, VO) {
  "use strict";

  KO();
  var bY = Qt();
  VO.exports = bY("Array", "some");
});
var QO = v(function (c0e, XO) {
  "use strict";

  var EY = YO();
  XO.exports = EY;
});
var ZO = v(function () {
  "use strict";

  var SY = P(),
    TY = Rh().includes,
    qY = W(),
    _Y = Hn(),
    AY = qY(function () {
      return !Array(1).includes();
    });
  SY({
    target: "Array",
    proto: !0,
    forced: AY
  }, {
    includes: function includes(t) {
      return TY(this, t, arguments.length > 1 ? arguments[1] : void 0);
    }
  });
  _Y("includes");
});
var JO = v(function (d0e, kO) {
  "use strict";

  ZO();
  var OY = Qt();
  kO.exports = OY("Array", "includes");
});
var $O = v(function (m0e, WO) {
  "use strict";

  var CY = JO();
  WO.exports = CY;
});
var eC = v(function () {
  "use strict";

  var RY = P(),
    NY = dr(),
    wY = nn(),
    MY = Xt(),
    DY = Hn();
  RY({
    target: "Array",
    proto: !0
  }, {
    at: function at(t) {
      var a = NY(this),
        i = wY(a),
        u = MY(t),
        l = u >= 0 ? u : i + u;
      return l < 0 || l >= i ? void 0 : a[l];
    }
  });
  DY("at");
});
var rC = v(function (g0e, tC) {
  "use strict";

  eC();
  var BY = Qt();
  tC.exports = BY("Array", "at");
});
var aC = v(function (y0e, nC) {
  "use strict";

  var IY = rC();
  nC.exports = IY;
});
var Xs = v(function (x0e, iC) {
  "use strict";

  var PY = k();
  iC.exports = PY(1.1.valueOf);
});
var Qs = v(function (b0e, oC) {
  "use strict";

  oC.exports = "\t\n\x0B\f\r \xA0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF";
});
var Ci = v(function (E0e, sC) {
  "use strict";

  var UY = k(),
    zY = Pe(),
    LY = Re(),
    Lg = Qs(),
    uC = UY("".replace),
    jY = RegExp("^[" + Lg + "]+"),
    HY = RegExp("(^|[^" + Lg + "])[" + Lg + "]+$"),
    zg = function zg(e) {
      return function (t) {
        var a = LY(zY(t));
        return e & 1 && (a = uC(a, jY, "")), e & 2 && (a = uC(a, HY, "$1")), a;
      };
    };
  sC.exports = {
    start: zg(1),
    end: zg(2),
    trim: zg(3)
  };
});
var vC = v(function () {
  "use strict";

  var FY = P(),
    jg = Ke(),
    GY = Me(),
    fC = ae(),
    Hg = ut(),
    pC = k(),
    KY = Ns(),
    lC = ot(),
    VY = zs(),
    YY = Aa(),
    XY = Ss(),
    dC = ch(),
    QY = W(),
    ZY = Cs().f,
    kY = Do().f,
    JY = Yt().f,
    WY = Xs(),
    $Y = Ci().trim,
    Zs = "Number",
    Fo = fC[Zs],
    cC = Hg[Zs],
    Fg = Fo.prototype,
    eX = fC.TypeError,
    tX = pC("".slice),
    Xf = pC("".charCodeAt),
    rX = function rX(e) {
      var t = dC(e, "number");
      return typeof t == "bigint" ? t : nX(t);
    },
    nX = function nX(e) {
      var t = dC(e, "number"),
        a,
        i,
        u,
        l,
        c,
        d,
        m,
        h;
      if (XY(t)) throw new eX("Cannot convert a Symbol value to a number");
      if (typeof t == "string" && t.length > 2) {
        if (t = $Y(t), a = Xf(t, 0), a === 43 || a === 45) {
          if (i = Xf(t, 2), i === 88 || i === 120) return NaN;
        } else if (a === 48) {
          switch (Xf(t, 1)) {
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
          for (c = tX(t, 2), d = c.length, m = 0; m < d; m++) if (h = Xf(c, m), h < 48 || h > l) return NaN;
          return parseInt(c, u);
        }
      }
      return +t;
    },
    Gg = KY(Zs, !Fo(" 0o1") || !Fo("0b1") || Fo("+0x1")),
    aX = function aX(e) {
      return YY(Fg, e) && QY(function () {
        WY(e);
      });
    },
    _Qf = function Qf(t) {
      var a = arguments.length < 1 ? 0 : Fo(rX(t));
      return aX(this) ? VY(Object(a), this, _Qf) : a;
    };
  _Qf.prototype = Fg;
  Gg && !jg && (Fg.constructor = _Qf);
  FY({
    global: !0,
    constructor: !0,
    wrap: !0,
    forced: Gg
  }, {
    Number: _Qf
  });
  var mC = function mC(e, t) {
    for (var a = GY ? ZY(t) : "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","), i = 0, u; a.length > i; i++) lC(t, u = a[i]) && !lC(e, u) && JY(e, u, kY(t, u));
  };
  jg && cC && mC(Hg[Zs], cC);
  (Gg || jg) && mC(Hg[Zs], Fo);
});
var hC = v(function () {
  "use strict";

  var iX = P();
  iX({
    target: "Number",
    stat: !0,
    nonConfigurable: !0,
    nonWritable: !0
  }, {
    EPSILON: Math.pow(2, -52)
  });
});
var yC = v(function (A0e, gC) {
  "use strict";

  var oX = ae(),
    uX = oX.isFinite;
  gC.exports = Number.isFinite || function (t) {
    return typeof t == "number" && uX(t);
  };
});
var xC = v(function () {
  "use strict";

  var sX = P(),
    lX = yC();
  sX({
    target: "Number",
    stat: !0
  }, {
    isFinite: lX
  });
});
var Kg = v(function (R0e, bC) {
  "use strict";

  var cX = Ee(),
    fX = Math.floor;
  bC.exports = Number.isInteger || function (t) {
    return !cX(t) && isFinite(t) && fX(t) === t;
  };
});
var EC = v(function () {
  "use strict";

  var pX = P(),
    dX = Kg();
  pX({
    target: "Number",
    stat: !0
  }, {
    isInteger: dX
  });
});
var SC = v(function () {
  "use strict";

  var mX = P();
  mX({
    target: "Number",
    stat: !0
  }, {
    isNaN: function isNaN(t) {
      return t !== t;
    }
  });
});
var TC = v(function () {
  "use strict";

  var vX = P(),
    hX = Kg(),
    gX = Math.abs;
  vX({
    target: "Number",
    stat: !0
  }, {
    isSafeInteger: function isSafeInteger(t) {
      return hX(t) && gX(t) <= 9007199254740991;
    }
  });
});
var qC = v(function () {
  "use strict";

  var yX = P();
  yX({
    target: "Number",
    stat: !0,
    nonConfigurable: !0,
    nonWritable: !0
  }, {
    MAX_SAFE_INTEGER: 9007199254740991
  });
});
var _C = v(function () {
  "use strict";

  var xX = P();
  xX({
    target: "Number",
    stat: !0,
    nonConfigurable: !0,
    nonWritable: !0
  }, {
    MIN_SAFE_INTEGER: -9007199254740991
  });
});
var NC = v(function (j0e, RC) {
  "use strict";

  var CC = ae(),
    bX = W(),
    EX = k(),
    SX = Re(),
    TX = Ci().trim,
    qX = Qs(),
    _X = EX("".charAt),
    Zf = CC.parseFloat,
    AC = CC.Symbol,
    OC = AC && AC.iterator,
    AX = 1 / Zf(qX + "-0") !== -1 / 0 || OC && !bX(function () {
      Zf(Object(OC));
    });
  RC.exports = AX ? function (t) {
    var a = TX(SX(t)),
      i = Zf(a);
    return i === 0 && _X(a, 0) === "-" ? -0 : i;
  } : Zf;
});
var MC = v(function () {
  "use strict";

  var OX = P(),
    wC = NC();
  OX({
    target: "Number",
    stat: !0,
    forced: Number.parseFloat !== wC
  }, {
    parseFloat: wC
  });
});
var LC = v(function (G0e, zC) {
  "use strict";

  var PC = ae(),
    CX = W(),
    RX = k(),
    NX = Re(),
    wX = Ci().trim,
    DC = Qs(),
    ks = PC.parseInt,
    BC = PC.Symbol,
    IC = BC && BC.iterator,
    UC = /^[+-]?0x/i,
    MX = RX(UC.exec),
    DX = ks(DC + "08") !== 8 || ks(DC + "0x16") !== 22 || IC && !CX(function () {
      ks(Object(IC));
    });
  zC.exports = DX ? function (t, a) {
    var i = wX(NX(t));
    return ks(i, a >>> 0 || (MX(UC, i) ? 16 : 10));
  } : ks;
});
var HC = v(function () {
  "use strict";

  var BX = P(),
    jC = LC();
  BX({
    target: "Number",
    stat: !0,
    forced: Number.parseInt !== jC
  }, {
    parseInt: jC
  });
});
var Js = v(function (Y0e, FC) {
  "use strict";

  var IX = Xt(),
    PX = Re(),
    UX = Pe(),
    zX = RangeError;
  FC.exports = function (t) {
    var a = PX(UX(this)),
      i = "",
      u = IX(t);
    if (u < 0 || u === 1 / 0) throw new zX("Wrong number of repetitions");
    for (; u > 0; (u >>>= 1) && (a += a)) u & 1 && (i += a);
    return i;
  };
});
var KC = v(function (X0e, GC) {
  "use strict";

  var LX = Math.log,
    jX = Math.LOG10E;
  GC.exports = Math.log10 || function (t) {
    return LX(t) * jX;
  };
});
var ZC = v(function () {
  "use strict";

  var HX = P(),
    Yg = k(),
    FX = Xt(),
    GX = Xs(),
    KX = Js(),
    VX = KC(),
    Vg = W(),
    YX = RangeError,
    VC = String,
    XX = isFinite,
    QX = Math.abs,
    ZX = Math.floor,
    YC = Math.pow,
    kX = Math.round,
    un = Yg(1.1.toExponential),
    JX = Yg(KX),
    XC = Yg("".slice),
    QC = un(-69e-12, 4) === "-6.9000e-11" && un(1.255, 2) === "1.25e+0" && un(12345, 3) === "1.235e+4" && un(25, 0) === "3e+1",
    WX = function WX() {
      return Vg(function () {
        un(1, 1 / 0);
      }) && Vg(function () {
        un(1, -1 / 0);
      });
    },
    $X = function $X() {
      return !Vg(function () {
        un(1 / 0, 1 / 0), un(NaN, 1 / 0);
      });
    },
    eQ = !QC || !WX() || !$X();
  HX({
    target: "Number",
    proto: !0,
    forced: eQ
  }, {
    toExponential: function toExponential(t) {
      var a = GX(this);
      if (t === void 0) return un(a);
      var i = FX(t);
      if (!XX(a)) return String(a);
      if (i < 0 || i > 20) throw new YX("Incorrect fraction digits");
      if (QC) return un(a, i);
      var u = "",
        l,
        c,
        d,
        m;
      if (a < 0 && (u = "-", a = -a), a === 0) c = 0, l = JX("0", i + 1);else {
        var h = VX(a);
        c = ZX(h);
        var g = YC(10, c - i),
          x = kX(a / g);
        2 * a >= (2 * x + 1) * g && (x += 1), x >= YC(10, i + 1) && (x /= 10, c += 1), l = VC(x);
      }
      return i !== 0 && (l = XC(l, 0, 1) + "." + XC(l, 1)), c === 0 ? (d = "+", m = "0") : (d = c > 0 ? "+" : "-", m = VC(QX(c))), l += "e" + d + m, u + l;
    }
  });
});
var tR = v(function () {
  "use strict";

  var tQ = P(),
    Zg = k(),
    rQ = Xt(),
    nQ = Xs(),
    aQ = Js(),
    kC = W(),
    iQ = RangeError,
    $C = String,
    eR = Math.floor,
    Qg = Zg(aQ),
    JC = Zg("".slice),
    Ws = Zg(1.1.toFixed),
    _Ko = function Ko(e, t, a) {
      return t === 0 ? a : t % 2 === 1 ? _Ko(e, t - 1, a * e) : _Ko(e * e, t / 2, a);
    },
    oQ = function oQ(e) {
      for (var t = 0, a = e; a >= 4096;) t += 12, a /= 4096;
      for (; a >= 2;) t += 1, a /= 2;
      return t;
    },
    Go = function Go(e, t, a) {
      for (var i = -1, u = a; ++i < 6;) u += t * e[i], e[i] = u % 1e7, u = eR(u / 1e7);
    },
    Xg = function Xg(e, t) {
      for (var a = 6, i = 0; --a >= 0;) i += e[a], e[a] = eR(i / t), i = i % t * 1e7;
    },
    WC = function WC(e) {
      for (var t = 6, a = ""; --t >= 0;) if (a !== "" || t === 0 || e[t] !== 0) {
        var i = $C(e[t]);
        a = a === "" ? i : a + Qg("0", 7 - i.length) + i;
      }
      return a;
    },
    uQ = kC(function () {
      return Ws(8e-5, 3) !== "0.000" || Ws(.9, 0) !== "1" || Ws(1.255, 2) !== "1.25" || Ws(0xde0b6b3a7640080, 0) !== "1000000000000000128";
    }) || !kC(function () {
      Ws({});
    });
  tQ({
    target: "Number",
    proto: !0,
    forced: uQ
  }, {
    toFixed: function toFixed(t) {
      var a = nQ(this),
        i = rQ(t),
        u = [0, 0, 0, 0, 0, 0],
        l = "",
        c = "0",
        d,
        m,
        h,
        g;
      if (i < 0 || i > 20) throw new iQ("Incorrect fraction digits");
      if (a !== a) return "NaN";
      if (a <= -1e21 || a >= 1e21) return $C(a);
      if (a < 0 && (l = "-", a = -a), a > 1e-21) if (d = oQ(a * _Ko(2, 69, 1)) - 69, m = d < 0 ? a * _Ko(2, -d, 1) : a / _Ko(2, d, 1), m *= 4503599627370496, d = 52 - d, d > 0) {
        for (Go(u, 0, m), h = i; h >= 7;) Go(u, 1e7, 0), h -= 7;
        for (Go(u, _Ko(10, h, 1), 0), h = d - 1; h >= 23;) Xg(u, 1 << 23), h -= 23;
        Xg(u, 1 << h), Go(u, 1, 1), Xg(u, 2), c = WC(u);
      } else Go(u, 0, m), Go(u, 1 << -d, 0), c = WC(u) + Qg("0", i);
      return i > 0 ? (g = c.length, c = l + (g <= i ? "0." + Qg("0", i - g) + c : JC(c, 0, g - i) + "." + JC(c, g - i))) : c = l + c, c;
    }
  });
});
var aR = v(function () {
  "use strict";

  var sQ = P(),
    lQ = k(),
    rR = W(),
    nR = Xs(),
    kf = lQ(1.1.toPrecision),
    cQ = rR(function () {
      return kf(1, void 0) !== "1";
    }) || !rR(function () {
      kf({});
    });
  sQ({
    target: "Number",
    proto: !0,
    forced: cQ
  }, {
    toPrecision: function toPrecision(t) {
      return t === void 0 ? kf(nR(this)) : kf(nR(this), t);
    }
  });
});
var oR = v(function (exe, iR) {
  "use strict";

  vC();
  hC();
  xC();
  EC();
  SC();
  TC();
  qC();
  _C();
  MC();
  HC();
  ZC();
  tR();
  aR();
  var fQ = ut();
  iR.exports = fQ.Number;
});
var sR = v(function (txe, uR) {
  "use strict";

  var pQ = oR();
  uR.exports = pQ;
});
var pR = v(function (rxe, fR) {
  "use strict";

  var lR = Me(),
    dQ = k(),
    mQ = Ae(),
    vQ = W(),
    kg = Ds(),
    hQ = Mh(),
    gQ = tf(),
    yQ = dr(),
    xQ = Es(),
    Vo = Object.assign,
    cR = Object.defineProperty,
    bQ = dQ([].concat);
  fR.exports = !Vo || vQ(function () {
    if (lR && Vo({
      b: 1
    }, Vo(cR({}, "a", {
      enumerable: !0,
      get: function get() {
        cR(this, "b", {
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
    }), Vo({}, e)[a] !== 7 || kg(Vo({}, t)).join("") !== i;
  }) ? function (t, a) {
    for (var i = yQ(t), u = arguments.length, l = 1, c = hQ.f, d = gQ.f; u > l;) for (var m = xQ(arguments[l++]), h = c ? bQ(kg(m), c(m)) : kg(m), g = h.length, x = 0, b; g > x;) b = h[x++], (!lR || mQ(d, m, b)) && (i[b] = m[b]);
    return i;
  } : Vo;
});
var mR = v(function () {
  "use strict";

  var EQ = P(),
    dR = pR();
  EQ({
    target: "Object",
    stat: !0,
    arity: 2,
    forced: Object.assign !== dR
  }, {
    assign: dR
  });
});
var hR = v(function (ixe, vR) {
  "use strict";

  mR();
  var SQ = ut();
  vR.exports = SQ.Object.assign;
});
var yR = v(function (oxe, gR) {
  "use strict";

  var TQ = hR();
  gR.exports = TQ;
});
var TR = v(function () {
  "use strict";

  var qQ = Me(),
    _Q = Na(),
    AQ = Ee(),
    OQ = Qh(),
    CQ = dr(),
    RQ = Pe(),
    xR = Object.getPrototypeOf,
    bR = Object.setPrototypeOf,
    ER = Object.prototype,
    SR = "__proto__";
  if (qQ && xR && bR && !(SR in ER)) try {
    _Q(ER, SR, {
      configurable: !0,
      get: function get() {
        return xR(CQ(this));
      },
      set: function set(t) {
        var a = RQ(this);
        OQ(t) && AQ(a) && bR(a, t);
      }
    });
  } catch (_unused23) {}
});
var qR = v(function () {
  "use strict";

  TR();
});
var AR = v(function (fxe, _R) {
  "use strict";

  var NQ = qR();
  _R.exports = NQ;
});
var Jg = v(function (pxe, wR) {
  "use strict";

  var CR = Me(),
    wQ = W(),
    RR = k(),
    MQ = _i(),
    DQ = Ds(),
    BQ = jn(),
    IQ = tf().f,
    NR = RR(IQ),
    PQ = RR([].push),
    UQ = CR && wQ(function () {
      var e = Object.create(null);
      return e[2] = 2, !NR(e, 2);
    }),
    OR = function OR(e) {
      return function (t) {
        for (var a = BQ(t), i = DQ(a), u = UQ && MQ(a) === null, l = i.length, c = 0, d = [], m; l > c;) m = i[c++], (!CR || (u ? m in a : NR(a, m))) && PQ(d, e ? [m, a[m]] : a[m]);
        return d;
      };
    };
  wR.exports = {
    entries: OR(!0),
    values: OR(!1)
  };
});
var MR = v(function () {
  "use strict";

  var zQ = P(),
    LQ = Jg().entries;
  zQ({
    target: "Object",
    stat: !0
  }, {
    entries: function entries(t) {
      return LQ(t);
    }
  });
});
var BR = v(function (vxe, DR) {
  "use strict";

  MR();
  var jQ = ut();
  DR.exports = jQ.Object.entries;
});
var PR = v(function (hxe, IR) {
  "use strict";

  var HQ = BR();
  IR.exports = HQ;
});
var Wg = v(function (gxe, UR) {
  "use strict";

  UR.exports = Object.is || function (t, a) {
    return t === a ? t !== 0 || 1 / t === 1 / a : t !== t && a !== a;
  };
});
var zR = v(function () {
  "use strict";

  var FQ = P(),
    GQ = Wg();
  FQ({
    target: "Object",
    stat: !0
  }, {
    is: GQ
  });
});
var jR = v(function (bxe, LR) {
  "use strict";

  zR();
  var KQ = ut();
  LR.exports = KQ.Object.is;
});
var FR = v(function (Exe, HR) {
  "use strict";

  var VQ = jR();
  HR.exports = VQ;
});
var GR = v(function () {
  "use strict";

  var YQ = P(),
    XQ = Jg().values;
  YQ({
    target: "Object",
    stat: !0
  }, {
    values: function values(t) {
      return XQ(t);
    }
  });
});
var VR = v(function (qxe, KR) {
  "use strict";

  GR();
  var QQ = ut();
  KR.exports = QQ.Object.values;
});
var XR = v(function (_xe, YR) {
  "use strict";

  var ZQ = VR();
  YR.exports = ZQ;
});
var $g = v(function (Axe, JR) {
  "use strict";

  var kR = k(),
    kQ = Ar(),
    QR = Re(),
    JQ = Js(),
    WQ = Pe(),
    $Q = kR(JQ),
    eZ = kR("".slice),
    tZ = Math.ceil,
    ZR = function ZR(e) {
      return function (t, a, i) {
        var u = QR(WQ(t)),
          l = kQ(a),
          c = u.length,
          d = i === void 0 ? " " : QR(i),
          m,
          h;
        return l <= c || d === "" ? u : (m = l - c, h = $Q(d, tZ(m / d.length)), h.length > m && (h = eZ(h, 0, m)), e ? u + h : h + u);
      };
    };
  JR.exports = {
    start: ZR(!1),
    end: ZR(!0)
  };
});
var ey = v(function (Oxe, WR) {
  "use strict";

  var rZ = Ei();
  WR.exports = /Version\/10(?:\.\d+){1,2}(?: [\w./]+)?(?: Mobile\/\w+)? Safari\//.test(rZ);
});
var ty = v(function () {
  "use strict";

  var nZ = P(),
    aZ = $g().end,
    iZ = ey();
  nZ({
    target: "String",
    proto: !0,
    forced: iZ
  }, {
    padEnd: function padEnd(t) {
      return aZ(this, t, arguments.length > 1 ? arguments[1] : void 0);
    }
  });
});
var eN = v(function (Nxe, $R) {
  "use strict";

  ty();
  var oZ = Qt();
  $R.exports = oZ("String", "padEnd");
});
var rN = v(function (wxe, tN) {
  "use strict";

  var uZ = eN();
  tN.exports = uZ;
});
var ry = v(function () {
  "use strict";

  var sZ = P(),
    lZ = $g().start,
    cZ = ey();
  sZ({
    target: "String",
    proto: !0,
    forced: cZ
  }, {
    padStart: function padStart(t) {
      return lZ(this, t, arguments.length > 1 ? arguments[1] : void 0);
    }
  });
});
var aN = v(function (Bxe, nN) {
  "use strict";

  ry();
  var fZ = Qt();
  nN.exports = fZ("String", "padStart");
});
var oN = v(function (Ixe, iN) {
  "use strict";

  var pZ = aN();
  iN.exports = pZ;
});
var ny = v(function () {
  "use strict";

  var dZ = P(),
    mZ = k(),
    vZ = Pe(),
    hZ = Xt(),
    gZ = Re(),
    yZ = W(),
    xZ = mZ("".charAt),
    bZ = yZ(function () {
      return "𠮷".at(-2) !== "\uD842";
    });
  dZ({
    target: "String",
    proto: !0,
    forced: bZ
  }, {
    at: function at(t) {
      var a = gZ(vZ(this)),
        i = a.length,
        u = hZ(t),
        l = u >= 0 ? u : i + u;
      return l < 0 || l >= i ? void 0 : xZ(a, l);
    }
  });
});
var sN = v(function (zxe, uN) {
  "use strict";

  ny();
  var EZ = Qt();
  uN.exports = EZ("String", "at");
});
var cN = v(function (Lxe, lN) {
  "use strict";

  var SZ = sN();
  lN.exports = SZ;
});
var ay = v(function (jxe, fN) {
  "use strict";

  var TZ = ze();
  fN.exports = function () {
    var e = TZ(this),
      t = "";
    return e.hasIndices && (t += "d"), e.global && (t += "g"), e.ignoreCase && (t += "i"), e.multiline && (t += "m"), e.dotAll && (t += "s"), e.unicode && (t += "u"), e.unicodeSets && (t += "v"), e.sticky && (t += "y"), t;
  };
});
var sy = v(function (Hxe, pN) {
  "use strict";

  var iy = W(),
    qZ = ae(),
    oy = qZ.RegExp,
    uy = iy(function () {
      var e = oy("a", "y");
      return e.lastIndex = 2, e.exec("abcd") !== null;
    }),
    _Z = uy || iy(function () {
      return !oy("a", "y").sticky;
    }),
    AZ = uy || iy(function () {
      var e = oy("^r", "gy");
      return e.lastIndex = 2, e.exec("str") !== null;
    });
  pN.exports = {
    BROKEN_CARET: AZ,
    MISSED_STICKY: _Z,
    UNSUPPORTED_Y: uy
  };
});
var mN = v(function (Fxe, dN) {
  "use strict";

  var OZ = W(),
    CZ = ae(),
    RZ = CZ.RegExp;
  dN.exports = OZ(function () {
    var e = RZ(".", "s");
    return !(e.dotAll && e.test("\n") && e.flags === "s");
  });
});
var hN = v(function (Gxe, vN) {
  "use strict";

  var NZ = W(),
    wZ = ae(),
    MZ = wZ.RegExp;
  vN.exports = NZ(function () {
    var e = MZ("(?<a>b)", "g");
    return e.exec("b").groups.a !== "b" || "b".replace(e, "$<a>c") !== "bc";
  });
});
var $f = v(function (Kxe, yN) {
  "use strict";

  var Yo = Ae(),
    Wf = k(),
    DZ = Re(),
    BZ = ay(),
    IZ = sy(),
    PZ = uf(),
    UZ = Ra(),
    zZ = mr().get,
    LZ = mN(),
    jZ = hN(),
    HZ = PZ("native-string-replace", String.prototype.replace),
    Jf = RegExp.prototype.exec,
    _cy = Jf,
    FZ = Wf("".charAt),
    GZ = Wf("".indexOf),
    KZ = Wf("".replace),
    ly = Wf("".slice),
    fy = function () {
      var e = /a/,
        t = /b*/g;
      return Yo(Jf, e, "a"), Yo(Jf, t, "a"), e.lastIndex !== 0 || t.lastIndex !== 0;
    }(),
    gN = IZ.BROKEN_CARET,
    py = /()??/.exec("")[1] !== void 0,
    VZ = fy || py || gN || LZ || jZ;
  VZ && (_cy = function cy(t) {
    var a = this,
      i = zZ(a),
      u = DZ(t),
      l = i.raw,
      c,
      d,
      m,
      h,
      g,
      x,
      b;
    if (l) return l.lastIndex = a.lastIndex, c = Yo(_cy, l, u), a.lastIndex = l.lastIndex, c;
    var E = i.groups,
      A = gN && a.sticky,
      C = Yo(BZ, a),
      O = a.source,
      T = 0,
      q = u;
    if (A && (C = KZ(C, "y", ""), GZ(C, "g") === -1 && (C += "g"), q = ly(u, a.lastIndex), a.lastIndex > 0 && (!a.multiline || a.multiline && FZ(u, a.lastIndex - 1) !== "\n") && (O = "(?: " + O + ")", q = " " + q, T++), d = new RegExp("^(?:" + O + ")", C)), py && (d = new RegExp("^" + O + "$(?!\\s)", C)), fy && (m = a.lastIndex), h = Yo(Jf, A ? d : a, q), A ? h ? (h.input = ly(h.input, T), h[0] = ly(h[0], T), h.index = a.lastIndex, a.lastIndex += h[0].length) : a.lastIndex = 0 : fy && h && (a.lastIndex = a.global ? h.index + h[0].length : m), py && h && h.length > 1 && Yo(HZ, h[0], d, function () {
      for (g = 1; g < arguments.length - 2; g++) arguments[g] === void 0 && (h[g] = void 0);
    }), h && E) for (h.groups = x = UZ(null), g = 0; g < E.length; g++) b = E[g], x[b[0]] = h[b[1]];
    return h;
  });
  yN.exports = _cy;
});
var dy = v(function () {
  "use strict";

  var YZ = P(),
    xN = $f();
  YZ({
    target: "RegExp",
    proto: !0,
    forced: /./.exec !== xN
  }, {
    exec: xN
  });
});
var SN = v(function () {
  "use strict";

  var XZ = P(),
    QZ = k(),
    ZZ = Os(),
    kZ = RangeError,
    bN = String.fromCharCode,
    EN = String.fromCodePoint,
    JZ = QZ([].join),
    WZ = !!EN && EN.length !== 1;
  XZ({
    target: "String",
    stat: !0,
    arity: 1,
    forced: WZ
  }, {
    fromCodePoint: function fromCodePoint(t) {
      for (var a = [], i = arguments.length, u = 0, l; i > u;) {
        if (l = +arguments[u++], ZZ(l, 1114111) !== l) throw new kZ(l + " is not a valid code point");
        a[u] = l < 65536 ? bN(l) : bN(((l -= 65536) >> 10) + 55296, l % 1024 + 56320);
      }
      return JZ(a, "");
    }
  });
});
var AN = v(function () {
  "use strict";

  var $Z = P(),
    _N = k(),
    ek = jn(),
    tk = dr(),
    TN = Re(),
    rk = nn(),
    qN = _N([].push),
    nk = _N([].join);
  $Z({
    target: "String",
    stat: !0
  }, {
    raw: function raw(t) {
      var a = ek(tk(t).raw),
        i = rk(a);
      if (!i) return "";
      for (var u = arguments.length, l = [], c = 0;;) {
        if (qN(l, TN(a[c++])), c === i) return nk(l, "");
        c < u && qN(l, TN(arguments[c]));
      }
    }
  });
});
var ON = v(function () {
  "use strict";

  var ak = P(),
    ik = Hf().codeAt;
  ak({
    target: "String",
    proto: !0
  }, {
    codePointAt: function codePointAt(t) {
      return ik(this, t);
    }
  });
});
var ep = v(function ($xe, CN) {
  "use strict";

  var ok = Ee(),
    uk = qr(),
    sk = Ue(),
    lk = sk("match");
  CN.exports = function (e) {
    var t;
    return ok(e) && ((t = e[lk]) !== void 0 ? !!t : uk(e) === "RegExp");
  };
});
var tp = v(function (ebe, RN) {
  "use strict";

  var ck = ep(),
    fk = TypeError;
  RN.exports = function (e) {
    if (ck(e)) throw new fk("The method doesn't accept regular expressions");
    return e;
  };
});
var rp = v(function (tbe, NN) {
  "use strict";

  var pk = Ue(),
    dk = pk("match");
  NN.exports = function (e) {
    var t = /./;
    try {
      "/./"[e](t);
    } catch (_unused24) {
      try {
        return t[dk] = !1, "/./"[e](t);
      } catch (_unused25) {}
    }
    return !1;
  };
});
var DN = v(function () {
  "use strict";

  var mk = P(),
    vk = Bo(),
    hk = Do().f,
    gk = Ar(),
    wN = Re(),
    yk = tp(),
    xk = Pe(),
    bk = rp(),
    Ek = Ke(),
    Sk = vk("".slice),
    Tk = Math.min,
    MN = bk("endsWith"),
    qk = !Ek && !MN && !!function () {
      var e = hk(String.prototype, "endsWith");
      return e && !e.writable;
    }();
  mk({
    target: "String",
    proto: !0,
    forced: !qk && !MN
  }, {
    endsWith: function endsWith(t) {
      var a = wN(xk(this));
      yk(t);
      var i = arguments.length > 1 ? arguments[1] : void 0,
        u = a.length,
        l = i === void 0 ? u : Tk(gk(i), u),
        c = wN(t);
      return Sk(a, l - c.length, l) === c;
    }
  });
});
var IN = v(function () {
  "use strict";

  var _k = P(),
    Ak = k(),
    Ok = tp(),
    Ck = Pe(),
    BN = Re(),
    Rk = rp(),
    Nk = Ak("".indexOf);
  _k({
    target: "String",
    proto: !0,
    forced: !Rk("includes")
  }, {
    includes: function includes(t) {
      return !!~Nk(BN(Ck(this)), BN(Ok(t)), arguments.length > 1 ? arguments[1] : void 0);
    }
  });
});
var UN = v(function () {
  "use strict";

  var wk = P(),
    Mk = k(),
    Dk = Pe(),
    Bk = Re(),
    PN = Mk("".charCodeAt);
  wk({
    target: "String",
    proto: !0
  }, {
    isWellFormed: function isWellFormed() {
      for (var t = Bk(Dk(this)), a = t.length, i = 0; i < a; i++) {
        var u = PN(t, i);
        if ((u & 63488) === 55296 && (u >= 56320 || ++i >= a || (PN(t, i) & 64512) !== 56320)) return !1;
      }
      return !0;
    }
  });
});
var $s = v(function (sbe, FN) {
  "use strict";

  dy();
  var zN = Ae(),
    LN = Ut(),
    Ik = $f(),
    jN = W(),
    HN = Ue(),
    Pk = _r(),
    Uk = HN("species"),
    my = RegExp.prototype;
  FN.exports = function (e, t, a, i) {
    var u = HN(e),
      l = !jN(function () {
        var h = {};
        return h[u] = function () {
          return 7;
        }, ""[e](h) !== 7;
      }),
      c = l && !jN(function () {
        var h = !1,
          g = /a/;
        if (e === "split") {
          var x = {};
          x[Uk] = function () {
            return g;
          }, g = {
            constructor: x,
            flags: ""
          }, g[u] = /./[u];
        }
        return g.exec = function () {
          return h = !0, null;
        }, g[u](""), !h;
      });
    if (!l || !c || a) {
      var d = /./[u],
        m = t(u, ""[e], function (h, g, x, b, E) {
          var A = g.exec;
          return A === Ik || A === my.exec ? l && !E ? {
            done: !0,
            value: zN(d, g, x, b)
          } : {
            done: !0,
            value: zN(h, x, g, b)
          } : {
            done: !1
          };
        });
      LN(String.prototype, e, m[0]), LN(my, u, m[1]);
    }
    i && Pk(my[u], "sham", !0);
  };
});
var el = v(function (lbe, GN) {
  "use strict";

  var zk = Hf().charAt;
  GN.exports = function (e, t, a) {
    return t + (a ? zk(e, t).length : 1);
  };
});
var YN = v(function (cbe, VN) {
  "use strict";

  var Lk = ae(),
    jk = W(),
    KN = Lk.RegExp,
    Hk = !jk(function () {
      var e = !0;
      try {
        KN(".", "d");
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
      var d = Object.getOwnPropertyDescriptor(KN.prototype, "flags").get.call(t);
      return d !== i || a !== i;
    });
  VN.exports = {
    correct: Hk
  };
});
var Xo = v(function (fbe, QN) {
  "use strict";

  var Fk = Ae(),
    Gk = ot(),
    Kk = Aa(),
    XN = YN(),
    Vk = ay(),
    Yk = RegExp.prototype;
  QN.exports = XN.correct ? function (e) {
    return e.flags;
  } : function (e) {
    return !XN.correct && Kk(Yk, e) && !Gk(e, "flags") ? Fk(Vk, e) : e.flags;
  };
});
var Qo = v(function (pbe, kN) {
  "use strict";

  var ZN = Ae(),
    Xk = ze(),
    Qk = Oe(),
    Zk = qr(),
    kk = $f(),
    Jk = TypeError;
  kN.exports = function (e, t) {
    var a = e.exec;
    if (Qk(a)) {
      var i = ZN(a, e, t);
      return i !== null && Xk(i), i;
    }
    if (Zk(e) === "RegExp") return ZN(kk, e, t);
    throw new Jk("RegExp#exec called on incompatible receiver");
  };
});
var $N = v(function () {
  "use strict";

  var Wk = Ae(),
    $k = k(),
    eJ = $s(),
    tJ = ze(),
    rJ = Ee(),
    nJ = Ar(),
    np = Re(),
    aJ = Pe(),
    iJ = rn(),
    oJ = el(),
    uJ = Xo(),
    JN = Qo(),
    WN = $k("".indexOf);
  eJ("match", function (e, t, a) {
    return [function (u) {
      var l = aJ(this),
        c = rJ(u) ? iJ(u, e) : void 0;
      return c ? Wk(c, u, l) : new RegExp(u)[e](np(l));
    }, function (i) {
      var u = tJ(this),
        l = np(i),
        c = a(t, u, l);
      if (c.done) return c.value;
      var d = np(uJ(u));
      if (WN(d, "g") === -1) return JN(u, l);
      var m = WN(d, "u") !== -1;
      u.lastIndex = 0;
      for (var h = [], g = 0, x; (x = JN(u, l)) !== null;) {
        var b = np(x[0]);
        h[g] = b, b === "" && (u.lastIndex = oJ(l, nJ(u.lastIndex), m)), g++;
      }
      return g === 0 ? null : h;
    }];
  });
});
var tw = v(function (vbe, ew) {
  "use strict";

  var sJ = Ms(),
    lJ = No(),
    cJ = TypeError;
  ew.exports = function (e) {
    if (sJ(e)) return e;
    throw new cJ(lJ(e) + " is not a constructor");
  };
});
var tl = v(function (hbe, nw) {
  "use strict";

  var rw = ze(),
    fJ = tw(),
    pJ = Ln(),
    dJ = Ue(),
    mJ = dJ("species");
  nw.exports = function (e, t) {
    var a = rw(e).constructor,
      i;
    return a === void 0 || pJ(i = rw(a)[mJ]) ? t : fJ(i);
  };
});
var dw = v(function () {
  "use strict";

  var vJ = P(),
    aw = Ae(),
    uw = Bo(),
    hJ = Dg(),
    ap = Vs(),
    iw = Pe(),
    sw = Ar(),
    rl = Re(),
    gJ = ze(),
    yJ = Ee(),
    xJ = qr(),
    bJ = ep(),
    lw = Xo(),
    EJ = rn(),
    SJ = Ut(),
    TJ = W(),
    qJ = Ue(),
    _J = tl(),
    AJ = el(),
    OJ = Qo(),
    cw = mr(),
    hy = Ke(),
    ip = qJ("matchAll"),
    fw = "RegExp String",
    pw = fw + " Iterator",
    CJ = cw.set,
    RJ = cw.getterFor(pw),
    ow = RegExp.prototype,
    NJ = TypeError,
    gy = uw("".indexOf),
    op = uw("".matchAll),
    vy = !!op && !TJ(function () {
      op("a", /./);
    }),
    wJ = hJ(function (t, a, i, u) {
      CJ(this, {
        type: pw,
        regexp: t,
        string: a,
        global: i,
        unicode: u,
        done: !1
      });
    }, fw, function () {
      var t = RJ(this);
      if (t.done) return ap(void 0, !0);
      var a = t.regexp,
        i = t.string,
        u = OJ(a, i);
      return u === null ? (t.done = !0, ap(void 0, !0)) : t.global ? (rl(u[0]) === "" && (a.lastIndex = AJ(i, sw(a.lastIndex), t.unicode)), ap(u, !1)) : (t.done = !0, ap(u, !1));
    }),
    yy = function yy(e) {
      var t = gJ(this),
        a = rl(e),
        i = _J(t, RegExp),
        u = rl(lw(t)),
        l,
        c,
        d;
      return l = new i(i === RegExp ? t.source : t, u), c = !!~gy(u, "g"), d = !!~gy(u, "u"), l.lastIndex = sw(t.lastIndex), new wJ(l, a, c, d);
    };
  vJ({
    target: "String",
    proto: !0,
    forced: vy
  }, {
    matchAll: function matchAll(t) {
      var a = iw(this),
        i,
        u,
        l,
        c;
      if (yJ(t)) {
        if (bJ(t) && (i = rl(iw(lw(t))), !~gy(i, "g"))) throw new NJ("`.matchAll` does not allow non-global regexes");
        if (vy) return op(a, t);
        if (l = EJ(t, ip), l === void 0 && hy && xJ(t) === "RegExp" && (l = yy), l) return aw(l, t, a);
      } else if (vy) return op(a, t);
      return u = rl(a), c = new RegExp(t, "g"), hy ? aw(yy, c, u) : c[ip](u);
    }
  });
  hy || ip in ow || SJ(ow, ip, yy);
});
var mw = v(function () {
  "use strict";

  var MJ = P(),
    DJ = Js();
  MJ({
    target: "String",
    proto: !0
  }, {
    repeat: DJ
  });
});
var up = v(function (Ebe, yw) {
  "use strict";

  var BJ = bs(),
    gw = Function.prototype,
    vw = gw.apply,
    hw = gw.call;
  yw.exports = (typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) == "object" && Reflect.apply || (BJ ? hw.bind(vw) : function () {
    return hw.apply(vw, arguments);
  });
});
var Sy = v(function (Sbe, xw) {
  "use strict";

  var Ey = k(),
    IJ = dr(),
    PJ = Math.floor,
    xy = Ey("".charAt),
    UJ = Ey("".replace),
    by = Ey("".slice),
    zJ = /\$([$&'`]|\d{1,2}|<[^>]*>)/g,
    LJ = /\$([$&'`]|\d{1,2})/g;
  xw.exports = function (e, t, a, i, u, l) {
    var c = a + e.length,
      d = i.length,
      m = LJ;
    return u !== void 0 && (u = IJ(u), m = zJ), UJ(l, m, function (h, g) {
      var x;
      switch (xy(g, 0)) {
        case "$":
          return "$";
        case "&":
          return e;
        case "`":
          return by(t, 0, a);
        case "'":
          return by(t, c);
        case "<":
          x = u[by(g, 1, -1)];
          break;
        default:
          var b = +g;
          if (b === 0) return h;
          if (b > d) {
            var E = PJ(b / 10);
            return E === 0 ? h : E <= d ? i[E - 1] === void 0 ? xy(g, 1) : i[E - 1] + xy(g, 1) : h;
          }
          x = i[b - 1];
      }
      return x === void 0 ? "" : x;
    });
  };
});
var Tw = v(function () {
  "use strict";

  var jJ = up(),
    bw = Ae(),
    lp = k(),
    HJ = $s(),
    FJ = W(),
    GJ = ze(),
    KJ = Oe(),
    VJ = Ee(),
    YJ = Xt(),
    XJ = Ar(),
    Ri = Re(),
    QJ = Pe(),
    ZJ = el(),
    kJ = rn(),
    JJ = Sy(),
    WJ = Xo(),
    $J = Qo(),
    eW = Ue(),
    qy = eW("replace"),
    tW = Math.max,
    rW = Math.min,
    nW = lp([].concat),
    Ty = lp([].push),
    sp = lp("".indexOf),
    Ew = lp("".slice),
    aW = function aW(e) {
      return e === void 0 ? e : String(e);
    },
    iW = function () {
      return "a".replace(/./, "$0") === "$0";
    }(),
    Sw = function () {
      return /./[qy] ? /./[qy]("a", "$0") === "" : !1;
    }(),
    oW = !FJ(function () {
      var e = /./;
      return e.exec = function () {
        var t = [];
        return t.groups = {
          a: "7"
        }, t;
      }, "".replace(e, "$<a>") !== "7";
    });
  HJ("replace", function (e, t, a) {
    var i = Sw ? "$" : "$0";
    return [function (l, c) {
      var d = QJ(this),
        m = VJ(l) ? kJ(l, qy) : void 0;
      return m ? bw(m, l, d, c) : bw(t, Ri(d), l, c);
    }, function (u, l) {
      var c = GJ(this),
        d = Ri(u);
      if (typeof l == "string" && sp(l, i) === -1 && sp(l, "$<") === -1) {
        var m = a(t, c, d, l);
        if (m.done) return m.value;
      }
      var h = KJ(l);
      h || (l = Ri(l));
      var g = Ri(WJ(c)),
        x = sp(g, "g") !== -1,
        b;
      x && (b = sp(g, "u") !== -1, c.lastIndex = 0);
      for (var E = [], A; A = $J(c, d), !(A === null || (Ty(E, A), !x));) {
        var C = Ri(A[0]);
        C === "" && (c.lastIndex = ZJ(d, XJ(c.lastIndex), b));
      }
      for (var O = "", T = 0, q = 0; q < E.length; q++) {
        A = E[q];
        for (var D = Ri(A[0]), B = tW(rW(YJ(A.index), d.length), 0), G = [], V, te = 1; te < A.length; te++) Ty(G, aW(A[te]));
        var ie = A.groups;
        if (h) {
          var Q = nW([D], G, B, d);
          ie !== void 0 && Ty(Q, ie), V = Ri(jJ(l, void 0, Q));
        } else V = JJ(D, d, B, G, ie, l);
        B >= T && (O += Ew(d, T, B) + V, T = B + D.length);
      }
      return O + Ew(d, T);
    }];
  }, !oW || !iW || Sw);
});
var Aw = v(function () {
  "use strict";

  var uW = P(),
    sW = Ae(),
    Ay = k(),
    qw = Pe(),
    lW = Oe(),
    cW = Ee(),
    fW = ep(),
    Zo = Re(),
    pW = rn(),
    dW = Xo(),
    mW = Sy(),
    vW = Ue(),
    hW = Ke(),
    gW = vW("replace"),
    yW = TypeError,
    _y = Ay("".indexOf),
    xW = Ay("".replace),
    _w = Ay("".slice),
    bW = Math.max;
  uW({
    target: "String",
    proto: !0
  }, {
    replaceAll: function replaceAll(t, a) {
      var i = qw(this),
        u,
        l,
        c,
        d,
        m,
        h,
        g,
        x,
        b,
        E,
        A = 0,
        C = "";
      if (cW(t)) {
        if (u = fW(t), u && (l = Zo(qw(dW(t))), !~_y(l, "g"))) throw new yW("`.replaceAll` does not allow non-global regexes");
        if (c = pW(t, gW), c) return sW(c, t, i, a);
        if (hW && u) return xW(Zo(i), t, a);
      }
      for (d = Zo(i), m = Zo(t), h = lW(a), h || (a = Zo(a)), g = m.length, x = bW(1, g), b = _y(d, m); b !== -1;) E = h ? Zo(a(m, b, d)) : mW(m, d, b, [], void 0, a), C += _w(d, A, b) + E, A = b + g, b = b + x > d.length ? -1 : _y(d, m, b + x);
      return A < d.length && (C += _w(d, A)), C;
    }
  });
});
var Rw = v(function () {
  "use strict";

  var EW = Ae(),
    SW = $s(),
    TW = ze(),
    qW = Ee(),
    _W = Pe(),
    Ow = Wg(),
    Cw = Re(),
    AW = rn(),
    OW = Qo();
  SW("search", function (e, t, a) {
    return [function (u) {
      var l = _W(this),
        c = qW(u) ? AW(u, e) : void 0;
      return c ? EW(c, u, l) : new RegExp(u)[e](Cw(l));
    }, function (i) {
      var u = TW(this),
        l = Cw(i),
        c = a(t, u, l);
      if (c.done) return c.value;
      var d = u.lastIndex;
      Ow(d, 0) || (u.lastIndex = 0);
      var m = OW(u, l);
      return Ow(u.lastIndex, d) || (u.lastIndex = d), m === null ? -1 : m.index;
    }];
  });
});
var Bw = v(function () {
  "use strict";

  var Oy = Ae(),
    Dw = k(),
    CW = $s(),
    RW = ze(),
    NW = Ee(),
    wW = Pe(),
    MW = tl(),
    DW = el(),
    BW = Ar(),
    Nw = Re(),
    IW = rn(),
    ww = Qo(),
    PW = sy(),
    UW = W(),
    ko = PW.UNSUPPORTED_Y,
    zW = 4294967295,
    LW = Math.min,
    Cy = Dw([].push),
    Ry = Dw("".slice),
    jW = !UW(function () {
      var e = /(?:)/,
        t = e.exec;
      e.exec = function () {
        return t.apply(this, arguments);
      };
      var a = "ab".split(e);
      return a.length !== 2 || a[0] !== "a" || a[1] !== "b";
    }),
    Mw = "abbc".split(/(b)*/)[1] === "c" || "test".split(/(?:)/, -1).length !== 4 || "ab".split(/(?:ab)*/).length !== 2 || ".".split(/(.?)(.?)/).length !== 4 || ".".split(/()()/).length > 1 || "".split(/.?/).length;
  CW("split", function (e, t, a) {
    var i = "0".split(void 0, 0).length ? function (u, l) {
      return u === void 0 && l === 0 ? [] : Oy(t, this, u, l);
    } : t;
    return [function (l, c) {
      var d = wW(this),
        m = NW(l) ? IW(l, e) : void 0;
      return m ? Oy(m, l, d, c) : Oy(i, Nw(d), l, c);
    }, function (u, l) {
      var c = RW(this),
        d = Nw(u);
      if (!Mw) {
        var m = a(i, c, d, l, i !== t);
        if (m.done) return m.value;
      }
      var h = MW(c, RegExp),
        g = c.unicode,
        x = (c.ignoreCase ? "i" : "") + (c.multiline ? "m" : "") + (c.unicode ? "u" : "") + (ko ? "g" : "y"),
        b = new h(ko ? "^(?:" + c.source + ")" : c, x),
        E = l === void 0 ? zW : l >>> 0;
      if (E === 0) return [];
      if (d.length === 0) return ww(b, d) === null ? [d] : [];
      for (var A = 0, C = 0, O = []; C < d.length;) {
        b.lastIndex = ko ? 0 : C;
        var T = ww(b, ko ? Ry(d, C) : d),
          q;
        if (T === null || (q = LW(BW(b.lastIndex + (ko ? C : 0)), d.length)) === A) C = DW(d, C, g);else {
          if (Cy(O, Ry(d, A, C)), O.length === E) return O;
          for (var D = 1; D <= T.length - 1; D++) if (Cy(O, T[D]), O.length === E) return O;
          C = A = q;
        }
      }
      return Cy(O, Ry(d, A)), O;
    }];
  }, Mw || !jW, ko);
});
var Uw = v(function () {
  "use strict";

  var HW = P(),
    FW = Bo(),
    GW = Do().f,
    KW = Ar(),
    Iw = Re(),
    VW = tp(),
    YW = Pe(),
    XW = rp(),
    QW = Ke(),
    ZW = FW("".slice),
    kW = Math.min,
    Pw = XW("startsWith"),
    JW = !QW && !Pw && !!function () {
      var e = GW(String.prototype, "startsWith");
      return e && !e.writable;
    }();
  HW({
    target: "String",
    proto: !0,
    forced: !JW && !Pw
  }, {
    startsWith: function startsWith(t) {
      var a = Iw(YW(this));
      VW(t);
      var i = KW(kW(arguments.length > 1 ? arguments[1] : void 0, a.length)),
        u = Iw(t);
      return ZW(a, i, i + u.length) === u;
    }
  });
});
var Lw = v(function () {
  "use strict";

  var WW = P(),
    $W = k(),
    e$ = Pe(),
    zw = Xt(),
    t$ = Re(),
    r$ = $W("".slice),
    n$ = Math.max,
    a$ = Math.min,
    i$ = !"".substr || "ab".substr(-1) !== "b";
  WW({
    target: "String",
    proto: !0,
    forced: i$
  }, {
    substr: function substr(t, a) {
      var i = t$(e$(this)),
        u = i.length,
        l = zw(t),
        c,
        d;
      return l === 1 / 0 && (l = 0), l < 0 && (l = n$(u + l, 0)), c = a === void 0 ? u : zw(a), c <= 0 || c === 1 / 0 ? "" : (d = a$(l + c, u), l >= d ? "" : r$(i, l, d));
    }
  });
});
var Gw = v(function () {
  "use strict";

  var o$ = P(),
    Fw = Ae(),
    My = k(),
    u$ = Pe(),
    s$ = Re(),
    l$ = W(),
    c$ = Array,
    Ny = My("".charAt),
    jw = My("".charCodeAt),
    f$ = My([].join),
    wy = "".toWellFormed,
    p$ = "�",
    Hw = wy && l$(function () {
      return Fw(wy, 1) !== "1";
    });
  o$({
    target: "String",
    proto: !0,
    forced: Hw
  }, {
    toWellFormed: function toWellFormed() {
      var t = s$(u$(this));
      if (Hw) return Fw(wy, t);
      for (var a = t.length, i = c$(a), u = 0; u < a; u++) {
        var l = jw(t, u);
        (l & 63488) !== 55296 ? i[u] = Ny(t, u) : l >= 56320 || u + 1 >= a || (jw(t, u + 1) & 64512) !== 56320 ? i[u] = p$ : (i[u] = Ny(t, u), i[++u] = Ny(t, u));
      }
      return f$(i, "");
    }
  });
});
var cp = v(function (Ube, Yw) {
  "use strict";

  var d$ = qs().PROPER,
    m$ = W(),
    Kw = Qs(),
    Vw = "​᠎";
  Yw.exports = function (e) {
    return m$(function () {
      return !!Kw[e]() || Vw[e]() !== Vw || d$ && Kw[e].name !== e;
    });
  };
});
var Xw = v(function () {
  "use strict";

  var v$ = P(),
    h$ = Ci().trim,
    g$ = cp();
  v$({
    target: "String",
    proto: !0,
    forced: g$("trim")
  }, {
    trim: function trim() {
      return h$(this);
    }
  });
});
var Dy = v(function (jbe, Qw) {
  "use strict";

  var y$ = Ci().start,
    x$ = cp();
  Qw.exports = x$("trimStart") ? function () {
    return y$(this);
  } : "".trimStart;
});
var kw = v(function () {
  "use strict";

  var b$ = P(),
    Zw = Dy();
  b$({
    target: "String",
    proto: !0,
    name: "trimStart",
    forced: "".trimLeft !== Zw
  }, {
    trimLeft: Zw
  });
});
var Ww = v(function () {
  "use strict";

  kw();
  var E$ = P(),
    Jw = Dy();
  E$({
    target: "String",
    proto: !0,
    name: "trimStart",
    forced: "".trimStart !== Jw
  }, {
    trimStart: Jw
  });
});
var By = v(function (Vbe, $w) {
  "use strict";

  var S$ = Ci().end,
    T$ = cp();
  $w.exports = T$("trimEnd") ? function () {
    return S$(this);
  } : "".trimEnd;
});
var tM = v(function () {
  "use strict";

  var q$ = P(),
    eM = By();
  q$({
    target: "String",
    proto: !0,
    name: "trimEnd",
    forced: "".trimRight !== eM
  }, {
    trimRight: eM
  });
});
var nM = v(function () {
  "use strict";

  tM();
  var _$ = P(),
    rM = By();
  _$({
    target: "String",
    proto: !0,
    name: "trimEnd",
    forced: "".trimEnd !== rM
  }, {
    trimEnd: rM
  });
});
var kt = v(function (kbe, iM) {
  "use strict";

  var A$ = k(),
    O$ = Pe(),
    aM = Re(),
    C$ = /"/g,
    R$ = A$("".replace);
  iM.exports = function (e, t, a, i) {
    var u = aM(O$(e)),
      l = "<" + t;
    return a !== "" && (l += " " + a + '="' + R$(aM(i), C$, "&quot;") + '"'), l + ">" + u + "</" + t + ">";
  };
});
var Jt = v(function (Jbe, oM) {
  "use strict";

  var N$ = W();
  oM.exports = function (e) {
    return N$(function () {
      var t = ""[e]('"');
      return t !== t.toLowerCase() || t.split('"').length > 3;
    });
  };
});
var uM = v(function () {
  "use strict";

  var w$ = P(),
    M$ = kt(),
    D$ = Jt();
  w$({
    target: "String",
    proto: !0,
    forced: D$("anchor")
  }, {
    anchor: function anchor(t) {
      return M$(this, "a", "name", t);
    }
  });
});
var sM = v(function () {
  "use strict";

  var B$ = P(),
    I$ = kt(),
    P$ = Jt();
  B$({
    target: "String",
    proto: !0,
    forced: P$("big")
  }, {
    big: function big() {
      return I$(this, "big", "", "");
    }
  });
});
var lM = v(function () {
  "use strict";

  var U$ = P(),
    z$ = kt(),
    L$ = Jt();
  U$({
    target: "String",
    proto: !0,
    forced: L$("blink")
  }, {
    blink: function blink() {
      return z$(this, "blink", "", "");
    }
  });
});
var cM = v(function () {
  "use strict";

  var j$ = P(),
    H$ = kt(),
    F$ = Jt();
  j$({
    target: "String",
    proto: !0,
    forced: F$("bold")
  }, {
    bold: function bold() {
      return H$(this, "b", "", "");
    }
  });
});
var fM = v(function () {
  "use strict";

  var G$ = P(),
    K$ = kt(),
    V$ = Jt();
  G$({
    target: "String",
    proto: !0,
    forced: V$("fixed")
  }, {
    fixed: function fixed() {
      return K$(this, "tt", "", "");
    }
  });
});
var pM = v(function () {
  "use strict";

  var Y$ = P(),
    X$ = kt(),
    Q$ = Jt();
  Y$({
    target: "String",
    proto: !0,
    forced: Q$("fontcolor")
  }, {
    fontcolor: function fontcolor(t) {
      return X$(this, "font", "color", t);
    }
  });
});
var dM = v(function () {
  "use strict";

  var Z$ = P(),
    k$ = kt(),
    J$ = Jt();
  Z$({
    target: "String",
    proto: !0,
    forced: J$("fontsize")
  }, {
    fontsize: function fontsize(t) {
      return k$(this, "font", "size", t);
    }
  });
});
var mM = v(function () {
  "use strict";

  var W$ = P(),
    $$ = kt(),
    eee = Jt();
  W$({
    target: "String",
    proto: !0,
    forced: eee("italics")
  }, {
    italics: function italics() {
      return $$(this, "i", "", "");
    }
  });
});
var vM = v(function () {
  "use strict";

  var tee = P(),
    ree = kt(),
    nee = Jt();
  tee({
    target: "String",
    proto: !0,
    forced: nee("link")
  }, {
    link: function link(t) {
      return ree(this, "a", "href", t);
    }
  });
});
var hM = v(function () {
  "use strict";

  var aee = P(),
    iee = kt(),
    oee = Jt();
  aee({
    target: "String",
    proto: !0,
    forced: oee("small")
  }, {
    small: function small() {
      return iee(this, "small", "", "");
    }
  });
});
var gM = v(function () {
  "use strict";

  var uee = P(),
    see = kt(),
    lee = Jt();
  uee({
    target: "String",
    proto: !0,
    forced: lee("strike")
  }, {
    strike: function strike() {
      return see(this, "strike", "", "");
    }
  });
});
var yM = v(function () {
  "use strict";

  var cee = P(),
    fee = kt(),
    pee = Jt();
  cee({
    target: "String",
    proto: !0,
    forced: pee("sub")
  }, {
    sub: function sub() {
      return fee(this, "sub", "", "");
    }
  });
});
var xM = v(function () {
  "use strict";

  var dee = P(),
    mee = kt(),
    vee = Jt();
  dee({
    target: "String",
    proto: !0,
    forced: vee("sup")
  }, {
    sup: function sup() {
      return mee(this, "sup", "", "");
    }
  });
});
var EM = v(function (qEe, bM) {
  "use strict";

  Vn();
  dy();
  SN();
  AN();
  ON();
  ny();
  DN();
  IN();
  UN();
  $N();
  dw();
  ty();
  ry();
  mw();
  Tw();
  Aw();
  Rw();
  Bw();
  Uw();
  Lw();
  Gw();
  Xw();
  Ww();
  nM();
  Ho();
  uM();
  sM();
  lM();
  cM();
  fM();
  pM();
  dM();
  mM();
  vM();
  hM();
  gM();
  yM();
  xM();
  var hee = ut();
  bM.exports = hee.String;
});
var TM = v(function (_Ee, SM) {
  "use strict";

  var gee = EM();
  SM.exports = gee;
});
var nl = v(function (AEe, qM) {
  "use strict";

  var yee = Re();
  qM.exports = function (e, t) {
    return e === void 0 ? arguments.length < 2 ? "" : t : yee(e);
  };
});
var Iy = v(function (OEe, AM) {
  "use strict";

  var xee = Me(),
    bee = W(),
    Eee = ze(),
    _M = nl(),
    fp = Error.prototype.toString,
    See = bee(function () {
      if (xee) {
        var e = Object.create(Object.defineProperty({}, "name", {
          get: function get() {
            return this === e;
          }
        }));
        if (fp.call(e) !== "true") return !0;
      }
      return fp.call({
        message: 1,
        name: 2
      }) !== "2: 1" || fp.call({}) !== "Error";
    });
  AM.exports = See ? function () {
    var t = Eee(this),
      a = _M(t.name, "Error"),
      i = _M(t.message);
    return a ? i ? a + ": " + i : a : i;
  } : fp;
});
var RM = v(function () {
  "use strict";

  var Tee = Ut(),
    OM = Iy(),
    CM = Error.prototype;
  CM.toString !== OM && Tee(CM, "toString", OM);
});
var Ua = v(function (NEe, BM) {
  "use strict";

  var qee = jn(),
    Py = Hn(),
    NM = jo(),
    MM = mr(),
    _ee = Yt().f,
    Aee = Kf(),
    pp = Vs(),
    Oee = Ke(),
    Cee = Me(),
    DM = "Array Iterator",
    Ree = MM.set,
    Nee = MM.getterFor(DM);
  BM.exports = Aee(Array, "Array", function (e, t) {
    Ree(this, {
      type: DM,
      target: qee(e),
      index: 0,
      kind: t
    });
  }, function () {
    var e = Nee(this),
      t = e.target,
      a = e.index++;
    if (!t || a >= t.length) return e.target = null, pp(void 0, !0);
    switch (e.kind) {
      case "keys":
        return pp(a, !1);
      case "values":
        return pp(t[a], !1);
    }
    return pp([a, t[a]], !1);
  }, "values");
  var wM = NM.Arguments = NM.Array;
  Py("keys");
  Py("values");
  Py("entries");
  if (!Oee && Cee && wM.name !== "values") try {
    _ee(wM, "name", {
      value: "values"
    });
  } catch (_unused27) {}
});
var PM = v(function () {
  "use strict";

  var wee = P(),
    Mee = dr(),
    IM = Ds(),
    Dee = W(),
    Bee = Dee(function () {
      IM(1);
    });
  wee({
    target: "Object",
    stat: !0,
    forced: Bee
  }, {
    keys: function keys(t) {
      return IM(Mee(t));
    }
  });
});
var jM = v(function (DEe, LM) {
  "use strict";

  var Iee = qr(),
    Pee = jn(),
    UM = Cs().f,
    Uee = Us(),
    zM = (typeof window === "undefined" ? "undefined" : _typeof(window)) == "object" && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [],
    zee = function zee(e) {
      try {
        return UM(e);
      } catch (_unused28) {
        return Uee(zM);
      }
    };
  LM.exports.f = function (t) {
    return zM && Iee(t) === "Window" ? zee(t) : UM(Pee(t));
  };
});
var FM = v(function (BEe, HM) {
  "use strict";

  var Lee = W();
  HM.exports = Lee(function () {
    if (typeof ArrayBuffer == "function") {
      var e = new ArrayBuffer(8);
      Object.isExtensible(e) && Object.defineProperty(e, "a", {
        value: 8
      });
    }
  });
});
var VM = v(function (IEe, KM) {
  "use strict";

  var jee = W(),
    Hee = Ee(),
    Fee = qr(),
    GM = FM(),
    dp = Object.isExtensible,
    Gee = jee(function () {
      dp(1);
    });
  KM.exports = Gee || GM ? function (t) {
    return !Hee(t) || GM && Fee(t) === "ArrayBuffer" ? !1 : dp ? dp(t) : !0;
  } : dp;
});
var Uy = v(function (PEe, YM) {
  "use strict";

  var Kee = W();
  YM.exports = !Kee(function () {
    return Object.isExtensible(Object.preventExtensions({}));
  });
});
var al = v(function (UEe, ZM) {
  "use strict";

  var Vee = P(),
    Yee = k(),
    Xee = _s(),
    Qee = Ee(),
    zy = ot(),
    Zee = Yt().f,
    XM = Cs(),
    kee = jM(),
    Ly = VM(),
    Jee = wo(),
    Wee = Uy(),
    QM = !1,
    Xn = Jee("meta"),
    $ee = 0,
    jy = function jy(e) {
      Zee(e, Xn, {
        value: {
          objectID: "O" + $ee++,
          weakData: {}
        }
      });
    },
    ete = function ete(e, t) {
      if (!Qee(e)) return _typeof(e) == "symbol" ? e : (typeof e == "string" ? "S" : "P") + e;
      if (!zy(e, Xn)) {
        if (!Ly(e)) return "F";
        if (!t) return "E";
        jy(e);
      }
      return e[Xn].objectID;
    },
    tte = function tte(e, t) {
      if (!zy(e, Xn)) {
        if (!Ly(e)) return !0;
        if (!t) return !1;
        jy(e);
      }
      return e[Xn].weakData;
    },
    rte = function rte(e) {
      return Wee && QM && Ly(e) && !zy(e, Xn) && jy(e), e;
    },
    nte = function nte() {
      ate.enable = function () {}, QM = !0;
      var e = XM.f,
        t = Yee([].splice),
        a = {};
      a[Xn] = 1, e(a).length && (XM.f = function (i) {
        for (var u = e(i), l = 0, c = u.length; l < c; l++) if (u[l] === Xn) {
          t(u, l, 1);
          break;
        }
        return u;
      }, Vee({
        target: "Object",
        stat: !0,
        forced: !0
      }, {
        getOwnPropertyNames: kee.f
      }));
    },
    ate = ZM.exports = {
      enable: nte,
      fastKey: ete,
      getWeakData: tte,
      onFreeze: rte
    };
  Xee[Xn] = !0;
});
var Gr = v(function (zEe, $M) {
  "use strict";

  var ite = Oa(),
    ote = Ae(),
    ute = ze(),
    ste = No(),
    lte = Ig(),
    cte = nn(),
    kM = Aa(),
    fte = Pg(),
    pte = Vf(),
    JM = Ys(),
    dte = TypeError,
    vp = function vp(e, t) {
      this.stopped = e, this.result = t;
    },
    WM = vp.prototype;
  $M.exports = function (e, t, a) {
    var i = a && a.that,
      u = !!(a && a.AS_ENTRIES),
      l = !!(a && a.IS_RECORD),
      c = !!(a && a.IS_ITERATOR),
      d = !!(a && a.INTERRUPTED),
      m = ite(t, i),
      h,
      g,
      x,
      b,
      E,
      A,
      C,
      O = function O(q) {
        return h && JM(h, "normal"), new vp(!0, q);
      },
      T = function T(q) {
        return u ? (ute(q), d ? m(q[0], q[1], O) : m(q[0], q[1])) : d ? m(q, O) : m(q);
      };
    if (l) h = e.iterator;else if (c) h = e;else {
      if (g = pte(e), !g) throw new dte(ste(e) + " is not iterable");
      if (lte(g)) {
        for (x = 0, b = cte(e); b > x; x++) if (E = T(e[x]), E && kM(WM, E)) return E;
        return new vp(!1);
      }
      h = fte(e, g);
    }
    for (A = l ? e.next : h.next; !(C = ote(A, h)).done;) {
      try {
        E = T(C.value);
      } catch (q) {
        JM(h, "throw", q);
      }
      if (_typeof(E) == "object" && E && kM(WM, E)) return E;
    }
    return new vp(!1);
  };
});
var il = v(function (LEe, tD) {
  "use strict";

  var mte = P(),
    vte = ae(),
    hte = k(),
    eD = Ns(),
    gte = Ut(),
    yte = al(),
    xte = Gr(),
    bte = wa(),
    Ete = Oe(),
    Ste = Ln(),
    Hy = Ee(),
    Fy = W(),
    Tte = Yf(),
    qte = Ma(),
    _te = zs();
  tD.exports = function (e, t, a) {
    var i = e.indexOf("Map") !== -1,
      u = e.indexOf("Weak") !== -1,
      l = i ? "set" : "add",
      c = vte[e],
      d = c && c.prototype,
      m = c,
      h = {},
      g = function g(T) {
        var q = hte(d[T]);
        gte(d, T, T === "add" ? function (B) {
          return q(this, B === 0 ? 0 : B), this;
        } : T === "delete" ? function (D) {
          return u && !Hy(D) ? !1 : q(this, D === 0 ? 0 : D);
        } : T === "get" ? function (B) {
          return u && !Hy(B) ? void 0 : q(this, B === 0 ? 0 : B);
        } : T === "has" ? function (B) {
          return u && !Hy(B) ? !1 : q(this, B === 0 ? 0 : B);
        } : function (B, G) {
          return q(this, B === 0 ? 0 : B, G), this;
        });
      },
      x = eD(e, !Ete(c) || !(u || d.forEach && !Fy(function () {
        new c().entries().next();
      })));
    if (x) m = a.getConstructor(t, e, i, l), yte.enable();else if (eD(e, !0)) {
      var b = new m(),
        E = b[l](u ? {} : -0, 1) !== b,
        A = Fy(function () {
          b.has(1);
        }),
        C = Tte(function (T) {
          new c(T);
        }),
        O = !u && Fy(function () {
          for (var T = new c(), q = 5; q--;) T[l](q, q);
          return !T.has(-0);
        });
      C || (m = t(function (T, q) {
        bte(T, d);
        var D = _te(new c(), T, m);
        return Ste(q) || xte(q, D[l], {
          that: D,
          AS_ENTRIES: i
        }), D;
      }), m.prototype = d, d.constructor = m), (A || O) && (g("delete"), g("has"), i && g("get")), (O || E) && g(l), u && d.clear && delete d.clear;
    }
    return h[e] = m, mte({
      global: !0,
      constructor: !0,
      forced: m !== c
    }, h), qte(m, e), u || a.setStrong(m, e, i), m;
  };
});
var Ky = v(function (jEe, uD) {
  "use strict";

  var rD = Ra(),
    Ate = Na(),
    nD = Is(),
    Ote = Oa(),
    Cte = wa(),
    Rte = Ln(),
    Nte = Gr(),
    wte = Kf(),
    hp = Vs(),
    Mte = wf(),
    ol = Me(),
    aD = al().fastKey,
    oD = mr(),
    iD = oD.set,
    Gy = oD.getterFor;
  uD.exports = {
    getConstructor: function getConstructor(e, t, a, i) {
      var u = e(function (h, g) {
          Cte(h, l), iD(h, {
            type: t,
            index: rD(null),
            first: null,
            last: null,
            size: 0
          }), ol || (h.size = 0), Rte(g) || Nte(g, h[i], {
            that: h,
            AS_ENTRIES: a
          });
        }),
        l = u.prototype,
        c = Gy(t),
        d = function d(h, g, x) {
          var b = c(h),
            E = m(h, g),
            A,
            C;
          return E ? E.value = x : (b.last = E = {
            index: C = aD(g, !0),
            key: g,
            value: x,
            previous: A = b.last,
            next: null,
            removed: !1
          }, b.first || (b.first = E), A && (A.next = E), ol ? b.size++ : h.size++, C !== "F" && (b.index[C] = E)), h;
        },
        m = function m(h, g) {
          var x = c(h),
            b = aD(g),
            E;
          if (b !== "F") return x.index[b];
          for (E = x.first; E; E = E.next) if (E.key === g) return E;
        };
      return nD(l, {
        clear: function clear() {
          for (var g = this, x = c(g), b = x.first; b;) b.removed = !0, b.previous && (b.previous = b.previous.next = null), b = b.next;
          x.first = x.last = null, x.index = rD(null), ol ? x.size = 0 : g.size = 0;
        },
        delete: function _delete(h) {
          var g = this,
            x = c(g),
            b = m(g, h);
          if (b) {
            var E = b.next,
              A = b.previous;
            delete x.index[b.index], b.removed = !0, A && (A.next = E), E && (E.previous = A), x.first === b && (x.first = E), x.last === b && (x.last = A), ol ? x.size-- : g.size--;
          }
          return !!b;
        },
        forEach: function forEach(g) {
          for (var x = c(this), b = Ote(g, arguments.length > 1 ? arguments[1] : void 0), E; E = E ? E.next : x.first;) for (b(E.value, E.key, this); E && E.removed;) E = E.previous;
        },
        has: function has(g) {
          return !!m(this, g);
        }
      }), nD(l, a ? {
        get: function get(g) {
          var x = m(this, g);
          return x && x.value;
        },
        set: function set(g, x) {
          return d(this, g === 0 ? 0 : g, x);
        }
      } : {
        add: function add(g) {
          return d(this, g = g === 0 ? 0 : g, g);
        }
      }), ol && Ate(l, "size", {
        configurable: !0,
        get: function get() {
          return c(this).size;
        }
      }), u;
    },
    setStrong: function setStrong(e, t, a) {
      var i = t + " Iterator",
        u = Gy(t),
        l = Gy(i);
      wte(e, t, function (c, d) {
        iD(this, {
          type: i,
          target: c,
          state: u(c),
          kind: d,
          last: null
        });
      }, function () {
        for (var c = l(this), d = c.kind, m = c.last; m && m.removed;) m = m.previous;
        return !c.target || !(c.last = m = m ? m.next : c.state.first) ? (c.target = null, hp(void 0, !0)) : hp(d === "keys" ? m.key : d === "values" ? m.value : [m.key, m.value], !1);
      }, a ? "entries" : "values", !a, !0), Mte(t);
    }
  };
});
var sD = v(function () {
  "use strict";

  var Dte = il(),
    Bte = Ky();
  Dte("Map", function (e) {
    return function () {
      return e(this, arguments.length ? arguments[0] : void 0);
    };
  }, Bte);
});
var Vy = v(function () {
  "use strict";

  sD();
});
var lD = v(function () {
  "use strict";

  var Ite = il(),
    Pte = Ky();
  Ite("Set", function (e) {
    return function () {
      return e(this, arguments.length ? arguments[0] : void 0);
    };
  }, Pte);
});
var Yy = v(function () {
  "use strict";

  lD();
});
var Xy = v(function (ZEe, cD) {
  "use strict";

  cD.exports = {
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
var gp = v(function (kEe, dD) {
  "use strict";

  var Ute = k(),
    fD = Error,
    zte = Ute("".replace),
    Lte = function (e) {
      return String(new fD(e).stack);
    }("zxcasd"),
    pD = /\n\s*at [^:]*:[^\n]*/,
    jte = pD.test(Lte);
  dD.exports = function (e, t) {
    if (jte && typeof e == "string" && !fD.prepareStackTrace) for (; t--;) e = zte(e, pD, "");
    return e;
  };
});
var qD = v(function () {
  "use strict";

  var Hte = P(),
    bp = Pt(),
    Fte = mg(),
    $y = W(),
    Gte = Ra(),
    e0 = zn(),
    Ep = Yt().f,
    Kte = Ut(),
    yp = Na(),
    xp = ot(),
    Vte = wa(),
    Yte = ze(),
    hD = Iy(),
    mD = nl(),
    Jo = Xy(),
    Xte = gp(),
    gD = mr(),
    t0 = Me(),
    yD = Ke(),
    Wo = "DOMException",
    Wy = "DATA_CLONE_ERR",
    Tp = bp("Error"),
    Qn = bp(Wo) || function () {
      try {
        var e = bp("MessageChannel") || Fte("worker_threads").MessageChannel;
        new e().port1.postMessage(new WeakMap());
      } catch (t) {
        if (t.name === Wy && t.code === 25) return t.constructor;
      }
    }(),
    Qte = Qn && Qn.prototype,
    xD = Tp.prototype,
    Zte = gD.set,
    kte = gD.getterFor(Wo),
    Jte = "stack" in new Tp(Wo),
    bD = function bD(e) {
      return xp(Jo, e) && Jo[e].m ? Jo[e].c : 0;
    },
    r0 = function r0() {
      Vte(this, sl);
      var t = arguments.length,
        a = mD(t < 1 ? void 0 : arguments[0]),
        i = mD(t < 2 ? void 0 : arguments[1], "Error"),
        u = bD(i);
      if (Zte(this, {
        type: Wo,
        name: i,
        message: a,
        code: u
      }), t0 || (this.name = i, this.message = a, this.code = u), Jte) {
        var l = new Tp(a);
        l.name = Wo, Ep(this, "stack", e0(1, Xte(l.stack, 1)));
      }
    },
    sl = r0.prototype = Gte(xD),
    ED = function ED(e) {
      return {
        enumerable: !0,
        configurable: !0,
        get: e
      };
    },
    Qy = function Qy(e) {
      return ED(function () {
        return kte(this)[e];
      });
    };
  t0 && (yp(sl, "code", Qy("code")), yp(sl, "message", Qy("message")), yp(sl, "name", Qy("name")));
  Ep(sl, "constructor", e0(1, r0));
  var qp = $y(function () {
      return !(new Qn() instanceof Tp);
    }),
    SD = qp || $y(function () {
      return xD.toString !== hD || String(new Qn(1, 2)) !== "2: 1";
    }),
    TD = qp || $y(function () {
      return new Qn(1, "DataCloneError").code !== 25;
    }),
    Wte = qp || Qn[Wy] !== 25 || Qte[Wy] !== 25,
    vD = yD ? SD || TD || Wte : qp;
  Hte({
    global: !0,
    constructor: !0,
    forced: vD
  }, {
    DOMException: vD ? r0 : Qn
  });
  var ll = bp(Wo),
    Sp = ll.prototype;
  SD && (yD || Qn === ll) && Kte(Sp, "toString", hD);
  TD && t0 && Qn === ll && yp(Sp, "code", ED(function () {
    return bD(Yte(this).name);
  }));
  for (Zy in Jo) xp(Jo, Zy) && (ky = Jo[Zy], ul = ky.s, Jy = e0(6, ky.c), xp(ll, ul) || Ep(ll, ul, Jy), xp(Sp, ul) || Ep(Sp, ul, Jy));
  var ky, ul, Jy, Zy;
});
var wD = v(function () {
  "use strict";

  var $te = P(),
    ere = ae(),
    c0 = Pt(),
    s0 = zn(),
    l0 = Yt().f,
    _D = ot(),
    tre = wa(),
    rre = zs(),
    AD = nl(),
    n0 = Xy(),
    nre = gp(),
    are = Me(),
    RD = Ke(),
    fl = "DOMException",
    ND = c0("Error"),
    pl = c0(fl),
    _f2 = function f0() {
      tre(this, ire);
      var t = arguments.length,
        a = AD(t < 1 ? void 0 : arguments[0]),
        i = AD(t < 2 ? void 0 : arguments[1], "Error"),
        u = new pl(a, i),
        l = new ND(a);
      return l.name = fl, l0(u, "stack", s0(1, nre(l.stack, 1))), rre(u, this, _f2), u;
    },
    ire = _f2.prototype = pl.prototype,
    ore = "stack" in new ND(fl),
    ure = "stack" in new pl(1, 2),
    a0 = pl && are && Object.getOwnPropertyDescriptor(ere, fl),
    sre = !!a0 && !(a0.writable && a0.configurable),
    OD = ore && !sre && !ure;
  $te({
    global: !0,
    constructor: !0,
    forced: RD || OD
  }, {
    DOMException: OD ? _f2 : pl
  });
  var cl = c0(fl),
    CD = cl.prototype;
  if (CD.constructor !== cl) {
    RD || l0(CD, "constructor", s0(1, cl));
    for (i0 in n0) _D(n0, i0) && (o0 = n0[i0], u0 = o0.s, _D(cl, u0) || l0(cl, u0, s0(6, o0.c)));
  }
  var o0, u0, i0;
});
var DD = v(function () {
  "use strict";

  var lre = Pt(),
    cre = Ma(),
    MD = "DOMException";
  cre(lre(MD), MD);
});
var p0 = v(function (nSe, BD) {
  "use strict";

  var fre = TypeError;
  BD.exports = function (e, t) {
    if (e < t) throw new fre("Not enough arguments");
    return e;
  };
});
var $o = v(function (aSe, ID) {
  "use strict";

  var _p = k(),
    dl = Map.prototype;
  ID.exports = {
    Map: Map,
    set: _p(dl.set),
    get: _p(dl.get),
    has: _p(dl.has),
    remove: _p(dl.delete),
    proto: dl
  };
});
var Or = v(function (iSe, PD) {
  "use strict";

  var d0 = k(),
    Ap = Set.prototype;
  PD.exports = {
    Set: Set,
    add: d0(Ap.add),
    has: d0(Ap.has),
    remove: d0(Ap.delete),
    proto: Ap
  };
});
var za = v(function (oSe, UD) {
  "use strict";

  var pre = Ae();
  UD.exports = function (e, t, a) {
    for (var i = a ? e : e.iterator, u = e.next, l, c; !(l = pre(u, i)).done;) if (c = t(l.value), c !== void 0) return c;
  };
});
var Ni = v(function (uSe, FD) {
  "use strict";

  var zD = k(),
    dre = za(),
    LD = Or(),
    mre = LD.Set,
    jD = LD.proto,
    vre = zD(jD.forEach),
    HD = zD(jD.keys),
    hre = HD(new mre()).next;
  FD.exports = function (e, t, a) {
    return a ? dre({
      iterator: HD(e),
      next: hre
    }, t) : vre(e, t);
  };
});
var m0 = v(function (sSe, GD) {
  "use strict";

  var gre = W(),
    yre = zn();
  GD.exports = !gre(function () {
    var e = new Error("a");
    return "stack" in e ? (Object.defineProperty(e, "stack", yre(1, 7)), e.stack !== 7) : !0;
  });
});
var eB = v(function () {
  "use strict";

  var xre = Ke(),
    bre = P(),
    Tt = ae(),
    vl = Pt(),
    gl = k(),
    b0 = W(),
    Ere = wo(),
    tu = Oe(),
    Sre = Ms(),
    Tre = Ln(),
    wp = Ee(),
    qre = Ss(),
    _re = Gr(),
    YD = ze(),
    Rp = Ti(),
    Are = ot(),
    Ore = bf(),
    v0 = _r(),
    Op = nn(),
    Cre = p0(),
    Rre = Xo(),
    Mp = $o(),
    E0 = Or(),
    Nre = Ni(),
    KD = Eg(),
    wre = m0(),
    S0 = zf(),
    ml = Tt.Object,
    Mre = Tt.Array,
    XD = Tt.Date,
    QD = Tt.Error,
    Dre = Tt.TypeError,
    Bre = Tt.PerformanceMark,
    wi = vl("DOMException"),
    y0 = Mp.Map,
    T0 = Mp.has,
    ZD = Mp.get,
    Np = Mp.set,
    kD = E0.Set,
    JD = E0.add,
    Ire = E0.has,
    Pre = vl("Object", "keys"),
    Ure = gl([].push),
    zre = gl((!0).valueOf),
    Lre = gl(1.1.valueOf),
    jre = gl("".valueOf),
    Hre = gl(XD.prototype.getTime),
    x0 = Ere("structuredClone"),
    hl = "DataCloneError",
    Cp = "Transferring",
    WD = function WD(e) {
      return !b0(function () {
        var t = new Tt.Set([7]),
          a = e(t),
          i = e(ml(7));
        return a === t || !a.has(7) || !wp(i) || +i != 7;
      }) && e;
    },
    VD = function VD(e, t) {
      return !b0(function () {
        var a = new t(),
          i = e({
            a: a,
            b: a
          });
        return !(i && i.a === i.b && i.a instanceof t && i.a.stack === a.stack);
      });
    },
    Fre = function Fre(e) {
      return !b0(function () {
        var t = e(new Tt.AggregateError([1], x0, {
          cause: 3
        }));
        return t.name !== "AggregateError" || t.errors[0] !== 1 || t.message !== x0 || t.cause !== 3;
      });
    },
    eu = Tt.structuredClone,
    Gre = xre || !VD(eu, QD) || !VD(eu, wi) || !Fre(eu),
    Kre = !eu && WD(function (e) {
      return new Bre(x0, {
        detail: e
      }).detail;
    }),
    Zn = WD(eu) || Kre,
    h0 = function h0(e) {
      throw new wi("Uncloneable type: " + e, hl);
    },
    Wt = function Wt(e, t) {
      throw new wi((t || "Cloning") + " of " + e + " cannot be properly polyfilled in this engine", hl);
    },
    g0 = function g0(e, t) {
      return Zn || Wt(t), Zn(e);
    },
    Vre = function Vre() {
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
    $D = function $D(e, t, a) {
      if (T0(t, e)) return ZD(t, e);
      var i = a || Rp(e),
        u,
        l,
        c,
        d,
        m,
        h;
      if (i === "SharedArrayBuffer") Zn ? u = Zn(e) : u = e;else {
        var g = Tt.DataView;
        !g && !tu(e.slice) && Wt("ArrayBuffer");
        try {
          if (tu(e.slice) && !e.resizable) u = e.slice(0);else for (l = e.byteLength, c = ("maxByteLength" in e) ? {
            maxByteLength: e.maxByteLength
          } : void 0, u = new ArrayBuffer(l, c), d = new g(e), m = new g(u), h = 0; h < l; h++) m.setUint8(h, d.getUint8(h));
        } catch (_unused31) {
          throw new wi("ArrayBuffer is detached", hl);
        }
      }
      return Np(t, e, u), u;
    },
    Yre = function Yre(e, t, a, i, u) {
      var l = Tt[t];
      return wp(l) || Wt(t), new l($D(e.buffer, u), a, i);
    },
    _St = function St(e, t) {
      if (qre(e) && h0("Symbol"), !wp(e)) return e;
      if (t) {
        if (T0(t, e)) return ZD(t, e);
      } else t = new y0();
      var a = Rp(e),
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
          l = Mre(Op(e));
          break;
        case "Object":
          l = {};
          break;
        case "Map":
          l = new y0();
          break;
        case "Set":
          l = new kD();
          break;
        case "RegExp":
          l = new RegExp(e.source, Rre(e));
          break;
        case "Error":
          switch (u = e.name, u) {
            case "AggregateError":
              l = new (vl(u))([]);
              break;
            case "EvalError":
            case "RangeError":
            case "ReferenceError":
            case "SuppressedError":
            case "SyntaxError":
            case "TypeError":
            case "URIError":
              l = new (vl(u))();
              break;
            case "CompileError":
            case "LinkError":
            case "RuntimeError":
              l = new (vl("WebAssembly", u))();
              break;
            default:
              l = new QD();
          }
          break;
        case "DOMException":
          l = new wi(e.message, e.name);
          break;
        case "ArrayBuffer":
        case "SharedArrayBuffer":
          l = $D(e, t, a);
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
          m = a === "DataView" ? e.byteLength : e.length, l = Yre(e, a, e.byteOffset, m, t);
          break;
        case "DOMQuad":
          try {
            l = new DOMQuad(_St(e.p1, t), _St(e.p2, t), _St(e.p3, t), _St(e.p4, t));
          } catch (_unused32) {
            l = g0(e, a);
          }
          break;
        case "File":
          if (Zn) try {
            l = Zn(e), Rp(l) !== a && (l = void 0);
          } catch (_unused33) {}
          if (!l) try {
            l = new File([e], e.name, e);
          } catch (_unused34) {}
          l || Wt(a);
          break;
        case "FileList":
          if (c = Vre(), c) {
            for (d = 0, m = Op(e); d < m; d++) c.items.add(_St(e[d], t));
            l = c.files;
          } else l = g0(e, a);
          break;
        case "ImageData":
          try {
            l = new ImageData(_St(e.data, t), e.width, e.height, {
              colorSpace: e.colorSpace
            });
          } catch (_unused35) {
            l = g0(e, a);
          }
          break;
        default:
          if (Zn) l = Zn(e);else switch (a) {
            case "BigInt":
              l = ml(e.valueOf());
              break;
            case "Boolean":
              l = ml(zre(e));
              break;
            case "Number":
              l = ml(Lre(e));
              break;
            case "String":
              l = ml(jre(e));
              break;
            case "Date":
              l = new XD(Hre(e));
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
              tu(e.clone) || Wt(a);
              try {
                l = e.clone();
              } catch (_unused40) {
                h0(a);
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
              h0(a);
          }
      }
      switch (Np(t, e, l), a) {
        case "Array":
        case "Object":
          for (h = Pre(e), d = 0, m = Op(h); d < m; d++) g = h[d], Ore(l, g, _St(e[g], t));
          break;
        case "Map":
          e.forEach(function (x, b) {
            Np(l, _St(b, t), _St(x, t));
          });
          break;
        case "Set":
          e.forEach(function (x) {
            JD(l, _St(x, t));
          });
          break;
        case "Error":
          v0(l, "message", _St(e.message, t)), Are(e, "cause") && v0(l, "cause", _St(e.cause, t)), u === "AggregateError" ? l.errors = _St(e.errors, t) : u === "SuppressedError" && (l.error = _St(e.error, t), l.suppressed = _St(e.suppressed, t));
        case "DOMException":
          wre && v0(l, "stack", _St(e.stack, t));
      }
      return l;
    },
    Xre = function Xre(e, t) {
      if (!wp(e)) throw new Dre("Transfer option cannot be converted to a sequence");
      var a = [];
      _re(e, function (b) {
        Ure(a, YD(b));
      });
      for (var i = 0, u = Op(a), l = new kD(), c, d, m, h, g, x; i < u;) {
        if (c = a[i++], d = Rp(c), d === "ArrayBuffer" ? Ire(l, c) : T0(t, c)) throw new wi("Duplicate transferable", hl);
        if (d === "ArrayBuffer") {
          JD(l, c);
          continue;
        }
        if (S0) h = eu(c, {
          transfer: [c]
        });else switch (d) {
          case "ImageBitmap":
            m = Tt.OffscreenCanvas, Sre(m) || Wt(d, Cp);
            try {
              g = new m(c.width, c.height), x = g.getContext("bitmaprenderer"), x.transferFromImageBitmap(c), h = g.transferToImageBitmap();
            } catch (_unused41) {}
            break;
          case "AudioData":
          case "VideoFrame":
            (!tu(c.clone) || !tu(c.close)) && Wt(d, Cp);
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
            Wt(d, Cp);
        }
        if (h === void 0) throw new wi("This object cannot be transferred: " + d, hl);
        Np(t, c, h);
      }
      return l;
    },
    Qre = function Qre(e) {
      Nre(e, function (t) {
        S0 ? Zn(t, {
          transfer: [t]
        }) : tu(t.transfer) ? t.transfer() : KD ? KD(t) : Wt("ArrayBuffer", Cp);
      });
    };
  bre({
    global: !0,
    enumerable: !0,
    sham: !S0,
    forced: Gre
  }, {
    structuredClone: function structuredClone(t) {
      var a = Cre(arguments.length, 1) > 1 && !Tre(arguments[1]) ? YD(arguments[1]) : void 0,
        i = a ? a.transfer : void 0,
        u,
        l;
      i !== void 0 && (u = new y0(), l = Xre(i, u));
      var c = _St(t, u);
      return l && Qre(l), c;
    }
  });
});
var rB = v(function (fSe, tB) {
  "use strict";

  RM();
  Ua();
  PM();
  Vn();
  Vy();
  Yy();
  qD();
  wD();
  DD();
  eB();
  var Zre = ut();
  tB.exports = Zre.structuredClone;
});
var aB = v(function () {
  "use strict";

  var kre = P(),
    yl = k(),
    Jre = Re(),
    Wre = yl("".charAt),
    $re = yl("".charCodeAt),
    ene = yl(/./.exec),
    tne = yl(1.1.toString),
    rne = yl("".toUpperCase),
    nne = /[\w*+\-./@]/,
    nB = function nB(e, t) {
      for (var a = tne(e, 16); a.length < t;) a = "0" + a;
      return a;
    };
  kre({
    global: !0
  }, {
    escape: function escape(t) {
      for (var a = Jre(t), i = "", u = a.length, l = 0, c, d; l < u;) c = Wre(a, l++), ene(nne, c) ? i += c : (d = $re(c, 0), d < 256 ? i += "%" + nB(d, 2) : i += "%u" + rne(nB(d, 4)));
      return i;
    }
  });
});
var oB = v(function (mSe, iB) {
  "use strict";

  aB();
  var ane = ut();
  iB.exports = ane.escape;
});
var sB = v(function (vSe, uB) {
  "use strict";

  var ine = oB();
  uB.exports = ine;
});
var dB = v(function () {
  "use strict";

  var one = P(),
    q0 = k(),
    une = Re(),
    lB = String.fromCharCode,
    cB = q0("".charAt),
    fB = q0(/./.exec),
    pB = q0("".slice),
    sne = /^[\da-f]{2}$/i,
    lne = /^[\da-f]{4}$/i;
  one({
    global: !0
  }, {
    unescape: function unescape(t) {
      for (var a = une(t), i = "", u = a.length, l = 0, c, d; l < u;) {
        if (c = cB(a, l++), c === "%") {
          if (cB(a, l) === "u") {
            if (d = pB(a, l + 1, l + 5), fB(lne, d)) {
              i += lB(parseInt(d, 16)), l += 5;
              continue;
            }
          } else if (d = pB(a, l, l + 2), fB(sne, d)) {
            i += lB(parseInt(d, 16)), l += 2;
            continue;
          }
        }
        i += c;
      }
      return i;
    }
  });
});
var vB = v(function (ySe, mB) {
  "use strict";

  dB();
  var cne = ut();
  mB.exports = cne.unescape;
});
var gB = v(function (xSe, hB) {
  "use strict";

  var fne = vB();
  hB.exports = fne;
});
var xB = v(function (bSe, yB) {
  "use strict";

  var pne = Ee(),
    dne = _r();
  yB.exports = function (e, t) {
    pne(t) && "cause" in t && dne(e, "cause", t.cause);
  };
});
var SB = v(function (ESe, EB) {
  "use strict";

  var mne = _r(),
    vne = gp(),
    hne = m0(),
    bB = Error.captureStackTrace;
  EB.exports = function (e, t, a, i) {
    hne && (bB ? bB(e, t) : mne(e, "stack", vne(a, i)));
  };
});
var qB = v(function () {
  "use strict";

  var gne = P(),
    yne = Aa(),
    xne = _i(),
    Dp = Ai(),
    bne = hf(),
    TB = Ra(),
    _0 = _r(),
    A0 = zn(),
    Ene = xB(),
    Sne = SB(),
    Tne = Gr(),
    qne = nl(),
    _ne = Ue(),
    Ane = _ne("toStringTag"),
    Bp = Error,
    One = [].push,
    _ru = function ru(t, a) {
      var i = yne(O0, this),
        u;
      Dp ? u = Dp(new Bp(), i ? xne(this) : O0) : (u = i ? this : TB(O0), _0(u, Ane, "Error")), a !== void 0 && _0(u, "message", qne(a)), Sne(u, _ru, u.stack, 1), arguments.length > 2 && Ene(u, arguments[2]);
      var l = [];
      return Tne(t, One, {
        that: l
      }), _0(u, "errors", l), u;
    };
  Dp ? Dp(_ru, Bp) : bne(_ru, Bp, {
    name: !0
  });
  var O0 = _ru.prototype = TB(Bp.prototype, {
    constructor: A0(1, _ru),
    message: A0(1, ""),
    name: A0(1, "AggregateError")
  });
  gne({
    global: !0,
    constructor: !0,
    arity: 2
  }, {
    AggregateError: _ru
  });
});
var _B = v(function () {
  "use strict";

  qB();
});
var C0 = v(function (ASe, AB) {
  "use strict";

  var Cne = Ei();
  AB.exports = /(?:ipad|iphone|ipod).*applewebkit/i.test(Cne);
});
var U0 = v(function (OSe, IB) {
  "use strict";

  var hr = ae(),
    Rne = up(),
    Nne = Oa(),
    OB = Oe(),
    wne = ot(),
    BB = W(),
    CB = Uh(),
    Mne = Us(),
    RB = Ts(),
    Dne = p0(),
    Bne = C0(),
    Ine = Fs(),
    B0 = hr.setImmediate,
    I0 = hr.clearImmediate,
    Pne = hr.process,
    R0 = hr.Dispatch,
    Une = hr.Function,
    NB = hr.MessageChannel,
    zne = hr.String,
    N0 = 0,
    xl = {},
    wB = "onreadystatechange",
    bl,
    Mi,
    w0,
    M0;
  BB(function () {
    bl = hr.location;
  });
  var P0 = function P0(e) {
      if (wne(xl, e)) {
        var t = xl[e];
        delete xl[e], t();
      }
    },
    D0 = function D0(e) {
      return function () {
        P0(e);
      };
    },
    MB = function MB(e) {
      P0(e.data);
    },
    DB = function DB(e) {
      hr.postMessage(zne(e), bl.protocol + "//" + bl.host);
    };
  (!B0 || !I0) && (B0 = function B0(t) {
    Dne(arguments.length, 1);
    var a = OB(t) ? t : Une(t),
      i = Mne(arguments, 1);
    return xl[++N0] = function () {
      Rne(a, void 0, i);
    }, Mi(N0), N0;
  }, I0 = function I0(t) {
    delete xl[t];
  }, Ine ? Mi = function Mi(e) {
    Pne.nextTick(D0(e));
  } : R0 && R0.now ? Mi = function Mi(e) {
    R0.now(D0(e));
  } : NB && !Bne ? (w0 = new NB(), M0 = w0.port2, w0.port1.onmessage = MB, Mi = Nne(M0.postMessage, M0)) : hr.addEventListener && OB(hr.postMessage) && !hr.importScripts && bl && bl.protocol !== "file:" && !BB(DB) ? (Mi = DB, hr.addEventListener("message", MB, !1)) : wB in RB("script") ? Mi = function Mi(e) {
    CB.appendChild(RB("script"))[wB] = function () {
      CB.removeChild(this), P0(e);
    };
  } : Mi = function Mi(e) {
    setTimeout(D0(e), 0);
  });
  IB.exports = {
    set: B0,
    clear: I0
  };
});
var zB = v(function (CSe, UB) {
  "use strict";

  var PB = ae(),
    Lne = Me(),
    jne = Object.getOwnPropertyDescriptor;
  UB.exports = function (e) {
    if (!Lne) return PB[e];
    var t = jne(PB, e);
    return t && t.value;
  };
});
var z0 = v(function (RSe, jB) {
  "use strict";

  var LB = function LB() {
    this.head = null, this.tail = null;
  };
  LB.prototype = {
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
  jB.exports = LB;
});
var FB = v(function (NSe, HB) {
  "use strict";

  var Hne = Ei();
  HB.exports = /ipad|iphone|ipod/i.test(Hne) && (typeof Pebble === "undefined" ? "undefined" : _typeof(Pebble)) < "u";
});
var KB = v(function (wSe, GB) {
  "use strict";

  var Fne = Ei();
  GB.exports = /web0s(?!.*chrome)/i.test(Fne);
});
var JB = v(function (MSe, kB) {
  "use strict";

  var au = ae(),
    Gne = zB(),
    VB = Oa(),
    L0 = U0().set,
    Kne = z0(),
    Vne = C0(),
    Yne = FB(),
    Xne = KB(),
    j0 = Fs(),
    YB = au.MutationObserver || au.WebKitMutationObserver,
    XB = au.document,
    QB = au.process,
    Ip = au.Promise,
    G0 = Gne("queueMicrotask"),
    nu,
    H0,
    F0,
    Pp,
    ZB;
  G0 || (El = new Kne(), Sl = function Sl() {
    var e, t;
    for (j0 && (e = QB.domain) && e.exit(); t = El.get();) try {
      t();
    } catch (a) {
      throw El.head && nu(), a;
    }
    e && e.enter();
  }, !Vne && !j0 && !Xne && YB && XB ? (H0 = !0, F0 = XB.createTextNode(""), new YB(Sl).observe(F0, {
    characterData: !0
  }), nu = function nu() {
    F0.data = H0 = !H0;
  }) : !Yne && Ip && Ip.resolve ? (Pp = Ip.resolve(void 0), Pp.constructor = Ip, ZB = VB(Pp.then, Pp), nu = function nu() {
    ZB(Sl);
  }) : j0 ? nu = function nu() {
    QB.nextTick(Sl);
  } : (L0 = VB(L0, au), nu = function nu() {
    L0(Sl);
  }), G0 = function G0(e) {
    El.head || nu(), El.add(e);
  });
  var El, Sl;
  kB.exports = G0;
});
var $B = v(function (DSe, WB) {
  "use strict";

  WB.exports = function (e, t) {
    try {
      arguments.length === 1 ? console.error(e) : console.error(e, t);
    } catch (_unused43) {}
  };
});
var Di = v(function (BSe, e3) {
  "use strict";

  e3.exports = function (e) {
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
var Bi = v(function (ISe, t3) {
  "use strict";

  var Qne = ae();
  t3.exports = Qne.Promise;
});
var iu = v(function (PSe, i3) {
  "use strict";

  var Zne = ae(),
    Tl = Bi(),
    kne = Oe(),
    Jne = Ns(),
    Wne = lf(),
    $ne = Ue(),
    r3 = Uf(),
    eae = Ke(),
    K0 = nf(),
    n3 = Tl && Tl.prototype,
    tae = $ne("species"),
    V0 = !1,
    a3 = kne(Zne.PromiseRejectionEvent),
    rae = Jne("Promise", function () {
      var e = Wne(Tl),
        t = e !== String(Tl);
      if (!t && K0 === 66 || eae && !(n3.catch && n3.finally)) return !0;
      if (!K0 || K0 < 51 || !/native code/.test(e)) {
        var a = new Tl(function (l) {
            l(1);
          }),
          i = function i(l) {
            l(function () {}, function () {});
          },
          u = a.constructor = {};
        if (u[tae] = i, V0 = a.then(function () {}) instanceof i, !V0) return !0;
      }
      return !t && (r3 === "BROWSER" || r3 === "DENO") && !a3;
    });
  i3.exports = {
    CONSTRUCTOR: rae,
    REJECTION_EVENT: a3,
    SUBCLASSING: V0
  };
});
var sn = v(function (USe, u3) {
  "use strict";

  var o3 = Mt(),
    nae = TypeError,
    aae = function aae(e) {
      var t, a;
      this.promise = new e(function (i, u) {
        if (t !== void 0 || a !== void 0) throw new nae("Bad Promise constructor");
        t = i, a = u;
      }), this.resolve = o3(t), this.reject = o3(a);
    };
  u3.exports.f = function (e) {
    return new aae(e);
  };
});
var O3 = v(function () {
  "use strict";

  var iae = P(),
    oae = Ke(),
    jp = Fs(),
    La = ae(),
    uae = ut(),
    lu = Ae(),
    s3 = Ut(),
    l3 = Ai(),
    sae = Ma(),
    lae = wf(),
    cae = Mt(),
    Lp = Oe(),
    fae = Ee(),
    pae = wa(),
    dae = tl(),
    m3 = U0().set,
    k0 = JB(),
    mae = $B(),
    vae = Di(),
    hae = z0(),
    v3 = mr(),
    Hp = Bi(),
    J0 = iu(),
    h3 = sn(),
    Fp = "Promise",
    g3 = J0.CONSTRUCTOR,
    gae = J0.REJECTION_EVENT,
    yae = J0.SUBCLASSING,
    Y0 = v3.getterFor(Fp),
    xae = v3.set,
    ou = Hp && Hp.prototype,
    Ii = Hp,
    Up = ou,
    y3 = La.TypeError,
    X0 = La.document,
    W0 = La.process,
    Q0 = h3.f,
    bae = Q0,
    Eae = !!(X0 && X0.createEvent && La.dispatchEvent),
    x3 = "unhandledrejection",
    Sae = "rejectionhandled",
    c3 = 0,
    b3 = 1,
    Tae = 2,
    $0 = 1,
    E3 = 2,
    zp,
    f3,
    S3,
    p3,
    T3 = function T3(e) {
      var t;
      return fae(e) && Lp(t = e.then) ? t : !1;
    },
    q3 = function q3(e, t) {
      var a = t.value,
        i = t.state === b3,
        u = i ? e.ok : e.fail,
        l = e.resolve,
        c = e.reject,
        d = e.domain,
        m,
        h,
        g;
      try {
        u ? (i || (t.rejection === E3 && _ae(t), t.rejection = $0), u === !0 ? m = a : (d && d.enter(), m = u(a), d && (d.exit(), g = !0)), m === e.promise ? c(new y3("Promise-chain cycle")) : (h = T3(m)) ? lu(h, m, l, c) : l(m)) : c(a);
      } catch (x) {
        d && !g && d.exit(), c(x);
      }
    },
    _3 = function _3(e, t) {
      e.notified || (e.notified = !0, k0(function () {
        for (var a = e.reactions, i; i = a.get();) q3(i, e);
        e.notified = !1, t && !e.rejection && qae(e);
      }));
    },
    A3 = function A3(e, t, a) {
      var i, u;
      Eae ? (i = X0.createEvent("Event"), i.promise = t, i.reason = a, i.initEvent(e, !1, !0), La.dispatchEvent(i)) : i = {
        promise: t,
        reason: a
      }, !gae && (u = La["on" + e]) ? u(i) : e === x3 && mae("Unhandled promise rejection", a);
    },
    qae = function qae(e) {
      lu(m3, La, function () {
        var t = e.facade,
          a = e.value,
          i = d3(e),
          u;
        if (i && (u = vae(function () {
          jp ? W0.emit("unhandledRejection", a, t) : A3(x3, t, a);
        }), e.rejection = jp || d3(e) ? E3 : $0, u.error)) throw u.value;
      });
    },
    d3 = function d3(e) {
      return e.rejection !== $0 && !e.parent;
    },
    _ae = function _ae(e) {
      lu(m3, La, function () {
        var t = e.facade;
        jp ? W0.emit("rejectionHandled", t) : A3(Sae, t, e.value);
      });
    },
    uu = function uu(e, t, a) {
      return function (i) {
        e(t, i, a);
      };
    },
    su = function su(e, t, a) {
      e.done || (e.done = !0, a && (e = a), e.value = t, e.state = Tae, _3(e, !0));
    },
    _Z2 = function Z0(e, t, a) {
      if (!e.done) {
        e.done = !0, a && (e = a);
        try {
          if (e.facade === t) throw new y3("Promise can't be resolved itself");
          var i = T3(t);
          i ? k0(function () {
            var u = {
              done: !1
            };
            try {
              lu(i, t, uu(_Z2, u, e), uu(su, u, e));
            } catch (l) {
              su(u, l, e);
            }
          }) : (e.value = t, e.state = b3, _3(e, !1));
        } catch (u) {
          su({
            done: !1
          }, u, e);
        }
      }
    };
  if (g3 && (Ii = function Ii(t) {
    pae(this, Up), cae(t), lu(zp, this);
    var a = Y0(this);
    try {
      t(uu(_Z2, a), uu(su, a));
    } catch (i) {
      su(a, i);
    }
  }, Up = Ii.prototype, zp = function zp(t) {
    xae(this, {
      type: Fp,
      done: !1,
      notified: !1,
      parent: !1,
      reactions: new hae(),
      rejection: !1,
      state: c3,
      value: null
    });
  }, zp.prototype = s3(Up, "then", function (t, a) {
    var i = Y0(this),
      u = Q0(dae(this, Ii));
    return i.parent = !0, u.ok = Lp(t) ? t : !0, u.fail = Lp(a) && a, u.domain = jp ? W0.domain : void 0, i.state === c3 ? i.reactions.add(u) : k0(function () {
      q3(u, i);
    }), u.promise;
  }), f3 = function f3() {
    var e = new zp(),
      t = Y0(e);
    this.promise = e, this.resolve = uu(_Z2, t), this.reject = uu(su, t);
  }, h3.f = Q0 = function Q0(e) {
    return e === Ii || e === S3 ? new f3(e) : bae(e);
  }, !oae && Lp(Hp) && ou !== Object.prototype)) {
    p3 = ou.then, yae || s3(ou, "then", function (t, a) {
      var i = this;
      return new Ii(function (u, l) {
        lu(p3, i, u, l);
      }).then(t, a);
    }, {
      unsafe: !0
    });
    try {
      delete ou.constructor;
    } catch (_unused44) {}
    l3 && l3(ou, Up);
  }
  iae({
    global: !0,
    constructor: !0,
    wrap: !0,
    forced: g3
  }, {
    Promise: Ii
  });
  S3 = uae.Promise;
  sae(Ii, Fp, !1, !0);
  lae(Fp);
});
var ql = v(function (jSe, C3) {
  "use strict";

  var Aae = Bi(),
    Oae = Yf(),
    Cae = iu().CONSTRUCTOR;
  C3.exports = Cae || !Oae(function (e) {
    Aae.all(e).then(void 0, function () {});
  });
});
var R3 = v(function () {
  "use strict";

  var Rae = P(),
    Nae = Ae(),
    wae = Mt(),
    Mae = sn(),
    Dae = Di(),
    Bae = Gr(),
    Iae = ql();
  Rae({
    target: "Promise",
    stat: !0,
    forced: Iae
  }, {
    all: function all(t) {
      var a = this,
        i = Mae.f(a),
        u = i.resolve,
        l = i.reject,
        c = Dae(function () {
          var d = wae(a.resolve),
            m = [],
            h = 0,
            g = 1;
          Bae(t, function (x) {
            var b = h++,
              E = !1;
            g++, Nae(d, a, x).then(function (A) {
              E || (E = !0, m[b] = A, --g || u(m));
            }, l);
          }), --g || u(m);
        });
      return c.error && l(c.value), i.promise;
    }
  });
});
var w3 = v(function () {
  "use strict";

  var Pae = P(),
    Uae = Ke(),
    zae = iu().CONSTRUCTOR,
    tx = Bi(),
    Lae = Pt(),
    jae = Oe(),
    Hae = Ut(),
    N3 = tx && tx.prototype;
  Pae({
    target: "Promise",
    proto: !0,
    forced: zae,
    real: !0
  }, {
    catch: function _catch(e) {
      return this.then(void 0, e);
    }
  });
  !Uae && jae(tx) && (ex = Lae("Promise").prototype.catch, N3.catch !== ex && Hae(N3, "catch", ex, {
    unsafe: !0
  }));
  var ex;
});
var M3 = v(function () {
  "use strict";

  var Fae = P(),
    Gae = Ae(),
    Kae = Mt(),
    Vae = sn(),
    Yae = Di(),
    Xae = Gr(),
    Qae = ql();
  Fae({
    target: "Promise",
    stat: !0,
    forced: Qae
  }, {
    race: function race(t) {
      var a = this,
        i = Vae.f(a),
        u = i.reject,
        l = Yae(function () {
          var c = Kae(a.resolve);
          Xae(t, function (d) {
            Gae(c, a, d).then(i.resolve, u);
          });
        });
      return l.error && u(l.value), i.promise;
    }
  });
});
var D3 = v(function () {
  "use strict";

  var Zae = P(),
    kae = sn(),
    Jae = iu().CONSTRUCTOR;
  Zae({
    target: "Promise",
    stat: !0,
    forced: Jae
  }, {
    reject: function reject(t) {
      var a = kae.f(this),
        i = a.reject;
      return i(t), a.promise;
    }
  });
});
var rx = v(function (ZSe, B3) {
  "use strict";

  var Wae = ze(),
    $ae = Ee(),
    eie = sn();
  B3.exports = function (e, t) {
    if (Wae(e), $ae(t) && t.constructor === e) return t;
    var a = eie.f(e),
      i = a.resolve;
    return i(t), a.promise;
  };
});
var U3 = v(function () {
  "use strict";

  var tie = P(),
    rie = Pt(),
    I3 = Ke(),
    nie = Bi(),
    P3 = iu().CONSTRUCTOR,
    aie = rx(),
    iie = rie("Promise"),
    oie = I3 && !P3;
  tie({
    target: "Promise",
    stat: !0,
    forced: I3 || P3
  }, {
    resolve: function resolve(t) {
      return aie(oie && this === iie ? nie : this, t);
    }
  });
});
var z3 = v(function () {
  "use strict";

  O3();
  R3();
  w3();
  M3();
  D3();
  U3();
});
var L3 = v(function () {
  "use strict";

  var uie = P(),
    sie = Ae(),
    lie = Mt(),
    cie = sn(),
    fie = Di(),
    pie = Gr(),
    die = ql();
  uie({
    target: "Promise",
    stat: !0,
    forced: die
  }, {
    allSettled: function allSettled(t) {
      var a = this,
        i = cie.f(a),
        u = i.resolve,
        l = i.reject,
        c = fie(function () {
          var d = lie(a.resolve),
            m = [],
            h = 0,
            g = 1;
          pie(t, function (x) {
            var b = h++,
              E = !1;
            g++, sie(d, a, x).then(function (A) {
              E || (E = !0, m[b] = {
                status: "fulfilled",
                value: A
              }, --g || u(m));
            }, function (A) {
              E || (E = !0, m[b] = {
                status: "rejected",
                reason: A
              }, --g || u(m));
            });
          }), --g || u(m);
        });
      return c.error && l(c.value), i.promise;
    }
  });
});
var H3 = v(function () {
  "use strict";

  var mie = P(),
    vie = Ae(),
    hie = Mt(),
    gie = Pt(),
    yie = sn(),
    xie = Di(),
    bie = Gr(),
    Eie = ql(),
    j3 = "No one promise resolved";
  mie({
    target: "Promise",
    stat: !0,
    forced: Eie
  }, {
    any: function any(t) {
      var a = this,
        i = gie("AggregateError"),
        u = yie.f(a),
        l = u.resolve,
        c = u.reject,
        d = xie(function () {
          var m = hie(a.resolve),
            h = [],
            g = 0,
            x = 1,
            b = !1;
          bie(t, function (E) {
            var A = g++,
              C = !1;
            x++, vie(m, a, E).then(function (O) {
              C || b || (b = !0, l(O));
            }, function (O) {
              C || b || (C = !0, h[A] = O, --x || c(new i(h, j3)));
            });
          }), --x || c(new i(h, j3));
        });
      return d.error && c(d.value), u.promise;
    }
  });
});
var K3 = v(function () {
  "use strict";

  var Sie = P(),
    Tie = ae(),
    qie = up(),
    _ie = Us(),
    Aie = sn(),
    Oie = Mt(),
    G3 = Di(),
    nx = Tie.Promise,
    F3 = !1,
    Cie = !nx || !nx.try || G3(function () {
      nx.try(function (e) {
        F3 = e === 8;
      }, 8);
    }).error || !F3;
  Sie({
    target: "Promise",
    stat: !0,
    forced: Cie
  }, {
    try: function _try(e) {
      var t = arguments.length > 1 ? _ie(arguments, 1) : [],
        a = Aie.f(this),
        i = G3(function () {
          return qie(Oie(e), void 0, t);
        });
      return (i.error ? a.reject : a.resolve)(i.value), a.promise;
    }
  });
});
var V3 = v(function () {
  "use strict";

  var Rie = P(),
    Nie = sn();
  Rie({
    target: "Promise",
    stat: !0
  }, {
    withResolvers: function withResolvers() {
      var t = Nie.f(this);
      return {
        promise: t.promise,
        resolve: t.resolve,
        reject: t.reject
      };
    }
  });
});
var Z3 = v(function () {
  "use strict";

  var wie = P(),
    Mie = Ke(),
    Gp = Bi(),
    Die = W(),
    X3 = Pt(),
    Q3 = Oe(),
    Bie = tl(),
    Y3 = rx(),
    Iie = Ut(),
    ix = Gp && Gp.prototype,
    Pie = !!Gp && Die(function () {
      ix.finally.call({
        then: function then() {}
      }, function () {});
    });
  wie({
    target: "Promise",
    proto: !0,
    real: !0,
    forced: Pie
  }, {
    finally: function _finally(e) {
      var t = Bie(this, X3("Promise")),
        a = Q3(e);
      return this.then(a ? function (i) {
        return Y3(t, e()).then(function () {
          return i;
        });
      } : e, a ? function (i) {
        return Y3(t, e()).then(function () {
          throw i;
        });
      } : e);
    }
  });
  !Mie && Q3(Gp) && (ax = X3("Promise").prototype.finally, ix.finally !== ax && Iie(ix, "finally", ax, {
    unsafe: !0
  }));
  var ax;
});
var J3 = v(function (c1e, k3) {
  "use strict";

  _B();
  Ua();
  Vn();
  z3();
  L3();
  H3();
  K3();
  V3();
  Z3();
  Ho();
  var Uie = ut();
  k3.exports = Uie.Promise;
});
var $3 = v(function (f1e, W3) {
  "use strict";

  W3.exports = {
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
var rI = v(function (p1e, tI) {
  "use strict";

  var zie = Ts(),
    ox = zie("span").classList,
    eI = ox && ox.constructor && ox.constructor.prototype;
  tI.exports = eI === Object.prototype ? void 0 : eI;
});
var cu = v(function () {
  "use strict";

  var nI = ae(),
    iI = $3(),
    Lie = rI(),
    _l = Ua(),
    aI = _r(),
    jie = Ma(),
    Hie = Ue(),
    ux = Hie("iterator"),
    sx = _l.values,
    oI = function oI(e, t) {
      if (e) {
        if (e[ux] !== sx) try {
          aI(e, ux, sx);
        } catch (_unused45) {
          e[ux] = sx;
        }
        if (jie(e, t, !0), iI[t]) {
          for (var a in _l) if (e[a] !== _l[a]) try {
            aI(e, a, _l[a]);
          } catch (_unused46) {
            e[a] = _l[a];
          }
        }
      }
    };
  for (Kp in iI) oI(nI[Kp] && nI[Kp].prototype, Kp);
  var Kp;
  oI(Lie, "DOMTokenList");
});
var sI = v(function (v1e, uI) {
  "use strict";

  var Fie = J3();
  cu();
  uI.exports = Fie;
});
var ja = v(function (h1e, lI) {
  "use strict";

  var Gie = Or().has;
  lI.exports = function (e) {
    return Gie(e), e;
  };
});
var Vp = v(function (g1e, fI) {
  "use strict";

  var cI = Or(),
    Kie = Ni(),
    Vie = cI.Set,
    Yie = cI.add;
  fI.exports = function (e) {
    var t = new Vie();
    return Kie(e, function (a) {
      Yie(t, a);
    }), t;
  };
});
var fu = v(function (y1e, pI) {
  "use strict";

  var Xie = Ps(),
    Qie = Or();
  pI.exports = Xie(Qie.proto, "size", "get") || function (e) {
    return e.size;
  };
});
var mI = v(function (x1e, dI) {
  "use strict";

  dI.exports = function (e) {
    return {
      iterator: e,
      next: e.next,
      done: !1
    };
  };
});
var Ha = v(function (b1e, bI) {
  "use strict";

  var vI = Mt(),
    yI = ze(),
    hI = Ae(),
    Zie = Xt(),
    kie = mI(),
    gI = "Invalid size",
    Jie = RangeError,
    Wie = TypeError,
    $ie = Math.max,
    xI = function xI(e, t) {
      this.set = e, this.size = $ie(t, 0), this.has = vI(e.has), this.keys = vI(e.keys);
    };
  xI.prototype = {
    getIterator: function getIterator() {
      return kie(yI(hI(this.keys, this.set)));
    },
    includes: function includes(e) {
      return hI(this.has, this.set, e);
    }
  };
  bI.exports = function (e) {
    yI(e);
    var t = +e.size;
    if (t !== t) throw new Wie(gI);
    var a = Zie(t);
    if (a < 0) throw new Jie(gI);
    return new xI(e, a);
  };
});
var qI = v(function (E1e, TI) {
  "use strict";

  var eoe = ja(),
    SI = Or(),
    toe = Vp(),
    roe = fu(),
    noe = Ha(),
    aoe = Ni(),
    ioe = za(),
    ooe = SI.has,
    EI = SI.remove;
  TI.exports = function (t) {
    var a = eoe(this),
      i = noe(t),
      u = toe(a);
    return roe(a) <= i.size ? aoe(a, function (l) {
      i.includes(l) && EI(u, l);
    }) : ioe(i.getIterator(), function (l) {
      ooe(u, l) && EI(u, l);
    }), u;
  };
});
var Fa = v(function (S1e, OI) {
  "use strict";

  var uoe = Pt(),
    _I = function _I(e) {
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
    AI = function AI(e) {
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
  OI.exports = function (e, t) {
    var a = uoe("Set");
    try {
      new a()[e](_I(0));
      try {
        return new a()[e](_I(-1)), !1;
      } catch (_unused47) {
        if (!t) return !0;
        try {
          return new a()[e](AI(-1 / 0)), !1;
        } catch (_unused48) {
          var i = new a([1, 2]);
          return t(i[e](AI(1 / 0)));
        }
      }
    } catch (_unused49) {
      return !1;
    }
  };
});
var CI = v(function () {
  "use strict";

  var soe = P(),
    loe = qI(),
    coe = W(),
    foe = Fa(),
    poe = !foe("difference", function (e) {
      return e.size === 0;
    }),
    doe = poe || coe(function () {
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
  soe({
    target: "Set",
    proto: !0,
    real: !0,
    forced: doe
  }, {
    difference: loe
  });
});
var wI = v(function (_1e, NI) {
  "use strict";

  var moe = ja(),
    lx = Or(),
    voe = fu(),
    hoe = Ha(),
    goe = Ni(),
    yoe = za(),
    xoe = lx.Set,
    RI = lx.add,
    boe = lx.has;
  NI.exports = function (t) {
    var a = moe(this),
      i = hoe(t),
      u = new xoe();
    return voe(a) > i.size ? yoe(i.getIterator(), function (l) {
      boe(a, l) && RI(u, l);
    }) : goe(a, function (l) {
      i.includes(l) && RI(u, l);
    }), u;
  };
});
var MI = v(function () {
  "use strict";

  var Eoe = P(),
    Soe = W(),
    Toe = wI(),
    qoe = Fa(),
    _oe = !qoe("intersection", function (e) {
      return e.size === 2 && e.has(1) && e.has(2);
    }) || Soe(function () {
      return String(Array.from(new Set([1, 2, 3]).intersection(new Set([3, 2])))) !== "3,2";
    });
  Eoe({
    target: "Set",
    proto: !0,
    real: !0,
    forced: _oe
  }, {
    intersection: Toe
  });
});
var BI = v(function (C1e, DI) {
  "use strict";

  var Aoe = ja(),
    Ooe = Or().has,
    Coe = fu(),
    Roe = Ha(),
    Noe = Ni(),
    woe = za(),
    Moe = Ys();
  DI.exports = function (t) {
    var a = Aoe(this),
      i = Roe(t);
    if (Coe(a) <= i.size) return Noe(a, function (l) {
      if (i.includes(l)) return !1;
    }, !0) !== !1;
    var u = i.getIterator();
    return woe(u, function (l) {
      if (Ooe(a, l)) return Moe(u, "normal", !1);
    }) !== !1;
  };
});
var II = v(function () {
  "use strict";

  var Doe = P(),
    Boe = BI(),
    Ioe = Fa(),
    Poe = !Ioe("isDisjointFrom", function (e) {
      return !e;
    });
  Doe({
    target: "Set",
    proto: !0,
    real: !0,
    forced: Poe
  }, {
    isDisjointFrom: Boe
  });
});
var UI = v(function (w1e, PI) {
  "use strict";

  var Uoe = ja(),
    zoe = fu(),
    Loe = Ni(),
    joe = Ha();
  PI.exports = function (t) {
    var a = Uoe(this),
      i = joe(t);
    return zoe(a) > i.size ? !1 : Loe(a, function (u) {
      if (!i.includes(u)) return !1;
    }, !0) !== !1;
  };
});
var zI = v(function () {
  "use strict";

  var Hoe = P(),
    Foe = UI(),
    Goe = Fa(),
    Koe = !Goe("isSubsetOf", function (e) {
      return e;
    });
  Hoe({
    target: "Set",
    proto: !0,
    real: !0,
    forced: Koe
  }, {
    isSubsetOf: Foe
  });
});
var jI = v(function (B1e, LI) {
  "use strict";

  var Voe = ja(),
    Yoe = Or().has,
    Xoe = fu(),
    Qoe = Ha(),
    Zoe = za(),
    koe = Ys();
  LI.exports = function (t) {
    var a = Voe(this),
      i = Qoe(t);
    if (Xoe(a) < i.size) return !1;
    var u = i.getIterator();
    return Zoe(u, function (l) {
      if (!Yoe(a, l)) return koe(u, "normal", !1);
    }) !== !1;
  };
});
var HI = v(function () {
  "use strict";

  var Joe = P(),
    Woe = jI(),
    $oe = Fa(),
    eue = !$oe("isSupersetOf", function (e) {
      return !e;
    });
  Joe({
    target: "Set",
    proto: !0,
    real: !0,
    forced: eue
  }, {
    isSupersetOf: Woe
  });
});
var GI = v(function (U1e, FI) {
  "use strict";

  var tue = ja(),
    cx = Or(),
    rue = Vp(),
    nue = Ha(),
    aue = za(),
    iue = cx.add,
    oue = cx.has,
    uue = cx.remove;
  FI.exports = function (t) {
    var a = tue(this),
      i = nue(t).getIterator(),
      u = rue(a);
    return aue(i, function (l) {
      oue(a, l) ? uue(u, l) : iue(u, l);
    }), u;
  };
});
var fx = v(function (z1e, KI) {
  "use strict";

  KI.exports = function (e) {
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
var VI = v(function () {
  "use strict";

  var sue = P(),
    lue = GI(),
    cue = fx(),
    fue = Fa(),
    pue = !fue("symmetricDifference") || !cue("symmetricDifference");
  sue({
    target: "Set",
    proto: !0,
    real: !0,
    forced: pue
  }, {
    symmetricDifference: lue
  });
});
var XI = v(function (H1e, YI) {
  "use strict";

  var due = ja(),
    mue = Or().add,
    vue = Vp(),
    hue = Ha(),
    gue = za();
  YI.exports = function (t) {
    var a = due(this),
      i = hue(t).getIterator(),
      u = vue(a);
    return gue(i, function (l) {
      mue(u, l);
    }), u;
  };
});
var QI = v(function () {
  "use strict";

  var yue = P(),
    xue = XI(),
    bue = fx(),
    Eue = Fa(),
    Sue = !Eue("union") || !bue("union");
  yue({
    target: "Set",
    proto: !0,
    real: !0,
    forced: Sue
  }, {
    union: xue
  });
});
var kI = v(function (K1e, ZI) {
  "use strict";

  Ua();
  Vn();
  Yy();
  CI();
  MI();
  II();
  zI();
  HI();
  VI();
  QI();
  Ho();
  var Tue = ut();
  ZI.exports = Tue.Set;
});
var WI = v(function (V1e, JI) {
  "use strict";

  var que = kI();
  cu();
  JI.exports = que;
});
var t8 = v(function () {
  "use strict";

  var _ue = P(),
    Aue = k(),
    Oue = Mt(),
    Cue = Pe(),
    Rue = Gr(),
    Yp = $o(),
    $I = Ke(),
    Nue = W(),
    e8 = Yp.Map,
    wue = Yp.has,
    Mue = Yp.get,
    Due = Yp.set,
    Bue = Aue([].push),
    Iue = $I || Nue(function () {
      return e8.groupBy("ab", function (e) {
        return e;
      }).get("a").length !== 1;
    });
  _ue({
    target: "Map",
    stat: !0,
    forced: $I || Iue
  }, {
    groupBy: function groupBy(t, a) {
      Cue(t), Oue(a);
      var i = new e8(),
        u = 0;
      return Rue(t, function (l) {
        var c = a(l, u++);
        wue(i, c) ? Bue(Mue(i, c), l) : Due(i, c, [l]);
      }), i;
    }
  });
});
var px = v(function (Q1e, r8) {
  "use strict";

  var Pue = $o().has;
  r8.exports = function (e) {
    return Pue(e), e;
  };
});
var n8 = v(function () {
  "use strict";

  var Uue = P(),
    zue = px(),
    dx = $o(),
    Lue = Ke(),
    jue = dx.get,
    Hue = dx.has,
    Fue = dx.set;
  Uue({
    target: "Map",
    proto: !0,
    real: !0,
    forced: Lue
  }, {
    getOrInsert: function getOrInsert(t, a) {
      return Hue(zue(this), t) ? jue(this, t) : (Fue(this, t, a), a);
    }
  });
});
var a8 = v(function () {
  "use strict";

  var Gue = P(),
    Kue = Mt(),
    Vue = px(),
    mx = $o(),
    Yue = Ke(),
    Xue = mx.get,
    Que = mx.has,
    Zue = mx.set;
  Gue({
    target: "Map",
    proto: !0,
    real: !0,
    forced: Yue
  }, {
    getOrInsertComputed: function getOrInsertComputed(t, a) {
      if (Vue(this), Kue(a), Que(this, t)) return Xue(this, t);
      t === 0 && 1 / t === -1 / 0 && (t = 0);
      var i = a(t);
      return Zue(this, t, i), i;
    }
  });
});
var o8 = v(function ($1e, i8) {
  "use strict";

  Ua();
  Vy();
  t8();
  n8();
  a8();
  Vn();
  Ho();
  var kue = ut();
  i8.exports = kue.Map;
});
var s8 = v(function (eTe, u8) {
  "use strict";

  var Jue = o8();
  cu();
  u8.exports = Jue;
});
var gx = v(function (tTe, m8) {
  "use strict";

  var Wue = k(),
    l8 = Is(),
    Xp = al().getWeakData,
    $ue = wa(),
    ese = ze(),
    tse = Ln(),
    vx = Ee(),
    rse = Gr(),
    f8 = qi(),
    c8 = ot(),
    p8 = mr(),
    nse = p8.set,
    ase = p8.getterFor,
    ise = f8.find,
    ose = f8.findIndex,
    use = Wue([].splice),
    sse = 0,
    Qp = function Qp(e) {
      return e.frozen || (e.frozen = new d8());
    },
    d8 = function d8() {
      this.entries = [];
    },
    hx = function hx(e, t) {
      return ise(e.entries, function (a) {
        return a[0] === t;
      });
    };
  d8.prototype = {
    get: function get(e) {
      var t = hx(this, e);
      if (t) return t[1];
    },
    has: function has(e) {
      return !!hx(this, e);
    },
    set: function set(e, t) {
      var a = hx(this, e);
      a ? a[1] = t : this.entries.push([e, t]);
    },
    delete: function _delete(e) {
      var t = ose(this.entries, function (a) {
        return a[0] === e;
      });
      return ~t && use(this.entries, t, 1), !!~t;
    }
  };
  m8.exports = {
    getConstructor: function getConstructor(e, t, a, i) {
      var u = e(function (m, h) {
          $ue(m, l), nse(m, {
            type: t,
            id: sse++,
            frozen: null
          }), tse(h) || rse(h, m[i], {
            that: m,
            AS_ENTRIES: a
          });
        }),
        l = u.prototype,
        c = ase(t),
        d = function d(m, h, g) {
          var x = c(m),
            b = Xp(ese(h), !0);
          return b === !0 ? Qp(x).set(h, g) : b[x.id] = g, m;
        };
      return l8(l, {
        delete: function _delete(m) {
          var h = c(this);
          if (!vx(m)) return !1;
          var g = Xp(m);
          return g === !0 ? Qp(h).delete(m) : g && c8(g, h.id) && delete g[h.id];
        },
        has: function has(h) {
          var g = c(this);
          if (!vx(h)) return !1;
          var x = Xp(h);
          return x === !0 ? Qp(g).has(h) : x && c8(x, g.id);
        }
      }), l8(l, a ? {
        get: function get(h) {
          var g = c(this);
          if (vx(h)) {
            var x = Xp(h);
            if (x === !0) return Qp(g).get(h);
            if (x) return x[g.id];
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
var S8 = v(function () {
  "use strict";

  var lse = Uy(),
    v8 = ae(),
    Wp = k(),
    h8 = Is(),
    cse = al(),
    fse = il(),
    g8 = gx(),
    Zp = Ee(),
    kp = mr().enforce,
    pse = W(),
    dse = Sh(),
    Cl = Object,
    mse = Array.isArray,
    Jp = Cl.isExtensible,
    y8 = Cl.isFrozen,
    vse = Cl.isSealed,
    x8 = Cl.freeze,
    hse = Cl.seal,
    gse = !v8.ActiveXObject && "ActiveXObject" in v8,
    Al,
    b8 = function b8(e) {
      return function () {
        return e(this, arguments.length ? arguments[0] : void 0);
      };
    },
    E8 = fse("WeakMap", b8, g8),
    pu = E8.prototype,
    $p = Wp(pu.set),
    yse = function yse() {
      return lse && pse(function () {
        var e = x8([]);
        return $p(new E8(), e, 1), !y8(e);
      });
    };
  dse && (gse ? (Al = g8.getConstructor(b8, "WeakMap", !0), cse.enable(), yx = Wp(pu.delete), Ol = Wp(pu.has), xx = Wp(pu.get), h8(pu, {
    delete: function _delete(e) {
      if (Zp(e) && !Jp(e)) {
        var t = kp(this);
        return t.frozen || (t.frozen = new Al()), yx(this, e) || t.frozen.delete(e);
      }
      return yx(this, e);
    },
    has: function has(t) {
      if (Zp(t) && !Jp(t)) {
        var a = kp(this);
        return a.frozen || (a.frozen = new Al()), Ol(this, t) || a.frozen.has(t);
      }
      return Ol(this, t);
    },
    get: function get(t) {
      if (Zp(t) && !Jp(t)) {
        var a = kp(this);
        return a.frozen || (a.frozen = new Al()), Ol(this, t) ? xx(this, t) : a.frozen.get(t);
      }
      return xx(this, t);
    },
    set: function set(t, a) {
      if (Zp(t) && !Jp(t)) {
        var i = kp(this);
        i.frozen || (i.frozen = new Al()), Ol(this, t) ? $p(this, t, a) : i.frozen.set(t, a);
      } else $p(this, t, a);
      return this;
    }
  })) : yse() && h8(pu, {
    set: function set(t, a) {
      var i;
      return mse(t) && (y8(t) ? i = x8 : vse(t) && (i = hse)), $p(this, t, a), i && i(t), this;
    }
  }));
  var yx, Ol, xx;
});
var T8 = v(function () {
  "use strict";

  S8();
});
var Rl = v(function (oTe, q8) {
  "use strict";

  var ed = k(),
    td = WeakMap.prototype;
  q8.exports = {
    WeakMap: WeakMap,
    set: ed(td.set),
    get: ed(td.get),
    has: ed(td.has),
    remove: ed(td.delete)
  };
});
var bx = v(function (uTe, _8) {
  "use strict";

  var xse = Rl().has;
  _8.exports = function (e) {
    return xse(e), e;
  };
});
var A8 = v(function () {
  "use strict";

  var bse = P(),
    Ese = bx(),
    Ex = Rl(),
    Sse = Ke(),
    Tse = Ex.get,
    qse = Ex.has,
    _se = Ex.set;
  bse({
    target: "WeakMap",
    proto: !0,
    real: !0,
    forced: Sse
  }, {
    getOrInsert: function getOrInsert(t, a) {
      return qse(Ese(this), t) ? Tse(this, t) : (_se(this, t, a), a);
    }
  });
});
var R8 = v(function (cTe, C8) {
  "use strict";

  var Sx = Rl(),
    O8 = new Sx.WeakMap(),
    Ase = Sx.set,
    Ose = Sx.remove;
  C8.exports = function (e) {
    return Ase(O8, e, 1), Ose(O8, e), e;
  };
});
var N8 = v(function () {
  "use strict";

  var Cse = P(),
    Rse = Mt(),
    Nse = bx(),
    wse = R8(),
    Tx = Rl(),
    Mse = Ke(),
    Dse = Tx.get,
    Bse = Tx.has,
    Ise = Tx.set,
    Pse = Mse || !function () {
      try {
        WeakMap.prototype.getOrInsertComputed && new WeakMap().getOrInsertComputed(1, function () {
          throw 1;
        });
      } catch (e) {
        return e instanceof TypeError;
      }
    }();
  Cse({
    target: "WeakMap",
    proto: !0,
    real: !0,
    forced: Pse
  }, {
    getOrInsertComputed: function getOrInsertComputed(t, a) {
      if (Nse(this), wse(t), Rse(a), Bse(this, t)) return Dse(this, t);
      var i = a(t);
      return Ise(this, t, i), i;
    }
  });
});
var M8 = v(function (dTe, w8) {
  "use strict";

  Ua();
  Vn();
  T8();
  A8();
  N8();
  var Use = ut();
  w8.exports = Use.WeakMap;
});
var B8 = v(function (mTe, D8) {
  "use strict";

  var zse = M8();
  cu();
  D8.exports = zse;
});
var I8 = v(function () {
  "use strict";

  var Lse = il(),
    jse = gx();
  Lse("WeakSet", function (e) {
    return function () {
      return e(this, arguments.length ? arguments[0] : void 0);
    };
  }, jse);
});
var P8 = v(function () {
  "use strict";

  I8();
});
var z8 = v(function (xTe, U8) {
  "use strict";

  Ua();
  Vn();
  P8();
  var Hse = ut();
  U8.exports = Hse.WeakSet;
});
var j8 = v(function (bTe, L8) {
  "use strict";

  var Fse = z8();
  cu();
  L8.exports = Fse;
});
var V8 = v(function (ETe, K8) {
  "use strict";

  var Ga = {},
    G8 = Object.create,
    qx = Object.defineProperties,
    rd = Object.defineProperty,
    nt = function nt(e) {
      var t = arguments[1] === void 0 ? {} : arguments[1];
      return {
        value: e,
        configurable: !!t.c,
        writable: !!t.w,
        enumerable: !!t.e
      };
    },
    Gse = function Gse(e) {
      return e && e[st.toStringTag] === "Symbol";
    },
    Pi = void 0;
  try {
    H8 = rd({}, "y", {
      get: function get() {
        return 1;
      }
    }), Pi = H8.y === 1;
  } catch (_unused51) {
    Pi = !1;
  }
  var H8,
    F8 = {},
    Kse = function Kse(e) {
      e = String(e);
      for (var t = "", a = 0; F8[e + t];) t = a += 1;
      F8[e + t] = 1;
      var i = "Symbol(" + e + t + ")";
      return Pi && rd(Object.prototype, i, {
        get: void 0,
        set: function set(u) {
          rd(this, i, nt(u, {
            c: !0,
            w: !0
          }));
        },
        configurable: !0,
        enumerable: !1
      }), i;
    },
    _x = G8(null);
  function st(e) {
    if (this instanceof st) throw new TypeError("Symbol is not a constructor");
    e = e === void 0 ? "" : String(e);
    var t = Kse(e);
    return Pi ? G8(_x, {
      __description__: nt(e),
      __tag__: nt(t)
    }) : t;
  }
  qx(st, {
    for: nt(function (e) {
      var t = String(e);
      if (Ga[t]) return Ga[t];
      var a = st(t);
      return Ga[t] = a, a;
    }),
    keyFor: nt(function (e) {
      if (Pi && !Gse(e)) throw new TypeError("" + e + " is not a symbol");
      for (var t in Ga) if (Ga[t] === e) return Pi ? Ga[t].__description__ : Ga[t].substr(7, Ga[t].length - 8);
    })
  });
  qx(st, {
    hasInstance: nt(st("hasInstance")),
    isConcatSpreadable: nt(st("isConcatSpreadable")),
    iterator: nt(st("iterator")),
    match: nt(st("match")),
    replace: nt(st("replace")),
    search: nt(st("search")),
    species: nt(st("species")),
    split: nt(st("split")),
    toPrimitive: nt(st("toPrimitive")),
    toStringTag: nt(st("toStringTag")),
    unscopables: nt(st("unscopables"))
  });
  qx(_x, {
    constructor: nt(st),
    toString: nt(function () {
      return this.__tag__;
    }),
    valueOf: nt(function () {
      return "Symbol(" + this.__description__ + ")";
    })
  });
  Pi && rd(_x, st.toStringTag, nt("Symbol", {
    c: !0
  }));
  K8.exports = typeof Symbol == "function" ? Symbol : st;
});
var $8 = v(function (ne) {
  var Zse = 1e5,
    Le = function () {
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
    kse = Math.LN2,
    Jse = Math.abs,
    ud = Math.floor,
    Wse = Math.log,
    $se = Math.min,
    Vr = Math.pow,
    ele = Math.round;
  function Q8(e, t, a) {
    return e < t ? t : e > a ? a : e;
  }
  var Z8 = Object.getOwnPropertyNames || function (e) {
      if (e !== Object(e)) throw new TypeError("Object.getOwnPropertyNames called on non-object");
      var t = [],
        a;
      for (a in e) Le.HasOwnProperty(e, a) && t.push(a);
      return t;
    },
    du;
  Object.defineProperty && function () {
    try {
      return Object.defineProperty({}, "x", {}), !0;
    } catch (_unused52) {
      return !1;
    }
  }() ? du = Object.defineProperty : du = function du(e, t, a) {
    if (!e === Object(e)) throw new TypeError("Object.defineProperty called on non-object");
    return Le.HasProperty(a, "get") && Object.prototype.__defineGetter__ && Object.prototype.__defineGetter__.call(e, t, a.get), Le.HasProperty(a, "set") && Object.prototype.__defineSetter__ && Object.prototype.__defineSetter__.call(e, t, a.set), Le.HasProperty(a, "value") && (e[t] = a.value), e;
  };
  function Ax(e) {
    if (Z8 && du) {
      var t = Z8(e),
        a;
      for (a = 0; a < t.length; a += 1) du(e, t[a], {
        value: e[t[a]],
        writable: !1,
        enumerable: !1,
        configurable: !1
      });
    }
  }
  function tle(e) {
    if (!du) return;
    if (e.length > Zse) throw new RangeError("Array too large for polyfill");
    function t(i) {
      du(e, i, {
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
  function Ox(e, t) {
    var a = 32 - t;
    return e << a >> a;
  }
  function Cx(e, t) {
    var a = 32 - t;
    return e << a >>> a;
  }
  function rle(e) {
    return [e & 255];
  }
  function nle(e) {
    return Ox(e[0], 8);
  }
  function ale(e) {
    return [e & 255];
  }
  function k8(e) {
    return Cx(e[0], 8);
  }
  function ile(e) {
    return e = ele(Number(e)), [e < 0 ? 0 : e > 255 ? 255 : e & 255];
  }
  function ole(e) {
    return [e >> 8 & 255, e & 255];
  }
  function ule(e) {
    return Ox(e[0] << 8 | e[1], 16);
  }
  function sle(e) {
    return [e >> 8 & 255, e & 255];
  }
  function lle(e) {
    return Cx(e[0] << 8 | e[1], 16);
  }
  function cle(e) {
    return [e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, e & 255];
  }
  function fle(e) {
    return Ox(e[0] << 24 | e[1] << 16 | e[2] << 8 | e[3], 32);
  }
  function ple(e) {
    return [e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, e & 255];
  }
  function dle(e) {
    return Cx(e[0] << 24 | e[1] << 16 | e[2] << 8 | e[3], 32);
  }
  function J8(e, t, a) {
    var i = (1 << t - 1) - 1,
      u,
      l,
      c,
      d,
      m,
      h,
      g;
    function x(b) {
      var E = ud(b),
        A = b - E;
      return A < .5 ? E : A > .5 || E % 2 ? E + 1 : E;
    }
    for (e !== e ? (l = (1 << t) - 1, c = Vr(2, a - 1), u = 0) : e === 1 / 0 || e === -1 / 0 ? (l = (1 << t) - 1, c = 0, u = e < 0 ? 1 : 0) : e === 0 ? (l = 0, c = 0, u = 1 / e === -1 / 0 ? 1 : 0) : (u = e < 0, e = Jse(e), e >= Vr(2, 1 - i) ? (l = $se(ud(Wse(e) / kse), 1023), c = x(e / Vr(2, l) * Vr(2, a)), c / Vr(2, a) >= 2 && (l = l + 1, c = 1), l > i ? (l = (1 << t) - 1, c = 0) : (l = l + i, c = c - Vr(2, a))) : (l = 0, c = x(e / Vr(2, 1 - i - a)))), m = [], d = a; d; d -= 1) m.push(c % 2 ? 1 : 0), c = ud(c / 2);
    for (d = t; d; d -= 1) m.push(l % 2 ? 1 : 0), l = ud(l / 2);
    for (m.push(u ? 1 : 0), m.reverse(), h = m.join(""), g = []; h.length;) g.push(parseInt(h.substring(0, 8), 2)), h = h.substring(8);
    return g;
  }
  function W8(e, t, a) {
    var i = [],
      u,
      l,
      c,
      d,
      m,
      h,
      g,
      x;
    for (u = e.length; u; u -= 1) for (c = e[u - 1], l = 8; l; l -= 1) i.push(c % 2 ? 1 : 0), c = c >> 1;
    return i.reverse(), d = i.join(""), m = (1 << t - 1) - 1, h = parseInt(d.substring(0, 1), 2) ? -1 : 1, g = parseInt(d.substring(1, 1 + t), 2), x = parseInt(d.substring(1 + t), 2), g === (1 << t) - 1 ? x === 0 ? h * (1 / 0) : NaN : g > 0 ? h * Vr(2, g - m) * (1 + x / Vr(2, a)) : x !== 0 ? h * Vr(2, -(m - 1)) * (x / Vr(2, a)) : h < 0 ? -0 : 0;
  }
  function mle(e) {
    return W8(e, 11, 52);
  }
  function vle(e) {
    return J8(e, 11, 52);
  }
  function hle(e) {
    return W8(e, 8, 23);
  }
  function gle(e) {
    return J8(e, 8, 23);
  }
  (function () {
    function e(b) {
      if (b = Le.ToInt32(b), b < 0) throw new RangeError("ArrayBuffer size is not a small enough positive integer");
      this.byteLength = b, this._bytes = [], this._bytes.length = b;
      var E;
      for (E = 0; E < this.byteLength; E += 1) this._bytes[E] = 0;
      Ax(this);
    }
    ne.ArrayBuffer = ne.ArrayBuffer || e;
    function t() {}
    function a(b, E, A) {
      var _C2;
      return _C2 = function C(O, T, q) {
        var D, B, G, V;
        if (!arguments.length || typeof arguments[0] == "number") {
          if (this.length = Le.ToInt32(arguments[0]), q < 0) throw new RangeError("ArrayBufferView size is not a small enough positive integer");
          this.byteLength = this.length * this.BYTES_PER_ELEMENT, this.buffer = new e(this.byteLength), this.byteOffset = 0;
        } else if (_typeof(arguments[0]) == "object" && arguments[0].constructor === _C2) for (D = arguments[0], this.length = D.length, this.byteLength = this.length * this.BYTES_PER_ELEMENT, this.buffer = new e(this.byteLength), this.byteOffset = 0, G = 0; G < this.length; G += 1) this._setter(G, D._getter(G));else if (_typeof(arguments[0]) == "object" && !(arguments[0] instanceof e || Le.Class(arguments[0]) === "ArrayBuffer")) for (B = arguments[0], this.length = Le.ToUint32(B.length), this.byteLength = this.length * this.BYTES_PER_ELEMENT, this.buffer = new e(this.byteLength), this.byteOffset = 0, G = 0; G < this.length; G += 1) V = B[G], this._setter(G, Number(V));else if (_typeof(arguments[0]) == "object" && (arguments[0] instanceof e || Le.Class(arguments[0]) === "ArrayBuffer")) {
          if (this.buffer = O, this.byteOffset = Le.ToUint32(T), this.byteOffset > this.buffer.byteLength) throw new RangeError("byteOffset out of range");
          if (this.byteOffset % this.BYTES_PER_ELEMENT) throw new RangeError("ArrayBuffer length minus the byteOffset is not a multiple of the element size.");
          if (arguments.length < 3) {
            if (this.byteLength = this.buffer.byteLength - this.byteOffset, this.byteLength % this.BYTES_PER_ELEMENT) throw new RangeError("length of buffer minus byteOffset not a multiple of the element size");
            this.length = this.byteLength / this.BYTES_PER_ELEMENT;
          } else this.length = Le.ToUint32(q), this.byteLength = this.length * this.BYTES_PER_ELEMENT;
          if (this.byteOffset + this.byteLength > this.buffer.byteLength) throw new RangeError("byteOffset and length reference an area beyond the end of the buffer");
        } else throw new TypeError("Unexpected argument type(s)");
        this.constructor = _C2, Ax(this), tle(this);
      }, _C2.prototype = new t(), _C2.prototype.BYTES_PER_ELEMENT = b, _C2.prototype._pack = E, _C2.prototype._unpack = A, _C2.BYTES_PER_ELEMENT = b, _C2.prototype._getter = function (O) {
        if (arguments.length < 1) throw new SyntaxError("Not enough arguments");
        if (O = Le.ToUint32(O), !(O >= this.length)) {
          for (var T = [], q = 0, D = this.byteOffset + O * this.BYTES_PER_ELEMENT; q < this.BYTES_PER_ELEMENT; q += 1, D += 1) T.push(this.buffer._bytes[D]);
          return this._unpack(T);
        }
      }, _C2.prototype.get = _C2.prototype._getter, _C2.prototype._setter = function (O, T) {
        if (arguments.length < 2) throw new SyntaxError("Not enough arguments");
        if (O = Le.ToUint32(O), O < this.length) {
          var q = this._pack(T),
            D,
            B;
          for (D = 0, B = this.byteOffset + O * this.BYTES_PER_ELEMENT; D < this.BYTES_PER_ELEMENT; D += 1, B += 1) this.buffer._bytes[B] = q[D];
        }
      }, _C2.prototype.set = function (O, T) {
        if (arguments.length < 1) throw new SyntaxError("Not enough arguments");
        var q, D, B, G, V, te, ie, Q, Z, X;
        if (_typeof(arguments[0]) == "object" && arguments[0].constructor === this.constructor) {
          if (q = arguments[0], B = Le.ToUint32(arguments[1]), B + q.length > this.length) throw new RangeError("Offset plus length of array is out of range");
          if (Q = this.byteOffset + B * this.BYTES_PER_ELEMENT, Z = q.length * this.BYTES_PER_ELEMENT, q.buffer === this.buffer) {
            for (X = [], V = 0, te = q.byteOffset; V < Z; V += 1, te += 1) X[V] = q.buffer._bytes[te];
            for (V = 0, ie = Q; V < Z; V += 1, ie += 1) this.buffer._bytes[ie] = X[V];
          } else for (V = 0, te = q.byteOffset, ie = Q; V < Z; V += 1, te += 1, ie += 1) this.buffer._bytes[ie] = q.buffer._bytes[te];
        } else if (_typeof(arguments[0]) == "object" && _typeof(arguments[0].length) < "u") {
          if (D = arguments[0], G = Le.ToUint32(D.length), B = Le.ToUint32(arguments[1]), B + G > this.length) throw new RangeError("Offset plus length of array is out of range");
          for (V = 0; V < G; V += 1) te = D[V], this._setter(B + V, Number(te));
        } else throw new TypeError("Unexpected argument type(s)");
      }, _C2.prototype.subarray = function (O, T) {
        O = Le.ToInt32(O), T = Le.ToInt32(T), arguments.length < 1 && (O = 0), arguments.length < 2 && (T = this.length), O < 0 && (O = this.length + O), T < 0 && (T = this.length + T), O = Q8(O, 0, this.length), T = Q8(T, 0, this.length);
        var q = T - O;
        return q < 0 && (q = 0), new this.constructor(this.buffer, this.byteOffset + O * this.BYTES_PER_ELEMENT, q);
      }, _C2;
    }
    var i = a(1, rle, nle),
      u = a(1, ale, k8),
      l = a(1, ile, k8),
      c = a(2, ole, ule),
      d = a(2, sle, lle),
      m = a(4, cle, fle),
      h = a(4, ple, dle),
      g = a(4, gle, hle),
      x = a(8, vle, mle);
    ne.Int8Array = ne.Int8Array || i, ne.Uint8Array = ne.Uint8Array || u, ne.Uint8ClampedArray = ne.Uint8ClampedArray || l, ne.Int16Array = ne.Int16Array || c, ne.Uint16Array = ne.Uint16Array || d, ne.Int32Array = ne.Int32Array || m, ne.Uint32Array = ne.Uint32Array || h, ne.Float32Array = ne.Float32Array || g, ne.Float64Array = ne.Float64Array || x;
  })();
  (function () {
    function e(l, c) {
      return Le.IsCallable(l.get) ? l.get(c) : l[c];
    }
    var t = function () {
      var l = new ne.Uint16Array([4660]),
        c = new ne.Uint8Array(l.buffer);
      return e(c, 0) === 18;
    }();
    function a(l, c, d) {
      if (arguments.length === 0) l = new ne.ArrayBuffer(0);else if (!(l instanceof ne.ArrayBuffer || Le.Class(l) === "ArrayBuffer")) throw new TypeError("TypeError");
      if (this.buffer = l || new ne.ArrayBuffer(0), this.byteOffset = Le.ToUint32(c), this.byteOffset > this.buffer.byteLength) throw new RangeError("byteOffset out of range");
      if (arguments.length < 3 ? this.byteLength = this.buffer.byteLength - this.byteOffset : this.byteLength = Le.ToUint32(d), this.byteOffset + this.byteLength > this.buffer.byteLength) throw new RangeError("byteOffset and length reference an area beyond the end of the buffer");
      Ax(this);
    }
    function i(l) {
      return function (c, d) {
        if (c = Le.ToUint32(c), c + l.BYTES_PER_ELEMENT > this.byteLength) throw new RangeError("Array index out of range");
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
        if (c = Le.ToUint32(c), c + l.BYTES_PER_ELEMENT > this.byteLength) throw new RangeError("Array index out of range");
        var h = new l([d]),
          g = new ne.Uint8Array(h.buffer),
          x = [],
          b,
          E;
        for (b = 0; b < l.BYTES_PER_ELEMENT; b += 1) x.push(e(g, b));
        !!m == !!t && x.reverse(), E = new ne.Uint8Array(this.buffer, c, l.BYTES_PER_ELEMENT), E.set(x);
      };
    }
    a.prototype.setUint8 = u(ne.Uint8Array), a.prototype.setInt8 = u(ne.Int8Array), a.prototype.setUint16 = u(ne.Uint16Array), a.prototype.setInt16 = u(ne.Int16Array), a.prototype.setUint32 = u(ne.Uint32Array), a.prototype.setInt32 = u(ne.Int32Array), a.prototype.setFloat32 = u(ne.Float32Array), a.prototype.setFloat64 = u(ne.Float64Array), ne.DataView = ne.DataView || a;
  })();
});
var t4 = v(function (FTe, e4) {
  "use strict";

  e4.exports = function (t, a) {
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
var a4 = v(function (Nx) {
  "use strict";

  var xle = Object.prototype.hasOwnProperty,
    ble;
  function r4(e) {
    try {
      return decodeURIComponent(e.replace(/\+/g, " "));
    } catch (_unused53) {
      return null;
    }
  }
  function n4(e) {
    try {
      return encodeURIComponent(e);
    } catch (_unused54) {
      return null;
    }
  }
  function Ele(e) {
    for (var t = /([^=?#&]+)=?([^&]*)/g, a = {}, i; i = t.exec(e);) {
      var u = r4(i[1]),
        l = r4(i[2]);
      u === null || l === null || u in a || (a[u] = l);
    }
    return a;
  }
  function Sle(e, t) {
    t = t || "";
    var a = [],
      i,
      u;
    typeof t != "string" && (t = "?");
    for (u in e) if (xle.call(e, u)) {
      if (i = e[u], !i && (i === null || i === ble || isNaN(i)) && (i = ""), u = n4(u), i = n4(i), u === null || i === null) continue;
      a.push(u + "=" + i);
    }
    return a.length ? t + a.join("&") : "";
  }
  Nx.stringify = Sle;
  Nx.parse = Ele;
});
var p4 = v(function (KTe, f4) {
  "use strict";

  var o4 = t4(),
    fd = a4(),
    Tle = /^[\x00-\x20\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]+/,
    u4 = /[\n\r\t]/g,
    qle = /^[A-Za-z][A-Za-z0-9+-.]*:\/\//,
    s4 = /:\d+$/,
    _le = /^([a-z][a-z0-9.+-]*:)?(\/\/)?([\\/]+)?([\S\s]*)/i,
    Ale = /^[a-zA-Z]:/;
  function Mx(e) {
    return (e || "").toString().replace(Tle, "");
  }
  var wx = [["#", "hash"], ["?", "query"], function (t, a) {
      return ln(a.protocol) ? t.replace(/\\/g, "/") : t;
    }, ["/", "pathname"], ["@", "auth", 1], [NaN, "host", void 0, 1, 1], [/:(\d*)$/, "port", void 0, 1], [NaN, "hostname", void 0, 1, 1]],
    i4 = {
      hash: 1,
      query: 1
    };
  function l4(e) {
    var t;
    (typeof window === "undefined" ? "undefined" : _typeof(window)) < "u" ? t = window : (typeof global === "undefined" ? "undefined" : _typeof(global)) < "u" ? t = global : (typeof self === "undefined" ? "undefined" : _typeof(self)) < "u" ? t = self : t = {};
    var a = t.location || {};
    e = e || a;
    var i = {},
      u = _typeof(e),
      l;
    if (e.protocol === "blob:") i = new cn(unescape(e.pathname), {});else if (u === "string") {
      i = new cn(e, {});
      for (l in i4) delete i[l];
    } else if (u === "object") {
      for (l in e) l in i4 || (i[l] = e[l]);
      i.slashes === void 0 && (i.slashes = qle.test(e.href));
    }
    return i;
  }
  function ln(e) {
    return e === "file:" || e === "ftp:" || e === "http:" || e === "https:" || e === "ws:" || e === "wss:";
  }
  function c4(e, t) {
    e = Mx(e), e = e.replace(u4, ""), t = t || {};
    var a = _le.exec(e),
      i = a[1] ? a[1].toLowerCase() : "",
      u = !!a[2],
      l = !!a[3],
      c = 0,
      d;
    return u ? l ? (d = a[2] + a[3] + a[4], c = a[2].length + a[3].length) : (d = a[2] + a[4], c = a[2].length) : l ? (d = a[3] + a[4], c = a[3].length) : d = a[4], i === "file:" ? c >= 2 && (d = d.slice(2)) : ln(i) ? d = a[4] : i ? u && (d = d.slice(2)) : c >= 2 && ln(t.protocol) && (d = a[4]), {
      protocol: i,
      slashes: u || ln(i),
      slashesCount: c,
      rest: d
    };
  }
  function Ole(e, t) {
    if (e === "") return t;
    for (var a = (t || "/").split("/").slice(0, -1).concat(e.split("/")), i = a.length, u = a[i - 1], l = !1, c = 0; i--;) a[i] === "." ? a.splice(i, 1) : a[i] === ".." ? (a.splice(i, 1), c++) : c && (i === 0 && (l = !0), a.splice(i, 1), c--);
    return l && a.unshift(""), (u === "." || u === "..") && a.push(""), a.join("/");
  }
  function cn(e, t, a) {
    if (e = Mx(e), e = e.replace(u4, ""), !(this instanceof cn)) return new cn(e, t, a);
    var i,
      u,
      l,
      c,
      d,
      m,
      h = wx.slice(),
      g = _typeof(t),
      x = this,
      b = 0;
    for (g !== "object" && g !== "string" && (a = t, t = null), a && typeof a != "function" && (a = fd.parse), t = l4(t), u = c4(e || "", t), i = !u.protocol && !u.slashes, x.slashes = u.slashes || i && t.slashes, x.protocol = u.protocol || t.protocol || "", e = u.rest, (u.protocol === "file:" && (u.slashesCount !== 2 || Ale.test(e)) || !u.slashes && (u.protocol || u.slashesCount < 2 || !ln(x.protocol))) && (h[3] = [/(.*)/, "pathname"]); b < h.length; b++) {
      if (c = h[b], typeof c == "function") {
        e = c(e, x);
        continue;
      }
      l = c[0], m = c[1], l !== l ? x[m] = e : typeof l == "string" ? (d = l === "@" ? e.lastIndexOf(l) : e.indexOf(l), ~d && (typeof c[2] == "number" ? (x[m] = e.slice(0, d), e = e.slice(d + c[2])) : (x[m] = e.slice(d), e = e.slice(0, d)))) : (d = l.exec(e)) && (x[m] = d[1], e = e.slice(0, d.index)), x[m] = x[m] || i && c[3] && t[m] || "", c[4] && (x[m] = x[m].toLowerCase());
    }
    a && (x.query = a(x.query)), i && t.slashes && x.pathname.charAt(0) !== "/" && (x.pathname !== "" || t.pathname !== "") && (x.pathname = Ole(x.pathname, t.pathname)), x.pathname.charAt(0) !== "/" && ln(x.protocol) && (x.pathname = "/" + x.pathname), o4(x.port, x.protocol) || (x.host = x.hostname, x.port = ""), x.username = x.password = "", x.auth && (d = x.auth.indexOf(":"), ~d ? (x.username = x.auth.slice(0, d), x.username = encodeURIComponent(decodeURIComponent(x.username)), x.password = x.auth.slice(d + 1), x.password = encodeURIComponent(decodeURIComponent(x.password))) : x.username = encodeURIComponent(decodeURIComponent(x.auth)), x.auth = x.password ? x.username + ":" + x.password : x.username), x.origin = x.protocol !== "file:" && ln(x.protocol) && x.host ? x.protocol + "//" + x.host : "null", x.href = x.toString();
  }
  function Cle(e, t, a) {
    var i = this;
    switch (e) {
      case "query":
        typeof t == "string" && t.length && (t = (a || fd.parse)(t)), i[e] = t;
        break;
      case "port":
        i[e] = t, o4(t, i.protocol) ? t && (i.host = i.hostname + ":" + t) : (i.host = i.hostname, i[e] = "");
        break;
      case "hostname":
        i[e] = t, i.port && (t += ":" + i.port), i.host = t;
        break;
      case "host":
        i[e] = t, s4.test(t) ? (t = t.split(":"), i.port = t.pop(), i.hostname = t.join(":")) : (i.hostname = t, i.port = "");
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
    for (var c = 0; c < wx.length; c++) {
      var d = wx[c];
      d[4] && (i[d[1]] = i[d[1]].toLowerCase());
    }
    return i.auth = i.password ? i.username + ":" + i.password : i.username, i.origin = i.protocol !== "file:" && ln(i.protocol) && i.host ? i.protocol + "//" + i.host : "null", i.href = i.toString(), i;
  }
  function Rle(e) {
    (!e || typeof e != "function") && (e = fd.stringify);
    var t,
      a = this,
      i = a.host,
      u = a.protocol;
    u && u.charAt(u.length - 1) !== ":" && (u += ":");
    var l = u + (a.protocol && a.slashes || ln(a.protocol) ? "//" : "");
    return a.username ? (l += a.username, a.password && (l += ":" + a.password), l += "@") : a.password ? (l += ":" + a.password, l += "@") : a.protocol !== "file:" && ln(a.protocol) && !i && a.pathname !== "/" && (l += "@"), (i[i.length - 1] === ":" || s4.test(a.hostname) && !a.port) && (i += ":"), l += i + a.pathname, t = _typeof(a.query) == "object" ? e(a.query) : a.query, t && (l += t.charAt(0) !== "?" ? "?" + t : t), a.hash && (l += a.hash), l;
  }
  cn.prototype = {
    set: Cle,
    toString: Rle
  };
  cn.extractProtocol = c4;
  cn.location = l4;
  cn.trimLeft = Mx;
  cn.qs = fd;
  f4.exports = cn;
});
var g4 = v(function (pd) {
  "use strict";

  pd.byteLength = wle;
  pd.toByteArray = Dle;
  pd.fromByteArray = Ple;
  var fn = [],
    Cr = [],
    Nle = (typeof Uint8Array === "undefined" ? "undefined" : _typeof(Uint8Array)) < "u" ? Uint8Array : Array,
    Dx = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
  for (Ui = 0, v4 = Dx.length; Ui < v4; ++Ui) fn[Ui] = Dx[Ui], Cr[Dx.charCodeAt(Ui)] = Ui;
  var Ui, v4;
  Cr[45] = 62;
  Cr[95] = 63;
  function h4(e) {
    var t = e.length;
    if (t % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
    var a = e.indexOf("=");
    a === -1 && (a = t);
    var i = a === t ? 0 : 4 - a % 4;
    return [a, i];
  }
  function wle(e) {
    var t = h4(e),
      a = t[0],
      i = t[1];
    return (a + i) * 3 / 4 - i;
  }
  function Mle(e, t, a) {
    return (t + a) * 3 / 4 - a;
  }
  function Dle(e) {
    var t,
      a = h4(e),
      i = a[0],
      u = a[1],
      l = new Nle(Mle(e, i, u)),
      c = 0,
      d = u > 0 ? i - 4 : i,
      m;
    for (m = 0; m < d; m += 4) t = Cr[e.charCodeAt(m)] << 18 | Cr[e.charCodeAt(m + 1)] << 12 | Cr[e.charCodeAt(m + 2)] << 6 | Cr[e.charCodeAt(m + 3)], l[c++] = t >> 16 & 255, l[c++] = t >> 8 & 255, l[c++] = t & 255;
    return u === 2 && (t = Cr[e.charCodeAt(m)] << 2 | Cr[e.charCodeAt(m + 1)] >> 4, l[c++] = t & 255), u === 1 && (t = Cr[e.charCodeAt(m)] << 10 | Cr[e.charCodeAt(m + 1)] << 4 | Cr[e.charCodeAt(m + 2)] >> 2, l[c++] = t >> 8 & 255, l[c++] = t & 255), l;
  }
  function Ble(e) {
    return fn[e >> 18 & 63] + fn[e >> 12 & 63] + fn[e >> 6 & 63] + fn[e & 63];
  }
  function Ile(e, t, a) {
    for (var i, u = [], l = t; l < a; l += 3) i = (e[l] << 16 & 16711680) + (e[l + 1] << 8 & 65280) + (e[l + 2] & 255), u.push(Ble(i));
    return u.join("");
  }
  function Ple(e) {
    for (var t, a = e.length, i = a % 3, u = [], l = 16383, c = 0, d = a - i; c < d; c += l) u.push(Ile(e, c, c + l > d ? d : c + l));
    return i === 1 ? (t = e[a - 1], u.push(fn[t >> 2] + fn[t << 4 & 63] + "==")) : i === 2 && (t = (e[a - 2] << 8) + e[a - 1], u.push(fn[t >> 10] + fn[t >> 4 & 63] + fn[t << 2 & 63] + "=")), u.join("");
  }
});
var y4 = v(function (Bx) {
  Bx.read = function (e, t, a, i, u) {
    var l,
      c,
      d = u * 8 - i - 1,
      m = (1 << d) - 1,
      h = m >> 1,
      g = -7,
      x = a ? u - 1 : 0,
      b = a ? -1 : 1,
      E = e[t + x];
    for (x += b, l = E & (1 << -g) - 1, E >>= -g, g += d; g > 0; l = l * 256 + e[t + x], x += b, g -= 8);
    for (c = l & (1 << -g) - 1, l >>= -g, g += i; g > 0; c = c * 256 + e[t + x], x += b, g -= 8);
    if (l === 0) l = 1 - h;else {
      if (l === m) return c ? NaN : (E ? -1 : 1) * (1 / 0);
      c = c + Math.pow(2, i), l = l - h;
    }
    return (E ? -1 : 1) * c * Math.pow(2, l - i);
  };
  Bx.write = function (e, t, a, i, u, l) {
    var c,
      d,
      m,
      h = l * 8 - u - 1,
      g = (1 << h) - 1,
      x = g >> 1,
      b = u === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
      E = i ? 0 : l - 1,
      A = i ? 1 : -1,
      C = t < 0 || t === 0 && 1 / t < 0 ? 1 : 0;
    for (t = Math.abs(t), isNaN(t) || t === 1 / 0 ? (d = isNaN(t) ? 1 : 0, c = g) : (c = Math.floor(Math.log(t) / Math.LN2), t * (m = Math.pow(2, -c)) < 1 && (c--, m *= 2), c + x >= 1 ? t += b / m : t += b * Math.pow(2, 1 - x), t * m >= 2 && (c++, m /= 2), c + x >= g ? (d = 0, c = g) : c + x >= 1 ? (d = (t * m - 1) * Math.pow(2, u), c = c + x) : (d = t * Math.pow(2, x - 1) * Math.pow(2, u), c = 0)); u >= 8; e[a + E] = d & 255, E += A, d /= 256, u -= 8);
    for (c = c << u | d, h += u; h > 0; e[a + E] = c & 255, E += A, c /= 256, h -= 8);
    e[a + E - A] |= C * 128;
  };
});
var I4 = v(function (gu) {
  "use strict";

  var Ix = g4(),
    vu = y4(),
    x4 = typeof Symbol == "function" && typeof Symbol.for == "function" ? Symbol.for("nodejs.util.inspect.custom") : null;
  gu.Buffer = M;
  gu.SlowBuffer = Fle;
  gu.INSPECT_MAX_BYTES = 50;
  var dd = 2147483647;
  gu.kMaxLength = dd;
  M.TYPED_ARRAY_SUPPORT = Ule();
  !M.TYPED_ARRAY_SUPPORT && (typeof console === "undefined" ? "undefined" : _typeof(console)) < "u" && typeof console.error == "function" && console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");
  function Ule() {
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
  Object.defineProperty(M.prototype, "parent", {
    enumerable: !0,
    get: function get() {
      if (M.isBuffer(this)) return this.buffer;
    }
  });
  Object.defineProperty(M.prototype, "offset", {
    enumerable: !0,
    get: function get() {
      if (M.isBuffer(this)) return this.byteOffset;
    }
  });
  function kn(e) {
    if (e > dd) throw new RangeError('The value "' + e + '" is invalid for option "size"');
    var t = new Uint8Array(e);
    return Object.setPrototypeOf(t, M.prototype), t;
  }
  function M(e, t, a) {
    if (typeof e == "number") {
      if (typeof t == "string") throw new TypeError('The "string" argument must be of type string. Received type number');
      return Lx(e);
    }
    return T4(e, t, a);
  }
  M.poolSize = 8192;
  function T4(e, t, a) {
    if (typeof e == "string") return Lle(e, t);
    if (ArrayBuffer.isView(e)) return jle(e);
    if (e == null) throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + _typeof(e));
    if (pn(e, ArrayBuffer) || e && pn(e.buffer, ArrayBuffer) || (typeof SharedArrayBuffer === "undefined" ? "undefined" : _typeof(SharedArrayBuffer)) < "u" && (pn(e, SharedArrayBuffer) || e && pn(e.buffer, SharedArrayBuffer))) return Ux(e, t, a);
    if (typeof e == "number") throw new TypeError('The "value" argument must not be of type number. Received type number');
    var i = e.valueOf && e.valueOf();
    if (i != null && i !== e) return M.from(i, t, a);
    var u = Hle(e);
    if (u) return u;
    if ((typeof Symbol === "undefined" ? "undefined" : _typeof(Symbol)) < "u" && Symbol.toPrimitive != null && typeof e[Symbol.toPrimitive] == "function") return M.from(e[Symbol.toPrimitive]("string"), t, a);
    throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + _typeof(e));
  }
  M.from = function (e, t, a) {
    return T4(e, t, a);
  };
  Object.setPrototypeOf(M.prototype, Uint8Array.prototype);
  Object.setPrototypeOf(M, Uint8Array);
  function q4(e) {
    if (typeof e != "number") throw new TypeError('"size" argument must be of type number');
    if (e < 0) throw new RangeError('The value "' + e + '" is invalid for option "size"');
  }
  function zle(e, t, a) {
    return q4(e), e <= 0 ? kn(e) : t !== void 0 ? typeof a == "string" ? kn(e).fill(t, a) : kn(e).fill(t) : kn(e);
  }
  M.alloc = function (e, t, a) {
    return zle(e, t, a);
  };
  function Lx(e) {
    return q4(e), kn(e < 0 ? 0 : jx(e) | 0);
  }
  M.allocUnsafe = function (e) {
    return Lx(e);
  };
  M.allocUnsafeSlow = function (e) {
    return Lx(e);
  };
  function Lle(e, t) {
    if ((typeof t != "string" || t === "") && (t = "utf8"), !M.isEncoding(t)) throw new TypeError("Unknown encoding: " + t);
    var a = _4(e, t) | 0,
      i = kn(a),
      u = i.write(e, t);
    return u !== a && (i = i.slice(0, u)), i;
  }
  function Px(e) {
    var t = e.length < 0 ? 0 : jx(e.length) | 0,
      a = kn(t);
    for (var i = 0; i < t; i += 1) a[i] = e[i] & 255;
    return a;
  }
  function jle(e) {
    if (pn(e, Uint8Array)) {
      var t = new Uint8Array(e);
      return Ux(t.buffer, t.byteOffset, t.byteLength);
    }
    return Px(e);
  }
  function Ux(e, t, a) {
    if (t < 0 || e.byteLength < t) throw new RangeError('"offset" is outside of buffer bounds');
    if (e.byteLength < t + (a || 0)) throw new RangeError('"length" is outside of buffer bounds');
    var i;
    return t === void 0 && a === void 0 ? i = new Uint8Array(e) : a === void 0 ? i = new Uint8Array(e, t) : i = new Uint8Array(e, t, a), Object.setPrototypeOf(i, M.prototype), i;
  }
  function Hle(e) {
    if (M.isBuffer(e)) {
      var t = jx(e.length) | 0,
        a = kn(t);
      return a.length === 0 || e.copy(a, 0, 0, t), a;
    }
    if (e.length !== void 0) return typeof e.length != "number" || Fx(e.length) ? kn(0) : Px(e);
    if (e.type === "Buffer" && Array.isArray(e.data)) return Px(e.data);
  }
  function jx(e) {
    if (e >= dd) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + dd.toString(16) + " bytes");
    return e | 0;
  }
  function Fle(e) {
    return +e != e && (e = 0), M.alloc(+e);
  }
  M.isBuffer = function (t) {
    return t != null && t._isBuffer === !0 && t !== M.prototype;
  };
  M.compare = function (t, a) {
    if (pn(t, Uint8Array) && (t = M.from(t, t.offset, t.byteLength)), pn(a, Uint8Array) && (a = M.from(a, a.offset, a.byteLength)), !M.isBuffer(t) || !M.isBuffer(a)) throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
    if (t === a) return 0;
    var i = t.length,
      u = a.length;
    for (var l = 0, c = Math.min(i, u); l < c; ++l) if (t[l] !== a[l]) {
      i = t[l], u = a[l];
      break;
    }
    return i < u ? -1 : u < i ? 1 : 0;
  };
  M.isEncoding = function (t) {
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
  M.concat = function (t, a) {
    if (!Array.isArray(t)) throw new TypeError('"list" argument must be an Array of Buffers');
    if (t.length === 0) return M.alloc(0);
    var i;
    if (a === void 0) for (a = 0, i = 0; i < t.length; ++i) a += t[i].length;
    var u = M.allocUnsafe(a),
      l = 0;
    for (i = 0; i < t.length; ++i) {
      var c = t[i];
      if (pn(c, Uint8Array)) l + c.length > u.length ? (M.isBuffer(c) || (c = M.from(c)), c.copy(u, l)) : Uint8Array.prototype.set.call(u, c, l);else if (M.isBuffer(c)) c.copy(u, l);else throw new TypeError('"list" argument must be an Array of Buffers');
      l += c.length;
    }
    return u;
  };
  function _4(e, t) {
    if (M.isBuffer(e)) return e.length;
    if (ArrayBuffer.isView(e) || pn(e, ArrayBuffer)) return e.byteLength;
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
        return zx(e).length;
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return a * 2;
      case "hex":
        return a >>> 1;
      case "base64":
        return B4(e).length;
      default:
        if (u) return i ? -1 : zx(e).length;
        t = ("" + t).toLowerCase(), u = !0;
    }
  }
  M.byteLength = _4;
  function Gle(e, t, a) {
    var i = !1;
    if ((t === void 0 || t < 0) && (t = 0), t > this.length || ((a === void 0 || a > this.length) && (a = this.length), a <= 0) || (a >>>= 0, t >>>= 0, a <= t)) return "";
    for (e || (e = "utf8");;) switch (e) {
      case "hex":
        return $le(this, t, a);
      case "utf8":
      case "utf-8":
        return O4(this, t, a);
      case "ascii":
        return Jle(this, t, a);
      case "latin1":
      case "binary":
        return Wle(this, t, a);
      case "base64":
        return Zle(this, t, a);
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return ece(this, t, a);
      default:
        if (i) throw new TypeError("Unknown encoding: " + e);
        e = (e + "").toLowerCase(), i = !0;
    }
  }
  M.prototype._isBuffer = !0;
  function zi(e, t, a) {
    var i = e[t];
    e[t] = e[a], e[a] = i;
  }
  M.prototype.swap16 = function () {
    var t = this.length;
    if (t % 2 !== 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
    for (var a = 0; a < t; a += 2) zi(this, a, a + 1);
    return this;
  };
  M.prototype.swap32 = function () {
    var t = this.length;
    if (t % 4 !== 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
    for (var a = 0; a < t; a += 4) zi(this, a, a + 3), zi(this, a + 1, a + 2);
    return this;
  };
  M.prototype.swap64 = function () {
    var t = this.length;
    if (t % 8 !== 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
    for (var a = 0; a < t; a += 8) zi(this, a, a + 7), zi(this, a + 1, a + 6), zi(this, a + 2, a + 5), zi(this, a + 3, a + 4);
    return this;
  };
  M.prototype.toString = function () {
    var t = this.length;
    return t === 0 ? "" : arguments.length === 0 ? O4(this, 0, t) : Gle.apply(this, arguments);
  };
  M.prototype.toLocaleString = M.prototype.toString;
  M.prototype.equals = function (t) {
    if (!M.isBuffer(t)) throw new TypeError("Argument must be a Buffer");
    return this === t ? !0 : M.compare(this, t) === 0;
  };
  M.prototype.inspect = function () {
    var t = "",
      a = gu.INSPECT_MAX_BYTES;
    return t = this.toString("hex", 0, a).replace(/(.{2})/g, "$1 ").trim(), this.length > a && (t += " ... "), "<Buffer " + t + ">";
  };
  x4 && (M.prototype[x4] = M.prototype.inspect);
  M.prototype.compare = function (t, a, i, u, l) {
    if (pn(t, Uint8Array) && (t = M.from(t, t.offset, t.byteLength)), !M.isBuffer(t)) throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + _typeof(t));
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
    for (var x = 0; x < m; ++x) if (h[x] !== g[x]) {
      c = h[x], d = g[x];
      break;
    }
    return c < d ? -1 : d < c ? 1 : 0;
  };
  function A4(e, t, a, i, u) {
    if (e.length === 0) return -1;
    if (typeof a == "string" ? (i = a, a = 0) : a > 2147483647 ? a = 2147483647 : a < -2147483648 && (a = -2147483648), a = +a, Fx(a) && (a = u ? 0 : e.length - 1), a < 0 && (a = e.length + a), a >= e.length) {
      if (u) return -1;
      a = e.length - 1;
    } else if (a < 0) if (u) a = 0;else return -1;
    if (typeof t == "string" && (t = M.from(t, i)), M.isBuffer(t)) return t.length === 0 ? -1 : b4(e, t, a, i, u);
    if (typeof t == "number") return t = t & 255, typeof Uint8Array.prototype.indexOf == "function" ? u ? Uint8Array.prototype.indexOf.call(e, t, a) : Uint8Array.prototype.lastIndexOf.call(e, t, a) : b4(e, [t], a, i, u);
    throw new TypeError("val must be string, number or Buffer");
  }
  function b4(e, t, a, i, u) {
    var l = 1,
      c = e.length,
      d = t.length;
    if (i !== void 0 && (i = String(i).toLowerCase(), i === "ucs2" || i === "ucs-2" || i === "utf16le" || i === "utf-16le")) {
      if (e.length < 2 || t.length < 2) return -1;
      l = 2, c /= 2, d /= 2, a /= 2;
    }
    function m(g, x) {
      return l === 1 ? g[x] : g.readUInt16BE(x * l);
    }
    var h;
    if (u) {
      var g = -1;
      for (h = a; h < c; h++) if (m(e, h) === m(t, g === -1 ? 0 : h - g)) {
        if (g === -1 && (g = h), h - g + 1 === d) return g * l;
      } else g !== -1 && (h -= h - g), g = -1;
    } else for (a + d > c && (a = c - d), h = a; h >= 0; h--) {
      var _g2 = !0;
      for (var x = 0; x < d; x++) if (m(e, h + x) !== m(t, x)) {
        _g2 = !1;
        break;
      }
      if (_g2) return h;
    }
    return -1;
  }
  M.prototype.includes = function (t, a, i) {
    return this.indexOf(t, a, i) !== -1;
  };
  M.prototype.indexOf = function (t, a, i) {
    return A4(this, t, a, i, !0);
  };
  M.prototype.lastIndexOf = function (t, a, i) {
    return A4(this, t, a, i, !1);
  };
  function Kle(e, t, a, i) {
    a = Number(a) || 0;
    var u = e.length - a;
    i ? (i = Number(i), i > u && (i = u)) : i = u;
    var l = t.length;
    i > l / 2 && (i = l / 2);
    var c;
    for (c = 0; c < i; ++c) {
      var d = parseInt(t.substr(c * 2, 2), 16);
      if (Fx(d)) return c;
      e[a + c] = d;
    }
    return c;
  }
  function Vle(e, t, a, i) {
    return md(zx(t, e.length - a), e, a, i);
  }
  function Yle(e, t, a, i) {
    return md(ace(t), e, a, i);
  }
  function Xle(e, t, a, i) {
    return md(B4(t), e, a, i);
  }
  function Qle(e, t, a, i) {
    return md(ice(t, e.length - a), e, a, i);
  }
  M.prototype.write = function (t, a, i, u) {
    if (a === void 0) u = "utf8", i = this.length, a = 0;else if (i === void 0 && typeof a == "string") u = a, i = this.length, a = 0;else if (isFinite(a)) a = a >>> 0, isFinite(i) ? (i = i >>> 0, u === void 0 && (u = "utf8")) : (u = i, i = void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
    var l = this.length - a;
    if ((i === void 0 || i > l) && (i = l), t.length > 0 && (i < 0 || a < 0) || a > this.length) throw new RangeError("Attempt to write outside buffer bounds");
    u || (u = "utf8");
    var c = !1;
    for (;;) switch (u) {
      case "hex":
        return Kle(this, t, a, i);
      case "utf8":
      case "utf-8":
        return Vle(this, t, a, i);
      case "ascii":
      case "latin1":
      case "binary":
        return Yle(this, t, a, i);
      case "base64":
        return Xle(this, t, a, i);
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return Qle(this, t, a, i);
      default:
        if (c) throw new TypeError("Unknown encoding: " + u);
        u = ("" + u).toLowerCase(), c = !0;
    }
  };
  M.prototype.toJSON = function () {
    return {
      type: "Buffer",
      data: Array.prototype.slice.call(this._arr || this, 0)
    };
  };
  function Zle(e, t, a) {
    return t === 0 && a === e.length ? Ix.fromByteArray(e) : Ix.fromByteArray(e.slice(t, a));
  }
  function O4(e, t, a) {
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
          x = void 0;
        switch (d) {
          case 1:
            l < 128 && (c = l);
            break;
          case 2:
            m = e[u + 1], (m & 192) === 128 && (x = (l & 31) << 6 | m & 63, x > 127 && (c = x));
            break;
          case 3:
            m = e[u + 1], h = e[u + 2], (m & 192) === 128 && (h & 192) === 128 && (x = (l & 15) << 12 | (m & 63) << 6 | h & 63, x > 2047 && (x < 55296 || x > 57343) && (c = x));
            break;
          case 4:
            m = e[u + 1], h = e[u + 2], g = e[u + 3], (m & 192) === 128 && (h & 192) === 128 && (g & 192) === 128 && (x = (l & 15) << 18 | (m & 63) << 12 | (h & 63) << 6 | g & 63, x > 65535 && x < 1114112 && (c = x));
        }
      }
      c === null ? (c = 65533, d = 1) : c > 65535 && (c -= 65536, i.push(c >>> 10 & 1023 | 55296), c = 56320 | c & 1023), i.push(c), u += d;
    }
    return kle(i);
  }
  var E4 = 4096;
  function kle(e) {
    var t = e.length;
    if (t <= E4) return String.fromCharCode.apply(String, e);
    var a = "",
      i = 0;
    for (; i < t;) a += String.fromCharCode.apply(String, e.slice(i, i += E4));
    return a;
  }
  function Jle(e, t, a) {
    var i = "";
    a = Math.min(e.length, a);
    for (var u = t; u < a; ++u) i += String.fromCharCode(e[u] & 127);
    return i;
  }
  function Wle(e, t, a) {
    var i = "";
    a = Math.min(e.length, a);
    for (var u = t; u < a; ++u) i += String.fromCharCode(e[u]);
    return i;
  }
  function $le(e, t, a) {
    var i = e.length;
    (!t || t < 0) && (t = 0), (!a || a < 0 || a > i) && (a = i);
    var u = "";
    for (var l = t; l < a; ++l) u += oce[e[l]];
    return u;
  }
  function ece(e, t, a) {
    var i = e.slice(t, a),
      u = "";
    for (var l = 0; l < i.length - 1; l += 2) u += String.fromCharCode(i[l] + i[l + 1] * 256);
    return u;
  }
  M.prototype.slice = function (t, a) {
    var i = this.length;
    t = ~~t, a = a === void 0 ? i : ~~a, t < 0 ? (t += i, t < 0 && (t = 0)) : t > i && (t = i), a < 0 ? (a += i, a < 0 && (a = 0)) : a > i && (a = i), a < t && (a = t);
    var u = this.subarray(t, a);
    return Object.setPrototypeOf(u, M.prototype), u;
  };
  function dt(e, t, a) {
    if (e % 1 !== 0 || e < 0) throw new RangeError("offset is not uint");
    if (e + t > a) throw new RangeError("Trying to access beyond buffer length");
  }
  M.prototype.readUintLE = M.prototype.readUIntLE = function (t, a, i) {
    t = t >>> 0, a = a >>> 0, i || dt(t, a, this.length);
    var u = this[t],
      l = 1,
      c = 0;
    for (; ++c < a && (l *= 256);) u += this[t + c] * l;
    return u;
  };
  M.prototype.readUintBE = M.prototype.readUIntBE = function (t, a, i) {
    t = t >>> 0, a = a >>> 0, i || dt(t, a, this.length);
    var u = this[t + --a],
      l = 1;
    for (; a > 0 && (l *= 256);) u += this[t + --a] * l;
    return u;
  };
  M.prototype.readUint8 = M.prototype.readUInt8 = function (t, a) {
    return t = t >>> 0, a || dt(t, 1, this.length), this[t];
  };
  M.prototype.readUint16LE = M.prototype.readUInt16LE = function (t, a) {
    return t = t >>> 0, a || dt(t, 2, this.length), this[t] | this[t + 1] << 8;
  };
  M.prototype.readUint16BE = M.prototype.readUInt16BE = function (t, a) {
    return t = t >>> 0, a || dt(t, 2, this.length), this[t] << 8 | this[t + 1];
  };
  M.prototype.readUint32LE = M.prototype.readUInt32LE = function (t, a) {
    return t = t >>> 0, a || dt(t, 4, this.length), (this[t] | this[t + 1] << 8 | this[t + 2] << 16) + this[t + 3] * 16777216;
  };
  M.prototype.readUint32BE = M.prototype.readUInt32BE = function (t, a) {
    return t = t >>> 0, a || dt(t, 4, this.length), this[t] * 16777216 + (this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3]);
  };
  M.prototype.readBigUInt64LE = Va(function (t) {
    t = t >>> 0, hu(t, "offset");
    var a = this[t],
      i = this[t + 7];
    (a === void 0 || i === void 0) && wl(t, this.length - 8);
    var u = a + this[++t] * Math.pow(2, 8) + this[++t] * Math.pow(2, 16) + this[++t] * Math.pow(2, 24),
      l = this[++t] + this[++t] * Math.pow(2, 8) + this[++t] * Math.pow(2, 16) + i * Math.pow(2, 24);
    return BigInt(u) + (BigInt(l) << BigInt(32));
  });
  M.prototype.readBigUInt64BE = Va(function (t) {
    t = t >>> 0, hu(t, "offset");
    var a = this[t],
      i = this[t + 7];
    (a === void 0 || i === void 0) && wl(t, this.length - 8);
    var u = a * Math.pow(2, 24) + this[++t] * Math.pow(2, 16) + this[++t] * Math.pow(2, 8) + this[++t],
      l = this[++t] * Math.pow(2, 24) + this[++t] * Math.pow(2, 16) + this[++t] * Math.pow(2, 8) + i;
    return (BigInt(u) << BigInt(32)) + BigInt(l);
  });
  M.prototype.readIntLE = function (t, a, i) {
    t = t >>> 0, a = a >>> 0, i || dt(t, a, this.length);
    var u = this[t],
      l = 1,
      c = 0;
    for (; ++c < a && (l *= 256);) u += this[t + c] * l;
    return l *= 128, u >= l && (u -= Math.pow(2, 8 * a)), u;
  };
  M.prototype.readIntBE = function (t, a, i) {
    t = t >>> 0, a = a >>> 0, i || dt(t, a, this.length);
    var u = a,
      l = 1,
      c = this[t + --u];
    for (; u > 0 && (l *= 256);) c += this[t + --u] * l;
    return l *= 128, c >= l && (c -= Math.pow(2, 8 * a)), c;
  };
  M.prototype.readInt8 = function (t, a) {
    return t = t >>> 0, a || dt(t, 1, this.length), this[t] & 128 ? (255 - this[t] + 1) * -1 : this[t];
  };
  M.prototype.readInt16LE = function (t, a) {
    t = t >>> 0, a || dt(t, 2, this.length);
    var i = this[t] | this[t + 1] << 8;
    return i & 32768 ? i | 4294901760 : i;
  };
  M.prototype.readInt16BE = function (t, a) {
    t = t >>> 0, a || dt(t, 2, this.length);
    var i = this[t + 1] | this[t] << 8;
    return i & 32768 ? i | 4294901760 : i;
  };
  M.prototype.readInt32LE = function (t, a) {
    return t = t >>> 0, a || dt(t, 4, this.length), this[t] | this[t + 1] << 8 | this[t + 2] << 16 | this[t + 3] << 24;
  };
  M.prototype.readInt32BE = function (t, a) {
    return t = t >>> 0, a || dt(t, 4, this.length), this[t] << 24 | this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3];
  };
  M.prototype.readBigInt64LE = Va(function (t) {
    t = t >>> 0, hu(t, "offset");
    var a = this[t],
      i = this[t + 7];
    (a === void 0 || i === void 0) && wl(t, this.length - 8);
    var u = this[t + 4] + this[t + 5] * Math.pow(2, 8) + this[t + 6] * Math.pow(2, 16) + (i << 24);
    return (BigInt(u) << BigInt(32)) + BigInt(a + this[++t] * Math.pow(2, 8) + this[++t] * Math.pow(2, 16) + this[++t] * Math.pow(2, 24));
  });
  M.prototype.readBigInt64BE = Va(function (t) {
    t = t >>> 0, hu(t, "offset");
    var a = this[t],
      i = this[t + 7];
    (a === void 0 || i === void 0) && wl(t, this.length - 8);
    var u = (a << 24) + this[++t] * Math.pow(2, 16) + this[++t] * Math.pow(2, 8) + this[++t];
    return (BigInt(u) << BigInt(32)) + BigInt(this[++t] * Math.pow(2, 24) + this[++t] * Math.pow(2, 16) + this[++t] * Math.pow(2, 8) + i);
  });
  M.prototype.readFloatLE = function (t, a) {
    return t = t >>> 0, a || dt(t, 4, this.length), vu.read(this, t, !0, 23, 4);
  };
  M.prototype.readFloatBE = function (t, a) {
    return t = t >>> 0, a || dt(t, 4, this.length), vu.read(this, t, !1, 23, 4);
  };
  M.prototype.readDoubleLE = function (t, a) {
    return t = t >>> 0, a || dt(t, 8, this.length), vu.read(this, t, !0, 52, 8);
  };
  M.prototype.readDoubleBE = function (t, a) {
    return t = t >>> 0, a || dt(t, 8, this.length), vu.read(this, t, !1, 52, 8);
  };
  function $t(e, t, a, i, u, l) {
    if (!M.isBuffer(e)) throw new TypeError('"buffer" argument must be a Buffer instance');
    if (t > u || t < l) throw new RangeError('"value" argument is out of bounds');
    if (a + i > e.length) throw new RangeError("Index out of range");
  }
  M.prototype.writeUintLE = M.prototype.writeUIntLE = function (t, a, i, u) {
    if (t = +t, a = a >>> 0, i = i >>> 0, !u) {
      var d = Math.pow(2, 8 * i) - 1;
      $t(this, t, a, i, d, 0);
    }
    var l = 1,
      c = 0;
    for (this[a] = t & 255; ++c < i && (l *= 256);) this[a + c] = t / l & 255;
    return a + i;
  };
  M.prototype.writeUintBE = M.prototype.writeUIntBE = function (t, a, i, u) {
    if (t = +t, a = a >>> 0, i = i >>> 0, !u) {
      var d = Math.pow(2, 8 * i) - 1;
      $t(this, t, a, i, d, 0);
    }
    var l = i - 1,
      c = 1;
    for (this[a + l] = t & 255; --l >= 0 && (c *= 256);) this[a + l] = t / c & 255;
    return a + i;
  };
  M.prototype.writeUint8 = M.prototype.writeUInt8 = function (t, a, i) {
    return t = +t, a = a >>> 0, i || $t(this, t, a, 1, 255, 0), this[a] = t & 255, a + 1;
  };
  M.prototype.writeUint16LE = M.prototype.writeUInt16LE = function (t, a, i) {
    return t = +t, a = a >>> 0, i || $t(this, t, a, 2, 65535, 0), this[a] = t & 255, this[a + 1] = t >>> 8, a + 2;
  };
  M.prototype.writeUint16BE = M.prototype.writeUInt16BE = function (t, a, i) {
    return t = +t, a = a >>> 0, i || $t(this, t, a, 2, 65535, 0), this[a] = t >>> 8, this[a + 1] = t & 255, a + 2;
  };
  M.prototype.writeUint32LE = M.prototype.writeUInt32LE = function (t, a, i) {
    return t = +t, a = a >>> 0, i || $t(this, t, a, 4, 4294967295, 0), this[a + 3] = t >>> 24, this[a + 2] = t >>> 16, this[a + 1] = t >>> 8, this[a] = t & 255, a + 4;
  };
  M.prototype.writeUint32BE = M.prototype.writeUInt32BE = function (t, a, i) {
    return t = +t, a = a >>> 0, i || $t(this, t, a, 4, 4294967295, 0), this[a] = t >>> 24, this[a + 1] = t >>> 16, this[a + 2] = t >>> 8, this[a + 3] = t & 255, a + 4;
  };
  function C4(e, t, a, i, u) {
    D4(t, i, u, e, a, 7);
    var l = Number(t & BigInt(4294967295));
    e[a++] = l, l = l >> 8, e[a++] = l, l = l >> 8, e[a++] = l, l = l >> 8, e[a++] = l;
    var c = Number(t >> BigInt(32) & BigInt(4294967295));
    return e[a++] = c, c = c >> 8, e[a++] = c, c = c >> 8, e[a++] = c, c = c >> 8, e[a++] = c, a;
  }
  function R4(e, t, a, i, u) {
    D4(t, i, u, e, a, 7);
    var l = Number(t & BigInt(4294967295));
    e[a + 7] = l, l = l >> 8, e[a + 6] = l, l = l >> 8, e[a + 5] = l, l = l >> 8, e[a + 4] = l;
    var c = Number(t >> BigInt(32) & BigInt(4294967295));
    return e[a + 3] = c, c = c >> 8, e[a + 2] = c, c = c >> 8, e[a + 1] = c, c = c >> 8, e[a] = c, a + 8;
  }
  M.prototype.writeBigUInt64LE = Va(function (t) {
    var a = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    return C4(this, t, a, BigInt(0), BigInt("0xffffffffffffffff"));
  });
  M.prototype.writeBigUInt64BE = Va(function (t) {
    var a = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    return R4(this, t, a, BigInt(0), BigInt("0xffffffffffffffff"));
  });
  M.prototype.writeIntLE = function (t, a, i, u) {
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
  M.prototype.writeIntBE = function (t, a, i, u) {
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
  M.prototype.writeInt8 = function (t, a, i) {
    return t = +t, a = a >>> 0, i || $t(this, t, a, 1, 127, -128), t < 0 && (t = 255 + t + 1), this[a] = t & 255, a + 1;
  };
  M.prototype.writeInt16LE = function (t, a, i) {
    return t = +t, a = a >>> 0, i || $t(this, t, a, 2, 32767, -32768), this[a] = t & 255, this[a + 1] = t >>> 8, a + 2;
  };
  M.prototype.writeInt16BE = function (t, a, i) {
    return t = +t, a = a >>> 0, i || $t(this, t, a, 2, 32767, -32768), this[a] = t >>> 8, this[a + 1] = t & 255, a + 2;
  };
  M.prototype.writeInt32LE = function (t, a, i) {
    return t = +t, a = a >>> 0, i || $t(this, t, a, 4, 2147483647, -2147483648), this[a] = t & 255, this[a + 1] = t >>> 8, this[a + 2] = t >>> 16, this[a + 3] = t >>> 24, a + 4;
  };
  M.prototype.writeInt32BE = function (t, a, i) {
    return t = +t, a = a >>> 0, i || $t(this, t, a, 4, 2147483647, -2147483648), t < 0 && (t = 4294967295 + t + 1), this[a] = t >>> 24, this[a + 1] = t >>> 16, this[a + 2] = t >>> 8, this[a + 3] = t & 255, a + 4;
  };
  M.prototype.writeBigInt64LE = Va(function (t) {
    var a = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    return C4(this, t, a, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
  });
  M.prototype.writeBigInt64BE = Va(function (t) {
    var a = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    return R4(this, t, a, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
  });
  function N4(e, t, a, i, u, l) {
    if (a + i > e.length) throw new RangeError("Index out of range");
    if (a < 0) throw new RangeError("Index out of range");
  }
  function w4(e, t, a, i, u) {
    return t = +t, a = a >>> 0, u || N4(e, t, a, 4, 34028234663852886e22, -34028234663852886e22), vu.write(e, t, a, i, 23, 4), a + 4;
  }
  M.prototype.writeFloatLE = function (t, a, i) {
    return w4(this, t, a, !0, i);
  };
  M.prototype.writeFloatBE = function (t, a, i) {
    return w4(this, t, a, !1, i);
  };
  function M4(e, t, a, i, u) {
    return t = +t, a = a >>> 0, u || N4(e, t, a, 8, 17976931348623157e292, -17976931348623157e292), vu.write(e, t, a, i, 52, 8), a + 8;
  }
  M.prototype.writeDoubleLE = function (t, a, i) {
    return M4(this, t, a, !0, i);
  };
  M.prototype.writeDoubleBE = function (t, a, i) {
    return M4(this, t, a, !1, i);
  };
  M.prototype.copy = function (t, a, i, u) {
    if (!M.isBuffer(t)) throw new TypeError("argument should be a Buffer");
    if (i || (i = 0), !u && u !== 0 && (u = this.length), a >= t.length && (a = t.length), a || (a = 0), u > 0 && u < i && (u = i), u === i || t.length === 0 || this.length === 0) return 0;
    if (a < 0) throw new RangeError("targetStart out of bounds");
    if (i < 0 || i >= this.length) throw new RangeError("Index out of range");
    if (u < 0) throw new RangeError("sourceEnd out of bounds");
    u > this.length && (u = this.length), t.length - a < u - i && (u = t.length - a + i);
    var l = u - i;
    return this === t && typeof Uint8Array.prototype.copyWithin == "function" ? this.copyWithin(a, i, u) : Uint8Array.prototype.set.call(t, this.subarray(i, u), a), l;
  };
  M.prototype.fill = function (t, a, i, u) {
    if (typeof t == "string") {
      if (typeof a == "string" ? (u = a, a = 0, i = this.length) : typeof i == "string" && (u = i, i = this.length), u !== void 0 && typeof u != "string") throw new TypeError("encoding must be a string");
      if (typeof u == "string" && !M.isEncoding(u)) throw new TypeError("Unknown encoding: " + u);
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
      var _c2 = M.isBuffer(t) ? t : M.from(t, u),
        d = _c2.length;
      if (d === 0) throw new TypeError('The value "' + t + '" is invalid for argument "value"');
      for (l = 0; l < i - a; ++l) this[l + a] = _c2[l % d];
    }
    return this;
  };
  var mu = {};
  function Hx(e, t, a) {
    mu[e] = /*#__PURE__*/function (_a2) {
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
  Hx("ERR_BUFFER_OUT_OF_BOUNDS", function (e) {
    return e ? "".concat(e, " is outside of buffer bounds") : "Attempt to access memory outside buffer bounds";
  }, RangeError);
  Hx("ERR_INVALID_ARG_TYPE", function (e, t) {
    return "The \"".concat(e, "\" argument must be of type number. Received type ").concat(_typeof(t));
  }, TypeError);
  Hx("ERR_OUT_OF_RANGE", function (e, t, a) {
    var i = "The value of \"".concat(e, "\" is out of range."),
      u = a;
    return Number.isInteger(a) && Math.abs(a) > Math.pow(2, 32) ? u = S4(String(a)) : typeof a == "bigint" && (u = String(a), (a > Math.pow(BigInt(2), BigInt(32)) || a < -Math.pow(BigInt(2), BigInt(32))) && (u = S4(u)), u += "n"), i += " It must be ".concat(t, ". Received ").concat(u), i;
  }, RangeError);
  function S4(e) {
    var t = "",
      a = e.length,
      i = e[0] === "-" ? 1 : 0;
    for (; a >= i + 4; a -= 3) t = "_".concat(e.slice(a - 3, a)).concat(t);
    return "".concat(e.slice(0, a)).concat(t);
  }
  function tce(e, t, a) {
    hu(t, "offset"), (e[t] === void 0 || e[t + a] === void 0) && wl(t, e.length - (a + 1));
  }
  function D4(e, t, a, i, u, l) {
    if (e > a || e < t) {
      var c = typeof t == "bigint" ? "n" : "",
        d;
      throw l > 3 ? t === 0 || t === BigInt(0) ? d = ">= 0".concat(c, " and < 2").concat(c, " ** ").concat((l + 1) * 8).concat(c) : d = ">= -(2".concat(c, " ** ").concat((l + 1) * 8 - 1).concat(c, ") and < 2 ** ").concat((l + 1) * 8 - 1).concat(c) : d = ">= ".concat(t).concat(c, " and <= ").concat(a).concat(c), new mu.ERR_OUT_OF_RANGE("value", d, e);
    }
    tce(i, u, l);
  }
  function hu(e, t) {
    if (typeof e != "number") throw new mu.ERR_INVALID_ARG_TYPE(t, "number", e);
  }
  function wl(e, t, a) {
    throw Math.floor(e) !== e ? (hu(e, a), new mu.ERR_OUT_OF_RANGE(a || "offset", "an integer", e)) : t < 0 ? new mu.ERR_BUFFER_OUT_OF_BOUNDS() : new mu.ERR_OUT_OF_RANGE(a || "offset", ">= ".concat(a ? 1 : 0, " and <= ").concat(t), e);
  }
  var rce = /[^+/0-9A-Za-z-_]/g;
  function nce(e) {
    if (e = e.split("=")[0], e = e.trim().replace(rce, ""), e.length < 2) return "";
    for (; e.length % 4 !== 0;) e = e + "=";
    return e;
  }
  function zx(e, t) {
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
  function ace(e) {
    var t = [];
    for (var a = 0; a < e.length; ++a) t.push(e.charCodeAt(a) & 255);
    return t;
  }
  function ice(e, t) {
    var a,
      i,
      u,
      l = [];
    for (var c = 0; c < e.length && !((t -= 2) < 0); ++c) a = e.charCodeAt(c), i = a >> 8, u = a % 256, l.push(u), l.push(i);
    return l;
  }
  function B4(e) {
    return Ix.toByteArray(nce(e));
  }
  function md(e, t, a, i) {
    var u;
    for (u = 0; u < i && !(u + a >= t.length || u >= e.length); ++u) t[u + a] = e[u];
    return u;
  }
  function pn(e, t) {
    return e instanceof t || e != null && e.constructor != null && e.constructor.name != null && e.constructor.name === t.name;
  }
  function Fx(e) {
    return e !== e;
  }
  var oce = function () {
    var e = "0123456789abcdef",
      t = new Array(256);
    for (var a = 0; a < 16; ++a) {
      var i = a * 16;
      for (var u = 0; u < 16; ++u) t[i + u] = e[a] + e[u];
    }
    return t;
  }();
  function Va(e) {
    return (typeof BigInt === "undefined" ? "undefined" : _typeof(BigInt)) > "u" ? uce : e;
  }
  function uce() {
    throw new Error("BigInt not supported");
  }
});
var X4 = v(function (ue) {
  "use strict";

  var Vx = Symbol.for("react.transitional.element"),
    sce = Symbol.for("react.portal"),
    lce = Symbol.for("react.fragment"),
    cce = Symbol.for("react.strict_mode"),
    fce = Symbol.for("react.profiler"),
    pce = Symbol.for("react.consumer"),
    dce = Symbol.for("react.context"),
    mce = Symbol.for("react.forward_ref"),
    vce = Symbol.for("react.suspense"),
    hce = Symbol.for("react.memo"),
    H4 = Symbol.for("react.lazy"),
    gce = Symbol.for("react.activity"),
    U4 = Symbol.iterator;
  function yce(e) {
    return e === null || _typeof(e) != "object" ? null : (e = U4 && e[U4] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var F4 = {
      isMounted: function isMounted() {
        return !1;
      },
      enqueueForceUpdate: function enqueueForceUpdate() {},
      enqueueReplaceState: function enqueueReplaceState() {},
      enqueueSetState: function enqueueSetState() {}
    },
    G4 = Object.assign,
    K4 = {};
  function xu(e, t, a) {
    this.props = e, this.context = t, this.refs = K4, this.updater = a || F4;
  }
  xu.prototype.isReactComponent = {};
  xu.prototype.setState = function (e, t) {
    if (_typeof(e) != "object" && typeof e != "function" && e != null) throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, e, t, "setState");
  };
  xu.prototype.forceUpdate = function (e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate");
  };
  function V4() {}
  V4.prototype = xu.prototype;
  function Yx(e, t, a) {
    this.props = e, this.context = t, this.refs = K4, this.updater = a || F4;
  }
  var Xx = Yx.prototype = new V4();
  Xx.constructor = Yx;
  G4(Xx, xu.prototype);
  Xx.isPureReactComponent = !0;
  var z4 = Array.isArray;
  function Kx() {}
  var De = {
      H: null,
      A: null,
      T: null,
      S: null
    },
    Y4 = Object.prototype.hasOwnProperty;
  function Qx(e, t, a) {
    var i = a.ref;
    return {
      $$typeof: Vx,
      type: e,
      key: t,
      ref: i !== void 0 ? i : null,
      props: a
    };
  }
  function xce(e, t) {
    return Qx(e.type, t, e.props);
  }
  function Zx(e) {
    return _typeof(e) == "object" && e !== null && e.$$typeof === Vx;
  }
  function bce(e) {
    var t = {
      "=": "=0",
      ":": "=2"
    };
    return "$" + e.replace(/[=:]/g, function (a) {
      return t[a];
    });
  }
  var L4 = /\/+/g;
  function Gx(e, t) {
    return _typeof(e) == "object" && e !== null && e.key != null ? bce("" + e.key) : t.toString(36);
  }
  function Ece(e) {
    switch (e.status) {
      case "fulfilled":
        return e.value;
      case "rejected":
        throw e.reason;
      default:
        switch (typeof e.status == "string" ? e.then(Kx, Kx) : (e.status = "pending", e.then(function (t) {
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
  function yu(e, t, a, i, u) {
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
          case Vx:
          case sce:
            c = !0;
            break;
          case H4:
            return c = e._init, yu(c(e._payload), t, a, i, u);
        }
    }
    if (c) return u = u(e), c = i === "" ? "." + Gx(e, 0) : i, z4(u) ? (a = "", c != null && (a = c.replace(L4, "$&/") + "/"), yu(u, t, a, "", function (h) {
      return h;
    })) : u != null && (Zx(u) && (u = xce(u, a + (u.key == null || e && e.key === u.key ? "" : ("" + u.key).replace(L4, "$&/") + "/") + c)), t.push(u)), 1;
    c = 0;
    var d = i === "" ? "." : i + ":";
    if (z4(e)) for (var m = 0; m < e.length; m++) i = e[m], l = d + Gx(i, m), c += yu(i, t, a, l, u);else if (m = yce(e), typeof m == "function") for (e = m.call(e), m = 0; !(i = e.next()).done;) i = i.value, l = d + Gx(i, m++), c += yu(i, t, a, l, u);else if (l === "object") {
      if (typeof e.then == "function") return yu(Ece(e), t, a, i, u);
      throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
    }
    return c;
  }
  function vd(e, t, a) {
    if (e == null) return e;
    var i = [],
      u = 0;
    return yu(e, i, "", "", function (l) {
      return t.call(a, l, u++);
    }), i;
  }
  function Sce(e) {
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
  var j4 = typeof reportError == "function" ? reportError : function (e) {
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
    Tce = {
      map: vd,
      forEach: function forEach(e, t, a) {
        vd(e, function () {
          t.apply(this, arguments);
        }, a);
      },
      count: function count(e) {
        var t = 0;
        return vd(e, function () {
          t++;
        }), t;
      },
      toArray: function toArray(e) {
        return vd(e, function (t) {
          return t;
        }) || [];
      },
      only: function only(e) {
        if (!Zx(e)) throw Error("React.Children.only expected to receive a single React element child.");
        return e;
      }
    };
  ue.Activity = gce;
  ue.Children = Tce;
  ue.Component = xu;
  ue.Fragment = lce;
  ue.Profiler = fce;
  ue.PureComponent = Yx;
  ue.StrictMode = cce;
  ue.Suspense = vce;
  ue.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = De;
  ue.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function c(e) {
      return De.H.useMemoCache(e);
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
    var i = G4({}, e.props),
      u = e.key;
    if (t != null) for (l in t.key !== void 0 && (u = "" + t.key), t) !Y4.call(t, l) || l === "key" || l === "__self" || l === "__source" || l === "ref" && t.ref === void 0 || (i[l] = t[l]);
    var l = arguments.length - 2;
    if (l === 1) i.children = a;else if (1 < l) {
      for (var c = Array(l), d = 0; d < l; d++) c[d] = arguments[d + 2];
      i.children = c;
    }
    return Qx(e.type, u, i);
  };
  ue.createContext = function (e) {
    return e = {
      $$typeof: dce,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, e.Provider = e, e.Consumer = {
      $$typeof: pce,
      _context: e
    }, e;
  };
  ue.createElement = function (e, t, a) {
    var i,
      u = {},
      l = null;
    if (t != null) for (i in t.key !== void 0 && (l = "" + t.key), t) Y4.call(t, i) && i !== "key" && i !== "__self" && i !== "__source" && (u[i] = t[i]);
    var c = arguments.length - 2;
    if (c === 1) u.children = a;else if (1 < c) {
      for (var d = Array(c), m = 0; m < c; m++) d[m] = arguments[m + 2];
      u.children = d;
    }
    if (e && e.defaultProps) for (i in c = e.defaultProps, c) u[i] === void 0 && (u[i] = c[i]);
    return Qx(e, l, u);
  };
  ue.createRef = function () {
    return {
      current: null
    };
  };
  ue.forwardRef = function (e) {
    return {
      $$typeof: mce,
      render: e
    };
  };
  ue.isValidElement = Zx;
  ue.lazy = function (e) {
    return {
      $$typeof: H4,
      _payload: {
        _status: -1,
        _result: e
      },
      _init: Sce
    };
  };
  ue.memo = function (e, t) {
    return {
      $$typeof: hce,
      type: e,
      compare: t === void 0 ? null : t
    };
  };
  ue.startTransition = function (e) {
    var t = De.T,
      a = {};
    De.T = a;
    try {
      var i = e(),
        u = De.S;
      u !== null && u(a, i), _typeof(i) == "object" && i !== null && typeof i.then == "function" && i.then(Kx, j4);
    } catch (l) {
      j4(l);
    } finally {
      t !== null && a.types !== null && (t.types = a.types), De.T = t;
    }
  };
  ue.unstable_useCacheRefresh = function () {
    return De.H.useCacheRefresh();
  };
  ue.use = function (e) {
    return De.H.use(e);
  };
  ue.useActionState = function (e, t, a) {
    return De.H.useActionState(e, t, a);
  };
  ue.useCallback = function (e, t) {
    return De.H.useCallback(e, t);
  };
  ue.useContext = function (e) {
    return De.H.useContext(e);
  };
  ue.useDebugValue = function () {};
  ue.useDeferredValue = function (e, t) {
    return De.H.useDeferredValue(e, t);
  };
  ue.useEffect = function (e, t) {
    return De.H.useEffect(e, t);
  };
  ue.useEffectEvent = function (e) {
    return De.H.useEffectEvent(e);
  };
  ue.useId = function () {
    return De.H.useId();
  };
  ue.useImperativeHandle = function (e, t, a) {
    return De.H.useImperativeHandle(e, t, a);
  };
  ue.useInsertionEffect = function (e, t) {
    return De.H.useInsertionEffect(e, t);
  };
  ue.useLayoutEffect = function (e, t) {
    return De.H.useLayoutEffect(e, t);
  };
  ue.useMemo = function (e, t) {
    return De.H.useMemo(e, t);
  };
  ue.useOptimistic = function (e, t) {
    return De.H.useOptimistic(e, t);
  };
  ue.useReducer = function (e, t, a) {
    return De.H.useReducer(e, t, a);
  };
  ue.useRef = function (e) {
    return De.H.useRef(e);
  };
  ue.useState = function (e) {
    return De.H.useState(e);
  };
  ue.useSyncExternalStore = function (e, t, a) {
    return De.H.useSyncExternalStore(e, t, a);
  };
  ue.useTransition = function () {
    return De.H.useTransition();
  };
  ue.version = "19.2.4";
});
var _t = v(function (Dqe, Q4) {
  "use strict";

  Q4.exports = X4();
});
var kP = v(function () {});
var WP = v(function (Jd, JP) {
  (function (e, t) {
    _typeof(Jd) == "object" ? JP.exports = Jd = t() : typeof define == "function" && define.amd ? define([], t) : e.CryptoJS = t();
  })(Jd, function () {
    var e = e || function (t, a) {
      var i;
      if ((typeof window === "undefined" ? "undefined" : _typeof(window)) < "u" && window.crypto && (i = window.crypto), (typeof self === "undefined" ? "undefined" : _typeof(self)) < "u" && self.crypto && (i = self.crypto), (typeof globalThis === "undefined" ? "undefined" : _typeof(globalThis)) < "u" && globalThis.crypto && (i = globalThis.crypto), !i && (typeof window === "undefined" ? "undefined" : _typeof(window)) < "u" && window.msCrypto && (i = window.msCrypto), !i && (typeof global === "undefined" ? "undefined" : _typeof(global)) < "u" && global.crypto && (i = global.crypto), !i && typeof B1 == "function") try {
        i = kP();
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
            var D;
            return T.prototype = q, D = new T(), T.prototype = null, D;
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
            return (T || x).stringify(this);
          },
          concat: function concat(T) {
            var q = this.words,
              D = T.words,
              B = this.sigBytes,
              G = T.sigBytes;
            if (this.clamp(), B % 4) for (var V = 0; V < G; V++) {
              var te = D[V >>> 2] >>> 24 - V % 4 * 8 & 255;
              q[B + V >>> 2] |= te << 24 - (B + V) % 4 * 8;
            } else for (var ie = 0; ie < G; ie += 4) q[B + ie >>> 2] = D[ie >>> 2];
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
            for (var q = [], D = 0; D < T; D += 4) q.push(u());
            return new h.init(q, T);
          }
        }),
        g = c.enc = {},
        x = g.Hex = {
          stringify: function stringify(T) {
            for (var q = T.words, D = T.sigBytes, B = [], G = 0; G < D; G++) {
              var V = q[G >>> 2] >>> 24 - G % 4 * 8 & 255;
              B.push((V >>> 4).toString(16)), B.push((V & 15).toString(16));
            }
            return B.join("");
          },
          parse: function parse(T) {
            for (var q = T.length, D = [], B = 0; B < q; B += 2) D[B >>> 3] |= parseInt(T.substr(B, 2), 16) << 24 - B % 8 * 4;
            return new h.init(D, q / 2);
          }
        },
        b = g.Latin1 = {
          stringify: function stringify(T) {
            for (var q = T.words, D = T.sigBytes, B = [], G = 0; G < D; G++) {
              var V = q[G >>> 2] >>> 24 - G % 4 * 8 & 255;
              B.push(String.fromCharCode(V));
            }
            return B.join("");
          },
          parse: function parse(T) {
            for (var q = T.length, D = [], B = 0; B < q; B++) D[B >>> 2] |= (T.charCodeAt(B) & 255) << 24 - B % 4 * 8;
            return new h.init(D, q);
          }
        },
        E = g.Utf8 = {
          stringify: function stringify(T) {
            try {
              return decodeURIComponent(escape(b.stringify(T)));
            } catch (_unused59) {
              throw new Error("Malformed UTF-8 data");
            }
          },
          parse: function parse(T) {
            return b.parse(unescape(encodeURIComponent(T)));
          }
        },
        A = d.BufferedBlockAlgorithm = m.extend({
          reset: function reset() {
            this._data = new h.init(), this._nDataBytes = 0;
          },
          _append: function _append(T) {
            typeof T == "string" && (T = E.parse(T)), this._data.concat(T), this._nDataBytes += T.sigBytes;
          },
          _process: function _process(T) {
            var q,
              D = this._data,
              B = D.words,
              G = D.sigBytes,
              V = this.blockSize,
              te = V * 4,
              ie = G / te;
            T ? ie = t.ceil(ie) : ie = t.max((ie | 0) - this._minBufferSize, 0);
            var Q = ie * V,
              Z = t.min(Q * 4, G);
            if (Q) {
              for (var X = 0; X < Q; X += V) this._doProcessBlock(B, X);
              q = B.splice(0, Q), D.sigBytes -= Z;
            }
            return new h.init(q, Z);
          },
          clone: function clone() {
            var T = m.clone.call(this);
            return T._data = this._data.clone(), T;
          },
          _minBufferSize: 0
        }),
        C = d.Hasher = A.extend({
          cfg: m.extend(),
          init: function init(T) {
            this.cfg = this.cfg.extend(T), this.reset();
          },
          reset: function reset() {
            A.reset.call(this), this._doReset();
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
            return function (q, D) {
              return new T.init(D).finalize(q);
            };
          },
          _createHmacHelper: function _createHmacHelper(T) {
            return function (q, D) {
              return new O.HMAC.init(T, D).finalize(q);
            };
          }
        }),
        O = c.algo = {};
      return c;
    }(Math);
    return e;
  });
});
var eU = v(function (Wd, $P) {
  (function (e, t) {
    _typeof(Wd) == "object" ? $P.exports = Wd = t(WP()) : typeof define == "function" && define.amd ? define(["./core"], t) : t(e.CryptoJS);
  })(Wd, function (e) {
    return function (t) {
      var a = e,
        i = a.lib,
        u = i.WordArray,
        l = i.Hasher,
        c = a.algo,
        d = [];
      (function () {
        for (var E = 0; E < 64; E++) d[E] = t.abs(t.sin(E + 1)) * 4294967296 | 0;
      })();
      var m = c.MD5 = l.extend({
        _doReset: function _doReset() {
          this._hash = new u.init([1732584193, 4023233417, 2562383102, 271733878]);
        },
        _doProcessBlock: function _doProcessBlock(E, A) {
          for (var C = 0; C < 16; C++) {
            var O = A + C,
              T = E[O];
            E[O] = (T << 8 | T >>> 24) & 16711935 | (T << 24 | T >>> 8) & 4278255360;
          }
          var q = this._hash.words,
            D = E[A + 0],
            B = E[A + 1],
            G = E[A + 2],
            V = E[A + 3],
            te = E[A + 4],
            ie = E[A + 5],
            Q = E[A + 6],
            Z = E[A + 7],
            X = E[A + 8],
            le = E[A + 9],
            ve = E[A + 10],
            Se = E[A + 11],
            be = E[A + 12],
            Ze = E[A + 13],
            ht = E[A + 14],
            Ie = E[A + 15],
            U = q[0],
            j = q[1],
            z = q[2],
            L = q[3];
          U = h(U, j, z, L, D, 7, d[0]), L = h(L, U, j, z, B, 12, d[1]), z = h(z, L, U, j, G, 17, d[2]), j = h(j, z, L, U, V, 22, d[3]), U = h(U, j, z, L, te, 7, d[4]), L = h(L, U, j, z, ie, 12, d[5]), z = h(z, L, U, j, Q, 17, d[6]), j = h(j, z, L, U, Z, 22, d[7]), U = h(U, j, z, L, X, 7, d[8]), L = h(L, U, j, z, le, 12, d[9]), z = h(z, L, U, j, ve, 17, d[10]), j = h(j, z, L, U, Se, 22, d[11]), U = h(U, j, z, L, be, 7, d[12]), L = h(L, U, j, z, Ze, 12, d[13]), z = h(z, L, U, j, ht, 17, d[14]), j = h(j, z, L, U, Ie, 22, d[15]), U = g(U, j, z, L, B, 5, d[16]), L = g(L, U, j, z, Q, 9, d[17]), z = g(z, L, U, j, Se, 14, d[18]), j = g(j, z, L, U, D, 20, d[19]), U = g(U, j, z, L, ie, 5, d[20]), L = g(L, U, j, z, ve, 9, d[21]), z = g(z, L, U, j, Ie, 14, d[22]), j = g(j, z, L, U, te, 20, d[23]), U = g(U, j, z, L, le, 5, d[24]), L = g(L, U, j, z, ht, 9, d[25]), z = g(z, L, U, j, V, 14, d[26]), j = g(j, z, L, U, X, 20, d[27]), U = g(U, j, z, L, Ze, 5, d[28]), L = g(L, U, j, z, G, 9, d[29]), z = g(z, L, U, j, Z, 14, d[30]), j = g(j, z, L, U, be, 20, d[31]), U = x(U, j, z, L, ie, 4, d[32]), L = x(L, U, j, z, X, 11, d[33]), z = x(z, L, U, j, Se, 16, d[34]), j = x(j, z, L, U, ht, 23, d[35]), U = x(U, j, z, L, B, 4, d[36]), L = x(L, U, j, z, te, 11, d[37]), z = x(z, L, U, j, Z, 16, d[38]), j = x(j, z, L, U, ve, 23, d[39]), U = x(U, j, z, L, Ze, 4, d[40]), L = x(L, U, j, z, D, 11, d[41]), z = x(z, L, U, j, V, 16, d[42]), j = x(j, z, L, U, Q, 23, d[43]), U = x(U, j, z, L, le, 4, d[44]), L = x(L, U, j, z, be, 11, d[45]), z = x(z, L, U, j, Ie, 16, d[46]), j = x(j, z, L, U, G, 23, d[47]), U = b(U, j, z, L, D, 6, d[48]), L = b(L, U, j, z, Z, 10, d[49]), z = b(z, L, U, j, ht, 15, d[50]), j = b(j, z, L, U, ie, 21, d[51]), U = b(U, j, z, L, be, 6, d[52]), L = b(L, U, j, z, V, 10, d[53]), z = b(z, L, U, j, ve, 15, d[54]), j = b(j, z, L, U, B, 21, d[55]), U = b(U, j, z, L, X, 6, d[56]), L = b(L, U, j, z, Ie, 10, d[57]), z = b(z, L, U, j, Q, 15, d[58]), j = b(j, z, L, U, Ze, 21, d[59]), U = b(U, j, z, L, te, 6, d[60]), L = b(L, U, j, z, Se, 10, d[61]), z = b(z, L, U, j, G, 15, d[62]), j = b(j, z, L, U, le, 21, d[63]), q[0] = q[0] + U | 0, q[1] = q[1] + j | 0, q[2] = q[2] + z | 0, q[3] = q[3] + L | 0;
        },
        _doFinalize: function _doFinalize() {
          var E = this._data,
            A = E.words,
            C = this._nDataBytes * 8,
            O = E.sigBytes * 8;
          A[O >>> 5] |= 128 << 24 - O % 32;
          var T = t.floor(C / 4294967296),
            q = C;
          A[(O + 64 >>> 9 << 4) + 15] = (T << 8 | T >>> 24) & 16711935 | (T << 24 | T >>> 8) & 4278255360, A[(O + 64 >>> 9 << 4) + 14] = (q << 8 | q >>> 24) & 16711935 | (q << 24 | q >>> 8) & 4278255360, E.sigBytes = (A.length + 1) * 4, this._process();
          for (var D = this._hash, B = D.words, G = 0; G < 4; G++) {
            var V = B[G];
            B[G] = (V << 8 | V >>> 24) & 16711935 | (V << 24 | V >>> 8) & 4278255360;
          }
          return D;
        },
        clone: function clone() {
          var E = l.clone.call(this);
          return E._hash = this._hash.clone(), E;
        }
      });
      function h(E, A, C, O, T, q, D) {
        var B = E + (A & C | ~A & O) + T + D;
        return (B << q | B >>> 32 - q) + A;
      }
      function g(E, A, C, O, T, q, D) {
        var B = E + (A & O | C & ~O) + T + D;
        return (B << q | B >>> 32 - q) + A;
      }
      function x(E, A, C, O, T, q, D) {
        var B = E + (A ^ C ^ O) + T + D;
        return (B << q | B >>> 32 - q) + A;
      }
      function b(E, A, C, O, T, q, D) {
        var B = E + (C ^ (A | ~O)) + T + D;
        return (B << q | B >>> 32 - q) + A;
      }
      a.MD5 = l._createHelper(m), a.HmacMD5 = l._createHmacHelper(m);
    }(Math), e.MD5;
  });
});
var MU = v(function (je) {
  "use strict";

  function Mb(e, t) {
    var a = e.length;
    e.push(t);
    e: for (; 0 < a;) {
      var i = a - 1 >>> 1,
        u = e[i];
      if (0 < fm(u, t)) e[i] = t, e[a] = u, a = i;else break e;
    }
  }
  function Sn(e) {
    return e.length === 0 ? null : e[0];
  }
  function dm(e) {
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
        if (0 > fm(d, a)) m < u && 0 > fm(h, d) ? (e[i] = h, e[m] = a, i = m) : (e[i] = d, e[c] = a, i = c);else if (m < u && 0 > fm(h, a)) e[i] = h, e[m] = a, i = m;else break e;
      }
    }
    return t;
  }
  function fm(e, t) {
    var a = e.sortIndex - t.sortIndex;
    return a !== 0 ? a : e.id - t.id;
  }
  je.unstable_now = void 0;
  (typeof performance === "undefined" ? "undefined" : _typeof(performance)) == "object" && typeof performance.now == "function" ? (TU = performance, je.unstable_now = function () {
    return TU.now();
  }) : (Rb = Date, qU = Rb.now(), je.unstable_now = function () {
    return Rb.now() - qU;
  });
  var TU,
    Rb,
    qU,
    sa = [],
    ti = [],
    jme = 1,
    Mr = null,
    Dt = 3,
    Db = !1,
    Zl = !1,
    kl = !1,
    Bb = !1,
    OU = typeof setTimeout == "function" ? setTimeout : null,
    CU = typeof clearTimeout == "function" ? clearTimeout : null,
    _U = (typeof setImmediate === "undefined" ? "undefined" : _typeof(setImmediate)) < "u" ? setImmediate : null;
  function pm(e) {
    for (var t = Sn(ti); t !== null;) {
      if (t.callback === null) dm(ti);else if (t.startTime <= e) dm(ti), t.sortIndex = t.expirationTime, Mb(sa, t);else break;
      t = Sn(ti);
    }
  }
  function Ib(e) {
    if (kl = !1, pm(e), !Zl) if (Sn(sa) !== null) Zl = !0, zu || (zu = !0, Uu());else {
      var t = Sn(ti);
      t !== null && Pb(Ib, t.startTime - e);
    }
  }
  var zu = !1,
    Jl = -1,
    RU = 5,
    NU = -1;
  function wU() {
    return Bb ? !0 : !(je.unstable_now() - NU < RU);
  }
  function Nb() {
    if (Bb = !1, zu) {
      var e = je.unstable_now();
      NU = e;
      var t = !0;
      try {
        e: {
          Zl = !1, kl && (kl = !1, CU(Jl), Jl = -1), Db = !0;
          var a = Dt;
          try {
            t: {
              for (pm(e), Mr = Sn(sa); Mr !== null && !(Mr.expirationTime > e && wU());) {
                var i = Mr.callback;
                if (typeof i == "function") {
                  Mr.callback = null, Dt = Mr.priorityLevel;
                  var u = i(Mr.expirationTime <= e);
                  if (e = je.unstable_now(), typeof u == "function") {
                    Mr.callback = u, pm(e), t = !0;
                    break t;
                  }
                  Mr === Sn(sa) && dm(sa), pm(e);
                } else dm(sa);
                Mr = Sn(sa);
              }
              if (Mr !== null) t = !0;else {
                var l = Sn(ti);
                l !== null && Pb(Ib, l.startTime - e), t = !1;
              }
            }
            break e;
          } finally {
            Mr = null, Dt = a, Db = !1;
          }
          t = void 0;
        }
      } finally {
        t ? Uu() : zu = !1;
      }
    }
  }
  var Uu;
  typeof _U == "function" ? Uu = function Uu() {
    _U(Nb);
  } : (typeof MessageChannel === "undefined" ? "undefined" : _typeof(MessageChannel)) < "u" ? (wb = new MessageChannel(), AU = wb.port2, wb.port1.onmessage = Nb, Uu = function Uu() {
    AU.postMessage(null);
  }) : Uu = function Uu() {
    OU(Nb, 0);
  };
  var wb, AU;
  function Pb(e, t) {
    Jl = OU(function () {
      e(je.unstable_now());
    }, t);
  }
  je.unstable_IdlePriority = 5;
  je.unstable_ImmediatePriority = 1;
  je.unstable_LowPriority = 4;
  je.unstable_NormalPriority = 3;
  je.unstable_Profiling = null;
  je.unstable_UserBlockingPriority = 2;
  je.unstable_cancelCallback = function (e) {
    e.callback = null;
  };
  je.unstable_forceFrameRate = function (e) {
    0 > e || 125 < e ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : RU = 0 < e ? Math.floor(1e3 / e) : 5;
  };
  je.unstable_getCurrentPriorityLevel = function () {
    return Dt;
  };
  je.unstable_next = function (e) {
    switch (Dt) {
      case 1:
      case 2:
      case 3:
        var t = 3;
        break;
      default:
        t = Dt;
    }
    var a = Dt;
    Dt = t;
    try {
      return e();
    } finally {
      Dt = a;
    }
  };
  je.unstable_requestPaint = function () {
    Bb = !0;
  };
  je.unstable_runWithPriority = function (e, t) {
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
    var a = Dt;
    Dt = e;
    try {
      return t();
    } finally {
      Dt = a;
    }
  };
  je.unstable_scheduleCallback = function (e, t, a) {
    var i = je.unstable_now();
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
      id: jme++,
      callback: t,
      priorityLevel: e,
      startTime: a,
      expirationTime: u,
      sortIndex: -1
    }, a > i ? (e.sortIndex = a, Mb(ti, e), Sn(sa) === null && e === Sn(ti) && (kl ? (CU(Jl), Jl = -1) : kl = !0, Pb(Ib, a - i))) : (e.sortIndex = u, Mb(sa, e), Zl || Db || (Zl = !0, zu || (zu = !0, Uu()))), e;
  };
  je.unstable_shouldYield = wU;
  je.unstable_wrapCallback = function (e) {
    var t = Dt;
    return function () {
      var a = Dt;
      Dt = t;
      try {
        return e.apply(this, arguments);
      } finally {
        Dt = a;
      }
    };
  };
});
var BU = v(function (Vwe, DU) {
  "use strict";

  DU.exports = MU();
});
var IU = v(function (Ywe, Wl) {
  "use strict";

  Wl.exports = function (e) {
    function t(r, n, o, s) {
      return new Tz(r, n, o, s);
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
          for (var y = !1, S = f.child; S;) {
            if (S === o) {
              y = !0, o = f, s = p;
              break;
            }
            if (S === s) {
              y = !0, s = f, o = p;
              break;
            }
            S = S.sibling;
          }
          if (!y) {
            for (S = p.child; S;) {
              if (S === o) {
                y = !0, o = p, s = f;
                break;
              }
              if (S === s) {
                y = !0, s = p, o = f;
                break;
              }
              S = S.sibling;
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
      return r === null || _typeof(r) != "object" ? null : (r = WS && r[WS] || r["@@iterator"], typeof r == "function" ? r : null);
    }
    function g(r) {
      if (r == null) return null;
      if (typeof r == "function") return r.$$typeof === Cz ? null : r.displayName || r.name || null;
      if (typeof r == "string") return r;
      switch (r) {
        case lo:
          return "Fragment";
        case yv:
          return "Profiler";
        case kS:
          return "StrictMode";
        case bv:
          return "Suspense";
        case Ev:
          return "SuspenseList";
        case Tv:
          return "Activity";
      }
      if (_typeof(r) == "object") switch (r.$$typeof) {
        case so:
          return "Portal";
        case va:
          return r.displayName || "Context";
        case JS:
          return (r._context.displayName || "Context") + ".Consumer";
        case xv:
          var n = r.render;
          return r = r.displayName, r || (r = n.displayName || n.name || "", r = r !== "" ? "ForwardRef(" + r + ")" : "ForwardRef"), r;
        case Sv:
          return n = r.displayName || null, n !== null ? n : g(r.type) || "Memo";
        case ha:
          n = r._payload, r = r._init;
          try {
            return g(r(n));
          } catch (_unused60) {}
      }
      return null;
    }
    function x(r) {
      return {
        current: r
      };
    }
    function b(r) {
      0 > po || (r.current = Rv[po], Rv[po] = null, po--);
    }
    function E(r, n) {
      po++, Rv[po] = r.current, r.current = n;
    }
    function A(r) {
      return r >>>= 0, r === 0 ? 32 : 31 - (rj(r) / nj | 0) | 0;
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
    function O(r, n, o) {
      var s = r.pendingLanes;
      if (s === 0) return 0;
      var f = 0,
        p = r.suspendedLanes,
        y = r.pingedLanes;
      r = r.warmLanes;
      var S = s & 134217727;
      return S !== 0 ? (s = S & ~p, s !== 0 ? f = C(s) : (y &= S, y !== 0 ? f = C(y) : o || (o = S & ~r, o !== 0 && (f = C(o))))) : (S = s & ~p, S !== 0 ? f = C(S) : y !== 0 ? f = C(y) : o || (o = s & ~r, o !== 0 && (f = C(o)))), f === 0 ? 0 : n !== 0 && n !== f && (n & p) === 0 && (p = f & -f, o = n & -n, p >= o || p === 32 && (o & 4194048) !== 0) ? n : f;
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
    function D() {
      var r = Ic;
      return Ic <<= 1, (Ic & 62914560) === 0 && (Ic = 4194304), r;
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
      var S = r.entanglements,
        w = r.expirationTimes,
        I = r.hiddenUpdates;
      for (o = y & ~o; 0 < o;) {
        var K = 31 - ur(o),
          H = 1 << K;
        S[K] = 0, w[K] = -1;
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
      var s = 31 - ur(n);
      r.entangledLanes |= n, r.entanglements[s] = r.entanglements[s] | 1073741824 | o & 261930;
    }
    function ie(r, n) {
      var o = r.entangledLanes |= n;
      for (r = r.entanglements; o;) {
        var s = 31 - ur(o),
          f = 1 << s;
        f & n | r[s] & n && (r[s] |= n), o &= ~f;
      }
    }
    function Q(r, n) {
      var o = n & -n;
      return o = (o & 42) !== 0 ? 1 : Z(o), (o & (r.suspendedLanes | n)) !== 0 ? 0 : o;
    }
    function Z(r) {
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
    function le(r) {
      if (typeof sj == "function" && lj(r), sr && typeof sr.setStrictMode == "function") try {
        sr.setStrictMode(us, r);
      } catch (_unused61) {}
    }
    function ve(r, n) {
      return r === n && (r !== 0 || 1 / r === 1 / n) || r !== r && n !== n;
    }
    function Se(r) {
      if (Mv === void 0) try {
        throw Error();
      } catch (o) {
        var n = o.stack.trim().match(/\n( *(at )?)/);
        Mv = n && n[1] || "", q1 = -1 < o.stack.indexOf("\n    at") ? " (<anonymous>)" : -1 < o.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
      return "\n" + Mv + r + q1;
    }
    function be(r, n) {
      if (!r || Dv) return "";
      Dv = !0;
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
          S = p[1];
        if (y && S) {
          var w = y.split("\n"),
            I = S.split("\n");
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
        Dv = !1, Error.prepareStackTrace = o;
      }
      return (o = r ? r.displayName || r.name : "") ? Se(o) : "";
    }
    function Ze(r, n) {
      switch (r.tag) {
        case 26:
        case 27:
        case 5:
          return Se(r.type);
        case 16:
          return Se("Lazy");
        case 13:
          return r.child !== n && n !== null ? Se("Suspense Fallback") : Se("Suspense");
        case 19:
          return Se("SuspenseList");
        case 0:
        case 15:
          return be(r.type, !1);
        case 11:
          return be(r.type.render, !1);
        case 1:
          return be(r.type, !0);
        case 31:
          return Se("Activity");
        default:
          return "";
      }
    }
    function ht(r) {
      try {
        var n = "",
          o = null;
        do n += Ze(r, o), o = r, r = r.return; while (r);
        return n;
      } catch (s) {
        return "\nError generating stack: " + s.message + "\n" + s.stack;
      }
    }
    function Ie(r, n) {
      if (_typeof(r) == "object" && r !== null) {
        var o = _1.get(r);
        return o !== void 0 ? o : (n = {
          value: r,
          source: n,
          stack: ht(n)
        }, _1.set(r, n), n);
      }
      return {
        value: r,
        source: n,
        stack: ht(n)
      };
    }
    function U(r, n) {
      vo[ho++] = ss, vo[ho++] = Uc, Uc = r, ss = n;
    }
    function j(r, n, o) {
      xr[br++] = en, xr[br++] = tn, xr[br++] = ga, ga = r;
      var s = en;
      r = tn;
      var f = 32 - ur(s) - 1;
      s &= ~(1 << f), o += 1;
      var p = 32 - ur(n) + f;
      if (30 < p) {
        var y = f - f % 5;
        p = (s & (1 << y) - 1).toString(32), s >>= y, f -= y, en = 1 << 32 - ur(n) + f | o << f | s, tn = p + r;
      } else en = 1 << p | o << f | s, tn = r;
    }
    function z(r) {
      r.return !== null && (U(r, 1), j(r, 1, 0));
    }
    function L(r) {
      for (; r === Uc;) Uc = vo[--ho], vo[ho] = null, ss = vo[--ho], vo[ho] = null;
      for (; r === ga;) ga = xr[--br], xr[br] = null, tn = xr[--br], xr[br] = null, en = xr[--br], xr[br] = null;
    }
    function Zr(r, n) {
      xr[br++] = en, xr[br++] = tn, xr[br++] = ga, en = n.id, tn = n.overflow, ga = r;
    }
    function We(r, n) {
      E(ya, n), E(ls, r), E(xt, null), r = wz(n), b(xt), E(xt, r);
    }
    function nr() {
      b(xt), b(ls), b(ya);
    }
    function Tn(r) {
      r.memoizedState !== null && E(zc, r);
      var n = xt.current,
        o = Mz(n, r.type);
      n !== o && (E(ls, r), E(xt, o));
    }
    function kr(r) {
      ls.current === r && (b(xt), b(ls)), zc.current === r && (b(zc), wn ? pi._currentValue = co : pi._currentValue2 = co);
    }
    function Ct(r) {
      var n = Error(i(418, 1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML", ""));
      throw ni(Ie(n, r)), Bv;
    }
    function tc(r, n) {
      if (!wt) throw Error(i(175));
      ML(r.stateNode, r.type, r.memoizedProps, n, r) || Ct(r, !0);
    }
    function Hu(r) {
      for (bt = r.return; bt;) switch (bt.tag) {
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
          bt = bt.return;
      }
    }
    function qn(r) {
      if (!wt || r !== bt) return !1;
      if (!me) return Hu(r), me = !0, !1;
      var n = r.tag;
      if (at ? n !== 3 && n !== 27 && (n !== 5 || f1(r.type) && !Mc(r.type, r.memoizedProps)) && He && Ct(r) : n !== 3 && (n !== 5 || f1(r.type) && !Mc(r.type, r.memoizedProps)) && He && Ct(r), Hu(r), n === 13) {
        if (!wt) throw Error(i(316));
        if (r = r.memoizedState, r = r !== null ? r.dehydrated : null, !r) throw Error(i(317));
        He = UL(r);
      } else if (n === 31) {
        if (r = r.memoizedState, r = r !== null ? r.dehydrated : null, !r) throw Error(i(317));
        He = PL(r);
      } else He = at && n === 27 ? SL(r.type, He) : bt ? c1(r.stateNode) : null;
      return !0;
    }
    function _n() {
      wt && (He = bt = null, me = !1);
    }
    function Fu() {
      var r = xa;
      return r !== null && (Vt === null ? Vt = r : Vt.push.apply(Vt, r), xa = null), r;
    }
    function ni(r) {
      xa === null ? xa = [r] : xa.push(r);
    }
    function yr(r, n, o) {
      wn ? (E(Lc, n._currentValue), n._currentValue = o) : (E(Lc, n._currentValue2), n._currentValue2 = o);
    }
    function Dr(r) {
      var n = Lc.current;
      wn ? r._currentValue = n : r._currentValue2 = n, b(Lc);
    }
    function ai(r, n, o) {
      for (; r !== null;) {
        var s = r.alternate;
        if ((r.childLanes & n) !== n ? (r.childLanes |= n, s !== null && (s.childLanes |= n)) : s !== null && (s.childLanes & n) !== n && (s.childLanes |= n), r === o) break;
        r = r.return;
      }
    }
    function Gu(r, n, o, s) {
      var f = r.child;
      for (f !== null && (f.return = r); f !== null;) {
        var p = f.dependencies;
        if (p !== null) {
          var y = f.child;
          p = p.firstContext;
          e: for (; p !== null;) {
            var S = p;
            p = f;
            for (var w = 0; w < n.length; w++) if (S.context === n[w]) {
              p.lanes |= o, S = p.alternate, S !== null && (S.lanes |= o), ai(p.return, o, r), s || (y = null);
              break e;
            }
            p = S.next;
          }
        } else if (f.tag === 18) {
          if (y = f.return, y === null) throw Error(i(341));
          y.lanes |= o, p = y.alternate, p !== null && (p.lanes |= o), ai(y, o, r), y = null;
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
    function qe(r, n, o, s) {
      r = null;
      for (var f = n, p = !1; f !== null;) {
        if (!p) {
          if ((f.flags & 524288) !== 0) p = !0;else if ((f.flags & 262144) !== 0) break;
        }
        if (f.tag === 10) {
          var y = f.alternate;
          if (y === null) throw Error(i(387));
          if (y = y.memoizedProps, y !== null) {
            var S = f.type;
            lr(f.pendingProps.value, y.value) || (r !== null ? r.push(S) : r = [S]);
          }
        } else if (f === zc.current) {
          if (y = f.alternate, y === null) throw Error(i(387));
          y.memoizedState.memoizedState !== f.memoizedState.memoizedState && (r !== null ? r.push(pi) : r = [pi]);
        }
        f = f.return;
      }
      r !== null && Gu(n, r, o, s), n.flags |= 262144;
    }
    function Ne(r) {
      for (r = r.firstContext; r !== null;) {
        var n = r.context;
        if (!lr(wn ? n._currentValue : n._currentValue2, r.memoizedValue)) return !0;
        r = r.next;
      }
      return !1;
    }
    function Ve(r) {
      di = r, Dn = null, r = r.dependencies, r !== null && (r.firstContext = null);
    }
    function gt(r) {
      return zb(di, r);
    }
    function rc(r, n) {
      return di === null && Ve(r), zb(r, n);
    }
    function zb(r, n) {
      var o = wn ? n._currentValue : n._currentValue2;
      if (n = {
        context: n,
        memoizedValue: o,
        next: null
      }, Dn === null) {
        if (r === null) throw Error(i(308));
        Dn = n, r.dependencies = {
          lanes: 0,
          firstContext: n
        }, r.flags |= 524288;
      } else Dn = Dn.next = n;
      return o;
    }
    function gm() {
      return {
        controller: new fj(),
        data: new Map(),
        refCount: 0
      };
    }
    function Ku(r) {
      r.refCount--, r.refCount === 0 && pj(dj, function () {
        r.controller.abort();
      });
    }
    function nc() {}
    function Jr(r) {
      r !== go && r.next === null && (go === null ? jc = go = r : go = go.next = r), Hc = !0, Iv || (Iv = !0, $U());
    }
    function no(r, n) {
      if (!Pv && Hc) {
        Pv = !0;
        do for (var o = !1, s = jc; s !== null;) {
          if (!n) if (r !== 0) {
            var f = s.pendingLanes;
            if (f === 0) var p = 0;else {
              var y = s.suspendedLanes,
                S = s.pingedLanes;
              p = (1 << 31 - ur(42 | r) + 1) - 1, p &= f & ~(y & ~S), p = p & 201326741 ? p & 201326741 | 1 : p ? p | 2 : 0;
            }
            p !== 0 && (o = !0, Gb(s, p));
          } else p = de, p = O(s, s === Ce ? p : 0, s.cancelPendingCommit !== null || s.timeoutHandle !== fi), (p & 3) === 0 || T(s, p) || (o = !0, Gb(s, p));
          s = s.next;
        } while (o);
        Pv = !1;
      }
    }
    function Lb() {
      jb();
    }
    function jb() {
      Hc = Iv = !1;
      var r = 0;
      mi !== 0 && Hz() && (r = mi);
      for (var n = Gt(), o = null, s = jc; s !== null;) {
        var f = s.next,
          p = Hb(s, n);
        p === 0 ? (s.next = null, o === null ? jc = f : o.next = f, f === null && (go = o)) : (o = s, (r !== 0 || (p & 3) !== 0) && (Hc = !0)), s = f;
      }
      it !== 0 && it !== 5 || no(r, !1), mi !== 0 && (mi = 0);
    }
    function Hb(r, n) {
      for (var o = r.suspendedLanes, s = r.pingedLanes, f = r.expirationTimes, p = r.pendingLanes & -62914561; 0 < p;) {
        var y = 31 - ur(p),
          S = 1 << y,
          w = f[y];
        w === -1 ? ((S & o) === 0 || (S & s) !== 0) && (f[y] = q(S, n)) : w <= n && (r.expiredLanes |= S), p &= ~S;
      }
      if (n = Ce, o = de, o = O(r, r === n ? o : 0, r.cancelPendingCommit !== null || r.timeoutHandle !== fi), s = r.callbackNode, o === 0 || r === n && (Te === 2 || Te === 9) || r.cancelPendingCommit !== null) return s !== null && s !== null && Nv(s), r.callbackNode = null, r.callbackPriority = 0;
      if ((o & 3) === 0 || T(r, o)) {
        if (n = o & -o, n === r.callbackPriority) return n;
        switch (s !== null && Nv(s), X(o)) {
          case 2:
          case 8:
            o = oj;
            break;
          case 32:
            o = wv;
            break;
          case 268435456:
            o = uj;
            break;
          default:
            o = wv;
        }
        return s = Fb.bind(null, r), o = Pc(o, s), r.callbackPriority = n, r.callbackNode = o, n;
      }
      return s !== null && s !== null && Nv(s), r.callbackPriority = 2, r.callbackNode = null, 2;
    }
    function Fb(r, n) {
      if (it !== 0 && it !== 5) return r.callbackNode = null, r.callbackPriority = 0, null;
      var o = r.callbackNode;
      if (ns() && r.callbackNode !== o) return null;
      var s = de;
      return s = O(r, r === Ce ? s : 0, r.cancelPendingCommit !== null || r.timeoutHandle !== fi), s === 0 ? null : (_S(r, s, n), Hb(r, Gt()), r.callbackNode != null && r.callbackNode === o ? Fb.bind(null, r) : null);
    }
    function Gb(r, n) {
      if (ns()) return null;
      _S(r, n, !0);
    }
    function $U() {
      Qz ? Zz(function () {
        (fe & 6) !== 0 ? Pc(S1, Lb) : jb();
      }) : Pc(S1, Lb);
    }
    function ym() {
      if (mi === 0) {
        var r = yo;
        r === 0 && (r = Dc, Dc <<= 1, (Dc & 261888) === 0 && (Dc = 256)), mi = r;
      }
      return mi;
    }
    function ez(r, n) {
      if (cs === null) {
        var o = cs = [];
        Uv = 0, yo = ym(), xo = {
          status: "pending",
          value: void 0,
          then: function then(s) {
            o.push(s);
          }
        };
      }
      return Uv++, n.then(Kb, Kb), n;
    }
    function Kb() {
      if (--Uv === 0 && cs !== null) {
        xo !== null && (xo.status = "fulfilled");
        var r = cs;
        cs = null, yo = 0, xo = null;
        for (var n = 0; n < r.length; n++) (0, r[n])();
      }
    }
    function tz(r, n) {
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
    function xm() {
      var r = vi.current;
      return r !== null ? r : Ce.pooledCache;
    }
    function ac(r, n) {
      n === null ? E(vi, vi.current) : E(vi, n.pool);
    }
    function Vb() {
      var r = xm();
      return r === null ? null : {
        parent: wn ? Fe._currentValue : Fe._currentValue2,
        pool: r
      };
    }
    function ic(r, n) {
      if (lr(r, n)) return !0;
      if (_typeof(r) != "object" || r === null || _typeof(n) != "object" || n === null) return !1;
      var o = Object.keys(r),
        s = Object.keys(n);
      if (o.length !== s.length) return !1;
      for (s = 0; s < o.length; s++) {
        var f = o[s];
        if (!cj.call(n, f) || !lr(r[f], n[f])) return !1;
      }
      return !0;
    }
    function Yb(r) {
      return r = r.status, r === "fulfilled" || r === "rejected";
    }
    function Xb(r, n, o) {
      switch (o = r[o], o === void 0 ? r.push(n) : o !== n && (n.then(nc, nc), n = o), n.status) {
        case "fulfilled":
          return n.value;
        case "rejected":
          throw r = n.reason, Zb(r), r;
        default:
          if (typeof n.status == "string") n.then(nc, nc);else {
            if (r = Ce, r !== null && 100 < r.shellSuspendCounter) throw Error(i(482));
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
              throw r = n.reason, Zb(r), r;
          }
          throw hi = n, bo;
      }
    }
    function ii(r) {
      try {
        var n = r._init;
        return n(r._payload);
      } catch (o) {
        throw o !== null && _typeof(o) == "object" && typeof o.then == "function" ? (hi = o, bo) : o;
      }
    }
    function Qb() {
      if (hi === null) throw Error(i(459));
      var r = hi;
      return hi = null, r;
    }
    function Zb(r) {
      if (r === bo || r === Fc) throw Error(i(483));
    }
    function oc(r) {
      var n = fs;
      return fs += 1, Eo === null && (Eo = []), Xb(Eo, r, n);
    }
    function Vu(r, n) {
      n = n.props.ref, r.ref = n !== void 0 ? n : null;
    }
    function uc(r, n) {
      throw n.$$typeof === Az ? Error(i(525)) : (r = Object.prototype.toString.call(n), Error(i(31, r === "[object Object]" ? "object with keys {" + Object.keys(n).join(", ") + "}" : r)));
    }
    function kb(r) {
      function n(R, _) {
        if (r) {
          var N = R.deletions;
          N === null ? (R.deletions = [_], R.flags |= 16) : N.push(_);
        }
      }
      function o(R, _) {
        if (!r) return null;
        for (; _ !== null;) n(R, _), _ = _.sibling;
        return null;
      }
      function s(R) {
        for (var _ = new Map(); R !== null;) R.key !== null ? _.set(R.key, R) : _.set(R.index, R), R = R.sibling;
        return _;
      }
      function f(R, _) {
        return R = Nn(R, _), R.index = 0, R.sibling = null, R;
      }
      function p(R, _, N) {
        return R.index = N, r ? (N = R.alternate, N !== null ? (N = N.index, N < _ ? (R.flags |= 67108866, _) : N) : (R.flags |= 67108866, _)) : (R.flags |= 1048576, _);
      }
      function y(R) {
        return r && R.alternate === null && (R.flags |= 67108866), R;
      }
      function S(R, _, N, F) {
        return _ === null || _.tag !== 6 ? (_ = mv(N, R.mode, F), _.return = R, _) : (_ = f(_, N), _.return = R, _);
      }
      function w(R, _, N, F) {
        var ee = N.type;
        return ee === lo ? K(R, _, N.props.children, F, N.key) : _ !== null && (_.elementType === ee || _typeof(ee) == "object" && ee !== null && ee.$$typeof === ha && ii(ee) === _.type) ? (_ = f(_, N.props), Vu(_, N), _.return = R, _) : (_ = Rc(N.type, N.key, N.props, null, R.mode, F), Vu(_, N), _.return = R, _);
      }
      function I(R, _, N, F) {
        return _ === null || _.tag !== 4 || _.stateNode.containerInfo !== N.containerInfo || _.stateNode.implementation !== N.implementation ? (_ = vv(N, R.mode, F), _.return = R, _) : (_ = f(_, N.children || []), _.return = R, _);
      }
      function K(R, _, N, F, ee) {
        return _ === null || _.tag !== 7 ? (_ = ci(N, R.mode, F, ee), _.return = R, _) : (_ = f(_, N), _.return = R, _);
      }
      function H(R, _, N) {
        if (typeof _ == "string" && _ !== "" || typeof _ == "number" || typeof _ == "bigint") return _ = mv("" + _, R.mode, N), _.return = R, _;
        if (_typeof(_) == "object" && _ !== null) {
          switch (_.$$typeof) {
            case Nc:
              return N = Rc(_.type, _.key, _.props, null, R.mode, N), Vu(N, _), N.return = R, N;
            case so:
              return _ = vv(_, R.mode, N), _.return = R, _;
            case ha:
              return _ = ii(_), H(R, _, N);
          }
          if (wc(_) || h(_)) return _ = ci(_, R.mode, N, null), _.return = R, _;
          if (typeof _.then == "function") return H(R, oc(_), N);
          if (_.$$typeof === va) return H(R, rc(R, _), N);
          uc(R, _);
        }
        return null;
      }
      function Y(R, _, N, F) {
        var ee = _ !== null ? _.key : null;
        if (typeof N == "string" && N !== "" || typeof N == "number" || typeof N == "bigint") return ee !== null ? null : S(R, _, "" + N, F);
        if (_typeof(N) == "object" && N !== null) {
          switch (N.$$typeof) {
            case Nc:
              return N.key === ee ? w(R, _, N, F) : null;
            case so:
              return N.key === ee ? I(R, _, N, F) : null;
            case ha:
              return N = ii(N), Y(R, _, N, F);
          }
          if (wc(N) || h(N)) return ee !== null ? null : K(R, _, N, F, null);
          if (typeof N.then == "function") return Y(R, _, oc(N), F);
          if (N.$$typeof === va) return Y(R, _, rc(R, N), F);
          uc(R, N);
        }
        return null;
      }
      function oe(R, _, N, F, ee) {
        if (typeof F == "string" && F !== "" || typeof F == "number" || typeof F == "bigint") return R = R.get(N) || null, S(_, R, "" + F, ee);
        if (_typeof(F) == "object" && F !== null) {
          switch (F.$$typeof) {
            case Nc:
              return R = R.get(F.key === null ? N : F.key) || null, w(_, R, F, ee);
            case so:
              return R = R.get(F.key === null ? N : F.key) || null, I(_, R, F, ee);
            case ha:
              return F = ii(F), oe(R, _, N, F, ee);
          }
          if (wc(F) || h(F)) return R = R.get(N) || null, K(_, R, F, ee, null);
          if (typeof F.then == "function") return oe(R, _, N, oc(F), ee);
          if (F.$$typeof === va) return oe(R, _, N, rc(_, F), ee);
          uc(_, F);
        }
        return null;
      }
      function Et(R, _, N, F) {
        for (var ee = null, Ge = null, re = _, ge = _ = 0, pt = null; re !== null && ge < N.length; ge++) {
          re.index > ge ? (pt = re, re = null) : pt = re.sibling;
          var ye = Y(R, re, N[ge], F);
          if (ye === null) {
            re === null && (re = pt);
            break;
          }
          r && re && ye.alternate === null && n(R, re), _ = p(ye, _, ge), Ge === null ? ee = ye : Ge.sibling = ye, Ge = ye, re = pt;
        }
        if (ge === N.length) return o(R, re), me && U(R, ge), ee;
        if (re === null) {
          for (; ge < N.length; ge++) re = H(R, N[ge], F), re !== null && (_ = p(re, _, ge), Ge === null ? ee = re : Ge.sibling = re, Ge = re);
          return me && U(R, ge), ee;
        }
        for (re = s(re); ge < N.length; ge++) pt = oe(re, R, ge, N[ge], F), pt !== null && (r && pt.alternate !== null && re.delete(pt.key === null ? ge : pt.key), _ = p(pt, _, ge), Ge === null ? ee = pt : Ge.sibling = pt, Ge = pt);
        return r && re.forEach(function (_a) {
          return n(R, _a);
        }), me && U(R, ge), ee;
      }
      function ys(R, _, N, F) {
        if (N == null) throw Error(i(151));
        for (var ee = null, Ge = null, re = _, ge = _ = 0, pt = null, ye = N.next(); re !== null && !ye.done; ge++, ye = N.next()) {
          re.index > ge ? (pt = re, re = null) : pt = re.sibling;
          var _a = Y(R, re, ye.value, F);
          if (_a === null) {
            re === null && (re = pt);
            break;
          }
          r && re && _a.alternate === null && n(R, re), _ = p(_a, _, ge), Ge === null ? ee = _a : Ge.sibling = _a, Ge = _a, re = pt;
        }
        if (ye.done) return o(R, re), me && U(R, ge), ee;
        if (re === null) {
          for (; !ye.done; ge++, ye = N.next()) ye = H(R, ye.value, F), ye !== null && (_ = p(ye, _, ge), Ge === null ? ee = ye : Ge.sibling = ye, Ge = ye);
          return me && U(R, ge), ee;
        }
        for (re = s(re); !ye.done; ge++, ye = N.next()) ye = oe(re, R, ge, ye.value, F), ye !== null && (r && ye.alternate !== null && re.delete(ye.key === null ? ge : ye.key), _ = p(ye, _, ge), Ge === null ? ee = ye : Ge.sibling = ye, Ge = ye);
        return r && re.forEach(function (gj) {
          return n(R, gj);
        }), me && U(R, ge), ee;
      }
      function bi(R, _, N, F) {
        if (_typeof(N) == "object" && N !== null && N.type === lo && N.key === null && (N = N.props.children), _typeof(N) == "object" && N !== null) {
          switch (N.$$typeof) {
            case Nc:
              e: {
                for (var ee = N.key; _ !== null;) {
                  if (_.key === ee) {
                    if (ee = N.type, ee === lo) {
                      if (_.tag === 7) {
                        o(R, _.sibling), F = f(_, N.props.children), F.return = R, R = F;
                        break e;
                      }
                    } else if (_.elementType === ee || _typeof(ee) == "object" && ee !== null && ee.$$typeof === ha && ii(ee) === _.type) {
                      o(R, _.sibling), F = f(_, N.props), Vu(F, N), F.return = R, R = F;
                      break e;
                    }
                    o(R, _);
                    break;
                  } else n(R, _);
                  _ = _.sibling;
                }
                N.type === lo ? (F = ci(N.props.children, R.mode, F, N.key), F.return = R, R = F) : (F = Rc(N.type, N.key, N.props, null, R.mode, F), Vu(F, N), F.return = R, R = F);
              }
              return y(R);
            case so:
              e: {
                for (ee = N.key; _ !== null;) {
                  if (_.key === ee) {
                    if (_.tag === 4 && _.stateNode.containerInfo === N.containerInfo && _.stateNode.implementation === N.implementation) {
                      o(R, _.sibling), F = f(_, N.children || []), F.return = R, R = F;
                      break e;
                    } else {
                      o(R, _);
                      break;
                    }
                  } else n(R, _);
                  _ = _.sibling;
                }
                F = vv(N, R.mode, F), F.return = R, R = F;
              }
              return y(R);
            case ha:
              return N = ii(N), bi(R, _, N, F);
          }
          if (wc(N)) return Et(R, _, N, F);
          if (h(N)) {
            if (ee = h(N), typeof ee != "function") throw Error(i(150));
            return N = ee.call(N), ys(R, _, N, F);
          }
          if (typeof N.then == "function") return bi(R, _, oc(N), F);
          if (N.$$typeof === va) return bi(R, _, rc(R, N), F);
          uc(R, N);
        }
        return typeof N == "string" && N !== "" || typeof N == "number" || typeof N == "bigint" ? (N = "" + N, _ !== null && _.tag === 6 ? (o(R, _.sibling), F = f(_, N), F.return = R, R = F) : (o(R, _), F = mv(N, R.mode, F), F.return = R, R = F), y(R)) : o(R, _);
      }
      return function (R, _, N, F) {
        try {
          fs = 0;
          var ee = bi(R, _, N, F);
          return Eo = null, ee;
        } catch (re) {
          if (re === bo || re === Fc) throw re;
          var Ge = t(29, re, null, R.mode);
          return Ge.lanes = F, Ge.return = R, Ge;
        }
      };
    }
    function sc() {
      for (var r = So, n = Lv = So = 0; n < r;) {
        var o = Sr[n];
        Sr[n++] = null;
        var s = Sr[n];
        Sr[n++] = null;
        var f = Sr[n];
        Sr[n++] = null;
        var p = Sr[n];
        if (Sr[n++] = null, s !== null && f !== null) {
          var y = s.pending;
          y === null ? f.next = f : (f.next = y.next, y.next = f), s.pending = f;
        }
        p !== 0 && Jb(o, f, p);
      }
    }
    function lc(r, n, o, s) {
      Sr[So++] = r, Sr[So++] = n, Sr[So++] = o, Sr[So++] = s, Lv |= s, r.lanes |= s, r = r.alternate, r !== null && (r.lanes |= s);
    }
    function bm(r, n, o, s) {
      return lc(r, n, o, s), cc(r);
    }
    function oi(r, n) {
      return lc(r, null, null, n), cc(r);
    }
    function Jb(r, n, o) {
      r.lanes |= o;
      var s = r.alternate;
      s !== null && (s.lanes |= o);
      for (var f = !1, p = r.return; p !== null;) p.childLanes |= o, s = p.alternate, s !== null && (s.childLanes |= o), p.tag === 22 && (r = p.stateNode, r === null || r._visibility & 1 || (f = !0)), r = p, p = p.return;
      return r.tag === 3 ? (p = r.stateNode, f && n !== null && (f = 31 - ur(o), r = p.hiddenUpdates, s = r[f], s === null ? r[f] = [n] : s.push(n), n.lane = o | 536870912), p) : null;
    }
    function cc(r) {
      if (50 < gs) throw gs = 0, Jv = null, Error(i(185));
      for (var n = r.return; n !== null;) r = n, n = r.return;
      return r.tag === 3 ? r.stateNode : null;
    }
    function Em(r) {
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
    function Sm(r, n) {
      r = r.updateQueue, n.updateQueue === r && (n.updateQueue = {
        baseState: r.baseState,
        firstBaseUpdate: r.firstBaseUpdate,
        lastBaseUpdate: r.lastBaseUpdate,
        shared: r.shared,
        callbacks: null
      });
    }
    function la(r) {
      return {
        lane: r,
        tag: 0,
        payload: null,
        callback: null,
        next: null
      };
    }
    function ca(r, n, o) {
      var s = r.updateQueue;
      if (s === null) return null;
      if (s = s.shared, (fe & 2) !== 0) {
        var f = s.pending;
        return f === null ? n.next = n : (n.next = f.next, f.next = n), s.pending = n, n = cc(r), Jb(r, null, o), n;
      }
      return lc(r, s, n, o), cc(r);
    }
    function Yu(r, n, o) {
      if (n = n.updateQueue, n !== null && (n = n.shared, (o & 4194048) !== 0)) {
        var s = n.lanes;
        s &= r.pendingLanes, o |= s, n.lanes = o, ie(r, o);
      }
    }
    function Tm(r, n) {
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
    function Xu() {
      if (jv) {
        var r = xo;
        if (r !== null) throw r;
      }
    }
    function Qu(r, n, o, s) {
      jv = !1;
      var f = r.updateQueue;
      ba = !1;
      var p = f.firstBaseUpdate,
        y = f.lastBaseUpdate,
        S = f.shared.pending;
      if (S !== null) {
        f.shared.pending = null;
        var w = S,
          I = w.next;
        w.next = null, y === null ? p = I : y.next = I, y = w;
        var K = r.alternate;
        K !== null && (K = K.updateQueue, S = K.lastBaseUpdate, S !== y && (S === null ? K.firstBaseUpdate = I : S.next = I, K.lastBaseUpdate = w));
      }
      if (p !== null) {
        var H = f.baseState;
        y = 0, K = I = w = null, S = p;
        do {
          var Y = S.lane & -536870913,
            oe = Y !== S.lane;
          if (oe ? (de & Y) === Y : (s & Y) === Y) {
            Y !== 0 && Y === yo && (jv = !0), K !== null && (K = K.next = {
              lane: 0,
              tag: S.tag,
              payload: S.payload,
              callback: null,
              next: null
            });
            e: {
              var Et = r,
                ys = S;
              Y = n;
              var bi = o;
              switch (ys.tag) {
                case 1:
                  if (Et = ys.payload, typeof Et == "function") {
                    H = Et.call(bi, H, Y);
                    break e;
                  }
                  H = Et;
                  break e;
                case 3:
                  Et.flags = Et.flags & -65537 | 128;
                case 0:
                  if (Et = ys.payload, Y = typeof Et == "function" ? Et.call(bi, H, Y) : Et, Y == null) break e;
                  H = gv({}, H, Y);
                  break e;
                case 2:
                  ba = !0;
              }
            }
            Y = S.callback, Y !== null && (r.flags |= 64, oe && (r.flags |= 8192), oe = f.callbacks, oe === null ? f.callbacks = [Y] : oe.push(Y));
          } else oe = {
            lane: Y,
            tag: S.tag,
            payload: S.payload,
            callback: S.callback,
            next: null
          }, K === null ? (I = K = oe, w = H) : K = K.next = oe, y |= Y;
          if (S = S.next, S === null) {
            if (S = f.shared.pending, S === null) break;
            oe = S, S = oe.next, oe.next = null, f.lastBaseUpdate = oe, f.shared.pending = null;
          }
        } while (!0);
        K === null && (w = H), f.baseState = w, f.firstBaseUpdate = I, f.lastBaseUpdate = K, p === null && (f.shared.lanes = 0), Sa |= y, r.lanes = y, r.memoizedState = H;
      }
    }
    function Wb(r, n) {
      if (typeof r != "function") throw Error(i(191, r));
      r.call(n);
    }
    function $b(r, n) {
      var o = r.callbacks;
      if (o !== null) for (r.callbacks = null, r = 0; r < o.length; r++) Wb(o[r], n);
    }
    function eE(r, n) {
      r = Pn, E(Kc, r), E(To, n), Pn = r | n.baseLanes;
    }
    function qm() {
      E(Kc, Pn), E(To, To.current);
    }
    function _m() {
      Pn = Kc.current, b(To), b(Kc);
    }
    function fa(r) {
      var n = r.alternate;
      E(Je, Je.current & 1), E(cr, r), Tr === null && (n === null || To.current !== null || n.memoizedState !== null) && (Tr = r);
    }
    function Am(r) {
      E(Je, Je.current), E(cr, r), Tr === null && (Tr = r);
    }
    function tE(r) {
      r.tag === 22 ? (E(Je, Je.current), E(cr, r), Tr === null && (Tr = r)) : pa(r);
    }
    function pa() {
      E(Je, Je.current), E(cr, cr.current);
    }
    function ar(r) {
      b(cr), Tr === r && (Tr = null), b(Je);
    }
    function fc(r) {
      for (var n = r; n !== null;) {
        if (n.tag === 13) {
          var o = n.memoizedState;
          if (o !== null && (o = o.dehydrated, o === null || Av(o) || Ov(o))) return n;
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
    function Ye() {
      throw Error(i(321));
    }
    function Om(r, n) {
      if (n === null) return !1;
      for (var o = 0; o < n.length && o < r.length; o++) if (!lr(r[o], n[o])) return !1;
      return !0;
    }
    function Cm(r, n, o, s, f, p) {
      return Bn = p, se = n, n.memoizedState = null, n.updateQueue = null, n.lanes = 0, $.H = r === null || r.memoizedState === null ? C1 : Hv, yi = !1, p = o(s, f), yi = !1, qo && (p = nE(n, o, s, f)), rE(r), p;
    }
    function rE(r) {
      $.H = ds;
      var n = _e !== null && _e.next !== null;
      if (Bn = 0, $e = _e = se = null, Vc = !1, ps = 0, _o = null, n) throw Error(i(300));
      r === null || et || (r = r.dependencies, r !== null && Ne(r) && (et = !0));
    }
    function nE(r, n, o, s) {
      se = r;
      var f = 0;
      do {
        if (qo && (_o = null), ps = 0, qo = !1, 25 <= f) throw Error(i(301));
        if (f += 1, $e = _e = null, r.updateQueue != null) {
          var p = r.updateQueue;
          p.lastEffect = null, p.events = null, p.stores = null, p.memoCache != null && (p.memoCache.index = 0);
        }
        $.H = R1, p = n(o, s);
      } while (qo);
      return p;
    }
    function rz() {
      var r = $.H,
        n = r.useState()[0];
      return n = typeof n.then == "function" ? Zu(n) : n, r = r.useState()[0], (_e !== null ? _e.memoizedState : null) !== r && (se.flags |= 1024), n;
    }
    function Rm() {
      var r = Yc !== 0;
      return Yc = 0, r;
    }
    function Nm(r, n, o) {
      n.updateQueue = r.updateQueue, n.flags &= -2053, r.lanes &= ~o;
    }
    function wm(r) {
      if (Vc) {
        for (r = r.memoizedState; r !== null;) {
          var n = r.queue;
          n !== null && (n.pending = null), r = r.next;
        }
        Vc = !1;
      }
      Bn = 0, $e = _e = se = null, qo = !1, ps = Yc = 0, _o = null;
    }
    function Bt() {
      var r = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      return $e === null ? se.memoizedState = $e = r : $e = $e.next = r, $e;
    }
    function ke() {
      if (_e === null) {
        var r = se.alternate;
        r = r !== null ? r.memoizedState : null;
      } else r = _e.next;
      var n = $e === null ? se.memoizedState : $e.next;
      if (n !== null) $e = n, _e = r;else {
        if (r === null) throw se.alternate === null ? Error(i(467)) : Error(i(310));
        _e = r, r = {
          memoizedState: _e.memoizedState,
          baseState: _e.baseState,
          baseQueue: _e.baseQueue,
          queue: _e.queue,
          next: null
        }, $e === null ? se.memoizedState = $e = r : $e = $e.next = r;
      }
      return $e;
    }
    function pc() {
      return {
        lastEffect: null,
        events: null,
        stores: null,
        memoCache: null
      };
    }
    function Zu(r) {
      var n = ps;
      return ps += 1, _o === null && (_o = []), r = Xb(_o, r, n), n = se, ($e === null ? n.memoizedState : $e.next) === null && (n = n.alternate, $.H = n === null || n.memoizedState === null ? C1 : Hv), r;
    }
    function dc(r) {
      if (r !== null && _typeof(r) == "object") {
        if (typeof r.then == "function") return Zu(r);
        if (r.$$typeof === va) return gt(r);
      }
      throw Error(i(438, String(r)));
    }
    function Mm(r) {
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
      }), o === null && (o = pc(), se.updateQueue = o), o.memoCache = n, o = n.data[n.index], o === void 0) for (o = n.data[n.index] = Array(r), s = 0; s < r; s++) o[s] = Oz;
      return n.index++, o;
    }
    function An(r, n) {
      return typeof n == "function" ? n(r) : n;
    }
    function mc(r) {
      var n = ke();
      return Dm(n, _e, r);
    }
    function Dm(r, n, o) {
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
        var S = y = null,
          w = null,
          I = n,
          K = !1;
        do {
          var H = I.lane & -536870913;
          if (H !== I.lane ? (de & H) === H : (Bn & H) === H) {
            var Y = I.revertLane;
            if (Y === 0) w !== null && (w = w.next = {
              lane: 0,
              revertLane: 0,
              gesture: null,
              action: I.action,
              hasEagerState: I.hasEagerState,
              eagerState: I.eagerState,
              next: null
            }), H === yo && (K = !0);else if ((Bn & Y) === Y) {
              I = I.next, Y === yo && (K = !0);
              continue;
            } else H = {
              lane: 0,
              revertLane: I.revertLane,
              gesture: null,
              action: I.action,
              hasEagerState: I.hasEagerState,
              eagerState: I.eagerState,
              next: null
            }, w === null ? (S = w = H, y = p) : w = w.next = H, se.lanes |= Y, Sa |= Y;
            H = I.action, yi && o(p, H), p = I.hasEagerState ? I.eagerState : o(p, H);
          } else Y = {
            lane: H,
            revertLane: I.revertLane,
            gesture: I.gesture,
            action: I.action,
            hasEagerState: I.hasEagerState,
            eagerState: I.eagerState,
            next: null
          }, w === null ? (S = w = Y, y = p) : w = w.next = Y, se.lanes |= H, Sa |= H;
          I = I.next;
        } while (I !== null && I !== n);
        if (w === null ? y = p : w.next = S, !lr(p, r.memoizedState) && (et = !0, K && (o = xo, o !== null))) throw o;
        r.memoizedState = p, r.baseState = y, r.baseQueue = w, s.lastRenderedState = p;
      }
      return f === null && (s.lanes = 0), [r.memoizedState, s.dispatch];
    }
    function Bm(r) {
      var n = ke(),
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
        lr(p, n.memoizedState) || (et = !0), n.memoizedState = p, n.baseQueue === null && (n.baseState = p), o.lastRenderedState = p;
      }
      return [p, s];
    }
    function aE(r, n, o) {
      var s = se,
        f = ke(),
        p = me;
      if (p) {
        if (o === void 0) throw Error(i(407));
        o = o();
      } else o = n();
      var y = !lr((_e || f).memoizedState, o);
      if (y && (f.memoizedState = o, et = !0), f = f.queue, Um(uE.bind(null, s, f, r), [r]), f.getSnapshot !== n || y || $e !== null && $e.memoizedState.tag & 1) {
        if (s.flags |= 2048, ao(9, {
          destroy: void 0
        }, oE.bind(null, s, f, o, n), null), Ce === null) throw Error(i(349));
        p || (Bn & 127) !== 0 || iE(s, n, o);
      }
      return o;
    }
    function iE(r, n, o) {
      r.flags |= 16384, r = {
        getSnapshot: n,
        value: o
      }, n = se.updateQueue, n === null ? (n = pc(), se.updateQueue = n, n.stores = [r]) : (o = n.stores, o === null ? n.stores = [r] : o.push(r));
    }
    function oE(r, n, o, s) {
      n.value = o, n.getSnapshot = s, sE(n) && lE(r);
    }
    function uE(r, n, o) {
      return o(function () {
        sE(n) && lE(r);
      });
    }
    function sE(r) {
      var n = r.getSnapshot;
      r = r.value;
      try {
        var o = n();
        return !lr(r, o);
      } catch (_unused62) {
        return !0;
      }
    }
    function lE(r) {
      var n = oi(r, 2);
      n !== null && Ft(n, r, 2);
    }
    function Im(r) {
      var n = Bt();
      if (typeof r == "function") {
        var o = r;
        if (r = o(), yi) {
          le(!0);
          try {
            o();
          } finally {
            le(!1);
          }
        }
      }
      return n.memoizedState = n.baseState = r, n.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: An,
        lastRenderedState: r
      }, n;
    }
    function cE(r, n, o, s) {
      return r.baseState = o, Dm(r, _e, typeof s == "function" ? s : An);
    }
    function nz(r, n, o, s, f) {
      if (gc(r)) throw Error(i(485));
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
        $.T !== null ? o(!0) : p.isTransition = !1, s(p), o = n.pending, o === null ? (p.next = n.pending = p, fE(n, p)) : (p.next = o.next, n.pending = o.next = p);
      }
    }
    function fE(r, n) {
      var o = n.action,
        s = n.payload,
        f = r.state;
      if (n.isTransition) {
        var p = $.T,
          y = {};
        $.T = y;
        try {
          var S = o(f, s),
            w = $.S;
          w !== null && w(y, S), pE(r, n, S);
        } catch (I) {
          Pm(r, n, I);
        } finally {
          p !== null && y.types !== null && (p.types = y.types), $.T = p;
        }
      } else try {
        p = o(f, s), pE(r, n, p);
      } catch (I) {
        Pm(r, n, I);
      }
    }
    function pE(r, n, o) {
      o !== null && _typeof(o) == "object" && typeof o.then == "function" ? o.then(function (s) {
        dE(r, n, s);
      }, function (s) {
        return Pm(r, n, s);
      }) : dE(r, n, o);
    }
    function dE(r, n, o) {
      n.status = "fulfilled", n.value = o, mE(n), r.state = o, n = r.pending, n !== null && (o = n.next, o === n ? r.pending = null : (o = o.next, n.next = o, fE(r, o)));
    }
    function Pm(r, n, o) {
      var s = r.pending;
      if (r.pending = null, s !== null) {
        s = s.next;
        do n.status = "rejected", n.reason = o, mE(n), n = n.next; while (n !== s);
      }
      r.action = null;
    }
    function mE(r) {
      r = r.listeners;
      for (var n = 0; n < r.length; n++) (0, r[n])();
    }
    function vE(r, n) {
      return n;
    }
    function hE(r, n) {
      if (me) {
        var o = Ce.formState;
        if (o !== null) {
          e: {
            var s = se;
            if (me) {
              if (He) {
                var f = bL(He, Er);
                if (f) {
                  He = c1(f), s = EL(f);
                  break e;
                }
              }
              Ct(s);
            }
            s = !1;
          }
          s && (n = o[0]);
        }
      }
      o = Bt(), o.memoizedState = o.baseState = n, s = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: vE,
        lastRenderedState: n
      }, o.queue = s, o = BE.bind(null, se, s), s.dispatch = o, s = Im(!1);
      var p = Hm.bind(null, se, !1, s.queue);
      return s = Bt(), f = {
        state: n,
        dispatch: null,
        action: r,
        pending: null
      }, s.queue = f, o = nz.bind(null, se, f, p, o), f.dispatch = o, s.memoizedState = r, [n, o, !1];
    }
    function gE(r) {
      var n = ke();
      return yE(n, _e, r);
    }
    function yE(r, n, o) {
      if (n = Dm(r, n, vE)[0], r = mc(An)[0], _typeof(n) == "object" && n !== null && typeof n.then == "function") try {
        var s = Zu(n);
      } catch (y) {
        throw y === bo ? Fc : y;
      } else s = n;
      n = ke();
      var f = n.queue,
        p = f.dispatch;
      return o !== n.memoizedState && (se.flags |= 2048, ao(9, {
        destroy: void 0
      }, az.bind(null, f, o), null)), [s, p, r];
    }
    function az(r, n) {
      r.action = n;
    }
    function xE(r) {
      var n = ke(),
        o = _e;
      if (o !== null) return yE(n, o, r);
      ke(), n = n.memoizedState, o = ke();
      var s = o.queue.dispatch;
      return o.memoizedState = r, [n, s, !1];
    }
    function ao(r, n, o, s) {
      return r = {
        tag: r,
        create: o,
        deps: s,
        inst: n,
        next: null
      }, n = se.updateQueue, n === null && (n = pc(), se.updateQueue = n), o = n.lastEffect, o === null ? n.lastEffect = r.next = r : (s = o.next, o.next = r, r.next = s, n.lastEffect = r), r;
    }
    function bE() {
      return ke().memoizedState;
    }
    function vc(r, n, o, s) {
      var f = Bt();
      se.flags |= r, f.memoizedState = ao(1 | n, {
        destroy: void 0
      }, o, s === void 0 ? null : s);
    }
    function hc(r, n, o, s) {
      var f = ke();
      s = s === void 0 ? null : s;
      var p = f.memoizedState.inst;
      _e !== null && s !== null && Om(s, _e.memoizedState.deps) ? f.memoizedState = ao(n, p, o, s) : (se.flags |= r, f.memoizedState = ao(1 | n, p, o, s));
    }
    function EE(r, n) {
      vc(8390656, 8, r, n);
    }
    function Um(r, n) {
      hc(2048, 8, r, n);
    }
    function iz(r) {
      se.flags |= 4;
      var n = se.updateQueue;
      if (n === null) n = pc(), se.updateQueue = n, n.events = [r];else {
        var o = n.events;
        o === null ? n.events = [r] : o.push(r);
      }
    }
    function SE(r) {
      var n = ke().memoizedState;
      return iz({
        ref: n,
        nextImpl: r
      }), function () {
        if ((fe & 2) !== 0) throw Error(i(440));
        return n.impl.apply(void 0, arguments);
      };
    }
    function TE(r, n) {
      return hc(4, 2, r, n);
    }
    function qE(r, n) {
      return hc(4, 4, r, n);
    }
    function _E(r, n) {
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
    function AE(r, n, o) {
      o = o != null ? o.concat([r]) : null, hc(4, 4, _E.bind(null, n, r), o);
    }
    function zm() {}
    function OE(r, n) {
      var o = ke();
      n = n === void 0 ? null : n;
      var s = o.memoizedState;
      return n !== null && Om(n, s[1]) ? s[0] : (o.memoizedState = [r, n], r);
    }
    function CE(r, n) {
      var o = ke();
      n = n === void 0 ? null : n;
      var s = o.memoizedState;
      if (n !== null && Om(n, s[1])) return s[0];
      if (s = r(), yi) {
        le(!0);
        try {
          r();
        } finally {
          le(!1);
        }
      }
      return o.memoizedState = [s, n], s;
    }
    function Lm(r, n, o) {
      return o === void 0 || (Bn & 1073741824) !== 0 && (de & 261930) === 0 ? r.memoizedState = n : (r.memoizedState = o, r = qS(), se.lanes |= r, Sa |= r, o);
    }
    function RE(r, n, o, s) {
      return lr(o, n) ? o : To.current !== null ? (r = Lm(r, o, s), lr(r, n) || (et = !0), r) : (Bn & 42) === 0 || (Bn & 1073741824) !== 0 && (de & 261930) === 0 ? (et = !0, r.memoizedState = o) : (r = qS(), se.lanes |= r, Sa |= r, n);
    }
    function NE(r, n, o, s, f) {
      var p = Mn();
      ct(p !== 0 && 8 > p ? p : 8);
      var y = $.T,
        S = {};
      $.T = S, Hm(r, !1, n, o);
      try {
        var w = f(),
          I = $.S;
        if (I !== null && I(S, w), w !== null && _typeof(w) == "object" && typeof w.then == "function") {
          var K = tz(w, s);
          ku(r, n, K, ir(r));
        } else ku(r, n, s, ir(r));
      } catch (H) {
        ku(r, n, {
          then: function then() {},
          status: "rejected",
          reason: H
        }, ir());
      } finally {
        ct(p), y !== null && S.types !== null && (y.types = S.types), $.T = y;
      }
    }
    function wE(r) {
      var n = r.memoizedState;
      if (n !== null) return n;
      n = {
        memoizedState: co,
        baseState: co,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: An,
          lastRenderedState: co
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
          lastRenderedReducer: An,
          lastRenderedState: o
        },
        next: null
      }, r.memoizedState = n, r = r.alternate, r !== null && (r.memoizedState = n), n;
    }
    function jm() {
      return gt(pi);
    }
    function ME() {
      return ke().memoizedState;
    }
    function DE() {
      return ke().memoizedState;
    }
    function oz(r) {
      for (var n = r.return; n !== null;) {
        switch (n.tag) {
          case 24:
          case 3:
            var o = ir();
            r = la(o);
            var s = ca(n, r, o);
            s !== null && (Ft(s, n, o), Yu(s, n, o)), n = {
              cache: gm()
            }, r.payload = n;
            return;
        }
        n = n.return;
      }
    }
    function uz(r, n, o) {
      var s = ir();
      o = {
        lane: s,
        revertLane: 0,
        gesture: null,
        action: o,
        hasEagerState: !1,
        eagerState: null,
        next: null
      }, gc(r) ? IE(n, o) : (o = bm(r, n, o, s), o !== null && (Ft(o, r, s), PE(o, n, s)));
    }
    function BE(r, n, o) {
      var s = ir();
      ku(r, n, o, s);
    }
    function ku(r, n, o, s) {
      var f = {
        lane: s,
        revertLane: 0,
        gesture: null,
        action: o,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (gc(r)) IE(n, f);else {
        var p = r.alternate;
        if (r.lanes === 0 && (p === null || p.lanes === 0) && (p = n.lastRenderedReducer, p !== null)) try {
          var y = n.lastRenderedState,
            S = p(y, o);
          if (f.hasEagerState = !0, f.eagerState = S, lr(S, y)) return lc(r, n, f, 0), Ce === null && sc(), !1;
        } catch (_unused63) {}
        if (o = bm(r, n, f, s), o !== null) return Ft(o, r, s), PE(o, n, s), !0;
      }
      return !1;
    }
    function Hm(r, n, o, s) {
      if (s = {
        lane: 2,
        revertLane: ym(),
        gesture: null,
        action: s,
        hasEagerState: !1,
        eagerState: null,
        next: null
      }, gc(r)) {
        if (n) throw Error(i(479));
      } else n = bm(r, o, s, 2), n !== null && Ft(n, r, 2);
    }
    function gc(r) {
      var n = r.alternate;
      return r === se || n !== null && n === se;
    }
    function IE(r, n) {
      qo = Vc = !0;
      var o = r.pending;
      o === null ? n.next = n : (n.next = o.next, o.next = n), r.pending = n;
    }
    function PE(r, n, o) {
      if ((o & 4194048) !== 0) {
        var s = n.lanes;
        s &= r.pendingLanes, o |= s, n.lanes = o, ie(r, o);
      }
    }
    function Fm(r, n, o, s) {
      n = r.memoizedState, o = o(s, n), o = o == null ? n : gv({}, n, o), r.memoizedState = o, r.lanes === 0 && (r.updateQueue.baseState = o);
    }
    function UE(r, n, o, s, f, p, y) {
      return r = r.stateNode, typeof r.shouldComponentUpdate == "function" ? r.shouldComponentUpdate(s, p, y) : n.prototype && n.prototype.isPureReactComponent ? !ic(o, s) || !ic(f, p) : !0;
    }
    function zE(r, n, o, s) {
      r = n.state, typeof n.componentWillReceiveProps == "function" && n.componentWillReceiveProps(o, s), typeof n.UNSAFE_componentWillReceiveProps == "function" && n.UNSAFE_componentWillReceiveProps(o, s), n.state !== r && Fv.enqueueReplaceState(n, n.state, null);
    }
    function ui(r, n) {
      var o = n;
      if ("ref" in n) {
        o = {};
        for (var s in n) s !== "ref" && (o[s] = n[s]);
      }
      if (r = r.defaultProps) {
        o === n && (o = gv({}, o));
        for (var f in r) o[f] === void 0 && (o[f] = r[f]);
      }
      return o;
    }
    function yc(r, n) {
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
    function LE(r, n, o) {
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
    function Gm(r, n, o) {
      return o = la(o), o.tag = 3, o.payload = {
        element: null
      }, o.callback = function () {
        yc(r, n);
      }, o;
    }
    function jE(r) {
      return r = la(r), r.tag = 3, r;
    }
    function HE(r, n, o, s) {
      var f = o.type.getDerivedStateFromError;
      if (typeof f == "function") {
        var p = s.value;
        r.payload = function () {
          return f(p);
        }, r.callback = function () {
          LE(n, o, s);
        };
      }
      var y = o.stateNode;
      y !== null && typeof y.componentDidCatch == "function" && (r.callback = function () {
        LE(n, o, s), typeof f != "function" && (Ta === null ? Ta = new Set([this]) : Ta.add(this));
        var S = s.stack;
        this.componentDidCatch(s.value, {
          componentStack: S !== null ? S : ""
        });
      });
    }
    function sz(r, n, o, s, f) {
      if (o.flags |= 32768, s !== null && _typeof(s) == "object" && typeof s.then == "function") {
        if (n = o.alternate, n !== null && qe(n, o, f, !0), o = cr.current, o !== null) {
          switch (o.tag) {
            case 31:
            case 13:
              return Tr === null ? Oc() : o.alternate === null && Xe === 0 && (Xe = 3), o.flags &= -257, o.flags |= 65536, o.lanes = f, s === Gc ? o.flags |= 16384 : (n = o.updateQueue, n === null ? o.updateQueue = new Set([s]) : n.add(s), pv(r, s, f)), !1;
            case 22:
              return o.flags |= 65536, s === Gc ? o.flags |= 16384 : (n = o.updateQueue, n === null ? (n = {
                transitions: null,
                markerInstances: null,
                retryQueue: new Set([s])
              }, o.updateQueue = n) : (o = n.retryQueue, o === null ? n.retryQueue = new Set([s]) : o.add(s)), pv(r, s, f)), !1;
          }
          throw Error(i(435, o.tag));
        }
        return pv(r, s, f), Oc(), !1;
      }
      if (me) return n = cr.current, n !== null ? ((n.flags & 65536) === 0 && (n.flags |= 256), n.flags |= 65536, n.lanes = f, s !== Bv && (r = Error(i(422), {
        cause: s
      }), ni(Ie(r, o)))) : (s !== Bv && (n = Error(i(423), {
        cause: s
      }), ni(Ie(n, o))), r = r.current.alternate, r.flags |= 65536, f &= -f, r.lanes |= f, s = Ie(s, o), f = Gm(r.stateNode, s, f), Tm(r, f), Xe !== 4 && (Xe = 2)), !1;
      var p = Error(i(520), {
        cause: s
      });
      if (p = Ie(p, o), vs === null ? vs = [p] : vs.push(p), Xe !== 4 && (Xe = 2), n === null) return !0;
      s = Ie(s, o), o = n;
      do {
        switch (o.tag) {
          case 3:
            return o.flags |= 65536, r = f & -f, o.lanes |= r, r = Gm(o.stateNode, s, r), Tm(o, r), !1;
          case 1:
            if (n = o.type, p = o.stateNode, (o.flags & 128) === 0 && (typeof n.getDerivedStateFromError == "function" || p !== null && typeof p.componentDidCatch == "function" && (Ta === null || !Ta.has(p)))) return o.flags |= 65536, f &= -f, o.lanes |= f, f = jE(f), HE(f, r, o, s), Tm(o, f), !1;
        }
        o = o.return;
      } while (o !== null);
      return !1;
    }
    function yt(r, n, o, s) {
      n.child = r === null ? O1(n, null, o, s) : gi(n, r.child, o, s);
    }
    function FE(r, n, o, s, f) {
      o = o.render;
      var p = n.ref;
      if ("ref" in s) {
        var y = {};
        for (var S in s) S !== "ref" && (y[S] = s[S]);
      } else y = s;
      return Ve(n), s = Cm(r, n, o, y, p, f), S = Rm(), r !== null && !et ? (Nm(r, n, f), On(r, n, f)) : (me && S && z(n), n.flags |= 1, yt(r, n, s, f), n.child);
    }
    function GE(r, n, o, s, f) {
      if (r === null) {
        var p = o.type;
        return typeof p == "function" && !dv(p) && p.defaultProps === void 0 && o.compare === null ? (n.tag = 15, n.type = p, KE(r, n, p, s, f)) : (r = Rc(o.type, null, s, n, n.mode, f), r.ref = n.ref, r.return = n, n.child = r);
      }
      if (p = r.child, !km(r, f)) {
        var y = p.memoizedProps;
        if (o = o.compare, o = o !== null ? o : ic, o(y, s) && r.ref === n.ref) return On(r, n, f);
      }
      return n.flags |= 1, r = Nn(p, s), r.ref = n.ref, r.return = n, n.child = r;
    }
    function KE(r, n, o, s, f) {
      if (r !== null) {
        var p = r.memoizedProps;
        if (ic(p, s) && r.ref === n.ref) if (et = !1, n.pendingProps = s = p, km(r, f)) (r.flags & 131072) !== 0 && (et = !0);else return n.lanes = r.lanes, On(r, n, f);
      }
      return Km(r, n, o, s, f);
    }
    function VE(r, n, o, s) {
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
          return YE(r, n, p, o, s);
        }
        if ((o & 536870912) !== 0) n.memoizedState = {
          baseLanes: 0,
          cachePool: null
        }, r !== null && ac(n, p !== null ? p.cachePool : null), p !== null ? eE(n, p) : qm(), tE(n);else return s = n.lanes = 536870912, YE(r, n, p !== null ? p.baseLanes | o : o, o, s);
      } else p !== null ? (ac(n, p.cachePool), eE(n, p), pa(n), n.memoizedState = null) : (r !== null && ac(n, null), qm(), pa(n));
      return yt(r, n, f, o), n.child;
    }
    function Ju(r, n) {
      return r !== null && r.tag === 22 || n.stateNode !== null || (n.stateNode = {
        _visibility: 1,
        _pendingMarkers: null,
        _retryCache: null,
        _transitions: null
      }), n.sibling;
    }
    function YE(r, n, o, s, f) {
      var p = xm();
      return p = p === null ? null : {
        parent: wn ? Fe._currentValue : Fe._currentValue2,
        pool: p
      }, n.memoizedState = {
        baseLanes: o,
        cachePool: p
      }, r !== null && ac(n, null), qm(), tE(n), r !== null && qe(r, n, s, !0), n.childLanes = f, null;
    }
    function xc(r, n) {
      return n = Ec({
        mode: n.mode,
        children: n.children
      }, r.mode), n.ref = r.ref, r.child = n, n.return = r, n;
    }
    function XE(r, n, o) {
      return gi(n, r.child, null, o), r = xc(n, n.pendingProps), r.flags |= 2, ar(n), n.memoizedState = null, r;
    }
    function lz(r, n, o) {
      var s = n.pendingProps,
        f = (n.flags & 128) !== 0;
      if (n.flags &= -129, r === null) {
        if (me) {
          if (s.mode === "hidden") return r = xc(n, s), n.lanes = 536870912, Ju(null, r);
          if (Am(n), (r = He) ? (r = NL(r, Er), r !== null && (n.memoizedState = {
            dehydrated: r,
            treeContext: ga !== null ? {
              id: en,
              overflow: tn
            } : null,
            retryLane: 536870912,
            hydrationErrors: null
          }, o = KS(r), o.return = n, n.child = o, bt = n, He = null)) : r = null, r === null) throw Ct(n);
          return n.lanes = 536870912, null;
        }
        return xc(n, s);
      }
      var p = r.memoizedState;
      if (p !== null) {
        var y = p.dehydrated;
        if (Am(n), f) {
          if (n.flags & 256) n.flags &= -257, n = XE(r, n, o);else if (n.memoizedState !== null) n.child = r.child, n.flags |= 128, n = null;else throw Error(i(558));
        } else if (et || qe(r, n, o, !1), f = (o & r.childLanes) !== 0, et || f) {
          if (s = Ce, s !== null && (y = Q(s, o), y !== 0 && y !== p.retryLane)) throw p.retryLane = y, oi(r, y), Ft(s, r, y), Gv;
          Oc(), n = XE(r, n, o);
        } else r = p.treeContext, wt && (He = _L(y), bt = n, me = !0, xa = null, Er = !1, r !== null && Zr(n, r)), n = xc(n, s), n.flags |= 4096;
        return n;
      }
      return r = Nn(r.child, {
        mode: s.mode,
        children: s.children
      }), r.ref = n.ref, n.child = r, r.return = n, r;
    }
    function bc(r, n) {
      var o = n.ref;
      if (o === null) r !== null && r.ref !== null && (n.flags |= 4194816);else {
        if (typeof o != "function" && _typeof(o) != "object") throw Error(i(284));
        (r === null || r.ref !== o) && (n.flags |= 4194816);
      }
    }
    function Km(r, n, o, s, f) {
      return Ve(n), o = Cm(r, n, o, s, void 0, f), s = Rm(), r !== null && !et ? (Nm(r, n, f), On(r, n, f)) : (me && s && z(n), n.flags |= 1, yt(r, n, o, f), n.child);
    }
    function QE(r, n, o, s, f, p) {
      return Ve(n), n.updateQueue = null, o = nE(n, s, o, f), rE(r), s = Rm(), r !== null && !et ? (Nm(r, n, p), On(r, n, p)) : (me && s && z(n), n.flags |= 1, yt(r, n, o, p), n.child);
    }
    function ZE(r, n, o, s, f) {
      if (Ve(n), n.stateNode === null) {
        var p = mo,
          y = o.contextType;
        _typeof(y) == "object" && y !== null && (p = gt(y)), p = new o(s, p), n.memoizedState = p.state !== null && p.state !== void 0 ? p.state : null, p.updater = Fv, n.stateNode = p, p._reactInternals = n, p = n.stateNode, p.props = s, p.state = n.memoizedState, p.refs = {}, Em(n), y = o.contextType, p.context = _typeof(y) == "object" && y !== null ? gt(y) : mo, p.state = n.memoizedState, y = o.getDerivedStateFromProps, typeof y == "function" && (Fm(n, o, y, s), p.state = n.memoizedState), typeof o.getDerivedStateFromProps == "function" || typeof p.getSnapshotBeforeUpdate == "function" || typeof p.UNSAFE_componentWillMount != "function" && typeof p.componentWillMount != "function" || (y = p.state, typeof p.componentWillMount == "function" && p.componentWillMount(), typeof p.UNSAFE_componentWillMount == "function" && p.UNSAFE_componentWillMount(), y !== p.state && Fv.enqueueReplaceState(p, p.state, null), Qu(n, s, p, f), Xu(), p.state = n.memoizedState), typeof p.componentDidMount == "function" && (n.flags |= 4194308), s = !0;
      } else if (r === null) {
        p = n.stateNode;
        var S = n.memoizedProps,
          w = ui(o, S);
        p.props = w;
        var I = p.context,
          K = o.contextType;
        y = mo, _typeof(K) == "object" && K !== null && (y = gt(K));
        var H = o.getDerivedStateFromProps;
        K = typeof H == "function" || typeof p.getSnapshotBeforeUpdate == "function", S = n.pendingProps !== S, K || typeof p.UNSAFE_componentWillReceiveProps != "function" && typeof p.componentWillReceiveProps != "function" || (S || I !== y) && zE(n, p, s, y), ba = !1;
        var Y = n.memoizedState;
        p.state = Y, Qu(n, s, p, f), Xu(), I = n.memoizedState, S || Y !== I || ba ? (typeof H == "function" && (Fm(n, o, H, s), I = n.memoizedState), (w = ba || UE(n, o, w, s, Y, I, y)) ? (K || typeof p.UNSAFE_componentWillMount != "function" && typeof p.componentWillMount != "function" || (typeof p.componentWillMount == "function" && p.componentWillMount(), typeof p.UNSAFE_componentWillMount == "function" && p.UNSAFE_componentWillMount()), typeof p.componentDidMount == "function" && (n.flags |= 4194308)) : (typeof p.componentDidMount == "function" && (n.flags |= 4194308), n.memoizedProps = s, n.memoizedState = I), p.props = s, p.state = I, p.context = y, s = w) : (typeof p.componentDidMount == "function" && (n.flags |= 4194308), s = !1);
      } else {
        p = n.stateNode, Sm(r, n), y = n.memoizedProps, K = ui(o, y), p.props = K, H = n.pendingProps, Y = p.context, I = o.contextType, w = mo, _typeof(I) == "object" && I !== null && (w = gt(I)), S = o.getDerivedStateFromProps, (I = typeof S == "function" || typeof p.getSnapshotBeforeUpdate == "function") || typeof p.UNSAFE_componentWillReceiveProps != "function" && typeof p.componentWillReceiveProps != "function" || (y !== H || Y !== w) && zE(n, p, s, w), ba = !1, Y = n.memoizedState, p.state = Y, Qu(n, s, p, f), Xu();
        var oe = n.memoizedState;
        y !== H || Y !== oe || ba || r !== null && r.dependencies !== null && Ne(r.dependencies) ? (typeof S == "function" && (Fm(n, o, S, s), oe = n.memoizedState), (K = ba || UE(n, o, K, s, Y, oe, w) || r !== null && r.dependencies !== null && Ne(r.dependencies)) ? (I || typeof p.UNSAFE_componentWillUpdate != "function" && typeof p.componentWillUpdate != "function" || (typeof p.componentWillUpdate == "function" && p.componentWillUpdate(s, oe, w), typeof p.UNSAFE_componentWillUpdate == "function" && p.UNSAFE_componentWillUpdate(s, oe, w)), typeof p.componentDidUpdate == "function" && (n.flags |= 4), typeof p.getSnapshotBeforeUpdate == "function" && (n.flags |= 1024)) : (typeof p.componentDidUpdate != "function" || y === r.memoizedProps && Y === r.memoizedState || (n.flags |= 4), typeof p.getSnapshotBeforeUpdate != "function" || y === r.memoizedProps && Y === r.memoizedState || (n.flags |= 1024), n.memoizedProps = s, n.memoizedState = oe), p.props = s, p.state = oe, p.context = w, s = K) : (typeof p.componentDidUpdate != "function" || y === r.memoizedProps && Y === r.memoizedState || (n.flags |= 4), typeof p.getSnapshotBeforeUpdate != "function" || y === r.memoizedProps && Y === r.memoizedState || (n.flags |= 1024), s = !1);
      }
      return p = s, bc(r, n), s = (n.flags & 128) !== 0, p || s ? (p = n.stateNode, o = s && typeof o.getDerivedStateFromError != "function" ? null : p.render(), n.flags |= 1, r !== null && s ? (n.child = gi(n, r.child, null, f), n.child = gi(n, null, o, f)) : yt(r, n, o, f), n.memoizedState = p.state, r = n.child) : r = On(r, n, f), r;
    }
    function kE(r, n, o, s) {
      return _n(), n.flags |= 256, yt(r, n, o, s), n.child;
    }
    function Vm(r) {
      return {
        baseLanes: r,
        cachePool: Vb()
      };
    }
    function Ym(r, n, o) {
      return r = r !== null ? r.childLanes & ~o : 0, n && (r |= pr), r;
    }
    function JE(r, n, o) {
      var s = n.pendingProps,
        f = !1,
        p = (n.flags & 128) !== 0,
        y;
      if ((y = p) || (y = r !== null && r.memoizedState === null ? !1 : (Je.current & 2) !== 0), y && (f = !0, n.flags &= -129), y = (n.flags & 32) !== 0, n.flags &= -33, r === null) {
        if (me) {
          if (f ? fa(n) : pa(n), (r = He) ? (r = wL(r, Er), r !== null && (n.memoizedState = {
            dehydrated: r,
            treeContext: ga !== null ? {
              id: en,
              overflow: tn
            } : null,
            retryLane: 536870912,
            hydrationErrors: null
          }, o = KS(r), o.return = n, n.child = o, bt = n, He = null)) : r = null, r === null) throw Ct(n);
          return Ov(r) ? n.lanes = 32 : n.lanes = 536870912, null;
        }
        var S = s.children;
        return s = s.fallback, f ? (pa(n), f = n.mode, S = Ec({
          mode: "hidden",
          children: S
        }, f), s = ci(s, f, o, null), S.return = n, s.return = n, S.sibling = s, n.child = S, s = n.child, s.memoizedState = Vm(o), s.childLanes = Ym(r, y, o), n.memoizedState = Kv, Ju(null, s)) : (fa(n), Xm(n, S));
      }
      var w = r.memoizedState;
      if (w !== null && (S = w.dehydrated, S !== null)) {
        if (p) n.flags & 256 ? (fa(n), n.flags &= -257, n = Qm(r, n, o)) : n.memoizedState !== null ? (pa(n), n.child = r.child, n.flags |= 128, n = null) : (pa(n), S = s.fallback, f = n.mode, s = Ec({
          mode: "visible",
          children: s.children
        }, f), S = ci(S, f, o, null), S.flags |= 2, s.return = n, S.return = n, s.sibling = S, n.child = s, gi(n, r.child, null, o), s = n.child, s.memoizedState = Vm(o), s.childLanes = Ym(r, y, o), n.memoizedState = Kv, n = Ju(null, s));else if (fa(n), Ov(S)) y = yL(S).digest, s = Error(i(419)), s.stack = "", s.digest = y, ni({
          value: s,
          source: null,
          stack: null
        }), n = Qm(r, n, o);else if (et || qe(r, n, o, !1), y = (o & r.childLanes) !== 0, et || y) {
          if (y = Ce, y !== null && (s = Q(y, o), s !== 0 && s !== w.retryLane)) throw w.retryLane = s, oi(r, s), Ft(y, r, s), Gv;
          Av(S) || Oc(), n = Qm(r, n, o);
        } else Av(S) ? (n.flags |= 192, n.child = r.child, n = null) : (r = w.treeContext, wt && (He = AL(S), bt = n, me = !0, xa = null, Er = !1, r !== null && Zr(n, r)), n = Xm(n, s.children), n.flags |= 4096);
        return n;
      }
      return f ? (pa(n), S = s.fallback, f = n.mode, w = r.child, p = w.sibling, s = Nn(w, {
        mode: "hidden",
        children: s.children
      }), s.subtreeFlags = w.subtreeFlags & 65011712, p !== null ? S = Nn(p, S) : (S = ci(S, f, o, null), S.flags |= 2), S.return = n, s.return = n, s.sibling = S, n.child = s, Ju(null, s), s = n.child, S = r.child.memoizedState, S === null ? S = Vm(o) : (f = S.cachePool, f !== null ? (w = wn ? Fe._currentValue : Fe._currentValue2, f = f.parent !== w ? {
        parent: w,
        pool: w
      } : f) : f = Vb(), S = {
        baseLanes: S.baseLanes | o,
        cachePool: f
      }), s.memoizedState = S, s.childLanes = Ym(r, y, o), n.memoizedState = Kv, Ju(r.child, s)) : (fa(n), o = r.child, r = o.sibling, o = Nn(o, {
        mode: "visible",
        children: s.children
      }), o.return = n, o.sibling = null, r !== null && (y = n.deletions, y === null ? (n.deletions = [r], n.flags |= 16) : y.push(r)), n.child = o, n.memoizedState = null, o);
    }
    function Xm(r, n) {
      return n = Ec({
        mode: "visible",
        children: n
      }, r.mode), n.return = r, r.child = n;
    }
    function Ec(r, n) {
      return r = t(22, r, null, n), r.lanes = 0, r;
    }
    function Qm(r, n, o) {
      return gi(n, r.child, null, o), r = Xm(n, n.pendingProps.children), r.flags |= 2, n.memoizedState = null, r;
    }
    function WE(r, n, o) {
      r.lanes |= n;
      var s = r.alternate;
      s !== null && (s.lanes |= n), ai(r.return, n, o);
    }
    function Zm(r, n, o, s, f, p) {
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
    function $E(r, n, o) {
      var s = n.pendingProps,
        f = s.revealOrder,
        p = s.tail;
      s = s.children;
      var y = Je.current,
        S = (y & 2) !== 0;
      if (S ? (y = y & 1 | 2, n.flags |= 128) : y &= 1, E(Je, y), yt(r, n, s, o), s = me ? ss : 0, !S && r !== null && (r.flags & 128) !== 0) e: for (r = n.child; r !== null;) {
        if (r.tag === 13) r.memoizedState !== null && WE(r, o, n);else if (r.tag === 19) WE(r, o, n);else if (r.child !== null) {
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
          for (o = n.child, f = null; o !== null;) r = o.alternate, r !== null && fc(r) === null && (f = o), o = o.sibling;
          o = f, o === null ? (f = n.child, n.child = null) : (f = o.sibling, o.sibling = null), Zm(n, !1, f, o, p, s);
          break;
        case "backwards":
        case "unstable_legacy-backwards":
          for (o = null, f = n.child, n.child = null; f !== null;) {
            if (r = f.alternate, r !== null && fc(r) === null) {
              n.child = f;
              break;
            }
            r = f.sibling, f.sibling = o, o = f, f = r;
          }
          Zm(n, !0, o, null, p, s);
          break;
        case "together":
          Zm(n, !1, null, null, void 0, s);
          break;
        default:
          n.memoizedState = null;
      }
      return n.child;
    }
    function On(r, n, o) {
      if (r !== null && (n.dependencies = r.dependencies), Sa |= n.lanes, (o & n.childLanes) === 0) if (r !== null) {
        if (qe(r, n, o, !1), (o & n.childLanes) === 0) return null;
      } else return null;
      if (r !== null && n.child !== r.child) throw Error(i(153));
      if (n.child !== null) {
        for (r = n.child, o = Nn(r, r.pendingProps), n.child = o, o.return = n; r.sibling !== null;) r = r.sibling, o = o.sibling = Nn(r, r.pendingProps), o.return = n;
        o.sibling = null;
      }
      return n.child;
    }
    function km(r, n) {
      return (r.lanes & n) !== 0 ? !0 : (r = r.dependencies, !!(r !== null && Ne(r)));
    }
    function cz(r, n, o) {
      switch (n.tag) {
        case 3:
          We(n, n.stateNode.containerInfo), yr(n, Fe, r.memoizedState.cache), _n();
          break;
        case 27:
        case 5:
          Tn(n);
          break;
        case 4:
          We(n, n.stateNode.containerInfo);
          break;
        case 10:
          yr(n, n.type, n.memoizedProps.value);
          break;
        case 31:
          if (n.memoizedState !== null) return n.flags |= 128, Am(n), null;
          break;
        case 13:
          var s = n.memoizedState;
          if (s !== null) return s.dehydrated !== null ? (fa(n), n.flags |= 128, null) : (o & n.child.childLanes) !== 0 ? JE(r, n, o) : (fa(n), r = On(r, n, o), r !== null ? r.sibling : null);
          fa(n);
          break;
        case 19:
          var f = (r.flags & 128) !== 0;
          if (s = (o & n.childLanes) !== 0, s || (qe(r, n, o, !1), s = (o & n.childLanes) !== 0), f) {
            if (s) return $E(r, n, o);
            n.flags |= 128;
          }
          if (f = n.memoizedState, f !== null && (f.rendering = null, f.tail = null, f.lastEffect = null), E(Je, Je.current), s) break;
          return null;
        case 22:
          return n.lanes = 0, VE(r, n, o, n.pendingProps);
        case 24:
          yr(n, Fe, r.memoizedState.cache);
      }
      return On(r, n, o);
    }
    function eS(r, n, o) {
      if (r !== null) {
        if (r.memoizedProps !== n.pendingProps) et = !0;else {
          if (!km(r, o) && (n.flags & 128) === 0) return et = !1, cz(r, n, o);
          et = (r.flags & 131072) !== 0;
        }
      } else et = !1, me && (n.flags & 1048576) !== 0 && j(n, ss, n.index);
      switch (n.lanes = 0, n.tag) {
        case 16:
          e: {
            var s = n.pendingProps;
            if (r = ii(n.elementType), n.type = r, typeof r == "function") dv(r) ? (s = ui(r, s), n.tag = 1, n = ZE(null, n, r, s, o)) : (n.tag = 0, n = Km(null, n, r, s, o));else {
              if (r != null) {
                var f = r.$$typeof;
                if (f === xv) {
                  n.tag = 11, n = FE(null, n, r, s, o);
                  break e;
                } else if (f === Sv) {
                  n.tag = 14, n = GE(null, n, r, s, o);
                  break e;
                }
              }
              throw n = g(r) || r, Error(i(306, n, ""));
            }
          }
          return n;
        case 0:
          return Km(r, n, n.type, n.pendingProps, o);
        case 1:
          return s = n.type, f = ui(s, n.pendingProps), ZE(r, n, s, f, o);
        case 3:
          e: {
            if (We(n, n.stateNode.containerInfo), r === null) throw Error(i(387));
            var p = n.pendingProps;
            f = n.memoizedState, s = f.element, Sm(r, n), Qu(n, p, null, o);
            var y = n.memoizedState;
            if (p = y.cache, yr(n, Fe, p), p !== f.cache && Gu(n, [Fe], o, !0), Xu(), p = y.element, wt && f.isDehydrated) {
              if (f = {
                element: p,
                isDehydrated: !1,
                cache: y.cache
              }, n.updateQueue.baseState = f, n.memoizedState = f, n.flags & 256) {
                n = kE(r, n, p, o);
                break e;
              } else if (p !== s) {
                s = Ie(Error(i(424)), n), ni(s), n = kE(r, n, p, o);
                break e;
              } else for (wt && (He = qL(n.stateNode.containerInfo), bt = n, me = !0, xa = null, Er = !0), o = O1(n, null, p, o), n.child = o; o;) o.flags = o.flags & -3 | 4096, o = o.sibling;
            } else {
              if (_n(), p === s) {
                n = On(r, n, o);
                break e;
              }
              yt(r, n, p, o);
            }
            n = n.child;
          }
          return n;
        case 26:
          if (Ur) return bc(r, n), r === null ? (o = d1(n.type, null, n.pendingProps, null)) ? n.memoizedState = o : me || (n.stateNode = JL(n.type, n.pendingProps, ya.current, n)) : n.memoizedState = d1(n.type, r.memoizedProps, n.pendingProps, r.memoizedState), null;
        case 27:
          if (at) return Tn(n), r === null && at && me && (s = n.stateNode = x1(n.type, n.pendingProps, ya.current, xt.current, !1), bt = n, Er = !0, He = OL(n.type, s, He)), yt(r, n, n.pendingProps.children, o), bc(r, n), r === null && (n.flags |= 4194304), n.child;
        case 5:
          return r === null && me && (QL(n.type, n.pendingProps, xt.current), (f = s = He) && (s = CL(s, n.type, n.pendingProps, Er), s !== null ? (n.stateNode = s, bt = n, He = TL(s), Er = !1, f = !0) : f = !1), f || Ct(n)), Tn(n), f = n.type, p = n.pendingProps, y = r !== null ? r.memoizedProps : null, s = p.children, Mc(f, p) ? s = null : y !== null && Mc(f, y) && (n.flags |= 32), n.memoizedState !== null && (f = Cm(r, n, rz, null, null, o), wn ? pi._currentValue = f : pi._currentValue2 = f), bc(r, n), yt(r, n, s, o), n.child;
        case 6:
          return r === null && me && (ZL(n.pendingProps, xt.current), (r = o = He) && (o = RL(o, n.pendingProps, Er), o !== null ? (n.stateNode = o, bt = n, He = null, r = !0) : r = !1), r || Ct(n)), null;
        case 13:
          return JE(r, n, o);
        case 4:
          return We(n, n.stateNode.containerInfo), s = n.pendingProps, r === null ? n.child = gi(n, null, s, o) : yt(r, n, s, o), n.child;
        case 11:
          return FE(r, n, n.type, n.pendingProps, o);
        case 7:
          return yt(r, n, n.pendingProps, o), n.child;
        case 8:
          return yt(r, n, n.pendingProps.children, o), n.child;
        case 12:
          return yt(r, n, n.pendingProps.children, o), n.child;
        case 10:
          return s = n.pendingProps, yr(n, n.type, s.value), yt(r, n, s.children, o), n.child;
        case 9:
          return f = n.type._context, s = n.pendingProps.children, Ve(n), f = gt(f), s = s(f), n.flags |= 1, yt(r, n, s, o), n.child;
        case 14:
          return GE(r, n, n.type, n.pendingProps, o);
        case 15:
          return KE(r, n, n.type, n.pendingProps, o);
        case 19:
          return $E(r, n, o);
        case 31:
          return lz(r, n, o);
        case 22:
          return VE(r, n, o, n.pendingProps);
        case 24:
          return Ve(n), s = gt(Fe), r === null ? (f = xm(), f === null && (f = Ce, p = gm(), f.pooledCache = p, p.refCount++, p !== null && (f.pooledCacheLanes |= o), f = p), n.memoizedState = {
            parent: s,
            cache: f
          }, Em(n), yr(n, Fe, f)) : ((r.lanes & o) !== 0 && (Sm(r, n), Qu(n, null, null, o), Xu()), f = r.memoizedState, p = n.memoizedState, f.parent !== s ? (f = {
            parent: s,
            cache: s
          }, n.memoizedState = f, n.lanes === 0 && (n.memoizedState = n.updateQueue.baseState = f), yr(n, Fe, s)) : (s = p.cache, yr(n, Fe, s), s !== f.cache && Gu(n, [Fe], o, !0))), yt(r, n, n.pendingProps.children, o), n.child;
        case 29:
          throw n.pendingProps;
      }
      throw Error(i(156, n.tag));
    }
    function Br(r) {
      r.flags |= 4;
    }
    function Sc(r) {
      $r && (r.flags |= 8);
    }
    function tS(r, n) {
      if (r !== null && r.child === n.child) return !1;
      if ((n.flags & 16) !== 0) return !0;
      for (r = n.child; r !== null;) {
        if ((r.flags & 8218) !== 0 || (r.subtreeFlags & 8218) !== 0) return !0;
        r = r.sibling;
      }
      return !1;
    }
    function Jm(r, n, o, s) {
      if (Nt) for (o = n.child; o !== null;) {
        if (o.tag === 5 || o.tag === 6) qv(r, o.stateNode);else if (!(o.tag === 4 || at && o.tag === 27) && o.child !== null) {
          o.child.return = o, o = o.child;
          continue;
        }
        if (o === n) break;
        for (; o.sibling === null;) {
          if (o.return === null || o.return === n) return;
          o = o.return;
        }
        o.sibling.return = o.return, o = o.sibling;
      } else if ($r) for (var f = n.child; f !== null;) {
        if (f.tag === 5) {
          var p = f.stateNode;
          o && s && (p = s1(p, f.type, f.memoizedProps)), qv(r, p);
        } else if (f.tag === 6) p = f.stateNode, o && s && (p = l1(p, f.memoizedProps)), qv(r, p);else if (f.tag !== 4) {
          if (f.tag === 22 && f.memoizedState !== null) p = f.child, p !== null && (p.return = f), Jm(r, f, !0, !0);else if (f.child !== null) {
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
    function rS(r, n, o, s) {
      var f = !1;
      if ($r) for (var p = n.child; p !== null;) {
        if (p.tag === 5) {
          var y = p.stateNode;
          o && s && (y = s1(y, p.type, p.memoizedProps)), o1(r, y);
        } else if (p.tag === 6) y = p.stateNode, o && s && (y = l1(y, p.memoizedProps)), o1(r, y);else if (p.tag !== 4) {
          if (p.tag === 22 && p.memoizedState !== null) f = p.child, f !== null && (f.return = p), rS(r, p, !0, !0), f = !0;else if (p.child !== null) {
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
    function nS(r, n) {
      if ($r && tS(r, n)) {
        r = n.stateNode;
        var o = r.containerInfo,
          s = i1();
        rS(s, n, !1, !1), r.pendingChildren = s, Br(n), gL(o, s);
      }
    }
    function Wm(r, n, o, s) {
      if (Nt) r.memoizedProps !== s && Br(n);else if ($r) {
        var f = r.stateNode,
          p = r.memoizedProps;
        if ((r = tS(r, n)) || p !== s) {
          var y = xt.current;
          p = hL(f, o, p, s, !r, null), p === f ? n.stateNode = f : (Sc(n), e1(p, o, s, y) && Br(n), n.stateNode = p, r && Jm(p, n, !1, !1));
        } else n.stateNode = f;
      }
    }
    function $m(r, n, o, s, f) {
      if ((r.mode & 32) !== 0 && (o === null ? Gz(n, s) : Kz(n, o, s))) {
        if (r.flags |= 16777216, (f & 335544128) === f || _v(n, s)) if (r1(r.stateNode, n, s)) r.flags |= 8192;else if (RS()) r.flags |= 8192;else throw hi = Gc, zv;
      } else r.flags &= -16777217;
    }
    function aS(r, n) {
      if ($L(n)) {
        if (r.flags |= 16777216, !y1(n)) if (RS()) r.flags |= 8192;else throw hi = Gc, zv;
      } else r.flags &= -16777217;
    }
    function Tc(r, n) {
      n !== null && (r.flags |= 4), r.flags & 16384 && (n = r.tag !== 22 ? D() : 536870912, r.lanes |= n, Co |= n);
    }
    function Wu(r, n) {
      if (!me) switch (r.tailMode) {
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
    function we(r) {
      var n = r.alternate !== null && r.alternate.child === r.child,
        o = 0,
        s = 0;
      if (n) for (var f = r.child; f !== null;) o |= f.lanes | f.childLanes, s |= f.subtreeFlags & 65011712, s |= f.flags & 65011712, f.return = r, f = f.sibling;else for (f = r.child; f !== null;) o |= f.lanes | f.childLanes, s |= f.subtreeFlags, s |= f.flags, f.return = r, f = f.sibling;
      return r.subtreeFlags |= s, r.childLanes = o, n;
    }
    function fz(r, n, o) {
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
          return we(n), null;
        case 1:
          return we(n), null;
        case 3:
          return o = n.stateNode, s = null, r !== null && (s = r.memoizedState.cache), n.memoizedState.cache !== s && (n.flags |= 2048), Dr(Fe), nr(), o.pendingContext && (o.context = o.pendingContext, o.pendingContext = null), (r === null || r.child === null) && (qn(n) ? Br(n) : r === null || r.memoizedState.isDehydrated && (n.flags & 256) === 0 || (n.flags |= 1024, Fu())), nS(r, n), we(n), null;
        case 26:
          if (Ur) {
            var f = n.type,
              p = n.memoizedState;
            return r === null ? (Br(n), p !== null ? (we(n), aS(n, p)) : (we(n), $m(n, f, null, s, o))) : p ? p !== r.memoizedState ? (Br(n), we(n), aS(n, p)) : (we(n), n.flags &= -16777217) : (p = r.memoizedProps, Nt ? p !== s && Br(n) : Wm(r, n, f, s), we(n), $m(n, f, p, s, o)), null;
          }
        case 27:
          if (at) {
            if (kr(n), o = ya.current, f = n.type, r !== null && n.stateNode != null) Nt ? r.memoizedProps !== s && Br(n) : Wm(r, n, f, s);else {
              if (!s) {
                if (n.stateNode === null) throw Error(i(166));
                return we(n), null;
              }
              r = xt.current, qn(n) ? tc(n, r) : (r = x1(f, s, o, r, !0), n.stateNode = r, Br(n));
            }
            return we(n), null;
          }
        case 5:
          if (kr(n), f = n.type, r !== null && n.stateNode != null) Wm(r, n, f, s);else {
            if (!s) {
              if (n.stateNode === null) throw Error(i(166));
              return we(n), null;
            }
            if (p = xt.current, qn(n)) tc(n, p), FL(n.stateNode, f, s, p) && (n.flags |= 64);else {
              var y = Iz(f, s, ya.current, p, n);
              Sc(n), Jm(y, n, !1, !1), n.stateNode = y, e1(y, f, s, p) && Br(n);
            }
          }
          return we(n), $m(n, n.type, r === null ? null : r.memoizedProps, n.pendingProps, o), null;
        case 6:
          if (r && n.stateNode != null) o = r.memoizedProps, Nt ? o !== s && Br(n) : $r && (o !== s ? (r = ya.current, o = xt.current, Sc(n), n.stateNode = t1(s, r, o, n)) : n.stateNode = r.stateNode);else {
            if (typeof s != "string" && n.stateNode === null) throw Error(i(166));
            if (r = ya.current, o = xt.current, qn(n)) {
              if (!wt) throw Error(i(176));
              if (r = n.stateNode, o = n.memoizedProps, s = null, f = bt, f !== null) switch (f.tag) {
                case 27:
                case 5:
                  s = f.memoizedProps;
              }
              DL(r, o, n, s) || Ct(n, !0);
            } else Sc(n), n.stateNode = t1(s, r, o, n);
          }
          return we(n), null;
        case 31:
          if (o = n.memoizedState, r === null || r.memoizedState !== null) {
            if (s = qn(n), o !== null) {
              if (r === null) {
                if (!s) throw Error(i(318));
                if (!wt) throw Error(i(556));
                if (r = n.memoizedState, r = r !== null ? r.dehydrated : null, !r) throw Error(i(557));
                BL(r, n);
              } else _n(), (n.flags & 128) === 0 && (n.memoizedState = null), n.flags |= 4;
              we(n), r = !1;
            } else o = Fu(), r !== null && r.memoizedState !== null && (r.memoizedState.hydrationErrors = o), r = !0;
            if (!r) return n.flags & 256 ? (ar(n), n) : (ar(n), null);
            if ((n.flags & 128) !== 0) throw Error(i(558));
          }
          return we(n), null;
        case 13:
          if (s = n.memoizedState, r === null || r.memoizedState !== null && r.memoizedState.dehydrated !== null) {
            if (f = qn(n), s !== null && s.dehydrated !== null) {
              if (r === null) {
                if (!f) throw Error(i(318));
                if (!wt) throw Error(i(344));
                if (f = n.memoizedState, f = f !== null ? f.dehydrated : null, !f) throw Error(i(317));
                IL(f, n);
              } else _n(), (n.flags & 128) === 0 && (n.memoizedState = null), n.flags |= 4;
              we(n), f = !1;
            } else f = Fu(), r !== null && r.memoizedState !== null && (r.memoizedState.hydrationErrors = f), f = !0;
            if (!f) return n.flags & 256 ? (ar(n), n) : (ar(n), null);
          }
          return ar(n), (n.flags & 128) !== 0 ? (n.lanes = o, n) : (o = s !== null, r = r !== null && r.memoizedState !== null, o && (s = n.child, f = null, s.alternate !== null && s.alternate.memoizedState !== null && s.alternate.memoizedState.cachePool !== null && (f = s.alternate.memoizedState.cachePool.pool), p = null, s.memoizedState !== null && s.memoizedState.cachePool !== null && (p = s.memoizedState.cachePool.pool), p !== f && (s.flags |= 2048)), o !== r && o && (n.child.flags |= 8192), Tc(n, n.updateQueue), we(n), null);
        case 4:
          return nr(), nS(r, n), r === null && Lz(n.stateNode.containerInfo), we(n), null;
        case 10:
          return Dr(n.type), we(n), null;
        case 19:
          if (b(Je), s = n.memoizedState, s === null) return we(n), null;
          if (f = (n.flags & 128) !== 0, p = s.rendering, p === null) {
            if (f) Wu(s, !1);else {
              if (Xe !== 0 || r !== null && (r.flags & 128) !== 0) for (r = n.child; r !== null;) {
                if (p = fc(r), p !== null) {
                  for (n.flags |= 128, Wu(s, !1), r = p.updateQueue, n.updateQueue = r, Tc(n, r), n.subtreeFlags = 0, r = o, o = n.child; o !== null;) GS(o, r), o = o.sibling;
                  return E(Je, Je.current & 1 | 2), me && U(n, s.treeForkCount), n.child;
                }
                r = r.sibling;
              }
              s.tail !== null && Gt() > hs && (n.flags |= 128, f = !0, Wu(s, !1), n.lanes = 4194304);
            }
          } else {
            if (!f) if (r = fc(p), r !== null) {
              if (n.flags |= 128, f = !0, r = r.updateQueue, n.updateQueue = r, Tc(n, r), Wu(s, !0), s.tail === null && s.tailMode === "hidden" && !p.alternate && !me) return we(n), null;
            } else 2 * Gt() - s.renderingStartTime > hs && o !== 536870912 && (n.flags |= 128, f = !0, Wu(s, !1), n.lanes = 4194304);
            s.isBackwards ? (p.sibling = n.child, n.child = p) : (r = s.last, r !== null ? r.sibling = p : n.child = p, s.last = p);
          }
          return s.tail !== null ? (r = s.tail, s.rendering = r, s.tail = r.sibling, s.renderingStartTime = Gt(), r.sibling = null, o = Je.current, E(Je, f ? o & 1 | 2 : o & 1), me && U(n, s.treeForkCount), r) : (we(n), null);
        case 22:
        case 23:
          return ar(n), _m(), s = n.memoizedState !== null, r !== null ? r.memoizedState !== null !== s && (n.flags |= 8192) : s && (n.flags |= 8192), s ? (o & 536870912) !== 0 && (n.flags & 128) === 0 && (we(n), n.subtreeFlags & 6 && (n.flags |= 8192)) : we(n), o = n.updateQueue, o !== null && Tc(n, o.retryQueue), o = null, r !== null && r.memoizedState !== null && r.memoizedState.cachePool !== null && (o = r.memoizedState.cachePool.pool), s = null, n.memoizedState !== null && n.memoizedState.cachePool !== null && (s = n.memoizedState.cachePool.pool), s !== o && (n.flags |= 2048), r !== null && b(vi), null;
        case 24:
          return o = null, r !== null && (o = r.memoizedState.cache), n.memoizedState.cache !== o && (n.flags |= 2048), Dr(Fe), we(n), null;
        case 25:
          return null;
        case 30:
          return null;
      }
      throw Error(i(156, n.tag));
    }
    function pz(r, n) {
      switch (L(n), n.tag) {
        case 1:
          return r = n.flags, r & 65536 ? (n.flags = r & -65537 | 128, n) : null;
        case 3:
          return Dr(Fe), nr(), r = n.flags, (r & 65536) !== 0 && (r & 128) === 0 ? (n.flags = r & -65537 | 128, n) : null;
        case 26:
        case 27:
        case 5:
          return kr(n), null;
        case 31:
          if (n.memoizedState !== null) {
            if (ar(n), n.alternate === null) throw Error(i(340));
            _n();
          }
          return r = n.flags, r & 65536 ? (n.flags = r & -65537 | 128, n) : null;
        case 13:
          if (ar(n), r = n.memoizedState, r !== null && r.dehydrated !== null) {
            if (n.alternate === null) throw Error(i(340));
            _n();
          }
          return r = n.flags, r & 65536 ? (n.flags = r & -65537 | 128, n) : null;
        case 19:
          return b(Je), null;
        case 4:
          return nr(), null;
        case 10:
          return Dr(n.type), null;
        case 22:
        case 23:
          return ar(n), _m(), r !== null && b(vi), r = n.flags, r & 65536 ? (n.flags = r & -65537 | 128, n) : null;
        case 24:
          return Dr(Fe), null;
        case 25:
          return null;
        default:
          return null;
      }
    }
    function iS(r, n) {
      switch (L(n), n.tag) {
        case 3:
          Dr(Fe), nr();
          break;
        case 26:
        case 27:
        case 5:
          kr(n);
          break;
        case 4:
          nr();
          break;
        case 31:
          n.memoizedState !== null && ar(n);
          break;
        case 13:
          ar(n);
          break;
        case 19:
          b(Je);
          break;
        case 10:
          Dr(n.type);
          break;
        case 22:
        case 23:
          ar(n), _m(), r !== null && b(vi);
          break;
        case 24:
          Dr(Fe);
      }
    }
    function $u(r, n) {
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
      } catch (S) {
        he(n, n.return, S);
      }
    }
    function da(r, n, o) {
      try {
        var s = n.updateQueue,
          f = s !== null ? s.lastEffect : null;
        if (f !== null) {
          var p = f.next;
          s = p;
          do {
            if ((s.tag & r) === r) {
              var y = s.inst,
                S = y.destroy;
              if (S !== void 0) {
                y.destroy = void 0, f = n;
                var w = o,
                  I = S;
                try {
                  I();
                } catch (K) {
                  he(f, w, K);
                }
              }
            }
            s = s.next;
          } while (s !== p);
        }
      } catch (K) {
        he(n, n.return, K);
      }
    }
    function oS(r) {
      var n = r.updateQueue;
      if (n !== null) {
        var o = r.stateNode;
        try {
          $b(n, o);
        } catch (s) {
          he(r, r.return, s);
        }
      }
    }
    function uS(r, n, o) {
      o.props = ui(r.type, r.memoizedProps), o.state = r.memoizedState;
      try {
        o.componentWillUnmount();
      } catch (s) {
        he(r, n, s);
      }
    }
    function es(r, n) {
      try {
        var o = r.ref;
        if (o !== null) {
          switch (r.tag) {
            case 26:
            case 27:
            case 5:
              var s = as(r.stateNode);
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
        he(r, n, f);
      }
    }
    function Wr(r, n) {
      var o = r.ref,
        s = r.refCleanup;
      if (o !== null) if (typeof s == "function") try {
        s();
      } catch (f) {
        he(r, n, f);
      } finally {
        r.refCleanup = null, r = r.alternate, r != null && (r.refCleanup = null);
      } else if (typeof o == "function") try {
        o(null);
      } catch (f) {
        he(r, n, f);
      } else o.current = null;
    }
    function sS(r) {
      var n = r.type,
        o = r.memoizedProps,
        s = r.stateNode;
      try {
        iL(s, n, o, r);
      } catch (f) {
        he(r, r.return, f);
      }
    }
    function ev(r, n, o) {
      try {
        oL(r.stateNode, r.type, o, n, r);
      } catch (s) {
        he(r, r.return, s);
      }
    }
    function lS(r) {
      return r.tag === 5 || r.tag === 3 || (Ur ? r.tag === 26 : !1) || (at ? r.tag === 27 && fo(r.type) : !1) || r.tag === 4;
    }
    function tv(r) {
      e: for (;;) {
        for (; r.sibling === null;) {
          if (r.return === null || lS(r.return)) return null;
          r = r.return;
        }
        for (r.sibling.return = r.return, r = r.sibling; r.tag !== 5 && r.tag !== 6 && r.tag !== 18;) {
          if (at && r.tag === 27 && fo(r.type) || r.flags & 2 || r.child === null || r.tag === 4) continue e;
          r.child.return = r, r = r.child;
        }
        if (!(r.flags & 2)) return r.stateNode;
      }
    }
    function rv(r, n, o) {
      var s = r.tag;
      if (s === 5 || s === 6) r = r.stateNode, n ? sL(o, r, n) : nL(o, r);else if (s !== 4 && (at && s === 27 && fo(r.type) && (o = r.stateNode, n = null), r = r.child, r !== null)) for (rv(r, n, o), r = r.sibling; r !== null;) rv(r, n, o), r = r.sibling;
    }
    function qc(r, n, o) {
      var s = r.tag;
      if (s === 5 || s === 6) r = r.stateNode, n ? uL(o, r, n) : rL(o, r);else if (s !== 4 && (at && s === 27 && fo(r.type) && (o = r.stateNode), r = r.child, r !== null)) for (qc(r, n, o), r = r.sibling; r !== null;) qc(r, n, o), r = r.sibling;
    }
    function cS(r, n, o) {
      r = r.containerInfo;
      try {
        u1(r, o);
      } catch (s) {
        he(n, n.return, s);
      }
    }
    function fS(r) {
      var n = r.stateNode,
        o = r.memoizedProps;
      try {
        tj(r.type, o, n, r);
      } catch (s) {
        he(r, r.return, s);
      }
    }
    function dz(r, n) {
      for (Dz(r.containerInfo), ft = n; ft !== null;) if (r = ft, n = r.child, (r.subtreeFlags & 1028) !== 0 && n !== null) n.return = r, ft = n;else for (; ft !== null;) {
        r = ft;
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
                var y = ui(s.type, f);
                n = p.getSnapshotBeforeUpdate(y, o), p.__reactInternalSnapshotBeforeUpdate = n;
              } catch (S) {
                he(s, s.return, S);
              }
            }
            break;
          case 3:
            (n & 1024) !== 0 && Nt && vL(r.stateNode.containerInfo);
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
          n.return = r.return, ft = n;
          break;
        }
        ft = r.return;
      }
    }
    function pS(r, n, o) {
      var s = o.flags;
      switch (o.tag) {
        case 0:
        case 11:
        case 15:
          Cn(r, o), s & 4 && $u(5, o);
          break;
        case 1:
          if (Cn(r, o), s & 4) if (r = o.stateNode, n === null) try {
            r.componentDidMount();
          } catch (y) {
            he(o, o.return, y);
          } else {
            var f = ui(o.type, n.memoizedProps);
            n = n.memoizedState;
            try {
              r.componentDidUpdate(f, n, r.__reactInternalSnapshotBeforeUpdate);
            } catch (y) {
              he(o, o.return, y);
            }
          }
          s & 64 && oS(o), s & 512 && es(o, o.return);
          break;
        case 3:
          if (Cn(r, o), s & 64 && (s = o.updateQueue, s !== null)) {
            if (r = null, o.child !== null) switch (o.child.tag) {
              case 27:
              case 5:
                r = as(o.child.stateNode);
                break;
              case 1:
                r = o.child.stateNode;
            }
            try {
              $b(s, r);
            } catch (y) {
              he(o, o.return, y);
            }
          }
          break;
        case 27:
          at && n === null && s & 4 && fS(o);
        case 26:
        case 5:
          if (Cn(r, o), n === null) {
            if (s & 4) sS(o);else if (s & 64) {
              r = o.type, n = o.memoizedProps, f = o.stateNode;
              try {
                zL(f, r, n, o);
              } catch (y) {
                he(o, o.return, y);
              }
            }
          }
          s & 512 && es(o, o.return);
          break;
        case 12:
          Cn(r, o);
          break;
        case 31:
          Cn(r, o), s & 4 && mS(r, o);
          break;
        case 13:
          Cn(r, o), s & 4 && vS(r, o), s & 64 && (s = o.memoizedState, s !== null && (s = s.dehydrated, s !== null && (o = bz.bind(null, o), xL(s, o))));
          break;
        case 22:
          if (s = o.memoizedState !== null || In, !s) {
            n = n !== null && n.memoizedState !== null || tt, f = In;
            var p = tt;
            In = s, (tt = n) && !p ? Rn(r, o, (o.subtreeFlags & 8772) !== 0) : Cn(r, o), In = f, tt = p;
          }
          break;
        case 30:
          break;
        default:
          Cn(r, o);
      }
    }
    function dS(r) {
      var n = r.alternate;
      n !== null && (r.alternate = null, dS(n)), r.child = null, r.deletions = null, r.sibling = null, r.tag === 5 && (n = r.stateNode, n !== null && Fz(n)), r.stateNode = null, r.return = null, r.dependencies = null, r.memoizedProps = null, r.memoizedState = null, r.pendingProps = null, r.stateNode = null, r.updateQueue = null;
    }
    function Ir(r, n, o) {
      for (o = o.child; o !== null;) nv(r, n, o), o = o.sibling;
    }
    function nv(r, n, o) {
      if (sr && typeof sr.onCommitFiberUnmount == "function") try {
        sr.onCommitFiberUnmount(us, o);
      } catch (_unused64) {}
      switch (o.tag) {
        case 26:
          if (Ur) {
            tt || Wr(o, n), Ir(r, n, o), o.memoizedState ? v1(o.memoizedState) : o.stateNode && g1(o.stateNode);
            break;
          }
        case 27:
          if (at) {
            tt || Wr(o, n);
            var s = rt,
              f = Kt;
            fo(o.type) && (rt = o.stateNode, Kt = !1), Ir(r, n, o), b1(o.stateNode), rt = s, Kt = f;
            break;
          }
        case 5:
          tt || Wr(o, n);
        case 6:
          if (Nt) {
            if (s = rt, f = Kt, rt = null, Ir(r, n, o), rt = s, Kt = f, rt !== null) if (Kt) try {
              cL(rt, o.stateNode);
            } catch (p) {
              he(o, n, p);
            } else try {
              lL(rt, o.stateNode);
            } catch (p) {
              he(o, n, p);
            }
          } else Ir(r, n, o);
          break;
        case 18:
          Nt && rt !== null && (Kt ? VL(rt, o.stateNode) : KL(rt, o.stateNode));
          break;
        case 4:
          Nt ? (s = rt, f = Kt, rt = o.stateNode.containerInfo, Kt = !0, Ir(r, n, o), rt = s, Kt = f) : ($r && cS(o.stateNode, o, i1()), Ir(r, n, o));
          break;
        case 0:
        case 11:
        case 14:
        case 15:
          da(2, o, n), tt || da(4, o, n), Ir(r, n, o);
          break;
        case 1:
          tt || (Wr(o, n), s = o.stateNode, typeof s.componentWillUnmount == "function" && uS(o, n, s)), Ir(r, n, o);
          break;
        case 21:
          Ir(r, n, o);
          break;
        case 22:
          tt = (s = tt) || o.memoizedState !== null, Ir(r, n, o), tt = s;
          break;
        default:
          Ir(r, n, o);
      }
    }
    function mS(r, n) {
      if (wt && n.memoizedState === null && (r = n.alternate, r !== null && (r = r.memoizedState, r !== null))) {
        r = r.dehydrated;
        try {
          jL(r);
        } catch (o) {
          he(n, n.return, o);
        }
      }
    }
    function vS(r, n) {
      if (wt && n.memoizedState === null && (r = n.alternate, r !== null && (r = r.memoizedState, r !== null && (r = r.dehydrated, r !== null)))) try {
        HL(r);
      } catch (o) {
        he(n, n.return, o);
      }
    }
    function mz(r) {
      switch (r.tag) {
        case 31:
        case 13:
        case 19:
          var n = r.stateNode;
          return n === null && (n = r.stateNode = new N1()), n;
        case 22:
          return r = r.stateNode, n = r._retryCache, n === null && (n = r._retryCache = new N1()), n;
        default:
          throw Error(i(435, r.tag));
      }
    }
    function _c(r, n) {
      var o = mz(r);
      n.forEach(function (s) {
        if (!o.has(s)) {
          o.add(s);
          var f = Ez.bind(null, r, s);
          s.then(f, f);
        }
      });
    }
    function Rt(r, n) {
      var o = n.deletions;
      if (o !== null) for (var s = 0; s < o.length; s++) {
        var f = o[s],
          p = r,
          y = n;
        if (Nt) {
          var S = y;
          e: for (; S !== null;) {
            switch (S.tag) {
              case 27:
                if (at) {
                  if (fo(S.type)) {
                    rt = S.stateNode, Kt = !1;
                    break e;
                  }
                  break;
                }
              case 5:
                rt = S.stateNode, Kt = !1;
                break e;
              case 3:
              case 4:
                rt = S.stateNode.containerInfo, Kt = !0;
                break e;
            }
            S = S.return;
          }
          if (rt === null) throw Error(i(160));
          nv(p, y, f), rt = null, Kt = !1;
        } else nv(p, y, f);
        p = f.alternate, p !== null && (p.return = null), f.return = null;
      }
      if (n.subtreeFlags & 13886) for (n = n.child; n !== null;) hS(n, r), n = n.sibling;
    }
    function hS(r, n) {
      var o = r.alternate,
        s = r.flags;
      switch (r.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Rt(n, r), It(r), s & 4 && (da(3, r, r.return), $u(3, r), da(5, r, r.return));
          break;
        case 1:
          Rt(n, r), It(r), s & 512 && (tt || o === null || Wr(o, o.return)), s & 64 && In && (r = r.updateQueue, r !== null && (s = r.callbacks, s !== null && (o = r.shared.hiddenCallbacks, r.shared.hiddenCallbacks = o === null ? s : o.concat(s))));
          break;
        case 26:
          if (Ur) {
            var f = zr;
            if (Rt(n, r), It(r), s & 512 && (tt || o === null || Wr(o, o.return)), s & 4) {
              s = o !== null ? o.memoizedState : null;
              var p = r.memoizedState;
              o === null ? p === null ? r.stateNode === null ? r.stateNode = kL(f, r.type, r.memoizedProps, r) : h1(f, r.type, r.stateNode) : r.stateNode = m1(f, p, r.memoizedProps) : s !== p ? (s === null ? o.stateNode !== null && g1(o.stateNode) : v1(s), p === null ? h1(f, r.type, r.stateNode) : m1(f, p, r.memoizedProps)) : p === null && r.stateNode !== null && ev(r, r.memoizedProps, o.memoizedProps);
            }
            break;
          }
        case 27:
          if (at) {
            Rt(n, r), It(r), s & 512 && (tt || o === null || Wr(o, o.return)), o !== null && s & 4 && ev(r, r.memoizedProps, o.memoizedProps);
            break;
          }
        case 5:
          if (Rt(n, r), It(r), s & 512 && (tt || o === null || Wr(o, o.return)), Nt) {
            if (r.flags & 32) {
              f = r.stateNode;
              try {
                a1(f);
              } catch (H) {
                he(r, r.return, H);
              }
            }
            s & 4 && r.stateNode != null && (f = r.memoizedProps, ev(r, f, o !== null ? o.memoizedProps : f)), s & 1024 && (Vv = !0);
          } else $r && r.alternate !== null && (r.alternate.stateNode = r.stateNode);
          break;
        case 6:
          if (Rt(n, r), It(r), s & 4 && Nt) {
            if (r.stateNode === null) throw Error(i(162));
            s = r.memoizedProps, o = o !== null ? o.memoizedProps : s, f = r.stateNode;
            try {
              aL(f, o, s);
            } catch (H) {
              he(r, r.return, H);
            }
          }
          break;
        case 3:
          if (Ur ? (WL(), f = zr, zr = Cv(n.containerInfo), Rt(n, r), zr = f) : Rt(n, r), It(r), s & 4) {
            if (Nt && wt && o !== null && o.memoizedState.isDehydrated) try {
              LL(n.containerInfo);
            } catch (H) {
              he(r, r.return, H);
            }
            if ($r) {
              s = n.containerInfo, o = n.pendingChildren;
              try {
                u1(s, o);
              } catch (H) {
                he(r, r.return, H);
              }
            }
          }
          Vv && (Vv = !1, gS(r));
          break;
        case 4:
          Ur ? (o = zr, zr = Cv(r.stateNode.containerInfo), Rt(n, r), It(r), zr = o) : (Rt(n, r), It(r)), s & 4 && $r && cS(r.stateNode, r, r.stateNode.pendingChildren);
          break;
        case 12:
          Rt(n, r), It(r);
          break;
        case 31:
          Rt(n, r), It(r), s & 4 && (s = r.updateQueue, s !== null && (r.updateQueue = null, _c(r, s)));
          break;
        case 13:
          Rt(n, r), It(r), r.child.flags & 8192 && r.memoizedState !== null != (o !== null && o.memoizedState !== null) && (Wc = Gt()), s & 4 && (s = r.updateQueue, s !== null && (r.updateQueue = null, _c(r, s)));
          break;
        case 22:
          f = r.memoizedState !== null;
          var y = o !== null && o.memoizedState !== null,
            S = In,
            w = tt;
          if (In = S || f, tt = w || y, Rt(n, r), tt = w, In = S, It(r), s & 8192 && (n = r.stateNode, n._visibility = f ? n._visibility & -2 : n._visibility | 1, f && (o === null || y || In || tt || si(r)), Nt)) {
            e: if (o = null, Nt) for (n = r;;) {
              if (n.tag === 5 || Ur && n.tag === 26) {
                if (o === null) {
                  y = o = n;
                  try {
                    p = y.stateNode, f ? fL(p) : dL(y.stateNode, y.memoizedProps);
                  } catch (H) {
                    he(y, y.return, H);
                  }
                }
              } else if (n.tag === 6) {
                if (o === null) {
                  y = n;
                  try {
                    var I = y.stateNode;
                    f ? pL(I) : mL(I, y.memoizedProps);
                  } catch (H) {
                    he(y, y.return, H);
                  }
                }
              } else if (n.tag === 18) {
                if (o === null) {
                  y = n;
                  try {
                    var K = y.stateNode;
                    f ? YL(K) : XL(y.stateNode);
                  } catch (H) {
                    he(y, y.return, H);
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
          s & 4 && (s = r.updateQueue, s !== null && (o = s.retryQueue, o !== null && (s.retryQueue = null, _c(r, o))));
          break;
        case 19:
          Rt(n, r), It(r), s & 4 && (s = r.updateQueue, s !== null && (r.updateQueue = null, _c(r, s)));
          break;
        case 30:
          break;
        case 21:
          break;
        default:
          Rt(n, r), It(r);
      }
    }
    function It(r) {
      var n = r.flags;
      if (n & 2) {
        try {
          for (var o, s = r.return; s !== null;) {
            if (lS(s)) {
              o = s;
              break;
            }
            s = s.return;
          }
          if (Nt) {
            if (o == null) throw Error(i(160));
            switch (o.tag) {
              case 27:
                if (at) {
                  var f = o.stateNode,
                    p = tv(r);
                  qc(r, p, f);
                  break;
                }
              case 5:
                var y = o.stateNode;
                o.flags & 32 && (a1(y), o.flags &= -33);
                var S = tv(r);
                qc(r, S, y);
                break;
              case 3:
              case 4:
                var w = o.stateNode.containerInfo,
                  I = tv(r);
                rv(r, I, w);
                break;
              default:
                throw Error(i(161));
            }
          }
        } catch (K) {
          he(r, r.return, K);
        }
        r.flags &= -3;
      }
      n & 4096 && (r.flags &= -4097);
    }
    function gS(r) {
      if (r.subtreeFlags & 1024) for (r = r.child; r !== null;) {
        var n = r;
        gS(n), n.tag === 5 && n.flags & 1024 && Xz(n.stateNode), r = r.sibling;
      }
    }
    function Cn(r, n) {
      if (n.subtreeFlags & 8772) for (n = n.child; n !== null;) pS(r, n.alternate, n), n = n.sibling;
    }
    function si(r) {
      for (r = r.child; r !== null;) {
        var n = r;
        switch (n.tag) {
          case 0:
          case 11:
          case 14:
          case 15:
            da(4, n, n.return), si(n);
            break;
          case 1:
            Wr(n, n.return);
            var o = n.stateNode;
            typeof o.componentWillUnmount == "function" && uS(n, n.return, o), si(n);
            break;
          case 27:
            at && b1(n.stateNode);
          case 26:
          case 5:
            Wr(n, n.return), si(n);
            break;
          case 22:
            n.memoizedState === null && si(n);
            break;
          case 30:
            si(n);
            break;
          default:
            si(n);
        }
        r = r.sibling;
      }
    }
    function Rn(r, n, o) {
      for (o = o && (n.subtreeFlags & 8772) !== 0, n = n.child; n !== null;) {
        var s = n.alternate,
          f = r,
          p = n,
          y = p.flags;
        switch (p.tag) {
          case 0:
          case 11:
          case 15:
            Rn(f, p, o), $u(4, p);
            break;
          case 1:
            if (Rn(f, p, o), s = p, f = s.stateNode, typeof f.componentDidMount == "function") try {
              f.componentDidMount();
            } catch (I) {
              he(s, s.return, I);
            }
            if (s = p, f = s.updateQueue, f !== null) {
              var S = s.stateNode;
              try {
                var w = f.shared.hiddenCallbacks;
                if (w !== null) for (f.shared.hiddenCallbacks = null, f = 0; f < w.length; f++) Wb(w[f], S);
              } catch (I) {
                he(s, s.return, I);
              }
            }
            o && y & 64 && oS(p), es(p, p.return);
            break;
          case 27:
            at && fS(p);
          case 26:
          case 5:
            Rn(f, p, o), o && s === null && y & 4 && sS(p), es(p, p.return);
            break;
          case 12:
            Rn(f, p, o);
            break;
          case 31:
            Rn(f, p, o), o && y & 4 && mS(f, p);
            break;
          case 13:
            Rn(f, p, o), o && y & 4 && vS(f, p);
            break;
          case 22:
            p.memoizedState === null && Rn(f, p, o), es(p, p.return);
            break;
          case 30:
            break;
          default:
            Rn(f, p, o);
        }
        n = n.sibling;
      }
    }
    function av(r, n) {
      var o = null;
      r !== null && r.memoizedState !== null && r.memoizedState.cachePool !== null && (o = r.memoizedState.cachePool.pool), r = null, n.memoizedState !== null && n.memoizedState.cachePool !== null && (r = n.memoizedState.cachePool.pool), r !== o && (r != null && r.refCount++, o != null && Ku(o));
    }
    function iv(r, n) {
      r = null, n.alternate !== null && (r = n.alternate.memoizedState.cache), n = n.memoizedState.cache, n !== r && (n.refCount++, r != null && Ku(r));
    }
    function Pr(r, n, o, s) {
      if (n.subtreeFlags & 10256) for (n = n.child; n !== null;) yS(r, n, o, s), n = n.sibling;
    }
    function yS(r, n, o, s) {
      var f = n.flags;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          Pr(r, n, o, s), f & 2048 && $u(9, n);
          break;
        case 1:
          Pr(r, n, o, s);
          break;
        case 3:
          Pr(r, n, o, s), f & 2048 && (r = null, n.alternate !== null && (r = n.alternate.memoizedState.cache), n = n.memoizedState.cache, n !== r && (n.refCount++, r != null && Ku(r)));
          break;
        case 12:
          if (f & 2048) {
            Pr(r, n, o, s), r = n.stateNode;
            try {
              var p = n.memoizedProps,
                y = p.id,
                S = p.onPostCommit;
              typeof S == "function" && S(y, n.alternate === null ? "mount" : "update", r.passiveEffectDuration, -0);
            } catch (w) {
              he(n, n.return, w);
            }
          } else Pr(r, n, o, s);
          break;
        case 31:
          Pr(r, n, o, s);
          break;
        case 13:
          Pr(r, n, o, s);
          break;
        case 23:
          break;
        case 22:
          p = n.stateNode, y = n.alternate, n.memoizedState !== null ? p._visibility & 2 ? Pr(r, n, o, s) : ts(r, n) : p._visibility & 2 ? Pr(r, n, o, s) : (p._visibility |= 2, io(r, n, o, s, (n.subtreeFlags & 10256) !== 0 || !1)), f & 2048 && av(y, n);
          break;
        case 24:
          Pr(r, n, o, s), f & 2048 && iv(n.alternate, n);
          break;
        default:
          Pr(r, n, o, s);
      }
    }
    function io(r, n, o, s, f) {
      for (f = f && ((n.subtreeFlags & 10256) !== 0 || !1), n = n.child; n !== null;) {
        var p = r,
          y = n,
          S = o,
          w = s,
          I = y.flags;
        switch (y.tag) {
          case 0:
          case 11:
          case 15:
            io(p, y, S, w, f), $u(8, y);
            break;
          case 23:
            break;
          case 22:
            var K = y.stateNode;
            y.memoizedState !== null ? K._visibility & 2 ? io(p, y, S, w, f) : ts(p, y) : (K._visibility |= 2, io(p, y, S, w, f)), f && I & 2048 && av(y.alternate, y);
            break;
          case 24:
            io(p, y, S, w, f), f && I & 2048 && iv(y.alternate, y);
            break;
          default:
            io(p, y, S, w, f);
        }
        n = n.sibling;
      }
    }
    function ts(r, n) {
      if (n.subtreeFlags & 10256) for (n = n.child; n !== null;) {
        var o = r,
          s = n,
          f = s.flags;
        switch (s.tag) {
          case 22:
            ts(o, s), f & 2048 && av(s.alternate, s);
            break;
          case 24:
            ts(o, s), f & 2048 && iv(s.alternate, s);
            break;
          default:
            ts(o, s);
        }
        n = n.sibling;
      }
    }
    function li(r, n, o) {
      if (r.subtreeFlags & Ao) for (r = r.child; r !== null;) xS(r, n, o), r = r.sibling;
    }
    function xS(r, n, o) {
      switch (r.tag) {
        case 26:
          if (li(r, n, o), r.flags & Ao) if (r.memoizedState !== null) ej(o, zr, r.memoizedState, r.memoizedProps);else {
            var s = r.stateNode,
              f = r.type;
            r = r.memoizedProps, ((n & 335544128) === n || _v(f, r)) && n1(o, s, f, r);
          }
          break;
        case 5:
          li(r, n, o), r.flags & Ao && (s = r.stateNode, f = r.type, r = r.memoizedProps, ((n & 335544128) === n || _v(f, r)) && n1(o, s, f, r));
          break;
        case 3:
        case 4:
          Ur ? (s = zr, zr = Cv(r.stateNode.containerInfo), li(r, n, o), zr = s) : li(r, n, o);
          break;
        case 22:
          r.memoizedState === null && (s = r.alternate, s !== null && s.memoizedState !== null ? (s = Ao, Ao = 16777216, li(r, n, o), Ao = s) : li(r, n, o));
          break;
        default:
          li(r, n, o);
      }
    }
    function bS(r) {
      var n = r.alternate;
      if (n !== null && (r = n.child, r !== null)) {
        n.child = null;
        do n = r.sibling, r.sibling = null, r = n; while (r !== null);
      }
    }
    function rs(r) {
      var n = r.deletions;
      if ((r.flags & 16) !== 0) {
        if (n !== null) for (var o = 0; o < n.length; o++) {
          var s = n[o];
          ft = s, SS(s, r);
        }
        bS(r);
      }
      if (r.subtreeFlags & 10256) for (r = r.child; r !== null;) ES(r), r = r.sibling;
    }
    function ES(r) {
      switch (r.tag) {
        case 0:
        case 11:
        case 15:
          rs(r), r.flags & 2048 && da(9, r, r.return);
          break;
        case 3:
          rs(r);
          break;
        case 12:
          rs(r);
          break;
        case 22:
          var n = r.stateNode;
          r.memoizedState !== null && n._visibility & 2 && (r.return === null || r.return.tag !== 13) ? (n._visibility &= -3, Ac(r)) : rs(r);
          break;
        default:
          rs(r);
      }
    }
    function Ac(r) {
      var n = r.deletions;
      if ((r.flags & 16) !== 0) {
        if (n !== null) for (var o = 0; o < n.length; o++) {
          var s = n[o];
          ft = s, SS(s, r);
        }
        bS(r);
      }
      for (r = r.child; r !== null;) {
        switch (n = r, n.tag) {
          case 0:
          case 11:
          case 15:
            da(8, n, n.return), Ac(n);
            break;
          case 22:
            o = n.stateNode, o._visibility & 2 && (o._visibility &= -3, Ac(n));
            break;
          default:
            Ac(n);
        }
        r = r.sibling;
      }
    }
    function SS(r, n) {
      for (; ft !== null;) {
        var o = ft;
        switch (o.tag) {
          case 0:
          case 11:
          case 15:
            da(8, o, n);
            break;
          case 23:
          case 22:
            if (o.memoizedState !== null && o.memoizedState.cachePool !== null) {
              var s = o.memoizedState.cachePool.pool;
              s != null && s.refCount++;
            }
            break;
          case 24:
            Ku(o.memoizedState.cache);
        }
        if (s = o.child, s !== null) s.return = o, ft = s;else e: for (o = r; ft !== null;) {
          s = ft;
          var f = s.sibling,
            p = s.return;
          if (dS(s), s === o) {
            ft = null;
            break e;
          }
          if (f !== null) {
            f.return = p, ft = f;
            break e;
          }
          ft = p;
        }
      }
    }
    function ov(r) {
      var n = zz(r);
      if (n != null) {
        if (typeof n.memoizedProps["data-testname"] != "string") throw Error(i(364));
        return n;
      }
      if (r = kz(r), r === null) throw Error(i(362));
      return r.stateNode.current;
    }
    function uv(r, n) {
      var o = r.tag;
      switch (n.$$typeof) {
        case Xc:
          if (r.type === n.value) return !0;
          break;
        case Qc:
          e: {
            for (n = n.value, r = [r, 0], o = 0; o < r.length;) {
              var s = r[o++],
                f = s.tag,
                p = r[o++],
                y = n[p];
              if (f !== 5 && f !== 26 && f !== 27 || !os(s)) {
                for (; y != null && uv(s, y);) p++, y = n[p];
                if (p === n.length) {
                  n = !0;
                  break e;
                } else for (s = s.child; s !== null;) r.push(s, p), s = s.sibling;
              }
            }
            n = !1;
          }
          return n;
        case Zc:
          if ((o === 5 || o === 26 || o === 27) && $z(r.stateNode, n.value)) return !0;
          break;
        case Jc:
          if ((o === 5 || o === 6 || o === 26 || o === 27) && (r = Wz(r), r !== null && 0 <= r.indexOf(n.value))) return !0;
          break;
        case kc:
          if ((o === 5 || o === 26 || o === 27) && (r = r.memoizedProps["data-testname"], typeof r == "string" && r.toLowerCase() === n.value.toLowerCase())) return !0;
          break;
        default:
          throw Error(i(365));
      }
      return !1;
    }
    function sv(r) {
      switch (r.$$typeof) {
        case Xc:
          return "<" + (g(r.value) || "Unknown") + ">";
        case Qc:
          return ":has(" + (sv(r) || "") + ")";
        case Zc:
          return '[role="' + r.value + '"]';
        case Jc:
          return '"' + r.value + '"';
        case kc:
          return '[data-testname="' + r.value + '"]';
        default:
          throw Error(i(365));
      }
    }
    function TS(r, n) {
      var o = [];
      r = [r, 0];
      for (var s = 0; s < r.length;) {
        var f = r[s++],
          p = f.tag,
          y = r[s++],
          S = n[y];
        if (p !== 5 && p !== 26 && p !== 27 || !os(f)) {
          for (; S != null && uv(f, S);) y++, S = n[y];
          if (y === n.length) o.push(f);else for (f = f.child; f !== null;) r.push(f, y), f = f.sibling;
        }
      }
      return o;
    }
    function lv(r, n) {
      if (!is) throw Error(i(363));
      r = ov(r), r = TS(r, n), n = [], r = Array.from(r);
      for (var o = 0; o < r.length;) {
        var s = r[o++],
          f = s.tag;
        if (f === 5 || f === 26 || f === 27) os(s) || n.push(s.stateNode);else for (s = s.child; s !== null;) r.push(s), s = s.sibling;
      }
      return n;
    }
    function ir() {
      return (fe & 2) !== 0 && de !== 0 ? de & -de : $.T !== null ? ym() : jz();
    }
    function qS() {
      if (pr === 0) if ((de & 536870912) === 0 || me) {
        var r = Bc;
        Bc <<= 1, (Bc & 3932160) === 0 && (Bc = 262144), pr = r;
      } else pr = 536870912;
      return r = cr.current, r !== null && (r.flags |= 32), pr;
    }
    function Ft(r, n, o) {
      (r === Ce && (Te === 2 || Te === 9) || r.cancelPendingCommit !== null) && (oo(r, 0), ma(r, de, pr, !1)), G(r, o), ((fe & 2) === 0 || r !== Ce) && (r === Ce && ((fe & 2) === 0 && (xi |= o), Xe === 4 && ma(r, de, pr, !1)), Jr(r));
    }
    function _S(r, n, o) {
      if ((fe & 6) !== 0) throw Error(i(327));
      var s = !o && (n & 127) === 0 && (n & r.expiredLanes) === 0 || T(r, n),
        f = s ? gz(r, n) : fv(r, n, !0),
        p = s;
      do {
        if (f === 0) {
          Oo && !s && ma(r, n, 0, !1);
          break;
        } else {
          if (o = r.current.alternate, p && !vz(o)) {
            f = fv(r, n, !1), p = !1;
            continue;
          }
          if (f === 2) {
            if (p = n, r.errorRecoveryDisabledLanes & p) var y = 0;else y = r.pendingLanes & -536870913, y = y !== 0 ? y : y & 536870912 ? 536870912 : 0;
            if (y !== 0) {
              n = y;
              e: {
                var S = r;
                f = vs;
                var w = wt && S.current.memoizedState.isDehydrated;
                if (w && (oo(S, y).flags |= 256), y = fv(S, y, !1), y !== 2) {
                  if (Yv && !w) {
                    S.errorRecoveryDisabledLanes |= p, xi |= p, f = 4;
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
            oo(r, 0), ma(r, n, 0, !0);
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
                ma(s, n, pr, !Ea);
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
            if ((n & 62914560) === n && (f = Wc + 300 - Gt(), 10 < f)) {
              if (ma(s, n, pr, !Ea), O(s, 0, !0) !== 0) break e;
              Un = n, s.timeoutHandle = Pz(AS.bind(null, s, o, Vt, $c, Qv, n, pr, xi, Co, Ea, p, "Throttled", -0, 0), f);
              break e;
            }
            AS(s, o, Vt, $c, Qv, n, pr, xi, Co, Ea, p, null, -0, 0);
          }
        }
        break;
      } while (!0);
      Jr(r);
    }
    function AS(r, n, o, s, f, p, y, S, w, I, K, H, Y, oe) {
      if (r.timeoutHandle = fi, H = n.subtreeFlags, H & 8192 || (H & 16785408) === 16785408) {
        H = Vz(), xS(n, p, H);
        var Et = (p & 62914560) === p ? Wc - Gt() : (p & 4194048) === p ? w1 - Gt() : 0;
        if (Et = Yz(H, Et), Et !== null) {
          Un = p, r.cancelPendingCommit = Et(IS.bind(null, r, n, p, o, s, f, y, S, w, K, H, null, Y, oe)), ma(r, p, y, !I);
          return;
        }
      }
      IS(r, n, p, o, s, f, y, S, w);
    }
    function vz(r) {
      for (var n = r;;) {
        var o = n.tag;
        if ((o === 0 || o === 11 || o === 15) && n.flags & 16384 && (o = n.updateQueue, o !== null && (o = o.stores, o !== null))) for (var s = 0; s < o.length; s++) {
          var f = o[s],
            p = f.getSnapshot;
          f = f.value;
          try {
            if (!lr(p(), f)) return !1;
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
    function ma(r, n, o, s) {
      n &= ~Xv, n &= ~xi, r.suspendedLanes |= n, r.pingedLanes &= ~n, s && (r.warmLanes |= n), s = r.expirationTimes;
      for (var f = n; 0 < f;) {
        var p = 31 - ur(f),
          y = 1 << p;
        s[p] = -1, f &= ~y;
      }
      o !== 0 && te(r, o, n);
    }
    function OS() {
      return (fe & 6) === 0 ? (no(0, !1), !1) : !0;
    }
    function cv() {
      if (pe !== null) {
        if (Te === 0) var r = pe.return;else r = pe, Dn = di = null, wm(r), Eo = null, fs = 0, r = pe;
        for (; r !== null;) iS(r.alternate, r), r = r.return;
        pe = null;
      }
    }
    function oo(r, n) {
      var o = r.timeoutHandle;
      o !== fi && (r.timeoutHandle = fi, Uz(o)), o = r.cancelPendingCommit, o !== null && (r.cancelPendingCommit = null, o()), Un = 0, cv(), Ce = r, pe = o = Nn(r.current, null), de = n, Te = 0, fr = null, Ea = !1, Oo = T(r, n), Yv = !1, Co = pr = Xv = xi = Sa = Xe = 0, Vt = vs = null, Qv = !1, (n & 8) !== 0 && (n |= n & 32);
      var s = r.entangledLanes;
      if (s !== 0) for (r = r.entanglements, s &= n; 0 < s;) {
        var f = 31 - ur(s),
          p = 1 << f;
        n |= r[f], s &= ~p;
      }
      return Pn = n, sc(), o;
    }
    function CS(r, n) {
      se = null, $.H = ds, n === bo || n === Fc ? (n = Qb(), Te = 3) : n === zv ? (n = Qb(), Te = 4) : Te = n === Gv ? 8 : n !== null && _typeof(n) == "object" && typeof n.then == "function" ? 6 : 1, fr = n, pe === null && (Xe = 1, yc(r, Ie(n, r.current)));
    }
    function RS() {
      var r = cr.current;
      return r === null ? !0 : (de & 4194048) === de ? Tr === null : (de & 62914560) === de || (de & 536870912) !== 0 ? r === Tr : !1;
    }
    function NS() {
      var r = $.H;
      return $.H = ds, r === null ? ds : r;
    }
    function wS() {
      var r = $.A;
      return $.A = vj, r;
    }
    function Oc() {
      Xe = 4, Ea || (de & 4194048) !== de && cr.current !== null || (Oo = !0), (Sa & 134217727) === 0 && (xi & 134217727) === 0 || Ce === null || ma(Ce, de, pr, !1);
    }
    function fv(r, n, o) {
      var s = fe;
      fe |= 2;
      var f = NS(),
        p = wS();
      (Ce !== r || de !== n) && ($c = null, oo(r, n)), n = !1;
      var y = Xe;
      e: do try {
        if (Te !== 0 && pe !== null) {
          var S = pe,
            w = fr;
          switch (Te) {
            case 8:
              cv(), y = 6;
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              cr.current === null && (n = !0);
              var I = Te;
              if (Te = 0, fr = null, uo(r, S, w, I), o && Oo) {
                y = 0;
                break e;
              }
              break;
            default:
              I = Te, Te = 0, fr = null, uo(r, S, w, I);
          }
        }
        hz(), y = Xe;
        break;
      } catch (K) {
        CS(r, K);
      } while (!0);
      return n && r.shellSuspendCounter++, Dn = di = null, fe = s, $.H = f, $.A = p, pe === null && (Ce = null, de = 0, sc()), y;
    }
    function hz() {
      for (; pe !== null;) MS(pe);
    }
    function gz(r, n) {
      var o = fe;
      fe |= 2;
      var s = NS(),
        f = wS();
      Ce !== r || de !== n ? ($c = null, hs = Gt() + 500, oo(r, n)) : Oo = T(r, n);
      e: do try {
        if (Te !== 0 && pe !== null) {
          n = pe;
          var p = fr;
          t: switch (Te) {
            case 1:
              Te = 0, fr = null, uo(r, n, p, 1);
              break;
            case 2:
            case 9:
              if (Yb(p)) {
                Te = 0, fr = null, DS(n);
                break;
              }
              n = function n() {
                Te !== 2 && Te !== 9 || Ce !== r || (Te = 7), Jr(r);
              }, p.then(n, n);
              break e;
            case 3:
              Te = 7;
              break e;
            case 4:
              Te = 5;
              break e;
            case 7:
              Yb(p) ? (Te = 0, fr = null, DS(n)) : (Te = 0, fr = null, uo(r, n, p, 7));
              break;
            case 5:
              var y = null;
              switch (pe.tag) {
                case 26:
                  y = pe.memoizedState;
                case 5:
                case 27:
                  var S = pe,
                    w = S.type,
                    I = S.pendingProps;
                  if (y ? y1(y) : r1(S.stateNode, w, I)) {
                    Te = 0, fr = null;
                    var K = S.sibling;
                    if (K !== null) pe = K;else {
                      var H = S.return;
                      H !== null ? (pe = H, Cc(H)) : pe = null;
                    }
                    break t;
                  }
              }
              Te = 0, fr = null, uo(r, n, p, 5);
              break;
            case 6:
              Te = 0, fr = null, uo(r, n, p, 6);
              break;
            case 8:
              cv(), Xe = 6;
              break e;
            default:
              throw Error(i(462));
          }
        }
        yz();
        break;
      } catch (Y) {
        CS(r, Y);
      } while (!0);
      return Dn = di = null, $.H = s, $.A = f, fe = o, pe !== null ? 0 : (Ce = null, de = 0, sc(), Xe);
    }
    function yz() {
      for (; pe !== null && !aj();) MS(pe);
    }
    function MS(r) {
      var n = eS(r.alternate, r, Pn);
      r.memoizedProps = r.pendingProps, n === null ? Cc(r) : pe = n;
    }
    function DS(r) {
      var n = r,
        o = n.alternate;
      switch (n.tag) {
        case 15:
        case 0:
          n = QE(o, n, n.pendingProps, n.type, void 0, de);
          break;
        case 11:
          n = QE(o, n, n.pendingProps, n.type.render, n.ref, de);
          break;
        case 5:
          wm(n);
        default:
          iS(o, n), n = pe = GS(n, Pn), n = eS(o, n, Pn);
      }
      r.memoizedProps = r.pendingProps, n === null ? Cc(r) : pe = n;
    }
    function uo(r, n, o, s) {
      Dn = di = null, wm(n), Eo = null, fs = 0;
      var f = n.return;
      try {
        if (sz(r, f, n, o, de)) {
          Xe = 1, yc(r, Ie(o, r.current)), pe = null;
          return;
        }
      } catch (p) {
        if (f !== null) throw pe = f, p;
        Xe = 1, yc(r, Ie(o, r.current)), pe = null;
        return;
      }
      n.flags & 32768 ? (me || s === 1 ? r = !0 : Oo || (de & 536870912) !== 0 ? r = !1 : (Ea = r = !0, (s === 2 || s === 9 || s === 3 || s === 6) && (s = cr.current, s !== null && s.tag === 13 && (s.flags |= 16384))), BS(n, r)) : Cc(n);
    }
    function Cc(r) {
      var n = r;
      do {
        if ((n.flags & 32768) !== 0) {
          BS(n, Ea);
          return;
        }
        r = n.return;
        var o = fz(n.alternate, n, Pn);
        if (o !== null) {
          pe = o;
          return;
        }
        if (n = n.sibling, n !== null) {
          pe = n;
          return;
        }
        pe = n = r;
      } while (n !== null);
      Xe === 0 && (Xe = 5);
    }
    function BS(r, n) {
      do {
        var o = pz(r.alternate, r);
        if (o !== null) {
          o.flags &= 32767, pe = o;
          return;
        }
        if (o = r.return, o !== null && (o.flags |= 32768, o.subtreeFlags = 0, o.deletions = null), !n && (r = r.sibling, r !== null)) {
          pe = r;
          return;
        }
        pe = r = o;
      } while (r !== null);
      Xe = 6, pe = null;
    }
    function IS(r, n, o, s, f, p, y, S, w) {
      r.cancelPendingCommit = null;
      do ns(); while (it !== 0);
      if ((fe & 6) !== 0) throw Error(i(327));
      if (n !== null) {
        if (n === r.current) throw Error(i(177));
        if (p = n.lanes | n.childLanes, p |= Lv, V(r, o, p, y, S, w), r === Ce && (pe = Ce = null, de = 0), Ro = n, qa = r, Un = o, Zv = p, kv = f, M1 = s, (n.subtreeFlags & 10256) !== 0 || (n.flags & 10256) !== 0 ? (r.callbackNode = null, r.callbackPriority = 0, Sz(wv, function () {
          return jS(), null;
        })) : (r.callbackNode = null, r.callbackPriority = 0), s = (n.flags & 13878) !== 0, (n.subtreeFlags & 13878) !== 0 || s) {
          s = $.T, $.T = null, f = Mn(), ct(2), y = fe, fe |= 4;
          try {
            dz(r, n, o);
          } finally {
            fe = y, ct(f), $.T = s;
          }
        }
        it = 1, PS(), US(), zS();
      }
    }
    function PS() {
      if (it === 1) {
        it = 0;
        var r = qa,
          n = Ro,
          o = (n.flags & 13878) !== 0;
        if ((n.subtreeFlags & 13878) !== 0 || o) {
          o = $.T, $.T = null;
          var s = Mn();
          ct(2);
          var f = fe;
          fe |= 4;
          try {
            hS(n, r), Bz(r.containerInfo);
          } finally {
            fe = f, ct(s), $.T = o;
          }
        }
        r.current = n, it = 2;
      }
    }
    function US() {
      if (it === 2) {
        it = 0;
        var r = qa,
          n = Ro,
          o = (n.flags & 8772) !== 0;
        if ((n.subtreeFlags & 8772) !== 0 || o) {
          o = $.T, $.T = null;
          var s = Mn();
          ct(2);
          var f = fe;
          fe |= 4;
          try {
            pS(r, n.alternate, n);
          } finally {
            fe = f, ct(s), $.T = o;
          }
        }
        it = 3;
      }
    }
    function zS() {
      if (it === 4 || it === 3) {
        it = 0, ij();
        var r = qa,
          n = Ro,
          o = Un,
          s = M1;
        (n.subtreeFlags & 10256) !== 0 || (n.flags & 10256) !== 0 ? it = 5 : (it = 0, Ro = qa = null, LS(r, r.pendingLanes));
        var f = r.pendingLanes;
        if (f === 0 && (Ta = null), X(o), n = n.stateNode, sr && typeof sr.onCommitFiberRoot == "function") try {
          sr.onCommitFiberRoot(us, n, void 0, (n.current.flags & 128) === 128);
        } catch (_unused66) {}
        if (s !== null) {
          n = $.T, f = Mn(), ct(2), $.T = null;
          try {
            for (var p = r.onRecoverableError, y = 0; y < s.length; y++) {
              var S = s[y];
              p(S.value, {
                componentStack: S.stack
              });
            }
          } finally {
            $.T = n, ct(f);
          }
        }
        (Un & 3) !== 0 && ns(), Jr(r), f = r.pendingLanes, (o & 261930) !== 0 && (f & 42) !== 0 ? r === Jv ? gs++ : (gs = 0, Jv = r) : gs = 0, wt && GL(), no(0, !1);
      }
    }
    function LS(r, n) {
      (r.pooledCacheLanes &= n) === 0 && (n = r.pooledCache, n != null && (r.pooledCache = null, Ku(n)));
    }
    function ns() {
      return PS(), US(), zS(), jS();
    }
    function jS() {
      if (it !== 5) return !1;
      var r = qa,
        n = Zv;
      Zv = 0;
      var o = X(Un),
        s = 32 > o ? 32 : o;
      o = $.T;
      var f = Mn();
      try {
        ct(s), $.T = null, s = kv, kv = null;
        var p = qa,
          y = Un;
        if (it = 0, Ro = qa = null, Un = 0, (fe & 6) !== 0) throw Error(i(331));
        var S = fe;
        if (fe |= 4, ES(p.current), yS(p, p.current, y, s), fe = S, no(0, !1), sr && typeof sr.onPostCommitFiberRoot == "function") try {
          sr.onPostCommitFiberRoot(us, p);
        } catch (_unused67) {}
        return !0;
      } finally {
        ct(f), $.T = o, LS(r, n);
      }
    }
    function HS(r, n, o) {
      n = Ie(o, n), n = Gm(r.stateNode, n, 2), r = ca(r, n, 2), r !== null && (G(r, 2), Jr(r));
    }
    function he(r, n, o) {
      if (r.tag === 3) HS(r, r, o);else for (; n !== null;) {
        if (n.tag === 3) {
          HS(n, r, o);
          break;
        } else if (n.tag === 1) {
          var s = n.stateNode;
          if (typeof n.type.getDerivedStateFromError == "function" || typeof s.componentDidCatch == "function" && (Ta === null || !Ta.has(s))) {
            r = Ie(o, r), o = jE(2), s = ca(n, o, 2), s !== null && (HE(o, s, n, r), G(s, 2), Jr(s));
            break;
          }
        }
        n = n.return;
      }
    }
    function pv(r, n, o) {
      var s = r.pingCache;
      if (s === null) {
        s = r.pingCache = new hj();
        var f = new Set();
        s.set(n, f);
      } else f = s.get(n), f === void 0 && (f = new Set(), s.set(n, f));
      f.has(o) || (Yv = !0, f.add(o), r = xz.bind(null, r, n, o), n.then(r, r));
    }
    function xz(r, n, o) {
      var s = r.pingCache;
      s !== null && s.delete(n), r.pingedLanes |= r.suspendedLanes & o, r.warmLanes &= ~o, Ce === r && (de & o) === o && (Xe === 4 || Xe === 3 && (de & 62914560) === de && 300 > Gt() - Wc ? (fe & 2) === 0 && oo(r, 0) : Xv |= o, Co === de && (Co = 0)), Jr(r);
    }
    function FS(r, n) {
      n === 0 && (n = D()), r = oi(r, n), r !== null && (G(r, n), Jr(r));
    }
    function bz(r) {
      var n = r.memoizedState,
        o = 0;
      n !== null && (o = n.retryLane), FS(r, o);
    }
    function Ez(r, n) {
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
      s !== null && s.delete(n), FS(r, o);
    }
    function Sz(r, n) {
      return Pc(r, n);
    }
    function Tz(r, n, o, s) {
      this.tag = r, this.key = o, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = n, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = s, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
    }
    function dv(r) {
      return r = r.prototype, !(!r || !r.isReactComponent);
    }
    function Nn(r, n) {
      var o = r.alternate;
      return o === null ? (o = t(r.tag, n, r.key, r.mode), o.elementType = r.elementType, o.type = r.type, o.stateNode = r.stateNode, o.alternate = r, r.alternate = o) : (o.pendingProps = n, o.type = r.type, o.flags = 0, o.subtreeFlags = 0, o.deletions = null), o.flags = r.flags & 65011712, o.childLanes = r.childLanes, o.lanes = r.lanes, o.child = r.child, o.memoizedProps = r.memoizedProps, o.memoizedState = r.memoizedState, o.updateQueue = r.updateQueue, n = r.dependencies, o.dependencies = n === null ? null : {
        lanes: n.lanes,
        firstContext: n.firstContext
      }, o.sibling = r.sibling, o.index = r.index, o.ref = r.ref, o.refCleanup = r.refCleanup, o;
    }
    function GS(r, n) {
      r.flags &= 65011714;
      var o = r.alternate;
      return o === null ? (r.childLanes = 0, r.lanes = n, r.child = null, r.subtreeFlags = 0, r.memoizedProps = null, r.memoizedState = null, r.updateQueue = null, r.dependencies = null, r.stateNode = null) : (r.childLanes = o.childLanes, r.lanes = o.lanes, r.child = o.child, r.subtreeFlags = 0, r.deletions = null, r.memoizedProps = o.memoizedProps, r.memoizedState = o.memoizedState, r.updateQueue = o.updateQueue, r.type = o.type, n = o.dependencies, r.dependencies = n === null ? null : {
        lanes: n.lanes,
        firstContext: n.firstContext
      }), r;
    }
    function Rc(r, n, o, s, f, p) {
      var y = 0;
      if (s = r, typeof r == "function") dv(r) && (y = 1);else if (typeof r == "string") y = Ur && at ? p1(r, o, xt.current) ? 26 : E1(r) ? 27 : 5 : Ur ? p1(r, o, xt.current) ? 26 : 5 : at && E1(r) ? 27 : 5;else e: switch (r) {
        case Tv:
          return r = t(31, o, n, f), r.elementType = Tv, r.lanes = p, r;
        case lo:
          return ci(o.children, f, p, n);
        case kS:
          y = 8, f |= 24;
          break;
        case yv:
          return r = t(12, o, n, f | 2), r.elementType = yv, r.lanes = p, r;
        case bv:
          return r = t(13, o, n, f), r.elementType = bv, r.lanes = p, r;
        case Ev:
          return r = t(19, o, n, f), r.elementType = Ev, r.lanes = p, r;
        default:
          if (_typeof(r) == "object" && r !== null) switch (r.$$typeof) {
            case va:
              y = 10;
              break e;
            case JS:
              y = 9;
              break e;
            case xv:
              y = 11;
              break e;
            case Sv:
              y = 14;
              break e;
            case ha:
              y = 16, s = null;
              break e;
          }
          y = 29, o = Error(i(130, r === null ? "null" : _typeof(r), "")), s = null;
      }
      return n = t(y, o, n, f), n.elementType = r, n.type = s, n.lanes = p, n;
    }
    function ci(r, n, o, s) {
      return r = t(7, r, s, n), r.lanes = o, r;
    }
    function mv(r, n, o) {
      return r = t(6, r, null, n), r.lanes = o, r;
    }
    function KS(r) {
      var n = t(18, null, null, 0);
      return n.stateNode = r, n;
    }
    function vv(r, n, o) {
      return n = t(4, r.children !== null ? r.children : [], r.key, n), n.lanes = o, n.stateNode = {
        containerInfo: r.containerInfo,
        pendingChildren: null,
        implementation: r.implementation
      }, n;
    }
    function qz(r, n, o, s, f, p, y, S, w) {
      this.tag = 1, this.containerInfo = r, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = fi, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = B(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = B(0), this.hiddenUpdates = B(null), this.identifierPrefix = s, this.onUncaughtError = f, this.onCaughtError = p, this.onRecoverableError = y, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = w, this.incompleteTransitions = new Map();
    }
    function VS(r, n, o, s, f, p, y, S, w, I, K, H) {
      return r = new qz(r, n, o, y, w, I, K, H, S), n = 1, p === !0 && (n |= 24), p = t(3, null, null, n), r.current = p, p.stateNode = r, n = gm(), n.refCount++, r.pooledCache = n, n.refCount++, p.memoizedState = {
        element: s,
        isDehydrated: o,
        cache: n
      }, Em(p), r;
    }
    function YS(r) {
      return r ? (r = mo, r) : mo;
    }
    function XS(r) {
      var n = r._reactInternals;
      if (n === void 0) throw typeof r.render == "function" ? Error(i(188)) : (r = Object.keys(r).join(","), Error(i(268, r)));
      return r = c(n), r = r !== null ? d(r) : null, r === null ? null : as(r.stateNode);
    }
    function QS(r, n, o, s, f, p) {
      f = YS(f), s.context === null ? s.context = f : s.pendingContext = f, s = la(n), s.payload = {
        element: o
      }, p = p === void 0 ? null : p, p !== null && (s.callback = p), o = ca(r, s, n), o !== null && (Ft(o, r, n), Yu(o, r, n));
    }
    function ZS(r, n) {
      if (r = r.memoizedState, r !== null && r.dehydrated !== null) {
        var o = r.retryLane;
        r.retryLane = o !== 0 && o < n ? o : n;
      }
    }
    function hv(r, n) {
      ZS(r, n), (r = r.alternate) && ZS(r, n);
    }
    var ce = {},
      _z = _t(),
      or = BU(),
      gv = Object.assign,
      Az = Symbol.for("react.element"),
      Nc = Symbol.for("react.transitional.element"),
      so = Symbol.for("react.portal"),
      lo = Symbol.for("react.fragment"),
      kS = Symbol.for("react.strict_mode"),
      yv = Symbol.for("react.profiler"),
      JS = Symbol.for("react.consumer"),
      va = Symbol.for("react.context"),
      xv = Symbol.for("react.forward_ref"),
      bv = Symbol.for("react.suspense"),
      Ev = Symbol.for("react.suspense_list"),
      Sv = Symbol.for("react.memo"),
      ha = Symbol.for("react.lazy"),
      Tv = Symbol.for("react.activity"),
      Oz = Symbol.for("react.memo_cache_sentinel"),
      WS = Symbol.iterator,
      Cz = Symbol.for("react.client.reference"),
      wc = Array.isArray,
      $ = _z.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
      Rz = e.rendererVersion,
      Nz = e.rendererPackageName,
      $S = e.extraDevToolsConfig,
      as = e.getPublicInstance,
      wz = e.getRootHostContext,
      Mz = e.getChildHostContext,
      Dz = e.prepareForCommit,
      Bz = e.resetAfterCommit,
      Iz = e.createInstance;
    e.cloneMutableInstance;
    var qv = e.appendInitialChild,
      e1 = e.finalizeInitialChildren,
      Mc = e.shouldSetTextContent,
      t1 = e.createTextInstance;
    e.cloneMutableTextInstance;
    var Pz = e.scheduleTimeout,
      Uz = e.cancelTimeout,
      fi = e.noTimeout,
      wn = e.isPrimaryRenderer;
    e.warnsIfNotActing;
    var Nt = e.supportsMutation,
      $r = e.supportsPersistence,
      wt = e.supportsHydration,
      zz = e.getInstanceFromNode;
    e.beforeActiveInstanceBlur;
    var Lz = e.preparePortalMount;
    e.prepareScopeUpdate, e.getInstanceFromScope;
    var ct = e.setCurrentUpdatePriority,
      Mn = e.getCurrentUpdatePriority,
      jz = e.resolveUpdatePriority;
    e.trackSchedulerEvent, e.resolveEventType, e.resolveEventTimeStamp;
    var Hz = e.shouldAttemptEagerTransition,
      Fz = e.detachDeletedInstance;
    e.requestPostPaintCallback;
    var Gz = e.maySuspendCommit,
      Kz = e.maySuspendCommitOnUpdate,
      _v = e.maySuspendCommitInSyncRender,
      r1 = e.preloadInstance,
      Vz = e.startSuspendingCommit,
      n1 = e.suspendInstance;
    e.suspendOnActiveViewTransition;
    var Yz = e.waitForCommitToBeReady;
    e.getSuspendedCommitReason;
    var co = e.NotPendingTransition,
      pi = e.HostTransitionContext,
      Xz = e.resetFormInstance;
    e.bindToConsole;
    var Qz = e.supportsMicrotasks,
      Zz = e.scheduleMicrotask,
      is = e.supportsTestSelectors,
      kz = e.findFiberRoot,
      Jz = e.getBoundingRect,
      Wz = e.getTextContent,
      os = e.isHiddenSubtree,
      $z = e.matchAccessibilityRole,
      eL = e.setFocusIfFocusable,
      tL = e.setupIntersectionObserver,
      rL = e.appendChild,
      nL = e.appendChildToContainer,
      aL = e.commitTextUpdate,
      iL = e.commitMount,
      oL = e.commitUpdate,
      uL = e.insertBefore,
      sL = e.insertInContainerBefore,
      lL = e.removeChild,
      cL = e.removeChildFromContainer,
      a1 = e.resetTextContent,
      fL = e.hideInstance,
      pL = e.hideTextInstance,
      dL = e.unhideInstance,
      mL = e.unhideTextInstance;
    e.cancelViewTransitionName, e.cancelRootViewTransitionName, e.restoreRootViewTransitionName, e.cloneRootViewTransitionContainer, e.removeRootViewTransitionClone, e.measureClonedInstance, e.hasInstanceChanged, e.hasInstanceAffectedParent, e.startViewTransition, e.startGestureTransition, e.stopViewTransition, e.getCurrentGestureOffset, e.createViewTransitionInstance;
    var vL = e.clearContainer;
    e.createFragmentInstance, e.updateFragmentInstanceFiber, e.commitNewChildToFragmentInstance, e.deleteChildFromFragmentInstance;
    var hL = e.cloneInstance,
      i1 = e.createContainerChildSet,
      o1 = e.appendChildToContainerChildSet,
      gL = e.finalizeContainerChildren,
      u1 = e.replaceContainerChildren,
      s1 = e.cloneHiddenInstance,
      l1 = e.cloneHiddenTextInstance,
      Av = e.isSuspenseInstancePending,
      Ov = e.isSuspenseInstanceFallback,
      yL = e.getSuspenseInstanceFallbackErrorDetails,
      xL = e.registerSuspenseInstanceRetry,
      bL = e.canHydrateFormStateMarker,
      EL = e.isFormStateMarkerMatching,
      c1 = e.getNextHydratableSibling,
      SL = e.getNextHydratableSiblingAfterSingleton,
      TL = e.getFirstHydratableChild,
      qL = e.getFirstHydratableChildWithinContainer,
      _L = e.getFirstHydratableChildWithinActivityInstance,
      AL = e.getFirstHydratableChildWithinSuspenseInstance,
      OL = e.getFirstHydratableChildWithinSingleton,
      CL = e.canHydrateInstance,
      RL = e.canHydrateTextInstance,
      NL = e.canHydrateActivityInstance,
      wL = e.canHydrateSuspenseInstance,
      ML = e.hydrateInstance,
      DL = e.hydrateTextInstance,
      BL = e.hydrateActivityInstance,
      IL = e.hydrateSuspenseInstance,
      PL = e.getNextHydratableInstanceAfterActivityInstance,
      UL = e.getNextHydratableInstanceAfterSuspenseInstance,
      zL = e.commitHydratedInstance,
      LL = e.commitHydratedContainer,
      jL = e.commitHydratedActivityInstance,
      HL = e.commitHydratedSuspenseInstance,
      FL = e.finalizeHydratedChildren,
      GL = e.flushHydrationEvents;
    e.clearActivityBoundary;
    var KL = e.clearSuspenseBoundary;
    e.clearActivityBoundaryFromContainer;
    var VL = e.clearSuspenseBoundaryFromContainer,
      YL = e.hideDehydratedBoundary,
      XL = e.unhideDehydratedBoundary,
      f1 = e.shouldDeleteUnhydratedTailInstances;
    e.diffHydratedPropsForDevWarnings, e.diffHydratedTextForDevWarnings, e.describeHydratableInstanceForDevWarnings;
    var QL = e.validateHydratableInstance,
      ZL = e.validateHydratableTextInstance,
      Ur = e.supportsResources,
      p1 = e.isHostHoistableType,
      Cv = e.getHoistableRoot,
      d1 = e.getResource,
      m1 = e.acquireResource,
      v1 = e.releaseResource,
      kL = e.hydrateHoistable,
      h1 = e.mountHoistable,
      g1 = e.unmountHoistable,
      JL = e.createHoistableInstance,
      WL = e.prepareToCommitHoistables,
      $L = e.mayResourceSuspendCommit,
      y1 = e.preloadResource,
      ej = e.suspendResource,
      at = e.supportsSingletons,
      x1 = e.resolveSingletonInstance,
      tj = e.acquireSingletonInstance,
      b1 = e.releaseSingletonInstance,
      E1 = e.isHostSingletonType,
      fo = e.isSingletonScope,
      Rv = [],
      po = -1,
      mo = {},
      ur = Math.clz32 ? Math.clz32 : A,
      rj = Math.log,
      nj = Math.LN2,
      Dc = 256,
      Bc = 262144,
      Ic = 4194304,
      Pc = or.unstable_scheduleCallback,
      Nv = or.unstable_cancelCallback,
      aj = or.unstable_shouldYield,
      ij = or.unstable_requestPaint,
      Gt = or.unstable_now,
      S1 = or.unstable_ImmediatePriority,
      oj = or.unstable_UserBlockingPriority,
      wv = or.unstable_NormalPriority,
      uj = or.unstable_IdlePriority,
      sj = or.log,
      lj = or.unstable_setDisableYieldValue,
      us = null,
      sr = null,
      lr = typeof Object.is == "function" ? Object.is : ve,
      T1 = typeof reportError == "function" ? reportError : function (r) {
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
      cj = Object.prototype.hasOwnProperty,
      Mv,
      q1,
      Dv = !1,
      _1 = new WeakMap(),
      vo = [],
      ho = 0,
      Uc = null,
      ss = 0,
      xr = [],
      br = 0,
      ga = null,
      en = 1,
      tn = "",
      xt = x(null),
      ls = x(null),
      ya = x(null),
      zc = x(null),
      bt = null,
      He = null,
      me = !1,
      xa = null,
      Er = !1,
      Bv = Error(i(519)),
      Lc = x(null),
      di = null,
      Dn = null,
      fj = (typeof AbortController === "undefined" ? "undefined" : _typeof(AbortController)) < "u" ? AbortController : function () {
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
      pj = or.unstable_scheduleCallback,
      dj = or.unstable_NormalPriority,
      Fe = {
        $$typeof: va,
        Consumer: null,
        Provider: null,
        _currentValue: null,
        _currentValue2: null,
        _threadCount: 0
      },
      jc = null,
      go = null,
      Iv = !1,
      Hc = !1,
      Pv = !1,
      mi = 0,
      cs = null,
      Uv = 0,
      yo = 0,
      xo = null,
      A1 = $.S;
    $.S = function (r, n) {
      w1 = Gt(), _typeof(n) == "object" && n !== null && typeof n.then == "function" && ez(r, n), A1 !== null && A1(r, n);
    };
    var vi = x(null),
      bo = Error(i(460)),
      zv = Error(i(474)),
      Fc = Error(i(542)),
      Gc = {
        then: function then() {}
      },
      hi = null,
      Eo = null,
      fs = 0,
      gi = kb(!0),
      O1 = kb(!1),
      Sr = [],
      So = 0,
      Lv = 0,
      ba = !1,
      jv = !1,
      To = x(null),
      Kc = x(0),
      cr = x(null),
      Tr = null,
      Je = x(0),
      Bn = 0,
      se = null,
      _e = null,
      $e = null,
      Vc = !1,
      qo = !1,
      yi = !1,
      Yc = 0,
      ps = 0,
      _o = null,
      mj = 0,
      ds = {
        readContext: gt,
        use: dc,
        useCallback: Ye,
        useContext: Ye,
        useEffect: Ye,
        useImperativeHandle: Ye,
        useLayoutEffect: Ye,
        useInsertionEffect: Ye,
        useMemo: Ye,
        useReducer: Ye,
        useRef: Ye,
        useState: Ye,
        useDebugValue: Ye,
        useDeferredValue: Ye,
        useTransition: Ye,
        useSyncExternalStore: Ye,
        useId: Ye,
        useHostTransitionStatus: Ye,
        useFormState: Ye,
        useActionState: Ye,
        useOptimistic: Ye,
        useMemoCache: Ye,
        useCacheRefresh: Ye
      };
    ds.useEffectEvent = Ye;
    var C1 = {
        readContext: gt,
        use: dc,
        useCallback: function useCallback(r, n) {
          return Bt().memoizedState = [r, n === void 0 ? null : n], r;
        },
        useContext: gt,
        useEffect: EE,
        useImperativeHandle: function useImperativeHandle(r, n, o) {
          o = o != null ? o.concat([r]) : null, vc(4194308, 4, _E.bind(null, n, r), o);
        },
        useLayoutEffect: function useLayoutEffect(r, n) {
          return vc(4194308, 4, r, n);
        },
        useInsertionEffect: function useInsertionEffect(r, n) {
          vc(4, 2, r, n);
        },
        useMemo: function useMemo(r, n) {
          var o = Bt();
          n = n === void 0 ? null : n;
          var s = r();
          if (yi) {
            le(!0);
            try {
              r();
            } finally {
              le(!1);
            }
          }
          return o.memoizedState = [s, n], s;
        },
        useReducer: function useReducer(r, n, o) {
          var s = Bt();
          if (o !== void 0) {
            var f = o(n);
            if (yi) {
              le(!0);
              try {
                o(n);
              } finally {
                le(!1);
              }
            }
          } else f = n;
          return s.memoizedState = s.baseState = f, r = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: r,
            lastRenderedState: f
          }, s.queue = r, r = r.dispatch = uz.bind(null, se, r), [s.memoizedState, r];
        },
        useRef: function useRef(r) {
          var n = Bt();
          return r = {
            current: r
          }, n.memoizedState = r;
        },
        useState: function useState(r) {
          r = Im(r);
          var n = r.queue,
            o = BE.bind(null, se, n);
          return n.dispatch = o, [r.memoizedState, o];
        },
        useDebugValue: zm,
        useDeferredValue: function useDeferredValue(r, n) {
          var o = Bt();
          return Lm(o, r, n);
        },
        useTransition: function useTransition() {
          var r = Im(!1);
          return r = NE.bind(null, se, r.queue, !0, !1), Bt().memoizedState = r, [!1, r];
        },
        useSyncExternalStore: function useSyncExternalStore(r, n, o) {
          var s = se,
            f = Bt();
          if (me) {
            if (o === void 0) throw Error(i(407));
            o = o();
          } else {
            if (o = n(), Ce === null) throw Error(i(349));
            (de & 127) !== 0 || iE(s, n, o);
          }
          f.memoizedState = o;
          var p = {
            value: o,
            getSnapshot: n
          };
          return f.queue = p, EE(uE.bind(null, s, p, r), [r]), s.flags |= 2048, ao(9, {
            destroy: void 0
          }, oE.bind(null, s, p, o, n), null), o;
        },
        useId: function useId() {
          var r = Bt(),
            n = Ce.identifierPrefix;
          if (me) {
            var o = tn,
              s = en;
            o = (s & ~(1 << 32 - ur(s) - 1)).toString(32) + o, n = "_" + n + "R_" + o, o = Yc++, 0 < o && (n += "H" + o.toString(32)), n += "_";
          } else o = mj++, n = "_" + n + "r_" + o.toString(32) + "_";
          return r.memoizedState = n;
        },
        useHostTransitionStatus: jm,
        useFormState: hE,
        useActionState: hE,
        useOptimistic: function useOptimistic(r) {
          var n = Bt();
          n.memoizedState = n.baseState = r;
          var o = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: null,
            lastRenderedState: null
          };
          return n.queue = o, n = Hm.bind(null, se, !0, o), o.dispatch = n, [r, n];
        },
        useMemoCache: Mm,
        useCacheRefresh: function useCacheRefresh() {
          return Bt().memoizedState = oz.bind(null, se);
        },
        useEffectEvent: function useEffectEvent(r) {
          var n = Bt(),
            o = {
              impl: r
            };
          return n.memoizedState = o, function () {
            if ((fe & 2) !== 0) throw Error(i(440));
            return o.impl.apply(void 0, arguments);
          };
        }
      },
      Hv = {
        readContext: gt,
        use: dc,
        useCallback: OE,
        useContext: gt,
        useEffect: Um,
        useImperativeHandle: AE,
        useInsertionEffect: TE,
        useLayoutEffect: qE,
        useMemo: CE,
        useReducer: mc,
        useRef: bE,
        useState: function useState() {
          return mc(An);
        },
        useDebugValue: zm,
        useDeferredValue: function useDeferredValue(r, n) {
          var o = ke();
          return RE(o, _e.memoizedState, r, n);
        },
        useTransition: function useTransition() {
          var r = mc(An)[0],
            n = ke().memoizedState;
          return [typeof r == "boolean" ? r : Zu(r), n];
        },
        useSyncExternalStore: aE,
        useId: ME,
        useHostTransitionStatus: jm,
        useFormState: gE,
        useActionState: gE,
        useOptimistic: function useOptimistic(r, n) {
          var o = ke();
          return cE(o, _e, r, n);
        },
        useMemoCache: Mm,
        useCacheRefresh: DE
      };
    Hv.useEffectEvent = SE;
    var R1 = {
      readContext: gt,
      use: dc,
      useCallback: OE,
      useContext: gt,
      useEffect: Um,
      useImperativeHandle: AE,
      useInsertionEffect: TE,
      useLayoutEffect: qE,
      useMemo: CE,
      useReducer: Bm,
      useRef: bE,
      useState: function useState() {
        return Bm(An);
      },
      useDebugValue: zm,
      useDeferredValue: function useDeferredValue(r, n) {
        var o = ke();
        return _e === null ? Lm(o, r, n) : RE(o, _e.memoizedState, r, n);
      },
      useTransition: function useTransition() {
        var r = Bm(An)[0],
          n = ke().memoizedState;
        return [typeof r == "boolean" ? r : Zu(r), n];
      },
      useSyncExternalStore: aE,
      useId: ME,
      useHostTransitionStatus: jm,
      useFormState: xE,
      useActionState: xE,
      useOptimistic: function useOptimistic(r, n) {
        var o = ke();
        return _e !== null ? cE(o, _e, r, n) : (o.baseState = r, [r, o.queue.dispatch]);
      },
      useMemoCache: Mm,
      useCacheRefresh: DE
    };
    R1.useEffectEvent = SE;
    var Fv = {
        enqueueSetState: function enqueueSetState(r, n, o) {
          r = r._reactInternals;
          var s = ir(),
            f = la(s);
          f.payload = n, o != null && (f.callback = o), n = ca(r, f, s), n !== null && (Ft(n, r, s), Yu(n, r, s));
        },
        enqueueReplaceState: function enqueueReplaceState(r, n, o) {
          r = r._reactInternals;
          var s = ir(),
            f = la(s);
          f.tag = 1, f.payload = n, o != null && (f.callback = o), n = ca(r, f, s), n !== null && (Ft(n, r, s), Yu(n, r, s));
        },
        enqueueForceUpdate: function enqueueForceUpdate(r, n) {
          r = r._reactInternals;
          var o = ir(),
            s = la(o);
          s.tag = 2, n != null && (s.callback = n), n = ca(r, s, o), n !== null && (Ft(n, r, o), Yu(n, r, o));
        }
      },
      Gv = Error(i(461)),
      et = !1,
      Kv = {
        dehydrated: null,
        treeContext: null,
        retryLane: 0,
        hydrationErrors: null
      },
      In = !1,
      tt = !1,
      Vv = !1,
      N1 = typeof WeakSet == "function" ? WeakSet : Set,
      ft = null,
      rt = null,
      Kt = !1,
      zr = null,
      Ao = 8192,
      vj = {
        getCacheForType: function getCacheForType(r) {
          var n = gt(Fe),
            o = n.data.get(r);
          return o === void 0 && (o = r(), n.data.set(r, o)), o;
        },
        cacheSignal: function cacheSignal() {
          return gt(Fe).controller.signal;
        }
      },
      Xc = 0,
      Qc = 1,
      Zc = 2,
      kc = 3,
      Jc = 4;
    if (typeof Symbol == "function" && Symbol.for) {
      var ms = Symbol.for;
      Xc = ms("selector.component"), Qc = ms("selector.has_pseudo_class"), Zc = ms("selector.role"), kc = ms("selector.test_id"), Jc = ms("selector.text");
    }
    var hj = typeof WeakMap == "function" ? WeakMap : Map,
      fe = 0,
      Ce = null,
      pe = null,
      de = 0,
      Te = 0,
      fr = null,
      Ea = !1,
      Oo = !1,
      Yv = !1,
      Pn = 0,
      Xe = 0,
      Sa = 0,
      xi = 0,
      Xv = 0,
      pr = 0,
      Co = 0,
      vs = null,
      Vt = null,
      Qv = !1,
      Wc = 0,
      w1 = 0,
      hs = 1 / 0,
      $c = null,
      Ta = null,
      it = 0,
      qa = null,
      Ro = null,
      Un = 0,
      Zv = 0,
      kv = null,
      M1 = null,
      gs = 0,
      Jv = null;
    return ce.attemptContinuousHydration = function (r) {
      if (r.tag === 13 || r.tag === 31) {
        var n = oi(r, 67108864);
        n !== null && Ft(n, r, 67108864), hv(r, 67108864);
      }
    }, ce.attemptHydrationAtCurrentPriority = function (r) {
      if (r.tag === 13 || r.tag === 31) {
        var n = ir();
        n = Z(n);
        var o = oi(r, n);
        o !== null && Ft(o, r, n), hv(r, n);
      }
    }, ce.attemptSynchronousHydration = function (r) {
      switch (r.tag) {
        case 3:
          if (r = r.stateNode, r.current.memoizedState.isDehydrated) {
            var n = C(r.pendingLanes);
            if (n !== 0) {
              for (r.pendingLanes |= 2, r.entangledLanes |= 2; n;) {
                var o = 1 << 31 - ur(n);
                r.entanglements[1] |= o, n &= ~o;
              }
              Jr(r), (fe & 6) === 0 && (hs = Gt() + 500, no(0, !1));
            }
          }
          break;
        case 31:
        case 13:
          n = oi(r, 2), n !== null && Ft(n, r, 2), OS(), hv(r, 2);
      }
    }, ce.batchedUpdates = function (r, n) {
      return r(n);
    }, ce.createComponentSelector = function (r) {
      return {
        $$typeof: Xc,
        value: r
      };
    }, ce.createContainer = function (r, n, o, s, f, p, y, S, w, I) {
      return VS(r, n, !1, null, o, s, p, null, y, S, w, I);
    }, ce.createHasPseudoClassSelector = function (r) {
      return {
        $$typeof: Qc,
        value: r
      };
    }, ce.createHydrationContainer = function (r, n, o, s, f, p, y, S, w, I, K, H, Y, oe) {
      return r = VS(o, s, !0, r, f, p, S, oe, w, I, K, H), r.context = YS(null), o = r.current, s = ir(), s = Z(s), f = la(s), f.callback = n !== null && n !== void 0 ? n : null, ca(o, f, s), n = s, r.current.lanes = n, G(r, n), Jr(r), r;
    }, ce.createPortal = function (r, n, o) {
      var s = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
      return {
        $$typeof: so,
        key: s == null ? null : "" + s,
        children: r,
        containerInfo: n,
        implementation: o
      };
    }, ce.createRoleSelector = function (r) {
      return {
        $$typeof: Zc,
        value: r
      };
    }, ce.createTestNameSelector = function (r) {
      return {
        $$typeof: kc,
        value: r
      };
    }, ce.createTextSelector = function (r) {
      return {
        $$typeof: Jc,
        value: r
      };
    }, ce.defaultOnCaughtError = function (r) {
      console.error(r);
    }, ce.defaultOnRecoverableError = function (r) {
      T1(r);
    }, ce.defaultOnUncaughtError = function (r) {
      T1(r);
    }, ce.deferredUpdates = function (r) {
      var n = $.T,
        o = Mn();
      try {
        return ct(32), $.T = null, r();
      } finally {
        ct(o), $.T = n;
      }
    }, ce.discreteUpdates = function (r, n, o, s, f) {
      var p = $.T,
        y = Mn();
      try {
        return ct(2), $.T = null, r(n, o, s, f);
      } finally {
        ct(y), $.T = p, fe === 0 && (hs = Gt() + 500);
      }
    }, ce.findAllNodes = lv, ce.findBoundingRects = function (r, n) {
      if (!is) throw Error(i(363));
      n = lv(r, n), r = [];
      for (var o = 0; o < n.length; o++) r.push(Jz(n[o]));
      for (n = r.length - 1; 0 < n; n--) {
        o = r[n];
        for (var s = o.x, f = s + o.width, p = o.y, y = p + o.height, S = n - 1; 0 <= S; S--) if (n !== S) {
          var w = r[S],
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
    }, ce.findHostInstance = XS, ce.findHostInstanceWithNoPortals = function (r) {
      return r = c(r), r = r !== null ? m(r) : null, r === null ? null : as(r.stateNode);
    }, ce.findHostInstanceWithWarning = function (r) {
      return XS(r);
    }, ce.flushPassiveEffects = ns, ce.flushSyncFromReconciler = function (r) {
      var n = fe;
      fe |= 1;
      var o = $.T,
        s = Mn();
      try {
        if (ct(2), $.T = null, r) return r();
      } finally {
        ct(s), $.T = o, fe = n, (fe & 6) === 0 && no(0, !1);
      }
    }, ce.flushSyncWork = OS, ce.focusWithin = function (r, n) {
      if (!is) throw Error(i(363));
      for (r = ov(r), n = TS(r, n), n = Array.from(n), r = 0; r < n.length;) {
        var o = n[r++],
          s = o.tag;
        if (!os(o)) {
          if ((s === 5 || s === 26 || s === 27) && eL(o.stateNode)) return !0;
          for (o = o.child; o !== null;) n.push(o), o = o.sibling;
        }
      }
      return !1;
    }, ce.getFindAllNodesFailureDescription = function (r, n) {
      if (!is) throw Error(i(363));
      var o = 0,
        s = [];
      r = [ov(r), 0];
      for (var f = 0; f < r.length;) {
        var p = r[f++],
          y = p.tag,
          S = r[f++],
          w = n[S];
        if ((y !== 5 && y !== 26 && y !== 27 || !os(p)) && (uv(p, w) && (s.push(sv(w)), S++, S > o && (o = S)), S < n.length)) for (p = p.child; p !== null;) r.push(p, S), p = p.sibling;
      }
      if (o < n.length) {
        for (r = []; o < n.length; o++) r.push(sv(n[o]));
        return "findAllNodes was able to match part of the selector:\n  " + (s.join(" > ") + "\n\nNo matching component was found for:\n  ") + r.join(" > ");
      }
      return null;
    }, ce.getPublicRootInstance = function (r) {
      if (r = r.current, !r.child) return null;
      switch (r.child.tag) {
        case 27:
        case 5:
          return as(r.child.stateNode);
        default:
          return r.child.stateNode;
      }
    }, ce.injectIntoDevTools = function () {
      var r = {
        bundleType: 0,
        version: Rz,
        rendererPackageName: Nz,
        currentDispatcherRef: $,
        reconcilerVersion: "19.2.0"
      };
      if ($S !== null && (r.rendererConfig = $S), (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === "undefined" ? "undefined" : _typeof(__REACT_DEVTOOLS_GLOBAL_HOOK__)) > "u") r = !1;else {
        var n = __REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (n.isDisabled || !n.supportsFiber) r = !0;else {
          try {
            us = n.inject(r), sr = n;
          } catch (_unused68) {}
          r = !!n.checkDCE;
        }
      }
      return r;
    }, ce.isAlreadyRendering = function () {
      return (fe & 6) !== 0;
    }, ce.observeVisibleRects = function (r, n, o, s) {
      if (!is) throw Error(i(363));
      r = lv(r, n);
      var f = tL(r, o, s).disconnect;
      return {
        disconnect: function disconnect() {
          f();
        }
      };
    }, ce.shouldError = function () {
      return null;
    }, ce.shouldSuspend = function () {
      return !1;
    }, ce.startHostTransition = function (r, n, o, s) {
      if (r.tag !== 5) throw Error(i(476));
      var f = wE(r).queue;
      NE(r, f, n, co, o === null ? a : function () {
        var p = wE(r);
        return p.next === null && (p = r.alternate.memoizedState), ku(r, p.next.queue, {}, ir()), o(s);
      });
    }, ce.updateContainer = function (r, n, o, s) {
      var f = n.current,
        p = ir();
      return QS(f, p, r, n, o, s), p;
    }, ce.updateContainerSync = function (r, n, o, s) {
      return QS(n.current, 2, r, n, o, s), 2;
    }, ce;
  };
  Wl.exports.default = Wl.exports;
  Object.defineProperty(Wl.exports, "__esModule", {
    value: !0
  });
});
var UU = v(function (Xwe, PU) {
  "use strict";

  PU.exports = IU();
});
var zU = v(function (ri) {
  "use strict";

  ri.ConcurrentRoot = 1;
  ri.ContinuousEventPriority = 8;
  ri.DefaultEventPriority = 32;
  ri.DiscreteEventPriority = 2;
  ri.IdleEventPriority = 268435456;
  ri.LegacyRoot = 0;
  ri.NoEventPriority = 0;
});
var jU = v(function (Zwe, LU) {
  "use strict";

  LU.exports = zU();
});
function qj(e, t) {
  return e.__proto__ = t, e;
}
function _j(e, t) {
  for (var a in t) Object.prototype.hasOwnProperty.call(e, a) || (e[a] = t[a]);
  return e;
}
typeof Object.setPrototypeOf != "function" && (Object.setPrototypeOf = {
  __proto__: []
} instanceof Array ? qj : _j);
var VTe = J(t2()),
  YTe = J(b2()),
  XTe = J(A2()),
  QTe = J(M2()),
  ZTe = J(L2()),
  kTe = J(zA()),
  JTe = J(GA()),
  WTe = J(JA()),
  $Te = J(GO()),
  eqe = J(QO()),
  tqe = J($O()),
  rqe = J(aC()),
  nqe = J(sR()),
  aqe = J(yR()),
  iqe = J(AR()),
  oqe = J(PR()),
  uqe = J(FR()),
  sqe = J(XR()),
  lqe = J(rN()),
  cqe = J(oN()),
  fqe = J(cN()),
  pqe = J(TM()),
  dqe = J(rB()),
  mqe = J(sB()),
  vqe = J(gB()),
  hqe = J(sI()),
  gqe = J(WI()),
  yqe = J(s8()),
  xqe = J(B8()),
  bqe = J(j8()),
  d4 = J(V8());
function Vse(e) {
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
var nd = /*#__PURE__*/function () {
  function nd() {
    _classCallCheck(this, nd);
  }
  return _createClass(nd, [{
    key: "encode",
    value: function encode(t) {
      var a = [];
      var _iterator2 = _createForOfIteratorHelper(t),
        _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var i = _step2.value;
          a.push.apply(a, _toConsumableArray(Vse(i)));
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
function Kr() {
  var e = typeof URIError != "function" ? Error : URIError;
  throw new e("Invalid UTF-8 sequence");
}
function ad(e) {
  var t = [];
  for (var a = 0; a < e.length;) if (e[a] < 128) t.push(String.fromCharCode(e[a])), a++;else if (e[a] > 191 && e[a] < 224) t.push(String.fromCharCode((e[a] & 31) << 6 | e[a + 1] & 63)), a += 2;else if (e[a] > 223 && e[a] < 240) t.push(String.fromCharCode((e[a] & 15) << 12 | (e[a + 1] & 63) << 6 | e[a + 2] & 63)), a += 3;else {
    var i = (e[a] & 7) << 18 | (e[a + 1] & 63) << 12 | (e[a + 2] & 63) << 6 | e[a + 3] & 63;
    t.push(String.fromCodePoint(i)), a += 4;
  }
  return t.join("");
}
function Yse(e) {
  var t = [],
    a = e.length,
    i = 0;
  for (; i < a;) {
    var u = e[i];
    if (u < 128) t.push(String.fromCharCode(u)), i++;else if (u >> 5 === 6) {
      i + 2 > a && Kr();
      var l = e[i + 1];
      l >> 6 !== 2 && Kr(), t.push(ad([u, l])), i += 2;
    } else if (u >> 4 === 14) {
      i + 3 > a && Kr();
      var _l2 = e[i + 1];
      _l2 >> 6 !== 2 && Kr();
      var c = e[i + 2];
      c >> 6 !== 2 && Kr(), t.push(ad([u, _l2, c])), i += 3;
    } else if (u >> 3 === 30) {
      i + 4 > a && Kr();
      var _l3 = e[i + 1];
      _l3 >> 6 !== 2 && Kr();
      var _c3 = e[i + 2];
      _c3 >> 6 !== 2 && Kr();
      var d = e[i + 3];
      d >> 6 !== 2 && Kr(), t.push(ad([u, _l3, _c3, d])), i += 4;
    } else Kr();
  }
  return t.join("");
}
var id = /*#__PURE__*/function () {
  function id() {
    _classCallCheck(this, id);
  }
  return _createClass(id, [{
    key: "decode",
    value: function decode(t) {
      return Yse(t);
    }
  }]);
}();
var od = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.!~*'()";
function qt() {
  var e = typeof URIError != "function" ? Error : URIError;
  throw new e("URI malformed");
}
function Xse(e) {
  return Number.parseInt(e, 16);
}
function Nl(e) {
  var t = [];
  for (var a = 0; a < e.length;) if (e[a] < 128) t.push(String.fromCharCode(e[a])), a++;else if (e[a] > 191 && e[a] < 224) t.push(String.fromCharCode((e[a] & 31) << 6 | e[a + 1] & 63)), a += 2;else if (e[a] > 223 && e[a] < 240) t.push(String.fromCharCode((e[a] & 15) << 12 | (e[a + 1] & 63) << 6 | e[a + 2] & 63)), a += 3;else {
    var i = (e[a] & 7) << 18 | (e[a + 1] & 63) << 12 | (e[a + 2] & 63) << 6 | e[a + 3] & 63;
    t.push(String.fromCodePoint(i)), a += 4;
  }
  return t.join("");
}
function Ka(e, t) {
  t + 2 > e.length && qt();
  var a = e.slice(t, t + 2);
  return /^[0-9A-Fa-f]{2}$/.test(a) || qt(), Xse(a);
}
function Y8(e) {
  var t = [],
    a = e.length,
    i = 0;
  for (; i < a;) {
    var u = e[i];
    if (od.includes(u)) t.push(u), i++;else if (u === "%") {
      var l = Ka(e, i + 1);
      if (l < 128) t.push(Nl([l])), i += 3;else if (l >> 5 === 6) {
        (i + 6 > a || e[i + 3] !== "%") && qt();
        var c = Ka(e, i + 4);
        c >> 6 !== 2 && qt(), t.push(Nl([l, c])), i += 6;
      } else if (l >> 4 === 14) {
        (i + 9 > a || e[i + 3] !== "%" || e[i + 6] !== "%") && qt();
        var _c4 = Ka(e, i + 4);
        _c4 >> 6 !== 2 && qt();
        var d = Ka(e, i + 7);
        d >> 6 !== 2 && qt(), t.push(Nl([l, _c4, d])), i += 9;
      } else if (l >> 3 === 30) {
        (i + 12 > a || e[i + 3] !== "%" || e[i + 6] !== "%" || e[i + 9] !== "%") && qt();
        var _c5 = Ka(e, i + 4);
        _c5 >> 6 !== 2 && qt();
        var _d2 = Ka(e, i + 7);
        _d2 >> 6 !== 2 && qt();
        var m = Ka(e, i + 10);
        m >> 6 !== 2 && qt(), t.push(Nl([l, _c5, _d2, m])), i += 12;
      } else qt();
    } else qt();
  }
  return t.join("");
}
function Qse(e) {
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
function X8(e) {
  var t = [];
  var _iterator3 = _createForOfIteratorHelper(e),
    _step3;
  try {
    for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
      var a = _step3.value;
      if (od.indexOf(a) !== -1) t.push(a);else {
        var i = Qse(a).map(function (u) {
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
var Qe = J($8());
var sd = /*#__PURE__*/function () {
    function sd() {
      _classCallCheck(this, sd);
      _defineProperty(this, "_otherPort", void 0);
      _defineProperty(this, "onmessage", null);
      _defineProperty(this, "_closed", !1);
      this._otherPort = null, this.onmessage = null;
    }
    return _createClass(sd, [{
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
  ld = /*#__PURE__*/_createClass(function ld() {
    _classCallCheck(this, ld);
    _defineProperty(this, "port1", void 0);
    _defineProperty(this, "port2", void 0);
    var t = new sd(),
      a = new sd();
    t.connect(a), a.connect(t), this.port1 = t, this.port2 = a;
  });
var Lt;
function Rx() {
  return Lt || (Lt = Function("return this")(), Lt);
}
Lt = Rx();
for (var _i6 = 0, _arr = ["globalThis", "global", "self"]; _i6 < _arr.length; _i6++) {
  var e = _arr[_i6];
  _typeof(Lt[e]) != "object" && (Lt[e] = Lt);
}
var yle = (_Lt$console = Lt.console) === null || _Lt$console === void 0 ? void 0 : _Lt$console.log;
typeof yle != "function" && (Lt.console = {
  log: Lt.print,
  error: Lt.print,
  info: Lt.print,
  debug: Lt.print,
  warn: Lt.print
});
function cd(e) {
  var t = Rx();
  for (var _i7 = 0, _Object$keys = Object.keys(e); _i7 < _Object$keys.length; _i7++) {
    var a = _Object$keys[_i7];
    t[a] || (t[a] = e[a]);
  }
}
var m4 = J(p4());
cd({
  TextEncoder: nd,
  TextDecoder: id,
  Symbol: d4.default,
  encodeURIComponent: X8,
  decodeURIComponent: Y8,
  ArrayBuffer: Qe.ArrayBuffer,
  DataView: Qe.DataView,
  Float32Array: Qe.Float32Array,
  Float64Array: Qe.Float64Array,
  Int8Array: Qe.Int8Array,
  Int16Array: Qe.Int16Array,
  Int32Array: Qe.Int32Array,
  Uint8Array: Qe.Uint8Array,
  Uint8ClampedArray: Qe.Uint8ClampedArray,
  Uint16Array: Qe.Uint16Array,
  Uint32Array: Qe.Uint32Array,
  MessageChannel: ld,
  URL: m4.default
});
var P4 = J(I4());
cd({
  Buffer: P4.Buffer,
  performance: {
    now: function now() {
      return Date.now();
    }
  }
});
var Z4 = J(_t()),
  k4 = J(_t()),
  dn = (0, k4.forwardRef)(function (e, t) {
    return e.display !== "none" && Z4.default.createElement("mpv-box", _objectSpread({
      ref: t
    }, e));
  });
var J4 = ["!", "@", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "[", "]", "{", "}", "\\", "|", ";", ":", '"', ",", ".", "<", ">", "/", "?", "`", "~"],
  W4 = ["ESC", "ENTER", "BS", "SPACE"],
  $4 = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"],
  e6 = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
function t6() {
  var _mp;
  for (var _len = arguments.length, e = new Array(_len), _key = 0; _key < _len; _key++) {
    e[_key] = arguments[_key];
  }
  return (_mp = mp).commandv.apply(_mp, ["quit"].concat(e));
}
function Ml() {
  for (var _len2 = arguments.length, e = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    e[_key2] = arguments[_key2];
  }
  return mp.command_native(["expand-path"].concat(e));
}
function hd() {
  for (var _len3 = arguments.length, e = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    e[_key3] = arguments[_key3];
  }
  return mp.command_native(["normalize-path"].concat(e));
}
function kx() {
  var _mp2;
  for (var _len4 = arguments.length, e = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
    e[_key4] = arguments[_key4];
  }
  return (_mp2 = mp).commandv.apply(_mp2, ["sub-add"].concat(e));
}
function Dl() {
  var _mp3;
  for (var _len5 = arguments.length, e = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
    e[_key5] = arguments[_key5];
  }
  return (_mp3 = mp).commandv.apply(_mp3, ["sub-remove"].concat(e));
}
function r6() {
  var _mp4;
  for (var _len6 = arguments.length, e = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
    e[_key6] = arguments[_key6];
  }
  return (_mp4 = mp).commandv.apply(_mp4, ["overlay-add"].concat(e));
}
function n6() {
  var _mp5;
  for (var _len7 = arguments.length, e = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
    e[_key7] = arguments[_key7];
  }
  return (_mp5 = mp).commandv.apply(_mp5, ["overlay-remove"].concat(e));
}
function Yr(e) {
  return e.replaceAll("\\\\", "//").replaceAll("\\", "/");
}
function Jx(e) {
  var _Yr$split$at;
  return (_Yr$split$at = Yr(e).split("/").at(-1)) === null || _Yr$split$at === void 0 ? void 0 : _Yr$split$at.split("?").at(0);
}
var gd = "mpv-easy-config";
var a6 = {
  GET: "GET",
  POST: "POST",
  PUT: "PUT",
  PATCH: "PATCH",
  DELETE: "DELETE",
  HEAD: "HEAD",
  OPTIONS: "OPTIONS"
};
var qce = (typeof global === "undefined" ? "undefined" : _typeof(global)) == "object" && global && global.Object === Object && global,
  yd = qce;
var _ce = (typeof self === "undefined" ? "undefined" : _typeof(self)) == "object" && self && self.Object === Object && self,
  Ace = yd || _ce || Function("return this")(),
  mt = Ace;
var Oce = mt.Symbol,
  Jn = Oce;
var i6 = Object.prototype,
  Cce = i6.hasOwnProperty,
  Rce = i6.toString,
  Bl = Jn ? Jn.toStringTag : void 0;
function Nce(e) {
  var t = Cce.call(e, Bl),
    a = e[Bl];
  try {
    e[Bl] = void 0;
    var i = !0;
  } catch (_unused69) {}
  var u = Rce.call(e);
  return i && (t ? e[Bl] = a : delete e[Bl]), u;
}
var o6 = Nce;
var wce = Object.prototype,
  Mce = wce.toString;
function Dce(e) {
  return Mce.call(e);
}
var u6 = Dce;
var Bce = "[object Null]",
  Ice = "[object Undefined]",
  s6 = Jn ? Jn.toStringTag : void 0;
function Pce(e) {
  return e == null ? e === void 0 ? Ice : Bce : s6 && s6 in Object(e) ? o6(e) : u6(e);
}
var Wn = Pce;
function Uce(e) {
  return e != null && _typeof(e) == "object";
}
var $n = Uce;
var zce = Array.isArray,
  Li = zce;
function Lce(e) {
  var t = _typeof(e);
  return e != null && (t == "object" || t == "function");
}
var xd = Lce;
var jce = "[object AsyncFunction]",
  Hce = "[object Function]",
  Fce = "[object GeneratorFunction]",
  Gce = "[object Proxy]";
function Kce(e) {
  if (!xd(e)) return !1;
  var t = Wn(e);
  return t == Hce || t == Fce || t == jce || t == Gce;
}
var bd = Kce;
var Vce = mt["__core-js_shared__"],
  Ed = Vce;
var l6 = function () {
  var e = /[^.]+$/.exec(Ed && Ed.keys && Ed.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function Yce(e) {
  return !!l6 && l6 in e;
}
var c6 = Yce;
var Xce = Function.prototype,
  Qce = Xce.toString;
function Zce(e) {
  if (e != null) {
    try {
      return Qce.call(e);
    } catch (_unused70) {}
    try {
      return e + "";
    } catch (_unused71) {}
  }
  return "";
}
var ea = Zce;
var kce = /[\\^$.*+?()[\]{}|]/g,
  Jce = /^\[object .+?Constructor\]$/,
  Wce = Function.prototype,
  $ce = Object.prototype,
  efe = Wce.toString,
  tfe = $ce.hasOwnProperty,
  rfe = RegExp("^" + efe.call(tfe).replace(kce, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
function nfe(e) {
  if (!xd(e) || c6(e)) return !1;
  var t = bd(e) ? rfe : Jce;
  return t.test(ea(e));
}
var f6 = nfe;
function afe(e, t) {
  return e === null || e === void 0 ? void 0 : e[t];
}
var p6 = afe;
function ife(e, t) {
  var a = p6(e, t);
  return f6(a) ? a : void 0;
}
var Rr = ife;
var ofe = Rr(mt, "WeakMap"),
  Sd = ofe;
var ufe = 9007199254740991,
  sfe = /^(?:0|[1-9]\d*)$/;
function lfe(e, t) {
  var a = _typeof(e);
  return t = t !== null && t !== void 0 ? t : ufe, !!t && (a == "number" || a != "symbol" && sfe.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
var d6 = lfe;
function cfe(e, t) {
  return e === t || e !== e && t !== t;
}
var Td = cfe;
var ffe = 9007199254740991;
function pfe(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= ffe;
}
var qd = pfe;
function dfe(e) {
  return e != null && qd(e.length) && !bd(e);
}
var m6 = dfe;
var mfe = Object.prototype;
function vfe(e) {
  var t = e && e.constructor,
    a = typeof t == "function" && t.prototype || mfe;
  return e === a;
}
var v6 = vfe;
function hfe(e, t) {
  for (var a = -1, i = Array(e); ++a < e;) i[a] = t(a);
  return i;
}
var h6 = hfe;
var gfe = "[object Arguments]";
function yfe(e) {
  return $n(e) && Wn(e) == gfe;
}
var Wx = yfe;
var g6 = Object.prototype,
  xfe = g6.hasOwnProperty,
  bfe = g6.propertyIsEnumerable,
  Efe = Wx(function () {
    return arguments;
  }()) ? Wx : function (e) {
    return $n(e) && xfe.call(e, "callee") && !bfe.call(e, "callee");
  },
  y6 = Efe;
function Sfe() {
  return !1;
}
var x6 = Sfe;
var S6 = (typeof exports === "undefined" ? "undefined" : _typeof(exports)) == "object" && exports && !exports.nodeType && exports,
  b6 = S6 && (typeof module === "undefined" ? "undefined" : _typeof(module)) == "object" && module && !module.nodeType && module,
  Tfe = b6 && b6.exports === S6,
  E6 = Tfe ? mt.Buffer : void 0,
  qfe = E6 ? E6.isBuffer : void 0,
  _fe = qfe || x6,
  Il = _fe;
var Afe = "[object Arguments]",
  Ofe = "[object Array]",
  Cfe = "[object Boolean]",
  Rfe = "[object Date]",
  Nfe = "[object Error]",
  wfe = "[object Function]",
  Mfe = "[object Map]",
  Dfe = "[object Number]",
  Bfe = "[object Object]",
  Ife = "[object RegExp]",
  Pfe = "[object Set]",
  Ufe = "[object String]",
  zfe = "[object WeakMap]",
  Lfe = "[object ArrayBuffer]",
  jfe = "[object DataView]",
  Hfe = "[object Float32Array]",
  Ffe = "[object Float64Array]",
  Gfe = "[object Int8Array]",
  Kfe = "[object Int16Array]",
  Vfe = "[object Int32Array]",
  Yfe = "[object Uint8Array]",
  Xfe = "[object Uint8ClampedArray]",
  Qfe = "[object Uint16Array]",
  Zfe = "[object Uint32Array]",
  Be = {};
Be[Hfe] = Be[Ffe] = Be[Gfe] = Be[Kfe] = Be[Vfe] = Be[Yfe] = Be[Xfe] = Be[Qfe] = Be[Zfe] = !0;
Be[Afe] = Be[Ofe] = Be[Lfe] = Be[Cfe] = Be[jfe] = Be[Rfe] = Be[Nfe] = Be[wfe] = Be[Mfe] = Be[Dfe] = Be[Bfe] = Be[Ife] = Be[Pfe] = Be[Ufe] = Be[zfe] = !1;
function kfe(e) {
  return $n(e) && qd(e.length) && !!Be[Wn(e)];
}
var T6 = kfe;
function Jfe(e) {
  return function (t) {
    return e(t);
  };
}
var q6 = Jfe;
var _6 = (typeof exports === "undefined" ? "undefined" : _typeof(exports)) == "object" && exports && !exports.nodeType && exports,
  Pl = _6 && (typeof module === "undefined" ? "undefined" : _typeof(module)) == "object" && module && !module.nodeType && module,
  Wfe = Pl && Pl.exports === _6,
  $x = Wfe && yd.process,
  $fe = function () {
    try {
      var e = Pl && Pl.require && Pl.require("util").types;
      return e || $x && $x.binding && $x.binding("util");
    } catch (_unused72) {}
  }(),
  eb = $fe;
var A6 = eb && eb.isTypedArray,
  epe = A6 ? q6(A6) : T6,
  _d = epe;
var tpe = Object.prototype,
  rpe = tpe.hasOwnProperty;
function npe(e, t) {
  var a = Li(e),
    i = !a && y6(e),
    u = !a && !i && Il(e),
    l = !a && !i && !u && _d(e),
    c = a || i || u || l,
    d = c ? h6(e.length, String) : [],
    m = d.length;
  for (var h in e) (t || rpe.call(e, h)) && !(c && (h == "length" || u && (h == "offset" || h == "parent") || l && (h == "buffer" || h == "byteLength" || h == "byteOffset") || d6(h, m))) && d.push(h);
  return d;
}
var O6 = npe;
function ape(e, t) {
  return function (a) {
    return e(t(a));
  };
}
var C6 = ape;
var ipe = C6(Object.keys, Object),
  R6 = ipe;
var ope = Object.prototype,
  upe = ope.hasOwnProperty;
function spe(e) {
  if (!v6(e)) return R6(e);
  var t = [];
  for (var a in Object(e)) upe.call(e, a) && a != "constructor" && t.push(a);
  return t;
}
var N6 = spe;
function lpe(e) {
  return m6(e) ? O6(e) : N6(e);
}
var w6 = lpe;
var cpe = Rr(Object, "create"),
  ta = cpe;
function fpe() {
  this.__data__ = ta ? ta(null) : {}, this.size = 0;
}
var M6 = fpe;
function ppe(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var D6 = ppe;
var dpe = "__lodash_hash_undefined__",
  mpe = Object.prototype,
  vpe = mpe.hasOwnProperty;
function hpe(e) {
  var t = this.__data__;
  if (ta) {
    var a = t[e];
    return a === dpe ? void 0 : a;
  }
  return vpe.call(t, e) ? t[e] : void 0;
}
var B6 = hpe;
var gpe = Object.prototype,
  ype = gpe.hasOwnProperty;
function xpe(e) {
  var t = this.__data__;
  return ta ? t[e] !== void 0 : ype.call(t, e);
}
var I6 = xpe;
var bpe = "__lodash_hash_undefined__";
function Epe(e, t) {
  var a = this.__data__;
  return this.size += this.has(e) ? 0 : 1, a[e] = ta && t === void 0 ? bpe : t, this;
}
var P6 = Epe;
function bu(e) {
  var t = -1,
    a = e == null ? 0 : e.length;
  for (this.clear(); ++t < a;) {
    var i = e[t];
    this.set(i[0], i[1]);
  }
}
bu.prototype.clear = M6;
bu.prototype.delete = D6;
bu.prototype.get = B6;
bu.prototype.has = I6;
bu.prototype.set = P6;
var tb = bu;
function Spe() {
  this.__data__ = [], this.size = 0;
}
var U6 = Spe;
function Tpe(e, t) {
  for (var a = e.length; a--;) if (Td(e[a][0], t)) return a;
  return -1;
}
var Ya = Tpe;
var qpe = Array.prototype,
  _pe = qpe.splice;
function Ape(e) {
  var t = this.__data__,
    a = Ya(t, e);
  if (a < 0) return !1;
  var i = t.length - 1;
  return a == i ? t.pop() : _pe.call(t, a, 1), --this.size, !0;
}
var z6 = Ape;
function Ope(e) {
  var t = this.__data__,
    a = Ya(t, e);
  return a < 0 ? void 0 : t[a][1];
}
var L6 = Ope;
function Cpe(e) {
  return Ya(this.__data__, e) > -1;
}
var j6 = Cpe;
function Rpe(e, t) {
  var a = this.__data__,
    i = Ya(a, e);
  return i < 0 ? (++this.size, a.push([e, t])) : a[i][1] = t, this;
}
var H6 = Rpe;
function Eu(e) {
  var t = -1,
    a = e == null ? 0 : e.length;
  for (this.clear(); ++t < a;) {
    var i = e[t];
    this.set(i[0], i[1]);
  }
}
Eu.prototype.clear = U6;
Eu.prototype.delete = z6;
Eu.prototype.get = L6;
Eu.prototype.has = j6;
Eu.prototype.set = H6;
var Xa = Eu;
var Npe = Rr(mt, "Map"),
  Qa = Npe;
function wpe() {
  this.size = 0, this.__data__ = {
    hash: new tb(),
    map: new (Qa || Xa)(),
    string: new tb()
  };
}
var F6 = wpe;
function Mpe(e) {
  var t = _typeof(e);
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
var G6 = Mpe;
function Dpe(e, t) {
  var a = e.__data__;
  return G6(t) ? a[typeof t == "string" ? "string" : "hash"] : a.map;
}
var Za = Dpe;
function Bpe(e) {
  var t = Za(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
var K6 = Bpe;
function Ipe(e) {
  return Za(this, e).get(e);
}
var V6 = Ipe;
function Ppe(e) {
  return Za(this, e).has(e);
}
var Y6 = Ppe;
function Upe(e, t) {
  var a = Za(this, e),
    i = a.size;
  return a.set(e, t), this.size += a.size == i ? 0 : 1, this;
}
var X6 = Upe;
function Su(e) {
  var t = -1,
    a = e == null ? 0 : e.length;
  for (this.clear(); ++t < a;) {
    var i = e[t];
    this.set(i[0], i[1]);
  }
}
Su.prototype.clear = F6;
Su.prototype.delete = K6;
Su.prototype.get = V6;
Su.prototype.has = Y6;
Su.prototype.set = X6;
var Ad = Su;
function zpe(e, t) {
  for (var a = -1, i = t.length, u = e.length; ++a < i;) e[u + a] = t[a];
  return e;
}
var Q6 = zpe;
function Lpe() {
  this.__data__ = new Xa(), this.size = 0;
}
var Z6 = Lpe;
function jpe(e) {
  var t = this.__data__,
    a = t.delete(e);
  return this.size = t.size, a;
}
var k6 = jpe;
function Hpe(e) {
  return this.__data__.get(e);
}
var J6 = Hpe;
function Fpe(e) {
  return this.__data__.has(e);
}
var W6 = Fpe;
var Gpe = 200;
function Kpe(e, t) {
  var a = this.__data__;
  if (a instanceof Xa) {
    var i = a.__data__;
    if (!Qa || i.length < Gpe - 1) return i.push([e, t]), this.size = ++a.size, this;
    a = this.__data__ = new Ad(i);
  }
  return a.set(e, t), this.size = a.size, this;
}
var $6 = Kpe;
function Tu(e) {
  var t = this.__data__ = new Xa(e);
  this.size = t.size;
}
Tu.prototype.clear = Z6;
Tu.prototype.delete = k6;
Tu.prototype.get = J6;
Tu.prototype.has = W6;
Tu.prototype.set = $6;
var Od = Tu;
function Vpe(e, t) {
  for (var a = -1, i = e == null ? 0 : e.length, u = 0, l = []; ++a < i;) {
    var c = e[a];
    t(c, a, e) && (l[u++] = c);
  }
  return l;
}
var eP = Vpe;
function Ype() {
  return [];
}
var tP = Ype;
var Xpe = Object.prototype,
  Qpe = Xpe.propertyIsEnumerable,
  rP = Object.getOwnPropertySymbols,
  Zpe = rP ? function (e) {
    return e == null ? [] : (e = Object(e), eP(rP(e), function (t) {
      return Qpe.call(e, t);
    }));
  } : tP,
  nP = Zpe;
function kpe(e, t, a) {
  var i = t(e);
  return Li(e) ? i : Q6(i, a(e));
}
var aP = kpe;
function Jpe(e) {
  return aP(e, w6, nP);
}
var rb = Jpe;
var Wpe = Rr(mt, "DataView"),
  Cd = Wpe;
var $pe = Rr(mt, "Promise"),
  Rd = $pe;
var ede = Rr(mt, "Set"),
  Nd = ede;
var iP = "[object Map]",
  tde = "[object Object]",
  oP = "[object Promise]",
  uP = "[object Set]",
  sP = "[object WeakMap]",
  lP = "[object DataView]",
  rde = ea(Cd),
  nde = ea(Qa),
  ade = ea(Rd),
  ide = ea(Nd),
  ode = ea(Sd),
  ji = Wn;
(Cd && ji(new Cd(new ArrayBuffer(1))) != lP || Qa && ji(new Qa()) != iP || Rd && ji(Rd.resolve()) != oP || Nd && ji(new Nd()) != uP || Sd && ji(new Sd()) != sP) && (ji = function ji(e) {
  var t = Wn(e),
    a = t == tde ? e.constructor : void 0,
    i = a ? ea(a) : "";
  if (i) switch (i) {
    case rde:
      return lP;
    case nde:
      return iP;
    case ade:
      return oP;
    case ide:
      return uP;
    case ode:
      return sP;
  }
  return t;
});
var nb = ji;
var ude = mt.Uint8Array,
  ab = ude;
var sde = "__lodash_hash_undefined__";
function lde(e) {
  return this.__data__.set(e, sde), this;
}
var cP = lde;
function cde(e) {
  return this.__data__.has(e);
}
var fP = cde;
function wd(e) {
  var t = -1,
    a = e == null ? 0 : e.length;
  for (this.__data__ = new Ad(); ++t < a;) this.add(e[t]);
}
wd.prototype.add = wd.prototype.push = cP;
wd.prototype.has = fP;
var pP = wd;
function fde(e, t) {
  for (var a = -1, i = e == null ? 0 : e.length; ++a < i;) if (t(e[a], a, e)) return !0;
  return !1;
}
var dP = fde;
function pde(e, t) {
  return e.has(t);
}
var mP = pde;
var dde = 1,
  mde = 2;
function vde(e, t, a, i, u, l) {
  var c = a & dde,
    d = e.length,
    m = t.length;
  if (d != m && !(c && m > d)) return !1;
  var h = l.get(e),
    g = l.get(t);
  if (h && g) return h == t && g == e;
  var x = -1,
    b = !0,
    E = a & mde ? new pP() : void 0;
  for (l.set(e, t), l.set(t, e); ++x < d;) {
    var A = e[x],
      C = t[x];
    if (i) var O = c ? i(C, A, x, t, e, l) : i(A, C, x, e, t, l);
    if (O !== void 0) {
      if (O) continue;
      b = !1;
      break;
    }
    if (E) {
      if (!dP(t, function (T, q) {
        if (!mP(E, q) && (A === T || u(A, T, a, i, l))) return E.push(q);
      })) {
        b = !1;
        break;
      }
    } else if (!(A === C || u(A, C, a, i, l))) {
      b = !1;
      break;
    }
  }
  return l.delete(e), l.delete(t), b;
}
var Md = vde;
function hde(e) {
  var t = -1,
    a = Array(e.size);
  return e.forEach(function (i, u) {
    a[++t] = [u, i];
  }), a;
}
var vP = hde;
function gde(e) {
  var t = -1,
    a = Array(e.size);
  return e.forEach(function (i) {
    a[++t] = i;
  }), a;
}
var hP = gde;
var yde = 1,
  xde = 2,
  bde = "[object Boolean]",
  Ede = "[object Date]",
  Sde = "[object Error]",
  Tde = "[object Map]",
  qde = "[object Number]",
  _de = "[object RegExp]",
  Ade = "[object Set]",
  Ode = "[object String]",
  Cde = "[object Symbol]",
  Rde = "[object ArrayBuffer]",
  Nde = "[object DataView]",
  gP = Jn ? Jn.prototype : void 0,
  ib = gP ? gP.valueOf : void 0;
function wde(e, t, a, i, u, l, c) {
  switch (a) {
    case Nde:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) return !1;
      e = e.buffer, t = t.buffer;
    case Rde:
      return !(e.byteLength != t.byteLength || !l(new ab(e), new ab(t)));
    case bde:
    case Ede:
    case qde:
      return Td(+e, +t);
    case Sde:
      return e.name == t.name && e.message == t.message;
    case _de:
    case Ode:
      return e == t + "";
    case Tde:
      var d = vP;
    case Ade:
      var m = i & yde;
      if (d || (d = hP), e.size != t.size && !m) return !1;
      var h = c.get(e);
      if (h) return h == t;
      i |= xde, c.set(e, t);
      var g = Md(d(e), d(t), i, u, l, c);
      return c.delete(e), g;
    case Cde:
      if (ib) return ib.call(e) == ib.call(t);
  }
  return !1;
}
var yP = wde;
var Mde = 1,
  Dde = Object.prototype,
  Bde = Dde.hasOwnProperty;
function Ide(e, t, a, i, u, l) {
  var c = a & Mde,
    d = rb(e),
    m = d.length,
    h = rb(t),
    g = h.length;
  if (m != g && !c) return !1;
  for (var x = m; x--;) {
    var b = d[x];
    if (!(c ? b in t : Bde.call(t, b))) return !1;
  }
  var E = l.get(e),
    A = l.get(t);
  if (E && A) return E == t && A == e;
  var C = !0;
  l.set(e, t), l.set(t, e);
  for (var O = c; ++x < m;) {
    b = d[x];
    var T = e[b],
      q = t[b];
    if (i) var D = c ? i(q, T, b, t, e, l) : i(T, q, b, e, t, l);
    if (!(D === void 0 ? T === q || u(T, q, a, i, l) : D)) {
      C = !1;
      break;
    }
    O || (O = b == "constructor");
  }
  if (C && !O) {
    var B = e.constructor,
      G = t.constructor;
    B != G && "constructor" in e && "constructor" in t && !(typeof B == "function" && B instanceof B && typeof G == "function" && G instanceof G) && (C = !1);
  }
  return l.delete(e), l.delete(t), C;
}
var xP = Ide;
var Pde = 1,
  bP = "[object Arguments]",
  EP = "[object Array]",
  Dd = "[object Object]",
  Ude = Object.prototype,
  SP = Ude.hasOwnProperty;
function zde(e, t, a, i, u, l) {
  var c = Li(e),
    d = Li(t),
    m = c ? EP : nb(e),
    h = d ? EP : nb(t);
  m = m == bP ? Dd : m, h = h == bP ? Dd : h;
  var g = m == Dd,
    x = h == Dd,
    b = m == h;
  if (b && Il(e)) {
    if (!Il(t)) return !1;
    c = !0, g = !1;
  }
  if (b && !g) return l || (l = new Od()), c || _d(e) ? Md(e, t, a, i, u, l) : yP(e, t, m, a, i, u, l);
  if (!(a & Pde)) {
    var E = g && SP.call(e, "__wrapped__"),
      A = x && SP.call(t, "__wrapped__");
    if (E || A) {
      var C = E ? e.value() : e,
        O = A ? t.value() : t;
      return l || (l = new Od()), u(C, O, a, i, l);
    }
  }
  return b ? (l || (l = new Od()), xP(e, t, a, i, u, l)) : !1;
}
var TP = zde;
function qP(e, t, a, i, u) {
  return e === t ? !0 : e == null || t == null || !$n(e) && !$n(t) ? e !== e && t !== t : TP(e, t, a, i, qP, u);
}
var _P = qP;
function Lde(e, t) {
  return _P(e, t);
}
var Ul = Lde;
var eCe = "3g2,3gp,asf,avi,f4v,flv,h264,h265,m2ts,m4v,mkv,mov,mp4,mp4v,mpeg,mpg,ogm,ogv,rm,rmvb,ts,vob,webm,wmv,y4m,m4s".split(","),
  tCe = "aac,ac3,aiff,ape,au,cue,dsf,dts,flac,m4a,mid,midi,mka,mp3,mp4a,oga,ogg,opus,spx,tak,tta,wav,weba,wma,wv".split(","),
  rCe = "apng,avif,bmp,gif,j2k,jp2,jfif,jpeg,jpg,jxl,mj2,png,svg,tga,tif,tiff,webp".split(","),
  jde = "aqt,ass,gsub,idx,jss,lrc,mks,pgs,pjs,psb,rt,sbv,slt,smi,sub,sup,srt,ssa,ssf,ttxt,usf,vt,vtt".split(","),
  nCe = "ttf,otf,woff,woff2,eot".split(","),
  aCe = "dll,so,dylib".split(",");
function OP(e) {
  if (jt() === "windows") {
    var t = e.reduce(function (a, i) {
      return a + i.length + 1;
    }, 0);
    if (t > 8191) throw new Error("Command length (".concat(t, ") exceeds Windows limit (8191).\nCommand starts with: ").concat(e.join(" ").substring(0, 200), "..."));
  }
}
function vn(e) {
  var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
  var a = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !0;
  var i = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : !0;
  OP(e);
  var u = RP({
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
      OP(e);
    } catch (c) {
      l(c);
      return;
    }
    Id({
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
var Hde = {
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
var Bd;
function jt() {
  if (Bd) return Bd;
  function e() {
    return Ll("platform");
  }
  var t;
  function a() {
    if (t) return t;
    var u = (vn(["uname", "-s"]) || "").toLowerCase();
    t = "windows";
    for (var _i8 = 0, _Object$entries = Object.entries(Hde); _i8 < _Object$entries.length; _i8++) {
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
  return Bd = e() || a(), Bd;
}
var mn = /*#__PURE__*/function () {
  function e(t, a, i, u) {
    _classCallCheck(this, e);
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
var AP = !1,
  zl = -1,
  ob = 0;
function Hi() {
  var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 720;
  return AP || (AP = !0, zl = ka("osd-height") || 0, ob = e / zl, ub("osd-height", function (t, a) {
    zl !== a && a && (zl = a, ob = e / zl);
  })), ob;
}
function gr(e) {
  var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  NP(e, t), print(e);
}
function CP() {
  return Fi("HOME");
}
function wP(e) {
  return e[0] === "#" ? parseInt(e.slice(1), 16) : parseInt(e, 16);
}
function jl(e) {
  return e >> 24 & 255;
}
function Gi(e) {
  return e >> 16 & 255;
}
function Ki(e) {
  return e >> 8 & 255;
}
function Vi(e) {
  return e & 255;
}
function qu(e, t) {
  return e & 16777215 | t << 24;
}
function Yi(e, t) {
  return e & 4278255615 | t << 16;
}
function Xi(e, t) {
  return e & 4294902015 | t << 8;
}
function _u(e, t) {
  return e & 4294967040 | t;
}
function At(e) {
  this.color = typeof e == "number" ? e : wP(e);
}
At.prototype = new At(0);
At.prototype.byteCount = 6;
At.prototype.toRgba = function () {
  var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var t = arguments.length > 1 ? arguments[1] : undefined;
  var a = this.red << 24 | this.green << 16 | this.blue << 8 | (t ? 255 - e : e);
  return new Qi(a, t);
};
At.prototype.toRgb = function () {
  var e = this.red << 16 | this.green << 8 | this.blue;
  return new ra(e);
};
At.prototype.toBgr = function () {
  return this.toRgb().toBgr();
};
At.prototype.toBgra = function () {
  var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var t = arguments.length > 1 ? arguments[1] : undefined;
  return this.toRgba(e, t).toBgra();
};
At.prototype.toArgb = function () {
  var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var t = arguments.length > 1 ? arguments[1] : undefined;
  return this.toRgba(e, t).toArgb();
};
At.prototype.toAbgr = function () {
  var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var t = arguments.length > 1 ? arguments[1] : undefined;
  return this.toRgba(e, t).toAbgr();
};
At.prototype.invert = function () {
  var e = ~this.color & 16777215;
  return new ra(e);
};
At.prototype.toHex = function () {
  var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
  var t = (this.color >>> 0).toString(16).padStart(this.byteCount, "0");
  return (e + t).toUpperCase();
};
function Ot(e) {
  var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
  At.call(this, e), this.invertAlpha = t, this.byteCount = 8, Object.defineProperty(this, "alpha", {
    get: function get() {
      return this.invertAlpha ? 255 - this.rawAlpha : this.rawAlpha;
    },
    set: function set(a) {
      this.rawAlpha = this.invertAlpha ? 255 - a : a;
    }
  });
}
Ot.prototype = new At(0);
Ot.prototype.byteCount = 8;
Ot.prototype.toRgba = function () {
  var e = this.red << 24 | this.green << 16 | this.blue << 8 | this.alpha;
  return new Qi(e, this.invertAlpha);
};
Ot.prototype.toBgra = function () {
  var e = this.blue << 24 | this.green << 16 | this.red << 8 | this.alpha;
  return new Au(e, this.invertAlpha);
};
Ot.prototype.toAbgr = function () {
  var e = this.alpha << 24 | this.blue << 16 | this.green << 8 | this.red;
  return new lb(e, this.invertAlpha);
};
Ot.prototype.toArgb = function () {
  var e = this.alpha << 24 | this.red << 16 | this.green << 8 | this.blue;
  return new Hl(e, this.invertAlpha);
};
Ot.prototype.toRgb = function () {
  var e = this.red << 16 | this.green << 8 | this.blue;
  return new ra(e);
};
Ot.prototype.toBgr = function () {
  var e = this.blue << 16 | this.green << 8 | this.red;
  return new ra(e);
};
function Qi(e) {
  var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
  Ot.call(this, e, t), Object.defineProperty(this, "red", {
    get: function get() {
      return jl(this.color);
    },
    set: function set(a) {
      this.color = qu(this.color, a);
    }
  }), Object.defineProperty(this, "green", {
    get: function get() {
      return Gi(this.color);
    },
    set: function set(a) {
      this.color = Yi(this.color, a);
    }
  }), Object.defineProperty(this, "blue", {
    get: function get() {
      return Ki(this.color);
    },
    set: function set(a) {
      this.color = Xi(this.color, a);
    }
  }), Object.defineProperty(this, "rawAlpha", {
    get: function get() {
      return Vi(this.color);
    },
    set: function set(a) {
      this.color = _u(this.color, a);
    }
  });
}
Qi.prototype = Object.create(Ot.prototype);
Qi.prototype.constructor = Ot;
Qi.prototype.invert = function () {
  var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !1;
  var t = e ? ~this.color : ~this.color & 4294967040 | this.alpha;
  return new Qi(t, this.invertAlpha);
};
function ra(e) {
  At.call(this, e), Object.defineProperty(this, "red", {
    get: function get() {
      return Gi(this.color);
    },
    set: function set(t) {
      this.color = Yi(this.color, t);
    }
  }), Object.defineProperty(this, "green", {
    get: function get() {
      return Ki(this.color);
    },
    set: function set(t) {
      this.color = Xi(this.color, t);
    }
  }), Object.defineProperty(this, "blue", {
    get: function get() {
      return Vi(this.color);
    },
    set: function set(t) {
      this.color = _u(this.color, t);
    }
  });
}
ra.prototype = new At(0);
ra.prototype.toRgba = function () {
  var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var t = arguments.length > 1 ? arguments[1] : undefined;
  var a = this.color << 8 | (t ? 255 - e : e);
  return new Qi(a, t);
};
ra.prototype.toBgr = function () {
  var e = this.blue << 16 | this.green << 8 | this.red;
  return new MP(e);
};
function Au(e) {
  var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
  Ot.call(this, e, t), Object.defineProperty(this, "blue", {
    get: function get() {
      return jl(this.color);
    },
    set: function set(a) {
      this.color = qu(this.color, a);
    }
  }), Object.defineProperty(this, "green", {
    get: function get() {
      return Gi(this.color);
    },
    set: function set(a) {
      this.color = Yi(this.color, a);
    }
  }), Object.defineProperty(this, "red", {
    get: function get() {
      return Ki(this.color);
    },
    set: function set(a) {
      this.color = Xi(this.color, a);
    }
  }), Object.defineProperty(this, "rawAlpha", {
    get: function get() {
      return Vi(this.color);
    },
    set: function set(a) {
      this.color = _u(this.color, a);
    }
  });
}
Au.prototype = new Ot(0);
Au.prototype.invert = function () {
  var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !1;
  var t = e ? ~this.color : ~this.color & 4294967040 | this.alpha;
  return new Au(t);
};
function MP(e) {
  At.call(this, e), Object.defineProperty(this, "blue", {
    get: function get() {
      return Gi(this.color);
    },
    set: function set(t) {
      this.color = qu(this.color, t);
    }
  }), Object.defineProperty(this, "green", {
    get: function get() {
      return Ki(this.color);
    },
    set: function set(t) {
      this.color = Yi(this.color, t);
    }
  }), Object.defineProperty(this, "red", {
    get: function get() {
      return Vi(this.color);
    },
    set: function set(t) {
      this.color = Xi(this.color, t);
    }
  });
}
MP.prototype = new At(0);
function Hl(e) {
  var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
  Ot.call(this, e, t), Object.defineProperty(this, "rawAlpha", {
    get: function get() {
      return jl(this.color);
    },
    set: function set(a) {
      this.color = qu(this.color, a);
    }
  }), Object.defineProperty(this, "red", {
    get: function get() {
      return Gi(this.color);
    },
    set: function set(a) {
      this.color = Yi(this.color, a);
    }
  }), Object.defineProperty(this, "green", {
    get: function get() {
      return Ki(this.color);
    },
    set: function set(a) {
      this.color = Xi(this.color, a);
    }
  }), Object.defineProperty(this, "blue", {
    get: function get() {
      return Vi(this.color);
    },
    set: function set(a) {
      this.color = _u(this.color, a);
    }
  });
}
Hl.prototype = new Ot(0);
Hl.prototype.invert = function () {
  var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !1;
  var t = e ? ~this.color : ~this.color & 16777215 | this.alpha << 24;
  return new Au(t, this.invertAlpha);
};
function lb(e) {
  var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
  Ot.call(this, e, t), Object.defineProperty(this, "rawAlpha", {
    get: function get() {
      return jl(this.color);
    },
    set: function set(a) {
      this.color = qu(this.color, a);
    }
  }), Object.defineProperty(this, "blue", {
    get: function get() {
      return Gi(this.color);
    },
    set: function set(a) {
      this.color = Yi(this.color, a);
    }
  }), Object.defineProperty(this, "green", {
    get: function get() {
      return Ki(this.color);
    },
    set: function set(a) {
      this.color = Xi(this.color, a);
    }
  }), Object.defineProperty(this, "red", {
    get: function get() {
      return Vi(this.color);
    },
    set: function set(a) {
      this.color = _u(this.color, a);
    }
  });
}
lb.prototype = new Ot(0);
lb.prototype.invert = function () {
  var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !1;
  var t = e ? ~this.color : ~this.color & 16777215 | this.alpha << 24;
  return new Au(t, this.invertAlpha);
};
var Ud = {
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
function vt(e) {
  try {
    return !!Zi(e);
  } catch (_unused73) {
    return !1;
  }
}
function Fde(e) {
  var _Zi;
  return !!((_Zi = Zi(e)) !== null && _Zi !== void 0 && _Zi.is_dir);
}
function zd(e) {
  if (!(e !== null && e !== void 0 && e.length)) return;
  var t = e.replaceAll("\\", "/").split("/").slice(0, -1).join("/");
  if (Fde(t)) return t;
}
function RP(e) {
  return mp.command_native(e);
}
function Id(e, t) {
  return mp.command_native_async(e, t);
}
function Ll(e, t) {
  var _mp$get_property;
  return (_mp$get_property = mp.get_property(e)) !== null && _mp$get_property !== void 0 ? _mp$get_property : t;
}
function Ld(e, t) {
  var _mp$get_property_bool;
  return (_mp$get_property_bool = mp.get_property_bool(e)) !== null && _mp$get_property_bool !== void 0 ? _mp$get_property_bool : t;
}
function Pd(e, t) {
  var _mp$get_property_nati;
  return (_mp$get_property_nati = mp.get_property_native(e)) !== null && _mp$get_property_nati !== void 0 ? _mp$get_property_nati : t;
}
function ka(e, t) {
  var _mp$get_property_numb;
  return (_mp$get_property_numb = mp.get_property_number(e)) !== null && _mp$get_property_numb !== void 0 ? _mp$get_property_numb : t;
}
function na(e, t) {
  var _mp$get_property_nati2;
  return (_mp$get_property_nati2 = mp.get_property_native(e)) !== null && _mp$get_property_nati2 !== void 0 ? _mp$get_property_nati2 : t;
}
function DP(e, t) {
  return mp.set_property(e, t);
}
function Ja(e, t) {
  return mp.set_property_bool(e, t);
}
function cb(e, t) {
  return mp.set_property_number(e, t);
}
function aa(e, t) {
  return mp.set_property_native(e, t);
}
function Ou(e, t, a, i) {
  return mp.add_key_binding(e, t, a, i);
}
function gn(e, t, a) {
  return mp.observe_property(e, t, a);
}
function ub(e, t) {
  return gn(e, "number", t);
}
function BP(e) {
  return mp.unobserve_property(e);
}
function NP(e, t) {
  return mp.osd_message(e, t);
}
function yn(e, t) {
  return mp.register_script_message(e, t);
}
function IP() {
  var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "ass-events";
  return mp.create_osd_overlay(e);
}
function Fd() {
  return mp.get_osd_size();
}
var jd;
function fb() {
  return jd || (jd = Yr(mp.get_script_file().split("/").slice(0, -1).join("/")), jd);
}
var Hd;
function sb() {
  return Hd || (Hd = lt(fb(), gd), Hd);
}
function PP(e, t, a) {
  return typeof a == "function" ? mp.options.read_options(e, t, a) : mp.options.read_options(e, t);
}
function Zi(e) {
  return mp.utils.file_info(e);
}
function Gde(e) {
  return mp.utils.split_path(e);
}
function lt() {
  for (var _len8 = arguments.length, e = new Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
    e[_key8] = arguments[_key8];
  }
  return Yr(e.reduce(function (t, a) {
    return mp.utils.join_path(t, a);
  }));
}
function Fi(e) {
  return mp.utils.getenv(e);
}
function Nr(e, t) {
  return mp.utils.read_file(e, t);
}
function xn(e, t) {
  var a = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "file://";
  var i = a + Yr(e);
  return mp.utils.write_file(i, t);
}
function Gd() {
  var e = Ml("~~home/"),
    t = jt() === "windows" ? "mpv.exe" : "mpv",
    a = lt.apply(void 0, _toConsumableArray(Gde(e).slice(0, -1)).concat([t]));
  return jt() === "windows" ? Yr(a) : a;
}
function ki() {
  return zd(Gd());
}
function UP() {
  return Yr(Ml("~~desktop/"));
}
function zP() {
  return Math.random().toString(36).slice(2);
}
var Cu = /*#__PURE__*/function () {
  function Cu(t) {
    _classCallCheck(this, Cu);
    _defineProperty(this, "_lastValue", void 0);
    this.name = t;
  }
  return _createClass(Cu, [{
    key: "value",
    get: function get() {
      return na(this.name);
    },
    set: function set(t) {
      aa(this.name, t);
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
      var a = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Ul;
      var i = function i(u, l) {
        (_typeof(_this3._lastValue) > "u" || !a(l, _this3._lastValue)) && (_this3._lastValue = l, t(u, l));
      };
      return gn(this.name, "native", i), i;
    }
  }, {
    key: "unobserve",
    value: function unobserve(t) {
      return this._lastValue = void 0, BP(t);
    }
  }]);
}();
function LP(e, t, a) {
  var i = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "powershell";
  xn(e, t);
  var u = vn([i, e]);
  return a && (u = Nr(a)), u;
}
function Ru(e) {
  var t = jt(),
    a = "where ".concat(e);
  try {
    var u = Kde(a).stdout.trim().split("\n")[0];
    return vt(u) ? u : !1;
  } catch (_unused74) {
    return !1;
  }
}
function Kde(e) {
  var t = jt(),
    _ref = t === "windows" ? ["cmd", "/c"] : ["sh", "-c"],
    _ref2 = _slicedToArray(_ref, 2),
    a = _ref2[0],
    i = _ref2[1];
  try {
    return {
      ok: !0,
      stdout: vn([a, i, e]).replaceAll("\r\n", "\n"),
      stderr: ""
    };
  } catch (u) {
    return {
      ok: !1,
      stderr: String(u).replaceAll("\r\n", "\n"),
      stdout: ""
    };
  }
}
var Nu;
function Vde() {
  if (Nu) return Nu;
  var e = vn(["powershell", "-c", 'Get-ItemProperty -Path "HKCU:\\Control Panel\\Cursors"']).trim();
  Nu = {
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
      i === "Arrow" ? Nu.Arrow = u : i === "Hand" && (Nu.Hand = u);
    }
  } catch (err) {
    _iterator4.e(err);
  } finally {
    _iterator4.f();
  }
  return Nu;
}
var pb;
function db(e) {
  pb || (pb = Vde());
  var t = pb[e];
  if (!t.length) return;
  var a = "Set-ItemProperty -Path 'HKCU:\\Control Panel\\Cursors' -Name 'Arrow' -Value '".concat(t, "';\nAdd-Type -TypeDefinition @'\npublic class SysParamsInfo {\n    [System.Runtime.InteropServices.DllImport(\"user32.dll\", EntryPoint = \"SystemParametersInfo\")]\n    public static extern bool SystemParametersInfo(uint uiAction, uint uiParam, uint pvParam, uint fWinIni);\n\n    const int SPI_SETCURSORS = 0x0057;\n    const int SPIF_UPDATEINIFILE = 0x01;\n    const int SPIF_SENDCHANGE = 0x02;\n\n    public static void CursorHasChanged() {\n        SystemParametersInfo(SPI_SETCURSORS, 0, 0, SPIF_UPDATEINIFILE | SPIF_SENDCHANGE);\n    }\n}\n'@\n[SysParamsInfo]::CursorHasChanged()"),
    u = lt(fb(), gd, "mpv_easy_tool_set_mouse_style.ps1");
  LP(u, a);
}
function jP(e, t) {
  if (!e) throw new Error(t || "Assertion failed");
}
function Kd(e) {
  return Xde(e), Number.parseFloat(e.slice(0, -1)) / 100;
}
function Yde(e) {
  return e.endsWith("%");
}
function Xde(e) {
  jP(Yde(e), "not a valid percentage string: ".concat(e));
}
var Vd = [];
function Qde() {
  for (var t = 0; t < Vd.length; t++) {
    var a = Vd[t];
    if (a && !a.busy) return a.busy = !0, a.overlay;
  }
  var e = IP();
  return e.remove = function () {
    e.hidden = !0, e.data = "", e.compute_bounds = !1, e.update();
    var t = Vd[e.id - 1];
    t && (t.busy = !1);
  }, Vd[e.id - 1] = {
    overlay: e,
    busy: !0
  }, e;
}
var Zde = {
    hidden: !1,
    resX: 0,
    resY: 720,
    z: 0,
    computeBounds: !0,
    data: "",
    cache: !1
  },
  bn = /*#__PURE__*/function () {
    function bn() {
      var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      _classCallCheck(this, bn);
      _defineProperty(this, "overlay", void 0);
      _defineProperty(this, "option", void 0);
      _defineProperty(this, "_lastResY", void 0);
      _defineProperty(this, "_lastResX", void 0);
      _defineProperty(this, "_lastHidden", void 0);
      _defineProperty(this, "_lastComputeBounds", void 0);
      _defineProperty(this, "_lastData", void 0);
      _defineProperty(this, "_lastZ", void 0);
      _defineProperty(this, "_lastRect", void 0);
      this.option = _objectSpread(_objectSpread({}, Zde), t);
    }
    return _createClass(bn, [{
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
        if (this.option.data && !this.overlay && (this.overlay = Qde()), !this.overlay) return this._lastRect || new mn(0, 0, 0, 0);
        if (this.overlay.data = this.option.data, this.overlay.res_x = this.option.resX, this.overlay.res_y = this.option.resY, this.overlay.z = this.option.z, this.overlay.hidden = this.option.hidden, this.overlay.compute_bounds = this.option.computeBounds, this.option.cache) {
          if (this._lastResX === this.resX && this._lastResY === this.resY && this._lastHidden === this.hidden && this._lastComputeBounds === this.computeBounds && this._lastData === this.data && this._lastZ === this.z) return this._lastRect;
          this._lastResY = this.resY, this._lastResX = this.resX, this._lastHidden = this.hidden, this._lastComputeBounds = this.computeBounds, this._lastData = this.data, this._lastZ = this.z;
          var i = this.overlay.update();
          return this._lastRect = mn.fromCoord(i).scale(t), this._lastRect;
        }
        var a = this.overlay.update();
        return mn.fromCoord(a).scale(t);
      }
    }]);
  }();
var Yd = 64,
  Fl = new Array(Yd).map(function () {
    return !1;
  });
function kde(e) {
  if (e < 0 || e >= Yd) throw new Error("overlay's id(".concat(e, ") must be in the range [0, 63]"));
  if (e >= 0 && e < Yd && !Fl[e]) return Fl[e] = !0, e;
  for (var t = 0; t < Yd; t++) if (!Fl[t]) return Fl[t] = !0, t;
  throw new Error("No available overlay ID (0-63)");
}
var Xd = /*#__PURE__*/function () {
  function Xd(t) {
    _classCallCheck(this, Xd);
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
    var a = kde(t);
    a !== t && print("[overlay] ID ".concat(t, " is already in use, assigned ").concat(a, " instead.")), this.id = a;
  }
  return _createClass(Xd, [{
    key: "update",
    value: function update() {
      r6(this.id, this.x, this.y, this.file, 0, this.fmt, this.w, this.h, this.stride, this.dw != null ? this.dw : this.w, this.dh != null ? this.dh : this.h);
    }
  }, {
    key: "remove",
    value: function remove() {
      n6(this.id);
    }
  }, {
    key: "destroy",
    value: function destroy() {
      Fl[this.id] = !1;
    }
  }]);
}();
var Jde = "mpv-easy-ext",
  Qd = function Qd() {
    return lt(sb(), Jde);
  },
  Wde = "mpv-easy-ext-macos",
  $de = "mpv-easy-ext-windows.exe",
  eme = "mpv-easy-ext-android",
  tme = "mpv-easy-ext-linux";
function Zd() {
  var e = jt();
  switch (e) {
    case "darwin":
      return lt(Qd(), Wde);
    case "linux":
      return lt(Qd(), tme);
    case "windows":
      return lt(Qd(), $de);
    case "android":
      return lt(Qd(), eme);
    default:
      throw new Error("mpv-easy-ext not support os: ".concat(e));
  }
}
function wu() {
  return Fi("TMPDIR") || Fi("TMP") || Fi("tmp") || ".";
}
function HP(e) {
  var t = zP(),
    a = e ? "".concat(t, ".").concat(e) : t;
  return lt(wu(), a);
}
function FP(_x2, _x3) {
  return _FP.apply(this, arguments);
}
function _FP() {
  _FP = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4(e, t) {
    var a,
      i,
      _JSON$parse,
      u,
      l,
      _args = arguments,
      _t8;
    return _regenerator().w(function (_context4) {
      while (1) switch (_context4.n) {
        case 0:
          a = _args.length > 2 && _args[2] !== undefined ? _args[2] : Zd();
          i = t ? [a, "fetch", JSON.stringify(e), JSON.stringify(t)] : [a, "fetch", JSON.stringify(e)];
          _t8 = JSON;
          _context4.n = 1;
          return hn(i);
        case 1:
          _JSON$parse = _t8.parse.call(_t8, _context4.v);
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
  return _FP.apply(this, arguments);
}
var Ji;
function GP() {
  return Ji || jt() === "windows" && (Ji = "C:/Windows/System32/curl.exe", vt(Ji)) || (Ji = Ru("curl")), Ji;
}
function rme(e) {
  var t = e.method;
  return t ? ["-X", a6[t.toUpperCase()] || t.toUpperCase()] : ["-X", "GET"];
}
var nme = function nme(e, t) {
  return "".concat(e, ": ").concat("".concat(t).replace(/(\\|")/g, "\\$1"));
};
function ame() {
  var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var _e$headers = e.headers,
    t = _e$headers === void 0 ? {} : _e$headers,
    a = !1,
    i = ["-s"];
  return e.redirect === "follow" && i.push("-L"), Object.keys(t).forEach(function (u) {
    u.toLocaleLowerCase() !== "content-length" && (i.push("-H"), i.push(nme(u, t[u]))), u.toLocaleLowerCase() === "accept-encoding" && (a = !0);
  }), {
    params: i,
    isEncode: a
  };
}
function KP(e) {
  return typeof e != "string" ? JSON.stringify(e) : e.replace(/'/g, "'\\''");
}
function ime(e) {
  return e ? ["--data-binary", "".concat(KP(_typeof(e) == "object" ? JSON.stringify(e) : e))] : [];
}
function ome(e) {
  return e ? " --compressed" : "";
}
var ume = function ume(e) {
  var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var a = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "curl";
  var _t$body = t.body,
    i = _t$body === void 0 ? "" : _t$body,
    u = ame(t);
  return [a, "-k", "".concat(e)].concat(_toConsumableArray(rme(t)), _toConsumableArray(u.params), _toConsumableArray(ime(i)), [ome(u.isEncode)]).filter(function (l) {
    return !!l.length;
  });
};
function sme(_x4) {
  return _sme.apply(this, arguments);
}
function _sme() {
  _sme = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5(e) {
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
          i = ume(e, t, a);
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
  return _sme.apply(this, arguments);
}
function ia(_x5) {
  return _ia.apply(this, arguments);
}
function _ia() {
  _ia = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6(e) {
    var t,
      a,
      _args3 = arguments;
    return _regenerator().w(function (_context6) {
      while (1) switch (_context6.n) {
        case 0:
          t = _args3.length > 1 && _args3[1] !== undefined ? _args3[1] : {};
          a = GP();
          if (!a) {
            _context6.n = 1;
            break;
          }
          return _context6.a(2, sme(e, t, a));
        case 1:
          if (!vt(Zd())) {
            _context6.n = 2;
            break;
          }
          return _context6.a(2, FP(e, t));
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
  return _ia.apply(this, arguments);
}
var kd = ["en-US", "en-GB", "zh-CN", "zh-TW", "ja-JP", "ko-KR", "fr-FR", "de-DE", "es-ES", "it-IT", "ru-RU", "pt-BR", "ar-SA", "hi-IN", "tr-TR", "nl-NL", "pl-PL", "sv-SE", "fi-FI", "da-DK", "no-NO", "hu-HU", "cs-CZ", "el-GR", "he-IL", "th-TH", "vi-VN", "id-ID", "ms-MY", "fil-PH"],
  mb;
function Wa() {
  if (mb) return mb;
  switch (jt()) {
    case "windows":
      return mb = vn(["powershell", "-c", "(Get-Culture).Name"]).trim();
    case "linux":
    case "darwin":
    case "android":
      return "en-US";
  }
}
var cme = "ffmpeg",
  fme = "ffmpeg.exe",
  pme = "ffmpeg",
  dme = "ffmpeg";
function mme() {
  var e = jt();
  switch (e) {
    case "darwin":
      return lt(ki(), cme);
    case "linux":
      return lt(ki(), dme);
    case "windows":
      return lt(ki(), fme);
    case "android":
      return lt(ki(), pme);
    default:
      throw new Error("mpv-easy-ext not support os: ".concat(e));
  }
}
var Wi;
function Gl() {
  return Wi || (Wi = mme(), vt(Wi)) || (Wi = Ru("ffmpeg")), Wi;
}
var vme = "jellyfin_subtitles",
  TRe = "&".concat(vme, "=");
function VP() {
  var e = [],
    t = na("track-list", []).filter(function (a) {
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
function $i() {
  return VP().find(function (e) {
    return e.selected;
  });
}
function vb(_x6, _x7) {
  return _vb.apply(this, arguments);
}
function _vb() {
  _vb = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee7(e, t) {
    var a, i, _t9;
    return _regenerator().w(function (_context7) {
      while (1) switch (_context7.p = _context7.n) {
        case 0:
          a = Gl();
          if (a) {
            _context7.n = 1;
            break;
          }
          gr("ffmpeg not found");
          return _context7.a(2);
        case 1:
          i = [a, "-y", "-hide_banner", "-loglevel", "error", "-i", e, t];
          _context7.p = 2;
          _context7.n = 3;
          return hn(i);
        case 3:
          _context7.n = 5;
          break;
        case 4:
          _context7.p = 4;
          _t9 = _context7.v;
          return _context7.a(2);
        case 5:
          return _context7.a(2, Nr(t));
      }
    }, _callee7, null, [[2, 4]]);
  }));
  return _vb.apply(this, arguments);
}
function YP(_x8, _x9, _x0) {
  return _YP.apply(this, arguments);
}
function _YP() {
  _YP = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee8(e, t, a) {
    var i,
      u,
      l,
      c,
      _args5 = arguments,
      _t0;
    return _regenerator().w(function (_context8) {
      while (1) switch (_context8.p = _context8.n) {
        case 0:
          i = _args5.length > 3 && _args5[3] !== undefined ? _args5[3] : [];
          if (e) {
            _context8.n = 1;
            break;
          }
          return _context8.a(2);
        case 1:
          u = VP().find(function (d) {
            return d.id === t;
          });
          if (u) {
            _context8.n = 2;
            break;
          }
          return _context8.a(2);
        case 2:
          l = Gl();
          if (l) {
            _context8.n = 3;
            break;
          }
          gr("ffmpeg not found");
          return _context8.a(2);
        case 3:
          c = [l, "-y", "-hide_banner", "-loglevel", "error", "-i", e, "-map", "0:s:".concat(u.id - 1)];
          i.length === 2 && c.push("-ss", i[0].toString(), "-to", i[1].toString()), c.push(a);
          _context8.p = 4;
          _context8.n = 5;
          return hn(c);
        case 5:
          _context8.n = 7;
          break;
        case 6:
          _context8.p = 6;
          _t0 = _context8.v;
          return _context8.a(2);
        case 7:
          return _context8.a(2, Nr(a));
      }
    }, _callee8, null, [[4, 6]]);
  }));
  return _YP.apply(this, arguments);
}
function XP(e) {
  return String(Number(e)) === e;
}
function hme(e) {
  return e.includes("-->");
}
function gme(e) {
  return e.trim().length === 0;
}
function yme(e) {
  var t = [],
    a = e.trim().replaceAll("\r\n", "\n").split("\n"),
    i = a.length,
    u = 0;
  for (; u < i;) {
    for (; u < i && !XP(a[u]);) u++;
    if (u >= i) continue;
    var l = u++,
      c = u++;
    for (; u + 2 < i && !(gme(a[u]) && XP(a[u + 1]) && hme(a[u + 2]));) u++;
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
var $a = /*#__PURE__*/function () {
  function $a(t) {
    _classCallCheck(this, $a);
    _defineProperty(this, "blocks", void 0);
    this.srt = t;
    this.blocks = yme(t);
  }
  return _createClass($a, [{
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
var xme = {
  loop: 0,
  volume: 100,
  start: 0
};
function QP(e) {
  var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var _xme$t = _objectSpread(_objectSpread({}, xme), t),
    a = _xme$t.volume,
    i = _xme$t.start,
    u = _xme$t.loop,
    c = [Gd(), e, "--start=".concat(i), "--loop=".concat(u), "--volume=".concat(a), "--no-video", "--force-window=no", "--really-quiet", "--load-scripts=no", "--no-terminal", "--vo=null", "--load-auto-profiles=no", "--load-osd-console=no", "--load-stats-overlay=no", "--osc=no", "--vd-lavc-skiploopfilter=all", "--vd-lavc-skipidct=all", "--vd-lavc-software-fallback=1", "--vd-lavc-fast", "--vd-lavc-threads=2", "--hwdec=auto", "--edition=auto", "--sub=no", "--no-sub", "--sub-auto=no", "--audio-file-auto=no", "--keep-open=no", "--idle=no"];
  return Id({
    name: "subprocess",
    args: c,
    playback_only: !1,
    capture_stdout: !0,
    capture_stderr: !0
  });
}
function ZP(e, t, a) {
  var i = {};
  for (var l in t) i[l] = "";
  PP(i, e, a);
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
          var m = new Hl(d.length === 7 ? d : "#FF".concat(d.slice(1)), !0).toBgra().toHex("#");
          u[c] = m;
          break;
        }
    } else t[_l4].default !== void 0 && (u[c] = t[_l4].default);
  }
  return u;
}
var tU = J(eU());
function $d(e) {
  return (0, tU.default)(e).toString();
}
function bme(e, t) {
  if (t <= 0) return !0;
  var a = Zi(e);
  return a ? Date.now() / 1e3 - a.mtime < t : !1;
}
function Mu(_x1, _x10) {
  return _Mu.apply(this, arguments);
}
function _Mu() {
  _Mu = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee9(e, t) {
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
          i = wu(), u = $d(e), l = Yr("".concat(i, "/").concat(u));
          if (!(vt(l) && bme(l, a))) {
            _context9.n = 1;
            break;
          }
          d = Nr(l);
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
          return _context9.a(2, (xn(l, c), c));
      }
    }, _callee9);
  }));
  return _Mu.apply(this, arguments);
}
var rU = {
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
function em(e) {
  for (var t in rU) e = e.replaceAll(t, rU[t]);
  return e;
}
var tm = .551915024494,
  oa = /*#__PURE__*/function () {
    function oa() {
      var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      _classCallCheck(this, oa);
      _defineProperty(this, "_scale", void 0);
      _defineProperty(this, "_textBuffer", []);
      this._scale = t;
    }
    return _createClass(oa, [{
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
        var d = tm * l,
          m = tm * c;
        return this.moveTo(t + l, a), this.lineTo(i - c, a), c > 0 && this.bezierCurve(i - c + m, a, i, a + c - m, i, a + c), this.lineTo(i, u - c), c > 0 && this.bezierCurve(i, u - c + m, i - c + m, u, i - c, u), this.lineTo(t + l, u), l > 0 && this.bezierCurve(t + l - d, u, t, u - l + d, t, u - l), this.lineTo(t, a + l), l > 0 && this.bezierCurve(t, a + l - d, t + l - d, a, t + l, a), this;
      }
    }, {
      key: "roundRectCcw",
      value: function roundRectCcw(t, a, i, u, l) {
        var c = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : l;
        var d = tm * l,
          m = tm * c;
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
  var t = _e2.charAt(0).toLowerCase() + _e2.slice(1),
    a = new ra(Ud[_e2]);
  _typeof(a.color) > "u" && (a.color = Ud[_e2]);
  var i = a.toHex();
  oa.prototype[t] = function () {
    return this.color(i);
  }, oa.prototype["".concat(t, "Text")] = function (u) {
    return this.colorText(i, u);
  };
};
for (var _e2 in Ud) {
  _loop2();
}
var rm = new oa();
function nU(_ref3) {
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
  return rm.clear().color(i).drawStart().pos(e, t), rm.borderSize(a).borderColor(c), rm.roundRectCw(0, 0, u, l, d).end().toString();
}
function aU(_ref4) {
  var e = _ref4.x,
    t = _ref4.y,
    a = _ref4.width,
    i = _ref4.height,
    u = _ref4.borderSize,
    l = _ref4.borderColor;
  return rm.clear().color(l).drawStart().borderSize(0).pos(e, t).rectCw(0, 0, a, u).rectCw(0, 0, u, i).rectCw(0, i - u, a, i).rectCw(a - u, 0, a, i).toString();
}
var er,
  Du = 0;
function eo() {
  er && (er.data = "", er.hidden = !0, er.update(), er.remove(), clearTimeout(Du), Du = 0);
}
function wr(e) {
  var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  er || (er = new bn()), Du && (clearTimeout(Du), Du = 0), er.data = e, er.computeBounds = !0, er.hidden = !0;
  var a = Hi(),
    i = er.update(1 / a),
    u = Fd(),
    c = new mn(0, 0, (u === null || u === void 0 ? void 0 : u.width) || 0, (u === null || u === void 0 ? void 0 : u.height) || 0).placeCenter(i);
  er.data = new oa().pos(c.x * a, c.y * a).append(e).toString(), er.hidden = !1, er.update(), t > 0 && (Du = +setTimeout(function () {
    return eo();
  }, t * 1e3)), print(e);
}
var Kl = J(_t());
function Eme(e) {
  return e.endsWith("Hover");
}
function Sme(e) {
  return e.slice(0, -5);
}
function Tme(e) {
  var t = {};
  for (var a in e) {
    var i = Sme(a),
      u = e[a];
    Eme(a) && (t[i] = u);
  }
  return t;
}
var hb = Kl.default.forwardRef(function (_ref5, a) {
  var e = _ref5.text,
    t = _objectWithoutProperties(_ref5, _excluded);
  var i = Tme(t),
    _ref6 = (0, Kl.useState)(!1),
    _ref7 = _slicedToArray(_ref6, 2),
    u = _ref7[0],
    l = _ref7[1];
  return Kl.default.createElement(dn, _objectSpread(_objectSpread(_objectSpread({}, t), u ? i : {}), {}, {
    ref: a,
    onMouseDown: function onMouseDown(c) {
      var _t$onMouseDown;
      (_t$onMouseDown = t.onMouseDown) === null || _t$onMouseDown === void 0 || _t$onMouseDown.call(t, c);
    },
    onMouseEnter: function onMouseEnter(c) {
      var _t$onMouseEnter;
      l(!0), t.enableMouseStyle && db("Hand"), (_t$onMouseEnter = t.onMouseEnter) === null || _t$onMouseEnter === void 0 ? void 0 : _t$onMouseEnter.call(t, c);
    },
    onMouseLeave: function onMouseLeave(c) {
      var _t$onMouseLeave;
      l(!1), t.enableMouseStyle && db("Arrow"), (_t$onMouseLeave = t.onMouseLeave) === null || _t$onMouseLeave === void 0 ? void 0 : _t$onMouseLeave.call(t, c);
    },
    text: e
  }));
});
var qme = J(_t()),
  gb = J(_t());
var En = J(_t());
var Vl = /*#__PURE__*/function () {
  function e(t, a, i, u) {
    _classCallCheck(this, e);
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
var nm = /*#__PURE__*/function () {
    function nm(t, a, i, u, l) {
      _classCallCheck(this, nm);
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
    return _createClass(nm, [{
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
  am = /*#__PURE__*/function (_Vl) {
    function am() {
      var _this4;
      var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var i = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var u = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      var l = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
      var c = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
      var d = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;
      var m = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : !1;
      var h = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : new Vl(0, 0, 0, 0);
      var g = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : !1;
      var x = arguments.length > 9 && arguments[9] !== undefined ? arguments[9] : !1;
      var b = arguments.length > 10 && arguments[10] !== undefined ? arguments[10] : !1;
      var E = arguments.length > 11 && arguments[11] !== undefined ? arguments[11] : !1;
      var A = arguments.length > 12 && arguments[12] !== undefined ? arguments[12] : !1;
      var C = arguments.length > 13 && arguments[13] !== undefined ? arguments[13] : !1;
      _classCallCheck(this, am);
      _this4 = _callSuper(this, am, [a, i, u, l]);
      _this4.x = a;
      _this4.y = i;
      _this4.width = u;
      _this4.height = l;
      _this4.padding = c;
      _this4.border = d;
      _this4.hide = m;
      _this4.textRect = h;
      _this4._hideCache = g;
      _this4._renderCache = x;
      _this4._mouseDown = b;
      _this4._mouseUp = E;
      _this4._mouseIn = A;
      _this4._focus = C;
      return _this4;
    }
    _inherits(am, _Vl);
    return _createClass(am);
  }(Vl),
  yb = ["onMouseDown", "onMouseUp", "onClick", "onMouseMove", "onMousePress", "onMouseEnter", "onMouseLeave", "onWheelDown", "onWheelUp", "onBlur", "onFocus"];
function om(e, t) {
  t.parentNode && Yl(t.parentNode, t), t.parentNode = e, e.childNodes.push(t);
}
function xb(e, t, a) {
  t.parentNode && Yl(t.parentNode, t), t.parentNode = e;
  var i = e.childNodes.indexOf(a);
  if (i >= 0) {
    e.childNodes.splice(i, 0, t);
    return;
  }
  e.childNodes.push(t);
}
function Yl(e, t) {
  t.parentNode = void 0;
  var a = e.childNodes.indexOf(t);
  a >= 0 && e.childNodes.splice(a, 1);
}
function tr(e, t, a) {
  e.attributes[t] = a;
}
function to(e, t, a) {
  e.layoutNode[t] = a;
}
function im(e, t) {
  return e.attributes[t];
}
function ua(e, t) {
  for (; e && _typeof(im(e, t)) > "u";) if (e.parentNode) e = e.parentNode;else return;
  return im(e, t);
}
function Bu(e, t) {
  if (!e) throw new Error(t || "Assertion failed");
}
function bb(e) {
  return _me(e), Number.parseFloat(e.slice(0, -1)) / 100;
}
function Eb(e) {
  return e.charCodeAt(e.length - 1) === 37;
}
function _me(e) {
  Bu(Eb(e), "not a valid percentage string: ".concat(e));
}
function uU(e) {
  return _typeof(e.attributes.top) < "u" || _typeof(e.attributes.left) < "u" || _typeof(e.attributes.bottom) < "u" || _typeof(e.attributes.right) < "u";
}
function ei(e, t, a) {
  var i = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
  switch (_typeof(t)) {
    case "number":
      return t;
    case "undefined":
      break;
    case "string":
      return Eb(t) ? Qr(e.parentNode, a) * bb(t) : +t;
    default:
      throw new Error("len type error: ".concat(t));
  }
  return i;
}
function iU(e) {
  return e.attributes.position === "absolute" || uU(e) || _typeof(e.attributes.x) < "u" || _typeof(e.attributes.y) < "u";
}
var Ame = 1;
function Sb(e, t) {
  return t ? e.attributes.width : e.attributes.height;
}
function Tb(e, t) {
  return t ? e.layoutNode.x : e.layoutNode.y;
}
function Qr(e, t) {
  return t ? e.layoutNode.width : e.layoutNode.height;
}
function Xr(e, t, a) {
  a ? e.layoutNode.x = t : e.layoutNode.y = t;
}
function Iu(e, t, a) {
  a ? e.layoutNode.width = t : e.layoutNode.height = t;
}
function oU(e, t) {
  switch (_typeof(t)) {
    case "number":
      return t;
    case "string":
      return e * bb(t);
    case "undefined":
      return;
    default:
      throw new Error("offset type error: ".concat(t));
  }
}
var um = /*#__PURE__*/function () {
  function um() {
    _classCallCheck(this, um);
    _defineProperty(this, "rootNode", void 0);
    this.rootNode = this.customCreateRootNode();
  }
  return _createClass(um, [{
    key: "renderRoot",
    value: function renderRoot() {
      this.computeNodeSize(this.rootNode), this.computeNodeLayout(this.rootNode), this.customRenderRoot(this.rootNode);
    }
  }, {
    key: "resolveAxisTLBR",
    value: function resolveAxisTLBR(t, a, i, u, l) {
      var c = Tb(a, l),
        d = Qr(a, l);
      Bu(!(i !== void 0 && u !== void 0), "absolute position: do not set both ".concat(l ? "left" : "top", " and ").concat(l ? "right" : "bottom")), Xr(t, c, l);
      var m = oU(d, i);
      if (m !== void 0) {
        Xr(t, c + m, l);
        return;
      }
      var h = oU(d, u);
      if (h !== void 0) {
        var g = Qr(t, l);
        Xr(t, c + d - h - g, l);
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
        i += Ame, a = a.parentNode;
      }
      return i;
    }
  }, {
    key: "computeNodeSizeAxis",
    value: function computeNodeSizeAxis(t, a, i, u) {
      switch (_typeof(a)) {
        case "number":
          {
            Iu(t, a + u, i);
            return;
          }
        case "string":
          {
            Bu(a.endsWith("%"), "length string must end with %");
            var l = Sb(t.parentNode, i);
            Bu(!(l === "auto" || l === void 0), "The parent of a node of relative size cannot be auto or undefined"), Iu(t, ei(t, a, i) + u, i);
            return;
          }
      }
      throw new Error("computeNodeSize error, not support length: ".concat(a));
    }
  }, {
    key: "applyAlignContentStretch",
    value: function applyAlignContentStretch(t, a, i) {
      if (t.attributes.alignContent === "stretch") {
        var _iterator5 = _createForOfIteratorHelper(t.childNodes),
          _step5;
        try {
          for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
            var u = _step5.value;
            a ? _typeof(u.attributes.height) > "u" && (u.layoutNode.height = t.layoutNode.height - i) : _typeof(u.attributes.width) > "u" && (u.layoutNode.width = t.layoutNode.width - i);
          }
        } catch (err) {
          _iterator5.e(err);
        } finally {
          _iterator5.f();
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
      var c = ei(t, a.padding, u);
      i.padding = c;
      var d = ei(t, a.borderSize, u);
      i.border = d;
      var m = c * 2 + d * 2,
        h = Sb(t, u),
        g = Sb(t, !u),
        x = h === void 0 || h === "auto",
        b = g === void 0 || g === "auto";
      if (typeof a.text == "string") {
        var _this$customMeasureNo = this.customMeasureNode(t),
          O = _this$customMeasureNo.width,
          T = _this$customMeasureNo.height,
          q = u ? O : T,
          D = u ? T : O;
        Iu(t, x ? m + q : m + ei(t, h, u), u), Iu(t, b ? m + D : m + ei(t, g, !u), !u);
        var _iterator6 = _createForOfIteratorHelper(t.childNodes),
          _step6;
        try {
          for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
            var B = _step6.value;
            this.computeNodeSize(B);
          }
        } catch (err) {
          _iterator6.e(err);
        } finally {
          _iterator6.f();
        }
        return;
      }
      x || this.computeNodeSizeAxis(t, h, u, m), b || this.computeNodeSizeAxis(t, g, !u, m);
      var E = 0,
        A = 0,
        C = 0;
      var _iterator7 = _createForOfIteratorHelper(t.childNodes),
        _step7;
      try {
        for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
          var _O2 = _step7.value;
          if (this.computeNodeSize(_O2), _O2.attributes.position === "absolute") continue;
          var _T2 = Qr(_O2, u),
            _q2 = Qr(_O2, !u);
          E = Math.max(E, _T2), A = Math.max(A, _q2), C += _T2;
        }
      } catch (err) {
        _iterator7.e(err);
      } finally {
        _iterator7.f();
      }
      x && Iu(t, C + m, u), b && Iu(t, A + m, !u), this.applyAlignContentStretch(t, u, m);
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
        d = Tb(t, i) + c,
        m = Tb(t, !i) + c,
        h = Qr(t, i) - c * 2,
        g = Qr(t, !i) - c * 2,
        x = d + h,
        b = 0,
        E = 0,
        A = 0;
      var _iterator8 = _createForOfIteratorHelper(t.childNodes),
        _step8;
      try {
        for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
          var _te2 = _step8.value;
          iU(_te2) || (b += Qr(_te2, i), E = Math.max(E, Qr(_te2, !i)), A++);
        }
      } catch (err) {
        _iterator8.e(err);
      } finally {
        _iterator8.f();
      }
      if (A === 0) return;
      var C = u === "end",
        O;
      switch (u) {
        case "start":
          O = d;
          break;
        case "end":
          O = x;
          break;
        case "center":
          O = d + (h - b) / 2;
          break;
        case "space-between":
          {
            O = d;
            break;
          }
        default:
          throw new Error("not support justifyContent: ".concat(u));
      }
      var T = u === "space-between" && A > 1 ? (h - b) / (A - 1) : 0,
        q = function q(te, ie, Q) {
          switch (l) {
            case "start":
            case "space-between":
              return ie;
            case "end":
              return ie + Q - te;
            case "center":
              return ie + (Q - te) / 2;
            default:
              throw new Error("not support alignItems: ".concat(l));
          }
        },
        D = m,
        B = 0,
        G = t.childNodes,
        V = G.length;
      for (var te = 0; te < V; te++) {
        var ie = C ? V - 1 - te : te,
          Q = G[ie];
        if (iU(Q)) continue;
        var Z = Qr(Q, i),
          X = Qr(Q, !i);
        if (B = Math.max(B, X), C) {
          var le = O - Z;
          le < d ? (D += B, O = x, Xr(Q, O - Z, i), Xr(Q, q(X, D, B), !i), O -= Z) : (Xr(Q, le, i), Xr(Q, q(X, D, g), !i), O = le);
        } else O + Z > x && u !== "space-between" ? (D += B, O = d, Xr(Q, O, i), Xr(Q, q(X, D, B), !i), O += Z) : (Xr(Q, O, i), Xr(Q, q(X, D, g), !i), O += Z + T);
      }
    }
  }, {
    key: "computeNodeLayout",
    value: function computeNodeLayout(t) {
      var a = t.layoutNode,
        i = t.attributes;
      switch (uU(t) && this.computedNodeTLBR(t), typeof i.x == "number" && (a.x = i.x), typeof i.y == "number" && (a.y = i.y), i.position) {
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
      var _iterator9 = _createForOfIteratorHelper(t.childNodes),
        _step9;
      try {
        for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
          var u = _step9.value;
          this.computeNodeLayout(u);
        }
      } catch (err) {
        _iterator9.e(err);
      } finally {
        _iterator9.f();
      }
    }
  }, {
    key: "dispatchMouseEventInner",
    value: function dispatchMouseEventInner(t, a, i) {
      if (!(t.attributes.hide || t.attributes.pointerEvents === "none")) {
        var _iterator0 = _createForOfIteratorHelper(t.childNodes),
          _step0;
        try {
          for (_iterator0.s(); !(_step0 = _iterator0.n()).done;) {
            var u = _step0.value;
            this.dispatchMouseEventInner(u, a, i);
          }
        } catch (err) {
          _iterator0.e(err);
        } finally {
          _iterator0.f();
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
      for (var _i9 = 0, _yb = yb; _i9 < _yb.length; _i9++) {
        var u = _yb[_i9];
        var l = i[u];
        if (!l.length) continue;
        var c = l.sort(function (d, m) {
          return (m.attributes.zIndex || 0) - (d.attributes.zIndex || 0);
        });
        var _iterator1 = _createForOfIteratorHelper(c),
          _step1;
        try {
          for (_iterator1.s(); !(_step1 = _iterator1.n()).done;) {
            var _d$attributes$u, _d$attributes;
            var d = _step1.value;
            a.bubbles && ((u === "onMouseLeave" || u === "onMouseEnter") && (a.target = d), (_d$attributes$u = (_d$attributes = d.attributes)[u]) === null || _d$attributes$u === void 0 ? void 0 : _d$attributes$u.call(_d$attributes, a));
          }
        } catch (err) {
          _iterator1.e(err);
        } finally {
          _iterator1.f();
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
function qb(e, t) {
  e.attributes = t;
}
var Ome = ["[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)", "(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-nq-uy=><~]))"].join("|"),
  Cme = new RegExp(Ome, "g");
var sU = "@mpv-easy/root";
var Xl = function Xl(e) {
  var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [new bn({
    cache: !0
  }), new bn({
    cache: !0
  }), new bn({
    cache: !0
  })];
  return {
    attributes: {},
    childNodes: [],
    parentNode: void 0,
    layoutNode: new am(),
    props: {
      nodeName: e,
      osdOverlays: t
    },
    dirty: !0
  };
};
var Rme = new oa();
function Nme(e) {
  var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var a = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "break-all";
  if (!t || e.length <= t) return e;
  switch (a) {
    case "break-word":
      {
        var i = [],
          u = [];
        var _iterator10 = _createForOfIteratorHelper(e.split(" ")),
          _step10;
        try {
          for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
            var l = _step10.value;
            l === "\n" ? (i.push(u.join(" ")), u = []) : (u.length === 0 || u.join(" ").length + l.length <= t ? u.push(l) : (i.push(u.join(" ")), u = [l]), u.join(" ").length >= t && (i.push(u.join(" ")), u = []));
          }
        } catch (err) {
          _iterator10.e(err);
        } finally {
          _iterator10.f();
        }
        return u.length && (i.push(u.join(" ")), u = []), i.join("\n");
      }
    default:
      {
        var _i0 = [],
          _u4 = [];
        var _iterator11 = _createForOfIteratorHelper(e.split("")),
          _step11;
        try {
          for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
            var _l5 = _step11.value;
            _l5 === "\n" ? (_i0.push(_u4.join("")), _u4 = []) : (_u4.push(_l5), _u4.length === t && (_i0.push(_u4.join("")), _u4 = []));
          }
        } catch (err) {
          _iterator11.e(err);
        } finally {
          _iterator11.f();
        }
        return _u4.length && (_i0.push(_u4.join("")), _u4 = []), _i0.join("\n");
      }
  }
}
function _b(e, t, a) {
  var _ua, _ua2, _ua3, _ua4, _ua5;
  var i = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : Hi();
  var u = i * t,
    l = i * a,
    _e$attributes = e.attributes,
    _e$attributes$text = _e$attributes.text,
    c = _e$attributes$text === void 0 ? "" : _e$attributes$text,
    d = _e$attributes.draw;
  if (typeof d == "string") return d;
  if (typeof d == "function") return d(i);
  var m = Nme(c.replaceAll("\r\n", "\n"), e.attributes.maxWidth, e.attributes.wordBreak).replaceAll("\n", "\\N").replaceAll("	", "    "),
    h = (_ua = ua(e, "font")) !== null && _ua !== void 0 ? _ua : "",
    g = (_ua2 = ua(e, "color")) !== null && _ua2 !== void 0 ? _ua2 : "#FFFFFFFF",
    x = (_ua3 = ua(e, "fontSize")) !== null && _ua3 !== void 0 ? _ua3 : "5%",
    b = ua(e, "fontWeight") === "bold",
    E = (_ua4 = ua(e, "fontBorderSize")) !== null && _ua4 !== void 0 ? _ua4 : 0,
    A = (_ua5 = ua(e, "fontBorderColor")) !== null && _ua5 !== void 0 ? _ua5 : "#000000",
    C = "FF";
  return (g.length === 7 || g.length === 6) && (C = "00"), (g.length === 8 || g.length === 9) && (C = g.slice(-2), g = g.slice(0, -2)), C === "FF" ? "" : Rme.clear().pos(u, l).font(h).fontSize(ei(e, x, !1, 32) * i).fontBorderColor(A).fontBorderSize(ei(e, E, !1, 0) * i).color(g).alpha(C).bold(b).append(m).toString();
}
var sm;
function lU(e) {
  var t = Hi(),
    a = _b(e, 0, 0, t);
  sm || (sm = new bn({
    computeBounds: !0,
    hidden: !0
  })), sm.data = a;
  var _sm$update = sm.update(1 / t),
    i = _sm$update.width,
    u = _sm$update.height,
    l = e.layoutNode;
  return l.textRect.width = i, l.textRect.height = u, {
    width: i,
    height: u
  };
}
var cU = "@mpv-easy/root",
  wme = "@mpv-easy/box",
  lm,
  Pu = function Pu() {
    return lm || (lm = Xl(cU), lm);
  },
  fU = 30;
function Mme(e) {
  var _ua6;
  var t = (_ua6 = ua(e, "hide")) !== null && _ua6 !== void 0 ? _ua6 : !1,
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
    var _iterator12 = _createForOfIteratorHelper(e.props.osdOverlays),
      _step12;
    try {
      for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {
        var d = _step12.value;
        d.hidden = !0, d.computeBounds = !1, d.update();
      }
    } catch (err) {
      _iterator12.e(err);
    } finally {
      _iterator12.f();
    }
    typeof c.backgroundImage == "string" && e.props.imageOverlay && ((_e$props$imageOverlay = e.props.imageOverlay) === null || _e$props$imageOverlay === void 0 ? void 0 : _e$props$imageOverlay.remove());
  } else if (e.props.nodeName === "@mpv-easy/box") {
    l._hideCache = !1;
    var _d3 = Hi(),
      m = c.backgroundColor,
      h = c.borderSize,
      _c$borderColor = c.borderColor,
      g = _c$borderColor === void 0 ? "#FFFFFFFF" : _c$borderColor,
      _c$padding = c.padding,
      x = _c$padding === void 0 ? 0 : _c$padding,
      _c$justifyContent = c.justifyContent,
      b = _c$justifyContent === void 0 ? "start" : _c$justifyContent,
      _c$alignItems = c.alignItems,
      E = _c$alignItems === void 0 ? "start" : _c$alignItems,
      _c$borderRadius = c.borderRadius,
      A = _c$borderRadius === void 0 ? 0 : _c$borderRadius,
      _c$flexDirection = c.flexDirection,
      C = _c$flexDirection === void 0 ? "column" : _c$flexDirection,
      O = c.backgroundImage,
      _c$backgroundImageFor = c.backgroundImageFormat,
      T = _c$backgroundImageFor === void 0 ? "bgra" : _c$backgroundImageFor,
      q = typeof x == "string" ? Kd(x) * l.width : x,
      D = typeof A == "string" ? Kd(A) * l.width : A;
    g.length === 7 && (g += "00"), typeof h == "string" && (h = l.width * Kd(h));
    var B = l.x,
      G = l.y,
      V = l.width,
      te = l.height;
    if (_typeof(h) < "u" && !(g.length > 7 && g.slice(-2) === "FF") && (u.data = aU({
      x: B * _d3,
      y: G * _d3,
      width: V * _d3,
      height: te * _d3,
      borderColor: g,
      borderSize: h * _d3
    }), u.hidden = !1, u.computeBounds = !1, u.hidden = !1, u.update()), h = h || 0, _typeof(c.text) < "u" || _typeof(c.draw) < "u") {
      var Z = 0 + q + l.x + h,
        X = 0 + q + l.y + h,
        le = l.textRect;
      switch (C) {
        case "column":
          {
            switch (b) {
              case "start":
                break;
              case "center":
                {
                  Z += (l.width - le.width - 2 * q - 2 * h) / 2;
                  break;
                }
              case "end":
                {
                  Z += l.width - le.width - 2 * q - 2 * h;
                  break;
                }
            }
            switch (E) {
              case "start":
                break;
              case "center":
                {
                  X += (l.height - le.height - 2 * q - 2 * h) / 2;
                  break;
                }
              case "end":
                {
                  X += l.height - le.height - 2 * q - 2 * h;
                  break;
                }
            }
            break;
          }
        case "row":
          {
            switch (b) {
              case "start":
                break;
              case "center":
                {
                  X += (l.height - le.height - 2 * q - 2 * h) / 2;
                  break;
                }
              case "end":
                {
                  X += l.height - le.height - 2 * q - 2 * h;
                  break;
                }
            }
            switch (E) {
              case "start":
                break;
              case "center":
                {
                  Z += (l.width - le.width - 2 * q - 2 * h) / 2;
                  break;
                }
              case "end":
                {
                  Z += l.width - le.width - 2 * q - 2 * h;
                  break;
                }
            }
          }
        default:
          throw new Error("text layout not support: justifyContent ".concat(b, " alignItems ").concat(E));
      }
      var ve = _b(e, Z, X, _d3);
      a.data = ve, a.hidden = !1, a.computeBounds = !0;
    }
    var Q = a.update(1 / _d3);
    if (_typeof(m) < "u" && !(m.length > 7 && m.slice(-2) === "FF")) {
      m.length === 7 && (m += "00");
      var _Z3 = new mn(B + h + q, G + h + q, V - 2 * h - 2 * q, te - 2 * h - 2 * q),
        _X2 = nU(_objectSpread(_objectSpread({}, _Z3.scale(_d3)), {}, {
          color: m,
          borderRadius: D * _d3
        }));
      i.data = _X2, i.hidden = !1, i.update();
    } else i.data = "", i.hidden = !0, i.update();
    if (typeof O == "string" && !t) {
      var _Z4 = c.height || c.imageHeight,
        _X3 = c.width || c.imageWidth,
        _le2 = c.imageWidth || _X3,
        _ve2 = c.imageHeight || _Z4,
        Se = c.id;
      if (typeof Se != "number" || Se < 0 || Se > 63) throw new Error("backgroundImage'id must be a number in [0, 63]");
      if (typeof _X3 != "number" || typeof _Z4 != "number" || typeof _le2 != "number" || typeof _ve2 != "number") throw new Error("backgroundImage's width/imageWidth and height/imageHeight must be number");
      e.props.imageOverlay || (e.props.imageOverlay = new Xd(Se));
      var be = e.props.imageOverlay;
      O = O.split("?")[0];
      var Ze = Zi(O);
      if (!Ze) print("backgroundImage file not found: ".concat(O));else {
        var ht = Ze.size;
        _le2 * _ve2 * 4 !== ht ? print("backgroundImage size error: ".concat(_le2, "-").concat(_ve2, "-").concat(ht)) : (be.x = B | 0, be.y = G | 0, be.file = O, be.fmt = T, be.w = _le2, be.h = _ve2, be.offset = 0, be.stride = (_le2 | 0) << 2, be.dw = _X3, be.dh = _Z4, be.update());
      }
    }
  }
}
function pU(e) {
  Mme(e);
  var _iterator13 = _createForOfIteratorHelper(e.childNodes),
    _step13;
  try {
    for (_iterator13.s(); !(_step13 = _iterator13.n()).done;) {
      var t = _step13.value;
      pU(t);
    }
  } catch (err) {
    _iterator13.e(err);
  } finally {
    _iterator13.f();
  }
}
var Ob = /*#__PURE__*/function (_um) {
    function Ob() {
      var _this5;
      var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      _classCallCheck(this, Ob);
      _this5 = _callSuper(this, Ob), _this5.rootNode = Pu();
      return _this5;
    }
    _inherits(Ob, _um);
    return _createClass(Ob, [{
      key: "customCreateMouseEvent",
      value: function customCreateMouseEvent(t, a, i, u, l) {
        return new nm(t, a, i, u, l);
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
        return Xl(wme);
      }
    }, {
      key: "customIsRootNode",
      value: function customIsRootNode(t) {
        return t.props.nodeName === cU;
      }
    }, {
      key: "customCreateRootNode",
      value: function customCreateRootNode() {
        return Pu();
      }
    }, {
      key: "customRenderRoot",
      value: function customRenderRoot(t) {
        pU(t);
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
        return lU(t);
      }
    }]);
  }(um),
  Ab;
function Ql() {
  var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return Ab || (Ab = new Ob(e));
}
var dU = function dU(e, t, a) {
    var i = Ql().customCreateMouseEvent(e, t.x, t.y, t.hover, a);
    Ql().dispatchMouseEvent(e, i);
  },
  mU = function mU() {
    Ql().renderRoot();
  };
function Dme(e, t, a, i) {
  var u = a / 2,
    l = i / 2;
  return e < u ? t < l ? "left-top" : "left-bottom" : t < l ? "right-top" : "right-bottom";
}
function Bme(e, t, a, i) {
  var _ref8 = Fd() || {},
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
function vU(e, t, a) {
  if (!im(e, "hide")) {
    var _e$attributes$title;
    var _iterator14 = _createForOfIteratorHelper(e.childNodes),
      _step14;
    try {
      for (_iterator14.s(); !(_step14 = _iterator14.n()).done;) {
        var i = _step14.value;
        var u = vU(i, t, a);
        if (u) return u;
      }
    } catch (err) {
      _iterator14.e(err);
    } finally {
      _iterator14.f();
    }
    if (e.layoutNode.hasPoint(t, a) && (_e$attributes$title = e.attributes.title) !== null && _e$attributes$title !== void 0 && _e$attributes$title.length) return e;
  }
}
var hU = function hU(_ref9) {
  var _h3;
  var e = _ref9.mousePos,
    t = _objectWithoutProperties(_ref9, _excluded2);
  var _ref0 = (0, En.useState)(!1),
    _ref1 = _slicedToArray(_ref0, 2),
    a = _ref1[0],
    i = _ref1[1],
    _ref10 = (0, En.useState)(""),
    _ref11 = _slicedToArray(_ref10, 2),
    u = _ref11[0],
    l = _ref11[1],
    _ref12 = (0, En.useState)({
      x: 0,
      y: 0
    }),
    _ref13 = _slicedToArray(_ref12, 2),
    c = _ref13[0],
    d = _ref13[1],
    m = (0, En.useRef)(null),
    h;
  if (!e) h = void 0;else {
    var g = e.x,
      x = e.y,
      b = e.hover;
    b ? h = vU(Pu(), g, x) : h = void 0;
  }
  return (0, En.useEffect)(function () {
    var _h2;
    if (!h) {
      i(!1);
      return;
    }
    var g = (_h2 = h) === null || _h2 === void 0 ? void 0 : _h2.attributes.title;
    if (g !== null && g !== void 0 && g.length && e) {
      var _x11 = Dme(e.x, e.y, Pu().layoutNode.width, Pu().layoutNode.height),
        _b2 = Bme(m.current, e.x, e.y, _x11);
      d(_b2), i(!0), l(g);
    } else i(!1);
  }, [e === null || e === void 0 ? void 0 : e.x, e === null || e === void 0 ? void 0 : e.y, e === null || e === void 0 ? void 0 : e.hover, (_h3 = h) === null || _h3 === void 0 ? void 0 : _h3.attributes.text]), En.default.createElement(dn, _objectSpread(_objectSpread({
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
var Cb = J(_t());
var Ime = J(_t());
var Pme = J(_t()),
  bwe = [].concat(W4, $4, e6, J4);
var cm = J(_t()),
  Ume = function Ume(e, t, a) {
    switch (t) {
      case "bool":
        {
          Ja(e, a);
          break;
        }
      case "string":
        {
          DP(e, a);
          break;
        }
      case "number":
        {
          cb(e, a);
          break;
        }
      case "native":
        {
          aa(e, a);
          break;
        }
      default:
        throw new Error("prop type error: ".concat(e, " ").concat(t));
    }
  },
  zme = function zme(e, t) {
    switch (t) {
      case "bool":
        return Ld(e);
      case "string":
        return Ll(e);
      case "number":
        return ka(e);
      case "native":
        return na(e);
      default:
        throw new Error("prop type error: ".concat(e, " ").concat(t));
    }
  };
function gU(e, t, a) {
  var _ref14 = (0, cm.useState)(_typeof(a) > "u" ? zme(e, t) : a),
    _ref15 = _slicedToArray(_ref14, 2),
    i = _ref15[0],
    u = _ref15[1];
  return (0, cm.useEffect)(function () {
    var l = function l(c, d) {
      Ul(i, d) || u(d);
    };
    return gn(e, t, l), function () {
      try {
        mp.unobserve_property(l);
      } catch (_unused75) {}
    };
  }, [e, t]), [i, function (l) {
    var c = typeof l == "function" ? l(i) : l;
    i !== c && (u(c), Ume(e, t, c));
  }];
}
function yU(e, t) {
  return gU(e, "native", t);
}
function xU(e, t) {
  return gU(e, "string", t);
}
var bU = J(_t());
var SU = J(_t());
var EU = J(_t()),
  Lme = _typeof(globalThis.window) < "u",
  Nwe = !Lme || "Deno" in globalThis;
var FU = J(UU()),
  mm = J(jU());
var HU = {};
function GU(e) {
  var _iterator15 = _createForOfIteratorHelper(e.childNodes),
    _step15;
  try {
    for (_iterator15.s(); !(_step15 = _iterator15.n()).done;) {
      var t = _step15.value;
      GU(t);
    }
  } catch (err) {
    _iterator15.e(err);
  } finally {
    _iterator15.f();
  }
  var _iterator16 = _createForOfIteratorHelper(e.props.osdOverlays),
    _step16;
  try {
    for (_iterator16.s(); !(_step16 = _iterator16.n()).done;) {
      var _t2 = _step16.value;
      _t2.remove();
    }
  } catch (err) {
    _iterator16.e(err);
  } finally {
    _iterator16.f();
  }
  typeof e.attributes.backgroundImage == "string" && e.props.imageOverlay && (e.props.imageOverlay.remove(), e.props.imageOverlay.destroy());
}
function Hme(e) {
  return (0, FU.default)({
    supportsMutation: !0,
    supportsPersistence: !1,
    supportsMicrotasks: !1,
    resolveUpdatePriority: function resolveUpdatePriority() {
      return mm.DiscreteEventPriority;
    },
    getCurrentUpdatePriority: function getCurrentUpdatePriority() {
      return mm.DiscreteEventPriority;
    },
    setCurrentUpdatePriority: function setCurrentUpdatePriority() {
      return mm.DiscreteEventPriority;
    },
    maySuspendCommit: function maySuspendCommit() {
      return !1;
    },
    appendChildToContainer: function appendChildToContainer(t, a) {
      om(t, a), e();
    },
    insertInContainerBefore: xb,
    commitUpdate: function commitUpdate(t, a, i, u) {
      qb(t, u), e();
    },
    commitTextUpdate: function commitTextUpdate() {
      throw new Error("Text components not supported");
    },
    commitMount: function commitMount() {},
    removeChildFromContainer: function removeChildFromContainer(t, a) {
      Yl(t, a), e();
    },
    createInstance: function createInstance(t, a, i, u, l) {
      var c = Xl("@mpv-easy/box");
      return qb(c, a), c;
    },
    createTextInstance: function createTextInstance(t, a, i, u) {
      throw new Error("not support Text components");
    },
    hideTextInstance: function hideTextInstance() {},
    unhideTextInstance: function unhideTextInstance() {},
    hideInstance: function hideInstance() {},
    unhideInstance: function unhideInstance() {},
    appendInitialChild: function appendInitialChild(t, a) {
      om(t, a), e();
    },
    appendChild: function appendChild(t, a) {
      om(t, a), e();
    },
    insertBefore: function insertBefore(t, a, i) {
      xb(t, a, i), e();
    },
    removeChild: function removeChild(t, a) {
      Yl(t, a), e();
    },
    finalizeInitialChildren: function finalizeInitialChildren() {
      return !1;
    },
    shouldSetTextContent: function shouldSetTextContent() {
      return !1;
    },
    getRootHostContext: function getRootHostContext() {
      return HU;
    },
    getChildHostContext: function getChildHostContext() {
      return HU;
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
    detachDeletedInstance: GU,
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
var Fme = 64;
function Gme() {
  return {
    frame: 0,
    max: 0,
    lastRender: 0,
    renderHandle: 0,
    fpsList: []
  };
}
function Kme() {
  var _ref16 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
    _ref16$enableMouseMov = _ref16.enableMouseMoveEvent,
    e = _ref16$enableMouseMov === void 0 ? !0 : _ref16$enableMouseMov,
    _ref16$fps = _ref16.fps,
    t = _ref16$fps === void 0 ? fU : _ref16$fps,
    _ref16$flex = _ref16.flex,
    a = _ref16$flex === void 0 ? Ql() : _ref16$flex,
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
    m = _ref16$customDispatch === void 0 ? dU : _ref16$customDispatch,
    _ref16$mouseKeyBindin = _ref16.mouseKeyBinding,
    h = _ref16$mouseKeyBindin === void 0 ? !1 : _ref16$mouseKeyBindin;
  if (!d) {
    var C = function C() {
      b.lastRender = Date.now(), clearTimeout(b.renderHandle), b.renderHandle = 0, b.frame++;
      var O = Date.now();
      mU();
      var T = Date.now() - O;
      if (b.max = Math.max(b.max, T), b.fpsList.length >= E && b.fpsList.shift(), b.fpsList.push(T), i) {
        var q = b.fpsList.reduce(function (D, B) {
          return D + B;
        }, 0) / b.fpsList.length;
        print("render time(react):", b.frame, T, b.max, q);
      }
      c && b.frame >= c && t6();
    };
    var x = C;
    var b = Gme(),
      E = Math.min(u, Fme),
      A = 1e3 / t;
    d = function d() {
      if (!l) {
        C();
        return;
      }
      var q = Date.now() - b.lastRender;
      q >= A ? C() : (clearTimeout(b.renderHandle), b.renderHandle = +setTimeout(C, A - q));
    };
  }
  var g = Hme(d);
  return function (b) {
    var E = function E(Q) {
        throw Q;
      },
      A = g.createContainer(a.rootNode, 0, null, !1, null, "mpv-easy", E, E, E, function () {}),
      C = {
        x: 0,
        y: 0,
        hover: !1
      },
      O = function O(Q, Z) {
        C = Z, e && m(a.rootNode, C, {
          event: "press",
          is_mouse: !0,
          key: "",
          canceled: !1,
          scale: 0,
          arg: ""
        });
      };
    gn("mouse-pos", "native", O);
    var T = function T(Q) {
        var Z = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "down";
        m(a.rootNode, C, {
          key_name: Q,
          key: Q,
          event: Z,
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
      var Q = function Q(Z) {
        return m(a.rootNode, C, Z);
      };
      Ou("MOUSE_BTN0", "MPV_EASY_MOUSE_LEFT", Q, q), Ou("MOUSE_BTN1", "MPV_EASY_MOUSE_MID", Q, q), Ou("MOUSE_BTN3", "MPV_EASY_WHEEL_UP", Q, q), Ou("MOUSE_BTN4", "MPV_EASY_WHEEL_DOWN", Q, q);
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
    var D = 0,
      B = 0,
      G = new Cu("osd-dimensions"),
      V = function V(Q, Z) {
        var X = a.rootNode;
        tr(X, "id", sU), tr(X, "width", Q), tr(X, "height", Z), tr(X, "position", "relative"), tr(X, "color", "#FFFFFF"), tr(X, "backgroundColor", "#000000FF"), tr(X, "display", "flex"), tr(X, "padding", 0), tr(X, "borderSize", 0), tr(X, "x", 0), tr(X, "y", 0), tr(X, "zIndex", 0), tr(X, "fontSize", 16), to(X, "x", 0), to(X, "y", 0), to(X, "width", Q), to(X, "height", Z), to(X, "padding", 0), to(X, "border", 0);
      };
    function te() {
      var _ref17 = G.value || {
          w: 0,
          h: 0
        },
        Q = _ref17.w,
        Z = _ref17.h;
      !Q || !Z || D === Q && B === Z || (D = Q, B = Z, V(Q, Z), g.updateContainer(b, A, null, null));
    }
    var ie = G.observe(te);
    return function () {
      try {
        G.unobserve(ie), mp.unobserve_property(O);
      } catch (_unused76) {}
    };
  };
}
var Ub,
  KU = function KU(e) {
    var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return Ub || (Ub = Kme(t)), Ub(e);
  };
var $l = 7500,
  vm = 7500,
  Lu = {
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
    targetLang: Wa(),
    sourceLang: "",
    subSrtScale: .6,
    firstSubColor: "",
    secondSubColor: "",
    firstSubFontface: "",
    secondSubFontface: "",
    subOutputPath: "",
    maxChunkChars: $l,
    maxChunkEncodeChars: vm
  },
  hm = {
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
var VU = {
  "sec-ch-ua": '"Google Chrome";v="129", "Not=A?Brand";v="8", "Chromium";v="129"',
  "x-browser-year": "2024",
  "x-browser-channel": "stable",
  "sec-ch-ua-arch": '"x86"',
  "sec-ch-ua-bitness": '"64"',
  "sec-ch-ua-form-factors": '"Desktop"',
  "x-browser-copyright": "Copyright 2024 Google LLC. All rights reserved."
};
function YU(_x12) {
  return _YU.apply(this, arguments);
}
function _YU() {
  _YU = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee0(e) {
    var t, a, _t1;
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
          return ia(t, {
            headers: VU
          }).then(function (u) {
            return u.text();
          });
        case 2:
          a = _context0.v;
          return _context0.a(2, JSON.parse(a)[2]);
        case 3:
          _context0.p = 3;
          _t1 = _context0.v;
          console.log("detect error: ", _t1);
          return _context0.a(2);
        case 4:
          return _context0.a(2);
      }
    }, _callee0, null, [[1, 3]]);
  }));
  return _YU.apply(this, arguments);
}
function ec(_x13, _x14, _x15) {
  return _ec.apply(this, arguments);
}
function _ec() {
  _ec = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee1(e, t, a) {
    var i, u, l, c, d, m, _t10;
    return _regenerator().w(function (_context1) {
      while (1) switch (_context1.p = _context1.n) {
        case 0:
          if (!(e.trim().length === 0)) {
            _context1.n = 1;
            break;
          }
          return _context1.a(2, "");
        case 1:
          i = a === null || a === void 0 ? void 0 : a.split("-")[0].toLowerCase(), u = t.split("-")[0].toLowerCase(), l = kd.map(function (c) {
            return c.split("-")[0];
          });
          (!u || !l.includes(u)) && (u = Wa().split("-")[0].toLowerCase()), (!i || !l.includes(i)) && (i = "auto");
          _context1.p = 2;
          c = "https://translate.googleapis.com/translate_a/single?client=gtx&sl=".concat(i, "&tl=").concat(u, "&dt=t&q=").concat(encodeURIComponent(e));
          _context1.n = 3;
          return Mu(c, function () {
            return ia(c, {
              headers: VU
            }).then(function (g) {
              return g.text();
            });
          });
        case 3:
          d = _context1.v;
          m = JSON.parse(d);
          return _context1.a(2, !m || !m[0] ? "" : m[0].map(function (g) {
            return g[0];
          }).join(""));
        case 4:
          _context1.p = 4;
          _t10 = _context1.v;
          return _context1.a(2, (console.log("translate error: ", _t10), ""));
      }
    }, _callee1, null, [[2, 4]]);
  }));
  return _ec.apply(this, arguments);
}
function Vme(e, t) {
  return e.replace(/\$(\w+)/g, function (a, i) {
    var _t$i;
    return (_t$i = t[i]) !== null && _t$i !== void 0 ? _t$i : "";
  });
}
function Yme(_x16, _x17, _x18) {
  return _Yme.apply(this, arguments);
}
function _Yme() {
  _Yme = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee11(e, t, a) {
    var i,
      u,
      l,
      c,
      d,
      m,
      h,
      g,
      x,
      b,
      C,
      O,
      T,
      q,
      E,
      _iterator18,
      _step18,
      _C3,
      _O3,
      _args0 = arguments;
    return _regenerator().w(function (_context11) {
      while (1) switch (_context11.n) {
        case 0:
          i = _args0.length > 3 && _args0[3] !== undefined ? _args0[3] : $l;
          u = _args0.length > 4 && _args0[4] !== undefined ? _args0[4] : vm;
          l = new $a(e), c = l.blocks, d = [], m = [], h = 0, g = 0, x = c.length, b = "\n\n\n";
        case 1:
          if (!(g < x)) {
            _context11.n = 8;
            break;
          }
          C = g;
        case 2:
          if (!(g < x)) {
            _context11.n = 6;
            break;
          }
          O = c[g].text, T = h + O.length;
          if (!(T >= i)) {
            _context11.n = 3;
            break;
          }
          return _context11.a(3, 6);
        case 3:
          q = [].concat(_toConsumableArray(m), [O]);
          if (!(encodeURIComponent(q.join(b)).length >= u)) {
            _context11.n = 4;
            break;
          }
          return _context11.a(3, 6);
        case 4:
          h = T, m.push(O), g++;
        case 5:
          _context11.n = 2;
          break;
        case 6:
          m.length === 0 && g < x && (m.push(c[g].text), g++), d.push({
            st: C,
            text: m.join(b)
          }), m = [], h = 0;
        case 7:
          _context11.n = 1;
          break;
        case 8:
          _context11.n = 9;
          return Promise.all(d.map(/*#__PURE__*/function () {
            var _ref38 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee10(C) {
              var O;
              return _regenerator().w(function (_context10) {
                while (1) switch (_context10.n) {
                  case 0:
                    _context10.n = 1;
                    return ec(C.text, t, a);
                  case 1:
                    O = _context10.v.split(b);
                    return _context10.a(2, {
                      st: C.st,
                      ret: O
                    });
                }
              }, _callee10);
            }));
            return function (_x31) {
              return _ref38.apply(this, arguments);
            };
          }()));
        case 9:
          E = _context11.v;
          _iterator18 = _createForOfIteratorHelper(E);
          try {
            for (_iterator18.s(); !(_step18 = _iterator18.n()).done;) {
              _C3 = _step18.value;
              for (_O3 = 0; _O3 < _C3.ret.length; _O3++) c[_C3.st + _O3] && (c[_C3.st + _O3].text = _C3.ret[_O3]);
            }
          } catch (err) {
            _iterator18.e(err);
          } finally {
            _iterator18.f();
          }
          return _context11.a(2, l.toString());
      }
    }, _callee11);
  }));
  return _Yme.apply(this, arguments);
}
function Xme(_x19) {
  return _Xme.apply(this, arguments);
}
function _Xme() {
  _Xme = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee12(e) {
    var t,
      i,
      u,
      _args1 = arguments;
    return _regenerator().w(function (_context12) {
      while (1) switch (_context12.n) {
        case 0:
          t = _args1.length > 1 && _args1[1] !== undefined ? _args1[1] : $l;
          i = new $a(e).blocks;
          if (!(i.length === 0)) {
            _context12.n = 1;
            break;
          }
          return _context12.a(2);
        case 1:
          u = i.filter(function (l) {
            return l.text.trim().length > 0;
          }).slice(0, 10).map(function (l) {
            return l.text;
          }).join(" ");
          _context12.n = 2;
          return YU(u.slice(0, t));
        case 2:
          return _context12.a(2, _context12.v);
      }
    }, _callee12);
  }));
  return _Xme.apply(this, arguments);
}
var rr, Ht;
function XU() {
  rr = void 0, Ht = void 0;
}
function Qme(e) {
  var t = e.split(".");
  if (t.length < 2) return;
  var a = t[t.length - 2].toLowerCase(),
    i = kd.find(function (u) {
      return u.toLowerCase().startsWith(a);
    });
  if (i) return i;
}
function Zme(e, t, a, i, u, l, c, d, m) {
  var h = Nr(e),
    g = Nr(t),
    x = new $a(h),
    b = new $a(g),
    E = new $a(h),
    A = ["size=\"".concat(i, "\"")],
    C = ["size=\"".concat(u, "\"")];
  l.length && A.push("color=\"".concat(l, "\"")), d.length && A.push("face=\"".concat(d, "\"")), c.length && C.push("color=\"".concat(c, "\"")), m.length && C.push("face=\"".concat(m, "\""));
  var O = A.join(" "),
    T = C.join(" ");
  for (var D = 0; D < E.blocks.length; D++) {
    var B = x.blocks[D].text.split("\n"),
      G = b.blocks[D].text.split("\n"),
      V = [];
    for (var te = 0; te < B.length; te++) V.push("<font ".concat(O, " >").concat(B[te] || "", "</font>\n<font ").concat(T, " >").concat(G[te] || "", "</font>"));
    E.blocks[D].text = V.join("\n");
  }
  var q = E.toString();
  xn(a, q);
}
function ro() {
  return _ro.apply(this, arguments);
}
function _ro() {
  _ro = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee13() {
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
      x,
      b,
      E,
      A,
      C,
      O,
      T,
      q,
      D,
      B,
      G,
      V,
      te,
      ie,
      ve,
      Se,
      be,
      Q,
      Z,
      X,
      _ve3,
      _Se,
      le,
      _ve4,
      _Se2,
      _be2,
      _ve5,
      _args10 = arguments,
      _t11,
      _t12,
      _t13,
      _t14,
      _t15;
    return _regenerator().w(function (_context13) {
      while (1) switch (_context13.n) {
        case 0:
          e = _args10.length > 0 && _args10[0] !== undefined ? _args10[0] : {};
          t = e.dual, _e$firstFontSize = e.firstFontSize, a = _e$firstFontSize === void 0 ? 22 : _e$firstFontSize, _e$secondFontSize = e.secondFontSize, i = _e$secondFontSize === void 0 ? 11 : _e$secondFontSize, _e$firstSubColor = e.firstSubColor, u = _e$firstSubColor === void 0 ? "" : _e$firstSubColor, _e$secondSubColor = e.secondSubColor, l = _e$secondSubColor === void 0 ? "" : _e$secondSubColor, _e$firstSubFontface = e.firstSubFontface, c = _e$firstSubFontface === void 0 ? "" : _e$firstSubFontface, _e$secondSubFontface = e.secondSubFontface, d = _e$secondSubFontface === void 0 ? "" : _e$secondSubFontface, _e$maxChunkChars = e.maxChunkChars, m = _e$maxChunkChars === void 0 ? $l : _e$maxChunkChars, _e$maxChunkEncodeChar = e.maxChunkEncodeChars, h = _e$maxChunkEncodeChar === void 0 ? vm : _e$maxChunkEncodeChar, g = $i();
          if (g) {
            _context13.n = 1;
            break;
          }
          return _context13.a(2, (gr("subtitle not found"), !1));
        case 1:
          x = Pd("path");
          if (!(!vt(x) && !g.external)) {
            _context13.n = 2;
            break;
          }
          return _context13.a(2, (gr("not support remote video with embedded subtitles"), !1));
        case 2:
          b = (_e$targetLang = e.targetLang) !== null && _e$targetLang !== void 0 && _e$targetLang.length ? e.targetLang : Wa();
          if (!(t && Ht && g.title === "dual.".concat(b))) {
            _context13.n = 3;
            break;
          }
          return _context13.a(2, (aa("sid", Ht.id), Dl(g.id), Ht = void 0, !0));
        case 3:
          if (!(!t && rr && g.title === b)) {
            _context13.n = 4;
            break;
          }
          return _context13.a(2, (aa("sid", rr.id), Dl(g.id), rr = void 0, !0));
        case 4:
          if (!(t && rr && (aa("sid", rr.id), Dl(g.id), rr = void 0), !t && Ht && (aa("sid", Ht.id), Dl(g.id), Ht = void 0), g = $i(), !g)) {
            _context13.n = 5;
            break;
          }
          return _context13.a(2, (gr("subtitle not found"), !1));
        case 5:
          E = g;
          g.title === b && rr ? E = rr : g.title === "dual.".concat(b) && Ht && (E = Ht), t ? Ht = E : rr = E;
          A = wu(), C = Jx(x);
          if (C) {
            _context13.n = 6;
            break;
          }
          return _context13.a(2, (gr("videoName not found"), !1));
        case 6:
          O = (_e$sourceLang = e.sourceLang) !== null && _e$sourceLang !== void 0 && _e$sourceLang.length ? e.sourceLang : E.lang, T = $d([x, O, b, E.id, a, i, u, l, c, d].join("-")), q = e.subOutputPath || "", D = function D(ve) {
            return Yr("".concat(A, "/").concat(T, ".").concat(C, ".").concat(ve));
          }, B = E.external ? hd(E.externalFilename) : D("".concat(O, ".srt")), G = D("".concat(O, ".srt")), V = D("".concat(O, ".").concat(b, ".srt")), te = /https?:\/\/[^\s]+/, ie = B.match(te);
          if (!ie) {
            _context13.n = 8;
            break;
          }
          ve = ie[0];
          _context13.n = 7;
          return ia(ve).then(function (Ze) {
            return Ze.text();
          });
        case 7:
          Se = _context13.v;
          be = HP();
          xn(be, Se);
          _context13.n = 8;
          return vb(be, G);
        case 8:
          _t11 = E.external && !vt(G);
          if (!_t11) {
            _context13.n = 9;
            break;
          }
          _context13.n = 9;
          return vb(B, G);
        case 9:
          _t12 = !vt(G);
          if (!_t12) {
            _context13.n = 12;
            break;
          }
          _context13.n = 10;
          return YP(x, E.id, G);
        case 10:
          _t13 = !_context13.v;
          if (_t13) {
            _context13.n = 11;
            break;
          }
          _t13 = !vt(G);
        case 11:
          _t12 = _t13;
        case 12:
          if (!_t12) {
            _context13.n = 13;
            break;
          }
          return _context13.a(2, (gr("save subtitle error"), !1));
        case 13:
          Q = Nr(G), Z = E.external ? Qme(E.externalFilename) : void 0;
          _t14 = Z;
          if (_t14) {
            _context13.n = 15;
            break;
          }
          _context13.n = 14;
          return Xme(Q, m);
        case 14:
          Z = _context13.v;
        case 15:
          if (Z) {
            _ve3 = Z.split("-")[0].toLowerCase(), _Se = b.split("-")[0].toLowerCase();
            _ve3 === _Se && (gr("Subtitle already in ".concat(b, ", reusing content")), X = Q);
          }
          _t15 = X === void 0;
          if (!_t15) {
            _context13.n = 17;
            break;
          }
          _context13.n = 16;
          return Yme(Q, b, O, m, h);
        case 16:
          X = _context13.v;
        case 17:
          xn(V, X);
          le = function le(ve, Se) {
            if (!vt(x)) return ve;
            try {
              var _be = zd(x),
                Ze = C.lastIndexOf("."),
                ht = Ze === -1 ? C : C.substring(0, Ze),
                Ie = q || "$TMP/$NAME.$LANG.srt",
                U = CP() || wu(),
                j = ki() || A,
                z = Ml("~~home/") || A,
                L = UP() || A,
                We = hd(Vme(Ie, {
                  HOME: U,
                  NAME: ht,
                  LANG: Se,
                  SOURCE_LANG: O || "en-US",
                  TARGET_LANG: b || "en-US",
                  TMP: A,
                  FOLDER: _be,
                  MPV: j,
                  MPV_CONFIG: z,
                  DESKTOP: L
                }));
              return hd(ve) === We ? ve : (xn(We, Nr(ve)), We);
            } catch (be) {
              return gr("Template error: ".concat(be, ", using temp path")), ve;
            }
          };
          if (t) {
            _ve4 = D("dual.".concat(O, ".").concat(b, ".srt"));
            vt(_ve4) || Zme(V, G, _ve4, a, i, u, l, c, d);
            _Se2 = "".concat(O, ".").concat(b), _be2 = le(_ve4, _Se2);
            kx(_be2, "select", "dual.".concat(b), _Se2);
          } else {
            _ve5 = le(V, b);
            kx(_ve5, "select", b, b);
          }
          return _context13.a(2, !0);
      }
    }, _callee13);
  }));
  return _ro.apply(this, arguments);
}
function QU(_x20) {
  return _QU.apply(this, arguments);
}
function _QU() {
  _QU = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee14(e) {
    var a;
    return _regenerator().w(function (_context14) {
      while (1) switch (_context14.n) {
        case 0:
          a = "https://cn.bing.com/dict/clientsearch?mkt=zh-CN&setLang=zh&form=BDVEHC&ClientVer=BDDTV3.5.1.4320&q=".concat(encodeURIComponent(e));
          _context14.n = 1;
          return Mu(a, function () {
            return ia(a).then(function (u) {
              return u.text();
            });
          });
        case 1:
          return _context14.a(2, _context14.v);
      }
    }, _callee14);
  }));
  return _QU.apply(this, arguments);
}
var xe = J(_t());
var kme = ["enes", "enfr", "deen", "enpl", "ensl", "defr", "dees", "deru", "depl", "desl", "deit", "dept", "detr", "deel", "dela", "espl", "frpl", "itpl", "plru", "essl", "frsl", "itsl", "enit", "enpt", "enru", "espt", "esfr", "delb", "dezh", "enzh", "eszh", "frzh", "denl", "arde", "aren", "dade", "csde", "dehu", "deno", "desv", "dede", "dedx"];
function ZU(_x21, _x22, _x23) {
  return _ZU.apply(this, arguments);
}
function _ZU() {
  _ZU = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee15(e, t, a) {
    var i, u, l;
    return _regenerator().w(function (_context15) {
      while (1) switch (_context15.n) {
        case 0:
          i = encodeURIComponent(e), u = a + t;
          if (kme.includes(u)) {
            _context15.n = 1;
            break;
          }
          return _context15.a(2, (gr("pons not support language combos: ".concat(u)), ""));
        case 1:
          l = "http://en.pons.com/translate?q=".concat(i, "&l=").concat(u, "&in=").concat(a);
          _context15.n = 2;
          return Mu(l, function () {
            return ia(l, {
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
  return _ZU.apply(this, arguments);
}
function kU(_x24) {
  return _kU.apply(this, arguments);
}
function _kU() {
  _kU = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee16(e) {
    var _t$match, _t$match2, _t$match3;
    var t, a, i, u, l;
    return _regenerator().w(function (_context16) {
      while (1) switch (_context16.n) {
        case 0:
          _context16.n = 1;
          return QU(e);
        case 1:
          t = _context16.v;
          a = ((_t$match = t.match(/data-definition="(.*?)"/)) === null || _t$match === void 0 ? void 0 : _t$match[1]) || "";
          i = em(a).split(";").map(function (c) {
            return c.trim();
          });
          u = em(((_t$match2 = t.match(/data-word="(.*?)"/)) === null || _t$match2 === void 0 ? void 0 : _t$match2[1]) || e).trim();
          l = em(((_t$match3 = t.match(/audiomd5="(.*?)"/)) === null || _t$match3 === void 0 ? void 0 : _t$match3[1]) || "").trim();
          return _context16.a(2, (l.startsWith("/") && (l = "https://cn.bing.com/".concat(l)), {
            word: u,
            detail: i,
            audio: l
          }));
      }
    }, _callee16);
  }));
  return _kU.apply(this, arguments);
}
function JU(_x25) {
  return _JU.apply(this, arguments);
}
function _JU() {
  _JU = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee17(e) {
    var _t$match4;
    var t, a, i, u, l, c, d, m, g;
    return _regenerator().w(function (_context17) {
      while (1) switch (_context17.n) {
        case 0:
          _context17.n = 1;
          return ZU(e, "en", "de");
        case 1:
          t = _context17.v;
          a = ((_t$match4 = t.match(/<h2 class="">\s(.*?)<span class/)) === null || _t$match4 === void 0 ? void 0 : _t$match4[1].trim()) || e;
          i = 'class="translations first">';
          u = '<div class="link-examples-toolbar">';
          l = t.indexOf(i);
          c = t.indexOf(u);
          d = "@@NEW_LINE@@";
          m = "@@SPLIT@@";
          g = t.slice(l + i.length, c).replaceAll("</dl>", d).replaceAll("</h3>", d).replaceAll("</dt>", m).replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").replaceAll(d, "\n").replaceAll(m, "	").trim().split("\n").map(function (x) {
            var _x$trim$split$map = x.trim().split("	").map(function (A) {
                return A.trim();
              }),
              _x$trim$split$map2 = _slicedToArray(_x$trim$split$map, 2),
              b = _x$trim$split$map2[0],
              E = _x$trim$split$map2[1];
            return "".concat(b, "    ").concat(E !== null && E !== void 0 ? E : "").trim();
          });
          return _context17.a(2, {
            word: a,
            detail: g
          });
      }
    }, _callee17);
  }));
  return _JU.apply(this, arguments);
}
function Jme(_x26, _x27, _x28) {
  return _Jme.apply(this, arguments);
}
function _Jme() {
  _Jme = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee18(e, t, a) {
    var i;
    return _regenerator().w(function (_context18) {
      while (1) switch (_context18.n) {
        case 0:
          if (!(t.startsWith("zh") && a.startsWith("en"))) {
            _context18.n = 1;
            break;
          }
          return _context18.a(2, kU(e));
        case 1:
          if (!(t.startsWith("en") && a.startsWith("de"))) {
            _context18.n = 2;
            break;
          }
          return _context18.a(2, JU(e));
        case 2:
          _context18.n = 3;
          return ec(e, t, a);
        case 3:
          i = _context18.v;
          return _context18.a(2, Promise.resolve({
            word: e,
            detail: [i]
          }));
      }
    }, _callee18);
  }));
  return _Jme.apply(this, arguments);
}
function Wme(e) {
  return e.trim().replaceAll(/\s+/g, " ").replaceAll(" ", "  ").split(" ");
}
var $me = '!"#$%&()*+,./:;<=>?@[]^{|}~'.split("");
function eve(e) {
  var _iterator17 = _createForOfIteratorHelper($me),
    _step17;
  try {
    for (_iterator17.s(); !(_step17 = _iterator17.n()).done;) {
      var t = _step17.value;
      e = e.replaceAll(t, "");
    }
  } catch (err) {
    _iterator17.e(err);
  } finally {
    _iterator17.f();
  }
  return e;
}
function tve(_ref18) {
  var e = _ref18.word,
    t = _ref18.showTitle,
    a = _ref18.subConfig,
    i = _ref18.skipTranslate,
    u = _ref18.videoScale;
  var _ref19 = (0, xe.useState)({
      word: "",
      detail: []
    }),
    _ref20 = _slicedToArray(_ref19, 2),
    l = _ref20[0],
    c = _ref20[1],
    d = (0, xe.useRef)(!1),
    m = Math.round(a.subFontSize * u * 2),
    h = Math.round(m / 1.5),
    g = i ? m : h,
    x = i ? a.subOutlineSize * u : a.subOutlineSize * u / 2;
  return (0, xe.useEffect)(function () {
    if (d.current || !e.length || i) return;
    d.current = !0;
    var b = e;
    Jme(eve(e), a.targetLang, a.sourceLang).then(function (E) {
      b === e && c(E), d.current = !1;
    });
  }, [e]), e.length ? xe.default.createElement(hb, {
    onClick: function () {
      var _onClick = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(b) {
        var _l$audio;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.n) {
            case 0:
              b.event.key_name === "MBTN_LEFT" && ((_l$audio = l.audio) === null || _l$audio === void 0 ? void 0 : _l$audio.length) && QP(l.audio);
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
    fontBorderSize: x,
    fontBorderColor: a.subOutlineColor,
    fontWeight: a.subBold ? "bold" : "normal",
    colorHover: i ? a.subColor : a.subColorHover,
    backgroundColorHover: i ? a.subBackColor : a.subBackColorHover,
    backgroundColor: a.subBackColor,
    title: t ? i ? "" : l.detail.join("\n").trim() : "",
    text: e
  }) : xe.default.createElement(dn, {
    width: e === "" ? a.subFontSize / 2 : void 0,
    height: e === "" ? a.subFontSize / 2 : void 0
  });
}
function rve(_ref21) {
  var e = _ref21.line,
    t = _ref21.subConfig,
    a = _ref21.lineIndex,
    i = _ref21.isDual,
    u = _ref21.videoScale;
  var l = Wme(e),
    _ref22 = (0, xe.useState)(!0),
    _ref23 = _slicedToArray(_ref22, 2),
    c = _ref23[0],
    d = _ref23[1],
    m = (0, xe.useRef)(!1),
    _ref24 = (0, xe.useState)(""),
    _ref25 = _slicedToArray(_ref24, 2),
    h = _ref25[0],
    g = _ref25[1],
    x = i && !(a & 1);
  return (0, xe.useEffect)(function () {
    if (m.current || !e.length || x) return;
    m.current = !0;
    var b = e;
    ec(e, Wa()).then(function (E) {
      b === e && g(E.trim()), m.current = !1;
    });
  }, [e]), xe.default.createElement(dn, {
    position: "relative",
    display: "flex",
    width: "100%",
    justifyContent: "center",
    alignItems: "end",
    alignContent: "stretch",
    onClick: function onClick(b) {
      b.event.key_name === "MBTN_MID" && d(function (E) {
        return !E;
      });
    },
    title: c ? "" : h
  }, l.map(function (b, E) {
    return xe.default.createElement(tve, {
      videoScale: u,
      showTitle: c,
      key: [b, E].join(","),
      word: b.trim(),
      subConfig: t,
      skipTranslate: x
    });
  }));
}
function WU(e) {
  var _Lu$e = _objectSpread(_objectSpread({}, Lu), e),
    t = _Lu$e.subFontSize,
    a = _Lu$e.subColor,
    i = _Lu$e.subBackColor,
    u = _Lu$e.subBackColorHover,
    l = _Lu$e.subColorHover,
    c = _Lu$e.subBold,
    d = _Lu$e.subScale,
    m = _Lu$e.subOutlineSize,
    h = _Lu$e.subOutlineColor,
    g = _Lu$e.subZIndex,
    x = _Lu$e.targetLang,
    b = _Lu$e.sourceLang,
    E = _Lu$e.subSrtScale,
    A = _Lu$e.firstSubColor,
    C = _Lu$e.firstSubFontface,
    O = _Lu$e.secondSubFontface,
    T = _Lu$e.secondSubColor,
    q = _Lu$e.subOutputPath,
    D = _Lu$e.maxChunkChars,
    B = _Lu$e.maxChunkEncodeChars,
    _ref26 = (0, xe.useState)(!1),
    _ref27 = _slicedToArray(_ref26, 2),
    G = _ref27[0],
    V = _ref27[1],
    _ref28 = (0, xe.useState)(""),
    _ref29 = _slicedToArray(_ref28, 2),
    te = _ref29[0],
    ie = _ref29[1],
    Q = (0, xe.useRef)(""),
    _ref30 = (0, xe.useState)(0),
    _ref31 = _slicedToArray(_ref30, 2),
    Z = _ref31[0],
    X = _ref31[1],
    _ref32 = (0, xe.useState)(!1),
    _ref33 = _slicedToArray(_ref32, 2),
    le = _ref33[0],
    ve = _ref33[1],
    _ref34 = (0, xe.useState)(!1),
    _ref35 = _slicedToArray(_ref34, 2),
    Se = _ref35[0],
    be = _ref35[1],
    Ze = (0, xe.useRef)(0),
    ht = (0, xe.useRef)(!1),
    Ie = (0, xe.useRef)(!1),
    U = (0, xe.useRef)(!1),
    j = (0, xe.useRef)(null),
    z = xU("path", "")[0];
  (0, xe.useEffect)(function () {
    Ze.current = Z, ht.current = le, Ie.current = Se;
  }, [Z, le, Se]);
  var L = (0, xe.useRef)(null);
  L.current = function (qe) {
    G && ie(qe || "");
  };
  var Zr = x.toLocaleLowerCase(),
    We = b.toLocaleLowerCase();
  if (!We.length && (rr && (We = rr.lang || rr.title || ""), Ht && (We = Ht.lang || Ht.title || ""), !We.length)) {
    var qe = $i();
    qe && (We = (qe.lang || qe.title || "").toLocaleLowerCase());
  }
  var nr = Math.round(E * t * d),
    Tn = Math.round(nr / 2),
    kr = na("video-params") || {
      w: 0,
      h: 0,
      aspect: 0
    },
    Ct = na("video-target-params") || {
      w: 0,
      h: 0,
      aspect: 0
    },
    tc = Ct.w / Ct.h,
    Hu = Ct.w,
    qn = Ct.h;
  tc <= kr.aspect ? qn = Ct.w / kr.aspect : Hu = Ct.w / kr.aspect;
  var _n = Hu / kr.w,
    Fu = qn / kr.h,
    ni = Math.min(_n, Fu),
    yr = function yr(qe, Ne) {
      var Ve = qe !== 0 && Ne;
      V(Ve), qe !== 0 ? Ja("sub-visibility", !Ve) : Ja("sub-visibility", !0);
    },
    Dr = /*#__PURE__*/function () {
      var _ref36 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(qe) {
        var Ne, _t3, _t4, _t5;
        return _regenerator().w(function (_context2) {
          while (1) switch (_context2.n) {
            case 0:
              Ne = Ze.current;
              _t3 = Ne === qe && qe !== 0;
              if (_t3) {
                _context2.n = 8;
                break;
              }
              if (!(Ne === 1)) {
                _context2.n = 2;
                break;
              }
              _context2.n = 1;
              return ro({
                targetLang: Zr,
                sourceLang: We,
                dual: !1,
                firstFontSize: nr,
                secondFontSize: Tn,
                firstSubColor: A,
                firstSubFontface: C,
                secondSubFontface: O,
                secondSubColor: T,
                subOutputPath: q,
                maxChunkChars: D,
                maxChunkEncodeChars: B
              });
            case 1:
              _context2.n = 3;
              break;
            case 2:
              _t4 = Ne === 2;
              if (!_t4) {
                _context2.n = 3;
                break;
              }
              _context2.n = 3;
              return ro({
                targetLang: Zr,
                sourceLang: We,
                dual: !0,
                firstFontSize: nr,
                secondFontSize: Tn,
                firstSubColor: A,
                firstSubFontface: C,
                secondSubFontface: O,
                secondSubColor: T,
                subOutputPath: q,
                maxChunkChars: D,
                maxChunkEncodeChars: B
              });
            case 3:
              if (!(qe === 1)) {
                _context2.n = 5;
                break;
              }
              wr("Translating...", 0);
              _context2.n = 4;
              return ro({
                targetLang: Zr,
                sourceLang: We,
                dual: !1,
                firstFontSize: nr,
                secondFontSize: Tn,
                firstSubColor: A,
                firstSubFontface: C,
                secondSubFontface: O,
                secondSubColor: T,
                subOutputPath: q,
                maxChunkChars: D,
                maxChunkEncodeChars: B
              });
            case 4:
              eo();
              _context2.n = 7;
              break;
            case 5:
              _t5 = qe === 2;
              if (!_t5) {
                _context2.n = 7;
                break;
              }
              wr("Translating...", 0);
              _context2.n = 6;
              return ro({
                targetLang: Zr,
                sourceLang: We,
                dual: !0,
                firstFontSize: nr,
                secondFontSize: Tn,
                firstSubColor: A,
                firstSubFontface: C,
                secondSubFontface: O,
                secondSubColor: T,
                subOutputPath: q,
                maxChunkChars: D,
                maxChunkEncodeChars: B
              });
            case 6:
              eo();
            case 7:
              X(qe);
              yr(qe, ht.current);
            case 8:
              return _context2.a(2);
          }
        }, _callee2);
      }));
      return function Dr(_x30) {
        return _ref36.apply(this, arguments);
      };
    }(),
    ai = /*#__PURE__*/function () {
      var _ref37 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3() {
        var Ne, Ve, _t6, _t7;
        return _regenerator().w(function (_context3) {
          while (1) switch (_context3.n) {
            case 0:
              if (!(!U.current || !$i())) {
                _context3.n = 1;
                break;
              }
              return _context3.a(2);
            case 1:
              U.current = !1;
              Ne = j.current;
              if (Ne) {
                _context3.n = 2;
                break;
              }
              return _context3.a(2);
            case 2:
              Ve = Ze.current;
              _t6 = Ve !== 0;
              if (!_t6) {
                _context3.n = 6;
                break;
              }
              wr("Auto Translating...", 0);
              if (!(Ve === 1)) {
                _context3.n = 4;
                break;
              }
              _context3.n = 3;
              return ro(_objectSpread(_objectSpread({}, Ne), {}, {
                dual: !1
              }));
            case 3:
              _context3.n = 5;
              break;
            case 4:
              _t7 = Ve === 2;
              if (!_t7) {
                _context3.n = 5;
                break;
              }
              _context3.n = 5;
              return ro(_objectSpread(_objectSpread({}, Ne), {}, {
                dual: !0
              }));
            case 5:
              eo();
            case 6:
              return _context3.a(2);
          }
        }, _callee3);
      }));
      return function ai() {
        return _ref37.apply(this, arguments);
      };
    }();
  (0, xe.useEffect)(function () {
    yn("cycle-translate-mode", function () {
      if (!$i()) {
        wr("subtitle not found");
        return;
      }
      if (!Gl()) {
        wr("ffmpeg not found");
        return;
      }
      if (!Ru("curl")) {
        wr("curl not found");
        return;
      }
      var Ve = 0;
      switch (Ze.current) {
        case 0:
          Ve = 1, wr("Mode: Translate");
          break;
        case 1:
          Ve = 2, wr("Mode: Dual");
          break;
        case 2:
          Ve = 0, wr("Mode: None");
          break;
      }
      Dr(Ve);
    }), yn("toggle-interactive-translate", function () {
      var Ne = !ht.current;
      ve(Ne), yr(Ze.current, Ne), wr("Interactive: ".concat(Ne ? "On" : "Off"));
    }), yn("toggle-auto-translate", function () {
      var Ne = !Ie.current;
      be(Ne), wr("Auto Translate: ".concat(Ne ? "On" : "Off"));
    }), gn("sub-text", "string", function (Ne, Ve) {
      var _L$current;
      (_L$current = L.current) !== null && _L$current !== void 0 && _L$current.call(L, Ve), Q.current = Ve;
    }), new Cu("track-list").observe(ai), gn("sid", "native", ai);
  }, []), j.current = {
    targetLang: Zr,
    sourceLang: We,
    firstFontSize: nr,
    secondFontSize: Tn,
    firstSubColor: A,
    firstSubFontface: C,
    secondSubFontface: O,
    secondSubColor: T,
    subOutputPath: q,
    maxChunkChars: D,
    maxChunkEncodeChars: B
  }, (0, xe.useEffect)(function () {
    if (!z) return;
    if (eo(), XU(), !Ie.current) {
      X(0), yr(0, ht.current);
      return;
    }
    if (Ze.current !== 0) return U.current = !0, ai(), function () {
      U.current = !1, eo();
    };
  }, [z]);
  var Gu = !!Ht;
  return G && xe.default.createElement(dn, _objectSpread({
    display: "flex",
    position: "absolute",
    width: "100%",
    height: "100%",
    flexDirection: "column",
    justifyContent: "end",
    alignItems: "center"
  }, e), te.trim().replaceAll("\r\n", "\n").split("\n").map(function (qe, Ne) {
    return xe.default.createElement(rve, {
      videoScale: ni,
      isDual: Gu,
      key: [qe, Ne].join(),
      line: qe,
      lineIndex: Ne,
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
        subSrtScale: E,
        firstSubColor: A,
        firstSubFontface: C,
        secondSubFontface: O,
        secondSubColor: T,
        subOutputPath: q,
        maxChunkChars: D,
        maxChunkEncodeChars: B
      }
    });
  }));
}
var nve = "@mpv-easy/translate",
  ave = _objectSpread(_objectSpread({}, Lu), hm),
  FMe = function FMe(e, t) {
    return {
      name: nve,
      defaultConfig: ave,
      create: function create() {},
      destroy: function destroy() {}
    };
  };
var ju = J(_t());
var _Lu$hm$ZP$subScale$su = _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, Lu), hm), ZP("mpv-easy-translate", {
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
    subScale: ka("sub-scale", 1),
    subFontSize: ka("sub-font-size", 38)
  }),
  ive = _Lu$hm$ZP$subScale$su.subFontSize,
  ove = _Lu$hm$ZP$subScale$su.subColor,
  uve = _Lu$hm$ZP$subScale$su.subBackColor,
  sve = _Lu$hm$ZP$subScale$su.subBackColorHover,
  lve = _Lu$hm$ZP$subScale$su.subColorHover,
  cve = _Lu$hm$ZP$subScale$su.subBold,
  fve = _Lu$hm$ZP$subScale$su.subScale,
  pve = _Lu$hm$ZP$subScale$su.subOutlineSize,
  dve = _Lu$hm$ZP$subScale$su.subOutlineColor,
  mve = _Lu$hm$ZP$subScale$su.subZIndex,
  vve = _Lu$hm$ZP$subScale$su.targetLang,
  hve = _Lu$hm$ZP$subScale$su.sourceLang,
  gve = _Lu$hm$ZP$subScale$su.tooltioFontSize,
  yve = _Lu$hm$ZP$subScale$su.tooltipColor,
  xve = _Lu$hm$ZP$subScale$su.tooltipBackColor,
  bve = _Lu$hm$ZP$subScale$su.tooltipScale,
  Eve = _Lu$hm$ZP$subScale$su.tooltipBold,
  Sve = _Lu$hm$ZP$subScale$su.tooltipOutlineSize,
  Tve = _Lu$hm$ZP$subScale$su.tooltipOutlineColor,
  qve = _Lu$hm$ZP$subScale$su.tooltipMaxWidth,
  _ve = _Lu$hm$ZP$subScale$su.tooltipZIndex,
  Ave = _Lu$hm$ZP$subScale$su.tooltipLeft,
  Ove = _Lu$hm$ZP$subScale$su.tooltipBottom,
  Cve = _Lu$hm$ZP$subScale$su.firstSubColor,
  Rve = _Lu$hm$ZP$subScale$su.secondSubColor,
  Nve = _Lu$hm$ZP$subScale$su.firstSubFontface,
  wve = _Lu$hm$ZP$subScale$su.secondSubFontface,
  Mve = _Lu$hm$ZP$subScale$su.subOutputPath,
  Dve = _Lu$hm$ZP$subScale$su.maxChunkChars,
  Bve = _Lu$hm$ZP$subScale$su.maxChunkEncodeChars;
function Ive() {
  var e = yU("mouse-pos")[0];
  return ju.default.createElement(ju.default.Fragment, null, ju.default.createElement(hU, {
    mousePos: e,
    zIndex: _ve,
    maxWidth: qve,
    backgroundColor: xve,
    fontSize: gve * bve,
    color: yve,
    fontWeight: Eve ? "bold" : "normal",
    borderColor: Tve,
    borderSize: Sve,
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }), ju.default.createElement(WU, {
    zIndex: mve,
    subFontSize: ive,
    subScale: fve,
    subColor: ove,
    subBold: cve,
    subOutlineSize: pve,
    subOutlineColor: dve,
    sourceLang: hve,
    targetLang: vve,
    subBackColor: uve,
    subBackColorHover: sve,
    subColorHover: lve,
    left: Ave,
    bottom: Ove,
    firstSubColor: Cve,
    secondSubColor: Rve,
    firstSubFontface: Nve,
    secondSubFontface: wve,
    subOutputPath: Mve,
    maxChunkChars: Dve,
    maxChunkEncodeChars: Bve
  }));
}
KU(ju.default.createElement(Ive, null));
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
   * Build: `lodash modularize exports="es" -o ./`
   * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
   * Released under MIT license <https://lodash.com/license>
   * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
   * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
   *)
*/