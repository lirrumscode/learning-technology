import {
  IonAvatar,
  IonButton,
  IonCard,
  IonCardContent,
  IonCardSubtitle,
  IonCardTitle,
  IonCol,
  IonRow,
} from "@ionic/react";
import { useHistory } from "react-router";
import { Category } from "../../../interfaces/category";
import "./Categories.css";

const Categories: React.FC<Category> = ({ id, name, description, link }) => {
  const history = useHistory();
  const handleGoToPost = (id: any) => {
    history.push({
      pathname: `/categories/post/${id}`,
      state: id,
    });
  };
  return (
    <>
      <IonCard color="dark" mode="ios">
        <div className="ion-padding">
          <IonCardTitle>
            <IonRow>
              <IonCol size="12">
                <IonRow>
                  <IonCol size="3">
                    <IonAvatar>
                      <img
                        src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y"
                        className="card__img"
                      />
                    </IonAvatar>
                  </IonCol>
                  <IonCol size="9">
                    <h3 className="card__title">
                      <a
                        href={link}
                        className="card__link"
                        target="_blank"
                        rel="noreferrer"
                      >
                        {name}
                      </a>
                    </h3>
                    <IonCardSubtitle>
                      {description !== ""
                        ? description
                        : "without description 📰"}
                    </IonCardSubtitle>
                  </IonCol>
                </IonRow>
              </IonCol>
            </IonRow>
          </IonCardTitle>
        </div>
        <hr color="light" />
        <IonCardContent>
          <IonButton
            color="light"
            expand="block"
            fill="outline"
            onClick={() => handleGoToPost(id)}
          >
            Start
          </IonButton>
        </IonCardContent>
      </IonCard>
    </>
  );
};

export { Categories };
