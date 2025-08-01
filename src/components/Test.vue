<template>
  <div :class="testClasses">
    <h1 :class="titleClasses">
      {{ blok.test || "Composant Test" }}
    </h1>
    <p v-if="blok.subtitle" class="text-xl opacity-90 max-w-2xl mx-auto">
      {{ blok.subtitle }}
    </p>
    <div class="mt-4 text-sm opacity-75">
      Style appliqué: {{ blok.background_style || "défaut" }}
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({ blok: Object });

// Classes dynamiques basées sur les données Storyblok
const testClasses = computed(() => {
  const baseClasses = "p-12 mb-8 rounded-xl shadow-lg text-center";

  // Style par défaut ou depuis Storyblok
  const bgStyle = props.blok.background_style || "gradient-blue";

  const backgrounds = {
    "gradient-blue": "bg-gradient-to-r from-blue-500 to-purple-600 text-white",
    "gradient-green": "bg-gradient-to-r from-green-500 to-teal-600 text-white",
    "gradient-orange": "bg-gradient-to-r from-orange-500 to-red-600 text-white",
    "solid-dark": "bg-gray-900 text-white",
    "solid-light": "bg-gray-100 text-gray-900 border border-gray-300",
  };

  return `${baseClasses} ${
    backgrounds[bgStyle] || backgrounds["gradient-blue"]
  }`;
});

const titleClasses = computed(() => {
  const size = props.blok.title_size || "large";
  const sizes = {
    small: "text-3xl font-bold mb-4",
    large: "text-5xl font-bold mb-4 leading-tight",
    xl: "text-6xl font-black mb-6 leading-tight",
  };
  return sizes[size] || sizes["large"];
});
</script>
