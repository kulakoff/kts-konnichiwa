// Здесь необходимо продемонстрировать создание и использование GitHubStore

import GitHubStore from "@store/GitHubStore";
import { BranchesType, RepoItem } from "@store/GitHubStore/types";
import { ApiResponse } from "@shared/store/ApiStore/types";

const gitHubStore = new GitHubStore();

const EXAMPLE_ORGANIZATION = "ktsstudio";

gitHubStore
  .getOrganizationReposList({
    organizationName: EXAMPLE_ORGANIZATION,
  })
  .then((result: ApiResponse<RepoItem[], any>) => {
    if (result.success) {
      console.log(
        result.data.map((repo) => {
          return repo.name;
        })
      );
    }
    // console.log(result); // в консоли появится список репозиториев в ktsstudio
  });

  gitHubStore
  .getBranchesList({
    owner:"adobe",
    repo:"brackets-app"
  })
  .then((result: ApiResponse<BranchesType[], any>) => {
    if (result.success) {
      console.log(
        result.data.map((repo) => {
          return repo.name;
        })
      );
    }
    // console.log(result); // в консоли появится список репозиториев в ktsstudio
  });

export default gitHubStore;
