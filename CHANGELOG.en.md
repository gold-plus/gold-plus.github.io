
## 2.5.7.0 (2025-10-19) [Beta]

#### :rocket: New Feature

- Added automatic client update system (can be toggled in settings)
- Added `Matchmaking` tab to `New Game` menu for quick game search with filters (game, mod, map) (can be toggled)
- Added Discord RPC integration to display in-game status
- Added a button in settings to enable/disable Steam integration
- Added ConVars for scoreboard customization
    - `scoreboard_showsteam`
    - `scoreboard_showdefaultavatars`
    - `scoreboard_steamicon_offset_x`
    - `scoreboard_steamicon_offset_y`
    - `scoreboard_steamicon_scale`

<!-- truncate -->

- Fully reworked avatar manager: improved stability, added CDN support for fast loading
- Significantly optimized lookup and execution of console commands and aliases
- Optimized Options dialog opening, removed delays and implemented avatar list caching
- Improved `dev_console` ConVar: can now be opened over loading dialogs
- Improved server browser map filter: added support for exact map name search in quotes
- Improved DHUD: messages now respect channels (vanilla bug)
- Added support for custom sizes for the original radar via `hud.txt`
- Added a validate to HUD radar config to prevent using a different map image for a map with the same name (@Nord1cWarr1or)

#### :bug: Bug Fix

- Fixed round timer disappearing after reconnecting if a bomb was planted in the previous round
- Fixed model collision prediction (@Nord1cWarr1or)
- Fixed an bug in chat during intermission (@hajimura)
- Fixed an bug in scoreboard where bottom of player names could be cut off, especially on crowded servers or at low resolutions (@hajimura)
- Fixed player names appearing twice on HUD radar
- Fixed incorrect right-alignment of text in VGUI menus (e.g., buy menu) (vanilla bug) (@YoshiokaHaruki)
- Fixed duration formatting in demo player UI (@Nord1cWarr1or)
- Fixed execution order for command aliases using `wait` command (@Nord1cWarr1or)
- Fixed demos starting at the wrong time (vanilla bug)
- Fixed loading of external resources (maps, models) in demos when broken by some server-side anticheats
- Fixed auto-join button not working for full servers (@karaul0v)
- Fixed `lservercfgfile.cfg` execution when creating a listen server (@esotericdesign)
- Fixed sprite green color in `StatusIcon` user message (@esotericdesign)
- Fixed buffer overflow when reading empty lines in `sentences.txt` (vanilla bug) (@scriptedsnark)
- Fixed mouse aim getting stuck at max sniper zoom, an issue most noticeable with high-precision mice or high FPS (vanilla bug) (@hajimura) [link](https://youtu.be/8Z09xvpNQ3E?t=97)

#### Authors 1
<!-- authors -->

- s1lent ([@s1lent](https://github.com/s1lentq))

#### Testers 6
<!-- testers -->

- hajimura ([@hajimura](https://github.com/hajimura))
- Nord1cWarr1or ([@Nord1cWarr1or](https://github.com/Nord1cWarr1or))
- scriptedsnark ([@scriptedsnark](https://github.com/scriptedsnark))
- esotericdesign ([@esotericdesign](https://github.com/esotericdesign))
- YoshiokaHaruki ([@YoshiokaHaruki](https://github.com/YoshiokaHaruki))
- karaul0v ([@karaul0v](https://github.com/UnrealKaraulov))


## 2.5.6.0 (2025-05-07)

#### :rocket: New Feature

- Added ConVar for HUD radar, toggles between a radar that scales dynamically to encompass all the detected elements on the map
    - `hud_radar_mapscale_dynamic` = 0/1 (Default: 0)
    - `hud_radar_mapscale_dynamic_min` = 0.01/3.5 (Default: 0.35)
- Added ConVar `sdl_minimize_on_focus_loss`, enables minimizing the game if the game window in fullscreen mode loses focus (Default: 1 - It is recommended to disable this deprecated behavior, to improve compatibility with window managers)
- Added support for additive/blur effects for fonts
- Added ConVar `r_prefertexturefiltering` for easy texture filtering toggling
- Added ConVar `dev_console` to enable in-game console
- Added ConVar `gl_use_shaders` to enable the overbright effect
- Added EEU and WEU regions to ServerBrowser

<!-- truncate -->

- Added support map images in Overview mode from auto-generated for radar HUD
- Added new ConVar `gl_msaa` to select some smoothing levels multisampling `x2`, `x4`, `x8`, `x16`
- Added ConVar `cl_corpsefall` for enables a smooth fall into the underground as bodies disappear (@Vaqtincha)
- Added killfeed icons for tracktrain, lasermine and sentrygun
- Added more viewmodel sway when jumping / landing / crouching / strafe-running
    - `viewmodel_lag_scale_jump`
    - `viewmodel_lag_scale_land`
    - `viewmodel_lag_scale_crouch`
    - `viewmodel_rollangle`
- Added ConVar for HUD speedometer (@Vaqtincha)
    - `hud_speedometer` (Default: 0)
    - `hud_speedometer_stayjump` (Default: 0)
    - `hud_speedometer_x`
    - `hud_speedometer_y`
- Added ConVar for smoothly change the FOV
    - `fov_lerp_in` (Default: 0)
    - `fov_lerp_out` (Default: 0)
    - `fov_lerp_sniper_instant`
- Added support models with a new `half-float` UV texture coords (@xash3d)
- Added the ability to close VGUI2 buy menu with open button (@Vaqtincha)
- Added ConVar `camera_movement_bone` for testing (not for public use)
- Added ConVar `r_showinfo` to get technical render/movement info (not for public use)
- Added ConVar `voice_overdrive` to settings Audio tab
- Optimized `net_graph` render in 1/2 modes
- Optimized render of VGUI2 panels and fonts batcher
- Increased block memory for particleman from 30KB to 128KB
- Increased sound channels limit `MAX_DYNAMIC_CHANNELS` from 8 to 32
- Money in HUD can now display negative values
- Improved performance due to the replacement of the obsoleted x87 instruction set for FPU operations with modern and efficient SSE instructions
- In `dev_overview` mode, all entities are now visible regardless of player's position
- Improved alignment for text right-alignment in HUD menu for widescreen displays
- Improve in-game menu (commandmenu)
- Entered hidden text in TextEntry (e.g password) is now available for peek
- Updated `SDL2` from `2.0.1` up to `2.30.3`
- Updated `ReHLDS API` up to `3.14`
- Changed clear color to gray instead of red when `gl_clear` is active
- Increased limits for entities baseline in HLTV/DemoPlayer
- Improved load sprite txt files, allow to set preferred resolution
- Allow to spawn a map, even when models precache limit is reached, in developer mode
- Improved outline of zones on map for HUD radar
- Improved HUD death notice for weapon molotov/flame burning icon
- Improve and learn to reload schemes (for purpose video mode change on fly)
- Improve align columns for ScoreBoard and adapting size by game resolution
- Improved viewmodel sway with `cl_bobstyle` 2 style
- Improved behavior of `viewmodel_retract`

#### :bug: Bug Fix

- Fixed Famas weapon bug with missed shots in Burst mode (vanilla bug) (@Nord1cWarr1or)
- Fixed money HUD position when secondary ammo is present (vanilla bug)
- Fixed the game appearing too dark after modifying video settings (vanilla bug)
- Fixed uneven padding for Health and Armor HUD elements (vanilla bug)
- Fixed incorrect calc of glyph widths in right-aligned text in the HUD menu (vanilla bug)
- Fixed a crash in `CVoiceStatus::UpdateSpeakerStatus` (vanilla bug)
- Speak label of talking player does not disappear when the scoreboard is open (vanilla bug)
- Fixed incorrect sorting of ConVar/ConCommand in console dropdown menu
- Fixed weapon offset `viewmodel_offset_x` applying for knife/grenade/shield weapons
- Fixed prediction of player movements with SOLID_NOT in spectator mode (@wopox1337)
- Fixed some bugs in videomode 800x600 (@wopox1337)
- Fixed jitter viewmodel moving from 1st person in eye spectator mode (vanilla bug)
- Fixed map outline for HUD radar (@Nord1cWarr1or)
- Fixed a crash for custom mods of Half-Life
- Fixed `NumPad ENTER` button not handling button press in VGUI2 dialogs (vanilla bug) (@Vaqtincha)
- Fixed a bug with brush entity where the impact sound from weapon shots was not emitted (vanilla bug) (@Vaqtincha)
- Fixed prediction bug ducking of a player spectating by a 1st-person observer (vanilla bug)
- Fixed GameUI timeline slider while watching demo, demo timeline didn't match actual starting position of demo (vanilla bug)

#### Authors 1
<!-- authors -->

- s1lent ([@s1lent](https://github.com/s1lentq))

#### Testers 3
<!-- testers -->

- wopox1337 ([@wopox1337](https://github.com/wopox1337))
- Nord1cWarr1or ([@Nord1cWarr1or](https://github.com/Nord1cWarr1or))
- Vaqtincha ([@Vaqtincha](https://github.com/Vaqtincha))


## 2.5.0.0 (2024-10-21)

#### :rocket: New Feature

- Added hot-reload schemes/fonts when a video mode changed or window resized (a restart is no longer needed)
- Added new non-exclusive fullscreen mode `Fullscreen windowed`
- Added support video aspect ratio `16:10`
- Added more settings to Video/Audio
- Added support for multiple displays, parameter `-displayindex` N for startup app on specific display and new ConVar
    - `sdl_displayindex`
- Added speaker icon in ScoreBoard, when a player is talking
- Added feature `Drag&Drop` demo file into window
- Added additional info to demo file about what is was recorded on `GoldClient+` (aka GSClient+)
- Added auto-download missing pre-cached resources when viewing a demo file using by new ConVar
    - `cl_download_demo_resources` = 0/1 (Default: 1)
- Demo can be slowed/fasted up to `x16` times
- Increased texture limit from `640x480` up to `1024x1024`
- Allow spawn a map with missing resources of map in developer mode using resources such llike `error.mdl` or `error.spr` as fallback
- Added auto-generation map image for HUD radar and new ConVars
    - `hud_radar_takeshot` = 0/1 (Default: 1)
    - `hud_radar_takeshot_quality` = 0/100 (Default: 65)

<!-- truncate -->

- Added support for combined CSDE mode for HUD radar, which simultaneously includes hostage-rescue and bomb defusing modes
- Added ability to create a overview map image (with `dev_overview 1`) at any game resolution (not only in 1024x768)
- Added auto-generation of script file for overview map
- Added hints and improved interface for overview map
- Added ignoring render temporary entities and lying weapons for overview map
- Added forcing entities to visible in listenserver for take screenshot with all entities in overview map mode
- Added new zoom calculation by mins/maxs of map based on real boundaries (not box) for overview map
- Added info about left time for current map in Dialog Game Info only in the second receiving update
- Added prefix `[BOT]` for bots in Dialog Game Player Info
- Added new ConVar to remove history servers with last played N days ago
    - `cl_servers_history_lastplayed` = N in seconds (Default: 3 month)
- HUD death notice added new icon kill rarity IN AIR
- Added support for `IN_RUN` key using +speed
- Added new ConVar to use prefer hand side determined by `cl_righthand` for shield weapon holding view model
    - `cl_shieldweapon_handpreference` = 0/1  (Default: 0)
- Added detection of bombsite types (`A`,`B`,`C`) using data such as targetname, nearby decals or textures that associated the bombsite location
- Added new bombsite icon for unknown bombsite type
- Added support for versioning player movement
- Added experimental ConVars for tracer bullets effects (disabled by default)
    - `cl_guntracer`
    - `cl_guntracer_color`
    - `cl_guntracer_offset`
    - `cl_guntracer_speed`
    - `cl_guntracer_speed_maxmul`
- Added new option zoom_sensitivity_ratio in UI mouse
- Added button Stop/Play animation in crosshair preview
- Added new experimental ConVars for input mouse low latency
    - `gl_lowlatency`
    - `gl_lowlatency_maxslop_ms`
    - `gl_lowlatency_minslop_ms`
- Added peek icon for hidden text in TextEntry (e.g password)
- Added ability for server to set custom text location name under HUD radar
- Added ability for ConVar gamma/brightness changes on fly without reconnect on map
- Added autodetect palette color range based on the shades of a given color for particles and sprites (e.g, given green color, but in random range colors occurs non-green)

#### :bug: Bug Fix

- Fixed interrupting sounds emitting from radio chat and HUD suit
- Fixed a crash when launching steam when the client is already running
- Fixed render bug for `TE_BEAMCYLINDER` (@Vaqtincha)
- Fixed sometimes missing display of last played time in History Tab ServerBrowser
- Fixed a bug with `gl_clear` in spectator mode when Pic-In-Pic/Map free modes activated
- Fixed a bug with cancel button for VGUI TeamMenu
  If the server didn't send keybits for 0 key menu, then it should not be shown
- Fixed a bug with cursor image in dev_console 1
- Fixed a bug with shutdown steam on listenserver
- Fixed a bug with `cl_gunsmoke` when viewmodel_fov > 90
- Fixed a bug with `STEAM_ID_LAN` with reunion authorization on listenserver (@Vaqtincha)
- Fixed a bug with flickering screen in spectator mode due jump to position when server sent fullupdate or sv_restart 1
- Fixed a bug with weapon predict with `cl_minviewmodel 1`
- Fixed a bug with animation of inspect for `cl_minviewmodel`
- Fixed a bug with duplicating load HLTV `core.dll` library (vanilla bug)
- Fixed a bug that occurred during the resource precaching stage in listenserver (vanilla bug)
- Fixed a bug with predict weapon double firing on extremal FPS (vanilla bug)
- Fixed a bug with weapon HUD selection when have multiple primary/secondary weapons (vanilla bug)
- Fixed a bug with very slow FPS on map which does not contains lightmaps e.g, a unfinished compiled map (vanilla bug)
- Minor bugfixes

#### Authors 1
<!-- authors -->

- s1lent ([@s1lent](https://github.com/s1lentq))

#### Testers 3
<!-- testers -->

- Nord1cWarr1or ([@Nord1cWarr1or](https://github.com/Nord1cWarr1or))
- wopox1337 ([@wopox1337](https://github.com/wopox1337))
- Vaqtincha ([@Vaqtincha](https://github.com/Vaqtincha))


## 2.4.0.0 (2023-12-17)

#### :rocket: New Feature

- Added ConVar `cl_fixmodelinterpolationartifacts`, a feature backported from HL25 update. It fixes interpolation artifacts (visual stuttering) for animated models on moving platforms (e.g., a scientist on a train)
- Added the `-nosingle` launch option to allow running multiple game instances, with connections restricted to servers where `sv_chats` is enabled
- Added cross-compatibility for CS 1.6 and Condition Zero games in the ServerBrowser

#### :bug: Bug Fix

- Fixed the directional damage indicator on the HUD (red overlay showing the direction of incoming attacks) (@hajimura)
- Fixed a crash caused by a buffer overrun in the `AmmoX` user message due to an invalid ammo ID

<!-- truncate -->

#### Authors 1
<!-- authors -->

- s1lent ([@s1lent](https://github.com/s1lentq))

#### Testers 1
<!-- testers -->

- hajimura ([@hajimura](https://github.com/hajimura))


## 2.3.8.6 (2023-12-11)

#### :rocket: New Feature

- Added ConVar `cl_download_retries` set max number of attempts to download files from FastDL

<!-- truncate -->


## 2.3.8.5 (2023-12-06)

#### :rocket: New Feature

- Maximum heap memory size raised to `512MB` from `128MB` (Default: `256MB`)

<!-- truncate -->


## 2.3.8.0 (2023-12-01)

#### :rocket: New Feature

- Added ConVars
    - `viewmodel_fov`
    - `viewmodel_lag_scale`
    - `viewmodel_lag_speed`
    - `viewmodel_shift_left_amt`
    - `viewmodel_shift_right_amt`
    - `viewmodel_shift`
    - `viewmodel_offset_x`
    - `viewmodel_offset_y`
    - `viewmodel_offset_z`
    - `camera_movement_interp`
    - `camera_movement_scale`
    - `cl_bobstyle`
    - `cl_bobamt_vert`
    - `cl_bobamt_lat`
    - `cl_bob_lower_amt`
    - `cl_camera_follow_bone_index`

<!-- truncate -->

- Added ConVar `r_maxbeamentities` for max simultaneous beams to render
- Beams render limit raised to `4096` from `64` (Set limit by ConVar `r_maxbeamentities` Default: 128)


## 2.3.7.0 (2023-11-15)

#### :rocket: New Feature

- Added ConVar `viewmodel_retract` to enables weapon view model retraction near obstacles
- Added ConVar `engine_no_focus_sleep` to set sleep time when the game is not focused
- Added ConVar `engine_no_render_minimized` to disable update screen rendering when game is minimized (Low CPU and GPU power consumption)
- Added a whitelist of ConVars/Commands from `convar_whitelist.cfg` config
- Added ConVars to customize more violence and blood effect
    - `violence_vfxblood`
    - `violence_vfxblood_color`
    - `violence_vfxblood_gibs`
    - `violence_vfxblood_bigdrops`
    - `violence_vfxblood_burst_ratio`
    - `violence_vfxblood_mist`
    - `violence_vfxblood_small`
    - `violence_vfxblood_splat`
    - `violence_vfxblood_drops`
    - `violence_vfxblood_headshot`
    - `violence_vfxblood_grenade`

<!-- truncate -->

- Reworked ConVar `cl_filterstuffcmd`
    - `0` = Disable (No restrictions)
    - `1` = Soft level (few commands can be executed)
    - `2` = Strict level (execution not allowed)
- Light maps limit raised to `512` from `64`
- Decals render limit raised to `8192` from `4096`

#### :bug: Bug Fix

- Voice of a local player now records in demo recordings
- Fixed stucking buttons after demo playback


## 2.3.6.0 (2023-10-27)

#### :rocket: New Feature

- Added map filter in NewGame
- Added favorites server from Steam account
- Added param `-noservice` to disable game service like TurboNet and others
- Added ConVar `snd_mute_losefocus` mute sound when game lose focus (enabled by default)
- Added ConVar `violence_bloodamount` to increase violence
- Added ConVar `cl_download_enable_gzip` enables support for downloading compressed files from FastDL
- Added ConVar `cl_allow_redirect` to allow redirection
- Added ConVar `hud_draw_only_deathnotices` (Useful to moviemaking)
- Added ConVar `cl_minviewmodel` to enable only standard models in viewmodel
- Added new UI ConVar by connection events to server and spawn
    - `ui_window_bringfront_on_event` - Bring game to front
    - `ui_window_sound_on_event` - Play a sound on event

<!-- truncate -->


## 2.3.5.0 (2023-10-15)

#### :rocket: New Feature

- Added new ConVar for HUD in-game chat
    - `hud_saytext_time`
    - `hud_saytext_gap`
- Added support for `ReHLDS API` for listenserver
- Added support `CustomFontFiles{}` in `TrackerScheme.res` for a custom font with any language
- Added support to use own font only for chat `Fonts { HudChat }`
- Added few languages to choose (not a translation)
    - `Serbian`
    - `Uzbek`
    - `Azerbaijani`
    - `Georgian`
    - `Kyrgyz`
    - `Turkmen`

<!-- truncate -->

#### :bug: Bug Fix

- Fixed `gunsmoke` in sniper rifles
- Fixed incorrect position of bullet decals on sniper rifles during the holding shoot


## 2.3.4.0 (2023-10-01)

#### :rocket: New Feature

- Added support for multilayers overview map for extended `HUD Radar`
- Added halo effect around extended `HUD Radar` when a bomb is planted
- Added new ConVar for `HUD Radar`
    - `hud_radar_always_centered`
    - `hud_radar_icon_scale_min`
    - `hud_radar_square_with_scoreboard`
    - `hud_radar_map_solidcolor`
    - `hud_radar_shapecolor`
    - `hud_radar_table_rotate`
- Added new ConVar `hud_saytext_max` to set max number of lines in-game chat (@Nord1cWarr1or)
- Added `cl_gunsmoke` quark (Legacy from gunsmoke command)

<!-- truncate -->

#### :bug: Bug Fix

- Fixed a hang in client function `UTIL_GetNextBestWeapon` (@wopox1337)
- Position simulation is disabled when observing players (`cl_smoothtime` no longer works in eye mode)

#### Authors 1
<!-- authors -->

- s1lent ([@s1lent](https://github.com/s1lentq))

#### Testers 2
<!-- testers -->

- Nord1cWarr1or ([@Nord1cWarr1or](https://github.com/Nord1cWarr1or))
- wopox1337 ([@wopox1337](https://github.com/wopox1337))


## 2.3.3.0 (2023-09-06)

#### :rocket: New Feature

- Added new ConVar `ui_taskbar_iconflash` for flash icon on system taskbar to grab the user's attention on events such as connected to game server, or spawn, etc
- Added support submodel hands/arms on depends current team
- Added support hot reload texture of skybox via changed `sv_skyname`
- Added new dev ConVar `r_lockcull`, `r_lockpvs` for purpose performance tests
- Added new command `lookatweapon` for look at held weapon, if the model supports this animation
- Added new command `bindlist` for display current keybinds

<!-- truncate -->

#### :bug: Bug Fix

- Fixed a bug with a locked mouse in the game after changing level
- Fixed a bug with a jumping cursor when the game is not in focus

#### Authors 1
<!-- authors -->

- s1lent ([@s1lent](https://github.com/s1lentq))

#### Testers 1
<!-- testers -->

- Nord1cWarr1or ([@Nord1cWarr1or](https://github.com/Nord1cWarr1or))


## 2.3.2.0 (2023-08-27)

#### :rocket: New Feature

- Added new command `r_cleardecals`

#### :bug: Bug Fix

- Fixed a bug with ConVar `r_fullbright` in multiplayer

<!-- truncate -->

#### Authors 1
<!-- authors -->

- s1lent ([@s1lent](https://github.com/s1lentq))

#### Testers 1
<!-- testers -->

- resobatata ([@resobatata](https://github.com/resobatata))


## 2.3.1.0 (2023-08-01)

#### :bug: Bug Fix

- Fixed a voice issue when changing the player's viewent (e.g when using a 3rd-person camera)

<!-- truncate -->


## 2.3.0.0 (2023-07-04)

#### :rocket: New Feature

- Implemented extended HUD Radar
    - `hud_radar`
    - `hud_radar_alpha`
    - `hud_radar_locked`
    - `hud_radar_mapscale`
    - `hud_radar_scale`
    - `hud_radar_square`
    - `hud_radar_showhealth`
    - `hud_radar_shownames`
    - `hud_radar_showtracks`
    - `hud_radar_objectives`
    - `hud_radar_map_shadecolor`
    - `hud_radar_map_outlinethickness`
    - `hud_radar_map_outlinecolor`
    - `hud_radar_fgcolor`
    - `hud_radar_bgcolor`

<!-- truncate -->

- Fully reworked `HUD DeathNotice` and added few ConVar
    - `hud_deathnotice_style`
    - `hud_deathnotice_time`
    - `hud_deathnotice_gap`
    - `hud_deathnotice_iconscale`
    - `hud_deathnotice_iconcolor`
    - `hud_deathnotice_killrarity`
    - `hud_deathnotice_outlinethickness`
    - `hud_deathnotice_fade`
    - `hud_deathnotice_panel_pos`
    - `hud_deathnotice_legacyicons`
- Added ConVar `hud_message`
    - `0` = Disable
    - `1` = Display all messages (Default)
    - `2` = Only `HUD` messages
    - `3` = Only `DHUD` messages
- Added additional settings scope for sniper rifles
- Display in the Friends tab, Steam/TurboNet friends playing on servers
- Implemented cross-game compatibility between CS and CZ games

#### :bug: Bug Fix

- Fixed a bug in UserMessage, in some cases it threw out with `svc_bad` error
- In `dev_overview` mode, player viewmodel was visible
- Fixed visibility of the local server in `LAN` tab (@Polarhigh)
- Miscellaneous fixes in engine
- Fixed incorrect effect of sounds when reverb enabled via `room_type`
- Fixed a critical bug where game is hanged when playing infrequent `VOX` sentences emitting from NPC players

#### :puzzle_piece: Miscellaneous

- Removed restriction ConVar `r_dynamic`
  You can feel free to disable dynamic light in multi-player for performance reasons on `AMD/nVidia` GPU's

#### Authors 1
<!-- authors -->

- s1lent ([@s1lent](https://github.com/s1lentq))

#### Testers 2
<!-- testers -->

- Nord1cWarr1or ([@Nord1cWarr1or](https://github.com/Nord1cWarr1or))
- Polarhigh ([@Polarhigh](https://github.com/Polarhigh))


## 2.2.1.0 (2022-12-11)

#### :rocket: New Feature

- Reworked precache-system, fixed issue about `Texture Overflow MAX_GLTEXTURES`
- Added new ConVar for AWP
    - `cl_crosshair_sniper_width`
    - `cl_bob_sniper`
    - `cl_bobup_sniper`
    - `cl_bobcycle_sniper`
- Reworked ConVar `cl_minmodels`, now minmodels will be work even are missing in precache models

<!-- truncate -->

#### :bug: Bug Fix

- Fixed client Deploy animation caused weapon prediction
- Fixed a crash about `AllocBlock: full`
- Fixed a crash due bad user-messages `StatusIcon` and `DeathMsg`
- Fixed a crash of maps where MAX_MAP_LEAFS was greater than limit of 1024, which able led to undefined behavior in client
- Fixed `MOTD` when path to includes non latin characters
- Fixed incorrect position players/entities in spectator mode map roaming
- Fixed memory leak `SPR_GetList`
- Fixed memory leak `DetailTextures` with `r_detailtextures 0`
- Fixed memory leak VOX sentence system

#### Authors 1
<!-- authors -->

- s1lent ([@s1lent](https://github.com/s1lentq))

#### Testers 1
<!-- testers -->

- wopox1337 ([@wopox1337](https://github.com/wopox1337))


## 2.1.0.0 (2022-11-07)

#### :rocket: New Feature

- ConVars `cl_bob`, `max_shells`, `max_smokepuffs` marked as an archive, which allows them to be saved in config

#### :bug: Bug Fix

- Fixed a bug in monitor frequency when FBO scaling is enabled
- Fixed a crash in ServerBrowser when `SteamMatchmakingServers()` function returned null at shutdown
- Fixed an issue with `BuySubMenu.res` file not loading as per player's team

<!-- truncate -->


## 2.0.0.0 (2022-10-22)

#### :rocket: New Feature

- Added AMXX Module with `GoldClient API`
- Added new command `BindToggle` for easy switching state of convar
- Added support PNG format for avatar

#### :bug: Bug Fix

- Fixed an issue with sorting auto-completion in console dialog
- Fixed a bug with muted menu In-Game
- Fixed a bug with larger avatars
- Fixed an issue with lightstyle in listenserver

<!-- truncate -->
