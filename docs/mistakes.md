# 踩过的坑

- 202.03.15
  tsconfig 配置别名：

  ```json
  "moduleResolution": "node", // 不清楚
  "baseUrl": "./", // 一般为项目地址在当前路径的相对地址
  "paths": {
    "~/*": ["src/*"]
  },
  ```

- 2020.03.19
  直接在组建上取 state，ts 类型一直报错

  修复措施： 定义 props，state 与 dispatch 方法都是从 props 中获取
