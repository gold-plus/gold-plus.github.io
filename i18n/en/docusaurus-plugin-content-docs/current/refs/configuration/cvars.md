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

List of all console variables (ConVar) - description, default values, usage examples.

## Contents

* [Audio](#audio)
* [Video & Graphics](#video-and-graphics)
* [HUD](#hud-interface)
* [Weapon Settings (Viewmodel)](#weapon-settings-viewmodel)
* [Scope Settings (xhair)](#xhair-scope-settings)
* [Gameplay & Client](#gameplay-and-client)
* [Developer](#developer)

## Video and graphics

<table className="docs-table">
  <thead><tr><th>Name</th><th>Description</th><th>Default value</th><th>Version</th></tr></thead>
  <tbody>
	<tr className="added"> 
		<td>`r_prefertexturefiltering`</td> 
		<td>For easy switching of texture filtering</td> 
		<td className="value">?</td><td className="status"><a href="/en/changelog/2.5.6.0">2.5.6.0</a></td> 
	</tr> 
	<tr className="modified"> 
		<td>`gl_use_shaders`</td> 
		<td>To enable the overbright effect</td> 
		<td className="value">?</td><td className="status"><a href="/en/changelog/2.5.6.0">2.5.6.0</a></td> 
	</tr> 
	<tr className="added"> 
		<td>`gl_msaa`</td> 
		<td>Smoothing level: `x2`, `x4`, `x8`, `x16`</td>
		<td className="value">?</td><td className="status"><a href="/en/changelog/2.5.6.0">2.5.6.0</a></td>
	</tr>
	<tr className="modified">
		<td>`gl_clear`</td>
		<td>Changes color to gray instead of red</td>
		<td className="value">?</td><td className="status"><a href="/en/changelog/2.5.6.0">2.5.6.0</a></td>
	</tr>
	<tr>
		<td>`cl_himodels`</td>
		<td>Enables high quality models <em>Only works in Half-Life</em></td>
		<td className="value">0</td><td className="status">-</td>
	</tr>
	<tr>
		<td>`cl_shadows`</td>
		<td>Turns on player shadows (small black circle at the bottom)</td>
		<td className="value">1</td><td className="status">-</td>
	</tr>
	<tr>
		<td>`cl_weather`</td>
		<td>Turns on weather effects like raindrops or snowflakes<br/>0 = Disabled<br/>1 = Low intensity<br/>2 = Medium intensity<br/>3 = High intensity</td>
		<td className="value">0</td><td className="status">-</td>
	</tr>
	<tr>
		<td>`cl_showfps`</td>
		<td>Shows the current FPS in the corner of the screen</td>
		<td className="value">1</td><td className="status">-</td>
	</tr>
	<tr>
		<td>`cl_fog_color`</td>
		<td>Adjusts the fog color</td>
		<td className="value">0 0 0</td><td className="status">-</td>
	</tr>
	<tr>
		<td>`cl_fog_density`</td>
		<td>Sets the fog density</td>
		<td className="value">0</td><td className="status">-</td>
	</tr>
	<tr>
		<td>`cl_fog_skybox`</td>
		<td>Turns on fog spreading to the sky</td>
		<td className="value">1</td><td className="status">-</td>
	</tr>
	<tr>
		<td>`cl_smokegren_color`</td>
		<td>Color of smoke cloud from smoke grenade</td>
		<td className="value">175 175 175</td><td className="status">-</td>
	</tr>
	<tr>
		<td>`cl_smokegren_full_density`</td>
		<td>Toggles smoke grenade's maximum smoke density</td>
		<td className="value">0</td><td className="status">-</td>
	</tr>
  </tbody>
</table>

<div className="table-legend">
  <div><span className="legend-icon added"></span> Added</div>
  <div><span className="legend-icon changed"></span> Modified</div>
  <div><span className="legend-icon removed"></span> Removed</div>
</div>
