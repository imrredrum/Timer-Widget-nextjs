export type TimeObject = {
  hours: number
  minutes: number
  seconds: number
  milliseconds: number
}

export default function millisecondsToTimeObject(ms: number): TimeObject {
  return {
    hours: Math.floor(ms / 3600000),
    minutes: Math.floor((ms % 3600000) / 60000),
    seconds: Math.floor((ms % 60000) / 1000),
    milliseconds: Math.floor((ms % 1000) / 10),
  }
}
