#!/bin/bash

# Get the current status of the service
STATUS=$(systemctl --user is-active hyprsunset.service)

if [ "$STATUS" = "active" ]; then
    # If active, stop the service (turns off hyprsunset)
    systemctl --user stop hyprsunset.service
else
    # *** CRITICAL: Kill any old processes before starting the new one ***
    killall hyprsunset || true
    
    # If inactive, start the service (turns on hyprsunset)
    systemctl --user start hyprsunset.service
fi
