var menuLinks = [
  {text: 'about', href: '/about'},
  {text: 'catalog', href: '#', subLinks: [
    {text: 'all', href: '/catalog/all'},
    {text: 'top selling', href: '/catalog/top'},
    {text: 'search', href: '/catalog/search'},
  ]},
  {text: 'orders', href: '#' , subLinks: [
    {text: 'new', href: '/orders/new'},
    {text: 'pending', href: '/orders/pending'},
    {text: 'history', href: '/orders/history'},
  ]},
  {text: 'account', href: '#', subLinks: [
    {text: 'profile', href: '/account/profile'},
    {text: 'sign out', href: '/account/signout'},
  ]},
];

const mainEl = document.querySelector('main');
mainEl.style.backgroundColor = 'var(--main-bg)';
mainEl.innerHTML = '<h1>SEI Rocks!</h1>';
mainEl.classList.add('flex-ctr');


const topMenuEl = document.querySelector('#top-menu');
topMenuEl.style.height = '100%'
topMenuEl.style.backgroundColor = 'var(--top-menu-bg)';
topMenuEl.classList.add('flex-around');


for(let i of menuLinks){
  const links = document.createElement('a');
  let linksText = document.createTextNode(i.text);
  links.append(linksText);
  links.href = i.href;
  topMenuEl.append(links);
};

//======================Task 4.0 - 4.5====================================
const subMenuEl = document.querySelector('#sub-menu');
subMenuEl.style.height = '100%';
subMenuEl.style.backgroundColor = 'var(--sub-menu-bg)';
subMenuEl.classList.add('flex-around');
subMenuEl.style.position = 'absolute';
subMenuEl.style.top = '0';

//======================Task 5.1==========================================
const topMenuLinks = document.querySelectorAll('#top-menu a');
let showingSubMenu = false;

//======================Task 5.2=========================================
topMenuEl.addEventListener('click', function(e) {
  e.preventDefault();
  const link = e.target;
  if (link.tagName !== 'A') return;
  console.log(link.textContent);
 
  //=========================Task 5.3=====================================
  if (link.classList.contains('active')) {
    link.classList.remove('active');
    showingSubMenu = false;
    subMenuEl.style.top = '0';
    return;
  }
//======================Task 5.4 - 5.5====================================
  topMenuLinks.forEach(function(link) {
    link.classList.remove('active');
  });
  link.classList.add('active');

  //======================Task 5.6========================================
  const secLinks = menuLinks.find(function(objEle) {
    return objEle.text === link.textContent;
  });
  showingSubMenu = 'subLinks' in secLinks;
  
//======================Task 5.7==========================================
  if (showingSubMenu === true) {
    buildSubMenu(secLinks.subLinks);
    subMenuEl.style.top = '100%';
  } else {
    subMenuEl.style.top = '0';
    mainEl.innerHTML = '<h1>about</h1>';
  }
});

//======================Task 5.8==========================================
function buildSubMenu(subLinks){
  subMenuEl.innerHTML = '';

  subLinks.forEach(function(link){
    const linkEl = document.createElement('a');
    linkEl.setAttribute('href', link.href);
    linkEl.textContent = link.text;
    subMenuEl.appendChild(linkEl);
  });
}

//======================Task 6.0 - 6.3====================================
subMenuEl.addEventListener('click', function(e){
  e.preventDefault();
  const link = e.target;
  if (link.tagName !== 'A') return;
  showingSubMenu = false;
  subMenuEl.style.top = '0';
  topMenuLinks.forEach(function(link){
    link.classList.remove('active');
  });
  mainEl.innerHTML = `<h1>${link.textContent}</h1>`;
});