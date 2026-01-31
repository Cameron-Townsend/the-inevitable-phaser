import { defineConfig } from "vite";

export default defineConfig({
  server: {
    host: true,
    port: 5173,
    strictPort: true,
    allowedHosts: 'https://5173--019c1583-5ee4-71e1-9fb1-dba07993029c.us-east-1-01.gitpod.dev',
  },
});
