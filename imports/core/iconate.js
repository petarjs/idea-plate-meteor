class Iconate {
  constructor() {
    'ngInject';
  }

  morph(fromIcon, toIcon, animation = 'bounceOutTop', nonReversable = false) {
    fromIcon = fromIcon.indexOf('fa-') === 0 ? fromIcon : `fa-${fromIcon}`
    toIcon = toIcon.indexOf('fa-') === 0 ? toIcon : `fa-${toIcon}`
    let el = document.querySelector(`.${fromIcon}`)
    let opts = { from: fromIcon, to: toIcon, animation }

    if(!el && !nonReversable) {
      el = document.querySelector(`.${toIcon}`)
      opts = { from: toIcon, to: fromIcon, animation }
    }
    
    iconate(el, opts)
  }
}

export default angular.module('iconate', []).service('Iconate', Iconate);