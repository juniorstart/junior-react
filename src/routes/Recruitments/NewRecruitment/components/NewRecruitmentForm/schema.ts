import * as yup from 'yup';
import msg from 'helpers/errorMessages';

export default yup.object().shape({
  companyName: yup.string().required(msg.required),
  city: yup.string().required(msg.required),
  workPlace: yup.string().required(msg.required),
  applicationDate: yup.date().typeError(msg.date).required(msg.required),
  companyReply: yup.bool(),
  dateOfCompanyReply: yup.date().when('companyReply', {
    is: true,
    then: yup.date().typeError(msg.date).required(msg.required),
  }),
  notes: yup.string().required(msg.required),
  linkToApplication: yup.string().required(msg.required),
});
