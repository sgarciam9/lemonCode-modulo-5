import Link from 'next/link';
import Image from 'next/image';
import { House } from '@/types/casa';

interface CasaCardProps {
  house: House;
}

export default function CasaCard({ house }: CasaCardProps) {
  return (
    <Link href={`/casas/${house.id}`}>
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer">
        <div className="relative h-48">
          <Image
            src={house.image}
            alt={house.name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            unoptimized
          />
        </div>
        <div className="p-4">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            {house.name}
          </h3>
          <p className="text-gray-600 mb-2">{house.city}</p>
          <div className="flex items-center justify-between">
            <div className="text-sm text-gray-500">
              {house.bedrooms} habitaciones · {house.bathrooms} baños
            </div>
            <div className="text-lg font-bold text-blue-600">
              {house.price}€<span className="text-sm font-normal">/noche</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
