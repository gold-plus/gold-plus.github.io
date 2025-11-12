---
id: cvars
title: Console variables
sidebar_position: 1
---

import { SliderButton } from '@site/src/components/Image'
import { VersionBadge } from '@site/src/components/Misc/Badges'
import { Table, Grid } from '@site/src/components/ResponsiveLayout';

<br/>
:::warning Page under construction
This page is under active filling and correction<br/>
There may be errors, inaccuracies and omissions, and lack of translation<br/>
Follow the updates to receive up-to-date information
:::

# Console variables

List of all console variables (ConVar) — description, default values

## User Interface
<Table>
  <thead><tr><th>Name</th><th>Default</th><th>Min</th><th>Max</th><th>Description</th></tr></thead>
  <tbody>
    <tr id='name'>
      <td className='name'>name</td>
      <td className='def'>Player</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Sets the player's name</td>
    </tr>
    <tr id='password'>
      <td className='name'>password</td>
      <td className='def'>-</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Sets the password for connecting to a protected server</td>
    </tr>
    <tr id='cl_autowepswitch'>
      <td className='name'>cl_autowepswitch</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Automatically switch to a picked-up weapon (if it is more powerful)<br/>`0` Never switch<br/>`1` Always switch<br/>`2` Always switch, but not while firing</td>
    </tr>
    <tr id='cl_logocolor'>
      <td className='name'>cl_logocolor</td>
      <td className='def color'><div style={{background: `rgba(255,120,24,0.85)`, color: `#111`}}>255 120 24</div></td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'><div className='text'>Sets the color of the spray (logo)</div><div className='desc-meta'><VersionBadge type='changed' since='2.5.6.0'/></div></td>
    </tr>
    <tr id='cl_logofile'>
      <td className='name'>cl_logofile</td>
      <td className='def'>lambda</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Sets the spray (logo) file</td>
    </tr>
    <tr id='sbind'>
      <td className='name'>sbind</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'><div className='text'>Enables 'shadow' keybindings when on a game server<br/>Any keybindings set by the server are not saved to the player's config</div><div className='desc-meta'><VersionBadge type='added' since='1.2.0.0'/></div></td>
    </tr>
  </tbody>
</Table>

### UI : Preferences
<Table>
  <thead><tr><th>Name</th><th>Default</th><th>Min</th><th>Max</th><th>Description</th></tr></thead>
  <tbody>
    <tr id='cl_servers_history_lastplayed'>
      <td className='name'>cl_servers_history_lastplayed</td>
      <td className='def'>7776000</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'><div className='text'>Removes servers from the server browser history that you played on more than the specified number of seconds ago<br/>Default is 3 months (`7776000` seconds)<br/>Set to `0` to disable auto-removal</div><div className='desc-meta'><VersionBadge type='added' since='2.5.0.0'/></div></td>
    </tr>
    <tr id='ui_enable_menu_randomsrv'>
      <td className='name'>ui_enable_menu_randomsrv</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'><div className='text'>Enables the 'Random Server' item in the main game menu</div><div className='desc-meta'><VersionBadge type='added' since='1.2.0.0'/></div></td>
    </tr>
    <tr id='ui_password_entry'>
      <td className='name'>ui_password_entry</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'><div className='text'>Enables the display of the password entry window in the game settings for gaining privileges on servers</div><div className='desc-meta'><VersionBadge type='added' since='1.2.0.0'/></div></td>
    </tr>
    <tr id='ui_taskbar_iconflash'>
      <td className='name'>ui_taskbar_iconflash</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'><div className='text'>Enables notifications via a flashing game icon in the Windows taskbar, drawing attention to events such as connecting to a server, a new round starting, etc.</div><div className='desc-meta'><VersionBadge type='added' since='2.3.3.0'/></div></td>
    </tr>
    <tr id='ui_window_bringfront_on_event'>
      <td className='name'>ui_window_bringfront_on_event</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'><div className='text'>Automatically maximizes and brings the game window to the foreground on events like connecting to a server, a new round starting, etc.</div><div className='desc-meta'><VersionBadge type='added' since='2.3.6.0'/></div></td>
    </tr>
    <tr id='ui_window_sound_on_event'>
      <td className='name'>ui_window_sound_on_event</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'><div className='text'>Enables a sound notification to draw attention to events like connecting to a server, a new round starting, etc.</div><div className='desc-meta'><VersionBadge type='added' since='2.3.6.0'/></div></td>
    </tr>
    <tr id='vgui_menus'>
      <td className='name'>vgui_menus</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'><div className='text'>Enables the new VGUI style menu with images and descriptions</div><div className='desc-meta'><VersionBadge type='added' since='1.6.8.0'/></div></td>
    </tr>
  </tbody>
</Table>

### UI : Console
<Table>
  <thead><tr><th>Name</th><th>Default</th><th>Min</th><th>Max</th><th>Description</th></tr></thead>
  <tbody>
    <tr id='dev_console'>
      <td className='name'>dev_console</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'><div className='text'>Allows access to the in-game console without displaying the main menu (GameUI)<br/>`0` The console opens against the main menu background<br/>`1` The console can open directly in-game (including over the loading dialog when connecting to a server)</div><div className='desc-meta'><VersionBadge type='added' since='2.5.0.0'/></div></td>
    </tr>
    <tr id='console'>
      <td className='name'>console</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Enables/disables console access</td>
    </tr>
    <tr id='con_color'>
      <td className='name'>con_color</td>
      <td className='def color'><div style={{background: `rgba(255,180,30,0.85)`, color: `#111`}}>255 180 30</div></td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Sets the color of text in the console in RGB format</td>
    </tr>
    <tr id='con_mono'>
      <td className='name'>con_mono</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Enables monospaced font in the console</td>
    </tr>
    <tr id='con_notifytime'>
      <td className='name'>con_notifytime</td>
      <td className='def'>4</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Time in seconds that console messages are displayed in the corner of the screen</td>
    </tr>
    <tr id='con_shifttoggleconsole'>
      <td className='name'>con_shifttoggleconsole</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>When set to `1`, the console opens only when Shift + ~ (tilde) is pressed</td>
    </tr>
  </tbody>
</Table>

### HUD
<Table>
  <thead><tr><th>Name</th><th>Default</th><th>Min</th><th>Max</th><th>Description</th></tr></thead>
  <tbody>
    <tr id='hud_draw'>
      <td className='name'>hud_draw</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Enables/disables the display of all HUD elements</td>
    </tr>
    <tr id='hud_draw_only_deathnotices'>
      <td className='name'>hud_draw_only_deathnotices</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'><div className='text'>When set to `1`, only death notices are displayed from all HUD elements (useful for recording videos)</div><div className='desc-meta'><VersionBadge type='added' since='2.3.6.0'/></div></td>
    </tr>
    <tr id='hud_drawhistory_time'>
      <td className='name'>hud_drawhistory_time</td>
      <td className='def'>5</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Time in seconds that weapon and equipment icons remain in the HUD after being picked up</td>
    </tr>
    <tr id='hud_fastswitch'>
      <td className='name'>hud_fastswitch</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Enables fast weapon switching without needing an extra click<br/>`1` enabled<br/>`0` disabled</td>
    </tr>
    <tr id='hud_takesshots'>
      <td className='name'>hud_takesshots</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Automatically takes a screenshot of the scoreboard before a map change</td>
    </tr>
    <tr id='hud_centerid'>
      <td className='name'>hud_centerid</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Displays a player's name when you aim at them<br/>`0` in the bottom left corner<br/>`1` in the center of the screen</td>
    </tr>
    <tr id='hud_color'>
      <td className='name'>hud_color</td>
      <td className='def color'><div style={{background: `rgba(255,160,0,0.85)`, color: `#111`}}>255 160 0</div></td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'><div className='text'>Sets the primary color for HUD elements (health, armor, timer, etc.)</div><div className='desc-meta'><VersionBadge type='added' since='2.3.1.0'/></div></td>
    </tr>
    <tr id='fov_lerp_in'>
      <td className='name'>fov_lerp_in</td>
      <td className='def'>0</td>
      <td className='min'>0</td>
      <td className='max'>5</td>
      <td className='desc'><div className='text'>Speed of smooth zoom-in (FOV change) when using a scope (e.g., on sniper rifles)</div><div className='desc-meta'><VersionBadge type='added' since='2.5.6.0'/></div></td>
    </tr>
    <tr id='fov_lerp_out'>
      <td className='name'>fov_lerp_out</td>
      <td className='def'>0</td>
      <td className='min'>0</td>
      <td className='max'>5</td>
      <td className='desc'><div className='text'>Speed of smooth zoom-out (FOV change) when exiting scope view</div><div className='desc-meta'><VersionBadge type='added' since='2.5.6.0'/></div></td>
    </tr>
    <tr id='fov_lerp_sniper_instant'>
      <td className='name'>fov_lerp_sniper_instant</td>
      <td className='def'>1</td>
      <td className='min'>0</td>
      <td className='max'>1</td>
      <td className='desc'><div className='text'>Instant field of view (FOV) recovery after firing a sniper rifle<br/>Set to `0` for smooth FOV recovery (controlled by `fov_lerp_in`)</div><div className='desc-meta'><VersionBadge type='added' since='2.5.6.0'/></div></td>
    </tr>
    <tr id='cl_demo_showkeys'>
      <td className='name'>cl_demo_showkeys</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'><div className='text'>Show pressed movement keys (WASD, Jump, Duck) on screen while watching a first-person demo</div><div className='desc-meta'><VersionBadge type='added' since='2.5.6.0'/></div></td>
    </tr>
    <tr id='cl_locationalpha'>
      <td className='name'>cl_locationalpha</td>
      <td className='def'>150</td>
      <td className='min'>0</td>
      <td className='max'>255</td>
      <td className='desc'><div className='text'>Sets the transparency of the location name text on the map</div><div className='desc-meta'><VersionBadge type='added' since='2.3.0.0'/></div></td>
    </tr>
    <tr id='cl_weaponlistfix'>
      <td className='name'>cl_weaponlistfix</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Fixes the weapon list display (in Half-Life)</td>
    </tr>
    <tr id='cl_radartype'>
      <td className='name'>cl_radartype</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Sets the radar type<br/>`0` transparent<br/>`1` solid</td>
    </tr>
    <tr id='showpause'>
      <td className='name'>showpause</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Displays a pause icon when the game is paused</td>
    </tr>
    <tr id='scr_centertime'>
      <td className='name'>scr_centertime</td>
      <td className='def'>2</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Time in seconds that server messages are displayed in the center of the screen</td>
    </tr>
    <tr id='scr_printspeed'>
      <td className='name'>scr_printspeed</td>
      <td className='def'>8</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>The print speed of text messages on the screen</td>
    </tr>
  </tbody>
</Table>

#### HUD : Crosshair
<Table>
  <thead><tr><th>Name</th><th>Default</th><th>Min</th><th>Max</th><th>Description</th></tr></thead>
  <tbody>
    <tr id='crosshair'>
      <td className='name'>crosshair</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Enables/disables the display of the crosshair</td>
    </tr>
    <tr id='cl_crosshair_drawoutline'>
      <td className='name'>cl_crosshair_drawoutline</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'><div className='text'>Adds a black outline around the crosshair for better visibility</div><div className='desc-meta'><VersionBadge type='added' since='1.2.0.0'/></div></td>
    </tr>
    <tr id='cl_crosshair_dynamic_maxdist_splitratio'>
      <td className='name'>cl_crosshair_dynamic_maxdist_splitratio</td>
      <td className='def'>0.35</td>
      <td className='min'>0.0</td>
      <td className='max'>1.0</td>
      <td className='desc'><div className='text'>With `cl_crosshairstyle 2`, defines the length ratio of the inner and outer parts of the crosshair when it splits<br/>`inner` = cl_crosshairsize * (1 — cl_crosshair_dynamic_maxdist_splitratio)<br/>`outer` = cl_crosshairsize * cl_crosshair_dynamic_maxdist_splitratio</div><div className='desc-meta'><VersionBadge type='added' since='1.2.0.0'/></div></td>
    </tr>
    <tr id='cl_crosshair_dynamic_splitalpha_innermod'>
      <td className='name'>cl_crosshair_dynamic_splitalpha_innermod</td>
      <td className='def'>1</td>
      <td className='min'>0.0</td>
      <td className='max'>1.0</td>
      <td className='desc'><div className='text'>With `cl_crosshairstyle 2`, sets the transparency modifier for the INNER crosshair pips after they split</div><div className='desc-meta'><VersionBadge type='added' since='1.2.0.0'/></div></td>
    </tr>
    <tr id='cl_crosshair_dynamic_splitalpha_outermod'>
      <td className='name'>cl_crosshair_dynamic_splitalpha_outermod</td>
      <td className='def'>0.5</td>
      <td className='min'>0.3</td>
      <td className='max'>1.0</td>
      <td className='desc'><div className='text'>With `cl_crosshairstyle 2`, sets the transparency modifier for the OUTER crosshair pips after they split</div><div className='desc-meta'><VersionBadge type='added' since='1.2.0.0'/></div></td>
    </tr>
    <tr id='cl_crosshair_dynamic_splitdist'>
      <td className='name'>cl_crosshair_dynamic_splitdist</td>
      <td className='def'>7</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'><div className='text'>With `cl_crosshairstyle 2`, sets the distance the crosshair pips will split</div><div className='desc-meta'><VersionBadge type='added' since='1.2.0.0'/></div></td>
    </tr>
    <tr id='cl_crosshair_friendly_warning'>
      <td className='name'>cl_crosshair_friendly_warning</td>
      <td className='def'>0</td>
      <td className='min'>0</td>
      <td className='max'>2</td>
      <td className='desc'><div className='text'>Shows a warning icon ('X') when aiming at a teammate<br/>`0` off<br/>`1` Only for default crosshair styles<br/>`2` Always on</div><div className='desc-meta'><VersionBadge type='added' since='1.2.0.0'/></div></td>
    </tr>
    <tr id='cl_crosshair_outlinethickness'>
      <td className='name'>cl_crosshair_outlinethickness</td>
      <td className='def'>1</td>
      <td className='min'>0.1</td>
      <td className='max'>3.0</td>
      <td className='desc'><div className='text'>Sets the thickness of the crosshair outline (from 0.1 to 3.0)</div><div className='desc-meta'><VersionBadge type='added' since='1.2.0.0'/></div></td>
    </tr>
    <tr id='cl_crosshair_recoverytime_on_fps'>
      <td className='name'>cl_crosshair_recoverytime_on_fps</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'><div className='text'>Makes crosshair recovery time (after firing) dependent on FPS<br/>`1` dependent<br/>`0` independent</div><div className='desc-meta'><VersionBadge type='added' since='1.2.0.0'/></div></td>
    </tr>
    <tr id='cl_crosshair_sniper_show_normal_inaccuracy'>
      <td className='name'>cl_crosshair_sniper_show_normal_inaccuracy</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'><div className='text'>Includes 'no-scope' inaccuracy when calculating the blur of the sniper scope crosshair</div><div className='desc-meta'><VersionBadge type='added' since='1.2.0.0'/></div></td>
    </tr>
    <tr id='cl_crosshair_sniper_style'>
      <td className='name'>cl_crosshair_sniper_style</td>
      <td className='def'>0</td>
      <td className='min'>0</td>
      <td className='max'>1</td>
      <td className='desc'><div className='text'>`0` Classic static sniper scope<br/>`1` Accurate dynamic sniper scope</div><div className='desc-meta'><VersionBadge type='added' since='1.2.0.0'/></div></td>
    </tr>
    <tr id='cl_crosshair_sniper_width'>
      <td className='name'>cl_crosshair_sniper_width</td>
      <td className='def'>1</td>
      <td className='min'>1</td>
      <td className='max'>20</td>
      <td className='desc'><div className='text'>Sets the thickness of the sniper scope lines<br/>`1` is one pixel thick</div><div className='desc-meta'><VersionBadge type='added' since='2.2.1.0'/></div></td>
    </tr>
    <tr id='cl_crosshair_t'>
      <td className='name'>cl_crosshair_t</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'><div className='text'>Enables a T-shaped crosshair (removes the top line)</div><div className='desc-meta'><VersionBadge type='added' since='1.2.0.0'/></div></td>
    </tr>
    <tr id='cl_crosshairalpha'>
      <td className='name'>cl_crosshairalpha</td>
      <td className='def'>255</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'><div className='text'>Sets the crosshair transparency (0 — 255). The lower the value, the more transparent the crosshair. Requires `cl_crosshairusealpha 1`</div><div className='desc-meta'><VersionBadge type='added' since='1.2.0.0'/></div></td>
    </tr>
    <tr id='cl_crosshaircolor'>
      <td className='name'>cl_crosshaircolor</td>
      <td className='def color'><div style={{background: `rgba(50,250,50,0.85)`, color: `#111`}}>50 250 50</div></td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'><div className='text'>Sets the crosshair color in RGB format</div><div className='desc-meta'><VersionBadge type='added' since='2.3.1.0'/></div></td>
    </tr>
    <tr id='cl_crosshairdot'>
      <td className='name'>cl_crosshairdot</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'><div className='text'>Adds a dot to the center of the crosshair. If you set `cl_crosshairsize 0`, only the dot will remain</div><div className='desc-meta'><VersionBadge type='added' since='1.2.0.0'/></div></td>
    </tr>
    <tr id='cl_crosshairgap'>
      <td className='name'>cl_crosshairgap</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'><div className='text'>Sets the size of the gap between the crosshair pips</div><div className='desc-meta'><VersionBadge type='added' since='1.2.0.0'/></div></td>
    </tr>
    <tr id='cl_crosshairgap_useweaponvalue'>
      <td className='name'>cl_crosshairgap_useweaponvalue</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'><div className='text'>If `1`, the crosshair gap will change dynamically based on the selected weapon</div><div className='desc-meta'><VersionBadge type='added' since='1.2.0.0'/></div></td>
    </tr>
    <tr id='cl_crosshairscale'>
      <td className='name'>cl_crosshairscale</td>
      <td className='def'>0</td>
      <td className='min'>0</td>
      <td className='max'>3</td>
      <td className='desc'><div className='text'>Adjusts the scaling of the crosshair size based on screen resolution. `0` = Auto (Proportional), or resolution values like `480`, `640`, `1024`</div><div className='desc-meta'><VersionBadge type='added' since='2.3.2.0'/></div></td>
    </tr>
    <tr id='cl_crosshairsize'>
      <td className='name'>cl_crosshairsize</td>
      <td className='def'>5</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'><div className='text'>Sets the length of the crosshair pips</div><div className='desc-meta'><VersionBadge type='added' since='1.2.0.0'/></div></td>
    </tr>
    <tr id='cl_crosshairstyle'>
      <td className='name'>cl_crosshairstyle</td>
      <td className='def'>6</td>
      <td className='min'>0</td>
      <td className='max'>6</td>
      <td className='desc'><div className='text'>`0` DEFAULT<br/>`1` DEFAULT STATIC<br/>`2` ACCURATE SPLIT (accurate recoil/spread with a fixed inner part)<br/>`3` ACCURATE DYNAMIC (accurate recoil/spread)<br/>`4` CLASSIC STATIC<br/>`5` OLD CS STYLE (inaccurate recoil/feedback)<br/>`6` ORIGINAL CS 1.6</div><div className='desc-meta'><VersionBadge type='added' since='1.2.0.0'/></div></td>
    </tr>
    <tr id='cl_crosshairthickness'>
      <td className='name'>cl_crosshairthickness</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'><div className='text'>Adjusts the thickness of the crosshair lines</div><div className='desc-meta'><VersionBadge type='added' since='1.2.0.0'/></div></td>
    </tr>
    <tr id='cl_crosshairusealpha'>
      <td className='name'>cl_crosshairusealpha</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'><div className='text'>Enables/disables the ability to set crosshair transparency with `cl_crosshairalpha`</div><div className='desc-meta'><VersionBadge type='added' since='1.2.0.0'/></div></td>
    </tr>
    <tr id='cl_fixedcrosshairgap'>
      <td className='name'>cl_fixedcrosshairgap</td>
      <td className='def'>3</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'><div className='text'>Sets the gap size for a static crosshair</div><div className='desc-meta'><VersionBadge type='added' since='1.2.0.0'/></div></td>
    </tr>
    <tr id='weapon_debug_spread_gap'>
      <td className='name'>weapon_debug_spread_gap</td>
      <td className='def'>0.67</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'><div className='text'>Coefficient for `weapon_debug_spread_show 3`</div><div className='desc-meta'><VersionBadge type='added' since='1.2.0.0'/></div></td>
    </tr>
    <tr id='weapon_debug_spread_show'>
      <td className='name'>weapon_debug_spread_show</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'><div className='text'>Enables debug display of weapon spread<br/>`1` shows a spread square<br/>`3` shows spread using a dynamic crosshair</div><div className='desc-meta'><VersionBadge type='added' since='1.2.0.0'/></div></td>
    </tr>
    <tr id='cl_dynamiccrosshair'>
      <td className='name'>cl_dynamiccrosshair</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Enables the dynamic crosshair (expands when moving and firing)<br/>`0` Off (static)<br/>`1` Standard behavior (based on actual accuracy)<br/>`2` Reacts only to firing recoil</td>
    </tr>
    <tr id='cl_observercrosshair'>
      <td className='name'>cl_observercrosshair</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Displays the crosshair in spectator mode</td>
    </tr>
  </tbody>
</Table>

#### HUD : Radar
<Table>
  <thead><tr><th>Name</th><th>Default</th><th>Min</th><th>Max</th><th>Description</th></tr></thead>
  <tbody>
    <tr id='hud_radar'>
      <td className='name'>hud_radar</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>
        <div className='text'>Enables an advanced HUD radar</div>
        <div className='desc-meta'>
         <SliderButton
           buttonName='Preview'
           boundsPadding={29}
           className='radar-halo'
           slides={[
             {type: 'compare',
               images: [
                 {type: 'image', path: '/assets/radar/standard.webp', desc: 'Radar Mode — Standard', label: 'hud_radar 0'},
                 {type: 'image', path:'/assets/radar/advanced.webp', desc: 'Radar Mode — Advanced', label: 'hud_radar 1'}
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
          Adjusts radar transparency (0 — 255)<br/>
          *Has no effect if <a href='#cl_radartype'>cl_radartype</a> is set (solid radar)*
        </div>
        <div className='desc-meta'>
          <SliderButton
            buttonName='Preview'
            slides={[
              {type: 'compare',
                images: [
                  {type: 'image', path: '/assets/radar/alpha_255.webp', desc: 'Radar — Opaque', label: 'hud_radar_alpha 255'},
                  {type: 'image', path:'/assets/radar/alpha_100.webp', desc: 'Radar — Translucent', label: 'hud_radar_alpha 100'}
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
        <div className='text'>If `0`, the radar map is fully utilized. Otherwise, the player is always centered on the radar, even at the map edges</div>
        <div className='desc-meta'>
          <SliderButton
            buttonName='Preview'
            boundsPadding={29}
            className='radar-halo'
            slides={[
              {type: 'compare',
                images: [
                  {path: '/assets/radar/non_centered.webp', desc: 'The player moves within the radar circle', label: 'hud_radar_always_centered 0'},
                  {path:'/assets/radar/centered.webp', desc: 'The player is always fixed in the center of the radar circle', label: 'hud_radar_always_centered 1'}
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
        <div className='text'>Background color of the radar (RGBA)</div>
        <div className='desc-meta'>
          <SliderButton
            buttonName='Preview'
            boundsPadding={29}
            className='radar-halo'
            slides={[
              {type: 'compare',
                images: [
                  {path: '/assets/radar/bgcolor_white.webp', desc: 'Radar background — White', label: 'hud_radar_bgcolor 255 255 255 255'},
                  {path:'/assets/radar/bgcolor_green.webp', desc: 'Radar background — Green', label: 'hud_radar_bgcolor 0 255 0 255'}
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
        <div className='text'>Foreground color of the radar (RGBA)</div>
        <div className='desc-meta'>
          <SliderButton
            buttonName='Preview'
            boundsPadding={29}
            className='radar-halo'
            slides={[
              {type: 'compare',
                images: [
                  {path: '/assets/radar/fgcolor_white.webp', desc: 'Radar foreground — White', label: 'hud_radar_fgcolor 255 255 255 255'},
                  {path:'/assets/radar/fgcolor_green.webp', desc: 'Radar foreground — Green', label: 'hud_radar_fgcolor 0 255 0 255'}
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
        <div className='text'>Sets the minimum icon scale on the radar (valid values are 0.05 to 1.0)</div>
        <div className='desc-meta'>
          <SliderButton
            buttonName='Preview'
            boundsPadding={29}
            className='radar-halo'
            slides={[
              {type: 'compare',
                images: [
                  {path: '/assets/radar/icon_scale_min_0_3.webp', desc: 'Icon scale', label: 'hud_radar_icon_scale_min 0.3'},
                  {path:'/assets/radar/icon_scale_min_1_0.webp', desc: 'Icon scale', label: 'hud_radar_icon_scale_min 1.0'}
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
        <div className='text'>Sets the color of the map border outline on the radar (RGBA)<br/>Only works if the outline thickness is set with <a href='#hud_radar_map_outlinethickness'>hud_radar_map_outlinethickness</a></div>
        <div className='desc-meta'>
          <SliderButton
            buttonName='Preview'
            boundsPadding={29}
            className='radar-halo'
            slides={[
              {type: 'compare',
                images: [
                  {path: '/assets/radar/map_outlinecolor_default.webp', desc: 'No outline', label: 'hud_radar_map_outlinecolor 0'},
                  {path:'/assets/radar/map_outlinecolor_white.webp', desc: 'With white outline', label: 'hud_radar_map_outlinecolor 255 255 255 255'}
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
        <div className='text'>Sets the thickness of the map border outline on the radar</div>
        <div className='desc-meta'>
          <SliderButton
            buttonName='Preview'
            boundsPadding={29}
            className='radar-halo'
            slides={[
              {type: 'compare',
                images: [
                  {path: '/assets/radar/map_outlinecolor_white.webp', desc: 'Outline thickness', label: 'hud_radar_map_outlinethickness 2'},
                  {path:'/assets/radar/map_outlinethickness_4.webp', desc: 'Outline thickness', label: 'hud_radar_map_outlinethickness 4'}
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
        <div className='text'>Sets the map's shade color (RGB)</div>
        <div className='desc-meta'>
          <SliderButton
            buttonName='Preview'
            boundsPadding={29}
            className='radar-halo'
            slides={[
              {type: 'compare',
                images: [
                  {path: '/assets/radar/map_shadecolor_default.webp', desc: 'No map shade', label: 'hud_radar_map_shadecolor 0'},
                  {path:'/assets/radar/map_shadecolor_green.webp', desc: 'Green map shade', label: 'hud_radar_map_shadecolor 0 255 0'}
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
        <div className='text'>Sets a solid color for the map (RGB)</div>
        <div className='desc-meta'>
          <SliderButton
            buttonName='Preview'
            boundsPadding={29}
            className='radar-halo'
            slides={[
              {type: 'compare',
                images: [
                  {path: '/assets/radar/map_shadecolor_default.webp', desc: 'No solid map color', label: 'hud_radar_map_solidcolor 0'},
                  {path:'/assets/radar/map_solidcolor_gray.webp', desc: 'Solid gray map color', label: 'hud_radar_map_solidcolor 110 110 110'}
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
        <div className='text'>Sets the map scale on the radar</div>
        <div className='desc-meta'>
          <SliderButton
            buttonName='Preview'
            boundsPadding={29}
            className='radar-halo'
            slides={[
              {type: 'compare',
                images: [
                  {path: '/assets/radar/mapscale_0_9.webp', desc: 'Map scale — zoomed-in', label: 'hud_radar_mapscale 0.9'},
                  {path:'/assets/radar/mapscale_0_5.webp', desc: 'Map scale — zoomed-out', label: 'hud_radar_mapscale 0.5'}
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
        <div className='text'>Enables dynamic map scaling to fit all available players on the radar.</div>
        <div className='desc-meta'>
          <SliderButton
            buttonName='Preview'
            boundsPadding={29}
            className='radar-halo'
            slides={[
              {type: 'compare',
                images: [
                  {path: '/assets/radar/mapscale_non_dynamic.webp', desc: 'Map scale — constant', label: 'hud_radar_mapscale_dynamic 0'},
                  {path:'/assets/radar/mapscale_dynamic.webp', desc: 'Map scale — auto-scales', label: 'hud_radar_mapscale_dynamic 1'}
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
      <td className='desc'><div className='text'>Sets the minimum scale threshold to prevent the map from becoming too small with dynamic scaling. (A scale of 0.5 usually covers the entire map)<br/><br/>See <a href='#hud_radar_mapscale_dynamic'>hud_radar_mapscale_dynamic</a></div><div className='desc-meta'><VersionBadge type='added' since='2.5.6.0'/></div></td>
    </tr>
    <tr id='hud_radar_objectives'>
      <td className='name'>hud_radar_objectives</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>
        <div className='text'>Enables the display of objectives (e.g., bomb sites) on the radar</div>
        <div className='desc-meta'>
          <SliderButton
            buttonName='Preview'
            boundsPadding={29}
            className='radar-halo'
            slides={[
              {type: 'compare',
                images: [
                  {path: '/assets/radar/objectives_off.webp', desc: 'Objectives are not shown on the map', label: 'hud_radar_objectives 0'},
                  {path:'/assets/radar/objectives_on.webp', desc: 'Objectives are shown on the map', label: 'hud_radar_objectives 1'}
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
      <td className='desc'><div className='text'>Sets the position of the radar on the screen<br/>`0` left<br/>`1` right</div><div className='desc-meta'><VersionBadge type='added' since='2.3.5.0'/></div></td>
    </tr>
    <tr id='hud_radar_rotate'>
      <td className='name'>hud_radar_rotate</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>
        <div className='text'>Enables map rotation along with the player</div>
        <div className='desc-meta'>
          <SliderButton
            buttonName='Preview'
            boundsPadding={29}
            className='radar-halo'
            slides={[
              {type: 'compare',
                images: [
                  {path: '/assets/radar/radar_rotate_off.webp', desc: 'Map does not rotate', label: 'hud_radar_rotate 0'},
                  {path:'/assets/radar/radar_rotate_on.webp', desc: 'Map rotates with the player', label: 'hud_radar_rotate 1'}
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
      <td className='desc'><div className='text'>Sets the overall scale of the radar (valid values from 0.5 to 3.0)</div><div className='desc-meta'><VersionBadge type='added' since='2.3.0.0'/></div></td>
    </tr>
    <tr id='hud_radar_scale_with_scoreboard'>
      <td className='name'>hud_radar_scale_with_scoreboard</td>
      <td className='def'>0</td>
      <td className='min'>0</td>
      <td className='max'>3</td>
      <td className='desc'><div className='text'>Sets the radar scale when the scoreboard is open. If `0`, scaling is disabled</div><div className='desc-meta'><VersionBadge type='added' since='2.5.0.0'/></div></td>
    </tr>
    <tr id='hud_radar_shapecolor'>
      <td className='name'>hud_radar_shapecolor</td>
      <td className='def color'><div style={{background: `rgba(158,158,158,0.85)`, color:`var(--ifm-font-color-base)`}}>158 158 158</div></td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>
        <div className='text'>Color of the module shape around the radar (RGB)<br/><br/>It is not recommended to use red shades, as the radar module pulses red when the bomb is planted</div>
        <div className='desc-meta'>
          <SliderButton
            buttonName='Preview'
            boundsPadding={29}
            className='radar-halo'
            slides={[
              {type: 'compare',
                images: [
                  {path: '/assets/radar/module_shapecolor_default.webp', desc: 'Light gray radar module', label: 'hud_radar_shapecolor 158 158 158'},
                  {path:'/assets/radar/module_shapecolor_green.webp', desc: 'Green radar module', label: 'hud_radar_shapecolor 0 200 0'}
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
        <div className='text'>Show player health on the overview map</div>
        <div className='desc-meta'>
          <SliderButton
            buttonName='Preview'
            boundsPadding={29}
            className='radar-halo'
            slides={[
              {type: 'compare',
                images: [
                  {type: 'image', path: '/assets/radar/show_default.webp', desc: 'Players Health on Map — Disabled', label: 'hud_radar_showhealth 0'},
                  {type: 'image', path:'/assets/radar/show_health.webp', desc: 'Players Health on Map — Enabled', label: 'hud_radar_showhealth 1'}
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
        <div className='text'>Show player names on the overview map</div>
        <div className='desc-meta'>
          <SliderButton
            buttonName='Preview'
            boundsPadding={29}
            className='radar-halo'
            slides={[
              {type: 'compare',
                images: [
                  {type: 'image', path: '/assets/radar/show_default.webp', desc: 'Player names on the map — Disabled', label: 'hud_radar_shownames 0'},
                  {type: 'image', path:'/assets/radar/show_names.webp', desc: 'Player names on map — Enabled', label: 'hud_radar_shownames 1'}
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
        <div className='text'>Show player tracks on the overview map</div>
        <div className='desc-meta'>
          <SliderButton
            buttonName='Preview'
            boundsPadding={29}
            className='radar-halo'
            slides={[
              {type: 'compare',
                images: [
                  {type: 'image', path: '/assets/radar/show_default.webp', desc: 'Player tracks on the map — Disabled', label: 'hud_radar_showtracks 0'},
                  {type: 'image', path:'/assets/radar/show_tracks.webp', desc: 'Player tracks on the map — Enabled', label: 'hud_radar_showtracks 1'}
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
        <div className='text'>Enables square radar shape</div>
        <div className='desc-meta'>
          <SliderButton
            buttonName='Preview'
            boundsPadding={29}
            className='radar-halo'
            slides={[
              {type: 'compare',
                images: [
                  {type: 'image', path: '/assets/radar/radar_round.webp', desc: 'Radar appearance — Round', label: 'hud_radar_square 0'},
                  {type: 'image', path:'/assets/radar/radar_square.webp', desc: 'Radar appearance — Square', label: 'hud_radar_square 1'}
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
      <td className='desc'><div className='text'>If `1`, the radar will become square when the scoreboard is open</div><div className='desc-meta'><VersionBadge type='added' since='2.3.4.0'/></div></td>
    </tr>
    <tr id='hud_radar_table_rotate'>
      <td className='name'>hud_radar_table_rotate</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'><div className='text'>Rotate the square radar when the scoreboard is open</div><div className='desc-meta'><VersionBadge type='added' since='2.3.4.0'/></div></td>
    </tr>
    <tr id='hud_radar_takeshot'>
      <td className='name'>hud_radar_takeshot</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'><div className='text'>Automatically create a map image and script for the radar if they are missing</div><div className='desc-meta'><VersionBadge type='added' since='2.5.0.0'/></div></td>
    </tr>
    <tr id='hud_radar_takeshot_quality'>
      <td className='name'>hud_radar_takeshot_quality</td>
      <td className='def'>65</td>
      <td className='min'>10</td>
      <td className='max'>100</td>
      <td className='desc'><div className='text'>Sets the quality (in percent) of the generated map image for the radar</div><div className='desc-meta'><VersionBadge type='added' since='2.5.0.0'/></div></td>
    </tr>
    <tr id='hud_radar_x'>
      <td className='name'>hud_radar_x</td>
      <td className='def'>16</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'><div className='text'>Radar position on the X-axis</div><div className='desc-meta'><VersionBadge type='added' since='2.3.0.0'/></div></td>
    </tr>
    <tr id='hud_radar_y'>
      <td className='name'>hud_radar_y</td>
      <td className='def'>16</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'><div className='text'>Radar position on the Y-axis</div><div className='desc-meta'><VersionBadge type='added' since='2.3.0.0'/></div></td>
    </tr>
    <tr>
      <td colSpan='5' className='name'><a href='#cl_radartype'>cl_radartype</a></td>
    </tr>
  </tbody>
</Table>

#### HUD : Death Notice
<Table>
  <thead><tr><th>Name</th><th>Default</th><th>Min</th><th>Max</th><th>Description</th></tr></thead>
  <tbody>
    <tr id='hud_deathnotice_draw'>
      <td className='name'>hud_deathnotice_draw</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'><div className='text'>Display kill notifications (killfeed)</div><div className='desc-meta'><VersionBadge type='added' since='2.0.0.0'/></div></td>
    </tr>
    <tr id='hud_deathnotice_fade'>
      <td className='name'>hud_deathnotice_fade</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'><div className='text'>Enables smooth fade-in and fade-out of kill notifications</div><div className='desc-meta'><VersionBadge type='added' since='2.3.0.0'/></div></td>
    </tr>
    <tr id='hud_deathnotice_gap'>
      <td className='name'>hud_deathnotice_gap</td>
      <td className='def'>4</td>
      <td className='min'>0</td>
      <td className='max'>-</td>
      <td className='desc'><div className='text'>Sets the gap between lines in the killfeed</div><div className='desc-meta'><VersionBadge type='added' since='2.3.0.0'/></div></td>
    </tr>
    <tr id='hud_deathnotice_iconcolor'>
      <td className='name'>hud_deathnotice_iconcolor</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'><div className='text'>Overrides RGBA colors for icons in the killfeed</div><div className='desc-meta'><VersionBadge type='added' since='2.3.0.0'/></div></td>
    </tr>
    <tr id='hud_deathnotice_iconscale'>
      <td className='name'>hud_deathnotice_iconscale</td>
      <td className='def'>0.85</td>
      <td className='min'>0.5</td>
      <td className='max'>5</td>
      <td className='desc'><div className='text'>Sets the scale of kill icons (valid values from 0.5 to 5.0)</div><div className='desc-meta'><VersionBadge type='added' since='2.3.0.0'/></div></td>
    </tr>
    <tr id='hud_deathnotice_iconshd'>
      <td className='name'>hud_deathnotice_iconshd</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'><div className='text'>Sets the quality of kill icons<br/>`0` low (classic)<br/>`1` high</div><div className='desc-meta'><VersionBadge type='added' since='2.3.4.0'/></div></td>
    </tr>
    <tr id='hud_deathnotice_killrarity'>
      <td className='name'>hud_deathnotice_killrarity</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'><div className='text'>Display kill rarity icons<br/>`0` Headshot icon only<br/>`1` Display all icons</div><div className='desc-meta'><VersionBadge type='added' since='2.3.0.0'/></div></td>
    </tr>
    <tr id='hud_deathnotice_max'>
      <td className='name'>hud_deathnotice_max</td>
      <td className='def'>6</td>
      <td className='min'>1</td>
      <td className='max'>-</td>
      <td className='desc'><div className='text'>Maximum number of kill notifications to display</div><div className='desc-meta'><VersionBadge type='added' since='2.0.0.0'/></div></td>
    </tr>
    <tr id='hud_deathnotice_outlinethickness'>
      <td className='name'>hud_deathnotice_outlinethickness</td>
      <td className='def'>3</td>
      <td className='min'>-20</td>
      <td className='max'>20</td>
      <td className='desc'><div className='text'>Sets the outline thickness for kill notifications</div><div className='desc-meta'><VersionBadge type='added' since='2.3.0.0'/></div></td>
    </tr>
    <tr id='hud_deathnotice_panel_pos'>
      <td className='name'>hud_deathnotice_panel_pos</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'><div className='text'>Sets the position of the killfeed<br/>`0` left<br/>`1` right</div><div className='desc-meta'><VersionBadge type='added' since='2.3.0.0'/></div></td>
    </tr>
    <tr id='hud_deathnotice_style'>
      <td className='name'>hud_deathnotice_style</td>
      <td className='def'>3</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'><div className='text'>Sets the style of kill notifications<br/>`0` DEFAULT<br/>`1` CSO STYLE<br/>`2` CSGO STYLE (OUTLINE ONLY ON LOCAL PLAYER)<br/>`3` CSGO STYLE (OUTLINE AND BACKGROUND)</div><div className='desc-meta'><VersionBadge type='added' since='2.3.0.0'/></div></td>
    </tr>
    <tr id='hud_deathnotice_time'>
      <td className='name'>hud_deathnotice_time</td>
      <td className='def'>6</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Time in seconds that kill notifications are displayed</td>
    </tr>
  </tbody>
</Table>

#### HUD : Scoreboard
<Table>
  <thead><tr><th>Name</th><th>Default</th><th>Min</th><th>Max</th><th>Description</th></tr></thead>
  <tbody>
    <tr id='scoreboard_shortheaders'>
      <td className='name'>scoreboard_shortheaders</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Use short headers in the scoreboard</td>
    </tr>
    <tr id='scoreboard_showavatars'>
      <td className='name'>scoreboard_showavatars</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Display player avatars in the scoreboard</td>
    </tr>
    <tr id='scoreboard_showhealth'>
      <td className='name'>scoreboard_showhealth</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Display player health in the scoreboard</td>
    </tr>
    <tr id='scoreboard_showmoney'>
      <td className='name'>scoreboard_showmoney</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Display player money in the scoreboard</td>
    </tr>
    <tr id='scoreboard_players_linespacing'>
      <td className='name'>scoreboard_players_linespacing</td>
      <td className='def'>22</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'><div className='text'>Line spacing for players in the scoreboard</div><div className='desc-meta'><VersionBadge type='added' since='2.0.0.0'/></div></td>
    </tr>
    <tr id='scoreboard_players_linespacing_fixed'>
      <td className='name'>scoreboard_players_linespacing_fixed</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'><div className='text'>Use fixed line spacing</div><div className='desc-meta'><VersionBadge type='added' since='2.0.0.0'/></div></td>
    </tr>
    <tr id='scoreboard_showspeaker'>
      <td className='name'>scoreboard_showspeaker</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'><div className='text'>Display a speaker icon for talking players in the scoreboard</div><div className='desc-meta'><VersionBadge type='added' since='2.5.6.0'/></div></td>
    </tr>
  </tbody>
</Table>

#### HUD : Spectator
<Table>
  <thead><tr><th>Name</th><th>Default</th><th>Min</th><th>Max</th><th>Description</th></tr></thead>
  <tbody>
    <tr id='spec_autodirector'>
      <td className='name'>spec_autodirector</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Auto-director: the camera automatically switches between players and views</td>
    </tr>
    <tr id='spec_drawcone'>
      <td className='name'>spec_drawcone</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Displays a cone on the overview map showing the direction the spectated player is looking</td>
    </tr>
    <tr id='spec_drawnames'>
      <td className='name'>spec_drawnames</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Enables/disables the display of player names on the overview map</td>
    </tr>
    <tr id='spec_drawstatus'>
      <td className='name'>spec_drawstatus</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Enables/disables game information (map, round time, etc.) in the top right corner of the screen in spectator mode</td>
    </tr>
    <tr id='spec_movespeedkey'>
      <td className='name'>spec_movespeedkey</td>
      <td className='def'>3.55</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Movement speed multiplier in spectator mode when holding the Shift key</td>
    </tr>
    <tr id='spec_pip'>
      <td className='name'>spec_pip</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Enables 'Picture-in-Picture' spectator mode</td>
    </tr>
    <tr id='spec_scoreboard'>
      <td className='name'>spec_scoreboard</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Enables/disables the scoreboard display in spectator mode</td>
    </tr>
  </tbody>
</Table>

#### HUD : Chat / Text
<Table>
  <thead><tr><th>Name</th><th>Default</th><th>Min</th><th>Max</th><th>Description</th></tr></thead>
  <tbody>
    <tr id='hud_message'>
      <td className='name'>hud_message</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'><div className='text'>Show HUD messages<br/>`0` Disabled<br/>`1` All messages<br/>`2` HUD messages only<br/>`3` DHUD messages only</div><div className='desc-meta'><VersionBadge type='added' since='2.3.0.0'/></div></td>
    </tr>
    <tr id='hud_headname'>
      <td className='name'>hud_headname</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>
        <div className='text'>
          Show the name above a teammate's head or a tracked player's head (with `trackplayer` command) <a className='ref-link' href='/en/docs/refs/configuration/commands#trackplayer'/><br/>
          `0` Disabled<br/>
          `1` Enabled<br/>
          `2` Shows all player names during demo playback
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
      <td className='desc'>Controls the display of in-game chat<br/>`0` Disable chat<br/>`1` Display chat, input field on top<br/>`2` Display chat, input field below chat text</td>
    </tr>
    <tr id='hud_saytext_fade'>
      <td className='name'>hud_saytext_fade</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'><div className='text'>Enables smooth fade-in and fade-out of chat messages</div><div className='desc-meta'><VersionBadge type='added' since='2.3.5.0'/></div></td>
    </tr>
    <tr id='hud_saytext_gap'>
      <td className='name'>hud_saytext_gap</td>
      <td className='def'>1</td>
      <td className='min'>0</td>
      <td className='max'>-</td>
      <td className='desc'><div className='text'>Sets the gap between lines in the chat</div><div className='desc-meta'><VersionBadge type='added' since='2.3.5.0'/></div></td>
    </tr>
    <tr id='hud_saytext_max'>
      <td className='name'>hud_saytext_max</td>
      <td className='def'>5</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'><div className='text'>Maximum number of simultaneously displayed chat messages</div><div className='desc-meta'><VersionBadge type='added' since='2.3.4.0'/></div></td>
    </tr>
    <tr id='hud_saytext_time'>
      <td className='name'>hud_saytext_time</td>
      <td className='def'>5</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Time chat messages are displayed (in seconds)</td>
    </tr>
  </tbody>
</Table>

#### HUD : Speedometer
<Table>
  <thead><tr><th>Name</th><th>Default</th><th>Min</th><th>Max</th><th>Description</th></tr></thead>
  <tbody>
    <tr id='hud_speedometer'>
      <td className='name'>hud_speedometer</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'><div className='text'>Enable the speedometer</div><div className='desc-meta'><VersionBadge type='added' since='2.5.6.0'/></div></td>
    </tr>
    <tr id='hud_speedometer_stayjump'>
      <td className='name'>hud_speedometer_stayjump</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'><div className='text'>Do not update speed while the player is in the air (shows speed at the moment of the jump)</div><div className='desc-meta'><VersionBadge type='added' since='2.5.6.0'/></div></td>
    </tr>
    <tr id='hud_speedometer_x'>
      <td className='name'>hud_speedometer_x</td>
      <td className='def'>-1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'><div className='text'>Speedometer position on the X-axis (-1 for center)</div><div className='desc-meta'><VersionBadge type='added' since='2.5.6.0'/></div></td>
    </tr>
    <tr id='hud_speedometer_y'>
      <td className='name'>hud_speedometer_y</td>
      <td className='def'>-1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'><div className='text'>Speedometer position on the Y-axis</div><div className='desc-meta'><VersionBadge type='added' since='2.5.6.0'/></div></td>
    </tr>
  </tbody>
</Table>

## Movement
<Table>
  <thead><tr><th>Name</th><th>Default</th><th>Min</th><th>Max</th><th>Description</th></tr></thead>
  <tbody>
    <tr id='cl_upspeed'>
      <td className='name'>cl_upspeed</td>
      <td className='def'>320</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Speed of moving up ladders</td>
    </tr>
    <tr id='cl_sidespeed'>
      <td className='name'>cl_sidespeed</td>
      <td className='def'>400</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Sideways (strafe) movement speed</td>
    </tr>
    <tr id='cl_backspeed'>
      <td className='name'>cl_backspeed</td>
      <td className='def'>400</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Backward movement speed</td>
    </tr>
    <tr id='cl_pitchspeed'>
      <td className='name'>cl_pitchspeed</td>
      <td className='def'>225</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Speed of changing the vertical view angle (up/down) with the keyboard</td>
    </tr>
    <tr id='cl_anglespeedkey'>
      <td className='name'>cl_anglespeedkey</td>
      <td className='def'>0.67</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Turning speed multiplier when using the keyboard</td>
    </tr>
    <tr id='cl_forwardspeed'>
      <td className='name'>cl_forwardspeed</td>
      <td className='def'>400</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Forward movement speed</td>
    </tr>
    <tr id='cl_movespeedkey'>
      <td className='name'>cl_movespeedkey</td>
      <td className='def'>0.52</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Movement speed multiplier when walking slowly (walk)</td>
    </tr>
    <tr id='cl_yawspeed'>
      <td className='name'>cl_yawspeed</td>
      <td className='def'>210</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Speed of changing the horizontal view angle (left/right) with the keyboard</td>
    </tr>
  </tbody>
</Table>

## Mouse Control
<Table>
  <thead><tr><th>Name</th><th>Default</th><th>Min</th><th>Max</th><th>Description</th></tr></thead>
  <tbody>
    <tr id='sensitivity'>
      <td className='name'>sensitivity</td>
      <td className='def'>3</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Sets mouse sensitivity</td>
    </tr>
    <tr id='m_rawinput'>
      <td className='name'>m_rawinput</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Use raw mouse input (bypassing OS settings)</td>
    </tr>
    <tr id='m_customaccel'>
      <td className='name'>m_customaccel</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Enables custom mouse acceleration</td>
    </tr>
    <tr id='m_customaccel_exponent'>
      <td className='name'>m_customaccel_exponent</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Exponent for the mouse acceleration curve</td>
    </tr>
    <tr id='m_customaccel_max'>
      <td className='name'>m_customaccel_max</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Maximum mouse acceleration value</td>
    </tr>
    <tr id='m_customaccel_scale'>
      <td className='name'>m_customaccel_scale</td>
      <td className='def'>0.04</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Mouse acceleration scale</td>
    </tr>
    <tr id='m_filter'>
      <td className='name'>m_filter</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Enables mouse movement filtering (smoothing)</td>
    </tr>
    <tr id='m_forward'>
      <td className='name'>m_forward</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Sets the mouse sensitivity multiplier for forward/backward movement</td>
    </tr>
    <tr id='m_mousethread_sleep'>
      <td className='name'>m_mousethread_sleep</td>
      <td className='def'>10</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Mouse thread 'sleep' time in ms, affects polling rate</td>
    </tr>
    <tr id='m_noforcemaccel'>
      <td className='name'>m_noforcemaccel</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Use Windows mouse acceleration settings</td>
    </tr>
    <tr id='m_noforcemparms'>
      <td className='name'>m_noforcemparms</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Use Windows mouse button parameters</td>
    </tr>
    <tr id='m_noforcemspd'>
      <td className='name'>m_noforcemspd</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Use Windows mouse speed settings</td>
    </tr>
    <tr id='m_pitch'>
      <td className='name'>m_pitch</td>
      <td className='def'>0.022</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Sets the mouse sensitivity multiplier for vertical view (up/down). A negative value inverts the axis</td>
    </tr>
    <tr id='m_side'>
      <td className='name'>m_side</td>
      <td className='def'>0.8</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Sets the mouse sensitivity multiplier for strafing</td>
    </tr>
    <tr id='m_yaw'>
      <td className='name'>m_yaw</td>
      <td className='def'>0.022</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Sets the mouse sensitivity multiplier for horizontal view (left/right)</td>
    </tr>
    <tr id='zoom_sensitivity_ratio'>
      <td className='name'>zoom_sensitivity_ratio</td>
      <td className='def'>1.2</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Mouse sensitivity multiplier when zoomed in (e.g., with sniper rifles)</td>
    </tr>
    <tr id='cl_mousegrab'>
      <td className='name'>cl_mousegrab</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Grab the mouse cursor inside the game window</td>
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
      <td className='desc'>The speed at which the view returns to the center after movement stops</td>
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
      <td className='desc'>Friction on object edges, affects sliding</td>
    </tr>
    <tr id='lookspring'>
      <td className='name'>lookspring</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Enables automatic view centering</td>
    </tr>
    <tr id='lookstrafe'>
      <td className='name'>lookstrafe</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Enables automatic strafing when moving the mouse left/right</td>
    </tr>
    <tr id='joyadvanced'>
      <td className='name'>joyadvanced</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Enables advanced joystick settings</td>
    </tr>
    <tr id='joyadvaxisr'>
      <td className='name'>joyadvaxisr</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Joystick R-axis settings</td>
    </tr>
    <tr id='joyadvaxisu'>
      <td className='name'>joyadvaxisu</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Joystick U-axis settings</td>
    </tr>
    <tr id='joyadvaxisv'>
      <td className='name'>joyadvaxisv</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Joystick V-axis settings</td>
    </tr>
    <tr id='joyadvaxisx'>
      <td className='name'>joyadvaxisx</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Joystick X-axis settings</td>
    </tr>
    <tr id='joyadvaxisy'>
      <td className='name'>joyadvaxisy</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Joystick Y-axis settings</td>
    </tr>
    <tr id='joyadvaxisz'>
      <td className='name'>joyadvaxisz</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Joystick Z-axis settings</td>
    </tr>
    <tr id='joyforwardsensitivity'>
      <td className='name'>joyforwardsensitivity</td>
      <td className='def'>-1.0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Joystick sensitivity for forward movement</td>
    </tr>
    <tr id='joyforwardthreshold'>
      <td className='name'>joyforwardthreshold</td>
      <td className='def'>0.15</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Joystick deadzone for forward movement</td>
    </tr>
    <tr id='joyname'>
      <td className='name'>joyname</td>
      <td className='def'>joystick</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Joystick name</td>
    </tr>
    <tr id='joypitchsensitivity'>
      <td className='name'>joypitchsensitivity</td>
      <td className='def'>1.0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Joystick sensitivity for vertical view</td>
    </tr>
    <tr id='joypitchthreshold'>
      <td className='name'>joypitchthreshold</td>
      <td className='def'>0.15</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Joystick deadzone for vertical view</td>
    </tr>
    <tr id='joysidesensitivity'>
      <td className='name'>joysidesensitivity</td>
      <td className='def'>-1.0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Joystick sensitivity for strafing</td>
    </tr>
    <tr id='joysidethreshold'>
      <td className='name'>joysidethreshold</td>
      <td className='def'>0.15</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Joystick deadzone for strafing</td>
    </tr>
    <tr id='joystick'>
      <td className='name'>joystick</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Enables joystick support</td>
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
      <td className='desc'>Joystick sensitivity for horizontal view</td>
    </tr>
    <tr id='joyyawthreshold'>
      <td className='name'>joyyawthreshold</td>
      <td className='def'>0.15</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Joystick deadzone for horizontal view</td>
    </tr>
  </tbody>
</Table>

## Camera
<Table>
  <thead><tr><th>Name</th><th>Default</th><th>Min</th><th>Max</th><th>Description</th></tr></thead>
  <tbody>
    <tr id='c_maxdistance'>
      <td className='name'>c_maxdistance</td>
      <td className='def'>200.0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Maximum camera distance in third-person mode</td>
    </tr>
    <tr id='c_maxpitch'>
      <td className='name'>c_maxpitch</td>
      <td className='def'>90.0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Maximum vertical camera pitch angle</td>
    </tr>
    <tr id='c_maxyaw'>
      <td className='name'>c_maxyaw</td>
      <td className='def'>135.0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Maximum horizontal camera yaw angle</td>
    </tr>
    <tr id='c_mindistance'>
      <td className='name'>c_mindistance</td>
      <td className='def'>30.0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Minimum camera distance in third-person mode</td>
    </tr>
    <tr id='c_minpitch'>
      <td className='name'>c_minpitch</td>
      <td className='def'>0.0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Minimum vertical camera pitch angle</td>
    </tr>
    <tr id='c_minyaw'>
      <td className='name'>c_minyaw</td>
      <td className='def'>-135.0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Minimum horizontal camera yaw angle</td>
    </tr>
    <tr id='cam_command'>
      <td className='name'>cam_command</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Enables camera control<br/>`0` first-person<br/>`1` third-person</td>
    </tr>
    <tr id='cam_idealdist'>
      <td className='name'>cam_idealdist</td>
      <td className='def'>64</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Ideal camera distance</td>
    </tr>
    <tr id='cam_idealpitch'>
      <td className='name'>cam_idealpitch</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Ideal vertical camera pitch angle</td>
    </tr>
    <tr id='cam_idealyaw'>
      <td className='name'>cam_idealyaw</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Ideal horizontal camera yaw angle</td>
    </tr>
    <tr id='cam_snapto'>
      <td className='name'>cam_snapto</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Instantly snaps the camera to the ideal position</td>
    </tr>
    <tr id='chase_active'>
      <td className='name'>chase_active</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Activates chase camera mode (camera follows the player)</td>
    </tr>
    <tr id='chase_back'>
      <td className='name'>chase_back</td>
      <td className='def'>100</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Distance from the camera to the player's back in chase camera mode</td>
    </tr>
    <tr id='chase_right'>
      <td className='name'>chase_right</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Camera offset to the right in chase camera mode</td>
    </tr>
    <tr id='chase_up'>
      <td className='name'>chase_up</td>
      <td className='def'>16</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Camera offset upwards in chase camera mode</td>
    </tr>
    <tr id='cl_chaseback'>
      <td className='name'>cl_chaseback</td>
      <td className='def'>15</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Distance from the camera to the player's back</td>
    </tr>
    <tr id='cl_chasedist'>
      <td className='name'>cl_chasedist</td>
      <td className='def'>112</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Camera follow distance</td>
    </tr>
    <tr id='cl_chaseright'>
      <td className='name'>cl_chaseright</td>
      <td className='def'>20</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Camera offset to the right</td>
    </tr>
    <tr id='cl_chaseup'>
      <td className='name'>cl_chaseup</td>
      <td className='def'>5</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Camera offset upwards</td>
    </tr>
    <tr id='cl_camera_follow_bone_index'>
      <td className='name'>cl_camera_follow_bone_index</td>
      <td className='def'>-2</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'><div className='text'>Index of the model bone for the camera to follow<br/>`-2` disabled<br/>`-1` root bone<br/>`0+` bone index</div><div className='desc-meta'><VersionBadge type='added' since='2.3.8.0'/></div></td>
    </tr>
  </tbody>
</Table>

## Viewmodel
<Table>
  <thead><tr><th>Name</th><th>Default</th><th>Min</th><th>Max</th><th>Description</th></tr></thead>
  <tbody>
    <tr id='viewsize'>
      <td className='name'>viewsize</td>
      <td className='def'>120</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Sets the rendering area size. Obsolete, use `viewmodel_fov`</td>
    </tr>
    <tr id='viewmodel_fov'>
      <td className='name'>viewmodel_fov</td>
      <td className='def'>90</td>
      <td className='min'>1</td>
      <td className='max'>179</td>
      <td className='desc'><div className='text'>Field of View (FOV) for the weapon model in hand</div><div className='desc-meta'><VersionBadge type='added' since='2.3.8.0'/></div></td>
    </tr>
    <tr id='viewmodel_lag_scale'>
      <td className='name'>viewmodel_lag_scale</td>
      <td className='def'>0</td>
      <td className='min'>0</td>
      <td className='max'>100</td>
      <td className='desc'><div className='text'>Sets the scale of the viewmodel sway</div><div className='desc-meta'><VersionBadge type='added' since='2.3.8.0'/></div></td>
    </tr>
    <tr id='viewmodel_lag_scale_crouch'>
      <td className='name'>viewmodel_lag_scale_crouch</td>
      <td className='def'>0</td>
      <td className='min'>0</td>
      <td className='max'>10</td>
      <td className='desc'><div className='text'>Sets the scale of the viewmodel sway when crouching</div><div className='desc-meta'><VersionBadge type='added' since='2.5.6.0'/></div></td>
    </tr>
    <tr id='viewmodel_lag_scale_jump'>
      <td className='name'>viewmodel_lag_scale_jump</td>
      <td className='def'>0</td>
      <td className='min'>0</td>
      <td className='max'>5</td>
      <td className='desc'><div className='text'>Sets the scale of the viewmodel sway when jumping</div><div className='desc-meta'><VersionBadge type='added' since='2.5.6.0'/></div></td>
    </tr>
    <tr id='viewmodel_lag_scale_land'>
      <td className='name'>viewmodel_lag_scale_land</td>
      <td className='def'>0</td>
      <td className='min'>0</td>
      <td className='max'>10</td>
      <td className='desc'><div className='text'>Sets the scale of the viewmodel sway when landing</div><div className='desc-meta'><VersionBadge type='added' since='2.5.6.0'/></div></td>
    </tr>
    <tr id='viewmodel_lag_speed'>
      <td className='name'>viewmodel_lag_speed</td>
      <td className='def'>8</td>
      <td className='min'>0</td>
      <td className='max'>100</td>
      <td className='desc'><div className='text'>Sets the speed of the viewmodel sway</div><div className='desc-meta'><VersionBadge type='added' since='2.3.8.0'/></div></td>
    </tr>
    <tr id='viewmodel_offset_x'>
      <td className='name'>viewmodel_offset_x</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'><div className='text'>Viewmodel offset on the X-axis (right/left)</div><div className='desc-meta'><VersionBadge type='added' since='2.5.6.0'/></div></td>
    </tr>
    <tr id='viewmodel_offset_y'>
      <td className='name'>viewmodel_offset_y</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'><div className='text'>Viewmodel offset on the Y-axis (forward/backward)</div><div className='desc-meta'><VersionBadge type='added' since='2.3.8.0'/></div></td>
    </tr>
    <tr id='viewmodel_offset_z'>
      <td className='name'>viewmodel_offset_z</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'><div className='text'>Viewmodel offset on the Z-axis (up/down)</div><div className='desc-meta'><VersionBadge type='added' since='2.3.8.0'/></div></td>
    </tr>
    <tr id='viewmodel_retract'>
      <td className='name'>viewmodel_retract</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'><div className='text'>Enables viewmodel retraction when approaching obstacles</div><div className='desc-meta'><VersionBadge type='added' since='2.5.6.0'/></div></td>
    </tr>
    <tr id='viewmodel_rollangle'>
      <td className='name'>viewmodel_rollangle</td>
      <td className='def'>0</td>
      <td className='min'>0</td>
      <td className='max'>20</td>
      <td className='desc'><div className='text'>Scale of the viewmodel roll angle when strafing</div><div className='desc-meta'><VersionBadge type='added' since='2.5.6.0'/></div></td>
    </tr>
    <tr id='viewmodel_shift'>
      <td className='name'>viewmodel_shift</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'><div className='text'>Controls viewmodel shift when looking up/down<br/>`0` off<br/>`1` on (default)<br/>`2` auto-adjust</div><div className='desc-meta'><VersionBadge type='added' since='2.3.8.0'/></div></td>
    </tr>
    <tr id='viewmodel_shift_left_amt'>
      <td className='name'>viewmodel_shift_left_amt</td>
      <td className='def'>1.5</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'><div className='text'>Amount the viewmodel shifts to the left when firing accuracy increases</div><div className='desc-meta'><VersionBadge type='added' since='2.3.8.0'/></div></td>
    </tr>
    <tr id='viewmodel_shift_right_amt'>
      <td className='name'>viewmodel_shift_right_amt</td>
      <td className='def'>0.75</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'><div className='text'>Amount the viewmodel shifts to the right when firing accuracy decreases</div><div className='desc-meta'><VersionBadge type='added' since='2.3.8.0'/></div></td>
    </tr>
    <tr id='scr_ofsx'>
      <td className='name'>scr_ofsx</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Obsolete version of `viewmodel_offset_x`</td>
    </tr>
    <tr id='scr_ofsy'>
      <td className='name'>scr_ofsy</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Obsolete version of `viewmodel_offset_y`</td>
    </tr>
    <tr id='scr_ofsz'>
      <td className='name'>scr_ofsz</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Obsolete version of `viewmodel_offset_z`</td>
    </tr>
    <tr id='camera_movement_bone'>
      <td className='name'>camera_movement_bone</td>
      <td className='def'>-1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'><div className='text'>Sets a specific viewmodel bone as the view camera</div><div className='desc-meta'><VersionBadge type='added' since='2.5.6.0'/></div></td>
    </tr>
    <tr id='camera_movement_interp'>
      <td className='name'>camera_movement_interp</td>
      <td className='def'>0.1</td>
      <td className='min'>0.1</td>
      <td className='max'>-</td>
      <td className='desc'><div className='text'>Smooths camera movement when switching weapons. `0` = disabled</div><div className='desc-meta'><VersionBadge type='added' since='2.3.8.0'/></div></td>
    </tr>
    <tr id='camera_movement_scale'>
      <td className='name'>camera_movement_scale</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'><div className='text'>Camera movement scale. `0` = disabled</div><div className='desc-meta'><VersionBadge type='added' since='2.3.8.0'/></div></td>
    </tr>
    <tr id='cl_bob'>
      <td className='name'>cl_bob</td>
      <td className='def'>0.01</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Overall multiplier for the weapon bobbing animation when walking</td>
    </tr>
    <tr id='cl_bob_lower_amt'>
      <td className='name'>cl_bob_lower_amt</td>
      <td className='def'>6</td>
      <td className='min'>0</td>
      <td className='max'>30</td>
      <td className='desc'><div className='text'>How much the viewmodel lowers when running</div><div className='desc-meta'><VersionBadge type='added' since='2.3.8.0'/></div></td>
    </tr>
    <tr id='cl_bob_sniper'>
      <td className='name'>cl_bob_sniper</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'><div className='text'>Enables bobbing for sniper rifles</div><div className='desc-meta'><VersionBadge type='added' since='2.2.1.0'/></div></td>
    </tr>
    <tr id='cl_bobamt_lat'>
      <td className='name'>cl_bobamt_lat</td>
      <td className='def'>0.4</td>
      <td className='min'>0</td>
      <td className='max'>2</td>
      <td className='desc'><div className='text'>Amount the viewmodel moves side to side when running</div><div className='desc-meta'><VersionBadge type='added' since='2.3.8.0'/></div></td>
    </tr>
    <tr id='cl_bobamt_vert'>
      <td className='name'>cl_bobamt_vert</td>
      <td className='def'>0.15</td>
      <td className='min'>0</td>
      <td className='max'>2</td>
      <td className='desc'><div className='text'>Amount the viewmodel moves up and down when running</div><div className='desc-meta'><VersionBadge type='added' since='2.3.8.0'/></div></td>
    </tr>
    <tr id='cl_bobcycle'>
      <td className='name'>cl_bobcycle</td>
      <td className='def'>0.8</td>
      <td className='min'>0.1</td>
      <td className='max'>2</td>
      <td className='desc'>Frequency of viewmodel bobbing when running</td>
    </tr>
    <tr id='cl_bobstyle'>
      <td className='name'>cl_bobstyle</td>
      <td className='def'>0</td>
      <td className='min'>0</td>
      <td className='max'>3</td>
      <td className='desc'><div className='text'>Sets the weapon bobbing style<br/>`0` Classic CS 1.6<br/>`1` Legacy Quakeworld<br/>`2` Improved (like CSGO)</div><div className='desc-meta'><VersionBadge type='added' since='2.5.6.0'/></div></td>
    </tr>
    <tr id='cl_bobup'>
      <td className='name'>cl_bobup</td>
      <td className='def'>0.5</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Controls how long the viewmodel stays in the 'up' position during bobbing</td>
    </tr>
    <tr id='cl_vsmoothing'>
      <td className='name'>cl_vsmoothing</td>
      <td className='def'>0.05</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Vertical view smoothing</td>
    </tr>
    <tr id='cl_minviewmodel'>
      <td className='name'>cl_minviewmodel</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'><div className='text'>Use the default weapon model (v_model) for all weapons</div><div className='desc-meta'><VersionBadge type='added' since='2.5.0.0'/></div></td>
    </tr>
    <tr id='cl_righthand'>
      <td className='name'>cl_righthand</td>
      <td className='def'>1</td>
      <td className='min'>-1</td>
      <td className='max'>1</td>
      <td className='desc'>Use right-handed (`1`) or left-handed (`0`) weapon model</td>
    </tr>
    <tr id='cl_shieldweapon_handpreference'>
      <td className='name'>cl_shieldweapon_handpreference</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'><div className='text'>Use the hand side determined by `cl_righthand` for the shield weapon model</div><div className='desc-meta'><VersionBadge type='added' since='2.5.0.0'/></div></td>
    </tr>
    <tr>
      <td colSpan='5' className='name'><a href='#r_drawviewmodel'>r_drawviewmodel</a></td>
    </tr>
  </tbody>
</Table>

## Visual Effects
<Table>
  <thead><tr><th>Name</th><th>Default</th><th>Min</th><th>Max</th><th>Description</th></tr></thead>
  <tbody>
    <tr id='cl_weather'>
      <td className='name'>cl_weather</td>
      <td className='def'>1</td>
      <td className='min'>0</td>
      <td className='max'>3</td>
      <td className='desc'>Enables weather effects (rain, snow)<br/>`0` Disabled<br/>`1` Low intensity<br/>`2` Medium intensity<br/>`3` High intensity</td>
    </tr>
    <tr id='cl_smokegren_color'>
      <td className='name'>cl_smokegren_color</td>
      <td className='def color'><div style={{background: `rgba(175,175,175,0.85)`, color:`var(--ifm-font-color-base)`}}>175 175 175</div></td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'><div className='text'>Color of smoke from a smoke grenade</div><div className='desc-meta'><VersionBadge type='added' since='2.3.4.0'/></div></td>
    </tr>
    <tr id='cl_smokegren_debug'>
      <td className='name'>cl_smokegren_debug</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'><div className='text'>Enables debug visualization for smoke grenades<br/>`0` off<br/>`1` Visualize smoke cloud radius<br/>`2` Visualize smoke particles<br/>`3` Visualize the closest position of a line blocked by smoke</div><div className='desc-meta'><VersionBadge type='added' since='2.3.4.0'/></div></td>
    </tr>
    <tr id='cl_smokegren_full_density'>
      <td className='name'>cl_smokegren_full_density</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'><div className='text'>Enables full density smoke from smoke grenades</div><div className='desc-meta'><VersionBadge type='added' since='2.3.4.0'/></div></td>
    </tr>
    <tr id='cl_corpsefall'>
      <td className='name'>cl_corpsefall</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'><div className='text'>Enables smooth falling of corpses through the ground after the `cl_corpsestay` time expires; otherwise, corpses fade out smoothly</div><div className='desc-meta'><VersionBadge type='added' since='2.5.6.0'/></div></td>
    </tr>
    <tr id='cl_corpsestay'>
      <td className='name'>cl_corpsestay</td>
      <td className='def'>600</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Time in seconds before corpses disappear<br/>`0` for instant disappearance</td>
    </tr>
    <tr id='violence_ablood'>
      <td className='name'>violence_ablood</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Display monster blood (for Half-Life mods)</td>
    </tr>
    <tr id='violence_agibs'>
      <td className='name'>violence_agibs</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Show monster gibs (for Half-Life mods)</td>
    </tr>
    <tr id='violence_hblood'>
      <td className='name'>violence_hblood</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Display player blood</td>
    </tr>
    <tr id='violence_hgibs'>
      <td className='name'>violence_hgibs</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Show player gibs</td>
    </tr>
    <tr id='violence_vfxblood'>
      <td className='name'>violence_vfxblood</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'><div className='text'>Enables advanced blood visual effects</div><div className='desc-meta'><VersionBadge type='added' since='2.3.7.0'/></div></td>
    </tr>
    <tr id='violence_vfxblood_bigdrops'>
      <td className='name'>violence_vfxblood_bigdrops</td>
      <td className='def'>3</td>
      <td className='min'>0</td>
      <td className='max'>-</td>
      <td className='desc'><div className='text'>Number of large blood drops (only from explosions or headshots)</div><div className='desc-meta'><VersionBadge type='added' since='2.3.7.0'/></div></td>
    </tr>
    <tr id='violence_vfxblood_burst_ratio'>
      <td className='name'>violence_vfxblood_burst_ratio</td>
      <td className='def'>4</td>
      <td className='min'>0</td>
      <td className='max'>-</td>
      <td className='desc'><div className='text'>Blood amount multiplier when a body explodes (multiplies splatter, drop effects, etc.)</div><div className='desc-meta'><VersionBadge type='added' since='2.3.7.0'/></div></td>
    </tr>
    <tr id='violence_vfxblood_color'>
      <td className='name'>violence_vfxblood_color</td>
      <td className='def color'><div style={{background: `rgba(145,15,15,0.85)`, color:`#eee`}}>145 15 15</div></td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'><div className='text'>Sets the color for advanced blood effects</div><div className='desc-meta'><VersionBadge type='added' since='2.3.7.0'/></div></td>
    </tr>
    <tr id='violence_vfxblood_decal_lightness'>
      <td className='name'>violence_vfxblood_decal_lightness</td>
      <td className='def'>0.35</td>
      <td className='min'>0.1</td>
      <td className='max'>100</td>
      <td className='desc'><div className='text'>Lightness factor for blood decals. (Lower values make the blood darker)</div><div className='desc-meta'><VersionBadge type='added' since='2.5.0.0'/></div></td>
    </tr>
    <tr id='violence_vfxblood_drops'>
      <td className='name'>violence_vfxblood_drops</td>
      <td className='def'>1.5</td>
      <td className='min'>0</td>
      <td className='max'>-</td>
      <td className='desc'><div className='text'>Number of blood drops</div><div className='desc-meta'><VersionBadge type='added' since='2.3.7.0'/></div></td>
    </tr>
    <tr id='violence_vfxblood_gibs'>
      <td className='name'>violence_vfxblood_gibs</td>
      <td className='def'>7</td>
      <td className='min'>0</td>
      <td className='max'>-</td>
      <td className='desc'><div className='text'>Number of scattered gibs (only from explosions or headshots)</div><div className='desc-meta'><VersionBadge type='added' since='2.3.7.0'/></div></td>
    </tr>
    <tr id='violence_vfxblood_grenade'>
      <td className='name'>violence_vfxblood_grenade</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'><div className='text'>Enables body explosion on grenade or bomb kills</div><div className='desc-meta'><VersionBadge type='added' since='2.3.7.0'/></div></td>
    </tr>
    <tr id='violence_vfxblood_headshot'>
      <td className='name'>violence_vfxblood_headshot</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'><div className='text'>Enables body explosion on headshot kills</div><div className='desc-meta'><VersionBadge type='added' since='2.3.7.0'/></div></td>
    </tr>
    <tr id='violence_vfxblood_mist'>
      <td className='name'>violence_vfxblood_mist</td>
      <td className='def'>0.75</td>
      <td className='min'>0</td>
      <td className='max'>-</td>
      <td className='desc'><div className='text'>Number of blood mist effects</div><div className='desc-meta'><VersionBadge type='added' since='2.3.7.0'/></div></td>
    </tr>
    <tr id='violence_vfxblood_small'>
      <td className='name'>violence_vfxblood_small</td>
      <td className='def'>3</td>
      <td className='min'>0</td>
      <td className='max'>-</td>
      <td className='desc'><div className='text'>Number of small blood particles (can leave decals on surfaces)</div><div className='desc-meta'><VersionBadge type='added' since='2.3.7.0'/></div></td>
    </tr>
    <tr id='violence_vfxblood_splat'>
      <td className='name'>violence_vfxblood_splat</td>
      <td className='def'>1.5</td>
      <td className='min'>0</td>
      <td className='max'>-</td>
      <td className='desc'><div className='text'>Number of blood splatters</div><div className='desc-meta'><VersionBadge type='added' since='2.3.7.0'/></div></td>
    </tr>
    <tr id='traceralpha'>
      <td className='name'>traceralpha</td>
      <td className='def'>0.5</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Tracer bullet transparency</td>
    </tr>
    <tr id='tracerblue'>
      <td className='name'>tracerblue</td>
      <td className='def'>0.4</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Blue component of tracer bullet color</td>
    </tr>
    <tr id='tracergreen'>
      <td className='name'>tracergreen</td>
      <td className='def'>0.8</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Green component of tracer bullet color</td>
    </tr>
    <tr id='tracerlength'>
      <td className='name'>tracerlength</td>
      <td className='def'>0.8</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Tracer bullet length</td>
    </tr>
    <tr id='traceroffset'>
      <td className='name'>traceroffset</td>
      <td className='def'>30</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Tracer bullet offset</td>
    </tr>
    <tr id='tracerred'>
      <td className='name'>tracerred</td>
      <td className='def'>0.8</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Red component of tracer bullet color</td>
    </tr>
    <tr id='tracerspeed'>
      <td className='name'>tracerspeed</td>
      <td className='def'>6000</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Tracer bullet speed</td>
    </tr>
    <tr id='cl_gunsmoke'>
      <td className='name'>cl_gunsmoke</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'><div className='text'>Enables display of smoke from the weapon barrel upon firing</div><div className='desc-meta'><VersionBadge type='added' since='2.5.0.0'/></div></td>
    </tr>
    <tr id='cl_guntracer'>
      <td className='name'>cl_guntracer</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'><div className='text'>Enables display of tracer bullets exiting the weapon barrel</div><div className='desc-meta'><VersionBadge type='added' since='2.5.0.0'/></div></td>
    </tr>
    <tr id='cl_guntracer_color'>
      <td className='name'>cl_guntracer_color</td>
      <td className='def color'><div style={{background: `rgba(255,255,255,0.85)`, color:`#111`}}>255 255 255</div></td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'><div className='text'>Sets the color of tracer bullets</div><div className='desc-meta'><VersionBadge type='added' since='2.5.0.0'/></div></td>
    </tr>
    <tr id='cl_guntracer_offset'>
      <td className='name'>cl_guntracer_offset</td>
      <td className='def'>48</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'><div className='text'>Distance from the barrel at which tracer bullets start to display</div><div className='desc-meta'><VersionBadge type='added' since='2.5.0.0'/></div></td>
    </tr>
    <tr id='cl_guntracer_speed'>
      <td className='name'>cl_guntracer_speed</td>
      <td className='def'>3650</td>
      <td className='min'>0</td>
      <td className='max'>-</td>
      <td className='desc'><div className='text'>Speed of tracer bullets in units</div><div className='desc-meta'><VersionBadge type='added' since='2.5.0.0'/></div></td>
    </tr>
    <tr id='cl_guntracer_speed_maxmul'>
      <td className='name'>cl_guntracer_speed_maxmul</td>
      <td className='def'>1.25</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'><div className='text'>Maximum speed multiplier for tracer bullets based on distance</div><div className='desc-meta'><VersionBadge type='added' since='2.5.0.0'/></div></td>
    </tr>
    <tr id='cl_fog_color'>
      <td className='name'>cl_fog_color</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Adjusts the fog color</td>
    </tr>
    <tr id='cl_fog_density'>
      <td className='name'>cl_fog_density</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Sets the fog density</td>
    </tr>
    <tr id='cl_fog_skybox'>
      <td className='name'>cl_fog_skybox</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'><div className='text'>Enables fog to extend to the skybox (sky)</div><div className='desc-meta'><VersionBadge type='added' since='2.3.2.0'/></div></td>
    </tr>
    <tr id='egon_amplitude'>
      <td className='name'>egon_amplitude</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Amplitude of the gluon gun (Egon gun) beam oscillation in Half-Life</td>
    </tr>
    <tr id='max_shells'>
      <td className='name'>max_shells</td>
      <td className='def'>120</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Maximum number of simultaneously visible shell casings</td>
    </tr>
    <tr id='max_smokepuffs'>
      <td className='name'>max_smokepuffs</td>
      <td className='def'>120</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Maximum number of simultaneously visible smoke puffs (from grenades, bullet impacts)</td>
    </tr>
    <tr>
      <td colSpan='5' className='name'><a href='#r_decals'>r_decals</a></td>
    </tr>
  </tbody>
</Table>

## Video
<Table>
  <thead><tr><th>Name</th><th>Default</th><th>Min</th><th>Max</th><th>Description</th></tr></thead>
  <tbody>
    <tr id='fps_max'>
      <td className='name'>fps_max</td>
      <td className='def'>100</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Frame rate limiter (FPS)</td>
    </tr>
    <tr id='fps_override'>
      <td className='name'>fps_override</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>If `1`, allows exceeding the engine's standard FPS limit</td>
    </tr>
    <tr id='cl_showfps'>
      <td className='name'>cl_showfps</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'><div className='text'>Show current FPS in the corner of the screen</div><div className='desc-meta'><VersionBadge type='changed' since='2.5.6.0'/></div></td>
    </tr>
    <tr id='default_fov'>
      <td className='name'>default_fov</td>
      <td className='def'>90</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Default Field of View</td>
    </tr>
    <tr id='widescreen'>
      <td className='name'>widescreen</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'><div className='text'>Enables widescreen mode (support for `16:9`, `16:10`)</div><div className='desc-meta'><VersionBadge type='added' since='2.0.0.0'/></div></td>
    </tr>
    <tr id='stretchaspect'>
      <td className='name'>stretchaspect</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'><div className='text'>Stretches the image to match the screen's aspect ratio (removes black bars)</div><div className='desc-meta'><VersionBadge type='added' since='2.0.0.0'/></div></td>
    </tr>
    <tr id='engine_no_focus_sleep'>
      <td className='name'>engine_no_focus_sleep</td>
      <td className='def'>20</td>
      <td className='min'>0</td>
      <td className='max'>-</td>
      <td className='desc'><div className='text'>'Sleep' time (in ms) when the game window is not in focus<br/>Set to `0` to prevent the engine from 'sleeping', so frame rate will not drop</div><div className='desc-meta'><VersionBadge type='added' since='2.3.7.0'/></div></td>
    </tr>
    <tr id='engine_no_render_minimized'>
      <td className='name'>engine_no_render_minimized</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'><div className='text'>Do not update screen rendering when the game is minimized (reduces CPU and GPU load)</div><div className='desc-meta'><VersionBadge type='added' since='2.3.7.0'/></div></td>
    </tr>
    <tr id='brightness'>
      <td className='name'>brightness</td>
      <td className='def'>1.0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Sets the brightness value</td>
    </tr>
    <tr id='gamma'>
      <td className='name'>gamma</td>
      <td className='def'>2.5</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Sets the gamma value</td>
    </tr>
    <tr id='texgamma'>
      <td className='name'>texgamma</td>
      <td className='def'>2.0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Sets the texture gamma</td>
    </tr>
    <tr id='lightgamma'>
      <td className='name'>lightgamma</td>
      <td className='def'>2.5</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Sets the lighting gamma</td>
    </tr>
    <tr id='lambert'>
      <td className='name'>lambert</td>
      <td className='def'>1.5</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Multiplier for diffuse lighting on models</td>
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
      <td className='desc'>Whether to darken the screen on death (in Half-Life)</td>
    </tr>
    <tr id='gl_use_shaders'>
      <td className='name'>gl_use_shaders</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'><div className='text'>Enables the use of the 'overbright' effect using shaders</div><div className='desc-meta'><VersionBadge type='added' since='2.5.6.0'/></div></td>
    </tr>
    <tr id='gl_reduce_shader_changes'>
      <td className='name'>gl_reduce_shader_changes</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'><div className='text'>Reduces the number of shader switches to improve performance</div><div className='desc-meta'><VersionBadge type='added' since='2.5.0.0'/></div></td>
    </tr>
    <tr id='gl_vsync'>
      <td className='name'>gl_vsync</td>
      <td className='def'>1</td>
      <td className='min'>-1</td>
      <td className='max'>1</td>
      <td className='desc'><div className='text'>Synchronizes frame rate with monitor refresh rate<br/>&nbsp;&nbsp;`0` Disabled<br/>&nbsp;&nbsp;`1` Standard V-Sync<br/>`-1` Adaptive V-Sync</div><div className='desc-meta'><VersionBadge type='changed' since='2.0.0.0'/></div></td>
    </tr>
    <tr id='gl_affinemodels'>
      <td className='name'>gl_affinemodels</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Enables affine transformation for models, may cause distortions</td>
    </tr>
    <tr id='gl_alphamin'>
      <td className='name'>gl_alphamin</td>
      <td className='def'>0.25</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Minimum alpha level for a pixel to be rendered</td>
    </tr>
    <tr id='gl_ansio'>
      <td className='name'>gl_ansio</td>
      <td className='def'>16</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Level of anisotropic filtering</td>
    </tr>
    <tr id='gl_clear'>
      <td className='name'>gl_clear</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>If `1`, clears the color buffer, which can help with some visual artifacts</td>
    </tr>
    <tr id='gl_cull'>
      <td className='name'>gl_cull</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Enables culling of unseen polygons</td>
    </tr>
    <tr id='gl_dither'>
      <td className='name'>gl_dither</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Enables dithering (smoothing of color transitions)</td>
    </tr>
    <tr id='gl_envmapsize'>
      <td className='name'>gl_envmapsize</td>
      <td className='def'>256</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Size of the environment map (envmap)</td>
    </tr>
    <tr id='gl_flashblend'>
      <td className='name'>gl_flashblend</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Enables blending for flashbang effects</td>
    </tr>
    <tr id='gl_fog'>
      <td className='name'>gl_fog</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Enables fog effects</td>
    </tr>
    <tr id='gl_keeptjunctions'>
      <td className='name'>gl_keeptjunctions</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Keep T-junctions to avoid 'holes' in geometry</td>
    </tr>
    <tr id='gl_lightholes'>
      <td className='name'>gl_lightholes</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Enables 'light holes'</td>
    </tr>
    <tr id='gl_lowlatency'>
      <td className='name'>gl_lowlatency</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'><div className='text'>Enables low input latency mode</div><div className='desc-meta'><VersionBadge type='added' since='2.5.0.0'/></div></td>
    </tr>
    <tr id='gl_lowlatency_debugoutput'>
      <td className='name'>gl_lowlatency_debugoutput</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'><div className='text'>Controls debug output for low latency mode</div><div className='desc-meta'><VersionBadge type='added' since='2.5.0.0'/></div></td>
    </tr>
    <tr id='gl_lowlatency_maxslop_ms'>
      <td className='name'>gl_lowlatency_maxslop_ms</td>
      <td className='def'>5</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'><div className='text'>Sets the upper threshold for acceptable latency slop in milliseconds for low latency mode</div><div className='desc-meta'><VersionBadge type='added' since='2.5.0.0'/></div></td>
    </tr>
    <tr id='gl_lowlatency_minslop_ms'>
      <td className='name'>gl_lowlatency_minslop_ms</td>
      <td className='def'>2</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'><div className='text'>Sets the lower threshold for acceptable latency slop in milliseconds for low latency mode</div><div className='desc-meta'><VersionBadge type='added' since='2.5.0.0'/></div></td>
    </tr>
    <tr id='gl_max_size'>
      <td className='name'>gl_max_size</td>
      <td className='def'>512</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Maximum texture size the engine can load</td>
    </tr>
    <tr id='gl_monolights'>
      <td className='name'>gl_monolights</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Use uniform lighting without lightmaps</td>
    </tr>
    <tr id='gl_msaa'>
      <td className='name'>gl_msaa</td>
      <td className='def'>2</td>
      <td className='min'>0</td>
      <td className='max'>4</td>
      <td className='desc'><div className='text'>Sets the level of multisample anti-aliasing (MSAA)<br/>`0` Disabled<br/>`1` 2x MSAA<br/>`2` 4x MSAA<br/>`3` 8x MSAA (recommended max)<br/>`4` 16x MSAA (mostly for testing)<br/><br/>Higher values increase smoothing but can also blur edges and the entire screen<br/>`8x` MSAA is the practical limit; going higher (`16x`) offers almost no visual benefit but significantly hurts performance</div><div className='desc-meta'><VersionBadge type='added' since='2.5.6.0'/></div></td>
    </tr>
    <tr id='gl_overbright'>
      <td className='name'>gl_overbright</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'><div className='text'>Enables overbright mode, making bright areas even brighter</div><div className='desc-meta'><VersionBadge type='changed' since='2.5.0.0'/></div></td>
    </tr>
    <tr id='gl_palette_tex'>
      <td className='name'>gl_palette_tex</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Use paletted textures</td>
    </tr>
    <tr id='gl_picmip'>
      <td className='name'>gl_picmip</td>
      <td className='def'>0</td>
      <td className='min'>0</td>
      <td className='max'>31</td>
      <td className='desc'>Sets the texture detail level (MIP level). The higher the value, the lower the texture quality</td>
    </tr>
    <tr id='gl_polyoffset'>
      <td className='name'>gl_polyoffset</td>
      <td className='def'>4</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Polygon offset to prevent 'z-fighting' (flickering) of decals</td>
    </tr>
    <tr id='gl_round_down'>
      <td className='name'>gl_round_down</td>
      <td className='def'>3</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Controls rounding of texture sizes. Lower values may improve quality</td>
    </tr>
    <tr id='gl_spriteblend'>
      <td className='name'>gl_spriteblend</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Enables blending (transparency) for sprites</td>
    </tr>
    <tr id='gl_texturemode'>
      <td className='name'>gl_texturemode</td>
      <td className='def'>GL_LINEAR_MIPMAP_LINEAR</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Determines the texture filtering mode<br/>GL_NEAREST<br/>GL_LINEAR<br/>GL_NEAREST_MIPMAP_NEAREST<br/>GL_LINEAR_MIPMAP_NEAREST<br/>GL_NEAREST_MIPMAP_LINEAR<br/>GL_LINEAR_MIPMAP_LINEAR</td>
    </tr>
    <tr id='gl_wateramp'>
      <td className='name'>gl_wateramp</td>
      <td className='def'>0.3</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Amplitude of water waves</td>
    </tr>
    <tr id='gl_watersides'>
      <td className='name'>gl_watersides</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Render the sides of water brushes</td>
    </tr>
    <tr id='gl_wireframe'>
      <td className='name'>gl_wireframe</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Enables wireframe mode for geometry display</td>
    </tr>
    <tr id='gl_zmax'>
      <td className='name'>gl_zmax</td>
      <td className='def'>4096</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Maximum Z-buffer (depth) value, affects rendering distance</td>
    </tr>
    <tr id='r_bmodelinterp'>
      <td className='name'>r_bmodelinterp</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Enables interpolation for moving bmodel entities (doors, platforms)</td>
    </tr>
    <tr id='r_cachestudio'>
      <td className='name'>r_cachestudio</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Cache studio models</td>
    </tr>
    <tr id='r_cullsequencebox'>
      <td className='name'>r_cullsequencebox</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Use a precise bounding box for animation culling</td>
    </tr>
    <tr id='r_decals'>
      <td className='name'>r_decals</td>
      <td className='def'>4096</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Maximum number of simultaneously visible decals (bullet holes, blood, sprays)</td>
    </tr>
    <tr id='r_detailtextures'>
      <td className='name'>r_detailtextures</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Enables detail textures (if supported by the map)</td>
    </tr>
    <tr id='r_drawentities'>
      <td className='name'>r_drawentities</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Render game entities (players, weapons, etc.)</td>
    </tr>
    <tr id='r_drawviewmodel'>
      <td className='name'>r_drawviewmodel</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Render the weapon model in hand</td>
    </tr>
    <tr id='r_dynamic'>
      <td className='name'>r_dynamic</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Enables dynamic lighting (e.g., from gunshots, flashlight)</td>
    </tr>
    <tr id='r_fullbright'>
      <td className='name'>r_fullbright</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Enables maximum brightness, ignoring lightmaps</td>
    </tr>
    <tr id='r_glowshellfreq'>
      <td className='name'>r_glowshellfreq</td>
      <td className='def'>2.2</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Glow shell frequency for certain objects</td>
    </tr>
    <tr id='r_lightmap'>
      <td className='name'>r_lightmap</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Debug mode for viewing lightmaps</td>
    </tr>
    <tr id='r_lockcull'>
      <td className='name'>r_lockcull</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'><div className='text'>Freeze culling of unseen objects at the current point (for debugging)</div><div className='desc-meta'><VersionBadge type='added' since='2.3.3.0'/></div></td>
    </tr>
    <tr id='r_lockpvs'>
      <td className='name'>r_lockpvs</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'><div className='text'>Freeze the PVS (Potentially Visible Set) to fly around the map and see what is being rendered (for debugging)</div><div className='desc-meta'><VersionBadge type='added' since='2.3.3.0'/></div></td>
    </tr>
    <tr id='r_maxbeams'>
      <td className='name'>r_maxbeams</td>
      <td className='def'>128</td>
      <td className='min'>0</td>
      <td className='max'>4096</td>
      <td className='desc'><div className='text'>Maximum number of visible beams</div><div className='desc-meta'><VersionBadge type='added' since='2.3.8.0'/></div></td>
    </tr>
    <tr id='r_mirroralpha'>
      <td className='name'>r_mirroralpha</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Enables transparency for mirrored surfaces</td>
    </tr>
    <tr id='r_mmx'>
      <td className='name'>r_mmx</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Use MMX instructions to accelerate rendering</td>
    </tr>
    <tr id='r_norefresh'>
      <td className='name'>r_norefresh</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Disables screen refreshing (for debugging)</td>
    </tr>
    <tr id='r_novis'>
      <td className='name'>r_novis</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Disables VIS data processing, rendering the entire map</td>
    </tr>
    <tr id='r_prefertexturefiltering'>
      <td className='name'>r_prefertexturefiltering</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'><div className='text'>Enables texture filtering</div><div className='desc-meta'><VersionBadge type='added' since='2.5.6.0'/></div></td>
    </tr>
    <tr id='r_shadows'>
      <td className='name'>r_shadows</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Enables dynamic shadows from objects (obsolete feature). Use `cl_shadows` for player shadows</td>
    </tr>
    <tr id='r_showinfo'>
      <td className='name'>r_showinfo</td>
      <td className='def'>0</td>
      <td className='min'>0</td>
      <td className='max'>2</td>
      <td className='desc'><div className='text'>Show rendering/movement info</div><div className='desc-meta'><VersionBadge type='added' since='2.5.6.0'/></div></td>
    </tr>
    <tr id='r_showparticles'>
      <td className='name'>r_showparticles</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'><div className='text'>Show usage statistics for particles and beams</div><div className='desc-meta'><VersionBadge type='added' since='2.3.8.0'/></div></td>
    </tr>
    <tr id='r_speeds'>
      <td className='name'>r_speeds</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Displays rendering performance information (wpoly, epoly, fps)</td>
    </tr>
    <tr id='r_traceglow'>
      <td className='name'>r_traceglow</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Debug tracing for glow effects</td>
    </tr>
    <tr id='r_wadtextures'>
      <td className='name'>r_wadtextures</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Use textures from WAD files instead of those embedded in the BSP</td>
    </tr>
    <tr id='r_wateralpha'>
      <td className='name'>r_wateralpha</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Enables transparency for water</td>
    </tr>
    <tr id='cl_himodels'>
      <td className='name'>cl_himodels</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Enables high-quality (HD) models. Not used in CS, relevant for Half-Life</td>
    </tr>
    <tr id='cl_min_ct'>
      <td className='name'>cl_min_ct</td>
      <td className='def'>2</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Controls which CT model is used when `cl_minmodels 1` is active<br/>`2` GIGN<br/>`4` GSG9<br/>`7` SAS<br/>`9` SEAL Team 6 (Urban)</td>
    </tr>
    <tr id='cl_min_t'>
      <td className='name'>cl_min_t</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Controls which T model is used when `cl_minmodels 1` is active<br/>`1` Phoenix Connexion (Leet)<br/>`5` Guerilla<br/>`6` Arctic<br/>`8` Midwest Militia (Terror)</td>
    </tr>
    <tr id='cl_minmodels'>
      <td className='name'>cl_minmodels</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'><div className='text'>Use a single player model for each team to simplify recognition<br/>`1` Enabled<br/>`0` Use all models</div><div className='desc-meta'><VersionBadge type='changed' since='2.2.1.0'/></div></td>
    </tr>
    <tr id='cl_shadows'>
      <td className='name'>cl_shadows</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Enables player shadows (a simple black circle under the model)</td>
    </tr>
    <tr id='cl_waterdist'>
      <td className='name'>cl_waterdist</td>
      <td className='def'>4</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Rendering distance for water effects</td>
    </tr>
    <tr id='fastsprites'>
      <td className='name'>fastsprites</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Sets the quality of smoke sprites<br/>`0` high quality<br/>`1` medium quality<br/>`2` low quality<br/>Lower quality improves performance</td>
    </tr>
  </tbody>
</Table>

## Audio/Voice
<Table>
  <thead><tr><th>Name</th><th>Default</th><th>Min</th><th>Max</th><th>Description</th></tr></thead>
  <tbody>
    <tr id='volume'>
      <td className='name'>volume</td>
      <td className='def'>0.7</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Overall game volume</td>
    </tr>
    <tr id='voice_autogain'>
      <td className='name'>voice_autogain</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Automatic voice gain control</td>
    </tr>
    <tr id='voice_avggain'>
      <td className='name'>voice_avggain</td>
      <td className='def'>0.5</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Average voice gain</td>
    </tr>
    <tr id='voice_clientdebug'>
      <td className='name'>voice_clientdebug</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Enables debug information for voice chat</td>
    </tr>
    <tr id='voice_dsound'>
      <td className='name'>voice_dsound</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Use DirectSound for voice</td>
    </tr>
    <tr id='voice_enable'>
      <td className='name'>voice_enable</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Enable/disable voice chat (transmit and receive)</td>
    </tr>
    <tr id='voice_fadeouttime'>
      <td className='name'>voice_fadeouttime</td>
      <td className='def'>0.1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Voice fade-out time</td>
    </tr>
    <tr id='voice_fakeloss'>
      <td className='name'>voice_fakeloss</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Simulate packet loss for voice chat</td>
    </tr>
    <tr id='voice_forcemicrecord'>
      <td className='name'>voice_forcemicrecord</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Force using microphone recording</td>
    </tr>
    <tr id='voice_inputfromfile'>
      <td className='name'>voice_inputfromfile</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Read voice data from a file instead of the microphone</td>
    </tr>
    <tr id='voice_loopback'>
      <td className='name'>voice_loopback</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Enables loopback mode to hear your own microphone</td>
    </tr>
    <tr id='voice_maxgain'>
      <td className='name'>voice_maxgain</td>
      <td className='def'>5</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Maximum voice gain</td>
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
      <td className='desc'>Enables voice chat in the current mod</td>
    </tr>
    <tr id='voice_outputdevice'>
      <td className='name'>voice_outputdevice</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'><div className='text'>Selects the audio API<br/>`0` Miles<br/>`1` XAudio2</div><div className='desc-meta'><VersionBadge type='added' since='2.0.0.0'/></div></td>
    </tr>
    <tr id='voice_outputfile'>
      <td className='name'>voice_outputfile</td>
      <td className='def'>-</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Record voice system output to the specified file</td>
    </tr>
    <tr id='voice_overdrive'>
      <td className='name'>voice_overdrive</td>
      <td className='def'>2</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Factor by which other sounds are reduced when someone speaks in voice chat</td>
    </tr>
    <tr id='voice_overdrivefadetime'>
      <td className='name'>voice_overdrivefadetime</td>
      <td className='def'>0.4</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Fade time for other sounds when `voice_overdrive` is active</td>
    </tr>
    <tr id='voice_preprocess'>
      <td className='name'>voice_preprocess</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'><div className='text'>Enables pre-processing (cleanup) of incoming microphone data</div><div className='desc-meta'><VersionBadge type='added' since='2.0.0.0'/></div></td>
    </tr>
    <tr id='voice_profile'>
      <td className='name'>voice_profile</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Voice system profiling</td>
    </tr>
    <tr id='voice_quality'>
      <td className='name'>voice_quality</td>
      <td className='def'>6</td>
      <td className='min'>2</td>
      <td className='max'>6</td>
      <td className='desc'><div className='text'>Sets the audio codec quality<br/>`2` Speex<br/>`3` Raw<br/>`4` Silk<br/>`5` Opus<br/>`6` Opus PLC</div><div className='desc-meta'><VersionBadge type='added' since='2.0.0.0'/></div></td>
    </tr>
    <tr id='voice_recordtofile'>
      <td className='name'>voice_recordtofile</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Record microphone data to a file</td>
    </tr>
    <tr id='voice_scale'>
      <td className='name'>voice_scale</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Overall voice chat volume</td>
    </tr>
    <tr id='voice_showchannels'>
      <td className='name'>voice_showchannels</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Show voice communication channels</td>
    </tr>
    <tr id='voice_showincoming'>
      <td className='name'>voice_showincoming</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Show incoming voice data</td>
    </tr>
    <tr id='mic_autogain'>
      <td className='name'>mic_autogain</td>
      <td className='def'>16000</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'><div className='text'>Automatic gain control level for microphone input</div><div className='desc-meta'><VersionBadge type='added' since='2.0.0.0'/></div></td>
    </tr>
    <tr id='mic_inputfile'>
      <td className='name'>mic_inputfile</td>
      <td className='def'>-</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'><div className='text'>Read data from the specified file instead of the microphone</div><div className='desc-meta'><VersionBadge type='added' since='2.0.0.0'/></div></td>
    </tr>
    <tr id='mic_outputfile'>
      <td className='name'>mic_outputfile</td>
      <td className='def'>-</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'><div className='text'>Record microphone data to the specified file</div><div className='desc-meta'><VersionBadge type='added' since='2.0.0.0'/></div></td>
    </tr>
    <tr id='room_delay'>
      <td className='name'>room_delay</td>
      <td className='def'>0.0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Delay for the reverb effect</td>
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
      <td className='desc'>Feedback for the reverb effect</td>
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
      <td className='desc'>Disables reverb effects</td>
    </tr>
    <tr id='room_refl'>
      <td className='name'>room_refl</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Reflection level for the reverb effect</td>
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
      <td className='desc'>'Room' size for the reverb effect</td>
    </tr>
    <tr id='room_type'>
      <td className='name'>room_type</td>
      <td className='def'>0</td>
      <td className='min'>0</td>
      <td className='max'>29</td>
      <td className='desc'>Reverb type for normal spaces (not underwater)<br/>There are 10 base reverb presets such as<br/>`1` generic<br/>`2-4` metalic<br/>`5-7` tunnel<br/>`8-10` chamber<br/>`11-13` brite<br/>`14-16` water<br/>`17-19` concrete<br/>`20-22` outside<br/>`23-25` weird<br/>`26-29` weirdo</td>
    </tr>
    <tr id='ambient_fade'>
      <td className='name'>ambient_fade</td>
      <td className='def'>100</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Distance at which ambient sounds fade out</td>
    </tr>
    <tr id='ambient_level'>
      <td className='name'>ambient_level</td>
      <td className='def'>0.3</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Volume of ambient sounds</td>
    </tr>
    <tr id='nosound'>
      <td className='name'>nosound</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Completely disables sound</td>
    </tr>
    <tr id='suitvolume'>
      <td className='name'>suitvolume</td>
      <td className='def'>0.25</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Volume of HEV suit sounds (in Half-Life)</td>
    </tr>
    <tr id='bgmvolume'>
      <td className='name'>bgmvolume</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Enables/disables background music (CD audio)</td>
    </tr>
    <tr id='hisound'>
      <td className='name'>hisound</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Enables high-quality (`1` = 22kHz) or low-quality (`0` = 11kHz) sound</td>
    </tr>
    <tr id='waterroom_type'>
      <td className='name'>waterroom_type</td>
      <td className='def'>14</td>
      <td className='min'>0</td>
      <td className='max'>29</td>
      <td className='desc'>Reverb type for underwater<br/>See <a href='#room_type'>room_type</a> for reverb types</td>
    </tr>
    <tr id='MP3FadeTime'>
      <td className='name'>MP3FadeTime</td>
      <td className='def'>2.0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Sets the MP3 fadeout time in seconds for complete fadeout using `cd fadeout` command</td>
    </tr>
    <tr id='MP3Volume'>
      <td className='name'>MP3Volume</td>
      <td className='def'>0.8</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Sets the MP3 volume level</td>
    </tr>
    <tr id='snd_mixahead'>
      <td className='name'>snd_mixahead</td>
      <td className='def'>0.1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Buffer size for pre-mixing sound<br/>Increasing it may help with sound stuttering</td>
    </tr>
    <tr id='snd_mute_losefocus'>
      <td className='name'>snd_mute_losefocus</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'><div className='text'>Mute sound when the game window is not in focus (in the background)</div><div className='desc-meta'><VersionBadge type='added' since='2.3.6.0'/></div></td>
    </tr>
    <tr id='snd_noextraupdate'>
      <td className='name'>snd_noextraupdate</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Disables extra sound system updates, may improve performance</td>
    </tr>
    <tr id='snd_show'>
      <td className='name'>snd_show</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Displays debug information about sounds</td>
    </tr>
    <tr id='speak_enabled'>
      <td className='name'>speak_enabled</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Enables speech synthesis support</td>
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
      <td className='desc'>Load sounds in 8-bit quality to save memory</td>
    </tr>
  </tbody>
</Table>

## Network
<Table>
  <thead><tr><th>Name</th><th>Default</th><th>Min</th><th>Max</th><th>Description</th></tr></thead>
  <tbody>
    <tr id='ip'>
      <td className='name'>ip</td>
      <td className='def'>localhost</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Overrides the IP address for hosts with multiple network interfaces</td>
    </tr>
    <tr id='port'>
      <td className='name'>port</td>
      <td className='def'>27015</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Default game port</td>
    </tr>
    <tr id='hostport'>
      <td className='name'>hostport</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Port for hosting a game server</td>
    </tr>
    <tr id='clientport'>
      <td className='name'>clientport</td>
      <td className='def'>27005</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Default client port</td>
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
      <td className='desc'>Creates artificial lag for all incoming packets (in milliseconds)</td>
    </tr>
    <tr id='fakeloss'>
      <td className='name'>fakeloss</td>
      <td className='def'>0.0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Simulates packet loss as a percentage</td>
    </tr>
    <tr id='net_log'>
      <td className='name'>net_log</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Enables logging of network activity</td>
    </tr>
    <tr id='net_address'>
      <td className='name'>net_address</td>
      <td className='def'>-</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Network address to bind to</td>
    </tr>
    <tr id='net_chokeloop'>
      <td className='name'>net_chokeloop</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Apply bandwidth choke to loopback packets</td>
    </tr>
    <tr id='net_drawslider'>
      <td className='name'>net_drawslider</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Draw completion slider during signon</td>
    </tr>
    <tr id='net_showdrop'>
      <td className='name'>net_showdrop</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Show dropped packets in the console</td>
    </tr>
    <tr id='net_showpackets'>
      <td className='name'>net_showpackets</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Output packet summary to the console</td>
    </tr>
    <tr id='max_queries_sec'>
      <td className='name'>max_queries_sec</td>
      <td className='def'>3.0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Maximum number of queries per second from a single IP</td>
    </tr>
    <tr id='max_queries_sec_global'>
      <td className='name'>max_queries_sec_global</td>
      <td className='def'>30</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Maximum number of queries per second globally</td>
    </tr>
    <tr id='max_queries_window'>
      <td className='name'>max_queries_window</td>
      <td className='def'>60</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Time window for tracking query count</td>
    </tr>
    <tr id='rcon_address'>
      <td className='name'>rcon_address</td>
      <td className='def'>-</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Address of the remote server for sending rcon commands</td>
    </tr>
    <tr id='rcon_password'>
      <td className='name'>rcon_password</td>
      <td className='def'>-</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Password for remote server administration `rcon` <a className='ref-link' href='/en/docs/refs/configuration/commands#rcon'/></td>
    </tr>
    <tr id='rcon_port'>
      <td className='name'>rcon_port</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Port of the remote server for sending rcon commands</td>
    </tr>
  </tbody>
</Table>

### Network : Client
<Table>
  <thead><tr><th>Name</th><th>Default</th><th>Min</th><th>Max</th><th>Description</th></tr></thead>
  <tbody>
    <tr id='rate'>
      <td className='name'>rate</td>
      <td className='def'>100000</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Maximum bytes per second the client can receive from the server</td>
    </tr>
    <tr id='cl_lw'>
      <td className='name'>cl_lw</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Enables client-side prediction of weapon effects (animation, sounds)</td>
    </tr>
    <tr id='cl_lc'>
      <td className='name'>cl_lc</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Enables server-side hit calculation and lag compensation</td>
    </tr>
    <tr id='cl_lm'>
      <td className='name'>cl_lm</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Enables client-side movement prediction to compensate for lag</td>
    </tr>
    <tr id='cl_cmdbackup'>
      <td className='name'>cl_cmdbackup</td>
      <td className='def'>2</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Number of additional commands sent with each packet (helps with packet loss)</td>
    </tr>
    <tr id='cl_cmdrate'>
      <td className='name'>cl_cmdrate</td>
      <td className='def'>64</td>
      <td className='min'>10</td>
      <td className='max'>-</td>
      <td className='desc'>Maximum number of command packets sent to the server per second</td>
    </tr>
    <tr id='cl_updaterate'>
      <td className='name'>cl_updaterate</td>
      <td className='def'>64</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Number of update packets per second requested from the server</td>
    </tr>
    <tr id='cl_fixtimerate'>
      <td className='name'>cl_fixtimerate</td>
      <td className='def'>7.5</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Number of milliseconds per frame for 'clock drift' correction</td>
    </tr>
    <tr id='cl_clockreset'>
      <td className='name'>cl_clockreset</td>
      <td className='def'>0.1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>If the client clock drifts from the server's by more than this value, it is forcibly synchronized</td>
    </tr>
    <tr id='cl_timeout'>
      <td className='name'>cl_timeout</td>
      <td className='def'>60</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Number of seconds without receiving packets from the server before the client disconnects</td>
    </tr>
    <tr id='cl_resend'>
      <td className='name'>cl_resend</td>
      <td className='def'>6.0</td>
      <td className='min'>1.5</td>
      <td className='max'>20</td>
      <td className='desc'>Delay in seconds before resending a connection attempt</td>
    </tr>
    <tr id='cl_showmessages'>
      <td className='name'>cl_showmessages</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Output network traffic to the console for debugging</td>
    </tr>
    <tr id='cl_shownet'>
      <td className='name'>cl_shownet</td>
      <td className='def'>0</td>
      <td className='min'>0</td>
      <td className='max'>2</td>
      <td className='desc'>Show network traffic information</td>
    </tr>
    <tr id='cl_showerror'>
      <td className='name'>cl_showerror</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Display prediction errors</td>
    </tr>
    <tr id='cl_showevents'>
      <td className='name'>cl_showevents</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Show events like gunshots. All events are listed in `cstrike/events/`</td>
    </tr>
    <tr id='cl_nodelta'>
      <td className='name'>cl_nodelta</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Disables delta compression</td>
    </tr>
    <tr id='cl_nosmooth'>
      <td className='name'>cl_nosmooth</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Disables smoothing of prediction errors</td>
    </tr>
    <tr id='cl_smoothtime'>
      <td className='name'>cl_smoothtime</td>
      <td className='def'>0.1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'><div className='text'>Time in seconds over which the client's view is smoothed after a prediction error</div><div className='desc-meta'><VersionBadge type='changed' since='2.3.4.0'/></div></td>
    </tr>
    <tr id='cl_solid_players'>
      <td className='name'>cl_solid_players</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Whether the movement prediction engine should treat other players as solid</td>
    </tr>
    <tr id='cl_needinstanced'>
      <td className='name'>cl_needinstanced</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Debug info in the console about loaded models. Requires `developer 1` and `sv_instancedbaseline 1` on the server</td>
    </tr>
    <tr id='cl_slist'>
      <td className='name'>cl_slist</td>
      <td className='def'>10.0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Number of seconds to wait for server ping responses when searching on the LAN</td>
    </tr>
    <tr id='cl_pmove_version'>
      <td className='name'>cl_pmove_version</td>
      <td className='def'>1.0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'><div className='text'>Sets the player movement code version for client-server prediction synchronization</div><div className='desc-meta'><VersionBadge type='added' since='2.5.0.0'/></div></td>
    </tr>
    <tr id='cl_fixmodelinterpolationartifacts'>
      <td className='name'>cl_fixmodelinterpolationartifacts</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Fixes interpolation artifacts when animated models of non-players are moved by other entities</td>
    </tr>
    <tr id='net_graph'>
      <td className='name'>net_graph</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'><div className='text'>Displays the network usage graph (`1`, `2`, or `3`)</div><div className='desc-meta'><VersionBadge type='changed' since='2.0.0.0'/></div></td>
    </tr>
    <tr id='net_graphalpha'>
      <td className='name'>net_graphalpha</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'><div className='text'>Transparency of the `net_graph`</div><div className='desc-meta'><VersionBadge type='added' since='2.0.0.0'/></div></td>
    </tr>
    <tr id='net_graphheight'>
      <td className='name'>net_graphheight</td>
      <td className='def'>64</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'><div className='text'>Height of the `net_graph` panel</div><div className='desc-meta'><VersionBadge type='added' since='2.0.0.0'/></div></td>
    </tr>
    <tr id='net_graphheightfixed'>
      <td className='name'>net_graphheightfixed</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'><div className='text'>Fixed `net_graph` height</div><div className='desc-meta'><VersionBadge type='added' since='2.0.0.0'/></div></td>
    </tr>
    <tr id='net_graphmsecs'>
      <td className='name'>net_graphmsecs</td>
      <td className='def'>400</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'><div className='text'>The latency graph represents this many milliseconds</div><div className='desc-meta'><VersionBadge type='added' since='2.0.0.0'/></div></td>
    </tr>
    <tr id='net_graphpos'>
      <td className='name'>net_graphpos</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'><div className='text'>Position of `net_graph` on the screen<br/>`0` left<br/>`1` right<br/>`2` center</div><div className='desc-meta'><VersionBadge type='changed' since='2.0.0.0'/></div></td>
    </tr>
    <tr id='net_graphproportionalfont'>
      <td className='name'>net_graphproportionalfont</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'><div className='text'>Determines if the `net_graph` font is proportional or not</div><div className='desc-meta'><VersionBadge type='added' since='2.0.0.0'/></div></td>
    </tr>
    <tr id='net_graphshowinterp'>
      <td className='name'>net_graphshowinterp</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'><div className='text'>Display the interpolation graph</div><div className='desc-meta'><VersionBadge type='added' since='2.0.0.0'/></div></td>
    </tr>
    <tr id='net_graphshowlatency'>
      <td className='name'>net_graphshowlatency</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'><div className='text'>Display the ping/packet loss graph</div><div className='desc-meta'><VersionBadge type='added' since='2.0.0.0'/></div></td>
    </tr>
    <tr id='net_graphsolid'>
      <td className='name'>net_graphsolid</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'><div className='text'>Makes the `net_graph` background opaque</div><div className='desc-meta'><VersionBadge type='added' since='2.0.0.0'/></div></td>
    </tr>
    <tr id='net_graphtext'>
      <td className='name'>net_graphtext</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'><div className='text'>Display text fields</div><div className='desc-meta'><VersionBadge type='added' since='2.0.0.0'/></div></td>
    </tr>
    <tr id='net_graphwidth'>
      <td className='name'>net_graphwidth</td>
      <td className='def'>250</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'><div className='text'>Width of the `net_graph` panel</div><div className='desc-meta'><VersionBadge type='changed' since='2.0.0.0'/></div></td>
    </tr>
    <tr id='net_scale'>
      <td className='name'>net_scale</td>
      <td className='def'>3</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'><div className='text'>Scale of the `net_graph`</div><div className='desc-meta'><VersionBadge type='changed' since='2.0.0.0'/></div></td>
    </tr>
    <tr id='ex_interp'>
      <td className='name'>ex_interp</td>
      <td className='def'>0.1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Time in seconds to interpolate object positions. A value of `1 / cl_updaterate` is optimal</td>
    </tr>
    <tr>
      <td colSpan='5' className='name'><a href='#r_bmodelinterp'>r_bmodelinterp</a></td>
    </tr>
  </tbody>
</Table>

#### Network : Client : Connection
<Table>
  <thead><tr><th>Name</th><th>Default</th><th>Min</th><th>Max</th><th>Description</th></tr></thead>
  <tbody>
    <tr id='cl_dlmax'>
      <td className='name'>cl_dlmax</td>
      <td className='def'>1024</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Maximum fragment size (in bytes) for downloading player logos from the server during gameplay, as well as for downloading missing resources when connecting to the server</td>
    </tr>
    <tr id='cl_download_delay_ms'>
      <td className='name'>cl_download_delay_ms</td>
      <td className='def'>0</td>
      <td className='min'>0</td>
      <td className='max'>10000</td>
      <td className='desc'><div className='text'>Delay in milliseconds between HTTP file downloads</div><div className='desc-meta'><VersionBadge type='added' since='2.0.0.0'/></div></td>
    </tr>
    <tr id='cl_download_demo_resources'>
      <td className='name'>cl_download_demo_resources</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'><div className='text'>Enables downloading of missing resources during demo playback</div><div className='desc-meta'><VersionBadge type='added' since='2.5.0.0'/></div></td>
    </tr>
    <tr id='cl_download_enable_gzip'>
      <td className='name'>cl_download_enable_gzip</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'><div className='text'>Enable Gzip compression support for fast downloads (FastDL)</div><div className='desc-meta'><VersionBadge type='added' since='2.3.6.0'/></div></td>
    </tr>
    <tr id='cl_download_ingame'>
      <td className='name'>cl_download_ingame</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Enables downloading of custom player sprays (logos) during gameplay</td>
    </tr>
    <tr id='cl_download_multi'>
      <td className='name'>cl_download_multi</td>
      <td className='def'>5</td>
      <td className='min'>1</td>
      <td className='max'>20</td>
      <td className='desc'><div className='text'>Maximum number of simultaneous downloads</div><div className='desc-meta'><VersionBadge type='added' since='2.0.0.0'/></div></td>
    </tr>
    <tr id='cl_download_retries'>
      <td className='name'>cl_download_retries</td>
      <td className='def'>3</td>
      <td className='min'>0</td>
      <td className='max'>10</td>
      <td className='desc'><div className='text'>Maximum number of download retry attempts</div><div className='desc-meta'><VersionBadge type='added' since='2.3.8.6'/></div></td>
    </tr>
    <tr id='cl_filterstuffcmd'>
      <td className='name'>cl_filterstuffcmd</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'><div className='text'>Filtering level for commands the server can execute on your client<br/>`0` off (no restrictions)<br/>`1` soft level (some commands allowed)<br/>`2` strict level (execution forbidden)</div><div className='desc-meta'><VersionBadge type='added' since='2.3.7.0'/></div></td>
    </tr>
    <tr id='cl_filterstuffcmd_notify'>
      <td className='name'>cl_filterstuffcmd_notify</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'><div className='text'>Enables notifications about blocked commands the server attempted to execute on your client</div><div className='desc-meta'><VersionBadge type='added' since='2.0.0.0'/></div></td>
    </tr>
    <tr id='cl_allow_demorecord'>
      <td className='name'>cl_allow_demorecord</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'><div className='text'>Allows servers to start demo recording on the client</div><div className='desc-meta'><VersionBadge type='added' since='1.5.0.0'/></div></td>
    </tr>
    <tr id='cl_allow_redirect'>
      <td className='name'>cl_allow_redirect</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'><div className='text'>Allow redirection to another server at the current server's request</div><div className='desc-meta'><VersionBadge type='added' since='2.3.6.0'/></div></td>
    </tr>
    <tr id='cl_allowdownload'>
      <td className='name'>cl_allowdownload</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Allow downloading maps, models, sounds, and other files when connecting to a server</td>
    </tr>
    <tr id='cl_allowupload'>
      <td className='name'>cl_allowupload</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Allow uploading your custom spray to the server upon connection</td>
    </tr>
  </tbody>
</Table>

## Server
<Table>
  <thead><tr><th>Name</th><th>Default</th><th>Min</th><th>Max</th><th>Description</th></tr></thead>
  <tbody>
    <tr id='hostname'>
      <td className='name'>hostname</td>
      <td className='def'>Half-Life</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Server name</td>
    </tr>
    <tr id='coop'>
      <td className='name'>coop</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Cooperative game mode</td>
    </tr>
    <tr id='skill'>
      <td className='name'>skill</td>
      <td className='def'>1</td>
      <td className='min'>1</td>
      <td className='max'>3</td>
      <td className='desc'>NPC difficulty level, used in Half-Life</td>
    </tr>
    <tr id='deathmatch'>
      <td className='name'>deathmatch</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Run the server in deathmatch mode (instant respawn)</td>
    </tr>
    <tr id='pausable'>
      <td className='name'>pausable</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Allows clients to pause the game</td>
    </tr>
    <tr id='host_framerate'>
      <td className='name'>host_framerate</td>
      <td className='def'>0.0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Locks the time elapsed per server frame</td>
    </tr>
    <tr id='host_killtime'>
      <td className='name'>host_killtime</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Time in seconds until server shutdown after the `killserver` command is executed</td>
    </tr>
    <tr id='host_limitlocal'>
      <td className='name'>host_limitlocal</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Apply `cl_cmdrate` and `cl_updaterate` to loopback connections</td>
    </tr>
    <tr id='host_profile'>
      <td className='name'>host_profile</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Enables host profiling</td>
    </tr>
    <tr id='host_speeds'>
      <td className='name'>host_speeds</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Show general system execution time information</td>
    </tr>
    <tr id='host_timescale'>
      <td className='name'>host_timescale</td>
      <td className='def'>1</td>
      <td className='min'>0.0625</td>
      <td className='max'>16</td>
      <td className='desc'>Multiplier for the flow of time on the server (slowdown/speedup)</td>
    </tr>
    <tr id='sv_accelerate'>
      <td className='name'>sv_accelerate</td>
      <td className='def'>10</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Player acceleration on the ground</td>
    </tr>
    <tr id='sv_aim'>
      <td className='name'>sv_aim</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Enables auto-aim for players (single-player or co-op only)</td>
    </tr>
    <tr id='sv_airaccelerate'>
      <td className='name'>sv_airaccelerate</td>
      <td className='def'>10</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Player acceleration in the air (affects strafe-jumping)</td>
    </tr>
    <tr id='sv_allow_dlfile'>
      <td className='name'>sv_allow_dlfile</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Allow file downloading from the server</td>
    </tr>
    <tr id='sv_allowdownload'>
      <td className='name'>sv_allowdownload</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Allow clients to download files from the server</td>
    </tr>
    <tr id='sv_allowupload'>
      <td className='name'>sv_allowupload</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Allow clients to upload files to the server (e.g., sprays)</td>
    </tr>
    <tr id='sv_bounce'>
      <td className='name'>sv_bounce</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Bounce multiplier for entity collisions</td>
    </tr>
    <tr id='sv_cheats'>
      <td className='name'>sv_cheats</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>If `1`, enables the use of 'cheat' commands like `impulse 101` (16000 money) or `god` (god mode)</td>
    </tr>
    <tr id='sv_clienttrace'>
      <td className='name'>sv_clienttrace</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Maximum trace radius for client-side hits</td>
    </tr>
    <tr id='sv_contact'>
      <td className='name'>sv_contact</td>
      <td className='def'>-</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Server contact information (e-mail)</td>
    </tr>
    <tr id='sv_downloadurl'>
      <td className='name'>sv_downloadurl</td>
      <td className='def'>-</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>URL for fast file downloads (FastDL)</td>
    </tr>
    <tr id='sv_enableoldqueries'>
      <td className='name'>sv_enableoldqueries</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Enable support for old server query protocols</td>
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
      <td className='desc'>Use bzip2 compression for file transfers</td>
    </tr>
    <tr id='sv_filetransfermaxsize'>
      <td className='name'>sv_filetransfermaxsize</td>
      <td className='def'>10485760</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Maximum file size for transfers (in bytes)</td>
    </tr>
    <tr id='sv_filterban'>
      <td className='name'>sv_filterban</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Enable IP filtering for bans</td>
    </tr>
    <tr id='sv_friction'>
      <td className='name'>sv_friction</td>
      <td className='def'>4</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Surface friction</td>
    </tr>
    <tr id='sv_gravity'>
      <td className='name'>sv_gravity</td>
      <td className='def'>800</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Server gravity</td>
    </tr>
    <tr id='sv_instancedbaseline'>
      <td className='name'>sv_instancedbaseline</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Use instanced baselines for entities</td>
    </tr>
    <tr id='sv_lan'>
      <td className='name'>sv_lan</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>If `1`, the server is considered a LAN server and is not announced to the internet</td>
    </tr>
    <tr id='sv_lan_rate'>
      <td className='name'>sv_lan_rate</td>
      <td className='def'>20000.0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Default rate for LAN servers</td>
    </tr>
    <tr id='sv_language'>
      <td className='name'>sv_language</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Server language</td>
    </tr>
    <tr id='sv_log_onefile'>
      <td className='name'>sv_log_onefile</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Write all logs to a single file</td>
    </tr>
    <tr id='sv_log_singleplayer'>
      <td className='name'>sv_log_singleplayer</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Log in single-player mode</td>
    </tr>
    <tr id='sv_logbans'>
      <td className='name'>sv_logbans</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Log bans</td>
    </tr>
    <tr id='sv_logblocks'>
      <td className='name'>sv_logblocks</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Log blocks</td>
    </tr>
    <tr id='sv_logrelay'>
      <td className='name'>sv_logrelay</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Relay logs to another address</td>
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
      <td className='desc'>Maximum rate a client can set<br/>`0` no limit</td>
    </tr>
    <tr id='sv_maxspeed'>
      <td className='name'>sv_maxspeed</td>
      <td className='def'>320</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Maximum player movement speed</td>
    </tr>
    <tr id='sv_maxunlag'>
      <td className='name'>sv_maxunlag</td>
      <td className='def'>0.5</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Maximum time (in seconds) the server will rewind to compensate for lag. Higher values improve compensation but may cause unrealistic hits for high-ping players</td>
    </tr>
    <tr id='sv_maxupdaterate'>
      <td className='name'>sv_maxupdaterate</td>
      <td className='def'>30.0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Maximum update rate the server can send to clients</td>
    </tr>
    <tr id='sv_maxvelocity'>
      <td className='name'>sv_maxvelocity</td>
      <td className='def'>2000</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Maximum velocity of any moving object</td>
    </tr>
    <tr id='sv_minrate'>
      <td className='name'>sv_minrate</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Minimum rate a client can set</td>
    </tr>
    <tr id='sv_minupdaterate'>
      <td className='name'>sv_minupdaterate</td>
      <td className='def'>10.0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Minimum update rate the server can send to clients</td>
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
      <td className='desc'>Sets the server password</td>
    </tr>
    <tr id='sv_proxies'>
      <td className='name'>sv_proxies</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Number of proxies that can be on the server</td>
    </tr>
    <tr id='sv_rcon_banpenalty'>
      <td className='name'>sv_rcon_banpenalty</td>
      <td className='def'>0</td>
      <td className='min'>0</td>
      <td className='max'>-</td>
      <td className='desc'>Number of minutes to ban a user for failed rcon authentications</td>
    </tr>
    <tr id='sv_rcon_maxfailures'>
      <td className='name'>sv_rcon_maxfailures</td>
      <td className='def'>10</td>
      <td className='min'>1</td>
      <td className='max'>20</td>
      <td className='desc'>Maximum number of failed rcon authentication attempts before a ban</td>
    </tr>
    <tr id='sv_rcon_minfailures'>
      <td className='name'>sv_rcon_minfailures</td>
      <td className='def'>5</td>
      <td className='min'>1</td>
      <td className='max'>20</td>
      <td className='desc'>Number of failed rcon authentication attempts within `sv_rcon_minfailuretime` before a ban is issued</td>
    </tr>
    <tr id='sv_rcon_minfailuretime'>
      <td className='name'>sv_rcon_minfailuretime</td>
      <td className='def'>30</td>
      <td className='min'>1</td>
      <td className='max'>-</td>
      <td className='desc'>Number of seconds to track failed rcon authentications</td>
    </tr>
    <tr id='sv_rcon_whitelist_address'>
      <td className='name'>sv_rcon_whitelist_address</td>
      <td className='def'>-</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'><div className='text'>If set, this IP address will never be banned for failed rcon attempts, e.g., `127.0.0.1`</div><div className='desc-meta'><VersionBadge type='added' since='2.3.7.0'/></div></td>
    </tr>
    <tr id='sv_rollangle'>
      <td className='name'>sv_rollangle</td>
      <td className='def'>0.0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Camera roll angle when strafing</td>
    </tr>
    <tr id='sv_rollspeed'>
      <td className='name'>sv_rollspeed</td>
      <td className='def'>200</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Camera roll speed when strafing</td>
    </tr>
    <tr id='sv_send_logos'>
      <td className='name'>sv_send_logos</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Allow sending of player logos</td>
    </tr>
    <tr id='sv_send_resources'>
      <td className='name'>sv_send_resources</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Allow sending of the resource list to clients</td>
    </tr>
    <tr id='sv_skycolor_b'>
      <td className='name'>sv_skycolor_b</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Blue component of the sky color</td>
    </tr>
    <tr id='sv_skycolor_g'>
      <td className='name'>sv_skycolor_g</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Green component of the sky color</td>
    </tr>
    <tr id='sv_skycolor_r'>
      <td className='name'>sv_skycolor_r</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Red component of the sky color</td>
    </tr>
    <tr id='sv_skyname'>
      <td className='name'>sv_skyname</td>
      <td className='def'>desert</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Name of the sky texture (skybox)</td>
    </tr>
    <tr id='sv_skyvec_x'>
      <td className='name'>sv_skyvec_x</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>X-axis direction for a moving sky</td>
    </tr>
    <tr id='sv_skyvec_y'>
      <td className='name'>sv_skyvec_y</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Y-axis direction for a moving sky</td>
    </tr>
    <tr id='sv_skyvec_z'>
      <td className='name'>sv_skyvec_z</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Z-axis direction for a moving sky</td>
    </tr>
    <tr id='sv_spectatormaxspeed'>
      <td className='name'>sv_spectatormaxspeed</td>
      <td className='def'>500</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Maximum speed in spectator mode</td>
    </tr>
    <tr id='sv_stats'>
      <td className='name'>sv_stats</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Collect CPU usage statistics</td>
    </tr>
    <tr id='sv_stepsize'>
      <td className='name'>sv_stepsize</td>
      <td className='def'>18</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Maximum height of a step a player can climb</td>
    </tr>
    <tr id='sv_stopspeed'>
      <td className='name'>sv_stopspeed</td>
      <td className='def'>100</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Player stopping speed</td>
    </tr>
    <tr id='sv_timeout'>
      <td className='name'>sv_timeout</td>
      <td className='def'>60</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>If the server receives no packets from a client for this duration (in seconds), the client is disconnected</td>
    </tr>
    <tr id='sv_unlag'>
      <td className='name'>sv_unlag</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Enables or disables lag compensation. Set to `1` to allow the server to adjust player positions based on their latency</td>
    </tr>
    <tr id='sv_unlagpush'>
      <td className='name'>sv_unlagpush</td>
      <td className='def'>0.0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Adjusts compensation timing. Positive values add delay, negative values reduce it. Useful for fine-tuning accuracy based on server conditions</td>
    </tr>
    <tr id='sv_unlagsamples'>
      <td className='name'>sv_unlagsamples</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Sets the number of frames used for lag compensation. Higher values can improve accuracy but increase server CPU load</td>
    </tr>
    <tr id='sv_uploadmax'>
      <td className='name'>sv_uploadmax</td>
      <td className='def'>0.5</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Maximum upload file size (in MB)</td>
    </tr>
    <tr id='sv_use_entity_file'>
      <td className='name'>sv_use_entity_file</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'><div className='text'>Use an external file for entity data</div><div className='desc-meta'><VersionBadge type='added' since='2.5.0.0'/></div></td>
    </tr>
    <tr id='sv_userinfo_transmitted_fields'>
      <td className='name'>sv_userinfo_transmitted_fields</td>
      <td className='def'>-</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'><div className='text'>Which userinfo fields are transmitted to clients</div><div className='desc-meta'><VersionBadge type='added' since='2.0.0.0'/></div></td>
    </tr>
    <tr id='sv_version'>
      <td className='name'>sv_version</td>
      <td className='def'>1.1.2.7,48,10517</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Server version</td>
    </tr>
    <tr id='sv_visiblemaxplayers'>
      <td className='name'>sv_visiblemaxplayers</td>
      <td className='def'>-1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Number of slots displayed in the server browser. `-1` uses the actual number</td>
    </tr>
    <tr id='sv_voicecodec'>
      <td className='name'>sv_voicecodec</td>
      <td className='def'>voice_speex</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Voice codec used by the server</td>
    </tr>
    <tr id='sv_voiceenable'>
      <td className='name'>sv_voiceenable</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Enables voice chat on the server</td>
    </tr>
    <tr id='sv_voicequality'>
      <td className='name'>sv_voicequality</td>
      <td className='def'>3</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Voice chat quality</td>
    </tr>
    <tr id='sv_wateraccelerate'>
      <td className='name'>sv_wateraccelerate</td>
      <td className='def'>10</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Acceleration in water</td>
    </tr>
    <tr id='sv_wateramp'>
      <td className='name'>sv_wateramp</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Water wave amplitude (server-side)</td>
    </tr>
    <tr id='sv_waterfriction'>
      <td className='name'>sv_waterfriction</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Friction in water</td>
    </tr>
    <tr id='sv_zmax'>
      <td className='name'>sv_zmax</td>
      <td className='def'>4096</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Maximum entity visibility distance on the server</td>
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
      <td className='desc'>Folder for storing logs</td>
    </tr>
    <tr id='sys_ticrate'>
      <td className='name'>sys_ticrate</td>
      <td className='def'>100.0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Server tickrate (number of simulations per second)</td>
    </tr>
    <tr id='syserror_logfile'>
      <td className='name'>syserror_logfile</td>
      <td className='def'>crashdumps\sys_error.log</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Log file for system errors</td>
    </tr>
    <tr id='servercfgfile'>
      <td className='name'>servercfgfile</td>
      <td className='def'>server.cfg</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Name of the main server configuration file</td>
    </tr>
    <tr id='mapchangecfgfile'>
      <td className='name'>mapchangecfgfile</td>
      <td className='def'>-</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Name of the configuration file executed on every map change</td>
    </tr>
    <tr id='mapcyclefile'>
      <td className='name'>mapcyclefile</td>
      <td className='def'>mapcycle.txt</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Name of the file used for the map cycle</td>
    </tr>
    <tr id='listipcfgfile'>
      <td className='name'>listipcfgfile</td>
      <td className='def'>listip.cfg</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Name of the configuration file for IP addresses</td>
    </tr>
    <tr id='lservercfgfile'>
      <td className='name'>lservercfgfile</td>
      <td className='def'>listenserver.cfg</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Name of the configuration file for a listen server (created via the game menu)</td>
    </tr>
    <tr id='bannedcfgfile'>
      <td className='name'>bannedcfgfile</td>
      <td className='def'>banned.cfg</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Name of the configuration file for banned users</td>
    </tr>
    <tr id='motdfile'>
      <td className='name'>motdfile</td>
      <td className='def'>motd.txt</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Name of the file for the 'Message of the Day' (MOTD), displayed upon joining the server</td>
    </tr>
    <tr id='hpk_maxsize'>
      <td className='name'>hpk_maxsize</td>
      <td className='def'>4</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Maximum size of the custom.hpk file (in MB)</td>
    </tr>
    <tr id='HostMap'>
      <td className='name'>HostMap</td>
      <td className='def'>C1A0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Internal variable for remembering the current map, used by the `reload` command</td>
    </tr>
    <tr id='mp_consistency'>
      <td className='name'>mp_consistency</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Verifies that critical files on the client and server match</td>
    </tr>
    <tr id='mp_decals'>
      <td className='name'>mp_decals</td>
      <td className='def'>300</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Maximum number of decals on the server</td>
    </tr>
    <tr id='sp_decals'>
      <td className='name'>sp_decals</td>
      <td className='def'>4096</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Maximum number of decals in single-player</td>
    </tr>
    <tr id='mp_footsteps'>
      <td className='name'>mp_footsteps</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Enables footstep sounds</td>
    </tr>
    <tr id='mp_logecho'>
      <td className='name'>mp_logecho</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Output log messages to the server console</td>
    </tr>
    <tr id='mp_logfile'>
      <td className='name'>mp_logfile</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Log server activity to a file</td>
    </tr>
  </tbody>
</Table>

## Window & Input Settings
<Table>
  <thead><tr><th>Name</th><th>Default</th><th>Min</th><th>Max</th><th>Description</th></tr></thead>
  <tbody>
    <tr id='sdl_double_click_size'>
      <td className='name'>sdl_double_click_size</td>
      <td className='def'>2</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Area size (in pixels) for detecting a double-click</td>
    </tr>
    <tr id='sdl_double_click_time'>
      <td className='name'>sdl_double_click_time</td>
      <td className='def'>400</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Time (in ms) for detecting a double-click</td>
    </tr>
    <tr id='sdl_minimize_on_focus_loss'>
      <td className='name'>sdl_minimize_on_focus_loss</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Minimize the game when it loses focus in fullscreen mode<br/>It is recommended to disable this outdated behavior to improve compatibility with window managers<br/>Note that if you disable this, the game will not minimize with a single `Win` key press; use `Win + D` or `Alt + ESC` instead</td>
    </tr>
    <tr id='sdl_pollevent_no_timeout'>
      <td className='name'>sdl_pollevent_no_timeout</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Enable immediate event polling, bypassing SDL_WaitEventTimeout with a zero timeout (for debugging)</td>
    </tr>
  </tbody>
</Table>

## Render Tweaks for Performance
<h5>CVars related to rendering that can impact game performance, both positively and negatively<br/>Adjust these settings to optimize FPS or control the number of visual effects like particles, laser beams, etc.</h5>
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

## Developer / Debug
<Table>
  <thead><tr><th>Name</th><th>Default</th><th>Min</th><th>Max</th><th>Description</th></tr></thead>
  <tbody>
    <tr id='developer'>
      <td className='name'>developer</td>
      <td className='def'>0</td>
      <td className='min'>0</td>
      <td className='max'>3</td>
      <td className='desc'>Sets the developer message level<br/>Developer mode can be used to display information on screen and output extended information to the console</td>
    </tr>
    <tr id='dev_overview'>
      <td className='name'>dev_overview</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Enables a top-down map view mode for creating overview images</td>
    </tr>
    <tr id='mem_show'>
      <td className='name'>mem_show</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Show memory usage information</td>
    </tr>
    <tr id='fs_lazy_precache'>
      <td className='name'>fs_lazy_precache</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Lazy resource precaching<br/>If `0` — all models, sounds, etc., are loaded immediately upon connecting to the server<br/>Startup will be longer, but there will be fewer stutters during gameplay<br/><br/>If `1` — resources are loaded only on their first use in the game<br/>Connection is faster, but minor freezes may occur when new objects appear<br/>Use this if you want to join faster or have low RAM</td>
    </tr>
    <tr id='fs_perf_warnings'>
      <td className='name'>fs_perf_warnings</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>File system performance warnings<br/>If enabled, the game will output warnings to the console if file loading is slow or not as expected. Useful for debugging or identifying file issues</td>
    </tr>
    <tr id='fs_precache_timings'>
      <td className='name'>fs_precache_timings</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Show resource loading times<br/>Enables console output showing how many seconds it took to load each model or sound<br/>Useful for testing and finding 'heavy' resources that take a long time to load</td>
    </tr>
    <tr id='fs_startup_timings'>
      <td className='name'>fs_startup_timings</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Show client startup times<br/>When connecting to a server, outputs step-by-step client loading times (resource precaching, connection, etc.) to the console. Useful for understanding where delays occur</td>
    </tr>
    <tr id='cl_pmanstats'>
      <td className='name'>cl_pmanstats</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Show particle manager statistics</td>
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
