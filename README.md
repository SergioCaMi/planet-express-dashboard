# 🚀 Futurama Characters App - React Learning Project

Un proyecto de aprendizaje de React que muestra personajes de Futurama con funcionalidad de búsqueda en tiempo real.

## 📖 Sobre este proyecto

Este es un proyecto educativo donde estoy aprendiendo los conceptos fundamentales de React, incluyendo:

- ⚛️ **Componentes de clase** y ciclo de vida
- 🔄 **Estado (state)** y manejo de datos
- 🌐 **Consumo de APIs** con fetch
- 🔍 **Filtrado en tiempo real** 
- 🎨 **CSS personalizado** con fuentes custom
- 📦 **Componentización** y reutilización de código

## 🎯 Funcionalidades

- ✅ **Lista de personajes**: Muestra todos los personajes de Futurama
- ✅ **Búsqueda en tiempo real**: Filtra personajes mientras escribes
- ✅ **Imágenes dinámicas**: Carga las imágenes de cada personaje
- ✅ **Diseño responsive**: Se adapta a diferentes tamaños de pantalla
- ✅ **Fuente personalizada**: Usa la fuente oficial de Futurama

## 🛠️ Tecnologías utilizadas

- **React** ^19.2.0
- **JavaScript ES6+**
- **CSS3** con custom fonts
- **Futurama API** (https://api.sampleapis.com/futurama/characters)

## 📂 Estructura del proyecto

```
src/
├── components/
│   ├── card-list/           # Componente para lista de tarjetas
│   │   └── card-list.component.jsx
│   └── search-box/          # Componente de búsqueda
│       └── search-box.component.jsx
├── App.js                   # Componente principal
├── App.css                  # Estilos principales
└── index.js                # Punto de entrada
public/
└── fonts/
    └── fr-title.ttf        # Fuente personalizada de Futurama
```

## 🚀 Cómo ejecutar el proyecto

### Prerrequisitos
- Node.js (versión 14 o superior)
- npm o yarn

### Instalación

1. **Clona el repositorio**
   ```bash
   git clone [URL-del-repositorio]
   cd futurama
   ```

2. **Instala las dependencias**
   ```bash
   npm install
   ```

3. **Ejecuta el proyecto**
   ```bash
   npm start
   ```

4. **Abre en el navegador**
   Ve a [http://localhost:3000](http://localhost:3000)

## 💡 Conceptos de React aprendidos

### 🔄 Ciclo de vida de componentes
- `constructor()`: Inicialización del estado
- `componentDidMount()`: Llamada a la API cuando el componente se monta
- `render()`: Renderizado del componente

### 📊 Manejo del estado
```javascript
this.state = {
  characters: [],      // Array de personajes
  searchField: ""      // Término de búsqueda
}
```

### 🔍 Filtrado dinámico
```javascript
const filteredCharacters = characters.filter(character =>
  character.name.first.toLowerCase().includes(searchField.toLowerCase())
);
```

### 🎯 Event Handling
```javascript
onSearchChange = (e) => {
  this.setState({ searchField: e.target.value });
}
```

## 🎨 Características del diseño

- **Gradiente de fondo**: Colores inspirados en Futurama
- **Fuente personalizada**: Fuente Michroma importada de Google Fonts
- **Grid responsive**: Las tarjetas se adaptan al tamaño de pantalla
- **Efectos hover**: Interactividad en las tarjetas

## 🐛 Scripts disponibles

### `npm start`
Ejecuta la app en modo desarrollo en [http://localhost:3000](http://localhost:3000)

### `npm test`
Lanza el runner de tests en modo interactivo

### `npm run build`
Construye la app para producción en la carpeta `build`

## 🤝 Contribuciones

Este es un proyecto de aprendizaje personal, pero cualquier sugerencia o feedback es bienvenido para mejorar mi comprensión de React.

## 📄 Licencia

Este proyecto es de uso educativo y personal.

---

**¡Buen código y a seguir aprendiendo React! 🚀**

*Proyecto creado con [Create React App](https://github.com/facebook/create-react-app)*
