/* eslint-disable react/prop-types */
const BusinessData = ({ item }) => {
  const { imgurl, kor, eng, desc } = item;
  return (
    <li>
      <a href="#">
        <div>
          <img src={imgurl} alt="" />
        </div>
        <h3>
          {kor}
          <span>{eng}</span>
        </h3>
        <p>{desc}</p>
      </a>
    </li>
  );
};

export default BusinessData;
