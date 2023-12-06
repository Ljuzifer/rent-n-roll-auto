import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
    plugins: [react()],
    base: "/rent-n-roll-auto",
    resolve: {
        alias: { src: "/src" },
    },
});
