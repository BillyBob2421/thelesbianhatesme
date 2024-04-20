// Key
let eventKey = localStorage.getItem('eventKey') || '`'
let eventKeyRaw = localStorage.getItem('eventKeyRaw') || '`'
let pLink = localStorage.getItem('pLink') || 'https://classroom.google.com/'

document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('eventKeyInput').value = eventKeyRaw
  document.getElementById('linkInput').value = pLink

  const selectedOption = localStorage.getItem('selectedOption')
  if (selectedOption) {
    updateHeadSection(selectedOption)
  }
})

const eventKeyInput = document.getElementById('eventKeyInput')
eventKeyInput.addEventListener('input', function () {
  eventKey = eventKeyInput.value.split(',')
})

var linkInput = document.getElementById('linkInput')
linkInput.addEventListener('input', function () {
  pLink = linkInput.value
})

function saveEventKey() {
  eventKey = eventKeyInput.value.split(',')
  eventKeyRaw = eventKeyInput.value
  localStorage.setItem('eventKey', JSON.stringify(eventKey))
  localStorage.setItem('pLink', pLink)
  localStorage.setItem('eventKeyRaw', eventKeyRaw)
  window.location = window.location
}
function redirectToMainDomain() {
  var currentUrl = window.location.href
  var mainDomainUrl = currentUrl.replace(/\/[^\/]*$/, '')
  if (window != top) {
    top.location.href = mainDomainUrl + window.location.pathname
  } else {
    window.location.href = mainDomainUrl + window.location.pathname
  }
}

document.addEventListener('DOMContentLoaded', function (event) {
  const icon = document.getElementById('tab-favicon')
  const name = document.getElementById('tab-title')
  var selectedValue = localStorage.getItem('selectedOption') || 'Default'
  document.getElementById('dropdown').value = selectedValue
  updateHeadSection(selectedValue)
})

document.getElementsByClassName('td')[0].value = themeId

const themeDropdown = document.getElementsByClassName('td')
dropdown.addEventListener('change', function () {
  const selectedValue = dropdown.value

  localStorage.setItem('theme', selectedValue)

  window.location = window.location
})
