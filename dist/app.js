// DOM Objects
let title = document.getElementById('title')

// Mustache Object
let view = {
  title: 'Kaleb',
  calc: ()=> 2+4
}

// Mustache Template
let template = '{{title}} spends {{calc}}'

// Mustache Render
let output = Mustache.render(template, view)

// Adds to dom
title.innerHTML = output

// console.log(title)