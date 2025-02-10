import os
import json


def fix_json_structure(file_path):
    """ 读取 JSON 文件，去除最外层多余的嵌套列表，并重新写入 """
    try:
        with open(file_path, "r", encoding="utf-8") as f:
            data = json.load(f)

        # 确保数据是列表，并展开内部嵌套的列表
        if isinstance(data, list) and all(isinstance(item, list) for item in data):
            fixed_data = [item for sublist in data for item in sublist]  # 展平列表

            # 重新写入 JSON 文件
            with open(file_path, "w", encoding="utf-8") as f:
                json.dump(fixed_data, f, ensure_ascii=False, indent=4)

            print(f"已修复: {file_path}")
        else:
            print(f"无需修改: {file_path}")

    except Exception as e:
        print(f"处理 {file_path} 时出错: {e}")


def process_all_json_files():
    """ 遍历当前目录下的所有 JSON 文件并处理 """
    for file_name in os.listdir("."):
        if file_name.endswith(".json"):
            fix_json_structure(file_name)


if __name__ == "__main__":
    process_all_json_files()
