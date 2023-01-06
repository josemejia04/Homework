let  menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '/catalog'},
    {text: 'orders', href: '/orders'},
    {text: 'account', href: '/account'},
  ];

let mainEl = document.querySelector('main');
mainEl.style.backgroundColor = '#4a4e4d';
mainEl.innerHTML = '<h1>SEI Rocks!</h1>';
mainEl.classList.add('flex-ctr');

let topMenuEl = document.querySelector('#top-menu');
topMenuEl.style.height = '100%';
topMenuEl.style.backgroundColor = '#0e9aa7';
topMenuEl.classList.add('flex-around');


for(let i of menuLinks){
    let links = document.createElement('a');
    let linksText = document.createTextNode(i.text);
    links.append(linksText);
    links.href = i.href;
    topMenuEl.append(links);
  };
