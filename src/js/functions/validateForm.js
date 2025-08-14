import inputmask from "inputmask";
import JustValidate from "just-validate";

export const validateForm = (form) => {
  const inputTel = document.getElementById("phone");
  const im = new inputmask("+7(999)999-9999");

  im.mask(inputTel);

  const validate = new JustValidate(form, {
    errorLabelStyle: {
      color: "#f00",
    },
    errorsContainer: document.querySelector(".contacts__error"),
    focusInvalidField: true,
  });

  validate
    .addField("#name", [
      {
        rule: "required",
        errorMessage: "Введите Ваше имя",
      },
      {
        rule: "minLength",
        value: 3,
        errorMessage: "Минимальное кол-во символов 3",
      },
      {
        rule: "maxLength",
        value: 20,
        errorMessage: "Максимальное кол-во символов 20",
      },
    ])
    .addField("#phone", [
      {
        rule: "required",
        errorMessage: "Введите Ваш моб. телефон",
      },
      {
        validator: () => {
          const phone = inputTel.inputmask.unmaskedvalue();
          return Boolean(Number(phone) && phone.length === 10);
        },
        errorMessage: "Здесь должно быть 10 символов без +7",
      },
    ])
    .addField("#email", [
      {
        rule: "required",
        errorMessage: "Введите Ваш E-mail",
      },
      {
        rule: "email",
        errorMessage: "Введите корректный E-mail",
      },
    ]);
};
