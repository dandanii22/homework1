/* eslint-disable react/prop-types */

import VisualData from "./VisualData";

const VisualList = ({ data }) => {
  return (
    <ul className="main-banner">
      {data.map((item) => (
        <VisualData key={item.id} item={item} />
      ))}
    </ul>
  );
};

export default VisualList;
