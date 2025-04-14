from rest_framework import serializers
from django.db.models import Avg

from portfolio import models


class CharacterSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Character
        fields = ['name', 'slug', 'sex', 'alive',
                  'first_appearance', 'created_by']
        extra_kwargs = {
            'slug': {'required': False}
        }


class TagSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Tag
        fields = ["name"]


class ArtistSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Artist
        fields = '__all__'
        extra_kwargs = {
            'slug': {'required': False}
        }


class ArtistImageSerializer(serializers.ModelSerializer):
    """Serializer for uploading images to artists."""

    class Meta:
        model = models.Artist
        fields = ['id', 'image']
        read_only_fields = ['id']
        extra_kwargs = {
            'image': {'required': True}
        }


class ArtSerializer(serializers.ModelSerializer):

    tags = serializers.StringRelatedField(many=True)
    characters = serializers.StringRelatedField(many=True)
    artists = serializers.StringRelatedField(many=True)
    rating = serializers.SerializerMethodField()
    ratings = serializers.SerializerMethodField()

    class Meta:
        model = models.Art
        fields = '__all__'
        extra_kwargs = {
            'tags': {'required': False},
            'characters': {'required': False},
        }

    def get_rating(self, obj):
        return obj.rating.aggregate(Avg("rating"))["rating__avg"]

    def get_ratings(self, obj):
        return obj.rating.all().values("user__email", "rating", "comment")


class ArtImageSerializer(serializers.ModelSerializer):
    """Serializer for uploading images to art."""

    class Meta:
        model = models.Art
        fields = ['id', 'image']
        read_only_fields = ['id']
        extra_kwargs = {
            'image': {'required': True}
        }
