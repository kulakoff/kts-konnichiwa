import ApiStore from "@shared/store/ApiStore";
import { ApiResponse, HTTPMethod } from "@shared/store/ApiStore/types";
import {
  IGitHubStore,
  GetOrganizationReposListParams,
  GetRepoBranchesParams,
  RepoItem,
  BranchesType
} from "./types";

const BASE_URL = "https://api.github.com";

export default class GitHubStore implements IGitHubStore {
  private readonly apiStore = new ApiStore(BASE_URL);
  async getOrganizationReposList(
    params: GetOrganizationReposListParams
  ): Promise<ApiResponse<RepoItem[], any>> {
    return await this.apiStore.request({
      method: HTTPMethod.GET,
      data: {},
      headers: {},
      endpoint: `/orgs/${params.organizationName}/repos`,
    });
  }
  
  async getBranchesList(
    params: GetRepoBranchesParams
  ): Promise<ApiResponse<BranchesType[], any>> {
    return await this.apiStore.request({
      method: HTTPMethod.GET,
      data: {},
      headers: {},
      endpoint: `/repos/${params.owner}/${params.repo}/branches`,
    });
  }
}
