export interface FileInfo {
  url: string;
  bytes: number;
}

type FlexibleFileInfo = FileInfo | Record<string, FileInfo>;

export interface ProductData {
  version: string;
  releaseDate: string;
  files: Record<string, FlexibleFileInfo>;
  showAdvisory?: boolean,
}

export const Product: Record<string, ProductData> = {
  gameClient: {
    version: '2.5.6.0',
    releaseDate: '2025-05-07', // yyyy-mm-dd
    showAdvisory: true,
    files: {
      exe: {
        url: 'https://github.com/gold-plus/builds/releases/download/2.5.6.0/CS_GoldClient.exe',
        bytes: 333213523
      },
      zip: {
        url: 'https://github.com/gold-plus/builds/releases/download/2.5.6.0/CS_GoldClient.zip',
        bytes: 410264478
      }
    },
  },
  serverApi: {
    version: '2.0.0.912',
    releaseDate: '2025-01-08', // yyyy-mm-dd
    files: {
      exe: {
        url: 'https://goldclient.ru/assets/api/goldclientapi-2.0.0.912.zip',
        bytes: 209425
      },
    },
  }
};
