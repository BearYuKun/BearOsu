"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

require(['./config'], function () {
  require(['vue', 'header', 'footer', 'bootstrap'], function (Vue) {
    var Index = /*#__PURE__*/function () {
      function Index() {
        _classCallCheck(this, Index);

        this.init();
      }

      _createClass(Index, [{
        key: "init",
        value: function init() {
          $('.carousel').carousel();
          this.initVue();
        }
      }, {
        key: "initVue",
        value: function initVue() {
          var app = new Vue({
            el: "#app1",
            data: {
              animeList: Array(4).fill(null).map(function (v, i) {
                return {
                  title: '这是标题',
                  up: 'up' + i,
                  played: parseInt(Math.random() * 10000),
                  img: '/images/helltaker/h1.jpg',
                  url: '/html/video.html'
                };
              }),
              message: '这是一条信息'
            }
          });
        }
      }]);

      return Index;
    }();

    new Index();
  });
});