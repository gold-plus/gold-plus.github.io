(function (Prism) {
  Prism.languages.cfg = {
    'comment': {
      pattern: /(^|[^\\:])\/\/.*/,
      lookbehind: true,
      greedy: true
    },
    'variable': {
      pattern: /\b(rate|developer|console|crosshair|sensitivity|widescreen|stretchaspect|fastsprites\default_fov|hostname|brightness|gamma|texgamma|lightgamma|lambert|direct|lambert|nosound|suitvolume|bgmvolume|hisound|waterroom_type|nosound)|(fps_|r_|gl_|cl_|mp3|hud_|speak_|s_|snd_|voice_|mic_|room_|ambient_|ui_|vgui_|dev_|v_|scoreboard_|spec_|m_|con_|fov_|joy|look|zoom_|scr_|engine_|sdl_|sv_|mp_|sp_|ex_|net_|mem_|fs_|rcon_|host_|sys_)\w+/i,
      greedy: true
    },
    'command': {
      pattern: /^[a-zA-Z_][a-zA-Z0-9_]*/,
      greedy: true
    },
    'string': {
      pattern: /".*?"/,
      greedy: true
    },
    'keyword': {
        pattern: /\b(cd|BindToggle|sbind|bind|alias|incrementvar|exec|echo|exit|quit|say|say_team|map|changelevel|maxplayers|hostname|rcon_password|log(address_(add|del))?)\b/i,
        greedy: true
    },
    'action': {
        pattern: /(\+|-)\w+/i,
        greedy: true
    },
  };
}(Prism));