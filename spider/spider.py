import json
import requests
import re
import os


global count

count = 0


def one(url, path_folder, category_id):
    global count
    response = requests.get(url)
    json_file = f"json/tooth-{path_folder}.json"

    # 正则表达式匹配图片 URL 和对应的 label
    pattern = re.compile(
        r'<div\s+class="w-prd-imgbox"[^>]*\s+title="([^"]+)">[\s\S]*?<img[^>]*src="([^"]+)"',
        re.MULTILINE,
    )

    matches = pattern.findall(response.text)

    # 处理所有匹配到的图片
    for label, img_url in matches:
        # 确保图片 URL 是完整路径
        if not img_url.startswith("http"):
            img_url = "http://sd-get.com" + img_url

        # 处理文件名，去除非法字符
        safe_label = re.sub(r'[\/:*?"<>|]', "_", label)  # 替换非法字符
        print(f"下载 {safe_label} -> {img_url}")
        count += 1
        item = (
            {
                "model": "bucket.tooth",
                "pk": count,
                "fields": {
                    "name": safe_label,
                    "title": "safe_label",
                    "description": f"{safe_label} 型号描述",
                    "image": f"/uploads/{path_folder}/{safe_label}.jpg",
                    "image_src": img_url,
                    "category": category_id,
                },
            },
        )
        # 如果 JSON 文件不存在，创建一个空列表
        if not os.path.exists(json_file):
            with open(json_file, "w", encoding="utf-8") as f:
                json.dump([], f, ensure_ascii=False, indent=4)

        # 读取现有数据
        with open(json_file, "r", encoding="utf-8") as f:
            data = json.load(f)

        # 追加新数据
        data.append(item)

        # 写回 JSON 文件
        with open(json_file, "w", encoding="utf-8") as f:
            json.dump(data, f, ensure_ascii=False, indent=4)

        print(f"数据已追加到 {json_file}")
        # 下载图片
        # download_image(img_url, safe_label, path_folder)


# 下载图片函数
def download_image(image_url, image_name, path_folder):
    folder = os.path.join(os.path.dirname(__file__), "images")
    folder = os.path.join(folder, path_folder)
    if not os.path.exists(folder):
        os.makedirs(folder)

    try:
        img_response = requests.get(image_url, stream=True)
        img_ext = image_url.split(".")[-1]  # 获取图片扩展名
        img_filename = f"{image_name}.{img_ext}"  # 使用 label 作为文件名
        img_path = os.path.join(folder, img_filename)

        with open(img_path, "wb") as file:
            file.write(img_response.content)

        print(f"图片 {img_filename} 下载成功")
    except Exception as e:
        print(f"下载图片失败: {e}")


if __name__ == "__main__":
    url = "http://sd-get.com/cate-1972-1927.html"
    path_folder = "D系列"
    one(url, path_folder)
