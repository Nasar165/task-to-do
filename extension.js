"use strict";

const St = imports.gi.St;
const Main = imports.ui.main;
const ExtensionUtils = imports.misc.extensionUtils;

const Me = ExtensionUtils.getCurrentExtension();

let panelButton, panelButtonText;

function init() {
  try {
    log(`initializing ${Me.metadata.name} version ${Me.metadata.version}`);

    panelButton = new St.Bin({
      style_class: "panel-button",
    });
    const text = "Starting...";
    panelButtonText = new St.Label({
      style_class: "panel-text",
      text: text.toString().replace("\n", ""),
    });
    panelButton.set_child(panelButtonText);
  } catch (error) {
    logError(error, "ExtensionError");
  }
}

function enable() {
  try {
    Main.panel._rightBox.insert_child_at_index(panelButton, 1);
    log(`enabling ${Me.metadata.name} version ${Me.metadata.version}`);
  } catch (error) {
    logError(error, "ExtensionError");
  }
}

function disable() {
  try {
    Main.panel._rightBox.remove_child(panelButton);
    log(`disabling ${Me.metadata.name} version ${Me.metadata.version}`);
  } catch (error) {
    logError(error, "ExtensionError");
  }
}
