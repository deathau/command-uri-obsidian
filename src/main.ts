import { App, Plugin, ObsidianProtocolData, Notice } from 'obsidian';

// The actual plugin class
export default class CommandURIPlugin extends Plugin {

  // runs when the plugin is loaded
  onload = () => {
    this.registerObsidianProtocolHandler("command", this.actionHandler);
  }

  actionHandler = async (params: ObsidianProtocolData) => {
    // loop through all the commands and run them.
    for (const key in params) {
      // the "action" parameter will always be present. Ignore this.
      if (key != "action") {
        try {
          await this.runCommand(key);
        }
        catch (err) {
          // if there was an error, notify the user
          new Notice(err);
          console.error(err, params)
        }
      }
    }
  }

  runCommand = async (commandString: string) => {
    console.log(`Attempting to run command: "${commandString}"`);
    //@ts-ignore `commands` isn't in the definitions just yet, but it works
    const command = this.app.commands.listCommands().filter((command: any) =>
      // check both the command id and the command name
      command.id.toLowerCase() === commandString.toLowerCase()
      || command.name.toLowerCase() === commandString.toLowerCase())[0];
    
    //@ts-ignore run the command
    if (command) this.app.commands.executeCommandById(command.id);
    // throw an error if we couldn't find it
    else throw `Unable to find command "${commandString}"`;
  }
}