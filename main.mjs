let checksum = (bytes, init=0x55) => bytes.reduce((c,b) => c-b, init)&255

let addCheck = bytes => [...bytes, checksum(bytes)]

let formatBytesToHex = bytes => {
  let [type, ...rest] = bytes
  return `:${type.toString(16)}${rest.map(b => b.toString(16).padStart(2,'0')).join('')}\n`.toUpperCase()
}

let leBytesToWord = bytes => new Uint16Array(new Uint8Array(bytes).buffer)[0]
let wordToLEBytes = word => new Uint8Array(new Uint16Array([word]).buffer)

let parseHexString = msg => {
  //attempt to deal with a broad variety of reasonable inputs by stripping
  //extra characters where i can
  let hex = msg.trim()
  let end = hex.length-1
  if (hex[0] === ':') {
    hex = hex.slice(1)
    end--
  }     
  if (hex[end] === '\n') {
    hex = hex.slice(0, -1)
  }     

  let type = parseInt(hex[0],16)
  hex = hex.slice(1)

  let bytes = []
  while (hex.length) {
    bytes.push(hex.slice(0,2))
    hex = hex.slice(2)
  }

  bytes = bytes.map(b => parseInt(b,16))

  if (!bytes.length) throw `error, malformed message: ${JSON.stringify(msg)}`

  let check = checksum([type,...bytes])
  let checkSum = bytes.splice(-1)[0]

  if (check) console.warn(`incorrect checksum in message: \n${message}`)
  if (!check) return {type,bytes,checkSum,msg}
}

let typeDict = {
  0x1: 'Done', //success of command
  0x3: 'Unknown',
  0x4: 'Error',
  0x5: 'Ping',
  0x7: 'Get',
  0x8: 'Set',
  0xA: 'Async'
}

let processHexMessage = ({type, bytes, checkSum, msg}) => {
  let ht = typeDict[type]
  switch (type) {
    case 0x1:
      console.log({type, bytes, checkSum, msg})
      break
    case 0xA: 
      let value_id = leBytesToWord(bytes.slice(0,2))
      let flags = bytes[2]
      let value = bytes.slice(3)
      console.log({type, id: value_id.toString(16), flags, value})
      break
    default:
      console.log({type, bytes, checkSum, msg})
      break
  }
}

let VE_Direct_text_receiver = (callback, buffer='') => data => {
  buffer += data.toString('binary')
  let csIdx = buffer.indexOf('Checksum')+10
  //check that we have a checksum character in the buffer
  // > 9 because "Checksum ~" is 10 long
  if (csIdx > 9 && buffer.length > csIdx) {
    let pidIdx = buffer.indexOf('PID')
    if (pidIdx > -1) {
      let block = buffer.slice(pidIdx,csIdx)
      //split and reform to filter out interspersed hex messages
        .split(/\n+/).filter(s => s[0] !== ':').join('\n')

      //since i'm ignoring <CR> (13) and <LF> (10) at the start i have
      //to compensate for that when i calculate the checksum
      let check = checksum([...Buffer.from(block,'binary')],256-13-10)

      if (check) {
        console.warn(`incorrect checksum in block: \n${block}`)
        console.warn({check, pidIdx, csIdx})
      }
      if (!check) {
        let dict = Object.fromEntries(block.split('\n').slice(0,-1).map(line => {
          let split = line.split(/\t/).map(a => a.trim())
          let chkInt = parseInt(split[1])
          if (!isNaN(chkInt) && chkInt == split[1]) split[1] = chkInt
          if (split.length === 2) return split
        }).filter(a => a))

        //receives a dictionary of the VE.Direct serial logging output like
        //{
        //  PID: 29843,
        //  FW: 145,
        //  SER#: 'XXXXXXXXXXXXXXX'
        //  . . .
        //}
        //see: VE.Direct Protocol (https://www.victronenergy.com/support-and-downloads/technical-information)
        callback(dict)
      }
    }
    buffer=buffer.slice(csIdx)
  }
}

let VE_Direct_HEX_reciver = (callback, buffer='') => data => {
  buffer += data.toString('binary')

  //basically there are a lot of edge cases when you're mixing protocols
  //on the same tty and one of them ends with \n and the other begins with it
  
  //this splits the buffer in a magic way that makes shit stop breaking 
  //good luck understanding what the fuck is going on here
  let lines = buffer
    .split(/(?=:)/)

  if (lines.length > 1) {
    lines = lines.map(a => a.split(/(?=\n)/))
    .filter(a => a[0][0] === ':')

  //XD lmao
  if (lines[lines.length-1].length === 1) {
    buffer = lines.splice(-1)[0]
  } else {
    buffer = ''
  }

  let messages = lines.map(l => parseHexString(l[0]))
    .forEach(message => callback(message))
  }
}

let VE_HEX_Promise = (tty, stream, timeout = 10000) => {
  let pending = []
  if (!stream) stream = tty.createReadStream()
  stream.on('data', VE_Direct_HEX_reciver(message => {
    if (message.type !== 0xA) pending.pop()?.(message)
  }))
  let query = buffer => new Promise(res => {
    tty.write(buffer)
    pending.unshift(res)
    setTimeout(() => pending
      .splice(pending.indexOf(res),1)[0]?.(undefined,{error: 'timeout'}),timeout)
  })
  return query
}

let nextUpdate = stream => () => new Promise(res => {
  let parse = VE_Direct_text_receiver(report => {
    stream.removeListener('data',parse)
    res(report)
  })
  stream.on('data', parse)
})

export {
  VE_HEX_Promise as promise, 
  VE_Direct_text_receiver as text, 
  VE_Direct_HEX_reciver as hex,
  nextUpdate,
  wordToLEBytes, 
  formatBytesToHex, 
  addCheck, 
}
