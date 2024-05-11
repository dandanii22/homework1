/* eslint-disable react/prop-types */
const VisualData = ({ item }) => {
  const { title, desc, useBrText } = item;
  return (
    <li className="on">
      <div className="inner">
        <div className="txt">
          {useBrText ? (
            <h2>
              {useBrText}
              <br />
              {title}
            </h2>
          ) : (
            <h2>{title}</h2>
          )}

          <p>{desc}</p>
          <p className="more">
            <a href="#">
              Learn More <i className="xi-angle-right"></i>
            </a>
          </p>
        </div>
      </div>
    </li>
  );
};

export default VisualData;
