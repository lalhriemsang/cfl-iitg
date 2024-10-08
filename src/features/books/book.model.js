export default class BookModel {
  constructor(name, author, contributor, desc, qty, imagesUrl, uniqueKeys, typeOf, ebookLink, categories = [],numOfPages=0, year) {
    this._id = author + "-" + name;
    this.author = author;
    this.name = name;
    this.contributor = contributor;
    this.desc = desc;
    this.quantity = qty;
    this.imagesUrl = imagesUrl;
    this.uniqueKeys = uniqueKeys;
    this.typeOf = typeOf;
    this.ebookLink = ebookLink;
    this.categories = categories;
    this.numOfPages=numOfPages;
    this.requests = [];
    this.year=year;
  }
}
