import React from "react";
import css from "./loader.module.css";

const Loader = () => (
  <div className={css.loaderOuter}>
    <div className={css.loader}>
      <svg viewBox="22 22 44 44">
        <circle
          className={css.circle}
          cx="44"
          cy="44"
          r="20.2"
          fill="none"
          strokeWidth="3.6"
        ></circle>
      </svg>
    </div>
  </div>
);

export default Loader;
