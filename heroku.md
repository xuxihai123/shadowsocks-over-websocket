# shadowsocks-over-websocket

基于 [shadowsocks](https://zh.wikipedia.org/zh-cn/Shadowsocks) 协议的翻墙工具 , 可部署在 [Heroku](https://www.heroku.com/) 平台上 , 实现免费科学上网

## 如何部署在 Heroku 平台上

### 1.准备工作

-   [Heroku](https://signup.heroku.com/) 注册
-   [GitHub](https://github.com/join?source=header-home) 注册

### 2.Fork [本项目](https://github.com/xuxihai123/shadowsocks-over-websocket) 到个人账号下

![1](./imgs/1.jpg)
进入 <https://github.com/xuxihai123/shadowsocks-over-websocket> 页面 ==> Fork

---

### 3.创建 [Heroku](https://dashboard.heroku.com/new?org=personal-apps) 应用

![2](./imgs/2.png)
登陆 Heroku 帐号，进入 [Dashboard](https://dashboard.heroku.com/apps) 页面 ==> Create New App ==> 输入 App Name ==> Create App

---

### 4.Heroku 帐号与 Github 帐号关联

![3](./imgs/3.jpg)
进入 Deploy 页面 ==> 选择 Deployment Method 为 Github ==> Connect to GitHub

---

### 5.选择要关联的 Github 项目

![4](./imgs/4.jpg)
选择 GitHub 帐号 ==> 查找 shadowsocks-over-websocket ==> Connect

---

### 6.部署 master 分支

![5](./imgs/5.jpg)

---

### 7.配置环境变量

![6](./imgs/6.png)
Setting 页面 ==> Reveal Config Vars

需要配置 METHOD(加密方法)，PASSWORD(密码，推荐使用`aes-256-cfb`)，SERVER_ADDRESS(`0.0.0.0`) 三个环境变量，支持以下加密方法:

-   rc4
-   rc4-md5
-   table
-   bf-cfb
-   des-cfb
-   rc2-cfb
-   idea-cfb
-   seed-cfb
-   cast5-cfb
-   aes-128-cfb
-   aes-192-cfb
-   aes-256-cfb
-   camellia-256-cfb
-   camellia-192-cfb
-   camellia-128-cfb

---
