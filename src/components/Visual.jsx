import "./Visual.scss";
import VisualList from "./VisualList";
import data from "../assets/api/data";

const Visual = () => {
  return (
    <>
      <section id="visual">
        <VisualList data={data} />

        <p className="btn-wrap">
          <button className="btn prev">
            <img
              src="http://www.kyungdong.co.kr/ko/front/image/main/btn_prev2.png"
              alt=""
            />
          </button>
          <button className="btn next">
            <img
              src="http://www.kyungdong.co.kr/ko/front/image/main/btn_next2.png"
              alt=""
            />
          </button>
        </p>
        <p className="mouse">
          <img
            src="http://www.kyungdong.co.kr/ko/front/image/main/scroll.png"
            alt=""
          />
        </p>
      </section>
    </>
  );
};

export default Visual;
