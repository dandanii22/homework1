/* eslint-disable react/prop-types */
import NewsData from "./NewsData";

const NewsList = ({ data }) => {
  return (
    <ul>
      {data.map((item) => (
        <NewsData key={item.id} item={item} />
      ))}
    </ul>
  );
};

export default NewsList;
