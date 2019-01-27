# 文件夹说明

  1. 容器组件, 持有数据分发给 UI 组件;
  2. 容器组件下会有组件, 但是请限制好自己页面下组件的层级, 否则无法维护;

## 目录结构

```shell
├── pages
  ├── [page-name]: 页面名
    ├── index.js
    ├── store.js
    ├── page.vue
    ├── style.less
    ├── components: 页面单独使用的 UI 组件, 非通用
      ├── [component-name]: 组件名
        ├── index.js
        ├── component.vue
        ├── style.less
```