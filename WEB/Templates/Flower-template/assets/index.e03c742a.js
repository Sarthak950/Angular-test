(function () {
  const e = document.createElement("link").relList;
  if (e && e.supports && e.supports("modulepreload")) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) n(i);
  new MutationObserver((i) => {
    for (const r of i)
      if (r.type === "childList")
        for (const a of r.addedNodes)
          a.tagName === "LINK" && a.rel === "modulepreload" && n(a);
  }).observe(document, { childList: !0, subtree: !0 });
  function t(i) {
    const r = {};
    return (
      i.integrity && (r.integrity = i.integrity),
      i.referrerpolicy && (r.referrerPolicy = i.referrerpolicy),
      i.crossorigin === "use-credentials"
        ? (r.credentials = "include")
        : i.crossorigin === "anonymous"
        ? (r.credentials = "omit")
        : (r.credentials = "same-origin"),
      r
    );
  }
  function n(i) {
    if (i.ep) return;
    i.ep = !0;
    const r = t(i);
    fetch(i.href, r);
  }
})();
/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */ const no = "144",
  Ku = 0,
  Ao = 1,
  Ju = 2,
  mc = 1,
  Qu = 2,
  gr = 3,
  Yi = 0,
  Xt = 1,
  Vn = 2,
  qn = 0,
  Gi = 1,
  Da = 2,
  Po = 3,
  Lo = 4,
  eh = 5,
  Ni = 100,
  th = 101,
  nh = 102,
  Do = 103,
  Ro = 104,
  ih = 200,
  rh = 201,
  sh = 202,
  ah = 203,
  gc = 204,
  _c = 205,
  oh = 206,
  lh = 207,
  ch = 208,
  uh = 209,
  hh = 210,
  fh = 0,
  dh = 1,
  ph = 2,
  Ra = 3,
  mh = 4,
  gh = 5,
  _h = 6,
  xh = 7,
  xc = 0,
  vh = 1,
  yh = 2,
  An = 0,
  Mh = 1,
  Sh = 2,
  bh = 3,
  wh = 4,
  Th = 5,
  vc = 300,
  ji = 301,
  Zi = 302,
  Ia = 303,
  za = 304,
  Ls = 306,
  Fa = 1e3,
  tn = 1001,
  Oa = 1002,
  xt = 1003,
  Io = 1004,
  zo = 1005,
  kt = 1006,
  Eh = 1007,
  Ds = 1008,
  gi = 1009,
  Ch = 1010,
  Ah = 1011,
  yc = 1012,
  Ph = 1013,
  oi = 1014,
  li = 1015,
  Tr = 1016,
  Lh = 1017,
  Dh = 1018,
  Hi = 1020,
  Rh = 1021,
  Ih = 1022,
  un = 1023,
  zh = 1024,
  Fh = 1025,
  hi = 1026,
  $i = 1027,
  Oh = 1028,
  Uh = 1029,
  Nh = 1030,
  Bh = 1031,
  kh = 1033,
  Gs = 33776,
  Hs = 33777,
  Ws = 33778,
  qs = 33779,
  Fo = 35840,
  Oo = 35841,
  Uo = 35842,
  No = 35843,
  Vh = 36196,
  Bo = 37492,
  ko = 37496,
  Vo = 37808,
  Go = 37809,
  Ho = 37810,
  Wo = 37811,
  qo = 37812,
  Xo = 37813,
  Yo = 37814,
  jo = 37815,
  Zo = 37816,
  $o = 37817,
  Ko = 37818,
  Jo = 37819,
  Qo = 37820,
  el = 37821,
  tl = 36492,
  _i = 3e3,
  Ge = 3001,
  Gh = 3200,
  Hh = 3201,
  Wh = 0,
  qh = 1,
  Sn = "srgb",
  ci = "srgb-linear",
  Xs = 7680,
  Xh = 519,
  nl = 35044,
  il = "300 es",
  Ua = 1035;
class or {
  addEventListener(e, t) {
    this._listeners === void 0 && (this._listeners = {});
    const n = this._listeners;
    n[e] === void 0 && (n[e] = []), n[e].indexOf(t) === -1 && n[e].push(t);
  }
  hasEventListener(e, t) {
    if (this._listeners === void 0) return !1;
    const n = this._listeners;
    return n[e] !== void 0 && n[e].indexOf(t) !== -1;
  }
  removeEventListener(e, t) {
    if (this._listeners === void 0) return;
    const i = this._listeners[e];
    if (i !== void 0) {
      const r = i.indexOf(t);
      r !== -1 && i.splice(r, 1);
    }
  }
  dispatchEvent(e) {
    if (this._listeners === void 0) return;
    const n = this._listeners[e.type];
    if (n !== void 0) {
      e.target = this;
      const i = n.slice(0);
      for (let r = 0, a = i.length; r < a; r++) i[r].call(this, e);
      e.target = null;
    }
  }
}
const ot = [
    "00",
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "0a",
    "0b",
    "0c",
    "0d",
    "0e",
    "0f",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "1a",
    "1b",
    "1c",
    "1d",
    "1e",
    "1f",
    "20",
    "21",
    "22",
    "23",
    "24",
    "25",
    "26",
    "27",
    "28",
    "29",
    "2a",
    "2b",
    "2c",
    "2d",
    "2e",
    "2f",
    "30",
    "31",
    "32",
    "33",
    "34",
    "35",
    "36",
    "37",
    "38",
    "39",
    "3a",
    "3b",
    "3c",
    "3d",
    "3e",
    "3f",
    "40",
    "41",
    "42",
    "43",
    "44",
    "45",
    "46",
    "47",
    "48",
    "49",
    "4a",
    "4b",
    "4c",
    "4d",
    "4e",
    "4f",
    "50",
    "51",
    "52",
    "53",
    "54",
    "55",
    "56",
    "57",
    "58",
    "59",
    "5a",
    "5b",
    "5c",
    "5d",
    "5e",
    "5f",
    "60",
    "61",
    "62",
    "63",
    "64",
    "65",
    "66",
    "67",
    "68",
    "69",
    "6a",
    "6b",
    "6c",
    "6d",
    "6e",
    "6f",
    "70",
    "71",
    "72",
    "73",
    "74",
    "75",
    "76",
    "77",
    "78",
    "79",
    "7a",
    "7b",
    "7c",
    "7d",
    "7e",
    "7f",
    "80",
    "81",
    "82",
    "83",
    "84",
    "85",
    "86",
    "87",
    "88",
    "89",
    "8a",
    "8b",
    "8c",
    "8d",
    "8e",
    "8f",
    "90",
    "91",
    "92",
    "93",
    "94",
    "95",
    "96",
    "97",
    "98",
    "99",
    "9a",
    "9b",
    "9c",
    "9d",
    "9e",
    "9f",
    "a0",
    "a1",
    "a2",
    "a3",
    "a4",
    "a5",
    "a6",
    "a7",
    "a8",
    "a9",
    "aa",
    "ab",
    "ac",
    "ad",
    "ae",
    "af",
    "b0",
    "b1",
    "b2",
    "b3",
    "b4",
    "b5",
    "b6",
    "b7",
    "b8",
    "b9",
    "ba",
    "bb",
    "bc",
    "bd",
    "be",
    "bf",
    "c0",
    "c1",
    "c2",
    "c3",
    "c4",
    "c5",
    "c6",
    "c7",
    "c8",
    "c9",
    "ca",
    "cb",
    "cc",
    "cd",
    "ce",
    "cf",
    "d0",
    "d1",
    "d2",
    "d3",
    "d4",
    "d5",
    "d6",
    "d7",
    "d8",
    "d9",
    "da",
    "db",
    "dc",
    "dd",
    "de",
    "df",
    "e0",
    "e1",
    "e2",
    "e3",
    "e4",
    "e5",
    "e6",
    "e7",
    "e8",
    "e9",
    "ea",
    "eb",
    "ec",
    "ed",
    "ee",
    "ef",
    "f0",
    "f1",
    "f2",
    "f3",
    "f4",
    "f5",
    "f6",
    "f7",
    "f8",
    "f9",
    "fa",
    "fb",
    "fc",
    "fd",
    "fe",
    "ff",
  ],
  Ys = Math.PI / 180,
  rl = 180 / Math.PI;
function zr() {
  const o = (Math.random() * 4294967295) | 0,
    e = (Math.random() * 4294967295) | 0,
    t = (Math.random() * 4294967295) | 0,
    n = (Math.random() * 4294967295) | 0;
  return (
    ot[o & 255] +
    ot[(o >> 8) & 255] +
    ot[(o >> 16) & 255] +
    ot[(o >> 24) & 255] +
    "-" +
    ot[e & 255] +
    ot[(e >> 8) & 255] +
    "-" +
    ot[((e >> 16) & 15) | 64] +
    ot[(e >> 24) & 255] +
    "-" +
    ot[(t & 63) | 128] +
    ot[(t >> 8) & 255] +
    "-" +
    ot[(t >> 16) & 255] +
    ot[(t >> 24) & 255] +
    ot[n & 255] +
    ot[(n >> 8) & 255] +
    ot[(n >> 16) & 255] +
    ot[(n >> 24) & 255]
  ).toLowerCase();
}
function Lt(o, e, t) {
  return Math.max(e, Math.min(t, o));
}
function Yh(o, e) {
  return ((o % e) + e) % e;
}
function js(o, e, t) {
  return (1 - t) * o + t * e;
}
function sl(o) {
  return (o & (o - 1)) === 0 && o !== 0;
}
function Na(o) {
  return Math.pow(2, Math.floor(Math.log(o) / Math.LN2));
}
function Hr(o, e) {
  switch (e.constructor) {
    case Float32Array:
      return o;
    case Uint16Array:
      return o / 65535;
    case Uint8Array:
      return o / 255;
    case Int16Array:
      return Math.max(o / 32767, -1);
    case Int8Array:
      return Math.max(o / 127, -1);
    default:
      throw new Error("Invalid component type.");
  }
}
function Et(o, e) {
  switch (e.constructor) {
    case Float32Array:
      return o;
    case Uint16Array:
      return Math.round(o * 65535);
    case Uint8Array:
      return Math.round(o * 255);
    case Int16Array:
      return Math.round(o * 32767);
    case Int8Array:
      return Math.round(o * 127);
    default:
      throw new Error("Invalid component type.");
  }
}
class Se {
  constructor(e = 0, t = 0) {
    (Se.prototype.isVector2 = !0), (this.x = e), (this.y = t);
  }
  get width() {
    return this.x;
  }
  set width(e) {
    this.x = e;
  }
  get height() {
    return this.y;
  }
  set height(e) {
    this.y = e;
  }
  set(e, t) {
    return (this.x = e), (this.y = t), this;
  }
  setScalar(e) {
    return (this.x = e), (this.y = e), this;
  }
  setX(e) {
    return (this.x = e), this;
  }
  setY(e) {
    return (this.y = e), this;
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y);
  }
  copy(e) {
    return (this.x = e.x), (this.y = e.y), this;
  }
  add(e) {
    return (this.x += e.x), (this.y += e.y), this;
  }
  addScalar(e) {
    return (this.x += e), (this.y += e), this;
  }
  addVectors(e, t) {
    return (this.x = e.x + t.x), (this.y = e.y + t.y), this;
  }
  addScaledVector(e, t) {
    return (this.x += e.x * t), (this.y += e.y * t), this;
  }
  sub(e) {
    return (this.x -= e.x), (this.y -= e.y), this;
  }
  subScalar(e) {
    return (this.x -= e), (this.y -= e), this;
  }
  subVectors(e, t) {
    return (this.x = e.x - t.x), (this.y = e.y - t.y), this;
  }
  multiply(e) {
    return (this.x *= e.x), (this.y *= e.y), this;
  }
  multiplyScalar(e) {
    return (this.x *= e), (this.y *= e), this;
  }
  divide(e) {
    return (this.x /= e.x), (this.y /= e.y), this;
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  applyMatrix3(e) {
    const t = this.x,
      n = this.y,
      i = e.elements;
    return (
      (this.x = i[0] * t + i[3] * n + i[6]),
      (this.y = i[1] * t + i[4] * n + i[7]),
      this
    );
  }
  min(e) {
    return (
      (this.x = Math.min(this.x, e.x)), (this.y = Math.min(this.y, e.y)), this
    );
  }
  max(e) {
    return (
      (this.x = Math.max(this.x, e.x)), (this.y = Math.max(this.y, e.y)), this
    );
  }
  clamp(e, t) {
    return (
      (this.x = Math.max(e.x, Math.min(t.x, this.x))),
      (this.y = Math.max(e.y, Math.min(t.y, this.y))),
      this
    );
  }
  clampScalar(e, t) {
    return (
      (this.x = Math.max(e, Math.min(t, this.x))),
      (this.y = Math.max(e, Math.min(t, this.y))),
      this
    );
  }
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(
      Math.max(e, Math.min(t, n))
    );
  }
  floor() {
    return (this.x = Math.floor(this.x)), (this.y = Math.floor(this.y)), this;
  }
  ceil() {
    return (this.x = Math.ceil(this.x)), (this.y = Math.ceil(this.y)), this;
  }
  round() {
    return (this.x = Math.round(this.x)), (this.y = Math.round(this.y)), this;
  }
  roundToZero() {
    return (
      (this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x)),
      (this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y)),
      this
    );
  }
  negate() {
    return (this.x = -this.x), (this.y = -this.y), this;
  }
  dot(e) {
    return this.x * e.x + this.y * e.y;
  }
  cross(e) {
    return this.x * e.y - this.y * e.x;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  angle() {
    return Math.atan2(-this.y, -this.x) + Math.PI;
  }
  distanceTo(e) {
    return Math.sqrt(this.distanceToSquared(e));
  }
  distanceToSquared(e) {
    const t = this.x - e.x,
      n = this.y - e.y;
    return t * t + n * n;
  }
  manhattanDistanceTo(e) {
    return Math.abs(this.x - e.x) + Math.abs(this.y - e.y);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return (this.x += (e.x - this.x) * t), (this.y += (e.y - this.y) * t), this;
  }
  lerpVectors(e, t, n) {
    return (
      (this.x = e.x + (t.x - e.x) * n), (this.y = e.y + (t.y - e.y) * n), this
    );
  }
  equals(e) {
    return e.x === this.x && e.y === this.y;
  }
  fromArray(e, t = 0) {
    return (this.x = e[t]), (this.y = e[t + 1]), this;
  }
  toArray(e = [], t = 0) {
    return (e[t] = this.x), (e[t + 1] = this.y), e;
  }
  fromBufferAttribute(e, t) {
    return (this.x = e.getX(t)), (this.y = e.getY(t)), this;
  }
  rotateAround(e, t) {
    const n = Math.cos(t),
      i = Math.sin(t),
      r = this.x - e.x,
      a = this.y - e.y;
    return (this.x = r * n - a * i + e.x), (this.y = r * i + a * n + e.y), this;
  }
  random() {
    return (this.x = Math.random()), (this.y = Math.random()), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y;
  }
}
class Gt {
  constructor() {
    (Gt.prototype.isMatrix3 = !0),
      (this.elements = [1, 0, 0, 0, 1, 0, 0, 0, 1]);
  }
  set(e, t, n, i, r, a, s, c, l) {
    const u = this.elements;
    return (
      (u[0] = e),
      (u[1] = i),
      (u[2] = s),
      (u[3] = t),
      (u[4] = r),
      (u[5] = c),
      (u[6] = n),
      (u[7] = a),
      (u[8] = l),
      this
    );
  }
  identity() {
    return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1), this;
  }
  copy(e) {
    const t = this.elements,
      n = e.elements;
    return (
      (t[0] = n[0]),
      (t[1] = n[1]),
      (t[2] = n[2]),
      (t[3] = n[3]),
      (t[4] = n[4]),
      (t[5] = n[5]),
      (t[6] = n[6]),
      (t[7] = n[7]),
      (t[8] = n[8]),
      this
    );
  }
  extractBasis(e, t, n) {
    return (
      e.setFromMatrix3Column(this, 0),
      t.setFromMatrix3Column(this, 1),
      n.setFromMatrix3Column(this, 2),
      this
    );
  }
  setFromMatrix4(e) {
    const t = e.elements;
    return (
      this.set(t[0], t[4], t[8], t[1], t[5], t[9], t[2], t[6], t[10]), this
    );
  }
  multiply(e) {
    return this.multiplyMatrices(this, e);
  }
  premultiply(e) {
    return this.multiplyMatrices(e, this);
  }
  multiplyMatrices(e, t) {
    const n = e.elements,
      i = t.elements,
      r = this.elements,
      a = n[0],
      s = n[3],
      c = n[6],
      l = n[1],
      u = n[4],
      h = n[7],
      f = n[2],
      m = n[5],
      g = n[8],
      d = i[0],
      p = i[3],
      _ = i[6],
      v = i[1],
      S = i[4],
      M = i[7],
      y = i[2],
      E = i[5],
      A = i[8];
    return (
      (r[0] = a * d + s * v + c * y),
      (r[3] = a * p + s * S + c * E),
      (r[6] = a * _ + s * M + c * A),
      (r[1] = l * d + u * v + h * y),
      (r[4] = l * p + u * S + h * E),
      (r[7] = l * _ + u * M + h * A),
      (r[2] = f * d + m * v + g * y),
      (r[5] = f * p + m * S + g * E),
      (r[8] = f * _ + m * M + g * A),
      this
    );
  }
  multiplyScalar(e) {
    const t = this.elements;
    return (
      (t[0] *= e),
      (t[3] *= e),
      (t[6] *= e),
      (t[1] *= e),
      (t[4] *= e),
      (t[7] *= e),
      (t[2] *= e),
      (t[5] *= e),
      (t[8] *= e),
      this
    );
  }
  determinant() {
    const e = this.elements,
      t = e[0],
      n = e[1],
      i = e[2],
      r = e[3],
      a = e[4],
      s = e[5],
      c = e[6],
      l = e[7],
      u = e[8];
    return (
      t * a * u - t * s * l - n * r * u + n * s * c + i * r * l - i * a * c
    );
  }
  invert() {
    const e = this.elements,
      t = e[0],
      n = e[1],
      i = e[2],
      r = e[3],
      a = e[4],
      s = e[5],
      c = e[6],
      l = e[7],
      u = e[8],
      h = u * a - s * l,
      f = s * c - u * r,
      m = l * r - a * c,
      g = t * h + n * f + i * m;
    if (g === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
    const d = 1 / g;
    return (
      (e[0] = h * d),
      (e[1] = (i * l - u * n) * d),
      (e[2] = (s * n - i * a) * d),
      (e[3] = f * d),
      (e[4] = (u * t - i * c) * d),
      (e[5] = (i * r - s * t) * d),
      (e[6] = m * d),
      (e[7] = (n * c - l * t) * d),
      (e[8] = (a * t - n * r) * d),
      this
    );
  }
  transpose() {
    let e;
    const t = this.elements;
    return (
      (e = t[1]),
      (t[1] = t[3]),
      (t[3] = e),
      (e = t[2]),
      (t[2] = t[6]),
      (t[6] = e),
      (e = t[5]),
      (t[5] = t[7]),
      (t[7] = e),
      this
    );
  }
  getNormalMatrix(e) {
    return this.setFromMatrix4(e).invert().transpose();
  }
  transposeIntoArray(e) {
    const t = this.elements;
    return (
      (e[0] = t[0]),
      (e[1] = t[3]),
      (e[2] = t[6]),
      (e[3] = t[1]),
      (e[4] = t[4]),
      (e[5] = t[7]),
      (e[6] = t[2]),
      (e[7] = t[5]),
      (e[8] = t[8]),
      this
    );
  }
  setUvTransform(e, t, n, i, r, a, s) {
    const c = Math.cos(r),
      l = Math.sin(r);
    return (
      this.set(
        n * c,
        n * l,
        -n * (c * a + l * s) + a + e,
        -i * l,
        i * c,
        -i * (-l * a + c * s) + s + t,
        0,
        0,
        1
      ),
      this
    );
  }
  scale(e, t) {
    const n = this.elements;
    return (
      (n[0] *= e),
      (n[3] *= e),
      (n[6] *= e),
      (n[1] *= t),
      (n[4] *= t),
      (n[7] *= t),
      this
    );
  }
  rotate(e) {
    const t = Math.cos(e),
      n = Math.sin(e),
      i = this.elements,
      r = i[0],
      a = i[3],
      s = i[6],
      c = i[1],
      l = i[4],
      u = i[7];
    return (
      (i[0] = t * r + n * c),
      (i[3] = t * a + n * l),
      (i[6] = t * s + n * u),
      (i[1] = -n * r + t * c),
      (i[4] = -n * a + t * l),
      (i[7] = -n * s + t * u),
      this
    );
  }
  translate(e, t) {
    const n = this.elements;
    return (
      (n[0] += e * n[2]),
      (n[3] += e * n[5]),
      (n[6] += e * n[8]),
      (n[1] += t * n[2]),
      (n[4] += t * n[5]),
      (n[7] += t * n[8]),
      this
    );
  }
  equals(e) {
    const t = this.elements,
      n = e.elements;
    for (let i = 0; i < 9; i++) if (t[i] !== n[i]) return !1;
    return !0;
  }
  fromArray(e, t = 0) {
    for (let n = 0; n < 9; n++) this.elements[n] = e[n + t];
    return this;
  }
  toArray(e = [], t = 0) {
    const n = this.elements;
    return (
      (e[t] = n[0]),
      (e[t + 1] = n[1]),
      (e[t + 2] = n[2]),
      (e[t + 3] = n[3]),
      (e[t + 4] = n[4]),
      (e[t + 5] = n[5]),
      (e[t + 6] = n[6]),
      (e[t + 7] = n[7]),
      (e[t + 8] = n[8]),
      e
    );
  }
  clone() {
    return new this.constructor().fromArray(this.elements);
  }
}
function Mc(o) {
  for (let e = o.length - 1; e >= 0; --e) if (o[e] >= 65535) return !0;
  return !1;
}
function Er(o) {
  return document.createElementNS("http://www.w3.org/1999/xhtml", o);
}
function fi(o) {
  return o < 0.04045
    ? o * 0.0773993808
    : Math.pow(o * 0.9478672986 + 0.0521327014, 2.4);
}
function ms(o) {
  return o < 0.0031308 ? o * 12.92 : 1.055 * Math.pow(o, 0.41666) - 0.055;
}
const Zs = { [Sn]: { [ci]: fi }, [ci]: { [Sn]: ms } },
  Kt = {
    legacyMode: !0,
    get workingColorSpace() {
      return ci;
    },
    set workingColorSpace(o) {
      console.warn("THREE.ColorManagement: .workingColorSpace is readonly.");
    },
    convert: function (o, e, t) {
      if (this.legacyMode || e === t || !e || !t) return o;
      if (Zs[e] && Zs[e][t] !== void 0) {
        const n = Zs[e][t];
        return (o.r = n(o.r)), (o.g = n(o.g)), (o.b = n(o.b)), o;
      }
      throw new Error("Unsupported color space conversion.");
    },
    fromWorkingColorSpace: function (o, e) {
      return this.convert(o, this.workingColorSpace, e);
    },
    toWorkingColorSpace: function (o, e) {
      return this.convert(o, e, this.workingColorSpace);
    },
  },
  Sc = {
    aliceblue: 15792383,
    antiquewhite: 16444375,
    aqua: 65535,
    aquamarine: 8388564,
    azure: 15794175,
    beige: 16119260,
    bisque: 16770244,
    black: 0,
    blanchedalmond: 16772045,
    blue: 255,
    blueviolet: 9055202,
    brown: 10824234,
    burlywood: 14596231,
    cadetblue: 6266528,
    chartreuse: 8388352,
    chocolate: 13789470,
    coral: 16744272,
    cornflowerblue: 6591981,
    cornsilk: 16775388,
    crimson: 14423100,
    cyan: 65535,
    darkblue: 139,
    darkcyan: 35723,
    darkgoldenrod: 12092939,
    darkgray: 11119017,
    darkgreen: 25600,
    darkgrey: 11119017,
    darkkhaki: 12433259,
    darkmagenta: 9109643,
    darkolivegreen: 5597999,
    darkorange: 16747520,
    darkorchid: 10040012,
    darkred: 9109504,
    darksalmon: 15308410,
    darkseagreen: 9419919,
    darkslateblue: 4734347,
    darkslategray: 3100495,
    darkslategrey: 3100495,
    darkturquoise: 52945,
    darkviolet: 9699539,
    deeppink: 16716947,
    deepskyblue: 49151,
    dimgray: 6908265,
    dimgrey: 6908265,
    dodgerblue: 2003199,
    firebrick: 11674146,
    floralwhite: 16775920,
    forestgreen: 2263842,
    fuchsia: 16711935,
    gainsboro: 14474460,
    ghostwhite: 16316671,
    gold: 16766720,
    goldenrod: 14329120,
    gray: 8421504,
    green: 32768,
    greenyellow: 11403055,
    grey: 8421504,
    honeydew: 15794160,
    hotpink: 16738740,
    indianred: 13458524,
    indigo: 4915330,
    ivory: 16777200,
    khaki: 15787660,
    lavender: 15132410,
    lavenderblush: 16773365,
    lawngreen: 8190976,
    lemonchiffon: 16775885,
    lightblue: 11393254,
    lightcoral: 15761536,
    lightcyan: 14745599,
    lightgoldenrodyellow: 16448210,
    lightgray: 13882323,
    lightgreen: 9498256,
    lightgrey: 13882323,
    lightpink: 16758465,
    lightsalmon: 16752762,
    lightseagreen: 2142890,
    lightskyblue: 8900346,
    lightslategray: 7833753,
    lightslategrey: 7833753,
    lightsteelblue: 11584734,
    lightyellow: 16777184,
    lime: 65280,
    limegreen: 3329330,
    linen: 16445670,
    magenta: 16711935,
    maroon: 8388608,
    mediumaquamarine: 6737322,
    mediumblue: 205,
    mediumorchid: 12211667,
    mediumpurple: 9662683,
    mediumseagreen: 3978097,
    mediumslateblue: 8087790,
    mediumspringgreen: 64154,
    mediumturquoise: 4772300,
    mediumvioletred: 13047173,
    midnightblue: 1644912,
    mintcream: 16121850,
    mistyrose: 16770273,
    moccasin: 16770229,
    navajowhite: 16768685,
    navy: 128,
    oldlace: 16643558,
    olive: 8421376,
    olivedrab: 7048739,
    orange: 16753920,
    orangered: 16729344,
    orchid: 14315734,
    palegoldenrod: 15657130,
    palegreen: 10025880,
    paleturquoise: 11529966,
    palevioletred: 14381203,
    papayawhip: 16773077,
    peachpuff: 16767673,
    peru: 13468991,
    pink: 16761035,
    plum: 14524637,
    powderblue: 11591910,
    purple: 8388736,
    rebeccapurple: 6697881,
    red: 16711680,
    rosybrown: 12357519,
    royalblue: 4286945,
    saddlebrown: 9127187,
    salmon: 16416882,
    sandybrown: 16032864,
    seagreen: 3050327,
    seashell: 16774638,
    sienna: 10506797,
    silver: 12632256,
    skyblue: 8900331,
    slateblue: 6970061,
    slategray: 7372944,
    slategrey: 7372944,
    snow: 16775930,
    springgreen: 65407,
    steelblue: 4620980,
    tan: 13808780,
    teal: 32896,
    thistle: 14204888,
    tomato: 16737095,
    turquoise: 4251856,
    violet: 15631086,
    wheat: 16113331,
    white: 16777215,
    whitesmoke: 16119285,
    yellow: 16776960,
    yellowgreen: 10145074,
  },
  Ke = { r: 0, g: 0, b: 0 },
  Jt = { h: 0, s: 0, l: 0 },
  Wr = { h: 0, s: 0, l: 0 };
function $s(o, e, t) {
  return (
    t < 0 && (t += 1),
    t > 1 && (t -= 1),
    t < 1 / 6
      ? o + (e - o) * 6 * t
      : t < 1 / 2
      ? e
      : t < 2 / 3
      ? o + (e - o) * 6 * (2 / 3 - t)
      : o
  );
}
function qr(o, e) {
  return (e.r = o.r), (e.g = o.g), (e.b = o.b), e;
}
class De {
  constructor(e, t, n) {
    return (
      (this.isColor = !0),
      (this.r = 1),
      (this.g = 1),
      (this.b = 1),
      t === void 0 && n === void 0 ? this.set(e) : this.setRGB(e, t, n)
    );
  }
  set(e) {
    return (
      e && e.isColor
        ? this.copy(e)
        : typeof e == "number"
        ? this.setHex(e)
        : typeof e == "string" && this.setStyle(e),
      this
    );
  }
  setScalar(e) {
    return (this.r = e), (this.g = e), (this.b = e), this;
  }
  setHex(e, t = Sn) {
    return (
      (e = Math.floor(e)),
      (this.r = ((e >> 16) & 255) / 255),
      (this.g = ((e >> 8) & 255) / 255),
      (this.b = (e & 255) / 255),
      Kt.toWorkingColorSpace(this, t),
      this
    );
  }
  setRGB(e, t, n, i = ci) {
    return (
      (this.r = e),
      (this.g = t),
      (this.b = n),
      Kt.toWorkingColorSpace(this, i),
      this
    );
  }
  setHSL(e, t, n, i = ci) {
    if (((e = Yh(e, 1)), (t = Lt(t, 0, 1)), (n = Lt(n, 0, 1)), t === 0))
      this.r = this.g = this.b = n;
    else {
      const r = n <= 0.5 ? n * (1 + t) : n + t - n * t,
        a = 2 * n - r;
      (this.r = $s(a, r, e + 1 / 3)),
        (this.g = $s(a, r, e)),
        (this.b = $s(a, r, e - 1 / 3));
    }
    return Kt.toWorkingColorSpace(this, i), this;
  }
  setStyle(e, t = Sn) {
    function n(r) {
      r !== void 0 &&
        parseFloat(r) < 1 &&
        console.warn(
          "THREE.Color: Alpha component of " + e + " will be ignored."
        );
    }
    let i;
    if ((i = /^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e))) {
      let r;
      const a = i[1],
        s = i[2];
      switch (a) {
        case "rgb":
        case "rgba":
          if (
            (r =
              /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(
                s
              ))
          )
            return (
              (this.r = Math.min(255, parseInt(r[1], 10)) / 255),
              (this.g = Math.min(255, parseInt(r[2], 10)) / 255),
              (this.b = Math.min(255, parseInt(r[3], 10)) / 255),
              Kt.toWorkingColorSpace(this, t),
              n(r[4]),
              this
            );
          if (
            (r =
              /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(
                s
              ))
          )
            return (
              (this.r = Math.min(100, parseInt(r[1], 10)) / 100),
              (this.g = Math.min(100, parseInt(r[2], 10)) / 100),
              (this.b = Math.min(100, parseInt(r[3], 10)) / 100),
              Kt.toWorkingColorSpace(this, t),
              n(r[4]),
              this
            );
          break;
        case "hsl":
        case "hsla":
          if (
            (r =
              /^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(
                s
              ))
          ) {
            const c = parseFloat(r[1]) / 360,
              l = parseFloat(r[2]) / 100,
              u = parseFloat(r[3]) / 100;
            return n(r[4]), this.setHSL(c, l, u, t);
          }
          break;
      }
    } else if ((i = /^\#([A-Fa-f\d]+)$/.exec(e))) {
      const r = i[1],
        a = r.length;
      if (a === 3)
        return (
          (this.r = parseInt(r.charAt(0) + r.charAt(0), 16) / 255),
          (this.g = parseInt(r.charAt(1) + r.charAt(1), 16) / 255),
          (this.b = parseInt(r.charAt(2) + r.charAt(2), 16) / 255),
          Kt.toWorkingColorSpace(this, t),
          this
        );
      if (a === 6)
        return (
          (this.r = parseInt(r.charAt(0) + r.charAt(1), 16) / 255),
          (this.g = parseInt(r.charAt(2) + r.charAt(3), 16) / 255),
          (this.b = parseInt(r.charAt(4) + r.charAt(5), 16) / 255),
          Kt.toWorkingColorSpace(this, t),
          this
        );
    }
    return e && e.length > 0 ? this.setColorName(e, t) : this;
  }
  setColorName(e, t = Sn) {
    const n = Sc[e.toLowerCase()];
    return (
      n !== void 0
        ? this.setHex(n, t)
        : console.warn("THREE.Color: Unknown color " + e),
      this
    );
  }
  clone() {
    return new this.constructor(this.r, this.g, this.b);
  }
  copy(e) {
    return (this.r = e.r), (this.g = e.g), (this.b = e.b), this;
  }
  copySRGBToLinear(e) {
    return (this.r = fi(e.r)), (this.g = fi(e.g)), (this.b = fi(e.b)), this;
  }
  copyLinearToSRGB(e) {
    return (this.r = ms(e.r)), (this.g = ms(e.g)), (this.b = ms(e.b)), this;
  }
  convertSRGBToLinear() {
    return this.copySRGBToLinear(this), this;
  }
  convertLinearToSRGB() {
    return this.copyLinearToSRGB(this), this;
  }
  getHex(e = Sn) {
    return (
      Kt.fromWorkingColorSpace(qr(this, Ke), e),
      (Lt(Ke.r * 255, 0, 255) << 16) ^
        (Lt(Ke.g * 255, 0, 255) << 8) ^
        (Lt(Ke.b * 255, 0, 255) << 0)
    );
  }
  getHexString(e = Sn) {
    return ("000000" + this.getHex(e).toString(16)).slice(-6);
  }
  getHSL(e, t = ci) {
    Kt.fromWorkingColorSpace(qr(this, Ke), t);
    const n = Ke.r,
      i = Ke.g,
      r = Ke.b,
      a = Math.max(n, i, r),
      s = Math.min(n, i, r);
    let c, l;
    const u = (s + a) / 2;
    if (s === a) (c = 0), (l = 0);
    else {
      const h = a - s;
      switch (((l = u <= 0.5 ? h / (a + s) : h / (2 - a - s)), a)) {
        case n:
          c = (i - r) / h + (i < r ? 6 : 0);
          break;
        case i:
          c = (r - n) / h + 2;
          break;
        case r:
          c = (n - i) / h + 4;
          break;
      }
      c /= 6;
    }
    return (e.h = c), (e.s = l), (e.l = u), e;
  }
  getRGB(e, t = ci) {
    return (
      Kt.fromWorkingColorSpace(qr(this, Ke), t),
      (e.r = Ke.r),
      (e.g = Ke.g),
      (e.b = Ke.b),
      e
    );
  }
  getStyle(e = Sn) {
    return (
      Kt.fromWorkingColorSpace(qr(this, Ke), e),
      e !== Sn
        ? `color(${e} ${Ke.r} ${Ke.g} ${Ke.b})`
        : `rgb(${(Ke.r * 255) | 0},${(Ke.g * 255) | 0},${(Ke.b * 255) | 0})`
    );
  }
  offsetHSL(e, t, n) {
    return (
      this.getHSL(Jt),
      (Jt.h += e),
      (Jt.s += t),
      (Jt.l += n),
      this.setHSL(Jt.h, Jt.s, Jt.l),
      this
    );
  }
  add(e) {
    return (this.r += e.r), (this.g += e.g), (this.b += e.b), this;
  }
  addColors(e, t) {
    return (
      (this.r = e.r + t.r), (this.g = e.g + t.g), (this.b = e.b + t.b), this
    );
  }
  addScalar(e) {
    return (this.r += e), (this.g += e), (this.b += e), this;
  }
  sub(e) {
    return (
      (this.r = Math.max(0, this.r - e.r)),
      (this.g = Math.max(0, this.g - e.g)),
      (this.b = Math.max(0, this.b - e.b)),
      this
    );
  }
  multiply(e) {
    return (this.r *= e.r), (this.g *= e.g), (this.b *= e.b), this;
  }
  multiplyScalar(e) {
    return (this.r *= e), (this.g *= e), (this.b *= e), this;
  }
  lerp(e, t) {
    return (
      (this.r += (e.r - this.r) * t),
      (this.g += (e.g - this.g) * t),
      (this.b += (e.b - this.b) * t),
      this
    );
  }
  lerpColors(e, t, n) {
    return (
      (this.r = e.r + (t.r - e.r) * n),
      (this.g = e.g + (t.g - e.g) * n),
      (this.b = e.b + (t.b - e.b) * n),
      this
    );
  }
  lerpHSL(e, t) {
    this.getHSL(Jt), e.getHSL(Wr);
    const n = js(Jt.h, Wr.h, t),
      i = js(Jt.s, Wr.s, t),
      r = js(Jt.l, Wr.l, t);
    return this.setHSL(n, i, r), this;
  }
  equals(e) {
    return e.r === this.r && e.g === this.g && e.b === this.b;
  }
  fromArray(e, t = 0) {
    return (this.r = e[t]), (this.g = e[t + 1]), (this.b = e[t + 2]), this;
  }
  toArray(e = [], t = 0) {
    return (e[t] = this.r), (e[t + 1] = this.g), (e[t + 2] = this.b), e;
  }
  fromBufferAttribute(e, t) {
    return (
      (this.r = e.getX(t)), (this.g = e.getY(t)), (this.b = e.getZ(t)), this
    );
  }
  toJSON() {
    return this.getHex();
  }
  *[Symbol.iterator]() {
    yield this.r, yield this.g, yield this.b;
  }
}
De.NAMES = Sc;
let bi;
class bc {
  static getDataURL(e) {
    if (/^data:/i.test(e.src) || typeof HTMLCanvasElement > "u") return e.src;
    let t;
    if (e instanceof HTMLCanvasElement) t = e;
    else {
      bi === void 0 && (bi = Er("canvas")),
        (bi.width = e.width),
        (bi.height = e.height);
      const n = bi.getContext("2d");
      e instanceof ImageData
        ? n.putImageData(e, 0, 0)
        : n.drawImage(e, 0, 0, e.width, e.height),
        (t = bi);
    }
    return t.width > 2048 || t.height > 2048
      ? (console.warn(
          "THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",
          e
        ),
        t.toDataURL("image/jpeg", 0.6))
      : t.toDataURL("image/png");
  }
  static sRGBToLinear(e) {
    if (
      (typeof HTMLImageElement < "u" && e instanceof HTMLImageElement) ||
      (typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement) ||
      (typeof ImageBitmap < "u" && e instanceof ImageBitmap)
    ) {
      const t = Er("canvas");
      (t.width = e.width), (t.height = e.height);
      const n = t.getContext("2d");
      n.drawImage(e, 0, 0, e.width, e.height);
      const i = n.getImageData(0, 0, e.width, e.height),
        r = i.data;
      for (let a = 0; a < r.length; a++) r[a] = fi(r[a] / 255) * 255;
      return n.putImageData(i, 0, 0), t;
    } else if (e.data) {
      const t = e.data.slice(0);
      for (let n = 0; n < t.length; n++)
        t instanceof Uint8Array || t instanceof Uint8ClampedArray
          ? (t[n] = Math.floor(fi(t[n] / 255) * 255))
          : (t[n] = fi(t[n]));
      return { data: t, width: e.width, height: e.height };
    } else
      return (
        console.warn(
          "THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."
        ),
        e
      );
  }
}
class wc {
  constructor(e = null) {
    (this.isSource = !0),
      (this.uuid = zr()),
      (this.data = e),
      (this.version = 0);
  }
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    if (!t && e.images[this.uuid] !== void 0) return e.images[this.uuid];
    const n = { uuid: this.uuid, url: "" },
      i = this.data;
    if (i !== null) {
      let r;
      if (Array.isArray(i)) {
        r = [];
        for (let a = 0, s = i.length; a < s; a++)
          i[a].isDataTexture ? r.push(Ks(i[a].image)) : r.push(Ks(i[a]));
      } else r = Ks(i);
      n.url = r;
    }
    return t || (e.images[this.uuid] = n), n;
  }
}
function Ks(o) {
  return (typeof HTMLImageElement < "u" && o instanceof HTMLImageElement) ||
    (typeof HTMLCanvasElement < "u" && o instanceof HTMLCanvasElement) ||
    (typeof ImageBitmap < "u" && o instanceof ImageBitmap)
    ? bc.getDataURL(o)
    : o.data
    ? {
        data: Array.from(o.data),
        width: o.width,
        height: o.height,
        type: o.data.constructor.name,
      }
    : (console.warn("THREE.Texture: Unable to serialize Texture."), {});
}
let jh = 0;
class jt extends or {
  constructor(
    e = jt.DEFAULT_IMAGE,
    t = jt.DEFAULT_MAPPING,
    n = tn,
    i = tn,
    r = kt,
    a = Ds,
    s = un,
    c = gi,
    l = 1,
    u = _i
  ) {
    super(),
      (this.isTexture = !0),
      Object.defineProperty(this, "id", { value: jh++ }),
      (this.uuid = zr()),
      (this.name = ""),
      (this.source = new wc(e)),
      (this.mipmaps = []),
      (this.mapping = t),
      (this.wrapS = n),
      (this.wrapT = i),
      (this.magFilter = r),
      (this.minFilter = a),
      (this.anisotropy = l),
      (this.format = s),
      (this.internalFormat = null),
      (this.type = c),
      (this.offset = new Se(0, 0)),
      (this.repeat = new Se(1, 1)),
      (this.center = new Se(0, 0)),
      (this.rotation = 0),
      (this.matrixAutoUpdate = !0),
      (this.matrix = new Gt()),
      (this.generateMipmaps = !0),
      (this.premultiplyAlpha = !1),
      (this.flipY = !0),
      (this.unpackAlignment = 4),
      (this.encoding = u),
      (this.userData = {}),
      (this.version = 0),
      (this.onUpdate = null),
      (this.isRenderTargetTexture = !1),
      (this.needsPMREMUpdate = !1);
  }
  get image() {
    return this.source.data;
  }
  set image(e) {
    this.source.data = e;
  }
  updateMatrix() {
    this.matrix.setUvTransform(
      this.offset.x,
      this.offset.y,
      this.repeat.x,
      this.repeat.y,
      this.rotation,
      this.center.x,
      this.center.y
    );
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return (
      (this.name = e.name),
      (this.source = e.source),
      (this.mipmaps = e.mipmaps.slice(0)),
      (this.mapping = e.mapping),
      (this.wrapS = e.wrapS),
      (this.wrapT = e.wrapT),
      (this.magFilter = e.magFilter),
      (this.minFilter = e.minFilter),
      (this.anisotropy = e.anisotropy),
      (this.format = e.format),
      (this.internalFormat = e.internalFormat),
      (this.type = e.type),
      this.offset.copy(e.offset),
      this.repeat.copy(e.repeat),
      this.center.copy(e.center),
      (this.rotation = e.rotation),
      (this.matrixAutoUpdate = e.matrixAutoUpdate),
      this.matrix.copy(e.matrix),
      (this.generateMipmaps = e.generateMipmaps),
      (this.premultiplyAlpha = e.premultiplyAlpha),
      (this.flipY = e.flipY),
      (this.unpackAlignment = e.unpackAlignment),
      (this.encoding = e.encoding),
      (this.userData = JSON.parse(JSON.stringify(e.userData))),
      (this.needsUpdate = !0),
      this
    );
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    if (!t && e.textures[this.uuid] !== void 0) return e.textures[this.uuid];
    const n = {
      metadata: { version: 4.5, type: "Texture", generator: "Texture.toJSON" },
      uuid: this.uuid,
      name: this.name,
      image: this.source.toJSON(e).uuid,
      mapping: this.mapping,
      repeat: [this.repeat.x, this.repeat.y],
      offset: [this.offset.x, this.offset.y],
      center: [this.center.x, this.center.y],
      rotation: this.rotation,
      wrap: [this.wrapS, this.wrapT],
      format: this.format,
      type: this.type,
      encoding: this.encoding,
      minFilter: this.minFilter,
      magFilter: this.magFilter,
      anisotropy: this.anisotropy,
      flipY: this.flipY,
      premultiplyAlpha: this.premultiplyAlpha,
      unpackAlignment: this.unpackAlignment,
    };
    return (
      JSON.stringify(this.userData) !== "{}" && (n.userData = this.userData),
      t || (e.textures[this.uuid] = n),
      n
    );
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  transformUv(e) {
    if (this.mapping !== vc) return e;
    if ((e.applyMatrix3(this.matrix), e.x < 0 || e.x > 1))
      switch (this.wrapS) {
        case Fa:
          e.x = e.x - Math.floor(e.x);
          break;
        case tn:
          e.x = e.x < 0 ? 0 : 1;
          break;
        case Oa:
          Math.abs(Math.floor(e.x) % 2) === 1
            ? (e.x = Math.ceil(e.x) - e.x)
            : (e.x = e.x - Math.floor(e.x));
          break;
      }
    if (e.y < 0 || e.y > 1)
      switch (this.wrapT) {
        case Fa:
          e.y = e.y - Math.floor(e.y);
          break;
        case tn:
          e.y = e.y < 0 ? 0 : 1;
          break;
        case Oa:
          Math.abs(Math.floor(e.y) % 2) === 1
            ? (e.y = Math.ceil(e.y) - e.y)
            : (e.y = e.y - Math.floor(e.y));
          break;
      }
    return this.flipY && (e.y = 1 - e.y), e;
  }
  set needsUpdate(e) {
    e === !0 && (this.version++, (this.source.needsUpdate = !0));
  }
}
jt.DEFAULT_IMAGE = null;
jt.DEFAULT_MAPPING = vc;
class at {
  constructor(e = 0, t = 0, n = 0, i = 1) {
    (at.prototype.isVector4 = !0),
      (this.x = e),
      (this.y = t),
      (this.z = n),
      (this.w = i);
  }
  get width() {
    return this.z;
  }
  set width(e) {
    this.z = e;
  }
  get height() {
    return this.w;
  }
  set height(e) {
    this.w = e;
  }
  set(e, t, n, i) {
    return (this.x = e), (this.y = t), (this.z = n), (this.w = i), this;
  }
  setScalar(e) {
    return (this.x = e), (this.y = e), (this.z = e), (this.w = e), this;
  }
  setX(e) {
    return (this.x = e), this;
  }
  setY(e) {
    return (this.y = e), this;
  }
  setZ(e) {
    return (this.z = e), this;
  }
  setW(e) {
    return (this.w = e), this;
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      case 2:
        this.z = t;
        break;
      case 3:
        this.w = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      case 3:
        return this.w;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z, this.w);
  }
  copy(e) {
    return (
      (this.x = e.x),
      (this.y = e.y),
      (this.z = e.z),
      (this.w = e.w !== void 0 ? e.w : 1),
      this
    );
  }
  add(e) {
    return (
      (this.x += e.x), (this.y += e.y), (this.z += e.z), (this.w += e.w), this
    );
  }
  addScalar(e) {
    return (this.x += e), (this.y += e), (this.z += e), (this.w += e), this;
  }
  addVectors(e, t) {
    return (
      (this.x = e.x + t.x),
      (this.y = e.y + t.y),
      (this.z = e.z + t.z),
      (this.w = e.w + t.w),
      this
    );
  }
  addScaledVector(e, t) {
    return (
      (this.x += e.x * t),
      (this.y += e.y * t),
      (this.z += e.z * t),
      (this.w += e.w * t),
      this
    );
  }
  sub(e) {
    return (
      (this.x -= e.x), (this.y -= e.y), (this.z -= e.z), (this.w -= e.w), this
    );
  }
  subScalar(e) {
    return (this.x -= e), (this.y -= e), (this.z -= e), (this.w -= e), this;
  }
  subVectors(e, t) {
    return (
      (this.x = e.x - t.x),
      (this.y = e.y - t.y),
      (this.z = e.z - t.z),
      (this.w = e.w - t.w),
      this
    );
  }
  multiply(e) {
    return (
      (this.x *= e.x), (this.y *= e.y), (this.z *= e.z), (this.w *= e.w), this
    );
  }
  multiplyScalar(e) {
    return (this.x *= e), (this.y *= e), (this.z *= e), (this.w *= e), this;
  }
  applyMatrix4(e) {
    const t = this.x,
      n = this.y,
      i = this.z,
      r = this.w,
      a = e.elements;
    return (
      (this.x = a[0] * t + a[4] * n + a[8] * i + a[12] * r),
      (this.y = a[1] * t + a[5] * n + a[9] * i + a[13] * r),
      (this.z = a[2] * t + a[6] * n + a[10] * i + a[14] * r),
      (this.w = a[3] * t + a[7] * n + a[11] * i + a[15] * r),
      this
    );
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  setAxisAngleFromQuaternion(e) {
    this.w = 2 * Math.acos(e.w);
    const t = Math.sqrt(1 - e.w * e.w);
    return (
      t < 1e-4
        ? ((this.x = 1), (this.y = 0), (this.z = 0))
        : ((this.x = e.x / t), (this.y = e.y / t), (this.z = e.z / t)),
      this
    );
  }
  setAxisAngleFromRotationMatrix(e) {
    let t, n, i, r;
    const c = e.elements,
      l = c[0],
      u = c[4],
      h = c[8],
      f = c[1],
      m = c[5],
      g = c[9],
      d = c[2],
      p = c[6],
      _ = c[10];
    if (
      Math.abs(u - f) < 0.01 &&
      Math.abs(h - d) < 0.01 &&
      Math.abs(g - p) < 0.01
    ) {
      if (
        Math.abs(u + f) < 0.1 &&
        Math.abs(h + d) < 0.1 &&
        Math.abs(g + p) < 0.1 &&
        Math.abs(l + m + _ - 3) < 0.1
      )
        return this.set(1, 0, 0, 0), this;
      t = Math.PI;
      const S = (l + 1) / 2,
        M = (m + 1) / 2,
        y = (_ + 1) / 2,
        E = (u + f) / 4,
        A = (h + d) / 4,
        x = (g + p) / 4;
      return (
        S > M && S > y
          ? S < 0.01
            ? ((n = 0), (i = 0.707106781), (r = 0.707106781))
            : ((n = Math.sqrt(S)), (i = E / n), (r = A / n))
          : M > y
          ? M < 0.01
            ? ((n = 0.707106781), (i = 0), (r = 0.707106781))
            : ((i = Math.sqrt(M)), (n = E / i), (r = x / i))
          : y < 0.01
          ? ((n = 0.707106781), (i = 0.707106781), (r = 0))
          : ((r = Math.sqrt(y)), (n = A / r), (i = x / r)),
        this.set(n, i, r, t),
        this
      );
    }
    let v = Math.sqrt(
      (p - g) * (p - g) + (h - d) * (h - d) + (f - u) * (f - u)
    );
    return (
      Math.abs(v) < 0.001 && (v = 1),
      (this.x = (p - g) / v),
      (this.y = (h - d) / v),
      (this.z = (f - u) / v),
      (this.w = Math.acos((l + m + _ - 1) / 2)),
      this
    );
  }
  min(e) {
    return (
      (this.x = Math.min(this.x, e.x)),
      (this.y = Math.min(this.y, e.y)),
      (this.z = Math.min(this.z, e.z)),
      (this.w = Math.min(this.w, e.w)),
      this
    );
  }
  max(e) {
    return (
      (this.x = Math.max(this.x, e.x)),
      (this.y = Math.max(this.y, e.y)),
      (this.z = Math.max(this.z, e.z)),
      (this.w = Math.max(this.w, e.w)),
      this
    );
  }
  clamp(e, t) {
    return (
      (this.x = Math.max(e.x, Math.min(t.x, this.x))),
      (this.y = Math.max(e.y, Math.min(t.y, this.y))),
      (this.z = Math.max(e.z, Math.min(t.z, this.z))),
      (this.w = Math.max(e.w, Math.min(t.w, this.w))),
      this
    );
  }
  clampScalar(e, t) {
    return (
      (this.x = Math.max(e, Math.min(t, this.x))),
      (this.y = Math.max(e, Math.min(t, this.y))),
      (this.z = Math.max(e, Math.min(t, this.z))),
      (this.w = Math.max(e, Math.min(t, this.w))),
      this
    );
  }
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(
      Math.max(e, Math.min(t, n))
    );
  }
  floor() {
    return (
      (this.x = Math.floor(this.x)),
      (this.y = Math.floor(this.y)),
      (this.z = Math.floor(this.z)),
      (this.w = Math.floor(this.w)),
      this
    );
  }
  ceil() {
    return (
      (this.x = Math.ceil(this.x)),
      (this.y = Math.ceil(this.y)),
      (this.z = Math.ceil(this.z)),
      (this.w = Math.ceil(this.w)),
      this
    );
  }
  round() {
    return (
      (this.x = Math.round(this.x)),
      (this.y = Math.round(this.y)),
      (this.z = Math.round(this.z)),
      (this.w = Math.round(this.w)),
      this
    );
  }
  roundToZero() {
    return (
      (this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x)),
      (this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y)),
      (this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z)),
      (this.w = this.w < 0 ? Math.ceil(this.w) : Math.floor(this.w)),
      this
    );
  }
  negate() {
    return (
      (this.x = -this.x),
      (this.y = -this.y),
      (this.z = -this.z),
      (this.w = -this.w),
      this
    );
  }
  dot(e) {
    return this.x * e.x + this.y * e.y + this.z * e.z + this.w * e.w;
  }
  lengthSq() {
    return (
      this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w
    );
  }
  length() {
    return Math.sqrt(
      this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w
    );
  }
  manhattanLength() {
    return (
      Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w)
    );
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return (
      (this.x += (e.x - this.x) * t),
      (this.y += (e.y - this.y) * t),
      (this.z += (e.z - this.z) * t),
      (this.w += (e.w - this.w) * t),
      this
    );
  }
  lerpVectors(e, t, n) {
    return (
      (this.x = e.x + (t.x - e.x) * n),
      (this.y = e.y + (t.y - e.y) * n),
      (this.z = e.z + (t.z - e.z) * n),
      (this.w = e.w + (t.w - e.w) * n),
      this
    );
  }
  equals(e) {
    return e.x === this.x && e.y === this.y && e.z === this.z && e.w === this.w;
  }
  fromArray(e, t = 0) {
    return (
      (this.x = e[t]),
      (this.y = e[t + 1]),
      (this.z = e[t + 2]),
      (this.w = e[t + 3]),
      this
    );
  }
  toArray(e = [], t = 0) {
    return (
      (e[t] = this.x),
      (e[t + 1] = this.y),
      (e[t + 2] = this.z),
      (e[t + 3] = this.w),
      e
    );
  }
  fromBufferAttribute(e, t) {
    return (
      (this.x = e.getX(t)),
      (this.y = e.getY(t)),
      (this.z = e.getZ(t)),
      (this.w = e.getW(t)),
      this
    );
  }
  random() {
    return (
      (this.x = Math.random()),
      (this.y = Math.random()),
      (this.z = Math.random()),
      (this.w = Math.random()),
      this
    );
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z, yield this.w;
  }
}
class nn extends or {
  constructor(e, t, n = {}) {
    super(),
      (this.isWebGLRenderTarget = !0),
      (this.width = e),
      (this.height = t),
      (this.depth = 1),
      (this.scissor = new at(0, 0, e, t)),
      (this.scissorTest = !1),
      (this.viewport = new at(0, 0, e, t));
    const i = { width: e, height: t, depth: 1 };
    (this.texture = new jt(
      i,
      n.mapping,
      n.wrapS,
      n.wrapT,
      n.magFilter,
      n.minFilter,
      n.format,
      n.type,
      n.anisotropy,
      n.encoding
    )),
      (this.texture.isRenderTargetTexture = !0),
      (this.texture.flipY = !1),
      (this.texture.generateMipmaps =
        n.generateMipmaps !== void 0 ? n.generateMipmaps : !1),
      (this.texture.internalFormat =
        n.internalFormat !== void 0 ? n.internalFormat : null),
      (this.texture.minFilter = n.minFilter !== void 0 ? n.minFilter : kt),
      (this.depthBuffer = n.depthBuffer !== void 0 ? n.depthBuffer : !0),
      (this.stencilBuffer = n.stencilBuffer !== void 0 ? n.stencilBuffer : !1),
      (this.depthTexture = n.depthTexture !== void 0 ? n.depthTexture : null),
      (this.samples = n.samples !== void 0 ? n.samples : 0);
  }
  setSize(e, t, n = 1) {
    (this.width !== e || this.height !== t || this.depth !== n) &&
      ((this.width = e),
      (this.height = t),
      (this.depth = n),
      (this.texture.image.width = e),
      (this.texture.image.height = t),
      (this.texture.image.depth = n),
      this.dispose()),
      this.viewport.set(0, 0, e, t),
      this.scissor.set(0, 0, e, t);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    (this.width = e.width),
      (this.height = e.height),
      (this.depth = e.depth),
      this.viewport.copy(e.viewport),
      (this.texture = e.texture.clone()),
      (this.texture.isRenderTargetTexture = !0);
    const t = Object.assign({}, e.texture.image);
    return (
      (this.texture.source = new wc(t)),
      (this.depthBuffer = e.depthBuffer),
      (this.stencilBuffer = e.stencilBuffer),
      e.depthTexture !== null && (this.depthTexture = e.depthTexture.clone()),
      (this.samples = e.samples),
      this
    );
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
class Tc extends jt {
  constructor(e = null, t = 1, n = 1, i = 1) {
    super(null),
      (this.isDataArrayTexture = !0),
      (this.image = { data: e, width: t, height: n, depth: i }),
      (this.magFilter = xt),
      (this.minFilter = xt),
      (this.wrapR = tn),
      (this.generateMipmaps = !1),
      (this.flipY = !1),
      (this.unpackAlignment = 1);
  }
}
class Zh extends jt {
  constructor(e = null, t = 1, n = 1, i = 1) {
    super(null),
      (this.isData3DTexture = !0),
      (this.image = { data: e, width: t, height: n, depth: i }),
      (this.magFilter = xt),
      (this.minFilter = xt),
      (this.wrapR = tn),
      (this.generateMipmaps = !1),
      (this.flipY = !1),
      (this.unpackAlignment = 1);
  }
}
class Fr {
  constructor(e = 0, t = 0, n = 0, i = 1) {
    (this.isQuaternion = !0),
      (this._x = e),
      (this._y = t),
      (this._z = n),
      (this._w = i);
  }
  static slerpFlat(e, t, n, i, r, a, s) {
    let c = n[i + 0],
      l = n[i + 1],
      u = n[i + 2],
      h = n[i + 3];
    const f = r[a + 0],
      m = r[a + 1],
      g = r[a + 2],
      d = r[a + 3];
    if (s === 0) {
      (e[t + 0] = c), (e[t + 1] = l), (e[t + 2] = u), (e[t + 3] = h);
      return;
    }
    if (s === 1) {
      (e[t + 0] = f), (e[t + 1] = m), (e[t + 2] = g), (e[t + 3] = d);
      return;
    }
    if (h !== d || c !== f || l !== m || u !== g) {
      let p = 1 - s;
      const _ = c * f + l * m + u * g + h * d,
        v = _ >= 0 ? 1 : -1,
        S = 1 - _ * _;
      if (S > Number.EPSILON) {
        const y = Math.sqrt(S),
          E = Math.atan2(y, _ * v);
        (p = Math.sin(p * E) / y), (s = Math.sin(s * E) / y);
      }
      const M = s * v;
      if (
        ((c = c * p + f * M),
        (l = l * p + m * M),
        (u = u * p + g * M),
        (h = h * p + d * M),
        p === 1 - s)
      ) {
        const y = 1 / Math.sqrt(c * c + l * l + u * u + h * h);
        (c *= y), (l *= y), (u *= y), (h *= y);
      }
    }
    (e[t] = c), (e[t + 1] = l), (e[t + 2] = u), (e[t + 3] = h);
  }
  static multiplyQuaternionsFlat(e, t, n, i, r, a) {
    const s = n[i],
      c = n[i + 1],
      l = n[i + 2],
      u = n[i + 3],
      h = r[a],
      f = r[a + 1],
      m = r[a + 2],
      g = r[a + 3];
    return (
      (e[t] = s * g + u * h + c * m - l * f),
      (e[t + 1] = c * g + u * f + l * h - s * m),
      (e[t + 2] = l * g + u * m + s * f - c * h),
      (e[t + 3] = u * g - s * h - c * f - l * m),
      e
    );
  }
  get x() {
    return this._x;
  }
  set x(e) {
    (this._x = e), this._onChangeCallback();
  }
  get y() {
    return this._y;
  }
  set y(e) {
    (this._y = e), this._onChangeCallback();
  }
  get z() {
    return this._z;
  }
  set z(e) {
    (this._z = e), this._onChangeCallback();
  }
  get w() {
    return this._w;
  }
  set w(e) {
    (this._w = e), this._onChangeCallback();
  }
  set(e, t, n, i) {
    return (
      (this._x = e),
      (this._y = t),
      (this._z = n),
      (this._w = i),
      this._onChangeCallback(),
      this
    );
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._w);
  }
  copy(e) {
    return (
      (this._x = e.x),
      (this._y = e.y),
      (this._z = e.z),
      (this._w = e.w),
      this._onChangeCallback(),
      this
    );
  }
  setFromEuler(e, t) {
    const n = e._x,
      i = e._y,
      r = e._z,
      a = e._order,
      s = Math.cos,
      c = Math.sin,
      l = s(n / 2),
      u = s(i / 2),
      h = s(r / 2),
      f = c(n / 2),
      m = c(i / 2),
      g = c(r / 2);
    switch (a) {
      case "XYZ":
        (this._x = f * u * h + l * m * g),
          (this._y = l * m * h - f * u * g),
          (this._z = l * u * g + f * m * h),
          (this._w = l * u * h - f * m * g);
        break;
      case "YXZ":
        (this._x = f * u * h + l * m * g),
          (this._y = l * m * h - f * u * g),
          (this._z = l * u * g - f * m * h),
          (this._w = l * u * h + f * m * g);
        break;
      case "ZXY":
        (this._x = f * u * h - l * m * g),
          (this._y = l * m * h + f * u * g),
          (this._z = l * u * g + f * m * h),
          (this._w = l * u * h - f * m * g);
        break;
      case "ZYX":
        (this._x = f * u * h - l * m * g),
          (this._y = l * m * h + f * u * g),
          (this._z = l * u * g - f * m * h),
          (this._w = l * u * h + f * m * g);
        break;
      case "YZX":
        (this._x = f * u * h + l * m * g),
          (this._y = l * m * h + f * u * g),
          (this._z = l * u * g - f * m * h),
          (this._w = l * u * h - f * m * g);
        break;
      case "XZY":
        (this._x = f * u * h - l * m * g),
          (this._y = l * m * h - f * u * g),
          (this._z = l * u * g + f * m * h),
          (this._w = l * u * h + f * m * g);
        break;
      default:
        console.warn(
          "THREE.Quaternion: .setFromEuler() encountered an unknown order: " + a
        );
    }
    return t !== !1 && this._onChangeCallback(), this;
  }
  setFromAxisAngle(e, t) {
    const n = t / 2,
      i = Math.sin(n);
    return (
      (this._x = e.x * i),
      (this._y = e.y * i),
      (this._z = e.z * i),
      (this._w = Math.cos(n)),
      this._onChangeCallback(),
      this
    );
  }
  setFromRotationMatrix(e) {
    const t = e.elements,
      n = t[0],
      i = t[4],
      r = t[8],
      a = t[1],
      s = t[5],
      c = t[9],
      l = t[2],
      u = t[6],
      h = t[10],
      f = n + s + h;
    if (f > 0) {
      const m = 0.5 / Math.sqrt(f + 1);
      (this._w = 0.25 / m),
        (this._x = (u - c) * m),
        (this._y = (r - l) * m),
        (this._z = (a - i) * m);
    } else if (n > s && n > h) {
      const m = 2 * Math.sqrt(1 + n - s - h);
      (this._w = (u - c) / m),
        (this._x = 0.25 * m),
        (this._y = (i + a) / m),
        (this._z = (r + l) / m);
    } else if (s > h) {
      const m = 2 * Math.sqrt(1 + s - n - h);
      (this._w = (r - l) / m),
        (this._x = (i + a) / m),
        (this._y = 0.25 * m),
        (this._z = (c + u) / m);
    } else {
      const m = 2 * Math.sqrt(1 + h - n - s);
      (this._w = (a - i) / m),
        (this._x = (r + l) / m),
        (this._y = (c + u) / m),
        (this._z = 0.25 * m);
    }
    return this._onChangeCallback(), this;
  }
  setFromUnitVectors(e, t) {
    let n = e.dot(t) + 1;
    return (
      n < Number.EPSILON
        ? ((n = 0),
          Math.abs(e.x) > Math.abs(e.z)
            ? ((this._x = -e.y), (this._y = e.x), (this._z = 0), (this._w = n))
            : ((this._x = 0), (this._y = -e.z), (this._z = e.y), (this._w = n)))
        : ((this._x = e.y * t.z - e.z * t.y),
          (this._y = e.z * t.x - e.x * t.z),
          (this._z = e.x * t.y - e.y * t.x),
          (this._w = n)),
      this.normalize()
    );
  }
  angleTo(e) {
    return 2 * Math.acos(Math.abs(Lt(this.dot(e), -1, 1)));
  }
  rotateTowards(e, t) {
    const n = this.angleTo(e);
    if (n === 0) return this;
    const i = Math.min(1, t / n);
    return this.slerp(e, i), this;
  }
  identity() {
    return this.set(0, 0, 0, 1);
  }
  invert() {
    return this.conjugate();
  }
  conjugate() {
    return (
      (this._x *= -1),
      (this._y *= -1),
      (this._z *= -1),
      this._onChangeCallback(),
      this
    );
  }
  dot(e) {
    return this._x * e._x + this._y * e._y + this._z * e._z + this._w * e._w;
  }
  lengthSq() {
    return (
      this._x * this._x +
      this._y * this._y +
      this._z * this._z +
      this._w * this._w
    );
  }
  length() {
    return Math.sqrt(
      this._x * this._x +
        this._y * this._y +
        this._z * this._z +
        this._w * this._w
    );
  }
  normalize() {
    let e = this.length();
    return (
      e === 0
        ? ((this._x = 0), (this._y = 0), (this._z = 0), (this._w = 1))
        : ((e = 1 / e),
          (this._x = this._x * e),
          (this._y = this._y * e),
          (this._z = this._z * e),
          (this._w = this._w * e)),
      this._onChangeCallback(),
      this
    );
  }
  multiply(e) {
    return this.multiplyQuaternions(this, e);
  }
  premultiply(e) {
    return this.multiplyQuaternions(e, this);
  }
  multiplyQuaternions(e, t) {
    const n = e._x,
      i = e._y,
      r = e._z,
      a = e._w,
      s = t._x,
      c = t._y,
      l = t._z,
      u = t._w;
    return (
      (this._x = n * u + a * s + i * l - r * c),
      (this._y = i * u + a * c + r * s - n * l),
      (this._z = r * u + a * l + n * c - i * s),
      (this._w = a * u - n * s - i * c - r * l),
      this._onChangeCallback(),
      this
    );
  }
  slerp(e, t) {
    if (t === 0) return this;
    if (t === 1) return this.copy(e);
    const n = this._x,
      i = this._y,
      r = this._z,
      a = this._w;
    let s = a * e._w + n * e._x + i * e._y + r * e._z;
    if (
      (s < 0
        ? ((this._w = -e._w),
          (this._x = -e._x),
          (this._y = -e._y),
          (this._z = -e._z),
          (s = -s))
        : this.copy(e),
      s >= 1)
    )
      return (this._w = a), (this._x = n), (this._y = i), (this._z = r), this;
    const c = 1 - s * s;
    if (c <= Number.EPSILON) {
      const m = 1 - t;
      return (
        (this._w = m * a + t * this._w),
        (this._x = m * n + t * this._x),
        (this._y = m * i + t * this._y),
        (this._z = m * r + t * this._z),
        this.normalize(),
        this._onChangeCallback(),
        this
      );
    }
    const l = Math.sqrt(c),
      u = Math.atan2(l, s),
      h = Math.sin((1 - t) * u) / l,
      f = Math.sin(t * u) / l;
    return (
      (this._w = a * h + this._w * f),
      (this._x = n * h + this._x * f),
      (this._y = i * h + this._y * f),
      (this._z = r * h + this._z * f),
      this._onChangeCallback(),
      this
    );
  }
  slerpQuaternions(e, t, n) {
    return this.copy(e).slerp(t, n);
  }
  random() {
    const e = Math.random(),
      t = Math.sqrt(1 - e),
      n = Math.sqrt(e),
      i = 2 * Math.PI * Math.random(),
      r = 2 * Math.PI * Math.random();
    return this.set(
      t * Math.cos(i),
      n * Math.sin(r),
      n * Math.cos(r),
      t * Math.sin(i)
    );
  }
  equals(e) {
    return (
      e._x === this._x &&
      e._y === this._y &&
      e._z === this._z &&
      e._w === this._w
    );
  }
  fromArray(e, t = 0) {
    return (
      (this._x = e[t]),
      (this._y = e[t + 1]),
      (this._z = e[t + 2]),
      (this._w = e[t + 3]),
      this._onChangeCallback(),
      this
    );
  }
  toArray(e = [], t = 0) {
    return (
      (e[t] = this._x),
      (e[t + 1] = this._y),
      (e[t + 2] = this._z),
      (e[t + 3] = this._w),
      e
    );
  }
  fromBufferAttribute(e, t) {
    return (
      (this._x = e.getX(t)),
      (this._y = e.getY(t)),
      (this._z = e.getZ(t)),
      (this._w = e.getW(t)),
      this
    );
  }
  _onChange(e) {
    return (this._onChangeCallback = e), this;
  }
  _onChangeCallback() {}
  *[Symbol.iterator]() {
    yield this._x, yield this._y, yield this._z, yield this._w;
  }
}
class R {
  constructor(e = 0, t = 0, n = 0) {
    (R.prototype.isVector3 = !0), (this.x = e), (this.y = t), (this.z = n);
  }
  set(e, t, n) {
    return (
      n === void 0 && (n = this.z),
      (this.x = e),
      (this.y = t),
      (this.z = n),
      this
    );
  }
  setScalar(e) {
    return (this.x = e), (this.y = e), (this.z = e), this;
  }
  setX(e) {
    return (this.x = e), this;
  }
  setY(e) {
    return (this.y = e), this;
  }
  setZ(e) {
    return (this.z = e), this;
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      case 2:
        this.z = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z);
  }
  copy(e) {
    return (this.x = e.x), (this.y = e.y), (this.z = e.z), this;
  }
  add(e) {
    return (this.x += e.x), (this.y += e.y), (this.z += e.z), this;
  }
  addScalar(e) {
    return (this.x += e), (this.y += e), (this.z += e), this;
  }
  addVectors(e, t) {
    return (
      (this.x = e.x + t.x), (this.y = e.y + t.y), (this.z = e.z + t.z), this
    );
  }
  addScaledVector(e, t) {
    return (this.x += e.x * t), (this.y += e.y * t), (this.z += e.z * t), this;
  }
  sub(e) {
    return (this.x -= e.x), (this.y -= e.y), (this.z -= e.z), this;
  }
  subScalar(e) {
    return (this.x -= e), (this.y -= e), (this.z -= e), this;
  }
  subVectors(e, t) {
    return (
      (this.x = e.x - t.x), (this.y = e.y - t.y), (this.z = e.z - t.z), this
    );
  }
  multiply(e) {
    return (this.x *= e.x), (this.y *= e.y), (this.z *= e.z), this;
  }
  multiplyScalar(e) {
    return (this.x *= e), (this.y *= e), (this.z *= e), this;
  }
  multiplyVectors(e, t) {
    return (
      (this.x = e.x * t.x), (this.y = e.y * t.y), (this.z = e.z * t.z), this
    );
  }
  applyEuler(e) {
    return this.applyQuaternion(al.setFromEuler(e));
  }
  applyAxisAngle(e, t) {
    return this.applyQuaternion(al.setFromAxisAngle(e, t));
  }
  applyMatrix3(e) {
    const t = this.x,
      n = this.y,
      i = this.z,
      r = e.elements;
    return (
      (this.x = r[0] * t + r[3] * n + r[6] * i),
      (this.y = r[1] * t + r[4] * n + r[7] * i),
      (this.z = r[2] * t + r[5] * n + r[8] * i),
      this
    );
  }
  applyNormalMatrix(e) {
    return this.applyMatrix3(e).normalize();
  }
  applyMatrix4(e) {
    const t = this.x,
      n = this.y,
      i = this.z,
      r = e.elements,
      a = 1 / (r[3] * t + r[7] * n + r[11] * i + r[15]);
    return (
      (this.x = (r[0] * t + r[4] * n + r[8] * i + r[12]) * a),
      (this.y = (r[1] * t + r[5] * n + r[9] * i + r[13]) * a),
      (this.z = (r[2] * t + r[6] * n + r[10] * i + r[14]) * a),
      this
    );
  }
  applyQuaternion(e) {
    const t = this.x,
      n = this.y,
      i = this.z,
      r = e.x,
      a = e.y,
      s = e.z,
      c = e.w,
      l = c * t + a * i - s * n,
      u = c * n + s * t - r * i,
      h = c * i + r * n - a * t,
      f = -r * t - a * n - s * i;
    return (
      (this.x = l * c + f * -r + u * -s - h * -a),
      (this.y = u * c + f * -a + h * -r - l * -s),
      (this.z = h * c + f * -s + l * -a - u * -r),
      this
    );
  }
  project(e) {
    return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(
      e.projectionMatrix
    );
  }
  unproject(e) {
    return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(
      e.matrixWorld
    );
  }
  transformDirection(e) {
    const t = this.x,
      n = this.y,
      i = this.z,
      r = e.elements;
    return (
      (this.x = r[0] * t + r[4] * n + r[8] * i),
      (this.y = r[1] * t + r[5] * n + r[9] * i),
      (this.z = r[2] * t + r[6] * n + r[10] * i),
      this.normalize()
    );
  }
  divide(e) {
    return (this.x /= e.x), (this.y /= e.y), (this.z /= e.z), this;
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  min(e) {
    return (
      (this.x = Math.min(this.x, e.x)),
      (this.y = Math.min(this.y, e.y)),
      (this.z = Math.min(this.z, e.z)),
      this
    );
  }
  max(e) {
    return (
      (this.x = Math.max(this.x, e.x)),
      (this.y = Math.max(this.y, e.y)),
      (this.z = Math.max(this.z, e.z)),
      this
    );
  }
  clamp(e, t) {
    return (
      (this.x = Math.max(e.x, Math.min(t.x, this.x))),
      (this.y = Math.max(e.y, Math.min(t.y, this.y))),
      (this.z = Math.max(e.z, Math.min(t.z, this.z))),
      this
    );
  }
  clampScalar(e, t) {
    return (
      (this.x = Math.max(e, Math.min(t, this.x))),
      (this.y = Math.max(e, Math.min(t, this.y))),
      (this.z = Math.max(e, Math.min(t, this.z))),
      this
    );
  }
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(
      Math.max(e, Math.min(t, n))
    );
  }
  floor() {
    return (
      (this.x = Math.floor(this.x)),
      (this.y = Math.floor(this.y)),
      (this.z = Math.floor(this.z)),
      this
    );
  }
  ceil() {
    return (
      (this.x = Math.ceil(this.x)),
      (this.y = Math.ceil(this.y)),
      (this.z = Math.ceil(this.z)),
      this
    );
  }
  round() {
    return (
      (this.x = Math.round(this.x)),
      (this.y = Math.round(this.y)),
      (this.z = Math.round(this.z)),
      this
    );
  }
  roundToZero() {
    return (
      (this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x)),
      (this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y)),
      (this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z)),
      this
    );
  }
  negate() {
    return (this.x = -this.x), (this.y = -this.y), (this.z = -this.z), this;
  }
  dot(e) {
    return this.x * e.x + this.y * e.y + this.z * e.z;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y + this.z * this.z;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return (
      (this.x += (e.x - this.x) * t),
      (this.y += (e.y - this.y) * t),
      (this.z += (e.z - this.z) * t),
      this
    );
  }
  lerpVectors(e, t, n) {
    return (
      (this.x = e.x + (t.x - e.x) * n),
      (this.y = e.y + (t.y - e.y) * n),
      (this.z = e.z + (t.z - e.z) * n),
      this
    );
  }
  cross(e) {
    return this.crossVectors(this, e);
  }
  crossVectors(e, t) {
    const n = e.x,
      i = e.y,
      r = e.z,
      a = t.x,
      s = t.y,
      c = t.z;
    return (
      (this.x = i * c - r * s),
      (this.y = r * a - n * c),
      (this.z = n * s - i * a),
      this
    );
  }
  projectOnVector(e) {
    const t = e.lengthSq();
    if (t === 0) return this.set(0, 0, 0);
    const n = e.dot(this) / t;
    return this.copy(e).multiplyScalar(n);
  }
  projectOnPlane(e) {
    return Js.copy(this).projectOnVector(e), this.sub(Js);
  }
  reflect(e) {
    return this.sub(Js.copy(e).multiplyScalar(2 * this.dot(e)));
  }
  angleTo(e) {
    const t = Math.sqrt(this.lengthSq() * e.lengthSq());
    if (t === 0) return Math.PI / 2;
    const n = this.dot(e) / t;
    return Math.acos(Lt(n, -1, 1));
  }
  distanceTo(e) {
    return Math.sqrt(this.distanceToSquared(e));
  }
  distanceToSquared(e) {
    const t = this.x - e.x,
      n = this.y - e.y,
      i = this.z - e.z;
    return t * t + n * n + i * i;
  }
  manhattanDistanceTo(e) {
    return (
      Math.abs(this.x - e.x) + Math.abs(this.y - e.y) + Math.abs(this.z - e.z)
    );
  }
  setFromSpherical(e) {
    return this.setFromSphericalCoords(e.radius, e.phi, e.theta);
  }
  setFromSphericalCoords(e, t, n) {
    const i = Math.sin(t) * e;
    return (
      (this.x = i * Math.sin(n)),
      (this.y = Math.cos(t) * e),
      (this.z = i * Math.cos(n)),
      this
    );
  }
  setFromCylindrical(e) {
    return this.setFromCylindricalCoords(e.radius, e.theta, e.y);
  }
  setFromCylindricalCoords(e, t, n) {
    return (
      (this.x = e * Math.sin(t)), (this.y = n), (this.z = e * Math.cos(t)), this
    );
  }
  setFromMatrixPosition(e) {
    const t = e.elements;
    return (this.x = t[12]), (this.y = t[13]), (this.z = t[14]), this;
  }
  setFromMatrixScale(e) {
    const t = this.setFromMatrixColumn(e, 0).length(),
      n = this.setFromMatrixColumn(e, 1).length(),
      i = this.setFromMatrixColumn(e, 2).length();
    return (this.x = t), (this.y = n), (this.z = i), this;
  }
  setFromMatrixColumn(e, t) {
    return this.fromArray(e.elements, t * 4);
  }
  setFromMatrix3Column(e, t) {
    return this.fromArray(e.elements, t * 3);
  }
  setFromEuler(e) {
    return (this.x = e._x), (this.y = e._y), (this.z = e._z), this;
  }
  equals(e) {
    return e.x === this.x && e.y === this.y && e.z === this.z;
  }
  fromArray(e, t = 0) {
    return (this.x = e[t]), (this.y = e[t + 1]), (this.z = e[t + 2]), this;
  }
  toArray(e = [], t = 0) {
    return (e[t] = this.x), (e[t + 1] = this.y), (e[t + 2] = this.z), e;
  }
  fromBufferAttribute(e, t) {
    return (
      (this.x = e.getX(t)), (this.y = e.getY(t)), (this.z = e.getZ(t)), this
    );
  }
  random() {
    return (
      (this.x = Math.random()),
      (this.y = Math.random()),
      (this.z = Math.random()),
      this
    );
  }
  randomDirection() {
    const e = (Math.random() - 0.5) * 2,
      t = Math.random() * Math.PI * 2,
      n = Math.sqrt(1 - e ** 2);
    return (
      (this.x = n * Math.cos(t)), (this.y = n * Math.sin(t)), (this.z = e), this
    );
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z;
  }
}
const Js = new R(),
  al = new Fr();
class Or {
  constructor(
    e = new R(1 / 0, 1 / 0, 1 / 0),
    t = new R(-1 / 0, -1 / 0, -1 / 0)
  ) {
    (this.isBox3 = !0), (this.min = e), (this.max = t);
  }
  set(e, t) {
    return this.min.copy(e), this.max.copy(t), this;
  }
  setFromArray(e) {
    let t = 1 / 0,
      n = 1 / 0,
      i = 1 / 0,
      r = -1 / 0,
      a = -1 / 0,
      s = -1 / 0;
    for (let c = 0, l = e.length; c < l; c += 3) {
      const u = e[c],
        h = e[c + 1],
        f = e[c + 2];
      u < t && (t = u),
        h < n && (n = h),
        f < i && (i = f),
        u > r && (r = u),
        h > a && (a = h),
        f > s && (s = f);
    }
    return this.min.set(t, n, i), this.max.set(r, a, s), this;
  }
  setFromBufferAttribute(e) {
    let t = 1 / 0,
      n = 1 / 0,
      i = 1 / 0,
      r = -1 / 0,
      a = -1 / 0,
      s = -1 / 0;
    for (let c = 0, l = e.count; c < l; c++) {
      const u = e.getX(c),
        h = e.getY(c),
        f = e.getZ(c);
      u < t && (t = u),
        h < n && (n = h),
        f < i && (i = f),
        u > r && (r = u),
        h > a && (a = h),
        f > s && (s = f);
    }
    return this.min.set(t, n, i), this.max.set(r, a, s), this;
  }
  setFromPoints(e) {
    this.makeEmpty();
    for (let t = 0, n = e.length; t < n; t++) this.expandByPoint(e[t]);
    return this;
  }
  setFromCenterAndSize(e, t) {
    const n = Jn.copy(t).multiplyScalar(0.5);
    return this.min.copy(e).sub(n), this.max.copy(e).add(n), this;
  }
  setFromObject(e, t = !1) {
    return this.makeEmpty(), this.expandByObject(e, t);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return this.min.copy(e.min), this.max.copy(e.max), this;
  }
  makeEmpty() {
    return (
      (this.min.x = this.min.y = this.min.z = 1 / 0),
      (this.max.x = this.max.y = this.max.z = -1 / 0),
      this
    );
  }
  isEmpty() {
    return (
      this.max.x < this.min.x ||
      this.max.y < this.min.y ||
      this.max.z < this.min.z
    );
  }
  getCenter(e) {
    return this.isEmpty()
      ? e.set(0, 0, 0)
      : e.addVectors(this.min, this.max).multiplyScalar(0.5);
  }
  getSize(e) {
    return this.isEmpty() ? e.set(0, 0, 0) : e.subVectors(this.max, this.min);
  }
  expandByPoint(e) {
    return this.min.min(e), this.max.max(e), this;
  }
  expandByVector(e) {
    return this.min.sub(e), this.max.add(e), this;
  }
  expandByScalar(e) {
    return this.min.addScalar(-e), this.max.addScalar(e), this;
  }
  expandByObject(e, t = !1) {
    e.updateWorldMatrix(!1, !1);
    const n = e.geometry;
    if (n !== void 0)
      if (t && n.attributes != null && n.attributes.position !== void 0) {
        const r = n.attributes.position;
        for (let a = 0, s = r.count; a < s; a++)
          Jn.fromBufferAttribute(r, a).applyMatrix4(e.matrixWorld),
            this.expandByPoint(Jn);
      } else
        n.boundingBox === null && n.computeBoundingBox(),
          Qs.copy(n.boundingBox),
          Qs.applyMatrix4(e.matrixWorld),
          this.union(Qs);
    const i = e.children;
    for (let r = 0, a = i.length; r < a; r++) this.expandByObject(i[r], t);
    return this;
  }
  containsPoint(e) {
    return !(
      e.x < this.min.x ||
      e.x > this.max.x ||
      e.y < this.min.y ||
      e.y > this.max.y ||
      e.z < this.min.z ||
      e.z > this.max.z
    );
  }
  containsBox(e) {
    return (
      this.min.x <= e.min.x &&
      e.max.x <= this.max.x &&
      this.min.y <= e.min.y &&
      e.max.y <= this.max.y &&
      this.min.z <= e.min.z &&
      e.max.z <= this.max.z
    );
  }
  getParameter(e, t) {
    return t.set(
      (e.x - this.min.x) / (this.max.x - this.min.x),
      (e.y - this.min.y) / (this.max.y - this.min.y),
      (e.z - this.min.z) / (this.max.z - this.min.z)
    );
  }
  intersectsBox(e) {
    return !(
      e.max.x < this.min.x ||
      e.min.x > this.max.x ||
      e.max.y < this.min.y ||
      e.min.y > this.max.y ||
      e.max.z < this.min.z ||
      e.min.z > this.max.z
    );
  }
  intersectsSphere(e) {
    return (
      this.clampPoint(e.center, Jn),
      Jn.distanceToSquared(e.center) <= e.radius * e.radius
    );
  }
  intersectsPlane(e) {
    let t, n;
    return (
      e.normal.x > 0
        ? ((t = e.normal.x * this.min.x), (n = e.normal.x * this.max.x))
        : ((t = e.normal.x * this.max.x), (n = e.normal.x * this.min.x)),
      e.normal.y > 0
        ? ((t += e.normal.y * this.min.y), (n += e.normal.y * this.max.y))
        : ((t += e.normal.y * this.max.y), (n += e.normal.y * this.min.y)),
      e.normal.z > 0
        ? ((t += e.normal.z * this.min.z), (n += e.normal.z * this.max.z))
        : ((t += e.normal.z * this.max.z), (n += e.normal.z * this.min.z)),
      t <= -e.constant && n >= -e.constant
    );
  }
  intersectsTriangle(e) {
    if (this.isEmpty()) return !1;
    this.getCenter(fr),
      Xr.subVectors(this.max, fr),
      wi.subVectors(e.a, fr),
      Ti.subVectors(e.b, fr),
      Ei.subVectors(e.c, fr),
      zn.subVectors(Ti, wi),
      Fn.subVectors(Ei, Ti),
      Qn.subVectors(wi, Ei);
    let t = [
      0,
      -zn.z,
      zn.y,
      0,
      -Fn.z,
      Fn.y,
      0,
      -Qn.z,
      Qn.y,
      zn.z,
      0,
      -zn.x,
      Fn.z,
      0,
      -Fn.x,
      Qn.z,
      0,
      -Qn.x,
      -zn.y,
      zn.x,
      0,
      -Fn.y,
      Fn.x,
      0,
      -Qn.y,
      Qn.x,
      0,
    ];
    return !ea(t, wi, Ti, Ei, Xr) ||
      ((t = [1, 0, 0, 0, 1, 0, 0, 0, 1]), !ea(t, wi, Ti, Ei, Xr))
      ? !1
      : (Yr.crossVectors(zn, Fn),
        (t = [Yr.x, Yr.y, Yr.z]),
        ea(t, wi, Ti, Ei, Xr));
  }
  clampPoint(e, t) {
    return t.copy(e).clamp(this.min, this.max);
  }
  distanceToPoint(e) {
    return Jn.copy(e).clamp(this.min, this.max).sub(e).length();
  }
  getBoundingSphere(e) {
    return (
      this.getCenter(e.center), (e.radius = this.getSize(Jn).length() * 0.5), e
    );
  }
  intersect(e) {
    return (
      this.min.max(e.min),
      this.max.min(e.max),
      this.isEmpty() && this.makeEmpty(),
      this
    );
  }
  union(e) {
    return this.min.min(e.min), this.max.max(e.max), this;
  }
  applyMatrix4(e) {
    return this.isEmpty()
      ? this
      : (_n[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(e),
        _n[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(e),
        _n[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(e),
        _n[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(e),
        _n[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(e),
        _n[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(e),
        _n[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(e),
        _n[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(e),
        this.setFromPoints(_n),
        this);
  }
  translate(e) {
    return this.min.add(e), this.max.add(e), this;
  }
  equals(e) {
    return e.min.equals(this.min) && e.max.equals(this.max);
  }
}
const _n = [
    new R(),
    new R(),
    new R(),
    new R(),
    new R(),
    new R(),
    new R(),
    new R(),
  ],
  Jn = new R(),
  Qs = new Or(),
  wi = new R(),
  Ti = new R(),
  Ei = new R(),
  zn = new R(),
  Fn = new R(),
  Qn = new R(),
  fr = new R(),
  Xr = new R(),
  Yr = new R(),
  ei = new R();
function ea(o, e, t, n, i) {
  for (let r = 0, a = o.length - 3; r <= a; r += 3) {
    ei.fromArray(o, r);
    const s =
        i.x * Math.abs(ei.x) + i.y * Math.abs(ei.y) + i.z * Math.abs(ei.z),
      c = e.dot(ei),
      l = t.dot(ei),
      u = n.dot(ei);
    if (Math.max(-Math.max(c, l, u), Math.min(c, l, u)) > s) return !1;
  }
  return !0;
}
const $h = new Or(),
  ol = new R(),
  jr = new R(),
  ta = new R();
class Ur {
  constructor(e = new R(), t = -1) {
    (this.center = e), (this.radius = t);
  }
  set(e, t) {
    return this.center.copy(e), (this.radius = t), this;
  }
  setFromPoints(e, t) {
    const n = this.center;
    t !== void 0 ? n.copy(t) : $h.setFromPoints(e).getCenter(n);
    let i = 0;
    for (let r = 0, a = e.length; r < a; r++)
      i = Math.max(i, n.distanceToSquared(e[r]));
    return (this.radius = Math.sqrt(i)), this;
  }
  copy(e) {
    return this.center.copy(e.center), (this.radius = e.radius), this;
  }
  isEmpty() {
    return this.radius < 0;
  }
  makeEmpty() {
    return this.center.set(0, 0, 0), (this.radius = -1), this;
  }
  containsPoint(e) {
    return e.distanceToSquared(this.center) <= this.radius * this.radius;
  }
  distanceToPoint(e) {
    return e.distanceTo(this.center) - this.radius;
  }
  intersectsSphere(e) {
    const t = this.radius + e.radius;
    return e.center.distanceToSquared(this.center) <= t * t;
  }
  intersectsBox(e) {
    return e.intersectsSphere(this);
  }
  intersectsPlane(e) {
    return Math.abs(e.distanceToPoint(this.center)) <= this.radius;
  }
  clampPoint(e, t) {
    const n = this.center.distanceToSquared(e);
    return (
      t.copy(e),
      n > this.radius * this.radius &&
        (t.sub(this.center).normalize(),
        t.multiplyScalar(this.radius).add(this.center)),
      t
    );
  }
  getBoundingBox(e) {
    return this.isEmpty()
      ? (e.makeEmpty(), e)
      : (e.set(this.center, this.center), e.expandByScalar(this.radius), e);
  }
  applyMatrix4(e) {
    return (
      this.center.applyMatrix4(e),
      (this.radius = this.radius * e.getMaxScaleOnAxis()),
      this
    );
  }
  translate(e) {
    return this.center.add(e), this;
  }
  expandByPoint(e) {
    ta.subVectors(e, this.center);
    const t = ta.lengthSq();
    if (t > this.radius * this.radius) {
      const n = Math.sqrt(t),
        i = (n - this.radius) * 0.5;
      this.center.add(ta.multiplyScalar(i / n)), (this.radius += i);
    }
    return this;
  }
  union(e) {
    return (
      this.center.equals(e.center) === !0
        ? jr.set(0, 0, 1).multiplyScalar(e.radius)
        : jr
            .subVectors(e.center, this.center)
            .normalize()
            .multiplyScalar(e.radius),
      this.expandByPoint(ol.copy(e.center).add(jr)),
      this.expandByPoint(ol.copy(e.center).sub(jr)),
      this
    );
  }
  equals(e) {
    return e.center.equals(this.center) && e.radius === this.radius;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const xn = new R(),
  na = new R(),
  Zr = new R(),
  On = new R(),
  ia = new R(),
  $r = new R(),
  ra = new R();
class io {
  constructor(e = new R(), t = new R(0, 0, -1)) {
    (this.origin = e), (this.direction = t);
  }
  set(e, t) {
    return this.origin.copy(e), this.direction.copy(t), this;
  }
  copy(e) {
    return this.origin.copy(e.origin), this.direction.copy(e.direction), this;
  }
  at(e, t) {
    return t.copy(this.direction).multiplyScalar(e).add(this.origin);
  }
  lookAt(e) {
    return this.direction.copy(e).sub(this.origin).normalize(), this;
  }
  recast(e) {
    return this.origin.copy(this.at(e, xn)), this;
  }
  closestPointToPoint(e, t) {
    t.subVectors(e, this.origin);
    const n = t.dot(this.direction);
    return n < 0
      ? t.copy(this.origin)
      : t.copy(this.direction).multiplyScalar(n).add(this.origin);
  }
  distanceToPoint(e) {
    return Math.sqrt(this.distanceSqToPoint(e));
  }
  distanceSqToPoint(e) {
    const t = xn.subVectors(e, this.origin).dot(this.direction);
    return t < 0
      ? this.origin.distanceToSquared(e)
      : (xn.copy(this.direction).multiplyScalar(t).add(this.origin),
        xn.distanceToSquared(e));
  }
  distanceSqToSegment(e, t, n, i) {
    na.copy(e).add(t).multiplyScalar(0.5),
      Zr.copy(t).sub(e).normalize(),
      On.copy(this.origin).sub(na);
    const r = e.distanceTo(t) * 0.5,
      a = -this.direction.dot(Zr),
      s = On.dot(this.direction),
      c = -On.dot(Zr),
      l = On.lengthSq(),
      u = Math.abs(1 - a * a);
    let h, f, m, g;
    if (u > 0)
      if (((h = a * c - s), (f = a * s - c), (g = r * u), h >= 0))
        if (f >= -g)
          if (f <= g) {
            const d = 1 / u;
            (h *= d),
              (f *= d),
              (m = h * (h + a * f + 2 * s) + f * (a * h + f + 2 * c) + l);
          } else
            (f = r),
              (h = Math.max(0, -(a * f + s))),
              (m = -h * h + f * (f + 2 * c) + l);
        else
          (f = -r),
            (h = Math.max(0, -(a * f + s))),
            (m = -h * h + f * (f + 2 * c) + l);
      else
        f <= -g
          ? ((h = Math.max(0, -(-a * r + s))),
            (f = h > 0 ? -r : Math.min(Math.max(-r, -c), r)),
            (m = -h * h + f * (f + 2 * c) + l))
          : f <= g
          ? ((h = 0),
            (f = Math.min(Math.max(-r, -c), r)),
            (m = f * (f + 2 * c) + l))
          : ((h = Math.max(0, -(a * r + s))),
            (f = h > 0 ? r : Math.min(Math.max(-r, -c), r)),
            (m = -h * h + f * (f + 2 * c) + l));
    else
      (f = a > 0 ? -r : r),
        (h = Math.max(0, -(a * f + s))),
        (m = -h * h + f * (f + 2 * c) + l);
    return (
      n && n.copy(this.direction).multiplyScalar(h).add(this.origin),
      i && i.copy(Zr).multiplyScalar(f).add(na),
      m
    );
  }
  intersectSphere(e, t) {
    xn.subVectors(e.center, this.origin);
    const n = xn.dot(this.direction),
      i = xn.dot(xn) - n * n,
      r = e.radius * e.radius;
    if (i > r) return null;
    const a = Math.sqrt(r - i),
      s = n - a,
      c = n + a;
    return s < 0 && c < 0 ? null : s < 0 ? this.at(c, t) : this.at(s, t);
  }
  intersectsSphere(e) {
    return this.distanceSqToPoint(e.center) <= e.radius * e.radius;
  }
  distanceToPlane(e) {
    const t = e.normal.dot(this.direction);
    if (t === 0) return e.distanceToPoint(this.origin) === 0 ? 0 : null;
    const n = -(this.origin.dot(e.normal) + e.constant) / t;
    return n >= 0 ? n : null;
  }
  intersectPlane(e, t) {
    const n = this.distanceToPlane(e);
    return n === null ? null : this.at(n, t);
  }
  intersectsPlane(e) {
    const t = e.distanceToPoint(this.origin);
    return t === 0 || e.normal.dot(this.direction) * t < 0;
  }
  intersectBox(e, t) {
    let n, i, r, a, s, c;
    const l = 1 / this.direction.x,
      u = 1 / this.direction.y,
      h = 1 / this.direction.z,
      f = this.origin;
    return (
      l >= 0
        ? ((n = (e.min.x - f.x) * l), (i = (e.max.x - f.x) * l))
        : ((n = (e.max.x - f.x) * l), (i = (e.min.x - f.x) * l)),
      u >= 0
        ? ((r = (e.min.y - f.y) * u), (a = (e.max.y - f.y) * u))
        : ((r = (e.max.y - f.y) * u), (a = (e.min.y - f.y) * u)),
      n > a ||
      r > i ||
      ((r > n || n !== n) && (n = r),
      (a < i || i !== i) && (i = a),
      h >= 0
        ? ((s = (e.min.z - f.z) * h), (c = (e.max.z - f.z) * h))
        : ((s = (e.max.z - f.z) * h), (c = (e.min.z - f.z) * h)),
      n > c || s > i) ||
      ((s > n || n !== n) && (n = s), (c < i || i !== i) && (i = c), i < 0)
        ? null
        : this.at(n >= 0 ? n : i, t)
    );
  }
  intersectsBox(e) {
    return this.intersectBox(e, xn) !== null;
  }
  intersectTriangle(e, t, n, i, r) {
    ia.subVectors(t, e), $r.subVectors(n, e), ra.crossVectors(ia, $r);
    let a = this.direction.dot(ra),
      s;
    if (a > 0) {
      if (i) return null;
      s = 1;
    } else if (a < 0) (s = -1), (a = -a);
    else return null;
    On.subVectors(this.origin, e);
    const c = s * this.direction.dot($r.crossVectors(On, $r));
    if (c < 0) return null;
    const l = s * this.direction.dot(ia.cross(On));
    if (l < 0 || c + l > a) return null;
    const u = -s * On.dot(ra);
    return u < 0 ? null : this.at(u / a, r);
  }
  applyMatrix4(e) {
    return (
      this.origin.applyMatrix4(e), this.direction.transformDirection(e), this
    );
  }
  equals(e) {
    return e.origin.equals(this.origin) && e.direction.equals(this.direction);
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
class Qe {
  constructor() {
    (Qe.prototype.isMatrix4 = !0),
      (this.elements = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]);
  }
  set(e, t, n, i, r, a, s, c, l, u, h, f, m, g, d, p) {
    const _ = this.elements;
    return (
      (_[0] = e),
      (_[4] = t),
      (_[8] = n),
      (_[12] = i),
      (_[1] = r),
      (_[5] = a),
      (_[9] = s),
      (_[13] = c),
      (_[2] = l),
      (_[6] = u),
      (_[10] = h),
      (_[14] = f),
      (_[3] = m),
      (_[7] = g),
      (_[11] = d),
      (_[15] = p),
      this
    );
  }
  identity() {
    return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
  }
  clone() {
    return new Qe().fromArray(this.elements);
  }
  copy(e) {
    const t = this.elements,
      n = e.elements;
    return (
      (t[0] = n[0]),
      (t[1] = n[1]),
      (t[2] = n[2]),
      (t[3] = n[3]),
      (t[4] = n[4]),
      (t[5] = n[5]),
      (t[6] = n[6]),
      (t[7] = n[7]),
      (t[8] = n[8]),
      (t[9] = n[9]),
      (t[10] = n[10]),
      (t[11] = n[11]),
      (t[12] = n[12]),
      (t[13] = n[13]),
      (t[14] = n[14]),
      (t[15] = n[15]),
      this
    );
  }
  copyPosition(e) {
    const t = this.elements,
      n = e.elements;
    return (t[12] = n[12]), (t[13] = n[13]), (t[14] = n[14]), this;
  }
  setFromMatrix3(e) {
    const t = e.elements;
    return (
      this.set(
        t[0],
        t[3],
        t[6],
        0,
        t[1],
        t[4],
        t[7],
        0,
        t[2],
        t[5],
        t[8],
        0,
        0,
        0,
        0,
        1
      ),
      this
    );
  }
  extractBasis(e, t, n) {
    return (
      e.setFromMatrixColumn(this, 0),
      t.setFromMatrixColumn(this, 1),
      n.setFromMatrixColumn(this, 2),
      this
    );
  }
  makeBasis(e, t, n) {
    return (
      this.set(
        e.x,
        t.x,
        n.x,
        0,
        e.y,
        t.y,
        n.y,
        0,
        e.z,
        t.z,
        n.z,
        0,
        0,
        0,
        0,
        1
      ),
      this
    );
  }
  extractRotation(e) {
    const t = this.elements,
      n = e.elements,
      i = 1 / Ci.setFromMatrixColumn(e, 0).length(),
      r = 1 / Ci.setFromMatrixColumn(e, 1).length(),
      a = 1 / Ci.setFromMatrixColumn(e, 2).length();
    return (
      (t[0] = n[0] * i),
      (t[1] = n[1] * i),
      (t[2] = n[2] * i),
      (t[3] = 0),
      (t[4] = n[4] * r),
      (t[5] = n[5] * r),
      (t[6] = n[6] * r),
      (t[7] = 0),
      (t[8] = n[8] * a),
      (t[9] = n[9] * a),
      (t[10] = n[10] * a),
      (t[11] = 0),
      (t[12] = 0),
      (t[13] = 0),
      (t[14] = 0),
      (t[15] = 1),
      this
    );
  }
  makeRotationFromEuler(e) {
    const t = this.elements,
      n = e.x,
      i = e.y,
      r = e.z,
      a = Math.cos(n),
      s = Math.sin(n),
      c = Math.cos(i),
      l = Math.sin(i),
      u = Math.cos(r),
      h = Math.sin(r);
    if (e.order === "XYZ") {
      const f = a * u,
        m = a * h,
        g = s * u,
        d = s * h;
      (t[0] = c * u),
        (t[4] = -c * h),
        (t[8] = l),
        (t[1] = m + g * l),
        (t[5] = f - d * l),
        (t[9] = -s * c),
        (t[2] = d - f * l),
        (t[6] = g + m * l),
        (t[10] = a * c);
    } else if (e.order === "YXZ") {
      const f = c * u,
        m = c * h,
        g = l * u,
        d = l * h;
      (t[0] = f + d * s),
        (t[4] = g * s - m),
        (t[8] = a * l),
        (t[1] = a * h),
        (t[5] = a * u),
        (t[9] = -s),
        (t[2] = m * s - g),
        (t[6] = d + f * s),
        (t[10] = a * c);
    } else if (e.order === "ZXY") {
      const f = c * u,
        m = c * h,
        g = l * u,
        d = l * h;
      (t[0] = f - d * s),
        (t[4] = -a * h),
        (t[8] = g + m * s),
        (t[1] = m + g * s),
        (t[5] = a * u),
        (t[9] = d - f * s),
        (t[2] = -a * l),
        (t[6] = s),
        (t[10] = a * c);
    } else if (e.order === "ZYX") {
      const f = a * u,
        m = a * h,
        g = s * u,
        d = s * h;
      (t[0] = c * u),
        (t[4] = g * l - m),
        (t[8] = f * l + d),
        (t[1] = c * h),
        (t[5] = d * l + f),
        (t[9] = m * l - g),
        (t[2] = -l),
        (t[6] = s * c),
        (t[10] = a * c);
    } else if (e.order === "YZX") {
      const f = a * c,
        m = a * l,
        g = s * c,
        d = s * l;
      (t[0] = c * u),
        (t[4] = d - f * h),
        (t[8] = g * h + m),
        (t[1] = h),
        (t[5] = a * u),
        (t[9] = -s * u),
        (t[2] = -l * u),
        (t[6] = m * h + g),
        (t[10] = f - d * h);
    } else if (e.order === "XZY") {
      const f = a * c,
        m = a * l,
        g = s * c,
        d = s * l;
      (t[0] = c * u),
        (t[4] = -h),
        (t[8] = l * u),
        (t[1] = f * h + d),
        (t[5] = a * u),
        (t[9] = m * h - g),
        (t[2] = g * h - m),
        (t[6] = s * u),
        (t[10] = d * h + f);
    }
    return (
      (t[3] = 0),
      (t[7] = 0),
      (t[11] = 0),
      (t[12] = 0),
      (t[13] = 0),
      (t[14] = 0),
      (t[15] = 1),
      this
    );
  }
  makeRotationFromQuaternion(e) {
    return this.compose(Kh, e, Jh);
  }
  lookAt(e, t, n) {
    const i = this.elements;
    return (
      Ct.subVectors(e, t),
      Ct.lengthSq() === 0 && (Ct.z = 1),
      Ct.normalize(),
      Un.crossVectors(n, Ct),
      Un.lengthSq() === 0 &&
        (Math.abs(n.z) === 1 ? (Ct.x += 1e-4) : (Ct.z += 1e-4),
        Ct.normalize(),
        Un.crossVectors(n, Ct)),
      Un.normalize(),
      Kr.crossVectors(Ct, Un),
      (i[0] = Un.x),
      (i[4] = Kr.x),
      (i[8] = Ct.x),
      (i[1] = Un.y),
      (i[5] = Kr.y),
      (i[9] = Ct.y),
      (i[2] = Un.z),
      (i[6] = Kr.z),
      (i[10] = Ct.z),
      this
    );
  }
  multiply(e) {
    return this.multiplyMatrices(this, e);
  }
  premultiply(e) {
    return this.multiplyMatrices(e, this);
  }
  multiplyMatrices(e, t) {
    const n = e.elements,
      i = t.elements,
      r = this.elements,
      a = n[0],
      s = n[4],
      c = n[8],
      l = n[12],
      u = n[1],
      h = n[5],
      f = n[9],
      m = n[13],
      g = n[2],
      d = n[6],
      p = n[10],
      _ = n[14],
      v = n[3],
      S = n[7],
      M = n[11],
      y = n[15],
      E = i[0],
      A = i[4],
      x = i[8],
      w = i[12],
      P = i[1],
      W = i[5],
      K = i[9],
      O = i[13],
      D = i[2],
      B = i[6],
      Y = i[10],
      X = i[14],
      k = i[3],
      z = i[7],
      U = i[11],
      J = i[15];
    return (
      (r[0] = a * E + s * P + c * D + l * k),
      (r[4] = a * A + s * W + c * B + l * z),
      (r[8] = a * x + s * K + c * Y + l * U),
      (r[12] = a * w + s * O + c * X + l * J),
      (r[1] = u * E + h * P + f * D + m * k),
      (r[5] = u * A + h * W + f * B + m * z),
      (r[9] = u * x + h * K + f * Y + m * U),
      (r[13] = u * w + h * O + f * X + m * J),
      (r[2] = g * E + d * P + p * D + _ * k),
      (r[6] = g * A + d * W + p * B + _ * z),
      (r[10] = g * x + d * K + p * Y + _ * U),
      (r[14] = g * w + d * O + p * X + _ * J),
      (r[3] = v * E + S * P + M * D + y * k),
      (r[7] = v * A + S * W + M * B + y * z),
      (r[11] = v * x + S * K + M * Y + y * U),
      (r[15] = v * w + S * O + M * X + y * J),
      this
    );
  }
  multiplyScalar(e) {
    const t = this.elements;
    return (
      (t[0] *= e),
      (t[4] *= e),
      (t[8] *= e),
      (t[12] *= e),
      (t[1] *= e),
      (t[5] *= e),
      (t[9] *= e),
      (t[13] *= e),
      (t[2] *= e),
      (t[6] *= e),
      (t[10] *= e),
      (t[14] *= e),
      (t[3] *= e),
      (t[7] *= e),
      (t[11] *= e),
      (t[15] *= e),
      this
    );
  }
  determinant() {
    const e = this.elements,
      t = e[0],
      n = e[4],
      i = e[8],
      r = e[12],
      a = e[1],
      s = e[5],
      c = e[9],
      l = e[13],
      u = e[2],
      h = e[6],
      f = e[10],
      m = e[14],
      g = e[3],
      d = e[7],
      p = e[11],
      _ = e[15];
    return (
      g *
        (+r * c * h -
          i * l * h -
          r * s * f +
          n * l * f +
          i * s * m -
          n * c * m) +
      d *
        (+t * c * m -
          t * l * f +
          r * a * f -
          i * a * m +
          i * l * u -
          r * c * u) +
      p *
        (+t * l * h -
          t * s * m -
          r * a * h +
          n * a * m +
          r * s * u -
          n * l * u) +
      _ *
        (-i * s * u - t * c * h + t * s * f + i * a * h - n * a * f + n * c * u)
    );
  }
  transpose() {
    const e = this.elements;
    let t;
    return (
      (t = e[1]),
      (e[1] = e[4]),
      (e[4] = t),
      (t = e[2]),
      (e[2] = e[8]),
      (e[8] = t),
      (t = e[6]),
      (e[6] = e[9]),
      (e[9] = t),
      (t = e[3]),
      (e[3] = e[12]),
      (e[12] = t),
      (t = e[7]),
      (e[7] = e[13]),
      (e[13] = t),
      (t = e[11]),
      (e[11] = e[14]),
      (e[14] = t),
      this
    );
  }
  setPosition(e, t, n) {
    const i = this.elements;
    return (
      e.isVector3
        ? ((i[12] = e.x), (i[13] = e.y), (i[14] = e.z))
        : ((i[12] = e), (i[13] = t), (i[14] = n)),
      this
    );
  }
  invert() {
    const e = this.elements,
      t = e[0],
      n = e[1],
      i = e[2],
      r = e[3],
      a = e[4],
      s = e[5],
      c = e[6],
      l = e[7],
      u = e[8],
      h = e[9],
      f = e[10],
      m = e[11],
      g = e[12],
      d = e[13],
      p = e[14],
      _ = e[15],
      v = h * p * l - d * f * l + d * c * m - s * p * m - h * c * _ + s * f * _,
      S = g * f * l - u * p * l - g * c * m + a * p * m + u * c * _ - a * f * _,
      M = u * d * l - g * h * l + g * s * m - a * d * m - u * s * _ + a * h * _,
      y = g * h * c - u * d * c - g * s * f + a * d * f + u * s * p - a * h * p,
      E = t * v + n * S + i * M + r * y;
    if (E === 0)
      return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    const A = 1 / E;
    return (
      (e[0] = v * A),
      (e[1] =
        (d * f * r -
          h * p * r -
          d * i * m +
          n * p * m +
          h * i * _ -
          n * f * _) *
        A),
      (e[2] =
        (s * p * r -
          d * c * r +
          d * i * l -
          n * p * l -
          s * i * _ +
          n * c * _) *
        A),
      (e[3] =
        (h * c * r -
          s * f * r -
          h * i * l +
          n * f * l +
          s * i * m -
          n * c * m) *
        A),
      (e[4] = S * A),
      (e[5] =
        (u * p * r -
          g * f * r +
          g * i * m -
          t * p * m -
          u * i * _ +
          t * f * _) *
        A),
      (e[6] =
        (g * c * r -
          a * p * r -
          g * i * l +
          t * p * l +
          a * i * _ -
          t * c * _) *
        A),
      (e[7] =
        (a * f * r -
          u * c * r +
          u * i * l -
          t * f * l -
          a * i * m +
          t * c * m) *
        A),
      (e[8] = M * A),
      (e[9] =
        (g * h * r -
          u * d * r -
          g * n * m +
          t * d * m +
          u * n * _ -
          t * h * _) *
        A),
      (e[10] =
        (a * d * r -
          g * s * r +
          g * n * l -
          t * d * l -
          a * n * _ +
          t * s * _) *
        A),
      (e[11] =
        (u * s * r -
          a * h * r -
          u * n * l +
          t * h * l +
          a * n * m -
          t * s * m) *
        A),
      (e[12] = y * A),
      (e[13] =
        (u * d * i -
          g * h * i +
          g * n * f -
          t * d * f -
          u * n * p +
          t * h * p) *
        A),
      (e[14] =
        (g * s * i -
          a * d * i -
          g * n * c +
          t * d * c +
          a * n * p -
          t * s * p) *
        A),
      (e[15] =
        (a * h * i -
          u * s * i +
          u * n * c -
          t * h * c -
          a * n * f +
          t * s * f) *
        A),
      this
    );
  }
  scale(e) {
    const t = this.elements,
      n = e.x,
      i = e.y,
      r = e.z;
    return (
      (t[0] *= n),
      (t[4] *= i),
      (t[8] *= r),
      (t[1] *= n),
      (t[5] *= i),
      (t[9] *= r),
      (t[2] *= n),
      (t[6] *= i),
      (t[10] *= r),
      (t[3] *= n),
      (t[7] *= i),
      (t[11] *= r),
      this
    );
  }
  getMaxScaleOnAxis() {
    const e = this.elements,
      t = e[0] * e[0] + e[1] * e[1] + e[2] * e[2],
      n = e[4] * e[4] + e[5] * e[5] + e[6] * e[6],
      i = e[8] * e[8] + e[9] * e[9] + e[10] * e[10];
    return Math.sqrt(Math.max(t, n, i));
  }
  makeTranslation(e, t, n) {
    return this.set(1, 0, 0, e, 0, 1, 0, t, 0, 0, 1, n, 0, 0, 0, 1), this;
  }
  makeRotationX(e) {
    const t = Math.cos(e),
      n = Math.sin(e);
    return this.set(1, 0, 0, 0, 0, t, -n, 0, 0, n, t, 0, 0, 0, 0, 1), this;
  }
  makeRotationY(e) {
    const t = Math.cos(e),
      n = Math.sin(e);
    return this.set(t, 0, n, 0, 0, 1, 0, 0, -n, 0, t, 0, 0, 0, 0, 1), this;
  }
  makeRotationZ(e) {
    const t = Math.cos(e),
      n = Math.sin(e);
    return this.set(t, -n, 0, 0, n, t, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
  }
  makeRotationAxis(e, t) {
    const n = Math.cos(t),
      i = Math.sin(t),
      r = 1 - n,
      a = e.x,
      s = e.y,
      c = e.z,
      l = r * a,
      u = r * s;
    return (
      this.set(
        l * a + n,
        l * s - i * c,
        l * c + i * s,
        0,
        l * s + i * c,
        u * s + n,
        u * c - i * a,
        0,
        l * c - i * s,
        u * c + i * a,
        r * c * c + n,
        0,
        0,
        0,
        0,
        1
      ),
      this
    );
  }
  makeScale(e, t, n) {
    return this.set(e, 0, 0, 0, 0, t, 0, 0, 0, 0, n, 0, 0, 0, 0, 1), this;
  }
  makeShear(e, t, n, i, r, a) {
    return this.set(1, n, r, 0, e, 1, a, 0, t, i, 1, 0, 0, 0, 0, 1), this;
  }
  compose(e, t, n) {
    const i = this.elements,
      r = t._x,
      a = t._y,
      s = t._z,
      c = t._w,
      l = r + r,
      u = a + a,
      h = s + s,
      f = r * l,
      m = r * u,
      g = r * h,
      d = a * u,
      p = a * h,
      _ = s * h,
      v = c * l,
      S = c * u,
      M = c * h,
      y = n.x,
      E = n.y,
      A = n.z;
    return (
      (i[0] = (1 - (d + _)) * y),
      (i[1] = (m + M) * y),
      (i[2] = (g - S) * y),
      (i[3] = 0),
      (i[4] = (m - M) * E),
      (i[5] = (1 - (f + _)) * E),
      (i[6] = (p + v) * E),
      (i[7] = 0),
      (i[8] = (g + S) * A),
      (i[9] = (p - v) * A),
      (i[10] = (1 - (f + d)) * A),
      (i[11] = 0),
      (i[12] = e.x),
      (i[13] = e.y),
      (i[14] = e.z),
      (i[15] = 1),
      this
    );
  }
  decompose(e, t, n) {
    const i = this.elements;
    let r = Ci.set(i[0], i[1], i[2]).length();
    const a = Ci.set(i[4], i[5], i[6]).length(),
      s = Ci.set(i[8], i[9], i[10]).length();
    this.determinant() < 0 && (r = -r),
      (e.x = i[12]),
      (e.y = i[13]),
      (e.z = i[14]),
      Qt.copy(this);
    const l = 1 / r,
      u = 1 / a,
      h = 1 / s;
    return (
      (Qt.elements[0] *= l),
      (Qt.elements[1] *= l),
      (Qt.elements[2] *= l),
      (Qt.elements[4] *= u),
      (Qt.elements[5] *= u),
      (Qt.elements[6] *= u),
      (Qt.elements[8] *= h),
      (Qt.elements[9] *= h),
      (Qt.elements[10] *= h),
      t.setFromRotationMatrix(Qt),
      (n.x = r),
      (n.y = a),
      (n.z = s),
      this
    );
  }
  makePerspective(e, t, n, i, r, a) {
    const s = this.elements,
      c = (2 * r) / (t - e),
      l = (2 * r) / (n - i),
      u = (t + e) / (t - e),
      h = (n + i) / (n - i),
      f = -(a + r) / (a - r),
      m = (-2 * a * r) / (a - r);
    return (
      (s[0] = c),
      (s[4] = 0),
      (s[8] = u),
      (s[12] = 0),
      (s[1] = 0),
      (s[5] = l),
      (s[9] = h),
      (s[13] = 0),
      (s[2] = 0),
      (s[6] = 0),
      (s[10] = f),
      (s[14] = m),
      (s[3] = 0),
      (s[7] = 0),
      (s[11] = -1),
      (s[15] = 0),
      this
    );
  }
  makeOrthographic(e, t, n, i, r, a) {
    const s = this.elements,
      c = 1 / (t - e),
      l = 1 / (n - i),
      u = 1 / (a - r),
      h = (t + e) * c,
      f = (n + i) * l,
      m = (a + r) * u;
    return (
      (s[0] = 2 * c),
      (s[4] = 0),
      (s[8] = 0),
      (s[12] = -h),
      (s[1] = 0),
      (s[5] = 2 * l),
      (s[9] = 0),
      (s[13] = -f),
      (s[2] = 0),
      (s[6] = 0),
      (s[10] = -2 * u),
      (s[14] = -m),
      (s[3] = 0),
      (s[7] = 0),
      (s[11] = 0),
      (s[15] = 1),
      this
    );
  }
  equals(e) {
    const t = this.elements,
      n = e.elements;
    for (let i = 0; i < 16; i++) if (t[i] !== n[i]) return !1;
    return !0;
  }
  fromArray(e, t = 0) {
    for (let n = 0; n < 16; n++) this.elements[n] = e[n + t];
    return this;
  }
  toArray(e = [], t = 0) {
    const n = this.elements;
    return (
      (e[t] = n[0]),
      (e[t + 1] = n[1]),
      (e[t + 2] = n[2]),
      (e[t + 3] = n[3]),
      (e[t + 4] = n[4]),
      (e[t + 5] = n[5]),
      (e[t + 6] = n[6]),
      (e[t + 7] = n[7]),
      (e[t + 8] = n[8]),
      (e[t + 9] = n[9]),
      (e[t + 10] = n[10]),
      (e[t + 11] = n[11]),
      (e[t + 12] = n[12]),
      (e[t + 13] = n[13]),
      (e[t + 14] = n[14]),
      (e[t + 15] = n[15]),
      e
    );
  }
}
const Ci = new R(),
  Qt = new Qe(),
  Kh = new R(0, 0, 0),
  Jh = new R(1, 1, 1),
  Un = new R(),
  Kr = new R(),
  Ct = new R(),
  ll = new Qe(),
  cl = new Fr();
class Nr {
  constructor(e = 0, t = 0, n = 0, i = Nr.DefaultOrder) {
    (this.isEuler = !0),
      (this._x = e),
      (this._y = t),
      (this._z = n),
      (this._order = i);
  }
  get x() {
    return this._x;
  }
  set x(e) {
    (this._x = e), this._onChangeCallback();
  }
  get y() {
    return this._y;
  }
  set y(e) {
    (this._y = e), this._onChangeCallback();
  }
  get z() {
    return this._z;
  }
  set z(e) {
    (this._z = e), this._onChangeCallback();
  }
  get order() {
    return this._order;
  }
  set order(e) {
    (this._order = e), this._onChangeCallback();
  }
  set(e, t, n, i = this._order) {
    return (
      (this._x = e),
      (this._y = t),
      (this._z = n),
      (this._order = i),
      this._onChangeCallback(),
      this
    );
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._order);
  }
  copy(e) {
    return (
      (this._x = e._x),
      (this._y = e._y),
      (this._z = e._z),
      (this._order = e._order),
      this._onChangeCallback(),
      this
    );
  }
  setFromRotationMatrix(e, t = this._order, n = !0) {
    const i = e.elements,
      r = i[0],
      a = i[4],
      s = i[8],
      c = i[1],
      l = i[5],
      u = i[9],
      h = i[2],
      f = i[6],
      m = i[10];
    switch (t) {
      case "XYZ":
        (this._y = Math.asin(Lt(s, -1, 1))),
          Math.abs(s) < 0.9999999
            ? ((this._x = Math.atan2(-u, m)), (this._z = Math.atan2(-a, r)))
            : ((this._x = Math.atan2(f, l)), (this._z = 0));
        break;
      case "YXZ":
        (this._x = Math.asin(-Lt(u, -1, 1))),
          Math.abs(u) < 0.9999999
            ? ((this._y = Math.atan2(s, m)), (this._z = Math.atan2(c, l)))
            : ((this._y = Math.atan2(-h, r)), (this._z = 0));
        break;
      case "ZXY":
        (this._x = Math.asin(Lt(f, -1, 1))),
          Math.abs(f) < 0.9999999
            ? ((this._y = Math.atan2(-h, m)), (this._z = Math.atan2(-a, l)))
            : ((this._y = 0), (this._z = Math.atan2(c, r)));
        break;
      case "ZYX":
        (this._y = Math.asin(-Lt(h, -1, 1))),
          Math.abs(h) < 0.9999999
            ? ((this._x = Math.atan2(f, m)), (this._z = Math.atan2(c, r)))
            : ((this._x = 0), (this._z = Math.atan2(-a, l)));
        break;
      case "YZX":
        (this._z = Math.asin(Lt(c, -1, 1))),
          Math.abs(c) < 0.9999999
            ? ((this._x = Math.atan2(-u, l)), (this._y = Math.atan2(-h, r)))
            : ((this._x = 0), (this._y = Math.atan2(s, m)));
        break;
      case "XZY":
        (this._z = Math.asin(-Lt(a, -1, 1))),
          Math.abs(a) < 0.9999999
            ? ((this._x = Math.atan2(f, l)), (this._y = Math.atan2(s, r)))
            : ((this._x = Math.atan2(-u, m)), (this._y = 0));
        break;
      default:
        console.warn(
          "THREE.Euler: .setFromRotationMatrix() encountered an unknown order: " +
            t
        );
    }
    return (this._order = t), n === !0 && this._onChangeCallback(), this;
  }
  setFromQuaternion(e, t, n) {
    return (
      ll.makeRotationFromQuaternion(e), this.setFromRotationMatrix(ll, t, n)
    );
  }
  setFromVector3(e, t = this._order) {
    return this.set(e.x, e.y, e.z, t);
  }
  reorder(e) {
    return cl.setFromEuler(this), this.setFromQuaternion(cl, e);
  }
  equals(e) {
    return (
      e._x === this._x &&
      e._y === this._y &&
      e._z === this._z &&
      e._order === this._order
    );
  }
  fromArray(e) {
    return (
      (this._x = e[0]),
      (this._y = e[1]),
      (this._z = e[2]),
      e[3] !== void 0 && (this._order = e[3]),
      this._onChangeCallback(),
      this
    );
  }
  toArray(e = [], t = 0) {
    return (
      (e[t] = this._x),
      (e[t + 1] = this._y),
      (e[t + 2] = this._z),
      (e[t + 3] = this._order),
      e
    );
  }
  _onChange(e) {
    return (this._onChangeCallback = e), this;
  }
  _onChangeCallback() {}
  *[Symbol.iterator]() {
    yield this._x, yield this._y, yield this._z, yield this._order;
  }
  toVector3() {
    console.error(
      "THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead"
    );
  }
}
Nr.DefaultOrder = "XYZ";
Nr.RotationOrders = ["XYZ", "YZX", "ZXY", "XZY", "YXZ", "ZYX"];
class Ec {
  constructor() {
    this.mask = 1;
  }
  set(e) {
    this.mask = ((1 << e) | 0) >>> 0;
  }
  enable(e) {
    this.mask |= (1 << e) | 0;
  }
  enableAll() {
    this.mask = -1;
  }
  toggle(e) {
    this.mask ^= (1 << e) | 0;
  }
  disable(e) {
    this.mask &= ~((1 << e) | 0);
  }
  disableAll() {
    this.mask = 0;
  }
  test(e) {
    return (this.mask & e.mask) !== 0;
  }
  isEnabled(e) {
    return (this.mask & ((1 << e) | 0)) !== 0;
  }
}
let Qh = 0;
const ul = new R(),
  Ai = new Fr(),
  vn = new Qe(),
  Jr = new R(),
  dr = new R(),
  ef = new R(),
  tf = new Fr(),
  hl = new R(1, 0, 0),
  fl = new R(0, 1, 0),
  dl = new R(0, 0, 1),
  nf = { type: "added" },
  pl = { type: "removed" };
class pt extends or {
  constructor() {
    super(),
      (this.isObject3D = !0),
      Object.defineProperty(this, "id", { value: Qh++ }),
      (this.uuid = zr()),
      (this.name = ""),
      (this.type = "Object3D"),
      (this.parent = null),
      (this.children = []),
      (this.up = pt.DefaultUp.clone());
    const e = new R(),
      t = new Nr(),
      n = new Fr(),
      i = new R(1, 1, 1);
    function r() {
      n.setFromEuler(t, !1);
    }
    function a() {
      t.setFromQuaternion(n, void 0, !1);
    }
    t._onChange(r),
      n._onChange(a),
      Object.defineProperties(this, {
        position: { configurable: !0, enumerable: !0, value: e },
        rotation: { configurable: !0, enumerable: !0, value: t },
        quaternion: { configurable: !0, enumerable: !0, value: n },
        scale: { configurable: !0, enumerable: !0, value: i },
        modelViewMatrix: { value: new Qe() },
        normalMatrix: { value: new Gt() },
      }),
      (this.matrix = new Qe()),
      (this.matrixWorld = new Qe()),
      (this.matrixAutoUpdate = pt.DefaultMatrixAutoUpdate),
      (this.matrixWorldNeedsUpdate = !1),
      (this.matrixWorldAutoUpdate = pt.DefaultMatrixWorldAutoUpdate),
      (this.layers = new Ec()),
      (this.visible = !0),
      (this.castShadow = !1),
      (this.receiveShadow = !1),
      (this.frustumCulled = !0),
      (this.renderOrder = 0),
      (this.animations = []),
      (this.userData = {});
  }
  onBeforeRender() {}
  onAfterRender() {}
  applyMatrix4(e) {
    this.matrixAutoUpdate && this.updateMatrix(),
      this.matrix.premultiply(e),
      this.matrix.decompose(this.position, this.quaternion, this.scale);
  }
  applyQuaternion(e) {
    return this.quaternion.premultiply(e), this;
  }
  setRotationFromAxisAngle(e, t) {
    this.quaternion.setFromAxisAngle(e, t);
  }
  setRotationFromEuler(e) {
    this.quaternion.setFromEuler(e, !0);
  }
  setRotationFromMatrix(e) {
    this.quaternion.setFromRotationMatrix(e);
  }
  setRotationFromQuaternion(e) {
    this.quaternion.copy(e);
  }
  rotateOnAxis(e, t) {
    return Ai.setFromAxisAngle(e, t), this.quaternion.multiply(Ai), this;
  }
  rotateOnWorldAxis(e, t) {
    return Ai.setFromAxisAngle(e, t), this.quaternion.premultiply(Ai), this;
  }
  rotateX(e) {
    return this.rotateOnAxis(hl, e);
  }
  rotateY(e) {
    return this.rotateOnAxis(fl, e);
  }
  rotateZ(e) {
    return this.rotateOnAxis(dl, e);
  }
  translateOnAxis(e, t) {
    return (
      ul.copy(e).applyQuaternion(this.quaternion),
      this.position.add(ul.multiplyScalar(t)),
      this
    );
  }
  translateX(e) {
    return this.translateOnAxis(hl, e);
  }
  translateY(e) {
    return this.translateOnAxis(fl, e);
  }
  translateZ(e) {
    return this.translateOnAxis(dl, e);
  }
  localToWorld(e) {
    return e.applyMatrix4(this.matrixWorld);
  }
  worldToLocal(e) {
    return e.applyMatrix4(vn.copy(this.matrixWorld).invert());
  }
  lookAt(e, t, n) {
    e.isVector3 ? Jr.copy(e) : Jr.set(e, t, n);
    const i = this.parent;
    this.updateWorldMatrix(!0, !1),
      dr.setFromMatrixPosition(this.matrixWorld),
      this.isCamera || this.isLight
        ? vn.lookAt(dr, Jr, this.up)
        : vn.lookAt(Jr, dr, this.up),
      this.quaternion.setFromRotationMatrix(vn),
      i &&
        (vn.extractRotation(i.matrixWorld),
        Ai.setFromRotationMatrix(vn),
        this.quaternion.premultiply(Ai.invert()));
  }
  add(e) {
    if (arguments.length > 1) {
      for (let t = 0; t < arguments.length; t++) this.add(arguments[t]);
      return this;
    }
    return e === this
      ? (console.error(
          "THREE.Object3D.add: object can't be added as a child of itself.",
          e
        ),
        this)
      : (e && e.isObject3D
          ? (e.parent !== null && e.parent.remove(e),
            (e.parent = this),
            this.children.push(e),
            e.dispatchEvent(nf))
          : console.error(
              "THREE.Object3D.add: object not an instance of THREE.Object3D.",
              e
            ),
        this);
  }
  remove(e) {
    if (arguments.length > 1) {
      for (let n = 0; n < arguments.length; n++) this.remove(arguments[n]);
      return this;
    }
    const t = this.children.indexOf(e);
    return (
      t !== -1 &&
        ((e.parent = null), this.children.splice(t, 1), e.dispatchEvent(pl)),
      this
    );
  }
  removeFromParent() {
    const e = this.parent;
    return e !== null && e.remove(this), this;
  }
  clear() {
    for (let e = 0; e < this.children.length; e++) {
      const t = this.children[e];
      (t.parent = null), t.dispatchEvent(pl);
    }
    return (this.children.length = 0), this;
  }
  attach(e) {
    return (
      this.updateWorldMatrix(!0, !1),
      vn.copy(this.matrixWorld).invert(),
      e.parent !== null &&
        (e.parent.updateWorldMatrix(!0, !1), vn.multiply(e.parent.matrixWorld)),
      e.applyMatrix4(vn),
      this.add(e),
      e.updateWorldMatrix(!1, !0),
      this
    );
  }
  getObjectById(e) {
    return this.getObjectByProperty("id", e);
  }
  getObjectByName(e) {
    return this.getObjectByProperty("name", e);
  }
  getObjectByProperty(e, t) {
    if (this[e] === t) return this;
    for (let n = 0, i = this.children.length; n < i; n++) {
      const a = this.children[n].getObjectByProperty(e, t);
      if (a !== void 0) return a;
    }
  }
  getWorldPosition(e) {
    return (
      this.updateWorldMatrix(!0, !1), e.setFromMatrixPosition(this.matrixWorld)
    );
  }
  getWorldQuaternion(e) {
    return (
      this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(dr, e, ef), e
    );
  }
  getWorldScale(e) {
    return (
      this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(dr, tf, e), e
    );
  }
  getWorldDirection(e) {
    this.updateWorldMatrix(!0, !1);
    const t = this.matrixWorld.elements;
    return e.set(t[8], t[9], t[10]).normalize();
  }
  raycast() {}
  traverse(e) {
    e(this);
    const t = this.children;
    for (let n = 0, i = t.length; n < i; n++) t[n].traverse(e);
  }
  traverseVisible(e) {
    if (this.visible === !1) return;
    e(this);
    const t = this.children;
    for (let n = 0, i = t.length; n < i; n++) t[n].traverseVisible(e);
  }
  traverseAncestors(e) {
    const t = this.parent;
    t !== null && (e(t), t.traverseAncestors(e));
  }
  updateMatrix() {
    this.matrix.compose(this.position, this.quaternion, this.scale),
      (this.matrixWorldNeedsUpdate = !0);
  }
  updateMatrixWorld(e) {
    this.matrixAutoUpdate && this.updateMatrix(),
      (this.matrixWorldNeedsUpdate || e) &&
        (this.parent === null
          ? this.matrixWorld.copy(this.matrix)
          : this.matrixWorld.multiplyMatrices(
              this.parent.matrixWorld,
              this.matrix
            ),
        (this.matrixWorldNeedsUpdate = !1),
        (e = !0));
    const t = this.children;
    for (let n = 0, i = t.length; n < i; n++) {
      const r = t[n];
      (r.matrixWorldAutoUpdate === !0 || e === !0) && r.updateMatrixWorld(e);
    }
  }
  updateWorldMatrix(e, t) {
    const n = this.parent;
    if (
      (e === !0 &&
        n !== null &&
        n.matrixWorldAutoUpdate === !0 &&
        n.updateWorldMatrix(!0, !1),
      this.matrixAutoUpdate && this.updateMatrix(),
      this.parent === null
        ? this.matrixWorld.copy(this.matrix)
        : this.matrixWorld.multiplyMatrices(
            this.parent.matrixWorld,
            this.matrix
          ),
      t === !0)
    ) {
      const i = this.children;
      for (let r = 0, a = i.length; r < a; r++) {
        const s = i[r];
        s.matrixWorldAutoUpdate === !0 && s.updateWorldMatrix(!1, !0);
      }
    }
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string",
      n = {};
    t &&
      ((e = {
        geometries: {},
        materials: {},
        textures: {},
        images: {},
        shapes: {},
        skeletons: {},
        animations: {},
        nodes: {},
      }),
      (n.metadata = {
        version: 4.5,
        type: "Object",
        generator: "Object3D.toJSON",
      }));
    const i = {};
    (i.uuid = this.uuid),
      (i.type = this.type),
      this.name !== "" && (i.name = this.name),
      this.castShadow === !0 && (i.castShadow = !0),
      this.receiveShadow === !0 && (i.receiveShadow = !0),
      this.visible === !1 && (i.visible = !1),
      this.frustumCulled === !1 && (i.frustumCulled = !1),
      this.renderOrder !== 0 && (i.renderOrder = this.renderOrder),
      JSON.stringify(this.userData) !== "{}" && (i.userData = this.userData),
      (i.layers = this.layers.mask),
      (i.matrix = this.matrix.toArray()),
      this.matrixAutoUpdate === !1 && (i.matrixAutoUpdate = !1),
      this.isInstancedMesh &&
        ((i.type = "InstancedMesh"),
        (i.count = this.count),
        (i.instanceMatrix = this.instanceMatrix.toJSON()),
        this.instanceColor !== null &&
          (i.instanceColor = this.instanceColor.toJSON()));
    function r(s, c) {
      return s[c.uuid] === void 0 && (s[c.uuid] = c.toJSON(e)), c.uuid;
    }
    if (this.isScene)
      this.background &&
        (this.background.isColor
          ? (i.background = this.background.toJSON())
          : this.background.isTexture &&
            (i.background = this.background.toJSON(e).uuid)),
        this.environment &&
          this.environment.isTexture &&
          this.environment.isRenderTargetTexture !== !0 &&
          (i.environment = this.environment.toJSON(e).uuid);
    else if (this.isMesh || this.isLine || this.isPoints) {
      i.geometry = r(e.geometries, this.geometry);
      const s = this.geometry.parameters;
      if (s !== void 0 && s.shapes !== void 0) {
        const c = s.shapes;
        if (Array.isArray(c))
          for (let l = 0, u = c.length; l < u; l++) {
            const h = c[l];
            r(e.shapes, h);
          }
        else r(e.shapes, c);
      }
    }
    if (
      (this.isSkinnedMesh &&
        ((i.bindMode = this.bindMode),
        (i.bindMatrix = this.bindMatrix.toArray()),
        this.skeleton !== void 0 &&
          (r(e.skeletons, this.skeleton), (i.skeleton = this.skeleton.uuid))),
      this.material !== void 0)
    )
      if (Array.isArray(this.material)) {
        const s = [];
        for (let c = 0, l = this.material.length; c < l; c++)
          s.push(r(e.materials, this.material[c]));
        i.material = s;
      } else i.material = r(e.materials, this.material);
    if (this.children.length > 0) {
      i.children = [];
      for (let s = 0; s < this.children.length; s++)
        i.children.push(this.children[s].toJSON(e).object);
    }
    if (this.animations.length > 0) {
      i.animations = [];
      for (let s = 0; s < this.animations.length; s++) {
        const c = this.animations[s];
        i.animations.push(r(e.animations, c));
      }
    }
    if (t) {
      const s = a(e.geometries),
        c = a(e.materials),
        l = a(e.textures),
        u = a(e.images),
        h = a(e.shapes),
        f = a(e.skeletons),
        m = a(e.animations),
        g = a(e.nodes);
      s.length > 0 && (n.geometries = s),
        c.length > 0 && (n.materials = c),
        l.length > 0 && (n.textures = l),
        u.length > 0 && (n.images = u),
        h.length > 0 && (n.shapes = h),
        f.length > 0 && (n.skeletons = f),
        m.length > 0 && (n.animations = m),
        g.length > 0 && (n.nodes = g);
    }
    return (n.object = i), n;
    function a(s) {
      const c = [];
      for (const l in s) {
        const u = s[l];
        delete u.metadata, c.push(u);
      }
      return c;
    }
  }
  clone(e) {
    return new this.constructor().copy(this, e);
  }
  copy(e, t = !0) {
    if (
      ((this.name = e.name),
      this.up.copy(e.up),
      this.position.copy(e.position),
      (this.rotation.order = e.rotation.order),
      this.quaternion.copy(e.quaternion),
      this.scale.copy(e.scale),
      this.matrix.copy(e.matrix),
      this.matrixWorld.copy(e.matrixWorld),
      (this.matrixAutoUpdate = e.matrixAutoUpdate),
      (this.matrixWorldNeedsUpdate = e.matrixWorldNeedsUpdate),
      (this.matrixWorldAutoUpdate = e.matrixWorldAutoUpdate),
      (this.layers.mask = e.layers.mask),
      (this.visible = e.visible),
      (this.castShadow = e.castShadow),
      (this.receiveShadow = e.receiveShadow),
      (this.frustumCulled = e.frustumCulled),
      (this.renderOrder = e.renderOrder),
      (this.userData = JSON.parse(JSON.stringify(e.userData))),
      t === !0)
    )
      for (let n = 0; n < e.children.length; n++) {
        const i = e.children[n];
        this.add(i.clone());
      }
    return this;
  }
}
pt.DefaultUp = new R(0, 1, 0);
pt.DefaultMatrixAutoUpdate = !0;
pt.DefaultMatrixWorldAutoUpdate = !0;
const en = new R(),
  yn = new R(),
  sa = new R(),
  Mn = new R(),
  Pi = new R(),
  Li = new R(),
  ml = new R(),
  aa = new R(),
  oa = new R(),
  la = new R();
class Tn {
  constructor(e = new R(), t = new R(), n = new R()) {
    (this.a = e), (this.b = t), (this.c = n);
  }
  static getNormal(e, t, n, i) {
    i.subVectors(n, t), en.subVectors(e, t), i.cross(en);
    const r = i.lengthSq();
    return r > 0 ? i.multiplyScalar(1 / Math.sqrt(r)) : i.set(0, 0, 0);
  }
  static getBarycoord(e, t, n, i, r) {
    en.subVectors(i, t), yn.subVectors(n, t), sa.subVectors(e, t);
    const a = en.dot(en),
      s = en.dot(yn),
      c = en.dot(sa),
      l = yn.dot(yn),
      u = yn.dot(sa),
      h = a * l - s * s;
    if (h === 0) return r.set(-2, -1, -1);
    const f = 1 / h,
      m = (l * c - s * u) * f,
      g = (a * u - s * c) * f;
    return r.set(1 - m - g, g, m);
  }
  static containsPoint(e, t, n, i) {
    return (
      this.getBarycoord(e, t, n, i, Mn),
      Mn.x >= 0 && Mn.y >= 0 && Mn.x + Mn.y <= 1
    );
  }
  static getUV(e, t, n, i, r, a, s, c) {
    return (
      this.getBarycoord(e, t, n, i, Mn),
      c.set(0, 0),
      c.addScaledVector(r, Mn.x),
      c.addScaledVector(a, Mn.y),
      c.addScaledVector(s, Mn.z),
      c
    );
  }
  static isFrontFacing(e, t, n, i) {
    return en.subVectors(n, t), yn.subVectors(e, t), en.cross(yn).dot(i) < 0;
  }
  set(e, t, n) {
    return this.a.copy(e), this.b.copy(t), this.c.copy(n), this;
  }
  setFromPointsAndIndices(e, t, n, i) {
    return this.a.copy(e[t]), this.b.copy(e[n]), this.c.copy(e[i]), this;
  }
  setFromAttributeAndIndices(e, t, n, i) {
    return (
      this.a.fromBufferAttribute(e, t),
      this.b.fromBufferAttribute(e, n),
      this.c.fromBufferAttribute(e, i),
      this
    );
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return this.a.copy(e.a), this.b.copy(e.b), this.c.copy(e.c), this;
  }
  getArea() {
    return (
      en.subVectors(this.c, this.b),
      yn.subVectors(this.a, this.b),
      en.cross(yn).length() * 0.5
    );
  }
  getMidpoint(e) {
    return e
      .addVectors(this.a, this.b)
      .add(this.c)
      .multiplyScalar(1 / 3);
  }
  getNormal(e) {
    return Tn.getNormal(this.a, this.b, this.c, e);
  }
  getPlane(e) {
    return e.setFromCoplanarPoints(this.a, this.b, this.c);
  }
  getBarycoord(e, t) {
    return Tn.getBarycoord(e, this.a, this.b, this.c, t);
  }
  getUV(e, t, n, i, r) {
    return Tn.getUV(e, this.a, this.b, this.c, t, n, i, r);
  }
  containsPoint(e) {
    return Tn.containsPoint(e, this.a, this.b, this.c);
  }
  isFrontFacing(e) {
    return Tn.isFrontFacing(this.a, this.b, this.c, e);
  }
  intersectsBox(e) {
    return e.intersectsTriangle(this);
  }
  closestPointToPoint(e, t) {
    const n = this.a,
      i = this.b,
      r = this.c;
    let a, s;
    Pi.subVectors(i, n), Li.subVectors(r, n), aa.subVectors(e, n);
    const c = Pi.dot(aa),
      l = Li.dot(aa);
    if (c <= 0 && l <= 0) return t.copy(n);
    oa.subVectors(e, i);
    const u = Pi.dot(oa),
      h = Li.dot(oa);
    if (u >= 0 && h <= u) return t.copy(i);
    const f = c * h - u * l;
    if (f <= 0 && c >= 0 && u <= 0)
      return (a = c / (c - u)), t.copy(n).addScaledVector(Pi, a);
    la.subVectors(e, r);
    const m = Pi.dot(la),
      g = Li.dot(la);
    if (g >= 0 && m <= g) return t.copy(r);
    const d = m * l - c * g;
    if (d <= 0 && l >= 0 && g <= 0)
      return (s = l / (l - g)), t.copy(n).addScaledVector(Li, s);
    const p = u * g - m * h;
    if (p <= 0 && h - u >= 0 && m - g >= 0)
      return (
        ml.subVectors(r, i),
        (s = (h - u) / (h - u + (m - g))),
        t.copy(i).addScaledVector(ml, s)
      );
    const _ = 1 / (p + d + f);
    return (
      (a = d * _),
      (s = f * _),
      t.copy(n).addScaledVector(Pi, a).addScaledVector(Li, s)
    );
  }
  equals(e) {
    return e.a.equals(this.a) && e.b.equals(this.b) && e.c.equals(this.c);
  }
}
let rf = 0;
class lr extends or {
  constructor() {
    super(),
      (this.isMaterial = !0),
      Object.defineProperty(this, "id", { value: rf++ }),
      (this.uuid = zr()),
      (this.name = ""),
      (this.type = "Material"),
      (this.blending = Gi),
      (this.side = Yi),
      (this.vertexColors = !1),
      (this.opacity = 1),
      (this.transparent = !1),
      (this.blendSrc = gc),
      (this.blendDst = _c),
      (this.blendEquation = Ni),
      (this.blendSrcAlpha = null),
      (this.blendDstAlpha = null),
      (this.blendEquationAlpha = null),
      (this.depthFunc = Ra),
      (this.depthTest = !0),
      (this.depthWrite = !0),
      (this.stencilWriteMask = 255),
      (this.stencilFunc = Xh),
      (this.stencilRef = 0),
      (this.stencilFuncMask = 255),
      (this.stencilFail = Xs),
      (this.stencilZFail = Xs),
      (this.stencilZPass = Xs),
      (this.stencilWrite = !1),
      (this.clippingPlanes = null),
      (this.clipIntersection = !1),
      (this.clipShadows = !1),
      (this.shadowSide = null),
      (this.colorWrite = !0),
      (this.precision = null),
      (this.polygonOffset = !1),
      (this.polygonOffsetFactor = 0),
      (this.polygonOffsetUnits = 0),
      (this.dithering = !1),
      (this.alphaToCoverage = !1),
      (this.premultipliedAlpha = !1),
      (this.visible = !0),
      (this.toneMapped = !0),
      (this.userData = {}),
      (this.version = 0),
      (this._alphaTest = 0);
  }
  get alphaTest() {
    return this._alphaTest;
  }
  set alphaTest(e) {
    this._alphaTest > 0 != e > 0 && this.version++, (this._alphaTest = e);
  }
  onBuild() {}
  onBeforeRender() {}
  onBeforeCompile() {}
  customProgramCacheKey() {
    return this.onBeforeCompile.toString();
  }
  setValues(e) {
    if (e !== void 0)
      for (const t in e) {
        const n = e[t];
        if (n === void 0) {
          console.warn("THREE.Material: '" + t + "' parameter is undefined.");
          continue;
        }
        const i = this[t];
        if (i === void 0) {
          console.warn(
            "THREE." +
              this.type +
              ": '" +
              t +
              "' is not a property of this material."
          );
          continue;
        }
        i && i.isColor
          ? i.set(n)
          : i && i.isVector3 && n && n.isVector3
          ? i.copy(n)
          : (this[t] = n);
      }
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    t && (e = { textures: {}, images: {} });
    const n = {
      metadata: {
        version: 4.5,
        type: "Material",
        generator: "Material.toJSON",
      },
    };
    (n.uuid = this.uuid),
      (n.type = this.type),
      this.name !== "" && (n.name = this.name),
      this.color && this.color.isColor && (n.color = this.color.getHex()),
      this.roughness !== void 0 && (n.roughness = this.roughness),
      this.metalness !== void 0 && (n.metalness = this.metalness),
      this.sheen !== void 0 && (n.sheen = this.sheen),
      this.sheenColor &&
        this.sheenColor.isColor &&
        (n.sheenColor = this.sheenColor.getHex()),
      this.sheenRoughness !== void 0 &&
        (n.sheenRoughness = this.sheenRoughness),
      this.emissive &&
        this.emissive.isColor &&
        (n.emissive = this.emissive.getHex()),
      this.emissiveIntensity &&
        this.emissiveIntensity !== 1 &&
        (n.emissiveIntensity = this.emissiveIntensity),
      this.specular &&
        this.specular.isColor &&
        (n.specular = this.specular.getHex()),
      this.specularIntensity !== void 0 &&
        (n.specularIntensity = this.specularIntensity),
      this.specularColor &&
        this.specularColor.isColor &&
        (n.specularColor = this.specularColor.getHex()),
      this.shininess !== void 0 && (n.shininess = this.shininess),
      this.clearcoat !== void 0 && (n.clearcoat = this.clearcoat),
      this.clearcoatRoughness !== void 0 &&
        (n.clearcoatRoughness = this.clearcoatRoughness),
      this.clearcoatMap &&
        this.clearcoatMap.isTexture &&
        (n.clearcoatMap = this.clearcoatMap.toJSON(e).uuid),
      this.clearcoatRoughnessMap &&
        this.clearcoatRoughnessMap.isTexture &&
        (n.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(e).uuid),
      this.clearcoatNormalMap &&
        this.clearcoatNormalMap.isTexture &&
        ((n.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(e).uuid),
        (n.clearcoatNormalScale = this.clearcoatNormalScale.toArray())),
      this.iridescence !== void 0 && (n.iridescence = this.iridescence),
      this.iridescenceIOR !== void 0 &&
        (n.iridescenceIOR = this.iridescenceIOR),
      this.iridescenceThicknessRange !== void 0 &&
        (n.iridescenceThicknessRange = this.iridescenceThicknessRange),
      this.iridescenceMap &&
        this.iridescenceMap.isTexture &&
        (n.iridescenceMap = this.iridescenceMap.toJSON(e).uuid),
      this.iridescenceThicknessMap &&
        this.iridescenceThicknessMap.isTexture &&
        (n.iridescenceThicknessMap =
          this.iridescenceThicknessMap.toJSON(e).uuid),
      this.map && this.map.isTexture && (n.map = this.map.toJSON(e).uuid),
      this.matcap &&
        this.matcap.isTexture &&
        (n.matcap = this.matcap.toJSON(e).uuid),
      this.alphaMap &&
        this.alphaMap.isTexture &&
        (n.alphaMap = this.alphaMap.toJSON(e).uuid),
      this.lightMap &&
        this.lightMap.isTexture &&
        ((n.lightMap = this.lightMap.toJSON(e).uuid),
        (n.lightMapIntensity = this.lightMapIntensity)),
      this.aoMap &&
        this.aoMap.isTexture &&
        ((n.aoMap = this.aoMap.toJSON(e).uuid),
        (n.aoMapIntensity = this.aoMapIntensity)),
      this.bumpMap &&
        this.bumpMap.isTexture &&
        ((n.bumpMap = this.bumpMap.toJSON(e).uuid),
        (n.bumpScale = this.bumpScale)),
      this.normalMap &&
        this.normalMap.isTexture &&
        ((n.normalMap = this.normalMap.toJSON(e).uuid),
        (n.normalMapType = this.normalMapType),
        (n.normalScale = this.normalScale.toArray())),
      this.displacementMap &&
        this.displacementMap.isTexture &&
        ((n.displacementMap = this.displacementMap.toJSON(e).uuid),
        (n.displacementScale = this.displacementScale),
        (n.displacementBias = this.displacementBias)),
      this.roughnessMap &&
        this.roughnessMap.isTexture &&
        (n.roughnessMap = this.roughnessMap.toJSON(e).uuid),
      this.metalnessMap &&
        this.metalnessMap.isTexture &&
        (n.metalnessMap = this.metalnessMap.toJSON(e).uuid),
      this.emissiveMap &&
        this.emissiveMap.isTexture &&
        (n.emissiveMap = this.emissiveMap.toJSON(e).uuid),
      this.specularMap &&
        this.specularMap.isTexture &&
        (n.specularMap = this.specularMap.toJSON(e).uuid),
      this.specularIntensityMap &&
        this.specularIntensityMap.isTexture &&
        (n.specularIntensityMap = this.specularIntensityMap.toJSON(e).uuid),
      this.specularColorMap &&
        this.specularColorMap.isTexture &&
        (n.specularColorMap = this.specularColorMap.toJSON(e).uuid),
      this.envMap &&
        this.envMap.isTexture &&
        ((n.envMap = this.envMap.toJSON(e).uuid),
        this.combine !== void 0 && (n.combine = this.combine)),
      this.envMapIntensity !== void 0 &&
        (n.envMapIntensity = this.envMapIntensity),
      this.reflectivity !== void 0 && (n.reflectivity = this.reflectivity),
      this.refractionRatio !== void 0 &&
        (n.refractionRatio = this.refractionRatio),
      this.gradientMap &&
        this.gradientMap.isTexture &&
        (n.gradientMap = this.gradientMap.toJSON(e).uuid),
      this.transmission !== void 0 && (n.transmission = this.transmission),
      this.transmissionMap &&
        this.transmissionMap.isTexture &&
        (n.transmissionMap = this.transmissionMap.toJSON(e).uuid),
      this.thickness !== void 0 && (n.thickness = this.thickness),
      this.thicknessMap &&
        this.thicknessMap.isTexture &&
        (n.thicknessMap = this.thicknessMap.toJSON(e).uuid),
      this.attenuationDistance !== void 0 &&
        (n.attenuationDistance = this.attenuationDistance),
      this.attenuationColor !== void 0 &&
        (n.attenuationColor = this.attenuationColor.getHex()),
      this.size !== void 0 && (n.size = this.size),
      this.shadowSide !== null && (n.shadowSide = this.shadowSide),
      this.sizeAttenuation !== void 0 &&
        (n.sizeAttenuation = this.sizeAttenuation),
      this.blending !== Gi && (n.blending = this.blending),
      this.side !== Yi && (n.side = this.side),
      this.vertexColors && (n.vertexColors = !0),
      this.opacity < 1 && (n.opacity = this.opacity),
      this.transparent === !0 && (n.transparent = this.transparent),
      (n.depthFunc = this.depthFunc),
      (n.depthTest = this.depthTest),
      (n.depthWrite = this.depthWrite),
      (n.colorWrite = this.colorWrite),
      (n.stencilWrite = this.stencilWrite),
      (n.stencilWriteMask = this.stencilWriteMask),
      (n.stencilFunc = this.stencilFunc),
      (n.stencilRef = this.stencilRef),
      (n.stencilFuncMask = this.stencilFuncMask),
      (n.stencilFail = this.stencilFail),
      (n.stencilZFail = this.stencilZFail),
      (n.stencilZPass = this.stencilZPass),
      this.rotation !== void 0 &&
        this.rotation !== 0 &&
        (n.rotation = this.rotation),
      this.polygonOffset === !0 && (n.polygonOffset = !0),
      this.polygonOffsetFactor !== 0 &&
        (n.polygonOffsetFactor = this.polygonOffsetFactor),
      this.polygonOffsetUnits !== 0 &&
        (n.polygonOffsetUnits = this.polygonOffsetUnits),
      this.linewidth !== void 0 &&
        this.linewidth !== 1 &&
        (n.linewidth = this.linewidth),
      this.dashSize !== void 0 && (n.dashSize = this.dashSize),
      this.gapSize !== void 0 && (n.gapSize = this.gapSize),
      this.scale !== void 0 && (n.scale = this.scale),
      this.dithering === !0 && (n.dithering = !0),
      this.alphaTest > 0 && (n.alphaTest = this.alphaTest),
      this.alphaToCoverage === !0 && (n.alphaToCoverage = this.alphaToCoverage),
      this.premultipliedAlpha === !0 &&
        (n.premultipliedAlpha = this.premultipliedAlpha),
      this.wireframe === !0 && (n.wireframe = this.wireframe),
      this.wireframeLinewidth > 1 &&
        (n.wireframeLinewidth = this.wireframeLinewidth),
      this.wireframeLinecap !== "round" &&
        (n.wireframeLinecap = this.wireframeLinecap),
      this.wireframeLinejoin !== "round" &&
        (n.wireframeLinejoin = this.wireframeLinejoin),
      this.flatShading === !0 && (n.flatShading = this.flatShading),
      this.visible === !1 && (n.visible = !1),
      this.toneMapped === !1 && (n.toneMapped = !1),
      this.fog === !1 && (n.fog = !1),
      JSON.stringify(this.userData) !== "{}" && (n.userData = this.userData);
    function i(r) {
      const a = [];
      for (const s in r) {
        const c = r[s];
        delete c.metadata, a.push(c);
      }
      return a;
    }
    if (t) {
      const r = i(e.textures),
        a = i(e.images);
      r.length > 0 && (n.textures = r), a.length > 0 && (n.images = a);
    }
    return n;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    (this.name = e.name),
      (this.blending = e.blending),
      (this.side = e.side),
      (this.vertexColors = e.vertexColors),
      (this.opacity = e.opacity),
      (this.transparent = e.transparent),
      (this.blendSrc = e.blendSrc),
      (this.blendDst = e.blendDst),
      (this.blendEquation = e.blendEquation),
      (this.blendSrcAlpha = e.blendSrcAlpha),
      (this.blendDstAlpha = e.blendDstAlpha),
      (this.blendEquationAlpha = e.blendEquationAlpha),
      (this.depthFunc = e.depthFunc),
      (this.depthTest = e.depthTest),
      (this.depthWrite = e.depthWrite),
      (this.stencilWriteMask = e.stencilWriteMask),
      (this.stencilFunc = e.stencilFunc),
      (this.stencilRef = e.stencilRef),
      (this.stencilFuncMask = e.stencilFuncMask),
      (this.stencilFail = e.stencilFail),
      (this.stencilZFail = e.stencilZFail),
      (this.stencilZPass = e.stencilZPass),
      (this.stencilWrite = e.stencilWrite);
    const t = e.clippingPlanes;
    let n = null;
    if (t !== null) {
      const i = t.length;
      n = new Array(i);
      for (let r = 0; r !== i; ++r) n[r] = t[r].clone();
    }
    return (
      (this.clippingPlanes = n),
      (this.clipIntersection = e.clipIntersection),
      (this.clipShadows = e.clipShadows),
      (this.shadowSide = e.shadowSide),
      (this.colorWrite = e.colorWrite),
      (this.precision = e.precision),
      (this.polygonOffset = e.polygonOffset),
      (this.polygonOffsetFactor = e.polygonOffsetFactor),
      (this.polygonOffsetUnits = e.polygonOffsetUnits),
      (this.dithering = e.dithering),
      (this.alphaTest = e.alphaTest),
      (this.alphaToCoverage = e.alphaToCoverage),
      (this.premultipliedAlpha = e.premultipliedAlpha),
      (this.visible = e.visible),
      (this.toneMapped = e.toneMapped),
      (this.userData = JSON.parse(JSON.stringify(e.userData))),
      this
    );
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
}
class ro extends lr {
  constructor(e) {
    super(),
      (this.isMeshBasicMaterial = !0),
      (this.type = "MeshBasicMaterial"),
      (this.color = new De(16777215)),
      (this.map = null),
      (this.lightMap = null),
      (this.lightMapIntensity = 1),
      (this.aoMap = null),
      (this.aoMapIntensity = 1),
      (this.specularMap = null),
      (this.alphaMap = null),
      (this.envMap = null),
      (this.combine = xc),
      (this.reflectivity = 1),
      (this.refractionRatio = 0.98),
      (this.wireframe = !1),
      (this.wireframeLinewidth = 1),
      (this.wireframeLinecap = "round"),
      (this.wireframeLinejoin = "round"),
      (this.fog = !0),
      this.setValues(e);
  }
  copy(e) {
    return (
      super.copy(e),
      this.color.copy(e.color),
      (this.map = e.map),
      (this.lightMap = e.lightMap),
      (this.lightMapIntensity = e.lightMapIntensity),
      (this.aoMap = e.aoMap),
      (this.aoMapIntensity = e.aoMapIntensity),
      (this.specularMap = e.specularMap),
      (this.alphaMap = e.alphaMap),
      (this.envMap = e.envMap),
      (this.combine = e.combine),
      (this.reflectivity = e.reflectivity),
      (this.refractionRatio = e.refractionRatio),
      (this.wireframe = e.wireframe),
      (this.wireframeLinewidth = e.wireframeLinewidth),
      (this.wireframeLinecap = e.wireframeLinecap),
      (this.wireframeLinejoin = e.wireframeLinejoin),
      (this.fog = e.fog),
      this
    );
  }
}
const Ze = new R(),
  Qr = new Se();
class hn {
  constructor(e, t, n) {
    if (Array.isArray(e))
      throw new TypeError(
        "THREE.BufferAttribute: array should be a Typed Array."
      );
    (this.isBufferAttribute = !0),
      (this.name = ""),
      (this.array = e),
      (this.itemSize = t),
      (this.count = e !== void 0 ? e.length / t : 0),
      (this.normalized = n === !0),
      (this.usage = nl),
      (this.updateRange = { offset: 0, count: -1 }),
      (this.version = 0);
  }
  onUploadCallback() {}
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
  setUsage(e) {
    return (this.usage = e), this;
  }
  copy(e) {
    return (
      (this.name = e.name),
      (this.array = new e.array.constructor(e.array)),
      (this.itemSize = e.itemSize),
      (this.count = e.count),
      (this.normalized = e.normalized),
      (this.usage = e.usage),
      this
    );
  }
  copyAt(e, t, n) {
    (e *= this.itemSize), (n *= t.itemSize);
    for (let i = 0, r = this.itemSize; i < r; i++)
      this.array[e + i] = t.array[n + i];
    return this;
  }
  copyArray(e) {
    return this.array.set(e), this;
  }
  applyMatrix3(e) {
    if (this.itemSize === 2)
      for (let t = 0, n = this.count; t < n; t++)
        Qr.fromBufferAttribute(this, t),
          Qr.applyMatrix3(e),
          this.setXY(t, Qr.x, Qr.y);
    else if (this.itemSize === 3)
      for (let t = 0, n = this.count; t < n; t++)
        Ze.fromBufferAttribute(this, t),
          Ze.applyMatrix3(e),
          this.setXYZ(t, Ze.x, Ze.y, Ze.z);
    return this;
  }
  applyMatrix4(e) {
    for (let t = 0, n = this.count; t < n; t++)
      Ze.fromBufferAttribute(this, t),
        Ze.applyMatrix4(e),
        this.setXYZ(t, Ze.x, Ze.y, Ze.z);
    return this;
  }
  applyNormalMatrix(e) {
    for (let t = 0, n = this.count; t < n; t++)
      Ze.fromBufferAttribute(this, t),
        Ze.applyNormalMatrix(e),
        this.setXYZ(t, Ze.x, Ze.y, Ze.z);
    return this;
  }
  transformDirection(e) {
    for (let t = 0, n = this.count; t < n; t++)
      Ze.fromBufferAttribute(this, t),
        Ze.transformDirection(e),
        this.setXYZ(t, Ze.x, Ze.y, Ze.z);
    return this;
  }
  set(e, t = 0) {
    return this.array.set(e, t), this;
  }
  getX(e) {
    let t = this.array[e * this.itemSize];
    return this.normalized && (t = Hr(t, this.array)), t;
  }
  setX(e, t) {
    return (
      this.normalized && (t = Et(t, this.array)),
      (this.array[e * this.itemSize] = t),
      this
    );
  }
  getY(e) {
    let t = this.array[e * this.itemSize + 1];
    return this.normalized && (t = Hr(t, this.array)), t;
  }
  setY(e, t) {
    return (
      this.normalized && (t = Et(t, this.array)),
      (this.array[e * this.itemSize + 1] = t),
      this
    );
  }
  getZ(e) {
    let t = this.array[e * this.itemSize + 2];
    return this.normalized && (t = Hr(t, this.array)), t;
  }
  setZ(e, t) {
    return (
      this.normalized && (t = Et(t, this.array)),
      (this.array[e * this.itemSize + 2] = t),
      this
    );
  }
  getW(e) {
    let t = this.array[e * this.itemSize + 3];
    return this.normalized && (t = Hr(t, this.array)), t;
  }
  setW(e, t) {
    return (
      this.normalized && (t = Et(t, this.array)),
      (this.array[e * this.itemSize + 3] = t),
      this
    );
  }
  setXY(e, t, n) {
    return (
      (e *= this.itemSize),
      this.normalized && ((t = Et(t, this.array)), (n = Et(n, this.array))),
      (this.array[e + 0] = t),
      (this.array[e + 1] = n),
      this
    );
  }
  setXYZ(e, t, n, i) {
    return (
      (e *= this.itemSize),
      this.normalized &&
        ((t = Et(t, this.array)),
        (n = Et(n, this.array)),
        (i = Et(i, this.array))),
      (this.array[e + 0] = t),
      (this.array[e + 1] = n),
      (this.array[e + 2] = i),
      this
    );
  }
  setXYZW(e, t, n, i, r) {
    return (
      (e *= this.itemSize),
      this.normalized &&
        ((t = Et(t, this.array)),
        (n = Et(n, this.array)),
        (i = Et(i, this.array)),
        (r = Et(r, this.array))),
      (this.array[e + 0] = t),
      (this.array[e + 1] = n),
      (this.array[e + 2] = i),
      (this.array[e + 3] = r),
      this
    );
  }
  onUpload(e) {
    return (this.onUploadCallback = e), this;
  }
  clone() {
    return new this.constructor(this.array, this.itemSize).copy(this);
  }
  toJSON() {
    const e = {
      itemSize: this.itemSize,
      type: this.array.constructor.name,
      array: Array.from(this.array),
      normalized: this.normalized,
    };
    return (
      this.name !== "" && (e.name = this.name),
      this.usage !== nl && (e.usage = this.usage),
      (this.updateRange.offset !== 0 || this.updateRange.count !== -1) &&
        (e.updateRange = this.updateRange),
      e
    );
  }
  copyColorsArray() {
    console.error(
      "THREE.BufferAttribute: copyColorsArray() was removed in r144."
    );
  }
  copyVector2sArray() {
    console.error(
      "THREE.BufferAttribute: copyVector2sArray() was removed in r144."
    );
  }
  copyVector3sArray() {
    console.error(
      "THREE.BufferAttribute: copyVector3sArray() was removed in r144."
    );
  }
  copyVector4sArray() {
    console.error(
      "THREE.BufferAttribute: copyVector4sArray() was removed in r144."
    );
  }
}
class Cc extends hn {
  constructor(e, t, n) {
    super(new Uint16Array(e), t, n);
  }
}
class Ac extends hn {
  constructor(e, t, n) {
    super(new Uint32Array(e), t, n);
  }
}
class mt extends hn {
  constructor(e, t, n) {
    super(new Float32Array(e), t, n);
  }
}
let sf = 0;
const Ut = new Qe(),
  ca = new pt(),
  Di = new R(),
  At = new Or(),
  pr = new Or(),
  tt = new R();
class $t extends or {
  constructor() {
    super(),
      (this.isBufferGeometry = !0),
      Object.defineProperty(this, "id", { value: sf++ }),
      (this.uuid = zr()),
      (this.name = ""),
      (this.type = "BufferGeometry"),
      (this.index = null),
      (this.attributes = {}),
      (this.morphAttributes = {}),
      (this.morphTargetsRelative = !1),
      (this.groups = []),
      (this.boundingBox = null),
      (this.boundingSphere = null),
      (this.drawRange = { start: 0, count: 1 / 0 }),
      (this.userData = {});
  }
  getIndex() {
    return this.index;
  }
  setIndex(e) {
    return (
      Array.isArray(e)
        ? (this.index = new (Mc(e) ? Ac : Cc)(e, 1))
        : (this.index = e),
      this
    );
  }
  getAttribute(e) {
    return this.attributes[e];
  }
  setAttribute(e, t) {
    return (this.attributes[e] = t), this;
  }
  deleteAttribute(e) {
    return delete this.attributes[e], this;
  }
  hasAttribute(e) {
    return this.attributes[e] !== void 0;
  }
  addGroup(e, t, n = 0) {
    this.groups.push({ start: e, count: t, materialIndex: n });
  }
  clearGroups() {
    this.groups = [];
  }
  setDrawRange(e, t) {
    (this.drawRange.start = e), (this.drawRange.count = t);
  }
  applyMatrix4(e) {
    const t = this.attributes.position;
    t !== void 0 && (t.applyMatrix4(e), (t.needsUpdate = !0));
    const n = this.attributes.normal;
    if (n !== void 0) {
      const r = new Gt().getNormalMatrix(e);
      n.applyNormalMatrix(r), (n.needsUpdate = !0);
    }
    const i = this.attributes.tangent;
    return (
      i !== void 0 && (i.transformDirection(e), (i.needsUpdate = !0)),
      this.boundingBox !== null && this.computeBoundingBox(),
      this.boundingSphere !== null && this.computeBoundingSphere(),
      this
    );
  }
  applyQuaternion(e) {
    return Ut.makeRotationFromQuaternion(e), this.applyMatrix4(Ut), this;
  }
  rotateX(e) {
    return Ut.makeRotationX(e), this.applyMatrix4(Ut), this;
  }
  rotateY(e) {
    return Ut.makeRotationY(e), this.applyMatrix4(Ut), this;
  }
  rotateZ(e) {
    return Ut.makeRotationZ(e), this.applyMatrix4(Ut), this;
  }
  translate(e, t, n) {
    return Ut.makeTranslation(e, t, n), this.applyMatrix4(Ut), this;
  }
  scale(e, t, n) {
    return Ut.makeScale(e, t, n), this.applyMatrix4(Ut), this;
  }
  lookAt(e) {
    return ca.lookAt(e), ca.updateMatrix(), this.applyMatrix4(ca.matrix), this;
  }
  center() {
    return (
      this.computeBoundingBox(),
      this.boundingBox.getCenter(Di).negate(),
      this.translate(Di.x, Di.y, Di.z),
      this
    );
  }
  setFromPoints(e) {
    const t = [];
    for (let n = 0, i = e.length; n < i; n++) {
      const r = e[n];
      t.push(r.x, r.y, r.z || 0);
    }
    return this.setAttribute("position", new mt(t, 3)), this;
  }
  computeBoundingBox() {
    this.boundingBox === null && (this.boundingBox = new Or());
    const e = this.attributes.position,
      t = this.morphAttributes.position;
    if (e && e.isGLBufferAttribute) {
      console.error(
        'THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',
        this
      ),
        this.boundingBox.set(
          new R(-1 / 0, -1 / 0, -1 / 0),
          new R(1 / 0, 1 / 0, 1 / 0)
        );
      return;
    }
    if (e !== void 0) {
      if ((this.boundingBox.setFromBufferAttribute(e), t))
        for (let n = 0, i = t.length; n < i; n++) {
          const r = t[n];
          At.setFromBufferAttribute(r),
            this.morphTargetsRelative
              ? (tt.addVectors(this.boundingBox.min, At.min),
                this.boundingBox.expandByPoint(tt),
                tt.addVectors(this.boundingBox.max, At.max),
                this.boundingBox.expandByPoint(tt))
              : (this.boundingBox.expandByPoint(At.min),
                this.boundingBox.expandByPoint(At.max));
        }
    } else this.boundingBox.makeEmpty();
    (isNaN(this.boundingBox.min.x) ||
      isNaN(this.boundingBox.min.y) ||
      isNaN(this.boundingBox.min.z)) &&
      console.error(
        'THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',
        this
      );
  }
  computeBoundingSphere() {
    this.boundingSphere === null && (this.boundingSphere = new Ur());
    const e = this.attributes.position,
      t = this.morphAttributes.position;
    if (e && e.isGLBufferAttribute) {
      console.error(
        'THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',
        this
      ),
        this.boundingSphere.set(new R(), 1 / 0);
      return;
    }
    if (e) {
      const n = this.boundingSphere.center;
      if ((At.setFromBufferAttribute(e), t))
        for (let r = 0, a = t.length; r < a; r++) {
          const s = t[r];
          pr.setFromBufferAttribute(s),
            this.morphTargetsRelative
              ? (tt.addVectors(At.min, pr.min),
                At.expandByPoint(tt),
                tt.addVectors(At.max, pr.max),
                At.expandByPoint(tt))
              : (At.expandByPoint(pr.min), At.expandByPoint(pr.max));
        }
      At.getCenter(n);
      let i = 0;
      for (let r = 0, a = e.count; r < a; r++)
        tt.fromBufferAttribute(e, r),
          (i = Math.max(i, n.distanceToSquared(tt)));
      if (t)
        for (let r = 0, a = t.length; r < a; r++) {
          const s = t[r],
            c = this.morphTargetsRelative;
          for (let l = 0, u = s.count; l < u; l++)
            tt.fromBufferAttribute(s, l),
              c && (Di.fromBufferAttribute(e, l), tt.add(Di)),
              (i = Math.max(i, n.distanceToSquared(tt)));
        }
      (this.boundingSphere.radius = Math.sqrt(i)),
        isNaN(this.boundingSphere.radius) &&
          console.error(
            'THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',
            this
          );
    }
  }
  computeTangents() {
    const e = this.index,
      t = this.attributes;
    if (
      e === null ||
      t.position === void 0 ||
      t.normal === void 0 ||
      t.uv === void 0
    ) {
      console.error(
        "THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)"
      );
      return;
    }
    const n = e.array,
      i = t.position.array,
      r = t.normal.array,
      a = t.uv.array,
      s = i.length / 3;
    this.hasAttribute("tangent") === !1 &&
      this.setAttribute("tangent", new hn(new Float32Array(4 * s), 4));
    const c = this.getAttribute("tangent").array,
      l = [],
      u = [];
    for (let P = 0; P < s; P++) (l[P] = new R()), (u[P] = new R());
    const h = new R(),
      f = new R(),
      m = new R(),
      g = new Se(),
      d = new Se(),
      p = new Se(),
      _ = new R(),
      v = new R();
    function S(P, W, K) {
      h.fromArray(i, P * 3),
        f.fromArray(i, W * 3),
        m.fromArray(i, K * 3),
        g.fromArray(a, P * 2),
        d.fromArray(a, W * 2),
        p.fromArray(a, K * 2),
        f.sub(h),
        m.sub(h),
        d.sub(g),
        p.sub(g);
      const O = 1 / (d.x * p.y - p.x * d.y);
      !isFinite(O) ||
        (_.copy(f)
          .multiplyScalar(p.y)
          .addScaledVector(m, -d.y)
          .multiplyScalar(O),
        v
          .copy(m)
          .multiplyScalar(d.x)
          .addScaledVector(f, -p.x)
          .multiplyScalar(O),
        l[P].add(_),
        l[W].add(_),
        l[K].add(_),
        u[P].add(v),
        u[W].add(v),
        u[K].add(v));
    }
    let M = this.groups;
    M.length === 0 && (M = [{ start: 0, count: n.length }]);
    for (let P = 0, W = M.length; P < W; ++P) {
      const K = M[P],
        O = K.start,
        D = K.count;
      for (let B = O, Y = O + D; B < Y; B += 3) S(n[B + 0], n[B + 1], n[B + 2]);
    }
    const y = new R(),
      E = new R(),
      A = new R(),
      x = new R();
    function w(P) {
      A.fromArray(r, P * 3), x.copy(A);
      const W = l[P];
      y.copy(W),
        y.sub(A.multiplyScalar(A.dot(W))).normalize(),
        E.crossVectors(x, W);
      const O = E.dot(u[P]) < 0 ? -1 : 1;
      (c[P * 4] = y.x),
        (c[P * 4 + 1] = y.y),
        (c[P * 4 + 2] = y.z),
        (c[P * 4 + 3] = O);
    }
    for (let P = 0, W = M.length; P < W; ++P) {
      const K = M[P],
        O = K.start,
        D = K.count;
      for (let B = O, Y = O + D; B < Y; B += 3)
        w(n[B + 0]), w(n[B + 1]), w(n[B + 2]);
    }
  }
  computeVertexNormals() {
    const e = this.index,
      t = this.getAttribute("position");
    if (t !== void 0) {
      let n = this.getAttribute("normal");
      if (n === void 0)
        (n = new hn(new Float32Array(t.count * 3), 3)),
          this.setAttribute("normal", n);
      else for (let f = 0, m = n.count; f < m; f++) n.setXYZ(f, 0, 0, 0);
      const i = new R(),
        r = new R(),
        a = new R(),
        s = new R(),
        c = new R(),
        l = new R(),
        u = new R(),
        h = new R();
      if (e)
        for (let f = 0, m = e.count; f < m; f += 3) {
          const g = e.getX(f + 0),
            d = e.getX(f + 1),
            p = e.getX(f + 2);
          i.fromBufferAttribute(t, g),
            r.fromBufferAttribute(t, d),
            a.fromBufferAttribute(t, p),
            u.subVectors(a, r),
            h.subVectors(i, r),
            u.cross(h),
            s.fromBufferAttribute(n, g),
            c.fromBufferAttribute(n, d),
            l.fromBufferAttribute(n, p),
            s.add(u),
            c.add(u),
            l.add(u),
            n.setXYZ(g, s.x, s.y, s.z),
            n.setXYZ(d, c.x, c.y, c.z),
            n.setXYZ(p, l.x, l.y, l.z);
        }
      else
        for (let f = 0, m = t.count; f < m; f += 3)
          i.fromBufferAttribute(t, f + 0),
            r.fromBufferAttribute(t, f + 1),
            a.fromBufferAttribute(t, f + 2),
            u.subVectors(a, r),
            h.subVectors(i, r),
            u.cross(h),
            n.setXYZ(f + 0, u.x, u.y, u.z),
            n.setXYZ(f + 1, u.x, u.y, u.z),
            n.setXYZ(f + 2, u.x, u.y, u.z);
      this.normalizeNormals(), (n.needsUpdate = !0);
    }
  }
  merge() {
    return (
      console.error(
        "THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."
      ),
      this
    );
  }
  normalizeNormals() {
    const e = this.attributes.normal;
    for (let t = 0, n = e.count; t < n; t++)
      tt.fromBufferAttribute(e, t),
        tt.normalize(),
        e.setXYZ(t, tt.x, tt.y, tt.z);
  }
  toNonIndexed() {
    function e(s, c) {
      const l = s.array,
        u = s.itemSize,
        h = s.normalized,
        f = new l.constructor(c.length * u);
      let m = 0,
        g = 0;
      for (let d = 0, p = c.length; d < p; d++) {
        s.isInterleavedBufferAttribute
          ? (m = c[d] * s.data.stride + s.offset)
          : (m = c[d] * u);
        for (let _ = 0; _ < u; _++) f[g++] = l[m++];
      }
      return new hn(f, u, h);
    }
    if (this.index === null)
      return (
        console.warn(
          "THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."
        ),
        this
      );
    const t = new $t(),
      n = this.index.array,
      i = this.attributes;
    for (const s in i) {
      const c = i[s],
        l = e(c, n);
      t.setAttribute(s, l);
    }
    const r = this.morphAttributes;
    for (const s in r) {
      const c = [],
        l = r[s];
      for (let u = 0, h = l.length; u < h; u++) {
        const f = l[u],
          m = e(f, n);
        c.push(m);
      }
      t.morphAttributes[s] = c;
    }
    t.morphTargetsRelative = this.morphTargetsRelative;
    const a = this.groups;
    for (let s = 0, c = a.length; s < c; s++) {
      const l = a[s];
      t.addGroup(l.start, l.count, l.materialIndex);
    }
    return t;
  }
  toJSON() {
    const e = {
      metadata: {
        version: 4.5,
        type: "BufferGeometry",
        generator: "BufferGeometry.toJSON",
      },
    };
    if (
      ((e.uuid = this.uuid),
      (e.type = this.type),
      this.name !== "" && (e.name = this.name),
      Object.keys(this.userData).length > 0 && (e.userData = this.userData),
      this.parameters !== void 0)
    ) {
      const c = this.parameters;
      for (const l in c) c[l] !== void 0 && (e[l] = c[l]);
      return e;
    }
    e.data = { attributes: {} };
    const t = this.index;
    t !== null &&
      (e.data.index = {
        type: t.array.constructor.name,
        array: Array.prototype.slice.call(t.array),
      });
    const n = this.attributes;
    for (const c in n) {
      const l = n[c];
      e.data.attributes[c] = l.toJSON(e.data);
    }
    const i = {};
    let r = !1;
    for (const c in this.morphAttributes) {
      const l = this.morphAttributes[c],
        u = [];
      for (let h = 0, f = l.length; h < f; h++) {
        const m = l[h];
        u.push(m.toJSON(e.data));
      }
      u.length > 0 && ((i[c] = u), (r = !0));
    }
    r &&
      ((e.data.morphAttributes = i),
      (e.data.morphTargetsRelative = this.morphTargetsRelative));
    const a = this.groups;
    a.length > 0 && (e.data.groups = JSON.parse(JSON.stringify(a)));
    const s = this.boundingSphere;
    return (
      s !== null &&
        (e.data.boundingSphere = {
          center: s.center.toArray(),
          radius: s.radius,
        }),
      e
    );
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    (this.index = null),
      (this.attributes = {}),
      (this.morphAttributes = {}),
      (this.groups = []),
      (this.boundingBox = null),
      (this.boundingSphere = null);
    const t = {};
    this.name = e.name;
    const n = e.index;
    n !== null && this.setIndex(n.clone(t));
    const i = e.attributes;
    for (const l in i) {
      const u = i[l];
      this.setAttribute(l, u.clone(t));
    }
    const r = e.morphAttributes;
    for (const l in r) {
      const u = [],
        h = r[l];
      for (let f = 0, m = h.length; f < m; f++) u.push(h[f].clone(t));
      this.morphAttributes[l] = u;
    }
    this.morphTargetsRelative = e.morphTargetsRelative;
    const a = e.groups;
    for (let l = 0, u = a.length; l < u; l++) {
      const h = a[l];
      this.addGroup(h.start, h.count, h.materialIndex);
    }
    const s = e.boundingBox;
    s !== null && (this.boundingBox = s.clone());
    const c = e.boundingSphere;
    return (
      c !== null && (this.boundingSphere = c.clone()),
      (this.drawRange.start = e.drawRange.start),
      (this.drawRange.count = e.drawRange.count),
      (this.userData = e.userData),
      e.parameters !== void 0 &&
        (this.parameters = Object.assign({}, e.parameters)),
      this
    );
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
const gl = new Qe(),
  Ri = new io(),
  ua = new Ur(),
  Nn = new R(),
  Bn = new R(),
  kn = new R(),
  ha = new R(),
  fa = new R(),
  da = new R(),
  es = new R(),
  ts = new R(),
  ns = new R(),
  is = new Se(),
  rs = new Se(),
  ss = new Se(),
  pa = new R(),
  as = new R();
class En extends pt {
  constructor(e = new $t(), t = new ro()) {
    super(),
      (this.isMesh = !0),
      (this.type = "Mesh"),
      (this.geometry = e),
      (this.material = t),
      this.updateMorphTargets();
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      e.morphTargetInfluences !== void 0 &&
        (this.morphTargetInfluences = e.morphTargetInfluences.slice()),
      e.morphTargetDictionary !== void 0 &&
        (this.morphTargetDictionary = Object.assign(
          {},
          e.morphTargetDictionary
        )),
      (this.material = e.material),
      (this.geometry = e.geometry),
      this
    );
  }
  updateMorphTargets() {
    const t = this.geometry.morphAttributes,
      n = Object.keys(t);
    if (n.length > 0) {
      const i = t[n[0]];
      if (i !== void 0) {
        (this.morphTargetInfluences = []), (this.morphTargetDictionary = {});
        for (let r = 0, a = i.length; r < a; r++) {
          const s = i[r].name || String(r);
          this.morphTargetInfluences.push(0),
            (this.morphTargetDictionary[s] = r);
        }
      }
    }
  }
  raycast(e, t) {
    const n = this.geometry,
      i = this.material,
      r = this.matrixWorld;
    if (
      i === void 0 ||
      (n.boundingSphere === null && n.computeBoundingSphere(),
      ua.copy(n.boundingSphere),
      ua.applyMatrix4(r),
      e.ray.intersectsSphere(ua) === !1) ||
      (gl.copy(r).invert(),
      Ri.copy(e.ray).applyMatrix4(gl),
      n.boundingBox !== null && Ri.intersectsBox(n.boundingBox) === !1)
    )
      return;
    let a;
    const s = n.index,
      c = n.attributes.position,
      l = n.morphAttributes.position,
      u = n.morphTargetsRelative,
      h = n.attributes.uv,
      f = n.attributes.uv2,
      m = n.groups,
      g = n.drawRange;
    if (s !== null)
      if (Array.isArray(i))
        for (let d = 0, p = m.length; d < p; d++) {
          const _ = m[d],
            v = i[_.materialIndex],
            S = Math.max(_.start, g.start),
            M = Math.min(
              s.count,
              Math.min(_.start + _.count, g.start + g.count)
            );
          for (let y = S, E = M; y < E; y += 3) {
            const A = s.getX(y),
              x = s.getX(y + 1),
              w = s.getX(y + 2);
            (a = os(this, v, e, Ri, c, l, u, h, f, A, x, w)),
              a &&
                ((a.faceIndex = Math.floor(y / 3)),
                (a.face.materialIndex = _.materialIndex),
                t.push(a));
          }
        }
      else {
        const d = Math.max(0, g.start),
          p = Math.min(s.count, g.start + g.count);
        for (let _ = d, v = p; _ < v; _ += 3) {
          const S = s.getX(_),
            M = s.getX(_ + 1),
            y = s.getX(_ + 2);
          (a = os(this, i, e, Ri, c, l, u, h, f, S, M, y)),
            a && ((a.faceIndex = Math.floor(_ / 3)), t.push(a));
        }
      }
    else if (c !== void 0)
      if (Array.isArray(i))
        for (let d = 0, p = m.length; d < p; d++) {
          const _ = m[d],
            v = i[_.materialIndex],
            S = Math.max(_.start, g.start),
            M = Math.min(
              c.count,
              Math.min(_.start + _.count, g.start + g.count)
            );
          for (let y = S, E = M; y < E; y += 3) {
            const A = y,
              x = y + 1,
              w = y + 2;
            (a = os(this, v, e, Ri, c, l, u, h, f, A, x, w)),
              a &&
                ((a.faceIndex = Math.floor(y / 3)),
                (a.face.materialIndex = _.materialIndex),
                t.push(a));
          }
        }
      else {
        const d = Math.max(0, g.start),
          p = Math.min(c.count, g.start + g.count);
        for (let _ = d, v = p; _ < v; _ += 3) {
          const S = _,
            M = _ + 1,
            y = _ + 2;
          (a = os(this, i, e, Ri, c, l, u, h, f, S, M, y)),
            a && ((a.faceIndex = Math.floor(_ / 3)), t.push(a));
        }
      }
  }
}
function af(o, e, t, n, i, r, a, s) {
  let c;
  if (
    (e.side === Xt
      ? (c = n.intersectTriangle(a, r, i, !0, s))
      : (c = n.intersectTriangle(i, r, a, e.side !== Vn, s)),
    c === null)
  )
    return null;
  as.copy(s), as.applyMatrix4(o.matrixWorld);
  const l = t.ray.origin.distanceTo(as);
  return l < t.near || l > t.far
    ? null
    : { distance: l, point: as.clone(), object: o };
}
function os(o, e, t, n, i, r, a, s, c, l, u, h) {
  Nn.fromBufferAttribute(i, l),
    Bn.fromBufferAttribute(i, u),
    kn.fromBufferAttribute(i, h);
  const f = o.morphTargetInfluences;
  if (r && f) {
    es.set(0, 0, 0), ts.set(0, 0, 0), ns.set(0, 0, 0);
    for (let g = 0, d = r.length; g < d; g++) {
      const p = f[g],
        _ = r[g];
      p !== 0 &&
        (ha.fromBufferAttribute(_, l),
        fa.fromBufferAttribute(_, u),
        da.fromBufferAttribute(_, h),
        a
          ? (es.addScaledVector(ha, p),
            ts.addScaledVector(fa, p),
            ns.addScaledVector(da, p))
          : (es.addScaledVector(ha.sub(Nn), p),
            ts.addScaledVector(fa.sub(Bn), p),
            ns.addScaledVector(da.sub(kn), p)));
    }
    Nn.add(es), Bn.add(ts), kn.add(ns);
  }
  o.isSkinnedMesh &&
    (o.boneTransform(l, Nn), o.boneTransform(u, Bn), o.boneTransform(h, kn));
  const m = af(o, e, t, n, Nn, Bn, kn, pa);
  if (m) {
    s &&
      (is.fromBufferAttribute(s, l),
      rs.fromBufferAttribute(s, u),
      ss.fromBufferAttribute(s, h),
      (m.uv = Tn.getUV(pa, Nn, Bn, kn, is, rs, ss, new Se()))),
      c &&
        (is.fromBufferAttribute(c, l),
        rs.fromBufferAttribute(c, u),
        ss.fromBufferAttribute(c, h),
        (m.uv2 = Tn.getUV(pa, Nn, Bn, kn, is, rs, ss, new Se())));
    const g = { a: l, b: u, c: h, normal: new R(), materialIndex: 0 };
    Tn.getNormal(Nn, Bn, kn, g.normal), (m.face = g);
  }
  return m;
}
class Br extends $t {
  constructor(e = 1, t = 1, n = 1, i = 1, r = 1, a = 1) {
    super(),
      (this.type = "BoxGeometry"),
      (this.parameters = {
        width: e,
        height: t,
        depth: n,
        widthSegments: i,
        heightSegments: r,
        depthSegments: a,
      });
    const s = this;
    (i = Math.floor(i)), (r = Math.floor(r)), (a = Math.floor(a));
    const c = [],
      l = [],
      u = [],
      h = [];
    let f = 0,
      m = 0;
    g("z", "y", "x", -1, -1, n, t, e, a, r, 0),
      g("z", "y", "x", 1, -1, n, t, -e, a, r, 1),
      g("x", "z", "y", 1, 1, e, n, t, i, a, 2),
      g("x", "z", "y", 1, -1, e, n, -t, i, a, 3),
      g("x", "y", "z", 1, -1, e, t, n, i, r, 4),
      g("x", "y", "z", -1, -1, e, t, -n, i, r, 5),
      this.setIndex(c),
      this.setAttribute("position", new mt(l, 3)),
      this.setAttribute("normal", new mt(u, 3)),
      this.setAttribute("uv", new mt(h, 2));
    function g(d, p, _, v, S, M, y, E, A, x, w) {
      const P = M / A,
        W = y / x,
        K = M / 2,
        O = y / 2,
        D = E / 2,
        B = A + 1,
        Y = x + 1;
      let X = 0,
        k = 0;
      const z = new R();
      for (let U = 0; U < Y; U++) {
        const J = U * W - O;
        for (let Z = 0; Z < B; Z++) {
          const $ = Z * P - K;
          (z[d] = $ * v),
            (z[p] = J * S),
            (z[_] = D),
            l.push(z.x, z.y, z.z),
            (z[d] = 0),
            (z[p] = 0),
            (z[_] = E > 0 ? 1 : -1),
            u.push(z.x, z.y, z.z),
            h.push(Z / A),
            h.push(1 - U / x),
            (X += 1);
        }
      }
      for (let U = 0; U < x; U++)
        for (let J = 0; J < A; J++) {
          const Z = f + J + B * U,
            $ = f + J + B * (U + 1),
            ie = f + (J + 1) + B * (U + 1),
            de = f + (J + 1) + B * U;
          c.push(Z, $, de), c.push($, ie, de), (k += 6);
        }
      s.addGroup(m, k, w), (m += k), (f += X);
    }
  }
  static fromJSON(e) {
    return new Br(
      e.width,
      e.height,
      e.depth,
      e.widthSegments,
      e.heightSegments,
      e.depthSegments
    );
  }
}
function Ki(o) {
  const e = {};
  for (const t in o) {
    e[t] = {};
    for (const n in o[t]) {
      const i = o[t][n];
      i &&
      (i.isColor ||
        i.isMatrix3 ||
        i.isMatrix4 ||
        i.isVector2 ||
        i.isVector3 ||
        i.isVector4 ||
        i.isTexture ||
        i.isQuaternion)
        ? (e[t][n] = i.clone())
        : Array.isArray(i)
        ? (e[t][n] = i.slice())
        : (e[t][n] = i);
    }
  }
  return e;
}
function lt(o) {
  const e = {};
  for (let t = 0; t < o.length; t++) {
    const n = Ki(o[t]);
    for (const i in n) e[i] = n[i];
  }
  return e;
}
function of(o) {
  const e = [];
  for (let t = 0; t < o.length; t++) e.push(o[t].clone());
  return e;
}
const vs = { clone: Ki, merge: lt };
var lf = `void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,
  cf = `void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;
class yt extends lr {
  constructor(e) {
    super(),
      (this.isShaderMaterial = !0),
      (this.type = "ShaderMaterial"),
      (this.defines = {}),
      (this.uniforms = {}),
      (this.uniformsGroups = []),
      (this.vertexShader = lf),
      (this.fragmentShader = cf),
      (this.linewidth = 1),
      (this.wireframe = !1),
      (this.wireframeLinewidth = 1),
      (this.fog = !1),
      (this.lights = !1),
      (this.clipping = !1),
      (this.extensions = {
        derivatives: !1,
        fragDepth: !1,
        drawBuffers: !1,
        shaderTextureLOD: !1,
      }),
      (this.defaultAttributeValues = {
        color: [1, 1, 1],
        uv: [0, 0],
        uv2: [0, 0],
      }),
      (this.index0AttributeName = void 0),
      (this.uniformsNeedUpdate = !1),
      (this.glslVersion = null),
      e !== void 0 && this.setValues(e);
  }
  copy(e) {
    return (
      super.copy(e),
      (this.fragmentShader = e.fragmentShader),
      (this.vertexShader = e.vertexShader),
      (this.uniforms = Ki(e.uniforms)),
      (this.uniformsGroups = of(e.uniformsGroups)),
      (this.defines = Object.assign({}, e.defines)),
      (this.wireframe = e.wireframe),
      (this.wireframeLinewidth = e.wireframeLinewidth),
      (this.fog = e.fog),
      (this.lights = e.lights),
      (this.clipping = e.clipping),
      (this.extensions = Object.assign({}, e.extensions)),
      (this.glslVersion = e.glslVersion),
      this
    );
  }
  toJSON(e) {
    const t = super.toJSON(e);
    (t.glslVersion = this.glslVersion), (t.uniforms = {});
    for (const i in this.uniforms) {
      const a = this.uniforms[i].value;
      a && a.isTexture
        ? (t.uniforms[i] = { type: "t", value: a.toJSON(e).uuid })
        : a && a.isColor
        ? (t.uniforms[i] = { type: "c", value: a.getHex() })
        : a && a.isVector2
        ? (t.uniforms[i] = { type: "v2", value: a.toArray() })
        : a && a.isVector3
        ? (t.uniforms[i] = { type: "v3", value: a.toArray() })
        : a && a.isVector4
        ? (t.uniforms[i] = { type: "v4", value: a.toArray() })
        : a && a.isMatrix3
        ? (t.uniforms[i] = { type: "m3", value: a.toArray() })
        : a && a.isMatrix4
        ? (t.uniforms[i] = { type: "m4", value: a.toArray() })
        : (t.uniforms[i] = { value: a });
    }
    Object.keys(this.defines).length > 0 && (t.defines = this.defines),
      (t.vertexShader = this.vertexShader),
      (t.fragmentShader = this.fragmentShader);
    const n = {};
    for (const i in this.extensions) this.extensions[i] === !0 && (n[i] = !0);
    return Object.keys(n).length > 0 && (t.extensions = n), t;
  }
}
class Pc extends pt {
  constructor() {
    super(),
      (this.isCamera = !0),
      (this.type = "Camera"),
      (this.matrixWorldInverse = new Qe()),
      (this.projectionMatrix = new Qe()),
      (this.projectionMatrixInverse = new Qe());
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      this.matrixWorldInverse.copy(e.matrixWorldInverse),
      this.projectionMatrix.copy(e.projectionMatrix),
      this.projectionMatrixInverse.copy(e.projectionMatrixInverse),
      this
    );
  }
  getWorldDirection(e) {
    this.updateWorldMatrix(!0, !1);
    const t = this.matrixWorld.elements;
    return e.set(-t[8], -t[9], -t[10]).normalize();
  }
  updateMatrixWorld(e) {
    super.updateMatrixWorld(e),
      this.matrixWorldInverse.copy(this.matrixWorld).invert();
  }
  updateWorldMatrix(e, t) {
    super.updateWorldMatrix(e, t),
      this.matrixWorldInverse.copy(this.matrixWorld).invert();
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
class Vt extends Pc {
  constructor(e = 50, t = 1, n = 0.1, i = 2e3) {
    super(),
      (this.isPerspectiveCamera = !0),
      (this.type = "PerspectiveCamera"),
      (this.fov = e),
      (this.zoom = 1),
      (this.near = n),
      (this.far = i),
      (this.focus = 10),
      (this.aspect = t),
      (this.view = null),
      (this.filmGauge = 35),
      (this.filmOffset = 0),
      this.updateProjectionMatrix();
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      (this.fov = e.fov),
      (this.zoom = e.zoom),
      (this.near = e.near),
      (this.far = e.far),
      (this.focus = e.focus),
      (this.aspect = e.aspect),
      (this.view = e.view === null ? null : Object.assign({}, e.view)),
      (this.filmGauge = e.filmGauge),
      (this.filmOffset = e.filmOffset),
      this
    );
  }
  setFocalLength(e) {
    const t = (0.5 * this.getFilmHeight()) / e;
    (this.fov = rl * 2 * Math.atan(t)), this.updateProjectionMatrix();
  }
  getFocalLength() {
    const e = Math.tan(Ys * 0.5 * this.fov);
    return (0.5 * this.getFilmHeight()) / e;
  }
  getEffectiveFOV() {
    return rl * 2 * Math.atan(Math.tan(Ys * 0.5 * this.fov) / this.zoom);
  }
  getFilmWidth() {
    return this.filmGauge * Math.min(this.aspect, 1);
  }
  getFilmHeight() {
    return this.filmGauge / Math.max(this.aspect, 1);
  }
  setViewOffset(e, t, n, i, r, a) {
    (this.aspect = e / t),
      this.view === null &&
        (this.view = {
          enabled: !0,
          fullWidth: 1,
          fullHeight: 1,
          offsetX: 0,
          offsetY: 0,
          width: 1,
          height: 1,
        }),
      (this.view.enabled = !0),
      (this.view.fullWidth = e),
      (this.view.fullHeight = t),
      (this.view.offsetX = n),
      (this.view.offsetY = i),
      (this.view.width = r),
      (this.view.height = a),
      this.updateProjectionMatrix();
  }
  clearViewOffset() {
    this.view !== null && (this.view.enabled = !1),
      this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    const e = this.near;
    let t = (e * Math.tan(Ys * 0.5 * this.fov)) / this.zoom,
      n = 2 * t,
      i = this.aspect * n,
      r = -0.5 * i;
    const a = this.view;
    if (this.view !== null && this.view.enabled) {
      const c = a.fullWidth,
        l = a.fullHeight;
      (r += (a.offsetX * i) / c),
        (t -= (a.offsetY * n) / l),
        (i *= a.width / c),
        (n *= a.height / l);
    }
    const s = this.filmOffset;
    s !== 0 && (r += (e * s) / this.getFilmWidth()),
      this.projectionMatrix.makePerspective(r, r + i, t, t - n, e, this.far),
      this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return (
      (t.object.fov = this.fov),
      (t.object.zoom = this.zoom),
      (t.object.near = this.near),
      (t.object.far = this.far),
      (t.object.focus = this.focus),
      (t.object.aspect = this.aspect),
      this.view !== null && (t.object.view = Object.assign({}, this.view)),
      (t.object.filmGauge = this.filmGauge),
      (t.object.filmOffset = this.filmOffset),
      t
    );
  }
}
const Ii = 90,
  zi = 1;
class uf extends pt {
  constructor(e, t, n) {
    super(), (this.type = "CubeCamera"), (this.renderTarget = n);
    const i = new Vt(Ii, zi, e, t);
    (i.layers = this.layers),
      i.up.set(0, -1, 0),
      i.lookAt(new R(1, 0, 0)),
      this.add(i);
    const r = new Vt(Ii, zi, e, t);
    (r.layers = this.layers),
      r.up.set(0, -1, 0),
      r.lookAt(new R(-1, 0, 0)),
      this.add(r);
    const a = new Vt(Ii, zi, e, t);
    (a.layers = this.layers),
      a.up.set(0, 0, 1),
      a.lookAt(new R(0, 1, 0)),
      this.add(a);
    const s = new Vt(Ii, zi, e, t);
    (s.layers = this.layers),
      s.up.set(0, 0, -1),
      s.lookAt(new R(0, -1, 0)),
      this.add(s);
    const c = new Vt(Ii, zi, e, t);
    (c.layers = this.layers),
      c.up.set(0, -1, 0),
      c.lookAt(new R(0, 0, 1)),
      this.add(c);
    const l = new Vt(Ii, zi, e, t);
    (l.layers = this.layers),
      l.up.set(0, -1, 0),
      l.lookAt(new R(0, 0, -1)),
      this.add(l);
  }
  update(e, t) {
    this.parent === null && this.updateMatrixWorld();
    const n = this.renderTarget,
      [i, r, a, s, c, l] = this.children,
      u = e.getRenderTarget(),
      h = e.toneMapping,
      f = e.xr.enabled;
    (e.toneMapping = An), (e.xr.enabled = !1);
    const m = n.texture.generateMipmaps;
    (n.texture.generateMipmaps = !1),
      e.setRenderTarget(n, 0),
      e.render(t, i),
      e.setRenderTarget(n, 1),
      e.render(t, r),
      e.setRenderTarget(n, 2),
      e.render(t, a),
      e.setRenderTarget(n, 3),
      e.render(t, s),
      e.setRenderTarget(n, 4),
      e.render(t, c),
      (n.texture.generateMipmaps = m),
      e.setRenderTarget(n, 5),
      e.render(t, l),
      e.setRenderTarget(u),
      (e.toneMapping = h),
      (e.xr.enabled = f),
      (n.texture.needsPMREMUpdate = !0);
  }
}
class Lc extends jt {
  constructor(e, t, n, i, r, a, s, c, l, u) {
    (e = e !== void 0 ? e : []),
      (t = t !== void 0 ? t : ji),
      super(e, t, n, i, r, a, s, c, l, u),
      (this.isCubeTexture = !0),
      (this.flipY = !1);
  }
  get images() {
    return this.image;
  }
  set images(e) {
    this.image = e;
  }
}
class hf extends nn {
  constructor(e, t = {}) {
    super(e, e, t), (this.isWebGLCubeRenderTarget = !0);
    const n = { width: e, height: e, depth: 1 },
      i = [n, n, n, n, n, n];
    (this.texture = new Lc(
      i,
      t.mapping,
      t.wrapS,
      t.wrapT,
      t.magFilter,
      t.minFilter,
      t.format,
      t.type,
      t.anisotropy,
      t.encoding
    )),
      (this.texture.isRenderTargetTexture = !0),
      (this.texture.generateMipmaps =
        t.generateMipmaps !== void 0 ? t.generateMipmaps : !1),
      (this.texture.minFilter = t.minFilter !== void 0 ? t.minFilter : kt);
  }
  fromEquirectangularTexture(e, t) {
    (this.texture.type = t.type),
      (this.texture.encoding = t.encoding),
      (this.texture.generateMipmaps = t.generateMipmaps),
      (this.texture.minFilter = t.minFilter),
      (this.texture.magFilter = t.magFilter);
    const n = {
        uniforms: { tEquirect: { value: null } },
        vertexShader: `

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,
        fragmentShader: `

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`,
      },
      i = new Br(5, 5, 5),
      r = new yt({
        name: "CubemapFromEquirect",
        uniforms: Ki(n.uniforms),
        vertexShader: n.vertexShader,
        fragmentShader: n.fragmentShader,
        side: Xt,
        blending: qn,
      });
    r.uniforms.tEquirect.value = t;
    const a = new En(i, r),
      s = t.minFilter;
    return (
      t.minFilter === Ds && (t.minFilter = kt),
      new uf(1, 10, this).update(e, a),
      (t.minFilter = s),
      a.geometry.dispose(),
      a.material.dispose(),
      this
    );
  }
  clear(e, t, n, i) {
    const r = e.getRenderTarget();
    for (let a = 0; a < 6; a++) e.setRenderTarget(this, a), e.clear(t, n, i);
    e.setRenderTarget(r);
  }
}
const ma = new R(),
  ff = new R(),
  df = new Gt();
class ii {
  constructor(e = new R(1, 0, 0), t = 0) {
    (this.isPlane = !0), (this.normal = e), (this.constant = t);
  }
  set(e, t) {
    return this.normal.copy(e), (this.constant = t), this;
  }
  setComponents(e, t, n, i) {
    return this.normal.set(e, t, n), (this.constant = i), this;
  }
  setFromNormalAndCoplanarPoint(e, t) {
    return this.normal.copy(e), (this.constant = -t.dot(this.normal)), this;
  }
  setFromCoplanarPoints(e, t, n) {
    const i = ma.subVectors(n, t).cross(ff.subVectors(e, t)).normalize();
    return this.setFromNormalAndCoplanarPoint(i, e), this;
  }
  copy(e) {
    return this.normal.copy(e.normal), (this.constant = e.constant), this;
  }
  normalize() {
    const e = 1 / this.normal.length();
    return this.normal.multiplyScalar(e), (this.constant *= e), this;
  }
  negate() {
    return (this.constant *= -1), this.normal.negate(), this;
  }
  distanceToPoint(e) {
    return this.normal.dot(e) + this.constant;
  }
  distanceToSphere(e) {
    return this.distanceToPoint(e.center) - e.radius;
  }
  projectPoint(e, t) {
    return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e);
  }
  intersectLine(e, t) {
    const n = e.delta(ma),
      i = this.normal.dot(n);
    if (i === 0)
      return this.distanceToPoint(e.start) === 0 ? t.copy(e.start) : null;
    const r = -(e.start.dot(this.normal) + this.constant) / i;
    return r < 0 || r > 1 ? null : t.copy(n).multiplyScalar(r).add(e.start);
  }
  intersectsLine(e) {
    const t = this.distanceToPoint(e.start),
      n = this.distanceToPoint(e.end);
    return (t < 0 && n > 0) || (n < 0 && t > 0);
  }
  intersectsBox(e) {
    return e.intersectsPlane(this);
  }
  intersectsSphere(e) {
    return e.intersectsPlane(this);
  }
  coplanarPoint(e) {
    return e.copy(this.normal).multiplyScalar(-this.constant);
  }
  applyMatrix4(e, t) {
    const n = t || df.getNormalMatrix(e),
      i = this.coplanarPoint(ma).applyMatrix4(e),
      r = this.normal.applyMatrix3(n).normalize();
    return (this.constant = -i.dot(r)), this;
  }
  translate(e) {
    return (this.constant -= e.dot(this.normal)), this;
  }
  equals(e) {
    return e.normal.equals(this.normal) && e.constant === this.constant;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const Fi = new Ur(),
  ls = new R();
class Dc {
  constructor(
    e = new ii(),
    t = new ii(),
    n = new ii(),
    i = new ii(),
    r = new ii(),
    a = new ii()
  ) {
    this.planes = [e, t, n, i, r, a];
  }
  set(e, t, n, i, r, a) {
    const s = this.planes;
    return (
      s[0].copy(e),
      s[1].copy(t),
      s[2].copy(n),
      s[3].copy(i),
      s[4].copy(r),
      s[5].copy(a),
      this
    );
  }
  copy(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++) t[n].copy(e.planes[n]);
    return this;
  }
  setFromProjectionMatrix(e) {
    const t = this.planes,
      n = e.elements,
      i = n[0],
      r = n[1],
      a = n[2],
      s = n[3],
      c = n[4],
      l = n[5],
      u = n[6],
      h = n[7],
      f = n[8],
      m = n[9],
      g = n[10],
      d = n[11],
      p = n[12],
      _ = n[13],
      v = n[14],
      S = n[15];
    return (
      t[0].setComponents(s - i, h - c, d - f, S - p).normalize(),
      t[1].setComponents(s + i, h + c, d + f, S + p).normalize(),
      t[2].setComponents(s + r, h + l, d + m, S + _).normalize(),
      t[3].setComponents(s - r, h - l, d - m, S - _).normalize(),
      t[4].setComponents(s - a, h - u, d - g, S - v).normalize(),
      t[5].setComponents(s + a, h + u, d + g, S + v).normalize(),
      this
    );
  }
  intersectsObject(e) {
    const t = e.geometry;
    return (
      t.boundingSphere === null && t.computeBoundingSphere(),
      Fi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),
      this.intersectsSphere(Fi)
    );
  }
  intersectsSprite(e) {
    return (
      Fi.center.set(0, 0, 0),
      (Fi.radius = 0.7071067811865476),
      Fi.applyMatrix4(e.matrixWorld),
      this.intersectsSphere(Fi)
    );
  }
  intersectsSphere(e) {
    const t = this.planes,
      n = e.center,
      i = -e.radius;
    for (let r = 0; r < 6; r++) if (t[r].distanceToPoint(n) < i) return !1;
    return !0;
  }
  intersectsBox(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++) {
      const i = t[n];
      if (
        ((ls.x = i.normal.x > 0 ? e.max.x : e.min.x),
        (ls.y = i.normal.y > 0 ? e.max.y : e.min.y),
        (ls.z = i.normal.z > 0 ? e.max.z : e.min.z),
        i.distanceToPoint(ls) < 0)
      )
        return !1;
    }
    return !0;
  }
  containsPoint(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++) if (t[n].distanceToPoint(e) < 0) return !1;
    return !0;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
function Rc() {
  let o = null,
    e = !1,
    t = null,
    n = null;
  function i(r, a) {
    t(r, a), (n = o.requestAnimationFrame(i));
  }
  return {
    start: function () {
      e !== !0 && t !== null && ((n = o.requestAnimationFrame(i)), (e = !0));
    },
    stop: function () {
      o.cancelAnimationFrame(n), (e = !1);
    },
    setAnimationLoop: function (r) {
      t = r;
    },
    setContext: function (r) {
      o = r;
    },
  };
}
function pf(o, e) {
  const t = e.isWebGL2,
    n = new WeakMap();
  function i(l, u) {
    const h = l.array,
      f = l.usage,
      m = o.createBuffer();
    o.bindBuffer(u, m), o.bufferData(u, h, f), l.onUploadCallback();
    let g;
    if (h instanceof Float32Array) g = 5126;
    else if (h instanceof Uint16Array)
      if (l.isFloat16BufferAttribute)
        if (t) g = 5131;
        else
          throw new Error(
            "THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2."
          );
      else g = 5123;
    else if (h instanceof Int16Array) g = 5122;
    else if (h instanceof Uint32Array) g = 5125;
    else if (h instanceof Int32Array) g = 5124;
    else if (h instanceof Int8Array) g = 5120;
    else if (h instanceof Uint8Array) g = 5121;
    else if (h instanceof Uint8ClampedArray) g = 5121;
    else
      throw new Error(
        "THREE.WebGLAttributes: Unsupported buffer data format: " + h
      );
    return {
      buffer: m,
      type: g,
      bytesPerElement: h.BYTES_PER_ELEMENT,
      version: l.version,
    };
  }
  function r(l, u, h) {
    const f = u.array,
      m = u.updateRange;
    o.bindBuffer(h, l),
      m.count === -1
        ? o.bufferSubData(h, 0, f)
        : (t
            ? o.bufferSubData(
                h,
                m.offset * f.BYTES_PER_ELEMENT,
                f,
                m.offset,
                m.count
              )
            : o.bufferSubData(
                h,
                m.offset * f.BYTES_PER_ELEMENT,
                f.subarray(m.offset, m.offset + m.count)
              ),
          (m.count = -1));
  }
  function a(l) {
    return l.isInterleavedBufferAttribute && (l = l.data), n.get(l);
  }
  function s(l) {
    l.isInterleavedBufferAttribute && (l = l.data);
    const u = n.get(l);
    u && (o.deleteBuffer(u.buffer), n.delete(l));
  }
  function c(l, u) {
    if (l.isGLBufferAttribute) {
      const f = n.get(l);
      (!f || f.version < l.version) &&
        n.set(l, {
          buffer: l.buffer,
          type: l.type,
          bytesPerElement: l.elementSize,
          version: l.version,
        });
      return;
    }
    l.isInterleavedBufferAttribute && (l = l.data);
    const h = n.get(l);
    h === void 0
      ? n.set(l, i(l, u))
      : h.version < l.version && (r(h.buffer, l, u), (h.version = l.version));
  }
  return { get: a, remove: s, update: c };
}
class Rs extends $t {
  constructor(e = 1, t = 1, n = 1, i = 1) {
    super(),
      (this.type = "PlaneGeometry"),
      (this.parameters = {
        width: e,
        height: t,
        widthSegments: n,
        heightSegments: i,
      });
    const r = e / 2,
      a = t / 2,
      s = Math.floor(n),
      c = Math.floor(i),
      l = s + 1,
      u = c + 1,
      h = e / s,
      f = t / c,
      m = [],
      g = [],
      d = [],
      p = [];
    for (let _ = 0; _ < u; _++) {
      const v = _ * f - a;
      for (let S = 0; S < l; S++) {
        const M = S * h - r;
        g.push(M, -v, 0), d.push(0, 0, 1), p.push(S / s), p.push(1 - _ / c);
      }
    }
    for (let _ = 0; _ < c; _++)
      for (let v = 0; v < s; v++) {
        const S = v + l * _,
          M = v + l * (_ + 1),
          y = v + 1 + l * (_ + 1),
          E = v + 1 + l * _;
        m.push(S, M, E), m.push(M, y, E);
      }
    this.setIndex(m),
      this.setAttribute("position", new mt(g, 3)),
      this.setAttribute("normal", new mt(d, 3)),
      this.setAttribute("uv", new mt(p, 2));
  }
  static fromJSON(e) {
    return new Rs(e.width, e.height, e.widthSegments, e.heightSegments);
  }
}
var mf = `#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,
  gf = `#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,
  _f = `#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,
  xf = `#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,
  vf = `#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,
  yf = `#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,
  Mf = "vec3 transformed = vec3( position );",
  Sf = `vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,
  bf = `vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,
  wf = `#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,
  Tf = `#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,
  Ef = `#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,
  Cf = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,
  Af = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,
  Pf = `#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,
  Lf = `#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,
  Df = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,
  Rf = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,
  If = `#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,
  zf = `#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,
  Ff = `#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,
  Of = `vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,
  Uf = `#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,
  Nf = `#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,
  Bf = `#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,
  kf = `#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,
  Vf = "gl_FragColor = linearToOutputTexel( gl_FragColor );",
  Gf = `vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,
  Hf = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,
  Wf = `#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,
  qf = `#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,
  Xf = `#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,
  Yf = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,
  jf = `#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,
  Zf = `#ifdef USE_FOG
	varying float vFogDepth;
#endif`,
  $f = `#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,
  Kf = `#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,
  Jf = `#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,
  Qf = `#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,
  ed = `#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,
  td = `LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,
  nd = `varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert
#define Material_LightProbeLOD( material )	(0)`,
  id = `uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,
  rd = `#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,
  sd = `ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,
  ad = `varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`,
  od = `BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,
  ld = `varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`,
  cd = `PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,
  ud = `struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,
  hd = `
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,
  fd = `#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,
  dd = `#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,
  pd = `#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,
  md = `#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,
  gd = `#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,
  _d = `#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,
  xd = `#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,
  vd = `#ifdef USE_MAP
	uniform sampler2D map;
#endif`,
  yd = `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,
  Md = `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,
  Sd = `float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,
  bd = `#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,
  wd = `#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,
  Td = `#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,
  Ed = `#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,
  Cd = `#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,
  Ad = `float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );
	vec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,
  Pd = `#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,
  Ld = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,
  Dd = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,
  Rd = `#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,
  Id = `#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,
  zd = `#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,
  Fd = `#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,
  Od = `#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,
  Ud = `#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,
  Nd = `#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,
  Bd = `vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,
  kd = `#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,
  Vd = `vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,
  Gd = `#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,
  Hd = `#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,
  Wd = `float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,
  qd = `#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,
  Xd = `#if NUM_SPOT_LIGHT_COORDS > 0
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
  uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,
  Yd = `#if NUM_SPOT_LIGHT_COORDS > 0
  uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,
  jd = `#if defined( USE_SHADOWMAP ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_COORDS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,
  Zd = `float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,
  $d = `#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,
  Kd = `#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,
  Jd = `#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,
  Qd = `#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,
  ep = `float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,
  tp = `#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,
  np = `#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,
  ip = `#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,
  rp = `#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,
  sp = `#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( attenuationDistance == 0.0 ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,
  ap = `#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,
  op = `#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,
  lp = `#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,
  cp = `#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,
  up = `#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,
  hp = `#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,
  fp = `#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;
const dp = `varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,
  pp = `uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	gl_FragColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		gl_FragColor = vec4( mix( pow( gl_FragColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), gl_FragColor.rgb * 0.0773993808, vec3( lessThanEqual( gl_FragColor.rgb, vec3( 0.04045 ) ) ) ), gl_FragColor.w );
	#endif
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,
  mp = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,
  gp = `#include <envmap_common_pars_fragment>
uniform float opacity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	vec3 vReflect = vWorldDirection;
	#include <envmap_fragment>
	gl_FragColor = envColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,
  _p = `#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,
  xp = `#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,
  vp = `#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,
  yp = `#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,
  Mp = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,
  Sp = `uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,
  bp = `uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,
  wp = `uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,
  Tp = `#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,
  Ep = `uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
  Cp = `#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,
  Ap = `#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
  Pp = `#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,
  Lp = `#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
  Dp = `#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,
  Rp = `#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,
  Ip = `#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,
  zp = `#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
  Fp = `#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,
  Op = `#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
  Up = `#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,
  Np = `#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
  Bp = `uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,
  kp = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,
  Vp = `#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,
  Gp = `uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,
  Hp = `uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,
  Wp = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,
  we = {
    alphamap_fragment: mf,
    alphamap_pars_fragment: gf,
    alphatest_fragment: _f,
    alphatest_pars_fragment: xf,
    aomap_fragment: vf,
    aomap_pars_fragment: yf,
    begin_vertex: Mf,
    beginnormal_vertex: Sf,
    bsdfs: bf,
    iridescence_fragment: wf,
    bumpmap_pars_fragment: Tf,
    clipping_planes_fragment: Ef,
    clipping_planes_pars_fragment: Cf,
    clipping_planes_pars_vertex: Af,
    clipping_planes_vertex: Pf,
    color_fragment: Lf,
    color_pars_fragment: Df,
    color_pars_vertex: Rf,
    color_vertex: If,
    common: zf,
    cube_uv_reflection_fragment: Ff,
    defaultnormal_vertex: Of,
    displacementmap_pars_vertex: Uf,
    displacementmap_vertex: Nf,
    emissivemap_fragment: Bf,
    emissivemap_pars_fragment: kf,
    encodings_fragment: Vf,
    encodings_pars_fragment: Gf,
    envmap_fragment: Hf,
    envmap_common_pars_fragment: Wf,
    envmap_pars_fragment: qf,
    envmap_pars_vertex: Xf,
    envmap_physical_pars_fragment: rd,
    envmap_vertex: Yf,
    fog_vertex: jf,
    fog_pars_vertex: Zf,
    fog_fragment: $f,
    fog_pars_fragment: Kf,
    gradientmap_pars_fragment: Jf,
    lightmap_fragment: Qf,
    lightmap_pars_fragment: ed,
    lights_lambert_fragment: td,
    lights_lambert_pars_fragment: nd,
    lights_pars_begin: id,
    lights_toon_fragment: sd,
    lights_toon_pars_fragment: ad,
    lights_phong_fragment: od,
    lights_phong_pars_fragment: ld,
    lights_physical_fragment: cd,
    lights_physical_pars_fragment: ud,
    lights_fragment_begin: hd,
    lights_fragment_maps: fd,
    lights_fragment_end: dd,
    logdepthbuf_fragment: pd,
    logdepthbuf_pars_fragment: md,
    logdepthbuf_pars_vertex: gd,
    logdepthbuf_vertex: _d,
    map_fragment: xd,
    map_pars_fragment: vd,
    map_particle_fragment: yd,
    map_particle_pars_fragment: Md,
    metalnessmap_fragment: Sd,
    metalnessmap_pars_fragment: bd,
    morphcolor_vertex: wd,
    morphnormal_vertex: Td,
    morphtarget_pars_vertex: Ed,
    morphtarget_vertex: Cd,
    normal_fragment_begin: Ad,
    normal_fragment_maps: Pd,
    normal_pars_fragment: Ld,
    normal_pars_vertex: Dd,
    normal_vertex: Rd,
    normalmap_pars_fragment: Id,
    clearcoat_normal_fragment_begin: zd,
    clearcoat_normal_fragment_maps: Fd,
    clearcoat_pars_fragment: Od,
    iridescence_pars_fragment: Ud,
    output_fragment: Nd,
    packing: Bd,
    premultiplied_alpha_fragment: kd,
    project_vertex: Vd,
    dithering_fragment: Gd,
    dithering_pars_fragment: Hd,
    roughnessmap_fragment: Wd,
    roughnessmap_pars_fragment: qd,
    shadowmap_pars_fragment: Xd,
    shadowmap_pars_vertex: Yd,
    shadowmap_vertex: jd,
    shadowmask_pars_fragment: Zd,
    skinbase_vertex: $d,
    skinning_pars_vertex: Kd,
    skinning_vertex: Jd,
    skinnormal_vertex: Qd,
    specularmap_fragment: ep,
    specularmap_pars_fragment: tp,
    tonemapping_fragment: np,
    tonemapping_pars_fragment: ip,
    transmission_fragment: rp,
    transmission_pars_fragment: sp,
    uv_pars_fragment: ap,
    uv_pars_vertex: op,
    uv_vertex: lp,
    uv2_pars_fragment: cp,
    uv2_pars_vertex: up,
    uv2_vertex: hp,
    worldpos_vertex: fp,
    background_vert: dp,
    background_frag: pp,
    cube_vert: mp,
    cube_frag: gp,
    depth_vert: _p,
    depth_frag: xp,
    distanceRGBA_vert: vp,
    distanceRGBA_frag: yp,
    equirect_vert: Mp,
    equirect_frag: Sp,
    linedashed_vert: bp,
    linedashed_frag: wp,
    meshbasic_vert: Tp,
    meshbasic_frag: Ep,
    meshlambert_vert: Cp,
    meshlambert_frag: Ap,
    meshmatcap_vert: Pp,
    meshmatcap_frag: Lp,
    meshnormal_vert: Dp,
    meshnormal_frag: Rp,
    meshphong_vert: Ip,
    meshphong_frag: zp,
    meshphysical_vert: Fp,
    meshphysical_frag: Op,
    meshtoon_vert: Up,
    meshtoon_frag: Np,
    points_vert: Bp,
    points_frag: kp,
    shadow_vert: Vp,
    shadow_frag: Gp,
    sprite_vert: Hp,
    sprite_frag: Wp,
  },
  te = {
    common: {
      diffuse: { value: new De(16777215) },
      opacity: { value: 1 },
      map: { value: null },
      uvTransform: { value: new Gt() },
      uv2Transform: { value: new Gt() },
      alphaMap: { value: null },
      alphaTest: { value: 0 },
    },
    specularmap: { specularMap: { value: null } },
    envmap: {
      envMap: { value: null },
      flipEnvMap: { value: -1 },
      reflectivity: { value: 1 },
      ior: { value: 1.5 },
      refractionRatio: { value: 0.98 },
    },
    aomap: { aoMap: { value: null }, aoMapIntensity: { value: 1 } },
    lightmap: { lightMap: { value: null }, lightMapIntensity: { value: 1 } },
    emissivemap: { emissiveMap: { value: null } },
    bumpmap: { bumpMap: { value: null }, bumpScale: { value: 1 } },
    normalmap: {
      normalMap: { value: null },
      normalScale: { value: new Se(1, 1) },
    },
    displacementmap: {
      displacementMap: { value: null },
      displacementScale: { value: 1 },
      displacementBias: { value: 0 },
    },
    roughnessmap: { roughnessMap: { value: null } },
    metalnessmap: { metalnessMap: { value: null } },
    gradientmap: { gradientMap: { value: null } },
    fog: {
      fogDensity: { value: 25e-5 },
      fogNear: { value: 1 },
      fogFar: { value: 2e3 },
      fogColor: { value: new De(16777215) },
    },
    lights: {
      ambientLightColor: { value: [] },
      lightProbe: { value: [] },
      directionalLights: {
        value: [],
        properties: { direction: {}, color: {} },
      },
      directionalLightShadows: {
        value: [],
        properties: {
          shadowBias: {},
          shadowNormalBias: {},
          shadowRadius: {},
          shadowMapSize: {},
        },
      },
      directionalShadowMap: { value: [] },
      directionalShadowMatrix: { value: [] },
      spotLights: {
        value: [],
        properties: {
          color: {},
          position: {},
          direction: {},
          distance: {},
          coneCos: {},
          penumbraCos: {},
          decay: {},
        },
      },
      spotLightShadows: {
        value: [],
        properties: {
          shadowBias: {},
          shadowNormalBias: {},
          shadowRadius: {},
          shadowMapSize: {},
        },
      },
      spotLightMap: { value: [] },
      spotShadowMap: { value: [] },
      spotLightMatrix: { value: [] },
      pointLights: {
        value: [],
        properties: { color: {}, position: {}, decay: {}, distance: {} },
      },
      pointLightShadows: {
        value: [],
        properties: {
          shadowBias: {},
          shadowNormalBias: {},
          shadowRadius: {},
          shadowMapSize: {},
          shadowCameraNear: {},
          shadowCameraFar: {},
        },
      },
      pointShadowMap: { value: [] },
      pointShadowMatrix: { value: [] },
      hemisphereLights: {
        value: [],
        properties: { direction: {}, skyColor: {}, groundColor: {} },
      },
      rectAreaLights: {
        value: [],
        properties: { color: {}, position: {}, width: {}, height: {} },
      },
      ltc_1: { value: null },
      ltc_2: { value: null },
    },
    points: {
      diffuse: { value: new De(16777215) },
      opacity: { value: 1 },
      size: { value: 1 },
      scale: { value: 1 },
      map: { value: null },
      alphaMap: { value: null },
      alphaTest: { value: 0 },
      uvTransform: { value: new Gt() },
    },
    sprite: {
      diffuse: { value: new De(16777215) },
      opacity: { value: 1 },
      center: { value: new Se(0.5, 0.5) },
      rotation: { value: 0 },
      map: { value: null },
      alphaMap: { value: null },
      alphaTest: { value: 0 },
      uvTransform: { value: new Gt() },
    },
  },
  ln = {
    basic: {
      uniforms: lt([
        te.common,
        te.specularmap,
        te.envmap,
        te.aomap,
        te.lightmap,
        te.fog,
      ]),
      vertexShader: we.meshbasic_vert,
      fragmentShader: we.meshbasic_frag,
    },
    lambert: {
      uniforms: lt([
        te.common,
        te.specularmap,
        te.envmap,
        te.aomap,
        te.lightmap,
        te.emissivemap,
        te.bumpmap,
        te.normalmap,
        te.displacementmap,
        te.fog,
        te.lights,
        { emissive: { value: new De(0) } },
      ]),
      vertexShader: we.meshlambert_vert,
      fragmentShader: we.meshlambert_frag,
    },
    phong: {
      uniforms: lt([
        te.common,
        te.specularmap,
        te.envmap,
        te.aomap,
        te.lightmap,
        te.emissivemap,
        te.bumpmap,
        te.normalmap,
        te.displacementmap,
        te.fog,
        te.lights,
        {
          emissive: { value: new De(0) },
          specular: { value: new De(1118481) },
          shininess: { value: 30 },
        },
      ]),
      vertexShader: we.meshphong_vert,
      fragmentShader: we.meshphong_frag,
    },
    standard: {
      uniforms: lt([
        te.common,
        te.envmap,
        te.aomap,
        te.lightmap,
        te.emissivemap,
        te.bumpmap,
        te.normalmap,
        te.displacementmap,
        te.roughnessmap,
        te.metalnessmap,
        te.fog,
        te.lights,
        {
          emissive: { value: new De(0) },
          roughness: { value: 1 },
          metalness: { value: 0 },
          envMapIntensity: { value: 1 },
        },
      ]),
      vertexShader: we.meshphysical_vert,
      fragmentShader: we.meshphysical_frag,
    },
    toon: {
      uniforms: lt([
        te.common,
        te.aomap,
        te.lightmap,
        te.emissivemap,
        te.bumpmap,
        te.normalmap,
        te.displacementmap,
        te.gradientmap,
        te.fog,
        te.lights,
        { emissive: { value: new De(0) } },
      ]),
      vertexShader: we.meshtoon_vert,
      fragmentShader: we.meshtoon_frag,
    },
    matcap: {
      uniforms: lt([
        te.common,
        te.bumpmap,
        te.normalmap,
        te.displacementmap,
        te.fog,
        { matcap: { value: null } },
      ]),
      vertexShader: we.meshmatcap_vert,
      fragmentShader: we.meshmatcap_frag,
    },
    points: {
      uniforms: lt([te.points, te.fog]),
      vertexShader: we.points_vert,
      fragmentShader: we.points_frag,
    },
    dashed: {
      uniforms: lt([
        te.common,
        te.fog,
        {
          scale: { value: 1 },
          dashSize: { value: 1 },
          totalSize: { value: 2 },
        },
      ]),
      vertexShader: we.linedashed_vert,
      fragmentShader: we.linedashed_frag,
    },
    depth: {
      uniforms: lt([te.common, te.displacementmap]),
      vertexShader: we.depth_vert,
      fragmentShader: we.depth_frag,
    },
    normal: {
      uniforms: lt([
        te.common,
        te.bumpmap,
        te.normalmap,
        te.displacementmap,
        { opacity: { value: 1 } },
      ]),
      vertexShader: we.meshnormal_vert,
      fragmentShader: we.meshnormal_frag,
    },
    sprite: {
      uniforms: lt([te.sprite, te.fog]),
      vertexShader: we.sprite_vert,
      fragmentShader: we.sprite_frag,
    },
    background: {
      uniforms: { uvTransform: { value: new Gt() }, t2D: { value: null } },
      vertexShader: we.background_vert,
      fragmentShader: we.background_frag,
    },
    cube: {
      uniforms: lt([te.envmap, { opacity: { value: 1 } }]),
      vertexShader: we.cube_vert,
      fragmentShader: we.cube_frag,
    },
    equirect: {
      uniforms: { tEquirect: { value: null } },
      vertexShader: we.equirect_vert,
      fragmentShader: we.equirect_frag,
    },
    distanceRGBA: {
      uniforms: lt([
        te.common,
        te.displacementmap,
        {
          referencePosition: { value: new R() },
          nearDistance: { value: 1 },
          farDistance: { value: 1e3 },
        },
      ]),
      vertexShader: we.distanceRGBA_vert,
      fragmentShader: we.distanceRGBA_frag,
    },
    shadow: {
      uniforms: lt([
        te.lights,
        te.fog,
        { color: { value: new De(0) }, opacity: { value: 1 } },
      ]),
      vertexShader: we.shadow_vert,
      fragmentShader: we.shadow_frag,
    },
  };
ln.physical = {
  uniforms: lt([
    ln.standard.uniforms,
    {
      clearcoat: { value: 0 },
      clearcoatMap: { value: null },
      clearcoatRoughness: { value: 0 },
      clearcoatRoughnessMap: { value: null },
      clearcoatNormalScale: { value: new Se(1, 1) },
      clearcoatNormalMap: { value: null },
      iridescence: { value: 0 },
      iridescenceMap: { value: null },
      iridescenceIOR: { value: 1.3 },
      iridescenceThicknessMinimum: { value: 100 },
      iridescenceThicknessMaximum: { value: 400 },
      iridescenceThicknessMap: { value: null },
      sheen: { value: 0 },
      sheenColor: { value: new De(0) },
      sheenColorMap: { value: null },
      sheenRoughness: { value: 1 },
      sheenRoughnessMap: { value: null },
      transmission: { value: 0 },
      transmissionMap: { value: null },
      transmissionSamplerSize: { value: new Se() },
      transmissionSamplerMap: { value: null },
      thickness: { value: 0 },
      thicknessMap: { value: null },
      attenuationDistance: { value: 0 },
      attenuationColor: { value: new De(0) },
      specularIntensity: { value: 1 },
      specularIntensityMap: { value: null },
      specularColor: { value: new De(1, 1, 1) },
      specularColorMap: { value: null },
    },
  ]),
  vertexShader: we.meshphysical_vert,
  fragmentShader: we.meshphysical_frag,
};
function qp(o, e, t, n, i, r) {
  const a = new De(0);
  let s = i === !0 ? 0 : 1,
    c,
    l,
    u = null,
    h = 0,
    f = null;
  function m(d, p) {
    let _ = !1,
      v = p.isScene === !0 ? p.background : null;
    v && v.isTexture && (v = e.get(v));
    const S = o.xr,
      M = S.getSession && S.getSession();
    M && M.environmentBlendMode === "additive" && (v = null),
      v === null ? g(a, s) : v && v.isColor && (g(v, 1), (_ = !0)),
      (o.autoClear || _) &&
        o.clear(o.autoClearColor, o.autoClearDepth, o.autoClearStencil),
      v && (v.isCubeTexture || v.mapping === Ls)
        ? (l === void 0 &&
            ((l = new En(
              new Br(1, 1, 1),
              new yt({
                name: "BackgroundCubeMaterial",
                uniforms: Ki(ln.cube.uniforms),
                vertexShader: ln.cube.vertexShader,
                fragmentShader: ln.cube.fragmentShader,
                side: Xt,
                depthTest: !1,
                depthWrite: !1,
                fog: !1,
              })
            )),
            l.geometry.deleteAttribute("normal"),
            l.geometry.deleteAttribute("uv"),
            (l.onBeforeRender = function (y, E, A) {
              this.matrixWorld.copyPosition(A.matrixWorld);
            }),
            Object.defineProperty(l.material, "envMap", {
              get: function () {
                return this.uniforms.envMap.value;
              },
            }),
            n.update(l)),
          (l.material.uniforms.envMap.value = v),
          (l.material.uniforms.flipEnvMap.value =
            v.isCubeTexture && v.isRenderTargetTexture === !1 ? -1 : 1),
          (u !== v || h !== v.version || f !== o.toneMapping) &&
            ((l.material.needsUpdate = !0),
            (u = v),
            (h = v.version),
            (f = o.toneMapping)),
          l.layers.enableAll(),
          d.unshift(l, l.geometry, l.material, 0, 0, null))
        : v &&
          v.isTexture &&
          (c === void 0 &&
            ((c = new En(
              new Rs(2, 2),
              new yt({
                name: "BackgroundMaterial",
                uniforms: Ki(ln.background.uniforms),
                vertexShader: ln.background.vertexShader,
                fragmentShader: ln.background.fragmentShader,
                side: Yi,
                depthTest: !1,
                depthWrite: !1,
                fog: !1,
              })
            )),
            c.geometry.deleteAttribute("normal"),
            Object.defineProperty(c.material, "map", {
              get: function () {
                return this.uniforms.t2D.value;
              },
            }),
            n.update(c)),
          (c.material.uniforms.t2D.value = v),
          v.matrixAutoUpdate === !0 && v.updateMatrix(),
          c.material.uniforms.uvTransform.value.copy(v.matrix),
          (u !== v || h !== v.version || f !== o.toneMapping) &&
            ((c.material.needsUpdate = !0),
            (u = v),
            (h = v.version),
            (f = o.toneMapping)),
          c.layers.enableAll(),
          d.unshift(c, c.geometry, c.material, 0, 0, null));
  }
  function g(d, p) {
    t.buffers.color.setClear(d.r, d.g, d.b, p, r);
  }
  return {
    getClearColor: function () {
      return a;
    },
    setClearColor: function (d, p = 1) {
      a.set(d), (s = p), g(a, s);
    },
    getClearAlpha: function () {
      return s;
    },
    setClearAlpha: function (d) {
      (s = d), g(a, s);
    },
    render: m,
  };
}
function Xp(o, e, t, n) {
  const i = o.getParameter(34921),
    r = n.isWebGL2 ? null : e.get("OES_vertex_array_object"),
    a = n.isWebGL2 || r !== null,
    s = {},
    c = p(null);
  let l = c,
    u = !1;
  function h(D, B, Y, X, k) {
    let z = !1;
    if (a) {
      const U = d(X, Y, B);
      l !== U && ((l = U), m(l.object)),
        (z = _(D, X, Y, k)),
        z && v(D, X, Y, k);
    } else {
      const U = B.wireframe === !0;
      (l.geometry !== X.id || l.program !== Y.id || l.wireframe !== U) &&
        ((l.geometry = X.id), (l.program = Y.id), (l.wireframe = U), (z = !0));
    }
    k !== null && t.update(k, 34963),
      (z || u) &&
        ((u = !1),
        x(D, B, Y, X),
        k !== null && o.bindBuffer(34963, t.get(k).buffer));
  }
  function f() {
    return n.isWebGL2 ? o.createVertexArray() : r.createVertexArrayOES();
  }
  function m(D) {
    return n.isWebGL2 ? o.bindVertexArray(D) : r.bindVertexArrayOES(D);
  }
  function g(D) {
    return n.isWebGL2 ? o.deleteVertexArray(D) : r.deleteVertexArrayOES(D);
  }
  function d(D, B, Y) {
    const X = Y.wireframe === !0;
    let k = s[D.id];
    k === void 0 && ((k = {}), (s[D.id] = k));
    let z = k[B.id];
    z === void 0 && ((z = {}), (k[B.id] = z));
    let U = z[X];
    return U === void 0 && ((U = p(f())), (z[X] = U)), U;
  }
  function p(D) {
    const B = [],
      Y = [],
      X = [];
    for (let k = 0; k < i; k++) (B[k] = 0), (Y[k] = 0), (X[k] = 0);
    return {
      geometry: null,
      program: null,
      wireframe: !1,
      newAttributes: B,
      enabledAttributes: Y,
      attributeDivisors: X,
      object: D,
      attributes: {},
      index: null,
    };
  }
  function _(D, B, Y, X) {
    const k = l.attributes,
      z = B.attributes;
    let U = 0;
    const J = Y.getAttributes();
    for (const Z in J)
      if (J[Z].location >= 0) {
        const ie = k[Z];
        let de = z[Z];
        if (
          (de === void 0 &&
            (Z === "instanceMatrix" &&
              D.instanceMatrix &&
              (de = D.instanceMatrix),
            Z === "instanceColor" && D.instanceColor && (de = D.instanceColor)),
          ie === void 0 || ie.attribute !== de || (de && ie.data !== de.data))
        )
          return !0;
        U++;
      }
    return l.attributesNum !== U || l.index !== X;
  }
  function v(D, B, Y, X) {
    const k = {},
      z = B.attributes;
    let U = 0;
    const J = Y.getAttributes();
    for (const Z in J)
      if (J[Z].location >= 0) {
        let ie = z[Z];
        ie === void 0 &&
          (Z === "instanceMatrix" &&
            D.instanceMatrix &&
            (ie = D.instanceMatrix),
          Z === "instanceColor" && D.instanceColor && (ie = D.instanceColor));
        const de = {};
        (de.attribute = ie),
          ie && ie.data && (de.data = ie.data),
          (k[Z] = de),
          U++;
      }
    (l.attributes = k), (l.attributesNum = U), (l.index = X);
  }
  function S() {
    const D = l.newAttributes;
    for (let B = 0, Y = D.length; B < Y; B++) D[B] = 0;
  }
  function M(D) {
    y(D, 0);
  }
  function y(D, B) {
    const Y = l.newAttributes,
      X = l.enabledAttributes,
      k = l.attributeDivisors;
    (Y[D] = 1),
      X[D] === 0 && (o.enableVertexAttribArray(D), (X[D] = 1)),
      k[D] !== B &&
        ((n.isWebGL2 ? o : e.get("ANGLE_instanced_arrays"))[
          n.isWebGL2 ? "vertexAttribDivisor" : "vertexAttribDivisorANGLE"
        ](D, B),
        (k[D] = B));
  }
  function E() {
    const D = l.newAttributes,
      B = l.enabledAttributes;
    for (let Y = 0, X = B.length; Y < X; Y++)
      B[Y] !== D[Y] && (o.disableVertexAttribArray(Y), (B[Y] = 0));
  }
  function A(D, B, Y, X, k, z) {
    n.isWebGL2 === !0 && (Y === 5124 || Y === 5125)
      ? o.vertexAttribIPointer(D, B, Y, k, z)
      : o.vertexAttribPointer(D, B, Y, X, k, z);
  }
  function x(D, B, Y, X) {
    if (
      n.isWebGL2 === !1 &&
      (D.isInstancedMesh || X.isInstancedBufferGeometry) &&
      e.get("ANGLE_instanced_arrays") === null
    )
      return;
    S();
    const k = X.attributes,
      z = Y.getAttributes(),
      U = B.defaultAttributeValues;
    for (const J in z) {
      const Z = z[J];
      if (Z.location >= 0) {
        let $ = k[J];
        if (
          ($ === void 0 &&
            (J === "instanceMatrix" &&
              D.instanceMatrix &&
              ($ = D.instanceMatrix),
            J === "instanceColor" && D.instanceColor && ($ = D.instanceColor)),
          $ !== void 0)
        ) {
          const ie = $.normalized,
            de = $.itemSize,
            j = t.get($);
          if (j === void 0) continue;
          const Ie = j.buffer,
            me = j.type,
            _e = j.bytesPerElement;
          if ($.isInterleavedBufferAttribute) {
            const le = $.data,
              Ue = le.stride,
              be = $.offset;
            if (le.isInstancedInterleavedBuffer) {
              for (let pe = 0; pe < Z.locationSize; pe++)
                y(Z.location + pe, le.meshPerAttribute);
              D.isInstancedMesh !== !0 &&
                X._maxInstanceCount === void 0 &&
                (X._maxInstanceCount = le.meshPerAttribute * le.count);
            } else
              for (let pe = 0; pe < Z.locationSize; pe++) M(Z.location + pe);
            o.bindBuffer(34962, Ie);
            for (let pe = 0; pe < Z.locationSize; pe++)
              A(
                Z.location + pe,
                de / Z.locationSize,
                me,
                ie,
                Ue * _e,
                (be + (de / Z.locationSize) * pe) * _e
              );
          } else {
            if ($.isInstancedBufferAttribute) {
              for (let le = 0; le < Z.locationSize; le++)
                y(Z.location + le, $.meshPerAttribute);
              D.isInstancedMesh !== !0 &&
                X._maxInstanceCount === void 0 &&
                (X._maxInstanceCount = $.meshPerAttribute * $.count);
            } else
              for (let le = 0; le < Z.locationSize; le++) M(Z.location + le);
            o.bindBuffer(34962, Ie);
            for (let le = 0; le < Z.locationSize; le++)
              A(
                Z.location + le,
                de / Z.locationSize,
                me,
                ie,
                de * _e,
                (de / Z.locationSize) * le * _e
              );
          }
        } else if (U !== void 0) {
          const ie = U[J];
          if (ie !== void 0)
            switch (ie.length) {
              case 2:
                o.vertexAttrib2fv(Z.location, ie);
                break;
              case 3:
                o.vertexAttrib3fv(Z.location, ie);
                break;
              case 4:
                o.vertexAttrib4fv(Z.location, ie);
                break;
              default:
                o.vertexAttrib1fv(Z.location, ie);
            }
        }
      }
    }
    E();
  }
  function w() {
    K();
    for (const D in s) {
      const B = s[D];
      for (const Y in B) {
        const X = B[Y];
        for (const k in X) g(X[k].object), delete X[k];
        delete B[Y];
      }
      delete s[D];
    }
  }
  function P(D) {
    if (s[D.id] === void 0) return;
    const B = s[D.id];
    for (const Y in B) {
      const X = B[Y];
      for (const k in X) g(X[k].object), delete X[k];
      delete B[Y];
    }
    delete s[D.id];
  }
  function W(D) {
    for (const B in s) {
      const Y = s[B];
      if (Y[D.id] === void 0) continue;
      const X = Y[D.id];
      for (const k in X) g(X[k].object), delete X[k];
      delete Y[D.id];
    }
  }
  function K() {
    O(), (u = !0), l !== c && ((l = c), m(l.object));
  }
  function O() {
    (c.geometry = null), (c.program = null), (c.wireframe = !1);
  }
  return {
    setup: h,
    reset: K,
    resetDefaultState: O,
    dispose: w,
    releaseStatesOfGeometry: P,
    releaseStatesOfProgram: W,
    initAttributes: S,
    enableAttribute: M,
    disableUnusedAttributes: E,
  };
}
function Yp(o, e, t, n) {
  const i = n.isWebGL2;
  let r;
  function a(l) {
    r = l;
  }
  function s(l, u) {
    o.drawArrays(r, l, u), t.update(u, r, 1);
  }
  function c(l, u, h) {
    if (h === 0) return;
    let f, m;
    if (i) (f = o), (m = "drawArraysInstanced");
    else if (
      ((f = e.get("ANGLE_instanced_arrays")),
      (m = "drawArraysInstancedANGLE"),
      f === null)
    ) {
      console.error(
        "THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays."
      );
      return;
    }
    f[m](r, l, u, h), t.update(u, r, h);
  }
  (this.setMode = a), (this.render = s), (this.renderInstances = c);
}
function jp(o, e, t) {
  let n;
  function i() {
    if (n !== void 0) return n;
    if (e.has("EXT_texture_filter_anisotropic") === !0) {
      const A = e.get("EXT_texture_filter_anisotropic");
      n = o.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
    } else n = 0;
    return n;
  }
  function r(A) {
    if (A === "highp") {
      if (
        o.getShaderPrecisionFormat(35633, 36338).precision > 0 &&
        o.getShaderPrecisionFormat(35632, 36338).precision > 0
      )
        return "highp";
      A = "mediump";
    }
    return A === "mediump" &&
      o.getShaderPrecisionFormat(35633, 36337).precision > 0 &&
      o.getShaderPrecisionFormat(35632, 36337).precision > 0
      ? "mediump"
      : "lowp";
  }
  const a =
    (typeof WebGL2RenderingContext < "u" &&
      o instanceof WebGL2RenderingContext) ||
    (typeof WebGL2ComputeRenderingContext < "u" &&
      o instanceof WebGL2ComputeRenderingContext);
  let s = t.precision !== void 0 ? t.precision : "highp";
  const c = r(s);
  c !== s &&
    (console.warn(
      "THREE.WebGLRenderer:",
      s,
      "not supported, using",
      c,
      "instead."
    ),
    (s = c));
  const l = a || e.has("WEBGL_draw_buffers"),
    u = t.logarithmicDepthBuffer === !0,
    h = o.getParameter(34930),
    f = o.getParameter(35660),
    m = o.getParameter(3379),
    g = o.getParameter(34076),
    d = o.getParameter(34921),
    p = o.getParameter(36347),
    _ = o.getParameter(36348),
    v = o.getParameter(36349),
    S = f > 0,
    M = a || e.has("OES_texture_float"),
    y = S && M,
    E = a ? o.getParameter(36183) : 0;
  return {
    isWebGL2: a,
    drawBuffers: l,
    getMaxAnisotropy: i,
    getMaxPrecision: r,
    precision: s,
    logarithmicDepthBuffer: u,
    maxTextures: h,
    maxVertexTextures: f,
    maxTextureSize: m,
    maxCubemapSize: g,
    maxAttributes: d,
    maxVertexUniforms: p,
    maxVaryings: _,
    maxFragmentUniforms: v,
    vertexTextures: S,
    floatFragmentTextures: M,
    floatVertexTextures: y,
    maxSamples: E,
  };
}
function Zp(o) {
  const e = this;
  let t = null,
    n = 0,
    i = !1,
    r = !1;
  const a = new ii(),
    s = new Gt(),
    c = { value: null, needsUpdate: !1 };
  (this.uniform = c),
    (this.numPlanes = 0),
    (this.numIntersection = 0),
    (this.init = function (h, f, m) {
      const g = h.length !== 0 || f || n !== 0 || i;
      return (i = f), (t = u(h, m, 0)), (n = h.length), g;
    }),
    (this.beginShadows = function () {
      (r = !0), u(null);
    }),
    (this.endShadows = function () {
      (r = !1), l();
    }),
    (this.setState = function (h, f, m) {
      const g = h.clippingPlanes,
        d = h.clipIntersection,
        p = h.clipShadows,
        _ = o.get(h);
      if (!i || g === null || g.length === 0 || (r && !p)) r ? u(null) : l();
      else {
        const v = r ? 0 : n,
          S = v * 4;
        let M = _.clippingState || null;
        (c.value = M), (M = u(g, f, S, m));
        for (let y = 0; y !== S; ++y) M[y] = t[y];
        (_.clippingState = M),
          (this.numIntersection = d ? this.numPlanes : 0),
          (this.numPlanes += v);
      }
    });
  function l() {
    c.value !== t && ((c.value = t), (c.needsUpdate = n > 0)),
      (e.numPlanes = n),
      (e.numIntersection = 0);
  }
  function u(h, f, m, g) {
    const d = h !== null ? h.length : 0;
    let p = null;
    if (d !== 0) {
      if (((p = c.value), g !== !0 || p === null)) {
        const _ = m + d * 4,
          v = f.matrixWorldInverse;
        s.getNormalMatrix(v),
          (p === null || p.length < _) && (p = new Float32Array(_));
        for (let S = 0, M = m; S !== d; ++S, M += 4)
          a.copy(h[S]).applyMatrix4(v, s),
            a.normal.toArray(p, M),
            (p[M + 3] = a.constant);
      }
      (c.value = p), (c.needsUpdate = !0);
    }
    return (e.numPlanes = d), (e.numIntersection = 0), p;
  }
}
function $p(o) {
  let e = new WeakMap();
  function t(a, s) {
    return s === Ia ? (a.mapping = ji) : s === za && (a.mapping = Zi), a;
  }
  function n(a) {
    if (a && a.isTexture && a.isRenderTargetTexture === !1) {
      const s = a.mapping;
      if (s === Ia || s === za)
        if (e.has(a)) {
          const c = e.get(a).texture;
          return t(c, a.mapping);
        } else {
          const c = a.image;
          if (c && c.height > 0) {
            const l = new hf(c.height / 2);
            return (
              l.fromEquirectangularTexture(o, a),
              e.set(a, l),
              a.addEventListener("dispose", i),
              t(l.texture, a.mapping)
            );
          } else return null;
        }
    }
    return a;
  }
  function i(a) {
    const s = a.target;
    s.removeEventListener("dispose", i);
    const c = e.get(s);
    c !== void 0 && (e.delete(s), c.dispose());
  }
  function r() {
    e = new WeakMap();
  }
  return { get: n, dispose: r };
}
class so extends Pc {
  constructor(e = -1, t = 1, n = 1, i = -1, r = 0.1, a = 2e3) {
    super(),
      (this.isOrthographicCamera = !0),
      (this.type = "OrthographicCamera"),
      (this.zoom = 1),
      (this.view = null),
      (this.left = e),
      (this.right = t),
      (this.top = n),
      (this.bottom = i),
      (this.near = r),
      (this.far = a),
      this.updateProjectionMatrix();
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      (this.left = e.left),
      (this.right = e.right),
      (this.top = e.top),
      (this.bottom = e.bottom),
      (this.near = e.near),
      (this.far = e.far),
      (this.zoom = e.zoom),
      (this.view = e.view === null ? null : Object.assign({}, e.view)),
      this
    );
  }
  setViewOffset(e, t, n, i, r, a) {
    this.view === null &&
      (this.view = {
        enabled: !0,
        fullWidth: 1,
        fullHeight: 1,
        offsetX: 0,
        offsetY: 0,
        width: 1,
        height: 1,
      }),
      (this.view.enabled = !0),
      (this.view.fullWidth = e),
      (this.view.fullHeight = t),
      (this.view.offsetX = n),
      (this.view.offsetY = i),
      (this.view.width = r),
      (this.view.height = a),
      this.updateProjectionMatrix();
  }
  clearViewOffset() {
    this.view !== null && (this.view.enabled = !1),
      this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    const e = (this.right - this.left) / (2 * this.zoom),
      t = (this.top - this.bottom) / (2 * this.zoom),
      n = (this.right + this.left) / 2,
      i = (this.top + this.bottom) / 2;
    let r = n - e,
      a = n + e,
      s = i + t,
      c = i - t;
    if (this.view !== null && this.view.enabled) {
      const l = (this.right - this.left) / this.view.fullWidth / this.zoom,
        u = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
      (r += l * this.view.offsetX),
        (a = r + l * this.view.width),
        (s -= u * this.view.offsetY),
        (c = s - u * this.view.height);
    }
    this.projectionMatrix.makeOrthographic(r, a, s, c, this.near, this.far),
      this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return (
      (t.object.zoom = this.zoom),
      (t.object.left = this.left),
      (t.object.right = this.right),
      (t.object.top = this.top),
      (t.object.bottom = this.bottom),
      (t.object.near = this.near),
      (t.object.far = this.far),
      this.view !== null && (t.object.view = Object.assign({}, this.view)),
      t
    );
  }
}
const Bi = 4,
  _l = [0.125, 0.215, 0.35, 0.446, 0.526, 0.582],
  ai = 20,
  ga = new so(),
  xl = new De();
let _a = null;
const ri = (1 + Math.sqrt(5)) / 2,
  Oi = 1 / ri,
  vl = [
    new R(1, 1, 1),
    new R(-1, 1, 1),
    new R(1, 1, -1),
    new R(-1, 1, -1),
    new R(0, ri, Oi),
    new R(0, ri, -Oi),
    new R(Oi, 0, ri),
    new R(-Oi, 0, ri),
    new R(ri, Oi, 0),
    new R(-ri, Oi, 0),
  ];
class yl {
  constructor(e) {
    (this._renderer = e),
      (this._pingPongRenderTarget = null),
      (this._lodMax = 0),
      (this._cubeSize = 0),
      (this._lodPlanes = []),
      (this._sizeLods = []),
      (this._sigmas = []),
      (this._blurMaterial = null),
      (this._cubemapMaterial = null),
      (this._equirectMaterial = null),
      this._compileMaterial(this._blurMaterial);
  }
  fromScene(e, t = 0, n = 0.1, i = 100) {
    (_a = this._renderer.getRenderTarget()), this._setSize(256);
    const r = this._allocateTargets();
    return (
      (r.depthBuffer = !0),
      this._sceneToCubeUV(e, n, i, r),
      t > 0 && this._blur(r, 0, 0, t),
      this._applyPMREM(r),
      this._cleanup(r),
      r
    );
  }
  fromEquirectangular(e, t = null) {
    return this._fromTexture(e, t);
  }
  fromCubemap(e, t = null) {
    return this._fromTexture(e, t);
  }
  compileCubemapShader() {
    this._cubemapMaterial === null &&
      ((this._cubemapMaterial = bl()),
      this._compileMaterial(this._cubemapMaterial));
  }
  compileEquirectangularShader() {
    this._equirectMaterial === null &&
      ((this._equirectMaterial = Sl()),
      this._compileMaterial(this._equirectMaterial));
  }
  dispose() {
    this._dispose(),
      this._cubemapMaterial !== null && this._cubemapMaterial.dispose(),
      this._equirectMaterial !== null && this._equirectMaterial.dispose();
  }
  _setSize(e) {
    (this._lodMax = Math.floor(Math.log2(e))),
      (this._cubeSize = Math.pow(2, this._lodMax));
  }
  _dispose() {
    this._blurMaterial !== null && this._blurMaterial.dispose(),
      this._pingPongRenderTarget !== null &&
        this._pingPongRenderTarget.dispose();
    for (let e = 0; e < this._lodPlanes.length; e++)
      this._lodPlanes[e].dispose();
  }
  _cleanup(e) {
    this._renderer.setRenderTarget(_a),
      (e.scissorTest = !1),
      cs(e, 0, 0, e.width, e.height);
  }
  _fromTexture(e, t) {
    e.mapping === ji || e.mapping === Zi
      ? this._setSize(
          e.image.length === 0 ? 16 : e.image[0].width || e.image[0].image.width
        )
      : this._setSize(e.image.width / 4),
      (_a = this._renderer.getRenderTarget());
    const n = t || this._allocateTargets();
    return (
      this._textureToCubeUV(e, n), this._applyPMREM(n), this._cleanup(n), n
    );
  }
  _allocateTargets() {
    const e = 3 * Math.max(this._cubeSize, 112),
      t = 4 * this._cubeSize,
      n = {
        magFilter: kt,
        minFilter: kt,
        generateMipmaps: !1,
        type: Tr,
        format: un,
        encoding: _i,
        depthBuffer: !1,
      },
      i = Ml(e, t, n);
    if (
      this._pingPongRenderTarget === null ||
      this._pingPongRenderTarget.width !== e
    ) {
      this._pingPongRenderTarget !== null && this._dispose(),
        (this._pingPongRenderTarget = Ml(e, t, n));
      const { _lodMax: r } = this;
      ({
        sizeLods: this._sizeLods,
        lodPlanes: this._lodPlanes,
        sigmas: this._sigmas,
      } = Kp(r)),
        (this._blurMaterial = Jp(r, e, t));
    }
    return i;
  }
  _compileMaterial(e) {
    const t = new En(this._lodPlanes[0], e);
    this._renderer.compile(t, ga);
  }
  _sceneToCubeUV(e, t, n, i) {
    const s = new Vt(90, 1, t, n),
      c = [1, -1, 1, 1, 1, 1],
      l = [1, 1, 1, -1, -1, -1],
      u = this._renderer,
      h = u.autoClear,
      f = u.toneMapping;
    u.getClearColor(xl), (u.toneMapping = An), (u.autoClear = !1);
    const m = new ro({
        name: "PMREM.Background",
        side: Xt,
        depthWrite: !1,
        depthTest: !1,
      }),
      g = new En(new Br(), m);
    let d = !1;
    const p = e.background;
    p
      ? p.isColor && (m.color.copy(p), (e.background = null), (d = !0))
      : (m.color.copy(xl), (d = !0));
    for (let _ = 0; _ < 6; _++) {
      const v = _ % 3;
      v === 0
        ? (s.up.set(0, c[_], 0), s.lookAt(l[_], 0, 0))
        : v === 1
        ? (s.up.set(0, 0, c[_]), s.lookAt(0, l[_], 0))
        : (s.up.set(0, c[_], 0), s.lookAt(0, 0, l[_]));
      const S = this._cubeSize;
      cs(i, v * S, _ > 2 ? S : 0, S, S),
        u.setRenderTarget(i),
        d && u.render(g, s),
        u.render(e, s);
    }
    g.geometry.dispose(),
      g.material.dispose(),
      (u.toneMapping = f),
      (u.autoClear = h),
      (e.background = p);
  }
  _textureToCubeUV(e, t) {
    const n = this._renderer,
      i = e.mapping === ji || e.mapping === Zi;
    i
      ? (this._cubemapMaterial === null && (this._cubemapMaterial = bl()),
        (this._cubemapMaterial.uniforms.flipEnvMap.value =
          e.isRenderTargetTexture === !1 ? -1 : 1))
      : this._equirectMaterial === null && (this._equirectMaterial = Sl());
    const r = i ? this._cubemapMaterial : this._equirectMaterial,
      a = new En(this._lodPlanes[0], r),
      s = r.uniforms;
    s.envMap.value = e;
    const c = this._cubeSize;
    cs(t, 0, 0, 3 * c, 2 * c), n.setRenderTarget(t), n.render(a, ga);
  }
  _applyPMREM(e) {
    const t = this._renderer,
      n = t.autoClear;
    t.autoClear = !1;
    for (let i = 1; i < this._lodPlanes.length; i++) {
      const r = Math.sqrt(
          this._sigmas[i] * this._sigmas[i] -
            this._sigmas[i - 1] * this._sigmas[i - 1]
        ),
        a = vl[(i - 1) % vl.length];
      this._blur(e, i - 1, i, r, a);
    }
    t.autoClear = n;
  }
  _blur(e, t, n, i, r) {
    const a = this._pingPongRenderTarget;
    this._halfBlur(e, a, t, n, i, "latitudinal", r),
      this._halfBlur(a, e, n, n, i, "longitudinal", r);
  }
  _halfBlur(e, t, n, i, r, a, s) {
    const c = this._renderer,
      l = this._blurMaterial;
    a !== "latitudinal" &&
      a !== "longitudinal" &&
      console.error(
        "blur direction must be either latitudinal or longitudinal!"
      );
    const u = 3,
      h = new En(this._lodPlanes[i], l),
      f = l.uniforms,
      m = this._sizeLods[n] - 1,
      g = isFinite(r) ? Math.PI / (2 * m) : (2 * Math.PI) / (2 * ai - 1),
      d = r / g,
      p = isFinite(r) ? 1 + Math.floor(u * d) : ai;
    p > ai &&
      console.warn(
        `sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${ai}`
      );
    const _ = [];
    let v = 0;
    for (let A = 0; A < ai; ++A) {
      const x = A / d,
        w = Math.exp((-x * x) / 2);
      _.push(w), A === 0 ? (v += w) : A < p && (v += 2 * w);
    }
    for (let A = 0; A < _.length; A++) _[A] = _[A] / v;
    (f.envMap.value = e.texture),
      (f.samples.value = p),
      (f.weights.value = _),
      (f.latitudinal.value = a === "latitudinal"),
      s && (f.poleAxis.value = s);
    const { _lodMax: S } = this;
    (f.dTheta.value = g), (f.mipInt.value = S - n);
    const M = this._sizeLods[i],
      y = 3 * M * (i > S - Bi ? i - S + Bi : 0),
      E = 4 * (this._cubeSize - M);
    cs(t, y, E, 3 * M, 2 * M), c.setRenderTarget(t), c.render(h, ga);
  }
}
function Kp(o) {
  const e = [],
    t = [],
    n = [];
  let i = o;
  const r = o - Bi + 1 + _l.length;
  for (let a = 0; a < r; a++) {
    const s = Math.pow(2, i);
    t.push(s);
    let c = 1 / s;
    a > o - Bi ? (c = _l[a - o + Bi - 1]) : a === 0 && (c = 0), n.push(c);
    const l = 1 / (s - 2),
      u = -l,
      h = 1 + l,
      f = [u, u, h, u, h, h, u, u, h, h, u, h],
      m = 6,
      g = 6,
      d = 3,
      p = 2,
      _ = 1,
      v = new Float32Array(d * g * m),
      S = new Float32Array(p * g * m),
      M = new Float32Array(_ * g * m);
    for (let E = 0; E < m; E++) {
      const A = ((E % 3) * 2) / 3 - 1,
        x = E > 2 ? 0 : -1,
        w = [
          A,
          x,
          0,
          A + 2 / 3,
          x,
          0,
          A + 2 / 3,
          x + 1,
          0,
          A,
          x,
          0,
          A + 2 / 3,
          x + 1,
          0,
          A,
          x + 1,
          0,
        ];
      v.set(w, d * g * E), S.set(f, p * g * E);
      const P = [E, E, E, E, E, E];
      M.set(P, _ * g * E);
    }
    const y = new $t();
    y.setAttribute("position", new hn(v, d)),
      y.setAttribute("uv", new hn(S, p)),
      y.setAttribute("faceIndex", new hn(M, _)),
      e.push(y),
      i > Bi && i--;
  }
  return { lodPlanes: e, sizeLods: t, sigmas: n };
}
function Ml(o, e, t) {
  const n = new nn(o, e, t);
  return (
    (n.texture.mapping = Ls),
    (n.texture.name = "PMREM.cubeUv"),
    (n.scissorTest = !0),
    n
  );
}
function cs(o, e, t, n, i) {
  o.viewport.set(e, t, n, i), o.scissor.set(e, t, n, i);
}
function Jp(o, e, t) {
  const n = new Float32Array(ai),
    i = new R(0, 1, 0);
  return new yt({
    name: "SphericalGaussianBlur",
    defines: {
      n: ai,
      CUBEUV_TEXEL_WIDTH: 1 / e,
      CUBEUV_TEXEL_HEIGHT: 1 / t,
      CUBEUV_MAX_MIP: `${o}.0`,
    },
    uniforms: {
      envMap: { value: null },
      samples: { value: 1 },
      weights: { value: n },
      latitudinal: { value: !1 },
      dTheta: { value: 0 },
      mipInt: { value: 0 },
      poleAxis: { value: i },
    },
    vertexShader: ao(),
    fragmentShader: `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,
    blending: qn,
    depthTest: !1,
    depthWrite: !1,
  });
}
function Sl() {
  return new yt({
    name: "EquirectangularToCubeUV",
    uniforms: { envMap: { value: null } },
    vertexShader: ao(),
    fragmentShader: `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,
    blending: qn,
    depthTest: !1,
    depthWrite: !1,
  });
}
function bl() {
  return new yt({
    name: "CubemapToCubeUV",
    uniforms: { envMap: { value: null }, flipEnvMap: { value: -1 } },
    vertexShader: ao(),
    fragmentShader: `

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,
    blending: qn,
    depthTest: !1,
    depthWrite: !1,
  });
}
function ao() {
  return `

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`;
}
function Qp(o) {
  let e = new WeakMap(),
    t = null;
  function n(s) {
    if (s && s.isTexture) {
      const c = s.mapping,
        l = c === Ia || c === za,
        u = c === ji || c === Zi;
      if (l || u)
        if (s.isRenderTargetTexture && s.needsPMREMUpdate === !0) {
          s.needsPMREMUpdate = !1;
          let h = e.get(s);
          return (
            t === null && (t = new yl(o)),
            (h = l ? t.fromEquirectangular(s, h) : t.fromCubemap(s, h)),
            e.set(s, h),
            h.texture
          );
        } else {
          if (e.has(s)) return e.get(s).texture;
          {
            const h = s.image;
            if ((l && h && h.height > 0) || (u && h && i(h))) {
              t === null && (t = new yl(o));
              const f = l ? t.fromEquirectangular(s) : t.fromCubemap(s);
              return e.set(s, f), s.addEventListener("dispose", r), f.texture;
            } else return null;
          }
        }
    }
    return s;
  }
  function i(s) {
    let c = 0;
    const l = 6;
    for (let u = 0; u < l; u++) s[u] !== void 0 && c++;
    return c === l;
  }
  function r(s) {
    const c = s.target;
    c.removeEventListener("dispose", r);
    const l = e.get(c);
    l !== void 0 && (e.delete(c), l.dispose());
  }
  function a() {
    (e = new WeakMap()), t !== null && (t.dispose(), (t = null));
  }
  return { get: n, dispose: a };
}
function em(o) {
  const e = {};
  function t(n) {
    if (e[n] !== void 0) return e[n];
    let i;
    switch (n) {
      case "WEBGL_depth_texture":
        i =
          o.getExtension("WEBGL_depth_texture") ||
          o.getExtension("MOZ_WEBGL_depth_texture") ||
          o.getExtension("WEBKIT_WEBGL_depth_texture");
        break;
      case "EXT_texture_filter_anisotropic":
        i =
          o.getExtension("EXT_texture_filter_anisotropic") ||
          o.getExtension("MOZ_EXT_texture_filter_anisotropic") ||
          o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
        break;
      case "WEBGL_compressed_texture_s3tc":
        i =
          o.getExtension("WEBGL_compressed_texture_s3tc") ||
          o.getExtension("MOZ_WEBGL_compressed_texture_s3tc") ||
          o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
        break;
      case "WEBGL_compressed_texture_pvrtc":
        i =
          o.getExtension("WEBGL_compressed_texture_pvrtc") ||
          o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
        break;
      default:
        i = o.getExtension(n);
    }
    return (e[n] = i), i;
  }
  return {
    has: function (n) {
      return t(n) !== null;
    },
    init: function (n) {
      n.isWebGL2
        ? t("EXT_color_buffer_float")
        : (t("WEBGL_depth_texture"),
          t("OES_texture_float"),
          t("OES_texture_half_float"),
          t("OES_texture_half_float_linear"),
          t("OES_standard_derivatives"),
          t("OES_element_index_uint"),
          t("OES_vertex_array_object"),
          t("ANGLE_instanced_arrays")),
        t("OES_texture_float_linear"),
        t("EXT_color_buffer_half_float"),
        t("WEBGL_multisampled_render_to_texture");
    },
    get: function (n) {
      const i = t(n);
      return (
        i === null &&
          console.warn(
            "THREE.WebGLRenderer: " + n + " extension not supported."
          ),
        i
      );
    },
  };
}
function tm(o, e, t, n) {
  const i = {},
    r = new WeakMap();
  function a(h) {
    const f = h.target;
    f.index !== null && e.remove(f.index);
    for (const g in f.attributes) e.remove(f.attributes[g]);
    f.removeEventListener("dispose", a), delete i[f.id];
    const m = r.get(f);
    m && (e.remove(m), r.delete(f)),
      n.releaseStatesOfGeometry(f),
      f.isInstancedBufferGeometry === !0 && delete f._maxInstanceCount,
      t.memory.geometries--;
  }
  function s(h, f) {
    return (
      i[f.id] === !0 ||
        (f.addEventListener("dispose", a),
        (i[f.id] = !0),
        t.memory.geometries++),
      f
    );
  }
  function c(h) {
    const f = h.attributes;
    for (const g in f) e.update(f[g], 34962);
    const m = h.morphAttributes;
    for (const g in m) {
      const d = m[g];
      for (let p = 0, _ = d.length; p < _; p++) e.update(d[p], 34962);
    }
  }
  function l(h) {
    const f = [],
      m = h.index,
      g = h.attributes.position;
    let d = 0;
    if (m !== null) {
      const v = m.array;
      d = m.version;
      for (let S = 0, M = v.length; S < M; S += 3) {
        const y = v[S + 0],
          E = v[S + 1],
          A = v[S + 2];
        f.push(y, E, E, A, A, y);
      }
    } else {
      const v = g.array;
      d = g.version;
      for (let S = 0, M = v.length / 3 - 1; S < M; S += 3) {
        const y = S + 0,
          E = S + 1,
          A = S + 2;
        f.push(y, E, E, A, A, y);
      }
    }
    const p = new (Mc(f) ? Ac : Cc)(f, 1);
    p.version = d;
    const _ = r.get(h);
    _ && e.remove(_), r.set(h, p);
  }
  function u(h) {
    const f = r.get(h);
    if (f) {
      const m = h.index;
      m !== null && f.version < m.version && l(h);
    } else l(h);
    return r.get(h);
  }
  return { get: s, update: c, getWireframeAttribute: u };
}
function nm(o, e, t, n) {
  const i = n.isWebGL2;
  let r;
  function a(f) {
    r = f;
  }
  let s, c;
  function l(f) {
    (s = f.type), (c = f.bytesPerElement);
  }
  function u(f, m) {
    o.drawElements(r, m, s, f * c), t.update(m, r, 1);
  }
  function h(f, m, g) {
    if (g === 0) return;
    let d, p;
    if (i) (d = o), (p = "drawElementsInstanced");
    else if (
      ((d = e.get("ANGLE_instanced_arrays")),
      (p = "drawElementsInstancedANGLE"),
      d === null)
    ) {
      console.error(
        "THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays."
      );
      return;
    }
    d[p](r, m, s, f * c, g), t.update(m, r, g);
  }
  (this.setMode = a),
    (this.setIndex = l),
    (this.render = u),
    (this.renderInstances = h);
}
function im(o) {
  const e = { geometries: 0, textures: 0 },
    t = { frame: 0, calls: 0, triangles: 0, points: 0, lines: 0 };
  function n(r, a, s) {
    switch ((t.calls++, a)) {
      case 4:
        t.triangles += s * (r / 3);
        break;
      case 1:
        t.lines += s * (r / 2);
        break;
      case 3:
        t.lines += s * (r - 1);
        break;
      case 2:
        t.lines += s * r;
        break;
      case 0:
        t.points += s * r;
        break;
      default:
        console.error("THREE.WebGLInfo: Unknown draw mode:", a);
        break;
    }
  }
  function i() {
    t.frame++, (t.calls = 0), (t.triangles = 0), (t.points = 0), (t.lines = 0);
  }
  return {
    memory: e,
    render: t,
    programs: null,
    autoReset: !0,
    reset: i,
    update: n,
  };
}
function rm(o, e) {
  return o[0] - e[0];
}
function sm(o, e) {
  return Math.abs(e[1]) - Math.abs(o[1]);
}
function am(o, e, t) {
  const n = {},
    i = new Float32Array(8),
    r = new WeakMap(),
    a = new at(),
    s = [];
  for (let l = 0; l < 8; l++) s[l] = [l, 0];
  function c(l, u, h, f) {
    const m = l.morphTargetInfluences;
    if (e.isWebGL2 === !0) {
      const d =
          u.morphAttributes.position ||
          u.morphAttributes.normal ||
          u.morphAttributes.color,
        p = d !== void 0 ? d.length : 0;
      let _ = r.get(u);
      if (_ === void 0 || _.count !== p) {
        let Y = function () {
          D.dispose(), r.delete(u), u.removeEventListener("dispose", Y);
        };
        var g = Y;
        _ !== void 0 && _.texture.dispose();
        const M = u.morphAttributes.position !== void 0,
          y = u.morphAttributes.normal !== void 0,
          E = u.morphAttributes.color !== void 0,
          A = u.morphAttributes.position || [],
          x = u.morphAttributes.normal || [],
          w = u.morphAttributes.color || [];
        let P = 0;
        M === !0 && (P = 1), y === !0 && (P = 2), E === !0 && (P = 3);
        let W = u.attributes.position.count * P,
          K = 1;
        W > e.maxTextureSize &&
          ((K = Math.ceil(W / e.maxTextureSize)), (W = e.maxTextureSize));
        const O = new Float32Array(W * K * 4 * p),
          D = new Tc(O, W, K, p);
        (D.type = li), (D.needsUpdate = !0);
        const B = P * 4;
        for (let X = 0; X < p; X++) {
          const k = A[X],
            z = x[X],
            U = w[X],
            J = W * K * 4 * X;
          for (let Z = 0; Z < k.count; Z++) {
            const $ = Z * B;
            M === !0 &&
              (a.fromBufferAttribute(k, Z),
              (O[J + $ + 0] = a.x),
              (O[J + $ + 1] = a.y),
              (O[J + $ + 2] = a.z),
              (O[J + $ + 3] = 0)),
              y === !0 &&
                (a.fromBufferAttribute(z, Z),
                (O[J + $ + 4] = a.x),
                (O[J + $ + 5] = a.y),
                (O[J + $ + 6] = a.z),
                (O[J + $ + 7] = 0)),
              E === !0 &&
                (a.fromBufferAttribute(U, Z),
                (O[J + $ + 8] = a.x),
                (O[J + $ + 9] = a.y),
                (O[J + $ + 10] = a.z),
                (O[J + $ + 11] = U.itemSize === 4 ? a.w : 1));
          }
        }
        (_ = { count: p, texture: D, size: new Se(W, K) }),
          r.set(u, _),
          u.addEventListener("dispose", Y);
      }
      let v = 0;
      for (let M = 0; M < m.length; M++) v += m[M];
      const S = u.morphTargetsRelative ? 1 : 1 - v;
      f.getUniforms().setValue(o, "morphTargetBaseInfluence", S),
        f.getUniforms().setValue(o, "morphTargetInfluences", m),
        f.getUniforms().setValue(o, "morphTargetsTexture", _.texture, t),
        f.getUniforms().setValue(o, "morphTargetsTextureSize", _.size);
    } else {
      const d = m === void 0 ? 0 : m.length;
      let p = n[u.id];
      if (p === void 0 || p.length !== d) {
        p = [];
        for (let y = 0; y < d; y++) p[y] = [y, 0];
        n[u.id] = p;
      }
      for (let y = 0; y < d; y++) {
        const E = p[y];
        (E[0] = y), (E[1] = m[y]);
      }
      p.sort(sm);
      for (let y = 0; y < 8; y++)
        y < d && p[y][1]
          ? ((s[y][0] = p[y][0]), (s[y][1] = p[y][1]))
          : ((s[y][0] = Number.MAX_SAFE_INTEGER), (s[y][1] = 0));
      s.sort(rm);
      const _ = u.morphAttributes.position,
        v = u.morphAttributes.normal;
      let S = 0;
      for (let y = 0; y < 8; y++) {
        const E = s[y],
          A = E[0],
          x = E[1];
        A !== Number.MAX_SAFE_INTEGER && x
          ? (_ &&
              u.getAttribute("morphTarget" + y) !== _[A] &&
              u.setAttribute("morphTarget" + y, _[A]),
            v &&
              u.getAttribute("morphNormal" + y) !== v[A] &&
              u.setAttribute("morphNormal" + y, v[A]),
            (i[y] = x),
            (S += x))
          : (_ &&
              u.hasAttribute("morphTarget" + y) === !0 &&
              u.deleteAttribute("morphTarget" + y),
            v &&
              u.hasAttribute("morphNormal" + y) === !0 &&
              u.deleteAttribute("morphNormal" + y),
            (i[y] = 0));
      }
      const M = u.morphTargetsRelative ? 1 : 1 - S;
      f.getUniforms().setValue(o, "morphTargetBaseInfluence", M),
        f.getUniforms().setValue(o, "morphTargetInfluences", i);
    }
  }
  return { update: c };
}
function om(o, e, t, n) {
  let i = new WeakMap();
  function r(c) {
    const l = n.render.frame,
      u = c.geometry,
      h = e.get(c, u);
    return (
      i.get(h) !== l && (e.update(h), i.set(h, l)),
      c.isInstancedMesh &&
        (c.hasEventListener("dispose", s) === !1 &&
          c.addEventListener("dispose", s),
        t.update(c.instanceMatrix, 34962),
        c.instanceColor !== null && t.update(c.instanceColor, 34962)),
      h
    );
  }
  function a() {
    i = new WeakMap();
  }
  function s(c) {
    const l = c.target;
    l.removeEventListener("dispose", s),
      t.remove(l.instanceMatrix),
      l.instanceColor !== null && t.remove(l.instanceColor);
  }
  return { update: r, dispose: a };
}
const Ic = new jt(),
  zc = new Tc(),
  Fc = new Zh(),
  Oc = new Lc(),
  wl = [],
  Tl = [],
  El = new Float32Array(16),
  Cl = new Float32Array(9),
  Al = new Float32Array(4);
function cr(o, e, t) {
  const n = o[0];
  if (n <= 0 || n > 0) return o;
  const i = e * t;
  let r = wl[i];
  if ((r === void 0 && ((r = new Float32Array(i)), (wl[i] = r)), e !== 0)) {
    n.toArray(r, 0);
    for (let a = 1, s = 0; a !== e; ++a) (s += t), o[a].toArray(r, s);
  }
  return r;
}
function gt(o, e) {
  if (o.length !== e.length) return !1;
  for (let t = 0, n = o.length; t < n; t++) if (o[t] !== e[t]) return !1;
  return !0;
}
function _t(o, e) {
  for (let t = 0, n = e.length; t < n; t++) o[t] = e[t];
}
function Is(o, e) {
  let t = Tl[e];
  t === void 0 && ((t = new Int32Array(e)), (Tl[e] = t));
  for (let n = 0; n !== e; ++n) t[n] = o.allocateTextureUnit();
  return t;
}
function lm(o, e) {
  const t = this.cache;
  t[0] !== e && (o.uniform1f(this.addr, e), (t[0] = e));
}
function cm(o, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) &&
      (o.uniform2f(this.addr, e.x, e.y), (t[0] = e.x), (t[1] = e.y));
  else {
    if (gt(t, e)) return;
    o.uniform2fv(this.addr, e), _t(t, e);
  }
}
function um(o, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) &&
      (o.uniform3f(this.addr, e.x, e.y, e.z),
      (t[0] = e.x),
      (t[1] = e.y),
      (t[2] = e.z));
  else if (e.r !== void 0)
    (t[0] !== e.r || t[1] !== e.g || t[2] !== e.b) &&
      (o.uniform3f(this.addr, e.r, e.g, e.b),
      (t[0] = e.r),
      (t[1] = e.g),
      (t[2] = e.b));
  else {
    if (gt(t, e)) return;
    o.uniform3fv(this.addr, e), _t(t, e);
  }
}
function hm(o, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) &&
      (o.uniform4f(this.addr, e.x, e.y, e.z, e.w),
      (t[0] = e.x),
      (t[1] = e.y),
      (t[2] = e.z),
      (t[3] = e.w));
  else {
    if (gt(t, e)) return;
    o.uniform4fv(this.addr, e), _t(t, e);
  }
}
function fm(o, e) {
  const t = this.cache,
    n = e.elements;
  if (n === void 0) {
    if (gt(t, e)) return;
    o.uniformMatrix2fv(this.addr, !1, e), _t(t, e);
  } else {
    if (gt(t, n)) return;
    Al.set(n), o.uniformMatrix2fv(this.addr, !1, Al), _t(t, n);
  }
}
function dm(o, e) {
  const t = this.cache,
    n = e.elements;
  if (n === void 0) {
    if (gt(t, e)) return;
    o.uniformMatrix3fv(this.addr, !1, e), _t(t, e);
  } else {
    if (gt(t, n)) return;
    Cl.set(n), o.uniformMatrix3fv(this.addr, !1, Cl), _t(t, n);
  }
}
function pm(o, e) {
  const t = this.cache,
    n = e.elements;
  if (n === void 0) {
    if (gt(t, e)) return;
    o.uniformMatrix4fv(this.addr, !1, e), _t(t, e);
  } else {
    if (gt(t, n)) return;
    El.set(n), o.uniformMatrix4fv(this.addr, !1, El), _t(t, n);
  }
}
function mm(o, e) {
  const t = this.cache;
  t[0] !== e && (o.uniform1i(this.addr, e), (t[0] = e));
}
function gm(o, e) {
  const t = this.cache;
  gt(t, e) || (o.uniform2iv(this.addr, e), _t(t, e));
}
function _m(o, e) {
  const t = this.cache;
  gt(t, e) || (o.uniform3iv(this.addr, e), _t(t, e));
}
function xm(o, e) {
  const t = this.cache;
  gt(t, e) || (o.uniform4iv(this.addr, e), _t(t, e));
}
function vm(o, e) {
  const t = this.cache;
  t[0] !== e && (o.uniform1ui(this.addr, e), (t[0] = e));
}
function ym(o, e) {
  const t = this.cache;
  gt(t, e) || (o.uniform2uiv(this.addr, e), _t(t, e));
}
function Mm(o, e) {
  const t = this.cache;
  gt(t, e) || (o.uniform3uiv(this.addr, e), _t(t, e));
}
function Sm(o, e) {
  const t = this.cache;
  gt(t, e) || (o.uniform4uiv(this.addr, e), _t(t, e));
}
function bm(o, e, t) {
  const n = this.cache,
    i = t.allocateTextureUnit();
  n[0] !== i && (o.uniform1i(this.addr, i), (n[0] = i)),
    t.setTexture2D(e || Ic, i);
}
function wm(o, e, t) {
  const n = this.cache,
    i = t.allocateTextureUnit();
  n[0] !== i && (o.uniform1i(this.addr, i), (n[0] = i)),
    t.setTexture3D(e || Fc, i);
}
function Tm(o, e, t) {
  const n = this.cache,
    i = t.allocateTextureUnit();
  n[0] !== i && (o.uniform1i(this.addr, i), (n[0] = i)),
    t.setTextureCube(e || Oc, i);
}
function Em(o, e, t) {
  const n = this.cache,
    i = t.allocateTextureUnit();
  n[0] !== i && (o.uniform1i(this.addr, i), (n[0] = i)),
    t.setTexture2DArray(e || zc, i);
}
function Cm(o) {
  switch (o) {
    case 5126:
      return lm;
    case 35664:
      return cm;
    case 35665:
      return um;
    case 35666:
      return hm;
    case 35674:
      return fm;
    case 35675:
      return dm;
    case 35676:
      return pm;
    case 5124:
    case 35670:
      return mm;
    case 35667:
    case 35671:
      return gm;
    case 35668:
    case 35672:
      return _m;
    case 35669:
    case 35673:
      return xm;
    case 5125:
      return vm;
    case 36294:
      return ym;
    case 36295:
      return Mm;
    case 36296:
      return Sm;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return bm;
    case 35679:
    case 36299:
    case 36307:
      return wm;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return Tm;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return Em;
  }
}
function Am(o, e) {
  o.uniform1fv(this.addr, e);
}
function Pm(o, e) {
  const t = cr(e, this.size, 2);
  o.uniform2fv(this.addr, t);
}
function Lm(o, e) {
  const t = cr(e, this.size, 3);
  o.uniform3fv(this.addr, t);
}
function Dm(o, e) {
  const t = cr(e, this.size, 4);
  o.uniform4fv(this.addr, t);
}
function Rm(o, e) {
  const t = cr(e, this.size, 4);
  o.uniformMatrix2fv(this.addr, !1, t);
}
function Im(o, e) {
  const t = cr(e, this.size, 9);
  o.uniformMatrix3fv(this.addr, !1, t);
}
function zm(o, e) {
  const t = cr(e, this.size, 16);
  o.uniformMatrix4fv(this.addr, !1, t);
}
function Fm(o, e) {
  o.uniform1iv(this.addr, e);
}
function Om(o, e) {
  o.uniform2iv(this.addr, e);
}
function Um(o, e) {
  o.uniform3iv(this.addr, e);
}
function Nm(o, e) {
  o.uniform4iv(this.addr, e);
}
function Bm(o, e) {
  o.uniform1uiv(this.addr, e);
}
function km(o, e) {
  o.uniform2uiv(this.addr, e);
}
function Vm(o, e) {
  o.uniform3uiv(this.addr, e);
}
function Gm(o, e) {
  o.uniform4uiv(this.addr, e);
}
function Hm(o, e, t) {
  const n = e.length,
    i = Is(t, n);
  o.uniform1iv(this.addr, i);
  for (let r = 0; r !== n; ++r) t.setTexture2D(e[r] || Ic, i[r]);
}
function Wm(o, e, t) {
  const n = e.length,
    i = Is(t, n);
  o.uniform1iv(this.addr, i);
  for (let r = 0; r !== n; ++r) t.setTexture3D(e[r] || Fc, i[r]);
}
function qm(o, e, t) {
  const n = e.length,
    i = Is(t, n);
  o.uniform1iv(this.addr, i);
  for (let r = 0; r !== n; ++r) t.setTextureCube(e[r] || Oc, i[r]);
}
function Xm(o, e, t) {
  const n = e.length,
    i = Is(t, n);
  o.uniform1iv(this.addr, i);
  for (let r = 0; r !== n; ++r) t.setTexture2DArray(e[r] || zc, i[r]);
}
function Ym(o) {
  switch (o) {
    case 5126:
      return Am;
    case 35664:
      return Pm;
    case 35665:
      return Lm;
    case 35666:
      return Dm;
    case 35674:
      return Rm;
    case 35675:
      return Im;
    case 35676:
      return zm;
    case 5124:
    case 35670:
      return Fm;
    case 35667:
    case 35671:
      return Om;
    case 35668:
    case 35672:
      return Um;
    case 35669:
    case 35673:
      return Nm;
    case 5125:
      return Bm;
    case 36294:
      return km;
    case 36295:
      return Vm;
    case 36296:
      return Gm;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return Hm;
    case 35679:
    case 36299:
    case 36307:
      return Wm;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return qm;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return Xm;
  }
}
class jm {
  constructor(e, t, n) {
    (this.id = e),
      (this.addr = n),
      (this.cache = []),
      (this.setValue = Cm(t.type));
  }
}
class Zm {
  constructor(e, t, n) {
    (this.id = e),
      (this.addr = n),
      (this.cache = []),
      (this.size = t.size),
      (this.setValue = Ym(t.type));
  }
}
class $m {
  constructor(e) {
    (this.id = e), (this.seq = []), (this.map = {});
  }
  setValue(e, t, n) {
    const i = this.seq;
    for (let r = 0, a = i.length; r !== a; ++r) {
      const s = i[r];
      s.setValue(e, t[s.id], n);
    }
  }
}
const xa = /(\w+)(\])?(\[|\.)?/g;
function Pl(o, e) {
  o.seq.push(e), (o.map[e.id] = e);
}
function Km(o, e, t) {
  const n = o.name,
    i = n.length;
  for (xa.lastIndex = 0; ; ) {
    const r = xa.exec(n),
      a = xa.lastIndex;
    let s = r[1];
    const c = r[2] === "]",
      l = r[3];
    if ((c && (s = s | 0), l === void 0 || (l === "[" && a + 2 === i))) {
      Pl(t, l === void 0 ? new jm(s, o, e) : new Zm(s, o, e));
      break;
    } else {
      let h = t.map[s];
      h === void 0 && ((h = new $m(s)), Pl(t, h)), (t = h);
    }
  }
}
class gs {
  constructor(e, t) {
    (this.seq = []), (this.map = {});
    const n = e.getProgramParameter(t, 35718);
    for (let i = 0; i < n; ++i) {
      const r = e.getActiveUniform(t, i),
        a = e.getUniformLocation(t, r.name);
      Km(r, a, this);
    }
  }
  setValue(e, t, n, i) {
    const r = this.map[t];
    r !== void 0 && r.setValue(e, n, i);
  }
  setOptional(e, t, n) {
    const i = t[n];
    i !== void 0 && this.setValue(e, n, i);
  }
  static upload(e, t, n, i) {
    for (let r = 0, a = t.length; r !== a; ++r) {
      const s = t[r],
        c = n[s.id];
      c.needsUpdate !== !1 && s.setValue(e, c.value, i);
    }
  }
  static seqWithValue(e, t) {
    const n = [];
    for (let i = 0, r = e.length; i !== r; ++i) {
      const a = e[i];
      a.id in t && n.push(a);
    }
    return n;
  }
}
function Ll(o, e, t) {
  const n = o.createShader(e);
  return o.shaderSource(n, t), o.compileShader(n), n;
}
let Jm = 0;
function Qm(o, e) {
  const t = o.split(`
`),
    n = [],
    i = Math.max(e - 6, 0),
    r = Math.min(e + 6, t.length);
  for (let a = i; a < r; a++) {
    const s = a + 1;
    n.push(`${s === e ? ">" : " "} ${s}: ${t[a]}`);
  }
  return n.join(`
`);
}
function eg(o) {
  switch (o) {
    case _i:
      return ["Linear", "( value )"];
    case Ge:
      return ["sRGB", "( value )"];
    default:
      return (
        console.warn("THREE.WebGLProgram: Unsupported encoding:", o),
        ["Linear", "( value )"]
      );
  }
}
function Dl(o, e, t) {
  const n = o.getShaderParameter(e, 35713),
    i = o.getShaderInfoLog(e).trim();
  if (n && i === "") return "";
  const r = /ERROR: 0:(\d+)/.exec(i);
  if (r) {
    const a = parseInt(r[1]);
    return (
      t.toUpperCase() +
      `

` +
      i +
      `

` +
      Qm(o.getShaderSource(e), a)
    );
  } else return i;
}
function tg(o, e) {
  const t = eg(e);
  return "vec4 " + o + "( vec4 value ) { return LinearTo" + t[0] + t[1] + "; }";
}
function ng(o, e) {
  let t;
  switch (e) {
    case Mh:
      t = "Linear";
      break;
    case Sh:
      t = "Reinhard";
      break;
    case bh:
      t = "OptimizedCineon";
      break;
    case wh:
      t = "ACESFilmic";
      break;
    case Th:
      t = "Custom";
      break;
    default:
      console.warn("THREE.WebGLProgram: Unsupported toneMapping:", e),
        (t = "Linear");
  }
  return (
    "vec3 " + o + "( vec3 color ) { return " + t + "ToneMapping( color ); }"
  );
}
function ig(o) {
  return [
    o.extensionDerivatives ||
    !!o.envMapCubeUVHeight ||
    o.bumpMap ||
    o.tangentSpaceNormalMap ||
    o.clearcoatNormalMap ||
    o.flatShading ||
    o.shaderID === "physical"
      ? "#extension GL_OES_standard_derivatives : enable"
      : "",
    (o.extensionFragDepth || o.logarithmicDepthBuffer) &&
    o.rendererExtensionFragDepth
      ? "#extension GL_EXT_frag_depth : enable"
      : "",
    o.extensionDrawBuffers && o.rendererExtensionDrawBuffers
      ? "#extension GL_EXT_draw_buffers : require"
      : "",
    (o.extensionShaderTextureLOD || o.envMap || o.transmission) &&
    o.rendererExtensionShaderTextureLod
      ? "#extension GL_EXT_shader_texture_lod : enable"
      : "",
  ].filter(_r).join(`
`);
}
function rg(o) {
  const e = [];
  for (const t in o) {
    const n = o[t];
    n !== !1 && e.push("#define " + t + " " + n);
  }
  return e.join(`
`);
}
function sg(o, e) {
  const t = {},
    n = o.getProgramParameter(e, 35721);
  for (let i = 0; i < n; i++) {
    const r = o.getActiveAttrib(e, i),
      a = r.name;
    let s = 1;
    r.type === 35674 && (s = 2),
      r.type === 35675 && (s = 3),
      r.type === 35676 && (s = 4),
      (t[a] = {
        type: r.type,
        location: o.getAttribLocation(e, a),
        locationSize: s,
      });
  }
  return t;
}
function _r(o) {
  return o !== "";
}
function Rl(o, e) {
  const t =
    e.numSpotLightShadows + e.numSpotLightMaps - e.numSpotLightShadowsWithMaps;
  return o
    .replace(/NUM_DIR_LIGHTS/g, e.numDirLights)
    .replace(/NUM_SPOT_LIGHTS/g, e.numSpotLights)
    .replace(/NUM_SPOT_LIGHT_MAPS/g, e.numSpotLightMaps)
    .replace(/NUM_SPOT_LIGHT_COORDS/g, t)
    .replace(/NUM_RECT_AREA_LIGHTS/g, e.numRectAreaLights)
    .replace(/NUM_POINT_LIGHTS/g, e.numPointLights)
    .replace(/NUM_HEMI_LIGHTS/g, e.numHemiLights)
    .replace(/NUM_DIR_LIGHT_SHADOWS/g, e.numDirLightShadows)
    .replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g, e.numSpotLightShadowsWithMaps)
    .replace(/NUM_SPOT_LIGHT_SHADOWS/g, e.numSpotLightShadows)
    .replace(/NUM_POINT_LIGHT_SHADOWS/g, e.numPointLightShadows);
}
function Il(o, e) {
  return o
    .replace(/NUM_CLIPPING_PLANES/g, e.numClippingPlanes)
    .replace(
      /UNION_CLIPPING_PLANES/g,
      e.numClippingPlanes - e.numClipIntersection
    );
}
const ag = /^[ \t]*#include +<([\w\d./]+)>/gm;
function Ba(o) {
  return o.replace(ag, og);
}
function og(o, e) {
  const t = we[e];
  if (t === void 0) throw new Error("Can not resolve #include <" + e + ">");
  return Ba(t);
}
const lg =
  /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;
function zl(o) {
  return o.replace(lg, cg);
}
function cg(o, e, t, n) {
  let i = "";
  for (let r = parseInt(e); r < parseInt(t); r++)
    i += n
      .replace(/\[\s*i\s*\]/g, "[ " + r + " ]")
      .replace(/UNROLLED_LOOP_INDEX/g, r);
  return i;
}
function Fl(o) {
  let e =
    "precision " +
    o.precision +
    ` float;
precision ` +
    o.precision +
    " int;";
  return (
    o.precision === "highp"
      ? (e += `
#define HIGH_PRECISION`)
      : o.precision === "mediump"
      ? (e += `
#define MEDIUM_PRECISION`)
      : o.precision === "lowp" &&
        (e += `
#define LOW_PRECISION`),
    e
  );
}
function ug(o) {
  let e = "SHADOWMAP_TYPE_BASIC";
  return (
    o.shadowMapType === mc
      ? (e = "SHADOWMAP_TYPE_PCF")
      : o.shadowMapType === Qu
      ? (e = "SHADOWMAP_TYPE_PCF_SOFT")
      : o.shadowMapType === gr && (e = "SHADOWMAP_TYPE_VSM"),
    e
  );
}
function hg(o) {
  let e = "ENVMAP_TYPE_CUBE";
  if (o.envMap)
    switch (o.envMapMode) {
      case ji:
      case Zi:
        e = "ENVMAP_TYPE_CUBE";
        break;
      case Ls:
        e = "ENVMAP_TYPE_CUBE_UV";
        break;
    }
  return e;
}
function fg(o) {
  let e = "ENVMAP_MODE_REFLECTION";
  if (o.envMap)
    switch (o.envMapMode) {
      case Zi:
        e = "ENVMAP_MODE_REFRACTION";
        break;
    }
  return e;
}
function dg(o) {
  let e = "ENVMAP_BLENDING_NONE";
  if (o.envMap)
    switch (o.combine) {
      case xc:
        e = "ENVMAP_BLENDING_MULTIPLY";
        break;
      case vh:
        e = "ENVMAP_BLENDING_MIX";
        break;
      case yh:
        e = "ENVMAP_BLENDING_ADD";
        break;
    }
  return e;
}
function pg(o) {
  const e = o.envMapCubeUVHeight;
  if (e === null) return null;
  const t = Math.log2(e) - 2,
    n = 1 / e;
  return {
    texelWidth: 1 / (3 * Math.max(Math.pow(2, t), 7 * 16)),
    texelHeight: n,
    maxMip: t,
  };
}
function mg(o, e, t, n) {
  const i = o.getContext(),
    r = t.defines;
  let a = t.vertexShader,
    s = t.fragmentShader;
  const c = ug(t),
    l = hg(t),
    u = fg(t),
    h = dg(t),
    f = pg(t),
    m = t.isWebGL2 ? "" : ig(t),
    g = rg(r),
    d = i.createProgram();
  let p,
    _,
    v = t.glslVersion
      ? "#version " +
        t.glslVersion +
        `
`
      : "";
  t.isRawShaderMaterial
    ? ((p = [g].filter(_r).join(`
`)),
      p.length > 0 &&
        (p += `
`),
      (_ = [m, g].filter(_r).join(`
`)),
      _.length > 0 &&
        (_ += `
`))
    : ((p = [
        Fl(t),
        "#define SHADER_NAME " + t.shaderName,
        g,
        t.instancing ? "#define USE_INSTANCING" : "",
        t.instancingColor ? "#define USE_INSTANCING_COLOR" : "",
        t.supportsVertexTextures ? "#define VERTEX_TEXTURES" : "",
        t.useFog && t.fog ? "#define USE_FOG" : "",
        t.useFog && t.fogExp2 ? "#define FOG_EXP2" : "",
        t.map ? "#define USE_MAP" : "",
        t.envMap ? "#define USE_ENVMAP" : "",
        t.envMap ? "#define " + u : "",
        t.lightMap ? "#define USE_LIGHTMAP" : "",
        t.aoMap ? "#define USE_AOMAP" : "",
        t.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
        t.bumpMap ? "#define USE_BUMPMAP" : "",
        t.normalMap ? "#define USE_NORMALMAP" : "",
        t.normalMap && t.objectSpaceNormalMap
          ? "#define OBJECTSPACE_NORMALMAP"
          : "",
        t.normalMap && t.tangentSpaceNormalMap
          ? "#define TANGENTSPACE_NORMALMAP"
          : "",
        t.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
        t.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
        t.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
        t.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "",
        t.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "",
        t.displacementMap && t.supportsVertexTextures
          ? "#define USE_DISPLACEMENTMAP"
          : "",
        t.specularMap ? "#define USE_SPECULARMAP" : "",
        t.specularIntensityMap ? "#define USE_SPECULARINTENSITYMAP" : "",
        t.specularColorMap ? "#define USE_SPECULARCOLORMAP" : "",
        t.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
        t.metalnessMap ? "#define USE_METALNESSMAP" : "",
        t.alphaMap ? "#define USE_ALPHAMAP" : "",
        t.transmission ? "#define USE_TRANSMISSION" : "",
        t.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
        t.thicknessMap ? "#define USE_THICKNESSMAP" : "",
        t.sheenColorMap ? "#define USE_SHEENCOLORMAP" : "",
        t.sheenRoughnessMap ? "#define USE_SHEENROUGHNESSMAP" : "",
        t.vertexTangents ? "#define USE_TANGENT" : "",
        t.vertexColors ? "#define USE_COLOR" : "",
        t.vertexAlphas ? "#define USE_COLOR_ALPHA" : "",
        t.vertexUvs ? "#define USE_UV" : "",
        t.uvsVertexOnly ? "#define UVS_VERTEX_ONLY" : "",
        t.flatShading ? "#define FLAT_SHADED" : "",
        t.skinning ? "#define USE_SKINNING" : "",
        t.morphTargets ? "#define USE_MORPHTARGETS" : "",
        t.morphNormals && t.flatShading === !1
          ? "#define USE_MORPHNORMALS"
          : "",
        t.morphColors && t.isWebGL2 ? "#define USE_MORPHCOLORS" : "",
        t.morphTargetsCount > 0 && t.isWebGL2
          ? "#define MORPHTARGETS_TEXTURE"
          : "",
        t.morphTargetsCount > 0 && t.isWebGL2
          ? "#define MORPHTARGETS_TEXTURE_STRIDE " + t.morphTextureStride
          : "",
        t.morphTargetsCount > 0 && t.isWebGL2
          ? "#define MORPHTARGETS_COUNT " + t.morphTargetsCount
          : "",
        t.doubleSided ? "#define DOUBLE_SIDED" : "",
        t.flipSided ? "#define FLIP_SIDED" : "",
        t.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
        t.shadowMapEnabled ? "#define " + c : "",
        t.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "",
        t.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "",
        t.logarithmicDepthBuffer && t.rendererExtensionFragDepth
          ? "#define USE_LOGDEPTHBUF_EXT"
          : "",
        "uniform mat4 modelMatrix;",
        "uniform mat4 modelViewMatrix;",
        "uniform mat4 projectionMatrix;",
        "uniform mat4 viewMatrix;",
        "uniform mat3 normalMatrix;",
        "uniform vec3 cameraPosition;",
        "uniform bool isOrthographic;",
        "#ifdef USE_INSTANCING",
        "	attribute mat4 instanceMatrix;",
        "#endif",
        "#ifdef USE_INSTANCING_COLOR",
        "	attribute vec3 instanceColor;",
        "#endif",
        "attribute vec3 position;",
        "attribute vec3 normal;",
        "attribute vec2 uv;",
        "#ifdef USE_TANGENT",
        "	attribute vec4 tangent;",
        "#endif",
        "#if defined( USE_COLOR_ALPHA )",
        "	attribute vec4 color;",
        "#elif defined( USE_COLOR )",
        "	attribute vec3 color;",
        "#endif",
        "#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )",
        "	attribute vec3 morphTarget0;",
        "	attribute vec3 morphTarget1;",
        "	attribute vec3 morphTarget2;",
        "	attribute vec3 morphTarget3;",
        "	#ifdef USE_MORPHNORMALS",
        "		attribute vec3 morphNormal0;",
        "		attribute vec3 morphNormal1;",
        "		attribute vec3 morphNormal2;",
        "		attribute vec3 morphNormal3;",
        "	#else",
        "		attribute vec3 morphTarget4;",
        "		attribute vec3 morphTarget5;",
        "		attribute vec3 morphTarget6;",
        "		attribute vec3 morphTarget7;",
        "	#endif",
        "#endif",
        "#ifdef USE_SKINNING",
        "	attribute vec4 skinIndex;",
        "	attribute vec4 skinWeight;",
        "#endif",
        `
`,
      ].filter(_r).join(`
`)),
      (_ = [
        m,
        Fl(t),
        "#define SHADER_NAME " + t.shaderName,
        g,
        t.useFog && t.fog ? "#define USE_FOG" : "",
        t.useFog && t.fogExp2 ? "#define FOG_EXP2" : "",
        t.map ? "#define USE_MAP" : "",
        t.matcap ? "#define USE_MATCAP" : "",
        t.envMap ? "#define USE_ENVMAP" : "",
        t.envMap ? "#define " + l : "",
        t.envMap ? "#define " + u : "",
        t.envMap ? "#define " + h : "",
        f ? "#define CUBEUV_TEXEL_WIDTH " + f.texelWidth : "",
        f ? "#define CUBEUV_TEXEL_HEIGHT " + f.texelHeight : "",
        f ? "#define CUBEUV_MAX_MIP " + f.maxMip + ".0" : "",
        t.lightMap ? "#define USE_LIGHTMAP" : "",
        t.aoMap ? "#define USE_AOMAP" : "",
        t.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
        t.bumpMap ? "#define USE_BUMPMAP" : "",
        t.normalMap ? "#define USE_NORMALMAP" : "",
        t.normalMap && t.objectSpaceNormalMap
          ? "#define OBJECTSPACE_NORMALMAP"
          : "",
        t.normalMap && t.tangentSpaceNormalMap
          ? "#define TANGENTSPACE_NORMALMAP"
          : "",
        t.clearcoat ? "#define USE_CLEARCOAT" : "",
        t.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
        t.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
        t.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
        t.iridescence ? "#define USE_IRIDESCENCE" : "",
        t.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "",
        t.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "",
        t.specularMap ? "#define USE_SPECULARMAP" : "",
        t.specularIntensityMap ? "#define USE_SPECULARINTENSITYMAP" : "",
        t.specularColorMap ? "#define USE_SPECULARCOLORMAP" : "",
        t.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
        t.metalnessMap ? "#define USE_METALNESSMAP" : "",
        t.alphaMap ? "#define USE_ALPHAMAP" : "",
        t.alphaTest ? "#define USE_ALPHATEST" : "",
        t.sheen ? "#define USE_SHEEN" : "",
        t.sheenColorMap ? "#define USE_SHEENCOLORMAP" : "",
        t.sheenRoughnessMap ? "#define USE_SHEENROUGHNESSMAP" : "",
        t.transmission ? "#define USE_TRANSMISSION" : "",
        t.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
        t.thicknessMap ? "#define USE_THICKNESSMAP" : "",
        t.decodeVideoTexture ? "#define DECODE_VIDEO_TEXTURE" : "",
        t.vertexTangents ? "#define USE_TANGENT" : "",
        t.vertexColors || t.instancingColor ? "#define USE_COLOR" : "",
        t.vertexAlphas ? "#define USE_COLOR_ALPHA" : "",
        t.vertexUvs ? "#define USE_UV" : "",
        t.uvsVertexOnly ? "#define UVS_VERTEX_ONLY" : "",
        t.gradientMap ? "#define USE_GRADIENTMAP" : "",
        t.flatShading ? "#define FLAT_SHADED" : "",
        t.doubleSided ? "#define DOUBLE_SIDED" : "",
        t.flipSided ? "#define FLIP_SIDED" : "",
        t.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
        t.shadowMapEnabled ? "#define " + c : "",
        t.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "",
        t.physicallyCorrectLights ? "#define PHYSICALLY_CORRECT_LIGHTS" : "",
        t.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "",
        t.logarithmicDepthBuffer && t.rendererExtensionFragDepth
          ? "#define USE_LOGDEPTHBUF_EXT"
          : "",
        "uniform mat4 viewMatrix;",
        "uniform vec3 cameraPosition;",
        "uniform bool isOrthographic;",
        t.toneMapping !== An ? "#define TONE_MAPPING" : "",
        t.toneMapping !== An ? we.tonemapping_pars_fragment : "",
        t.toneMapping !== An ? ng("toneMapping", t.toneMapping) : "",
        t.dithering ? "#define DITHERING" : "",
        t.opaque ? "#define OPAQUE" : "",
        we.encodings_pars_fragment,
        tg("linearToOutputTexel", t.outputEncoding),
        t.useDepthPacking ? "#define DEPTH_PACKING " + t.depthPacking : "",
        `
`,
      ].filter(_r).join(`
`))),
    (a = Ba(a)),
    (a = Rl(a, t)),
    (a = Il(a, t)),
    (s = Ba(s)),
    (s = Rl(s, t)),
    (s = Il(s, t)),
    (a = zl(a)),
    (s = zl(s)),
    t.isWebGL2 &&
      t.isRawShaderMaterial !== !0 &&
      ((v = `#version 300 es
`),
      (p =
        [
          "precision mediump sampler2DArray;",
          "#define attribute in",
          "#define varying out",
          "#define texture2D texture",
        ].join(`
`) +
        `
` +
        p),
      (_ =
        [
          "#define varying in",
          t.glslVersion === il
            ? ""
            : "layout(location = 0) out highp vec4 pc_fragColor;",
          t.glslVersion === il ? "" : "#define gl_FragColor pc_fragColor",
          "#define gl_FragDepthEXT gl_FragDepth",
          "#define texture2D texture",
          "#define textureCube texture",
          "#define texture2DProj textureProj",
          "#define texture2DLodEXT textureLod",
          "#define texture2DProjLodEXT textureProjLod",
          "#define textureCubeLodEXT textureLod",
          "#define texture2DGradEXT textureGrad",
          "#define texture2DProjGradEXT textureProjGrad",
          "#define textureCubeGradEXT textureGrad",
        ].join(`
`) +
        `
` +
        _));
  const S = v + p + a,
    M = v + _ + s,
    y = Ll(i, 35633, S),
    E = Ll(i, 35632, M);
  if (
    (i.attachShader(d, y),
    i.attachShader(d, E),
    t.index0AttributeName !== void 0
      ? i.bindAttribLocation(d, 0, t.index0AttributeName)
      : t.morphTargets === !0 && i.bindAttribLocation(d, 0, "position"),
    i.linkProgram(d),
    o.debug.checkShaderErrors)
  ) {
    const w = i.getProgramInfoLog(d).trim(),
      P = i.getShaderInfoLog(y).trim(),
      W = i.getShaderInfoLog(E).trim();
    let K = !0,
      O = !0;
    if (i.getProgramParameter(d, 35714) === !1) {
      K = !1;
      const D = Dl(i, y, "vertex"),
        B = Dl(i, E, "fragment");
      console.error(
        "THREE.WebGLProgram: Shader Error " +
          i.getError() +
          " - VALIDATE_STATUS " +
          i.getProgramParameter(d, 35715) +
          `

Program Info Log: ` +
          w +
          `
` +
          D +
          `
` +
          B
      );
    } else
      w !== ""
        ? console.warn("THREE.WebGLProgram: Program Info Log:", w)
        : (P === "" || W === "") && (O = !1);
    O &&
      (this.diagnostics = {
        runnable: K,
        programLog: w,
        vertexShader: { log: P, prefix: p },
        fragmentShader: { log: W, prefix: _ },
      });
  }
  i.deleteShader(y), i.deleteShader(E);
  let A;
  this.getUniforms = function () {
    return A === void 0 && (A = new gs(i, d)), A;
  };
  let x;
  return (
    (this.getAttributes = function () {
      return x === void 0 && (x = sg(i, d)), x;
    }),
    (this.destroy = function () {
      n.releaseStatesOfProgram(this),
        i.deleteProgram(d),
        (this.program = void 0);
    }),
    (this.name = t.shaderName),
    (this.id = Jm++),
    (this.cacheKey = e),
    (this.usedTimes = 1),
    (this.program = d),
    (this.vertexShader = y),
    (this.fragmentShader = E),
    this
  );
}
let gg = 0;
class _g {
  constructor() {
    (this.shaderCache = new Map()), (this.materialCache = new Map());
  }
  update(e) {
    const t = e.vertexShader,
      n = e.fragmentShader,
      i = this._getShaderStage(t),
      r = this._getShaderStage(n),
      a = this._getShaderCacheForMaterial(e);
    return (
      a.has(i) === !1 && (a.add(i), i.usedTimes++),
      a.has(r) === !1 && (a.add(r), r.usedTimes++),
      this
    );
  }
  remove(e) {
    const t = this.materialCache.get(e);
    for (const n of t)
      n.usedTimes--, n.usedTimes === 0 && this.shaderCache.delete(n.code);
    return this.materialCache.delete(e), this;
  }
  getVertexShaderID(e) {
    return this._getShaderStage(e.vertexShader).id;
  }
  getFragmentShaderID(e) {
    return this._getShaderStage(e.fragmentShader).id;
  }
  dispose() {
    this.shaderCache.clear(), this.materialCache.clear();
  }
  _getShaderCacheForMaterial(e) {
    const t = this.materialCache;
    let n = t.get(e);
    return n === void 0 && ((n = new Set()), t.set(e, n)), n;
  }
  _getShaderStage(e) {
    const t = this.shaderCache;
    let n = t.get(e);
    return n === void 0 && ((n = new xg(e)), t.set(e, n)), n;
  }
}
class xg {
  constructor(e) {
    (this.id = gg++), (this.code = e), (this.usedTimes = 0);
  }
}
function vg(o, e, t, n, i, r, a) {
  const s = new Ec(),
    c = new _g(),
    l = [],
    u = i.isWebGL2,
    h = i.logarithmicDepthBuffer,
    f = i.vertexTextures;
  let m = i.precision;
  const g = {
    MeshDepthMaterial: "depth",
    MeshDistanceMaterial: "distanceRGBA",
    MeshNormalMaterial: "normal",
    MeshBasicMaterial: "basic",
    MeshLambertMaterial: "lambert",
    MeshPhongMaterial: "phong",
    MeshToonMaterial: "toon",
    MeshStandardMaterial: "physical",
    MeshPhysicalMaterial: "physical",
    MeshMatcapMaterial: "matcap",
    LineBasicMaterial: "basic",
    LineDashedMaterial: "dashed",
    PointsMaterial: "points",
    ShadowMaterial: "shadow",
    SpriteMaterial: "sprite",
  };
  function d(x, w, P, W, K) {
    const O = W.fog,
      D = K.geometry,
      B = x.isMeshStandardMaterial ? W.environment : null,
      Y = (x.isMeshStandardMaterial ? t : e).get(x.envMap || B),
      X = !!Y && Y.mapping === Ls ? Y.image.height : null,
      k = g[x.type];
    x.precision !== null &&
      ((m = i.getMaxPrecision(x.precision)),
      m !== x.precision &&
        console.warn(
          "THREE.WebGLProgram.getParameters:",
          x.precision,
          "not supported, using",
          m,
          "instead."
        ));
    const z =
        D.morphAttributes.position ||
        D.morphAttributes.normal ||
        D.morphAttributes.color,
      U = z !== void 0 ? z.length : 0;
    let J = 0;
    D.morphAttributes.position !== void 0 && (J = 1),
      D.morphAttributes.normal !== void 0 && (J = 2),
      D.morphAttributes.color !== void 0 && (J = 3);
    let Z, $, ie, de;
    if (k) {
      const Ue = ln[k];
      (Z = Ue.vertexShader), ($ = Ue.fragmentShader);
    } else
      (Z = x.vertexShader),
        ($ = x.fragmentShader),
        c.update(x),
        (ie = c.getVertexShaderID(x)),
        (de = c.getFragmentShaderID(x));
    const j = o.getRenderTarget(),
      Ie = x.alphaTest > 0,
      me = x.clearcoat > 0,
      _e = x.iridescence > 0;
    return {
      isWebGL2: u,
      shaderID: k,
      shaderName: x.type,
      vertexShader: Z,
      fragmentShader: $,
      defines: x.defines,
      customVertexShaderID: ie,
      customFragmentShaderID: de,
      isRawShaderMaterial: x.isRawShaderMaterial === !0,
      glslVersion: x.glslVersion,
      precision: m,
      instancing: K.isInstancedMesh === !0,
      instancingColor: K.isInstancedMesh === !0 && K.instanceColor !== null,
      supportsVertexTextures: f,
      outputEncoding:
        j === null
          ? o.outputEncoding
          : j.isXRRenderTarget === !0
          ? j.texture.encoding
          : _i,
      map: !!x.map,
      matcap: !!x.matcap,
      envMap: !!Y,
      envMapMode: Y && Y.mapping,
      envMapCubeUVHeight: X,
      lightMap: !!x.lightMap,
      aoMap: !!x.aoMap,
      emissiveMap: !!x.emissiveMap,
      bumpMap: !!x.bumpMap,
      normalMap: !!x.normalMap,
      objectSpaceNormalMap: x.normalMapType === qh,
      tangentSpaceNormalMap: x.normalMapType === Wh,
      decodeVideoTexture:
        !!x.map && x.map.isVideoTexture === !0 && x.map.encoding === Ge,
      clearcoat: me,
      clearcoatMap: me && !!x.clearcoatMap,
      clearcoatRoughnessMap: me && !!x.clearcoatRoughnessMap,
      clearcoatNormalMap: me && !!x.clearcoatNormalMap,
      iridescence: _e,
      iridescenceMap: _e && !!x.iridescenceMap,
      iridescenceThicknessMap: _e && !!x.iridescenceThicknessMap,
      displacementMap: !!x.displacementMap,
      roughnessMap: !!x.roughnessMap,
      metalnessMap: !!x.metalnessMap,
      specularMap: !!x.specularMap,
      specularIntensityMap: !!x.specularIntensityMap,
      specularColorMap: !!x.specularColorMap,
      opaque: x.transparent === !1 && x.blending === Gi,
      alphaMap: !!x.alphaMap,
      alphaTest: Ie,
      gradientMap: !!x.gradientMap,
      sheen: x.sheen > 0,
      sheenColorMap: !!x.sheenColorMap,
      sheenRoughnessMap: !!x.sheenRoughnessMap,
      transmission: x.transmission > 0,
      transmissionMap: !!x.transmissionMap,
      thicknessMap: !!x.thicknessMap,
      combine: x.combine,
      vertexTangents: !!x.normalMap && !!D.attributes.tangent,
      vertexColors: x.vertexColors,
      vertexAlphas:
        x.vertexColors === !0 &&
        !!D.attributes.color &&
        D.attributes.color.itemSize === 4,
      vertexUvs:
        !!x.map ||
        !!x.bumpMap ||
        !!x.normalMap ||
        !!x.specularMap ||
        !!x.alphaMap ||
        !!x.emissiveMap ||
        !!x.roughnessMap ||
        !!x.metalnessMap ||
        !!x.clearcoatMap ||
        !!x.clearcoatRoughnessMap ||
        !!x.clearcoatNormalMap ||
        !!x.iridescenceMap ||
        !!x.iridescenceThicknessMap ||
        !!x.displacementMap ||
        !!x.transmissionMap ||
        !!x.thicknessMap ||
        !!x.specularIntensityMap ||
        !!x.specularColorMap ||
        !!x.sheenColorMap ||
        !!x.sheenRoughnessMap,
      uvsVertexOnly:
        !(
          !!x.map ||
          !!x.bumpMap ||
          !!x.normalMap ||
          !!x.specularMap ||
          !!x.alphaMap ||
          !!x.emissiveMap ||
          !!x.roughnessMap ||
          !!x.metalnessMap ||
          !!x.clearcoatNormalMap ||
          !!x.iridescenceMap ||
          !!x.iridescenceThicknessMap ||
          x.transmission > 0 ||
          !!x.transmissionMap ||
          !!x.thicknessMap ||
          !!x.specularIntensityMap ||
          !!x.specularColorMap ||
          x.sheen > 0 ||
          !!x.sheenColorMap ||
          !!x.sheenRoughnessMap
        ) && !!x.displacementMap,
      fog: !!O,
      useFog: x.fog === !0,
      fogExp2: O && O.isFogExp2,
      flatShading: !!x.flatShading,
      sizeAttenuation: x.sizeAttenuation,
      logarithmicDepthBuffer: h,
      skinning: K.isSkinnedMesh === !0,
      morphTargets: D.morphAttributes.position !== void 0,
      morphNormals: D.morphAttributes.normal !== void 0,
      morphColors: D.morphAttributes.color !== void 0,
      morphTargetsCount: U,
      morphTextureStride: J,
      numDirLights: w.directional.length,
      numPointLights: w.point.length,
      numSpotLights: w.spot.length,
      numSpotLightMaps: w.spotLightMap.length,
      numRectAreaLights: w.rectArea.length,
      numHemiLights: w.hemi.length,
      numDirLightShadows: w.directionalShadowMap.length,
      numPointLightShadows: w.pointShadowMap.length,
      numSpotLightShadows: w.spotShadowMap.length,
      numSpotLightShadowsWithMaps: w.numSpotLightShadowsWithMaps,
      numClippingPlanes: a.numPlanes,
      numClipIntersection: a.numIntersection,
      dithering: x.dithering,
      shadowMapEnabled: o.shadowMap.enabled && P.length > 0,
      shadowMapType: o.shadowMap.type,
      toneMapping: x.toneMapped ? o.toneMapping : An,
      physicallyCorrectLights: o.physicallyCorrectLights,
      premultipliedAlpha: x.premultipliedAlpha,
      doubleSided: x.side === Vn,
      flipSided: x.side === Xt,
      useDepthPacking: !!x.depthPacking,
      depthPacking: x.depthPacking || 0,
      index0AttributeName: x.index0AttributeName,
      extensionDerivatives: x.extensions && x.extensions.derivatives,
      extensionFragDepth: x.extensions && x.extensions.fragDepth,
      extensionDrawBuffers: x.extensions && x.extensions.drawBuffers,
      extensionShaderTextureLOD: x.extensions && x.extensions.shaderTextureLOD,
      rendererExtensionFragDepth: u || n.has("EXT_frag_depth"),
      rendererExtensionDrawBuffers: u || n.has("WEBGL_draw_buffers"),
      rendererExtensionShaderTextureLod: u || n.has("EXT_shader_texture_lod"),
      customProgramCacheKey: x.customProgramCacheKey(),
    };
  }
  function p(x) {
    const w = [];
    if (
      (x.shaderID
        ? w.push(x.shaderID)
        : (w.push(x.customVertexShaderID), w.push(x.customFragmentShaderID)),
      x.defines !== void 0)
    )
      for (const P in x.defines) w.push(P), w.push(x.defines[P]);
    return (
      x.isRawShaderMaterial === !1 &&
        (_(w, x), v(w, x), w.push(o.outputEncoding)),
      w.push(x.customProgramCacheKey),
      w.join()
    );
  }
  function _(x, w) {
    x.push(w.precision),
      x.push(w.outputEncoding),
      x.push(w.envMapMode),
      x.push(w.envMapCubeUVHeight),
      x.push(w.combine),
      x.push(w.vertexUvs),
      x.push(w.fogExp2),
      x.push(w.sizeAttenuation),
      x.push(w.morphTargetsCount),
      x.push(w.morphAttributeCount),
      x.push(w.numDirLights),
      x.push(w.numPointLights),
      x.push(w.numSpotLights),
      x.push(w.numSpotLightMaps),
      x.push(w.numHemiLights),
      x.push(w.numRectAreaLights),
      x.push(w.numDirLightShadows),
      x.push(w.numPointLightShadows),
      x.push(w.numSpotLightShadows),
      x.push(w.numSpotLightShadowsWithMaps),
      x.push(w.shadowMapType),
      x.push(w.toneMapping),
      x.push(w.numClippingPlanes),
      x.push(w.numClipIntersection),
      x.push(w.depthPacking);
  }
  function v(x, w) {
    s.disableAll(),
      w.isWebGL2 && s.enable(0),
      w.supportsVertexTextures && s.enable(1),
      w.instancing && s.enable(2),
      w.instancingColor && s.enable(3),
      w.map && s.enable(4),
      w.matcap && s.enable(5),
      w.envMap && s.enable(6),
      w.lightMap && s.enable(7),
      w.aoMap && s.enable(8),
      w.emissiveMap && s.enable(9),
      w.bumpMap && s.enable(10),
      w.normalMap && s.enable(11),
      w.objectSpaceNormalMap && s.enable(12),
      w.tangentSpaceNormalMap && s.enable(13),
      w.clearcoat && s.enable(14),
      w.clearcoatMap && s.enable(15),
      w.clearcoatRoughnessMap && s.enable(16),
      w.clearcoatNormalMap && s.enable(17),
      w.iridescence && s.enable(18),
      w.iridescenceMap && s.enable(19),
      w.iridescenceThicknessMap && s.enable(20),
      w.displacementMap && s.enable(21),
      w.specularMap && s.enable(22),
      w.roughnessMap && s.enable(23),
      w.metalnessMap && s.enable(24),
      w.gradientMap && s.enable(25),
      w.alphaMap && s.enable(26),
      w.alphaTest && s.enable(27),
      w.vertexColors && s.enable(28),
      w.vertexAlphas && s.enable(29),
      w.vertexUvs && s.enable(30),
      w.vertexTangents && s.enable(31),
      w.uvsVertexOnly && s.enable(32),
      x.push(s.mask),
      s.disableAll(),
      w.fog && s.enable(0),
      w.useFog && s.enable(1),
      w.flatShading && s.enable(2),
      w.logarithmicDepthBuffer && s.enable(3),
      w.skinning && s.enable(4),
      w.morphTargets && s.enable(5),
      w.morphNormals && s.enable(6),
      w.morphColors && s.enable(7),
      w.premultipliedAlpha && s.enable(8),
      w.shadowMapEnabled && s.enable(9),
      w.physicallyCorrectLights && s.enable(10),
      w.doubleSided && s.enable(11),
      w.flipSided && s.enable(12),
      w.useDepthPacking && s.enable(13),
      w.dithering && s.enable(14),
      w.specularIntensityMap && s.enable(15),
      w.specularColorMap && s.enable(16),
      w.transmission && s.enable(17),
      w.transmissionMap && s.enable(18),
      w.thicknessMap && s.enable(19),
      w.sheen && s.enable(20),
      w.sheenColorMap && s.enable(21),
      w.sheenRoughnessMap && s.enable(22),
      w.decodeVideoTexture && s.enable(23),
      w.opaque && s.enable(24),
      x.push(s.mask);
  }
  function S(x) {
    const w = g[x.type];
    let P;
    if (w) {
      const W = ln[w];
      P = vs.clone(W.uniforms);
    } else P = x.uniforms;
    return P;
  }
  function M(x, w) {
    let P;
    for (let W = 0, K = l.length; W < K; W++) {
      const O = l[W];
      if (O.cacheKey === w) {
        (P = O), ++P.usedTimes;
        break;
      }
    }
    return P === void 0 && ((P = new mg(o, w, x, r)), l.push(P)), P;
  }
  function y(x) {
    if (--x.usedTimes === 0) {
      const w = l.indexOf(x);
      (l[w] = l[l.length - 1]), l.pop(), x.destroy();
    }
  }
  function E(x) {
    c.remove(x);
  }
  function A() {
    c.dispose();
  }
  return {
    getParameters: d,
    getProgramCacheKey: p,
    getUniforms: S,
    acquireProgram: M,
    releaseProgram: y,
    releaseShaderCache: E,
    programs: l,
    dispose: A,
  };
}
function yg() {
  let o = new WeakMap();
  function e(r) {
    let a = o.get(r);
    return a === void 0 && ((a = {}), o.set(r, a)), a;
  }
  function t(r) {
    o.delete(r);
  }
  function n(r, a, s) {
    o.get(r)[a] = s;
  }
  function i() {
    o = new WeakMap();
  }
  return { get: e, remove: t, update: n, dispose: i };
}
function Mg(o, e) {
  return o.groupOrder !== e.groupOrder
    ? o.groupOrder - e.groupOrder
    : o.renderOrder !== e.renderOrder
    ? o.renderOrder - e.renderOrder
    : o.material.id !== e.material.id
    ? o.material.id - e.material.id
    : o.z !== e.z
    ? o.z - e.z
    : o.id - e.id;
}
function Ol(o, e) {
  return o.groupOrder !== e.groupOrder
    ? o.groupOrder - e.groupOrder
    : o.renderOrder !== e.renderOrder
    ? o.renderOrder - e.renderOrder
    : o.z !== e.z
    ? e.z - o.z
    : o.id - e.id;
}
function Ul() {
  const o = [];
  let e = 0;
  const t = [],
    n = [],
    i = [];
  function r() {
    (e = 0), (t.length = 0), (n.length = 0), (i.length = 0);
  }
  function a(h, f, m, g, d, p) {
    let _ = o[e];
    return (
      _ === void 0
        ? ((_ = {
            id: h.id,
            object: h,
            geometry: f,
            material: m,
            groupOrder: g,
            renderOrder: h.renderOrder,
            z: d,
            group: p,
          }),
          (o[e] = _))
        : ((_.id = h.id),
          (_.object = h),
          (_.geometry = f),
          (_.material = m),
          (_.groupOrder = g),
          (_.renderOrder = h.renderOrder),
          (_.z = d),
          (_.group = p)),
      e++,
      _
    );
  }
  function s(h, f, m, g, d, p) {
    const _ = a(h, f, m, g, d, p);
    m.transmission > 0
      ? n.push(_)
      : m.transparent === !0
      ? i.push(_)
      : t.push(_);
  }
  function c(h, f, m, g, d, p) {
    const _ = a(h, f, m, g, d, p);
    m.transmission > 0
      ? n.unshift(_)
      : m.transparent === !0
      ? i.unshift(_)
      : t.unshift(_);
  }
  function l(h, f) {
    t.length > 1 && t.sort(h || Mg),
      n.length > 1 && n.sort(f || Ol),
      i.length > 1 && i.sort(f || Ol);
  }
  function u() {
    for (let h = e, f = o.length; h < f; h++) {
      const m = o[h];
      if (m.id === null) break;
      (m.id = null),
        (m.object = null),
        (m.geometry = null),
        (m.material = null),
        (m.group = null);
    }
  }
  return {
    opaque: t,
    transmissive: n,
    transparent: i,
    init: r,
    push: s,
    unshift: c,
    finish: u,
    sort: l,
  };
}
function Sg() {
  let o = new WeakMap();
  function e(n, i) {
    const r = o.get(n);
    let a;
    return (
      r === void 0
        ? ((a = new Ul()), o.set(n, [a]))
        : i >= r.length
        ? ((a = new Ul()), r.push(a))
        : (a = r[i]),
      a
    );
  }
  function t() {
    o = new WeakMap();
  }
  return { get: e, dispose: t };
}
function bg() {
  const o = {};
  return {
    get: function (e) {
      if (o[e.id] !== void 0) return o[e.id];
      let t;
      switch (e.type) {
        case "DirectionalLight":
          t = { direction: new R(), color: new De() };
          break;
        case "SpotLight":
          t = {
            position: new R(),
            direction: new R(),
            color: new De(),
            distance: 0,
            coneCos: 0,
            penumbraCos: 0,
            decay: 0,
          };
          break;
        case "PointLight":
          t = { position: new R(), color: new De(), distance: 0, decay: 0 };
          break;
        case "HemisphereLight":
          t = { direction: new R(), skyColor: new De(), groundColor: new De() };
          break;
        case "RectAreaLight":
          t = {
            color: new De(),
            position: new R(),
            halfWidth: new R(),
            halfHeight: new R(),
          };
          break;
      }
      return (o[e.id] = t), t;
    },
  };
}
function wg() {
  const o = {};
  return {
    get: function (e) {
      if (o[e.id] !== void 0) return o[e.id];
      let t;
      switch (e.type) {
        case "DirectionalLight":
          t = {
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new Se(),
          };
          break;
        case "SpotLight":
          t = {
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new Se(),
          };
          break;
        case "PointLight":
          t = {
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new Se(),
            shadowCameraNear: 1,
            shadowCameraFar: 1e3,
          };
          break;
      }
      return (o[e.id] = t), t;
    },
  };
}
let Tg = 0;
function Eg(o, e) {
  return (
    (e.castShadow ? 2 : 0) -
    (o.castShadow ? 2 : 0) +
    (e.map ? 1 : 0) -
    (o.map ? 1 : 0)
  );
}
function Cg(o, e) {
  const t = new bg(),
    n = wg(),
    i = {
      version: 0,
      hash: {
        directionalLength: -1,
        pointLength: -1,
        spotLength: -1,
        rectAreaLength: -1,
        hemiLength: -1,
        numDirectionalShadows: -1,
        numPointShadows: -1,
        numSpotShadows: -1,
        numSpotMaps: -1,
      },
      ambient: [0, 0, 0],
      probe: [],
      directional: [],
      directionalShadow: [],
      directionalShadowMap: [],
      directionalShadowMatrix: [],
      spot: [],
      spotLightMap: [],
      spotShadow: [],
      spotShadowMap: [],
      spotLightMatrix: [],
      rectArea: [],
      rectAreaLTC1: null,
      rectAreaLTC2: null,
      point: [],
      pointShadow: [],
      pointShadowMap: [],
      pointShadowMatrix: [],
      hemi: [],
      numSpotLightShadowsWithMaps: 0,
    };
  for (let u = 0; u < 9; u++) i.probe.push(new R());
  const r = new R(),
    a = new Qe(),
    s = new Qe();
  function c(u, h) {
    let f = 0,
      m = 0,
      g = 0;
    for (let W = 0; W < 9; W++) i.probe[W].set(0, 0, 0);
    let d = 0,
      p = 0,
      _ = 0,
      v = 0,
      S = 0,
      M = 0,
      y = 0,
      E = 0,
      A = 0,
      x = 0;
    u.sort(Eg);
    const w = h !== !0 ? Math.PI : 1;
    for (let W = 0, K = u.length; W < K; W++) {
      const O = u[W],
        D = O.color,
        B = O.intensity,
        Y = O.distance,
        X = O.shadow && O.shadow.map ? O.shadow.map.texture : null;
      if (O.isAmbientLight)
        (f += D.r * B * w), (m += D.g * B * w), (g += D.b * B * w);
      else if (O.isLightProbe)
        for (let k = 0; k < 9; k++)
          i.probe[k].addScaledVector(O.sh.coefficients[k], B);
      else if (O.isDirectionalLight) {
        const k = t.get(O);
        if (
          (k.color.copy(O.color).multiplyScalar(O.intensity * w), O.castShadow)
        ) {
          const z = O.shadow,
            U = n.get(O);
          (U.shadowBias = z.bias),
            (U.shadowNormalBias = z.normalBias),
            (U.shadowRadius = z.radius),
            (U.shadowMapSize = z.mapSize),
            (i.directionalShadow[d] = U),
            (i.directionalShadowMap[d] = X),
            (i.directionalShadowMatrix[d] = O.shadow.matrix),
            M++;
        }
        (i.directional[d] = k), d++;
      } else if (O.isSpotLight) {
        const k = t.get(O);
        k.position.setFromMatrixPosition(O.matrixWorld),
          k.color.copy(D).multiplyScalar(B * w),
          (k.distance = Y),
          (k.coneCos = Math.cos(O.angle)),
          (k.penumbraCos = Math.cos(O.angle * (1 - O.penumbra))),
          (k.decay = O.decay),
          (i.spot[_] = k);
        const z = O.shadow;
        if (
          (O.map &&
            ((i.spotLightMap[A] = O.map),
            A++,
            z.updateMatrices(O),
            O.castShadow && x++),
          (i.spotLightMatrix[_] = z.matrix),
          O.castShadow)
        ) {
          const U = n.get(O);
          (U.shadowBias = z.bias),
            (U.shadowNormalBias = z.normalBias),
            (U.shadowRadius = z.radius),
            (U.shadowMapSize = z.mapSize),
            (i.spotShadow[_] = U),
            (i.spotShadowMap[_] = X),
            E++;
        }
        _++;
      } else if (O.isRectAreaLight) {
        const k = t.get(O);
        k.color.copy(D).multiplyScalar(B),
          k.halfWidth.set(O.width * 0.5, 0, 0),
          k.halfHeight.set(0, O.height * 0.5, 0),
          (i.rectArea[v] = k),
          v++;
      } else if (O.isPointLight) {
        const k = t.get(O);
        if (
          (k.color.copy(O.color).multiplyScalar(O.intensity * w),
          (k.distance = O.distance),
          (k.decay = O.decay),
          O.castShadow)
        ) {
          const z = O.shadow,
            U = n.get(O);
          (U.shadowBias = z.bias),
            (U.shadowNormalBias = z.normalBias),
            (U.shadowRadius = z.radius),
            (U.shadowMapSize = z.mapSize),
            (U.shadowCameraNear = z.camera.near),
            (U.shadowCameraFar = z.camera.far),
            (i.pointShadow[p] = U),
            (i.pointShadowMap[p] = X),
            (i.pointShadowMatrix[p] = O.shadow.matrix),
            y++;
        }
        (i.point[p] = k), p++;
      } else if (O.isHemisphereLight) {
        const k = t.get(O);
        k.skyColor.copy(O.color).multiplyScalar(B * w),
          k.groundColor.copy(O.groundColor).multiplyScalar(B * w),
          (i.hemi[S] = k),
          S++;
      }
    }
    v > 0 &&
      (e.isWebGL2 || o.has("OES_texture_float_linear") === !0
        ? ((i.rectAreaLTC1 = te.LTC_FLOAT_1), (i.rectAreaLTC2 = te.LTC_FLOAT_2))
        : o.has("OES_texture_half_float_linear") === !0
        ? ((i.rectAreaLTC1 = te.LTC_HALF_1), (i.rectAreaLTC2 = te.LTC_HALF_2))
        : console.error(
            "THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions."
          )),
      (i.ambient[0] = f),
      (i.ambient[1] = m),
      (i.ambient[2] = g);
    const P = i.hash;
    (P.directionalLength !== d ||
      P.pointLength !== p ||
      P.spotLength !== _ ||
      P.rectAreaLength !== v ||
      P.hemiLength !== S ||
      P.numDirectionalShadows !== M ||
      P.numPointShadows !== y ||
      P.numSpotShadows !== E ||
      P.numSpotMaps !== A) &&
      ((i.directional.length = d),
      (i.spot.length = _),
      (i.rectArea.length = v),
      (i.point.length = p),
      (i.hemi.length = S),
      (i.directionalShadow.length = M),
      (i.directionalShadowMap.length = M),
      (i.pointShadow.length = y),
      (i.pointShadowMap.length = y),
      (i.spotShadow.length = E),
      (i.spotShadowMap.length = E),
      (i.directionalShadowMatrix.length = M),
      (i.pointShadowMatrix.length = y),
      (i.spotLightMatrix.length = E + A - x),
      (i.spotLightMap.length = A),
      (i.numSpotLightShadowsWithMaps = x),
      (P.directionalLength = d),
      (P.pointLength = p),
      (P.spotLength = _),
      (P.rectAreaLength = v),
      (P.hemiLength = S),
      (P.numDirectionalShadows = M),
      (P.numPointShadows = y),
      (P.numSpotShadows = E),
      (P.numSpotMaps = A),
      (i.version = Tg++));
  }
  function l(u, h) {
    let f = 0,
      m = 0,
      g = 0,
      d = 0,
      p = 0;
    const _ = h.matrixWorldInverse;
    for (let v = 0, S = u.length; v < S; v++) {
      const M = u[v];
      if (M.isDirectionalLight) {
        const y = i.directional[f];
        y.direction.setFromMatrixPosition(M.matrixWorld),
          r.setFromMatrixPosition(M.target.matrixWorld),
          y.direction.sub(r),
          y.direction.transformDirection(_),
          f++;
      } else if (M.isSpotLight) {
        const y = i.spot[g];
        y.position.setFromMatrixPosition(M.matrixWorld),
          y.position.applyMatrix4(_),
          y.direction.setFromMatrixPosition(M.matrixWorld),
          r.setFromMatrixPosition(M.target.matrixWorld),
          y.direction.sub(r),
          y.direction.transformDirection(_),
          g++;
      } else if (M.isRectAreaLight) {
        const y = i.rectArea[d];
        y.position.setFromMatrixPosition(M.matrixWorld),
          y.position.applyMatrix4(_),
          s.identity(),
          a.copy(M.matrixWorld),
          a.premultiply(_),
          s.extractRotation(a),
          y.halfWidth.set(M.width * 0.5, 0, 0),
          y.halfHeight.set(0, M.height * 0.5, 0),
          y.halfWidth.applyMatrix4(s),
          y.halfHeight.applyMatrix4(s),
          d++;
      } else if (M.isPointLight) {
        const y = i.point[m];
        y.position.setFromMatrixPosition(M.matrixWorld),
          y.position.applyMatrix4(_),
          m++;
      } else if (M.isHemisphereLight) {
        const y = i.hemi[p];
        y.direction.setFromMatrixPosition(M.matrixWorld),
          y.direction.transformDirection(_),
          p++;
      }
    }
  }
  return { setup: c, setupView: l, state: i };
}
function Nl(o, e) {
  const t = new Cg(o, e),
    n = [],
    i = [];
  function r() {
    (n.length = 0), (i.length = 0);
  }
  function a(h) {
    n.push(h);
  }
  function s(h) {
    i.push(h);
  }
  function c(h) {
    t.setup(n, h);
  }
  function l(h) {
    t.setupView(n, h);
  }
  return {
    init: r,
    state: { lightsArray: n, shadowsArray: i, lights: t },
    setupLights: c,
    setupLightsView: l,
    pushLight: a,
    pushShadow: s,
  };
}
function Ag(o, e) {
  let t = new WeakMap();
  function n(r, a = 0) {
    const s = t.get(r);
    let c;
    return (
      s === void 0
        ? ((c = new Nl(o, e)), t.set(r, [c]))
        : a >= s.length
        ? ((c = new Nl(o, e)), s.push(c))
        : (c = s[a]),
      c
    );
  }
  function i() {
    t = new WeakMap();
  }
  return { get: n, dispose: i };
}
class Pg extends lr {
  constructor(e) {
    super(),
      (this.isMeshDepthMaterial = !0),
      (this.type = "MeshDepthMaterial"),
      (this.depthPacking = Gh),
      (this.map = null),
      (this.alphaMap = null),
      (this.displacementMap = null),
      (this.displacementScale = 1),
      (this.displacementBias = 0),
      (this.wireframe = !1),
      (this.wireframeLinewidth = 1),
      this.setValues(e);
  }
  copy(e) {
    return (
      super.copy(e),
      (this.depthPacking = e.depthPacking),
      (this.map = e.map),
      (this.alphaMap = e.alphaMap),
      (this.displacementMap = e.displacementMap),
      (this.displacementScale = e.displacementScale),
      (this.displacementBias = e.displacementBias),
      (this.wireframe = e.wireframe),
      (this.wireframeLinewidth = e.wireframeLinewidth),
      this
    );
  }
}
class Lg extends lr {
  constructor(e) {
    super(),
      (this.isMeshDistanceMaterial = !0),
      (this.type = "MeshDistanceMaterial"),
      (this.referencePosition = new R()),
      (this.nearDistance = 1),
      (this.farDistance = 1e3),
      (this.map = null),
      (this.alphaMap = null),
      (this.displacementMap = null),
      (this.displacementScale = 1),
      (this.displacementBias = 0),
      this.setValues(e);
  }
  copy(e) {
    return (
      super.copy(e),
      this.referencePosition.copy(e.referencePosition),
      (this.nearDistance = e.nearDistance),
      (this.farDistance = e.farDistance),
      (this.map = e.map),
      (this.alphaMap = e.alphaMap),
      (this.displacementMap = e.displacementMap),
      (this.displacementScale = e.displacementScale),
      (this.displacementBias = e.displacementBias),
      this
    );
  }
}
const Dg = `void main() {
	gl_Position = vec4( position, 1.0 );
}`,
  Rg = `uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;
function Ig(o, e, t) {
  let n = new Dc();
  const i = new Se(),
    r = new Se(),
    a = new at(),
    s = new Pg({ depthPacking: Hh }),
    c = new Lg(),
    l = {},
    u = t.maxTextureSize,
    h = { 0: Xt, 1: Yi, 2: Vn },
    f = new yt({
      defines: { VSM_SAMPLES: 8 },
      uniforms: {
        shadow_pass: { value: null },
        resolution: { value: new Se() },
        radius: { value: 4 },
      },
      vertexShader: Dg,
      fragmentShader: Rg,
    }),
    m = f.clone();
  m.defines.HORIZONTAL_PASS = 1;
  const g = new $t();
  g.setAttribute(
    "position",
    new hn(new Float32Array([-1, -1, 0.5, 3, -1, 0.5, -1, 3, 0.5]), 3)
  );
  const d = new En(g, f),
    p = this;
  (this.enabled = !1),
    (this.autoUpdate = !0),
    (this.needsUpdate = !1),
    (this.type = mc),
    (this.render = function (M, y, E) {
      if (
        p.enabled === !1 ||
        (p.autoUpdate === !1 && p.needsUpdate === !1) ||
        M.length === 0
      )
        return;
      const A = o.getRenderTarget(),
        x = o.getActiveCubeFace(),
        w = o.getActiveMipmapLevel(),
        P = o.state;
      P.setBlending(qn),
        P.buffers.color.setClear(1, 1, 1, 1),
        P.buffers.depth.setTest(!0),
        P.setScissorTest(!1);
      for (let W = 0, K = M.length; W < K; W++) {
        const O = M[W],
          D = O.shadow;
        if (D === void 0) {
          console.warn("THREE.WebGLShadowMap:", O, "has no shadow.");
          continue;
        }
        if (D.autoUpdate === !1 && D.needsUpdate === !1) continue;
        i.copy(D.mapSize);
        const B = D.getFrameExtents();
        if (
          (i.multiply(B),
          r.copy(D.mapSize),
          (i.x > u || i.y > u) &&
            (i.x > u &&
              ((r.x = Math.floor(u / B.x)),
              (i.x = r.x * B.x),
              (D.mapSize.x = r.x)),
            i.y > u &&
              ((r.y = Math.floor(u / B.y)),
              (i.y = r.y * B.y),
              (D.mapSize.y = r.y))),
          D.map === null)
        ) {
          const X = this.type !== gr ? { minFilter: xt, magFilter: xt } : {};
          (D.map = new nn(i.x, i.y, X)),
            (D.map.texture.name = O.name + ".shadowMap"),
            D.camera.updateProjectionMatrix();
        }
        o.setRenderTarget(D.map), o.clear();
        const Y = D.getViewportCount();
        for (let X = 0; X < Y; X++) {
          const k = D.getViewport(X);
          a.set(r.x * k.x, r.y * k.y, r.x * k.z, r.y * k.w),
            P.viewport(a),
            D.updateMatrices(O, X),
            (n = D.getFrustum()),
            S(y, E, D.camera, O, this.type);
        }
        D.isPointLightShadow !== !0 && this.type === gr && _(D, E),
          (D.needsUpdate = !1);
      }
      (p.needsUpdate = !1), o.setRenderTarget(A, x, w);
    });
  function _(M, y) {
    const E = e.update(d);
    f.defines.VSM_SAMPLES !== M.blurSamples &&
      ((f.defines.VSM_SAMPLES = M.blurSamples),
      (m.defines.VSM_SAMPLES = M.blurSamples),
      (f.needsUpdate = !0),
      (m.needsUpdate = !0)),
      M.mapPass === null && (M.mapPass = new nn(i.x, i.y)),
      (f.uniforms.shadow_pass.value = M.map.texture),
      (f.uniforms.resolution.value = M.mapSize),
      (f.uniforms.radius.value = M.radius),
      o.setRenderTarget(M.mapPass),
      o.clear(),
      o.renderBufferDirect(y, null, E, f, d, null),
      (m.uniforms.shadow_pass.value = M.mapPass.texture),
      (m.uniforms.resolution.value = M.mapSize),
      (m.uniforms.radius.value = M.radius),
      o.setRenderTarget(M.map),
      o.clear(),
      o.renderBufferDirect(y, null, E, m, d, null);
  }
  function v(M, y, E, A, x, w) {
    let P = null;
    const W =
      E.isPointLight === !0 ? M.customDistanceMaterial : M.customDepthMaterial;
    if (
      (W !== void 0 ? (P = W) : (P = E.isPointLight === !0 ? c : s),
      (o.localClippingEnabled &&
        y.clipShadows === !0 &&
        Array.isArray(y.clippingPlanes) &&
        y.clippingPlanes.length !== 0) ||
        (y.displacementMap && y.displacementScale !== 0) ||
        (y.alphaMap && y.alphaTest > 0))
    ) {
      const K = P.uuid,
        O = y.uuid;
      let D = l[K];
      D === void 0 && ((D = {}), (l[K] = D));
      let B = D[O];
      B === void 0 && ((B = P.clone()), (D[O] = B)), (P = B);
    }
    return (
      (P.visible = y.visible),
      (P.wireframe = y.wireframe),
      w === gr
        ? (P.side = y.shadowSide !== null ? y.shadowSide : y.side)
        : (P.side = y.shadowSide !== null ? y.shadowSide : h[y.side]),
      (P.alphaMap = y.alphaMap),
      (P.alphaTest = y.alphaTest),
      (P.clipShadows = y.clipShadows),
      (P.clippingPlanes = y.clippingPlanes),
      (P.clipIntersection = y.clipIntersection),
      (P.displacementMap = y.displacementMap),
      (P.displacementScale = y.displacementScale),
      (P.displacementBias = y.displacementBias),
      (P.wireframeLinewidth = y.wireframeLinewidth),
      (P.linewidth = y.linewidth),
      E.isPointLight === !0 &&
        P.isMeshDistanceMaterial === !0 &&
        (P.referencePosition.setFromMatrixPosition(E.matrixWorld),
        (P.nearDistance = A),
        (P.farDistance = x)),
      P
    );
  }
  function S(M, y, E, A, x) {
    if (M.visible === !1) return;
    if (
      M.layers.test(y.layers) &&
      (M.isMesh || M.isLine || M.isPoints) &&
      (M.castShadow || (M.receiveShadow && x === gr)) &&
      (!M.frustumCulled || n.intersectsObject(M))
    ) {
      M.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse, M.matrixWorld);
      const W = e.update(M),
        K = M.material;
      if (Array.isArray(K)) {
        const O = W.groups;
        for (let D = 0, B = O.length; D < B; D++) {
          const Y = O[D],
            X = K[Y.materialIndex];
          if (X && X.visible) {
            const k = v(M, X, A, E.near, E.far, x);
            o.renderBufferDirect(E, null, W, k, M, Y);
          }
        }
      } else if (K.visible) {
        const O = v(M, K, A, E.near, E.far, x);
        o.renderBufferDirect(E, null, W, O, M, null);
      }
    }
    const P = M.children;
    for (let W = 0, K = P.length; W < K; W++) S(P[W], y, E, A, x);
  }
}
function zg(o, e, t) {
  const n = t.isWebGL2;
  function i() {
    let L = !1;
    const ae = new at();
    let V = null;
    const se = new at(0, 0, 0, 0);
    return {
      setMask: function (ne) {
        V !== ne && !L && (o.colorMask(ne, ne, ne, ne), (V = ne));
      },
      setLocked: function (ne) {
        L = ne;
      },
      setClear: function (ne, Ae, et, Xe, Rn) {
        Rn === !0 && ((ne *= Xe), (Ae *= Xe), (et *= Xe)),
          ae.set(ne, Ae, et, Xe),
          se.equals(ae) === !1 && (o.clearColor(ne, Ae, et, Xe), se.copy(ae));
      },
      reset: function () {
        (L = !1), (V = null), se.set(-1, 0, 0, 0);
      },
    };
  }
  function r() {
    let L = !1,
      ae = null,
      V = null,
      se = null;
    return {
      setTest: function (ne) {
        ne ? Ie(2929) : me(2929);
      },
      setMask: function (ne) {
        ae !== ne && !L && (o.depthMask(ne), (ae = ne));
      },
      setFunc: function (ne) {
        if (V !== ne) {
          if (ne)
            switch (ne) {
              case fh:
                o.depthFunc(512);
                break;
              case dh:
                o.depthFunc(519);
                break;
              case ph:
                o.depthFunc(513);
                break;
              case Ra:
                o.depthFunc(515);
                break;
              case mh:
                o.depthFunc(514);
                break;
              case gh:
                o.depthFunc(518);
                break;
              case _h:
                o.depthFunc(516);
                break;
              case xh:
                o.depthFunc(517);
                break;
              default:
                o.depthFunc(515);
            }
          else o.depthFunc(515);
          V = ne;
        }
      },
      setLocked: function (ne) {
        L = ne;
      },
      setClear: function (ne) {
        se !== ne && (o.clearDepth(ne), (se = ne));
      },
      reset: function () {
        (L = !1), (ae = null), (V = null), (se = null);
      },
    };
  }
  function a() {
    let L = !1,
      ae = null,
      V = null,
      se = null,
      ne = null,
      Ae = null,
      et = null,
      Xe = null,
      Rn = null;
    return {
      setTest: function (ke) {
        L || (ke ? Ie(2960) : me(2960));
      },
      setMask: function (ke) {
        ae !== ke && !L && (o.stencilMask(ke), (ae = ke));
      },
      setFunc: function (ke, gn, Ft) {
        (V !== ke || se !== gn || ne !== Ft) &&
          (o.stencilFunc(ke, gn, Ft), (V = ke), (se = gn), (ne = Ft));
      },
      setOp: function (ke, gn, Ft) {
        (Ae !== ke || et !== gn || Xe !== Ft) &&
          (o.stencilOp(ke, gn, Ft), (Ae = ke), (et = gn), (Xe = Ft));
      },
      setLocked: function (ke) {
        L = ke;
      },
      setClear: function (ke) {
        Rn !== ke && (o.clearStencil(ke), (Rn = ke));
      },
      reset: function () {
        (L = !1),
          (ae = null),
          (V = null),
          (se = null),
          (ne = null),
          (Ae = null),
          (et = null),
          (Xe = null),
          (Rn = null);
      },
    };
  }
  const s = new i(),
    c = new r(),
    l = new a(),
    u = new WeakMap(),
    h = new WeakMap();
  let f = {},
    m = {},
    g = new WeakMap(),
    d = [],
    p = null,
    _ = !1,
    v = null,
    S = null,
    M = null,
    y = null,
    E = null,
    A = null,
    x = null,
    w = !1,
    P = null,
    W = null,
    K = null,
    O = null,
    D = null;
  const B = o.getParameter(35661);
  let Y = !1,
    X = 0;
  const k = o.getParameter(7938);
  k.indexOf("WebGL") !== -1
    ? ((X = parseFloat(/^WebGL (\d)/.exec(k)[1])), (Y = X >= 1))
    : k.indexOf("OpenGL ES") !== -1 &&
      ((X = parseFloat(/^OpenGL ES (\d)/.exec(k)[1])), (Y = X >= 2));
  let z = null,
    U = {};
  const J = o.getParameter(3088),
    Z = o.getParameter(2978),
    $ = new at().fromArray(J),
    ie = new at().fromArray(Z);
  function de(L, ae, V) {
    const se = new Uint8Array(4),
      ne = o.createTexture();
    o.bindTexture(L, ne),
      o.texParameteri(L, 10241, 9728),
      o.texParameteri(L, 10240, 9728);
    for (let Ae = 0; Ae < V; Ae++)
      o.texImage2D(ae + Ae, 0, 6408, 1, 1, 0, 6408, 5121, se);
    return ne;
  }
  const j = {};
  (j[3553] = de(3553, 3553, 1)),
    (j[34067] = de(34067, 34069, 6)),
    s.setClear(0, 0, 0, 1),
    c.setClear(1),
    l.setClear(0),
    Ie(2929),
    c.setFunc(Ra),
    ht(!1),
    sn(Ao),
    Ie(2884),
    it(qn);
  function Ie(L) {
    f[L] !== !0 && (o.enable(L), (f[L] = !0));
  }
  function me(L) {
    f[L] !== !1 && (o.disable(L), (f[L] = !1));
  }
  function _e(L, ae) {
    return m[L] !== ae
      ? (o.bindFramebuffer(L, ae),
        (m[L] = ae),
        n && (L === 36009 && (m[36160] = ae), L === 36160 && (m[36009] = ae)),
        !0)
      : !1;
  }
  function le(L, ae) {
    let V = d,
      se = !1;
    if (L)
      if (
        ((V = g.get(ae)),
        V === void 0 && ((V = []), g.set(ae, V)),
        L.isWebGLMultipleRenderTargets)
      ) {
        const ne = L.texture;
        if (V.length !== ne.length || V[0] !== 36064) {
          for (let Ae = 0, et = ne.length; Ae < et; Ae++) V[Ae] = 36064 + Ae;
          (V.length = ne.length), (se = !0);
        }
      } else V[0] !== 36064 && ((V[0] = 36064), (se = !0));
    else V[0] !== 1029 && ((V[0] = 1029), (se = !0));
    se &&
      (t.isWebGL2
        ? o.drawBuffers(V)
        : e.get("WEBGL_draw_buffers").drawBuffersWEBGL(V));
  }
  function Ue(L) {
    return p !== L ? (o.useProgram(L), (p = L), !0) : !1;
  }
  const be = { [Ni]: 32774, [th]: 32778, [nh]: 32779 };
  if (n) (be[Do] = 32775), (be[Ro] = 32776);
  else {
    const L = e.get("EXT_blend_minmax");
    L !== null && ((be[Do] = L.MIN_EXT), (be[Ro] = L.MAX_EXT));
  }
  const pe = {
    [ih]: 0,
    [rh]: 1,
    [sh]: 768,
    [gc]: 770,
    [hh]: 776,
    [ch]: 774,
    [oh]: 772,
    [ah]: 769,
    [_c]: 771,
    [uh]: 775,
    [lh]: 773,
  };
  function it(L, ae, V, se, ne, Ae, et, Xe) {
    if (L === qn) {
      _ === !0 && (me(3042), (_ = !1));
      return;
    }
    if ((_ === !1 && (Ie(3042), (_ = !0)), L !== eh)) {
      if (L !== v || Xe !== w) {
        if (
          ((S !== Ni || E !== Ni) &&
            (o.blendEquation(32774), (S = Ni), (E = Ni)),
          Xe)
        )
          switch (L) {
            case Gi:
              o.blendFuncSeparate(1, 771, 1, 771);
              break;
            case Da:
              o.blendFunc(1, 1);
              break;
            case Po:
              o.blendFuncSeparate(0, 769, 0, 1);
              break;
            case Lo:
              o.blendFuncSeparate(0, 768, 0, 770);
              break;
            default:
              console.error("THREE.WebGLState: Invalid blending: ", L);
              break;
          }
        else
          switch (L) {
            case Gi:
              o.blendFuncSeparate(770, 771, 1, 771);
              break;
            case Da:
              o.blendFunc(770, 1);
              break;
            case Po:
              o.blendFuncSeparate(0, 769, 0, 1);
              break;
            case Lo:
              o.blendFunc(0, 768);
              break;
            default:
              console.error("THREE.WebGLState: Invalid blending: ", L);
              break;
          }
        (M = null), (y = null), (A = null), (x = null), (v = L), (w = Xe);
      }
      return;
    }
    (ne = ne || ae),
      (Ae = Ae || V),
      (et = et || se),
      (ae !== S || ne !== E) &&
        (o.blendEquationSeparate(be[ae], be[ne]), (S = ae), (E = ne)),
      (V !== M || se !== y || Ae !== A || et !== x) &&
        (o.blendFuncSeparate(pe[V], pe[se], pe[Ae], pe[et]),
        (M = V),
        (y = se),
        (A = Ae),
        (x = et)),
      (v = L),
      (w = null);
  }
  function wt(L, ae) {
    L.side === Vn ? me(2884) : Ie(2884);
    let V = L.side === Xt;
    ae && (V = !V),
      ht(V),
      L.blending === Gi && L.transparent === !1
        ? it(qn)
        : it(
            L.blending,
            L.blendEquation,
            L.blendSrc,
            L.blendDst,
            L.blendEquationAlpha,
            L.blendSrcAlpha,
            L.blendDstAlpha,
            L.premultipliedAlpha
          ),
      c.setFunc(L.depthFunc),
      c.setTest(L.depthTest),
      c.setMask(L.depthWrite),
      s.setMask(L.colorWrite);
    const se = L.stencilWrite;
    l.setTest(se),
      se &&
        (l.setMask(L.stencilWriteMask),
        l.setFunc(L.stencilFunc, L.stencilRef, L.stencilFuncMask),
        l.setOp(L.stencilFail, L.stencilZFail, L.stencilZPass)),
      ze(L.polygonOffset, L.polygonOffsetFactor, L.polygonOffsetUnits),
      L.alphaToCoverage === !0 ? Ie(32926) : me(32926);
  }
  function ht(L) {
    P !== L && (L ? o.frontFace(2304) : o.frontFace(2305), (P = L));
  }
  function sn(L) {
    L !== Ku
      ? (Ie(2884),
        L !== W &&
          (L === Ao
            ? o.cullFace(1029)
            : L === Ju
            ? o.cullFace(1028)
            : o.cullFace(1032)))
      : me(2884),
      (W = L);
  }
  function rt(L) {
    L !== K && (Y && o.lineWidth(L), (K = L));
  }
  function ze(L, ae, V) {
    L
      ? (Ie(32823),
        (O !== ae || D !== V) && (o.polygonOffset(ae, V), (O = ae), (D = V)))
      : me(32823);
  }
  function mn(L) {
    L ? Ie(3089) : me(3089);
  }
  function an(L) {
    L === void 0 && (L = 33984 + B - 1),
      z !== L && (o.activeTexture(L), (z = L));
  }
  function C(L, ae) {
    z === null && an();
    let V = U[z];
    V === void 0 && ((V = { type: void 0, texture: void 0 }), (U[z] = V)),
      (V.type !== L || V.texture !== ae) &&
        (o.bindTexture(L, ae || j[L]), (V.type = L), (V.texture = ae));
  }
  function b() {
    const L = U[z];
    L !== void 0 &&
      L.type !== void 0 &&
      (o.bindTexture(L.type, null), (L.type = void 0), (L.texture = void 0));
  }
  function H() {
    try {
      o.compressedTexImage2D.apply(o, arguments);
    } catch (L) {
      console.error("THREE.WebGLState:", L);
    }
  }
  function Q() {
    try {
      o.texSubImage2D.apply(o, arguments);
    } catch (L) {
      console.error("THREE.WebGLState:", L);
    }
  }
  function ee() {
    try {
      o.texSubImage3D.apply(o, arguments);
    } catch (L) {
      console.error("THREE.WebGLState:", L);
    }
  }
  function re() {
    try {
      o.compressedTexSubImage2D.apply(o, arguments);
    } catch (L) {
      console.error("THREE.WebGLState:", L);
    }
  }
  function xe() {
    try {
      o.texStorage2D.apply(o, arguments);
    } catch (L) {
      console.error("THREE.WebGLState:", L);
    }
  }
  function N() {
    try {
      o.texStorage3D.apply(o, arguments);
    } catch (L) {
      console.error("THREE.WebGLState:", L);
    }
  }
  function he() {
    try {
      o.texImage2D.apply(o, arguments);
    } catch (L) {
      console.error("THREE.WebGLState:", L);
    }
  }
  function oe() {
    try {
      o.texImage3D.apply(o, arguments);
    } catch (L) {
      console.error("THREE.WebGLState:", L);
    }
  }
  function ue(L) {
    $.equals(L) === !1 && (o.scissor(L.x, L.y, L.z, L.w), $.copy(L));
  }
  function ce(L) {
    ie.equals(L) === !1 && (o.viewport(L.x, L.y, L.z, L.w), ie.copy(L));
  }
  function ye(L, ae) {
    let V = h.get(ae);
    V === void 0 && ((V = new WeakMap()), h.set(ae, V));
    let se = V.get(L);
    se === void 0 && ((se = o.getUniformBlockIndex(ae, L.name)), V.set(L, se));
  }
  function Pe(L, ae) {
    const se = h.get(ae).get(L);
    u.get(L) !== se &&
      (o.uniformBlockBinding(ae, se, L.__bindingPointIndex), u.set(L, se));
  }
  function qe() {
    o.disable(3042),
      o.disable(2884),
      o.disable(2929),
      o.disable(32823),
      o.disable(3089),
      o.disable(2960),
      o.disable(32926),
      o.blendEquation(32774),
      o.blendFunc(1, 0),
      o.blendFuncSeparate(1, 0, 1, 0),
      o.colorMask(!0, !0, !0, !0),
      o.clearColor(0, 0, 0, 0),
      o.depthMask(!0),
      o.depthFunc(513),
      o.clearDepth(1),
      o.stencilMask(4294967295),
      o.stencilFunc(519, 0, 4294967295),
      o.stencilOp(7680, 7680, 7680),
      o.clearStencil(0),
      o.cullFace(1029),
      o.frontFace(2305),
      o.polygonOffset(0, 0),
      o.activeTexture(33984),
      o.bindFramebuffer(36160, null),
      n === !0 &&
        (o.bindFramebuffer(36009, null), o.bindFramebuffer(36008, null)),
      o.useProgram(null),
      o.lineWidth(1),
      o.scissor(0, 0, o.canvas.width, o.canvas.height),
      o.viewport(0, 0, o.canvas.width, o.canvas.height),
      (f = {}),
      (z = null),
      (U = {}),
      (m = {}),
      (g = new WeakMap()),
      (d = []),
      (p = null),
      (_ = !1),
      (v = null),
      (S = null),
      (M = null),
      (y = null),
      (E = null),
      (A = null),
      (x = null),
      (w = !1),
      (P = null),
      (W = null),
      (K = null),
      (O = null),
      (D = null),
      $.set(0, 0, o.canvas.width, o.canvas.height),
      ie.set(0, 0, o.canvas.width, o.canvas.height),
      s.reset(),
      c.reset(),
      l.reset();
  }
  return {
    buffers: { color: s, depth: c, stencil: l },
    enable: Ie,
    disable: me,
    bindFramebuffer: _e,
    drawBuffers: le,
    useProgram: Ue,
    setBlending: it,
    setMaterial: wt,
    setFlipSided: ht,
    setCullFace: sn,
    setLineWidth: rt,
    setPolygonOffset: ze,
    setScissorTest: mn,
    activeTexture: an,
    bindTexture: C,
    unbindTexture: b,
    compressedTexImage2D: H,
    texImage2D: he,
    texImage3D: oe,
    updateUBOMapping: ye,
    uniformBlockBinding: Pe,
    texStorage2D: xe,
    texStorage3D: N,
    texSubImage2D: Q,
    texSubImage3D: ee,
    compressedTexSubImage2D: re,
    scissor: ue,
    viewport: ce,
    reset: qe,
  };
}
function Fg(o, e, t, n, i, r, a) {
  const s = i.isWebGL2,
    c = i.maxTextures,
    l = i.maxCubemapSize,
    u = i.maxTextureSize,
    h = i.maxSamples,
    f = e.has("WEBGL_multisampled_render_to_texture")
      ? e.get("WEBGL_multisampled_render_to_texture")
      : null,
    m = /OculusBrowser/g.test(navigator.userAgent),
    g = new WeakMap();
  let d;
  const p = new WeakMap();
  let _ = !1;
  try {
    _ =
      typeof OffscreenCanvas < "u" &&
      new OffscreenCanvas(1, 1).getContext("2d") !== null;
  } catch {}
  function v(C, b) {
    return _ ? new OffscreenCanvas(C, b) : Er("canvas");
  }
  function S(C, b, H, Q) {
    let ee = 1;
    if (
      ((C.width > Q || C.height > Q) && (ee = Q / Math.max(C.width, C.height)),
      ee < 1 || b === !0)
    )
      if (
        (typeof HTMLImageElement < "u" && C instanceof HTMLImageElement) ||
        (typeof HTMLCanvasElement < "u" && C instanceof HTMLCanvasElement) ||
        (typeof ImageBitmap < "u" && C instanceof ImageBitmap)
      ) {
        const re = b ? Na : Math.floor,
          xe = re(ee * C.width),
          N = re(ee * C.height);
        d === void 0 && (d = v(xe, N));
        const he = H ? v(xe, N) : d;
        return (
          (he.width = xe),
          (he.height = N),
          he.getContext("2d").drawImage(C, 0, 0, xe, N),
          console.warn(
            "THREE.WebGLRenderer: Texture has been resized from (" +
              C.width +
              "x" +
              C.height +
              ") to (" +
              xe +
              "x" +
              N +
              ")."
          ),
          he
        );
      } else
        return (
          "data" in C &&
            console.warn(
              "THREE.WebGLRenderer: Image in DataTexture is too big (" +
                C.width +
                "x" +
                C.height +
                ")."
            ),
          C
        );
    return C;
  }
  function M(C) {
    return sl(C.width) && sl(C.height);
  }
  function y(C) {
    return s
      ? !1
      : C.wrapS !== tn ||
          C.wrapT !== tn ||
          (C.minFilter !== xt && C.minFilter !== kt);
  }
  function E(C, b) {
    return C.generateMipmaps && b && C.minFilter !== xt && C.minFilter !== kt;
  }
  function A(C) {
    o.generateMipmap(C);
  }
  function x(C, b, H, Q, ee = !1) {
    if (s === !1) return b;
    if (C !== null) {
      if (o[C] !== void 0) return o[C];
      console.warn(
        "THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '" +
          C +
          "'"
      );
    }
    let re = b;
    return (
      b === 6403 &&
        (H === 5126 && (re = 33326),
        H === 5131 && (re = 33325),
        H === 5121 && (re = 33321)),
      b === 33319 &&
        (H === 5126 && (re = 33328),
        H === 5131 && (re = 33327),
        H === 5121 && (re = 33323)),
      b === 6408 &&
        (H === 5126 && (re = 34836),
        H === 5131 && (re = 34842),
        H === 5121 && (re = Q === Ge && ee === !1 ? 35907 : 32856),
        H === 32819 && (re = 32854),
        H === 32820 && (re = 32855)),
      (re === 33325 ||
        re === 33326 ||
        re === 33327 ||
        re === 33328 ||
        re === 34842 ||
        re === 34836) &&
        e.get("EXT_color_buffer_float"),
      re
    );
  }
  function w(C, b, H) {
    return E(C, H) === !0 ||
      (C.isFramebufferTexture && C.minFilter !== xt && C.minFilter !== kt)
      ? Math.log2(Math.max(b.width, b.height)) + 1
      : C.mipmaps !== void 0 && C.mipmaps.length > 0
      ? C.mipmaps.length
      : C.isCompressedTexture && Array.isArray(C.image)
      ? b.mipmaps.length
      : 1;
  }
  function P(C) {
    return C === xt || C === Io || C === zo ? 9728 : 9729;
  }
  function W(C) {
    const b = C.target;
    b.removeEventListener("dispose", W), O(b), b.isVideoTexture && g.delete(b);
  }
  function K(C) {
    const b = C.target;
    b.removeEventListener("dispose", K), B(b);
  }
  function O(C) {
    const b = n.get(C);
    if (b.__webglInit === void 0) return;
    const H = C.source,
      Q = p.get(H);
    if (Q) {
      const ee = Q[b.__cacheKey];
      ee.usedTimes--,
        ee.usedTimes === 0 && D(C),
        Object.keys(Q).length === 0 && p.delete(H);
    }
    n.remove(C);
  }
  function D(C) {
    const b = n.get(C);
    o.deleteTexture(b.__webglTexture);
    const H = C.source,
      Q = p.get(H);
    delete Q[b.__cacheKey], a.memory.textures--;
  }
  function B(C) {
    const b = C.texture,
      H = n.get(C),
      Q = n.get(b);
    if (
      (Q.__webglTexture !== void 0 &&
        (o.deleteTexture(Q.__webglTexture), a.memory.textures--),
      C.depthTexture && C.depthTexture.dispose(),
      C.isWebGLCubeRenderTarget)
    )
      for (let ee = 0; ee < 6; ee++)
        o.deleteFramebuffer(H.__webglFramebuffer[ee]),
          H.__webglDepthbuffer &&
            o.deleteRenderbuffer(H.__webglDepthbuffer[ee]);
    else {
      if (
        (o.deleteFramebuffer(H.__webglFramebuffer),
        H.__webglDepthbuffer && o.deleteRenderbuffer(H.__webglDepthbuffer),
        H.__webglMultisampledFramebuffer &&
          o.deleteFramebuffer(H.__webglMultisampledFramebuffer),
        H.__webglColorRenderbuffer)
      )
        for (let ee = 0; ee < H.__webglColorRenderbuffer.length; ee++)
          H.__webglColorRenderbuffer[ee] &&
            o.deleteRenderbuffer(H.__webglColorRenderbuffer[ee]);
      H.__webglDepthRenderbuffer &&
        o.deleteRenderbuffer(H.__webglDepthRenderbuffer);
    }
    if (C.isWebGLMultipleRenderTargets)
      for (let ee = 0, re = b.length; ee < re; ee++) {
        const xe = n.get(b[ee]);
        xe.__webglTexture &&
          (o.deleteTexture(xe.__webglTexture), a.memory.textures--),
          n.remove(b[ee]);
      }
    n.remove(b), n.remove(C);
  }
  let Y = 0;
  function X() {
    Y = 0;
  }
  function k() {
    const C = Y;
    return (
      C >= c &&
        console.warn(
          "THREE.WebGLTextures: Trying to use " +
            C +
            " texture units while this GPU supports only " +
            c
        ),
      (Y += 1),
      C
    );
  }
  function z(C) {
    const b = [];
    return (
      b.push(C.wrapS),
      b.push(C.wrapT),
      b.push(C.magFilter),
      b.push(C.minFilter),
      b.push(C.anisotropy),
      b.push(C.internalFormat),
      b.push(C.format),
      b.push(C.type),
      b.push(C.generateMipmaps),
      b.push(C.premultiplyAlpha),
      b.push(C.flipY),
      b.push(C.unpackAlignment),
      b.push(C.encoding),
      b.join()
    );
  }
  function U(C, b) {
    const H = n.get(C);
    if (
      (C.isVideoTexture && mn(C),
      C.isRenderTargetTexture === !1 &&
        C.version > 0 &&
        H.__version !== C.version)
    ) {
      const Q = C.image;
      if (Q === null)
        console.warn(
          "THREE.WebGLRenderer: Texture marked for update but no image data found."
        );
      else if (Q.complete === !1)
        console.warn(
          "THREE.WebGLRenderer: Texture marked for update but image is incomplete"
        );
      else {
        me(H, C, b);
        return;
      }
    }
    t.activeTexture(33984 + b), t.bindTexture(3553, H.__webglTexture);
  }
  function J(C, b) {
    const H = n.get(C);
    if (C.version > 0 && H.__version !== C.version) {
      me(H, C, b);
      return;
    }
    t.activeTexture(33984 + b), t.bindTexture(35866, H.__webglTexture);
  }
  function Z(C, b) {
    const H = n.get(C);
    if (C.version > 0 && H.__version !== C.version) {
      me(H, C, b);
      return;
    }
    t.activeTexture(33984 + b), t.bindTexture(32879, H.__webglTexture);
  }
  function $(C, b) {
    const H = n.get(C);
    if (C.version > 0 && H.__version !== C.version) {
      _e(H, C, b);
      return;
    }
    t.activeTexture(33984 + b), t.bindTexture(34067, H.__webglTexture);
  }
  const ie = { [Fa]: 10497, [tn]: 33071, [Oa]: 33648 },
    de = {
      [xt]: 9728,
      [Io]: 9984,
      [zo]: 9986,
      [kt]: 9729,
      [Eh]: 9985,
      [Ds]: 9987,
    };
  function j(C, b, H) {
    if (
      (H
        ? (o.texParameteri(C, 10242, ie[b.wrapS]),
          o.texParameteri(C, 10243, ie[b.wrapT]),
          (C === 32879 || C === 35866) &&
            o.texParameteri(C, 32882, ie[b.wrapR]),
          o.texParameteri(C, 10240, de[b.magFilter]),
          o.texParameteri(C, 10241, de[b.minFilter]))
        : (o.texParameteri(C, 10242, 33071),
          o.texParameteri(C, 10243, 33071),
          (C === 32879 || C === 35866) && o.texParameteri(C, 32882, 33071),
          (b.wrapS !== tn || b.wrapT !== tn) &&
            console.warn(
              "THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."
            ),
          o.texParameteri(C, 10240, P(b.magFilter)),
          o.texParameteri(C, 10241, P(b.minFilter)),
          b.minFilter !== xt &&
            b.minFilter !== kt &&
            console.warn(
              "THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter."
            )),
      e.has("EXT_texture_filter_anisotropic") === !0)
    ) {
      const Q = e.get("EXT_texture_filter_anisotropic");
      if (
        (b.type === li && e.has("OES_texture_float_linear") === !1) ||
        (s === !1 &&
          b.type === Tr &&
          e.has("OES_texture_half_float_linear") === !1)
      )
        return;
      (b.anisotropy > 1 || n.get(b).__currentAnisotropy) &&
        (o.texParameterf(
          C,
          Q.TEXTURE_MAX_ANISOTROPY_EXT,
          Math.min(b.anisotropy, i.getMaxAnisotropy())
        ),
        (n.get(b).__currentAnisotropy = b.anisotropy));
    }
  }
  function Ie(C, b) {
    let H = !1;
    C.__webglInit === void 0 &&
      ((C.__webglInit = !0), b.addEventListener("dispose", W));
    const Q = b.source;
    let ee = p.get(Q);
    ee === void 0 && ((ee = {}), p.set(Q, ee));
    const re = z(b);
    if (re !== C.__cacheKey) {
      ee[re] === void 0 &&
        ((ee[re] = { texture: o.createTexture(), usedTimes: 0 }),
        a.memory.textures++,
        (H = !0)),
        ee[re].usedTimes++;
      const xe = ee[C.__cacheKey];
      xe !== void 0 &&
        (ee[C.__cacheKey].usedTimes--, xe.usedTimes === 0 && D(b)),
        (C.__cacheKey = re),
        (C.__webglTexture = ee[re].texture);
    }
    return H;
  }
  function me(C, b, H) {
    let Q = 3553;
    b.isDataArrayTexture && (Q = 35866), b.isData3DTexture && (Q = 32879);
    const ee = Ie(C, b),
      re = b.source;
    if (
      (t.activeTexture(33984 + H),
      t.bindTexture(Q, C.__webglTexture),
      re.version !== re.__currentVersion || ee === !0)
    ) {
      o.pixelStorei(37440, b.flipY),
        o.pixelStorei(37441, b.premultiplyAlpha),
        o.pixelStorei(3317, b.unpackAlignment),
        o.pixelStorei(37443, 0);
      const xe = y(b) && M(b.image) === !1;
      let N = S(b.image, xe, !1, u);
      N = an(b, N);
      const he = M(N) || s,
        oe = r.convert(b.format, b.encoding);
      let ue = r.convert(b.type),
        ce = x(b.internalFormat, oe, ue, b.encoding, b.isVideoTexture);
      j(Q, b, he);
      let ye;
      const Pe = b.mipmaps,
        qe = s && b.isVideoTexture !== !0,
        L = re.__currentVersion === void 0 || ee === !0,
        ae = w(b, N, he);
      if (b.isDepthTexture)
        (ce = 6402),
          s
            ? b.type === li
              ? (ce = 36012)
              : b.type === oi
              ? (ce = 33190)
              : b.type === Hi
              ? (ce = 35056)
              : (ce = 33189)
            : b.type === li &&
              console.error(
                "WebGLRenderer: Floating point depth texture requires WebGL2."
              ),
          b.format === hi &&
            ce === 6402 &&
            b.type !== yc &&
            b.type !== oi &&
            (console.warn(
              "THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."
            ),
            (b.type = oi),
            (ue = r.convert(b.type))),
          b.format === $i &&
            ce === 6402 &&
            ((ce = 34041),
            b.type !== Hi &&
              (console.warn(
                "THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."
              ),
              (b.type = Hi),
              (ue = r.convert(b.type)))),
          L &&
            (qe
              ? t.texStorage2D(3553, 1, ce, N.width, N.height)
              : t.texImage2D(3553, 0, ce, N.width, N.height, 0, oe, ue, null));
      else if (b.isDataTexture)
        if (Pe.length > 0 && he) {
          qe && L && t.texStorage2D(3553, ae, ce, Pe[0].width, Pe[0].height);
          for (let V = 0, se = Pe.length; V < se; V++)
            (ye = Pe[V]),
              qe
                ? t.texSubImage2D(
                    3553,
                    V,
                    0,
                    0,
                    ye.width,
                    ye.height,
                    oe,
                    ue,
                    ye.data
                  )
                : t.texImage2D(
                    3553,
                    V,
                    ce,
                    ye.width,
                    ye.height,
                    0,
                    oe,
                    ue,
                    ye.data
                  );
          b.generateMipmaps = !1;
        } else
          qe
            ? (L && t.texStorage2D(3553, ae, ce, N.width, N.height),
              t.texSubImage2D(3553, 0, 0, 0, N.width, N.height, oe, ue, N.data))
            : t.texImage2D(3553, 0, ce, N.width, N.height, 0, oe, ue, N.data);
      else if (b.isCompressedTexture) {
        qe && L && t.texStorage2D(3553, ae, ce, Pe[0].width, Pe[0].height);
        for (let V = 0, se = Pe.length; V < se; V++)
          (ye = Pe[V]),
            b.format !== un
              ? oe !== null
                ? qe
                  ? t.compressedTexSubImage2D(
                      3553,
                      V,
                      0,
                      0,
                      ye.width,
                      ye.height,
                      oe,
                      ye.data
                    )
                  : t.compressedTexImage2D(
                      3553,
                      V,
                      ce,
                      ye.width,
                      ye.height,
                      0,
                      ye.data
                    )
                : console.warn(
                    "THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"
                  )
              : qe
              ? t.texSubImage2D(
                  3553,
                  V,
                  0,
                  0,
                  ye.width,
                  ye.height,
                  oe,
                  ue,
                  ye.data
                )
              : t.texImage2D(
                  3553,
                  V,
                  ce,
                  ye.width,
                  ye.height,
                  0,
                  oe,
                  ue,
                  ye.data
                );
      } else if (b.isDataArrayTexture)
        qe
          ? (L && t.texStorage3D(35866, ae, ce, N.width, N.height, N.depth),
            t.texSubImage3D(
              35866,
              0,
              0,
              0,
              0,
              N.width,
              N.height,
              N.depth,
              oe,
              ue,
              N.data
            ))
          : t.texImage3D(
              35866,
              0,
              ce,
              N.width,
              N.height,
              N.depth,
              0,
              oe,
              ue,
              N.data
            );
      else if (b.isData3DTexture)
        qe
          ? (L && t.texStorage3D(32879, ae, ce, N.width, N.height, N.depth),
            t.texSubImage3D(
              32879,
              0,
              0,
              0,
              0,
              N.width,
              N.height,
              N.depth,
              oe,
              ue,
              N.data
            ))
          : t.texImage3D(
              32879,
              0,
              ce,
              N.width,
              N.height,
              N.depth,
              0,
              oe,
              ue,
              N.data
            );
      else if (b.isFramebufferTexture) {
        if (L)
          if (qe) t.texStorage2D(3553, ae, ce, N.width, N.height);
          else {
            let V = N.width,
              se = N.height;
            for (let ne = 0; ne < ae; ne++)
              t.texImage2D(3553, ne, ce, V, se, 0, oe, ue, null),
                (V >>= 1),
                (se >>= 1);
          }
      } else if (Pe.length > 0 && he) {
        qe && L && t.texStorage2D(3553, ae, ce, Pe[0].width, Pe[0].height);
        for (let V = 0, se = Pe.length; V < se; V++)
          (ye = Pe[V]),
            qe
              ? t.texSubImage2D(3553, V, 0, 0, oe, ue, ye)
              : t.texImage2D(3553, V, ce, oe, ue, ye);
        b.generateMipmaps = !1;
      } else
        qe
          ? (L && t.texStorage2D(3553, ae, ce, N.width, N.height),
            t.texSubImage2D(3553, 0, 0, 0, oe, ue, N))
          : t.texImage2D(3553, 0, ce, oe, ue, N);
      E(b, he) && A(Q),
        (re.__currentVersion = re.version),
        b.onUpdate && b.onUpdate(b);
    }
    C.__version = b.version;
  }
  function _e(C, b, H) {
    if (b.image.length !== 6) return;
    const Q = Ie(C, b),
      ee = b.source;
    if (
      (t.activeTexture(33984 + H),
      t.bindTexture(34067, C.__webglTexture),
      ee.version !== ee.__currentVersion || Q === !0)
    ) {
      o.pixelStorei(37440, b.flipY),
        o.pixelStorei(37441, b.premultiplyAlpha),
        o.pixelStorei(3317, b.unpackAlignment),
        o.pixelStorei(37443, 0);
      const re = b.isCompressedTexture || b.image[0].isCompressedTexture,
        xe = b.image[0] && b.image[0].isDataTexture,
        N = [];
      for (let V = 0; V < 6; V++)
        !re && !xe
          ? (N[V] = S(b.image[V], !1, !0, l))
          : (N[V] = xe ? b.image[V].image : b.image[V]),
          (N[V] = an(b, N[V]));
      const he = N[0],
        oe = M(he) || s,
        ue = r.convert(b.format, b.encoding),
        ce = r.convert(b.type),
        ye = x(b.internalFormat, ue, ce, b.encoding),
        Pe = s && b.isVideoTexture !== !0,
        qe = ee.__currentVersion === void 0 || Q === !0;
      let L = w(b, he, oe);
      j(34067, b, oe);
      let ae;
      if (re) {
        Pe && qe && t.texStorage2D(34067, L, ye, he.width, he.height);
        for (let V = 0; V < 6; V++) {
          ae = N[V].mipmaps;
          for (let se = 0; se < ae.length; se++) {
            const ne = ae[se];
            b.format !== un
              ? ue !== null
                ? Pe
                  ? t.compressedTexSubImage2D(
                      34069 + V,
                      se,
                      0,
                      0,
                      ne.width,
                      ne.height,
                      ue,
                      ne.data
                    )
                  : t.compressedTexImage2D(
                      34069 + V,
                      se,
                      ye,
                      ne.width,
                      ne.height,
                      0,
                      ne.data
                    )
                : console.warn(
                    "THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"
                  )
              : Pe
              ? t.texSubImage2D(
                  34069 + V,
                  se,
                  0,
                  0,
                  ne.width,
                  ne.height,
                  ue,
                  ce,
                  ne.data
                )
              : t.texImage2D(
                  34069 + V,
                  se,
                  ye,
                  ne.width,
                  ne.height,
                  0,
                  ue,
                  ce,
                  ne.data
                );
          }
        }
      } else {
        (ae = b.mipmaps),
          Pe &&
            qe &&
            (ae.length > 0 && L++,
            t.texStorage2D(34067, L, ye, N[0].width, N[0].height));
        for (let V = 0; V < 6; V++)
          if (xe) {
            Pe
              ? t.texSubImage2D(
                  34069 + V,
                  0,
                  0,
                  0,
                  N[V].width,
                  N[V].height,
                  ue,
                  ce,
                  N[V].data
                )
              : t.texImage2D(
                  34069 + V,
                  0,
                  ye,
                  N[V].width,
                  N[V].height,
                  0,
                  ue,
                  ce,
                  N[V].data
                );
            for (let se = 0; se < ae.length; se++) {
              const Ae = ae[se].image[V].image;
              Pe
                ? t.texSubImage2D(
                    34069 + V,
                    se + 1,
                    0,
                    0,
                    Ae.width,
                    Ae.height,
                    ue,
                    ce,
                    Ae.data
                  )
                : t.texImage2D(
                    34069 + V,
                    se + 1,
                    ye,
                    Ae.width,
                    Ae.height,
                    0,
                    ue,
                    ce,
                    Ae.data
                  );
            }
          } else {
            Pe
              ? t.texSubImage2D(34069 + V, 0, 0, 0, ue, ce, N[V])
              : t.texImage2D(34069 + V, 0, ye, ue, ce, N[V]);
            for (let se = 0; se < ae.length; se++) {
              const ne = ae[se];
              Pe
                ? t.texSubImage2D(34069 + V, se + 1, 0, 0, ue, ce, ne.image[V])
                : t.texImage2D(34069 + V, se + 1, ye, ue, ce, ne.image[V]);
            }
          }
      }
      E(b, oe) && A(34067),
        (ee.__currentVersion = ee.version),
        b.onUpdate && b.onUpdate(b);
    }
    C.__version = b.version;
  }
  function le(C, b, H, Q, ee) {
    const re = r.convert(H.format, H.encoding),
      xe = r.convert(H.type),
      N = x(H.internalFormat, re, xe, H.encoding);
    n.get(b).__hasExternalTextures ||
      (ee === 32879 || ee === 35866
        ? t.texImage3D(ee, 0, N, b.width, b.height, b.depth, 0, re, xe, null)
        : t.texImage2D(ee, 0, N, b.width, b.height, 0, re, xe, null)),
      t.bindFramebuffer(36160, C),
      ze(b)
        ? f.framebufferTexture2DMultisampleEXT(
            36160,
            Q,
            ee,
            n.get(H).__webglTexture,
            0,
            rt(b)
          )
        : o.framebufferTexture2D(36160, Q, ee, n.get(H).__webglTexture, 0),
      t.bindFramebuffer(36160, null);
  }
  function Ue(C, b, H) {
    if ((o.bindRenderbuffer(36161, C), b.depthBuffer && !b.stencilBuffer)) {
      let Q = 33189;
      if (H || ze(b)) {
        const ee = b.depthTexture;
        ee &&
          ee.isDepthTexture &&
          (ee.type === li ? (Q = 36012) : ee.type === oi && (Q = 33190));
        const re = rt(b);
        ze(b)
          ? f.renderbufferStorageMultisampleEXT(36161, re, Q, b.width, b.height)
          : o.renderbufferStorageMultisample(36161, re, Q, b.width, b.height);
      } else o.renderbufferStorage(36161, Q, b.width, b.height);
      o.framebufferRenderbuffer(36160, 36096, 36161, C);
    } else if (b.depthBuffer && b.stencilBuffer) {
      const Q = rt(b);
      H && ze(b) === !1
        ? o.renderbufferStorageMultisample(36161, Q, 35056, b.width, b.height)
        : ze(b)
        ? f.renderbufferStorageMultisampleEXT(
            36161,
            Q,
            35056,
            b.width,
            b.height
          )
        : o.renderbufferStorage(36161, 34041, b.width, b.height),
        o.framebufferRenderbuffer(36160, 33306, 36161, C);
    } else {
      const Q = b.isWebGLMultipleRenderTargets === !0 ? b.texture : [b.texture];
      for (let ee = 0; ee < Q.length; ee++) {
        const re = Q[ee],
          xe = r.convert(re.format, re.encoding),
          N = r.convert(re.type),
          he = x(re.internalFormat, xe, N, re.encoding),
          oe = rt(b);
        H && ze(b) === !1
          ? o.renderbufferStorageMultisample(36161, oe, he, b.width, b.height)
          : ze(b)
          ? f.renderbufferStorageMultisampleEXT(
              36161,
              oe,
              he,
              b.width,
              b.height
            )
          : o.renderbufferStorage(36161, he, b.width, b.height);
      }
    }
    o.bindRenderbuffer(36161, null);
  }
  function be(C, b) {
    if (b && b.isWebGLCubeRenderTarget)
      throw new Error(
        "Depth Texture with cube render targets is not supported"
      );
    if (
      (t.bindFramebuffer(36160, C),
      !(b.depthTexture && b.depthTexture.isDepthTexture))
    )
      throw new Error(
        "renderTarget.depthTexture must be an instance of THREE.DepthTexture"
      );
    (!n.get(b.depthTexture).__webglTexture ||
      b.depthTexture.image.width !== b.width ||
      b.depthTexture.image.height !== b.height) &&
      ((b.depthTexture.image.width = b.width),
      (b.depthTexture.image.height = b.height),
      (b.depthTexture.needsUpdate = !0)),
      U(b.depthTexture, 0);
    const Q = n.get(b.depthTexture).__webglTexture,
      ee = rt(b);
    if (b.depthTexture.format === hi)
      ze(b)
        ? f.framebufferTexture2DMultisampleEXT(36160, 36096, 3553, Q, 0, ee)
        : o.framebufferTexture2D(36160, 36096, 3553, Q, 0);
    else if (b.depthTexture.format === $i)
      ze(b)
        ? f.framebufferTexture2DMultisampleEXT(36160, 33306, 3553, Q, 0, ee)
        : o.framebufferTexture2D(36160, 33306, 3553, Q, 0);
    else throw new Error("Unknown depthTexture format");
  }
  function pe(C) {
    const b = n.get(C),
      H = C.isWebGLCubeRenderTarget === !0;
    if (C.depthTexture && !b.__autoAllocateDepthBuffer) {
      if (H)
        throw new Error(
          "target.depthTexture not supported in Cube render targets"
        );
      be(b.__webglFramebuffer, C);
    } else if (H) {
      b.__webglDepthbuffer = [];
      for (let Q = 0; Q < 6; Q++)
        t.bindFramebuffer(36160, b.__webglFramebuffer[Q]),
          (b.__webglDepthbuffer[Q] = o.createRenderbuffer()),
          Ue(b.__webglDepthbuffer[Q], C, !1);
    } else
      t.bindFramebuffer(36160, b.__webglFramebuffer),
        (b.__webglDepthbuffer = o.createRenderbuffer()),
        Ue(b.__webglDepthbuffer, C, !1);
    t.bindFramebuffer(36160, null);
  }
  function it(C, b, H) {
    const Q = n.get(C);
    b !== void 0 && le(Q.__webglFramebuffer, C, C.texture, 36064, 3553),
      H !== void 0 && pe(C);
  }
  function wt(C) {
    const b = C.texture,
      H = n.get(C),
      Q = n.get(b);
    C.addEventListener("dispose", K),
      C.isWebGLMultipleRenderTargets !== !0 &&
        (Q.__webglTexture === void 0 && (Q.__webglTexture = o.createTexture()),
        (Q.__version = b.version),
        a.memory.textures++);
    const ee = C.isWebGLCubeRenderTarget === !0,
      re = C.isWebGLMultipleRenderTargets === !0,
      xe = M(C) || s;
    if (ee) {
      H.__webglFramebuffer = [];
      for (let N = 0; N < 6; N++)
        H.__webglFramebuffer[N] = o.createFramebuffer();
    } else {
      if (((H.__webglFramebuffer = o.createFramebuffer()), re))
        if (i.drawBuffers) {
          const N = C.texture;
          for (let he = 0, oe = N.length; he < oe; he++) {
            const ue = n.get(N[he]);
            ue.__webglTexture === void 0 &&
              ((ue.__webglTexture = o.createTexture()), a.memory.textures++);
          }
        } else
          console.warn(
            "THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension."
          );
      if (s && C.samples > 0 && ze(C) === !1) {
        const N = re ? b : [b];
        (H.__webglMultisampledFramebuffer = o.createFramebuffer()),
          (H.__webglColorRenderbuffer = []),
          t.bindFramebuffer(36160, H.__webglMultisampledFramebuffer);
        for (let he = 0; he < N.length; he++) {
          const oe = N[he];
          (H.__webglColorRenderbuffer[he] = o.createRenderbuffer()),
            o.bindRenderbuffer(36161, H.__webglColorRenderbuffer[he]);
          const ue = r.convert(oe.format, oe.encoding),
            ce = r.convert(oe.type),
            ye = x(oe.internalFormat, ue, ce, oe.encoding),
            Pe = rt(C);
          o.renderbufferStorageMultisample(36161, Pe, ye, C.width, C.height),
            o.framebufferRenderbuffer(
              36160,
              36064 + he,
              36161,
              H.__webglColorRenderbuffer[he]
            );
        }
        o.bindRenderbuffer(36161, null),
          C.depthBuffer &&
            ((H.__webglDepthRenderbuffer = o.createRenderbuffer()),
            Ue(H.__webglDepthRenderbuffer, C, !0)),
          t.bindFramebuffer(36160, null);
      }
    }
    if (ee) {
      t.bindTexture(34067, Q.__webglTexture), j(34067, b, xe);
      for (let N = 0; N < 6; N++)
        le(H.__webglFramebuffer[N], C, b, 36064, 34069 + N);
      E(b, xe) && A(34067), t.unbindTexture();
    } else if (re) {
      const N = C.texture;
      for (let he = 0, oe = N.length; he < oe; he++) {
        const ue = N[he],
          ce = n.get(ue);
        t.bindTexture(3553, ce.__webglTexture),
          j(3553, ue, xe),
          le(H.__webglFramebuffer, C, ue, 36064 + he, 3553),
          E(ue, xe) && A(3553);
      }
      t.unbindTexture();
    } else {
      let N = 3553;
      (C.isWebGL3DRenderTarget || C.isWebGLArrayRenderTarget) &&
        (s
          ? (N = C.isWebGL3DRenderTarget ? 32879 : 35866)
          : console.error(
              "THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2."
            )),
        t.bindTexture(N, Q.__webglTexture),
        j(N, b, xe),
        le(H.__webglFramebuffer, C, b, 36064, N),
        E(b, xe) && A(N),
        t.unbindTexture();
    }
    C.depthBuffer && pe(C);
  }
  function ht(C) {
    const b = M(C) || s,
      H = C.isWebGLMultipleRenderTargets === !0 ? C.texture : [C.texture];
    for (let Q = 0, ee = H.length; Q < ee; Q++) {
      const re = H[Q];
      if (E(re, b)) {
        const xe = C.isWebGLCubeRenderTarget ? 34067 : 3553,
          N = n.get(re).__webglTexture;
        t.bindTexture(xe, N), A(xe), t.unbindTexture();
      }
    }
  }
  function sn(C) {
    if (s && C.samples > 0 && ze(C) === !1) {
      const b = C.isWebGLMultipleRenderTargets ? C.texture : [C.texture],
        H = C.width,
        Q = C.height;
      let ee = 16384;
      const re = [],
        xe = C.stencilBuffer ? 33306 : 36096,
        N = n.get(C),
        he = C.isWebGLMultipleRenderTargets === !0;
      if (he)
        for (let oe = 0; oe < b.length; oe++)
          t.bindFramebuffer(36160, N.__webglMultisampledFramebuffer),
            o.framebufferRenderbuffer(36160, 36064 + oe, 36161, null),
            t.bindFramebuffer(36160, N.__webglFramebuffer),
            o.framebufferTexture2D(36009, 36064 + oe, 3553, null, 0);
      t.bindFramebuffer(36008, N.__webglMultisampledFramebuffer),
        t.bindFramebuffer(36009, N.__webglFramebuffer);
      for (let oe = 0; oe < b.length; oe++) {
        re.push(36064 + oe), C.depthBuffer && re.push(xe);
        const ue =
          N.__ignoreDepthValues !== void 0 ? N.__ignoreDepthValues : !1;
        if (
          (ue === !1 &&
            (C.depthBuffer && (ee |= 256), C.stencilBuffer && (ee |= 1024)),
          he &&
            o.framebufferRenderbuffer(
              36008,
              36064,
              36161,
              N.__webglColorRenderbuffer[oe]
            ),
          ue === !0 &&
            (o.invalidateFramebuffer(36008, [xe]),
            o.invalidateFramebuffer(36009, [xe])),
          he)
        ) {
          const ce = n.get(b[oe]).__webglTexture;
          o.framebufferTexture2D(36009, 36064, 3553, ce, 0);
        }
        o.blitFramebuffer(0, 0, H, Q, 0, 0, H, Q, ee, 9728),
          m && o.invalidateFramebuffer(36008, re);
      }
      if ((t.bindFramebuffer(36008, null), t.bindFramebuffer(36009, null), he))
        for (let oe = 0; oe < b.length; oe++) {
          t.bindFramebuffer(36160, N.__webglMultisampledFramebuffer),
            o.framebufferRenderbuffer(
              36160,
              36064 + oe,
              36161,
              N.__webglColorRenderbuffer[oe]
            );
          const ue = n.get(b[oe]).__webglTexture;
          t.bindFramebuffer(36160, N.__webglFramebuffer),
            o.framebufferTexture2D(36009, 36064 + oe, 3553, ue, 0);
        }
      t.bindFramebuffer(36009, N.__webglMultisampledFramebuffer);
    }
  }
  function rt(C) {
    return Math.min(h, C.samples);
  }
  function ze(C) {
    const b = n.get(C);
    return (
      s &&
      C.samples > 0 &&
      e.has("WEBGL_multisampled_render_to_texture") === !0 &&
      b.__useRenderToTexture !== !1
    );
  }
  function mn(C) {
    const b = a.render.frame;
    g.get(C) !== b && (g.set(C, b), C.update());
  }
  function an(C, b) {
    const H = C.encoding,
      Q = C.format,
      ee = C.type;
    return (
      C.isCompressedTexture === !0 ||
        C.isVideoTexture === !0 ||
        C.format === Ua ||
        (H !== _i &&
          (H === Ge
            ? s === !1
              ? e.has("EXT_sRGB") === !0 && Q === un
                ? ((C.format = Ua),
                  (C.minFilter = kt),
                  (C.generateMipmaps = !1))
                : (b = bc.sRGBToLinear(b))
              : (Q !== un || ee !== gi) &&
                console.warn(
                  "THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."
                )
            : console.error(
                "THREE.WebGLTextures: Unsupported texture encoding:",
                H
              ))),
      b
    );
  }
  (this.allocateTextureUnit = k),
    (this.resetTextureUnits = X),
    (this.setTexture2D = U),
    (this.setTexture2DArray = J),
    (this.setTexture3D = Z),
    (this.setTextureCube = $),
    (this.rebindTextures = it),
    (this.setupRenderTarget = wt),
    (this.updateRenderTargetMipmap = ht),
    (this.updateMultisampleRenderTarget = sn),
    (this.setupDepthRenderbuffer = pe),
    (this.setupFrameBufferTexture = le),
    (this.useMultisampledRTT = ze);
}
function Og(o, e, t) {
  const n = t.isWebGL2;
  function i(r, a = null) {
    let s;
    if (r === gi) return 5121;
    if (r === Lh) return 32819;
    if (r === Dh) return 32820;
    if (r === Ch) return 5120;
    if (r === Ah) return 5122;
    if (r === yc) return 5123;
    if (r === Ph) return 5124;
    if (r === oi) return 5125;
    if (r === li) return 5126;
    if (r === Tr)
      return n
        ? 5131
        : ((s = e.get("OES_texture_half_float")),
          s !== null ? s.HALF_FLOAT_OES : null);
    if (r === Rh) return 6406;
    if (r === un) return 6408;
    if (r === zh) return 6409;
    if (r === Fh) return 6410;
    if (r === hi) return 6402;
    if (r === $i) return 34041;
    if (r === Oh) return 6403;
    if (r === Ih)
      return (
        console.warn(
          "THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"
        ),
        6408
      );
    if (r === Ua)
      return (s = e.get("EXT_sRGB")), s !== null ? s.SRGB_ALPHA_EXT : null;
    if (r === Uh) return 36244;
    if (r === Nh) return 33319;
    if (r === Bh) return 33320;
    if (r === kh) return 36249;
    if (r === Gs || r === Hs || r === Ws || r === qs)
      if (a === Ge)
        if (((s = e.get("WEBGL_compressed_texture_s3tc_srgb")), s !== null)) {
          if (r === Gs) return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;
          if (r === Hs) return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;
          if (r === Ws) return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;
          if (r === qs) return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT;
        } else return null;
      else if (((s = e.get("WEBGL_compressed_texture_s3tc")), s !== null)) {
        if (r === Gs) return s.COMPRESSED_RGB_S3TC_DXT1_EXT;
        if (r === Hs) return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;
        if (r === Ws) return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;
        if (r === qs) return s.COMPRESSED_RGBA_S3TC_DXT5_EXT;
      } else return null;
    if (r === Fo || r === Oo || r === Uo || r === No)
      if (((s = e.get("WEBGL_compressed_texture_pvrtc")), s !== null)) {
        if (r === Fo) return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
        if (r === Oo) return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
        if (r === Uo) return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
        if (r === No) return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
      } else return null;
    if (r === Vh)
      return (
        (s = e.get("WEBGL_compressed_texture_etc1")),
        s !== null ? s.COMPRESSED_RGB_ETC1_WEBGL : null
      );
    if (r === Bo || r === ko)
      if (((s = e.get("WEBGL_compressed_texture_etc")), s !== null)) {
        if (r === Bo)
          return a === Ge ? s.COMPRESSED_SRGB8_ETC2 : s.COMPRESSED_RGB8_ETC2;
        if (r === ko)
          return a === Ge
            ? s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC
            : s.COMPRESSED_RGBA8_ETC2_EAC;
      } else return null;
    if (
      r === Vo ||
      r === Go ||
      r === Ho ||
      r === Wo ||
      r === qo ||
      r === Xo ||
      r === Yo ||
      r === jo ||
      r === Zo ||
      r === $o ||
      r === Ko ||
      r === Jo ||
      r === Qo ||
      r === el
    )
      if (((s = e.get("WEBGL_compressed_texture_astc")), s !== null)) {
        if (r === Vo)
          return a === Ge
            ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR
            : s.COMPRESSED_RGBA_ASTC_4x4_KHR;
        if (r === Go)
          return a === Ge
            ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR
            : s.COMPRESSED_RGBA_ASTC_5x4_KHR;
        if (r === Ho)
          return a === Ge
            ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR
            : s.COMPRESSED_RGBA_ASTC_5x5_KHR;
        if (r === Wo)
          return a === Ge
            ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR
            : s.COMPRESSED_RGBA_ASTC_6x5_KHR;
        if (r === qo)
          return a === Ge
            ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR
            : s.COMPRESSED_RGBA_ASTC_6x6_KHR;
        if (r === Xo)
          return a === Ge
            ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR
            : s.COMPRESSED_RGBA_ASTC_8x5_KHR;
        if (r === Yo)
          return a === Ge
            ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR
            : s.COMPRESSED_RGBA_ASTC_8x6_KHR;
        if (r === jo)
          return a === Ge
            ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR
            : s.COMPRESSED_RGBA_ASTC_8x8_KHR;
        if (r === Zo)
          return a === Ge
            ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR
            : s.COMPRESSED_RGBA_ASTC_10x5_KHR;
        if (r === $o)
          return a === Ge
            ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR
            : s.COMPRESSED_RGBA_ASTC_10x6_KHR;
        if (r === Ko)
          return a === Ge
            ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR
            : s.COMPRESSED_RGBA_ASTC_10x8_KHR;
        if (r === Jo)
          return a === Ge
            ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR
            : s.COMPRESSED_RGBA_ASTC_10x10_KHR;
        if (r === Qo)
          return a === Ge
            ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR
            : s.COMPRESSED_RGBA_ASTC_12x10_KHR;
        if (r === el)
          return a === Ge
            ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR
            : s.COMPRESSED_RGBA_ASTC_12x12_KHR;
      } else return null;
    if (r === tl)
      if (((s = e.get("EXT_texture_compression_bptc")), s !== null)) {
        if (r === tl)
          return a === Ge
            ? s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT
            : s.COMPRESSED_RGBA_BPTC_UNORM_EXT;
      } else return null;
    return r === Hi
      ? n
        ? 34042
        : ((s = e.get("WEBGL_depth_texture")),
          s !== null ? s.UNSIGNED_INT_24_8_WEBGL : null)
      : o[r] !== void 0
      ? o[r]
      : null;
  }
  return { convert: i };
}
class Ug extends Vt {
  constructor(e = []) {
    super(), (this.isArrayCamera = !0), (this.cameras = e);
  }
}
class us extends pt {
  constructor() {
    super(), (this.isGroup = !0), (this.type = "Group");
  }
}
const Ng = { type: "move" };
class va {
  constructor() {
    (this._targetRay = null), (this._grip = null), (this._hand = null);
  }
  getHandSpace() {
    return (
      this._hand === null &&
        ((this._hand = new us()),
        (this._hand.matrixAutoUpdate = !1),
        (this._hand.visible = !1),
        (this._hand.joints = {}),
        (this._hand.inputState = { pinching: !1 })),
      this._hand
    );
  }
  getTargetRaySpace() {
    return (
      this._targetRay === null &&
        ((this._targetRay = new us()),
        (this._targetRay.matrixAutoUpdate = !1),
        (this._targetRay.visible = !1),
        (this._targetRay.hasLinearVelocity = !1),
        (this._targetRay.linearVelocity = new R()),
        (this._targetRay.hasAngularVelocity = !1),
        (this._targetRay.angularVelocity = new R())),
      this._targetRay
    );
  }
  getGripSpace() {
    return (
      this._grip === null &&
        ((this._grip = new us()),
        (this._grip.matrixAutoUpdate = !1),
        (this._grip.visible = !1),
        (this._grip.hasLinearVelocity = !1),
        (this._grip.linearVelocity = new R()),
        (this._grip.hasAngularVelocity = !1),
        (this._grip.angularVelocity = new R())),
      this._grip
    );
  }
  dispatchEvent(e) {
    return (
      this._targetRay !== null && this._targetRay.dispatchEvent(e),
      this._grip !== null && this._grip.dispatchEvent(e),
      this._hand !== null && this._hand.dispatchEvent(e),
      this
    );
  }
  disconnect(e) {
    return (
      this.dispatchEvent({ type: "disconnected", data: e }),
      this._targetRay !== null && (this._targetRay.visible = !1),
      this._grip !== null && (this._grip.visible = !1),
      this._hand !== null && (this._hand.visible = !1),
      this
    );
  }
  update(e, t, n) {
    let i = null,
      r = null,
      a = null;
    const s = this._targetRay,
      c = this._grip,
      l = this._hand;
    if (e && t.session.visibilityState !== "visible-blurred") {
      if (l && e.hand) {
        a = !0;
        for (const d of e.hand.values()) {
          const p = t.getJointPose(d, n);
          if (l.joints[d.jointName] === void 0) {
            const v = new us();
            (v.matrixAutoUpdate = !1),
              (v.visible = !1),
              (l.joints[d.jointName] = v),
              l.add(v);
          }
          const _ = l.joints[d.jointName];
          p !== null &&
            (_.matrix.fromArray(p.transform.matrix),
            _.matrix.decompose(_.position, _.rotation, _.scale),
            (_.jointRadius = p.radius)),
            (_.visible = p !== null);
        }
        const u = l.joints["index-finger-tip"],
          h = l.joints["thumb-tip"],
          f = u.position.distanceTo(h.position),
          m = 0.02,
          g = 0.005;
        l.inputState.pinching && f > m + g
          ? ((l.inputState.pinching = !1),
            this.dispatchEvent({
              type: "pinchend",
              handedness: e.handedness,
              target: this,
            }))
          : !l.inputState.pinching &&
            f <= m - g &&
            ((l.inputState.pinching = !0),
            this.dispatchEvent({
              type: "pinchstart",
              handedness: e.handedness,
              target: this,
            }));
      } else
        c !== null &&
          e.gripSpace &&
          ((r = t.getPose(e.gripSpace, n)),
          r !== null &&
            (c.matrix.fromArray(r.transform.matrix),
            c.matrix.decompose(c.position, c.rotation, c.scale),
            r.linearVelocity
              ? ((c.hasLinearVelocity = !0),
                c.linearVelocity.copy(r.linearVelocity))
              : (c.hasLinearVelocity = !1),
            r.angularVelocity
              ? ((c.hasAngularVelocity = !0),
                c.angularVelocity.copy(r.angularVelocity))
              : (c.hasAngularVelocity = !1)));
      s !== null &&
        ((i = t.getPose(e.targetRaySpace, n)),
        i === null && r !== null && (i = r),
        i !== null &&
          (s.matrix.fromArray(i.transform.matrix),
          s.matrix.decompose(s.position, s.rotation, s.scale),
          i.linearVelocity
            ? ((s.hasLinearVelocity = !0),
              s.linearVelocity.copy(i.linearVelocity))
            : (s.hasLinearVelocity = !1),
          i.angularVelocity
            ? ((s.hasAngularVelocity = !0),
              s.angularVelocity.copy(i.angularVelocity))
            : (s.hasAngularVelocity = !1),
          this.dispatchEvent(Ng)));
    }
    return (
      s !== null && (s.visible = i !== null),
      c !== null && (c.visible = r !== null),
      l !== null && (l.visible = a !== null),
      this
    );
  }
}
class Bg extends jt {
  constructor(e, t, n, i, r, a, s, c, l, u) {
    if (((u = u !== void 0 ? u : hi), u !== hi && u !== $i))
      throw new Error(
        "DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat"
      );
    n === void 0 && u === hi && (n = oi),
      n === void 0 && u === $i && (n = Hi),
      super(null, i, r, a, s, c, u, n, l),
      (this.isDepthTexture = !0),
      (this.image = { width: e, height: t }),
      (this.magFilter = s !== void 0 ? s : xt),
      (this.minFilter = c !== void 0 ? c : xt),
      (this.flipY = !1),
      (this.generateMipmaps = !1);
  }
}
class kg extends or {
  constructor(e, t) {
    super();
    const n = this;
    let i = null,
      r = 1,
      a = null,
      s = "local-floor",
      c = null,
      l = null,
      u = null,
      h = null,
      f = null,
      m = null;
    const g = t.getContextAttributes();
    let d = null,
      p = null;
    const _ = [],
      v = [],
      S = new Vt();
    S.layers.enable(1), (S.viewport = new at());
    const M = new Vt();
    M.layers.enable(2), (M.viewport = new at());
    const y = [S, M],
      E = new Ug();
    E.layers.enable(1), E.layers.enable(2);
    let A = null,
      x = null;
    (this.cameraAutoUpdate = !0),
      (this.enabled = !1),
      (this.isPresenting = !1),
      (this.getController = function (z) {
        let U = _[z];
        return (
          U === void 0 && ((U = new va()), (_[z] = U)), U.getTargetRaySpace()
        );
      }),
      (this.getControllerGrip = function (z) {
        let U = _[z];
        return U === void 0 && ((U = new va()), (_[z] = U)), U.getGripSpace();
      }),
      (this.getHand = function (z) {
        let U = _[z];
        return U === void 0 && ((U = new va()), (_[z] = U)), U.getHandSpace();
      });
    function w(z) {
      const U = v.indexOf(z.inputSource);
      if (U === -1) return;
      const J = _[U];
      J !== void 0 && J.dispatchEvent({ type: z.type, data: z.inputSource });
    }
    function P() {
      i.removeEventListener("select", w),
        i.removeEventListener("selectstart", w),
        i.removeEventListener("selectend", w),
        i.removeEventListener("squeeze", w),
        i.removeEventListener("squeezestart", w),
        i.removeEventListener("squeezeend", w),
        i.removeEventListener("end", P),
        i.removeEventListener("inputsourceschange", W);
      for (let z = 0; z < _.length; z++) {
        const U = v[z];
        U !== null && ((v[z] = null), _[z].disconnect(U));
      }
      (A = null),
        (x = null),
        e.setRenderTarget(d),
        (f = null),
        (h = null),
        (u = null),
        (i = null),
        (p = null),
        k.stop(),
        (n.isPresenting = !1),
        n.dispatchEvent({ type: "sessionend" });
    }
    (this.setFramebufferScaleFactor = function (z) {
      (r = z),
        n.isPresenting === !0 &&
          console.warn(
            "THREE.WebXRManager: Cannot change framebuffer scale while presenting."
          );
    }),
      (this.setReferenceSpaceType = function (z) {
        (s = z),
          n.isPresenting === !0 &&
            console.warn(
              "THREE.WebXRManager: Cannot change reference space type while presenting."
            );
      }),
      (this.getReferenceSpace = function () {
        return c || a;
      }),
      (this.setReferenceSpace = function (z) {
        c = z;
      }),
      (this.getBaseLayer = function () {
        return h !== null ? h : f;
      }),
      (this.getBinding = function () {
        return u;
      }),
      (this.getFrame = function () {
        return m;
      }),
      (this.getSession = function () {
        return i;
      }),
      (this.setSession = async function (z) {
        if (((i = z), i !== null)) {
          if (
            ((d = e.getRenderTarget()),
            i.addEventListener("select", w),
            i.addEventListener("selectstart", w),
            i.addEventListener("selectend", w),
            i.addEventListener("squeeze", w),
            i.addEventListener("squeezestart", w),
            i.addEventListener("squeezeend", w),
            i.addEventListener("end", P),
            i.addEventListener("inputsourceschange", W),
            g.xrCompatible !== !0 && (await t.makeXRCompatible()),
            i.renderState.layers === void 0 || e.capabilities.isWebGL2 === !1)
          ) {
            const U = {
              antialias: i.renderState.layers === void 0 ? g.antialias : !0,
              alpha: g.alpha,
              depth: g.depth,
              stencil: g.stencil,
              framebufferScaleFactor: r,
            };
            (f = new XRWebGLLayer(i, t, U)),
              i.updateRenderState({ baseLayer: f }),
              (p = new nn(f.framebufferWidth, f.framebufferHeight, {
                format: un,
                type: gi,
                encoding: e.outputEncoding,
                stencilBuffer: g.stencil,
              }));
          } else {
            let U = null,
              J = null,
              Z = null;
            g.depth &&
              ((Z = g.stencil ? 35056 : 33190),
              (U = g.stencil ? $i : hi),
              (J = g.stencil ? Hi : oi));
            const $ = { colorFormat: 32856, depthFormat: Z, scaleFactor: r };
            (u = new XRWebGLBinding(i, t)),
              (h = u.createProjectionLayer($)),
              i.updateRenderState({ layers: [h] }),
              (p = new nn(h.textureWidth, h.textureHeight, {
                format: un,
                type: gi,
                depthTexture: new Bg(
                  h.textureWidth,
                  h.textureHeight,
                  J,
                  void 0,
                  void 0,
                  void 0,
                  void 0,
                  void 0,
                  void 0,
                  U
                ),
                stencilBuffer: g.stencil,
                encoding: e.outputEncoding,
                samples: g.antialias ? 4 : 0,
              }));
            const ie = e.properties.get(p);
            ie.__ignoreDepthValues = h.ignoreDepthValues;
          }
          (p.isXRRenderTarget = !0),
            this.setFoveation(1),
            (c = null),
            (a = await i.requestReferenceSpace(s)),
            k.setContext(i),
            k.start(),
            (n.isPresenting = !0),
            n.dispatchEvent({ type: "sessionstart" });
        }
      });
    function W(z) {
      for (let U = 0; U < z.removed.length; U++) {
        const J = z.removed[U],
          Z = v.indexOf(J);
        Z >= 0 &&
          ((v[Z] = null),
          _[Z].dispatchEvent({ type: "disconnected", data: J }));
      }
      for (let U = 0; U < z.added.length; U++) {
        const J = z.added[U];
        let Z = v.indexOf(J);
        if (Z === -1) {
          for (let ie = 0; ie < _.length; ie++)
            if (ie >= v.length) {
              v.push(J), (Z = ie);
              break;
            } else if (v[ie] === null) {
              (v[ie] = J), (Z = ie);
              break;
            }
          if (Z === -1) break;
        }
        const $ = _[Z];
        $ && $.dispatchEvent({ type: "connected", data: J });
      }
    }
    const K = new R(),
      O = new R();
    function D(z, U, J) {
      K.setFromMatrixPosition(U.matrixWorld),
        O.setFromMatrixPosition(J.matrixWorld);
      const Z = K.distanceTo(O),
        $ = U.projectionMatrix.elements,
        ie = J.projectionMatrix.elements,
        de = $[14] / ($[10] - 1),
        j = $[14] / ($[10] + 1),
        Ie = ($[9] + 1) / $[5],
        me = ($[9] - 1) / $[5],
        _e = ($[8] - 1) / $[0],
        le = (ie[8] + 1) / ie[0],
        Ue = de * _e,
        be = de * le,
        pe = Z / (-_e + le),
        it = pe * -_e;
      U.matrixWorld.decompose(z.position, z.quaternion, z.scale),
        z.translateX(it),
        z.translateZ(pe),
        z.matrixWorld.compose(z.position, z.quaternion, z.scale),
        z.matrixWorldInverse.copy(z.matrixWorld).invert();
      const wt = de + pe,
        ht = j + pe,
        sn = Ue - it,
        rt = be + (Z - it),
        ze = ((Ie * j) / ht) * wt,
        mn = ((me * j) / ht) * wt;
      z.projectionMatrix.makePerspective(sn, rt, ze, mn, wt, ht);
    }
    function B(z, U) {
      U === null
        ? z.matrixWorld.copy(z.matrix)
        : z.matrixWorld.multiplyMatrices(U.matrixWorld, z.matrix),
        z.matrixWorldInverse.copy(z.matrixWorld).invert();
    }
    (this.updateCamera = function (z) {
      if (i === null) return;
      (E.near = M.near = S.near = z.near),
        (E.far = M.far = S.far = z.far),
        (A !== E.near || x !== E.far) &&
          (i.updateRenderState({ depthNear: E.near, depthFar: E.far }),
          (A = E.near),
          (x = E.far));
      const U = z.parent,
        J = E.cameras;
      B(E, U);
      for (let $ = 0; $ < J.length; $++) B(J[$], U);
      E.matrixWorld.decompose(E.position, E.quaternion, E.scale),
        z.matrix.copy(E.matrix),
        z.matrix.decompose(z.position, z.quaternion, z.scale);
      const Z = z.children;
      for (let $ = 0, ie = Z.length; $ < ie; $++) Z[$].updateMatrixWorld(!0);
      J.length === 2 ? D(E, S, M) : E.projectionMatrix.copy(S.projectionMatrix);
    }),
      (this.getCamera = function () {
        return E;
      }),
      (this.getFoveation = function () {
        if (h !== null) return h.fixedFoveation;
        if (f !== null) return f.fixedFoveation;
      }),
      (this.setFoveation = function (z) {
        h !== null && (h.fixedFoveation = z),
          f !== null && f.fixedFoveation !== void 0 && (f.fixedFoveation = z);
      });
    let Y = null;
    function X(z, U) {
      if (((l = U.getViewerPose(c || a)), (m = U), l !== null)) {
        const J = l.views;
        f !== null &&
          (e.setRenderTargetFramebuffer(p, f.framebuffer),
          e.setRenderTarget(p));
        let Z = !1;
        J.length !== E.cameras.length && ((E.cameras.length = 0), (Z = !0));
        for (let $ = 0; $ < J.length; $++) {
          const ie = J[$];
          let de = null;
          if (f !== null) de = f.getViewport(ie);
          else {
            const Ie = u.getViewSubImage(h, ie);
            (de = Ie.viewport),
              $ === 0 &&
                (e.setRenderTargetTextures(
                  p,
                  Ie.colorTexture,
                  h.ignoreDepthValues ? void 0 : Ie.depthStencilTexture
                ),
                e.setRenderTarget(p));
          }
          let j = y[$];
          j === void 0 &&
            ((j = new Vt()),
            j.layers.enable($),
            (j.viewport = new at()),
            (y[$] = j)),
            j.matrix.fromArray(ie.transform.matrix),
            j.projectionMatrix.fromArray(ie.projectionMatrix),
            j.viewport.set(de.x, de.y, de.width, de.height),
            $ === 0 && E.matrix.copy(j.matrix),
            Z === !0 && E.cameras.push(j);
        }
      }
      for (let J = 0; J < _.length; J++) {
        const Z = v[J],
          $ = _[J];
        Z !== null && $ !== void 0 && $.update(Z, U, c || a);
      }
      Y && Y(z, U), (m = null);
    }
    const k = new Rc();
    k.setAnimationLoop(X),
      (this.setAnimationLoop = function (z) {
        Y = z;
      }),
      (this.dispose = function () {});
  }
}
function Vg(o, e) {
  function t(d, p) {
    d.fogColor.value.copy(p.color),
      p.isFog
        ? ((d.fogNear.value = p.near), (d.fogFar.value = p.far))
        : p.isFogExp2 && (d.fogDensity.value = p.density);
  }
  function n(d, p, _, v, S) {
    p.isMeshBasicMaterial || p.isMeshLambertMaterial
      ? i(d, p)
      : p.isMeshToonMaterial
      ? (i(d, p), u(d, p))
      : p.isMeshPhongMaterial
      ? (i(d, p), l(d, p))
      : p.isMeshStandardMaterial
      ? (i(d, p), h(d, p), p.isMeshPhysicalMaterial && f(d, p, S))
      : p.isMeshMatcapMaterial
      ? (i(d, p), m(d, p))
      : p.isMeshDepthMaterial
      ? i(d, p)
      : p.isMeshDistanceMaterial
      ? (i(d, p), g(d, p))
      : p.isMeshNormalMaterial
      ? i(d, p)
      : p.isLineBasicMaterial
      ? (r(d, p), p.isLineDashedMaterial && a(d, p))
      : p.isPointsMaterial
      ? s(d, p, _, v)
      : p.isSpriteMaterial
      ? c(d, p)
      : p.isShadowMaterial
      ? (d.color.value.copy(p.color), (d.opacity.value = p.opacity))
      : p.isShaderMaterial && (p.uniformsNeedUpdate = !1);
  }
  function i(d, p) {
    (d.opacity.value = p.opacity),
      p.color && d.diffuse.value.copy(p.color),
      p.emissive &&
        d.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),
      p.map && (d.map.value = p.map),
      p.alphaMap && (d.alphaMap.value = p.alphaMap),
      p.bumpMap &&
        ((d.bumpMap.value = p.bumpMap),
        (d.bumpScale.value = p.bumpScale),
        p.side === Xt && (d.bumpScale.value *= -1)),
      p.displacementMap &&
        ((d.displacementMap.value = p.displacementMap),
        (d.displacementScale.value = p.displacementScale),
        (d.displacementBias.value = p.displacementBias)),
      p.emissiveMap && (d.emissiveMap.value = p.emissiveMap),
      p.normalMap &&
        ((d.normalMap.value = p.normalMap),
        d.normalScale.value.copy(p.normalScale),
        p.side === Xt && d.normalScale.value.negate()),
      p.specularMap && (d.specularMap.value = p.specularMap),
      p.alphaTest > 0 && (d.alphaTest.value = p.alphaTest);
    const _ = e.get(p).envMap;
    if (
      (_ &&
        ((d.envMap.value = _),
        (d.flipEnvMap.value =
          _.isCubeTexture && _.isRenderTargetTexture === !1 ? -1 : 1),
        (d.reflectivity.value = p.reflectivity),
        (d.ior.value = p.ior),
        (d.refractionRatio.value = p.refractionRatio)),
      p.lightMap)
    ) {
      d.lightMap.value = p.lightMap;
      const M = o.physicallyCorrectLights !== !0 ? Math.PI : 1;
      d.lightMapIntensity.value = p.lightMapIntensity * M;
    }
    p.aoMap &&
      ((d.aoMap.value = p.aoMap), (d.aoMapIntensity.value = p.aoMapIntensity));
    let v;
    p.map
      ? (v = p.map)
      : p.specularMap
      ? (v = p.specularMap)
      : p.displacementMap
      ? (v = p.displacementMap)
      : p.normalMap
      ? (v = p.normalMap)
      : p.bumpMap
      ? (v = p.bumpMap)
      : p.roughnessMap
      ? (v = p.roughnessMap)
      : p.metalnessMap
      ? (v = p.metalnessMap)
      : p.alphaMap
      ? (v = p.alphaMap)
      : p.emissiveMap
      ? (v = p.emissiveMap)
      : p.clearcoatMap
      ? (v = p.clearcoatMap)
      : p.clearcoatNormalMap
      ? (v = p.clearcoatNormalMap)
      : p.clearcoatRoughnessMap
      ? (v = p.clearcoatRoughnessMap)
      : p.iridescenceMap
      ? (v = p.iridescenceMap)
      : p.iridescenceThicknessMap
      ? (v = p.iridescenceThicknessMap)
      : p.specularIntensityMap
      ? (v = p.specularIntensityMap)
      : p.specularColorMap
      ? (v = p.specularColorMap)
      : p.transmissionMap
      ? (v = p.transmissionMap)
      : p.thicknessMap
      ? (v = p.thicknessMap)
      : p.sheenColorMap
      ? (v = p.sheenColorMap)
      : p.sheenRoughnessMap && (v = p.sheenRoughnessMap),
      v !== void 0 &&
        (v.isWebGLRenderTarget && (v = v.texture),
        v.matrixAutoUpdate === !0 && v.updateMatrix(),
        d.uvTransform.value.copy(v.matrix));
    let S;
    p.aoMap ? (S = p.aoMap) : p.lightMap && (S = p.lightMap),
      S !== void 0 &&
        (S.isWebGLRenderTarget && (S = S.texture),
        S.matrixAutoUpdate === !0 && S.updateMatrix(),
        d.uv2Transform.value.copy(S.matrix));
  }
  function r(d, p) {
    d.diffuse.value.copy(p.color), (d.opacity.value = p.opacity);
  }
  function a(d, p) {
    (d.dashSize.value = p.dashSize),
      (d.totalSize.value = p.dashSize + p.gapSize),
      (d.scale.value = p.scale);
  }
  function s(d, p, _, v) {
    d.diffuse.value.copy(p.color),
      (d.opacity.value = p.opacity),
      (d.size.value = p.size * _),
      (d.scale.value = v * 0.5),
      p.map && (d.map.value = p.map),
      p.alphaMap && (d.alphaMap.value = p.alphaMap),
      p.alphaTest > 0 && (d.alphaTest.value = p.alphaTest);
    let S;
    p.map ? (S = p.map) : p.alphaMap && (S = p.alphaMap),
      S !== void 0 &&
        (S.matrixAutoUpdate === !0 && S.updateMatrix(),
        d.uvTransform.value.copy(S.matrix));
  }
  function c(d, p) {
    d.diffuse.value.copy(p.color),
      (d.opacity.value = p.opacity),
      (d.rotation.value = p.rotation),
      p.map && (d.map.value = p.map),
      p.alphaMap && (d.alphaMap.value = p.alphaMap),
      p.alphaTest > 0 && (d.alphaTest.value = p.alphaTest);
    let _;
    p.map ? (_ = p.map) : p.alphaMap && (_ = p.alphaMap),
      _ !== void 0 &&
        (_.matrixAutoUpdate === !0 && _.updateMatrix(),
        d.uvTransform.value.copy(_.matrix));
  }
  function l(d, p) {
    d.specular.value.copy(p.specular),
      (d.shininess.value = Math.max(p.shininess, 1e-4));
  }
  function u(d, p) {
    p.gradientMap && (d.gradientMap.value = p.gradientMap);
  }
  function h(d, p) {
    (d.roughness.value = p.roughness),
      (d.metalness.value = p.metalness),
      p.roughnessMap && (d.roughnessMap.value = p.roughnessMap),
      p.metalnessMap && (d.metalnessMap.value = p.metalnessMap),
      e.get(p).envMap && (d.envMapIntensity.value = p.envMapIntensity);
  }
  function f(d, p, _) {
    (d.ior.value = p.ior),
      p.sheen > 0 &&
        (d.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),
        (d.sheenRoughness.value = p.sheenRoughness),
        p.sheenColorMap && (d.sheenColorMap.value = p.sheenColorMap),
        p.sheenRoughnessMap &&
          (d.sheenRoughnessMap.value = p.sheenRoughnessMap)),
      p.clearcoat > 0 &&
        ((d.clearcoat.value = p.clearcoat),
        (d.clearcoatRoughness.value = p.clearcoatRoughness),
        p.clearcoatMap && (d.clearcoatMap.value = p.clearcoatMap),
        p.clearcoatRoughnessMap &&
          (d.clearcoatRoughnessMap.value = p.clearcoatRoughnessMap),
        p.clearcoatNormalMap &&
          (d.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),
          (d.clearcoatNormalMap.value = p.clearcoatNormalMap),
          p.side === Xt && d.clearcoatNormalScale.value.negate())),
      p.iridescence > 0 &&
        ((d.iridescence.value = p.iridescence),
        (d.iridescenceIOR.value = p.iridescenceIOR),
        (d.iridescenceThicknessMinimum.value = p.iridescenceThicknessRange[0]),
        (d.iridescenceThicknessMaximum.value = p.iridescenceThicknessRange[1]),
        p.iridescenceMap && (d.iridescenceMap.value = p.iridescenceMap),
        p.iridescenceThicknessMap &&
          (d.iridescenceThicknessMap.value = p.iridescenceThicknessMap)),
      p.transmission > 0 &&
        ((d.transmission.value = p.transmission),
        (d.transmissionSamplerMap.value = _.texture),
        d.transmissionSamplerSize.value.set(_.width, _.height),
        p.transmissionMap && (d.transmissionMap.value = p.transmissionMap),
        (d.thickness.value = p.thickness),
        p.thicknessMap && (d.thicknessMap.value = p.thicknessMap),
        (d.attenuationDistance.value = p.attenuationDistance),
        d.attenuationColor.value.copy(p.attenuationColor)),
      (d.specularIntensity.value = p.specularIntensity),
      d.specularColor.value.copy(p.specularColor),
      p.specularIntensityMap &&
        (d.specularIntensityMap.value = p.specularIntensityMap),
      p.specularColorMap && (d.specularColorMap.value = p.specularColorMap);
  }
  function m(d, p) {
    p.matcap && (d.matcap.value = p.matcap);
  }
  function g(d, p) {
    d.referencePosition.value.copy(p.referencePosition),
      (d.nearDistance.value = p.nearDistance),
      (d.farDistance.value = p.farDistance);
  }
  return { refreshFogUniforms: t, refreshMaterialUniforms: n };
}
function Gg(o, e, t, n) {
  let i = {},
    r = {},
    a = [];
  const s = t.isWebGL2 ? o.getParameter(35375) : 0;
  function c(v, S) {
    const M = S.program;
    n.uniformBlockBinding(v, M);
  }
  function l(v, S) {
    let M = i[v.id];
    M === void 0 &&
      (g(v), (M = u(v)), (i[v.id] = M), v.addEventListener("dispose", p));
    const y = S.program;
    n.updateUBOMapping(v, y);
    const E = e.render.frame;
    r[v.id] !== E && (f(v), (r[v.id] = E));
  }
  function u(v) {
    const S = h();
    v.__bindingPointIndex = S;
    const M = o.createBuffer(),
      y = v.__size,
      E = v.usage;
    return (
      o.bindBuffer(35345, M),
      o.bufferData(35345, y, E),
      o.bindBuffer(35345, null),
      o.bindBufferBase(35345, S, M),
      M
    );
  }
  function h() {
    for (let v = 0; v < s; v++) if (a.indexOf(v) === -1) return a.push(v), v;
    return (
      console.error(
        "THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."
      ),
      0
    );
  }
  function f(v) {
    const S = i[v.id],
      M = v.uniforms,
      y = v.__cache;
    o.bindBuffer(35345, S);
    for (let E = 0, A = M.length; E < A; E++) {
      const x = M[E];
      if (m(x, E, y) === !0) {
        const w = x.value,
          P = x.__offset;
        typeof w == "number"
          ? ((x.__data[0] = w), o.bufferSubData(35345, P, x.__data))
          : (x.value.isMatrix3
              ? ((x.__data[0] = x.value.elements[0]),
                (x.__data[1] = x.value.elements[1]),
                (x.__data[2] = x.value.elements[2]),
                (x.__data[3] = x.value.elements[0]),
                (x.__data[4] = x.value.elements[3]),
                (x.__data[5] = x.value.elements[4]),
                (x.__data[6] = x.value.elements[5]),
                (x.__data[7] = x.value.elements[0]),
                (x.__data[8] = x.value.elements[6]),
                (x.__data[9] = x.value.elements[7]),
                (x.__data[10] = x.value.elements[8]),
                (x.__data[11] = x.value.elements[0]))
              : w.toArray(x.__data),
            o.bufferSubData(35345, P, x.__data));
      }
    }
    o.bindBuffer(35345, null);
  }
  function m(v, S, M) {
    const y = v.value;
    if (M[S] === void 0)
      return typeof y == "number" ? (M[S] = y) : (M[S] = y.clone()), !0;
    if (typeof y == "number") {
      if (M[S] !== y) return (M[S] = y), !0;
    } else {
      const E = M[S];
      if (E.equals(y) === !1) return E.copy(y), !0;
    }
    return !1;
  }
  function g(v) {
    const S = v.uniforms;
    let M = 0;
    const y = 16;
    let E = 0;
    for (let A = 0, x = S.length; A < x; A++) {
      const w = S[A],
        P = d(w);
      if (
        ((w.__data = new Float32Array(
          P.storage / Float32Array.BYTES_PER_ELEMENT
        )),
        (w.__offset = M),
        A > 0)
      ) {
        E = M % y;
        const W = y - E;
        E !== 0 && W - P.boundary < 0 && ((M += y - E), (w.__offset = M));
      }
      M += P.storage;
    }
    return (
      (E = M % y), E > 0 && (M += y - E), (v.__size = M), (v.__cache = {}), this
    );
  }
  function d(v) {
    const S = v.value,
      M = { boundary: 0, storage: 0 };
    return (
      typeof S == "number"
        ? ((M.boundary = 4), (M.storage = 4))
        : S.isVector2
        ? ((M.boundary = 8), (M.storage = 8))
        : S.isVector3 || S.isColor
        ? ((M.boundary = 16), (M.storage = 12))
        : S.isVector4
        ? ((M.boundary = 16), (M.storage = 16))
        : S.isMatrix3
        ? ((M.boundary = 48), (M.storage = 48))
        : S.isMatrix4
        ? ((M.boundary = 64), (M.storage = 64))
        : S.isTexture
        ? console.warn(
            "THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."
          )
        : console.warn(
            "THREE.WebGLRenderer: Unsupported uniform value type.",
            S
          ),
      M
    );
  }
  function p(v) {
    const S = v.target;
    S.removeEventListener("dispose", p);
    const M = a.indexOf(S.__bindingPointIndex);
    a.splice(M, 1), o.deleteBuffer(i[S.id]), delete i[S.id], delete r[S.id];
  }
  function _() {
    for (const v in i) o.deleteBuffer(i[v]);
    (a = []), (i = {}), (r = {});
  }
  return { bind: c, update: l, dispose: _ };
}
function Hg() {
  const o = Er("canvas");
  return (o.style.display = "block"), o;
}
function Uc(o = {}) {
  this.isWebGLRenderer = !0;
  const e = o.canvas !== void 0 ? o.canvas : Hg(),
    t = o.context !== void 0 ? o.context : null,
    n = o.depth !== void 0 ? o.depth : !0,
    i = o.stencil !== void 0 ? o.stencil : !0,
    r = o.antialias !== void 0 ? o.antialias : !1,
    a = o.premultipliedAlpha !== void 0 ? o.premultipliedAlpha : !0,
    s = o.preserveDrawingBuffer !== void 0 ? o.preserveDrawingBuffer : !1,
    c = o.powerPreference !== void 0 ? o.powerPreference : "default",
    l =
      o.failIfMajorPerformanceCaveat !== void 0
        ? o.failIfMajorPerformanceCaveat
        : !1;
  let u;
  t !== null
    ? (u = t.getContextAttributes().alpha)
    : (u = o.alpha !== void 0 ? o.alpha : !1);
  let h = null,
    f = null;
  const m = [],
    g = [];
  (this.domElement = e),
    (this.debug = { checkShaderErrors: !0 }),
    (this.autoClear = !0),
    (this.autoClearColor = !0),
    (this.autoClearDepth = !0),
    (this.autoClearStencil = !0),
    (this.sortObjects = !0),
    (this.clippingPlanes = []),
    (this.localClippingEnabled = !1),
    (this.outputEncoding = _i),
    (this.physicallyCorrectLights = !1),
    (this.toneMapping = An),
    (this.toneMappingExposure = 1),
    Object.defineProperties(this, {
      gammaFactor: {
        get: function () {
          return (
            console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."),
            2
          );
        },
        set: function () {
          console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.");
        },
      },
    });
  const d = this;
  let p = !1,
    _ = 0,
    v = 0,
    S = null,
    M = -1,
    y = null;
  const E = new at(),
    A = new at();
  let x = null,
    w = e.width,
    P = e.height,
    W = 1,
    K = null,
    O = null;
  const D = new at(0, 0, w, P),
    B = new at(0, 0, w, P);
  let Y = !1;
  const X = new Dc();
  let k = !1,
    z = !1,
    U = null;
  const J = new Qe(),
    Z = new Se(),
    $ = new R(),
    ie = {
      background: null,
      fog: null,
      environment: null,
      overrideMaterial: null,
      isScene: !0,
    };
  function de() {
    return S === null ? W : 1;
  }
  let j = t;
  function Ie(T, F) {
    for (let G = 0; G < T.length; G++) {
      const I = T[G],
        q = e.getContext(I, F);
      if (q !== null) return q;
    }
    return null;
  }
  try {
    const T = {
      alpha: !0,
      depth: n,
      stencil: i,
      antialias: r,
      premultipliedAlpha: a,
      preserveDrawingBuffer: s,
      powerPreference: c,
      failIfMajorPerformanceCaveat: l,
    };
    if (
      ("setAttribute" in e && e.setAttribute("data-engine", `three.js r${no}`),
      e.addEventListener("webglcontextlost", ye, !1),
      e.addEventListener("webglcontextrestored", Pe, !1),
      e.addEventListener("webglcontextcreationerror", qe, !1),
      j === null)
    ) {
      const F = ["webgl2", "webgl", "experimental-webgl"];
      if ((d.isWebGL1Renderer === !0 && F.shift(), (j = Ie(F, T)), j === null))
        throw Ie(F)
          ? new Error(
              "Error creating WebGL context with your selected attributes."
            )
          : new Error("Error creating WebGL context.");
    }
    j.getShaderPrecisionFormat === void 0 &&
      (j.getShaderPrecisionFormat = function () {
        return { rangeMin: 1, rangeMax: 1, precision: 1 };
      });
  } catch (T) {
    throw (console.error("THREE.WebGLRenderer: " + T.message), T);
  }
  let me,
    _e,
    le,
    Ue,
    be,
    pe,
    it,
    wt,
    ht,
    sn,
    rt,
    ze,
    mn,
    an,
    C,
    b,
    H,
    Q,
    ee,
    re,
    xe,
    N,
    he,
    oe;
  function ue() {
    (me = new em(j)),
      (_e = new jp(j, me, o)),
      me.init(_e),
      (N = new Og(j, me, _e)),
      (le = new zg(j, me, _e)),
      (Ue = new im()),
      (be = new yg()),
      (pe = new Fg(j, me, le, be, _e, N, Ue)),
      (it = new $p(d)),
      (wt = new Qp(d)),
      (ht = new pf(j, _e)),
      (he = new Xp(j, me, ht, _e)),
      (sn = new tm(j, ht, Ue, he)),
      (rt = new om(j, sn, ht, Ue)),
      (ee = new am(j, _e, pe)),
      (b = new Zp(be)),
      (ze = new vg(d, it, wt, me, _e, he, b)),
      (mn = new Vg(d, be)),
      (an = new Sg()),
      (C = new Ag(me, _e)),
      (Q = new qp(d, it, le, rt, u, a)),
      (H = new Ig(d, rt, _e)),
      (oe = new Gg(j, Ue, _e, le)),
      (re = new Yp(j, me, Ue, _e)),
      (xe = new nm(j, me, Ue, _e)),
      (Ue.programs = ze.programs),
      (d.capabilities = _e),
      (d.extensions = me),
      (d.properties = be),
      (d.renderLists = an),
      (d.shadowMap = H),
      (d.state = le),
      (d.info = Ue);
  }
  ue();
  const ce = new kg(d, j);
  (this.xr = ce),
    (this.getContext = function () {
      return j;
    }),
    (this.getContextAttributes = function () {
      return j.getContextAttributes();
    }),
    (this.forceContextLoss = function () {
      const T = me.get("WEBGL_lose_context");
      T && T.loseContext();
    }),
    (this.forceContextRestore = function () {
      const T = me.get("WEBGL_lose_context");
      T && T.restoreContext();
    }),
    (this.getPixelRatio = function () {
      return W;
    }),
    (this.setPixelRatio = function (T) {
      T !== void 0 && ((W = T), this.setSize(w, P, !1));
    }),
    (this.getSize = function (T) {
      return T.set(w, P);
    }),
    (this.setSize = function (T, F, G) {
      if (ce.isPresenting) {
        console.warn(
          "THREE.WebGLRenderer: Can't change size while VR device is presenting."
        );
        return;
      }
      (w = T),
        (P = F),
        (e.width = Math.floor(T * W)),
        (e.height = Math.floor(F * W)),
        G !== !1 && ((e.style.width = T + "px"), (e.style.height = F + "px")),
        this.setViewport(0, 0, T, F);
    }),
    (this.getDrawingBufferSize = function (T) {
      return T.set(w * W, P * W).floor();
    }),
    (this.setDrawingBufferSize = function (T, F, G) {
      (w = T),
        (P = F),
        (W = G),
        (e.width = Math.floor(T * G)),
        (e.height = Math.floor(F * G)),
        this.setViewport(0, 0, T, F);
    }),
    (this.getCurrentViewport = function (T) {
      return T.copy(E);
    }),
    (this.getViewport = function (T) {
      return T.copy(D);
    }),
    (this.setViewport = function (T, F, G, I) {
      T.isVector4 ? D.set(T.x, T.y, T.z, T.w) : D.set(T, F, G, I),
        le.viewport(E.copy(D).multiplyScalar(W).floor());
    }),
    (this.getScissor = function (T) {
      return T.copy(B);
    }),
    (this.setScissor = function (T, F, G, I) {
      T.isVector4 ? B.set(T.x, T.y, T.z, T.w) : B.set(T, F, G, I),
        le.scissor(A.copy(B).multiplyScalar(W).floor());
    }),
    (this.getScissorTest = function () {
      return Y;
    }),
    (this.setScissorTest = function (T) {
      le.setScissorTest((Y = T));
    }),
    (this.setOpaqueSort = function (T) {
      K = T;
    }),
    (this.setTransparentSort = function (T) {
      O = T;
    }),
    (this.getClearColor = function (T) {
      return T.copy(Q.getClearColor());
    }),
    (this.setClearColor = function () {
      Q.setClearColor.apply(Q, arguments);
    }),
    (this.getClearAlpha = function () {
      return Q.getClearAlpha();
    }),
    (this.setClearAlpha = function () {
      Q.setClearAlpha.apply(Q, arguments);
    }),
    (this.clear = function (T = !0, F = !0, G = !0) {
      let I = 0;
      T && (I |= 16384), F && (I |= 256), G && (I |= 1024), j.clear(I);
    }),
    (this.clearColor = function () {
      this.clear(!0, !1, !1);
    }),
    (this.clearDepth = function () {
      this.clear(!1, !0, !1);
    }),
    (this.clearStencil = function () {
      this.clear(!1, !1, !0);
    }),
    (this.dispose = function () {
      e.removeEventListener("webglcontextlost", ye, !1),
        e.removeEventListener("webglcontextrestored", Pe, !1),
        e.removeEventListener("webglcontextcreationerror", qe, !1),
        an.dispose(),
        C.dispose(),
        be.dispose(),
        it.dispose(),
        wt.dispose(),
        rt.dispose(),
        he.dispose(),
        oe.dispose(),
        ze.dispose(),
        ce.dispose(),
        ce.removeEventListener("sessionstart", Ae),
        ce.removeEventListener("sessionend", et),
        U && (U.dispose(), (U = null)),
        Xe.stop();
    });
  function ye(T) {
    T.preventDefault(),
      console.log("THREE.WebGLRenderer: Context Lost."),
      (p = !0);
  }
  function Pe() {
    console.log("THREE.WebGLRenderer: Context Restored."), (p = !1);
    const T = Ue.autoReset,
      F = H.enabled,
      G = H.autoUpdate,
      I = H.needsUpdate,
      q = H.type;
    ue(),
      (Ue.autoReset = T),
      (H.enabled = F),
      (H.autoUpdate = G),
      (H.needsUpdate = I),
      (H.type = q);
  }
  function qe(T) {
    console.error(
      "THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",
      T.statusMessage
    );
  }
  function L(T) {
    const F = T.target;
    F.removeEventListener("dispose", L), ae(F);
  }
  function ae(T) {
    V(T), be.remove(T);
  }
  function V(T) {
    const F = be.get(T).programs;
    F !== void 0 &&
      (F.forEach(function (G) {
        ze.releaseProgram(G);
      }),
      T.isShaderMaterial && ze.releaseShaderCache(T));
  }
  (this.renderBufferDirect = function (T, F, G, I, q, fe) {
    F === null && (F = ie);
    const ge = q.isMesh && q.matrixWorld.determinant() < 0,
      Me = Yu(T, F, G, I, q);
    le.setMaterial(I, ge);
    let ve = G.index;
    const Re = G.attributes.position;
    if (ve === null) {
      if (Re === void 0 || Re.count === 0) return;
    } else if (ve.count === 0) return;
    let Ee = 1;
    I.wireframe === !0 && ((ve = sn.getWireframeAttribute(G)), (Ee = 2)),
      he.setup(q, I, Me, G, ve);
    let Ce,
      Ve = re;
    ve !== null && ((Ce = ht.get(ve)), (Ve = xe), Ve.setIndex(Ce));
    const $n = ve !== null ? ve.count : Re.count,
      yi = G.drawRange.start * Ee,
      Mi = G.drawRange.count * Ee,
      on = fe !== null ? fe.start * Ee : 0,
      Le = fe !== null ? fe.count * Ee : 1 / 0,
      Si = Math.max(yi, on),
      je = Math.min($n, yi + Mi, on + Le) - 1,
      Ot = Math.max(0, je - Si + 1);
    if (Ot !== 0) {
      if (q.isMesh)
        I.wireframe === !0
          ? (le.setLineWidth(I.wireframeLinewidth * de()), Ve.setMode(1))
          : Ve.setMode(4);
      else if (q.isLine) {
        let In = I.linewidth;
        In === void 0 && (In = 1),
          le.setLineWidth(In * de()),
          q.isLineSegments
            ? Ve.setMode(1)
            : q.isLineLoop
            ? Ve.setMode(2)
            : Ve.setMode(3);
      } else q.isPoints ? Ve.setMode(0) : q.isSprite && Ve.setMode(4);
      if (q.isInstancedMesh) Ve.renderInstances(Si, Ot, q.count);
      else if (G.isInstancedBufferGeometry) {
        const In = Math.min(G.instanceCount, G._maxInstanceCount);
        Ve.renderInstances(Si, Ot, In);
      } else Ve.render(Si, Ot);
    }
  }),
    (this.compile = function (T, F) {
      function G(I, q, fe) {
        I.transparent === !0 && I.side === Vn
          ? ((I.side = Xt),
            (I.needsUpdate = !0),
            Gr(I, q, fe),
            (I.side = Yi),
            (I.needsUpdate = !0),
            Gr(I, q, fe),
            (I.side = Vn))
          : Gr(I, q, fe);
      }
      (f = C.get(T)),
        f.init(),
        g.push(f),
        T.traverseVisible(function (I) {
          I.isLight &&
            I.layers.test(F.layers) &&
            (f.pushLight(I), I.castShadow && f.pushShadow(I));
        }),
        f.setupLights(d.physicallyCorrectLights),
        T.traverse(function (I) {
          const q = I.material;
          if (q)
            if (Array.isArray(q))
              for (let fe = 0; fe < q.length; fe++) {
                const ge = q[fe];
                G(ge, T, I);
              }
            else G(q, T, I);
        }),
        g.pop(),
        (f = null);
    });
  let se = null;
  function ne(T) {
    se && se(T);
  }
  function Ae() {
    Xe.stop();
  }
  function et() {
    Xe.start();
  }
  const Xe = new Rc();
  Xe.setAnimationLoop(ne),
    typeof self < "u" && Xe.setContext(self),
    (this.setAnimationLoop = function (T) {
      (se = T), ce.setAnimationLoop(T), T === null ? Xe.stop() : Xe.start();
    }),
    ce.addEventListener("sessionstart", Ae),
    ce.addEventListener("sessionend", et),
    (this.render = function (T, F) {
      if (F !== void 0 && F.isCamera !== !0) {
        console.error(
          "THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera."
        );
        return;
      }
      if (p === !0) return;
      T.matrixWorldAutoUpdate === !0 && T.updateMatrixWorld(),
        F.parent === null &&
          F.matrixWorldAutoUpdate === !0 &&
          F.updateMatrixWorld(),
        ce.enabled === !0 &&
          ce.isPresenting === !0 &&
          (ce.cameraAutoUpdate === !0 && ce.updateCamera(F),
          (F = ce.getCamera())),
        T.isScene === !0 && T.onBeforeRender(d, T, F, S),
        (f = C.get(T, g.length)),
        f.init(),
        g.push(f),
        J.multiplyMatrices(F.projectionMatrix, F.matrixWorldInverse),
        X.setFromProjectionMatrix(J),
        (z = this.localClippingEnabled),
        (k = b.init(this.clippingPlanes, z, F)),
        (h = an.get(T, m.length)),
        h.init(),
        m.push(h),
        Rn(T, F, 0, d.sortObjects),
        h.finish(),
        d.sortObjects === !0 && h.sort(K, O),
        k === !0 && b.beginShadows();
      const G = f.state.shadowsArray;
      if (
        (H.render(G, T, F),
        k === !0 && b.endShadows(),
        this.info.autoReset === !0 && this.info.reset(),
        Q.render(h, T),
        f.setupLights(d.physicallyCorrectLights),
        F.isArrayCamera)
      ) {
        const I = F.cameras;
        for (let q = 0, fe = I.length; q < fe; q++) {
          const ge = I[q];
          ke(h, T, ge, ge.viewport);
        }
      } else ke(h, T, F);
      S !== null &&
        (pe.updateMultisampleRenderTarget(S), pe.updateRenderTargetMipmap(S)),
        T.isScene === !0 && T.onAfterRender(d, T, F),
        he.resetDefaultState(),
        (M = -1),
        (y = null),
        g.pop(),
        g.length > 0 ? (f = g[g.length - 1]) : (f = null),
        m.pop(),
        m.length > 0 ? (h = m[m.length - 1]) : (h = null);
    });
  function Rn(T, F, G, I) {
    if (T.visible === !1) return;
    if (T.layers.test(F.layers)) {
      if (T.isGroup) G = T.renderOrder;
      else if (T.isLOD) T.autoUpdate === !0 && T.update(F);
      else if (T.isLight) f.pushLight(T), T.castShadow && f.pushShadow(T);
      else if (T.isSprite) {
        if (!T.frustumCulled || X.intersectsSprite(T)) {
          I && $.setFromMatrixPosition(T.matrixWorld).applyMatrix4(J);
          const ge = rt.update(T),
            Me = T.material;
          Me.visible && h.push(T, ge, Me, G, $.z, null);
        }
      } else if (
        (T.isMesh || T.isLine || T.isPoints) &&
        (T.isSkinnedMesh &&
          T.skeleton.frame !== Ue.render.frame &&
          (T.skeleton.update(), (T.skeleton.frame = Ue.render.frame)),
        !T.frustumCulled || X.intersectsObject(T))
      ) {
        I && $.setFromMatrixPosition(T.matrixWorld).applyMatrix4(J);
        const ge = rt.update(T),
          Me = T.material;
        if (Array.isArray(Me)) {
          const ve = ge.groups;
          for (let Re = 0, Ee = ve.length; Re < Ee; Re++) {
            const Ce = ve[Re],
              Ve = Me[Ce.materialIndex];
            Ve && Ve.visible && h.push(T, ge, Ve, G, $.z, Ce);
          }
        } else Me.visible && h.push(T, ge, Me, G, $.z, null);
      }
    }
    const fe = T.children;
    for (let ge = 0, Me = fe.length; ge < Me; ge++) Rn(fe[ge], F, G, I);
  }
  function ke(T, F, G, I) {
    const q = T.opaque,
      fe = T.transmissive,
      ge = T.transparent;
    f.setupLightsView(G),
      fe.length > 0 && gn(q, F, G),
      I && le.viewport(E.copy(I)),
      q.length > 0 && Ft(q, F, G),
      fe.length > 0 && Ft(fe, F, G),
      ge.length > 0 && Ft(ge, F, G),
      le.buffers.depth.setTest(!0),
      le.buffers.depth.setMask(!0),
      le.buffers.color.setMask(!0),
      le.setPolygonOffset(!1);
  }
  function gn(T, F, G) {
    const I = _e.isWebGL2;
    U === null &&
      (U = new nn(1, 1, {
        generateMipmaps: !0,
        type: me.has("EXT_color_buffer_half_float") ? Tr : gi,
        minFilter: Ds,
        samples: I && r === !0 ? 4 : 0,
      })),
      d.getDrawingBufferSize(Z),
      I ? U.setSize(Z.x, Z.y) : U.setSize(Na(Z.x), Na(Z.y));
    const q = d.getRenderTarget();
    d.setRenderTarget(U), d.clear();
    const fe = d.toneMapping;
    (d.toneMapping = An),
      Ft(T, F, G),
      (d.toneMapping = fe),
      pe.updateMultisampleRenderTarget(U),
      pe.updateRenderTargetMipmap(U),
      d.setRenderTarget(q);
  }
  function Ft(T, F, G) {
    const I = F.isScene === !0 ? F.overrideMaterial : null;
    for (let q = 0, fe = T.length; q < fe; q++) {
      const ge = T[q],
        Me = ge.object,
        ve = ge.geometry,
        Re = I === null ? ge.material : I,
        Ee = ge.group;
      Me.layers.test(G.layers) && Xu(Me, F, G, ve, Re, Ee);
    }
  }
  function Xu(T, F, G, I, q, fe) {
    T.onBeforeRender(d, F, G, I, q, fe),
      T.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse, T.matrixWorld),
      T.normalMatrix.getNormalMatrix(T.modelViewMatrix),
      q.onBeforeRender(d, F, G, I, T, fe),
      q.transparent === !0 && q.side === Vn
        ? ((q.side = Xt),
          (q.needsUpdate = !0),
          d.renderBufferDirect(G, F, I, q, T, fe),
          (q.side = Yi),
          (q.needsUpdate = !0),
          d.renderBufferDirect(G, F, I, q, T, fe),
          (q.side = Vn))
        : d.renderBufferDirect(G, F, I, q, T, fe),
      T.onAfterRender(d, F, G, I, q, fe);
  }
  function Gr(T, F, G) {
    F.isScene !== !0 && (F = ie);
    const I = be.get(T),
      q = f.state.lights,
      fe = f.state.shadowsArray,
      ge = q.state.version,
      Me = ze.getParameters(T, q.state, fe, F, G),
      ve = ze.getProgramCacheKey(Me);
    let Re = I.programs;
    (I.environment = T.isMeshStandardMaterial ? F.environment : null),
      (I.fog = F.fog),
      (I.envMap = (T.isMeshStandardMaterial ? wt : it).get(
        T.envMap || I.environment
      )),
      Re === void 0 &&
        (T.addEventListener("dispose", L), (Re = new Map()), (I.programs = Re));
    let Ee = Re.get(ve);
    if (Ee !== void 0) {
      if (I.currentProgram === Ee && I.lightsStateVersion === ge)
        return Eo(T, Me), Ee;
    } else
      (Me.uniforms = ze.getUniforms(T)),
        T.onBuild(G, Me, d),
        T.onBeforeCompile(Me, d),
        (Ee = ze.acquireProgram(Me, ve)),
        Re.set(ve, Ee),
        (I.uniforms = Me.uniforms);
    const Ce = I.uniforms;
    ((!T.isShaderMaterial && !T.isRawShaderMaterial) || T.clipping === !0) &&
      (Ce.clippingPlanes = b.uniform),
      Eo(T, Me),
      (I.needsLights = Zu(T)),
      (I.lightsStateVersion = ge),
      I.needsLights &&
        ((Ce.ambientLightColor.value = q.state.ambient),
        (Ce.lightProbe.value = q.state.probe),
        (Ce.directionalLights.value = q.state.directional),
        (Ce.directionalLightShadows.value = q.state.directionalShadow),
        (Ce.spotLights.value = q.state.spot),
        (Ce.spotLightShadows.value = q.state.spotShadow),
        (Ce.rectAreaLights.value = q.state.rectArea),
        (Ce.ltc_1.value = q.state.rectAreaLTC1),
        (Ce.ltc_2.value = q.state.rectAreaLTC2),
        (Ce.pointLights.value = q.state.point),
        (Ce.pointLightShadows.value = q.state.pointShadow),
        (Ce.hemisphereLights.value = q.state.hemi),
        (Ce.directionalShadowMap.value = q.state.directionalShadowMap),
        (Ce.directionalShadowMatrix.value = q.state.directionalShadowMatrix),
        (Ce.spotShadowMap.value = q.state.spotShadowMap),
        (Ce.spotLightMatrix.value = q.state.spotLightMatrix),
        (Ce.spotLightMap.value = q.state.spotLightMap),
        (Ce.pointShadowMap.value = q.state.pointShadowMap),
        (Ce.pointShadowMatrix.value = q.state.pointShadowMatrix));
    const Ve = Ee.getUniforms(),
      $n = gs.seqWithValue(Ve.seq, Ce);
    return (I.currentProgram = Ee), (I.uniformsList = $n), Ee;
  }
  function Eo(T, F) {
    const G = be.get(T);
    (G.outputEncoding = F.outputEncoding),
      (G.instancing = F.instancing),
      (G.skinning = F.skinning),
      (G.morphTargets = F.morphTargets),
      (G.morphNormals = F.morphNormals),
      (G.morphColors = F.morphColors),
      (G.morphTargetsCount = F.morphTargetsCount),
      (G.numClippingPlanes = F.numClippingPlanes),
      (G.numIntersection = F.numClipIntersection),
      (G.vertexAlphas = F.vertexAlphas),
      (G.vertexTangents = F.vertexTangents),
      (G.toneMapping = F.toneMapping);
  }
  function Yu(T, F, G, I, q) {
    F.isScene !== !0 && (F = ie), pe.resetTextureUnits();
    const fe = F.fog,
      ge = I.isMeshStandardMaterial ? F.environment : null,
      Me =
        S === null
          ? d.outputEncoding
          : S.isXRRenderTarget === !0
          ? S.texture.encoding
          : _i,
      ve = (I.isMeshStandardMaterial ? wt : it).get(I.envMap || ge),
      Re =
        I.vertexColors === !0 &&
        !!G.attributes.color &&
        G.attributes.color.itemSize === 4,
      Ee = !!I.normalMap && !!G.attributes.tangent,
      Ce = !!G.morphAttributes.position,
      Ve = !!G.morphAttributes.normal,
      $n = !!G.morphAttributes.color,
      yi = I.toneMapped ? d.toneMapping : An,
      Mi =
        G.morphAttributes.position ||
        G.morphAttributes.normal ||
        G.morphAttributes.color,
      on = Mi !== void 0 ? Mi.length : 0,
      Le = be.get(I),
      Si = f.state.lights;
    if (k === !0 && (z === !0 || T !== y)) {
      const Tt = T === y && I.id === M;
      b.setState(I, T, Tt);
    }
    let je = !1;
    I.version === Le.__version
      ? ((Le.needsLights && Le.lightsStateVersion !== Si.state.version) ||
          Le.outputEncoding !== Me ||
          (q.isInstancedMesh && Le.instancing === !1) ||
          (!q.isInstancedMesh && Le.instancing === !0) ||
          (q.isSkinnedMesh && Le.skinning === !1) ||
          (!q.isSkinnedMesh && Le.skinning === !0) ||
          Le.envMap !== ve ||
          (I.fog === !0 && Le.fog !== fe) ||
          (Le.numClippingPlanes !== void 0 &&
            (Le.numClippingPlanes !== b.numPlanes ||
              Le.numIntersection !== b.numIntersection)) ||
          Le.vertexAlphas !== Re ||
          Le.vertexTangents !== Ee ||
          Le.morphTargets !== Ce ||
          Le.morphNormals !== Ve ||
          Le.morphColors !== $n ||
          Le.toneMapping !== yi ||
          (_e.isWebGL2 === !0 && Le.morphTargetsCount !== on)) &&
        (je = !0)
      : ((je = !0), (Le.__version = I.version));
    let Ot = Le.currentProgram;
    je === !0 && (Ot = Gr(I, F, q));
    let In = !1,
      hr = !1,
      Bs = !1;
    const ft = Ot.getUniforms(),
      Kn = Le.uniforms;
    if (
      (le.useProgram(Ot.program) && ((In = !0), (hr = !0), (Bs = !0)),
      I.id !== M && ((M = I.id), (hr = !0)),
      In || y !== T)
    ) {
      if (
        (ft.setValue(j, "projectionMatrix", T.projectionMatrix),
        _e.logarithmicDepthBuffer &&
          ft.setValue(j, "logDepthBufFC", 2 / (Math.log(T.far + 1) / Math.LN2)),
        y !== T && ((y = T), (hr = !0), (Bs = !0)),
        I.isShaderMaterial ||
          I.isMeshPhongMaterial ||
          I.isMeshToonMaterial ||
          I.isMeshStandardMaterial ||
          I.envMap)
      ) {
        const Tt = ft.map.cameraPosition;
        Tt !== void 0 && Tt.setValue(j, $.setFromMatrixPosition(T.matrixWorld));
      }
      (I.isMeshPhongMaterial ||
        I.isMeshToonMaterial ||
        I.isMeshLambertMaterial ||
        I.isMeshBasicMaterial ||
        I.isMeshStandardMaterial ||
        I.isShaderMaterial) &&
        ft.setValue(j, "isOrthographic", T.isOrthographicCamera === !0),
        (I.isMeshPhongMaterial ||
          I.isMeshToonMaterial ||
          I.isMeshLambertMaterial ||
          I.isMeshBasicMaterial ||
          I.isMeshStandardMaterial ||
          I.isShaderMaterial ||
          I.isShadowMaterial ||
          q.isSkinnedMesh) &&
          ft.setValue(j, "viewMatrix", T.matrixWorldInverse);
    }
    if (q.isSkinnedMesh) {
      ft.setOptional(j, q, "bindMatrix"),
        ft.setOptional(j, q, "bindMatrixInverse");
      const Tt = q.skeleton;
      Tt &&
        (_e.floatVertexTextures
          ? (Tt.boneTexture === null && Tt.computeBoneTexture(),
            ft.setValue(j, "boneTexture", Tt.boneTexture, pe),
            ft.setValue(j, "boneTextureSize", Tt.boneTextureSize))
          : console.warn(
              "THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."
            ));
    }
    const ks = G.morphAttributes;
    if (
      ((ks.position !== void 0 ||
        ks.normal !== void 0 ||
        (ks.color !== void 0 && _e.isWebGL2 === !0)) &&
        ee.update(q, G, I, Ot),
      (hr || Le.receiveShadow !== q.receiveShadow) &&
        ((Le.receiveShadow = q.receiveShadow),
        ft.setValue(j, "receiveShadow", q.receiveShadow)),
      I.isMeshGouraudMaterial &&
        I.envMap !== null &&
        ((Kn.envMap.value = ve),
        (Kn.flipEnvMap.value =
          ve.isCubeTexture && ve.isRenderTargetTexture === !1 ? -1 : 1)),
      hr &&
        (ft.setValue(j, "toneMappingExposure", d.toneMappingExposure),
        Le.needsLights && ju(Kn, Bs),
        fe && I.fog === !0 && mn.refreshFogUniforms(Kn, fe),
        mn.refreshMaterialUniforms(Kn, I, W, P, U),
        gs.upload(j, Le.uniformsList, Kn, pe)),
      I.isShaderMaterial &&
        I.uniformsNeedUpdate === !0 &&
        (gs.upload(j, Le.uniformsList, Kn, pe), (I.uniformsNeedUpdate = !1)),
      I.isSpriteMaterial && ft.setValue(j, "center", q.center),
      ft.setValue(j, "modelViewMatrix", q.modelViewMatrix),
      ft.setValue(j, "normalMatrix", q.normalMatrix),
      ft.setValue(j, "modelMatrix", q.matrixWorld),
      I.isShaderMaterial || I.isRawShaderMaterial)
    ) {
      const Tt = I.uniformsGroups;
      for (let Vs = 0, $u = Tt.length; Vs < $u; Vs++)
        if (_e.isWebGL2) {
          const Co = Tt[Vs];
          oe.update(Co, Ot), oe.bind(Co, Ot);
        } else
          console.warn(
            "THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2."
          );
    }
    return Ot;
  }
  function ju(T, F) {
    (T.ambientLightColor.needsUpdate = F),
      (T.lightProbe.needsUpdate = F),
      (T.directionalLights.needsUpdate = F),
      (T.directionalLightShadows.needsUpdate = F),
      (T.pointLights.needsUpdate = F),
      (T.pointLightShadows.needsUpdate = F),
      (T.spotLights.needsUpdate = F),
      (T.spotLightShadows.needsUpdate = F),
      (T.rectAreaLights.needsUpdate = F),
      (T.hemisphereLights.needsUpdate = F);
  }
  function Zu(T) {
    return (
      T.isMeshLambertMaterial ||
      T.isMeshToonMaterial ||
      T.isMeshPhongMaterial ||
      T.isMeshStandardMaterial ||
      T.isShadowMaterial ||
      (T.isShaderMaterial && T.lights === !0)
    );
  }
  (this.getActiveCubeFace = function () {
    return _;
  }),
    (this.getActiveMipmapLevel = function () {
      return v;
    }),
    (this.getRenderTarget = function () {
      return S;
    }),
    (this.setRenderTargetTextures = function (T, F, G) {
      (be.get(T.texture).__webglTexture = F),
        (be.get(T.depthTexture).__webglTexture = G);
      const I = be.get(T);
      (I.__hasExternalTextures = !0),
        I.__hasExternalTextures &&
          ((I.__autoAllocateDepthBuffer = G === void 0),
          I.__autoAllocateDepthBuffer ||
            (me.has("WEBGL_multisampled_render_to_texture") === !0 &&
              (console.warn(
                "THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"
              ),
              (I.__useRenderToTexture = !1))));
    }),
    (this.setRenderTargetFramebuffer = function (T, F) {
      const G = be.get(T);
      (G.__webglFramebuffer = F), (G.__useDefaultFramebuffer = F === void 0);
    }),
    (this.setRenderTarget = function (T, F = 0, G = 0) {
      (S = T), (_ = F), (v = G);
      let I = !0;
      if (T) {
        const ve = be.get(T);
        ve.__useDefaultFramebuffer !== void 0
          ? (le.bindFramebuffer(36160, null), (I = !1))
          : ve.__webglFramebuffer === void 0
          ? pe.setupRenderTarget(T)
          : ve.__hasExternalTextures &&
            pe.rebindTextures(
              T,
              be.get(T.texture).__webglTexture,
              be.get(T.depthTexture).__webglTexture
            );
      }
      let q = null,
        fe = !1,
        ge = !1;
      if (T) {
        const ve = T.texture;
        (ve.isData3DTexture || ve.isDataArrayTexture) && (ge = !0);
        const Re = be.get(T).__webglFramebuffer;
        T.isWebGLCubeRenderTarget
          ? ((q = Re[F]), (fe = !0))
          : _e.isWebGL2 && T.samples > 0 && pe.useMultisampledRTT(T) === !1
          ? (q = be.get(T).__webglMultisampledFramebuffer)
          : (q = Re),
          E.copy(T.viewport),
          A.copy(T.scissor),
          (x = T.scissorTest);
      } else
        E.copy(D).multiplyScalar(W).floor(),
          A.copy(B).multiplyScalar(W).floor(),
          (x = Y);
      if (
        (le.bindFramebuffer(36160, q) &&
          _e.drawBuffers &&
          I &&
          le.drawBuffers(T, q),
        le.viewport(E),
        le.scissor(A),
        le.setScissorTest(x),
        fe)
      ) {
        const ve = be.get(T.texture);
        j.framebufferTexture2D(36160, 36064, 34069 + F, ve.__webglTexture, G);
      } else if (ge) {
        const ve = be.get(T.texture),
          Re = F || 0;
        j.framebufferTextureLayer(36160, 36064, ve.__webglTexture, G || 0, Re);
      }
      M = -1;
    }),
    (this.readRenderTargetPixels = function (T, F, G, I, q, fe, ge) {
      if (!(T && T.isWebGLRenderTarget)) {
        console.error(
          "THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget."
        );
        return;
      }
      let Me = be.get(T).__webglFramebuffer;
      if ((T.isWebGLCubeRenderTarget && ge !== void 0 && (Me = Me[ge]), Me)) {
        le.bindFramebuffer(36160, Me);
        try {
          const ve = T.texture,
            Re = ve.format,
            Ee = ve.type;
          if (Re !== un && N.convert(Re) !== j.getParameter(35739)) {
            console.error(
              "THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format."
            );
            return;
          }
          const Ce =
            Ee === Tr &&
            (me.has("EXT_color_buffer_half_float") ||
              (_e.isWebGL2 && me.has("EXT_color_buffer_float")));
          if (
            Ee !== gi &&
            N.convert(Ee) !== j.getParameter(35738) &&
            !(
              Ee === li &&
              (_e.isWebGL2 ||
                me.has("OES_texture_float") ||
                me.has("WEBGL_color_buffer_float"))
            ) &&
            !Ce
          ) {
            console.error(
              "THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type."
            );
            return;
          }
          F >= 0 &&
            F <= T.width - I &&
            G >= 0 &&
            G <= T.height - q &&
            j.readPixels(F, G, I, q, N.convert(Re), N.convert(Ee), fe);
        } finally {
          const ve = S !== null ? be.get(S).__webglFramebuffer : null;
          le.bindFramebuffer(36160, ve);
        }
      }
    }),
    (this.copyFramebufferToTexture = function (T, F, G = 0) {
      const I = Math.pow(2, -G),
        q = Math.floor(F.image.width * I),
        fe = Math.floor(F.image.height * I);
      pe.setTexture2D(F, 0),
        j.copyTexSubImage2D(3553, G, 0, 0, T.x, T.y, q, fe),
        le.unbindTexture();
    }),
    (this.copyTextureToTexture = function (T, F, G, I = 0) {
      const q = F.image.width,
        fe = F.image.height,
        ge = N.convert(G.format),
        Me = N.convert(G.type);
      pe.setTexture2D(G, 0),
        j.pixelStorei(37440, G.flipY),
        j.pixelStorei(37441, G.premultiplyAlpha),
        j.pixelStorei(3317, G.unpackAlignment),
        F.isDataTexture
          ? j.texSubImage2D(3553, I, T.x, T.y, q, fe, ge, Me, F.image.data)
          : F.isCompressedTexture
          ? j.compressedTexSubImage2D(
              3553,
              I,
              T.x,
              T.y,
              F.mipmaps[0].width,
              F.mipmaps[0].height,
              ge,
              F.mipmaps[0].data
            )
          : j.texSubImage2D(3553, I, T.x, T.y, ge, Me, F.image),
        I === 0 && G.generateMipmaps && j.generateMipmap(3553),
        le.unbindTexture();
    }),
    (this.copyTextureToTexture3D = function (T, F, G, I, q = 0) {
      if (d.isWebGL1Renderer) {
        console.warn(
          "THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2."
        );
        return;
      }
      const fe = T.max.x - T.min.x + 1,
        ge = T.max.y - T.min.y + 1,
        Me = T.max.z - T.min.z + 1,
        ve = N.convert(I.format),
        Re = N.convert(I.type);
      let Ee;
      if (I.isData3DTexture) pe.setTexture3D(I, 0), (Ee = 32879);
      else if (I.isDataArrayTexture) pe.setTexture2DArray(I, 0), (Ee = 35866);
      else {
        console.warn(
          "THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray."
        );
        return;
      }
      j.pixelStorei(37440, I.flipY),
        j.pixelStorei(37441, I.premultiplyAlpha),
        j.pixelStorei(3317, I.unpackAlignment);
      const Ce = j.getParameter(3314),
        Ve = j.getParameter(32878),
        $n = j.getParameter(3316),
        yi = j.getParameter(3315),
        Mi = j.getParameter(32877),
        on = G.isCompressedTexture ? G.mipmaps[0] : G.image;
      j.pixelStorei(3314, on.width),
        j.pixelStorei(32878, on.height),
        j.pixelStorei(3316, T.min.x),
        j.pixelStorei(3315, T.min.y),
        j.pixelStorei(32877, T.min.z),
        G.isDataTexture || G.isData3DTexture
          ? j.texSubImage3D(Ee, q, F.x, F.y, F.z, fe, ge, Me, ve, Re, on.data)
          : G.isCompressedTexture
          ? (console.warn(
              "THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."
            ),
            j.compressedTexSubImage3D(
              Ee,
              q,
              F.x,
              F.y,
              F.z,
              fe,
              ge,
              Me,
              ve,
              on.data
            ))
          : j.texSubImage3D(Ee, q, F.x, F.y, F.z, fe, ge, Me, ve, Re, on),
        j.pixelStorei(3314, Ce),
        j.pixelStorei(32878, Ve),
        j.pixelStorei(3316, $n),
        j.pixelStorei(3315, yi),
        j.pixelStorei(32877, Mi),
        q === 0 && I.generateMipmaps && j.generateMipmap(Ee),
        le.unbindTexture();
    }),
    (this.initTexture = function (T) {
      T.isCubeTexture
        ? pe.setTextureCube(T, 0)
        : T.isData3DTexture
        ? pe.setTexture3D(T, 0)
        : T.isDataArrayTexture
        ? pe.setTexture2DArray(T, 0)
        : pe.setTexture2D(T, 0),
        le.unbindTexture();
    }),
    (this.resetState = function () {
      (_ = 0), (v = 0), (S = null), le.reset(), he.reset();
    }),
    typeof __THREE_DEVTOOLS__ < "u" &&
      __THREE_DEVTOOLS__.dispatchEvent(
        new CustomEvent("observe", { detail: this })
      );
}
class Wg extends Uc {}
Wg.prototype.isWebGL1Renderer = !0;
class qg extends pt {
  constructor() {
    super(),
      (this.isScene = !0),
      (this.type = "Scene"),
      (this.background = null),
      (this.environment = null),
      (this.fog = null),
      (this.overrideMaterial = null),
      typeof __THREE_DEVTOOLS__ < "u" &&
        __THREE_DEVTOOLS__.dispatchEvent(
          new CustomEvent("observe", { detail: this })
        );
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      e.background !== null && (this.background = e.background.clone()),
      e.environment !== null && (this.environment = e.environment.clone()),
      e.fog !== null && (this.fog = e.fog.clone()),
      e.overrideMaterial !== null &&
        (this.overrideMaterial = e.overrideMaterial.clone()),
      (this.matrixAutoUpdate = e.matrixAutoUpdate),
      this
    );
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return this.fog !== null && (t.object.fog = this.fog.toJSON()), t;
  }
  get autoUpdate() {
    return (
      console.warn(
        "THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."
      ),
      this.matrixWorldAutoUpdate
    );
  }
  set autoUpdate(e) {
    console.warn(
      "THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."
    ),
      (this.matrixWorldAutoUpdate = e);
  }
}
class Nc extends lr {
  constructor(e) {
    super(),
      (this.isLineBasicMaterial = !0),
      (this.type = "LineBasicMaterial"),
      (this.color = new De(16777215)),
      (this.linewidth = 1),
      (this.linecap = "round"),
      (this.linejoin = "round"),
      (this.fog = !0),
      this.setValues(e);
  }
  copy(e) {
    return (
      super.copy(e),
      this.color.copy(e.color),
      (this.linewidth = e.linewidth),
      (this.linecap = e.linecap),
      (this.linejoin = e.linejoin),
      (this.fog = e.fog),
      this
    );
  }
}
const Bl = new R(),
  kl = new R(),
  Vl = new Qe(),
  ya = new io(),
  hs = new Ur();
class Xg extends pt {
  constructor(e = new $t(), t = new Nc()) {
    super(),
      (this.isLine = !0),
      (this.type = "Line"),
      (this.geometry = e),
      (this.material = t),
      this.updateMorphTargets();
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      (this.material = e.material),
      (this.geometry = e.geometry),
      this
    );
  }
  computeLineDistances() {
    const e = this.geometry;
    if (e.index === null) {
      const t = e.attributes.position,
        n = [0];
      for (let i = 1, r = t.count; i < r; i++)
        Bl.fromBufferAttribute(t, i - 1),
          kl.fromBufferAttribute(t, i),
          (n[i] = n[i - 1]),
          (n[i] += Bl.distanceTo(kl));
      e.setAttribute("lineDistance", new mt(n, 1));
    } else
      console.warn(
        "THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry."
      );
    return this;
  }
  raycast(e, t) {
    const n = this.geometry,
      i = this.matrixWorld,
      r = e.params.Line.threshold,
      a = n.drawRange;
    if (
      (n.boundingSphere === null && n.computeBoundingSphere(),
      hs.copy(n.boundingSphere),
      hs.applyMatrix4(i),
      (hs.radius += r),
      e.ray.intersectsSphere(hs) === !1)
    )
      return;
    Vl.copy(i).invert(), ya.copy(e.ray).applyMatrix4(Vl);
    const s = r / ((this.scale.x + this.scale.y + this.scale.z) / 3),
      c = s * s,
      l = new R(),
      u = new R(),
      h = new R(),
      f = new R(),
      m = this.isLineSegments ? 2 : 1,
      g = n.index,
      p = n.attributes.position;
    if (g !== null) {
      const _ = Math.max(0, a.start),
        v = Math.min(g.count, a.start + a.count);
      for (let S = _, M = v - 1; S < M; S += m) {
        const y = g.getX(S),
          E = g.getX(S + 1);
        if (
          (l.fromBufferAttribute(p, y),
          u.fromBufferAttribute(p, E),
          ya.distanceSqToSegment(l, u, f, h) > c)
        )
          continue;
        f.applyMatrix4(this.matrixWorld);
        const x = e.ray.origin.distanceTo(f);
        x < e.near ||
          x > e.far ||
          t.push({
            distance: x,
            point: h.clone().applyMatrix4(this.matrixWorld),
            index: S,
            face: null,
            faceIndex: null,
            object: this,
          });
      }
    } else {
      const _ = Math.max(0, a.start),
        v = Math.min(p.count, a.start + a.count);
      for (let S = _, M = v - 1; S < M; S += m) {
        if (
          (l.fromBufferAttribute(p, S),
          u.fromBufferAttribute(p, S + 1),
          ya.distanceSqToSegment(l, u, f, h) > c)
        )
          continue;
        f.applyMatrix4(this.matrixWorld);
        const E = e.ray.origin.distanceTo(f);
        E < e.near ||
          E > e.far ||
          t.push({
            distance: E,
            point: h.clone().applyMatrix4(this.matrixWorld),
            index: S,
            face: null,
            faceIndex: null,
            object: this,
          });
      }
    }
  }
  updateMorphTargets() {
    const t = this.geometry.morphAttributes,
      n = Object.keys(t);
    if (n.length > 0) {
      const i = t[n[0]];
      if (i !== void 0) {
        (this.morphTargetInfluences = []), (this.morphTargetDictionary = {});
        for (let r = 0, a = i.length; r < a; r++) {
          const s = i[r].name || String(r);
          this.morphTargetInfluences.push(0),
            (this.morphTargetDictionary[s] = r);
        }
      }
    }
  }
}
const Gl = new R(),
  Hl = new R();
class Yg extends Xg {
  constructor(e, t) {
    super(e, t), (this.isLineSegments = !0), (this.type = "LineSegments");
  }
  computeLineDistances() {
    const e = this.geometry;
    if (e.index === null) {
      const t = e.attributes.position,
        n = [];
      for (let i = 0, r = t.count; i < r; i += 2)
        Gl.fromBufferAttribute(t, i),
          Hl.fromBufferAttribute(t, i + 1),
          (n[i] = i === 0 ? 0 : n[i - 1]),
          (n[i + 1] = n[i] + Gl.distanceTo(Hl));
      e.setAttribute("lineDistance", new mt(n, 1));
    } else
      console.warn(
        "THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry."
      );
    return this;
  }
}
class jg extends lr {
  constructor(e) {
    super(),
      (this.isPointsMaterial = !0),
      (this.type = "PointsMaterial"),
      (this.color = new De(16777215)),
      (this.map = null),
      (this.alphaMap = null),
      (this.size = 1),
      (this.sizeAttenuation = !0),
      (this.fog = !0),
      this.setValues(e);
  }
  copy(e) {
    return (
      super.copy(e),
      this.color.copy(e.color),
      (this.map = e.map),
      (this.alphaMap = e.alphaMap),
      (this.size = e.size),
      (this.sizeAttenuation = e.sizeAttenuation),
      (this.fog = e.fog),
      this
    );
  }
}
const Wl = new Qe(),
  ka = new io(),
  fs = new Ur(),
  ds = new R();
class Zg extends pt {
  constructor(e = new $t(), t = new jg()) {
    super(),
      (this.isPoints = !0),
      (this.type = "Points"),
      (this.geometry = e),
      (this.material = t),
      this.updateMorphTargets();
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      (this.material = e.material),
      (this.geometry = e.geometry),
      this
    );
  }
  raycast(e, t) {
    const n = this.geometry,
      i = this.matrixWorld,
      r = e.params.Points.threshold,
      a = n.drawRange;
    if (
      (n.boundingSphere === null && n.computeBoundingSphere(),
      fs.copy(n.boundingSphere),
      fs.applyMatrix4(i),
      (fs.radius += r),
      e.ray.intersectsSphere(fs) === !1)
    )
      return;
    Wl.copy(i).invert(), ka.copy(e.ray).applyMatrix4(Wl);
    const s = r / ((this.scale.x + this.scale.y + this.scale.z) / 3),
      c = s * s,
      l = n.index,
      h = n.attributes.position;
    if (l !== null) {
      const f = Math.max(0, a.start),
        m = Math.min(l.count, a.start + a.count);
      for (let g = f, d = m; g < d; g++) {
        const p = l.getX(g);
        ds.fromBufferAttribute(h, p), ql(ds, p, c, i, e, t, this);
      }
    } else {
      const f = Math.max(0, a.start),
        m = Math.min(h.count, a.start + a.count);
      for (let g = f, d = m; g < d; g++)
        ds.fromBufferAttribute(h, g), ql(ds, g, c, i, e, t, this);
    }
  }
  updateMorphTargets() {
    const t = this.geometry.morphAttributes,
      n = Object.keys(t);
    if (n.length > 0) {
      const i = t[n[0]];
      if (i !== void 0) {
        (this.morphTargetInfluences = []), (this.morphTargetDictionary = {});
        for (let r = 0, a = i.length; r < a; r++) {
          const s = i[r].name || String(r);
          this.morphTargetInfluences.push(0),
            (this.morphTargetDictionary[s] = r);
        }
      }
    }
  }
}
function ql(o, e, t, n, i, r, a) {
  const s = ka.distanceSqToPoint(o);
  if (s < t) {
    const c = new R();
    ka.closestPointToPoint(o, c), c.applyMatrix4(n);
    const l = i.ray.origin.distanceTo(c);
    if (l < i.near || l > i.far) return;
    r.push({
      distance: l,
      distanceToRay: Math.sqrt(s),
      point: c,
      index: e,
      face: null,
      object: a,
    });
  }
}
const Xl = {
  enabled: !1,
  files: {},
  add: function (o, e) {
    this.enabled !== !1 && (this.files[o] = e);
  },
  get: function (o) {
    if (this.enabled !== !1) return this.files[o];
  },
  remove: function (o) {
    delete this.files[o];
  },
  clear: function () {
    this.files = {};
  },
};
class $g {
  constructor(e, t, n) {
    const i = this;
    let r = !1,
      a = 0,
      s = 0,
      c;
    const l = [];
    (this.onStart = void 0),
      (this.onLoad = e),
      (this.onProgress = t),
      (this.onError = n),
      (this.itemStart = function (u) {
        s++, r === !1 && i.onStart !== void 0 && i.onStart(u, a, s), (r = !0);
      }),
      (this.itemEnd = function (u) {
        a++,
          i.onProgress !== void 0 && i.onProgress(u, a, s),
          a === s && ((r = !1), i.onLoad !== void 0 && i.onLoad());
      }),
      (this.itemError = function (u) {
        i.onError !== void 0 && i.onError(u);
      }),
      (this.resolveURL = function (u) {
        return c ? c(u) : u;
      }),
      (this.setURLModifier = function (u) {
        return (c = u), this;
      }),
      (this.addHandler = function (u, h) {
        return l.push(u, h), this;
      }),
      (this.removeHandler = function (u) {
        const h = l.indexOf(u);
        return h !== -1 && l.splice(h, 2), this;
      }),
      (this.getHandler = function (u) {
        for (let h = 0, f = l.length; h < f; h += 2) {
          const m = l[h],
            g = l[h + 1];
          if ((m.global && (m.lastIndex = 0), m.test(u))) return g;
        }
        return null;
      });
  }
}
const Kg = new $g();
class Bc {
  constructor(e) {
    (this.manager = e !== void 0 ? e : Kg),
      (this.crossOrigin = "anonymous"),
      (this.withCredentials = !1),
      (this.path = ""),
      (this.resourcePath = ""),
      (this.requestHeader = {});
  }
  load() {}
  loadAsync(e, t) {
    const n = this;
    return new Promise(function (i, r) {
      n.load(e, i, t, r);
    });
  }
  parse() {}
  setCrossOrigin(e) {
    return (this.crossOrigin = e), this;
  }
  setWithCredentials(e) {
    return (this.withCredentials = e), this;
  }
  setPath(e) {
    return (this.path = e), this;
  }
  setResourcePath(e) {
    return (this.resourcePath = e), this;
  }
  setRequestHeader(e) {
    return (this.requestHeader = e), this;
  }
}
class Jg extends Bc {
  constructor(e) {
    super(e);
  }
  load(e, t, n, i) {
    this.path !== void 0 && (e = this.path + e),
      (e = this.manager.resolveURL(e));
    const r = this,
      a = Xl.get(e);
    if (a !== void 0)
      return (
        r.manager.itemStart(e),
        setTimeout(function () {
          t && t(a), r.manager.itemEnd(e);
        }, 0),
        a
      );
    const s = Er("img");
    function c() {
      u(), Xl.add(e, this), t && t(this), r.manager.itemEnd(e);
    }
    function l(h) {
      u(), i && i(h), r.manager.itemError(e), r.manager.itemEnd(e);
    }
    function u() {
      s.removeEventListener("load", c, !1),
        s.removeEventListener("error", l, !1);
    }
    return (
      s.addEventListener("load", c, !1),
      s.addEventListener("error", l, !1),
      e.slice(0, 5) !== "data:" &&
        this.crossOrigin !== void 0 &&
        (s.crossOrigin = this.crossOrigin),
      r.manager.itemStart(e),
      (s.src = e),
      s
    );
  }
}
class Qg extends Bc {
  constructor(e) {
    super(e);
  }
  load(e, t, n, i) {
    const r = new jt(),
      a = new Jg(this.manager);
    return (
      a.setCrossOrigin(this.crossOrigin),
      a.setPath(this.path),
      a.load(
        e,
        function (s) {
          (r.image = s), (r.needsUpdate = !0), t !== void 0 && t(r);
        },
        n,
        i
      ),
      r
    );
  }
}
class kc {
  constructor(e = !0) {
    (this.autoStart = e),
      (this.startTime = 0),
      (this.oldTime = 0),
      (this.elapsedTime = 0),
      (this.running = !1);
  }
  start() {
    (this.startTime = Yl()),
      (this.oldTime = this.startTime),
      (this.elapsedTime = 0),
      (this.running = !0);
  }
  stop() {
    this.getElapsedTime(), (this.running = !1), (this.autoStart = !1);
  }
  getElapsedTime() {
    return this.getDelta(), this.elapsedTime;
  }
  getDelta() {
    let e = 0;
    if (this.autoStart && !this.running) return this.start(), 0;
    if (this.running) {
      const t = Yl();
      (e = (t - this.oldTime) / 1e3),
        (this.oldTime = t),
        (this.elapsedTime += e);
    }
    return e;
  }
}
function Yl() {
  return (typeof performance > "u" ? Date : performance).now();
}
class e_ extends Yg {
  constructor(e = 1) {
    const t = [0, 0, 0, e, 0, 0, 0, 0, 0, 0, e, 0, 0, 0, 0, 0, 0, e],
      n = [1, 0, 0, 1, 0.6, 0, 0, 1, 0, 0.6, 1, 0, 0, 0, 1, 0, 0.6, 1],
      i = new $t();
    i.setAttribute("position", new mt(t, 3)),
      i.setAttribute("color", new mt(n, 3));
    const r = new Nc({ vertexColors: !0, toneMapped: !1 });
    super(i, r), (this.type = "AxesHelper");
  }
  setColors(e, t, n) {
    const i = new De(),
      r = this.geometry.attributes.color.array;
    return (
      i.set(e),
      i.toArray(r, 0),
      i.toArray(r, 3),
      i.set(t),
      i.toArray(r, 6),
      i.toArray(r, 9),
      i.set(n),
      i.toArray(r, 12),
      i.toArray(r, 15),
      (this.geometry.attributes.color.needsUpdate = !0),
      this
    );
  }
  dispose() {
    this.geometry.dispose(), this.material.dispose();
  }
}
typeof __THREE_DEVTOOLS__ < "u" &&
  __THREE_DEVTOOLS__.dispatchEvent(
    new CustomEvent("register", { detail: { revision: no } })
  );
typeof window < "u" &&
  (window.__THREE__
    ? console.warn("WARNING: Multiple instances of Three.js being imported.")
    : (window.__THREE__ = no));
var t_ = `uniform float uTime;\r
varying vec2 vUv;\r
varying vec3 vPosition;\r

uniform float distortion;

float PI = 3.1415926535897932384626433832795;\r

vec3 mod289(vec3 x)\r
{\r
  return x - floor(x * (1.0 / 289.0)) * 289.0;\r
}

vec4 mod289(vec4 x)\r
{\r
  return x - floor(x * (1.0 / 289.0)) * 289.0;\r
}

vec4 permute(vec4 x)\r
{\r
  return mod289(((x*34.0)+10.0)*x);\r
}

vec4 taylorInvSqrt(vec4 r)\r
{\r
  return 1.79284291400159 - 0.85373472095314 * r;\r
}

vec3 fade(vec3 t) {\r
  return t*t*t*(t*(t*6.0-15.0)+10.0);\r
}

float cnoise(vec3 P)\r
{\r
  vec3 Pi0 = floor(P); 
  vec3 Pi1 = Pi0 + vec3(1.0); 
  Pi0 = mod289(Pi0);\r
  Pi1 = mod289(Pi1);\r
  vec3 Pf0 = fract(P); 
  vec3 Pf1 = Pf0 - vec3(1.0); 
  vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);\r
  vec4 iy = vec4(Pi0.yy, Pi1.yy);\r
  vec4 iz0 = Pi0.zzzz;\r
  vec4 iz1 = Pi1.zzzz;

  vec4 ixy = permute(permute(ix) + iy);\r
  vec4 ixy0 = permute(ixy + iz0);\r
  vec4 ixy1 = permute(ixy + iz1);

  vec4 gx0 = ixy0 * (1.0 / 7.0);\r
  vec4 gy0 = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;\r
  gx0 = fract(gx0);\r
  vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);\r
  vec4 sz0 = step(gz0, vec4(0.0));\r
  gx0 -= sz0 * (step(0.0, gx0) - 0.5);\r
  gy0 -= sz0 * (step(0.0, gy0) - 0.5);

  vec4 gx1 = ixy1 * (1.0 / 7.0);\r
  vec4 gy1 = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;\r
  gx1 = fract(gx1);\r
  vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);\r
  vec4 sz1 = step(gz1, vec4(0.0));\r
  gx1 -= sz1 * (step(0.0, gx1) - 0.5);\r
  gy1 -= sz1 * (step(0.0, gy1) - 0.5);

  vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);\r
  vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);\r
  vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);\r
  vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);\r
  vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);\r
  vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);\r
  vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);\r
  vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);

  vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));\r
  g000 *= norm0.x;\r
  g010 *= norm0.y;\r
  g100 *= norm0.z;\r
  g110 *= norm0.w;\r
  vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));\r
  g001 *= norm1.x;\r
  g011 *= norm1.y;\r
  g101 *= norm1.z;\r
  g111 *= norm1.w;

  float n000 = dot(g000, Pf0);\r
  float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));\r
  float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));\r
  float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));\r
  float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));\r
  float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));\r
  float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));\r
  float n111 = dot(g111, Pf1);

  vec3 fade_xyz = fade(Pf0);\r
  vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);\r
  vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);\r
  float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x); \r
  return 2.2 * n_xyz;\r
}

float pnoise(vec3 P, vec3 rep)\r
{\r
  vec3 Pi0 = mod(floor(P), rep); 
  vec3 Pi1 = mod(Pi0 + vec3(1.0), rep); 
  Pi0 = mod289(Pi0);\r
  Pi1 = mod289(Pi1);\r
  vec3 Pf0 = fract(P); 
  vec3 Pf1 = Pf0 - vec3(1.0); 
  vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);\r
  vec4 iy = vec4(Pi0.yy, Pi1.yy);\r
  vec4 iz0 = Pi0.zzzz;\r
  vec4 iz1 = Pi1.zzzz;

  vec4 ixy = permute(permute(ix) + iy);\r
  vec4 ixy0 = permute(ixy + iz0);\r
  vec4 ixy1 = permute(ixy + iz1);

  vec4 gx0 = ixy0 * (1.0 / 7.0);\r
  vec4 gy0 = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;\r
  gx0 = fract(gx0);\r
  vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);\r
  vec4 sz0 = step(gz0, vec4(0.0));\r
  gx0 -= sz0 * (step(0.0, gx0) - 0.5);\r
  gy0 -= sz0 * (step(0.0, gy0) - 0.5);

  vec4 gx1 = ixy1 * (1.0 / 7.0);\r
  vec4 gy1 = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;\r
  gx1 = fract(gx1);\r
  vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);\r
  vec4 sz1 = step(gz1, vec4(0.0));\r
  gx1 -= sz1 * (step(0.0, gx1) - 0.5);\r
  gy1 -= sz1 * (step(0.0, gy1) - 0.5);

  vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);\r
  vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);\r
  vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);\r
  vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);\r
  vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);\r
  vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);\r
  vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);\r
  vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);

  vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));\r
  g000 *= norm0.x;\r
  g010 *= norm0.y;\r
  g100 *= norm0.z;\r
  g110 *= norm0.w;\r
  vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));\r
  g001 *= norm1.x;\r
  g011 *= norm1.y;\r
  g101 *= norm1.z;\r
  g111 *= norm1.w;

  float n000 = dot(g000, Pf0);\r
  float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));\r
  float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));\r
  float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));\r
  float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));\r
  float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));\r
  float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));\r
  float n111 = dot(g111, Pf1);

  vec3 fade_xyz = fade(Pf0);\r
  vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);\r
  vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);\r
  float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x); \r
  return 2.2 * n_xyz;\r
}\r

mat3 rotation3dY(float angle) {\r
  float s = sin(angle);\r
  float c = cos(angle);

  return mat3(\r
    c, 0.0, -s,\r
    0.0, 1.0, 0.0,\r
    s, 0.0, c\r
  );\r
}

float saturate(float x)\r
{\r
  return clamp(x, 0.0, 1.0);\r
}

vec3 curl_noise(vec3 p)\r
{

  
  const float step = 0.01;\r
  float ddx = cnoise(p+vec3(step, 0.0, 0.0)) - cnoise(p-vec3(step, 0.0, 0.0));\r
  float ddy = cnoise(p+vec3(0.0, step, 0.0)) - cnoise(p-vec3(0.0, step, 0.0));\r
  float ddz = cnoise(p+vec3(0.0, 0.0, step)) - cnoise(p-vec3(0.0, 0.0, step));

  const float divisor = 1.0 / ( 2.0 * step );\r
  return ( vec3(ddy - ddz, ddz - ddx, ddx - ddy) * divisor );\r
}

vec3 fbm_vec3(vec3 p, float frequency, float offset)\r
{\r
  return vec3(\r
    cnoise((p+vec3(offset))*frequency),\r
    cnoise((p+vec3(offset+20.0))*frequency),\r
    cnoise((p+vec3(offset-30.0))*frequency)\r
  );\r
}\r

void main(){

  vUv = uv;\r
  float time = uTime *0.2;

  vec3 distortion1 = vec3(position.x * 2., position.y , 1.) * curl_noise( \r
    vec3(\r
      position.x*0.002 + time*0.1, \r
      position.y*0.008 + time*0.1, \r
      (position.x + position.y) * 0.02\r
    ) \r
  ) * distortion;

  vec3 finalPosition = position + distortion1;\r
 \r
  vec4 mvPosition = modelViewMatrix * vec4( finalPosition, 1.0 );\r

  gl_PointSize = 1.5 ;\r
  gl_Position = projectionMatrix * mvPosition;\r
 \r
}`,
  n_ = `uniform float uTime;\r
uniform float progress;\r
uniform vec4 resolution;

uniform float t0_b;\r
uniform float t1_b;\r
uniform float t2_b;\r
uniform float t3_b;\r
uniform float t4_b;\r
uniform float t5_b;

uniform sampler2D t0;\r
uniform sampler2D t1;\r
uniform sampler2D t2;\r
uniform sampler2D t3;\r
uniform sampler2D t4;\r
uniform sampler2D t5;

varying vec2 vUv;\r
varying vec3 vPosition;

float PI = 3.1415926535897932384626433832795;

void main(){\r
  \r
  
  
  
  
  
  
  \r
  vec4 tt0 = texture2D(t0, vUv) * vec4(t0_b);\r
  vec4 tt1 = texture2D(t1, vUv) * vec4(t1_b);\r
  vec4 tt2 = texture2D(t2, vUv) * vec4(t2_b);\r
  vec4 tt3 = texture2D(t3, vUv) * vec4(t3_b);\r
  vec4 tt4 = texture2D(t4, vUv) * vec4(t4_b);\r
  vec4 tt5 = texture2D(t5, vUv) * vec4(t5_b);\r

  
  
  
  
  
  
  \r
  gl_FragColor = tt0 + tt1 + tt2 + tt3 + tt4 + tt5;\r
  \r
  \r

  if(gl_FragColor.r < .1 && gl_FragColor.g < .1 && gl_FragColor.b < .1) discard;\r
  \r
}`;
function bn(o) {
  if (o === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return o;
}
function Vc(o, e) {
  (o.prototype = Object.create(e.prototype)),
    (o.prototype.constructor = o),
    (o.__proto__ = e);
}
/*!
 * GSAP 3.11.1
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */ var Rt = {
    autoSleep: 120,
    force3D: "auto",
    nullTargetWarn: 1,
    units: { lineHeight: "" },
  },
  Ji = { duration: 0.5, overwrite: !1, delay: 0 },
  oo,
  Yt,
  $e,
  Ht = 1e8,
  Oe = 1 / Ht,
  Va = Math.PI * 2,
  i_ = Va / 4,
  r_ = 0,
  Gc = Math.sqrt,
  s_ = Math.cos,
  a_ = Math.sin,
  nt = function (e) {
    return typeof e == "string";
  },
  We = function (e) {
    return typeof e == "function";
  },
  Pn = function (e) {
    return typeof e == "number";
  },
  lo = function (e) {
    return typeof e > "u";
  },
  dn = function (e) {
    return typeof e == "object";
  },
  Mt = function (e) {
    return e !== !1;
  },
  Hc = function () {
    return typeof window < "u";
  },
  ps = function (e) {
    return We(e) || nt(e);
  },
  Wc =
    (typeof ArrayBuffer == "function" && ArrayBuffer.isView) || function () {},
  ut = Array.isArray,
  Ga = /(?:-?\.?\d|\.)+/gi,
  qc = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
  ki = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
  Ma = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
  Xc = /[+-]=-?[.\d]+/,
  Yc = /[^,'"\[\]\s]+/gi,
  o_ = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
  Be,
  Bt,
  Ha,
  co,
  It = {},
  ys = {},
  jc,
  Zc = function (e) {
    return (ys = xi(e, It)) && zt;
  },
  uo = function (e, t) {
    return console.warn(
      "Invalid property",
      e,
      "set to",
      t,
      "Missing plugin? gsap.registerPlugin()"
    );
  },
  Ms = function (e, t) {
    return !t && console.warn(e);
  },
  $c = function (e, t) {
    return (e && (It[e] = t) && ys && (ys[e] = t)) || It;
  },
  Cr = function () {
    return 0;
  },
  l_ = { suppressEvents: !0, isStart: !0 },
  Mr = { suppressEvents: !0 },
  ho = {},
  Xn = [],
  Wa = {},
  Kc,
  Pt = {},
  Sa = {},
  jl = 30,
  _s = [],
  fo = "",
  po = function (e) {
    var t = e[0],
      n,
      i;
    if ((dn(t) || We(t) || (e = [e]), !(n = (t._gsap || {}).harness))) {
      for (i = _s.length; i-- && !_s[i].targetTest(t); );
      n = _s[i];
    }
    for (i = e.length; i--; )
      (e[i] && (e[i]._gsap || (e[i]._gsap = new vu(e[i], n)))) ||
        e.splice(i, 1);
    return e;
  },
  di = function (e) {
    return e._gsap || po(Wt(e))[0]._gsap;
  },
  Jc = function (e, t, n) {
    return (n = e[t]) && We(n)
      ? e[t]()
      : (lo(n) && e.getAttribute && e.getAttribute(t)) || n;
  },
  St = function (e, t) {
    return (e = e.split(",")).forEach(t) || e;
  },
  Ye = function (e) {
    return Math.round(e * 1e5) / 1e5 || 0;
  },
  st = function (e) {
    return Math.round(e * 1e7) / 1e7 || 0;
  },
  Wi = function (e, t) {
    var n = t.charAt(0),
      i = parseFloat(t.substr(2));
    return (
      (e = parseFloat(e)),
      n === "+" ? e + i : n === "-" ? e - i : n === "*" ? e * i : e / i
    );
  },
  c_ = function (e, t) {
    for (var n = t.length, i = 0; e.indexOf(t[i]) < 0 && ++i < n; );
    return i < n;
  },
  Ss = function () {
    var e = Xn.length,
      t = Xn.slice(0),
      n,
      i;
    for (Wa = {}, Xn.length = 0, n = 0; n < e; n++)
      (i = t[n]),
        i && i._lazy && (i.render(i._lazy[0], i._lazy[1], !0)._lazy = 0);
  },
  Qc = function (e, t, n, i) {
    Xn.length && Ss(), e.render(t, n, i || Yt), Xn.length && Ss();
  },
  eu = function (e) {
    var t = parseFloat(e);
    return (t || t === 0) && (e + "").match(Yc).length < 2
      ? t
      : nt(e)
      ? e.trim()
      : e;
  },
  tu = function (e) {
    return e;
  },
  Zt = function (e, t) {
    for (var n in t) n in e || (e[n] = t[n]);
    return e;
  },
  u_ = function (e) {
    return function (t, n) {
      for (var i in n)
        i in t || (i === "duration" && e) || i === "ease" || (t[i] = n[i]);
    };
  },
  xi = function (e, t) {
    for (var n in t) e[n] = t[n];
    return e;
  },
  Zl = function o(e, t) {
    for (var n in t)
      n !== "__proto__" &&
        n !== "constructor" &&
        n !== "prototype" &&
        (e[n] = dn(t[n]) ? o(e[n] || (e[n] = {}), t[n]) : t[n]);
    return e;
  },
  bs = function (e, t) {
    var n = {},
      i;
    for (i in e) i in t || (n[i] = e[i]);
    return n;
  },
  Sr = function (e) {
    var t = e.parent || Be,
      n = e.keyframes ? u_(ut(e.keyframes)) : Zt;
    if (Mt(e.inherit))
      for (; t; ) n(e, t.vars.defaults), (t = t.parent || t._dp);
    return e;
  },
  h_ = function (e, t) {
    for (var n = e.length, i = n === t.length; i && n-- && e[n] === t[n]; );
    return n < 0;
  },
  nu = function (e, t, n, i, r) {
    n === void 0 && (n = "_first"), i === void 0 && (i = "_last");
    var a = e[i],
      s;
    if (r) for (s = t[r]; a && a[r] > s; ) a = a._prev;
    return (
      a ? ((t._next = a._next), (a._next = t)) : ((t._next = e[n]), (e[n] = t)),
      t._next ? (t._next._prev = t) : (e[i] = t),
      (t._prev = a),
      (t.parent = t._dp = e),
      t
    );
  },
  zs = function (e, t, n, i) {
    n === void 0 && (n = "_first"), i === void 0 && (i = "_last");
    var r = t._prev,
      a = t._next;
    r ? (r._next = a) : e[n] === t && (e[n] = a),
      a ? (a._prev = r) : e[i] === t && (e[i] = r),
      (t._next = t._prev = t.parent = null);
  },
  Ln = function (e, t) {
    e.parent && (!t || e.parent.autoRemoveChildren) && e.parent.remove(e),
      (e._act = 0);
  },
  pi = function (e, t) {
    if (e && (!t || t._end > e._dur || t._start < 0))
      for (var n = e; n; ) (n._dirty = 1), (n = n.parent);
    return e;
  },
  f_ = function (e) {
    for (var t = e.parent; t && t.parent; )
      (t._dirty = 1), t.totalDuration(), (t = t.parent);
    return e;
  },
  qa = function (e, t, n, i) {
    return (
      e._startAt &&
      (Yt
        ? e._startAt.revert(Mr)
        : (e.vars.immediateRender && !e.vars.autoRevert) ||
          e._startAt.render(t, !0, i))
    );
  },
  d_ = function o(e) {
    return !e || (e._ts && o(e.parent));
  },
  $l = function (e) {
    return e._repeat ? Qi(e._tTime, (e = e.duration() + e._rDelay)) * e : 0;
  },
  Qi = function (e, t) {
    var n = Math.floor((e /= t));
    return e && n === e ? n - 1 : n;
  },
  ws = function (e, t) {
    return (
      (e - t._start) * t._ts +
      (t._ts >= 0 ? 0 : t._dirty ? t.totalDuration() : t._tDur)
    );
  },
  Fs = function (e) {
    return (e._end = st(
      e._start + (e._tDur / Math.abs(e._ts || e._rts || Oe) || 0)
    ));
  },
  Os = function (e, t) {
    var n = e._dp;
    return (
      n &&
        n.smoothChildTiming &&
        e._ts &&
        ((e._start = st(
          n._time -
            (e._ts > 0
              ? t / e._ts
              : ((e._dirty ? e.totalDuration() : e._tDur) - t) / -e._ts)
        )),
        Fs(e),
        n._dirty || pi(n, e)),
      e
    );
  },
  iu = function (e, t) {
    var n;
    if (
      ((t._time || (t._initted && !t._dur)) &&
        ((n = ws(e.rawTime(), t)),
        (!t._dur || kr(0, t.totalDuration(), n) - t._tTime > Oe) &&
          t.render(n, !0)),
      pi(e, t)._dp && e._initted && e._time >= e._dur && e._ts)
    ) {
      if (e._dur < e.duration())
        for (n = e; n._dp; )
          n.rawTime() >= 0 && n.totalTime(n._tTime), (n = n._dp);
      e._zTime = -Oe;
    }
  },
  cn = function (e, t, n, i) {
    return (
      t.parent && Ln(t),
      (t._start = st(
        (Pn(n) ? n : n || e !== Be ? Nt(e, n, t) : e._time) + t._delay
      )),
      (t._end = st(
        t._start + (t.totalDuration() / Math.abs(t.timeScale()) || 0)
      )),
      nu(e, t, "_first", "_last", e._sort ? "_start" : 0),
      Xa(t) || (e._recent = t),
      i || iu(e, t),
      e._ts < 0 && Os(e, e._tTime),
      e
    );
  },
  ru = function (e, t) {
    return (
      (It.ScrollTrigger || uo("scrollTrigger", t)) &&
      It.ScrollTrigger.create(t, e)
    );
  },
  su = function (e, t, n, i) {
    if ((go(e, t), !e._initted)) return 1;
    if (
      !n &&
      e._pt &&
      ((e._dur && e.vars.lazy !== !1) || (!e._dur && e.vars.lazy)) &&
      Kc !== Dt.frame
    )
      return Xn.push(e), (e._lazy = [t, i]), 1;
  },
  p_ = function o(e) {
    var t = e.parent;
    return t && t._ts && t._initted && !t._lock && (t.rawTime() < 0 || o(t));
  },
  Xa = function (e) {
    var t = e.data;
    return t === "isFromStart" || t === "isStart";
  },
  m_ = function (e, t, n, i) {
    var r = e.ratio,
      a =
        t < 0 ||
        (!t &&
          ((!e._start && p_(e) && !(!e._initted && Xa(e))) ||
            ((e._ts < 0 || e._dp._ts < 0) && !Xa(e))))
          ? 0
          : 1,
      s = e._rDelay,
      c = 0,
      l,
      u,
      h;
    if (
      (s &&
        e._repeat &&
        ((c = kr(0, e._tDur, t)),
        (u = Qi(c, s)),
        e._yoyo && u & 1 && (a = 1 - a),
        u !== Qi(e._tTime, s) &&
          ((r = 1 - a), e.vars.repeatRefresh && e._initted && e.invalidate())),
      a !== r || Yt || i || e._zTime === Oe || (!t && e._zTime))
    ) {
      if (!e._initted && su(e, t, i, n)) return;
      for (
        h = e._zTime,
          e._zTime = t || (n ? Oe : 0),
          n || (n = t && !h),
          e.ratio = a,
          e._from && (a = 1 - a),
          e._time = 0,
          e._tTime = c,
          l = e._pt;
        l;

      )
        l.r(a, l.d), (l = l._next);
      t < 0 && qa(e, t, n, !0),
        e._onUpdate && !n && qt(e, "onUpdate"),
        c && e._repeat && !n && e.parent && qt(e, "onRepeat"),
        (t >= e._tDur || t < 0) &&
          e.ratio === a &&
          (a && Ln(e, 1),
          !n &&
            !Yt &&
            (qt(e, a ? "onComplete" : "onReverseComplete", !0),
            e._prom && e._prom()));
    } else e._zTime || (e._zTime = t);
  },
  g_ = function (e, t, n) {
    var i;
    if (n > t)
      for (i = e._first; i && i._start <= n; ) {
        if (i.data === "isPause" && i._start > t) return i;
        i = i._next;
      }
    else
      for (i = e._last; i && i._start >= n; ) {
        if (i.data === "isPause" && i._start < t) return i;
        i = i._prev;
      }
  },
  er = function (e, t, n, i) {
    var r = e._repeat,
      a = st(t) || 0,
      s = e._tTime / e._tDur;
    return (
      s && !i && (e._time *= a / e._dur),
      (e._dur = a),
      (e._tDur = r ? (r < 0 ? 1e10 : st(a * (r + 1) + e._rDelay * r)) : a),
      s > 0 && !i ? Os(e, (e._tTime = e._tDur * s)) : e.parent && Fs(e),
      n || pi(e.parent, e),
      e
    );
  },
  Kl = function (e) {
    return e instanceof vt ? pi(e) : er(e, e._dur);
  },
  __ = { _start: 0, endTime: Cr, totalDuration: Cr },
  Nt = function o(e, t, n) {
    var i = e.labels,
      r = e._recent || __,
      a = e.duration() >= Ht ? r.endTime(!1) : e._dur,
      s,
      c,
      l;
    return nt(t) && (isNaN(t) || t in i)
      ? ((c = t.charAt(0)),
        (l = t.substr(-1) === "%"),
        (s = t.indexOf("=")),
        c === "<" || c === ">"
          ? (s >= 0 && (t = t.replace(/=/, "")),
            (c === "<" ? r._start : r.endTime(r._repeat >= 0)) +
              (parseFloat(t.substr(1)) || 0) *
                (l ? (s < 0 ? r : n).totalDuration() / 100 : 1))
          : s < 0
          ? (t in i || (i[t] = a), i[t])
          : ((c = parseFloat(t.charAt(s - 1) + t.substr(s + 1))),
            l && n && (c = (c / 100) * (ut(n) ? n[0] : n).totalDuration()),
            s > 1 ? o(e, t.substr(0, s - 1), n) + c : a + c))
      : t == null
      ? a
      : +t;
  },
  br = function (e, t, n) {
    var i = Pn(t[1]),
      r = (i ? 2 : 1) + (e < 2 ? 0 : 1),
      a = t[r],
      s,
      c;
    if ((i && (a.duration = t[1]), (a.parent = n), e)) {
      for (s = a, c = n; c && !("immediateRender" in s); )
        (s = c.vars.defaults || {}), (c = Mt(c.vars.inherit) && c.parent);
      (a.immediateRender = Mt(s.immediateRender)),
        e < 2 ? (a.runBackwards = 1) : (a.startAt = t[r - 1]);
    }
    return new Je(t[0], a, t[r + 1]);
  },
  Zn = function (e, t) {
    return e || e === 0 ? t(e) : t;
  },
  kr = function (e, t, n) {
    return n < e ? e : n > t ? t : n;
  },
  ct = function (e, t) {
    return !nt(e) || !(t = o_.exec(e)) ? "" : t[1];
  },
  x_ = function (e, t, n) {
    return Zn(n, function (i) {
      return kr(e, t, i);
    });
  },
  Ya = [].slice,
  au = function (e, t) {
    return (
      e &&
      dn(e) &&
      "length" in e &&
      ((!t && !e.length) || (e.length - 1 in e && dn(e[0]))) &&
      !e.nodeType &&
      e !== Bt
    );
  },
  v_ = function (e, t, n) {
    return (
      n === void 0 && (n = []),
      e.forEach(function (i) {
        var r;
        return (nt(i) && !t) || au(i, 1)
          ? (r = n).push.apply(r, Wt(i))
          : n.push(i);
      }) || n
    );
  },
  Wt = function (e, t, n) {
    return $e && !t && $e.selector
      ? $e.selector(e)
      : nt(e) && !n && (Ha || !tr())
      ? Ya.call((t || co).querySelectorAll(e), 0)
      : ut(e)
      ? v_(e, n)
      : au(e)
      ? Ya.call(e, 0)
      : e
      ? [e]
      : [];
  },
  ja = function (e) {
    return (
      (e = Wt(e)[0] || Ms("Invalid scope") || {}),
      function (t) {
        var n = e.current || e.nativeElement || e;
        return Wt(
          t,
          n.querySelectorAll
            ? n
            : n === e
            ? Ms("Invalid scope") || co.createElement("div")
            : e
        );
      }
    );
  },
  ou = function (e) {
    return e.sort(function () {
      return 0.5 - Math.random();
    });
  },
  lu = function (e) {
    if (We(e)) return e;
    var t = dn(e) ? e : { each: e },
      n = mi(t.ease),
      i = t.from || 0,
      r = parseFloat(t.base) || 0,
      a = {},
      s = i > 0 && i < 1,
      c = isNaN(i) || s,
      l = t.axis,
      u = i,
      h = i;
    return (
      nt(i)
        ? (u = h = { center: 0.5, edges: 0.5, end: 1 }[i] || 0)
        : !s && c && ((u = i[0]), (h = i[1])),
      function (f, m, g) {
        var d = (g || t).length,
          p = a[d],
          _,
          v,
          S,
          M,
          y,
          E,
          A,
          x,
          w;
        if (!p) {
          if (((w = t.grid === "auto" ? 0 : (t.grid || [1, Ht])[1]), !w)) {
            for (
              A = -Ht;
              A < (A = g[w++].getBoundingClientRect().left) && w < d;

            );
            w--;
          }
          for (
            p = a[d] = [],
              _ = c ? Math.min(w, d) * u - 0.5 : i % w,
              v = w === Ht ? 0 : c ? (d * h) / w - 0.5 : (i / w) | 0,
              A = 0,
              x = Ht,
              E = 0;
            E < d;
            E++
          )
            (S = (E % w) - _),
              (M = v - ((E / w) | 0)),
              (p[E] = y = l ? Math.abs(l === "y" ? M : S) : Gc(S * S + M * M)),
              y > A && (A = y),
              y < x && (x = y);
          i === "random" && ou(p),
            (p.max = A - x),
            (p.min = x),
            (p.v = d =
              (parseFloat(t.amount) ||
                parseFloat(t.each) *
                  (w > d
                    ? d - 1
                    : l
                    ? l === "y"
                      ? d / w
                      : w
                    : Math.max(w, d / w)) ||
                0) * (i === "edges" ? -1 : 1)),
            (p.b = d < 0 ? r - d : r),
            (p.u = ct(t.amount || t.each) || 0),
            (n = n && d < 0 ? gu(n) : n);
        }
        return (
          (d = (p[f] - p.min) / p.max || 0),
          st(p.b + (n ? n(d) : d) * p.v) + p.u
        );
      }
    );
  },
  Za = function (e) {
    var t = Math.pow(10, ((e + "").split(".")[1] || "").length);
    return function (n) {
      var i = st(Math.round(parseFloat(n) / e) * e * t);
      return (i - (i % 1)) / t + (Pn(n) ? 0 : ct(n));
    };
  },
  cu = function (e, t) {
    var n = ut(e),
      i,
      r;
    return (
      !n &&
        dn(e) &&
        ((i = n = e.radius || Ht),
        e.values
          ? ((e = Wt(e.values)), (r = !Pn(e[0])) && (i *= i))
          : (e = Za(e.increment))),
      Zn(
        t,
        n
          ? We(e)
            ? function (a) {
                return (r = e(a)), Math.abs(r - a) <= i ? r : a;
              }
            : function (a) {
                for (
                  var s = parseFloat(r ? a.x : a),
                    c = parseFloat(r ? a.y : 0),
                    l = Ht,
                    u = 0,
                    h = e.length,
                    f,
                    m;
                  h--;

                )
                  r
                    ? ((f = e[h].x - s), (m = e[h].y - c), (f = f * f + m * m))
                    : (f = Math.abs(e[h] - s)),
                    f < l && ((l = f), (u = h));
                return (
                  (u = !i || l <= i ? e[u] : a),
                  r || u === a || Pn(a) ? u : u + ct(a)
                );
              }
          : Za(e)
      )
    );
  },
  uu = function (e, t, n, i) {
    return Zn(ut(e) ? !t : n === !0 ? !!(n = 0) : !i, function () {
      return ut(e)
        ? e[~~(Math.random() * e.length)]
        : (n = n || 1e-5) &&
            (i = n < 1 ? Math.pow(10, (n + "").length - 2) : 1) &&
            Math.floor(
              Math.round((e - n / 2 + Math.random() * (t - e + n * 0.99)) / n) *
                n *
                i
            ) / i;
    });
  },
  y_ = function () {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
      t[n] = arguments[n];
    return function (i) {
      return t.reduce(function (r, a) {
        return a(r);
      }, i);
    };
  },
  M_ = function (e, t) {
    return function (n) {
      return e(parseFloat(n)) + (t || ct(n));
    };
  },
  S_ = function (e, t, n) {
    return fu(e, t, 0, 1, n);
  },
  hu = function (e, t, n) {
    return Zn(n, function (i) {
      return e[~~t(i)];
    });
  },
  b_ = function o(e, t, n) {
    var i = t - e;
    return ut(e)
      ? hu(e, o(0, e.length), t)
      : Zn(n, function (r) {
          return ((i + ((r - e) % i)) % i) + e;
        });
  },
  w_ = function o(e, t, n) {
    var i = t - e,
      r = i * 2;
    return ut(e)
      ? hu(e, o(0, e.length - 1), t)
      : Zn(n, function (a) {
          return (a = (r + ((a - e) % r)) % r || 0), e + (a > i ? r - a : a);
        });
  },
  Ar = function (e) {
    for (var t = 0, n = "", i, r, a, s; ~(i = e.indexOf("random(", t)); )
      (a = e.indexOf(")", i)),
        (s = e.charAt(i + 7) === "["),
        (r = e.substr(i + 7, a - i - 7).match(s ? Yc : Ga)),
        (n +=
          e.substr(t, i - t) + uu(s ? r : +r[0], s ? 0 : +r[1], +r[2] || 1e-5)),
        (t = a + 1);
    return n + e.substr(t, e.length - t);
  },
  fu = function (e, t, n, i, r) {
    var a = t - e,
      s = i - n;
    return Zn(r, function (c) {
      return n + (((c - e) / a) * s || 0);
    });
  },
  T_ = function o(e, t, n, i) {
    var r = isNaN(e + t)
      ? 0
      : function (m) {
          return (1 - m) * e + m * t;
        };
    if (!r) {
      var a = nt(e),
        s = {},
        c,
        l,
        u,
        h,
        f;
      if ((n === !0 && (i = 1) && (n = null), a))
        (e = { p: e }), (t = { p: t });
      else if (ut(e) && !ut(t)) {
        for (u = [], h = e.length, f = h - 2, l = 1; l < h; l++)
          u.push(o(e[l - 1], e[l]));
        h--,
          (r = function (g) {
            g *= h;
            var d = Math.min(f, ~~g);
            return u[d](g - d);
          }),
          (n = t);
      } else i || (e = xi(ut(e) ? [] : {}, e));
      if (!u) {
        for (c in t) mo.call(s, e, c, "get", t[c]);
        r = function (g) {
          return vo(g, s) || (a ? e.p : e);
        };
      }
    }
    return Zn(n, r);
  },
  Jl = function (e, t, n) {
    var i = e.labels,
      r = Ht,
      a,
      s,
      c;
    for (a in i)
      (s = i[a] - t),
        s < 0 == !!n && s && r > (s = Math.abs(s)) && ((c = a), (r = s));
    return c;
  },
  qt = function (e, t, n) {
    var i = e.vars,
      r = i[t],
      a = $e,
      s = e._ctx,
      c,
      l,
      u;
    if (!!r)
      return (
        (c = i[t + "Params"]),
        (l = i.callbackScope || e),
        n && Xn.length && Ss(),
        s && ($e = s),
        (u = c ? r.apply(l, c) : r.call(l)),
        ($e = a),
        u
      );
  },
  xr = function (e) {
    return (
      Ln(e),
      e.scrollTrigger && e.scrollTrigger.kill(!1),
      e.progress() < 1 && qt(e, "onInterrupt"),
      e
    );
  },
  Vi,
  E_ = function (e) {
    e = (!e.name && e.default) || e;
    var t = e.name,
      n = We(e),
      i =
        t && !n && e.init
          ? function () {
              this._props = [];
            }
          : e,
      r = { init: Cr, render: vo, add: mo, kill: G_, modifier: V_, rawVars: 0 },
      a = { targetTest: 0, get: 0, getSetter: xo, aliases: {}, register: 0 };
    if ((tr(), e !== i)) {
      if (Pt[t]) return;
      Zt(i, Zt(bs(e, r), a)),
        xi(i.prototype, xi(r, bs(e, a))),
        (Pt[(i.prop = t)] = i),
        e.targetTest && (_s.push(i), (ho[t] = 1)),
        (t =
          (t === "css" ? "CSS" : t.charAt(0).toUpperCase() + t.substr(1)) +
          "Plugin");
    }
    $c(t, i), e.register && e.register(zt, i, bt);
  },
  Fe = 255,
  vr = {
    aqua: [0, Fe, Fe],
    lime: [0, Fe, 0],
    silver: [192, 192, 192],
    black: [0, 0, 0],
    maroon: [128, 0, 0],
    teal: [0, 128, 128],
    blue: [0, 0, Fe],
    navy: [0, 0, 128],
    white: [Fe, Fe, Fe],
    olive: [128, 128, 0],
    yellow: [Fe, Fe, 0],
    orange: [Fe, 165, 0],
    gray: [128, 128, 128],
    purple: [128, 0, 128],
    green: [0, 128, 0],
    red: [Fe, 0, 0],
    pink: [Fe, 192, 203],
    cyan: [0, Fe, Fe],
    transparent: [Fe, Fe, Fe, 0],
  },
  ba = function (e, t, n) {
    return (
      (e += e < 0 ? 1 : e > 1 ? -1 : 0),
      ((e * 6 < 1
        ? t + (n - t) * e * 6
        : e < 0.5
        ? n
        : e * 3 < 2
        ? t + (n - t) * (2 / 3 - e) * 6
        : t) *
        Fe +
        0.5) |
        0
    );
  },
  du = function (e, t, n) {
    var i = e ? (Pn(e) ? [e >> 16, (e >> 8) & Fe, e & Fe] : 0) : vr.black,
      r,
      a,
      s,
      c,
      l,
      u,
      h,
      f,
      m,
      g;
    if (!i) {
      if ((e.substr(-1) === "," && (e = e.substr(0, e.length - 1)), vr[e]))
        i = vr[e];
      else if (e.charAt(0) === "#") {
        if (
          (e.length < 6 &&
            ((r = e.charAt(1)),
            (a = e.charAt(2)),
            (s = e.charAt(3)),
            (e =
              "#" +
              r +
              r +
              a +
              a +
              s +
              s +
              (e.length === 5 ? e.charAt(4) + e.charAt(4) : ""))),
          e.length === 9)
        )
          return (
            (i = parseInt(e.substr(1, 6), 16)),
            [i >> 16, (i >> 8) & Fe, i & Fe, parseInt(e.substr(7), 16) / 255]
          );
        (e = parseInt(e.substr(1), 16)), (i = [e >> 16, (e >> 8) & Fe, e & Fe]);
      } else if (e.substr(0, 3) === "hsl") {
        if (((i = g = e.match(Ga)), !t))
          (c = (+i[0] % 360) / 360),
            (l = +i[1] / 100),
            (u = +i[2] / 100),
            (a = u <= 0.5 ? u * (l + 1) : u + l - u * l),
            (r = u * 2 - a),
            i.length > 3 && (i[3] *= 1),
            (i[0] = ba(c + 1 / 3, r, a)),
            (i[1] = ba(c, r, a)),
            (i[2] = ba(c - 1 / 3, r, a));
        else if (~e.indexOf("="))
          return (i = e.match(qc)), n && i.length < 4 && (i[3] = 1), i;
      } else i = e.match(Ga) || vr.transparent;
      i = i.map(Number);
    }
    return (
      t &&
        !g &&
        ((r = i[0] / Fe),
        (a = i[1] / Fe),
        (s = i[2] / Fe),
        (h = Math.max(r, a, s)),
        (f = Math.min(r, a, s)),
        (u = (h + f) / 2),
        h === f
          ? (c = l = 0)
          : ((m = h - f),
            (l = u > 0.5 ? m / (2 - h - f) : m / (h + f)),
            (c =
              h === r
                ? (a - s) / m + (a < s ? 6 : 0)
                : h === a
                ? (s - r) / m + 2
                : (r - a) / m + 4),
            (c *= 60)),
        (i[0] = ~~(c + 0.5)),
        (i[1] = ~~(l * 100 + 0.5)),
        (i[2] = ~~(u * 100 + 0.5))),
      n && i.length < 4 && (i[3] = 1),
      i
    );
  },
  pu = function (e) {
    var t = [],
      n = [],
      i = -1;
    return (
      e.split(Yn).forEach(function (r) {
        var a = r.match(ki) || [];
        t.push.apply(t, a), n.push((i += a.length + 1));
      }),
      (t.c = n),
      t
    );
  },
  Ql = function (e, t, n) {
    var i = "",
      r = (e + i).match(Yn),
      a = t ? "hsla(" : "rgba(",
      s = 0,
      c,
      l,
      u,
      h;
    if (!r) return e;
    if (
      ((r = r.map(function (f) {
        return (
          (f = du(f, t, 1)) &&
          a +
            (t ? f[0] + "," + f[1] + "%," + f[2] + "%," + f[3] : f.join(",")) +
            ")"
        );
      })),
      n && ((u = pu(e)), (c = n.c), c.join(i) !== u.c.join(i)))
    )
      for (l = e.replace(Yn, "1").split(ki), h = l.length - 1; s < h; s++)
        i +=
          l[s] +
          (~c.indexOf(s)
            ? r.shift() || a + "0,0,0,0)"
            : (u.length ? u : r.length ? r : n).shift());
    if (!l)
      for (l = e.split(Yn), h = l.length - 1; s < h; s++) i += l[s] + r[s];
    return i + l[h];
  },
  Yn = (function () {
    var o =
        "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",
      e;
    for (e in vr) o += "|" + e + "\\b";
    return new RegExp(o + ")", "gi");
  })(),
  C_ = /hsl[a]?\(/,
  mu = function (e) {
    var t = e.join(" "),
      n;
    if (((Yn.lastIndex = 0), Yn.test(t)))
      return (
        (n = C_.test(t)),
        (e[1] = Ql(e[1], n)),
        (e[0] = Ql(e[0], n, pu(e[1]))),
        !0
      );
  },
  Pr,
  Dt = (function () {
    var o = Date.now,
      e = 500,
      t = 33,
      n = o(),
      i = n,
      r = 1e3 / 240,
      a = r,
      s = [],
      c,
      l,
      u,
      h,
      f,
      m,
      g = function d(p) {
        var _ = o() - i,
          v = p === !0,
          S,
          M,
          y,
          E;
        if (
          (_ > e && (n += _ - t),
          (i += _),
          (y = i - n),
          (S = y - a),
          (S > 0 || v) &&
            ((E = ++h.frame),
            (f = y - h.time * 1e3),
            (h.time = y = y / 1e3),
            (a += S + (S >= r ? 4 : r - S)),
            (M = 1)),
          v || (c = l(d)),
          M)
        )
          for (m = 0; m < s.length; m++) s[m](y, f, E, p);
      };
    return (
      (h = {
        time: 0,
        frame: 0,
        tick: function () {
          g(!0);
        },
        deltaRatio: function (p) {
          return f / (1e3 / (p || 60));
        },
        wake: function () {
          jc &&
            (!Ha &&
              Hc() &&
              ((Bt = Ha = window),
              (co = Bt.document || {}),
              (It.gsap = zt),
              (Bt.gsapVersions || (Bt.gsapVersions = [])).push(zt.version),
              Zc(ys || Bt.GreenSockGlobals || (!Bt.gsap && Bt) || {}),
              (u = Bt.requestAnimationFrame)),
            c && h.sleep(),
            (l =
              u ||
              function (p) {
                return setTimeout(p, (a - h.time * 1e3 + 1) | 0);
              }),
            (Pr = 1),
            g(2));
        },
        sleep: function () {
          (u ? Bt.cancelAnimationFrame : clearTimeout)(c), (Pr = 0), (l = Cr);
        },
        lagSmoothing: function (p, _) {
          (e = p || 1 / Oe), (t = Math.min(_, e, 0));
        },
        fps: function (p) {
          (r = 1e3 / (p || 240)), (a = h.time * 1e3 + r);
        },
        add: function (p, _, v) {
          var S = _
            ? function (M, y, E, A) {
                p(M, y, E, A), h.remove(S);
              }
            : p;
          return h.remove(p), s[v ? "unshift" : "push"](S), tr(), S;
        },
        remove: function (p, _) {
          ~(_ = s.indexOf(p)) && s.splice(_, 1) && m >= _ && m--;
        },
        _listeners: s,
      }),
      h
    );
  })(),
  tr = function () {
    return !Pr && Dt.wake();
  },
  Te = {},
  A_ = /^[\d.\-M][\d.\-,\s]/,
  P_ = /["']/g,
  L_ = function (e) {
    for (
      var t = {},
        n = e.substr(1, e.length - 3).split(":"),
        i = n[0],
        r = 1,
        a = n.length,
        s,
        c,
        l;
      r < a;
      r++
    )
      (c = n[r]),
        (s = r !== a - 1 ? c.lastIndexOf(",") : c.length),
        (l = c.substr(0, s)),
        (t[i] = isNaN(l) ? l.replace(P_, "").trim() : +l),
        (i = c.substr(s + 1).trim());
    return t;
  },
  D_ = function (e) {
    var t = e.indexOf("(") + 1,
      n = e.indexOf(")"),
      i = e.indexOf("(", t);
    return e.substring(t, ~i && i < n ? e.indexOf(")", n + 1) : n);
  },
  R_ = function (e) {
    var t = (e + "").split("("),
      n = Te[t[0]];
    return n && t.length > 1 && n.config
      ? n.config.apply(
          null,
          ~e.indexOf("{") ? [L_(t[1])] : D_(e).split(",").map(eu)
        )
      : Te._CE && A_.test(e)
      ? Te._CE("", e)
      : n;
  },
  gu = function (e) {
    return function (t) {
      return 1 - e(1 - t);
    };
  },
  _u = function o(e, t) {
    for (var n = e._first, i; n; )
      n instanceof vt
        ? o(n, t)
        : n.vars.yoyoEase &&
          (!n._yoyo || !n._repeat) &&
          n._yoyo !== t &&
          (n.timeline
            ? o(n.timeline, t)
            : ((i = n._ease),
              (n._ease = n._yEase),
              (n._yEase = i),
              (n._yoyo = t))),
        (n = n._next);
  },
  mi = function (e, t) {
    return (e && (We(e) ? e : Te[e] || R_(e))) || t;
  },
  vi = function (e, t, n, i) {
    n === void 0 &&
      (n = function (c) {
        return 1 - t(1 - c);
      }),
      i === void 0 &&
        (i = function (c) {
          return c < 0.5 ? t(c * 2) / 2 : 1 - t((1 - c) * 2) / 2;
        });
    var r = { easeIn: t, easeOut: n, easeInOut: i },
      a;
    return (
      St(e, function (s) {
        (Te[s] = It[s] = r), (Te[(a = s.toLowerCase())] = n);
        for (var c in r)
          Te[
            a + (c === "easeIn" ? ".in" : c === "easeOut" ? ".out" : ".inOut")
          ] = Te[s + "." + c] = r[c];
      }),
      r
    );
  },
  xu = function (e) {
    return function (t) {
      return t < 0.5 ? (1 - e(1 - t * 2)) / 2 : 0.5 + e((t - 0.5) * 2) / 2;
    };
  },
  wa = function o(e, t, n) {
    var i = t >= 1 ? t : 1,
      r = (n || (e ? 0.3 : 0.45)) / (t < 1 ? t : 1),
      a = (r / Va) * (Math.asin(1 / i) || 0),
      s = function (u) {
        return u === 1 ? 1 : i * Math.pow(2, -10 * u) * a_((u - a) * r) + 1;
      },
      c =
        e === "out"
          ? s
          : e === "in"
          ? function (l) {
              return 1 - s(1 - l);
            }
          : xu(s);
    return (
      (r = Va / r),
      (c.config = function (l, u) {
        return o(e, l, u);
      }),
      c
    );
  },
  Ta = function o(e, t) {
    t === void 0 && (t = 1.70158);
    var n = function (a) {
        return a ? --a * a * ((t + 1) * a + t) + 1 : 0;
      },
      i =
        e === "out"
          ? n
          : e === "in"
          ? function (r) {
              return 1 - n(1 - r);
            }
          : xu(n);
    return (
      (i.config = function (r) {
        return o(e, r);
      }),
      i
    );
  };
St("Linear,Quad,Cubic,Quart,Quint,Strong", function (o, e) {
  var t = e < 5 ? e + 1 : e;
  vi(
    o + ",Power" + (t - 1),
    e
      ? function (n) {
          return Math.pow(n, t);
        }
      : function (n) {
          return n;
        },
    function (n) {
      return 1 - Math.pow(1 - n, t);
    },
    function (n) {
      return n < 0.5
        ? Math.pow(n * 2, t) / 2
        : 1 - Math.pow((1 - n) * 2, t) / 2;
    }
  );
});
Te.Linear.easeNone = Te.none = Te.Linear.easeIn;
vi("Elastic", wa("in"), wa("out"), wa());
(function (o, e) {
  var t = 1 / e,
    n = 2 * t,
    i = 2.5 * t,
    r = function (s) {
      return s < t
        ? o * s * s
        : s < n
        ? o * Math.pow(s - 1.5 / e, 2) + 0.75
        : s < i
        ? o * (s -= 2.25 / e) * s + 0.9375
        : o * Math.pow(s - 2.625 / e, 2) + 0.984375;
    };
  vi(
    "Bounce",
    function (a) {
      return 1 - r(1 - a);
    },
    r
  );
})(7.5625, 2.75);
vi("Expo", function (o) {
  return o ? Math.pow(2, 10 * (o - 1)) : 0;
});
vi("Circ", function (o) {
  return -(Gc(1 - o * o) - 1);
});
vi("Sine", function (o) {
  return o === 1 ? 1 : -s_(o * i_) + 1;
});
vi("Back", Ta("in"), Ta("out"), Ta());
Te.SteppedEase =
  Te.steps =
  It.SteppedEase =
    {
      config: function (e, t) {
        e === void 0 && (e = 1);
        var n = 1 / e,
          i = e + (t ? 0 : 1),
          r = t ? 1 : 0,
          a = 1 - Oe;
        return function (s) {
          return (((i * kr(0, a, s)) | 0) + r) * n;
        };
      },
    };
Ji.ease = Te["quad.out"];
St(
  "onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",
  function (o) {
    return (fo += o + "," + o + "Params,");
  }
);
var vu = function (e, t) {
    (this.id = r_++),
      (e._gsap = this),
      (this.target = e),
      (this.harness = t),
      (this.get = t ? t.get : Jc),
      (this.set = t ? t.getSetter : xo);
  },
  nr = (function () {
    function o(t) {
      (this.vars = t),
        (this._delay = +t.delay || 0),
        (this._repeat = t.repeat === 1 / 0 ? -2 : t.repeat || 0) &&
          ((this._rDelay = t.repeatDelay || 0),
          (this._yoyo = !!t.yoyo || !!t.yoyoEase)),
        (this._ts = 1),
        er(this, +t.duration, 1, 1),
        (this.data = t.data),
        $e && ((this._ctx = $e), $e.data.push(this)),
        Pr || Dt.wake();
    }
    var e = o.prototype;
    return (
      (e.delay = function (n) {
        return n || n === 0
          ? (this.parent &&
              this.parent.smoothChildTiming &&
              this.startTime(this._start + n - this._delay),
            (this._delay = n),
            this)
          : this._delay;
      }),
      (e.duration = function (n) {
        return arguments.length
          ? this.totalDuration(
              this._repeat > 0 ? n + (n + this._rDelay) * this._repeat : n
            )
          : this.totalDuration() && this._dur;
      }),
      (e.totalDuration = function (n) {
        return arguments.length
          ? ((this._dirty = 0),
            er(
              this,
              this._repeat < 0
                ? n
                : (n - this._repeat * this._rDelay) / (this._repeat + 1)
            ))
          : this._tDur;
      }),
      (e.totalTime = function (n, i) {
        if ((tr(), !arguments.length)) return this._tTime;
        var r = this._dp;
        if (r && r.smoothChildTiming && this._ts) {
          for (Os(this, n), !r._dp || r.parent || iu(r, this); r && r.parent; )
            r.parent._time !==
              r._start +
                (r._ts >= 0
                  ? r._tTime / r._ts
                  : (r.totalDuration() - r._tTime) / -r._ts) &&
              r.totalTime(r._tTime, !0),
              (r = r.parent);
          !this.parent &&
            this._dp.autoRemoveChildren &&
            ((this._ts > 0 && n < this._tDur) ||
              (this._ts < 0 && n > 0) ||
              (!this._tDur && !n)) &&
            cn(this._dp, this, this._start - this._delay);
        }
        return (
          (this._tTime !== n ||
            (!this._dur && !i) ||
            (this._initted && Math.abs(this._zTime) === Oe) ||
            (!n && !this._initted && (this.add || this._ptLookup))) &&
            (this._ts || (this._pTime = n), Qc(this, n, i)),
          this
        );
      }),
      (e.time = function (n, i) {
        return arguments.length
          ? this.totalTime(
              Math.min(this.totalDuration(), n + $l(this)) %
                (this._dur + this._rDelay) || (n ? this._dur : 0),
              i
            )
          : this._time;
      }),
      (e.totalProgress = function (n, i) {
        return arguments.length
          ? this.totalTime(this.totalDuration() * n, i)
          : this.totalDuration()
          ? Math.min(1, this._tTime / this._tDur)
          : this.ratio;
      }),
      (e.progress = function (n, i) {
        return arguments.length
          ? this.totalTime(
              this.duration() *
                (this._yoyo && !(this.iteration() & 1) ? 1 - n : n) +
                $l(this),
              i
            )
          : this.duration()
          ? Math.min(1, this._time / this._dur)
          : this.ratio;
      }),
      (e.iteration = function (n, i) {
        var r = this.duration() + this._rDelay;
        return arguments.length
          ? this.totalTime(this._time + (n - 1) * r, i)
          : this._repeat
          ? Qi(this._tTime, r) + 1
          : 1;
      }),
      (e.timeScale = function (n) {
        if (!arguments.length) return this._rts === -Oe ? 0 : this._rts;
        if (this._rts === n) return this;
        var i =
          this.parent && this._ts ? ws(this.parent._time, this) : this._tTime;
        return (
          (this._rts = +n || 0),
          (this._ts = this._ps || n === -Oe ? 0 : this._rts),
          this.totalTime(kr(-this._delay, this._tDur, i), !0),
          Fs(this),
          f_(this)
        );
      }),
      (e.paused = function (n) {
        return arguments.length
          ? (this._ps !== n &&
              ((this._ps = n),
              n
                ? ((this._pTime =
                    this._tTime || Math.max(-this._delay, this.rawTime())),
                  (this._ts = this._act = 0))
                : (tr(),
                  (this._ts = this._rts),
                  this.totalTime(
                    this.parent && !this.parent.smoothChildTiming
                      ? this.rawTime()
                      : this._tTime || this._pTime,
                    this.progress() === 1 &&
                      Math.abs(this._zTime) !== Oe &&
                      (this._tTime -= Oe)
                  ))),
            this)
          : this._ps;
      }),
      (e.startTime = function (n) {
        if (arguments.length) {
          this._start = n;
          var i = this.parent || this._dp;
          return (
            i && (i._sort || !this.parent) && cn(i, this, n - this._delay), this
          );
        }
        return this._start;
      }),
      (e.endTime = function (n) {
        return (
          this._start +
          (Mt(n) ? this.totalDuration() : this.duration()) /
            Math.abs(this._ts || 1)
        );
      }),
      (e.rawTime = function (n) {
        var i = this.parent || this._dp;
        return i
          ? n &&
            (!this._ts ||
              (this._repeat && this._time && this.totalProgress() < 1))
            ? this._tTime % (this._dur + this._rDelay)
            : this._ts
            ? ws(i.rawTime(n), this)
            : this._tTime
          : this._tTime;
      }),
      (e.revert = function (n) {
        n === void 0 && (n = Mr);
        var i = Yt;
        return (
          (Yt = n),
          this.timeline && this.timeline.revert(n),
          this.totalTime(-0.01, n.suppressEvents),
          this.data !== "nested" && Ln(this),
          (Yt = i),
          this
        );
      }),
      (e.globalTime = function (n) {
        for (var i = this, r = arguments.length ? n : i.rawTime(); i; )
          (r = i._start + r / (i._ts || 1)), (i = i._dp);
        return !this.parent && this.vars.immediateRender ? -1 : r;
      }),
      (e.repeat = function (n) {
        return arguments.length
          ? ((this._repeat = n === 1 / 0 ? -2 : n), Kl(this))
          : this._repeat === -2
          ? 1 / 0
          : this._repeat;
      }),
      (e.repeatDelay = function (n) {
        if (arguments.length) {
          var i = this._time;
          return (this._rDelay = n), Kl(this), i ? this.time(i) : this;
        }
        return this._rDelay;
      }),
      (e.yoyo = function (n) {
        return arguments.length ? ((this._yoyo = n), this) : this._yoyo;
      }),
      (e.seek = function (n, i) {
        return this.totalTime(Nt(this, n), Mt(i));
      }),
      (e.restart = function (n, i) {
        return this.play().totalTime(n ? -this._delay : 0, Mt(i));
      }),
      (e.play = function (n, i) {
        return n != null && this.seek(n, i), this.reversed(!1).paused(!1);
      }),
      (e.reverse = function (n, i) {
        return (
          n != null && this.seek(n || this.totalDuration(), i),
          this.reversed(!0).paused(!1)
        );
      }),
      (e.pause = function (n, i) {
        return n != null && this.seek(n, i), this.paused(!0);
      }),
      (e.resume = function () {
        return this.paused(!1);
      }),
      (e.reversed = function (n) {
        return arguments.length
          ? (!!n !== this.reversed() &&
              this.timeScale(-this._rts || (n ? -Oe : 0)),
            this)
          : this._rts < 0;
      }),
      (e.invalidate = function () {
        return (this._initted = this._act = 0), (this._zTime = -Oe), this;
      }),
      (e.isActive = function () {
        var n = this.parent || this._dp,
          i = this._start,
          r;
        return !!(
          !n ||
          (this._ts &&
            this._initted &&
            n.isActive() &&
            (r = n.rawTime(!0)) >= i &&
            r < this.endTime(!0) - Oe)
        );
      }),
      (e.eventCallback = function (n, i, r) {
        var a = this.vars;
        return arguments.length > 1
          ? (i
              ? ((a[n] = i),
                r && (a[n + "Params"] = r),
                n === "onUpdate" && (this._onUpdate = i))
              : delete a[n],
            this)
          : a[n];
      }),
      (e.then = function (n) {
        var i = this;
        return new Promise(function (r) {
          var a = We(n) ? n : tu,
            s = function () {
              var l = i.then;
              (i.then = null),
                We(a) && (a = a(i)) && (a.then || a === i) && (i.then = l),
                r(a),
                (i.then = l);
            };
          (i._initted && i.totalProgress() === 1 && i._ts >= 0) ||
          (!i._tTime && i._ts < 0)
            ? s()
            : (i._prom = s);
        });
      }),
      (e.kill = function () {
        xr(this);
      }),
      o
    );
  })();
Zt(nr.prototype, {
  _time: 0,
  _start: 0,
  _end: 0,
  _tTime: 0,
  _tDur: 0,
  _dirty: 0,
  _repeat: 0,
  _yoyo: !1,
  parent: null,
  _initted: !1,
  _rDelay: 0,
  _ts: 1,
  _dp: 0,
  ratio: 0,
  _zTime: -Oe,
  _prom: 0,
  _ps: !1,
  _rts: 1,
});
var vt = (function (o) {
  Vc(e, o);
  function e(n, i) {
    var r;
    return (
      n === void 0 && (n = {}),
      (r = o.call(this, n) || this),
      (r.labels = {}),
      (r.smoothChildTiming = !!n.smoothChildTiming),
      (r.autoRemoveChildren = !!n.autoRemoveChildren),
      (r._sort = Mt(n.sortChildren)),
      Be && cn(n.parent || Be, bn(r), i),
      n.reversed && r.reverse(),
      n.paused && r.paused(!0),
      n.scrollTrigger && ru(bn(r), n.scrollTrigger),
      r
    );
  }
  var t = e.prototype;
  return (
    (t.to = function (i, r, a) {
      return br(0, arguments, this), this;
    }),
    (t.from = function (i, r, a) {
      return br(1, arguments, this), this;
    }),
    (t.fromTo = function (i, r, a, s) {
      return br(2, arguments, this), this;
    }),
    (t.set = function (i, r, a) {
      return (
        (r.duration = 0),
        (r.parent = this),
        Sr(r).repeatDelay || (r.repeat = 0),
        (r.immediateRender = !!r.immediateRender),
        new Je(i, r, Nt(this, a), 1),
        this
      );
    }),
    (t.call = function (i, r, a) {
      return cn(this, Je.delayedCall(0, i, r), a);
    }),
    (t.staggerTo = function (i, r, a, s, c, l, u) {
      return (
        (a.duration = r),
        (a.stagger = a.stagger || s),
        (a.onComplete = l),
        (a.onCompleteParams = u),
        (a.parent = this),
        new Je(i, a, Nt(this, c)),
        this
      );
    }),
    (t.staggerFrom = function (i, r, a, s, c, l, u) {
      return (
        (a.runBackwards = 1),
        (Sr(a).immediateRender = Mt(a.immediateRender)),
        this.staggerTo(i, r, a, s, c, l, u)
      );
    }),
    (t.staggerFromTo = function (i, r, a, s, c, l, u, h) {
      return (
        (s.startAt = a),
        (Sr(s).immediateRender = Mt(s.immediateRender)),
        this.staggerTo(i, r, s, c, l, u, h)
      );
    }),
    (t.render = function (i, r, a) {
      var s = this._time,
        c = this._dirty ? this.totalDuration() : this._tDur,
        l = this._dur,
        u = i <= 0 ? 0 : st(i),
        h = this._zTime < 0 != i < 0 && (this._initted || !l),
        f,
        m,
        g,
        d,
        p,
        _,
        v,
        S,
        M,
        y,
        E,
        A;
      if (
        (this !== Be && u > c && i >= 0 && (u = c), u !== this._tTime || a || h)
      ) {
        if (
          (s !== this._time &&
            l &&
            ((u += this._time - s), (i += this._time - s)),
          (f = u),
          (M = this._start),
          (S = this._ts),
          (_ = !S),
          h && (l || (s = this._zTime), (i || !r) && (this._zTime = i)),
          this._repeat)
        ) {
          if (
            ((E = this._yoyo),
            (p = l + this._rDelay),
            this._repeat < -1 && i < 0)
          )
            return this.totalTime(p * 100 + i, r, a);
          if (
            ((f = st(u % p)),
            u === c
              ? ((d = this._repeat), (f = l))
              : ((d = ~~(u / p)),
                d && d === u / p && ((f = l), d--),
                f > l && (f = l)),
            (y = Qi(this._tTime, p)),
            !s && this._tTime && y !== d && (y = d),
            E && d & 1 && ((f = l - f), (A = 1)),
            d !== y && !this._lock)
          ) {
            var x = E && y & 1,
              w = x === (E && d & 1);
            if (
              (d < y && (x = !x),
              (s = x ? 0 : l),
              (this._lock = 1),
              (this.render(s || (A ? 0 : st(d * p)), r, !l)._lock = 0),
              (this._tTime = u),
              !r && this.parent && qt(this, "onRepeat"),
              this.vars.repeatRefresh && !A && (this.invalidate()._lock = 1),
              (s && s !== this._time) ||
                _ !== !this._ts ||
                (this.vars.onRepeat && !this.parent && !this._act))
            )
              return this;
            if (
              ((l = this._dur),
              (c = this._tDur),
              w &&
                ((this._lock = 2),
                (s = x ? l : -1e-4),
                this.render(s, !0),
                this.vars.repeatRefresh && !A && this.invalidate()),
              (this._lock = 0),
              !this._ts && !_)
            )
              return this;
            _u(this, A);
          }
        }
        if (
          (this._hasPause &&
            !this._forcing &&
            this._lock < 2 &&
            ((v = g_(this, st(s), st(f))), v && (u -= f - (f = v._start))),
          (this._tTime = u),
          (this._time = f),
          (this._act = !S),
          this._initted ||
            ((this._onUpdate = this.vars.onUpdate),
            (this._initted = 1),
            (this._zTime = i),
            (s = 0)),
          !s && f && !r && (qt(this, "onStart"), this._tTime !== u))
        )
          return this;
        if (f >= s && i >= 0)
          for (m = this._first; m; ) {
            if (
              ((g = m._next), (m._act || f >= m._start) && m._ts && v !== m)
            ) {
              if (m.parent !== this) return this.render(i, r, a);
              if (
                (m.render(
                  m._ts > 0
                    ? (f - m._start) * m._ts
                    : (m._dirty ? m.totalDuration() : m._tDur) +
                        (f - m._start) * m._ts,
                  r,
                  a
                ),
                f !== this._time || (!this._ts && !_))
              ) {
                (v = 0), g && (u += this._zTime = -Oe);
                break;
              }
            }
            m = g;
          }
        else {
          (a = a || Yt), (m = this._last);
          for (var P = i < 0 ? i : f; m; ) {
            if (((g = m._prev), (m._act || P <= m._end) && m._ts && v !== m)) {
              if (m.parent !== this) return this.render(i, r, a);
              if (
                (m.render(
                  m._ts > 0
                    ? (P - m._start) * m._ts
                    : (m._dirty ? m.totalDuration() : m._tDur) +
                        (P - m._start) * m._ts,
                  r,
                  a
                ),
                f !== this._time || (!this._ts && !_))
              ) {
                (v = 0), g && (u += this._zTime = P ? -Oe : Oe);
                break;
              }
            }
            m = g;
          }
        }
        if (
          v &&
          !r &&
          (this.pause(),
          (v.render(f >= s ? 0 : -Oe)._zTime = f >= s ? 1 : -1),
          this._ts)
        )
          return (this._start = M), Fs(this), this.render(i, r, a);
        this._onUpdate && !r && qt(this, "onUpdate", !0),
          ((u === c && this._tTime >= this.totalDuration()) || (!u && s)) &&
            (M === this._start || Math.abs(S) !== Math.abs(this._ts)) &&
            (this._lock ||
              ((i || !l) &&
                ((u === c && this._ts > 0) || (!u && this._ts < 0)) &&
                Ln(this, 1),
              !r &&
                !(i < 0 && !s) &&
                (u || s || !c) &&
                (qt(
                  this,
                  u === c && i >= 0 ? "onComplete" : "onReverseComplete",
                  !0
                ),
                this._prom &&
                  !(u < c && this.timeScale() > 0) &&
                  this._prom())));
      }
      return this;
    }),
    (t.add = function (i, r) {
      var a = this;
      if ((Pn(r) || (r = Nt(this, r, i)), !(i instanceof nr))) {
        if (ut(i))
          return (
            i.forEach(function (s) {
              return a.add(s, r);
            }),
            this
          );
        if (nt(i)) return this.addLabel(i, r);
        if (We(i)) i = Je.delayedCall(0, i);
        else return this;
      }
      return this !== i ? cn(this, i, r) : this;
    }),
    (t.getChildren = function (i, r, a, s) {
      i === void 0 && (i = !0),
        r === void 0 && (r = !0),
        a === void 0 && (a = !0),
        s === void 0 && (s = -Ht);
      for (var c = [], l = this._first; l; )
        l._start >= s &&
          (l instanceof Je
            ? r && c.push(l)
            : (a && c.push(l), i && c.push.apply(c, l.getChildren(!0, r, a)))),
          (l = l._next);
      return c;
    }),
    (t.getById = function (i) {
      for (var r = this.getChildren(1, 1, 1), a = r.length; a--; )
        if (r[a].vars.id === i) return r[a];
    }),
    (t.remove = function (i) {
      return nt(i)
        ? this.removeLabel(i)
        : We(i)
        ? this.killTweensOf(i)
        : (zs(this, i),
          i === this._recent && (this._recent = this._last),
          pi(this));
    }),
    (t.totalTime = function (i, r) {
      return arguments.length
        ? ((this._forcing = 1),
          !this._dp &&
            this._ts &&
            (this._start = st(
              Dt.time -
                (this._ts > 0
                  ? i / this._ts
                  : (this.totalDuration() - i) / -this._ts)
            )),
          o.prototype.totalTime.call(this, i, r),
          (this._forcing = 0),
          this)
        : this._tTime;
    }),
    (t.addLabel = function (i, r) {
      return (this.labels[i] = Nt(this, r)), this;
    }),
    (t.removeLabel = function (i) {
      return delete this.labels[i], this;
    }),
    (t.addPause = function (i, r, a) {
      var s = Je.delayedCall(0, r || Cr, a);
      return (
        (s.data = "isPause"), (this._hasPause = 1), cn(this, s, Nt(this, i))
      );
    }),
    (t.removePause = function (i) {
      var r = this._first;
      for (i = Nt(this, i); r; )
        r._start === i && r.data === "isPause" && Ln(r), (r = r._next);
    }),
    (t.killTweensOf = function (i, r, a) {
      for (var s = this.getTweensOf(i, a), c = s.length; c--; )
        Gn !== s[c] && s[c].kill(i, r);
      return this;
    }),
    (t.getTweensOf = function (i, r) {
      for (var a = [], s = Wt(i), c = this._first, l = Pn(r), u; c; )
        c instanceof Je
          ? c_(c._targets, s) &&
            (l
              ? (!Gn || (c._initted && c._ts)) &&
                c.globalTime(0) <= r &&
                c.globalTime(c.totalDuration()) > r
              : !r || c.isActive()) &&
            a.push(c)
          : (u = c.getTweensOf(s, r)).length && a.push.apply(a, u),
          (c = c._next);
      return a;
    }),
    (t.tweenTo = function (i, r) {
      r = r || {};
      var a = this,
        s = Nt(a, i),
        c = r,
        l = c.startAt,
        u = c.onStart,
        h = c.onStartParams,
        f = c.immediateRender,
        m,
        g = Je.to(
          a,
          Zt(
            {
              ease: r.ease || "none",
              lazy: !1,
              immediateRender: !1,
              time: s,
              overwrite: "auto",
              duration:
                r.duration ||
                Math.abs(
                  (s - (l && "time" in l ? l.time : a._time)) / a.timeScale()
                ) ||
                Oe,
              onStart: function () {
                if ((a.pause(), !m)) {
                  var p =
                    r.duration ||
                    Math.abs(
                      (s - (l && "time" in l ? l.time : a._time)) /
                        a.timeScale()
                    );
                  g._dur !== p && er(g, p, 0, 1).render(g._time, !0, !0),
                    (m = 1);
                }
                u && u.apply(g, h || []);
              },
            },
            r
          )
        );
      return f ? g.render(0) : g;
    }),
    (t.tweenFromTo = function (i, r, a) {
      return this.tweenTo(r, Zt({ startAt: { time: Nt(this, i) } }, a));
    }),
    (t.recent = function () {
      return this._recent;
    }),
    (t.nextLabel = function (i) {
      return i === void 0 && (i = this._time), Jl(this, Nt(this, i));
    }),
    (t.previousLabel = function (i) {
      return i === void 0 && (i = this._time), Jl(this, Nt(this, i), 1);
    }),
    (t.currentLabel = function (i) {
      return arguments.length
        ? this.seek(i, !0)
        : this.previousLabel(this._time + Oe);
    }),
    (t.shiftChildren = function (i, r, a) {
      a === void 0 && (a = 0);
      for (var s = this._first, c = this.labels, l; s; )
        s._start >= a && ((s._start += i), (s._end += i)), (s = s._next);
      if (r) for (l in c) c[l] >= a && (c[l] += i);
      return pi(this);
    }),
    (t.invalidate = function () {
      var i = this._first;
      for (this._lock = 0; i; ) i.invalidate(), (i = i._next);
      return o.prototype.invalidate.call(this);
    }),
    (t.clear = function (i) {
      i === void 0 && (i = !0);
      for (var r = this._first, a; r; ) (a = r._next), this.remove(r), (r = a);
      return (
        this._dp && (this._time = this._tTime = this._pTime = 0),
        i && (this.labels = {}),
        pi(this)
      );
    }),
    (t.totalDuration = function (i) {
      var r = 0,
        a = this,
        s = a._last,
        c = Ht,
        l,
        u,
        h;
      if (arguments.length)
        return a.timeScale(
          (a._repeat < 0 ? a.duration() : a.totalDuration()) /
            (a.reversed() ? -i : i)
        );
      if (a._dirty) {
        for (h = a.parent; s; )
          (l = s._prev),
            s._dirty && s.totalDuration(),
            (u = s._start),
            u > c && a._sort && s._ts && !a._lock
              ? ((a._lock = 1), (cn(a, s, u - s._delay, 1)._lock = 0))
              : (c = u),
            u < 0 &&
              s._ts &&
              ((r -= u),
              ((!h && !a._dp) || (h && h.smoothChildTiming)) &&
                ((a._start += u / a._ts), (a._time -= u), (a._tTime -= u)),
              a.shiftChildren(-u, !1, -1 / 0),
              (c = 0)),
            s._end > r && s._ts && (r = s._end),
            (s = l);
        er(a, a === Be && a._time > r ? a._time : r, 1, 1), (a._dirty = 0);
      }
      return a._tDur;
    }),
    (e.updateRoot = function (i) {
      if ((Be._ts && (Qc(Be, ws(i, Be)), (Kc = Dt.frame)), Dt.frame >= jl)) {
        jl += Rt.autoSleep || 120;
        var r = Be._first;
        if ((!r || !r._ts) && Rt.autoSleep && Dt._listeners.length < 2) {
          for (; r && !r._ts; ) r = r._next;
          r || Dt.sleep();
        }
      }
    }),
    e
  );
})(nr);
Zt(vt.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 });
var I_ = function (e, t, n, i, r, a, s) {
    var c = new bt(this._pt, e, t, 0, 1, Tu, null, r),
      l = 0,
      u = 0,
      h,
      f,
      m,
      g,
      d,
      p,
      _,
      v;
    for (
      c.b = n,
        c.e = i,
        n += "",
        i += "",
        (_ = ~i.indexOf("random(")) && (i = Ar(i)),
        a && ((v = [n, i]), a(v, e, t), (n = v[0]), (i = v[1])),
        f = n.match(Ma) || [];
      (h = Ma.exec(i));

    )
      (g = h[0]),
        (d = i.substring(l, h.index)),
        m ? (m = (m + 1) % 5) : d.substr(-5) === "rgba(" && (m = 1),
        g !== f[u++] &&
          ((p = parseFloat(f[u - 1]) || 0),
          (c._pt = {
            _next: c._pt,
            p: d || u === 1 ? d : ",",
            s: p,
            c: g.charAt(1) === "=" ? Wi(p, g) - p : parseFloat(g) - p,
            m: m && m < 4 ? Math.round : 0,
          }),
          (l = Ma.lastIndex));
    return (
      (c.c = l < i.length ? i.substring(l, i.length) : ""),
      (c.fp = s),
      (Xc.test(i) || _) && (c.e = 0),
      (this._pt = c),
      c
    );
  },
  mo = function (e, t, n, i, r, a, s, c, l, u) {
    We(i) && (i = i(r || 0, e, a));
    var h = e[t],
      f =
        n !== "get"
          ? n
          : We(h)
          ? l
            ? e[
                t.indexOf("set") || !We(e["get" + t.substr(3)])
                  ? t
                  : "get" + t.substr(3)
              ](l)
            : e[t]()
          : h,
      m = We(h) ? (l ? N_ : bu) : _o,
      g;
    if (
      (nt(i) &&
        (~i.indexOf("random(") && (i = Ar(i)),
        i.charAt(1) === "=" &&
          ((g = Wi(f, i) + (ct(f) || 0)), (g || g === 0) && (i = g))),
      !u || f !== i || $a)
    )
      return !isNaN(f * i) && i !== ""
        ? ((g = new bt(
            this._pt,
            e,
            t,
            +f || 0,
            i - (f || 0),
            typeof h == "boolean" ? k_ : wu,
            0,
            m
          )),
          l && (g.fp = l),
          s && g.modifier(s, this, e),
          (this._pt = g))
        : (!h && !(t in e) && uo(t, i),
          I_.call(this, e, t, f, i, m, c || Rt.stringFilter, l));
  },
  z_ = function (e, t, n, i, r) {
    if (
      (We(e) && (e = wr(e, r, t, n, i)),
      !dn(e) || (e.style && e.nodeType) || ut(e) || Wc(e))
    )
      return nt(e) ? wr(e, r, t, n, i) : e;
    var a = {},
      s;
    for (s in e) a[s] = wr(e[s], r, t, n, i);
    return a;
  },
  yu = function (e, t, n, i, r, a) {
    var s, c, l, u;
    if (
      Pt[e] &&
      (s = new Pt[e]()).init(
        r,
        s.rawVars ? t[e] : z_(t[e], i, r, a, n),
        n,
        i,
        a
      ) !== !1 &&
      ((n._pt = c = new bt(n._pt, r, e, 0, 1, s.render, s, 0, s.priority)),
      n !== Vi)
    )
      for (l = n._ptLookup[n._targets.indexOf(r)], u = s._props.length; u--; )
        l[s._props[u]] = c;
    return s;
  },
  Gn,
  $a,
  go = function o(e, t) {
    var n = e.vars,
      i = n.ease,
      r = n.startAt,
      a = n.immediateRender,
      s = n.lazy,
      c = n.onUpdate,
      l = n.onUpdateParams,
      u = n.callbackScope,
      h = n.runBackwards,
      f = n.yoyoEase,
      m = n.keyframes,
      g = n.autoRevert,
      d = e._dur,
      p = e._startAt,
      _ = e._targets,
      v = e.parent,
      S = v && v.data === "nested" ? v.vars.targets : _,
      M = e._overwrite === "auto" && !oo,
      y = e.timeline,
      E,
      A,
      x,
      w,
      P,
      W,
      K,
      O,
      D,
      B,
      Y,
      X,
      k;
    if (
      (y && (!m || !i) && (i = "none"),
      (e._ease = mi(i, Ji.ease)),
      (e._yEase = f ? gu(mi(f === !0 ? i : f, Ji.ease)) : 0),
      f &&
        e._yoyo &&
        !e._repeat &&
        ((f = e._yEase), (e._yEase = e._ease), (e._ease = f)),
      (e._from = !y && !!n.runBackwards),
      !y || (m && !n.stagger))
    ) {
      if (
        ((O = _[0] ? di(_[0]).harness : 0),
        (X = O && n[O.prop]),
        (E = bs(n, ho)),
        p &&
          (t < 0 && h && a && !g
            ? p.render(-1, !0)
            : p.revert(h && d ? Mr : l_),
          (p._lazy = 0)),
        r)
      ) {
        if (
          (Ln(
            (e._startAt = Je.set(
              _,
              Zt(
                {
                  data: "isStart",
                  overwrite: !1,
                  parent: v,
                  immediateRender: !0,
                  lazy: Mt(s),
                  startAt: null,
                  delay: 0,
                  onUpdate: c,
                  onUpdateParams: l,
                  callbackScope: u,
                  stagger: 0,
                },
                r
              )
            ))
          ),
          t < 0 && (Yt || (!a && !g)) && e._startAt.revert(Mr),
          a && d && t <= 0)
        ) {
          t && (e._zTime = t);
          return;
        }
      } else if (h && d && !p) {
        if (
          (t && (a = !1),
          (x = Zt(
            {
              overwrite: !1,
              data: "isFromStart",
              lazy: a && Mt(s),
              immediateRender: a,
              stagger: 0,
              parent: v,
            },
            E
          )),
          X && (x[O.prop] = X),
          Ln((e._startAt = Je.set(_, x))),
          t < 0 && (Yt ? e._startAt.revert(Mr) : e._startAt.render(-1, !0)),
          (e._zTime = t),
          !a)
        )
          o(e._startAt, Oe);
        else if (!t) return;
      }
      for (
        e._pt = e._ptCache = 0, s = (d && Mt(s)) || (s && !d), A = 0;
        A < _.length;
        A++
      ) {
        if (
          ((P = _[A]),
          (K = P._gsap || po(_)[A]._gsap),
          (e._ptLookup[A] = B = {}),
          Wa[K.id] && Xn.length && Ss(),
          (Y = S === _ ? A : S.indexOf(P)),
          O &&
            (D = new O()).init(P, X || E, e, Y, S) !== !1 &&
            ((e._pt = w =
              new bt(e._pt, P, D.name, 0, 1, D.render, D, 0, D.priority)),
            D._props.forEach(function (z) {
              B[z] = w;
            }),
            D.priority && (W = 1)),
          !O || X)
        )
          for (x in E)
            Pt[x] && (D = yu(x, E, e, Y, P, S))
              ? D.priority && (W = 1)
              : (B[x] = w =
                  mo.call(e, P, x, "get", E[x], Y, S, 0, n.stringFilter));
        e._op && e._op[A] && e.kill(P, e._op[A]),
          M &&
            e._pt &&
            ((Gn = e),
            Be.killTweensOf(P, B, e.globalTime(t)),
            (k = !e.parent),
            (Gn = 0)),
          e._pt && s && (Wa[K.id] = 1);
      }
      W && Eu(e), e._onInit && e._onInit(e);
    }
    (e._onUpdate = c),
      (e._initted = (!e._op || e._pt) && !k),
      m && t <= 0 && y.render(Ht, !0, !0);
  },
  F_ = function (e, t, n, i, r, a, s) {
    var c = ((e._pt && e._ptCache) || (e._ptCache = {}))[t],
      l,
      u,
      h,
      f;
    if (!c)
      for (
        c = e._ptCache[t] = [], h = e._ptLookup, f = e._targets.length;
        f--;

      ) {
        if (((l = h[f][t]), l && l.d && l.d._pt))
          for (l = l.d._pt; l && l.p !== t && l.fp !== t; ) l = l._next;
        if (!l) return ($a = 1), (e.vars[t] = "+=0"), go(e, s), ($a = 0), 1;
        c.push(l);
      }
    for (f = c.length; f--; )
      (u = c[f]),
        (l = u._pt || u),
        (l.s = (i || i === 0) && !r ? i : l.s + (i || 0) + a * l.c),
        (l.c = n - l.s),
        u.e && (u.e = Ye(n) + ct(u.e)),
        u.b && (u.b = l.s + ct(u.b));
  },
  O_ = function (e, t) {
    var n = e[0] ? di(e[0]).harness : 0,
      i = n && n.aliases,
      r,
      a,
      s,
      c;
    if (!i) return t;
    r = xi({}, t);
    for (a in i)
      if (a in r) for (c = i[a].split(","), s = c.length; s--; ) r[c[s]] = r[a];
    return r;
  },
  U_ = function (e, t, n, i) {
    var r = t.ease || i || "power1.inOut",
      a,
      s;
    if (ut(t))
      (s = n[e] || (n[e] = [])),
        t.forEach(function (c, l) {
          return s.push({ t: (l / (t.length - 1)) * 100, v: c, e: r });
        });
    else
      for (a in t)
        (s = n[a] || (n[a] = [])),
          a === "ease" || s.push({ t: parseFloat(e), v: t[a], e: r });
  },
  wr = function (e, t, n, i, r) {
    return We(e)
      ? e.call(t, n, i, r)
      : nt(e) && ~e.indexOf("random(")
      ? Ar(e)
      : e;
  },
  Mu = fo + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",
  Su = {};
St(Mu + ",id,stagger,delay,duration,paused,scrollTrigger", function (o) {
  return (Su[o] = 1);
});
var Je = (function (o) {
  Vc(e, o);
  function e(n, i, r, a) {
    var s;
    typeof i == "number" && ((r.duration = i), (i = r), (r = null)),
      (s = o.call(this, a ? i : Sr(i)) || this);
    var c = s.vars,
      l = c.duration,
      u = c.delay,
      h = c.immediateRender,
      f = c.stagger,
      m = c.overwrite,
      g = c.keyframes,
      d = c.defaults,
      p = c.scrollTrigger,
      _ = c.yoyoEase,
      v = i.parent || Be,
      S = (ut(n) || Wc(n) ? Pn(n[0]) : "length" in i) ? [n] : Wt(n),
      M,
      y,
      E,
      A,
      x,
      w,
      P,
      W;
    if (
      ((s._targets = S.length
        ? po(S)
        : Ms(
            "GSAP target " + n + " not found. https://greensock.com",
            !Rt.nullTargetWarn
          ) || []),
      (s._ptLookup = []),
      (s._overwrite = m),
      g || f || ps(l) || ps(u))
    ) {
      if (
        ((i = s.vars),
        (M = s.timeline =
          new vt({
            data: "nested",
            defaults: d || {},
            targets: v && v.data === "nested" ? v.vars.targets : S,
          })),
        M.kill(),
        (M.parent = M._dp = bn(s)),
        (M._start = 0),
        f || ps(l) || ps(u))
      ) {
        if (((A = S.length), (P = f && lu(f)), dn(f)))
          for (x in f) ~Mu.indexOf(x) && (W || (W = {}), (W[x] = f[x]));
        for (y = 0; y < A; y++)
          (E = bs(i, Su)),
            (E.stagger = 0),
            _ && (E.yoyoEase = _),
            W && xi(E, W),
            (w = S[y]),
            (E.duration = +wr(l, bn(s), y, w, S)),
            (E.delay = (+wr(u, bn(s), y, w, S) || 0) - s._delay),
            !f &&
              A === 1 &&
              E.delay &&
              ((s._delay = u = E.delay), (s._start += u), (E.delay = 0)),
            M.to(w, E, P ? P(y, w, S) : 0),
            (M._ease = Te.none);
        M.duration() ? (l = u = 0) : (s.timeline = 0);
      } else if (g) {
        Sr(Zt(M.vars.defaults, { ease: "none" })),
          (M._ease = mi(g.ease || i.ease || "none"));
        var K = 0,
          O,
          D,
          B;
        if (ut(g))
          g.forEach(function (Y) {
            return M.to(S, Y, ">");
          }),
            M.duration();
        else {
          E = {};
          for (x in g)
            x === "ease" || x === "easeEach" || U_(x, g[x], E, g.easeEach);
          for (x in E)
            for (
              O = E[x].sort(function (Y, X) {
                return Y.t - X.t;
              }),
                K = 0,
                y = 0;
              y < O.length;
              y++
            )
              (D = O[y]),
                (B = {
                  ease: D.e,
                  duration: ((D.t - (y ? O[y - 1].t : 0)) / 100) * l,
                }),
                (B[x] = D.v),
                M.to(S, B, K),
                (K += B.duration);
          M.duration() < l && M.to({}, { duration: l - M.duration() });
        }
      }
      l || s.duration((l = M.duration()));
    } else s.timeline = 0;
    return (
      m === !0 && !oo && ((Gn = bn(s)), Be.killTweensOf(S), (Gn = 0)),
      cn(v, bn(s), r),
      i.reversed && s.reverse(),
      i.paused && s.paused(!0),
      (h ||
        (!l &&
          !g &&
          s._start === st(v._time) &&
          Mt(h) &&
          d_(bn(s)) &&
          v.data !== "nested")) &&
        ((s._tTime = -Oe), s.render(Math.max(0, -u))),
      p && ru(bn(s), p),
      s
    );
  }
  var t = e.prototype;
  return (
    (t.render = function (i, r, a) {
      var s = this._time,
        c = this._tDur,
        l = this._dur,
        u = i < 0,
        h = i > c - Oe && !u ? c : i < Oe ? 0 : i,
        f,
        m,
        g,
        d,
        p,
        _,
        v,
        S,
        M;
      if (!l) m_(this, i, r, a);
      else if (
        h !== this._tTime ||
        !i ||
        a ||
        (!this._initted && this._tTime) ||
        (this._startAt && this._zTime < 0 !== u)
      ) {
        if (((f = h), (S = this.timeline), this._repeat)) {
          if (((d = l + this._rDelay), this._repeat < -1 && u))
            return this.totalTime(d * 100 + i, r, a);
          if (
            ((f = st(h % d)),
            h === c
              ? ((g = this._repeat), (f = l))
              : ((g = ~~(h / d)),
                g && g === h / d && ((f = l), g--),
                f > l && (f = l)),
            (_ = this._yoyo && g & 1),
            _ && ((M = this._yEase), (f = l - f)),
            (p = Qi(this._tTime, d)),
            f === s && !a && this._initted)
          )
            return (this._tTime = h), this;
          g !== p &&
            (S && this._yEase && _u(S, _),
            this.vars.repeatRefresh &&
              !_ &&
              !this._lock &&
              ((this._lock = a = 1),
              (this.render(st(d * g), !0).invalidate()._lock = 0)));
        }
        if (!this._initted) {
          if (su(this, u ? i : f, a, r)) return (this._tTime = 0), this;
          if (s !== this._time) return this;
          if (l !== this._dur) return this.render(i, r, a);
        }
        if (
          ((this._tTime = h),
          (this._time = f),
          !this._act && this._ts && ((this._act = 1), (this._lazy = 0)),
          (this.ratio = v = (M || this._ease)(f / l)),
          this._from && (this.ratio = v = 1 - v),
          f && !s && !r && (qt(this, "onStart"), this._tTime !== h))
        )
          return this;
        for (m = this._pt; m; ) m.r(v, m.d), (m = m._next);
        (S &&
          S.render(
            i < 0 ? i : !f && _ ? -Oe : S._dur * S._ease(f / this._dur),
            r,
            a
          )) ||
          (this._startAt && (this._zTime = i)),
          this._onUpdate &&
            !r &&
            (u && qa(this, i, r, a), qt(this, "onUpdate")),
          this._repeat &&
            g !== p &&
            this.vars.onRepeat &&
            !r &&
            this.parent &&
            qt(this, "onRepeat"),
          (h === this._tDur || !h) &&
            this._tTime === h &&
            (u && !this._onUpdate && qa(this, i, !0, !0),
            (i || !l) &&
              ((h === this._tDur && this._ts > 0) || (!h && this._ts < 0)) &&
              Ln(this, 1),
            !r &&
              !(u && !s) &&
              (h || s) &&
              (qt(this, h === c ? "onComplete" : "onReverseComplete", !0),
              this._prom && !(h < c && this.timeScale() > 0) && this._prom()));
      }
      return this;
    }),
    (t.targets = function () {
      return this._targets;
    }),
    (t.invalidate = function () {
      return (
        (this._pt =
          this._op =
          this._startAt =
          this._onUpdate =
          this._lazy =
          this.ratio =
            0),
        (this._ptLookup = []),
        this.timeline && this.timeline.invalidate(),
        o.prototype.invalidate.call(this)
      );
    }),
    (t.resetTo = function (i, r, a, s) {
      Pr || Dt.wake(), this._ts || this.play();
      var c = Math.min(this._dur, (this._dp._time - this._start) * this._ts),
        l;
      return (
        this._initted || go(this, c),
        (l = this._ease(c / this._dur)),
        F_(this, i, r, a, s, l, c)
          ? this.resetTo(i, r, a, s)
          : (Os(this, 0),
            this.parent ||
              nu(
                this._dp,
                this,
                "_first",
                "_last",
                this._dp._sort ? "_start" : 0
              ),
            this.render(0))
      );
    }),
    (t.kill = function (i, r) {
      if ((r === void 0 && (r = "all"), !i && (!r || r === "all")))
        return (this._lazy = this._pt = 0), this.parent ? xr(this) : this;
      if (this.timeline) {
        var a = this.timeline.totalDuration();
        return (
          this.timeline.killTweensOf(i, r, Gn && Gn.vars.overwrite !== !0)
            ._first || xr(this),
          this.parent &&
            a !== this.timeline.totalDuration() &&
            er(this, (this._dur * this.timeline._tDur) / a, 0, 1),
          this
        );
      }
      var s = this._targets,
        c = i ? Wt(i) : s,
        l = this._ptLookup,
        u = this._pt,
        h,
        f,
        m,
        g,
        d,
        p,
        _;
      if ((!r || r === "all") && h_(s, c))
        return r === "all" && (this._pt = 0), xr(this);
      for (
        h = this._op = this._op || [],
          r !== "all" &&
            (nt(r) &&
              ((d = {}),
              St(r, function (v) {
                return (d[v] = 1);
              }),
              (r = d)),
            (r = O_(s, r))),
          _ = s.length;
        _--;

      )
        if (~c.indexOf(s[_])) {
          (f = l[_]),
            r === "all"
              ? ((h[_] = r), (g = f), (m = {}))
              : ((m = h[_] = h[_] || {}), (g = r));
          for (d in g)
            (p = f && f[d]),
              p &&
                ((!("kill" in p.d) || p.d.kill(d) === !0) && zs(this, p, "_pt"),
                delete f[d]),
              m !== "all" && (m[d] = 1);
        }
      return this._initted && !this._pt && u && xr(this), this;
    }),
    (e.to = function (i, r) {
      return new e(i, r, arguments[2]);
    }),
    (e.from = function (i, r) {
      return br(1, arguments);
    }),
    (e.delayedCall = function (i, r, a, s) {
      return new e(r, 0, {
        immediateRender: !1,
        lazy: !1,
        overwrite: !1,
        delay: i,
        onComplete: r,
        onReverseComplete: r,
        onCompleteParams: a,
        onReverseCompleteParams: a,
        callbackScope: s,
      });
    }),
    (e.fromTo = function (i, r, a) {
      return br(2, arguments);
    }),
    (e.set = function (i, r) {
      return (r.duration = 0), r.repeatDelay || (r.repeat = 0), new e(i, r);
    }),
    (e.killTweensOf = function (i, r, a) {
      return Be.killTweensOf(i, r, a);
    }),
    e
  );
})(nr);
Zt(Je.prototype, { _targets: [], _lazy: 0, _startAt: 0, _op: 0, _onInit: 0 });
St("staggerTo,staggerFrom,staggerFromTo", function (o) {
  Je[o] = function () {
    var e = new vt(),
      t = Ya.call(arguments, 0);
    return t.splice(o === "staggerFromTo" ? 5 : 4, 0, 0), e[o].apply(e, t);
  };
});
var _o = function (e, t, n) {
    return (e[t] = n);
  },
  bu = function (e, t, n) {
    return e[t](n);
  },
  N_ = function (e, t, n, i) {
    return e[t](i.fp, n);
  },
  B_ = function (e, t, n) {
    return e.setAttribute(t, n);
  },
  xo = function (e, t) {
    return We(e[t]) ? bu : lo(e[t]) && e.setAttribute ? B_ : _o;
  },
  wu = function (e, t) {
    return t.set(t.t, t.p, Math.round((t.s + t.c * e) * 1e6) / 1e6, t);
  },
  k_ = function (e, t) {
    return t.set(t.t, t.p, !!(t.s + t.c * e), t);
  },
  Tu = function (e, t) {
    var n = t._pt,
      i = "";
    if (!e && t.b) i = t.b;
    else if (e === 1 && t.e) i = t.e;
    else {
      for (; n; )
        (i =
          n.p +
          (n.m ? n.m(n.s + n.c * e) : Math.round((n.s + n.c * e) * 1e4) / 1e4) +
          i),
          (n = n._next);
      i += t.c;
    }
    t.set(t.t, t.p, i, t);
  },
  vo = function (e, t) {
    for (var n = t._pt; n; ) n.r(e, n.d), (n = n._next);
  },
  V_ = function (e, t, n, i) {
    for (var r = this._pt, a; r; )
      (a = r._next), r.p === i && r.modifier(e, t, n), (r = a);
  },
  G_ = function (e) {
    for (var t = this._pt, n, i; t; )
      (i = t._next),
        (t.p === e && !t.op) || t.op === e
          ? zs(this, t, "_pt")
          : t.dep || (n = 1),
        (t = i);
    return !n;
  },
  H_ = function (e, t, n, i) {
    i.mSet(e, t, i.m.call(i.tween, n, i.mt), i);
  },
  Eu = function (e) {
    for (var t = e._pt, n, i, r, a; t; ) {
      for (n = t._next, i = r; i && i.pr > t.pr; ) i = i._next;
      (t._prev = i ? i._prev : a) ? (t._prev._next = t) : (r = t),
        (t._next = i) ? (i._prev = t) : (a = t),
        (t = n);
    }
    e._pt = r;
  },
  bt = (function () {
    function o(t, n, i, r, a, s, c, l, u) {
      (this.t = n),
        (this.s = r),
        (this.c = a),
        (this.p = i),
        (this.r = s || wu),
        (this.d = c || this),
        (this.set = l || _o),
        (this.pr = u || 0),
        (this._next = t),
        t && (t._prev = this);
    }
    var e = o.prototype;
    return (
      (e.modifier = function (n, i, r) {
        (this.mSet = this.mSet || this.set),
          (this.set = H_),
          (this.m = n),
          (this.mt = r),
          (this.tween = i);
      }),
      o
    );
  })();
St(
  fo +
    "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",
  function (o) {
    return (ho[o] = 1);
  }
);
It.TweenMax = It.TweenLite = Je;
It.TimelineLite = It.TimelineMax = vt;
Be = new vt({
  sortChildren: !1,
  defaults: Ji,
  autoRemoveChildren: !0,
  id: "root",
  smoothChildTiming: !0,
});
Rt.stringFilter = mu;
var ir = [],
  xs = {},
  W_ = [],
  ec = 0,
  Ea = function (e) {
    return (xs[e] || W_).map(function (t) {
      return t();
    });
  },
  Ka = function () {
    var e = Date.now(),
      t = [];
    e - ec > 2 &&
      (Ea("matchMediaInit"),
      ir.forEach(function (n) {
        var i = n.queries,
          r = n.conditions,
          a,
          s,
          c,
          l;
        for (s in i)
          (a = Bt.matchMedia(i[s]).matches),
            a && (c = 1),
            a !== r[s] && ((r[s] = a), (l = 1));
        l && (n.revert(), c && t.push(n));
      }),
      Ea("matchMediaRevert"),
      t.forEach(function (n) {
        return n.onMatch(n);
      }),
      (ec = e),
      Ea("matchMedia"));
  },
  Cu = (function () {
    function o(t, n) {
      (this.selector = n && ja(n)),
        (this.data = []),
        (this._r = []),
        (this.isReverted = !1),
        t && this.add(t);
    }
    var e = o.prototype;
    return (
      (e.add = function (n, i, r) {
        We(n) && ((r = i), (i = n), (n = We));
        var a = this,
          s = function () {
            var l = $e,
              u = a.selector,
              h;
            return (
              l && l !== a && l.data.push(a),
              r && (a.selector = ja(r)),
              ($e = a),
              (h = i.apply(a, arguments)),
              We(h) && a._r.push(h),
              ($e = l),
              (a.selector = u),
              (a.isReverted = !1),
              h
            );
          };
        return (a.last = s), n === We ? s(a) : n ? (a[n] = s) : s;
      }),
      (e.ignore = function (n) {
        var i = $e;
        ($e = null), n(this), ($e = i);
      }),
      (e.getTweens = function () {
        var n = [];
        return (
          this.data.forEach(function (i) {
            return i instanceof o
              ? n.push.apply(n, i.getTweens())
              : i instanceof Je && n.push(i);
          }),
          n
        );
      }),
      (e.clear = function () {
        this._r.length = this.data.length = 0;
      }),
      (e.kill = function (n, i) {
        var r = this;
        if (
          (n
            ? (this.getTweens()
                .map(function (s) {
                  return { g: s.globalTime(0), t: s };
                })
                .sort(function (s, c) {
                  return c.g - s.g || -1;
                })
                .forEach(function (s) {
                  return s.t.revert(n);
                }),
              this.data.forEach(function (s) {
                return !(s instanceof nr) && s.revert && s.revert(n);
              }),
              this._r.forEach(function (s) {
                return s(n, r);
              }),
              (this.isReverted = !0))
            : this.data.forEach(function (s) {
                return s.kill && s.kill();
              }),
          this.clear(),
          i)
        ) {
          var a = ir.indexOf(this);
          ~a && ir.splice(a, 1);
        }
      }),
      (e.revert = function (n) {
        this.kill(n || {});
      }),
      o
    );
  })(),
  q_ = (function () {
    function o(t) {
      (this.contexts = []), (this.scope = t);
    }
    var e = o.prototype;
    return (
      (e.add = function (n, i, r) {
        dn(n) || (n = { matches: n });
        var a = new Cu(0, r || this.scope),
          s = (a.conditions = {}),
          c,
          l,
          u;
        this.contexts.push(a), (i = a.add("onMatch", i)), (a.queries = n);
        for (l in n)
          l === "all"
            ? (u = 1)
            : ((c = Bt.matchMedia(n[l])),
              c &&
                (ir.indexOf(a) < 0 && ir.push(a),
                (s[l] = c.matches) && (u = 1),
                c.addListener
                  ? c.addListener(Ka)
                  : c.addEventListener("change", Ka)));
        return u && i(a), this;
      }),
      (e.revert = function (n) {
        this.kill(n || {});
      }),
      (e.kill = function (n) {
        this.contexts.forEach(function (i) {
          return i.kill(n, !0);
        });
      }),
      o
    );
  })(),
  Ts = {
    registerPlugin: function () {
      for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
        t[n] = arguments[n];
      t.forEach(function (i) {
        return E_(i);
      });
    },
    timeline: function (e) {
      return new vt(e);
    },
    getTweensOf: function (e, t) {
      return Be.getTweensOf(e, t);
    },
    getProperty: function (e, t, n, i) {
      nt(e) && (e = Wt(e)[0]);
      var r = di(e || {}).get,
        a = n ? tu : eu;
      return (
        n === "native" && (n = ""),
        e &&
          (t
            ? a(((Pt[t] && Pt[t].get) || r)(e, t, n, i))
            : function (s, c, l) {
                return a(((Pt[s] && Pt[s].get) || r)(e, s, c, l));
              })
      );
    },
    quickSetter: function (e, t, n) {
      if (((e = Wt(e)), e.length > 1)) {
        var i = e.map(function (u) {
            return zt.quickSetter(u, t, n);
          }),
          r = i.length;
        return function (u) {
          for (var h = r; h--; ) i[h](u);
        };
      }
      e = e[0] || {};
      var a = Pt[t],
        s = di(e),
        c = (s.harness && (s.harness.aliases || {})[t]) || t,
        l = a
          ? function (u) {
              var h = new a();
              (Vi._pt = 0),
                h.init(e, n ? u + n : u, Vi, 0, [e]),
                h.render(1, h),
                Vi._pt && vo(1, Vi);
            }
          : s.set(e, c);
      return a
        ? l
        : function (u) {
            return l(e, c, n ? u + n : u, s, 1);
          };
    },
    quickTo: function (e, t, n) {
      var i,
        r = zt.to(
          e,
          xi(((i = {}), (i[t] = "+=0.1"), (i.paused = !0), i), n || {})
        ),
        a = function (c, l, u) {
          return r.resetTo(t, c, l, u);
        };
      return (a.tween = r), a;
    },
    isTweening: function (e) {
      return Be.getTweensOf(e, !0).length > 0;
    },
    defaults: function (e) {
      return e && e.ease && (e.ease = mi(e.ease, Ji.ease)), Zl(Ji, e || {});
    },
    config: function (e) {
      return Zl(Rt, e || {});
    },
    registerEffect: function (e) {
      var t = e.name,
        n = e.effect,
        i = e.plugins,
        r = e.defaults,
        a = e.extendTimeline;
      (i || "").split(",").forEach(function (s) {
        return (
          s && !Pt[s] && !It[s] && Ms(t + " effect requires " + s + " plugin.")
        );
      }),
        (Sa[t] = function (s, c, l) {
          return n(Wt(s), Zt(c || {}, r), l);
        }),
        a &&
          (vt.prototype[t] = function (s, c, l) {
            return this.add(Sa[t](s, dn(c) ? c : (l = c) && {}, this), l);
          });
    },
    registerEase: function (e, t) {
      Te[e] = mi(t);
    },
    parseEase: function (e, t) {
      return arguments.length ? mi(e, t) : Te;
    },
    getById: function (e) {
      return Be.getById(e);
    },
    exportRoot: function (e, t) {
      e === void 0 && (e = {});
      var n = new vt(e),
        i,
        r;
      for (
        n.smoothChildTiming = Mt(e.smoothChildTiming),
          Be.remove(n),
          n._dp = 0,
          n._time = n._tTime = Be._time,
          i = Be._first;
        i;

      )
        (r = i._next),
          (t ||
            !(
              !i._dur &&
              i instanceof Je &&
              i.vars.onComplete === i._targets[0]
            )) &&
            cn(n, i, i._start - i._delay),
          (i = r);
      return cn(Be, n, 0), n;
    },
    context: function (e, t) {
      return e ? new Cu(e, t) : $e;
    },
    matchMedia: function (e) {
      return new q_(e);
    },
    matchMediaRefresh: function () {
      return (
        ir.forEach(function (e) {
          var t = e.conditions,
            n,
            i;
          for (i in t) t[i] && ((t[i] = !1), (n = 1));
          n && e.revert();
        }) || Ka()
      );
    },
    addEventListener: function (e, t) {
      var n = xs[e] || (xs[e] = []);
      ~n.indexOf(t) || n.push(t);
    },
    removeEventListener: function (e, t) {
      var n = xs[e],
        i = n && n.indexOf(t);
      i >= 0 && n.splice(i, 1);
    },
    utils: {
      wrap: b_,
      wrapYoyo: w_,
      distribute: lu,
      random: uu,
      snap: cu,
      normalize: S_,
      getUnit: ct,
      clamp: x_,
      splitColor: du,
      toArray: Wt,
      selector: ja,
      mapRange: fu,
      pipe: y_,
      unitize: M_,
      interpolate: T_,
      shuffle: ou,
    },
    install: Zc,
    effects: Sa,
    ticker: Dt,
    updateRoot: vt.updateRoot,
    plugins: Pt,
    globalTimeline: Be,
    core: {
      PropTween: bt,
      globals: $c,
      Tween: Je,
      Timeline: vt,
      Animation: nr,
      getCache: di,
      _removeLinkedListItem: zs,
      reverting: function () {
        return Yt;
      },
      context: function (e) {
        return e && $e && ($e.data.push(e), (e._ctx = $e)), $e;
      },
      suppressOverwrites: function (e) {
        return (oo = e);
      },
    },
  };
St("to,from,fromTo,delayedCall,set,killTweensOf", function (o) {
  return (Ts[o] = Je[o]);
});
Dt.add(vt.updateRoot);
Vi = Ts.to({}, { duration: 0 });
var X_ = function (e, t) {
    for (var n = e._pt; n && n.p !== t && n.op !== t && n.fp !== t; )
      n = n._next;
    return n;
  },
  Y_ = function (e, t) {
    var n = e._targets,
      i,
      r,
      a;
    for (i in t)
      for (r = n.length; r--; )
        (a = e._ptLookup[r][i]),
          a &&
            (a = a.d) &&
            (a._pt && (a = X_(a, i)),
            a && a.modifier && a.modifier(t[i], e, n[r], i));
  },
  Ca = function (e, t) {
    return {
      name: e,
      rawVars: 1,
      init: function (i, r, a) {
        a._onInit = function (s) {
          var c, l;
          if (
            (nt(r) &&
              ((c = {}),
              St(r, function (u) {
                return (c[u] = 1);
              }),
              (r = c)),
            t)
          ) {
            c = {};
            for (l in r) c[l] = t(r[l]);
            r = c;
          }
          Y_(s, r);
        };
      },
    };
  },
  zt =
    Ts.registerPlugin(
      {
        name: "attr",
        init: function (e, t, n, i, r) {
          var a, s, c;
          this.tween = n;
          for (a in t)
            (c = e.getAttribute(a) || ""),
              (s = this.add(
                e,
                "setAttribute",
                (c || 0) + "",
                t[a],
                i,
                r,
                0,
                0,
                a
              )),
              (s.op = a),
              (s.b = c),
              this._props.push(a);
        },
        render: function (e, t) {
          for (var n = t._pt; n; )
            Yt ? n.set(n.t, n.p, n.b, n) : n.r(e, n.d), (n = n._next);
        },
      },
      {
        name: "endArray",
        init: function (e, t) {
          for (var n = t.length; n--; )
            this.add(e, n, e[n] || 0, t[n], 0, 0, 0, 0, 0, 1);
        },
      },
      Ca("roundProps", Za),
      Ca("modifiers"),
      Ca("snap", cu)
    ) || Ts;
Je.version = vt.version = zt.version = "3.11.1";
jc = 1;
Hc() && tr();
Te.Power0;
Te.Power1;
Te.Power2;
Te.Power3;
Te.Power4;
Te.Linear;
Te.Quad;
Te.Cubic;
Te.Quart;
Te.Quint;
Te.Strong;
Te.Elastic;
Te.Back;
Te.SteppedEase;
Te.Bounce;
Te.Sine;
Te.Expo;
Te.Circ;
/*!
 * CSSPlugin 3.11.1
 * https://greensock.com
 *
 * Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */ var tc,
  Hn,
  qi,
  yo,
  ui,
  nc,
  Mo,
  j_ = function () {
    return typeof window < "u";
  },
  Dn = {},
  si = 180 / Math.PI,
  Xi = Math.PI / 180,
  Ui = Math.atan2,
  ic = 1e8,
  So = /([A-Z])/g,
  Z_ = /(left|right|width|margin|padding|x)/i,
  $_ = /[\s,\(]\S/,
  Cn = {
    autoAlpha: "opacity,visibility",
    scale: "scaleX,scaleY",
    alpha: "opacity",
  },
  Ja = function (e, t) {
    return t.set(t.t, t.p, Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u, t);
  },
  K_ = function (e, t) {
    return t.set(
      t.t,
      t.p,
      e === 1 ? t.e : Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u,
      t
    );
  },
  J_ = function (e, t) {
    return t.set(
      t.t,
      t.p,
      e ? Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u : t.b,
      t
    );
  },
  Q_ = function (e, t) {
    var n = t.s + t.c * e;
    t.set(t.t, t.p, ~~(n + (n < 0 ? -0.5 : 0.5)) + t.u, t);
  },
  Au = function (e, t) {
    return t.set(t.t, t.p, e ? t.e : t.b, t);
  },
  Pu = function (e, t) {
    return t.set(t.t, t.p, e !== 1 ? t.b : t.e, t);
  },
  e0 = function (e, t, n) {
    return (e.style[t] = n);
  },
  t0 = function (e, t, n) {
    return e.style.setProperty(t, n);
  },
  n0 = function (e, t, n) {
    return (e._gsap[t] = n);
  },
  i0 = function (e, t, n) {
    return (e._gsap.scaleX = e._gsap.scaleY = n);
  },
  r0 = function (e, t, n, i, r) {
    var a = e._gsap;
    (a.scaleX = a.scaleY = n), a.renderTransform(r, a);
  },
  s0 = function (e, t, n, i, r) {
    var a = e._gsap;
    (a[t] = n), a.renderTransform(r, a);
  },
  He = "transform",
  rn = He + "Origin",
  a0 = function (e) {
    var t = this,
      n = this.target,
      i = n.style;
    if (e in Dn) {
      if (
        ((this.tfm = this.tfm || {}),
        e !== "transform" &&
          ((e = Cn[e] || e),
          ~e.indexOf(",")
            ? e.split(",").forEach(function (r) {
                return (t.tfm[r] = wn(n, r));
              })
            : (this.tfm[e] = n._gsap.x ? n._gsap[e] : wn(n, e))),
        this.props.indexOf(He) >= 0)
      )
        return;
      n._gsap.svg &&
        ((this.svgo = n.getAttribute("data-svg-origin")),
        this.props.push(rn, "")),
        (e = He);
    }
    i && this.props.push(e, i[e]);
  },
  Lu = function (e) {
    e.translate &&
      (e.removeProperty("translate"),
      e.removeProperty("scale"),
      e.removeProperty("rotate"));
  },
  o0 = function () {
    var e = this.props,
      t = this.target,
      n = t.style,
      i = t._gsap,
      r,
      a;
    for (r = 0; r < e.length; r += 2)
      e[r + 1]
        ? (n[e[r]] = e[r + 1])
        : n.removeProperty(e[r].replace(So, "-$1").toLowerCase());
    if (this.tfm) {
      for (a in this.tfm) i[a] = this.tfm[a];
      i.svg &&
        (i.renderTransform(),
        t.setAttribute("data-svg-origin", this.svgo || "")),
        (r = Mo()),
        r && !r.isStart && !n[He] && (Lu(n), (i.uncache = 1));
    }
  },
  Du = function (e, t) {
    var n = { target: e, props: [], revert: o0, save: a0 };
    return (
      t &&
        t.split(",").forEach(function (i) {
          return n.save(i);
        }),
      n
    );
  },
  Ru,
  Qa = function (e, t) {
    var n = Hn.createElementNS
      ? Hn.createElementNS(
          (t || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"),
          e
        )
      : Hn.createElement(e);
    return n.style ? n : Hn.createElement(e);
  },
  fn = function o(e, t, n) {
    var i = getComputedStyle(e);
    return (
      i[t] ||
      i.getPropertyValue(t.replace(So, "-$1").toLowerCase()) ||
      i.getPropertyValue(t) ||
      (!n && o(e, rr(t) || t, 1)) ||
      ""
    );
  },
  rc = "O,Moz,ms,Ms,Webkit".split(","),
  rr = function (e, t, n) {
    var i = t || ui,
      r = i.style,
      a = 5;
    if (e in r && !n) return e;
    for (
      e = e.charAt(0).toUpperCase() + e.substr(1);
      a-- && !(rc[a] + e in r);

    );
    return a < 0 ? null : (a === 3 ? "ms" : a >= 0 ? rc[a] : "") + e;
  },
  eo = function () {
    j_() &&
      window.document &&
      ((tc = window),
      (Hn = tc.document),
      (qi = Hn.documentElement),
      (ui = Qa("div") || { style: {} }),
      Qa("div"),
      (He = rr(He)),
      (rn = He + "Origin"),
      (ui.style.cssText =
        "border-width:0;line-height:0;position:absolute;padding:0"),
      (Ru = !!rr("perspective")),
      (Mo = zt.core.reverting),
      (yo = 1));
  },
  Aa = function o(e) {
    var t = Qa(
        "svg",
        (this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns")) ||
          "http://www.w3.org/2000/svg"
      ),
      n = this.parentNode,
      i = this.nextSibling,
      r = this.style.cssText,
      a;
    if (
      (qi.appendChild(t),
      t.appendChild(this),
      (this.style.display = "block"),
      e)
    )
      try {
        (a = this.getBBox()),
          (this._gsapBBox = this.getBBox),
          (this.getBBox = o);
      } catch {}
    else this._gsapBBox && (a = this._gsapBBox());
    return (
      n && (i ? n.insertBefore(this, i) : n.appendChild(this)),
      qi.removeChild(t),
      (this.style.cssText = r),
      a
    );
  },
  sc = function (e, t) {
    for (var n = t.length; n--; )
      if (e.hasAttribute(t[n])) return e.getAttribute(t[n]);
  },
  Iu = function (e) {
    var t;
    try {
      t = e.getBBox();
    } catch {
      t = Aa.call(e, !0);
    }
    return (
      (t && (t.width || t.height)) || e.getBBox === Aa || (t = Aa.call(e, !0)),
      t && !t.width && !t.x && !t.y
        ? {
            x: +sc(e, ["x", "cx", "x1"]) || 0,
            y: +sc(e, ["y", "cy", "y1"]) || 0,
            width: 0,
            height: 0,
          }
        : t
    );
  },
  zu = function (e) {
    return !!(e.getCTM && (!e.parentNode || e.ownerSVGElement) && Iu(e));
  },
  Lr = function (e, t) {
    if (t) {
      var n = e.style;
      t in Dn && t !== rn && (t = He),
        n.removeProperty
          ? ((t.substr(0, 2) === "ms" || t.substr(0, 6) === "webkit") &&
              (t = "-" + t),
            n.removeProperty(t.replace(So, "-$1").toLowerCase()))
          : n.removeAttribute(t);
    }
  },
  Wn = function (e, t, n, i, r, a) {
    var s = new bt(e._pt, t, n, 0, 1, a ? Pu : Au);
    return (e._pt = s), (s.b = i), (s.e = r), e._props.push(n), s;
  },
  ac = { deg: 1, rad: 1, turn: 1 },
  l0 = { grid: 1, flex: 1 },
  jn = function o(e, t, n, i) {
    var r = parseFloat(n) || 0,
      a = (n + "").trim().substr((r + "").length) || "px",
      s = ui.style,
      c = Z_.test(t),
      l = e.tagName.toLowerCase() === "svg",
      u = (l ? "client" : "offset") + (c ? "Width" : "Height"),
      h = 100,
      f = i === "px",
      m = i === "%",
      g,
      d,
      p,
      _;
    return i === a || !r || ac[i] || ac[a]
      ? r
      : (a !== "px" && !f && (r = o(e, t, n, "px")),
        (_ = e.getCTM && zu(e)),
        (m || a === "%") && (Dn[t] || ~t.indexOf("adius"))
          ? ((g = _ ? e.getBBox()[c ? "width" : "height"] : e[u]),
            Ye(m ? (r / g) * h : (r / 100) * g))
          : ((s[c ? "width" : "height"] = h + (f ? a : i)),
            (d =
              ~t.indexOf("adius") || (i === "em" && e.appendChild && !l)
                ? e
                : e.parentNode),
            _ && (d = (e.ownerSVGElement || {}).parentNode),
            (!d || d === Hn || !d.appendChild) && (d = Hn.body),
            (p = d._gsap),
            p && m && p.width && c && p.time === Dt.time && !p.uncache
              ? Ye((r / p.width) * h)
              : ((m || a === "%") &&
                  !l0[fn(d, "display")] &&
                  (s.position = fn(e, "position")),
                d === e && (s.position = "static"),
                d.appendChild(ui),
                (g = ui[u]),
                d.removeChild(ui),
                (s.position = "absolute"),
                c && m && ((p = di(d)), (p.time = Dt.time), (p.width = d[u])),
                Ye(f ? (g * r) / h : g && r ? (h / g) * r : 0))));
  },
  wn = function (e, t, n, i) {
    var r;
    return (
      yo || eo(),
      t in Cn &&
        t !== "transform" &&
        ((t = Cn[t]), ~t.indexOf(",") && (t = t.split(",")[0])),
      Dn[t] && t !== "transform"
        ? ((r = Rr(e, i)),
          (r =
            t !== "transformOrigin"
              ? r[t]
              : r.svg
              ? r.origin
              : Cs(fn(e, rn)) + " " + r.zOrigin + "px"))
        : ((r = e.style[t]),
          (!r || r === "auto" || i || ~(r + "").indexOf("calc(")) &&
            (r =
              (Es[t] && Es[t](e, t, n)) ||
              fn(e, t) ||
              Jc(e, t) ||
              (t === "opacity" ? 1 : 0))),
      n && !~(r + "").trim().indexOf(" ") ? jn(e, t, r, n) + n : r
    );
  },
  c0 = function (e, t, n, i) {
    if (!n || n === "none") {
      var r = rr(t, e, 1),
        a = r && fn(e, r, 1);
      a && a !== n
        ? ((t = r), (n = a))
        : t === "borderColor" && (n = fn(e, "borderTopColor"));
    }
    var s = new bt(this._pt, e.style, t, 0, 1, Tu),
      c = 0,
      l = 0,
      u,
      h,
      f,
      m,
      g,
      d,
      p,
      _,
      v,
      S,
      M,
      y;
    if (
      ((s.b = n),
      (s.e = i),
      (n += ""),
      (i += ""),
      i === "auto" && ((e.style[t] = i), (i = fn(e, t) || i), (e.style[t] = n)),
      (u = [n, i]),
      mu(u),
      (n = u[0]),
      (i = u[1]),
      (f = n.match(ki) || []),
      (y = i.match(ki) || []),
      y.length)
    ) {
      for (; (h = ki.exec(i)); )
        (p = h[0]),
          (v = i.substring(c, h.index)),
          g
            ? (g = (g + 1) % 5)
            : (v.substr(-5) === "rgba(" || v.substr(-5) === "hsla(") && (g = 1),
          p !== (d = f[l++] || "") &&
            ((m = parseFloat(d) || 0),
            (M = d.substr((m + "").length)),
            p.charAt(1) === "=" && (p = Wi(m, p) + M),
            (_ = parseFloat(p)),
            (S = p.substr((_ + "").length)),
            (c = ki.lastIndex - S.length),
            S ||
              ((S = S || Rt.units[t] || M),
              c === i.length && ((i += S), (s.e += S))),
            M !== S && (m = jn(e, t, d, S) || 0),
            (s._pt = {
              _next: s._pt,
              p: v || l === 1 ? v : ",",
              s: m,
              c: _ - m,
              m: (g && g < 4) || t === "zIndex" ? Math.round : 0,
            }));
      s.c = c < i.length ? i.substring(c, i.length) : "";
    } else s.r = t === "display" && i === "none" ? Pu : Au;
    return Xc.test(i) && (s.e = 0), (this._pt = s), s;
  },
  oc = { top: "0%", bottom: "100%", left: "0%", right: "100%", center: "50%" },
  u0 = function (e) {
    var t = e.split(" "),
      n = t[0],
      i = t[1] || "50%";
    return (
      (n === "top" || n === "bottom" || i === "left" || i === "right") &&
        ((e = n), (n = i), (i = e)),
      (t[0] = oc[n] || n),
      (t[1] = oc[i] || i),
      t.join(" ")
    );
  },
  h0 = function (e, t) {
    if (t.tween && t.tween._time === t.tween._dur) {
      var n = t.t,
        i = n.style,
        r = t.u,
        a = n._gsap,
        s,
        c,
        l;
      if (r === "all" || r === !0) (i.cssText = ""), (c = 1);
      else
        for (r = r.split(","), l = r.length; --l > -1; )
          (s = r[l]),
            Dn[s] && ((c = 1), (s = s === "transformOrigin" ? rn : He)),
            Lr(n, s);
      c &&
        (Lr(n, He),
        a &&
          (a.svg && n.removeAttribute("transform"),
          Rr(n, 1),
          (a.uncache = 1),
          Lu(i)));
    }
  },
  Es = {
    clearProps: function (e, t, n, i, r) {
      if (r.data !== "isFromStart") {
        var a = (e._pt = new bt(e._pt, t, n, 0, 0, h0));
        return (a.u = i), (a.pr = -10), (a.tween = r), e._props.push(n), 1;
      }
    },
  },
  Dr = [1, 0, 0, 1, 0, 0],
  Fu = {},
  Ou = function (e) {
    return e === "matrix(1, 0, 0, 1, 0, 0)" || e === "none" || !e;
  },
  lc = function (e) {
    var t = fn(e, He);
    return Ou(t) ? Dr : t.substr(7).match(qc).map(Ye);
  },
  bo = function (e, t) {
    var n = e._gsap || di(e),
      i = e.style,
      r = lc(e),
      a,
      s,
      c,
      l;
    return n.svg && e.getAttribute("transform")
      ? ((c = e.transform.baseVal.consolidate().matrix),
        (r = [c.a, c.b, c.c, c.d, c.e, c.f]),
        r.join(",") === "1,0,0,1,0,0" ? Dr : r)
      : (r === Dr &&
          !e.offsetParent &&
          e !== qi &&
          !n.svg &&
          ((c = i.display),
          (i.display = "block"),
          (a = e.parentNode),
          (!a || !e.offsetParent) &&
            ((l = 1), (s = e.nextElementSibling), qi.appendChild(e)),
          (r = lc(e)),
          c ? (i.display = c) : Lr(e, "display"),
          l &&
            (s
              ? a.insertBefore(e, s)
              : a
              ? a.appendChild(e)
              : qi.removeChild(e))),
        t && r.length > 6 ? [r[0], r[1], r[4], r[5], r[12], r[13]] : r);
  },
  to = function (e, t, n, i, r, a) {
    var s = e._gsap,
      c = r || bo(e, !0),
      l = s.xOrigin || 0,
      u = s.yOrigin || 0,
      h = s.xOffset || 0,
      f = s.yOffset || 0,
      m = c[0],
      g = c[1],
      d = c[2],
      p = c[3],
      _ = c[4],
      v = c[5],
      S = t.split(" "),
      M = parseFloat(S[0]) || 0,
      y = parseFloat(S[1]) || 0,
      E,
      A,
      x,
      w;
    n
      ? c !== Dr &&
        (A = m * p - g * d) &&
        ((x = M * (p / A) + y * (-d / A) + (d * v - p * _) / A),
        (w = M * (-g / A) + y * (m / A) - (m * v - g * _) / A),
        (M = x),
        (y = w))
      : ((E = Iu(e)),
        (M = E.x + (~S[0].indexOf("%") ? (M / 100) * E.width : M)),
        (y = E.y + (~(S[1] || S[0]).indexOf("%") ? (y / 100) * E.height : y))),
      i || (i !== !1 && s.smooth)
        ? ((_ = M - l),
          (v = y - u),
          (s.xOffset = h + (_ * m + v * d) - _),
          (s.yOffset = f + (_ * g + v * p) - v))
        : (s.xOffset = s.yOffset = 0),
      (s.xOrigin = M),
      (s.yOrigin = y),
      (s.smooth = !!i),
      (s.origin = t),
      (s.originIsAbsolute = !!n),
      (e.style[rn] = "0px 0px"),
      a &&
        (Wn(a, s, "xOrigin", l, M),
        Wn(a, s, "yOrigin", u, y),
        Wn(a, s, "xOffset", h, s.xOffset),
        Wn(a, s, "yOffset", f, s.yOffset)),
      e.setAttribute("data-svg-origin", M + " " + y);
  },
  Rr = function (e, t) {
    var n = e._gsap || new vu(e);
    if ("x" in n && !t && !n.uncache) return n;
    var i = e.style,
      r = n.scaleX < 0,
      a = "px",
      s = "deg",
      c = getComputedStyle(e),
      l = fn(e, rn) || "0",
      u,
      h,
      f,
      m,
      g,
      d,
      p,
      _,
      v,
      S,
      M,
      y,
      E,
      A,
      x,
      w,
      P,
      W,
      K,
      O,
      D,
      B,
      Y,
      X,
      k,
      z,
      U,
      J,
      Z,
      $,
      ie,
      de;
    return (
      (u = h = f = d = p = _ = v = S = M = 0),
      (m = g = 1),
      (n.svg = !!(e.getCTM && zu(e))),
      c.translate &&
        ((c.translate !== "none" ||
          c.scale !== "none" ||
          c.rotate !== "none") &&
          (i[He] =
            (c.translate !== "none"
              ? "translate3d(" +
                (c.translate + " 0 0").split(" ").slice(0, 3).join(", ") +
                ") "
              : "") +
            (c.rotate !== "none" ? "rotate(" + c.rotate + ") " : "") +
            (c.scale !== "none"
              ? "scale(" + c.scale.split(" ").join(",") + ") "
              : "") +
            c[He]),
        (i.scale = i.rotate = i.translate = "none")),
      (A = bo(e, n.svg)),
      n.svg &&
        (n.uncache
          ? ((k = e.getBBox()),
            (l = n.xOrigin - k.x + "px " + (n.yOrigin - k.y) + "px"),
            (X = ""))
          : (X = !t && e.getAttribute("data-svg-origin")),
        to(e, X || l, !!X || n.originIsAbsolute, n.smooth !== !1, A)),
      (y = n.xOrigin || 0),
      (E = n.yOrigin || 0),
      A !== Dr &&
        ((W = A[0]),
        (K = A[1]),
        (O = A[2]),
        (D = A[3]),
        (u = B = A[4]),
        (h = Y = A[5]),
        A.length === 6
          ? ((m = Math.sqrt(W * W + K * K)),
            (g = Math.sqrt(D * D + O * O)),
            (d = W || K ? Ui(K, W) * si : 0),
            (v = O || D ? Ui(O, D) * si + d : 0),
            v && (g *= Math.abs(Math.cos(v * Xi))),
            n.svg && ((u -= y - (y * W + E * O)), (h -= E - (y * K + E * D))))
          : ((de = A[6]),
            ($ = A[7]),
            (U = A[8]),
            (J = A[9]),
            (Z = A[10]),
            (ie = A[11]),
            (u = A[12]),
            (h = A[13]),
            (f = A[14]),
            (x = Ui(de, Z)),
            (p = x * si),
            x &&
              ((w = Math.cos(-x)),
              (P = Math.sin(-x)),
              (X = B * w + U * P),
              (k = Y * w + J * P),
              (z = de * w + Z * P),
              (U = B * -P + U * w),
              (J = Y * -P + J * w),
              (Z = de * -P + Z * w),
              (ie = $ * -P + ie * w),
              (B = X),
              (Y = k),
              (de = z)),
            (x = Ui(-O, Z)),
            (_ = x * si),
            x &&
              ((w = Math.cos(-x)),
              (P = Math.sin(-x)),
              (X = W * w - U * P),
              (k = K * w - J * P),
              (z = O * w - Z * P),
              (ie = D * P + ie * w),
              (W = X),
              (K = k),
              (O = z)),
            (x = Ui(K, W)),
            (d = x * si),
            x &&
              ((w = Math.cos(x)),
              (P = Math.sin(x)),
              (X = W * w + K * P),
              (k = B * w + Y * P),
              (K = K * w - W * P),
              (Y = Y * w - B * P),
              (W = X),
              (B = k)),
            p &&
              Math.abs(p) + Math.abs(d) > 359.9 &&
              ((p = d = 0), (_ = 180 - _)),
            (m = Ye(Math.sqrt(W * W + K * K + O * O))),
            (g = Ye(Math.sqrt(Y * Y + de * de))),
            (x = Ui(B, Y)),
            (v = Math.abs(x) > 2e-4 ? x * si : 0),
            (M = ie ? 1 / (ie < 0 ? -ie : ie) : 0)),
        n.svg &&
          ((X = e.getAttribute("transform")),
          (n.forceCSS = e.setAttribute("transform", "") || !Ou(fn(e, He))),
          X && e.setAttribute("transform", X))),
      Math.abs(v) > 90 &&
        Math.abs(v) < 270 &&
        (r
          ? ((m *= -1), (v += d <= 0 ? 180 : -180), (d += d <= 0 ? 180 : -180))
          : ((g *= -1), (v += v <= 0 ? 180 : -180))),
      (t = t || n.uncache),
      (n.x =
        u -
        ((n.xPercent =
          u &&
          ((!t && n.xPercent) ||
            (Math.round(e.offsetWidth / 2) === Math.round(-u) ? -50 : 0)))
          ? (e.offsetWidth * n.xPercent) / 100
          : 0) +
        a),
      (n.y =
        h -
        ((n.yPercent =
          h &&
          ((!t && n.yPercent) ||
            (Math.round(e.offsetHeight / 2) === Math.round(-h) ? -50 : 0)))
          ? (e.offsetHeight * n.yPercent) / 100
          : 0) +
        a),
      (n.z = f + a),
      (n.scaleX = Ye(m)),
      (n.scaleY = Ye(g)),
      (n.rotation = Ye(d) + s),
      (n.rotationX = Ye(p) + s),
      (n.rotationY = Ye(_) + s),
      (n.skewX = v + s),
      (n.skewY = S + s),
      (n.transformPerspective = M + a),
      (n.zOrigin = parseFloat(l.split(" ")[2]) || 0) && (i[rn] = Cs(l)),
      (n.xOffset = n.yOffset = 0),
      (n.force3D = Rt.force3D),
      (n.renderTransform = n.svg ? d0 : Ru ? Uu : f0),
      (n.uncache = 0),
      n
    );
  },
  Cs = function (e) {
    return (e = e.split(" "))[0] + " " + e[1];
  },
  Pa = function (e, t, n) {
    var i = ct(t);
    return Ye(parseFloat(t) + parseFloat(jn(e, "x", n + "px", i))) + i;
  },
  f0 = function (e, t) {
    (t.z = "0px"),
      (t.rotationY = t.rotationX = "0deg"),
      (t.force3D = 0),
      Uu(e, t);
  },
  ti = "0deg",
  mr = "0px",
  ni = ") ",
  Uu = function (e, t) {
    var n = t || this,
      i = n.xPercent,
      r = n.yPercent,
      a = n.x,
      s = n.y,
      c = n.z,
      l = n.rotation,
      u = n.rotationY,
      h = n.rotationX,
      f = n.skewX,
      m = n.skewY,
      g = n.scaleX,
      d = n.scaleY,
      p = n.transformPerspective,
      _ = n.force3D,
      v = n.target,
      S = n.zOrigin,
      M = "",
      y = (_ === "auto" && e && e !== 1) || _ === !0;
    if (S && (h !== ti || u !== ti)) {
      var E = parseFloat(u) * Xi,
        A = Math.sin(E),
        x = Math.cos(E),
        w;
      (E = parseFloat(h) * Xi),
        (w = Math.cos(E)),
        (a = Pa(v, a, A * w * -S)),
        (s = Pa(v, s, -Math.sin(E) * -S)),
        (c = Pa(v, c, x * w * -S + S));
    }
    p !== mr && (M += "perspective(" + p + ni),
      (i || r) && (M += "translate(" + i + "%, " + r + "%) "),
      (y || a !== mr || s !== mr || c !== mr) &&
        (M +=
          c !== mr || y
            ? "translate3d(" + a + ", " + s + ", " + c + ") "
            : "translate(" + a + ", " + s + ni),
      l !== ti && (M += "rotate(" + l + ni),
      u !== ti && (M += "rotateY(" + u + ni),
      h !== ti && (M += "rotateX(" + h + ni),
      (f !== ti || m !== ti) && (M += "skew(" + f + ", " + m + ni),
      (g !== 1 || d !== 1) && (M += "scale(" + g + ", " + d + ni),
      (v.style[He] = M || "translate(0, 0)");
  },
  d0 = function (e, t) {
    var n = t || this,
      i = n.xPercent,
      r = n.yPercent,
      a = n.x,
      s = n.y,
      c = n.rotation,
      l = n.skewX,
      u = n.skewY,
      h = n.scaleX,
      f = n.scaleY,
      m = n.target,
      g = n.xOrigin,
      d = n.yOrigin,
      p = n.xOffset,
      _ = n.yOffset,
      v = n.forceCSS,
      S = parseFloat(a),
      M = parseFloat(s),
      y,
      E,
      A,
      x,
      w;
    (c = parseFloat(c)),
      (l = parseFloat(l)),
      (u = parseFloat(u)),
      u && ((u = parseFloat(u)), (l += u), (c += u)),
      c || l
        ? ((c *= Xi),
          (l *= Xi),
          (y = Math.cos(c) * h),
          (E = Math.sin(c) * h),
          (A = Math.sin(c - l) * -f),
          (x = Math.cos(c - l) * f),
          l &&
            ((u *= Xi),
            (w = Math.tan(l - u)),
            (w = Math.sqrt(1 + w * w)),
            (A *= w),
            (x *= w),
            u &&
              ((w = Math.tan(u)),
              (w = Math.sqrt(1 + w * w)),
              (y *= w),
              (E *= w))),
          (y = Ye(y)),
          (E = Ye(E)),
          (A = Ye(A)),
          (x = Ye(x)))
        : ((y = h), (x = f), (E = A = 0)),
      ((S && !~(a + "").indexOf("px")) || (M && !~(s + "").indexOf("px"))) &&
        ((S = jn(m, "x", a, "px")), (M = jn(m, "y", s, "px"))),
      (g || d || p || _) &&
        ((S = Ye(S + g - (g * y + d * A) + p)),
        (M = Ye(M + d - (g * E + d * x) + _))),
      (i || r) &&
        ((w = m.getBBox()),
        (S = Ye(S + (i / 100) * w.width)),
        (M = Ye(M + (r / 100) * w.height))),
      (w =
        "matrix(" + y + "," + E + "," + A + "," + x + "," + S + "," + M + ")"),
      m.setAttribute("transform", w),
      v && (m.style[He] = w);
  },
  p0 = function (e, t, n, i, r) {
    var a = 360,
      s = nt(r),
      c = parseFloat(r) * (s && ~r.indexOf("rad") ? si : 1),
      l = c - i,
      u = i + l + "deg",
      h,
      f;
    return (
      s &&
        ((h = r.split("_")[1]),
        h === "short" && ((l %= a), l !== l % (a / 2) && (l += l < 0 ? a : -a)),
        h === "cw" && l < 0
          ? (l = ((l + a * ic) % a) - ~~(l / a) * a)
          : h === "ccw" && l > 0 && (l = ((l - a * ic) % a) - ~~(l / a) * a)),
      (e._pt = f = new bt(e._pt, t, n, i, l, K_)),
      (f.e = u),
      (f.u = "deg"),
      e._props.push(n),
      f
    );
  },
  cc = function (e, t) {
    for (var n in t) e[n] = t[n];
    return e;
  },
  m0 = function (e, t, n) {
    var i = cc({}, n._gsap),
      r = "perspective,force3D,transformOrigin,svgOrigin",
      a = n.style,
      s,
      c,
      l,
      u,
      h,
      f,
      m,
      g;
    i.svg
      ? ((l = n.getAttribute("transform")),
        n.setAttribute("transform", ""),
        (a[He] = t),
        (s = Rr(n, 1)),
        Lr(n, He),
        n.setAttribute("transform", l))
      : ((l = getComputedStyle(n)[He]),
        (a[He] = t),
        (s = Rr(n, 1)),
        (a[He] = l));
    for (c in Dn)
      (l = i[c]),
        (u = s[c]),
        l !== u &&
          r.indexOf(c) < 0 &&
          ((m = ct(l)),
          (g = ct(u)),
          (h = m !== g ? jn(n, c, l, g) : parseFloat(l)),
          (f = parseFloat(u)),
          (e._pt = new bt(e._pt, s, c, h, f - h, Ja)),
          (e._pt.u = g || 0),
          e._props.push(c));
    cc(s, i);
  };
St("padding,margin,Width,Radius", function (o, e) {
  var t = "Top",
    n = "Right",
    i = "Bottom",
    r = "Left",
    a = (e < 3 ? [t, n, i, r] : [t + r, t + n, i + n, i + r]).map(function (s) {
      return e < 2 ? o + s : "border" + s + o;
    });
  Es[e > 1 ? "border" + o : o] = function (s, c, l, u, h) {
    var f, m;
    if (arguments.length < 4)
      return (
        (f = a.map(function (g) {
          return wn(s, g, l);
        })),
        (m = f.join(" ")),
        m.split(f[0]).length === 5 ? f[0] : m
      );
    (f = (u + "").split(" ")),
      (m = {}),
      a.forEach(function (g, d) {
        return (m[g] = f[d] = f[d] || f[((d - 1) / 2) | 0]);
      }),
      s.init(c, m, h);
  };
});
var Nu = {
  name: "css",
  register: eo,
  targetTest: function (e) {
    return e.style && e.nodeType;
  },
  init: function (e, t, n, i, r) {
    var a = this._props,
      s = e.style,
      c = n.vars.startAt,
      l,
      u,
      h,
      f,
      m,
      g,
      d,
      p,
      _,
      v,
      S,
      M,
      y,
      E,
      A,
      x;
    yo || eo(),
      (this.styles = this.styles || Du(e)),
      (x = this.styles.props),
      (this.tween = n);
    for (d in t)
      if (d !== "autoRound" && ((u = t[d]), !(Pt[d] && yu(d, t, n, i, e, r)))) {
        if (
          ((m = typeof u),
          (g = Es[d]),
          m === "function" && ((u = u.call(n, i, e, r)), (m = typeof u)),
          m === "string" && ~u.indexOf("random(") && (u = Ar(u)),
          g)
        )
          g(this, e, d, u, n) && (A = 1);
        else if (d.substr(0, 2) === "--")
          (l = (getComputedStyle(e).getPropertyValue(d) + "").trim()),
            (u += ""),
            (Yn.lastIndex = 0),
            Yn.test(l) || ((p = ct(l)), (_ = ct(u))),
            _ ? p !== _ && (l = jn(e, d, l, _) + _) : p && (u += p),
            this.add(s, "setProperty", l, u, i, r, 0, 0, d),
            a.push(d),
            x.push(d, s[d]);
        else if (m !== "undefined") {
          if (
            (c && d in c
              ? ((l = typeof c[d] == "function" ? c[d].call(n, i, e, r) : c[d]),
                nt(l) && ~l.indexOf("random(") && (l = Ar(l)),
                ct(l + "") || (l += Rt.units[d] || ct(wn(e, d)) || ""),
                (l + "").charAt(1) === "=" && (l = wn(e, d)))
              : (l = wn(e, d)),
            (f = parseFloat(l)),
            (v = m === "string" && u.charAt(1) === "=" && u.substr(0, 2)),
            v && (u = u.substr(2)),
            (h = parseFloat(u)),
            d in Cn &&
              (d === "autoAlpha" &&
                (f === 1 && wn(e, "visibility") === "hidden" && h && (f = 0),
                x.push("visibility", s.visibility),
                Wn(
                  this,
                  s,
                  "visibility",
                  f ? "inherit" : "hidden",
                  h ? "inherit" : "hidden",
                  !h
                )),
              d !== "scale" &&
                d !== "transform" &&
                ((d = Cn[d]), ~d.indexOf(",") && (d = d.split(",")[0]))),
            (S = d in Dn),
            S)
          ) {
            if (
              (this.styles.save(d),
              M ||
                ((y = e._gsap),
                (y.renderTransform && !t.parseTransform) ||
                  Rr(e, t.parseTransform),
                (E = t.smoothOrigin !== !1 && y.smooth),
                (M = this._pt =
                  new bt(this._pt, s, He, 0, 1, y.renderTransform, y, 0, -1)),
                (M.dep = 1)),
              d === "scale")
            )
              (this._pt = new bt(
                this._pt,
                y,
                "scaleY",
                y.scaleY,
                (v ? Wi(y.scaleY, v + h) : h) - y.scaleY || 0,
                Ja
              )),
                (this._pt.u = 0),
                a.push("scaleY", d),
                (d += "X");
            else if (d === "transformOrigin") {
              x.push(rn, s[rn]),
                (u = u0(u)),
                y.svg
                  ? to(e, u, 0, E, 0, this)
                  : ((_ = parseFloat(u.split(" ")[2]) || 0),
                    _ !== y.zOrigin && Wn(this, y, "zOrigin", y.zOrigin, _),
                    Wn(this, s, d, Cs(l), Cs(u)));
              continue;
            } else if (d === "svgOrigin") {
              to(e, u, 1, E, 0, this);
              continue;
            } else if (d in Fu) {
              p0(this, y, d, f, v ? Wi(f, v + u) : u);
              continue;
            } else if (d === "smoothOrigin") {
              Wn(this, y, "smooth", y.smooth, u);
              continue;
            } else if (d === "force3D") {
              y[d] = u;
              continue;
            } else if (d === "transform") {
              m0(this, u, e);
              continue;
            }
          } else d in s || (d = rr(d) || d);
          if (S || ((h || h === 0) && (f || f === 0) && !$_.test(u) && d in s))
            (p = (l + "").substr((f + "").length)),
              h || (h = 0),
              (_ = ct(u) || (d in Rt.units ? Rt.units[d] : p)),
              p !== _ && (f = jn(e, d, l, _)),
              (this._pt = new bt(
                this._pt,
                S ? y : s,
                d,
                f,
                (v ? Wi(f, v + h) : h) - f,
                !S && (_ === "px" || d === "zIndex") && t.autoRound !== !1
                  ? Q_
                  : Ja
              )),
              (this._pt.u = _ || 0),
              p !== _ && _ !== "%" && ((this._pt.b = l), (this._pt.r = J_));
          else if (d in s) c0.call(this, e, d, l, v ? v + u : u);
          else if (d in e) this.add(e, d, l || e[d], v ? v + u : u, i, r);
          else {
            uo(d, u);
            continue;
          }
          S || x.push(d, s[d]), a.push(d);
        }
      }
    A && Eu(this);
  },
  render: function (e, t) {
    if (t.tween._time || !Mo())
      for (var n = t._pt; n; ) n.r(e, n.d), (n = n._next);
    else t.styles.revert();
  },
  get: wn,
  aliases: Cn,
  getSetter: function (e, t, n) {
    var i = Cn[t];
    return (
      i && i.indexOf(",") < 0 && (t = i),
      t in Dn && t !== rn && (e._gsap.x || wn(e, "x"))
        ? n && nc === n
          ? t === "scale"
            ? i0
            : n0
          : (nc = n || {}) && (t === "scale" ? r0 : s0)
        : e.style && !lo(e.style[t])
        ? e0
        : ~t.indexOf("-")
        ? t0
        : xo(e, t)
    );
  },
  core: { _removeProperty: Lr, _getMatrix: bo },
};
zt.utils.checkPrefix = rr;
zt.core.getStyleSaver = Du;
(function (o, e, t, n) {
  var i = St(o + "," + e + "," + t, function (r) {
    Dn[r] = 1;
  });
  St(e, function (r) {
    (Rt.units[r] = "deg"), (Fu[r] = 1);
  }),
    (Cn[i[13]] = o + "," + e),
    St(n, function (r) {
      var a = r.split(":");
      Cn[a[1]] = i[a[0]];
    });
})(
  "x,y,z,scale,scaleX,scaleY,xPercent,yPercent",
  "rotation,rotationX,rotationY,skewX,skewY",
  "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective",
  "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY"
);
St(
  "x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",
  function (o) {
    Rt.units[o] = "px";
  }
);
zt.registerPlugin(Nu);
var Ne = zt.registerPlugin(Nu) || zt;
Ne.core.Tween;
var g0 =
    typeof globalThis < "u"
      ? globalThis
      : typeof window < "u"
      ? window
      : typeof global < "u"
      ? global
      : typeof self < "u"
      ? self
      : {},
  Bu = { exports: {} };
(function (o, e) {
  (function (t, n) {
    o.exports = n();
  })(g0, function () {
    var t = function () {
      function n(m) {
        return a.appendChild(m.dom), m;
      }
      function i(m) {
        for (var g = 0; g < a.children.length; g++)
          a.children[g].style.display = g === m ? "block" : "none";
        r = m;
      }
      var r = 0,
        a = document.createElement("div");
      (a.style.cssText =
        "position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000"),
        a.addEventListener(
          "click",
          function (m) {
            m.preventDefault(), i(++r % a.children.length);
          },
          !1
        );
      var s = (performance || Date).now(),
        c = s,
        l = 0,
        u = n(new t.Panel("FPS", "#0ff", "#002")),
        h = n(new t.Panel("MS", "#0f0", "#020"));
      if (self.performance && self.performance.memory)
        var f = n(new t.Panel("MB", "#f08", "#201"));
      return (
        i(0),
        {
          REVISION: 16,
          dom: a,
          addPanel: n,
          showPanel: i,
          begin: function () {
            s = (performance || Date).now();
          },
          end: function () {
            l++;
            var m = (performance || Date).now();
            if (
              (h.update(m - s, 200),
              m > c + 1e3 &&
                (u.update((1e3 * l) / (m - c), 100), (c = m), (l = 0), f))
            ) {
              var g = performance.memory;
              f.update(g.usedJSHeapSize / 1048576, g.jsHeapSizeLimit / 1048576);
            }
            return m;
          },
          update: function () {
            s = this.end();
          },
          domElement: a,
          setMode: i,
        }
      );
    };
    return (
      (t.Panel = function (n, i, r) {
        var a = 1 / 0,
          s = 0,
          c = Math.round,
          l = c(window.devicePixelRatio || 1),
          u = 80 * l,
          h = 48 * l,
          f = 3 * l,
          m = 2 * l,
          g = 3 * l,
          d = 15 * l,
          p = 74 * l,
          _ = 30 * l,
          v = document.createElement("canvas");
        (v.width = u),
          (v.height = h),
          (v.style.cssText = "width:80px;height:48px");
        var S = v.getContext("2d");
        return (
          (S.font = "bold " + 9 * l + "px Helvetica,Arial,sans-serif"),
          (S.textBaseline = "top"),
          (S.fillStyle = r),
          S.fillRect(0, 0, u, h),
          (S.fillStyle = i),
          S.fillText(n, f, m),
          S.fillRect(g, d, p, _),
          (S.fillStyle = r),
          (S.globalAlpha = 0.9),
          S.fillRect(g, d, p, _),
          {
            dom: v,
            update: function (M, y) {
              (a = Math.min(a, M)),
                (s = Math.max(s, M)),
                (S.fillStyle = r),
                (S.globalAlpha = 1),
                S.fillRect(0, 0, u, d),
                (S.fillStyle = i),
                S.fillText(
                  c(M) + " " + n + " (" + c(a) + "-" + c(s) + ")",
                  f,
                  m
                ),
                S.drawImage(v, g + l, d, p - l, _, g, d, p - l, _),
                S.fillRect(g + p - l, d, l, _),
                (S.fillStyle = r),
                (S.globalAlpha = 0.9),
                S.fillRect(g + p - l, d, l, c((1 - M / y) * _));
            },
          }
        );
      }),
      t
    );
  });
})(Bu);
const _0 = Bu.exports,
  As = {
    uniforms: { tDiffuse: { value: null }, opacity: { value: 1 } },
    vertexShader: `

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,
    fragmentShader: `

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );
			gl_FragColor.a *= opacity;


		}`,
  };
class Vr {
  constructor() {
    (this.enabled = !0),
      (this.needsSwap = !0),
      (this.clear = !1),
      (this.renderToScreen = !1);
  }
  setSize() {}
  render() {
    console.error("THREE.Pass: .render() must be implemented in derived pass.");
  }
}
const x0 = new so(-1, 1, 1, -1, 0, 1),
  wo = new $t();
wo.setAttribute("position", new mt([-1, 3, 0, -1, -1, 0, 3, -1, 0], 3));
wo.setAttribute("uv", new mt([0, 2, 0, 0, 2, 0], 2));
class ku {
  constructor(e) {
    this._mesh = new En(wo, e);
  }
  dispose() {
    this._mesh.geometry.dispose();
  }
  render(e) {
    e.render(this._mesh, x0);
  }
  get material() {
    return this._mesh.material;
  }
  set material(e) {
    this._mesh.material = e;
  }
}
class uc extends Vr {
  constructor(e, t) {
    super(),
      (this.textureID = t !== void 0 ? t : "tDiffuse"),
      e instanceof yt
        ? ((this.uniforms = e.uniforms), (this.material = e))
        : e &&
          ((this.uniforms = vs.clone(e.uniforms)),
          (this.material = new yt({
            defines: Object.assign({}, e.defines),
            uniforms: this.uniforms,
            vertexShader: e.vertexShader,
            fragmentShader: e.fragmentShader,
          }))),
      (this.fsQuad = new ku(this.material));
  }
  render(e, t, n) {
    this.uniforms[this.textureID] &&
      (this.uniforms[this.textureID].value = n.texture),
      (this.fsQuad.material = this.material),
      this.renderToScreen
        ? (e.setRenderTarget(null), this.fsQuad.render(e))
        : (e.setRenderTarget(t),
          this.clear &&
            e.clear(e.autoClearColor, e.autoClearDepth, e.autoClearStencil),
          this.fsQuad.render(e));
  }
}
class hc extends Vr {
  constructor(e, t) {
    super(),
      (this.scene = e),
      (this.camera = t),
      (this.clear = !0),
      (this.needsSwap = !1),
      (this.inverse = !1);
  }
  render(e, t, n) {
    const i = e.getContext(),
      r = e.state;
    r.buffers.color.setMask(!1),
      r.buffers.depth.setMask(!1),
      r.buffers.color.setLocked(!0),
      r.buffers.depth.setLocked(!0);
    let a, s;
    this.inverse ? ((a = 0), (s = 1)) : ((a = 1), (s = 0)),
      r.buffers.stencil.setTest(!0),
      r.buffers.stencil.setOp(i.REPLACE, i.REPLACE, i.REPLACE),
      r.buffers.stencil.setFunc(i.ALWAYS, a, 4294967295),
      r.buffers.stencil.setClear(s),
      r.buffers.stencil.setLocked(!0),
      e.setRenderTarget(n),
      this.clear && e.clear(),
      e.render(this.scene, this.camera),
      e.setRenderTarget(t),
      this.clear && e.clear(),
      e.render(this.scene, this.camera),
      r.buffers.color.setLocked(!1),
      r.buffers.depth.setLocked(!1),
      r.buffers.stencil.setLocked(!1),
      r.buffers.stencil.setFunc(i.EQUAL, 1, 4294967295),
      r.buffers.stencil.setOp(i.KEEP, i.KEEP, i.KEEP),
      r.buffers.stencil.setLocked(!0);
  }
}
class v0 extends Vr {
  constructor() {
    super(), (this.needsSwap = !1);
  }
  render(e) {
    e.state.buffers.stencil.setLocked(!1), e.state.buffers.stencil.setTest(!1);
  }
}
class y0 {
  constructor(e, t) {
    if (((this.renderer = e), t === void 0)) {
      const n = e.getSize(new Se());
      (this._pixelRatio = e.getPixelRatio()),
        (this._width = n.width),
        (this._height = n.height),
        (t = new nn(
          this._width * this._pixelRatio,
          this._height * this._pixelRatio
        )),
        (t.texture.name = "EffectComposer.rt1");
    } else
      (this._pixelRatio = 1),
        (this._width = t.width),
        (this._height = t.height);
    (this.renderTarget1 = t),
      (this.renderTarget2 = t.clone()),
      (this.renderTarget2.texture.name = "EffectComposer.rt2"),
      (this.writeBuffer = this.renderTarget1),
      (this.readBuffer = this.renderTarget2),
      (this.renderToScreen = !0),
      (this.passes = []),
      As === void 0 &&
        console.error("THREE.EffectComposer relies on CopyShader"),
      uc === void 0 &&
        console.error("THREE.EffectComposer relies on ShaderPass"),
      (this.copyPass = new uc(As)),
      (this.clock = new kc());
  }
  swapBuffers() {
    const e = this.readBuffer;
    (this.readBuffer = this.writeBuffer), (this.writeBuffer = e);
  }
  addPass(e) {
    this.passes.push(e),
      e.setSize(
        this._width * this._pixelRatio,
        this._height * this._pixelRatio
      );
  }
  insertPass(e, t) {
    this.passes.splice(t, 0, e),
      e.setSize(
        this._width * this._pixelRatio,
        this._height * this._pixelRatio
      );
  }
  removePass(e) {
    const t = this.passes.indexOf(e);
    t !== -1 && this.passes.splice(t, 1);
  }
  isLastEnabledPass(e) {
    for (let t = e + 1; t < this.passes.length; t++)
      if (this.passes[t].enabled) return !1;
    return !0;
  }
  render(e) {
    e === void 0 && (e = this.clock.getDelta());
    const t = this.renderer.getRenderTarget();
    let n = !1;
    for (let i = 0, r = this.passes.length; i < r; i++) {
      const a = this.passes[i];
      if (a.enabled !== !1) {
        if (
          ((a.renderToScreen =
            this.renderToScreen && this.isLastEnabledPass(i)),
          a.render(this.renderer, this.writeBuffer, this.readBuffer, e, n),
          a.needsSwap)
        ) {
          if (n) {
            const s = this.renderer.getContext(),
              c = this.renderer.state.buffers.stencil;
            c.setFunc(s.NOTEQUAL, 1, 4294967295),
              this.copyPass.render(
                this.renderer,
                this.writeBuffer,
                this.readBuffer,
                e
              ),
              c.setFunc(s.EQUAL, 1, 4294967295);
          }
          this.swapBuffers();
        }
        hc !== void 0 &&
          (a instanceof hc ? (n = !0) : a instanceof v0 && (n = !1));
      }
    }
    this.renderer.setRenderTarget(t);
  }
  reset(e) {
    if (e === void 0) {
      const t = this.renderer.getSize(new Se());
      (this._pixelRatio = this.renderer.getPixelRatio()),
        (this._width = t.width),
        (this._height = t.height),
        (e = this.renderTarget1.clone()),
        e.setSize(
          this._width * this._pixelRatio,
          this._height * this._pixelRatio
        );
    }
    this.renderTarget1.dispose(),
      this.renderTarget2.dispose(),
      (this.renderTarget1 = e),
      (this.renderTarget2 = e.clone()),
      (this.writeBuffer = this.renderTarget1),
      (this.readBuffer = this.renderTarget2);
  }
  setSize(e, t) {
    (this._width = e), (this._height = t);
    const n = this._width * this._pixelRatio,
      i = this._height * this._pixelRatio;
    this.renderTarget1.setSize(n, i), this.renderTarget2.setSize(n, i);
    for (let r = 0; r < this.passes.length; r++) this.passes[r].setSize(n, i);
  }
  setPixelRatio(e) {
    (this._pixelRatio = e), this.setSize(this._width, this._height);
  }
}
new so(-1, 1, 1, -1, 0, 1);
const Vu = new $t();
Vu.setAttribute("position", new mt([-1, 3, 0, -1, -1, 0, 3, -1, 0], 3));
Vu.setAttribute("uv", new mt([0, 2, 0, 0, 2, 0], 2));
class M0 extends Vr {
  constructor(e, t, n, i, r) {
    super(),
      (this.scene = e),
      (this.camera = t),
      (this.overrideMaterial = n),
      (this.clearColor = i),
      (this.clearAlpha = r !== void 0 ? r : 0),
      (this.clear = !0),
      (this.clearDepth = !1),
      (this.needsSwap = !1),
      (this._oldClearColor = new De());
  }
  render(e, t, n) {
    const i = e.autoClear;
    e.autoClear = !1;
    let r, a;
    this.overrideMaterial !== void 0 &&
      ((a = this.scene.overrideMaterial),
      (this.scene.overrideMaterial = this.overrideMaterial)),
      this.clearColor &&
        (e.getClearColor(this._oldClearColor),
        (r = e.getClearAlpha()),
        e.setClearColor(this.clearColor, this.clearAlpha)),
      this.clearDepth && e.clearDepth(),
      e.setRenderTarget(this.renderToScreen ? null : n),
      this.clear &&
        e.clear(e.autoClearColor, e.autoClearDepth, e.autoClearStencil),
      e.render(this.scene, this.camera),
      this.clearColor && e.setClearColor(this._oldClearColor, r),
      this.overrideMaterial !== void 0 && (this.scene.overrideMaterial = a),
      (e.autoClear = i);
  }
}
const fc = {
  shaderID: "luminosityHighPass",
  uniforms: {
    tDiffuse: { value: null },
    luminosityThreshold: { value: 1 },
    smoothWidth: { value: 1 },
    defaultColor: { value: new De(0) },
    defaultOpacity: { value: 0 },
  },
  vertexShader: `

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,
  fragmentShader: `

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			vec3 luma = vec3( 0.299, 0.587, 0.114 );

			float v = dot( texel.xyz, luma );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`,
};
class sr extends Vr {
  constructor(e, t, n, i) {
    super(),
      (this.strength = t !== void 0 ? t : 1),
      (this.radius = n),
      (this.threshold = i),
      (this.resolution = e !== void 0 ? new Se(e.x, e.y) : new Se(256, 256)),
      (this.clearColor = new De(0, 0, 0)),
      (this.renderTargetsHorizontal = []),
      (this.renderTargetsVertical = []),
      (this.nMips = 5);
    let r = Math.round(this.resolution.x / 2),
      a = Math.round(this.resolution.y / 2);
    (this.renderTargetBright = new nn(r, a)),
      (this.renderTargetBright.texture.name = "UnrealBloomPass.bright"),
      (this.renderTargetBright.texture.generateMipmaps = !1);
    for (let h = 0; h < this.nMips; h++) {
      const f = new nn(r, a);
      (f.texture.name = "UnrealBloomPass.h" + h),
        (f.texture.generateMipmaps = !1),
        this.renderTargetsHorizontal.push(f);
      const m = new nn(r, a);
      (m.texture.name = "UnrealBloomPass.v" + h),
        (m.texture.generateMipmaps = !1),
        this.renderTargetsVertical.push(m),
        (r = Math.round(r / 2)),
        (a = Math.round(a / 2));
    }
    fc === void 0 &&
      console.error("THREE.UnrealBloomPass relies on LuminosityHighPassShader");
    const s = fc;
    (this.highPassUniforms = vs.clone(s.uniforms)),
      (this.highPassUniforms.luminosityThreshold.value = i),
      (this.highPassUniforms.smoothWidth.value = 0.01),
      (this.materialHighPassFilter = new yt({
        uniforms: this.highPassUniforms,
        vertexShader: s.vertexShader,
        fragmentShader: s.fragmentShader,
        defines: {},
      })),
      (this.separableBlurMaterials = []);
    const c = [3, 5, 7, 9, 11];
    (r = Math.round(this.resolution.x / 2)),
      (a = Math.round(this.resolution.y / 2));
    for (let h = 0; h < this.nMips; h++)
      this.separableBlurMaterials.push(this.getSeperableBlurMaterial(c[h])),
        (this.separableBlurMaterials[h].uniforms.texSize.value = new Se(r, a)),
        (r = Math.round(r / 2)),
        (a = Math.round(a / 2));
    (this.compositeMaterial = this.getCompositeMaterial(this.nMips)),
      (this.compositeMaterial.uniforms.blurTexture1.value =
        this.renderTargetsVertical[0].texture),
      (this.compositeMaterial.uniforms.blurTexture2.value =
        this.renderTargetsVertical[1].texture),
      (this.compositeMaterial.uniforms.blurTexture3.value =
        this.renderTargetsVertical[2].texture),
      (this.compositeMaterial.uniforms.blurTexture4.value =
        this.renderTargetsVertical[3].texture),
      (this.compositeMaterial.uniforms.blurTexture5.value =
        this.renderTargetsVertical[4].texture),
      (this.compositeMaterial.uniforms.bloomStrength.value = t),
      (this.compositeMaterial.uniforms.bloomRadius.value = 0.1),
      (this.compositeMaterial.needsUpdate = !0);
    const l = [1, 0.8, 0.6, 0.4, 0.2];
    (this.compositeMaterial.uniforms.bloomFactors.value = l),
      (this.bloomTintColors = [
        new R(1, 1, 1),
        new R(1, 1, 1),
        new R(1, 1, 1),
        new R(1, 1, 1),
        new R(1, 1, 1),
      ]),
      (this.compositeMaterial.uniforms.bloomTintColors.value =
        this.bloomTintColors),
      As === void 0 &&
        console.error("THREE.UnrealBloomPass relies on CopyShader");
    const u = As;
    (this.copyUniforms = vs.clone(u.uniforms)),
      (this.copyUniforms.opacity.value = 1),
      (this.materialCopy = new yt({
        uniforms: this.copyUniforms,
        vertexShader: u.vertexShader,
        fragmentShader: u.fragmentShader,
        blending: Da,
        depthTest: !1,
        depthWrite: !1,
        transparent: !0,
      })),
      (this.enabled = !0),
      (this.needsSwap = !1),
      (this._oldClearColor = new De()),
      (this.oldClearAlpha = 1),
      (this.basic = new ro()),
      (this.fsQuad = new ku(null));
  }
  dispose() {
    for (let e = 0; e < this.renderTargetsHorizontal.length; e++)
      this.renderTargetsHorizontal[e].dispose();
    for (let e = 0; e < this.renderTargetsVertical.length; e++)
      this.renderTargetsVertical[e].dispose();
    this.renderTargetBright.dispose();
  }
  setSize(e, t) {
    let n = Math.round(e / 2),
      i = Math.round(t / 2);
    this.renderTargetBright.setSize(n, i);
    for (let r = 0; r < this.nMips; r++)
      this.renderTargetsHorizontal[r].setSize(n, i),
        this.renderTargetsVertical[r].setSize(n, i),
        (this.separableBlurMaterials[r].uniforms.texSize.value = new Se(n, i)),
        (n = Math.round(n / 2)),
        (i = Math.round(i / 2));
  }
  render(e, t, n, i, r) {
    e.getClearColor(this._oldClearColor),
      (this.oldClearAlpha = e.getClearAlpha());
    const a = e.autoClear;
    (e.autoClear = !1),
      e.setClearColor(this.clearColor, 0),
      r && e.state.buffers.stencil.setTest(!1),
      this.renderToScreen &&
        ((this.fsQuad.material = this.basic),
        (this.basic.map = n.texture),
        e.setRenderTarget(null),
        e.clear(),
        this.fsQuad.render(e)),
      (this.highPassUniforms.tDiffuse.value = n.texture),
      (this.highPassUniforms.luminosityThreshold.value = this.threshold),
      (this.fsQuad.material = this.materialHighPassFilter),
      e.setRenderTarget(this.renderTargetBright),
      e.clear(),
      this.fsQuad.render(e);
    let s = this.renderTargetBright;
    for (let c = 0; c < this.nMips; c++)
      (this.fsQuad.material = this.separableBlurMaterials[c]),
        (this.separableBlurMaterials[c].uniforms.colorTexture.value =
          s.texture),
        (this.separableBlurMaterials[c].uniforms.direction.value =
          sr.BlurDirectionX),
        e.setRenderTarget(this.renderTargetsHorizontal[c]),
        e.clear(),
        this.fsQuad.render(e),
        (this.separableBlurMaterials[c].uniforms.colorTexture.value =
          this.renderTargetsHorizontal[c].texture),
        (this.separableBlurMaterials[c].uniforms.direction.value =
          sr.BlurDirectionY),
        e.setRenderTarget(this.renderTargetsVertical[c]),
        e.clear(),
        this.fsQuad.render(e),
        (s = this.renderTargetsVertical[c]);
    (this.fsQuad.material = this.compositeMaterial),
      (this.compositeMaterial.uniforms.bloomStrength.value = this.strength),
      (this.compositeMaterial.uniforms.bloomRadius.value = this.radius),
      (this.compositeMaterial.uniforms.bloomTintColors.value =
        this.bloomTintColors),
      e.setRenderTarget(this.renderTargetsHorizontal[0]),
      e.clear(),
      this.fsQuad.render(e),
      (this.fsQuad.material = this.materialCopy),
      (this.copyUniforms.tDiffuse.value =
        this.renderTargetsHorizontal[0].texture),
      r && e.state.buffers.stencil.setTest(!0),
      this.renderToScreen
        ? (e.setRenderTarget(null), this.fsQuad.render(e))
        : (e.setRenderTarget(n), this.fsQuad.render(e)),
      e.setClearColor(this._oldClearColor, this.oldClearAlpha),
      (e.autoClear = a);
  }
  getSeperableBlurMaterial(e) {
    return new yt({
      defines: { KERNEL_RADIUS: e, SIGMA: e },
      uniforms: {
        colorTexture: { value: null },
        texSize: { value: new Se(0.5, 0.5) },
        direction: { value: new Se(0.5, 0.5) },
      },
      vertexShader: `varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,
      fragmentShader: `#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 texSize;
				uniform vec2 direction;

				float gaussianPdf(in float x, in float sigma) {
					return 0.39894 * exp( -0.5 * x * x/( sigma * sigma))/sigma;
				}
				void main() {
					vec2 invSize = 1.0 / texSize;
					float fSigma = float(SIGMA);
					float weightSum = gaussianPdf(0.0, fSigma);
					vec3 diffuseSum = texture2D( colorTexture, vUv).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianPdf(x, fSigma);
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`,
    });
  }
  getCompositeMaterial(e) {
    return new yt({
      defines: { NUM_MIPS: e },
      uniforms: {
        blurTexture1: { value: null },
        blurTexture2: { value: null },
        blurTexture3: { value: null },
        blurTexture4: { value: null },
        blurTexture5: { value: null },
        bloomStrength: { value: 1 },
        bloomFactors: { value: null },
        bloomTintColors: { value: null },
        bloomRadius: { value: 0 },
      },
      vertexShader: `varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,
      fragmentShader: `varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`,
    });
  }
}
sr.BlurDirectionX = new Se(1, 0);
sr.BlurDirectionY = new Se(0, 1);
const ur = new Qg(),
  S0 = ur.load("flower-hero/video-01-first.jpg"),
  b0 = ur.load("flower-hero/video-01-end.jpg"),
  w0 = ur.load("flower-hero/video-02-first.jpg"),
  T0 = ur.load("flower-hero/video-02-end.jpg"),
  E0 = ur.load("flower-hero/video-03-first.jpg"),
  C0 = ur.load("flower-hero/video-03-end.jpg"),
  dc = new Se();
window.addEventListener("mousemove", (o) => {
  (dc.x = (o.clientX / window.innerWidth) * 2 - 1),
    (dc.y = -(o.clientY / window.innerHeight) * 2 + 1);
});
window.addEventListener("resize", () => {
  (ar.aspect = window.innerWidth / window.innerHeight),
    ar.updateProjectionMatrix(),
    Ir.setSize(window.innerWidth, window.innerHeight),
    Ir.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});
window.addEventListener("dblclick", () => {
  document.fullscreenElement || document.webkitFullscreenElement
    ? document.exitFullscreen
      ? document.exitFullscreen()
      : document.webkitExitFullscreen && document.webkitExitFullscreen()
    : yr.requestFullscreen
    ? yr.requestFullscreen()
    : yr.webkitRequestFullscreen && yr.webkitRequestFullscreen();
});
const A0 = new kc(),
  Us = new qg(),
  ar = new Vt(45, window.innerWidth / window.innerHeight, 0.01, 1e5);
Us.add(ar);
const La = 1270;
ar.position.set(0 * La, 0 * La, 1 * La);
const yr = document.querySelector(".webgl"),
  Ir = new Uc({
    canvas: yr,
    antialias: !0,
    alfa: !0,
    powerPreference: "high-performance",
  });
Ir.setSize(window.innerWidth, window.innerHeight);
Ir.render(Us, ar);
const To = { exposure: 1, bloomStrength: 0, bloomThreshold: 0, bloomRadius: 0 },
  P0 = new M0(Us, ar),
  pn = new sr(new Se(window.innerWidth, window.innerHeight), 1.5, 0.4, 0.85);
pn.threshold = To.bloomThreshold;
pn.strength = To.bloomStrength;
pn.radius = To.bloomRadius;
let Ns = new y0(Ir);
Ns.setSize(window.innerWidth, window.innerHeight);
Ns.addPass(P0);
Ns.addPass(pn);
let pc = 0.5;
const L0 = new Rs(480, 820, 480 * pc, 820 * pc),
  dt = new yt({
    vertexShader: t_,
    fragmentShader: n_,
    transparent: !0,
    uniforms: {
      uTime: { type: "f", value: 0 },
      distortion: { type: "f", value: 0 },
      t0: { type: "t", value: S0 },
      t1: { type: "t", value: b0 },
      t2: { type: "t", value: w0 },
      t3: { type: "t", value: T0 },
      t4: { type: "t", value: E0 },
      t5: { type: "t", value: C0 },
      t0_b: { value: 0 },
      t1_b: { value: 1 },
      t2_b: { value: 0 },
      t3_b: { value: 0 },
      t4_b: { value: 0 },
      t5_b: { value: 0 },
    },
  }),
  D0 = new Zg(L0, dt);
Us.add(D0);
function R0(o, e) {
  (dt.needsUpdate = !0), (dt.uniforms.uTime.value = o);
}
const Ps = new _0();
Ps.showPanel(0);
document.body.appendChild(Ps.dom);
const I0 = new e_(5);
I0.setColors(16711680, 65280, 255);
function Gu() {
  Ps.begin();
  const o = A0.getElapsedTime();
  R0(o), Ps.end(), Ns.render(), requestAnimationFrame(Gu);
}
Gu();
const Hu = document.getElementById("video-01"),
  Wu = document.getElementById("video-02"),
  qu = document.getElementById("video-03");
Hu.addEventListener("ended", () => {
  Ne.to("#video-01", { duration: 0.1, opacity: 0 }),
    Ne.to(dt.uniforms.distortion, {
      duration: 3,
      value: 2,
      ease: "power2.Out",
    }),
    Ne.to(pn, { duration: 3, strength: 5, ease: "bounce.Out" }),
    Ne.to(dt.uniforms.t1_b, {
      delay: 3,
      duration: 3,
      value: 0,
      ease: "power2.Out",
    }),
    Ne.to(dt.uniforms.t2_b, {
      duration: 1,
      delay: 3,
      value: 1,
      ease: "power2.Out",
    }),
    Ne.to(pn, { duration: 3, strength: 0.3, delay: 3, ease: "bounce.inOut" }),
    Ne.to(dt.uniforms.distortion, { duration: 3, value: 0, delay: 3 }),
    Ne.to("#video-02", { delay: 6.2, duration: 0.1, opacity: 1 }),
    setTimeout(function () {
      Wu.play();
    }, 6200);
});
Wu.addEventListener("ended", () => {
  Ne.to("#video-02", { duration: 0.1, opacity: 0 }),
    Ne.to(dt.uniforms.distortion, {
      duration: 3,
      value: 2,
      ease: "power2.Out",
    }),
    Ne.to(pn, { duration: 3, strength: 5, ease: "bounce.Out" }),
    Ne.to(dt.uniforms.t2_b, {
      delay: 3,
      duration: 3,
      value: 0,
      ease: "power2.Out",
    }),
    Ne.to(dt.uniforms.t4_b, {
      duration: 1,
      delay: 3,
      value: 1,
      ease: "power2.Out",
    }),
    Ne.to(pn, { duration: 3, strength: 0.3, delay: 3, ease: "bounce.inOut" }),
    Ne.to(dt.uniforms.distortion, { duration: 3, value: 0, delay: 3 }),
    Ne.to("#video-03", { delay: 6.2, duration: 0.1, opacity: 1 }),
    setTimeout(function () {
      qu.play();
    }, 6200);
});
qu.addEventListener("ended", () => {
  Ne.to("#video-03", { duration: 0.1, opacity: 0 }),
    Ne.to(dt.uniforms.distortion, {
      duration: 3,
      value: 2,
      ease: "power2.Out",
    }),
    Ne.to(pn, { duration: 3, strength: 5, ease: "bounce.Out" }),
    Ne.to(dt.uniforms.t4_b, {
      delay: 3,
      duration: 3,
      value: 0,
      ease: "power2.Out",
    }),
    Ne.to(dt.uniforms.t0_b, {
      duration: 1,
      delay: 3,
      value: 1,
      ease: "power2.Out",
    }),
    Ne.to(pn, { duration: 3, strength: 0.3, delay: 3, ease: "bounce.inOut" }),
    Ne.to(dt.uniforms.distortion, { duration: 3, value: 0, delay: 3 }),
    Ne.to("#video-01", { delay: 6.2, duration: 0.1, opacity: 1 }),
    setTimeout(function () {
      Hu.play();
    }, 6200);
});
