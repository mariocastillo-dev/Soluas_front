# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ["./tsconfig.node.json", "./tsconfig.app.json"],
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from "eslint-plugin-react";

export default tseslint.config({
  // Set the react version
  settings: { react: { version: "18.3" } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs["jsx-runtime"].rules,
  },
});
```

# Reto Soluas | Aplicativo SoluDash

## Problemática

Actualmente, la empresa Soluas enfrenta dificultades en la presentación mensual del informe de los
KPI’s del contrato con la Secretaría de Hacienda del municipio de Itagüí, ya que este informe se
entrega en un formato poco amigable y sin dinamismo, lo que complica la comprensión del avance de
las actividades por parte del cliente principal. Además, la estructura actual limita a los usuarios
internos, quienes carecen de una herramienta ágil para consultar y actualizar la información
eficientemente. La implementación de una base de datos dinámica permitiría estructurar los datos
de manera más accesible para el equipo interno y ofrecer una presentación visual e interactiva para
el cliente, optimizando la comunicación y el seguimiento de los indicadores de desempeño del
contrato.

## Alcance actual

Se creará un dashboard para consulta, actualización y generación de informes de los datos requeridos por el cliente, al cual se podrá acceder por medio de login en el cual se implementará controles de seguridad JWT. Además, una base de datos relacional para almacenamiento y mejor estructuración de los datos, el backend en python, y las respectivas API’s para interacción del dashboard.

## Stack tecnológico del Frontend
### Tecnologías y herramientas

- [Vite](https://vite.dev/): herramienta de compilación para el desarrollo ágil y eficiente de proyectos web.
- [TypeScript](https://www.typescriptlang.org/): lenguaje de programación de tipado estático, basado en JavaScript y creado por Microsoft.
- [ReactJS](https://react.dev/): librería de JavaScript de código abierto, utilizada para crear interfaces de usuario para 
aplicaciones web y móviles, desarrollada por Facebook.
- [Tailwind CSS](https://tailwindcss.com/docs/guides/vite): marco de trabajo de CSS (Hojas de Estilo en Cascada) que permite diseñar páginas web con clases predefinidas. Tailwind CSS es altamente personalizable y proporciona un conjunto de clases de utilidad para construir interfaces de usuario. 
- [ChartJS](https://www.chartjs.org/): librería gratuita de JavaScript que permite crear gráficos interactivos y visualizaciones de datos para aplicaciones web. En SoluDash la implementamos en para crear los gráficos del dashboard.
- [Lucide](https://lucide.dev/guide/packages/lucide-react): biblioteca para la implementación de íconos en aplicaciones de React.


## Pasos para  este aplicativo

Primero, asegúrese de tener instalado en su máquina:

- [NodeJS](): Versión 16 o superior. 
Para verificar si tiene instalada alguna versión de Node en su computador, vaya a la terminal y escriba el siguiente comando:
node --version
En caso de que no le aparezca algo similar a esto: v20.11.0 deberá instalar la versión LTS de Node (recomendada) desde el sitio oficial.
- [npm]()
- [Git]()

## Instalación y Configuración

A continuación, se describen los pasos a seguir para configurar y ejecutar el proyecto en el entorno local de su pc:

1. Diríjase al directorio o ubicación en la que desea clonar el repositorio desde la terminal de su elección:
- Git Bash
- Powershell
- CRT
- Otra de su elección de acuerdo al sistema operativo que esté utilizando.


2. Clonar éste repositorio:

```git clone https://github.com/mariocastillo-dev/Soluas_front.git```

3. Navegar al directorio del proyecto:

```Soluas_front/```

4. Instalar las dependencias:
```npm i```

5. Iniciar el servidor en el ambiente de desarrollo:
```npm run dev```

6. Abrir el navegador y acceder a la siguiente URL:
```http://localhost:5173/```


## Lista de Scripts 

A continuación, se mencionan los scripts que puede ejecutar una vez clonado el proyecto en su máquina local:

- `npm run dev`: Inicia el proyecto en modo de desarrollo y puede visualizar esta aplicación en el navegador.
- `npm run build`: Crea una complilación de la aplicación.
- `npm run lint`: Comprueba todos los archivos del proyecto.
- `npm run preview`: Sirve para iniciar un servidor web estático local que sirve los archivos desde dist en http://localhost:5000. Esto permite verificar si la compilación de producción se ve bien en el entorno local.

## Licencia

