import React from 'react';
import '@/styles/vendors/gaxon/styles.css';
import '@/styles/vendors/react-notification/react-notifications.css';
import '@/styles/wieldy.less';

const CommonLayout = (props) => {
  return (
    <div>
      <style dangerouslySetInnerHTML={
          {__html: `
            @charset "UTF-8";
            @font-face {
              font-family: "gaxon";
              src: url("/static/fonts/gaxon.eot");
              src: url("/static/fonts/gaxon.eot?#iefix") format("embedded-opentype"),
              url("/static/fonts/gaxon.woff") format("woff"),
              url("/static/fonts/gaxon.ttf") format("truetype"),
              url("/static/fonts/gaxon.svg#gaxon") format("svg");
              font-weight: normal;
              font-style: normal;
            }
            @font-face {
              font-family: Notification;
              src: url(/static/fonts/notification.eot?s3g3t9);
              src: url(/static/fonts/notification.eot?#iefixs3g3t9) format("embedded-opentype"), url(/static/fonts/notification.woff?s3g3t9) format("woff"), url(/static/fonts/notification.ttf?s3g3t9) format("truetype"), url(/static/fonts/notification.svg?s3g3t9#notification) format("svg");
              font-weight: 400;
              font-style: normal
            }
            @font-face {
              font-family: 'NoirPro';
              src: url('/static/fonts/NoirPro-Light.eot?#iefix') format('embedded-opentype'),
              url('/static/fonts/NoirPro-Light.woff') format('woff'),
              url('/static/fonts/NoirPro-Light.woff2') format('woff2');
              font-weight: 300;
              font-style: normal;
            }
            
            @font-face {
              font-family: 'NoirPro';
              src: url('/static/fonts/NoirPro-Regular.eot?#iefix') format('embedded-opentype'),
              url('/static/fonts/NoirPro-Regular.woff') format('woff'),
              url('/static/fonts/NoirPro-Regular.woff2') format('woff2');
              font-weight: 400;
              font-style: normal;
            }
            
            @font-face {
              font-family: 'NoirPro';
              src: url('/static/fonts/NoirPro-Medium.eot?#iefix') format('embedded-opentype'),
              url('/static/fonts/NoirPro-Medium.woff') format('woff'),
              url('/static/fonts/NoirPro-Medium.woff2') format('woff2');
              font-weight: 500;
              font-style: normal;
            }
            
            @font-face {
              font-family: 'NoirPro';
              src: url('/static/fonts/NoirPro-SemiBold.eot?#iefix') format('embedded-opentype'),
              url('/static/fonts/NoirPro-SemiBold.woff') format('woff'),
              url('/static/fonts/NoirPro-SemiBold.woff2') format('woff2');
              font-weight: 600;
              font-style: normal;
            }
            
            @font-face {
              font-family: 'NoirPro';
              src: url('/static/fonts/NoirPro-Bold.eot?#iefix') format('embedded-opentype'),
              url('/static/fonts/NoirPro-Bold.woff') format('woff'),
              url('/static/fonts/NoirPro-Bold.woff2') format('woff2');
              font-weight: 700;
              font-style: normal;
            }
            
            @font-face {
              font-family: 'NoirPro';
              src: url('/static/fonts/NoirPro-Heavy.eot?#iefix') format('embedded-opentype'),
              url('/static/fonts/NoirPro-Heavy.woff') format('woff'),
              url('/static/fonts/NoirPro-Heavy.woff2') format('woff2');
              font-weight: 900;
              font-style: normal;
            }
          `}
        }
      />
      <div>
        {props.children}
      </div>
    </div>
  )
}

export default CommonLayout;
