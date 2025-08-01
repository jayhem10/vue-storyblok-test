<template>
  <div v-editable="blok" class="px-6">
    <div class="bg-green-100 p-2 mb-4 text-sm">
      🔧 Page component loaded - Body items: {{ blok.body?.length }}
    </div>

    <StoryblokComponent
      v-for="nestedBlok in blok.body"
      :blok="nestedBlok"
      :key="nestedBlok._uid"
    />
  </div>
</template>

<script setup>
defineProps({ blok: Object });
</script>
