// Currently going through each explained feature on https://github.com/janl/mustache.js/
// Each block of runnable code is separated by 3 lines.
// In order to test out a block of code, simply uncomment it.
// If there's an HTML comment, take that and paste it into the body of the index.html.
// If there's a template.mustache comment, take that and paste it into the template.mustache file.



// // START: sets the inner HTML of an h1 to a Mustache template
// // HTML: <h1 class="title"></h1>
// let title = document.getElementById('title')
// let view = {
//   name: 'Kaleb',
//   calc: ()=> 2+4
// }
// let template = '{{name}} spends {{calc}}'
// let output = Mustache.render(template, view)

// title.innerHTML = output



// // TEMPLATES: pulls the template from a script in the index.html with the type of x-tmpl-mustache, then renders it with a view and outputs it to the target's innerHTML
// // HTML: <div id="target">Loading...</div>
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



// // VARIABLES WITH DOT NOTATION: calling variables inside of an keys that are properties of objects
// // HTML: <div id="target"></div>
// let target = document.getElementById('target')
// let template = '* {{name.first}} {{name.last}}{{&lb}}* {{age}}'
// let view = {
//     name: {
//         first: 'Kaleb',
//         last: 'Dykema'
//     },
//     age: 22,
//     lb: '<br>'
// }
// let output = Mustache.render(template, view)
// target.innerHTML = output



// // SECTIONS: displaying sections or not displaying them based on the value of a variable
// // HTML: <div id="target"></div>
// let target = document.getElementById('target')
// let template = `
//     Shown.{{&br}}
//     {{#person}}
//     Never shown!
//     {{/person}}
//     `
// let view = {
//     person: false,
//     br: '<br>'
// }
// let output = Mustache.render(template, view)

// target.innerHTML = Mustache.render(template, view)



// // NON-EMPTY LISTS
// // HTML: <div id="target"></div>`
// let target = document.getElementById('target')
// let template = `
//     {{#stooges}}
//     <h2>{{name}}</h2>
//     {{/stooges}}
// `
// let view = {
//     stooges: [
//         { name: 'Moe' },
//         { name: 'Larry' },
//         { name: 'Curly' }
//     ]
// }
// let output = Mustache.render(template, view)

// target.innerHTML = output



// // LOOPING THROUGH LISTS WITH .: when looping through a list, typing a . in a tag simply uses the current item in the list
// // HTML: <div id="target"></div>
// let target = document.getElementById('target')
// let template = `
//     {{#musketeers}}
//     * {{.}}<br>
//     {{/musketeers}}
// `
// let view = {
//     musketeers: [
//         "Athos",
//         "Aramis",
//         "Porthos",
//         "D'Artagnan"
//     ]
// }
// let output = Mustache.render(template, view)
// target.innerHTML = output



// // LOOPING THROUGH WITH A FUNCTION: calls a function each loop through the array contained in the surrounding tag, setting the current object to this
// // HTML: <div id="target"></div>
// let target = document.getElementById('target')
// let template = `
//     {{#beatles}}
//     * {{name}}<br>
//     {{/beatles}}
// `
// let view = {
//     beatles: [
//         {firstName: 'Paul', lastName: 'McCartney'},
//         {firstName: 'John', lastName: 'Lennon'},
//         {firstName: 'Ringo', lastName: 'Star'},
//         {firstName: 'George', lastName: 'Harrison'}
//     ],
//     name: function() {
//         return `${this.firstName} ${this.lastName}`
//     }
// }
// let output = Mustache.render(template, view)

// target.innerHTML = output



// // FUNCTIONS: a section's name can be the name of a function it calls as well, rather than the nested tag having to be a function
// // HTML: <div id="target"></div>
// let target = document.getElementById('target')
// let template = '{{#bold}}Hi {{name}}.{{/bold}}'
// let view = {
//     name: 'Kaleb',
//     bold: function() {
//         return function(view, render){
//             return `<b>${render(view)}</b>`
//         }
//     }
// }
// let output = Mustache.render(template, view)
// target.innerHTML = output



// // INVERTED SECTIONS: when starting a section with a carat instead of a hash, it only renders if the value is null, undefined, false, falsy, or an empty list
// // HTML: <div id="target"></div>
// let target = document.getElementById('target')
// let template = `
//     {{#repos}}<b>{{name}}</b>{{/repos}}
//     {{^repos}}No repos :({{/repos}}
// `
// let view = {
//     repos: []
// }
// let output = Mustache.render(template, view)
// target.innerHTML = output



// // COMMENTS: starting a tag with ! makes it a comment
// // HTML: <div id="target"></div>
// let target = document.getElementById('target')
// let template = `<h1>Today{{! ignore me }}.</h1>`
// let output = Mustache.render(template, {})
// target.innerHTML = output



// // PARTIALS: further breaking up templates into smaller pieces
// // HTML: <div id="target"></div>
// let target = document.getElementById('target')
// let template = `
//     <h2>Names</h2>
//     {{#names}}
//         {{> user}}
//     {{/names}}
// `
// let view = {
//     names: [
//         { name: 'Kaleb '},
//         { name: 'Crowe '},
//         { name: 'Bill '},
//         { name: 'Theresa '}
//     ]
// }
// let partials = {
//     user: '<b>{{name}}</b><br>'
// }
// let output = Mustache.render(template, view, partials)
// target.innerHTML = output



// // CUSTOM DELIMITERS: instead of using {{}} for tags, can switch to something else
// // HTML: <div id="target"></div>
// let target = document.getElementById('target')
// let customTags = ['<%', '%>']
// let template = `
// <%#turtles%>
// <%name%><br>
// <%/turtles%>
// `
// let view = {
//     turtles: [
//         {name: 'Leonardo'},
//         {name: 'Raphael'},
//         {name: 'Donatello'},
//         {name: 'Michelangelo'}
//     ]
// }
// // Parse and render calls will use the custom tags if the tags are directly set
// // Mustache.tags = customTags
// let output = Mustache.render(template, view, {}, customTags)
// target.innerHTML = output



// // SETTING DELIMITERS IN TEMPLATES: you can set delimiters in templates as well
// // HTML: <div id="target"></div>
// let target = document.getElementById('target')
// let template = `
//     * {{ default_tags }}<br>
//     {{=<% %>=}}
//     * <% erb_style_tags %><br>
//     <%={{ }}=%>
//     * {{ default_tags_again }}<br>
// `
// let view = {
//     default_tags: 'Default',
//     erb_style_tags: 'ERB Style Tags',
//     default_tags_again: 'Default Again'
// }
// let output = Mustache.render(template, view)
// target.innerHTML = output



// // PRE-PARSING AND CACHING TEMPLATES: normally render() parses the template first, but you can do that ahead of time if you wish
// // HTML: <div id="target"></div>
// let target = document.getElementById('target')
// let template = `
//     <h1>{{ pre_parsed }}</h1>
// `
// let view = {
//     pre_parsed: "Pre-parsed"
// }
// Mustache.parse(template)
// let output = Mustache.render(template, view)
// target.innerHTML = output



