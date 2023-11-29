from django.contrib import admin

from .models import Course, Skill, SkillsTrack, Tag, Track, UserTrack


admin.site.register(Course)
admin.site.register(Skill)
admin.site.register(SkillsTrack)
admin.site.register(Tag)
admin.site.register(Track)
admin.site.register(UserTrack)
