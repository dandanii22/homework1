/* eslint-disable react/prop-types */

import AboutData from "./AboutData";

const AboutList = ({ data }) => {
  return (
    <ul>
      {data.map((item) => (
        <AboutData key={item.id} item={item} />
      ))}
    </ul>
  );
};

export default AboutList;
