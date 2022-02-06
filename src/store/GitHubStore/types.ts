/** Интерфейс класса для работы с GitHub API
 * названия getOrganizationReposList
 * (а также типов GetOrganizationReposListParams и RepoItem)
 * поменяйте в соответствии с выполняемым запросом.
 * Или не меняйте, если делаете запрос за списком репоизториев для организации)
 * Выберите любой запрос из публичного API GitHub.
 */

import { ApiResponse } from "../../shared/store/ApiStore/types";

export type GetOrganizationReposListParams = {
  organizationName: string;
};
// export type ApiResp<RepoItem> = {};
export type RepoItem = {
  id: number;
  name: string;
  url: string;
  owner: {
    login: string;
    avater_url: string;
  };
  updated_at: Date;
  stargazers_count: number;
};

export interface IGitHubStore {
  getOrganizationReposList(
    params: GetOrganizationReposListParams
  ): Promise<ApiResponse<RepoItem[], any>>;
}
