import {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
} from '@ionic/react';
import React, { useContext } from 'react';
import './Profile.scss';
import DetailsProfile from '../components/DetailsProfile'
import AppContext from '../data/app-context';

const Profile: React.FC = () => {
    const appCtx = useContext(AppContext)

    const updateUsername = (newUsername: string) => {
        let updatedUser = { ...appCtx.user }
        updatedUser.name = newUsername;
        appCtx.updateUser(updatedUser);
    }

    return (
        <IonPage id="Profile">
            <IonHeader>
                <IonToolbar color='primary'>
                    <IonTitle className="ion-text-center ion-text-md-left">
                        Profile
                </IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <DetailsProfile pseudo={appCtx.user.name} lastLatitude={appCtx.position.latitude} lastLongitude={appCtx.position.longitude} updateUsername={updateUsername}></DetailsProfile>
            </IonContent >
        </IonPage >
    );
};

export default Profile;