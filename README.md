# hapi-frequency
hapi频率限制插件

### 配置插件
```
server.register({
  plugin: require('hapi-frequency'),
  options: {
    connection: 'default',
    modelName: 'Frequency',
    collectionName: 'frequency'
  }
})
```
## 声明插件依赖
```
server.dependency('hapi-frequency', async () => {
  const { validate } = server.plugins['hapi-frequency']
  // 1. 验证频率
  const condition1 = await validate(
    {
      mail,
      action,
      uid
    },
    {
      amount: 5,
      interval: 1800 * 1000
    }
  )
  const condition2 = await validate(
    {
      uid,
      action
    },
    {
      amount: 5,
      interval: 1800 * 1000
    }
  )
  // 发送邮件
  PostOffice
})
```

