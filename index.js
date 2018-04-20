const express = require('express');
const path = require('path');
const chalk = require('chalk');

const webpackConfig = require('./webpack/dev.config.js');
const PORT = process.env.PORT || 3000;

const app = express();

addMiddleware(app, webpackConfig);

app.listen(PORT, err => {
  if (err) {
    return console.error(err.message);
  }
  console.log(`Server started ${chalk.green('✓')}`);
  console.log(`visit here: ${chalk.cyan(`http://localhost:${PORT}`)}`);
});

function addMiddleware(app, webpackConfig) {
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
    memoryFileSystem.readFile(
      path.join(compiler.outputPath, 'index.html'),
      (err, file) => {
        console.error(err);
        if (err) {
          res.status(500).json(err);
        } else {
          res.send(file.toString());
        }
      }
    );
  });
}
