// enum - store constants; duplicate value is not allowes
// numeric enum
var RequestType;
(function (RequestType) {
    RequestType[RequestType["RedData"] = 1] = "RedData";
    RequestType[RequestType["SaveData"] = 2] = "SaveData";
    RequestType[RequestType["Deletedata"] = 4] = "Deletedata";
    RequestType[RequestType["Getdata"] = 5] = "Getdata";
})(RequestType || (RequestType = {}));
// console.log(RequestType);
// console.log(RequestType.Getdata);
// console.log(RequestType["Deletedata"]);
// string enum 
var RequestType2;
(function (RequestType2) {
    RequestType2["ReadData"] = "Read_Data";
    RequestType2["DeleteData"] = "Delete_Data";
})(RequestType2 || (RequestType2 = {}));
// console.log(RequestType2.DeleteData);
// console.log(RequestType2["DeleteData"]);
//heatergenous enum
var RequestType3;
(function (RequestType3) {
    RequestType3["ReadData"] = "Read_Data";
    RequestType3["DeleteData"] = "Delete_Data";
    RequestType3[RequestType3["id"] = 101] = "id";
})(RequestType3 || (RequestType3 = {}));
console.log(RequestType3["DeleteData"]);
