/**
 * create a throttle callback
 * @param callback
 * @param delay
 * @param thisArg
 */
export const createThrottle = (
  callback: Function,
  delay?: number,
  thisArg?: unknown
): Function => {
  let lastInvokeTime: number = Date.now();
  const _delay = Number(delay) || 200 //或运算符，真前假后
  return (...args: any[]): void => {
    const now = Date.now()
    if (now - _delay <= lastInvokeTime) {
      return;
    }
    lastInvokeTime = now;
    callback.call(thisArg, ...args)
  }
}