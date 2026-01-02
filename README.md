# 3D T-Shirt Customization Website

## 🎯 Project Overview

**3D T-Shirt Customization Website** is an immersive, interactive web application that allows users to create and customize their own T-shirts in real-time using cutting-edge 3D technology. Built with React and Three.js, this application provides a seamless experience for designing personalized T-shirts with custom colors, logos, and full-texture designs.

### Core Concept

This application enables users to:
- **Customize T-Shirt Colors**: Choose from a full spectrum of colors using an intuitive color picker
- **Upload Custom Logos**: Add personal logos or images to the T-shirt
- **Full Texture Design**: Apply full-texture designs across the entire T-shirt
- **Real-Time 3D Preview**: See changes instantly in an interactive 3D environment
- **Download Designs**: Export customized T-shirt designs as images

---

## ✨ Key Features

### 🎨 Home Page
- **Welcome Screen**: Beautiful introduction page with animated transitions
- **Brand Identity**: Logo and branding elements
- **Call-to-Action**: "Customize It" button to enter the customization mode
- **Smooth Animations**: Framer Motion animations for engaging user experience
- **Responsive Design**: Works seamlessly on desktop and mobile devices

### 🎨 Color Customization
- **Color Picker**: Full-featured color picker using react-color
- **Real-Time Updates**: Instant color changes on the 3D T-shirt model
- **Color Spectrum**: Access to millions of color combinations
- **Smooth Transitions**: Animated color changes using easing functions

### 📁 File Upload & Logo Placement
- **Image Upload**: Upload custom images/logos from your device
- **Logo Placement**: Place logos on the T-shirt with precise positioning
- **Full Texture Mode**: Apply images as full T-shirt textures
- **File Validation**: Accepts standard image formats (PNG, JPG, etc.)
- **Preview**: See uploaded files before applying to the T-shirt

### 🤖 AI Design Generator (Coming Soon)
- **AI-Powered Designs**: Generate custom T-shirt designs using AI
- **Creative Assistance**: Get design suggestions and ideas
- **Future Integration**: Planned feature for AI-generated patterns and designs

### 🎭 3D Visualization
- **Interactive 3D Model**: Realistic 3D T-shirt model using Three.js
- **Camera Controls**: Rotate, zoom, and view the T-shirt from any angle
- **Lighting System**: Professional lighting setup for realistic rendering
- **Environment Mapping**: City environment preset for realistic reflections
- **Shadow Rendering**: Real-time shadows for depth and realism
- **Decal System**: Advanced decal system for logo and texture placement

### 💾 Download Functionality
- **Export Designs**: Download customized T-shirt designs as images
- **High Quality**: Preserve drawing buffer for high-resolution exports
- **Canvas Capture**: Capture the 3D scene as a 2D image

### 🎯 User Interface
- **Editor Tabs**: Easy-to-use tab system for different customization options
- **Filter Tabs**: Toggle between logo and full-texture modes
- **Smooth Transitions**: Animated UI elements using Framer Motion
- **Intuitive Controls**: User-friendly interface for all customization features

---

## 🛠️ Tech Stack

### Core Framework
- **React 18.3**: Modern UI library for building interactive interfaces
- **Vite 5.3**: Next-generation frontend build tool for fast development

### 3D Graphics & Visualization
- **Three.js 0.166**: Powerful 3D graphics library
- **React Three Fiber 8.16**: React renderer for Three.js
- **React Three Drei 9.108**: Useful helpers and abstractions for R3F:
  - `Decal`: For applying textures and logos
  - `Environment`: For realistic lighting environments
  - `Center`: For centering 3D models
  - `useGLTF`: For loading 3D models
  - `useTexture`: For loading textures

### State Management
- **Valtio 1.13**: Proxy-based state management for reactive updates
- **Real-Time Sync**: Automatic UI updates when state changes

### Animations
- **Framer Motion 11.3**: Advanced animations and transitions
- **Maath 0.10**: Math utilities including easing functions for smooth animations

### UI Components
- **React Color 2.19**: Professional color picker component
- **Tailwind CSS 3.4**: Utility-first CSS framework for styling

### Development Tools
- **ESLint**: Code linting and quality assurance
- **PostCSS**: CSS processing with Autoprefixer
- **TypeScript Types**: Type definitions for React and React DOM

---

## 📁 Project Structure

```
3d_t-shirt_website/
├── public/
│   ├── shirt_baked.glb        # 3D T-shirt model (GLTF format)
│   ├── dotcom.png             # Default logo
│   └── *.png                  # Other assets
│
├── src/
│   ├── assets/                # Static assets
│   │   ├── ai.png            # AI picker icon
│   │   ├── download.png      # Download icon
│   │   ├── file.png          # File picker icon
│   │   ├── logo-tshirt.png   # Logo T-shirt icon
│   │   ├── stylish-tshirt.png # Stylish T-shirt icon
│   │   └── swatch.png        # Color picker icon
│   │
│   ├── canva/                # 3D Canvas components
│   │   ├── index.jsx        # Main canvas component
│   │   ├── Shirt.jsx        # 3D T-shirt model component
│   │   ├── CameraRig.jsx    # Camera controls and positioning
│   │   └── Backdrop.jsx     # Background element
│   │
│   ├── components/           # React components
│   │   ├── AIPicker.jsx     # AI design picker (coming soon)
│   │   ├── ColorPicker.jsx  # Color selection component
│   │   ├── CustomButton.jsx # Reusable button component
│   │   ├── FilePicker.jsx   # File upload component
│   │   ├── Tab.jsx          # Tab component for navigation
│   │   └── TextPicker.jsx   # Text input component
│   │
│   ├── config/              # Configuration files
│   │   ├── config.js        # General configuration
│   │   ├── constants.js     # Constants (EditorTabs, FilterTabs, DecalTypes)
│   │   ├── helpers.js       # Helper functions (download, file reading)
│   │   └── motion.js        # Framer Motion animation variants
│   │
│   ├── pages/               # Page components
│   │   ├── Home.jsx         # Home/welcome page
│   │   └── Customizer.jsx   # Main customization interface
│   │
│   ├── store/               # State management
│   │   └── index.jsx        # Valtio state store
│   │
│   ├── App.jsx              # Main application component
│   ├── main.jsx             # Application entry point
│   └── index.css            # Global CSS styles
│
├── index.html               # HTML template
├── package.json             # Dependencies and scripts
├── vite.config.js           # Vite configuration
├── tailwind.config.js       # Tailwind CSS configuration
└── postcss.config.js        # PostCSS configuration
```

---

## 🚀 Installation & Setup

### Prerequisites
Ensure you have the following installed:
- **Node.js** >= 16
- **npm** or **yarn** or **pnpm**

### Installation Steps

#### 1. Clone the Repository
```bash
git clone <repository-url>
cd 3d_t-shirt_website
```

#### 2. Install Dependencies
```bash
npm install
# or
yarn install
# or
pnpm install
```

#### 3. Start Development Server
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

The application will be available at:
```
http://localhost:5173
```

#### 4. Build for Production
```bash
npm run build
# or
yarn build
# or
pnpm build
```

#### 5. Preview Production Build
```bash
npm run preview
# or
yarn preview
# or
pnpm preview
```

---

## 📖 Usage

### Customizing a T-Shirt

1. **Start Customization**:
   - Click "Customize It" button on the home page
   - Enter the customization interface

2. **Change T-Shirt Color**:
   - Click on the color picker tab (swatch icon)
   - Select your desired color from the color picker
   - See the color change in real-time on the 3D model

3. **Add a Logo**:
   - Click on the file picker tab (file icon)
   - Upload an image file from your device
   - Click "Logo" button to apply as a logo
   - The logo will appear on the T-shirt

4. **Apply Full Texture**:
   - Upload an image file
   - Click "Full" button to apply as a full T-shirt texture
   - The entire T-shirt will be covered with your image

5. **Download Your Design**:
   - Customize your T-shirt to your liking
   - Use the download functionality to save your design
   - The design will be exported as an image file

### Editor Tabs

- **Color Picker Tab**: Access the color customization tool
- **File Picker Tab**: Upload and apply images/logos
- **AI Picker Tab**: (Coming Soon) Generate AI-powered designs

### Filter Tabs

- **Logo Shirt**: Toggle logo display on/off
- **Stylish Shirt**: Toggle full texture display on/off

---

## 🎨 Customization Options

### State Management

The application uses Valtio for state management. The state includes:
- `intro`: Boolean to show/hide home page
- `color`: T-shirt color (hex format)
- `isLogoTexture`: Boolean to show/hide logo
- `isFullTexture`: Boolean to show/hide full texture
- `logoDecal`: Path to logo image
- `fullDecal`: Path to full texture image

### Modifying Default Values

Edit `src/store/index.jsx` to change default values:
```javascript
const state = proxy({
  intro: true,
  color: '#1D0976',  // Change default color
  isLogoTexture: true,
  isFullTexture: false,
  logoDecal: './dotcom.png',  // Change default logo
  fullDecal: './dotcom.png',
});
```

### Adding New Editor Tabs

1. Add icon to `src/assets/`
2. Update `src/config/constants.js`:
```javascript
export const EditorTabs = [
  {
    name: "yourTab",
    icon: yourIcon,
  },
];
```
3. Add case in `Customizer.jsx` `generateTabContent()` function

### Customizing 3D Model

1. Replace `public/shirt_baked.glb` with your own 3D model
2. Ensure the model follows GLTF/GLB format
3. Update material names in `Shirt.jsx` if needed

---

## 🔧 Configuration

### Motion Animations

Customize animations in `src/config/motion.js`:
- `fadeAnimation`: Fade in/out effects
- `slideAnimation`: Slide transitions
- `headContainerAnimation`: Home page container animation
- `headContentAnimation`: Home page content animation
- `headTextAnimation`: Home page text animation

### Constants

Modify constants in `src/config/constants.js`:
- `EditorTabs`: Customization tool tabs
- `FilterTabs`: Display mode tabs
- `DecalTypes`: Decal type configurations

---

## 🎯 Key Components Explained

### Home Component
- Welcome screen with introduction
- Animated entry using Framer Motion
- "Customize It" button to start customization

### Customizer Component
- Main customization interface
- Editor tabs for different tools
- Filter tabs for display modes
- State management integration

### Shirt Component
- 3D T-shirt model rendering
- Decal application (logo and full texture)
- Color application with smooth transitions
- Material and texture handling

### Canvas Component
- Three.js canvas setup
- Environment and lighting configuration
- Camera and scene management
- Shadow and rendering settings

### ColorPicker Component
- React Color integration
- Real-time color updates
- Color state synchronization

### FilePicker Component
- File upload functionality
- Image file validation
- Logo and full texture application

---

## 🌐 Browser Support

- Chrome (latest) - **Recommended**
- Firefox (latest)
- Safari (latest)
- Edge (latest)

**Note**: 3D features require WebGL support. Older browsers may have limited functionality.

---

## 🚀 Performance Optimization

### 3D Model Optimization
- Use compressed GLTF/GLB files
- Optimize texture sizes
- Reduce polygon count if needed
- Use texture compression

### Image Optimization
- Compress uploaded images before applying
- Use appropriate image formats (PNG for logos, JPG for photos)
- Limit image file sizes

### Rendering Optimization
- Use `preserveDrawingBuffer` for downloads
- Implement lazy loading for 3D models
- Optimize shadow rendering

---

## 🔮 Future Enhancements

### Planned Features
- **AI Design Generator**: Generate designs using AI
- **Text Customization**: Add custom text to T-shirts
- **Pattern Library**: Pre-made patterns and designs
- **Social Sharing**: Share designs on social media
- **Save/Load Designs**: Save and load custom designs
- **Multiple T-Shirt Styles**: Different T-shirt models
- **Print Integration**: Direct printing service integration

---

## 📝 Development Notes

### Adding New Features

1. **New Customization Option**:
   - Add new tab to EditorTabs
   - Create corresponding component
   - Update state management
   - Add to Customizer component

2. **New Decal Type**:
   - Add to DecalTypes in constants
   - Update state store
   - Modify Shirt component

3. **New 3D Model**:
   - Export as GLTF/GLB
   - Place in public folder
   - Update model path in Shirt component

---

## 🐛 Troubleshooting

### Common Issues

1. **3D Model Not Loading**:
   - Check file path in Shirt component
   - Ensure GLTF/GLB file is in public folder
   - Verify file format is correct

2. **Textures Not Applying**:
   - Check image file format
   - Verify file path is correct
   - Ensure image is loaded before applying

3. **Color Not Updating**:
   - Check state management connection
   - Verify color picker integration
   - Check material updates in Shirt component

4. **Download Not Working**:
   - Ensure `preserveDrawingBuffer` is enabled
   - Check download helper function
   - Verify canvas is properly rendered

---

## 📄 License

This project is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).

---

## 🙏 Acknowledgments

- **Three.js Community**: For the amazing 3D graphics library
- **React Three Fiber**: For React integration with Three.js
- **React Three Drei**: For useful 3D helpers and components
- **Framer Motion**: For smooth animations
- **Valtio**: For reactive state management
- **React Color**: For the color picker component
- All open-source contributors whose packages made this possible

---

## 📞 Support

For issues, questions, or contributions, please open an issue on the repository.

---

**Create your unique and exclusive shirt with our brand-new 3D customization tool. Unleash your imagination and define your own style! 🎨✨**
