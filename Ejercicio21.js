const users = [
  { name: "Tony", years: 43 },
  { name: "Peter", years: 18 },
  { name: "Natasha", years: 14 },
  { name: "Bruce", years: 32 },
  { name: "Khamala", years: 16 },
];

function checkAge(users) {
    let adults = [];
    let minors = [];
    for (let user of users) {
        if (user.years >= 18) {
            adults.push(user.name);
        } else {
            minors.push(user.name);
        }
    }
    console.log("Usuarios menores de edad:", adults);
    console.log("Usuarios mayores de edad:", minors);
}

checkAge(users);