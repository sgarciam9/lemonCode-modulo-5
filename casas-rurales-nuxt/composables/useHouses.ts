import type { House } from '~/types/house';

const API_BASE_URL = 'http://localhost:3001';

// Función helper para transformar las rutas de imagen
function transformImageUrl(house: House): House {
  return {
    ...house,
    image: house.image.startsWith('http') 
      ? house.image 
      : `${API_BASE_URL}${house.image}`
  };
}

export const useHouses = () => {
  const getAllHouses = async (): Promise<House[]> => {
    try {
      const data = await $fetch<House[]>(`${API_BASE_URL}/api/houses`);
      return data.map(transformImageUrl);
    } catch (error) {
      console.error('Error al obtener las casas:', error);
      throw error;
    }
  };

  const getHouseById = async (id: string): Promise<House | null> => {
    try {
      const data = await $fetch<House>(`${API_BASE_URL}/api/houses/${id}`);
      return transformImageUrl(data);
    } catch (error) {
      console.error('Error al obtener la casa:', error);
      return null;
    }
  };

  return {
    getAllHouses,
    getHouseById
  };
};
