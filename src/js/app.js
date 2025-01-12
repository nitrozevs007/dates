let elLoading = document.querySelector('.loading')
let imgLoad = document.querySelector('img')
let elDay = document.querySelector('.day')
let elMonth = document.querySelector('.month')
let elYear = document.querySelector('.year')
let elHour = document.querySelector('.hour')
let elMinute = document.querySelector('.min')
let elSecond = document.querySelector('.sec')
let elDot = document.querySelectorAll('.dot')
let elLight = document.querySelector('.light')


setInterval(() => {

  const date = new Date()

  elHour.textContent = date.getHours()
  if (elHour.textContent <= 9) {
    elHour.textContent = '0' + date.getHours()
  } else {
    elHour.textContent = date.getHours()
  }

  elMinute.textContent = date.getMinutes()
  if (elMinute.textContent <= 9) {
    elMinute.textContent = '0' + date.getMinutes()
  } else {
    elMinute.textContent = date.getMinutes()
  }

  elSecond.textContent = date.getSeconds()
  if (elSecond.textContent <= 9) {
    elSecond.textContent = '0' + date.getSeconds()
  } else {
    elSecond.textContent = date.getSeconds()
  }

  elDay.textContent = date.getDate()
  if (elDay.textContent <= 9) {
    elDay.textContent = '0' + date.getDate()
  } else {
    elDay.textContent = date.getDate()
  }

  elMonth.textContent = date.getMonth() + 1
  if (elMonth.textContent <= 9) {
    elMonth.textContent = '0' + (date.getMonth() + 1)
  } else {
    elMonth.textContent = date.getMonth() + 1
  }

  elYear.textContent = date.getFullYear()

  elDot.style.color = 'black'

 
}, 1000);


const date = new Date();
let currentDayIndex = date.getDay(); // Hozirgi hafta kuni indeksi (0 = Sunday, 6 = Saturday)

// Yakshanbani hafta oxiriga (6 indeksga) ko‘chirish
if (currentDayIndex === 0) {
  currentDayIndex = 6; // Sunday => 6
} else {
  currentDayIndex -= 1; // Boshqa kunlarni 1 ga kamaytirish
}

// Barcha "day" elementlarini olish
const dayElements = document.querySelectorAll('.day');

// Aktiv klassni boshqarish
dayElements.forEach((day, index) => {
  if (index === currentDayIndex) {
    day.classList.add('active'); // Hozirgi kun uchun class qo'shish
  } else {
    day.classList.remove('active'); // Boshqa kunlardan olib tashlash
  }
});





















// setTimeout(() => {
//   elLoading.classList.remove('loading')
//   imgLoad.classList.add('imgload')
// }, 2000);