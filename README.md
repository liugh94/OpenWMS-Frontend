<p align="center">
    <img width="150" src="./src/assets/imgs/nice-fish.png">
</p>

<h1 align="center">NiceFish</h1>

<div align="left">
NiceFish（美人鱼） 是一个系列项目，目标是示范前后端分离的开发模式:前端浏览器、移动端、Electron 环境中的各种开发模式；后端有两个版本：SpringBoot 版本和 SpringCloud 版本。
</div>

## OpenWMS-Frontend

这是 OpenWMS 项目的前端代码。

## 用法

    请先fork本项目
    git clone 你自己fork之后的项目路径
    cd OpenWMS-Frontend
    npm i -g cnpm --registry=https://registry.npm.taobao.org
    cnpm i -g @angular/cli
    cnpm install
    ng serve -e dev

打开你的浏览器，访问http://localhost:4200/

## 常见坑点

* 各种你懂的原因，中文开发者强烈建议使用 cnpm （淘宝发布的一款npm包装器，方便中文开发者避免一些神秘的问题）
* 如果你想让打包体积更小，请使用参数构建：ng serve --prod
* 构建最终结果：ng build --prod
* 如果之前装过@angular/cli 需要先卸载：npm uninstall -g @angular/cli
* 如果之前装过老版本的 angular-cli 需要先卸载：npm uninstall -g angular-cli
* 如果你之前已经尝试用npm install安装过 node 模块，请把 NiceFish 根目录下的 node_moduels 目录删掉重新 cnpm install
* 命令行删除 node_modules 速度更快，Windows 平台使用： rmdir /s/q node_modules ，*nix平台使用：sudo rm -rf node_modules
* 如果你需要把项目发布到其它类型的 Server 上，例如 Tomcat，需要对 Server 进行一些简单的配置才能支持 HTML5 下的 PushState 路由模式，请从以下链接里面查找对应的配置方式：https://github.com/angular-ui/ui-router/wiki/Frequently-Asked-Questions ，在
How to: Configure your server to work with html5Mode 这个小节里面把常见的 WEB 容器的配置方式都列举出来了，包括：IIS、Apache、nginx、NodeJS、Tomcat 全部都有。

## 主要依赖

- Angular 7.2
- PrimeNG 7.1
- Bootstrap 3.3.7
- Echarts 3.4.0
- ckeditor5-angular 1.0

## 切换不同的运行环境

在 src/environments 目录下提供了 3 份配置文件，分别对应 dev、mock 和 prod 环境。

ng serve 默认使用 dev 这份配置文件，如果需要切换到 mock 环境，请运行：

    ng serve -e mock

## HMR 支持

在开发状态，你可能不想每次修改代码之后都让浏览器全部刷新，你希望能“热替换”，所以有了 HRM 这个机制。

@angular/cli 在默认情况下不支持 HMR，所以这里我们手动进行了支持，具体做法请参考这里：https://medium.com/wizardnet972/hot-module-replacement-with-angular-cli-5fc7a3ae4a9c

以 HRM 的方式启动此项目请执行：

    npm run hmr

**特别注意**:最新的@angular/cli 6.x 版本已经内置了 HMR 支持，只要执行以下命令即可：

    ng serve --hmr

## 在线演示

- NiceFish 在阿里云上的演示地址: http://47.104.13.149:4200
- NiceFish-React 在gitee上的演示地址：https://mumu-osc.gitee.io/nicefish-react
- NiceFish-ionic 在github上的演示地址：https://damoqiongqiu.github.io/NiceFish-ionic/
- OpenWMS 在gitee上的演示地址：https://mumu-osc.gitee.io/openwms-frontend
- OpenWMS 在阿里云上的演示地址：http://47.104.80.251:4200

## 系列项目

* NiceFish：美人鱼，这是 Angular 版本的实现，前端基于 Angular 7.2 + PrimeNG 7.1.0。http://git.oschina.net/mumu-osc/NiceFish/
* NiceFish-React：这是 React 版的实现，界面外观完全相同。采用React Hooks 16.8.3 版本，使用TypeScript、Ant Design组件库以及Bootstrap v4.2.1 开发。
* nicefish-ionic：这是一个移动端的 demo，基于 ionic，此项目已支持 PWA。http://git.oschina.net/mumu-osc/nicefish-ionic
* NiceBlogElectron：这是一个基于 Electron 的桌面端项目，把 NiceFish 用 Electron 打包成了一个桌面端运行的程序。这是由 ZTE 中兴通讯的前端道友提供的，我 fork 了一个，有几个 node 模块的版本号老要改，如果您正在研究如何利用 Electron 开发桌面端应用，请参考这个项目，https://github.com/damoqiongqiu/NiceBlogElectron。
* nicefish-spring-cloud: https://gitee.com/mumu-osc/nicefish-spring-cloud ， 这是NiceFish的服务端代码，基于SpringCloud。已经完成了一些基本的功能，如 SpringSecurity+OAuth2+JWT 实现SSO，文章、用户、评论等的分页查询等。如果你需要与这个后端代码进行对接，请检出本项目的 for-spring-cloud 分支。
* OpenWMS：用来示范管理后台型系统的最佳实践，https://gitee.com/mumu-osc/OpenWMS-Frontend 。

## 打包体积分析

以下是项目 build 出来的体积：

<img src="./src/assets/imgs/4.png">

用 webpack-bundle-analyzer 分析之后可以看到各个模块在编译之后所占的体积：

<img src="./src/assets/imgs/0.png">

可以看到，主要是因为 ECharts 和 PrimeNG 占的体积比较大，建议您在使用的时候做一下异步，用不到的组件不要一股脑全部导入进来。

## 线上交流

<img src="/src/assets/imgs/qq-1.jpg" width="250"/>

<img src="/src/assets/imgs/wx-1.jpg" width="250"/>

## 开源许可证

MIT