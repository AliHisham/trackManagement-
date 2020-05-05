// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  EmployeeApi:"http://localhost:3001/employees",
  EmployeeApi2:"http://localhost:3001/employees/",
  clientApi:"http://localhost:3001/clients",
  clientApi2:"http://localhost:3001/clients/",
  shipmentApi:"http://localhost:3001/shipment",
  shipmentApi2:"http://localhost:3001/shipment/",
  creatApi:"http://localhost:3001/signup",
  loginApi:"http://localhost:3001/login",
  usersApi:"http://localhost:3001/users",
  shipmentPaginationApi:"http://localhost:3001/shipmentsPagination/",
  clientPagination:"http://localhost:3001/clientsPagination/", 
  employeePagination:"http://localhost:3001/employeesPagination/",
  shipmentSearch:"http://localhost:3001/shipmentSearch" , 

  production: false
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
