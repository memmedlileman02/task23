const buton = document.querySelector(".buton");
const tbody = document.querySelector("tbody");

const orderRow = () => {
  const rows = [...document.querySelectorAll("tbody tr")];
  rows.map((row, key) => {
    [(row.querySelector("td").textContent = key + 1)];
  });
};
let allow = true;

const saveData = (e) => {
    const inputs = [...document.querySelectorAll("input")];
    inputs.map((input) => {
      input.parentElement.textContent = input.value;
    });
    e.target.textContent = "Düzəliş et";
    allow = true;
  };
  

addBtn.addEventListener("click", () => {
  if (!allow) {
    alert("Öncəki xananı doldurun pls...");
    return;
  }

  const row = document.createElement("tr");
  const noTd = document.createElement("td");
  const adTd = document.createElement("td");
  const adInput = document.createElement("input");
 adInput.setAttribute("type", "text");
  adInput.setAttribute("placeholder", "Ad");
  adTd.append(adInput);

  const soyadTd = document.createElement("td");
  const soyadInput = document.createElement("input");
  soyadInput.setAttribute("type", "text");
  soyadInput.setAttribute("placeholder", "Soyad");
  soyadTd.append(soyadInput);

  const yasTd = document.createElement("td");
  const yasInput = document.createElement("input");
  yasInput.setAttribute("type", "number");
  yasInput.setAttribute("placeholder", "Yaş");
  yasTd.append(yasInput);

  const emeliyyatlarTd = document.createElement("td");
  const saveButon = document.createElement("button");
  saveButon.textContent = "Yadda saxla";
  saveButon.classList.add("saveButon");
  saveButon.addEventListener("click", saveData);

  const cancelButon = document.createElement("button");
  cancelButon.textContent = "Sil";
  cancelButon.classList.add("cancelButon");

  emeliyyatlarTd.append(saveButon, cancelButon);
  row.append(noTd, adTd, soyadTd, yasTd, emeliyyatlarTd);
  tbody.append(row);
  orderRow();
});
