// Menu mobile
const btnMobile = document.getElementById('btn-mobile')

const mobile = () => {
  const nav = document.getElementById('nav')
  nav.classList.toggle('active')
}

btnMobile.addEventListener('click', mobile)

