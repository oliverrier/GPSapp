import {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
} from '@ionic/react';
import React, { useState } from 'react';
import './Profile.scss';
import DetailsProfile from '../components/DetailsProfile'
const Profile: React.FC = () => {
    const [pseudo, setPseudo] = useState<string>('pseudo');

    const updateUsername = (newUsername: string) => {
        setPseudo(newUsername)
    }

    return (
        <IonPage id="Profile">
            <IonHeader>
                <IonToolbar color='primary'>
                    <IonTitle>
                        Profile
                </IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <DetailsProfile pseudo={pseudo} lastLatitude={12.56} lastLongitude={56.23} updateUsername={updateUsername}></DetailsProfile>
            </IonContent >
        </IonPage >
    );
};

export default Profile;
