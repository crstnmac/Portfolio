/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "32027afccdb57360389023f27578a94f"
  },
  {
    "url": "404.svg",
    "revision": "6695af9986412e75985538255ca87866"
  },
  {
    "url": "404/index.html",
    "revision": "32027afccdb57360389023f27578a94f"
  },
  {
    "url": "api-using-node-expressjs/index.html",
    "revision": "aad5c4a95d16f5978d487ceb5ad6bcd3"
  },
  {
    "url": "assets/css/0.styles.e472757b.css",
    "revision": "ea1e44a2924429d2d9cc3eb46646c8a2"
  },
  {
    "url": "assets/data/404/index.json",
    "revision": "6f43c8bf2b4b08df1c738d6811608065"
  },
  {
    "url": "assets/data/api-using-node-expressjs/index.json",
    "revision": "9903c18f05bd0bfee3d1c2c26494b69d"
  },
  {
    "url": "assets/data/blog/index.json",
    "revision": "7d09871290c91b5fdf308775c408e6e3"
  },
  {
    "url": "assets/data/how-to-port-from-vscode-to-vscodium/index.json",
    "revision": "028b713ae08d3397d2a405ea1d3548d3"
  },
  {
    "url": "assets/data/index.json",
    "revision": "6f43c8bf2b4b08df1c738d6811608065"
  },
  {
    "url": "assets/data/introduction-to-gridsome/index.json",
    "revision": "e85b6af2f7ba14e7001e58ac6047fa6d"
  },
  {
    "url": "assets/data/success/index.json",
    "revision": "6f43c8bf2b4b08df1c738d6811608065"
  },
  {
    "url": "assets/data/tag/backend/index.json",
    "revision": "679b482ea8f43929bc9f90deb92a15ff"
  },
  {
    "url": "assets/data/tag/coding/index.json",
    "revision": "62cfe100d726bd9dc248078b35350abe"
  },
  {
    "url": "assets/data/tag/expressjs/index.json",
    "revision": "fa74e3d17de4d0aee6253eebf617fce8"
  },
  {
    "url": "assets/data/tag/FOSS/index.json",
    "revision": "19c3dcf5d41fc0545c467feb6d1fa032"
  },
  {
    "url": "assets/data/tag/Free Software/index.json",
    "revision": "f282c2287fc014875d633ebbd5355602"
  },
  {
    "url": "assets/data/tag/frontend/index.json",
    "revision": "9ddda53c2576f9e56e04756a101746d0"
  },
  {
    "url": "assets/data/tag/nodejs/index.json",
    "revision": "86fb43d62209064dc9650a2f0c848acd"
  },
  {
    "url": "assets/data/tag/VSCodium/index.json",
    "revision": "2cc774e2666badab98f88b9e0c13e017"
  },
  {
    "url": "assets/data/tag/vue/index.json",
    "revision": "976bcc7305648d490503659badc625e0"
  },
  {
    "url": "assets/img/favicon-144.png",
    "revision": "dce0d3d450c88c93d1fa107f5807eec6"
  },
  {
    "url": "assets/img/favicon-192.png",
    "revision": "c2e35e09c29d8adff11270d4218c4610"
  },
  {
    "url": "assets/img/favicon-48.png",
    "revision": "07d8fe3c51de416d0533044e2a451b22"
  },
  {
    "url": "assets/img/favicon-512.png",
    "revision": "15f4ba8f6205249382917a7b77cc9474"
  },
  {
    "url": "assets/img/favicon-72.png",
    "revision": "8f958796756a0046cd48351ab1920820"
  },
  {
    "url": "assets/img/favicon-96.png",
    "revision": "68b17e2b1fb870af5a18d52c6286274f"
  },
  {
    "url": "assets/js/app.a9b9f68c.js",
    "revision": "773fd73617f0fd09d8f41d8aa6687564"
  },
  {
    "url": "assets/js/page--src--pages--404-vue.c50c6018.js",
    "revision": "b5f2a0370031488b3aa51dbad609e140"
  },
  {
    "url": "assets/js/page--src--pages--blog-vue.d9e3b5ce.js",
    "revision": "f8eb995d14dac945a86725ab52fd8555"
  },
  {
    "url": "assets/js/page--src--pages--index-vue.74339a15.js",
    "revision": "ccd540ed6d6d9fb23e10ea9cc26604f1"
  },
  {
    "url": "assets/js/page--src--pages--success-vue.05db7221.js",
    "revision": "0c8e10f6d0b4224bb44d230c82ca6fd9"
  },
  {
    "url": "assets/js/page--src--templates--post-vue.d6a45971.js",
    "revision": "2b2b6ede72400b2e403b988e3949c523"
  },
  {
    "url": "assets/js/page--src--templates--tag-vue.9db586cb.js",
    "revision": "c45a507b24d1b4ac1bf07227e9ad4332"
  },
  {
    "url": "assets/static/404.50d624b.6695af9986412e75985538255ca87866.svg",
    "revision": "6695af9986412e75985538255ca87866"
  },
  {
    "url": "assets/static/404.82a2fbd.6695af9986412e75985538255ca87866.svg",
    "revision": "6695af9986412e75985538255ca87866"
  },
  {
    "url": "assets/static/avatar.175c05c.522ab58be64f1117fe3e067b77584520.jpg",
    "revision": "f972946dd67d9bd46439fff0ae203b36"
  },
  {
    "url": "assets/static/avatar.82a2fbd.522ab58be64f1117fe3e067b77584520.jpg",
    "revision": "5a1935715d9fdc7cc0e05ab90a50ed59"
  },
  {
    "url": "assets/static/background.7c86909.9623040e05af8072592f22db9a52345a.jpg",
    "revision": "e376c88f300d3110be6e278263da215b"
  },
  {
    "url": "assets/static/background.82a2fbd.9623040e05af8072592f22db9a52345a.jpg",
    "revision": "198e471c4bfc9d02ed24f33044ed259e"
  },
  {
    "url": "assets/static/blog_bg_1.82a2fbd.7132e1ecaa29dd534fc8dc790ef09f53.jpg",
    "revision": "8d0b4b11568811aba691547432d7d4dd"
  },
  {
    "url": "assets/static/blog_bg_1.cbab2cf.7132e1ecaa29dd534fc8dc790ef09f53.jpg",
    "revision": "444a6b47db27f2d5a01f9097571c5a0c"
  },
  {
    "url": "assets/static/code_review.a3a5e43.33e5ffc8eee392ccb92d6aaa22b7255a.svg",
    "revision": "33e5ffc8eee392ccb92d6aaa22b7255a"
  },
  {
    "url": "assets/static/developer.c0c83f9.a9f50d4949dfcd05e3b62f2cccb6df21.svg",
    "revision": "a9f50d4949dfcd05e3b62f2cccb6df21"
  },
  {
    "url": "assets/static/favicon.1539b60.23af507ef9912a4a456467b808818ec6.png",
    "revision": "15c3953f88a7186765bfe5e12cf62f84"
  },
  {
    "url": "assets/static/favicon.62d22cb.23af507ef9912a4a456467b808818ec6.png",
    "revision": "1bed6fb914637e6f6dc7a36960c19cda"
  },
  {
    "url": "assets/static/favicon.7b22250.23af507ef9912a4a456467b808818ec6.png",
    "revision": "d44a0db29c2b1b51785f5d62bfd23351"
  },
  {
    "url": "assets/static/favicon.ac8d93a.23af507ef9912a4a456467b808818ec6.png",
    "revision": "1f25c4965a921c576c4e5c71c040e95f"
  },
  {
    "url": "assets/static/favicon.b9532cc.23af507ef9912a4a456467b808818ec6.png",
    "revision": "5e55fd796cc39585d3363257e1407441"
  },
  {
    "url": "assets/static/favicon.ce0531f.23af507ef9912a4a456467b808818ec6.png",
    "revision": "5154d344e21bbe9f79e2e90f14d01909"
  },
  {
    "url": "assets/static/favicon.dc0cdc5.23af507ef9912a4a456467b808818ec6.png",
    "revision": "f8eb49f2731223b418c3293ebf774a1d"
  },
  {
    "url": "assets/static/favicon.f22e9f3.23af507ef9912a4a456467b808818ec6.png",
    "revision": "837fa2bcf46daa1cb2e829cdbc5be698"
  },
  {
    "url": "assets/static/favicon.png",
    "revision": "23af507ef9912a4a456467b808818ec6"
  },
  {
    "url": "assets/static/http-methods.744fc6e.bbe9e5dd253b89104e5a350975277007.jpg",
    "revision": "41bd19827c97b797f3115d6e8b49bb89"
  },
  {
    "url": "assets/static/http-methods.82a2fbd.bbe9e5dd253b89104e5a350975277007.jpg",
    "revision": "a4362b3249ad5fbc16390f00a181dca6"
  },
  {
    "url": "assets/static/mind_map.4d6b624.518225547672828ae4b79dd4eae54eae.svg",
    "revision": "518225547672828ae4b79dd4eae54eae"
  },
  {
    "url": "assets/static/node-api-express.5306902.9a888d533630940d0dd6eea65dabea21.png",
    "revision": "8cd1730b5b8e2b8dd20e7596c6eeaf34"
  },
  {
    "url": "assets/static/node-api-express.82a2fbd.9a888d533630940d0dd6eea65dabea21.png",
    "revision": "58f76c87b2c98b0b191640e8b319dcdf"
  },
  {
    "url": "assets/static/thankyou.82a2fbd.ac1b9c8d06a3168baba728ca67becbf1.svg",
    "revision": "ac1b9c8d06a3168baba728ca67becbf1"
  },
  {
    "url": "assets/static/thankyou.bb4c566.ac1b9c8d06a3168baba728ca67becbf1.svg",
    "revision": "ac1b9c8d06a3168baba728ca67becbf1"
  },
  {
    "url": "assets/static/vscodium.82a2fbd.85addd16634d5152494232ffa1b00a11.png",
    "revision": "37d9e33ceed8824a3bcf10fcc480afdb"
  },
  {
    "url": "assets/static/vscodium.978a99b.85addd16634d5152494232ffa1b00a11.png",
    "revision": "976db30d31dfc13f7669e620bf4a1ba6"
  },
  {
    "url": "avatar.jpg",
    "revision": "522ab58be64f1117fe3e067b77584520"
  },
  {
    "url": "blog/index.html",
    "revision": "5cc01cef16420b13266960d2b0549fb0"
  },
  {
    "url": "code_review.svg",
    "revision": "33e5ffc8eee392ccb92d6aaa22b7255a"
  },
  {
    "url": "developer.svg",
    "revision": "a9f50d4949dfcd05e3b62f2cccb6df21"
  },
  {
    "url": "flutter-clock.jpeg",
    "revision": "520d17edac6af311abcadf5f1bfdd899"
  },
  {
    "url": "glug.png",
    "revision": "bb5bfc20fc92a2884947aa44f6ceb07e"
  },
  {
    "url": "how-to-port-from-vscode-to-vscodium/index.html",
    "revision": "3cf887c8728e4612d2dada06d4a23b25"
  },
  {
    "url": "index.html",
    "revision": "4f3ec8d63861002bd9d823d243498c0c"
  },
  {
    "url": "introduction-to-gridsome/index.html",
    "revision": "575927a748645b10c02d6400ec351fda"
  },
  {
    "url": "logo_dark_mode.svg",
    "revision": "3d1543958f0aff173defc0f54c8a8808"
  },
  {
    "url": "logo.svg",
    "revision": "715d411d6f5b48c08acc49d691319f4b"
  },
  {
    "url": "manifest.json",
    "revision": "56d7fbb8f9af2413557019a403f2f0bf"
  },
  {
    "url": "mind_map.svg",
    "revision": "518225547672828ae4b79dd4eae54eae"
  },
  {
    "url": "search.json",
    "revision": "56a67851445c13dccb9e2d9e6c25a35f"
  },
  {
    "url": "success/index.html",
    "revision": "3e67b21b3ea48accbb60af5729562767"
  },
  {
    "url": "tag/backend/index.html",
    "revision": "57e17c25d7782c9688ca92a1b9b429dd"
  },
  {
    "url": "tag/coding/index.html",
    "revision": "9fc3d458e8ade32478c97d0b701e542d"
  },
  {
    "url": "tag/expressjs/index.html",
    "revision": "c84cc4895e46e3e99b2d809e4429dfb1"
  },
  {
    "url": "tag/FOSS/index.html",
    "revision": "7979299e1bf03ef48a232119c3ba8429"
  },
  {
    "url": "tag/Free Software/index.html",
    "revision": "b4a92c2ff0fc1642df209fb09eaf5074"
  },
  {
    "url": "tag/frontend/index.html",
    "revision": "c33b2e8e9df98b95144cc427eb2cc295"
  },
  {
    "url": "tag/nodejs/index.html",
    "revision": "9f6d71d063c7eb26fcf82b8e93880cd3"
  },
  {
    "url": "tag/VSCodium/index.html",
    "revision": "799fef1936b711672e98cef45cdfd4ce"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "b5de45f3424bef4a6208ffe397481a29"
  },
  {
    "url": "thankyou.svg",
    "revision": "ac1b9c8d06a3168baba728ca67becbf1"
  },
  {
    "url": "weamo.png",
    "revision": "7d7df6f47877b2a35d12bf5dbde5f39c"
  },
  {
    "url": "404",
    "revision": "28f25f53f5ce5d7c39f9df9ad1964986"
  },
  {
    "url": "tag/backend",
    "revision": "ebac8685cd7e7f6e73e8e1c7f8bac267"
  },
  {
    "url": "tag/nodejs",
    "revision": "0a4a0ce3bc76b88880437cec9b0e11bd"
  },
  {
    "url": "tag/expressjs",
    "revision": "505e5226ba14490ba2afade374dafac9"
  },
  {
    "url": "tag/frontend",
    "revision": "0e1248d232cf19b554e28e841bfa4f3c"
  },
  {
    "url": "tag/coding",
    "revision": "08845b3e464c17bbddd8eaf49406725b"
  },
  {
    "url": "tag/vue",
    "revision": "4ca12108a28b243641984cbe07d758a3"
  },
  {
    "url": "tag/FOSS",
    "revision": "0f01c456fc68d6bc72cfa5922be928ee"
  },
  {
    "url": "tag/VSCodium",
    "revision": "1d420d5989e4f3693db930d985185d26"
  },
  {
    "url": "tag/Free%20Software",
    "revision": "18de7e3bf07897d03696609afeba7dde"
  },
  {
    "url": "blog",
    "revision": "4ea7a794e4d7b7503ac520689daeb20b"
  },
  {
    "url": "success",
    "revision": "df1c766baaf2eaf4afa9be530ff414fa"
  },
  {
    "url": "how-to-port-from-vscode-to-vscodium",
    "revision": "acc86b080b9e6d81d2b00bce199729c1"
  },
  {
    "url": "introduction-to-gridsome",
    "revision": "2f6ea350db48d633c0aa21509569f7dd"
  },
  {
    "url": "api-using-node-expressjs",
    "revision": "349afa84053690cf563911e6725f3cec"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})