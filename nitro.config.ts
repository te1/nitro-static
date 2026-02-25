import { defineNitroConfig } from "nitropack/config";

// https://nitro.build/config
export default defineNitroConfig({
  compatibilityDate: "latest",
  srcDir: "server",
  imports: false,
  serveStatic: true,
  preset: "cloudflare_module",
  cloudflare: {
    deployConfig: true, // simulate behavior in cloudflare CI
  },
});
