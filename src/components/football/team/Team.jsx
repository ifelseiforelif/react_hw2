import "./Team.css";
export const Team = () => {
  const team = [
    { name: "Богдан Бутко", photo: "butko.webp" },
    { name: "Алексей Хобленко", photo: "hoblenko.webp" },
    { name: "Артур Алексеевич Рудько", photo: "rudko.webp" },
    { name: "Артём Юрьевич Габелок", photo: "gabeluk.jfif" },
    { name: "Денис Янаков", photo: "yanakov.webp" },
  ];

  const list = team.map((el, index) => {
    return (
      <div key={index}>
        {el.name}
        <div>
          <img
            src={`/assets/team/${el.photo}`}
            alt={el.name}
            style={{ width: "200px", height: "200px" }}
          />
        </div>
      </div>
    );
  });
  return (
    <>
      <h2>Команда</h2>
      <div className="team">{list}</div>
    </>
  );
};
