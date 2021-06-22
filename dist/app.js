// // START: sets the inner HTML of an h1 to a Mustache template
// // <h1 class="title"></h1>
// let title = document.getElementById('title')
// let view = {
//   name: 'Kaleb',
//   calc: ()=> 2+4
// }
// let template = '{{name}} spends {{calc}}'
// let output = Mustache.render(template, view)

// title.innerHTML = output



// // TEMPLATES: pulls the template from a script in the index.html with the type of x-tmpl-mustache, then renders it with a view and outputs it to the target's innerHTML
// // <div id="target">Loading...</div>
// //   <script id="template" type="x-tmpl-mustache">
// //   Hello {{name}}!
// // </script>
// document.onload = renderHello()

// function renderHello() {
//   let target = document.getElementById('target')
//   let template = document.getElementById('template').innerHTML
//   let output = Mustache.render(template, {name: 'Kaleb'})
//   target.innerHTML = output
// }



// // LOADING EXTERNAL TEMPLATES: same as above, but with templates stored in individual files and done asynchronously with fetch 
// // HTML: <div id="target">Loading...</div>
// // template.mustache: Hello {{name}}!
// document.onload = renderHello()

// function renderHello(){
//   fetch('./template.mustache')
//     .then((response => response.text()))
//     .then((template) => {
//       let output = Mustache.render(template, {name: 'Kaleb'})
//       document.getElementById('target').innerHTML = output
//     })
// }



// // VARIABLES: testing triple curly bracket variables to use unescaped HTML, in addition to & inside {{}}
// // HTML: <div id="target"></div>
// // Template: 
// // * {{name}}
// // * {{age}}
// // * {{company}}
// // * {{{company}}}
// // * {{&company}}
// // {{=<% %>=}}
// // * {{company}}
// // <%={{ }}=%>
// let target = document.getElementById('target')
// let view = {
//     name: 'Kaleb',
//     company: '<b>Redstone Content Solutions</b>'
// } 

// fetch('./template.mustache').then(res=>res.text()).then(template=>{
//     let output = Mustache.render(template, view)
//     target.innerHTML = output
// })


