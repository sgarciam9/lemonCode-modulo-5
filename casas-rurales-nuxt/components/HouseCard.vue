<template>
  <NuxtLink :to="`/houses/${house.id}`" class="block">
    <div class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer">
      <div class="relative h-48">
        <img
          :src="house.image"
          :alt="house.name"
          class="w-full h-full object-cover"
        />
      </div>
      <div class="p-4">
        <h3 class="text-xl font-semibold text-gray-800 mb-2">
          {{ house.name }}
        </h3>
        <p class="text-gray-600 mb-2">{{ house.city }}</p>
        <div class="flex items-center justify-between">
          <div class="text-sm text-gray-500">
            {{ house.bedrooms }} habitaciones · {{ house.bathrooms }} baños
          </div>
          <div class="text-lg font-bold text-blue-600">
            {{ house.price }}€<span class="text-sm font-normal">/noche</span>
          </div>
        </div>
      </div>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
import type { House } from '~/types/house';

defineProps<{
  house: House;
}>();
</script>
