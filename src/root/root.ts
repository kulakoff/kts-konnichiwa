// Здесь необходимо продемонстрировать создание и использование GitHubStore

import GitHubStore from "../store/GitHubStore";
import { RepoItem } from "../store/GitHubStore/types";
import { ApiResponse } from "./../shared/store/ApiStore/types";

const gitHubStore = new GitHubStore();

const EXAMPLE_ORGANIZATION = "ktsstudio";

gitHubStore
  .getOrganizationReposList({
    organizationName: EXAMPLE_ORGANIZATION,
  })
  .then((result: ApiResponse<RepoItem[], any>) => {
    console.log("111")
    if (result.success) {
      console.log(
        result.data.map((repo) => {
          return repo.name;
        })
      );
    }
    // console.log(result); // в консоли появится список репозиториев в ktsstudio
  });

// В ДЗ 1 Не требуется визуально в разметке отображать результат запроса к сети. Достаточно вывести в console.log
