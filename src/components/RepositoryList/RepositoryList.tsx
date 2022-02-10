import { FC } from "react";
import classes from "./RepositoryList.module.css"
import RepoItem from "./RepoItem"

const testObj4Render = [
  {
    id: 843757,
    name: "kts-school-frontend-1",
    url: "http://simple.host.com",
    owner: {
      login: "ktsstudio-1",
      avatar_url: null,
    },
    updated_at: "2021-02-02T18:15:15Z",
    stargazers_count: 2,
  },
  {
    id: 324325,
    name: "kts-school-frontend-2",
    url: "http://simple.host.com",
    owner: {
      login: "ktsstudio-2",
      avatar_url: "https://simple-url-avatar.com",
    },
    updated_at: "2021-02-02T18:15:15Z",
    stargazers_count: 2,
  },
  {
    id: 7457856,
    name: "kts-school-frontend-3",
    url: "http://simple.host.com",
    owner: {
      login: "ktsstudio-3",
      avatar_url: null,
    },
    updated_at: "2021-02-02T18:15:15Z",
    stargazers_count: 2,
  },
  {
    id: 9843757,
    name: "kts-school-frontend-4",
    url: "http://simple.host.com",
    owner: {
      login: "ktsstudio-4",
      avatar_url: null,
    },
    updated_at: "2021-02-02T18:15:15Z",
    stargazers_count: 2,
  },
  {
    id: 9843755,
    name: "kts-school-frontend-5",
    url: "http://simple.host.com",
    owner: {
      login: "ktsstudio-5",
      avatar_url: null,
    },
    updated_at: "2021-02-02T18:15:15Z",
    stargazers_count: 2,
  },
  {
    id: 9843756,
    name: "kts-school-frontend-6",
    url: "http://simple.host.com",
    owner: {
      login: "ktsstudio-6",
      avatar_url: null,
    },
    updated_at: "2021-02-02T18:15:15Z",
    stargazers_count: 42,
  },
  {
    id: 9843777,
    name: "kts-school-frontend-7",
    url: "http://simple.host.com",
    owner: {
      login: "ktsstudio-7",
      avatar_url: null,
    },
    updated_at: "2021-02-02T18:15:15Z",
    stargazers_count: 2,
  },
  {
    id: 9843758,
    name: "kts-school-frontend-8",
    url: "http://simple.host.com",
    owner: {
      login: "ktsstudio-8",
      avatar_url: null,
    },
    updated_at: "2021-02-02T18:15:15Z",
    stargazers_count: 22,
  },
]


const RepositoryList: FC = () => {
  return (
    <div className={classes.container}>
      <div className={classes.searchBar__container}>
        <div className={classes.searchBar}>
          <input type="text"
            className={classes.searchBar__input}
            placeholder="Введите название организации" 
            // disabled
            />
          <button className={classes.searchBar__button}
          //  disabled
           >
            <div className={classes.searchBar__img}></div>
          </button>
        </div>
      </div>

      <div className={classes.reposList}>
        {testObj4Render.map((item, index) => (
          <RepoItem key={item.id} id={item.id} name={item.name} owner={{login:item.owner.login, avatar_url:item.owner.avatar_url}}/>
        ))}
      </div>
    </div>
  )

}
export default RepositoryList

