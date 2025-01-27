/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./frontend-js/modules/deleteItem.js":
/*!*******************************************!*\
  !*** ./frontend-js/modules/deleteItem.js ***!
  \*******************************************/
/***/ (() => {

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.delete-btn').forEach(function (icon) {
    icon.addEventListener('click', /*#__PURE__*/function () {
      var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(event) {
        var id, deleteRoute, response, result;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              id = event.currentTarget.dataset.id;
              console.log("DeleteItem Called, Delete ID: ".concat(id));
              deleteRoute = event.target.dataset.route; // Get the route from a data attribute
              console.log("delete route = ", deleteRoute);
              if (!confirm('Are you sure you want to delete this item?')) {
                _context.next = 20;
                break;
              }
              _context.prev = 5;
              _context.next = 8;
              return fetch("".concat(deleteRoute, "/").concat(id), {
                method: 'DELETE',
                headers: {
                  'Content-Type': 'application/json'
                }
              });
            case 8:
              response = _context.sent;
              _context.next = 11;
              return response.json();
            case 11:
              result = _context.sent;
              console.log(result);
              if (result.success) {
                // alert('Item deleted successfully.');
                location.reload(); // Reload the page to update the list
              } else {
                alert(result.message || 'Failed to delete item.');
              }
              _context.next = 20;
              break;
            case 16:
              _context.prev = 16;
              _context.t0 = _context["catch"](5);
              alert('An unexpected error occurred.');
              console.error(_context.t0);
            case 20:
            case "end":
              return _context.stop();
          }
        }, _callee, null, [[5, 16]]);
      }));
      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());
  });
});

/***/ }),

/***/ "./frontend-js/modules/deletePerson.js":
/*!*********************************************!*\
  !*** ./frontend-js/modules/deletePerson.js ***!
  \*********************************************/
/***/ (() => {

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.delete-person-btn').forEach(function (icon) {
    icon.addEventListener('click', /*#__PURE__*/function () {
      var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(event) {
        var personId, companyId, deleteRoute, response, result;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              personId = event.currentTarget.dataset.id;
              companyId = event.currentTarget.dataset.companyId;
              deleteRoute = event.currentTarget.dataset.route;
              if (!(!personId || !companyId || !deleteRoute)) {
                _context.next = 6;
                break;
              }
              console.error('Missing required data attributes.');
              return _context.abrupt("return");
            case 6:
              if (!confirm('Are you sure you want to delete this person?')) {
                _context.next = 21;
                break;
              }
              _context.prev = 7;
              _context.next = 10;
              return fetch("".concat(deleteRoute, "/").concat(companyId, "/people/delete/").concat(personId), {
                method: 'DELETE',
                headers: {
                  'Content-Type': 'application/json'
                }
              });
            case 10:
              response = _context.sent;
              _context.next = 13;
              return response.json();
            case 13:
              result = _context.sent;
              if (result.success) {
                location.reload();
              } else {
                alert(result.message || 'Failed to delete the person.');
              }
              _context.next = 21;
              break;
            case 17:
              _context.prev = 17;
              _context.t0 = _context["catch"](7);
              alert('An unexpected error occurred.');
              console.error(_context.t0);
            case 21:
            case "end":
              return _context.stop();
          }
        }, _callee, null, [[7, 17]]);
      }));
      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());
  });
});

/***/ }),

/***/ "./frontend-js/modules/drag-n-drop.js":
/*!********************************************!*\
  !*** ./frontend-js/modules/drag-n-drop.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   drawSavedImage: () => (/* binding */ drawSavedImage),
/* harmony export */   getImg: () => (/* binding */ getImg),
/* harmony export */   previewFile: () => (/* binding */ previewFile)
/* harmony export */ });
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
// Global variables
var debugCounter = 0;
var img = null;
var cropWidth, cropHeight, cropX, cropY;
var ctx = null;
var canvasContainer = document.querySelector('.canvas-container');
var canvas = document.getElementById('canvas');
var deleteBtn = document.querySelector('.delete');
var dropArea = document.querySelector('.drop-area');
var formContainer = document.querySelector('.form-container');
var fileInput = document.querySelector('.file-element');
var fileSelect = document.querySelector('.file-select');
var imgPreview = document.getElementById('buildingLogoPreview');
// * Declare variables for image and cropping functionality
var isDragging = false;
var isResizing = false;
var startX, startY;
var resizeDirection = '';
var handleSize = 10; // Size of the resize handles

// Function to return the current image
function getImg() {
  return img; // Returns the current image object
}
// Function to draw image to be saved on new canvas
function drawSavedImage() {
  if (!img) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    return null;
  }
  // Create a new canvas to draw the cropped portion of the image (without the outline or overlay)
  var croppedCanvas = document.createElement('canvas');
  var croppedCtx = croppedCanvas.getContext('2d');

  // Set the size of the new canvas to the crop box size
  croppedCanvas.width = cropWidth;
  croppedCanvas.height = cropHeight;

  // Calculate the scaling ratio between the original image and canvas
  var scaleX = img.width / canvas.width;
  var scaleY = img.height / canvas.height;

  // Calculate the exact position and size of the crop area from the original image
  var sourceX = cropX * scaleX;
  var sourceY = cropY * scaleY;
  var sourceWidth = cropWidth * scaleX;
  var sourceHeight = cropHeight * scaleY;

  // Draw the cropped portion of the original image onto the new canvas
  croppedCtx.drawImage(img, sourceX, sourceY, sourceWidth, sourceHeight, 0, 0, cropWidth, cropHeight);
  return croppedCanvas;
}

// Delete image logic
deleteBtn.addEventListener('click', function () {
  try {
    deleteBtn.classList.add('hidden');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    formContainer.classList.remove('hidden');
    img = undefined;
    cropX = cropY = cropWidth = cropHeight = 0;
    console.log("Image deleted.");
  } catch (error) {
    console.error("Error during image deletion:", error.message);
    alert("An error occurred while deleting the image. Please try again.");
  }
});
function previewFile(file) {
  deleteBtn.classList.remove('hidden');
  canvasContainer.classList.remove('hidden');
  formContainer.classList.add('hidden');
  console.log("File =", file);
  img = new Image();
  img.src = URL.createObjectURL(file);
  console.log("img.src = ", img.src);
  img.onload = function () {
    var originalAspectRatio = img.width / img.height;

    // Get the container's width
    var containerWidth = canvasContainer.offsetWidth;

    // Set canvas dimensions based on container width while maintaining aspect ratio
    var canvasWidth = containerWidth;
    var canvasHeight = canvasWidth / originalAspectRatio;
    canvas.width = canvasWidth;
    canvas.height = canvasHeight;

    // Center the crop box
    cropWidth = canvasWidth;
    cropHeight = cropWidth / originalAspectRatio; // Keep aspect ratio
    cropX = (canvas.width - cropWidth) / 2;
    cropY = (canvas.height - cropHeight) / 2;

    // Draw image and crop box
    drawCanvas();
  };
}
// Make sure this is an image file (file type) and if valid show inside div/hide form
function handleFiles(files) {
  var file = files[0];
  if (file && file.type.startsWith('image/')) {
    if (file.type === 'image/svg+xml') {
      fixSvgDim(file);
    }
    previewFile(file); // Use your existing logic for other image types
  } else {
    alert('Please upload a valid image file.');
    fileInput.value = ''; // Reset the input so the user can try again
  }
}
function drawCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Draw the image
  ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

  // Draw overlay and crop box
  ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
  ctx.fillRect(0, 0, canvas.width, cropY);
  ctx.fillRect(0, cropY + cropHeight, canvas.width, canvas.height - cropY - cropHeight);
  ctx.fillRect(0, cropY, cropX, cropHeight);
  ctx.fillRect(cropX + cropWidth, cropY, canvas.width - cropX - cropWidth, cropHeight);

  // Draw the crop box outline
  ctx.strokeStyle = '#ff0000';
  ctx.lineWidth = 2;
  ctx.strokeRect(cropX, cropY, cropWidth, cropHeight);

  // Draw resize handles
  ctx.fillStyle = '#ff0000'; // Red color for handles
  drawHandle(cropX, cropY); // Top-left
  drawHandle(cropX + cropWidth, cropY); // Top-right
  drawHandle(cropX, cropY + cropHeight); // Bottom-left
  drawHandle(cropX + cropWidth, cropY + cropHeight); // Bottom-right
}
function fixSvgDim(file) {
  var reader = new FileReader();
  reader.onload = function (event) {
    var svgText = event.target.result;

    // Parse the SVG as an XML document
    var parser = new DOMParser();
    var svgDoc = parser.parseFromString(svgText, "image/svg+xml");
    var svgElement = svgDoc.documentElement;

    // Check if the width attribute is missing
    if (!svgElement.hasAttribute("width")) {
      var viewBox = svgElement.getAttribute("viewBox");
      if (viewBox) {
        // Extract the width from the viewBox (e.g., "0 0 512 512")
        var viewBoxValues = viewBox.split(" ").map(Number);
        if (viewBoxValues.length === 4) {
          var _viewBoxValues = _slicedToArray(viewBoxValues, 3),
            viewBoxWidth = _viewBoxValues[2];

          // Set the width attribute using the viewBox width
          svgElement.setAttribute("width", "".concat(viewBoxWidth, "px"));
        } else {
          console.error("Invalid viewBox format.");
        }
      } else {
        console.error("SVG is missing both width and viewBox attributes.");
      }
    }

    // Serialize the modified SVG back to a string
    var serializer = new XMLSerializer();
    var modifiedSvg = serializer.serializeToString(svgElement);

    // Create a new Blob and URL
    var blob = new Blob([modifiedSvg], {
      type: "image/svg+xml"
    });

    // Create a new File object with the updated Blob
    var updatedFile = new File([blob], file.name, {
      type: file.type
    });

    // Pass the updatedFile to further processing (e.g., preview or other functions)
    previewFile(updatedFile);
  };
  reader.onerror = function (error) {
    console.error("Error reading the file:", error);
  };

  // Read the SVG file as text
  reader.readAsText(file);
}
function drawHandle(x, y) {
  ctx.fillRect(x - handleSize / 2, y - handleSize / 2, handleSize, handleSize);
}

// Function to resize the crop box
function resizeCropBox(mouseX, mouseY) {
  if (resizeDirection === 'top-left') {
    cropWidth += cropX - mouseX;
    cropHeight += cropY - mouseY;
    cropX = mouseX;
    cropY = mouseY;
  } else if (resizeDirection === 'top-right') {
    cropWidth = mouseX - cropX;
    cropHeight += cropY - mouseY;
    cropY = mouseY;
  } else if (resizeDirection === 'bottom-left') {
    cropWidth += cropX - mouseX;
    cropX = mouseX;
    cropHeight = mouseY - cropY;
  } else if (resizeDirection === 'bottom-right') {
    cropWidth = mouseX - cropX;
    cropHeight = mouseY - cropY;
  }

  // Ensure the crop box doesn't shrink below a minimum size
  cropWidth = Math.max(handleSize, cropWidth);
  cropHeight = Math.max(handleSize, cropHeight);
}

document.addEventListener('DOMContentLoaded', function () {
  try {
    initializeDragAndDrop();
  } catch (error) {
    console.error("Initialization error:", error.message);
    alert("An error occurred while initializing the drag-and-drop functionality. Please reload the page.");
  }
});
function initializeDragAndDrop() {
  localStorage.setItem('editFlag', 'c');

  // Expose handleFiles globally
  window.handleFiles = handleFiles;
  console.log("Drag-n-Drop Executed");

  // Check required elements and report missing ones
  var requiredElements = [{
    element: dropArea,
    name: "Drop Area (.drop-area)"
  }, {
    element: formContainer,
    name: "Form Container (.form-container)"
  }, {
    element: fileInput,
    name: "File Input (.file-element)"
  }, {
    element: fileSelect,
    name: "File Select (.file-select)"
  }, {
    element: deleteBtn,
    name: "Delete Button (.delete)"
  }, {
    element: canvasContainer,
    name: "Canvas Container (.canvas-container)"
  }];
  var missingElements = requiredElements.filter(function (item) {
    return !item.element;
  });
  if (missingElements.length > 0) {
    var missingNames = missingElements.map(function (item) {
      return item.name;
    }).join(", ");
    throw new Error("Missing required DOM elements: ".concat(missingNames));
  }

  // Initialize the canvas if it exists
  if (canvas) {
    ctx = canvas.getContext('2d');
    if (!ctx) {
      throw new Error("Failed to get 2D context from canvas.");
    }
  } else {
    console.warn("Canvas element is not present in the DOM. Skipping canvas setup.");
  }
  // Load the preview image if it exists
  if (imgPreview) {
    img = new Image();
    img.src = imgPreview.src;
    img.onload = function () {
      try {
        // Set up the canvas
        // canvas.id = 'canvas';
        canvas.classList.add('canvas');
        canvas.width = img.width;
        canvas.height = img.height;

        // Replace the <img> with the canvas
        canvasContainer.replaceChild(canvas, imgPreview);

        // Draw the image on the canvas
        ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

        // Initialize cropping functionality
        initializeCrop(canvas, ctx, img);
      } catch (error) {
        console.error("Error loading image:", error.message);
        alert("Failed to load the image. Please try again.");
      }
    };
    img.onerror = function () {
      console.error("Image failed to load:");
      alert("The image could not be loaded. Please check the file format.");
    };
  } else if (canvas) {
    // If no image exists, ensure the canvas is set up
    ctx = canvas.getContext('2d');
  }

  // Set up drag-and-drop events
  if (dropArea) {
    // Prevent default browser behavior for drag and drop
    ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(function (eventName) {
      dropArea.addEventListener(eventName, preventDefaults, false);
    });
    // Highlight drop area when file is dragged over
    ['dragenter', 'dragover'].forEach(function (eventName) {
      dropArea.addEventListener(eventName, function () {
        return dropArea.classList.add('highlight');
      }, false);
    });
    // Remove highlight when file is dragged away or dropped
    ['dragleave', 'drop'].forEach(function (eventName) {
      dropArea.addEventListener(eventName, function () {
        return dropArea.classList.remove('highlight');
      }, false);
    });
    // Handle drag and dropped files (uses Drag and Drop API)
    dropArea.addEventListener('drop', function (e) {
      try {
        var dt = e.dataTransfer;
        var files = dt.files;
        handleFiles(files);
      } catch (error) {
        console.error("Error handling file drop:", error.message);
        alert("An error occurred while handling the dropped files. Please try again.");
      }
    });
  }

  // File selection logic
  if (fileSelect) {
    fileSelect.addEventListener('click', function () {
      fileInput.click();
    });
  }

  // File input change event
  if (fileInput) {
    debugCounter++;
    console.log("File Input", fileInput, debugCounter);
    fileInput.addEventListener('change', function (e) {
      var files = e.target.files;
      if (files.length) handleFiles(files);
    });
  }

  // Mouse move event for resizing or dragging
  canvas.addEventListener('mousemove', function (e) {
    try {
      // const mouseX = e.offsetX;
      // const mouseY = e.offsetY;

      // if (isResizing) {
      //     resizeCropBox(mouseX, mouseY);
      //     drawCanvas();
      //     return;
      // }

      // if (isDragging) {
      //     cropX = e.offsetX - startX;
      //     cropY = e.offsetY - startY;
      //     cropX = Math.max(0, Math.min(cropX, canvas.width - cropWidth));
      //     cropY = Math.max(0, Math.min(cropY, canvas.height - cropHeight));
      //     drawCanvas();
      var mouseX = e.offsetX;
      var mouseY = e.offsetY;
      if (isResizing) {
        resizeCropBox(mouseX, mouseY);
        drawCanvas();
        return;
      }

      // Check if inside the crop box (change to grab cursor)
      if (mouseX > cropX && mouseX < cropX + cropWidth && mouseY > cropY && mouseY < cropY + cropHeight) {
        canvas.style.cursor = 'grab'; // Change cursor to grab inside the crop box
      } else {
        canvas.style.cursor = 'default'; // Reset cursor outside the crop box
      }

      // Check if near any of the crop box edges or corners
      if (mouseX > cropX - handleSize && mouseX < cropX + handleSize && mouseY > cropY - handleSize && mouseY < cropY + handleSize) {
        // Top-left corner
        canvas.style.cursor = 'nwse-resize';
        resizeDirection = 'top-left';
      } else if (mouseX > cropX + cropWidth - handleSize && mouseX < cropX + cropWidth + handleSize && mouseY > cropY - handleSize && mouseY < cropY + handleSize) {
        // Top-right corner
        canvas.style.cursor = 'nesw-resize';
        resizeDirection = 'top-right';
      } else if (mouseX > cropX - handleSize && mouseX < cropX + handleSize && mouseY > cropY + cropHeight - handleSize && mouseY < cropY + cropHeight + handleSize) {
        // Bottom-left corner
        canvas.style.cursor = 'nesw-resize';
        resizeDirection = 'bottom-left';
      } else if (mouseX > cropX + cropWidth - handleSize && mouseX < cropX + cropWidth + handleSize && mouseY > cropY + cropHeight - handleSize && mouseY < cropY + cropHeight + handleSize) {
        // Bottom-right corner
        canvas.style.cursor = 'nwse-resize';
        resizeDirection = 'bottom-right';
      } else {
        resizeDirection = '';
      }

      // Handle dragging logic if isDragging is true
      if (isDragging) {
        cropX = e.offsetX - startX;
        cropY = e.offsetY - startY;

        // Prevent the crop box from going out of bounds
        cropX = Math.max(0, Math.min(cropX, canvas.width - cropWidth));
        cropY = Math.max(0, Math.min(cropY, canvas.height - cropHeight));
        drawCanvas();
      }
    } catch (error) {
      console.error("Error in mousemove event:", error.message);
    }
  });

  // Mouse down event: Start dragging or resizing
  canvas.addEventListener('mousedown', function (e) {
    try {
      var mouseX = e.offsetX;
      var mouseY = e.offsetY;
      if (resizeDirection) {
        isResizing = true;
      } else if (mouseX > cropX && mouseX < cropX + cropWidth && mouseY > cropY && mouseY < cropY + cropHeight) {
        isDragging = true;
        startX = mouseX - cropX;
        startY = mouseY - cropY;
      }
    } catch (error) {
      console.error("Error in mousedown event:", error.message);
      alert("An error occurred while starting the interaction. Please try again.");
    }
  });

  // Mouse up event: Stop dragging or resizing
  canvas.addEventListener('mouseup', function () {
    try {
      isDragging = false;
      isResizing = false;
      canvas.style.cursor = 'default';
      resizeDirection = '';
    } catch (error) {
      console.error("Error in mouseup event:", error.message);
      alert("An error occurred while ending the interaction. Please try again.");
    }
  });
  function preventDefaults(e) {
    e.preventDefault();
    e.stopPropagation();
  }
}

/***/ }),

/***/ "./frontend-js/modules/editCompany.js":
/*!********************************************!*\
  !*** ./frontend-js/modules/editCompany.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _drag_n_drop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./drag-n-drop */ "./frontend-js/modules/drag-n-drop.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }

document.querySelectorAll('.editCompany').forEach(function (icon) {
  icon.addEventListener('click', /*#__PURE__*/function () {
    var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(event) {
      var Id, createCompanyButton, addCompanySection, companyForm, formHeading, deleteIcon, parent, response, result, _result$data, name, intro, image, img;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            Id = event.target.dataset.id;
            if (!confirm('Do you want to edit this company information?')) {
              _context2.next = 29;
              break;
            }
            createCompanyButton = document.getElementsByClassName('create-company-btn')[0];
            addCompanySection = document.getElementById('add-company-section');
            companyForm = document.getElementById('companyForm');
            formHeading = document.getElementById('form-heading');
            deleteIcon = document.getElementsByClassName('delete-image-btn')[0]; // Store the Id and editFlag in localStorage
            localStorage.setItem('editId', Id);
            localStorage.setItem('editFlag', 'e');

            // Modify form for edit
            formHeading.innerHTML = '<h2>Edit Company Information</h2>';
            // Get the delete button parent element
            if (deleteIcon) {
              parent = deleteIcon.parentElement;
              if (parent) {
                // Replace the current content with a new element
                parent.innerHTML = "<i class=\"delete-image-btn fa fa-pencil-square-o\" aria-hidden=\"true\"></i>";
              }
            }
            addCompanySection.classList.remove('d-none');
            createCompanyButton.classList.add('d-none');

            // Retrieve company record from database
            _context2.prev = 13;
            _context2.next = 16;
            return fetch("/admin/companies/edit/".concat(Id));
          case 16:
            response = _context2.sent;
            console.log("editCompany.js response = ", response);
            _context2.next = 20;
            return response.json();
          case 20:
            result = _context2.sent;
            console.log("result = ", result);
            if (result.success) {
              _result$data = result.data, name = _result$data.name, intro = _result$data.intro, image = _result$data.image;
              companyForm.elements['companyName'].value = name;
              companyForm.elements['introText'].value = intro;

              // Preload image into the canvas
              if (image) {
                img = new Image();
                img.src = image; // Assuming `image` contains the Base64 or URL
                // img.onload = async function () {
                //     // Fetch the image data
                //     const response = await fetch(img.src);
                //     const blob = await response.blob(); // Convert to Blob

                //     // Create a File object from the Blob if needed
                //     const file = new File([blob], "uploadedImage.jpg", { type: blob.type });

                //     // Call the previewFile function with the File
                //     previewFile(file);
                // };
                img.onload = /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
                  var _response, blob, file;
                  return _regeneratorRuntime().wrap(function _callee$(_context) {
                    while (1) switch (_context.prev = _context.next) {
                      case 0:
                        _context.prev = 0;
                        _context.next = 3;
                        return fetch(img.src);
                      case 3:
                        _response = _context.sent;
                        if (_response.ok) {
                          _context.next = 6;
                          break;
                        }
                        throw new Error("Failed to fetch image. Status: ".concat(_response.status));
                      case 6:
                        _context.next = 8;
                        return _response.blob();
                      case 8:
                        blob = _context.sent;
                        // Convert to Blob
                        // Create a File object from the Blob if needed
                        file = new File([blob], "uploadedImage.jpg", {
                          type: blob.type
                        }); // Call the previewFile function with the File
                        (0,_drag_n_drop__WEBPACK_IMPORTED_MODULE_0__.previewFile)(file);
                        _context.next = 17;
                        break;
                      case 13:
                        _context.prev = 13;
                        _context.t0 = _context["catch"](0);
                        // Handle the error (e.g., log it or show an alert)
                        console.error('Error loading image:', _context.t0.message);
                        alert('There was an error processing the image. Please try again.');
                      case 17:
                      case "end":
                        return _context.stop();
                    }
                  }, _callee, null, [[0, 13]]);
                }));
              }
            } else {
              alert(result.message || 'Failed to fetch company information.');
            }
            _context2.next = 29;
            break;
          case 25:
            _context2.prev = 25;
            _context2.t0 = _context2["catch"](13);
            alert('An unexpected error occurred.');
            console.error(_context2.t0);
          case 29:
          case "end":
            return _context2.stop();
        }
      }, _callee2, null, [[13, 25]]);
    }));
    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }());
});

/***/ }),

/***/ "./frontend-js/modules/editPerson.js":
/*!*******************************************!*\
  !*** ./frontend-js/modules/editPerson.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _drag_n_drop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./drag-n-drop */ "./frontend-js/modules/drag-n-drop.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }

document.querySelectorAll('.editPerson').forEach(function (icon) {
  icon.addEventListener('click', /*#__PURE__*/function () {
    var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(event) {
      var personId, companyId, editRoute, createPersonButton, addPersonSection, personForm, formHeading, deleteIcon, parent, response, result, name, title, reply, mobile, email, outlet, image, img;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            personId = event.currentTarget.dataset.id;
            companyId = event.currentTarget.dataset.companyId;
            editRoute = event.currentTarget.dataset.route;
            if (!confirm("Do you want to edit this person's information?")) {
              _context2.next = 33;
              break;
            }
            createPersonButton = document.getElementsByClassName('create-person-btn')[0];
            addPersonSection = document.getElementById('add-person-section');
            personForm = document.getElementById('personForm');
            formHeading = document.getElementById('person-form-heading');
            deleteIcon = document.getElementsByClassName('delete-image-btn')[0]; // Store the Ids and editFlag in localStorage
            localStorage.setItem('editId', companyId);
            localStorage.setItem('personId', personId);
            localStorage.setItem('editFlag', 'e');

            // Modify form for edit
            formHeading.innerHTML = "<h2>Edit Staff Member's Information</h2>";
            // Get the delete button parent element
            if (deleteIcon) {
              parent = deleteIcon.parentElement;
              if (parent) {
                // Replace the current content with a new element
                parent.innerHTML = "<i class=\"delete-image-btn fa fa-pencil-square-o\" aria-hidden=\"true\"></i>";
              }
            }
            addPersonSection.classList.remove('d-none');
            createPersonButton.classList.add('d-none');
            _context2.prev = 16;
            _context2.next = 19;
            return fetch("".concat(editRoute, "/").concat(companyId, "/people/edit/").concat(personId));
          case 19:
            response = _context2.sent;
            _context2.next = 22;
            return response.json();
          case 22:
            result = _context2.sent;
            console.log("Full result: ", result);
            console.log("result.data: ", result.data);
            if (result.success) {
              console.log("Keys in result.data:", Object.keys(result.data));
            }
            if (result.success) {
              name = result.data.name;
              title = result.data.title;
              reply = result.data.reply;
              mobile = result.data.mobile;
              email = result.data.email;
              outlet = result.data.outlet;
              image = result.data.image;
              personForm.elements['personName'].value = name;
              personForm.elements['personTitle'].value = title;
              personForm.elements['replyText'].value = reply;
              personForm.elements['mobile'].value = mobile;
              personForm.elements['email'].value = email;
              personForm.elements['outlet'].value = outlet;

              // Preload image into the canvas
              if (image) {
                img = new Image();
                img.src = image; // Assuming `image` contains the Base64 or URL
                img.onload = /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
                  var response, blob, file;
                  return _regeneratorRuntime().wrap(function _callee$(_context) {
                    while (1) switch (_context.prev = _context.next) {
                      case 0:
                        _context.next = 2;
                        return fetch(img.src);
                      case 2:
                        response = _context.sent;
                        _context.next = 5;
                        return response.blob();
                      case 5:
                        blob = _context.sent;
                        // Convert to Blob
                        // Create a File object from the Blob if needed
                        file = new File([blob], "uploadedImage.jpg", {
                          type: blob.type
                        }); // Call the previewFile function with the File
                        (0,_drag_n_drop__WEBPACK_IMPORTED_MODULE_0__.previewFile)(file);
                      case 8:
                      case "end":
                        return _context.stop();
                    }
                  }, _callee);
                }));
              }
            } else {
              alert(result.message || "Failed to fetch person's information.");
            }
            _context2.next = 33;
            break;
          case 29:
            _context2.prev = 29;
            _context2.t0 = _context2["catch"](16);
            alert('An unexpected error occurred.');
            console.error(_context2.t0);
          case 33:
          case "end":
            return _context2.stop();
        }
      }, _callee2, null, [[16, 29]]);
    }));
    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }());
});

/***/ }),

/***/ "./frontend-js/modules/getFormInfo.js":
/*!********************************************!*\
  !*** ./frontend-js/modules/getFormInfo.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _handleBuildingFormSubmission__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./handleBuildingFormSubmission */ "./frontend-js/modules/handleBuildingFormSubmission.js");
/* harmony import */ var _handleCompanyFormSubmission__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./handleCompanyFormSubmission */ "./frontend-js/modules/handleCompanyFormSubmission.js");
/* harmony import */ var _handlePersonFormSubmission__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./handlePersonFormSubmission */ "./frontend-js/modules/handlePersonFormSubmission.js");
// getFormInfo,js
//
// Triggered by the Save button in the dropArea
// Sets event handler according to button id (building, company, or person)
//



var idMap = {
  companyPage: {
    btnId: "save-logo-btn"
  },
  personPage: {
    btnId: "save-headshot-btn"
  },
  buildingPage: {
    btnId: "save-building-logo"
  }
};

// Find the div with the page ID
var pageDiv = document.querySelector("div[id='companyPage'], div[id='personPage'], div[id='buildingPage']");
var pageId = pageDiv ? pageDiv.id : null; // e.g., "companyPage" or "personPage"

// Helper function to get the element by logical name
function getElement(genericId) {
  if (!pageId || !idMap[pageId]) {
    console.error("Page ID or mapping not found");
    return null;
  }
  var actualId = idMap[pageId][genericId];
  return document.getElementById(actualId);
}

// Handle button click events based on the page
var buttonElement = getElement("btnId");
if (buttonElement) {
  console.log("Button found:", buttonElement);
  if (pageId === 'companyPage') {
    // Attach the company-specific function
    buttonElement.addEventListener('click', _handleCompanyFormSubmission__WEBPACK_IMPORTED_MODULE_1__.handleCompanyFormSubmission);
  } else if (pageId === 'personPage') {
    // Attach the person-specific function
    buttonElement.addEventListener('click', _handlePersonFormSubmission__WEBPACK_IMPORTED_MODULE_2__.handlePersonFormSubmission);
  } else if (pageId === 'buildingPage') {
    // Attach the building-specific function
    buttonElement.addEventListener('click', _handleBuildingFormSubmission__WEBPACK_IMPORTED_MODULE_0__.handleBuildingFormSubmission);
  } else {
    console.log("No valid handler for this page.");
  }
} else {
  console.error("Button element not found for the current page.");
}

/***/ }),

/***/ "./frontend-js/modules/getPeople.js":
/*!******************************************!*\
  !*** ./frontend-js/modules/getPeople.js ***!
  \******************************************/
/***/ (() => {

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
document.querySelectorAll('.showPeople').forEach(function (icon) {
  icon.addEventListener('click', /*#__PURE__*/function () {
    var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(event) {
      var companyId, response, result;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            companyId = event.target.getAttribute('data-id');
            localStorage.setItem('editId', companyId);
            console.log("getPeople.js being executed; companyId = ", companyId);

            // Store the Id and editFlag in localStorage
            localStorage.setItem('addId', companyId);
            localStorage.setItem('editFlag', 'c');
            _context.prev = 5;
            _context.next = 8;
            return fetch("/api/companies/".concat(companyId, "/people"));
          case 8:
            response = _context.sent;
            console.log("Response status:", response.status);
            if (response.ok) {
              _context.next = 12;
              break;
            }
            throw new Error("HTTP error! status: ".concat(response.status));
          case 12:
            _context.next = 14;
            return response.json();
          case 14:
            result = _context.sent;
            if (result.success) {
              console.log("People fetched successfully:", result.data);

              // Redirect to the rendered EJS page
              window.location.href = "/admin/companies/".concat(companyId, "/people");
            } else {
              console.error('Error fetching people:', result.message);
            }
            _context.next = 21;
            break;
          case 18:
            _context.prev = 18;
            _context.t0 = _context["catch"](5);
            console.error('Fetch error:', _context.t0);
          case 21:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[5, 18]]);
    }));
    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }());
});

/***/ }),

/***/ "./frontend-js/modules/handleBuildingFormSubmission.js":
/*!*************************************************************!*\
  !*** ./frontend-js/modules/handleBuildingFormSubmission.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   handleBuildingFormSubmission: () => (/* binding */ handleBuildingFormSubmission)
/* harmony export */ });
/* harmony import */ var _drag_n_drop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./drag-n-drop */ "./frontend-js/modules/drag-n-drop.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }

function handleBuildingFormSubmission(_x) {
  return _handleBuildingFormSubmission.apply(this, arguments);
}
function _handleBuildingFormSubmission() {
  _handleBuildingFormSubmission = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(event) {
    var errors, _clientData, building, buildingExists, buildingName, introText, img, croppedCanvas, croppedImage, buildingData, method, response, result, errorContainer, li;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          event.preventDefault(); // Prevent default form submission behavior
          console.log("handleBuildingFormSubmission Called!");
          errors = []; // Initialize an array to store validation errors
          _clientData = clientData, building = _clientData.building, buildingExists = _clientData.buildingExists; // Use building and buildingExists directly in your logic
          console.log('Building exists:', buildingExists);

          // Collect form data
          buildingName = document.getElementById('buildingName').value.trim();
          introText = document.getElementById('buildingIntroText').value.trim();
          console.log("building name and intro ", buildingName, introText);

          // Validate form inputs
          if (!buildingName) errors.push('Building name is required.');
          if (!introText) errors.push('Intro text is required.');

          // Get the current image value
          img = (0,_drag_n_drop__WEBPACK_IMPORTED_MODULE_0__.getImg)();
          if (!img) errors.push('An image is required. Please add an image.');

          // Save the cropped image
          croppedCanvas = (0,_drag_n_drop__WEBPACK_IMPORTED_MODULE_0__.drawSavedImage)();
          if (!croppedCanvas) errors.push('No image to save! Please ensure the image is correctly cropped.');

          // If there are errors, send them to the server and stop further execution
          if (!(errors.length > 0)) {
            _context.next = 26;
            break;
          }
          console.log("Errors present");
          _context.prev = 16;
          _context.next = 19;
          return fetch('/admin/companies', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              errors: errors
            })
          });
        case 19:
          window.location.reload(); // Force a page refresh to display flash errors
          return _context.abrupt("return");
        case 23:
          _context.prev = 23;
          _context.t0 = _context["catch"](16);
          console.error('Error sending errors:', _context.t0);
        case 26:
          croppedImage = croppedCanvas.toDataURL('image/png'); // Convert the cropped image to Base64
          // Prepare data for the server
          buildingData = {
            name: buildingName,
            intro: introText,
            image: croppedImage
          };
          console.log("buildingData", buildingData);
          _context.prev = 29;
          method = !buildingExists ? 'POST' : 'PUT';
          console.log("Method = ", method, "Payload = ", buildingData);

          // Make a POST or PUT request to the server to save/update the building data
          _context.next = 34;
          return fetch('/admin/building', {
            method: method,
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(buildingData)
          });
        case 34:
          response = _context.sent;
          _context.next = 37;
          return response.json();
        case 37:
          result = _context.sent;
          if (response.ok) {
            _context.next = 42;
            break;
          }
          alert(result.message || 'An error occurred.');
          console.log(!response);
          return _context.abrupt("return");
        case 42:
          alert(result.message || 'Operation successful!');
          _context.next = 50;
          break;
        case 45:
          _context.prev = 45;
          _context.t1 = _context["catch"](29);
          console.error('Error submitting form:', _context.t1);
          errorContainer = document.querySelector('.alert-danger ul');
          if (errorContainer) {
            errorContainer.innerHTML = ''; // Clear previous errors
            li = document.createElement('li');
            li.textContent = 'An unexpected error occurred. Please try again.';
            errorContainer.appendChild(li);
          }
        case 50:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[16, 23], [29, 45]]);
  }));
  return _handleBuildingFormSubmission.apply(this, arguments);
}

/***/ }),

/***/ "./frontend-js/modules/handleCompanyFormSubmission.js":
/*!************************************************************!*\
  !*** ./frontend-js/modules/handleCompanyFormSubmission.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   handleCompanyFormSubmission: () => (/* binding */ handleCompanyFormSubmission)
/* harmony export */ });
/* harmony import */ var _drag_n_drop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./drag-n-drop */ "./frontend-js/modules/drag-n-drop.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }


// Define a function to handle form submission logic
function handleCompanyFormSubmission(_x) {
  return _handleCompanyFormSubmission.apply(this, arguments);
}
function _handleCompanyFormSubmission() {
  _handleCompanyFormSubmission = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(event) {
    var errors, Id, flag, companyName, introText, img, croppedCanvas, croppedImage, companyData, url, method, response, result;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          // Initialize the errors array
          errors = []; // Retrieve the company Id and editFlag from localStorage
          Id = localStorage.getItem('editId');
          flag = localStorage.getItem('editFlag');
          console.log("handleCompanyFormSubmission Flag = ", flag);
          event.preventDefault(); // Prevent default form submission behavior

          // Collect form data
          companyName = document.getElementById('companyName').value.trim();
          introText = document.getElementById('introText').value.trim(); // Validate the inputs
          if (!companyName) errors.push('Company name is required.');
          if (!introText) errors.push('Intro text is required.');

          // Get the current value of img
          img = (0,_drag_n_drop__WEBPACK_IMPORTED_MODULE_0__.getImg)();
          if (!img) errors.push('An image is required. Please add an image.');

          // Save the cropped image
          croppedCanvas = (0,_drag_n_drop__WEBPACK_IMPORTED_MODULE_0__.drawSavedImage)();
          if (!croppedCanvas) errors.push('No image to save! Please ensure the image is correctly cropped.');

          // If there are errors, send them to the server and stop further execution
          if (!(errors.length > 0)) {
            _context.next = 24;
            break;
          }
          _context.prev = 14;
          _context.next = 17;
          return fetch('/admin/companies/add', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              errors: errors
            })
          });
        case 17:
          window.location.reload(); // Force a page refresh to display flash errors
          return _context.abrupt("return");
        case 21:
          _context.prev = 21;
          _context.t0 = _context["catch"](14);
          console.error('Error sending errors:', _context.t0);
        case 24:
          croppedImage = croppedCanvas.toDataURL('image/png'); // Convert cropped image to Base64
          // Prepare data for the server
          companyData = {
            name: companyName,
            intro: introText,
            image: croppedImage,
            people: []
          };
          _context.prev = 26;
          url = flag === 'c' ? '/admin/companies/add' : "/admin/companies/edit/".concat(Id);
          method = flag === 'c' ? 'POST' : 'PUT';
          _context.next = 31;
          return fetch(url, {
            method: method,
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(companyData)
          });
        case 31:
          response = _context.sent;
          _context.next = 34;
          return response.json();
        case 34:
          result = _context.sent;
          if (response.ok) {
            _context.next = 39;
            break;
          }
          alert(result.message || 'An error occurred.');
          console.log(!response);
          return _context.abrupt("return");
        case 39:
          alert(result.message || 'Operation successful!');
          document.getElementById('companyForm').reset(); // Optionally reset the form
          window.location.reload(); // Refresh the page
          _context.next = 48;
          break;
        case 44:
          _context.prev = 44;
          _context.t1 = _context["catch"](26);
          console.error('Error submitting form:', _context.t1);
          alert('An unexpected error occurred. Please try again.');
        case 48:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[14, 21], [26, 44]]);
  }));
  return _handleCompanyFormSubmission.apply(this, arguments);
}

/***/ }),

/***/ "./frontend-js/modules/handlePersonFormSubmission.js":
/*!***********************************************************!*\
  !*** ./frontend-js/modules/handlePersonFormSubmission.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   handlePersonFormSubmission: () => (/* binding */ handlePersonFormSubmission)
/* harmony export */ });
/* harmony import */ var _drag_n_drop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./drag-n-drop */ "./frontend-js/modules/drag-n-drop.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }

function handlePersonFormSubmission(_x) {
  return _handlePersonFormSubmission.apply(this, arguments);
}
function _handlePersonFormSubmission() {
  _handlePersonFormSubmission = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(event) {
    var errors, personId, consent, personName, personTitle, replyText, mobile, email, outlet, companyId, flag, img, croppedCanvas, croppedImage, personData, url, response, result;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          errors = [];
          personName = document.getElementById('personName').value.trim();
          personTitle = document.getElementById('personTitle').value.trim();
          replyText = document.getElementById('replyText').value.trim();
          mobile = document.getElementById('mobile').value.trim();
          email = document.getElementById('email').value.trim();
          outlet = document.getElementById('outlet').value.trim();
          companyId = localStorage.getItem('editId');
          flag = localStorage.getItem('editFlag');
          console.log("handlePersonFormSubmission called", companyId, flag);
          if (!personName) errors.push("Person's name is required.");
          if (!replyText) errors.push('Reply text is required.');
          if (!(mobile || email || outlet)) errors.push('Either mobile number, email address or outlet address is required.');
          img = (0,_drag_n_drop__WEBPACK_IMPORTED_MODULE_0__.getImg)();
          croppedCanvas = (0,_drag_n_drop__WEBPACK_IMPORTED_MODULE_0__.drawSavedImage)();
          if (!img) {
            errors.push('An image is required. Please add an image.');
          } else {
            if (!croppedCanvas) errors.push('No image to save! Please ensure the image is correctly cropped.');
          }

          // If there are errors, send them to the server and stop further execution
          if (!(errors.length > 0)) {
            _context.next = 28;
            break;
          }
          _context.prev = 17;
          console.log("Errors in handlePersonFormSubmission");
          _context.next = 21;
          return fetch("/api/companies/".concat(companyId, "/people/errors"), {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              errors: errors
            })
          });
        case 21:
          window.location.reload(); // Force a page refresh to display flash errors
          return _context.abrupt("return");
        case 25:
          _context.prev = 25;
          _context.t0 = _context["catch"](17);
          console.error('Error sending errors:', _context.t0);
        case 28:
          croppedImage = croppedCanvas.toDataURL('image/png');
          if (!(flag === 'c')) {
            _context.next = 34;
            break;
          }
          personId = crypto.randomUUID();
          consent = "PENDING";
          _context.next = 37;
          break;
        case 34:
          _context.next = 36;
          return localStorage.getItem('personId');
        case 36:
          personId = _context.sent;
        case 37:
          personData = {
            id: personId,
            name: personName,
            title: personTitle,
            reply: replyText,
            mobile: mobile,
            email: email,
            outlet: outlet,
            image: croppedImage,
            consent: consent
          }; // console.log("client side ", companyId, personData);
          _context.prev = 38;
          url = flag === 'c' ? "/api/companies/".concat(companyId, "/people") : "/admin/companies/".concat(companyId, "/people/edit/").concat(personData.id);
          console.log("URL/flg", url, "/", flag);
          _context.next = 43;
          return fetch(url, {
            method: 'PUT',
            // Use PUT for updating
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              people: personData
            })
          });
        case 43:
          response = _context.sent;
          _context.next = 46;
          return response.json();
        case 46:
          result = _context.sent;
          if (response.ok) {
            _context.next = 50;
            break;
          }
          alert(result.message || 'An error occurred while updating the record.');
          return _context.abrupt("return");
        case 50:
          window.location.reload();
          _context.next = 57;
          break;
        case 53:
          _context.prev = 53;
          _context.t1 = _context["catch"](38);
          console.error('Error updating company:', _context.t1);
          alert('An unexpected error occurred. Please try again.');
        case 57:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[17, 25], [38, 53]]);
  }));
  return _handlePersonFormSubmission.apply(this, arguments);
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";
/*!*****************************!*\
  !*** ./frontend-js/main.js ***!
  \*****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_drag_n_drop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/drag-n-drop */ "./frontend-js/modules/drag-n-drop.js");
/* harmony import */ var _modules_getFormInfo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/getFormInfo */ "./frontend-js/modules/getFormInfo.js");
/* harmony import */ var _modules_editCompany__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/editCompany */ "./frontend-js/modules/editCompany.js");
/* harmony import */ var _modules_editPerson__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/editPerson */ "./frontend-js/modules/editPerson.js");
/* harmony import */ var _modules_deleteItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/deleteItem */ "./frontend-js/modules/deleteItem.js");
/* harmony import */ var _modules_deleteItem__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_modules_deleteItem__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _modules_deletePerson__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/deletePerson */ "./frontend-js/modules/deletePerson.js");
/* harmony import */ var _modules_deletePerson__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_modules_deletePerson__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _modules_getPeople__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/getPeople */ "./frontend-js/modules/getPeople.js");
/* harmony import */ var _modules_getPeople__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_modules_getPeople__WEBPACK_IMPORTED_MODULE_6__);


// import CreateCompany from './modules/create-company'





})();

/******/ })()
;
//# sourceMappingURL=main-bundled.js.map