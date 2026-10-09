const form = document.querySelector('#form')
const intento = document.querySelector('#intento')
const resultado = document.querySelector('#resultado')

const API = 'https://api.restcountries.com/countries/v5'
const API_KEY = 'rc_live_548d3091bbaf4794aee5c15db3aa852f'

const MAX_INTENTOS = 3
const MAX_RONDAS = 3
const TOLERANCIA = 0.2 // mas o menso 20%

let ronda = 0
let intentos = 0
let paisActual = null
let juegoActivo = false

form.addEventListener('submit', adivinar)

function mostrarPais(mensaje = '') {
  resultado.innerHTML = `
    <p>Ronda ${ronda}/${MAX_RONDAS} · Intentos restantes: ${intentos}</p>
    <h2>${paisActual.name}</h2>
    <img src="${paisActual.flag.url_svg}" width="200" />
    <p>${mensaje}</p>
  `
}

function adivinar(event) {
  event.preventDefault()
  if (!juegoActivo || !intento.value) return

  const guess = Number(intento.value)
  const real = paisActual.population
  intento.value = ''

  const acierto = Math.abs(guess - real) <= real * TOLERANCIA

  if (acierto) {
    juegoActivo = false
    if (ronda === MAX_RONDAS) return terminar(true)
    resultado.innerHTML = `<p>✅ Correcto! Población: ${real.toLocaleString()}.</p><br><p>Siguiente ronda....</p>`
    setTimeout(iniciarRonda, 1500)
    return
  }

  intentos--
  if (intentos === 0) {
    juegoActivo = false
    return terminar(false, real)
  }
  mostrarPais(
    guess < real
      ? '❌ Te quedaste corto... Prueba con más!'
      : '❌ Te pasaste! Prueba con menos...',
  )
}

function terminar(gano, real) {
  resultado.innerHTML = gano
    ? `<h2>🏆 Ganaste ${MAX_RONDAS} rondas!!!</h2>`
    : `<h2>💀 Perdiste. ${paisActual.name} tiene ${real.toLocaleString()} gente</h2>`
  resultado.innerHTML += `<button id="reiniciar">Jugar otra vez</button>`
  document.querySelector('#reiniciar').addEventListener('click', () => {
    ronda = 0
    iniciarRonda()
  })
}

async function obtenerPaisAleatorio() {
  return fetch(API, {
    headers: { Authorization: `Bearer ${API_KEY}` },
  })
    .then(function (response) {
      if (!response.ok) throw new Error('HTTP ' + response.status)
      return response.json()
    })
    .then(function (info) {
      const paises = info.data.objects
      return paises[Math.floor(Math.random() * paises.length)]
    })
}

async function iniciarRonda() {
  ronda++
  intentos = MAX_INTENTOS
  juegoActivo = false
  resultado.innerHTML = '<p>Buscando país...</p>'

  return obtenerPaisAleatorio()
    .then(function (pais) {
      paisActual = pais
      juegoActivo = true
      mostrarPais()
    })
    .catch(function (error) {
      resultado.innerHTML =
        '<p>No hemos encontrado país! PERO QUÉ TRAGEDIA!</p>'
      console.log('Error al consultar el pais ' + error)
    })
}

iniciarRonda()
