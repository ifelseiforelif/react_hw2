import { Component } from "react";
import image from "../../../../public/assets/Louis_Pasteur.jpg";
export class Photo extends Component {
  render() {
    return (
      <div className="photo">
        <img src={image} alt="Louis_Pasteur" />
      </div>
    );
  }
}
