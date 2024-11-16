/*
 * Cormac Taylor
 * I pledge my honor that I have abided by the Stevens Honor System.
 */
import fibRoutes from './fibonacci_prime.js';

const constructorMethod = (app) => {
  app.use('', fibRoutes);

  app.use('*', (_, res) => {
    res.redirect('/');
  });
};

export default constructorMethod;
