import Nav from "./Nav";
import Util from "./Util";
import "./Header.scss";
const header = () => {
  return (
    <>
      <header id="header">
        <div className="inner">
          <h1>
            <a href="index.html">
              <img
                src="http://www.kyungdong.co.kr/ko/front/image/common/logo_pc.png"
                alt="경동"
              />
            </a>
          </h1>
          <Nav />
          <Util />
        </div>
      </header>
    </>
  );
};

export default header;
