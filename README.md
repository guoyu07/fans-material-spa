# fans-material-app

🌱A Set of React App that Implement Google's Material Design for Fans.

## Install

安装完成 Fans 1.1 后，你是用 Composer 安装这个 SPA：

```shell
composer require medz/fans-material-spa
```

依赖完成后，你需要运行：

```shell
php fans vendor:publish --provider="\Medz\Fans\Material\Providers\AppServiceProvider"
```

然后打开 `config/app.php` 文件找到 `spa` 配置项，修改为 `medz/fans-material-spa`。

好了，安装完成，你访问一下你的 Fans 1.1 Try it!
