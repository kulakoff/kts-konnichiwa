import React, { FC } from "react";
import classes from "./../RepositoryList.module.css"

const RepoItem: FC = () => {
  return (
    <div className={classes.item}>
      <div className={classes.item__avatar}>
        <div className={classes.item__img}></div>
        <div className={classes.item__defaltBackground}>
          <span className={classes.item__repoFirsLetter}>K</span>
        </div>

      </div>
      <div className={classes.item__content}>
        <span className={classes.item__repoName}>kts-school-frontend</span>
        <a className={classes.item__orgName}>ktsstudio</a>
        <div className={classes.item__info}>
          <div className={classes.item__stars}>
            <div className={classes.item__starImg}></div>
            <span className={classes.item__starsCount}>123</span>
          </div>
          <span className={classes.item__updated}>Updated 21 Jul</span>
        </div>
      </div>
    </div>
  )
}
export default RepoItem;