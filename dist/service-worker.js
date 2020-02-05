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
    "revision": "97e9bdbf5ba7f746034951ffe9c048c4"
  },
  {
    "url": "404.svg",
    "revision": "6695af9986412e75985538255ca87866"
  },
  {
    "url": "404/index.html",
    "revision": "97e9bdbf5ba7f746034951ffe9c048c4"
  },
  {
    "url": "api-using-node-expressjs/index.html",
    "revision": "bc5e660e330d87116ab8bbfd58bf6959"
  },
  {
    "url": "assets/css/0.styles.b0c95860.css",
    "revision": "626fc2c7604f508ead4e0318d5290230"
  },
  {
    "url": "assets/data/404/index.json",
    "revision": "f321053a21ec0e7d15d8c049a5eb93e1"
  },
  {
    "url": "assets/data/api-using-node-expressjs/index.json",
    "revision": "7d77e8156875a73ebc38d48b50774d91"
  },
  {
    "url": "assets/data/blog/index.json",
    "revision": "d02b7fd4af9374ccc0b2b6b29cae089e"
  },
  {
    "url": "assets/data/how-to-port-from-vscode-to-vscodium/index.json",
    "revision": "4062775038289dedba6d417941e4846f"
  },
  {
    "url": "assets/data/index.json",
    "revision": "f321053a21ec0e7d15d8c049a5eb93e1"
  },
  {
    "url": "assets/data/introduction-to-gridsome/index.json",
    "revision": "d2120716d29d570edf37904b37b87e44"
  },
  {
    "url": "assets/data/success/index.json",
    "revision": "f321053a21ec0e7d15d8c049a5eb93e1"
  },
  {
    "url": "assets/data/tag/backend/index.json",
    "revision": "a841363c0271bc3d62cfcfc428e17243"
  },
  {
    "url": "assets/data/tag/coding/index.json",
    "revision": "f2912d50cb1feedc66c6bf7d2a194a54"
  },
  {
    "url": "assets/data/tag/expressjs/index.json",
    "revision": "fac723b5267ce0276063d34b374ed4cb"
  },
  {
    "url": "assets/data/tag/FOSS/index.json",
    "revision": "2ab781a5613008d209c0540797d7d97f"
  },
  {
    "url": "assets/data/tag/Free Software/index.json",
    "revision": "96779e1d9989832d69e1a364f022da96"
  },
  {
    "url": "assets/data/tag/frontend/index.json",
    "revision": "7d07968db324b9ca800288e681feb669"
  },
  {
    "url": "assets/data/tag/nodejs/index.json",
    "revision": "56d6fc72dc6d6091acbab06b19a1d927"
  },
  {
    "url": "assets/data/tag/VSCodium/index.json",
    "revision": "9cd71cd1dedbbb122d32e854346bc91a"
  },
  {
    "url": "assets/data/tag/vue/index.json",
    "revision": "79df779732bf2e2ffcf6da2f96b747ab"
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
    "url": "assets/js/app.cf9dd1c2.js",
    "revision": "c0a68032e826e7d2f83cb05063b892b7"
  },
  {
    "url": "assets/js/page--src--pages--404-vue.acd235f2.js",
    "revision": "8fcb07a5c44bab60d47faba71c098734"
  },
  {
    "url": "assets/js/page--src--pages--blog-vue.0efcf90d.js",
    "revision": "0c4688860b1a8d7f993dc6032473f9a3"
  },
  {
    "url": "assets/js/page--src--pages--index-vue.c99177b4.js",
    "revision": "1f921c726d1e4d7da0c888f7973141e6"
  },
  {
    "url": "assets/js/page--src--pages--success-vue.229461c6.js",
    "revision": "fbb44461555b90d28a03d940fa9c92b4"
  },
  {
    "url": "assets/js/page--src--templates--post-vue.1ff04286.js",
    "revision": "06fdfa1767eb2662bc55736eb88778f2"
  },
  {
    "url": "assets/js/page--src--templates--tag-vue.c2ea1f59.js",
    "revision": "517abf3077b2e9ac6f088f685894c607"
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
    "revision": "c370c25e89c25fb4211a6a130a3ac62b"
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
    "revision": "a2142c10f7c711b64f65bf25d473545c"
  },
  {
    "url": "index.html",
    "revision": "dd8b0b049906e2e9e2dd22c7c7c0d2ba"
  },
  {
    "url": "introduction-to-gridsome/index.html",
    "revision": "e6f3659902407f1e95b067ad370386e8"
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
    "revision": "8ee4a2e92cbcab5f1231951b3a85cedf"
  },
  {
    "url": "tag/backend/index.html",
    "revision": "92ed2052790daf21b7dacb042b5cf8d0"
  },
  {
    "url": "tag/coding/index.html",
    "revision": "fdc7cf2e6711b8d0e73b33a4073ee85c"
  },
  {
    "url": "tag/expressjs/index.html",
    "revision": "e5675ed1d9f55387d3bc807f5fa7c46e"
  },
  {
    "url": "tag/FOSS/index.html",
    "revision": "e7f07a0569b1d1e9eec0d1aa9fcb8ae9"
  },
  {
    "url": "tag/Free Software/index.html",
    "revision": "6d590a27b23765c361fd3b3751dbdb25"
  },
  {
    "url": "tag/frontend/index.html",
    "revision": "0b7ec02799936728b520142f10782e5a"
  },
  {
    "url": "tag/nodejs/index.html",
    "revision": "bcfc65fd5e10ea5f337047ae4b321fba"
  },
  {
    "url": "tag/VSCodium/index.html",
    "revision": "94232d61d6527e296f3041841f7b67c2"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "1eba3fb074fcb13318482605d5381de0"
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