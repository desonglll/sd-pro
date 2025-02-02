from django.apps import apps


def list_all_models():
    for model in apps.get_models():
        print(f"Model: {model.__name__}")
        for field in model._meta.get_fields():
            # field.name 字段名称，field.get_internal_type() 字段类型
            print(f"    {field.name} ({field.get_internal_type()})")
        print("\n")


if __name__ == '__main__':
    list_all_models()
