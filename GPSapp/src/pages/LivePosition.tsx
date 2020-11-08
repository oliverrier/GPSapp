import { IonButton, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonLabel, IonPage, IonRow, IonTitle, IonToolbar } from "@ionic/react"
import { save } from 'ionicons/icons'
import { Geolocation, Geoposition } from "@ionic-native/geolocation"
import React, { useContext, useState} from "react"
import AppContext from "../data/app-context"

const LivePosition: React.FC = () => {
    const appCtx = useContext(AppContext)

    const getLocation = async() => {
        try {
            let position = await Geolocation.getCurrentPosition();
            const currentPosition = { ...appCtx.position }
            currentPosition.latitude = position.coords.latitude;
            currentPosition.longitude = position.coords.longitude;
            appCtx.updatePosition(currentPosition)
            
        } catch (error) {

        }
    }
    getLocation();

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar color='primary'>
                    <IonTitle class="ion-text-center ion-text-md-left">
                        Live position
                </IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonGrid>
                    <IonRow>
                        <IonCol>
                            <IonTitle class="ion-text-center">
                                <b>Your current position is:</b>
                            </IonTitle>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>
                            <p>
                            <b>Latitude:</b> {appCtx.position.latitude}
                            </p>
                        
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>
                            <p>
                            <b>Longitude:</b> {appCtx.position.longitude}
                            </p>
                        
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol size="1" offset="8">
                            <IonButton mode="ios" fill="outline" onClick={() => getLocation()}><IonIcon icon={save}/><IonLabel>Save!</IonLabel></IonButton>
                        </IonCol>
                    </IonRow>
                    
                </IonGrid>

                
            </IonContent>
        </IonPage>
    )
}

export default LivePosition

