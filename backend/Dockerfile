# 使用更小的基础镜像
FROM python:3.12-alpine

# 设置工作目录
WORKDIR /app

# 安装系统依赖和 Poetry
RUN apk add --no-cache \
    libpq-dev gcc musl-dev curl \
    && curl -sSL https://install.python-poetry.org | python3 - \
    && apk del gcc musl-dev

# 将 Poetry 添加到 PATH
ENV PATH="/root/.local/bin:$PATH"

# 复制项目的依赖文件
COPY pyproject.toml poetry.lock ./

# 安装项目依赖（仅安装生产依赖）
RUN poetry config virtualenvs.create false \
    && poetry install --only main --no-interaction --no-ansi

# 复制项目文件
COPY . .

# 运行静态文件收集
RUN python manage.py collectstatic --noinput

# 暴露端口
EXPOSE 8000

# 启动命令
CMD ["gunicorn", "sd_pro.wsgi:application", "--bind", "0.0.0.0:8000"]
