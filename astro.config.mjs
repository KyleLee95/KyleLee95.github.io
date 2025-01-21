// @ts-check
import { defineConfig } from "astro/config";
import topLevelAwait from "vite-plugin-top-level-await";
import glsl from "vite-plugin-glsl";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
// https://astro.build/config
export default defineConfig({
  site: "https://kylelee.dev",
  vite: { plugins: [glsl(), topLevelAwait()] },
  integrations: [
    mdx(),
    sitemap(),
    tailwind({
      applyBaseStyles: false,
    }),
  ],
});
