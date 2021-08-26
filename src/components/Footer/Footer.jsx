import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import '@fortawesome/fontawesome-free/css/all.min.css'; 
// import 'bootstrap-css-only/css/bootstrap.min.css'; 
import'mdbreact/dist/css/mdb.css';

const FooterPage = () => {
  return (
    <MDBFooter className="font-small color-footer pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <h5 className="title">Gadget</h5>
            <p>
            Магазин аксессуаров
            </p>
          </MDBCol>
          <MDBCol md="6">
            <h5 className="title">Информация</h5>
            <ul>
              <li className="list-unstyled">
                <a href="#!">О магазине</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Гарантия</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Расрочка</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Кредит</a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="https://www.mdbootstrap.com"> MDBootstrap.com </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default FooterPage;