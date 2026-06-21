const PH = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'
const MARGIN = 200

const pending = new Map()
let rafId = null

function getClipParent(el) {
  let p = el.parentElement
  while (p) {
    const cs = getComputedStyle(p)
    if (cs.overflow === 'hidden' || cs.overflowX === 'hidden' || cs.overflowY === 'hidden') {
      return p
    }
    if (p === document.body) break
    p = p.parentElement
  }
  return null
}

function inView(r, wh, ww) {
  return r.bottom >= -MARGIN && r.top <= wh + MARGIN &&
         r.right >= -MARGIN && r.left <= ww + MARGIN
}

function check() {
  const wh = window.innerHeight
  const ww = window.innerWidth
  for (const [el, { src, cp }] of pending) {
    if (cp) {
      const pr = cp.getBoundingClientRect()
      if (!inView(pr, wh, ww)) continue
    }
    const r = el.getBoundingClientRect()
    if (inView(r, wh, ww)) {
      el.src = src
      el.classList.remove('lazy-pending')
      el.classList.add('lazy-loading')
      pending.delete(el)
    }
  }
  if (pending.size) rafId = requestAnimationFrame(check)
}

export default {
  mounted(el, binding) {
    el.src = PH
    el.classList.add('lazy-pending')
    pending.set(el, { src: binding.value, cp: getClipParent(el) })
    el.onload = () => {
      el.classList.remove('lazy-loading')
      el.classList.add('lazy-loaded')
    }
    el.onerror = () => {
      el.classList.remove('lazy-loading')
      el.classList.add('lazy-loaded')
    }
    if (!rafId) rafId = requestAnimationFrame(check)
  },
  unmounted(el) {
    pending.delete(el)
    if (!pending.size && rafId) {
      cancelAnimationFrame(rafId)
      rafId = null
    }
  }
}
