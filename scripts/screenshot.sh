#!/bin/bash

# Your original grimblast command
GRIMBLAST_CMD="grimblast --freeze copysave area \"$HOME/Pictures/Screenshots/screenshot_$(date +%s).png\""

# Execute the command
eval "$GRIMBLAST_CMD"

# Check if the command was successful
if [ $? -eq 0 ]; then
    # Send the simple notification using dbus-send
    dbus-send --session \
        --type=method_call \
        --dest=org.freedesktop.Notifications \
        /org/freedesktop/Notifications \
        org.freedesktop.Notifications.Notify \
        string:"Screenshot" \
        uint32:0 \
        string:"" \
        string:"Screenshot taken." \
        string:"" \
        array:string:"" \
        dict:string:variant:"" \
        int32:5000
fi
