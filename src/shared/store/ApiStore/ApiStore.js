"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var types_1 = require("./types");
var qs = require("qs");
// import qs from "qs";
var ApiStore = /** @class */ (function () {
    //   readonly baseUrl: string;
    function ApiStore(baseUrl) {
        this.baseUrl = baseUrl;
        // TODO: Примите из параметров конструктора baseUrl
        // и присвойте его в this.baseUrl
        this.baseUrl = baseUrl;
    }
    ApiStore.prototype.getRequestData = function (params) {
        var endpoint = "".concat(this.baseUrl).concat(params.endpoint);
        var req = {
            method: params.method,
            headers: __assign({}, params.headers)
        };
        // let body = null;
        // let headers = { ...params.headers };
        if (params.method === types_1.HTTPMethod.GET) {
            endpoint = "".concat(endpoint, "?").concat(qs.stringify(params.data));
        }
        if (params.method === types_1.HTTPMethod.POST) {
            req.body = JSON.stringify(params.data);
            req.headers = __assign(__assign({}, req.headers), { "Content-Type": "application/json;charset=utf-8" });
        }
        return [endpoint, req];
    };
    ApiStore.prototype.request = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, endpoint, req, response, error_1;
            var _b, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _d.trys.push([0, 5, , 6]);
                        _a = this.getRequestData(params), endpoint = _a[0], req = _a[1];
                        return [4 /*yield*/, fetch(endpoint, req)];
                    case 1:
                        response = _d.sent();
                        if (!response.ok) return [3 /*break*/, 3];
                        _b = {
                            success: true
                        };
                        return [4 /*yield*/, response.json()];
                    case 2: return [2 /*return*/, (_b.data = _d.sent(),
                            _b.status = response.status,
                            _b)];
                    case 3:
                        _c = {
                            success: false
                        };
                        return [4 /*yield*/, response.json()];
                    case 4: return [2 /*return*/, (_c.data = _d.sent(),
                            _c.status = response.status,
                            _c)];
                    case 5:
                        error_1 = _d.sent();
                        return [2 /*return*/, {
                                success: false,
                                data: error_1,
                                status: types_1.StatusHTTP.UNEXPECTED_ERROR
                            }];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    return ApiStore;
}());
exports["default"] = ApiStore;
