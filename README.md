## 启动服务端：

1. 安装 [nodejs](https://nodejs.org/en/download/) 和 [git](https://git-scm.com/downloads)
2. 执行 `git clone https://github.com/xuxihai123/shadowsocks-over-websocket.git` 命令
3. **进到本项目目录**，执行`npm install` 命令
4. 配置 config.json
5. 执行 `node server.js` 命令，启动成功
6. 使用 pm2 管理进程 `pm2 start server.js --name socketproxy` 启动
7. 使用 `netstat -tlnp` 查看端口启动是否成功

## 启动客户端：

### 命令行启动:

1. 安装 [nodejs](https://nodejs.org/en/download/) 和 [git](https://git-scm.com/downloads)
2. 执行 `git clone https://github.com/xuxihai123/shadowsocks-over-websocket.git` 命令
3. **进到本项目目录**，执行`npm install` 命令
4. 执行 `node local.js -s app名称.herokuapp.com -l 1080 -m 设置的加密算法 -k 设置的密码 -p 80` 命令，启动成功

## Chrome 浏览器配置

1. 下载 [Chrome](http://www.google.cn/chrome/browser/desktop/index.html) 浏览器插件 [SwitchyOmega](https://github.com/xuxihai123/shadowsocks-over-websocket/raw/master/extensions/SwitchyOmega.crx)

2. 安装 SwitchyOmega 插件：打开浏览器的扩展程序页面 [chrome://extensions](chrome://extensions)，把 SwitchyOmega.crx 文件拖放到浏览器扩展程序页面安装

3. 新建情景模式 `local-proxy`，配置 SwitchyOmega ：`代理协议：SOCKS5 代理服务器：127.0.0.1 代理端口：1080`，如下图：
   ![7](./imgs/7.png)

4. 配置 `auto switch` 情景模式，添加规则列表网址: <https://raw.githubusercontent.com/gfwlist/gfwlist/master/gfwlist.txt> 并更新情景模式，规则列表规则处的情景模式选中为上一步创建的 `local-proxy` ，配置如下图:
   ![8](./imgs/8.png)

5. 选中 `auto switch` 情景模式:
   ![9](./imgs/9.png)

6. 现在你就可以科学上网了
