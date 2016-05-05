---
layout: post
title: "How to setup a React project Hacking with React style"
description: How to setup a React project with web-dev-server, babel, and more. Hacking with React style to get you up and running as fast as possible.
permalink: /how-to-setup-a-react-project-hacking-with-react-style
---

This guide will guide you on how to setup a project with the [http://www.hackingwithreact.com/](http://www.hackingwithreact.com/) style. If you are interested in a highly interactive learning approach to React I would highly recommend it. 

You can follow along by typing the commands below by hand. Or you can go to [this repository](https://github.com/Zyst/react-hacking-with-react-kickstarter) and fork the skeleton. Although I would recommend updating the libraries in `package.json`.

Without further ado, lets begin!

For our base setup just run these commands:

{% highlight bash %}
mkdir project-name

cd project-name

npm init -y

mkdir __tests__

mkdir src

mkdir dist
{% endhighlight %}

Then copy and paste this into your Terminal:

{% highlight bash %}
npm install --save-dev webpack webpack-dev-server react-hot-loader &&
npm install --save-dev babel-core babel-loader &&
npm install --save-dev babel-preset-es2015 babel-preset-react &&
npm install --save react react-dom history react-router &&
npm install -g webpack webpack-dev-server &&
npm install --save-dev jest-cli babel-jest react-addons-test-utils &&
npm install --save-dev eslint-config-airbnb
{% endhighlight %}

Open **package.json** and make it look like this by replacing and adding `scripts`, `babel`, and `jest`, but I would recommend keeping the updated library versions:

**package.json**
{% highlight json %}
{
  "name": "react-hacking-with-react-kickstarter",
  "version": "1.0.0",
  "description": "A project skeleton to start creating small React applications with the Hacking with React style",
  "main": "index.js",
  "scripts": {
    "test": "jest --verbose",
    "lint": "eslint src"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/Zyst/react-hacking-with-react-kickstarter.git"
  },
  "keywords": [
    "react",
    "kickstarter",
    "hacking with react"
  ],
  "author": "Zyst",
  "license": "MIT",
  "babel": {
    "presets": [
      "es2015",
      "react"
    ]
  },
  "bugs": {
    "url": "https://github.com/Zyst/react-hacking-with-react-kickstarter/issues"
  },
  "homepage": "https://github.com/Zyst/react-hacking-with-react-kickstarter#readme",
  "jest": {
    "scriptPreprocessor": "<rootDir>/node_modules/babel-jest",
    "unmockedModulePathPatterns": [
      "<rootDir>/node_modules/react",
      "<rootDir>/node_modules/react-dom",
      "<rootDir>/node_modules/react-addons-test-utils",
      "<rootDir>/node_modules/fbjs"
    ]
  },
  "devDependencies": {
    "babel-core": "^6.8.0",
    "babel-jest": "^12.0.2",
    "babel-loader": "^6.2.4",
    "babel-preset-es2015": "^6.6.0",
    "babel-preset-react": "^6.5.0",
    "eslint-config-airbnb": "^8.0.0",
    "jest-cli": "^12.0.2",
    "react-addons-test-utils": "^15.0.2",
    "react-hot-loader": "^1.3.0",
    "webpack": "^1.13.0",
    "webpack-dev-server": "^1.14.1"
  },
  "dependencies": {
    "history": "^2.1.1",
    "react": "^15.0.2",
    "react-dom": "^15.0.2",
    "react-router": "^2.4.0"
  }
}
{% endhighlight %}

Now create a file in root called **webpack.config.js** and fill it with this:

**webpack.config.js**
{% highlight js %}
var webpack = require('webpack');

module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './src/index.js'
  ],
  module: {
    loaders: [{
      test: /\.js?$/,
      exclude: /node_modules/,
      loader: 'react-hot!babel'
    }]
  },
  resolve: {
    extensions: ['', '.js']
  },
  output: {
    path: 'dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './dist',
    hot: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};
{% endhighlight %}

Create **.eslintrc** file in your root folder and add the following information:

**.eslintrc**
{% highlight json %}
{
    "parser": "babel-eslint",
    "env": {
        "browser": true,
        "node": true
    },
    "extends": "airbnb",
    "rules": {
        "quotes": [2, "single"]
    }
}
{% endhighlight %}

Create **index.html** inside of the `dist` directory:

**index.html**
{% highlight html %}
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Title</title>
    </head>
    <body>
        <div id="app"></div>
        <script src="bundle.js"></script>
    </body>
</html>
{% endhighlight %}

Create **index.js** inside of the `src` folder:

**index.js**
{% highlight js %}
console.log('JS is working!')
{% endhighlight %}

And your skeleton is done! Now you can get started writting Tests in your `__test__` directory and running them with `npm run test`, you can run your site by typing `webpack-dev-server`, and you can run `eslint` by typing `npm run lint`. Enjoy!
