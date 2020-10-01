import React from 'react';
import { useHistory } from 'react-router-dom';
import Page from 'components/Page';
import { CreateRecruitmentFormData } from 'types/CreateRecruitmentFormData';
import { useMutation } from 'react-query';
import api from 'api/recruitments';
import { routes } from 'routes';
import { toast } from 'react-toastify';
import NewRecruitmentForm from './components/NewRecruitmentForm';

const NewRecruitment: React.FC = () => {
  const history = useHistory();
  const onSuccess = () => {
    history.push(routes.recruitments.root.path);
    toast.success('Recruitment created successfully');
  };

  const [createNewRecruitment] = useMutation(api.createRecruitment, {
    onSuccess,
    onError: () => {
      toast.error('Error while creating new recruitment');
    },
  });

  const handleSubmit = async (recruitment: CreateRecruitmentFormData) => {
    await createNewRecruitment(recruitment);
  };
  return (
    <Page title="Create new recruitment" wrapperClassName="lg:w-2/3">
      <NewRecruitmentForm onSubmit={handleSubmit} />
    </Page>
  );
};

export default NewRecruitment;
