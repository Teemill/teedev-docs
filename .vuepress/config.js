module.exports = {
  title: 'TeeDev Docs',
  description: 'Documentation for all TeeDev repos',

  /**
   * Change theme, including navigation elements
   */
  themeConfig: {
    sidebar: [
      ['/', 'Home'],
      ['/src/teedev/teedev.md', 'TeeDev Vue'],
      ['/src/teedev-api/teedev-api.md', 'TeeDev Laravel'],
      ['/src/teedev-docs/teedev-docs.md', 'TeeDev Docs'],
    ],
    nav: [
      { text: 'Home', link: '/' },
    ]
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
