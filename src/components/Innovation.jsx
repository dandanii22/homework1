import InnovationList from "./InnovationList";
import "./Innovation.scss";
import data from "../assets/api/data3";

const Innovation = () => {
  return (
    <div className="con2">
      <div className="inner">
        <h2>TECHNOLOGICAL INNOVATION</h2>

        <InnovationList data={data} />
      </div>
    </div>
  );
};

export default Innovation;
