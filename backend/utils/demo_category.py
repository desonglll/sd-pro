import json

from django.utils.text import slugify

# 预定义 32 条 category 数据（id、name、title、series 对应 bucket.series 的 pk）
categories = [
    {"id": 1, "name": "d-series", "title": "d-series", "series": 1},
    {"id": 2, "name": "dayu220", "title": "dayu220", "series": 2},
    {"id": 3, "name": "dayu280", "title": "dayu280", "series": 2},
    {"id": 4, "name": "dayu300", "title": "dayu300", "series": 2},
    {"id": 5, "name": "dayu360", "title": "dayu360", "series": 2},
    {"id": 6, "name": "dayu500", "title": "dayu500", "series": 2},
    {"id": 7, "name": "cater312", "title": "cater312", "series": 3},
    {"id": 8, "name": "cater320", "title": "cater320", "series": 3},
    {"id": 9, "name": "cater325", "title": "cater325", "series": 3},
    {"id": 10, "name": "cater330", "title": "cater330", "series": 3},
    {"id": 11, "name": "cater345", "title": "cater345", "series": 3},
    {"id": 12, "name": "hitachi-series", "title": "hitachi-series", "series": 4},
    {"id": 13, "name": "kobelco60", "title": "kobelco60", "series": 5},
    {"id": 14, "name": "kobelco200", "title": "kobelco200", "series": 5},
    {"id": 15, "name": "kobelco230", "title": "kobelco230", "series": 5},
    {"id": 16, "name": "kobelco350", "title": "kobelco350", "series": 5},
    {"id": 17, "name": "volvo210", "title": "volvo210", "series": 6},
    {"id": 18, "name": "volvo290", "title": "volvo290", "series": 6},
    {"id": 19, "name": "volvo360", "title": "volvo360", "series": 6},
    {"id": 20, "name": "hyundai-series", "title": "hyundai-series", "series": 7},
    {"id": 21, "name": "komatsu60", "title": "komatsu60", "series": 8},
    {"id": 22, "name": "komatsu100", "title": "komatsu100", "series": 8},
    {"id": 23, "name": "komatsu200", "title": "komatsu200", "series": 8},
    {"id": 24, "name": "komatsu300", "title": "komatsu300", "series": 8},
    {"id": 25, "name": "komatsu400", "title": "komatsu400", "series": 8},
    {"id": 26, "name": "xiaozi", "title": "xiaozi", "series": 9},
    {"id": 27, "name": "combined", "title": "combined", "series": 10}
]

# 固定的图片地址（示例链接）
image_src = "http://sd-get.com/home/2/c/sdvaqx/resource/2020/11/03/5fa0f5b0bbf9e.jpg"

# 构造 fixture 列表，每条记录符合 Django fixture 格式
fixture = []
for cat in categories:
    fixture.append({
        "model": "bucket.category",
        "pk": cat["id"],
        "fields": {
            "name": cat["name"],
            "title": cat["title"],
            "description": f"{cat['title']}描述",
            "image_src": image_src,
            "series": cat["series"],
            "slug": slugify(cat["name"])
        }
    })

# 将结果写入 category.json 文件
with open("../fixtures/category.json", "w", encoding="utf-8") as f:
    json.dump(fixture, f, ensure_ascii=False, indent=2)

print(f"生成了 {len(fixture)} 条 category 数据，保存在 category.json 文件中。")
