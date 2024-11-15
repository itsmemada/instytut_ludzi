import { lazy } from "react";
import IntroContent from "../../content/IntroContent.json";
import MiddleBlockContent from "../../content/MiddleBlockContent.json";
import AboutContent from "../../content/AboutContent.json";
import MissionContent from "../../content/MissionContent.json";
import ProductContent from "../../content/ProductContent.json";
import ContactContent from "../../content/ContactContent.json";
import OfferContent from "../../content/OfferContent.json";

const Contact = lazy(() => import("../../components/ContactForm"));
const MiddleBlock = lazy(() => import("../../components/MiddleBlock"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));
const OfferBlock = lazy(() => import("../../components/Offerblock"));

const Home = () => {
  return (
    <Container>
      <ScrollToTop />
      <ContentBlock
        direction="right"
        title={IntroContent.title}
        content={IntroContent.text}
        button={IntroContent.button}
        icon="conference.png"
        id="intro"
      />
       <ContentBlock
        direction="left"
        title={OfferContent.title}
        content={OfferContent.text}
        icon="oferta.jpeg"
        id="offer"
      />
      <MiddleBlock
        title={MiddleBlockContent.title}
        content={MiddleBlockContent.text}
        button={MiddleBlockContent.button}
      />
      <ContentBlock
        direction="right"
        title={AboutContent.title}
        content={AboutContent.text}
        icon="prelegents.jpeg"
        id="about"
      />
      <ContentBlock
        direction="left"
        title={MissionContent.title}
        content={MissionContent.text}
        icon="patron.jpg"
        id="mission"
      />
      <OfferBlock
        direction="right"
        title={ProductContent.title}
        content={(ProductContent.text)}
	button={(ProductContent.button)}
        icon="waving.svg"
        id="product"
      />
    </Container>
  );
};

export default Home;
