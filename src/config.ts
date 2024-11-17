import type {
  LicenseConfig,
  NavBarConfig,
  ProfileConfig,
  SiteConfig,
} from './types/config'
import { LinkPreset } from './types/config'

export const siteConfig: SiteConfig = {
  title: '沐风岛 Moiland',
  subtitle: '沐澄个人博客',
  lang: 'zh_CN',         // 'en', 'zh_CN', 'zh_TW', 'ja', 'ko'
  themeColor: {
    hue: 0,         // Default hue for the theme color, from 0 to 360. e.g. red: 0, teal: 200, cyan: 250, pink: 345
    fixed: true,     // Hide the theme color picker for visitors
  },
  banner: {
    enable: true,
    src: 'assets/images/banner.png',  // Relative to the /src directory. Relative to the /public directory if it starts with '/'
    position: 'center',               // Equivalent to object-position, only supports 'top', 'center', 'bottom'. 'center' by default
    credit: {
      enable: true,   // Display the credit text of the banner image
      text: '空色天絵 / 過剰広告',   // Credit text to be displayed
      url: 'https://www.pixiv.net/artworks/109104860'   // (Optional) URL link to the original artwork or artist's page
    }
  },
  toc: {
    enable: true,           // Display the table of contents on the right side of the post
    depth: 2                // Maximum heading depth to show in the table, from 1 to 3
  },
  favicon: [                              // Leave this array empty to use the default favicon
    // {
    //   src: '/favicon/favicon-32.png',  // Path of the favicon, relative to the /public directory
    //   theme: 'light',                  // (Optional) Either 'light' or 'dark', set only if you have different favicons for light and dark mode
    //   sizes: '32x32',                  // (Optional) Size of the favicon, set only if you have favicons of different sizes
    // },
  ]
}

export const navBarConfig: NavBarConfig = {
  links: [
    LinkPreset.Home,
    LinkPreset.Archive,
    {
      name: '关注',                            // Internal links should not include the base path, as it is automatically added
      url: 'follow/',                         // Show an external link icon and will open in a new tab
      external: false,
    },
    {
      name: '赞助',
      url: 'support/',
      external: false,
    },
    LinkPreset.About,
  ],
}

export const profileConfig: ProfileConfig = {
  avatar: 'assets/images/avatar.png',         // Relative to the /src directory. Relative to the /public directory if it starts with '/'
  name: '沐澄',
  bio: 'MAKE A DIFFERENCE',
  links: [
    {
      name: '微博',
      icon: 'fa6-brands:weibo',               // Visit https://icones.js.org/ for icon codes
                                              // You will need to install the corresponding icon set if it's not already included
                                              // `pnpm add @iconify-json/<icon-set-name>`
      url: 'https://weibo.com/motrans4825',
    },
    {
      name: '哔哩哔哩',
      icon: 'fa6-brands:bilibili',
      url: 'https://space.bilibili.com/3546733673973874',
    },
    {
      name: 'X',
      icon: 'fa6-brands:x-twitter',     
      url: 'https://x.com/Motrans4825',
    },
    {
      name: 'YouTube',
      icon: 'fa6-brands:youtube',
      url: 'https://www.youtube.com/@hi.motrans',
    },
  ],
}

export const licenseConfig: LicenseConfig = {
  enable: true,
  name: 'CC BY-NC-SA 4.0',
  url: 'https://creativecommons.org/licenses/by-nc-sa/4.0/',
}
