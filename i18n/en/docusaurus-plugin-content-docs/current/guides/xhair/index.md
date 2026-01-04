---
id: xhair-guide
title: How to Configure the Perfect Crosshair in CS 1.6 | A Complete Guide
description: A detailed guide to configuring the crosshair in CS 1.6 using GoldClient — small, static, dynamic crosshair, or red dot. Learn how to create the perfect crosshair for your playstyle.
sidebar_label: Crosshair Setup
feedback: true
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import red_dot from '@site/docs/guides/xhair/img/red_dot.webp';

import static_small  from '@site/docs/guides/xhair/img/static_small.webp';
import static_medium from '@site/docs/guides/xhair/img/static_medium.webp';

import dynamic_small from '@site/docs/guides/xhair/img/dynamic_small.webp';
import dynamic_medium from '@site/docs/guides/xhair/img/dynamic_medium.webp';

import XhairConfig from '@site/src/components/Misc/Xhair';

# Full Crosshair Customization in CS 1.6

The right crosshair is key to accurate shooting in Counter-Strike 1.6.\
The default settings can be awkward and distracting.\
In GoldClient, we've built in powerful customization tools that allow you to create a crosshair\
perfectly suited to your playstyle, monitor, and resolution.

In this guide, we'll demonstrate the most popular configs and break down\
how each console variable works.

---

## Popular Crosshairs {#popular-crosshairs}

Don't want to mess with console variables?\
Just copy a ready-made config into your file or the console!

### Red Dot {#red-dot}

Ideal for those who value minimalism, maximum visibility, and focus.\
A **red dot crosshair** doesn't obstruct the enemy model and helps you focus on the target.

<XhairConfig
  title="Red Dot Crosshair"
  previewSrc={red_dot}
  labelConfig='Config'
  labelConsole='Console'
  config={[
    'cl_crosshairstyle "4"',
    'cl_crosshairsize "0"',
    'cl_crosshairscale "3"',
    'cl_crosshairdot "1"',
    'cl_crosshaircolor "255 0 0"',
    'cl_crosshair_drawoutline "1"',
    'cl_crosshairthickness "2"',
    'cl_crosshair_outlinethickness "0.5"',
    'cl_crosshairusealpha "1"',
    'cl_crosshairalpha "255"',
    'cl_crosshairgap_useweaponvalue "0"'
  ]}
/>

:::tip Pro Tip
You can change the dot's thickness (`cl_crosshairthickness`) and its color (`cl_crosshaircolor`) to find the perfect option for you.
:::

### Static {#static}

A classic choice for competitive play.\
A small static crosshair provides a good field of view, doesn't expand when moving, and doesn't distract from the gameplay.

<XhairConfig
  title="Small Crosshair"
  previewSrc={static_small}
  labelConfig='Config'
  labelConsole='Console'
  config={[
    'cl_crosshairstyle "4"',
    'cl_crosshairsize "3"',
    'cl_crosshairscale "3"',
    'cl_crosshairgap "-2"',
    'cl_crosshairthickness "0"',
    'cl_crosshaircolor "50 250 50"',
    'cl_crosshair_drawoutline "0"',
    'cl_crosshairdot "0"',
    'cl_crosshairusealpha "1"',
    'cl_crosshairalpha "255"',
    'cl_crosshairgap_useweaponvalue "0"'
  ]}
/>

<XhairConfig
  title="Medium Crosshair"
  previewSrc={static_medium}
  labelConfig='Config'
  labelConsole='Console'
  config={[
    'cl_crosshairstyle "4"',
    'cl_crosshairsize "6"',
    'cl_crosshairscale "3"',
    'cl_crosshairgap "0"',
    'cl_crosshairthickness "0"',
    'cl_crosshaircolor "50 250 50"',
    'cl_crosshair_drawoutline "0"',
    'cl_crosshairdot "0"',
    'cl_crosshairusealpha "1"',
    'cl_crosshairalpha "255"',
    'cl_crosshairgap_useweaponvalue "0"'
  ]}
/>

### Dynamic {#dynamic}

This isn't just the old dynamic crosshair from 1.6.\
This crosshair accurately shows your weapon's current spread.\
It expands when shooting and moving, giving you visual feedback on when your shot will be most accurate.\
It's a dynamic crosshair that helps you learn to control recoil and spray.

<XhairConfig
  title="Small Crosshair"
  previewSrc={dynamic_small}
  labelConfig='Config'
  labelConsole='Console'
  config={[
    'cl_crosshairstyle "6"',
    'cl_crosshairsize "5"',
    'cl_crosshairscale "1"',
    'cl_crosshairgap "2"',
    'cl_crosshairthickness "1"',
    'cl_crosshaircolor "50 250 50"',
    'cl_crosshair_drawoutline "0"',
    'cl_crosshairdot "0"',
    'cl_crosshairusealpha "1"',
    'cl_crosshairalpha "255"',
    'cl_crosshairgap_useweaponvalue "0"'
  ]}
/>

<XhairConfig
  title="Medium Crosshair"
  previewSrc={dynamic_medium}
  labelConfig='Config'
  labelConsole='Console'
  config={[
    'cl_crosshairstyle "6"',
    'cl_crosshairsize "5"',
    'cl_crosshairscale "3"',
    'cl_crosshairgap "2"',
    'cl_crosshairthickness "1"',
    'cl_crosshaircolor "50 250 50"',
    'cl_crosshair_drawoutline "0"',
    'cl_crosshairdot "0"',
    'cl_crosshairusealpha "1"',
    'cl_crosshairalpha "255"',
    'cl_crosshairgap_useweaponvalue "0"'
  ]}
/>

## Cvar Breakdown {#cvar-breakdown}
**Crosshair Style - `cl_crosshairstyle`**

This is the most important console variable\
It defines the behavior of the crosshair

`0` - Default CS:GO Style (Dynamic)\
`1` - Default CS:GO Static\
`2` - Accurate Split (similar to 3, but the inner part is fixed)\
`3` - Accurate Dynamic (expands perfectly with weapon spread)\
`4` - Classic Static. Ideal for those who don't want any crosshair movement\
`5` - Legacy Style. Similar to 1.6, but with inaccurate recoil feedback\
`6` - Original. The behavior familiar to all CS 1.6 veterans

### Size and Gap {#size-and-gap}

`cl_crosshairsize` - The length of each of the four crosshair lines. For a small crosshair, use values from 1 to 4.\
`cl_crosshairgap` - The distance from the center to the lines. Negative values can be used to make the lines converge.

### Center Dot {#center-dot}

`cl_crosshairdot` - Adds a dot to the center.\
`1` - Enable\
`0` - Disable
:::info
If you set `cl_crosshairsize 0` and `cl_crosshairdot 1`, you'll get a dot-only crosshair
:::

### Color and Transparency {#color-and-transparency}

**Two different approaches to visibility**

The color of your crosshair plays a significant role.\
But even more important is how it interacts with the game world.\
There are two fundamentally different rendering modes that drastically change how the crosshair is perceived.

#### "Glow" Mode (Additive Blending) {#glow-mode-additive-blending}

**`cl_crosshairusealpha 0`**

This is the `classic` mode, familiar to many CS 1.6 veterans.\
When you set `cl_crosshairusealpha 0`, your crosshair stops being just a colored object.\
It begins to render using **additive blending**, meaning it doesn't cover textures but instead **adds its color to what's behind it**.

**Simply put, your crosshair becomes a light source.**

*   **On dark backgrounds**, it will be bright and noticeable.
*   **On light backgrounds** (like a white wall or the sky), it will almost completely **disappear**, because you can't add more brightness to maximum brightness.

**Who is this mode for?**

This mode requires **maximum concentration**.\
Since the crosshair's visibility constantly changes and can "blend" into the environment, you must intuitively feel the center of the screen.\
This style is preferred by players who find any permanent crosshair distracting and rely more on muscle memory.\
It's the choice for minimalists who only want a subtle hint of the screen's center.

#### "Translucent" Mode (Alpha Blending) {#translucent-mode-alpha-blending}

**`cl_crosshairusealpha 1`**

This is a more flexible and arguably better compromise.\
By enabling `cl_crosshairusealpha 1`, you make the crosshair a normal object whose transparency level can be set with the `cl_crosshairalpha` cvar.

**Simply put, your crosshair becomes like tinted glass or a semi-transparent sticker on the screen.**

It doesn't "glow"; it **covers** what's behind it but allows you to see through it.

* `cl_crosshairalpha "255"` - The crosshair will be **completely opaque**, like a normal drawing.\
Maximum visibility, but it might obstruct small details of an enemy model.

* `cl_crosshairalpha "180"` - The crosshair becomes **semi-transparent**. This is a great compromise: the crosshair is still perfectly visible on any background, but you can see an enemy's silhouette right through the lines.

**Who is this mode for?**

For the vast majority of players.\
It solves the main problem of the "glowing" crosshair—it **never completely disappears** on light backgrounds.\
You get a stable, predictable, and noticeable crosshair that doesn't obstruct your view.\
This allows you to focus completely on shooting, not on trying to find your crosshair on the screen.

:::tip Maximum visibility in any situation
Use a bright crosshair color (like green) together with a black outline.\
`cl_crosshair_drawoutline "1"` and `cl_crosshair_outlinethickness "0.5"`\
The bright color will contrast with dark textures, and the black outline will contrast with light ones (like the sky on `de_dust2`).
:::

### Thickness and Outline {#thickness-and-outline}

`cl_crosshairthickness` - The thickness of the crosshair lines.\
`cl_crosshair_drawoutline` - Enables a black outline around the crosshair, making it visible on any background.\
`cl_crosshair_outlinethickness` - The thickness of this outline.

### T-Shaped Crosshair {#t-shaped-crosshair}

`cl_crosshair_t` - Removes the top line, making the crosshair look like a 'T'.\
For some players, this helps to better see the enemy's head.

:::success Ready to create your perfect crosshair?
All this flexible crosshair customization and much more is available in our client.\
Stop playing with default settings!\
Download GoldClient and have fun!

:::
:::info Need more technical details?
If you want to see a full list of all console variables and their default values,\
check out the official [documentation](/docs/reference/configuration/cvars#hud--xhair) for crosshair settings and much more.
:::
