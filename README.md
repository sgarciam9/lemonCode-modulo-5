# Laboratorio Módulo 5 - MetaFrameworks

Este proyecto implementa una aplicación de alquiler de casas rurales utilizando **dos metaframeworks diferentes**: Next.js y Nuxt.

## 📋 Estructura del Repositorio

```
lemonCode-modulo-5/
├── casas-rurales/          # Implementación con Next.js
├── nuxt/                   # Implementación con Nuxt
├── master-frontend-metaframeworks-lab/  # API Server (mock)
└── README.md              # Este archivo
```

## 🚀 Metaframeworks Implementados

### 1. Next.js (React-based)
- **Framework:** Next.js 15 con App Router
- **Lenguaje:** TypeScript
- **Estilos:** Tailwind CSS 4
- **Puerto:** http://localhost:3000
- **Estrategia de Rendering:** SSR (Server-Side Rendering)
- **Carpeta:** `casas-rurales/`

### 2. Nuxt (Vue-based)
- **Framework:** Nuxt 3
- **Lenguaje:** TypeScript
- **Estilos:** Tailwind CSS (módulo @nuxtjs/tailwindcss)
- **Puerto:** http://localhost:3002
- **Estrategia de Rendering:** SSR (Server-Side Rendering)
- **Carpeta:** `nuxt/`

## 🔧 Instalación y Ejecución

### Prerrequisitos
- Node.js 18+ instalado
- npm o yarn

### 1. Instalar el API Server
```bash
cd master-frontend-metaframeworks-lab/api-server
npm install
npm start
# El servidor estará disponible en http://localhost:3001
```

### 2. Ejecutar Next.js
```bash
cd casas-rurales
npm install
npm run dev
# Abre http://localhost:3000
```

### 3. Ejecutar Nuxt
```bash
cd nuxt
npm install
npm run dev
# Abre http://localhost:3002
```

## 📊 Comparación de Implementaciones

| Característica | Next.js | Nuxt |
|----------------|---------|------|
| **Framework Base** | React | Vue |
| **Configuración** | next.config.ts | nuxt.config.ts |
| **Routing** | App Router (file-based) | Pages Router (file-based) |
| **Data Fetching** | fetch API (nativo) | useFetch/useAsyncData |
| **Componentes** | .tsx (JSX) | .vue (SFC) |
| **Estilos** | Tailwind CSS inline | Tailwind CSS inline |
| **Imágenes** | next/image (optimizado) | <img> estándar |
| **TypeScript** | Soporte nativo | Soporte nativo |
| **Hot Reload** | Turbopack | Vite |
| **Build Output** | `.next/` | `.nuxt/`, `.output/` |
| **Tamaño Bundle** | React ~70KB | Vue ~30KB |
| **Curva Aprendizaje** | Media-Alta | Media |

## 🌟 Funcionalidades Implementadas

### Pantalla Principal (Listado)
- ✅ Muestra todas las casas rurales disponibles
- ✅ Cada casa muestra: imagen, nombre, ciudad, descripción corta, valoración y precio
- ✅ Diseño responsive con grid adaptativo
- ✅ Navegación a la página de detalle al hacer clic

### Pantalla de Detalle
- ✅ Información completa de la casa seleccionada
- ✅ Galería de imágenes
- ✅ Lista de amenidades (características)
- ✅ Sección de reseñas con valoraciones
- ✅ Botón para volver al listado
- ✅ Página 404 personalizada para casas no encontradas

## 🎨 Decisiones de Diseño

### Rendering Strategy
Ambas implementaciones utilizan **SSR (Server-Side Rendering)** porque:
- ✅ Mejora SEO para contenido de casas rurales
- ✅ Tiempo de First Contentful Paint más rápido
- ✅ Mejor experiencia en dispositivos de baja potencia
- ✅ Apropiado para contenido que cambia con frecuencia (disponibilidad, precios)

### Gestión de Imágenes
- **Next.js:** Componente `<Image>` con `unoptimized` para localhost
- **Nuxt:** Etiquetas `<img>` estándar con transformación de URLs en el servicio

### Manejo de Errores
- Validación de IDs en rutas dinámicas
- Páginas 404 personalizadas
- Mensajes de error descriptivos

## 📁 Estructura de Archivos

### Next.js
```
casas-rurales/
├── app/
│   ├── page.tsx                  # Listado (/)
│   ├── casas/[id]/
│   │   ├── page.tsx              # Detalle (/casas/:id)
│   │   └── not-found.tsx         # 404
│   ├── layout.tsx
│   └── globals.css
├── components/
│   └── CasaCard.tsx              # Tarjeta de casa
├── services/
│   └── casas.service.ts          # Lógica API
├── types/
│   └── casa.ts                   # Interfaces TypeScript
└── next.config.ts
```

### Nuxt
```
nuxt/
├── pages/
│   ├── index.vue                 # Listado (/)
│   └── houses/[id].vue           # Detalle (/houses/:id)
├── components/
│   └── HouseCard.vue             # Tarjeta de casa
├── composables/
│   └── useHouses.ts              # Composable para API
├── types/
│   └── house.ts                  # Interfaces TypeScript
└── nuxt.config.ts
```

## 🔗 API Endpoints

Base URL: `http://localhost:3001`

- `GET /api/houses` - Listado de todas las casas
- `GET /api/houses/:id` - Detalle de una casa específica
- `GET /images/:filename` - Imágenes de las casas

## 🛠️ Tecnologías Utilizadas

### Comunes
- TypeScript
- Tailwind CSS
- Fetch API

### Next.js (React)
- React 19
- Next.js 15
- next/image
- next/link
- ESLint

### Nuxt (Vue)
- Vue 3
- Nuxt 3
- @nuxtjs/tailwindcss
- Nitro Server
- Vite

## 📝 Notas de Desarrollo

### Desafíos Resueltos
1. **Imágenes en desarrollo:** Configuración de dominios permitidos en ambos frameworks
2. **Puertos:** Asignación de puertos diferentes para evitar conflictos (3000, 3001, 3002)
3. **TypeScript:** Definición de interfaces compartidas entre proyectos
4. **Routing:** Implementación de rutas dinámicas en ambos sistemas

### Mejoras Futuras
- [ ] Implementar ISR (Incremental Static Regeneration) en Next.js
- [ ] Añadir SSG (Static Site Generation) para páginas estáticas
- [ ] Sistema de búsqueda y filtrado
- [ ] Paginación del listado
- [ ] Formulario de reserva
- [ ] Tests unitarios y E2E
- [ ] Optimización de imágenes en producción
- [ ] PWA capabilities

## 👨‍💻 Autor

Sergio - Módulo 5 Lemoncode

## 📄 Licencia

Este proyecto es parte del Master Frontend de Lemoncode y tiene fines educativos.
