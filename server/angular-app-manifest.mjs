
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/home",
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/home"
  },
  {
    "renderMode": 2,
    "route": "/resume"
  },
  {
    "renderMode": 2,
    "route": "/about-me"
  },
  {
    "renderMode": 2,
    "route": "/schedule"
  },
  {
    "renderMode": 2,
    "route": "/personal-project"
  },
  {
    "renderMode": 2,
    "route": "/downward-spiral"
  },
  {
    "renderMode": 2,
    "route": "/myst"
  },
  {
    "renderMode": 2,
    "redirectTo": "/home",
    "route": "/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 6517, hash: '43c224ea9a1f3b989fa461a6abf93ad5e8aec710c3263ae73434e2a25756e2f1', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 2368, hash: '6c080e770f656a345d318dbd5b1204ba76ff153a8588b7a7407a73c5e1375c80', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'resume/index.html': {size: 24498, hash: '59797168c61c71b10aafee74125b8bb05b9a04046c337f3b2485aacfa52d38db', text: () => import('./assets-chunks/resume_index_html.mjs').then(m => m.default)},
    'schedule/index.html': {size: 35245, hash: 'bb0e4d0e2c95c2efc9a6456158919ab00c4c0f26e539da1545ea84c7564da1c9', text: () => import('./assets-chunks/schedule_index_html.mjs').then(m => m.default)},
    'home/index.html': {size: 30277, hash: '5c97752fa2449700823f2e2f529d18a6e25e7d5651224b3cfd04ffe1be0590d3', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'personal-project/index.html': {size: 25170, hash: 'b243ea5ea214c14322780c54f37cd5f547b56890a590ccff532b2ee9acf23144', text: () => import('./assets-chunks/personal-project_index_html.mjs').then(m => m.default)},
    'about-me/index.html': {size: 25224, hash: '247235255f141445059421d34947395fed7796989554a26ade40e0f199f942cf', text: () => import('./assets-chunks/about-me_index_html.mjs').then(m => m.default)},
    'myst/index.html': {size: 21584, hash: '9b4a1699720b3f80fa6ef559b386b21833247d5ac6859284310c58bd24d3bfd7', text: () => import('./assets-chunks/myst_index_html.mjs').then(m => m.default)},
    'downward-spiral/index.html': {size: 29680, hash: '154a7c8a9980bdf3864bf15e5e9b1050fb4f64ec06b7e1329734c819778716f3', text: () => import('./assets-chunks/downward-spiral_index_html.mjs').then(m => m.default)},
    'styles-IIUAOPIS.css': {size: 232763, hash: '529j0s5ZTv8', text: () => import('./assets-chunks/styles-IIUAOPIS_css.mjs').then(m => m.default)}
  },
};
