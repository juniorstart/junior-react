import React from 'react';
import { useHistory } from 'react-router-dom';
import { useQuery } from 'react-query';
import Page from 'components/Page';
import Table from 'components/Table';
import api from 'api/recruitments';
import formatDate from 'helpers/date/formatDate';
import { routes } from '../index';

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
  const history = useHistory();

  const { data: recruitments, isLoading } = useQuery('rec', api.getRecruitments);
  const handleClick = () => {
    history.push(routes.recruitments.newRecruitment.path);
  };

  return (
    <Page title="Recruitments">
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-xl">Recruitments</h1>
        <button type="submit" className="btn btn--primary block" onClick={handleClick}>
          Create new recruitment
        </button>
      </div>
      {isLoading ? (
        <div>Loading</div>
      ) : (
        <>{recruitments && <Table data={recruitments} columns={columns} />}</>
      )}
    </Page>
  );
};

export default Recruitments;
