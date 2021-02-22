// This file is created by egg-ts-helper@1.25.8
// Do not modify this file!!!!!!!!!

import 'egg';
import ExtendUnittestApplication = require('../../../app/extend/application.unittest');
type ExtendUnittestApplicationType = typeof ExtendUnittestApplication;
declare module 'egg' {
  interface Application extends ExtendUnittestApplicationType { }
}