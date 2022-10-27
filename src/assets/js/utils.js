export function lockBody() {
  document.body.style.paddingRight = `${
      window.innerWidth - document.documentElement.clientWidth
  }px`;
  document.body.style.height = '100%';
  document.body.style.overflow = 'hidden';
  document.body.style.touchAction = 'none';
}

export function unlockBody() {
  document.body.style.height = '';
  document.body.style.overflow = '';
  document.body.style.touchAction = '';
  document.body.style.paddingRight = '';
}
