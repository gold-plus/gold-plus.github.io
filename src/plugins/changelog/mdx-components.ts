// src/plugins/changelog/mdx-components.ts
interface MdxComponentRegistration {
  componentName: string;
  importPath: string;
  regex: RegExp;
  getReplacement: (match: RegExpMatchArray, authorsData: Record<string, any>) => string;
}

export const MDX_COMPONENTS_REGISTRY: MdxComponentRegistration[] = [{
    componentName: 'BugBadge',
    importPath: '@site/src/components/Misc/Badges',
    regex: /\[stockbug\]/g,
    getReplacement: () => '<BugBadge />',
  },
  {
    componentName: 'GitHubLink',
    importPath: '@site/src/components/Misc/Links',
    regex: /\[issue=(.*?)\/(.*?)\/(\d+)\]/g,
    getReplacement: (match) =>
      `<GitHubLink owner="${match[1]}" repo="${match[2]}" issue="${match[3]}" />`,
  },
  {
    componentName: 'GitHubLink',
    importPath: '@site/src/components/Misc/Links',
    regex: /\[pull=(.*?)\/(.*?)\/(\d+)\]/g,
    getReplacement: (match) =>
      `<GitHubLink owner="${match[1]}" repo="${match[2]}" pull="${match[3]}" />`,
  },
  {
    componentName: 'YouTubeLink',
    importPath: '@site/src/components/Misc/Links',
    regex: /\[youtube=([\w-]+)(?:\?t=(\d+))?\]/g,
    getReplacement: (match) => {
      const videoId = match[1];
      const time = match[2];
      const timeProp = time ? `time="${time}"` : '';
      return `<YouTubeLink videoId="${videoId}" ${timeProp} />`;
    },
  },
  {
    componentName: 'UserBadge',
    importPath: '@site/src/components/Misc/Badges',
    regex: /\(@([a-zA-Z0-9_-]+)\)/g,
    getReplacement: (match, authorsData) => {
      const username = match[1];
      const authorInfo = authorsData[username];
      if (!authorInfo) {
        return `<UserBadge name="${username}" />`;
      }
      return `<UserBadge name="${authorInfo.name || username}" url="${authorInfo.url}" imageUrl="${authorInfo.image_url}" title="${authorInfo.title}" />`;
    },
  },
  {
    componentName: 'UnseenMarker',
    importPath: '@site/src/components/Misc/Badges',
    regex: /(-\s*)(.*?)(\s*\[id:(\w+)\])/g,
    getReplacement: (match) => `${match[1]}<UnseenMarker sha="${match[4]}" />${match[2]}`
  }
];

export function processMdxComponents(content: string, authorsData: Record<string, any>): {
  processedContent: string;
  imports: string[];
} {
  let processedContent = content;
  const componentsToImport: Map<string, Set<string>> = new Map();

  for (const registration of MDX_COMPONENTS_REGISTRY) {
    if (registration.regex.test(processedContent)) {
      processedContent = processedContent.replace(
        registration.regex,
        // @ts-ignore
        (...args) => registration.getReplacement(args, authorsData)
      );

      if (!componentsToImport.has(registration.importPath)) {
        componentsToImport.set(registration.importPath, new Set());
      }
      componentsToImport.get(registration.importPath)!.add(registration.componentName);
    }
  }

  const imports: string[] = [];
  for (const [importPath, componentNames] of componentsToImport.entries()) {
    imports.push(
      `import { ${[...componentNames].join(', ')} } from '${importPath}';`,
    );
  }

  return { processedContent, imports };
}
