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
/*
 * This script attaches click event listeners to all elements with the class 'delete-btn'
 * once the DOM has fully loaded. For each delete button, it:
 *  - Retrieves the item's ID and deletion route from data attributes.
 *  - Prompts the user with a confirmation dialog before deletion.
 *  - If confirmed, sends an asynchronous DELETE request to the server using the fetched route and ID.
 *  - Processes the server's JSON response:
 *       • If deletion is successful, reloads the page to update the item list.
 *       • If unsuccessful, displays an error message to the user.
 *  - Catches and logs any errors that occur during the deletion process.
 */

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
/*
 * This script attaches click event listeners to all elements with the class 'delete-person-btn'
 * once the DOM has fully loaded.
 *
 * For each delete button, the script:
 *  - Retrieves the person's ID, associated company ID, and the deletion route from data attributes.
 *  - Verifies that all required data attributes are present; logs an error if any are missing.
 *  - Prompts the user for confirmation before proceeding with the deletion.
 *  - If confirmed, sends an asynchronous DELETE request to a URL constructed using the delete route, company ID, and person ID.
 *  - Processes the JSON response:
 *       • If successful, reloads the page to update the displayed list.
 *       • If unsuccessful, alerts the user with an error message.
 *  - Catches and logs any unexpected errors during the deletion process.
 */

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
/*
 * This module implements comprehensive image uploading, previewing, cropping, and drag-and-drop functionality.
 *
 * Key Features:
 *  - Global State Management:
 *      • Maintains global variables for the current image, canvas context, cropping parameters (cropX, cropY, 
 *          cropWidth, cropHeight),
 *        and flags to track dragging/resizing states.
 *
 *  - Image Loading & Preview:
 *      • The previewFile() function loads an image file (via drag-and-drop or file selection), creates an Image 
 *          object,
 *        and sets up the canvas dimensions based on the container’s width while maintaining the aspect ratio.
 *      • If the image is an SVG lacking width, fixSvgDim() adjusts its dimensions using the viewBox attribute.
 *
 *  - Cropping Functionality:
 *      • drawCanvas() renders the image on the canvas, overlays a semi-transparent mask outside the crop area,
 *        draws the cropping box outline, and adds resize handles.
 *      • resizeCropBox() adjusts the crop box dimensions and position based on mouse interactions.
 *      • drawSavedImage() creates a new canvas containing only the cropped portion of the image (scaled 
 *          appropriately)
 *        for saving or further processing.
 *
 *  - User Interaction & Event Handling:
 *      • Sets up drag-and-drop (and file selection) event listeners for image upload.
 *      • Enables interactive cropping through mouse events (mousemove, mousedown, mouseup) to support dragging
 *        the crop box and resizing via its handles.
 *      • Provides a delete functionality that clears the canvas and resets cropping parameters when the delete 
 *          button is clicked.
 *
 *  - Initialization:
 *      • The initializeDragAndDrop() function (invoked on DOMContentLoaded) verifies the existence of required DOM 
 *          elements, initializes the canvas and context, sets up drag-and-drop events, and prepares the UI 
 *          for image interactions.
 *      • Also sets a localStorage flag ('editFlag' = 'c') to indicate the current mode.
 *
 *  - Exports:
 *      • drawSavedImage – Returns a new canvas element with the cropped image.
 *      • previewFile – Loads and previews the selected image file.
 *      • getImg – Returns the current image object.
 *
 *  - Error Handling & Debugging:
 *      • Uses try-catch blocks and console logging to handle and report errors during file processing, image 
 *          loading,
 *        and user interactions.
 *      • Alerts the user when critical errors occur (e.g., failed image loading, missing DOM elements).
 */

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
var dragAndDropInitialized = false;

// Returns the current image object stored in the global variable 'img'.
function getImg() {
  return img; // Returns the current image object
}
/*
 * drawSavedImage()
 *
 * This function creates and returns a new canvas element containing only the cropped portion of the current image.
 *
 * Workflow:
 *  - If no image is loaded (img is undefined or null), the function clears the existing canvas and returns null.
 *  - Otherwise, it creates a new canvas and sets its dimensions to match the cropping box (cropWidth x cropHeight).
 *  - It calculates the scaling factors between the original image and the current canvas.
 *  - Determines the exact source coordinates and dimensions on the original image based on the crop box position 
 *      and scale.
 *  - Draws the cropped section from the original image onto the new canvas.
 *  - Returns the new canvas containing the cropped image.
 */
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

/*
 * previewFile(file):
 *  - Unhides the delete button and canvas container while hiding the form container.
 *  - Creates a new Image object and sets its source to a temporary URL for the provided file.
 *  - Once the image loads:
 *      • Calculates the image's original aspect ratio.
 *      • Sets the canvas dimensions based on the container's width while preserving the aspect ratio.
 *      • Centers the crop box on the canvas by computing cropWidth, cropHeight, cropX, and cropY.
 *      • Calls drawCanvas() to render the image and the cropping overlay on the canvas.
 */
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
/*
 * handleFiles(files)
 *
 * This function processes a list of files (typically from a file input or drag-and-drop):
 *  - It selects the first file from the provided list.
 *  - If the file exists and its MIME type starts with "image/", it checks if the file is an SVG.
 *      • For SVG files, it calls fixSvgDim(file) to adjust the SVG dimensions if needed.
 *      • For other image types, it calls previewFile(file) to display the image preview and initialize cropping.
 *  - If the file is not a valid image, it alerts the user and resets the file input for another attempt.
 */
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
/*
 * drawCanvas()
 *
 * This function redraws the canvas with the current image and cropping overlay:
 *  - Clears the canvas.
 *  - Draws the image scaled to the canvas dimensions.
 *  - Renders a semi-transparent overlay outside the defined crop area using multiple fillRect calls.
 *  - Outlines the crop area with a red rectangle.
 *  - Draws red resize handles at each corner of the crop box for interactive adjustments.
 */
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
/*
 * fixSvgDim(file)
 *
 * This function adjusts the dimensions of an SVG file if its "width" attribute is missing.
 *
 * Workflow:
 *  - Reads the SVG file as text using a FileReader.
 *  - Parses the text into an XML document to access the SVG element.
 *  - Checks if the "width" attribute is absent:
 *      • If missing, attempts to retrieve the "viewBox" attribute.
 *      • Extracts the width from the viewBox (assuming the format "min-x min-y width height").
 *      • Sets the "width" attribute on the SVG element using the extracted value.
 *  - Serializes the modified SVG back into a string.
 *  - Creates a new Blob and then a new File object with the updated SVG content.
 *  - Calls previewFile(updatedFile) to proceed with displaying the image.
 *
 * Error Handling:
 *  - Logs errors to the console if the viewBox format is invalid or missing.
 *  - Handles file reading errors via reader.onerror.
 */
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
/*
 * drawHandle(x, y)
 *
 * Draws a square (resize handle) centered at the given (x, y) coordinates on the canvas.
 * The size of the square is defined by the global variable 'handleSize'.
 */
function drawHandle(x, y) {
  ctx.fillRect(x - handleSize / 2, y - handleSize / 2, handleSize, handleSize);
}

/*
 * resizeCropBox(mouseX, mouseY)
 *
 * Adjusts the cropping box dimensions and position based on the mouse coordinates and the active resize direction.
 *
 * For each resize direction:
 *  - 'top-left':
 *      • Increases the crop box size by the difference between the current crop position and the mouse position.
 *      • Moves the top-left corner of the crop box to the mouse coordinates.
 *
 *  - 'top-right':
 *      • Sets the crop box width as the distance from the crop's left edge to the mouse position.
 *      • Increases the crop box height based on the vertical difference, and moves the top edge to the mouse's \
 *          y-coordinate.
 *
 *  - 'bottom-left':
 *      • Increases the crop box width based on the horizontal difference, and moves the left edge to the mouse's 
 *          x-coordinate.
 *      • Sets the crop box height as the distance from the crop's top edge to the mouse position.
 *
 *  - 'bottom-right':
 *      • Sets both the crop box width and height as the differences between the mouse position and the crop's 
 *          origin.
 *
 * Finally, it ensures the crop box does not shrink below a minimum size defined by 'handleSize'.
 */
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

/*
 * initializeDragAndDrop()
 *
 * This function sets up the drag-and-drop and file selection functionality for the image upload
 * and cropping interface. It performs the following tasks:
 *
 * 1. Initialization:
 *    - Checks if drag-and-drop has already been initialized to prevent duplicate setups.
 *    - Sets a localStorage flag ('editFlag' = 'c') and exposes the handleFiles function globally.
 *
 * 2. DOM Element Verification:
 *    - Verifies that all required elements (drop area, form container, file input/select, delete button,
 *      and canvas container) are present.
 *    - Throws an error if any required element is missing.
 *
 * 3. Canvas Setup:
 *    - If a canvas exists, obtains its 2D context.
 *    - If an image preview (imgPreview) exists, it creates a new image from it, replaces the preview with the 
 *      canvas, sets the canvas dimensions to match the image, draws the image, and initializes cropping 
 *      functionality.
 *
 * 4. Drag-and-Drop Event Handling:
 *    - Prevents default browser behavior for drag events on the drop area.
 *    - Adds highlight effects when files are dragged over the drop area and removes them when dragged away or 
 *      dropped.
 *    - Processes dropped files by calling handleFiles with the files obtained from the DataTransfer object.
 *
 * 5. File Selection:
 *    - Sets up a click event on the file select element to trigger the file input.
 *    - Listens for changes on the file input and calls handleFiles when files are selected.
 *
 * 6. Canvas Mouse Interaction for Cropping:
 *    - Attaches mousemove, mousedown, and mouseup event listeners on the canvas to handle:
 *         • Resizing the crop box (with appropriate cursor changes when near the crop box edges or corners).
 *         • Dragging the crop box within canvas boundaries.
 *    - Updates the crop box display by calling drawCanvas() during these interactions.
 *
 * 7. Error Handling:
 *    - Uses try-catch blocks to log and alert errors during file drop, image loading, and mouse interactions.
 *
 * Overall, this function ensures a robust setup for the drag-and-drop file upload and interactive image cropping UI.
 */
function initializeDragAndDrop() {
  if (dragAndDropInitialized) {
    console.warn("Drag-and-drop already initialized.");
    return;
  }
  dragAndDropInitialized = true;
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
      fileInput.value = ''; // Reset the input value
      fileInput.click();
    });
  }

  // File input change event
  if (fileInput) {
    debugCounter++;
    console.log("File Input", fileInput, debugCounter);
    fileInput.addEventListener('change', function (e) {
      console.log("Input Changed !!!!!!!!!!!!!!!", debugCounter);
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
document.addEventListener('DOMContentLoaded', function () {
  try {
    initializeDragAndDrop();
  } catch (error) {
    console.error("Initialization error:", error.message);
    alert("An error occurred while initializing the drag-and-drop functionality. Please reload the page.");
  }
});

/***/ }),

/***/ "./frontend-js/modules/editBuilding.js":
/*!*********************************************!*\
  !*** ./frontend-js/modules/editBuilding.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _drag_n_drop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./drag-n-drop */ "./frontend-js/modules/drag-n-drop.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
/*
 * This script enables the editing of building information in the admin interface.
 *
 * Key functionalities:
 *  - Listens for click events on elements with the class "editBuilding".
 *  - When an edit icon is clicked, prompts the user to confirm if they want to edit the building info.
 *  - Upon confirmation:
 *      • Retrieves necessary DOM elements (e.g., edit form, buttons, heading, delete icon).
 *      • Stores the selected building's ID and sets an "edit" flag in localStorage.
 *      • Updates the UI by:
 *            - Changing the form heading to "Edit Building Information".
 *            - Replacing the delete icon with an edit icon.
 *            - Toggling visibility: displaying the edit section and hiding the create button.
 *      • Fetches the building record from the server.
 *      • If successful:
 *            - Populates the form fields (name and intro) with the retrieved data.
 *            - If an image exists, preloads it and processes it via the previewFile function.
 *  - Handles errors by logging messages and alerting the user as needed.
 */


document.querySelectorAll('.editBuilding').forEach(function (icon) {
  icon.addEventListener('click', /*#__PURE__*/function () {
    var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(event) {
      var Id, createBuildingButton, addBuildingSection, buildingForm, formHeading, deleteIcon, parent, response, result, _result$data, name, intro, image, img;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            Id = event.target.dataset.id;
            if (!confirm('Do you want to edit the building information?')) {
              _context2.next = 29;
              break;
            }
            createBuildingButton = document.getElementsByClassName('create-building-btn')[0];
            addBuildingSection = document.getElementById('add-building-section');
            buildingForm = document.getElementById('buildingForm');
            formHeading = document.getElementById('form-heading');
            deleteIcon = document.getElementsByClassName('delete-image-btn')[0]; // Store the Id and editFlag in localStorage
            localStorage.setItem('editId', Id);
            localStorage.setItem('editFlag', 'e');

            // Modify form for edit
            formHeading.innerHTML = '<h2>Edit Building Information</h2>';
            // Get the delete button parent element
            if (deleteIcon) {
              parent = deleteIcon.parentElement;
              if (parent) {
                // Replace the current content with a new element
                parent.innerHTML = "<i class=\"delete-image-btn fa fa-pencil-square-o\" aria-hidden=\"true\"></i>";
              }
            }
            addBuildingSection.classList.remove('d-none');
            createBuildingButton.classList.add('d-none');

            // Retrieve building record from database
            _context2.prev = 13;
            _context2.next = 16;
            return fetch("/admin/building");
          case 16:
            response = _context2.sent;
            console.log("editBuilding.js response = ", response);
            _context2.next = 20;
            return response.json();
          case 20:
            result = _context2.sent;
            console.log("result = ", result);
            if (result.success) {
              _result$data = result.data, name = _result$data.name, intro = _result$data.intro, image = _result$data.image;
              buildingForm.elements['buildingName'].value = name;
              buildingForm.elements['buildingIntroText'].value = intro;

              // Preload image into the canvas
              if (image) {
                img = new Image();
                img.src = image; // Assuming `image` contains the Base64 or URL

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
              alert(result.message || 'Failed to fetch building information.');
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
/*
 * This script enables editing of company information in the admin interface:
 *
 * - It attaches click event listeners to all elements with the class "editCompany".
 *
 * - When an edit icon is clicked:
 *     • The user is prompted to confirm whether they want to edit the company information.
 *     • If confirmed, the script retrieves key DOM elements (e.g., the create company button, the company form, the 
 *       editing section, and the delete icon).
 *     • It stores the company ID and an edit flag ('e') in localStorage.
 *     • The form heading is updated to "Edit Company Information" and the delete icon is replaced with an edit icon.
 *     • The company editing section is displayed while hiding the create company button.
 *
 * - The script then fetches the company record from the server using the company ID:
 *     • If the fetch is successful, it populates the form fields (company name and intro text) with the retrieved 
 *       data.
 *     • If an image is provided, it creates an Image object, loads it, converts it to a File object, and calls 
 *       previewFile() 
 *       to display the image preview and initialize cropping functionality.
 *
 * - Errors during the fetch or image processing are caught and handled by alerting the user and logging error 
 *   details.
 */

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
/*
 * This script enables the editing of a staff member's information in the admin interface.
 *
 * Workflow:
 *  - Attaches a click event listener to every element with the class "editPerson".
 *  - On click, retrieves the staff member's ID, associated company ID, and the API route from data attributes.
 *  - Prompts the user for confirmation to edit the staff member's information.
 *  - If confirmed, it:
 *      • Retrieves and updates key DOM elements (edit form, buttons, section, and heading).
 *      • Stores the company ID, person ID, and an edit flag ('e') in localStorage.
 *      • Modifies the UI to display the editing section and update the form heading.
 *      • Replaces the delete icon with an edit icon for clarity.
 *
 *  - It then fetches the staff member's current information from the server using the provided route.
 *  - On a successful response:
 *      • Populates the form fields (name, title, reply text, mobile, email, and outlet) with the retrieved data.
 *      • If an image is provided, it creates an Image object, waits for it to load, fetches its data as a blob,
 *        converts the blob into a File object, and calls previewFile() to preload the image into the cropping 
 *        interface.
 *
 *  - If any errors occur during the fetch or image processing, they are caught and reported to the user.
 */

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
/*
 * getFormInfo.js
 *
 * This module sets up the form submission handler for different pages (company, person, or building)
 * based on the current page's identifier.
 *
 * Functionality:
 *  - Imports specific form submission functions:
 *       • handleBuildingFormSubmission
 *       • handleCompanyFormSubmission
 *       • handlePersonFormSubmission
 *
 *  - Defines an idMap that maps each page (companyPage, personPage, buildingPage) to its corresponding
 *    button ID.
 *
 *  - Determines the current page by selecting a div whose ID is either "companyPage", "personPage", or 
 *    "buildingPage".
 *
 *  - Uses a helper function, getElement, to retrieve the appropriate button element from the DOM based on the idMap.
 *
 *  - Attaches a click event listener to the button:
 *       • For companyPage: attaches handleCompanyFormSubmission.
 *       • For personPage: attaches handlePersonFormSubmission.
 *       • For buildingPage: attaches handleBuildingFormSubmission.
 *
 *  - Logs an error if the required page or button element cannot be found.
 */



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
/*
 * This script handles the display of people associated with a company.
 *
 * Workflow:
 *  - Attaches click event listeners to all elements with the "showPeople" class.
 *  - When clicked, it retrieves the company ID from the element's data attribute and stores it in localStorage 
 *    (using keys "editId" and "addId"), and sets an "editFlag" to 'c'.
 *  - It then makes an asynchronous API call to fetch the people data for that company.
 *  - If the response is successful and the API returns a success flag, the user is redirected to the company's 
 *    people page in the admin interface.
 *  - Any errors during fetching are logged to the console.
 */
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
/*
 * handleBuildingFormSubmission(event)
 *
 * This asynchronous function handles the submission of the building form, performing image validation,
 * cropping, and data submission to the server.
 *
 * Workflow:
 *  1. Prevents the default form submission.
 *
 *  2. Retrieves form input values (building name and intro text) and validates that both fields are filled.
 *
 *  3. Obtains the current image using getImg() and ensures that an image is present.
 *
 *  4. Calls drawSavedImage() to extract the cropped portion of the image from the canvas. The cropped image
 *     is then converted to a Base64-encoded PNG string.
 *
 *  5. If any validation errors occur (missing text fields or image), the errors are sent to the server,
 *     and the page is reloaded to display error messages.
 *
 *  6. If there are no errors, prepares the building data (name, intro text, and image) and sends it to the server
 *     using either a POST request (for creating a new building) or a PUT request (for updating an existing 
 *     building), based on the edit flag stored in localStorage.
 *
 *  7. Upon receiving the server response:
 *       - If successful, the page is refreshed and the user is alerted with a success message.
 *       - If unsuccessful, an error alert is displayed.
 *
 * Dependencies:
 *  - drawSavedImage: Returns a canvas element containing the cropped image.
 *  - getImg: Retrieves the current image object.
 *  - previewFile: (Imported for image preview functionality, used elsewhere.)
 *
 * The function uses localStorage to store and retrieve the edit flag ('c' for create, 'e' for edit) and the current
 * building identifier.
 */

function handleBuildingFormSubmission(_x) {
  return _handleBuildingFormSubmission.apply(this, arguments);
}
function _handleBuildingFormSubmission() {
  _handleBuildingFormSubmission = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(event) {
    var errors, Id, flag, buildingName, introText, img, croppedCanvas, croppedImage, buildingData, url, method, response, result, errorContainer, li;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          event.preventDefault(); // Prevent default form submission behavior
          console.log("handleBuildingFormSubmission Called!");
          errors = []; // Initialize an array to store validation errors
          // Retrieve the company Id and editFlag from localStorage
          Id = localStorage.getItem('editId');
          flag = localStorage.getItem('editFlag'); // Collect form data
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
          return fetch('/admin', {
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
          url = flag === 'c' ? '/admin/building' : "/admin/building";
          method = flag === 'c' ? 'POST' : 'PUT'; // Make a POST or PUT request to the server to save/update the building data
          _context.next = 34;
          return fetch(url, {
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
          location.reload(); // Refresh the page
          alert(result.message || 'Operation successful!');
          _context.next = 51;
          break;
        case 46:
          _context.prev = 46;
          _context.t1 = _context["catch"](29);
          console.error('Error submitting form:', _context.t1);
          errorContainer = document.querySelector('.alert-danger ul');
          if (errorContainer) {
            errorContainer.innerHTML = ''; // Clear previous errors
            li = document.createElement('li');
            li.textContent = 'An unexpected error occurred. Please try again.';
            errorContainer.appendChild(li);
          }
        case 51:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[16, 23], [29, 46]]);
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
/*
 * handleCompanyFormSubmission(event)
 *
 * This asynchronous function manages the submission process for the company form. It performs the following tasks:
 *
 *  1. Prevents the default form submission behavior.
 *
 *  2. Retrieves the company ID and edit flag from localStorage to determine if the operation is for creation ('c') 
 *  or editing.
 *
 *  3. Collects input values from the form (company name and intro text) and validates that they are not empty.
 *
 *  4. Checks for the presence of an image by using getImg() and extracts the cropped image from the canvas using 
 *     drawSavedImage().
 *
 *  5. If validation errors exist (missing text fields or image issues), it sends these errors to the server via a 
 *     POST request to
 *     '/admin/companies/add' and then reloads the page.
 *
 *  6. If all inputs are valid, it converts the cropped canvas image to a Base64-encoded PNG string.
 *
 *  7. Constructs a companyData object containing the company name, intro text, the Base64 image, and an empty 
 *     'people' array.
 *
 *  8. Determines the correct API endpoint and HTTP method (POST for creation or PUT for editing) based on the edit 
 *     flag.
 *
 *  9. Sends the companyData to the server, then alerts the user with the operation's result, resets the form, and 
 *     reloads the page.
 *
 *  10. Catches and logs any unexpected errors that occur during the submission process.
 *
 * Dependencies:
 *  - getImg: Retrieves the current image object.
 *  - drawSavedImage: Returns a canvas element containing the cropped image.
 */


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
/*
 * handlePersonFormSubmission(event)
 *
 * This function manages the submission process for a person (staff member) form, handling both creation and update operations.
 *
 * Workflow:
 *  - Prevents the default form submission behavior.
 *  - Collects and trims input values for person name, title, reply text, mobile, email, and outlet.
 *  - Retrieves the company ID and edit flag from localStorage to determine if the operation is a creation ('c') or 
 *    an update.
 *  - Validates the form inputs:
 *      • Ensures that the person's name and reply text are provided.
 *      • Requires at least one contact detail (mobile, email, or outlet).
 *  - Obtains the current image using getImg() and extracts the cropped image using drawSavedImage().
 *      • If the image or cropped canvas is missing, validation errors are pushed.
 *
 *  - If any validation errors exist:
 *      • Sends the errors to the server endpoint specific to the company.
 *      • Reloads the page to display error messages.
 *
 *  - If validation passes:
 *      • Converts the cropped canvas to a Base64-encoded PNG string.
 *      • Determines the person ID:
 *            - For creation (flag 'c'): generates a new UUID and sets consent to "PENDING".
 *            - For update: retrieves the existing person ID from localStorage.
 *      • Constructs a personData object containing all form data, the image, and consent status.
 *
 *  - Prepares the API endpoint URL based on the operation type:
 *      • For creation: uses the endpoint to add a new person.
 *      • For update: uses the endpoint to edit an existing person.
 *
 *  - Sends a PUT request with the personData in JSON format.
 *  - If the server response indicates an error, alerts the user with the error message.
 *  - On success, reloads the page to reflect the updated information.
 *
 * Dependencies:
 *  - getImg: Retrieves the current image object.
 *  - drawSavedImage: Returns a canvas element containing the cropped image.
 */

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
/* harmony import */ var _modules_editBuilding__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/editBuilding */ "./frontend-js/modules/editBuilding.js");
/* harmony import */ var _modules_editCompany__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/editCompany */ "./frontend-js/modules/editCompany.js");
/* harmony import */ var _modules_editPerson__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/editPerson */ "./frontend-js/modules/editPerson.js");
/* harmony import */ var _modules_deleteItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/deleteItem */ "./frontend-js/modules/deleteItem.js");
/* harmony import */ var _modules_deleteItem__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_modules_deleteItem__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _modules_deletePerson__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/deletePerson */ "./frontend-js/modules/deletePerson.js");
/* harmony import */ var _modules_deletePerson__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_modules_deletePerson__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _modules_getPeople__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/getPeople */ "./frontend-js/modules/getPeople.js");
/* harmony import */ var _modules_getPeople__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_modules_getPeople__WEBPACK_IMPORTED_MODULE_7__);








})();

/******/ })()
;
//# sourceMappingURL=main-bundled.js.map