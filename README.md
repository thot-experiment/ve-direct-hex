# ve-direct-hex
extremely basic implementation of the VE.Direct and VE.Direct HEX protocols for Victron devices

This is a pretty barebones library for interfacting with the Victron VE.Direct and VE.Direct HEX protocols used by their various devices. I'm intentionally not providing any support for actual serial communication, but `example.mjs` shows how you can get this running by rawdogging a linux tty.

## basic rundown

a quick rundown of `example.mjs`

```js
import fs from 'fs/promises'
import {debugText} from './debug_tools.mjs'
import * as VEDirect from './main.mjs'
import child  from 'child_process'

//hoist convenience functions for building HEX messages
let {formatBytesToHex, addCheck, wordToLEBytes} = VEDirect
```
basic setup

```js
const terminal = '/dev/ttyUSB0'
//call stty to set up terminal
child.execSync(`stty -F ${terminal} 19200 raw cs8 -cstopb -parenb`)

//open terminal
let tty = await fs.open('/dev/ttyUSB0', 'a+')
let stream = tty.createReadStream()
```
this is a quick and dirty way of getting a working terminal on linux,
it may also work on other \*nix-like operating systems but i haven't tried

```js
let getStatus = VEDirect.nextUpdate(stream)
let query = VEDirect.promise(tty, stream)
```

`VEDirect.promise` is a wrapper for the HEX protocol that takes a TTY and an optional Stream (it'll make one if you don't have it handy) initially and then the resultant function takes a buffer and returns a promise that resolves to whatever the answer was from the victron

`VEDirect.nextUpdate` wraps the text protocol, and it's resultant function returns a promise that reolves to the next full text update from the victron

```js
//print the next status updated over the text protocol w/ debug info
console.log('status: ', debugText(await getStatus()))
```
which will resolve to something like this
```js
status:  {
  PID: {
    desc: 'Product ID',
    value: 41048,
    ex_value: 'SmartSolar MPPT 150|35'
  },
  FW: { desc: 'Firmware version (16 bit)', value: 159 },
  'SER#': { desc: 'Serial number', value: 'XXXXXXXXXXX' },
  V: {
    desc: 'Main or channel 1 (battery) voltage',
    value: 26360,
    unit: 'mV'
  },
  I: { desc: 'Main or channel 1 battery current', value: 0, unit: 'mA' },
  VPV: { desc: 'Panel voltage', value: 20, unit: 'mV' },
  PPV: { desc: 'Panel power', value: 0, unit: 'W' },
  CS: { desc: 'State of operation', value: 0, ex_value: 'Off' },
  MPPT: { desc: 'Tracker operation mode', value: 0, ex_value: 'Off' },
  OR: { desc: 'Off reason', value: 1, ex_value: 'No input power' },
  ERR: { desc: 'Error code', value: 0, ex_value: 'No error' },
  LOAD: { desc: 'Load output state (ON/OFF)', value: 'ON' },
  H19: {
    desc: 'Yield total (user resettable counter)',
    value: 272964,
    unit: '0.01 kWh'
  },
  H20: { desc: 'Yield today', value: 276, unit: '0.01 kWh' },
  H21: { desc: 'Maximum power today', value: 997, unit: 'W' },
  H22: { desc: 'Yield yesterday', value: 339, unit: '0.01 kWh' },
  H23: { desc: 'Maximum power yesterday', value: 571, unit: 'W' },
  HSDS: { desc: 'Day sequence number (0..364)', value: 40 }
}
```

```
//add checksum and encode the message as ":[UPPERCASEHEX]\n"
let checkVersion = Buffer.from(formatBytesToHex(addCheck([3])))
console.log("query version: ",await query(checkVersion))
```
which will resolve to something like this
```js
query version:  { type: 1, bytes: [ 89, 65 ], checkSum: 186, msg: ':15941BA' }
```
### extra examples

```js
//set charge current to 35A
let setAmps = Buffer.from(formatBytesToHex(addCheck(
  [8,...wordToLEBytes(0xEDF0),0,...wordToLEBytes(350)]
)))
console.log("set charging amps: ",await query(setAmps))

//log all VE.Direct data blocks w/ additional debug info
stream.on('data', VE_Direct(block => console.log(debugText(block))))

//log all async VE.Direct HEX messages
stream.on('data', VEDirect.hex(msg => {
  if (msg.type === 0xA) console.log(msg)
}))
```

## caveats
 - i've only tested on debian on a beaglebone with node 17+
 - victron uses little endian encoding within their HEX format, node uses whatever endianness is default for the underlying system, i assume your system is LE, if it isn't you're going to have a bad time


References:
 - [user manuals/pdfs](https://www.victronenergy.com/support-and-downloads/technical-information)
 - [protocol faq](https://www.victronenergy.com/live/vedirect_protocol:faq)
