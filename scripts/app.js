'use strict';

(function () {
  function init() {
    const router = new Router([
      new Route('index', 'app.html', true),
      new Route('sign-up-1', 'signUp1.html'),
      new Route('sign-up-2-pf', 'signUp2PF.html'),
      new Route('sign-up-2-pj', 'signUp2PJ.html'),
      new Route('email-confirmation', 'emailConfirmation.html'),
      new Route('post-register-login', 'postRegisterLogin.html'),
      new Route('login', 'login.html'),
      new Route('require-login', 'requireLogin.html'),
    ]);
  }
  init();

  if(!location.hash) {
    location.hash = 'index' 
  }
  
}());