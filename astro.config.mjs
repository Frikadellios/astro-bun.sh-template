import { defineConfig, squooshImageService } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import solidJs from "@astrojs/solid-js";
import react from "@astrojs/react";
import partytown from "@astrojs/partytown";
import prefetch from "@astrojs/prefetch";
import tailwind from "@astrojs/tailwind";
import yaml from '@rollup/plugin-yaml';

import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  image: {
    service: squooshImageService()
  },
  output: "server",
  adapter: node({
    mode: "standalone"
  }),
  site: 'https://devopsick.com',
  vite: {
    plugins: [yaml()]
  }
  integrations: [
    mdx(), 
    sitemap(), 
    solidJs(), 
    react(), 
    partytown({
      config: {
        forward: ['dataLayer.push'],
      },
    }),
    prefetch(), 
    tailwind({
    configFile: './tailwind.config.cjs'
  })],
});