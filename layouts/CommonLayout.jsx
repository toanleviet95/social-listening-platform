import React from 'react';
import { Layout } from 'antd';
import { injectIntl } from 'react-intl';
import withIntl from '@/hocs/withIntl';

import Sidebar from "@/components/Sidebar/index";
import HorizontalDefault from "@/components/Topbar/HorizontalDefault/index";
import HorizontalDark from "@/components/Topbar/HorizontalDark/index";
import InsideHeader from "@/components/Topbar/InsideHeader/index";
import AboveHeader from "@/components/Topbar/AboveHeader/index";
import BelowHeader from "@/components/Topbar/BelowHeader/index";
import Topbar from "@/components/Topbar/index";
import Customizer from "@/components/Customizer";
import NoHeaderNotification from "@/components/Topbar/NoHeaderNotification/index";

import {
  NAV_STYLE_ABOVE_HEADER,
  NAV_STYLE_BELOW_HEADER,
  NAV_STYLE_DARK_HORIZONTAL,
  NAV_STYLE_DEFAULT_HORIZONTAL,
  NAV_STYLE_DRAWER,
  NAV_STYLE_FIXED,
  NAV_STYLE_INSIDE_HEADER_HORIZONTAL,
  NAV_STYLE_MINI_SIDEBAR,
  NAV_STYLE_NO_HEADER_EXPANDED_SIDEBAR,
  NAV_STYLE_NO_HEADER_MINI_SIDEBAR,
  TAB_SIZE
} from "@/constants/ThemeSetting";

import '@/styles/vendors/gaxon/styles.css';
import '@/styles/vendors/react-notification/react-notifications.css';
import '@/styles/wieldy.less';

const {Content, Footer} = Layout;

const CommonLayout = injectIntl(({ intl, title, children }) => {
  const navStyle = NAV_STYLE_FIXED;
  const width = 992;

  const getContainerClass = (navStyle) => {
    switch (navStyle) {
      case NAV_STYLE_DARK_HORIZONTAL:
        return "gx-container-wrap";
      case NAV_STYLE_DEFAULT_HORIZONTAL:
        return "gx-container-wrap";
      case NAV_STYLE_INSIDE_HEADER_HORIZONTAL:
        return "gx-container-wrap";
      case NAV_STYLE_BELOW_HEADER:
        return "gx-container-wrap";
      case NAV_STYLE_ABOVE_HEADER:
        return "gx-container-wrap";
      default:
        return '';
    }
  };

  const getNavStyles = (navStyle) => {
    switch (navStyle) {
      case NAV_STYLE_DEFAULT_HORIZONTAL :
        return <HorizontalDefault/>;
      case NAV_STYLE_DARK_HORIZONTAL :
        return <HorizontalDark/>;
      case NAV_STYLE_INSIDE_HEADER_HORIZONTAL :
        return <InsideHeader/>;
      case NAV_STYLE_ABOVE_HEADER :
        return <AboveHeader/>;
      case NAV_STYLE_BELOW_HEADER :
        return <BelowHeader/>;
      case NAV_STYLE_FIXED :
        return <Topbar/>;
      case NAV_STYLE_DRAWER :
        return <Topbar/>;
      case NAV_STYLE_MINI_SIDEBAR :
        return <Topbar/>;
      case NAV_STYLE_NO_HEADER_MINI_SIDEBAR :
        return <NoHeaderNotification/>;
      case NAV_STYLE_NO_HEADER_EXPANDED_SIDEBAR :
        return <NoHeaderNotification/>;
      default :
        return null;
    }
  };

  const getSidebar = (navStyle, width) => {
    if (width < TAB_SIZE) {
      return <Sidebar/>;
    }
    switch (navStyle) {
      case NAV_STYLE_FIXED :
        return <Sidebar/>;
      case NAV_STYLE_DRAWER :
        return <Sidebar/>;
      case NAV_STYLE_MINI_SIDEBAR :
        return <Sidebar/>;
      case NAV_STYLE_NO_HEADER_MINI_SIDEBAR :
        return <Sidebar/>;
      case NAV_STYLE_NO_HEADER_EXPANDED_SIDEBAR:
        return <Sidebar/>;
      default :
        return null;
    }
  };

  return (
    <Layout className="gx-app-layout">
      {getSidebar(navStyle, width)}
      <Layout>
        {getNavStyles(navStyle)}
        <Content className={`gx-layout-content ${ getContainerClass(navStyle)} `}>
          {children}
          <Footer>
            <div className="gx-layout-footer-content">

            </div>
          </Footer>
        </Content>
      </Layout>
      <Customizer/>
    </Layout>
  );
});

export default withIntl(CommonLayout);
