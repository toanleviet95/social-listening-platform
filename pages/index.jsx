import React from 'react';
import Head from 'next/head';
import CommonLayout from '@/layouts/CommonLayout';
// import IntlLayout from '@/layouts/IntlLayout';
import withIntl from '@/hocs/withIntl';

const Index = () => (
  <CommonLayout>
    <Head>
      <title>Home</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    Hello world
  </CommonLayout>
);

export default withIntl(Index);
