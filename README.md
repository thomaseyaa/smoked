# 🔥 smoked

[![npm version](https://img.shields.io/npm/v/smoked?color=orange&logo=npm)](https://www.npmjs.com/package/smoked)

> See how many tokens your AI coding session is burning.

```
  🔥 smoked — session report
  ────────────────────────────────────────

  Session:  deefe71e...
  Started:  5/12/2026, 3:07:49 AM
  Turns:     11
  Responses: 12

  Tokens
  Input:          22
  Output:         2,172
  Cache create:   28,981
  Cache read:     322,093
  ────────────────────────────────────────
  Total:            353,268

  Estimated cost:   $4.21
  (what you'd pay without a subscription)

  [══]···🔥━━━━━━━━━━━━━━━━━
  🔥 a few drags in
```

`smoked` parses your local Claude Code logs (`~/.claude/sessions/` + `~/.claude/projects/`) and tells you what your session would cost without a subscription. Zero deps, zero network, single file.

## Burn states

The cigarette and tagline progress as cost climbs:

```
  $0.01   [══]🔥━━━━━━━━━━━━━━━━━━━━  💨 barely lit
  $0.5    [══]🔥━━━━━━━━━━━━━━━━━━━━  🔥 fresh pack vibes
  $3      [══]··🔥━━━━━━━━━━━━━━━━━━  🔥 a few drags in
  $10     [══]·······🔥━━━━━━━━━━━━━  🔥 burning steady
  $22     [══]···············🔥━━━━━  🔥 chain-smoking now
  $45     [══]····················💨  🔥 absolute heater
  $80     [══]····················💨  💸 lighting bills on fire
  $150    [══]····················💨  🚒 someone call the fire dept
```

The 🔥 sits at the burn line and slides toward the filter as cost rises. Past ~$30 the cigarette is fully smoked and the ember becomes 💨.

## Install

```bash
npm install -g smoked
smoked
```

For a `/smoked` slash command in Claude Code:

```bash
smoked install-shortcut
```

Or install as a plugin: `/plugin install thomaseyaa/smoked` → exposes `/smoked:cost` (namespaced per Claude Code convention).

Removal: `smoked uninstall-shortcut` and/or `npm uninstall -g smoked`.

## Other commands

```bash
smoked --list   # every session, sorted by cost
smoked --all    # cumulative total across every session
smoked --help   # everything
```

## How it works

When run from a project directory, `smoked` picks the Claude Code session whose `cwd` matches yours. Otherwise it falls back to the busy session, then to the most recently active one.

Pricing covers Opus 4.7, Sonnet 4.6, Haiku 4.5. Older / deprecated models are excluded from the cost estimate with a warning.

## Requirements

Node ≥ 18, an active Claude Code install (`smoked` reads its session files).

## License

MIT
