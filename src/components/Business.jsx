import BusinessList from "./BusinessList";
import "./Business.scss";
import data from "../assets/api/data2";

const Business = () => {
  return (
    <>
      <section className="business">
        <div className="inner">
          <h2>BUSINESS</h2>
          <p>고객이 신뢰하는 글로벌 에너지 자원 선도 기업</p>

          {/* ul 컴포넌트 - BusinessList */}
          <BusinessList businessData={data} />

          <p className="more">
            <a href="#">View More</a>
          </p>
        </div>
      </section>
    </>
  );
};

export default Business;
