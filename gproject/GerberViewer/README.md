# GerberViewer

A modern web-based Gerber file viewer for PCB designs, created by Mr.Damager (WebTechStudio).

## Features

- View Gerber files in 2D and 3D
- Support for multiple layer types (copper, solder mask, silkscreen)
- Interactive layer controls
- Real-time layer visibility toggling
- Responsive design
- Dark mode interface
- Support for ZIP, RAR, and individual Gerber files

## Supported File Types

- Compressed files:
  - ZIP (.zip)
  - RAR (.rar)
  - 7Z (.7z)
- Individual Gerber files:
  - Copper layers (.GTL, .GBL)
  - Solder mask (.GTS, .GBS)
  - Silkscreen (.GTO, .GBO)
  - Solder paste (.GTP, .GBP)
  - Drill files (.DRL, .TXT)
  - Board outline (.GKO)
  - Standard Gerber (.gbr)

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deployment

This project is configured for easy deployment to Netlify:

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)
2. Connect your repository to Netlify
3. Netlify will automatically detect the build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Author

Created by Mr.Damager (WebTechStudio)

## Acknowledgments

- Three.js for 3D rendering
- Vue.js for the frontend framework
- Vite for the build tool
