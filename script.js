const btn = document.querySelector(".btn");
const input = document.querySelector(".input");
const p = document.querySelector(".lo");

import { convert as tomacConvert } from "./lengthmodule.js";
import { convert as dennisConvert } from "./weightmodule.js";

btn.addEventListener("click", () => {
  let miles = parseFloat(input.value);
  let result = tomacConvert(miles, 1.6);
  p.textContent = result;
  console.log("Knapp har klickats!");
});

// Här är Weight
const btnWeight = document.querySelector("#weightBtn");
const inputWeight = document.querySelector("#inputWeight");
const paraWeight = document.querySelector(".paraWeight");

btn.addEventListener("click", () => {
  let weight = parseFloat(inputWeight.value);
  let result = dennisConvert(miles, 1.6);
  p.textContent = result;
  console.log("Knapp har klickats!");
});
