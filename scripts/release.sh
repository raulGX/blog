#!/bin/bash
npm run build
rsync -avr ./dist/ root@devroll.io:/usr/share/caddy
rsync -avr ./Caddyfile root@devroll.io:/etc/caddy/Caddyfile
ssh root@devroll.io "systemctl reload caddy"
