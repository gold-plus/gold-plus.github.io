---
id: cvars
title: Консольные переменные
sidebar_position: 1
---

:::warning Страница в разработке
Эта страница находится в стадии активного наполнения и корректирования.<br/>
Возможны ошибки, неточности и пропуски, и отсутствия перевода.<br/>
Следите за обновлениями, чтобы получать актуальную информацию.
:::

# Консольные переменные

Список всех консольных переменных (ConVar) — описание, значения по умолчанию, примеры использования.

## Содержание

* [Аудио](#аудио)
* [Видео и графика](#видео-и-графика)
* [Интерфейс (HUD)](#интерфейс-hud)
* [Настройки оружия (Viewmodel)](#настройки-оружия-viewmodel)
* [Настройки прицела (xhair)](#настройки-прицела-xhair)
* [Игровой процесс и клиент](#игровой-процесс-и-клиент)
* [Разработчик](#разработчик)

## Видео и графика

<table className="docs-table">
  <thead><tr><th>Название</th><th>Описание</th><th>Значение по умолчанию</th><th>Версия</th></tr></thead>
  <tbody>
    <tr className="added">
      <td>`r_prefertexturefiltering`</td>
      <td>Для удобного переключения фильтрации текстур</td>
      <td className="value">?</td><td className="status"><a href="/changelog/2.5.6.0">2.5.6.0</a></td>
    </tr>
    <tr className="modified">
      <td>`gl_use_shaders`</td>
      <td>Для включения эффекта overbright</td>
      <td className="value">?</td><td className="status"><a href="/changelog/2.5.6.0">2.5.6.0</a></td>
    </tr>
    <tr className="added">
      <td>`gl_msaa`</td>
      <td>Степень сглаживания: `x2`, `x4`, `x8`, `x16`</td>
      <td className="value">?</td><td className="status"><a href="/changelog/2.5.6.0">2.5.6.0</a></td>
    </tr>
    <tr className="modified">
      <td>`gl_clear`</td>
      <td>Изменяет цвет на серый вместо красного</td>
      <td className="value">?</td><td className="status"><a href="/changelog/2.5.6.0">2.5.6.0</a></td>
    </tr>
    <tr>
      <td>`cl_himodels`</td>
      <td>Включает модели высокого качества <em>Работает только в Half-Life</em></td>
      <td className="value">0</td><td className="status">-</td>
    </tr>
    <tr>
      <td>`cl_shadows`</td>
      <td>Включает тени игроков (маленький черный круг внизу)</td>
      <td className="value">1</td><td className="status">-</td>
    </tr>
    <tr>
      <td>`cl_weather`</td>
      <td>Включает погодные эффекты, такие как капли дождя или снежинки<br/>0 = Отключено<br/>1 = Низкая интенсивность<br/>2 = Средняя интенсивность<br/>3 = Высокая интенсивность</td>
      <td className="value">0</td><td className="status">-</td>
    </tr>
    <tr>
      <td>`cl_showfps`</td>
      <td>Показывает текущий FPS в углу экрана</td>
      <td className="value">1</td><td className="status">-</td>
    </tr>
    <tr>
      <td>`cl_fog_color`</td>
      <td>Настраивает цвет тумана</td>
      <td className="value">0 0 0</td><td className="status">-</td>
    </tr>
    <tr>
      <td>`cl_fog_density`</td>
      <td>Устанавливает плотность тумана</td>
      <td className="value">0</td><td className="status">-</td>
    </tr>
    <tr>
      <td>`cl_fog_skybox`</td>
      <td>Включает распространение тумана на небо</td>
      <td className="value">1</td><td className="status">-</td>
    </tr>
    <tr>
      <td>`cl_smokegren_color`</td>
      <td>Цвет дымового облака от дымовой гранаты</td>
      <td className="value">175 175 175</td><td className="status">-</td>
    </tr>
    <tr>
      <td>`cl_smokegren_full_density`</td>
      <td>Включает максимальную плотность дыма дымовой гранаты</td>
      <td className="value">0</td><td className="status">-</td>
    </tr>
  </tbody>
</table>

<div className="table-legend">
  <div><span className="legend-icon added"></span> Добавлено</div>
  <div><span className="legend-icon changed"></span> Изменено</div>
  <div><span className="legend-icon removed"></span> Удалено</div>
</div>
