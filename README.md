# Simple to do task manager tutorial

## Introduction

A simple to do task manager that is capable of sharing information
between workstations. This extension is for users interested in tracking
their daily activities and requires some help remembering what need's to be
done.

## Important

### meta data & root folder

The uuid must be the same name as the root folder in case you plan to alter
the uuid in metadata. The same goes for the root folder name, if you change
the root folder name you have to change the uuid in metadata.

### File structure

To make a gnome extension work you will need the following files inside your
root folder. extension.js metadata.json and if you want to add a stylesheet.css
where you can store your css.

|-- root folder (app name - must be same as metadata name)
|-- | -- extension.js
|-- | -- metadata.json
|-- | -- stylesheet.css (optional)

### Reload app after changes

Remember to restart gnome whenever you add, edit or delete an extension to
see you changes. This can be done using Alt+f2 then enter "r" in the
terminal and press enter.

### Debug

Debugging is difficult and requires time to make the process easier use the
following function log("text"). these messages can then be read using
journalctl command in linux a good practice would be to use the following
structure. use logError() for error logging.

```
try{
    log('a message');
} catch(e){
    logError(e, 'ExtensionError')
}
```

Log messages can then be found using the following command
(journalctl -f -o cat /usr/bin/gnome-shell). take note that you might
need to scroll or filter the output to get the information you want.

More about this can be found in [Gnome Wiki](https://wiki.gnome.org/Projects/GnomeShell/Extensions/Writing)

## Tips

### Positioning in top navbar

- \_leftBox - position to the left
- \_rightBox - position to the right
- \_centerBox - position at the center
