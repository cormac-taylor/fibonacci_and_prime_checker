/*
 * Cormac Taylor
 * I pledge my honor that I have abided by the Stevens Honor System.
 */
import fibRoutes from './fibonacci_prime.js';
import {static as staticDir} from 'express';

const constructorMethod = (app) => {
  app.use('', fibRoutes);
  app.use('/public', staticDir('public'));

  app.use('*', (_, res) => {
    res.redirect('/');
  });
};

export default constructorMethod;
