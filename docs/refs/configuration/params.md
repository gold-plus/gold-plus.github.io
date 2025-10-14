---
id: launch-params
title: Параметры запуска
sidebar_position: 3
---

import { VersionBadge } from '@site/src/components/Misc/VersionBadge'
import { Table } from '@site/src/components/ResponsiveLayout';

<br/>
:::warning Страница в разработке
Эта страница находится в стадии активного наполнения и корректирования. \
Возможны ошибки, неточности и пропуски, и отсутствия перевода. \
Следите за обновлениями, чтобы получать актуальную информацию.
:::

# Параметры запуска

Параметры запуска — это специальные команды, которые позволяют изменять настройки игры еще до ее запуска \
Они могут быть полезны для решения проблем, настройки производительности или включения специфических функций

## Основные параметры
<Table>
  <thead><tr><th>Параметр</th><th>Описание</th></tr></thead>
  <tbody>
    <tr className='deprecated' id='console'>
      <td className='name'>-console<br/>-toconsole</td>
      <td className='desc'><div className='text'>Принудительно включает доступ к консоли<br/>Оба параметра выполняют одно и то же действие<br/>Этот параметр устарел и не имеет никакого эффекта</div><div className='desc-meta'><VersionBadge type='deprecated' since='2.0.0.0'/></div></td>
    </tr>
    <tr id='dev'>
      <td className='name'>-dev</td>
      <td className='desc'>Включает режим разработчика, который выводит в консоль отладочную информацию<br/>Этот параметр включает `developer 1` <a className='ref-link' href='/docs/refs/configuration/cvars#developer'/></td>
    </tr>
    <tr id='game'>
      <td className='name'>-game</td>
      <td className='desc'>Устанавливает директорию мода для запуска игры с этим модом<br/><br/>*Например:* `-game cstrike` (по умолчанию `valve`)</td>
    </tr>
    <tr className='added' id='language'>
      <td className='name'>-language</td>
      <td className='desc'><div className='text'>Принудительно устанавливает язык игры<br/><br/>*Например:* `-language russian` или `-language ru` (по умолчанию язык Системный)</div><div className='desc-meta'><VersionBadge type='added' since='2.0.0.0'/></div></td>
    </tr>
    <tr className='deprecated' id='safe'>
      <td className='name'>-safe</td>
      <td className='desc'><div className='text'>Запускает игру в режиме максимальной совместимости, принудительно устанавливает набор 'безопасных' параметров<br/>Большинство из них уже неактуальны<br/>`[-stdvid, -nolan, -nosound, -nocdaudio, -nojoy, -nomouse, -dibonly]`</div><div className='desc-meta'><VersionBadge type='deprecated' since='2.0.0.0'/></div></td>
    </tr>
    <tr className='deprecated' id='novid'>
      <td className='name'>-novid</td>
      <td className='desc'><div className='text'>Раньше пропускал вступительные видеоролики<br/>В текущей версии этого нет, поэтому параметр не имеет эффекта</div><div className='desc-meta'><VersionBadge type='deprecated' since='2.0.0.0'/></div></td>
    </tr>
    <tr id='lv'>
      <td className='name'>-lv</td>
      <td className='desc'>Принудительно включает режим 'пониженного насилия' (Low Violence), убирая кровь и жестокие эффекты</td>
    </tr>
    <tr id='noquit'>
      <td className='name'>-noquit</td>
      <td className='desc'>Предотвращает автоматическое закрытие игры после завершения встроенного бенчмарка производительности (Game Gauge)<br/>По умолчанию, после выполнения команды <code>gg &lt;demoname&gt;</code>, игра записывает результаты в консоль и файл `fps.txt`, а затем немедленно завершает работу<br/>Этот параметр позволяет остаться в игре после бенчмарка, чтобы, например, изучить результаты в консоли</td>
    </tr>
  </tbody>
</Table>

## Графика и видео
<Table>
  <thead><tr><th>Параметр</th><th>Описание</th></tr></thead>
  <tbody>
    <tr id='width'>
      <td className='name'>-w<br/>-width</td>
      <td className='desc'>Устанавливает ширину экрана в пикселях<br/><br/>*Например:* `-width 1920`</td>
    </tr>
    <tr id='height'>
      <td className='name'>-h<br/>-height</td>
      <td className='desc'>Устанавливает высоту экрана в пикселях<br/><br/>*Например:* `-h 1080`</td>
    </tr>
    <tr id='refresh'>
      <td className='name'>-freq<br/>-refresh<br/>-refreshrate<br/>-hz</td>
      <td className='desc'>Принудительно задает частоту обновления монитора (в Гц)<br/><br/>
      *Например:* `-freq 144`<br/><br/>По умолчанию игра автоматически использует герцовку вашего рабочего стола, поэтому в большинстве случаев этот параметр *не требуется*<br/><br/>Он нужен, если вы хотите использовать *любую* герцовку, отличающуюся от стандартной для вашего экрана — как выше, так и ниже<br/><br/>*Например:*<br/>• Чтобы запустить игру в 75 Гц на мониторе, где рабочий стол работает в 60 Гц (при условии, что режим 75 Гц поддерживается на выбранном в игре разрешении)<br/>• И наоборот: если у вас 144 Гц монитор, но вы хотите залочить игру на 60 Гц (для стрима, тестов или просто так), этот параметр также поможет</td>
    </tr>
    <tr id='fullscreen'>
      <td className='name'>-full<br/>-fullscreen</td>
      <td className='desc'>Запускает игру в полноэкранном режиме</td>
    </tr>
    <tr className='added' id='exclusivefs'>
      <td className='name'>-exclusivefs</td>
      <td className='desc'><div className='text'>Принудительно включает 'эксклюзивный' полноэкранный режим<br/>Может дать небольшой прирост производительности, но усложняет переключение на другие приложения `Alt`+`Tab`</div><div className='desc-meta'><VersionBadge type='added' since='2.5.0.0'/></div></td>
    </tr>
    <tr className='added' id='noexclusivefs'>
      <td className='name'>-noexclusivefs</td>
      <td className='desc'><div className='text'>Отключает 'эксклюзивный' режим, используя вместо него полноэкранный режим в окне<br/>Упрощает сворачивание или потери фокуса окна игры</div><div className='desc-meta'><VersionBadge type='added' since='2.5.0.0'/></div></td>
    </tr>
    <tr id='windowed'>
      <td className='name'>-sw<br/>-window<br/>-windowed<br/>-startwindowed</td>
      <td className='desc'>Запускает игру в оконном режиме</td>
    </tr>
    <tr id='noborder'>
      <td className='name'>-noborder</td>
      <td className='desc'>Убирает рамку окна в оконном режиме</td>
    </tr>
    <tr className='added' id='full_window'>
      <td className='name'>-full_window<br/>-fullscreen_window</td>
      <td className='desc'><div className='text'>Запускает игру в оконном режиме без рамки с разрешением рабочего стола, создавая эффект 'полноэкранного режима в окне'</div><div className='desc-meta'><VersionBadge type='added' since='2.5.0.0'/></div></td>
    </tr>
    <tr id='stretchaspect'>
      <td className='name'>-stretchaspect</td>
      <td className='desc'>Принудительно растягивает изображение на весь экран, игнорируя соотношение сторон</td>
    </tr>
    <tr id='nomsaa'>
      <td className='name'>-nomsaa</td>
      <td className='desc'>Отключает сглаживание MSAA</td>
    </tr>
    <tr id='nofbo'>
      <td className='name'>-nofbo</td>
      <td className='desc'>Отключает использование Frame Buffer Objects (FBO)<br/>Может повысить производительность на очень старых видеокартах, но отключит некоторые графические возможности, такие как растягивание непропорционального изображения на весь экран и другие</td>
    </tr>
    <tr className='added' id='nostencil'>
      <td className='name'>-nostencil</td>
      <td className='desc'><div className='text'>Отключает использование Stencil Buffer (В данный момент используется для HUD радара и отключение приведет к квадратному виду радара)</div><div className='desc-meta'><VersionBadge type='added' since='2.3.4.0'/></div></td>
    </tr>
    <tr className='deprecated' id='gl'>
      <td className='name'>-gl</td>
      <td className='desc'><div className='text'>Раньше принудительно включался OpenGL рендер<br/>Сейчас используется по умолчанию</div><div className='desc-meta'><VersionBadge type='deprecated' since='2.0.0.0'/></div></td>
    </tr>
    <tr className='deprecated' id='bpp'>
      <td className='name'>-16bpp<br/>-24bpp<br/>-32bpp</td>
      <td className='desc'><div className='text'>Раньше использовались для установки глубины цвета (16, 24 или 32 бит)<br/>Сейчас используется по умолчанию только 32-битная глубина цвета</div><div className='desc-meta'><VersionBadge type='deprecated' since='2.0.0.0'/></div></td>
    </tr>
    <tr className='deprecated' id='d3d'>
      <td className='name'>-d3d</td>
      <td className='desc'><div className='text'>Раньше принудительно включался Direct3D рендер<br/>Сейчас используется только OpenGL</div><div className='desc-meta'><VersionBadge type='deprecated' since='2.0.0.0'/></div></td>
    </tr>
    <tr className='deprecated' id='soft'>
      <td className='name'>-soft<br/>-software</td>
      <td className='desc'><div className='text'>Раньше принудительно включался программный (Software) режим рендеринга<br/>Сейчас используется только OpenGL</div><div className='desc-meta'><VersionBadge type='deprecated' since='2.0.0.0'/></div></td>
    </tr>
    <tr className='added' id='displayindex'>
      <td className='name'>-displayindex</td>
      <td className='desc'><div className='text'>Выбирает монитор для запуска игры, если у вас их несколько<br/><br/>*Например:* `-displayindex 1` (второй монитор)</div><div className='desc-meta'><VersionBadge type='added' since='2.5.0.0'/></div></td>
    </tr>
    <tr className='added' id='align'>
      <td className='name'>-align</td>
      <td className='desc'><div className='text'>Выравнивает окно игры в оконном режиме на экране<br/><br/>*Использование:*<br/>`lt` (left-top) — левый-верхний угол экрана<br/>`rt` (right-top) — правый-верхний угол экрана<br/>`mid` (middle) — по центру<br/>`lb` (left-bottom) — левый-нижний угол экрана<br/>`rb` (right-bottom) — правый-нижний угол экрана<br/><br/>*По умолчанию:* По-центру</div><div className='desc-meta'><VersionBadge type='added' since='2.5.0.0'/></div></td>
    </tr>
    <tr className='added' id='x'>
      <td className='name'>-x</td>
      <td className='desc'><div className='text'>Смещает окно игры по горизонтали (оси X)<br/><br/>*Например:* `-x 100`</div><div className='desc-meta'><VersionBadge type='added' since='2.5.0.0'/></div></td>
    </tr>
    <tr className='added' id='y'>
      <td className='name'>-y</td>
      <td className='desc'><div className='text'>Смещает окно игры по вертикали (оси Y)<br/><br/>*Например:* `-y 50`</div><div className='desc-meta'><VersionBadge type='added' since='2.5.0.0'/></div></td>
    </tr>
    <tr className='added' id='negx'>
      <td className='name'>-negx</td>
      <td className='desc'><div className='text'>Смещает окно игры влево по горизонтали (оси X)<br/>Является альтернативой для указания отрицательных координат, так как синтаксис вида `-x -100` может некорректно обрабатываться<br/>Таким образом, команда `-negx 100` эквивалентна `-x -100`</div><div className='desc-meta'><VersionBadge type='added' since='2.5.0.0'/></div></td>
    </tr>
    <tr className='added' id='negy'>
      <td className='name'>-negy</td>
      <td className='desc'><div className='text'>Смещает окно игры вверх по вертикали (оси Y)<br/>Работает аналогично `-negx`, позволяя задать отрицательное смещение<br/>Таким образом, команда `-negy 50` эквивалентна `-y -50`</div><div className='desc-meta'><VersionBadge type='added' since='2.5.0.0'/></div></td>
    </tr>
    <tr className='added' id='ontop'>
      <td className='name'>-ontop</td>
      <td className='desc'><div className='text'>Делает окно игры 'плавающим' поверх всех остальных окон</div><div className='desc-meta'><VersionBadge type='added' since='2.5.0.0'/></div></td>
    </tr>
    <tr className='added' id='noontop'>
      <td className='name'>-noontop</td>
      <td className='desc'><div className='text'>Запрещает окну игры быть поверх всех остальных окон<br/>Является прямой противоположностью параметру `-ontop`</div><div className='desc-meta'><VersionBadge type='added' since='2.5.0.0'/></div></td>
    </tr>
    <tr id='directblit'>
      <td className='name'>-directblit</td>
      <td className='desc'>Принудительно включает использование оптимизированного метода blitting'а (копирования) кадра, если поддерживается видео-драйвером</td>
    </tr>
    <tr id='nodirectblit'>
      <td className='name'>-nodirectblit</td>
      <td className='desc'>Отключает использование оптимизированного метода blitting'а</td>
    </tr>
    <tr id='forceres'>
      <td className='name'>-forceres</td>
      <td className='desc'>
        Принудительно использовать разрешение, указанное через `-w` и `-h`, даже если оно не найдено в списке поддерживаемых видеорежимов для монитора
        :::warning НЕ РЕКОМЕНДУЕТСЯ К ИСПОЛЬЗОВАНИЮ!
        :::
      </td>
    </tr>
  </tbody>
</Table>

## Сеть и Сервер
<Table>
  <thead><tr><th>Параметр</th><th>Описание</th></tr></thead>
  <tbody>
    <tr id='insecure'>
      <td className='name'>-insecure</td>
      <td className='desc'>Запускает сервер в небезопасном режиме, без защиты VAC</td>
    </tr>
    <tr className='deprecated' id='nomaster'>
      <td className='name'>-nomaster</td>
      <td className='desc'><div className='text'>Отключает регистрацию сервера на мастер-серверах Steam, делая его невидимым в глобальном поиске</div><div className='desc-meta'><VersionBadge type='deprecated' since='2.0.0.0'/></div></td>
    </tr>
    <tr id='maxplayers'>
      <td className='name'>-maxplayers</td>
      <td className='desc'>Устанавливает максимальное количество игроков на сервере<br/><br/>*Например:* `-maxplayers 20`</td>
    </tr>
    <tr id='port'>
      <td className='name'>-port</td>
      <td className='desc'>Устанавливает сетевой порт<br/>По умолчанию клиент использует `27005`, а сервер `27015`</td>
    </tr>
    <tr id='sport'>
      <td className='name'>-sport</td>
      <td className='desc'>Устанавливает порт для аутентификации Steam (по умолчанию `26900`)</td>
    </tr>
    <tr id='dll'>
      <td className='name'>-dll</td>
      <td className='desc'>Позволяет загрузить кастомную gamedll<br/><br/>*Например:* `-dll dlls/ultimate_mod.dll`</td>
    </tr>
    <tr id='sys_ticrate'>
      <td className='name'>-sys_ticrate</td>
      <td className='desc'>Устанавливает тикрейт сервера<br/><br/>*Например:* `-sys_ticrate 500`</td>
    </tr>
    <tr id='ip'>
      <td className='name'>-ip</td>
      <td className='desc'>Привязывает сервер к конкретному сетевому интерфейсу<br/><br/>*Например:* `-ip 192.168.0.5`</td>
    </tr>
    <tr id='nodns'>
      <td className='name'>-nodns</td>
      <td className='desc'>Запрещает использование DNS для разрешения имен хостов</td>
    </tr>
    <tr id='reuse'>
      <td className='name'>-reuse</td>
      <td className='desc'>Позволяет сокету повторно использовать локальный адрес (полезно для быстрых перезапусков сервера)</td>
    </tr>
    <tr id='loopback'>
      <td className='name'>-loopback</td>
      <td className='desc'>Включает/выключает прослушивание мультикаст-пакетов на том же хосте, где они были отправлены</td>
    </tr>
    <tr id='netthread'>
      <td className='name'>-netthread</td>
      <td className='desc'>Запускает сетевую подсистему в отдельном потоке</td>
    </tr>
    <tr id='netsleep'>
      <td className='name'>-netsleep</td>
      <td className='desc'>Позволяет сетевому потоку 'засыпать', снижая нагрузку на CPU</td>
    </tr>
    <tr id='noip'>
      <td className='name'>-noip</td>
      <td className='desc'>Отключает инициализацию IP</td>
    </tr>
    <tr className='removed' id='noipx'>
      <td className='name'>-noipx</td>
      <td className='desc'><div className='text'>Отключает поддержку протокола IPX</div><div className='desc-meta'><VersionBadge type='removed' since='2.0.0.0'/></div></td>
    </tr>
  </tbody>
</Table>

## Ввод и Звук
<Table>
  <thead><tr><th>Параметр</th><th>Описание</th></tr></thead>
  <tbody>
    <tr id='nomouse'>
      <td className='name'>-nomouse</td>
      <td className='desc'>Отключает инициализацию мыши</td>
    </tr>
    <tr id='nomousegrab'>
      <td className='name'>-nomousegrab</td>
      <td className='desc'>Предотвращает 'захват' курсора мыши игрой в оконном режиме<br/>Не влияет на режим прямого ввода `m_rawinput 1`</td>
    </tr>
    <tr id='noforcemspd'>
      <td className='name'>-noforcemspd</td>
      <td className='desc'>Не изменять системную скорость (чувствительность) мыши в Системе</td>
    </tr>
    <tr id='noforcemaccel'>
      <td className='name'>-noforcemaccel</td>
      <td className='desc'>Не отключать системное ускорение (акселерацию) мыши в Системе</td>
    </tr>
    <tr id='noforcemparms'>
      <td className='name'>-noforcemparms</td>
      <td className='desc'>Объединяет два предыдущих параметра: не трогает системные настройки скорости и ускорения мыши</td>
    </tr>
    <tr id='nojoy'>
      <td className='name'>-nojoy</td>
      <td className='desc'>Отключает поддержку джойстика/геймпада</td>
    </tr>
    <tr id='nosound'>
      <td className='name'>-nosound</td>
      <td className='desc'>Полностью отключает звук в игре</td>
    </tr>
    <tr className='deprecated' id='simsound'>
      <td className='name'>-simsound</td>
      <td className='desc'><div className='text'>Включает режим симуляции звука<br/>Движок выполняет все операции по микшированию звука, но не отправляет итоговый аудиопоток на звуковую карту, а работает с 'пустым' буфером в памяти<br/>Это инструмент для разработчиков, позволяющий измерить производительность, исключив влияние аудиодрайверов<br/>Для обычного игрока не имеет практического применения</div><div className='desc-meta'><VersionBadge type='deprecated' since='2.0.0.0'/></div></td>
    </tr>
    <tr className='deprecated' id='snoforceformat'>
      <td className='name'>-snoforceformat</td>
      <td className='desc'><div className='text'>Принудительно отключает **DirectSound** и заставляет звуковой движок работать исключительно через старый Windows API — **WaveOut**<br/>Это был параметр для отладки или обеспечения совместимости на системах, где **DirectSound** работал некорректно<br/>В современных условиях этот параметр полностью устарел</div><div className='desc-meta'><VersionBadge type='deprecated' since='2.0.0.0'/></div></td>
    </tr>
    <tr className='deprecated' id='primarysound'>
      <td className='name'>-primarysound</td>
      <td className='desc'><div className='text'>Этот параметр связан с работой **DirectSound** и его 'основного' `Primary` звукового буфера, который является общим для всей системы<br/>По умолчанию движок пытается установить для него свой формат (частоту, битность)<br/>Параметр `-snoforceformat` **запрещает** движку это делать, что использовалось для решения проблем совместимости, когда смена формата приводила к конфликтам с драйверами</div><div className='desc-meta'><VersionBadge type='deprecated' since='2.0.0.0'/></div></td>
    </tr>
    <tr className='deprecated' id='wavonly'>
      <td className='name'>-wavonly</td>
      <td className='desc'><div className='text'>Определяет, какой буфер **DirectSound** будет использовать движок<br/>По умолчанию она создает собственный, 'вторичный' `Secondary` буфер<br/>Этот параметр заставляет движку пытаться писать звук напрямую в 'основной' `Primary` системный буфер<br/>Это более рискованный метод, который мог использоваться для уменьшения задержки на старом оборудовании, но часто приводил к проблемам со звуком</div><div className='desc-meta'><VersionBadge type='deprecated' since='2.0.0.0'/></div></td>
    </tr>
    <tr id='nocdaudio'>
      <td className='name'>-nocdaudio</td>
      <td className='desc'>Отключает воспроизведение музыки с CD <a className='ref-link' href='/docs/refs/configuration/commands#cd'/></td>
    </tr>
  </tbody>
</Table>

## Система и Производительность
<Table>
  <thead><tr><th>Параметр</th><th>Описание</th></tr></thead>
  <tbody>
    <tr className='changed' id='heapsize'>
      <td className='name'>-heapsize</td>
      <td className='desc'><div className='text'>Выделяет указанное количество памяти для нужд игры<br/>Можно использовать `K`, `M`, `G`<br/><br/>*Например:* `-heapsize 512M`<br/>По умолчанию выделяет `128` МБ памяти</div><div className='desc-meta'><VersionBadge type='changed' since='2.3.8.5'/></div></td>
    </tr>
    <tr id='minmemory'>
      <td className='name'>-minmemory</td>
      <td className='desc'>Запускает игру с минимально возможным объемом выделяемой памяти</td>
    </tr>
    <tr id='zone'>
      <td className='name'>-zone</td>
      <td className='desc'>Устанавливает размер 'зоны' памяти в килобайтах<br/><br/>*Например:* `-zone 4096`</td>
    </tr>
    <tr id='num_edicts'>
      <td className='name'>-num_edicts</td>
      <td className='desc'>Устанавливает максимальное количество 'сущностей' (entities)<br/><br/>*Например:* `-num_edicts 2048`</td>
    </tr>
    <tr id='particles'>
      <td className='name'>-particles</td>
      <td className='desc'>Устанавливает максимальное количество одновременно отображаемых частиц<br/><br/>*Например:* `-particles 4096`</td>
    </tr>
    <tr className='added' id='legacyfont'>
      <td className='name'>-legacyfont</td>
      <td className='desc'><div className='text'>Включает старый, 'проблемный' рендеринг шрифтов (особенно заметно для кириллицы)</div><div className='desc-meta'><VersionBadge type='added' since='2.0.0.0'/></div></td>
    </tr>
    <tr className='deprecated' id='starttime'>
      <td className='name'>-starttime</td>
      <td className='desc'><div className='text'>Устанавливал начальное значение для игрового таймера. Не используется</div><div className='desc-meta'><VersionBadge type='deprecated' since='2.0.0.0'/></div></td>
    </tr>
  </tbody>
</Table>

## Прочее
<Table>
  <thead><tr><th>Параметр</th><th>Описание</th></tr></thead>
  <tbody>
    <tr id='demoedit'>
      <td className='name'>-demoedit</td>
      <td className='desc'>Включает режим редактирования демо-записей</td>
    </tr>
    <tr id='nohdmodels'>
      <td className='name'>-nohdmodels</td>
      <td className='desc'>Принудительно отключает использование HD-моделей</td>
    </tr>
    <tr id='addons'>
      <td className='name'>-addons</td>
      <td className='desc'>Включает загрузку дополнительного контента из папки `_addons`</td>
    </tr>
  </tbody>
</Table>

## Отладка и Разработка
<Table>
  <thead><tr><th>Параметр</th><th>Описание</th></tr></thead>
  <tbody>
    <tr className='added' id='nosingle'>
      <td className='name'>-nosingle</td>
      <td className='desc'>
        <div className='text'>
          Позволяет запускать несколько копий (экземпляров) игры одновременно на одной машине, отключая стандартное ограничение
          :::info
            При использовании этого параметра будет **невозможно** подключиться к обычным игровым серверам, где `sv_cheats` установлен в `0`
          :::
        </div>
        <div className='desc-meta'>
          <VersionBadge type='added' since='2.3.8.6'/>
        </div>
      </td>
    </tr>
    <tr id='condebug'>
      <td className='name'>-condebug</td>
      <td className='desc'>Записывает весь вывод консоли в файл `qconsole.log` в корневой директории игры</td>
    </tr>
    <tr className='added' id='debug_steamapi'>
      <td className='name'>-debug_steamapi</td>
      <td className='desc'><div className='text'>Включает подробное логирование вызовов Steam API</div><div className='desc-meta'><VersionBadge type='added' since='2.0.0.0'/></div></td>
    </tr>
    <tr className='added' id='debug_voice'>
      <td className='name'>-debug_voice<br/>-log_voice</td>
      <td className='desc'><div className='text'>Выводят в консоль отладочные сообщения о сессиях голосового чата (кодек, статус, количество сэмплов и т.п)</div><div className='desc-meta'><VersionBadge type='added' since='2.0.0.0'/></div></td>
    </tr>
    <tr className='added' id='debug_http'>
      <td className='name'>-debug_http</td>
      <td className='desc'><div className='text'>Включает логирование HTTP-запросов, выполняемых через внутреннюю реализацию ISteamHTTP (используется для быстрой загрузки ресурсов)</div><div className='desc-meta'><VersionBadge type='added' since='2.0.0.0'/></div></td>
    </tr>
    <tr className='added' id='nominidumps'>
      <td className='name'>-nominidumps</td>
      <td className='desc'><div className='text'>Отключает создание файлов `.mdmp` (minidump) при падении игры в папке `crashdumps/`</div><div className='desc-meta'><VersionBadge type='added' since='2.2.1.0'/></div></td>
    </tr>
    <tr className='added' id='noassert'>
      <td className='name'>-noassert</td>
      <td className='desc'><div className='text'>Отключает окна с сообщениями об ошибках (asserts)<br/>По умолчанию окна об ошибках не создаются</div><div className='desc-meta'><VersionBadge type='added' since='2.5.0.0'/></div></td>
    </tr>
    <tr id='nobreakpad'>
      <td className='name'>-nobreakpad</td>
      <td className='desc'>Отключает систему отлова сбоев через Steam</td>
    </tr>
    <tr id='glext'>
      <td className='name'>-glext</td>
      <td className='desc'>Выводит в консоль список всех доступных расширений OpenGL</td>
    </tr>
  </tbody>
</Table>

## Интеграция и сервисы
<Table>
  <thead><tr><th>Параметр</th><th>Описание</th></tr></thead>
  <tbody>
    <tr className='deprecated' id='steam'>
      <td className='name'>-steam</td>
      <td className='desc'><div className='text'>Устаревший параметр, который меняет некоторые внутренние проверки, имитируя поведение 'официального' Steam-издания</div><div className='desc-meta'><VersionBadge type='deprecated' since='2.0.0.0'/></div></td>
    </tr>
    <tr className='added' id='nosteam'>
      <td className='name'>-nosteam</td>
      <td className='desc'><div className='text'>Принудительно запускает в Non-Steam режиме, даже если клиент Steam запущен</div><div className='desc-meta'><VersionBadge type='added' since='2.0.0.0'/></div></td>
    </tr>
    <tr className='added' id='cloud'>
      <td className='name'>-cloud</td>
      <td className='desc'><div className='text'>Включает использование `Steam Cloud` для хранения и синхронизации конфигурации игры `config.cfg` между устройствами в рамках одного Steam-аккаунта<br/>По умолчанию выключено</div><div className='desc-meta'><VersionBadge type='added' since='2.2.1.0'/></div></td>
    </tr>
    <tr className='added' id='noservice'>
      <td className='name'>-noservice</td>
      <td className='desc'><div className='text'>Отключает все встроенные клиентские сервисы, которые требуют подключения к внешним серверам для предоставления дополнительного контента или функционала<br/><br/>При использовании этого параметра будут отключены: сервис друзей, показ аватарок игроков и многое другое</div><div className='desc-meta'><VersionBadge type='added' since='2.3.6.0'/></div></td>
    </tr>
  </tbody>
</Table>

## Авто-обновление (Updater)
:::warning
Эти параметры предназначены для **временного** использования в **личных целях** (например, для тестирования или отката на другую версию из-за проблем, или любой более веской причины) \
Не рекомендуется использовать их на постоянной основе, так как они имеют **наивысший приоритет** и полностью **блокируют** управление обновлениями в настройках игры \
Это может привести к путанице, если вы забудете убрать эти параметры запуска
:::
<Table>
  <thead><tr><th>Параметр</th><th>Описание</th></tr></thead>
  <tbody>
    <tr className='added' id='noupdate'>
      <td className='name'>-noupdate</td>
      <td className='desc'><div className='text'>Отключает проверку и установку обновлений при запуске</div><div className='desc-meta'><VersionBadge type='added' since='2.0.0.0'/></div></td>
    </tr>
    <tr className='added' id='forceupdate'>
      <td className='name'>-forceupdate</td>
      <td className='desc'><div className='text'>Принудительно запускает проверку обновлений, даже если период проверки еще не истек</div><div className='desc-meta'><VersionBadge type='added' since='2.0.0.0'/></div></td>
    </tr>
    <tr className='added' id='master'>
      <td className='name'>-master</td>
      <td className='desc'><div className='text'>Устанавливает цель обновления на стабильную (master) ветку</div><div className='desc-meta'><VersionBadge type='added' since='2.0.0.0'/></div></td>
    </tr>
    <tr className='added' id='beta'>
      <td className='name'>-beta</td>
      <td className='desc'><div className='text'>Устанавливает цель обновления на бета-ветку для тестирования</div><div className='desc-meta'><VersionBadge type='added' since='2.0.0.0'/></div></td>
    </tr>
    <tr className='added' id='fork'>
      <td className='name'>-fork</td>
      <td className='desc'><div className='text'>Устанавливает цель обновления на пользовательскую ветку<br/><br/>*Например:* `-fork my_branch`</div><div className='desc-meta'><VersionBadge type='added' since='2.0.0.0'/></div></td>
    </tr>
    <tr className='added' id='tag'>
      <td className='name'>-tag</td>
      <td className='desc'><div className='text'>Загружает конкретную версию ветки<br/>*Например:* `-tag 2.4.0.0`<br/>Для получения последней версии используется `-tag latest`</div><div className='desc-meta'><VersionBadge type='added' since='2.0.0.0'/></div></td>
    </tr>
    <tr className='added' id='nopak'>
      <td className='name'>-nopak</td>
      <td className='desc'><div className='text'>Отключает использование `.pak` архивов, заставляя загрузчик скачивать необходимый контент по отдельности<br/>Скачивание таким способом будет неэффективным</div><div className='desc-meta'><VersionBadge type='added' since='2.0.0.0'/></div></td>
    </tr>
    <tr className='added' id='nocache'>
      <td className='name'>-nocache</td>
      <td className='desc'><div className='text'>Всегда инвалидирует кэш при скачивании контента</div><div className='desc-meta'><VersionBadge type='added' since='2.0.0.0'/></div></td>
    </tr>
    <tr className='added' id='forcedef'>
      <td className='name'>-forcedef</td>
      <td className='desc'>
        <div className='text'>
          Принудительно перезаписывает пользовательские конфигурационные файлы (`.cfg`, `.vdf` и т.п.) на версии по умолчанию из ветки обновления
          :::info
            Сбрасывает пользовательские настройки!
          :::
        </div>
        <div className='desc-meta'>
          <VersionBadge type='added' since='2.0.0.0'/>
        </div>
      </td>
    </tr>
  </tbody>
</Table>
