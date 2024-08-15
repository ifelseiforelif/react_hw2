import { Component } from "react";
import { Biography } from "../biography/Biography";
import { Photo } from "../photo/Photo";

export class Person extends Component {
  name = "Луи Пастер";
  date = "27 декабря 1822";
  render() {
    return (
      <>
        <div className="person">
          <h2>Имя: {this.name}</h2>
          <p>Дата рождения: {this.date}</p>
        </div>
        <hr />
        <Photo />
        <Biography />
      </>
    );
  }
}
