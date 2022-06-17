import { IonHeader, IonToolbar } from "@ionic/react";
import { Link } from "react-router-dom";
import "../Header/Header.css";
const Header: React.FC = () => {
  return (
    <>
      <IonHeader translucent={true}>
        <IonToolbar color="dark" mode="ios">
          <p className="header__text">
            <img src="https://leonidasesteban.com/icons/icon-105x78.png" alt="" loading="lazy"  className="header__img"/> Blog from <b><Link to="/about">Lirrumscode</Link></b> 📰
          </p>
        </IonToolbar>
      </IonHeader>
    </>
  );
};

export { Header };
