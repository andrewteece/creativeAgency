const toggle = document.querySelector('.nav__toggle')
const navigation = document.querySelector('.main__nav')

toggle.addEventListener('click', () => {
  toggle.classList.toggle('active')
  navigation.classList.toggle('active')
})
