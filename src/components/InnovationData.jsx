/* eslint-disable react/prop-types */
const InnovationData = ({ item }) => {
  const { imgurl, title, subtitle, desc } = item;
  return (
    <li>
      <div>
        <a href="#">
          <img src={imgurl} />
          <h3>{title} </h3>
          <p className="sub">{subtitle}</p>

          <b>
            <i className="xi-arrow-down"></i>
          </b>
        </a>
      </div>
      <p>{desc}</p>
      <p className="more">
        <a href="#">
          <span>View more</span>
        </a>
      </p>
    </li>
  );
};

export default InnovationData;
