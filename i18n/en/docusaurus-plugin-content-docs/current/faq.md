---
title: FAQ
description: Answers to common questions about GoldClient security, configuration, and compatibility.
sidebar_position: 150
feedback: true
---

:::warning Section under development
This documentation is currently under active development and revision.<br/>
Errors, inaccuracies, missing content, or missing translations may occur.<br/>
Please follow updates to receive the most up-to-date information.
:::

# Frequently Asked Questions
<div className="faq-container">

Here you can find answers to the most common user questions. \
If you did not find a solution to your problem, please let us know by creating an Issue on [GitHub](https://github.com/goldclient-plus/GoldSrc-Tracker/issues)


---

## 🛡️ Security {#security}

<details>
  <summary>**Will I get a VAC ban in Steam for using GoldClient?**</summary>
  <div>
    **No.** \
    GoldClient is a completely independent client and does not inject into Steam or the original CS 1.6 client processes.

    The client is installed into a separate directory and does not modify executable files (.exe, .dll) of the official game version. \
    Steam integration is used only to retrieve public information (status, nickname, avatar) via the official Steam API.

    :::info
    Installing GoldClient directly into the Steam directory is technically possible and does not pose any danger.

    However, Steam has a «Verify integrity of game files» feature, which automatically restores original game files. \
    In this case, all custom client files will be removed or replaced, effectively resetting the client build.

    To avoid such situations, it is recommended to install GoldClient into a separate directory. \
    If necessary, the client can be added to Steam as a non-Steam game and launched directly from the Steam launcher.
    :::
  </div>
</details>

<details>
  <summary>**My antivirus flags a file as a threat. Is it a virus?**</summary>
  <div>
    **This is a false positive.**

    Since GoldClient is modified software and does not have an expensive digital signature (used by large corporations), some antivirus solutions may treat it with suspicion.

    The antivirus cannot find the file in its database of known applications and may temporarily mark it as suspicious. \
    This is especially common with new client versions, as binaries are rebuilt for each release and have no accumulated reputation due to the lack of a digital signature.

    As the client becomes more widely distributed and the number of installations increases, such warnings usually disappear. \
    This behavior is particularly common with **Windows Defender**.
  </div>
</details>

<details>
  <summary>**Is GoldClient considered a cheat?**</summary>
  <div>
    **No.**

    GoldClient does not contain cheats (aimbot, wallhack, or other means of gaining an unfair advantage). \
    The client does not modify game logic, shooting mechanics, or the network protocol.

    At the same time, GoldClient provides extended client-side features (improved radar, crosshair, visual elements),
    which may be restricted or prohibited by the rules of certain servers, mix projects, or esports leagues.

    The decision on whether the client is allowed always remains with the server administration.
    Before participating in tournaments or mixes, it is recommended to clarify the project rules.
  </div>
</details>

---

## ⚙️ Configuration and Features {#configuration}

<details>
  <summary>**How do I transfer my config (config.cfg) from Steam?**</summary>
  <div>
    You can copy the `config.cfg` and `userconfig.cfg` files from the Steam directory (`steamapps/common/Half-Life/cstrike`) to the `cstrike` folder inside GoldClient.

    :::info
    GoldClient uses its own and additional console variables and commands.\
    Therefore, if possible, do not replace the config entirely; instead, manually transfer only your binds and other personal settings to avoid conflicts with new client features.
    :::
  </div>
</details>

<details>
  <summary>**How do I enable Discord Rich Presence (RPC) and the Steam avatar?**</summary>
  <div>
    1. Make sure Discord and Steam are running
    2. Open GoldClient settings (Settings —> "System" tab)
    3. Enable **Steam Integration**
    4. No separate setting is required for Discord (it is enabled automatically if Discord is running)
    5. Save the settings and restart the game
  </div>
</details>

---

## 🚫 Compatibility and Anti-Cheats {#compatibility-anticheat}

<details>
  <summary>**Does GoldClient pass anti-cheat scanners (Wargods, ECD)?**</summary>
  <div>
    GoldClient does not contain cheats; however, using a custom client may result in warnings or flags in scanner reports. \
    Compatibility with ECD is generally preserved. \
    Compatibility with Wargods is not guaranteed and may depend on the scanner version.

    In case of a check, it is recommended to inform the server administration in advance that a custom client is being used.
  </div>
</details>

<details>
  <summary>**Does the client work with the GameGuard anti-cheat?**</summary>
  <div>
    **No.**

    The anti-cheat operates on a 'whitelist' principle: it blocks the game launch if file hashes differ from the original Steam files. \
    Any modified build (not only GoldClient) will fail such a check.
  </div>
</details>

<details>
  <summary>**Do plugins work on a local GoldClient server?**</summary>
  <div>
    **Yes.**

    When creating a local server, GoldClient is fully compatible with server-side plugins and addons. \
    **AMX Mod X version 1.9 and higher** is supported, as well as plugins using **ReAPI**. \
    This is achieved through **ReHLDS API** support on the client side, which ensures proper server and plugin functionality when running a local server.
  </div>
</details>

<details>
  <summary>**Is HLAE supported?**</summary>
  <div>
    **No.**

    HLAE (Half-Life Advanced Effects) relies on predictable memory addresses of the original Steam client. \
    Due to significant changes in code and memory layout, HLAE cannot correctly attach to GoldClient.
  </div>
</details>

<details>
  <summary>**Which OS Platform versions are supported?**</summary>
  <div>
    - **Windows 7 / 10 / 11:** Full support, recommended systems
    - **Windows XP (SP2/SP3):** The client can run, but some features may work incorrectly
    - **Linux / macOS:** No native support. Running via Wine/Proton is possible, but stability is not guaranteed
  </div>
</details>

</div>
