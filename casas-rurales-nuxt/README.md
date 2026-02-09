# 🏡 Casas Rurales - Versión Nuxt

Aplicación web para buscar y alquilar casas rurales en España, desarrollada con **Nuxt 3**, **TypeScript** y **Tailwind CSS**.

## 📋 Descripción

Esta es la implementación con **Nuxt 3** del proyecto de Casas Rurales. Ofrece las mismas funcionalidades que la versión de Next.js pero aprovechando las características específicas de Nuxt.

## ✅ Características Implementadas

- ✅ **SSR (Server-Side Rendering)** por defecto en ambas páginas
- ✅ **Auto-imports** de componentes y composables
- ✅ **File-based routing** con rutas dinámicas
- ✅ **useFetch con cache** para optimizar llamadas a la API
- ✅ **Tailwind CSS** integrado via módulo oficial
- ✅ **TypeScript** configurado

## 🚀 Tecnologías

- **Nuxt 3** - Framework Vue con SSR
- **Vue 3** - Framework progresivo de JavaScript
- **TypeScript** - Tipado estático
- **Tailwind CSS** - Framework de estilos
- **useFetch** - Composable nativo para data fetching

## 📁 Estructura del Proyecto

```
nuxt/
├── components/
│   └── HouseCard.vue        # Componente de tarjeta
├── composables/
│   └── useHouses.ts         # Composable para API
├── pages/
│   ├── index.vue            # Página de listado (/)
│   └── houses/
│       └── [id].vue         # Página de detalle (/houses/:id)
├── types/
│   └── house.ts             # Tipos TypeScript
└── nuxt.config.ts           # Configuración de Nuxt
```

## 🛠️ Instalación y Uso

### Requisitos Previos

- Node.js 18.17 o superior
- API Server corriendo en `http://localhost:3001` (ver instrucciones en el README principal)

### Comandos

```bash
# Instalar dependencias
npm install

# Desarrollo
npm run dev

# Build para producción
npm run build

# Preview de producción
npm run preview
```

La aplicación estará disponible en [http://localhost:3000](http://localhost:3000)

## 🎯 Diferencias con la versión de Next.js

### Ventajas de Nuxt:
- **Auto-imports**: No necesitas importar componentes ni composables
- **Más opinado**: Estructura más definida y convenciones claras
- **useFetch nativo**: Composable integrado con cache automático
- **File-based routing más simple**: Carpeta `pages/` sin necesidad de convenciones especiales
- **Mejores DevTools**: Herramientas de desarrollo más completas

### Características de Next.js que no están aquí:
- Image optimization (usamos `<img>` normal en Nuxt)
- Turbopack (Nuxt usa Vite por defecto, que es muy rápido)

## 🔌 Integración con API

El composable `useHouses` maneja todas las llamadas a la API:

```typescript
const { getAllHouses, getHouseById } = useHouses();

// Obtener todas las casas con cache
const { data, pending, error } = await useAsyncData(
  'houses',
  () => getAllHouses()
);
```

Las imágenes se transforman automáticamente de rutas relativas a URLs completas:
- `/images/casa-malaga.jpg` → `http://localhost:3001/images/casa-malaga.jpg`

## 📊 Rendering

- **Página principal (`/`)**: SSR con `useAsyncData` 
- **Página de detalle (`/houses/[id]`)**: SSR con `useAsyncData` por ID
- Ambas páginas utilizan cache para optimizar las peticiones

## ⚡ Performance

- **Vite** como bundler (más rápido que Webpack)
- **Code splitting** automático por página
- **Lazy loading** de componentes
- **Cache** inteligente con `useFetch`

## 🌐 Despliegue

Puedes desplegar en:
- **Vercel** 
- **Netlify**
- **Cloudflare Pages**
- Cualquier hosting con soporte para Node.js o edge functions

```bash
npm run build
npm run preview  # Para probar localmente
```

---

**Desarrollado con Nuxt 3 - Lemoncode Módulo 5** 🍋
