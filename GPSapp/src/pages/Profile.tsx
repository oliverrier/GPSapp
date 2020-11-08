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
                    <IonTitle>
                        Profile
                </IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <DetailsProfile pseudo={appCtx.user.name} lastLatitude={12.56} lastLongitude={56.23} updateUsername={updateUsername}></DetailsProfile>
            </IonContent >
        </IonPage >
    );
};

export default Profile;