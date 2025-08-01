<template>
  <div class="bg-gray-50 p-8 mb-8 rounded-xl">
    <h2 class="text-2xl font-bold text-gray-800 mb-6 text-center">
      Nos fonctionnalités
    </h2>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <StoryblokComponent
        v-for="column in blok.columns"
        :blok="column"
        :key="column._uid"
      />
    </div>
  </div>
</template>

<script setup>
defineProps({ blok: Object });
</script>
