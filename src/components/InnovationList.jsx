/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
import InnovationData from "./InnovationData";

const InnovationList = ({ data }) => {
  return (
    <ul>
      {data.map((item) => (
        <InnovationData key={item.id} item={item} />
      ))}
    </ul>
  );
};

export default InnovationList;
