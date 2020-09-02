"use strict";

require.config({
  baseUrl: '/',
  paths: {
    jquery: 'libs/jquery/jquery-1.11.3.min',
    bootstrap: 'libs/bootstrap/js/bootstrap4.bundle.min',
    template: 'libs/art-template/template-web',
    header: 'js/modules/header',
    xyk: 'libs/jquery-xyk-alert/jquery-xyk-alert',
    footer: 'js/modules/footer',
    vue: '/libs/vue/vue'
  },
  shim: {
    bootstrap: {
      deps: ['jquery']
    }
  } // map: {
  //     '*': {
  //         'popper.js': 'popper'
  //     }
  // }

});