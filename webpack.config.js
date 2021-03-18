const path = require('path');
//html-webpack-plugin の読み込み
const HtmlWebpackPlugin = require('html-webpack-plugin');
//mini-css-extract-plugin の読み込み
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
//optimize-css-assets-webpack-plugin の読み込み
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
//JavaScript の圧縮用のプラグイン TerserPlugin の読み込み
const TerserPlugin = require('terser-webpack-plugin');
 
module.exports = {
  //エントリポイント（入力ファイル）
  entry: './src/index.js',  
  //出力先
  output: { 
    filename: 'main.js',
    path: path.resolve(__dirname, 'public'),
  },
  //プラグインの設定
  plugins: [
    new MiniCssExtractPlugin({
      //出力するスタイルシートの名前
      filename: 'style.css',
    }),
    //html-webpack-plugin の設定
    new HtmlWebpackPlugin({
      //<title> 要素を指定
      title: 'ゴブレットゴブラーズ',
      //ファイル末尾にハッシュを追加
      hash: true,
    }),
  ],
  //optimization プロパティ
  optimization: {
    //圧縮方法（圧縮に使うプラグイン）を変更
    minimizer: [
      //JavaScript 用の圧縮プラグイン
      new TerserPlugin({}),
      //CSS 用の圧縮プラグイン
      new OptimizeCSSAssetsPlugin({})
    ],
  },
  module: {
    rules: [
      {
        // CSS のローダー
        //ローダーの処理対象ファイル（拡張子 .css）
        test: /\.(scss|sass|css)$/i,
        use: [
          // CSSファイルを抽出するように MiniCssExtractPlugin のローダーを指定
          {
            loader: MiniCssExtractPlugin.loader,
          },
          // CSS を CommonJS に変換するローダー
          'css-loader',
          // Sass をコンパイルするローダー
          'sass-loader',
        ],
      },

      //file-loader の設定
      {
        // 対象となるファイルの拡張子
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          {
            //画像を出力フォルダーにコピーするローダー
            loader: 'file-loader',
            options: {
              // 画像ファイルの名前とパスの設定
              name: './images/[name].[ext]'
            }
          }
        ],
      },


      {
        // Babel のローダーの設定
        //対象のファイルの拡張子
        test: /\.(js|mjs|jsx)$/,
        //対象外とするフォルダ
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/preset-env',
                '@babel/preset-react', 
              ]
            }
          }
        ]
      }
    ]
  },
  //webpack-dev-server の設定
  devServer: {
    //ルートディレクトリの指定
    contentBase: path.join(__dirname, 'dist'),
    //サーバー起動時にブラウザを自動的に起動
    open: true,
    // ルートディレクトリのファイルを監視
    watchContentBase: true,
    // ポート番号を変更
    port: 3000,
    //バンドルされたファイルを出力する（実際に書き出す）には以下のコメントアウトを外す
    //writeToDisk: true
  }
};
