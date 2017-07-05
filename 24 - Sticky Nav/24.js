const nav = document.querySelector("#main");
const navTop = nav.offsetTop;

function stickyNav() {
  if( window.scrollY >= navTop) {
    document.body.style.paddingTop = nav.offsetHeight + "px";
    document.body.classList.add('stickyNav')
  }else {
    document.body.style.paddingTop = 0;
    document.body.classList.remove('stickyNav')
  }
}

window.addEventListener('scroll', stickyNav);
