module.exports = {
  title: 'TeeDev Docs',
  description: 'Documentation for all TeeDev repos',

  /**
   * Change theme, including navigation elements
   */
  themeConfig: {
    sidebar: {
      '/src/teedev/components/': [
        ['components', 'Components'],
        ['charts', 'Charts'],
      ],
      '/src/teedev/': [
        ['teedev', 'TeeDev Vue'],
        ['components/components', 'Components'],
      ],
      '/': [
        ['', 'Home'],
        ['src/teedev/teedev', 'TeeDev Vue'],
        ['src/teedev-api/teedev-api', 'TeeDev Laravel'],
        ['src/teedev-docs/teedev-docs', 'TeeDev Docs'],
      ],
    },

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Vue', link: '/src/teedev/' },
      { text: 'Laravel', link: '/src/teedev-api/' },
    ],

    docsRepo: 'Teemill/teedev-docs',
    editLinks: true,
    editLinkText: 'Edit this page on GitHub'
  },
  /**
   * This defines the URL at which the docs will be served. This is
   * automatically prefixed to any URLs
   */
  base: '/',

  /**
   * This defines where the build files will be located
   */
  dest: './docs',

  /**
   * Webpack settings
   */
  configureWebpack: {
    resolve: {
      alias: {
        '@teedev': '@/src/teedev',
        '@teedev-api': '@/src/teedev-api',
        '@teedev-docs': '@/src/teedev-docs',
      },
    },
  },
}
