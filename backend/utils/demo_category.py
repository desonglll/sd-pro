import json

from django.utils.text import slugify

# 预定义 32 条 category 数据（id、name、title、series 对应 bucket.series 的 pk）
categories = [
    {"id": 1, "name": "d-series", "title": "D系列", "series": 1},
    {"id": 2, "name": "dayu-series", "title": "大宇系列", "series": 2},
    {"id": 3, "name": "dayu220", "title": "大宇220", "series": 2},
    {"id": 4, "name": "dayu280", "title": "大宇280", "series": 2},
    {"id": 5, "name": "dayu300", "title": "大宇300", "series": 2},
    {"id": 6, "name": "dayu360", "title": "大宇360", "series": 2},
    {"id": 7, "name": "dayu500", "title": "大宇500", "series": 2},
    {"id": 8, "name": "cater-series", "title": "卡特系列", "series": 3},
    {"id": 9, "name": "cater312", "title": "卡特312", "series": 3},
    {"id": 10, "name": "cater320", "title": "卡特320", "series": 3},
    {"id": 11, "name": "cater325", "title": "卡特325", "series": 3},
    {"id": 12, "name": "cater330", "title": "卡特330", "series": 3},
    {"id": 13, "name": "cater345", "title": "卡特345", "series": 3},
    {"id": 14, "name": "hitachi-series", "title": "日立系列", "series": 4},
    {"id": 15, "name": "kobelco-series", "title": "神钢系列", "series": 5},
    {"id": 16, "name": "kobelco60", "title": "神钢60", "series": 5},
    {"id": 17, "name": "kobelco200", "title": "神钢200", "series": 5},
    {"id": 18, "name": "kobelco230", "title": "神钢230", "series": 5},
    {"id": 19, "name": "kobelco350", "title": "神钢350", "series": 5},
    {"id": 20, "name": "volvo-series", "title": "沃尔沃系列", "series": 6},
    {"id": 21, "name": "volvo210", "title": "沃210", "series": 6},
    {"id": 22, "name": "volvo290", "title": "沃290", "series": 6},
    {"id": 23, "name": "volvo360", "title": "沃360", "series": 6},
    {"id": 24, "name": "hyundai-series", "title": "现代系列", "series": 7},
    {"id": 25, "name": "komatsu-series", "title": "小松系列", "series": 8},
    {"id": 26, "name": "komatsu60", "title": "小松60", "series": 8},
    {"id": 27, "name": "komatsu100", "title": "小松100", "series": 8},
    {"id": 28, "name": "komatsu200", "title": "小松200", "series": 8},
    {"id": 29, "name": "komatsu300", "title": "小松300", "series": 8},
    {"id": 30, "name": "komatsu400", "title": "小松400", "series": 8},
    {"id": 31, "name": "xiaozi", "title": "销子", "series": 9},
    {"id": 32, "name": "combined", "title": "组合", "series": 10}
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
