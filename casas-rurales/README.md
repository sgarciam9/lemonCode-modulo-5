# 🏡 Casas Rurales - Laboratorio MetaFrameworks

Aplicación web para buscar y alquilar casas rurales en España, desarrollada con **Next.js 15**, **TypeScript** y **Tailwind CSS**.

## 📋 Descripción del Proyecto

Este proyecto es parte del laboratorio de MetaFrameworks del Módulo 5 de Lemoncode. La aplicación permite a los usuarios:

- Ver un listado completo de casas rurales disponibles
- Acceder a información detallada de cada propiedad
- Visualizar características, precios, comodidades y reseñas
- Navegar entre páginas de forma fluida

## ✅ Requisitos Implementados

- ✅ **Meta-framework**: Next.js 15 con App Router
- ✅ **Mínimo 2 rutas**: 
  - `/` - Listado de casas rurales
  - `/casas/[id]` - Detalle de una casa específica
- ✅ **Librería de estilos**: Tailwind CSS
- ✅ **Integración con API**: Conectado a la API mock de Lemoncode
- ✅ **Navegación funcional**: Rutas dinámicas con parámetros
- ✅ **Sistema de reviews**: Valoraciones y comentarios de usuarios

## 🚀 Tecnologías Utilizadas

- **Next.js 15** - Framework React con App Router
- **React 19** - Biblioteca de UI
- **TypeScript** - Tipado estático
- **Tailwind CSS** - Framework de estilos utility-first
- **ESLint** - Linter para calidad de código

## 📁 Estructura del Proyecto

```
casas-rurales/
├── app/
│   ├── casas/[id]/
│   │   ├── page.tsx         # Página de detalle
│   │   └── not-found.tsx    # Página 404
│   ├── layout.tsx           # Layout principal
│   ├── page.tsx             # Página inicio (listado)
│   └── globals.css          # Estilos globales
├── components/
│   └── CasaCard.tsx         # Tarjeta de casa
├── services/
│   └── casas.service.ts     # Servicio API
└── types/
    └── casa.ts              # Tipos TypeScript
```

## 🛠️ Configuración del API Server

Esta aplicación se conecta a la API mock de Lemoncode. **Debes tener el servidor corriendo antes de iniciar la aplicación**.

### Paso 1: Clonar el repositorio de la API

```bash
# En una terminal separada, clona el repositorio de la API
git clone https://github.com/Lemoncode/master-frontend-metaframeworks-lab.git

# Navega a la carpeta del api-server
cd master-frontend-metaframeworks-lab/api-server
```

### Paso 2: Instalar dependencias de la API

```bash
npm install
```

### Paso 3: Ejecutar el servidor de la API

```bash
npm start
```

El servidor debería iniciar en `http://localhost:3001`

### Endpoints disponibles:
- `GET http://localhost:3001/api/houses` - Lista todas las casas
- `GET http://localhost:3001/api/houses/:id` - Detalle de una casa específica

## 🛠️ Instalación y Uso

### Requisitos Previos

- Node.js 18.17 o superior
- npm, yarn, pnpm o bun

### Comandos

```bash
# Instalar dependencias (si es necesario)
npm install

# Ejecutar servidor de desarrollo
npm run dev

# Construir para producción
npm run build

# Iniciar servidor de producción
npm start

# Ejecutar linter
npm run lint
```

La aplicación estará disponible en [http://localhost:3000](http://localhost:3000)

## 🎨 Características de Diseño

### Página Principal
- Grid responsive (1/2/3 columnas según dispositivo)
- Tarjetas con imagen, nombre, ubicación y precio
- Información de habitaciones y baños
- Hover effects para mejor UX

### Página de Detalle
- Imagen principal en tamaño grande
- Descripción completa de la propiedad
- Características destacadas (habitaciones, camas, baños)
- Sistema de reviews con fechas y valoraciones
- Botón de navegación para volver al listado

### Responsive
- **Móvil**: 1 columna
- **Tablet (≥768px)**: 2 columnas
- **Desktop (≥1024px)**: 3 columnas

## 🔌 Integración con API

El servicio se conecta a la API mock de Lemoncode en `http://localhost:3001`.

La aplicación transforma automáticamente las rutas relativas de imágenes (`/images/...`) a URLs completas (`http://localhost:3001/images/...`).

Las imágenes se cargan directamente sin optimización (usando `unoptimized` en los componentes Image de Next.js) para evitar problemas con localhost durante el desarrollo.

### Estructura de datos de la API

```typescript
interface House {
  id: string;
  name: string;
  description: string;
  address: string;
  city: string;
  country: string;
  bedrooms: number;
  beds: number;
  bathrooms: number;
  price: number;
  image: string;
  amenities: string[];
  reviews: Review[];
}

interface Review {
  id: string;
  author: string;
  date: string;
  comment: string;
  rating: number;
}
```

## 📱 Datos de la API

La API proporciona 6 casas rurales en España:
- Casa rural Málaga
- Casa rural Tomelloso
- Casa de campo Jaén
- Casa Valencia (con piscina)
- Casa rural Granada
- Casa rural Asturias

Cada casa incluye: imágenes propias, descripciones detalladas, características (habitaciones, camas, baños), precio por noche, comodidades (amenities) y reviews de usuarios con valoraciones.

## ⚠️ Notas Técnicas

### Imágenes
- Las imágenes se sirven desde `http://localhost:3001/images/`
- Se usa `unoptimized` en los componentes Image de Next.js para desarrollo con localhost
- Para producción, considera configurar un CDN o servicio de optimización de imágenes

### API Server
- **IMPORTANTE**: El servidor de la API debe estar corriendo en el puerto 3001
- Si el API server no está disponible, la aplicación mostrará errores de fetch

## 🌐 Despliegue

Esta aplicación puede desplegarse en:
- **Vercel** (recomendado)
- Netlify
- AWS Amplify
- Cualquier plataforma con Node.js

### Desplegar en Vercel

```bash
npm install -g vercel
vercel
```

## 📚 Recursos de Next.js

- [Documentación de Next.js](https://nextjs.org/docs)
- [Tutorial Interactivo](https://nextjs.org/learn)
- [Repositorio de Next.js](https://github.com/vercel/next.js)

---

**Desarrollado como parte del Módulo 5 - Lemoncode** 🍋
