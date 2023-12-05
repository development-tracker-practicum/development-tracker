from django.contrib import admin

from .models import Course, Skill, Theme, Level, LevelSkill, Modul, Special, Grade, UserLevel


admin.site.register(Course)
admin.site.register(Skill)
admin.site.register(Theme)
admin.site.register(LevelSkill)
admin.site.register(Modul)
admin.site.register(Special)
admin.site.register(Grade)
admin.site.register(UserLevel)
admin.site.register(Level)