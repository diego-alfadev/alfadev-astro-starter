import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import { defineConfig, sharpImageService } from "astro/config";
import config from "./src/config/config.json";
import AutoImport from "astro-auto-import";

// https://astro.build/config
export default defineConfig({
  site: config.site.base_url ? config.site.base_url : "http://astrotemplatesitey.com",
  base: config.site.base_path ? config.site.base_path : "/",
  trailingSlash: config.site.trailing_slash ? "always" : "never",
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          api: "modern-compiler"
        }
      }
    }
  },
  // Image optimization service
  image: {
    service: sharpImageService(),
  },
  integrations: [
    react(),
    sitemap(),
    tailwind(),
    AutoImport({
      // import react components to use in mdx
      imports: [
        "@/components/react/FeatherIcon.tsx",
        "@/components/react/Button.jsx",
        "@/components/CounterComponent.astro",
      ],
    }),
    mdx()
  ]
});
