// // START: sets the inner HTML of an h1 to a Mustache template
// let title = document.getElementById('title')
// let view = {
//   name: 'Kaleb',
//   calc: ()=> 2+4
// }
// let template = '{{name}} spends {{calc}}'
// let output = Mustache.render(template, view)

// title.innerHTML = output



// // TEMPLATES: pulls the template from a script in the index.html with the type of x-tmpl-mustache, then renders it with a view and outputs it to the target's innerHTML
// document.onload = renderHello()

// function renderHello() {
//   let target = document.getElementById('target')
//   let template = document.getElementById('template').innerHTML
//   let output = Mustache.render(template, {name: 'Kaleb'})
//   target.innerHTML = output
// }



// 