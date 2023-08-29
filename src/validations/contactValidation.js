import * as yup from 'yup';

export const contactSchema = yup.object().shape({
  name: yup
    .string()
    .required('Ad və Soyad mütləqdir')
    .min(10, 'Minimum 10 hərfən ibarət olmalıdır'),
  email: yup
    .string()
    .email('Yanlış e-poçt formatı')
    .required('E-poçt mütləqdir'),
  message: yup
    .string()
    .required('Mesaj mütləqdir')
    .min(10, 'Mesaj 10 xarakterdən yuxarı olmalıdır'),
});
