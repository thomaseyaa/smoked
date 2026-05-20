#!/usr/bin/env node

// Print a one-line discoverability message after `npm install -g smoked`.
// Stays silent when the install is non-interactive (CI, Docker) or already
// linked to a local checkout via `npm link`.

if (process.env.npm_config_global !== 'true') return;
if (!process.stdout.isTTY) return;

console.log('');
console.log('  \x1b[1m🔥 smoked installed.\x1b[0m');
console.log('  Run \x1b[33msmoked\x1b[0m to see your current session cost.');
console.log('  Run \x1b[33msmoked install-shortcut\x1b[0m to enable \x1b[33m/smoked\x1b[0m in Claude Code.');
console.log('');
