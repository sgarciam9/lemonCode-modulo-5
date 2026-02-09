import { housesService } from '@/services/casas.service';
import CasaCard from '@/components/CasaCard';

export default async function Home() {
  const houses = await housesService.getAllHouses();

  return (
    <main className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center gap-3">
            <div className="text-3xl">🏡</div>
            <h1 className="text-3xl font-bold text-gray-900">Casas Rurales</h1>
          </div>
          <p className="mt-2 text-gray-600">
            Encuentra la casa rural perfecta para tus vacaciones
          </p>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {houses.map((house) => (
            <CasaCard key={house.id} house={house} />
          ))}
        </div>
      </div>
    </main>
  );
}
