    }
  }
})

// Themes
var themeid = localStorage.getItem('theme')
themeEle = document.createElement('link')
themeEle.rel = 'stylesheet'
if (themeid == 'catppuccinMocha') {
  themeEle.href = '/assets/styles/themes/catppuccin/mocha.css?v=1'
}
if (themeid == 'catppuccinMacchiato') {
  themeEle.href = '/assets/styles/themes/catppuccin/macchiato.css?v=1'
}
if (themeid == 'catppuccinFrappe') {
  themeEle.href = '/assets/styles/themes/catppuccin/frappe.css?v=1'
}
if (themeid == 'catppuccinLatte') {
  themeEle.href = '/assets/styles/themes/catppuccin/latte.css?v=1'
}
document.body.appendChild(themeEle)
// Tab Cloaker
document.addEventListener('DOMContentLoaded', function (event) {
  const icon = document.getElementById('tab-favicon')
  const name = document.getElementById('tab-title')
  var selectedValue = localStorage.getItem('selectedOption')
  if (selectedValue === 'Google') {
