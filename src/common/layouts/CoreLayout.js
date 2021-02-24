import React, { useState } from "react";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import Player from "../components/Player";

function CoreLayout({ children, history }) {
  const [css, setCss] = useState(false);
  return (
    <div id="main" className={css ? "main--dark" : "main"}>
      <SideBar css={css} />
      <div className="main__content">
        <Header history={history} setCss={setCss} css={css} />
        <div className="main__content__child">{children}</div>
      </div>
      <Player css={css} />
    </div>
  );
}

export default CoreLayout;
