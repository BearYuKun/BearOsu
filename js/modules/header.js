"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

define(['template', 'jquery'], function () {
  var Header = /*#__PURE__*/function () {
    function Header() {
      _classCallCheck(this, Header);

      this.loadHTML().then(function () {// 只要涉及header的一些DOM操作就都在这里
      });
    }

    _createClass(Header, [{
      key: "loadHTML",
      value: function loadHTML() {
        return new Promise(function (resolve, reject) {
          $('header').load('/html/modules/header.html', function () {
            resolve();
          });
        });
      }
    }]);

    return Header;
  }();

  return new Header();
});