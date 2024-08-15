import photo from "../../../../public/assets/Chernomorets_odessa_logo_uk.jpg";
import { Team } from "../team/Team";
import "./Club.css";
export const Club = () => {
  const choice = Math.random() > 0.5 ? true : false;
  return (
    <div className={choice ? "club" : "club-new"}>
      <h1>Черноморец Одесса</h1>
      <p>Основан в 1936 году.</p>
      <img src={photo} alt="Chernomorets_odessa" />
      <Team />
    </div>
  );
};
