# 基础镜像
FROM node:18-alpine AS builder

# 设置工作目录
WORKDIR /app

# 复制依赖文件
COPY package.json package-lock.json ./

# 安装依赖
RUN npm install

# 复制项目文件，包括 .env.production
COPY . .

RUN ls -a .

# 设置生产环境变量
ENV NODE_ENV=production

# 构建前端
RUN npm run build



# 使用 Nginx 作为静态文件服务器
FROM nginx:alpine

# 复制构建产物到 Nginx 的静态文件目录
COPY --from=builder /app/dist /usr/share/nginx/html

# 复制 Nginx 配置
COPY nginx.conf /etc/nginx/conf.d/default.conf

# 暴露端口
EXPOSE 80

# 启动 Nginx
CMD ["nginx", "-g", "daemon off;"]
