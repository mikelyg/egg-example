'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/demo', controller.home.demo);
  router.get('/news/list', controller.main.list);
  router.get('/main', controller.main.index);
  router.get('/is/ios', controller.home.isIOS);
  router.get('/is/android', controller.home.isAndroid);
};
