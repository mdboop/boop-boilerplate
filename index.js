const express = require('express');
const logger = require('./server/logger');
const path = require('path');

const isDev = process.env.NODE_ENV !== 'production';
const PORT = process.env.PORT || 3000;

const app = express();

setup(app);

app.listen(PORT, (err) => {
  if (err) {
    return logger.error(err.message);
  }
  logger.booted(PORT);
});

function addSharedMiddlewares(app) {}

function addDevMiddlewares(app, webpackConfig) {
  const webpack = require('webpack');
  const webpackHotMiddleware = require('webpack-hot-middleware');
  const compiler = webpack(webpackConfig);
  const webpackDevMiddleware = require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: webpackConfig.output.publicPath,
    silent: true,
    stats: 'errors-only',
  });

  app.use(webpackDevMiddleware);
  app.use(webpackHotMiddleware(compiler));

  const memoryFileSystem = webpackDevMiddleware.fileSystem;

  app.get('*', (req, res) => {
    memoryFileSystem.readFile(path.join(compiler.outputPath, 'index.html'), (err, file) => {
      console.log(err);
      if (err) {
        res.status(500).json(err);
      } else {
        res.send(file.toString());
      }
    });
  });

};

function addProdMiddlewares(app) {
  const publicPath = '/';
  const outputPath = path.resolve(process.cwd(), 'dist');

  app.use(compression());
  app.use(publicPath, express.static(outputPath));
};

function setup(app) {
  const isProd = process.env.NODE_ENV === 'production';

  if (isProd) {
    addProdMiddlewares(app, options);
  } else {
    const webpackConfig = require('./webpack/dev.config.js');
    addDevMiddlewares(app, webpackConfig);
  }

  addSharedMiddlewares(app);

  return app;
};
