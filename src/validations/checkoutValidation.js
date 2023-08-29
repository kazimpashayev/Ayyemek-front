import * as yup from 'yup';

export const checkoutSchema = yup.object().shape({
  date: yup.string().required('Tarix mütləqdir'),
});
