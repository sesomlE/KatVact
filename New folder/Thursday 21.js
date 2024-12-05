const people = [
  {
    name: "January",
    Image: "./Tech Bridge/New folder/Img/Jan.jpeg",
    Workplace: "Ibadan"
  },
  {
    name: "February",
    Image: "./Tech Bridge/New folder/Img/Jan.jpeg",
    Workplace: "Lagos"
  },
  {
    name: "March",
    Image: "./Tech Bridge/New folder/Img/Jan.jpeg",
    Workplace: "Aba"
  },
  {
    name: "April",
    Image: "./Tech Bridge/New folder/Img/Jan.jpeg",
    aWorkplace: "Ogun"
  },
  {
    name: "May",
    Image: "./Tech Bridge/New folder/Img/Jan.jpeg",
    address: "Osun"
  },
  {
    name: "June",
    Image: "./Tech Bridge/New folder/Img/Jan.jpeg",
    address: "Ondo"
  },
  {
    name: "July",
    Image: "./Tech Bridge/New folder/Img/Jan.jpeg",
    address: "Rivers"
  },
  {
    name: "August",
    Image: "./Tech Bridge/New folder/Img/Jan.jpeg",
    address: "Kastina"
  },
  {
    name: "September",
    Image: "./Tech Bridge/New folder/Img/Jan.jpeg",
    address: "Kano"
  },
  {
    name: "October",
    Image: "./Tech Bridge/New folder/Img/Jan.jpeg",
    address: "Abuja"
  }
];

console.log(people);
let body = document.getElementById("body")
people.forEach(person => {
  let card = document.createElement("div")
  card.classList.add("card")
  body.appendChild(card)

  let Image = document.createElement("ïmg")
  Image.src = person.Image
  card.appendChild(Image)

  let name = document.createElement("h2")
  name.textContent = person.name
  card.appendChild(name)


})


