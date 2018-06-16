import scrollIntoView from 'scroll-into-view-if-needed'

const scrollTo = (id) => {
  if (typeof window !== 'undefined') {
    const el = document.getElementById(id)
    if (el)
      scrollIntoView(el, {
        behavior: 'smooth',
        scrollMode: 'if-needed',
        block: 'start',
        inline: 'start',
      })
  }
}

export default scrollTo
