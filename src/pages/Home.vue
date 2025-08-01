<script setup>
import { ref, onMounted } from "vue";
import { useStoryblokApi } from "@storyblok/vue";

const story = ref(null);
const loading = ref(true);
const error = ref(null);

onMounted(async () => {
  try {
    const storyblokApi = useStoryblokApi();
    const { data } = await storyblokApi.get("cdn/stories/home", {
      version: "draft",
    });
    story.value = data.story;
    console.log("Story data:", story.value);

    if (story.value?.content?.body) {
      console.log("=== STRUCTURE DES BLOKS ===");
      story.value.content.body.forEach((blok, index) => {
        console.log(`Blok ${index + 1}:`, {
          component: blok.component,
          fields: Object.keys(blok),
          data: blok,
        });
      });
    }
  } catch (err) {
    console.error("Error loading story:", err);
    error.value = err.message;
  } finally {
    loading.value = false;
  }
});
</script>

<template>
  <div class="p-6">
    <div v-if="loading" class="p-8 text-center">
      <p class="text-blue-500">Chargement...</p>
    </div>

    <div v-else-if="error" class="p-8 text-center">
      <p class="text-red-500">Erreur: {{ error }}</p>
    </div>

    <div v-else-if="story?.content">
      <h1 class="text-3xl font-bold mb-8 text-center">{{ story.name }}</h1>

      <StoryblokComponent
        v-for="blok in story.content.body"
        :blok="blok"
        :key="blok._uid"
      />
    </div>

    <div v-else class="p-8 text-center">
      <p class="text-red-500">Aucune story trouvée</p>
    </div>
  </div>
</template>
