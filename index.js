const API_URL = "https://dog.ceo/api/breeds/image/random/4";

const btnElement = document.querySelector(".go_btn");

const randomDogElement = document.querySelector(".dogImage-container");


const abuseMe = () => {
    document.querySelector('#myAudio').play().stop();
    alert("Bhosdike!!!")
}
const getDogsData = async () => {
  randomDogElement.innerHTML = "";
  const response = await fetch(API_URL);
  const json = await response.json();
  console.log(json.message);

  json.message.forEach((dogImage) => {
    randomDogElement.innerHTML += `
        <div class="col">
        <div class="card">
        <img src="${dogImage}" class="card-img-top" alt="..." />
        <div class="card-body">
        </div>
        </div>    
    `;
  });
};

btnElement.addEventListener("click", getDogsData);
