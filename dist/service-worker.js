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
    "revision": "d05c55c80e51f1cbfb8906f17ad547c2"
  },
  {
    "url": "404.svg",
    "revision": "6695af9986412e75985538255ca87866"
  },
  {
    "url": "404/index.html",
    "revision": "d05c55c80e51f1cbfb8906f17ad547c2"
  },
  {
    "url": "api-using-node-expressjs/index.html",
    "revision": "11165b2a0df27bb96a842fb1b2357968"
  },
  {
    "url": "assets/css/0.styles.6e451830.css",
    "revision": "3bb17042791f37d9d7a0ec8a903d4037"
  },
  {
    "url": "assets/data/404/index.json",
    "revision": "13d037db228d8fc4a9730a1629e71db4"
  },
  {
    "url": "assets/data/api-using-node-expressjs/index.json",
    "revision": "507791410be7399070a98e4354c96e90"
  },
  {
    "url": "assets/data/blog/index.json",
    "revision": "704ac63e82702da4b1b911b5b3a245a7"
  },
  {
    "url": "assets/data/how-to-port-from-vscode-to-vscodium/index.json",
    "revision": "9f4d38c40f8de01c7ce4b0c2cc440099"
  },
  {
    "url": "assets/data/index.json",
    "revision": "13d037db228d8fc4a9730a1629e71db4"
  },
  {
    "url": "assets/data/introduction-to-gridsome/index.json",
    "revision": "dc4f40dbf56d554c6a3ac523db56604e"
  },
  {
    "url": "assets/data/success/index.json",
    "revision": "13d037db228d8fc4a9730a1629e71db4"
  },
  {
    "url": "assets/data/tag/backend/index.json",
    "revision": "e98fb7db71136a6bd1ac5971a3069af0"
  },
  {
    "url": "assets/data/tag/coding/index.json",
    "revision": "aea0907fb4ba5e521022837b1c347c4b"
  },
  {
    "url": "assets/data/tag/expressjs/index.json",
    "revision": "9d7075dcca7f19734a5b06fb992d9b7e"
  },
  {
    "url": "assets/data/tag/FOSS/index.json",
    "revision": "849a314979fc43ef5e36cf196e61b564"
  },
  {
    "url": "assets/data/tag/Free Software/index.json",
    "revision": "e592ca8372a58d73b7a2233c89ff1f63"
  },
  {
    "url": "assets/data/tag/frontend/index.json",
    "revision": "adccb0911cb6a8286197735c6c46fb92"
  },
  {
    "url": "assets/data/tag/nodejs/index.json",
    "revision": "a8243c004c9ceb6e02eea82c579ec94b"
  },
  {
    "url": "assets/data/tag/VSCodium/index.json",
    "revision": "86b7fb360cd98190b92d073bee52b06b"
  },
  {
    "url": "assets/data/tag/vue/index.json",
    "revision": "8f89e8f5457923505b5646c8ff8a6dca"
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
    "url": "assets/js/app.2af0c20a.js",
    "revision": "96b4216e68362160b23100df6f8d2c91"
  },
  {
    "url": "assets/js/page--src--pages--404-vue.d09fa4d9.js",
    "revision": "04ab726d3de4fbd318b542fd85fdbf2d"
  },
  {
    "url": "assets/js/page--src--pages--blog-vue.108035e5.js",
    "revision": "857a76f7e7bd5e416ddc184eac69fa7b"
  },
  {
    "url": "assets/js/page--src--pages--index-vue.21483bac.js",
    "revision": "3f87359ff1fe64c2a6338565ed7e4f29"
  },
  {
    "url": "assets/js/page--src--pages--success-vue.f6721756.js",
    "revision": "80799d16ffefde681824acc940c02386"
  },
  {
    "url": "assets/js/page--src--templates--post-vue.ef0839ac.js",
    "revision": "b6a4754f3d91cdcc2c9434c98a8cec3e"
  },
  {
    "url": "assets/js/page--src--templates--tag-vue.f1600bc1.js",
    "revision": "2d959b602b95dfec71505cdc770cf4fb"
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
    "url": "assets/static/flutter-clock.64c0936.520d17edac6af311abcadf5f1bfdd899.jpeg",
    "revision": "99952ecf888bb32bc1262e868f29df3c"
  },
  {
    "url": "assets/static/flutter-clock.82a2fbd.520d17edac6af311abcadf5f1bfdd899.jpeg",
    "revision": "1a871fad779568423a3ef3cf64c82078"
  },
  {
    "url": "assets/static/glug.82a2fbd.bb5bfc20fc92a2884947aa44f6ceb07e.png",
    "revision": "749cc87c730fe67201891dec52044a63"
  },
  {
    "url": "assets/static/glug.bb33948.bb5bfc20fc92a2884947aa44f6ceb07e.png",
    "revision": "0b5530f2bbe462a5109b7bcc3d0183a6"
  },
  {
    "url": "assets/static/glug.cbab2cf.bb5bfc20fc92a2884947aa44f6ceb07e.png",
    "revision": "706d9765f3f848c741bea40153e2e46f"
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
    "url": "assets/static/weamo.82a2fbd.7d7df6f47877b2a35d12bf5dbde5f39c.png",
    "revision": "9b018461145aac4c2b098785c359ec9c"
  },
  {
    "url": "assets/static/weamo.9efe708.7d7df6f47877b2a35d12bf5dbde5f39c.png",
    "revision": "8c086a30f9cb2cb2240b5b8a5fc3cb7f"
  },
  {
    "url": "assets/static/weamo.cbab2cf.7d7df6f47877b2a35d12bf5dbde5f39c.png",
    "revision": "627947f17511b51559478ad2042de72f"
  },
  {
    "url": "avatar.jpg",
    "revision": "522ab58be64f1117fe3e067b77584520"
  },
  {
    "url": "blog/index.html",
    "revision": "7cddc94f071c152f5b9459dd8cf33481"
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
    "revision": "693e6169df9d640be48ea1e8dc08a37b"
  },
  {
    "url": "index.html",
    "revision": "3c39f3ae619c36d9d3b4ad0ad2e40e1c"
  },
  {
    "url": "introduction-to-gridsome/index.html",
    "revision": "48b9f08a941ac53e48fac6fd21abb9c1"
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
    "revision": "254dde9340560c0f210cb136ae9b61fb"
  },
  {
    "url": "success/index.html",
    "revision": "2ede1726645c6feec8c8e1a7724ebc3a"
  },
  {
    "url": "tag/backend/index.html",
    "revision": "ef0b31d7efb5b6eb8f602d4bb38738c5"
  },
  {
    "url": "tag/coding/index.html",
    "revision": "ccc222b4255d8b518a359c306ff23f0e"
  },
  {
    "url": "tag/expressjs/index.html",
    "revision": "6357cae82f8ad09558d2ba38b3be8cb3"
  },
  {
    "url": "tag/FOSS/index.html",
    "revision": "c81e8357220fc28cf6d22e8c907984e1"
  },
  {
    "url": "tag/Free Software/index.html",
    "revision": "ea28ee24f5d56d0c1b4e3c5b3d2be3b3"
  },
  {
    "url": "tag/frontend/index.html",
    "revision": "1ecda0becb227850aab750207c33ab5b"
  },
  {
    "url": "tag/nodejs/index.html",
    "revision": "299bd109cd9435e4bd0c11a2ad71d8d7"
  },
  {
    "url": "tag/VSCodium/index.html",
    "revision": "36ebc5628b532c2729c0c2bfc2244caa"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "c67e130d461cd18c56522ebb2c7205c2"
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