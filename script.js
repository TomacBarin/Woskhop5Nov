const btn = document.querySelector(".btn");
const input = document.querySelector(".input");
const p = document.querySelector(".lo");

import { convert as tomacConvert } from "./lengthmodule.js";

btn.addEventListener("click", () => {
  let miles = parseFloat(input.value);
  let result = tomacConvert(miles, 1.6);
  p.textContent = result;
  console.log("Knapp har klickats!");
});
