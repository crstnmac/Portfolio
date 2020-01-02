// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const tailwind = require('tailwindcss')
const purgecss = require('@fullhuman/postcss-purgecss')

const postcssPlugins = [
  tailwind(),
]

if (process.env.NODE_ENV === 'production') postcssPlugins.push(purgecss())

module.exports = {
  siteName: 'Criston-Mascarenhas',
  siteDescription: 'A simple portfolio.',
  siteUrl: 'https://crstnmac.me',
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'blog/**/*.md',
        typeName: 'Post',
        refs: {
          tags: {
            typeName: 'Tag',
            create: true
          }
        },
        remark: {
          plugins: [
            [ 'gridsome-plugin-remark-shiki', { theme: 'Material-Theme-Palenight', skipInline: true } ]
          ]
        }
      }
    },
    {
      use: "gridsome-plugin-manifest",
      options: {
          background_color: "#6b46c1",
          icon_path: "./src/favicon.png",
          name: "crstnmac.me",
          short_name: "crstnmac",
          theme_color: "#6b46c1",
          lang: "en",
      },
  },
    {
      use: 'gridsome-plugin-pwa',
      options: {
          title: 'crstnmac.me',
          startUrl: '/',
          display: 'standalone',
          statusBarStyle: 'default',
          manifestPath: 'manifest.json',
          serviceWorkerPath: 'service-worker.js',
          cachedFileTypes: 'js,json,css,html,png,jpg,jpeg,svg',
          shortName: 'crstnmac',
          themeColor: '#6b46c1',
          backgroundColor: '#6b46c1',
          icon: './src/favicon.png', // must be provided
          msTileImage: './src/favicon.png',
          msTileColor: '#6b46c1'
      }
  },
    {
      use: 'gridsome-plugin-rss',
      options: {
        contentTypeName: 'Post',
        feedOptions: {
          title: 'Blog',
          feed_url: 'https://crstnmac.me/rss.xml',
          site_url: 'https://crstnmac.me.io/'
        },
        feedItemOptions: node => ({
          title: node.title,
          description: node.summary,
          url: 'crstnmac.me' + node.path,
          author: 'Criston Mascarenhas',
          date: node.date
        }),
        output: {
          dir: './static',
          name: 'rss.xml'
        }
      }
    },
    {
      use: '@gridsome/plugin-sitemap',
      options: {
        cacheTime: 600000, // default
      }
    }
  ],
  templates: {
    Tag: '/tag/:id'
  },
  transformers: {
    remark: {
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
      anchorClassName: 'icon icon-link',
    }
  },
  css: {
    loaderOptions: {
      postcss: {
        plugins: postcssPlugins,
      },
    },
  },
}
