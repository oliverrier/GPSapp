import { IonButton, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonPage } from "@ionic/react"
import { save } from 'ionicons/icons'
import { Geolocation, Geoposition } from "@ionic-native/geolocation"
import React, { useState} from "react"

const LivePosition: React.FC = () => {

    const [position, setPosition] = useState<Geoposition>();

    const getLocation = async() => {
        try {
            let position = await Geolocation.getCurrentPosition();
            setPosition(position);
            
        } catch (error) {

        }
    }
    getLocation();

    let latitude = position && position.coords.latitude
    let longitude =  position && position.coords.longitude

    return (
        <IonPage>
                Your current position is:
                Latitude:{latitude}
                Longitude:{longitude}
            
            <IonButton><IonIcon icon={save}/><IonLabel>Save</IonLabel></IonButton>
        </IonPage>
    )
}

export default LivePosition

