import {
  IonAvatar,
  IonButton,
  IonCard,
  IonCardContent,
  IonCardSubtitle,
  IonCardTitle,
  IonCol,
  IonContent,
  IonLoading,
  IonPage,
  IonRow,
} from "@ionic/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router";
import Bugs from "../../../components/Error/Error";
import Footer from "../../../components/Footer/Footer";
import { Header } from "../../../components/Header/Header";
import { Error } from "../../../interfaces/error";
import { Posts } from "../../../interfaces/posts";
import "../Post/Post.css";

const url = "https://lirrumscode.ml/wp-json/wp/v2/posts?categories";

const Post: React.FC = () => {
  const [post, setPost] = useState<Array<Posts>>();
  const [loading, setShowLoading] = useState(true);
  const [bug, setbug] = useState<Error | null>(null);
  const param = useLocation();
  useEffect(() => {
    (async () => {
      await axios
        .get(`${url}=${param.state}`)
        .then((request) => {
          if (request.status === 200) {
            setPost(request.data);
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
          setPost(undefined);
        });
      setShowLoading(false);
    })();
  }, [url]);

  const history = useHistory();
  const handleGoToDetail = (id: any) => {
    history.push({
      pathname: `/detail/post/${id}`,
      state: id,
    });
  };
  return (
    <>
      <IonPage>
        <Header />
        <IonLoading
          cssClass="my-custom-class"
          isOpen={loading}
          onDidDismiss={() => setShowLoading(false)}
          message={"Please wait..."}
          spinner="circular"
        />
        <IonContent color="light">
          <div className="ion-padding">
            <IonRow>
              {bug ? <Bugs name={bug.name!} message={bug.message!}></Bugs> : ""}
              {post?.map((request) => {
                return (
                  <IonCol size="12" key={request?.id}>
                    <IonCard color="dark" mode="ios">
                      <div className="ion-padding">
                        <IonCardTitle>
                          <IonRow>
                            <IonCol size="12">
                              <IonRow>
                                <IonCol size="3">
                                  <IonAvatar>
                                    <img
                                      src={
                                        request?.yoast_head_json.og_image[0].url
                                      }
                                      className="card__img"
                                    />
                                  </IonAvatar>
                                </IonCol>
                                <IonCol size="9">
                                  <h3 className="card__title">
                                    <a
                                      href={request?.link}
                                      className="card__link"
                                      target="_blank"
                                      rel="noreferrer"
                                    >
                                      {request?.yoast_head_json.title}
                                    </a>
                                  </h3>
                                  <IonCardSubtitle>
                                    {request?.excerpt.rendered !== "" ? (
                                      <div
                                        dangerouslySetInnerHTML={{
                                          __html: `${request?.excerpt.rendered}`,
                                        }}
                                      ></div>
                                    ) : (
                                      "without description 📰"
                                    )}
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
                          onClick={() => handleGoToDetail(request?.id)}
                        >
                          Detail
                        </IonButton>
                      </IonCardContent>
                    </IonCard>
                  </IonCol>
                );
              })}
            </IonRow>
          </div>
        </IonContent>
        <Footer />
      </IonPage>
    </>
  );
};
export default Post;
