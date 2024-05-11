/* eslint-disable react/prop-types */
import BusinessData from "./BusinessData";

const BusinessList = ({ businessData }) => {
  return (
    <ul className="list">
      {/* BusinessItem - li */}

      {businessData.map((item) => (
        <BusinessData key={item.id} item={item} />
      ))}
    </ul>
  );
};

export default BusinessList;
