import { Link, useNavigate } from 'react-router-dom';
import { StyledRegister } from '../styles/auth/StyledRegister.styled';
import Logo from '../../assets/logo.svg';
import { FaArrowLeft } from 'react-icons/fa';
import { useForm } from 'react-hook-form';
import { registerSchema } from '../../validations/registerValidation';
import { yupResolver } from '@hookform/resolvers/yup';
import LoginImg from '../../assets/register-bg.png';
import Swal from 'sweetalert2';
import AuthUser from './AuthUser';

function Register() {
  const { http } = AuthUser();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerSchema),
    // Boş submit verildikdə fokuslanmasın (true olsa hamısına fokus olacaq)
    shouldFocusError: false,
  });

  const onSubmit = (data) => {
    const { name, lastname, email, birthday, phone, address, password } = data;
    try {
      http
        .post('http://127.0.0.1:8000/api/register', {
          name: name,
          lastname: lastname,
          birthday: birthday,
          phone: phone,
          address: address,
          email: email,
          password: password,
        })
        .then((res) => {
          navigate('/login');
        });
    } catch (error) {
      console.log(error);
      Swal.fire({
        icon: 'error',
        title: 'Xəta!',
        text: 'Bir xəta baş verdi',
      });
    }
  };

  return (
    <StyledRegister>
      <div className="register">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-6">
              <Link to="/">
                <img src={Logo} className="logo ms-5" alt="logo" />
              </Link>
              <div className="redirect mx-5 mt-3">
                <Link to="/login" className="btn btn-primary">
                  <FaArrowLeft />
                </Link>
              </div>
              <div className="form-title ps-5 mt-4">
                <h3>Qeydiyyat</h3>
              </div>
              <form
                onSubmit={handleSubmit(onSubmit)}
                noValidate
                className="form row pe-9 ps-5 mt-3"
              >
                <div className="col-6">
                  <label htmlFor="">Ad</label>
                  <input
                    {...register('name', { required: true })}
                    type="text"
                    className={
                      errors.name ? 'form-control is-invalid' : 'form-control'
                    }
                    name="name"
                    placeholder="Ad"
                  />
                  <div className="invalid-feedback">
                    <span>{errors.name?.message}</span>
                  </div>
                </div>
                <div className="col-6">
                  <label htmlFor="">Soyad</label>
                  <input
                    {...register('lastname', { required: true })}
                    type="text"
                    className={
                      errors.lastname
                        ? 'form-control is-invalid'
                        : 'form-control'
                    }
                    name="lastname"
                    placeholder="Soyad"
                  />
                  <div className="invalid-feedback">
                    <span>{errors.lastname?.message}</span>
                  </div>
                </div>
                <div className="form-group mt-3">
                  <label htmlFor="">E-poçt</label>
                  <input
                    {...register('email', { required: true })}
                    type="email"
                    className={
                      errors.email ? 'form-control is-invalid' : 'form-control'
                    }
                    name="email"
                    placeholder="E-poçt adresinizi daxil edin"
                  />
                  <div className="invalid-feedback">
                    <span>{errors.email?.message}</span>
                  </div>
                </div>
                <div className="form-group mt-3">
                  <label htmlFor="">Şifrə</label>
                  <input
                    {...register('password', { required: true })}
                    type="password"
                    className={
                      errors.password
                        ? 'form-control is-invalid'
                        : 'form-control'
                    }
                    name="password"
                    placeholder="Parolunuzu daxil edin"
                  />
                  <div className="invalid-feedback">
                    <span>{errors.password?.message}</span>
                  </div>
                </div>
                <div className="col-12 mt-3">
                  <label htmlFor="">Doğum Tarixi</label>
                  <input
                    type="date"
                    {...register('birthday', { required: true })}
                    className={
                      errors.birthday
                        ? 'form-control is-invalid'
                        : 'form-control'
                    }
                    name="birthday"
                  />
                  <div className="invalid-feedback">
                    <span>{errors.birthday?.message}</span>
                  </div>
                </div>
                <div className="col-12 mt-3">
                  <label htmlFor="">Telefon</label>
                  <input
                    {...register('phone', { required: true })}
                    type="text"
                    className={
                      errors.phone ? 'form-control is-invalid' : 'form-control'
                    }
                    name="phone"
                    placeholder="Telefon nömrənizi daxil edin"
                  />
                  <div className="invalid-feedback">
                    <span>{errors.phone?.message}</span>
                  </div>
                </div>
                <div className="col-12 mt-3">
                  <label htmlFor="">Ünvan</label>
                  <input
                    {...register('address', { required: true })}
                    type="text"
                    className={
                      errors.address
                        ? 'form-control is-invalid'
                        : 'form-control'
                    }
                    name="address"
                    placeholder="Adresinizi daxil edin"
                  />
                  <div className="invalid-feedback">
                    <span>{errors.address?.message}</span>
                  </div>
                </div>
                <div className="col-12 mt-3">
                  <button className="btn-custom w-100 mt-3" type="submit">
                    Qeydiyyatdan keç
                  </button>
                </div>
              </form>
            </div>
            <div className="hero col-xl-6 m-0 p-0 position-relative">
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
    </StyledRegister>
  );
}

export default Register;
