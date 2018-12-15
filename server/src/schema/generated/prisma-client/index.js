"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prisma_lib_1 = require("prisma-client-lib");
var typeDefs = require("./prisma-schema").typeDefs;

var models = [
  {
    name: "AttendanceCategory",
    embedded: false
  },
  {
    name: "AttendanceCycle",
    embedded: false
  },
  {
    name: "ContractCancelMotiveEnum",
    embedded: false
  },
  {
    name: "ContractModalityEnum",
    embedded: false
  },
  {
    name: "ContractTypeEnum",
    embedded: false
  },
  {
    name: "ContractWorkClassEnum",
    embedded: false
  },
  {
    name: "Department",
    embedded: false
  },
  {
    name: "DirectCredit",
    embedded: false
  },
  {
    name: "Employee",
    embedded: false
  },
  {
    name: "EmployeeAFPEnum",
    embedded: false
  },
  {
    name: "EmployeeCajaDeSaludEnum",
    embedded: false
  },
  {
    name: "EmployeeDocumentTypeEnum",
    embedded: false
  },
  {
    name: "EmployeeSexEnum",
    embedded: false
  },
  {
    name: "Event",
    embedded: false
  },
  {
    name: "EventSyncLog",
    embedded: false
  },
  {
    name: "Exception",
    embedded: false
  },
  {
    name: "ExceptionAuthorization",
    embedded: false
  },
  {
    name: "ExceptionCancellation",
    embedded: false
  },
  {
    name: "ExceptionElimination",
    embedded: false
  },
  {
    name: "ExceptionRejection",
    embedded: false
  },
  {
    name: "ExceptionSlot",
    embedded: false
  },
  {
    name: "ExceptionTypeEnum",
    embedded: false
  },
  {
    name: "FieldOptionLabel",
    embedded: false
  },
  {
    name: "Holiday",
    embedded: false
  },
  {
    name: "Schedule",
    embedded: false
  },
  {
    name: "ScheduleCategory",
    embedded: false
  },
  {
    name: "ScheduleCategoryConfig",
    embedded: false
  },
  {
    name: "ScheduleCredit",
    embedded: false
  },
  {
    name: "ScheduleCreditSourceEnum",
    embedded: false
  },
  {
    name: "ScheduleDebit",
    embedded: false
  },
  {
    name: "ScheduleOfflineCategory",
    embedded: false
  },
  {
    name: "ScheduleOfflineElement",
    embedded: false
  },
  {
    name: "ScheduleRestlineCategory",
    embedded: false
  },
  {
    name: "ScheduleRestlineElement",
    embedded: false
  },
  {
    name: "ScheduleTimelineCategory",
    embedded: false
  },
  {
    name: "ScheduleTimelineElement",
    embedded: false
  },
  {
    name: "Shift",
    embedded: false
  },
  {
    name: "ShiftSlot",
    embedded: false
  },
  {
    name: "SystemScheduleIdentifierEnum",
    embedded: false
  },
  {
    name: "User",
    embedded: false
  },
  {
    name: "UserRole",
    embedded: false
  },
  {
    name: "UserRoleEnum",
    embedded: false
  }
];
exports.Prisma = prisma_lib_1.makePrismaClientClass({
  typeDefs,
  models,
  endpoint: `${process.env["PRISMA_ENDPOINT"]}`,
  secret: `${process.env["PRISMA_SECRET"]}`
});
exports.prisma = new exports.Prisma();
