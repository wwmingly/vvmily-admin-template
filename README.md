# vvmily-admin-template

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


### Customize configuration 打包后部署到环境，element icon偶尔会出现乱码问题

```
// 通过使用 node-sass替代sass

npm uninstall sass

npm install node-sass@4.14.1 -D // 推荐4.14.1版本

```
注意：node-sass,有可能安装不成功，先执行下面语句再安装node-sass
set SASS_BINARY_SITE=https://npm.taobao.org/mirrors/node-sass/
 