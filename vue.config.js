module.exports = {
  css: { // 配置css模块
    loaderOptions: { // 向预处理器 Loader 传递配置选项
      less: { // 配置less（其他样式解析用法一致）
        modifyVars: {
          'layout-header-background': '#24292e',
          'primary-color': '#1890ff',                        // 全局主色
          'link-color': '#1890ff',                           // 链接色
          'success-color': '#52c41a',                        // 成功色
          'warning-color': '#faad14',                        // 警告色
          'error-color': '#f5222d',                          // 错误色
          'font-size-base': '14px',                          // 主字号
          'heading-color': 'rgba(0, 0, 0, .85)',             // 标题色
          'text-color': 'rgba(0, 0, 0, .65)',                // 主文本色
          'text-color-secondary ': 'rgba(0, 0, 0, .45)',     // 次文本色
          'disabled-color ': 'rgba(0, 0, 0, .25)',           // 失效色
          'border-radius-base': '4px',                       // 组件/浮层圆角
          'border-color-base': '#d9d9d9',                    // 边框色
          'box-shadow-base': '0 2px 8px rgba(0, 0, 0, .15)', // 浮层阴影
        },
        javascriptEnabled: true // 设置为true
      }
    }
  },
  devServer: {
    open: process.platform === 'darwin',
    host: '0.0.0.0',
    port: 8666,
    https: false,
    hotOnly: false,
    proxy: null, // 设置代理
    before: app => {}
  }
}