import React from "react";
import Header from "../../components/Header";
import UserReview from "../../components/UserReview";

import mockReview from "../../mock/reviewMock";

const HomePage = () => {
  return (
    <>
      <Header backArrow={true} />
      <UserReview reviewData={mockReview} />
    </>
  );
};

export default HomePage;
