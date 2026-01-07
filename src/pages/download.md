---
title: Центр загрузки
description: Скачать GoldClient и серверный модуль API. Официальные актуальные версии для игроков и администраторов серверов.
hide_table_of_contents: true
---

import '@site/src/pages/download.css';
import { useProduct } from '@site/src/hooks/useProduct';
import { DownloadProductButton } from '@site/src/components/Misc/Page';

export const Client = () => useProduct('gameClient');
export const ServerApi = () => useProduct('serverApi');

<div className="download-container">
<h1>Центр загрузки</h1>
<p className="download-page-subtitle">Актуальные версии GoldClient и серверного модуля API.</p>
  <div className="row">
    <div className="col col--6 download-col">
      <div className="card shadow--md download-card">
        <div className="card__header download-card__header">
          <h3>Игровой клиент</h3>
          <span className="download-header-date">{Client().releaseDate}</span>
        </div>
        <div className="card__body download-card__body">
          <DownloadProductButton product={Client()} />
        </div>
        <div className="download-card__footer">
          <div className="download-footer-left">
            <span className="download-footer-title">Минимальные требования</span>
            <ul className="download-footer-list">
              <li>Видеокарта: 256 МБ, OpenGL 2.1+</li>
              <li>Процессор: 800 МГц</li>
              <li>Оперативная память: 512 МБ</li>
              <li>Операционная система: Windows XP / 7 / 10 / 11</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div className="col col--6 download-col">
      <div className="card shadow--md download-card">
        <div className="card__header download-card__header">
          <h3>Серверный модуль API</h3>
          <span className="download-header-date">{ServerApi().releaseDate}</span>
        </div>
        <div className="card__body download-card__body">
          <DownloadProductButton product={ServerApi()} />
        </div>
        <div className="download-card__footer">
          <div className="download-footer-left">
            <span className="download-footer-title">Минимальные требования</span>
            <ul className="download-footer-list">
              <li>AMX Mod X 1.9+</li>
              <li>ReHLDS 3.14.0.857+</li>
              <li>Linux GLIBC 2.12+ / Windows</li>
            </ul>
          </div>
          <div className="download-footer-right">
            <span className="download-footer-title">Функционал</span>
            <ul className="download-footer-list">
              <li>Идентификация клиента</li>
              <li>HWID, разрешение игры и др.</li>
              <li>Источник входа (Поиск, Избранное и др.)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
