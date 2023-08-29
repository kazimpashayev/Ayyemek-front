import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { loginSchema } from '../../validations/loginValidation.js';
import { yupResolver } from '@hookform/resolvers/yup';
import { StyledLogin } from '../styles/auth/StyledLogin.styled.js';
import Logo from '../../assets/logo.svg';
import { FaArrowLeft } from 'react-icons/fa';
import LoginImg from '../../assets/register-bg.png';
import Swal from 'sweetalert2';
import AuthUser from './AuthUser';

function Login() {
  const { http, saveToken } = AuthUser();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
    // Boş submit verildikdə fokuslanmasın (true olsa hamısına fokus olacaq)
    shouldFocusError: false,
  });

  const onSubmit = async (data) => {
    const { email, password } = data;
    console.log(data);

    try {
      const response = await http.post('/login', {
        email: email,
        password: password,
      });

      saveToken(response.data.user, response.data.access_token);
    } catch (error) {
      if (error.response && error.response.status === 401) {
        // Kimlik Doğrulama Xətası
        Swal.fire({
          icon: 'error',
          title: 'Xəta!',
          text: 'Yanlış e-poçt və ya parol. Zəhmət olmasa bir daha cəhd edin.',
        });
      } else {
        // Digər Xətalar (Server və ya Network Problemləri)
        console.log(error);
        Swal.fire({
          icon: 'error',
          title: 'Xəta!',
          text: 'Bir xəta baş verdi. Zəhmət olmasa bir az sonra yenidən cəhd edin.',
        });
      }
    }
  };

  return (
    <StyledLogin>
      <div className="login">
        <div className="container-fluid">
          <div className="row ">
            <div className="col-xl-6 mb-auto">
              <Link to="/">
                <img src={Logo} className="logo ms-5" alt="logo" />
              </Link>
              <div className="redirect mx-5 mt-3">
                <Link to="/" className="btn btn-primary">
                  <FaArrowLeft />
                </Link>
              </div>
              <div className="form-title ps-5 mt-4">
                <h3>Daxil Olun</h3>
                <label>Lorem ipsum dolor sit amet</label>
              </div>
              <form
                onSubmit={handleSubmit(onSubmit)}
                noValidate
                className="form row pe-9 ps-5 mt-3"
              >
                <div className="form-group mt-3">
                  <label>E-poçt</label>
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
                  <label>Şifrə</label>
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
                  <button className="btn-custom w-100 mt-3" type="submit">
                    Daxil ol
                  </button>
                </div>
                <div className="col-12 mt-4 text-center">
                  <p>
                    Hesabınız yoxdur?{' '}
                    <Link
                      to="/register"
                      className="text-accent text-decoration-underline"
                    >
                      Qeydiyyatdan keçin
                    </Link>
                  </p>
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
    </StyledLogin>
  );
}

export default Login;
