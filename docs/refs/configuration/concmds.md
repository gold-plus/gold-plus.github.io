---
id: commands
title: Консольные команды
sidebar_position: 2
---

import { VersionBadge } from '@site/src/components/Misc/Badges'
import { Table } from '@site/src/components/ResponsiveLayout';

<br/>
:::warning Страница в разработке
Эта страница находится в стадии активного наполнения и корректирования<br/>
Возможны ошибки, неточности и пропуски, и отсутствия перевода<br/>
Следите за обновлениями, чтобы получать актуальную информацию
:::

# Консольные команды

Список всех консольных команд (ConCommands) — описание и синтаксис использования
:::info Как читать синтаксис консольных команд
Прежде чем начать, разберемся, как читать синтаксис, используемый в этой документации

**Обозначение аргументов**

Аргументы команд (параметры, которые вы передаете) обозначаются специальными скобками:

| Синтаксис      | Значение                                       | Пример                      |
|:---------------|:-----------------------------------------------|:----------------------------|
| `<аргумент>`   | **Обязательный** аргумент — его нужно заменить своим значением                | `kick <имя>`                |
| `[аргумент]`   | **Необязательный** (опциональный) аргумент — его можно опустить    | `kick <имя> [причина]`       |
| `<on\|off>`   | **Выбор** одного из предложенных вариантов через `\|`    | `log <on\|off>`             |

**Использование кавычек ("")**

Если аргумент содержит пробелы или вы хотите объединить несколько команд в одну строку, его необходимо заключить в двойные кавычки (`"`) \
Без них консоль воспримет каждое слово как отдельную команду или аргумент

*   **Неправильно:** `say Hello world` (в чат отправится только "Hello")
*   **Правильно:** `say "Hello world"` (в чат отправится вся фраза)

Это особенно важно при создании биндов со мульти-командами:
`bind F1 "buy ak47; buy vesthelm"`

**Важно** \
Сами скобки `<>`, `[]` и символ `|` в консоль вводить **не нужно** \
Они лишь описывают структуру команды
:::

## Настройка и Конфигурация
<Table>
  <thead><tr><th>Команда</th><th>Описание</th></tr></thead>
  <tbody>
    <tr id='bind'>
      <td className='name'>bind `<key>` `<command>`</td>
      <td className='desc'>Привязывает команду к клавише<br/><br/>*Например*<br/>`bind q "lastinv"`</td>
    </tr>
    <tr id='unbind'>
      <td className='name'>unbind `<key>`</td>
      <td className='desc'>Отвязывает команду от клавиши</td>
    </tr>
    <tr id='unbindall'>
      <td className='name'>unbindall</td>
      <td className='desc'>Отвязывает все команды от всех клавиш</td>
    </tr>
    <tr id='bindlist'>
      <td className='name'>bindlist `[template]`</td>
      <td className='desc'><div className='text'>Показывает список всех текущих привязок клавиш</div><div className='desc-meta'><VersionBadge type='added' since='2.3.3.0'/></div></td>
    </tr>
    <tr id='sbindlist'>
      <td className='name'>sbindlist</td>
      <td className='desc'><div className='text'>Показывает список 'теневых' привязок клавиш, установленных сервером</div><div className='desc-meta'><VersionBadge type='added' since='1.2.0.0'/></div></td>
    </tr>
    <tr id='multvar'>
      <td className='name'>multvar `<cvar>` `<minvalue>` `<maxvalue>` `<factor>`</td>
      <td className='desc'><div className='text'>Умножает значение квара на коэффициент, если оно находится в заданном диапазоне<br/><br/>*Например*<br/>`bind uparrow "multvar voice_scale 0.01 1 2"`<br/>`bind downarrow "multvar voice_scale 0.01 1 0.5"`</div><div className='desc-meta'><VersionBadge type='added' since='2.3.8.6'/></div></td>
    </tr>
    <tr id='incrementvar'>
      <td className='name'>incrementvar `<cvar>` `<minvalue>` `<maxvalue>` `<delta>`</td>
      <td className='desc'><div className='text'>Изменяет значение квара в заданном диапазоне<br/><br/>*Например*<br/>`bind uparrow "incrementvar viewmodel_fov 60 179 1"`<br/>`bind downarrow "incrementvar viewmodel_fov 60 179 -1"`</div><div className='desc-meta'><VersionBadge type='added' since='2.0.0.0'/></div></td>
    </tr>
    <tr id='BindToggle'>
      <td className='name'>BindToggle `<key>` `<cvar>`</td>
      <td className='desc'><div className='text'>Упрощенная версия `incrementvar` для быстрого переключения квара между 0 и 1<br/><br/>*Например*<br/>`BindToggle F4 voice_enable`</div><div className='desc-meta'><VersionBadge type='added' since='2.0.0.0'/></div></td>
    </tr>
    <tr id='alias'>
      <td className='name'>alias `<name>` `<command>`</td>
      <td className='desc'>Создает алиас для одной или группы из нескольких команд<br/><br/>*Например*<br/>`alias buy_grens "hegren;sgren;flash;"`</td>
    </tr>
    <tr id='wait'>
      <td className='name'>wait `[кадры]`</td>
      <td className='desc'>
        <div className='text'>
          Специальная команда-модификатор, которая создаёт паузу в выполнении *последовательности команд* на указанное количество кадров<br/><br/>
          В отличие от старого поведения, где для паузы приходилось писать `wait; wait; wait;`, теперь можно задать количество кадров числом<br/>
          • `wait` — пауза на 1 кадр<br/>
          • `wait 10` — пауза на 10 кадров<br/><br/>
          Подходит для создания длинных скриптов<br/>
          *Например*<br/>
          `alias fastbuy "buy; wait 30; slot4; wait 30; slot2"`<br/>
          :::info
          `wait` — это не стандартная команда<br/>Она обрабатывается напрямую командным буфером и не будет отображаться в автодополнении консоли
          :::
        </div>
        <div className='desc-meta'>
          <VersionBadge type='changed' since='2.0.0.0'/>
        </div>
      </td>
    </tr>
    <tr id='exec'>
      <td className='name'>exec `<filename.cfg>`</td>
      <td className='desc'>Выполняет команды из указанного конфигурационного файла</td>
    </tr>
    <tr id='writecfg'>
      <td className='name'>writecfg `<filename.cfg>`</td>
      <td className='desc'>Сохраняет текущие настройки (квары) в указанный файл</td>
    </tr>
    <tr id='setinfo'>
      <td className='name'>setinfo `<key>` `<value>`</td>
      <td className='desc'>Устанавливает или изменяет значение в пользовательской `userinfo` строке<br/><br/>*Например*<br/>`setinfo "_vgui_menus" "0"`</td>
    </tr>
  </tbody>
</Table>

## Игрок и Геймплей
<Table>
  <thead><tr><th>Команда</th><th>Описание</th></tr></thead>
  <tbody>
    <tr id='buy'>
      <td className='name'>buy</td>
      <td className='desc'>Открыть меню покупки оружия/экипировки</td>
    </tr>
    <tr id='autobuy'>
      <td className='name'>autobuy</td>
      <td className='desc'>Автоматически закупить экипировку согласно конфигу `autobuy.txt`</td>
    </tr>
    <tr id='rebuy'>
      <td className='name'>rebuy</td>
      <td className='desc'>Закупить экипировку, которое было в предыдущем раунде</td>
    </tr>
    <tr id='say'>
      <td className='name'>say `<message>`</td>
      <td className='desc'>Отправляет сообщение в общий чат</td>
    </tr>
    <tr id='say_team'>
      <td className='name'>say_team `<message>`</td>
      <td className='desc'>Отправляет сообщение в командный чат</td>
    </tr>
    <tr id='tell'>
      <td className='name'>tell `<player_name>` `<message>`</td>
      <td className='desc'>Отправляет личное сообщение игроку (если разрешено сервером)</td>
    </tr>
    <tr id='slot1'>
      <td className='name'>slot1 — slot10</td>
      <td className='desc'>Выбирает соответствующий слот оружия</td>
    </tr>
    <tr id='invnext'>
      <td className='name'>invnext</td>
      <td className='desc'>Выбрать следующее оружие в инвентаре</td>
    </tr>
    <tr id='invprev'>
      <td className='name'>invprev</td>
      <td className='desc'>Выбрать предыдущее оружие в инвентаре</td>
    </tr>
    <tr id='lookatweapon'>
      <td className='name'>lookatweapon</td>
      <td className='desc'><div className='text'>Проигрывает анимацию осмотра оружия в руках</div><div className='desc-meta'><VersionBadge type='added' since='2.3.3.0'/></div></td>
    </tr>
    <tr id='trackplayer'>
      <td className='name'>trackplayer</td>
      <td className='desc'><div className='text'>Начинает отслеживание по наведению на игрока<br/>Отслеживаемые игроки подсвечиваются на радаре и над их головой отображается имя (если включен `hud_headname` и они находятся в одной команде) <a className='ref-link' href='/docs/refs/configuration/cvars#hud_headname'/></div><div className='desc-meta'><VersionBadge type='changed' since='2.5.0.0'/></div></td>
    </tr>
    <tr id='clearplayers'>
      <td className='name'>clearplayers</td>
      <td className='desc'>Сбрасывает список отслеживаемых игроков, убирая все метки</td>
    </tr>
    <tr id='adjust_crosshair'>
      <td className='name'>adjust_crosshair `[0-9]`</td>
      <td className='desc'>
        <div className='text'>
          Циклически меняет цвет прицела или устанавливает конкретный режим<br/><br/>
          *Без аргумента*<br/>
            Переключает по кругу 5 стандартных **непрозрачных** цветов<br/><br/>
          *С аргументом `[0-9]`*<br/>
            Позволяет напрямую установить один из 10 режимов для гибкой настройки через скрипты и алиасы<br/>
              *0-4* Устанавливает один из 5 стандартных цветов в непрозрачном режиме<br/>
              *5-9* Устанавливает те же 5 цветов, но в **полупрозрачном** режиме (активирует `cl_crosshairusealpha 1`)
        </div>
        <div className='desc-meta'>
          <VersionBadge type='changed' since='2.3.6.0'/>
        </div>
      </td>
    </tr>
    <tr id='drawradar'>
      <td className='name'>drawradar<br/>hideradar</td>
      <td className='desc'>Показывает / скрывает радар на HUD</td>
    </tr>
    <tr id='cancelselect'>
      <td className='name'>cancelselect</td>
      <td className='desc'>Отменяет выбор в меню (например, меню выбора команды)</td>
    </tr>
    <tr id='messagemode'>
      <td className='name'>messagemode `<type>`</td>
      <td className='desc'>Открывает поле для ввода сообщения в общий чат</td>
    </tr>
    <tr id='messagemode2'>
      <td className='name'>messagemode2 `<type>`</td>
      <td className='desc'>Открывает поле для ввода сообщения в командный чат</td>
    </tr>
    <tr id='force_centerview'>
      <td className='name'>force_centerview</td>
      <td className='desc'>Мгновенно центрирует вид игрока (взгляд прямо вперед)</td>
    </tr>
    <tr id='togglescores'>
      <td className='name'>togglescores</td>
      <td className='desc'>Переключает отображение таблицы счета (показать/скрыть)</td>
    </tr>
    <tr id='voicerecord_toggle'>
      <td className='name'>voicerecord_toggle `<on/off>`</td>
      <td className='desc'>Переключает состояние записи с микрофона (начинает/останавливает)<br/>Удобно для создания 'переключаемого' голосового чата вместо 'удерживаемого' <a className='ref-link' href='/docs/refs/configuration/commands#voicerecord'/></td>
    </tr>
    <tr id='voice_showbanned'>
      <td className='name'>voice_showbanned</td>
      <td className='desc'>Показывает список игроков, которым вы заблокировали голосовой чат</td>
    </tr>
    <tr id='snapto'>
      <td className='name'>snapto</td>
      <td className='desc'>Переключает квар `cam_snapto` для камеры от третьего лица</td>
    </tr>
    <tr id='kill'>
      <td className='name'>kill</td>
      <td className='desc'>Убивает вашего персонажа (самоубийство)</td>
    </tr>
    <tr id='god'>
      <td className='name'>god</td>
      <td className='desc'>Включает режим бессмертия<br/>Требуется `sv_cheats 1`</td>
    </tr>
    <tr id='noclip'>
      <td className='name'>noclip</td>
      <td className='desc'>Включает режим полета сквозь стены<br/>Требуется `sv_cheats 1`</td>
    </tr>
    <tr id='fly'>
      <td className='name'>fly</td>
      <td className='desc'>Включает режим полета<br/>В отличие от `noclip`, игрок остается 'твердым' и может сталкиваться с объектами<br/>Требует `sv_cheats 1`</td>
    </tr>
    <tr id='notarget'>
      <td className='name'>notarget</td>
      <td className='desc'>Делает игрока невидимым для NPC<br/>Требуется `sv_cheats 1`</td>
    </tr>
    <tr id='impulse'>
      <td className='name'>impulse `<number>`</td>
      <td className='desc'>Выполняет игровое действие по числовому коду<br/><br/>*Например*<br/>`impulse 101` Дает 16000 денег (требует `sv_cheats 1`)<br/>`impulse 201` Наносит спрей-логотип</td>
    </tr>
    <tr id='dropclient'>
      <td className='name'>dropclient</td>
      <td className='desc'>Отключает соединение от игрового сервера</td>
    </tr>
  </tbody>
</Table>

## Сеть и Подключение
<Table>
  <thead><tr><th>Команда</th><th>Описание</th></tr></thead>
  <tbody>
    <tr id='connect'>
      <td className='name'>connect `<ip:port>`</td>
      <td className='desc'>Подключиться к указанному игровому серверу<br/><br/>*Например*<br/>`connect 123.45.67.89:27015`</td>
    </tr>
    <tr id='reconnect'>
      <td className='name'>reconnect</td>
      <td className='desc'>Обновляет соединение с текущим сервером без полного переподключения<br/>Действует во время смены карты, ручное выполнение приведет к полному переподключению</td>
    </tr>
    <tr id='retry'>
      <td className='name'>retry</td>
      <td className='desc'>Переподключиться к последнему серверу</td>
    </tr>
    <tr id='disconnect'>
      <td className='name'>disconnect</td>
      <td className='desc'>Отключиться от текущего сервера</td>
    </tr>
    <tr id='ping'>
      <td className='name'>ping</td>
      <td className='desc'>Показывать в консоли текущий пинг до сервера</td>
    </tr>
    <tr id='pingservers'>
      <td className='name'>pingservers</td>
      <td className='desc'>Отправляет ping-запросы кэшированным локальным серверам для обновления информации о них</td>
    </tr>
    <tr id='list'>
      <td className='name'>list</td>
      <td className='desc'>Показывает список кешированных локальных серверов в консоли<br/>Используйте `slist`, чтобы обновить список</td>
    </tr>
    <tr id='slist'>
      <td className='name'>slist</td>
      <td className='desc'>Искать и показывать в консоль список серверов в локальной сети (LAN)</td>
    </tr>
    <tr id='upload'>
      <td className='name'>upload `<!MD5...>`</td>
      <td className='desc'>Загружает кастомный спрей на сервер для отображения другим игрокам</td>
    </tr>
    <tr id='fullupdate'>
      <td className='name'>fullupdate</td>
      <td className='desc'>Запрашивает у сервера полное (не дельта) обновление состояния всех объектов во время начала записи демо<br/>Это делается для того, чтобы в демо в начале кадра была полная информация о состоянии всех объектов</td>
    </tr>
  </tbody>
</Table>

## Демо-записи и Видео
<Table>
  <thead><tr><th>Команда</th><th>Описание</th></tr></thead>
  <tbody>
    <tr id='record'>
      <td className='name'>record `<filename>`</td>
      <td className='desc'>Начинает запись демо-файла (`.dem`)</td>
    </tr>
    <tr id='appenddemo'>
      <td className='name'>appenddemo `<filename>`</td>
      <td className='desc'>Продолжает запись в уже существующий демо-файл</td>
    </tr>
    <tr id='stop'>
      <td className='name'>stop</td>
      <td className='desc'>Останавливает запись демо</td>
    </tr>
    <tr id='viewdemo'>
      <td className='name'>viewdemo `<filename>`</td>
      <td className='desc'>Запускает воспроизведение демо-файла с расширенным интерфейсом (пауза, перемотка)</td>
    </tr>
    <tr id='playdemo'>
      <td className='name'>playdemo `<filename>`</td>
      <td className='desc'>Запускает воспроизведение демо-файла (устаревший способ)</td>
    </tr>
    <tr id='listdemo'>
      <td className='name'>listdemo `<filename>`</td>
      <td className='desc'>Показывает информацию о содержимом демо-файла</td>
    </tr>
    <tr id='startmovie'>
      <td className='name'>startmovie `<filename>` `<fps>`</td>
      <td className='desc'>Начинает запись последовательности TGA-кадров для создания видео</td>
    </tr>
    <tr id='endmovie'>
      <td className='name'>endmovie</td>
      <td className='desc'>Останавливает запись кадров</td>
    </tr>
    <tr id='startdemos'>
      <td className='name'>startdemos `<demo1> <demo2> ...`</td>
      <td className='desc'>Запускает проигрывание последовательности демо-файлов</td>
    </tr>
    <tr id='demos'>
      <td className='name'>demos</td>
      <td className='desc'>Повторно проигрывает последовательность из демо-файлов `startdemos` <a className='ref-link' href='/docs/refs/configuration/commands#startdemos'/></td>
    </tr>
    <tr id='stopdemo'>
      <td className='name'>stopdemo</td>
      <td className='desc'>Останавливает воспроизведение демо</td>
    </tr>
    <tr id='removedemo'>
      <td className='name'>removedemo `<demoname>` `<segment to remove>`</td>
      <td className='desc'>Удаляет сегмент из демо-файла<br/>Используется при редактировании демо</td>
    </tr>
    <tr id='dem_start'>
      <td className='name'>dem_start</td>
      <td className='desc'>Перемотать в самое начало во время воспроизведения демо через `viewdemo`</td>
    </tr>
    <tr id='dem_pause'>
      <td className='name'>dem_pause `<0|1>`</td>
      <td className='desc'>Ставит на паузу или возобновляет воспроизведение демо</td>
    </tr>
    <tr id='dem_jump'>
      <td className='name'>dem_jump `<time>`</td>
      <td className='desc'>Перематывает демо на указанный тик</td>
    </tr>
    <tr id='dem_forcehltv'>
      <td className='name'>dem_forcehltv `<0|1>`</td>
      <td className='desc'>Принудительно рассматривает демо как HLTV-запись, даже если это POV-демо<br/>Выполнять это нужно перед загрузкой POV-демо</td>
    </tr>
    <tr id='dem_speed'>
      <td className='name'>dem_speed `<speed>`</td>
      <td className='desc'>Устанавливает скорость воспроизведения демо</td>
    </tr>
    <tr id='dem_save'>
      <td className='name'>dem_save `<filename>`</td>
      <td className='desc'>Сохраняет отрезок демо-записи в новый файл</td>
    </tr>
  </tbody>
</Table>

## Сервер и Администрирование
<Table>
  <thead><tr><th>Команда</th><th>Описание</th></tr></thead>
  <tbody>
    <tr id='map'>
      <td className='name'>map `<mapname>`</td>
      <td className='desc'>Запускает локальный сервер с указанной картой<br/><br/>*Например*<br/>`map de_dust2`</td>
    </tr>
    <tr id='changelevel'>
      <td className='name'>changelevel `<mapname>`</td>
      <td className='desc'>Меняет карту на сервере, перенося всех игроков</td>
    </tr>
    <tr id='changelevel2'>
      <td className='name'>changelevel2 `<mapname>`</td>
      <td className='desc'>Переходит на указанную карту в одиночной игре, сохраняя состояние локального игрока</td>
    </tr>
    <tr id='career'>
      <td className='name'>career `<mapname>`</td>
      <td className='desc'>Запускает карту в режиме 'Карьера' (используется в CS: Condition Zero)</td>
    </tr>
    <tr id='restart'>
      <td className='name'>restart</td>
      <td className='desc'>Перезапускает текущую карту с самого начала</td>
    </tr>
    <tr id='kick'>
      <td className='name'>kick `<name/#userid>` `[причина]`</td>
      <td className='desc'>Выкидывает игрока с сервера</td>
    </tr>
    <tr id='banid'>
      <td className='name'>banid `<time>` `<steamid|#userid>` `[kick]`</td>
      <td className='desc'>Банит игрока по SteamID<br/>Время 0 — навсегда</td>
    </tr>
    <tr id='addip'>
      <td className='name'>addip `<time>` `<ip>`</td>
      <td className='desc'>Банит IP-адрес<br/>Время 0 — навсегда</td>
    </tr>
    <tr id='removeid'>
      <td className='name'>removeid `<steamid>`</td>
      <td className='desc'>Снимает бан с SteamID</td>
    </tr>
    <tr id='removeip'>
      <td className='name'>removeip `<ip>`</td>
      <td className='desc'>Снимает бан с IP-адреса</td>
    </tr>
    <tr id='listid'>
      <td className='name'>listid</td>
      <td className='desc'>Показывает список забаненных по SteamID</td>
    </tr>
    <tr id='listip'>
      <td className='name'>listip</td>
      <td className='desc'>Показывает список забаненных по IP</td>
    </tr>
    <tr id='writeid'>
      <td className='name'>writeid</td>
      <td className='desc'>Сохраняет список SteamID банов в файл `banned.cfg` <a className='ref-link' href='/docs/refs/configuration/cvars#bannedcfgfile'/></td>
    </tr>
    <tr id='writeip'>
      <td className='name'>writeip</td>
      <td className='desc'>Сохраняет список IP банов в файл `listip.cfg` <a className='ref-link' href='/docs/refs/configuration/cvars#listipcfgfile'/></td>
    </tr>
    <tr id='maxplayers'>
      <td className='name'>maxplayers `<number>`</td>
      <td className='desc'>Устанавливает максимальное количество слотов для игроков</td>
    </tr>
    <tr id='stat'>
      <td className='name'>stat</td>
      <td className='desc'>Отформатированный аналог команды `status`</td>
    </tr>
    <tr id='status'>
      <td className='name'>status</td>
      <td className='desc'>Выводит в консоль информацию о сервере — карту, список игроков, их SteamID, пинг и т.д.</td>
    </tr>
    <tr id='stats'>
      <td className='name'>stats</td>
      <td className='desc'>Выводит статистику производительности сервера (CPU, FPS, Uptime и т.д.)</td>
    </tr>
    <tr id='user'>
      <td className='name'>user `<name|#userid>`</td>
      <td className='desc'>Показывает `userinfo` у конкретного игрока</td>
    </tr>
    <tr id='users'>
      <td className='name'>users</td>
      <td className='desc'>Показывает список игроков на сервере</td>
    </tr>
    <tr id='rcon'>
      <td className='name'>rcon `<command>`</td>
      <td className='desc'>Отправляет команду на удаленный сервер через RCON<br/>Требует предварительной установки `rcon_password` <a className='ref-link' href='/docs/refs/configuration/cvars#rcon_password'/></td>
    </tr>
    <tr id='log'>
      <td className='name'>log `<on|off>`</td>
      <td className='desc'>Включает или выключает логирование сервера</td>
    </tr>
    <tr id='shutdownserver'>
      <td className='name'>shutdownserver</td>
      <td className='desc'>Закрывает клиент и любой локальный сервер, запущенный на нем</td>
    </tr>
    <tr id='listen'>
      <td className='name'>listen `<ip>`</td>
      <td className='desc'>Включает/выключает listen-сервер на указанном IP</td>
    </tr>
    <tr id='logaddress'>
      <td className='name'>logaddress `<ip:port>`</td>
      <td className='desc'>Устанавливает один удаленный адрес для отправки логов сервера</td>
    </tr>
    <tr id='logaddress_add'>
      <td className='name'>logaddress_add `<ip:port>`</td>
      <td className='desc'>Добавляет удаленный адрес для отправки логов сервера</td>
    </tr>
    <tr id='logaddress_del'>
      <td className='name'>logaddress_del `<ip:port>`</td>
      <td className='desc'>Удаляет адрес из списка получателей логов</td>
    </tr>
    <tr id='maps'>
      <td className='name'>maps `[фильтр]`</td>
      <td className='desc'>Показывает список доступных карт<br/><br/>*Например*<br/>`maps de_*`</td>
    </tr>
    <tr id='motd'>
      <td className='name'>motd</td>
      <td className='desc'>Выводит содержимое файла `motd.txt` в консоль</td>
    </tr>
    <tr id='motd_write'>
      <td className='name'>motd_write `<content>`</td>
      <td className='desc'>Записывает указанный текст в `motd.txt`</td>
    </tr>
    <tr id='resetrcon'>
      <td className='name'>resetrcon</td>
      <td className='desc'>Сбрасывает счетчики неудачных RCON-попыток</td>
    </tr>
    <tr id='hpkextract'>
      <td className='name'>hpkextract `<name>` `[all | single index]`</td>
      <td className='desc'>Извлекает содержимое из файла `custom.hpk`, который хранит спреи игроков</td>
    </tr>
    <tr id='hpklist'>
      <td className='name'>hpklist `<name>`</td>
      <td className='desc'>Показывает список файлов внутри `custom.hpk`</td>
    </tr>
    <tr id='hpkremove'>
      <td className='name'>hpkremove `<name>` `[index]`</td>
      <td className='desc'>Удаляет файл из `custom.hpk`</td>
    </tr>
    <tr id='hpkval'>
      <td className='name'>hpkval `<name>`</td>
      <td className='desc'>Проверяет целостность `custom.hpk`</td>
    </tr>
    <tr id='pause'>
      <td className='name'>pause</td>
      <td className='desc'>Ставит игру на сервере на паузу или снимает с нее<br/>Игроки находящиеся на игровом сервере тоже могут вызывать эту команду, если `pausable` установлен в `1` <a className='ref-link' href='/docs/refs/configuration/cvars#pausable'/></td>
    </tr>
    <tr id='setpause'>
      <td className='name'>setpause</td>
      <td className='desc'>Устанавливает паузу на сервере</td>
    </tr>
    <tr id='unpause'>
      <td className='name'>unpause</td>
      <td className='desc'>Снимает паузу на сервере</td>
    </tr>
    <tr id='setpos'>
      <td className='name'>setpos `<x>` `<y>` `[z]` `[yaw pitch roll]`</td>
      <td className='desc'><div className='text'>Мгновенно перемещает игрока в указанные координаты<br/>Требует `sv_cheats 1`</div><div className='desc-meta'><VersionBadge type='added' since='2.3.0.0'/></div></td>
    </tr>
    <tr id='heartbeat'>
      <td className='name'>heartbeat</td>
      <td className='desc'><div className='text'>Отправляет 'heartbeat' на мастер-серверы Steam</div><div className='desc-meta'><VersionBadge type='deprecated' since='2.0.0.0'/></div></td>
    </tr>
    <tr id='setmaster'>
      <td className='name'>setmaster `<enable/disable>`</td>
      <td className='desc'><div className='text'>Устаревшая команда для работы с мастер-серверами</div><div className='desc-meta'><VersionBadge type='deprecated' since='2.0.0.0'/></div></td>
    </tr>
  </tbody>
</Table>

## Наблюдение и Медиа
<Table>
  <thead><tr><th>Команда</th><th>Описание</th></tr></thead>
  <tbody>
    <tr id='play'>
      <td className='name'>play `<path/to/file.wav>`</td>
      <td className='desc'>Проигрывает указанный звуковой файл</td>
    </tr>
    <tr id='playvol'>
      <td className='name'>playvol `<path>` `<volume>`</td>
      <td className='desc'>Проигрывает звук с указанной громкостью (от 0.0 до 1.0)</td>
    </tr>
    <tr id='stopsound'>
      <td className='name'>stopsound</td>
      <td className='desc'>Немедленно останавливает воспроизведение всех звуков в игре</td>
    </tr>
    <tr id='soundfade'>
      <td className='name'>soundfade `<volume>` `<fadetime>`</td>
      <td className='desc'>Плавно изменяет общую громкость до указанного значения за указанное время в секундах</td>
    </tr>
    <tr id='speak'>
      <td className='name'>speak `<sentence>`<br/>spk `<sentence>`</td>
      <td className='desc'>Проигрывает составное предложение из нескольких звуков</td>
    </tr>
    <tr id='cd'>
      <td className='name'>cd</td>
      <td className='desc'>Управляет CD/MP3 плеером<br/><br/>
      `mp3track <track_id>` — воспроизведение MP3-трека<br/>
      `play <track_id>` — воспроизведение файла из компакт-диска<br/>
      `playfile <file_name>` — воспроизведение MP3 файла<br/>
      `loop <track_id>` — зацикливание трека из компакт-диска<br/>
      `loopfile <file_name>` — зацикливание MP3 файла<br/>
      `stop` — остановить воспроизведение<br/>
      `fadeout` — плавное затухание текущего трека, время полного отключения определяется кваром `MP3FadeTime`<br/>
      `pause` — приостановить воспроизведение<br/>
      `resume` — продолжить воспроизведение<br/>
      `on` — включить звук<br/>
      `off` — выключить звук<br/>
      `reset` — сбросить позиции треков<br/>
      `remap` `<track_id1>` `<track_id2>` `...` — назначить порядок треков из компакт-диска<br/>
      `close` — закрыть дисковод<br/>
      `mp3info` — Показать доп. информацию о текущем MP3 треке<br/>
      `eject` — открыть дисковод<br/>
      `info` — Показать доп. информацию</td>
    </tr>
    <tr id='mp3'>
      <td className='name'>mp3</td>
      <td className='desc'>Управляет MP3 плеером<br/><br/>
      `play <track_id>` — воспроизведение файла из компакт-диска<br/>
      `playfile <file_name>` — воспроизведение MP3 файла<br/>
      `loop <track_id>` — зацикливание трека из компакт-диска<br/>
      `loopfile <file_name>` — зацикливание MP3 файла<br/>
      `stop` — остановить воспроизведение<br/></td>
    </tr>
    <tr id='screenshot'>
      <td className='name'>screenshot</td>
      <td className='desc'>Делает скриншот в формате TGA</td>
    </tr>
    <tr id='snapshot'>
      <td className='name'>snapshot</td>
      <td className='desc'>Делает скриншот в формате BMP</td>
    </tr>
    <tr id='thirdperson'>
      <td className='name'>thirdperson</td>
      <td className='desc'>Включает вид от третьего лица<br/>Требует `sv_cheats 1`</td>
    </tr>
    <tr id='firstperson'>
      <td className='name'>firstperson</td>
      <td className='desc'>Возвращает вид от первого лица</td>
    </tr>
    <tr id='commentator'>
      <td className='name'>commentator `<0|1>`</td>
      <td className='desc'>Включает (1) или выключает (0) режим комментатора при просмотре через HLTV</td>
    </tr>
    <tr id='spec_help'>
      <td className='name'>spec_help</td>
      <td className='desc'>Показывает справку по командам режима наблюдателя</td>
    </tr>
    <tr id='spec_menu'>
      <td className='name'>spec_menu `<0|1>`</td>
      <td className='desc'>Открывает меню настроек режима наблюдателя</td>
    </tr>
    <tr id='spec_mode'>
      <td className='name'>spec_mode `<mode>` `[pip_mode]`</td>
      <td className='desc'>Переключает режим камеры наблюдателя (от первого лица, от третьего, свободный полет)</td>
    </tr>
    <tr id='spec_toggleinset'>
      <td className='name'>spec_toggleinset</td>
      <td className='desc'>Включает/выключает режим 'картинка в картинке' (PIP) для спектатора</td>
    </tr>
    <tr id='spec_decal'>
      <td className='name'>spec_decal</td>
      <td className='desc'><div className='text'>Наносит спрей-логотип в режиме наблюдателя</div><div className='desc-meta'><VersionBadge type='deprecated' since='2.0.0.0'/></div></td>
    </tr>
  </tbody>
</Table>

## Команды действий (для биндов)

:::info
Команды в этой таблице существуют в двух вариантах: с префиксом \
`+` — действие начинается (клавиша зажата) \
`-` — действие заканчивается (клавиша отпущена) \
Они предназначены для привязки к клавишам через команду `bind` \
 \
*Например:* \
`bind mouse1 +attack`
:::

<Table>
  <thead><tr><th>Действие</th><th>Описание</th></tr></thead>
  <tbody>
    <tr id='attack'>
      <td className='name'>attack</td><td className='desc'>Атака основным режимом оружия</td>
    </tr>
    <tr id='attack2'>
      <td className='name'>attack2</td><td className='desc'>Атака альтернативным режимом оружия</td>
    </tr>
    <tr id='forward'>
      <td className='name'>forward</td><td className='desc'>Движение вперед</td>
    </tr>
    <tr id='back'>
      <td className='name'>back</td><td className='desc'>Движение назад</td>
    </tr>
    <tr id='moveleft'>
      <td className='name'>moveleft</td><td className='desc'>Шаг влево (стрейф)</td>
    </tr>
    <tr id='moveright'>
      <td className='name'>moveright</td><td className='desc'>Шаг вправо (стрейф)</td>
    </tr>
    <tr id='moveup'>
      <td className='name'>moveup</td><td className='desc'>Движение вверх (по лестнице, в воде)</td>
    </tr>
    <tr id='movedown'>
      <td className='name'>movedown</td><td className='desc'>Движение вниз (по лестнице, в воде)</td>
    </tr>
    <tr id='left'>
      <td className='name'>left</td><td className='desc'>Поворот влево (с клавиатуры)</td>
    </tr>
    <tr id='right'>
      <td className='name'>right</td><td className='desc'>Поворот вправо (с клавиатуры)</td>
    </tr>
    <tr id='lookup'>
      <td className='name'>lookup</td><td className='desc'>Посмотреть вверх (с клавиатуры)</td>
    </tr>
    <tr id='lookdown'>
      <td className='name'>lookdown</td><td className='desc'>Посмотреть вниз (с клавиатуры)</td>
    </tr>
    <tr id='jump'>
      <td className='name'>jump</td><td className='desc'>Прыжок</td>
    </tr>
    <tr id='duck'>
      <td className='name'>duck</td><td className='desc'>Приседание</td>
    </tr>
    <tr id='reload'>
      <td className='name'>reload</td><td className='desc'>Перезарядка оружия</td>
    </tr>
    <tr id='use'>
      <td className='name'>use</td><td className='desc'>Использовать объект (кнопки, двери)</td>
    </tr>
    <tr id='speed'>
      <td className='name'>speed</td><td className='desc'>Медленная ходьба (walk)</td>
    </tr>
    <tr id='strafe'>
      <td className='name'>strafe</td><td className='desc'>Режим стрейфа, при котором движение мыши влево/вправо заставляет двигаться боком</td>
    </tr>
    <tr id='mlook'>
      <td className='name'>mlook</td><td className='desc'>Разрешает управление обзором по вертикали с помощью мыши</td>
    </tr>
    <tr id='klook'>
      <td className='name'>klook</td><td className='desc'>Разрешает управление обзором с помощью клавиатуры</td>
    </tr>
    <tr id='jlook'>
      <td className='name'>jlook</td><td className='desc'>Разрешает управление обзором с помощью джойстика</td>
    </tr>
    <tr id='voicerecord'>
      <td className='name'>voicerecord</td><td className='desc'>Активация микрофона для голосового чата</td>
    </tr>
    <tr id='showscores'>
      <td className='name'>showscores<br/>score</td><td className='desc'>Показать таблицу счета</td>
    </tr>
    <tr id='commandmenu'>
      <td className='name'>commandmenu</td><td className='desc'>Показать меню для быстрых настроек</td>
    </tr>
    <tr id='camdistance'>
      <td className='name'>camdistance<br/>camin<br/>camout<br/>camyawleft<br/>camyawright<br/>campitchup<br/>campitchdown<br/>cammousemove</td><td className='desc'>Команды для управления камерой в режиме от третьего лица</td>
    </tr>
    <tr id='alt1'>
      <td className='name'>alt1</td><td className='desc'>Альтернативное действие, обычно используется для особых способностей в модах</td>
    </tr>
    <tr id='graph'>
      <td className='name'>graph</td><td className='desc'>Показывает график производительности (`net_graph`)</td>
    </tr>
    <tr id='break'>
      <td className='name'>break</td><td className='desc'><div className='text'>Устаревшая команда<br/>Ничего не делает</div><div className='desc-meta'><VersionBadge type='deprecated' since='2.0.0.0'/></div></td>
    </tr>
    <tr id='nvgadjust'>
      <td className='name'>nvgadjust</td>
      <td className='desc'>
        <div className='text'>
          Регулирует яркость (прозрачность) эффекта прибора ночного видения, когда он активен<br/>`+nvgadjust` увеличивает яркость<br/>`-nvgadjust` уменьшает<br/>Эта команда — наследие эпохи ЭЛТ (CRT) мониторов<br/>В то время яркость и контрастность сильно отличались от модели к модели, и стандартное значение могло быть слишком темным<br/>Команда позволяла игрокам откалибровать яркость ПНВ под свой конкретный монитор<br/>В современных условиях это больше не используется и является устаревшим
        </div>
        <div className='desc-meta'>
          <VersionBadge type='deprecated' since='2.0.0.0'/>
        </div>
      </td>
    </tr>
  </tbody>
</Table>

## Консоль
<Table>
  <thead><tr><th>Команда</th><th>Описание</th></tr></thead>
  <tbody>
    <tr id='clear'>
      <td className='name'>clear</td>
      <td className='desc'>Очистить консоль от текста</td>
    </tr>
    <tr id='toggleconsole'>
      <td className='name'>toggleconsole</td>
      <td className='desc'>Открывает или закрывает консоль</td>
    </tr>
    <tr id='hideconsole'>
      <td className='name'>hideconsole</td>
      <td className='desc'>Скрывает консоль</td>
    </tr>
    <tr id='echo'>
      <td className='name'>echo `<text>`</td>
      <td className='desc'>Напечатать указанный текст в консоль</td>
    </tr>
    <tr id='cvarlist'>
      <td className='name'>cvarlist `[template]`</td>
      <td className='desc'>Вывести список всех консольных переменных (кваров)<br/>Можно использовать шаблон для поиска</td>
    </tr>
    <tr id='cmdlist'>
      <td className='name'>cmdlist `[template]`</td>
      <td className='desc'>Вывести список всех консольных команд</td>
    </tr>
    <tr id='find'>
      <td className='name'>find `<string>`</td>
      <td className='desc'><div className='text'>Найти команды и переменные, содержащие указанный текст в названии или описании</div><div className='desc-meta'><VersionBadge type='added' since='2.0.0.0'/></div></td>
    </tr>
    <tr id='condump'>
      <td className='name'>condump</td>
      <td className='desc'>Записывает весь текст из консоли в файл `condump.txt`</td>
    </tr>
  </tbody>
</Table>

## Система
<Table>
  <thead><tr><th>Команда</th><th>Описание</th></tr></thead>
  <tbody>
    <tr id='quit'>
      <td className='name'>quit<br/>exit</td>
      <td className='desc'>Выйти из игры</td>
    </tr>
    <tr id='version'>
      <td className='name'>version</td>
      <td className='desc'>Показывает в консоли информацию о версии движка и сборке</td>
    </tr>
    <tr id='gamedir'>
      <td className='name'>gamedir `<gamedir>`</td>
      <td className='desc'>Показывает или изменяет текущую игровую директорию (мод)</td>
    </tr>
    <tr id='save'>
      <td className='name'>save `<filename>`</td>
      <td className='desc'>Сохраняет текущую игру (для одиночного режима)</td>
    </tr>
    <tr id='load'>
      <td className='name'>load `<filename>`</td>
      <td className='desc'>Загружает сохраненную игру</td>
    </tr>
    <tr id='autosave'>
      <td className='name'>autosave</td>
      <td className='desc'>Выполняет автосохранение (для одиночного режима)</td>
    </tr>
    <tr id='reload'>
      <td className='name'>reload</td>
      <td className='desc'>Перезагружает последнее сохранение</td>
    </tr>
    <tr id='escape'>
      <td className='name'>escape</td>
      <td className='desc'><div className='text'>Симулирует нажатие клавиши Escape, обычно используется для закрытия меню</div><div className='desc-meta'><VersionBadge type='deprecated' since='2.0.0.0'/></div></td>
    </tr>
  </tbody>
</Table>

## Отладка и Разработка
<Table>
  <thead><tr><th>Команда</th><th>Описание</th></tr></thead>
  <tbody>
    <tr id='cl_messages'>
      <td className='name'>cl_messages</td>
      <td className='desc'><div className='text'>Выводит статистику по полученным сетевым сообщениям, включая детальную расшифровку `svc_temp_entity` и `UserMessage`</div><div className='desc-meta'><VersionBadge type='changed' since='2.0.0.0'/></div></td>
    </tr>
    <tr id='entities'>
      <td className='name'>entities</td>
      <td className='desc'><div className='text'>Выводит список всех 'сущностей' (entities) на сервере</div><div className='desc-meta'><VersionBadge type='changed' since='2.0.0.0'/></div></td>
    </tr>
    <tr id='condebug'>
      <td className='name'>condebug</td>
      <td className='desc'>Включает запись всей консоли в файл `qconsole.log`</td>
    </tr>
    <tr id='contimes'>
      <td className='name'>contimes</td>
      <td className='desc'>Показывает текст с временем выполнения консольных команд</td>
    </tr>
    <tr id='decallist'>
      <td className='name'>decallist</td>
      <td className='desc'><div className='text'>Выводит список активных декалей на карте</div><div className='desc-meta'><VersionBadge type='added' since='2.2.1.0'/></div></td>
    </tr>
    <tr id='delta_clear'>
      <td className='name'>delta_clear</td>
      <td className='desc'>Сбрасывает статистику дельта-сжатия</td>
    </tr>
    <tr id='delta_stats'>
      <td className='name'>delta_stats</td>
      <td className='desc'>Показывает статистику по дельта-сжатию сетевых данных</td>
    </tr>
    <tr id='dev_overview_takeshot'>
      <td className='name'>dev_overview_takeshot</td>
      <td className='desc'><div className='text'>Делает скриншот карты сверху для `overview` и создает `*.txt` файл с координатами</div><div className='desc-meta'><VersionBadge type='added' since='2.5.0.0'/></div></td>
    </tr>
    <tr id='envmap'>
      <td className='name'>envmap</td>
      <td className='desc'>Создает 6 скриншотов текущей сцены для генерации карт окружения (cubemaps)</td>
    </tr>
    <tr id='fullserverinfo'>
      <td className='name'>fullserverinfo `<complete info string>`</td>
      <td className='desc'>Выводит в консоль серверную `userinfo` строку</td>
    </tr>
    <tr id='http_tracking'>
      <td className='name'>http_tracking</td>
      <td className='desc'><div className='text'>Отладочная информация от внутренней реализации ISteamHTTP</div><div className='desc-meta'><VersionBadge type='added' since='2.0.0.0'/></div></td>
    </tr>
    <tr id='httpstop'>
      <td className='name'>httpstop</td>
      <td className='desc'>Сбрасывает кэш FastDL, заставляя клиент снова попытаться скачать необходимые файлы на сервере быстрой загрузки</td>
    </tr>
    <tr id='rescount'>
      <td className='name'>rescount</td>
      <td className='desc'><div className='text'>Показывает количество предкэшированных ресурсов на сервере</div><div className='desc-meta'><VersionBadge type='added' since='2.5.6.0'/></div></td>
    </tr>
    <tr id='reslist'>
      <td className='name'>reslist `<sound | model | decal | generic | event>`</td>
      <td className='desc'><div className='text'>Выводит список всех предкэшированных ресурсов (звуки, модели и т.д.)</div><div className='desc-meta'><VersionBadge type='added' since='2.5.6.0'/></div></td>
    </tr>
    <tr id='localinfo'>
      <td className='name'>localinfo `<key>` `<value>`</td>
      <td className='desc'>Выводит в консоль отладочную информацию о локальном клиенте</td>
    </tr>
    <tr id='serverinfo'>
      <td className='name'>serverinfo `<key>` `<value>`</td>
      <td className='desc'>Показывает/устанавливает серверную `userinfo` строку</td>
    </tr>
    <tr id='showinfo'>
      <td className='name'>showinfo</td>
      <td className='desc'>Показывает `userinfo` сервера</td>
    </tr>
    <tr id='soundinfo'>
      <td className='name'>soundinfo</td>
      <td className='desc'>Показывает информацию о текущем звуковом устройстве и его состоянии</td>
    </tr>
    <tr id='waveplaylen'>
      <td className='name'>waveplaylen `<path/to/file.wav>`</td>
      <td className='desc'>Показывает длительность указанного `.wav` файла</td>
    </tr>
    <tr id='gg'>
      <td className='name'>gg `<filename>`</td>
      <td className='desc'>Запускает встроенный бенчмарк (Game Gauge), проигрывая демо и замеряя производительность</td>
    </tr>
    <tr id='timedemo'>
      <td className='name'>timedemo `<filename>`</td>
      <td className='desc'>Проигрывает демо-файл на максимальной скорости и выводит в консоль средний FPS</td>
    </tr>
    <tr id='timerefresh'>
      <td className='name'>timerefresh</td>
      <td className='desc'>Поворачивает камеру на 360 градусов, замеряя и выводя средний FPS</td>
    </tr>
    <tr id='pointfile'>
      <td className='name'>pointfile</td>
      <td className='desc'>Загружает `{map}.pts` файл, сгенерированный компилятором карт, чтобы показать 'утечки' (leaks) в геометрии</td>
    </tr>
    <tr id='getpos'>
      <td className='name'>getpos</td>
      <td className='desc'>
        <div className='text'>
          Выводит в консоль текущие координаты и углы обзора игрока<br/><br/>
          Показывает **серверную** позицию, полученную из последнего обновления от сервера<br/>Эти данные могут немного отличаться от того, что вы видите на экране из-за интерполяции<br/><br/>
          Вывод представлен в удобном для чтения виде `origin` и `angles`
        </div>
        <div className='desc-meta'>
          <VersionBadge type='added' since='2.5.0.0'/>
        </div>
      </td>
    </tr>
    <tr id='spec_pos'>
      <td className='name'>spec_pos</td>
      <td className='desc'>
        <div className='text'>
          Выводит в консоль текущие координаты и углы обзора в режиме наблюдателя<br/><br/>
          *По умолчанию* \
              Показывает **клиентскую** (визуальную) позицию камеры

          *С аргументом `2`* \
            `spec_pos 2` Показывает **серверную** позицию
        </div>
        <div className='desc-meta'>
          <VersionBadge type='changed' since='2.5.0.0'/>
        </div>
      </td>
    </tr>
    <tr id='cacheflush'>
      <td className='name'>cacheflush</td>
      <td className='desc'><div className='text'>Очищает кэш ресурсов, все звуки, модели и спрайты будут перезагружены при первом их появлении на карте<br/>Требует `sv_cheats 1`<br/>Old command name `flush`</div><div className='desc-meta'><VersionBadge type='changed' since='2.0.0.0'/></div></td>
    </tr>
    <tr id='cachelist'>
      <td className='name'>cachelist</td>
      <td className='desc'><div className='text'>Выводит в файл `mem.txt` список ресурсов, находящихся в кэше</div><div className='desc-meta'><VersionBadge type='added' since='2.0.0.0'/></div></td>
    </tr>
    <tr id='cachemodels'>
      <td className='name'>cachemodels</td>
      <td className='desc'><div className='text'>Выводит в файл `mem.txt` список моделей, которые в данный момент находятся в кэше памяти</div><div className='desc-meta'><VersionBadge type='added' since='2.0.0.0'/></div></td>
    </tr>
    <tr id='cachesounds'>
      <td className='name'>cachesounds</td>
      <td className='desc'><div className='text'>Выводит в файл `mem.txt` список звуков, которые в данный момент находятся в кэше памяти</div><div className='desc-meta'><VersionBadge type='added' since='2.0.0.0'/></div></td>
    </tr>
    <tr id='spritelist'>
      <td className='name'>spritelist `[all]`</td>
      <td className='desc'><div className='text'>Выводит список всех загруженных спрайтов</div><div className='desc-meta'><VersionBadge type='added' since='2.0.0.0'/></div></td>
    </tr>
    <tr id='soundlist'>
      <td className='name'>soundlist</td>
      <td className='desc'>Выводит список всех загруженных звуков</td>
    </tr>
    <tr id='hunklist'>
      <td className='name'>hunklist</td>
      <td className='desc'><div className='text'>Выводит в файл `mem.txt` информацию о распределении 'hunk' памяти</div><div className='desc-meta'><VersionBadge type='added' since='2.2.1.0'/></div></td>
    </tr>
    <tr id='mcache'>
      <td className='name'>mcache</td>
      <td className='desc'><div className='text'>Показывает список всех предкэшированных моделей на сервере</div><div className='desc-meta'><VersionBadge type='changed' since='2.0.0.0'/></div></td>
    </tr>
    <tr id='r_clearbeams'>
      <td className='name'>r_clearbeams</td>
      <td className='desc'><div className='text'>Удаляет все активные 'лучи' (beams) на карте</div><div className='desc-meta'><VersionBadge type='added' since='2.5.0.0'/></div></td>
    </tr>
    <tr id='r_cleardecals'>
      <td className='name'>r_cleardecals `[permanent]`</td>
      <td className='desc'><div className='text'>Очищает все временные декали (следы от пуль, кровь) с карты<br/>С аргументом `permanent` удаляет и постоянные декали на карте</div><div className='desc-meta'><VersionBadge type='added' since='2.3.2.0'/></div></td>
    </tr>
    <tr id='get_userinfo'>
      <td className='name'>@get_userinfo `<#userid|@index|name|all>`</td>
      <td className='desc'><div className='text'>Выводит в консоль полную `userinfo` строку для указанных игроков на сервере</div><div className='desc-meta'><VersionBadge type='added' since='2.5.0.0'/></div></td>
    </tr>
    <tr id='depot_dump'>
      <td className='name'>@depot_dump</td>
      <td className='desc'><div className='text'>Выводит в консоль список всех доступных тегов (версий) в репозитории обновлений</div><div className='desc-meta'><VersionBadge type='added' since='2.0.0.0'/></div></td>
    </tr>
    <tr id='depot_info'>
      <td className='name'>@depot_info</td>
      <td className='desc'><div className='text'>Выводит в консоль информацию о текущем репозитории обновлений</div><div className='desc-meta'><VersionBadge type='added' since='2.0.0.0'/></div></td>
    </tr>
    <tr id='hud_radar_mapshot'>
      <td className='name'>hud_radar_mapshot `[zoom]` `[zmin]` `[zmax]` `[quality]`</td>
      <td className='desc'><div className='text'>Пересоздает скриншот карты сверху и `.txt` файл с координатами для расширенного HUD радара</div><div className='desc-meta'><VersionBadge type='added' since='2.5.0.0'/></div></td>
    </tr>
    <tr id='fullinfo'>
      <td className='name'>fullinfo `<string>`</td>
      <td className='desc'>Отправляет на сервер полную `userinfo` строку</td>
    </tr>
    <tr id='gl_dump'>
      <td className='name'>gl_dump</td>
      <td className='desc'><div className='text'>Выводит в консоль подробную отладочную информацию о рендерере OpenGL (версия, вендор, расширения)</div><div className='desc-meta'><VersionBadge type='changed' since='2.0.0.0'/></div></td>
    </tr>
    <tr id='gl_texels'>
      <td className='name'>gl_texels</td>
      <td className='desc'><div className='text'>Показывает количество текселей, используемых в данный момент</div><div className='desc-meta'><VersionBadge type='changed' since='2.0.0.0'/></div></td>
    </tr>
    <tr id='gl_textures'>
      <td className='name'>gl_textures</td>
      <td className='desc'><div className='text'>Выводит список всех текстур, загруженных в видеопамять</div><div className='desc-meta'><VersionBadge type='added' since='2.0.0.0'/></div></td>
    </tr>
    <tr id='interp'>
      <td className='name'>interp</td>
      <td className='desc'><div className='text'>Отладочная команда для отображения интерполяции на клиенте</div><div className='desc-meta'><VersionBadge type='deprecated' since='2.0.0.0'/></div></td>
    </tr>
    <tr id='mem_stats'>
      <td className='name'>mem_stats</td>
      <td className='desc'>Выводит в консоль подробную статистику по использованию памяти движком</td>
    </tr>
  </tbody>
</Table>

## Служебные команды

:::info
Эти команды предназначены для внутреннего использования движком и игровым UI \
Они могут требовать перезапуска игры или приводить к неожиданному поведению при ручном вызове
:::

<Table>
  <thead><tr><th>Команда</th><th>Описание</th></tr></thead>
  <tbody>
    <tr id='_restart'>
      <td className='name'>_restart</td>
      <td className='desc'>Полностью перезапускает движок игры<br/>Используется для применения настроек, требующих перезапуска</td>
    </tr>
    <tr id='_setvideomode'>
      <td className='name'>_setvideomode `<w>` `<h>` `[video_mode]`</td>
      <td className='desc'><div className='text'>Устанавливает разрешение и режим экрана, после чего требует перезапуска через `_restart`<br/>Вызывается из меню настроек видео</div><div className='desc-meta'><VersionBadge type='changed' since='2.5.6.0'/></div></td>
    </tr>
    <tr id='_sethdmodels'>
      <td className='name'>_sethdmodels `<0|1>`</td>
      <td className='desc'>Включает или выключает HD-модели и перезапускает игру для применения</td>
    </tr>
    <tr id='_setaddons_folder'>
      <td className='name'>_setaddons_folder `<0|1>`</td>
      <td className='desc'>Включает или выключает использование папки `_addons` и перезапускает игру</td>
    </tr>
    <tr id='_set_vid_level'>
      <td className='name'>_set_vid_level `<0|1>`</td>
      <td className='desc'>Устанавливает уровень детализации видео (Low/High) и перезапускает игру</td>
    </tr>
    <tr id='_careeraudio'>
      <td className='name'>_careeraudio</td>
      <td className='desc'>Внутренняя команда для управления аудио в режиме 'Карьеры' `CS:Condition-Zero`</td>
    </tr>
    <tr id='_setgamedir'>
      <td className='name'>_setgamedir `<gamedir>`</td>
      <td className='desc'>Внутренняя команда для смены игровой директории</td>
    </tr>
    <tr id='stuffcmds'>
      <td className='name'>stuffcmds</td>
      <td className='desc'>
      Служебная команда, которая выполняется на последнем этапе загрузки пользовательских конфигов<br/><br/>
      Её главная задача — применить параметры, квары и команды, указанные в командной строке при запуске игры<br/>Это гарантирует, что все параметры/квары/команды в командной строке всегда имеют **наивысший приоритет** и переопределяют любые значения из `config.cfg` или `userconfig.cfg`<br/><br/>Вызов этой команды вручную из консоли бесполезен
      </td>
    </tr>
  </tbody>
</Table>
