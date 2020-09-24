import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {toast, ToastContainer} from 'react-toastify';
import Table from 'components/Table';
import Page from 'components/Page';
import formatDate from 'helpers/date/formatDate';
import { createRecruitment, getRecruitments, selectRecruitments } from './recruitmentsSlice';
import CreateRecruitmentDialog from './components/CreateRecruitmentDialog';
import { CreateRecruitmentFormData } from '../../types/CreateRecruitmentFormData';
import ApiStatuses from '../../types/ApiStatuses';
import 'react-toastify/dist/ReactToastify.css';
import "react-datepicker/dist/react-datepicker.css";


const columns = [
  { accessor: 'id', Header: 'Id' },
  { accessor: 'companyName', Header: 'Company' },
  { accessor: 'city', Header: 'City' },
  { accessor: 'workPlace', Header: 'Street' },
  {
    accessor: 'dateOfCompanyReply',
    Header: 'Company Reply',
    Cell: ({ value }: { value: string }) => formatDate(value),
  },
  {
    accessor: 'applicationDate',
    Header: 'Application date',
    Cell: ({ value }: { value: string }) => formatDate(value),
  },
  {
    accessor: 'companyReply',
    Header: 'Reply',
    Cell: ({ value }: { value: boolean }) => (value ? 'Yes' : 'No'),
  },
  { accessor: 'notes', Header: 'Notes' },
  {
    accessor: 'linkToApplication',
    Header: 'Link',
    Cell: ({ value }: { value: string }) => (
      <a className="text-primary-500" target="_blank" href={value}>
        Link
      </a>
    ),
  },
];

const Recruitments: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);
  const dispatch = useDispatch();
  const { recruitments, updateStatus } = useSelector(selectRecruitments);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    dispatch(getRecruitments());
  }, [dispatch]);

  useEffect(() => {
    if (updateStatus === ApiStatuses.succeeded) {
      dispatch(getRecruitments());
      handleClose();
      toast("Will close after 15s", { autoClose: 15000 });
    }
  }, [updateStatus]);

  if (!recruitments.length) return null;

  const handleSubmit = (data: CreateRecruitmentFormData) => {
    dispatch(createRecruitment(data));
  };

  return (
    <Page title="Recruitments">
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-xl">Recruitments</h1>
        <button type="submit" className="btn btn--primary block" onClick={handleOpen}>
          Create new recruitment
        </button>
      </div>
      <CreateRecruitmentDialog
        onSubmit={handleSubmit}
        loading={updateStatus === ApiStatuses.loading}
        open={isOpen}
        onClose={handleClose}
      />
      {recruitments.length && <Table data={recruitments} columns={columns} />}
      <ToastContainer />
    </Page>
  );
};

export default Recruitments;
