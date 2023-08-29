import * as yup from 'yup';

export const registerSchema = yup.object().shape({
  name: yup.string().required('Ad mütləqdir'),
  lastname: yup.string().required('Soyad mütləqdir'),
  email: yup
    .string()
    .email('Yanlış e-poçt formatı')
    .required('E-poçt mütləqdir'),
  birthday: yup.string().required('Doğum tarixi mütləqdir'),
  phone: yup.string().required('Telefon nömrəsi mütləqdir'),
  address: yup.string().required('Ünvan mütləqdir'),
  password: yup.string().required('Şifrə mütləqdir'),
});
