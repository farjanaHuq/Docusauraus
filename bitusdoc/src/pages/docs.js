import React from 'react';
import Layout from '@theme/Layout';
import Translate from '@docusaurus/Translate';

export default function MyReactPage() {
  return (
    <Layout>
      <h1>MappedSwap Documentation Page</h1>
      <h2 style={{margin: 20}}>
        <Translate description="The homepage main heading">
          Welcome to my Docusaurus translated site!
        </Translate>
      </h2>
    </Layout>
  );
};