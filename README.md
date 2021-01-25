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
