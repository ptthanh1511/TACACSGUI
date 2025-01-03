#!/sbin/bash
source /opt/tgui_data/default_vars.sh
alias help=$'cat /opt/tgui_data/default_vars.sh  |sed \'s/=${/ /g\' |sed \'s/:=/ /g\' |sed \'s/}//g\' |sed \'s/ "/ - Default value: "/g\''

init 

# Enable status in freeadius
