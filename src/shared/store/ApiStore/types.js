"use strict";
exports.__esModule = true;
exports.StatusHTTP = exports.HTTPMethod = void 0;
// Перечисление методов HTTP-запроса
var HTTPMethod;
(function (HTTPMethod) {
    // TODO: заполнить
    HTTPMethod["GET"] = "GET";
    HTTPMethod["POST"] = "POST";
})(HTTPMethod = exports.HTTPMethod || (exports.HTTPMethod = {}));
// Перечисление статусов ответа
var StatusHTTP;
(function (StatusHTTP) {
    // TODO: заполнить
    StatusHTTP["ok"] = "200";
    StatusHTTP["created"] = "201";
    StatusHTTP["notFound"] = "404";
    StatusHTTP["internalServerError"] = "500";
    StatusHTTP["UNEXPECTED_ERROR"] = "UNEXPECTED_ERROR";
})(StatusHTTP = exports.StatusHTTP || (exports.StatusHTTP = {}));
