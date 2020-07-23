import React from 'react';
import { RouteChildrenProps } from 'react-router-dom';
import Page from 'components/Page';

const SingleProduct: React.FC<RouteChildrenProps> = ({ match }) => {
  return <Page>SingleProduct {match?.url}</Page>;
};

export default SingleProduct;
