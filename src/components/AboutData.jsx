/* eslint-disable react/prop-types */
const AboutData = ({ item }) => {
  const { imgurl, title, desc } = item;
  return (
    <li>
      <a href="#">
        <span>
          <img src={imgurl} alt="CEO 인사말" />
        </span>
        <strong>
          <span>{title}</span>
          {desc}
        </strong>
      </a>
    </li>
  );
};

export default AboutData;
