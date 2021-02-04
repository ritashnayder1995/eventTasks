const mobileButtonMenu = document.getElementById('mobileButton');

mobileButtonMenu.addEventListener('click', handleClick);

function handleClick (event) {
  const mobileMenuList = document.querySelector('.mobile > .menu');
  if (mobileMenuList.style.display === 'none') {
    mobileMenuList.style.display = 'block'
  } else {
    mobileMenuList.style.display = 'none'
  }
}