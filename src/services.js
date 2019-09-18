import axios from "axios";
export default {
  image: [],
  searchQuery: "",
  page: 1,
  key: "7c3a37959eb94dc390f27c80ee3fa21b",
  api: `https://newsapi.org/v2/everything?`,
  fetchNews: function(value) {
    console.log("value", value);
    console.log("searchQuery", this.searchQuery);
    this.nextPage();
    console.log(this.page);
    return axios.get(
      `${this.api}q=${value}&apiKey=${this.key}&page=${this.page}`
    );
  },
  nextPage() {
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
