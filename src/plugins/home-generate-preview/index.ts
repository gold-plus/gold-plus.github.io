const fs = require('fs');
const path = require('path');

const defaultPreviewConfig = {
  zoom: 'cover',
  position: 'center center',
};

export default function CreateList(context, options) {
  const configPath = path.join(context.siteDir, 'src', 'config', 'preview.json');
  const { i18n } = context;
  const currentLocale = i18n.currentLocale || 'default';

  return {
    name: 'docusaurus-plugin-home-preview-list',
    async loadContent() {
      const raw = fs.readFileSync(configPath, 'utf-8');
      const { slides } = JSON.parse(raw);
      const files = slides.map(slide => {
        if (slide.thumbnails && Array.isArray(slide.thumbnails)) {
          return { thumbnails: slide.thumbnails, layout: slide.layout || null };
        }

        if (slide.path) {
          let resolvedPath;
          if (typeof slide.path === 'string') {
            resolvedPath = slide.path;
          } else if (typeof slide.path === 'object' && slide.path !== null) {
            resolvedPath = slide.path[currentLocale] || slide.path.default;
          }
          return {
            path: resolvedPath,
            preview: slide.preview || defaultPreviewConfig,
          };
        }

        return null;
      }).filter(Boolean);

      return files;
    },
    getPathsToWatch() {
      return [configPath];
    },
    async contentLoaded({ content, actions }) {
      const { createData } = actions;
      await createData(
        'images.json',
        JSON.stringify(content, null, 2)
      );
    }
  };
}
