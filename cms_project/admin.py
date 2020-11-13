from django_restful_admin import admin
from .models import ContactUsQuery
from cms.models import Page, PageType, GlobalPagePermission, StaticPlaceholder
from djangocms_blog.models import BlogCategory, Post
from djangocms_blog.cms_appconfig import BlogConfig
from djangocms_file.models import Folder
from djangocms_picture.models import Picture
from djangocms_snippet.models import Snippet
from taggit.models import Tag
from django.contrib.sites.models import Site

admin.site.register(ContactUsQuery)

# CMS models
admin.site.register(Page)
admin.site.register(PageType)
admin.site.register(GlobalPagePermission)
admin.site.register(StaticPlaceholder)
admin.site.register(BlogCategory)
admin.site.register(Post)
admin.site.register(BlogConfig)
admin.site.register(Folder)
admin.site.register(Picture)
admin.site.register(Snippet)
admin.site.register(Tag)
admin.site.register(Site)