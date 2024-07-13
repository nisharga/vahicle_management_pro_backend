"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.manageRequestService = void 0;
const client_1 = require("@prisma/client");
const ApiError_1 = __importDefault(require("../../../error/ApiError"));
const paginationHelpers_1 = require("../../../helpers/paginationHelpers");
const manageRequest_interface_1 = require("./manageRequest.interface");
const prisma = new client_1.PrismaClient();
const createManageRequestService = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield prisma.manageRequest.create({
        data: payload,
    });
    return response;
});
const getAllManageRequestService = (filterOptions, paginatinOptions) => __awaiter(void 0, void 0, void 0, function* () {
    const { searchTerm } = filterOptions, filterData = __rest(filterOptions, ["searchTerm"]);
    const { limit, page, skip } = paginationHelpers_1.paginationHelpers.calculatePagination(paginatinOptions);
    const andConditions = [];
    //searching code
    if (searchTerm) {
        andConditions.push({
            OR: manageRequest_interface_1.Manage_request_fields_constant.map((field) => {
                return {
                    [field]: {
                        contains: searchTerm,
                        mode: "insensitive",
                    },
                };
            }),
        });
    }
    //filtering code
    if (Object.keys(filterData).length > 0) {
        andConditions.push({
            AND: Object.keys(filterData).map((key) => ({
                [key]: {
                    equals: filterData[key],
                },
            })),
        });
    }
    const whereCondition = andConditions.length > 0 ? { AND: andConditions } : {};
    const result = yield prisma.manageRequest.findMany({
        where: whereCondition,
        skip,
        take: limit,
        orderBy: paginatinOptions.sortBy && paginatinOptions.sortOrder
            ? {
                [paginatinOptions.sortBy]: paginatinOptions.sortOrder,
            }
            : { createdAt: "asc" },
        include: {
            inventoryRequest: true
        }
    });
    const total = yield prisma.manageRequest.count();
    return {
        meta: {
            limit,
            page,
            total,
        },
        data: result,
    };
});
const getSingleManageRequestService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const ifExist = yield prisma.manageRequest.findFirst({
        where: {
            id: id
        }
    });
    if (ifExist) {
        throw new ApiError_1.default(400, 'This kind of manage request not available');
    }
    const result = yield prisma.manageRequest.findUnique({
        where: {
            id,
        },
    });
    return result;
});
const updateManageRequestService = (data, id) => __awaiter(void 0, void 0, void 0, function* () {
    const ifExist = yield prisma.manageRequest.findFirst({
        where: {
            id: id
        }
    });
    if (ifExist) {
        throw new ApiError_1.default(400, 'This kind of manage request not available');
    }
    const result = yield prisma.manageRequest.update({
        where: {
            id: id,
        },
        data,
    });
    return result;
});
const DeleteManageRequestService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const ifExist = yield prisma.manageRequest.findFirst({
        where: {
            id: id
        }
    });
    if (ifExist) {
        throw new ApiError_1.default(400, 'This kind of manage request not available');
    }
    const result = yield prisma.manageRequest.delete({
        where: {
            id,
        },
    });
    return result;
});
exports.manageRequestService = {
    createManageRequestService,
    getAllManageRequestService,
    getSingleManageRequestService,
    DeleteManageRequestService,
    updateManageRequestService,
};
