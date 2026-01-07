---
title: Download Center
description: Download GoldClient Server API and game client. Official latest versions for players and server administrators.
hide_table_of_contents: true
---

import '@site/src/pages/download.css';
import { useProduct } from '@site/src/hooks/useProduct';
import { DownloadProductButton } from '@site/src/components/Misc/Page';

export const Client = () => useProduct('gameClient');
export const ServerApi = () => useProduct('serverApi');

<div className="download-container">
<h1>Download Center</h1>
<p className="download-page-subtitle">Latest versions of the GoldClient and its Server API.</p>
  <div className="row">
    <div className="col col--6 download-col">
      <div className="card shadow--md download-card">
        <div className="card__header download-card__header">
          <h3>Game Client</h3>
          <span className="download-header-date">{Client().releaseDate}</span>
        </div>
        <div className="card__body download-card__body">
          <DownloadProductButton product={Client()} />
        </div>
        <div className="download-card__footer">
          <div className="download-footer-left">
            <span className="download-footer-title">Minimum requirements</span>
            <ul className="download-footer-list">
              <li>Video Card: 256 MB, OpenGL 2.1+</li>
              <li>Processor: 800 MHz</li>
              <li>RAM: 512 MB</li>
              <li>OS: Windows XP / 7 / 10 / 11</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div className="col col--6 download-col">
      <div className="card shadow--md download-card">
        <div className="card__header download-card__header">
          <h3>GoldClient Server API</h3>
          <span className="download-header-date">{ServerApi().releaseDate}</span>
        </div>
        <div className="card__body download-card__body">
          <DownloadProductButton product={ServerApi()} />
        </div>
        <div className="download-card__footer">
          <div className="download-footer-left">
            <span className="download-footer-title">Minimum requirements</span>
            <ul className="download-footer-list">
              <li>AMX Mod X 1.9+</li>
              <li>ReHLDS 3.14.0.857+</li>
              <li>Linux GLIBC 2.12+ / Windows</li>
            </ul>
          </div>
          <div className="download-footer-right">
            <span className="download-footer-title">Features</span>
            <ul className="download-footer-list">
              <li>Client identification</li>
              <li>HWID, game resolution, etc.</li>
              <li>Connection source (Search, Favorites, etc.)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
