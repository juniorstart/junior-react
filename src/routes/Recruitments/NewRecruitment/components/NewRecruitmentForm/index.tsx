import React from 'react';
import cs from 'classnames';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers';
import Input from 'components/Input';
import Calendar from 'components/DatePicker';
import Checkbox from 'components/Checbox';
import { CreateRecruitmentFormData } from 'types/CreateRecruitmentFormData';
import schema from './schema';

interface NewRecruitmentForm {
  onSubmit: (data: CreateRecruitmentFormData) => void;
}

const NewRecruitmentForm: React.FC<NewRecruitmentForm> = ({ onSubmit }) => {
  const { register, handleSubmit, errors, watch, control } = useForm<CreateRecruitmentFormData>({
    resolver: yupResolver(schema),
  });

  const applicationDateValue = watch('applicationDate') as unknown;
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
    <form className="form flex flex-wrap" id="testForm" onSubmit={handleSubmit(onSubmit)}>
      <div className="form__control form__control--horizontal">
        <div className="form__label">Company name</div>
        <Input
          id="companyName"
          name="companyName"
          inputRef={register}
          error={companyName?.message}
          className={cs({ 'form_field--error': companyName })}
        />
      </div>
      <div className="form__control form__control--horizontal">
        <div className="form__label">City</div>
        <Input
          id="city"
          name="city"
          inputRef={register}
          error={city?.message}
          className={cs({ 'form_field--error': city })}
        />
      </div>
      <div className="form__control form__control--horizontal">
        <div className="form__label">Street</div>
        <Input
          id="workPlace"
          name="workPlace"
          inputRef={register}
          error={workPlace?.message}
          className={cs({ 'form_field--error': workPlace })}
        />
      </div>
      <div className="form__control form__control--horizontal">
        <div className="form__label">Date</div>
        <div>
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
                wrapperClassName="flex ml-auto"
              />
            )}
          />
          <p className="form__error">{applicationDate?.message}</p>
        </div>
      </div>
      <div className="form__control form__control--horizontal">
        <div className="form__label">Notes</div>
        <Input
          id="notes"
          name="notes"
          inputRef={register}
          error={notes?.message}
          className={cs({ 'form_field--error': notes })}
        />
      </div>
      <div className="form__control form__control--horizontal">
        <div className="form__label">Link To application</div>
        <Input
          id="linkToApplication"
          name="linkToApplication"
          inputRef={register}
          error={linkToApplication?.message}
          className={cs({ 'form_field--error': linkToApplication })}
        />
      </div>
      {applicationDateValue && (
        <div className="form__control form__control--horizontal">
          <Checkbox
            label="Company reply"
            id="companyReply"
            name="companyReply"
            inputRef={register}
            error={companyReply?.message}
          />
        </div>
      )}
      {replyCompanyIsChecked && applicationDateValue && (
        <div className="form__control form__control--horizontal">
          <div className="form__label">Date of company reply</div>
          <div>
            <Controller
              control={control}
              id="dateOfCompanyReply"
              name="dateOfCompanyReply"
              placeholderText="Select date"
              render={({ onChange, onBlur, value }) => (
                <Calendar
                  minDate={applicationDateValue as Date}
                  onChange={onChange}
                  onBlur={onBlur}
                  selected={value}
                  className="form__field"
                  wrapperClassName="flex ml-auto"
                />
              )}
            />
            <p className="form__error">{dateOfCompanyReply?.message}</p>
          </div>
        </div>
      )}
      <div className="form__control">
        <button type="submit" className="btn btn--primary w-64 ml-auto">
          Create recruitment
        </button>
      </div>
    </form>
  );
};

export default NewRecruitmentForm;
