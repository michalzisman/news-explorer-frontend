import avatar from "../../images/avatar.png";

function About() {
  return (
    <div className="about">
      <img src={avatar} alt="Author avatar" className="about__avatar" />
      <div className="about__info">
        <h2 className="about__title">About the author</h2>
        <p className="about__text">
          This block describes the project author. Here you should indicate your
          name, what you do, and which development technologies you know.
        </p>
        <p className="about__text">
          You can also talk about your experience with Practicum, what you
          learned there, and how you can help potential customers.
        </p>
      </div>
    </div>
  );
}

export default About;
