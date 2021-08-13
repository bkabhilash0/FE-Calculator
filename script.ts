const textarea = document.getElementById("input") as HTMLInputElement;
const delete_btn = document.getElementById("del") as HTMLButtonElement;
const reset_btn = document.getElementById("reset") as HTMLButtonElement;

textarea.addEventListener<"input">("input", (e) => {
  console.log(e);
});

reset_btn.addEventListener("click", () => {
  textarea.value = "0";
});
