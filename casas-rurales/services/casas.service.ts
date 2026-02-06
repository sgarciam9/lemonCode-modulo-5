import { House } from '@/types/casa';

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

export const housesService = {
  async getAllHouses(): Promise<House[]> {
    try {
      const response = await fetch(`${API_BASE_URL}/api/houses`, {
        cache: 'no-store',
      });
      
      if (!response.ok) {
        throw new Error('Error al obtener las casas');
      }
      
      const houses = await response.json();
      return houses.map(transformImageUrl);
    } catch (error) {
      console.error('Error al obtener las casas:', error);
      throw error;
    }
  },

  async getHouseById(id: string): Promise<House | null> {
    try {
      const response = await fetch(`${API_BASE_URL}/api/houses/${id}`, {
        cache: 'no-store',
      });
      
      if (!response.ok) {
        throw new Error('Error al obtener la casa');
      }
      
      const house = await response.json();
      return house ? transformImageUrl(house) : null;
    } catch (error) {
      console.error('Error al obtener la casa:', error);
      return null;
    }
  },
};
