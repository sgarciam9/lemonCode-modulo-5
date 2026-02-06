# 📝 Instrucciones para ejecutar el proyecto

## ⚠️ IMPORTANTE: Este proyecto requiere 2 servidores corriendo

1. **Servidor de la API** (puerto 3001)
2. **Aplicación Next.js** (puerto 3000)

---

## 🚀 Paso a Paso

### 1️⃣ Clonar e iniciar el API Server

Abre una terminal y ejecuta:

```bash
# Clona el repositorio de la API
git clone https://github.com/Lemoncode/master-frontend-metaframeworks-lab.git

# Navega a la carpeta
cd master-frontend-metaframeworks-lab/api-server

# Instala dependencias
npm install

# Inicia el servidor
npm start
```

✅ El servidor de la API debería estar corriendo en: **http://localhost:3001**

Verifica que funciona abriendo:
- http://localhost:3001/api/houses (verás el JSON con todas las casas)

### 2️⃣ Iniciar la aplicación Next.js

Abre **OTRA terminal** (deja la anterior corriendo) y ejecuta:

```bash
# Navega a la carpeta del proyecto (si no estás ya)
cd casas-rurales

# Instala dependencias (si no lo has hecho)
npm install

# Inicia el servidor de desarrollo
npm run dev
```

✅ La aplicación debería estar corriendo en: **http://localhost:3000**

---

## 🌐 URLs importantes

| Servicio | URL | Descripción |
|----------|-----|-------------|
| API Server | http://localhost:3001/api/houses | Listado de todas las casas |
| API Server | http://localhost:3001/api/houses/:id | Detalle de una casa |
| Aplicación | http://localhost:3000 | Página principal (listado) |
| Aplicación | http://localhost:3000/casas/:id | Página de detalle |

---

## ❌ Solución de problemas

### Error: "fetch failed" o "ECONNREFUSED"

**Causa:** El servidor de la API no está corriendo

**Solución:** 
1. Verifica que ejecutaste `npm start` en la carpeta `api-server`
2. Abre http://localhost:3001/api/houses en tu navegador
3. Deberías ver un JSON con las casas

### Error: "Port 3000 already in use"

**Solución:** 
1. Detén cualquier proceso corriendo en el puerto 3000
2. O usa otro puerto: `npm run dev -- -p 3001`

### No se ven las imágenes

**Causa:** Las imágenes están en la carpeta `/public` del api-server

**Solución:** 
- Asegúrate de que el api-server esté corriendo
- Las imágenes se sirven desde http://localhost:3001/images/

---

## 🎯 Estructura de datos de la API

### House (Casa)
```typescript
{
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
```

### Review (Reseña)
```typescript
{
  id: string;
  author: string;
  date: string;
  comment: string;
  rating: number;
}
```

---

## 📚 Comandos útiles

### API Server
```bash
cd master-frontend-metaframeworks-lab/api-server
npm start          # Iniciar servidor
```

### Aplicación Next.js
```bash
cd casas-rurales
npm run dev        # Desarrollo
npm run build      # Build de producción
npm start          # Servidor de producción
npm run lint       # Ejecutar linter
```

---

## ✅ Todo listo cuando...

1. ✅ Puedes abrir http://localhost:3001/api/houses y ver JSON
2. ✅ Puedes abrir http://localhost:3000 y ver la lista de casas
3. ✅ Puedes hacer clic en una casa y ver su detalle
4. ✅ No hay errores en la consola del navegador ni en las terminales

---

**¡Disfruta explorando las casas rurales! 🏡**
