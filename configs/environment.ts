export function IS_FIRST_RUN() {
  return typeof localStorage !== 'undefined' && !localStorage.getItem('isFirstRun')
}