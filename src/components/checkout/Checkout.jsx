import { useNavigate } from 'react-router-dom';
import { checkoutSchema } from '../../validations/checkoutValidation.js';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Link } from 'react-router-dom';
import { StyledCheckout } from '../styles/checkout/StyledCheckout.styled.js';
import Logo from '../../assets/logo.svg';
import { FaArrowLeft } from 'react-icons/fa';
import LoginImg from '../../assets/register-bg.png';
import Azn from '../../assets/azn.svg';

function Checkout() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(checkoutSchema),
    shouldFocusError: false,
  });

  const submitForm = (data) => {
    console.log(data);
    navigate('/success');
  };

  return (
    <StyledCheckout>
      <div className="checkout">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-6">
              <Link to="/">
                <img src={Logo} alt="logo" />
              </Link>
              <div className="redirect mx-5 mt-3">
                <Link to="/" className="btn btn-primary">
                  <FaArrowLeft />
                </Link>
              </div>
              <div className="form-title ps-5 mt-4">
                <h3 className="fw-semibold">Ödəniş</h3>
                <p className="form-description fw-semibold">
                  Seçdiyiniz kateqoriya və paket
                </p>
              </div>
              <div className="row pe-9 ps-5 mt-3">
                <div className="col-12">
                  <button className="chosen-menu btn btn-success p-2 w-75">
                    EKONOM 3 günlük menyu
                  </button>
                </div>
              </div>
              <form
                onSubmit={handleSubmit(submitForm)}
                className="form row pe-9 ps-5 mt-3"
              >
                <div className="col-12 mt-3">
                  <label className="fw-semibold d-block">Menyu tarixləri</label>
                  <input
                    {...register('date', { required: true })}
                    type="date"
                    className={
                      errors.date ? 'form-control is-invalid' : 'form-control'
                    }
                  />

                  <div className="invalid-feedback">
                    <span>{errors.date?.message}</span>
                  </div>
                </div>

                <div className="divider mt-5"></div>

                <div className="total-price d-flex justify-content-between mt-3">
                  <p className="">Ümumi məbləğ</p>
                  <h5>
                    50 <img src={Azn} alt="" />
                  </h5>
                </div>

                <div className="col-12 mt-3">
                  <button type="submit" className="btn btn-danger w-100 p-2">
                    Ödəniş et
                  </button>
                </div>
              </form>
            </div>
            <div className="col-xl-6 m-0 p-0 position-relative col-hide">
              <div className="img-caption">
                <h1>
                  SİZ SEÇİN BİZ <br />
                  İSTƏDİYİNİZ ZAMANDA YEMƏKLƏRİNİZİ ÇATDIRAQ
                </h1>
                <p>Sizin həyat tərzinizə və büdcənizə uyğun yemək planları</p>
              </div>
              <img src={LoginImg} alt="The Logo" className="login-img w-100" />
            </div>
          </div>
        </div>
      </div>
    </StyledCheckout>
  );
}

export default Checkout;
