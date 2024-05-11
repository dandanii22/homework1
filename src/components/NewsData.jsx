/* eslint-disable react/prop-types */
const NewsData = ({ item }) => {
  const { imgurl, title } = item;
  return (
    <li>
      <a href="#">
        <div>
          <img src={imgurl} alt="" />
        </div>
        <strong>{title}</strong>
      </a>
    </li>
  );
};

export default NewsData;
