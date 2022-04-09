var foo = document.getElementById('oof')
var bar = document.getElementById('rab')
var foobar = document.getElementById('plusultra')
var main = document.querySelector('main')

foo.addEventListener("click", function(){ 
    console.log(foo);
    const h3 = document.createElement('h3');
    h3.textContent = "Foo";
    main.appendChild(h3);
})
bar.addEventListener("click", function(){
    console.log(bar);
    const h3 = document.createElement('h3');
    h3.textContent = "Bar";
    main.appendChild(h3);
})
foobar.addEventListener("click", function(){
    console.log(foobar);
    const h2 = document.createElement('h2');
    h2.textContent = "FooBar";
    main.appendChild(h2);
})
