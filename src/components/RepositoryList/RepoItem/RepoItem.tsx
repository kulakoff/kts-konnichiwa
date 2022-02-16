import React, { FC } from "react";
//TODO: удалить временный импорт css
import classes from "./../RepositoryList.module.css"


export type RepoItemType = {
  id: number;
  name: string;
  owner: {
    login: string;
    avatar_url?: string | null;
  };

};


const RepoItem: FC<RepoItemType> = (props:RepoItemType) => {
  return (
    <div className={classes.item}>
      <div className={classes.itemAvatar}>
        {
        //Если есть аватар - показываем, нет - заглушка
        props.owner.avatar_url ? 
        <div className={classes.itemAvatar__img}></div> :
        <div className={classes.itemAvatar__defaltBackground}>
          <span className={classes.itemAvatar__repoFirsLetter}>K</span>
        </div>
         }

      </div>
      <div className={classes.itemDesrcription}>
        <span className={classes.itemDesrcription__repoName}>{props.name}</span>
        <a className={classes.itemDesrcription__orgName} href="#">{props.owner.login}</a>
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