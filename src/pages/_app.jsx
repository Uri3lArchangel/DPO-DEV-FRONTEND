import React from 'react';
// Original Ant Style import
import 'antd/dist/antd.min.css';
// Custom Style Import
import '../../styles/global/globals.scss';
import '../../styles/global/custom.scss';
import '../../styles/global/layout.scss';
import '../../styles/global/spacing.scss';
import '../../styles/global/font.scss';
import '../../styles/global/colors.scss';
// Root layout on the app
import MLayOutRoot from '../layout/layout-root';
import {NotificationContextProvider} from "../store/notification-context";
import {UserContextProvider} from "../store/user-context";


export default function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);

  return (
            <MLayOutRoot>
                <UserContextProvider key={'userContextProvider'}>
                    <NotificationContextProvider key={'notificationContextProvider'}>
                      {
                        getLayout(<Component {...pageProps} />)
                      }
                    </NotificationContextProvider>
                </UserContextProvider>
            </MLayOutRoot>
  )
}

