export const createTimer = (callback) => {
  const timer = {
    intervalId: null,
    timeoutId: null,
    start(delay = 5000) {
      timer.stop()
      timer.intervalId = setInterval(callback, delay)
    },
    fastStart(initialDelay = 2500, subsequentDelay) {
      timer.stop()
      timer.timeoutId = setTimeout(() => {
        callback()
        timer.start(subsequentDelay)
      }, initialDelay)
    },
    stop() {
      if (timer.intervalId) {
        clearInterval(timer.intervalId)
      }
      if (timer.timeoutId) {
        clearTimeout(timer.timeoutId)
      }
    },
  }
  return timer
}
