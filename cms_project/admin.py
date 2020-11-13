from django_restful_admin import admin
from .models import ContactUsQuery
from cms.models import Page, PageType, GlobalPagePermission, StaticPlaceholder
from djangocms_blog.models import BlogCategory

admin.site.register(ContactUsQuery)

# CMS models
admin.site.register(Page)
admin.site.register(PageType)
admin.site.register(GlobalPagePermission)
admin.site.register(StaticPlaceholder)
admin.site.register(BlogCategory)