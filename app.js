// Display menu on mobile version when burger button is clicked
const burger = document.querySelector('.burger');
const navigation = document.querySelector('.links');

burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    navigation.classList.toggle('active');
  });
  
  document.querySelectorAll('.nav-links').forEach((n) => n.addEventListener('click', () => {
    burger.classList.remove('active');
    navigation.classList.remove('active');
  }));

  // Array containing all speakers data
  const developers = [
    {
        image1: './images/angle-img.png',
        image: './images/person1.jpg',
        name: 'Bigizi Crispin',
        role: 'Software Engineering lead',
        description: 'Crispin has 10 years of experience in banking and other financial institutions. He lead many projects.',
    },
    {
        image1: './images/angle-img.png',
        image: './images/person.jpg',
        name: 'Ndayi Valery',
        role: 'Software Developer',
        description: 'Valery is a senior developer with 5 years of experience in software development.',
    },
    {
        image1: './images/angle-img.png',
        image: './images/person3.jpg',
        name: 'Giso Pazzo',
        role: 'Product manager',
        description: 'Pazzo is experienced in business and how to link the business with current technology to make the company is well digitalized.',
    },
    {
        image1: './images/angle-img.png',
        image: './images/person4.jpg',
        name: 'Tamba Dany',
        role: 'Full stack Developer',
        description: 'Danny is a developer both on frontend and backend sides with a great achievement in different products.',
    },
    {
        image1: './images/angle-img.png',
        image: './images/person5.jfif',
        name: 'Tuyi juju',
        role: 'Integration Engineer',
        description: 'Juju is a very passionate person with current technology where she works an integration engineer in a Bank.',
    },
    {
        image1: './images/angle-img.png',
        image: './images/person.jpg',
        name: 'Ingabire Clementine',
        role: 'Database Admin',
        description: 'Clementine is certified person in different databases e.g: Oracle and MS SQL Server',
    },
  ];


  const speakers = document.querySelector('.section3-cards');

  for (let i = 0; i < developers.length; i++) {
    
    speakers.innerHTML += `
    <div class="all-cards">
        <div class="img-container">
            <img class="all-image" src=${developers[i].image1} alt="">
            <img class="all-images" src=${developers[i].image} alt="">
        </div>
        <div>
            <h5 class="cards-h5">${developers[i].name}</h5>
            <span class="cards-span">${developers[i].role}</span><br/>
            <hr class="line"><br/><br/>
            <p class="cards-p">${developers[i].description}</p>
        </div> <br/>
    </div>
     `
  }
