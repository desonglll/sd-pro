import {defineConfig} from "vite";
import react from "@vitejs/plugin-react";
import {loadEnv} from 'vite'

export default ({mode}) => {
    Object.assign(process.env, loadEnv(mode, process.cwd()))

    return defineConfig({

        base: "/",
        plugins: [react()],
        server: {
            host: "0.0.0.0",
            proxy: {
                '/api': {
                    target: 'http://localhost:8000', // 后端服务地址
                    changeOrigin: true, // 修改请求头中的来源
                    rewrite: (path) => path.replace(/^\/api/, ''), // 可选：移除 /api 前缀
                },
            },
        },
        define: {
            "process.env": process.env,  // 确保 Vite 读取环境变量
        }
    })
}
// https://vite.dev/config/
