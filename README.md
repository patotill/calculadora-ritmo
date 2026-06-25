# 🏃‍♂️ Calculadora de Ritmo (Pace Calculator)

Aplicación web full-stack ligera diseñada para corredores. Permite calcular el ritmo exacto de carrera (min/km) necesario para alcanzar un tiempo objetivo en distancias específicas (5k, 10k, 21k, 42k) o en distancias personalizadas.

El proyecto está construido aplicando los principios de **Programación Orientada a Objetos (POO)** tanto en la lógica del cliente (Frontend) como en el servidor (Backend), garantizando un código limpio, modular y escalable.

## ✨ Características Principales

* **Cálculo Preciso:** Obtiene el ritmo por kilómetro basado en horas, minutos y segundos.
* **Distancias Flexibles:** Incluye las distancias oficiales de atletismo y permite el ingreso de distancias personalizadas exactas.
* **Interfaz Moderna:** Diseño oscuro (Dark UI) deportivo, optimizado con una imagen de fondo inmersiva y retroalimentación visual inmediata.
* **Arquitectura Limpia:** Separación de responsabilidades mediante clases en JavaScript y Node.js.

## 🛠️ Tecnologías Utilizadas

* **Frontend:** HTML5, CSS3, JavaScript (ES6+), FontAwesome (Iconos).
* **Backend:** Node.js, Express.js.
* **Herramientas de Desarrollo:** Nodemon (Live reloading).

## 📂 Estructura del Proyecto

```text
calculadora-ritmo/
├── public/                 # Archivos estáticos servidos al cliente
│   ├── index.html          # Estructura de la interfaz
│   ├── style.css           # Estilos y UI
│   ├── script.js           # Lógica del cliente (Clase InterfazCalculadora)
│   └── Pistagemini.png     # Imagen de fondo local
├── server.js               # Servidor Node/Express y lógica (Clase CalculadoraRitmo)
├── package.json            # Dependencias y scripts del proyecto
├── .gitignore              # Archivos excluidos del control de versiones
└── README.md               # Documentación del proyecto
