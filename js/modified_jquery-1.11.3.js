var XRegExp, firstBy;
if (function(n, t) {
    typeof module == "object" && typeof module.exports == "object" ? module.exports = n.document ? t(n, !0) : function(n) {
      if (!n.document) throw new Error("jQuery requires a window with a document");
      return t(n)
    } : t(n)
  }(typeof window != "undefined" ? window : this, function(n, t) {
    function ri(n) {
      var t = "length" in n && n.length,
        r = i.type(n);
      return r === "function" || i.isWindow(n) ? !1 : n.nodeType === 1 && t ? !0 : r === "array" || t === 0 || typeof t == "number" && t > 0 && t - 1 in n
    }

    function ui(n, t, r) {
      if (i.isFunction(t)) return i.grep(n, function(n, i) {
        return !!t.call(n, i, n) !== r
      });
      if (t.nodeType) return i.grep(n, function(n) {
        return n === t !== r
      });
      if (typeof t == "string") {
        if (re.test(t)) return i.filter(t, n, r);
        t = i.filter(t, n)
      }
      return i.grep(n, function(n) {
        return i.inArray(n, t) >= 0 !== r
      })
    }

    function hr(n, t) {
      do n = n[t]; while (n && n.nodeType !== 1);
      return n
    }

    function ee(n) {
      var t = fi[n] = {};
      return i.each(n.match(h) || [], function(n, i) {
        t[i] = !0
      }), t
    }

    function cr() {
      u.addEventListener ? (u.removeEventListener("DOMContentLoaded", a, !1), n.removeEventListener("load", a, !1)) : (u.detachEvent("onreadystatechange", a), n.detachEvent("onload", a))
    }

    function a() {
      (u.addEventListener || event.type === "load" || u.readyState === "complete") && (cr(), i.ready())
    }

    function yr(n, t, r) {
      if (r === undefined && n.nodeType === 1) {
        var u = "data-" + t.replace(vr, "-$1").toLowerCase();
        if (r = n.getAttribute(u), typeof r == "string") {
          try {
            r = r === "true" ? !0 : r === "false" ? !1 : r === "null" ? null : +r + "" === r ? +r : ar.test(r) ? i.parseJSON(r) : r
          } catch (f) {}
          i.data(n, t, r)
        } else r = undefined
      }
      return r
    }

    function ei(n) {
      var t;
      for (t in n)
        if ((t !== "data" || !i.isEmptyObject(n[t])) && t !== "toJSON") return !1;
      return !0
    }

    function pr(n, t, r, u) {
      if (i.acceptData(n)) {
        var s, e, h = i.expando,
          l = n.nodeType,
          o = l ? i.cache : n,
          f = l ? n[h] : n[h] && h;
        if (f && o[f] && (u || o[f].data) || r !== undefined || typeof t != "string") return f || (f = l ? n[h] = c.pop() || i.guid++ : h), o[f] || (o[f] = l ? {} : {
          toJSON: i.noop
        }), (typeof t == "object" || typeof t == "function") && (u ? o[f] = i.extend(o[f], t) : o[f].data = i.extend(o[f].data, t)), e = o[f], u || (e.data || (e.data = {}), e = e.data), r !== undefined && (e[i.camelCase(t)] = r), typeof t == "string" ? (s = e[t], s == null && (s = e[i.camelCase(t)])) : s = e, s
      }
    }

    function wr(n, t, u) {
      if (i.acceptData(n)) {
        var e, s, h = n.nodeType,
          f = h ? i.cache : n,
          o = h ? n[i.expando] : i.expando;
        if (f[o]) {
          if (t && (e = u ? f[o] : f[o].data, e)) {
            for (i.isArray(t) ? t = t.concat(i.map(t, i.camelCase)) : (t in e) ? t = [t] : (t = i.camelCase(t), t = t in e ? [t] : t.split(" ")), s = t.length; s--;) delete e[t[s]];
            if (u ? !ei(e) : !i.isEmptyObject(e)) return
          }(u || (delete f[o].data, ei(f[o]))) && (h ? i.cleanData([n], !0) : r.deleteExpando || f != f.window ? delete f[o] : f[o] = null)
        }
      }
    }

    function vt() {
      return !0
    }

    function it() {
      return !1
    }

    function dr() {
      try {
        return u.activeElement
      } catch (n) {}
    }

    function gr(n) {
      var i = nu.split("|"),
        t = n.createDocumentFragment();
      if (t.createElement)
        while (i.length) t.createElement(i.pop());
      return t
    }

    function f(n, t) {
      var e, u, s = 0,
        r = typeof n.getElementsByTagName !== o ? n.getElementsByTagName(t || "*") : typeof n.querySelectorAll !== o ? n.querySelectorAll(t || "*") : undefined;
      if (!r)
        for (r = [], e = n.childNodes || n;
          (u = e[s]) != null; s++) !t || i.nodeName(u, t) ? r.push(u) : i.merge(r, f(u, t));
      return t === undefined || t && i.nodeName(n, t) ? i.merge([n], r) : r
    }

    function we(n) {
      oi.test(n.type) && (n.defaultChecked = n.checked)
    }

    function eu(n, t) {
      return i.nodeName(n, "table") && i.nodeName(t.nodeType !== 11 ? t : t.firstChild, "tr") ? n.getElementsByTagName("tbody")[0] || n.appendChild(n.ownerDocument.createElement("tbody")) : n
    }

    function ou(n) {
      return n.type = (i.find.attr(n, "type") !== null) + "/" + n.type, n
    }

    function su(n) {
      var t = ve.exec(n.type);
      return t ? n.type = t[1] : n.removeAttribute("type"), n
    }

    function li(n, t) {
      for (var u, r = 0;
        (u = n[r]) != null; r++) i._data(u, "globalEval", !t || i._data(t[r], "globalEval"))
    }

    function hu(n, t) {
      if (t.nodeType === 1 && i.hasData(n)) {
        var u, f, o, s = i._data(n),
          r = i._data(t, s),
          e = s.events;
        if (e) {
          delete r.handle;
          r.events = {};
          for (u in e)
            for (f = 0, o = e[u].length; f < o; f++) i.event.add(t, u, e[u][f])
        }
        r.data && (r.data = i.extend({}, r.data))
      }
    }

    function be(n, t) {
      var u, e, f;
      if (t.nodeType === 1) {
        if (u = t.nodeName.toLowerCase(), !r.noCloneEvent && t[i.expando]) {
          f = i._data(t);
          for (e in f.events) i.removeEvent(t, e, f.handle);
          t.removeAttribute(i.expando)
        }
        u === "script" && t.text !== n.text ? (ou(t).text = n.text, su(t)) : u === "object" ? (t.parentNode && (t.outerHTML = n.outerHTML), r.html5Clone && n.innerHTML && !i.trim(t.innerHTML) && (t.innerHTML = n.innerHTML)) : u === "input" && oi.test(n.type) ? (t.defaultChecked = t.checked = n.checked, t.value !== n.value && (t.value = n.value)) : u === "option" ? t.defaultSelected = t.selected = n.defaultSelected : (u === "input" || u === "textarea") && (t.defaultValue = n.defaultValue)
      }
    }

    function cu(t, r) {
      var f, u = i(r.createElement(t)).appendTo(r.body),
        e = n.getDefaultComputedStyle && (f = n.getDefaultComputedStyle(u[0])) ? f.display : i.css(u[0], "display");
      return u.detach(), e
    }

    function yt(n) {
      var r = u,
        t = ai[n];
      return t || (t = cu(n, r), t !== "none" && t || (ot = (ot || i("<iframe frameborder='0' width='0' height='0'/>")).appendTo(r.documentElement), r = (ot[0].contentWindow || ot[0].contentDocument).document, r.write(), r.close(), t = cu(n, r), ot.detach()), ai[n] = t), t
    }

    function au(n, t) {
      return {
        get: function() {
          var i = n();
          if (i != null) {
            if (i) {
              delete this.get;
              return
            }
            return (this.get = t).apply(this, arguments)
          }
        }
      }
    }

    function pu(n, t) {
      if (t in n) return t;
      for (var r = t.charAt(0).toUpperCase() + t.slice(1), u = t, i = yu.length; i--;)
        if (t = yu[i] + r, t in n) return t;
      return u
    }

    function wu(n, t) {
      for (var f, r, o, e = [], u = 0, s = n.length; u < s; u++)(r = n[u], r.style) && (e[u] = i._data(r, "olddisplay"), f = r.style.display, t ? (e[u] || f !== "none" || (r.style.display = ""), r.style.display === "" && et(r) && (e[u] = i._data(r, "olddisplay", yt(r.nodeName)))) : (o = et(r), (f && f !== "none" || !o) && i._data(r, "olddisplay", o ? f : i.css(r, "display"))));
      for (u = 0; u < s; u++)(r = n[u], r.style) && (t && r.style.display !== "none" && r.style.display !== "" || (r.style.display = t ? e[u] || "" : "none"));
      return n
    }

    function bu(n, t, i) {
      var r = no.exec(t);
      return r ? Math.max(0, r[1] - (i || 0)) + (r[2] || "px") : t
    }

    function ku(n, t, r, u, f) {
      for (var e = r === (u ? "border" : "content") ? 4 : t === "width" ? 1 : 0, o = 0; e < 4; e += 2) r === "margin" && (o += i.css(n, r + w[e], !0, f)), u ? (r === "content" && (o -= i.css(n, "padding" + w[e], !0, f)), r !== "margin" && (o -= i.css(n, "border" + w[e] + "Width", !0, f))) : (o += i.css(n, "padding" + w[e], !0, f), r !== "padding" && (o += i.css(n, "border" + w[e] + "Width", !0, f)));
      return o
    }

    function du(n, t, u) {
      var o = !0,
        f = t === "width" ? n.offsetWidth : n.offsetHeight,
        e = k(n),
        s = r.boxSizing && i.css(n, "boxSizing", !1, e) === "border-box";
      if (f <= 0 || f == null) {
        if (f = d(n, t, e), (f < 0 || f == null) && (f = n.style[t]), pt.test(f)) return f;
        o = s && (r.boxSizingReliable() || f === n.style[t]);
        f = parseFloat(f) || 0
      }
      return f + ku(n, t, u || (s ? "border" : "content"), o, e) + "px"
    }

    function e(n, t, i, r, u) {
      return new e.prototype.init(n, t, i, r, u)
    }

    function nf() {
      return setTimeout(function() {
        rt = undefined
      }), rt = i.now()
    }

    function kt(n, t) {
      var r, i = {
          height: n
        },
        u = 0;
      for (t = t ? 1 : 0; u < 4; u += 2 - t) r = w[u], i["margin" + r] = i["padding" + r] = n;
      return t && (i.opacity = i.width = n), i
    }

    function tf(n, t, i) {
      for (var u, f = (st[t] || []).concat(st["*"]), r = 0, e = f.length; r < e; r++)
        if (u = f[r].call(i, t, n)) return u
    }

    function fo(n, t, u) {
      var f, a, p, v, s, w, h, b, l = this,
        y = {},
        o = n.style,
        c = n.nodeType && et(n),
        e = i._data(n, "fxshow");
      u.queue || (s = i._queueHooks(n, "fx"), s.unqueued == null && (s.unqueued = 0, w = s.empty.fire, s.empty.fire = function() {
        s.unqueued || w()
      }), s.unqueued++, l.always(function() {
        l.always(function() {
          s.unqueued--;
          i.queue(n, "fx").length || s.empty.fire()
        })
      }));
      n.nodeType === 1 && ("height" in t || "width" in t) && (u.overflow = [o.overflow, o.overflowX, o.overflowY], h = i.css(n, "display"), b = h === "none" ? i._data(n, "olddisplay") || yt(n.nodeName) : h, b === "inline" && i.css(n, "float") === "none" && (r.inlineBlockNeedsLayout && yt(n.nodeName) !== "inline" ? o.zoom = 1 : o.display = "inline-block"));
      u.overflow && (o.overflow = "hidden", r.shrinkWrapBlocks() || l.always(function() {
        o.overflow = u.overflow[0];
        o.overflowX = u.overflow[1];
        o.overflowY = u.overflow[2]
      }));
      for (f in t)
        if (a = t[f], ro.exec(a)) {
          if (delete t[f], p = p || a === "toggle", a === (c ? "hide" : "show"))
            if (a === "show" && e && e[f] !== undefined) c = !0;
            else continue;
          y[f] = e && e[f] || i.style(n, f)
        } else h = undefined;
      if (i.isEmptyObject(y))(h === "none" ? yt(n.nodeName) : h) === "inline" && (o.display = h);
      else {
        e ? "hidden" in e && (c = e.hidden) : e = i._data(n, "fxshow", {});
        p && (e.hidden = !c);
        c ? i(n).show() : l.done(function() {
          i(n).hide()
        });
        l.done(function() {
          var t;
          i._removeData(n, "fxshow");
          for (t in y) i.style(n, t, y[t])
        });
        for (f in y) v = tf(c ? e[f] : 0, f, l), f in e || (e[f] = v.start, c && (v.end = v.start, v.start = f === "width" || f === "height" ? 1 : 0))
      }
    }

    function eo(n, t) {
      var r, f, e, u, o;
      for (r in n)
        if (f = i.camelCase(r), e = t[f], u = n[r], i.isArray(u) && (e = u[1], u = n[r] = u[0]), r !== f && (n[f] = u, delete n[r]), o = i.cssHooks[f], o && "expand" in o) {
          u = o.expand(u);
          delete n[f];
          for (r in u) r in n || (n[r] = u[r], t[r] = e)
        } else t[f] = e
    }

    function rf(n, t, r) {
      var e, o, s = 0,
        l = bt.length,
        f = i.Deferred().always(function() {
          delete c.elem
        }),
        c = function() {
          if (o) return !1;
          for (var s = rt || nf(), t = Math.max(0, u.startTime + u.duration - s), h = t / u.duration || 0, i = 1 - h, r = 0, e = u.tweens.length; r < e; r++) u.tweens[r].run(i);
          return f.notifyWith(n, [u, i, t]), i < 1 && e ? t : (f.resolveWith(n, [u]), !1)
        },
        u = f.promise({
          elem: n,
          props: i.extend({}, t),
          opts: i.extend(!0, {
            specialEasing: {}
          }, r),
          originalProperties: t,
          originalOptions: r,
          startTime: rt || nf(),
          duration: r.duration,
          tweens: [],
          createTween: function(t, r) {
            var f = i.Tween(n, u.opts, t, r, u.opts.specialEasing[t] || u.opts.easing);
            return u.tweens.push(f), f
          },
          stop: function(t) {
            var i = 0,
              r = t ? u.tweens.length : 0;
            if (o) return this;
            for (o = !0; i < r; i++) u.tweens[i].run(1);
            return t ? f.resolveWith(n, [u, t]) : f.rejectWith(n, [u, t]), this
          }
        }),
        h = u.props;
      for (eo(h, u.opts.specialEasing); s < l; s++)
        if (e = bt[s].call(u, n, h, u.opts), e) return e;
      return i.map(h, tf, u), i.isFunction(u.opts.start) && u.opts.start.call(n, u), i.fx.timer(i.extend(c, {
        elem: n,
        anim: u,
        queue: u.opts.queue
      })), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
    }

    function af(n) {
      return function(t, r) {
        typeof t != "string" && (r = t, t = "*");
        var u, f = 0,
          e = t.toLowerCase().match(h) || [];
        if (i.isFunction(r))
          while (u = e[f++]) u.charAt(0) === "+" ? (u = u.slice(1) || "*", (n[u] = n[u] || []).unshift(r)) : (n[u] = n[u] || []).push(r)
      }
    }

    function vf(n, t, r, u) {
      function e(s) {
        var h;
        return f[s] = !0, i.each(n[s] || [], function(n, i) {
          var s = i(t, r, u);
          if (typeof s != "string" || o || f[s]) {
            if (o) return !(h = s)
          } else return t.dataTypes.unshift(s), e(s), !1
        }), h
      }
      var f = {},
        o = n === bi;
      return e(t.dataTypes[0]) || !f["*"] && e("*")
    }

    function ki(n, t) {
      var u, r, f = i.ajaxSettings.flatOptions || {};
      for (r in t) t[r] !== undefined && ((f[r] ? n : u || (u = {}))[r] = t[r]);
      return u && i.extend(!0, n, u), n
    }

    function ao(n, t, i) {
      for (var o, e, u, f, s = n.contents, r = n.dataTypes; r[0] === "*";) r.shift(), e === undefined && (e = n.mimeType || t.getResponseHeader("Content-Type"));
      if (e)
        for (f in s)
          if (s[f] && s[f].test(e)) {
            r.unshift(f);
            break
          } if (r[0] in i) u = r[0];
      else {
        for (f in i) {
          if (!r[0] || n.converters[f + " " + r[0]]) {
            u = f;
            break
          }
          o || (o = f)
        }
        u = u || o
      }
      if (u) return u !== r[0] && r.unshift(u), i[u]
    }

    function vo(n, t, i, r) {
      var h, u, f, s, e, o = {},
        c = n.dataTypes.slice();
      if (c[1])
        for (f in n.converters) o[f.toLowerCase()] = n.converters[f];
      for (u = c.shift(); u;)
        if (n.responseFields[u] && (i[n.responseFields[u]] = t), !e && r && n.dataFilter && (t = n.dataFilter(t, n.dataType)), e = u, u = c.shift(), u)
          if (u === "*") u = e;
          else if (e !== "*" && e !== u) {
        if (f = o[e + " " + u] || o["* " + u], !f)
          for (h in o)
            if (s = h.split(" "), s[1] === u && (f = o[e + " " + s[0]] || o["* " + s[0]], f)) {
              f === !0 ? f = o[h] : o[h] !== !0 && (u = s[0], c.unshift(s[1]));
              break
            } if (f !== !0)
          if (f && n.throws) t = f(t);
          else try {
            t = f(t)
          } catch (l) {
            return {
              state: "parsererror",
              error: f ? l : "No conversion from " + e + " to " + u
            }
          }
      }
      return {
        state: "success",
        data: t
      }
    }

    function di(n, t, r, u) {
      var f;
      if (i.isArray(t)) i.each(t, function(t, i) {
        r || po.test(n) ? u(n, i) : di(n + "[" + (typeof i == "object" ? t : "") + "]", i, r, u)
      });
      else if (r || i.type(t) !== "object") u(n, t);
      else
        for (f in t) di(n + "[" + f + "]", t[f], r, u)
    }

    function pf() {
      try {
        return new n.XMLHttpRequest
      } catch (t) {}
    }

    function go() {
      try {
        return new n.ActiveXObject("Microsoft.XMLHTTP")
      } catch (t) {}
    }

    function wf(n) {
      return i.isWindow(n) ? n : n.nodeType === 9 ? n.defaultView || n.parentWindow : !1
    }
    var c = [],
      l = c.slice,
      ir = c.concat,
      ii = c.push,
      rr = c.indexOf,
      ct = {},
      df = ct.toString,
      tt = ct.hasOwnProperty,
      r = {},
      ur = "1.11.3",
      i = function(n, t) {
        return new i.fn.init(n, t)
      },
      gf = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
      ne = /^-ms-/,
      te = /-([\da-z])/gi,
      ie = function(n, t) {
        return t.toUpperCase()
      },
      p, or, sr, h, fi, lt, o, lr, ar, vr, ot, ai, uf, ef, of , gt, gi, ti, nr, tr, bf, kf;
    i.fn = i.prototype = {
      jquery: ur,
      constructor: i,
      selector: "",
      length: 0,
      toArray: function() {
        return l.call(this)
      },
      get: function(n) {
        return n != null ? n < 0 ? this[n + this.length] : this[n] : l.call(this)
      },
      pushStack: function(n) {
        var t = i.merge(this.constructor(), n);
        return t.prevObject = this, t.context = this.context, t
      },
      each: function(n, t) {
        return i.each(this, n, t)
      },
      map: function(n) {
        return this.pushStack(i.map(this, function(t, i) {
          return n.call(t, i, t)
        }))
      },
      slice: function() {
        return this.pushStack(l.apply(this, arguments))
      },
      first: function() {
        return this.eq(0)
      },
      last: function() {
        return this.eq(-1)
      },
      eq: function(n) {
        var i = this.length,
          t = +n + (n < 0 ? i : 0);
        return this.pushStack(t >= 0 && t < i ? [this[t]] : [])
      },
      end: function() {
        return this.prevObject || this.constructor(null)
      },
      push: ii,
      sort: c.sort,
      splice: c.splice
    };
    i.extend = i.fn.extend = function() {
      var r, e, t, f, o, s, n = arguments[0] || {},
        u = 1,
        c = arguments.length,
        h = !1;
      for (typeof n == "boolean" && (h = n, n = arguments[u] || {}, u++), typeof n == "object" || i.isFunction(n) || (n = {}), u === c && (n = this, u--); u < c; u++)
        if ((o = arguments[u]) != null)
          for (f in o)(r = n[f], t = o[f], n !== t) && (h && t && (i.isPlainObject(t) || (e = i.isArray(t))) ? (e ? (e = !1, s = r && i.isArray(r) ? r : []) : s = r && i.isPlainObject(r) ? r : {}, n[f] = i.extend(h, s, t)) : t !== undefined && (n[f] = t));
      return n
    };
    i.extend({
      expando: "jQuery" + (ur + Math.random()).replace(/\D/g, ""),
      isReady: !0,
      error: function(n) {
        throw new Error(n);
      },
      noop: function() {},
      isFunction: function(n) {
        return i.type(n) === "function"
      },
      isArray: Array.isArray || function(n) {
        return i.type(n) === "array"
      },
      isWindow: function(n) {
        return n != null && n == n.window
      },
      isNumeric: function(n) {
        return !i.isArray(n) && n - parseFloat(n) + 1 >= 0
      },
      isEmptyObject: function(n) {
        var t;
        for (t in n) return !1;
        return !0
      },
      isPlainObject: function(n) {
        var t;
        if (!n || i.type(n) !== "object" || n.nodeType || i.isWindow(n)) return !1;
        try {
          if (n.constructor && !tt.call(n, "constructor") && !tt.call(n.constructor.prototype, "isPrototypeOf")) return !1
        } catch (u) {
          return !1
        }
        if (r.ownLast)
          for (t in n) return tt.call(n, t);
        for (t in n);
        return t === undefined || tt.call(n, t)
      },
      type: function(n) {
        return n == null ? n + "" : typeof n == "object" || typeof n == "function" ? ct[df.call(n)] || "object" : typeof n
      },
      globalEval: function(t) {
        t && i.trim(t) && (n.execScript || function(t) {
          n.eval.call(n, t)
        })(t)
      },
      camelCase: function(n) {
        return n.replace(ne, "ms-").replace(te, ie)
      },
      nodeName: function(n, t) {
        return n.nodeName && n.nodeName.toLowerCase() === t.toLowerCase()
      },
      each: function(n, t, i) {
        var u, r = 0,
          f = n.length,
          e = ri(n);
        if (i) {
          if (e) {
            for (; r < f; r++)
              if (u = t.apply(n[r], i), u === !1) break
          } else
            for (r in n)
              if (u = t.apply(n[r], i), u === !1) break
        } else if (e) {
          for (; r < f; r++)
            if (u = t.call(n[r], r, n[r]), u === !1) break
        } else
          for (r in n)
            if (u = t.call(n[r], r, n[r]), u === !1) break;
        return n
      },
      trim: function(n) {
        return n == null ? "" : (n + "").replace(gf, "")
      },
      makeArray: function(n, t) {
        var r = t || [];
        return n != null && (ri(Object(n)) ? i.merge(r, typeof n == "string" ? [n] : n) : ii.call(r, n)), r
      },
      inArray: function(n, t, i) {
        var r;
        if (t) {
          if (rr) return rr.call(t, n, i);
          for (r = t.length, i = i ? i < 0 ? Math.max(0, r + i) : i : 0; i < r; i++)
            if (i in t && t[i] === n) return i
        }
        return -1
      },
      merge: function(n, t) {
        for (var r = +t.length, i = 0, u = n.length; i < r;) n[u++] = t[i++];
        if (r !== r)
          while (t[i] !== undefined) n[u++] = t[i++];
        return n.length = u, n
      },
      grep: function(n, t, i) {
        for (var u, f = [], r = 0, e = n.length, o = !i; r < e; r++) u = !t(n[r], r), u !== o && f.push(n[r]);
        return f
      },
      map: function(n, t, i) {
        var u, r = 0,
          e = n.length,
          o = ri(n),
          f = [];
        if (o)
          for (; r < e; r++) u = t(n[r], r, i), u != null && f.push(u);
        else
          for (r in n) u = t(n[r], r, i), u != null && f.push(u);
        return ir.apply([], f)
      },
      guid: 1,
      proxy: function(n, t) {
        var u, r, f;
        return (typeof t == "string" && (f = n[t], t = n, n = f), !i.isFunction(n)) ? undefined : (u = l.call(arguments, 2), r = function() {
          return n.apply(t || this, u.concat(l.call(arguments)))
        }, r.guid = n.guid = n.guid || i.guid++, r)
      },
      now: function() {
        return +new Date
      },
      support: r
    });
    i.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(n, t) {
      ct["[object " + t + "]"] = t.toLowerCase()
    });
    p = function(n) {
      function r(n, t, i, r) {
        var p, s, a, c, w, y, d, v, nt, g;
        if ((t ? t.ownerDocument || t : h) !== o && k(t), t = t || o, i = i || [], c = t.nodeType, typeof n != "string" || !n || c !== 1 && c !== 9 && c !== 11) return i;
        if (!r && l) {
          if (c !== 11 && (p = hr.exec(n)))
            if (a = p[1]) {
              if (c === 9)
                if (s = t.getElementById(a), s && s.parentNode) {
                  if (s.id === a) return i.push(s), i
                } else return i;
              else if (t.ownerDocument && (s = t.ownerDocument.getElementById(a)) && et(t, s) && s.id === a) return i.push(s), i
            } else {
              if (p[2]) return b.apply(i, t.getElementsByTagName(n)), i;
              if ((a = p[3]) && u.getElementsByClassName) return b.apply(i, t.getElementsByClassName(a)), i
            } if (u.qsa && (!e || !e.test(n))) {
            if (v = d = f, nt = t, g = c !== 1 && n, c === 1 && t.nodeName.toLowerCase() !== "object") {
              for (y = ft(n), (d = t.getAttribute("id")) ? v = d.replace(cr, "\\$&") : t.setAttribute("id", v), v = "[id='" + v + "'] ", w = y.length; w--;) y[w] = v + vt(y[w]);
              nt = dt.test(n) && ti(t.parentNode) || t;
              g = y.join(",")
            }
            if (g) try {
              return b.apply(i, nt.querySelectorAll(g)), i
            } catch (tt) {} finally {
              d || t.removeAttribute("id")
            }
          }
        }
        return oi(n.replace(lt, "$1"), t, i, r)
      }

      function gt() {
        function n(r, u) {
          return i.push(r + " ") > t.cacheLength && delete n[i.shift()], n[r + " "] = u
        }
        var i = [];
        return n
      }

      function c(n) {
        return n[f] = !0, n
      }

      function v(n) {
        var t = o.createElement("div");
        try {
          return !!n(t)
        } catch (i) {
          return !1
        } finally {
          t.parentNode && t.parentNode.removeChild(t);
          t = null
        }
      }

      function ni(n, i) {
        for (var u = n.split("|"), r = n.length; r--;) t.attrHandle[u[r]] = i
      }

      function wi(n, t) {
        var i = t && n,
          r = i && n.nodeType === 1 && t.nodeType === 1 && (~t.sourceIndex || li) - (~n.sourceIndex || li);
        if (r) return r;
        if (i)
          while (i = i.nextSibling)
            if (i === t) return -1;
        return n ? 1 : -1
      }

      function lr(n) {
        return function(t) {
          var i = t.nodeName.toLowerCase();
          return i === "input" && t.type === n
        }
      }

      function ar(n) {
        return function(t) {
          var i = t.nodeName.toLowerCase();
          return (i === "input" || i === "button") && t.type === n
        }
      }

      function tt(n) {
        return c(function(t) {
          return t = +t, c(function(i, r) {
            for (var u, f = n([], i.length, t), e = f.length; e--;) i[u = f[e]] && (i[u] = !(r[u] = i[u]))
          })
        })
      }

      function ti(n) {
        return n && typeof n.getElementsByTagName != "undefined" && n
      }

      function bi() {}

      function vt(n) {
        for (var t = 0, r = n.length, i = ""; t < r; t++) i += n[t].value;
        return i
      }

      function ii(n, t, i) {
        var r = t.dir,
          u = i && r === "parentNode",
          e = ki++;
        return t.first ? function(t, i, f) {
          while (t = t[r])
            if (t.nodeType === 1 || u) return n(t, i, f)
        } : function(t, i, o) {
          var s, h, c = [a, e];
          if (o) {
            while (t = t[r])
              if ((t.nodeType === 1 || u) && n(t, i, o)) return !0
          } else
            while (t = t[r])
              if (t.nodeType === 1 || u) {
                if (h = t[f] || (t[f] = {}), (s = h[r]) && s[0] === a && s[1] === e) return c[2] = s[2];
                if (h[r] = c, c[2] = n(t, i, o)) return !0
              }
        }
      }

      function ri(n) {
        return n.length > 1 ? function(t, i, r) {
          for (var u = n.length; u--;)
            if (!n[u](t, i, r)) return !1;
          return !0
        } : n[0]
      }

      function vr(n, t, i) {
        for (var u = 0, f = t.length; u < f; u++) r(n, t[u], i);
        return i
      }

      function yt(n, t, i, r, u) {
        for (var e, o = [], f = 0, s = n.length, h = t != null; f < s; f++)(e = n[f]) && (!i || i(e, r, u)) && (o.push(e), h && t.push(f));
        return o
      }

      function ui(n, t, i, r, u, e) {
        return r && !r[f] && (r = ui(r)), u && !u[f] && (u = ui(u, e)), c(function(f, e, o, s) {
          var l, c, a, p = [],
            y = [],
            w = e.length,
            k = f || vr(t || "*", o.nodeType ? [o] : o, []),
            v = n && (f || !t) ? yt(k, p, n, o, s) : k,
            h = i ? u || (f ? n : w || r) ? [] : e : v;
          if (i && i(v, h, o, s), r)
            for (l = yt(h, y), r(l, [], o, s), c = l.length; c--;)(a = l[c]) && (h[y[c]] = !(v[y[c]] = a));
          if (f) {
            if (u || n) {
              if (u) {
                for (l = [], c = h.length; c--;)(a = h[c]) && l.push(v[c] = a);
                u(null, h = [], l, s)
              }
              for (c = h.length; c--;)(a = h[c]) && (l = u ? nt(f, a) : p[c]) > -1 && (f[l] = !(e[l] = a))
            }
          } else h = yt(h === e ? h.splice(w, h.length) : h), u ? u(null, e, h, s) : b.apply(e, h)
        })
      }

      function fi(n) {
        for (var o, u, r, s = n.length, h = t.relative[n[0].type], c = h || t.relative[" "], i = h ? 1 : 0, l = ii(function(n) {
            return n === o
          }, c, !0), a = ii(function(n) {
            return nt(o, n) > -1
          }, c, !0), e = [function(n, t, i) {
            var r = !h && (i || t !== ht) || ((o = t).nodeType ? l(n, t, i) : a(n, t, i));
            return o = null, r
          }]; i < s; i++)
          if (u = t.relative[n[i].type]) e = [ii(ri(e), u)];
          else {
            if (u = t.filter[n[i].type].apply(null, n[i].matches), u[f]) {
              for (r = ++i; r < s; r++)
                if (t.relative[n[r].type]) break;
              return ui(i > 1 && ri(e), i > 1 && vt(n.slice(0, i - 1).concat({
                value: n[i - 2].type === " " ? "*" : ""
              })).replace(lt, "$1"), u, i < r && fi(n.slice(i, r)), r < s && fi(n = n.slice(r)), r < s && vt(n))
            }
            e.push(u)
          } return ri(e)
      }

      function yr(n, i) {
        var u = i.length > 0,
          f = n.length > 0,
          e = function(e, s, h, c, l) {
            var y, d, w, k = 0,
              v = "0",
              g = e && [],
              p = [],
              nt = ht,
              tt = e || f && t.find.TAG("*", l),
              it = a += nt == null ? 1 : Math.random() || .1,
              rt = tt.length;
            for (l && (ht = s !== o && s); v !== rt && (y = tt[v]) != null; v++) {
              if (f && y) {
                for (d = 0; w = n[d++];)
                  if (w(y, s, h)) {
                    c.push(y);
                    break
                  } l && (a = it)
              }
              u && ((y = !w && y) && k--, e && g.push(y))
            }
            if (k += v, u && v !== k) {
              for (d = 0; w = i[d++];) w(g, p, s, h);
              if (e) {
                if (k > 0)
                  while (v--) g[v] || p[v] || (p[v] = gi.call(c));
                p = yt(p)
              }
              b.apply(c, p);
              l && !e && p.length > 0 && k + i.length > 1 && r.uniqueSort(c)
            }
            return l && (a = it, ht = nt), g
          };
        return u ? c(e) : e
      }
      var it, u, t, st, ei, ft, pt, oi, ht, w, rt, k, o, s, l, e, d, ct, et, f = "sizzle" + 1 * new Date,
        h = n.document,
        a = 0,
        ki = 0,
        si = gt(),
        hi = gt(),
        ci = gt(),
        wt = function(n, t) {
          return n === t && (rt = !0), 0
        },
        li = -2147483648,
        di = {}.hasOwnProperty,
        g = [],
        gi = g.pop,
        nr = g.push,
        b = g.push,
        ai = g.slice,
        nt = function(n, t) {
          for (var i = 0, r = n.length; i < r; i++)
            if (n[i] === t) return i;
          return -1
        },
        bt = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        i = "[\\x20\\t\\r\\n\\f]",
        ut = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
        vi = ut.replace("w", "w#"),
        yi = "\\[" + i + "*(" + ut + ")(?:" + i + "*([*^$|!~]?=)" + i + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + vi + "))|)" + i + "*\\]",
        kt = ":(" + ut + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + yi + ")*)|.*)\\)|)",
        tr = new RegExp(i + "+", "g"),
        lt = new RegExp("^" + i + "+|((?:^|[^\\\\])(?:\\\\.)*)" + i + "+$", "g"),
        ir = new RegExp("^" + i + "*," + i + "*"),
        rr = new RegExp("^" + i + "*([>+~]|" + i + ")" + i + "*"),
        ur = new RegExp("=" + i + "*([^\\]'\"]*?)" + i + "*\\]", "g"),
        fr = new RegExp(kt),
        er = new RegExp("^" + vi + "$"),
        at = {
          ID: new RegExp("^#(" + ut + ")"),
          CLASS: new RegExp("^\\.(" + ut + ")"),
          TAG: new RegExp("^(" + ut.replace("w", "w*") + ")"),
          ATTR: new RegExp("^" + yi),
          PSEUDO: new RegExp("^" + kt),
          CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + i + "*(even|odd|(([+-]|)(\\d*)n|)" + i + "*(?:([+-]|)" + i + "*(\\d+)|))" + i + "*\\)|)", "i"),
          bool: new RegExp("^(?:" + bt + ")$", "i"),
          needsContext: new RegExp("^" + i + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + i + "*((?:-\\d)?\\d*)" + i + "*\\)|)(?=[^-]|$)", "i")
        },
        or = /^(?:input|select|textarea|button)$/i,
        sr = /^h\d$/i,
        ot = /^[^{]+\{\s*\[native \w/,
        hr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        dt = /[+~]/,
        cr = /'|\\/g,
        y = new RegExp("\\\\([\\da-f]{1,6}" + i + "?|(" + i + ")|.)", "ig"),
        p = function(n, t, i) {
          var r = "0x" + t - 65536;
          return r !== r || i ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, r & 1023 | 56320)
        },
        pi = function() {
          k()
        };
      try {
        b.apply(g = ai.call(h.childNodes), h.childNodes);
        g[h.childNodes.length].nodeType
      } catch (pr) {
        b = {
          apply: g.length ? function(n, t) {
            nr.apply(n, ai.call(t))
          } : function(n, t) {
            for (var i = n.length, r = 0; n[i++] = t[r++];);
            n.length = i - 1
          }
        }
      }
      u = r.support = {};
      ei = r.isXML = function(n) {
        var t = n && (n.ownerDocument || n).documentElement;
        return t ? t.nodeName !== "HTML" : !1
      };
      k = r.setDocument = function(n) {
        var a, c, r = n ? n.ownerDocument || n : h;
        return r === o || r.nodeType !== 9 || !r.documentElement ? o : (o = r, s = r.documentElement, c = r.defaultView, c && c !== c.top && (c.addEventListener ? c.addEventListener("unload", pi, !1) : c.attachEvent && c.attachEvent("onunload", pi)), l = !ei(r), u.attributes = v(function(n) {
          return n.className = "i", !n.getAttribute("className")
        }), u.getElementsByTagName = v(function(n) {
          return n.appendChild(r.createComment("")), !n.getElementsByTagName("*").length
        }), u.getElementsByClassName = ot.test(r.getElementsByClassName), u.getById = v(function(n) {
          return s.appendChild(n).id = f, !r.getElementsByName || !r.getElementsByName(f).length
        }), u.getById ? (t.find.ID = function(n, t) {
          if (typeof t.getElementById != "undefined" && l) {
            var i = t.getElementById(n);
            return i && i.parentNode ? [i] : []
          }
        }, t.filter.ID = function(n) {
          var t = n.replace(y, p);
          return function(n) {
            return n.getAttribute("id") === t
          }
        }) : (delete t.find.ID, t.filter.ID = function(n) {
          var t = n.replace(y, p);
          return function(n) {
            var i = typeof n.getAttributeNode != "undefined" && n.getAttributeNode("id");
            return i && i.value === t
          }
        }), t.find.TAG = u.getElementsByTagName ? function(n, t) {
          return typeof t.getElementsByTagName != "undefined" ? t.getElementsByTagName(n) : u.qsa ? t.querySelectorAll(n) : void 0
        } : function(n, t) {
          var i, r = [],
            f = 0,
            u = t.getElementsByTagName(n);
          if (n === "*") {
            while (i = u[f++]) i.nodeType === 1 && r.push(i);
            return r
          }
          return u
        }, t.find.CLASS = u.getElementsByClassName && function(n, t) {
          if (l) return t.getElementsByClassName(n)
        }, d = [], e = [], (u.qsa = ot.test(r.querySelectorAll)) && (v(function(n) {
          s.appendChild(n).innerHTML = "<a id='" + f + "'><\/a><select id='" + f + "-\f]' msallowcapture=''><option selected=''><\/option><\/select>";
          n.querySelectorAll("[msallowcapture^='']").length && e.push("[*^$]=" + i + "*(?:''|\"\")");
          n.querySelectorAll("[selected]").length || e.push("\\[" + i + "*(?:value|" + bt + ")");
          n.querySelectorAll("[id~=" + f + "-]").length || e.push("~=");
          n.querySelectorAll(":checked").length || e.push(":checked");
          n.querySelectorAll("a#" + f + "+*").length || e.push(".#.+[+~]")
        }), v(function(n) {
          var t = r.createElement("input");
          t.setAttribute("type", "hidden");
          n.appendChild(t).setAttribute("name", "D");
          n.querySelectorAll("[name=d]").length && e.push("name" + i + "*[*^$|!~]?=");
          n.querySelectorAll(":enabled").length || e.push(":enabled", ":disabled");
          n.querySelectorAll("*,:x");
          e.push(",.*:")
        })), (u.matchesSelector = ot.test(ct = s.matches || s.webkitMatchesSelector || s.mozMatchesSelector || s.oMatchesSelector || s.msMatchesSelector)) && v(function(n) {
          u.disconnectedMatch = ct.call(n, "div");
          ct.call(n, "[s!='']:x");
          d.push("!=", kt)
        }), e = e.length && new RegExp(e.join("|")), d = d.length && new RegExp(d.join("|")), a = ot.test(s.compareDocumentPosition), et = a || ot.test(s.contains) ? function(n, t) {
          var r = n.nodeType === 9 ? n.documentElement : n,
            i = t && t.parentNode;
          return n === i || !!(i && i.nodeType === 1 && (r.contains ? r.contains(i) : n.compareDocumentPosition && n.compareDocumentPosition(i) & 16))
        } : function(n, t) {
          if (t)
            while (t = t.parentNode)
              if (t === n) return !0;
          return !1
        }, wt = a ? function(n, t) {
          if (n === t) return rt = !0, 0;
          var i = !n.compareDocumentPosition - !t.compareDocumentPosition;
          return i ? i : (i = (n.ownerDocument || n) === (t.ownerDocument || t) ? n.compareDocumentPosition(t) : 1, i & 1 || !u.sortDetached && t.compareDocumentPosition(n) === i) ? n === r || n.ownerDocument === h && et(h, n) ? -1 : t === r || t.ownerDocument === h && et(h, t) ? 1 : w ? nt(w, n) - nt(w, t) : 0 : i & 4 ? -1 : 1
        } : function(n, t) {
          if (n === t) return rt = !0, 0;
          var i, u = 0,
            o = n.parentNode,
            s = t.parentNode,
            f = [n],
            e = [t];
          if (o && s) {
            if (o === s) return wi(n, t)
          } else return n === r ? -1 : t === r ? 1 : o ? -1 : s ? 1 : w ? nt(w, n) - nt(w, t) : 0;
          for (i = n; i = i.parentNode;) f.unshift(i);
          for (i = t; i = i.parentNode;) e.unshift(i);
          while (f[u] === e[u]) u++;
          return u ? wi(f[u], e[u]) : f[u] === h ? -1 : e[u] === h ? 1 : 0
        }, r)
      };
      r.matches = function(n, t) {
        return r(n, null, null, t)
      };
      r.matchesSelector = function(n, t) {
        if ((n.ownerDocument || n) !== o && k(n), t = t.replace(ur, "='$1']"), u.matchesSelector && l && (!d || !d.test(t)) && (!e || !e.test(t))) try {
          var i = ct.call(n, t);
          if (i || u.disconnectedMatch || n.document && n.document.nodeType !== 11) return i
        } catch (f) {}
        return r(t, o, null, [n]).length > 0
      };
      r.contains = function(n, t) {
        return (n.ownerDocument || n) !== o && k(n), et(n, t)
      };
      r.attr = function(n, i) {
        (n.ownerDocument || n) !== o && k(n);
        var f = t.attrHandle[i.toLowerCase()],
          r = f && di.call(t.attrHandle, i.toLowerCase()) ? f(n, i, !l) : undefined;
        return r !== undefined ? r : u.attributes || !l ? n.getAttribute(i) : (r = n.getAttributeNode(i)) && r.specified ? r.value : null
      };
      r.error = function(n) {
        throw new Error("Syntax error, unrecognized expression: " + n);
      };
      r.uniqueSort = function(n) {
        var r, f = [],
          t = 0,
          i = 0;
        if (rt = !u.detectDuplicates, w = !u.sortStable && n.slice(0), n.sort(wt), rt) {
          while (r = n[i++]) r === n[i] && (t = f.push(i));
          while (t--) n.splice(f[t], 1)
        }
        return w = null, n
      };
      st = r.getText = function(n) {
        var r, i = "",
          u = 0,
          t = n.nodeType;
        if (t) {
          if (t === 1 || t === 9 || t === 11) {
            if (typeof n.textContent == "string") return n.textContent;
            for (n = n.firstChild; n; n = n.nextSibling) i += st(n)
          } else if (t === 3 || t === 4) return n.nodeValue
        } else
          while (r = n[u++]) i += st(r);
        return i
      };
      t = r.selectors = {
        cacheLength: 50,
        createPseudo: c,
        match: at,
        attrHandle: {},
        find: {},
        relative: {
          ">": {
            dir: "parentNode",
            first: !0
          },
          " ": {
            dir: "parentNode"
          },
          "+": {
            dir: "previousSibling",
            first: !0
          },
          "~": {
            dir: "previousSibling"
          }
        },
        preFilter: {
          ATTR: function(n) {
            return n[1] = n[1].replace(y, p), n[3] = (n[3] || n[4] || n[5] || "").replace(y, p), n[2] === "~=" && (n[3] = " " + n[3] + " "), n.slice(0, 4)
          },
          CHILD: function(n) {
            return n[1] = n[1].toLowerCase(), n[1].slice(0, 3) === "nth" ? (n[3] || r.error(n[0]), n[4] = +(n[4] ? n[5] + (n[6] || 1) : 2 * (n[3] === "even" || n[3] === "odd")), n[5] = +(n[7] + n[8] || n[3] === "odd")) : n[3] && r.error(n[0]), n
          },
          PSEUDO: function(n) {
            var i, t = !n[6] && n[2];
            return at.CHILD.test(n[0]) ? null : (n[3] ? n[2] = n[4] || n[5] || "" : t && fr.test(t) && (i = ft(t, !0)) && (i = t.indexOf(")", t.length - i) - t.length) && (n[0] = n[0].slice(0, i), n[2] = t.slice(0, i)), n.slice(0, 3))
          }
        },
        filter: {
          TAG: function(n) {
            var t = n.replace(y, p).toLowerCase();
            return n === "*" ? function() {
              return !0
            } : function(n) {
              return n.nodeName && n.nodeName.toLowerCase() === t
            }
          },
          CLASS: function(n) {
            var t = si[n + " "];
            return t || (t = new RegExp("(^|" + i + ")" + n + "(" + i + "|$)")) && si(n, function(n) {
              return t.test(typeof n.className == "string" && n.className || typeof n.getAttribute != "undefined" && n.getAttribute("class") || "")
            })
          },
          ATTR: function(n, t, i) {
            return function(u) {
              var f = r.attr(u, n);
              return f == null ? t === "!=" : t ? (f += "", t === "=" ? f === i : t === "!=" ? f !== i : t === "^=" ? i && f.indexOf(i) === 0 : t === "*=" ? i && f.indexOf(i) > -1 : t === "$=" ? i && f.slice(-i.length) === i : t === "~=" ? (" " + f.replace(tr, " ") + " ").indexOf(i) > -1 : t === "|=" ? f === i || f.slice(0, i.length + 1) === i + "-" : !1) : !0
            }
          },
          CHILD: function(n, t, i, r, u) {
            var s = n.slice(0, 3) !== "nth",
              o = n.slice(-4) !== "last",
              e = t === "of-type";
            return r === 1 && u === 0 ? function(n) {
              return !!n.parentNode
            } : function(t, i, h) {
              var v, k, c, l, y, w, b = s !== o ? "nextSibling" : "previousSibling",
                p = t.parentNode,
                g = e && t.nodeName.toLowerCase(),
                d = !h && !e;
              if (p) {
                if (s) {
                  while (b) {
                    for (c = t; c = c[b];)
                      if (e ? c.nodeName.toLowerCase() === g : c.nodeType === 1) return !1;
                    w = b = n === "only" && !w && "nextSibling"
                  }
                  return !0
                }
                if (w = [o ? p.firstChild : p.lastChild], o && d) {
                  for (k = p[f] || (p[f] = {}), v = k[n] || [], y = v[0] === a && v[1], l = v[0] === a && v[2], c = y && p.childNodes[y]; c = ++y && c && c[b] || (l = y = 0) || w.pop();)
                    if (c.nodeType === 1 && ++l && c === t) {
                      k[n] = [a, y, l];
                      break
                    }
                } else if (d && (v = (t[f] || (t[f] = {}))[n]) && v[0] === a) l = v[1];
                else
                  while (c = ++y && c && c[b] || (l = y = 0) || w.pop())
                    if ((e ? c.nodeName.toLowerCase() === g : c.nodeType === 1) && ++l && (d && ((c[f] || (c[f] = {}))[n] = [a, l]), c === t)) break;
                return l -= u, l === r || l % r == 0 && l / r >= 0
              }
            }
          },
          PSEUDO: function(n, i) {
            var e, u = t.pseudos[n] || t.setFilters[n.toLowerCase()] || r.error("unsupported pseudo: " + n);
            return u[f] ? u(i) : u.length > 1 ? (e = [n, n, "", i], t.setFilters.hasOwnProperty(n.toLowerCase()) ? c(function(n, t) {
              for (var r, f = u(n, i), e = f.length; e--;) r = nt(n, f[e]), n[r] = !(t[r] = f[e])
            }) : function(n) {
              return u(n, 0, e)
            }) : u
          }
        },
        pseudos: {
          not: c(function(n) {
            var t = [],
              r = [],
              i = pt(n.replace(lt, "$1"));
            return i[f] ? c(function(n, t, r, u) {
              for (var e, o = i(n, null, u, []), f = n.length; f--;)(e = o[f]) && (n[f] = !(t[f] = e))
            }) : function(n, u, f) {
              return t[0] = n, i(t, null, f, r), t[0] = null, !r.pop()
            }
          }),
          has: c(function(n) {
            return function(t) {
              return r(n, t).length > 0
            }
          }),
          contains: c(function(n) {
            return n = n.replace(y, p),
              function(t) {
                return (t.textContent || t.innerText || st(t)).indexOf(n) > -1
              }
          }),
          lang: c(function(n) {
            return er.test(n || "") || r.error("unsupported lang: " + n), n = n.replace(y, p).toLowerCase(),
              function(t) {
                var i;
                do
                  if (i = l ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return i = i.toLowerCase(), i === n || i.indexOf(n + "-") === 0; while ((t = t.parentNode) && t.nodeType === 1);
                return !1
              }
          }),
          target: function(t) {
            var i = n.location && n.location.hash;
            return i && i.slice(1) === t.id
          },
          root: function(n) {
            return n === s
          },
          focus: function(n) {
            return n === o.activeElement && (!o.hasFocus || o.hasFocus()) && !!(n.type || n.href || ~n.tabIndex)
          },
          enabled: function(n) {
            return n.disabled === !1
          },
          disabled: function(n) {
            return n.disabled === !0
          },
          checked: function(n) {
            var t = n.nodeName.toLowerCase();
            return t === "input" && !!n.checked || t === "option" && !!n.selected
          },
          selected: function(n) {
            return n.parentNode && n.parentNode.selectedIndex, n.selected === !0
          },
          empty: function(n) {
            for (n = n.firstChild; n; n = n.nextSibling)
              if (n.nodeType < 6) return !1;
            return !0
          },
          parent: function(n) {
            return !t.pseudos.empty(n)
          },
          header: function(n) {
            return sr.test(n.nodeName)
          },
          input: function(n) {
            return or.test(n.nodeName)
          },
          button: function(n) {
            var t = n.nodeName.toLowerCase();
            return t === "input" && n.type === "button" || t === "button"
          },
          text: function(n) {
            var t;
            return n.nodeName.toLowerCase() === "input" && n.type === "text" && ((t = n.getAttribute("type")) == null || t.toLowerCase() === "text")
          },
          first: tt(function() {
            return [0]
          }),
          last: tt(function(n, t) {
            return [t - 1]
          }),
          eq: tt(function(n, t, i) {
            return [i < 0 ? i + t : i]
          }),
          even: tt(function(n, t) {
            for (var i = 0; i < t; i += 2) n.push(i);
            return n
          }),
          odd: tt(function(n, t) {
            for (var i = 1; i < t; i += 2) n.push(i);
            return n
          }),
          lt: tt(function(n, t, i) {
            for (var r = i < 0 ? i + t : i; --r >= 0;) n.push(r);
            return n
          }),
          gt: tt(function(n, t, i) {
            for (var r = i < 0 ? i + t : i; ++r < t;) n.push(r);
            return n
          })
        }
      };
      t.pseudos.nth = t.pseudos.eq;
      for (it in {
          radio: !0,
          checkbox: !0,
          file: !0,
          password: !0,
          image: !0
        }) t.pseudos[it] = lr(it);
      for (it in {
          submit: !0,
          reset: !0
        }) t.pseudos[it] = ar(it);
      return bi.prototype = t.filters = t.pseudos, t.setFilters = new bi, ft = r.tokenize = function(n, i) {
        var e, f, s, o, u, h, c, l = hi[n + " "];
        if (l) return i ? 0 : l.slice(0);
        for (u = n, h = [], c = t.preFilter; u;) {
          (!e || (f = ir.exec(u))) && (f && (u = u.slice(f[0].length) || u), h.push(s = []));
          e = !1;
          (f = rr.exec(u)) && (e = f.shift(), s.push({
            value: e,
            type: f[0].replace(lt, " ")
          }), u = u.slice(e.length));
          for (o in t.filter)(f = at[o].exec(u)) && (!c[o] || (f = c[o](f))) && (e = f.shift(), s.push({
            value: e,
            type: o,
            matches: f
          }), u = u.slice(e.length));
          if (!e) break
        }
        return i ? u.length : u ? r.error(n) : hi(n, h).slice(0)
      }, pt = r.compile = function(n, t) {
        var r, u = [],
          e = [],
          i = ci[n + " "];
        if (!i) {
          for (t || (t = ft(n)), r = t.length; r--;) i = fi(t[r]), i[f] ? u.push(i) : e.push(i);
          i = ci(n, yr(e, u));
          i.selector = n
        }
        return i
      }, oi = r.select = function(n, i, r, f) {
        var s, e, o, a, v, c = typeof n == "function" && n,
          h = !f && ft(n = c.selector || n);
        if (r = r || [], h.length === 1) {
          if (e = h[0] = h[0].slice(0), e.length > 2 && (o = e[0]).type === "ID" && u.getById && i.nodeType === 9 && l && t.relative[e[1].type]) {
            if (i = (t.find.ID(o.matches[0].replace(y, p), i) || [])[0], i) c && (i = i.parentNode);
            else return r;
            n = n.slice(e.shift().value.length)
          }
          for (s = at.needsContext.test(n) ? 0 : e.length; s--;) {
            if (o = e[s], t.relative[a = o.type]) break;
            if ((v = t.find[a]) && (f = v(o.matches[0].replace(y, p), dt.test(e[0].type) && ti(i.parentNode) || i))) {
              if (e.splice(s, 1), n = f.length && vt(e), !n) return b.apply(r, f), r;
              break
            }
          }
        }
        return (c || pt(n, h))(f, i, !l, r, dt.test(n) && ti(i.parentNode) || i), r
      }, u.sortStable = f.split("").sort(wt).join("") === f, u.detectDuplicates = !!rt, k(), u.sortDetached = v(function(n) {
        return n.compareDocumentPosition(o.createElement("div")) & 1
      }), v(function(n) {
        return n.innerHTML = "<a href='#'><\/a>", n.firstChild.getAttribute("href") === "#"
      }) || ni("type|href|height|width", function(n, t, i) {
        if (!i) return n.getAttribute(t, t.toLowerCase() === "type" ? 1 : 2)
      }), u.attributes && v(function(n) {
        return n.innerHTML = "<input/>", n.firstChild.setAttribute("value", ""), n.firstChild.getAttribute("value") === ""
      }) || ni("value", function(n, t, i) {
        if (!i && n.nodeName.toLowerCase() === "input") return n.defaultValue
      }), v(function(n) {
        return n.getAttribute("disabled") == null
      }) || ni(bt, function(n, t, i) {
        var r;
        if (!i) return n[t] === !0 ? t.toLowerCase() : (r = n.getAttributeNode(t)) && r.specified ? r.value : null
      }), r
    }(n);
    i.find = p;
    i.expr = p.selectors;
    i.expr[":"] = i.expr.pseudos;
    i.unique = p.uniqueSort;
    i.text = p.getText;
    i.isXMLDoc = p.isXML;
    i.contains = p.contains;
    var fr = i.expr.match.needsContext,
      er = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
      re = /^.[^:#\[\.,]*$/;
    i.filter = function(n, t, r) {
      var u = t[0];
      return r && (n = ":not(" + n + ")"), t.length === 1 && u.nodeType === 1 ? i.find.matchesSelector(u, n) ? [u] : [] : i.find.matches(n, i.grep(t, function(n) {
        return n.nodeType === 1
      }))
    };
    i.fn.extend({
      find: function(n) {
        var t, r = [],
          u = this,
          f = u.length;
        if (typeof n != "string") return this.pushStack(i(n).filter(function() {
          for (t = 0; t < f; t++)
            if (i.contains(u[t], this)) return !0
        }));
        for (t = 0; t < f; t++) i.find(n, u[t], r);
        return r = this.pushStack(f > 1 ? i.unique(r) : r), r.selector = this.selector ? this.selector + " " + n : n, r
      },
      filter: function(n) {
        return this.pushStack(ui(this, n || [], !1))
      },
      not: function(n) {
        return this.pushStack(ui(this, n || [], !0))
      },
      is: function(n) {
        return !!ui(this, typeof n == "string" && fr.test(n) ? i(n) : n || [], !1).length
      }
    });
    var ft, u = n.document,
      ue = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
      fe = i.fn.init = function(n, t) {
        var r, f;
        if (!n) return this;
        if (typeof n == "string") {
          if (r = n.charAt(0) === "<" && n.charAt(n.length - 1) === ">" && n.length >= 3 ? [null, n, null] : ue.exec(n), r && (r[1] || !t)) {
            if (r[1]) {
              if (t = t instanceof i ? t[0] : t, i.merge(this, i.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : u, !0)), er.test(r[1]) && i.isPlainObject(t))
                for (r in t) i.isFunction(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
              return this
            }
            if (f = u.getElementById(r[2]), f && f.parentNode) {
              if (f.id !== r[2]) return ft.find(n);
              this.length = 1;
              this[0] = f
            }
            return this.context = u, this.selector = n, this
          }
          return !t || t.jquery ? (t || ft).find(n) : this.constructor(t).find(n)
        }
        return n.nodeType ? (this.context = this[0] = n, this.length = 1, this) : i.isFunction(n) ? typeof ft.ready != "undefined" ? ft.ready(n) : n(i) : (n.selector !== undefined && (this.selector = n.selector, this.context = n.context), i.makeArray(n, this))
      };
    fe.prototype = i.fn;
    ft = i(u);
    or = /^(?:parents|prev(?:Until|All))/;
    sr = {
      children: !0,
      contents: !0,
      next: !0,
      prev: !0
    };
    i.extend({
      dir: function(n, t, r) {
        for (var f = [], u = n[t]; u && u.nodeType !== 9 && (r === undefined || u.nodeType !== 1 || !i(u).is(r));) u.nodeType === 1 && f.push(u), u = u[t];
        return f
      },
      sibling: function(n, t) {
        for (var i = []; n; n = n.nextSibling) n.nodeType === 1 && n !== t && i.push(n);
        return i
      }
    });
    i.fn.extend({
      has: function(n) {
        var t, r = i(n, this),
          u = r.length;
        return this.filter(function() {
          for (t = 0; t < u; t++)
            if (i.contains(this, r[t])) return !0
        })
      },
      closest: function(n, t) {
        for (var r, f = 0, o = this.length, u = [], e = fr.test(n) || typeof n != "string" ? i(n, t || this.context) : 0; f < o; f++)
          for (r = this[f]; r && r !== t; r = r.parentNode)
            if (r.nodeType < 11 && (e ? e.index(r) > -1 : r.nodeType === 1 && i.find.matchesSelector(r, n))) {
              u.push(r);
              break
            } return this.pushStack(u.length > 1 ? i.unique(u) : u)
      },
      index: function(n) {
        return n ? typeof n == "string" ? i.inArray(this[0], i(n)) : i.inArray(n.jquery ? n[0] : n, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
      },
      add: function(n, t) {
        return this.pushStack(i.unique(i.merge(this.get(), i(n, t))))
      },
      addBack: function(n) {
        return this.add(n == null ? this.prevObject : this.prevObject.filter(n))
      }
    });
    i.each({
      parent: function(n) {
        var t = n.parentNode;
        return t && t.nodeType !== 11 ? t : null
      },
      parents: function(n) {
        return i.dir(n, "parentNode")
      },
      parentsUntil: function(n, t, r) {
        return i.dir(n, "parentNode", r)
      },
      next: function(n) {
        return hr(n, "nextSibling")
      },
      prev: function(n) {
        return hr(n, "previousSibling")
      },
      nextAll: function(n) {
        return i.dir(n, "nextSibling")
      },
      prevAll: function(n) {
        return i.dir(n, "previousSibling")
      },
      nextUntil: function(n, t, r) {
        return i.dir(n, "nextSibling", r)
      },
      prevUntil: function(n, t, r) {
        return i.dir(n, "previousSibling", r)
      },
      siblings: function(n) {
        return i.sibling((n.parentNode || {}).firstChild, n)
      },
      children: function(n) {
        return i.sibling(n.firstChild)
      },
      contents: function(n) {
        return i.nodeName(n, "iframe") ? n.contentDocument || n.contentWindow.document : i.merge([], n.childNodes)
      }
    }, function(n, t) {
      i.fn[n] = function(r, u) {
        var f = i.map(this, t, r);
        return n.slice(-5) !== "Until" && (u = r), u && typeof u == "string" && (f = i.filter(u, f)), this.length > 1 && (sr[n] || (f = i.unique(f)), or.test(n) && (f = f.reverse())), this.pushStack(f)
      }
    });
    h = /\S+/g;
    fi = {};
    i.Callbacks = function(n) {
      n = typeof n == "string" ? fi[n] || ee(n) : i.extend({}, n);
      var o, u, h, f, e, c, t = [],
        r = !n.once && [],
        l = function(i) {
          for (u = n.memory && i, h = !0, e = c || 0, c = 0, f = t.length, o = !0; t && e < f; e++)
            if (t[e].apply(i[0], i[1]) === !1 && n.stopOnFalse) {
              u = !1;
              break
            } o = !1;
          t && (r ? r.length && l(r.shift()) : u ? t = [] : s.disable())
        },
        s = {
          add: function() {
            if (t) {
              var r = t.length;
              (function e(r) {
                i.each(r, function(r, u) {
                  var f = i.type(u);
                  f === "function" ? n.unique && s.has(u) || t.push(u) : u && u.length && f !== "string" && e(u)
                })
              })(arguments);
              o ? f = t.length : u && (c = r, l(u))
            }
            return this
          },
          remove: function() {
            return t && i.each(arguments, function(n, r) {
              for (var u;
                (u = i.inArray(r, t, u)) > -1;) t.splice(u, 1), o && (u <= f && f--, u <= e && e--)
            }), this
          },
          has: function(n) {
            return n ? i.inArray(n, t) > -1 : !!(t && t.length)
          },
          empty: function() {
            return t = [], f = 0, this
          },
          disable: function() {
            return t = r = u = undefined, this
          },
          disabled: function() {
            return !t
          },
          lock: function() {
            return r = undefined, u || s.disable(), this
          },
          locked: function() {
            return !r
          },
          fireWith: function(n, i) {
            return t && (!h || r) && (i = i || [], i = [n, i.slice ? i.slice() : i], o ? r.push(i) : l(i)), this
          },
          fire: function() {
            return s.fireWith(this, arguments), this
          },
          fired: function() {
            return !!h
          }
        };
      return s
    };
    i.extend({
      Deferred: function(n) {
        var u = [
            ["resolve", "done", i.Callbacks("once memory"), "resolved"],
            ["reject", "fail", i.Callbacks("once memory"), "rejected"],
            ["notify", "progress", i.Callbacks("memory")]
          ],
          f = "pending",
          r = {
            state: function() {
              return f
            },
            always: function() {
              return t.done(arguments).fail(arguments), this
            },
            then: function() {
              var n = arguments;
              return i.Deferred(function(f) {
                i.each(u, function(u, e) {
                  var o = i.isFunction(n[u]) && n[u];
                  t[e[1]](function() {
                    var n = o && o.apply(this, arguments);
                    n && i.isFunction(n.promise) ? n.promise().done(f.resolve).fail(f.reject).progress(f.notify) : f[e[0] + "With"](this === r ? f.promise() : this, o ? [n] : arguments)
                  })
                });
                n = null
              }).promise()
            },
            promise: function(n) {
              return n != null ? i.extend(n, r) : r
            }
          },
          t = {};
        return r.pipe = r.then, i.each(u, function(n, i) {
          var e = i[2],
            o = i[3];
          r[i[1]] = e.add;
          o && e.add(function() {
            f = o
          }, u[n ^ 1][2].disable, u[2][2].lock);
          t[i[0]] = function() {
            return t[i[0] + "With"](this === t ? r : this, arguments), this
          };
          t[i[0] + "With"] = e.fireWith
        }), r.promise(t), n && n.call(t, t), t
      },
      when: function(n) {
        var t = 0,
          u = l.call(arguments),
          r = u.length,
          e = r !== 1 || n && i.isFunction(n.promise) ? r : 0,
          f = e === 1 ? n : i.Deferred(),
          h = function(n, t, i) {
            return function(r) {
              t[n] = this;
              i[n] = arguments.length > 1 ? l.call(arguments) : r;
              i === o ? f.notifyWith(t, i) : --e || f.resolveWith(t, i)
            }
          },
          o, c, s;
        if (r > 1)
          for (o = new Array(r), c = new Array(r), s = new Array(r); t < r; t++) u[t] && i.isFunction(u[t].promise) ? u[t].promise().done(h(t, s, u)).fail(f.reject).progress(h(t, c, o)) : --e;
        return e || f.resolveWith(s, u), f.promise()
      }
    });
    i.fn.ready = function(n) {
      return i.ready.promise().done(n), this
    };
    i.extend({
      isReady: !1,
      readyWait: 1,
      holdReady: function(n) {
        n ? i.readyWait++ : i.ready(!0)
      },
      ready: function(n) {
        if (n === !0 ? !--i.readyWait : !i.isReady) {
          if (!u.body) return setTimeout(i.ready);
          (i.isReady = !0, n !== !0 && --i.readyWait > 0) || (lt.resolveWith(u, [i]), i.fn.triggerHandler && (i(u).triggerHandler("ready"), i(u).off("ready")))
        }
      }
    });
    i.ready.promise = function(t) {
      if (!lt)
        if (lt = i.Deferred(), u.readyState === "complete") setTimeout(i.ready);
        else if (u.addEventListener) u.addEventListener("DOMContentLoaded", a, !1), n.addEventListener("load", a, !1);
      else {
        u.attachEvent("onreadystatechange", a);
        n.attachEvent("onload", a);
        var r = !1;
        try {
          r = n.frameElement == null && u.documentElement
        } catch (e) {}
        r && r.doScroll && function f() {
          if (!i.isReady) {
            try {
              r.doScroll("left")
            } catch (n) {
              return setTimeout(f, 50)
            }
            cr();
            i.ready()
          }
        }()
      }
      return lt.promise(t)
    };
    o = typeof undefined;
    for (lr in i(r)) break;
    r.ownLast = lr !== "0";
    r.inlineBlockNeedsLayout = !1;
    i(function() {
        var f, t, n, i;
        (n = u.getElementsByTagName("body")[0], n && n.style) && (t = u.createElement("div"), i = u.createElement("div"), i.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(i).appendChild(t), typeof t.style.zoom !== o && (t.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", r.inlineBlockNeedsLayout = f = t.offsetWidth === 3, f && (n.style.zoom = 1)), n.removeChild(i))
      }),
      function() {
        var n = u.createElement("div");
        if (r.deleteExpando == null) {
          r.deleteExpando = !0;
          try {
            delete n.test
          } catch (t) {
            r.deleteExpando = !1
          }
        }
        n = null
      }();
    i.acceptData = function(n) {
      var t = i.noData[(n.nodeName + " ").toLowerCase()],
        r = +n.nodeType || 1;
      return r !== 1 && r !== 9 ? !1 : !t || t !== !0 && n.getAttribute("classid") === t
    };
    ar = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/;
    vr = /([A-Z])/g;
    i.extend({
      cache: {},
      noData: {
        "applet ": !0,
        "embed ": !0,
        "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
      },
      hasData: function(n) {
        return n = n.nodeType ? i.cache[n[i.expando]] : n[i.expando], !!n && !ei(n)
      },
      data: function(n, t, i) {
        return pr(n, t, i)
      },
      removeData: function(n, t) {
        return wr(n, t)
      },
      _data: function(n, t, i) {
        return pr(n, t, i, !0)
      },
      _removeData: function(n, t) {
        return wr(n, t, !0)
      }
    });
    i.fn.extend({
      data: function(n, t) {
        var f, u, e, r = this[0],
          o = r && r.attributes;
        if (n === undefined) {
          if (this.length && (e = i.data(r), r.nodeType === 1 && !i._data(r, "parsedAttrs"))) {
            for (f = o.length; f--;) o[f] && (u = o[f].name, u.indexOf("data-") === 0 && (u = i.camelCase(u.slice(5)), yr(r, u, e[u])));
            i._data(r, "parsedAttrs", !0)
          }
          return e
        }
        return typeof n == "object" ? this.each(function() {
          i.data(this, n)
        }) : arguments.length > 1 ? this.each(function() {
          i.data(this, n, t)
        }) : r ? yr(r, n, i.data(r, n)) : undefined
      },
      removeData: function(n) {
        return this.each(function() {
          i.removeData(this, n)
        })
      }
    });
    i.extend({
      queue: function(n, t, r) {
        var u;
        if (n) return t = (t || "fx") + "queue", u = i._data(n, t), r && (!u || i.isArray(r) ? u = i._data(n, t, i.makeArray(r)) : u.push(r)), u || []
      },
      dequeue: function(n, t) {
        t = t || "fx";
        var r = i.queue(n, t),
          e = r.length,
          u = r.shift(),
          f = i._queueHooks(n, t),
          o = function() {
            i.dequeue(n, t)
          };
        u === "inprogress" && (u = r.shift(), e--);
        u && (t === "fx" && r.unshift("inprogress"), delete f.stop, u.call(n, o, f));
        !e && f && f.empty.fire()
      },
      _queueHooks: function(n, t) {
        var r = t + "queueHooks";
        return i._data(n, r) || i._data(n, r, {
          empty: i.Callbacks("once memory").add(function() {
            i._removeData(n, t + "queue");
            i._removeData(n, r)
          })
        })
      }
    });
    i.fn.extend({
      queue: function(n, t) {
        var r = 2;
        return (typeof n != "string" && (t = n, n = "fx", r--), arguments.length < r) ? i.queue(this[0], n) : t === undefined ? this : this.each(function() {
          var r = i.queue(this, n, t);
          i._queueHooks(this, n);
          n === "fx" && r[0] !== "inprogress" && i.dequeue(this, n)
        })
      },
      dequeue: function(n) {
        return this.each(function() {
          i.dequeue(this, n)
        })
      },
      clearQueue: function(n) {
        return this.queue(n || "fx", [])
      },
      promise: function(n, t) {
        var r, f = 1,
          e = i.Deferred(),
          u = this,
          o = this.length,
          s = function() {
            --f || e.resolveWith(u, [u])
          };
        for (typeof n != "string" && (t = n, n = undefined), n = n || "fx"; o--;) r = i._data(u[o], n + "queueHooks"), r && r.empty && (f++, r.empty.add(s));
        return s(), e.promise(t)
      }
    });
    var at = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
      w = ["Top", "Right", "Bottom", "Left"],
      et = function(n, t) {
        return n = t || n, i.css(n, "display") === "none" || !i.contains(n.ownerDocument, n)
      },
      b = i.access = function(n, t, r, u, f, e, o) {
        var s = 0,
          c = n.length,
          h = r == null;
        if (i.type(r) === "object") {
          f = !0;
          for (s in r) i.access(n, t, s, r[s], !0, e, o)
        } else if (u !== undefined && (f = !0, i.isFunction(u) || (o = !0), h && (o ? (t.call(n, u), t = null) : (h = t, t = function(n, t, r) {
            return h.call(i(n), r)
          })), t))
          for (; s < c; s++) t(n[s], r, o ? u : u.call(n[s], s, t(n[s], r)));
        return f ? n : h ? t.call(n) : c ? t(n[0], r) : e
      },
      oi = /^(?:checkbox|radio)$/i;
    (function() {
      var t = u.createElement("input"),
        n = u.createElement("div"),
        i = u.createDocumentFragment();
      if (n.innerHTML = "  <link/><table><\/table><a href='/a'>a<\/a><input type='checkbox'/>", r.leadingWhitespace = n.firstChild.nodeType === 3, r.tbody = !n.getElementsByTagName("tbody").length, r.htmlSerialize = !!n.getElementsByTagName("link").length, r.html5Clone = u.createElement("nav").cloneNode(!0).outerHTML !== "<:nav><\/:nav>", t.type = "checkbox", t.checked = !0, i.appendChild(t), r.appendChecked = t.checked, n.innerHTML = "<textarea>x<\/textarea>", r.noCloneChecked = !!n.cloneNode(!0).lastChild.defaultValue, i.appendChild(n), n.innerHTML = "<input type='radio' checked='checked' name='t'/>", r.checkClone = n.cloneNode(!0).cloneNode(!0).lastChild.checked, r.noCloneEvent = !0, n.attachEvent && (n.attachEvent("onclick", function() {
          r.noCloneEvent = !1
        }), n.cloneNode(!0).click()), r.deleteExpando == null) {
        r.deleteExpando = !0;
        try {
          delete n.test
        } catch (f) {
          r.deleteExpando = !1
        }
      }
    })(),
    function() {
      var t, i, f = u.createElement("div");
      for (t in {
          submit: !0,
          change: !0,
          focusin: !0
        }) i = "on" + t, (r[t + "Bubbles"] = i in n) || (f.setAttribute(i, "t"), r[t + "Bubbles"] = f.attributes[i].expando === !1);
      f = null
    }();
    var si = /^(?:input|select|textarea)$/i,
      oe = /^key/,
      se = /^(?:mouse|pointer|contextmenu)|click/,
      br = /^(?:focusinfocus|focusoutblur)$/,
      kr = /^([^.]*)(?:\.(.+)|)$/;
    i.event = {
      global: {},
      add: function(n, t, r, u, f) {
        var w, y, b, p, s, c, l, a, e, k, d, v = i._data(n);
        if (v) {
          for (r.handler && (p = r, r = p.handler, f = p.selector), r.guid || (r.guid = i.guid++), (y = v.events) || (y = v.events = {}), (c = v.handle) || (c = v.handle = function(n) {
              return typeof i !== o && (!n || i.event.triggered !== n.type) ? i.event.dispatch.apply(c.elem, arguments) : undefined
            }, c.elem = n), t = (t || "").match(h) || [""], b = t.length; b--;)(w = kr.exec(t[b]) || [], e = d = w[1], k = (w[2] || "").split(".").sort(), e) && (s = i.event.special[e] || {}, e = (f ? s.delegateType : s.bindType) || e, s = i.event.special[e] || {}, l = i.extend({
            type: e,
            origType: d,
            data: u,
            handler: r,
            guid: r.guid,
            selector: f,
            needsContext: f && i.expr.match.needsContext.test(f),
            namespace: k.join(".")
          }, p), (a = y[e]) || (a = y[e] = [], a.delegateCount = 0, s.setup && s.setup.call(n, u, k, c) !== !1 || (n.addEventListener ? n.addEventListener(e, c, !1) : n.attachEvent && n.attachEvent("on" + e, c))), s.add && (s.add.call(n, l), l.handler.guid || (l.handler.guid = r.guid)), f ? a.splice(a.delegateCount++, 0, l) : a.push(l), i.event.global[e] = !0);
          n = null
        }
      },
      remove: function(n, t, r, u, f) {
        var y, o, s, b, p, a, c, l, e, w, k, v = i.hasData(n) && i._data(n);
        if (v && (a = v.events)) {
          for (t = (t || "").match(h) || [""], p = t.length; p--;) {
            if (s = kr.exec(t[p]) || [], e = k = s[1], w = (s[2] || "").split(".").sort(), !e) {
              for (e in a) i.event.remove(n, e + t[p], r, u, !0);
              continue
            }
            for (c = i.event.special[e] || {}, e = (u ? c.delegateType : c.bindType) || e, l = a[e] || [], s = s[2] && new RegExp("(^|\\.)" + w.join("\\.(?:.*\\.|)") + "(\\.|$)"), b = y = l.length; y--;) o = l[y], (f || k === o.origType) && (!r || r.guid === o.guid) && (!s || s.test(o.namespace)) && (!u || u === o.selector || u === "**" && o.selector) && (l.splice(y, 1), o.selector && l.delegateCount--, c.remove && c.remove.call(n, o));
            b && !l.length && (c.teardown && c.teardown.call(n, w, v.handle) !== !1 || i.removeEvent(n, e, v.handle), delete a[e])
          }
          i.isEmptyObject(a) && (delete v.handle, i._removeData(n, "events"))
        }
      },
      trigger: function(t, r, f, e) {
        var l, a, o, p, c, h, w, y = [f || u],
          s = tt.call(t, "type") ? t.type : t,
          v = tt.call(t, "namespace") ? t.namespace.split(".") : [];
        if ((o = h = f = f || u, f.nodeType !== 3 && f.nodeType !== 8) && !br.test(s + i.event.triggered) && (s.indexOf(".") >= 0 && (v = s.split("."), s = v.shift(), v.sort()), a = s.indexOf(":") < 0 && "on" + s, t = t[i.expando] ? t : new i.Event(s, typeof t == "object" && t), t.isTrigger = e ? 2 : 3, t.namespace = v.join("."), t.namespace_re = t.namespace ? new RegExp("(^|\\.)" + v.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = undefined, t.target || (t.target = f), r = r == null ? [t] : i.makeArray(r, [t]), c = i.event.special[s] || {}, e || !c.trigger || c.trigger.apply(f, r) !== !1)) {
          if (!e && !c.noBubble && !i.isWindow(f)) {
            for (p = c.delegateType || s, br.test(p + s) || (o = o.parentNode); o; o = o.parentNode) y.push(o), h = o;
            h === (f.ownerDocument || u) && y.push(h.defaultView || h.parentWindow || n)
          }
          for (w = 0;
            (o = y[w++]) && !t.isPropagationStopped();) t.type = w > 1 ? p : c.bindType || s, l = (i._data(o, "events") || {})[t.type] && i._data(o, "handle"), l && l.apply(o, r), l = a && o[a], l && l.apply && i.acceptData(o) && (t.result = l.apply(o, r), t.result === !1 && t.preventDefault());
          if (t.type = s, !e && !t.isDefaultPrevented() && (!c._default || c._default.apply(y.pop(), r) === !1) && i.acceptData(f) && a && f[s] && !i.isWindow(f)) {
            h = f[a];
            h && (f[a] = null);
            i.event.triggered = s;
            try {
              f[s]()
            } catch (b) {}
            i.event.triggered = undefined;
            h && (f[a] = h)
          }
          return t.result
        }
      },
      dispatch: function(n) {
        n = i.event.fix(n);
        var e, f, t, r, o, s = [],
          h = l.call(arguments),
          c = (i._data(this, "events") || {})[n.type] || [],
          u = i.event.special[n.type] || {};
        if (h[0] = n, n.delegateTarget = this, !u.preDispatch || u.preDispatch.call(this, n) !== !1) {
          for (s = i.event.handlers.call(this, n, c), e = 0;
            (r = s[e++]) && !n.isPropagationStopped();)
            for (n.currentTarget = r.elem, o = 0;
              (t = r.handlers[o++]) && !n.isImmediatePropagationStopped();)(!n.namespace_re || n.namespace_re.test(t.namespace)) && (n.handleObj = t, n.data = t.data, f = ((i.event.special[t.origType] || {}).handle || t.handler).apply(r.elem, h), f !== undefined && (n.result = f) === !1 && (n.preventDefault(), n.stopPropagation()));
          return u.postDispatch && u.postDispatch.call(this, n), n.result
        }
      },
      handlers: function(n, t) {
        var f, e, u, o, h = [],
          s = t.delegateCount,
          r = n.target;
        if (s && r.nodeType && (!n.button || n.type !== "click"))
          for (; r != this; r = r.parentNode || this)
            if (r.nodeType === 1 && (r.disabled !== !0 || n.type !== "click")) {
              for (u = [], o = 0; o < s; o++) e = t[o], f = e.selector + " ", u[f] === undefined && (u[f] = e.needsContext ? i(f, this).index(r) >= 0 : i.find(f, this, null, [r]).length), u[f] && u.push(e);
              u.length && h.push({
                elem: r,
                handlers: u
              })
            } return s < t.length && h.push({
          elem: this,
          handlers: t.slice(s)
        }), h
      },
      fix: function(n) {
        if (n[i.expando]) return n;
        var e, o, s, r = n.type,
          f = n,
          t = this.fixHooks[r];
        for (t || (this.fixHooks[r] = t = se.test(r) ? this.mouseHooks : oe.test(r) ? this.keyHooks : {}), s = t.props ? this.props.concat(t.props) : this.props, n = new i.Event(f), e = s.length; e--;) o = s[e], n[o] = f[o];
        return n.target || (n.target = f.srcElement || u), n.target.nodeType === 3 && (n.target = n.target.parentNode), n.metaKey = !!n.metaKey, t.filter ? t.filter(n, f) : n
      },
      props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
      fixHooks: {},
      keyHooks: {
        props: "char charCode key keyCode".split(" "),
        filter: function(n, t) {
          return n.which == null && (n.which = t.charCode != null ? t.charCode : t.keyCode), n
        }
      },
      mouseHooks: {
        props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
        filter: function(n, t) {
          var i, e, r, f = t.button,
            o = t.fromElement;
          return n.pageX == null && t.clientX != null && (e = n.target.ownerDocument || u, r = e.documentElement, i = e.body, n.pageX = t.clientX + (r && r.scrollLeft || i && i.scrollLeft || 0) - (r && r.clientLeft || i && i.clientLeft || 0), n.pageY = t.clientY + (r && r.scrollTop || i && i.scrollTop || 0) - (r && r.clientTop || i && i.clientTop || 0)), !n.relatedTarget && o && (n.relatedTarget = o === n.target ? t.toElement : o), n.which || f === undefined || (n.which = f & 1 ? 1 : f & 2 ? 3 : f & 4 ? 2 : 0), n
        }
      },
      special: {
        load: {
          noBubble: !0
        },
        focus: {
          trigger: function() {
            if (this !== dr() && this.focus) try {
              return this.focus(), !1
            } catch (n) {}
          },
          delegateType: "focusin"
        },
        blur: {
          trigger: function() {
            if (this === dr() && this.blur) return this.blur(), !1
          },
          delegateType: "focusout"
        },
        click: {
          trigger: function() {
            if (i.nodeName(this, "input") && this.type === "checkbox" && this.click) return this.click(), !1
          },
          _default: function(n) {
            return i.nodeName(n.target, "a")
          }
        },
        beforeunload: {
          postDispatch: function(n) {
            n.result !== undefined && n.originalEvent && (n.originalEvent.returnValue = n.result)
          }
        }
      },
      simulate: function(n, t, r, u) {
        var f = i.extend(new i.Event, r, {
          type: n,
          isSimulated: !0,
          originalEvent: {}
        });
        u ? i.event.trigger(f, null, t) : i.event.dispatch.call(t, f);
        f.isDefaultPrevented() && r.preventDefault()
      }
    };
    i.removeEvent = u.removeEventListener ? function(n, t, i) {
      n.removeEventListener && n.removeEventListener(t, i, !1)
    } : function(n, t, i) {
      var r = "on" + t;
      n.detachEvent && (typeof n[r] === o && (n[r] = null), n.detachEvent(r, i))
    };
    i.Event = function(n, t) {
      if (!(this instanceof i.Event)) return new i.Event(n, t);
      n && n.type ? (this.originalEvent = n, this.type = n.type, this.isDefaultPrevented = n.defaultPrevented || n.defaultPrevented === undefined && n.returnValue === !1 ? vt : it) : this.type = n;
      t && i.extend(this, t);
      this.timeStamp = n && n.timeStamp || i.now();
      this[i.expando] = !0
    };
    i.Event.prototype = {
      isDefaultPrevented: it,
      isPropagationStopped: it,
      isImmediatePropagationStopped: it,
      preventDefault: function() {
        var n = this.originalEvent;
        (this.isDefaultPrevented = vt, n) && (n.preventDefault ? n.preventDefault() : n.returnValue = !1)
      },
      stopPropagation: function() {
        var n = this.originalEvent;
        (this.isPropagationStopped = vt, n) && (n.stopPropagation && n.stopPropagation(), n.cancelBubble = !0)
      },
      stopImmediatePropagation: function() {
        var n = this.originalEvent;
        this.isImmediatePropagationStopped = vt;
        n && n.stopImmediatePropagation && n.stopImmediatePropagation();
        this.stopPropagation()
      }
    };
    i.each({
      mouseenter: "mouseover",
      mouseleave: "mouseout",
      pointerenter: "pointerover",
      pointerleave: "pointerout"
    }, function(n, t) {
      i.event.special[n] = {
        delegateType: t,
        bindType: t,
        handle: function(n) {
          var u, f = this,
            r = n.relatedTarget,
            e = n.handleObj;
          return r && (r === f || i.contains(f, r)) || (n.type = e.origType, u = e.handler.apply(this, arguments), n.type = t), u
        }
      }
    });
    r.submitBubbles || (i.event.special.submit = {
      setup: function() {
        if (i.nodeName(this, "form")) return !1;
        i.event.add(this, "click._submit keypress._submit", function(n) {
          var r = n.target,
            t = i.nodeName(r, "input") || i.nodeName(r, "button") ? r.form : undefined;
          t && !i._data(t, "submitBubbles") && (i.event.add(t, "submit._submit", function(n) {
            n._submit_bubble = !0
          }), i._data(t, "submitBubbles", !0))
        })
      },
      postDispatch: function(n) {
        n._submit_bubble && (delete n._submit_bubble, this.parentNode && !n.isTrigger && i.event.simulate("submit", this.parentNode, n, !0))
      },
      teardown: function() {
        if (i.nodeName(this, "form")) return !1;
        i.event.remove(this, "._submit")
      }
    });
    r.changeBubbles || (i.event.special.change = {
      setup: function() {
        if (si.test(this.nodeName)) return (this.type === "checkbox" || this.type === "radio") && (i.event.add(this, "propertychange._change", function(n) {
          n.originalEvent.propertyName === "checked" && (this._just_changed = !0)
        }), i.event.add(this, "click._change", function(n) {
          this._just_changed && !n.isTrigger && (this._just_changed = !1);
          i.event.simulate("change", this, n, !0)
        })), !1;
        i.event.add(this, "beforeactivate._change", function(n) {
          var t = n.target;
          si.test(t.nodeName) && !i._data(t, "changeBubbles") && (i.event.add(t, "change._change", function(n) {
            !this.parentNode || n.isSimulated || n.isTrigger || i.event.simulate("change", this.parentNode, n, !0)
          }), i._data(t, "changeBubbles", !0))
        })
      },
      handle: function(n) {
        var t = n.target;
        if (this !== t || n.isSimulated || n.isTrigger || t.type !== "radio" && t.type !== "checkbox") return n.handleObj.handler.apply(this, arguments)
      },
      teardown: function() {
        return i.event.remove(this, "._change"), !si.test(this.nodeName)
      }
    });
    r.focusinBubbles || i.each({
      focus: "focusin",
      blur: "focusout"
    }, function(n, t) {
      var r = function(n) {
        i.event.simulate(t, n.target, i.event.fix(n), !0)
      };
      i.event.special[t] = {
        setup: function() {
          var u = this.ownerDocument || this,
            f = i._data(u, t);
          f || u.addEventListener(n, r, !0);
          i._data(u, t, (f || 0) + 1)
        },
        teardown: function() {
          var u = this.ownerDocument || this,
            f = i._data(u, t) - 1;
          f ? i._data(u, t, f) : (u.removeEventListener(n, r, !0), i._removeData(u, t))
        }
      }
    });
    i.fn.extend({
      on: function(n, t, r, u, f) {
        var o, e;
        if (typeof n == "object") {
          typeof t != "string" && (r = r || t, t = undefined);
          for (o in n) this.on(o, t, r, n[o], f);
          return this
        }
        if (r == null && u == null ? (u = t, r = t = undefined) : u == null && (typeof t == "string" ? (u = r, r = undefined) : (u = r, r = t, t = undefined)), u === !1) u = it;
        else if (!u) return this;
        return f === 1 && (e = u, u = function(n) {
          return i().off(n), e.apply(this, arguments)
        }, u.guid = e.guid || (e.guid = i.guid++)), this.each(function() {
          i.event.add(this, n, u, r, t)
        })
      },
      one: function(n, t, i, r) {
        return this.on(n, t, i, r, 1)
      },
      off: function(n, t, r) {
        var u, f;
        if (n && n.preventDefault && n.handleObj) return u = n.handleObj, i(n.delegateTarget).off(u.namespace ? u.origType + "." + u.namespace : u.origType, u.selector, u.handler), this;
        if (typeof n == "object") {
          for (f in n) this.off(f, t, n[f]);
          return this
        }
        return (t === !1 || typeof t == "function") && (r = t, t = undefined), r === !1 && (r = it), this.each(function() {
          i.event.remove(this, n, r, t)
        })
      },
      trigger: function(n, t) {
        return this.each(function() {
          i.event.trigger(n, t, this)
        })
      },
      triggerHandler: function(n, t) {
        var r = this[0];
        if (r) return i.event.trigger(n, t, r, !0)
      }
    });
    var nu = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
      he = / jQuery\d+="(?:null|\d+)"/g,
      tu = new RegExp("<(?:" + nu + ")[\\s/>]", "i"),
      hi = /^\s+/,
      iu = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
      ru = /<([\w:]+)/,
      uu = /<tbody/i,
      ce = /<|&#?\w+;/,
      le = /<(?:script|style|link)/i,
      ae = /checked\s*(?:[^=]|=\s*.checked.)/i,
      fu = /^$|\/(?:java|ecma)script/i,
      ve = /^true\/(.*)/,
      ye = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
      s = {
        option: [1, "<select multiple='multiple'>", "<\/select>"],
        legend: [1, "<fieldset>", "<\/fieldset>"],
        area: [1, "<map>", "<\/map>"],
        param: [1, "<object>", "<\/object>"],
        thead: [1, "<table>", "<\/table>"],
        tr: [2, "<table><tbody>", "<\/tbody><\/table>"],
        col: [2, "<table><tbody><\/tbody><colgroup>", "<\/colgroup><\/table>"],
        td: [3, "<table><tbody><tr>", "<\/tr><\/tbody><\/table>"],
        _default: r.htmlSerialize ? [0, "", ""] : [1, "X<div>", "<\/div>"]
      },
      pe = gr(u),
      ci = pe.appendChild(u.createElement("div"));
    s.optgroup = s.option;
    s.tbody = s.tfoot = s.colgroup = s.caption = s.thead;
    s.th = s.td;
    i.extend({
      clone: function(n, t, u) {
        var e, c, s, o, h, l = i.contains(n.ownerDocument, n);
        if (r.html5Clone || i.isXMLDoc(n) || !tu.test("<" + n.nodeName + ">") ? s = n.cloneNode(!0) : (ci.innerHTML = n.outerHTML, ci.removeChild(s = ci.firstChild)), (!r.noCloneEvent || !r.noCloneChecked) && (n.nodeType === 1 || n.nodeType === 11) && !i.isXMLDoc(n))
          for (e = f(s), h = f(n), o = 0;
            (c = h[o]) != null; ++o) e[o] && be(c, e[o]);
        if (t)
          if (u)
            for (h = h || f(n), e = e || f(s), o = 0;
              (c = h[o]) != null; o++) hu(c, e[o]);
          else hu(n, s);
        return e = f(s, "script"), e.length > 0 && li(e, !l && f(n, "script")), e = h = c = null, s
      },
      buildFragment: function(n, t, u, e) {
        for (var c, o, b, h, p, w, a, k = n.length, v = gr(t), l = [], y = 0; y < k; y++)
          if (o = n[y], o || o === 0)
            if (i.type(o) === "object") i.merge(l, o.nodeType ? [o] : o);
            else if (ce.test(o)) {
          for (h = h || v.appendChild(t.createElement("div")), p = (ru.exec(o) || ["", ""])[1].toLowerCase(), a = s[p] || s._default, h.innerHTML = a[1] + o.replace(iu, "<$1><\/$2>") + a[2], c = a[0]; c--;) h = h.lastChild;
          if (!r.leadingWhitespace && hi.test(o) && l.push(t.createTextNode(hi.exec(o)[0])), !r.tbody)
            for (o = p === "table" && !uu.test(o) ? h.firstChild : a[1] === "<table>" && !uu.test(o) ? h : 0, c = o && o.childNodes.length; c--;) i.nodeName(w = o.childNodes[c], "tbody") && !w.childNodes.length && o.removeChild(w);
          for (i.merge(l, h.childNodes), h.textContent = ""; h.firstChild;) h.removeChild(h.firstChild);
          h = v.lastChild
        } else l.push(t.createTextNode(o));
        for (h && v.removeChild(h), r.appendChecked || i.grep(f(l, "input"), we), y = 0; o = l[y++];)
          if ((!e || i.inArray(o, e) === -1) && (b = i.contains(o.ownerDocument, o), h = f(v.appendChild(o), "script"), b && li(h), u))
            for (c = 0; o = h[c++];) fu.test(o.type || "") && u.push(o);
        return h = null, v
      },
      cleanData: function(n, t) {
        for (var u, s, f, e, a = 0, h = i.expando, l = i.cache, v = r.deleteExpando, y = i.event.special;
          (u = n[a]) != null; a++)
          if ((t || i.acceptData(u)) && (f = u[h], e = f && l[f], e)) {
            if (e.events)
              for (s in e.events) y[s] ? i.event.remove(u, s) : i.removeEvent(u, s, e.handle);
            l[f] && (delete l[f], v ? delete u[h] : typeof u.removeAttribute !== o ? u.removeAttribute(h) : u[h] = null, c.push(f))
          }
      }
    });
    i.fn.extend({
      text: function(n) {
        return b(this, function(n) {
          return n === undefined ? i.text(this) : this.empty().append((this[0] && this[0].ownerDocument || u).createTextNode(n))
        }, null, n, arguments.length)
      },
      append: function() {
        return this.domManip(arguments, function(n) {
          if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
            var t = eu(this, n);
            t.appendChild(n)
          }
        })
      },
      prepend: function() {
        return this.domManip(arguments, function(n) {
          if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
            var t = eu(this, n);
            t.insertBefore(n, t.firstChild)
          }
        })
      },
      before: function() {
        return this.domManip(arguments, function(n) {
          this.parentNode && this.parentNode.insertBefore(n, this)
        })
      },
      after: function() {
        return this.domManip(arguments, function(n) {
          this.parentNode && this.parentNode.insertBefore(n, this.nextSibling)
        })
      },
      remove: function(n, t) {
        for (var r, e = n ? i.filter(n, this) : this, u = 0;
          (r = e[u]) != null; u++) t || r.nodeType !== 1 || i.cleanData(f(r)), r.parentNode && (t && i.contains(r.ownerDocument, r) && li(f(r, "script")), r.parentNode.removeChild(r));
        return this
      },
      empty: function() {
        for (var n, t = 0;
          (n = this[t]) != null; t++) {
          for (n.nodeType === 1 && i.cleanData(f(n, !1)); n.firstChild;) n.removeChild(n.firstChild);
          n.options && i.nodeName(n, "select") && (n.options.length = 0)
        }
        return this
      },
      clone: function(n, t) {
        return n = n == null ? !1 : n, t = t == null ? n : t, this.map(function() {
          return i.clone(this, n, t)
        })
      },
      html: function(n) {
        return b(this, function(n) {
          var t = this[0] || {},
            u = 0,
            e = this.length;
          if (n === undefined) return t.nodeType === 1 ? t.innerHTML.replace(he, "") : undefined;
          if (typeof n == "string" && !le.test(n) && (r.htmlSerialize || !tu.test(n)) && (r.leadingWhitespace || !hi.test(n)) && !s[(ru.exec(n) || ["", ""])[1].toLowerCase()]) {
            n = n.replace(iu, "<$1><\/$2>");
            try {
              for (; u < e; u++) t = this[u] || {}, t.nodeType === 1 && (i.cleanData(f(t, !1)), t.innerHTML = n);
              t = 0
            } catch (o) {}
          }
          t && this.empty().append(n)
        }, null, n, arguments.length)
      },
      replaceWith: function() {
        var n = arguments[0];
        return this.domManip(arguments, function(t) {
          n = this.parentNode;
          i.cleanData(f(this));
          n && n.replaceChild(t, this)
        }), n && (n.length || n.nodeType) ? this : this.remove()
      },
      detach: function(n) {
        return this.remove(n, !0)
      },
      domManip: function(n, t) {
        n = ir.apply([], n);
        var h, u, c, o, v, s, e = 0,
          l = this.length,
          p = this,
          w = l - 1,
          a = n[0],
          y = i.isFunction(a);
        if (y || l > 1 && typeof a == "string" && !r.checkClone && ae.test(a)) return this.each(function(i) {
          var r = p.eq(i);
          y && (n[0] = a.call(this, i, r.html()));
          r.domManip(n, t)
        });
        if (l && (s = i.buildFragment(n, this[0].ownerDocument, !1, this), h = s.firstChild, s.childNodes.length === 1 && (s = h), h)) {
          for (o = i.map(f(s, "script"), ou), c = o.length; e < l; e++) u = s, e !== w && (u = i.clone(u, !0, !0), c && i.merge(o, f(u, "script"))), t.call(this[e], u, e);
          if (c)
            for (v = o[o.length - 1].ownerDocument, i.map(o, su), e = 0; e < c; e++) u = o[e], fu.test(u.type || "") && !i._data(u, "globalEval") && i.contains(v, u) && (u.src ? i._evalUrl && i._evalUrl(u.src) : i.globalEval((u.text || u.textContent || u.innerHTML || "").replace(ye, "")));
          s = h = null
        }
        return this
      }
    });
    i.each({
      appendTo: "append",
      prependTo: "prepend",
      insertBefore: "before",
      insertAfter: "after",
      replaceAll: "replaceWith"
    }, function(n, t) {
      i.fn[n] = function(n) {
        for (var u, r = 0, f = [], e = i(n), o = e.length - 1; r <= o; r++) u = r === o ? this : this.clone(!0), i(e[r])[t](u), ii.apply(f, u.get());
        return this.pushStack(f)
      }
    });
    ai = {},
      function() {
        var n;
        r.shrinkWrapBlocks = function() {
          if (n != null) return n;
          n = !1;
          var t, i, r;
          if (i = u.getElementsByTagName("body")[0], i && i.style) return t = u.createElement("div"), r = u.createElement("div"), r.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", i.appendChild(r).appendChild(t), typeof t.style.zoom !== o && (t.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", t.appendChild(u.createElement("div")).style.width = "5px", n = t.offsetWidth !== 3), i.removeChild(r), n
        }
      }();
    var lu = /^margin/,
      pt = new RegExp("^(" + at + ")(?!px)[a-z%]+$", "i"),
      k, d, ke = /^(top|right|bottom|left)$/;
    n.getComputedStyle ? (k = function(t) {
        return t.ownerDocument.defaultView.opener ? t.ownerDocument.defaultView.getComputedStyle(t, null) : n.getComputedStyle(t, null)
      }, d = function(n, t, r) {
        var e, o, s, u, f = n.style;
        return r = r || k(n), u = r ? r.getPropertyValue(t) || r[t] : undefined, r && (u !== "" || i.contains(n.ownerDocument, n) || (u = i.style(n, t)), pt.test(u) && lu.test(t) && (e = f.width, o = f.minWidth, s = f.maxWidth, f.minWidth = f.maxWidth = f.width = u, u = r.width, f.width = e, f.minWidth = o, f.maxWidth = s)), u === undefined ? u : u + ""
      }) : u.documentElement.currentStyle && (k = function(n) {
        return n.currentStyle
      }, d = function(n, t, i) {
        var o, f, e, r, u = n.style;
        return i = i || k(n), r = i ? i[t] : undefined, r == null && u && u[t] && (r = u[t]), pt.test(r) && !ke.test(t) && (o = u.left, f = n.runtimeStyle, e = f && f.left, e && (f.left = n.currentStyle.left), u.left = t === "fontSize" ? "1em" : r, r = u.pixelLeft + "px", u.left = o, e && (f.left = e)), r === undefined ? r : r + "" || "auto"
      }),
      function() {
        function c() {
          var i, r, f, t;
          (r = u.getElementsByTagName("body")[0], r && r.style) && (i = u.createElement("div"), f = u.createElement("div"), f.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", r.appendChild(f).appendChild(i), i.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", o = s = !1, h = !0, n.getComputedStyle && (o = (n.getComputedStyle(i, null) || {}).top !== "1%", s = (n.getComputedStyle(i, null) || {
            width: "4px"
          }).width === "4px", t = i.appendChild(u.createElement("div")), t.style.cssText = i.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", t.style.marginRight = t.style.width = "0", i.style.width = "1px", h = !parseFloat((n.getComputedStyle(t, null) || {}).marginRight), i.removeChild(t)), i.innerHTML = "<table><tr><td><\/td><td>t<\/td><\/tr><\/table>", t = i.getElementsByTagName("td"), t[0].style.cssText = "margin:0;border:0;padding:0;display:none", e = t[0].offsetHeight === 0, e && (t[0].style.display = "", t[1].style.display = "none", e = t[0].offsetHeight === 0), r.removeChild(f))
        }
        var f, t, l, o, s, e, h;
        (f = u.createElement("div"), f.innerHTML = "  <link/><table><\/table><a href='/a'>a<\/a><input type='checkbox'/>", l = f.getElementsByTagName("a")[0], t = l && l.style, t) && (t.cssText = "float:left;opacity:.5", r.opacity = t.opacity === "0.5", r.cssFloat = !!t.cssFloat, f.style.backgroundClip = "content-box", f.cloneNode(!0).style.backgroundClip = "", r.clearCloneStyle = f.style.backgroundClip === "content-box", r.boxSizing = t.boxSizing === "" || t.MozBoxSizing === "" || t.WebkitBoxSizing === "", i.extend(r, {
          reliableHiddenOffsets: function() {
            return e == null && c(), e
          },
          boxSizingReliable: function() {
            return s == null && c(), s
          },
          pixelPosition: function() {
            return o == null && c(), o
          },
          reliableMarginRight: function() {
            return h == null && c(), h
          }
        }))
      }();
    i.swap = function(n, t, i, r) {
      var f, u, e = {};
      for (u in t) e[u] = n.style[u], n.style[u] = t[u];
      f = i.apply(n, r || []);
      for (u in t) n.style[u] = e[u];
      return f
    };
    var vi = /alpha\([^)]*\)/i,
      de = /opacity\s*=\s*([^)]*)/,
      ge = /^(none|table(?!-c[ea]).+)/,
      no = new RegExp("^(" + at + ")(.*)$", "i"),
      to = new RegExp("^([+-])=(" + at + ")", "i"),
      io = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
      },
      vu = {
        letterSpacing: "0",
        fontWeight: "400"
      },
      yu = ["Webkit", "O", "Moz", "ms"];
    i.extend({
      cssHooks: {
        opacity: {
          get: function(n, t) {
            if (t) {
              var i = d(n, "opacity");
              return i === "" ? "1" : i
            }
          }
        }
      },
      cssNumber: {
        columnCount: !0,
        fillOpacity: !0,
        flexGrow: !0,
        flexShrink: !0,
        fontWeight: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0
      },
      cssProps: {
        float: r.cssFloat ? "cssFloat" : "styleFloat"
      },
      style: function(n, t, u, f) {
        if (n && n.nodeType !== 3 && n.nodeType !== 8 && n.style) {
          var o, h, e, s = i.camelCase(t),
            c = n.style;
          if (t = i.cssProps[s] || (i.cssProps[s] = pu(c, s)), e = i.cssHooks[t] || i.cssHooks[s], u !== undefined) {
            if (h = typeof u, h === "string" && (o = to.exec(u)) && (u = (o[1] + 1) * o[2] + parseFloat(i.css(n, t)), h = "number"), u == null || u !== u) return;
            if (h !== "number" || i.cssNumber[s] || (u += "px"), r.clearCloneStyle || u !== "" || t.indexOf("background") !== 0 || (c[t] = "inherit"), !e || !("set" in e) || (u = e.set(n, u, f)) !== undefined) try {
              c[t] = u
            } catch (l) {}
          } else return e && "get" in e && (o = e.get(n, !1, f)) !== undefined ? o : c[t]
        }
      },
      css: function(n, t, r, u) {
        var s, f, e, o = i.camelCase(t);
        return (t = i.cssProps[o] || (i.cssProps[o] = pu(n.style, o)), e = i.cssHooks[t] || i.cssHooks[o], e && "get" in e && (f = e.get(n, !0, r)), f === undefined && (f = d(n, t, u)), f === "normal" && t in vu && (f = vu[t]), r === "" || r) ? (s = parseFloat(f), r === !0 || i.isNumeric(s) ? s || 0 : f) : f
      }
    });
    i.each(["height", "width"], function(n, t) {
      i.cssHooks[t] = {
        get: function(n, r, u) {
          if (r) return ge.test(i.css(n, "display")) && n.offsetWidth === 0 ? i.swap(n, io, function() {
            return du(n, t, u)
          }) : du(n, t, u)
        },
        set: function(n, u, f) {
          var e = f && k(n);
          return bu(n, u, f ? ku(n, t, f, r.boxSizing && i.css(n, "boxSizing", !1, e) === "border-box", e) : 0)
        }
      }
    });
    r.opacity || (i.cssHooks.opacity = {
      get: function(n, t) {
        return de.test((t && n.currentStyle ? n.currentStyle.filter : n.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
      },
      set: function(n, t) {
        var r = n.style,
          u = n.currentStyle,
          e = i.isNumeric(t) ? "alpha(opacity=" + t * 100 + ")" : "",
          f = u && u.filter || r.filter || "";
        (r.zoom = 1, (t >= 1 || t === "") && i.trim(f.replace(vi, "")) === "" && r.removeAttribute && (r.removeAttribute("filter"), t === "" || u && !u.filter)) || (r.filter = vi.test(f) ? f.replace(vi, e) : f + " " + e)
      }
    });
    i.cssHooks.marginRight = au(r.reliableMarginRight, function(n, t) {
      if (t) return i.swap(n, {
        display: "inline-block"
      }, d, [n, "marginRight"])
    });
    i.each({
      margin: "",
      padding: "",
      border: "Width"
    }, function(n, t) {
      i.cssHooks[n + t] = {
        expand: function(i) {
          for (var r = 0, f = {}, u = typeof i == "string" ? i.split(" ") : [i]; r < 4; r++) f[n + w[r] + t] = u[r] || u[r - 2] || u[0];
          return f
        }
      };
      lu.test(n) || (i.cssHooks[n + t].set = bu)
    });
    i.fn.extend({
      css: function(n, t) {
        return b(this, function(n, t, r) {
          var f, e, o = {},
            u = 0;
          if (i.isArray(t)) {
            for (f = k(n), e = t.length; u < e; u++) o[t[u]] = i.css(n, t[u], !1, f);
            return o
          }
          return r !== undefined ? i.style(n, t, r) : i.css(n, t)
        }, n, t, arguments.length > 1)
      },
      show: function() {
        return wu(this, !0)
      },
      hide: function() {
        return wu(this)
      },
      toggle: function(n) {
        return typeof n == "boolean" ? n ? this.show() : this.hide() : this.each(function() {
          et(this) ? i(this).show() : i(this).hide()
        })
      }
    });
    i.Tween = e;
    e.prototype = {
      constructor: e,
      init: function(n, t, r, u, f, e) {
        this.elem = n;
        this.prop = r;
        this.easing = f || "swing";
        this.options = t;
        this.start = this.now = this.cur();
        this.end = u;
        this.unit = e || (i.cssNumber[r] ? "" : "px")
      },
      cur: function() {
        var n = e.propHooks[this.prop];
        return n && n.get ? n.get(this) : e.propHooks._default.get(this)
      },
      run: function(n) {
        var t, r = e.propHooks[this.prop];
        return this.pos = this.options.duration ? t = i.easing[this.easing](n, this.options.duration * n, 0, 1, this.options.duration) : t = n, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), r && r.set ? r.set(this) : e.propHooks._default.set(this), this
      }
    };
    e.prototype.init.prototype = e.prototype;
    e.propHooks = {
      _default: {
        get: function(n) {
          var t;
          return n.elem[n.prop] != null && (!n.elem.style || n.elem.style[n.prop] == null) ? n.elem[n.prop] : (t = i.css(n.elem, n.prop, ""), !t || t === "auto" ? 0 : t)
        },
        set: function(n) {
          i.fx.step[n.prop] ? i.fx.step[n.prop](n) : n.elem.style && (n.elem.style[i.cssProps[n.prop]] != null || i.cssHooks[n.prop]) ? i.style(n.elem, n.prop, n.now + n.unit) : n.elem[n.prop] = n.now
        }
      }
    };
    e.propHooks.scrollTop = e.propHooks.scrollLeft = {
      set: function(n) {
        n.elem.nodeType && n.elem.parentNode && (n.elem[n.prop] = n.now)
      }
    };
    i.easing = {
      linear: function(n) {
        return n
      },
      swing: function(n) {
        return .5 - Math.cos(n * Math.PI) / 2
      }
    };
    i.fx = e.prototype.init;
    i.fx.step = {};
    var rt, wt, ro = /^(?:toggle|show|hide)$/,
      gu = new RegExp("^(?:([+-])=|)(" + at + ")([a-z%]*)$", "i"),
      uo = /queueHooks$/,
      bt = [fo],
      st = {
        "*": [function(n, t) {
          var f = this.createTween(n, t),
            s = f.cur(),
            u = gu.exec(t),
            e = u && u[3] || (i.cssNumber[n] ? "" : "px"),
            r = (i.cssNumber[n] || e !== "px" && +s) && gu.exec(i.css(f.elem, n)),
            o = 1,
            h = 20;
          if (r && r[3] !== e) {
            e = e || r[3];
            u = u || [];
            r = +s || 1;
            do o = o || ".5", r = r / o, i.style(f.elem, n, r + e); while (o !== (o = f.cur() / s) && o !== 1 && --h)
          }
          return u && (r = f.start = +r || +s || 0, f.unit = e, f.end = u[1] ? r + (u[1] + 1) * u[2] : +u[2]), f
        }]
      };
    i.Animation = i.extend(rf, {
      tweener: function(n, t) {
        i.isFunction(n) ? (t = n, n = ["*"]) : n = n.split(" ");
        for (var r, u = 0, f = n.length; u < f; u++) r = n[u], st[r] = st[r] || [], st[r].unshift(t)
      },
      prefilter: function(n, t) {
        t ? bt.unshift(n) : bt.push(n)
      }
    });
    i.speed = function(n, t, r) {
      var u = n && typeof n == "object" ? i.extend({}, n) : {
        complete: r || !r && t || i.isFunction(n) && n,
        duration: n,
        easing: r && t || t && !i.isFunction(t) && t
      };
      return u.duration = i.fx.off ? 0 : typeof u.duration == "number" ? u.duration : u.duration in i.fx.speeds ? i.fx.speeds[u.duration] : i.fx.speeds._default, (u.queue == null || u.queue === !0) && (u.queue = "fx"), u.old = u.complete, u.complete = function() {
        i.isFunction(u.old) && u.old.call(this);
        u.queue && i.dequeue(this, u.queue)
      }, u
    };
    i.fn.extend({
      fadeTo: function(n, t, i, r) {
        return this.filter(et).css("opacity", 0).show().end().animate({
          opacity: t
        }, n, i, r)
      },
      animate: function(n, t, r, u) {
        var o = i.isEmptyObject(n),
          e = i.speed(t, r, u),
          f = function() {
            var t = rf(this, i.extend({}, n), e);
            (o || i._data(this, "finish")) && t.stop(!0)
          };
        return f.finish = f, o || e.queue === !1 ? this.each(f) : this.queue(e.queue, f)
      },
      stop: function(n, t, r) {
        var u = function(n) {
          var t = n.stop;
          delete n.stop;
          t(r)
        };
        return typeof n != "string" && (r = t, t = n, n = undefined), t && n !== !1 && this.queue(n || "fx", []), this.each(function() {
          var o = !0,
            t = n != null && n + "queueHooks",
            e = i.timers,
            f = i._data(this);
          if (t) f[t] && f[t].stop && u(f[t]);
          else
            for (t in f) f[t] && f[t].stop && uo.test(t) && u(f[t]);
          for (t = e.length; t--;) e[t].elem === this && (n == null || e[t].queue === n) && (e[t].anim.stop(r), o = !1, e.splice(t, 1));
          (o || !r) && i.dequeue(this, n)
        })
      },
      finish: function(n) {
        return n !== !1 && (n = n || "fx"), this.each(function() {
          var t, f = i._data(this),
            r = f[n + "queue"],
            e = f[n + "queueHooks"],
            u = i.timers,
            o = r ? r.length : 0;
          for (f.finish = !0, i.queue(this, n, []), e && e.stop && e.stop.call(this, !0), t = u.length; t--;) u[t].elem === this && u[t].queue === n && (u[t].anim.stop(!0), u.splice(t, 1));
          for (t = 0; t < o; t++) r[t] && r[t].finish && r[t].finish.call(this);
          delete f.finish
        })
      }
    });
    i.each(["toggle", "show", "hide"], function(n, t) {
      var r = i.fn[t];
      i.fn[t] = function(n, i, u) {
        return n == null || typeof n == "boolean" ? r.apply(this, arguments) : this.animate(kt(t, !0), n, i, u)
      }
    });
    i.each({
      slideDown: kt("show"),
      slideUp: kt("hide"),
      slideToggle: kt("toggle"),
      fadeIn: {
        opacity: "show"
      },
      fadeOut: {
        opacity: "hide"
      },
      fadeToggle: {
        opacity: "toggle"
      }
    }, function(n, t) {
      i.fn[n] = function(n, i, r) {
        return this.animate(t, n, i, r)
      }
    });
    i.timers = [];
    i.fx.tick = function() {
      var r, n = i.timers,
        t = 0;
      for (rt = i.now(); t < n.length; t++) r = n[t], r() || n[t] !== r || n.splice(t--, 1);
      n.length || i.fx.stop();
      rt = undefined
    };
    i.fx.timer = function(n) {
      i.timers.push(n);
      n() ? i.fx.start() : i.timers.pop()
    };
    i.fx.interval = 13;
    i.fx.start = function() {
      wt || (wt = setInterval(i.fx.tick, i.fx.interval))
    };
    i.fx.stop = function() {
      clearInterval(wt);
      wt = null
    };
    i.fx.speeds = {
      slow: 600,
      fast: 200,
      _default: 400
    };
    i.fn.delay = function(n, t) {
        return n = i.fx ? i.fx.speeds[n] || n : n, t = t || "fx", this.queue(t, function(t, i) {
          var r = setTimeout(t, n);
          i.stop = function() {
            clearTimeout(r)
          }
        })
      },
      function() {
        var n, t, f, i, e;
        t = u.createElement("div");
        t.setAttribute("className", "t");
        t.innerHTML = "  <link/><table><\/table><a href='/a'>a<\/a><input type='checkbox'/>";
        i = t.getElementsByTagName("a")[0];
        f = u.createElement("select");
        e = f.appendChild(u.createElement("option"));
        n = t.getElementsByTagName("input")[0];
        i.style.cssText = "top:1px";
        r.getSetAttribute = t.className !== "t";
        r.style = /top/.test(i.getAttribute("style"));
        r.hrefNormalized = i.getAttribute("href") === "/a";
        r.checkOn = !!n.value;
        r.optSelected = e.selected;
        r.enctype = !!u.createElement("form").enctype;
        f.disabled = !0;
        r.optDisabled = !e.disabled;
        n = u.createElement("input");
        n.setAttribute("value", "");
        r.input = n.getAttribute("value") === "";
        n.value = "t";
        n.setAttribute("type", "radio");
        r.radioValue = n.value === "t"
      }();
    uf = /\r/g;
    i.fn.extend({
      val: function(n) {
        var t, r, f, u = this[0];
        return arguments.length ? (f = i.isFunction(n), this.each(function(r) {
          var u;
          this.nodeType === 1 && (u = f ? n.call(this, r, i(this).val()) : n, u == null ? u = "" : typeof u == "number" ? u += "" : i.isArray(u) && (u = i.map(u, function(n) {
            return n == null ? "" : n + ""
          })), t = i.valHooks[this.type] || i.valHooks[this.nodeName.toLowerCase()], t && "set" in t && t.set(this, u, "value") !== undefined || (this.value = u))
        })) : u ? (t = i.valHooks[u.type] || i.valHooks[u.nodeName.toLowerCase()], t && "get" in t && (r = t.get(u, "value")) !== undefined) ? r : (r = u.value, typeof r == "string" ? r.replace(uf, "") : r == null ? "" : r) : void 0
      }
    });
    i.extend({
      valHooks: {
        option: {
          get: function(n) {
            var t = i.find.attr(n, "value");
            return t != null ? t : i.trim(i.text(n))
          }
        },
        select: {
          get: function(n) {
            for (var o, t, s = n.options, u = n.selectedIndex, f = n.type === "select-one" || u < 0, h = f ? null : [], c = f ? u + 1 : s.length, e = u < 0 ? c : f ? u : 0; e < c; e++)
              if (t = s[e], (t.selected || e === u) && (r.optDisabled ? !t.disabled : t.getAttribute("disabled") === null) && (!t.parentNode.disabled || !i.nodeName(t.parentNode, "optgroup"))) {
                if (o = i(t).val(), f) return o;
                h.push(o)
              } return h
          },
          set: function(n, t) {
            for (var f, r, u = n.options, o = i.makeArray(t), e = u.length; e--;)
              if (r = u[e], i.inArray(i.valHooks.option.get(r), o) >= 0) try {
                r.selected = f = !0
              } catch (s) {
                r.scrollHeight
              } else r.selected = !1;
            return f || (n.selectedIndex = -1), u
          }
        }
      }
    });
    i.each(["radio", "checkbox"], function() {
      i.valHooks[this] = {
        set: function(n, t) {
          if (i.isArray(t)) return n.checked = i.inArray(i(n).val(), t) >= 0
        }
      };
      r.checkOn || (i.valHooks[this].get = function(n) {
        return n.getAttribute("value") === null ? "on" : n.value
      })
    });
    var ut, ff, v = i.expr.attrHandle,
      yi = /^(?:checked|selected)$/i,
      g = r.getSetAttribute,
      dt = r.input;
    i.fn.extend({
      attr: function(n, t) {
        return b(this, i.attr, n, t, arguments.length > 1)
      },
      removeAttr: function(n) {
        return this.each(function() {
          i.removeAttr(this, n)
        })
      }
    });
    i.extend({
      attr: function(n, t, r) {
        var u, f, e = n.nodeType;
        if (n && e !== 3 && e !== 8 && e !== 2) {
          if (typeof n.getAttribute === o) return i.prop(n, t, r);
          if (e === 1 && i.isXMLDoc(n) || (t = t.toLowerCase(), u = i.attrHooks[t] || (i.expr.match.bool.test(t) ? ff : ut)), r !== undefined)
            if (r === null) i.removeAttr(n, t);
            else return u && "set" in u && (f = u.set(n, r, t)) !== undefined ? f : (n.setAttribute(t, r + ""), r);
          else return u && "get" in u && (f = u.get(n, t)) !== null ? f : (f = i.find.attr(n, t), f == null ? undefined : f)
        }
      },
      removeAttr: function(n, t) {
        var r, u, e = 0,
          f = t && t.match(h);
        if (f && n.nodeType === 1)
          while (r = f[e++]) u = i.propFix[r] || r, i.expr.match.bool.test(r) ? dt && g || !yi.test(r) ? n[u] = !1 : n[i.camelCase("default-" + r)] = n[u] = !1 : i.attr(n, r, ""), n.removeAttribute(g ? r : u)
      },
      attrHooks: {
        type: {
          set: function(n, t) {
            if (!r.radioValue && t === "radio" && i.nodeName(n, "input")) {
              var u = n.value;
              return n.setAttribute("type", t), u && (n.value = u), t
            }
          }
        }
      }
    });
    ff = {
      set: function(n, t, r) {
        return t === !1 ? i.removeAttr(n, r) : dt && g || !yi.test(r) ? n.setAttribute(!g && i.propFix[r] || r, r) : n[i.camelCase("default-" + r)] = n[r] = !0, r
      }
    };
    i.each(i.expr.match.bool.source.match(/\w+/g), function(n, t) {
      var r = v[t] || i.find.attr;
      v[t] = dt && g || !yi.test(t) ? function(n, t, i) {
        var u, f;
        return i || (f = v[t], v[t] = u, u = r(n, t, i) != null ? t.toLowerCase() : null, v[t] = f), u
      } : function(n, t, r) {
        if (!r) return n[i.camelCase("default-" + t)] ? t.toLowerCase() : null
      }
    });
    dt && g || (i.attrHooks.value = {
      set: function(n, t, r) {
        if (i.nodeName(n, "input")) n.defaultValue = t;
        else return ut && ut.set(n, t, r)
      }
    });
    g || (ut = {
      set: function(n, t, i) {
        var r = n.getAttributeNode(i);
        return r || n.setAttributeNode(r = n.ownerDocument.createAttribute(i)), r.value = t += "", i === "value" || t === n.getAttribute(i) ? t : void 0
      }
    }, v.id = v.name = v.coords = function(n, t, i) {
      var r;
      if (!i) return (r = n.getAttributeNode(t)) && r.value !== "" ? r.value : null
    }, i.valHooks.button = {
      get: function(n, t) {
        var i = n.getAttributeNode(t);
        if (i && i.specified) return i.value
      },
      set: ut.set
    }, i.attrHooks.contenteditable = {
      set: function(n, t, i) {
        ut.set(n, t === "" ? !1 : t, i)
      }
    }, i.each(["width", "height"], function(n, t) {
      i.attrHooks[t] = {
        set: function(n, i) {
          if (i === "") return n.setAttribute(t, "auto"), i
        }
      }
    }));
    r.style || (i.attrHooks.style = {
      get: function(n) {
        return n.style.cssText || undefined
      },
      set: function(n, t) {
        return n.style.cssText = t + ""
      }
    });
    ef = /^(?:input|select|textarea|button|object)$/i; of = /^(?:a|area)$/i;
    i.fn.extend({
      prop: function(n, t) {
        return b(this, i.prop, n, t, arguments.length > 1)
      },
      removeProp: function(n) {
        return n = i.propFix[n] || n, this.each(function() {
          try {
            this[n] = undefined;
            delete this[n]
          } catch (t) {}
        })
      }
    });
    i.extend({
      propFix: {
        "for": "htmlFor",
        "class": "className"
      },
      prop: function(n, t, r) {
        var f, u, o, e = n.nodeType;
        if (n && e !== 3 && e !== 8 && e !== 2) return o = e !== 1 || !i.isXMLDoc(n), o && (t = i.propFix[t] || t, u = i.propHooks[t]), r !== undefined ? u && "set" in u && (f = u.set(n, r, t)) !== undefined ? f : n[t] = r : u && "get" in u && (f = u.get(n, t)) !== null ? f : n[t]
      },
      propHooks: {
        tabIndex: {
          get: function(n) {
            var t = i.find.attr(n, "tabindex");
            return t ? parseInt(t, 10) : ef.test(n.nodeName) || of .test(n.nodeName) && n.href ? 0 : -1
          }
        }
      }
    });
    r.hrefNormalized || i.each(["href", "src"], function(n, t) {
      i.propHooks[t] = {
        get: function(n) {
          return n.getAttribute(t, 4)
        }
      }
    });
    r.optSelected || (i.propHooks.selected = {
      get: function(n) {
        var t = n.parentNode;
        return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
      }
    });
    i.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
      i.propFix[this.toLowerCase()] = this
    });
    r.enctype || (i.propFix.enctype = "encoding");
    gt = /[\t\r\n\f]/g;
    i.fn.extend({
      addClass: function(n) {
        var o, t, r, u, s, f, e = 0,
          c = this.length,
          l = typeof n == "string" && n;
        if (i.isFunction(n)) return this.each(function(t) {
          i(this).addClass(n.call(this, t, this.className))
        });
        if (l)
          for (o = (n || "").match(h) || []; e < c; e++)
            if (t = this[e], r = t.nodeType === 1 && (t.className ? (" " + t.className + " ").replace(gt, " ") : " "), r) {
              for (s = 0; u = o[s++];) r.indexOf(" " + u + " ") < 0 && (r += u + " ");
              f = i.trim(r);
              t.className !== f && (t.className = f)
            } return this
      },
      removeClass: function(n) {
        var o, t, r, u, s, f, e = 0,
          c = this.length,
          l = arguments.length === 0 || typeof n == "string" && n;
        if (i.isFunction(n)) return this.each(function(t) {
          i(this).removeClass(n.call(this, t, this.className))
        });
        if (l)
          for (o = (n || "").match(h) || []; e < c; e++)
            if (t = this[e], r = t.nodeType === 1 && (t.className ? (" " + t.className + " ").replace(gt, " ") : ""), r) {
              for (s = 0; u = o[s++];)
                while (r.indexOf(" " + u + " ") >= 0) r = r.replace(" " + u + " ", " ");
              f = n ? i.trim(r) : "";
              t.className !== f && (t.className = f)
            } return this
      },
      toggleClass: function(n, t) {
        var r = typeof n;
        return typeof t == "boolean" && r === "string" ? t ? this.addClass(n) : this.removeClass(n) : i.isFunction(n) ? this.each(function(r) {
          i(this).toggleClass(n.call(this, r, this.className, t), t)
        }) : this.each(function() {
          if (r === "string")
            for (var t, f = 0, u = i(this), e = n.match(h) || []; t = e[f++];) u.hasClass(t) ? u.removeClass(t) : u.addClass(t);
          else(r === o || r === "boolean") && (this.className && i._data(this, "__className__", this.className), this.className = this.className || n === !1 ? "" : i._data(this, "__className__") || "")
        })
      },
      hasClass: function(n) {
        for (var i = " " + n + " ", t = 0, r = this.length; t < r; t++)
          if (this[t].nodeType === 1 && (" " + this[t].className + " ").replace(gt, " ").indexOf(i) >= 0) return !0;
        return !1
      }
    });
    i.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(n, t) {
      i.fn[t] = function(n, i) {
        return arguments.length > 0 ? this.on(t, null, n, i) : this.trigger(t)
      }
    });
    i.fn.extend({
      hover: function(n, t) {
        return this.mouseenter(n).mouseleave(t || n)
      },
      bind: function(n, t, i) {
        return this.on(n, null, t, i)
      },
      unbind: function(n, t) {
        return this.off(n, null, t)
      },
      delegate: function(n, t, i, r) {
        return this.on(t, n, i, r)
      },
      undelegate: function(n, t, i) {
        return arguments.length === 1 ? this.off(n, "**") : this.off(t, n || "**", i)
      }
    });
    var pi = i.now(),
      wi = /\?/,
      oo = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    i.parseJSON = function(t) {
      if (n.JSON && n.JSON.parse) return n.JSON.parse(t + "");
      var f, r = null,
        u = i.trim(t + "");
      return u && !i.trim(u.replace(oo, function(n, t, i, u) {
        return (f && t && (r = 0), r === 0) ? n : (f = i || t, r += !u - !i, "")
      })) ? Function("return " + u)() : i.error("Invalid JSON: " + t)
    };
    i.parseXML = function(t) {
      var r, u;
      if (!t || typeof t != "string") return null;
      try {
        n.DOMParser ? (u = new DOMParser, r = u.parseFromString(t, "text/xml")) : (r = new ActiveXObject("Microsoft.XMLDOM"), r.async = "false", r.loadXML(t))
      } catch (f) {
        r = undefined
      }
      return r && r.documentElement && !r.getElementsByTagName("parsererror").length || i.error("Invalid XML: " + t), r
    };
    var nt, y, so = /#.*$/,
      sf = /([?&])_=[^&]*/,
      ho = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg,
      co = /^(?:GET|HEAD)$/,
      lo = /^\/\//,
      hf = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
      cf = {},
      bi = {},
      lf = "*/".concat("*");
    try {
      y = location.href
    } catch (ns) {
      y = u.createElement("a");
      y.href = "";
      y = y.href
    }
    nt = hf.exec(y.toLowerCase()) || [];
    i.extend({
      active: 0,
      lastModified: {},
      etag: {},
      ajaxSettings: {
        url: y,
        type: "GET",
        isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(nt[1]),
        global: !0,
        processData: !0,
        async: !0,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        accepts: {
          "*": lf,
          text: "text/plain",
          html: "text/html",
          xml: "application/xml, text/xml",
          json: "application/json, text/javascript"
        },
        contents: {
          xml: /xml/,
          html: /html/,
          json: /json/
        },
        responseFields: {
          xml: "responseXML",
          text: "responseText",
          json: "responseJSON"
        },
        converters: {
          "* text": String,
          "text html": !0,
          "text json": i.parseJSON,
          "text xml": i.parseXML
        },
        flatOptions: {
          url: !0,
          context: !0
        }
      },
      ajaxSetup: function(n, t) {
        return t ? ki(ki(n, i.ajaxSettings), t) : ki(i.ajaxSettings, n)
      },
      ajaxPrefilter: af(cf),
      ajaxTransport: af(bi),
      ajax: function(n, t) {
        function w(n, t, s, h) {
          var v, it, nt, y, w, c = t;
          e !== 2 && (e = 2, k && clearTimeout(k), l = undefined, b = h || "", u.readyState = n > 0 ? 4 : 0, v = n >= 200 && n < 300 || n === 304, s && (y = ao(r, u, s)), y = vo(r, y, u, v), v ? (r.ifModified && (w = u.getResponseHeader("Last-Modified"), w && (i.lastModified[f] = w), w = u.getResponseHeader("etag"), w && (i.etag[f] = w)), n === 204 || r.type === "HEAD" ? c = "nocontent" : n === 304 ? c = "notmodified" : (c = y.state, it = y.data, nt = y.error, v = !nt)) : (nt = c, (n || !c) && (c = "error", n < 0 && (n = 0))), u.status = n, u.statusText = (t || c) + "", v ? g.resolveWith(o, [it, c, u]) : g.rejectWith(o, [u, c, nt]), u.statusCode(p), p = undefined, a && d.trigger(v ? "ajaxSuccess" : "ajaxError", [u, r, v ? it : nt]), tt.fireWith(o, [u, c]), a && (d.trigger("ajaxComplete", [u, r]), --i.active || i.event.trigger("ajaxStop")))
        }
        typeof n == "object" && (t = n, n = undefined);
        t = t || {};
        var s, c, f, b, k, a, l, v, r = i.ajaxSetup({}, t),
          o = r.context || r,
          d = r.context && (o.nodeType || o.jquery) ? i(o) : i.event,
          g = i.Deferred(),
          tt = i.Callbacks("once memory"),
          p = r.statusCode || {},
          it = {},
          rt = {},
          e = 0,
          ut = "canceled",
          u = {
            readyState: 0,
            getResponseHeader: function(n) {
              var t;
              if (e === 2) {
                if (!v)
                  for (v = {}; t = ho.exec(b);) v[t[1].toLowerCase()] = t[2];
                t = v[n.toLowerCase()]
              }
              return t == null ? null : t
            },
            getAllResponseHeaders: function() {
              return e === 2 ? b : null
            },
            setRequestHeader: function(n, t) {
              var i = n.toLowerCase();
              return e || (n = rt[i] = rt[i] || n, it[n] = t), this
            },
            overrideMimeType: function(n) {
              return e || (r.mimeType = n), this
            },
            statusCode: function(n) {
              var t;
              if (n)
                if (e < 2)
                  for (t in n) p[t] = [p[t], n[t]];
                else u.always(n[u.status]);
              return this
            },
            abort: function(n) {
              var t = n || ut;
              return l && l.abort(t), w(0, t), this
            }
          };
        if (g.promise(u).complete = tt.add, u.success = u.done, u.error = u.fail, r.url = ((n || r.url || y) + "").replace(so, "").replace(lo, nt[1] + "//"), r.type = t.method || t.type || r.method || r.type, r.dataTypes = i.trim(r.dataType || "*").toLowerCase().match(h) || [""], r.crossDomain == null && (s = hf.exec(r.url.toLowerCase()), r.crossDomain = !!(s && (s[1] !== nt[1] || s[2] !== nt[2] || (s[3] || (s[1] === "http:" ? "80" : "443")) !== (nt[3] || (nt[1] === "http:" ? "80" : "443"))))), r.data && r.processData && typeof r.data != "string" && (r.data = i.param(r.data, r.traditional)), vf(cf, r, t, u), e === 2) return u;
        a = i.event && r.global;
        a && i.active++ == 0 && i.event.trigger("ajaxStart");
        r.type = r.type.toUpperCase();
        r.hasContent = !co.test(r.type);
        f = r.url;
        r.hasContent || (r.data && (f = r.url += (wi.test(f) ? "&" : "?") + r.data, delete r.data), r.cache === !1 && (r.url = sf.test(f) ? f.replace(sf, "$1_=" + pi++) : f + (wi.test(f) ? "&" : "?") + "_=" + pi++));
        r.ifModified && (i.lastModified[f] && u.setRequestHeader("If-Modified-Since", i.lastModified[f]), i.etag[f] && u.setRequestHeader("If-None-Match", i.etag[f]));
        (r.data && r.hasContent && r.contentType !== !1 || t.contentType) && u.setRequestHeader("Content-Type", r.contentType);
        u.setRequestHeader("Accept", r.dataTypes[0] && r.accepts[r.dataTypes[0]] ? r.accepts[r.dataTypes[0]] + (r.dataTypes[0] !== "*" ? ", " + lf + "; q=0.01" : "") : r.accepts["*"]);
        for (c in r.headers) u.setRequestHeader(c, r.headers[c]);
        if (r.beforeSend && (r.beforeSend.call(o, u, r) === !1 || e === 2)) return u.abort();
        ut = "abort";
        for (c in {
            success: 1,
            error: 1,
            complete: 1
          }) u[c](r[c]);
        if (l = vf(bi, r, t, u), l) {
          u.readyState = 1;
          a && d.trigger("ajaxSend", [u, r]);
          r.async && r.timeout > 0 && (k = setTimeout(function() {
            u.abort("timeout")
          }, r.timeout));
          try {
            e = 1;
            l.send(it, w)
          } catch (ft) {
            if (e < 2) w(-1, ft);
            else throw ft;
          }
        } else w(-1, "No Transport");
        return u
      },
      getJSON: function(n, t, r) {
        return i.get(n, t, r, "json")
      },
      getScript: function(n, t) {
        return i.get(n, undefined, t, "script")
      }
    });
    i.each(["get", "post"], function(n, t) {
      i[t] = function(n, r, u, f) {
        return i.isFunction(r) && (f = f || u, u = r, r = undefined), i.ajax({
          url: n,
          type: t,
          dataType: f,
          data: r,
          success: u
        })
      }
    });
    i._evalUrl = function(n) {
      return i.ajax({
        url: n,
        type: "GET",
        dataType: "script",
        async: !1,
        global: !1,
        throws: !0
      })
    };
    i.fn.extend({
      wrapAll: function(n) {
        if (i.isFunction(n)) return this.each(function(t) {
          i(this).wrapAll(n.call(this, t))
        });
        if (this[0]) {
          var t = i(n, this[0].ownerDocument).eq(0).clone(!0);
          this[0].parentNode && t.insertBefore(this[0]);
          t.map(function() {
            for (var n = this; n.firstChild && n.firstChild.nodeType === 1;) n = n.firstChild;
            return n
          }).append(this)
        }
        return this
      },
      wrapInner: function(n) {
        return i.isFunction(n) ? this.each(function(t) {
          i(this).wrapInner(n.call(this, t))
        }) : this.each(function() {
          var t = i(this),
            r = t.contents();
          r.length ? r.wrapAll(n) : t.append(n)
        })
      },
      wrap: function(n) {
        var t = i.isFunction(n);
        return this.each(function(r) {
          i(this).wrapAll(t ? n.call(this, r) : n)
        })
      },
      unwrap: function() {
        return this.parent().each(function() {
          i.nodeName(this, "body") || i(this).replaceWith(this.childNodes)
        }).end()
      }
    });
    i.expr.filters.hidden = function(n) {
      return n.offsetWidth <= 0 && n.offsetHeight <= 0 || !r.reliableHiddenOffsets() && (n.style && n.style.display || i.css(n, "display")) === "none"
    };
    i.expr.filters.visible = function(n) {
      return !i.expr.filters.hidden(n)
    };
    var yo = /%20/g,
      po = /\[\]$/,
      yf = /\r?\n/g,
      wo = /^(?:submit|button|image|reset|file)$/i,
      bo = /^(?:input|select|textarea|keygen)/i;
    i.param = function(n, t) {
      var r, u = [],
        f = function(n, t) {
          t = i.isFunction(t) ? t() : t == null ? "" : t;
          u[u.length] = encodeURIComponent(n) + "=" + encodeURIComponent(t)
        };
      if (t === undefined && (t = i.ajaxSettings && i.ajaxSettings.traditional), i.isArray(n) || n.jquery && !i.isPlainObject(n)) i.each(n, function() {
        f(this.name, this.value)
      });
      else
        for (r in n) di(r, n[r], t, f);
      return u.join("&").replace(yo, "+")
    };
    i.fn.extend({
      serialize: function() {
        return i.param(this.serializeArray())
      },
      serializeArray: function() {
        return this.map(function() {
          var n = i.prop(this, "elements");
          return n ? i.makeArray(n) : this
        }).filter(function() {
          var n = this.type;
          return this.name && !i(this).is(":disabled") && bo.test(this.nodeName) && !wo.test(n) && (this.checked || !oi.test(n))
        }).map(function(n, t) {
          var r = i(this).val();
          return r == null ? null : i.isArray(r) ? i.map(r, function(n) {
            return {
              name: t.name,
              value: n.replace(yf, "\r\n")
            }
          }) : {
            name: t.name,
            value: r.replace(yf, "\r\n")
          }
        }).get()
      }
    });
    i.ajaxSettings.xhr = n.ActiveXObject !== undefined ? function() {
      return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && pf() || go()
    } : pf;
    var ko = 0,
      ni = {},
      ht = i.ajaxSettings.xhr();
    return n.attachEvent && n.attachEvent("onunload", function() {
      for (var n in ni) ni[n](undefined, !0)
    }), r.cors = !!ht && "withCredentials" in ht, ht = r.ajax = !!ht, ht && i.ajaxTransport(function(n) {
      if (!n.crossDomain || r.cors) {
        var t;
        return {
          send: function(r, u) {
            var e, f = n.xhr(),
              o = ++ko;
            if (f.open(n.type, n.url, n.async, n.username, n.password), n.xhrFields)
              for (e in n.xhrFields) f[e] = n.xhrFields[e];
            n.mimeType && f.overrideMimeType && f.overrideMimeType(n.mimeType);
            n.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest");
            for (e in r) r[e] !== undefined && f.setRequestHeader(e, r[e] + "");
            f.send(n.hasContent && n.data || null);
            t = function(r, e) {
              var s, c, h;
              if (t && (e || f.readyState === 4))
                if (delete ni[o], t = undefined, f.onreadystatechange = i.noop, e) f.readyState !== 4 && f.abort();
                else {
                  h = {};
                  s = f.status;
                  typeof f.responseText == "string" && (h.text = f.responseText);
                  try {
                    c = f.statusText
                  } catch (l) {
                    c = ""
                  }
                  s || !n.isLocal || n.crossDomain ? s === 1223 && (s = 204) : s = h.text ? 200 : 404
                } h && u(s, c, h, f.getAllResponseHeaders())
            };
            n.async ? f.readyState === 4 ? setTimeout(t) : f.onreadystatechange = ni[o] = t : t()
          },
          abort: function() {
            t && t(undefined, !0)
          }
        }
      }
    }), i.ajaxSetup({
      accepts: {
        script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
      },
      contents: {
        script: /(?:java|ecma)script/
      },
      converters: {
        "text script": function(n) {
          return i.globalEval(n), n
        }
      }
    }), i.ajaxPrefilter("script", function(n) {
      n.cache === undefined && (n.cache = !1);
      n.crossDomain && (n.type = "GET", n.global = !1)
    }), i.ajaxTransport("script", function(n) {
      if (n.crossDomain) {
        var t, r = u.head || i("head")[0] || u.documentElement;
        return {
          send: function(i, f) {
            t = u.createElement("script");
            t.async = !0;
            n.scriptCharset && (t.charset = n.scriptCharset);
            t.src = n.url;
            t.onload = t.onreadystatechange = function(n, i) {
              (i || !t.readyState || /loaded|complete/.test(t.readyState)) && (t.onload = t.onreadystatechange = null, t.parentNode && t.parentNode.removeChild(t), t = null, i || f(200, "success"))
            };
            r.insertBefore(t, r.firstChild)
          },
          abort: function() {
            if (t) t.onload(undefined, !0)
          }
        }
      }
    }), gi = [], ti = /(=)\?(?=&|$)|\?\?/, i.ajaxSetup({
      jsonp: "callback",
      jsonpCallback: function() {
        var n = gi.pop() || i.expando + "_" + pi++;
        return this[n] = !0, n
      }
    }), i.ajaxPrefilter("json jsonp", function(t, r, u) {
      var f, o, e, s = t.jsonp !== !1 && (ti.test(t.url) ? "url" : typeof t.data == "string" && !(t.contentType || "").indexOf("application/x-www-form-urlencoded") && ti.test(t.data) && "data");
      if (s || t.dataTypes[0] === "jsonp") return f = t.jsonpCallback = i.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(ti, "$1" + f) : t.jsonp !== !1 && (t.url += (wi.test(t.url) ? "&" : "?") + t.jsonp + "=" + f), t.converters["script json"] = function() {
        return e || i.error(f + " was not called"), e[0]
      }, t.dataTypes[0] = "json", o = n[f], n[f] = function() {
        e = arguments
      }, u.always(function() {
        n[f] = o;
        t[f] && (t.jsonpCallback = r.jsonpCallback, gi.push(f));
        e && i.isFunction(o) && o(e[0]);
        e = o = undefined
      }), "script"
    }), i.parseHTML = function(n, t, r) {
      if (!n || typeof n != "string") return null;
      typeof t == "boolean" && (r = t, t = !1);
      t = t || u;
      var f = er.exec(n),
        e = !r && [];
      return f ? [t.createElement(f[1])] : (f = i.buildFragment([n], t, e), e && e.length && i(e).remove(), i.merge([], f.childNodes))
    }, nr = i.fn.load, i.fn.load = function(n, t, r) {
      if (typeof n != "string" && nr) return nr.apply(this, arguments);
      var u, o, s, f = this,
        e = n.indexOf(" ");
      return e >= 0 && (u = i.trim(n.slice(e, n.length)), n = n.slice(0, e)), i.isFunction(t) ? (r = t, t = undefined) : t && typeof t == "object" && (s = "POST"), f.length > 0 && i.ajax({
        url: n,
        type: s,
        dataType: "html",
        data: t
      }).done(function(n) {
        o = arguments;
        f.html(u ? i("<div>").append(i.parseHTML(n)).find(u) : n)
      }).complete(r && function(n, t) {
        f.each(r, o || [n.responseText, t, n])
      }), this
    }, i.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(n, t) {
      i.fn[t] = function(n) {
        return this.on(t, n)
      }
    }), i.expr.filters.animated = function(n) {
      return i.grep(i.timers, function(t) {
        return n === t.elem
      }).length
    }, tr = n.document.documentElement, i.offset = {
      setOffset: function(n, t, r) {
        var e, o, s, h, u, c, v, l = i.css(n, "position"),
          a = i(n),
          f = {};
        l === "static" && (n.style.position = "relative");
        u = a.offset();
        s = i.css(n, "top");
        c = i.css(n, "left");
        v = (l === "absolute" || l === "fixed") && i.inArray("auto", [s, c]) > -1;
        v ? (e = a.position(), h = e.top, o = e.left) : (h = parseFloat(s) || 0, o = parseFloat(c) || 0);
        i.isFunction(t) && (t = t.call(n, r, u));
        t.top != null && (f.top = t.top - u.top + h);
        t.left != null && (f.left = t.left - u.left + o);
        "using" in t ? t.using.call(n, f) : a.css(f)
      }
    }, i.fn.extend({
      offset: function(n) {
        if (arguments.length) return n === undefined ? this : this.each(function(t) {
          i.offset.setOffset(this, n, t)
        });
        var t, f, u = {
            top: 0,
            left: 0
          },
          r = this[0],
          e = r && r.ownerDocument;
        if (e) return (t = e.documentElement, !i.contains(t, r)) ? u : (typeof r.getBoundingClientRect !== o && (u = r.getBoundingClientRect()), f = wf(e), {
          top: u.top + (f.pageYOffset || t.scrollTop) - (t.clientTop || 0),
          left: u.left + (f.pageXOffset || t.scrollLeft) - (t.clientLeft || 0)
        })
      },
      position: function() {
        if (this[0]) {
          var n, r, t = {
              top: 0,
              left: 0
            },
            u = this[0];
          return i.css(u, "position") === "fixed" ? r = u.getBoundingClientRect() : (n = this.offsetParent(), r = this.offset(), i.nodeName(n[0], "html") || (t = n.offset()), t.top += i.css(n[0], "borderTopWidth", !0), t.left += i.css(n[0], "borderLeftWidth", !0)), {
            top: r.top - t.top - i.css(u, "marginTop", !0),
            left: r.left - t.left - i.css(u, "marginLeft", !0)
          }
        }
      },
      offsetParent: function() {
        return this.map(function() {
          for (var n = this.offsetParent || tr; n && !i.nodeName(n, "html") && i.css(n, "position") === "static";) n = n.offsetParent;
          return n || tr
        })
      }
    }), i.each({
      scrollLeft: "pageXOffset",
      scrollTop: "pageYOffset"
    }, function(n, t) {
      var r = /Y/.test(t);
      i.fn[n] = function(u) {
        return b(this, function(n, u, f) {
          var e = wf(n);
          if (f === undefined) return e ? t in e ? e[t] : e.document.documentElement[u] : n[u];
          e ? e.scrollTo(r ? i(e).scrollLeft() : f, r ? f : i(e).scrollTop()) : n[u] = f
        }, n, u, arguments.length, null)
      }
    }), i.each(["top", "left"], function(n, t) {
      i.cssHooks[t] = au(r.pixelPosition, function(n, r) {
        if (r) return r = d(n, t), pt.test(r) ? i(n).position()[t] + "px" : r
      })
    }), i.each({
      Height: "height",
      Width: "width"
    }, function(n, t) {
      i.each({
        padding: "inner" + n,
        content: t,
        "": "outer" + n
      }, function(r, u) {
        i.fn[u] = function(u, f) {
          var e = arguments.length && (r || typeof u != "boolean"),
            o = r || (u === !0 || f === !0 ? "margin" : "border");
          return b(this, function(t, r, u) {
            var f;
            return i.isWindow(t) ? t.document.documentElement["client" + n] : t.nodeType === 9 ? (f = t.documentElement, Math.max(t.body["scroll" + n], f["scroll" + n], t.body["offset" + n], f["offset" + n], f["client" + n])) : u === undefined ? i.css(t, r, o) : i.style(t, r, u, o)
          }, t, e ? u : undefined, e, null)
        }
      })
    }), i.fn.size = function() {
      return this.length
    }, i.fn.andSelf = i.fn.addBack, typeof define == "function" && define.amd && define("jquery", [], function() {
      return i
    }), bf = n.jQuery, kf = n.$, i.noConflict = function(t) {
      return n.$ === i && (n.$ = kf), t && n.jQuery === i && (n.jQuery = bf), i
    }, typeof t === o && (n.jQuery = n.$ = i), i
  }), function(n) {
    typeof define == "function" && define.amd ? define(["jquery"], n) : typeof exports == "object" ? n(require("jquery")) : n(jQuery)
  }(function(n) {
    var t, r = {
        get: function(n) {
          return i[t].get.apply(this, [n])
        },
        set: function(n, r) {
          var u = parseInt(n),
            f = parseInt(r),
            e;
          return typeof n == "undefined" ? u = 0 : n < 0 && (u = this[0].value.length + u), typeof r != "undefined" && (e = r >= 0 ? u + f : this[0].value.length + f), i[t].set.apply(this, [u, e]), this
        },
        setcursor: function(n) {
          return this.textrange("set", n, 0)
        },
        replace: function(n) {
          return i[t].replace.apply(this, [String(n)]), this
        },
        insert: function(n) {
          return this.textrange("replace", n)
        }
      },
      i = {
        xul: {
          get: function(n) {
            var t = {
              position: this[0].selectionStart,
              start: this[0].selectionStart,
              end: this[0].selectionEnd,
              length: this[0].selectionEnd - this[0].selectionStart,
              text: this.val().substring(this[0].selectionStart, this[0].selectionEnd)
            };
            return typeof n == "undefined" ? t : t[n]
          },
          set: function(n, t) {
            typeof t == "undefined" && (t = this[0].value.length);
            this[0].selectionStart = n;
            this[0].selectionEnd = t
          },
          replace: function(n) {
            var t = this[0].selectionStart,
              r = this[0].selectionEnd,
              i = this.val();
            this.val(i.substring(0, t) + n + i.substring(r, i.length));
            this[0].selectionStart = t;
            this[0].selectionEnd = t + n.length
          }
        },
        msie: {
          get: function(n) {
            var e = document.selection.createRange(),
              t;
            if (typeof e == "undefined") return t = {
              position: 0,
              start: 0,
              end: this.val().length,
              length: this.val().length,
              text: this.val()
            }, typeof n == "undefined" ? t : t[n];
            var i = 0,
              f = 0,
              r = this[0].value.length,
              s = this[0].value.replace(/\r\n/g, "\n"),
              u = this[0].createTextRange(),
              o = this[0].createTextRange();
            return u.moveToBookmark(e.getBookmark()), o.collapse(!1), u.compareEndPoints("StartToEnd", o) === -1 ? (i = -u.moveStart("character", -r), i += s.slice(0, i).split("\n").length - 1, f = u.compareEndPoints("EndToEnd", o) === -1 ? -u.moveEnd("character", -r) + (s.slice(0, f).split("\n").length - 1) : r) : (i = r, f = r), t = {
              position: i,
              start: i,
              end: f,
              length: r,
              text: e.text
            }, typeof n == "undefined" ? t : t[n]
          },
          set: function(n, t) {
            var i = this[0].createTextRange(),
              r, u;
            typeof i != "undefined" && (typeof t == "undefined" && (t = this[0].value.length), r = n - (this[0].value.slice(0, n).split("\r\n").length - 1), u = t - (this[0].value.slice(0, t).split("\r\n").length - 1), i.collapse(!0), i.moveEnd("character", u), i.moveStart("character", r), i.select())
          },
          replace: function(n) {
            document.selection.createRange().text = n
          }
        }
      };
    n.fn.extend({
      textrange: function(i) {
        var u = "get",
          f = {};
        if (typeof this[0] == "undefined" || (typeof i == "string" ? u = i : typeof i == "object" && (u = i.method || u, f = i), typeof t == "undefined" && (t = "selectionStart" in this[0] ? "xul" : document.selection ? "msie" : "unknown"), t === "unknown")) return this;
        if (f.nofocus || document.activeElement === this[0] || this[0].focus(), typeof r[u] == "function") return r[u].apply(this, Array.prototype.slice.call(arguments, 1));
        n.error("Method " + u + " does not exist in jQuery.textrange")
      }
    })
  }), function(n) {
    typeof define == "function" && define.amd ? define(["jquery"], n) : typeof exports == "object" ? n(require("jquery")) : n(jQuery)
  }(function(n) {
    var i = 0,
      t = Array.prototype.slice,
      r;
    n.cleanData = function(t) {
      return function(i) {
        for (var r, u, f = 0;
          (u = i[f]) != null; f++) try {
          r = n._data(u, "events");
          r && r.remove && n(u).triggerHandler("remove")
        } catch (e) {}
        t(i)
      }
    }(n.cleanData);
    n.widget = function(t, i, r) {
      var s, f, u, o, h = {},
        e = t.split(".")[0];
      return t = t.split(".")[1], s = e + "-" + t, r || (r = i, i = n.Widget), n.expr[":"][s.toLowerCase()] = function(t) {
        return !!n.data(t, s)
      }, n[e] = n[e] || {}, f = n[e][t], u = n[e][t] = function(n, t) {
        if (!this._createWidget) return new u(n, t);
        arguments.length && this._createWidget(n, t)
      }, n.extend(u, f, {
        version: r.version,
        _proto: n.extend({}, r),
        _childConstructors: []
      }), o = new i, o.options = n.widget.extend({}, o.options), n.each(r, function(t, r) {
        if (!n.isFunction(r)) {
          h[t] = r;
          return
        }
        h[t] = function() {
          var n = function() {
              return i.prototype[t].apply(this, arguments)
            },
            u = function(n) {
              return i.prototype[t].apply(this, n)
            };
          return function() {
            var i = this._super,
              f = this._superApply,
              t;
            return this._super = n, this._superApply = u, t = r.apply(this, arguments), this._super = i, this._superApply = f, t
          }
        }()
      }), u.prototype = n.widget.extend(o, {
        widgetEventPrefix: f ? o.widgetEventPrefix || t : t
      }, h, {
        constructor: u,
        namespace: e,
        widgetName: t,
        widgetFullName: s
      }), f ? (n.each(f._childConstructors, function(t, i) {
        var r = i.prototype;
        n.widget(r.namespace + "." + r.widgetName, u, i._proto)
      }), delete f._childConstructors) : i._childConstructors.push(u), n.widget.bridge(t, u), u
    };
    n.widget.extend = function(i) {
      for (var e = t.call(arguments, 1), f = 0, o = e.length, r, u; f < o; f++)
        for (r in e[f]) u = e[f][r], e[f].hasOwnProperty(r) && u !== undefined && (i[r] = n.isPlainObject(u) ? n.isPlainObject(i[r]) ? n.widget.extend({}, i[r], u) : n.widget.extend({}, u) : u);
      return i
    };
    n.widget.bridge = function(i, r) {
      var u = r.prototype.widgetFullName || i;
      n.fn[i] = function(f) {
        var s = typeof f == "string",
          o = t.call(arguments, 1),
          e = this;
        return f = !s && o.length ? n.widget.extend.apply(null, [f].concat(o)) : f, s ? this.each(function() {
          var t, r = n.data(this, u);
          return f === "instance" ? (e = r, !1) : r ? !n.isFunction(r[f]) || f.charAt(0) === "_" ? n.error("no such method '" + f + "' for " + i + " widget instance") : (t = r[f].apply(r, o), t !== r && t !== undefined ? (e = t && t.jquery ? e.pushStack(t.get()) : t, !1) : void 0) : n.error("cannot call methods on " + i + " prior to initialization; attempted to call method '" + f + "'")
        }) : this.each(function() {
          var t = n.data(this, u);
          t ? (t.option(f || {}), t._init && t._init()) : n.data(this, u, new r(f, this))
        }), e
      }
    };
    n.Widget = function() {};
    n.Widget._childConstructors = [];
    n.Widget.prototype = {
      widgetName: "widget",
      widgetEventPrefix: "",
      defaultElement: "<div>",
      options: {
        disabled: !1,
        create: null
      },
      _createWidget: function(t, r) {
        r = n(r || this.defaultElement || this)[0];
        this.element = n(r);
        this.uuid = i++;
        this.eventNamespace = "." + this.widgetName + this.uuid;
        this.options = n.widget.extend({}, this.options, this._getCreateOptions(), t);
        this.bindings = n();
        this.hoverable = n();
        this.focusable = n();
        r !== this && (n.data(r, this.widgetFullName, this), this._on(!0, this.element, {
          remove: function(n) {
            n.target === r && this.destroy()
          }
        }), this.document = n(r.style ? r.ownerDocument : r.document || r), this.window = n(this.document[0].defaultView || this.document[0].parentWindow));
        this._create();
        this._trigger("create", null, this._getCreateEventData());
        this._init()
      },
      _getCreateOptions: n.noop,
      _getCreateEventData: n.noop,
      _create: n.noop,
      _init: n.noop,
      destroy: function() {
        this._destroy();
        this.element.unbind(this.eventNamespace).removeData(this.widgetFullName).removeData(n.camelCase(this.widgetFullName));
        this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled ui-state-disabled");
        this.bindings.unbind(this.eventNamespace);
        this.hoverable.removeClass("ui-state-hover");
        this.focusable.removeClass("ui-state-focus")
      },
      _destroy: n.noop,
      widget: function() {
        return this.element
      },
      option: function(t, i) {
        var e = t,
          r, u, f;
        if (arguments.length === 0) return n.widget.extend({}, this.options);
        if (typeof t == "string")
          if (e = {}, r = t.split("."), t = r.shift(), r.length) {
            for (u = e[t] = n.widget.extend({}, this.options[t]), f = 0; f < r.length - 1; f++) u[r[f]] = u[r[f]] || {}, u = u[r[f]];
            if (t = r.pop(), arguments.length === 1) return u[t] === undefined ? null : u[t];
            u[t] = i
          } else {
            if (arguments.length === 1) return this.options[t] === undefined ? null : this.options[t];
            e[t] = i
          } return this._setOptions(e), this
      },
      _setOptions: function(n) {
        var t;
        for (t in n) this._setOption(t, n[t]);
        return this
      },
      _setOption: function(n, t) {
        return this.options[n] = t, n === "disabled" && (this.widget().toggleClass(this.widgetFullName + "-disabled", !!t), t && (this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus"))), this
      },
      enable: function() {
        return this._setOptions({
          disabled: !1
        })
      },
      disable: function() {
        return this._setOptions({
          disabled: !0
        })
      },
      _on: function(t, i, r) {
        var f, u = this;
        typeof t != "boolean" && (r = i, i = t, t = !1);
        r ? (i = f = n(i), this.bindings = this.bindings.add(i)) : (r = i, i = this.element, f = this.widget());
        n.each(r, function(r, e) {
          function o() {
            if (t || u.options.disabled !== !0 && !n(this).hasClass("ui-state-disabled")) return (typeof e == "string" ? u[e] : e).apply(u, arguments)
          }
          typeof e != "string" && (o.guid = e.guid = e.guid || o.guid || n.guid++);
          var s = r.match(/^([\w:-]*)\s*(.*)$/),
            h = s[1] + u.eventNamespace,
            c = s[2];
          c ? f.delegate(c, h, o) : i.bind(h, o)
        })
      },
      _off: function(n, t) {
        t = (t || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace;
        n.unbind(t).undelegate(t)
      },
      _delay: function(n, t) {
        function r() {
          return (typeof n == "string" ? i[n] : n).apply(i, arguments)
        }
        var i = this;
        return setTimeout(r, t || 0)
      },
      _hoverable: function(t) {
        this.hoverable = this.hoverable.add(t);
        this._on(t, {
          mouseenter: function(t) {
            n(t.currentTarget).addClass("ui-state-hover")
          },
          mouseleave: function(t) {
            n(t.currentTarget).removeClass("ui-state-hover")
          }
        })
      },
      _focusable: function(t) {
        this.focusable = this.focusable.add(t);
        this._on(t, {
          focusin: function(t) {
            n(t.currentTarget).addClass("ui-state-focus")
          },
          focusout: function(t) {
            n(t.currentTarget).removeClass("ui-state-focus")
          }
        })
      },
      _trigger: function(t, i, r) {
        var u, f, e = this.options[t];
        if (r = r || {}, i = n.Event(i), i.type = (t === this.widgetEventPrefix ? t : this.widgetEventPrefix + t).toLowerCase(), i.target = this.element[0], f = i.originalEvent, f)
          for (u in f) u in i || (i[u] = f[u]);
        return this.element.trigger(i, r), !(n.isFunction(e) && e.apply(this.element[0], [i].concat(r)) === !1 || i.isDefaultPrevented())
      }
    };
    n.each({
      show: "fadeIn",
      hide: "fadeOut"
    }, function(t, i) {
      n.Widget.prototype["_" + t] = function(r, u, f) {
        typeof u == "string" && (u = {
          effect: u
        });
        var o, e = u ? u === !0 || typeof u == "number" ? i : u.effect || i : t;
        u = u || {};
        typeof u == "number" && (u = {
          duration: u
        });
        o = !n.isEmptyObject(u);
        u.complete = f;
        u.delay && r.delay(u.delay);
        o && n.effects && n.effects.effect[e] ? r[t](u) : e !== t && r[e] ? r[e](u.duration, u.easing, f) : r.queue(function(i) {
          n(this)[t]();
          f && f.call(r[0]);
          i()
        })
      }
    });
    r = n.widget
  }), function(n) {
    n.extend(n.fn, {
      validate: function(t) {
        if (!this.length) {
          t && t.debug && window.console && console.warn("nothing selected, can't validate, returning nothing");
          return
        }
        var i = n.data(this[0], "validator");
        return i ? i : (i = new n.validator(t, this[0]), n.data(this[0], "validator", i), i.settings.onsubmit && (this.find("input, button").filter(".cancel").click(function() {
          i.cancelSubmit = !0
        }), i.settings.submitHandler && this.find("input, button").filter(":submit").click(function() {
          i.submitButton = this
        }), this.submit(function(t) {
          function r() {
            if (i.settings.submitHandler) {
              if (i.submitButton) var t = n("<input type='hidden'/>").attr("name", i.submitButton.name).val(i.submitButton.value).appendTo(i.currentForm);
              return i.settings.submitHandler.call(i, i.currentForm), i.submitButton && t.remove(), !1
            }
            return !0
          }
          return (i.settings.debug && t.preventDefault(), i.cancelSubmit) ? (i.cancelSubmit = !1, r()) : i.form() ? i.pendingRequest ? (i.formSubmitted = !0, !1) : r() : (i.focusInvalid(), !1)
        })), i)
      },
      valid: function() {
        if (n(this[0]).is("form")) return this.validate().form();
        var t = !0,
          i = n(this[0].form).validate();
        return this.each(function() {
          t &= i.element(this)
        }), t
      },
      removeAttrs: function(t) {
        var i = {},
          r = this;
        return n.each(t.split(/\s/), function(n, t) {
          i[t] = r.attr(t);
          r.removeAttr(t)
        }), i
      },
      rules: function(t, i) {
        var r = this[0],
          o, u, h;
        if (t) {
          var e = n.data(r.form, "validator").settings,
            s = e.rules,
            f = n.validator.staticRules(r);
          switch (t) {
            case "add":
              n.extend(f, n.validator.normalizeRule(i));
              s[r.name] = f;
              i.messages && (e.messages[r.name] = n.extend(e.messages[r.name], i.messages));
              break;
            case "remove":
              return i ? (o = {}, n.each(i.split(/\s/), function(n, t) {
                o[t] = f[t];
                delete f[t]
              }), o) : (delete s[r.name], f)
          }
        }
        return u = n.validator.normalizeRules(n.extend({}, n.validator.metadataRules(r), n.validator.classRules(r), n.validator.attributeRules(r), n.validator.staticRules(r)), r), u.required && (h = u.required, delete u.required, u = n.extend({
          required: h
        }, u)), u
      }
    });
    n.extend(n.expr[":"], {
      blank: function(t) {
        return !n.trim("" + t.value)
      },
      filled: function(t) {
        return !!n.trim("" + t.value)
      },
      unchecked: function(n) {
        return !n.checked
      }
    });
    n.validator = function(t, i) {
      this.settings = n.extend(!0, {}, n.validator.defaults, t);
      this.currentForm = i;
      this.init()
    };
    n.validator.format = function(t, i) {
      return arguments.length == 1 ? function() {
        var i = n.makeArray(arguments);
        return i.unshift(t), n.validator.format.apply(this, i)
      } : (arguments.length > 2 && i.constructor != Array && (i = n.makeArray(arguments).slice(1)), i.constructor != Array && (i = [i]), n.each(i, function(n, i) {
        t = t.replace(new RegExp("\\{" + n + "\\}", "g"), i)
      }), t)
    };
    n.extend(n.validator, {
      defaults: {
        messages: {},
        groups: {},
        rules: {},
        errorClass: "error",
        validClass: "valid",
        errorElement: "label",
        focusInvalid: !0,
        errorContainer: n([]),
        errorLabelContainer: n([]),
        onsubmit: !0,
        ignore: [],
        ignoreTitle: !1,
        onfocusin: function(n) {
          this.lastActive = n;
          this.settings.focusCleanup && !this.blockFocusCleanup && (this.settings.unhighlight && this.settings.unhighlight.call(this, n, this.settings.errorClass, this.settings.validClass), this.addWrapper(this.errorsFor(n)).hide())
        },
        onfocusout: function(n) {
          !this.checkable(n) && (n.name in this.submitted || !this.optional(n)) && this.element(n)
        },
        onkeyup: function(n) {
          (n.name in this.submitted || n == this.lastElement) && this.element(n)
        },
        onclick: function(n) {
          n.name in this.submitted ? this.element(n) : n.parentNode.name in this.submitted && this.element(n.parentNode)
        },
        highlight: function(t, i, r) {
          t.type === "radio" ? this.findByName(t.name).addClass(i).removeClass(r) : n(t).addClass(i).removeClass(r)
        },
        unhighlight: function(t, i, r) {
          t.type === "radio" ? this.findByName(t.name).removeClass(i).addClass(r) : n(t).removeClass(i).addClass(r)
        }
      },
      setDefaults: function(t) {
        n.extend(n.validator.defaults, t)
      },
      messages: {
        required: "This field is required.",
        remote: "Please fix this field.",
        email: "Please enter a valid email address.",
        url: "Please enter a valid URL.",
        date: "Please enter a valid date.",
        dateISO: "Please enter a valid date (ISO).",
        number: "Please enter a valid number.",
        digits: "Please enter only digits.",
        creditcard: "Please enter a valid credit card number.",
        equalTo: "Please enter the same value again.",
        accept: "Please enter a value with a valid extension.",
        maxlength: n.validator.format("Please enter no more than {0} characters."),
        minlength: n.validator.format("Please enter at least {0} characters."),
        rangelength: n.validator.format("Please enter a value between {0} and {1} characters long."),
        range: n.validator.format("Please enter a value between {0} and {1}."),
        max: n.validator.format("Please enter a value less than or equal to {0}."),
        min: n.validator.format("Please enter a value greater than or equal to {0}.")
      },
      autoCreateRanges: !1,
      prototype: {
        init: function() {
          function r(t) {
            var i = n.data(this[0].form, "validator"),
              r = "on" + t.type.replace(/^validate/, "");
            i.settings[r] && i.settings[r].call(i, this[0])
          }
          var i, t;
          this.labelContainer = n(this.settings.errorLabelContainer);
          this.errorContext = this.labelContainer.length && this.labelContainer || n(this.currentForm);
          this.containers = n(this.settings.errorContainer).add(this.settings.errorLabelContainer);
          this.submitted = {};
          this.valueCache = {};
          this.pendingRequest = 0;
          this.pending = {};
          this.invalid = {};
          this.reset();
          i = this.groups = {};
          n.each(this.settings.groups, function(t, r) {
            n.each(r.split(/\s/), function(n, r) {
              i[r] = t
            })
          });
          t = this.settings.rules;
          n.each(t, function(i, r) {
            t[i] = n.validator.normalizeRule(r)
          });
          n(this.currentForm).validateDelegate(":text, :password, :file, select, textarea", "focusin focusout keyup", r).validateDelegate(":radio, :checkbox, select, option", "click", r);
          this.settings.invalidHandler && n(this.currentForm).bind("invalid-form.validate", this.settings.invalidHandler)
        },
        form: function() {
          return this.checkForm(), n.extend(this.submitted, this.errorMap), this.invalid = n.extend({}, this.errorMap), this.valid() || n(this.currentForm).triggerHandler("invalid-form", [this]), this.showErrors(), this.valid()
        },
        checkForm: function() {
          this.prepareForm();
          for (var n = 0, t = this.currentElements = this.elements(); t[n]; n++) this.check(t[n]);
          return this.valid()
        },
        element: function(t) {
          t = this.clean(t);
          this.lastElement = t;
          this.prepareElement(t);
          this.currentElements = n(t);
          var i = this.check(t);
          return i ? delete this.invalid[t.name] : this.invalid[t.name] = !0, this.numberOfInvalids() || (this.toHide = this.toHide.add(this.containers)), this.showErrors(), i
        },
        showErrors: function(t) {
          if (t) {
            n.extend(this.errorMap, t);
            this.errorList = [];
            for (var i in t) this.errorList.push({
              message: t[i],
              element: this.findByName(i)[0]
            });
            this.successList = n.grep(this.successList, function(n) {
              return !(n.name in t)
            })
          }
          this.settings.showErrors ? this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors()
        },
        resetForm: function() {
          n.fn.resetForm && n(this.currentForm).resetForm();
          this.submitted = {};
          this.prepareForm();
          this.hideErrors();
          this.elements().removeClass(this.settings.errorClass)
        },
        numberOfInvalids: function() {
          return this.objectLength(this.invalid)
        },
        objectLength: function(n) {
          var t = 0,
            i;
          for (i in n) t++;
          return t
        },
        hideErrors: function() {
          this.addWrapper(this.toHide).hide()
        },
        valid: function() {
          return this.size() == 0
        },
        size: function() {
          return this.errorList.length
        },
        focusInvalid: function() {
          if (this.settings.focusInvalid) try {
            n(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").focus().trigger("focusin")
          } catch (t) {}
        },
        findLastActive: function() {
          var t = this.lastActive;
          return t && n.grep(this.errorList, function(n) {
            return n.element.name == t.name
          }).length == 1 && t
        },
        elements: function() {
          var t = this,
            i = {};
          return n(this.currentForm).find("input, select, textarea").not(":submit, :reset, :image, [disabled]").not(this.settings.ignore).filter(function() {
            return (!this.name && t.settings.debug && window.console && console.error("%o has no name assigned", this), this.name in i || !t.objectLength(n(this).rules())) ? !1 : (i[this.name] = !0, !0)
          })
        },
        clean: function(t) {
          return n(t)[0]
        },
        errors: function() {
          return n(this.settings.errorElement + "." + this.settings.errorClass, this.errorContext)
        },
        reset: function() {
          this.successList = [];
          this.errorList = [];
          this.errorMap = {};
          this.toShow = n([]);
          this.toHide = n([]);
          this.currentElements = n([])
        },
        prepareForm: function() {
          this.reset();
          this.toHide = this.errors().add(this.containers)
        },
        prepareElement: function(n) {
          this.reset();
          this.toHide = this.errorsFor(n)
        },
        check: function(t) {
          var i, r, u, f, e;
          t = this.clean(t);
          this.checkable(t) && (t = this.findByName(t.name).not(this.settings.ignore)[0]);
          i = n(t).rules();
          r = !1;
          for (u in i) {
            f = {
              method: u,
              parameters: i[u]
            };
            try {
              if (e = n.validator.methods[u].call(this, t.value.replace(/\r/g, ""), t, f.parameters), e == "dependency-mismatch") {
                r = !0;
                continue
              }
              if (r = !1, e == "pending") {
                this.toHide = this.toHide.not(this.errorsFor(t));
                return
              }
              if (!e) return this.formatAndAdd(t, f), !1
            } catch (o) {
              this.settings.debug && window.console && console.log("exception occured when checking element " + t.id + ", check the '" + f.method + "' method", o);
              throw o;
            }
          }
          if (!r) return this.objectLength(i) && this.successList.push(t), !0
        },
        customMetaMessage: function(t, i) {
          if (n.metadata) {
            var r = this.settings.meta ? n(t).metadata()[this.settings.meta] : n(t).metadata();
            return r && r.messages && r.messages[i]
          }
        },
        customMessage: function(n, t) {
          var i = this.settings.messages[n];
          return i && (i.constructor == String ? i : i[t])
        },
        findDefined: function() {
          for (var n = 0; n < arguments.length; n++)
            if (arguments[n] !== undefined) return arguments[n];
          return undefined
        },
        defaultMessage: function(t, i) {
          return this.findDefined(this.customMessage(t.name, i), this.customMetaMessage(t, i), !this.settings.ignoreTitle && t.title || undefined, n.validator.messages[i], "Warning: No message defined for " + t.name + "<\/strong>")
        },
        formatAndAdd: function(n, t) {
          var i = this.defaultMessage(n, t.method),
            r = /\$?\{(\d+)\}/g;
          typeof i == "function" ? i = i.call(this, t.parameters, n) : r.test(i) && (i = jQuery.format(i.replace(r, "{$1}"), t.parameters));
          this.errorList.push({
            message: i,
            element: n
          });
          this.errorMap[n.name] = i;
          this.submitted[n.name] = i
        },
        addWrapper: function(n) {
          return this.settings.wrapper && (n = n.add(n.parent(this.settings.wrapper))), n
        },
        defaultShowErrors: function() {
          for (var t, i, n = 0; this.errorList[n]; n++) t = this.errorList[n], this.settings.highlight && this.settings.highlight.call(this, t.element, this.settings.errorClass, this.settings.validClass), this.showLabel(t.element, t.message);
          if (this.errorList.length && (this.toShow = this.toShow.add(this.containers)), this.settings.success)
            for (n = 0; this.successList[n]; n++) this.showLabel(this.successList[n]);
          if (this.settings.unhighlight)
            for (n = 0, i = this.validElements(); i[n]; n++) this.settings.unhighlight.call(this, i[n], this.settings.errorClass, this.settings.validClass);
          this.toHide = this.toHide.not(this.toShow);
          this.hideErrors();
          this.addWrapper(this.toShow).show()
        },
        validElements: function() {
          return this.currentElements.not(this.invalidElements())
        },
        invalidElements: function() {
          return n(this.errorList).map(function() {
            return this.element
          })
        },
        showLabel: function(t, i) {
          var r = this.errorsFor(t);
          r.length ? (r.removeClass().addClass(this.settings.errorClass), r.attr("generated") && r.html(i)) : (r = n("<" + this.settings.errorElement + "/>").attr({
            "for": this.idOrName(t),
            generated: !0
          }).addClass(this.settings.errorClass).html(i || ""), this.settings.wrapper && (r = r.hide().show().wrap("<" + this.settings.wrapper + "/>").parent()), this.labelContainer.append(r).length || (this.settings.errorPlacement ? this.settings.errorPlacement(r, n(t)) : r.insertAfter(t)));
          !i && this.settings.success && (r.text(""), typeof this.settings.success == "string" ? r.addClass(this.settings.success) : this.settings.success(r));
          this.toShow = this.toShow.add(r)
        },
        errorsFor: function(t) {
          var i = this.idOrName(t);
          return this.errors().filter(function() {
            return n(this).attr("for") == i
          })
        },
        idOrName: function(n) {
          return this.groups[n.name] || (this.checkable(n) ? n.name : n.id || n.name)
        },
        checkable: function(n) {
          return /radio|checkbox/i.test(n.type)
        },
        findByName: function(t) {
          var i = this.currentForm;
          return n(document.getElementsByName(t)).map(function(n, r) {
            return r.form == i && r.name == t && r || null
          })
        },
        getLength: function(t, i) {
          switch (i.nodeName.toLowerCase()) {
            case "select":
              return n("option:selected", i).length;
            case "input":
              if (this.checkable(i)) return this.findByName(i.name).filter(":checked").length
          }
          return t.length
        },
        depend: function(n, t) {
          return this.dependTypes[typeof n] ? this.dependTypes[typeof n](n, t) : !0
        },
        dependTypes: {
          boolean: function(n) {
            return n
          },
          string: function(t, i) {
            return !!n(t, i.form).length
          },
          "function": function(n, t) {
            return n(t)
          }
        },
        optional: function(t) {
          return !n.validator.methods.required.call(this, n.trim(t.value), t) && "dependency-mismatch"
        },
        startRequest: function(n) {
          this.pending[n.name] || (this.pendingRequest++, this.pending[n.name] = !0)
        },
        stopRequest: function(t, i) {
          this.pendingRequest--;
          this.pendingRequest < 0 && (this.pendingRequest = 0);
          delete this.pending[t.name];
          i && this.pendingRequest == 0 && this.formSubmitted && this.form() ? (n(this.currentForm).submit(), this.formSubmitted = !1) : !i && this.pendingRequest == 0 && this.formSubmitted && (n(this.currentForm).triggerHandler("invalid-form", [this]), this.formSubmitted = !1)
        },
        previousValue: function(t) {
          return n.data(t, "previousValue") || n.data(t, "previousValue", {
            old: null,
            valid: !0,
            message: this.defaultMessage(t, "remote")
          })
        }
      },
      classRuleSettings: {
        required: {
          required: !0
        },
        email: {
          email: !0
        },
        url: {
          url: !0
        },
        date: {
          date: !0
        },
        dateISO: {
          dateISO: !0
        },
        dateDE: {
          dateDE: !0
        },
        number: {
          number: !0
        },
        numberDE: {
          numberDE: !0
        },
        digits: {
          digits: !0
        },
        creditcard: {
          creditcard: !0
        }
      },
      addClassRules: function(t, i) {
        t.constructor == String ? this.classRuleSettings[t] = i : n.extend(this.classRuleSettings, t)
      },
      classRules: function(t) {
        var i = {},
          r = n(t).attr("class");
        return r && n.each(r.split(" "), function() {
          this in n.validator.classRuleSettings && n.extend(i, n.validator.classRuleSettings[this])
        }), i
      },
      attributeRules: function(t) {
        var i = {},
          f = n(t),
          r, u;
        for (r in n.validator.methods) u = f.attr(r), u && (i[r] = u);
        return i.maxlength && /-1|2147483647|524288/.test(i.maxlength) && delete i.maxlength, i
      },
      metadataRules: function(t) {
        if (!n.metadata) return {};
        var i = n.data(t.form, "validator").settings.meta;
        return i ? n(t).metadata()[i] : n(t).metadata()
      },
      staticRules: function(t) {
        var i = {},
          r = n.data(t.form, "validator");
        return r.settings.rules && (i = n.validator.normalizeRule(r.settings.rules[t.name]) || {}), i
      },
      normalizeRules: function(t, i) {
        return n.each(t, function(r, u) {
          if (u === !1) {
            delete t[r];
            return
          }
          if (u.param || u.depends) {
            var f = !0;
            switch (typeof u.depends) {
              case "string":
                f = !!n(u.depends, i.form).length;
                break;
              case "function":
                f = u.depends.call(i, i)
            }
            f ? t[r] = u.param !== undefined ? u.param : !0 : delete t[r]
          }
        }), n.each(t, function(r, u) {
          t[r] = n.isFunction(u) ? u(i) : u
        }), n.each(["minlength", "maxlength", "min", "max"], function() {
          t[this] && (t[this] = Number(t[this]))
        }), n.each(["rangelength", "range"], function() {
          t[this] && (t[this] = [Number(t[this][0]), Number(t[this][1])])
        }), n.validator.autoCreateRanges && (t.min && t.max && (t.range = [t.min, t.max], delete t.min, delete t.max), t.minlength && t.maxlength && (t.rangelength = [t.minlength, t.maxlength], delete t.minlength, delete t.maxlength)), t.messages && delete t.messages, t
      },
      normalizeRule: function(t) {
        if (typeof t == "string") {
          var i = {};
          n.each(t.split(/\s/), function() {
            i[this] = !0
          });
          t = i
        }
        return t
      },
      addMethod: function(t, i, r) {
        n.validator.methods[t] = i;
        n.validator.messages[t] = r != undefined ? r : n.validator.messages[t];
        i.length < 3 && n.validator.addClassRules(t, n.validator.normalizeRule(t))
      },
      methods: {
        required: function(t, i, r) {
          if (!this.depend(r, i)) return "dependency-mismatch";
          switch (i.nodeName.toLowerCase()) {
            case "select":
              var u = n(i).val();
              return u && u.length > 0;
            case "input":
              if (this.checkable(i)) return this.getLength(t, i) > 0;
            default:
              return n.trim(t).length > 0
          }
        },
        remote: function(t, i, r) {
          var f, u, e;
          return this.optional(i) ? "dependency-mismatch" : (f = this.previousValue(i), this.settings.messages[i.name] || (this.settings.messages[i.name] = {}), f.originalMessage = this.settings.messages[i.name].remote, this.settings.messages[i.name].remote = f.message, r = typeof r == "string" && {
            url: r
          } || r, this.pending[i.name]) ? "pending" : f.old === t ? f.valid : (f.old = t, u = this, this.startRequest(i), e = {}, e[i.name] = t, n.ajax(n.extend(!0, {
            url: r,
            mode: "abort",
            port: "validate" + i.name,
            dataType: "json",
            data: e,
            success: function(r) {
              var e, h, s, o;
              u.settings.messages[i.name].remote = f.originalMessage;
              e = r === !0;
              e ? (h = u.formSubmitted, u.prepareElement(i), u.formSubmitted = h, u.successList.push(i), u.showErrors()) : (s = {}, o = r || u.defaultMessage(i, "remote"), s[i.name] = f.message = n.isFunction(o) ? o(t) : o, u.showErrors(s));
              f.valid = e;
              u.stopRequest(i, e)
            }
          }, r)), "pending")
        },
        minlength: function(t, i, r) {
          return this.optional(i) || this.getLength(n.trim(t), i) >= r
        },
        maxlength: function(t, i, r) {
          return this.optional(i) || this.getLength(n.trim(t), i) <= r
        },
        rangelength: function(t, i, r) {
          var u = this.getLength(n.trim(t), i);
          return this.optional(i) || u >= r[0] && u <= r[1]
        },
        min: function(n, t, i) {
          return this.optional(t) || n >= i
        },
        max: function(n, t, i) {
          return this.optional(t) || n <= i
        },
        range: function(n, t, i) {
          return this.optional(t) || n >= i[0] && n <= i[1]
        },
        email: function(n, t) {
          return this.optional(t) || /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i.test(n)
        },
        url: function(n, t) {
          return this.optional(t) || /^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(n)
        },
        date: function(n, t) {
          return this.optional(t) || !/Invalid|NaN/.test(new Date(n))
        },
        dateISO: function(n, t) {
          return this.optional(t) || /^\d{4}[\/-]\d{1,2}[\/-]\d{1,2}$/.test(n)
        },
        number: function(n, t) {
          return this.optional(t) || /^-?(?:\d+|\d{1,3}(?:,\d{3})+)(?:\.\d+)?$/.test(n)
        },
        digits: function(n, t) {
          return this.optional(t) || /^\d+$/.test(n)
        },
        creditcard: function(n, t) {
          var r, e, i;
          if (this.optional(t)) return "dependency-mismatch";
          if (/[^0-9-]+/.test(n)) return !1;
          var f = 0,
            i = 0,
            u = !1;
          for (n = n.replace(/\D/g, ""), r = n.length - 1; r >= 0; r--) e = n.charAt(r), i = parseInt(e, 10), u && (i *= 2) > 9 && (i -= 9), f += i, u = !u;
          return f % 10 == 0
        },
        accept: function(n, t, i) {
          return i = typeof i == "string" ? i.replace(/,/g, "|") : "png|jpe?g|gif", this.optional(t) || n.match(new RegExp(".(" + i + ")$", "i"))
        },
        equalTo: function(t, i, r) {
          var u = n(r).unbind(".validate-equalTo").bind("blur.validate-equalTo", function() {
            n(i).valid()
          });
          return t == u.val()
        }
      }
    });
    n.format = n.validator.format
  }(jQuery), function(n) {
    var t = {},
      i;
    n.ajaxPrefilter ? n.ajaxPrefilter(function(n, i, r) {
      var u = n.port;
      n.mode == "abort" && (t[u] && t[u].abort(), t[u] = r)
    }) : (i = n.ajax, n.ajax = function(r) {
      var f = ("mode" in r ? r : n.ajaxSettings).mode,
        u = ("port" in r ? r : n.ajaxSettings).port;
      return f == "abort" ? (t[u] && t[u].abort(), t[u] = i.apply(this, arguments)) : i.apply(this, arguments)
    })
  }(jQuery), function(n) {
    jQuery.event.special.focusin || jQuery.event.special.focusout || !document.addEventListener || n.each({
      focus: "focusin",
      blur: "focusout"
    }, function(t, i) {
      function r(t) {
        return t = n.event.fix(t), t.type = i, n.event.handle.call(this, t)
      }
      n.event.special[i] = {
        setup: function() {
          this.addEventListener(t, r, !0)
        },
        teardown: function() {
          this.removeEventListener(t, r, !0)
        },
        handler: function(t) {
          return arguments[0] = n.event.fix(t), arguments[0].type = i, n.event.handle.apply(this, arguments)
        }
      }
    });
    n.extend(n.fn, {
      validateDelegate: function(t, i, r) {
        return this.bind(i, function(i) {
          var u = n(i.target);
          if (u.is(t)) return r.apply(u, arguments)
        })
      }
    })
  }(jQuery), function(n) {
    if (typeof define == "function" && define.amd) define(n);
    else if (typeof exports == "object") module.exports = n();
    else {
      var i = window.Cookies,
        t = window.Cookies = n(window.jQuery);
      t.noConflict = function() {
        return window.Cookies = i, t
      }
    }
  }(function() {
    function n() {
      for (var n = 0, r = {}, t, i; n < arguments.length; n++) {
        t = arguments[n];
        for (i in t) r[i] = t[i]
      }
      return r
    }

    function t(i) {
      function r(t, u, f) {
        var o, s;
        if (arguments.length > 1) {
          f = n({
            path: "/"
          }, r.defaults, f);
          typeof f.expires == "number" && (s = new Date, s.setMilliseconds(s.getMilliseconds() + f.expires * 864e5), f.expires = s);
          try {
            o = JSON.stringify(u);
            /^[\{\[]/.test(o) && (u = o)
          } catch (y) {}
          return u = encodeURIComponent(String(u)), u = u.replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent), t = encodeURIComponent(String(t)), t = t.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent), t = t.replace(/[\(\)]/g, escape), document.cookie = [t, "=", u, f.expires && "; expires=" + f.expires.toUTCString(), f.path && "; path=" + f.path, f.domain && "; domain=" + f.domain, f.secure ? "; secure" : ""].join("")
        }
        t || (o = {});
        for (var l = document.cookie ? document.cookie.split("; ") : [], a = /(%[0-9A-Z]{2})+/g, h = 0; h < l.length; h++) {
          var v = l[h].split("="),
            c = v[0].replace(a, decodeURIComponent),
            e = v.slice(1).join("=");
          if (e.charAt(0) === '"' && (e = e.slice(1, -1)), e = i && i(e, c) || e.replace(a, decodeURIComponent), this.json) try {
            e = JSON.parse(e)
          } catch (y) {}
          if (t === c) {
            o = e;
            break
          }
          t || (o[c] = e)
        }
        return o
      }
      return r.get = r.set = r, r.getJSON = function() {
        return r.apply({
          json: !0
        }, [].slice.call(arguments))
      }, r.defaults = {}, r.remove = function(t, i) {
        r(t, "", n(i, {
          expires: -1
        }))
      }, r.withConverter = t, r
    }
    return t()
  }), function(n) {
    "use strict";
    typeof define == "function" && define.amd ? define(["jquery"], n) : typeof exports == "object" ? n(require("jquery")) : n(window.jQuery)
  }(function(n) {
    "use strict";
    var i = 0,
      r = ["accepts", "cache", "contents", "contentType", "crossDomain", "data", "dataType", "headers", "ifModified", "mimeType", "password", "processData", "timeout", "traditional", "type", "url", "username"],
      t = function(n) {
        return n
      };
    n.ajaxSetup({
      converters: {
        "postmessage text": t,
        "postmessage json": t,
        "postmessage html": t
      }
    });
    n.ajaxTransport("postmessage", function(t) {
      if (t.postMessage && window.postMessage) {
        var u, f = n("<a>").prop("href", t.postMessage)[0],
          e = f.protocol + "//" + f.host,
          o = t.xhr().upload;
        return {
          send: function(f, s) {
            i += 1;
            var h = {
                id: "postmessage-transport-" + i
              },
              c = "message." + h.id;
            u = n('<iframe style="display:none;" src="' + t.postMessage + '" name="' + h.id + '"><\/iframe>').bind("load", function() {
              n.each(r, function(n, i) {
                h[i] = t[i]
              });
              h.dataType = h.dataType.replace("postmessage ", "");
              n(window).bind(c, function(t) {
                t = t.originalEvent;
                var i = t.data,
                  r;
                t.origin === e && i.id === h.id && (i.type === "progress" ? (r = document.createEvent("Event"), r.initEvent(i.type, !1, !0), n.extend(r, i), o.dispatchEvent(r)) : (s(i.status, i.statusText, {
                  postmessage: i.result
                }, i.headers), u.remove(), n(window).unbind(c)))
              });
              u[0].contentWindow.postMessage(h, e)
            }).appendTo(document.body)
          },
          abort: function() {
            u && u.remove()
          }
        }
      }
    })
  }), function(n) {
    "use strict";
    typeof define == "function" && define.amd ? define(["jquery"], n) : typeof exports == "object" ? n(require("jquery")) : n(window.jQuery)
  }(function(n) {
    "use strict";
    window.XDomainRequest && !n.support.cors && n.ajaxTransport(function(t) {
      if (t.crossDomain && t.async) {
        t.timeout && (t.xdrTimeout = t.timeout, delete t.timeout);
        var i;
        return {
          send: function(r, u) {
            function e(t, r, f, e) {
              i.onload = i.onerror = i.ontimeout = n.noop;
              i = null;
              u(t, r, f, e)
            }
            var f = /\?/.test(t.url) ? "&" : "?";
            i = new XDomainRequest;
            t.type === "DELETE" ? (t.url = t.url + f + "_method=DELETE", t.type = "POST") : t.type === "PUT" ? (t.url = t.url + f + "_method=PUT", t.type = "POST") : t.type === "PATCH" && (t.url = t.url + f + "_method=PATCH", t.type = "POST");
            i.open(t.type, t.url);
            i.onload = function() {
              e(200, "OK", {
                text: i.responseText
              }, "Content-Type: " + i.contentType)
            };
            i.onerror = function() {
              e(404, "Not Found")
            };
            t.xdrTimeout && (i.ontimeout = function() {
              e(0, "timeout")
            }, i.timeout = t.xdrTimeout);
            i.send(t.hasContent && t.data || null)
          },
          abort: function() {
            i && (i.onerror = n.noop(), i.abort())
          }
        }
      }
    })
  }), function(n) {
    var t = function(n) {
      "use strict";
      return {
        hide: function() {
          return n.style.display = "none", this
        },
        attach: function(i, r) {
          return n.addEventListener ? n.addEventListener(i, r, !1) : n.attachEvent && n.attachEvent("on" + i, r),
            function() {
              t(n).detach(i, r)
            }
        },
        detach: function(t, i) {
          return n.removeEventListener ? n.removeEventListener(t, i, !1) : n.attachEvent && n.detachEvent("on" + t, i), this
        },
        contains: function(t) {
          return t ? n === t ? !0 : n.contains ? n.contains(t) : !!(t.compareDocumentPosition(n) & 8) : !1
        },
        insertBefore: function(t) {
          return t.parentNode.insertBefore(n, t), this
        },
        remove: function() {
          return n.parentNode.removeChild(n), this
        },
        css: function(i) {
          if (n.style == null) throw new t.Error("Can't apply style to node as it is not on the HTMLElement prototype chain!");
          return i.opacity != null && typeof n.style.opacity != "string" && typeof n.filters != "undefined" && (i.filter = "alpha(opacity=" + Math.round(100 * i.opacity) + ")"), t.extend(n.style, i), this
        },
        hasClass: function(t, i) {
          var r = new RegExp("(^| )" + t + "( |$)");
          return r.test(n.className) || !!(i && r.test(n.parentNode.className))
        },
        addClass: function(i) {
          return t(n).hasClass(i) || (n.className += " " + i), this
        },
        removeClass: function(t) {
          var i = new RegExp("(^| )" + t + "( |$)");
          return n.className = n.className.replace(i, " ").replace(/^\s+|\s+$/g, ""), this
        },
        getByClass: function(i, r) {
          var f, u = [];
          return r && n.querySelector ? n.querySelector("." + i) : n.querySelectorAll ? n.querySelectorAll("." + i) : (f = n.getElementsByTagName("*"), t.each(f, function(n, r) {
            t(r).hasClass(i) && u.push(r)
          }), r ? u[0] : u)
        },
        getFirstByClass: function(i) {
          return t(n).getByClass(i, !0)
        },
        children: function() {
          for (var i = [], t = n.firstChild; t;) t.nodeType === 1 && i.push(t), t = t.nextSibling;
          return i
        },
        setText: function(t) {
          return n.innerText = t, n.textContent = t, this
        },
        clearText: function() {
          return t(n).setText("")
        },
        hasAttribute: function(t) {
          var i;
          return n.hasAttribute ? n.hasAttribute(t) ? /^false$/i.exec(n.getAttribute(t)) == null : !1 : (i = n[t], i === undefined) ? !1 : /^false$/i.exec(i) == null
        }
      }
    };
    (function() {
      "use strict";
      t.canvasToBlob = function(n, i, r) {
        return t.dataUriToBlob(n.toDataURL(i, r))
      };
      t.dataUriToBlob = function(n) {
        var i, r, e = function(n, t) {
            var r = window.BlobBuilder || window.WebKitBlobBuilder || window.MozBlobBuilder || window.MSBlobBuilder,
              i = r && new r;
            return i ? (i.append(n), i.getBlob(t)) : new Blob([n], {
              type: t
            })
          },
          u, f;
        return r = n.split(",")[0].indexOf("base64") >= 0 ? atob(n.split(",")[1]) : decodeURI(n.split(",")[1]), f = n.split(",")[0].split(":")[1].split(";")[0], i = new ArrayBuffer(r.length), u = new Uint8Array(i), t.each(r, function(n, t) {
          u[n] = t.charCodeAt(0)
        }), e(i, f)
      };
      t.log = function(n, t) {
        window.console && (t && t !== "info" ? window.console[t] ? window.console[t](n) : window.console.log("<" + t + "> " + n) : window.console.log(n))
      };
      t.isObject = function(n) {
        return n && !n.nodeType && Object.prototype.toString.call(n) === "[object Object]"
      };
      t.isFunction = function(n) {
        return typeof n == "function"
      };
      t.isArray = function(n) {
        return Object.prototype.toString.call(n) === "[object Array]" || n && window.ArrayBuffer && n.buffer && n.buffer.constructor === ArrayBuffer
      };
      t.isItemList = function(n) {
        return Object.prototype.toString.call(n) === "[object DataTransferItemList]"
      };
      t.isNodeList = function(n) {
        return Object.prototype.toString.call(n) === "[object NodeList]" || n.item && n.namedItem
      };
      t.isString = function(n) {
        return Object.prototype.toString.call(n) === "[object String]"
      };
      t.trimStr = function(n) {
        return String.prototype.trim ? n.trim() : n.replace(/^\s+|\s+$/g, "")
      };
      t.format = function(n) {
        var u = Array.prototype.slice.call(arguments, 1),
          i = n,
          r = i.indexOf("{}");
        return t.each(u, function(n, t) {
          var u = i.substring(0, r),
            f = i.substring(r + 2);
          return i = u + t + f, r = i.indexOf("{}", r + t.length), r < 0 ? !1 : void 0
        }), i
      };
      t.isFile = function(n) {
        return window.File && Object.prototype.toString.call(n) === "[object File]"
      };
      t.isFileList = function(n) {
        return window.FileList && Object.prototype.toString.call(n) === "[object FileList]"
      };
      t.isFileOrInput = function(n) {
        return t.isFile(n) || t.isInput(n)
      };
      t.isInput = function(n, t) {
        var i = function(n) {
          var i = n.toLowerCase();
          return t ? i !== "file" : i === "file"
        };
        return window.HTMLInputElement && Object.prototype.toString.call(n) === "[object HTMLInputElement]" && n.type && i(n.type) ? !0 : n.tagName && n.tagName.toLowerCase() === "input" && n.type && i(n.type) ? !0 : !1
      };
      t.isBlob = function(n) {
        if (window.Blob && Object.prototype.toString.call(n) === "[object Blob]") return !0
      };
      t.isXhrUploadSupported = function() {
        var n = document.createElement("input");
        return n.type = "file", n.multiple !== undefined && typeof File != "undefined" && typeof FormData != "undefined" && typeof t.createXhrInstance().upload != "undefined"
      };
      t.createXhrInstance = function() {
        if (window.XMLHttpRequest) return new XMLHttpRequest;
        try {
          return new ActiveXObject("MSXML2.XMLHTTP.3.0")
        } catch (n) {
          return t.log("Neither XHR or ActiveX are supported!", "error"), null
        }
      };
      t.isFolderDropSupported = function(n) {
        return n.items && n.items.length > 0 && n.items[0].webkitGetAsEntry
      };
      t.isFileChunkingSupported = function() {
        return !t.androidStock() && t.isXhrUploadSupported() && (File.prototype.slice !== undefined || File.prototype.webkitSlice !== undefined || File.prototype.mozSlice !== undefined)
      };
      t.sliceBlob = function(n, t, i) {
        var r = n.slice || n.mozSlice || n.webkitSlice;
        return r.call(n, t, i)
      };
      t.arrayBufferToHex = function(n) {
        var i = "",
          r = new Uint8Array(n);
        return t.each(r, function(n, t) {
          var r = t.toString(16);
          r.length < 2 && (r = "0" + r);
          i += r
        }), i
      };
      t.readBlobToHex = function(n, i, r) {
        var e = t.sliceBlob(n, i, i + r),
          u = new FileReader,
          f = new t.Promise;
        return u.onload = function() {
          f.success(t.arrayBufferToHex(u.result))
        }, u.onerror = f.failure, u.readAsArrayBuffer(e), f
      };
      t.extend = function(n, i, r) {
        return t.each(i, function(i, u) {
          r && t.isObject(u) ? (n[i] === undefined && (n[i] = {}), t.extend(n[i], u, !0)) : n[i] = u
        }), n
      };
      t.override = function(n, i) {
        var r = {},
          u = i(r);
        return t.each(u, function(t, i) {
          n[t] !== undefined && (r[t] = n[t]);
          n[t] = i
        }), n
      };
      t.indexOf = function(n, t, i) {
        if (n.indexOf) return n.indexOf(t, i);
        i = i || 0;
        var r = n.length;
        for (i < 0 && (i += r); i < r; i += 1)
          if (n.hasOwnProperty(i) && n[i] === t) return i;
        return -1
      };
      t.getUniqueId = function() {
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(n) {
          var t = Math.random() * 16 | 0,
            i = n == "x" ? t : t & 3 | 8;
          return i.toString(16)
        })
      };
      t.ie = function() {
        return navigator.userAgent.indexOf("MSIE") !== -1 || navigator.userAgent.indexOf("Trident") !== -1
      };
      t.ie7 = function() {
        return navigator.userAgent.indexOf("MSIE 7") !== -1
      };
      t.ie8 = function() {
        return navigator.userAgent.indexOf("MSIE 8") !== -1
      };
      t.ie10 = function() {
        return navigator.userAgent.indexOf("MSIE 10") !== -1
      };
      t.ie11 = function() {
        return t.ie() && navigator.userAgent.indexOf("rv:11") !== -1
      };
      t.edge = function() {
        return navigator.userAgent.indexOf("Edge") >= 0
      };
      t.safari = function() {
        return navigator.vendor !== undefined && navigator.vendor.indexOf("Apple") !== -1
      };
      t.chrome = function() {
        return navigator.vendor !== undefined && navigator.vendor.indexOf("Google") !== -1
      };
      t.opera = function() {
        return navigator.vendor !== undefined && navigator.vendor.indexOf("Opera") !== -1
      };
      t.firefox = function() {
        return !t.edge() && !t.ie11() && navigator.userAgent.indexOf("Mozilla") !== -1 && navigator.vendor !== undefined && navigator.vendor === ""
      };
      t.windows = function() {
        return navigator.platform === "Win32"
      };
      t.android = function() {
        return navigator.userAgent.toLowerCase().indexOf("android") !== -1
      };
      t.androidStock = function() {
        return t.android() && navigator.userAgent.toLowerCase().indexOf("chrome") < 0
      };
      t.ios6 = function() {
        return t.ios() && navigator.userAgent.indexOf(" OS 6_") !== -1
      };
      t.ios7 = function() {
        return t.ios() && navigator.userAgent.indexOf(" OS 7_") !== -1
      };
      t.ios8 = function() {
        return t.ios() && navigator.userAgent.indexOf(" OS 8_") !== -1
      };
      t.ios800 = function() {
        return t.ios() && navigator.userAgent.indexOf(" OS 8_0 ") !== -1
      };
      t.ios = function() {
        return navigator.userAgent.indexOf("iPad") !== -1 || navigator.userAgent.indexOf("iPod") !== -1 || navigator.userAgent.indexOf("iPhone") !== -1
      };
      t.iosChrome = function() {
        return t.ios() && navigator.userAgent.indexOf("CriOS") !== -1
      };
      t.iosSafari = function() {
        return t.ios() && !t.iosChrome() && navigator.userAgent.indexOf("Safari") !== -1
      };
      t.iosSafariWebView = function() {
        return t.ios() && !t.iosChrome() && !t.iosSafari()
      };
      t.preventDefault = function(n) {
        n.preventDefault ? n.preventDefault() : n.returnValue = !1
      };
      t.toElement = function() {
        var n = document.createElement("div");
        return function(t) {
          n.innerHTML = t;
          var i = n.firstChild;
          return n.removeChild(i), i
        }
      }();
      t.each = function(n, i) {
        var r, u;
        if (n)
          if (window.Storage && n.constructor === window.Storage) {
            for (r = 0; r < n.length; r++)
              if (u = i(n.key(r), n.getItem(n.key(r))), u === !1) break
          } else if (t.isArray(n) || t.isItemList(n) || t.isNodeList(n)) {
          for (r = 0; r < n.length; r++)
            if (u = i(r, n[r]), u === !1) break
        } else if (t.isString(n)) {
          for (r = 0; r < n.length; r++)
            if (u = i(r, n.charAt(r)), u === !1) break
        } else
          for (r in n)
            if (Object.prototype.hasOwnProperty.call(n, r) && (u = i(r, n[r]), u === !1)) break
      };
      t.bind = function(n, i) {
        if (t.isFunction(n)) {
          var r = Array.prototype.slice.call(arguments, 2);
          return function() {
            var u = t.extend([], r);
            return arguments.length && (u = u.concat(Array.prototype.slice.call(arguments))), n.apply(i, u)
          }
        }
        throw new Error("first parameter must be a function!");
      };
      t.obj2url = function(n, i, r) {
        var u = [],
          f = "&",
          e = function(n, r) {
            var f = i ? /\[\]$/.test(i) ? i : i + "[" + r + "]" : r;
            f !== "undefined" && r !== "undefined" && u.push(typeof n == "object" ? t.obj2url(n, f, !0) : Object.prototype.toString.call(n) === "[object Function]" ? encodeURIComponent(f) + "=" + encodeURIComponent(n()) : encodeURIComponent(f) + "=" + encodeURIComponent(n))
          };
        return !r && i ? (f = /\?/.test(i) ? /\?$/.test(i) ? "" : "&" : "?", u.push(i), u.push(t.obj2url(n))) : Object.prototype.toString.call(n) === "[object Array]" && typeof n != "undefined" ? t.each(n, function(n, t) {
          e(t, n)
        }) : typeof n != "undefined" && n !== null && typeof n == "object" ? t.each(n, function(n, t) {
          e(t, n)
        }) : u.push(encodeURIComponent(i) + "=" + encodeURIComponent(n)), i ? u.join(f) : u.join(f).replace(/^&/, "").replace(/%20/g, "+")
      };
      t.obj2FormData = function(n, i, r) {
        return i || (i = new FormData), t.each(n, function(n, u) {
          n = r ? r + "[" + n + "]" : n;
          t.isObject(u) ? t.obj2FormData(u, i, n) : t.isFunction(u) ? i.append(n, u()) : i.append(n, u)
        }), i
      };
      t.obj2Inputs = function(n, i) {
        var r;
        return i || (i = document.createElement("form")), t.obj2FormData(n, {
          append: function(n, t) {
            r = document.createElement("input");
            r.setAttribute("name", n);
            r.setAttribute("value", t);
            i.appendChild(r)
          }
        }), i
      };
      t.parseJson = function(json) {
        return window.JSON && t.isFunction(JSON.parse) ? JSON.parse(json) : eval("(" + json + ")")
      };
      t.getExtension = function(n) {
        var t = n.lastIndexOf(".") + 1;
        if (t > 0) return n.substr(t, n.length - t)
      };
      t.getFilename = function(n) {
        return t.isInput(n) ? n.value.replace(/.*(\/|\\)/, "") : t.isFile(n) && n.fileName !== null && n.fileName !== undefined ? n.fileName : n.name
      };
      t.DisposeSupport = function() {
        var n = [];
        return {
          dispose: function() {
            var t;
            do t = n.shift(), t && t(); while (t)
          },
          attach: function() {
            var n = arguments;
            this.addDisposer(t(n[0]).attach.apply(this, Array.prototype.slice.call(arguments, 1)))
          },
          addDisposer: function(t) {
            n.push(t)
          }
        }
      }
    })(),
    function() {
      "use strict";
      typeof define == "function" && define.amd ? define(function() {
        return t
      }) : typeof module != "undefined" && module.exports ? module.exports = t : n.qq = t
    }(),
    function() {
      "use strict";
      t.Error = function(n) {
        this.message = "[Fine Uploader " + t.version + "] " + n
      };
      t.Error.prototype = new Error
    }();
    t.version = "5.16.2";
    t.supportedFeatures = function() {
      "use strict";

      function k() {
        var i = !0,
          n;
        try {
          n = document.createElement("input");
          n.type = "file";
          t(n).hide();
          n.disabled && (i = !1)
        } catch (r) {
          i = !1
        }
        return i
      }

      function d() {
        return (t.chrome() || t.opera()) && navigator.userAgent.match(/Chrome\/[1][4-9]|Chrome\/[2-9][0-9]/) !== undefined
      }

      function w() {
        if (window.XMLHttpRequest) {
          var n = t.createXhrInstance();
          return n.withCredentials !== undefined
        }
        return !1
      }

      function b() {
        return window.XDomainRequest !== undefined
      }

      function g() {
        return w() ? !0 : b()
      }

      function nt() {
        return document.createElement("input").webkitdirectory !== undefined
      }

      function tt() {
        try {
          return !!window.localStorage && t.isFunction(window.localStorage.setItem)
        } catch (n) {
          return !1
        }
      }

      function it() {
        var n = document.createElement("span");
        return ("draggable" in n || "ondragstart" in n && "ondrop" in n) && !t.android() && !t.ios()
      }
      var i, f, e, n, o, r, s, h, c, l, a, v, y, u, p;
      return i = k(), n = i && t.isXhrUploadSupported(), f = n && !t.androidStock(), e = n && it(), o = e && function() {
        var n = document.createElement("input");
        return n.type = "file", !!("webkitdirectory" in (n || document.querySelectorAll("input[type=file]")[0]))
      }(), r = n && t.isFileChunkingSupported(), s = n && r && tt(), h = n && d(), c = i && (window.postMessage !== undefined || n), a = w(), l = b(), v = g(), y = nt(), u = n && window.FileReader !== undefined, p = function() {
        return n ? !t.androidStock() && !t.iosChrome() : !1
      }(), {
        ajaxUploading: n,
        blobUploading: f,
        canDetermineSize: n,
        chunking: r,
        deleteFileCors: v,
        deleteFileCorsXdr: l,
        deleteFileCorsXhr: a,
        dialogElement: !!window.HTMLDialogElement,
        fileDrop: e,
        folderDrop: o,
        folderSelection: y,
        imagePreviews: u,
        imageValidation: u,
        itemSizeValidation: n,
        pause: r,
        progressBar: p,
        resume: s,
        scaling: u && f,
        tiffPreviews: t.safari(),
        unlimitedScaledImageSize: !t.ios(),
        uploading: i,
        uploadCors: c,
        uploadCustomHeaders: n,
        uploadNonMultipart: n,
        uploadViaPaste: h
      }
    }();
    t.isGenericPromise = function(n) {
      "use strict";
      return !!(n && n.then && t.isFunction(n.then))
    };
    t.Promise = function() {
      "use strict";
      var i, n, f = [],
        e = [],
        r = [],
        u = 0;
      t.extend(this, {
        then: function(t, r) {
          return u === 0 ? (t && f.push(t), r && e.push(r)) : u === -1 ? r && r.apply(null, n) : t && t.apply(null, i), this
        },
        done: function(t) {
          return u === 0 ? r.push(t) : t.apply(null, n === undefined ? i : n), this
        },
        success: function() {
          return u = 1, i = arguments, f.length && t.each(f, function(n, t) {
            t.apply(null, i)
          }), r.length && t.each(r, function(n, t) {
            t.apply(null, i)
          }), this
        },
        failure: function() {
          return u = -1, n = arguments, e.length && t.each(e, function(t, i) {
            i.apply(null, n)
          }), r.length && t.each(r, function(t, i) {
            i.apply(null, n)
          }), this
        }
      })
    };
    t.BlobProxy = function(n, i) {
      "use strict";
      t.extend(this, {
        referenceBlob: n,
        create: function() {
          return i(n)
        }
      })
    };
    t.UploadButton = function(n) {
      "use strict";

      function e() {
        var n = document.createElement("input");
        return n.setAttribute(t.UploadButton.BUTTON_ID_ATTR_NAME, f), n.setAttribute("title", i.title), o.setMultiple(i.multiple, n), i.folders && t.supportedFeatures.folderSelection && n.setAttribute("webkitdirectory", ""), i.acceptFiles && n.setAttribute("accept", i.acceptFiles), n.setAttribute("type", "file"), n.setAttribute("name", i.name), t(n).css({
          position: "absolute",
          right: 0,
          top: 0,
          fontFamily: "Arial",
          fontSize: t.ie() && !t.ie8() ? "3500px" : "118px",
          margin: 0,
          padding: 0,
          cursor: "pointer",
          opacity: 0
        }), t.ie7() || t(n).css({
          height: "100%"
        }), i.element.appendChild(n), u.attach(n, "change", function() {
          i.onChange(n)
        }), u.attach(n, "mouseover", function() {
          t(i.element).addClass(i.hoverClass)
        }), u.attach(n, "mouseout", function() {
          t(i.element).removeClass(i.hoverClass)
        }), u.attach(n, "focus", function() {
          t(i.element).addClass(i.focusClass)
        }), u.attach(n, "blur", function() {
          t(i.element).removeClass(i.focusClass)
        }), n
      }
      var o = this,
        u = new t.DisposeSupport,
        i = {
          acceptFiles: null,
          element: null,
          focusClass: "qq-upload-button-focus",
          folders: !1,
          hoverClass: "qq-upload-button-hover",
          ios8BrowserCrashWorkaround: !1,
          multiple: !1,
          name: "qqfile",
          onChange: function() {},
          title: null
        },
        r, f;
      t.extend(i, n);
      f = t.getUniqueId();
      t(i.element).css({
        position: "relative",
        overflow: "hidden",
        direction: "ltr"
      });
      t.extend(this, {
        getInput: function() {
          return r
        },
        getButtonId: function() {
          return f
        },
        setMultiple: function(n, r) {
          var u = r || this.getInput();
          i.ios8BrowserCrashWorkaround && t.ios8() && (t.iosChrome() || t.iosSafariWebView()) ? u.setAttribute("multiple", "") : n ? u.setAttribute("multiple", "") : u.removeAttribute("multiple")
        },
        setAcceptFiles: function(n) {
          n !== i.acceptFiles && r.setAttribute("accept", n)
        },
        reset: function() {
          r.parentNode && t(r).remove();
          t(i.element).removeClass(i.focusClass);
          r = null;
          r = e()
        }
      });
      r = e()
    };
    t.UploadButton.BUTTON_ID_ATTR_NAME = "qq-button-id";
    t.UploadData = function(n) {
      "use strict";

      function o(n) {
        if (t.isArray(n)) {
          var r = [];
          return t.each(n, function(n, t) {
            r.push(i[t])
          }), r
        }
        return i[n]
      }

      function s(n) {
        if (t.isArray(n)) {
          var r = [];
          return t.each(n, function(n, t) {
            r.push(i[u[t]])
          }), r
        }
        return i[u[n]]
      }

      function h(n) {
        var u = [],
          f = [].concat(n);
        return t.each(f, function(n, f) {
          var e = r[f];
          e !== undefined && t.each(e, function(n, t) {
            u.push(i[t])
          })
        }), u
      }
      var i = [],
        u = {},
        r = {},
        e = {},
        f = {};
      t.extend(this, {
        addFile: function(o) {
          var h = o.status || t.status.SUBMITTING,
            s = i.push({
              name: o.name,
              originalName: o.name,
              uuid: o.uuid,
              size: o.size == null ? -1 : o.size,
              status: h,
              file: o.file
            }) - 1;
          o.batchId && (i[s].batchId = o.batchId, f[o.batchId] === undefined && (f[o.batchId] = []), f[o.batchId].push(s));
          o.proxyGroupId && (i[s].proxyGroupId = o.proxyGroupId, e[o.proxyGroupId] === undefined && (e[o.proxyGroupId] = []), e[o.proxyGroupId].push(s));
          i[s].id = s;
          u[o.uuid] = s;
          r[h] === undefined && (r[h] = []);
          r[h].push(s);
          o.onBeforeStatusChange && o.onBeforeStatusChange(s);
          n.onStatusChange(s, null, h);
          return s
        },
        retrieve: function(n) {
          if (t.isObject(n) && i.length) {
            if (n.id !== undefined) return o(n.id);
            if (n.uuid !== undefined) return s(n.uuid);
            if (n.status) return h(n.status)
          } else return t.extend([], i, !0)
        },
        removeFileRef: function(n) {
          var t = o(n);
          t && delete t.file
        },
        reset: function() {
          i = [];
          u = {};
          r = {};
          f = {}
        },
        setStatus: function(u, f) {
          var e = i[u].status,
            o = t.indexOf(r[e], u);
          r[e].splice(o, 1);
          i[u].status = f;
          r[f] === undefined && (r[f] = []);
          r[f].push(u);
          n.onStatusChange(u, e, f)
        },
        uuidChanged: function(n, t) {
          var r = i[n].uuid;
          i[n].uuid = t;
          u[t] = n;
          delete u[r]
        },
        updateName: function(n, t) {
          i[n].name = t
        },
        updateSize: function(n, t) {
          i[n].size = t
        },
        setParentId: function(n, t) {
          i[n].parentId = t
        },
        getIdsInProxyGroup: function(n) {
          var t = i[n].proxyGroupId;
          return t ? e[t] : []
        },
        getIdsInBatch: function(n) {
          var t = i[n].batchId;
          return f[t]
        }
      })
    };
    t.status = {
        SUBMITTING: "submitting",
        SUBMITTED: "submitted",
        REJECTED: "rejected",
        QUEUED: "queued",
        CANCELED: "canceled",
        PAUSED: "paused",
        UPLOADING: "uploading",
        UPLOAD_FINALIZING: "upload finalizing",
        UPLOAD_RETRYING: "retrying upload",
        UPLOAD_SUCCESSFUL: "upload successful",
        UPLOAD_FAILED: "upload failed",
        DELETE_FAILED: "delete failed",
        DELETING: "deleting",
        DELETED: "deleted"
      },
      function() {
        "use strict";
        t.basePublicApi = {
          addBlobs: function(n, t, i) {
            this.addFiles(n, t, i)
          },
          addInitialFiles: function(n) {
            var i = this;
            t.each(n, function(n, t) {
              i._addCannedFile(t)
            })
          },
          addFiles: function(n, i, r) {
            this._maybeHandleIos8SafariWorkaround();
            var f = this._storedIds.length === 0 ? t.getUniqueId() : this._currentBatchId,
              e = t.bind(function(n) {
                this._handleNewFile({
                  blob: n,
                  name: this._options.blobs.defaultName
                }, f, u)
              }, this),
              o = t.bind(function(n) {
                this._handleNewFile(n, f, u)
              }, this),
              s = t.bind(function(n) {
                var i = t.canvasToBlob(n);
                this._handleNewFile({
                  blob: i,
                  name: this._options.blobs.defaultName + ".png"
                }, f, u)
              }, this),
              h = t.bind(function(n) {
                var i = n.quality && n.quality / 100,
                  r = t.canvasToBlob(n.canvas, n.type, i);
                this._handleNewFile({
                  blob: r,
                  name: n.name
                }, f, u)
              }, this),
              c = t.bind(function(n) {
                if (t.isInput(n) && t.supportedFeatures.ajaxUploading) {
                  var i = Array.prototype.slice.call(n.files),
                    r = this;
                  t.each(i, function(n, t) {
                    r._handleNewFile(t, f, u)
                  })
                } else this._handleNewFile(n, f, u)
              }, this),
              l = function() {
                t.isFileList(n) && (n = Array.prototype.slice.call(n));
                n = [].concat(n)
              },
              a = this,
              u = [];
            this._currentBatchId = f;
            n && (l(), t.each(n, function(n, i) {
              t.isFileOrInput(i) ? c(i) : t.isBlob(i) ? e(i) : t.isObject(i) ? i.blob && i.name ? o(i) : i.canvas && i.name && h(i) : i.tagName && i.tagName.toLowerCase() === "canvas" ? s(i) : a.log(i + " is not a valid file container!  Ignoring!", "warn")
            }), this.log("Received " + u.length + " files."), this._prepareItemsForUpload(u, i, r))
          },
          cancel: function(n) {
            var i = this._uploadData.retrieve({
              id: n
            });
            i && i.status === t.status.UPLOAD_FINALIZING ? this.log(t.format("Ignoring cancel for file ID {} ({}).  Finalizing upload.", n, this.getName(n)), "error") : this._handler.cancel(n)
          },
          cancelAll: function() {
            var n = [],
              i = this;
            t.extend(n, this._storedIds);
            t.each(n, function(n, t) {
              i.cancel(t)
            });
            this._handler.cancelAll()
          },
          clearStoredFiles: function() {
            this._storedIds = []
          },
          continueUpload: function(n) {
            var i = this._uploadData.retrieve({
              id: n
            });
            return !t.supportedFeatures.pause || !this._options.chunking.enabled ? !1 : i.status === t.status.PAUSED ? (this.log(t.format("Paused file ID {} ({}) will be continued.  Not paused.", n, this.getName(n))), this._uploadFile(n), !0) : (this.log(t.format("Ignoring continue for file ID {} ({}).  Not paused.", n, this.getName(n)), "error"), !1)
          },
          deleteFile: function(n) {
            return this._onSubmitDelete(n)
          },
          doesExist: function(n) {
            return this._handler.isValid(n)
          },
          drawThumbnail: function(n, i, r, u, f) {
            var e = new t.Promise,
              o, s;
            return this._imageGenerator ? (o = this._thumbnailUrls[n], s = {
              customResizeFunction: f,
              maxSize: r > 0 ? r : null,
              scale: r > 0
            }, !u && t.supportedFeatures.imagePreviews && (o = this.getFile(n)), o == null ? e.failure({
              container: i,
              error: "File or URL not found."
            }) : this._imageGenerator.generate(o, i, s).then(function(n) {
              e.success(n)
            }, function(n, t) {
              e.failure({
                container: n,
                error: t || "Problem generating thumbnail"
              })
            })) : e.failure({
              container: i,
              error: "Missing image generator module"
            }), e
          },
          getButton: function(n) {
            return this._getButton(this._buttonIdsForFileIds[n])
          },
          getEndpoint: function(n) {
            return this._endpointStore.get(n)
          },
          getFile: function(n) {
            var t = this._handler.getFile(n),
              i;
            return t || (i = this._uploadData.retrieve({
              id: n
            }), i && (t = i.file)), t || null
          },
          getInProgress: function() {
            return this._uploadData.retrieve({
              status: [t.status.UPLOADING, t.status.UPLOAD_RETRYING, t.status.QUEUED]
            }).length
          },
          getName: function(n) {
            return this._uploadData.retrieve({
              id: n
            }).name
          },
          getParentId: function(n) {
            var t = this.getUploads({
                id: n
              }),
              i = null;
            return t && t.parentId !== undefined && (i = t.parentId), i
          },
          getResumableFilesData: function() {
            return this._handler.getResumableFilesData()
          },
          getSize: function(n) {
            return this._uploadData.retrieve({
              id: n
            }).size
          },
          getNetUploads: function() {
            return this._netUploaded
          },
          getRemainingAllowedItems: function() {
            var n = this._currentItemLimit;
            return n > 0 ? n - this._netUploadedOrQueued : null
          },
          getUploads: function(n) {
            return this._uploadData.retrieve(n)
          },
          getUuid: function(n) {
            return this._uploadData.retrieve({
              id: n
            }).uuid
          },
          isResumable: function(n) {
            return this._handler.hasResumeRecord(n)
          },
          log: function(n, i) {
            this._options.debug && (!i || i === "info") ? t.log("[Fine Uploader " + t.version + "] " + n) : i && i !== "info" && t.log("[Fine Uploader " + t.version + "] " + n, i)
          },
          pauseUpload: function(n) {
            var i = this._uploadData.retrieve({
              id: n
            });
            if (!t.supportedFeatures.pause || !this._options.chunking.enabled) return !1;
            if (t.indexOf([t.status.UPLOADING, t.status.UPLOAD_RETRYING], i.status) >= 0) {
              if (this._handler.pause(n)) return this._uploadData.setStatus(n, t.status.PAUSED), !0;
              this.log(t.format("Unable to pause file ID {} ({}).", n, this.getName(n)), "error")
            } else this.log(t.format("Ignoring pause for file ID {} ({}).  Not in progress.", n, this.getName(n)), "error");
            return !1
          },
          removeFileRef: function(n) {
            this._handler.expunge(n);
            this._uploadData.removeFileRef(n)
          },
          reset: function() {
            this.log("Resetting uploader...");
            this._handler.reset();
            this._storedIds = [];
            this._autoRetries = [];
            this._retryTimeouts = [];
            this._preventRetries = [];
            this._thumbnailUrls = [];
            t.each(this._buttons, function(n, t) {
              t.reset()
            });
            this._paramsStore.reset();
            this._endpointStore.reset();
            this._netUploadedOrQueued = 0;
            this._netUploaded = 0;
            this._uploadData.reset();
            this._buttonIdsForFileIds = [];
            this._pasteHandler && this._pasteHandler.reset();
            this._options.session.refreshOnReset && this._refreshSessionData();
            this._succeededSinceLastAllComplete = [];
            this._failedSinceLastAllComplete = [];
            this._totalProgress && this._totalProgress.reset();
            this._customResumeDataStore.reset()
          },
          retry: function(n) {
            return this._manualRetry(n)
          },
          scaleImage: function(n, i) {
            var r = this;
            return t.Scaler.prototype.scaleImage(n, i, {
              log: t.bind(r.log, r),
              getFile: t.bind(r.getFile, r),
              uploadData: r._uploadData
            })
          },
          setCustomHeaders: function(n, t) {
            this._customHeadersStore.set(n, t)
          },
          setCustomResumeData: function(n, t) {
            this._customResumeDataStore.set(t, n)
          },
          setDeleteFileCustomHeaders: function(n, t) {
            this._deleteFileCustomHeadersStore.set(n, t)
          },
          setDeleteFileEndpoint: function(n, t) {
            this._deleteFileEndpointStore.set(n, t)
          },
          setDeleteFileParams: function(n, t) {
            this._deleteFileParamsStore.set(n, t)
          },
          setEndpoint: function(n, t) {
            this._endpointStore.set(n, t)
          },
          setForm: function(n) {
            this._updateFormSupportAndParams(n)
          },
          setItemLimit: function(n) {
            this._currentItemLimit = n
          },
          setName: function(n, t) {
            this._uploadData.updateName(n, t)
          },
          setParams: function(n, t) {
            this._paramsStore.set(n, t)
          },
          setUuid: function(n, t) {
            return this._uploadData.uuidChanged(n, t)
          },
          setStatus: function(n, i) {
            var u = this.getUploads({
                id: n
              }),
              r;
            if (!u) throw new t.Error(n + " is not a valid file ID.");
            switch (i) {
              case t.status.DELETED:
                this._onDeleteComplete(n, null, !1);
                break;
              case t.status.DELETE_FAILED:
                this._onDeleteComplete(n, null, !0);
                break;
              default:
                r = "Method setStatus called on '" + name + "' not implemented yet for " + i;
                this.log(r);
                throw new t.Error(r);
            }
          },
          uploadStoredFiles: function() {
            this._storedIds.length === 0 ? this._itemError("noFilesError") : this._uploadStoredFiles()
          }
        };
        t.basePrivateApi = {
          _addCannedFile: function(n) {
            var i = this;
            return this._uploadData.addFile({
              uuid: n.uuid,
              name: n.name,
              size: n.size,
              status: t.status.UPLOAD_SUCCESSFUL,
              onBeforeStatusChange: function(t) {
                n.deleteFileEndpoint && i.setDeleteFileEndpoint(n.deleteFileEndpoint, t);
                n.deleteFileParams && i.setDeleteFileParams(n.deleteFileParams, t);
                n.thumbnailUrl && (i._thumbnailUrls[t] = n.thumbnailUrl);
                i._netUploaded++;
                i._netUploadedOrQueued++
              }
            })
          },
          _annotateWithButtonId: function(n, i) {
            t.isFile(n) && (n.qqButtonId = this._getButtonId(i))
          },
          _batchError: function(n) {
            this._options.callbacks.onError(null, null, n, undefined)
          },
          _createDeleteHandler: function() {
            var n = this;
            return new t.DeleteFileAjaxRequester({
              method: this._options.deleteFile.method.toUpperCase(),
              maxConnections: this._options.maxConnections,
              uuidParamName: this._options.request.uuidName,
              customHeaders: this._deleteFileCustomHeadersStore,
              paramsStore: this._deleteFileParamsStore,
              endpointStore: this._deleteFileEndpointStore,
              cors: this._options.cors,
              log: t.bind(n.log, n),
              onDelete: function(t) {
                n._onDelete(t);
                n._options.callbacks.onDelete(t)
              },
              onDeleteComplete: function(t, i, r) {
                n._onDeleteComplete(t, i, r);
                n._options.callbacks.onDeleteComplete(t, i, r)
              }
            })
          },
          _createPasteHandler: function() {
            var n = this;
            return new t.PasteSupport({
              targetElement: this._options.paste.targetElement,
              callbacks: {
                log: t.bind(n.log, n),
                pasteReceived: function(i) {
                  n._handleCheckedCallback({
                    name: "onPasteReceived",
                    callback: t.bind(n._options.callbacks.onPasteReceived, n, i),
                    onSuccess: t.bind(n._handlePasteSuccess, n, i),
                    identifier: "pasted image"
                  })
                }
              }
            })
          },
          _createStore: function(n, i) {
            var u = {},
              o = n,
              f = {},
              r = i,
              e = function(n) {
                return t.isObject(n) ? t.extend({}, n) : n
              },
              s = function() {
                return t.isFunction(r) ? r() : r
              },
              h = function(n, i) {
                r && t.isObject(i) && t.extend(i, s());
                f[n] && t.extend(i, f[n])
              };
            return {
              set: function(n, t) {
                t == null ? (u = {}, o = e(n)) : u[t] = e(n)
              },
              get: function(n) {
                var t;
                return t = n != null && u[n] ? u[n] : e(o), h(n, t), e(t)
              },
              addReadOnly: function(n, i) {
                t.isObject(u) && (n === null ? t.isFunction(i) ? r = i : (r = r || {}, t.extend(r, i)) : (f[n] = f[n] || {}, t.extend(f[n], i)))
              },
              remove: function(n) {
                return delete u[n]
              },
              reset: function() {
                u = {};
                f = {};
                o = n
              }
            }
          },
          _createUploadDataTracker: function() {
            var n = this;
            return new t.UploadData({
              getName: function(t) {
                return n.getName(t)
              },
              getUuid: function(t) {
                return n.getUuid(t)
              },
              getSize: function(t) {
                return n.getSize(t)
              },
              onStatusChange: function(t, i, r) {
                n._onUploadStatusChange(t, i, r);
                n._options.callbacks.onStatusChange(t, i, r);
                n._maybeAllComplete(t, r);
                n._totalProgress && setTimeout(function() {
                  n._totalProgress.onStatusChange(t, i, r)
                }, 0)
              }
            })
          },
          _createUploadButton: function(n) {
            function e() {
              return t.supportedFeatures.ajaxUploading ? i._options.workarounds.iosEmptyVideos && t.ios() && !t.ios6() && i._isAllowedExtension(f, ".mov") ? !1 : n.multiple === undefined ? i._options.multiple : n.multiple : !1
            }
            var i = this,
              u = n.accept || this._options.validation.acceptFiles,
              f = n.allowedExtensions || this._options.validation.allowedExtensions,
              r;
            return r = new t.UploadButton({
              acceptFiles: u,
              element: n.element,
              focusClass: this._options.classes.buttonFocus,
              folders: n.folders,
              hoverClass: this._options.classes.buttonHover,
              ios8BrowserCrashWorkaround: this._options.workarounds.ios8BrowserCrash,
              multiple: e(),
              name: this._options.request.inputName,
              onChange: function(n) {
                i._onInputChange(n)
              },
              title: n.title == null ? this._options.text.fileInputTitle : n.title
            }), this._disposeSupport.addDisposer(function() {
              r.dispose()
            }), i._buttons.push(r), r
          },
          _createUploadHandler: function(n, i) {
            var r = this,
              u = {},
              f = {
                debug: this._options.debug,
                maxConnections: this._options.maxConnections,
                cors: this._options.cors,
                paramsStore: this._paramsStore,
                endpointStore: this._endpointStore,
                chunking: this._options.chunking,
                resume: this._options.resume,
                blobs: this._options.blobs,
                log: t.bind(r.log, r),
                preventRetryParam: this._options.retry.preventRetryResponseProperty,
                onProgress: function(n, t, i, f) {
                  if (!(i < 0) && !(f < 0)) {
                    if (u[n]) {
                      if (u[n].loaded !== i || u[n].total !== f) {
                        r._onProgress(n, t, i, f);
                        r._options.callbacks.onProgress(n, t, i, f)
                      }
                    } else {
                      r._onProgress(n, t, i, f);
                      r._options.callbacks.onProgress(n, t, i, f)
                    }
                    u[n] = {
                      loaded: i,
                      total: f
                    }
                  }
                },
                onComplete: function(n, i, f, e) {
                  delete u[n];
                  var s = r.getUploads({
                      id: n
                    }).status,
                    o;
                  if (s !== t.status.UPLOAD_SUCCESSFUL && s !== t.status.UPLOAD_FAILED)
                    if (o = r._onComplete(n, i, f, e), o instanceof t.Promise) o.done(function() {
                      r._options.callbacks.onComplete(n, i, f, e)
                    });
                    else r._options.callbacks.onComplete(n, i, f, e)
                },
                onCancel: function(n, i, u) {
                  var f = new t.Promise;
                  return r._handleCheckedCallback({
                    name: "onCancel",
                    callback: t.bind(r._options.callbacks.onCancel, r, n, i),
                    onFailure: f.failure,
                    onSuccess: function() {
                      u.then(function() {
                        r._onCancel(n, i)
                      });
                      f.success()
                    },
                    identifier: n
                  }), f
                },
                onUploadPrep: t.bind(this._onUploadPrep, this),
                onUpload: function(n, i) {
                  r._onUpload(n, i);
                  var u = r._options.callbacks.onUpload(n, i);
                  return t.isGenericPromise(u) ? (r.log(t.format("onUpload for {} returned a Promise - waiting for resolution.", n)), u) : (new t.Promise).success()
                },
                onUploadChunk: function(n, i, u) {
                  r._onUploadChunk(n, u);
                  var f = r._options.callbacks.onUploadChunk(n, i, u);
                  return t.isGenericPromise(f) ? (r.log(t.format("onUploadChunk for {}.{} returned a Promise - waiting for resolution.", n, u.partIndex)), f) : (new t.Promise).success()
                },
                onUploadChunkSuccess: function(n, t) {
                  r._onUploadChunkSuccess(n, t);
                  r._options.callbacks.onUploadChunkSuccess.apply(r, arguments)
                },
                onResume: function(n, t, i, u) {
                  return r._options.callbacks.onResume(n, t, i, u)
                },
                onAutoRetry: function() {
                  return r._onAutoRetry.apply(r, arguments)
                },
                onUuidChanged: function(n, t) {
                  r.log("Server requested UUID change from '" + r.getUuid(n) + "' to '" + t + "'");
                  r.setUuid(n, t)
                },
                getName: t.bind(r.getName, r),
                getUuid: t.bind(r.getUuid, r),
                getSize: t.bind(r.getSize, r),
                setSize: t.bind(r._setSize, r),
                getDataByUuid: function(n) {
                  return r.getUploads({
                    uuid: n
                  })
                },
                isQueued: function(n) {
                  var i = r.getUploads({
                    id: n
                  }).status;
                  return i === t.status.QUEUED || i === t.status.SUBMITTED || i === t.status.UPLOAD_RETRYING || i === t.status.PAUSED
                },
                getIdsInProxyGroup: r._uploadData.getIdsInProxyGroup,
                getIdsInBatch: r._uploadData.getIdsInBatch,
                isInProgress: function(n) {
                  return r.getUploads({
                    id: n
                  }).status === t.status.UPLOADING
                },
                getCustomResumeData: t.bind(r._getCustomResumeData, r),
                setStatus: function(n, t) {
                  r._uploadData.setStatus(n, t)
                }
              };
            return t.each(this._options.request, function(n, t) {
              f[n] = t
            }), f.customHeaders = this._customHeadersStore, n && t.each(n, function(n, t) {
              f[n] = t
            }), new t.UploadHandlerController(f, i)
          },
          _fileOrBlobRejected: function(n) {
            this._netUploadedOrQueued--;
            this._uploadData.setStatus(n, t.status.REJECTED)
          },
          _formatSize: function(n) {
            if (n === 0) return n + this._options.text.sizeSymbols[0];
            var t = -1;
            do n = n / 1e3, t++; while (n > 999);
            return Math.max(n, .1).toFixed(1) + this._options.text.sizeSymbols[t]
          },
          _generateExtraButtonSpecs: function() {
            var n = this;
            this._extraButtonSpecs = {};
            t.each(this._options.extraButtons, function(i, r) {
              var u = r.multiple,
                e = t.extend({}, n._options.validation, !0),
                f = t.extend({}, r);
              u === undefined && (u = n._options.multiple);
              f.validation && t.extend(e, r.validation, !0);
              t.extend(f, {
                multiple: u,
                validation: e
              }, !0);
              n._initExtraButton(f)
            })
          },
          _getButton: function(n) {
            var t = this._extraButtonSpecs[n];
            return t ? t.element : n === this._defaultButtonId ? this._options.button : void 0
          },
          _getButtonId: function(n) {
            var u, r, i = n;
            if (i instanceof t.BlobProxy && (i = i.referenceBlob), i && !t.isBlob(i)) {
              if (t.isFile(i)) return i.qqButtonId;
              if (i.tagName.toLowerCase() === "input" && i.type.toLowerCase() === "file") return i.getAttribute(t.UploadButton.BUTTON_ID_ATTR_NAME);
              if (u = i.getElementsByTagName("input"), t.each(u, function(n, t) {
                  if (t.getAttribute("type") === "file") return r = t, !1
                }), r) return r.getAttribute(t.UploadButton.BUTTON_ID_ATTR_NAME)
            }
          },
          _getCustomResumeData: function(n) {
            return this._customResumeDataStore.get(n)
          },
          _getNotFinished: function() {
            return this._uploadData.retrieve({
              status: [t.status.UPLOADING, t.status.UPLOAD_RETRYING, t.status.QUEUED, t.status.SUBMITTING, t.status.SUBMITTED, t.status.PAUSED]
            }).length
          },
          _getValidationBase: function(n) {
            var t = this._extraButtonSpecs[n];
            return t ? t.validation : this._options.validation
          },
          _getValidationDescriptor: function(n) {
            return n.file instanceof t.BlobProxy ? {
              name: t.getFilename(n.file.referenceBlob),
              size: n.file.referenceBlob.size
            } : {
              name: this.getUploads({
                id: n.id
              }).name,
              size: this.getUploads({
                id: n.id
              }).size
            }
          },
          _getValidationDescriptors: function(n) {
            var r = this,
              i = [];
            return t.each(n, function(n, t) {
              i.push(r._getValidationDescriptor(t))
            }), i
          },
          _handleCameraAccess: function() {
            if (this._options.camera.ios && t.ios()) {
              var r = "image/*;capture=camera",
                u = this._options.camera.button,
                i = u ? this._getButtonId(u) : this._defaultButtonId,
                n = this._options;
              i && i !== this._defaultButtonId && (n = this._extraButtonSpecs[i]);
              n.multiple = !1;
              n.validation.acceptFiles === null ? n.validation.acceptFiles = r : n.validation.acceptFiles += "," + r;
              t.each(this._buttons, function(t, r) {
                if (r.getButtonId() === i) return r.setMultiple(n.multiple), r.setAcceptFiles(n.acceptFiles), !1
              })
            }
          },
          _handleCheckedCallback: function(n) {
            var r = this,
              i = n.callback();
            if (t.isGenericPromise(i)) return this.log(n.name + " - waiting for " + n.name + " promise to be fulfilled for " + n.identifier), i.then(function(t) {
              r.log(n.name + " promise success for " + n.identifier);
              n.onSuccess(t)
            }, function() {
              n.onFailure ? (r.log(n.name + " promise failure for " + n.identifier), n.onFailure()) : r.log(n.name + " promise failure for " + n.identifier)
            });
            if (i !== !1) n.onSuccess(i);
            else n.onFailure ? (this.log(n.name + " - return value was 'false' for " + n.identifier + ".  Invoking failure callback."), n.onFailure()) : this.log(n.name + " - return value was 'false' for " + n.identifier + ".  Will not proceed.");
            return i
          },
          _handleNewFile: function(n, i, r) {
            var u = this,
              o = t.getUniqueId(),
              e = -1,
              s = t.getFilename(n),
              f = n.blob || n,
              h = this._customNewFileHandler ? this._customNewFileHandler : t.bind(u._handleNewFileGeneric, u);
            !t.isInput(f) && f.size >= 0 && (e = f.size);
            h(f, s, o, e, r, i, this._options.request.uuidName, {
              uploadData: u._uploadData,
              paramsStore: u._paramsStore,
              addFileToHandler: function(n, t) {
                u._handler.add(n, t);
                u._netUploadedOrQueued++;
                u._trackButton(n)
              }
            })
          },
          _handleNewFileGeneric: function(n, t, i, r, u, f) {
            var e = this._uploadData.addFile({
              uuid: i,
              name: t,
              size: r,
              batchId: f,
              file: n
            });
            this._handler.add(e, n);
            this._trackButton(e);
            this._netUploadedOrQueued++;
            u.push({
              id: e,
              file: n
            })
          },
          _handlePasteSuccess: function(n, t) {
            var r = n.type.split("/")[1],
              i = t;
            i == null && (i = this._options.paste.defaultName);
            i += "." + r;
            this.addFiles({
              name: i,
              blob: n
            })
          },
          _handleDeleteSuccess: function(n) {
            if (this.getUploads({
                id: n
              }).status !== t.status.DELETED) {
              var i = this.getName(n);
              this._netUploadedOrQueued--;
              this._netUploaded--;
              this._handler.expunge(n);
              this._uploadData.setStatus(n, t.status.DELETED);
              this.log("Delete request for '" + i + "' has succeeded.")
            }
          },
          _handleDeleteFailed: function(n, i) {
            var r = this.getName(n);
            if (this._uploadData.setStatus(n, t.status.DELETE_FAILED), this.log("Delete request for '" + r + "' has failed.", "error"), i && i.withCredentials !== undefined) this._options.callbacks.onError(n, r, "Delete request failed with response code " + i.status, i);
            else this._options.callbacks.onError(n, r, "Delete request failed", i)
          },
          _initExtraButton: function(n) {
            var t = this._createUploadButton({
              accept: n.validation.acceptFiles,
              allowedExtensions: n.validation.allowedExtensions,
              element: n.element,
              folders: n.folders,
              multiple: n.multiple,
              title: n.fileInputTitle
            });
            this._extraButtonSpecs[t.getButtonId()] = n
          },
          _initFormSupportAndParams: function() {
            this._formSupport = t.FormSupport && new t.FormSupport(this._options.form, t.bind(this.uploadStoredFiles, this), t.bind(this.log, this));
            this._formSupport && this._formSupport.attachedToForm ? (this._paramsStore = this._createStore(this._options.request.params, this._formSupport.getFormInputsAsObject), this._options.autoUpload = this._formSupport.newAutoUpload, this._formSupport.newEndpoint && (this._options.request.endpoint = this._formSupport.newEndpoint)) : this._paramsStore = this._createStore(this._options.request.params)
          },
          _isDeletePossible: function() {
            return !t.DeleteFileAjaxRequester || !this._options.deleteFile.enabled ? !1 : this._options.cors.expected ? t.supportedFeatures.deleteFileCorsXhr ? !0 : t.supportedFeatures.deleteFileCorsXdr && this._options.cors.allowXdr ? !0 : !1 : !0
          },
          _isAllowedExtension: function(n, i) {
            var r = !1;
            return n.length ? (t.each(n, function(n, u) {
              if (t.isString(u)) {
                var f = new RegExp("\\." + u + "$", "i");
                if (i.match(f) != null) return r = !0, !1
              }
            }), r) : !0
          },
          _itemError: function(n, i, r) {
            function f(n, t) {
              u = u.replace(n, t)
            }
            var u = this._options.messages[n],
              s = [],
              h = [].concat(i),
              c = h[0],
              a = this._getButtonId(r),
              e = this._getValidationBase(a),
              l, o;
            t.each(e.allowedExtensions, function(n, i) {
              t.isString(i) && s.push(i)
            });
            l = s.join(", ").toLowerCase();
            f("{file}", this._options.formatFileName(c));
            f("{extensions}", l);
            f("{sizeLimit}", this._formatSize(e.sizeLimit));
            f("{minSizeLimit}", this._formatSize(e.minSizeLimit));
            o = u.match(/(\{\w+\})/g);
            o !== null && t.each(o, function(n, t) {
              f(t, h[n])
            });
            this._options.callbacks.onError(null, c, u, undefined);
            return u
          },
          _manualRetry: function(n, i) {
            if (this._onBeforeManualRetry(n)) return this._netUploadedOrQueued++, this._uploadData.setStatus(n, t.status.UPLOAD_RETRYING), i ? i(n) : this._handler.retry(n), !0
          },
          _maybeAllComplete: function(n, i) {
            var r = this,
              u = this._getNotFinished();
            i === t.status.UPLOAD_SUCCESSFUL ? this._succeededSinceLastAllComplete.push(n) : i === t.status.UPLOAD_FAILED && this._failedSinceLastAllComplete.push(n);
            u === 0 && (this._succeededSinceLastAllComplete.length || this._failedSinceLastAllComplete.length) && setTimeout(function() {
              r._onAllComplete(r._succeededSinceLastAllComplete, r._failedSinceLastAllComplete)
            }, 0)
          },
          _maybeHandleIos8SafariWorkaround: function() {
            var n = this;
            if (this._options.workarounds.ios8SafariUploads && t.ios800() && t.iosSafari()) {
              setTimeout(function() {
                window.alert(n._options.messages.unsupportedBrowserIos8Safari)
              }, 0);
              throw new t.Error(this._options.messages.unsupportedBrowserIos8Safari);
            }
          },
          _maybeParseAndSendUploadError: function(n, t, i, r) {
            if (!i.success)
              if (r && r.status !== 200 && !i.error) this._options.callbacks.onError(n, t, "XHR returned response code " + r.status, r);
              else {
                var u = i.error ? i.error : this._options.text.defaultResponseError;
                this._options.callbacks.onError(n, t, u, r)
              }
          },
          _maybeProcessNextItemAfterOnValidateCallback: function(n, i, r, u, f) {
            var e = this;
            if (i.length > r)
              if (n || !this._options.validation.stopOnFirstInvalidFile) setTimeout(function() {
                var n = e._getValidationDescriptor(i[r]),
                  o = e._getButtonId(i[r].file),
                  s = e._getButton(o);
                e._handleCheckedCallback({
                  name: "onValidate",
                  callback: t.bind(e._options.callbacks.onValidate, e, n, s),
                  onSuccess: t.bind(e._onValidateCallbackSuccess, e, i, r, u, f),
                  onFailure: t.bind(e._onValidateCallbackFailure, e, i, r, u, f),
                  identifier: "Item '" + n.name + "', size: " + n.size
                })
              }, 0);
              else if (!n)
              for (; r < i.length; r++) e._fileOrBlobRejected(i[r].id)
          },
          _onAllComplete: function(n, i) {
            this._totalProgress && this._totalProgress.onAllComplete(n, i, this._preventRetries);
            this._options.callbacks.onAllComplete(t.extend([], n), t.extend([], i));
            this._succeededSinceLastAllComplete = [];
            this._failedSinceLastAllComplete = []
          },
          _onAutoRetry: function(n, i, r, u, f) {
            var e = this,
              o;
            if (e._preventRetries[n] = r[e._options.retry.preventRetryResponseProperty], e._shouldAutoRetry(n)) {
              o = e._options.retry.autoAttemptDelay * 1e3;
              e._maybeParseAndSendUploadError.apply(e, arguments);
              e._options.callbacks.onAutoRetry(n, i, e._autoRetries[n]);
              return e._onBeforeAutoRetry(n, i), e._uploadData.setStatus(n, t.status.UPLOAD_RETRYING), e._retryTimeouts[n] = setTimeout(function() {
                e.log("Starting retry for " + i + "...");
                f ? f(n) : e._handler.retry(n)
              }, o), !0
            }
          },
          _onBeforeAutoRetry: function(n, t) {
            this.log("Waiting " + this._options.retry.autoAttemptDelay + " seconds before retrying " + t + "...")
          },
          _onBeforeManualRetry: function(n) {
            var i = this._currentItemLimit,
              t;
            return this._preventRetries[n] ? (this.log("Retries are forbidden for id " + n, "warn"), !1) : this._handler.isValid(n) ? (t = this.getName(n), this._options.callbacks.onManualRetry(n, t) === !1) ? !1 : i > 0 && this._netUploadedOrQueued + 1 > i ? (this._itemError("retryFailTooManyItems"), !1) : (this.log("Retrying upload for '" + t + "' (id: " + n + ")..."), !0) : (this.log("'" + n + "' is not a valid file ID", "error"), !1)
          },
          _onCancel: function(n) {
            this._netUploadedOrQueued--;
            clearTimeout(this._retryTimeouts[n]);
            var i = t.indexOf(this._storedIds, n);
            !this._options.autoUpload && i >= 0 && this._storedIds.splice(i, 1);
            this._uploadData.setStatus(n, t.status.CANCELED)
          },
          _onComplete: function(n, i, r, u) {
            return r.success ? (r.thumbnailUrl && (this._thumbnailUrls[n] = r.thumbnailUrl), this._netUploaded++, this._uploadData.setStatus(n, t.status.UPLOAD_SUCCESSFUL)) : (this._netUploadedOrQueued--, this._uploadData.setStatus(n, t.status.UPLOAD_FAILED), r[this._options.retry.preventRetryResponseProperty] === !0 && (this._preventRetries[n] = !0)), this._maybeParseAndSendUploadError(n, i, r, u), r.success ? !0 : !1
          },
          _onDelete: function(n) {
            this._uploadData.setStatus(n, t.status.DELETING)
          },
          _onDeleteComplete: function(n, t, i) {
            var r = this.getName(n);
            i ? this._handleDeleteFailed(n, t) : this._handleDeleteSuccess(n)
          },
          _onInputChange: function(n) {
            var i;
            if (t.supportedFeatures.ajaxUploading) {
              for (i = 0; i < n.files.length; i++) this._annotateWithButtonId(n.files[i], n);
              this.addFiles(n.files)
            } else n.value.length > 0 && this.addFiles(n);
            t.each(this._buttons, function(n, t) {
              t.reset()
            })
          },
          _onProgress: function(n, t, i, r) {
            this._totalProgress && this._totalProgress.onIndividualProgress(n, i, r)
          },
          _onSubmit: function() {},
          _onSubmitCallbackSuccess: function(n) {
            this._onSubmit.apply(this, arguments);
            this._uploadData.setStatus(n, t.status.SUBMITTED);
            this._onSubmitted.apply(this, arguments);
            this._options.autoUpload ? (this._options.callbacks.onSubmitted.apply(this, arguments), this._uploadFile(n)) : (this._storeForLater(n), this._options.callbacks.onSubmitted.apply(this, arguments))
          },
          _onSubmitDelete: function(n, i, r) {
            var u = this.getUuid(n),
              f;
            return i && (f = t.bind(i, this, n, u, r)), this._isDeletePossible() ? (this._handleCheckedCallback({
              name: "onSubmitDelete",
              callback: t.bind(this._options.callbacks.onSubmitDelete, this, n),
              onSuccess: f || t.bind(this._deleteHandler.sendDelete, this, n, u, r),
              identifier: n
            }), !0) : (this.log("Delete request ignored for ID " + n + ", delete feature is disabled or request not possible due to CORS on a user agent that does not support pre-flighting.", "warn"), !1)
          },
          _onSubmitted: function() {},
          _onTotalProgress: function(n, t) {
            this._options.callbacks.onTotalProgress(n, t)
          },
          _onUploadPrep: function() {},
          _onUpload: function(n) {
            this._uploadData.setStatus(n, t.status.UPLOADING)
          },
          _onUploadChunk: function() {},
          _onUploadChunkSuccess: function(n) {
            !this._preventRetries[n] && this._options.retry.enableAuto && (this._autoRetries[n] = 0)
          },
          _onUploadStatusChange: function(n, i, r) {
            r === t.status.PAUSED && clearTimeout(this._retryTimeouts[n])
          },
          _onValidateBatchCallbackFailure: function(n) {
            var i = this;
            t.each(n, function(n, t) {
              i._fileOrBlobRejected(t.id)
            })
          },
          _onValidateBatchCallbackSuccess: function(n, i, r, u, f) {
            var o, e = this._currentItemLimit,
              s = this._netUploadedOrQueued;
            e === 0 || s <= e ? i.length > 0 ? this._handleCheckedCallback({
              name: "onValidate",
              callback: t.bind(this._options.callbacks.onValidate, this, n[0], f),
              onSuccess: t.bind(this._onValidateCallbackSuccess, this, i, 0, r, u),
              onFailure: t.bind(this._onValidateCallbackFailure, this, i, 0, r, u),
              identifier: "Item '" + i[0].file.name + "', size: " + i[0].file.size
            }) : this._itemError("noFilesError") : (this._onValidateBatchCallbackFailure(i), o = this._options.messages.tooManyItemsError.replace(/\{netItems\}/g, s).replace(/\{itemLimit\}/g, e), this._batchError(o))
          },
          _onValidateCallbackFailure: function(n, t, i, r) {
            var u = t + 1;
            this._fileOrBlobRejected(n[t].id, n[t].file.name);
            this._maybeProcessNextItemAfterOnValidateCallback(!1, n, u, i, r)
          },
          _onValidateCallbackSuccess: function(n, t, i, r) {
            var u = this,
              f = t + 1,
              e = this._getValidationDescriptor(n[t]);
            this._validateFileOrBlobData(n[t], e).then(function() {
              u._upload(n[t].id, i, r);
              u._maybeProcessNextItemAfterOnValidateCallback(!0, n, f, i, r)
            }, function() {
              u._maybeProcessNextItemAfterOnValidateCallback(!1, n, f, i, r)
            })
          },
          _prepareItemsForUpload: function(n, i, r) {
            if (n.length === 0) {
              this._itemError("noFilesError");
              return
            }
            var u = this._getValidationDescriptors(n),
              e = this._getButtonId(n[0].file),
              f = this._getButton(e);
            this._handleCheckedCallback({
              name: "onValidateBatch",
              callback: t.bind(this._options.callbacks.onValidateBatch, this, u, f),
              onSuccess: t.bind(this._onValidateBatchCallbackSuccess, this, u, n, i, r, f),
              onFailure: t.bind(this._onValidateBatchCallbackFailure, this, n),
              identifier: "batch validation"
            })
          },
          _preventLeaveInProgress: function() {
            var n = this;
            this._disposeSupport.attach(window, "beforeunload", function(t) {
              if (n.getInProgress()) return t = t || window.event, t.returnValue = n._options.messages.onLeave, n._options.messages.onLeave
            })
          },
          _refreshSessionData: function() {
            var n = this,
              i = this._options.session;
            t.Session && this._options.session.endpoint != null && (this._session || (t.extend(i, {
              cors: this._options.cors
            }), i.log = t.bind(this.log, this), i.addFileRecord = t.bind(this._addCannedFile, this), this._session = new t.Session(i)), setTimeout(function() {
              n._session.refresh().then(function(t, i) {
                n._sessionRequestComplete();
                n._options.callbacks.onSessionRequestComplete(t, !0, i)
              }, function(t, i) {
                n._options.callbacks.onSessionRequestComplete(t, !1, i)
              })
            }, 0))
          },
          _sessionRequestComplete: function() {},
          _setSize: function(n, t) {
            this._uploadData.updateSize(n, t);
            this._totalProgress && this._totalProgress.onNewSize(n)
          },
          _shouldAutoRetry: function(n) {
            var i = this._uploadData.retrieve({
              id: n
            });
            return !this._preventRetries[n] && this._options.retry.enableAuto && i.status !== t.status.PAUSED && (this._autoRetries[n] === undefined && (this._autoRetries[n] = 0), this._autoRetries[n] < this._options.retry.maxAutoAttempts) ? (this._autoRetries[n] += 1, !0) : !1
          },
          _storeForLater: function(n) {
            this._storedIds.push(n)
          },
          _trackButton: function(n) {
            var i;
            i = t.supportedFeatures.ajaxUploading ? this._handler.getFile(n).qqButtonId : this._getButtonId(this._handler.getInput(n));
            i && (this._buttonIdsForFileIds[n] = i)
          },
          _updateFormSupportAndParams: function(n) {
            this._options.form.element = n;
            this._formSupport = t.FormSupport && new t.FormSupport(this._options.form, t.bind(this.uploadStoredFiles, this), t.bind(this.log, this));
            this._formSupport && this._formSupport.attachedToForm && (this._paramsStore.addReadOnly(null, this._formSupport.getFormInputsAsObject), this._options.autoUpload = this._formSupport.newAutoUpload, this._formSupport.newEndpoint && this.setEndpoint(this._formSupport.newEndpoint))
          },
          _upload: function(n, i, r) {
            var u = this.getName(n);
            i && this.setParams(i, n);
            r && this.setEndpoint(r, n);
            this._handleCheckedCallback({
              name: "onSubmit",
              callback: t.bind(this._options.callbacks.onSubmit, this, n, u),
              onSuccess: t.bind(this._onSubmitCallbackSuccess, this, n, u),
              onFailure: t.bind(this._fileOrBlobRejected, this, n, u),
              identifier: n
            })
          },
          _uploadFile: function(n) {
            this._handler.upload(n) || this._uploadData.setStatus(n, t.status.QUEUED)
          },
          _uploadStoredFiles: function() {
            for (var i, n, r = this; this._storedIds.length;) i = this._storedIds.shift(), this._uploadFile(i);
            n = this.getUploads({
              status: t.status.SUBMITTING
            }).length;
            n && (t.log("Still waiting for " + n + " files to clear submit queue. Will re-parse stored IDs array shortly."), setTimeout(function() {
              r._uploadStoredFiles()
            }, 1e3))
          },
          _validateFileOrBlobData: function(n, i) {
            var s = this,
              u = function() {
                return n.file instanceof t.BlobProxy ? n.file.referenceBlob : n.file
              }(),
              f = i.name,
              e = i.size,
              h = this._getButtonId(n.file),
              o = this._getValidationBase(h),
              r = new t.Promise;
            return (r.then(function() {}, function() {
              s._fileOrBlobRejected(n.id, f)
            }), t.isFileOrInput(u) && !this._isAllowedExtension(o.allowedExtensions, f)) ? (this._itemError("typeError", f, u), r.failure()) : !this._options.validation.allowEmpty && e === 0 ? (this._itemError("emptyError", f, u), r.failure()) : e > 0 && o.sizeLimit && e > o.sizeLimit ? (this._itemError("sizeError", f, u), r.failure()) : e > 0 && e < o.minSizeLimit ? (this._itemError("minSizeError", f, u), r.failure()) : (t.ImageValidation && t.supportedFeatures.imagePreviews && t.isFile(u) ? new t.ImageValidation(u, t.bind(s.log, s)).validate(o.image).then(r.success, function(n) {
              s._itemError(n + "ImageError", f, u);
              r.failure()
            }) : r.success(), r)
          },
          _wrapCallbacks: function() {
            var n, t, i;
            n = this;
            t = function(t, i, r) {
              var u;
              try {
                return i.apply(n, r)
              } catch (f) {
                u = f.message || f.toString();
                n.log("Caught exception in '" + t + "' callback - " + u, "error")
              }
            };
            for (i in this._options.callbacks)(function() {
              var r, u;
              r = i;
              u = n._options.callbacks[r];
              n._options.callbacks[r] = function() {
                return t(r, u, arguments)
              }
            })()
          }
        }
      }(),
      function() {
        "use strict";
        t.FineUploaderBasic = function(n) {
          var i = this;
          this._options = {
            debug: !1,
            button: null,
            multiple: !0,
            maxConnections: 3,
            disableCancelForFormUploads: !1,
            autoUpload: !0,
            warnBeforeUnload: !0,
            request: {
              customHeaders: {},
              endpoint: "/server/upload",
              filenameParam: "qqfilename",
              forceMultipart: !0,
              inputName: "qqfile",
              method: "POST",
              omitDefaultParams: !1,
              params: {},
              paramsInBody: !0,
              requireSuccessJson: !0,
              totalFileSizeName: "qqtotalfilesize",
              uuidName: "qquuid"
            },
            validation: {
              allowedExtensions: [],
              sizeLimit: 0,
              minSizeLimit: 0,
              itemLimit: 0,
              stopOnFirstInvalidFile: !0,
              acceptFiles: null,
              image: {
                maxHeight: 0,
                maxWidth: 0,
                minHeight: 0,
                minWidth: 0
              },
              allowEmpty: !1
            },
            callbacks: {
              onSubmit: function() {},
              onSubmitted: function() {},
              onComplete: function() {},
              onAllComplete: function() {},
              onCancel: function() {},
              onUpload: function() {},
              onUploadChunk: function() {},
              onUploadChunkSuccess: function() {},
              onResume: function() {},
              onProgress: function() {},
              onTotalProgress: function() {},
              onError: function() {},
              onAutoRetry: function() {},
              onManualRetry: function() {},
              onValidateBatch: function() {},
              onValidate: function() {},
              onSubmitDelete: function() {},
              onDelete: function() {},
              onDeleteComplete: function() {},
              onPasteReceived: function() {},
              onStatusChange: function() {},
              onSessionRequestComplete: function() {}
            },
            messages: {
              typeError: "{file} has an invalid extension. Valid extension(s): {extensions}.",
              sizeError: "{file} is too large, maximum file size is {sizeLimit}.",
              minSizeError: "{file} is too small, minimum file size is {minSizeLimit}.",
              emptyError: "{file} is empty, please select files again without it.",
              noFilesError: "No files to upload.",
              tooManyItemsError: "Too many items ({netItems}) would be uploaded.  Item limit is {itemLimit}.",
              maxHeightImageError: "Image is too tall.",
              maxWidthImageError: "Image is too wide.",
              minHeightImageError: "Image is not tall enough.",
              minWidthImageError: "Image is not wide enough.",
              retryFailTooManyItems: "Retry failed - you have reached your file limit.",
              onLeave: "The files are being uploaded, if you leave now the upload will be canceled.",
              unsupportedBrowserIos8Safari: "Unrecoverable error - this browser does not permit file uploading of any kind due to serious bugs in iOS8 Safari.  Please use iOS8 Chrome until Apple fixes these issues."
            },
            retry: {
              enableAuto: !1,
              maxAutoAttempts: 3,
              autoAttemptDelay: 5,
              preventRetryResponseProperty: "preventRetry"
            },
            classes: {
              buttonHover: "qq-upload-button-hover",
              buttonFocus: "qq-upload-button-focus"
            },
            chunking: {
              enabled: !1,
              concurrent: {
                enabled: !1
              },
              mandatory: !1,
              paramNames: {
                partIndex: "qqpartindex",
                partByteOffset: "qqpartbyteoffset",
                chunkSize: "qqchunksize",
                totalFileSize: "qqtotalfilesize",
                totalParts: "qqtotalparts"
              },
              partSize: function() {
                return 2e6
              },
              success: {
                endpoint: null,
                headers: function() {
                  return null
                },
                jsonPayload: !1,
                method: "POST",
                params: function() {
                  return null
                },
                resetOnStatus: []
              }
            },
            resume: {
              enabled: !1,
              recordsExpireIn: 7,
              paramNames: {
                resuming: "qqresume"
              },
              customKeys: function() {
                return []
              }
            },
            formatFileName: function(n) {
              return n
            },
            text: {
              defaultResponseError: "Upload failure reason unknown",
              fileInputTitle: "file input",
              sizeSymbols: ["kB", "MB", "GB", "TB", "PB", "EB"]
            },
            deleteFile: {
              enabled: !1,
              method: "DELETE",
              endpoint: "/server/upload",
              customHeaders: {},
              params: {}
            },
            cors: {
              expected: !1,
              sendCredentials: !1,
              allowXdr: !1
            },
            blobs: {
              defaultName: "misc_data"
            },
            paste: {
              targetElement: null,
              defaultName: "pasted_image"
            },
            camera: {
              ios: !1,
              button: null
            },
            extraButtons: [],
            session: {
              endpoint: null,
              params: {},
              customHeaders: {},
              refreshOnReset: !0
            },
            form: {
              element: "qq-form",
              autoUpload: !1,
              interceptSubmit: !0
            },
            scaling: {
              customResizer: null,
              sendOriginal: !0,
              orient: !0,
              defaultType: null,
              defaultQuality: 80,
              failureText: "Failed to scale",
              includeExif: !1,
              sizes: []
            },
            workarounds: {
              iosEmptyVideos: !0,
              ios8SafariUploads: !0,
              ios8BrowserCrash: !1
            }
          };
          t.extend(this._options, n, !0);
          this._buttons = [];
          this._extraButtonSpecs = {};
          this._buttonIdsForFileIds = [];
          this._wrapCallbacks();
          this._disposeSupport = new t.DisposeSupport;
          this._storedIds = [];
          this._autoRetries = [];
          this._retryTimeouts = [];
          this._preventRetries = [];
          this._thumbnailUrls = [];
          this._netUploadedOrQueued = 0;
          this._netUploaded = 0;
          this._uploadData = this._createUploadDataTracker();
          this._initFormSupportAndParams();
          this._customHeadersStore = this._createStore(this._options.request.customHeaders);
          this._deleteFileCustomHeadersStore = this._createStore(this._options.deleteFile.customHeaders);
          this._deleteFileParamsStore = this._createStore(this._options.deleteFile.params);
          this._endpointStore = this._createStore(this._options.request.endpoint);
          this._deleteFileEndpointStore = this._createStore(this._options.deleteFile.endpoint);
          this._handler = this._createUploadHandler();
          this._deleteHandler = t.DeleteFileAjaxRequester && this._createDeleteHandler();
          this._options.button && (this._defaultButtonId = this._createUploadButton({
            element: this._options.button,
            title: this._options.text.fileInputTitle
          }).getButtonId());
          this._generateExtraButtonSpecs();
          this._handleCameraAccess();
          this._options.paste.targetElement && (t.PasteSupport ? this._pasteHandler = this._createPasteHandler() : this.log("Paste support module not found", "error"));
          this._options.warnBeforeUnload && this._preventLeaveInProgress();
          this._imageGenerator = t.ImageGenerator && new t.ImageGenerator(t.bind(this.log, this));
          this._refreshSessionData();
          this._succeededSinceLastAllComplete = [];
          this._failedSinceLastAllComplete = [];
          this._scaler = t.Scaler && new t.Scaler(this._options.scaling, t.bind(this.log, this)) || {};
          this._scaler.enabled && (this._customNewFileHandler = t.bind(this._scaler.handleNewFile, this._scaler));
          t.TotalProgress && t.supportedFeatures.progressBar && (this._totalProgress = new t.TotalProgress(t.bind(this._onTotalProgress, this), function(n) {
            var t = i._uploadData.retrieve({
              id: n
            });
            return t && t.size || 0
          }));
          this._currentItemLimit = this._options.validation.itemLimit;
          this._customResumeDataStore = this._createStore()
        };
        t.FineUploaderBasic.prototype = t.basePublicApi;
        t.extend(t.FineUploaderBasic.prototype, t.basePrivateApi)
      }();
    t.AjaxRequester = function(n) {
      "use strict";

      function a() {
        return t.indexOf(["GET", "POST", "HEAD"], i.method) >= 0
      }

      function v() {
        var n = !1;
        return t.each(n, function(i, r) {
          if (t.indexOf(["Accept", "Accept-Language", "Content-Language", "Content-Type"], r) < 0) return n = !0, !1
        }), n
      }

      function o(n) {
        return i.cors.expected && n.withCredentials === undefined
      }

      function y() {
        var n;
        return (window.XMLHttpRequest || window.ActiveXObject) && (n = t.createXhrInstance(), n.withCredentials === undefined && (n = new XDomainRequest, n.onload = function() {}, n.onerror = function() {}, n.ontimeout = function() {}, n.onprogress = function() {})), n
      }

      function f(n, u) {
        var f = r[n] && r[n].xhr;
        return f || (f = u ? u : i.cors.expected ? y() : t.createXhrInstance(), r[n].xhr = f), f
      }

      function c(n) {
        var e = t.indexOf(u, n),
          f = i.maxConnections,
          o;
        delete r[n];
        u.splice(e, 1);
        u.length >= f && e < f && (o = u[f - 1], l(o))
      }

      function h(n, t) {
        var r = f(n),
          s = i.method,
          u = t === !0;
        c(n);
        u ? e(s + " request for " + n + " has failed", "error") : o(r) || tt(r.status) || (u = !0, e(s + " request for " + n + " has failed - response code " + r.status, "error"));
        i.onComplete(n, r, u)
      }

      function p(n) {
        var f = r[n].additionalParams,
          e = i.mandatedParams,
          u;
        return i.paramsStore.get && (u = i.paramsStore.get(n)), f && t.each(f, function(n, t) {
          u = u || {};
          u[n] = t
        }), e && t.each(e, function(n, t) {
          u = u || {};
          u[n] = t
        }), u
      }

      function l(n, u) {
        var h = f(n, u),
          l = i.method,
          c = p(n),
          a = r[n].payload,
          v;
        i.onSend(n);
        return v = w(n, c, r[n].additionalQueryParams), o(h) ? (h.onload = d(n), h.onerror = g(n)) : h.onreadystatechange = b(n), k(n), h.open(l, v, !0), i.cors.expected && i.cors.sendCredentials && !o(h) && (h.withCredentials = !0), nt(n), e("Sending " + l + " request for " + n), a ? h.send(a) : s || !c ? h.send() : c && i.contentType && i.contentType.toLowerCase().indexOf("application/x-www-form-urlencoded") >= 0 ? h.send(t.obj2url(c, "")) : c && i.contentType && i.contentType.toLowerCase().indexOf("application/json") >= 0 ? h.send(JSON.stringify(c)) : h.send(c), h
      }

      function w(n, u, f) {
        var e = i.endpointStore.get(n),
          o = r[n].addToPath;
        return o != undefined && (e += "/" + o), s && u && (e = t.obj2url(u, e)), f && (e = t.obj2url(f, e)), e
      }

      function b(n) {
        return function() {
          f(n).readyState === 4 && h(n)
        }
      }

      function k(n) {
        var t = i.onProgress;
        t && (f(n).upload.onprogress = function(i) {
          i.lengthComputable && t(n, i.loaded, i.total)
        })
      }

      function d(n) {
        return function() {
          h(n)
        }
      }

      function g(n) {
        return function() {
          h(n, !0)
        }
      }

      function nt(n) {
        var u = f(n),
          e = i.customHeaders,
          c = r[n].additionalHeaders || {},
          h = i.method,
          s = {};
        o(u) || (i.acceptHeader && u.setRequestHeader("Accept", i.acceptHeader), i.allowXRequestedWithAndCacheControl && (i.cors.expected && a() && !v(e) || (u.setRequestHeader("X-Requested-With", "XMLHttpRequest"), u.setRequestHeader("Cache-Control", "no-cache"))), i.contentType && (h === "POST" || h === "PUT") && u.setRequestHeader("Content-Type", i.contentType), t.extend(s, t.isFunction(e) ? e(n) : e), t.extend(s, c), t.each(s, function(n, t) {
          u.setRequestHeader(n, t)
        }))
      }

      function tt(n) {
        return t.indexOf(i.successfulResponseCodes[i.method], n) >= 0
      }

      function it(n, t, f, e, o, s, h) {
        r[n] = {
          addToPath: f,
          additionalParams: e,
          additionalQueryParams: o,
          additionalHeaders: s,
          payload: h
        };
        var c = u.push(n);
        if (c <= i.maxConnections) return l(n, t)
      }
      var e, s, u = [],
        r = {},
        i = {
          acceptHeader: null,
          validMethods: ["PATCH", "POST", "PUT"],
          method: "POST",
          contentType: "application/x-www-form-urlencoded",
          maxConnections: 3,
          customHeaders: {},
          endpointStore: {},
          paramsStore: {},
          mandatedParams: {},
          allowXRequestedWithAndCacheControl: !0,
          successfulResponseCodes: {
            DELETE: [200, 202, 204],
            PATCH: [200, 201, 202, 203, 204],
            POST: [200, 201, 202, 203, 204],
            PUT: [200, 201, 202, 203, 204],
            GET: [200]
          },
          cors: {
            expected: !1,
            sendCredentials: !1
          },
          log: function() {},
          onSend: function() {},
          onComplete: function() {},
          onProgress: null
        };
      if (t.extend(i, n), e = i.log, t.indexOf(i.validMethods, i.method) < 0) throw new Error("'" + i.method + "' is not a supported method for this type of request!");
      s = i.method === "GET" || i.method === "DELETE";
      t.extend(this, {
        initTransport: function(n) {
          var u, r, f, e, o, s;
          return {
            withPath: function(n) {
              return u = n, this
            },
            withParams: function(n) {
              return r = n, this
            },
            withQueryParams: function(n) {
              return s = n, this
            },
            withHeaders: function(n) {
              return f = n, this
            },
            withPayload: function(n) {
              return e = n, this
            },
            withCacheBuster: function() {
              return o = !0, this
            },
            send: function(h) {
              return o && t.indexOf(["GET", "DELETE"], i.method) >= 0 && (r.qqtimestamp = (new Date).getTime()), it(n, h, u, r, s, f, e)
            }
          }
        },
        canceled: function(n) {
          c(n)
        }
      })
    };
    t.UploadHandler = function(n) {
      "use strict";
      var r = n.proxy,
        i = {},
        u = r.onCancel,
        f = r.getName;
      t.extend(this, {
        add: function(n, t) {
          i[n] = t;
          i[n].temp = {}
        },
        cancel: function(n) {
          var r = this,
            e = new t.Promise,
            o = u(n, f(n), e);
          o.then(function() {
            r.isValid(n) && (i[n].canceled = !0, r.expunge(n));
            e.success()
          })
        },
        expunge: function(n) {
          delete i[n]
        },
        getThirdPartyFileId: function(n) {
          return i[n].key
        },
        isValid: function(n) {
          return i[n] !== undefined
        },
        reset: function() {
          i = {}
        },
        _getFileState: function(n) {
          return i[n]
        },
        _setThirdPartyFileId: function(n, t) {
          i[n].key = t
        },
        _wasCanceled: function(n) {
          return !!i[n].canceled
        }
      })
    };
    t.UploadHandlerController = function(n, i) {
      "use strict";
      var h = this,
        l = !1,
        c = !1,
        a, o, r, u = {
          paramsStore: {},
          maxConnections: 3,
          chunking: {
            enabled: !1,
            multiple: {
              enabled: !1
            }
          },
          log: function() {},
          onProgress: function() {},
          onComplete: function() {},
          onCancel: function() {},
          onUploadPrep: function() {},
          onUpload: function() {},
          onUploadChunk: function() {},
          onUploadChunkSuccess: function() {},
          onAutoRetry: function() {},
          onResume: function() {},
          onUuidChanged: function() {},
          getName: function() {},
          setSize: function() {},
          isQueued: function() {},
          getIdsInProxyGroup: function() {},
          getIdsInBatch: function() {},
          isInProgress: function() {}
        },
        s = {
          done: function(n, t, i, f) {
            var e = r._getChunkData(n, t);
            r._getFileState(n).attemptingResume = !1;
            delete r._getFileState(n).temp.chunkProgress[t];
            r._getFileState(n).loaded += e.size;
            u.onUploadChunkSuccess(n, r._getChunkDataForCallback(e), i, f)
          },
          finalize: function(n) {
            var t = u.getSize(n),
              i = u.getName(n);
            o("All chunks have been uploaded for " + n + " - finalizing....");
            r.finalizeChunks(n).then(function(f, s) {
              o("Finalize successful for " + n);
              var h = e.normalizeResponse(f, !0);
              u.onProgress(n, i, t, t);
              r._maybeDeletePersistedChunkData(n);
              e.cleanup(n, h, s)
            }, function(t, r) {
              var f = e.normalizeResponse(t, !1);
              o("Problem finalizing chunks for file ID " + n + " - " + f.error, "error");
              (f.reset || r && u.chunking.success.resetOnStatus.indexOf(r.status) >= 0) && s.reset(n);
              u.onAutoRetry(n, i, f, r) || e.cleanup(n, f, r)
            })
          },
          handleFailure: function(n, i, h, l) {
            var p = u.getName(i),
              a, v, y;
            o("Chunked upload request failed for " + i + ", chunk " + n);
            r.clearCachedChunk(i, n);
            a = e.normalizeResponse(h, !1);
            a.reset ? s.reset(i) : (y = r._getFileState(i).chunking.inProgress, v = y ? t.indexOf(y, n) : -1, v >= 0 && (r._getFileState(i).chunking.inProgress.splice(v, 1), r._getFileState(i).chunking.remaining.unshift(n)));
            r._getFileState(i).temp.ignoreFailure || (c && (r._getFileState(i).temp.ignoreFailure = !0, o(t.format("Going to attempt to abort these chunks: {}. These are currently in-progress: {}.", JSON.stringify(Object.keys(r._getXhrs(i))), JSON.stringify(r._getFileState(i).chunking.inProgress))), t.each(r._getXhrs(i), function(n, r) {
              o(t.format("Attempting to abort file {}.{}. XHR readyState {}. ", i, n, r.readyState));
              r.abort();
              r._cancelled = !0
            }), r.moveInProgressToRemaining(i), f.free(i, !0)), u.onAutoRetry(i, p, a, l) || e.cleanup(i, a, l))
          },
          hasMoreParts: function(n) {
            return !!r._getFileState(n).chunking.remaining.length
          },
          nextPart: function(n) {
            var t = r._getFileState(n).chunking.remaining.shift();
            return t >= r._getTotalChunks(n) && (t = null), t
          },
          reset: function(n) {
            o("Server or callback has ordered chunking effort to be restarted on next attempt for item ID " + n, "error");
            r._maybeDeletePersistedChunkData(n);
            r.reevaluateChunking(n);
            r._getFileState(n).loaded = 0;
            r._getFileState(n).attemptingResume = !1
          },
          sendNext: function(n) {
            var w = u.getSize(n),
              y = u.getName(n),
              i = s.nextPart(n),
              h = r._getChunkData(n, i),
              l = r._getFileState(n),
              a = l.attemptingResume,
              v = l.chunking.inProgress || [],
              p;
            l.loaded == null && (l.loaded = 0);
            a && u.onResume(n, y, h, l.customResumeData) === !1 && (s.reset(n), i = s.nextPart(n), h = r._getChunkData(n, i), a = !1);
            i == null && v.length === 0 ? s.finalize(n) : (v.push(i), r._getFileState(n).chunking.inProgress = v, c && f.open(n, i), c && f.available() && r._getFileState(n).chunking.remaining.length && s.sendNext(n), h.blob.size === 0 && (o(t.format("Chunk {} for file {} will not be uploaded, zero sized chunk.", i, n), "error"), s.handleFailure(i, n, "File is no longer available", null)), p = u.onUploadChunk(n, y, r._getChunkDataForCallback(h)), p.then(function(f) {
              if (u.isInProgress(n)) {
                o(t.format("Sending chunked upload request for item {}.{}, bytes {}-{} of {}.", n, i, h.start + 1, h.end, w));
                var c = {
                  chunkIdx: i,
                  id: n,
                  overrides: f,
                  resuming: a
                };
                r.uploadChunk(c).then(function(u, f) {
                  o("Chunked upload request succeeded for " + n + ", chunk " + i);
                  r.clearCachedChunk(n, i);
                  var h = r._getFileState(n).chunking.inProgress || [],
                    l = e.normalizeResponse(u, !0),
                    c = t.indexOf(h, i);
                  o(t.format("Chunk {} for file {} uploaded successfully.", i, n));
                  s.done(n, i, l, f);
                  c >= 0 && h.splice(c, 1);
                  r._maybePersistChunkedState(n);
                  s.hasMoreParts(n) || h.length !== 0 ? s.hasMoreParts(n) ? s.sendNext(n) : o(t.format("File ID {} has no more chunks to send and these chunk indexes are still marked as in-progress: {}", n, JSON.stringify(h))) : s.finalize(n)
                }, function(t, r) {
                  s.handleFailure(i, n, t, r)
                }).done(function() {
                  r.clearXhr(n, i)
                })
              } else o(t.format("Not sending chunked upload request for item {}.{} - no longer in progress.", n, i))
            }, function(t) {
              s.handleFailure(i, n, t, null)
            }))
          }
        },
        f = {
          _open: [],
          _openChunks: {},
          _waiting: [],
          available: function() {
            var r = u.maxConnections,
              n = 0,
              i = 0;
            return t.each(f._openChunks, function(t, r) {
              n++;
              i += r.length
            }), r - (f._open.length - n + i)
          },
          free: function(n, i) {
            var c = !i,
              s = t.indexOf(f._waiting, n),
              h = t.indexOf(f._open, n),
              u;
            delete f._openChunks[n];
            e.getProxyOrBlob(n) instanceof t.BlobProxy && (o("Generated blob upload has ended for " + n + ", disposing generated blob."), delete r._getFileState(n).file);
            s >= 0 ? f._waiting.splice(s, 1) : c && h >= 0 && (f._open.splice(h, 1), u = f._waiting.shift(), u >= 0 && (f._open.push(u), e.start(u)))
          },
          getWaitingOrConnected: function() {
            var n = [];
            return t.each(f._openChunks, function(t, i) {
              i && i.length && n.push(parseInt(t))
            }), t.each(f._open, function(t, i) {
              f._openChunks[i] || n.push(parseInt(i))
            }), n = n.concat(f._waiting)
          },
          isUsingConnection: function(n) {
            return t.indexOf(f._open, n) >= 0
          },
          open: function(n, t) {
            return (t == null && f._waiting.push(n), f.available()) ? (t == null ? (f._waiting.pop(), f._open.push(n)) : function() {
              var i = f._openChunks[n] || [];
              i.push(t);
              f._openChunks[n] = i
            }(), !0) : !1
          },
          reset: function() {
            f._waiting = [];
            f._open = []
          }
        },
        v = {
          send: function(n, t) {
            var i = r._getFileState(n);
            if (!i) {
              o("Ignoring send request as this upload may have been cancelled, File ID " + n, "warn");
              return
            }
            i.loaded = 0;
            o("Sending simple upload request for " + n);
            r.uploadFile(n).then(function(i, r) {
              o("Simple upload request succeeded for " + n);
              var f = e.normalizeResponse(i, !0),
                s = u.getSize(n);
              u.onProgress(n, t, s, s);
              e.maybeNewUuid(n, f);
              e.cleanup(n, f, r)
            }, function(i, r) {
              o("Simple upload request failed for " + n);
              var f = e.normalizeResponse(i, !1);
              u.onAutoRetry(n, t, f, r) || e.cleanup(n, f, r)
            })
          }
        },
        e = {
          cancel: function(n) {
            o("Cancelling " + n);
            u.paramsStore.remove(n);
            f.free(n)
          },
          cleanup: function(n, t, i) {
            var e = u.getName(n);
            u.onComplete(n, e, t, i);
            r._getFileState(n) && r._clearXhrs && r._clearXhrs(n);
            f.free(n)
          },
          getProxyOrBlob: function(n) {
            return r.getProxy && r.getProxy(n) || r.getFile && r.getFile(n)
          },
          initHandler: function() {
            var n = i ? t[i] : t.traditional,
              f = t.supportedFeatures.ajaxUploading ? "Xhr" : "Form";
            r = new n[f + "UploadHandler"](u, {
              getCustomResumeData: u.getCustomResumeData,
              getDataByUuid: u.getDataByUuid,
              getName: u.getName,
              getSize: u.getSize,
              getUuid: u.getUuid,
              log: o,
              onCancel: u.onCancel,
              onProgress: u.onProgress,
              onUuidChanged: u.onUuidChanged,
              onFinalizing: function(n) {
                u.setStatus(n, t.status.UPLOAD_FINALIZING)
              }
            });
            r._removeExpiredChunkingRecords && r._removeExpiredChunkingRecords()
          },
          isDeferredEligibleForUpload: function(n) {
            return u.isQueued(n)
          },
          maybeDefer: function(n, i) {
            if (i && !r.getFile(n) && i instanceof t.BlobProxy) {
              u.onUploadPrep(n);
              o("Attempting to generate a blob on-demand for " + n);
              i.create().then(function(t) {
                o("Generated an on-demand blob for " + n);
                r.updateBlob(n, t);
                u.setSize(n, t.size);
                r.reevaluateChunking(n);
                e.maybeSendDeferredFiles(n)
              }, function(i) {
                var r = {};
                i && (r.error = i);
                o(t.format("Failed to generate blob for ID {}.  Error message: {}.", n, i), "error");
                u.onComplete(n, u.getName(n), t.extend(r, a), null);
                e.maybeSendDeferredFiles(n);
                f.free(n)
              })
            } else return e.maybeSendDeferredFiles(n);
            return !1
          },
          maybeSendDeferredFiles: function(n) {
            var i = u.getIdsInProxyGroup(n),
              f = !1;
            return i && i.length ? (o("Maybe ready to upload proxy group file " + n), t.each(i, function(t, i) {
              if (e.isDeferredEligibleForUpload(i) && !!r.getFile(i)) f = i === n, e.now(i);
              else if (e.isDeferredEligibleForUpload(i)) return !1
            })) : (f = !0, e.now(n)), f
          },
          maybeNewUuid: function(n, t) {
            if (t.newUuid !== undefined) u.onUuidChanged(n, t.newUuid)
          },
          normalizeResponse: function(n, i) {
            var r = n;
            return t.isObject(n) || (r = {}, t.isString(n) && !i && (r.error = n)), r.success = i, r
          },
          now: function(n) {
            var i = u.getName(n);
            if (!h.isValid(n)) throw new t.Error(n + " is not a valid file ID to upload!");
            u.onUpload(n, i).then(function(e) {
              e && e.pause ? (u.setStatus(n, t.status.PAUSED), r.pause(n), f.free(n)) : l && r._shouldChunkThisFile(n) ? s.sendNext(n) : v.send(n, i)
            }, function(t) {
              if (t = t || {}, o(n + " upload start aborted due to rejected onUpload Promise - details: " + t, "error"), !u.onAutoRetry(n, i, t.responseJSON || {})) {
                var r = e.normalizeResponse(t.responseJSON, !1);
                e.cleanup(n, r)
              }
            })
          },
          start: function(n) {
            var t = e.getProxyOrBlob(n);
            return t ? e.maybeDefer(n, t) : (e.now(n), !0)
          }
        };
      t.extend(this, {
        add: function() {
          r.add.apply(this, arguments)
        },
        upload: function(n) {
          return f.open(n) ? e.start(n) : !1
        },
        retry: function(n) {
          return c && (r._getFileState(n).temp.ignoreFailure = !1), f.isUsingConnection(n) ? e.start(n) : h.upload(n)
        },
        cancel: function(n) {
          var i = r.cancel(n);
          t.isGenericPromise(i) ? i.then(function() {
            e.cancel(n)
          }) : i !== !1 && e.cancel(n)
        },
        cancelAll: function() {
          var t = f.getWaitingOrConnected(),
            n;
          if (t.length)
            for (n = t.length - 1; n >= 0; n--) h.cancel(t[n]);
          f.reset()
        },
        getFile: function(n) {
          return r.getProxy && r.getProxy(n) ? r.getProxy(n).referenceBlob : r.getFile && r.getFile(n)
        },
        isProxied: function(n) {
          return !!(r.getProxy && r.getProxy(n))
        },
        getInput: function(n) {
          if (r.getInput) return r.getInput(n)
        },
        reset: function() {
          o("Resetting upload handler");
          h.cancelAll();
          f.reset();
          r.reset()
        },
        expunge: function(n) {
          if (h.isValid(n)) return r.expunge(n)
        },
        isValid: function(n) {
          return r.isValid(n)
        },
        hasResumeRecord: function(n) {
          var t = r.isValid(n) && r._getLocalStorageId && r._getLocalStorageId(n);
          return t ? !!localStorage.getItem(t) : !1
        },
        getResumableFilesData: function() {
          return r.getResumableFilesData ? r.getResumableFilesData() : []
        },
        getThirdPartyFileId: function(n) {
          if (h.isValid(n)) return r.getThirdPartyFileId(n)
        },
        pause: function(n) {
          return h.isResumable(n) && r.pause && h.isValid(n) && r.pause(n) ? (f.free(n), r.moveInProgressToRemaining(n), !0) : !1
        },
        isAttemptingResume: function(n) {
          return !!r.isAttemptingResume && r.isAttemptingResume(n)
        },
        isResumable: function(n) {
          return !!r.isResumable && r.isResumable(n)
        }
      });
      t.extend(u, n);
      o = u.log;
      l = u.chunking.enabled && t.supportedFeatures.chunking;
      c = l && u.chunking.concurrent.enabled;
      a = function() {
        var n = {};
        return n[u.preventRetryParam] = !0, n
      }();
      e.initHandler()
    };
    t.WindowReceiveMessage = function(n) {
      "use strict";
      var r = {
          log: function() {}
        },
        i = {};
      t.extend(r, n);
      t.extend(this, {
        receiveMessage: function(n, r) {
          var u = function(n) {
            r(n.data)
          };
          window.postMessage ? i[n] = t(window).attach("message", u) : log("iframe message passing not supported in this browser!", "error")
        },
        stopReceivingMessages: function(n) {
          if (window.postMessage) {
            var t = i[n];
            t && t()
          }
        }
      })
    };
    t.FormUploadHandler = function(n) {
      "use strict";

      function p(n) {
        delete u[n];
        c && (clearTimeout(f[n]), delete f[n], o.stopReceivingMessages(n));
        var i = document.getElementById(r._getIframeName(n));
        i && (i.setAttribute("src", "javascript:false;"), t(i).remove())
      }

      function l(n) {
        return n.split("_")[0]
      }

      function w(n) {
        var i = t.toElement("<iframe src='javascript:false;' name='" + n + "' />");
        return i.setAttribute("id", n), i.style.display = "none", document.body.appendChild(i), i
      }

      function b(n, s) {
        var h = n.id,
          c = l(h),
          a = y(c);
        e[a] = s;
        u[c] = t(n).attach("load", function() {
          r.getInput(c) && (i("Received iframe load event for CORS upload request (iframe name " + h + ")"), f[h] = setTimeout(function() {
            var n = "No valid message received from loaded iframe for iframe name " + h;
            i(n, "error");
            s({
              error: n
            })
          }, 1e3))
        });
        o.receiveMessage(h, function(n) {
          i("Received the following window message: '" + n + "'");
          var c = l(h),
            u = r._parseJsonResponse(n),
            t = u.uuid,
            s;
          t && e[t] ? (i("Handling response for iframe name " + h), clearTimeout(f[h]), delete f[h], r._detachLoadEvent(h), s = e[t], delete e[t], o.stopReceivingMessages(h), s(u)) : t || i("'" + n + "' does not contain a UUID - ignoring.")
        })
      }
      var s = n.options,
        r = this,
        h = n.proxy,
        a = t.getUniqueId(),
        e = {},
        u = {},
        f = {},
        c = s.isCors,
        v = s.inputName,
        y = h.getUuid,
        i = h.log,
        o = new t.WindowReceiveMessage({
          log: i
        });
      t.extend(this, new t.UploadHandler(n));
      t.override(this, function(n) {
        return {
          add: function(i, r) {
            n.add(i, {
              input: r
            });
            r.setAttribute("name", v);
            r.parentNode && t(r).remove()
          },
          expunge: function(t) {
            p(t);
            n.expunge(t)
          },
          isValid: function(t) {
            return n.isValid(t) && r._getFileState(t).input !== undefined
          }
        }
      });
      t.extend(this, {
        getInput: function(n) {
          return r._getFileState(n).input
        },
        _attachLoadEvent: function(n, r) {
          var f;
          c ? b(n, r) : u[n.id] = t(n).attach("load", function() {
            if (i("Received response for " + n.id), n.parentNode) {
              try {
                if (n.contentDocument && n.contentDocument.body && n.contentDocument.body.innerHTML == "false") return
              } catch (t) {
                i("Error when attempting to access iframe during handling of upload response (" + t.message + ")", "error");
                f = {
                  success: !1
                }
              }
              r(f)
            }
          })
        },
        _createIframe: function(n) {
          var t = r._getIframeName(n);
          return w(t)
        },
        _detachLoadEvent: function(n) {
          u[n] !== undefined && (u[n](), delete u[n])
        },
        _getIframeName: function(n) {
          return n + "_" + a
        },
        _initFormForUpload: function(n) {
          var e = n.method,
            r = n.endpoint,
            u = n.params,
            o = n.paramsInBody,
            s = n.targetName,
            i = t.toElement("<form method='" + e + "' enctype='multipart/form-data'><\/form>"),
            f = r;
          return o ? t.obj2Inputs(u, i) : f = t.obj2url(u, r), i.setAttribute("action", f), i.setAttribute("target", s), i.style.display = "none", document.body.appendChild(i), i
        },
        _parseJsonResponse: function(n) {
          var r = {};
          try {
            r = t.parseJson(n)
          } catch (u) {
            i("Error when attempting to parse iframe upload response (" + u.message + ")", "error")
          }
          return r
        }
      })
    };
    t.XhrUploadHandler = function(n) {
      "use strict";

      function v(n) {
        t.each(i._getXhrs(n), function(t, r) {
          var u = i._getAjaxRequester(n, t);
          r.onreadystatechange = null;
          r.upload.onprogress = null;
          r.abort();
          u && u.canceled && u.canceled(n)
        })
      }
      var i = this,
        a = n.options.namespace,
        r = n.proxy,
        f = n.options.chunking,
        h = function(n) {
          var e = i._getFileState(n),
            r;
          return e.chunkSize ? e.chunkSize : (r = f.partSize, t.isFunction(r) && (r = r(n, u(n))), e.chunkSize = r, r)
        },
        c = n.options.resume,
        y = f && n.options.chunking.enabled && t.supportedFeatures.chunking,
        e = c && n.options.resume.enabled && y && t.supportedFeatures.resume,
        o = r.getName,
        u = r.getSize,
        p = r.getUuid,
        w = r.getEndpoint,
        b = r.getDataByUuid,
        k = r.onUuidChanged,
        l = r.onProgress,
        s = r.log,
        d = r.getCustomResumeData;
      t.extend(this, new t.UploadHandler(n));
      t.override(this, function(n) {
        return {
          add: function(r, u) {
            if (t.isFile(u) || t.isBlob(u)) n.add(r, {
              file: u
            });
            else if (u instanceof t.BlobProxy) n.add(r, {
              proxy: u
            });
            else throw new Error("Passed obj is not a File, Blob, or proxy");
            i._initTempState(r);
            e && i._maybePrepareForResume(r)
          },
          expunge: function(t) {
            v(t);
            i._maybeDeletePersistedChunkData(t);
            i._clearXhrs(t);
            n.expunge(t)
          }
        }
      });
      t.extend(this, {
        clearCachedChunk: function(n, t) {
          var r = i._getFileState(n);
          r && delete r.temp.cachedChunks[t]
        },
        clearXhr: function(n, t) {
          var r = i._getFileState(n).temp;
          r.xhrs && delete r.xhrs[t];
          r.ajaxRequesters && delete r.ajaxRequesters[t]
        },
        finalizeChunks: function(n, r) {
          var f = i._getTotalChunks(n) - 1,
            u = i._getXhr(n, f);
          return r ? (new t.Promise).success(r(u), u) : (new t.Promise).success({}, u)
        },
        getFile: function(n) {
          return i.isValid(n) && i._getFileState(n).file
        },
        getProxy: function(n) {
          return i.isValid(n) && i._getFileState(n).proxy
        },
        getResumableFilesData: function() {
          var n = [];
          return i._iterateResumeRecords(function(t, r) {
            i.moveInProgressToRemaining(null, r.chunking.inProgress, r.chunking.remaining);
            var u = {
              name: r.name,
              remaining: r.chunking.remaining,
              size: r.size,
              uuid: r.uuid
            };
            r.key && (u.key = r.key);
            r.customResumeData && (u.customResumeData = r.customResumeData);
            n.push(u)
          }), n
        },
        isAttemptingResume: function(n) {
          return i._getFileState(n).attemptingResume
        },
        isResumable: function(n) {
          return !!f && i.isValid(n) && !i._getFileState(n).notResumable
        },
        moveInProgressToRemaining: function(n, r, u) {
          var o = i._getFileState(n) || {},
            e = o.chunking || {},
            f = r || e.inProgress,
            h = u || e.remaining;
          f && (s(t.format("Moving these chunks from in-progress {}, to remaining.", JSON.stringify(f))), f.reverse(), t.each(f, function(n, t) {
            h.unshift(t)
          }), f.length = 0)
        },
        pause: function(n) {
          if (i.isValid(n)) return s(t.format("Aborting XHR upload for {} '{}' due to pause instruction.", n, o(n))), i._getFileState(n).paused = !0, v(n), !0
        },
        reevaluateChunking: function(n) {
          if (f && i.isValid(n)) {
            var t = i._getFileState(n),
              r, u;
            if (delete t.chunking, t.chunking = {}, r = i._getTotalChunks(n), r > 1 || f.mandatory) {
              for (t.chunking.enabled = !0, t.chunking.parts = r, t.chunking.remaining = [], u = 0; u < r; u++) t.chunking.remaining.push(u);
              i._initTempState(n)
            } else t.chunking.enabled = !1
          }
        },
        updateBlob: function(n, t) {
          i.isValid(n) && (i._getFileState(n).file = t)
        },
        _clearXhrs: function(n) {
          var r = i._getFileState(n).temp;
          t.each(r.ajaxRequesters, function(n) {
            delete r.ajaxRequesters[n]
          });
          t.each(r.xhrs, function(n) {
            delete r.xhrs[n]
          })
        },
        _createXhr: function(n, r) {
          return i._registerXhr(n, r, t.createXhrInstance())
        },
        _getAjaxRequester: function(n, t) {
          var r = t == null ? -1 : t;
          return i._getFileState(n).temp.ajaxRequesters[r]
        },
        _getChunkData: function(n, r) {
          var e = h(n),
            s = u(n),
            a = i.getFile(n),
            f = e * r,
            o = f + e >= s ? s : f + e,
            v = i._getTotalChunks(n),
            c = this._getFileState(n).temp.cachedChunks,
            l = c[r] || t.sliceBlob(a, f, o);
          return c[r] = l, {
            part: r,
            start: f,
            end: o,
            count: v,
            blob: l,
            size: o - f
          }
        },
        _getChunkDataForCallback: function(n) {
          return {
            partIndex: n.part,
            startByte: n.start + 1,
            endByte: n.end,
            totalParts: n.count
          }
        },
        _getLocalStorageId: function(n) {
          var r = o(n),
            f = u(n),
            e = h(n),
            s = w(n),
            l = c.customKeys(n),
            i = t.format("qq{}resume{}-{}-{}-{}-{}", a, "5.0", r, f, e, s);
          return l.forEach(function(n) {
            i += "-" + n
          }), i
        },
        _getMimeType: function(n) {
          return i.getFile(n).type
        },
        _getPersistableData: function(n) {
          return i._getFileState(n).chunking
        },
        _getTotalChunks: function(n) {
          if (f) {
            var t = u(n),
              i = h(n);
            return Math.ceil(t / i)
          }
        },
        _getXhr: function(n, t) {
          var r = t == null ? -1 : t;
          return i._getFileState(n).temp.xhrs[r]
        },
        _getXhrs: function(n) {
          return i._getFileState(n).temp.xhrs
        },
        _iterateResumeRecords: function(n) {
          e && t.each(localStorage, function(i, r) {
            if (i.indexOf(t.format("qq{}resume", a)) === 0) {
              var u = JSON.parse(r);
              n(i, u)
            }
          })
        },
        _initTempState: function(n) {
          i._getFileState(n).temp = {
            ajaxRequesters: {},
            chunkProgress: {},
            xhrs: {},
            cachedChunks: {}
          }
        },
        _markNotResumable: function(n) {
          i._getFileState(n).notResumable = !0
        },
        _maybeDeletePersistedChunkData: function(n) {
          var t;
          return e && i.isResumable(n) && (t = i._getLocalStorageId(n), t && localStorage.getItem(t)) ? (localStorage.removeItem(t), !0) : !1
        },
        _maybePrepareForResume: function(n) {
          var u = i._getFileState(n),
            f, r;
          e && u.key === undefined && (f = i._getLocalStorageId(n), r = localStorage.getItem(f), r && (r = JSON.parse(r), b(r.uuid) ? i._markNotResumable(n) : (s(t.format("Identified file with ID {} and name of {} as resumable.", n, o(n))), k(n, r.uuid), u.key = r.key, u.chunking = r.chunking, u.loaded = r.loaded, u.customResumeData = r.customResumeData, u.attemptingResume = !0, i.moveInProgressToRemaining(n))))
        },
        _maybePersistChunkedState: function(n) {
          var r = i._getFileState(n),
            c, f, h;
          if (e && i.isResumable(n)) {
            h = d(n);
            c = i._getLocalStorageId(n);
            f = {
              name: o(n),
              size: u(n),
              uuid: p(n),
              key: r.key,
              chunking: r.chunking,
              loaded: r.loaded,
              lastUpdated: Date.now()
            };
            h && (f.customResumeData = h);
            try {
              localStorage.setItem(c, JSON.stringify(f))
            } catch (l) {
              s(t.format("Unable to save resume data for '{}' due to error: '{}'.", n, l.toString()), "warn")
            }
          }
        },
        _registerProgressHandler: function(n, r, f) {
          var s = i._getXhr(n, r),
            e = o(n),
            h = {
              simple: function(t, i) {
                var r = u(n);
                t === i ? l(n, e, r, r) : l(n, e, t >= r ? r - 1 : t, r)
              },
              chunked: function(o, s) {
                var h = i._getFileState(n).temp.chunkProgress,
                  a = i._getFileState(n).loaded,
                  v = o,
                  y = s,
                  p = u(n),
                  w = v - (y - f),
                  c = a;
                h[r] = w;
                t.each(h, function(n, t) {
                  c += t
                });
                l(n, e, c, p)
              }
            };
          s.upload.onprogress = function(n) {
            if (n.lengthComputable) {
              var t = f == null ? "simple" : "chunked";
              h[t](n.loaded, n.total)
            }
          }
        },
        _registerXhr: function(n, t, r, u) {
          var e = t == null ? -1 : t,
            f = i._getFileState(n).temp;
          return f.xhrs = f.xhrs || {}, f.ajaxRequesters = f.ajaxRequesters || {}, f.xhrs[e] = r, u && (f.ajaxRequesters[e] = u), r
        },
        _removeExpiredChunkingRecords: function() {
          var n = c.recordsExpireIn;
          i._iterateResumeRecords(function(t, i) {
            var r = new Date(i.lastUpdated);
            r.setDate(r.getDate() + n);
            r.getTime() <= Date.now() && (s("Removing expired resume record with key " + t), localStorage.removeItem(t))
          })
        },
        _shouldChunkThisFile: function(n) {
          var t = i._getFileState(n);
          if (t) return t.chunking || i.reevaluateChunking(n), t.chunking.enabled
        }
      })
    };
    t.DeleteFileAjaxRequester = function(n) {
        "use strict";

        function u() {
          return i.method.toUpperCase() === "POST" ? {
            _method: "DELETE"
          } : {}
        }
        var r, i = {
          method: "DELETE",
          uuidParamName: "qquuid",
          endpointStore: {},
          maxConnections: 3,
          customHeaders: function() {
            return {}
          },
          paramsStore: {},
          cors: {
            expected: !1,
            sendCredentials: !1
          },
          log: function() {},
          onDelete: function() {},
          onDeleteComplete: function() {}
        };
        t.extend(i, n);
        r = t.extend(this, new t.AjaxRequester({
          acceptHeader: "application/json",
          validMethods: ["POST", "DELETE"],
          method: i.method,
          endpointStore: i.endpointStore,
          paramsStore: i.paramsStore,
          mandatedParams: u(),
          maxConnections: i.maxConnections,
          customHeaders: function(n) {
            return i.customHeaders.get(n)
          },
          log: i.log,
          onSend: i.onDelete,
          onComplete: i.onDeleteComplete,
          cors: i.cors
        }));
        t.extend(this, {
          sendDelete: function(n, t, u) {
            var f = u || {};
            i.log("Submitting delete file request for " + n);
            i.method === "DELETE" ? r.initTransport(n).withPath(t).withParams(f).send() : (f[i.uuidParamName] = t, r.initTransport(n).withParams(f).send())
          }
        })
      },
      function() {
        function u(n) {
          var r = n.naturalWidth,
            u = n.naturalHeight,
            t = document.createElement("canvas"),
            i;
          return r * u > 1048576 ? (t.width = t.height = 1, i = t.getContext("2d"), i.drawImage(n, -r + 1, 0), i.getImageData(0, 0, 1, 1).data[3] === 0) : !1
        }

        function f(n, t, i) {
          var u = document.createElement("canvas"),
            f = 0,
            s = i,
            r = i,
            e, h, c, o;
          for (u.width = 1, u.height = i, e = u.getContext("2d"), e.drawImage(n, 0, 0), h = e.getImageData(0, 0, 1, i).data; r > f;) c = h[(r - 1) * 4 + 3], c === 0 ? s = r : f = r, r = s + f >> 1;
          return o = r / i, o === 0 ? 1 : o
        }

        function e(i, r, u, f) {
          var e = document.createElement("canvas"),
            s = u.mime || "image/jpeg",
            o = new t.Promise;
          return n(i, r, e, u, f).then(function() {
            o.success(e.toDataURL(s, u.quality || .8))
          }), o
        }

        function o(n) {
          var i = 5241e3;
          if (!t.ios()) throw new t.Error("Downsampled dimensions can only be reliably calculated for iOS!");
          if (n.origHeight * n.origWidth > i) return {
            newHeight: Math.round(Math.sqrt(i * (n.origHeight / n.origWidth))),
            newWidth: Math.round(Math.sqrt(i * (n.origWidth / n.origHeight)))
          }
        }

        function n(n, r, e, h, c) {
          var y = n.naturalWidth,
            p = n.naturalHeight,
            l = h.width,
            a = h.height,
            w = e.getContext("2d"),
            b = new t.Promise,
            v;
          return (w.save(), h.resize) ? s({
            blob: r,
            canvas: e,
            image: n,
            imageHeight: p,
            imageWidth: y,
            orientation: h.orientation,
            resize: h.resize,
            targetHeight: a,
            targetWidth: l
          }) : (t.supportedFeatures.unlimitedScaledImageSize || (v = o({
            origWidth: l,
            origHeight: a
          }), v && (t.log(t.format("Had to reduce dimensions due to device limitations from {}w / {}h to {}w / {}h", l, a, v.newWidth, v.newHeight), "warn"), l = v.newWidth, a = v.newHeight)), i(e, l, a, h.orientation), t.ios() ? function() {
            u(n) && (y /= 2, p /= 2);
            var t = 1024,
              i = document.createElement("canvas"),
              k = c ? f(n, y, p) : 1,
              h = Math.ceil(t * l / y),
              v = Math.ceil(t * a / p / k),
              o = 0,
              b = 0,
              r, e, s;
            for (i.width = i.height = t, r = i.getContext("2d"); o < p;) {
              for (e = 0, s = 0; e < y;) r.clearRect(0, 0, t, t), r.drawImage(n, -e, -o), w.drawImage(i, 0, 0, t, t, s, b, h, v), e += t, s += h;
              o += t;
              b += v
            }
            w.restore();
            i = r = null
          }() : w.drawImage(n, 0, 0, l, a), e.qqImageRendered && e.qqImageRendered(), b.success(), b)
        }

        function s(n) {
          var h = n.blob,
            e = n.image,
            c = n.imageHeight,
            l = n.imageWidth,
            a = n.orientation,
            u = new t.Promise,
            v = n.resize,
            f = document.createElement("canvas"),
            y = f.getContext("2d"),
            r = n.canvas,
            o = n.targetHeight,
            s = n.targetWidth;
          return i(f, l, c, a), r.height = o, r.width = s, y.drawImage(e, 0, 0), v({
            blob: h,
            height: o,
            image: e,
            sourceCanvas: f,
            targetCanvas: r,
            width: s
          }).then(function() {
            r.qqImageRendered && r.qqImageRendered();
            u.success()
          }, u.failure), u
        }

        function i(n, t, i, r) {
          switch (r) {
            case 5:
            case 6:
            case 7:
            case 8:
              n.width = i;
              n.height = t;
              break;
            default:
              n.width = t;
              n.height = i
          }
          var u = n.getContext("2d");
          switch (r) {
            case 2:
              u.translate(t, 0);
              u.scale(-1, 1);
              break;
            case 3:
              u.translate(t, i);
              u.rotate(Math.PI);
              break;
            case 4:
              u.translate(0, i);
              u.scale(1, -1);
              break;
            case 5:
              u.rotate(.5 * Math.PI);
              u.scale(1, -1);
              break;
            case 6:
              u.rotate(.5 * Math.PI);
              u.translate(0, -i);
              break;
            case 7:
              u.rotate(.5 * Math.PI);
              u.translate(t, -i);
              u.scale(-1, 1);
              break;
            case 8:
              u.rotate(-.5 * Math.PI);
              u.translate(-t, 0)
          }
        }

        function r(n, t) {
          var i = this;
          window.Blob && n instanceof Blob && function() {
            var t = new Image,
              r = window.URL && window.URL.createObjectURL ? window.URL : window.webkitURL && window.webkitURL.createObjectURL ? window.webkitURL : null;
            if (!r) throw Error("No createObjectURL function found to create blob url");
            t.src = r.createObjectURL(n);
            i.blob = n;
            n = t
          }();
          n.naturalWidth || n.naturalHeight || (n.onload = function() {
            var n = i.imageLoadListeners;
            n && (i.imageLoadListeners = null, setTimeout(function() {
              for (var t = 0, i = n.length; t < i; t++) n[t]()
            }, 0))
          }, n.onerror = t, this.imageLoadListeners = []);
          this.srcImage = n
        }
        r.prototype.render = function(i, r) {
          r = r || {};
          var c = this,
            o = this.srcImage.naturalWidth,
            s = this.srcImage.naturalHeight,
            u = r.width,
            f = r.height,
            l = r.maxWidth,
            a = r.maxHeight,
            v = !this.blob || this.blob.type === "image/jpeg",
            y = i.tagName.toLowerCase(),
            h;
          if (this.imageLoadListeners) {
            this.imageLoadListeners.push(function() {
              c.render(i, r)
            });
            return
          }
          if (u && !f ? f = s * u / o << 0 : f && !u ? u = o * f / s << 0 : (u = o, f = s), l && u > l && (u = l, f = s * u / o << 0), a && f > a && (f = a, u = o * f / s << 0), h = {
              width: u,
              height: f
            }, t.each(r, function(n, t) {
              h[n] = t
            }), y === "img" ? function() {
              var n = i.src;
              e(c.srcImage, c.blob, h, v).then(function(t) {
                i.src = t;
                n === i.src && i.onload()
              })
            }() : y === "canvas" && n(this.srcImage, this.blob, i, h, v), typeof this.onrender == "function") this.onrender(i)
        };
        t.MegaPixImage = r
      }();
    t.ImageGenerator = function(n) {
      "use strict";

      function r(n) {
        return n.tagName.toLowerCase() === "img"
      }

      function u(n) {
        return n.tagName.toLowerCase() === "canvas"
      }

      function h() {
        return (new Image).crossOrigin !== undefined
      }

      function c() {
        var n = document.createElement("canvas");
        return n.getContext && n.getContext("2d")
      }

      function e(n) {
        var r = n.split("/"),
          u = r[r.length - 1].split("?")[0],
          i = t.getExtension(u);
        i = i && i.toLowerCase();
        switch (i) {
          case "jpeg":
          case "jpg":
            return "image/jpeg";
          case "png":
            return "image/png";
          case "bmp":
            return "image/bmp";
          case "gif":
            return "image/gif";
          case "tiff":
          case "tif":
            return "image/tiff"
        }
      }

      function f(n) {
        var i = document.createElement("a"),
          r, u, f;
        return (i.href = n, r = i.protocol, f = i.port, u = i.hostname, r.toLowerCase() !== window.location.protocol.toLowerCase()) ? !0 : u.toLowerCase() !== window.location.hostname.toLowerCase() ? !0 : f !== window.location.port && !t.ie() ? !0 : !1
      }

      function l(t, i) {
        t.onload = function() {
          t.onload = null;
          t.onerror = null;
          i.success(t)
        };
        t.onerror = function() {
          t.onload = null;
          t.onerror = null;
          n("Problem drawing thumbnail!", "error");
          i.failure(t, "Problem drawing thumbnail!")
        }
      }

      function a(n, t) {
        n.qqImageRendered = function() {
          t.success(n)
        }
      }

      function i(i, f) {
        var e = r(i) || u(i);
        return r(i) ? l(i, f) : u(i) ? a(i, f) : (f.failure(i), n(t.format("Element container of type {} is not supported!", i.tagName), "error")), e
      }

      function v(r, u, f) {
        var e = new t.Promise,
          s = new t.Identify(r, n),
          o = f.maxSize,
          h = f.orient == null ? !0 : f.orient,
          c = function() {
            u.onerror = null;
            u.onload = null;
            n("Could not render preview, file may be too large!", "error");
            e.failure(u, "Browser cannot render image!")
          };
        return s.isPreviewable().then(function(s) {
          var a = {
              parse: function() {
                return (new t.Promise).success()
              }
            },
            v = h ? new t.Exif(r, n) : a,
            l = new t.MegaPixImage(r, c);
          i(u, e) && v.parse().then(function(n) {
            var t = n && n.Orientation;
            l.render(u, {
              maxWidth: o,
              maxHeight: o,
              orientation: t,
              mime: s,
              resize: f.customResizeFunction
            })
          }, function(i) {
            n(t.format("EXIF data could not be parsed ({}).  Assuming orientation = 1.", i));
            l.render(u, {
              maxWidth: o,
              maxHeight: o,
              mime: s,
              resize: f.customResizeFunction
            })
          })
        }, function() {
          n("Not previewable");
          e.failure(u, "Not previewable")
        }), e
      }

      function o(n, r, u, o, s) {
        var h = new Image,
          c = new t.Promise;
        i(h, c);
        f(n) && (h.crossOrigin = "anonymous");
        h.src = n;
        c.then(function() {
          i(r, u);
          var f = new t.MegaPixImage(h);
          f.render(r, {
            maxWidth: o,
            maxHeight: o,
            mime: e(n),
            resize: s
          })
        }, u.failure)
      }

      function s(n, r, u, f) {
        i(r, u);
        t(r).css({
          maxWidth: f + "px",
          maxHeight: f + "px"
        });
        r.src = n
      }

      function y(n, e, l) {
        var a = new t.Promise,
          y = l.scale,
          v = y ? l.maxSize : null;
        return y && r(e) ? c() ? f(n) && !h() ? s(n, e, a, v) : o(n, e, a, v) : s(n, e, a, v) : u(e) ? o(n, e, a, v) : i(e, a) && (e.src = n), a
      }
      t.extend(this, {
        generate: function(i, r, u) {
          return t.isString(i) ? (n("Attempting to update thumbnail based on server response."), y(i, r, u || {})) : (n("Attempting to draw client-side image preview."), v(i, r, u || {}))
        }
      });
      this._testing = {};
      this._testing.isImg = r;
      this._testing.isCanvas = u;
      this._testing.isCrossOrigin = f;
      this._testing.determineMimeOfFileName = e
    };
    t.Exif = function(n, i) {
      "use strict";

      function r(n) {
        for (var t = 0, i = 0; n.length > 0;) t += parseInt(n.substring(0, 2), 16) * Math.pow(2, i), n = n.substring(2, n.length), i += 8;
        return t
      }

      function f(i, r) {
        var u = i,
          e = r;
        return u === undefined && (u = 2, e = new t.Promise), t.readBlobToHex(n, u, 4).then(function(n) {
          var t = /^ffe([0-9])/.exec(n),
            i;
          t ? t[1] !== "1" ? (i = parseInt(n.slice(4, 8), 16), f(u + i + 2, e)) : e.success(u) : e.failure("No EXIF header to be found!")
        }), e
      }

      function o() {
        var i = new t.Promise;
        return t.readBlobToHex(n, 0, 6).then(function(n) {
          n.indexOf("ffd8") !== 0 ? i.failure("Not a valid JPEG!") : f().then(function(n) {
            i.success(n)
          }, function(n) {
            i.failure(n)
          })
        }), i
      }

      function s(i) {
        var r = new t.Promise;
        return t.readBlobToHex(n, i + 10, 2).then(function(n) {
          r.success(n === "4949")
        }), r
      }

      function h(i, u) {
        var f = new t.Promise;
        return t.readBlobToHex(n, i + 18, 2).then(function(n) {
          if (u) return f.success(r(n));
          f.success(parseInt(n, 16))
        }), f
      }

      function c(i, r) {
        var u = i + 20,
          f = r * 12;
        return t.readBlobToHex(n, u, f)
      }

      function l(n) {
        for (var i = [], t = 0; t + 24 <= n.length;) i.push(n.slice(t, t + 24)), t += 24;
        return i
      }

      function a(n, i) {
        var o = 16,
          f = t.extend([], e),
          s = {};
        return t.each(i, function(t, i) {
          var c = i.slice(0, 4),
            e = n ? r(c) : parseInt(c, 16),
            l = f.indexOf(e),
            h, a, v;
          return l >= 0 && (a = u[e].name, v = u[e].bytes, h = i.slice(o, o + v * 2), s[a] = n ? r(h) : parseInt(h, 16), f.splice(l, 1)), f.length === 0 ? !1 : void 0
        }), s
      }
      var e = [274],
        u = {
          274: {
            name: "Orientation",
            bytes: 2
          }
        };
      t.extend(this, {
        parse: function() {
          var u = new t.Promise,
            r = function(n) {
              i(t.format("EXIF header parse failed: '{}' ", n));
              u.failure(n)
            };
          return o().then(function(f) {
            i(t.format("Moving forward with EXIF header parsing for '{}'", n.name === undefined ? "blob" : n.name));
            s(f).then(function(n) {
              i(t.format("EXIF Byte order is {} endian", n ? "little" : "big"));
              h(f, n).then(function(e) {
                i(t.format("Found {} APP1 directory entries", e));
                c(f, e).then(function(t) {
                  var r = l(t),
                    f = a(n, r);
                  i("Successfully parsed some EXIF tags");
                  u.success(f)
                }, r)
              }, r)
            }, r)
          }, r), u
        }
      });
      this._testing = {};
      this._testing.parseLittleEndian = r
    };
    t.Identify = function(n, i) {
      "use strict";

      function r(n, i) {
        var r = !1,
          u = [].concat(n);
        return t.each(u, function(n, t) {
          if (i.indexOf(t) === 0) return r = !0, !1
        }), r
      }
      t.extend(this, {
        isPreviewable: function() {
          var o = this,
            u = new t.Promise,
            f = !1,
            e = n.name === undefined ? "blob" : n.name;
          return i(t.format("Attempting to determine if {} can be rendered in this browser", e)), i("First pass: check type attribute of blob object."), this.isPreviewableSync() ? (i("Second pass: check for magic bytes in file header."), t.readBlobToHex(n, 0, 4).then(function(n) {
            t.each(o.PREVIEWABLE_MIME_TYPES, function(i, e) {
              if (r(e, n)) return (i !== "image/tiff" || t.supportedFeatures.tiffPreviews) && (f = !0, u.success(i)), !1
            });
            i(t.format("'{}' is {} able to be rendered in this browser", e, f ? "" : "NOT"));
            f || u.failure()
          }, function() {
            i("Error reading file w/ name '" + e + "'.  Not able to be rendered in this browser.");
            u.failure()
          })) : u.failure(), u
        },
        isPreviewableSync: function() {
          var u = n.type,
            f = t.indexOf(Object.keys(this.PREVIEWABLE_MIME_TYPES), u) >= 0,
            r = !1,
            e = n.name === undefined ? "blob" : n.name;
          return f && (r = u === "image/tiff" ? t.supportedFeatures.tiffPreviews : !0), r || i(e + " is not previewable in this browser per the blob's type attr"), r
        }
      })
    };
    t.Identify.prototype.PREVIEWABLE_MIME_TYPES = {
      "image/jpeg": "ffd8ff",
      "image/gif": "474946",
      "image/png": "89504e",
      "image/bmp": "424d",
      "image/tiff": ["49492a00", "4d4d002a"]
    };
    t.ImageValidation = function(n, i) {
      "use strict";

      function r(n) {
        var i = !1;
        return t.each(n, function(n, t) {
          if (t > 0) return i = !0, !1
        }), i
      }

      function u() {
        var r = new t.Promise;
        return new t.Identify(n, i).isPreviewable().then(function() {
          var t = new Image,
            u = window.URL && window.URL.createObjectURL ? window.URL : window.webkitURL && window.webkitURL.createObjectURL ? window.webkitURL : null;
          u ? (t.onerror = function() {
            i("Cannot determine dimensions for image.  May be too large.", "error");
            r.failure()
          }, t.onload = function() {
            r.success({
              width: this.width,
              height: this.height
            })
          }, t.src = u.createObjectURL(n)) : (i("No createObjectURL function available to generate image URL!", "error"), r.failure())
        }, r.failure), r
      }

      function f(n, i) {
        var r;
        return t.each(n, function(n, t) {
          if (t > 0) {
            var u = /(max|min)(Width|Height)/.exec(n),
              e = u[2].charAt(0).toLowerCase() + u[2].slice(1),
              f = i[e];
            switch (u[1]) {
              case "min":
                if (f < t) return r = n, !1;
                break;
              case "max":
                if (f > t) return r = n, !1
            }
          }
        }), r
      }
      this.validate = function(n) {
        var e = new t.Promise;
        return i("Attempting to validate image."), r(n) ? u().then(function(t) {
          var i = f(n, t);
          i ? e.failure(i) : e.success()
        }, e.success) : e.success(), e
      }
    };
    t.Session = function(n) {
      "use strict";

      function r(n) {
        if (t.isArray(n)) return !0;
        i.log("Session response is not an array.", "error")
      }

      function u(n, u, f, e) {
        var o = !1;
        u = u && r(n);
        u && t.each(n, function(n, r) {
          if (r.uuid == null) o = !0, i.log(t.format("Session response item {} did not include a valid UUID - ignoring.", n), "error");
          else if (r.name == null) o = !0, i.log(t.format("Session response item {} did not include a valid name - ignoring.", n), "error");
          else try {
            return i.addFileRecord(r), !0
          } catch (u) {
            o = !0;
            i.log(u.message, "error")
          }
          return !1
        });
        e[u && !o ? "success" : "failure"](n, f)
      }
      var i = {
        endpoint: null,
        params: {},
        customHeaders: {},
        cors: {},
        addFileRecord: function() {},
        log: function() {}
      };
      t.extend(i, n, !0);
      this.refresh = function() {
        var n = new t.Promise,
          r = function(t, i, r) {
            u(t, i, r, n)
          },
          f = t.extend({}, i),
          e = new t.SessionAjaxRequester(t.extend(f, {
            onComplete: r
          }));
        return e.queryServer(), n
      }
    };
    t.SessionAjaxRequester = function(n) {
      "use strict";

      function u(n, r, u) {
        var f = null;
        if (r.responseText != null) try {
          f = t.parseJson(r.responseText)
        } catch (e) {
          i.log("Problem parsing session response: " + e.message, "error");
          u = !0
        }
        i.onComplete(f, !u, r)
      }
      var r, i = {
        endpoint: null,
        customHeaders: {},
        params: {},
        cors: {
          expected: !1,
          sendCredentials: !1
        },
        onComplete: function() {},
        log: function() {}
      };
      t.extend(i, n);
      r = t.extend(this, new t.AjaxRequester({
        acceptHeader: "application/json",
        validMethods: ["GET"],
        method: "GET",
        endpointStore: {
          get: function() {
            return i.endpoint
          }
        },
        customHeaders: i.customHeaders,
        log: i.log,
        onComplete: u,
        cors: i.cors
      }));
      t.extend(this, {
        queryServer: function() {
          var n = t.extend({}, i.params);
          i.log("Session query request.");
          r.initTransport("sessionRefresh").withParams(n).withCacheBuster().send()
        }
      })
    };
    t.Scaler = function(n, i) {
      "use strict";
      var l = this,
        u = n.customResizer,
        f = n.sendOriginal,
        e = n.orient,
        o = n.defaultType,
        s = n.defaultQuality / 100,
        h = n.failureText,
        c = n.includeExif,
        r = this._getSortedSizes(n.sizes);
      t.extend(this, {
        enabled: t.supportedFeatures.scaling && r.length > 0,
        getFileRecords: function(n, l, a) {
          var y = this,
            p = [],
            v = a.blob ? a.blob : a,
            w = new t.Identify(v, i);
          return w.isPreviewableSync() ? (t.each(r, function(n, r) {
            var f = y._determineOutputType({
              defaultType: o,
              requestedType: r.type,
              refType: v.type
            });
            p.push({
              uuid: t.getUniqueId(),
              name: y._getName(l, {
                name: r.name,
                type: f,
                refType: v.type
              }),
              blob: new t.BlobProxy(v, t.bind(y._generateScaledImage, y, {
                customResizeFunction: u,
                maxSize: r.maxSize,
                orient: e,
                type: f,
                quality: s,
                failedText: h,
                includeExif: c,
                log: i
              }))
            })
          }), p.push({
            uuid: n,
            name: l,
            size: v.size,
            blob: f ? v : null
          })) : p.push({
            uuid: n,
            name: l,
            size: v.size,
            blob: v
          }), p
        },
        handleNewFile: function(n, i, r, u, f, e, o, s) {
          var v = this,
            w = n.qqButtonId || n.blob && n.blob.qqButtonId,
            l = [],
            h = null,
            y = s.addFileToHandler,
            c = s.uploadData,
            a = s.paramsStore,
            p = t.getUniqueId();
          t.each(v.getFileRecords(r, i, n), function(n, i) {
            var u = i.size,
              r;
            i.blob instanceof t.BlobProxy && (u = -1);
            r = c.addFile({
              uuid: i.uuid,
              name: i.name,
              size: u,
              batchId: e,
              proxyGroupId: p
            });
            i.blob instanceof t.BlobProxy ? l.push(r) : h = r;
            i.blob ? (y(r, i.blob), f.push({
              id: r,
              file: i.blob
            })) : c.setStatus(r, t.status.REJECTED)
          });
          h !== null && (t.each(l, function(n, t) {
            var i = {
              qqparentuuid: c.retrieve({
                id: h
              }).uuid,
              qqparentsize: c.retrieve({
                id: h
              }).size
            };
            i[o] = c.retrieve({
              id: t
            }).uuid;
            c.setParentId(t, h);
            a.addReadOnly(t, i)
          }), l.length && function() {
            var n = {};
            n[o] = c.retrieve({
              id: h
            }).uuid;
            a.addReadOnly(h, n)
          }())
        }
      })
    };
    t.extend(t.Scaler.prototype, {
      scaleImage: function(n, i, r) {
        "use strict";
        if (!t.supportedFeatures.scaling) throw new t.Error("Scaling is not supported in this browser!");
        var u = new t.Promise,
          e = r.log,
          o = r.getFile(n),
          f = r.uploadData.retrieve({
            id: n
          }),
          s = f && f.name,
          h = f && f.uuid,
          c = {
            customResizer: i.customResizer,
            sendOriginal: !1,
            orient: i.orient,
            defaultType: i.type || null,
            defaultQuality: i.quality,
            failedToScaleText: "Unable to scale",
            sizes: [{
              name: "",
              maxSize: i.maxSize
            }]
          },
          l = new t.Scaler(c, e);
        return t.Scaler && t.supportedFeatures.imagePreviews && o ? t.bind(function() {
          var i = l.getFileRecords(h, s, o)[0];
          i && i.blob instanceof t.BlobProxy ? i.blob.create().then(u.success, u.failure) : (e(n + " is not a scalable image!", "error"), u.failure())
        }, this)() : (u.failure(), e("Could not generate requested scaled image for " + n + ".  Scaling is either not possible in this browser, or the file could not be located.", "error")), u
      },
      _determineOutputType: function(n) {
        "use strict";
        var i = n.requestedType,
          r = n.defaultType,
          u = n.refType;
        return !r && !i ? u !== "image/jpeg" ? "image/png" : u : i ? t.indexOf(Object.keys(t.Identify.prototype.PREVIEWABLE_MIME_TYPES), i) >= 0 ? i === "image/tiff" ? t.supportedFeatures.tiffPreviews ? i : r : i : r : r
      },
      _getName: function(n, i) {
        "use strict";
        var f = n.lastIndexOf("."),
          e = i.type || "image/png",
          s = i.refType,
          r = "",
          o = t.getExtension(n),
          u = "";
        return i.name && i.name.trim().length && (u = " (" + i.name + ")"), f >= 0 ? (r = n.substr(0, f), s !== e && (o = e.split("/")[1]), r += u + "." + o) : r = n + u, r
      },
      _getSortedSizes: function(n) {
        "use strict";
        return n = t.extend([], n), n.sort(function(n, t) {
          return n.maxSize > t.maxSize ? 1 : n.maxSize < t.maxSize ? -1 : 0
        })
      },
      _generateScaledImage: function(n, i) {
        "use strict";
        var o = this,
          s = n.customResizeFunction,
          r = n.log,
          h = n.maxSize,
          c = n.orient,
          f = n.type,
          l = n.quality,
          a = n.failedText,
          v = n.includeExif && i.type === "image/jpeg" && f === "image/jpeg",
          u = new t.Promise,
          y = new t.ImageGenerator(r),
          e = document.createElement("canvas");
        return r("Attempting to generate scaled version for " + i.name), y.generate(i, e, {
          maxSize: h,
          orient: c,
          customResizeFunction: s
        }).then(function() {
          var n = e.toDataURL(f, l),
            s = function() {
              r("Success generating scaled version for " + i.name);
              var f = t.dataUriToBlob(n);
              u.success(f)
            };
          v ? o._insertExifHeader(i, n, r).then(function(t) {
            n = t;
            s()
          }, function() {
            r("Problem inserting EXIF header into scaled image.  Using scaled image w/out EXIF data.", "error");
            s()
          }) : s()
        }, function() {
          r("Failed attempt to generate scaled version for " + i.name, "error");
          u.failure(a)
        }), u
      },
      _insertExifHeader: function(n, i, r) {
        "use strict";
        var u = new FileReader,
          f = new t.Promise,
          e = "";
        return u.onload = function() {
          e = u.result;
          f.success(t.ExifRestorer.restore(e, i))
        }, u.onerror = function() {
          r("Problem reading " + n.name + " during attempt to transfer EXIF data to scaled version.", "error");
          f.failure()
        }, u.readAsDataURL(n), f
      },
      _dataUriToBlob: function(n) {
        "use strict";
        var i, u, r, f;
        return i = n.split(",")[0].indexOf("base64") >= 0 ? atob(n.split(",")[1]) : decodeURI(n.split(",")[1]), u = n.split(",")[0].split(":")[1].split(";")[0], r = new ArrayBuffer(i.length), f = new Uint8Array(r), t.each(i, function(n, t) {
          f[n] = t.charCodeAt(0)
        }), this._createBlob(r, u)
      },
      _createBlob: function(n, t) {
        "use strict";
        var r = window.BlobBuilder || window.WebKitBlobBuilder || window.MozBlobBuilder || window.MSBlobBuilder,
          i = r && new r;
        return i ? (i.append(n), i.getBlob(t)) : new Blob([n], {
          type: t
        })
      }
    });
    t.ExifRestorer = function() {
      var n = {};
      return n.KEY_STR = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", n.encode64 = function(n) {
        var o = "",
          u, t, i = "",
          s, h, f, r = "",
          e = 0;
        do u = n[e++], t = n[e++], i = n[e++], s = u >> 2, h = (u & 3) << 4 | t >> 4, f = (t & 15) << 2 | i >> 6, r = i & 63, isNaN(t) ? f = r = 64 : isNaN(i) && (r = 64), o = o + this.KEY_STR.charAt(s) + this.KEY_STR.charAt(h) + this.KEY_STR.charAt(f) + this.KEY_STR.charAt(r), u = t = i = "", s = h = f = r = ""; while (e < n.length);
        return o
      }, n.restore = function(n, t) {
        var i = "data:image/jpeg;base64,";
        if (!n.match(i)) return t;
        var r = this.decode64(n.replace(i, "")),
          u = this.slice2Segments(r),
          f = this.exifManipulation(t, u);
        return i + this.encode64(f)
      }, n.exifManipulation = function(n, t) {
        var i = this.getExifArray(t),
          r = this.insertExif(n, i);
        return new Uint8Array(r)
      }, n.getExifArray = function(n) {
        for (var t, i = 0; i < n.length; i++)
          if (t = n[i], t[0] == 255 & t[1] == 225) return t;
        return []
      }, n.insertExif = function(n, t) {
        var f = n.replace("data:image/jpeg;base64,", ""),
          i = this.decode64(f),
          u = i.indexOf(255, 3),
          e = i.slice(0, u),
          o = i.slice(u),
          r = e;
        return r = r.concat(t), r.concat(o)
      }, n.slice2Segments = function(n) {
        for (var t = 0, i = [];;) {
          if (n[t] == 255 & n[t + 1] == 218) break;
          if (n[t] == 255 & n[t + 1] == 216) t += 2;
          else {
            var u = n[t + 2] * 256 + n[t + 3],
              r = t + u + 2,
              f = n.slice(t, r);
            i.push(f);
            t = r
          }
          if (t > n.length) break
        }
        return i
      }, n.decode64 = function(n) {
        var e, o, s = "",
          h, r, t, u = "",
          i = 0,
          f = [];
        if (/[^A-Za-z0-9\+\/\=]/g.exec(n)) throw new Error("There were invalid base64 characters in the input text.  Valid base64 characters are A-Z, a-z, 0-9, '+', '/',and '='");
        n = n.replace(/[^A-Za-z0-9\+\/\=]/g, "");
        do h = this.KEY_STR.indexOf(n.charAt(i++)), r = this.KEY_STR.indexOf(n.charAt(i++)), t = this.KEY_STR.indexOf(n.charAt(i++)), u = this.KEY_STR.indexOf(n.charAt(i++)), e = h << 2 | r >> 4, o = (r & 15) << 4 | t >> 2, s = (t & 3) << 6 | u, f.push(e), t != 64 && f.push(o), u != 64 && f.push(s), e = o = s = "", h = r = t = u = ""; while (i < n.length);
        return f
      }, n
    }();
    t.TotalProgress = function(n, i) {
      "use strict";
      var r = {},
        f = 0,
        u = 0,
        o = -1,
        s = -1,
        h = function(t, i) {
          (t !== o || i !== s) && n(t, i);
          o = t;
          s = i
        },
        l = function(n, i) {
          var r = !0;
          return t.each(n, function(n, u) {
            if (t.indexOf(i, u) >= 0) return r = !1, !1
          }), r
        },
        a = function(n) {
          e(n, -1, -1);
          delete r[n]
        },
        v = function(n, t, i) {
          (t.length === 0 || l(t, i)) && (h(u, u), this.reset())
        },
        c = function(n) {
          var t = i(n);
          t > 0 && (e(n, 0, t), r[n] = {
            loaded: 0,
            total: t
          })
        },
        e = function(n, t, i) {
          var e = r[n] ? r[n].loaded : 0,
            o = r[n] ? r[n].total : 0;
          t === -1 && i === -1 ? (f -= e, u -= o) : (t && (f += t - e), i && (u += i - o));
          h(f, u)
        };
      t.extend(this, {
        onAllComplete: v,
        onStatusChange: function(n, i, r) {
          r === t.status.CANCELED || r === t.status.REJECTED ? a(n) : r === t.status.SUBMITTING && c(n)
        },
        onIndividualProgress: function(n, t, i) {
          e(n, t, i);
          r[n] = {
            loaded: t,
            total: i
          }
        },
        onNewSize: function(n) {
          c(n)
        },
        reset: function() {
          r = {};
          f = 0;
          u = 0
        }
      })
    };
    t.PasteSupport = function(n) {
      "use strict";

      function u(n) {
        return n.type && n.type.indexOf("image/") === 0
      }

      function f() {
        r = t(i.targetElement).attach("paste", function(n) {
          var r = n.clipboardData;
          r && t.each(r.items, function(n, t) {
            if (u(t)) {
              var r = t.getAsFile();
              i.callbacks.pasteReceived(r)
            }
          })
        })
      }

      function e() {
        r && r()
      }
      var i, r;
      i = {
        targetElement: null,
        callbacks: {
          log: function() {},
          pasteReceived: function() {}
        }
      };
      t.extend(i, n);
      f();
      t.extend(this, {
        reset: function() {
          e()
        }
      })
    };
    t.FormSupport = function(n, i, r) {
      "use strict";

      function h(n) {
        n.getAttribute("action") && (f.newEndpoint = n.getAttribute("action"))
      }

      function e(n, t) {
        if (n.checkValidity && !n.checkValidity()) r("Form did not pass validation checks - will not upload.", "error"), t();
        else return !0
      }

      function c(n) {
        var r = n.submit;
        t(n).attach("submit", function(t) {
          t = t || window.event;
          t.preventDefault ? t.preventDefault() : t.returnValue = !1;
          e(n, r) && i()
        });
        n.submit = function() {
          e(n, r) && i()
        }
      }

      function l(n) {
        return n && (t.isString(n) && (n = document.getElementById(n)), n && (r("Attaching to form element."), h(n), o && c(n))), n
      }
      var f = this,
        o = n.interceptSubmit,
        u = n.element,
        s = n.autoUpload;
      t.extend(this, {
        newEndpoint: null,
        newAutoUpload: s,
        attachedToForm: !1,
        getFormInputsAsObject: function() {
          return u == null ? null : f._form2Obj(u)
        }
      });
      u = l(u);
      this.attachedToForm = !!u
    };
    t.extend(t.FormSupport.prototype, {
      _form2Obj: function(n) {
        "use strict";
        var i = {},
          u = function(n) {
            return t.indexOf(["button", "image", "reset", "submit"], n.toLowerCase()) < 0
          },
          f = function(n) {
            return t.indexOf(["checkbox", "radio"], n.toLowerCase()) >= 0
          },
          r = function(n) {
            return f(n.type) && !n.checked ? !0 : n.disabled && n.type.toLowerCase() !== "hidden"
          },
          e = function(n) {
            var i = null;
            return t.each(t(n).children(), function(n, t) {
              if (t.tagName.toLowerCase() === "option" && t.selected) return i = t.value, !1
            }), i
          };
        return t.each(n.elements, function(n, f) {
          if ((t.isInput(f, !0) || f.tagName.toLowerCase() === "textarea") && u(f.type) && !r(f)) i[f.name] = f.value;
          else if (f.tagName.toLowerCase() === "select" && !r(f)) {
            var o = e(f);
            o !== null && (i[f.name] = o)
          }
        }), i
      }
    });
    t.traditional = t.traditional || {};
    t.traditional.FormUploadHandler = function(n, i) {
      "use strict";

      function o(n, t) {
        var f, e, i;
        try {
          e = t.contentDocument || t.contentWindow.document;
          i = e.body.innerHTML;
          u("converting iframe's innerHTML to JSON");
          u("innerHTML = " + i);
          i && i.match(/^<pre/i) && (i = e.body.firstChild.firstChild.nodeValue);
          f = r._parseJsonResponse(i)
        } catch (o) {
          u("Error when attempting to parse form upload response (" + o.message + ")", "error");
          f = {
            success: !1
          }
        }
        return f
      }

      function s(t, i) {
        var u = n.paramsStore.get(t),
          o = n.method.toLowerCase() === "get" ? "GET" : "POST",
          s = n.endpointStore.get(t),
          h = f(t);
        return u[n.uuidName] = e(t), u[n.filenameParam] = h, r._initFormForUpload({
          method: o,
          endpoint: s,
          params: u,
          paramsInBody: n.paramsInBody,
          targetName: i.name
        })
      }
      var r = this,
        f = i.getName,
        e = i.getUuid,
        u = i.log;
      this.uploadFile = function(i) {
        var c = r.getInput(i),
          f = r._createIframe(i),
          h = new t.Promise,
          e;
        return e = s(i, f), e.appendChild(c), r._attachLoadEvent(f, function(e) {
          u("iframe loaded");
          var s = e ? e : o(i, f);
          r._detachLoadEvent(i);
          n.cors.expected || t(f).remove();
          s.success ? h.success(s) : h.failure(s)
        }), u("Sending upload request for " + i), e.submit(), t(e).remove(), h
      };
      t.extend(this, new t.FormUploadHandler({
        options: {
          isCors: n.cors.expected,
          inputName: n.inputName
        },
        proxy: {
          onCancel: n.onCancel,
          getName: f,
          getUuid: e,
          log: u
        }
      }))
    };
    t.traditional = t.traditional || {};
    t.traditional.XhrUploadHandler = function(n, i) {
      "use strict";
      var r = this,
        o = i.getName,
        s = i.getSize,
        h = i.getUuid,
        u = i.log,
        f = n.forceMultipart || n.paramsInBody,
        v = function(t, i, r) {
          var u = s(t),
            e = o(t);
          n.omitDefaultParams || (i[n.chunking.paramNames.partIndex] = r.part, i[n.chunking.paramNames.partByteOffset] = r.start, i[n.chunking.paramNames.chunkSize] = r.size, i[n.chunking.paramNames.totalParts] = r.count, i[n.totalFileSizeName] = u);
          f && !n.omitDefaultParams && (i[n.filenameParam] = e)
        },
        y = new t.traditional.AllChunksDoneAjaxRequester({
          cors: n.cors,
          endpoint: n.chunking.success.endpoint,
          headers: n.chunking.success.headers,
          jsonPayload: n.chunking.success.jsonPayload,
          log: u,
          method: n.chunking.success.method,
          params: n.chunking.success.params
        }),
        c = function(n, i) {
          var r = new t.Promise;
          return i.onreadystatechange = function() {
            if (i.readyState === 4) {
              var t = b(n, i);
              t.success ? r.success(t.response, i) : r.failure(t.response, i)
            }
          }, r
        },
        p = function(t) {
          var i = n.paramsStore.get(t),
            u = o(t),
            f = s(t);
          return i[n.uuidName] = h(t), i[n.filenameParam] = u, i[n.totalFileSizeName] = f, i[n.chunking.paramNames.totalParts] = r._getTotalChunks(t), i
        },
        w = function(i, r) {
          return t.indexOf([200, 201, 202, 203, 204], i.status) < 0 || n.requireSuccessJson && !r.success || r.reset
        },
        b = function(n, t) {
          var i;
          return u("xhr - server response received for " + n), u("responseText = " + t.responseText), i = e(!0, t), {
            success: !w(t, i),
            response: i
          }
        },
        e = function(i, r) {
          var f = {};
          try {
            u(t.format("Received response status {} with body: {}", r.status, r.responseText));
            f = t.parseJson(r.responseText)
          } catch (e) {
            i && n.requireSuccessJson && u("Error when attempting to parse xhr response text (" + e.message + ")", "error")
          }
          return f
        },
        k = function(i) {
          var u = new t.Promise;
          return y.complete(i, r._createXhr(i), p(i), n.customHeaders.get(i)).then(function(n) {
            u.success(e(!1, n), n)
          }, function(n) {
            u.failure(e(!1, n), n)
          }), u
        },
        l = function(i) {
          var a = i.fileOrBlob,
            u = i.id,
            v = i.xhr,
            e = i.xhrOverrides || {},
            y = i.customParams || {},
            b = i.params || {},
            p = e.params || {},
            r, c = f ? new FormData : null,
            k = e.method || n.method,
            l = e.endpoint || n.endpointStore.get(u),
            w = o(u),
            d = s(u);
          return (n.omitDefaultParams ? (r = t.extend({}, y), t.extend(r, p)) : (r = t.extend({}, y), t.extend(r, p), t.extend(r, b), r[n.uuidName] = h(u), r[n.filenameParam] = w, f ? r[n.totalFileSizeName] = d : n.paramsInBody || (r[n.inputName] = w)), n.paramsInBody || (l = t.obj2url(r, l)), v.open(k, l, !0), n.cors.expected && n.cors.sendCredentials && (v.withCredentials = !0), f) ? (n.paramsInBody && t.obj2FormData(r, c), c.append(n.inputName, a), c) : a
        },
        a = function(i) {
          var e = i.headerOverrides,
            o = i.id,
            u = i.xhr,
            s, h;
          e ? t.each(e, function(n, t) {
            u.setRequestHeader(n, t)
          }) : (s = n.customHeaders.get(o), h = r.getFile(o), u.setRequestHeader("Accept", "application/json"), u.setRequestHeader("X-Requested-With", "XMLHttpRequest"), u.setRequestHeader("Cache-Control", "no-cache"), f || (u.setRequestHeader("Content-Type", "application/octet-stream"), u.setRequestHeader("X-Mime-Type", h.type)), t.each(s, function(n, t) {
            u.setRequestHeader(n, t)
          }))
        };
      t.extend(this, {
        uploadChunk: function(t) {
          var i = t.id,
            f = t.chunkIdx,
            s = t.overrides || {},
            w = t.resuming,
            e = r._getChunkData(i, f),
            u = r._createXhr(i, f),
            h, y, p, o = {};
          return h = c(i, u), r._registerProgressHandler(i, f, e.size), p = n.paramsStore.get(i), v(i, o, e), w && (o[n.resume.paramNames.resuming] = !0), y = l({
            fileOrBlob: e.blob,
            id: i,
            customParams: p,
            params: o,
            xhr: u,
            xhrOverrides: s
          }), a({
            headerOverrides: s.headers,
            id: i,
            xhr: u
          }), u.send(y), h
        },
        uploadFile: function(t) {
          var o = r.getFile(t),
            u, i, f, e;
          return i = r._createXhr(t), r._registerProgressHandler(t), u = c(t, i), f = n.paramsStore.get(t), e = l({
            fileOrBlob: o,
            id: t,
            customParams: f,
            xhr: i
          }), a({
            id: t,
            xhr: i
          }), i.send(e), u
        }
      });
      t.extend(this, new t.XhrUploadHandler({
        options: t.extend({
          namespace: "traditional"
        }, n),
        proxy: t.extend({
          getEndpoint: n.endpointStore.get
        }, i)
      }));
      t.override(this, function(r) {
        return {
          finalizeChunks: function(u) {
            i.onFinalizing(u);
            return n.chunking.success.endpoint ? k(u) : r.finalizeChunks(u, t.bind(e, this, !0))
          }
        }
      })
    };
    t.traditional.AllChunksDoneAjaxRequester = function(n) {
      "use strict";
      var u, i = {
          cors: {
            allowXdr: !1,
            expected: !1,
            sendCredentials: !1
          },
          endpoint: null,
          log: function() {},
          method: "POST"
        },
        r = {},
        f = {
          get: function(n) {
            return t.isFunction(i.endpoint) ? i.endpoint(n) : i.endpoint
          }
        };
      t.extend(i, n);
      u = t.extend(this, new t.AjaxRequester({
        acceptHeader: "application/json",
        contentType: i.jsonPayload ? "application/json" : "application/x-www-form-urlencoded",
        validMethods: [i.method],
        method: i.method,
        endpointStore: f,
        allowXRequestedWithAndCacheControl: !1,
        cors: i.cors,
        log: i.log,
        onComplete: function(n, t, i) {
          var u = r[n];
          delete r[n];
          i ? u.failure(t) : u.success(t)
        }
      }));
      t.extend(this, {
        complete: function(n, f, e, o) {
          var s = new t.Promise;
          return i.log("Submitting All Chunks Done request for " + n), r[n] = s, u.initTransport(n).withParams(i.params(n) || e).withHeaders(i.headers(n) || o).send(f), s
        }
      })
    }
  }(window), function(n, t, i) {
    "use strict";

    function yt(n, t) {
      return function() {
        var r, i = this,
          u = i.base;
        return i.base = n, r = t.apply(i, arguments), i.base = u, r
      }
    }

    function pt(n, t) {
      return v(t) && (t = yt(n ? n._d ? n : yt(bt, n) : bt, t), t._d = 1), t
    }

    function it(n, t) {
      for (var i in t.props) vi.test(i) && (n[i] = pt(n[i], t.props[i]))
    }

    function wt(n) {
      return n
    }

    function bt() {
      return ""
    }

    function bi(n) {
      return this.base ? this.baseApply(arguments) : n
    }

    function kt(n) {
      s._dbgMode = n;
      li = n ? "Unavailable (nested view): use #getIndex()" : "";
      vt("dbg", wi.dbg = tt.dbg = n ? bi : wt)
    }

    function rt(n) {
      this.name = (r.link ? "JsViews" : "JsRender") + " Error";
      this.message = n || this.name
    }

    function f(n, t) {
      for (var i in t) n[i] = t[i];
      return n
    }

    function v(n) {
      return typeof n == "function"
    }

    function dt(n, t, i) {
      return (!o.rTag || n) && (b = n ? n.charAt(0) : b, k = n ? n.charAt(1) : k, c = t ? t.charAt(0) : c, y = t ? t.charAt(1) : y, nt = i || nt, n = "\\" + b + "(\\" + nt + ")?\\" + k, t = "\\" + c + "\\" + y, w = "(?:(?:(\\w+(?=[\\/\\s\\" + c + "]))|(?:(\\w+)?(:)|(>)|!--((?:[^-]|-(?!-))*)--|(\\*)))\\s*((?:[^\\" + c + "]|\\" + c + "(?!\\" + y + "))*?)", o.rTag = w + ")", w = new RegExp(n + w + "(\\/)?|(?:\\/(\\w+)))" + t, "g"), ci = new RegExp("<.*>|([^\\\\]|^)[{}]|" + n + ".*" + t)), [b, k, c, y, nt]
    }

    function ki(n, t) {
      t || (t = n, n = i);
      var e, f, o, u, r = this,
        s = !t || t === "root";
      if (n) {
        if (u = r.type === t ? r : i, !u)
          if (e = r.views, r._.useKey) {
            for (f in e)
              if (u = e[f].get(n, t)) break
          } else
            for (f = 0, o = e.length; !u && f < o; f++) u = e[f].get(n, t)
      } else if (s)
        while (r.parent.parent) u = r = r.parent;
      else
        while (r && !u) u = r.type === t ? r : i, r = r.parent;
      return u
    }

    function gt() {
      var n = this.get("item");
      return n ? n.index : i
    }

    function ni() {
      return this.index
    }

    function di(t) {
      var u, e = this,
        o = e.linkCtx,
        r = (e.ctx || {})[t];
      return r === i && o && o.ctx && (r = o.ctx[t]), r === i && (r = wi[t]), r && v(r) && !r._wrp && (u = function() {
        return r.apply(!this || this === n ? e : this, arguments)
      }, u._wrp = !0, f(u, r)), u || r
    }

    function gi(n, t, r, e) {
      var s, h, l = +r === r && t.tmpl.bnds[r - 1],
        c = t.linkCtx;
      return e = e !== i && {
        props: {},
        args: [e]
      }, r = e || (l ? l(t.data, t, u) : r), h = r.args[0], (n || l) && (s = c && c.tag, s || (s = f(new o._tg, {
        _: {
          inline: !c,
          bnd: l,
          unlinked: !0
        },
        tagName: ":",
        cvt: n,
        flow: !0,
        tagCtx: r
      }), c && (c.tag = s, s.linkCtx = c), r.ctx = a(r.ctx, (c ? c.view : t).ctx)), s._er = e && h, it(s, r), r.view = t, s.ctx = r.ctx || {}, delete r.ctx, t._.tag = s, h = ut(s, s.convert || n !== "true" && n)[0], h = l && t._.onRender ? t._.onRender(h, t, l) : h, t._.tag = i), h != i ? h : ""
    }

    function ut(n, t) {
      var r = n.tagCtx,
        u = r.view,
        i = r.args;
      return t = t && ("" + t === t ? u.getRsc("converters", t) || l("Unknown converter: '" + t + "'") : t), i = !i.length && !r.index ? [u.data] : t ? i.slice() : i, t && (t.depends && (n.depends = o.getDeps(n.depends, n, t.depends, t)), i[0] = t.apply(n, i)), i
    }

    function nr(n, t) {
      for (var f, e, r = this; f === i && r;) e = r.tmpl[n], f = e && e[t], r = r.parent;
      return f || u[n][t]
    }

    function tr(n, t, r, o, s, h) {
      var c, ct, lt, et, y, at, g, v, ot, nt, st, vt, yt, b, w, ht, pt, k = "",
        p = t.linkCtx || 0,
        rt = t.ctx,
        wt = r || t.tmpl,
        ft = +o === o && wt.bnds[o - 1];
      for (n._is === "tag" && (c = n, n = c.tagName, o = c.tagCtxs), c = c || p.tag, h = h !== i && (k += h, [{
          props: {},
          args: []
        }]), o = h || (ft ? ft(t.data, t, u) : o), at = o.length, y = 0; y < at; y++) y || r && c || (st = t.getRsc("tags", n) || l("Unknown tag: {{" + n + "}}")), v = o[y], (!p.tag || y && !p.tag._.inline || c._er) && (nt = v.tmpl, nt = v.content = nt && wt.tmpls[nt - 1], f(v, {
        tmpl: (c ? c : st).template || nt,
        render: fi,
        index: y,
        view: t,
        ctx: a(v.ctx, rt)
      })), (r = v.props.tmpl) && (r = "" + r === r ? t.getRsc("templates", r) || e(r) : r, v.tmpl = r), c || (c = new st._ctr, vt = !!c.init, c._ = {
        inline: !p,
        unlinked: !0
      }, p && (p.tag = c, c.linkCtx = p), (c._.bnd = ft || p.fn) ? c._.arrVws = {} : c.dataBoundOnly && l("{^{" + n + "}} tag must be data-bound"), c.tagName = n, c.parent = et = rt && rt.tag, c._def = st, c.tagCtxs = o), v.tag = c, c.dataMap && c.tagCtxs && (v.map = c.tagCtxs[y].map), c.flow || (ot = v.ctx = v.ctx || {}, ct = c.parents = ot.parentTags = rt && a(ot.parentTags, rt.parentTags) || {}, et && (ct[et.tagName] = et), ct[c.tagName] = ot.tag = c);
      if (t._.tag = c, !(c._er = h)) {
        for (it(c, o[0]), c.rendering = {}, y = 0; y < at; y++) v = c.tagCtx = c.tagCtxs[y], ht = v.props, w = ut(c, c.convert), (yt = ht.dataMap || c.dataMap) && (w.length || ht.dataMap) && (b = v.map, (!b || b.src !== w[0] || s) && (b && b.src && b.unmap(), b = v.map = yt.map(w[0], ht)), w = [b.tgt]), c.ctx = v.ctx, !y && vt && (pt = c.template, c.init(v, p, c.ctx), vt = i, c.template !== pt && (c._.tmpl = c.template)), p && (p.attr = c.attr = p.attr || c.attr), g = i, c.render && (g = c.render.apply(c, w)), w = w.length ? w : [t], g = g !== i ? g : v.render(w[0], !0) || (s ? i : ""), k = k ? k + (g || "") : g;
        delete c.rendering
      }
      return c.tagCtx = c.tagCtxs[0], c.ctx = c.tagCtx.ctx, c._.inline && (lt = c.attr) && lt !== d && (k = lt === "text" ? tt.html(k) : ""), ft && t._.onRender ? t._.onRender(k, t, ft) : k
    }

    function p(n, t, i, r, u, f, e, o) {
      var a, h, c, s = this,
        v = t === "array",
        l = {
          key: 0,
          useKey: v ? 0 : 1,
          id: "" + kr++,
          onRender: o,
          bnds: {}
        };
      s.data = r;
      s.tmpl = u;
      s.content = e;
      s.views = v ? [] : {};
      s.parent = i;
      s.type = t || "top";
      s._ = l;
      s.linked = !!o;
      i ? (a = i.views, h = i._, h.useKey ? (a[l.key = "_" + h.useKey++] = s, s.index = li, s.getIndex = gt, c = h.tag, l.bnd = v && (!c || !!c._.bnd && c)) : a.splice(l.key = s.index = f, 0, s), s.ctx = n || i.ctx) : s.ctx = n
    }

    function ir(n) {
      var i, r, t, u, e, f, s;
      for (i in g)
        if (e = g[i], (f = e.compile) && (r = n[i + "s"]))
          for (t in r) u = r[t] = f(t, r[t], n), u && (s = o.onStore[i]) && s(t, u, f)
    }

    function rr(n, t, r) {
      var l, h, s, c, u = new o._tg;
      if (v(t) && (t = {
          depends: t.depends,
          render: t
        }), s = t.baseTag) {
        t.flow = !!t.flow;
        t.baseTag = s = "" + s === s ? r && r.tags[s] || vt[s] : s;
        u = f(u, s);
        for (c in t) u[c] = pt(s[c], t[c])
      } else u = f(u, t);
      return (h = u.template) !== i && (u.template = "" + h === h ? e[h] || e(h) : h), u.init !== !1 && (l = u._ctr = function() {}, (l.prototype = u).constructor = l), r && (u._parentTmpl = r), u
    }

    function ur(n) {
      return this.base.apply(this, n)
    }

    function ti(r, u, f, o) {
      function c(u) {
        if ("" + u === u || u.nodeType > 0) {
          try {
            h = u.nodeType > 0 ? u : !ci.test(u) && t && t(n.document).find(u)[0]
          } catch (s) {}
          return h && (u = e[r = r || h.getAttribute(at)], u || (r = r || "_" + br++, h.setAttribute(at, r), u = e[r] = ti(r, h.innerHTML, f, o)), h = i), u
        }
      }
      var s, h;
      return u = u || "", s = c(u), o = o || (u.markup ? u : {}), o.tmplName = r, f && (o._parentTmpl = f), !s && u.markup && (s = c(u.markup)) && s.fn && (s.debug !== u.debug || s.allowCode !== u.allowCode) && (s = s.markup), s !== i ? (r && !f && (pi[r] = function() {
        return u.render.apply(u, arguments)
      }), s.fn || u.fn ? s.fn && (u = r && r !== s.tmplName ? a(o, s) : s) : (u = ri(s, o), et(s.replace(lr, "\\$&"), u)), ir(o), u) : void 0
    }

    function ii(n) {
      function t(t, i) {
        this.tgt = n.getTgt(t, i)
      }
      return v(n) && (n = {
        getTgt: n
      }), n.baseMap && (n = f(f({}, n.baseMap), n)), n.map = function(n, i) {
        return new t(n, i)
      }, n
    }

    function ri(n, t) {
      var i, e = s.wrapMap || {},
        u = f({
          markup: n,
          tmpls: [],
          links: {},
          tags: {},
          bnds: [],
          _is: "template",
          render: ui
        }, t);
      return t.htmlTag || (i = yr.exec(n), u.htmlTag = i ? i[1].toLowerCase() : ""), i = e[u.htmlTag], i && i !== e.div && (u.markup = r.trim(u.markup)), u
    }

    function fr(n, t) {
      function r(e, s, h) {
        var v, c, l, a;
        if (e && typeof e === lt && !e.nodeType && !e.markup && !e.getTgt) {
          for (l in e) r(l, e[l], s);
          return u
        }
        return s === i && (s = e, e = i), e && "" + e !== e && (h = s, s = e, e = i), a = h ? h[f] = h[f] || {} : r, c = t.compile, s === null ? e && delete a[e] : (s = c ? s = c(e, s, h) : s, e && (a[e] = s)), c && s && (s._is = n), s && (v = o.onStore[n]) && v(e, s, c), s
      }
      var f = n + "s";
      u[f] = r;
      g[n] = t
    }

    function er(n, t, i) {
      var r = this.jquery && (this[0] || l('Unknown template: "' + this.selector + '"')),
        u = r.getAttribute(at);
      return ui.call(u ? e[u] : e(r), n, t, i)
    }

    function ft(n, t, i) {
      if (s._dbgMode) try {
        return n.fn(t, i, u)
      } catch (r) {
        return l(r, i)
      }
      return n.fn(t, i, u)
    }

    function ui(n, t, i, u, f, e) {
      var o = this;
      return !u && o.fn._nvw && !r.isArray(n) ? ft(o, n, {
        tmpl: o
      }) : fi.call(o, n, t, i, u, f, e)
    }

    function fi(n, t, u, o, s, c) {
      function st(n) {
        nt = f({}, t);
        nt[w] = n
      }
      var b, ht, y, ut, et, ot, k, g, tt, it, ct, l, at, w, nt, v = this,
        rt = "";
      if (!!t === t && (u = t, t = i), typeof t !== lt && (t = i), s === !0 && (ot = !0, s = 0), v.tag ? (k = v, v = v.tag, tt = v._, ct = v.tagName, l = tt.tmpl || k.tmpl, tt.noVws = at = v.attr && v.attr !== d, t = a(t, v.ctx), g = k.content, k.props.link === !1 && (t = t || {}, t.link = !1), o = o || k.view, (w = k.props.itemVar) && (w.charAt(0) !== "~" && h("Use itemVar='~myItem'"), w = w.slice(1)), n = arguments.length ? n : o) : l = v, l && (!o && n && n._is === "view" && (o = n), o && (g = g || o.content, c = c || o._.onRender, n === o && (n = o.data), t = a(t, o.ctx)), o && o.type !== "top" || ((t = t || {}).root = n), l.fn || (l = e[l] || e(l)), l)) {
        if (c = (t && t.link) !== !1 && !at && c, it = c, c === !0 && (it = i, c = o._.onRender), t = l.helpers ? a(l.helpers, t) : t, nt = t, r.isArray(n) && !u)
          for (y = ot ? o : s !== i && o || new p(t, "array", o, n, l, s, g, c), w && (y.it = w), w = y.it, b = 0, ht = n.length; b < ht; b++) w && st(n[b]), ut = new p(nt, "item", y, n[b], l, (s || 0) + b, g, c), et = ft(l, n[b], ut), rt += y._.onRender ? y._.onRender(et, ut) : et;
        else w && st(n), y = ot ? o : new p(nt, ct || "data", o, n, l, s, g, c), tt && !v.flow && (y.tag = v), rt += ft(l, n, y);
        return it ? it(rt, y) : rt
      }
      return ""
    }

    function l(n, t, i) {
      var r = s.onError(n, t, i);
      if ("" + n === n) throw new o.Err(r);
      return !t.linkCtx && t.linked ? tt.html(r) : r
    }

    function h(n) {
      l("Syntax error\n" + n)
    }

    function et(n, t, i, r, u) {
      function k(t) {
        t -= e;
        t && l.push(n.substr(e, t).replace(ct, "\\n"))
      }

      function a(t) {
        t && h('Unmatched or missing tag: "{{/' + t + '}}" in template:\n' + n)
      }

      function g(o, s, y, w, b, g, tt, it, rt, ut, ft, et) {
        g && (b = ":", w = d);
        ut = ut || i && !u;
        var ot = (s || i) && [
            []
          ],
          ht = "",
          lt = "",
          at = "",
          vt = "",
          yt = "",
          pt = "",
          wt = "",
          bt = "",
          st = !ut && !b && !tt;
        y = y || (rt = rt || "#data", b);
        k(et);
        e = et + o.length;
        it ? nt && l.push(["*", "\n" + rt.replace(ai, "$1") + "\n"]) : y ? (y === "else" && (vr.test(rt) && h('for "{{else if expr}}" use "{{else expr}}"'), ot = f[7] && [
          []
        ], f[8] = n.substring(f[8], et), f = c.pop(), l = f[2], st = !0), rt && si(rt.replace(ct, " "), ot, t).replace(ar, function(n, t, i, r, u, f, e, o) {
          return e ? (lt += f + ",", vt += "'" + o + "',") : i ? (at += r + f + ",", pt += r + "'" + o + "',") : t ? wt += f : (u === "trigger" && (bt += f), ht += r + f + ",", yt += r + "'" + o + "',", p = p || vi.test(u)), ""
        }).slice(0, -1), ot && ot[0] && ot.pop(), v = [y, w || !!r || p || "", st && [], ei(vt, yt, pt), ei(lt, ht, at), wt, bt, ot || 0], l.push(v), st && (c.push(f), f = v, f[8] = e)) : ft && (a(ft !== f[0] && f[0] !== "else" && ft), f[8] = n.substring(f[8], et), f = c.pop());
        a(!f && ft);
        l = f[2]
      }
      var s, v, p, nt = t && t.allowCode,
        o = [],
        e = 0,
        c = [],
        l = o,
        f = [, , o];
      return i && (n = b + n + y), a(c[0] && c[0][2].pop()[0]), n.replace(w, g), k(n.length), (e = o[o.length - 1]) && a("" + e !== e && +e[8] === e[8] && e[0]), i ? (s = st(o, n, i), ot(s, [o[0][7]])) : s = st(o, t), s._nvw && (s._nvw = !/[~#]/.test(n)), s
    }

    function ot(n, t) {
      var r, i, u = 0,
        f = t.length;
      for (n.deps = []; u < f; u++) {
        i = t[u];
        for (r in i) r !== "_jsvto" && i[r].length && (n.deps = n.deps.concat(i[r]))
      }
      n.paths = i
    }

    function ei(n, t, i) {
      return [n.slice(0, -1), t.slice(0, -1), i.slice(0, -1)]
    }

    function oi(n, t) {
      return "\n\t" + (t ? t + ":{" : "") + "args:[" + n[0] + "]" + (n[1] || !t ? ",\n\tprops:{" + n[1] + "}" : "") + (n[2] ? ",\n\tctx:{" + n[2] + "}" : "")
    }

    function si(n, t, i) {
      function d(d, g, nt, tt, it, rt, ut, ft, ot, st, ht, ct, lt, at, vt, yt, pt, wt, bt, kt) {
        function ri(n, i, o, s, h, c, l, a) {
          var y = o === ".";
          if (o && (it = it.slice(i.length), y || (n = (s ? 'view.hlp("' + s + '")' : h ? "view" : "data") + (a ? (c ? "." + c : s ? "" : h ? "" : "." + o) + (l || "") : (a = s ? "" : h ? c || "" : o, "")), n = n + (a ? "." + a : ""), n = i + (n.slice(0, 9) === "view.data" ? n.slice(5) : n)), u)) {
            if (gt = e === "linkTo" ? v = t._jsvto = t._jsvto || [] : f.bd, dt = y && gt[gt.length - 1]) {
              if (dt._jsv) {
                while (dt.sb) dt = dt.sb;
                dt.bnd && (it = "^" + it.slice(1));
                dt.sb = it;
                dt.bnd = dt.bnd || it.charAt(0) === "^"
              }
            } else gt.push(it);
            b[r] = bt + (y ? 1 : 0)
          }
          return n
        }
        tt = u && tt;
        tt && !ft && (it = tt + it);
        rt = rt || "";
        nt = nt || g || ct;
        it = it || ot;
        st = st || pt || "";
        var ii, ti, gt, dt, ni;
        if (!ut || s || o) {
          if (u && yt && !s && !o && (!e || p || v) && (ii = b[r - 1], kt.length - 1 > bt - (ii || 0))) {
            if (ii = kt.slice(ii, bt + d.length), ti !== !0)
              if (gt = v || l[r - 1].bd, dt = gt[gt.length - 1], dt && dt.prm) {
                while (dt.sb && dt.sb.prm) dt = dt.sb;
                ni = dt.sb = {
                  path: dt.sb,
                  bnd: dt.bnd
                }
              } else gt.push(ni = {
                path: gt.pop()
              });
            yt = k + ":" + ii + " onerror=''" + c;
            ti = w[yt];
            ti || (w[yt] = !0, w[yt] = ti = et(yt, i, !0));
            ti !== !0 && ni && (ni._jsv = ti, ni.prm = f.bd, ni.bnd = ni.bnd || ni.path && ni.path.indexOf("^") >= 0)
          }
          return s ? (s = !lt, s ? d : '"') : o ? (o = !at, o ? d : '"') : (nt ? (b[r] = bt++, f = l[++r] = {
            bd: []
          }, nt) : "") + (wt ? r ? "" : (a = kt.slice(a, bt), e ? (e = p = v = !1, "\b") : "\b,") + a + (a = bt + d.length, u && t.push(f.bd = []), "\b") : ft ? (r && h(n), u && t.pop(), e = it, p = tt, a = bt + d.length, tt && (u = f.bd = t[e] = []), it + ":") : it ? it.split("^").join(".").replace(hr, ri) + (st ? (f = l[++r] = {
            bd: []
          }, y[r] = !0, st) : rt) : rt ? rt : vt ? (y[r] = !1, f = l[--r], vt) + (st ? (f = l[++r], y[r] = !0, st) : "") : ht ? (y[r] || h(n), ",") : g ? "" : (s = lt, o = at, '"'))
        }
        h(n)
      }
      var e, v, p, o, s, u = t && t[0],
        f = {
          bd: u
        },
        l = {
          0: f
        },
        a = 0,
        w = i ? i.links : u && (u.links = u.links || {}),
        r = 0,
        y = {},
        b = {};
      return (n + (i ? " " : "")).replace(cr, d)
    }

    function st(n, t, r) {
      var w, f, o, l, g, yt, pt, ni, wt, nt, et, b, e, ht, tt, it, v, lt, y, rt, p, ut, bt, k, kt, dt, at, c, a, vt, gt, s = 0,
        u = "",
        ft = {},
        ti = n.length;
      for ("" + t === t ? (y = r ? 'data-link="' + t.replace(ct, " ").slice(1, -1) + '"' : t, t = 0) : (y = t.tmplName || "unnamed", t.allowCode && (ft.allowCode = !0), t.debug && (ft.debug = !0), b = t.bnds, lt = t.tmpls), w = 0; w < ti; w++)
        if (f = n[w], "" + f === f) u += '\n+"' + f + '"';
        else if (o = f[0], o === "*") u += ";\n" + f[1] + "\nret=ret";
      else {
        if (l = f[1], ut = !r && f[2], g = oi(f[3], "params") + "}," + oi(ht = f[4]), a = f[5], gt = f[6], bt = f[8] && f[8].replace(ai, "$1"), (dt = o === "else") ? e && e.push(f[7]) : (s = 0, b && (e = f[7]) && (e = [e], s = b.push(1))), (at = o === ":") ? l && (o = l === d ? ">" : l + o) : (ut && (rt = ri(bt, ft), rt.tmplName = y + "/" + o, st(ut, rt), lt.push(rt)), dt || (p = o, kt = u, u = ""), k = n[w + 1], k = k && k[0] === "else"), vt = a ? ";\ntry{\nret+=" : "\n+", tt = "", it = "", at && (e || gt || l && l !== d)) {
          if (c = "return {" + g + "};", v = 'c("' + l + '",view,', c = new Function("data,view,j,u", " // " + y + " " + s + " " + o + "\n" + c), c._er = a, tt = v + s + ",", it = ")", c._tag = o, r) return c;
          ot(c, e);
          et = !0
        }
        if (u += at ? (r ? (a ? "\ntry{\n" : "") + "return " : vt) + (et ? (et = i, nt = wt = !0, v + (e ? (b[s - 1] = c, s) : "{" + g + "}") + ")") : o === ">" ? (pt = !0, "h(" + ht[0] + ")") : (ni = !0, "((v=" + (ht[0] || "data") + ')!=null?v:"")')) : (nt = yt = !0, "\n{view:view,tmpl:" + (ut ? lt.length : "0") + "," + g + "},"), p && !k) {
          if (u = "[" + u.slice(0, -1) + "]", v = 't("' + p + '",view,this,', r || e) {
            if (u = new Function("data,view,j,u", " // " + y + " " + s + " " + p + "\nreturn " + u + ";"), u._er = a, u._tag = p, e && ot(b[s - 1] = u, e), r) return u;
            tt = v + s + ",undefined,";
            it = ")"
          }
          u = kt + vt + v + (s || u) + ")";
          e = 0;
          p = 0
        }
        a && (nt = !0, u += ";\n}catch(e){ret" + (r ? "urn " : "+=") + tt + "j._err(e,view," + a + ")" + it + ";}" + (r ? "" : "ret=ret"))
      }
      u = "// " + y + "\nvar v" + (yt ? ",t=j._tag" : "") + (wt ? ",c=j._cnvt" : "") + (pt ? ",h=j.converters.html" : "") + (r ? ";\n" : ',ret=""\n') + (ft.debug ? "debugger;" : "") + u + (r ? "\n" : ";\nreturn ret;");
      try {
        u = new Function("data,view,j,u", u)
      } catch (ii) {
        h("Compiled template code:\n\n" + u + '\n: "' + ii.message + '"')
      }
      return t && (t.fn = u), nt || (u._nvw = !0), u
    }

    function a(n, t) {
      return n && n !== t ? t ? f(f({}, t), n) : n : t && f({}, t)
    }

    function or(n) {
      return yi[n] || (yi[n] = "&#" + n.charCodeAt(0) + ";")
    }

    function sr(n) {
      var i, t, r = [];
      if (typeof n === lt)
        for (i in n) t = n[i], t && t.toJSON && !t.toJSON() || v(t) || r.push({
          key: i,
          prop: t
        });
      return r
    }

    function hi(n) {
      return n != null ? pr.test(n) && ("" + n).replace(wr, or) || n : ""
    }
    if ((!t || !t.render) && !n.jsviews) {
      var r, ht, w, ci, li, b = "{",
        k = "{",
        c = "}",
        y = "}",
        nt = "^",
        hr = /^(!*?)(?:null|true|false|\d[\d.]*|([\w$]+|\.|~([\w$]+)|#(view|([\w$]+))?)([\w$.^]*?)(?:[.[^]([\w$]+)\]?)?)$/g,
        cr = /(\()(?=\s*\()|(?:([([])\s*)?(?:(\^?)(!*?[#~]?[\w$.^]+)?\s*((\+\+|--)|\+|-|&&|\|\||===|!==|==|!=|<=|>=|[<>%*:?\/]|(=))\s*|(!*?[#~]?[\w$.^]+)([([])?)|(,\s*)|(\(?)\\?(?:(')|("))|(?:\s*(([)\]])(?=\s*[.^]|\s*$|[^\(\[])|[)\]])([([]?))|(\s+)/g,
        ct = /[ \t]*(\r\n|\n|\r)/g,
        ai = /\\(['"])/g,
        lr = /['"\\]/g,
        ar = /(?:\x08|^)(onerror:)?(?:(~?)(([\w$]+):)?([^\x08]+))\x08(,)?([^\x08]+)/gi,
        vr = /^if\s/,
        yr = /<(\w+)[>\s]/,
        pr = /[\x00`><\"'&]/,
        vi = /^on[A-Z]|^convert(Back)?$/,
        wr = /[\x00`><"'&]/g,
        br = 0,
        kr = 0,
        yi = {
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          "\x00": "&#0;",
          "'": "&#39;",
          '"': "&#34;",
          "`": "&#96;"
        },
        d = "html",
        lt = "object",
        at = "data-jsv-tmpl",
        pi = {},
        g = {
          template: {
            compile: ti
          },
          tag: {
            compile: rr
          },
          helper: {},
          converter: {}
        },
        u = {
          jsviews: "v1.0.0-beta",
          settings: function(n) {
            f(s, n);
            kt(s._dbgMode);
            s.jsv && s.jsv()
          },
          sub: {
            View: p,
            Err: rt,
            tmplFn: et,
            cvt: ut,
            parse: si,
            extend: f,
            syntaxErr: h,
            onStore: {},
            _ths: it,
            _tg: function() {}
          },
          map: ii,
          _cnvt: gi,
          _tag: tr,
          _err: l
        };
      (rt.prototype = new Error).constructor = rt;
      gt.depends = function() {
        return [this.get("item"), "index"]
      };
      ni.depends = "index";
      p.prototype = {
        get: ki,
        getIndex: ni,
        getRsc: nr,
        hlp: di,
        _is: "view"
      };
      for (ht in g) fr(ht, g[ht]);
      var e = u.templates,
        tt = u.converters,
        wi = u.helpers,
        vt = u.tags,
        o = u.sub,
        s = u.settings;
      o._tg.prototype = {
        baseApply: ur
      };
      t ? (r = t, r.fn.render = er, r.observable && (f(o, r.views.sub), u.map = r.views.map)) : (r = n.jsviews = {}, r.isArray = Array.isArray || function(n) {
        return r.toString.call(n) === "[object Array]"
      });
      r.render = pi;
      r.views = u;
      r.templates = e = u.templates;
      s({
        debugMode: kt,
        delimiters: dt,
        onError: function(n, t, r) {
          return t && (n = r === i ? "{Error: " + (n.message || n) + "}" : v(r) ? r(n, t) : r), n == i ? "" : n
        },
        _dbgMode: !0
      });
      vt({
        "else": function() {},
        "if": {
          render: function(n) {
            var t = this;
            return t.rendering.done || !n && (arguments.length || !t.tagCtx.index) ? "" : (t.rendering.done = !0, t.selected = t.tagCtx.index, t.tagCtx.render(t.tagCtx.view, !0))
          },
          flow: !0
        },
        "for": {
          render: function(n) {
            var f, t = this,
              u = t.tagCtx,
              e = "",
              o = 0;
            return t.rendering.done || ((f = !arguments.length) && (n = u.view.data), n !== i && (e += u.render(n, f), o += r.isArray(n) ? n.length : 1), (t.rendering.done = o) && (t.selected = u.index)), e
          },
          flow: !0
        },
        props: {
          baseTag: "for",
          dataMap: ii(sr)
        },
        include: {
          flow: !0
        },
        "*": {
          render: wt,
          flow: !0
        }
      });
      tt({
        html: hi,
        attr: hi,
        url: function(n) {
          return n != i ? encodeURI("" + n) : n === null ? n : ""
        }
      });
      dt()
    }
  }(this, this.jQuery), XRegExp = function(n) {
    "use strict";

    function nt(n, i, u, f, e) {
      var o;
      if (n[r] = {
          captureNames: i
        }, e) return n;
      if (n.__proto__) n.__proto__ = t.prototype;
      else
        for (o in t.prototype) n[o] = t.prototype[o];
      return n[r].source = u, n[r].flags = f ? f.split("").sort().join("") : f, n
    }

    function a(n) {
      return i.replace.call(n, /([\s\S])(?=[\s\S]*\1)/g, "")
    }

    function o(u, f) {
      if (!t.isRegExp(u)) throw new TypeError("Type RegExp expected");
      var e = u[r] || {},
        s = lt(u),
        o = "",
        h = "",
        c = null,
        l = null;
      return f = f || {}, f.removeG && (h += "g"), f.removeY && (h += "y"), h && (s = i.replace.call(s, new RegExp("[" + h + "]+", "g"), "")), f.addG && (o += "g"), f.addY && (o += "y"), o && (s = a(s + o)), f.isInternalOnly || (e.source !== n && (c = e.source), e.flags != null && (l = o ? a(e.flags + o) : e.flags)), nt(new RegExp(u.source, s), at(u) ? e.captureNames.slice(0) : null, c, l, f.isInternalOnly)
    }

    function ct(n) {
      return parseInt(n, 16)
    }

    function lt(n) {
      return ht ? n.flags : i.exec.call(/\/([a-z]*)$/i, RegExp.prototype.toString.call(n))[1]
    }

    function at(n) {
      return !!(n[r] && n[r].captureNames)
    }

    function vt(n) {
      return parseInt(n, 10).toString(16)
    }

    function v(n, t) {
      for (var r = n.length, i = 0; i < r; ++i)
        if (n[i] === t) return i;
      return -1
    }

    function w(n, t) {
      return g.call(n) === "[object " + t + "]"
    }

    function tt(n, t, r) {
      return i.test.call(r.indexOf("x") > -1 ? /^(?:\s+|#.*|\(\?#[^)]*\))*(?:[?*+]|{\d+(?:,\d*)?})/ : /^(?:\(\?#[^)]*\))*(?:[?*+]|{\d+(?:,\d*)?})/, n.slice(t))
    }

    function yt(n) {
      while (n.length < 4) n = "0" + n;
      return n
    }

    function pt(n, t) {
      var r;
      if (a(t) !== t) throw new SyntaxError("Invalid duplicate regex flag " + t);
      for (n = i.replace.call(n, /^\(\?([\w$]+)\)/, function(n, r) {
          if (i.test.call(/[gy]/, r)) throw new SyntaxError("Cannot use flag g or y in mode modifier " + n);
          return t = a(t + r), ""
        }), r = 0; r < t.length; ++r)
        if (!d[t.charAt(r)]) throw new SyntaxError("Unknown regex flag " + t.charAt(r));
      return {
        pattern: n,
        flags: t
      }
    }

    function it(n) {
      var i = {};
      return w(n, "String") ? (t.forEach(n, /[^\s,]+/, function(n) {
        i[n] = !0
      }), i) : n
    }

    function rt(n) {
      if (!/^[\w$]$/.test(n)) throw new Error("Flag must be a single character A-Za-z0-9_$");
      d[n] = !0
    }

    function wt(n, i, r, u, f) {
      for (var s = y.length, c = n.charAt(r), h = null, o, e; s--;)
        if ((e = y[s], (!e.leadChar || e.leadChar === c) && (e.scope === u || e.scope === "all") && (!e.flag || i.indexOf(e.flag) !== -1)) && (o = t.exec(n, e.regex, r, "sticky"), o)) {
          h = {
            matchLength: o[0].length,
            output: e.handler.call(f, o, u, i),
            reparse: e.reparse
          };
          break
        } return h
    }

    function ut(n) {
      e.astral = n
    }

    function ft(n) {
      RegExp.prototype.exec = (n ? u : i).exec;
      RegExp.prototype.test = (n ? u : i).test;
      String.prototype.match = (n ? u : i).match;
      String.prototype.replace = (n ? u : i).replace;
      String.prototype.split = (n ? u : i).split;
      e.natives = n
    }

    function l(n) {
      if (n == null) throw new TypeError("Cannot convert null or undefined to object");
      return n
    }
    var t, r = "xregexp",
      e = {
        astral: !1,
        natives: !1
      },
      i = {
        exec: RegExp.prototype.exec,
        test: RegExp.prototype.test,
        match: String.prototype.match,
        replace: String.prototype.replace,
        split: String.prototype.split
      },
      u = {},
      c = {},
      s = {},
      y = [],
      h = "default",
      b = "class",
      et = {
        "default": /\\(?:0(?:[0-3][0-7]{0,2}|[4-7][0-7]?)?|[1-9]\d*|x[\dA-Fa-f]{2}|u(?:[\dA-Fa-f]{4}|{[\dA-Fa-f]+})|c[A-Za-z]|[\s\S])|\(\?[:=!]|[?*+]\?|{\d+(?:,\d*)?}\??|[\s\S]/,
        "class": /\\(?:[0-3][0-7]{0,2}|[4-7][0-7]?|x[\dA-Fa-f]{2}|u(?:[\dA-Fa-f]{4}|{[\dA-Fa-f]+})|c[A-Za-z]|[\s\S])|[\s\S]/
      },
      ot = /\$(?:{([\w$]+)}|(\d\d?|[\s\S]))/g,
      st = i.exec.call(/()??/, "")[1] === n,
      k = function() {
        var n = !0;
        try {
          new RegExp("", "u")
        } catch (t) {
          n = !1
        }
        return n
      }(),
      p = function() {
        var n = !0;
        try {
          new RegExp("", "y")
        } catch (t) {
          n = !1
        }
        return n
      }(),
      ht = /a/.flags !== n,
      d = {
        g: !0,
        i: !0,
        m: !0,
        u: k,
        y: p
      },
      g = {}.toString,
      f;
    return t = function(r, u) {
      var y = {
          hasNamedCapture: !1,
          captureNames: []
        },
        l = h,
        p = "",
        e = 0,
        f, a, v, c, w;
      if (t.isRegExp(r)) {
        if (u !== n) throw new TypeError("Cannot supply flags when copying a RegExp");
        return o(r)
      }
      if (r = r === n ? "" : String(r), u = u === n ? "" : String(u), t.isInstalled("astral") && u.indexOf("A") === -1 && (u += "A"), s[r] || (s[r] = {}), !s[r][u]) {
        for (f = pt(r, u), c = f.pattern, w = f.flags; e < c.length;) {
          do f = wt(c, w, e, l, y), f && f.reparse && (c = c.slice(0, e) + f.output + c.slice(e + f.matchLength)); while (f && f.reparse);
          f ? (p += f.output, e += f.matchLength || 1) : (a = t.exec(c, et[l], e, "sticky")[0], p += a, e += a.length, a === "[" && l === h ? l = b : a === "]" && l === b && (l = h))
        }
        s[r][u] = {
          pattern: i.replace.call(p, /\(\?:\)(?=\(\?:\))|^\(\?:\)|\(\?:\)$/g, ""),
          flags: i.replace.call(w, /[^gimuy]+/g, ""),
          captures: y.hasNamedCapture ? y.captureNames : null
        }
      }
      return v = s[r][u], nt(new RegExp(v.pattern, v.flags), v.captures, r, u)
    }, t.prototype = new RegExp, t.version = "3.0.0", t.addToken = function(n, r, u) {
      u = u || {};
      var f = u.optionalFlags,
        e;
      if (u.flag && rt(u.flag), f)
        for (f = i.split.call(f, ""), e = 0; e < f.length; ++e) rt(f[e]);
      y.push({
        regex: o(n, {
          addG: !0,
          addY: p,
          isInternalOnly: !0
        }),
        handler: r,
        scope: u.scope || h,
        flag: u.flag,
        reparse: u.reparse,
        leadChar: u.leadChar
      });
      t.cache.flush("patterns")
    }, t.cache = function(n, i) {
      return c[n] || (c[n] = {}), c[n][i] || (c[n][i] = t(n, i))
    }, t.cache.flush = function(n) {
      n === "patterns" ? s = {} : c = {}
    }, t.escape = function(n) {
      return i.replace.call(l(n), /[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&")
    }, t.exec = function(n, t, i, f) {
      var h = "g",
        c = !1,
        e, s;
      return c = p && !!(f || t.sticky && f !== !1), c && (h += "y"), t[r] = t[r] || {}, s = t[r][h] || (t[r][h] = o(t, {
        addG: !0,
        addY: c,
        removeY: f === !1,
        isInternalOnly: !0
      })), s.lastIndex = i = i || 0, e = u.exec.call(s, n), f && e && e.index !== i && (e = null), t.global && (t.lastIndex = e ? s.lastIndex : 0), e
    }, t.forEach = function(n, i, r) {
      for (var f = 0, e = -1, u; u = t.exec(n, i, f);) r(u, ++e, n, i), f = u.index + (u[0].length || 1)
    }, t.globalize = function(n) {
      return o(n, {
        addG: !0
      })
    }, t.install = function(n) {
      n = it(n);
      !e.astral && n.astral && ut(!0);
      !e.natives && n.natives && ft(!0)
    }, t.isInstalled = function(n) {
      return !!e[n]
    }, t.isRegExp = function(n) {
      return g.call(n) === "[object RegExp]"
    }, t.match = function(n, t, u) {
      var e = t.global && u !== "one" || u === "all",
        s = (e ? "g" : "") + (t.sticky ? "y" : "") || "noGY",
        f, h;
      return t[r] = t[r] || {}, h = t[r][s] || (t[r][s] = o(t, {
        addG: !!e,
        addY: !!t.sticky,
        removeG: u === "one",
        isInternalOnly: !0
      })), f = i.match.call(l(n), h), t.global && (t.lastIndex = u === "one" && f ? f.index + f[0].length : 0), e ? f || [] : f && f[0]
    }, t.matchChain = function(n, i) {
      return function r(n, u) {
        for (var f = i[u].regex ? i[u] : {
            regex: i[u]
          }, e = [], s = function(n) {
            if (f.backref) {
              if (!(n.hasOwnProperty(f.backref) || +f.backref < n.length)) throw new ReferenceError("Backreference to undefined group: " + f.backref);
              e.push(n[f.backref] || "")
            } else e.push(n[0])
          }, o = 0; o < n.length; ++o) t.forEach(n[o], f.regex, s);
        return u === i.length - 1 || !e.length ? e : r(e, u + 1)
      }([n], 0)
    }, t.replace = function(n, i, f, e) {
      var c = t.isRegExp(i),
        s = i.global && e !== "one" || e === "all",
        a = (s ? "g" : "") + (i.sticky ? "y" : "") || "noGY",
        h = i,
        v;
      return c ? (i[r] = i[r] || {}, h = i[r][a] || (i[r][a] = o(i, {
        addG: !!s,
        addY: !!i.sticky,
        removeG: e === "one",
        isInternalOnly: !0
      }))) : s && (h = new RegExp(t.escape(String(i)), "g")), v = u.replace.call(l(n), h, f), c && i.global && (i.lastIndex = 0), v
    }, t.replaceEach = function(n, i) {
      for (var u, r = 0; r < i.length; ++r) u = i[r], n = t.replace(n, u[0], u[1], u[2]);
      return n
    }, t.split = function(n, t, i) {
      return u.split.call(l(n), t, i)
    }, t.test = function(n, i, r, u) {
      return !!t.exec(n, i, r, u)
    }, t.uninstall = function(n) {
      n = it(n);
      e.astral && n.astral && ut(!1);
      e.natives && n.natives && ft(!1)
    }, t.union = function(n, u) {
      var l = /(\()(?!\?)|\\([1-9]\d*)|\\[\s\S]|\[(?:[^\\\]]|\\[\s\S])*]/g,
        o = [],
        s = 0,
        h, c, f, a = function(n, t, i) {
          var r = c[s - h];
          if (t) {
            if (++s, r) return "(?<" + r + ">"
          } else if (i) return "\\" + (+i + h);
          return n
        },
        e;
      if (!(w(n, "Array") && n.length)) throw new TypeError("Must provide a nonempty array of patterns to merge");
      for (e = 0; e < n.length; ++e) f = n[e], t.isRegExp(f) ? (h = s, c = f[r] && f[r].captureNames || [], o.push(i.replace.call(t(f.source).source, l, a))) : o.push(t.escape(f));
      return t(o.join("|"), u)
    }, u.exec = function(t) {
      var h = this.lastIndex,
        u = i.exec.apply(this, arguments),
        e, s, f;
      if (u) {
        if (!st && u.length > 1 && v(u, "") > -1 && (s = o(this, {
            removeG: !0,
            isInternalOnly: !0
          }), i.replace.call(String(t).slice(u.index), s, function() {
            for (var i = arguments.length, t = 1; t < i - 2; ++t) arguments[t] === n && (u[t] = n)
          })), this[r] && this[r].captureNames)
          for (f = 1; f < u.length; ++f) e = this[r].captureNames[f - 1], e && (u[e] = u[f]);
        this.global && !u[0].length && this.lastIndex > u.index && (this.lastIndex = u.index)
      }
      return this.global || (this.lastIndex = h), u
    }, u.test = function(n) {
      return !!u.exec.call(this, n)
    }, u.match = function(n) {
      var r;
      if (t.isRegExp(n)) {
        if (n.global) return r = i.match.apply(this, arguments), n.lastIndex = 0, r
      } else n = new RegExp(n);
      return u.exec.call(n, l(this))
    }, u.replace = function(u, f) {
      var o = t.isRegExp(u),
        s, e, h;
      return o ? (u[r] && (e = u[r].captureNames), s = u.lastIndex) : u += "", h = w(f, "Function") ? i.replace.call(String(this), u, function() {
        var t = arguments,
          i;
        if (e)
          for (t[0] = new String(t[0]), i = 0; i < e.length; ++i) e[i] && (t[0][e[i]] = t[i + 1]);
        return o && u.global && (u.lastIndex = t[t.length - 2] + t[0].length), f.apply(n, t)
      }) : i.replace.call(this == null ? this : String(this), u, function() {
        var n = arguments;
        return i.replace.call(String(f), ot, function(t, i, r) {
          var u;
          if (i) {
            if (u = +i, u <= n.length - 3) return n[u] || "";
            if (u = e ? v(e, i) : -1, u < 0) throw new SyntaxError("Backreference to undefined group " + t);
            return n[u + 1] || ""
          }
          if (r === "$") return "$";
          if (r === "&" || +r == 0) return n[0];
          if (r === "`") return n[n.length - 1].slice(0, n[n.length - 2]);
          if (r === "'") return n[n.length - 1].slice(n[n.length - 2] + n[0].length);
          if (r = +r, !isNaN(r)) {
            if (r > n.length - 3) throw new SyntaxError("Backreference to undefined group " + t);
            return n[r] || ""
          }
          throw new SyntaxError("Invalid token " + t);
        })
      }), o && (u.lastIndex = u.global ? 0 : s), h
    }, u.split = function(r, u) {
      if (!t.isRegExp(r)) return i.split.apply(this, arguments);
      var e = String(this),
        f = [],
        h = r.lastIndex,
        o = 0,
        s;
      return u = (u === n ? -1 : u) >>> 0, t.forEach(e, r, function(n) {
        n.index + n[0].length > o && (f.push(e.slice(o, n.index)), n.length > 1 && n.index < e.length && Array.prototype.push.apply(f, n.slice(1)), s = n[0].length, o = n.index + s)
      }), o === e.length ? (!i.test.call(r, "") || s) && f.push("") : f.push(e.slice(o)), r.lastIndex = h, f.length > u ? f.slice(0, u) : f
    }, f = t.addToken, f(/\\([ABCE-RTUVXYZaeg-mopqyz]|c(?![A-Za-z])|u(?![\dA-Fa-f]{4}|{[\dA-Fa-f]+})|x(?![\dA-Fa-f]{2}))/, function(n, t) {
      if (n[1] === "B" && t === h) return n[0];
      throw new SyntaxError("Invalid escape " + n[0]);
    }, {
      scope: "all",
      leadChar: "\\"
    }), f(/\\u{([\dA-Fa-f]+)}/, function(n, t, i) {
      var r = ct(n[1]);
      if (r > 1114111) throw new SyntaxError("Invalid Unicode code point " + n[0]);
      if (r <= 65535) return "\\u" + yt(vt(r));
      if (k && i.indexOf("u") > -1) return n[0];
      throw new SyntaxError("Cannot use Unicode code point above \\u{FFFF} without flag u");
    }, {
      scope: "all",
      leadChar: "\\"
    }), f(/\[(\^?)]/, function(n) {
      return n[1] ? "[\\s\\S]" : "\\b\\B"
    }, {
      leadChar: "["
    }), f(/\(\?#[^)]*\)/, function(n, t, i) {
      return tt(n.input, n.index + n[0].length, i) ? "" : "(?:)"
    }, {
      leadChar: "("
    }), f(/\s+|#.*/, function(n, t, i) {
      return tt(n.input, n.index + n[0].length, i) ? "" : "(?:)"
    }, {
      flag: "x"
    }), f(/\./, function() {
      return "[\\s\\S]"
    }, {
      flag: "s",
      leadChar: "."
    }), f(/\\k<([\w$]+)>/, function(n) {
      var t = isNaN(n[1]) ? v(this.captureNames, n[1]) + 1 : +n[1],
        i = n.index + n[0].length;
      if (!t || t > this.captureNames.length) throw new SyntaxError("Backreference to undefined group " + n[0]);
      return "\\" + t + (i === n.input.length || isNaN(n.input.charAt(i)) ? "" : "(?:)")
    }, {
      leadChar: "\\"
    }), f(/\\(\d+)/, function(n, t) {
      if (!(t === h && /^[1-9]/.test(n[1]) && +n[1] <= this.captureNames.length) && n[1] !== "0") throw new SyntaxError("Cannot use octal escape or backreference to undefined group " + n[0]);
      return n[0]
    }, {
      scope: "all",
      leadChar: "\\"
    }), f(/\(\?P?<([\w$]+)>/, function(n) {
      if (!isNaN(n[1])) throw new SyntaxError("Cannot use integer as capture name " + n[0]);
      if (n[1] === "length" || n[1] === "__proto__") throw new SyntaxError("Cannot use reserved word as capture name " + n[0]);
      if (v(this.captureNames, n[1]) > -1) throw new SyntaxError("Cannot use same name for multiple groups " + n[0]);
      return this.captureNames.push(n[1]), this.hasNamedCapture = !0, "("
    }, {
      leadChar: "("
    }), f(/\((?!\?)/, function(n, t, i) {
      return i.indexOf("n") > -1 ? "(?:" : (this.captureNames.push(null), "(")
    }, {
      optionalFlags: "n",
      leadChar: "("
    }), t
  }(), "undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery"); + function(n) {
  "use strict";
  var t = n.fn.jquery.split(" ")[0].split(".");
  if (t[0] < 2 && t[1] < 9 || 1 == t[0] && 9 == t[1] && t[2] < 1) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher");
}(jQuery); + function(n) {
  "use strict";

  function t() {
    var i = document.createElement("bootstrap"),
      t = {
        WebkitTransition: "webkitTransitionEnd",
        MozTransition: "transitionend",
        OTransition: "oTransitionEnd otransitionend",
        transition: "transitionend"
      },
      n;
    for (n in t)
      if (void 0 !== i.style[n]) return {
        end: t[n]
      };
    return !1
  }
  n.fn.emulateTransitionEnd = function(t) {
    var i = !1,
      u = this,
      r;
    n(this).one("bsTransitionEnd", function() {
      i = !0
    });
    return r = function() {
      i || n(u).trigger(n.support.transition.end)
    }, setTimeout(r, t), this
  };
  n(function() {
    n.support.transition = t();
    n.support.transition && (n.event.special.bsTransitionEnd = {
      bindType: n.support.transition.end,
      delegateType: n.support.transition.end,
      handle: function(t) {
        if (n(t.target).is(this)) return t.handleObj.handler.apply(this, arguments)
      }
    })
  })
}(jQuery); + function(n) {
  "use strict";

  function u(i) {
    return this.each(function() {
      var r = n(this),
        u = r.data("bs.alert");
      u || r.data("bs.alert", u = new t(this));
      "string" == typeof i && u[i].call(r)
    })
  }
  var i = '[data-dismiss="alert"]',
    t = function(t) {
      n(t).on("click", i, this.close)
    },
    r;
  t.VERSION = "3.3.4";
  t.TRANSITION_DURATION = 150;
  t.prototype.close = function(i) {
    function e() {
      r.detach().trigger("closed.bs.alert").remove()
    }
    var f = n(this),
      u = f.attr("data-target"),
      r;
    u || (u = f.attr("href"), u = u && u.replace(/.*(?=#[^\s]*$)/, ""));
    r = n(u);
    i && i.preventDefault();
    r.length || (r = f.closest(".alert"));
    r.trigger(i = n.Event("close.bs.alert"));
    i.isDefaultPrevented() || (r.removeClass("in"), n.support.transition && r.hasClass("fade") ? r.one("bsTransitionEnd", e).emulateTransitionEnd(t.TRANSITION_DURATION) : e())
  };
  r = n.fn.alert;
  n.fn.alert = u;
  n.fn.alert.Constructor = t;
  n.fn.alert.noConflict = function() {
    return n.fn.alert = r, this
  };
  n(document).on("click.bs.alert.data-api", i, t.prototype.close)
}(jQuery); + function(n) {
  "use strict";

  function i(i) {
    return this.each(function() {
      var u = n(this),
        r = u.data("bs.button"),
        f = "object" == typeof i && i;
      r || u.data("bs.button", r = new t(this, f));
      "toggle" == i ? r.toggle() : i && r.setState(i)
    })
  }
  var t = function(i, r) {
      this.$element = n(i);
      this.options = n.extend({}, t.DEFAULTS, r);
      this.isLoading = !1
    },
    r;
  t.VERSION = "3.3.4";
  t.DEFAULTS = {
    loadingText: "loading..."
  };
  t.prototype.setState = function(t) {
    var r = "disabled",
      i = this.$element,
      f = i.is("input") ? "val" : "html",
      u = i.data();
    t += "Text";
    null == u.resetText && i.data("resetText", i[f]());
    setTimeout(n.proxy(function() {
      i[f](null == u[t] ? this.options[t] : u[t]);
      "loadingText" == t ? (this.isLoading = !0, i.addClass(r).attr(r, r)) : this.isLoading && (this.isLoading = !1, i.removeClass(r).removeAttr(r))
    }, this), 0)
  };
  t.prototype.toggle = function() {
    var t = !0,
      i = this.$element.closest('[data-toggle="buttons"]'),
      n;
    i.length ? (n = this.$element.find("input"), "radio" == n.prop("type") && (n.prop("checked") && this.$element.hasClass("active") ? t = !1 : i.find(".active").removeClass("active")), t && n.prop("checked", !this.$element.hasClass("active")).trigger("change")) : this.$element.attr("aria-pressed", !this.$element.hasClass("active"));
    t && this.$element.toggleClass("active")
  };
  r = n.fn.button;
  n.fn.button = i;
  n.fn.button.Constructor = t;
  n.fn.button.noConflict = function() {
    return n.fn.button = r, this
  };
  n(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function(t) {
    var r = n(t.target);
    r.hasClass("btn") || (r = r.closest(".btn"));
    i.call(r, "toggle");
    t.preventDefault()
  }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function(t) {
    n(t.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(t.type))
  })
}(jQuery); + function(n) {
  "use strict";

  function i(i) {
    return this.each(function() {
      var u = n(this),
        r = u.data("bs.carousel"),
        f = n.extend({}, t.DEFAULTS, u.data(), "object" == typeof i && i),
        e = "string" == typeof i ? i : f.slide;
      r || u.data("bs.carousel", r = new t(this, f));
      "number" == typeof i ? r.to(i) : e ? r[e]() : f.interval && r.pause().cycle()
    })
  }
  var t = function(t, i) {
      this.$element = n(t);
      this.$indicators = this.$element.find(".carousel-indicators");
      this.options = i;
      this.paused = null;
      this.sliding = null;
      this.interval = null;
      this.$active = null;
      this.$items = null;
      this.options.keyboard && this.$element.on("keydown.bs.carousel", n.proxy(this.keydown, this));
      "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", n.proxy(this.pause, this)).on("mouseleave.bs.carousel", n.proxy(this.cycle, this))
    },
    u, r;
  t.VERSION = "3.3.4";
  t.TRANSITION_DURATION = 600;
  t.DEFAULTS = {
    interval: 5e3,
    pause: "hover",
    wrap: !0,
    keyboard: !0
  };
  t.prototype.keydown = function(n) {
    if (!/input|textarea/i.test(n.target.tagName)) {
      switch (n.which) {
        case 37:
          this.prev();
          break;
        case 39:
          this.next();
          break;
        default:
          return
      }
      n.preventDefault()
    }
  };
  t.prototype.cycle = function(t) {
    return t || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(n.proxy(this.next, this), this.options.interval)), this
  };
  t.prototype.getItemIndex = function(n) {
    return this.$items = n.parent().children(".item"), this.$items.index(n || this.$active)
  };
  t.prototype.getItemForDirection = function(n, t) {
    var i = this.getItemIndex(t),
      f = "prev" == n && 0 === i || "next" == n && i == this.$items.length - 1,
      r, u;
    return f && !this.options.wrap ? t : (r = "prev" == n ? -1 : 1, u = (i + r) % this.$items.length, this.$items.eq(u))
  };
  t.prototype.to = function(n) {
    var i = this,
      t = this.getItemIndex(this.$active = this.$element.find(".item.active"));
    if (!(n > this.$items.length - 1) && !(0 > n)) return this.sliding ? this.$element.one("slid.bs.carousel", function() {
      i.to(n)
    }) : t == n ? this.pause().cycle() : this.slide(n > t ? "next" : "prev", this.$items.eq(n))
  };
  t.prototype.pause = function(t) {
    return t || (this.paused = !0), this.$element.find(".next, .prev").length && n.support.transition && (this.$element.trigger(n.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
  };
  t.prototype.next = function() {
    if (!this.sliding) return this.slide("next")
  };
  t.prototype.prev = function() {
    if (!this.sliding) return this.slide("prev")
  };
  t.prototype.slide = function(i, r) {
    var e = this.$element.find(".item.active"),
      u = r || this.getItemForDirection(i, e),
      l = this.interval,
      f = "next" == i ? "left" : "right",
      a = this,
      o, s, h, c;
    return u.hasClass("active") ? this.sliding = !1 : (o = u[0], s = n.Event("slide.bs.carousel", {
      relatedTarget: o,
      direction: f
    }), (this.$element.trigger(s), !s.isDefaultPrevented()) ? ((this.sliding = !0, l && this.pause(), this.$indicators.length) && (this.$indicators.find(".active").removeClass("active"), h = n(this.$indicators.children()[this.getItemIndex(u)]), h && h.addClass("active")), c = n.Event("slid.bs.carousel", {
      relatedTarget: o,
      direction: f
    }), n.support.transition && this.$element.hasClass("slide") ? (u.addClass(i), u[0].offsetWidth, e.addClass(f), u.addClass(f), e.one("bsTransitionEnd", function() {
      u.removeClass([i, f].join(" ")).addClass("active");
      e.removeClass(["active", f].join(" "));
      a.sliding = !1;
      setTimeout(function() {
        a.$element.trigger(c)
      }, 0)
    }).emulateTransitionEnd(t.TRANSITION_DURATION)) : (e.removeClass("active"), u.addClass("active"), this.sliding = !1, this.$element.trigger(c)), l && this.cycle(), this) : void 0)
  };
  u = n.fn.carousel;
  n.fn.carousel = i;
  n.fn.carousel.Constructor = t;
  n.fn.carousel.noConflict = function() {
    return n.fn.carousel = u, this
  };
  r = function(t) {
    var o, r = n(this),
      u = n(r.attr("data-target") || (o = r.attr("href")) && o.replace(/.*(?=#[^\s]+$)/, "")),
      e, f;
    u.hasClass("carousel") && (e = n.extend({}, u.data(), r.data()), f = r.attr("data-slide-to"), f && (e.interval = !1), i.call(u, e), f && u.data("bs.carousel").to(f), t.preventDefault())
  };
  n(document).on("click.bs.carousel.data-api", "[data-slide]", r).on("click.bs.carousel.data-api", "[data-slide-to]", r);
  n(window).on("load", function() {
    n('[data-ride="carousel"]').each(function() {
      var t = n(this);
      i.call(t, t.data())
    })
  })
}(jQuery); + function(n) {
  "use strict";

  function r(t) {
    var i, r = t.attr("data-target") || (i = t.attr("href")) && i.replace(/.*(?=#[^\s]+$)/, "");
    return n(r)
  }

  function i(i) {
    return this.each(function() {
      var u = n(this),
        r = u.data("bs.collapse"),
        f = n.extend({}, t.DEFAULTS, u.data(), "object" == typeof i && i);
      !r && f.toggle && /show|hide/.test(i) && (f.toggle = !1);
      r || u.data("bs.collapse", r = new t(this, f));
      "string" == typeof i && r[i]()
    })
  }
  var t = function(i, r) {
      this.$element = n(i);
      this.options = n.extend({}, t.DEFAULTS, r);
      this.$trigger = n('[data-toggle="collapse"][href="#' + i.id + '"],[data-toggle="collapse"][data-target="#' + i.id + '"]');
      this.transitioning = null;
      this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger);
      this.options.toggle && this.toggle()
    },
    u;
  t.VERSION = "3.3.4";
  t.TRANSITION_DURATION = 350;
  t.DEFAULTS = {
    toggle: !0
  };
  t.prototype.dimension = function() {
    var n = this.$element.hasClass("width");
    return n ? "width" : "height"
  };
  t.prototype.show = function() {
    var f, r, e, u, o, s;
    if (!this.transitioning && !this.$element.hasClass("in") && (r = this.$parent && this.$parent.children(".panel").children(".in, .collapsing"), !(r && r.length && (f = r.data("bs.collapse"), f && f.transitioning)) && (e = n.Event("show.bs.collapse"), this.$element.trigger(e), !e.isDefaultPrevented()))) {
      if (r && r.length && (i.call(r, "hide"), f || r.data("bs.collapse", null)), u = this.dimension(), this.$element.removeClass("collapse").addClass("collapsing")[u](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1, o = function() {
          this.$element.removeClass("collapsing").addClass("collapse in")[u]("");
          this.transitioning = 0;
          this.$element.trigger("shown.bs.collapse")
        }, !n.support.transition) return o.call(this);
      s = n.camelCase(["scroll", u].join("-"));
      this.$element.one("bsTransitionEnd", n.proxy(o, this)).emulateTransitionEnd(t.TRANSITION_DURATION)[u](this.$element[0][s])
    }
  };
  t.prototype.hide = function() {
    var r, i, u;
    if (!this.transitioning && this.$element.hasClass("in") && (r = n.Event("hide.bs.collapse"), this.$element.trigger(r), !r.isDefaultPrevented())) return i = this.dimension(), this.$element[i](this.$element[i]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1, u = function() {
      this.transitioning = 0;
      this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
    }, n.support.transition ? void this.$element[i](0).one("bsTransitionEnd", n.proxy(u, this)).emulateTransitionEnd(t.TRANSITION_DURATION) : u.call(this)
  };
  t.prototype.toggle = function() {
    this[this.$element.hasClass("in") ? "hide" : "show"]()
  };
  t.prototype.getParent = function() {
    return n(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(n.proxy(function(t, i) {
      var u = n(i);
      this.addAriaAndCollapsedClass(r(u), u)
    }, this)).end()
  };
  t.prototype.addAriaAndCollapsedClass = function(n, t) {
    var i = n.hasClass("in");
    n.attr("aria-expanded", i);
    t.toggleClass("collapsed", !i).attr("aria-expanded", i)
  };
  u = n.fn.collapse;
  n.fn.collapse = i;
  n.fn.collapse.Constructor = t;
  n.fn.collapse.noConflict = function() {
    return n.fn.collapse = u, this
  };
  n(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(t) {
    var u = n(this);
    u.attr("data-target") || t.preventDefault();
    var f = r(u),
      e = f.data("bs.collapse"),
      o = e ? "toggle" : u.data();
    i.call(f, o)
  })
}(jQuery); + function(n) {
  "use strict";

  function r(t) {
    t && 3 === t.which || (n(o).remove(), n(i).each(function() {
      var r = n(this),
        i = u(r),
        f = {
          relatedTarget: this
        };
      i.hasClass("open") && (i.trigger(t = n.Event("hide.bs.dropdown", f)), t.isDefaultPrevented() || (r.attr("aria-expanded", "false"), i.removeClass("open").trigger("hidden.bs.dropdown", f)))
    }))
  }

  function u(t) {
    var i = t.attr("data-target"),
      r;
    return i || (i = t.attr("href"), i = i && /#[A-Za-z]/.test(i) && i.replace(/.*(?=#[^\s]*$)/, "")), r = i && n(i), r && r.length ? r : t.parent()
  }

  function e(i) {
    return this.each(function() {
      var r = n(this),
        u = r.data("bs.dropdown");
      u || r.data("bs.dropdown", u = new t(this));
      "string" == typeof i && u[i].call(r)
    })
  }
  var o = ".dropdown-backdrop",
    i = '[data-toggle="dropdown"]',
    t = function(t) {
      n(t).on("click.bs.dropdown", this.toggle)
    },
    f;
  t.VERSION = "3.3.4";
  t.prototype.toggle = function(t) {
    var f = n(this),
      i, o, e;
    if (!f.is(".disabled, :disabled")) {
      if (i = u(f), o = i.hasClass("open"), r(), !o) {
        if ("ontouchstart" in document.documentElement && !i.closest(".navbar-nav").length && n('<div class="dropdown-backdrop"/>').insertAfter(n(this)).on("click", r), e = {
            relatedTarget: this
          }, i.trigger(t = n.Event("show.bs.dropdown", e)), t.isDefaultPrevented()) return;
        f.trigger("focus").attr("aria-expanded", "true");
        i.toggleClass("open").trigger("shown.bs.dropdown", e)
      }
      return !1
    }
  };
  t.prototype.keydown = function(t) {
    var e, o, s, h, f, r;
    if (/(38|40|27|32)/.test(t.which) && !/input|textarea/i.test(t.target.tagName) && (e = n(this), t.preventDefault(), t.stopPropagation(), !e.is(".disabled, :disabled"))) {
      if (o = u(e), s = o.hasClass("open"), !s && 27 != t.which || s && 27 == t.which) return 27 == t.which && o.find(i).trigger("focus"), e.trigger("click");
      h = " li:not(.disabled):visible a";
      f = o.find('[role="menu"]' + h + ', [role="listbox"]' + h);
      f.length && (r = f.index(t.target), 38 == t.which && r > 0 && r--, 40 == t.which && r < f.length - 1 && r++, ~r || (r = 0), f.eq(r).trigger("focus"))
    }
  };
  f = n.fn.dropdown;
  n.fn.dropdown = e;
  n.fn.dropdown.Constructor = t;
  n.fn.dropdown.noConflict = function() {
    return n.fn.dropdown = f, this
  };
  n(document).on("click.bs.dropdown.data-api", r).on("click.bs.dropdown.data-api", ".dropdown form", function(n) {
    n.stopPropagation()
  }).on("click.bs.dropdown.data-api", i, t.prototype.toggle).on("keydown.bs.dropdown.data-api", i, t.prototype.keydown).on("keydown.bs.dropdown.data-api", '[role="menu"]', t.prototype.keydown).on("keydown.bs.dropdown.data-api", '[role="listbox"]', t.prototype.keydown)
}(jQuery); + function(n) {
  "use strict";

  function i(i, r) {
    return this.each(function() {
      var f = n(this),
        u = f.data("bs.modal"),
        e = n.extend({}, t.DEFAULTS, f.data(), "object" == typeof i && i);
      u || f.data("bs.modal", u = new t(this, e));
      "string" == typeof i ? u[i](r) : e.show && u.show(r)
    })
  }
  var t = function(t, i) {
      this.options = i;
      this.$body = n(document.body);
      this.$element = n(t);
      this.$dialog = this.$element.find(".modal-dialog");
      this.$backdrop = null;
      this.isShown = null;
      this.originalBodyPad = null;
      this.scrollbarWidth = 0;
      this.ignoreBackdropClick = !1;
      this.options.remote && this.$element.find(".modal-content").load(this.options.remote, n.proxy(function() {
        this.$element.trigger("loaded.bs.modal")
      }, this))
    },
    r;
  t.VERSION = "3.3.4";
  t.TRANSITION_DURATION = 300;
  t.BACKDROP_TRANSITION_DURATION = 150;
  t.DEFAULTS = {
    backdrop: !0,
    keyboard: !0,
    show: !0
  };
  t.prototype.toggle = function(n) {
    return this.isShown ? this.hide() : this.show(n)
  };
  t.prototype.show = function(i) {
    var r = this,
      u = n.Event("show.bs.modal", {
        relatedTarget: i
      });
    this.$element.trigger(u);
    this.isShown || u.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', n.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function() {
      r.$element.one("mouseup.dismiss.bs.modal", function(t) {
        n(t.target).is(r.$element) && (r.ignoreBackdropClick = !0)
      })
    }), this.backdrop(function() {
      var f = n.support.transition && r.$element.hasClass("fade"),
        u;
      r.$element.parent().length || r.$element.appendTo(r.$body);
      r.$element.show().scrollTop(0);
      r.adjustDialog();
      f && r.$element[0].offsetWidth;
      r.$element.addClass("in").attr("aria-hidden", !1);
      r.enforceFocus();
      u = n.Event("shown.bs.modal", {
        relatedTarget: i
      });
      f ? r.$dialog.one("bsTransitionEnd", function() {
        r.$element.trigger("focus").trigger(u)
      }).emulateTransitionEnd(t.TRANSITION_DURATION) : r.$element.trigger("focus").trigger(u)
    }))
  };
  t.prototype.hide = function(i) {
    i && i.preventDefault();
    i = n.Event("hide.bs.modal");
    this.$element.trigger(i);
    this.isShown && !i.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), n(document).off("focusin.bs.modal"), this.$element.removeClass("in").attr("aria-hidden", !0).off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), n.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", n.proxy(this.hideModal, this)).emulateTransitionEnd(t.TRANSITION_DURATION) : this.hideModal())
  };
  t.prototype.enforceFocus = function() {
    n(document).off("focusin.bs.modal").on("focusin.bs.modal", n.proxy(function(n) {
      this.$element[0] === n.target || this.$element.has(n.target).length || this.$element.trigger("focus")
    }, this))
  };
  t.prototype.escape = function() {
    this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", n.proxy(function(n) {
      27 == n.which && this.hide()
    }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
  };
  t.prototype.resize = function() {
    this.isShown ? n(window).on("resize.bs.modal", n.proxy(this.handleUpdate, this)) : n(window).off("resize.bs.modal")
  };
  t.prototype.hideModal = function() {
    var n = this;
    this.$element.hide();
    this.backdrop(function() {
      n.$body.removeClass("modal-open");
      n.resetAdjustments();
      n.resetScrollbar();
      n.$element.trigger("hidden.bs.modal")
    })
  };
  t.prototype.removeBackdrop = function() {
    this.$backdrop && this.$backdrop.remove();
    this.$backdrop = null
  };
  t.prototype.backdrop = function(i) {
    var e = this,
      f = this.$element.hasClass("fade") ? "fade" : "",
      r, u;
    if (this.isShown && this.options.backdrop) {
      if (r = n.support.transition && f, this.$backdrop = n('<div class="modal-backdrop ' + f + '" />').appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", n.proxy(function(n) {
          return this.ignoreBackdropClick ? void(this.ignoreBackdropClick = !1) : void(n.target === n.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide()))
        }, this)), r && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !i) return;
      r ? this.$backdrop.one("bsTransitionEnd", i).emulateTransitionEnd(t.BACKDROP_TRANSITION_DURATION) : i()
    } else !this.isShown && this.$backdrop ? (this.$backdrop.removeClass("in"), u = function() {
      e.removeBackdrop();
      i && i()
    }, n.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", u).emulateTransitionEnd(t.BACKDROP_TRANSITION_DURATION) : u()) : i && i()
  };
  t.prototype.handleUpdate = function() {
    this.adjustDialog()
  };
  t.prototype.adjustDialog = function() {
    var n = this.$element[0].scrollHeight > document.documentElement.clientHeight;
    this.$element.css({
      paddingLeft: !this.bodyIsOverflowing && n ? this.scrollbarWidth : "",
      paddingRight: this.bodyIsOverflowing && !n ? this.scrollbarWidth : ""
    })
  };
  t.prototype.resetAdjustments = function() {
    this.$element.css({
      paddingLeft: "",
      paddingRight: ""
    })
  };
  t.prototype.checkScrollbar = function() {
    var n = window.innerWidth,
      t;
    n || (t = document.documentElement.getBoundingClientRect(), n = t.right - Math.abs(t.left));
    this.bodyIsOverflowing = document.body.clientWidth < n;
    this.scrollbarWidth = this.measureScrollbar()
  };
  t.prototype.setScrollbar = function() {
    var n = parseInt(this.$body.css("padding-right") || 0, 10);
    this.originalBodyPad = document.body.style.paddingRight || "";
    this.bodyIsOverflowing && this.$body.css("padding-right", n + this.scrollbarWidth)
  };
  t.prototype.resetScrollbar = function() {
    this.$body.css("padding-right", this.originalBodyPad)
  };
  t.prototype.measureScrollbar = function() {
    var n = document.createElement("div"),
      t;
    return n.className = "modal-scrollbar-measure", this.$body.append(n), t = n.offsetWidth - n.clientWidth, this.$body[0].removeChild(n), t
  };
  r = n.fn.modal;
  n.fn.modal = i;
  n.fn.modal.Constructor = t;
  n.fn.modal.noConflict = function() {
    return n.fn.modal = r, this
  };
  n(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(t) {
    var r = n(this),
      f = r.attr("href"),
      u = n(r.attr("data-target") || f && f.replace(/.*(?=#[^\s]+$)/, "")),
      e = u.data("bs.modal") ? "toggle" : n.extend({
        remote: !/#/.test(f) && f
      }, u.data(), r.data());
    r.is("a") && t.preventDefault();
    u.one("show.bs.modal", function(n) {
      n.isDefaultPrevented() || u.one("hidden.bs.modal", function() {
        r.is(":visible") && r.trigger("focus")
      })
    });
    i.call(u, e, this)
  })
}(jQuery); + function(n) {
  "use strict";

  function r(i) {
    return this.each(function() {
      var u = n(this),
        r = u.data("bs.tooltip"),
        f = "object" == typeof i && i;
      (r || !/destroy|hide/.test(i)) && (r || u.data("bs.tooltip", r = new t(this, f)), "string" == typeof i && r[i]())
    })
  }
  var t = function(n, t) {
      this.type = null;
      this.options = null;
      this.enabled = null;
      this.timeout = null;
      this.hoverState = null;
      this.$element = null;
      this.init("tooltip", n, t)
    },
    i;
  t.VERSION = "3.3.4";
  t.TRANSITION_DURATION = 150;
  t.DEFAULTS = {
    animation: !0,
    placement: "top",
    selector: !1,
    template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"><\/div><div class="tooltip-inner"><\/div><\/div>',
    trigger: "hover focus",
    title: "",
    delay: 0,
    html: !1,
    container: !1,
    viewport: {
      selector: "body",
      padding: 0
    }
  };
  t.prototype.init = function(t, i, r) {
    var f, e, u, o, s;
    if (this.enabled = !0, this.type = t, this.$element = n(i), this.options = this.getOptions(r), this.$viewport = this.options.viewport && n(this.options.viewport.selector || this.options.viewport), this.$element[0] instanceof document.constructor && !this.options.selector) throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
    for (f = this.options.trigger.split(" "), e = f.length; e--;)
      if (u = f[e], "click" == u) this.$element.on("click." + this.type, this.options.selector, n.proxy(this.toggle, this));
      else "manual" != u && (o = "hover" == u ? "mouseenter" : "focusin", s = "hover" == u ? "mouseleave" : "focusout", this.$element.on(o + "." + this.type, this.options.selector, n.proxy(this.enter, this)), this.$element.on(s + "." + this.type, this.options.selector, n.proxy(this.leave, this)));
    this.options.selector ? this._options = n.extend({}, this.options, {
      trigger: "manual",
      selector: ""
    }) : this.fixTitle()
  };
  t.prototype.getDefaults = function() {
    return t.DEFAULTS
  };
  t.prototype.getOptions = function(t) {
    return t = n.extend({}, this.getDefaults(), this.$element.data(), t), t.delay && "number" == typeof t.delay && (t.delay = {
      show: t.delay,
      hide: t.delay
    }), t
  };
  t.prototype.getDelegateOptions = function() {
    var t = {},
      i = this.getDefaults();
    return this._options && n.each(this._options, function(n, r) {
      i[n] != r && (t[n] = r)
    }), t
  };
  t.prototype.enter = function(t) {
    var i = t instanceof this.constructor ? t : n(t.currentTarget).data("bs." + this.type);
    return i && i.$tip && i.$tip.is(":visible") ? void(i.hoverState = "in") : (i || (i = new this.constructor(t.currentTarget, this.getDelegateOptions()), n(t.currentTarget).data("bs." + this.type, i)), clearTimeout(i.timeout), i.hoverState = "in", i.options.delay && i.options.delay.show ? void(i.timeout = setTimeout(function() {
      "in" == i.hoverState && i.show()
    }, i.options.delay.show)) : i.show())
  };
  t.prototype.leave = function(t) {
    var i = t instanceof this.constructor ? t : n(t.currentTarget).data("bs." + this.type);
    return i || (i = new this.constructor(t.currentTarget, this.getDelegateOptions()), n(t.currentTarget).data("bs." + this.type, i)), clearTimeout(i.timeout), i.hoverState = "out", i.options.delay && i.options.delay.hide ? void(i.timeout = setTimeout(function() {
      "out" == i.hoverState && i.hide()
    }, i.options.delay.hide)) : i.hide()
  };
  t.prototype.show = function() {
    var c = n.Event("show.bs." + this.type),
      l, p, h;
    if (this.hasContent() && this.enabled) {
      if (this.$element.trigger(c), l = n.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]), c.isDefaultPrevented() || !l) return;
      var u = this,
        r = this.tip(),
        a = this.getUID(this.type);
      this.setContent();
      r.attr("id", a);
      this.$element.attr("aria-describedby", a);
      this.options.animation && r.addClass("fade");
      var i = "function" == typeof this.options.placement ? this.options.placement.call(this, r[0], this.$element[0]) : this.options.placement,
        v = /\s?auto?\s?/i,
        y = v.test(i);
      y && (i = i.replace(v, "") || "top");
      r.detach().css({
        top: 0,
        left: 0,
        display: "block"
      }).addClass(i).data("bs." + this.type, this);
      this.options.container ? r.appendTo(this.options.container) : r.insertAfter(this.$element);
      var f = this.getPosition(),
        o = r[0].offsetWidth,
        s = r[0].offsetHeight;
      if (y) {
        var w = i,
          b = this.options.container ? n(this.options.container) : this.$element.parent(),
          e = this.getPosition(b);
        i = "bottom" == i && f.bottom + s > e.bottom ? "top" : "top" == i && f.top - s < e.top ? "bottom" : "right" == i && f.right + o > e.width ? "left" : "left" == i && f.left - o < e.left ? "right" : i;
        r.removeClass(w).addClass(i)
      }
      p = this.getCalculatedOffset(i, f, o, s);
      this.applyPlacement(p, i);
      h = function() {
        var n = u.hoverState;
        u.$element.trigger("shown.bs." + u.type);
        u.hoverState = null;
        "out" == n && u.leave(u)
      };
      n.support.transition && this.$tip.hasClass("fade") ? r.one("bsTransitionEnd", h).emulateTransitionEnd(t.TRANSITION_DURATION) : h()
    }
  };
  t.prototype.applyPlacement = function(t, i) {
    var r = this.tip(),
      l = r[0].offsetWidth,
      e = r[0].offsetHeight,
      o = parseInt(r.css("margin-top"), 10),
      s = parseInt(r.css("margin-left"), 10),
      h, f, u;
    isNaN(o) && (o = 0);
    isNaN(s) && (s = 0);
    t.top = t.top + o;
    t.left = t.left + s;
    n.offset.setOffset(r[0], n.extend({
      using: function(n) {
        r.css({
          top: Math.round(n.top),
          left: Math.round(n.left)
        })
      }
    }, t), 0);
    r.addClass("in");
    h = r[0].offsetWidth;
    f = r[0].offsetHeight;
    "top" == i && f != e && (t.top = t.top + e - f);
    u = this.getViewportAdjustedDelta(i, t, h, f);
    u.left ? t.left += u.left : t.top += u.top;
    var c = /top|bottom/.test(i),
      a = c ? 2 * u.left - l + h : 2 * u.top - e + f,
      v = c ? "offsetWidth" : "offsetHeight";
    r.offset(t);
    this.replaceArrow(a, r[0][v], c)
  };
  t.prototype.replaceArrow = function(n, t, i) {
    this.arrow().css(i ? "left" : "top", 50 * (1 - n / t) + "%").css(i ? "top" : "left", "")
  };
  t.prototype.setContent = function() {
    var n = this.tip(),
      t = this.getTitle();
    n.find(".tooltip-inner")[this.options.html ? "html" : "text"](t);
    n.removeClass("fade in top bottom left right")
  };
  t.prototype.hide = function(i) {
    function f() {
      "in" != u.hoverState && r.detach();
      u.$element.removeAttr("aria-describedby").trigger("hidden.bs." + u.type);
      i && i()
    }
    var u = this,
      r = n(this.$tip),
      e = n.Event("hide.bs." + this.type);
    return this.$element.trigger(e), e.isDefaultPrevented() ? void 0 : (r.removeClass("in"), n.support.transition && r.hasClass("fade") ? r.one("bsTransitionEnd", f).emulateTransitionEnd(t.TRANSITION_DURATION) : f(), this.hoverState = null, this)
  };
  t.prototype.fixTitle = function() {
    var n = this.$element;
    (n.attr("title") || "string" != typeof n.attr("data-original-title")) && n.attr("data-original-title", n.attr("title") || "").attr("title", "")
  };
  t.prototype.hasContent = function() {
    return this.getTitle()
  };
  t.prototype.getPosition = function(t) {
    t = t || this.$element;
    var u = t[0],
      r = "BODY" == u.tagName,
      i = u.getBoundingClientRect();
    null == i.width && (i = n.extend({}, i, {
      width: i.right - i.left,
      height: i.bottom - i.top
    }));
    var f = r ? {
        top: 0,
        left: 0
      } : t.offset(),
      e = {
        scroll: r ? document.documentElement.scrollTop || document.body.scrollTop : t.scrollTop()
      },
      o = r ? {
        width: n(window).width(),
        height: n(window).height()
      } : null;
    return n.extend({}, i, e, o, f)
  };
  t.prototype.getCalculatedOffset = function(n, t, i, r) {
    return "bottom" == n ? {
      top: t.top + t.height,
      left: t.left + t.width / 2 - i / 2
    } : "top" == n ? {
      top: t.top - r,
      left: t.left + t.width / 2 - i / 2
    } : "left" == n ? {
      top: t.top + t.height / 2 - r / 2,
      left: t.left - i
    } : {
      top: t.top + t.height / 2 - r / 2,
      left: t.left + t.width
    }
  };
  t.prototype.getViewportAdjustedDelta = function(n, t, i, r) {
    var f = {
        top: 0,
        left: 0
      },
      e, u, o, s, h, c;
    return this.$viewport ? (e = this.options.viewport && this.options.viewport.padding || 0, u = this.getPosition(this.$viewport), /right|left/.test(n) ? (o = t.top - e - u.scroll, s = t.top + e - u.scroll + r, o < u.top ? f.top = u.top - o : s > u.top + u.height && (f.top = u.top + u.height - s)) : (h = t.left - e, c = t.left + e + i, h < u.left ? f.left = u.left - h : c > u.width && (f.left = u.left + u.width - c)), f) : f
  };
  t.prototype.getTitle = function() {
    var t = this.$element,
      n = this.options;
    return t.attr("data-original-title") || ("function" == typeof n.title ? n.title.call(t[0]) : n.title)
  };
  t.prototype.getUID = function(n) {
    do n += ~~(1e6 * Math.random()); while (document.getElementById(n));
    return n
  };
  t.prototype.tip = function() {
    return this.$tip = this.$tip || n(this.options.template)
  };
  t.prototype.arrow = function() {
    return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
  };
  t.prototype.enable = function() {
    this.enabled = !0
  };
  t.prototype.disable = function() {
    this.enabled = !1
  };
  t.prototype.toggleEnabled = function() {
    this.enabled = !this.enabled
  };
  t.prototype.toggle = function(t) {
    var i = this;
    t && (i = n(t.currentTarget).data("bs." + this.type), i || (i = new this.constructor(t.currentTarget, this.getDelegateOptions()), n(t.currentTarget).data("bs." + this.type, i)));
    i.tip().hasClass("in") ? i.leave(i) : i.enter(i)
  };
  t.prototype.destroy = function() {
    var n = this;
    clearTimeout(this.timeout);
    this.hide(function() {
      n.$element.off("." + n.type).removeData("bs." + n.type)
    })
  };
  i = n.fn.tooltip;
  n.fn.tooltip = r;
  n.fn.tooltip.Constructor = t;
  n.fn.tooltip.noConflict = function() {
    return n.fn.tooltip = i, this
  }
}(jQuery); + function(n) {
  "use strict";

  function r(i) {
    return this.each(function() {
      var u = n(this),
        r = u.data("bs.popover"),
        f = "object" == typeof i && i;
      (r || !/destroy|hide/.test(i)) && (r || u.data("bs.popover", r = new t(this, f)), "string" == typeof i && r[i]())
    })
  }
  var t = function(n, t) {
      this.init("popover", n, t)
    },
    i;
  if (!n.fn.tooltip) throw new Error("Popover requires tooltip.js");
  t.VERSION = "3.3.4";
  t.DEFAULTS = n.extend({}, n.fn.tooltip.Constructor.DEFAULTS, {
    placement: "right",
    trigger: "click",
    content: "",
    template: '<div class="popover" role="tooltip"><div class="arrow"><\/div><h3 class="popover-title"><\/h3><div class="popover-content"><\/div><\/div>'
  });
  t.prototype = n.extend({}, n.fn.tooltip.Constructor.prototype);
  t.prototype.constructor = t;
  t.prototype.getDefaults = function() {
    return t.DEFAULTS
  };
  t.prototype.setContent = function() {
    var n = this.tip(),
      i = this.getTitle(),
      t = this.getContent();
    n.find(".popover-title")[this.options.html ? "html" : "text"](i);
    n.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof t ? "html" : "append" : "text"](t);
    n.removeClass("fade top bottom left right in");
    n.find(".popover-title").html() || n.find(".popover-title").hide()
  };
  t.prototype.hasContent = function() {
    return this.getTitle() || this.getContent()
  };
  t.prototype.getContent = function() {
    var t = this.$element,
      n = this.options;
    return t.attr("data-content") || ("function" == typeof n.content ? n.content.call(t[0]) : n.content)
  };
  t.prototype.arrow = function() {
    return this.$arrow = this.$arrow || this.tip().find(".arrow")
  };
  i = n.fn.popover;
  n.fn.popover = r;
  n.fn.popover.Constructor = t;
  n.fn.popover.noConflict = function() {
    return n.fn.popover = i, this
  }
}(jQuery); + function(n) {
  "use strict";

  function t(i, r) {
    this.$body = n(document.body);
    this.$scrollElement = n(n(i).is(document.body) ? window : i);
    this.options = n.extend({}, t.DEFAULTS, r);
    this.selector = (this.options.target || "") + " .nav li > a";
    this.offsets = [];
    this.targets = [];
    this.activeTarget = null;
    this.scrollHeight = 0;
    this.$scrollElement.on("scroll.bs.scrollspy", n.proxy(this.process, this));
    this.refresh();
    this.process()
  }

  function i(i) {
    return this.each(function() {
      var u = n(this),
        r = u.data("bs.scrollspy"),
        f = "object" == typeof i && i;
      r || u.data("bs.scrollspy", r = new t(this, f));
      "string" == typeof i && r[i]()
    })
  }
  t.VERSION = "3.3.4";
  t.DEFAULTS = {
    offset: 10
  };
  t.prototype.getScrollHeight = function() {
    return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
  };
  t.prototype.refresh = function() {
    var t = this,
      i = "offset",
      r = 0;
    this.offsets = [];
    this.targets = [];
    this.scrollHeight = this.getScrollHeight();
    n.isWindow(this.$scrollElement[0]) || (i = "position", r = this.$scrollElement.scrollTop());
    this.$body.find(this.selector).map(function() {
      var f = n(this),
        u = f.data("target") || f.attr("href"),
        t = /^#./.test(u) && n(u);
      return t && t.length && t.is(":visible") && [
        [t[i]().top + r, u]
      ] || null
    }).sort(function(n, t) {
      return n[0] - t[0]
    }).each(function() {
      t.offsets.push(this[0]);
      t.targets.push(this[1])
    })
  };
  t.prototype.process = function() {
    var n, i = this.$scrollElement.scrollTop() + this.options.offset,
      f = this.getScrollHeight(),
      e = this.options.offset + f - this.$scrollElement.height(),
      t = this.offsets,
      r = this.targets,
      u = this.activeTarget;
    if (this.scrollHeight != f && this.refresh(), i >= e) return u != (n = r[r.length - 1]) && this.activate(n);
    if (u && i < t[0]) return this.activeTarget = null, this.clear();
    for (n = t.length; n--;) u != r[n] && i >= t[n] && (void 0 === t[n + 1] || i < t[n + 1]) && this.activate(r[n])
  };
  t.prototype.activate = function(t) {
    this.activeTarget = t;
    this.clear();
    var r = this.selector + '[data-target="' + t + '"],' + this.selector + '[href="' + t + '"]',
      i = n(r).parents("li").addClass("active");
    i.parent(".dropdown-menu").length && (i = i.closest("li.dropdown").addClass("active"));
    i.trigger("activate.bs.scrollspy")
  };
  t.prototype.clear = function() {
    n(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
  };
  var r = n.fn.scrollspy;
  n.fn.scrollspy = i;
  n.fn.scrollspy.Constructor = t;
  n.fn.scrollspy.noConflict = function() {
    return n.fn.scrollspy = r, this
  };
  n(window).on("load.bs.scrollspy.data-api", function() {
    n('[data-spy="scroll"]').each(function() {
      var t = n(this);
      i.call(t, t.data())
    })
  })
}(jQuery); + function(n) {
  "use strict";

  function r(i) {
    return this.each(function() {
      var u = n(this),
        r = u.data("bs.tab");
      r || u.data("bs.tab", r = new t(this));
      "string" == typeof i && r[i]()
    })
  }
  var t = function(t) {
      this.element = n(t)
    },
    u, i;
  t.VERSION = "3.3.4";
  t.TRANSITION_DURATION = 150;
  t.prototype.show = function() {
    var t = this.element,
      f = t.closest("ul:not(.dropdown-menu)"),
      i = t.data("target"),
      u;
    if (i || (i = t.attr("href"), i = i && i.replace(/.*(?=#[^\s]*$)/, "")), !t.parent("li").hasClass("active")) {
      var r = f.find(".active:last a"),
        e = n.Event("hide.bs.tab", {
          relatedTarget: t[0]
        }),
        o = n.Event("show.bs.tab", {
          relatedTarget: r[0]
        });
      (r.trigger(e), t.trigger(o), o.isDefaultPrevented() || e.isDefaultPrevented()) || (u = n(i), this.activate(t.closest("li"), f), this.activate(u, u.parent(), function() {
        r.trigger({
          type: "hidden.bs.tab",
          relatedTarget: t[0]
        });
        t.trigger({
          type: "shown.bs.tab",
          relatedTarget: r[0]
        })
      }))
    }
  };
  t.prototype.activate = function(i, r, u) {
    function e() {
      f.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1);
      i.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0);
      o ? (i[0].offsetWidth, i.addClass("in")) : i.removeClass("fade");
      i.parent(".dropdown-menu").length && i.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0);
      u && u()
    }
    var f = r.find("> .active"),
      o = u && n.support.transition && (f.length && f.hasClass("fade") || !!r.find("> .fade").length);
    f.length && o ? f.one("bsTransitionEnd", e).emulateTransitionEnd(t.TRANSITION_DURATION) : e();
    f.removeClass("in")
  };
  u = n.fn.tab;
  n.fn.tab = r;
  n.fn.tab.Constructor = t;
  n.fn.tab.noConflict = function() {
    return n.fn.tab = u, this
  };
  i = function(t) {
    t.preventDefault();
    r.call(n(this), "show")
  };
  n(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', i).on("click.bs.tab.data-api", '[data-toggle="pill"]', i)
}(jQuery); + function(n) {
  "use strict";

  function i(i) {
    return this.each(function() {
      var u = n(this),
        r = u.data("bs.affix"),
        f = "object" == typeof i && i;
      r || u.data("bs.affix", r = new t(this, f));
      "string" == typeof i && r[i]()
    })
  }
  var t = function(i, r) {
      this.options = n.extend({}, t.DEFAULTS, r);
      this.$target = n(this.options.target).on("scroll.bs.affix.data-api", n.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", n.proxy(this.checkPositionWithEventLoop, this));
      this.$element = n(i);
      this.affixed = null;
      this.unpin = null;
      this.pinnedOffset = null;
      this.checkPosition()
    },
    r;
  t.VERSION = "3.3.4";
  t.RESET = "affix affix-top affix-bottom";
  t.DEFAULTS = {
    offset: 0,
    target: window
  };
  t.prototype.getState = function(n, t, i, r) {
    var u = this.$target.scrollTop(),
      f = this.$element.offset(),
      e = this.$target.height();
    if (null != i && "top" == this.affixed) return i > u ? "top" : !1;
    if ("bottom" == this.affixed) return null != i ? u + this.unpin <= f.top ? !1 : "bottom" : n - r >= u + e ? !1 : "bottom";
    var o = null == this.affixed,
      s = o ? u : f.top,
      h = o ? e : t;
    return null != i && i >= u ? "top" : null != r && s + h >= n - r ? "bottom" : !1
  };
  t.prototype.getPinnedOffset = function() {
    if (this.pinnedOffset) return this.pinnedOffset;
    this.$element.removeClass(t.RESET).addClass("affix");
    var n = this.$target.scrollTop(),
      i = this.$element.offset();
    return this.pinnedOffset = i.top - n
  };
  t.prototype.checkPositionWithEventLoop = function() {
    setTimeout(n.proxy(this.checkPosition, this), 1)
  };
  t.prototype.checkPosition = function() {
    var i, e, o;
    if (this.$element.is(":visible")) {
      var s = this.$element.height(),
        r = this.options.offset,
        f = r.top,
        u = r.bottom,
        h = n(document.body).height();
      if ("object" != typeof r && (u = f = r), "function" == typeof f && (f = r.top(this.$element)), "function" == typeof u && (u = r.bottom(this.$element)), i = this.getState(h, s, f, u), this.affixed != i) {
        if (null != this.unpin && this.$element.css("top", ""), e = "affix" + (i ? "-" + i : ""), o = n.Event(e + ".bs.affix"), this.$element.trigger(o), o.isDefaultPrevented()) return;
        this.affixed = i;
        this.unpin = "bottom" == i ? this.getPinnedOffset() : null;
        this.$element.removeClass(t.RESET).addClass(e).trigger(e.replace("affix", "affixed") + ".bs.affix")
      }
      "bottom" == i && this.$element.offset({
        top: h - s - u
      })
    }
  };
  r = n.fn.affix;
  n.fn.affix = i;
  n.fn.affix.Constructor = t;
  n.fn.affix.noConflict = function() {
    return n.fn.affix = r, this
  };
  n(window).on("load", function() {
    n('[data-spy="affix"]').each(function() {
      var r = n(this),
        t = r.data();
      t.offset = t.offset || {};
      null != t.offsetBottom && (t.offset.bottom = t.offsetBottom);
      null != t.offsetTop && (t.offset.top = t.offsetTop);
      i.call(r, t)
    })
  })
}(jQuery);
window.Modernizr = function(n, t, i) {
    function l(n) {
      c.cssText = n
    }

    function ht(n, t) {
      return l(b.join(n + ";") + (t || ""))
    }

    function s(n, t) {
      return typeof n === t
    }

    function it(n, t) {
      return !!~("" + n).indexOf(t)
    }

    function rt(n, t) {
      var u, r;
      for (u in n)
        if (r = n[u], !it(r, "-") && c[r] !== i) return t == "pfx" ? r : !0;
      return !1
    }

    function ct(n, t, r) {
      var f, u;
      for (f in n)
        if (u = t[n[f]], u !== i) return r === !1 ? n[f] : s(u, "function") ? u.bind(r || t) : u;
      return !1
    }

    function e(n, t, i) {
      var r = n.charAt(0).toUpperCase() + n.slice(1),
        u = (n + " " + et.join(r + " ") + r).split(" ");
      return s(t, "string") || s(t, "undefined") ? rt(u, t) : (u = (n + " " + ot.join(r + " ") + r).split(" "), ct(u, t, i))
    }

    function lt() {
      u.input = function(i) {
        for (var r = 0, u = i.length; r < u; r++) a[i[r]] = i[r] in f;
        return a.list && (a.list = !!t.createElement("datalist") && !!n.HTMLDataListElement), a
      }("autocomplete autofocus list placeholder max min multiple pattern required step".split(" "));
      u.inputtypes = function(n) {
        for (var u = 0, r, e, s, h = n.length; u < h; u++) f.setAttribute("type", e = n[u]), r = f.type !== "text", r && (f.value = w, f.style.cssText = "position:absolute;visibility:hidden;", /^range$/.test(e) && f.style.WebkitAppearance !== i ? (o.appendChild(f), s = t.defaultView, r = s.getComputedStyle && s.getComputedStyle(f, null).WebkitAppearance !== "textfield" && f.offsetHeight !== 0, o.removeChild(f)) : /^(search|tel)$/.test(e) || (r = /^(url|email)$/.test(e) ? f.checkValidity && f.checkValidity() === !1 : f.value != w)), st[n[u]] = !!r;
        return st
      }("search tel url email datetime date month week time datetime-local number range color".split(" "))
    }
    var u = {},
      p = !0,
      o = t.documentElement,
      h = "modernizr",
      ut = t.createElement(h),
      c = ut.style,
      f = t.createElement("input"),
      w = ":)",
      at = {}.toString,
      b = " -webkit- -moz- -o- -ms- ".split(" "),
      ft = "Webkit Moz O ms",
      et = ft.split(" "),
      ot = ft.toLowerCase().split(" "),
      r = {},
      st = {},
      a = {},
      k = [],
      d = k.slice,
      v, g = function(n, i, r, u) {
        var l, a, c, v, f = t.createElement("div"),
          s = t.body,
          e = s || t.createElement("body");
        if (parseInt(r, 10))
          while (r--) c = t.createElement("div"), c.id = u ? u[r] : h + (r + 1), f.appendChild(c);
        return l = ["&#173;", '<style id="s', h, '">', n, "<\/style>"].join(""), f.id = h, (s ? f : e).innerHTML += l, e.appendChild(f), s || (e.style.background = "", e.style.overflow = "hidden", v = o.style.overflow, o.style.overflow = "hidden", o.appendChild(e)), a = i(f, n), s ? f.parentNode.removeChild(f) : (e.parentNode.removeChild(e), o.style.overflow = v), !!a
      },
      nt = {}.hasOwnProperty,
      tt, y;
    tt = !s(nt, "undefined") && !s(nt.call, "undefined") ? function(n, t) {
      return nt.call(n, t)
    } : function(n, t) {
      return t in n && s(n.constructor.prototype[t], "undefined")
    };
    Function.prototype.bind || (Function.prototype.bind = function(n) {
      var t = this,
        i, r;
      if (typeof t != "function") throw new TypeError;
      return i = d.call(arguments, 1), r = function() {
        var f, e, u;
        return this instanceof r ? (f = function() {}, f.prototype = t.prototype, e = new f, u = t.apply(e, i.concat(d.call(arguments))), Object(u) === u ? u : e) : t.apply(n, i.concat(d.call(arguments)))
      }, r
    });

    for (y in r) tt(r, y) && (v = y.toLowerCase(), u[v] = r[y](), k.push((u[v] ? "" : "no-") + v));
    return u.input || lt(), u.addTest = function(n, t) {
        if (typeof n == "object")
          for (var r in n) tt(n, r) && u.addTest(r, n[r]);
        else {
          if (n = n.toLowerCase(), u[n] !== i) return u;
          t = typeof t == "function" ? t() : t;
          typeof p != "undefined" && p && (o.className += " " + (t ? "" : "no-") + n);
          u[n] = t
        }
        return u
      }, l(""), ut = f = null,
      function(n, t) {
        function v(n, t) {
          var i = n.createElement("p"),
            r = n.getElementsByTagName("head")[0] || n.documentElement;
          return i.innerHTML = "x<style>" + t + "<\/style>", r.insertBefore(i.lastChild, r.firstChild)
        }

        function s() {
          var n = r.elements;
          return typeof n == "string" ? n.split(" ") : n
        }

        function u(n) {
          var t = a[n[l]];
          return t || (t = {}, o++, n[l] = o, a[o] = t), t
        }

        function h(n, r, f) {
          if (r || (r = t), i) return r.createElement(n);
          f || (f = u(r));
          var e;
          return e = f.cache[n] ? f.cache[n].cloneNode() : b.test(n) ? (f.cache[n] = f.createElem(n)).cloneNode() : f.createElem(n), e.canHaveChildren && !w.test(n) && !e.tagUrn ? f.frag.appendChild(e) : e
        }

        function y(n, r) {
          if (n || (n = t), i) return n.createDocumentFragment();
          r = r || u(n);
          for (var e = r.frag.cloneNode(), f = 0, o = s(), h = o.length; f < h; f++) e.createElement(o[f]);
          return e
        }

        function p(n, t) {
          t.cache || (t.cache = {}, t.createElem = n.createElement, t.createFrag = n.createDocumentFragment, t.frag = t.createFrag());
          n.createElement = function(i) {
            return r.shivMethods ? h(i, n, t) : t.createElem(i)
          };
          n.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + s().join().replace(/[\w\-]+/g, function(n) {
            return t.createElem(n), t.frag.createElement(n), 'c("' + n + '")'
          }) + ");return n}")(r, t.frag)
        }

        function c(n) {
          n || (n = t);
          var f = u(n);
          return r.shivCSS && !e && !f.hasCSS && (f.hasCSS = !!v(n, "article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")), i || p(n, f), n
        }
        var f = n.html5 || {},
          w = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
          b = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
          e, l = "_html5shiv",
          o = 0,
          a = {},
          i, r;
        (function() {
          try {
            var n = t.createElement("a");
            n.innerHTML = "<xyz><\/xyz>";
            e = "hidden" in n;
            i = n.childNodes.length == 1 || function() {
              t.createElement("a");
              var n = t.createDocumentFragment();
              return typeof n.cloneNode == "undefined" || typeof n.createDocumentFragment == "undefined" || typeof n.createElement == "undefined"
            }()
          } catch (r) {
            e = !0;
            i = !0
          }
        })();
        r = {
          elements: f.elements || "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",
          version: "3.7.0",
          shivCSS: f.shivCSS !== !1,
          supportsUnknownElements: i,
          shivMethods: f.shivMethods !== !1,
          type: "default",
          shivDocument: c,
          createElement: h,
          createDocumentFragment: y
        };
        n.html5 = r;
        c(t)
      }(this, t), u._version = "2.8.3", u._prefixes = b, u._domPrefixes = ot, u._cssomPrefixes = et, u.testProp = function(n) {
        return rt([n])
      }, u.testAllProps = e, u.testStyles = g, o.className = o.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (p ? " js " + k.join(" ") : ""), u
  }(this, this.document),
  function(n, t, i) {
    function h(n) {
      return "[object Function]" == y.call(n)
    }

    function c(n) {
      return "string" == typeof n
    }

    function l() {}

    function w(n) {
      return !n || "loaded" == n || "complete" == n || "uninitialized" == n
    }

    function e() {
      var n = a.shift();
      v = 1;
      n ? n.t ? s(function() {
        ("c" == n.t ? u.injectCss : u.injectJs)(n.s, 0, n.a, n.x, n.e, 1)
      }, 0) : (n(), e()) : v = 0
    }

    function ut(n, i, f, h, c, l, y) {
      function k(t) {
        if (!nt && w(p.readyState) && (tt.r = nt = 1, !v && e(), p.onload = p.onreadystatechange = null, t)) {
          "img" != n && s(function() {
            g.removeChild(p)
          }, 50);
          for (var u in r[i]) r[i].hasOwnProperty(u) && r[i][u].onload()
        }
      }
      var y = y || u.errorTimeout,
        p = t.createElement(n),
        nt = 0,
        b = 0,
        tt = {
          t: f,
          s: i,
          e: c,
          a: l,
          x: y
        };
      1 === r[i] && (b = 1, r[i] = []);
      "object" == n ? p.data = i : (p.src = i, p.type = n);
      p.width = p.height = "0";
      p.onerror = p.onload = p.onreadystatechange = function() {
        k.call(this, b)
      };
      a.splice(h, 0, tt);
      "img" != n && (b || 2 === r[i] ? (g.insertBefore(p, d ? null : o), s(k, y)) : r[i].push(p))
    }

    function ft(n, t, i, r, u) {
      return v = 0, t = t || "j", c(n) ? ut("c" == t ? et : nt, n, t, this.i++, i, r, u) : (a.splice(this.i++, 0, n), 1 == a.length && e()), this
    }

    function b() {
      var n = u;
      return n.loader = {
        load: ft,
        i: 0
      }, n
    }
    var f = t.documentElement,
      s = n.setTimeout,
      o = t.getElementsByTagName("script")[0],
      y = {}.toString,
      a = [],
      v = 0,
      k = "MozAppearance" in f.style,
      d = k && !!t.createRange().compareNode,
      g = d ? f : o.parentNode,
      f = n.opera && "[object Opera]" == y.call(n.opera),
      f = !!t.attachEvent && !f,
      nt = k ? "object" : f ? "script" : "img",
      et = f ? "script" : nt,
      tt = Array.isArray || function(n) {
        return "[object Array]" == y.call(n)
      },
      p = [],
      r = {},
      it = {
        timeout: function(n, t) {
          return t.length && (n.timeout = t[0]), n
        }
      },
      rt, u;
    u = function(n) {
      function a(n) {
        for (var n = n.split("!"), f = p.length, t = n.pop(), e = n.length, t = {
            url: t,
            origUrl: t,
            prefixes: n
          }, u, r, i = 0; i < e; i++) r = n[i].split("="), (u = it[r.shift()]) && (t = u(t, r));
        for (i = 0; i < f; i++) t = p[i](t);
        return t
      }

      function f(n, t, u, f, e) {
        var o = a(n),
          s = o.autoCallback;
        o.url.split(".").pop().split("?").shift();
        o.bypass || (t && (t = h(t) ? t : t[n] || t[f] || t[n.split("/").pop().split("?")[0]]), o.instead ? o.instead(n, t, u, f, e) : (r[o.url] ? o.noexec = !0 : r[o.url] = 1, u.load(o.url, o.forceCSS || !o.forceJS && "css" == o.url.split(".").pop().split("?").shift() ? "c" : i, o.noexec, o.attrs, o.timeout), (h(t) || h(s)) && u.load(function() {
          b();
          t && t(o.origUrl, e, f);
          s && s(o.origUrl, e, f);
          r[o.url] = 2
        })))
      }

      function s(n, t) {
        function a(n, o) {
          if (n) {
            if (c(n)) o || (i = function() {
              var n = [].slice.call(arguments);
              s.apply(this, n);
              u()
            }), f(n, i, t, 0, e);
            else if (Object(n) === n)
              for (r in v = function() {
                  var t = 0,
                    i;
                  for (i in n) n.hasOwnProperty(i) && t++;
                  return t
                }(), n) n.hasOwnProperty(r) && (!o && !--v && (h(i) ? i = function() {
                var n = [].slice.call(arguments);
                s.apply(this, n);
                u()
              } : i[r] = function(n) {
                return function() {
                  var t = [].slice.call(arguments);
                  n && n.apply(this, t);
                  u()
                }
              }(s[r])), f(n[r], i, t, r, e))
          } else o || u()
        }
        var e = !!n.test,
          o = n.load || n.both,
          i = n.callback || l,
          s = i,
          u = n.complete || l,
          v, r;
        a(e ? n.yep : n.nope, !!o);
        o && a(o)
      }
      var e, t, o = this.yepnope.loader;
      if (c(n)) f(n, 0, o, 0);
      else if (tt(n))
        for (e = 0; e < n.length; e++) t = n[e], c(t) ? f(t, 0, o, 0) : tt(t) ? u(t) : Object(t) === t && s(t, o);
      else Object(n) === n && s(n, o)
    };
    u.addPrefix = function(n, t) {
      it[n] = t
    };
    u.addFilter = function(n) {
      p.push(n)
    };
    u.errorTimeout = 1e4;
    null == t.readyState && t.addEventListener && (t.readyState = "loading", t.addEventListener("DOMContentLoaded", rt = function() {
      t.removeEventListener("DOMContentLoaded", rt, 0);
      t.readyState = "complete"
    }, 0));
    n.yepnope = b();
    n.yepnope.executeStack = e;
    n.yepnope.injectJs = function(n, i, r, f, h, c) {
      var a = t.createElement("script"),
        v, y, f = f || u.errorTimeout;
      a.src = n;
      for (y in r) a.setAttribute(y, r[y]);
      i = c ? e : i || l;
      a.onreadystatechange = a.onload = function() {
        !v && w(a.readyState) && (v = 1, i(), a.onload = a.onreadystatechange = null)
      };
      s(function() {
        v || (v = 1, i(1))
      }, f);
      h ? a.onload() : o.parentNode.insertBefore(a, o)
    };
    n.yepnope.injectCss = function(n, i, r, u, f, h) {
      var u = t.createElement("link"),
        c, i = h ? e : i || l;
      u.href = n;
      u.rel = "stylesheet";
      u.type = "text/css";
      for (c in r) u.setAttribute(c, r[c]);
      f || (o.parentNode.insertBefore(u, o), s(i, 0))
    }
  }(this, document);
Modernizr.load = function() {
  yepnope.apply(window, [].slice.call(arguments, 0))
};
! function(n) {
  n(["jquery"], function(n) {
    return function() {
      function v(n, t, r) {
        return u({
          type: f.error,
          iconClass: i().iconClasses.error,
          message: n,
          optionsOverride: r,
          title: t
        })
      }

      function r(r, u) {
        return r || (r = i()), t = n("#" + r.containerId), t.length ? t : (u && (t = nt(r)), t)
      }

      function y(n, t, r) {
        return u({
          type: f.info,
          iconClass: i().iconClasses.info,
          message: n,
          optionsOverride: r,
          title: t
        })
      }

      function p(n) {
        o = n
      }

      function w(n, t, r) {
        return u({
          type: f.success,
          iconClass: i().iconClasses.success,
          message: n,
          optionsOverride: r,
          title: t
        })
      }

      function b(n, t, r) {
        return u({
          type: f.warning,
          iconClass: i().iconClasses.warning,
          message: n,
          optionsOverride: r,
          title: t
        })
      }

      function k(n) {
        var u = i();
        t || r(u);
        h(n, u) || g(u)
      }

      function d(u) {
        var f = i();
        return t || r(f), u && 0 === n(":focus", u).length ? void e(u) : void(t.children().length && t.remove())
      }

      function g(i) {
        for (var u = t.children(), r = u.length - 1; r >= 0; r--) h(n(u[r]), i)
      }

      function h(t, i) {
        return t && 0 === n(":focus", t).length ? (t[i.hideMethod]({
          duration: i.hideDuration,
          easing: i.hideEasing,
          complete: function() {
            e(t)
          }
        }), !0) : !1
      }

      function nt(i) {
        return t = n("<div/>").attr("id", i.containerId).addClass(i.positionClass).attr("aria-live", "polite").attr("role", "alert"), t.appendTo(n(i.target)), t
      }

      function tt() {
        return {
          tapToDismiss: !0,
          toastClass: "toast",
          containerId: "toast-container",
          debug: !1,
          showMethod: "fadeIn",
          showDuration: 300,
          showEasing: "swing",
          onShown: void 0,
          hideMethod: "fadeOut",
          hideDuration: 1e3,
          hideEasing: "swing",
          onHidden: void 0,
          extendedTimeOut: 1e3,
          iconClasses: {
            error: "toast-error",
            info: "toast-info",
            success: "toast-success",
            warning: "toast-warning"
          },
          iconClass: "toast-info",
          positionClass: "toast-top-right",
          timeOut: 5e3,
          titleClass: "toast-title",
          messageClass: "toast-message",
          target: "body",
          closeHtml: '<button type="button">&times;<\/button>',
          newestOnTop: !0,
          preventDuplicates: !1,
          progressBar: !1
        }
      }

      function c(n) {
        o && o(n)
      }

      function u(u) {
        function v(t) {
          if (!n(":focus", o).length || t) return (clearTimeout(h.intervalId), o[f.hideMethod]({
            duration: f.hideDuration,
            easing: f.hideEasing,
            complete: function() {
              e(o);
              f.onHidden && "hidden" !== a.state && f.onHidden();
              a.state = "hidden";
              a.endTime = new Date;
              c(a)
            }
          }))
        }

        function g() {
          (f.timeOut > 0 || f.extendedTimeOut > 0) && (w = setTimeout(v, f.extendedTimeOut), h.maxHideTime = parseFloat(f.extendedTimeOut), h.hideEta = (new Date).getTime() + h.maxHideTime)
        }

        function nt() {
          clearTimeout(w);
          h.hideEta = 0;
          o.stop(!0, !0)[f.showMethod]({
            duration: f.showDuration,
            easing: f.showEasing
          })
        }

        function tt() {
          var n = (h.hideEta - (new Date).getTime()) / h.maxHideTime * 100;
          b.width(n + "%")
        }
        var f = i(),
          p = u.iconClass || f.iconClass;
        if ("undefined" != typeof u.optionsOverride && (f = n.extend(f, u.optionsOverride), p = u.optionsOverride.iconClass || p), f.preventDuplicates) {
          if (u.message === s) return;
          s = u.message
        }
        l++;
        t = r(f, !0);
        var w = null,
          o = n("<div/>"),
          k = n("<div/>"),
          d = n("<div/>"),
          b = n("<div/>"),
          y = n(f.closeHtml),
          h = {
            intervalId: null,
            hideEta: null,
            maxHideTime: null
          },
          a = {
            toastId: l,
            state: "visible",
            startTime: new Date,
            options: f,
            map: u
          };
        return u.iconClass && o.addClass(f.toastClass).addClass(p), u.title && (k.append(u.title).addClass(f.titleClass), o.append(k)), u.message && (d.append(u.message).addClass(f.messageClass), o.append(d)), f.closeButton && (y.addClass("toast-close-button").attr("role", "button"), o.prepend(y)), f.progressBar && (b.addClass("toast-progress"), o.prepend(b)), o.hide(), f.newestOnTop ? t.prepend(o) : t.append(o), o[f.showMethod]({
          duration: f.showDuration,
          easing: f.showEasing,
          complete: f.onShown
        }), f.timeOut > 0 && (w = setTimeout(v, f.timeOut), h.maxHideTime = parseFloat(f.timeOut), h.hideEta = (new Date).getTime() + h.maxHideTime, f.progressBar && (h.intervalId = setInterval(tt, 10))), o.hover(nt, g), !f.onclick && f.tapToDismiss && o.click(v), f.closeButton && y && y.click(function(n) {
          n.stopPropagation ? n.stopPropagation() : void 0 !== n.cancelBubble && n.cancelBubble !== !0 && (n.cancelBubble = !0);
          v(!0)
        }), f.onclick && o.click(function() {
          f.onclick();
          v()
        }), c(a), f.debug && console && console.log(a), o
      }

      function i() {
        return n.extend({}, tt(), a.options)
      }

      function e(n) {
        t || (t = r());
        n.is(":visible") || (n.remove(), n = null, 0 === t.children().length && (t.remove(), s = void 0))
      }
      var t, o, s, l = 0,
        f = {
          error: "error",
          info: "info",
          success: "success",
          warning: "warning"
        },
        a = {
          clear: k,
          remove: d,
          error: v,
          getContainer: r,
          info: y,
          options: {},
          subscribe: p,
          success: w,
          version: "2.1.0",
          warning: b
        };
      return a
    }()
  })
}("function" == typeof define && define.amd ? define : function(n, t) {
  "undefined" != typeof module && module.exports ? module.exports = t(require("jquery")) : window.toastr = t(window.jQuery)
}),
function(n, t, i) {
  function v(t, i) {
    var u, f;
    if (n.isArray(t)) {
      for (u = t.length - 1; u >= 0; u--) f = t[u], n.type(f) === "string" && r.transports[f] || (i.log("Invalid transport: " + f + ", removing it from the transports list."), t.splice(u, 1));
      t.length === 0 && (i.log("No transports remain within the specified transport array."), t = null)
    } else if (r.transports[t] || t === "auto") {
      if (t === "auto" && r._.ieVersion <= 8) return ["longPolling"]
    } else i.log("Invalid transport: " + t.toString() + "."), t = null;
    return t
  }

  function y(n) {
    return n === "http:" ? 80 : n === "https:" ? 443 : void 0
  }

  function h(n, t) {
    return t.match(/:\d+$/) ? t : t + ":" + y(n)
  }

  function p(t, i) {
    var u = this,
      r = [];
    u.tryBuffer = function(i) {
      return t.state === n.signalR.connectionState.connecting ? (r.push(i), !0) : !1
    };
    u.drain = function() {
      if (t.state === n.signalR.connectionState.connected)
        while (r.length > 0) i(r.shift())
    };
    u.clear = function() {
      r = []
    }
  }
  var f = {
    nojQuery: "jQuery was not found. Please ensure jQuery is referenced before the SignalR client JavaScript file.",
    noTransportOnInit: "No transport could be initialized successfully. Try specifying a different transport or none at all for auto initialization.",
    errorOnNegotiate: "Error during negotiation request.",
    stoppedWhileLoading: "The connection was stopped during page load.",
    stoppedWhileNegotiating: "The connection was stopped during the negotiate request.",
    errorParsingNegotiateResponse: "Error parsing negotiate response.",
    errorDuringStartRequest: "Error during start request. Stopping the connection.",
    stoppedDuringStartRequest: "The connection was stopped during the start request.",
    errorParsingStartResponse: "Error parsing start response: '{0}'. Stopping the connection.",
    invalidStartResponse: "Invalid start response: '{0}'. Stopping the connection.",
    protocolIncompatible: "You are using a version of the client that isn't compatible with the server. Client version {0}, server version {1}.",
    sendFailed: "Send failed.",
    parseFailed: "Failed at parsing response: {0}",
    longPollFailed: "Long polling request failed.",
    eventSourceFailedToConnect: "EventSource failed to connect.",
    eventSourceError: "Error raised by EventSource",
    webSocketClosed: "WebSocket closed.",
    pingServerFailedInvalidResponse: "Invalid ping response when pinging server: '{0}'.",
    pingServerFailed: "Failed to ping server.",
    pingServerFailedStatusCode: "Failed to ping server.  Server responded with status code {0}, stopping the connection.",
    pingServerFailedParse: "Failed to parse ping server response, stopping the connection.",
    noConnectionTransport: "Connection is in an invalid state, there is no transport active.",
    webSocketsInvalidState: "The Web Socket transport is in an invalid state, transitioning into reconnecting.",
    reconnectTimeout: "Couldn't reconnect within the configured timeout of {0} ms, disconnecting.",
    reconnectWindowTimeout: "The client has been inactive since {0} and it has exceeded the inactivity timeout of {1} ms. Stopping the connection."
  };
  if (typeof n != "function") throw new Error(f.nojQuery);
  var r, c, o = t.document.readyState === "complete",
    e = n(t),
    l = "__Negotiate Aborted__",
    u = {
      onStart: "onStart",
      onStarting: "onStarting",
      onReceived: "onReceived",
      onError: "onError",
      onConnectionSlow: "onConnectionSlow",
      onReconnecting: "onReconnecting",
      onReconnect: "onReconnect",
      onStateChanged: "onStateChanged",
      onDisconnect: "onDisconnect"
    },
    w = function(n, i) {
      if (i !== !1) {
        var r;
        typeof t.console != "undefined" && (r = "[" + (new Date).toTimeString() + "] SignalR: " + n, t.console.debug ? t.console.debug(r) : t.console.log && t.console.log(r))
      }
    },
    s = function(t, i, r) {
      return i === t.state ? (t.state = r, n(t).triggerHandler(u.onStateChanged, [{
        oldState: i,
        newState: r
      }]), !0) : !1
    },
    b = function(n) {
      return n.state === r.connectionState.disconnected
    },
    a = function(n) {
      return n._.keepAliveData.activated && n.transport.supportsKeepAlive(n)
    },
    k = function(i) {
      var f, e;
      i._.configuredStopReconnectingTimeout || (e = function(t) {
        var i = r._.format(r.resources.reconnectTimeout, t.disconnectTimeout);
        t.log(i);
        n(t).triggerHandler(u.onError, [r._.error(i, "TimeoutException")]);
        t.stop(!1, !1)
      }, i.reconnecting(function() {
        var n = this;
        n.state === r.connectionState.reconnecting && (f = t.setTimeout(function() {
          e(n)
        }, n.disconnectTimeout))
      }), i.stateChanged(function(n) {
        n.oldState === r.connectionState.reconnecting && t.clearTimeout(f)
      }), i._.configuredStopReconnectingTimeout = !0)
    };
  if (r = function(n, t, i) {
      return new r.fn.init(n, t, i)
    }, r._ = {
      defaultContentType: "application/x-www-form-urlencoded; charset=UTF-8",
      ieVersion: function() {
        var i, n;
        return t.navigator.appName === "Microsoft Internet Explorer" && (n = /MSIE ([0-9]+\.[0-9]+)/.exec(t.navigator.userAgent), n && (i = t.parseFloat(n[1]))), i
      }(),
      error: function(n, t, i) {
        var r = new Error(n);
        return r.source = t, typeof i != "undefined" && (r.context = i), r
      },
      transportError: function(n, t, r, u) {
        var f = this.error(n, r, u);
        return f.transport = t ? t.name : i, f
      },
      format: function() {
        for (var t = arguments[0], n = 0; n < arguments.length - 1; n++) t = t.replace("{" + n + "}", arguments[n + 1]);
        return t
      },
      firefoxMajorVersion: function(n) {
        var t = n.match(/Firefox\/(\d+)/);
        return !t || !t.length || t.length < 2 ? 0 : parseInt(t[1], 10)
      },
      configurePingInterval: function(i) {
        var f = i._.config,
          e = function(t) {
            n(i).triggerHandler(u.onError, [t])
          };
        f && !i._.pingIntervalId && f.pingInterval && (i._.pingIntervalId = t.setInterval(function() {
          r.transports._logic.pingServer(i).fail(e)
        }, f.pingInterval))
      }
    }, r.events = u, r.resources = f, r.ajaxDefaults = {
      processData: !0,
      timeout: null,
      async: !0,
      global: !1,
      cache: !1
    }, r.changeState = s, r.isDisconnecting = b, r.connectionState = {
      connecting: 0,
      connected: 1,
      reconnecting: 2,
      disconnected: 4
    }, r.hub = {
      start: function() {
        throw new Error("SignalR: Error loading hubs. Ensure your hubs reference is correct, e.g. <script src='/signalr/js'><\/script>.");
      }
    }, typeof e.on == "function") e.on("load", function() {
    o = !0
  });
  else e.load(function() {
    o = !0
  });
  r.fn = r.prototype = {
    init: function(t, i, r) {
      var f = n(this);
      this.url = t;
      this.qs = i;
      this.lastError = null;
      this._ = {
        keepAliveData: {},
        connectingMessageBuffer: new p(this, function(n) {
          f.triggerHandler(u.onReceived, [n])
        }),
        lastMessageAt: (new Date).getTime(),
        lastActiveAt: (new Date).getTime(),
        beatInterval: 5e3,
        beatHandle: null,
        totalTransportConnectTimeout: 0
      };
      typeof r == "boolean" && (this.logging = r)
    },
    _parseResponse: function(n) {
      var t = this;
      return n ? typeof n == "string" ? t.json.parse(n) : n : n
    },
    _originalJson: t.JSON,
    json: t.JSON,
    isCrossDomain: function(i, r) {
      var u;
      return (i = n.trim(i), r = r || t.location, i.indexOf("http") !== 0) ? !1 : (u = t.document.createElement("a"), u.href = i, u.protocol + h(u.protocol, u.host) !== r.protocol + h(r.protocol, r.host))
    },
    ajaxDataType: "text",
    contentType: "application/json; charset=UTF-8",
    logging: !1,
    state: r.connectionState.disconnected,
    clientProtocol: "1.5",
    reconnectDelay: 2e3,
    transportConnectTimeout: 0,
    disconnectTimeout: 3e4,
    reconnectWindow: 3e4,
    keepAliveWarnAt: 2 / 3,
    start: function(i, h) {
      var c = this,
        y = {
          pingInterval: 3e5,
          waitForPageLoad: !0,
          transport: "auto",
          jsonp: !1
        },
        d, p = c._deferral || n.Deferred(),
        w = t.document.createElement("a"),
        b, g;
      if (c.lastError = null, c._deferral = p, !c.json) throw new Error("SignalR: No JSON parser found. Please ensure json2.js is referenced before the SignalR.js file if you need to support clients without native JSON parsing support, e.g. IE<8.");
      if (n.type(i) === "function" ? h = i : n.type(i) === "object" && (n.extend(y, i), n.type(y.callback) === "function" && (h = y.callback)), y.transport = v(y.transport, c), !y.transport) throw new Error("SignalR: Invalid transport(s) specified, aborting start.");
      return (c._.config = y, !o && y.waitForPageLoad === !0) ? (c._.deferredStartHandler = function() {
        c.start(i, h)
      }, e.bind("load", c._.deferredStartHandler), p.promise()) : c.state === r.connectionState.connecting ? p.promise() : s(c, r.connectionState.disconnected, r.connectionState.connecting) === !1 ? (p.resolve(c), p.promise()) : (k(c), w.href = c.url, w.protocol && w.protocol !== ":" ? (c.protocol = w.protocol, c.host = w.host) : (c.protocol = t.document.location.protocol, c.host = w.host || t.document.location.host), c.baseUrl = c.protocol + "//" + c.host, c.wsProtocol = c.protocol === "https:" ? "wss://" : "ws://", y.transport === "auto" && y.jsonp === !0 && (y.transport = "longPolling"), c.url.indexOf("//") === 0 && (c.url = t.location.protocol + c.url, c.log("Protocol relative URL detected, normalizing it to '" + c.url + "'.")), this.isCrossDomain(c.url) && (c.log("Auto detected cross domain url."), y.transport === "auto" && (y.transport = ["webSockets", "serverSentEvents", "longPolling"]), typeof y.withCredentials == "undefined" && (y.withCredentials = !0), y.jsonp || (y.jsonp = !n.support.cors, y.jsonp && c.log("Using jsonp because this browser doesn't support CORS.")), c.contentType = r._.defaultContentType), c.withCredentials = y.withCredentials, c.ajaxDataType = y.jsonp ? "jsonp" : "text", n(c).bind(u.onStart, function() {
        n.type(h) === "function" && h.call(c);
        p.resolve(c)
      }), c._.initHandler = r.transports._logic.initHandler(c), d = function(i, o) {
        var l = r._.error(f.noTransportOnInit);
        if (o = o || 0, o >= i.length) {
          o === 0 ? c.log("No transports supported by the server were selected.") : o === 1 ? c.log("No fallback transports were selected.") : c.log("Fallback transports exhausted.");
          n(c).triggerHandler(u.onError, [l]);
          p.reject(l);
          c.stop();
          return
        }
        if (c.state !== r.connectionState.disconnected) {
          var y = i[o],
            h = r.transports[y],
            v = function() {
              d(i, o + 1)
            };
          c.transport = h;
          try {
            c._.initHandler.start(h, function() {
              var i = r._.firefoxMajorVersion(t.navigator.userAgent) >= 11,
                f = !!c.withCredentials && i;
              c.log("The start request succeeded. Transitioning to the connected state.");
              a(c) && r.transports._logic.monitorKeepAlive(c);
              r.transports._logic.startHeartbeat(c);
              r._.configurePingInterval(c);
              s(c, r.connectionState.connecting, r.connectionState.connected) || c.log("WARNING! The connection was not in the connecting state.");
              c._.connectingMessageBuffer.drain();
              n(c).triggerHandler(u.onStart);
              e.bind("unload", function() {
                c.log("Window unloading, stopping the connection.");
                c.stop(f)
              });
              i && e.bind("beforeunload", function() {
                t.setTimeout(function() {
                  c.stop(f)
                }, 0)
              })
            }, v)
          } catch (w) {
            c.log(h.name + " transport threw '" + w.message + "' when attempting to start.");
            v()
          }
        }
      }, b = c.url + "/negotiate", g = function(t, i) {
        var e = r._.error(f.errorOnNegotiate, t, i._.negotiateRequest);
        n(i).triggerHandler(u.onError, e);
        p.reject(e);
        i.stop()
      }, n(c).triggerHandler(u.onStarting), b = r.transports._logic.prepareQueryString(c, b), c.log("Negotiating with '" + b + "'."), c._.negotiateRequest = r.transports._logic.ajax(c, {
        url: b,
        error: function(n, t) {
          t !== l ? g(n, c) : p.reject(r._.error(f.stoppedWhileNegotiating, null, c._.negotiateRequest))
        },
        success: function(t) {
          var i, e, h, o = [],
            s = [];
          try {
            i = c._parseResponse(t)
          } catch (l) {
            g(r._.error(f.errorParsingNegotiateResponse, l), c);
            return
          }
          if (e = c._.keepAliveData, c.appRelativeUrl = i.Url, c.id = i.ConnectionId, c.token = i.ConnectionToken, c.webSocketServerUrl = i.WebSocketServerUrl, c._.pollTimeout = i.ConnectionTimeout * 1e3 + 1e4, c.disconnectTimeout = i.DisconnectTimeout * 1e3, c._.totalTransportConnectTimeout = c.transportConnectTimeout + i.TransportConnectTimeout * 1e3, i.KeepAliveTimeout ? (e.activated = !0, e.timeout = i.KeepAliveTimeout * 1e3, e.timeoutWarning = e.timeout * c.keepAliveWarnAt, c._.beatInterval = (e.timeout - e.timeoutWarning) / 3) : e.activated = !1, c.reconnectWindow = c.disconnectTimeout + (e.timeout || 0), !i.ProtocolVersion || i.ProtocolVersion !== c.clientProtocol) {
            h = r._.error(r._.format(f.protocolIncompatible, c.clientProtocol, i.ProtocolVersion));
            n(c).triggerHandler(u.onError, [h]);
            p.reject(h);
            return
          }
          n.each(r.transports, function(n) {
            if (n.indexOf("_") === 0 || n === "webSockets" && !i.TryWebSockets) return !0;
            s.push(n)
          });
          n.isArray(y.transport) ? n.each(y.transport, function(t, i) {
            n.inArray(i, s) >= 0 && o.push(i)
          }) : y.transport === "auto" ? o = s : n.inArray(y.transport, s) >= 0 && o.push(y.transport);
          d(o)
        }
      }), p.promise())
    },
    starting: function(t) {
      var i = this;
      return n(i).bind(u.onStarting, function() {
        t.call(i)
      }), i
    },
    send: function(n) {
      var t = this;
      if (t.state === r.connectionState.disconnected) throw new Error("SignalR: Connection must be started before data can be sent. Call .start() before .send()");
      if (t.state === r.connectionState.connecting) throw new Error("SignalR: Connection has not been fully initialized. Use .start().done() or .start().fail() to run logic after the connection has started.");
      return t.transport.send(t, n), t
    },
    received: function(t) {
      var i = this;
      return n(i).bind(u.onReceived, function(n, r) {
        t.call(i, r)
      }), i
    },
    stateChanged: function(t) {
      var i = this;
      return n(i).bind(u.onStateChanged, function(n, r) {
        t.call(i, r)
      }), i
    },
    error: function(t) {
      var i = this;
      return n(i).bind(u.onError, function(n, r, u) {
        i.lastError = r;
        t.call(i, r, u)
      }), i
    },
    disconnected: function(t) {
      var i = this;
      return n(i).bind(u.onDisconnect, function() {
        t.call(i)
      }), i
    },
    connectionSlow: function(t) {
      var i = this;
      return n(i).bind(u.onConnectionSlow, function() {
        t.call(i)
      }), i
    },
    reconnecting: function(t) {
      var i = this;
      return n(i).bind(u.onReconnecting, function() {
        t.call(i)
      }), i
    },
    reconnected: function(t) {
      var i = this;
      return n(i).bind(u.onReconnect, function() {
        t.call(i)
      }), i
    },
    stop: function(i, h) {
      var c = this,
        v = c._deferral;
      if (c._.deferredStartHandler && e.unbind("load", c._.deferredStartHandler), delete c._.config, delete c._.deferredStartHandler, !o && (!c._.config || c._.config.waitForPageLoad === !0)) {
        c.log("Stopping connection prior to negotiate.");
        v && v.reject(r._.error(f.stoppedWhileLoading));
        return
      }
      if (c.state !== r.connectionState.disconnected) return c.log("Stopping connection."), t.clearTimeout(c._.beatHandle), t.clearInterval(c._.pingIntervalId), c.transport && (c.transport.stop(c), h !== !1 && c.transport.abort(c, i), a(c) && r.transports._logic.stopMonitoringKeepAlive(c), c.transport = null), c._.negotiateRequest && (c._.negotiateRequest.abort(l), delete c._.negotiateRequest), c._.initHandler && c._.initHandler.stop(), delete c._deferral, delete c.messageId, delete c.groupsToken, delete c.id, delete c._.pingIntervalId, delete c._.lastMessageAt, delete c._.lastActiveAt, c._.connectingMessageBuffer.clear(), n(c).unbind(u.onStart), s(c, c.state, r.connectionState.disconnected), n(c).triggerHandler(u.onDisconnect), c
    },
    log: function(n) {
      w(n, this.logging)
    }
  };
  r.fn.init.prototype = r.fn;
  r.noConflict = function() {
    return n.connection === r && (n.connection = c), r
  };
  n.connection && (c = n.connection);
  n.connection = n.signalR = r
}(window.jQuery, window),
function(n, t, i) {
  function o(n) {
    n._.keepAliveData.monitoring && c(n);
    u.markActive(n) && (n._.beatHandle = t.setTimeout(function() {
      o(n)
    }, n._.beatInterval))
  }

  function c(t) {
    var i = t._.keepAliveData,
      u;
    t.state === r.connectionState.connected && (u = (new Date).getTime() - t._.lastMessageAt, u >= i.timeout ? (t.log("Keep alive timed out.  Notifying transport that connection has been lost."), t.transport.lostConnection(t)) : u >= i.timeoutWarning ? i.userNotified || (t.log("Keep alive has been missed, connection may be dead/slow."), n(t).triggerHandler(f.onConnectionSlow), i.userNotified = !0) : i.userNotified = !1)
  }

  function e(n, t) {
    var i = n.url + t;
    return n.transport && (i += "?transport=" + n.transport.name), u.prepareQueryString(n, i)
  }

  function s(n) {
    this.connection = n;
    this.startRequested = !1;
    this.startCompleted = !1;
    this.connectionStopped = !1
  }
  var r = n.signalR,
    f = n.signalR.events,
    l = n.signalR.changeState,
    h = "__Start Aborted__",
    u;
  r.transports = {};
  s.prototype = {
    start: function(n, r, u) {
      var f = this,
        e = f.connection,
        o = !1;
      if (f.startRequested || f.connectionStopped) {
        e.log("WARNING! " + n.name + " transport cannot be started. Initialization ongoing or completed.");
        return
      }
      e.log(n.name + " transport starting.");
      n.start(e, function() {
        o || f.initReceived(n, r)
      }, function(t) {
        return o || (o = !0, f.transportFailed(n, t, u)), !f.startCompleted || f.connectionStopped
      });
      f.transportTimeoutHandle = t.setTimeout(function() {
        o || (o = !0, e.log(n.name + " transport timed out when trying to connect."), f.transportFailed(n, i, u))
      }, e._.totalTransportConnectTimeout)
    },
    stop: function() {
      this.connectionStopped = !0;
      t.clearTimeout(this.transportTimeoutHandle);
      r.transports._logic.tryAbortStartRequest(this.connection)
    },
    initReceived: function(n, i) {
      var u = this,
        f = u.connection;
      if (u.startRequested) {
        f.log("WARNING! The client received multiple init messages.");
        return
      }
      u.connectionStopped || (u.startRequested = !0, t.clearTimeout(u.transportTimeoutHandle), f.log(n.name + " transport connected. Initiating start request."), r.transports._logic.ajaxStart(f, function() {
        u.startCompleted = !0;
        i()
      }))
    },
    transportFailed: function(i, u, e) {
      var o = this.connection,
        h = o._deferral,
        s;
      this.connectionStopped || (t.clearTimeout(this.transportTimeoutHandle), this.startRequested ? this.startCompleted || (s = r._.error(r.resources.errorDuringStartRequest, u), o.log(i.name + " transport failed during the start request. Stopping the connection."), n(o).triggerHandler(f.onError, [s]), h && h.reject(s), o.stop()) : (i.stop(o), o.log(i.name + " transport failed to connect. Attempting to fall back."), e()))
    }
  };
  u = r.transports._logic = {
    ajax: function(t, i) {
      return n.ajax(n.extend(!0, {}, n.signalR.ajaxDefaults, {
        type: "GET",
        data: {},
        xhrFields: {
          withCredentials: t.withCredentials
        },
        contentType: t.contentType,
        dataType: t.ajaxDataType
      }, i))
    },
    pingServer: function(t) {
      var e, f, i = n.Deferred();
      return t.transport ? (e = t.url + "/ping", e = u.addQs(e, t.qs), f = u.ajax(t, {
        url: e,
        success: function(n) {
          var u;
          try {
            u = t._parseResponse(n)
          } catch (e) {
            i.reject(r._.transportError(r.resources.pingServerFailedParse, t.transport, e, f));
            t.stop();
            return
          }
          u.Response === "pong" ? i.resolve() : i.reject(r._.transportError(r._.format(r.resources.pingServerFailedInvalidResponse, n), t.transport, null, f))
        },
        error: function(n) {
          n.status === 401 || n.status === 403 ? (i.reject(r._.transportError(r._.format(r.resources.pingServerFailedStatusCode, n.status), t.transport, n, f)), t.stop()) : i.reject(r._.transportError(r.resources.pingServerFailed, t.transport, n, f))
        }
      })) : i.reject(r._.transportError(r.resources.noConnectionTransport, t.transport)), i.promise()
    },
    prepareQueryString: function(n, i) {
      var r;
      return r = u.addQs(i, "clientProtocol=" + n.clientProtocol), r = u.addQs(r, n.qs), n.token && (r += "&connectionToken=" + t.encodeURIComponent(n.token)), n.data && (r += "&connectionData=" + t.encodeURIComponent(n.data)), r
    },
    addQs: function(t, i) {
      var r = t.indexOf("?") !== -1 ? "&" : "?",
        u;
      if (!i) return t;
      if (typeof i == "object") return t + r + n.param(i);
      if (typeof i == "string") return u = i.charAt(0), (u === "?" || u === "&") && (r = ""), t + r + i;
      throw new Error("Query string property must be either a string or object.");
    },
    getUrl: function(n, i, r, f, e) {
      var h = i === "webSockets" ? "" : n.baseUrl,
        o = h + n.appRelativeUrl,
        s = "transport=" + i;
      return !e && n.groupsToken && (s += "&groupsToken=" + t.encodeURIComponent(n.groupsToken)), r ? (o += f ? "/poll" : "/reconnect", !e && n.messageId && (s += "&messageId=" + t.encodeURIComponent(n.messageId))) : o += "/connect", o += "?" + s, o = u.prepareQueryString(n, o), e || (o += "&tid=" + Math.floor(Math.random() * 11)), o
    },
    maximizePersistentResponse: function(n) {
      return {
        MessageId: n.C,
        Messages: n.M,
        Initialized: typeof n.S != "undefined" ? !0 : !1,
        ShouldReconnect: typeof n.T != "undefined" ? !0 : !1,
        LongPollDelay: n.L,
        GroupsToken: n.G
      }
    },
    updateGroups: function(n, t) {
      t && (n.groupsToken = t)
    },
    stringifySend: function(n, t) {
      return typeof t == "string" || typeof t == "undefined" || t === null ? t : n.json.stringify(t)
    },
    ajaxSend: function(t, i) {
      var h = u.stringifySend(t, i),
        c = e(t, "/send"),
        o, s = function(t, u) {
          n(u).triggerHandler(f.onError, [r._.transportError(r.resources.sendFailed, u.transport, t, o), i])
        };
      return o = u.ajax(t, {
        url: c,
        type: t.ajaxDataType === "jsonp" ? "GET" : "POST",
        contentType: r._.defaultContentType,
        data: {
          data: h
        },
        success: function(n) {
          var i;
          if (n) {
            try {
              i = t._parseResponse(n)
            } catch (r) {
              s(r, t);
              t.stop();
              return
            }
            u.triggerReceived(t, i)
          }
        },
        error: function(n, i) {
          i !== "abort" && i !== "parsererror" && s(n, t)
        }
      })
    },
    ajaxAbort: function(n, t) {
      if (typeof n.transport != "undefined") {
        t = typeof t == "undefined" ? !0 : t;
        var i = e(n, "/abort");
        u.ajax(n, {
          url: i,
          async: t,
          timeout: 1e3,
          type: "POST"
        });
        n.log("Fired ajax abort async = " + t + ".")
      }
    },
    ajaxStart: function(t, i) {
      var s = function(n) {
          var i = t._deferral;
          i && i.reject(n)
        },
        o = function(i) {
          t.log("The start request failed. Stopping the connection.");
          n(t).triggerHandler(f.onError, [i]);
          s(i);
          t.stop()
        };
      t._.startRequest = u.ajax(t, {
        url: e(t, "/start"),
        success: function(n, u, f) {
          var e;
          try {
            e = t._parseResponse(n)
          } catch (s) {
            o(r._.error(r._.format(r.resources.errorParsingStartResponse, n), s, f));
            return
          }
          e.Response === "started" ? i() : o(r._.error(r._.format(r.resources.invalidStartResponse, n), null, f))
        },
        error: function(n, i, u) {
          i !== h ? o(r._.error(r.resources.errorDuringStartRequest, u, n)) : (t.log("The start request aborted because connection.stop() was called."), s(r._.error(r.resources.stoppedDuringStartRequest, null, n)))
        }
      })
    },
    tryAbortStartRequest: function(n) {
      n._.startRequest && (n._.startRequest.abort(h), delete n._.startRequest)
    },
    tryInitialize: function(n, t, i) {
      t.Initialized && i ? i() : t.Initialized && n.log("WARNING! The client received an init message after reconnecting.")
    },
    triggerReceived: function(t, i) {
      t._.connectingMessageBuffer.tryBuffer(i) || n(t).triggerHandler(f.onReceived, [i])
    },
    processMessages: function(t, i, r) {
      var f;
      u.markLastMessage(t);
      i && (f = u.maximizePersistentResponse(i), u.updateGroups(t, f.GroupsToken), f.MessageId && (t.messageId = f.MessageId), f.Messages && (n.each(f.Messages, function(n, i) {
        u.triggerReceived(t, i)
      }), u.tryInitialize(t, f, r)))
    },
    monitorKeepAlive: function(t) {
      var i = t._.keepAliveData;
      i.monitoring ? t.log("Tried to monitor keep alive but it's already being monitored.") : (i.monitoring = !0, u.markLastMessage(t), t._.keepAliveData.reconnectKeepAliveUpdate = function() {
        u.markLastMessage(t)
      }, n(t).bind(f.onReconnect, t._.keepAliveData.reconnectKeepAliveUpdate), t.log("Now monitoring keep alive with a warning timeout of " + i.timeoutWarning + ", keep alive timeout of " + i.timeout + " and disconnecting timeout of " + t.disconnectTimeout))
    },
    stopMonitoringKeepAlive: function(t) {
      var i = t._.keepAliveData;
      i.monitoring && (i.monitoring = !1, n(t).unbind(f.onReconnect, t._.keepAliveData.reconnectKeepAliveUpdate), t._.keepAliveData = {}, t.log("Stopping the monitoring of the keep alive."))
    },
    startHeartbeat: function(n) {
      n._.lastActiveAt = (new Date).getTime();
      o(n)
    },
    markLastMessage: function(n) {
      n._.lastMessageAt = (new Date).getTime()
    },
    markActive: function(n) {
      return u.verifyLastActive(n) ? (n._.lastActiveAt = (new Date).getTime(), !0) : !1
    },
    isConnectedOrReconnecting: function(n) {
      return n.state === r.connectionState.connected || n.state === r.connectionState.reconnecting
    },
    ensureReconnectingState: function(t) {
      return l(t, r.connectionState.connected, r.connectionState.reconnecting) === !0 && n(t).triggerHandler(f.onReconnecting), t.state === r.connectionState.reconnecting
    },
    clearReconnectTimeout: function(n) {
      n && n._.reconnectTimeout && (t.clearTimeout(n._.reconnectTimeout), delete n._.reconnectTimeout)
    },
    verifyLastActive: function(t) {
      if ((new Date).getTime() - t._.lastActiveAt >= t.reconnectWindow) {
        var i = r._.format(r.resources.reconnectWindowTimeout, new Date(t._.lastActiveAt), t.reconnectWindow);
        return t.log(i), n(t).triggerHandler(f.onError, [r._.error(i, "TimeoutException")]), t.stop(!1, !1), !1
      }
      return !0
    },
    reconnect: function(n, i) {
      var f = r.transports[i];
      if (u.isConnectedOrReconnecting(n) && !n._.reconnectTimeout) {
        if (!u.verifyLastActive(n)) return;
        n._.reconnectTimeout = t.setTimeout(function() {
          u.verifyLastActive(n) && (f.stop(n), u.ensureReconnectingState(n) && (n.log(i + " reconnecting."), f.start(n)))
        }, n.reconnectDelay)
      }
    },
    handleParseFailure: function(t, i, u, e, o) {
      var s = r._.transportError(r._.format(r.resources.parseFailed, i), t.transport, u, o);
      e && e(s) ? t.log("Failed to parse server response while attempting to connect.") : (n(t).triggerHandler(f.onError, [s]), t.stop())
    },
    initHandler: function(n) {
      return new s(n)
    },
    foreverFrame: {
      count: 0,
      connections: {}
    }
  }
}(window.jQuery, window),
function(n, t) {
  var r = n.signalR,
    u = n.signalR.events,
    f = n.signalR.changeState,
    i = r.transports._logic;
  r.transports.webSockets = {
    name: "webSockets",
    supportsKeepAlive: function() {
      return !0
    },
    send: function(t, f) {
      var e = i.stringifySend(t, f);
      try {
        t.socket.send(e)
      } catch (o) {
        n(t).triggerHandler(u.onError, [r._.transportError(r.resources.webSocketsInvalidState, t.transport, o, t.socket), f])
      }
    },
    start: function(e, o, s) {
      var h, c = !1,
        l = this,
        a = !o,
        v = n(e);
      if (!t.WebSocket) {
        s();
        return
      }
      e.socket || (h = e.webSocketServerUrl ? e.webSocketServerUrl : e.wsProtocol + e.host, h += i.getUrl(e, this.name, a), e.log("Connecting to websocket endpoint '" + h + "'."), e.socket = new t.WebSocket(h), e.socket.onopen = function() {
        c = !0;
        e.log("Websocket opened.");
        i.clearReconnectTimeout(e);
        f(e, r.connectionState.reconnecting, r.connectionState.connected) === !0 && v.triggerHandler(u.onReconnect)
      }, e.socket.onclose = function(t) {
        var i;
        this === e.socket && (c && typeof t.wasClean != "undefined" && t.wasClean === !1 ? (i = r._.transportError(r.resources.webSocketClosed, e.transport, t), e.log("Unclean disconnect from websocket: " + (t.reason || "[no reason given]."))) : e.log("Websocket closed."), s && s(i) || (i && n(e).triggerHandler(u.onError, [i]), l.reconnect(e)))
      }, e.socket.onmessage = function(t) {
        var r;
        try {
          r = e._parseResponse(t.data)
        } catch (u) {
          i.handleParseFailure(e, t.data, u, s, t);
          return
        }
        r && (n.isEmptyObject(r) || r.M ? i.processMessages(e, r, o) : i.triggerReceived(e, r))
      })
    },
    reconnect: function(n) {
      i.reconnect(n, this.name)
    },
    lostConnection: function(n) {
      this.reconnect(n)
    },
    stop: function(n) {
      i.clearReconnectTimeout(n);
      n.socket && (n.log("Closing the Websocket."), n.socket.close(), n.socket = null)
    },
    abort: function(n, t) {
      i.ajaxAbort(n, t)
    }
  }
}(window.jQuery, window),
function(n, t) {
  var i = n.signalR,
    u = n.signalR.events,
    e = n.signalR.changeState,
    r = i.transports._logic,
    f = function(n) {
      t.clearTimeout(n._.reconnectAttemptTimeoutHandle);
      delete n._.reconnectAttemptTimeoutHandle
    };
  i.transports.serverSentEvents = {
    name: "serverSentEvents",
    supportsKeepAlive: function() {
      return !0
    },
    timeOut: 3e3,
    start: function(o, s, h) {
      var c = this,
        l = !1,
        a = n(o),
        v = !s,
        y;
      if (o.eventSource && (o.log("The connection already has an event source. Stopping it."), o.stop()), !t.EventSource) {
        h && (o.log("This browser doesn't support SSE."), h());
        return
      }
      y = r.getUrl(o, this.name, v);
      try {
        o.log("Attempting to connect to SSE endpoint '" + y + "'.");
        o.eventSource = new t.EventSource(y, {
          withCredentials: o.withCredentials
        })
      } catch (p) {
        o.log("EventSource failed trying to connect with error " + p.Message + ".");
        h ? h() : (a.triggerHandler(u.onError, [i._.transportError(i.resources.eventSourceFailedToConnect, o.transport, p)]), v && c.reconnect(o));
        return
      }
      v && (o._.reconnectAttemptTimeoutHandle = t.setTimeout(function() {
        l === !1 && o.eventSource.readyState !== t.EventSource.OPEN && c.reconnect(o)
      }, c.timeOut));
      o.eventSource.addEventListener("open", function() {
        o.log("EventSource connected.");
        f(o);
        r.clearReconnectTimeout(o);
        l === !1 && (l = !0, e(o, i.connectionState.reconnecting, i.connectionState.connected) === !0 && a.triggerHandler(u.onReconnect))
      }, !1);
      o.eventSource.addEventListener("message", function(n) {
        var t;
        if (n.data !== "initialized") {
          try {
            t = o._parseResponse(n.data)
          } catch (i) {
            r.handleParseFailure(o, n.data, i, h, n);
            return
          }
          r.processMessages(o, t, s)
        }
      }, !1);
      o.eventSource.addEventListener("error", function(n) {
        var r = i._.transportError(i.resources.eventSourceError, o.transport, n);
        this === o.eventSource && (h && h(r) || (o.log("EventSource readyState: " + o.eventSource.readyState + "."), n.eventPhase === t.EventSource.CLOSED ? (o.log("EventSource reconnecting due to the server connection ending."), c.reconnect(o)) : (o.log("EventSource error."), a.triggerHandler(u.onError, [r]))))
      }, !1)
    },
    reconnect: function(n) {
      r.reconnect(n, this.name)
    },
    lostConnection: function(n) {
      this.reconnect(n)
    },
    send: function(n, t) {
      r.ajaxSend(n, t)
    },
    stop: function(n) {
      f(n);
      r.clearReconnectTimeout(n);
      n && n.eventSource && (n.log("EventSource calling close()."), n.eventSource.close(), n.eventSource = null, delete n.eventSource)
    },
    abort: function(n, t) {
      r.ajaxAbort(n, t)
    }
  }
}(window.jQuery, window),
function(n, t) {
  var r = n.signalR,
    e = n.signalR.events,
    o = n.signalR.changeState,
    i = r.transports._logic,
    u = function() {
      var n = t.document.createElement("iframe");
      return n.setAttribute("style", "position:absolute;top:0;left:0;width:0;height:0;visibility:hidden;"), n
    },
    f = function() {
      var i = null,
        f = 1e3,
        n = 0;
      return {
        prevent: function() {
          r._.ieVersion <= 8 && (n === 0 && (i = t.setInterval(function() {
            var n = u();
            t.document.body.appendChild(n);
            t.document.body.removeChild(n);
            n = null
          }, f)), n++)
        },
        cancel: function() {
          n === 1 && t.clearInterval(i);
          n > 0 && n--
        }
      }
    }();
  r.transports.foreverFrame = {
    name: "foreverFrame",
    supportsKeepAlive: function() {
      return !0
    },
    iframeClearThreshold: 50,
    start: function(n, r, e) {
      var l = this,
        s = i.foreverFrame.count += 1,
        h, o = u(),
        c = function() {
          n.log("Forever frame iframe finished loading and is no longer receiving messages.");
          e && e() || l.reconnect(n)
        };
      if (t.EventSource) {
        e && (n.log("Forever Frame is not supported by SignalR on browsers with SSE support."), e());
        return
      }
      o.setAttribute("data-signalr-connection-id", n.id);
      f.prevent();
      h = i.getUrl(n, this.name);
      h += "&frameId=" + s;
      t.document.documentElement.appendChild(o);
      n.log("Binding to iframe's load event.");
      o.addEventListener ? o.addEventListener("load", c, !1) : o.attachEvent && o.attachEvent("onload", c);
      o.src = h;
      i.foreverFrame.connections[s] = n;
      n.frame = o;
      n.frameId = s;
      r && (n.onSuccess = function() {
        n.log("Iframe transport started.");
        r()
      })
    },
    reconnect: function(n) {
      var r = this;
      i.isConnectedOrReconnecting(n) && i.verifyLastActive(n) && t.setTimeout(function() {
        if (i.verifyLastActive(n) && n.frame && i.ensureReconnectingState(n)) {
          var u = n.frame,
            t = i.getUrl(n, r.name, !0) + "&frameId=" + n.frameId;
          n.log("Updating iframe src to '" + t + "'.");
          u.src = t
        }
      }, n.reconnectDelay)
    },
    lostConnection: function(n) {
      this.reconnect(n)
    },
    send: function(n, t) {
      i.ajaxSend(n, t)
    },
    receive: function(t, u) {
      var f, e, o;
      if (t.json !== t._originalJson && (u = t._originalJson.stringify(u)), o = t._parseResponse(u), i.processMessages(t, o, t.onSuccess), t.state === n.signalR.connectionState.connected && (t.frameMessageCount = (t.frameMessageCount || 0) + 1, t.frameMessageCount > r.transports.foreverFrame.iframeClearThreshold && (t.frameMessageCount = 0, f = t.frame.contentWindow || t.frame.contentDocument, f && f.document && f.document.body)))
        for (e = f.document.body; e.firstChild;) e.removeChild(e.firstChild)
    },
    stop: function(n) {
      var r = null;
      if (f.cancel(), n.frame) {
        if (n.frame.stop) n.frame.stop();
        else try {
          r = n.frame.contentWindow || n.frame.contentDocument;
          r.document && r.document.execCommand && r.document.execCommand("Stop")
        } catch (u) {
          n.log("Error occurred when stopping foreverFrame transport. Message = " + u.message + ".")
        }
        n.frame.parentNode === t.document.documentElement && t.document.documentElement.removeChild(n.frame);
        delete i.foreverFrame.connections[n.frameId];
        n.frame = null;
        n.frameId = null;
        delete n.frame;
        delete n.frameId;
        delete n.onSuccess;
        delete n.frameMessageCount;
        n.log("Stopping forever frame.")
      }
    },
    abort: function(n, t) {
      i.ajaxAbort(n, t)
    },
    getConnection: function(n) {
      return i.foreverFrame.connections[n]
    },
    started: function(t) {
      o(t, r.connectionState.reconnecting, r.connectionState.connected) === !0 && n(t).triggerHandler(e.onReconnect)
    }
  }
}(window.jQuery, window),
function(n, t) {
  var r = n.signalR,
    u = n.signalR.events,
    e = n.signalR.changeState,
    f = n.signalR.isDisconnecting,
    i = r.transports._logic;
  r.transports.longPolling = {
    name: "longPolling",
    supportsKeepAlive: function() {
      return !1
    },
    reconnectDelay: 3e3,
    start: function(o, s, h) {
      var a = this,
        v = function() {
          v = n.noop;
          o.log("LongPolling connected.");
          s ? s() : o.log("WARNING! The client received an init message after reconnecting.")
        },
        y = function(n) {
          return h(n) ? (o.log("LongPolling failed to connect."), !0) : !1
        },
        c = o._,
        l = 0,
        p = function(i) {
          t.clearTimeout(c.reconnectTimeoutId);
          c.reconnectTimeoutId = null;
          e(i, r.connectionState.reconnecting, r.connectionState.connected) === !0 && (i.log("Raising the reconnect event"), n(i).triggerHandler(u.onReconnect))
        },
        w = 36e5;
      o.pollXhr && (o.log("Polling xhr requests already exists, aborting."), o.stop());
      o.messageId = null;
      c.reconnectTimeoutId = null;
      c.pollTimeoutId = t.setTimeout(function() {
        (function e(s, h) {
          var g = s.messageId,
            nt = g === null,
            k = !nt,
            tt = !h,
            d = i.getUrl(s, a.name, k, tt, !0),
            b = {};
          (s.messageId && (b.messageId = s.messageId), s.groupsToken && (b.groupsToken = s.groupsToken), f(s) !== !0) && (o.log("Opening long polling request to '" + d + "'."), s.pollXhr = i.ajax(o, {
            xhrFields: {
              onprogress: function() {
                i.markLastMessage(o)
              }
            },
            url: d,
            type: "POST",
            contentType: r._.defaultContentType,
            data: b,
            timeout: o._.pollTimeout,
            success: function(r) {
              var h, w = 0,
                u, a;
              o.log("Long poll complete.");
              l = 0;
              try {
                h = o._parseResponse(r)
              } catch (b) {
                i.handleParseFailure(s, r, b, y, s.pollXhr);
                return
              }(c.reconnectTimeoutId !== null && p(s), h && (u = i.maximizePersistentResponse(h)), i.processMessages(s, h, v), u && n.type(u.LongPollDelay) === "number" && (w = u.LongPollDelay), f(s) !== !0) && (a = u && u.ShouldReconnect, !a || i.ensureReconnectingState(s)) && (w > 0 ? c.pollTimeoutId = t.setTimeout(function() {
                e(s, a)
              }, w) : e(s, a))
            },
            error: function(f, h) {
              var v = r._.transportError(r.resources.longPollFailed, o.transport, f, s.pollXhr);
              if (t.clearTimeout(c.reconnectTimeoutId), c.reconnectTimeoutId = null, h === "abort") {
                o.log("Aborted xhr request.");
                return
              }
              if (!y(v)) {
                if (l++, o.state !== r.connectionState.reconnecting && (o.log("An error occurred using longPolling. Status = " + h + ".  Response = " + f.responseText + "."), n(s).triggerHandler(u.onError, [v])), (o.state === r.connectionState.connected || o.state === r.connectionState.reconnecting) && !i.verifyLastActive(o)) return;
                if (!i.ensureReconnectingState(s)) return;
                c.pollTimeoutId = t.setTimeout(function() {
                  e(s, !0)
                }, a.reconnectDelay)
              }
            }
          }), k && h === !0 && (c.reconnectTimeoutId = t.setTimeout(function() {
            p(s)
          }, Math.min(1e3 * (Math.pow(2, l) - 1), w))))
        })(o)
      }, 250)
    },
    lostConnection: function(n) {
      n.pollXhr && n.pollXhr.abort("lostConnection")
    },
    send: function(n, t) {
      i.ajaxSend(n, t)
    },
    stop: function(n) {
      t.clearTimeout(n._.pollTimeoutId);
      t.clearTimeout(n._.reconnectTimeoutId);
      delete n._.pollTimeoutId;
      delete n._.reconnectTimeoutId;
      n.pollXhr && (n.pollXhr.abort(), n.pollXhr = null, delete n.pollXhr)
    },
    abort: function(n, t) {
      i.ajaxAbort(n, t)
    }
  }
}(window.jQuery, window),
function(n) {
  function r(n) {
    return n + s
  }

  function e(n, t, i) {
    for (var f = n.length, u = [], r = 0; r < f; r += 1) n.hasOwnProperty(r) && (u[r] = t.call(i, n[r], r, n));
    return u
  }

  function o(t) {
    return n.isFunction(t) ? null : n.type(t) === "undefined" ? null : t
  }

  function u(n) {
    for (var t in n)
      if (n.hasOwnProperty(t)) return !0;
    return !1
  }

  function f(n, t) {
    var i = n._.invocationCallbacks,
      r, f;
    u(i) && n.log("Clearing hub invocation callbacks with error: " + t + ".");
    n._.invocationCallbackId = 0;
    delete n._.invocationCallbacks;
    n._.invocationCallbacks = {};
    for (f in i) r = i[f], r.method.call(r.scope, {
      E: t
    })
  }

  function i(n, t) {
    return new i.fn.init(n, t)
  }

  function t(i, r) {
    var u = {
      qs: null,
      logging: !1,
      useDefaultPath: !0
    };
    return n.extend(u, r), (!i || u.useDefaultPath) && (i = (i || "") + "/signalr"), new t.fn.init(i, u)
  }
  var s = ".hubProxy",
    h = n.signalR;
  i.fn = i.prototype = {
    init: function(n, t) {
      this.state = {};
      this.connection = n;
      this.hubName = t;
      this._ = {
        callbackMap: {}
      }
    },
    constructor: i,
    hasSubscriptions: function() {
      return u(this._.callbackMap)
    },
    on: function(t, i) {
      var u = this,
        f = u._.callbackMap;
      return t = t.toLowerCase(), f[t] || (f[t] = {}), f[t][i] = function(n, t) {
        i.apply(u, t)
      }, n(u).bind(r(t), f[t][i]), u
    },
    off: function(t, i) {
      var e = this,
        o = e._.callbackMap,
        f;
      return t = t.toLowerCase(), f = o[t], f && (f[i] ? (n(e).unbind(r(t), f[i]), delete f[i], u(f) || delete o[t]) : i || (n(e).unbind(r(t)), delete o[t])), e
    },
    invoke: function(t) {
      var i = this,
        r = i.connection,
        s = n.makeArray(arguments).slice(1),
        c = e(s, o),
        f = {
          H: i.hubName,
          M: t,
          A: c,
          I: r._.invocationCallbackId
        },
        u = n.Deferred(),
        l = function(f) {
          var e = i._maximizeHubResponse(f),
            s, o;
          n.extend(i.state, e.State);
          e.Progress ? u.notifyWith ? u.notifyWith(i, [e.Progress.Data]) : r._.progressjQueryVersionLogged || (r.log("A hub method invocation progress update was received but the version of jQuery in use (" + n.prototype.jquery + ") does not support progress updates. Upgrade to jQuery 1.7+ to receive progress notifications."), r._.progressjQueryVersionLogged = !0) : e.Error ? (e.StackTrace && r.log(e.Error + "\n" + e.StackTrace + "."), s = e.IsHubException ? "HubException" : "Exception", o = h._.error(e.Error, s), o.data = e.ErrorData, r.log(i.hubName + "." + t + " failed to execute. Error: " + o.message), u.rejectWith(i, [o])) : (r.log("Invoked " + i.hubName + "." + t), u.resolveWith(i, [e.Result]))
        };
      return r._.invocationCallbacks[r._.invocationCallbackId.toString()] = {
        scope: i,
        method: l
      }, r._.invocationCallbackId += 1, n.isEmptyObject(i.state) || (f.S = i.state), r.log("Invoking " + i.hubName + "." + t), r.send(f), u.promise()
    },
    _maximizeHubResponse: function(n) {
      return {
        State: n.S,
        Result: n.R,
        Progress: n.P ? {
          Id: n.P.I,
          Data: n.P.D
        } : null,
        Id: n.I,
        IsHubException: n.H,
        Error: n.E,
        StackTrace: n.T,
        ErrorData: n.D
      }
    }
  };
  i.fn.init.prototype = i.fn;
  t.fn = t.prototype = n.connection();
  t.fn.init = function(t, i) {
    var e = {
        qs: null,
        logging: !1,
        useDefaultPath: !0
      },
      u = this;
    n.extend(e, i);
    n.signalR.fn.init.call(u, t, e.qs, e.logging);
    u.proxies = {};
    u._.invocationCallbackId = 0;
    u._.invocationCallbacks = {};
    u.received(function(t) {
      var f, o, e, i, s, h;
      t && (typeof t.P != "undefined" ? (e = t.P.I.toString(), i = u._.invocationCallbacks[e], i && i.method.call(i.scope, t)) : typeof t.I != "undefined" ? (e = t.I.toString(), i = u._.invocationCallbacks[e], i && (u._.invocationCallbacks[e] = null, delete u._.invocationCallbacks[e], i.method.call(i.scope, t))) : (f = this._maximizeClientHubInvocation(t), u.log("Triggering client hub event '" + f.Method + "' on hub '" + f.Hub + "'."), s = f.Hub.toLowerCase(), h = f.Method.toLowerCase(), o = this.proxies[s], n.extend(o.state, f.State), n(o).triggerHandler(r(h), [f.Args])))
    });
    u.error(function(n, t) {
      var i, r;
      t && (i = t.I, r = u._.invocationCallbacks[i], r && (u._.invocationCallbacks[i] = null, delete u._.invocationCallbacks[i], r.method.call(r.scope, {
        E: n
      })))
    });
    u.reconnecting(function() {
      u.transport && u.transport.name === "webSockets" && f(u, "Connection started reconnecting before invocation result was received.")
    });
    u.disconnected(function() {
      f(u, "Connection was disconnected before invocation result was received.")
    })
  };
  t.fn._maximizeClientHubInvocation = function(n) {
    return {
      Hub: n.H,
      Method: n.M,
      Args: n.A,
      State: n.S
    }
  };
  t.fn._registerSubscribedHubs = function() {
    var t = this;
    t._subscribedToHubs || (t._subscribedToHubs = !0, t.starting(function() {
      var i = [];
      n.each(t.proxies, function(n) {
        this.hasSubscriptions() && (i.push({
          name: n
        }), t.log("Client subscribed to hub '" + n + "'."))
      });
      i.length === 0 && t.log("No hubs have been subscribed to.  The client will not receive data from hubs.  To fix, declare at least one client side function prior to connection start for each hub you wish to subscribe to.");
      t.data = t.json.stringify(i)
    }))
  };
  t.fn.createHubProxy = function(n) {
    n = n.toLowerCase();
    var t = this.proxies[n];
    return t || (t = i(this, n), this.proxies[n] = t), this._registerSubscribedHubs(), t
  };
  t.fn.init.prototype = t.fn;
  n.hubConnection = t
}(window.jQuery, window),
function(n) {
  n.signalR.version = "2.3.0"
}(window.jQuery);
firstBy = function() {
  function t(n) {
    return n
  }

  function i(n) {
    return typeof n == "string" ? n.toLowerCase() : n
  }

  function r(n, r) {
    var u;
    if (r = typeof r == "number" ? {
        direction: r
      } : r || {}, typeof n != "function" && (u = n, n = function(n) {
        return !n[u] ? "" : n[u]
      }), n.length === 1) {
      var f = n,
        e = r.ignoreCase ? i : t,
        o = r.cmp || function(n, t) {
          return n < t ? -1 : n > t ? 1 : 0
        };
      n = function(n, t) {
        return o(e(f(n)), e(f(t)))
      }
    }
    return r.direction === -1 ? function(t, i) {
      return -n(t, i)
    } : n
  }

  function n(t, i) {
    var u = typeof this == "function" && !this.firstBy ? this : !1,
      f = r(t, i),
      e = u ? function(n, t) {
        return u(n, t) || f(n, t)
      } : f;
    return e.thenBy = n, e
  }
  return n.firstBy = n, n
}()
