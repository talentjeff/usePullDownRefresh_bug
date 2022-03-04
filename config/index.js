const { APP_ENV } = process.env;
const path = require("path");

const config = {
  projectName: "terminal-h5",
  date: "2022-1-4",
  designWidth: 750,
  deviceRatio: {
    640: 2.34 / 2,
    750: 1,
    828: 1.81 / 2
  },
  sourceRoot: "src",
  outputRoot: "dist",
  plugins: [],
  defineConstants: {
    LINK_ENV: JSON.stringify({
      env: {
        app: APP_ENV
      }
    })
  },
  copy: {
    patterns: [],
    options: {}
  },
  framework: "react",
  mini: {
    postcss: {
      pxtransform: {
        enable: true,
        config: {}
      },
      url: {
        enable: true,
        config: {
          limit: 1024 // 设定转换尺寸上限
        }
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: "module", // 转换模式，取值为 global/module
          generateScopedName: "[name]__[local]___[hash:base64:5]"
        }
      }
    }
  },
  alias: {
    "@": path.resolve(__dirname, "..", "src"),
  },
  h5: {
    publicPath: process.env.NODE_ENV === "development" ? "/wxtest/" : "./",
    staticDirectory: "static",
    postcss: {
      autoprefixer: {
        enable: true,
        config: {}
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: "module", // 转换模式，取值为 global/module
          generateScopedName: "[name]__[local]___[hash:base64:5]"
        }
      }
    },
    output: {
      filename: "js/[name].[hash].js",
      chunkFilename: "js/[name].[chunkhash].js"
    },
    miniCssExtractPluginOption: {
      filename: "css/[name].[hash].css",
      chunkFilename: "css/[name].[chunkhash].css"
    }
  }
};

module.exports = function (merge) {
  if (process.env.APP_ENV === "qa") {
    console.log(process.env.APP_ENV);

    return merge({}, config, require("./qa"));
  }
  if (process.env.APP_ENV === "prod2") {
    console.log(process.env.APP_ENV);

    return merge({}, config, require("./prod2"));
  }
  if (process.env.APP_ENV === "dev") {
    console.log(process.env.APP_ENV);

    return merge({}, config, require("./dev"));
  }
  console.log(process.env.APP_ENV);
  return merge({}, config, require("./prod"));
};
