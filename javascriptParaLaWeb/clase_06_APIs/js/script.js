async function getRandomUser() {
  const response = await fetch("https://randomuser.me/api/");
  const data = await response.json();

  console.log(data, "<----- DATA");
  console.log(data.results[0], "<--- probando ruta");

  /* --------- APIs + DOM --------- */

  const element = document.querySelector(".user");
  element.innerHTML = data.results[0].location.country;

  /* EJERCICIOS */

  const img = document.querySelector(".img");
  const name = document.querySelector(".name");
  const phone = document.querySelector(".phone");
  const city = document.querySelector(".city");

  name.innerHTML = `${data.results[0].name.title} ${data.results[0].name.first} ${data.results[0].name.last}`;

  phone.innerHTML = `Phone: ${data.results[0].phone}`;

  city.innerHTML = `${data.results[0].location.city}, ${data.results[0].location.country}`;

  img.setAttribute("src", `${data.results[0].picture.large}`);
  img.setAttribute("alt", `imagen de ${data.results[0].name.first}`);
}

getRandomUser();

/* -------- SENTENCIA TRY CATCH -------- */

async function getSomething(ciudad) {
  // let ciudad = prompt("decime una ciudad");

  try {
    const response = await fetch(
       `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&APPID=799edad109b009ce1a9a4a6bc519ccf1`
     /*  "https://nofunciono/api/" */
    );
    const data = await response.json();

    console.log(data, "<----- DATA CLIMA");
  } catch (error) {
    console.error(error.message);
  }
}

getSomething();
