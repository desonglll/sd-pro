from django.utils.text import slugify
from pypinyin import lazy_pinyin


def chinese_to_slug(text):
    """
    将中文文本转换为 slug 格式
    例如："你好世界" -> "ni-hao-shi-jie"
    """
    # 使用 lazy_pinyin 将中文转换为拼音列表
    pinyin_list = lazy_pinyin(text)
    # 拼接拼音，使用空格隔开，以便 slugify 正常处理
    pinyin_str = ' '.join(pinyin_list)
    # 使用 Django 内置的 slugify 转换为 slug 格式
    return slugify(pinyin_str)


# 示例
print(chinese_to_slug("你好世界"))  # 输出: "ni-hao-shi-jie"
