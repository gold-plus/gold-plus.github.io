export interface FileInfo {
  url: string;
  bytes: number;
}

export interface ProductData {
  version: string;
  releaseDate: string;
  files: {
    exe: FileInfo;
    zip?: FileInfo;
  };
}

export const Product: Record<string, ProductData> = {
  gameClient: {
    version: '2.5.6.0',
    releaseDate: '2025-05-07', // yyyy-mm-dd
    files: {
      exe: {
        url: 'https://cdn.download-cs.net/cs16_russian.exe',
        bytes: 297610397
      },
      //zip: {
      //  url: 'https://cdn.download-cs.net/cs16_russian.zip',
      //  bytes: 188743680
      //}
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
