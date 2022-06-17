import {
  IonCol,
  IonContent,
  IonHeader,
  IonLoading,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { Categories } from "./Categories/Categories";
import "./Home.css";
import "../../theme/global.css";
import { Header } from "../../components/Header/Header";
import { useEffect, useState } from "react";
import { Category } from "../../interfaces/category";
import Bugs from "../../components/Error/Error";
import { Error } from "../../interfaces/error";
import axios from "axios";
import Footer from "../../components/Footer/Footer";

const url = "https://lirrumscode.ml/wp-json/wp/v2/categories";
const Home: React.FC = () => {
  const [loading, setShowLoading] = useState(true);
  const [bug, setbug] = useState<Error | null>(null);
  const [category, setCategory] = useState<Array<Category>>();
  useEffect(() => {
    (async () => {
      await axios
        .get(`${url}`)
        .then((request) => {
          if (request.status === 200) {
            setCategory(request.data);
            setbug(null);
          } else {
            setbug({
              message: request.statusText,
              name: request.request,
              cause: request.status as any,
            });
          }
        })
        .catch((res: Error) => {
          setbug(res);
          setCategory(undefined);
        });
      setShowLoading(false);
    })();
  }, [url]);

  return (
    <IonPage>
      <Header />
      <IonLoading
        cssClass="my-custom-class"
        isOpen={loading}
        onDidDismiss={() => setShowLoading(false)}
        message={"Please wait..."}
        spinner="circular"
        duration={1000}
      />
      <IonContent color="light">
        <div className="ion-padding">
          <IonRow>
            <IonCol size="12">
              <section className="section__title">
                <h1 className="section__title title">
                  Linux and coding website
                </h1>
                <p className="section__title text">
                  Select your favorite category and start reading 📚
                </p>
              </section>
            </IonCol>
            <IonCol size="12">
              {bug ? <Bugs message={bug.message!} name={bug.name!} /> : ""}
            </IonCol>
            <IonCol size="12">
              {category?.map((response) => {
                return (
                  <Categories
                    key={response?.id}
                    name={response?.name}
                    count={response?.count}
                    description={response?.description}
                    link={response?.link}
                    id={response?.id}
                  />
                );
              })}
            </IonCol>
          </IonRow>
        </div>
      </IonContent>
      <Footer />
    </IonPage>
  );
};

export default Home;
