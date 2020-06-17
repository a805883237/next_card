# next_card
ts,react,nextjs,ssr



## version

node v14.4.0


## 参考文献
> ![手把手带你用next搭建一个完善的react服务端渲染项目（集成antd、redux、样式解决方案)](https://juejin.im/post/5d5a54f0e51d4561af16dd19)

## error:

报错：
`Inline JavaScript is not enabled. Is it set in your options?`
解决方式：
`node_modules/less-loader/dist/index.js` 修改 `lessLoader`方法内 ，`options` 添加： `options.javascriptEnabled = true;`
