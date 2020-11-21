## 使用：

1. 文件夹`_sm-crypto@0.2.1`@`sm-crypto和sm-crypto`直接放入项目`node_modules`目录里
2. 将`mine.js`文件放入`utils`目录里，待用
3. 将`mine.js`import到入口文件`main.js`，然后`Vue.prototype.encrypt = sm2.encrypt;`挂载到this上





## 调用加密：



console.log(this.encrypt("3123123132"))