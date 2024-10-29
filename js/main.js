// * DATI

const teamMembers = [
  {
    fullname: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    image: "male1",
  },
  {
    fullname: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    image: "female1",
  },
  {
    fullname: "Giorgio Verdi",
    role: "Designer",
    email: "marcobianchi@team.com",
    image: "male2",
  },
  {
    fullname: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martaipsum@team.com",
    image: "female2",
  },
  {
    fullname: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    image: "male3",
  },
  {
    fullname: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    image: "female3",
  },
];

// * COLLEGAMENTO HTML

const teamContacts = document.getElementById("team-contacts");
const inputName = document.getElementById("fullname-input");
const inputRole = document.getElementById("role-input");
const inputEmail = document.getElementById("email-input");
const inputButton = document.getElementById("button-input");

// * FUNZIONI

const printCard = () => {
  teamMembers.forEach((member) => {
    teamContacts.innerHTML += `<div class="col- col-xl-4">
    <div class="card mb-3 bg-black text-white">
        <div class="row g-0">
            <div class="col-4">
                <img src="./img/${member.image}.png" class="img-fluid" alt="${member.fullname} + ${member.role}" />
            </div>
            <div class="col-8">
                <div class="card-body">
                    <h4 class="card-title fw-bold">${member.fullname}</h4>
                    <span class="card-text">${member.role}</span>
                    <a class= "text-decoration-none" href="#">${member.email}<a/>
                </div>
            </div>
        </div>
    </div>
</div>`;
  });
};

inputButton.addEventListener("click", () => {});

// * ESECUZIONE

printCard();
