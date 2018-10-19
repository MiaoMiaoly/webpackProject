const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// __dirname”是node.js中的一个全局变量，它指向当前执行脚本所在的目录。
module.exports = {
  devtool: 'eval-source-map',//生成Source Maps（使调试更容易）
  entry:  __dirname + "/app/main.js",//已多次提及的唯一入口文件
  output: {
    path: __dirname + "/build",//打包后的文件存放的地方
    filename: "bundle.js"//打包后输出文件的文件名
  },
  /*使用webpack构建本地服务器
  让你的浏览器监听你的代码的修改，并自动刷新显示修改后的结果，
  其实Webpack提供一个可选的本地开发服务器，这个本地服务器基于node.js构建，
  可以实现你想要的这些功能，
  不过它是一个单独的组件，在webpack中进行配置之前需要单独安装它作为项目依赖
  npm install --save-dev webpack-dev-server
  */
  devServer: {
    contentBase: "./build",//本地服务器所加载的页面所在的目录
    historyApiFallback: true,//不跳转
    inline: true//实时刷新
  } ,
  /*
    Babel的安装与配置
    用得最多的是解析Es6的babel-env-preset包和解析JSX的babel-preset-react包
    npm一次性安装多个依赖模块，模块之间用空格隔开
    npm install --save-dev babel-core babel-loader babel-preset-env babel-preset-react
    npm install --save-dev style-loader css-loader
   在webpack中配置Babel的方法如下:
  */
  module: {
    rules: [
        {
            test: /(\.jsx|\.js)$/,
            use: {
                loader: "babel-loader",
            },
            exclude: /node_modules/
        },
        {
          test: /\.css$/,
          use: [
              {
                  loader: "style-loader"
              }, 
              {
                  loader: "css-loader",
                  options: {
                    modules: true, // 指定启用css modules
                    localIdentName: '[name]__[local]--[hash:base64:5]' // 指定css的类名格式
                }
              },
              {
                loader: "postcss-loader"
              }
          ]
      }
    ],
  },
  plugins: [
    new webpack.BannerPlugin('版权所有，翻版必究'),
    new HtmlWebpackPlugin({
      template: __dirname + "/app/index.tmpl.html"//new 一个这个插件的实例，并传入相关的参数
    }),
    new webpack.HotModuleReplacementPlugin()//热加载插件
 ],
}
