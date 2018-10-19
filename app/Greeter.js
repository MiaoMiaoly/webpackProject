import React, {Component} from 'react'
import config from './config.json';
import styles from './Greeter.css';//导入
// var config = require('./config.json');
// 依据CommonJS规范导出这个函数为一个模块
// module.exports = function() {
//   var greet = document.createElement('div');
//   greet.textContent = config.greetText;
//   return greet;
// };

class Greeter extends Component{
  render() {
    return (
      <div className={styles.root}>
        {config.greetText}
      </div>
    );
  }
}
export default Greeter