# Maximise Active Pane Plugin
[![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/deathau/command-uri-obsidian?style=for-the-badge&sort=semver)](https://github.com/deathau/command-uri-obsidian/releases/latest)
![GitHub All Releases](https://img.shields.io/github/downloads/deathau/command-uri-obsidian/total?style=for-the-badge)

A plugin for [Obsidian](https://obsidian.md) which allows you to run command palette commands via an obsidian:// uri.

Simply use the URI `obsidian://command?<command>` where `<command>` can either be the command's name (i.e. the text that appears in the command palette itself), or the command id, if you know it (tip: bring up the developer console and use `app.commands.commands` to view a list of all the commands). Just remember to url-encode the commands (spaces => `%20`).

Also, you can run multiple commands via a single uri by seperating them with `&`!

#### Examples:
- `obsidian://command?Random%20note:%20Open%20random%20note` — Open a random note
- `obsidian://command?Daily%20notes%3A%20Open%20today%27s%20daily%20note` — Open today's daily note
- `obsidian://command?daily-notes` — Same as above, using command id
- `obsidian://command?zk-prefixer&insert-template` — Create a new Zettlekasten note *and* open the insert template picker

### Okay, but why tho?
You can currently assign hotkeys to any command, so why bother with URI schemes for commands?

Well, basically, I just wanted a system-wide hotkey to create a new Zettlekasten note from anywhere, inside or outside Obsidian. Triggering a URI scheme seemed to be the easiest way to do that. It also opens up other possibilities, like creating a link to your daily note on your web browser's speed dial, or creating a random note shortcut that opens on startup. Not to mention it opens up uri schemes to plugins that haven't necessarily defined them.

### Compatibility

Custom plugins are only available for Obsidian v0.9.7+.

The current API of this repo targets Obsidian **v0.12.0**. 

## Installation

### From within Obsidian
From Obsidian v0.9.8, you can activate this plugin within Obsidian by doing the following:
- Open Settings > Third-party plugin
- Make sure Safe mode is **off**
- Click Browse community plugins
- Search for this plugin
- Click Install
- Once installed, close the community plugins window and activate the newly installed plugin
#### Updates
You can follow the same procedure to update the plugin

### From GitHub
- Download the Latest Release from the Releases section of the GitHub Repository
- Extract the plugin folder from the zip to your vault's plugins folder: `<vault>/.obsidian/plugins/`  
Note: On some machines the `.obsidian` folder may be hidden. On MacOS you should be able to press `Command+Shift+Dot` to show the folder in Finder.
- Reload Obsidian
- If prompted about Safe Mode, you can disable safe mode and enable the plugin.
Otherwise head to Settings, third-party plugins, make sure safe mode is off and
enable the plugin from there.

## Security
> Third-party plugins can access files on your computer, connect to the internet, and even install additional programs.

The source code of this plugin is available on GitHub for you to audit yourself, but installing plugins into Obsidian is currently a matter of trust.

I can assure you here that I do nothing to collect your data, send information to the internet or otherwise do anything nefarious with your system. However, be aware that I *could*, and you only have my word that I don't.

## Development

This project uses Typescript to provide type checking and documentation.  
The repo depends on the latest [plugin API](https://github.com/obsidianmd/obsidian-api) in Typescript Definition format, which contains TSDoc comments describing what it does.

If you want to contribute to development and/or just customize it with your own
tweaks, you can do the following:
- Clone this repo.
- `npm i` or `yarn` to install dependencies
- `npm run build` to compile.
- Copy `manifest.json` and `main.js` to a subfolder of your plugins
folder (e.g, `<vault>/.obsidian/plugins/<plugin-name>/`)
- Reload obsidian to see changes

Alternately, you can clone the repo directly into your plugins folder and once
dependencies are installed use `npm run dev` to start compilation in watch mode.  
You may have to reload obsidian (`ctrl+R`) to see changes.

## Pricing
Huh? This is an open-source plugin I made *for fun*. It's completely free.
However, if you absolutely *have* to send me money because you like it that
much, feel free to throw some coins in my hat via the following:

[![GitHub Sponsors](https://img.shields.io/github/sponsors/deathau?style=social)](https://github.com/sponsors/deathau)
[![Paypal](https://img.shields.io/badge/paypal-deathau-yellow?style=social&logo=paypal)](https://paypal.me/deathau)

# Version History

## 0.0.1
Initial release. Does what it says on the tin.