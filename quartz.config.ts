import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Mars Product Wiki",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: null,
    locale: "zh-CN",
    baseUrl: "wiki.marsren.ai",
    ignorePatterns: ["private", "templates", ".obsidian", "04-模板"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "local",
      cdnCaching: true,
      typography: {
        header: '"Iowan Old Style", "Palatino Linotype", "Book Antiqua", "Songti SC", serif',
        body: '"Avenir Next", "Segoe UI", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", sans-serif',
        code: '"SFMono-Regular", "JetBrains Mono", "IBM Plex Mono", monospace',
      },
      colors: {
        lightMode: {
          light: "#f6f1e8",
          lightgray: "#d9d0c2",
          gray: "#9a8f7c",
          darkgray: "#4d4437",
          dark: "#1b1610",
          secondary: "#7c5a2b",
          tertiary: "#245765",
          highlight: "rgba(124, 90, 43, 0.11)",
          textHighlight: "#efd49b88",
        },
        darkMode: {
          light: "#12151a",
          lightgray: "#28303a",
          gray: "#7d8794",
          darkgray: "#d7dfeb",
          dark: "#f8f3ea",
          secondary: "#d1ab73",
          tertiary: "#8bb8c4",
          highlight: "rgba(209, 171, 115, 0.16)",
          textHighlight: "#74631288",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest", prettyLinks: false }),
      Plugin.Description(),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      // Disable OG image generation to avoid remote font fetches and keep CN access stable.
      // Plugin.CustomOgImages(),
    ],
  },
}

export default config
