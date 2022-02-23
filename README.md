# ve-direct-hex
extremely basic implementation of the VE.Direct and VE.Direct HEX protocols for Victron devices

This is a pretty barebones library for interfacting with the Victron VE.Direct and VE.Direct HEX protocols used by their various devices. I'm intentionally not providing any support for actual serial communication, but `example.mjs` shows how you can get this running by rawdogging a linux tty.


## caveats
 - i've only tested on debian on a beaglebone with node 17+
 - victron uses little endian encoding within their HEX format, node uses whatever endianness is default for the underlying system, i assume your system is LE, if it isn't you're going to have a bad time


References:
 - [user manuals/pdfs](https://www.victronenergy.com/support-and-downloads/technical-information)
 - [protocol faq](https://www.victronenergy.com/live/vedirect_protocol:faq)
