import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import Table from 'components/Table';
import Page from 'components/Page';
import { getRecruitments, selectRecruitments } from './recruitmentsSlice';

const Recruitments: React.FC = () => {
  const dispatch = useDispatch();
  const { data } = useSelector(selectRecruitments);

  useEffect(() => {
    dispatch(getRecruitments());
  }, [dispatch]);

  const columns = [
    { accessor: 'id', Header: 'Id' },
    { accessor: 'companyName', Header: 'Company' },
    { accessor: 'city', Header: 'City' },
    { accessor: 'workPlace', Header: 'Street' },
    {
      accessor: 'dateOfCompanyReply',
      Header: 'Company Reply',
      Cell: ({ value }: { value: string }) => moment(value).format('DD.MM.YYYY'),
    },
    {
      accessor: 'applicationDate',
      Header: 'Application date',
      Cell: ({ value }: { value: string }) => moment(value).format('DD.MM.YYYY'),
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

  if (!data) return null;

  return (
    <Page title="Recruitments">
      <h1 className="text-xl mb-4">Recruitments</h1>
      <Table data={data} columns={columns} />
    </Page>
  );
};

export default Recruitments;
