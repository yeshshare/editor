/*! grapesjs-aviary - 0.1.2 */ ! function(e, n) { "object" == typeof exports && "object" == typeof module ? module.exports = n(require("grapesjs")) : "function" == typeof define && define.amd ? define(["grapesjs"], n) : "object" == typeof exports ? exports["grapesjs-aviary"] = n(require("grapesjs")) : e["grapesjs-aviary"] = n(e.grapesjs) }(this, function(e) { return function(e) {
        function n(r) { if (t[r]) return t[r].exports; var o = t[r] = { i: r, l: !1, exports: {} }; return e[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports } var t = {}; return n.m = e, n.c = t, n.d = function(e, t, r) { n.o(e, t) || Object.defineProperty(e, t, { configurable: !1, enumerable: !0, get: r }) }, n.n = function(e) { var t = e && e.__esModule ? function() { return e.default } : function() { return e }; return n.d(t, "a", t), t }, n.o = function(e, n) { return Object.prototype.hasOwnProperty.call(e, n) }, n.p = "", n(n.s = 0) }([function(e, n, t) { "use strict";
        Object.defineProperty(n, "__esModule", { value: !0 }); var r = t(1),
            o = function(e) { return e && e.__esModule ? e : { default: e } }(r);
        n.default = o.default.plugins.add("gjs-aviary", function(e) { var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                t = n,
                r = e.getModel(),
                o = void 0,
                a = { key: "1", onApply: null, getFilename: null, closeOnApply: !0, config: {} }; for (var i in a) i in t || (t[i] = a[i]); var u = t.config;
            u.apiKey = t.key, u.onSave = function(e, n) { o.set("src", n); var r = "function" == typeof t.getFilename ? t.getFilename : l,
                    a = r(o);
                ("function" == typeof t.onApply ? t.onApply : p)(n, a, o), t.closeOnApply && c.close() }; var c = new Aviary.Feather(u),
                s = e.Commands,
                l = function(e) { var n = e.get("src").split("/").pop(); return Date.now() + "_" + n.slice(-15) },
                p = function(n, t) { e.AssetManager.add({ src: n, name: t }) },
                f = document.createElement("img");
            s.add("image-editor", { run: function(e, n, t) { var a = t || {},
                        i = a.model || e.getSelected();
                    o = i, f.src = i.get("src"), c.launch({ image: f }), r.trigger("gjs-aviary:launch", i, c) } }) }) }, function(n, t) { n.exports = e }]) });