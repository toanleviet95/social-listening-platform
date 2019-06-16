import React, { Fragment } from 'react';
import { Col, Row } from 'antd';
import About from '@/components/Profile/About/index';
import Biography from '@/components/Profile/Biography/index';
import Events from '@/components/Profile/Events/index';
import Contact from '@/components/Profile/Contact/index';
import { friendList } from '@/data/profile';
import { photoList } from '@/data/wall';
import Friends from '@/components/Profile/Friends/index';
import Photos from '@/components/Profile/Photos/index';
import ProfileHeader from '@/components/Profile/ProfileHeader/index';
import Head from 'next/head';
import CommonLayout from '@/layouts/CommonLayout';

const Profile = () => (
  <CommonLayout>
    <Head>
      <title>Profile</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Fragment>
      <ProfileHeader />
      <div className="gx-profile-content">
        <Row>
          <Col xl={16} lg={14} md={14} sm={24} xs={24}>
            <About />
            <Biography />
            <Events />
          </Col>

          <Col xl={8} lg={10} md={10} sm={24} xs={24}>
            <Contact />
            <Row>
              <Col xl={24} lg={24} md={24} sm={12} xs={24}>
                <Friends friendList={friendList} />
              </Col>
              <Col xl={24} lg={24} md={24} sm={12} xs={24}>
                <Photos photoList={photoList} />
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </Fragment>
  </CommonLayout>
);

export default Profile;
