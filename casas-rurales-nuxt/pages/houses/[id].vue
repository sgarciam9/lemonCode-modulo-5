<template>
  <main class="min-h-screen bg-gray-50">
    <header class="bg-white shadow-sm">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <NuxtLink 
          to="/" 
          class="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
        >
          <span class="mr-2">←</span>
          <span class="text-lg">Volver a Casas Rurales</span>
        </NuxtLink>
      </div>
    </header>

    <div v-if="pending" class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <p class="text-center text-gray-600">Cargando...</p>
    </div>

    <div v-else-if="!house" class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div class="text-center">
        <h1 class="text-4xl font-bold text-gray-900 mb-4">404</h1>
        <h2 class="text-2xl font-semibold text-gray-700 mb-4">
          Casa no encontrada
        </h2>
        <p class="text-gray-600 mb-8">
          Lo sentimos, no pudimos encontrar la casa que buscas.
        </p>
        <NuxtLink
          to="/"
          class="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Volver al inicio
        </NuxtLink>
      </div>
    </div>

    <div v-else class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div class="bg-white rounded-lg shadow-md overflow-hidden">
        <!-- Imagen principal -->
        <div class="relative h-96">
          <img
            :src="house.image"
            :alt="house.name"
            class="w-full h-full object-cover"
          />
        </div>

        <div class="p-6">
          <!-- Encabezado -->
          <div class="flex justify-between items-start mb-6">
            <div>
              <h1 class="text-3xl font-bold text-gray-900 mb-2">
                🏡 {{ house.name }}
              </h1>
              <p class="text-gray-600">{{ house.address }}</p>
              <p class="text-gray-500">{{ house.city }}, {{ house.country }}</p>
            </div>
            <div class="text-right">
              <div class="text-3xl font-bold text-blue-600">
                {{ house.price }}€
              </div>
              <div class="text-gray-600">/noche</div>
            </div>
          </div>

          <!-- Descripción -->
          <div class="mb-6">
            <h2 class="text-xl font-semibold text-gray-900 mb-3">
              Descripción
            </h2>
            <p class="text-gray-700 leading-relaxed">{{ house.description }}</p>
          </div>

          <!-- Características -->
          <div class="mb-6">
            <h2 class="text-xl font-semibold text-gray-900 mb-3">
              Características
            </h2>
            <div class="grid grid-cols-3 gap-4">
              <div class="bg-gray-50 p-4 rounded-lg text-center">
                <div class="text-2xl mb-2">🛏️</div>
                <div class="font-semibold text-gray-900">
                  {{ house.bedrooms }}
                </div>
                <div class="text-sm text-gray-600">Habitaciones</div>
              </div>
              <div class="bg-gray-50 p-4 rounded-lg text-center">
                <div class="text-2xl mb-2">🛋️</div>
                <div class="font-semibold text-gray-900">{{ house.beds }}</div>
                <div class="text-sm text-gray-600">Camas</div>
              </div>
              <div class="bg-gray-50 p-4 rounded-lg text-center">
                <div class="text-2xl mb-2">🚿</div>
                <div class="font-semibold text-gray-900">{{ house.bathrooms }}</div>
                <div class="text-sm text-gray-600">Baños</div>
              </div>
            </div>
          </div>

          <!-- Comodidades -->
          <div v-if="house.amenities && house.amenities.length > 0" class="mb-6">
            <h2 class="text-xl font-semibold text-gray-900 mb-3">
              Comodidades
            </h2>
            <div class="flex flex-wrap gap-2">
              <span 
                v-for="(amenity, index) in house.amenities"
                :key="index" 
                class="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm"
              >
                {{ amenity }}
              </span>
            </div>
          </div>

          <!-- Reviews -->
          <div v-if="house.reviews && house.reviews.length > 0">
            <h2 class="text-xl font-semibold text-gray-900 mb-3">
              Reviews
            </h2>
            <div class="space-y-4">
              <div
                v-for="review in house.reviews"
                :key="review.id"
                class="border border-gray-200 rounded-lg p-4"
              >
                <div class="flex justify-between items-start mb-2">
                  <div>
                    <div class="font-medium text-gray-900">{{ review.author }}</div>
                    <div class="text-sm text-gray-500">
                      {{ new Date(review.date).toLocaleDateString('es-ES') }}
                    </div>
                  </div>
                  <div class="flex items-center gap-1">
                    <span class="text-yellow-500">⭐</span>
                    <span class="font-semibold text-gray-900">{{ review.rating }}</span>
                  </div>
                </div>
                <p class="text-gray-700">{{ review.comment }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
const route = useRoute();
const { getHouseById } = useHouses();

const { data: house, pending } = await useAsyncData(
  `house-${route.params.id}`,
  () => getHouseById(route.params.id as string)
);
</script>
