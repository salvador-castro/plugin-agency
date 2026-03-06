# Plugin Agency Landing Page

Este es el proyecto frontend de **Plugin Agency**, una aplicación de página única (SPA) diseñada y construida para una agencia digital especializada en desarrollo web, automatización y soluciones blockchain.

## Descripción del Proyecto

Plugin Agency landing page es una página moderna y responsiva que destaca por:
- **Diseño Moderno:** Interfaz pulida y enfocada en la experiencia del usuario.
- **Sección Hero con Video:** Fondo de video dinámico para crear un fuerte impacto visual.
- **Nuestro Equipo:** Sección dedicada a destacar a nuestros expertos con avatares personalizados.
- **Servicios:** Presentación clara de nuestras capacidades y ofertas clave.
- **Formulario de Contacto:** Integrado con **Nodemailer** para la recepción de correos y protegido mediante **Google ReCAPTCHA**.
- **Diseño Responsivo:** Optimizado completamente para dispositivos móviles, tablets y escritorio.

## Tecnologías Utilizadas

- **Librería Frontend:** React (v19.2)
- **Herramienta de Construcción:** Vite (v7.2.4)
- **Estilos:** CSS Vanilla (Variables CSS, Flexbox, Grid)
- **Backend / API:** Node.js (Manejador de API Edge / Serverless), Nodemailer
- **Seguridad:** Google ReCAPTCHA v2
- **Análisis de Código:** ESLint (v9.39.1)

## Estructura de Carpetas

```text
plugin-agency/
├── api/                  # Lógica del backend / API (ej. envío de correos)
├── public/               # Archivos estáticos públicos
│   └── assets/           # Imágenes corporativas, videos hero y avatares del equipo
├── src/                  # Código fuente principal de la aplicación
│   ├── components/       # Componentes de UI (Navbar, Hero, About, Services, Contact, Footer)
│   ├── App.jsx           # Componente raíz de diseño de la aplicación
│   ├── index.css         # Estilos globales y variables CSS
│   └── main.jsx          # Punto de entrada de React
├── eslint.config.js      # Configuración de ESLint
├── package.json          # Dependencias y scripts de NPM
└── vite.config.js        # Configuración de Vite
```

## Cómo Instalarlo

Sigue estos pasos para configurar el proyecto localmente:

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/salvador-castro/plugin-agency.git
   cd plugin-agency
   ```

2. **Instalar dependencias:**
   ```bash
   npm install
   ```

3. **Configurar las Variables de Entorno:**
   Crea un archivo `.env` en la raíz del proyecto y agrega tus claves:
   ```env
   EMAIL_USER=tu_correo_gmail
   EMAIL_PASS=tu_app_password
   VITE_RECAPTCHA_SITE_KEY=tu_clave_de_sitio_recaptcha
   RECAPTCHA_SECRET_KEY=tu_clave_secreta_recaptcha
   ```

## Cómo Ejecutarlo

Una vez instaladas las dependencias, levanta el servidor de desarrollo utilizando:

```bash
npm run dev
```

El servidor estará disponible localmente en: **http://localhost:5173/**

---

## English Version

Welcome to the **Plugin Agency** landing page project. This is a responsive, single-page application built for a digital agency specializing in web development, automation, and blockchain solutions.

### Project Description

Plugin Agency landing page is a modern and responsive site featuring:
- **Modern Design**: Sleek interface with a focus on user experience.
- **Video Hero**: Dynamic video background for a strong visual impact.
- **Team Showcase**: Dedicated section highlighting our expert team members.
- **Services Overview**: Clear presentation of agency capabilities.
- **Contact Form**: Functional contact form integrated with **Nodemailer** and **Google ReCAPTCHA**.
- **Responsive Layout**: Optimized for desktop, tablet, and mobile devices.

### Tech Stack

- **Frontend Library**: React (v19.2)
- **Build Tool**: Vite (v7.2.4)
- **Styling**: Vanilla CSS (CSS Variables, Flexbox, Grid)
- **Backend / API**: Node.js (Express-like handler), Nodemailer
- **Security**: Google ReCAPTCHA v2
- **Linting**: ESLint (v9.39.1)

### Folder Structure

```text
plugin-agency/
├── api/                  # Backend API logic
├── public/               # Public static assets
│   └── assets/           # Team avatars, hero video, logos
├── src/                  # Application source code
│   ├── components/       # UI Components (Navbar, Hero, About, etc.)
│   ├── App.jsx           # Main application layout
│   ├── index.css         # Global styles
│   └── main.jsx          # React entry point
├── eslint.config.js      # ESLint configuration
├── package.json          # Dependencies and scripts
└── vite.config.js        # Vite configuration
```

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/salvador-castro/plugin-agency.git
   cd plugin-agency
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure Environment Variables:**
   Create a `.env` file in the root directory:
   ```env
   EMAIL_USER=your_gmail_address
   EMAIL_PASS=your_app_password
   VITE_RECAPTCHA_SITE_KEY=your_recaptcha_site_key
   RECAPTCHA_SECRET_KEY=your_recaptcha_secret_key
   ```

### Execution

Run the development server:

```bash
npm run dev
```
The app will be available at: **http://localhost:5173/**
