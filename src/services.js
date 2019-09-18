import axios from "axios";
export default {
  refs: {
    next: document.querySelector(".next"),
    container: document.querySelector(".container"),
    qurty: document.querySelector(".qurty")
  },
  image: [],
  searchQuery: "" ? "" : "javaScript",
  page: 1,
  key: "7c3a37959eb94dc390f27c80ee3fa21b",
  api: `https://newsapi.org/v2/everything?`,
  fetchNews: function(value) {
    console.log("value", value);
    console.log("searchQuery", this.searchQuery);
    console.log(this.page);
    this.nextPage();
    return axios.get(
      `${this.api}q=${value}&apiKey=${this.key}&page=${this.page}`
    );
  },
  defaultNews: function() {
    console.log(this.page);
    this.nextPage();
    return axios.get(
      `${this.api}q=${this.searchQuery}&apiKey=${this.key}&page=${this.page}`
    );
  },
  alarm() {
    if (this.page === 5) {
      alert("alarm only 5 pages");
    }
  },

  nextPage() {
    this.alarm();
    this.page += 1;
  },
  getValue(value) {
    this.searchQuery = value;
  },
  throwValue() {
    return this.searchQuery;
  },
  defaultPage() {
    this.page = 1;
  },
  drawImage(img) {
    this.image.push(img);
  },
  getImage() {
    return this.image;
  }
};
