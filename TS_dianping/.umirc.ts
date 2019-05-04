import { IConfig } from 'umi-types';
import routeConfig from './src/route.config.js';

// ref: https://umijs.org/config/
const config: IConfig =  {
  treeShaking: true,
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: true,
      dva: true,
      dynamicImport: false,
      title: 'TS_dianping',
      dll: true,
    }],
  ],
  // 约定式路由
  // routes: {
  //   exclude: [
  //     /models\//,
  //     /components\//,
  //     /services\//,
  //     /model\.(t|j)sx?$/,
  //   ],
  // },
  // 配置式路由， 
  routes: routeConfig,
  alias: {
    assets: `${__dirname}/src/assets`,
    components: `${__dirname}/src/components`,
    models: `${__dirname}/src/models`,
    utils: `${__dirname}/src/utils`,
    src: `${__dirname}/src`,
    services: `{${__dirname}/src/services}`
  }
}

export default config;
