<template>
  <div :class="featureClasses">
    <h3 :class="titleClasses">
      {{ blok.name || "Feature sans nom" }}
    </h3>
    <p v-if="blok.description" class="text-gray-600 leading-relaxed">
      {{ blok.description }}
    </p>
  </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({ blok: Object });

const featureClasses = computed(() => {
  const baseClasses =
    "p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow";

  // Couleur de bordure configurable
  const borderColor = props.blok.border_color || "green";
  const borders = {
    green: "border-l-4 border-green-500 bg-white",
    blue: "border-l-4 border-blue-500 bg-white",
    purple: "border-l-4 border-purple-500 bg-white",
    red: "border-l-4 border-red-500 bg-white",
    none: "bg-gray-50",
  };

  return `${baseClasses} ${borders[borderColor] || borders["green"]}`;
});

const titleClasses = computed(() => {
  const size = props.blok.title_size || "normal";
  const sizes = {
    small: "text-lg font-bold text-gray-800 mb-2",
    normal: "text-xl font-bold text-gray-800 mb-3",
    large: "text-2xl font-bold text-gray-800 mb-4",
  };
  return sizes[size] || sizes["normal"];
});
</script>
