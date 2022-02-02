import React, { FC } from "react";
import classes from "./RepositoryList.module.css"


const RepositoryList: FC = () => {
  return (
    <div className={classes.container}>
      <div className={classes.searchBar}>
        <input type="text"
          className={classes.searchBar__input}
          placeholder="Введите название организации" />
        <button className={classes.searchBar__button}>
          <div className={classes.searchBar__button__img}></div>
        </button>
      </div>
      <div className={classes.reposList}>
        <div className={classes.item}>
          <div className={classes.item__avatar}>
            <div className={classes.item__img}></div>
            <div className={classes.item__defaltBackground}>
              <span className={classes.item__repoFirsLetter}>K</span>
            </div>

          </div>
          <div className={classes.item__content}>
            <span className={classes.item__repoName}>kts-school-frontend</span>
            <span className={classes.item__orgName}>ktsstudio</span>
            <div className={classes.item__info}>
              <div className={classes.item__stars}>
                <div className={classes.item__starImg}></div>
                <span className={classes.item__starsCount}>123</span>
              </div>
              <span className={classes.item__updated}>Updated 21 Jul</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

}
export default RepositoryList