import React from "react";
import BannerCarousel from "../components/Home/BaneerCarousel";
import Misson from "../components/Home/Misson";

import FounderMessage from "../components/Home/FounderMessage";
import Categoriey from "../components/Home/Categoriey";
import Categories from "../components/Home/Categories";
import FoundationIntro from "../components/Home/FoundationIntro";
import ImageGallery from "../components/Home/ImageGallery";

const HomePages = () => {
  return (
    <>
      <BannerCarousel />
      <Misson />
      <Categoriey />
      <Categories />
      <FounderMessage />
      <FoundationIntro/>
      <ImageGallery/>
    </>
  );
};

export default HomePages;
