//  Work experience cards


const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Data Engineering Intern",
    cardImage: "assets/images/experience-page/HDRUK_image.jpeg",
    place: "Health Data Research UK",
    time: "(September, 2020 - present)",
    desp: "<li>Daily data review and clean up as data comes in through various sources. This involves constantly looking for trends and patterns to better the process and become more efficient.</li> <li>Think about the data creatively to reduce time spent processing individual nodes.</li> <li>Identify projects and initiatives to improve data and be more efficient when expanding to new markets.</li>",
  },
  {
    title: "Mobile App Developer Intern",
    cardImage: "assets/images/experience-page/focus4people.png",
    place: "Focus4people",
    time: "(May, 2019 - Aug, 2019)",
    desp: "<li>Created UX/UI design for mobile apps.</li><li>Developed application programming interfaces (APIs) to support mobile functionality.</li><li>Used and adapted existing web applications for mobile apps.</li><li>Worked closely with other developers to constantly innovate app functionality and design.</li><li>Kept up to date with the terminology, concepts and best practices for coding mobile apps.</li>",
  },
  {
    title: "Research Intern",
    cardImage: "assets/images/experience-page/uni_of_herts.png",
    place: "University of Hertfordshire ",
    time: "(Dec, 19 - Jan, 20)",
    desp:"<li>Worked on the project “LTI (Learning Tools Interoperability) 2.0 standards Implementation for ekShiksha.</li><li>Designed a software that would help faculty to create a quiz using the questions from the database based on his/her choice of topics and he should be provided with various facilities and options to create a quiz of his choice.</li>",
  },
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
      <ul>
      <li class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </li>
    </ul>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);


// Volunteership Cards

const volunteership = document.querySelector(".volunteership");
const volunteershipcards = [
  {
    title: "Course Representative (Elected) - Queen Mary University of London.",
    cardImage: "assets/images/experience-page/msc_ai_CR.jpg",
    description:
      "Demonstrated negotiating, leadership, public speaking skills by acting as a key link between 100 mature students and academic staff, communicating queries, building relationship and concerns to the university.",
  },
  {
    title: "Treasurer - Unicef on Campus Hertfordshire",
    cardImage: "assets/images/experience-page/unicef.jpeg",
    description:
      "Raised money to help children in Africa and the Middle East (Syria and Yemen) in order to provide essential food and medicine. I assisted our other committee member to organize events and send money to UNICEF head office via post.",
  },
  {
    title: "Student Representative - University of Hertfordshire",
    cardImage: "assets/images/experience-page/uni_of_herts.png",
    description:
      "Making positive changes within my School and Course. Taking students voice to the school authorities and school committee to improve the course and its structure.",
  },
  {
    title: "Treasurer - UH Bangladeshi Society",
    cardImage: "assets/images/experience-page/Uh_black_society.png",
    description:
      "Mentoring for the open source projects Deeppixel, Awesome Developer Portfolios and Doc2Pen.",
  },
  {
    title: "Student Volunteer - Hertfordshire Students'​ Union",
    cardImage: "assets/images/experience-page/herts_union.png",
    description:
      "Taking the student's voice to the Student Union officer and Associate professor and Dean to improve overall university facilities and student experience.",
  },
  {
    title: "Garuda Hacks",
    cardImage: "assets/images/experience-page/6.jpg",
    description:
      "MLH sponsored Indonesia's premier Global Virtual Hackathon on 14 - 16th August 2020.",
  },
];

const showCards = () => {
  let output = "";
  volunteershipcards.forEach(
    ({ title, cardImage, description }) =>
      (output += `        
      <div class="card volunteerCard" style="background-image: url(${cardImage});background-repeat: no-repeat, repeat; background-size: cover; background-position: center;">
      <div class="content">
          <h2 class="volunteerTitle">${title}</h2>
          <p class="copy">${description}</p></div>
      </div>
      `)
  );
  volunteership.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);


// Mentorship Card


const mentorshipcards = document.querySelector(".mentorship-cards");
const mentor = [
  {
    title: "Peer Assistencce",
    image: "assets/images/experience-page/uni_of_herts.png",
    time: "06/2017 - 08/2027",
    desp: "<li>It is an open source community where students and mentors can apply.</li><hr /><li>Ample amount of technologies and projects are there and we are given opportunity to work on them according to our interest and knowledge.</li>",
  },
  {
    title: "Google Summer of Code",
    image: "assets/images/experience-page/gsoc.png",
    time: "03/2020 - 08/2020",
    desp: "<li>Google Summer of Code is a global program focused on introducing students to open source software development.</li><hr /><li>It is a great platform to explore new areas, maybe discover a new career path!</li>",
  },
];

const showCards3 = () => {
  let output = "";
  mentor.forEach(
    ({ title, image, time, desp}) =>
      (output += `        
      <div class="column mentorshipCard"> 
      <div class="card card2">
        <img src="${image}" class="card-img-top" alt="..."  width="64" height="300">
        <div class="information">
        <div class="card-body">
          <h5 class="card-title">${title}</h5>
          <p class=""sub-title">${time}</p>
        </div>
        <div class="more-information">
        <ul class="list-group list-group-flush p-0 right-aligned">
          <div class="list-group-item card2 disclaimer">${desp}</div>
        </ul>
        </div>
        </div>
      </div>
      </div>
      `)
  );
  mentorshipcards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards3);
