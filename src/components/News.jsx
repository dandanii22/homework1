import "./News.scss";
import NewsList from "./NewsList";
import data from "../assets/api/data4";

const News = () => {
  return (
    <div className="con3">
      <div className="inner">
        <div className="left">
          <div>
            <h3>사회공헌</h3>
            <h2>PUBLIC RELATIONS</h2>
            <p>
              ㈜경동은 나눔문화, 기업의 사회공헌, 자원봉사 등을 통한
              <br />
              지역 네트워크 구축과 사회연대의식 함양과 소외계층
              <br />
              삶의 질 향상을 위해 적극 노력하고 있습니다.
            </p>
            <p className="more">
              <a href="#">
                <span>View more</span>
              </a>
            </p>
          </div>
        </div>
        <NewsList data={data} />
      </div>
    </div>
  );
};

export default News;
