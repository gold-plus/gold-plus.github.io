---
id: cvars
title: Console variables
sidebar_position: 1
---

:::warning Page under construction
This page is under active filling and correction.<br/>
There may be errors, inaccuracies and omissions, and lack of translation.<br/>
Follow the updates to receive up-to-date information.
:::

# Console variables

List of all console variables (ConVar) - description, default values.

<div className='table-legend'>
  <div><span className='legend-icon added'></span> Added</div>
  <div><span className='legend-icon changed'></span> Modified</div>
  <div><span className='legend-icon removed'></span> Removed</div>
</div>

## User Interface
<table className='docs-table'>
  <thead><tr><th>Name</th><th>Default</th><th>Min</th><th>Max</th><th>Description</th></tr></thead>
  <tbody>
    <tr id='ah'>
      <td className='name'>ah</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Auto-help</td>
    </tr>
    <tr id='skin'>
      <td className='name'>skin</td>
      <td className='def'>-</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Selected skin</td>
    </tr>
    <tr id='team'>
      <td className='name'>team</td>
      <td className='def'>-</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Selected team</td>
    </tr>
    <tr id='bottomcolor'>
      <td className='name'>bottomcolor</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Current bottomcolor model</td>
    </tr>
    <tr id='topcolor'>
      <td className='name'>topcolor</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Current topcolor model</td>
    </tr>
    <tr id='model'>
      <td className='name'>model</td>
      <td className='def'>-</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Current model name</td>
    </tr>
    <tr id='name'>
      <td className='name'>name</td>
      <td className='def'>Player</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Current user name</td>
    </tr>
    <tr id='password'>
      <td className='name'>password</td>
      <td className='def'>-</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Current server access password</td>
    </tr>
    <tr id='cl_autowepswitch'>
      <td className='name'>cl_autowepswitch</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Automatically switch to picked up weapons (if more powerful)</td>
    </tr>
    <tr className='modified' id='cl_logocolor'>
      <td className='name'>cl_logocolor</td>
      <td className='def color'><div style={{background: `rgba(255,120,24,0.85)`, color: `#111`}}>255 120 24</div></td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>-</td>
    </tr>
    <tr id='cl_logofile'>
      <td className='name'>cl_logofile</td>
      <td className='def'>lambda</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>-</td>
    </tr>
    <tr className='added' id='sbind'>
      <td className='name'>sbind</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Enables shadow keybindings when playing on server</td>
    </tr>
  </tbody>
</table>

### UI : Preferences
<table className='docs-table'>
  <thead><tr><th>Name</th><th>Default</th><th>Min</th><th>Max</th><th>Description</th></tr></thead>
  <tbody>
    <tr className='added' id='cl_servers_history_lastplayed'>
      <td className='name'>cl_servers_history_lastplayed</td>
      <td className='def'>7776000</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Remove servers from history with last played N secs ago. Default = 3 month ago (7776000 secs). Set 0 for unlimit</td>
    </tr>
    <tr className='added' id='ui_enable_menu_randomsrv'>
      <td className='name'>ui_enable_menu_randomsrv</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Enables menu item random server</td>
    </tr>
    <!-- Beta -->
    <!-- tr className='added'>
      <td className='name' id='ui_matchmaking_tab'>ui_matchmaking_tab</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Show or hide the 'Online Game' tab in the New Game dialog</td>
    </tr -->
    <tr className='added' id='ui_password_entry'>
      <td className='name'>ui_password_entry</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Enables the password entry field</td>
    </tr>
    <tr className='added' id='ui_taskbar_iconflash'>
      <td className='name'>ui_taskbar_iconflash</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Flashing icon in system the taskbar to grab the user's attention on events such as connected to game server, or spawn, etc</td>
    </tr>
    <tr className='added' id='ui_window_bringfront_on_event'>
      <td className='name'>ui_window_bringfront_on_event</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Bring window to front on events such as connected to game server, or spawn, etc</td>
    </tr>
    <tr className='added' id='ui_window_sound_on_event'>
      <td className='name'>ui_window_sound_on_event</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Play a sound on events such as connected to game server, or spawn, etc</td>
    </tr>
    <tr className='added' id='vgui_menus'>
      <td className='name'>vgui_menus</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Enables VGUI style menu with images and descriptions</td>
    </tr>
  </tbody>
</table>

### UI : Console
<table className='docs-table'>
  <thead><tr><th>Name</th><th>Default</th><th>Min</th><th>Max</th><th>Description</th></tr></thead>
  <tbody>
    <tr className='added' id='dev_console'>
      <td className='name'>dev_console</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Enables in-game console access without showing GameUI<br/>`0` console opens through GameUI<br/>`1` console opens directly over client HUD (including loading dialog)</td>
    </tr>
    <tr id='console'>
      <td className='name'>console</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>-</td>
    </tr>
    <tr id='con_color'>
      <td className='name'>con_color</td>
      <td className='def color'><div style={{background: `rgba(255,180,30,0.85)`, color: `#111`}}>255 180 30</div></td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Sets the RGB color of chat messages</td>
    </tr>
    <tr id='con_mono'>
      <td className='name'>con_mono</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>-</td>
    </tr>
    <tr id='con_notifytime'>
      <td className='name'>con_notifytime</td>
      <td className='def'>4</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>-</td>
    </tr>
    <tr id='con_shifttoggleconsole'>
      <td className='name'>con_shifttoggleconsole</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>-</td>
    </tr>
  </tbody>
</table>

### HUD
<table className='docs-table'>
  <thead><tr><th>Name</th><th>Default</th><th>Min</th><th>Max</th><th>Description</th></tr></thead>
  <tbody>
    <tr id='hud_draw'>
      <td className='name'>hud_draw</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Enable the rendering of the HUD elements</td>
    </tr>
    <tr className='added' id='hud_draw_only_deathnotices'>
      <td className='name'>hud_draw_only_deathnotices</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>For drawing only the crosshair and death notices (used for moviemaking)</td>
    </tr>
    <tr id='hud_drawhistory_time'>
      <td className='name'>hud_drawhistory_time</td>
      <td className='def'>5</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>-</td>
    </tr>
    <tr id='hud_fastswitch'>
      <td className='name'>hud_fastswitch</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>-</td>
    </tr>
    <tr id='hud_takesshots'>
      <td className='name'>hud_takesshots</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Auto-save a scoreboard screenshot at the end of a map</td>
    </tr>
    <tr id='hud_centerid'>
      <td className='name'>hud_centerid</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Display of target player names in center position 0 = lower left, 1 = center</td>
    </tr>
    <tr className='added' id='hud_color'>
      <td className='name'>hud_color</td>
      <td className='def color'><div style={{background: `rgba(255,160,0,0.85)`, color: `#111`}}>255 160 0</div></td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Sets color for the HUD elements</td>
    </tr>
    <tr className='added' id='fov_lerp_in'>
      <td className='name'>fov_lerp_in</td>
      <td className='def'>0</td>
      <td className='min'>0</td>
      <td className='max'>5</td>
      <td className='desc'>Speed of smooth FOV change when zooming in</td>
    </tr>
    <tr className='added' id='fov_lerp_out'>
      <td className='name'>fov_lerp_out</td>
      <td className='def'>0</td>
      <td className='min'>0</td>
      <td className='max'>5</td>
      <td className='desc'>Speed of smooth FOV change when zooming out</td>
    </tr>
    <tr className='added' id='fov_lerp_sniper_instant'>
      <td className='name'>fov_lerp_sniper_instant</td>
      <td className='def'>1</td>
      <td className='min'>0</td>
      <td className='max'>1</td>
      <td className='desc'>Disable `fov_lerp_in` when resuming zoom after firing a shot with sniper rifles<br/>Set to `0` for enabling smooth interpolation by `fov_lerp_in`</td>
    </tr>
    <tr className='added' id='cl_demo_showkeys'>
      <td className='name'>cl_demo_showkeys</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Show pressed movement keys (WASD, jump, duck) on screen while watching POV demos as a spectator</td>
    </tr>
    <tr className='added' id='cl_locationalpha'>
      <td className='name'>cl_locationalpha</td>
      <td className='def'>150</td>
      <td className='min'>0</td>
      <td className='max'>255</td>
      <td className='desc'>-</td>
    </tr>
    <tr id='cl_weaponlistfix'>
      <td className='name'>cl_weaponlistfix</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>-</td>
    </tr>
    <tr id='cl_radartype'>
      <td className='name'>cl_radartype</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Enables opaque (non translucent) radar</td>
    </tr>
    <tr id='showpause'>
      <td className='name'>showpause</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>-</td>
    </tr>
    <tr id='scr_centertime'>
      <td className='name'>scr_centertime</td>
      <td className='def'>2</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>-</td>
    </tr>
    <tr id='scr_printspeed'>
      <td className='name'>scr_printspeed</td>
      <td className='def'>8</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>-</td>
    </tr>
  </tbody>
</table>

#### HUD : Crosshair
<table className='docs-table'>
  <thead><tr><th>Name</th><th>Default</th><th>Min</th><th>Max</th><th>Description</th></tr></thead>
  <tbody>
    <tr id='crosshair'>
      <td className='name'>crosshair</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>-</td>
    </tr>
    <tr className='added' id='cl_crosshair_drawoutline'>
      <td className='name'>cl_crosshair_drawoutline</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Draws a black outline around the crosshair for better visibility</td>
    </tr>
    <tr className='added' id='cl_crosshair_dynamic_maxdist_splitratio'>
      <td className='name'>cl_crosshair_dynamic_maxdist_splitratio</td>
      <td className='def'>0.35</td>
      <td className='min'>0.0</td>
      <td className='max'>1.0</td>
      <td className='desc'>If using `cl_crosshairstyle 2`, this is the ratio used to determine how long the inner and outer xhair pips will be<br/>`inner` cl_crosshairsize * (1 - cl_crosshair_dynamic_maxdist_splitratio)<br/>`outer` cl_crosshairsize * cl_crosshair_dynamic_maxdist_splitratio</td>
    </tr>
    <tr className='added' id='cl_crosshair_dynamic_splitalpha_innermod'>
      <td className='name'>cl_crosshair_dynamic_splitalpha_innermod</td>
      <td className='def'>1</td>
      <td className='min'>0.0</td>
      <td className='max'>1.0</td>
      <td className='desc'>If using `cl_crosshairstyle 2`, this is the alpha modification that will be used for the INNER crosshair pips once they've split</td>
    </tr>
    <tr className='added' id='cl_crosshair_dynamic_splitalpha_outermod'>
      <td className='name'>cl_crosshair_dynamic_splitalpha_outermod</td>
      <td className='def'>0.5</td>
      <td className='min'>0.3</td>
      <td className='max'>1.0</td>
      <td className='desc'>If using `cl_crosshairstyle 2`, this is the alpha modification that will be used for the OUTER crosshair pips once they've split</td>
    </tr>
    <tr className='added' id='cl_crosshair_dynamic_splitdist'>
      <td className='name'>cl_crosshair_dynamic_splitdist</td>
      <td className='def'>7</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>If using `cl_crosshairstyle 2`, this is the distance that the crosshair pips will split into 2</td>
    </tr>
    <tr className='added' id='cl_crosshair_friendly_warning'>
      <td className='name'>cl_crosshair_friendly_warning</td>
      <td className='def'>0</td>
      <td className='min'>0</td>
      <td className='max'>2</td>
      <td className='desc'>`0` always off<br/>`1` only on default crosshair styles<br/>`2` always on</td>
    </tr>
    <tr className='added' id='cl_crosshair_outlinethickness'>
      <td className='name'>cl_crosshair_outlinethickness</td>
      <td className='def'>1</td>
      <td className='min'>0.1</td>
      <td className='max'>3.0</td>
      <td className='desc'>Set how thick you want your crosshair outline to draw (0.1-3)</td>
    </tr>
    <tr className='added' id='cl_crosshair_recoverytime_on_fps'>
      <td className='name'>cl_crosshair_recoverytime_on_fps</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Crosshair recovery time depends on FPS</td>
    </tr>
    <tr className='added' id='cl_crosshair_sniper_show_normal_inaccuracy'>
      <td className='name'>cl_crosshair_sniper_show_normal_inaccuracy</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Include standing inaccuracy when determining sniper crosshair blur</td>
    </tr>
    <tr className='added' id='cl_crosshair_sniper_style'>
      <td className='name'>cl_crosshair_sniper_style</td>
      <td className='def'>0</td>
      <td className='min'>0</td>
      <td className='max'>1</td>
      <td className='desc'>`0` Classic static sniper scope<br/>`1` Accurate dynamic sniper scope</td>
    </tr>
    <tr className='added' id='cl_crosshair_sniper_width'>
      <td className='name'>cl_crosshair_sniper_width</td>
      <td className='def'>1</td>
      <td className='min'>1</td>
      <td className='max'>20</td>
      <td className='desc'>If >1 sniper scope cross lines gain extra width (1 for single-pixel hairline)</td>
    </tr>
    <tr className='added' id='cl_crosshair_t'>
      <td className='name'>cl_crosshair_t</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>T style crosshair</td>
    </tr>
    <tr className='added' id='cl_crosshairalpha'>
      <td className='name'>cl_crosshairalpha</td>
      <td className='def'>255</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Sets how transparent crosshair is on screen. The lower the value, the less visible crosshair is</td>
    </tr>
    <tr className='added' id='cl_crosshaircolor'>
      <td className='name'>cl_crosshaircolor</td>
      <td className='def color'><div style={{background: `rgba(50,250,50,0.85)`, color: `#111`}}>50 250 50</div></td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Set the color of crosshair, adjusting its level of red</td>
    </tr>
    <tr className='added' id='cl_crosshairdot'>
      <td className='name'>cl_crosshairdot</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Adds a dot in the center of your crosshair. If you reduce cl_crosshairsize to 0, you can set it so you only have a dot</td>
    </tr>
    <tr className='added' id='cl_crosshairgap'>
      <td className='name'>cl_crosshairgap</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Sets the gap between the 4 bars on crosshair</td>
    </tr>
    <tr className='added' id='cl_crosshairgap_useweaponvalue'>
      <td className='name'>cl_crosshairgap_useweaponvalue</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>If set to 1, the gap will update dynamically based on which weapon is currently equipped</td>
    </tr>
    <tr className='added' id='cl_crosshairscale'>
      <td className='name'>cl_crosshairscale</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Adjusts the scale of the crosshair size. 0 = Auto (Proportional), 1 = Small, 2 = Medium, 3 = Large</td>
    </tr>
    <tr className='added' id='cl_crosshairsize'>
      <td className='name'>cl_crosshairsize</td>
      <td className='def'>5</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Sets size in length the 4 bars on crosshair</td>
    </tr>
    <tr className='added' id='cl_crosshairstyle'>
      <td className='name'>cl_crosshairstyle</td>
      <td className='def'>6</td>
      <td className='min'>0</td>
      <td className='max'>6</td>
      <td className='desc'>`0` DEFAULT<br/>`1` DEFAULT STATIC<br/>`2` ACCURATE SPLIT (accurate recoil/spread feedback with a fixed inner part)<br/>`3` ACCURATE DYNAMIC (accurate recoil/spread feedback)<br/>`4` CLASSIC STATIC<br/>`5` OLD CS STYLE (fake recoil - inaccurate feedback)<br/>`6` DEFAULT LEGACY CS 1.6</td>
    </tr>
    <tr className='added' id='cl_crosshairthickness'>
      <td className='name'>cl_crosshairthickness</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Adjusts the thickness of in game crosshair</td>
    </tr>
    <tr className='added' id='cl_crosshairusealpha'>
      <td className='name'>cl_crosshairusealpha</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Adjusts the transparency of crosshair</td>
    </tr>
    <tr className='added' id='cl_fixedcrosshairgap'>
      <td className='name'>cl_fixedcrosshairgap</td>
      <td className='def'>3</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>How big to make the gap between the pips in the fixed crosshair</td>
    </tr>
    <tr className='added' id='weapon_debug_spread_gap'>
      <td className='name'>weapon_debug_spread_gap</td>
      <td className='def'>0.67</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>-</td>
    </tr>
    <tr className='added' id='weapon_debug_spread_show'>
      <td className='name'>weapon_debug_spread_show</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Enables display of weapon accuracy; 1: show accuracy box, 3: show accuracy with dynamic crosshair</td>
    </tr>
    <tr id='cl_dynamiccrosshair'>
      <td className='name'>cl_dynamiccrosshair</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Enables dynamic crosshair 0 = OFF, 1 = normal behavior(based on actual weapon accuracy), 2 = only firing accuracy</td>
    </tr>
    <tr id='cl_observercrosshair'>
      <td className='name'>cl_observercrosshair</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>-</td>
    </tr>
  </tbody>
</table>

#### HUD : Radar
<table className='docs-table'>
  <thead><tr><th>Name</th><th>Default</th><th>Min</th><th>Max</th><th>Description</th></tr></thead>
  <tbody>
    <tr className='added' id='hud_radar'>
      <td className='name'>hud_radar</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Enables HUD radar</td>
    </tr>
    <tr className='added' id='hud_radar_alpha'>
      <td className='name'>hud_radar_alpha</td>
      <td className='def'>255</td>
      <td className='min'>0</td>
      <td className='max'>255</td>
      <td className='desc'>Adjusts HUD radar translucency (0-255)</td>
    </tr>
    <tr className='added' id='hud_radar_always_centered'>
      <td className='name'>hud_radar_always_centered</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>If set to 0, the radar is maximally used. Otherwise the player is always centered, even at map extents</td>
    </tr>
    <tr className='added' id='hud_radar_bgcolor'>
      <td className='name'>hud_radar_bgcolor</td>
      <td className='def color'><div style={{background: `rgba(0,0,0,1.0)`, color: `#eee`}}>0 0 0 255</div></td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Background color of the HUD radar (RGBA)</td>
    </tr>
    <tr className='added' id='hud_radar_fgcolor'>
      <td className='name'>hud_radar_fgcolor</td>
      <td className='def color'><div style={{background: `rgba(0,0,0,0.8)`, color: `#eee`}}>0 0 0 220</div></td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Foreground color of the HUD radar (RGBA)</td>
    </tr>
    <tr className='added' id='hud_radar_icon_scale_min'>
      <td className='name'>hud_radar_icon_scale_min</td>
      <td className='def'>0.3</td>
      <td className='min'>0.05</td>
      <td className='max'>1</td>
      <td className='desc'>Sets the minimum icon scale. Valid values are 0.05 to 1.0</td>
    </tr>
    <tr className='added' id='hud_radar_map_outlinecolor'>
      <td className='name'>hud_radar_map_outlinecolor</td>
      <td className='def color'><div style={{background: `rgba(10,10,10,1)`, color: `#eee`}}>10 10 10 255</div></td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Set color outline to draw bounds of map</td>
    </tr>
    <tr className='added' id='hud_radar_map_outlinethickness'>
      <td className='name'>hud_radar_map_outlinethickness</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Set outline thickness to draw bounds of map</td>
    </tr>
    <tr className='added' id='hud_radar_map_shadecolor'>
      <td className='name'>hud_radar_map_shadecolor</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Set the color shade for drawing the map</td>
    </tr>
    <tr className='added' id='hud_radar_map_solidcolor'>
      <td className='name'>hud_radar_map_solidcolor</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Set the color solid for drawing the map</td>
    </tr>
    <tr className='added' id='hud_radar_mapscale'>
      <td className='name'>hud_radar_mapscale</td>
      <td className='def'>0.9</td>
      <td className='min'>0.2</td>
      <td className='max'>3.5</td>
      <td className='desc'>Adjusts the map scale level of the HUD radar</td>
    </tr>
    <tr className='added' id='hud_radar_mapscale_dynamic'>
      <td className='name'>hud_radar_mapscale_dynamic</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Toggles between a radar that scales dynamically to encompass all the detected elements on the map</td>
    </tr>
    <tr className='added' id='hud_radar_mapscale_dynamic_min'>
      <td className='name'>hud_radar_mapscale_dynamic_min</td>
      <td className='def'>0.5</td>
      <td className='min'>0.01</td>
      <td className='max'>3.5</td>
      <td className='desc'>Sets the minimum scale threshold to prevent the map radar from scaling down too much with dynamic scaling. (Scale with 0.5 in most cases covers the entire map)</td>
    </tr>
    <tr className='added' id='hud_radar_objectives'>
      <td className='name'>hud_radar_objectives</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Enables display of objectives on the HUD radar</td>
    </tr>
    <tr className='added' id='hud_radar_panel_pos'>
      <td className='name'>hud_radar_panel_pos</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Sets the position of the radar panel. 0 = Left side, 1 = Right side</td>
    </tr>
    <tr className='added' id='hud_radar_rotate'>
      <td className='name'>hud_radar_rotate</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Rotating the angle of the radar display?</td>
    </tr>
    <tr className='added' id='hud_radar_scale'>
      <td className='name'>hud_radar_scale</td>
      <td className='def'>1</td>
      <td className='min'>0.5</td>
      <td className='max'>3</td>
      <td className='desc'>Sets the radar scale. Valid values are 0.5 to 3.0</td>
    </tr>
    <tr className='added' id='hud_radar_scale_with_scoreboard'>
      <td className='name'>hud_radar_scale_with_scoreboard</td>
      <td className='def'>0</td>
      <td className='min'>0</td>
      <td className='max'>3</td>
      <td className='desc'>Sets the radar scale when the scoreboard is visible. Valid values are 0.0 to 3.0. If set to 0, scaling is disabled</td>
    </tr>
    <tr className='added' id='hud_radar_shapecolor'>
      <td className='name'>hud_radar_shapecolor</td>
      <td className='def color'><div style={{background: `rgba(158,158,158,0.85)`, color:`var(--ifm-font-color-base)`}}>158 158 158</div></td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Module Shape color of the HUD radar (RGB)</td>
    </tr>
    <tr className='added' id='hud_radar_showhealth'>
      <td className='name'>hud_radar_showhealth</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Show player's health in map overview</td>
    </tr>
    <tr className='added' id='hud_radar_shownames'>
      <td className='name'>hud_radar_shownames</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Show player's names in map overview</td>
    </tr>
    <tr className='added' id='hud_radar_showtracks'>
      <td className='name'>hud_radar_showtracks</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Show player's tracks in map overview</td>
    </tr>
    <tr className='added' id='hud_radar_square'>
      <td className='name'>hud_radar_square</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>If set, the radar will toggle to square</td>
    </tr>
    <tr className='added' id='hud_radar_square_with_scoreboard'>
      <td className='name'>hud_radar_square_with_scoreboard</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>If set, the radar will toggle to square when the scoreboard is visible</td>
    </tr>
    <tr className='added' id='hud_radar_table_rotate'>
      <td className='name'>hud_radar_table_rotate</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Rotating the angle of the square radar when the scoreboard is visible</td>
    </tr>
    <tr className='added' id='hud_radar_takeshot'>
      <td className='name'>hud_radar_takeshot</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Auto take a map shot and script file for HUD radar for non-exists maps</td>
    </tr>
    <tr className='added' id='hud_radar_takeshot_quality'>
      <td className='name'>hud_radar_takeshot_quality</td>
      <td className='def'>65</td>
      <td className='min'>10</td>
      <td className='max'>100</td>
      <td className='desc'>Set the percentage of quality of the created map image</td>
    </tr>
    <tr className='added' id='hud_radar_x'>
      <td className='name'>hud_radar_x</td>
      <td className='def'>16</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>X-coord position of the HUD radar</td>
    </tr>
    <tr className='added' id='hud_radar_y'>
      <td className='name'>hud_radar_y</td>
      <td className='def'>16</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Y-coord position of the HUD radar</td>
    </tr>
    <tr>
      <td colSpan='5' className='name'><a href='#cl_radartype'>cl_radartype</a></td>
    </tr>
  </tbody>
</table>

#### HUD : Death Notice
<table className='docs-table'>
  <thead><tr><th>Name</th><th>Default</th><th>Min</th><th>Max</th><th>Description</th></tr></thead>
  <tbody>
    <tr className='added' id='hud_deathnotice_draw'>
      <td className='name'>hud_deathnotice_draw</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Draws death notice panels</td>
    </tr>
    <tr className='added' id='hud_deathnotice_fade'>
      <td className='name'>hud_deathnotice_fade</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Enables the fade animation of the death notice panel with smooth fade-in and fade-out effects</td>
    </tr>
    <tr className='added' id='hud_deathnotice_gap'>
      <td className='name'>hud_deathnotice_gap</td>
      <td className='def'>4</td>
      <td className='min'>0</td>
      <td className='max'>-</td>
      <td className='desc'>Sets the gap between the panels of death notice</td>
    </tr>
    <tr className='added' id='hud_deathnotice_iconcolor'>
      <td className='name'>hud_deathnotice_iconcolor</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Override RGBA colors for icons into killfeed</td>
    </tr>
    <tr className='added' id='hud_deathnotice_iconscale'>
      <td className='name'>hud_deathnotice_iconscale</td>
      <td className='def'>0.85</td>
      <td className='min'>0.5</td>
      <td className='max'>5</td>
      <td className='desc'>Sets the death icons scale. Valid values are 0.5 to 5.0</td>
    </tr>
    <tr className='added' id='hud_deathnotice_iconshd'>
      <td className='name'>hud_deathnotice_iconshd</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Sets high definition kill icons 0 = Low quality (CLASSIC LEGACY), 1 = High quality</td>
    </tr>
    <tr className='added' id='hud_deathnotice_killrarity'>
      <td className='name'>hud_deathnotice_killrarity</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Draws rarity of kill icons in killfeed 0 = headshot icon only, 1 = Draws icons for all rarity of kill</td>
    </tr>
    <tr className='added' id='hud_deathnotice_max'>
      <td className='name'>hud_deathnotice_max</td>
      <td className='def'>6</td>
      <td className='min'>1</td>
      <td className='max'>-</td>
      <td className='desc'>How many death notice panels to draw</td>
    </tr>
    <tr className='added' id='hud_deathnotice_outlinethickness'>
      <td className='name'>hud_deathnotice_outlinethickness</td>
      <td className='def'>3</td>
      <td className='min'>-20</td>
      <td className='max'>20</td>
      <td className='desc'>Set how thick you want your killfeed outline to draw</td>
    </tr>
    <tr className='added' id='hud_deathnotice_panel_pos'>
      <td className='name'>hud_deathnotice_panel_pos</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Sets the position of the death notice panel. 0 = Left side, 1 = Right side</td>
    </tr>
    <tr className='added' id='hud_deathnotice_style'>
      <td className='name'>hud_deathnotice_style</td>
      <td className='def'>3</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Sets the style in death notice<br/>0 `DEFAULT`<br/>1 `CSO STYLE`<br/>2 `CSGO STYLE OUTLINE ONLY LOCAL PLAYER`<br/>3 `CSGO STYLE OUTLINE AND BACKGROUND`</td>
    </tr>
    <tr id='hud_deathnotice_time'>
      <td className='name'>hud_deathnotice_time</td>
      <td className='def'>6</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Sets the amount of seconds death notices are shown</td>
    </tr>
  </tbody>
</table>

#### HUD : Scoreboard
<table className='docs-table'>
  <thead><tr><th>Name</th><th>Default</th><th>Min</th><th>Max</th><th>Description</th></tr></thead>
  <tbody>
    <tr id='scoreboard_shortheaders'>
      <td className='name'>scoreboard_shortheaders</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>-</td>
    </tr>
    <tr id='scoreboard_showavatars'>
      <td className='name'>scoreboard_showavatars</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>-</td>
    </tr>
    <tr id='scoreboard_showhealth'>
      <td className='name'>scoreboard_showhealth</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>-</td>
    </tr>
    <tr id='scoreboard_showmoney'>
      <td className='name'>scoreboard_showmoney</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>-</td>
    </tr>
    <tr className='added' id='scoreboard_players_linespacing'>
      <td className='name'>scoreboard_players_linespacing</td>
      <td className='def'>22</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>-</td>
    </tr>
    <tr className='added' id='scoreboard_players_linespacing_fixed'>
      <td className='name'>scoreboard_players_linespacing_fixed</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>-</td>
    </tr>
    <tr className='added' id='scoreboard_showspeaker'>
      <td className='name'>scoreboard_showspeaker</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>-</td>
    </tr>
  </tbody>
</table>

#### HUD : Spectator
<table className='docs-table'>
  <thead><tr><th>Name</th><th>Default</th><th>Min</th><th>Max</th><th>Description</th></tr></thead>
  <tbody>
    <tr id='spec_autodirector'>
      <td className='name'>spec_autodirector</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Auto-director automatically moves the camera depending of where the player is looking at</td>
    </tr>
    <tr id='spec_drawcone'>
      <td className='name'>spec_drawcone</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Toggles 90-degree orange view cone on overview mode that show where you are looking in spec mode</td>
    </tr>
    <tr id='spec_drawnames'>
      <td className='name'>spec_drawnames</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Toggles drawing names on overview mode</td>
    </tr>
    <tr id='spec_drawstatus'>
      <td className='name'>spec_drawstatus</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Toggles the game informations (current map, game time, ...) which show at the top right of your screen in spectator mode</td>
    </tr>
    <tr id='spec_movespeedkey'>
      <td className='name'>spec_movespeedkey</td>
      <td className='def'>3.55</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>-</td>
    </tr>
    <tr id='spec_pip'>
      <td className='name'>spec_pip</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Enables the picture-in-picture spectator modes</td>
    </tr>
    <tr id='spec_scoreboard'>
      <td className='name'>spec_scoreboard</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Toggles the scoreboard on/off</td>
    </tr>
  </tbody>
</table>

#### HUD : Chat / Text
<table className='docs-table'>
  <thead><tr><th>Name</th><th>Default</th><th>Min</th><th>Max</th><th>Description</th></tr></thead>
  <tbody>
    <tr className='added' id='hud_message'>
      <td className='name'>hud_message</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Show HUD messages 0 = Disabled, 1 = Display all messages, 2 = Only HUD messages, 3 = Only DHUD messages</td>
    </tr>
    <tr className='added' id='hud_headname'>
      <td className='name'>hud_headname</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Show name above the player of a friend-teammate or tracked player using with 'trackplayer'</td>
    </tr>
    <tr id='hud_saytext'>
      <td className='name'>hud_saytext</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Toggle the display of in-game chat<br/>0 `Disable HUD in-game chat`<br/>1 `Display HUD in-game chat and chat input position on top`<br/>2 `Display HUD in-game chat and chat input position under chat text`</td>
    </tr>
    <tr className='added' id='hud_saytext_fade'>
      <td className='name'>hud_saytext_fade</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Enables the fade animation of the say text lines with smooth fade-in and fade-out effects</td>
    </tr>
    <tr className='added' id='hud_saytext_gap'>
      <td className='name'>hud_saytext_gap</td>
      <td className='def'>1</td>
      <td className='min'>0</td>
      <td className='max'>-</td>
      <td className='desc'>Sets the gap between the lines of say text</td>
    </tr>
    <tr className='added' id='hud_saytext_max'>
      <td className='name'>hud_saytext_max</td>
      <td className='def'>5</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Set the max number of in-game chat messages to be shown</td>
    </tr>
    <tr id='hud_saytext_time'>
      <td className='name'>hud_saytext_time</td>
      <td className='def'>5</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Set the duration (in seconds) for which in-game chat messages are displayed</td>
    </tr>
  </tbody>
</table>

#### HUD : Speedometer
<table className='docs-table'>
  <thead><tr><th>Name</th><th>Default</th><th>Min</th><th>Max</th><th>Description</th></tr></thead>
  <tbody>
    <tr className='added' id='hud_speedometer'>
      <td className='name'>hud_speedometer</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Enable HUD speedometer</td>
    </tr>
    <tr className='added' id='hud_speedometer_stayjump'>
      <td className='name'>hud_speedometer_stayjump</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Do not update speed while in the air</td>
    </tr>
    <tr className='added' id='hud_speedometer_x'>
      <td className='name'>hud_speedometer_x</td>
      <td className='def'>-1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>X-coord position of the HUD speedometer (-1 centerize)</td>
    </tr>
    <tr className='added' id='hud_speedometer_y'>
      <td className='name'>hud_speedometer_y</td>
      <td className='def'>-1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Y-coord position of the HUD speedometer</td>
    </tr>
  </tbody>
</table>

## Movement
<table className='docs-table'>
  <thead><tr><th>Name</th><th>Default</th><th>Min</th><th>Max</th><th>Description</th></tr></thead>
  <tbody>
    <tr id='cl_upspeed'>
      <td className='name'>cl_upspeed</td>
      <td className='def'>320</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>-</td>
    </tr>
    <tr id='cl_sidespeed'>
      <td className='name'>cl_sidespeed</td>
      <td className='def'>400</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>-</td>
    </tr>
    <tr id='cl_backspeed'>
      <td className='name'>cl_backspeed</td>
      <td className='def'>400</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>-</td>
    </tr>
    <tr id='cl_pitchspeed'>
      <td className='name'>cl_pitchspeed</td>
      <td className='def'>225</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>-</td>
    </tr>
    <tr id='cl_anglespeedkey'>
      <td className='name'>cl_anglespeedkey</td>
      <td className='def'>0.67</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>-</td>
    </tr>
    <tr id='cl_forwardspeed'>
      <td className='name'>cl_forwardspeed</td>
      <td className='def'>400</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>-</td>
    </tr>
    <tr id='cl_movespeedkey'>
      <td className='name'>cl_movespeedkey</td>
      <td className='def'>0.52</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>-</td>
    </tr>
    <tr id='cl_yawspeed'>
      <td className='name'>cl_yawspeed</td>
      <td className='def'>210</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>-</td>
    </tr>
  </tbody>
</table>

## Mouse Control
<table className='docs-table'>
  <thead><tr><th>Name</th><th>Default</th><th>Min</th><th>Max</th><th>Description</th></tr></thead>
  <tbody>
    <tr id='sensitivity'>
      <td className='name'>sensitivity</td>
      <td className='def'>3</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>-</td>
    </tr>
    <tr id='m_rawinput'>
      <td className='name'>m_rawinput</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Use Raw Input for mouse input</td>
    </tr>
    <tr id='m_customaccel'>
      <td className='name'>m_customaccel</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>-</td>
    </tr>
    <tr id='m_customaccel_exponent'>
      <td className='name'>m_customaccel_exponent</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>-</td>
    </tr>
    <tr id='m_customaccel_max'>
      <td className='name'>m_customaccel_max</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>-</td>
    </tr>
    <tr id='m_customaccel_scale'>
      <td className='name'>m_customaccel_scale</td>
      <td className='def'>0.04</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>-</td>
    </tr>
    <tr id='m_filter'>
      <td className='name'>m_filter</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>-</td>
    </tr>
    <tr id='m_forward'>
      <td className='name'>m_forward</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>-</td>
    </tr>
    <tr id='m_mousethread_sleep'>
      <td className='name'>m_mousethread_sleep</td>
      <td className='def'>10</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>-</td>
    </tr>
    <tr id='m_noforcemaccel'>
      <td className='name'>m_noforcemaccel</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>-</td>
    </tr>
    <tr id='m_noforcemparms'>
      <td className='name'>m_noforcemparms</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>-</td>
    </tr>
    <tr id='m_noforcemspd'>
      <td className='name'>m_noforcemspd</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>-</td>
    </tr>
    <tr id='m_pitch'>
      <td className='name'>m_pitch</td>
      <td className='def'>0.022</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>-</td>
    </tr>
    <tr id='m_side'>
      <td className='name'>m_side</td>
      <td className='def'>0.8</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>-</td>
    </tr>
    <tr id='m_yaw'>
      <td className='name'>m_yaw</td>
      <td className='def'>0.022</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>-</td>
    </tr>
    <tr id='zoom_sensitivity_ratio'>
      <td className='name'>zoom_sensitivity_ratio</td>
      <td className='def'>1.2</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Additional mouse sensitivity scale factor applied when FOV is zoomed in</td>
    </tr>
    <tr id='cl_mousegrab'>
      <td className='name'>cl_mousegrab</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>-</td>
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
      <td className='desc'>-</td>
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
      <td className='desc'>-</td>
    </tr>
    <tr id='lookspring'>
      <td className='name'>lookspring</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>-</td>
    </tr>
    <tr id='lookstrafe'>
      <td className='name'>lookstrafe</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>-</td>
    </tr>
    <tr id='joyadvanced'>
      <td className='name'>joyadvanced</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>-</td>
    </tr>
    <tr id='joyadvaxisr'>
      <td className='name'>joyadvaxisr</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>-</td>
    </tr>
    <tr id='joyadvaxisu'>
      <td className='name'>joyadvaxisu</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>-</td>
    </tr>
    <tr id='joyadvaxisv'>
      <td className='name'>joyadvaxisv</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>-</td>
    </tr>
    <tr id='joyadvaxisx'>
      <td className='name'>joyadvaxisx</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>-</td>
    </tr>
    <tr id='joyadvaxisy'>
      <td className='name'>joyadvaxisy</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>-</td>
    </tr>
    <tr id='joyadvaxisz'>
      <td className='name'>joyadvaxisz</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>-</td>
    </tr>
    <tr id='joyforwardsensitivity'>
      <td className='name'>joyforwardsensitivity</td>
      <td className='def'>-1.0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>-</td>
    </tr>
    <tr id='joyforwardthreshold'>
      <td className='name'>joyforwardthreshold</td>
      <td className='def'>0.15</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>-</td>
    </tr>
    <tr id='joyname'>
      <td className='name'>joyname</td>
      <td className='def'>joystick</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>-</td>
    </tr>
    <tr id='joypitchsensitivity'>
      <td className='name'>joypitchsensitivity</td>
      <td className='def'>1.0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>-</td>
    </tr>
    <tr id='joypitchthreshold'>
      <td className='name'>joypitchthreshold</td>
      <td className='def'>0.15</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>-</td>
    </tr>
    <tr id='joysidesensitivity'>
      <td className='name'>joysidesensitivity</td>
      <td className='def'>-1.0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>-</td>
    </tr>
    <tr id='joysidethreshold'>
      <td className='name'>joysidethreshold</td>
      <td className='def'>0.15</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>-</td>
    </tr>
    <tr id='joystick'>
      <td className='name'>joystick</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>-</td>
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
      <td className='desc'>-</td>
    </tr>
    <tr id='joyyawthreshold'>
      <td className='name'>joyyawthreshold</td>
      <td className='def'>0.15</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>-</td>
    </tr>
  </tbody>
</table>

## Camera
<table className='docs-table'>
  <thead><tr><th>Name</th><th>Default</th><th>Min</th><th>Max</th><th>Description</th></tr></thead>
  <tbody>
    <tr id='c_maxdistance'>
      <td className='name'>c_maxdistance</td>
      <td className='def'>200.0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>-</td>
    </tr>
    <tr id='c_maxpitch'>
      <td className='name'>c_maxpitch</td>
      <td className='def'>90.0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>-</td>
    </tr>
    <tr id='c_maxyaw'>
      <td className='name'>c_maxyaw</td>
      <td className='def'>135.0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>-</td>
    </tr>
    <tr id='c_mindistance'>
      <td className='name'>c_mindistance</td>
      <td className='def'>30.0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>-</td>
    </tr>
    <tr id='c_minpitch'>
      <td className='name'>c_minpitch</td>
      <td className='def'>0.0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>-</td>
    </tr>
    <tr id='c_minyaw'>
      <td className='name'>c_minyaw</td>
      <td className='def'>-135.0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>-</td>
    </tr>
    <tr id='cam_command'>
      <td className='name'>cam_command</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>-</td>
    </tr>
    <tr id='cam_idealdist'>
      <td className='name'>cam_idealdist</td>
      <td className='def'>64</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>-</td>
    </tr>
    <tr id='cam_idealpitch'>
      <td className='name'>cam_idealpitch</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>-</td>
    </tr>
    <tr id='cam_idealyaw'>
      <td className='name'>cam_idealyaw</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>-</td>
    </tr>
    <tr id='cam_snapto'>
      <td className='name'>cam_snapto</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>-</td>
    </tr>
    <tr id='chase_active'>
      <td className='name'>chase_active</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>-</td>
    </tr>
    <tr id='chase_back'>
      <td className='name'>chase_back</td>
      <td className='def'>100</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>-</td>
    </tr>
    <tr id='chase_right'>
      <td className='name'>chase_right</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>-</td>
    </tr>
    <tr id='chase_up'>
      <td className='name'>chase_up</td>
      <td className='def'>16</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>-</td>
    </tr>
    <tr id='cl_chaseback'>
      <td className='name'>cl_chaseback</td>
      <td className='def'>15</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>-</td>
    </tr>
    <tr id='cl_chasedist'>
      <td className='name'>cl_chasedist</td>
      <td className='def'>112</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>-</td>
    </tr>
    <tr id='cl_chaseright'>
      <td className='name'>cl_chaseright</td>
      <td className='def'>20</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>-</td>
    </tr>
    <tr id='cl_chaseup'>
      <td className='name'>cl_chaseup</td>
      <td className='def'>5</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>-</td>
    </tr>
    <tr className='added' id='cl_camera_follow_bone_index'>
      <td className='name'>cl_camera_follow_bone_index</td>
      <td className='def'>-2</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Index of the bone to follow. -2 = disabled, -1 = root bone, 0+ is bone index</td>
    </tr>
  </tbody>
</table>

## Viewmodel
<table className='docs-table'>
  <thead><tr><th>Name</th><th>Default</th><th>Min</th><th>Max</th><th>Description</th></tr></thead>
  <tbody>
    <tr id='viewsize'>
      <td className='name'>viewsize</td>
      <td className='def'>120</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>-</td>
    </tr>
    <tr className='added' id='viewmodel_fov'>
      <td className='name'>viewmodel_fov</td>
      <td className='def'>90</td>
      <td className='min'>1</td>
      <td className='max'>179</td>
      <td className='desc'>Viewmodel FOV</td>
    </tr>
    <tr className='added' id='viewmodel_lag_scale'>
      <td className='name'>viewmodel_lag_scale</td>
      <td className='def'>0</td>
      <td className='min'>0</td>
      <td className='max'>100</td>
      <td className='desc'>Sets the scale of the viewmodel sway</td>
    </tr>
    <tr className='added' id='viewmodel_lag_scale_crouch'>
      <td className='name'>viewmodel_lag_scale_crouch</td>
      <td className='def'>0</td>
      <td className='min'>0</td>
      <td className='max'>10</td>
      <td className='desc'>Sets the scale of the viewmodel sway when crouching</td>
    </tr>
    <tr className='added' id='viewmodel_lag_scale_jump'>
      <td className='name'>viewmodel_lag_scale_jump</td>
      <td className='def'>0</td>
      <td className='min'>0</td>
      <td className='max'>5</td>
      <td className='desc'>Sets the scale of the viewmodel sway when jumping</td>
    </tr>
    <tr className='added' id='viewmodel_lag_scale_land'>
      <td className='name'>viewmodel_lag_scale_land</td>
      <td className='def'>0</td>
      <td className='min'>0</td>
      <td className='max'>10</td>
      <td className='desc'>Sets the scale of the viewmodel sway when landing</td>
    </tr>
    <tr className='added' id='viewmodel_lag_speed'>
      <td className='name'>viewmodel_lag_speed</td>
      <td className='def'>8</td>
      <td className='min'>0</td>
      <td className='max'>100</td>
      <td className='desc'>Sets the speed of the viewmodel sway</td>
    </tr>
    <tr className='added' id='viewmodel_offset_x'>
      <td className='name'>viewmodel_offset_x</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Viewmodel's x offset</td>
    </tr>
    <tr className='added' id='viewmodel_offset_y'>
      <td className='name'>viewmodel_offset_y</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Viewmodel's y offset</td>
    </tr>
    <tr className='added' id='viewmodel_offset_z'>
      <td className='name'>viewmodel_offset_z</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Viewmodel's z offset</td>
    </tr>
    <tr className='added' id='viewmodel_retract'>
      <td className='name'>viewmodel_retract</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Enables weapon view model retraction near obstacles</td>
    </tr>
    <tr className='added' id='viewmodel_rollangle'>
      <td className='name'>viewmodel_rollangle</td>
      <td className='def'>0</td>
      <td className='min'>0</td>
      <td className='max'>20</td>
      <td className='desc'>Scale of the viewmodel roll angle when strafing</td>
    </tr>
    <tr className='added' id='viewmodel_shift'>
      <td className='name'>viewmodel_shift</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Disable viewmodel shifts to the when looking up and down 0 = Disable, 1 = Enable (Default), 2 = Auto adjust</td>
    </tr>
    <tr className='added' id='viewmodel_shift_left_amt'>
      <td className='name'>viewmodel_shift_left_amt</td>
      <td className='def'>1.5</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>The amount the viewmodel shifts to the left when shooting accuracy increases</td>
    </tr>
    <tr className='added' id='viewmodel_shift_right_amt'>
      <td className='name'>viewmodel_shift_right_amt</td>
      <td className='def'>0.75</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>The amount the viewmodel shifts to the right when shooting accuracy decreases</td>
    </tr>
    <tr id='scr_ofsx'>
      <td className='name'>scr_ofsx</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>-</td>
    </tr>
    <tr id='scr_ofsy'>
      <td className='name'>scr_ofsy</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>-</td>
    </tr>
    <tr id='scr_ofsz'>
      <td className='name'>scr_ofsz</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>-</td>
    </tr>
    <tr className='added' id='camera_movement_bone'>
      <td className='name'>camera_movement_bone</td>
      <td className='def'>-1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Sets the specific bone of the viewmodel as view camera</td>
    </tr>
    <tr className='added' id='camera_movement_interp'>
      <td className='name'>camera_movement_interp</td>
      <td className='def'>0.1</td>
      <td className='min'>0.1</td>
      <td className='max'>-</td>
      <td className='desc'>Smooths out camera movement when switching weapons 0 = Disable</td>
    </tr>
    <tr className='added' id='camera_movement_scale'>
      <td className='name'>camera_movement_scale</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Camera movement scale. 0 = Disable</td>
    </tr>
    <tr id='cl_bob'>
      <td className='name'>cl_bob</td>
      <td className='def'>0.01</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>-</td>
    </tr>
    <tr className='added' id='cl_bob_lower_amt'>
      <td className='name'>cl_bob_lower_amt</td>
      <td className='def'>6</td>
      <td className='min'>0</td>
      <td className='max'>30</td>
      <td className='desc'>The amount the viewmodel lowers when running</td>
    </tr>
    <tr className='added' id='cl_bob_sniper'>
      <td className='name'>cl_bob_sniper</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Enables sniper weapon's bobbing</td>
    </tr>
    <tr className='added' id='cl_bobamt_lat'>
      <td className='name'>cl_bobamt_lat</td>
      <td className='def'>0.4</td>
      <td className='min'>0</td>
      <td className='max'>2</td>
      <td className='desc'>The amount the viewmodel moves side to side when running</td>
    </tr>
    <tr className='added' id='cl_bobamt_vert'>
      <td className='name'>cl_bobamt_vert</td>
      <td className='def'>0.15</td>
      <td className='min'>0</td>
      <td className='max'>2</td>
      <td className='desc'>The amount the viewmodel moves up and down when running</td>
    </tr>
    <tr id='cl_bobcycle'>
      <td className='name'>cl_bobcycle</td>
      <td className='def'>0.8</td>
      <td className='min'>0.1</td>
      <td className='max'>2</td>
      <td className='desc'>The frequency at which the viewmodel bobs</td>
    </tr>
    <tr className='added' id='cl_bobstyle'>
      <td className='name'>cl_bobstyle</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Set the bobbing style 0 = Default, 1 = Legacy, 2 = CSGO bob</td>
    </tr>
    <tr id='cl_bobup'>
      <td className='name'>cl_bobup</td>
      <td className='def'>0.5</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>-</td>
    </tr>
    <tr id='cl_vsmoothing'>
      <td className='name'>cl_vsmoothing</td>
      <td className='def'>0.05</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>-</td>
    </tr>
    <tr className='added' id='cl_minviewmodel'>
      <td className='name'>cl_minviewmodel</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Uses default model for view entity model</td>
    </tr>
    <tr id='cl_righthand'>
      <td className='name'>cl_righthand</td>
      <td className='def'>1</td>
      <td className='min'>-1</td>
      <td className='max'>1</td>
      <td className='desc'>Use right-handed view models</td>
    </tr>
    <tr className='added' id='cl_shieldweapon_handpreference'>
      <td className='name'>cl_shieldweapon_handpreference</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Use prefer hand side determined by cl_righthand for shield weapon holding view model</td>
    </tr>
    <tr>
      <td colSpan='5' className='name'><a href='#r_drawviewmodel'>r_drawviewmodel</a></td>
    </tr>
  </tbody>
</table>

## Visual Effects
<table className='docs-table'>
  <thead><tr><th>Name</th><th>Default</th><th>Min</th><th>Max</th><th>Description</th></tr></thead>
  <tbody>
    <tr id='cl_weather'>
      <td className='name'>cl_weather</td>
      <td className='def'>1</td>
      <td className='min'>0</td>
      <td className='max'>3</td>
      <td className='desc'>Enables weather effects rain drops or snowflakes<br/>`0` Disable<br/>`1` Low intensity<br/>`2` Middle intensity<br/>`3` High intensity</td>
    </tr>
    <tr className='added' id='cl_smokegren_color'>
      <td className='name'>cl_smokegren_color</td>
      <td className='def color'><div style={{background: `rgba(175,175,175,0.85)`, color:`var(--ifm-font-color-base)`}}>175 175 175</div></td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Color used to draw the gas puffs</td>
    </tr>
    <tr className='added' id='cl_smokegren_debug'>
      <td className='name'>cl_smokegren_debug</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Enable debug smoke grenade visualization<br/>`0` Disable<br/>`1` Visualize smoke clouds radius<br/>`2` Visualize smoke particles<br/>`3` Visualize closest position of the line blocked by the intersecting smoke volume</td>
    </tr>
    <tr className='added' id='cl_smokegren_full_density'>
      <td className='name'>cl_smokegren_full_density</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Enables full density gas puff from smoke grenades</td>
    </tr>
    <tr className='added' id='cl_corpsefall'>
      <td className='name'>cl_corpsefall</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Enables smooth corpse fall underground after cl_corpsestay waiting time has expired, otherwise corpses fade smoothly</td>
    </tr>
    <tr id='cl_corpsestay'>
      <td className='name'>cl_corpsestay</td>
      <td className='def'>600</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Time in seconds before dead bodies disappears from the ground</td>
    </tr>
    <tr id='violence_ablood'>
      <td className='name'>violence_ablood</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Draw alien blood</td>
    </tr>
    <tr id='violence_agibs'>
      <td className='name'>violence_agibs</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Show alien gib entities</td>
    </tr>
    <tr id='violence_hblood'>
      <td className='name'>violence_hblood</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Draw human blood</td>
    </tr>
    <tr id='violence_hgibs'>
      <td className='name'>violence_hgibs</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Show human gib entities</td>
    </tr>
    <tr className='added' id='violence_vfxblood'>
      <td className='name'>violence_vfxblood</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Enables blood visual effects</td>
    </tr>
    <tr className='added' id='violence_vfxblood_bigdrops'>
      <td className='name'>violence_vfxblood_bigdrops</td>
      <td className='def'>3</td>
      <td className='min'>0</td>
      <td className='max'>-</td>
      <td className='desc'>Sets number big blood drops (only from explosive damage or headshot)</td>
    </tr>
    <tr className='added' id='violence_vfxblood_burst_ratio'>
      <td className='name'>violence_vfxblood_burst_ratio</td>
      <td className='def'>4</td>
      <td className='min'>0</td>
      <td className='max'>-</td>
      <td className='desc'>Sets blood multiplier when body explodes (multiply blood effect of splat, small, mist, drops)</td>
    </tr>
    <tr className='added' id='violence_vfxblood_color'>
      <td className='name'>violence_vfxblood_color</td>
      <td className='def color'><div style={{background: `rgba(145,15,15,0.85)`, color:`#eee`}}>145 15 15</div></td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Sets color for blood visual effects</td>
    </tr>
    <tr className='added' id='violence_vfxblood_decal_lightness'>
      <td className='name'>violence_vfxblood_decal_lightness</td>
      <td className='def'>0.35</td>
      <td className='min'>0.1</td>
      <td className='max'>100</td>
      <td className='desc'>Sets the lightness factor for blood decals. (Lower values make the blood appear darker)</td>
    </tr>
    <tr className='added' id='violence_vfxblood_drops'>
      <td className='name'>violence_vfxblood_drops</td>
      <td className='def'>1.5</td>
      <td className='min'>0</td>
      <td className='max'>-</td>
      <td className='desc'>Sets number blood drops</td>
    </tr>
    <tr className='added' id='violence_vfxblood_gibs'>
      <td className='name'>violence_vfxblood_gibs</td>
      <td className='def'>7</td>
      <td className='min'>0</td>
      <td className='max'>-</td>
      <td className='desc'>Sets number human gibs to be scattered (only from explosive damage or headshot) (able to shot blood decal on surface)</td>
    </tr>
    <tr className='added' id='violence_vfxblood_grenade'>
      <td className='name'>violence_vfxblood_grenade</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Enables body is explodes by a grenade or bomb kill</td>
    </tr>
    <tr className='added' id='violence_vfxblood_headshot'>
      <td className='name'>violence_vfxblood_headshot</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Enables body is explodes on headshot kill</td>
    </tr>
    <tr className='added' id='violence_vfxblood_mist'>
      <td className='name'>violence_vfxblood_mist</td>
      <td className='def'>0.75</td>
      <td className='min'>0</td>
      <td className='max'>-</td>
      <td className='desc'>Sets number blood mist effects</td>
    </tr>
    <tr className='added' id='violence_vfxblood_small'>
      <td className='name'>violence_vfxblood_small</td>
      <td className='def'>3</td>
      <td className='min'>0</td>
      <td className='max'>-</td>
      <td className='desc'>Sets number small blood particles (able to shot blood decal on surface)</td>
    </tr>
    <tr className='added' id='violence_vfxblood_splat'>
      <td className='name'>violence_vfxblood_splat</td>
      <td className='def'>1.5</td>
      <td className='min'>0</td>
      <td className='max'>-</td>
      <td className='desc'>Sets number blood splats</td>
    </tr>
    <tr id='traceralpha'>
      <td className='name'>traceralpha</td>
      <td className='def'>0.5</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>-</td>
    </tr>
    <tr id='tracerblue'>
      <td className='name'>tracerblue</td>
      <td className='def'>0.4</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>-</td>
    </tr>
    <tr id='tracergreen'>
      <td className='name'>tracergreen</td>
      <td className='def'>0.8</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>-</td>
    </tr>
    <tr id='tracerlength'>
      <td className='name'>tracerlength</td>
      <td className='def'>0.8</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>-</td>
    </tr>
    <tr id='traceroffset'>
      <td className='name'>traceroffset</td>
      <td className='def'>30</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>-</td>
    </tr>
    <tr id='tracerred'>
      <td className='name'>tracerred</td>
      <td className='def'>0.8</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>-</td>
    </tr>
    <tr id='tracerspeed'>
      <td className='name'>tracerspeed</td>
      <td className='def'>6000</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>-</td>
    </tr>
    <tr className='added' id='cl_gunsmoke'>
      <td className='name'>cl_gunsmoke</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Enables render smoke effects from the gun barrel on weapon firing</td>
    </tr>
    <tr className='added' id='cl_guntracer'>
      <td className='name'>cl_guntracer</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Enables render tracer bullets from the gun barrel on weapon firing</td>
    </tr>
    <tr className='added' id='cl_guntracer_color'>
      <td className='name'>cl_guntracer_color</td>
      <td className='def color'><div style={{background: `rgba(255,255,255,0.85)`, color:`#111`}}>255 255 255</div></td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Sets color for visual effects of tracer bullets</td>
    </tr>
    <tr className='added' id='cl_guntracer_offset'>
      <td className='name'>cl_guntracer_offset</td>
      <td className='def'>48</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Offset distance from the gun barrel where tracer bullets start</td>
    </tr>
    <tr className='added' id='cl_guntracer_speed'>
      <td className='name'>cl_guntracer_speed</td>
      <td className='def'>3650</td>
      <td className='min'>0</td>
      <td className='max'>-</td>
      <td className='desc'>Speed of tracer bullets in units</td>
    </tr>
    <tr className='added' id='cl_guntracer_speed_maxmul'>
      <td className='name'>cl_guntracer_speed_maxmul</td>
      <td className='def'>1.25</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Maximum speed multiplier for tracer bullets based on distance</td>
    </tr>
    <tr id='cl_fog_color'>
      <td className='name'>cl_fog_color</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Adjust the fog color</td>
    </tr>
    <tr id='cl_fog_density'>
      <td className='name'>cl_fog_density</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Sets the density of the fog</td>
    </tr>
    <tr className='added' id='cl_fog_skybox'>
      <td className='name'>cl_fog_skybox</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Enables the fog spread into the sky</td>
    </tr>
    <tr id='egon_amplitude'>
      <td className='name'>egon_amplitude</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>-</td>
    </tr>
    <tr id='max_shells'>
      <td className='name'>max_shells</td>
      <td className='def'>120</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Max number of shells which can go out of all other player's weapon's at one time</td>
    </tr>
    <tr id='max_smokepuffs'>
      <td className='name'>max_smokepuffs</td>
      <td className='def'>120</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Max number of smoke puffs that go out the smoke grenades and your bullets (on the wall) at one time</td>
    </tr>
    <tr>
      <td colSpan='5' className='name'><a href='#r_decals'>r_decals</a></td>
    </tr>
  </tbody>
</table>

## Video
<table className='docs-table'>
  <thead><tr><th>Name</th><th>Default</th><th>Min</th><th>Max</th><th>Description</th></tr></thead>
  <tbody>
    <tr id='fps_max'>
      <td className='name'>fps_max</td>
      <td className='def'>100</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Frame rate limiter</td>
    </tr>
    <tr id='fps_override'>
      <td className='name'>fps_override</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>-</td>
    </tr>
    <tr className='modified' id='cl_showfps'>
      <td className='name'>cl_showfps</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Draw current FPS at top of screen</td>
    </tr>
    <tr id='default_fov'>
      <td className='name'>default_fov</td>
      <td className='def'>90</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>-</td>
    </tr>
    <tr className='added' id='widescreen'>
      <td className='name'>widescreen</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>-</td>
    </tr>
    <tr className='added' id='stretchaspect'>
      <td className='name'>stretchaspect</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>-</td>
    </tr>
    <tr className='added' id='engine_no_focus_sleep'>
      <td className='name'>engine_no_focus_sleep</td>
      <td className='def'>20</td>
      <td className='min'>0</td>
      <td className='max'>-</td>
      <td className='desc'>Sleep time when not focus. Set to 0 to not sleep even if app doesn't have focus</td>
    </tr>
    <tr className='added' id='engine_no_render_minimized'>
      <td className='name'>engine_no_render_minimized</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>No update screen rendering when game is minimized. (Low CPU and GPU power consumption)</td>
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
      <td className='desc'>Sets the texture gamma amount</td>
    </tr>
    <tr id='lightgamma'>
      <td className='name'>lightgamma</td>
      <td className='def'>2.5</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Sets the in game lightgamma</td>
    </tr>
    <tr id='lambert'>
      <td className='name'>lambert</td>
      <td className='def'>1.5</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>-</td>
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
      <td className='desc'>-</td>
    </tr>
    <tr className='added' id='gl_use_shaders'>
      <td className='name'>gl_use_shaders</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Enables the use of overbright using shaders</td>
    </tr>
    <tr className='added' id='gl_reduce_shader_changes'>
      <td className='name'>gl_reduce_shader_changes</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>-</td>
    </tr>
    <tr className='modified' id='gl_vsync'>
      <td className='name'>gl_vsync</td>
      <td className='def'>1</td>
      <td className='min'>-1</td>
      <td className='max'>1</td>
      <td className='desc'>Synchronize buffer swaps with vertical blanking interval<br/>&nbsp;`0` Disabled<br/>&nbsp;`1` Standard vsync<br/>`-1` Adaptive vsync</td>
    </tr>
    <tr id='gl_affinemodels'>
      <td className='name'>gl_affinemodels</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>-</td>
    </tr>
    <tr id='gl_alphamin'>
      <td className='name'>gl_alphamin</td>
      <td className='def'>0.25</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>-</td>
    </tr>
    <tr id='gl_ansio'>
      <td className='name'>gl_ansio</td>
      <td className='def'>16</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>-</td>
    </tr>
    <tr id='gl_clear'>
      <td className='name'>gl_clear</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>-</td>
    </tr>
    <tr id='gl_cull'>
      <td className='name'>gl_cull</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>-</td>
    </tr>
    <tr id='gl_dither'>
      <td className='name'>gl_dither</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>-</td>
    </tr>
    <tr id='gl_envmapsize'>
      <td className='name'>gl_envmapsize</td>
      <td className='def'>256</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>-</td>
    </tr>
    <tr id='gl_flashblend'>
      <td className='name'>gl_flashblend</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>-</td>
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
      <td className='desc'>-</td>
    </tr>
    <tr id='gl_lightholes'>
      <td className='name'>gl_lightholes</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>-</td>
    </tr>
    <tr className='added' id='gl_lowlatency'>
      <td className='name'>gl_lowlatency</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Enables low input latency mode (0 = DISABLED, 1 = ENABLED)</td>
    </tr>
    <tr className='added' id='gl_lowlatency_debugoutput'>
      <td className='name'>gl_lowlatency_debugoutput</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Controls debug output for low latency mode (0 = DISABLED, 1 = ENABLED)</td>
    </tr>
    <tr className='added' id='gl_lowlatency_maxslop_ms'>
      <td className='name'>gl_lowlatency_maxslop_ms</td>
      <td className='def'>5</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Set upper threshold latency slop in milliseconds for low latency mode</td>
    </tr>
    <tr className='added' id='gl_lowlatency_minslop_ms'>
      <td className='name'>gl_lowlatency_minslop_ms</td>
      <td className='def'>2</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Set lower threshold latency slop in milliseconds for low latency mode</td>
    </tr>
    <tr id='gl_max_size'>
      <td className='name'>gl_max_size</td>
      <td className='def'>512</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>-</td>
    </tr>
    <tr id='gl_monolights'>
      <td className='name'>gl_monolights</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>-</td>
    </tr>
    <tr className='added' id='gl_msaa'>
      <td className='name'>gl_msaa</td>
      <td className='def'>2</td>
      <td className='min'>0</td>
      <td className='max'>4</td>
      <td className='desc'>Enable multisampling anti-aliasing mode<br/>`0` Disable<br/>`1` 2x MSAA<br/>`2` 4x MSAA<br/>`3` 8x MSAA (recommended max)<br/>`4` 16x MSAA (mostly useless, only for testing)<br/><br/>Higher values increase smoothing but also blur edges and the entire screen, reducing overall image quality, since In GoldSrc, MSAA smooths everything, not just geometry edges. `8x` MSAA is the practical limit — going beyond this (`16x`) gives almost no visual benefit but significantly hurts performance</td>
    </tr>
    <tr className='modified' id='gl_overbright'>
      <td className='name'>gl_overbright</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>-</td>
    </tr>
    <tr id='gl_palette_tex'>
      <td className='name'>gl_palette_tex</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>-</td>
    </tr>
    <tr id='gl_picmip'>
      <td className='name'>gl_picmip</td>
      <td className='def'>0</td>
      <td className='min'>0</td>
      <td className='max'>31</td>
      <td className='desc'>-</td>
    </tr>
    <tr id='gl_polyoffset'>
      <td className='name'>gl_polyoffset</td>
      <td className='def'>4</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>-</td>
    </tr>
    <tr id='gl_round_down'>
      <td className='name'>gl_round_down</td>
      <td className='def'>3</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>-</td>
    </tr>
    <tr id='gl_spriteblend'>
      <td className='name'>gl_spriteblend</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>-</td>
    </tr>
    <tr className='modified' id='gl_texturemode'>
      <td className='name'>gl_texturemode</td>
      <td className='def'>GL_LINEAR_MIPMAP_LINEAR</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Determines mode for hardware rendering<br/>GL_NEAREST<br/>GL_LINEAR<br/>GL_NEAREST_MIPMAP_NEAREST<br/>GL_LINEAR_MIPMAP_NEAREST<br/>GL_NEAREST_MIPMAP_LINEAR<br/>GL_LINEAR_MIPMAP_LINEAR</td>
    </tr>
    <tr id='gl_wateramp'>
      <td className='name'>gl_wateramp</td>
      <td className='def'>0.3</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>-</td>
    </tr>
    <tr id='gl_watersides'>
      <td className='name'>gl_watersides</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>-</td>
    </tr>
    <tr id='gl_wireframe'>
      <td className='name'>gl_wireframe</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>-</td>
    </tr>
    <tr id='gl_zmax'>
      <td className='name'>gl_zmax</td>
      <td className='def'>4096</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>-</td>
    </tr>
    <tr id='r_bmodelinterp'>
      <td className='name'>r_bmodelinterp</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>-</td>
    </tr>
    <tr id='r_cachestudio'>
      <td className='name'>r_cachestudio</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>-</td>
    </tr>
    <tr id='r_cullsequencebox'>
      <td className='name'>r_cullsequencebox</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>-</td>
    </tr>
    <tr id='r_decals'>
      <td className='name'>r_decals</td>
      <td className='def'>4096</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>-</td>
    </tr>
    <tr id='r_detailtextures'>
      <td className='name'>r_detailtextures</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Enables detailed textures</td>
    </tr>
    <tr id='r_drawentities'>
      <td className='name'>r_drawentities</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>-</td>
    </tr>
    <tr id='r_drawviewmodel'>
      <td className='name'>r_drawviewmodel</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>-</td>
    </tr>
    <tr id='r_dynamic'>
      <td className='name'>r_dynamic</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>-</td>
    </tr>
    <tr id='r_fullbright'>
      <td className='name'>r_fullbright</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>-</td>
    </tr>
    <tr id='r_glowshellfreq'>
      <td className='name'>r_glowshellfreq</td>
      <td className='def'>2.2</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>-</td>
    </tr>
    <tr id='r_lightmap'>
      <td className='name'>r_lightmap</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>-</td>
    </tr>
    <tr className='added' id='r_lockcull'>
      <td className='name'>r_lockcull</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Lock frustrum area at current point (cull test)</td>
    </tr>
    <tr className='added' id='r_lockpvs'>
      <td className='name'>r_lockpvs</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Lock the PVS so you can fly around and inspect what is being drawn (pvs test)</td>
    </tr>
    <tr className='added' id='r_maxbeams'>
      <td className='name'>r_maxbeams</td>
      <td className='def'>128</td>
      <td className='min'>0</td>
      <td className='max'>4096</td>
      <td className='desc'>Maximum number of beams to visible</td>
    </tr>
    <tr id='r_mirroralpha'>
      <td className='name'>r_mirroralpha</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>-</td>
    </tr>
    <tr id='r_mmx'>
      <td className='name'>r_mmx</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>-</td>
    </tr>
    <tr id='r_norefresh'>
      <td className='name'>r_norefresh</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>-</td>
    </tr>
    <tr id='r_novis'>
      <td className='name'>r_novis</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>-</td>
    </tr>
    <tr className='added' id='r_prefertexturefiltering'>
      <td className='name'>r_prefertexturefiltering</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Enables texture filtering</td>
    </tr>
    <tr id='r_shadows'>
      <td className='name'>r_shadows</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>-</td>
    </tr>
    <tr className='added' id='r_showinfo'>
      <td className='name'>r_showinfo</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Show render/movement info</td>
    </tr>
    <tr className='added' id='r_showparticles'>
      <td className='name'>r_showparticles</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Show stats for particles and beams usage</td>
    </tr>
    <tr id='r_speeds'>
      <td className='name'>r_speeds</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>-</td>
    </tr>
    <tr id='r_traceglow'>
      <td className='name'>r_traceglow</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>-</td>
    </tr>
    <tr id='r_wadtextures'>
      <td className='name'>r_wadtextures</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>-</td>
    </tr>
    <tr id='r_wateralpha'>
      <td className='name'>r_wateralpha</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>-</td>
    </tr>
    <tr id='cl_himodels'>
      <td className='name'>cl_himodels</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Enables the High Quality models. This only works in Half-Life</td>
    </tr>
    <tr id='cl_min_ct'>
      <td className='name'>cl_min_ct</td>
      <td className='def'>2</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Controls which CT model is used when cl_minmodels is set to 1. 2 = GIGN, 4 = GSG9, 7 = SAS, 9 = URBAN</td>
    </tr>
    <tr id='cl_min_t'>
      <td className='name'>cl_min_t</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Controls which Terrorist model is used when cl_minmodels is set to 1. 1 = LEET, 5 = GUERILLA, 6 = ARCTIC, 8 = TERROR</td>
    </tr>
    <tr className='modified' id='cl_minmodels'>
      <td className='name'>cl_minmodels</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Uses one player model for each team</td>
    </tr>
    <tr id='cl_shadows'>
      <td className='name'>cl_shadows</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Enables player shadows (small black circle on bottom)</td>
    </tr>
    <tr id='cl_waterdist'>
      <td className='name'>cl_waterdist</td>
      <td className='def'>4</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>-</td>
    </tr>
    <tr id='fastsprites'>
      <td className='name'>fastsprites</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Sets quality of smokepuffs<br/>0 `very slowly`, `high quality`<br/>1 `normal`, `medium quality`<br/>2 `very fast`, `low quality`<br/>Set to lower quality to improve performance</td>
    </tr>
  </tbody>
</table>

## Audio/Voice
<table className='docs-table'>
  <thead><tr><th>Name</th><th>Default</th><th>Min</th><th>Max</th><th>Description</th></tr></thead>
  <tbody>
    <tr id='volume'>
      <td className='name'>volume</td>
      <td className='def'>0.7</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>-</td>
    </tr>
    <tr id='voice_autogain'>
      <td className='name'>voice_autogain</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>-</td>
    </tr>
    <tr id='voice_avggain'>
      <td className='name'>voice_avggain</td>
      <td className='def'>0.5</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>-</td>
    </tr>
    <tr id='voice_clientdebug'>
      <td className='name'>voice_clientdebug</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>-</td>
    </tr>
    <tr id='voice_dsound'>
      <td className='name'>voice_dsound</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>-</td>
    </tr>
    <tr id='voice_enable'>
      <td className='name'>voice_enable</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Toggle voice transmit and receive</td>
    </tr>
    <tr id='voice_fadeouttime'>
      <td className='name'>voice_fadeouttime</td>
      <td className='def'>0.1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>-</td>
    </tr>
    <tr id='voice_fakeloss'>
      <td className='name'>voice_fakeloss</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>-</td>
    </tr>
    <tr id='voice_forcemicrecord'>
      <td className='name'>voice_forcemicrecord</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>-</td>
    </tr>
    <tr id='voice_inputfromfile'>
      <td className='name'>voice_inputfromfile</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>-</td>
    </tr>
    <tr id='voice_loopback'>
      <td className='name'>voice_loopback</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>-</td>
    </tr>
    <tr id='voice_maxgain'>
      <td className='name'>voice_maxgain</td>
      <td className='def'>5</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>-</td>
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
      <td className='desc'>-</td>
    </tr>
    <tr id='voice_outputdevice'>
      <td className='name'>voice_outputdevice</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>TODO:<br/>0 `Miles`<br/>1 `XAudio2`</td>
    </tr>
    <tr id='voice_outputfile'>
      <td className='name'>voice_outputfile</td>
      <td className='def'>-</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Causes output from voice system to be written out to the specified file</td>
    </tr>
    <tr id='voice_overdrive'>
      <td className='name'>voice_overdrive</td>
      <td className='def'>2</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>When voice is on, all other sounds are decreased by this factor</td>
    </tr>
    <tr id='voice_overdrivefadetime'>
      <td className='name'>voice_overdrivefadetime</td>
      <td className='def'>0.4</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>How long it takes to fade in and out of the voice overdrive</td>
    </tr>
    <tr id='voice_preprocess'>
      <td className='name'>voice_preprocess</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Enables voice cleanup on incoming microphone data</td>
    </tr>
    <tr id='voice_profile'>
      <td className='name'>voice_profile</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>-</td>
    </tr>
    <tr id='voice_quality'>
      <td className='name'>voice_quality</td>
      <td className='def'>6</td>
      <td className='min'>2</td>
      <td className='max'>6</td>
      <td className='desc'>Sets audio quality<br/>`2` Speex<br/>`3` Raw<br/>`4` Silk<br/>`5` Opus<br/>`6` Opus PLC</td>
    </tr>
    <tr id='voice_recordtofile'>
      <td className='name'>voice_recordtofile</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>-</td>
    </tr>
    <tr id='voice_scale'>
      <td className='name'>voice_scale</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Overall volume of voice over IP</td>
    </tr>
    <tr id='voice_showchannels'>
      <td className='name'>voice_showchannels</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>-</td>
    </tr>
    <tr id='voice_showincoming'>
      <td className='name'>voice_showincoming</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>-</td>
    </tr>
    <tr id='mic_autogain'>
      <td className='name'>mic_autogain</td>
      <td className='def'>16000</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Automatic gain control level for microphone input</td>
    </tr>
    <tr id='mic_inputfile'>
      <td className='name'>mic_inputfile</td>
      <td className='def'>-</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Causes voice data to be read from the specified file instead of from the microphone</td>
    </tr>
    <tr id='mic_outputfile'>
      <td className='name'>mic_outputfile</td>
      <td className='def'>-</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Causes microphone data to be written out to the specified file</td>
    </tr>
    <tr id='room_delay'>
      <td className='name'>room_delay</td>
      <td className='def'>0.0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>-</td>
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
      <td className='desc'>-</td>
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
      <td className='desc'>-</td>
    </tr>
    <tr id='room_refl'>
      <td className='name'>room_refl</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>-</td>
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
      <td className='desc'>-</td>
    </tr>
    <tr id='room_type'>
      <td className='name'>room_type</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>-</td>
    </tr>
    <tr id='ambient_fade'>
      <td className='name'>ambient_fade</td>
      <td className='def'>100</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>-</td>
    </tr>
    <tr id='ambient_level'>
      <td className='name'>ambient_level</td>
      <td className='def'>0.3</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>-</td>
    </tr>
    <tr id='nosound'>
      <td className='name'>nosound</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>-</td>
    </tr>
    <tr id='suitvolume'>
      <td className='name'>suitvolume</td>
      <td className='def'>0.25</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>-</td>
    </tr>
    <tr id='bgmvolume'>
      <td className='name'>bgmvolume</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>-</td>
    </tr>
    <tr id='hisound'>
      <td className='name'>hisound</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Toggles high quality sound</td>
    </tr>
    <tr id='waterroom_type'>
      <td className='name'>waterroom_type</td>
      <td className='def'>14</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>-</td>
    </tr>
    <tr id='MP3FadeTime'>
      <td className='name'>MP3FadeTime</td>
      <td className='def'>2.0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>-</td>
    </tr>
    <tr id='MP3Volume'>
      <td className='name'>MP3Volume</td>
      <td className='def'>0.8</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>-</td>
    </tr>
    <tr id='snd_mixahead'>
      <td className='name'>snd_mixahead</td>
      <td className='def'>0.1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>-</td>
    </tr>
    <tr id='snd_mute_losefocus'>
      <td className='name'>snd_mute_losefocus</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Silence the audio while the game window is in the background</td>
    </tr>
    <tr id='snd_noextraupdate'>
      <td className='name'>snd_noextraupdate</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>-</td>
    </tr>
    <tr id='snd_show'>
      <td className='name'>snd_show</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>-</td>
    </tr>
    <tr id='speak_enabled'>
      <td className='name'>speak_enabled</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>-</td>
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
      <td className='desc'>-</td>
    </tr>
  </tbody>
</table>

## Network
<table className='docs-table'>
  <thead><tr><th>Name</th><th>Default</th><th>Min</th><th>Max</th><th>Description</th></tr></thead>
  <tbody>
    <tr id='ip'>
      <td className='name'>ip</td>
      <td className='def'>localhost</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Overrides IP for multihomed hosts</td>
    </tr>
    <tr id='port'>
      <td className='name'>port</td>
      <td className='def'>27015</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>-</td>
    </tr>
    <tr id='hostport'>
      <td className='name'>hostport</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Host game server port</td>
    </tr>
    <tr id='clientport'>
      <td className='name'>clientport</td>
      <td className='def'>27005</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>-</td>
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
      <td className='desc'>Lag all incoming network data (including loopback) by this many milliseconds</td>
    </tr>
    <tr id='fakeloss'>
      <td className='name'>fakeloss</td>
      <td className='def'>0.0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Simulate packet loss as a percentage (negative means drop 1/n packets)</td>
    </tr>
    <tr id='net_log'>
      <td className='name'>net_log</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>-</td>
    </tr>
    <tr id='net_address'>
      <td className='name'>net_address</td>
      <td className='def'>-</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>-</td>
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
      <td className='desc'>Show dropped packets in console</td>
    </tr>
    <tr id='net_showpackets'>
      <td className='name'>net_showpackets</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Dump packet summary to console</td>
    </tr>
    <tr id='max_queries_sec'>
      <td className='name'>max_queries_sec</td>
      <td className='def'>3.0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>-</td>
    </tr>
    <tr id='max_queries_sec_global'>
      <td className='name'>max_queries_sec_global</td>
      <td className='def'>30</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>-</td>
    </tr>
    <tr id='max_queries_window'>
      <td className='name'>max_queries_window</td>
      <td className='def'>60</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>-</td>
    </tr>
    <tr id='rcon_address'>
      <td className='name'>rcon_address</td>
      <td className='def'>-</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Address of remote server if sending unconnected rcon commands</td>
    </tr>
    <tr id='rcon_password'>
      <td className='name'>rcon_password</td>
      <td className='def'>-</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>-</td>
    </tr>
    <tr id='rcon_port'>
      <td className='name'>rcon_port</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Port of remote server if sending unconnected rcon commands</td>
    </tr>
  </tbody>
</table>

### Network : Client
<table className='docs-table'>
  <thead><tr><th>Name</th><th>Default</th><th>Min</th><th>Max</th><th>Description</th></tr></thead>
  <tbody>
    <tr id='rate'>
      <td className='name'>rate</td>
      <td className='def'>100000</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Max bytes/sec the host can receive data</td>
    </tr>
    <tr id='cl_lw'>
      <td className='name'>cl_lw</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Enables client-side weapon firing prediction</td>
    </tr>
    <tr id='cl_lc'>
      <td className='name'>cl_lc</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Enables server-side hit computation and lag compensation</td>
    </tr>
    <tr id='cl_lm'>
      <td className='name'>cl_lm</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Enables client-side lag movement prediction</td>
    </tr>
    <tr id='cl_cmdbackup'>
      <td className='name'>cl_cmdbackup</td>
      <td className='def'>2</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>For each command packet, how many additional history commands are sent ( helps in case of packet loss )</td>
    </tr>
    <tr id='cl_cmdrate'>
      <td className='name'>cl_cmdrate</td>
      <td className='def'>64</td>
      <td className='min'>10</td>
      <td className='max'>-</td>
      <td className='desc'>Max number of command packets sent to server per second</td>
    </tr>
    <tr id='cl_updaterate'>
      <td className='name'>cl_updaterate</td>
      <td className='def'>64</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Number of packets per second of updates you are requesting from the server</td>
    </tr>
    <tr id='cl_fixtimerate'>
      <td className='name'>cl_fixtimerate</td>
      <td className='def'>7.5</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Number of msec per frame of 'clock drift' fixup</td>
    </tr>
    <tr id='cl_clockreset'>
      <td className='name'>cl_clockreset</td>
      <td className='def'>0.1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>If the client clock drifts more than cl_clockreset from the server, we just slam it to use the server and reset the delta to 0 usually occurs at signon to server and maybe if there is a lot of packet loss</td>
    </tr>
    <tr id='cl_timeout'>
      <td className='name'>cl_timeout</td>
      <td className='def'>60</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>After this many seconds without receiving a packet from the server, the client will disconnect itself</td>
    </tr>
    <tr id='cl_resend'>
      <td className='name'>cl_resend</td>
      <td className='def'>6.0</td>
      <td className='min'>1.5</td>
      <td className='max'>20</td>
      <td className='desc'>Delay in seconds before the client will resend the 'connect' attempt</td>
    </tr>
    <tr id='cl_showmessages'>
      <td className='name'>cl_showmessages</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Dump network traffic to debug console</td>
    </tr>
    <tr id='cl_shownet'>
      <td className='name'>cl_shownet</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Show network traffic ( 0, 1 or 2 )</td>
    </tr>
    <tr id='cl_showerror'>
      <td className='name'>cl_showerror</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>-</td>
    </tr>
    <tr id='cl_showevents'>
      <td className='name'>cl_showevents</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Enables showing on events like weapon firing, all events are listed in cstrike/events/</td>
    </tr>
    <tr id='cl_nodelta'>
      <td className='name'>cl_nodelta</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>-</td>
    </tr>
    <tr id='cl_nosmooth'>
      <td className='name'>cl_nosmooth</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>-</td>
    </tr>
    <tr className='modified' id='cl_smoothtime'>
      <td className='name'>cl_smoothtime</td>
      <td className='def'>0.1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Smooth client's view after prediction error over this many seconds</td>
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
      <td className='desc'>Info debugging into console about models bein loaded(weapon models). Is required `developer 1` and `sv_instancedbaseline 1` server side</td>
    </tr>
    <tr id='cl_slist'>
      <td className='name'>cl_slist</td>
      <td className='def'>10.0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Number of seconds to wait for server ping responses when checking for server on your lan</td>
    </tr>
    <tr className='added' id='cl_pmove_version'>
      <td className='name'>cl_pmove_version</td>
      <td className='def'>1.0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Sets the version of player movement code for client-server sync prediction</td>
    </tr>
    <tr id='cl_fixmodelinterpolationartifacts'>
      <td className='name'>cl_fixmodelinterpolationartifacts</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Fixed interpolation artifacts when animated models of non-player are moved by other entities</td>
    </tr>
    <tr className='modified' id='net_graph'>
      <td className='name'>net_graph</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Draw the network usage graph</td>
    </tr>
    <tr className='added' id='net_graphalpha'>
      <td className='name'>net_graphalpha</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>-</td>
    </tr>
    <tr className='added' id='net_graphheight'>
      <td className='name'>net_graphheight</td>
      <td className='def'>64</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Height of netgraph panel</td>
    </tr>
    <tr className='added' id='net_graphheightfixed'>
      <td className='name'>net_graphheightfixed</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>-</td>
    </tr>
    <tr className='added' id='net_graphmsecs'>
      <td className='name'>net_graphmsecs</td>
      <td className='def'>400</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>The latency graph represents this many milliseconds</td>
    </tr>
    <tr className='modified' id='net_graphpos'>
      <td className='name'>net_graphpos</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>-</td>
    </tr>
    <tr className='added' id='net_graphproportionalfont'>
      <td className='name'>net_graphproportionalfont</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Determines whether netgraph font is proportional or not</td>
    </tr>
    <tr className='added' id='net_graphshowinterp'>
      <td className='name'>net_graphshowinterp</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Draw the interpolation graph</td>
    </tr>
    <tr className='added' id='net_graphshowlatency'>
      <td className='name'>net_graphshowlatency</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Draw the ping/packet loss graph</td>
    </tr>
    <tr className='added' id='net_graphsolid'>
      <td className='name'>net_graphsolid</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>-</td>
    </tr>
    <tr className='added' id='net_graphtext'>
      <td className='name'>net_graphtext</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Draw text fields</td>
    </tr>
    <tr className='modified' id='net_graphwidth'>
      <td className='name'>net_graphwidth</td>
      <td className='def'>250</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>-</td>
    </tr>
    <tr className='modified' id='net_scale'>
      <td className='name'>net_scale</td>
      <td className='def'>3</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>-</td>
    </tr>
    <tr id='ex_interp'>
      <td className='name'>ex_interp</td>
      <td className='def'>0.1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Interpolate object positions starting this many seconds in past</td>
    </tr>
    <tr>
      <td colSpan='5' className='name'><a href='#r_bmodelinterp'>r_bmodelinterp</a></td>
    </tr>
  </tbody>
</table>

#### Network : Client : Connection
<table className='docs-table'>
  <thead><tr><th>Name</th><th>Default</th><th>Min</th><th>Max</th><th>Description</th></tr></thead>
  <tbody>
    <tr id='cl_dlmax'>
      <td className='name'>cl_dlmax</td>
      <td className='def'>1024</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Max bytes the fragment to download from the server of player decals while playing the game</td>
    </tr>
    <tr className='added' id='cl_download_delay_ms'>
      <td className='name'>cl_download_delay_ms</td>
      <td className='def'>0</td>
      <td className='min'>0</td>
      <td className='max'>10000</td>
      <td className='desc'>Delay time in milliseconds between downloads of HTTP files</td>
    </tr>
    <tr className='added' id='cl_download_demo_resources'>
      <td className='name'>cl_download_demo_resources</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Enables the download of missing resources during demo playback</td>
    </tr>
    <tr className='added' id='cl_download_enable_gzip'>
      <td className='name'>cl_download_enable_gzip</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Enable support Gzip compression for fastdl</td>
    </tr>
    <tr className='added' id='cl_download_ingame'>
      <td className='name'>cl_download_ingame</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Enables the download of players custom sprays while playing</td>
    </tr>
    <tr className='added' id='cl_download_multi'>
      <td className='name'>cl_download_multi</td>
      <td className='def'>5</td>
      <td className='min'>1</td>
      <td className='max'>20</td>
      <td className='desc'>Max simultaneous transfers</td>
    </tr>
    <tr className='added' id='cl_download_retries'>
      <td className='name'>cl_download_retries</td>
      <td className='def'>3</td>
      <td className='min'>0</td>
      <td className='max'>10</td>
      <td className='desc'>Sets max download retry attempts</td>
    </tr>
    <tr className='added' id='cl_filterstuffcmd'>
      <td className='name'>cl_filterstuffcmd</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Sets filter level to check of commands the game server can execute on your client<br/>0 `Disabled` (No restrictions)<br/>1 `Soft level` (few commands can be executed)<br/>2 `Strict level` (execution not allowed)</td>
    </tr>
    <tr className='added' id='cl_filterstuffcmd_notify'>
      <td className='name'>cl_filterstuffcmd_notify</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Enables notifications about blocked of commands the game server can execute on your client</td>
    </tr>
    <tr className='added' id='cl_allow_demorecord'>
      <td className='name'>cl_allow_demorecord</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Allows the server to autostart recording demo</td>
    </tr>
    <tr className='added' id='cl_allow_redirect'>
      <td className='name'>cl_allow_redirect</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Allow redirects at the request of the server</td>
    </tr>
    <tr id='cl_allowdownload'>
      <td className='name'>cl_allowdownload</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Allow maps, models, sounds, sprites, textures download when connecting to a server</td>
    </tr>
    <tr id='cl_allowupload'>
      <td className='name'>cl_allowupload</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Allow the upload of your custom spray when connecting to a server</td>
    </tr>
  </tbody>
</table>

## Server
<table className='docs-table'>
  <thead><tr><th>Name</th><th>Default</th><th>Min</th><th>Max</th><th>Description</th></tr></thead>
  <tbody>
    <tr id='hostname'>
      <td className='name'>hostname</td>
      <td className='def'>Half-Life</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>-</td>
    </tr>
    <tr id='coop'>
      <td className='name'>coop</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Cooperative play</td>
    </tr>
    <tr id='skill'>
      <td className='name'>skill</td>
      <td className='def'>1</td>
      <td className='min'>1</td>
      <td className='max'>3</td>
      <td className='desc'>Game skill level (1-3)</td>
    </tr>
    <tr id='deathmatch'>
      <td className='name'>deathmatch</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Running a deathmatch server</td>
    </tr>
    <tr id='pausable'>
      <td className='name'>pausable</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>-</td>
    </tr>
    <tr id='host_framerate'>
      <td className='name'>host_framerate</td>
      <td className='def'>0.0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Set to lock per-frame time elapse</td>
    </tr>
    <tr id='host_killtime'>
      <td className='name'>host_killtime</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>-</td>
    </tr>
    <tr id='host_limitlocal'>
      <td className='name'>host_limitlocal</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Apply cl_cmdrate and cl_updaterate to loopback connection</td>
    </tr>
    <tr id='host_profile'>
      <td className='name'>host_profile</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>-</td>
    </tr>
    <tr id='host_speeds'>
      <td className='name'>host_speeds</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Show general system running times</td>
    </tr>
    <tr id='host_timescale'>
      <td className='name'>host_timescale</td>
      <td className='def'>1</td>
      <td className='min'>0.0625</td>
      <td className='max'>16</td>
      <td className='desc'>Prescale the clock by this amount</td>
    </tr>
    <tr id='sv_accelerate'>
      <td className='name'>sv_accelerate</td>
      <td className='def'>10</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>-</td>
    </tr>
    <tr id='sv_aim'>
      <td className='name'>sv_aim</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>-</td>
    </tr>
    <tr id='sv_airaccelerate'>
      <td className='name'>sv_airaccelerate</td>
      <td className='def'>10</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>-</td>
    </tr>
    <tr id='sv_allow_dlfile'>
      <td className='name'>sv_allow_dlfile</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>-</td>
    </tr>
    <tr id='sv_allowdownload'>
      <td className='name'>sv_allowdownload</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>-</td>
    </tr>
    <tr id='sv_allowupload'>
      <td className='name'>sv_allowupload</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>-</td>
    </tr>
    <tr id='sv_bounce'>
      <td className='name'>sv_bounce</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>-</td>
    </tr>
    <tr id='sv_cheats'>
      <td className='name'>sv_cheats</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>This command enables the use of cheat cvars, like impulse 101 (16000 money) or impulse 102 (blood)</td>
    </tr>
    <tr id='sv_clienttrace'>
      <td className='name'>sv_clienttrace</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>-</td>
    </tr>
    <tr id='sv_contact'>
      <td className='name'>sv_contact</td>
      <td className='def'>-</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>-</td>
    </tr>
    <tr id='sv_downloadurl'>
      <td className='name'>sv_downloadurl</td>
      <td className='def'>-</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>-</td>
    </tr>
    <tr id='sv_enableoldqueries'>
      <td className='name'>sv_enableoldqueries</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>-</td>
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
      <td className='desc'>Use bz2 compression on game packets</td>
    </tr>
    <tr id='sv_filetransfermaxsize'>
      <td className='name'>sv_filetransfermaxsize</td>
      <td className='def'>10485760</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>-</td>
    </tr>
    <tr id='sv_filterban'>
      <td className='name'>sv_filterban</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>-</td>
    </tr>
    <tr id='sv_friction'>
      <td className='name'>sv_friction</td>
      <td className='def'>4</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>-</td>
    </tr>
    <tr id='sv_gravity'>
      <td className='name'>sv_gravity</td>
      <td className='def'>800</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>-</td>
    </tr>
    <tr id='sv_instancedbaseline'>
      <td className='name'>sv_instancedbaseline</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>-</td>
    </tr>
    <tr id='sv_lan'>
      <td className='name'>sv_lan</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>-</td>
    </tr>
    <tr id='sv_lan_rate'>
      <td className='name'>sv_lan_rate</td>
      <td className='def'>20000.0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>-</td>
    </tr>
    <tr id='sv_language'>
      <td className='name'>sv_language</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>-</td>
    </tr>
    <tr id='sv_log_onefile'>
      <td className='name'>sv_log_onefile</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>-</td>
    </tr>
    <tr id='sv_log_singleplayer'>
      <td className='name'>sv_log_singleplayer</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>-</td>
    </tr>
    <tr id='sv_logbans'>
      <td className='name'>sv_logbans</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>-</td>
    </tr>
    <tr id='sv_logblocks'>
      <td className='name'>sv_logblocks</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>-</td>
    </tr>
    <tr id='sv_logrelay'>
      <td className='name'>sv_logrelay</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>-</td>
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
      <td className='desc'>-</td>
    </tr>
    <tr id='sv_maxspeed'>
      <td className='name'>sv_maxspeed</td>
      <td className='def'>320</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>-</td>
    </tr>
    <tr id='sv_maxunlag'>
      <td className='name'>sv_maxunlag</td>
      <td className='def'>0.5</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Max time (in seconds) server will rewind to compensate for lag. Higher values increase compensation but may cause unrealistic hitreg for high-ping players</td>
    </tr>
    <tr id='sv_maxupdaterate'>
      <td className='name'>sv_maxupdaterate</td>
      <td className='def'>30.0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>-</td>
    </tr>
    <tr id='sv_maxvelocity'>
      <td className='name'>sv_maxvelocity</td>
      <td className='def'>2000</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>-</td>
    </tr>
    <tr id='sv_minrate'>
      <td className='name'>sv_minrate</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>-</td>
    </tr>
    <tr id='sv_minupdaterate'>
      <td className='name'>sv_minupdaterate</td>
      <td className='def'>10.0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>-</td>
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
      <td className='desc'>-</td>
    </tr>
    <tr id='sv_proxies'>
      <td className='name'>sv_proxies</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>-</td>
    </tr>
    <tr id='sv_rcon_banpenalty'>
      <td className='name'>sv_rcon_banpenalty</td>
      <td className='def'>0</td>
      <td className='min'>0</td>
      <td className='max'>-</td>
      <td className='desc'>Number of minutes to ban users who fail rcon authentication</td>
    </tr>
    <tr id='sv_rcon_maxfailures'>
      <td className='name'>sv_rcon_maxfailures</td>
      <td className='def'>10</td>
      <td className='min'>1</td>
      <td className='max'>20</td>
      <td className='desc'>Max number of times a user can fail rcon authentication before being banned</td>
    </tr>
    <tr id='sv_rcon_minfailures'>
      <td className='name'>sv_rcon_minfailures</td>
      <td className='def'>5</td>
      <td className='min'>1</td>
      <td className='max'>20</td>
      <td className='desc'>Number of times a user can fail rcon authentication in sv_rcon_minfailuretime before being banned</td>
    </tr>
    <tr id='sv_rcon_minfailuretime'>
      <td className='name'>sv_rcon_minfailuretime</td>
      <td className='def'>30</td>
      <td className='min'>1</td>
      <td className='max'>-</td>
      <td className='desc'>Number of seconds to track failed rcon authentications</td>
    </tr>
    <tr className='added' id='sv_rcon_whitelist_address'>
      <td className='name'>sv_rcon_whitelist_address</td>
      <td className='def'>-</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>When set, rcon failed authentications will never ban this address, e.g. `127.0.0.1`</td>
    </tr>
    <tr id='sv_rollangle'>
      <td className='name'>sv_rollangle</td>
      <td className='def'>0.0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>-</td>
    </tr>
    <tr id='sv_rollspeed'>
      <td className='name'>sv_rollspeed</td>
      <td className='def'>200</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>-</td>
    </tr>
    <tr id='sv_send_logos'>
      <td className='name'>sv_send_logos</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>-</td>
    </tr>
    <tr id='sv_send_resources'>
      <td className='name'>sv_send_resources</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>-</td>
    </tr>
    <tr id='sv_skycolor_b'>
      <td className='name'>sv_skycolor_b</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>-</td>
    </tr>
    <tr id='sv_skycolor_g'>
      <td className='name'>sv_skycolor_g</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>-</td>
    </tr>
    <tr id='sv_skycolor_r'>
      <td className='name'>sv_skycolor_r</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>-</td>
    </tr>
    <tr id='sv_skyname'>
      <td className='name'>sv_skyname</td>
      <td className='def'>desert</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>-</td>
    </tr>
    <tr id='sv_skyvec_x'>
      <td className='name'>sv_skyvec_x</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>-</td>
    </tr>
    <tr id='sv_skyvec_y'>
      <td className='name'>sv_skyvec_y</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>-</td>
    </tr>
    <tr id='sv_skyvec_z'>
      <td className='name'>sv_skyvec_z</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>-</td>
    </tr>
    <tr id='sv_spectatormaxspeed'>
      <td className='name'>sv_spectatormaxspeed</td>
      <td className='def'>500</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>-</td>
    </tr>
    <tr id='sv_stats'>
      <td className='name'>sv_stats</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Collect CPU usage stats</td>
    </tr>
    <tr id='sv_stepsize'>
      <td className='name'>sv_stepsize</td>
      <td className='def'>18</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>-</td>
    </tr>
    <tr id='sv_stopspeed'>
      <td className='name'>sv_stopspeed</td>
      <td className='def'>100</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>-</td>
    </tr>
    <tr id='sv_timeout'>
      <td className='name'>sv_timeout</td>
      <td className='def'>60</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>-</td>
    </tr>
    <tr id='sv_unlag'>
      <td className='name'>sv_unlag</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Enables or disables lag compensation. Set to 1 to allow the server to correct player positions based on their latency</td>
    </tr>
    <tr id='sv_unlagpush'>
      <td className='name'>sv_unlagpush</td>
      <td className='def'>0.0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Adjusts the compensation timing. Positive values add extra delay, while negative values reduce it. Useful for fine-tuning accuracy based on server conditions</td>
    </tr>
    <tr id='sv_unlagsamples'>
      <td className='name'>sv_unlagsamples</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Sets the number of frames used in lag compensation. Higher values can improve accuracy, but may increase CPU load on the server</td>
    </tr>
    <tr id='sv_uploadmax'>
      <td className='name'>sv_uploadmax</td>
      <td className='def'>0.5</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>-</td>
    </tr>
    <tr className='added' id='sv_use_entity_file'>
      <td className='name'>sv_use_entity_file</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>-</td>
    </tr>
    <tr className='added' id='sv_userinfo_transmitted_fields'>
      <td className='name'>sv_userinfo_transmitted_fields</td>
      <td className='def'>-</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>-</td>
    </tr>
    <tr id='sv_version'>
      <td className='name'>sv_version</td>
      <td className='def'>1.1.2.7,48,10517</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>-</td>
    </tr>
    <tr id='sv_visiblemaxplayers'>
      <td className='name'>sv_visiblemaxplayers</td>
      <td className='def'>-1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>-</td>
    </tr>
    <tr id='sv_voicecodec'>
      <td className='name'>sv_voicecodec</td>
      <td className='def'>voice_speex</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>-</td>
    </tr>
    <tr id='sv_voiceenable'>
      <td className='name'>sv_voiceenable</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>-</td>
    </tr>
    <tr id='sv_voicequality'>
      <td className='name'>sv_voicequality</td>
      <td className='def'>3</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>-</td>
    </tr>
    <tr id='sv_wateraccelerate'>
      <td className='name'>sv_wateraccelerate</td>
      <td className='def'>10</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>-</td>
    </tr>
    <tr id='sv_wateramp'>
      <td className='name'>sv_wateramp</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>-</td>
    </tr>
    <tr id='sv_waterfriction'>
      <td className='name'>sv_waterfriction</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>-</td>
    </tr>
    <tr id='sv_zmax'>
      <td className='name'>sv_zmax</td>
      <td className='def'>4096</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>-</td>
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
      <td className='desc'>-</td>
    </tr>
    <tr id='sys_ticrate'>
      <td className='name'>sys_ticrate</td>
      <td className='def'>100.0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>-</td>
    </tr>
    <tr id='syserror_logfile'>
      <td className='name'>syserror_logfile</td>
      <td className='def'>crashdumps\sys_error.log</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>-</td>
    </tr>
    <tr id='servercfgfile'>
      <td className='name'>servercfgfile</td>
      <td className='def'>server.cfg</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>-</td>
    </tr>
    <tr id='mapchangecfgfile'>
      <td className='name'>mapchangecfgfile</td>
      <td className='def'>-</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>-</td>
    </tr>
    <tr id='mapcyclefile'>
      <td className='name'>mapcyclefile</td>
      <td className='def'>mapcycle.txt</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>This sets the file which will be used for the map cycle</td>
    </tr>
    <tr id='listipcfgfile'>
      <td className='name'>listipcfgfile</td>
      <td className='def'>listip.cfg</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>-</td>
    </tr>
    <tr id='lservercfgfile'>
      <td className='name'>lservercfgfile</td>
      <td className='def'>listenserver.cfg</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>-</td>
    </tr>
    <tr id='bannedcfgfile'>
      <td className='name'>bannedcfgfile</td>
      <td className='def'>banned.cfg</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>-</td>
    </tr>
    <tr id='motdfile'>
      <td className='name'>motdfile</td>
      <td className='def'>motd.txt</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Sets the file to use as message of the day (welcome screen)</td>
    </tr>
    <tr id='hpk_maxsize'>
      <td className='name'>hpk_maxsize</td>
      <td className='def'>4</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>-</td>
    </tr>
    <tr id='HostMap'>
      <td className='name'>HostMap</td>
      <td className='def'>C1A0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>-</td>
    </tr>
    <tr id='mp_consistency'>
      <td className='name'>mp_consistency</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>-</td>
    </tr>
    <tr id='mp_decals'>
      <td className='name'>mp_decals</td>
      <td className='def'>300</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>-</td>
    </tr>
    <tr id='sp_decals'>
      <td className='name'>sp_decals</td>
      <td className='def'>4096</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>-</td>
    </tr>
    <tr id='mp_footsteps'>
      <td className='name'>mp_footsteps</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>-</td>
    </tr>
    <tr id='mp_logecho'>
      <td className='name'>mp_logecho</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>-</td>
    </tr>
    <tr id='mp_logfile'>
      <td className='name'>mp_logfile</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>-</td>
    </tr>
  </tbody>
</table>

## Window & Input Settings
<table className='docs-table'>
  <thead><tr><th>Name</th><th>Default</th><th>Min</th><th>Max</th><th>Description</th></tr></thead>
  <tbody>
    <tr id='sdl_double_click_size'>
      <td className='name'>sdl_double_click_size</td>
      <td className='def'>2</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>-</td>
    </tr>
    <tr id='sdl_double_click_time'>
      <td className='name'>sdl_double_click_time</td>
      <td className='def'>400</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>-</td>
    </tr>
    <tr id='sdl_minimize_on_focus_loss'>
      <td className='name'>sdl_minimize_on_focus_loss</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Minimize game if it loses key focus when in fullscreen mode</td>
    </tr>
    <tr id='sdl_pollevent_no_timeout'>
      <td className='name'>sdl_pollevent_no_timeout</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Enable immediate event polling, bypassing SDL_WaitEventTimeout with a zero timeout (for testing purposes)</td>
    </tr>
  </tbody>
</table>

## Render Tweaks for Performance
<h5>CVars related to rendering that can impact game performance-both positively and negatively.<br/>Adjust these settings to optimize FPS or control the number of visual effects, like particles, laserbeams and other objects.</h5>
<table>
  <tbody>
    <tr>
      <td><a href='#fps_max'>fps_max</a></td>
      <td><a href='#gl_zmax'>gl_zmax</a></td>
      <td><a href='#r_maxbeams'>r_maxbeams</a></td>
    </tr>
    <tr>
      <td><a href='#max_shells'>max_shells</a></td>
      <td><a href='#max_smokepuffs'>max_smokepuffs</a></td>
      <td><a href='#cl_weather'>cl_weather</a></td>
    </tr>
    <tr>
      <td><a href='#cl_minmodels'>cl_minmodels</a></td>
      <td><a href='#cl_minviewmodel'>cl_minviewmodel</a></td>
      <td><a href='#r_dynamic'>r_dynamic</a></td>
    </tr>
    <tr>
      <td><a href='#r_decals'>r_decals</a></td>
      <td><a href='#r_detailtextures'>r_detailtextures</a></td>
      <td><a href='#fastsprites'>fastsprites</a></td>
    </tr>
    <tr>
      <td colSpan='3'><a href='#gl_msaa'>gl_msaa</a></td>
    </tr>
  </tbody>
</table>

## Developer / Debug
<table className='docs-table'>
  <thead><tr><th>Name</th><th>Default</th><th>Min</th><th>Max</th><th>Description</th></tr></thead>
  <tbody>
    <tr id='developer'>
      <td className='name'>developer</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Set developer message level</td>
    </tr>
    <tr id='dev_overview'>
      <td className='name'>dev_overview</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>Enables top-down map view mode for creating overviews.</td>
    </tr>
    <tr id='mem_show'>
      <td className='name'>mem_show</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>-</td>
    </tr>
    <tr id='fs_lazy_precache'>
      <td className='name'>fs_lazy_precache</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>-</td>
    </tr>
    <tr id='fs_perf_warnings'>
      <td className='name'>fs_perf_warnings</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>-</td>
    </tr>
    <tr id='fs_precache_timings'>
      <td className='name'>fs_precache_timings</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>-</td>
    </tr>
    <tr id='fs_startup_timings'>
      <td className='name'>fs_startup_timings</td>
      <td className='def'>0</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>-</td>
    </tr>
    <tr id='cl_pmanstats'>
      <td className='name'>cl_pmanstats</td>
      <td className='def'>1</td>
      <td className='min'>-</td>
      <td className='max'>-</td>
      <td className='desc'>-</td>
    </tr>
  </tbody>
</table>
<table>
  <tbody>
    <tr>
      <td><a href='#cl_showmessages'>cl_showmessages</a></td>
      <td><a href='#cl_shownet'>cl_shownet</a></td>
      <td><a href='#cl_showerror'>cl_showerror</a></td>
      <td><a href='#cl_showevents'>cl_showevents</a></td>
      <td><a href='#cl_showfps'>cl_showfps</a></td>
    </tr>
    <tr>
      <td><a href='#s_show'>s_show</a></td>
      <td><a href='#snd_show'>snd_show</a></td>
      <td><a href='#net_graph'>net_graph</a></td>
      <td><a href='#net_showdrop'>net_showdrop</a></td>
      <td><a href='#net_showpackets'>net_showpackets</a></td>
    </tr>
    <tr>
      <td><a href='#voice_showchannels'>voice_showchannels</a></td>
      <td><a href='#voice_showincoming'>voice_showincoming</a></td>
      <td><a href='#r_drawentities'>r_drawentities</a></td>
      <td><a href='#r_showinfo'>r_showinfo</a></td>
      <td><a href='#r_showparticles'>r_showparticles</a></td>
    </tr>
    <tr>
      <td><a href='#r_speeds'>r_speeds</a></td>
      <td><a href='#r_novis'>r_novis</a></td>
      <td><a href='#r_lockcull'>r_lockcull</a></td>
      <td><a href='#r_lockpvs'>r_lockpvs</a></td>
      <td><a href='#r_drawviewmodel'>r_drawviewmodel</a></td>
    </tr>
    <tr>
      <td><a href='#weapon_debug_spread_gap'>weapon_debug_spread_gap</a></td>
      <td><a href='#weapon_debug_spread_show'>weapon_debug_spread_show</a></td>
      <td><a href='#cl_smokegren_debug'>cl_smokegren_debug</a></td>
      <td><a href='#host_timescale'>host_timescale</a></td>
      <td><a href='#gl_wireframe'>gl_wireframe</a></td>
    </tr>
  </tbody>
</table>
