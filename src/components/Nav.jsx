import "./Nav.scss";
const Nav = () => {
  return (
    <>
      <nav className="nav">
        <ul className="gnb">
          <li>
            <a href="content/sub1/sub1-1.html">회사소개</a>
          </li>
          <li>
            <a href="content/sub2/sub2-1.html">사업분야</a>
          </li>
          <li>
            <a href="content/sub3/sub3-1.html">기술혁신</a>
          </li>
          <li>
            <a href="content/sub4/sub4-1.html">홍보센터</a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Nav;
