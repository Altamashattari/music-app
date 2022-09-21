import React from "react";
import GradientLayout from "../components/gradientLayout";

const Home = () => {
  return (
    <GradientLayout
      color="green"
      subtitle="profile"
      title="Altamash Ali"
      description="15 public playlists"
      image="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg"
      roundImage
    >
      <div>Home Page</div>
    </GradientLayout>
  );
};

export default Home;
