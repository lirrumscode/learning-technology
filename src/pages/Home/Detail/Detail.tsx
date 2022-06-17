import { IonCol, IonContent, IonLoading, IonPage, IonRow } from "@ionic/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import Footer from "../../../components/Footer/Footer";
import { Header } from "../../../components/Header/Header";
import { Posts } from "../../../interfaces/posts";
import "../Detail/Detail.css";

const url = "https://lirrumscode.ml/wp-json/wp/v2/posts";
const Detail: React.FC = () => {
  const params = useLocation();
  const [detail, setDetail] = useState<Array<Posts>>();
  const [showLoading, setShowLoading] = useState(true);
  useEffect(() => {
    (async () => {
      await axios.get(`${url}/${params.state}`).then((request) => {
        setDetail(request.data);
        setShowLoading(false);
      });
    })();
  }, [url]);
  const inf: Posts | any = detail;
  return (
    <>
      <IonPage>
        <Header />
        <IonLoading
          cssClass="my-custom-class"
          isOpen={showLoading}
          onDidDismiss={() => setShowLoading(false)}
          message={"Please wait..."}
          spinner="circular"
          duration={3000}
        />
        <IonContent>
          <IonRow>
            <IonCol size="12">
              <div className="ion-padding">
                <h1 className="detail__title">{inf?.yoast_head_json.title}</h1>
                <img
                  src={inf?.yoast_head_json.og_image[0].url}
                  alt="img"
                  className="detail__img"
                />
                <div
                  dangerouslySetInnerHTML={{
                    __html: `${inf?.content.rendered}`,
                  }}
                ></div>
              </div>
            </IonCol>
          </IonRow>
        </IonContent>
        <Footer />
      </IonPage>
    </>
  );
};

export default Detail;
