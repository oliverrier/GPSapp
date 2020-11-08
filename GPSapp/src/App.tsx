import React, { useContext, useEffect } from 'react';
import {
  IonApp
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import Tabs from './nav/Tabs';
import AppContext from './data/app-context';
import { Redirect } from 'react-router';

const App: React.FC = () => {

  const appCtx = useContext(AppContext);

  useEffect(() => {
    appCtx.initContext();
  }, [])

  return (
    <IonApp>
      <IonReactRouter>
        <Redirect path="/" exact to={"/tabs/live-position/"} />
        <Tabs>
        </Tabs>
      </IonReactRouter>
    </IonApp>
  )
}


export default App;
