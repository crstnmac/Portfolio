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
    "revision": "38889ec8f3ea109dabc861ea8096967e"
  },
  {
    "url": "404.svg",
    "revision": "6695af9986412e75985538255ca87866"
  },
  {
    "url": "404/index.html",
    "revision": "38889ec8f3ea109dabc861ea8096967e"
  },
  {
    "url": "api-using-node-expressjs/index.html",
    "revision": "127f2d72a9588105413260580689a8e3"
  },
  {
    "url": "assets/css/0.styles.b0c95860.css",
    "revision": "626fc2c7604f508ead4e0318d5290230"
  },
  {
    "url": "assets/data/404/index.json",
    "revision": "761194346763f1906c1c74780daca563"
  },
  {
    "url": "assets/data/api-using-node-expressjs/index.json",
    "revision": "ca6fbb3ea4171526c0511a28d76ec91c"
  },
  {
    "url": "assets/data/blog/index.json",
    "revision": "0eabde882814a2adc9fedb9556aa6e23"
  },
  {
    "url": "assets/data/how-to-port-from-vscode-to-vscodium/index.json",
    "revision": "d68dc81ff7c622faa7474970f03c8f82"
  },
  {
    "url": "assets/data/index.json",
    "revision": "761194346763f1906c1c74780daca563"
  },
  {
    "url": "assets/data/introduction-to-gridsome/index.json",
    "revision": "50ded083f236cb708e128702ba8f597d"
  },
  {
    "url": "assets/data/success/index.json",
    "revision": "761194346763f1906c1c74780daca563"
  },
  {
    "url": "assets/data/tag/backend/index.json",
    "revision": "2b5e6fd758bba841edded4f1eae10941"
  },
  {
    "url": "assets/data/tag/coding/index.json",
    "revision": "f368aa2ac3d7062f00128d0612cf8795"
  },
  {
    "url": "assets/data/tag/expressjs/index.json",
    "revision": "1192309c7cb7294dbc25b3dc7bb52d5e"
  },
  {
    "url": "assets/data/tag/FOSS/index.json",
    "revision": "78e277b97e1cdeef3459831e988aa492"
  },
  {
    "url": "assets/data/tag/Free Software/index.json",
    "revision": "103833fb32694cc5bb149a08603b3f2f"
  },
  {
    "url": "assets/data/tag/frontend/index.json",
    "revision": "c388383c7a018e5a3f30cf215cda2bc3"
  },
  {
    "url": "assets/data/tag/nodejs/index.json",
    "revision": "a63c1c97f0ac0f525129aee1676486a2"
  },
  {
    "url": "assets/data/tag/VSCodium/index.json",
    "revision": "132cf309a4a74d4689f06eba9465f791"
  },
  {
    "url": "assets/data/tag/vue/index.json",
    "revision": "0be56f4a03b1ddad06c34715b83b7aea"
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
    "url": "assets/js/app.5c3f2cdb.js",
    "revision": "e8ffc3a8b8f6ecc31af3cc2dcf207bfa"
  },
  {
    "url": "assets/js/page--src--pages--404-vue.33a42154.js",
    "revision": "92f6e0cfc455650c848267301f052e93"
  },
  {
    "url": "assets/js/page--src--pages--blog-vue.5f2035ae.js",
    "revision": "bbc17247dadbf680956f5dfb15db47ce"
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
    "url": "assets/js/page--src--templates--post-vue.05f1d1bb.js",
    "revision": "6fe2cc5ab234aaf7f3ddd69dd35b3de6"
  },
  {
    "url": "assets/js/page--src--templates--tag-vue.ba4221e9.js",
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
    "revision": "c4d8208b07f5c954a6214f8f15570107"
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
    "url": "how-to-port-from-vscode-to-vscodium/index.html",
    "revision": "10518dbc3ad292c52dbc60ff7892d5aa"
  },
  {
    "url": "index.html",
    "revision": "12e54ba99ff0b78e1efccb5ac8d729d9"
  },
  {
    "url": "introduction-to-gridsome/index.html",
    "revision": "8eccd8c0fd06d26d3d488778579e488f"
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
    "revision": "a5c98a1b0a7cfe224de8815d2820eb7a"
  },
  {
    "url": "success/index.html",
    "revision": "99e954b091da10c002469bab8ca5fb92"
  },
  {
    "url": "tag/backend/index.html",
    "revision": "2d326928b52a0fc0339ad863431d89e7"
  },
  {
    "url": "tag/coding/index.html",
    "revision": "cf4b71d26c8d44d62288d32f3adb864a"
  },
  {
    "url": "tag/expressjs/index.html",
    "revision": "c0a29184955853425e9a94c55bfd50b2"
  },
  {
    "url": "tag/FOSS/index.html",
    "revision": "05bcc0af72cc81f0bb8056706f3d26b0"
  },
  {
    "url": "tag/Free Software/index.html",
    "revision": "131e3f8b7ad21c2f0ebd9fe83397f943"
  },
  {
    "url": "tag/frontend/index.html",
    "revision": "4a154241cf991d7682d1a85f721a1d70"
  },
  {
    "url": "tag/nodejs/index.html",
    "revision": "b7e4c0adbd35b8ee4f27c57a12793a9c"
  },
  {
    "url": "tag/VSCodium/index.html",
    "revision": "68cc2637c775fe4c0be393d251511666"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "9795956863212eecd731bef6ba6eb9f3"
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