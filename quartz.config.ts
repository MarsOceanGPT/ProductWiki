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
    ignorePatterns: [
      "private",
      "templates",
      ".obsidian",
      "04-模板",
      "AI 炼金术实验室*",
      "AI产品策略图谱*",
      "a16z_AI_Top100*",
    ],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "local",
      cdnCaching: true,
      typography: {
        header: '"Noto Serif", "Iowan Old Style", "Palatino Linotype", "Songti SC", serif',
        body: '"Inter", "Avenir Next", "Segoe UI", "PingFang SC", "Hiragino Sans GB", sans-serif',
        code: '"SFMono-Regular", "JetBrains Mono", "IBM Plex Mono", monospace',
      },
      colors: {
        lightMode: {
          light: "#fbf9f5",
          lightgray: "#e4e2de",
          gray: "#73777d",
          darkgray: "#43474c",
          dark: "#1b1c1a",
          secondary: "#496177",
          tertiary: "#563e00",
          highlight: "rgba(73, 97, 119, 0.10)",
          textHighlight: "#c9e2fd88",
        },
        darkMode: {
          light: "#1b1c1a",
          lightgray: "#30312e",
          gray: "#73777d",
          darkgray: "#e4e2de",
          dark: "#fbf9f5",
          secondary: "#88a0b8",
          tertiary: "#eac16c",
          highlight: "rgba(136, 160, 184, 0.14)",
          textHighlight: "#725405aa",
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
