const fs = require('fs');
const path = require('path');

const defaultPreviewConfig = {
  zoom: 'cover',
  position: 'center center',
};

function resolveLocalizedPath(pathData, currentLocale) {
  if (!pathData) return undefined;
  if (typeof pathData === 'string') {
    return pathData;
  }
  if (typeof pathData === 'object') {
    return pathData[currentLocale] || pathData.default;
  }
  return undefined;
}

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
          const processedThumbnails = slide.thumbnails.map(t => ({
            ...t,
            path: resolveLocalizedPath(t.path, currentLocale),
            thumbPath: resolveLocalizedPath(t.thumbPath, currentLocale),
          }));

          return {
            thumbnails: processedThumbnails,
            layout: slide.layout || null
          };
        }

        if (slide.path) {
          return {
            path: resolveLocalizedPath(slide.path, currentLocale),
            thumbPath: resolveLocalizedPath(slide.thumbPath, currentLocale),
            preview: slide.preview || defaultPreviewConfig,
            label: slide.label,
            desc: slide.desc
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
