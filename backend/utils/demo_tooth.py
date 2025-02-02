import json

# 定义所有 category 数据（共 32 个）
categories = [
    {"id": 1, "name": "d-series", "title": "D系列"},
    {"id": 2, "name": "dayu-series", "title": "大宇系列"},
    {"id": 3, "name": "dayu220", "title": "大宇220"},
    {"id": 4, "name": "dayu280", "title": "大宇280"},
    {"id": 5, "name": "dayu300", "title": "大宇300"},
    {"id": 6, "name": "dayu360", "title": "大宇360"},
    {"id": 7, "name": "dayu500", "title": "大宇500"},
    {"id": 8, "name": "cater-series", "title": "卡特系列"},
    {"id": 9, "name": "cater312", "title": "卡特312"},
    {"id": 10, "name": "cater320", "title": "卡特320"},
    {"id": 11, "name": "cater325", "title": "卡特325"},
    {"id": 12, "name": "cater330", "title": "卡特330"},
    {"id": 13, "name": "cater345", "title": "卡特345"},
    {"id": 14, "name": "hitachi-series", "title": "日立系列"},
    {"id": 15, "name": "kobelco-series", "title": "神钢系列"},
    {"id": 16, "name": "kobelco60", "title": "神钢60"},
    {"id": 17, "name": "kobelco200", "title": "神钢200"},
    {"id": 18, "name": "kobelco230", "title": "神钢230"},
    {"id": 19, "name": "kobelco350", "title": "神钢350"},
    {"id": 20, "name": "volvo-series", "title": "沃尔沃系列"},
    {"id": 21, "name": "volvo210", "title": "沃210"},
    {"id": 22, "name": "volvo290", "title": "沃290"},
    {"id": 23, "name": "volvo360", "title": "沃360"},
    {"id": 24, "name": "hyundai-series", "title": "现代系列"},
    {"id": 25, "name": "komatsu-series", "title": "小松系列"},
    {"id": 26, "name": "komatsu60", "title": "小松60"},
    {"id": 27, "name": "komatsu100", "title": "小松100"},
    {"id": 28, "name": "komatsu200", "title": "小松200"},
    {"id": 29, "name": "komatsu300", "title": "小松300"},
    {"id": 30, "name": "komatsu400", "title": "小松400"},
    {"id": 31, "name": "xiaozi", "title": "销子"},
    {"id": 32, "name": "combined", "title": "组合"}
]

# 定义型号类型，元组格式为 (中文型号, 英文后缀)
variant_types = [
    ("尖", "sharp"),
    ("平", "flat")
]

# 定义两个数字
numbers = [100, 200]

image = "/uploads/demo_bucket.jpg"
image_src = "http://sd-get.com/home/2/c/sdvaqx/resource/2020/11/03/5fa0f5b0bbf9e.jpg"

fixture = []
pk = 1

for cat in categories:
    cat_id = cat["id"]
    cat_title = cat["title"]
    cat_name = cat["name"]
    for variant_cn, variant_en in variant_types:
        for num in numbers:
            # 拼接 name：可以将 cat_name 与数字及英文后缀组合
            # 如 "d-series" 生成 "d-series100-sharp"
            product_name = f"{cat_name}{num}-{variant_en}"
            # 拼接 title：例如 "D系列 尖 100" 或 "大宇系列 平 200"
            product_title = f"{cat_title} {variant_cn} {num}"
            product_description = f"{product_title} 型号描述"
            fixture.append({
                "model": "bucket.tooth",
                "pk": pk,
                "fields": {
                    "name": product_name,
                    "title": product_title,
                    "description": product_description,
                    "image": image,
                    "image_src": image_src,
                    "category": cat_id
                }
            })
            pk += 1

# 将结果写入 tooth.json 文件
with open("../fixtures/tooth.json", "w", encoding="utf-8") as f:
    json.dump(fixture, f, ensure_ascii=False, indent=2)

print(f"生成了 {len(fixture)} 条 tooth 数据，保存在 tooth.json 文件中。")
