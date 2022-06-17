import { IonCol, IonContent, IonPage, IonRow } from "@ionic/react";
import { useState } from "react";
import { useHistory } from "react-router";
import "../Splash/Splash.css";
import "../../theme/global.css";

const Splash: React.FC = () => {
  const history = useHistory();
  setTimeout(() => {
    history.push(`home`);
  }, 9000);
  return (
    <>
      <IonPage>
        <IonContent color="dark">
          <div className="ion-padding">
            <IonRow>
              <IonCol size="12">
                <section className="section__news">
                  <img
                    src="https://leonidasesteban.com/icons/icon-105x78.png"
                    loading="lazy"
                    alt="img"
                    className="section__news img__news"
                  />
                </section>
              </IonCol>
            </IonRow>
          </div>
        </IonContent>
      </IonPage>
    </>
  );
};
export { Splash };
