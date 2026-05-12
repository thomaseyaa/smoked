---
description: Show token usage and estimated cost for the current Claude Code session
---

Run the `smoked` CLI via Bash and show the output to the user exactly as-is.

Resolve the binary in this order:

1. **PATH first.** If `command -v smoked` succeeds, run `smoked`.
2. **Plugin cache fallback.** Otherwise locate the bundled binary with:
   ```bash
   ls -d "${CLAUDE_CONFIG_DIR:-$HOME/.claude}"/plugins/cache/*/smoked/*/bin/smoked 2>/dev/null | head -1
   ```
   If the result is non-empty, run `node "<that path>"`.
3. **Neither found.** Tell the user to install it with: `npm install -g smoked`.
