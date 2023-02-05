export function timeFormat(time: any, fix: number) {
  let hour = 0;
  time.match(/[0-9]*(w|d|h|m)*/g)?.forEach((item: any) => {
    if (item.indexOf("w") !== -1) {
      hour += 30 * item.replace("w", "");
    }
    if (item.indexOf("d") !== -1) {
      hour += 6 * item.replace("d", "");
    }
    if (item.indexOf("h") !== -1) {
      hour += 1 * item.replace("h", "");
    }
    if (item.indexOf("m") !== -1) {
      hour += item.replace("m", "") / 60;
    }
  });
  return Number((hour / 4).toFixed(fix));
}
