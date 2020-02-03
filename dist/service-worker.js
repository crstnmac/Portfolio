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
    "revision": "8e02a2346f02dc2557289346725afc80"
  },
  {
    "url": "404.svg",
    "revision": "6695af9986412e75985538255ca87866"
  },
  {
    "url": "404/index.html",
    "revision": "8e02a2346f02dc2557289346725afc80"
  },
  {
    "url": "api-using-node-expressjs/index.html",
    "revision": "55ad01003ea9ff386cf23e2c61e104fd"
  },
  {
    "url": "assets/css/0.styles.b0c95860.css",
    "revision": "626fc2c7604f508ead4e0318d5290230"
  },
  {
    "url": "assets/data/404/index.json",
    "revision": "e2b6e6e10feaeb7c265cb08f12165559"
  },
  {
    "url": "assets/data/api-using-node-expressjs/index.json",
    "revision": "94d52cd103845b5aa5155a75c6a19877"
  },
  {
    "url": "assets/data/blog/index.json",
    "revision": "59a83a8858e0b5d3c0da0c6c4fa7a73a"
  },
  {
    "url": "assets/data/index.json",
    "revision": "e2b6e6e10feaeb7c265cb08f12165559"
  },
  {
    "url": "assets/data/introduction-to-gridsome/index.json",
    "revision": "a28115e42c27c52e91be7f173e9f9d11"
  },
  {
    "url": "assets/data/success/index.json",
    "revision": "e2b6e6e10feaeb7c265cb08f12165559"
  },
  {
    "url": "assets/data/tag/backend/index.json",
    "revision": "7e26c66a3b22ff8183e0658efea6e980"
  },
  {
    "url": "assets/data/tag/coding/index.json",
    "revision": "f2e6fc94bffc627f143392f9944b0d26"
  },
  {
    "url": "assets/data/tag/expressjs/index.json",
    "revision": "e7fd81bd0ca11764680bf7d340c88157"
  },
  {
    "url": "assets/data/tag/frontend/index.json",
    "revision": "6297a69816802e265e1bcfb4ff855b34"
  },
  {
    "url": "assets/data/tag/nodejs/index.json",
    "revision": "6361c370fc0cab9f52021f035de59202"
  },
  {
    "url": "assets/data/tag/vue/index.json",
    "revision": "8c56b06769b21d088734c9ca3392d3a6"
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
    "url": "assets/js/app.49ddf40d.js",
    "revision": "834b647a0f278704f7b2cb32ccd357bf"
  },
  {
    "url": "assets/js/page--src--pages--404-vue.33a42154.js",
    "revision": "92f6e0cfc455650c848267301f052e93"
  },
  {
    "url": "assets/js/page--src--pages--blog-vue.91da1a72.js",
    "revision": "b67739dcbc4e626bf76f1689e0c5601a"
  },
  {
    "url": "assets/js/page--src--pages--index-vue.56ca865e.js",
    "revision": "cd65d3bd2c1de15c44a04849edaeb538"
  },
  {
    "url": "assets/js/page--src--pages--success-vue.635b70a1.js",
    "revision": "df787088e381a811befd9f972b381a7f"
  },
  {
    "url": "assets/js/page--src--templates--post-vue.e46296fe.js",
    "revision": "6fe2cc5ab234aaf7f3ddd69dd35b3de6"
  },
  {
    "url": "assets/js/page--src--templates--tag-vue.15de9371.js",
    "revision": "6ca7e234bb10d4dcd778f33af7ee5296"
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
    "url": "avatar.jpg",
    "revision": "522ab58be64f1117fe3e067b77584520"
  },
  {
    "url": "blog/index.html",
    "revision": "2ae5cb61e783e4bbd6ba16b56eebb464"
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
    "url": "index.html",
    "revision": "f1a5f78a0fe453279cb20ea18f3ca35e"
  },
  {
    "url": "introduction-to-gridsome/index.html",
    "revision": "ef0e313c25b0fbe9050b1ede4627258c"
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
    "revision": "34a1c05e32bdeb78c4135f3a2c5abb1d"
  },
  {
    "url": "success/index.html",
    "revision": "6fbe5ba42498d8c577bde5f80c9f0fbf"
  },
  {
    "url": "tag/backend/index.html",
    "revision": "b452e4a01231d3204647a21aa2e49af0"
  },
  {
    "url": "tag/coding/index.html",
    "revision": "49df09bd5a04d439d3f5729beb468595"
  },
  {
    "url": "tag/expressjs/index.html",
    "revision": "4970fd92cf3a2c2c7932208565fa06bb"
  },
  {
    "url": "tag/frontend/index.html",
    "revision": "b76c90a08d2165aa9f712201987dc316"
  },
  {
    "url": "tag/nodejs/index.html",
    "revision": "c907530cf02a942776f4ba4b57322fbe"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "0797669ed0a6a33901438517cfe52a05"
  },
  {
    "url": "thankyou.svg",
    "revision": "ac1b9c8d06a3168baba728ca67becbf1"
  },
  {
    "url": "404",
    "revision": "28f25f53f5ce5d7c39f9df9ad1964986"
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
    "url": "blog",
    "revision": "4ea7a794e4d7b7503ac520689daeb20b"
  },
  {
    "url": "success",
    "revision": "df1c766baaf2eaf4afa9be530ff414fa"
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