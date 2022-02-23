import fs from 'fs/promises'
import {debugText} from './debug_tools.mjs'
import * as VEDirect from './main.mjs'
import child  from 'child_process'

const terminal = '/dev/ttyUSB0'
//call stty to set up terminal
child.execSync(`stty -F ${terminal} 19200 raw cs8 -cstopb -parenb`)

//import convenience functions for building HEX messages
let {formatBytesToHex, addCheck, wordToLEBytes, nextUpdate} = VEDirect

//open terminal
let tty = await fs.open('/dev/ttyUSB0', 'a+')
let stream = tty.createReadStream()

let query = VEDirect.promise(tty, stream)
let getStatus = nextUpdate(stream)

//print the next status updated over the text protocol w/ debug info
console.log('status: ', debugText(await getStatus()))

//add checksum and encode the message as ":[UPPERCASEHEX]\n"
let checkVersion = Buffer.from(formatBytesToHex(addCheck([3])))
console.log("query version: ",await query(checkVersion))

//set charge current to 35A
/*
let setAmps = Buffer.from(formatBytesToHex(addCheck(
  [8,...wordToLEBytes(0xEDF0),0,...wordToLEBytes(350)]
)))
console.log("set charging amps: ",await query(setAmps))
*/

//log all VE.Direct data blocks w/ additional debug info
//stream.on('data', VE_Direct(block => console.log(debugText(block))))

//log all async VE.Direct HEX messages
/*
stream.on('data', VEDirect.hex(msg => {
  if (msg.type === 0xA) console.log(msg)
}))
*/
