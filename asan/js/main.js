const lnb_btn = document.querySelector('.lnb_btn')
const lnb_btnImg = document.querySelector('.lnb_btn')
const open = () => {
   if(!wrap.classList.contains('on')){
      wrap.classList.add('on');
      lnb_btnImg.setAttribute('src','img/bc_header_lnb_active.png')
   } else {close()}

   
}

const close = ()=> {
   wrap.classList.remove('on');
   lnb_btnImg.setAttribute('src', 'img/bg')
}
lnb_btn.addEventListener('click',open)
