import { breadcrumbsVisible } from "./functions/breadcrumbs";
import "lazysizes";
import { validateForm } from "./functions/validateForm";

const init = () => {
  document.querySelector("body").addEventListener("touchstart", () => {});
  breadcrumbsVisible();

  const mainForm = document.querySelector(".contacts__form");
  const validate = validateForm(mainForm);

  mainForm.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!validate.isValid) {
      return;
    }
  });
};

init();
