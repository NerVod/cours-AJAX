/**
  @license
  Apache License 2.0 https://github.com/ReactiveX/RxJS/blob/master/LICENSE.txt
 **/
/**
  @license
  Apache License 2.0 https://github.com/ReactiveX/RxJS/blob/master/LICENSE.txt
 **/
/*
 *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
*****************************************************************************/
(function (g, x) {
  "object" === typeof exports && "undefined" !== typeof module
    ? x(exports)
    : "function" === typeof define && define.amd
    ? define("rxjs", ["exports"], x)
    : x((g.rxjs = {}));
})(this, function (g) {
  function x(b, a) {
    function c() {
      this.constructor = b;
    }
    if ("function" !== typeof a && null !== a)
      throw new TypeError(
        "Class extends value " + String(a) + " is not a constructor or null"
      );
    Sa(b, a);
    b.prototype =
      null === a ? Object.create(a) : ((c.prototype = a.prototype), new c());
  }
  function Gb(b, a) {
    var c = {},
      d;
    for (d in b)
      Object.prototype.hasOwnProperty.call(b, d) &&
        0 > a.indexOf(d) &&
        (c[d] = b[d]);
    if (null != b && "function" === typeof Object.getOwnPropertySymbols) {
      var e = 0;
      for (d = Object.getOwnPropertySymbols(b); e < d.length; e++)
        0 > a.indexOf(d[e]) &&
          Object.prototype.propertyIsEnumerable.call(b, d[e]) &&
          (c[d[e]] = b[d[e]]);
    }
    return c;
  }
  function Yd(b, a, c, d) {
    function e(a) {
      return a instanceof c
        ? a
        : new c(function (b) {
            b(a);
          });
    }
    return new (c || (c = Promise))(function (c, h) {
      function f(a) {
        try {
          w(d.next(a));
        } catch (y) {
          h(y);
        }
      }
      function k(a) {
        try {
          w(d["throw"](a));
        } catch (y) {
          h(y);
        }
      }
      function w(a) {
        a.done ? c(a.value) : e(a.value).then(f, k);
      }
      w((d = d.apply(b, a || [])).next());
    });
  }
  function Ta(b, a) {
    function c(a) {
      return function (b) {
        return d([a, b]);
      };
    }
    function d(c) {
      if (f) throw new TypeError("Generator is already executing.");
      for (; e; )
        try {
          if (
            ((f = 1),
            h &&
              (l =
                c[0] & 2
                  ? h["return"]
                  : c[0]
                  ? h["throw"] || ((l = h["return"]) && l.call(h), 0)
                  : h.next) &&
              !(l = l.call(h, c[1])).done)
          )
            return l;
          if (((h = 0), l)) c = [c[0] & 2, l.value];
          switch (c[0]) {
            case 0:
            case 1:
              l = c;
              break;
            case 4:
              return e.label++, { value: c[1], done: !1 };
            case 5:
              e.label++;
              h = c[1];
              c = [0];
              continue;
            case 7:
              c = e.ops.pop();
              e.trys.pop();
              continue;
            default:
              if (
                !((l = e.trys), (l = 0 < l.length && l[l.length - 1])) &&
                (6 === c[0] || 2 === c[0])
              ) {
                e = 0;
                continue;
              }
              if (3 === c[0] && (!l || (c[1] > l[0] && c[1] < l[3])))
                e.label = c[1];
              else if (6 === c[0] && e.label < l[1]) (e.label = l[1]), (l = c);
              else if (l && e.label < l[2]) (e.label = l[2]), e.ops.push(c);
              else {
                l[2] && e.ops.pop();
                e.trys.pop();
                continue;
              }
          }
          c = a.call(b, e);
        } catch (q) {
          (c = [6, q]), (h = 0);
        } finally {
          f = l = 0;
        }
      if (c[0] & 5) throw c[1];
      return { value: c[0] ? c[1] : void 0, done: !0 };
    }
    var e = {
        label: 0,
        sent: function () {
          if (l[0] & 1) throw l[1];
          return l[1];
        },
        trys: [],
        ops: [],
      },
      f,
      h,
      l,
      k;
    return (
      (k = { next: c(0), throw: c(1), return: c(2) }),
      "function" === typeof Symbol &&
        (k[Symbol.iterator] = function () {
          return this;
        }),
      k
    );
  }
  function F(b) {
    var a = "function" === typeof Symbol && Symbol.iterator,
      c = a && b[a],
      d = 0;
    if (c) return c.call(b);
    if (b && "number" === typeof b.length)
      return {
        next: function () {
          b && d >= b.length && (b = void 0);
          return { value: b && b[d++], done: !b };
        },
      };
    throw new TypeError(
      a ? "Object is not iterable." : "Symbol.iterator is not defined."
    );
  }
  function z(b, a) {
    var c = "function" === typeof Symbol && b[Symbol.iterator];
    if (!c) return b;
    b = c.call(b);
    var d,
      e = [],
      f;
    try {
      for (; (void 0 === a || 0 < a--) && !(d = b.next()).done; )
        e.push(d.value);
    } catch (h) {
      f = { error: h };
    } finally {
      try {
        d && !d.done && (c = b["return"]) && c.call(b);
      } finally {
        if (f) throw f.error;
      }
    }
    return e;
  }
  function A(b, a) {
    for (var c = 0, d = a.length, e = b.length; c < d; c++, e++) b[e] = a[c];
    return b;
  }
  function da(b) {
    return this instanceof da ? ((this.v = b), this) : new da(b);
  }
  function Zd(b, a, c) {
    function d(a) {
      k[a] &&
        (w[a] = function (b) {
          return new Promise(function (c, d) {
            1 < g.push([a, b, c, d]) || e(a, b);
          });
        });
    }
    function e(a, b) {
      try {
        var c = k[a](b);
        c.value instanceof da
          ? Promise.resolve(c.value.v).then(f, h)
          : l(g[0][2], c);
      } catch (L) {
        l(g[0][3], L);
      }
    }
    function f(a) {
      e("next", a);
    }
    function h(a) {
      e("throw", a);
    }
    function l(a, b) {
      (a(b), g.shift(), g.length) && e(g[0][0], g[0][1]);
    }
    if (!Symbol.asyncIterator)
      throw new TypeError("Symbol.asyncIterator is not defined.");
    var k = c.apply(b, a || []),
      w,
      g = [];
    return (
      (w = {}),
      d("next"),
      d("throw"),
      d("return"),
      (w[Symbol.asyncIterator] = function () {
        return this;
      }),
      w
    );
  }
  function $d(b) {
    function a(a) {
      e[a] =
        b[a] &&
        function (d) {
          return new Promise(function (e, f) {
            d = b[a](d);
            c(e, f, d.done, d.value);
          });
        };
    }
    function c(a, b, c, d) {
      Promise.resolve(d).then(function (b) {
        a({ value: b, done: c });
      }, b);
    }
    if (!Symbol.asyncIterator)
      throw new TypeError("Symbol.asyncIterator is not defined.");
    var d = b[Symbol.asyncIterator],
      e;
    return d
      ? d.call(b)
      : ((b = "function" === typeof F ? F(b) : b[Symbol.iterator]()),
        (e = {}),
        a("next"),
        a("throw"),
        a("return"),
        (e[Symbol.asyncIterator] = function () {
          return this;
        }),
        e);
  }
  function p(b) {
    return "function" === typeof b;
  }
  function S(b) {
    b = b(function (a) {
      Error.call(a);
      a.stack = Error().stack;
    });
    b.prototype = Object.create(Error.prototype);
    return (b.prototype.constructor = b);
  }
  function P(b, a) {
    b && ((a = b.indexOf(a)), 0 <= a && b.splice(a, 1));
  }
  function Hb(b) {
    return (
      b instanceof D ||
      (b && "closed" in b && p(b.remove) && p(b.add) && p(b.unsubscribe))
    );
  }
  function Ib(b) {
    ea.setTimeout(function () {
      var a = T.onUnhandledError;
      if (a) a(b);
      else throw b;
    });
  }
  function B() {}
  function I(b, a, c) {
    return { kind: b, value: a, error: c };
  }
  function Ca(b) {
    if (T.useDeprecatedSynchronousErrorHandling) {
      var a = !V;
      a && (V = { errorThrown: !1, error: null });
      b();
      if (a && ((a = V), (b = a.errorThrown), (a = a.error), (V = null), b))
        throw a;
    } else b();
  }
  function Ua(b, a) {
    return function () {
      for (var a = [], d = 0; d < arguments.length; d++) a[d] = arguments[d];
      try {
        b.apply(void 0, A([], z(a)));
      } catch (e) {
        T.useDeprecatedSynchronousErrorHandling
          ? T.useDeprecatedSynchronousErrorHandling &&
            V &&
            ((V.errorThrown = !0), (V.error = e))
          : Ib(e);
      }
    };
  }
  function Jb(b) {
    throw b;
  }
  function Va(b, a) {
    var c = T.onStoppedNotification;
    c &&
      ea.setTimeout(function () {
        return c(b, a);
      });
  }
  function E(b) {
    return b;
  }
  function Wa() {
    for (var b = [], a = 0; a < arguments.length; a++) b[a] = arguments[a];
    return Kb(b);
  }
  function Kb(b) {
    return 0 === b.length
      ? E
      : 1 === b.length
      ? b[0]
      : function (a) {
          return b.reduce(function (a, b) {
            return b(a);
          }, a);
        };
  }
  function Lb(b) {
    var a;
    return null !== (a = null !== b && void 0 !== b ? b : T.Promise) &&
      void 0 !== a
      ? a
      : Promise;
  }
  function ae(b) {
    var a;
    (a = b && b instanceof ma) ||
      (a = b && p(b.next) && p(b.error) && p(b.complete) && Hb(b));
    return a;
  }
  function n(b) {
    return function (a) {
      if (p(null === a || void 0 === a ? void 0 : a.lift))
        return a.lift(function (a) {
          try {
            return b(a, this);
          } catch (d) {
            this.error(d);
          }
        });
      throw new TypeError("Unable to lift unknown Observable type");
    };
  }
  function Xa() {
    return n(function (b, a) {
      var c = null;
      b._refCount++;
      var d = new m(a, void 0, void 0, void 0, function () {
        if (!b || 0 >= b._refCount || 0 < --b._refCount) c = null;
        else {
          var d = b._connection,
            f = c;
          c = null;
          !d || (f && d !== f) || d.unsubscribe();
          a.unsubscribe();
        }
      });
      b.subscribe(d);
      d.closed || (c = b.connect());
    });
  }
  function Mb(b) {
    var a = U.schedule;
    return new u(function (c) {
      var d = new D(),
        e = b || Da,
        f = e.now(),
        h = function (l) {
          var k = e.now();
          c.next({ timestamp: b ? k : l, elapsed: k - f });
          c.closed || d.add(a(h));
        };
      d.add(a(h));
      return d;
    });
  }
  function Nb(b) {
    return b in Ya ? (delete Ya[b], !0) : !1;
  }
  function be(b) {
    return new u(function (a) {
      return b.schedule(function () {
        return a.complete();
      });
    });
  }
  function Ea(b) {
    return b && p(b.schedule);
  }
  function na(b) {
    return p(b[b.length - 1]) ? b.pop() : void 0;
  }
  function Q(b) {
    return Ea(b[b.length - 1]) ? b.pop() : void 0;
  }
  function Ob(b) {
    return (
      Symbol.asyncIterator &&
      p(null === b || void 0 === b ? void 0 : b[Symbol.asyncIterator])
    );
  }
  function Pb(b) {
    return new TypeError(
      "You provided " +
        (null !== b && "object" === typeof b
          ? "an invalid object"
          : "'" + b + "'") +
        " where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable."
    );
  }
  function Qb(b) {
    return p(null === b || void 0 === b ? void 0 : b[Za]);
  }
  function Rb(b) {
    return Zd(this, arguments, function () {
      var a, c, d, e;
      return Ta(this, function (f) {
        switch (f.label) {
          case 0:
            (a = b.getReader()), (f.label = 1);
          case 1:
            f.trys.push([1, , 9, 10]), (f.label = 2);
          case 2:
            return [4, da(a.read())];
          case 3:
            return (
              (c = f.sent()),
              (d = c.value),
              (e = c.done) ? [4, da(void 0)] : [3, 5]
            );
          case 4:
            return [2, f.sent()];
          case 5:
            return [4, da(d)];
          case 6:
            return [4, f.sent()];
          case 7:
            return f.sent(), [3, 2];
          case 8:
            return [3, 10];
          case 9:
            return a.releaseLock(), [7];
          case 10:
            return [2];
        }
      });
    });
  }
  function v(b) {
    if (b instanceof u) return b;
    if (null != b) {
      if (p(b[oa])) return ce(b);
      if ($a(b)) return de(b);
      if (p(null === b || void 0 === b ? void 0 : b.then)) return ee(b);
      if (Ob(b)) return Sb(b);
      if (Qb(b)) return fe(b);
      if (p(null === b || void 0 === b ? void 0 : b.getReader))
        return Sb(Rb(b));
    }
    throw Pb(b);
  }
  function ce(b) {
    return new u(function (a) {
      var c = b[oa]();
      if (p(c.subscribe)) return c.subscribe(a);
      throw new TypeError(
        "Provided object does not correctly implement Symbol.observable"
      );
    });
  }
  function de(b) {
    return new u(function (a) {
      for (var c = 0; c < b.length && !a.closed; c++) a.next(b[c]);
      a.complete();
    });
  }
  function ee(b) {
    return new u(function (a) {
      b.then(
        function (b) {
          a.closed || (a.next(b), a.complete());
        },
        function (b) {
          return a.error(b);
        }
      ).then(null, Ib);
    });
  }
  function fe(b) {
    return new u(function (a) {
      var c, d;
      try {
        for (var e = F(b), f = e.next(); !f.done; f = e.next())
          if ((a.next(f.value), a.closed)) return;
      } catch (h) {
        c = { error: h };
      } finally {
        try {
          f && !f.done && (d = e.return) && d.call(e);
        } finally {
          if (c) throw c.error;
        }
      }
      a.complete();
    });
  }
  function Sb(b) {
    return new u(function (a) {
      ge(b, a).catch(function (b) {
        return a.error(b);
      });
    });
  }
  function ge(b, a) {
    var c, d, e, f;
    return Yd(this, void 0, void 0, function () {
      var h, l;
      return Ta(this, function (k) {
        switch (k.label) {
          case 0:
            k.trys.push([0, 5, 6, 11]), (c = $d(b)), (k.label = 1);
          case 1:
            return [4, c.next()];
          case 2:
            if (((d = k.sent()), d.done)) return [3, 4];
            h = d.value;
            a.next(h);
            if (a.closed) return [2];
            k.label = 3;
          case 3:
            return [3, 1];
          case 4:
            return [3, 11];
          case 5:
            return (l = k.sent()), (e = { error: l }), [3, 11];
          case 6:
            return (
              k.trys.push([6, , 9, 10]),
              d && !d.done && (f = c.return) ? [4, f.call(c)] : [3, 8]
            );
          case 7:
            k.sent(), (k.label = 8);
          case 8:
            return [3, 10];
          case 9:
            if (e) throw e.error;
            return [7];
          case 10:
            return [7];
          case 11:
            return a.complete(), [2];
        }
      });
    });
  }
  function G(b, a, c, d, e) {
    void 0 === d && (d = 0);
    void 0 === e && (e = !1);
    a = a.schedule(function () {
      c();
      e ? b.add(this.schedule(null, d)) : this.unsubscribe();
    }, d);
    b.add(a);
    if (!e) return a;
  }
  function pa(b, a) {
    void 0 === a && (a = 0);
    return n(function (c, d) {
      c.subscribe(
        new m(
          d,
          function (c) {
            return G(
              d,
              b,
              function () {
                return d.next(c);
              },
              a
            );
          },
          function () {
            return G(
              d,
              b,
              function () {
                return d.complete();
              },
              a
            );
          },
          function (c) {
            return G(
              d,
              b,
              function () {
                return d.error(c);
              },
              a
            );
          }
        )
      );
    });
  }
  function qa(b, a) {
    void 0 === a && (a = 0);
    return n(function (c, d) {
      d.add(
        b.schedule(function () {
          return c.subscribe(d);
        }, a)
      );
    });
  }
  function he(b, a) {
    return new u(function (c) {
      var d = 0;
      return a.schedule(function () {
        d === b.length
          ? c.complete()
          : (c.next(b[d++]), c.closed || this.schedule());
      });
    });
  }
  function Tb(b, a) {
    return new u(function (c) {
      var d;
      G(c, a, function () {
        d = b[Za]();
        G(
          c,
          a,
          function () {
            var a, b, h;
            try {
              (a = d.next()), (b = a.value), (h = a.done);
            } catch (l) {
              c.error(l);
              return;
            }
            h ? c.complete() : c.next(b);
          },
          0,
          !0
        );
      });
      return function () {
        return p(null === d || void 0 === d ? void 0 : d.return) && d.return();
      };
    });
  }
  function Ub(b, a) {
    if (!b) throw Error("Iterable cannot be null");
    return new u(function (c) {
      G(c, a, function () {
        var d = b[Symbol.asyncIterator]();
        G(
          c,
          a,
          function () {
            d.next().then(function (a) {
              a.done ? c.complete() : c.next(a.value);
            });
          },
          0,
          !0
        );
      });
    });
  }
  function Vb(b, a) {
    if (null != b) {
      if (p(b[oa])) return v(b).pipe(qa(a), pa(a));
      if ($a(b)) return he(b, a);
      if (p(null === b || void 0 === b ? void 0 : b.then))
        return v(b).pipe(qa(a), pa(a));
      if (Ob(b)) return Ub(b, a);
      if (Qb(b)) return Tb(b, a);
      if (p(null === b || void 0 === b ? void 0 : b.getReader))
        return Ub(Rb(b), a);
    }
    throw Pb(b);
  }
  function J(b, a) {
    return a ? Vb(b, a) : v(b);
  }
  function ab() {
    for (var b = [], a = 0; a < arguments.length; a++) b[a] = arguments[a];
    a = Q(b);
    return J(b, a);
  }
  function Wb(b, a) {
    var c = p(b)
        ? b
        : function () {
            return b;
          },
      d = function (a) {
        return a.error(c());
      };
    return new u(
      a
        ? function (b) {
            return a.schedule(d, 0, b);
          }
        : d
    );
  }
  function Fa(b, a) {
    var c,
      d,
      e,
      f = b.kind,
      h = b.value;
    b = b.error;
    if ("string" !== typeof f)
      throw new TypeError('Invalid notification, missing "kind"');
    "N" === f
      ? null === (c = a.next) || void 0 === c
        ? void 0
        : c.call(a, h)
      : "E" === f
      ? null === (d = a.error) || void 0 === d
        ? void 0
        : d.call(a, b)
      : null === (e = a.complete) || void 0 === e
      ? void 0
      : e.call(a);
  }
  function bb(b) {
    return b instanceof Date && !isNaN(b);
  }
  function cb(b, a) {
    b = bb(b) ? { first: b } : "number" === typeof b ? { each: b } : b;
    var c = b.first,
      d = b.each,
      e = b.with,
      f = void 0 === e ? ie : e,
      e = b.scheduler,
      h = void 0 === e ? (null !== a && void 0 !== a ? a : M) : e;
    a = b.meta;
    var l = void 0 === a ? null : a;
    if (null == c && null == d) throw new TypeError("No timeout provided.");
    return n(function (a, b) {
      var e,
        k,
        g = null,
        w = 0,
        L = function (a) {
          k = G(
            b,
            h,
            function () {
              try {
                e.unsubscribe(),
                  v(f({ meta: l, lastValue: g, seen: w })).subscribe(b);
              } catch (W) {
                b.error(W);
              }
            },
            a
          );
        };
      e = a.subscribe(
        new m(
          b,
          function (a) {
            null === k || void 0 === k ? void 0 : k.unsubscribe();
            w++;
            b.next((g = a));
            0 < d && L(d);
          },
          void 0,
          void 0,
          function () {
            (null === k || void 0 === k ? 0 : k.closed) ||
              (null === k || void 0 === k ? void 0 : k.unsubscribe());
            g = null;
          }
        )
      );
      L(null != c ? ("number" === typeof c ? c : +c - h.now()) : d);
    });
  }
  function ie(b) {
    throw new Xb(b);
  }
  function N(b, a) {
    return n(function (c, d) {
      var e = 0;
      c.subscribe(
        new m(d, function (c) {
          d.next(b.call(a, c, e++));
        })
      );
    });
  }
  function X(b) {
    return N(function (a) {
      return je(a) ? b.apply(void 0, A([], z(a))) : b(a);
    });
  }
  function Ga(b, a, c, d) {
    if (c)
      if (Ea(c)) d = c;
      else
        return function () {
          for (var e = [], f = 0; f < arguments.length; f++)
            e[f] = arguments[f];
          return Ga(b, a, d).apply(this, e).pipe(X(c));
        };
    return d
      ? function () {
          for (var c = [], f = 0; f < arguments.length; f++)
            c[f] = arguments[f];
          return Ga(b, a).apply(this, c).pipe(qa(d), pa(d));
        }
      : function () {
          for (var c = this, d = [], h = 0; h < arguments.length; h++)
            d[h] = arguments[h];
          var l = new db(),
            k = !0;
          return new u(function (e) {
            e = l.subscribe(e);
            if (k) {
              var f = (k = !1),
                h = !1;
              a.apply(
                c,
                A(A([], z(d)), [
                  function () {
                    for (var a = [], c = 0; c < arguments.length; c++)
                      a[c] = arguments[c];
                    if (b && ((c = a.shift()), null != c)) {
                      l.error(c);
                      return;
                    }
                    l.next(1 < a.length ? a : a[0]);
                    h = !0;
                    f && l.complete();
                  },
                ])
              );
              h && l.complete();
              f = !0;
            }
            return e;
          });
        };
  }
  function Yb(b) {
    if (1 === b.length) {
      var a = b[0];
      if (ke(a)) return { args: a, keys: null };
      if (a && "object" === typeof a && le(a) === me)
        return (
          (b = ne(a)),
          {
            args: b.map(function (b) {
              return a[b];
            }),
            keys: b,
          }
        );
    }
    return { args: b, keys: null };
  }
  function Zb(b, a) {
    return b.reduce(function (b, d, e) {
      return (b[d] = a[e]), b;
    }, {});
  }
  function $b() {
    for (var b = [], a = 0; a < arguments.length; a++) b[a] = arguments[a];
    var c = Q(b),
      a = na(b),
      b = Yb(b),
      d = b.args,
      e = b.keys;
    if (0 === d.length) return J([], c);
    c = new u(
      ac(
        d,
        c,
        e
          ? function (a) {
              return Zb(e, a);
            }
          : E
      )
    );
    return a ? c.pipe(X(a)) : c;
  }
  function ac(b, a, c) {
    void 0 === c && (c = E);
    return function (d) {
      bc(
        a,
        function () {
          for (
            var e = b.length,
              f = Array(e),
              h = e,
              l = e,
              k = function (e) {
                bc(
                  a,
                  function () {
                    var k = !1;
                    J(b[e], a).subscribe(
                      new m(
                        d,
                        function (a) {
                          f[e] = a;
                          k || ((k = !0), l--);
                          l || d.next(c(f.slice()));
                        },
                        function () {
                          --h || d.complete();
                        }
                      )
                    );
                  },
                  d
                );
              },
              g = 0;
            g < e;
            g++
          )
            k(g);
        },
        d
      );
    };
  }
  function bc(b, a, c) {
    b ? G(c, b, a) : a();
  }
  function eb(b, a, c, d, e, f, h, l) {
    var k = [],
      g = 0,
      q = 0,
      y = !1,
      r = function (a) {
        return g < d ? t(a) : k.push(a);
      },
      t = function (b) {
        f && a.next(b);
        g++;
        var l = !1;
        v(c(b, q++)).subscribe(
          new m(
            a,
            function (b) {
              null === e || void 0 === e ? void 0 : e(b);
              f ? r(b) : a.next(b);
            },
            function () {
              l = !0;
            },
            void 0,
            function () {
              if (l)
                try {
                  g--;
                  for (
                    var b = function () {
                      var b = k.shift();
                      h
                        ? G(a, h, function () {
                            return t(b);
                          })
                        : t(b);
                    };
                    k.length && g < d;

                  )
                    b();
                  !y || k.length || g || a.complete();
                } catch (R) {
                  a.error(R);
                }
            }
          )
        );
      };
    b.subscribe(
      new m(a, r, function () {
        y = !0;
        !y || k.length || g || a.complete();
      })
    );
    return function () {
      null === l || void 0 === l ? void 0 : l();
    };
  }
  function H(b, a, c) {
    void 0 === c && (c = Infinity);
    if (p(a))
      return H(function (c, e) {
        return N(function (b, d) {
          return a(c, b, e, d);
        })(v(b(c, e)));
      }, c);
    "number" === typeof a && (c = a);
    return n(function (a, e) {
      return eb(a, e, b, c);
    });
  }
  function ra(b) {
    void 0 === b && (b = Infinity);
    return H(E, b);
  }
  function Ha() {
    return ra(1);
  }
  function sa() {
    for (var b = [], a = 0; a < arguments.length; a++) b[a] = arguments[a];
    return Ha()(J(b, Q(b)));
  }
  function ta(b) {
    return new u(function (a) {
      v(b()).subscribe(a);
    });
  }
  function fb(b, a, c, d) {
    p(c) && ((d = c), (c = void 0));
    if (d) return fb(b, a, c).pipe(X(d));
    d = z(
      oe(b)
        ? pe.map(function (d) {
            return function (e) {
              return b[d](a, e, c);
            };
          })
        : qe(b)
        ? re.map(cc(b, a))
        : se(b)
        ? te.map(cc(b, a))
        : [],
      2
    );
    var e = d[0],
      f = d[1];
    if (!e && $a(b))
      return H(function (b) {
        return fb(b, a, c);
      })(v(b));
    if (!e) throw new TypeError("Invalid event target");
    return new u(function (a) {
      var b = function () {
        for (var b = [], c = 0; c < arguments.length; c++) b[c] = arguments[c];
        return a.next(1 < b.length ? b : b[0]);
      };
      e(b);
      return function () {
        return f(b);
      };
    });
  }
  function cc(b, a) {
    return function (c) {
      return function (d) {
        return b[c](a, d);
      };
    };
  }
  function qe(b) {
    return p(b.addListener) && p(b.removeListener);
  }
  function se(b) {
    return p(b.on) && p(b.off);
  }
  function oe(b) {
    return p(b.addEventListener) && p(b.removeEventListener);
  }
  function dc(b, a, c) {
    return c
      ? dc(b, a).pipe(X(c))
      : new u(function (c) {
          var d = function () {
              for (var a = [], b = 0; b < arguments.length; b++)
                a[b] = arguments[b];
              return c.next(1 === a.length ? a[0] : a);
            },
            f = b(d);
          return p(a)
            ? function () {
                return a(d, f);
              }
            : void 0;
        });
  }
  function fa(b, a, c) {
    void 0 === b && (b = 0);
    void 0 === c && (c = ua);
    var d = -1;
    null != a && (Ea(a) ? (c = a) : (d = a));
    return new u(function (a) {
      var e = bb(b) ? +b - c.now() : b;
      0 > e && (e = 0);
      var h = 0;
      return c.schedule(function () {
        a.closed ||
          (a.next(h++), 0 <= d ? this.schedule(void 0, d) : a.complete());
      }, e);
    });
  }
  function ec(b, a) {
    void 0 === b && (b = 0);
    void 0 === a && (a = M);
    0 > b && (b = 0);
    return fa(b, b, a);
  }
  function Y(b) {
    return 1 === b.length && ue(b[0]) ? b[0] : b;
  }
  function fc() {
    for (var b = [], a = 0; a < arguments.length; a++) b[a] = arguments[a];
    var c = Y(b);
    return n(function (a, b) {
      var d = A([a], z(c)),
        e = function () {
          if (!b.closed)
            if (0 < d.length) {
              var a = void 0;
              try {
                a = v(d.shift());
              } catch (w) {
                e();
                return;
              }
              var c = new m(b, void 0, B, B);
              b.add(a.subscribe(c));
              c.add(e);
            } else b.complete();
        };
      e();
    });
  }
  function gc(b, a) {
    return function (c, d) {
      return !b.call(a, c, d);
    };
  }
  function O(b, a) {
    return n(function (c, d) {
      var e = 0;
      c.subscribe(
        new m(d, function (c) {
          return b.call(a, c, e++) && d.next(c);
        })
      );
    });
  }
  function hc(b) {
    return function (a) {
      for (
        var c = [],
          d = function (d) {
            c.push(
              v(b[d]).subscribe(
                new m(a, function (b) {
                  if (c) {
                    for (var e = 0; e < c.length; e++)
                      e !== d && c[e].unsubscribe();
                    c = null;
                  }
                  a.next(b);
                })
              )
            );
          },
          e = 0;
        c && !a.closed && e < b.length;
        e++
      )
        d(e);
    };
  }
  function gb() {
    for (var b = [], a = 0; a < arguments.length; a++) b[a] = arguments[a];
    var c = na(b),
      d = Y(b);
    return d.length
      ? new u(function (a) {
          var b = d.map(function () {
              return [];
            }),
            e = d.map(function () {
              return !1;
            });
          a.add(function () {
            b = e = null;
          });
          for (
            var l = function (f) {
                v(d[f]).subscribe(
                  new m(
                    a,
                    function (d) {
                      b[f].push(d);
                      b.every(function (a) {
                        return a.length;
                      }) &&
                        ((d = b.map(function (a) {
                          return a.shift();
                        })),
                        a.next(c ? c.apply(void 0, A([], z(d))) : d),
                        b.some(function (a, b) {
                          return !a.length && e[b];
                        }) && a.complete());
                    },
                    function () {
                      e[f] = !0;
                      !b[f].length && a.complete();
                    }
                  )
                );
              },
              k = 0;
            !a.closed && k < d.length;
            k++
          )
            l(k);
          return function () {
            b = e = null;
          };
        })
      : K;
  }
  function hb(b) {
    return n(function (a, c) {
      var d = !1,
        e = null,
        f = null,
        h = !1,
        l = function () {
          null === f || void 0 === f ? void 0 : f.unsubscribe();
          f = null;
          if (d) {
            d = !1;
            var a = e;
            e = null;
            c.next(a);
          }
          h && c.complete();
        },
        k = function () {
          f = null;
          h && c.complete();
        };
      a.subscribe(
        new m(
          c,
          function (a) {
            d = !0;
            e = a;
            f || v(b(a)).subscribe((f = new m(c, l, k)));
          },
          function () {
            h = !0;
            (d && f && !f.closed) || c.complete();
          }
        )
      );
    });
  }
  function ic(b, a) {
    void 0 === a && (a = ua);
    return hb(function () {
      return fa(b, a);
    });
  }
  function jc(b) {
    return n(function (a, c) {
      var d = [];
      a.subscribe(
        new m(
          c,
          function (a) {
            return d.push(a);
          },
          function () {
            c.next(d);
            c.complete();
          }
        )
      );
      b.subscribe(
        new m(
          c,
          function () {
            var a = d;
            d = [];
            c.next(a);
          },
          B
        )
      );
      return function () {
        d = null;
      };
    });
  }
  function kc(b, a) {
    void 0 === a && (a = null);
    a = null !== a && void 0 !== a ? a : b;
    return n(function (c, d) {
      var e = [],
        f = 0;
      c.subscribe(
        new m(
          d,
          function (c) {
            var h,
              k,
              g,
              q,
              y = null;
            0 === f++ % a && e.push([]);
            try {
              for (var r = F(e), t = r.next(); !t.done; t = r.next()) {
                var m = t.value;
                m.push(c);
                b <= m.length &&
                  ((y = null !== y && void 0 !== y ? y : []), y.push(m));
              }
            } catch (R) {
              h = { error: R };
            } finally {
              try {
                t && !t.done && (k = r.return) && k.call(r);
              } finally {
                if (h) throw h.error;
              }
            }
            if (y)
              try {
                for (var n = F(y), W = n.next(); !W.done; W = n.next())
                  (m = W.value), P(e, m), d.next(m);
              } catch (R) {
                g = { error: R };
              } finally {
                try {
                  W && !W.done && (q = n.return) && q.call(n);
                } finally {
                  if (g) throw g.error;
                }
              }
          },
          function () {
            var a, b;
            try {
              for (var c = F(e), f = c.next(); !f.done; f = c.next())
                d.next(f.value);
            } catch (q) {
              a = { error: q };
            } finally {
              try {
                f && !f.done && (b = c.return) && b.call(c);
              } finally {
                if (a) throw a.error;
              }
            }
            d.complete();
          },
          void 0,
          function () {
            e = null;
          }
        )
      );
    });
  }
  function lc(b) {
    for (var a, c, d = [], e = 1; e < arguments.length; e++)
      d[e - 1] = arguments[e];
    var f = null !== (a = Q(d)) && void 0 !== a ? a : M,
      h = null !== (c = d[0]) && void 0 !== c ? c : null,
      l = d[1] || Infinity;
    return n(function (a, c) {
      var d = [],
        e = !1,
        k = function (a) {
          var b = a.buffer;
          a.subs.unsubscribe();
          P(d, a);
          c.next(b);
          e && g();
        },
        g = function () {
          if (d) {
            var a = new D();
            c.add(a);
            var e = { buffer: [], subs: a };
            d.push(e);
            G(
              a,
              f,
              function () {
                return k(e);
              },
              b
            );
          }
        };
      null !== h && 0 <= h ? G(c, f, g, h, !0) : (e = !0);
      g();
      var w = new m(
        c,
        function (a) {
          var b,
            c,
            e = d.slice();
          try {
            for (var f = F(e), h = f.next(); !h.done; h = f.next()) {
              var g = h.value,
                w = g.buffer;
              w.push(a);
              l <= w.length && k(g);
            }
          } catch (we) {
            b = { error: we };
          } finally {
            try {
              h && !h.done && (c = f.return) && c.call(f);
            } finally {
              if (b) throw b.error;
            }
          }
        },
        function () {
          for (; null === d || void 0 === d ? 0 : d.length; )
            c.next(d.shift().buffer);
          null === w || void 0 === w ? void 0 : w.unsubscribe();
          c.complete();
          c.unsubscribe();
        },
        void 0,
        function () {
          return (d = null);
        }
      );
      a.subscribe(w);
    });
  }
  function mc(b, a) {
    return n(function (c, d) {
      var e = [];
      v(b).subscribe(
        new m(
          d,
          function (b) {
            var c = [];
            e.push(c);
            var f = new D();
            f.add(
              v(a(b)).subscribe(
                new m(
                  d,
                  function () {
                    P(e, c);
                    d.next(c);
                    f.unsubscribe();
                  },
                  B
                )
              )
            );
          },
          B
        )
      );
      c.subscribe(
        new m(
          d,
          function (a) {
            var b, c;
            try {
              for (var d = F(e), f = d.next(); !f.done; f = d.next())
                f.value.push(a);
            } catch (q) {
              b = { error: q };
            } finally {
              try {
                f && !f.done && (c = d.return) && c.call(d);
              } finally {
                if (b) throw b.error;
              }
            }
          },
          function () {
            for (; 0 < e.length; ) d.next(e.shift());
            d.complete();
          }
        )
      );
    });
  }
  function nc(b) {
    return n(function (a, c) {
      var d = null,
        e = null,
        f = function () {
          null === e || void 0 === e ? void 0 : e.unsubscribe();
          var a = d;
          d = [];
          a && c.next(a);
          v(b()).subscribe((e = new m(c, f, B)));
        };
      f();
      a.subscribe(
        new m(
          c,
          function (a) {
            return null === d || void 0 === d ? void 0 : d.push(a);
          },
          function () {
            d && c.next(d);
            c.complete();
          },
          void 0,
          function () {
            return (d = e = null);
          }
        )
      );
    });
  }
  function ib(b) {
    return n(function (a, c) {
      var d = null,
        e = !1,
        f,
        d = a.subscribe(
          new m(c, void 0, void 0, function (h) {
            f = v(b(h, ib(b)(a)));
            d ? (d.unsubscribe(), (d = null), f.subscribe(c)) : (e = !0);
          })
        );
      e && (d.unsubscribe(), (d = null), f.subscribe(c));
    });
  }
  function oc(b, a, c, d, e) {
    return function (f, h) {
      var l = c,
        k = a,
        g = 0;
      f.subscribe(
        new m(
          h,
          function (a) {
            var c = g++;
            k = l ? b(k, a, c) : ((l = !0), a);
            d && h.next(k);
          },
          e &&
            function () {
              l && h.next(k);
              h.complete();
            }
        )
      );
    };
  }
  function ga(b, a) {
    return n(oc(b, a, 2 <= arguments.length, !1, !0));
  }
  function jb() {
    return n(function (b, a) {
      ga(xe, [])(b).subscribe(a);
    });
  }
  function pc(b, a) {
    return Wa(
      jb(),
      H(function (a) {
        return b(a);
      }),
      a ? X(a) : E
    );
  }
  function Ia(b) {
    return pc($b, b);
  }
  function kb() {
    for (var b = [], a = 0; a < arguments.length; a++) b[a] = arguments[a];
    return (a = na(b))
      ? Wa(kb.apply(void 0, A([], z(b))), X(a))
      : n(function (a, d) {
          ac(A([a], z(Y(b))))(d);
        });
  }
  function qc() {
    for (var b = [], a = 0; a < arguments.length; a++) b[a] = arguments[a];
    return kb.apply(void 0, A([], z(b)));
  }
  function Ja(b, a) {
    return p(a) ? H(b, a, 1) : H(b, 1);
  }
  function rc(b, a) {
    return p(a)
      ? Ja(function () {
          return b;
        }, a)
      : Ja(function () {
          return b;
        });
  }
  function sc() {
    for (var b = [], a = 0; a < arguments.length; a++) b[a] = arguments[a];
    var c = Q(b);
    return n(function (a, e) {
      Ha()(J(A([a], z(b)), c)).subscribe(e);
    });
  }
  function tc() {
    for (var b = [], a = 0; a < arguments.length; a++) b[a] = arguments[a];
    return sc.apply(void 0, A([], z(b)));
  }
  function ye(b) {
    return new u(function (a) {
      return b.subscribe(a);
    });
  }
  function Ka(b, a) {
    void 0 === a && (a = ze);
    var c = a.connector;
    return n(function (a, e) {
      var d = c();
      J(b(ye(d))).subscribe(e);
      e.add(a.subscribe(d));
    });
  }
  function uc(b) {
    return ga(function (a, c, d) {
      return !b || b(c, d) ? a + 1 : a;
    }, 0);
  }
  function vc(b) {
    return n(function (a, c) {
      var d = !1,
        e = null,
        f = null,
        h = function () {
          null === f || void 0 === f ? void 0 : f.unsubscribe();
          f = null;
          if (d) {
            d = !1;
            var a = e;
            e = null;
            c.next(a);
          }
        };
      a.subscribe(
        new m(
          c,
          function (a) {
            null === f || void 0 === f ? void 0 : f.unsubscribe();
            d = !0;
            e = a;
            f = new m(c, h, B);
            v(b(a)).subscribe(f);
          },
          function () {
            h();
            c.complete();
          },
          void 0,
          function () {
            e = f = null;
          }
        )
      );
    });
  }
  function wc(b, a) {
    void 0 === a && (a = M);
    return n(function (c, d) {
      function e() {
        var c = l + b,
          e = a.now();
        e < c ? ((f = this.schedule(void 0, c - e)), d.add(f)) : k();
      }
      var f = null,
        h = null,
        l = null,
        k = function () {
          if (f) {
            f.unsubscribe();
            f = null;
            var a = h;
            h = null;
            d.next(a);
          }
        };
      c.subscribe(
        new m(
          d,
          function (c) {
            h = c;
            l = a.now();
            f || ((f = a.schedule(e, b)), d.add(f));
          },
          function () {
            k();
            d.complete();
          },
          void 0,
          function () {
            h = f = null;
          }
        )
      );
    });
  }
  function va(b) {
    return n(function (a, c) {
      var d = !1;
      a.subscribe(
        new m(
          c,
          function (a) {
            d = !0;
            c.next(a);
          },
          function () {
            d || c.next(b);
            c.complete();
          }
        )
      );
    });
  }
  function Z(b) {
    return 0 >= b
      ? function () {
          return K;
        }
      : n(function (a, c) {
          var d = 0;
          a.subscribe(
            new m(c, function (a) {
              ++d <= b && (c.next(a), b <= d && c.complete());
            })
          );
        });
  }
  function lb() {
    return n(function (b, a) {
      b.subscribe(new m(a, B));
    });
  }
  function mb(b) {
    return N(function () {
      return b;
    });
  }
  function La(b, a) {
    return a
      ? function (c) {
          return sa(a.pipe(Z(1), lb()), c.pipe(La(b)));
        }
      : H(function (a, d) {
          return b(a, d).pipe(Z(1), mb(a));
        });
  }
  function xc(b, a) {
    void 0 === a && (a = M);
    var c = fa(b, a);
    return La(function () {
      return c;
    });
  }
  function yc() {
    return n(function (b, a) {
      b.subscribe(
        new m(a, function (b) {
          return Fa(b, a);
        })
      );
    });
  }
  function zc(b, a) {
    return n(function (c, d) {
      var e = new Set();
      c.subscribe(
        new m(d, function (a) {
          var c = b ? b(a) : a;
          e.has(c) || (e.add(c), d.next(a));
        })
      );
      null === a || void 0 === a
        ? void 0
        : a.subscribe(
            new m(
              d,
              function () {
                return e.clear();
              },
              B
            )
          );
    });
  }
  function nb(b, a) {
    void 0 === a && (a = E);
    b = null !== b && void 0 !== b ? b : Ae;
    return n(function (c, d) {
      var e,
        f = !0;
      c.subscribe(
        new m(d, function (c) {
          var h = a(c);
          if (f || !b(e, h)) (f = !1), (e = h), d.next(c);
        })
      );
    });
  }
  function Ae(b, a) {
    return b === a;
  }
  function Ac(b, a) {
    return nb(function (c, d) {
      return a ? a(c[b], d[b]) : c[b] === d[b];
    });
  }
  function wa(b) {
    void 0 === b && (b = Be);
    return n(function (a, c) {
      var d = !1;
      a.subscribe(
        new m(
          c,
          function (a) {
            d = !0;
            c.next(a);
          },
          function () {
            return d ? c.complete() : c.error(b());
          }
        )
      );
    });
  }
  function Be() {
    return new aa();
  }
  function Bc(b, a) {
    if (0 > b) throw new ob();
    var c = 2 <= arguments.length;
    return function (d) {
      return d.pipe(
        O(function (a, c) {
          return c === b;
        }),
        Z(1),
        c
          ? va(a)
          : wa(function () {
              return new ob();
            })
      );
    };
  }
  function Cc() {
    for (var b = [], a = 0; a < arguments.length; a++) b[a] = arguments[a];
    return function (a) {
      return sa(a, ab.apply(void 0, A([], z(b))));
    };
  }
  function Dc(b, a) {
    return n(function (c, d) {
      var e = 0;
      c.subscribe(
        new m(
          d,
          function (f) {
            b.call(a, f, e++, c) || (d.next(!1), d.complete());
          },
          function () {
            d.next(!0);
            d.complete();
          }
        )
      );
    });
  }
  function Ma() {
    return n(function (b, a) {
      var c = !1,
        d = null;
      b.subscribe(
        new m(
          a,
          function (b) {
            d ||
              (d = v(b).subscribe(
                new m(a, void 0, function () {
                  d = null;
                  c && a.complete();
                })
              ));
          },
          function () {
            c = !0;
            !d && a.complete();
          }
        )
      );
    });
  }
  function pb(b, a) {
    return a
      ? function (c) {
          return c.pipe(
            pb(function (c, e) {
              return v(b(c, e)).pipe(
                N(function (b, d) {
                  return a(c, b, e, d);
                })
              );
            })
          );
        }
      : n(function (a, d) {
          var c = 0,
            f = null,
            h = !1;
          a.subscribe(
            new m(
              d,
              function (a) {
                f ||
                  ((f = new m(d, void 0, function () {
                    f = null;
                    h && d.complete();
                  })),
                  v(b(a, c++)).subscribe(f));
              },
              function () {
                h = !0;
                !f && d.complete();
              }
            )
          );
        });
  }
  function Ec(b, a, c) {
    void 0 === a && (a = Infinity);
    a = 1 > (a || 0) ? Infinity : a;
    return n(function (d, e) {
      return eb(d, e, b, a, void 0, !0, c);
    });
  }
  function Fc(b) {
    return n(function (a, c) {
      try {
        a.subscribe(c);
      } finally {
        c.add(b);
      }
    });
  }
  function Gc(b, a) {
    return n(Hc(b, a, "value"));
  }
  function Hc(b, a, c) {
    var d = "index" === c;
    return function (c, f) {
      var e = 0;
      c.subscribe(
        new m(
          f,
          function (h) {
            var l = e++;
            b.call(a, h, l, c) && (f.next(d ? l : h), f.complete());
          },
          function () {
            f.next(d ? -1 : void 0);
            f.complete();
          }
        )
      );
    };
  }
  function Ic(b, a) {
    return n(Hc(b, a, "index"));
  }
  function Jc(b, a) {
    var c = 2 <= arguments.length;
    return function (d) {
      return d.pipe(
        b
          ? O(function (a, c) {
              return b(a, c, d);
            })
          : E,
        Z(1),
        c
          ? va(a)
          : wa(function () {
              return new aa();
            })
      );
    };
  }
  function Kc(b, a, c, d) {
    return n(function (e, f) {
      function h(a, b) {
        var c = new u(function (a) {
          y.activeGroups++;
          var c = b.subscribe(a);
          return function () {
            c.unsubscribe();
            0 === --y.activeGroups && y.teardownAttempted && y.unsubscribe();
          };
        });
        c.key = a;
        return c;
      }
      var l;
      a && "function" !== typeof a
        ? ((c = a.duration), (l = a.element), (d = a.connector))
        : (l = a);
      var k = new Map(),
        g = function (a) {
          k.forEach(a);
          a(f);
        },
        q = function (a) {
          return g(function (b) {
            return b.error(a);
          });
        },
        y = new Ce(
          f,
          function (a) {
            try {
              var e = b(a),
                g = k.get(e);
              if (!g) {
                k.set(e, (g = d ? d() : new C()));
                var w = h(e, g);
                f.next(w);
                if (c) {
                  var r = new m(
                    g,
                    function () {
                      g.complete();
                      null === r || void 0 === r ? void 0 : r.unsubscribe();
                    },
                    void 0,
                    void 0,
                    function () {
                      return k.delete(e);
                    }
                  );
                  y.add(v(c(w)).subscribe(r));
                }
              }
              g.next(l ? l(a) : a);
            } catch (R) {
              q(R);
            }
          },
          function () {
            return g(function (a) {
              return a.complete();
            });
          },
          q,
          function () {
            return k.clear();
          }
        );
      e.subscribe(y);
    });
  }
  function Lc() {
    return n(function (b, a) {
      b.subscribe(
        new m(
          a,
          function () {
            a.next(!1);
            a.complete();
          },
          function () {
            a.next(!0);
            a.complete();
          }
        )
      );
    });
  }
  function qb(b) {
    return 0 >= b
      ? function () {
          return K;
        }
      : n(function (a, c) {
          var d = [];
          a.subscribe(
            new m(
              c,
              function (a) {
                d.push(a);
                b < d.length && d.shift();
              },
              function () {
                var a, b;
                try {
                  for (var h = F(d), l = h.next(); !l.done; l = h.next())
                    c.next(l.value);
                } catch (k) {
                  a = { error: k };
                } finally {
                  try {
                    l && !l.done && (b = h.return) && b.call(h);
                  } finally {
                    if (a) throw a.error;
                  }
                }
                c.complete();
              },
              void 0,
              function () {
                d = null;
              }
            )
          );
        });
  }
  function Mc(b, a) {
    var c = 2 <= arguments.length;
    return function (d) {
      return d.pipe(
        b
          ? O(function (a, c) {
              return b(a, c, d);
            })
          : E,
        qb(1),
        c
          ? va(a)
          : wa(function () {
              return new aa();
            })
      );
    };
  }
  function Nc() {
    return n(function (b, a) {
      b.subscribe(
        new m(
          a,
          function (b) {
            a.next(Na.createNext(b));
          },
          function () {
            a.next(Na.createComplete());
            a.complete();
          },
          function (b) {
            a.next(Na.createError(b));
            a.complete();
          }
        )
      );
    });
  }
  function Oc(b) {
    return ga(
      p(b)
        ? function (a, c) {
            return 0 < b(a, c) ? a : c;
          }
        : function (a, b) {
            return a > b ? a : b;
          }
    );
  }
  function Pc(b, a, c) {
    void 0 === c && (c = Infinity);
    if (p(a))
      return H(
        function () {
          return b;
        },
        a,
        c
      );
    "number" === typeof a && (c = a);
    return H(function () {
      return b;
    }, c);
  }
  function Qc(b, a, c) {
    void 0 === c && (c = Infinity);
    return n(function (d, e) {
      var f = a;
      return eb(
        d,
        e,
        function (a, c) {
          return b(f, a, c);
        },
        c,
        function (a) {
          f = a;
        },
        !1,
        void 0,
        function () {
          return (f = null);
        }
      );
    });
  }
  function Rc() {
    for (var b = [], a = 0; a < arguments.length; a++) b[a] = arguments[a];
    var c = Q(b),
      d = "number" === typeof b[b.length - 1] ? b.pop() : Infinity,
      b = Y(b);
    return n(function (a, f) {
      ra(d)(J(A([a], z(b)), c)).subscribe(f);
    });
  }
  function Sc() {
    for (var b = [], a = 0; a < arguments.length; a++) b[a] = arguments[a];
    return Rc.apply(void 0, A([], z(b)));
  }
  function Tc(b) {
    return ga(
      p(b)
        ? function (a, c) {
            return 0 > b(a, c) ? a : c;
          }
        : function (a, b) {
            return a < b ? a : b;
          }
    );
  }
  function Oa(b, a) {
    var c = p(b)
      ? b
      : function () {
          return b;
        };
    return p(a)
      ? Ka(a, { connector: c })
      : function (a) {
          return new Pa(a, c);
        };
  }
  function Uc() {
    return n(function (b, a) {
      var c,
        d = !1;
      b.subscribe(
        new m(a, function (b) {
          var e = c;
          c = b;
          d && a.next([e, b]);
          d = !0;
        })
      );
    });
  }
  function Vc() {
    for (var b = [], a = 0; a < arguments.length; a++) b[a] = arguments[a];
    var c = b.length;
    if (0 === c) throw Error("list of properties cannot be empty.");
    return N(function (a) {
      var d = a;
      for (a = 0; a < c; a++)
        if (
          ((d = null === d || void 0 === d ? void 0 : d[b[a]]),
          "undefined" === typeof d)
        )
          return;
      return d;
    });
  }
  function Wc(b) {
    return b
      ? function (a) {
          return Ka(b)(a);
        }
      : function (a) {
          return Oa(new C())(a);
        };
  }
  function Xc(b) {
    return function (a) {
      var c = new Yc(b);
      return new Pa(a, function () {
        return c;
      });
    };
  }
  function Zc() {
    return function (b) {
      var a = new db();
      return new Pa(b, function () {
        return a;
      });
    };
  }
  function $c(b, a, c, d) {
    c && !p(c) && (d = c);
    var e = p(c) ? c : void 0;
    return function (c) {
      return Oa(new ha(b, a, d), e)(c);
    };
  }
  function rb() {
    for (var b = [], a = 0; a < arguments.length; a++) b[a] = arguments[a];
    return b.length
      ? n(function (a, d) {
          hc(A([a], z(b)))(d);
        })
      : E;
  }
  function ad(b) {
    void 0 === b && (b = Infinity);
    return 0 >= b
      ? function () {
          return K;
        }
      : n(function (a, c) {
          var d = 0,
            e,
            f = function () {
              var h = !1;
              e = a.subscribe(
                new m(c, void 0, function () {
                  ++d < b
                    ? e
                      ? (e.unsubscribe(), (e = null), f())
                      : (h = !0)
                    : c.complete();
                })
              );
              h && (e.unsubscribe(), (e = null), f());
            };
          f();
        });
  }
  function bd(b) {
    return n(function (a, c) {
      var d,
        e = !1,
        f,
        h = !1,
        l = !1,
        k = function () {
          f ||
            ((f = new C()),
            b(f).subscribe(
              new m(
                c,
                function () {
                  d ? g() : (e = !0);
                },
                function () {
                  h = !0;
                  l && h && c.complete();
                }
              )
            ));
          return f;
        },
        g = function () {
          l = !1;
          d = a.subscribe(
            new m(c, void 0, function () {
              (((l = !0), h) && (c.complete(), !0)) || k().next();
            })
          );
          e && (d.unsubscribe(), (d = null), (e = !1), g());
        };
      g();
    });
  }
  function cd(b) {
    void 0 === b && (b = Infinity);
    b = b && "object" === typeof b ? b : { count: b };
    var a = b.count,
      c = void 0 === a ? Infinity : a,
      d = b.delay;
    b = b.resetOnSuccess;
    var e = void 0 === b ? !1 : b;
    return 0 >= c
      ? E
      : n(function (a, b) {
          var f = 0,
            h,
            g = function () {
              var l = !1;
              h = a.subscribe(
                new m(
                  b,
                  function (a) {
                    e && (f = 0);
                    b.next(a);
                  },
                  void 0,
                  function (a) {
                    if (f++ < c) {
                      var e = function () {
                        h ? (h.unsubscribe(), (h = null), g()) : (l = !0);
                      };
                      if (null != d) {
                        a = "number" === typeof d ? fa(d) : v(d(a, f));
                        var k = new m(
                          b,
                          function () {
                            k.unsubscribe();
                            e();
                          },
                          function () {
                            b.complete();
                          }
                        );
                        a.subscribe(k);
                      } else e();
                    } else b.error(a);
                  }
                )
              );
              l && (h.unsubscribe(), (h = null), g());
            };
          g();
        });
  }
  function dd(b) {
    return n(function (a, c) {
      var d,
        e = !1,
        f,
        h = function () {
          d = a.subscribe(
            new m(c, void 0, void 0, function (a) {
              f ||
                ((f = new C()),
                b(f).subscribe(
                  new m(c, function () {
                    return d ? h() : (e = !0);
                  })
                ));
              f && f.next(a);
            })
          );
          e && (d.unsubscribe(), (d = null), (e = !1), h());
        };
      h();
    });
  }
  function sb(b) {
    return n(function (a, c) {
      var d = !1,
        e = null;
      a.subscribe(
        new m(c, function (a) {
          d = !0;
          e = a;
        })
      );
      b.subscribe(
        new m(
          c,
          function () {
            if (d) {
              d = !1;
              var a = e;
              e = null;
              c.next(a);
            }
          },
          B
        )
      );
    });
  }
  function ed(b, a) {
    void 0 === a && (a = M);
    return sb(ec(b, a));
  }
  function tb(b, a) {
    return n(oc(b, a, 2 <= arguments.length, !0));
  }
  function fd(b, a) {
    void 0 === a &&
      (a = function (a, b) {
        return a === b;
      });
    return n(function (c, d) {
      var e = { buffer: [], complete: !1 },
        f = { buffer: [], complete: !1 },
        h = function (b, c) {
          var e = new m(
            d,
            function (e) {
              var f = c.buffer,
                h = c.complete;
              0 === f.length
                ? h
                  ? (d.next(!1), d.complete())
                  : b.buffer.push(e)
                : a(e, f.shift()) || (d.next(!1), d.complete());
            },
            function () {
              b.complete = !0;
              var a = c.buffer;
              c.complete && (d.next(0 === a.length), d.complete());
              null === e || void 0 === e ? void 0 : e.unsubscribe();
            }
          );
          return e;
        };
      c.subscribe(h(e, f));
      b.subscribe(h(f, e));
    });
  }
  function ub(b) {
    void 0 === b && (b = {});
    var a = b.connector,
      c =
        void 0 === a
          ? function () {
              return new C();
            }
          : a,
      a = b.resetOnError,
      d = void 0 === a ? !0 : a,
      a = b.resetOnComplete,
      e = void 0 === a ? !0 : a;
    b = b.resetOnRefCountZero;
    var f = void 0 === b ? !0 : b;
    return function (a) {
      var b = null,
        h = null,
        g = null,
        q = 0,
        y = !1,
        m = !1,
        t = function () {
          null === h || void 0 === h ? void 0 : h.unsubscribe();
          h = null;
        },
        L = function () {
          t();
          b = g = null;
          y = m = !1;
        },
        p = function () {
          var a = b;
          L();
          null === a || void 0 === a ? void 0 : a.unsubscribe();
        };
      return n(function (a, l) {
        q++;
        m || y || t();
        var k = (g = null !== g && void 0 !== g ? g : c());
        l.add(function () {
          q--;
          0 !== q || m || y || (h = vb(p, f));
        });
        k.subscribe(l);
        b ||
          ((b = new Qa({
            next: function (a) {
              return k.next(a);
            },
            error: function (a) {
              m = !0;
              t();
              h = vb(L, d, a);
              k.error(a);
            },
            complete: function () {
              y = !0;
              t();
              h = vb(L, e);
              k.complete();
            },
          })),
          J(a).subscribe(b));
      })(a);
    };
  }
  function vb(b, a) {
    for (var c = [], d = 2; d < arguments.length; d++) c[d - 2] = arguments[d];
    return !0 === a
      ? (b(), null)
      : !1 === a
      ? null
      : a
          .apply(void 0, A([], z(c)))
          .pipe(Z(1))
          .subscribe(function () {
            return b();
          });
  }
  function gd(b, a, c) {
    var d,
      e,
      f,
      h = !1;
    b && "object" === typeof b
      ? ((f = null !== (d = b.bufferSize) && void 0 !== d ? d : Infinity),
        (a = null !== (e = b.windowTime) && void 0 !== e ? e : Infinity),
        (h = !!b.refCount),
        (c = b.scheduler))
      : (f = null !== b && void 0 !== b ? b : Infinity);
    return ub({
      connector: function () {
        return new ha(f, a, c);
      },
      resetOnError: !0,
      resetOnComplete: !1,
      resetOnRefCountZero: h,
    });
  }
  function hd(b) {
    return n(function (a, c) {
      var d = !1,
        e,
        f = !1,
        h = 0;
      a.subscribe(
        new m(
          c,
          function (l) {
            f = !0;
            if (!b || b(l, h++, a))
              d && c.error(new id("Too many matching values")),
                (d = !0),
                (e = l);
          },
          function () {
            d
              ? (c.next(e), c.complete())
              : c.error(f ? new jd("No matching values") : new aa());
          }
        )
      );
    });
  }
  function kd(b) {
    return O(function (a, c) {
      return b <= c;
    });
  }
  function ld(b) {
    return 0 >= b
      ? E
      : n(function (a, c) {
          var d = Array(b),
            e = 0;
          a.subscribe(
            new m(c, function (a) {
              var f = e++;
              if (f < b) d[f] = a;
              else {
                var f = f % b,
                  l = d[f];
                d[f] = a;
                c.next(l);
              }
            })
          );
          return function () {
            d = null;
          };
        });
  }
  function md(b) {
    return n(function (a, c) {
      var d = !1,
        e = new m(
          c,
          function () {
            null === e || void 0 === e ? void 0 : e.unsubscribe();
            d = !0;
          },
          B
        );
      v(b).subscribe(e);
      a.subscribe(
        new m(c, function (a) {
          return d && c.next(a);
        })
      );
    });
  }
  function nd(b) {
    return n(function (a, c) {
      var d = !1,
        e = 0;
      a.subscribe(
        new m(c, function (a) {
          return (d || (d = !b(a, e++))) && c.next(a);
        })
      );
    });
  }
  function od() {
    for (var b = [], a = 0; a < arguments.length; a++) b[a] = arguments[a];
    var c = Q(b);
    return n(function (a, e) {
      (c ? sa(b, a, c) : sa(b, a)).subscribe(e);
    });
  }
  function ia(b, a) {
    return n(function (c, d) {
      var e = null,
        f = 0,
        h = !1;
      c.subscribe(
        new m(
          d,
          function (c) {
            null === e || void 0 === e ? void 0 : e.unsubscribe();
            var l = 0,
              g = f++;
            v(b(c, g)).subscribe(
              (e = new m(
                d,
                function (b) {
                  return d.next(a ? a(c, b, g, l++) : b);
                },
                function () {
                  e = null;
                  h && !e && d.complete();
                }
              ))
            );
          },
          function () {
            ((h = !0), !e) && d.complete();
          }
        )
      );
    });
  }
  function pd() {
    return ia(E);
  }
  function qd(b, a) {
    return p(a)
      ? ia(function () {
          return b;
        }, a)
      : ia(function () {
          return b;
        });
  }
  function rd(b, a) {
    return n(function (c, d) {
      var e = a;
      ia(
        function (a, c) {
          return b(e, a, c);
        },
        function (a, b) {
          return (e = b), b;
        }
      )(c).subscribe(d);
      return function () {
        e = null;
      };
    });
  }
  function sd(b) {
    return n(function (a, c) {
      v(b).subscribe(
        new m(
          c,
          function () {
            return c.complete();
          },
          B
        )
      );
      !c.closed && a.subscribe(c);
    });
  }
  function td(b, a) {
    void 0 === a && (a = !1);
    return n(function (c, d) {
      var e = 0;
      c.subscribe(
        new m(d, function (c) {
          var f = b(c, e++);
          (f || a) && d.next(c);
          !f && d.complete();
        })
      );
    });
  }
  function ud(b, a, c) {
    var d = p(b) || a || c ? { next: b, error: a, complete: c } : b;
    return d
      ? n(function (a, b) {
          var c;
          null === (c = d.subscribe) || void 0 === c ? void 0 : c.call(d);
          var e = !0;
          a.subscribe(
            new m(
              b,
              function (a) {
                var c;
                null === (c = d.next) || void 0 === c ? void 0 : c.call(d, a);
                b.next(a);
              },
              function () {
                var a;
                e = !1;
                null === (a = d.complete) || void 0 === a ? void 0 : a.call(d);
                b.complete();
              },
              function (a) {
                var c;
                e = !1;
                null === (c = d.error) || void 0 === c ? void 0 : c.call(d, a);
                b.error(a);
              },
              function () {
                var a, b;
                e &&
                  (null === (a = d.unsubscribe) || void 0 === a
                    ? void 0
                    : a.call(d));
                null === (b = d.finalize) || void 0 === b ? void 0 : b.call(d);
              }
            )
          );
        })
      : E;
  }
  function wb(b, a) {
    a = void 0 === a ? vd : a;
    var c = a.leading,
      d = a.trailing;
    return n(function (a, f) {
      var e = !1,
        l = null,
        g = null,
        w = !1,
        q = function () {
          null === g || void 0 === g ? void 0 : g.unsubscribe();
          g = null;
          d && (r(), w && f.complete());
        },
        y = function () {
          g = null;
          w && f.complete();
        },
        r = function () {
          if (e) {
            e = !1;
            var a = l;
            l = null;
            f.next(a);
            !w && (g = v(b(a)).subscribe(new m(f, q, y)));
          }
        };
      a.subscribe(
        new m(
          f,
          function (a) {
            e = !0;
            l = a;
            (!g || g.closed) &&
              (c ? r() : (g = v(b(a)).subscribe(new m(f, q, y))));
          },
          function () {
            w = !0;
            (d && e && g && !g.closed) || f.complete();
          }
        )
      );
    });
  }
  function wd(b, a, c) {
    void 0 === a && (a = M);
    void 0 === c && (c = vd);
    var d = fa(b, a);
    return wb(function () {
      return d;
    }, c);
  }
  function xd(b) {
    void 0 === b && (b = ua);
    return function (a) {
      return ta(function () {
        return a.pipe(
          tb(
            function (a, d) {
              a = a.current;
              return { value: d, current: b.now(), last: a };
            },
            { current: b.now(), value: void 0, last: void 0 }
          ),
          N(function (a) {
            return new De(a.value, a.current - a.last);
          })
        );
      });
    };
  }
  function yd(b, a, c) {
    var d, e;
    c = null !== c && void 0 !== c ? c : ua;
    bb(b) ? (d = b) : "number" === typeof b && (e = b);
    if (a)
      b = function () {
        return a;
      };
    else throw new TypeError("No observable provided to switch to");
    if (null == d && null == e) throw new TypeError("No timeout provided.");
    return cb({ first: d, each: e, scheduler: c, with: b });
  }
  function zd(b) {
    void 0 === b && (b = ja);
    return N(function (a) {
      return { value: a, timestamp: b.now() };
    });
  }
  function Ad(b) {
    return n(function (a, c) {
      var d = new C();
      c.next(d.asObservable());
      var e = function (a) {
        d.error(a);
        c.error(a);
      };
      a.subscribe(
        new m(
          c,
          function (a) {
            return null === d || void 0 === d ? void 0 : d.next(a);
          },
          function () {
            d.complete();
            c.complete();
          },
          e
        )
      );
      b.subscribe(
        new m(
          c,
          function () {
            d.complete();
            c.next((d = new C()));
          },
          B,
          e
        )
      );
      return function () {
        null === d || void 0 === d ? void 0 : d.unsubscribe();
        d = null;
      };
    });
  }
  function Bd(b, a) {
    void 0 === a && (a = 0);
    var c = 0 < a ? a : b;
    return n(function (a, e) {
      var d = [new C()],
        h = 0;
      e.next(d[0].asObservable());
      a.subscribe(
        new m(
          e,
          function (a) {
            var f, l;
            try {
              for (var g = F(d), m = g.next(); !m.done; m = g.next())
                m.value.next(a);
            } catch (r) {
              f = { error: r };
            } finally {
              try {
                m && !m.done && (l = g.return) && l.call(g);
              } finally {
                if (f) throw f.error;
              }
            }
            a = h - b + 1;
            0 <= a && 0 === a % c && d.shift().complete();
            0 === ++h % c &&
              ((a = new C()), d.push(a), e.next(a.asObservable()));
          },
          function () {
            for (; 0 < d.length; ) d.shift().complete();
            e.complete();
          },
          function (a) {
            for (; 0 < d.length; ) d.shift().error(a);
            e.error(a);
          },
          function () {
            d = null;
          }
        )
      );
    });
  }
  function Cd(b) {
    for (var a, c, d = [], e = 1; e < arguments.length; e++)
      d[e - 1] = arguments[e];
    var f = null !== (a = Q(d)) && void 0 !== a ? a : M,
      h = null !== (c = d[0]) && void 0 !== c ? c : null,
      g = d[1] || Infinity;
    return n(function (a, c) {
      var d = [],
        e = !1,
        l = function (a) {
          var b = a.subs;
          a.window.complete();
          b.unsubscribe();
          P(d, a);
          e && k();
        },
        k = function () {
          if (d) {
            var a = new D();
            c.add(a);
            var e = new C(),
              h = { window: e, subs: a, seen: 0 };
            d.push(h);
            c.next(e.asObservable());
            G(
              a,
              f,
              function () {
                return l(h);
              },
              b
            );
          }
        };
      null !== h && 0 <= h ? G(c, f, k, h, !0) : (e = !0);
      k();
      var w = function (a) {
        d.slice().forEach(function (b) {
          return a(b.window);
        });
        a(c);
        c.unsubscribe();
      };
      a.subscribe(
        new m(
          c,
          function (a) {
            d.slice().forEach(function (b) {
              b.window.next(a);
              g <= ++b.seen && l(b);
            });
          },
          function () {
            return w(function (a) {
              return a.complete();
            });
          },
          function (a) {
            return w(function (b) {
              return b.error(a);
            });
          }
        )
      );
      return function () {
        d = null;
      };
    });
  }
  function Dd(b, a) {
    return n(function (c, d) {
      var e = [],
        f = function (a) {
          for (; 0 < e.length; ) e.shift().error(a);
          d.error(a);
        };
      v(b).subscribe(
        new m(
          d,
          function (b) {
            var c = new C();
            e.push(c);
            var h = new D(),
              g;
            try {
              g = v(a(b));
            } catch (q) {
              f(q);
              return;
            }
            d.next(c.asObservable());
            h.add(
              g.subscribe(
                new m(
                  d,
                  function () {
                    P(e, c);
                    c.complete();
                    h.unsubscribe();
                  },
                  B,
                  f
                )
              )
            );
          },
          B
        )
      );
      c.subscribe(
        new m(
          d,
          function (a) {
            var b,
              c,
              d = e.slice();
            try {
              for (var f = F(d), h = f.next(); !h.done; h = f.next())
                h.value.next(a);
            } catch (r) {
              b = { error: r };
            } finally {
              try {
                h && !h.done && (c = f.return) && c.call(f);
              } finally {
                if (b) throw b.error;
              }
            }
          },
          function () {
            for (; 0 < e.length; ) e.shift().complete();
            d.complete();
          },
          f,
          function () {
            for (; 0 < e.length; ) e.shift().unsubscribe();
          }
        )
      );
    });
  }
  function Ed(b) {
    return n(function (a, c) {
      var d,
        e,
        f = function (a) {
          d.error(a);
          c.error(a);
        },
        h = function () {
          null === e || void 0 === e ? void 0 : e.unsubscribe();
          null === d || void 0 === d ? void 0 : d.complete();
          d = new C();
          c.next(d.asObservable());
          var a;
          try {
            a = v(b());
          } catch (k) {
            f(k);
            return;
          }
          a.subscribe((e = new m(c, h, h, f)));
        };
      h();
      a.subscribe(
        new m(
          c,
          function (a) {
            return d.next(a);
          },
          function () {
            d.complete();
            c.complete();
          },
          f,
          function () {
            null === e || void 0 === e ? void 0 : e.unsubscribe();
            d = null;
          }
        )
      );
    });
  }
  function Fd() {
    for (var b = [], a = 0; a < arguments.length; a++) b[a] = arguments[a];
    var c = na(b);
    return n(function (a, e) {
      for (
        var d = b.length,
          h = Array(d),
          g = b.map(function () {
            return !1;
          }),
          k = !1,
          w = function (a) {
            v(b[a]).subscribe(
              new m(
                e,
                function (b) {
                  h[a] = b;
                  k || g[a] || ((g[a] = !0), (k = g.every(E)) && (g = null));
                },
                B
              )
            );
          },
          q = 0;
        q < d;
        q++
      )
        w(q);
      a.subscribe(
        new m(e, function (a) {
          k &&
            ((a = A([a], z(h))), e.next(c ? c.apply(void 0, A([], z(a))) : a));
        })
      );
    });
  }
  function Gd(b) {
    return pc(gb, b);
  }
  function Hd() {
    for (var b = [], a = 0; a < arguments.length; a++) b[a] = arguments[a];
    return n(function (a, d) {
      gb.apply(void 0, A([a], z(b))).subscribe(d);
    });
  }
  function Id() {
    for (var b = [], a = 0; a < arguments.length; a++) b[a] = arguments[a];
    return Hd.apply(void 0, A([], z(b)));
  }
  function Jd(b, a) {
    for (var c = 0, d = a.length; c < d; c++)
      for (
        var e = a[c],
          f = Object.getOwnPropertyNames(e.prototype),
          h = 0,
          g = f.length;
        h < g;
        h++
      ) {
        var k = f[h];
        b.prototype[k] = e.prototype[k];
      }
  }
  function Kd(b) {
    switch (b.responseType) {
      case "json":
        return "response" in b ? b.response : JSON.parse(b.responseText);
      case "document":
        return b.responseXML;
      default:
        return "response" in b ? b.response : b.responseText;
    }
  }
  function Ee(b, a) {
    return ba({ method: "GET", url: b, headers: a });
  }
  function Fe(b, a, c) {
    return ba({ method: "POST", url: b, body: a, headers: c });
  }
  function Ge(b, a) {
    return ba({ method: "DELETE", url: b, headers: a });
  }
  function He(b, a, c) {
    return ba({ method: "PUT", url: b, body: a, headers: c });
  }
  function Ie(b, a, c) {
    return ba({ method: "PATCH", url: b, body: a, headers: c });
  }
  function Je(b, a) {
    return Ke(ba({ method: "GET", url: b, headers: a }));
  }
  function Le(b) {
    return new u(function (a) {
      var c,
        d,
        e = b.queryParams,
        f = b.body,
        h = b.headers,
        g = Gb(b, ["queryParams", "body", "headers"]),
        k = g.url;
      if (!k) throw new TypeError("url is required");
      if (e) {
        var m;
        if (k.includes("?")) {
          k = k.split("?");
          if (2 < k.length) throw new TypeError("invalid url");
          m = new URLSearchParams(k[1]);
          new URLSearchParams(e).forEach(function (a, b) {
            return m.set(b, a);
          });
          k = k[0] + "?" + m;
        } else (m = new URLSearchParams(e)), (k = k + "?" + m);
      }
      e = {};
      if (h)
        for (var q in h) h.hasOwnProperty(q) && (e[q.toLowerCase()] = h[q]);
      b.crossDomain ||
        "x-requested-with" in e ||
        (e["x-requested-with"] = "XMLHttpRequest");
      var n = g.xsrfCookieName,
        h = g.xsrfHeaderName;
      (g.withCredentials || !g.crossDomain) &&
        n &&
        h &&
        (n =
          null !==
            (d =
              null ===
                (c =
                  null === document || void 0 === document
                    ? void 0
                    : document.cookie.match(
                        new RegExp("(^|;\\s*)(" + n + ")\x3d([^;]*)")
                      )) || void 0 === c
                ? void 0
                : c.pop()) && void 0 !== d
            ? d
            : "") &&
        (e[h] = n);
      c = Me(f, e);
      var r = ca(
          ca(
            {
              async: !0,
              crossDomain: !0,
              withCredentials: !1,
              method: "GET",
              timeout: 0,
              responseType: "json",
            },
            g
          ),
          { url: k, headers: e, body: c }
        ),
        t;
      t = b.createXHR ? b.createXHR() : new XMLHttpRequest();
      var p = b.progressSubscriber,
        g = b.includeDownloadProgress,
        g = void 0 === g ? !1 : g;
      d = b.includeUploadProgress;
      d = void 0 === d ? !1 : d;
      f = function (b, c) {
        t.addEventListener(b, function () {
          var b,
            d = c();
          null === (b = null === p || void 0 === p ? void 0 : p.error) ||
          void 0 === b
            ? void 0
            : b.call(p, d);
          a.error(d);
        });
      };
      f("timeout", function () {
        return new Ld(t, r);
      });
      f("abort", function () {
        return new xa("aborted", t, r);
      });
      var u = function (b, c, d) {
        b.addEventListener(c, function (b) {
          a.next(new xb(b, t, r, d + "_" + b.type));
        });
      };
      d &&
        [yb, zb, Md].forEach(function (a) {
          return u(t.upload, a, Ne);
        });
      p &&
        [yb, zb].forEach(function (a) {
          return t.upload.addEventListener(a, function (a) {
            var b;
            return null ===
              (b = null === p || void 0 === p ? void 0 : p.next) || void 0 === b
              ? void 0
              : b.call(p, a);
          });
        });
      g &&
        [yb, zb].forEach(function (a) {
          return u(t, a, Nd);
        });
      var v = function (b) {
        a.error(new xa("ajax error" + (b ? " " + b : ""), t, r));
      };
      t.addEventListener("error", function (a) {
        var b;
        null === (b = null === p || void 0 === p ? void 0 : p.error) ||
        void 0 === b
          ? void 0
          : b.call(p, a);
        v();
      });
      t.addEventListener(Md, function (b) {
        var c,
          d,
          e = t.status;
        if (400 > e) {
          null === (c = null === p || void 0 === p ? void 0 : p.complete) ||
          void 0 === c
            ? void 0
            : c.call(p);
          c = void 0;
          try {
            c = new xb(b, t, r, Nd + "_" + b.type);
          } catch (ve) {
            a.error(ve);
            return;
          }
          a.next(c);
          a.complete();
        } else null === (d = null === p || void 0 === p ? void 0 : p.error) || void 0 === d ? void 0 : d.call(p, b), v(e);
      });
      g = r.user;
      d = r.method;
      f = r.async;
      g ? t.open(d, k, f, g, r.password) : t.open(d, k, f);
      f && ((t.timeout = r.timeout), (t.responseType = r.responseType));
      "withCredentials" in t && (t.withCredentials = r.withCredentials);
      for (q in e) e.hasOwnProperty(q) && t.setRequestHeader(q, e[q]);
      c ? t.send(c) : t.send();
      return function () {
        t && 4 !== t.readyState && t.abort();
      };
    });
  }
  function Me(b, a) {
    var c;
    if (
      !b ||
      "string" === typeof b ||
      ("undefined" !== typeof FormData && b instanceof FormData) ||
      ("undefined" !== typeof URLSearchParams &&
        b instanceof URLSearchParams) ||
      Ab(b, "ArrayBuffer") ||
      Ab(b, "File") ||
      Ab(b, "Blob") ||
      ("undefined" !== typeof ReadableStream && b instanceof ReadableStream)
    )
      return b;
    if ("undefined" !== typeof ArrayBuffer && ArrayBuffer.isView(b))
      return b.buffer;
    if ("object" === typeof b)
      return (
        (a["content-type"] =
          null !== (c = a["content-type"]) && void 0 !== c
            ? c
            : "application/json;charset\x3dutf-8"),
        JSON.stringify(b)
      );
    throw new TypeError("Unknown body type");
  }
  function Ab(b, a) {
    return Oe.call(b) === "[object " + a + "]";
  }
  var Sa = function (b, a) {
      Sa =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (a, b) {
            a.__proto__ = b;
          }) ||
        function (a, b) {
          for (var c in b)
            Object.prototype.hasOwnProperty.call(b, c) && (a[c] = b[c]);
        };
      return Sa(b, a);
    },
    ca = function () {
      ca =
        Object.assign ||
        function (b) {
          for (var a, c = 1, d = arguments.length; c < d; c++) {
            a = arguments[c];
            for (var e in a)
              Object.prototype.hasOwnProperty.call(a, e) && (b[e] = a[e]);
          }
          return b;
        };
      return ca.apply(this, arguments);
    },
    Ra = S(function (b) {
      return function (a) {
        b(this);
        this.message = a
          ? a.length +
            " errors occurred during unsubscription:\n" +
            a
              .map(function (a, b) {
                return b + 1 + ") " + a.toString();
              })
              .join("\n  ")
          : "";
        this.name = "UnsubscriptionError";
        this.errors = a;
      };
    }),
    D = (function () {
      function b(a) {
        this.initialTeardown = a;
        this.closed = !1;
        this._teardowns = this._parentage = null;
      }
      b.prototype.unsubscribe = function () {
        var a, b, d, e, f;
        if (!this.closed) {
          this.closed = !0;
          var h = this._parentage;
          if (h)
            if (((this._parentage = null), Array.isArray(h)))
              try {
                for (var g = F(h), k = g.next(); !k.done; k = g.next())
                  k.value.remove(this);
              } catch (r) {
                a = { error: r };
              } finally {
                try {
                  k && !k.done && (b = g.return) && b.call(g);
                } finally {
                  if (a) throw a.error;
                }
              }
            else h.remove(this);
          a = this.initialTeardown;
          if (p(a))
            try {
              a();
            } catch (r) {
              f = r instanceof Ra ? r.errors : [r];
            }
          if ((a = this._teardowns)) {
            this._teardowns = null;
            try {
              for (var m = F(a), q = m.next(); !q.done; q = m.next()) {
                var n = q.value;
                try {
                  (a = n), p(a) ? a() : a.unsubscribe();
                } catch (r) {
                  (f = null !== f && void 0 !== f ? f : []),
                    r instanceof Ra
                      ? (f = A(A([], z(f)), z(r.errors)))
                      : f.push(r);
                }
              }
            } catch (r) {
              d = { error: r };
            } finally {
              try {
                q && !q.done && (e = m.return) && e.call(m);
              } finally {
                if (d) throw d.error;
              }
            }
          }
          if (f) throw new Ra(f);
        }
      };
      b.prototype.add = function (a) {
        var c;
        if (a && a !== this)
          if (this.closed) p(a) ? a() : a.unsubscribe();
          else {
            if (a instanceof b) {
              if (a.closed || a._hasParent(this)) return;
              a._addParent(this);
            }
            (this._teardowns =
              null !== (c = this._teardowns) && void 0 !== c ? c : []).push(a);
          }
      };
      b.prototype._hasParent = function (a) {
        var b = this._parentage;
        return b === a || (Array.isArray(b) && b.includes(a));
      };
      b.prototype._addParent = function (a) {
        var b = this._parentage;
        this._parentage = Array.isArray(b) ? (b.push(a), b) : b ? [b, a] : a;
      };
      b.prototype._removeParent = function (a) {
        var b = this._parentage;
        b === a ? (this._parentage = null) : Array.isArray(b) && P(b, a);
      };
      b.prototype.remove = function (a) {
        var c = this._teardowns;
        c && P(c, a);
        a instanceof b && a._removeParent(this);
      };
      b.EMPTY = (function () {
        var a = new b();
        a.closed = !0;
        return a;
      })();
      return b;
    })(),
    Od = D.EMPTY,
    T = {
      onUnhandledError: null,
      onStoppedNotification: null,
      Promise: void 0,
      useDeprecatedSynchronousErrorHandling: !1,
      useDeprecatedNextContext: !1,
    },
    ea = {
      setTimeout: function () {
        for (var b = [], a = 0; a < arguments.length; a++) b[a] = arguments[a];
        a = ea.delegate;
        return (
          (null === a || void 0 === a ? void 0 : a.setTimeout) || setTimeout
        ).apply(void 0, A([], z(b)));
      },
      clearTimeout: function (b) {
        var a = ea.delegate;
        return (
          (null === a || void 0 === a ? void 0 : a.clearTimeout) || clearTimeout
        )(b);
      },
      delegate: void 0,
    },
    ya = I("C", void 0, void 0),
    V = null,
    ma = (function (b) {
      function a(a) {
        var c = b.call(this) || this;
        c.isStopped = !1;
        a ? ((c.destination = a), Hb(a) && a.add(c)) : (c.destination = Pe);
        return c;
      }
      x(a, b);
      a.create = function (a, b, e) {
        return new Qa(a, b, e);
      };
      a.prototype.next = function (a) {
        this.isStopped ? Va(I("N", a, void 0), this) : this._next(a);
      };
      a.prototype.error = function (a) {
        this.isStopped
          ? Va(I("E", void 0, a), this)
          : ((this.isStopped = !0), this._error(a));
      };
      a.prototype.complete = function () {
        this.isStopped
          ? Va(ya, this)
          : ((this.isStopped = !0), this._complete());
      };
      a.prototype.unsubscribe = function () {
        this.closed ||
          ((this.isStopped = !0),
          b.prototype.unsubscribe.call(this),
          (this.destination = null));
      };
      a.prototype._next = function (a) {
        this.destination.next(a);
      };
      a.prototype._error = function (a) {
        try {
          this.destination.error(a);
        } finally {
          this.unsubscribe();
        }
      };
      a.prototype._complete = function () {
        try {
          this.destination.complete();
        } finally {
          this.unsubscribe();
        }
      };
      return a;
    })(D),
    Qa = (function (b) {
      function a(a, d, e) {
        var c = b.call(this) || this,
          h;
        p(a)
          ? (h = a)
          : a &&
            ((h = a.next),
            (d = a.error),
            (e = a.complete),
            c &&
              T.useDeprecatedNextContext &&
              ((a = Object.create(a)),
              (a.unsubscribe = function () {
                return c.unsubscribe();
              })),
            (h = null === h || void 0 === h ? void 0 : h.bind(a)),
            (d = null === d || void 0 === d ? void 0 : d.bind(a)),
            (e = null === e || void 0 === e ? void 0 : e.bind(a)));
        c.destination = {
          next: h ? Ua(h, c) : B,
          error: Ua(null !== d && void 0 !== d ? d : Jb, c),
          complete: e ? Ua(e, c) : B,
        };
        return c;
      }
      x(a, b);
      return a;
    })(ma),
    Pe = { closed: !0, next: B, error: Jb, complete: B },
    oa = ("function" === typeof Symbol && Symbol.observable) || "@@observable",
    u = (function () {
      function b(a) {
        a && (this._subscribe = a);
      }
      b.prototype.lift = function (a) {
        var c = new b();
        c.source = this;
        c.operator = a;
        return c;
      };
      b.prototype.subscribe = function (a, b, d) {
        var c = this,
          f = ae(a) ? a : new Qa(a, b, d);
        Ca(function () {
          var a = c.operator,
            b = c.source;
          f.add(a ? a.call(f, b) : b ? c._subscribe(f) : c._trySubscribe(f));
        });
        return f;
      };
      b.prototype._trySubscribe = function (a) {
        try {
          return this._subscribe(a);
        } catch (c) {
          a.error(c);
        }
      };
      b.prototype.forEach = function (a, b) {
        var c = this;
        b = Lb(b);
        return new b(function (b, d) {
          var e;
          e = c.subscribe(
            function (b) {
              try {
                a(b);
              } catch (k) {
                d(k), null === e || void 0 === e ? void 0 : e.unsubscribe();
              }
            },
            d,
            b
          );
        });
      };
      b.prototype._subscribe = function (a) {
        var b;
        return null === (b = this.source) || void 0 === b
          ? void 0
          : b.subscribe(a);
      };
      b.prototype[oa] = function () {
        return this;
      };
      b.prototype.pipe = function () {
        for (var a = [], b = 0; b < arguments.length; b++) a[b] = arguments[b];
        return Kb(a)(this);
      };
      b.prototype.toPromise = function (a) {
        var b = this;
        a = Lb(a);
        return new a(function (a, c) {
          var d;
          b.subscribe(
            function (a) {
              return (d = a);
            },
            function (a) {
              return c(a);
            },
            function () {
              return a(d);
            }
          );
        });
      };
      b.create = function (a) {
        return new b(a);
      };
      return b;
    })(),
    m = (function (b) {
      function a(a, d, e, f, h) {
        var c = b.call(this, a) || this;
        c.onFinalize = h;
        c._next = d
          ? function (b) {
              try {
                d(b);
              } catch (w) {
                a.error(w);
              }
            }
          : b.prototype._next;
        c._error = f
          ? function (b) {
              try {
                f(b);
              } catch (w) {
                a.error(w);
              } finally {
                this.unsubscribe();
              }
            }
          : b.prototype._error;
        c._complete = e
          ? function () {
              try {
                e();
              } catch (k) {
                a.error(k);
              } finally {
                this.unsubscribe();
              }
            }
          : b.prototype._complete;
        return c;
      }
      x(a, b);
      a.prototype.unsubscribe = function () {
        var a,
          d = this.closed;
        b.prototype.unsubscribe.call(this);
        !d &&
          (null === (a = this.onFinalize) || void 0 === a
            ? void 0
            : a.call(this));
      };
      return a;
    })(ma),
    Pa = (function (b) {
      function a(a, d) {
        var c = b.call(this) || this;
        c.source = a;
        c.subjectFactory = d;
        c._subject = null;
        c._refCount = 0;
        c._connection = null;
        p(null === a || void 0 === a ? void 0 : a.lift) && (c.lift = a.lift);
        return c;
      }
      x(a, b);
      a.prototype._subscribe = function (a) {
        return this.getSubject().subscribe(a);
      };
      a.prototype.getSubject = function () {
        var a = this._subject;
        if (!a || a.isStopped) this._subject = this.subjectFactory();
        return this._subject;
      };
      a.prototype._teardown = function () {
        this._refCount = 0;
        var a = this._connection;
        this._subject = this._connection = null;
        null === a || void 0 === a ? void 0 : a.unsubscribe();
      };
      a.prototype.connect = function () {
        var a = this,
          b = this._connection;
        if (!b) {
          var b = (this._connection = new D()),
            e = this.getSubject();
          b.add(
            this.source.subscribe(
              new m(
                e,
                void 0,
                function () {
                  a._teardown();
                  e.complete();
                },
                function (b) {
                  a._teardown();
                  e.error(b);
                },
                function () {
                  return a._teardown();
                }
              )
            )
          );
          b.closed && ((this._connection = null), (b = D.EMPTY));
        }
        return b;
      };
      a.prototype.refCount = function () {
        return Xa()(this);
      };
      return a;
    })(u),
    Da = {
      now: function () {
        return (Da.delegate || performance).now();
      },
      delegate: void 0,
    },
    U = {
      schedule: function (b) {
        var a = requestAnimationFrame,
          c = cancelAnimationFrame,
          d = U.delegate;
        d && ((a = d.requestAnimationFrame), (c = d.cancelAnimationFrame));
        var e = a(function (a) {
          c = void 0;
          b(a);
        });
        return new D(function () {
          return null === c || void 0 === c ? void 0 : c(e);
        });
      },
      requestAnimationFrame: function () {
        for (var b = [], a = 0; a < arguments.length; a++) b[a] = arguments[a];
        a = U.delegate;
        return (
          (null === a || void 0 === a ? void 0 : a.requestAnimationFrame) ||
          requestAnimationFrame
        ).apply(void 0, A([], z(b)));
      },
      cancelAnimationFrame: function () {
        for (var b = [], a = 0; a < arguments.length; a++) b[a] = arguments[a];
        a = U.delegate;
        return (
          (null === a || void 0 === a ? void 0 : a.cancelAnimationFrame) ||
          cancelAnimationFrame
        ).apply(void 0, A([], z(b)));
      },
      delegate: void 0,
    },
    Qe = Mb(),
    Pd = S(function (b) {
      return function () {
        b(this);
        this.name = "ObjectUnsubscribedError";
        this.message = "object unsubscribed";
      };
    }),
    C = (function (b) {
      function a() {
        var a = b.call(this) || this;
        a.closed = !1;
        a.observers = [];
        a.isStopped = !1;
        a.hasError = !1;
        a.thrownError = null;
        return a;
      }
      x(a, b);
      a.prototype.lift = function (a) {
        var b = new Bb(this, this);
        b.operator = a;
        return b;
      };
      a.prototype._throwIfClosed = function () {
        if (this.closed) throw new Pd();
      };
      a.prototype.next = function (a) {
        var b = this;
        Ca(function () {
          var c, d;
          b._throwIfClosed();
          if (!b.isStopped) {
            var h = b.observers.slice();
            try {
              for (var g = F(h), k = g.next(); !k.done; k = g.next())
                k.value.next(a);
            } catch (w) {
              c = { error: w };
            } finally {
              try {
                k && !k.done && (d = g.return) && d.call(g);
              } finally {
                if (c) throw c.error;
              }
            }
          }
        });
      };
      a.prototype.error = function (a) {
        var b = this;
        Ca(function () {
          b._throwIfClosed();
          if (!b.isStopped) {
            b.hasError = b.isStopped = !0;
            b.thrownError = a;
            for (var c = b.observers; c.length; ) c.shift().error(a);
          }
        });
      };
      a.prototype.complete = function () {
        var a = this;
        Ca(function () {
          a._throwIfClosed();
          if (!a.isStopped) {
            a.isStopped = !0;
            for (var b = a.observers; b.length; ) b.shift().complete();
          }
        });
      };
      a.prototype.unsubscribe = function () {
        this.isStopped = this.closed = !0;
        this.observers = null;
      };
      Object.defineProperty(a.prototype, "observed", {
        get: function () {
          var a;
          return (
            0 <
            (null === (a = this.observers) || void 0 === a ? void 0 : a.length)
          );
        },
        enumerable: !1,
        configurable: !0,
      });
      a.prototype._trySubscribe = function (a) {
        this._throwIfClosed();
        return b.prototype._trySubscribe.call(this, a);
      };
      a.prototype._subscribe = function (a) {
        this._throwIfClosed();
        this._checkFinalizedStatuses(a);
        return this._innerSubscribe(a);
      };
      a.prototype._innerSubscribe = function (a) {
        var b = this.isStopped,
          c = this.observers;
        return this.hasError || b
          ? Od
          : (c.push(a),
            new D(function () {
              return P(c, a);
            }));
      };
      a.prototype._checkFinalizedStatuses = function (a) {
        var b = this.thrownError,
          c = this.isStopped;
        this.hasError ? a.error(b) : c && a.complete();
      };
      a.prototype.asObservable = function () {
        var a = new u();
        a.source = this;
        return a;
      };
      a.create = function (a, b) {
        return new Bb(a, b);
      };
      return a;
    })(u),
    Bb = (function (b) {
      function a(a, d) {
        var c = b.call(this) || this;
        c.destination = a;
        c.source = d;
        return c;
      }
      x(a, b);
      a.prototype.next = function (a) {
        var b, c;
        null ===
          (c =
            null === (b = this.destination) || void 0 === b
              ? void 0
              : b.next) || void 0 === c
          ? void 0
          : c.call(b, a);
      };
      a.prototype.error = function (a) {
        var b, c;
        null ===
          (c =
            null === (b = this.destination) || void 0 === b
              ? void 0
              : b.error) || void 0 === c
          ? void 0
          : c.call(b, a);
      };
      a.prototype.complete = function () {
        var a, b;
        null ===
          (b =
            null === (a = this.destination) || void 0 === a
              ? void 0
              : a.complete) || void 0 === b
          ? void 0
          : b.call(a);
      };
      a.prototype._subscribe = function (a) {
        var b, c;
        return null !==
          (c =
            null === (b = this.source) || void 0 === b
              ? void 0
              : b.subscribe(a)) && void 0 !== c
          ? c
          : Od;
      };
      return a;
    })(C),
    Yc = (function (b) {
      function a(a) {
        var c = b.call(this) || this;
        c._value = a;
        return c;
      }
      x(a, b);
      Object.defineProperty(a.prototype, "value", {
        get: function () {
          return this.getValue();
        },
        enumerable: !1,
        configurable: !0,
      });
      a.prototype._subscribe = function (a) {
        var c = b.prototype._subscribe.call(this, a);
        !c.closed && a.next(this._value);
        return c;
      };
      a.prototype.getValue = function () {
        var a = this.thrownError,
          b = this._value;
        if (this.hasError) throw a;
        this._throwIfClosed();
        return b;
      };
      a.prototype.next = function (a) {
        b.prototype.next.call(this, (this._value = a));
      };
      return a;
    })(C),
    ja = {
      now: function () {
        return (ja.delegate || Date).now();
      },
      delegate: void 0,
    },
    ha = (function (b) {
      function a(a, d, e) {
        void 0 === a && (a = Infinity);
        void 0 === d && (d = Infinity);
        void 0 === e && (e = ja);
        var c = b.call(this) || this;
        c._bufferSize = a;
        c._windowTime = d;
        c._timestampProvider = e;
        c._buffer = [];
        c._infiniteTimeWindow = Infinity === d;
        c._bufferSize = Math.max(1, a);
        c._windowTime = Math.max(1, d);
        return c;
      }
      x(a, b);
      a.prototype.next = function (a) {
        var c = this._buffer,
          e = this._infiniteTimeWindow,
          f = this._timestampProvider,
          h = this._windowTime;
        this.isStopped || (c.push(a), !e && c.push(f.now() + h));
        this._trimBuffer();
        b.prototype.next.call(this, a);
      };
      a.prototype._subscribe = function (a) {
        this._throwIfClosed();
        this._trimBuffer();
        for (
          var b = this._innerSubscribe(a),
            c = this._infiniteTimeWindow,
            f = this._buffer.slice(),
            h = 0;
          h < f.length && !a.closed;
          h += c ? 1 : 2
        )
          a.next(f[h]);
        this._checkFinalizedStatuses(a);
        return b;
      };
      a.prototype._trimBuffer = function () {
        var a = this._bufferSize,
          b = this._timestampProvider,
          e = this._buffer,
          f = this._infiniteTimeWindow,
          h = (f ? 1 : 2) * a;
        Infinity > a && h < e.length && e.splice(0, e.length - h);
        if (!f) {
          a = b.now();
          b = 0;
          for (f = 1; f < e.length && e[f] <= a; f += 2) b = f;
          b && e.splice(0, b + 1);
        }
      };
      return a;
    })(C),
    db = (function (b) {
      function a() {
        var a = (null !== b && b.apply(this, arguments)) || this;
        a._value = null;
        a._hasValue = !1;
        a._isComplete = !1;
        return a;
      }
      x(a, b);
      a.prototype._checkFinalizedStatuses = function (a) {
        var b = this._hasValue,
          c = this._value,
          f = this.thrownError,
          h = this.isStopped,
          g = this._isComplete;
        if (this.hasError) a.error(f);
        else if (h || g) b && a.next(c), a.complete();
      };
      a.prototype.next = function (a) {
        this.isStopped || ((this._value = a), (this._hasValue = !0));
      };
      a.prototype.complete = function () {
        var a = this._hasValue,
          d = this._value;
        this._isComplete ||
          ((this._isComplete = !0),
          a && b.prototype.next.call(this, d),
          b.prototype.complete.call(this));
      };
      return a;
    })(C),
    ka = {
      setInterval: function () {
        for (var b = [], a = 0; a < arguments.length; a++) b[a] = arguments[a];
        a = ka.delegate;
        return (
          (null === a || void 0 === a ? void 0 : a.setInterval) || setInterval
        ).apply(void 0, A([], z(b)));
      },
      clearInterval: function (b) {
        var a = ka.delegate;
        return (
          (null === a || void 0 === a ? void 0 : a.clearInterval) ||
          clearInterval
        )(b);
      },
      delegate: void 0,
    },
    za = (function (b) {
      function a(a, d) {
        var c = b.call(this, a, d) || this;
        c.scheduler = a;
        c.work = d;
        c.pending = !1;
        return c;
      }
      x(a, b);
      a.prototype.schedule = function (a, b) {
        void 0 === b && (b = 0);
        if (this.closed) return this;
        this.state = a;
        a = this.id;
        var c = this.scheduler;
        null != a && (this.id = this.recycleAsyncId(c, a, b));
        this.pending = !0;
        this.delay = b;
        this.id = this.id || this.requestAsyncId(c, this.id, b);
        return this;
      };
      a.prototype.requestAsyncId = function (a, b, e) {
        void 0 === e && (e = 0);
        return ka.setInterval(a.flush.bind(a, this), e);
      };
      a.prototype.recycleAsyncId = function (a, b, e) {
        void 0 === e && (e = 0);
        if (null != e && this.delay === e && !1 === this.pending) return b;
        ka.clearInterval(b);
      };
      a.prototype.execute = function (a, b) {
        if (this.closed) return Error("executing a cancelled action");
        this.pending = !1;
        if ((a = this._execute(a, b))) return a;
        !1 === this.pending &&
          null != this.id &&
          (this.id = this.recycleAsyncId(this.scheduler, this.id, null));
      };
      a.prototype._execute = function (a, b) {
        b = !1;
        var c;
        try {
          this.work(a);
        } catch (f) {
          (b = !0), (c = f ? f : Error("Scheduled action threw falsy error"));
        }
        if (b) return this.unsubscribe(), c;
      };
      a.prototype.unsubscribe = function () {
        if (!this.closed) {
          var a = this.id,
            d = this.scheduler,
            e = d.actions;
          this.work = this.state = this.scheduler = null;
          this.pending = !1;
          P(e, this);
          null != a && (this.id = this.recycleAsyncId(d, a, null));
          this.delay = null;
          b.prototype.unsubscribe.call(this);
        }
      };
      return a;
    })(
      (function (b) {
        function a(a, d) {
          return b.call(this) || this;
        }
        x(a, b);
        a.prototype.schedule = function (a, b) {
          return this;
        };
        return a;
      })(D)
    ),
    Re = 1,
    Cb,
    Ya = {},
    Se = function (b) {
      var a = Re++;
      Ya[a] = !0;
      Cb || (Cb = Promise.resolve());
      Cb.then(function () {
        return Nb(a) && b();
      });
      return a;
    },
    Te = function (b) {
      Nb(b);
    },
    la = {
      setImmediate: function () {
        for (var b = [], a = 0; a < arguments.length; a++) b[a] = arguments[a];
        a = la.delegate;
        return (
          (null === a || void 0 === a ? void 0 : a.setImmediate) || Se
        ).apply(void 0, A([], z(b)));
      },
      clearImmediate: function (b) {
        var a = la.delegate;
        return ((null === a || void 0 === a ? void 0 : a.clearImmediate) || Te)(
          b
        );
      },
      delegate: void 0,
    },
    Ue = (function (b) {
      function a(a, d) {
        var c = b.call(this, a, d) || this;
        c.scheduler = a;
        c.work = d;
        return c;
      }
      x(a, b);
      a.prototype.requestAsyncId = function (a, d, e) {
        void 0 === e && (e = 0);
        if (null !== e && 0 < e)
          return b.prototype.requestAsyncId.call(this, a, d, e);
        a.actions.push(this);
        return (
          a._scheduled ||
          (a._scheduled = la.setImmediate(a.flush.bind(a, void 0)))
        );
      };
      a.prototype.recycleAsyncId = function (a, d, e) {
        void 0 === e && (e = 0);
        if ((null != e && 0 < e) || (null == e && 0 < this.delay))
          return b.prototype.recycleAsyncId.call(this, a, d, e);
        0 === a.actions.length &&
          (la.clearImmediate(d), (a._scheduled = void 0));
      };
      return a;
    })(za),
    Db = (function () {
      function b(a, c) {
        void 0 === c && (c = b.now);
        this.schedulerActionCtor = a;
        this.now = c;
      }
      b.prototype.schedule = function (a, b, d) {
        void 0 === b && (b = 0);
        return new this.schedulerActionCtor(this, a).schedule(d, b);
      };
      b.now = ja.now;
      return b;
    })(),
    Aa = (function (b) {
      function a(a, d) {
        void 0 === d && (d = Db.now);
        a = b.call(this, a, d) || this;
        a.actions = [];
        a._active = !1;
        a._scheduled = void 0;
        return a;
      }
      x(a, b);
      a.prototype.flush = function (a) {
        var b = this.actions;
        if (this._active) b.push(a);
        else {
          var c;
          this._active = !0;
          do if ((c = a.execute(a.state, a.delay))) break;
          while ((a = b.shift()));
          this._active = !1;
          if (c) {
            for (; (a = b.shift()); ) a.unsubscribe();
            throw c;
          }
        }
      };
      return a;
    })(Db),
    Qd = new ((function (b) {
      function a() {
        return (null !== b && b.apply(this, arguments)) || this;
      }
      x(a, b);
      a.prototype.flush = function (a) {
        this._active = !0;
        this._scheduled = void 0;
        var b = this.actions,
          c,
          f = -1;
        a = a || b.shift();
        var h = b.length;
        do if ((c = a.execute(a.state, a.delay))) break;
        while (++f < h && (a = b.shift()));
        this._active = !1;
        if (c) {
          for (; ++f < h && (a = b.shift()); ) a.unsubscribe();
          throw c;
        }
      };
      return a;
    })(Aa))(Ue),
    M = new Aa(za),
    ua = M,
    Ve = (function (b) {
      function a(a, d) {
        var c = b.call(this, a, d) || this;
        c.scheduler = a;
        c.work = d;
        return c;
      }
      x(a, b);
      a.prototype.schedule = function (a, d) {
        void 0 === d && (d = 0);
        if (0 < d) return b.prototype.schedule.call(this, a, d);
        this.delay = d;
        this.state = a;
        this.scheduler.flush(this);
        return this;
      };
      a.prototype.execute = function (a, d) {
        return 0 < d || this.closed
          ? b.prototype.execute.call(this, a, d)
          : this._execute(a, d);
      };
      a.prototype.requestAsyncId = function (a, d, e) {
        void 0 === e && (e = 0);
        return (null != e && 0 < e) || (null == e && 0 < this.delay)
          ? b.prototype.requestAsyncId.call(this, a, d, e)
          : a.flush(this);
      };
      return a;
    })(za),
    Rd = new ((function (b) {
      function a() {
        return (null !== b && b.apply(this, arguments)) || this;
      }
      x(a, b);
      return a;
    })(Aa))(Ve),
    We = (function (b) {
      function a(a, d) {
        var c = b.call(this, a, d) || this;
        c.scheduler = a;
        c.work = d;
        return c;
      }
      x(a, b);
      a.prototype.requestAsyncId = function (a, d, e) {
        void 0 === e && (e = 0);
        if (null !== e && 0 < e)
          return b.prototype.requestAsyncId.call(this, a, d, e);
        a.actions.push(this);
        return (
          a._scheduled ||
          (a._scheduled = U.requestAnimationFrame(function () {
            return a.flush(void 0);
          }))
        );
      };
      a.prototype.recycleAsyncId = function (a, d, e) {
        void 0 === e && (e = 0);
        if ((null != e && 0 < e) || (null == e && 0 < this.delay))
          return b.prototype.recycleAsyncId.call(this, a, d, e);
        0 === a.actions.length &&
          (U.cancelAnimationFrame(d), (a._scheduled = void 0));
      };
      return a;
    })(za),
    Sd = new ((function (b) {
      function a() {
        return (null !== b && b.apply(this, arguments)) || this;
      }
      x(a, b);
      a.prototype.flush = function (a) {
        this._active = !0;
        this._scheduled = void 0;
        var b = this.actions,
          c,
          f = -1;
        a = a || b.shift();
        var h = b.length;
        do if ((c = a.execute(a.state, a.delay))) break;
        while (++f < h && (a = b.shift()));
        this._active = !1;
        if (c) {
          for (; ++f < h && (a = b.shift()); ) a.unsubscribe();
          throw c;
        }
      };
      return a;
    })(Aa))(We),
    Td = (function (b) {
      function a(a, d) {
        void 0 === a && (a = Eb);
        void 0 === d && (d = Infinity);
        var c =
          b.call(this, a, function () {
            return c.frame;
          }) || this;
        c.maxFrames = d;
        c.frame = 0;
        c.index = -1;
        return c;
      }
      x(a, b);
      a.prototype.flush = function () {
        for (
          var a = this.actions, b = this.maxFrames, e, f;
          (f = a[0]) &&
          f.delay <= b &&
          !(a.shift(),
          (this.frame = f.delay),
          (e = f.execute(f.state, f.delay)));

        );
        if (e) {
          for (; (f = a.shift()); ) f.unsubscribe();
          throw e;
        }
      };
      a.frameTimeFactor = 10;
      return a;
    })(Aa),
    Eb = (function (b) {
      function a(a, d, e) {
        void 0 === e && (e = a.index += 1);
        var c = b.call(this, a, d) || this;
        c.scheduler = a;
        c.work = d;
        c.index = e;
        c.active = !0;
        c.index = a.index = e;
        return c;
      }
      x(a, b);
      a.prototype.schedule = function (c, d) {
        void 0 === d && (d = 0);
        if (Number.isFinite(d)) {
          if (!this.id) return b.prototype.schedule.call(this, c, d);
          this.active = !1;
          var e = new a(this.scheduler, this.work);
          this.add(e);
          return e.schedule(c, d);
        }
        return D.EMPTY;
      };
      a.prototype.requestAsyncId = function (b, d, e) {
        void 0 === e && (e = 0);
        this.delay = b.frame + e;
        b = b.actions;
        b.push(this);
        b.sort(a.sortActions);
        return !0;
      };
      a.prototype.recycleAsyncId = function (a, b, e) {};
      a.prototype._execute = function (a, d) {
        if (!0 === this.active) return b.prototype._execute.call(this, a, d);
      };
      a.sortActions = function (a, b) {
        return a.delay === b.delay
          ? a.index === b.index
            ? 0
            : a.index > b.index
            ? 1
            : -1
          : a.delay > b.delay
          ? 1
          : -1;
      };
      return a;
    })(za),
    K = new u(function (b) {
      return b.complete();
    }),
    $a = function (b) {
      return b && "number" === typeof b.length && "function" !== typeof b;
    },
    Za;
  Za =
    "function" === typeof Symbol && Symbol.iterator
      ? Symbol.iterator
      : "@@iterator";
  (function (b) {
    b.NEXT = "N";
    b.ERROR = "E";
    b.COMPLETE = "C";
  })(g.NotificationKind || (g.NotificationKind = {}));
  var Na = (function () {
      function b(a, b, d) {
        this.kind = a;
        this.value = b;
        this.error = d;
        this.hasValue = "N" === a;
      }
      b.prototype.observe = function (a) {
        return Fa(this, a);
      };
      b.prototype.do = function (a, b, d) {
        var c = this.kind,
          f = this.value,
          h = this.error;
        return "N" === c
          ? null === a || void 0 === a
            ? void 0
            : a(f)
          : "E" === c
          ? null === b || void 0 === b
            ? void 0
            : b(h)
          : null === d || void 0 === d
          ? void 0
          : d();
      };
      b.prototype.accept = function (a, b, d) {
        return p(null === a || void 0 === a ? void 0 : a.next)
          ? this.observe(a)
          : this.do(a, b, d);
      };
      b.prototype.toObservable = function () {
        var a = this.kind,
          b = this.value,
          d = this.error,
          b =
            "N" === a
              ? ab(b)
              : "E" === a
              ? Wb(function () {
                  return d;
                })
              : "C" === a
              ? K
              : 0;
        if (!b) throw new TypeError("Unexpected notification kind " + a);
        return b;
      };
      b.createNext = function (a) {
        return new b("N", a);
      };
      b.createError = function (a) {
        return new b("E", void 0, a);
      };
      b.createComplete = function () {
        return b.completeNotification;
      };
      b.completeNotification = new b("C");
      return b;
    })(),
    aa = S(function (b) {
      return function () {
        b(this);
        this.name = "EmptyError";
        this.message = "no elements in sequence";
      };
    }),
    ob = S(function (b) {
      return function () {
        b(this);
        this.name = "ArgumentOutOfRangeError";
        this.message = "argument out of range";
      };
    }),
    jd = S(function (b) {
      return function (a) {
        b(this);
        this.name = "NotFoundError";
        this.message = a;
      };
    }),
    id = S(function (b) {
      return function (a) {
        b(this);
        this.name = "SequenceError";
        this.message = a;
      };
    }),
    Xb = S(function (b) {
      return function (a) {
        void 0 === a && (a = null);
        b(this);
        this.message = "Timeout has occurred";
        this.name = "TimeoutError";
        this.info = a;
      };
    }),
    je = Array.isArray,
    ke = Array.isArray,
    le = Object.getPrototypeOf,
    me = Object.prototype,
    ne = Object.keys,
    Xe = {
      connector: function () {
        return new C();
      },
      resetOnDisconnect: !0,
    },
    re = ["addListener", "removeListener"],
    pe = ["addEventListener", "removeEventListener"],
    te = ["on", "off"],
    Ud = new u(B),
    ue = Array.isArray,
    xe = function (b, a) {
      return b.push(a), b;
    },
    ze = {
      connector: function () {
        return new C();
      },
    },
    Ce = (function (b) {
      function a() {
        var a = (null !== b && b.apply(this, arguments)) || this;
        a.activeGroups = 0;
        a.teardownAttempted = !1;
        return a;
      }
      x(a, b);
      a.prototype.unsubscribe = function () {
        this.teardownAttempted = !0;
        0 === this.activeGroups && b.prototype.unsubscribe.call(this);
      };
      return a;
    })(m),
    vd = { leading: !0, trailing: !1 },
    De = (function () {
      return function (b, a) {
        this.value = b;
        this.interval = a;
      };
    })(),
    Ye = Object.freeze({
      audit: hb,
      auditTime: ic,
      buffer: jc,
      bufferCount: kc,
      bufferTime: lc,
      bufferToggle: mc,
      bufferWhen: nc,
      catchError: ib,
      combineAll: Ia,
      combineLatestAll: Ia,
      combineLatest: kb,
      combineLatestWith: qc,
      concat: sc,
      concatAll: Ha,
      concatMap: Ja,
      concatMapTo: rc,
      concatWith: tc,
      connect: Ka,
      count: uc,
      debounce: vc,
      debounceTime: wc,
      defaultIfEmpty: va,
      delay: xc,
      delayWhen: La,
      dematerialize: yc,
      distinct: zc,
      distinctUntilChanged: nb,
      distinctUntilKeyChanged: Ac,
      elementAt: Bc,
      endWith: Cc,
      every: Dc,
      exhaust: Ma,
      exhaustAll: Ma,
      exhaustMap: pb,
      expand: Ec,
      filter: O,
      finalize: Fc,
      find: Gc,
      findIndex: Ic,
      first: Jc,
      groupBy: Kc,
      ignoreElements: lb,
      isEmpty: Lc,
      last: Mc,
      map: N,
      mapTo: mb,
      materialize: Nc,
      max: Oc,
      merge: Rc,
      mergeAll: ra,
      flatMap: H,
      mergeMap: H,
      mergeMapTo: Pc,
      mergeScan: Qc,
      mergeWith: Sc,
      min: Tc,
      multicast: Oa,
      observeOn: pa,
      onErrorResumeNext: fc,
      pairwise: Uc,
      partition: function (b, a) {
        return function (c) {
          return [O(b, a)(c), O(gc(b, a))(c)];
        };
      },
      pluck: Vc,
      publish: Wc,
      publishBehavior: Xc,
      publishLast: Zc,
      publishReplay: $c,
      race: function () {
        for (var b = [], a = 0; a < arguments.length; a++) b[a] = arguments[a];
        return rb.apply(void 0, A([], z(Y(b))));
      },
      raceWith: rb,
      reduce: ga,
      repeat: ad,
      repeatWhen: bd,
      retry: cd,
      retryWhen: dd,
      refCount: Xa,
      sample: sb,
      sampleTime: ed,
      scan: tb,
      sequenceEqual: fd,
      share: ub,
      shareReplay: gd,
      single: hd,
      skip: kd,
      skipLast: ld,
      skipUntil: md,
      skipWhile: nd,
      startWith: od,
      subscribeOn: qa,
      switchAll: pd,
      switchMap: ia,
      switchMapTo: qd,
      switchScan: rd,
      take: Z,
      takeLast: qb,
      takeUntil: sd,
      takeWhile: td,
      tap: ud,
      throttle: wb,
      throttleTime: wd,
      throwIfEmpty: wa,
      timeInterval: xd,
      timeout: cb,
      timeoutWith: yd,
      timestamp: zd,
      toArray: jb,
      window: Ad,
      windowCount: Bd,
      windowTime: Cd,
      windowToggle: Dd,
      windowWhen: Ed,
      withLatestFrom: Fd,
      zip: Hd,
      zipAll: Gd,
      zipWith: Id,
    }),
    Ba = (function () {
      return function (b, a) {
        void 0 === a && (a = Infinity);
        this.subscribedFrame = b;
        this.unsubscribedFrame = a;
      };
    })(),
    Vd = (function () {
      function b() {
        this.subscriptions = [];
      }
      b.prototype.logSubscribedFrame = function () {
        this.subscriptions.push(new Ba(this.scheduler.now()));
        return this.subscriptions.length - 1;
      };
      b.prototype.logUnsubscribedFrame = function (a) {
        var b = this.subscriptions;
        b[a] = new Ba(b[a].subscribedFrame, this.scheduler.now());
      };
      return b;
    })(),
    Fb = (function (b) {
      function a(a, d) {
        var c =
          b.call(this, function (a) {
            var b = this,
              c = b.logSubscribedFrame(),
              d = new D();
            d.add(
              new D(function () {
                b.logUnsubscribedFrame(c);
              })
            );
            b.scheduleMessages(a);
            return d;
          }) || this;
        c.messages = a;
        c.subscriptions = [];
        c.scheduler = d;
        return c;
      }
      x(a, b);
      a.prototype.scheduleMessages = function (a) {
        for (var b = this.messages.length, c = 0; c < b; c++) {
          var f = this.messages[c];
          a.add(
            this.scheduler.schedule(
              function (a) {
                Fa(a.message.notification, a.subscriber);
              },
              f.frame,
              { message: f, subscriber: a }
            )
          );
        }
      };
      return a;
    })(u);
  Jd(Fb, [Vd]);
  var Wd = (function (b) {
    function a(a, d) {
      var c = b.call(this) || this;
      c.messages = a;
      c.subscriptions = [];
      c.scheduler = d;
      return c;
    }
    x(a, b);
    a.prototype._subscribe = function (a) {
      var c = this,
        e = c.logSubscribedFrame(),
        f = new D();
      f.add(
        new D(function () {
          c.logUnsubscribedFrame(e);
        })
      );
      f.add(b.prototype._subscribe.call(this, a));
      return f;
    };
    a.prototype.setup = function () {
      for (
        var a = this,
          b = a.messages.length,
          e = function (b) {
            (function () {
              var c = a.messages[b],
                d = c.notification;
              a.scheduler.schedule(function () {
                Fa(d, a);
              }, c.frame);
            })();
          },
          f = 0;
        f < b;
        f++
      )
        e(f);
    };
    return a;
  })(C);
  Jd(Wd, [Vd]);
  var Ze = (function (b) {
      function a(a) {
        var c = b.call(this, Eb, 750) || this;
        c.assertDeepEqual = a;
        c.hotObservables = [];
        c.coldObservables = [];
        c.flushTests = [];
        c.runMode = !1;
        return c;
      }
      x(a, b);
      a.prototype.createTime = function (b) {
        b = this.runMode ? b.trim().indexOf("|") : b.indexOf("|");
        if (-1 === b)
          throw Error(
            'marble diagram for time should have a completion marker "|"'
          );
        return b * a.frameTimeFactor;
      };
      a.prototype.createColdObservable = function (b, d, e) {
        if (-1 !== b.indexOf("^"))
          throw Error('cold observable cannot have subscription offset "^"');
        if (-1 !== b.indexOf("!"))
          throw Error('cold observable cannot have unsubscription marker "!"');
        b = a.parseMarbles(b, d, e, void 0, this.runMode);
        b = new Fb(b, this);
        this.coldObservables.push(b);
        return b;
      };
      a.prototype.createHotObservable = function (b, d, e) {
        if (-1 !== b.indexOf("!"))
          throw Error('hot observable cannot have unsubscription marker "!"');
        b = a.parseMarbles(b, d, e, void 0, this.runMode);
        b = new Wd(b, this);
        this.hotObservables.push(b);
        return b;
      };
      a.prototype.materializeInnerObservable = function (a, b) {
        var c = this,
          d = [];
        a.subscribe(
          function (a) {
            d.push({ frame: c.frame - b, notification: I("N", a, void 0) });
          },
          function (a) {
            d.push({ frame: c.frame - b, notification: I("E", void 0, a) });
          },
          function () {
            d.push({ frame: c.frame - b, notification: ya });
          }
        );
        return d;
      };
      a.prototype.expectObservable = function (b, d) {
        var c = this;
        void 0 === d && (d = null);
        var f = [],
          g = { actual: f, ready: !1 };
        d = a.parseMarblesAsSubscriptions(d, this.runMode);
        var l = Infinity === d.subscribedFrame ? 0 : d.subscribedFrame;
        d = d.unsubscribedFrame;
        var k;
        this.schedule(function () {
          k = b.subscribe(
            function (a) {
              a = a instanceof u ? c.materializeInnerObservable(a, c.frame) : a;
              f.push({ frame: c.frame, notification: I("N", a, void 0) });
            },
            function (a) {
              f.push({ frame: c.frame, notification: I("E", void 0, a) });
            },
            function () {
              f.push({ frame: c.frame, notification: ya });
            }
          );
        }, l);
        Infinity !== d &&
          this.schedule(function () {
            return k.unsubscribe();
          }, d);
        this.flushTests.push(g);
        var m = this.runMode;
        return {
          toBe: function (b, c, d) {
            g.ready = !0;
            g.expected = a.parseMarbles(b, c, d, !0, m);
          },
          toEqual: function (a) {
            g.ready = !0;
            g.expected = [];
            c.schedule(function () {
              k = a.subscribe(
                function (a) {
                  a =
                    a instanceof u
                      ? c.materializeInnerObservable(a, c.frame)
                      : a;
                  g.expected.push({
                    frame: c.frame,
                    notification: I("N", a, void 0),
                  });
                },
                function (a) {
                  g.expected.push({
                    frame: c.frame,
                    notification: I("E", void 0, a),
                  });
                },
                function () {
                  g.expected.push({ frame: c.frame, notification: ya });
                }
              );
            }, l);
          },
        };
      };
      a.prototype.expectSubscriptions = function (b) {
        var c = { actual: b, ready: !1 };
        this.flushTests.push(c);
        var e = this.runMode;
        return {
          toBe: function (b) {
            b = "string" === typeof b ? [b] : b;
            c.ready = !0;
            c.expected = b
              .map(function (b) {
                return a.parseMarblesAsSubscriptions(b, e);
              })
              .filter(function (a) {
                return Infinity !== a.subscribedFrame;
              });
          },
        };
      };
      a.prototype.flush = function () {
        for (var a = this, d = this.hotObservables; 0 < d.length; )
          d.shift().setup();
        b.prototype.flush.call(this);
        this.flushTests = this.flushTests.filter(function (b) {
          return b.ready ? (a.assertDeepEqual(b.actual, b.expected), !1) : !0;
        });
      };
      a.parseMarblesAsSubscriptions = function (a, b) {
        var c = this;
        void 0 === b && (b = !1);
        if ("string" !== typeof a) return new Ba(Infinity);
        var d = A([], z(a));
        a = d.length;
        for (
          var g = -1,
            l = Infinity,
            k = Infinity,
            m = 0,
            q = function (a) {
              var e = m,
                f = function (a) {
                  e += a * c.frameTimeFactor;
                },
                h = d[a];
              switch (h) {
                case " ":
                  b || f(1);
                  break;
                case "-":
                  f(1);
                  break;
                case "(":
                  g = m;
                  f(1);
                  break;
                case ")":
                  g = -1;
                  f(1);
                  break;
                case "^":
                  if (Infinity !== l)
                    throw Error(
                      "found a second subscription point '^' in a subscription marble diagram. There can only be one."
                    );
                  l = -1 < g ? g : m;
                  f(1);
                  break;
                case "!":
                  if (Infinity !== k)
                    throw Error(
                      "found a second unsubscription point '!' in a subscription marble diagram. There can only be one."
                    );
                  k = -1 < g ? g : m;
                  break;
                default:
                  if (
                    b &&
                    h.match(/^[0-9]$/) &&
                    (0 === a || " " === d[a - 1])
                  ) {
                    var q = d
                      .slice(a)
                      .join("")
                      .match(/^([0-9]+(?:\.[0-9]+)?)(ms|s|m) /);
                    if (q) {
                      a += q[0].length - 1;
                      var h = parseFloat(q[1]),
                        r = void 0;
                      switch (q[2]) {
                        case "ms":
                          r = h;
                          break;
                        case "s":
                          r = 1e3 * h;
                          break;
                        case "m":
                          r = 6e4 * h;
                      }
                      f(r / n.frameTimeFactor);
                      break;
                    }
                  }
                  throw Error(
                    "there can only be '^' and '!' markers in a subscription marble diagram. Found instead '" +
                      h +
                      "'."
                  );
              }
              m = e;
              p = a;
            },
            n = this,
            p,
            t = 0;
          t < a;
          t++
        )
          q(t), (t = p);
        return 0 > k ? new Ba(l) : new Ba(l, k);
      };
      a.parseMarbles = function (a, b, e, f, g) {
        var c = this;
        void 0 === f && (f = !1);
        void 0 === g && (g = !1);
        if (-1 !== a.indexOf("!"))
          throw Error(
            'conventional marble diagrams cannot have the unsubscription marker "!"'
          );
        var d = A([], z(a)),
          h = d.length,
          m = [];
        a = g ? a.replace(/^[ ]+/, "").indexOf("^") : a.indexOf("^");
        var n = -1 === a ? 0 : a * -this.frameTimeFactor,
          p =
            "object" !== typeof b
              ? function (a) {
                  return a;
                }
              : function (a) {
                  return f && b[a] instanceof Fb ? b[a].messages : b[a];
                },
          t = -1;
        a = function (a) {
          var b = n,
            f = function (a) {
              b += a * c.frameTimeFactor;
            },
            h = void 0,
            k = d[a];
          switch (k) {
            case " ":
              g || f(1);
              break;
            case "-":
              f(1);
              break;
            case "(":
              t = n;
              f(1);
              break;
            case ")":
              t = -1;
              f(1);
              break;
            case "|":
              h = ya;
              f(1);
              break;
            case "^":
              f(1);
              break;
            case "#":
              h = I("E", void 0, e || "error");
              f(1);
              break;
            default:
              if (g && k.match(/^[0-9]$/) && (0 === a || " " === d[a - 1])) {
                var l = d
                  .slice(a)
                  .join("")
                  .match(/^([0-9]+(?:\.[0-9]+)?)(ms|s|m) /);
                if (l) {
                  a += l[0].length - 1;
                  var k = parseFloat(l[1]),
                    q = void 0;
                  switch (l[2]) {
                    case "ms":
                      q = k;
                      break;
                    case "s":
                      q = 1e3 * k;
                      break;
                    case "m":
                      q = 6e4 * k;
                  }
                  f(q / u.frameTimeFactor);
                  break;
                }
              }
              h = I("N", p(k), void 0);
              f(1);
          }
          h && m.push({ frame: -1 < t ? t : n, notification: h });
          n = b;
          v = a;
        };
        for (var u = this, v, x = 0; x < h; x++) a(x), (x = v);
        return m;
      };
      a.prototype.createAnimator = function () {
        var b = this;
        if (!this.runMode)
          throw Error("animate() must only be used in run mode");
        var d = 0,
          e;
        return {
          animate: function (c) {
            var d, f;
            if (e)
              throw Error(
                "animate() must not be called more than once within run()"
              );
            if (/[|#]/.test(c))
              throw Error("animate() must not complete or error");
            e = new Map();
            c = a.parseMarbles(c, void 0, void 0, void 0, !0);
            try {
              for (var g = F(c), m = g.next(); !m.done; m = g.next())
                b.schedule(function () {
                  var a,
                    c,
                    d = b.now(),
                    f = Array.from(e.values());
                  e.clear();
                  try {
                    for (
                      var g = ((a = void 0), F(f)), h = g.next();
                      !h.done;
                      h = g.next()
                    ) {
                      var k = h.value;
                      k(d);
                    }
                  } catch (R) {
                    a = { error: R };
                  } finally {
                    try {
                      h && !h.done && (c = g.return) && c.call(g);
                    } finally {
                      if (a) throw a.error;
                    }
                  }
                }, m.value.frame);
            } catch (q) {
              d = { error: q };
            } finally {
              try {
                m && !m.done && (f = g.return) && f.call(g);
              } finally {
                if (d) throw d.error;
              }
            }
          },
          delegate: {
            requestAnimationFrame: function (a) {
              if (!e) throw Error("animate() was not called within run()");
              var b = ++d;
              e.set(b, a);
              return b;
            },
            cancelAnimationFrame: function (a) {
              if (!e) throw Error("animate() was not called within run()");
              e.delete(a);
            },
          },
        };
      };
      a.prototype.createDelegates = function () {
        var a = this,
          b = 0,
          e = new Map(),
          f = function () {
            var b = a.now(),
              c = Array.from(e.values()).filter(function (a) {
                return a.due <= b;
              }),
              d = c.filter(function (a) {
                return "immediate" === a.type;
              });
            if (0 < d.length)
              (d = d[0]), (c = d.handle), (d = d.handler), e.delete(c), d();
            else if (
              ((d = c.filter(function (a) {
                return "interval" === a.type;
              })),
              0 < d.length)
            ) {
              var c = d[0],
                g = c.duration,
                d = c.handler;
              c.due = b + g;
              c.subscription = a.schedule(f, g);
              d();
            } else if (
              ((c = c.filter(function (a) {
                return "timeout" === a.type;
              })),
              0 < c.length)
            )
              (d = c[0]), (c = d.handle), (d = d.handler), e.delete(c), d();
            else throw Error("Expected a due immediate or interval");
          };
        return {
          immediate: {
            setImmediate: function (c) {
              var d = ++b;
              e.set(d, {
                due: a.now(),
                duration: 0,
                handle: d,
                handler: c,
                subscription: a.schedule(f, 0),
                type: "immediate",
              });
              return d;
            },
            clearImmediate: function (a) {
              var b = e.get(a);
              b && (b.subscription.unsubscribe(), e.delete(a));
            },
          },
          interval: {
            setInterval: function (c, d) {
              void 0 === d && (d = 0);
              var g = ++b;
              e.set(g, {
                due: a.now() + d,
                duration: d,
                handle: g,
                handler: c,
                subscription: a.schedule(f, d),
                type: "interval",
              });
              return g;
            },
            clearInterval: function (a) {
              var b = e.get(a);
              b && (b.subscription.unsubscribe(), e.delete(a));
            },
          },
          timeout: {
            setTimeout: function (c, d) {
              void 0 === d && (d = 0);
              var g = ++b;
              e.set(g, {
                due: a.now() + d,
                duration: d,
                handle: g,
                handler: c,
                subscription: a.schedule(f, d),
                type: "timeout",
              });
              return g;
            },
            clearTimeout: function (a) {
              var b = e.get(a);
              b && (b.subscription.unsubscribe(), e.delete(a));
            },
          },
        };
      };
      a.prototype.run = function (b) {
        var c = a.frameTimeFactor,
          e = this.maxFrames;
        a.frameTimeFactor = 1;
        this.maxFrames = Infinity;
        this.runMode = !0;
        var f = this.createAnimator(),
          g = this.createDelegates();
        U.delegate = f.delegate;
        ja.delegate = this;
        la.delegate = g.immediate;
        ka.delegate = g.interval;
        ea.delegate = g.timeout;
        Da.delegate = this;
        f = {
          cold: this.createColdObservable.bind(this),
          hot: this.createHotObservable.bind(this),
          flush: this.flush.bind(this),
          time: this.createTime.bind(this),
          expectObservable: this.expectObservable.bind(this),
          expectSubscriptions: this.expectSubscriptions.bind(this),
          animate: f.animate,
        };
        try {
          var l = b(f);
          this.flush();
          return l;
        } finally {
          (a.frameTimeFactor = c),
            (this.maxFrames = e),
            (this.runMode = !1),
            (U.delegate = void 0),
            (ja.delegate = void 0),
            (la.delegate = void 0),
            (ka.delegate = void 0),
            (ea.delegate = void 0),
            (Da.delegate = void 0);
        }
      };
      a.frameTimeFactor = 10;
      return a;
    })(Td),
    $e = Object.freeze({ TestScheduler: Ze }),
    xb = (function () {
      return function (b, a, c, d) {
        void 0 === d && (d = "download_load");
        this.originalEvent = b;
        this.xhr = a;
        this.request = c;
        this.type = d;
        c = a.status;
        d = a.responseType;
        this.status = null !== c && void 0 !== c ? c : 0;
        this.responseType = null !== d && void 0 !== d ? d : "";
        this.responseHeaders = (c = a.getAllResponseHeaders())
          ? c.split("\n").reduce(function (a, b) {
              var c = b.indexOf(": ");
              a[b.slice(0, c)] = b.slice(c + 2);
              return a;
            }, {})
          : {};
        this.response = Kd(a);
        a = b.total;
        this.loaded = b.loaded;
        this.total = a;
      };
    })(),
    xa = S(function (b) {
      return function (a, b, d) {
        this.message = a;
        this.name = "AjaxError";
        this.xhr = b;
        this.request = d;
        this.status = b.status;
        this.responseType = b.responseType;
        var c;
        try {
          c = Kd(b);
        } catch (f) {
          c = b.responseText;
        }
        this.response = c;
      };
    }),
    Ld = (function () {
      function b(a, b) {
        xa.call(this, "ajax timeout", a, b);
        this.name = "AjaxTimeoutError";
        return this;
      }
      b.prototype = Object.create(xa.prototype);
      return b;
    })(),
    Ke = N(function (b) {
      return b.response;
    }),
    ba = (function () {
      var b = function (a) {
        return Le("string" === typeof a ? { url: a } : a);
      };
      b.get = Ee;
      b.post = Fe;
      b.delete = Ge;
      b.put = He;
      b.patch = Ie;
      b.getJSON = Je;
      return b;
    })(),
    Ne = "upload",
    Nd = "download",
    yb = "loadstart",
    zb = "progress",
    Md = "load",
    Oe = Object.prototype.toString,
    af = Object.freeze({
      ajax: ba,
      AjaxError: xa,
      AjaxTimeoutError: Ld,
      AjaxResponse: xb,
    }),
    bf = {
      url: "",
      deserializer: function (b) {
        return JSON.parse(b.data);
      },
      serializer: function (b) {
        return JSON.stringify(b);
      },
    },
    Xd = (function (b) {
      function a(a, d) {
        var c = b.call(this) || this;
        c._socket = null;
        if (a instanceof u) (c.destination = d), (c.source = a);
        else {
          d = c._config = ca({}, bf);
          c._output = new C();
          if ("string" === typeof a) d.url = a;
          else for (var f in a) a.hasOwnProperty(f) && (d[f] = a[f]);
          if (!d.WebSocketCtor && WebSocket) d.WebSocketCtor = WebSocket;
          else if (!d.WebSocketCtor)
            throw Error("no WebSocket constructor can be found");
          c.destination = new ha();
        }
        return c;
      }
      x(a, b);
      a.prototype.lift = function (b) {
        var c = new a(this._config, this.destination);
        c.operator = b;
        c.source = this;
        return c;
      };
      a.prototype._resetState = function () {
        this._socket = null;
        this.source || (this.destination = new ha());
        this._output = new C();
      };
      a.prototype.multiplex = function (a, b, e) {
        var c = this;
        return new u(function (d) {
          try {
            c.next(a());
          } catch (k) {
            d.error(k);
          }
          var f = c.subscribe(
            function (a) {
              try {
                e(a) && d.next(a);
              } catch (w) {
                d.error(w);
              }
            },
            function (a) {
              return d.error(a);
            },
            function () {
              return d.complete();
            }
          );
          return function () {
            try {
              c.next(b());
            } catch (k) {
              d.error(k);
            }
            f.unsubscribe();
          };
        });
      };
      a.prototype._connectSocket = function () {
        var a = this,
          b = this._config,
          e = b.WebSocketCtor,
          f = b.protocol,
          g = b.url,
          b = b.binaryType,
          l = this._output,
          k = null;
        try {
          (this._socket = k = f ? new e(g, f) : new e(g)),
            b && (this._socket.binaryType = b);
        } catch (q) {
          l.error(q);
          return;
        }
        var m = new D(function () {
          a._socket = null;
          k && 1 === k.readyState && k.close();
        });
        k.onopen = function (b) {
          if (a._socket) {
            var c = a._config.openObserver;
            c && c.next(b);
            b = a.destination;
            a.destination = ma.create(
              function (b) {
                if (1 === k.readyState)
                  try {
                    var c = a._config.serializer;
                    k.send(c(b));
                  } catch (L) {
                    a.destination.error(L);
                  }
              },
              function (b) {
                var c = a._config.closingObserver;
                c && c.next(void 0);
                b && b.code
                  ? k.close(b.code, b.reason)
                  : l.error(
                      new TypeError(
                        "WebSocketSubject.error must be called with an object with an error code, and an optional reason: { code: number, reason: string }"
                      )
                    );
                a._resetState();
              },
              function () {
                var b = a._config.closingObserver;
                b && b.next(void 0);
                k.close();
                a._resetState();
              }
            );
            b && b instanceof ha && m.add(b.subscribe(a.destination));
          } else k.close(), a._resetState();
        };
        k.onerror = function (b) {
          a._resetState();
          l.error(b);
        };
        k.onclose = function (b) {
          a._resetState();
          var c = a._config.closeObserver;
          c && c.next(b);
          b.wasClean ? l.complete() : l.error(b);
        };
        k.onmessage = function (b) {
          try {
            var c = a._config.deserializer;
            l.next(c(b));
          } catch (r) {
            l.error(r);
          }
        };
      };
      a.prototype._subscribe = function (a) {
        var b = this,
          c = this.source;
        if (c) return c.subscribe(a);
        this._socket || this._connectSocket();
        this._output.subscribe(a);
        a.add(function () {
          var a = b._socket;
          0 === b._output.observers.length &&
            (!a || (1 !== a.readyState && 0 !== a.readyState) || a.close(),
            b._resetState());
        });
        return a;
      };
      a.prototype.unsubscribe = function () {
        var a = this._socket;
        !a || (1 !== a.readyState && 0 !== a.readyState) || a.close();
        this._resetState();
        b.prototype.unsubscribe.call(this);
      };
      return a;
    })(Bb),
    cf = Object.freeze({
      webSocket: function (b) {
        return new Xd(b);
      },
      WebSocketSubject: Xd,
    }),
    df = Object.freeze({
      fromFetch: function (b, a) {
        void 0 === a && (a = {});
        var c = a.selector,
          d = Gb(a, ["selector"]);
        return new u(function (a) {
          var e = new AbortController(),
            g = e.signal,
            l = !0,
            k = d.signal;
          if (k)
            if (k.aborted) e.abort();
            else {
              var n = function () {
                g.aborted || e.abort();
              };
              k.addEventListener("abort", n);
              a.add(function () {
                return k.removeEventListener("abort", n);
              });
            }
          var p = ca(ca({}, d), { signal: g }),
            u = function (b) {
              l = !1;
              a.error(b);
            };
          fetch(b, p)
            .then(function (b) {
              c
                ? v(c(b)).subscribe(
                    new m(
                      a,
                      void 0,
                      function () {
                        l = !1;
                        a.complete();
                      },
                      u
                    )
                  )
                : ((l = !1), a.next(b), a.complete());
            })
            .catch(u);
          return function () {
            l && e.abort();
          };
        });
      },
    });
  g.operators = Ye;
  g.testing = $e;
  g.ajax = af;
  g.webSocket = cf;
  g.fetch = df;
  g.Observable = u;
  g.ConnectableObservable = Pa;
  g.observable = oa;
  g.animationFrames = function (b) {
    return b ? Mb(b) : Qe;
  };
  g.Subject = C;
  g.BehaviorSubject = Yc;
  g.ReplaySubject = ha;
  g.AsyncSubject = db;
  g.asap = Qd;
  g.asapScheduler = Qd;
  g.async = ua;
  g.asyncScheduler = M;
  g.queue = Rd;
  g.queueScheduler = Rd;
  g.animationFrame = Sd;
  g.animationFrameScheduler = Sd;
  g.VirtualTimeScheduler = Td;
  g.VirtualAction = Eb;
  g.Scheduler = Db;
  g.Subscription = D;
  g.Subscriber = ma;
  g.Notification = Na;
  g.pipe = Wa;
  g.noop = B;
  g.identity = E;
  g.isObservable = function (b) {
    return !!b && (b instanceof u || (p(b.lift) && p(b.subscribe)));
  };
  g.lastValueFrom = function (b, a) {
    var c = "object" === typeof a;
    return new Promise(function (d, e) {
      var f = !1,
        g;
      b.subscribe({
        next: function (a) {
          g = a;
          f = !0;
        },
        error: e,
        complete: function () {
          f ? d(g) : c ? d(a.defaultValue) : e(new aa());
        },
      });
    });
  };
  g.firstValueFrom = function (b, a) {
    var c = "object" === typeof a;
    return new Promise(function (d, e) {
      var f = new Qa({
        next: function (a) {
          d(a);
          f.unsubscribe();
        },
        error: e,
        complete: function () {
          c ? d(a.defaultValue) : e(new aa());
        },
      });
      b.subscribe(f);
    });
  };
  g.ArgumentOutOfRangeError = ob;
  g.EmptyError = aa;
  g.NotFoundError = jd;
  g.ObjectUnsubscribedError = Pd;
  g.SequenceError = id;
  g.TimeoutError = Xb;
  g.UnsubscriptionError = Ra;
  g.bindCallback = function (b, a, c) {
    return Ga(!1, b, a, c);
  };
  g.bindNodeCallback = function (b, a, c) {
    return Ga(!0, b, a, c);
  };
  g.combineLatest = $b;
  g.concat = sa;
  g.connectable = function (b, a) {
    void 0 === a && (a = Xe);
    var c = null,
      d = a.connector;
    a = a.resetOnDisconnect;
    var e = void 0 === a ? !0 : a,
      f = d();
    a = new u(function (a) {
      return f.subscribe(a);
    });
    a.connect = function () {
      if (!c || c.closed)
        (c = ta(function () {
          return b;
        }).subscribe(f)),
          e &&
            c.add(function () {
              return (f = d());
            });
      return c;
    };
    return a;
  };
  g.defer = ta;
  g.empty = function (b) {
    return b ? be(b) : K;
  };
  g.forkJoin = function () {
    for (var b = [], a = 0; a < arguments.length; a++) b[a] = arguments[a];
    var a = na(b),
      b = Yb(b),
      c = b.args,
      d = b.keys,
      b = new u(function (a) {
        var b = c.length;
        if (b)
          for (
            var e = Array(b),
              g = b,
              k = b,
              n = function (b) {
                var f = !1;
                v(c[b]).subscribe(
                  new m(
                    a,
                    function (a) {
                      f || ((f = !0), k--);
                      e[b] = a;
                    },
                    function () {
                      return g--;
                    },
                    void 0,
                    function () {
                      (g && f) || (k || a.next(d ? Zb(d, e) : e), a.complete());
                    }
                  )
                );
              },
              p = 0;
            p < b;
            p++
          )
            n(p);
        else a.complete();
      });
    return a ? b.pipe(X(a)) : b;
  };
  g.from = J;
  g.fromEvent = fb;
  g.fromEventPattern = dc;
  g.generate = function (b, a, c, d, e) {
    function f() {
      var b;
      return Ta(this, function (d) {
        switch (d.label) {
          case 0:
            (b = k), (d.label = 1);
          case 1:
            return a && !a(b) ? [3, 4] : [4, l(b)];
          case 2:
            d.sent(), (d.label = 3);
          case 3:
            return (b = c(b)), [3, 1];
          case 4:
            return [2];
        }
      });
    }
    var g, l, k;
    1 === arguments.length
      ? ((k = b.initialState),
        (a = b.condition),
        (c = b.iterate),
        (g = b.resultSelector),
        (l = void 0 === g ? E : g),
        (e = b.scheduler))
      : ((k = b), !d || Ea(d) ? ((l = E), (e = d)) : (l = d));
    return ta(
      e
        ? function () {
            return Tb(f(), e);
          }
        : f
    );
  };
  g.iif = function (b, a, c) {
    return ta(function () {
      return b() ? a : c;
    });
  };
  g.interval = ec;
  g.merge = function () {
    for (var b = [], a = 0; a < arguments.length; a++) b[a] = arguments[a];
    var a = Q(b),
      c = "number" === typeof b[b.length - 1] ? b.pop() : Infinity;
    return b.length ? (1 === b.length ? v(b[0]) : ra(c)(J(b, a))) : K;
  };
  g.never = function () {
    return Ud;
  };
  g.of = ab;
  g.onErrorResumeNext = function () {
    for (var b = [], a = 0; a < arguments.length; a++) b[a] = arguments[a];
    return fc(Y(b))(K);
  };
  g.pairs = function (b, a) {
    return J(Object.entries(b), a);
  };
  g.partition = function (b, a, c) {
    return [O(a, c)(v(b)), O(gc(a, c))(v(b))];
  };
  g.race = function () {
    for (var b = [], a = 0; a < arguments.length; a++) b[a] = arguments[a];
    b = Y(b);
    return 1 === b.length ? v(b[0]) : new u(hc(b));
  };
  g.range = function (b, a, c) {
    null == a && ((a = b), (b = 0));
    if (0 >= a) return K;
    var d = a + b;
    return new u(
      c
        ? function (a) {
            var e = b;
            return c.schedule(function () {
              e < d ? (a.next(e++), this.schedule()) : a.complete();
            });
          }
        : function (a) {
            for (var c = b; c < d && !a.closed; ) a.next(c++);
            a.complete();
          }
    );
  };
  g.throwError = Wb;
  g.timer = fa;
  g.using = function (b, a) {
    return new u(function (c) {
      var d = b(),
        e = a(d);
      (e ? v(e) : K).subscribe(c);
      return function () {
        d && d.unsubscribe();
      };
    });
  };
  g.zip = gb;
  g.scheduled = Vb;
  g.EMPTY = K;
  g.NEVER = Ud;
  g.config = T;
  g.audit = hb;
  g.auditTime = ic;
  g.buffer = jc;
  g.bufferCount = kc;
  g.bufferTime = lc;
  g.bufferToggle = mc;
  g.bufferWhen = nc;
  g.catchError = ib;
  g.combineAll = Ia;
  g.combineLatestAll = Ia;
  g.combineLatestWith = qc;
  g.concatAll = Ha;
  g.concatMap = Ja;
  g.concatMapTo = rc;
  g.concatWith = tc;
  g.connect = Ka;
  g.count = uc;
  g.debounce = vc;
  g.debounceTime = wc;
  g.defaultIfEmpty = va;
  g.delay = xc;
  g.delayWhen = La;
  g.dematerialize = yc;
  g.distinct = zc;
  g.distinctUntilChanged = nb;
  g.distinctUntilKeyChanged = Ac;
  g.elementAt = Bc;
  g.endWith = Cc;
  g.every = Dc;
  g.exhaust = Ma;
  g.exhaustAll = Ma;
  g.exhaustMap = pb;
  g.expand = Ec;
  g.filter = O;
  g.finalize = Fc;
  g.find = Gc;
  g.findIndex = Ic;
  g.first = Jc;
  g.groupBy = Kc;
  g.ignoreElements = lb;
  g.isEmpty = Lc;
  g.last = Mc;
  g.map = N;
  g.mapTo = mb;
  g.materialize = Nc;
  g.max = Oc;
  g.mergeAll = ra;
  g.flatMap = H;
  g.mergeMap = H;
  g.mergeMapTo = Pc;
  g.mergeScan = Qc;
  g.mergeWith = Sc;
  g.min = Tc;
  g.multicast = Oa;
  g.observeOn = pa;
  g.pairwise = Uc;
  g.pluck = Vc;
  g.publish = Wc;
  g.publishBehavior = Xc;
  g.publishLast = Zc;
  g.publishReplay = $c;
  g.raceWith = rb;
  g.reduce = ga;
  g.repeat = ad;
  g.repeatWhen = bd;
  g.retry = cd;
  g.retryWhen = dd;
  g.refCount = Xa;
  g.sample = sb;
  g.sampleTime = ed;
  g.scan = tb;
  g.sequenceEqual = fd;
  g.share = ub;
  g.shareReplay = gd;
  g.single = hd;
  g.skip = kd;
  g.skipLast = ld;
  g.skipUntil = md;
  g.skipWhile = nd;
  g.startWith = od;
  g.subscribeOn = qa;
  g.switchAll = pd;
  g.switchMap = ia;
  g.switchMapTo = qd;
  g.switchScan = rd;
  g.take = Z;
  g.takeLast = qb;
  g.takeUntil = sd;
  g.takeWhile = td;
  g.tap = ud;
  g.throttle = wb;
  g.throttleTime = wd;
  g.throwIfEmpty = wa;
  g.timeInterval = xd;
  g.timeout = cb;
  g.timeoutWith = yd;
  g.timestamp = zd;
  g.toArray = jb;
  g.window = Ad;
  g.windowCount = Bd;
  g.windowTime = Cd;
  g.windowToggle = Dd;
  g.windowWhen = Ed;
  g.withLatestFrom = Fd;
  g.zipAll = Gd;
  g.zipWith = Id;
  Object.defineProperty(g, "__esModule", { value: !0 });
});
//# sourceMappingURL=rxjs.umd.min.js.map
