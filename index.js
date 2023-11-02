let button = document.querySelector('button');
// روش 1 for click
// button.onclick = function(){
//     document.body.style.backgroundColor = 'red';
// }

// روش 2
// button.addEventListener('click' , function(){
//     document.body.style.backgroundColor = 'red';
// })
// or 
// function ChangeColor(){
//     document.body.style.backgroundColor = 'red';
//     console.log('click');
// }
// button.addEventListener('click' , ChangeColor);

// mouse event
// click and dbl click

// button.addEventListener('dblclick' , dbl);
// function dbl(){
//     console.log('dbl')
// }
// button.addEventListener('click' , function(){
//     console.log('click')
// });

//mouse dwon , up
// button.addEventListener('mousedown' , function(){
//     console.log('mousedewn');
//     document.body.style.backgroundColor = 'red';
// })
// button.addEventListener('mouseup' , function(){
//      console.log('mouse up');
//      document.body.style.backgroundColor = 'blue';
// });
// button.addEventListener('click' , function(){
//     console.log('click');
//     document.body.style.backgroundColor = 'yellow';
// });
// button.addEventListener('mouseenter' , function(){
//     console.log('mousenter');
// })
// mouseenter , leave
const container = document.querySelector('.container');
const child = document.querySelector('.child');

container.addEventListener('mouseenter' , function(){
    console.log('mouse enter : container')
});
child.addEventListener('mouseleave' , function(){
    console.log('mouse leave : child')
});
child.addEventListener('mousemove' , function(){
    console.log('mouse move : child')
});
