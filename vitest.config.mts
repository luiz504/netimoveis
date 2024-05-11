import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import magicalSvg from "vite-plugin-magical-svg";
export default defineConfig({
  plugins: [react(), magicalSvg({ target: "react",  })],
  test: {
    globals: true,
    environment: "jsdom",
    // css:true,
    alias: {
      "~/": new URL("./src/", import.meta.url).pathname,
      "public/": new URL("./public/", import.meta.url).pathname,
    },
    setupFiles: ["./vitest.setup.mts"],
    
  },
});
