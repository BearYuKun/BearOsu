"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

require(['./config'], function () {
  require(['header', 'footer', 'bootstrap'], function () {
    var Video = /*#__PURE__*/function () {
      function Video() {
        _classCallCheck(this, Video);

        this.init();
      }

      _createClass(Video, [{
        key: "init",
        value: function init() {
          $.get('http://api.tianapi.com/txapi/dyvideohot/index?key=35705ec28dbe6f3b4f34640d39651750', function (resp) {
            console.log(resp);
          });
        }
      }]);

      return Video;
    }();

    new Video();
  });
});