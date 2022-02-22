let beli = document.querySelector('.beli');
let menu = document.querySelector('.layout-menu')
document.querySelector('#shopping-cart').onclick = () =>{
    beli.classList.toggle('active');
    
}
document.querySelector('#btn-close').onclick = () =>{
    document.querySelector('.blackout').style.display = 'none';
}
