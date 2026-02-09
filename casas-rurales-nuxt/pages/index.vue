<template>
  <main class="min-h-screen bg-gray-50">
    <header class="bg-white shadow-sm">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div class="flex items-center gap-3">
          <div class="text-3xl">🏡</div>
          <h1 class="text-3xl font-bold text-gray-900">Casas Rurales</h1>
        </div>
        <p class="mt-2 text-gray-600">
          Encuentra la casa rural perfecta para tus vacaciones
        </p>
      </div>
    </header>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div v-if="pending" class="text-center py-12">
        <p class="text-gray-600">Cargando casas...</p>
      </div>
      
      <div v-else-if="error" class="text-center py-12">
        <p class="text-red-600">Error al cargar las casas. Asegúrate de que el servidor API esté corriendo en el puerto 3001.</p>
      </div>
      
      <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <HouseCard
          v-for="house in houses"
          :key="house.id"
          :house="house"
        />
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
const { getAllHouses } = useHouses();

const { data: houses, pending, error } = await useAsyncData(
  'houses',
  () => getAllHouses()
);
</script>
