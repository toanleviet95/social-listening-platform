import React, { Component } from "react";
import { Menu } from "antd";
import Link from "next/link";

import CustomScrollbars from "@/utils/CustomScrollbars";
import SidebarLogo from "./SidebarLogo";

import UserProfile from "./UserProfile";
import AppsNavigation from "./AppsNavigation";
import {
  NAV_STYLE_NO_HEADER_EXPANDED_SIDEBAR,
  NAV_STYLE_NO_HEADER_MINI_SIDEBAR,
  THEME_TYPE_LITE
} from "@/constants/ThemeSetting";
import { FormattedMessage } from "react-intl";
import {connect} from "react-redux";

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class SidebarContent extends Component {
  getNoHeaderClass = navStyle => {
    if (
      navStyle === NAV_STYLE_NO_HEADER_MINI_SIDEBAR ||
      navStyle === NAV_STYLE_NO_HEADER_EXPANDED_SIDEBAR
    ) {
      return "gx-no-header-notifications";
    }
    return "";
  };
  getNavStyleSubMenuClass = navStyle => {
    if (navStyle === NAV_STYLE_NO_HEADER_MINI_SIDEBAR) {
      return "gx-no-header-submenu-popup";
    }
    return "";
  };

  render() {
    const { themeType, navStyle, pathname } = this.props;
    const selectedKeys = (pathname && pathname.substr(1)) || "";
    const defaultOpenKeys = selectedKeys.split("/")[1];
    return (
      <>
        <SidebarLogo />
        <div className="gx-sidebar-content">
          <div
            className={`gx-sidebar-notifications ${this.getNoHeaderClass(
              navStyle
            )}`}
          >
            <UserProfile />
            <AppsNavigation />
          </div>
          <CustomScrollbars className="gx-layout-sider-scrollbar">
            <Menu
              defaultOpenKeys={[defaultOpenKeys]}
              selectedKeys={[selectedKeys]}
              theme={themeType === THEME_TYPE_LITE ? "lite" : "dark"}
              mode="inline"
            >
              <MenuItemGroup
                key="main"
                className="gx-menu-group"
                title={<FormattedMessage id="sidebar.main" />}
              >
                <SubMenu
                  key="dashboard"
                  className={this.getNavStyleSubMenuClass(navStyle)}
                  title={
                    <span>
                      {" "}
                      <i className="icon icon-dasbhoard" />
                      <FormattedMessage id="sidebar.dashboard" />
                    </span>
                  }
                >
                  <Menu.Item key="main/dashboard/crypto">
                    <Link href="/main/dashboard/crypto">
                      <>
                        <i className="icon icon-crypto" />
                        <FormattedMessage id="sidebar.dashboard.crypto" />
                      </>
                    </Link>
                  </Menu.Item>
                  <Menu.Item key="main/dashboard/crm">
                    <Link href="/main/dashboard/crm">
                      <>
                        <i className="icon icon-crm" />
                        <FormattedMessage id="sidebar.dashboard.crm" />
                      </>
                    </Link>
                  </Menu.Item>
                  <Menu.Item key="main/dashboard/listing">
                    <Link href="/main/dashboard/listing">
                      <>
                        <i className="icon icon-listing-dbrd" />
                        <FormattedMessage id="sidebar.dashboard.listing" />
                      </>
                    </Link>
                  </Menu.Item>
                </SubMenu>

                <Menu.Item key="main/widgets">
                  <Link href="/main/widgets">
                    <>
                      <i className="icon icon-widgets" />
                      <FormattedMessage id="sidebar.widgets" />
                    </>
                  </Link>
                </Menu.Item>

                <Menu.Item key="main/metrics">
                  <Link href="/main/metrics">
                    <>
                      <i className="icon icon-apps" />
                      <FormattedMessage id="sidebar.metrics" />
                    </>
                  </Link>
                </Menu.Item>

                <Menu.Item key="main/layouts">
                  <Link href="/main/layouts">
                    <>
                      <i className="icon icon-card" />
                      <FormattedMessage id="sidebar.layouts" />
                    </>
                  </Link>
                </Menu.Item>
              </MenuItemGroup>

              {/* <MenuItemGroup
                key="in-built-apps"
                className="gx-menu-group"
                title={<FormattedMessage id="sidebar.inBuiltApp" />}
              >
                <Menu.Item key="in-built-apps/mail">
                  <Link href="/in-built-apps/mail">
                    <i className="icon icon-email" />
                    <FormattedMessage id="sidebar.mailApp" />
                  </Link>
                </Menu.Item>

                <Menu.Item key="in-built-apps/todo">
                  <Link href="/in-built-apps/todo">
                    <i className="icon icon-check-square-o" />
                    <FormattedMessage id="sidebar.todoApp" />
                  </Link>
                </Menu.Item>

                <Menu.Item key="in-built-apps/contacts">
                  <Link href="/in-built-apps/contacts">
                    <i className="icon icon-contacts" />
                    <FormattedMessage id="sidebar.contactsApp" />
                  </Link>
                </Menu.Item>

                <Menu.Item key="in-built-apps/chat">
                  <Link href="/in-built-apps/chat">
                    <i className="icon icon-chat-bubble -flex-column-reverse" />
                    <FormattedMessage id="sidebar.chatApp" />
                  </Link>
                </Menu.Item>

                <Menu.Item key="main/notes">
                  <Link href="/in-built-apps/notes">
                    <i className="icon icon-copy" />
                    <FormattedMessage id="sidebar.notes" />
                  </Link>
                </Menu.Item>

                <Menu.Item key="main/algolia">
                  <Link href="/main/algolia">
                    <i className="icon icon-shopping-cart " />
                    <FormattedMessage id="sidebar.algolia" />
                  </Link>
                </Menu.Item>

                <Menu.Item key="in-built-apps/firebase-crud">
                  <Link href="/in-built-apps/firebase-crud">
                    <i className="icon icon-icon" />
                    <FormattedMessage id="sidebar.crud" />
                  </Link>
                </Menu.Item>
              </MenuItemGroup>

              <MenuItemGroup
                key="social-apps"
                className="gx-menu-group"
                title={<FormattedMessage id="sidebar.social" />}
              >
                <Menu.Item key="social-apps/profile">
                  <Link href="/social-apps/profile">
                    <i className="icon icon-profile2" />
                    <FormattedMessage id="sidebar.extensions.profile" />
                  </Link>
                </Menu.Item>

                <Menu.Item key="social-apps/wall">
                  <Link href="/social-apps/wall">
                    <i className="icon icon-avatar -flex-column-reverse" />
                    <FormattedMessage id="sidebar.wall" />
                  </Link>
                </Menu.Item>
              </MenuItemGroup>

              <MenuItemGroup
                key="components"
                className="gx-menu-group"
                title={<FormattedMessage id="sidebar.components" />}
              >
                <SubMenu
                  key="general"
                  className={this.getNavStyleSubMenuClass(navStyle)}
                  title={
                    <span>
                      <i className="icon icon-all-contacts" />
                      <FormattedMessage id="sidebar.components.general" />
                    </span>
                  }
                >
                  <Menu.Item key="@/components/general/button">
                    <Link href="/components/general/button">
                      <FormattedMessage id="sidebar.general.button" />
                    </Link>
                  </Menu.Item>
                  <Menu.Item key="@/components/general/icon">
                    <Link href="/components/general/icon">
                      <FormattedMessage id="sidebar.general.icon" />
                    </Link>
                  </Menu.Item>
                </SubMenu>

                <SubMenu
                  key="navigation"
                  className={this.getNavStyleSubMenuClass(navStyle)}
                  title={
                    <span>
                      <i className="icon icon-navigation" />
                      <FormattedMessage id="sidebar.components.navigation" />
                    </span>
                  }
                >
                  <Menu.Item key="@/components/navigation/affix">
                    <Link href="/components/navigation/affix">
                      <FormattedMessage id="sidebar.navigation.affix" />
                    </Link>
                  </Menu.Item>
                  <Menu.Item key="@/components/navigation/breadcrumb">
                    <Link href="/components/navigation/breadcrumb">
                      <FormattedMessage id="sidebar.navigation.breadcrumb" />
                    </Link>
                  </Menu.Item>
                  <Menu.Item key="@/components/navigation/dropdown">
                    <Link href="/components/navigation/dropdown">
                      <FormattedMessage id="sidebar.navigation.dropdown" />
                    </Link>
                  </Menu.Item>
                  <Menu.Item key="@/components/navigation/menu">
                    <Link href="/components/navigation/menu">
                      <FormattedMessage id="sidebar.navigation.menu" />
                    </Link>
                  </Menu.Item>
                  <Menu.Item key="@/components/navigation/pagination">
                    <Link href="/components/navigation/pagination">
                      <FormattedMessage id="sidebar.navigation.pagination" />
                    </Link>
                  </Menu.Item>
                  <Menu.Item key="@/components/navigation/steps">
                    <Link href="/components/navigation/steps">
                      <FormattedMessage id="sidebar.navigation.steps" />
                    </Link>
                  </Menu.Item>
                </SubMenu>

                <SubMenu
                  key="dataEntry"
                  className={this.getNavStyleSubMenuClass(navStyle)}
                  title={
                    <span>
                      <i className="icon icon-data-entry" />
                      <FormattedMessage id="sidebar.components.dataEntry" />
                    </span>
                  }
                >
                  <Menu.Item key="@/components/dataEntry/autoComplete">
                    <Link href="/components/dataEntry/autoComplete">
                      <FormattedMessage id="sidebar.dataEntry.autoComplete" />
                    </Link>
                  </Menu.Item>
                  <Menu.Item key="@/components/dataEntry/checkbox">
                    <Link href="/components/dataEntry/checkbox">
                      <FormattedMessage id="sidebar.dataEntry.checkbox" />
                    </Link>
                  </Menu.Item>
                  <Menu.Item key="@/components/dataEntry/cascader">
                    <Link href="/components/dataEntry/cascader">
                      <FormattedMessage id="sidebar.dataEntry.cascader" />
                    </Link>
                  </Menu.Item>
                  <Menu.Item key="@/components/dataEntry/datePicker">
                    <Link href="/components/dataEntry/datePicker">
                      <FormattedMessage id="sidebar.dataEntry.datePicker" />
                    </Link>
                  </Menu.Item>
                  <Menu.Item key="@/components/dataEntry/form">
                    <Link href="/components/dataEntry/form">
                      <FormattedMessage id="sidebar.dataEntry.form" />
                    </Link>
                  </Menu.Item>
                  <Menu.Item key="@/components/dataEntry/inputNumber">
                    <Link href="/components/dataEntry/inputNumber">
                      <FormattedMessage id="sidebar.dataEntry.inputNumber" />
                    </Link>
                  </Menu.Item>
                  <Menu.Item key="@/components/dataEntry/input">
                    <Link href="/components/dataEntry/input">
                      <FormattedMessage id="sidebar.dataEntry.input" />
                    </Link>
                  </Menu.Item>
                  <Menu.Item key="@/components/dataEntry/mention">
                    <Link href="/components/dataEntry/mention">
                      <FormattedMessage id="sidebar.dataEntry.mention" />
                    </Link>
                  </Menu.Item>
                  <Menu.Item key="@/components/dataEntry/rate">
                    <Link href="/components/dataEntry/rate">
                      <FormattedMessage id="sidebar.dataEntry.rate" />
                    </Link>
                  </Menu.Item>
                  <Menu.Item key="@/components/dataEntry/radio">
                    <Link href="/components/dataEntry/radio">
                      <FormattedMessage id="sidebar.dataEntry.radio" />
                    </Link>
                  </Menu.Item>
                  <Menu.Item key="@/components/dataEntry/switch">
                    <Link href="/components/dataEntry/switch">
                      <FormattedMessage id="sidebar.dataEntry.switch" />
                    </Link>
                  </Menu.Item>
                  <Menu.Item key="@/components/dataEntry/slider">
                    <Link href="/components/dataEntry/slider">
                      <FormattedMessage id="sidebar.dataEntry.slider" />
                    </Link>
                  </Menu.Item>
                  <Menu.Item key="@/components/dataEntry/select">
                    <Link href="/components/dataEntry/select">
                      <FormattedMessage id="sidebar.dataEntry.select" />
                    </Link>
                  </Menu.Item>
                  <Menu.Item key="@/components/dataEntry/treeSelect">
                    <Link href="/components/dataEntry/treeSelect">
                      <FormattedMessage id="sidebar.dataEntry.treeSelect" />
                    </Link>
                  </Menu.Item>
                  <Menu.Item key="@/components/dataEntry/transfer">
                    <Link href="/components/dataEntry/transfer">
                      <FormattedMessage id="sidebar.dataEntry.transfer" />
                    </Link>
                  </Menu.Item>
                  <Menu.Item key="@/components/dataEntry/timePicker">
                    <Link href="/components/dataEntry/timePicker">
                      <FormattedMessage id="sidebar.dataEntry.timePicker" />
                    </Link>
                  </Menu.Item>
                  <Menu.Item key="@/components/dataEntry/upload">
                    <Link href="/components/dataEntry/upload">
                      <FormattedMessage id="sidebar.dataEntry.upload" />
                    </Link>
                  </Menu.Item>
                </SubMenu>

                <SubMenu
                  key="dataDisplay"
                  className={this.getNavStyleSubMenuClass(navStyle)}
                  title={
                    <span>
                      <i className="icon icon-data-display" />

                      <FormattedMessage id="sidebar.components.dataDisplay" />
                    </span>
                  }
                >
                  <Menu.Item key="@/components/dataDisplay/avatar">
                    <Link href="/components/dataDisplay/avatar">
                      <FormattedMessage id="sidebar.dataDisplay.avatar" />
                    </Link>
                  </Menu.Item>
                  <Menu.Item key="@/components/dataDisplay/badge">
                    <Link href="/components/dataDisplay/badge">
                      <FormattedMessage id="sidebar.dataDisplay.badge" />
                    </Link>
                  </Menu.Item>
                  <Menu.Item key="@/components/dataDisplay/collapse">
                    <Link href="/components/dataDisplay/collapse">
                      <FormattedMessage id="sidebar.dataDisplay.collapse" />
                    </Link>
                  </Menu.Item>
                  <Menu.Item key="@/components/dataDisplay/carousel">
                    <Link href="/components/dataDisplay/carousel">
                      <FormattedMessage id="sidebar.dataDisplay.carousel" />
                    </Link>
                  </Menu.Item>
                  <Menu.Item key="@/components/dataDisplay/card">
                    <Link href="/components/dataDisplay/card">
                      <FormattedMessage id="sidebar.dataDisplay.card" />
                    </Link>
                  </Menu.Item>
                  <Menu.Item key="@/components/dataDisplay/calendar">
                    <Link href="/components/dataDisplay/calendar">
                      <FormattedMessage id="sidebar.dataDisplay.calender" />
                    </Link>
                  </Menu.Item>
                  <Menu.Item key="@/components/dataDisplay/list">
                    <Link href="/components/dataDisplay/list">
                      <FormattedMessage id="sidebar.dataDisplay.list" />
                    </Link>
                  </Menu.Item>
                  <Menu.Item key="@/components/dataDisplay/popover">
                    <Link href="/components/dataDisplay/popover">
                      <FormattedMessage id="sidebar.dataDisplay.popover" />
                    </Link>
                  </Menu.Item>
                  <Menu.Item key="@/components/dataDisplay/tree">
                    <Link href="/components/dataDisplay/tree">
                      <FormattedMessage id="sidebar.dataDisplay.tree" />
                    </Link>
                  </Menu.Item>
                  <Menu.Item key="@/components/dataDisplay/tooltip">
                    <Link href="/components/dataDisplay/tooltip">
                      <FormattedMessage id="sidebar.dataDisplay.toolTips" />
                    </Link>
                  </Menu.Item>
                  <Menu.Item key="@/components/dataDisplay/timeline">
                    <Link href="/components/dataDisplay/timeline">
                      <FormattedMessage id="sidebar.dataDisplay.timeLine" />
                    </Link>
                  </Menu.Item>
                  <Menu.Item key="@/components/dataDisplay/tag">
                    <Link href="/components/dataDisplay/tag">
                      <FormattedMessage id="sidebar.dataDisplay.tag" />
                    </Link>
                  </Menu.Item>
                  <Menu.Item key="@/components/dataDisplay/tabs">
                    <Link href="/components/dataDisplay/tabs">
                      <FormattedMessage id="sidebar.dataDisplay.tabs" />
                    </Link>
                  </Menu.Item>
                </SubMenu>

                <SubMenu
                  key="feedBack"
                  className={this.getNavStyleSubMenuClass(navStyle)}
                  title={
                    <span>
                      <i className="icon icon-feedback" />
                      <FormattedMessage id="sidebar.components.feedBack" />
                    </span>
                  }
                >
                  <Menu.Item key="@/components/feedBack/alert">
                    <Link href="/components/feedBack/alert">
                      <FormattedMessage id="sidebar.feedBack.alert" />
                    </Link>
                  </Menu.Item>
                  <Menu.Item key="@/components/feedBack/modal">
                    <Link href="/components/feedBack/modal">
                      <FormattedMessage id="sidebar.feedBack.modal" />
                    </Link>
                  </Menu.Item>
                  <Menu.Item key="@/components/feedBack/message">
                    <Link href="/components/feedBack/message">
                      <FormattedMessage id="sidebar.feedBack.message" />
                    </Link>
                  </Menu.Item>
                  <Menu.Item key="@/components/feedBack/notification">
                    <Link href="/components/feedBack/notification">
                      <FormattedMessage id="sidebar.feedBack.notification" />
                    </Link>
                  </Menu.Item>
                  <Menu.Item key="@/components/feedBack/progress">
                    <Link href="/components/feedBack/progress">
                      <FormattedMessage id="sidebar.feedBack.progress" />
                    </Link>
                  </Menu.Item>
                  <Menu.Item key="@/components/feedBack/popconfirm">
                    <Link href="/components/feedBack/popconfirm">
                      <FormattedMessage id="sidebar.feedBack.popConfirm" />
                    </Link>
                  </Menu.Item>
                  <Menu.Item key="@/components/feedBack/spin">
                    <Link href="/components/feedBack/spin">
                      <FormattedMessage id="sidebar.feedBack.spin" />
                    </Link>
                  </Menu.Item>
                </SubMenu>

                <SubMenu
                  key="others"
                  className={this.getNavStyleSubMenuClass(navStyle)}
                  title={
                    <span>
                      <i className="icon icon-inbox" />
                      <FormattedMessage id="sidebar.components.other" />
                    </span>
                  }
                >
                  <Menu.Item key="@/components/others/anchor">
                    <Link href="/components/others/anchor">
                      <FormattedMessage id="sidebar.other.anchor" />
                    </Link>
                  </Menu.Item>
                  <Menu.Item key="@/components/others/backtop">
                    <Link href="/components/others/backtop">
                      <FormattedMessage id="sidebar.other.backTop" />
                    </Link>
                  </Menu.Item>
                  <Menu.Item key="@/components/others/divider">
                    <Link href="/components/others/divider">
                      <FormattedMessage id="sidebar.other.divider" />
                    </Link>
                  </Menu.Item>
                </SubMenu>

                <SubMenu
                  key="table"
                  className={this.getNavStyleSubMenuClass(navStyle)}
                  title={
                    <span>
                      <i className="icon icon-table" />

                      <FormattedMessage id="sidebar.dataDisplay.table" />
                    </span>
                  }
                >
                  <Menu.Item key="@/components/table/basic">
                    <Link href="/components/table/basic">
                      <FormattedMessage id="sidebar.view.basicTable" />
                    </Link>
                  </Menu.Item>
                  <Menu.Item key="@/components/table/data">
                    <Link href="/components/table/data">
                      <FormattedMessage id="sidebar.view.dataTable" />
                    </Link>
                  </Menu.Item>
                </SubMenu>
              </MenuItemGroup>

              <MenuItemGroup
                key="extraComponents"
                className="gx-menu-group"
                title={<FormattedMessage id="sidebar.extraComponents" />}
              >
                <SubMenu
                  key="editor"
                  className={this.getNavStyleSubMenuClass(navStyle)}
                  title={
                    <span>
                      <i className="icon icon-editor" />
                      <FormattedMessage id="sidebar.editors" />
                    </span>
                  }
                >
                  <Menu.Item key="extra-components/editor/ck">
                    <Link href="/extra-components/editor/ck">
                      <FormattedMessage id="sidebar.editors.CKEditor" />
                    </Link>
                  </Menu.Item>
                  <Menu.Item key="extra-components/editor/wysiswyg">
                    <Link href="/extra-components/editor/wysiswyg">
                      <FormattedMessage id="sidebar.editors.WYSISWYGEditor" />
                    </Link>
                  </Menu.Item>
                </SubMenu>

                <Menu.Item key="extra-components/color-picker">
                  <Link href="/extra-components/color-picker">
                    <i className="icon icon-picker" />

                    <FormattedMessage id="sidebar.pickers.colorPickers" />
                  </Link>
                </Menu.Item>

                <Menu.Item key="extra-components/dnd">
                  <Link href="/extra-components/dnd">
                    <i className="icon icon-drag-and-drop" />

                    <FormattedMessage id="sidebar.extensions.dragNDrop" />
                  </Link>
                </Menu.Item>

                <Menu.Item key="extra-components/sweet-alert">
                  <Link href="/extra-components/sweet-alert">
                    <i className="icon icon-sweet-alert" />

                    <FormattedMessage id="sidebar.extensions.sweetAlert" />
                  </Link>
                </Menu.Item>

                <Menu.Item key="extra-components/notification">
                  <Link href="/extra-components/notification">
                    <i className="icon icon-notification" />
                    <FormattedMessage id="sidebar.extensions.notification" />
                  </Link>
                </Menu.Item>

                <SubMenu
                  key="time-line"
                  className={this.getNavStyleSubMenuClass(navStyle)}
                  title={
                    <span>
                      <i className="icon icon-timeline" />
                      <FormattedMessage id="sidebar.timeLine" />
                    </span>
                  }
                >
                  <Menu.Item key="extra-components/time-line/default">
                    <Link href="/extra-components/time-line/default">
                      <FormattedMessage id="sidebar.timeLine.default" />
                    </Link>
                  </Menu.Item>
                  <Menu.Item key="extra-components/time-line/default-with-icon">
                    <Link href="/extra-components/time-line/default-with-icon">
                      <FormattedMessage id="sidebar.timeLine.defaultwithIcons" />
                    </Link>
                  </Menu.Item>
                  <Menu.Item key="extra-components/time-line/left-align">
                    <Link href="/extra-components/time-line/left-align">
                      <FormattedMessage id="sidebar.timeLine.leftAligned" />
                    </Link>
                  </Menu.Item>
                </SubMenu>

                <Menu.Item key="extra-components/shuffle">
                  <Link href="/extra-components/shuffle">
                    <i className="icon icon-shuffle" />
                    <FormattedMessage id="sidebar.extensions.shuffle" />
                  </Link>
                </Menu.Item>
              </MenuItemGroup>

              <MenuItemGroup
                key="extensions"
                className="gx-menu-group"
                title={<FormattedMessage id="sidebar.extensions" />}
              >
                <SubMenu
                  key="map"
                  className={this.getNavStyleSubMenuClass(navStyle)}
                  title={
                    <span>
                      {" "}
                      <i className="icon icon-extensions" />
                      <FormattedMessage id="sidebar.map" />
                    </span>
                  }
                >
                  <SubMenu
                    key="google"
                    className={this.getNavStyleSubMenuClass(navStyle)}
                    title={
                      <span>
                        <i className="icon icon-map-google" />
                        <FormattedMessage id="sidebar.google.map" />
                      </span>
                    }
                  >
                    <Menu.Item key="extensions/map/google/simple">
                      <Link href="/extensions/map/google/simple">
                        <FormattedMessage id="sidebar.map.simple" />
                      </Link>
                    </Menu.Item>
                    <Menu.Item key="extensions/map/google/styled">
                      <Link href="/extensions/map/google/styled">
                        <FormattedMessage id="sidebar.map.styled" />
                      </Link>
                    </Menu.Item>
                    <Menu.Item key="extensions/map/google/geo-location">
                      <Link href="/extensions/map/google/geo-location">
                        <FormattedMessage id="sidebar.map.geoLocation" />
                      </Link>
                    </Menu.Item>
                    <Menu.Item key="extensions/map/google/directions">
                      <Link href="/extensions/map/google/directions">
                        <FormattedMessage id="sidebar.map.mapDirection" />
                      </Link>
                    </Menu.Item>
                    <Menu.Item key="extensions/map/google/overlay">
                      <Link href="/extensions/map/google/overlay">
                        <FormattedMessage id="sidebar.map.overlay" />
                      </Link>
                    </Menu.Item>
                    <Menu.Item key="extensions/map/google/kml">
                      <Link href="/extensions/map/google/kml">
                        <FormattedMessage id="sidebar.map.kmLayer" />
                      </Link>
                    </Menu.Item>
                    <Menu.Item key="extensions/map/google/popup-info">
                      <Link href="/extensions/map/google/popup-info">
                        <FormattedMessage id="sidebar.map.popupInfo" />
                      </Link>
                    </Menu.Item>
                    <Menu.Item key="extensions/map/google/traffic">
                      <Link href="/extensions/map/google/traffic">
                        <FormattedMessage id="sidebar.map.trafficLayer" />
                      </Link>
                    </Menu.Item>
                    <Menu.Item key="extensions/map/google/street-view">
                      <Link href="/extensions/map/google/street-view">
                        <FormattedMessage id="sidebar.map.streetView" />
                      </Link>
                    </Menu.Item>
                    <Menu.Item key="extensions/map/google/event">
                      <Link href="/extensions/map/google/event">
                        <FormattedMessage id="sidebar.map.eventListener" />
                      </Link>
                    </Menu.Item>
                    <Menu.Item key="extensions/map/google/drawing">
                      <Link href="/extensions/map/google/drawing">
                        <FormattedMessage id="sidebar.map.mapDrawing" />
                      </Link>
                    </Menu.Item>
                    <Menu.Item key="extensions/map/google/clustering">
                      <Link href="/extensions/map/google/clustering">
                        <FormattedMessage id="sidebar.map.mapClustering" />
                      </Link>
                    </Menu.Item>
                  </SubMenu>

                  <SubMenu
                    key="ammap"
                    className={this.getNavStyleSubMenuClass(navStyle)}
                    title={
                      <span>
                        <i className="icon icon-amchart" />
                        <FormattedMessage id="sidebar.ammap" />
                      </span>
                    }
                  >
                    <Menu.Item key="extensions/map/ammap/animations-lines">
                      <Link href="/extensions/map/ammap/animations-lines">
                        <FormattedMessage id="sidebar.map.animations.lines" />
                      </Link>
                    </Menu.Item>
                    <Menu.Item key="extensions/map/ammap/curved-lines">
                      <Link href="/extensions/map/ammap/curved-lines">
                        <FormattedMessage id="sidebar.map.curved.lines" />
                      </Link>
                    </Menu.Item>
                    <Menu.Item key="extensions/map/ammap/zooming-countries">
                      <Link href="/extensions/map/ammap/zooming-countries">
                        <FormattedMessage id="sidebar.map.zooming.countries" />
                      </Link>
                    </Menu.Item>
                    <Menu.Item key="extensions/map/ammap/patterns">
                      <Link href="/extensions/map/ammap/patterns">
                        <FormattedMessage id="sidebar.map.patterns" />
                      </Link>
                    </Menu.Item>
                    <Menu.Item key="extensions/map/ammap/capitals-map">
                      <Link href="/extensions/map/ammap/capitals-map">
                        <FormattedMessage id="sidebar.map.capitals.map" />
                      </Link>
                    </Menu.Item>
                    <Menu.Item key="extensions/map/ammap/map-markers">
                      <Link href="/extensions/map/ammap/map-markers">
                        <FormattedMessage id="sidebar.map.markers" />
                      </Link>
                    </Menu.Item>
                    <Menu.Item key="extensions/map/ammap/flight-routes">
                      <Link href="/extensions/map/ammap/flight-routes">
                        <FormattedMessage id="sidebar.map.flight.routes" />
                      </Link>
                    </Menu.Item>
                    <Menu.Item key="extensions/map/ammap/choropleth">
                      <Link href="/extensions/map/ammap/choropleth">
                        <FormattedMessage id="sidebar.map.choropleth" />
                      </Link>
                    </Menu.Item>
                    <Menu.Item key="extensions/map/ammap/grouped-countries">
                      <Link href="/extensions/map/ammap/grouped-countries">
                        <FormattedMessage id="sidebar.map.grouped.countries" />
                      </Link>
                    </Menu.Item>
                    <Menu.Item key="extensions/map/ammap/bubbles">
                      <Link href="/extensions/map/ammap/bubbles">
                        <FormattedMessage id="sidebar.map.bubbles" />
                      </Link>
                    </Menu.Item>
                    <Menu.Item key="extensions/map/ammap/drill-down">
                      <Link href="/extensions/map/ammap/drill-down">
                        <FormattedMessage id="sidebar.map.drill.down" />
                      </Link>
                    </Menu.Item>
                    <Menu.Item key="extensions/map/ammap/multiple-areas">
                      <Link href="/extensions/map/ammap/multiple-areas">
                        <FormattedMessage id="sidebar.map.multiple.areas" />
                      </Link>
                    </Menu.Item>
                    <Menu.Item key="extensions/map/ammap/weather">
                      <Link href="/extensions/map/ammap/weather">
                        <FormattedMessage id="sidebar.map.weather" />
                      </Link>
                    </Menu.Item>
                  </SubMenu>
                </SubMenu>

                <SubMenu
                  key="chart"
                  className={this.getNavStyleSubMenuClass(navStyle)}
                  title={
                    <span>
                      {" "}
                      <i className="icon icon-chart" />
                      <FormattedMessage id="sidebar.chart" />
                    </span>
                  }
                >
                  <SubMenu
                    key="rechart"
                    className={this.getNavStyleSubMenuClass(navStyle)}
                    title={
                      <span>
                        <i className="icon icon-chart-area-new" />
                        <FormattedMessage id="sidebar.components.rechart" />
                      </span>
                    }
                  >
                    <Menu.Item key="extensions/chart/recharts/area">
                      <Link href="/extensions/chart/recharts/area">
                        <FormattedMessage id="sidebar.chart.area" />
                      </Link>
                    </Menu.Item>
                    <Menu.Item key="extensions/chart/recharts/bar">
                      <Link href="/extensions/chart/recharts/bar">
                        <FormattedMessage id="sidebar.chart.bar" />
                      </Link>
                    </Menu.Item>
                    <Menu.Item key="extensions/chart/recharts/composed">
                      <Link href="/extensions/chart/recharts/composed">
                        <FormattedMessage id="sidebar.chart.composed" />
                      </Link>
                    </Menu.Item>
                    <Menu.Item key="extensions/chart/recharts/line">
                      <Link href="/extensions/chart/recharts/line">
                        <FormattedMessage id="sidebar.chart.line" />
                      </Link>
                    </Menu.Item>
                    <Menu.Item key="extensions/chart/recharts/pie">
                      <Link href="/extensions/chart/recharts/pie">
                        <FormattedMessage id="sidebar.chart.pie" />
                      </Link>
                    </Menu.Item>
                    <Menu.Item key="extensions/chart/recharts/radar">
                      <Link href="/extensions/chart/recharts/radar">
                        <FormattedMessage id="sidebar.chart.radar" />
                      </Link>
                    </Menu.Item>
                    <Menu.Item key="extensions/chart/recharts/radial">
                      <Link href="/extensions/chart/recharts/radial">
                        <FormattedMessage id="sidebar.chart.radial" />
                      </Link>
                    </Menu.Item>
                    <Menu.Item key="extensions/chart/recharts/scatter">
                      <Link href="/extensions/chart/recharts/scatter">
                        <FormattedMessage id="sidebar.chart.scatter" />
                      </Link>
                    </Menu.Item>
                    <Menu.Item key="extensions/chart/recharts/treemap">
                      <Link href="/extensions/chart/recharts/treemap">
                        <FormattedMessage id="sidebar.chart.tree" />
                      </Link>
                    </Menu.Item>
                  </SubMenu>

                  <SubMenu
                    key="amchart"
                    className={this.getNavStyleSubMenuClass(navStyle)}
                    title={
                      <span>
                        <i className="icon icon-amchart" />
                        <FormattedMessage id="sidebar.components.amchart" />
                      </span>
                    }
                  >
                    <Menu.Item key="extensions/chart/amchart/area">
                      <Link href="/extensions/chart/amchart/area">
                        <FormattedMessage id="sidebar.chart.area" />
                      </Link>
                    </Menu.Item>
                    <Menu.Item key="extensions/chart/amchart/bar">
                      <Link href="/extensions/chart/amchart/bar">
                        <FormattedMessage id="sidebar.chart.bar" />
                      </Link>
                    </Menu.Item>
                    <Menu.Item key="extensions/chart/amchart/line">
                      <Link href="/extensions/chart/amchart/line">
                        <FormattedMessage id="sidebar.chart.line" />
                      </Link>
                    </Menu.Item>
                    <Menu.Item key="extensions/chart/amchart/pie">
                      <Link href="/extensions/chart/amchart/pie">
                        <FormattedMessage id="sidebar.chart.pie" />
                      </Link>
                    </Menu.Item>
                    <Menu.Item key="extensions/chart/amchart/composed">
                      <Link href="/extensions/chart/amchart/composed">
                        <FormattedMessage id="sidebar.chart.composed" />
                      </Link>
                    </Menu.Item>
                  </SubMenu>
                </SubMenu>

                <SubMenu
                  key="calendar"
                  className={this.getNavStyleSubMenuClass(navStyle)}
                  title={
                    <span>
                      <i className="icon icon-calendar" />
                      <FormattedMessage id="sidebar.calendar" />
                    </span>
                  }
                >
                  <Menu.Item key="extensions/calendar/basic">
                    <Link href="/extensions/calendar/basic">
                      <FormattedMessage id="sidebar.calendar.basic" />
                    </Link>
                  </Menu.Item>
                  <Menu.Item key="extensions/calendar/cultures">
                    <Link href="/extensions/calendar/cultures">
                      <FormattedMessage id="sidebar.calendar.cultures" />
                    </Link>
                  </Menu.Item>
                  <Menu.Item key="extensions/calendar/popup">
                    <Link href="/extensions/calendar/popup">
                      <FormattedMessage id="sidebar.calendar.popup" />
                    </Link>
                  </Menu.Item>
                  <Menu.Item key="extensions/calendar/rendering">
                    <Link href="/extensions/calendar/rendering">
                      <FormattedMessage id="sidebar.calendar.rendering" />
                    </Link>
                  </Menu.Item>
                  <Menu.Item key="extensions/calendar/selectable">
                    <Link href="/extensions/calendar/selectable">
                      <FormattedMessage id="sidebar.calendar.selectable" />
                    </Link>
                  </Menu.Item>
                  <Menu.Item key="extensions/calendar/timeslots">
                    <Link href="/extensions/calendar/timeslots">
                      <FormattedMessage id="sidebar.calendar.timeslots" />
                    </Link>
                  </Menu.Item>
                </SubMenu>
              </MenuItemGroup>

              <MenuItemGroup
                key="custom-views"
                className="gx-menu-group"
                title={<FormattedMessage id="sidebar.customViews" />}
              >
                <SubMenu
                  key="user-auth"
                  className={this.getNavStyleSubMenuClass(navStyle)}
                  title={
                    <span>
                      <i className="icon icon-auth-screen" />
                      <FormattedMessage id="app.userAuth" />
                    </span>
                  }
                >
                  <Menu.Item key="custom-views/user-auth/sign-in">
                    <Link href="/custom-views/user-auth/sign-in">
                      <FormattedMessage id="app.userAuth.signIn" />
                    </Link>
                  </Menu.Item>
                  <Menu.Item key="custom-views/user-auth/forgot-password">
                    <Link href="/custom-views/user-auth/forgot-password">
                      <FormattedMessage id="app.userAuth.forgotPassword" />
                    </Link>
                  </Menu.Item>
                  <Menu.Item key="custom-views/user-auth/sign-up">
                    <Link href="/custom-views/user-auth/sign-up">
                      <FormattedMessage id="app.userAuth.signUp" />
                    </Link>
                  </Menu.Item>
                  <Menu.Item key="custom-views/user-auth/lock-screen">
                    <Link href="/custom-views/user-auth/lock-screen">
                      <FormattedMessage id="app.userAuth.lockScreen" />
                    </Link>
                  </Menu.Item>
                  <Menu.Item key="custom-views/user-auth/reset-password">
                    <Link href="/custom-views/user-auth/reset-password">
                      <FormattedMessage id="app.userAuth.resetPassword" />
                    </Link>
                  </Menu.Item>
                </SubMenu>

                <SubMenu
                  key="list-type"
                  className={this.getNavStyleSubMenuClass(navStyle)}
                  title={
                    <span>
                      <i className="icon icon-all-contacts" />
                      <FormattedMessage id="sidebar.listType" />
                    </span>
                  }
                >
                  <Menu.Item key="custom-views/list-type/simple-list">
                    <Link href="/custom-views/list-type/simple-list">
                      <FormattedMessage id="sidebar.listType.plainListView" />
                    </Link>
                  </Menu.Item>
                  <Menu.Item key="custom-views/list-type/strip-list">
                    <Link href="/custom-views/list-type/strip-list">
                      <FormattedMessage id="sidebar.listType.withDivider" />
                    </Link>
                  </Menu.Item>
                  <Menu.Item key="custom-views/list-type/card-list">
                    <Link href="/custom-views/list-type/card-list">
                      <FormattedMessage id="sidebar.listType.cardListView" />
                    </Link>
                  </Menu.Item>
                </SubMenu>

                <SubMenu
                  key="eCommerce"
                  className={this.getNavStyleSubMenuClass(navStyle)}
                  title={
                    <span>
                      <i className="icon icon-shopping-cart" />
                      <FormattedMessage id="sidebar.eCommerce" />
                    </span>
                  }
                >
                  <Menu.Item key="custom-views/eCommerce/product-grid">
                    <Link href="/custom-views/eCommerce/product-grid">
                      <FormattedMessage id="sidebar.eCommerce.productGrid" />
                    </Link>
                  </Menu.Item>
                  <Menu.Item key="custom-views/eCommerce/product-list">
                    <Link href="/custom-views/eCommerce/product-list">
                      <FormattedMessage id="sidebar.eCommerce.productList" />
                    </Link>
                  </Menu.Item>
                </SubMenu>

                <SubMenu
                  key="errorPages"
                  className={this.getNavStyleSubMenuClass(navStyle)}
                  title={
                    <span>
                      <i className="icon icon-error" />
                      <FormattedMessage id="sidebar.extraPages" />
                    </span>
                  }
                >
                  <Menu.Item key="custom-views/error-pages/error-404">
                    <Link href="/custom-views/error-pages/error-404">
                      <FormattedMessage id="sidebar.extraPages.404" />
                    </Link>
                  </Menu.Item>
                  <Menu.Item key="custom-views/error-pages/error-500">
                    <Link href="/custom-views/error-pages/error-500">
                      <FormattedMessage id="sidebar.extraPages.500" />
                    </Link>
                  </Menu.Item>
                </SubMenu>

                <SubMenu
                  key="extra-elements"
                  className={this.getNavStyleSubMenuClass(navStyle)}
                  title={
                    <span>
                      <i className="icon icon-ellipse-h" />
                      <FormattedMessage id="sidebar.listType.extras" />
                    </span>
                  }
                >
                  <Menu.Item key="custom-views/extras/pricing-table">
                    <Link href="/custom-views/extras/pricing-table">
                      <FormattedMessage id="sidebar.extraElements.pricingTable" />
                    </Link>
                  </Menu.Item>

                  <Menu.Item key="custom-views/extras/callouts">
                    <Link href="/custom-views/extras/callouts">
                      <FormattedMessage id="sidebar.extraElements.callouts" />
                    </Link>
                  </Menu.Item>
                  <Menu.Item key="custom-views/extras/testimonials">
                    <Link href="/custom-views/extras/testimonials">
                      <FormattedMessage id="sidebar.extraElements.testimonials" />
                    </Link>
                  </Menu.Item>
                </SubMenu>
              </MenuItemGroup>

              <MenuItemGroup
                key="documents"
                className="gx-menu-group"
                title={<FormattedMessage id="sidebar.documents" />}
              >
                <Menu.Item key="documents/changelog">
                  <Link href="/documents/changelog">
                    <i className="icon icon-timeline-new" />
                    <FormattedMessage id="sidebar.documents.changelog" />
                  </Link>
                </Menu.Item>

                <Menu.Item key="documents/installation">
                  <Link href="/documents/installation">
                    <i className="icon icon-steps" />
                    <FormattedMessage id="sidebar.documents.installation" />
                  </Link>
                </Menu.Item>
              </MenuItemGroup> */}
            </Menu>
          </CustomScrollbars>
        </div>
      </>
    );
  }
}

SidebarContent.propTypes = {};
const mapStateToProps = ({settings}) => {
  const {navStyle, themeType, locale, pathname} = settings;
  return {navStyle, themeType, locale, pathname}
};
export default connect(mapStateToProps)(SidebarContent);
