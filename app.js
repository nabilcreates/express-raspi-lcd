// SERVER RELATED
let express = require('express')
let app = express();

// LCD
var LCD = require('lcdi2c');
var lcd = new LCD( 1, 0x27, 20, 4 );

// PORT AND IP
let port = 5000;
let internal_ip = '192.168.0.157'

let history = [];

// FUNCTION TO DISPLAY TEXT
function displayText(d){

	// IF THE DISPLAY TEXT IS MORE THAN 16 CHARS
	if(d.length > 16){

		// CLEAR LCD
                lcd.clear()

		// PRINT LINE CONTAINING DISPLAY TEXT
                lcd.println(d,1)

		// PRINT SECOND LINE CONTAINING DISPLAY TEXT (AFTER 16 CHARS)
                lcd.println(d.slice(16),2)

                //PUSH TO HISTORY ARRAY
                history.push(d) 

		// RETURN (FOR RESPONSE SEND)
                return {
                        above_16chars: true,
                        d: d,
                }
        }else{

		// CLEAR LCD
                lcd.clear()

		// PRINT LCD
                lcd.print(d)

                //PUSH TO HISTORY ARRAY
                history.push(d)

		// RETURN (FOR RESPONSE SEND)
                return {
                        above_16chars: false,
                        d: d,
                }
        }
}

app.get('/display/:d', (request,response) => {
	let d = request.params.d

	displayText(d)
	response.send(displayText(d))
})

app.get('/history', (request,response) => {
	response.send(history)
})

app.listen(port, internal_ip, () => {
	console.log(`Running: ${internal_ip}:${port}`)
})
