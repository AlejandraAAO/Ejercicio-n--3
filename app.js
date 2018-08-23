//tomamos todo los inputs
const inputs = document.querySelectorAll(".controls input");


let handleUpdate= (e)=>{
  const suffix =e.target.dataset.sizing || "";
  document.documentElement.style.setProperty(`--${e.target.name}`, e.target.value + suffix);
  console.log(e.target.name);
}

inputs.forEach(input => input.addEventListener("change", handleUpdate));
inputs.forEach(input => input.addEventListener("mousemove", handleUpdate));

