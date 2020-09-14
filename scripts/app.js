'use strict';

(function () {
  function init() {
    const router = new Router([
      new Route('index', 'index.html', true),
      new Route('test1', 'test1.html'),
      new Route('test2', 'test2.html'),
    ]);
  }
  init();
}());