import React from 'react';
import {IonContent, IonHeader, IonItem, IonLabel, IonList, IonPage, IonTitle, IonToolbar} from '@ionic/react';
import './AvailabilitiesTab.css';
import {useService} from "../services";
import ServicesSummary from "../services/ServicesSummary";
import usePromiseState from "../hooks/usePromiseState";

const AvailabilitiesTab: React.FC = () => {

  const service = useService<ServicesSummary>('servicesSummary');
  const getData = React.useCallback(() => service.getAvailableServices(), [service]);

  const { loading, result } = usePromiseState(getData);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Availabilities</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Availabilities</IonTitle>
          </IonToolbar>
        </IonHeader>
        <div>
          <IonList>
            { loading && <IonLabel>Loading...</IonLabel>}
            { result && result.map(service => (
              <IonItem key={service.id}>
                <IonLabel>{service.name}</IonLabel>
              </IonItem>
            )) }
          </IonList>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default AvailabilitiesTab;
