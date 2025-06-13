function post (){
  const form = document.getElementById("form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
  });
};

window.addEventListener('turbo:load', post);