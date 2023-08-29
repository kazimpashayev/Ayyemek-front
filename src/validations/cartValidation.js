import * as yup from 'yup';

export const cartSchema = yup.object().shape({
  time: yup.string().required('Çatdırılma vaxtı mütləqdir'),
  address: yup.string().required('Ünvan mütləqdir'),
  message: yup.string(),
});
