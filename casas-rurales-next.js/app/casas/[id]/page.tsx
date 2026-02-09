import { housesService } from '@/services/casas.service';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function CasaDetalle({ params }: PageProps) {
  const { id } = await params;
  const house = await housesService.getHouseById(id);

  if (!house) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link 
            href="/" 
            className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
          >
            <span className="mr-2">←</span>
            <span className="text-lg">Volver a Casas Rurales</span>
          </Link>
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          {/* Imagen principal */}
          <div className="relative h-96">
            <Image
              src={house.image}
              alt={house.name}
              fill
              className="object-cover"
              priority
              unoptimized
            />
          </div>

          <div className="p-6">
            {/* Encabezado */}
            <div className="flex justify-between items-start mb-6">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                  🏡 {house.name}
                </h1>
                <p className="text-gray-600">{house.address}</p>
                <p className="text-gray-500">{house.city}, {house.country}</p>
              </div>
              <div className="text-right">
                <div className="text-3xl font-bold text-blue-600">
                  {house.price}€
                </div>
                <div className="text-gray-600">/noche</div>
              </div>
            </div>

            {/* Descripción */}
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-3">
                Descripción
              </h2>
              <p className="text-gray-700 leading-relaxed">{house.description}</p>
            </div>

            {/* Características */}
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-3">
                Características
              </h2>
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <div className="text-2xl mb-2">🛏️</div>
                  <div className="font-semibold text-gray-900">
                    {house.bedrooms}
                  </div>
                  <div className="text-sm text-gray-600">Habitaciones</div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <div className="text-2xl mb-2">🛋️</div>
                  <div className="font-semibold text-gray-900">{house.beds}</div>
                  <div className="text-sm text-gray-600">Camas</div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <div className="text-2xl mb-2">🚿</div>
                  <div className="font-semibold text-gray-900">{house.bathrooms}</div>
                  <div className="text-sm text-gray-600">Baños</div>
                </div>
              </div>
            </div>

            {/* Comodidades */}
            {house.amenities && house.amenities.length > 0 && (
              <div className="mb-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-3">
                  Comodidades
                </h2>
                <div className="flex flex-wrap gap-2">
                  {house.amenities.map((amenity, index) => (
                    <span 
                      key={index} 
                      className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm"
                    >
                      {amenity}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Reviews */}
            {house.reviews && house.reviews.length > 0 && (
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-3">
                  Reviews
                </h2>
                <div className="space-y-4">
                  {house.reviews.map((review) => (
                    <div key={review.id} className="border border-gray-200 rounded-lg p-4">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <div className="font-medium text-gray-900">{review.author}</div>
                          <div className="text-sm text-gray-500">
                            {new Date(review.date).toLocaleDateString('es-ES')}
                          </div>
                        </div>
                        <div className="flex items-center gap-1">
                          <span className="text-yellow-500">⭐</span>
                          <span className="font-semibold text-gray-900">{review.rating}</span>
                        </div>
                      </div>
                      <p className="text-gray-700">{review.comment}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
