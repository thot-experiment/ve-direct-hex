//this is generated by copy pasting the list from the PDF into a string and
//running the following on it
/*
string_of_data_from_pdf.split('\n').map(a => {
    let v = a.split(' ')
  let l = v[v.length-1].trim()
  if (l[l.length-1] === '*') l = l.slice(0, -1)
  if (l == parseInt(l)) return `${l}: '${v.slice(0,-1).join(' ')}',`
}).filter(a=> a).join('\n')
*/
const devices = {
  0x203: 'BMV-700',
  0x204: 'BMV-702',
  0x205: 'BMV-700H',
  0x0300: 'BlueSolar MPPT 70|15*',
  0xA040: 'BlueSolar MPPT 75|50*',
  0xA041: 'BlueSolar MPPT 150|35*',
  0xA042: 'BlueSolar MPPT 75|15',
  0xA043: 'BlueSolar MPPT 100|15',
  0xA044: 'BlueSolar MPPT 100|30*',
  0xA045: 'BlueSolar MPPT 100|50*',
  0xA046: 'BlueSolar MPPT 150|70',
  0xA047: 'BlueSolar MPPT 150|100',
  0xA049: 'BlueSolar MPPT 100|50 rev2',
  0xA04A: 'BlueSolar MPPT 100|30 rev2',
  0xA04B: 'BlueSolar MPPT 150|35 rev2',
  0xA04C: 'BlueSolar MPPT 75|10',
  0xA04D: 'BlueSolar MPPT 150|45',
  0xA04E: 'BlueSolar MPPT 150|60',
  0xA04F: 'BlueSolar MPPT 150|85',
  0xA050: 'SmartSolar MPPT 250|100',
  0xA051: 'SmartSolar MPPT 150|100*',
  0xA052: 'SmartSolar MPPT 150|85*',
  0xA053: 'SmartSolar MPPT 75|15',
  0xA054: 'SmartSolar MPPT 75|10',
  0xA055: 'SmartSolar MPPT 100|15',
  0xA056: 'SmartSolar MPPT 100|30',
  0xA057: 'SmartSolar MPPT 100|50',
  0xA058: 'SmartSolar MPPT 150|35',
  0xA059: 'SmartSolar MPPT 150|100 rev2',
  0xA05A: 'SmartSolar MPPT 150|85 rev2',
  0xA05B: 'SmartSolar MPPT 250|70',
  0xA05C: 'SmartSolar MPPT 250|85',
  0xA05D: 'SmartSolar MPPT 250|60',
  0xA05E: 'SmartSolar MPPT 250|45',
  0xA05F: 'SmartSolar MPPT 100|20',
  0xA060: 'SmartSolar MPPT 100|20 48V',
  0xA061: 'SmartSolar MPPT 150|45',
  0xA062: 'SmartSolar MPPT 150|60',
  0xA063: 'SmartSolar MPPT 150|70',
  0xA064: 'SmartSolar MPPT 250|85 rev2',
  0xA065: 'SmartSolar MPPT 250|100 rev2',
  0xA066: 'BlueSolar MPPT 100|20',
  0xA067: 'BlueSolar MPPT 100|20 48V',
  0xA068: 'SmartSolar MPPT 250|60 rev2',
  0xA069: 'SmartSolar MPPT 250|70 rev2',
  0xA06A: 'SmartSolar MPPT 150|45 rev2',
  0xA06B: 'SmartSolar MPPT 150|60 rev2',
  0xA06C: 'SmartSolar MPPT 150|70 rev2',
  0xA06D: 'SmartSolar MPPT 150|85 rev3',
  0xA06E: 'SmartSolar MPPT 150|100 rev3',
  0xA06F: 'BlueSolar MPPT 150|45 rev2',
  0xA070: 'BlueSolar MPPT 150|60 rev2',
  0xA071: 'BlueSolar MPPT 150|70 rev2',
  0xA102: 'SmartSolar MPPT VE.Can 150/70',
  0xA103: 'SmartSolar MPPT VE.Can 150/45',
  0xA104: 'SmartSolar MPPT VE.Can 150/60',
  0xA105: 'SmartSolar MPPT VE.Can 150/85',
  0xA106: 'SmartSolar MPPT VE.Can 150/100',
  0xA107: 'SmartSolar MPPT VE.Can 250/45',
  0xA108: 'SmartSolar MPPT VE.Can 250/60',
  0xA109: 'SmartSolar MPPT VE.Can 250/70',
  0xA10A: 'SmartSolar MPPT VE.Can 250/85',
  0xA10B: 'SmartSolar MPPT VE.Can 250/100',
  0xA10C: 'SmartSolar MPPT VE.Can 150/70 rev2',
  0xA10D: 'SmartSolar MPPT VE.Can 150/85 rev2',
  0xA10E: 'SmartSolar MPPT VE.Can 150/100 rev2',
  0xA10F: 'BlueSolar MPPT VE.Can 150/100',
  0xA112: 'BlueSolar MPPT VE.Can 250/70',
  0xA113: 'BlueSolar MPPT VE.Can 250/100',
  0xA114: 'SmartSolar MPPT VE.Can 250/70 rev2',
  0xA115: 'SmartSolar MPPT VE.Can 250/100 rev2',
  0xA116: 'SmartSolar MPPT VE.Can 250/85 rev2',
  0xA201: 'Phoenix Inverter 12V 250VA 230V*',
  0xA202: 'Phoenix Inverter 24V 250VA 230V*',
  0xA204: 'Phoenix Inverter 48V 250VA 230V*',
  0xA211: 'Phoenix Inverter 12V 375VA 230V*',
  0xA212: 'Phoenix Inverter 24V 375VA 230V*',
  0xA214: 'Phoenix Inverter 48V 375VA 230V*',
  0xA221: 'Phoenix Inverter 12V 500VA 230V*',
  0xA222: 'Phoenix Inverter 24V 500VA 230V*',
  0xA224: 'Phoenix Inverter 48V 500VA 230V*',
  0xA231: 'Phoenix Inverter 12V 250VA 230V',
  0xA232: 'Phoenix Inverter 24V 250VA 230V',
  0xA234: 'Phoenix Inverter 48V 250VA 230V',
  0xA239: 'Phoenix Inverter 12V 250VA 120V',
  0xA23A: 'Phoenix Inverter 24V 250VA 120V',
  0xA23C: 'Phoenix Inverter 48V 250VA 120V',
  0xA241: 'Phoenix Inverter 12V 375VA 230V',
  0xA242: 'Phoenix Inverter 24V 375VA 230V',
  0xA244: 'Phoenix Inverter 48V 375VA 230V',
  0xA249: 'Phoenix Inverter 12V 375VA 120V',
  0xA24A: 'Phoenix Inverter 24V 375VA 120V',
  0xA24C: 'Phoenix Inverter 48V 375VA 120V',
  0xA251: 'Phoenix Inverter 12V 500VA 230V',
  0xA252: 'Phoenix Inverter 24V 500VA 230V',
  0xA254: 'Phoenix Inverter 48V 500VA 230V',
  0xA259: 'Phoenix Inverter 12V 500VA 120V',
  0xA25A: 'Phoenix Inverter 24V 500VA 120V',
  0xA25C: 'Phoenix Inverter 48V 500VA 120V',
  0xA261: 'Phoenix Inverter 12V 800VA 230V',
  0xA262: 'Phoenix Inverter 24V 800VA 230V',
  0xA264: 'Phoenix Inverter 48V 800VA 230V',
  0xA269: 'Phoenix Inverter 12V 800VA 120V',
  0xA26A: 'Phoenix Inverter 24V 800VA 120V',
  0xA26C: 'Phoenix Inverter 48V 800VA 120V',
  0xA271: 'Phoenix Inverter 12V 1200VA 230V',
  0xA272: 'Phoenix Inverter 24V 1200VA 230V',
  0xA274: 'Phoenix Inverter 48V 1200VA 230V',
  0xA279: 'Phoenix Inverter 12V 1200VA 120V',
  0xA27A: 'Phoenix Inverter 24V 1200VA 120V',
  0xA27C: 'Phoenix Inverter 48V 1200VA 120V',
  0xA281: 'Phoenix Inverter 12V 1600VA 230V',
  0xA282: 'Phoenix Inverter 24V 1600VA 230V',
  0xA284: 'Phoenix Inverter 48V 1600VA 230V',
  0xA291: 'Phoenix Inverter 12V 2000VA 230V',
  0xA292: 'Phoenix Inverter 24V 2000VA 230V',
  0xA294: 'Phoenix Inverter 48V 2000VA 230V',
  0xA2A1: 'Phoenix Inverter 12V 3000VA 230V',
  0xA2A2: 'Phoenix Inverter 24V 3000VA 230V',
  0xA2A4: 'Phoenix Inverter 48V 3000VA 230V',
  0xA340: 'Phoenix Smart IP43 Charger 12|50 (1+1)',
  0xA341: 'Phoenix Smart IP43 Charger 12|50 (3)',
  0xA342: 'Phoenix Smart IP43 Charger 24|25 (1+1)',
  0xA343: 'Phoenix Smart IP43 Charger 24|25 (3)',
  0xA344: 'Phoenix Smart IP43 Charger 12|30 (1+1)',
  0xA345: 'Phoenix Smart IP43 Charger 12|30 (3)',
  0xA346: 'Phoenix Smart IP43 Charger 24|16 (1+1)',
  0xA347: 'Phoenix Smart IP43 Charger 24|16 (3)',
  0xA381: 'BMV-712 Smart',
  0xA382: 'BMV-710H Smart',
  0xA383: 'BMV-712 Smart Rev2',
  0xA389: 'SmartShunt 500A/50mV',
  0xA38A: 'SmartShunt 1000A/50mV',
  0xA38B: 'SmartShunt 2000A/50mV'
}

const alarm_reasons = {
}
//this is generated by copy pasting the info from the pdf and running roughly
//n.b. you need to delete the extraneous lines for this to work
/*
 pdf_text.split('\n').map(n => {
 let dx = n.indexOf('???')
 n = n.slice(0, dx)
 let [key, ...desc] = n.split(' ')
 return [key, {desc: desc.join(' ').trim()}]
})
*/
let text_key_dictionary = {
  "PID": {
    desc: 'Product ID',
    dict: devices
  },
  "V": {
    unit: "mV",
    desc: "Main or channel 1 (battery) voltage",
  },
  "V2": {
    unit: "mV",
    desc: "Channel 2 (battery) voltage"
  },
  "V3": {
    unit: "mV",
    desc: "Channel 3 (battery) voltage"
  },
  "VS": {
    unit: "mV",
    desc: "Auxiliary (starter) voltage"
  },
  "VM": {
    unit: "mV",
    desc: "Mid-point voltage of the battery bank"
  },
  "DM": {
    unit: "???",
    desc: "Mid-point deviation of the battery bank"
  },
  "VPV": {
    unit: "mV",
    desc: "Panel voltage"
  },
  "PPV": {
    unit: "W",
    desc: "Panel power"
  },
  "I": {
    unit: "mA",
    desc: "Main or channel 1 battery current"
  },
  "I2": {
    unit: "mA",
    desc: "Channel 2 battery current"
  },
  "I3": {
    unit: "mA",
    desc: "Channel 3 battery current"
  },
  "IL": {
    unit: "mA",
    desc: "Load current"
  },
  "LOAD": {
    "desc": "Load output state (ON/OFF)"
  },
  "T": {
    unit: "??C",
    desc: "8 Battery temperature"
  },
  "P": {
    unit: "W",
    desc: "Instantaneous power"
  },
  "CE": {
    unit: "mAh",
    desc: "Consumed Amp Hours"
  },
  "SOC": {
    unit: "???",
    desc: "State-of-charge"
  },
  "TTG": {
    unit: "Minutes",
    desc: "Time-to-go"
  },
  "Alarm": {
    "desc": "Alarm condition active"
  },
  "Relay": {
    "desc": "Relay state"
  },
  "AR": {
    "desc": "Alarm reason",
    dict: {
      0b00000000000001: 'Low Voltage',
      0b00000000000010: 'High Voltage',
      0b00000000000100: 'Low SOC',
      0b00000000001000: 'Low Starter Voltage',
      0b00000000010000: 'High Starter Voltage',
      0b00000000100000: 'Low Temperature',
      0b00000001000000: 'High Temperature',
      0b00000010000000: 'Mid Voltage',
      0b00000100000000: 'Overload',
      0b00001000000000: 'DC-ripple',
      0b00010000000000: 'Low V AC out',
      0b00100000000000: 'High V AC out',
      0b01000000000000: 'Short Circuit',
      0b10000000000000: 'BMS Lockout'
    }
  },
  "OR": {
    "desc": "Off reason",
    dict: {
      0x0001: 'No input power',
      0x0002: 'Switched off (power switch)',
      0x0004: 'Switched off (device mode register)',
      0x0008: 'Remote input',
      0x0010: 'Protection active',
      0x0020: 'Paygo',
      0x0040: 'BMS',
      0x0080: 'Engine shutdown detection',
      0x0100: 'Analysing input voltage',
    }
  },
  "H1": {
    unit: "mAh",
    desc: "Depth of the deepest discharge"
  },
  "H2": {
    unit: "mAh",
    desc: "Depth of the last discharge"
  },
  "H3": {
    unit: "mAh",
    desc: "Depth of the average discharge"
  },
  "H4": {
    "desc": "Number of charge cycles"
  },
  "H5": {
    "desc": "Number of full discharges"
  },
  "H6": {
    unit: "mAh",
    desc: "Cumulative Amp Hours drawn"
  },
  "H7": {
    unit: "mV",
    desc: "Minimum main (battery) voltage"
  },
  "H8": {
    unit: "mV",
    desc: "Maximum main (battery) voltage"
  },
  "H9": {
    "desc": "Seconds Number of seconds since last full charge"
  },
  "H10": {
    "desc": "Number of automatic synchronizations"
  },
  "H11": {
    "desc": "Number of low main voltage alarms"
  },
  "H12": {
    "desc": "Number of high main voltage alarms"
  },
  "H13": {
    "desc": "Number of low auxiliary voltage alarms"
  },
  "H14": {
    "desc": "Number of high auxiliary voltage alarms"
  },
  "H15": {
    unit: "mV",
    desc: "Minimum auxiliary (battery) voltage"
  },
  "H16": {
    unit: "mV",
    desc: "Maximum auxiliary (battery) voltage"
  },
  "H17": {
    unit: "0.01 kWh",
    desc: "Amount of discharged energy (BMV) / Amount of produced energy (DC monitor"
  },
  "H18": {
    unit: "0.01 kWh",
    desc: "Amount of charged energy (BMV) / Amount of consumed energy (DC monitor"
  },
  "H19": {
    unit: "0.01 kWh",
    desc: "Yield total (user resettable counter)"
  },
  "H20": {
    unit: "0.01 kWh",
    desc: "Yield today"
  },
  "H21": {
    unit: "W",
    desc: "Maximum power today"
  },
  "H22": {
    unit: "0.01 kWh",
    desc: "Yield yesterday"
  },
  "H23": {
    unit: "W",
    desc: "Maximum power yesterday"
  },
  "ERR": {
    "desc": "Error code",
    dict: {
      0: 'No error',
      2: 'Battery voltage too high',
      17: 'Charger temperature too high',
      18: 'Charger over current',
      19: 'Charger current reversed',
      20: 'Bulk time limit exceeded',
      21: 'Current sensor issue (sensor bias/sensor broken)',
      26: 'Terminals overheated',
      28: 'Converter issue (dual converter models only)',
      33: 'Input voltage too high (solar panel)',
      34: 'Input current too high (solar panel)',
      38: 'Input shutdown (due to excessive battery voltage)',
      39: 'Input shutdown (due to current flow during off mode)',
      65: 'Lost communication with one of devices',
      66: 'Synchronised charging device configuration issue',
      67: 'BMS connection lost',
      68: 'Network misconfigured',
      116: 'Factory calibration data lost',
      117: 'Invalid/incompatible firmware',
      119: 'User settings invalid'
    }
  },
  "CS": {
    "desc": "State of operation",
    dict: {
      0: 'Off',
      1: 'Low power',
      2: 'Fault',
      3: 'Bulk',
      4: 'Absorption',
      5: 'Float',
      6: 'Storage',
      7: 'Equalize (manual)',
      9: 'Inverting',
      11: 'Power supply',
      245: 'Starting-up',
      246: 'Repeated absorption',
      247: 'Auto equalize / Recondition',
      248: 'BatterySafe',
      252: 'External Control'
    }
  },
  "BMV": {
    "desc": "Model description (deprecated)"
  },
  "FW": {
    "desc": "Firmware version (16 bit)"
  },
  "FWE": {
    "desc": "Firmware version (24 bit)"
  },
  "SER#": {
    "desc": "Serial number"
  },
  "HSDS": {
    "desc": "Day sequence number (0..364)"
  },
  "MODE": {
    "desc": "Device mode",
    dict: {
      1: 'VE_REG_MODE_CHARGER',
      2: 'VE_REG_MODE_INVERTER',
      4: 'VE_REG_MODE_OFF',
      5: 'VE_REG_MODE_ECO',
      253: 'VE_REG_MODE_HIBERNATE',
    }
  },
  "AC_OUT_V": {
    unit: "0.01 V AC",
    desc: "output voltage"
  },
  "AC_OUT_I": {
    unit: "0.1 A AC",
    desc: "output current"
  },
  "AC_OUT_S": {
    unit: "VA",
    desc: "AC output apparent power"
  },
  "WARN": {
    "desc": "Warning reason"
  },
  "MPPT": {
    "desc": "Tracker operation mode",
    dict: {
      0: 'Off',
      1: 'Voltage or current limited',
      2: 'MPP Tracker active',
    }
  },
  "MON": {
    "desc": "DC monitor mode",
    dict: {
      "-9": 'Solar charger',
      "-8": 'Wind turbine',
      "-7": 'Shaft generator',
      "-6": 'Alternator',
      "-5": 'Fuel cell',
      "-4": 'Water generator',
      "-3": 'DC/DC charger',
      "-2": 'AC charger',
      "-1": 'Generic source',
      0: 'Battery monitor (BMV)',
      1: 'Generic load',
      2: 'Electric drive',
      3: 'Fridge',
      4: 'Water pump',
      5: 'Bilge pump',
      6: 'DC system',
      7: 'Inverter',
      8: 'Water heater',
    }
  }
}

let debugText = message => {
  let out = {}
  let entries = Object.entries(message)
  entries.forEach(([key, value]) => {
    let info = text_key_dictionary[key]
    if (info) {
      out[key] = {}
      out[key].desc = info.desc
      out[key].value = value
      if (info.unit) out[key].unit = info.unit
      let dv = info.dict?.[value]
      if (dv) out[key]["ex_value"] = dv
    } else {
      out.unknown_fields[key] = value
    }
  })


  return out
}

export {debugText, text_key_dictionary}
