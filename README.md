# express-raspi-lcd
Using an express server to show something on the LCD (USING NODE.JS)

## Start
- Change the internal IP on the app.listen()
- npm app.js
- visit on any browser (on the same network) '{internal_ip}:5000'

## Display Something
- '{internap_ip}:5000/display/{message}
  - Expected Output on LCD
    - {message}
    
## NPM Modules (INSTALL INDIVIDUALLY)
- lcdi2c
- express

## Read the SETUP
- https://www.npmjs.com/package/lcdi2c
  - Read the 'Usage' part and Setup your lcdi2c
