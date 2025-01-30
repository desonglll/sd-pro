import {defineConfig, loadEnv} from "vite";
import react from "@vitejs/plugin-react";

export default ({mode}: { mode: string }) => {
    // 读取 .env.production
    const env = loadEnv(mode, process.cwd());

    return defineConfig({
        base: "/",
        plugins: [react()],
        // server: {
        //     proxy: {
        //         "/api/": "http://127.0.0.1:8000",
        //     }
        // },
        define: {
            // 这样 VITE_API_URL 会被正确注入到前端代码中
            "import.meta.env.VITE_API_URL": JSON.stringify(env.VITE_API_URL),
        }
    });
};
