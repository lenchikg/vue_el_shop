export const INPUT_FIELDS = [
  {
    placeholder: "Вваедите сюда ваше ФИО или просто имя",
    label: "ФИО или просто Имя",
    type: "text",
    name: "name",
    required: true,
  },
  {
    placeholder: "Вваедите сюда ваш номер телефона",
    label: "Ваш номер телефона",
    type: "text",
    name: "phone",
    required: true,
  },
  {
    placeholder: "Ваш адрес эл.почты",
    label: "E-mail",
    type: "text",
    name: "email",
    required: false,
  },
  {
    placeholder: "Город для доставки",
    label: "Город",
    type: "text",
    name: "location",
    required: false,
  },
  {
    placeholder: "Улица, дом, квартира",
    label: "Подробный адрес для доставки:",
    type: "text",
    name: "address",
    required: false,
  },
  {
    placeholder: "Что нам нужно не забыть?",
    label: "Комментарий к заказу или адресу",
    type: "text",
    name: "comment",
    required: false,
  },
];