import React, { Fragment, useEffect, useState } from "react";

import { Hero, HomeContent } from "../components";
import axios from "axios";

const Home = () => {
  return (
    <Fragment>
      <Hero />

      <hr />
      <HomeContent />
    </Fragment>
  );
};

export default Home;
