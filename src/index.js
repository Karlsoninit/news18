import "./style.css";
import services from "./services";

services.defaultNews().then(data => {
  const renderToHtml = data.data.articles
    .map(elem => `<img width='300' src='${elem.urlToImage}'/>`)
    .join("");

  services.refs.container.insertAdjacentHTML("beforeend", renderToHtml);
});

const getNextImages = () => {
  const next = services.throwValue();
  services.fetchNews(next).then(data => {
    const renderToHtml = data.data.articles
      .map(elem => `<img width='300' src='${elem.urlToImage}'/>`)
      .join("");

    services.refs.container.insertAdjacentHTML("beforeend", renderToHtml);
  });
};

services.refs.next.addEventListener("click", getNextImages);

const getQurty = evt => {
  services.defaultPage();
  console.log(evt.target.value);
  services.refs.container.innerHTML = "";
  services.getValue(evt.target.value);
  services.fetchNews(evt.target.value).then(data => {
    console.log(data.data);
    const renderToHtml = data.data.articles
      .map(elem => `<img width='300' src='${elem.urlToImage}'/>`)
      .join("");

    services.refs.container.insertAdjacentHTML("beforeend", renderToHtml);
  });
};

services.refs.qurty.addEventListener("change", getQurty);
