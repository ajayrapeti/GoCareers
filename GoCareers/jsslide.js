let slideIndex = 0;
let slides = document.getElementsByClassName("mySlides");
let captions = document.getElementsByClassName("text");
let dots = document.getElementsByClassName("dot");

showSlides();

// Automatic slideshow
setInterval(() => { 
    slideIndex++;
    if (slideIndex >= slides.length) {
        slideIndex = 0;
    }
    showSlides();
}, 2400);

// Show slides based on index
function showSlides() {
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        captions[i].classList.add("hidden");
        dots[i].classList.remove("active");
    }
    
    slides[slideIndex].style.display = "block";
    captions[slideIndex].classList.remove("hidden");
    dots[slideIndex].classList.add("active");
}

// Next/previous controls
function plusSlides(n) {
    slideIndex += n;
    if (slideIndex >= slides.length) {
        slideIndex = 0;
    } else if (slideIndex < 0) {
        slideIndex = slides.length - 1;
    }
    showSlides();
}

// Thumbnail image controls
function currentSlide(n) {
    slideIndex = n - 1;
    if (slideIndex >= slides.length) {
        slideIndex = 0;
    } else if (slideIndex < 0) {
        slideIndex = slides.length - 1;
    }
    showSlides();
}








const cardsContainer = document.getElementById('cards-container');

const counsellorCards = [
  {
    image: 'img/co1.jpeg',
    title: 'BECOME A MASTER WITH GOCAREERS(Bundled Course)',
    details: ['🕮 7 Course Bundle', '• Become Pro Counsellor With GoCareers', '• ₹4̷3̷,̷9̷9̷9 ₹15,000'],
    buttonText: 'VIEW PROGRAM'
  },
  {
    image: 'img/co2.jpeg',
    title: "CAREER COUNSELLOR'S POWER-UP PACKAGE(12 Modules)",
    details: ['🕮 12 Modules', '• Guaranteed Earning Opportunities', '• ₹40,000 - ₹1,00,000'],
    buttonText: 'VIEW PROGRAM'
  },
  {
    image: 'img/co3.jpeg',
    title: 'CERTIFICATION COURSE FOR GUIDING SCHOOL STUDENTS',
    details: ['🕮 16 Modules', '• Learn To Guide School Students', '• ₹1̷5̷,̷0̷0̷0 ₹7,500'],
    buttonText: 'VIEW PROGRAM'
  },
  {
    image: 'img/co4.jpeg',
    title: 'CERTIFICATION COURSE FOR GUIDING COLLEGE STUDENTS',
    details: ['🕮 24+ Modules', '• Learn To Guide College Students', '• ₹7,500'],
    buttonText: 'VIEW PROGRAM'
  },
  {
    image: 'img/co5.jpeg',
    title: 'PERSONAL BRANDING & SALES FOR CAREER COUNSELLORS',
    details: ['🕮 10 Modules', '• Get Sales & Branding Blueprint', '• ₹5,000'],
    buttonText: 'VIEW PROGRAM'
  },
  {
    image: 'img/co6.jpeg',
    title: 'CERTIFICATION COURSE FOR GUIDING WORKING PROFESSIONAL',
    details: ['🕮 14 Modules 50+ Hours', '• Get Blueprints and Checklist', '• ₹1̷0̷,̷0̷0̷0 ₹5,000'],
    buttonText: 'VIEW PROGRAM'
  },
  {
    image: 'img/co7.jpeg',
    title: 'BECOME CERTIFIED PSYCHOMETRIC PRACTITIONER',
    details: ['🕮 20+ Modules', '• Become Coach Career Effective',  '• ₹1̷5̷,̷0̷0̷0 ₹7,500'],
    buttonText: 'VIEW PROGRAM'
  },
  {
    image: 'img/co8.png',
    title: 'CERTIFICATION COURSE FOR GUIDING STUDY ABROAD',
    details: [ '🕮 Bundle of 6 Hours','• Learn To Guide For Study Abroad', '• ₹30̷,̷0̷0̷0 ₹10,000'],
    buttonText: 'VIEW PROGRAM'
  }
];

const workingProfessionalCards = [
  {
    image: 'img/wp1.jpg',
    title: 'MASTERCLASS FOR WORKING PROFESSIONALS',
    details: ['🕮 13 Short Course Bundle', '• Get Promotion In Your Career', '• ₹6̷5̷,̷0̷0̷0 ₹6,500'],
    buttonText: 'VIEW PROGRAM'
  },
  {
    image: 'img/wp2.jpg',
    title: 'CAREER CLARITY SERVICE WITH EXPERT MENTORSHIP',
    details: ['🕮 Psychometric Test+1-4 Video Sessions', '• 6 Months Support', '• ₹5,000 - ₹10,000'],
    buttonText: 'VIEW PROGRAM'
  },
  {
    image: 'img/wp3.jpg',
    title: 'LINKEDIN, RESUME CREATION & REVIEW',
    details: ['🕮 An Updated Resume LinkedIn', '• Unlimited edits for Up to 4 Weeks', '• ₹2̷0̷,̷0̷0̷0 ₹10,000'],
    buttonText: 'VIEW PROGRAM'
  },
  {
    image: 'img/wp4.jpg',
    title: 'CAREER & JOB SWITCH GUIDANCE',
    details: ['🕮 Step By Step Guidance Over 4 Sessions Only With GoCareers', '• 6 Months Support', '• ₹2̷0̷,̷0̷0̷0 ₹10,000'],
    buttonText: 'VIEW PROGRAM'
  }
];

const ForCollegeCards = [
    {
        image: 'img/cl1.jpg',
        title: 'MBA COLLEGE ADMISSION AND GUIDANCE SERVICE(CGAS)',
        details: ['🕮 Get Admission In Best Fit College', '• Support Till Admission', '• ₹5̷0̷,̷0̷0̷0 ₹20,000'],
        buttonText: 'VIEW PROGRAM'
      },
      {
        image: 'img/cl2.jpg',
        title: 'MASTERCLASS FOR COLLEGE STUDENT(MCSCS)',
        details: ['🕮 12 Short Course Bundle', '• Get Right/Dream Job After College', '• ₹6̷5̷,̷0̷0̷0 ₹10,000'],
        buttonText: 'VIEW PROGRAM'
      },
      {
        image: 'img/cl3.jpg',
        title: 'CAREER CLARITY SERVICE FOR COLLEGE STUDENTS(CCSCS)',
        details: ['🕮 Psychometric Test+1-4 Video Sessions', '• 6 Months Support', '• ₹5,000 - ₹10,000'],
        buttonText: 'VIEW PROGRAM'
      },
      {
        image: 'img/co2.jpeg',
        title: 'PROFILE BUILDING SERVICE',
        details: ['🕮 Highlight Your Accomplishments', '• 6 Months Support With Services', '• ₹50,000 - ₹1,50,000'],
        buttonText: 'VIEW PROGRAM'
      },
      {
        image: 'img/wp3.jpg',
        title: 'LINKEDIN, RESUME CREATION & REVIEW',
        details: ['🕮 An Updated Resume LinkedIn', '• Unlimited Edit For 6 Months', '• ₹2̷0̷,̷0̷0̷0 ₹10,000'],
        buttonText: 'VIEW PROGRAM'
      },
      {
        image: 'img/cl6.jpg',
        title: 'HIGHER EDUCATION INDIA GUIDANCE',
        details: ['🕮 Identification Of Right Higher/Executive', '• 2 Months Support With Services', '• ₹10,000'],
        buttonText: 'VIEW PROGRAM'
      },
      {
        image: 'img/cl7.jpg',
        title: 'HIGHER EDUCATION ABROAD GUIDANCE',
        details: ['🕮 Best Admission Expert For Abroad', '• Covers All Country Destination', '• ₹25,000 - ₹1,00,000'],
        buttonText: 'VIEW PROGRAM'
      },
      {
        image: 'img/cl8.jpg',
        title: 'INTERNSHIP GUARANTEED SERVICE',
        details: ['🕮 Get Internship In The Company', '• 6 Months Support(With Guidance)', '• ₹5̷0̷,̷0̷0̷0 ₹20,000'],
        buttonText: 'VIEW PROGRAM'
      }

];

const Class11_12Cards = [
    {
        image: 'img/121.jpg',
        title: 'CAREER CLARITY SERVICE FOR SCIENCE (MATH) GRADUATES',
        details: ['🕮 Psychometric Assessment+Video Calls', '• 1-4 Sessions', '• ₹5,000 - ₹10,000'],
        buttonText: 'VIEW PROGRAM'
      },
      {
        image: 'img/122.jpg',
        title: 'CAREER CLARITY SERVICE FOR COMMERCE AND FINANCE GRADUATES',
        details: ['🕮 Psychometric Assessment+Video Calls', '• 1-4 Sessions', '• ₹5,000 - ₹10,000'],
        buttonText: 'VIEW PROGRAM'
      },
      {
        image: 'img/123.jpg',
        title: 'CAREER CLARITY SERVICE FOR BIOLOGY AND GRADUATES',
        details: ['🕮 Psychometric Assessment+Video Calls', '• 1-4 Sessions', '• ₹5,000 - ₹10,000'],
        buttonText: 'VIEW PROGRAM'
      },
      {
        image: 'img/124.jpg',
        title: 'CAREER CLARITY SERVICE FOR ARTS & HUMANITIES GRADUATES',
        details: ['🕮 Psychometric Assessment+Video Calls', '• 1-4 Sessions', '• ₹5,000 - ₹10,000'],
        buttonText: 'VIEW PROGRAM'
      },
      {
        image: 'img/125.jpg',
        title: 'PROFILE BUILDING SERVICE FOR ABROAD ADMISSION',
        details: ['🕮 Highlight Your Accomplishments', '• 6 Months Support', '• ₹50,000 - ₹1,50,000'],
        buttonText: 'VIEW PROGRAM'
      },
      {
        image: 'img/126.jpg',
        title: 'COLLEGE ADMISSION SERVICE INDIA WIDE ',
        details: ['🕮 Identification Of Right Higher/Executive', '• 2 Months Support With Mentors', '• ₹5̷0̷,̷0̷0̷0 ₹20,000'],
        buttonText: 'VIEW PROGRAM'
      },
      {
        image: 'img/127.jpg',
        title: 'COLLEGE ADMISSION SERVICE ABROAD',
        details: ['🕮 Best Admission Expert For Abroad', '• Covers All Country Destination', '• ₹25,000 - ₹1,00,000'],
        buttonText: 'VIEW PROGRAM'
      },
      {
        image: 'img/128.jpg',
        title: 'ENGINEERING ADMISSION AND GUIDANCE SERVICE(With GoCareers)',
        details: ['🕮 Get Admission In Best Fit College', '• Support Till Admission', '• ₹5̷0̷,̷0̷0̷0 ₹20,000'],
        buttonText: 'VIEW PROGRAM'
      },
      {
        image: 'img/129.jpg',
        title: 'MBBS ADMISSION AND GUIDANCE SERVICE(With GoCareers)',
        details: ['🕮 Get Admission In Best Fit College', '• Support Till Admission', '• ₹5̷0̷,̷0̷0̷0 ₹20,000'],
        buttonText: 'VIEW PROGRAM'
      },
      {
        image: 'img/1210.jpg',
        title: 'BBA ADMISSION AND GUIDANCE SERVICE(With GoCareers) ',
        details: ['🕮 Get Admission In Best Fit College', '• Support Till Admission', '• ₹5̷0̷,̷0̷0̷0 ₹20,000'],
        buttonText: 'VIEW PROGRAM'
      },
      {
        image: 'img/1211.jpg',
        title: 'IDEAL CAREER TEST',
        details: ['​ ','​ ','🕮 180 Questions', '• 60 Minutes', '• ₹2,000','​ ' ],
        buttonText: 'VIEW PROGRAM'
      },
      {
        image: 'img/1212.png',
        title: '21st CENTURY SKILLS & LEARNING TEST GRADE 12',
        details: ['​ ','🕮 64 Questions', '• 60 Minutes', '• ₹2,000','​ '],
        buttonText: 'VIEW PROGRAM'
      }

];

const Class10Cards = [
    {
        image: 'img/101.jpg',
        title: 'STREAM SELECTOR TEST',
        details: ['​ ','​ ','🕮 76 Questions', '• 40 Minutes', '• ₹2,000','​ '],
        buttonText: 'VIEW PROGRAM'
      },
      {
        image: 'img/102.jpg',
        title: 'STREAM AND CAREER CLARITY SERVICE',
        details: ['🕮 Certified Career Counsellor', '• 1-4 Sessions', '• ₹5,000 - ₹10,000','​ '],
        buttonText: 'VIEW PROGRAM'
      },
      {
        image: 'img/103.jpg',
        title: 'PROFILE BUILDING SERVICE FOR ABROAD ADMISSION',
        details: ['🕮 Highlight Your Accomplishments', '• 6 Months Support', '• ₹50,000 - ₹1,50,000'],
        buttonText: 'VIEW PROGRAM'
      }

];

const Class8_9Cards = [
    {
        image: 'img/91.jpg',
        title: 'SKILL BASED TEST',
        details: ['​ ','​ ','🕮 40 Questions', '• 30 Minutes', '• ₹2,000','​ '],
        buttonText: 'VIEW PROGRAM'
      },
      {
        image: 'img/102.jpg',
        title: 'STREAM AND CAREER CLARITY SERVICE',
        details: ['🕮 Certified Career Counsellor', '• 1-4 Sessions', '• ₹5,000 - ₹10,000','​ '],
        buttonText: 'VIEW PROGRAM'
      },
      {
        image: 'img/103.jpg',
        title: 'PROFILE BUILDING SERVICE FOR ABROAD ADMISSION',
        details: ['🕮 Highlight Your Accomplishments', '• 6 Months Support', '• ₹50,000 - ₹1,50,000'],
        buttonText: 'VIEW PROGRAM'
      }

];

const StudyAbroadCards = [
    {
        image: 'img/ab1.png',
        title: 'STUDY ABROAD MBA-IVY LEAGUE/TOP 50 COLLEGES',
        details: ['​ ','🕮 Get Admission In Best Fit College', '• Support Till Admission', '• ₹1,50,000 - ₹3,00,000'],
        buttonText: 'VIEW PROGRAM'
      },
      {
        image: 'img/ab2.jpg',
        title: 'STUDY ABROAD UNDERGRADUATE IN TOP 100 COLLEGES',
        details: ['🕮 Get Admission In Best Fit College', '• Support Till Admission', '• ₹1,50,000 - ₹3,00,000'],
        buttonText: 'VIEW PROGRAM'
      },
      {
        image: 'img/ab3.jpg',
        title: 'STUDY ABROAD POSTGRADUATE IN TOP 100 COLLEGES',
        details: ['🕮 Get Admission In Best Fit College', '• Support Till Admission', '• ₹1,50,000 - ₹3,00,000'],
        buttonText: 'VIEW PROGRAM'
      },
      {
        image: 'img/ab4.jpg',
        title: 'STUDY ABROAD MBBS/MD/MS',
        details: ['​ ','🕮 Get Admission In Best Fit College', '• Support Till Admission', '• ₹25,000 - ₹1,00,000'],
        buttonText: 'VIEW PROGRAM'
      },
      {
        image: 'img/ab5.png',
        title: 'STUDY ABROAD IN USA',
        details: ['​ ','​ ','🕮 Course Bundle 300+Hrs', '• Pro Career Counsellor', '• ₹6̷5̷,̷0̷0̷0 ₹15,000','​ '],
        buttonText: 'VIEW PROGRAM'
      },
      {
        image: 'img/ab6.png',
        title: 'STUDY ABROAD IN AUSTRALIA & NEW ZEALAND',
        details: ['🕮 Course Bundle 300+Hrs', '• Pro Career Counsellor', '• ₹6̷5̷,̷0̷0̷0 ₹15,000','​ '],
        buttonText: 'VIEW PROGRAM'
      },
      {
        image: 'img/ab7.png',
        title: 'STUDY ABROAD IN SINGAPORE',
        details: ['​ ','🕮 Course Bundle 300+Hrs', '• Pro Career Counsellor', '• ₹6̷5̷,̷0̷0̷0 ₹15,000','​ '],
        buttonText: 'VIEW PROGRAM'
      },
      {
        image: 'img/ab8.png',
        title: 'STUDY ABROAD IN UK (Imperial College London)',
        details: ['​ ','🕮 Course Bundle 300+Hrs', '• Pro Career Counsellor', '• ₹6̷5̷,̷0̷0̷0 ₹15,000','​ '],
        buttonText: 'VIEW PROGRAM'
      },
      {
        image: 'img/ab9.png',
        title: 'STUDY ABROAD IN CANADA',
        details: ['​ ','​ ','🕮 Course Bundle 300+Hrs', '• Pro Career Counsellor', '• ₹6̷5̷,̷0̷0̷0 ₹15,000'],
        buttonText: 'VIEW PROGRAM'
      },
      {
        image: 'img/ab10.png',
        title: 'STUDY ABROAD IN EUROPE & IRELAND',
        details: ['​ ','​ ','🕮 Course Bundle 300+Hrs', '• Pro Career Counsellor', '• ₹6̷5̷,̷0̷0̷0 ₹15,000'],
        buttonText: 'VIEW PROGRAM'
      },
      {
        image: 'img/ab11.jpg',
        title: 'HIGHER EDUCATION GUIDANCE ABROAD',
        details: ['🕮 Best Admission Expert For Abroad', '• Covers All Country Destination', '• ₹25,000 - ₹1,00,000'],
        buttonText: 'VIEW PROGRAM'
      },
      {
        image: 'img/103.jpg',
        title: 'PROFILE BUILDING SERVICE FOR ABROAD ADMISSION',
        details: ['🕮 Highlight Your Accomplishments', '• 6 Months Support', '• ₹50,000 - ₹1,50,000'],
        buttonText: 'VIEW PROGRAM'
      }

];



function createCard(cardData) {
  const card = document.createElement('div');
  card.classList.add('card');

  // Add image
  const image = document.createElement('img');
  image.src = cardData.image;
  card.appendChild(image);

  // Add title and details
  const title = document.createElement('h3');
  title.textContent = cardData.title;
  card.appendChild(title);

  const detailsContainer = document.createElement('div');
  detailsContainer.classList.add('program-details');
  cardData.details.forEach(detail => {
    const detailElement = document.createElement('p');
    detailElement.textContent = detail;
    detailsContainer.appendChild(detailElement);
  });
  card.appendChild(detailsContainer);

  // Add button
  const button = document.createElement('button');
  button.textContent = cardData.buttonText;
  card.appendChild(button);

  return card;
}

function renderCards(cardsData) {
  cardsContainer.innerHTML = '';
  cardsData.forEach(cardData => {
    const card = createCard(cardData);
    cardsContainer.appendChild(card);
  });
}

document.getElementById('counsellors').addEventListener('click', () => {
  renderCards(counsellorCards);
});

document.getElementById('working-professionals').addEventListener('click', () => {
  renderCards(workingProfessionalCards);
});

document.getElementById('For College').addEventListener('click', () => {
    renderCards(ForCollegeCards);
  });

  document.getElementById('Class 11&12').addEventListener('click', () => {
    renderCards(Class11_12Cards);
  });

  document.getElementById('Class10').addEventListener('click', () => {
    renderCards(Class10Cards);
  });

  document.getElementById('Class 8&9').addEventListener('click', () => {
    renderCards(Class8_9Cards);
  });

  document.getElementById('Study Abroad').addEventListener('click', () => {
    renderCards(StudyAbroadCards);
  });

// Initially render Counsellors cards
renderCards(counsellorCards);
