import React, { FC } from "react";
import classes from "./../RepositoryList.module.css"

const RepoItem: FC = (props) => {
  return (
    <div className={classes.item}>
      <div className={classes.itemAvatar}>
        <div className={classes.itemAvatar__img}></div>
        <div className={classes.itemAvatar__defaltBackground}>
          <span className={classes.itemAvatar__repoFirsLetter}>K</span>
        </div>
      </div>
      <div className={classes.itemDesrcription}>
        <span className={classes.itemDesrcription__repoName}>kts-school-frontend</span>
        <a className={classes.itemDesrcription__orgName}>ktsstudio</a>
        <div className={classes.itemDesrcription__info}>
          <div className={classes.itemDesrcription__stars}>
            <div className={classes.itemDesrcription__starImg}></div>
            <span className={classes.itemDesrcription__starsCount}>123</span>
          </div>
          <span className={classes.itemDesrcription__updated}>Updated 21 Jul</span>
        </div>
      </div>
    </div>
  )
}
export default RepoItem;