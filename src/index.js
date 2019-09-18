import "./style.css";
import services from "./services";
// // import JSONproducts from "./products.json";
// import template from "./template/template.handlebars";

// const refs = {
//   box: document.querySelector(".box"),
//   hasInfo: document.querySelector(".hasInfo"),
//   text: document.querySelector(".text"),
//   form: document.querySelector("form"),
//   clear: document.querySelector(".clear"),
//   btn: document.querySelector(".btn"),
//   p: document.querySelector("p")
// };

// const products = [
//   {
//     image:
//       "https://legobuy.com.ua/image/cache/catalog/lego-technic/42082/kupit-lego-tekhnik-42082-500x500.jpg",
//     description:
//       "Helper calls may also have literal values passed to them either as parameter arguments or hash arguments. Supported literals include numbers, strings, true, false, null and undefined.",
//     price: 232,
//     sold: true
//   },
//   {
//     image:
//       "https://legobuy.com.ua/image/cache/catalog/lego-technic/42082/kupit-lego-tekhnik-42082-500x500.jpg",
//     description:
//       "Helper calls may also have literal values passed to them either as parameter arguments or hash arguments. Supported literals include numbers, strings, true, false, null and undefined.",
//     price: 232,
//     sold: false
//   },
//   {
//     image:
//       "https://legobuy.com.ua/image/cache/catalog/lego-technic/42082/kupit-lego-tekhnik-42082-500x500.jpg",
//     description:
//       "Helper calls may also have literal values passed to them either as parameter arguments or hash arguments. Supported literals include numbers, strings, true, false, null and undefined.",
//     price: 232,
//     sold: true
//   },
//   {
//     image:
//       "https://legobuy.com.ua/image/cache/catalog/lego-technic/42082/kupit-lego-tekhnik-42082-500x500.jpg",
//     description:
//       "Helper calls may also have literal values passed to them either as parameter arguments or hash arguments. Supported literals include numbers, strings, true, false, null and undefined.",
//     price: 232,
//     sold: false
//   }
// ];

// console.log(JSONproducts);

// const template = refs.container.innerHTML.trim();
// console.log(template);

// const renderProduct = Handlebars.compile(template);

// const renderHtml = renderProduct(products);

// // const returnTemplate = products.map(product => renderProduct(product));

// refs.box.innerHTML = renderHtml;

// const formatJsonProducts = JSON.stringify(products);
// console.log(products);
// console.log(formatJsonProducts);

// const returnProducts = JSON.parse(formatJsonProducts);

// console.log(returnProducts);

// const renderHTML = template(JSONproducts);

// refs.box.insertAdjacentHTML("beforeend", renderHTML);

// localStorage.setItem(
//   "key",
//   JSON.stringify([
//     {
//       title: "Lego",
//       price: 5200,
//       url:
//         "https://legobuy.com.ua/image/cache/catalog/lego-technic/42082/kupit-lego-tekhnik-42082-500x500.jpg",
//       inStock: true
//     }
//   ])
// );

// const getProduct = JSON.parse(localStorage.getItem("key"));

// const renderHTML = template(getProduct);

// // refs.box.insertAdjacentHTML("beforeend", renderHTML);
// refs.text.textContent = localStorage.getItem("value");
// // refs.form.reset();

// const handleValue = e => {
//   console.log(e.target.value);
//   refs.text.textContent = e.target.value || "";
//   localStorage.setItem("value", e.target.value);
//   // refs.form.e.target.reset()
// };

// refs.hasInfo.addEventListener("input", handleValue);

// refs.clear.onclick = () => {
//   localStorage.removeItem("value");
// };

// const Theme = {
//   LIGHT: "light-theme",
//   DARK: "dark-theme"
// };

// const theme = "theme";

// refs.p.style.color = localStorage.getItem(theme);
// console.log(localStorage.getItem(theme));

// // const changeTheme = localStorage.getItem(theme);
// // console.log(changeTheme);
// // if (changeTheme) {
// //   refs.p.style.color = "red";
// // }

// const handleChange = e => {
//   console.log(e.target.checked);
//   localStorage.setItem(theme, e.target.checked);
//   if (e.target.checked) {
//     console.log(Theme.LIGHT);
//     localStorage.setItem(theme, "green");
//   } else {
//     console.log(Theme.DARK);
//     localStorage.setItem(theme, "red");
//   }
// };

// refs.btn.addEventListener("change", handleChange);

// const getPositiomSuccess = info => {
//   console.log(info);
// };
// const getPositiomError = error => {
//   console.log(error);
// };

// window.navigator.geolocation.getCurrentPosition(
//   getPositiomSuccess,
//   getPositiomError
// );

// const getPosition = async () => {
//   const result = await window.navigator.geolocation.getCurrentPosition(
//     resolve => {
//       console.log(resolve);
//     },
//     reject => {
//       console.log(reject);
//     }
//   );

//   return result;
// };

// // getPosition()
// //   .then(info => console.log(info.coords))
// //   .catch(console.log);

// getPosition()
//   .then(console.log)
//   .catch(console.log);

// // const newGet = async () => {
// //   const res = await getPosition();
// //   console.log(res);
// // };

// // newGet();

const refs = {
  next: document.querySelector(".next"),
  container: document.querySelector(".container"),
  qurty: document.querySelector(".qurty")
};

const next = services.throwValue();

services.fetchNews(next).then(data => {
  const renderToHtml = data.data.articles
    .map(elem => `<img width='300' src='${elem.urlToImage}'/>`)
    .join("");

  refs.container.insertAdjacentHTML("beforeend", renderToHtml);
});

const getNextImages = () => {
  const next = services.throwValue();
  services.fetchNews(next).then(data => {
    const renderToHtml = data.data.articles
      .map(elem => `<img width='300' src='${elem.urlToImage}'/>`)
      .join("");

    refs.container.insertAdjacentHTML("beforeend", renderToHtml);
  });
};

refs.next.addEventListener("click", getNextImages);

const getQurty = evt => {
  console.log(evt.target.value);
  services.getValue(evt.target.value);
  console.log("services.throwValue", services.throwValue());
};

refs.qurty.addEventListener("change", getQurty);
