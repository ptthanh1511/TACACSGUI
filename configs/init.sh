#!/bin/sh

echo "Get Composer [Running]"
curl -sS https://getcomposer.org/installer -o /tmp/composer-setup.php 
php /tmp/composer-setup.php --install-dir=/usr/local/bin --filename=composer
echo "Get Composer [Done]"

echo "Create SSL Cert [Running]"
mkdir -p /opt/tgui_data/ssl
openssl req -subj '/CN=domain.com/O=My./C=US' -new -newkey rsa:2048 -days 3650 -nodes -x509 -keyout /opt/tgui_data/ssl/tacacsgui.local.key -out /opt/tgui_data/ssl/tacacsgui.local.cer
echo "Create SSL Cert [Done]"

mv /tmp/tacacsgui.local.conf /etc/apache2/sites-available/ 
mv /tmp/tacacsgui.local-ssl.conf /etc/apache2/sites-available/ 

mkdir -p /var/log/tacacsgui/apache2/ 
cd /etc/apache2/sites-available/ 
a2enmod rewrite 
a2enmod ssl 
a2enmod xsendfile 
a2ensite tacacsgui.local.conf 
a2ensite tacacsgui.local-ssl.conf 

chown www-data:www-data -R /opt/tacacsgui
touch /opt/tacacsgui/tacTestOutput.txt
touch /opt/tacacsgui/tac_plus.cfg
touch /opt/tacacsgui/tac_plus.cfg_test
chmod 666 /opt/tacacsgui/tacTestOutput.txt
chmod 775 -R /opt/tgui_data
chown www-data:www-data -R /opt/tgui_data
composer update -d /opt/tacacsgui/web/api
composer install -d /opt/tacacsgui/web/api
cp /opt/tacacsgui/tac_plus.sh /etc/init.d/tac_plus
adduser tacgui
usermod -aG admin tacgui
usermod -aG sudo tacgui

echo "www-data ALL=(ALL) NOPASSWD: /opt/tacacsgui/tac_plus.sh*" > /etc/sudoers.d/tacacsgui
echo "www-data ALL=(ALL) NOPASSWD: /opt/tacacsgui/main.sh*" >> /etc/sudoers.d/tacacsgui
chmod 400 /etc/sudoers.d/tacacsgui