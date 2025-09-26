function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}
function generatePoem(event) {
  event.preventDefault();
  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "cf91d38a44tc474fa778f9df1bo2b7a0";
  let prompt = `user instructions: Generate a French poem about ${instructionsInput.value}`;
  let context =
    " You are a romantic poem expert and love to write short poem. your mission is to generate a 4 line poem in basic HTML and seperate each line with a <br/>. make sure to follow this user instructions.do not include a title to the poem. signe the poem with `shecodes AI` inside <strong> element at the end of the poem and NOT at the begining";
  let apiUrl =
    "https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}";
  let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `<div class="generating"> ⏳Generating a French poem about ${instructionsInput.value}</div>`;

  axios.get(apiUrl).then(displayPoem);
}
let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
