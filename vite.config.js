import { defineConfig } from "vite";

export default defineConfig({
  server: {
    host: true,            // allow external access (required for Gitpod)
    port: 5173,
    strictPort: true,

    // 👇 THIS IS THE IMPORTANT PART
    allowedHosts: "all"
  }
});
