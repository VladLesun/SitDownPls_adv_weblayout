import { validateForm } from "./validateForm";

const bcDisplayNone = (breadcrumbs) => {
  window.innerWidth < 730
    ? breadcrumbs.classList.add("visually-hidden")
    : breadcrumbs.classList.remove("visually-hidden");
};

export const breadcrumbsVisible = () => {
  const body = document.querySelector("body");
  const bcCatalog = document.querySelectorAll(".header__breadcrumbs_catalog");
  const bcCard = document.querySelectorAll(".header__breadcrumbs_card");
  const bcCooperation = document.querySelectorAll(
    ".header__breadcrumbs_cooperation"
  );

  if (body.classList.contains("page__body")) {
    for (let breadcrumbs of bcCatalog) {
      breadcrumbs.style.display = "none";
    }
    for (let breadcrumbs of bcCard) {
      breadcrumbs.style.display = "none";
    }
    for (let breadcrumbs of bcCooperation) {
      breadcrumbs.style.display = "none";
    }
  }
  if (
    body.classList.contains("page__body") &&
    body.classList.contains("page__body_catalog")
  ) {
    for (let breadcrumbs of bcCatalog) {
      breadcrumbs.style.display = "flex";
      bcDisplayNone(breadcrumbs);
    }
  }
  if (
    body.classList.contains("page__body") &&
    body.classList.contains("page__body_card")
  ) {
    for (let breadcrumbs of bcCard) {
      breadcrumbs.style.display = "flex";
      bcDisplayNone(breadcrumbs);
    }
  }
  if (
    body.classList.contains("page__body") &&
    body.classList.contains("page__body_cooperation")
  ) {
    for (let breadcrumbs of bcCooperation) {
      breadcrumbs.style.display = "flex";
      bcDisplayNone(breadcrumbs);
    }
  }
};
