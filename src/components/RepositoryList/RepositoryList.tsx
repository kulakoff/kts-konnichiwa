import React, { FC } from "react";
import classes from "./RepositoryList.module.css"
import RepoItem from "./RepoItem"


const RepositoryList: FC = () => {
  return (
    <div className={classes.container}>
      <div className={classes.searchBar__container}>
      <div className={classes.searchBar}>
        <input type="text"
          className={classes.searchBar__input}
          placeholder="Введите название организации" />
        <button className={classes.searchBar__button}>
          <div className={classes.searchBar__button__img}></div>
        </button>
      </div>
      </div>
   
      <div className={classes.reposList}>
      <RepoItem/>
      <RepoItem/>
      <RepoItem/>
      </div>
    </div>
  )

}
export default RepositoryList

