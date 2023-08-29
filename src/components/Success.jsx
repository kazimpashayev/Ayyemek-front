import { Link } from 'react-router-dom';
import SuccessIcon from '../assets/icons/success.svg';
import { StyledSuccessPage } from './styles/SuccessPage.styled';

function Success() {
  return (
    <StyledSuccessPage>
      <div className="container">
        <div className="row">
          <div className="col-xl-12 text-center">
            <img src={SuccessIcon} alt="" width="120" />
            <h4 className="text-uppercase fw-bold mt-4 mb-3">
              Ödənişiniz uğurla tamamlanmışdır
            </h4>
            <div className="info mt-4 mb-4">
              <label>
                Sifarişiniz qeyd etdiyiniz saatda ünvana çatdırılacaqdır
              </label>
              <span>Bizi seçdiyiniz üçün təşəkkür edirik!</span>
            </div>
            <Link to="/plans" class="btn-outline-custom pe-5 ps-5">
              Yemək seçiminə başla
            </Link>
          </div>
        </div>
      </div>
    </StyledSuccessPage>
  );
}

export default Success;
