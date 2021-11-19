const allNavTopLink = document.querySelectorAll('.nav-link-top');

allNavTopLink.forEach(link => {
  link.addEventListener('focus', function() {
    this.parentElement.classList.add('focus');
    console.log(link.nextElementSibling)
  });

  if(link.nextElementSibling) { 
    const subMenu = link.nextElementSibling;
    const subMenuLinks = subMenu.querySelectorAll('a');// [<a HTML>, <a CSS>, <a JS>]
    const lastLinkIndex = subMenuLinks.length - 1; // 2
    const lastLink = subMenuLinks[lastLinkIndex]; //Last Link Node
  
    lastLink.addEventListener('blur', function() {
      link.parentElement.classList.remove('focus');
    })
  }

});