import { defineConfig } from "vite";
import Vue from "@vitejs/plugin-vue";
import Components from "unplugin-vue-components/vite";
import AutoImport from "unplugin-auto-import/vite";
import Icons from "unplugin-icons/vite";
import IconsResolver from "unplugin-icons/resolver";

export default defineConfig({
  plugins: [
    Vue(),
    Components({
      dts: true,
      resolvers: [
        IconsResolver({
          prefix: false,
          enabledCollections: ["carbon"],
        }),
      ],
    }),
    AutoImport({
      dts: true,
      imports: ["vue"],
    }),
    Icons({ autoInstall: true }),
  ],
});
