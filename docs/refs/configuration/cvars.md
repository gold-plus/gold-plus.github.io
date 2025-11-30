---
id: cvars
title: Консольные переменные
sidebar_position: 1
---

import { SliderButton } from '@site/src/components/Image'
import { VersionBadge } from '@site/src/components/Misc/Badges'
import { Table, Grid } from '@site/src/components/ResponsiveLayout';

<br/>
:::warning Страница в разработке
Эта страница находится в стадии активного наполнения и корректирования<br/>
Возможны ошибки, неточности и пропуски, и отсутствия перевода<br/>
Следите за обновлениями, чтобы получать актуальную информацию.
:::

# Консольные переменные

Список всех консольных переменных (ConVar) — описание, значения по умолчанию.

## Интерфейс
<Table>
  <thead><tr><th>Название</th><th>Стандартное значение</th><th>Мин.</th><th>Макс.</th><th>Описание</th></tr></thead>
  <tbody>
    <tr id='name'>
      <td className='name'>name</td>
      <td className='def'>Player</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Задает имя игрока</td>
    </tr>
    <tr id='password'>
      <td className='name'>password</td>
      <td className='def'>-</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Устанавливает пароль для подключения к защищенному серверу</td>
    </tr>
    <tr id='cl_autowepswitch'>
      <td className='name'>cl_autowepswitch</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Автоматически переключаться на подобранное оружие (если оно мощнее)<br/>`0` Никогда не переключать<br/>`1` Всегда переключать<br/>`2` Всегда переключать, но не во время стрельбы</td>
    </tr>
    <tr id='cl_logocolor'>
      <td className='name'>cl_logocolor</td>
      <td className='def color'><div style={{background: `rgba(255,120,24,0.85)`, color: `#111`}}>255 120 24</div></td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'><div className='text'>Устанавливает цвет спрея (логотипа)</div><div className='desc-meta'><VersionBadge type='changed' since='2.5.6.0'/></div></td>
    </tr>
    <tr id='cl_logofile'>
      <td className='name'>cl_logofile</td>
      <td className='def'>lambda</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Устанавливает файл спрея (логотипа)</td>
    </tr>
    <tr id='sbind'>
      <td className='name'>sbind</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'><div className='text'>Включает возможность использовать 'теневую' привязку клавиш при нахождении на игровом сервере<br/>Любые привязки клавиш, установленные сервером, не сохраняются в конфиг игрока</div><div className='desc-meta'><VersionBadge type='added' since='1.2.0.0'/></div></td>
    </tr>
  </tbody>
</Table>

### Интерфейс : Настройки
<Table>
  <thead><tr><th>Название</th><th>Стандартное значение</th><th>Мин.</th><th>Макс.</th><th>Описание</th></tr></thead>
  <tbody>
    <tr id='cl_servers_history_lastplayed'>
      <td className='name'>cl_servers_history_lastplayed</td>
      <td className='def'>7776000</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'><div className='text'>Удаляет из истории браузера серверов те серверы, на которых вы играли более чем указанное количество секунд назад<br/>По умолчанию установлено 3 месяца (`7776000` секунд)<br/>Установите значение `0` для отключения автоудаления</div><div className='desc-meta'><VersionBadge type='added' since='2.5.0.0'/></div></td>
    </tr>
    <tr id='ui_enable_menu_randomsrv'>
      <td className='name'>ui_enable_menu_randomsrv</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'><div className='text'>Включает пункт 'Случайный сервер' в главном меню игры</div><div className='desc-meta'><VersionBadge type='added' since='1.2.0.0'/></div></td>
    </tr>
    <tr id='ui_password_entry'>
      <td className='name'>ui_password_entry</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'><div className='text'>Включает отображение окна для ввода пароля в настройках игры для получения привилегий на серверах</div><div className='desc-meta'><VersionBadge type='added' since='1.2.0.0'/></div></td>
    </tr>
    <tr id='ui_taskbar_iconflash'>
      <td className='name'>ui_taskbar_iconflash</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'><div className='text'>Включает оповещение в виде мигающего значка игры на панели задач Windows, привлекая внимание к событиям, таким как подключение к серверу, начало нового раунда и т.п.</div><div className='desc-meta'><VersionBadge type='added' since='2.3.3.0'/></div></td>
    </tr>
    <tr id='ui_window_bringfront_on_event'>
      <td className='name'>ui_window_bringfront_on_event</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'><div className='text'>Автоматически разворачивает окно игры и выводит его на передний план при таких событиях, как подключение к серверу, начало нового раунда и т.п.</div><div className='desc-meta'><VersionBadge type='added' since='2.3.6.0'/></div></td>
    </tr>
    <tr id='ui_window_sound_on_event'>
      <td className='name'>ui_window_sound_on_event</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'><div className='text'>Включает звуковое оповещение для привлечения внимания к событиям, таким как подключение к серверу, начало нового раунда и т.п.</div><div className='desc-meta'><VersionBadge type='added' since='2.3.6.0'/></div></td>
    </tr>
    <tr id='vgui_menus'>
      <td className='name'>vgui_menus</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'><div className='text'>Включает меню в новом стиле VGUI с изображениями и описаниями</div><div className='desc-meta'><VersionBadge type='added' since='1.6.8.0'/></div></td>
    </tr>
  </tbody>
</Table>

### Интерфейс : Консоль
<Table>
  <thead><tr><th>Название</th><th>Стандартное значение</th><th>Мин.</th><th>Макс.</th><th>Описание</th></tr></thead>
  <tbody>
    <tr id='dev_console'>
      <td className='name'>dev_console</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'><div className='text'>Позволяет получить доступ к игровой консоли без отображения главного меню (GameUI)<br/>`0` Консоль открывается на фоне главного меню<br/>`1` Консоль может открываться непосредственно в игре (включая диалоговое окно загрузки при подключении к серверу)</div><div className='desc-meta'><VersionBadge type='added' since='2.5.0.0'/></div></td>
    </tr>
    <tr id='console'>
      <td className='name'>console</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Включает/выключает доступ к консоли</td>
    </tr>
    <tr id='con_color'>
      <td className='name'>con_color</td>
      <td className='def color'><div style={{background: `rgba(255,180,30,0.85)`, color: `#111`}}>255 180 30</div></td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Устанавливает цвет текста в консоли в формате RGB</td>
    </tr>
    <tr id='con_mono'>
      <td className='name'>con_mono</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Включает моноширинный шрифт в консоли</td>
    </tr>
    <tr id='con_notifytime'>
      <td className='name'>con_notifytime</td>
      <td className='def'>4</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Время в секундах, в течение которого сообщения из консоли отображаются в углу экрана</td>
    </tr>
    <tr id='con_shifttoggleconsole'>
      <td className='name'>con_shifttoggleconsole</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>При значении `1` консоль открывается только при нажатии Shift + ~ (тильда)</td>
    </tr>
  </tbody>
</Table>

### HUD
<Table>
  <thead><tr><th>Название</th><th>Стандартное значение</th><th>Мин.</th><th>Макс.</th><th>Описание</th></tr></thead>
  <tbody>
    <tr id='hud_draw'>
      <td className='name'>hud_draw</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Включает/выключает отображение всех элементов HUD (интерфейса)</td>
    </tr>
    <tr id='hud_draw_only_deathnotices'>
      <td className='name'>hud_draw_only_deathnotices</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'><div className='text'>При значении `1` из всех элементов HUD отображаются только уведомления о смерти (полезно для записи видео)</div><div className='desc-meta'><VersionBadge type='added' since='2.3.6.0'/></div></td>
    </tr>
    <tr id='hud_drawhistory_time'>
      <td className='name'>hud_drawhistory_time</td>
      <td className='def'>5</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Время в секундах, в течение которого иконки оружия и снаряжения остаются в HUD после подбора</td>
    </tr>
    <tr id='hud_fastswitch'>
      <td className='name'>hud_fastswitch</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Включает быстрое переключение оружия без необходимости дополнительного клика<br/>`1` включен<br/>`0` выключен</td>
    </tr>
    <tr id='hud_takesshots'>
      <td className='name'>hud_takesshots</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Автоматически делает снимок экрана с таблицей счёта перед сменой карты</td>
    </tr>
    <tr id='hud_centerid'>
      <td className='name'>hud_centerid</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Отображение имени игрока при наведении на него<br/>`0` в левом нижнем углу<br/>`1` по центру экрана</td>
    </tr>
    <tr id='hud_color'>
      <td className='name'>hud_color</td>
      <td className='def color'><div style={{background: `rgba(255,160,0,0.85)`, color: `#111`}}>255 160 0</div></td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'><div className='text'>Задает основной цвет для элементов HUD (здоровье, броня, таймер и т.д.)</div><div className='desc-meta'><VersionBadge type='added' since='2.3.1.0'/></div></td>
    </tr>
    <tr id='fov_lerp_in'>
      <td className='name'>fov_lerp_in</td>
      <td className='def'>0</td>
      <td className='min'>0</td>
      <td className='max'>5</td>
      <td className='desc'><div className='text'>Скорость плавного приближения (изменения FOV) при использовании прицела (например, у снайперских винтовок)</div><div className='desc-meta'><VersionBadge type='added' since='2.5.6.0'/></div></td>
    </tr>
    <tr id='fov_lerp_out'>
      <td className='name'>fov_lerp_out</td>
      <td className='def'>0</td>
      <td className='min'>0</td>
      <td className='max'>5</td>
      <td className='desc'><div className='text'>Скорость плавного отдаления (изменения FOV) при выходе из режима прицеливания</div><div className='desc-meta'><VersionBadge type='added' since='2.5.6.0'/></div></td>
    </tr>
    <tr id='fov_lerp_sniper_instant'>
      <td className='name'>fov_lerp_sniper_instant</td>
      <td className='def'>1</td>
      <td className='min'>0</td>
      <td className='max'>1</td>
      <td className='desc'><div className='text'>Мгновенное восстановление поля зрения (FOV) после выстрела из снайперской винтовки<br/>Установите значение `0` для плавного восстановления FOV (контролируется `fov_lerp_in`)</div><div className='desc-meta'><VersionBadge type='added' since='2.5.6.0'/></div></td>
    </tr>
    <tr id='cl_demo_showkeys'>
      <td className='name'>cl_demo_showkeys</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'><div className='text'>Показывать нажатия клавиш перемещения (WASD, Прыжок, Приседание) на экране во время просмотра демо-записи от первого лица</div><div className='desc-meta'><VersionBadge type='added' since='2.5.6.0'/></div></td>
    </tr>
    <tr id='cl_locationalpha'>
      <td className='name'>cl_locationalpha</td>
      <td className='def'>150</td>
      <td className='min'>0</td>
      <td className='max'>255</td>
      <td className='desc'><div className='text'>Устанавливает прозрачность текста с названием локации на карте</div><div className='desc-meta'><VersionBadge type='added' since='2.3.0.0'/></div></td>
    </tr>
    <tr id='cl_weaponlistfix'>
      <td className='name'>cl_weaponlistfix</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Исправляет отображение списка оружия (в Half-Life)</td>
    </tr>
    <tr id='cl_radartype'>
      <td className='name'>cl_radartype</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Задает тип радара<br/>`0` прозрачный<br/>`1` непрозрачный</td>
    </tr>
    <tr id='showpause'>
      <td className='name'>showpause</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Отображает значок паузы, когда игра приостановлена</td>
    </tr>
    <tr id='scr_centertime'>
      <td className='name'>scr_centertime</td>
      <td className='def'>2</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Время в секундах, в течение которого серверные сообщения отображаются по центру экрана</td>
    </tr>
    <tr id='scr_printspeed'>
      <td className='name'>scr_printspeed</td>
      <td className='def'>8</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Скорость печати текстовых сообщений на экране</td>
    </tr>
  </tbody>
</Table>

#### HUD : Прицел
<Table>
  <thead><tr><th>Название</th><th>Стандартное значение</th><th>Мин.</th><th>Макс.</th><th>Описание</th></tr></thead>
  <tbody>
    <tr id='crosshair'>
      <td className='name'>crosshair</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Включает/выключает отображение прицела</td>
    </tr>
    <tr id='cl_crosshair_drawoutline'>
      <td className='name'>cl_crosshair_drawoutline</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'><div className='text'>Добавляет черную обводку вокруг прицела для лучшей видимости</div><div className='desc-meta'><VersionBadge type='added' since='1.2.0.0'/></div></td>
    </tr>
    <tr id='cl_crosshair_dynamic_maxdist_splitratio'>
      <td className='name'>cl_crosshair_dynamic_maxdist_splitratio</td>
      <td className='def'>0.35</td>
      <td className='min'>0.0</td>
      <td className='max'>1.0</td>
      <td className='desc'><div className='text'>При `cl_crosshairstyle 2` определяет соотношение длин внутренней и внешней частей прицела при разделении<br/>`внутренняя` = cl_crosshairsize * (1 — cl_crosshair_dynamic_maxdist_splitratio)<br/>`внешняя` = cl_crosshairsize * cl_crosshair_dynamic_maxdist_splitratio</div><div className='desc-meta'><VersionBadge type='added' since='1.2.0.0'/></div></td>
    </tr>
    <tr id='cl_crosshair_dynamic_splitalpha_innermod'>
      <td className='name'>cl_crosshair_dynamic_splitalpha_innermod</td>
      <td className='def'>1</td>
      <td className='min'>0.0</td>
      <td className='max'>1.0</td>
      <td className='desc'><div className='text'>При `cl_crosshairstyle 2` устанавливает модификатор прозрачности для ВНУТРЕННИХ делений прицела после их разделения</div><div className='desc-meta'><VersionBadge type='added' since='1.2.0.0'/></div></td>
    </tr>
    <tr id='cl_crosshair_dynamic_splitalpha_outermod'>
      <td className='name'>cl_crosshair_dynamic_splitalpha_outermod</td>
      <td className='def'>0.5</td>
      <td className='min'>0.3</td>
      <td className='max'>1.0</td>
      <td className='desc'><div className='text'>При `cl_crosshairstyle 2` устанавливает модификатор прозрачности для ВНЕШНИХ делений прицела после их разделения</div><div className='desc-meta'><VersionBadge type='added' since='1.2.0.0'/></div></td>
    </tr>
    <tr id='cl_crosshair_dynamic_splitdist'>
      <td className='name'>cl_crosshair_dynamic_splitdist</td>
      <td className='def'>7</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'><div className='text'>При `cl_crosshairstyle 2` задает расстояние, на которое разделяются деления прицела</div><div className='desc-meta'><VersionBadge type='added' since='1.2.0.0'/></div></td>
    </tr>
    <tr id='cl_crosshair_friendly_warning'>
      <td className='name'>cl_crosshair_friendly_warning</td>
      <td className='def'>0</td>
      <td className='min'>0</td>
      <td className='max'>2</td>
      <td className='desc'><div className='text'>Показывать предупреждение (иконка 'X') при наведении на союзника<br/>`0` выключено<br/>`1` Только для стандартных стилей прицела<br/>`2` Включено всегда</div><div className='desc-meta'><VersionBadge type='added' since='1.2.0.0'/></div></td>
    </tr>
    <tr id='cl_crosshair_outlinethickness'>
      <td className='name'>cl_crosshair_outlinethickness</td>
      <td className='def'>1</td>
      <td className='min'>0.1</td>
      <td className='max'>3.0</td>
      <td className='desc'><div className='text'>Задает толщину обводки прицела (от 0.1 до 3.0)</div><div className='desc-meta'><VersionBadge type='added' since='1.2.0.0'/></div></td>
    </tr>
    <tr id='cl_crosshair_recoverytime_on_fps'>
      <td className='name'>cl_crosshair_recoverytime_on_fps</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'><div className='text'>Зависимость времени восстановления прицела (после выстрела) от FPS<br/>`1` зависит<br/>`0` не зависит</div><div className='desc-meta'><VersionBadge type='added' since='1.2.0.0'/></div></td>
    </tr>
    <tr id='cl_crosshair_sniper_show_normal_inaccuracy'>
      <td className='name'>cl_crosshair_sniper_show_normal_inaccuracy</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'><div className='text'>Учитывать неточность при стрельбе без прицела ('no-scope') для размытия перекрестия в снайперском прицеле</div><div className='desc-meta'><VersionBadge type='added' since='1.2.0.0'/></div></td>
    </tr>
    <tr id='cl_crosshair_sniper_style'>
      <td className='name'>cl_crosshair_sniper_style</td>
      <td className='def'>0</td>
      <td className='min'>0</td>
      <td className='max'>1</td>
      <td className='desc'><div className='text'>`0` Классический статичный снайперский прицел<br/>`1` Точный динамический снайперский прицел</div><div className='desc-meta'><VersionBadge type='added' since='1.2.0.0'/></div></td>
    </tr>
    <tr id='cl_crosshair_sniper_width'>
      <td className='name'>cl_crosshair_sniper_width</td>
      <td className='def'>1</td>
      <td className='min'>1</td>
      <td className='max'>20</td>
      <td className='desc'><div className='text'>Задает толщину линий снайперского прицела<br/>`1` толщина в один пиксель</div><div className='desc-meta'><VersionBadge type='added' since='2.2.1.0'/></div></td>
    </tr>
    <tr id='cl_crosshair_t'>
      <td className='name'>cl_crosshair_t</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'><div className='text'>Включает Т-образный прицел (убирает верхнее деление)</div><div className='desc-meta'><VersionBadge type='added' since='1.2.0.0'/></div></td>
    </tr>
    <tr id='cl_crosshairalpha'>
      <td className='name'>cl_crosshairalpha</td>
      <td className='def'>255</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'><div className='text'>Устанавливает прозрачность прицела (0 — 255). Чем ниже значение, тем прозрачнее прицел. Требует `cl_crosshairusealpha 1`</div><div className='desc-meta'><VersionBadge type='added' since='1.2.0.0'/></div></td>
    </tr>
    <tr id='cl_crosshaircolor'>
      <td className='name'>cl_crosshaircolor</td>
      <td className='def color'><div style={{background: `rgba(50,250,50,0.85)`, color: `#111`}}>50 250 50</div></td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'><div className='text'>Устанавливает цвет прицела в формате RGB</div><div className='desc-meta'><VersionBadge type='added' since='2.3.1.0'/></div></td>
    </tr>
    <tr id='cl_crosshairdot'>
      <td className='name'>cl_crosshairdot</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'><div className='text'>Добавляет точку в центр прицела. Если установить `cl_crosshairsize 0`, останется только точка</div><div className='desc-meta'><VersionBadge type='added' since='1.2.0.0'/></div></td>
    </tr>
    <tr id='cl_crosshairgap'>
      <td className='name'>cl_crosshairgap</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'><div className='text'>Устанавливает размер зазора между делениями прицела</div><div className='desc-meta'><VersionBadge type='added' since='1.2.0.0'/></div></td>
    </tr>
    <tr id='cl_crosshairgap_useweaponvalue'>
      <td className='name'>cl_crosshairgap_useweaponvalue</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'><div className='text'>Если `1`, зазор прицела будет динамически меняться в зависимости от выбранного оружия</div><div className='desc-meta'><VersionBadge type='added' since='1.2.0.0'/></div></td>
    </tr>
    <tr id='cl_crosshairscale'>
      <td className='name'>cl_crosshairscale</td>
      <td className='def'>0</td>
      <td className='min'>0</td>
      <td className='max'>3</td>
      <td className='desc'><div className='text'>Регулирует масштабирование размера прицела в зависимости от разрешения экрана. `0` = Авто (Пропорционально), либо значения разрешения, например `480`, `640`, `1024`</div><div className='desc-meta'><VersionBadge type='added' since='2.3.2.0'/></div></td>
    </tr>
    <tr id='cl_crosshairsize'>
      <td className='name'>cl_crosshairsize</td>
      <td className='def'>5</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'><div className='text'>Устанавливает длину делений прицела</div><div className='desc-meta'><VersionBadge type='added' since='1.2.0.0'/></div></td>
    </tr>
    <tr id='cl_crosshairstyle'>
      <td className='name'>cl_crosshairstyle</td>
      <td className='def'>6</td>
      <td className='min'>0</td>
      <td className='max'>6</td>
      <td className='desc'><div className='text'>`0` СТАНДАРТНЫЙ<br/>`1` СТАНДАРТНЫЙ СТАТИЧНЫЙ<br/>`2` ТОЧНЫЙ РАЗДЕЛЕННЫЙ (точная отдача/разброс с фиксированной внутренней частью)<br/>`3` ТОЧНЫЙ ДИНАМИЧЕСКИЙ (точная отдача/разброс)<br/>`4` КЛАССИЧЕСКИЙ СТАТИЧНЫЙ<br/>`5` СТАРЫЙ СТИЛЬ CS (неточная отдача/обратная связь)<br/>`6` ОРИГИНАЛЬНЫЙ CS 1.6</div><div className='desc-meta'><VersionBadge type='added' since='1.2.0.0'/></div></td>
    </tr>
    <tr id='cl_crosshairthickness'>
      <td className='name'>cl_crosshairthickness</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'><div className='text'>Регулирует толщину линий прицела</div><div className='desc-meta'><VersionBadge type='added' since='1.2.0.0'/></div></td>
    </tr>
    <tr id='cl_crosshairusealpha'>
      <td className='name'>cl_crosshairusealpha</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'><div className='text'>Включает/выключает возможность настройки прозрачности прицела с помощью `cl_crosshairalpha`</div><div className='desc-meta'><VersionBadge type='added' since='1.2.0.0'/></div></td>
    </tr>
    <tr id='cl_fixedcrosshairgap'>
      <td className='name'>cl_fixedcrosshairgap</td>
      <td className='def'>3</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'><div className='text'>Устанавливает размер зазора для статичного прицела</div><div className='desc-meta'><VersionBadge type='added' since='1.2.0.0'/></div></td>
    </tr>
    <tr id='weapon_debug_spread_gap'>
      <td className='name'>weapon_debug_spread_gap</td>
      <td className='def'>0.67</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'><div className='text'>Коэффициент для `weapon_debug_spread_show 3`</div><div className='desc-meta'><VersionBadge type='added' since='1.2.0.0'/></div></td>
    </tr>
    <tr id='weapon_debug_spread_show'>
      <td className='name'>weapon_debug_spread_show</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'><div className='text'>Включает отладочное отображение разброса оружия<br/>`1` показывает квадрат разброса<br/>`3` показывает разброс с помощью динамического прицела</div><div className='desc-meta'><VersionBadge type='added' since='1.2.0.0'/></div></td>
    </tr>
    <tr id='cl_dynamiccrosshair'>
      <td className='name'>cl_dynamiccrosshair</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Включает динамический прицел (расширяется при движении и стрельбе)<br/>`0` Выключен (статичный)<br/>`1` Стандартное поведение (зависит от реальной точности)<br/>`2` Реагирует только на отдачу от выстрелов</td>
    </tr>
    <tr id='cl_observercrosshair'>
      <td className='name'>cl_observercrosshair</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Отображает прицел в режиме наблюдателя</td>
    </tr>
  </tbody>
</Table>

#### HUD : Радар
<Table>
  <thead><tr><th>Название</th><th>Стандартное значение</th><th>Мин.</th><th>Макс.</th><th>Описание</th></tr></thead>
  <tbody>
    <tr id='hud_radar'>
      <td className='name'>hud_radar</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>
        <div className='text'>Включает улучшенный HUD-радар</div>
        <div className='desc-meta'>
          <SliderButton
            buttonName='Просмотр'
            boundsPadding={29}
            className='radar-halo'
            slides={[
              {type: 'compare',
                images: [
                  {type: 'image', path: '/assets/radar/standard.webp', desc: 'Тип радара — Классический', label: 'hud_radar 0'},
                  {type: 'image', path:'/assets/radar/advanced.webp', desc: 'Тип радара -— Расширенный', label: 'hud_radar 1'}
              ]}
            ]}
          />
          <VersionBadge type='added' since='2.3.0.0'/>
        </div>
      </td>
    </tr>
    <tr id='hud_radar_alpha'>
      <td className='name'>hud_radar_alpha</td>
      <td className='def'>255</td>
      <td className='min'>0</td>
      <td className='max'>255</td>
      <td className='desc'>
        <div className='text'>
          Регулирует прозрачность радара (0 — 255)<br/>
          *Не действует, если установлен <a href='#cl_radartype'>cl_radartype</a>*
        </div>
        <div className='desc-meta'>
          <SliderButton
            buttonName='Просмотр'
            slides={[
              {type: 'compare',
                images: [
                  {type: 'image', path: '/assets/radar/alpha_255.webp', desc: 'Радар — Непрозрачный', label: 'hud_radar_alpha 255'},
                  {type: 'image', path:'/assets/radar/alpha_100.webp', desc: 'Радар — Полупрозрачный', label: 'hud_radar_alpha 100'}
              ]}
            ]}
            />
          <VersionBadge type='added' since='2.3.0.0'/>
        </div>
      </td>
    </tr>
    <tr id='hud_radar_always_centered'>
      <td className='name'>hud_radar_always_centered</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>
        <div className='text'>Если `0`, карта на радаре используется полностью. Иначе игрок всегда будет в центре радара, даже у краев карты</div>
        <div className='desc-meta'>
          <SliderButton
            buttonName='Просмотр'
            boundsPadding={29}
            className='radar-halo'
            slides={[
              {type: 'compare',
                images: [
                  {path: '/assets/radar/non_centered.webp', desc: 'Игрок движется внутри круга радара', label: 'hud_radar_always_centered 0'},
                  {path: '/assets/radar/centered.webp', desc: 'Игрок всегда зафиксирован в центре круга радара', label: 'hud_radar_always_centered 1'}
              ]}
            ]}
          />
          <VersionBadge type='added' since='2.3.4.0'/>
        </div>
      </td>
    </tr>
    <tr id='hud_radar_bgcolor'>
      <td className='name'>hud_radar_bgcolor</td>
      <td className='def color'><div style={{background: `rgba(0,0,0,1.0)`, color: `#eee`}}>0 0 0 255</div></td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>
        <div className='text'>Цвет заднего фона радара (RGBA)</div>
        <div className='desc-meta'>
          <SliderButton
            buttonName='Просмотр'
            boundsPadding={29}
            className='radar-halo'
            slides={[
              {type: 'compare',
                images: [
                  {type: 'image', path: '/assets/radar/bgcolor_white.webp', desc: 'Задний фон радара — Белый', label: 'hud_radar_bgcolor 255 255 255 255'},
                  {type: 'image', path:'/assets/radar/bgcolor_green.webp', desc: 'Задний фон радара — Зеленый', label: 'hud_radar_bgcolor 0 255 0 255'}
              ]}
            ]}
          />
          <VersionBadge type='added' since='2.3.0.0'/>
        </div>
      </td>
    </tr>
    <tr id='hud_radar_fgcolor'>
      <td className='name'>hud_radar_fgcolor</td>
      <td className='def color'><div style={{background: `rgba(0,0,0,0.8)`, color: `#eee`}}>0 0 0 220</div></td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>
        <div className='text'>Цвет переднего фона радара (RGBA)</div>
        <div className='desc-meta'>
          <SliderButton
            buttonName='Просмотр'
            boundsPadding={29}
            className='radar-halo'
            slides={[
              {type: 'compare',
                images: [
                  {type: 'image', path: '/assets/radar/fgcolor_white.webp', desc: 'Передний фон радара — Белый', label: 'hud_radar_fgcolor 255 255 255 255'},
                  {type: 'image', path:'/assets/radar/fgcolor_green.webp', desc: 'Передний фон радара — Зеленый', label: 'hud_radar_fgcolor 0 255 0 255'}
              ]}
            ]}
          />
          <VersionBadge type='added' since='2.3.0.0'/>
        </div>
      </td>
    </tr>
    <tr id='hud_radar_icon_scale_min'>
      <td className='name'>hud_radar_icon_scale_min</td>
      <td className='def'>0.3</td>
      <td className='min'>0.05</td>
      <td className='max'>1</td>
      <td className='desc'>
        <div className='text'>Устанавливает минимальный масштаб иконок на радаре (допустимые значения от 0.05 до 1.0)</div>
        <div className='desc-meta'>
          <SliderButton
            buttonName='Просмотр'
            boundsPadding={29}
            className='radar-halo'
            slides={[
              {type: 'compare',
                images: [
                  {type: 'image', path: '/assets/radar/icon_scale_min_0_3.webp', desc: 'Масштаб иконок — Средний', label: 'hud_radar_icon_scale_min 0.3'},
                  {type: 'image', path:'/assets/radar/icon_scale_min_1_0.webp', desc: 'Масштаб иконок — Маленький', label: 'hud_radar_icon_scale_min 1.0'}
              ]}
            ]}
          />
          <VersionBadge type='added' since='2.3.4.0'/>
        </div>
      </td>
    </tr>
    <tr id='hud_radar_map_outlinecolor'>
      <td className='name'>hud_radar_map_outlinecolor</td>
      <td className='def color'><div style={{background: `rgba(10,10,10,1)`, color: `#eee`}}>10 10 10 255</div></td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>
        <div className='text'>Устанавливает цвет обводки границ карты на радаре (RGBA)<br/>Работает только если задана толщинца обводки <a href='#hud_radar_map_outlinethickness'>hud_radar_map_outlinethickness</a></div>
        <div className='desc-meta'>
          <SliderButton
            buttonName='Просмотр'
            boundsPadding={29}
            className='radar-halo'
            slides={[
              {type: 'compare',
                images: [
                  {type: 'image', path: '/assets/radar/map_outlinecolor_default.webp', desc: 'Обводка — Не установлена', label: 'hud_radar_map_outlinecolor 0'},
                  {type: 'image', path:'/assets/radar/map_outlinecolor_white.webp', desc: 'Обводка — Белая', label: 'hud_radar_map_outlinecolor 255 255 255 255'}
              ]}
            ]}
          />
          <VersionBadge type='added' since='2.3.0.0'/>
        </div>
      </td>
    </tr>
    <tr id='hud_radar_map_outlinethickness'>
      <td className='name'>hud_radar_map_outlinethickness</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>
        <div className='text'>Устанавливает толщину обводки границ карты на радаре</div>
        <div className='desc-meta'>
          <SliderButton
            buttonName='Просмотр'
            boundsPadding={29}
            className='radar-halo'
            slides={[
              {type: 'compare',
                images: [
                  {type: 'image', path: '/assets/radar/map_outlinecolor_white.webp', desc: 'Толщина обводки — Тонкая', label: 'hud_radar_map_outlinethickness 2'},
                  {type: 'image', path:'/assets/radar/map_outlinethickness_4.webp', desc: 'Толщина обводки — Средняя', label: 'hud_radar_map_outlinethickness 4'}
              ]}
            ]}
          />
          <VersionBadge type='added' since='2.3.0.0'/>
        </div>
      </td>
    </tr>
    <tr id='hud_radar_map_shadecolor'>
      <td className='name'>hud_radar_map_shadecolor</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>
        <div className='text'>Устанавливает цвет оттенка карты (RGB)</div>
        <div className='desc-meta'>
          <SliderButton
            buttonName='Просмотр'
            boundsPadding={29}
            className='radar-halo'
            slides={[
              {type: 'compare',
                images: [
                  {type: 'image', path: '/assets/radar/map_shadecolor_default.webp', desc: 'Оттенок карты — Не установлен', label: 'hud_radar_map_shadecolor 0'},
                  {type: 'image', path:'/assets/radar/map_shadecolor_green.webp', desc: 'Оттенок карты — Зеленый', label: 'hud_radar_map_shadecolor 0 255 0'}
              ]}
            ]}
          />
          <VersionBadge type='added' since='2.3.0.0'/>
        </div>
      </td>
    </tr>
    <tr id='hud_radar_map_solidcolor'>
      <td className='name'>hud_radar_map_solidcolor</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>
        <div className='text'>Устанавливает сплошной цвет карты (RGB)</div>
        <div className='desc-meta'>
          <SliderButton
            buttonName='Просмотр'
            boundsPadding={29}
            className='radar-halo'
            slides={[
              {type: 'compare',
                images: [
                  {type: 'image', path: '/assets/radar/map_shadecolor_default.webp', desc: 'Сплошной цвет карты — Не установлен', label:   'hud_radar_map_solidcolor 0'},
                  {type: 'image', path:'/assets/radar/map_solidcolor_gray.webp', desc: 'Сплошной цвет карты — Серый', label: 'hud_radar_map_solidcolor 110 110   110'}
              ]}
            ]}
          />
          <VersionBadge type='added' since='2.3.4.0'/>
        </div>
      </td>
    </tr>
    <tr id='hud_radar_mapscale'>
      <td className='name'>hud_radar_mapscale</td>
      <td className='def'>0.9</td>
      <td className='min'>0.2</td>
      <td className='max'>3.5</td>
      <td className='desc'>
        <div className='text'>Задает масштаб карты на радаре</div>
        <div className='desc-meta'>
          <SliderButton
            buttonName='Просмотр'
            boundsPadding={29}
            className='radar-halo'
            slides={[
              {type: 'compare',
                images: [
                  {type: 'image', path: '/assets/radar/mapscale_0_9.webp', desc: 'Масштаб карты — Увеличенный', label: 'hud_radar_mapscale 0.9'},
                  {type: 'image', path:'/assets/radar/mapscale_0_5.webp', desc: 'Масштаб карты — Уменьшенный', label: 'hud_radar_mapscale 0.5'}
              ]}
            ]}
          />
          <VersionBadge type='added' since='2.3.0.0'/>
        </div>
      </td>
    </tr>
    <tr id='hud_radar_mapscale_dynamic'>
      <td className='name'>hud_radar_mapscale_dynamic</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>
        <div className='text'>Включает динамическое масштабирование карты, чтобы вместить всех видимых игроков на радаре</div>
        <div className='desc-meta'>
          <SliderButton
            buttonName='Просмотр'
            boundsPadding={29}
            className='radar-halo'
            slides={[
              {type: 'compare',
                images: [
                  {type: 'image', path: '/assets/radar/mapscale_non_dynamic.webp', desc: 'Масштаб карты — Постоянный', label: 'hud_radar_mapscale_dynamic 0'},
                  {type: 'image', path:'/assets/radar/mapscale_dynamic.webp', desc: 'Масштаб карты — Автоматический', label: 'hud_radar_mapscale_dynamic 1'}
              ]}
            ]}
          />
          <VersionBadge type='added' since='2.5.6.0'/>
        </div>
      </td>
    </tr>
    <tr id='hud_radar_mapscale_dynamic_min'>
      <td className='name'>hud_radar_mapscale_dynamic_min</td>
      <td className='def'>0.5</td>
      <td className='min'>0.01</td>
      <td className='max'>3.5</td>
      <td className='desc'><div className='text'>Устанавливает минимальный порог масштабирования, чтобы карта не становилась слишком мелкой при динамическом масштабировании. (Масштаб 0.5 в большинстве случаев покрывает всю карту)<br/><br/>См. <a href='#hud_radar_mapscale_dynamic'>hud_radar_mapscale_dynamic</a></div><div className='desc-meta'><VersionBadge type='added' since='2.5.6.0'/></div></td>
    </tr>
    <tr id='hud_radar_objectives'>
      <td className='name'>hud_radar_objectives</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>
        <div className='text'>Включает отображение целей (например, мест для закладки бомбы) на радаре</div>
        <div className='desc-meta'>
          <SliderButton
            buttonName='Просмотр'
            boundsPadding={29}
            className='radar-halo'
            slides={[
              {type: 'compare',
                images: [
                  {type: 'image', path: '/assets/radar/objectives_off.webp', desc: 'Отображение цели на карте — Не установлено', label: 'hud_radar_objectives 0'},
                  {type: 'image', path:'/assets/radar/objectives_on.webp', desc: 'Отображение цели на карте — Установлено', label: 'hud_radar_objectives 1'}
              ]}
            ]}
          />
          <VersionBadge type='added' since='2.3.0.0'/>
        </div>
      </td>
    </tr>
    <tr id='hud_radar_panel_pos'>
      <td className='name'>hud_radar_panel_pos</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'><div className='text'>Задает положение радара на экране<br/>`0` слева<br/>`1` справа</div><div className='desc-meta'><VersionBadge type='added' since='2.3.5.0'/></div></td>
    </tr>
    <tr id='hud_radar_rotate'>
      <td className='name'>hud_radar_rotate</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>
        <div className='text'>Включает вращение карты вместе с игроком</div>
        <div className='desc-meta'>
          <SliderButton
            buttonName='Просмотр'
            boundsPadding={29}
            className='radar-halo'
            slides={[
              {type: 'compare',
                images: [
                  {type: 'image', path: '/assets/radar/radar_rotate_off.webp', desc: 'Вращение карты — Не установлено', label: 'hud_radar_rotate 0'},
                  {type: 'image', path:'/assets/radar/radar_rotate_on.webp', desc: 'Вращение карты — Установлено', label: 'hud_radar_rotate 1'}
              ]}
            ]}
          />
          <VersionBadge type='added' since='2.3.4.0'/>
        </div>
      </td>
    </tr>
    <tr id='hud_radar_scale'>
      <td className='name'>hud_radar_scale</td>
      <td className='def'>1</td>
      <td className='min'>0.5</td>
      <td className='max'>3</td>
      <td className='desc'><div className='text'>Устанавливает общий масштаб радара (допустимые значения от 0.5 до 3.0)</div><div className='desc-meta'><VersionBadge type='added' since='2.3.0.0'/></div></td>
    </tr>
    <tr id='hud_radar_scale_with_scoreboard'>
      <td className='name'>hud_radar_scale_with_scoreboard</td>
      <td className='def'>0</td>
      <td className='min'>0</td>
      <td className='max'>3</td>
      <td className='desc'><div className='text'>Устанавливает масштаб радара, когда открыта таблица счёта. Если `0`, масштабирование отключено</div><div className='desc-meta'><VersionBadge type='added' since='2.5.0.0'/></div></td>
    </tr>
    <tr id='hud_radar_shapecolor'>
      <td className='name'>hud_radar_shapecolor</td>
      <td className='def color'><div style={{background: `rgba(158,158,158,0.85)`, color:`var(--ifm-font-color-base)`}}>158 158 158</div></td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>
        <div className='text'>Цвет формы модуля вокруг радара (RGB)<br/><br/>Не рекомендуется использовать красные оттенки цвета, модуль радара пульсирует только красным цветом во время установленный бомбы</div>
        <div className='desc-meta'>
          <SliderButton
            buttonName='Просмотр'
            boundsPadding={29}
            className='radar-halo'
            slides={[
              {type: 'compare',
                images: [
                  {type: 'image', path: '/assets/radar/module_shapecolor_default.webp', desc: 'Цвет модуля радара — Светло-серый', label: 'hud_radar_shapecolor   158 158 158'},
                  {type: 'image', path:'/assets/radar/module_shapecolor_green.webp', desc: 'Цвет модуля радара — Зеленый', label: 'hud_radar_shapecolor 0 200 0'}
              ]}
            ]}
          />
          <VersionBadge type='added' since='2.3.4.0'/>
        </div>
      </td>
    </tr>
    <tr id='hud_radar_showhealth'>
      <td className='name'>hud_radar_showhealth</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>
        <div className='text'>Показывать здоровье игроков на карте</div>
        <div className='desc-meta'>
          <SliderButton
            buttonName='Просмотр'
            boundsPadding={29}
            className='radar-halo'
            slides={[
              {type: 'compare',
                images: [
                  {type: 'image', path: '/assets/radar/show_default.webp', desc: 'Здоровье игроков на карте — Выключены', label: 'hud_radar_showhealth 0'},
                  {type: 'image', path:'/assets/radar/show_health.webp', desc: 'Здоровье игроков на карте — Включены', label: 'hud_radar_showhealth 1'}
              ]}
            ]}
          />
          <VersionBadge type='added' since='2.3.0.0'/>
        </div>
      </td>
    </tr>
    <tr id='hud_radar_shownames'>
      <td className='name'>hud_radar_shownames</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>
        <div className='text'>Показывать имена игроков на карте</div>
        <div className='desc-meta'>
          <SliderButton
            buttonName='Просмотр'
            boundsPadding={29}
            className='radar-halo'
            slides={[
              {type: 'compare',
                images: [
                  {type: 'image', path: '/assets/radar/show_default.webp', desc: 'Имена игроков на карте — Выключены', label: 'hud_radar_shownames 0'},
                  {type: 'image', path:'/assets/radar/show_names.webp', desc: 'Имена игроков на карте — Включены', label: 'hud_radar_shownames 1'}
              ]}
            ]}
          />
          <VersionBadge type='added' since='2.3.0.0'/>
        </div>
      </td>
    </tr>
    <tr id='hud_radar_showtracks'>
      <td className='name'>hud_radar_showtracks</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>
        <div className='text'>Показывать следы игроков на карте</div>
        <div className='desc-meta'>
          <SliderButton
            buttonName='Просмотр'
            boundsPadding={29}
            className='radar-halo'
            slides={[
              {type: 'compare',
                images: [
                  {type: 'image', path: '/assets/radar/show_default.webp', desc: 'Следы игроков на карте — Выключены', label: 'hud_radar_showtracks 0'},
                  {type: 'image', path:'/assets/radar/show_tracks.webp', desc: 'Следы игроков на карте — Включены', label: 'hud_radar_showtracks 1'}
              ]}
            ]}
          />
          <VersionBadge type='added' since='2.3.0.0'/>
        </div>
      </td>
    </tr>
    <tr id='hud_radar_square'>
      <td className='name'>hud_radar_square</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>
        <div className='text'>Включает радар квадратной формы</div>
        <div className='desc-meta'>
          <SliderButton
            buttonName='Просмотр'
            boundsPadding={29}
            className='radar-halo'
            slides={[
              {type: 'compare',
                images: [
                  {type: 'image', path: '/assets/radar/radar_round.webp', desc: 'Стиль радара — Круглый', label: 'hud_radar_square 0'},
                  {type: 'image', path:'/assets/radar/radar_square.webp', desc: 'Стиль радара — Квадратный', label: 'hud_radar_square 1'}
              ]}
            ]}
          />
          <VersionBadge type='added' since='2.3.0.0'/>
        </div>
      </td>
    </tr>
    <tr id='hud_radar_square_with_scoreboard'>
      <td className='name'>hud_radar_square_with_scoreboard</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'><div className='text'>Если `1`, радар будет становиться квадратным, когда открыта таблица счёта</div><div className='desc-meta'><VersionBadge type='added' since='2.3.4.0'/></div></td>
    </tr>
    <tr id='hud_radar_table_rotate'>
      <td className='name'>hud_radar_table_rotate</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'><div className='text'>Вращать квадратный радар, когда открыта таблица счёта</div><div className='desc-meta'><VersionBadge type='added' since='2.3.4.0'/></div></td>
    </tr>
    <tr id='hud_radar_takeshot'>
      <td className='name'>hud_radar_takeshot</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'><div className='text'>Автоматически создавать изображение карты и скрипт для радара, если они отсутствуют</div><div className='desc-meta'><VersionBadge type='added' since='2.5.0.0'/></div></td>
    </tr>
    <tr id='hud_radar_takeshot_quality'>
      <td className='name'>hud_radar_takeshot_quality</td>
      <td className='def'>65</td>
      <td className='min'>10</td>
      <td className='max'>100</td>
      <td className='desc'><div className='text'>Устанавливает качество (в процентах) создаваемого изображения карты для радара</div><div className='desc-meta'><VersionBadge type='added' since='2.5.0.0'/></div></td>
    </tr>
    <tr id='hud_radar_x'>
      <td className='name'>hud_radar_x</td>
      <td className='def'>16</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'><div className='text'>Позиция радара по оси X</div><div className='desc-meta'><VersionBadge type='added' since='2.3.0.0'/></div></td>
    </tr>
    <tr id='hud_radar_y'>
      <td className='name'>hud_radar_y</td>
      <td className='def'>16</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'><div className='text'>Позиция радара по оси Y</div><div className='desc-meta'><VersionBadge type='added' since='2.3.0.0'/></div></td>
    </tr>
    <tr>
      <td colSpan='5' className='name'><a href='#cl_radartype'>cl_radartype</a></td>
    </tr>
  </tbody>
</Table>

#### HUD : Уведомление о смерти
<Table>
  <thead><tr><th>Название</th><th>Стандартное значение</th><th>Мин.</th><th>Макс.</th><th>Описание</th></tr></thead>
  <tbody>
    <tr id='hud_deathnotice_draw'>
      <td className='name'>hud_deathnotice_draw</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'><div className='text'>Отображать уведомления об убийствах (киллфид)</div><div className='desc-meta'><VersionBadge type='added' since='2.0.0.0'/></div></td>
    </tr>
    <tr id='hud_deathnotice_fade'>
      <td className='name'>hud_deathnotice_fade</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'><div className='text'>Включает плавное появление и исчезновение уведомлений об убийствах</div><div className='desc-meta'><VersionBadge type='added' since='2.3.0.0'/></div></td>
    </tr>
    <tr id='hud_deathnotice_gap'>
      <td className='name'>hud_deathnotice_gap</td>
      <td className='def'>4</td>
      <td className='min'>0</td>
      <td className='max'>-</td>
      <td className='desc'><div className='text'>Устанавливает промежуток между строками в списке убийств</div><div className='desc-meta'><VersionBadge type='added' since='2.3.0.0'/></div></td>
    </tr>
    <tr id='hud_deathnotice_iconcolor'>
      <td className='name'>hud_deathnotice_iconcolor</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'><div className='text'>Переопределяет цвета RGBA для иконок в списке убийств</div><div className='desc-meta'><VersionBadge type='added' since='2.3.0.0'/></div></td>
    </tr>
    <tr id='hud_deathnotice_iconscale'>
      <td className='name'>hud_deathnotice_iconscale</td>
      <td className='def'>0.85</td>
      <td className='min'>0.5</td>
      <td className='max'>5</td>
      <td className='desc'><div className='text'>Устанавливает масштаб иконок убийств (допустимые значения от 0.5 до 5.0)</div><div className='desc-meta'><VersionBadge type='added' since='2.3.0.0'/></div></td>
    </tr>
    <tr id='hud_deathnotice_iconshd'>
      <td className='name'>hud_deathnotice_iconshd</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'><div className='text'>Устанавливает качество иконок убийств<br/>`0` низкое (классика)<br/>`1` высокое</div><div className='desc-meta'><VersionBadge type='added' since='2.3.4.0'/></div></td>
    </tr>
    <tr id='hud_deathnotice_killrarity'>
      <td className='name'>hud_deathnotice_killrarity</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'><div className='text'>Отображать иконки редкости убийств<br/>`0` Только иконка выстрела в голову<br/>`1` Отображать все иконки</div><div className='desc-meta'><VersionBadge type='added' since='2.3.0.0'/></div></td>
    </tr>
    <tr id='hud_deathnotice_max'>
      <td className='name'>hud_deathnotice_max</td>
      <td className='def'>6</td>
      <td className='min'>1</td>
      <td className='max'>-</td>
      <td className='desc'><div className='text'>Максимальное количество отображаемых уведомлений об убийствах</div><div className='desc-meta'><VersionBadge type='added' since='2.0.0.0'/></div></td>
    </tr>
    <tr id='hud_deathnotice_outlinethickness'>
      <td className='name'>hud_deathnotice_outlinethickness</td>
      <td className='def'>3</td>
      <td className='min'>-20</td>
      <td className='max'>20</td>
      <td className='desc'><div className='text'>Устанавливает толщину обводки для уведомлений об убийствах</div><div className='desc-meta'><VersionBadge type='added' since='2.3.0.0'/></div></td>
    </tr>
    <tr id='hud_deathnotice_panel_pos'>
      <td className='name'>hud_deathnotice_panel_pos</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'><div className='text'>Задает положение списка убийств<br/>`0` слева<br/>`1` справа</div><div className='desc-meta'><VersionBadge type='added' since='2.3.0.0'/></div></td>
    </tr>
    <tr id='hud_deathnotice_style'>
      <td className='name'>hud_deathnotice_style</td>
      <td className='def'>3</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'><div className='text'>Устанавливает стиль уведомлений об убийствах<br/>`0` СТАНДАРТНЫЙ<br/>`1` СТИЛЬ CSO<br/>`2` СТИЛЬ CSGO (ОБВОДКА ТОЛЬКО У ЛОКАЛЬНОГО ИГРОКА)<br/>`3` СТИЛЬ CSGO (ОБВОДКА И ФОН)</div><div className='desc-meta'><VersionBadge type='added' since='2.3.0.0'/></div></td>
    </tr>
    <tr id='hud_deathnotice_time'>
      <td className='name'>hud_deathnotice_time</td>
      <td className='def'>6</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Время отображения уведомлений об убийствах в секундах</td>
    </tr>
  </tbody>
</Table>

#### HUD : Таблица счета
<Table>
  <thead><tr><th>Название</th><th>Стандартное значение</th><th>Мин.</th><th>Макс.</th><th>Описание</th></tr></thead>
  <tbody>
    <tr id='scoreboard_shortheaders'>
      <td className='name'>scoreboard_shortheaders</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Использовать короткие заголовки в таблице счёта</td>
    </tr>
    <tr id='scoreboard_showavatars'>
      <td className='name'>scoreboard_showavatars</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Отображать аватары игроков в таблице счёта</td>
    </tr>
    <tr id='scoreboard_showhealth'>
      <td className='name'>scoreboard_showhealth</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Отображать здоровье игроков в таблице счёта</td>
    </tr>
    <tr id='scoreboard_showmoney'>
      <td className='name'>scoreboard_showmoney</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Отображать деньги игроков в таблице счёта</td>
    </tr>
    <tr id='scoreboard_players_linespacing'>
      <td className='name'>scoreboard_players_linespacing</td>
      <td className='def'>22</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'><div className='text'>Межстрочный интервал для игроков в таблице счёта</div><div className='desc-meta'><VersionBadge type='added' since='2.0.0.0'/></div></td>
    </tr>
    <tr id='scoreboard_players_linespacing_fixed'>
      <td className='name'>scoreboard_players_linespacing_fixed</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'><div className='text'>Использовать фиксированный межстрочный интервал</div><div className='desc-meta'><VersionBadge type='added' since='2.0.0.0'/></div></td>
    </tr>
    <tr id='scoreboard_showspeaker'>
      <td className='name'>scoreboard_showspeaker</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'><div className='text'>Отображать иконку говорящего игрока в таблице счёта</div><div className='desc-meta'><VersionBadge type='added' since='2.5.6.0'/></div></td>
    </tr>
  </tbody>
</Table>

#### HUD : Режим наблюдателя
<Table>
  <thead><tr><th>Название</th><th>Стандартное значение</th><th>Мин.</th><th>Макс.</th><th>Описание</th></tr></thead>
  <tbody>
    <tr id='spec_autodirector'>
      <td className='name'>spec_autodirector</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Авторежиссер: камера автоматически переключается между игроками и ракурсами</td>
    </tr>
    <tr id='spec_drawcone'>
      <td className='name'>spec_drawcone</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Отображает на обзорной карте конус, показывающий направление взгляда наблюдаемого игрока</td>
    </tr>
    <tr id='spec_drawnames'>
      <td className='name'>spec_drawnames</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Включает/выключает отображение имен игроков на обзорной карте</td>
    </tr>
    <tr id='spec_drawstatus'>
      <td className='name'>spec_drawstatus</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Включает/выключает игровую информацию (карта, время раунда и т.д.) в правом верхнем углу экрана в режиме наблюдателя</td>
    </tr>
    <tr id='spec_movespeedkey'>
      <td className='name'>spec_movespeedkey</td>
      <td className='def'>3.55</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Множитель скорости перемещения в режиме наблюдателя при зажатой клавише Shift</td>
    </tr>
    <tr id='spec_pip'>
      <td className='name'>spec_pip</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Включает режим наблюдателя 'Картинка в картинке'</td>
    </tr>
    <tr id='spec_scoreboard'>
      <td className='name'>spec_scoreboard</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Включает/выключает отображение таблицы счёта в режиме наблюдателя</td>
    </tr>
  </tbody>
</Table>

#### HUD : Чат / Текст
<Table>
  <thead><tr><th>Название</th><th>Стандартное значение</th><th>Мин.</th><th>Макс.</th><th>Описание</th></tr></thead>
  <tbody>
    <tr id='hud_message'>
      <td className='name'>hud_message</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'><div className='text'>Показывать HUD-сообщения<br/>`0` Выключено<br/>`1` Все сообщения<br/>`2` Только HUD-сообщения<br/>`3` Только DHUD-сообщения</div><div className='desc-meta'><VersionBadge type='added' since='2.3.0.0'/></div></td>
    </tr>
    <tr id='hud_headname'>
      <td className='name'>hud_headname</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>
        <div className='text'>
          Показывать имя над головой союзника или отслеживаемого игрока (команда `trackplayer`) <a className='ref-link' href='/docs/refs/configuration/commands#trackplayer'/><br/>
          `0` Выключено<br/>
          `1` Включено<br/>
          `2` Показывать имена всех игроков во время просмотра демо-записей
        </div>
        <div className='desc-meta'>
          <VersionBadge type='added' since='2.0.0.0'/>
          <VersionBadge type='changed' since='2.5.7.0'/>
        </div>
      </td>
    </tr>
    <tr id='hud_saytext'>
      <td className='name'>hud_saytext</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Управляет отображением игрового чата<br/>`0` Оотключить чат<br/>`1` Отображать чат, поле ввода сверху<br/>`2` Отображать чат, поле ввода под текстом чата</td>
    </tr>
    <tr id='hud_saytext_fade'>
      <td className='name'>hud_saytext_fade</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'><div className='text'>Включает плавное появление и исчезновение сообщений в чате</div><div className='desc-meta'><VersionBadge type='added' since='2.3.5.0'/></div></td>
    </tr>
    <tr id='hud_saytext_gap'>
      <td className='name'>hud_saytext_gap</td>
      <td className='def'>1</td>
      <td className='min'>0</td>
      <td className='max'>-</td>
      <td className='desc'><div className='text'>Устанавливает промежуток между строками в чате</div><div className='desc-meta'><VersionBadge type='added' since='2.3.5.0'/></div></td>
    </tr>
    <tr id='hud_saytext_max'>
      <td className='name'>hud_saytext_max</td>
      <td className='def'>5</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'><div className='text'>Максимальное количество одновременно отображаемых сообщений в чате</div><div className='desc-meta'><VersionBadge type='added' since='2.3.4.0'/></div></td>
    </tr>
    <tr id='hud_saytext_time'>
      <td className='name'>hud_saytext_time</td>
      <td className='def'>5</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Время отображения сообщений в чате (в секундах)</td>
    </tr>
  </tbody>
</Table>

#### HUD : Спидометр
<Table>
  <thead><tr><th>Название</th><th>Стандартное значение</th><th>Мин.</th><th>Макс.</th><th>Описание</th></tr></thead>
  <tbody>
    <tr id='hud_speedometer'>
      <td className='name'>hud_speedometer</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'><div className='text'>Включить спидометр</div><div className='desc-meta'><VersionBadge type='added' since='2.5.6.0'/></div></td>
    </tr>
    <tr id='hud_speedometer_stayjump'>
      <td className='name'>hud_speedometer_stayjump</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'><div className='text'>Не обновлять скорость, пока игрок находится в воздухе (показывать скорость в момент прыжка)</div><div className='desc-meta'><VersionBadge type='added' since='2.5.6.0'/></div></td>
    </tr>
    <tr id='hud_speedometer_x'>
      <td className='name'>hud_speedometer_x</td>
      <td className='def'>-1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'><div className='text'>Позиция спидометра по оси X (-1 для центрирования)</div><div className='desc-meta'><VersionBadge type='added' since='2.5.6.0'/></div></td>
    </tr>
    <tr id='hud_speedometer_y'>
      <td className='name'>hud_speedometer_y</td>
      <td className='def'>-1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'><div className='text'>Позиция спидометра по оси Y</div><div className='desc-meta'><VersionBadge type='added' since='2.5.6.0'/></div></td>
    </tr>
  </tbody>
</Table>

## Передвижение
<Table>
  <thead><tr><th>Название</th><th>Стандартное значение</th><th>Мин.</th><th>Макс.</th><th>Описание</th></tr></thead>
  <tbody>
    <tr id='cl_upspeed'>
      <td className='name'>cl_upspeed</td>
      <td className='def'>320</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Скорость передвижения по лестницам вверх</td>
    </tr>
    <tr id='cl_sidespeed'>
      <td className='name'>cl_sidespeed</td>
      <td className='def'>400</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Скорость передвижения боком (стрейф)</td>
    </tr>
    <tr id='cl_backspeed'>
      <td className='name'>cl_backspeed</td>
      <td className='def'>400</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Скорость передвижения назад</td>
    </tr>
    <tr id='cl_pitchspeed'>
      <td className='name'>cl_pitchspeed</td>
      <td className='def'>225</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Скорость изменения угла обзора по вертикали (вверх/вниз) при использовании клавиатуры</td>
    </tr>
    <tr id='cl_anglespeedkey'>
      <td className='name'>cl_anglespeedkey</td>
      <td className='def'>0.67</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Множитель скорости поворота при использовании клавиатуры</td>
    </tr>
    <tr id='cl_forwardspeed'>
      <td className='name'>cl_forwardspeed</td>
      <td className='def'>400</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Скорость передвижения вперед</td>
    </tr>
    <tr id='cl_movespeedkey'>
      <td className='name'>cl_movespeedkey</td>
      <td className='def'>0.52</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Множитель скорости передвижения при медленной ходьбе (walk)</td>
    </tr>
    <tr id='cl_yawspeed'>
      <td className='name'>cl_yawspeed</td>
      <td className='def'>210</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Скорость изменения угла обзора по горизонтали (влево/вправо) при использовании клавиатуры</td>
    </tr>
  </tbody>
</Table>

## Настройки мыши
<Table>
  <thead><tr><th>Название</th><th>Стандартное значение</th><th>Мин.</th><th>Макс.</th><th>Описание</th></tr></thead>
  <tbody>
    <tr id='sensitivity'>
      <td className='name'>sensitivity</td>
      <td className='def'>3</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Устанавливает чувствительность мыши</td>
    </tr>
    <tr id='m_rawinput'>
      <td className='name'>m_rawinput</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Использовать прямой ввод от мыши (в обход настроек ОС)</td>
    </tr>
    <tr id='m_customaccel'>
      <td className='name'>m_customaccel</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Включает пользовательское ускорение мыши</td>
    </tr>
    <tr id='m_customaccel_exponent'>
      <td className='name'>m_customaccel_exponent</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Показатель степени для кривой ускорения мыши</td>
    </tr>
    <tr id='m_customaccel_max'>
      <td className='name'>m_customaccel_max</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Максимальное значение ускорения мыши</td>
    </tr>
    <tr id='m_customaccel_scale'>
      <td className='name'>m_customaccel_scale</td>
      <td className='def'>0.04</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Масштаб ускорения мыши</td>
    </tr>
    <tr id='m_filter'>
      <td className='name'>m_filter</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Включает фильтрацию (сглаживание) движений мыши</td>
    </tr>
    <tr id='m_forward'>
      <td className='name'>m_forward</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Устанавливает множитель чувствительности мыши для движения вперед/назад</td>
    </tr>
    <tr id='m_mousethread_sleep'>
      <td className='name'>m_mousethread_sleep</td>
      <td className='def'>10</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Время 'сна' потока мыши в мс, влияет на частоту опроса</td>
    </tr>
    <tr id='m_noforcemaccel'>
      <td className='name'>m_noforcemaccel</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Использовать настройки ускорения мыши из Windows</td>
    </tr>
    <tr id='m_noforcemparms'>
      <td className='name'>m_noforcemparms</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Использовать параметры кнопок мыши из Windows</td>
    </tr>
    <tr id='m_noforcemspd'>
      <td className='name'>m_noforcemspd</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Использовать настройки скорости мыши из Windows</td>
    </tr>
    <tr id='m_pitch'>
      <td className='name'>m_pitch</td>
      <td className='def'>0.022</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Устанавливает множитель чувствительности мыши для вертикального обзора (вверх/вниз). Отрицательное значение инвертирует ось</td>
    </tr>
    <tr id='m_side'>
      <td className='name'>m_side</td>
      <td className='def'>0.8</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Устанавливает множитель чувствительности мыши для стрейфа</td>
    </tr>
    <tr id='m_yaw'>
      <td className='name'>m_yaw</td>
      <td className='def'>0.022</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Устанавливает множитель чувствительности мыши для горизонтального обзора (влево/вправо)</td>
    </tr>
    <tr id='zoom_sensitivity_ratio'>
      <td className='name'>zoom_sensitivity_ratio</td>
      <td className='def'>1.2</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Множитель чувствительности мыши при использовании приближения (зума), например, в снайперских винтовках</td>
    </tr>
    <tr id='cl_mousegrab'>
      <td className='name'>cl_mousegrab</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Захватывать курсор мыши в окне игры</td>
    </tr>
    <tr id='cl_idealpitchscale'>
      <td className='name'>cl_idealpitchscale</td>
      <td className='def'>0.8</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>-</td>
    </tr>
    <tr id='v_centermove'>
      <td className='name'>v_centermove</td>
      <td className='def'>0.15</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Скорость, с которой вид возвращается в центр после остановки движения</td>
    </tr>
    <tr id='v_centerspeed'>
      <td className='name'>v_centerspeed</td>
      <td className='def'>500</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>-</td>
    </tr>
    <tr id='edgefriction'>
      <td className='name'>edgefriction</td>
      <td className='def'>2</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Трение на краях объектов, влияет на скольжение</td>
    </tr>
    <tr id='lookspring'>
      <td className='name'>lookspring</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Включает автоматическое центрирование вида</td>
    </tr>
    <tr id='lookstrafe'>
      <td className='name'>lookstrafe</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Включает автоматический стрейф при движении мыши влево/вправо</td>
    </tr>
    <tr id='joyadvanced'>
      <td className='name'>joyadvanced</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Включает расширенные настройки джойстика</td>
    </tr>
    <tr id='joyadvaxisr'>
      <td className='name'>joyadvaxisr</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Настройки оси R для джойстика</td>
    </tr>
    <tr id='joyadvaxisu'>
      <td className='name'>joyadvaxisu</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Настройки оси U для джойстика</td>
    </tr>
    <tr id='joyadvaxisv'>
      <td className='name'>joyadvaxisv</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Настройки оси V для джойстика</td>
    </tr>
    <tr id='joyadvaxisx'>
      <td className='name'>joyadvaxisx</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Настройки оси X для джойстика</td>
    </tr>
    <tr id='joyadvaxisy'>
      <td className='name'>joyadvaxisy</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Настройки оси Y для джойстика</td>
    </tr>
    <tr id='joyadvaxisz'>
      <td className='name'>joyadvaxisz</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Настройки оси Z для джойстика</td>
    </tr>
    <tr id='joyforwardsensitivity'>
      <td className='name'>joyforwardsensitivity</td>
      <td className='def'>-1.0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Чувствительность джойстика для движения вперед</td>
    </tr>
    <tr id='joyforwardthreshold'>
      <td className='name'>joyforwardthreshold</td>
      <td className='def'>0.15</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Порог срабатывания (мертвая зона) джойстика для движения вперед</td>
    </tr>
    <tr id='joyname'>
      <td className='name'>joyname</td>
      <td className='def'>joystick</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Название джойстика</td>
    </tr>
    <tr id='joypitchsensitivity'>
      <td className='name'>joypitchsensitivity</td>
      <td className='def'>1.0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Чувствительность джойстика для вертикального обзора</td>
    </tr>
    <tr id='joypitchthreshold'>
      <td className='name'>joypitchthreshold</td>
      <td className='def'>0.15</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Порог срабатывания джойстика для вертикального обзора</td>
    </tr>
    <tr id='joysidesensitivity'>
      <td className='name'>joysidesensitivity</td>
      <td className='def'>-1.0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Чувствительность джойстика для стрейфа</td>
    </tr>
    <tr id='joysidethreshold'>
      <td className='name'>joysidethreshold</td>
      <td className='def'>0.15</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Порог срабатывания джойстика для стрейфа</td>
    </tr>
    <tr id='joystick'>
      <td className='name'>joystick</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Включает поддержку джойстика</td>
    </tr>
    <tr id='joywwhack1'>
      <td className='name'>joywwhack1</td>
      <td className='def'>0.0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>-</td>
    </tr>
    <tr id='joywwhack2'>
      <td className='name'>joywwhack2</td>
      <td className='def'>0.0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>-</td>
    </tr>
    <tr id='joyyawsensitivity'>
      <td className='name'>joyyawsensitivity</td>
      <td className='def'>-1.0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Чувствительность джойстика для горизонтального обзора</td>
    </tr>
    <tr id='joyyawthreshold'>
      <td className='name'>joyyawthreshold</td>
      <td className='def'>0.15</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Порог срабатывания джойстика для горизонтального обзора</td>
    </tr>
  </tbody>
</Table>

## Камера
<Table>
  <thead><tr><th>Название</th><th>Стандартное значение</th><th>Мин.</th><th>Макс.</th><th>Описание</th></tr></thead>
  <tbody>
    <tr id='c_maxdistance'>
      <td className='name'>c_maxdistance</td>
      <td className='def'>200.0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Максимальное расстояние до камеры в режиме от третьего лица</td>
    </tr>
    <tr id='c_maxpitch'>
      <td className='name'>c_maxpitch</td>
      <td className='def'>90.0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Максимальный угол наклона камеры по вертикали</td>
    </tr>
    <tr id='c_maxyaw'>
      <td className='name'>c_maxyaw</td>
      <td className='def'>135.0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Максимальный угол поворота камеры по горизонтали</td>
    </tr>
    <tr id='c_mindistance'>
      <td className='name'>c_mindistance</td>
      <td className='def'>30.0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Минимальное расстояние до камеры в режиме от третьего лица</td>
    </tr>
    <tr id='c_minpitch'>
      <td className='name'>c_minpitch</td>
      <td className='def'>0.0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Минимальный угол наклона камеры по вертикали</td>
    </tr>
    <tr id='c_minyaw'>
      <td className='name'>c_minyaw</td>
      <td className='def'>-135.0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Минимальный угол поворота камеры по горизонтали</td>
    </tr>
    <tr id='cam_command'>
      <td className='name'>cam_command</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Включает управление камерой<br/>`0` от первого<br/>`1` от третьего лица</td>
    </tr>
    <tr id='cam_idealdist'>
      <td className='name'>cam_idealdist</td>
      <td className='def'>64</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Идеальное расстояние до камеры</td>
    </tr>
    <tr id='cam_idealpitch'>
      <td className='name'>cam_idealpitch</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Идеальный угол наклона камеры по вертикали</td>
    </tr>
    <tr id='cam_idealyaw'>
      <td className='name'>cam_idealyaw</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Идеальный угол поворота камеры по горизонтали</td>
    </tr>
    <tr id='cam_snapto'>
      <td className='name'>cam_snapto</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Мгновенно перемещает камеру в идеальную позицию</td>
    </tr>
    <tr id='chase_active'>
      <td className='name'>chase_active</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Активирует режим `chase camera` (камера следует за игроком)</td>
    </tr>
    <tr id='chase_back'>
      <td className='name'>chase_back</td>
      <td className='def'>100</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Расстояние от камеры до спины игрока в режиме 'chase camera'</td>
    </tr>
    <tr id='chase_right'>
      <td className='name'>chase_right</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Смещение камеры вправо в режиме 'chase camera'</td>
    </tr>
    <tr id='chase_up'>
      <td className='name'>chase_up</td>
      <td className='def'>16</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Смещение камеры вверх в режиме 'chase camera'</td>
    </tr>
    <tr id='cl_chaseback'>
      <td className='name'>cl_chaseback</td>
      <td className='def'>15</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Расстояние от камеры до спины игрока</td>
    </tr>
    <tr id='cl_chasedist'>
      <td className='name'>cl_chasedist</td>
      <td className='def'>112</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Дистанция следования камеры</td>
    </tr>
    <tr id='cl_chaseright'>
      <td className='name'>cl_chaseright</td>
      <td className='def'>20</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Смещение камеры вправо</td>
    </tr>
    <tr id='cl_chaseup'>
      <td className='name'>cl_chaseup</td>
      <td className='def'>5</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Смещение камеры вверх</td>
    </tr>
    <tr id='cl_camera_follow_bone_index'>
      <td className='name'>cl_camera_follow_bone_index</td>
      <td className='def'>-2</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'><div className='text'>Индекс кости модели для следования камеры<br/>`-2` выключено<br/>`-1` корневая кость<br/>`0+` индекс кости</div><div className='desc-meta'><VersionBadge type='added' since='2.3.8.0'/></div></td>
    </tr>
  </tbody>
</Table>

## Оружие от первого лица
<Table>
  <thead><tr><th>Название</th><th>Стандартное значение</th><th>Мин.</th><th>Макс.</th><th>Описание</th></tr></thead>
  <tbody>
    <tr id='viewsize'>
      <td className='name'>viewsize</td>
      <td className='def'>120</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Устанавливает размер области рендеринга. Устарело, используйте `viewmodel_fov`</td>
    </tr>
    <tr id='viewmodel_fov'>
      <td className='name'>viewmodel_fov</td>
      <td className='def'>90</td>
      <td className='min'>1</td>
      <td className='max'>179</td>
      <td className='desc'><div className='text'>Поле зрения (FOV) для модели оружия в руках</div><div className='desc-meta'><VersionBadge type='added' since='2.3.8.0'/></div></td>
    </tr>
    <tr id='viewmodel_lag_scale'>
      <td className='name'>viewmodel_lag_scale</td>
      <td className='def'>0</td>
      <td className='min'>0</td>
      <td className='max'>100</td>
      <td className='desc'><div className='text'>Устанавливает масштаб раскачивания модели оружия</div><div className='desc-meta'><VersionBadge type='added' since='2.3.8.0'/></div></td>
    </tr>
    <tr id='viewmodel_lag_scale_crouch'>
      <td className='name'>viewmodel_lag_scale_crouch</td>
      <td className='def'>0</td>
      <td className='min'>0</td>
      <td className='max'>10</td>
      <td className='desc'><div className='text'>Устанавливает масштаб раскачивания модели оружия в приседе</div><div className='desc-meta'><VersionBadge type='added' since='2.5.6.0'/></div></td>
    </tr>
    <tr id='viewmodel_lag_scale_jump'>
      <td className='name'>viewmodel_lag_scale_jump</td>
      <td className='def'>0</td>
      <td className='min'>0</td>
      <td className='max'>5</td>
      <td className='desc'><div className='text'>Устанавливает масштаб раскачивания модели оружия в прыжке</div><div className='desc-meta'><VersionBadge type='added' since='2.5.6.0'/></div></td>
    </tr>
    <tr id='viewmodel_lag_scale_land'>
      <td className='name'>viewmodel_lag_scale_land</td>
      <td className='def'>0</td>
      <td className='min'>0</td>
      <td className='max'>10</td>
      <td className='desc'><div className='text'>Устанавливает масштаб раскачивания модели оружия при приземлении</div><div className='desc-meta'><VersionBadge type='added' since='2.5.6.0'/></div></td>
    </tr>
    <tr id='viewmodel_lag_speed'>
      <td className='name'>viewmodel_lag_speed</td>
      <td className='def'>8</td>
      <td className='min'>0</td>
      <td className='max'>100</td>
      <td className='desc'><div className='text'>Устанавливает скорость раскачивания модели оружия</div><div className='desc-meta'><VersionBadge type='added' since='2.3.8.0'/></div></td>
    </tr>
    <tr id='viewmodel_offset_x'>
      <td className='name'>viewmodel_offset_x</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'><div className='text'>Смещение модели оружия по оси X (вправо/влево)</div><div className='desc-meta'><VersionBadge type='added' since='2.5.6.0'/></div></td>
    </tr>
    <tr id='viewmodel_offset_y'>
      <td className='name'>viewmodel_offset_y</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'><div className='text'>Смещение модели оружия по оси Y (вперед/назад)</div><div className='desc-meta'><VersionBadge type='added' since='2.3.8.0'/></div></td>
    </tr>
    <tr id='viewmodel_offset_z'>
      <td className='name'>viewmodel_offset_z</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'><div className='text'>Смещение модели оружия по оси Z (вверх/вниз)</div><div className='desc-meta'><VersionBadge type='added' since='2.3.8.0'/></div></td>
    </tr>
    <tr id='viewmodel_retract'>
      <td className='name'>viewmodel_retract</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'><div className='text'>Включает 'убирание' модели оружия при приближении к препятствиям</div><div className='desc-meta'><VersionBadge type='added' since='2.5.6.0'/></div></td>
    </tr>
    <tr id='viewmodel_rollangle'>
      <td className='name'>viewmodel_rollangle</td>
      <td className='def'>0</td>
      <td className='min'>0</td>
      <td className='max'>20</td>
      <td className='desc'><div className='text'>Масштаб угла наклона модели оружия при стрейфе</div><div className='desc-meta'><VersionBadge type='added' since='2.5.6.0'/></div></td>
    </tr>
    <tr id='viewmodel_shift'>
      <td className='name'>viewmodel_shift</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'><div className='text'>Управляет смещением модели оружия при взгляде вверх/вниз<br/>`0` выкл<br/>`1` вкл. (по умолчанию)<br/>`2` автонастройка</div><div className='desc-meta'><VersionBadge type='added' since='2.3.8.0'/></div></td>
    </tr>
    <tr id='viewmodel_shift_left_amt'>
      <td className='name'>viewmodel_shift_left_amt</td>
      <td className='def'>1.5</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'><div className='text'>Величина смещения модели оружия влево при увеличении точности стрельбы</div><div className='desc-meta'><VersionBadge type='added' since='2.3.8.0'/></div></td>
    </tr>
    <tr id='viewmodel_shift_right_amt'>
      <td className='name'>viewmodel_shift_right_amt</td>
      <td className='def'>0.75</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'><div className='text'>Величина смещения модели оружия вправо при уменьшении точности стрельбы</div><div className='desc-meta'><VersionBadge type='added' since='2.3.8.0'/></div></td>
    </tr>
    <tr id='scr_ofsx'>
      <td className='name'>scr_ofsx</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Устаревшая версия `viewmodel_offset_x`</td>
    </tr>
    <tr id='scr_ofsy'>
      <td className='name'>scr_ofsy</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Устаревшая версия `viewmodel_offset_y`</td>
    </tr>
    <tr id='scr_ofsz'>
      <td className='name'>scr_ofsz</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Устаревшая версия `viewmodel_offset_z`</td>
    </tr>
    <tr id='camera_movement_bone'>
      <td className='name'>camera_movement_bone</td>
      <td className='def'>-1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'><div className='text'>Устанавливает определенную кость модели оружия в качестве камеры вида</div><div className='desc-meta'><VersionBadge type='added' since='2.5.6.0'/></div></td>
    </tr>
    <tr id='camera_movement_interp'>
      <td className='name'>camera_movement_interp</td>
      <td className='def'>0.1</td>
      <td className='min'>0.1</td>
      <td className='max'>-</td>
      <td className='desc'><div className='text'>Сглаживает движение камеры при смене оружия. `0` = выключено</div><div className='desc-meta'><VersionBadge type='added' since='2.3.8.0'/></div></td>
    </tr>
    <tr id='camera_movement_scale'>
      <td className='name'>camera_movement_scale</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'><div className='text'>Масштаб движения камеры. `0` = выключено</div><div className='desc-meta'><VersionBadge type='added' since='2.3.8.0'/></div></td>
    </tr>
    <tr id='cl_bob'>
      <td className='name'>cl_bob</td>
      <td className='def'>0.01</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Общий множитель для анимации раскачивания оружия при ходьбе</td>
    </tr>
    <tr id='cl_bob_lower_amt'>
      <td className='name'>cl_bob_lower_amt</td>
      <td className='def'>6</td>
      <td className='min'>0</td>
      <td className='max'>30</td>
      <td className='desc'><div className='text'>Насколько сильно модель оружия опускается при беге</div><div className='desc-meta'><VersionBadge type='added' since='2.3.8.0'/></div></td>
    </tr>
    <tr id='cl_bob_sniper'>
      <td className='name'>cl_bob_sniper</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'><div className='text'>Включает раскачивание для снайперских винтовок</div><div className='desc-meta'><VersionBadge type='added' since='2.2.1.0'/></div></td>
    </tr>
    <tr id='cl_bobamt_lat'>
      <td className='name'>cl_bobamt_lat</td>
      <td className='def'>0.4</td>
      <td className='min'>0</td>
      <td className='max'>2</td>
      <td className='desc'><div className='text'>Амплитуда раскачивания модели оружия из стороны в сторону при беге</div><div className='desc-meta'><VersionBadge type='added' since='2.3.8.0'/></div></td>
    </tr>
    <tr id='cl_bobamt_vert'>
      <td className='name'>cl_bobamt_vert</td>
      <td className='def'>0.15</td>
      <td className='min'>0</td>
      <td className='max'>2</td>
      <td className='desc'><div className='text'>Амплитуда раскачивания модели оружия вверх-вниз при беге</div><div className='desc-meta'><VersionBadge type='added' since='2.3.8.0'/></div></td>
    </tr>
    <tr id='cl_bobcycle'>
      <td className='name'>cl_bobcycle</td>
      <td className='def'>0.8</td>
      <td className='min'>0.1</td>
      <td className='max'>2</td>
      <td className='desc'>Частота раскачивания модели оружия при беге</td>
    </tr>
    <tr id='cl_bobstyle'>
      <td className='name'>cl_bobstyle</td>
      <td className='def'>0</td>
      <td className='min'>0</td>
      <td className='max'>3</td>
      <td className='desc'><div className='text'>Устанавливает стиль раскачивания оружия<br/>`0` Классический CS 1.6<br/>`1` Наследие Quakeworld<br/>`2` Улучшенный (как в CSGO)</div><div className='desc-meta'><VersionBadge type='added' since='2.5.6.0'/></div></td>
    </tr>
    <tr id='cl_bobup'>
      <td className='name'>cl_bobup</td>
      <td className='def'>0.5</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Управляет тем, как долго модель оружия остается в 'верхней' точке при раскачивании</td>
    </tr>
    <tr id='cl_vsmoothing'>
      <td className='name'>cl_vsmoothing</td>
      <td className='def'>0.05</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Сглаживание вида по вертикали</td>
    </tr>
    <tr id='cl_minviewmodel'>
      <td className='name'>cl_minviewmodel</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'><div className='text'>Использовать стандартную модель оружия (v_model) для всех видов оружия</div><div className='desc-meta'><VersionBadge type='added' since='2.5.0.0'/></div></td>
    </tr>
    <tr id='cl_righthand'>
      <td className='name'>cl_righthand</td>
      <td className='def'>1</td>
      <td className='min'>-1</td>
      <td className='max'>1</td>
      <td className='desc'>Использовать праворукую модель оружия (`1`) или леворукую (`0`)</td>
    </tr>
    <tr id='cl_shieldweapon_handpreference'>
      <td className='name'>cl_shieldweapon_handpreference</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'><div className='text'>Использовать сторону руки, определенную `cl_righthand`, для модели оружия со щитом</div><div className='desc-meta'><VersionBadge type='added' since='2.5.0.0'/></div></td>
    </tr>
    <tr>
      <td colSpan='5' className='name'><a href='#r_drawviewmodel'>r_drawviewmodel</a></td>
    </tr>
  </tbody>
</Table>

## Визуальные эффекты
<Table>
  <thead><tr><th>Название</th><th>Стандартное значение</th><th>Мин.</th><th>Макс.</th><th>Описание</th></tr></thead>
  <tbody>
    <tr id='cl_weather'>
      <td className='name'>cl_weather</td>
      <td className='def'>1</td>
      <td className='min'>0</td>
      <td className='max'>3</td>
      <td className='desc'>Включает погодные эффекты (дождь, снег)<br/>`0` Выключено<br/>`1` Низкая интенсивность<br/>`2` Средняя интенсивность<br/>`3` Высокая интенсивность</td>
    </tr>
    <tr id='cl_smokegren_color'>
      <td className='name'>cl_smokegren_color</td>
      <td className='def color'><div style={{background: `rgba(175,175,175,0.85)`, color:`var(--ifm-font-color-base)`}}>175 175 175</div></td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'><div className='text'>Цвет дыма от дымовой гранаты</div><div className='desc-meta'><VersionBadge type='added' since='2.3.4.0'/></div></td>
    </tr>
    <tr id='cl_smokegren_debug'>
      <td className='name'>cl_smokegren_debug</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'><div className='text'>Включает отладочную визуализацию дымовой гранаты<br/>`0` выкл<br/>`1` Визуализация радиуса облаков дыма<br/>`2` Визуализация частиц дыма<br/>`3` Визуализация ближайшей позиции линии, блокируемой дымом</div><div className='desc-meta'><VersionBadge type='added' since='2.3.4.0'/></div></td>
    </tr>
    <tr id='cl_smokegren_full_density'>
      <td className='name'>cl_smokegren_full_density</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'><div className='text'>Включает полную плотность дыма от дымовых гранат</div><div className='desc-meta'><VersionBadge type='added' since='2.3.4.0'/></div></td>
    </tr>
    <tr id='cl_corpsefall'>
      <td className='name'>cl_corpsefall</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'><div className='text'>Включает плавное падение трупов под землю по истечении времени `cl_corpsestay`, иначе трупы плавно исчезают</div><div className='desc-meta'><VersionBadge type='added' since='2.5.6.0'/></div></td>
    </tr>
    <tr id='cl_corpsestay'>
      <td className='name'>cl_corpsestay</td>
      <td className='def'>600</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Время в секундах, по истечении которого трупы исчезают<br/>`0` мгновенное исчезновение</td>
    </tr>
    <tr id='violence_ablood'>
      <td className='name'>violence_ablood</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Отображать кровь монстров (для модов Half-Life)</td>
    </tr>
    <tr id='violence_agibs'>
      <td className='name'>violence_agibs</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Показывать ошмётки монстров (для модов Half-Life)</td>
    </tr>
    <tr id='violence_hblood'>
      <td className='name'>violence_hblood</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Отображать кровь игроков</td>
    </tr>
    <tr id='violence_hgibs'>
      <td className='name'>violence_hgibs</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Показывать ошмётки игроков</td>
    </tr>
    <tr id='violence_vfxblood'>
      <td className='name'>violence_vfxblood</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'><div className='text'>Включает расширенные визуальные эффекты крови</div><div className='desc-meta'><VersionBadge type='added' since='2.3.7.0'/></div></td>
    </tr>
    <tr id='violence_vfxblood_bigdrops'>
      <td className='name'>violence_vfxblood_bigdrops</td>
      <td className='def'>3</td>
      <td className='min'>0</td>
      <td className='max'>-</td>
      <td className='desc'><div className='text'>Количество больших капель крови (только от взрывов или выстрелов в голову)</div><div className='desc-meta'><VersionBadge type='added' since='2.3.7.0'/></div></td>
    </tr>
    <tr id='violence_vfxblood_burst_ratio'>
      <td className='name'>violence_vfxblood_burst_ratio</td>
      <td className='def'>4</td>
      <td className='min'>0</td>
      <td className='max'>-</td>
      <td className='desc'><div className='text'>Множитель количества крови при взрыве тела (умножает эффекты брызг, капель и т.д.)</div><div className='desc-meta'><VersionBadge type='added' since='2.3.7.0'/></div></td>
    </tr>
    <tr id='violence_vfxblood_color'>
      <td className='name'>violence_vfxblood_color</td>
      <td className='def color'><div style={{background: `rgba(145,15,15,0.85)`, color:`#eee`}}>145 15 15</div></td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'><div className='text'>Устанавливает цвет для расширенных эффектов крови</div><div className='desc-meta'><VersionBadge type='added' since='2.3.7.0'/></div></td>
    </tr>
    <tr id='violence_vfxblood_decal_lightness'>
      <td className='name'>violence_vfxblood_decal_lightness</td>
      <td className='def'>0.35</td>
      <td className='min'>0.1</td>
      <td className='max'>100</td>
      <td className='desc'><div className='text'>Коэффициент яркости для следов крови. (Низкие значения делают кровь темнее)</div><div className='desc-meta'><VersionBadge type='added' since='2.5.0.0'/></div></td>
    </tr>
    <tr id='violence_vfxblood_drops'>
      <td className='name'>violence_vfxblood_drops</td>
      <td className='def'>1.5</td>
      <td className='min'>0</td>
      <td className='max'>-</td>
      <td className='desc'><div className='text'>Количество капель крови</div><div className='desc-meta'><VersionBadge type='added' since='2.3.7.0'/></div></td>
    </tr>
    <tr id='violence_vfxblood_gibs'>
      <td className='name'>violence_vfxblood_gibs</td>
      <td className='def'>7</td>
      <td className='min'>0</td>
      <td className='max'>-</td>
      <td className='desc'><div className='text'>Количество разлетающихся ошмётков (только от взрывов или выстрелов в голову)</div><div className='desc-meta'><VersionBadge type='added' since='2.3.7.0'/></div></td>
    </tr>
    <tr id='violence_vfxblood_grenade'>
      <td className='name'>violence_vfxblood_grenade</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'><div className='text'>Включает взрыв тела при убийстве гранатой или бомбой</div><div className='desc-meta'><VersionBadge type='added' since='2.3.7.0'/></div></td>
    </tr>
    <tr id='violence_vfxblood_headshot'>
      <td className='name'>violence_vfxblood_headshot</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'><div className='text'>Включает взрыв тела при убийстве выстрелом в голову</div><div className='desc-meta'><VersionBadge type='added' since='2.3.7.0'/></div></td>
    </tr>
    <tr id='violence_vfxblood_mist'>
      <td className='name'>violence_vfxblood_mist</td>
      <td className='def'>0.75</td>
      <td className='min'>0</td>
      <td className='max'>-</td>
      <td className='desc'><div className='text'>Количество эффектов кровавого тумана</div><div className='desc-meta'><VersionBadge type='added' since='2.3.7.0'/></div></td>
    </tr>
    <tr id='violence_vfxblood_small'>
      <td className='name'>violence_vfxblood_small</td>
      <td className='def'>3</td>
      <td className='min'>0</td>
      <td className='max'>-</td>
      <td className='desc'><div className='text'>Количество мелких частиц крови (могут оставлять следы на поверхностях)</div><div className='desc-meta'><VersionBadge type='added' since='2.3.7.0'/></div></td>
    </tr>
    <tr id='violence_vfxblood_splat'>
      <td className='name'>violence_vfxblood_splat</td>
      <td className='def'>1.5</td>
      <td className='min'>0</td>
      <td className='max'>-</td>
      <td className='desc'><div className='text'>Количество брызг крови</div><div className='desc-meta'><VersionBadge type='added' since='2.3.7.0'/></div></td>
    </tr>
    <tr id='traceralpha'>
      <td className='name'>traceralpha</td>
      <td className='def'>0.5</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Прозрачность трассирующих пуль</td>
    </tr>
    <tr id='tracerblue'>
      <td className='name'>tracerblue</td>
      <td className='def'>0.4</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Синяя составляющая цвета трассирующих пуль</td>
    </tr>
    <tr id='tracergreen'>
      <td className='name'>tracergreen</td>
      <td className='def'>0.8</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Зеленая составляющая цвета трассирующих пуль</td>
    </tr>
    <tr id='tracerlength'>
      <td className='name'>tracerlength</td>
      <td className='def'>0.8</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Длина трассирующих пуль</td>
    </tr>
    <tr id='traceroffset'>
      <td className='name'>traceroffset</td>
      <td className='def'>30</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Смещение трассирующих пуль</td>
    </tr>
    <tr id='tracerred'>
      <td className='name'>tracerred</td>
      <td className='def'>0.8</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Красная составляющая цвета трассирующих пуль</td>
    </tr>
    <tr id='tracerspeed'>
      <td className='name'>tracerspeed</td>
      <td className='def'>6000</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Скорость трассирующих пуль</td>
    </tr>
    <tr id='cl_gunsmoke'>
      <td className='name'>cl_gunsmoke</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'><div className='text'>Включает отображение дыма из ствола оружия при выстреле</div><div className='desc-meta'><VersionBadge type='added' since='2.5.0.0'/></div></td>
    </tr>
    <tr id='cl_guntracer'>
      <td className='name'>cl_guntracer</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'><div className='text'>Включает отображение трассирующих пуль, вылетающих из ствола оружия</div><div className='desc-meta'><VersionBadge type='added' since='2.5.0.0'/></div></td>
    </tr>
    <tr id='cl_guntracer_color'>
      <td className='name'>cl_guntracer_color</td>
      <td className='def color'><div style={{background: `rgba(255,255,255,0.85)`, color:`#111`}}>255 255 255</div></td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'><div className='text'>Устанавливает цвет трассирующих пуль</div><div className='desc-meta'><VersionBadge type='added' since='2.5.0.0'/></div></td>
    </tr>
    <tr id='cl_guntracer_offset'>
      <td className='name'>cl_guntracer_offset</td>
      <td className='def'>48</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'><div className='text'>Расстояние от ствола, на котором начинают отображаться трассирующие пули</div><div className='desc-meta'><VersionBadge type='added' since='2.5.0.0'/></div></td>
    </tr>
    <tr id='cl_guntracer_speed'>
      <td className='name'>cl_guntracer_speed</td>
      <td className='def'>3650</td>
      <td className='min'>0</td>
      <td className='max'>-</td>
      <td className='desc'><div className='text'>Скорость трассирующих пуль в юнитах</div><div className='desc-meta'><VersionBadge type='added' since='2.5.0.0'/></div></td>
    </tr>
    <tr id='cl_guntracer_speed_maxmul'>
      <td className='name'>cl_guntracer_speed_maxmul</td>
      <td className='def'>1.25</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'><div className='text'>Максимальный множитель скорости трассирующих пуль в зависимости от расстояния</div><div className='desc-meta'><VersionBadge type='added' since='2.5.0.0'/></div></td>
    </tr>
    <tr id='cl_fog_color'>
      <td className='name'>cl_fog_color</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Регулирует цвет тумана</td>
    </tr>
    <tr id='cl_fog_density'>
      <td className='name'>cl_fog_density</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Устанавливает плотность тумана</td>
    </tr>
    <tr id='cl_fog_skybox'>
      <td className='name'>cl_fog_skybox</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'><div className='text'>Включает распространение тумана на скайбокс (небо)</div><div className='desc-meta'><VersionBadge type='added' since='2.3.2.0'/></div></td>
    </tr>
    <tr id='egon_amplitude'>
      <td className='name'>egon_amplitude</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Амплитуда колебаний луча глюонной пушки (Egon gun) в Half-Life</td>
    </tr>
    <tr id='max_shells'>
      <td className='name'>max_shells</td>
      <td className='def'>120</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Максимальное количество одновременно видимых гильз</td>
    </tr>
    <tr id='max_smokepuffs'>
      <td className='name'>max_smokepuffs</td>
      <td className='def'>120</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Максимальное количество одновременно видимых клубов дыма (от гранат, попаданий пуль)</td>
    </tr>
    <tr>
      <td colSpan='5' className='name'><a href='#r_decals'>r_decals</a></td>
    </tr>
  </tbody>
</Table>

## Визуализация
<Table>
  <thead><tr><th>Название</th><th>Стандартное значение</th><th>Мин.</th><th>Макс.</th><th>Описание</th></tr></thead>
  <tbody>
    <tr id='fps_max'>
      <td className='name'>fps_max</td>
      <td className='def'>100</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Ограничитель частоты кадров (FPS)</td>
    </tr>
    <tr id='fps_override'>
      <td className='name'>fps_override</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>При `1` позволяет превысить стандартное ограничение FPS движка</td>
    </tr>
    <tr id='cl_showfps'>
      <td className='name'>cl_showfps</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'><div className='text'>Показывать текущий FPS в углу экрана</div><div className='desc-meta'><VersionBadge type="changed" since='2.5.6.0'/></div></td>
    </tr>
    <tr id='default_fov'>
      <td className='name'>default_fov</td>
      <td className='def'>90</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Поле зрения (Field of View) по умолчанию</td>
    </tr>
    <tr id='widescreen'>
      <td className='name'>widescreen</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'><div className='text'>Включает широкоэкранный режим (поддержка `16:9`, `16:10`)</div><div className='desc-meta'><VersionBadge type='added' since='2.0.0.0'/></div></td>
    </tr>
    <tr id='stretchaspect'>
      <td className='name'>stretchaspect</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'><div className='text'>Растягивает изображение для соответствия пропорциям экрана (убирает черные полосы)</div><div className='desc-meta'><VersionBadge type='added' since='2.0.0.0'/></div></td>
    </tr>
    <tr id='engine_no_focus_sleep'>
      <td className='name'>engine_no_focus_sleep</td>
      <td className='def'>20</td>
      <td className='min'>0</td>
      <td className='max'>-</td>
      <td className='desc'><div className='text'>Время 'сна' (в мс), когда окно игры неактивно<br/>Установите `0`, чтобы движок не 'засыпал', частота кадров не будет просаживаться</div><div className='desc-meta'><VersionBadge type='added' since='2.3.7.0'/></div></td>
    </tr>
    <tr id='engine_no_render_minimized'>
      <td className='name'>engine_no_render_minimized</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'><div className='text'>Не обновлять визуализацию экрана, когда игра свернута (снижает нагрузку на CPU и GPU)</div><div className='desc-meta'><VersionBadge type='added' since='2.3.7.0'/></div></td>
    </tr>
    <tr id='brightness'>
      <td className='name'>brightness</td>
      <td className='def'>1.0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Устанавливает значение яркости</td>
    </tr>
    <tr id='gamma'>
      <td className='name'>gamma</td>
      <td className='def'>2.5</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Устанавливает значение гаммы</td>
    </tr>
    <tr id='texgamma'>
      <td className='name'>texgamma</td>
      <td className='def'>2.0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Устанавливает гамму для текстур</td>
    </tr>
    <tr id='lightgamma'>
      <td className='name'>lightgamma</td>
      <td className='def'>2.5</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Устанавливает гамму для освещения</td>
    </tr>
    <tr id='lambert'>
      <td className='name'>lambert</td>
      <td className='def'>1.5</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Множитель для диффузного освещения моделей</td>
    </tr>
    <tr id='direct'>
      <td className='name'>direct</td>
      <td className='def'>0.9</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>-</td>
    </tr>
    <tr id='v_dark'>
      <td className='name'>v_dark</td>
      <td className='def'>-</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Затемнять ли экран при смерти (в Half-Life)</td>
    </tr>
    <tr id='gl_use_shaders'>
      <td className='name'>gl_use_shaders</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'><div className='text'>Включает использование эффекта 'overbright' (повышенной яркости) с помощью шейдеров</div><div className='desc-meta'><VersionBadge type='added' since='2.5.6.0'/></div></td>
    </tr>
    <tr id='gl_reduce_shader_changes'>
      <td className='name'>gl_reduce_shader_changes</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'><div className='text'>Уменьшает количество переключений шейдеров для повышения производительности</div><div className='desc-meta'><VersionBadge type='added' since='2.5.0.0'/></div></td>
    </tr>
    <tr id='gl_vsync'>
      <td className='name'>gl_vsync</td>
      <td className='def'>1</td>
      <td className='min'>-1</td>
      <td className='max'>1</td>
      <td className='desc'><div className='text'>Синхронизирует частоту кадров с частотой обновления монитора<br/>&nbsp;&nbsp;`0` Выключено<br/>&nbsp;&nbsp;`1` Стандартная V-Sync<br/>`-1` Адаптивная V-Sync</div><div className='desc-meta'><VersionBadge type='changed' since='2.0.0.0'/></div></td>
    </tr>
    <tr id='gl_affinemodels'>
      <td className='name'>gl_affinemodels</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Включает аффинное преобразование моделей, может вызывать искажения</td>
    </tr>
    <tr id='gl_alphamin'>
      <td className='name'>gl_alphamin</td>
      <td className='def'>0.25</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Минимальный уровень альфа-канала для отображения пикселя</td>
    </tr>
    <tr id='gl_ansio'>
      <td className='name'>gl_ansio</td>
      <td className='def'>16</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Уровень анизотропной фильтрации</td>
    </tr>
    <tr id='gl_clear'>
      <td className='name'>gl_clear</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>При `1` очищает буфер цвета, что может помочь с некоторыми артефактами изображения</td>
    </tr>
    <tr id='gl_cull'>
      <td className='name'>gl_cull</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Включает отсечение невидимых полигонов</td>
    </tr>
    <tr id='gl_dither'>
      <td className='name'>gl_dither</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Включает дизеринг (сглаживание цветовых переходов)</td>
    </tr>
    <tr id='gl_envmapsize'>
      <td className='name'>gl_envmapsize</td>
      <td className='def'>256</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Размер карты окружения (envmap)</td>
    </tr>
    <tr id='gl_flashblend'>
      <td className='name'>gl_flashblend</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Включает смешивание при эффекте ослепления</td>
    </tr>
    <tr id='gl_fog'>
      <td className='name'>gl_fog</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Включает эффекты тумана</td>
    </tr>
    <tr id='gl_keeptjunctions'>
      <td className='name'>gl_keeptjunctions</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Сохранять T-образные соединения полигонов, чтобы избежать 'дыр' в геометрии</td>
    </tr>
    <tr id='gl_lightholes'>
      <td className='name'>gl_lightholes</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Включает 'световые дыры'</td>
    </tr>
    <tr id='gl_lowlatency'>
      <td className='name'>gl_lowlatency</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'><div className='text'>Включает режим низкой задержки ввода</div><div className='desc-meta'><VersionBadge type='added' since='2.5.0.0'/></div></td>
    </tr>
    <tr id='gl_lowlatency_debugoutput'>
      <td className='name'>gl_lowlatency_debugoutput</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'><div className='text'>Управляет отладочным выводом для режима низкой задержки</div><div className='desc-meta'><VersionBadge type='added' since='2.5.0.0'/></div></td>
    </tr>
    <tr id='gl_lowlatency_maxslop_ms'>
      <td className='name'>gl_lowlatency_maxslop_ms</td>
      <td className='def'>5</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'><div className='text'>Устанавливает верхний порог допустимой задержки в миллисекундах для режима низкой задержки</div><div className='desc-meta'><VersionBadge type='added' since='2.5.0.0'/></div></td>
    </tr>
    <tr id='gl_lowlatency_minslop_ms'>
      <td className='name'>gl_lowlatency_minslop_ms</td>
      <td className='def'>2</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'><div className='text'>Устанавливает нижний порог допустимой задержки в миллисекундах для режима низкой задержки</div><div className='desc-meta'><VersionBadge type='added' since='2.5.0.0'/></div></td>
    </tr>
    <tr id='gl_max_size'>
      <td className='name'>gl_max_size</td>
      <td className='def'>512</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Максимальный размер текстуры, который может загрузить движок</td>
    </tr>
    <tr id='gl_monolights'>
      <td className='name'>gl_monolights</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Использовать однородное освещение без карт освещения (lightmaps)</td>
    </tr>
    <tr id='gl_msaa'>
      <td className='name'>gl_msaa</td>
      <td className='def'>2</td>
      <td className='min'>0</td>
      <td className='max'>4</td>
      <td className='desc'><div className='text'>Включает уровень мультисемплингового сглаживания `MSAA`<br/>`0` Выключено<br/>`1` 2x MSAA<br/>`2` 4x MSAA<br/>`3` 8x MSAA (рекомендуемый максимум)<br/>`4` 16x MSAA (в основном для тестов)<br/><br/>Более высокие значения усиливают сглаживание, но также могут размывать края и весь экран<br/>`8x` MSAA является практическим пределом — дальнейшее повышение (`16x`) почти не дает визуальных преимуществ, но значительно снижает производительность</div><div className='desc-meta'><VersionBadge type='added' since='2.5.6.0'/></div></td>
    </tr>
    <tr id='gl_overbright'>
      <td className='name'>gl_overbright</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'><div className='text'>Включает режим повышенной яркости, делая светлые участки еще ярче</div><div className='desc-meta'><VersionBadge type='changed' since='2.5.0.0'/></div></td>
    </tr>
    <tr id='gl_palette_tex'>
      <td className='name'>gl_palette_tex</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Использовать палитровые текстуры</td>
    </tr>
    <tr id='gl_picmip'>
      <td className='name'>gl_picmip</td>
      <td className='def'>0</td>
      <td className='min'>0</td>
      <td className='max'>31</td>
      <td className='desc'>Устанавливает уровень детализации текстур (MIP-уровень). Чем выше значение, тем ниже качество текстур</td>
    </tr>
    <tr id='gl_polyoffset'>
      <td className='name'>gl_polyoffset</td>
      <td className='def'>4</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Смещение полигонов для предотвращения 'z-fighting' (мерцания) декалей</td>
    </tr>
    <tr id='gl_round_down'>
      <td className='name'>gl_round_down</td>
      <td className='def'>3</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Управляет округлением размеров текстур. Более низкие значения могут улучшить качество</td>
    </tr>
    <tr id='gl_spriteblend'>
      <td className='name'>gl_spriteblend</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Включает смешивание (прозрачность) для спрайтов</td>
    </tr>
    <tr id='gl_texturemode'>
      <td className='name'>gl_texturemode</td>
      <td className='def'>GL_LINEAR_MIPMAP_LINEAR</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Определяет режим фильтрации текстур<br/>GL_NEAREST<br/>GL_LINEAR<br/>GL_NEAREST_MIPMAP_NEAREST<br/>GL_LINEAR_MIPMAP_NEAREST<br/>GL_NEAREST_MIPMAP_LINEAR<br/>GL_LINEAR_MIPMAP_LINEAR</td>
    </tr>
    <tr id='gl_wateramp'>
      <td className='name'>gl_wateramp</td>
      <td className='def'>0.3</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Амплитуда волн на воде</td>
    </tr>
    <tr id='gl_watersides'>
      <td className='name'>gl_watersides</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Отрисовка боковых сторон воды</td>
    </tr>
    <tr id='gl_wireframe'>
      <td className='name'>gl_wireframe</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Включает каркасный режим отображения геометрии</td>
    </tr>
    <tr id='gl_zmax'>
      <td className='name'>gl_zmax</td>
      <td className='def'>4096</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Максимальное значение Z-буфера (глубины), влияет на дальность прорисовки</td>
    </tr>
    <tr id='r_bmodelinterp'>
      <td className='name'>r_bmodelinterp</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Включает интерполяцию для движущихся bmodel-объектов (двери, платформы)</td>
    </tr>
    <tr id='r_cachestudio'>
      <td className='name'>r_cachestudio</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Кэшировать studio-модели</td>
    </tr>
    <tr id='r_cullsequencebox'>
      <td className='name'>r_cullsequencebox</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Использовать точный bounding box для отсечения анимаций</td>
    </tr>
    <tr id='r_decals'>
      <td className='name'>r_decals</td>
      <td className='def'>4096</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Максимальное количество одновременно видимых декалей (следы от пуль, кровь, спреи)</td>
    </tr>
    <tr id='r_detailtextures'>
      <td className='name'>r_detailtextures</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Включает детальные текстуры (если поддерживаются картой)</td>
    </tr>
    <tr id='r_drawentities'>
      <td className='name'>r_drawentities</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Отображать игровые объекты (игроки, оружие и т.д.)</td>
    </tr>
    <tr id='r_drawviewmodel'>
      <td className='name'>r_drawviewmodel</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Отображать модель оружия в руках</td>
    </tr>
    <tr id='r_dynamic'>
      <td className='name'>r_dynamic</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Включает динамическое освещение (например, от выстрелов, фонарика)</td>
    </tr>
    <tr id='r_fullbright'>
      <td className='name'>r_fullbright</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Включает максимальную яркость, игнорируя карты освещения</td>
    </tr>
    <tr id='r_glowshellfreq'>
      <td className='name'>r_glowshellfreq</td>
      <td className='def'>2.2</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Частота свечения оболочки для некоторых объектов</td>
    </tr>
    <tr id='r_lightmap'>
      <td className='name'>r_lightmap</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Режим отладки для просмотра карт освещения (lightmaps)</td>
    </tr>
    <tr id='r_lockcull'>
      <td className='name'>r_lockcull</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'><div className='text'>Заморозить отсечение невидимых объектов в текущей точке (для отладки)</div><div className='desc-meta'><VersionBadge type='added' since='2.3.3.0'/></div></td>
    </tr>
    <tr id='r_lockpvs'>
      <td className='name'>r_lockpvs</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'><div className='text'>Заморозить PVS (Potentially Visible Set), чтобы можно было летать по карте и смотреть, что отрисовывается (для отладки)</div><div className='desc-meta'><VersionBadge type='added' since='2.3.3.0'/></div></td>
    </tr>
    <tr id='r_maxbeams'>
      <td className='name'>r_maxbeams</td>
      <td className='def'>128</td>
      <td className='min'>0</td>
      <td className='max'>4096</td>
      <td className='desc'><div className='text'>Максимальное количество видимых лучей (beams)</div><div className='desc-meta'><VersionBadge type='added' since='2.3.8.0'/></div></td>
    </tr>
    <tr id='r_mirroralpha'>
      <td className='name'>r_mirroralpha</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Включает прозрачность для зеркальных поверхностей</td>
    </tr>
    <tr id='r_mmx'>
      <td className='name'>r_mmx</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Использовать инструкции MMX для ускорения рендеринга</td>
    </tr>
    <tr id='r_norefresh'>
      <td className='name'>r_norefresh</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Отключает обновление экрана (для отладки)</td>
    </tr>
    <tr id='r_novis'>
      <td className='name'>r_novis</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Отключает обработку VIS-данных, отрисовывая всю карту</td>
    </tr>
    <tr id='r_prefertexturefiltering'>
      <td className='name'>r_prefertexturefiltering</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'><div className='text'>Включает фильтрацию текстур</div><div className='desc-meta'><VersionBadge type='added' since='2.5.6.0'/></div></td>
    </tr>
    <tr id='r_shadows'>
      <td className='name'>r_shadows</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Включает динамические тени от объектов (устаревшая функция). Используйте `cl_shadows` для теней игроков</td>
    </tr>
    <tr id='r_showinfo'>
      <td className='name'>r_showinfo</td>
      <td className='def'>0</td>
      <td className='min'>0</td>
      <td className='max'>2</td>
      <td className='desc'><div className='text'>Показывать информацию о рендеринге/движении</div><div className='desc-meta'><VersionBadge type='added' since='2.5.6.0'/></div></td>
    </tr>
    <tr id='r_showparticles'>
      <td className='name'>r_showparticles</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'><div className='text'>Показывать статистику использования частиц и лучей</div><div className='desc-meta'><VersionBadge type='added' since='2.3.8.0'/></div></td>
    </tr>
    <tr id='r_speeds'>
      <td className='name'>r_speeds</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Отображает информацию о производительности рендеринга (wpoly, epoly, fps)</td>
    </tr>
    <tr id='r_traceglow'>
      <td className='name'>r_traceglow</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Отладочная трассировка для эффектов свечения</td>
    </tr>
    <tr id='r_wadtextures'>
      <td className='name'>r_wadtextures</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Использовать текстуры из WAD-файлов, а не встроенные в BSP</td>
    </tr>
    <tr id='r_wateralpha'>
      <td className='name'>r_wateralpha</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Включает прозрачность для воды</td>
    </tr>
    <tr id='cl_himodels'>
      <td className='name'>cl_himodels</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Включает модели высокого качества (HD). В CS не используется, актуально для Half-Life</td>
    </tr>
    <tr id='cl_min_ct'>
      <td className='name'>cl_min_ct</td>
      <td className='def'>2</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Управляет моделью CT, которая будет использоваться при `cl_minmodels 1`<br/>`2` GIGN<br/>`4` GSG9<br/>`7` SAS<br/>`9` SEAL Team 6 (Urban)</td>
    </tr>
    <tr id='cl_min_t'>
      <td className='name'>cl_min_t</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Управляет моделью T, которая будет использоваться при `cl_minmodels 1`<br/>`1` Phoenix Connexion (Leet)<br/>`5` Guerilla<br/>`6` Arctic<br/>`8` Midwest Militia (Terror)</td>
    </tr>
    <tr id='cl_minmodels'>
      <td className='name'>cl_minmodels</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'><div className='text'>Использовать одну модель игрока для каждой команды, чтобы упростить распознавание<br/>`1` Включено<br/>`0` Использовать все модели</div><div className='desc-meta'><VersionBadge type='changed' since='2.2.1.0'/></div></td>
    </tr>
    <tr id='cl_shadows'>
      <td className='name'>cl_shadows</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Включает тени игроков (простой черный круг под моделью)</td>
    </tr>
    <tr id='cl_waterdist'>
      <td className='name'>cl_waterdist</td>
      <td className='def'>4</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Дальность прорисовки эффектов на воде</td>
    </tr>
    <tr id='fastsprites'>
      <td className='name'>fastsprites</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Устанавливает качество спрайтов дыма<br/>`0` высокое качество<br/>`1` среднее качество<br/>`2` низкое качество<br/>Более низкое качество повышает производительность</td>
    </tr>
  </tbody>
</Table>

## Звук/Голос
<Table>
  <thead><tr><th>Название</th><th>Стандартное значение</th><th>Мин.</th><th>Макс.</th><th>Описание</th></tr></thead>
  <tbody>
    <tr id='volume'>
      <td className='name'>volume</td>
      <td className='def'>0.7</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Общая громкость игры</td>
    </tr>
    <tr id='voice_autogain'>
      <td className='name'>voice_autogain</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Автоматическая регулировка усиления голоса</td>
    </tr>
    <tr id='voice_avggain'>
      <td className='name'>voice_avggain</td>
      <td className='def'>0.5</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Среднее усиление голоса</td>
    </tr>
    <tr id='voice_clientdebug'>
      <td className='name'>voice_clientdebug</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Включает отладочную информацию для голосового чата</td>
    </tr>
    <tr id='voice_dsound'>
      <td className='name'>voice_dsound</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Использовать DirectSound для голоса</td>
    </tr>
    <tr id='voice_enable'>
      <td className='name'>voice_enable</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Включить/выключить голосовой чат (прием и передачу)</td>
    </tr>
    <tr id='voice_fadeouttime'>
      <td className='name'>voice_fadeouttime</td>
      <td className='def'>0.1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Время затухания голоса</td>
    </tr>
    <tr id='voice_fakeloss'>
      <td className='name'>voice_fakeloss</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Симулировать потерю пакетов для голосового чата</td>
    </tr>
    <tr id='voice_forcemicrecord'>
      <td className='name'>voice_forcemicrecord</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Принудительно использовать запись с микрофона</td>
    </tr>
    <tr id='voice_inputfromfile'>
      <td className='name'>voice_inputfromfile</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Считывать голосовые данные из файла вместо микрофона</td>
    </tr>
    <tr id='voice_loopback'>
      <td className='name'>voice_loopback</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Включает режим 'прослушки' собственного микрофона</td>
    </tr>
    <tr id='voice_maxgain'>
      <td className='name'>voice_maxgain</td>
      <td className='def'>5</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Максимальное усиление голоса</td>
    </tr>
    <tr id='voice_minabs'>
      <td className='name'>voice_minabs</td>
      <td className='def'>0.15</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>-</td>
    </tr>
    <tr id='voice_minavg'>
      <td className='name'>voice_minavg</td>
      <td className='def'>1.0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>-</td>
    </tr>
    <tr id='voice_modenable'>
      <td className='name'>voice_modenable</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Включает голосовой чат в текущем моде</td>
    </tr>
    <tr id='voice_outputdevice'>
      <td className='name'>voice_outputdevice</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'><div className='text'>Выбор звукового API<br/>`0` Miles<br/>`1` XAudio2</div><div className='desc-meta'><VersionBadge type='added' since='2.0.0.0'/></div></td>
    </tr>
    <tr id='voice_outputfile'>
      <td className='name'>voice_outputfile</td>
      <td className='def'>-</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Записывать вывод голосовой системы в указанный файл</td>
    </tr>
    <tr id='voice_overdrive'>
      <td className='name'>voice_overdrive</td>
      <td className='def'>2</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Во сколько раз уменьшается громкость других звуков, когда кто-то говорит в голосовой чат</td>
    </tr>
    <tr id='voice_overdrivefadetime'>
      <td className='name'>voice_overdrivefadetime</td>
      <td className='def'>0.4</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Время затухания других звуков при активации `voice_overdrive`</td>
    </tr>
    <tr id='voice_preprocess'>
      <td className='name'>voice_preprocess</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'><div className='text'>Включает предобработку (очистку) входящих данных с микрофона</div><div className='desc-meta'><VersionBadge type='added' since='2.0.0.0'/></div></td>
    </tr>
    <tr id='voice_profile'>
      <td className='name'>voice_profile</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Профилирование голосовой системы</td>
    </tr>
    <tr id='voice_quality'>
      <td className='name'>voice_quality</td>
      <td className='def'>6</td>
      <td className='min'>2</td>
      <td className='max'>6</td>
      <td className='desc'><div className='text'>Устанавливает качество аудиокодека<br/>`2` Speex<br/>`3` Raw<br/>`4` Silk<br/>`5` Opus<br/>`6` Opus PLC</div><div className='desc-meta'><VersionBadge type='added' since='2.0.0.0'/></div></td>
    </tr>
    <tr id='voice_recordtofile'>
      <td className='name'>voice_recordtofile</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Записывать данные с микрофона в файл</td>
    </tr>
    <tr id='voice_scale'>
      <td className='name'>voice_scale</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Общая громкость голосового чата</td>
    </tr>
    <tr id='voice_showchannels'>
      <td className='name'>voice_showchannels</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Показывать каналы голосовой связи</td>
    </tr>
    <tr id='voice_showincoming'>
      <td className='name'>voice_showincoming</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Показывать входящие голосовые данные</td>
    </tr>
    <tr id='mic_autogain'>
      <td className='name'>mic_autogain</td>
      <td className='def'>16000</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'><div className='text'>Уровень автоматической регулировки усиления для микрофона</div><div className='desc-meta'><VersionBadge type='added' since='2.0.0.0'/></div></td>
    </tr>
    <tr id='mic_inputfile'>
      <td className='name'>mic_inputfile</td>
      <td className='def'>-</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'><div className='text'>Считывать данные из указанного файла вместо микрофона</div><div className='desc-meta'><VersionBadge type='added' since='2.0.0.0'/></div></td>
    </tr>
    <tr id='mic_outputfile'>
      <td className='name'>mic_outputfile</td>
      <td className='def'>-</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'><div className='text'>Записывать данные с микрофона в указанный файл</div><div className='desc-meta'><VersionBadge type='added' since='2.0.0.0'/></div></td>
    </tr>
    <tr id='room_delay'>
      <td className='name'>room_delay</td>
      <td className='def'>0.0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Задержка для эффекта реверберации</td>
    </tr>
    <tr id='room_dlylp'>
      <td className='name'>room_dlylp</td>
      <td className='def'>2</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>-</td>
    </tr>
    <tr id='room_feedback'>
      <td className='name'>room_feedback</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Обратная связь для эффекта реверберации</td>
    </tr>
    <tr id='room_left'>
      <td className='name'>room_left</td>
      <td className='def'>0.0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>-</td>
    </tr>
    <tr id='room_lp'>
      <td className='name'>room_lp</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>-</td>
    </tr>
    <tr id='room_mod'>
      <td className='name'>room_mod</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>-</td>
    </tr>
    <tr id='room_off'>
      <td className='name'>room_off</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Отключает эффекты реверберации</td>
    </tr>
    <tr id='room_refl'>
      <td className='name'>room_refl</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Уровень отражений для эффекта реверберации</td>
    </tr>
    <tr id='room_rvblp'>
      <td className='name'>room_rvblp</td>
      <td className='def'>1.0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>-</td>
    </tr>
    <tr id='room_size'>
      <td className='name'>room_size</td>
      <td className='def'>0.0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Размер 'комнаты' для эффекта реверберации</td>
    </tr>
    <tr id='room_type'>
      <td className='name'>room_type</td>
      <td className='def'>0</td>
      <td className='min'>0</td>
      <td className='max'>29</td>
      <td className='desc'>Тип реверберации для обычного пространства (не под водой)<br/>Cуществует всего 10 базовых настроек ревербераций такие как<br/>`1` generic<br/>`2-4` metalic<br/>`5-7` tunnel<br/>`8-10` chamber<br/>`11-13` brite<br/>`14-16` water<br/>`17-19` concrete<br/>`20-22` outside<br/>`23-25` weird<br/>`26-29` weirdo</td>
    </tr>
    <tr id='ambient_fade'>
      <td className='name'>ambient_fade</td>
      <td className='def'>100</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Расстояние, на котором затухают фоновые звуки</td>
    </tr>
    <tr id='ambient_level'>
      <td className='name'>ambient_level</td>
      <td className='def'>0.3</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Громкость фоновых звуков</td>
    </tr>
    <tr id='nosound'>
      <td className='name'>nosound</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Полностью отключает звук</td>
    </tr>
    <tr id='suitvolume'>
      <td className='name'>suitvolume</td>
      <td className='def'>0.25</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Громкость звуков HEV-костюма (в Half-Life)</td>
    </tr>
    <tr id='bgmvolume'>
      <td className='name'>bgmvolume</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Включает/выключает фоновую музыку (CD-аудио)</td>
    </tr>
    <tr id='hisound'>
      <td className='name'>hisound</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Включает звук высокого качества (`1` = 22кГц) или низкого (`0` = 11кГц)</td>
    </tr>
    <tr id='waterroom_type'>
      <td className='name'>waterroom_type</td>
      <td className='def'>14</td>
      <td className='min'>0</td>
      <td className='max'>29</td>
      <td className='desc'>Тип реверберации под водой<br/>См. тип реверберации <a href='#room_type'>room_type</a></td>
    </tr>
    <tr id='MP3FadeTime'>
      <td className='name'>MP3FadeTime</td>
      <td className='def'>2.0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Устанавливает время плавного затухания MP3 в секундах во время использования команды `cd fadeout`</td>
    </tr>
    <tr id='MP3Volume'>
      <td className='name'>MP3Volume</td>
      <td className='def'>0.8</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Устанавливает уровень громкости MP3</td>
    </tr>
    <tr id='snd_mixahead'>
      <td className='name'>snd_mixahead</td>
      <td className='def'>0.1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Размер буфера для упреждающего смешивания звука<br/>Увеличение может помочь с прерываниями звука</td>
    </tr>
    <tr id='snd_mute_losefocus'>
      <td className='name'>snd_mute_losefocus</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'><div className='text'>Отключать звук, когда окно игры неактивно (в фоновом режиме)</div><div className='desc-meta'><VersionBadge type='added' since='2.3.6.0'/></div></td>
    </tr>
    <tr id='snd_noextraupdate'>
      <td className='name'>snd_noextraupdate</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Отключает дополнительное обновление звуковой системы, может повысить производительность</td>
    </tr>
    <tr id='snd_show'>
      <td className='name'>snd_show</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Отображает отладочную информацию о звуках</td>
    </tr>
    <tr id='speak_enabled'>
      <td className='name'>speak_enabled</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Включает поддержку синтеза речи</td>
    </tr>
    <tr id='s_show'>
      <td className='name'>s_show</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>-</td>
    </tr>
    <tr id='loadas8bit'>
      <td className='name'>loadas8bit</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Загружать звуки в 8-битном качестве для экономии памяти</td>
    </tr>
  </tbody>
</Table>

## Сеть
<Table>
  <thead><tr><th>Название</th><th>Стандартное значение</th><th>Мин.</th><th>Макс.</th><th>Описание</th></tr></thead>
  <tbody>
    <tr id='ip'>
      <td className='name'>ip</td>
      <td className='def'>localhost</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Переопределяет IP-адрес для хостов с несколькими сетевыми интерфейсами</td>
    </tr>
    <tr id='port'>
      <td className='name'>port</td>
      <td className='def'>27015</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Порт по умолчанию для игры</td>
    </tr>
    <tr id='hostport'>
      <td className='name'>hostport</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Порт для хостинга игрового сервера</td>
    </tr>
    <tr id='clientport'>
      <td className='name'>clientport</td>
      <td className='def'>27005</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Порт клиента по умолчанию</td>
    </tr>
    <tr id='multicastport'>
      <td className='name'>multicastport</td>
      <td className='def'>27025</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>-</td>
    </tr>
    <tr id='ip_hostport'>
      <td className='name'>ip_hostport</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>-</td>
    </tr>
    <tr id='ip_clientport'>
      <td className='name'>ip_clientport</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>-</td>
    </tr>
    <tr id='fakelag'>
      <td className='name'>fakelag</td>
      <td className='def'>0.0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Создает искусственную задержку (лаг) для всех входящих пакетов (в миллисекундах)</td>
    </tr>
    <tr id='fakeloss'>
      <td className='name'>fakeloss</td>
      <td className='def'>0.0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Симулирует потерю пакетов в процентах</td>
    </tr>
    <tr id='net_log'>
      <td className='name'>net_log</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Включает логгирование сетевой активности</td>
    </tr>
    <tr id='net_address'>
      <td className='name'>net_address</td>
      <td className='def'>-</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Сетевой адрес для привязки</td>
    </tr>
    <tr id='net_chokeloop'>
      <td className='name'>net_chokeloop</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Применять ограничение пропускной способности (choke) к пакетам loopback</td>
    </tr>
    <tr id='net_drawslider'>
      <td className='name'>net_drawslider</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Отображать слайдер завершения во время подключения</td>
    </tr>
    <tr id='net_showdrop'>
      <td className='name'>net_showdrop</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Показывать потерянные пакеты в консоли</td>
    </tr>
    <tr id='net_showpackets'>
      <td className='name'>net_showpackets</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Выводить сводку по пакетам в консоль</td>
    </tr>
    <tr id='max_queries_sec'>
      <td className='name'>max_queries_sec</td>
      <td className='def'>3.0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Максимальное количество запросов в секунду от одного IP</td>
    </tr>
    <tr id='max_queries_sec_global'>
      <td className='name'>max_queries_sec_global</td>
      <td className='def'>30</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Максимальное количество запросов в секунду глобально</td>
    </tr>
    <tr id='max_queries_window'>
      <td className='name'>max_queries_window</td>
      <td className='def'>60</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Окно времени для отслеживания количества запросов</td>
    </tr>
    <tr id='rcon_address'>
      <td className='name'>rcon_address</td>
      <td className='def'>-</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Адрес удаленного сервера для отправки rcon-команд</td>
    </tr>
    <tr id='rcon_password'>
      <td className='name'>rcon_password</td>
      <td className='def'>-</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Пароль для удаленного управления сервером `rcon` <a className='ref-link' href='/docs/refs/configuration/commands#rcon'/></td>
    </tr>
    <tr id='rcon_port'>
      <td className='name'>rcon_port</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Порт удаленного сервера для отправки rcon-команд</td>
    </tr>
  </tbody>
</Table>

### Сеть : Клиент
<Table>
  <thead><tr><th>Название</th><th>Стандартное значение</th><th>Мин.</th><th>Макс.</th><th>Описание</th></tr></thead>
  <tbody>
    <tr id='rate'>
      <td className='name'>rate</td>
      <td className='def'>100000</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Максимальное количество байт в секунду, которое клиент может получать от сервера</td>
    </tr>
    <tr id='cl_lw'>
      <td className='name'>cl_lw</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Включает предсказание эффектов оружия на стороне клиента (анимация, звуки)</td>
    </tr>
    <tr id='cl_lc'>
      <td className='name'>cl_lc</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Включает вычисление попаданий на стороне сервера и компенсацию лагов</td>
    </tr>
    <tr id='cl_lm'>
      <td className='name'>cl_lm</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Включает предсказание движения на стороне клиента для компенсации лагов</td>
    </tr>
    <tr id='cl_cmdbackup'>
      <td className='name'>cl_cmdbackup</td>
      <td className='def'>2</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Количество дополнительных команд, отправляемых с каждым пакетом (помогает при потере пакетов)</td>
    </tr>
    <tr id='cl_cmdrate'>
      <td className='name'>cl_cmdrate</td>
      <td className='def'>64</td>
      <td className='min'>10</td>
      <td className='max'>-</td>
      <td className='desc'>Максимальное количество пакетов с командами, отправляемых на сервер в секунду</td>
    </tr>
    <tr id='cl_updaterate'>
      <td className='name'>cl_updaterate</td>
      <td className='def'>64</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Количество пакетов с обновлениями в секунду, запрашиваемое у сервера</td>
    </tr>
    <tr id='cl_fixtimerate'>
      <td className='name'>cl_fixtimerate</td>
      <td className='def'>7.5</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Количество миллисекунд на кадр для коррекции 'дрейфа часов'</td>
    </tr>
    <tr id='cl_clockreset'>
      <td className='name'>cl_clockreset</td>
      <td className='def'>0.1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Если часы клиента расходятся с серверными больше, чем на это значение, они принудительно синхронизируются</td>
    </tr>
    <tr id='cl_timeout'>
      <td className='name'>cl_timeout</td>
      <td className='def'>60</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Через сколько секунд без получения пакетов от сервера клиент отключится</td>
    </tr>
    <tr id='cl_resend'>
      <td className='name'>cl_resend</td>
      <td className='def'>6.0</td>
      <td className='min'>1.5</td>
      <td className='max'>20</td>
      <td className='desc'>Задержка в секундах перед повторной отправкой попытки подключения</td>
    </tr>
    <tr id='cl_showmessages'>
      <td className='name'>cl_showmessages</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Выводить сетевой трафик в консоль для отладки</td>
    </tr>
    <tr id='cl_shownet'>
      <td className='name'>cl_shownet</td>
      <td className='def'>0</td>
      <td className='min'>0</td>
      <td className='max'>2</td>
      <td className='desc'>Показывать информацию о сетевом трафике</td>
    </tr>
    <tr id='cl_showerror'>
      <td className='name'>cl_showerror</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Отображать ошибки предсказания</td>
    </tr>
    <tr id='cl_showevents'>
      <td className='name'>cl_showevents</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Показывать события, такие как выстрелы. Все события перечислены в `cstrike/events/`</td>
    </tr>
    <tr id='cl_nodelta'>
      <td className='name'>cl_nodelta</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Отключает дельта-сжатие</td>
    </tr>
    <tr id='cl_nosmooth'>
      <td className='name'>cl_nosmooth</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Отключает сглаживание ошибок предсказания</td>
    </tr>
    <tr id='cl_smoothtime'>
      <td className='name'>cl_smoothtime</td>
      <td className='def'>0.1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'><div className='text'>Время в секундах, в течение которого сглаживается вид клиента после ошибки предсказания</div><div className='desc-meta'><VersionBadge type='changed' since='2.3.4.0'/></div></td>
    </tr>
    <tr id='cl_solid_players'>
      <td className='name'>cl_solid_players</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Должен ли движок предсказания движения считать других игроков твердыми объектами</td>
    </tr>
    <tr id='cl_needinstanced'>
      <td className='name'>cl_needinstanced</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Отладочная информация в консоли о загружаемых моделях. Требует `developer 1` и `sv_instancedbaseline 1` на сервере</td>
    </tr>
    <tr id='cl_slist'>
      <td className='name'>cl_slist</td>
      <td className='def'>10.0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Количество секунд ожидания ответа от серверов при поиске в локальной сети</td>
    </tr>
    <tr id='cl_pmove_version'>
      <td className='name'>cl_pmove_version</td>
      <td className='def'>1.0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'><div className='text'>Устанавливает версию кода движения игрока для синхронизации предсказаний между клиентом и сервером</div><div className='desc-meta'><VersionBadge type='added' since='2.5.0.0'/></div></td>
    </tr>
    <tr id='cl_fixmodelinterpolationartifacts'>
      <td className='name'>cl_fixmodelinterpolationartifacts</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Исправляет артефакты интерполяции, когда анимированные модели не-игроков перемещаются другими объектами</td>
    </tr>
    <tr id='net_graph'>
      <td className='name'>net_graph</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'><div className='text'>Отображает график использования сети (`1`, `2` или `3`)</div><div className='desc-meta'><VersionBadge type='changed' since='2.0.0.0'/></div></td>
    </tr>
    <tr id='net_graphalpha'>
      <td className='name'>net_graphalpha</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'><div className='text'>Прозрачность графика `net_graph`</div><div className='desc-meta'><VersionBadge type='added' since='2.0.0.0'/></div></td>
    </tr>
    <tr id='net_graphheight'>
      <td className='name'>net_graphheight</td>
      <td className='def'>64</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'><div className='text'>Высота панели `net_graph`</div><div className='desc-meta'><VersionBadge type='added' since='2.0.0.0'/></div></td>
    </tr>
    <tr id='net_graphheightfixed'>
      <td className='name'>net_graphheightfixed</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'><div className='text'>Фиксированная высота `net_graph`</div><div className='desc-meta'><VersionBadge type='added' since='2.0.0.0'/></div></td>
    </tr>
    <tr id='net_graphmsecs'>
      <td className='name'>net_graphmsecs</td>
      <td className='def'>400</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'><div className='text'>График задержки представляет это количество миллисекунд</div><div className='desc-meta'><VersionBadge type='added' since='2.0.0.0'/></div></td>
    </tr>
    <tr id='net_graphpos'>
      <td className='name'>net_graphpos</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'><div className='text'>Позиция `net_graph` на экране<br/>`0` слева<br/>`1` справа<br/>`2` по центру</div><div className='desc-meta'><VersionBadge type='changed' since='2.0.0.0'/></div></td>
    </tr>
    <tr id='net_graphproportionalfont'>
      <td className='name'>net_graphproportionalfont</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'><div className='text'>Определяет, является ли шрифт `net_graph` пропорциональным или нет</div><div className='desc-meta'><VersionBadge type='added' since='2.0.0.0'/></div></td>
    </tr>
    <tr id='net_graphshowinterp'>
      <td className='name'>net_graphshowinterp</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'><div className='text'>Отображать график интерполяции</div><div className='desc-meta'><VersionBadge type='added' since='2.0.0.0'/></div></td>
    </tr>
    <tr id='net_graphshowlatency'>
      <td className='name'>net_graphshowlatency</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'><div className='text'>Отображать график пинга/потери пакетов</div><div className='desc-meta'><VersionBadge type='added' since='2.0.0.0'/></div></td>
    </tr>
    <tr id='net_graphsolid'>
      <td className='name'>net_graphsolid</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'><div className='text'>Делает фон `net_graph` непрозрачным</div><div className='desc-meta'><VersionBadge type='added' since='2.0.0.0'/></div></td>
    </tr>
    <tr id='net_graphtext'>
      <td className='name'>net_graphtext</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'><div className='text'>Отображать текстовые поля</div><div className='desc-meta'><VersionBadge type='added' since='2.0.0.0'/></div></td>
    </tr>
    <tr id='net_graphwidth'>
      <td className='name'>net_graphwidth</td>
      <td className='def'>250</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'><div className='text'>Ширина панели `net_graph`</div><div className='desc-meta'><VersionBadge type='changed' since='2.0.0.0'/></div></td>
    </tr>
    <tr id='net_scale'>
      <td className='name'>net_scale</td>
      <td className='def'>3</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'><div className='text'>Масштаб графика `net_graph`</div><div className='desc-meta'><VersionBadge type='changed' since='2.0.0.0'/></div></td>
    </tr>
    <tr id='ex_interp'>
      <td className='name'>ex_interp</td>
      <td className='def'>0.1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Время в секундах для интерполяции позиций объектов. Значение `1 / cl_updaterate` является оптимальным</td>
    </tr>
    <tr>
      <td colSpan='5' className='name'><a href='#r_bmodelinterp'>r_bmodelinterp</a></td>
    </tr>
  </tbody>
</Table>

#### Сеть : Клиент : Соединение
<Table>
  <thead><tr><th>Название</th><th>Стандартное значение</th><th>Мин.</th><th>Макс.</th><th>Описание</th></tr></thead>
  <tbody>
    <tr id='cl_dlmax'>
      <td className='name'>cl_dlmax</td>
      <td className='def'>1024</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Максимальный размер фрагмента (в байтах) для скачивания логотипов игроков с сервера во время игры, а так же загрузка недостающих ресурсов во время подключения к серверу</td>
    </tr>
    <tr id='cl_download_delay_ms'>
      <td className='name'>cl_download_delay_ms</td>
      <td className='def'>0</td>
      <td className='min'>0</td>
      <td className='max'>10000</td>
      <td className='desc'><div className='text'>Задержка в миллисекундах между загрузками файлов по HTTP</div><div className='desc-meta'><VersionBadge type='added' since='2.0.0.0'/></div></td>
    </tr>
    <tr id='cl_download_demo_resources'>
      <td className='name'>cl_download_demo_resources</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'><div className='text'>Включает загрузку недостающих ресурсов во время воспроизведения демо-записей</div><div className='desc-meta'><VersionBadge type='added' since='2.5.0.0'/></div></td>
    </tr>
    <tr id='cl_download_enable_gzip'>
      <td className='name'>cl_download_enable_gzip</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'><div className='text'>Включить поддержку Gzip-сжатия для быстрой загрузки (fastdl)</div><div className='desc-meta'><VersionBadge type='added' since='2.3.6.0'/></div></td>
    </tr>
    <tr id='cl_download_ingame'>
      <td className='name'>cl_download_ingame</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Включает загрузку пользовательских спреев (логотипов) игроков во время игры</td>
    </tr>
    <tr id='cl_download_multi'>
      <td className='name'>cl_download_multi</td>
      <td className='def'>5</td>
      <td className='min'>1</td>
      <td className='max'>20</td>
      <td className='desc'><div className='text'>Максимальное количество одновременных загрузок</div><div className='desc-meta'><VersionBadge type='added' since='2.0.0.0'/></div></td>
    </tr>
    <tr id='cl_download_retries'>
      <td className='name'>cl_download_retries</td>
      <td className='def'>3</td>
      <td className='min'>0</td>
      <td className='max'>10</td>
      <td className='desc'><div className='text'>Максимальное количество попыток повторной загрузки</div><div className='desc-meta'><VersionBadge type='added' since='2.3.8.6'/></div></td>
    </tr>
    <tr id='cl_filterstuffcmd'>
      <td className='name'>cl_filterstuffcmd</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'><div className='text'>Уровень фильтрации команд, которые сервер может выполнять на вашем клиенте<br/>`0` выкл. (нет ограничений)<br/>`1` мягкий уровень (некоторые команды разрешены)<br/>`2` строгий уровень (выполнение запрещено)</div><div className='desc-meta'><VersionBadge type='added' since='2.3.7.0'/></div></td>
    </tr>
    <tr id='cl_filterstuffcmd_notify'>
      <td className='name'>cl_filterstuffcmd_notify</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'><div className='text'>Включает уведомления о заблокированных командах, которые сервер пытался выполнить на вашем клиенте</div><div className='desc-meta'><VersionBadge type='added' since='2.0.0.0'/></div></td>
    </tr>
    <tr id='cl_allow_demorecord'>
      <td className='name'>cl_allow_demorecord</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'><div className='text'>Позволяет серверу запускать запись демо-записи на клиенте</div><div className='desc-meta'><VersionBadge type='added' since='1.5.0.0'/></div></td>
    </tr>
    <tr id='cl_allow_redirect'>
      <td className='name'>cl_allow_redirect</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'><div className='text'>Разрешить перенаправление на другой сервер по запросу текущего сервера</div><div className='desc-meta'><VersionBadge type='added' since='2.3.6.0'/></div></td>
    </tr>
    <tr id='cl_allowdownload'>
      <td className='name'>cl_allowdownload</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Разрешить загрузку карт, моделей, звуков и других файлов при подключении к серверу</td>
    </tr>
    <tr id='cl_allowupload'>
      <td className='name'>cl_allowupload</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Разрешить загрузку вашего пользовательского спрея на сервер при подключении</td>
    </tr>
  </tbody>
</Table>

## Сервер
<Table>
  <thead><tr><th>Название</th><th>Стандартное значение</th><th>Мин.</th><th>Макс.</th><th>Описание</th></tr></thead>
  <tbody>
    <tr id='hostname'>
      <td className='name'>hostname</td>
      <td className='def'>Half-Life</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Имя сервера</td>
    </tr>
    <tr id='coop'>
      <td className='name'>coop</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Кооперативный режим игры</td>
    </tr>
    <tr id='skill'>
      <td className='name'>skill</td>
      <td className='def'>1</td>
      <td className='min'>1</td>
      <td className='max'>3</td>
      <td className='desc'>Уровень сложности NPC, используется в Half-Life</td>
    </tr>
    <tr id='deathmatch'>
      <td className='name'>deathmatch</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Запуск сервера в режиме deathmatch (мгновенное возрождение)</td>
    </tr>
    <tr id='pausable'>
      <td className='name'>pausable</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Позволяет клиентам ставить игру на паузу</td>
    </tr>
    <tr id='host_framerate'>
      <td className='name'>host_framerate</td>
      <td className='def'>0.0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Фиксирует время, проходящее за один кадр сервера</td>
    </tr>
    <tr id='host_killtime'>
      <td className='name'>host_killtime</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Время в секундах до завершения работы сервера после выполнения команды `killserver`</td>
    </tr>
    <tr id='host_limitlocal'>
      <td className='name'>host_limitlocal</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Применять `cl_cmdrate` и `cl_updaterate` к loopback-соединению</td>
    </tr>
    <tr id='host_profile'>
      <td className='name'>host_profile</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Включает профилирование хоста</td>
    </tr>
    <tr id='host_speeds'>
      <td className='name'>host_speeds</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Показывать общую информацию о времени выполнения системы</td>
    </tr>
    <tr id='host_timescale'>
      <td className='name'>host_timescale</td>
      <td className='def'>1</td>
      <td className='min'>0.0625</td>
      <td className='max'>16</td>
      <td className='desc'>Множитель скорости течения времени на сервере (замедление/ускорение)</td>
    </tr>
    <tr id='sv_accelerate'>
      <td className='name'>sv_accelerate</td>
      <td className='def'>10</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Ускорение игрока на земле</td>
    </tr>
    <tr id='sv_aim'>
      <td className='name'>sv_aim</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Включает автонаведение для игроков (только для одиночной игры или кооператива)</td>
    </tr>
    <tr id='sv_airaccelerate'>
      <td className='name'>sv_airaccelerate</td>
      <td className='def'>10</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Ускорение игрока в воздухе (влияет на стрейф-джампы)</td>
    </tr>
    <tr id='sv_allow_dlfile'>
      <td className='name'>sv_allow_dlfile</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Разрешает скачивание файлов с сервера</td>
    </tr>
    <tr id='sv_allowdownload'>
      <td className='name'>sv_allowdownload</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Разрешает клиентам скачивать файлы с сервера</td>
    </tr>
    <tr id='sv_allowupload'>
      <td className='name'>sv_allowupload</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Разрешает клиентам загружать файлы на сервер (например, спреи)</td>
    </tr>
    <tr id='sv_bounce'>
      <td className='name'>sv_bounce</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Множитель отскока при столкновении объектов</td>
    </tr>
    <tr id='sv_cheats'>
      <td className='name'>sv_cheats</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>При `1` включает возможность использовать 'читерские' команды, такие как `impulse 101` (16000 денег) или `god` (режим бога)</td>
    </tr>
    <tr id='sv_clienttrace'>
      <td className='name'>sv_clienttrace</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Максимальный радиус трассировки для клиентских попаданий</td>
    </tr>
    <tr id='sv_contact'>
      <td className='name'>sv_contact</td>
      <td className='def'>-</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Контактная информация сервера (e-mail)</td>
    </tr>
    <tr id='sv_downloadurl'>
      <td className='name'>sv_downloadurl</td>
      <td className='def'>-</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>URL для быстрой загрузки файлов (FastDL)</td>
    </tr>
    <tr id='sv_enableoldqueries'>
      <td className='name'>sv_enableoldqueries</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Включает поддержку старых протоколов запросов к серверу</td>
    </tr>
    <tr id='sv_failuretime'>
      <td className='name'>sv_failuretime</td>
      <td className='def'>0.5</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>-</td>
    </tr>
    <tr id='sv_filetransfercompression'>
      <td className='name'>sv_filetransfercompression</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Использовать bzip2 сжатие для передачи файлов</td>
    </tr>
    <tr id='sv_filetransfermaxsize'>
      <td className='name'>sv_filetransfermaxsize</td>
      <td className='def'>10485760</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Максимальный размер файла для передачи (в байтах)</td>
    </tr>
    <tr id='sv_filterban'>
      <td className='name'>sv_filterban</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Включает фильтрацию по IP для банов</td>
    </tr>
    <tr id='sv_friction'>
      <td className='name'>sv_friction</td>
      <td className='def'>4</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Трение на поверхностях</td>
    </tr>
    <tr id='sv_gravity'>
      <td className='name'>sv_gravity</td>
      <td className='def'>800</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Гравитация на сервере</td>
    </tr>
    <tr id='sv_instancedbaseline'>
      <td className='name'>sv_instancedbaseline</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Использовать инстанцированные базовые линии для объектов</td>
    </tr>
    <tr id='sv_lan'>
      <td className='name'>sv_lan</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Если `1`, сервер считается локальным (LAN) и не анонсируется в интернете</td>
    </tr>
    <tr id='sv_lan_rate'>
      <td className='name'>sv_lan_rate</td>
      <td className='def'>20000.0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Рейт по умолчанию для LAN-серверов</td>
    </tr>
    <tr id='sv_language'>
      <td className='name'>sv_language</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Язык сервера</td>
    </tr>
    <tr id='sv_log_onefile'>
      <td className='name'>sv_log_onefile</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Записывать все логи в один файл</td>
    </tr>
    <tr id='sv_log_singleplayer'>
      <td className='name'>sv_log_singleplayer</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Вести лог в одиночной игре</td>
    </tr>
    <tr id='sv_logbans'>
      <td className='name'>sv_logbans</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Записывать баны в лог</td>
    </tr>
    <tr id='sv_logblocks'>
      <td className='name'>sv_logblocks</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Записывать блокировки в лог</td>
    </tr>
    <tr id='sv_logrelay'>
      <td className='name'>sv_logrelay</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Пересылать логи на другой адрес</td>
    </tr>
    <tr id='sv_logsecret'>
      <td className='name'>sv_logsecret</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>-</td>
    </tr>
    <tr id='sv_max_upload_count'>
      <td className='name'>sv_max_upload_count</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>-</td>
    </tr>
    <tr id='sv_maxrate'>
      <td className='name'>sv_maxrate</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Максимальный рейт, который может установить клиент<br/>`0` без ограничений</td>
    </tr>
    <tr id='sv_maxspeed'>
      <td className='name'>sv_maxspeed</td>
      <td className='def'>320</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Максимальная скорость передвижения игроков</td>
    </tr>
    <tr id='sv_maxunlag'>
      <td className='name'>sv_maxunlag</td>
      <td className='def'>0.5</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Максимальное время (в секундах), на которое сервер будет 'отматывать' время для компенсации лагов. Большие значения улучшают компенсацию, но могут приводить к нереалистичным попаданиям для игроков с высоким пингом</td>
    </tr>
    <tr id='sv_maxupdaterate'>
      <td className='name'>sv_maxupdaterate</td>
      <td className='def'>30.0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Максимальная частота обновлений, которую сервер может отправлять клиентам</td>
    </tr>
    <tr id='sv_maxvelocity'>
      <td className='name'>sv_maxvelocity</td>
      <td className='def'>2000</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Максимальная скорость любого движущегося объекта</td>
    </tr>
    <tr id='sv_minrate'>
      <td className='name'>sv_minrate</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Минимальный рейт, который может установить клиент</td>
    </tr>
    <tr id='sv_minupdaterate'>
      <td className='name'>sv_minupdaterate</td>
      <td className='def'>10.0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Минимальная частота обновлений, которую сервер может отправлять клиентам</td>
    </tr>
    <tr id='sv_newunit'>
      <td className='name'>sv_newunit</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>-</td>
    </tr>
    <tr id='sv_outofdatetime'>
      <td className='name'>sv_outofdatetime</td>
      <td className='def'>1800</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>-</td>
    </tr>
    <tr id='sv_password'>
      <td className='name'>sv_password</td>
      <td className='def'>-</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Устанавливает пароль на сервер</td>
    </tr>
    <tr id='sv_proxies'>
      <td className='name'>sv_proxies</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Количество прокси, которое может быть на сервере</td>
    </tr>
    <tr id='sv_rcon_banpenalty'>
      <td className='name'>sv_rcon_banpenalty</td>
      <td className='def'>0</td>
      <td className='min'>0</td>
      <td className='max'>-</td>
      <td className='desc'>Время в минутах, на которое банится пользователь за неудачные попытки rcon-аутентификации</td>
    </tr>
    <tr id='sv_rcon_maxfailures'>
      <td className='name'>sv_rcon_maxfailures</td>
      <td className='def'>10</td>
      <td className='min'>1</td>
      <td className='max'>20</td>
      <td className='desc'>Максимальное количество неудачных попыток rcon-аутентификации до бана</td>
    </tr>
    <tr id='sv_rcon_minfailures'>
      <td className='name'>sv_rcon_minfailures</td>
      <td className='def'>5</td>
      <td className='min'>1</td>
      <td className='max'>20</td>
      <td className='desc'>Количество неудачных попыток rcon-аутентификации за `sv_rcon_minfailuretime`, после которого последует бан</td>
    </tr>
    <tr id='sv_rcon_minfailuretime'>
      <td className='name'>sv_rcon_minfailuretime</td>
      <td className='def'>30</td>
      <td className='min'>1</td>
      <td className='max'>-</td>
      <td className='desc'>Время в секундах для отслеживания неудачных rcon-аутентификаций</td>
    </tr>
    <tr id='sv_rcon_whitelist_address'>
      <td className='name'>sv_rcon_whitelist_address</td>
      <td className='def'>-</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'><div className='text'>Если установлено, этот IP-адрес никогда не будет забанен за неудачные rcon-попытки, например, `127.0.0.1`</div><div className='desc-meta'><VersionBadge type='added' since='2.3.7.0'/></div></td>
    </tr>
    <tr id='sv_rollangle'>
      <td className='name'>sv_rollangle</td>
      <td className='def'>0.0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Угол крена камеры при стрейфе</td>
    </tr>
    <tr id='sv_rollspeed'>
      <td className='name'>sv_rollspeed</td>
      <td className='def'>200</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Скорость крена камеры при стрейфе</td>
    </tr>
    <tr id='sv_send_logos'>
      <td className='name'>sv_send_logos</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Разрешает отправку логотипов игроков</td>
    </tr>
    <tr id='sv_send_resources'>
      <td className='name'>sv_send_resources</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Разрешает отправку списка ресурсов клиентам</td>
    </tr>
    <tr id='sv_skycolor_b'>
      <td className='name'>sv_skycolor_b</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Синяя составляющая цвета неба</td>
    </tr>
    <tr id='sv_skycolor_g'>
      <td className='name'>sv_skycolor_g</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Зеленая составляющая цвета неба</td>
    </tr>
    <tr id='sv_skycolor_r'>
      <td className='name'>sv_skycolor_r</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Красная составляющая цвета неба</td>
    </tr>
    <tr id='sv_skyname'>
      <td className='name'>sv_skyname</td>
      <td className='def'>desert</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Имя текстуры неба (скайбокса)</td>
    </tr>
    <tr id='sv_skyvec_x'>
      <td className='name'>sv_skyvec_x</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Направление по оси X для движущегося неба</td>
    </tr>
    <tr id='sv_skyvec_y'>
      <td className='name'>sv_skyvec_y</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Направление по оси Y для движущегося неба</td>
    </tr>
    <tr id='sv_skyvec_z'>
      <td className='name'>sv_skyvec_z</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Направление по оси Z для движущегося неба</td>
    </tr>
    <tr id='sv_spectatormaxspeed'>
      <td className='name'>sv_spectatormaxspeed</td>
      <td className='def'>500</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Максимальная скорость в режиме наблюдателя</td>
    </tr>
    <tr id='sv_stats'>
      <td className='name'>sv_stats</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Собирать статистику использования CPU</td>
    </tr>
    <tr id='sv_stepsize'>
      <td className='name'>sv_stepsize</td>
      <td className='def'>18</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Максимальная высота ступеньки, на которую может забраться игрок</td>
    </tr>
    <tr id='sv_stopspeed'>
      <td className='name'>sv_stopspeed</td>
      <td className='def'>100</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Скорость остановки игрока</td>
    </tr>
    <tr id='sv_timeout'>
      <td className='name'>sv_timeout</td>
      <td className='def'>60</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Если сервер не получает пакетов от клиента в течение этого времени (в секундах), клиент отключается</td>
    </tr>
    <tr id='sv_unlag'>
      <td className='name'>sv_unlag</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Включает или отключает компенсацию лагов. Установите `1`, чтобы сервер корректировал позиции игроков на основе их задержки</td>
    </tr>
    <tr id='sv_unlagpush'>
      <td className='name'>sv_unlagpush</td>
      <td className='def'>0.0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Корректирует время компенсации. Положительные значения добавляют задержку, отрицательные — уменьшают. Полезно для тонкой настройки точности в зависимости от условий сервера</td>
    </tr>
    <tr id='sv_unlagsamples'>
      <td className='name'>sv_unlagsamples</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Устанавливает количество кадров, используемых при компенсации лагов. Большие значения могут повысить точность, но увеличивают нагрузку на CPU сервера</td>
    </tr>
    <tr id='sv_uploadmax'>
      <td className='name'>sv_uploadmax</td>
      <td className='def'>0.5</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Максимальный размер файла для загрузки (в МБ)</td>
    </tr>
    <tr id='sv_use_entity_file'>
      <td className='name'>sv_use_entity_file</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'><div className='text'>Использовать внешний файл для данных об объектах (entities)</div><div className='desc-meta'><VersionBadge type='added' since='2.5.0.0'/></div></td>
    </tr>
    <tr id='sv_userinfo_transmitted_fields'>
      <td className='name'>sv_userinfo_transmitted_fields</td>
      <td className='def'>-</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'><div className='text'>Какие поля userinfo передаются клиентам</div><div className='desc-meta'><VersionBadge type='added' since='2.0.0.0'/></div></td>
    </tr>
    <tr id='sv_version'>
      <td className='name'>sv_version</td>
      <td className='def'>1.1.2.7,48,10517</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Версия сервера</td>
    </tr>
    <tr id='sv_visiblemaxplayers'>
      <td className='name'>sv_visiblemaxplayers</td>
      <td className='def'>-1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Количество слотов, отображаемое в браузере серверов<br/>`-1` использовать реальное количество</td>
    </tr>
    <tr id='sv_voicecodec'>
      <td className='name'>sv_voicecodec</td>
      <td className='def'>voice_speex</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Голосовой кодек, используемый сервером</td>
    </tr>
    <tr id='sv_voiceenable'>
      <td className='name'>sv_voiceenable</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Включает голосовой чат на сервере</td>
    </tr>
    <tr id='sv_voicequality'>
      <td className='name'>sv_voicequality</td>
      <td className='def'>3</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Качество голосового чата</td>
    </tr>
    <tr id='sv_wateraccelerate'>
      <td className='name'>sv_wateraccelerate</td>
      <td className='def'>10</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Ускорение в воде</td>
    </tr>
    <tr id='sv_wateramp'>
      <td className='name'>sv_wateramp</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Амплитуда волн на воде (серверная)</td>
    </tr>
    <tr id='sv_waterfriction'>
      <td className='name'>sv_waterfriction</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Трение в воде</td>
    </tr>
    <tr id='sv_zmax'>
      <td className='name'>sv_zmax</td>
      <td className='def'>4096</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Максимальная дальность видимости объектов на сервере</td>
    </tr>
    <tr id='clockwindow'>
      <td className='name'>clockwindow</td>
      <td className='def'>0.5</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>-</td>
    </tr>
    <tr id='logsdir'>
      <td className='name'>logsdir</td>
      <td className='def'>logs</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Папка для хранения логов</td>
    </tr>
    <tr id='sys_ticrate'>
      <td className='name'>sys_ticrate</td>
      <td className='def'>100.0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Тикрейт сервера (количество симуляций в секунду)</td>
    </tr>
    <tr id='syserror_logfile'>
      <td className='name'>syserror_logfile</td>
      <td className='def'>crashdumps\sys_error.log</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Файл для логов системных ошибок</td>
    </tr>
    <tr id='servercfgfile'>
      <td className='name'>servercfgfile</td>
      <td className='def'>server.cfg</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Имя основного файла конфигурации сервера</td>
    </tr>
    <tr id='mapchangecfgfile'>
      <td className='name'>mapchangecfgfile</td>
      <td className='def'>-</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Имя файла конфигурации, выполняемого при каждой смене карты</td>
    </tr>
    <tr id='mapcyclefile'>
      <td className='name'>mapcyclefile</td>
      <td className='def'>mapcycle.txt</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Имя файла, который используется для цикла карт</td>
    </tr>
    <tr id='listipcfgfile'>
      <td className='name'>listipcfgfile</td>
      <td className='def'>listip.cfg</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Имя файла конфигурации для IP-адресов</td>
    </tr>
    <tr id='lservercfgfile'>
      <td className='name'>lservercfgfile</td>
      <td className='def'>listenserver.cfg</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Имя файла конфигурации для listen-сервера (созданного через меню игры)</td>
    </tr>
    <tr id='bannedcfgfile'>
      <td className='name'>bannedcfgfile</td>
      <td className='def'>banned.cfg</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Имя файла конфигурации для забаненных пользователей</td>
    </tr>
    <tr id='motdfile'>
      <td className='name'>motdfile</td>
      <td className='def'>motd.txt</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Имя файла для `Приветственного сообщения` (MOTD — Message of the Day), отображаемого при входе на сервер</td>
    </tr>
    <tr id='hpk_maxsize'>
      <td className='name'>hpk_maxsize</td>
      <td className='def'>4</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Максимальный размер файла custom.hpk (в МБ)</td>
    </tr>
    <tr id='HostMap'>
      <td className='name'>HostMap</td>
      <td className='def'>C1A0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Служебная переменная для запоминания текущей карты, используется для команды `reload`</td>
    </tr>
    <tr id='mp_consistency'>
      <td className='name'>mp_consistency</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Проверяет соответствие критически важных файлов у клиента и сервера</td>
    </tr>
    <tr id='mp_decals'>
      <td className='name'>mp_decals</td>
      <td className='def'>300</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Максимальное количество декалей на сервере</td>
    </tr>
    <tr id='sp_decals'>
      <td className='name'>sp_decals</td>
      <td className='def'>4096</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Максимальное количество декалей в одиночной игре</td>
    </tr>
    <tr id='mp_footsteps'>
      <td className='name'>mp_footsteps</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Включает звуки шагов</td>
    </tr>
    <tr id='mp_logecho'>
      <td className='name'>mp_logecho</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Выводить лог-сообщения в консоль сервера</td>
    </tr>
    <tr id='mp_logfile'>
      <td className='name'>mp_logfile</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Вести лог сервера в файл</td>
    </tr>
  </tbody>
</Table>

## Настройки окна и ввода
<Table>
  <thead><tr><th>Название</th><th>Стандартное значение</th><th>Мин.</th><th>Макс.</th><th>Описание</th></tr></thead>
  <tbody>
    <tr id='sdl_double_click_size'>
      <td className='name'>sdl_double_click_size</td>
      <td className='def'>2</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Размер области (в пикселях) для распознавания двойного клика</td>
    </tr>
    <tr id='sdl_double_click_time'>
      <td className='name'>sdl_double_click_time</td>
      <td className='def'>400</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Время (в мс) для распознавания двойного клика</td>
    </tr>
    <tr id='sdl_minimize_on_focus_loss'>
      <td className='name'>sdl_minimize_on_focus_loss</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Сворачивать игру при потере фокуса в полноэкранном режиме<br/>Рекомендуется отключить это устаревшее поведение, для улучшения совместимости с менеджерами окон<br/>Имейте ввиду, если вы это отключите, игра не будет сворачиваться одной кнопкой `Win`, правильное использование `Win + D` или `Alt + ESC`</td>
    </tr>
    <tr id='sdl_pollevent_no_timeout'>
      <td className='name'>sdl_pollevent_no_timeout</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Включить немедленный опрос событий, минуя SDL_WaitEventTimeout с нулевым таймаутом (для отладки)</td>
    </tr>
  </tbody>
</Table>

## Параметры визуализации для настройки производительности
<h5>Консольные переменные, связанные с визуализацией, которые могут как положительно, так и отрицательно влиять на производительность игры<br/>Настрой их, чтобы улучшить производительность или контролировать количество визуальных эффектов, например частиц, лазерных лучей и т.д.</h5>
<Grid minItemWidth="250px">
  <div><a href='#fps_max'>fps_max</a></div>
  <div><a href='#gl_zmax'>gl_zmax</a></div>
  <div><a href='#r_maxbeams'>r_maxbeams</a></div>
  <div><a href='#max_shells'>max_shells</a></div>
  <div><a href='#max_smokepuffs'>max_smokepuffs</a></div>
  <div><a href='#cl_weather'>cl_weather</a></div>
  <div><a href='#cl_minmodels'>cl_minmodels</a></div>
  <div><a href='#cl_minviewmodel'>cl_minviewmodel</a></div>
  <div><a href='#r_dynamic'>r_dynamic</a></div>
  <div><a href='#r_decals'>r_decals</a></div>
  <div><a href='#r_detailtextures'>r_detailtextures</a></div>
  <div><a href='#fastsprites'>fastsprites</a></div>
  <div><a href='#gl_msaa'>gl_msaa</a></div>
</Grid>

## Разработчик / Отладка
<Table>
  <thead><tr><th>Название</th><th>Стандартное значение</th><th>Мин.</th><th>Макс.</th><th>Описание</th></tr></thead>
  <tbody>
    <tr id='developer'>
      <td className='name'>developer</td>
      <td className='def'>0</td>
      <td className='min'>0</td>
      <td className='max'>3</td>
      <td className='desc'>Включает уровень сообщений разработчика<br/>Режим разработчика можно использовать для отображения информации на экране и вывода расширенной информации в консоль</td>
    </tr>
    <tr id='dev_overview'>
      <td className='name'>dev_overview</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Включает режим просмотра карты сверху вниз для создания обзорных изображений</td>
    </tr>
    <tr id='mem_show'>
      <td className='name'>mem_show</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Показывать информацию об использовании памяти</td>
    </tr>
    <tr id='fs_lazy_precache'>
      <td className='name'>fs_lazy_precache</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Отложенная предзагрузка ресурсов<br/><br/>Если `0` — все модели, звуки и прочее грузятся сразу при подключении к серверу<br/>Старт будет дольше, но во время игры подлагов будет меньше<br/><br/>Если `1` — ресурсы загружаются только при первом использовании в игре<br/>Подключение быстрее, но возможны небольшие фризы при появлении новых объектов<br/>Используйте, если хотите быстрее заходить или у вас мало оперативной памяти</td>
    </tr>
    <tr id='fs_perf_warnings'>
      <td className='name'>fs_perf_warnings</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Предупреждения о тормозах файловой системы<br/>Если включить, игра будет выводить в консоль предупреждения, если при загрузке файлов что-то идёт медленно или не так, как должно. Полезно для отладки или поиска проблем с файлами</td>
    </tr>
    <tr id='fs_precache_timings'>
      <td className='name'>fs_precache_timings</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Показывать время загрузки ресурсов<br/>Включает вывод в консоль, сколько секунд ушло на загрузку каждой модели или звука<br/>Полезно для теста и поиска 'тяжёлых' ресурсов, которые долго грузятся</td>
    </tr>
    <tr id='fs_startup_timings'>
      <td className='name'>fs_startup_timings</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Показывать время запуска клиента<br/>При подключении к серверу выводит в консоль поэтапное время загрузки клиента (предзагрузка ресурсов, подключение и т.д.)<br/>Полезно, чтобы понять, на каком этапе есть задержка</td>
    </tr>
    <tr id='cl_pmanstats'>
      <td className='name'>cl_pmanstats</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Показывать статистику менеджера частиц</td>
    </tr>
  </tbody>
</Table>
<Grid minItemWidth="250px">
  <div><a href='#cl_showmessages'>cl_showmessages</a></div>
  <div><a href='#cl_shownet'>cl_shownet</a></div>
  <div><a href='#cl_showerror'>cl_showerror</a></div>
  <div><a href='#cl_showevents'>cl_showevents</a></div>
  <div><a href='#cl_showfps'>cl_showfps</a></div>
  <div><a href='#s_show'>s_show</a></div>
  <div><a href='#snd_show'>snd_show</a></div>
  <div><a href='#net_graph'>net_graph</a></div>
  <div><a href='#net_showdrop'>net_showdrop</a></div>
  <div><a href='#net_showpackets'>net_showpackets</a></div>
  <div><a href='#voice_showchannels'>voice_showchannels</a></div>
  <div><a href='#voice_showincoming'>voice_showincoming</a></div>
  <div><a href='#r_drawentities'>r_drawentities</a></div>
  <div><a href='#r_showinfo'>r_showinfo</a></div>
  <div><a href='#r_showparticles'>r_showparticles</a></div>
  <div><a href='#r_speeds'>r_speeds</a></div>
  <div><a href='#r_novis'>r_novis</a></div>
  <div><a href='#r_lockcull'>r_lockcull</a></div>
  <div><a href='#r_lockpvs'>r_lockpvs</a></div>
  <div><a href='#r_drawviewmodel'>r_drawviewmodel</a></div>
  <div><a href='#weapon_debug_spread_gap'>weapon_debug_spread_gap</a></div>
  <div><a href='#weapon_debug_spread_show'>weapon_debug_spread_show</a></div>
  <div><a href='#cl_smokegren_debug'>cl_smokegren_debug</a></div>
  <div><a href='#host_timescale'>host_timescale</a></div>
  <div><a href='#gl_wireframe'>gl_wireframe</a></div>
  <div><a href='#dev_console'>dev_console</a></div>
</Grid>
