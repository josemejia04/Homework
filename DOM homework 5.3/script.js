let quotes = [
    `I live my life a quarter mile at a time`,
    `I said a ten-second car, not a ten-minute car`,
    `You can have any brew you want... as long as it's a Corona.`,
    `You almost had me? You never had me - you never had your car!`,
    `I don't have friends. I have family.`,
    `It don't matter if you win by an inch or a mile. Winning's winning.`
  ];
  
  document.addEventListener("DOMContentLoaded", function(event) {
    // Random quote of the day generator
    const randomQuote = function() {
      document.querySelector('#quote-of-the-day').textContent = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
    };
    randomQuote();
    
    // Do all of your work inside the document.addEventListener  
  
    // Part 1
  const h1 = document.querySelector('#main-title');
  h1.textContent = "DOM's Page";
  
    // Part 2
  const body = document.querySelector('body');
  body.style.backgroundColor = "lightBlue";
  
    // Part 3
  function removeLastList() {
    const lastItem = document.querySelector('#favorite-things li:last-child');
    lastItem.parentNode.removeChild(lastItem);
  }
  removeLastList();
  
  // const favoriteThings = document.querySelectorAll('#favorite-things > li');
  // document.querySelector('#favorite-things').removeChild(favoriteThings[favoriteThings.length - 1]);
   
  // Part 4
    const specialTitle = document.querySelectorAll('.special-title');
    for(let i of specialTitle){
        i.style.fontSize = '2rem';
    }
    
    // document.querySelectorAll('.special-title').forEach((item) => {
    //   item.style.fontSize = '2rem';
    // });
  
    // Part 5
  
    const pastRaces = document.querySelectorAll('#past-races li');
    pastRaces[3].remove();
  
  // document.querySelectorAll('#past-races > li').forEach((item) => {
  //   if (item.textContent.trim() === 'Chicago') {
  //     document.querySelector('#past-races).removeChild(item);
  //   }
  // });
  
    // Part 6
    const newRace = document.querySelector('#past-races');
    const newCity = document.createElement('li');
    newCity.textContent = 'Charlotte';
    newRace.appendChild(newCity);
  
  const li = document.createElement('li');
  li.textContent = 'Queen City';
  document.querySelector('#past-races').appendChild(li);
  
    // Part 7
  const main = document.querySelector('.main');
  
  const charlotteBlog = document.createElement('div');
  charlotteBlog.classList.add('blog-post');
  charlotteBlog.classList.add('purple');
  
  main.appendChild(charlotteBlog);
  
  const charlotteBlogH2 = document.createElement('h1');
  charlotteBlogH2.textContent = 'Charlotte';
  
  charlotteBlog.append(charlotteBlogH2);
  
  const charlotteBlogPara = document.createElement('p');
  charlotteBlogPara.textContent = 'I raced Jose and lost my 10 second car';
  
  charlotteBlogH2.append(charlotteBlogPara);
  
  const blogPost = document.createElement('div');
  blogPost.classList.add('blog-post');
  blogPost.classList.add('purple');
  const heading = document.createElement('h1');
  heading.textContent = 'Queen City';
  const paraEle = document.createElement('p');
  paraEle.textContent = 'My Hometown';
  document.querySelector('.main').appendChild(blogPost);
  blogPost.appendChild(heading);
  blogPost.appendChild(paraEle);
  
    // Part 8
  
  const quoteTitle = document.querySelector('#quote-title');
  
  quoteTitle.addEventListener('click', function(){
    randomQuote()
  });
  
  // document.querySelector('#quote-title').addEventListener('click', () => randomQuote();
  // });
  
    // Part 9
  const blogPosts = document.querySelectorAll('.blog-post');
  blogPosts.forEach((posts) => {
  posts.addEventListener('mouseout', (event) => {
  event.currentTarget.classList.toggle('purple');
  })
  posts.addEventListener('mouseenter', (event) => {
    event.stopPropagation();
    event.currentTarget.classList.toggle('red');
  })
  })
  
  // document.querySelectorAll('.blog-post').forEach((item) => {
  //   item.addEventListener('mouseout', (e) => {
  //     e.currentTarget.classList.toggle('purple');
  //   });
  //   item.addEventListener('mouseenter', (e) => {
  //     e.currentTarget.classList.toggle('red');
  //   });
  // });
  
  
  });
  