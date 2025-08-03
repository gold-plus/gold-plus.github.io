const fs = require('fs');
const path = require('path');

export default function HomeGeneratePreviewList(context, options) {
  return {
    name: 'docusaurus-plugin-home-preview-list',
    async loadContent() {
      const previewDir = path.join(context.siteDir, 'static/img/preview');
      const exts = ['.webp', '.png', '.jpg', '.jpeg'];
      const files = fs.readdirSync(previewDir)
        .filter(f => exts.includes(path.extname(f).toLowerCase()))
        .map(f => `/img/preview/${f}`);

      return files;
    },
    async contentLoaded({ content, actions }) {
      const { createData } = actions;
      await createData(
        'preview-list.json',
        JSON.stringify(content, null, 2)
      );
    }
  };
}
