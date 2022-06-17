import { IonCol, IonRow } from "@ionic/react";
import "../Error/Error.css";

const Bugs: React.FC<Error> = ({ message, name }) => {
    console.log(message,name)
  return (
    <>
      <IonRow>
        <section className="error__section">
          <IonCol size="12">
            <h3 className="error__title">Request have errors 🤯</h3>
            <IonCol size="12">
              <ul className="error__list">
                <li>
                  <a href="">
                    <p className="error__text">{message}</p>
                  </a>
                </li>
                <li>
                  <a href="">
                    <p className="error__text">{name}</p>
                  </a>
                </li>
              </ul>
            </IonCol>
          </IonCol>
        </section>
      </IonRow>
    </>
  );
};

export default Bugs;
