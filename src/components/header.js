import { Col, Container, Form, Row } from "react-bootstrap";

import { Link } from "react-router-dom";
const languages = [
  { value: "eng", label: "ENG" },
  { value: "vietnam", label: "VIE" },
];

const currencyUnits = [
  { value: "usd", label: "USD" },
  { value: "vnd", label: "VND" },
];
const pagesLink = [
  {
    to: "/about-us",
    title: "About us",
  },
  {
    to: "/news",
    title: "News",
  },
  {
    to: '/services',
    title: 'Services',
  }
];
const userPagesLink = [{
  class_name: 'user log',
  to: '/sign-in',
  title: "Sign in",
},{
  class_name:' user reg',
  to: '/sign-up',
  title: "Sign up",
}]
function Header() {
  return (
    <div className="header">
      <Container>
        <Row>
          <Col md={2} sm={2}>
            <div className="logo">
              <Link to="/">
                <img src={"./images/logo.png"} alt={"FlatShop"} />
              </Link>
            </div>
          </Col>
          <Col md={10} sm={10}>
            <div className="header_component header_top">
              <Row>
                <Col md={3}>
                  <div className="select">
                    <select className="select-language">
                      {languages.map((language, index) => {
                        return (
                          <option key={index} value={language.value}>
                            {language.label}
                          </option>
                        );
                      })}
                    </select>
                    <select className="select-language">
                      {currencyUnits.map((currencyUnit, index) => {
                        return (
                          <option key={index} value={currencyUnit.value}>
                            {currencyUnit.label}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                </Col>
                <Col md={6}>
                  <ul className='top-menu'>
                  {pagesLink.map((page, index) =>{
                        return <li><Link className='pages-link' key={index} to={page.to}>{page.title}</Link></li>;
                      })}
                  </ul>
                </Col>
                <Col md={3}>
                  <ul className='user-menu'>
                  {userPagesLink.map((page, index) =>{
                        return <li><Link className={page.class_name} key={index} to={page.to}>{page.title}</Link></li>;
                      })}
                  </ul>
                </Col>
              </Row>
            </div>
            <div className="clearfix"></div>
            <div className="header_component header_bottom">
              <ul className="option">
                <li id='search' className="search">
                  <Form className='search-form'>
                    <Form.Control className='search-submit' type='button'></Form.Control>
                    <Form.Control className='search-input' type='text' placeholder='Enter your search term...'></Form.Control>
                  </Form>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Header;
