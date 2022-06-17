import { IonFooter, IonToolbar } from "@ionic/react";
import "../Footer/Footer.css";

const Footer: React.FC = () => {
  return (
    <>
      <IonFooter translucent={true}>
        <IonToolbar color="dark">
          <p className="footer__title">
            Project by
            <span>
              <a href="https://leonidasesteban.com/" target={"_blank"}>
                {" "}
                LeonidasEsteban.com
              </a>
            </span>
          </p>
        </IonToolbar>
      </IonFooter>
    </>
  );
};

export default Footer;
