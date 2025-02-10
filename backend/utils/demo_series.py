import json

# 定义所有 series 数据
series_list = [
    {"id": 1, "name": "d-series", "title": "d-series"},
    {"id": 2, "name": "dayu-series", "title": "dayu-series"},
    {"id": 3, "name": "cater-series", "title": "cater-series"},
    {"id": 4, "name": "hitachi-series", "title": "hitachi-series"},
    {"id": 5, "name": "kobelco-series", "title": "kobelco-series"},
    {"id": 6, "name": "volvo-series", "title": "volvo-series"},
    {"id": 7, "name": "hyundai-series", "title": "hyundai-series"},
    {"id": 8, "name": "komatsu-series", "title": "komatsu-series"},
    {"id": 9, "name": "xiaozi", "title": "xiaozi"},
    {"id": 10, "name": "combined", "title": "combined"}
]

# 构造 fixture 列表
fixture = []
for series in series_list:
    fixture.append({
        "model": "bucket.series",
        "pk": series["id"],
        "fields": {
            "name": series["name"],
            "title": series["title"]
        }
    })

# 将 fixture 写入 series.json 文件，格式化输出
with open("../fixtures/series.json", "w", encoding="utf-8") as f:
    json.dump(fixture, f, ensure_ascii=False, indent=2)

print("生成了 series.json 文件，共 {} 条记录。".format(len(fixture)))
