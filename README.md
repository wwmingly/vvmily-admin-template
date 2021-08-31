# vvmily-admin-template

    基于Vue+Router+Vuex+ElementUI，搭建简易版vue-element-admin后端管理系统平台
    包含登录、权限校验、菜单控制等等功能。

## 安装依赖
```
npm install
```

### 项目启动
```
npm run serve
```

### 项目打包
```
npm run build
```

### 检验文件
```
npm run lint
```

### 打包后部署到环境，element icon偶尔会出现乱码问题

```
// 通过使用 node-sass替代sass

npm uninstall sass

npm install node-sass@4.14.1 -D // 推荐4.14.1版本

```
注意：node-sass,有可能安装不成功，先执行下面语句再安装node-sass
set SASS_BINARY_SITE=https://npm.taobao.org/mirrors/node-sass/
 