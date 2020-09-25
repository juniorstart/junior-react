import React, { useState } from 'react';
import cs from 'classnames';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers';
import * as yup from 'yup';
import Input from 'components/Input';
import Dialog from 'components/Dialog';
import Checkbox from 'components/Checbox';
import msg from 'helpers/errorMessages';
import { CreateRecruitmentFormData } from 'types/CreateRecruitmentFormData';
import Calendar from '../../../../components/DatePicker';

interface CreateRecruitment {
  open: boolean;
  onClose: () => void;
  onSubmit: (data: CreateRecruitmentFormData) => void;
  loading: boolean;
}

const schema = yup.object().shape({
  companyName: yup.string().required(msg.required),
  city: yup.string().required(msg.required),
  workPlace: yup.string().required(msg.required),
  applicationDate: yup.date().typeError(msg.date).required(msg.required),
  companyReply: yup.bool(),
  dateOfCompanyReply: yup.string().when('companyReply', {
    is: true,
    then: yup.string().required(msg.required),
  }),
  notes: yup.string().required(msg.required),
  linkToApplication: yup.string().required(msg.required),
});

const CreateRecruitmentDialog: React.FC<CreateRecruitment> = ({
  open,
  onClose,
  onSubmit,
  loading,
}) => {
  const { register, handleSubmit, errors, watch, control } = useForm<CreateRecruitmentFormData>({
    resolver: yupResolver(schema),
  });

  const applicationDateValue = watch('applicationDate') as any;

  console.log(applicationDateValue);

  const replyCompanyIsChecked = watch('companyReply', false);

  const {
    companyName,
    city,
    workPlace,
    dateOfCompanyReply,
    applicationDate,
    companyReply,
    notes,
    linkToApplication,
  } = errors;

  return (
    <Dialog
      loading={loading}
      open={open}
      onClose={onClose}
      title="Create recruitment"
      okBtnType="submit"
      okBtnForm="testForm"
      fullScreen
    >
      <form className="form flex flex-wrap" id="testForm" onSubmit={handleSubmit(onSubmit)}>
        <div className="form__control">
          <Input
            label="Company name"
            id="companyName"
            name="companyName"
            inputRef={register}
            error={companyName?.message}
            className={cs({ 'form_field--error': companyName })}
          />
        </div>
        <div className="form__control">
          <Input
            label="City"
            id="city"
            name="city"
            inputRef={register}
            error={city?.message}
            className={cs({ 'form_field--error': city })}
          />
        </div>
        <div className="form__control">
          <Input
            label="Street"
            id="workPlace"
            name="workPlace"
            inputRef={register}
            error={workPlace?.message}
            className={cs({ 'form_field--error': workPlace })}
          />
        </div>
        <div className="form__control">
          <label htmlFor="applicationDate" className="form__label">
            Application Date
            <Controller
              control={control}
              id="applicationDate"
              name="applicationDate"
              placeholderText="Select date"
              render={({ onChange, onBlur, value }) => (
                <Calendar
                  onChange={onChange}
                  onBlur={onBlur}
                  selected={value}
                  className="form__field"
                />
              )}
            />
            <p className="form__error">{applicationDate?.message}</p>
          </label>
        </div>

        <div className="form__control">
          <Input
            label="Notes"
            id="notes"
            name="notes"
            inputRef={register}
            error={notes?.message}
            className={cs({ 'form_field--error': notes })}
          />
        </div>
        <div className="form__control">
          <Input
            label="Link To application"
            id="linkToApplication"
            name="linkToApplication"
            inputRef={register}
            error={linkToApplication?.message}
            className={cs({ 'form_field--error': linkToApplication })}
          />
        </div>
        <div className="form__control">
          <Checkbox
            label="Company reply"
            id="companyReply"
            name="companyReply"
            inputRef={register}
            error={companyReply?.message}
          />
        </div>
        {replyCompanyIsChecked && (
          <div className="form__control">
            <label htmlFor="dateOfCompanyReply" className="form__label">
              Date of company reply
              <Controller
                control={control}
                id="dateOfCompanyReply"
                name="dateOfCompanyReply"
                render={({ onChange, onBlur, value }) => (
                  <Calendar
                    minDate={applicationDateValue}
                    onChange={onChange}
                    onBlur={onBlur}
                    selected={value}
                    className="form__field"
                  />
                )}
              />
              <p className="form__error">{dateOfCompanyReply?.message}</p>
            </label>
          </div>
        )}
      </form>
    </Dialog>
  );
};

export default CreateRecruitmentDialog;
