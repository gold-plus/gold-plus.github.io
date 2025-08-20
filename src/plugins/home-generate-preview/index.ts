const fs = require('fs');
const path = require('path');

const defaultPreviewConfig = {
  zoom: 'cover',
  position: 'center center',
};

export default function CreateList(context, options) {
  const configPath = path.join(context.siteDir, 'src', 'config', 'preview.json');
  return {
    name: 'docusaurus-plugin-home-preview-list',
    async loadContent() {
      const raw = fs.readFileSync(configPath, 'utf-8');
      const { slides } = JSON.parse(raw);
      const files = slides.map(slide => {
        return {
          path: slide.path,
          preview: slide.preview || defaultPreviewConfig,
        };
      });

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
