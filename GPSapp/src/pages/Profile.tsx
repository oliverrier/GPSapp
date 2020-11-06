
import {
    IonAlert,
    IonCol,
    IonContent,
    IonGrid,
    IonPage,
    IonRow,
  } from '@ionic/react';
  import React, { useContext, useState } from 'react';
  
  import AppContext from '../data/app-context';
  
  const Profile: React.FC = () => {
    const [showAlert, setShowAlert] = useState(false);

    const appCtx = useContext(AppContext)
  
    const updateUsername = (newUsername: string) => {
      let updatedUser = { ...appCtx.user }
      updatedUser.name = newUsername;
      appCtx.updateUser(updatedUser);
    }
  
    return (
      <IonPage id="Profile">
        <IonContent>
          <IonGrid className="ion-no-padding">
            <IonRow id="headerRow" className="ion-justify-content-around ion-align-items-center">
              <IonCol size="12" onClick={() => setShowAlert(true)} className="ion-text-center ion-padding-bottom">{appCtx.user.name}</IonCol>
            </IonRow>
            <IonRow>
            </IonRow>
          </IonGrid>
        </IonContent>
        <IonAlert
          isOpen={showAlert}
          onDidDismiss={() => setShowAlert(false)}
          header={'Username'}
          inputs={[
            {
              name: 'usernameInput',
              type: 'text',
              id: 'profile-username',
              value: appCtx.user.name,
              placeholder: 'Your username'
            }
          ]}
          buttons={[
            {
              text: 'Cancel',
              role: 'cancel',
              handler: () => {
                console.log('Confirm Cancel');
              }
            },
            {
              text: 'Ok',
              handler: (alertData) => updateUsername(alertData.usernameInput)
            }
          ]}
        />
      </IonPage>
    );
};

export default Profile
