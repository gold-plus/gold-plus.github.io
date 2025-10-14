---
id: commands
title: Console commands
sidebar_position: 2
---

import { VersionBadge } from '@site/src/components/Misc/VersionBadge'
import { Table } from '@site/src/components/ResponsiveLayout';

<br/>
:::warning Page under construction
This page is under active filling and correction<br/>
There may be errors, inaccuracies and omissions, and lack of translation<br/>
Follow the updates to receive up-to-date information
:::

# Console commands

A list of all console commands (ConCommands) — their description and usage syntax
:::info How to read console command syntax
Before we begin, let's understand how to read the syntax used in this documentation

**Argument Notation**

Command arguments (the parameters you pass) are denoted by special brackets:

| Syntax        | Meaning                                       | Example                      |
|:--------------|:----------------------------------------------|:-----------------------------|
| `<argument>`  | A **required** argument — you must replace it with your own value | `kick <name>`                |
| `[argument]`  | An **optional** argument — it can be omitted    | `kick <name> [reason]`       |
| `<on\|off>`   | A **choice** between the suggested options, separated by `\|` | `log <on\|off>`             |

**Using Quotation Marks ("")**

If an argument contains spaces or you want to combine multiple commands into a single line, it must be enclosed in double quotes (`"`) \
Without them, the console will treat each word as a separate command or argument

*   **Incorrect:** `say Hello world` (only "Hello" will be sent to the chat)
*   **Correct:** `say "Hello world"` (the entire phrase will be sent)

This is especially important when creating binds with multi-commands:
`bind F1 "buy ak47; buy vesthelm"`

**Important** \
The brackets `<>`, `[]`, and the `|` symbol should **not** be typed into the console \
They only describe the command's structure
:::

## Settings & Configuration
<Table>
  <thead><tr><th>Command</th><th>Description</th></tr></thead>
  <tbody>
    <tr id='bind'>
      <td className='name'>bind `<key>` `<command>`</td>
      <td className='desc'>Binds a command to a key<br/><br/>*For example:*<br/>`bind q "lastinv"`</td>
    </tr>
    <tr id='unbind'>
      <td className='name'>unbind `<key>`</td>
      <td className='desc'>Unbinds a command from a key</td>
    </tr>
    <tr id='unbindall'>
      <td className='name'>unbindall</td>
      <td className='desc'>Unbinds all commands from all keys</td>
    </tr>
    <tr id='bindlist'>
      <td className='name'>bindlist `[template]`</td>
      <td className='desc'><div className='text'>Displays a list of all current key bindings</div><div className='desc-meta'><VersionBadge type='added' since='2.3.3.0'/></div></td>
    </tr>
    <tr id='sbindlist'>
      <td className='name'>sbindlist</td>
      <td className='desc'><div className='text'>Displays a list of 'shadow' key bindings set by the server</div><div className='desc-meta'><VersionBadge type='added' since='2.0.0.0'/></div></td>
    </tr>
    <tr id='multvar'>
      <td className='name'>multvar `<cvar>` `<minvalue>` `<maxvalue>` `<factor>`</td>
      <td className='desc'><div className='text'>Multiplies a cvar's value by a factor if it is within the specified range<br/><br/>*For example:*<br/>`bind uparrow "multvar voice_scale 0.01 1 2"`<br/>`bind downarrow "multvar voice_scale 0.01 1 0.5"`</div><div className='desc-meta'><VersionBadge type='added' since='2.3.8.6'/></div></td>
    </tr>
    <tr id='incrementvar'>
      <td className='name'>incrementvar `<cvar>` `<minvalue>` `<maxvalue>` `<delta>`</td>
      <td className='desc'><div className='text'>Changes a cvar's value within a specified range<br/><br/>*For example:*<br/>`bind uparrow "incrementvar viewmodel_fov 60 179 1"`<br/>`bind downarrow "incrementvar viewmodel_fov 60 179 -1"`</div><div className='desc-meta'><VersionBadge type='added' since='2.0.0.0'/></div></td>
    </tr>
    <tr id='BindToggle'>
      <td className='name'>BindToggle `<key>` `<cvar>`</td>
      <td className='desc'><div className='text'>A simplified version of `incrementvar` for quickly toggling a cvar between 0 and 1<br/><br/>*For example:*<br/>`BindToggle F4 voice_enable`</div><div className='desc-meta'><VersionBadge type='added' since='2.0.0.0'/></div></td>
    </tr>
    <tr id='alias'>
      <td className='name'>alias `<name>` `<command>`</td>
      <td className='desc'>Creates an alias for a single command or a group of commands<br/><br/>*For example:*<br/>`alias buy_grens "hegren;sgren;flash;"`</td>
    </tr>
    <tr id='wait'>
      <td className='name'>wait `[frames]`</td>
      <td className='desc'>
        <div className='text'>
          A special modifier command that pauses the execution of a *command sequence* for a specified number of frames<br/><br/>
          Unlike the old behavior, where you had to write `wait; wait; wait;`, you can now specify the number of frames<br/>
          • `wait` — pauses for 1 frame<br/>
          • `wait 10` — pauses for 10 frames<br/><br/>
          Ideal for creating complex scripts<br/>
          *For example:*<br/>
          `alias fastbuy "buy; wait 30; slot4; wait 30; slot2"`<br/>
          :::info
          `wait` is not a standard command<br/>It is processed directly by the command buffer and will not appear in console autocomplete
          :::
        </div>
        <div className='desc-meta'>
          <VersionBadge type='changed' since='2.0.0.0'/>
        </div>
      </td>
    </tr>
    <tr id='exec'>
      <td className='name'>exec `<filename.cfg>`</td>
      <td className='desc'>Executes commands from the specified configuration file</td>
    </tr>
    <tr id='writecfg'>
      <td className='name'>writecfg `<filename.cfg>`</td>
      <td className='desc'>Saves the current settings (cvars) to the specified file</td>
    </tr>
    <tr id='setinfo'>
      <td className='name'>setinfo `<key>` `<value>`</td>
      <td className='desc'>Sets or changes a value in your `userinfo` string<br/><br/>*For example:*<br/>`setinfo "_vgui_menus" "0"`</td>
    </tr>
  </tbody>
</Table>

## Player & Gameplay
<Table>
  <thead><tr><th>Command</th><th>Description</th></tr></thead>
  <tbody>
    <tr id='buy'>
      <td className='name'>buy</td>
      <td className='desc'>Opens the weapon/equipment purchase menu</td>
    </tr>
    <tr id='autobuy'>
      <td className='name'>autobuy</td>
      <td className='desc'>Automatically buys equipment according to the `autobuy.txt` config</td>
    </tr>
    <tr id='rebuy'>
      <td className='name'>rebuy</td>
      <td className='desc'>Buys the same equipment you had in the previous round</td>
    </tr>
    <tr id='say'>
      <td className='name'>say `<message>`</td>
      <td className='desc'>Sends a message to global chat</td>
    </tr>
    <tr id='say_team'>
      <td className='name'>say_team `<message>`</td>
      <td className='desc'>Sends a message to team chat</td>
    </tr>
    <tr id='tell'>
      <td className='name'>tell `<player_name>` `<message>`</td>
      <td className='desc'>Sends a private message to a player (if allowed by the server)</td>
    </tr>
    <tr id='slot1'>
      <td className='name'>slot1 - slot10</td>
      <td className='desc'>Selects the corresponding weapon slot</td>
    </tr>
    <tr id='invnext'>
      <td className='name'>invnext</td>
      <td className='desc'>Selects the next weapon in the inventory</td>
    </tr>
    <tr id='invprev'>
      <td className='name'>invprev</td>
      <td className='desc'>Selects the previous weapon in the inventory</td>
    </tr>
    <tr id='lookatweapon'>
      <td className='name'>lookatweapon</td>
      <td className='desc'><div className='text'>Plays the inspect animation for the held weapon</div><div className='desc-meta'><VersionBadge type='added' since='2.3.3.0'/></div></td>
    </tr>
    <tr id='trackplayer'>
      <td className='name'>trackplayer</td>
      <td className='desc'><div className='text'>Starts tracking the player you are aiming at<br/>Tracked players are highlighted on the radar and their name is displayed above their head (if `hud_headname` is enabled and you are on the same team) <a className='ref-link' href='/docs/refs/configuration/cvars#hud_headname'/></div><div className='desc-meta'><VersionBadge type='changed' since='2.5.0.0'/></div></td>
    </tr>
    <tr id='clearplayers'>
      <td className='name'>clearplayers</td>
      <td className='desc'>Resets the list of tracked players, removing all highlights</td>
    </tr>
    <tr id='adjust_crosshair'>
      <td className='name'>adjust_crosshair `[0-9]`</td>
      <td className='desc'>
        <div className='text'>
          Cycles through crosshair colors or sets a specific mode<br/><br/>
          *Without an argument:*<br/>
            Cycles through 5 standard **opaque** colors<br/><br/>
          *With an argument `[0-9]`:*<br/>
            Allows directly setting one of 10 modes, useful for scripting and aliases<br/>
              *0-4:* Sets one of the 5 standard colors in opaque mode<br/>
              *5-9:* Sets the same 5 colors but in **semi-transparent** mode (enables `cl_crosshairusealpha 1`)
        </div>
        <div className='desc-meta'>
          <VersionBadge type='changed' since='2.3.6.0'/>
        </div>
      </td>
    </tr>
    <tr id='drawradar'>
      <td className='name'>drawradar<br/>hideradar</td>
      <td className='desc'>Shows / hides the HUD radar</td>
    </tr>
    <tr id='cancelselect'>
      <td className='name'>cancelselect</td>
      <td className='desc'>Cancels a menu selection (e.g., the team selection menu)</td>
    </tr>
    <tr id='messagemode'>
      <td className='name'>messagemode `<type>`</td>
      <td className='desc'>Opens the input field for a global chat message</td>
    </tr>
    <tr id='messagemode2'>
      <td className='name'>messagemode2 `<type>`</td>
      <td className='desc'>Opens the input field for a team chat message</td>
    </tr>
    <tr id='force_centerview'>
      <td className='name'>force_centerview</td>
      <td className='desc'>Instantly centers the player's view (looking straight ahead)</td>
    </tr>
    <tr id='togglescores'>
      <td className='name'>togglescores</td>
      <td className='desc'>Toggles the scoreboard display (show/hide)</td>
    </tr>
    <tr id='voicerecord_toggle'>
      <td className='name'>voicerecord_toggle `<on/off>`</td>
      <td className='desc'>Toggles microphone recording state (starts/stops)<br/>Useful for creating a 'toggled' voice chat instead of 'hold-to-talk' <a className='ref-link' href='/docs/refs/configuration/commands#voicerecord'/></td>
    </tr>
    <tr id='voice_showbanned'>
      <td className='name'>voice_showbanned</td>
      <td className='desc'>Shows a list of players you have muted</td>
    </tr>
    <tr id='snapto'>
      <td className='name'>snapto</td>
      <td className='desc'>Toggles the `cam_snapto` cvar for the third-person camera</td>
    </tr>
    <tr id='kill'>
      <td className='name'>kill</td>
      <td className='desc'>Kills your character (suicide)</td>
    </tr>
    <tr id='god'>
      <td className='name'>god</td>
      <td className='desc'>Toggles god mode (invincibility)<br/>Requires `sv_cheats 1`</td>
    </tr>
    <tr id='noclip'>
      <td className='name'>noclip</td>
      <td className='desc'>Toggles noclip mode (fly through walls)<br/>Requires `sv_cheats 1`</td>
    </tr>
    <tr id='fly'>
      <td className='name'>fly</td>
      <td className='desc'>Toggles fly mode<br/>Unlike `noclip`, the player remains 'solid' and can collide with objects<br/>Requires `sv_cheats 1`</td>
    </tr>
    <tr id='notarget'>
      <td className='name'>notarget</td>
      <td className='desc'>Makes the player invisible to NPCs<br/>Requires `sv_cheats 1`</td>
    </tr>
    <tr id='impulse'>
      <td className='name'>impulse `<number>`</td>
      <td className='desc'>Executes a game action by its numerical code<br/><br/>*For example:*<br/>`impulse 101`: Gives 16000 money (requires `sv_cheats 1`)<br/>`impulse 201`: Sprays your logo</td>
    </tr>
    <tr id='dropclient'>
      <td className='name'>dropclient</td>
      <td className='desc'>Disconnects you from the game server</td>
    </tr>
  </tbody>
</Table>

## Network & Connection
<Table>
  <thead><tr><th>Command</th><th>Description</th></tr></thead>
  <tbody>
    <tr id='connect'>
      <td className='name'>connect `<ip:port>`</td>
      <td className='desc'>Connects to the specified game server<br/><br/>*For example:*<br/>`connect 123.45.67.89:27015`</td>
    </tr>
    <tr id='reconnect'>
      <td className='name'>reconnect</td>
      <td className='desc'>Refreshes the connection to the current server without a full disconnect<br/>Takes effect during a map change; manual execution will cause a full reconnection</td>
    </tr>
    <tr id='retry'>
      <td className='name'>retry</td>
      <td className='desc'>Attempts to reconnect to the last server</td>
    </tr>
    <tr id='disconnect'>
      <td className='name'>disconnect</td>
      <td className='desc'>Disconnects from the current server</td>
    </tr>
    <tr id='ping'>
      <td className='name'>ping</td>
      <td className='desc'>Shows the current ping to the server in the console</td>
    </tr>
    <tr id='pingservers'>
      <td className='name'>pingservers</td>
      <td className='desc'>Sends ping requests to cached local servers to update their information</td>
    </tr>
    <tr id='list'>
      <td className='name'>list</td>
      <td className='desc'>Displays a list of cached local servers in the console<br/>Use `slist` to refresh the list</td>
    </tr>
    <tr id='slist'>
      <td className='name'>slist</td>
      <td className='desc'>Searches for and displays servers on the local network (LAN) in the console</td>
    </tr>
    <tr id='upload'>
      <td className='name'>upload `<!MD5...>`</td>
      <td className='desc'>Uploads your custom spray to the server to be displayed to other players</td>
    </tr>
    <tr id='fullupdate'>
      <td className='name'>fullupdate</td>
      <td className='desc'>Requests a full (non-delta) state update of all entities from the server, typically at the start of a demo recording<br/>This ensures the demo has complete information about all entity states in its initial frame</td>
    </tr>
  </tbody>
</Table>

## Demos & Video
<Table>
  <thead><tr><th>Command</th><th>Description</th></tr></thead>
  <tbody>
    <tr id='record'>
      <td className='name'>record `<filename>`</td>
      <td className='desc'>Starts recording a demo file (`.dem`)</td>
    </tr>
    <tr id='appenddemo'>
      <td className='name'>appenddemo `<filename>`</td>
      <td className='desc'>Appends recording to an existing demo file</td>
    </tr>
    <tr id='stop'>
      <td className='name'>stop</td>
      <td className='desc'>Stops demo recording</td>
    </tr>
    <tr id='viewdemo'>
      <td className='name'>viewdemo `<filename>`</td>
      <td className='desc'>Plays a demo file with an advanced interface (pause, rewind, etc.)</td>
    </tr>
    <tr id='playdemo'>
      <td className='name'>playdemo `<filename>`</td>
      <td className='desc'>Plays a demo file (legacy method)</td>
    </tr>
    <tr id='listdemo'>
      <td className='name'>listdemo `<filename>`</td>
      <td className='desc'>Displays information about the contents of a demo file</td>
    </tr>
    <tr id='startmovie'>
      <td className='name'>startmovie `<filename>` `<fps>`</td>
      <td className='desc'>Starts recording a sequence of TGA frames for video creation</td>
    </tr>
    <tr id='endmovie'>
      <td className='name'>endmovie</td>
      <td className='desc'>Stops frame recording</td>
    </tr>
    <tr id='startdemos'>
      <td className='name'>startdemos `<demo1> <demo2> ...`</td>
      <td className='desc'>Starts playback of a sequence of demo files</td>
    </tr>
    <tr id='demos'>
      <td className='name'>demos</td>
      <td className='desc'>Replays the sequence of demo files from `startdemos` <a className='ref-link' href='/docs/refs/configuration/commands#startdemos'/></td>
    </tr>
    <tr id='stopdemo'>
      <td className='name'>stopdemo</td>
      <td className='desc'>Stops demo playback</td>
    </tr>
    <tr id='removedemo'>
      <td className='name'>removedemo `<demoname>` `<segment to remove>`</td>
      <td className='desc'>Removes a segment from a demo file<br/>Used during demo editing</td>
    </tr>
    <tr id='dem_start'>
      <td className='name'>dem_start</td>
      <td className='desc'>Rewinds to the beginning during demo playback via `viewdemo`</td>
    </tr>
    <tr id='dem_pause'>
      <td className='name'>dem_pause `<0|1>`</td>
      <td className='desc'>Pauses or resumes demo playback</td>
    </tr>
    <tr id='dem_jump'>
      <td className='name'>dem_jump `<time>`</td>
      <td className='desc'>Jumps to a specific tick in the demo</td>
    </tr>
    <tr id='dem_forcehltv'>
      <td className='name'>dem_forcehltv `<0|1>`</td>
      <td className='desc'>Forces the engine to treat a demo as an HLTV recording, even if it's a POV demo<br/>This must be executed before loading the POV demo</td>
    </tr>
    <tr id='dem_speed'>
      <td className='name'>dem_speed `<speed>`</td>
      <td className='desc'>Sets the playback speed of the demo</td>
    </tr>
    <tr id='dem_save'>
      <td className='name'>dem_save `<filename>`</td>
      <td className='desc'>Saves a segment of the demo to a new file</td>
    </tr>
  </tbody>
</Table>

## Server & Administration
<Table>
  <thead><tr><th>Command</th><th>Description</th></tr></thead>
  <tbody>
    <tr id='map'>
      <td className='name'>map `<mapname>`</td>
      <td className='desc'>Starts a local server on the specified map<br/><br/>*For example:*<br/>`map de_dust2`</td>
    </tr>
    <tr id='changelevel'>
      <td className='name'>changelevel `<mapname>`</td>
      <td className='desc'>Changes the server's map, moving all players</td>
    </tr>
    <tr id='changelevel2'>
      <td className='name'>changelevel2 `<mapname>`</td>
      <td className='desc'>Transitions to the specified map in single-player, preserving the local player's state</td>
    </tr>
    <tr id='career'>
      <td className='name'>career `<mapname>`</td>
      <td className='desc'>Starts a map in 'Career' mode (used in CS: Condition Zero)</td>
    </tr>
    <tr id='restart'>
      <td className='name'>restart</td>
      <td className='desc'>Restarts the current map from the beginning</td>
    </tr>
    <tr id='kick'>
      <td className='name'>kick `<name/#userid>` `[reason]`</td>
      <td className='desc'>Kicks a player from the server</td>
    </tr>
    <tr id='banid'>
      <td className='name'>banid `<time>` `<steamid|#userid>` `[kick]`</td>
      <td className='desc'>Bans a player by SteamID<br/>Time 0 is permanent</td>
    </tr>
    <tr id='addip'>
      <td className='name'>addip `<time>` `<ip>`</td>
      <td className='desc'>Bans an IP address<br/>Time 0 is permanent</td>
    </tr>
    <tr id='removeid'>
      <td className='name'>removeid `<steamid>`</td>
      <td className='desc'>Removes a ban from a SteamID</td>
    </tr>
    <tr id='removeip'>
      <td className='name'>removeip `<ip>`</td>
      <td className='desc'>Removes a ban from an IP address</td>
    </tr>
    <tr id='listid'>
      <td className='name'>listid</td>
      <td className='desc'>Displays the list of banned SteamIDs</td>
    </tr>
    <tr id='listip'>
      <td className='name'>listip</td>
      <td className='desc'>Displays the list of banned IP addresses</td>
    </tr>
    <tr id='writeid'>
      <td className='name'>writeid</td>
      <td className='desc'>Saves the SteamID ban list to `banned.cfg` <a className='ref-link' href='/docs/refs/configuration/cvars#bannedcfgfile'/></td>
    </tr>
    <tr id='writeip'>
      <td className='name'>writeip</td>
      <td className='desc'>Saves the IP ban list to `listip.cfg` <a className='ref-link' href='/docs/refs/configuration/cvars#listipcfgfile'/></td>
    </tr>
    <tr id='maxplayers'>
      <td className='name'>maxplayers `<number>`</td>
      <td className='desc'>Sets the maximum number of player slots</td>
    </tr>
    <tr id='stat'>
      <td className='name'>stat</td>
      <td className='desc'>A formatted version of the `status` command</td>
    </tr>
    <tr id='status'>
      <td className='name'>status</td>
      <td className='desc'>Displays server information in the console — map, player list, their SteamIDs, ping, etc</td>
    </tr>
    <tr id='stats'>
      <td className='name'>stats</td>
      <td className='desc'>Displays server performance statistics (CPU, FPS, Uptime, etc.)</td>
    </tr>
    <tr id='user'>
      <td className='name'>user `<name|#userid>`</td>
      <td className='desc'>Shows the `userinfo` for a specific player</td>
    </tr>
    <tr id='users'>
      <td className='name'>users</td>
      <td className='desc'>Shows a list of players on the server</td>
    </tr>
    <tr id='rcon'>
      <td className='name'>rcon `<command>`</td>
      <td className='desc'>Sends a command to a remote server via RCON<br/>Requires `rcon_password` to be set beforehand <a className='ref-link' href='/docs/refs/configuration/cvars#rcon_password'/></td>
    </tr>
    <tr id='log'>
      <td className='name'>log `<on|off>`</td>
      <td className='desc'>Enables or disables server logging</td>
    </tr>
    <tr id='shutdownserver'>
      <td className='name'>shutdownserver</td>
      <td className='desc'>Shuts down the client and any local server it is running</td>
    </tr>
    <tr id='listen'>
      <td className='name'>listen `<ip>`</td>
      <td className='desc'>Enables/disables a listen server on the specified IP</td>
    </tr>
    <tr id='logaddress'>
      <td className='name'>logaddress `<ip:port>`</td>
      <td className='desc'>Sets a single remote address for sending server logs</td>
    </tr>
    <tr id='logaddress_add'>
      <td className='name'>logaddress_add `<ip:port>`</td>
      <td className='desc'>Adds a remote address for sending server logs</td>
    </tr>
    <tr id='logaddress_del'>
      <td className='name'>logaddress_del `<ip:port>`</td>
      <td className='desc'>Removes an address from the log recipients list</td>
    </tr>
    <tr id='maps'>
      <td className='name'>maps `[filter]`</td>
      <td className='desc'>Displays a list of available maps<br/><br/>*For example:*<br/>`maps de_*`</td>
    </tr>
    <tr id='motd'>
      <td className='name'>motd</td>
      <td className='desc'>Displays the contents of `motd.txt` in the console</td>
    </tr>
    <tr id='motd_write'>
      <td className='name'>motd_write `<content>`</td>
      <td className='desc'>Writes the specified text to `motd.txt`</td>
    </tr>
    <tr id='resetrcon'>
      <td className='name'>resetrcon</td>
      <td className='desc'>Resets failed RCON attempt counters</td>
    </tr>
    <tr id='hpkextract'>
      <td className='name'>hpkextract `<name>` `[all | single index]`</td>
      <td className='desc'>Extracts content from a `custom.hpk` file, which stores player sprays</td>
    </tr>
    <tr id='hpklist'>
      <td className='name'>hpklist `<name>`</td>
      <td className='desc'>Lists the files inside a `custom.hpk` file</td>
    </tr>
    <tr id='hpkremove'>
      <td className='name'>hpkremove `<name>` `[index]`</td>
      <td className='desc'>Removes a file from a `custom.hpk` file</td>
    </tr>
    <tr id='hpkval'>
      <td className='name'>hpkval `<name>`</td>
      <td className='desc'>Validates the integrity of a `custom.hpk` file</td>
    </tr>
    <tr id='pause'>
      <td className='name'>pause</td>
      <td className='desc'>Pauses or unpauses the game on the server<br/>Players can also use this command if `pausable` is set to `1` <a className='ref-link' href='/docs/refs/configuration/cvars#pausable'/></td>
    </tr>
    <tr id='setpause'>
      <td className='name'>setpause</td>
      <td className='desc'>Pauses the game on the server</td>
    </tr>
    <tr id='unpause'>
      <td className='name'>unpause</td>
      <td className='desc'>Unpauses the game on the server</td>
    </tr>
    <tr id='setpos'>
      <td className='name'>setpos `<x>` `<y>` `[z]` `[yaw pitch roll]`</td>
      <td className='desc'><div className='text'>Instantly moves the player to the specified coordinates<br/>Requires `sv_cheats 1`</div><div className='desc-meta'><VersionBadge type='added' since='2.3.0.0'/></div></td>
    </tr>
    <tr id='heartbeat'>
      <td className='name'>heartbeat</td>
      <td className='desc'><div className='text'>Sends a 'heartbeat' signal to Steam master servers</div><div className='desc-meta'><VersionBadge type='deprecated' since='2.0.0.0'/></div></td>
    </tr>
    <tr id='setmaster'>
      <td className='name'>setmaster `<enable/disable>`</td>
      <td className='desc'><div className='text'>A deprecated command for managing master servers</div><div className='desc-meta'><VersionBadge type='deprecated' since='2.0.0.0'/></div></td>
    </tr>
  </tbody>
</Table>

## Spectating & Media
<Table>
  <thead><tr><th>Command</th><th>Description</th></tr></thead>
  <tbody>
    <tr id='play'>
      <td className='name'>play `<path/to/file.wav>`</td>
      <td className='desc'>Plays the specified sound file</td>
    </tr>
    <tr id='playvol'>
      <td className='name'>playvol `<path>` `<volume>`</td>
      <td className='desc'>Plays a sound at the specified volume (from 0.0 to 1.0)</td>
    </tr>
    <tr id='stopsound'>
      <td className='name'>stopsound</td>
      <td className='desc'>Immediately stops all sounds playing in the game</td>
    </tr>
    <tr id='soundfade'>
      <td className='name'>soundfade `<volume>` `<fadetime>`</td>
      <td className='desc'>Smoothly fades the overall volume to a target value over a specified time in seconds</td>
    </tr>
    <tr id='speak'>
      <td className='name'>speak `<sentence>`<br/>spk `<sentence>`</td>
      <td className='desc'>Plays a constructed sentence from multiple sound files</td>
    </tr>
    <tr id='cd'>
      <td className='name'>cd</td>
      <td className='desc'>Controls the CD/MP3 player<br/><br/>
      `mp3track <track_id>` — play an MP3 track<br/>
      `play <track_id>` — play a track from a CD<br/>
      `playfile <file_name>` — play an MP3 file<br/>
      `loop <track_id>` — loop a CD track<br/>
      `loopfile <file_name>` — loop an MP3 file<br/>
      `stop` — stop playback<br/>
      `fadeout` — fade out the current track; fade time is determined by the `MP3FadeTime` cvar<br/>
      `pause` — pause playback<br/>
      `resume` — resume playback<br/>
      `on` — enable audio<br/>
      `off` — disable audio<br/>
      `reset` — reset track positions<br/>
      `remap` `<track_id1>` `<track_id2>` `...` — set the order of CD tracks<br/>
      `close` — close the CD drive<br/>
      `mp3info` — show additional info about the current MP3 track<br/>
      `eject` — eject the CD drive<br/>
      `info` — show additional info</td>
    </tr>
    <tr id='mp3'>
      <td className='name'>mp3</td>
      <td className='desc'>Controls the MP3 player<br/><br/>
      `play <track_id>` — play a CD track<br/>
      `playfile <file_name>` — play an MP3 file<br/>
      `loop <track_id>` — loop a CD track<br/>
      `loopfile <file_name>` — loop an MP3 file<br/>
      `stop` — stop playback</td>
    </tr>
    <tr id='screenshot'>
      <td className='name'>screenshot</td>
      <td className='desc'>Takes a screenshot in TGA format</td>
    </tr>
    <tr id='snapshot'>
      <td className='name'>snapshot</td>
      <td className='desc'>Takes a screenshot in BMP format</td>
    </tr>
    <tr id='thirdperson'>
      <td className='name'>thirdperson</td>
      <td className='desc'>Enables third-person view<br/>Requires `sv_cheats 1`</td>
    </tr>
    <tr id='firstperson'>
      <td className='name'>firstperson</td>
      <td className='desc'>Returns to first-person view</td>
    </tr>
    <tr id='commentator'>
      <td className='name'>commentator `<0|1>`</td>
      <td className='desc'>Enables (1) or disables (0) commentator mode when spectating via HLTV</td>
    </tr>
    <tr id='spec_help'>
      <td className='name'>spec_help</td>
      <td className='desc'>Shows help for spectator commands</td>
    </tr>
    <tr id='spec_menu'>
      <td className='name'>spec_menu `<0|1>`</td>
      <td className='desc'>Opens the spectator mode settings menu</td>
    </tr>
    <tr id='spec_mode'>
      <td className='name'>spec_mode `<mode>` `[pip_mode]`</td>
      <td className='desc'>Changes the spectator camera mode (first-person, third-person, free-roam)</td>
    </tr>
    <tr id='spec_toggleinset'>
      <td className='name'>spec_toggleinset</td>
      <td className='desc'>Toggles picture-in-picture (PIP) mode for spectators</td>
    </tr>
    <tr id='spec_decal'>
      <td className='name'>spec_decal</td>
      <td className='desc'><div className='text'>Applies a spray logo in spectator mode</div><div className='desc-meta'><VersionBadge type='deprecated' since='2.0.0.0'/></div></td>
    </tr>
  </tbody>
</Table>

## Action Commands (for Binds)

:::info
Commands in this table have two forms, distinguished by a prefix: \
`+` — the action starts (key is held) \
`-` — the action ends (key is released) \
They are designed to be bound to keys using the `bind` command \
 \
*For example:* \
`bind mouse1 +attack`
:::

<Table>
  <thead><tr><th>Action</th><th>Description</th></tr></thead>
  <tbody>
    <tr id='attack'>
      <td className='name'>attack</td><td className='desc'>Primary weapon attack</td>
    </tr>
    <tr id='attack2'>
      <td className='name'>attack2</td><td className='desc'>Alternate weapon attack</td>
    </tr>
    <tr id='forward'>
      <td className='name'>forward</td><td className='desc'>Move forward</td>
    </tr>
    <tr id='back'>
      <td className='name'>back</td><td className='desc'>Move backward</td>
    </tr>
    <tr id='moveleft'>
      <td className='name'>moveleft</td><td className='desc'>Strafe left</td>
    </tr>
    <tr id='moveright'>
      <td className='name'>moveright</td><td className='desc'>Strafe right</td>
    </tr>
    <tr id='moveup'>
      <td className='name'>moveup</td><td className='desc'>Move up (ladders, swimming)</td>
    </tr>
    <tr id='movedown'>
      <td className='name'>movedown</td><td className='desc'>Move down (ladders, swimming)</td>
    </tr>
    <tr id='left'>
      <td className='name'>left</td><td className='desc'>Turn left (keyboard)</td>
    </tr>
    <tr id='right'>
      <td className='name'>right</td><td className='desc'>Turn right (keyboard)</td>
    </tr>
    <tr id='lookup'>
      <td className='name'>lookup</td><td className='desc'>Look up (keyboard)</td>
    </tr>
    <tr id='lookdown'>
      <td className='name'>lookdown</td><td className='desc'>Look down (keyboard)</td>
    </tr>
    <tr id='jump'>
      <td className='name'>jump</td><td className='desc'>Jump</td>
    </tr>
    <tr id='duck'>
      <td className='name'>duck</td><td className='desc'>Crouch</td>
    </tr>
    <tr id='reload'>
      <td className='name'>reload</td><td className='desc'>Reload weapon</td>
    </tr>
    <tr id='use'>
      <td className='name'>use</td><td className='desc'>Use object (buttons, doors)</td>
    </tr>
    <tr id='speed'>
      <td className='name'>speed</td><td className='desc'>Walk slowly</td>
    </tr>
    <tr id='strafe'>
      <td className='name'>strafe</td><td className='desc'>Enables strafe mode, where mouse movement left/right causes side-stepping</td>
    </tr>
    <tr id='mlook'>
      <td className='name'>mlook</td><td className='desc'>Enables vertical view control with the mouse</td>
    </tr>
    <tr id='klook'>
      <td className='name'>klook</td><td className='desc'>Enables view control with the keyboard</td>
    </tr>
    <tr id='jlook'>
      <td className='name'>jlook</td><td className='desc'>Enables view control with a joystick</td>
    </tr>
    <tr id='voicerecord'>
      <td className='name'>voicerecord</td><td className='desc'>Activates the microphone for voice chat</td>
    </tr>
    <tr id='showscores'>
      <td className='name'>showscores<br/>score</td><td className='desc'>Shows the scoreboard</td>
    </tr>
    <tr id='commandmenu'>
      <td className='name'>commandmenu</td><td className='desc'>Shows the command menu (radio commands, etc.)</td>
    </tr>
    <tr id='camdistance'>
      <td className='name'>camdistance<br/>camin<br/>camout<br/>camyawleft<br/>camyawright<br/>campitchup<br/>campitchdown<br/>cammousemove</td><td className='desc'>Commands for controlling the camera in third-person view</td>
    </tr>
    <tr id='alt1'>
      <td className='name'>alt1</td><td className='desc'>An alternative action, typically used for special abilities in mods</td>
    </tr>
    <tr id='graph'>
      <td className='name'>graph</td><td className='desc'>Shows the performance graph (`net_graph`)</td>
    </tr>
    <tr id='break'>
      <td className='name'>break</td><td className='desc'><div className='text'>Obsolete command<br/>Does nothing</div><div className='desc-meta'><VersionBadge type='deprecated' since='2.0.0.0'/></div></td>
    </tr>
    <tr id='nvgadjust'>
      <td className='name'>nvgadjust</td>
      <td className='desc'>
        <div className='text'>
          Adjusts the brightness (alpha) of the night vision effect when active<br/>`+nvgadjust` increases brightness<br/>`-nvgadjust` decreases it<br/>This command is a legacy from the era of CRT   monitors<br/>At that time, brightness and contrast varied greatly between models, and the default value could be too dark<br/>The command allowed players to calibrate the NVG brightness for their   specific monitor<br/>It is no longer used and is considered obsolete in modern systems
        </div>
        <div className='desc-meta'>
          <VersionBadge type='deprecated' since='2.0.0.0'/>
        </div>
      </td>
    </tr>
  </tbody>
</Table>

## Console
<Table>
  <thead><tr><th>Command</th><th>Description</th></tr></thead>
  <tbody>
    <tr id='clear'>
      <td className='name'>clear</td>
      <td className='desc'>Clears all text from the console</td>
    </tr>
    <tr id='toggleconsole'>
      <td className='name'>toggleconsole</td>
      <td className='desc'>Opens or closes the console</td>
    </tr>
    <tr id='hideconsole'>
      <td className='name'>hideconsole</td>
      <td className='desc'>Hides the console</td>
    </tr>
    <tr id='echo'>
      <td className='name'>echo `<text>`</td>
      <td className='desc'>Prints the specified text to the console</td>
    </tr>
    <tr id='cvarlist'>
      <td className='name'>cvarlist `[template]`</td>
      <td className='desc'>Lists all console variables (cvars)<br/>A template can be used for searching</td>
    </tr>
    <tr id='cmdlist'>
      <td className='name'>cmdlist `[template]`</td>
      <td className='desc'>Lists all console commands</td>
    </tr>
    <tr id='find'>
      <td className='name'>find `<string>`</td>
      <td className='desc'><div className='text'>Finds commands and variables containing the specified text in their name or description</div><div className='desc-meta'><VersionBadge type='added' since='2.0.0.0'/></div></td>
    </tr>
    <tr id='condump'>
      <td className='name'>condump</td>
      <td className='desc'>Writes the entire console text to the `condump.txt` file</td>
    </tr>
  </tbody>
</Table>

## System
<Table>
  <thead><tr><th>Command</th><th>Description</th></tr></thead>
  <tbody>
    <tr id='quit'>
      <td className='name'>quit<br/>exit</td>
      <td className='desc'>Exits the game</td>
    </tr>
    <tr id='version'>
      <td className='name'>version</td>
      <td className='desc'>Displays engine and build version information in the console</td>
    </tr>
    <tr id='gamedir'>
      <td className='name'>gamedir `<gamedir>`</td>
      <td className='desc'>Shows or changes the current game directory (mod)</td>
    </tr>
    <tr id='save'>
      <td className='name'>save `<filename>`</td>
      <td className='desc'>Saves the current game (for single-player)</td>
    </tr>
    <tr id='load'>
      <td className='name'>load `<filename>`</td>
      <td className='desc'>Loads a saved game</td>
    </tr>
    <tr id='autosave'>
      <td className='name'>autosave</td>
      <td className='desc'>Performs an autosave (for single-player)</td>
    </tr>
    <tr id='reload'>
      <td className='name'>reload</td>
      <td className='desc'>Reloads the most recent save game</td>
    </tr>
    <tr id='escape'>
      <td className='name'>escape</td>
      <td className='desc'><div className='text'>Simulates an Escape key press, typically used to close menus</div><div className='desc-meta'><VersionBadge type='deprecated' since='2.0.0.0'/></div></td>
    </tr>
  </tbody>
</Table>

## Debugging & Development
<Table>
  <thead><tr><th>Command</th><th>Description</th></tr></thead>
  <tbody>
    <tr id='cl_messages'>
      <td className='name'>cl_messages</td>
      <td className='desc'><div className='text'>Displays statistics on received network messages, including a detailed breakdown of `svc_temp_entity` and `UserMessage`</div><div className='desc-meta'><VersionBadge type='changed' since='2.0.0.0'/></div></td>
    </tr>
    <tr id='entities'>
      <td className='name'>entities</td>
      <td className='desc'><div className='text'>Lists all entities on the server</div><div className='desc-meta'><VersionBadge type='changed' since='2.0.0.0'/></div></td>
    </tr>
    <tr id='condebug'>
      <td className='name'>condebug</td>
      <td className='desc'>Enables logging of all console output to `qconsole.log`</td>
    </tr>
    <tr id='contimes'>
      <td className='name'>contimes</td>
      <td className='desc'>Displays an overlay with console command execution times</td>
    </tr>
    <tr id='decallist'>
      <td className='name'>decallist</td>
      <td className='desc'><div className='text'>Lists active decals on the map</div><div className='desc-meta'><VersionBadge type='added' since='2.2.1.0'/></div></td>
    </tr>
    <tr id='delta_clear'>
      <td className='name'>delta_clear</td>
      <td className='desc'>Resets delta compression statistics</td>
    </tr>
    <tr id='delta_stats'>
      <td className='name'>delta_stats</td>
      <td className='desc'>Shows statistics on network delta compression</td>
    </tr>
    <tr id='dev_overview_takeshot'>
      <td className='name'>dev_overview_takeshot</td>
      <td className='desc'><div className='text'>Takes a top-down screenshot of the map for the `overview` and creates a `.txt` file with coordinates</div><div className='desc-meta'><VersionBadge type='added' since='2.5.0.0'/></div></td>
    </tr>
    <tr id='envmap'>
      <td className='name'>envmap</td>
      <td className='desc'>Generates 6 screenshots of the current scene to create environment maps (cubemaps)</td>
    </tr>
    <tr id='fullserverinfo'>
      <td className='name'>fullserverinfo `<complete info string>`</td>
      <td className='desc'>Displays the server's `userinfo` string in the console</td>
    </tr>
    <tr id='http_tracking'>
      <td className='name'>http_tracking</td>
      <td className='desc'><div className='text'>Debug information from the internal ISteamHTTP implementation</div><div className='desc-meta'><VersionBadge type='added' since='2.0.0.0'/></div></td>
    </tr>
    <tr id='httpstop'>
      <td className='name'>httpstop</td>
      <td className='desc'>Resets the FastDL cache, forcing the client to re-attempt downloading necessary files from the fast download server</td>
    </tr>
    <tr id='rescount'>
      <td className='name'>rescount</td>
      <td className='desc'><div className='text'>Shows the number of precached resources on the server</div><div className='desc-meta'><VersionBadge type='added' since='2.5.6.0'/></div></td>
    </tr>
    <tr id='reslist'>
      <td className='name'>reslist `<sound | model | decal | generic | event>`</td>
      <td className='desc'><div className='text'>Lists all precached resources (sounds, models, etc.)</div><div className='desc-meta'><VersionBadge type='added' since='2.5.6.0'/></div></td>
    </tr>
    <tr id='localinfo'>
      <td className='name'>localinfo `<key>` `<value>`</td>
      <td className='desc'>Displays debug information about the local client in the console</td>
    </tr>
    <tr id='serverinfo'>
      <td className='name'>serverinfo `<key>` `<value>`</td>
      <td className='desc'>Shows/sets the server's `userinfo` string</td>
    </tr>
    <tr id='showinfo'>
      <td className='name'>showinfo</td>
      <td className='desc'>Shows the server's `userinfo`</td>
    </tr>
    <tr id='soundinfo'>
      <td className='name'>soundinfo</td>
      <td className='desc'>Shows information about the current sound device and its state</td>
    </tr>
    <tr id='waveplaylen'>
      <td className='name'>waveplaylen `<path/to/file.wav>`</td>
      <td className='desc'>Shows the duration of the specified `.wav` file</td>
    </tr>
    <tr id='gg'>
      <td className='name'>gg `<filename>`</td>
      <td className='desc'>Runs the built-in benchmark (Game Gauge) by playing a demo and measuring performance</td>
    </tr>
    <tr id='timedemo'>
      <td className='name'>timedemo `<filename>`</td>
      <td className='desc'>Plays a demo file at maximum speed and reports the average FPS to the console</td>
    </tr>
    <tr id='timerefresh'>
      <td className='name'>timerefresh</td>
      <td className='desc'>Rotates the camera 360 degrees while measuring and reporting the average FPS</td>
    </tr>
    <tr id='pointfile'>
      <td className='name'>pointfile</td>
      <td className='desc'>Loads a `{map}.pts` file generated by the map compiler to show geometry 'leaks'</td>
    </tr>
    <tr id='getpos'>
      <td className='name'>getpos</td>
      <td className='desc'>
        <div className='text'>
          Displays the player's current coordinates and view angles in the console<br/><br/>
          Shows the **server-side** position received from the last server update<br/>This data may differ slightly from what you see on screen due to interpolation<br/><br/>
          Output is presented in a human-readable `origin` and `angles` format
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
          Displays the current coordinates and view angles in spectator mode<br/><br/>
          *By default:*<br/>
              Shows the **client-side** (visual) camera position

          *With argument `2`:*<br/>
            `spec_pos 2` shows the **server-side** position
        </div>
        <div className='desc-meta'>
          <VersionBadge type='changed' since='2.5.0.0'/>
        </div>
      </td>
    </tr>
    <tr id='cacheflush'>
      <td className='name'>cacheflush</td>
      <td className='desc'><div className='text'>Clears the resource cache; all sounds, models, and sprites will be reloaded the next time they appear on the map<br/>Requires `sv_cheats 1`<br/>Старое название `flush`</div><div className='desc-meta'><VersionBadge type='changed' since='2.0.0.0'/></div></td>
    </tr>
    <tr id='cachelist'>
      <td className='name'>cachelist</td>
      <td className='desc'><div className='text'>Writes a list of cached resources to the `mem.txt` file</div><div className='desc-meta'><VersionBadge type='added' since='2.0.0.0'/></div></td>
    </tr>
    <tr id='cachemodels'>
      <td className='name'>cachemodels</td>
      <td className='desc'><div className='text'>Writes a list of currently cached models to the `mem.txt` file</div><div className='desc-meta'><VersionBadge type='added' since='2.0.0.0'/></div></td>
    </tr>
    <tr id='cachesounds'>
      <td className='name'>cachesounds</td>
      <td className='desc'><div className='text'>Writes a list of currently cached sounds to the `mem.txt` file</div><div className='desc-meta'><VersionBadge type='added' since='2.0.0.0'/></div></td>
    </tr>
    <tr id='spritelist'>
      <td className='name'>spritelist `[all]`</td>
      <td className='desc'><div className='text'>Lists all loaded sprites</div><div className='desc-meta'><VersionBadge type='added' since='2.0.0.0'/></div></td>
    </tr>
    <tr id='soundlist'>
      <td className='name'>soundlist</td>
      <td className='desc'>Lists all loaded sounds</td>
    </tr>
    <tr id='hunklist'>
      <td className='name'>hunklist</td>
      <td className='desc'><div className='text'>Writes information about 'hunk' memory allocation to the `mem.txt` file</div><div className='desc-meta'><VersionBadge type='added' since='2.2.1.0'/></div></td>
    </tr>
    <tr id='mcache'>
      <td className='name'>mcache</td>
      <td className='desc'><div className='text'>Shows a list of all precached models on the server</div><div className='desc-meta'><VersionBadge type='changed' since='2.0.0.0'/></div></td>
    </tr>
    <tr id='r_clearbeams'>
      <td className='name'>r_clearbeams</td>
      <td className='desc'><div className='text'>Removes all active 'beams' from the map</div><div className='desc-meta'><VersionBadge type='added' since='2.5.0.0'/></div></td>
    </tr>
    <tr id='r_cleardecals'>
      <td className='name'>r_cleardecals `[permanent]`</td>
      <td className='desc'><div className='text'>Clears all temporary decals (bullet holes, blood) from the map<br/>With the `permanent` argument, also removes permanent decals</div><div className='desc-meta'><VersionBadge type='added' since='2.3.2.0'/></div></td>
    </tr>
    <tr id='get_userinfo'>
      <td className='name'>@get_userinfo `<#userid|@index|name|all>`</td>
      <td className='desc'><div className='text'>Displays the full `userinfo` string for the specified players on the server</div><div className='desc-meta'><VersionBadge type='added' since='2.5.0.0'/></div></td>
    </tr>
    <tr id='depot_dump'>
      <td className='name'>@depot_dump</td>
      <td className='desc'><div className='text'>Displays a list of all available tags (versions) in the update repository</div><div className='desc-meta'><VersionBadge type='added' since='2.0.0.0'/></div></td>
    </tr>
    <tr id='depot_info'>
      <td className='name'>@depot_info</td>
      <td className='desc'><div className='text'>Displays information about the current update repository</div><div className='desc-meta'><VersionBadge type='added' since='2.0.0.0'/></div></td>
    </tr>
    <tr id='hud_radar_mapshot'>
      <td className='name'>hud_radar_mapshot `[zoom]` `[zmin]` `[zmax]` `[quality]`</td>
      <td className='desc'><div className='text'>Recreates a top-down screenshot of the map and a `.txt` coordinate file for the advanced HUD radar</div><div className='desc-meta'><VersionBadge type='added' since='2.5.0.0'/></div></td>
    </tr>
    <tr id='fullinfo'>
      <td className='name'>fullinfo `<string>`</td>
      <td className='desc'>Sends a complete `userinfo` string to the server</td>
    </tr>
    <tr id='gl_dump'>
      <td className='name'>gl_dump</td>
      <td className='desc'><div className='text'>Displays detailed debug information about the OpenGL renderer (version, vendor, extensions)</div><div className='desc-meta'><VersionBadge type='changed' since='2.0.0.0'/></div></td>
    </tr>
    <tr id='gl_texels'>
      <td className='name'>gl_texels</td>
      <td className='desc'><div className='text'>Shows the number of texels currently in use</div><div className='desc-meta'><VersionBadge type='changed' since='2.0.0.0'/></div></td>
    </tr>
    <tr id='gl_textures'>
      <td className='name'>gl_textures</td>
      <td className='desc'><div className='text'>Lists all textures currently loaded into video memory</div><div className='desc-meta'><VersionBadge type='added' since='2.0.0.0'/></div></td>
    </tr>
    <tr id='interp'>
      <td className='name'>interp</td>
      <td className='desc'><div className='text'>A debug command for displaying client-side interpolation status</div><div className='desc-meta'><VersionBadge type='deprecated' since='2.0.0.0'/></div></td>
    </tr>
    <tr id='mem_stats'>
      <td className='name'>mem_stats</td>
      <td className='desc'>Displays detailed statistics on engine memory usage</td>
    </tr>
  </tbody>
</Table>

## Service Commands

:::info
These commands are intended for internal use by the engine and Game UI \
They may require a game restart or cause unexpected behavior if invoked manually
:::

<Table>
  <thead><tr><th>Command</th><th>Description</th></tr></thead>
  <tbody>
    <tr id='_restart'>
      <td className='name'>_restart</td>
      <td className='desc'>Restarts the game engine completely<br/>Used to apply settings that require a restart</td>
    </tr>
    <tr id='_setvideomode'>
      <td className='name'>_setvideomode `<w>` `<h>` `[video_mode]`</td>
      <td className='desc'><div className='text'>Sets the screen resolution and display mode, then requires a restart via `_restart`<br/>Called from the video settings menu</div><div className='desc-meta'><VersionBadge type='changed' since='2.5.6.0'/></div></td>
    </tr>
    <tr id='_sethdmodels'>
      <td className='name'>_sethdmodels `<0|1>`</td>
      <td className='desc'>Enables or disables HD models and restarts the game to apply the change</td>
    </tr>
    <tr id='_setaddons_folder'>
      <td className='name'>_setaddons_folder `<0|1>`</td>
      <td className='desc'>Enables or disables the use of the `_addons` folder and restarts the game</td>
    </tr>
    <tr id='_set_vid_level'>
      <td className='name'>_set_vid_level `<0|1>`</td>
      <td className='desc'>Sets the video detail level (Low/High) and restarts the game</td>
    </tr>
    <tr id='_careeraudio'>
      <td className='name'>_careeraudio</td>
      <td className='desc'>Internal command for managing audio in `CS:Condition-Zero`'s 'Career' mode</td>
    </tr>
    <tr id='_setgamedir'>
      <td className='name'>_setgamedir `<gamedir>`</td>
      <td className='desc'>Internal command for changing the game directory</td>
    </tr>
    <tr id='stuffcmds'>
      <td className='name'>stuffcmds</td>
      <td className='desc'>
      A service command that executes at the final stage of loading user configs<br/><br/>
      Its main purpose is to apply parameters, cvars, and commands specified in the command line on game launch<br/>This ensures that command-line parameters always have the **highest priority**, overriding any values from `config.cfg` or `userconfig.cfg`<br/><br/>Invoking this command manually from the console is useless
      </td>
    </tr>
  </tbody>
</Table>
