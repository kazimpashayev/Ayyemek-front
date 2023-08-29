import * as yup from 'yup';

export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email('Yanlış e-poçt formatı')
    .required('E-poçt mütləqdir'),
  password: yup.string().required('Şifrə mütləqdir'),
});
