// Form handling
import { useForm } from 'react-hook-form';
import { contactSchema } from '../../validations/contactValidation.js';
import { yupResolver } from '@hookform/resolvers/yup';

import Swal from 'sweetalert2';
// Framer motion
import { motion } from 'framer-motion';
// Style
import { StyledContact } from '../styles/contact/StyledContact.styled.js';
// Icons
import { BsEnvelope } from 'react-icons/bs';
import { FaPhoneAlt } from 'react-icons/fa';

function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(contactSchema),
    // Boş submit verildikdə fokuslanmasın (true olsa hamısına fokus olacaq)
    shouldFocusError: false,
  });

  const onSubmit = (data) => {
    // Dizaynda admin dashboard-u olmadığı üçün POST edilmir!
    console.log(data);
    Swal.fire({
      icon: 'success',
      title: 'Uğurlu!',
      text: 'Mesajınız uğurla göndərilmişdir!',
    });
    // Form dəyərləri sıfırlama
    reset();
  };

  return (
    <StyledContact>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="contact"
      >
        <div className="contact-page bg-white">
          <div className="container">
            <div className="row">
              <div className="contact-title">
                <h2 className="text-uppercase fw-semibold">Əlaqə</h2>
                <p>
                  Bizimlə aşağıdakı məlumatlar vasitəsilə əlaqə saxlaya
                  bilərsiniz
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-6 col-lg-6 col-md-6">
                <div className="contact-method d-flex align-items-center">
                  <div className="contact-icon">
                    <BsEnvelope color="white" size={34} />
                  </div>
                  <div className="contact-method-content d-flex justify-content-between mt-3 mx-3 w-75">
                    <p className="second-color fw-semibold">E-Poçt</p>
                    <a href="mailto:info@ay-yemek.az" className="accent-color">
                      info@ay-yemek.az
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6">
                <div className="contact-method d-flex align-items-center">
                  <div className="contact-icon">
                    <FaPhoneAlt color="white" size={22} />
                  </div>
                  <div className="contact-method-content d-flex justify-content-between align-items-center w-75">
                    <p className="second-color fw-semibold mt-3 mx-3">
                      Telefon
                    </p>
                    <div className="contact-method-number mt-3">
                      <p className="accent-color">+99412 409 40 94</p>
                      <p className="accent-color">+99412 490 40 94</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <form
              onSubmit={handleSubmit(onSubmit)}
              noValidate
              className="form row mt-4"
            >
              <div className="col-xl-6 col-lg-6 col-md-6">
                <label>Ad Soyad</label>
                <input
                  {...register('name')}
                  className={
                    errors.name ? 'form-control is-invalid' : 'form-control'
                  }
                  type="text"
                  name="name"
                />
                <div className="invalid-feedback">{errors.name?.message}</div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6">
                <label>E-Poçt</label>
                <input
                  {...register('email', { required: true })}
                  className={
                    errors.email ? 'form-control is-invalid' : 'form-control'
                  }
                  type="email"
                  name="email"
                />
                <div className="invalid-feedback">{errors.email?.message}</div>
              </div>
              <div className="col-12 gy-5">
                <textarea
                  {...register('message', { required: true })}
                  className={
                    errors.message ? 'form-control is-invalid' : 'form-control'
                  }
                  as="textarea"
                  name="message"
                  cols="30"
                  rows="10"
                  placeholder="Mesajınız"
                ></textarea>
                <div className="invalid-feedback">
                  {errors.message?.message}
                </div>
              </div>
              <div className="col-12 text-center gy-4 mb-4">
                <button type="submit" className="btn btn-danger w-50">
                  Göndər
                </button>
              </div>
            </form>
          </div>
        </div>
      </motion.div>
    </StyledContact>
  );
}

export default Contact;
