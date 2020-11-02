import React from 'react';
import { Redirect, Route} from 'react-router-dom';
import {
    IonIcon,
    IonLabel,
    IonRouterOutlet,
    IonTabBar,
    IonTabButton,
    IonTabs
} from '@ionic/react';

import { navigateCircleOutline, personCircleOutline } from 'ionicons/icons'
import LivePosition from '../pages/LivePosition';
import Profile from '../pages/Profile';
import { ROUTE_LIVE_POSITION, ROUTE_PROFILE, ROUTE_TABS_BASE } from './Routes';

const Tabs: React.FC = () => (
    <IonTabs>
        <IonRouterOutlet>
            <Route path={ROUTE_LIVE_POSITION} component={LivePosition} exact />
            <Route path={ROUTE_PROFILE} component={Profile} exact />
            <Redirect path={ROUTE_TABS_BASE} exact to={ROUTE_LIVE_POSITION} />
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
            <IonTabButton tab="List" href={ROUTE_LIVE_POSITION}>
                <IonIcon icon={navigateCircleOutline} />
                <IonLabel>LivePosition</IonLabel>
            </IonTabButton>
            <IonTabButton tab="Profile" href={ROUTE_PROFILE}>
                <IonIcon icon={personCircleOutline} />
                <IonLabel>Profile</IonLabel>
            </IonTabButton>
        </IonTabBar>
    </IonTabs>
);

export default Tabs;