import {
    IonBackButton,
    IonButtons,
  IonCol,
  IonContent,
  IonHeader,
  IonPage,
  IonRow,
  IonToolbar,
} from "@ionic/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { User } from "../../interfaces/user";
import "../About/About.css";

const url = "https://lirrumscode.ml/wp-json/wp/v2/users/1";
const About: React.FC = () => {
  const params = useLocation();
  const [user, setUser] = useState<Array<User>>();
  useEffect(() => {
    (async () => {
      await axios.get(`${url}`).then((request) => {
        setUser(request.data);
        console.log(request.data);
      });
    })();
  }, []);
  const inf: User | any = user;
  return (
    <>
      <IonPage>
        <IonHeader translucent={true}>
          <IonToolbar color="dark">
            <IonButtons slot="start">
              <IonBackButton />
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonRow>
            <IonCol size="12">
              <div className="ion-padding">
                <h1 className="post__title">{inf?.name}</h1>
                <p className="post__text">{inf?.description}</p>
              </div>
            </IonCol>
          </IonRow>
        </IonContent>
      </IonPage>
    </>
  );
};

export default About;
