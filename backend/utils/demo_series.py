import json

# 定义所有 series 数据
series_list = [
    {"id": 1, "name": "d-series", "title": "D系列"},
    {"id": 2, "name": "dayu-series", "title": "大宇系列"},
    {"id": 3, "name": "cater-series", "title": "卡特系列"},
    {"id": 4, "name": "hitachi-series", "title": "日立系列"},
    {"id": 5, "name": "kobelco-series", "title": "神钢系列"},
    {"id": 6, "name": "volvo-series", "title": "沃尔沃系列"},
    {"id": 7, "name": "hyundai-series", "title": "现代系列"},
    {"id": 8, "name": "komatsu-series", "title": "小松系列"},
    {"id": 9, "name": "xiaozi", "title": "销子"},
    {"id": 10, "name": "combined", "title": "组合"}
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
