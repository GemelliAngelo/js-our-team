const team = [
  {
    fullname: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
  },
  {
    fullname: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
  },
  {
    fullname: "Giorgio Verdi",
    role: "Designer",
    email: "marcobianchi@team.com",
  },
  {
    fullname: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martaipsum@team.com",
  },
  {
    fullname: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
  },
  {
    fullname: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
  },
];

const teamContacts = document.getElementById("team-contacts");

teamContacts.innerHTML = `<div class="card mb-3 bg-black text-white">
              <div class="row g-0">
                <div class="col-md-4">
                  <img src="./img/male1.png" class="img-fluid" alt="..." />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">Name</h5>
                    <p class="card-text">Role</p>
                    <p class="card-text">email</p>
                  </div>
                </div>
              </div>
            </div>`;
