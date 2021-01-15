## 如何发布组件

#### 发布周期

- 修订版本号：每周末会进行日常 bugfix 更新。（如果有紧急的 bugfix，则任何时候都可发布）
- 次版本号：带有新特性的向下兼容的版本。
- 主版本号：含有破坏性更新和新特性，不在发布周期内。

在命令行中执行以下命令

```bash
$ npm version patch
# OR
$ yarn version patch
```

通过以下命令可以查看可以使用的命令：

```bash
npm version -h
```

```bash
major: 主版本号
premajor: 预备主版本
minor: 次版本号
preminor: 预备次版本
patch: 修订号
prepatch: 预备修订版
prerelease: 预发布版本
```

执行下面命令进行版本号的调整

```bash
$ npm version patch/minor/major
```

然后执行

```bash
$ npm run pub
# OR
$ yarn pub
```

以上命令会生成 `es` 、 `lib` 和 `dist` 文件夹，并发布到https://npm.aixuexi.com
