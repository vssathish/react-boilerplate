import express from 'express';
import webpack from 'webpack';
import path from 'path';
import config from '../webpack.config.dev';
import open from 'open';
import compression from 'compression';

/*eslint-disable no-console */

const app = express();

const isDeveloping = process.env.NODE_ENV !== 'production';
const port = (isDeveloping) ? 3000 : 7101;

if (isDeveloping) {
	console.log('Running dev env');
	const compiler = webpack(config);

	app.use(require('webpack-dev-middleware')(compiler, {
	  noInfo: true,
	  publicPath: config.output.publicPath
	}));

	app.use(require('webpack-hot-middleware')(compiler));

	app.get('*', function (req, res) {
	  res.sendFile(path.join(__dirname, '../src/index.html'));
	});


} else {
	console.log('Running prod env');
	app.use(compression());
	app.use(express.static('dist'));

	app.get('*', function(req, res) {
	  res.sendFile(path.join(__dirname, '../dist/index.html'));
	});
}

app.listen(port, function (err) {
  if (err) {
    console.log(err);
  }

	if (isDeveloping) {
		open('http://localhost:3000');
	}
});
