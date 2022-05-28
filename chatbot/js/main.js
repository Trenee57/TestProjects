document.querySelector('#clickMe').addEventListener('click', makeReq)

async function makeReq(){

  const userName = document.querySelector("#question").value;
  const res = await fetch(`/api?person=${userName}`)
  const data = await res.json()

  console.log(data);
  document.querySelector(".btnTop").textContent = data.name
  document.querySelector(".btnMid").textContent = data.status
  document.querySelector(".btnB").textContent = data.currentOccupation
  document.querySelectorAll(".btn").forEach(light => {
    light.classList.toggle('hidden')
})
};