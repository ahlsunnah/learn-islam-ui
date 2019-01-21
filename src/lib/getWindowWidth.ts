const getWindowWidth = () => {
  if (typeof window === 'undefined') {
    return 1024
  }
  return (
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth
  )
}

export default getWindowWidth
