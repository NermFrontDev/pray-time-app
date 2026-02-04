# 🕌 Pray Time App — Modern SPA with Astro

**Pray Time App** es una **Single Page Application moderna**, enfocada en rendimiento, arquitectura limpia y experiencia de usuario, que muestra los horarios de oración islámicos basados en la ubicación del usuario.

Este proyecto fue desarrollado como una **demostración de buenas prácticas en frontend moderno**, combinando **Astro, TypeScript y TailwindCSS**.

🔗 Ideal como:
- Proyecto non-profit
- Base para una PWA
- App web de producción ligera y rápida

---

## 🚀 Demo & Preview

> 🔧 Demo en progreso / Próximamente desplegado  
> *(Listo para Vercel / Netlify / Cloudflare Pages)*

---

## 🎯 Objetivo del proyecto

El objetivo principal de este proyecto es demostrar:

- Arquitectura clara y escalable
- Uso correcto de frameworks modernos
- Buen manejo de estado y lógica en el cliente
- Diseño responsivo y accesible
- Código limpio y mantenible

---

## ✨ Features principales

- 📍 **Geolocalización del usuario** (browser API)
- 🕋 **Cálculo y visualización de horarios de oración**
  - Fajr
  - Dhuhr
  - Asr
  - Maghrib
  - Isha
- 📱 **Diseño mobile-first**
- ⚡ **Alto rendimiento** gracias a Astro
- 🎨 UI moderna con TailwindCSS
- 🧩 Componentes reutilizables
- 🛠️ Código tipado con TypeScript

---

## 🧠 Enfoque técnico

Este proyecto prioriza:

- Separación de responsabilidades
- Componentización clara
- Lógica desacoplada de la UI
- Preparación para escalar (PWA, API, SSR si se requiere)
- Buenas prácticas de frontend moderno

---

## 🗂️ Arquitectura & estructura del proyecto

```txt
📦 pray-time-app
├── public/                 # Assets estáticos
├── src/
│   ├── components/         # Componentes reutilizables
│   ├── layouts/            # Layouts base
│   ├── pages/              # Rutas (SPA)
│   │   └── index.astro     # Página principal
│   ├── styles/             # Estilos globales
│   └── utils/              # Helpers y lógica (fechas, cálculos, etc.)
├── astro.config.mjs        # Configuración de Astro
├── tailwind.config.cjs     # Configuración de TailwindCSS
├── tsconfig.json           # Configuración de TypeScript
├── package.json            # Scripts y dependencias
└── README.md
```

## ✨ Features principales

```
git clone https://github.com/NermFrontDev/pray-time-app.git
```
```
cd pray-time-app
```
```
npm install
```
```
npm run dev
```

App Disponible en
```
http://localhost:4321
```


### 📦 Scripts disponibles
---

| Comando           | Descripción                    |
| ----------------- | ------------------------------ |
| `npm run dev`     | Servidor de desarrollo         |
| `npm run build`   | Build optimizada de producción |
| `npm run preview` | Preview del build              |
| `npm run lint`    | Análisis de código             |

## 🏗️ Deploy

El proyecto está listo para ser desplegado en:

▲ Vercel

🌐 Netlify

☁️ Cloudflare Pages
```
npm run build
```

Salida de producción:
```
dist/
```

---
MIT License © 2026 NermFrontDev