import os
import json

# 获取当前目录下所有 JSON 文件
json_files = [f for f in os.listdir() if f.endswith(".json")]

for file in json_files:
    try:
        # 读取 JSON 文件
        with open(file, "r", encoding="utf-8") as f:
            data = json.load(f)

        # 确保数据是列表，并遍历其中的每个对象
        if isinstance(data, list):
            for item in data:
                if "fields" in item:
                    item["fields"]["language"] = "en"  # 添加新字段

        # 将修改后的数据写回文件
        with open(file, "w", encoding="utf-8") as f:
            json.dump(data, f, ensure_ascii=False, indent=4)

        print(f"✅ 文件 {file} 处理完成")

    except Exception as e:
        print(f"❌ 处理 {file} 时出错: {e}")
