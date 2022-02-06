"use strict";
// Здесь необходимо продемонстрировать создание и использование GitHubStore
exports.__esModule = true;
var GitHubStore_1 = require("../store/GitHubStore");
var gitHubStore = new GitHubStore_1["default"]();
var EXAMPLE_ORGANIZATION = "ktsstudio";
gitHubStore
    .getOrganizationReposList({
    organizationName: EXAMPLE_ORGANIZATION
})
    .then(function (result) {
    console.log("111");
    if (result.success) {
        console.log(result.data.map(function (repo) {
            return repo.name;
        }));
    }
    // console.log(result); // в консоли появится список репозиториев в ktsstudio
});
// В ДЗ 1 Не требуется визуально в разметке отображать результат запроса к сети. Достаточно вывести в console.log
