import { Link } from 'react-router-dom';
import Sidebar from '../../pages/Dashboard/layout/Sidebar';
import { StyledOrders } from '../styles/dashboard/StyledOrders.styled';
import notFound from '../../assets/not_found.svg';
import { FaArrowRight } from 'react-icons/fa';

function Orders() {
  return (
    <StyledOrders>
      <div className="orders">
        <div className="container mt-4">
          <div className="row">
            <div className="col-xl-3">
              <Sidebar />
            </div>
            <div className="orders-content col-xl-8 ps-5">
              <div>
                <div>
                  <img src={notFound} alt="" />
                  <h4>Aktiv sifarişiniz tapılmadı</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipiscing elit
                    interdum ullamcorper .
                  </p>

                  <div className="content-footer mt-5">
                    <Link to="/plans" className="btn-custom ps-5 pe-5">
                      Sabahın menyusunu seç <FaArrowRight className="ms-2" />
                    </Link>
                    <label htmlFor="">
                      * Sifarişinizi 22:00-a qədər verməyiniz xahiş olunur
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </StyledOrders>
  );
}

export default Orders;
