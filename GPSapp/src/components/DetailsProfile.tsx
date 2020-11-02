import { IonItem, IonLabel, IonList, IonAlert } from '@ionic/react';

import React, { useState } from 'react';

const Details: React.FC<{ pseudo: String; lastLatitude: Number; lastLongitude: Number; updateUsername: (newUsername: string) => void }> = props => {
    const [showAlert, setShowAlert] = useState(false);

    return (
        <div>
            <IonList className="ion-padding">
                <IonItem>
                    <IonLabel onClick={() => setShowAlert(true)}><b>Username</b> <span className="is-fade ion-float-right">{props.pseudo}</span></IonLabel>
                </IonItem>
                <IonItem>
                    <IonLabel ><b>Last latitude</b> <span className="is-fade ion-float-right">{props.lastLatitude}</span></IonLabel>
                </IonItem>
                <IonItem>
                    <IonLabel ><b>Last longitude:</b> <span className="is-fade ion-float-right">{props.lastLongitude}</span></IonLabel>
                </IonItem>
            </IonList>
            <IonAlert
                isOpen={showAlert}
                onDidDismiss={() => setShowAlert(false)}
                header={'Username'}
                inputs={[
                    {
                        name: 'usernameInput',
                        type: 'text',
                        id: 'profile-username',
                        value: props.pseudo,
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
                        handler: (alertData) => props.updateUsername(alertData.usernameInput)
                    }
                ]}
            />
        </div>
    )
}

export default Details;