import { defineConfig } from "vite";
import { imagetools } from "vite-imagetools";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";

export default defineConfig({
  plugins: [
    // 1. imagetools plugin for getOptimizedImage-function
    imagetools(),

    // 2. ViteImageOptimizer for optimization for all formats
    ViteImageOptimizer({
      avif: { quality: 80 },
      webp: { quality: 90 },
      jpeg: { quality: 90 },
      jpg: { quality: 90 },
      png: { 
        quality: 70,
        palette: true,
      },
      svg: {
        plugins: [
          { name: 'removeViewBox', active: false },
          { name: 'sortAttrs', active: true }
        ],
      },
      cache: true,
      cacheLocation: './node_modules/.cache/vite-plugin-image-optimizer',
    }),
  ]
})