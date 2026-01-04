---
id: launch-params
title: Launch params
description: GoldClient launch parameters reference with descriptions, examples, and usage tips.
sidebar_position: 3
feedback: true
---

import { VersionBadge } from '@site/src/components/Misc/Badges'
import { Table } from '@site/src/components/ResponsiveLayout';

<br/>
:::warning Page under construction
This page is under active filling and correction.<br/>
There may be errors, inaccuracies and omissions, and lack of translation.<br/>
Follow the updates to receive up-to-date information.
:::

# Launch params

Launch parameters are special commands that allow you to change game settings before it runs \
They can be useful for troubleshooting, performance tuning, or enabling specific features

## Main Parameters {#main-parameters}

<Table>
  <thead><tr><th>Parameter</th><th>Description</th></tr></thead>
  <tbody>
    <tr className='deprecated' id='console'>
      <td className='name'>-console<br/>-toconsole</td>
      <td className='desc'><div className='text'>Forces console access to be enabled<br/>Both parameters perform the same action<br/>This parameter is obsolete and has no effect</div><div className='desc-meta'><VersionBadge type='deprecated' since='2.0.0.0'/></div></td>
    </tr>
    <tr id='dev'>
      <td className='name'>-dev</td>
      <td className='desc'>Enables developer mode, which outputs debug information to the console<br/>This parameter enables `developer 1` <a className='ref-link' href='/docs/reference/configuration/cvars/#developer'/></td>
    </tr>
    <tr id='game'>
      <td className='name'>-game</td>
      <td className='desc'>Sets the mod directory to launch the game with<br/><br/>*For example:* `-game cstrike` (defaults to `valve`)</td>
    </tr>
    <tr className='added' id='language'>
      <td className='name'>-language</td>
      <td className='desc'><div className='text'>Forces the game language<br/><br/>*For example:* `-language english` or `-language en` (defaults to System language)</div><div className='desc-meta'><VersionBadge type='added' since='2.0.0.0'/></div></td>
    </tr>
    <tr className='deprecated' id='safe'>
      <td className='name'>-safe</td>
      <td className='desc'><div className='text'>Launches the game in safe mode, forcing a set of 'safe' parameters<br/>Most of them are now obsolete<br/>`[-stdvid, -nolan, -nosound, -nocdaudio, -nojoy, -nomouse, -dibonly]`</div><div className='desc-meta'><VersionBadge type='deprecated' since='2.0.0.0'/></div></td>
    </tr>
    <tr className='deprecated' id='novid'>
      <td className='name'>-novid</td>
      <td className='desc'><div className='text'>Formerly used to skip intro videos<br/>The current version has no intros, so this parameter has no effect</div><div className='desc-meta'><VersionBadge type='deprecated' since='2.0.0.0'/></div></td>
    </tr>
    <tr id='lv'>
      <td className='name'>-lv</td>
      <td className='desc'>Forces 'Low Violence' mode, removing blood and gore effects</td>
    </tr>
    <tr id='noquit'>
      <td className='name'>-noquit</td>
      <td className='desc'>Prevents the game from automatically closing after the built-in benchmark (Game Gauge) is complete<br/>By default, after running the `gg <demoname>` command, the game writes results to the console and `fps.txt`, then immediately exits<br/>This parameter allows you to remain in the game to review the results in the console</td>
    </tr>
  </tbody>
</Table>

## Graphics & Video {#graphics--video}

<Table>
  <thead><tr><th>Parameter</th><th>Description</th></tr></thead>
  <tbody>
    <tr id='width'>
      <td className='name'>-w<br/>-width</td>
      <td className='desc'>Sets screen width in pixels<br/><br/>*For example:* `-width 1920`</td>
    </tr>
    <tr id='height'>
      <td className='name'>-h<br/>-height</td>
      <td className='desc'>Sets screen height in pixels<br/><br/>*For example:* `-h 1080`</td>
    </tr>
    <tr id='refresh'>
      <td className='name'>-freq<br/>-refresh<br/>-refreshrate<br/>-hz</td>
      <td className='desc'>Forces a specific monitor refresh rate (in Hz)<br/><br/>
      *For example:* `-freq 144`<br/><br/>By default, the game automatically uses your desktop's refresh rate, so this parameter is *not required* in most cases<br/><br/>It's useful if you want to use *any* rate that differs from your screen's default—either higher or lower<br/><br/>*For example:*<br/>• To run the game at 75 Hz on a monitor where the desktop is 60 Hz (assuming the selected resolution supports 75 Hz)<br/>• Conversely, if you have a 144 Hz monitor but want to lock the game at 60 Hz (for streaming, testing, etc.), this parameter will also work</td>
    </tr>
    <tr id='fullscreen'>
      <td className='name'>-full<br/>-fullscreen</td>
      <td className='desc'>Launches the game in fullscreen mode</td>
    </tr>
    <tr className='added' id='exclusivefs'>
      <td className='name'>-exclusivefs</td>
      <td className='desc'><div className='text'>Forces 'exclusive' fullscreen mode<br/>This may offer a slight performance boost but makes switching to other applications (`Alt`+`Tab`) slower</div><div className='desc-meta'><VersionBadge type='added' since='2.5.0.0'/></div></td>
    </tr>
    <tr className='added' id='noexclusivefs'>
      <td className='name'>-noexclusivefs</td>
      <td className='desc'><div className='text'>Disables 'exclusive' mode, using a borderless fullscreen window instead<br/>This makes minimizing or losing focus of the game window smoother</div><div className='desc-meta'><VersionBadge type='added' since='2.5.0.0'/></div></td>
    </tr>
    <tr id='windowed'>
      <td className='name'>-sw<br/>-window<br/>-windowed<br/>-startwindowed</td>
      <td className='desc'>Launches the game in windowed mode</td>
    </tr>
    <tr id='noborder'>
      <td className='name'>-noborder</td>
      <td className='desc'>Removes the window border in windowed mode</td>
    </tr>
    <tr className='added' id='full_window'>
      <td className='name'>-full_window<br/>-fullscreen_window</td>
      <td className='desc'><div className='text'>Launches the game in a borderless window at your desktop resolution, creating a 'borderless fullscreen' effect</div><div className='desc-meta'><VersionBadge type='added' since='2.5.0.0'/></div></td>
    </tr>
    <tr id='stretchaspect'>
      <td className='name'>-stretchaspect</td>
      <td className='desc'>Forces the image to stretch to fill the entire screen, ignoring the aspect ratio</td>
    </tr>
    <tr id='nomsaa'>
      <td className='name'>-nomsaa</td>
      <td className='desc'>Disables MSAA anti-aliasing</td>
    </tr>
    <tr id='nofbo'>
      <td className='name'>-nofbo</td>
      <td className='desc'>Disables the use of Frame Buffer Objects (FBO)<br/>May improve performance on very old graphics cards but will disable several graphical features, such as stretching non-native aspect ratios and others</td>
    </tr>
    <tr className='added' id='nostencil'>
      <td className='name'>-nostencil</td>
      <td className='desc'><div className='text'>Disables the Stencil Buffer (currently used for the HUD radar; disabling it will result in a square radar display)</div><div className='desc-meta'><VersionBadge type='added' since='2.3.4.0'/></div></td>
    </tr>
    <tr className='deprecated' id='gl'>
      <td className='name'>-gl</td>
      <td className='desc'><div className='text'>Formerly used to force the OpenGL renderer<br/>It is now used by default</div><div className='desc-meta'><VersionBadge type='deprecated' since='2.0.0.0'/></div></td>
    </tr>
    <tr className='deprecated' id='bpp'>
      <td className='name'>-16bpp<br/>-24bpp<br/>-32bpp</td>
      <td className='desc'><div className='text'>Formerly used to set color depth (16, 24, or 32-bit)<br/>Only 32-bit color is used by default now</div><div className='desc-meta'><VersionBadge type='deprecated' since='2.0.0.0'/></div></td>
    </tr>
    <tr className='deprecated' id='d3d'>
      <td className='name'>-d3d</td>
      <td className='desc'><div className='text'>Formerly used to force the Direct3D renderer<br/>Only OpenGL is used now</div><div className='desc-meta'><VersionBadge type='deprecated' since='2.0.0.0'/></div></td>
    </tr>
    <tr className='deprecated' id='soft'>
      <td className='name'>-soft<br/>-software</td>
      <td className='desc'><div className='text'>Formerly used to force Software rendering mode<br/>Only OpenGL is used now</div><div className='desc-meta'><VersionBadge type='deprecated' since='2.0.0.0'/></div></td>
    </tr>
    <tr className='added' id='displayindex'>
      <td className='name'>-displayindex</td>
      <td className='desc'><div className='text'>Selects which monitor to launch the game on if you have multiple displays<br/><br/>*For example:* `-displayindex 1` (for the second monitor)</div><div className='desc-meta'><VersionBadge type='added' since='2.5.0.0'/></div></td>
    </tr>
    <tr className='added' id='align'>
      <td className='name'>-align</td>
      <td className='desc'><div className='text'>Aligns the game window on the screen in windowed mode<br/><br/>*Usage:*<br/>`lt` (left-top) — top-left corner<br/>`rt` (right-top) — top-right corner<br/>`mid` (middle) — center<br/>`lb` (left-bottom) — bottom-left corner<br/>`rb` (right-bottom) — bottom-right corner<br/><br/>*Default:* Center</div><div className='desc-meta'><VersionBadge type='added' since='2.5.0.0'/></div></td>
    </tr>
    <tr className='added' id='x'>
      <td className='name'>-x</td>
      <td className='desc'><div className='text'>Offsets the game window horizontally (X-axis)<br/><br/>*For example:* `-x 100`</div><div className='desc-meta'><VersionBadge type='added' since='2.5.0.0'/></div></td>
    </tr>
    <tr className='added' id='y'>
      <td className='name'>-y</td>
      <td className='desc'><div className='text'>Offsets the game window vertically (Y-axis)<br/><br/>*For example:* `-y 50`</div><div className='desc-meta'><VersionBadge type='added' since='2.5.0.0'/></div></td>
    </tr>
    <tr className='added' id='negx'>
      <td className='name'>-negx</td>
      <td className='desc'><div className='text'>Offsets the game window to the left (negative X-axis)<br/>This is an alternative for specifying negative coordinates, as syntax like `-x -100` may be handled incorrectly<br/>Thus, `-negx 100` is equivalent to `-x -100`</div><div className='desc-meta'><VersionBadge type='added' since='2.5.0.0'/></div></td>
    </tr>
    <tr className='added' id='negy'>
      <td className='name'>-negy</td>
      <td className='desc'><div className='text'>Offsets the game window upwards (negative Y-axis)<br/>Works similarly to `-negx`, allowing a negative offset<br/>Thus, `-negy 50` is equivalent to `-y -50`</div><div className='desc-meta'><VersionBadge type='added' since='2.5.0.0'/></div></td>
    </tr>
    <tr className='added' id='ontop'>
      <td className='name'>-ontop</td>
      <td className='desc'><div className='text'>Makes the game window 'always on top' of other windows</div><div className='desc-meta'><VersionBadge type='added' since='2.5.0.0'/></div></td>
    </tr>
    <tr className='added' id='noontop'>
      <td className='name'>-noontop</td>
      <td className='desc'><div className='text'>Prevents the game window from being always on top<br/>This is the direct opposite of the `-ontop` parameter</div><div className='desc-meta'><VersionBadge type='added' since='2.5.0.0'/></div></td>
    </tr>
    <tr id='directblit'>
      <td className='name'>-directblit</td>
      <td className='desc'>Forces the use of an optimized blitting method for frame presentation, if supported by the video driver</td>
    </tr>
    <tr id='nodirectblit'>
      <td className='name'>-nodirectblit</td>
      <td className='desc'>Disables the use of the optimized blitting method</td>
    </tr>
    <tr id='forceres'>
      <td className='name'>-forceres</td>
      <td className='desc'>
        Forces the game to use the resolution specified by `-w` and `-h`, even if it is not found in the list of supported video modes for the monitor
        :::warning NOT RECOMMENDED FOR USE!
        :::
      </td>
    </tr>
  </tbody>
</Table>

## Network & Server {#network--server}

<Table>
  <thead><tr><th>Parameter</th><th>Description</th></tr></thead>
  <tbody>
    <tr id='insecure'>
      <td className='name'>-insecure</td>
      <td className='desc'>Launches the server in insecure mode, without VAC protection</td>
    </tr>
    <tr className='deprecated' id='nomaster'>
      <td className='name'>-nomaster</td>
      <td className='desc'><div className='text'>Disables server registration on Steam master servers, making it invisible in the public server browser</div><div className='desc-meta'><VersionBadge type='deprecated' since='2.0.0.0'/></div></td>
    </tr>
    <tr id='maxplayers'>
      <td className='name'>-maxplayers</td>
      <td className='desc'>Sets the maximum number of players for the server<br/><br/>*For example:* `-maxplayers 20`</td>
    </tr>
    <tr id='port'>
      <td className='name'>-port</td>
      <td className='desc'>Sets the network port<br/>Default for client is `27005`, for server is `27015`</td>
    </tr>
    <tr id='sport'>
      <td className='name'>-sport</td>
      <td className='desc'>Sets the Steam authentication port (defaults to `26900`)</td>
    </tr>
    <tr id='dll'>
      <td className='name'>-dll</td>
      <td className='desc'>Allows loading a custom gamedll<br/><br/>*For example:* `-dll dlls/ultimate_mod.dll`</td>
    </tr>
    <tr id='sys_ticrate'>
      <td className='name'>-sys_ticrate</td>
      <td className='desc'>Sets the server's tickrate<br/><br/>*For example:* `-sys_ticrate 500`</td>
    </tr>
    <tr id='ip'>
      <td className='name'>-ip</td>
      <td className='desc'>Binds the server to a specific network interface<br/><br/>*For example:* `-ip 192.168.0.5`</td>
    </tr>
    <tr id='nodns'>
      <td className='name'>-nodns</td>
      <td className='desc'>Disables the use of DNS for resolving hostnames</td>
    </tr>
    <tr id='reuse'>
      <td className='name'>-reuse</td>
      <td className='desc'>Allows the socket to reuse a local address (useful for quick server restarts)</td>
    </tr>
    <tr id='loopback'>
      <td className='name'>-loopback</td>
      <td className='desc'>Enables or disables listening for multicast packets on the same host they were sent from</td>
    </tr>
    <tr id='netthread'>
      <td className='name'>-netthread</td>
      <td className='desc'>Runs the network system in a separate thread</td>
    </tr>
    <tr id='netsleep'>
      <td className='name'>-netsleep</td>
      <td className='desc'>Allows the network thread to sleep, reducing CPU load</td>
    </tr>
    <tr id='noip'>
      <td className='name'>-noip</td>
      <td className='desc'>Disables IP initialization</td>
    </tr>
    <tr className='removed' id='noipx'>
      <td className='name'>-noipx</td>
      <td className='desc'><div className='text'>Disables IPX protocol support</div><div className='desc-meta'><VersionBadge type='removed' since='2.0.0.0'/></div></td>
    </tr>
  </tbody>
</Table>

## Input & Sound {#input--sound}

<Table>
  <thead><tr><th>Parameter</th><th>Description</th></tr></thead>
  <tbody>
    <tr id='nomouse'>
      <td className='name'>-nomouse</td>
      <td className='desc'>Disables mouse initialization</td>
    </tr>
    <tr id='nomousegrab'>
      <td className='name'>-nomousegrab</td>
      <td className='desc'>Prevents the game from 'grabbing' the mouse cursor in windowed mode<br/>Does not affect raw input mode `m_rawinput 1`</td>
    </tr>
    <tr id='noforcemspd'>
      <td className='name'>-noforcemspd</td>
      <td className='desc'>Do not override the system's mouse speed (sensitivity)</td>
    </tr>
    <tr id='noforcemaccel'>
      <td className='name'>-noforcemaccel</td>
      <td className='desc'>Do not override the system's mouse acceleration</td>
    </tr>
    <tr id='noforcemparms'>
      <td className='name'>-noforcemparms</td>
      <td className='desc'>Combines the previous two parameters: does not override system mouse speed and acceleration settings</td>
    </tr>
    <tr id='nojoy'>
      <td className='name'>-nojoy</td>
      <td className='desc'>Disables joystick/gamepad support</td>
    </tr>
    <tr id='nosound'>
      <td className='name'>-nosound</td>
      <td className='desc'>Completely disables all sound in the game</td>
    </tr>
    <tr className='deprecated' id='simsound'>
      <td className='name'>-simsound</td>
      <td className='desc'><div className='text'>Enables sound simulation mode<br/>The engine performs all mixing operations but does not send the final audio stream to the sound card, working with an 'empty' buffer in memory instead<br/>A developer tool for measuring performance by excluding the impact of audio drivers<br/>No practical use for a regular player</div><div className='desc-meta'><VersionBadge type='deprecated' since='2.0.0.0'/></div></td>
    </tr>
    <tr className='deprecated' id='wavonly'>
      <td className='name'>-wavonly</td>
      <td className='desc'><div className='text'>Forces the sound engine to use the old Windows **WaveOut** API exclusively, bypassing **DirectSound**<br/>This was a parameter for debugging or ensuring compatibility on systems where **DirectSound** had issues<br/>Completely obsolete in modern systems</div><div className='desc-meta'><VersionBadge type='deprecated' since='2.0.0.0'/></div></td>
    </tr>
    <tr className='deprecated' id='snoforceformat'>
      <td className='name'>-snoforceformat</td>
      <td className='desc'><div className='text'>This parameter is related to **DirectSound** and its 'Primary' buffer, which is shared across the system<br/>By default, the game tries to set its own format (sample rate, bit depth) for this buffer<br/>The `-snoforceformat` parameter **prevents** the game from doing so, which was used to solve compatibility issues where changing the format led to driver conflicts</div><div className='desc-meta'><VersionBadge type='deprecated' since='2.0.0.0'/></div></td>
    </tr>
    <tr className='deprecated' id='primarysound'>
      <td className='name'>-primarysound</td>
      <td className='desc'><div className='text'>Determines which **DirectSound** buffer the engine uses<br/>By default, it creates its own 'Secondary' buffer<br/>This parameter forces the engine to attempt writing audio directly to the 'Primary' system buffer<br/>This was a riskier method that could be used to reduce latency on older hardware but often led to sound issues</div><div className='desc-meta'><VersionBadge type='deprecated' since='2.0.0.0'/></div></td>
    </tr>
    <tr id='nocdaudio'>
      <td className='name'>-nocdaudio</td>
      <td className='desc'>Disables CD audio playback <a className='ref-link' href='/docs/reference/configuration/commands/#cd'/></td>
    </tr>
  </tbody>
</Table>

## System & Performance {#system--performance}

<Table>
  <thead><tr><th>Parameter</th><th>Description</th></tr></thead>
  <tbody>
    <tr className='changed' id='heapsize'>
      <td className='name'>-heapsize</td>
      <td className='desc'><div className='text'>Allocates a specific amount of memory for the game's heap<br/>Supports `K`, `M`, `G`<br/><br/>*For example:* `-heapsize 512M`<br/>Defaults to `128` MB</div><div className='desc-meta'><VersionBadge type='changed' since='2.3.8.5'/></div></td>
    </tr>
    <tr id='minmemory'>
      <td className='name'>-minmemory</td>
      <td className='desc'>Launches the game with the minimum possible amount of allocated memory</td>
    </tr>
    <tr id='zone'>
      <td className='name'>-zone</td>
      <td className='desc'>Sets the size of the 'zone' memory in kilobytes<br/><br/>*For example:* `-zone 4096`</td>
    </tr>
    <tr id='num_edicts'>
      <td className='name'>-num_edicts</td>
      <td className='desc'>Sets the maximum number of entities<br/><br/>*For example:* `-num_edicts 2048`</td>
    </tr>
    <tr id='particles'>
      <td className='name'>-particles</td>
      <td className='desc'>Sets the maximum number of concurrently rendered particles<br/><br/>*For example:* `-particles 4096`</td>
    </tr>
    <tr className='added' id='legacyfont'>
      <td className='name'>-legacyfont</td>
      <td className='desc'><div className='text'>Enables the old, 'problematic' font rendering style (especially noticeable for Cyrillic characters)</div><div className='desc-meta'><VersionBadge type='added' since='2.0.0.0'/></div></td>
    </tr>
    <tr className='deprecated' id='starttime'>
      <td className='name'>-starttime</td>
      <td className='desc'><div className='text'>Used to set an initial value for the game timer. No longer used</div><div className='desc-meta'><VersionBadge type='deprecated' since='2.0.0.0'/></div></td>
    </tr>
  </tbody>
</Table>

## Miscellaneous {#miscellaneous}

<Table>
  <thead><tr><th>Parameter</th><th>Description</th></tr></thead>
  <tbody>
    <tr id='demoedit'>
      <td className='name'>-demoedit</td>
      <td className='desc'>Enables demo editing mode</td>
    </tr>
    <tr id='nohdmodels'>
      <td className='name'>-nohdmodels</td>
      <td className='desc'>Forces the disabling of HD models</td>
    </tr>
    <tr id='addons'>
      <td className='name'>-addons</td>
      <td className='desc'>Disables loading of additional content from the `_addons` folder</td>
    </tr>
  </tbody>
</Table>

## Debugging & Development {#debugging--development}

<Table>
  <thead><tr><th>Parameter</th><th>Description</th></tr></thead>
  <tbody>
    <tr className='added' id='nosingle'>
      <td className='name'>-nosingle</td>
      <td className='desc'>
        <div className='text'>
          Allows running multiple instances of the game simultaneously on one machine, bypassing the default restriction
          :::info
            When using this parameter, it **will not** be possible to connect to game servers where `sv_cheats` is `0`
          :::
        </div>
        <div className='desc-meta'>
          <VersionBadge type='added' since='2.3.8.6'/>
        </div>
      </td>
    </tr>
    <tr id='condebug'>
      <td className='name'>-condebug</td>
      <td className='desc'>Logs all console output to the `qconsole.log` file in the game's root directory</td>
    </tr>
    <tr className='added' id='debug_steamapi'>
      <td className='name'>-debug_steamapi</td>
      <td className='desc'><div className='text'>Enables detailed logging of Steam API calls</div><div className='desc-meta'><VersionBadge type='added' since='2.0.0.0'/></div></td>
    </tr>
    <tr className='added' id='debug_voice'>
      <td className='name'>-debug_voice<br/>-log_voice</td>
      <td className='desc'><div className='text'>Outputs debug messages about voice chat sessions (codec, status, sample counts, etc.) to the console</div><div className='desc-meta'><VersionBadge type='added' since='2.0.0.0'/></div></td>
    </tr>
    <tr className='added' id='debug_http'>
      <td className='name'>-debug_http</td>
      <td className='desc'><div className='text'>Enables logging of HTTP requests made through the internal ISteamHTTP implementation (used for fast resource downloading)</div><div className='desc-meta'><VersionBadge type='added' since='2.0.0.0'/></div></td>
    </tr>
    <tr className='added' id='nominidumps'>
      <td className='name'>-nominidumps</td>
      <td className='desc'><div className='text'>Disables the creation of `.mdmp` (minidump) files on game crash in the `crashdumps/` folder</div><div className='desc-meta'><VersionBadge type='added' since='2.2.1.0'/></div></td>
    </tr>
    <tr className='added' id='noassert'>
      <td className='name'>-noassert</td>
      <td className='desc'><div className='text'>Disables assert error message boxes<br/>By default, error boxes are not created</div><div className='desc-meta'><VersionBadge type='added' since='2.5.0.0'/></div></td>
    </tr>
    <tr id='nobreakpad'>
      <td className='name'>-nobreakpad</td>
      <td className='desc'>Disables the crash handling system via Steam</td>
    </tr>
    <tr id='glext'>
      <td className='name'>-glext</td>
      <td className='desc'>Prints a list of all available OpenGL extensions to the console</td>
    </tr>
  </tbody>
</Table>

## Integration & Services {#integration--services}

<Table>
  <thead><tr><th>Parameter</th><th>Description</th></tr></thead>
  <tbody>
    <tr className='deprecated' id='steam'>
      <td className='name'>-steam</td>
      <td className='desc'><div className='text'>A legacy parameter that alters some internal checks to mimic the behavior of an 'official' Steam release</div><div className='desc-meta'><VersionBadge type='deprecated' since='2.0.0.0'/></div></td>
    </tr>
    <tr className='added' id='nosteam'>
      <td className='name'>-nosteam</td>
      <td className='desc'><div className='text'>Forces the game to run in Non-Steam mode, even if the Steam client is running</div><div className='desc-meta'><VersionBadge type='added' since='2.0.0.0'/></div></td>
    </tr>
    <tr className='added' id='cloud'>
      <td className='name'>-cloud</td>
      <td className='desc'><div className='text'>Enables the use of `Steam Cloud` to store and sync the game configuration (`config.cfg`) across devices on the same Steam account<br/>Disabled by default</div><div className='desc-meta'><VersionBadge type='added' since='2.2.1.0'/></div></td>
    </tr>
    <tr className='added' id='noservice'>
      <td className='name'>-noservice</td>
      <td className='desc'><div className='text'>Disables all built-in client services that require connecting to external servers to provide additional content or functionality<br/><br/>Using this parameter will disable: the friends service, player avatar display, and more</div><div className='desc-meta'><VersionBadge type='added' since='2.3.6.0'/></div></td>
    </tr>
  </tbody>
</Table>

## Updater {#updater}

:::warning
These parameters are intended for **temporary** use for **personal purposes** (e.g., for testing, rolling back to another version due to issues, or any other valid reason) \
It is not recommended to use them permanently, as they have the **highest priority** and completely **block** the ability to manage updates in the game settings \
This can lead to confusion if you forget to remove these launch options
:::
<Table>
  <thead><tr><th>Parameter</th><th>Description</th></tr></thead>
  <tbody>
    <tr className='added' id='noupdate'>
      <td className='name'>-noupdate</td>
      <td className='desc'><div className='text'>Disables checking for and installing updates on launch</div><div className='desc-meta'><VersionBadge type='added' since='2.0.0.0'/></div></td>
    </tr>
    <tr className='added' id='forceupdate'>
      <td className='name'>-forceupdate</td>
      <td className='desc'><div className='text'>Forces an update check, even if the check period has not yet expired</div><div className='desc-meta'><VersionBadge type='added' since='2.0.0.0'/></div></td>
    </tr>
    <tr className='added' id='master'>
      <td className='name'>-master</td>
      <td className='desc'><div className='text'>Sets the update target to the stable (master) branch</div><div className='desc-meta'><VersionBadge type='added' since='2.0.0.0'/></div></td>
    </tr>
    <tr className='added' id='beta'>
      <td className='name'>-beta</td>
      <td className='desc'><div className='text'>Sets the update target to the beta branch for testing</div><div className='desc-meta'><VersionBadge type='added' since='2.0.0.0'/></div></td>
    </tr>
    <tr className='added' id='fork'>
      <td className='name'>-fork</td>
      <td className='desc'><div className='text'>Sets the update target to a custom branch<br/><br/>*For example:* `-fork my_branch`</div><div className='desc-meta'><VersionBadge type='added' since='2.0.0.0'/></div></td>
    </tr>
    <tr className='added' id='tag'>
      <td className='name'>-tag</td>
      <td className='desc'><div className='text'>Downloads a specific version of a branch<br/>*For example:* `-tag 2.4.0.0`<br/>Use `-tag latest` to get the most recent version</div><div className='desc-meta'><VersionBadge type='added' since='2.0.0.0'/></div></td>
    </tr>
    <tr className='added' id='nopak'>
      <td className='name'>-nopak</td>
      <td className='desc'><div className='text'>Disables the use of `.pak` archives, forcing the loader to download necessary content as individual files<br/>Downloading this way will be inefficient</div><div className='desc-meta'><VersionBadge type='added' since='2.0.0.0'/></div></td>
    </tr>
    <tr className='added' id='nocache'>
      <td className='name'>-nocache</td>
      <td className='desc'><div className='text'>Always invalidates the cache when downloading content</div><div className='desc-meta'><VersionBadge type='added' since='2.0.0.0'/></div></td>
    </tr>
    <tr className='added' id='forcedef'>
      <td className='name'>-forcedef</td>
      <td className='desc'>
        <div className='text'>
          Forcibly overwrites user configuration files (e.g., `.cfg`, `.vdf`) with the default versions from the update branch
          :::info
            This will reset user settings!
          :::
        </div>
        <div className='desc-meta'>
          <VersionBadge type='added' since='2.0.0.0'/>
        </div>
      </td>
    </tr>
  </tbody>
</Table>
