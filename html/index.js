let count = 99;

const h1Element = document.querySelector("h1");

h1Element.innerHTML = count;

const handleInc = () => {
  count = count + 1;
  alert("Inc Function" + count);
  console.log("Inc Function" + count);
  // Re-Rendering
  h1Element.innerHTML = count;
};
