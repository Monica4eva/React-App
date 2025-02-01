import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/React-App/", // Replace "React-App" with your repo name
  plugins: [react()],
});
