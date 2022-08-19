// enum - store constants; duplicate value is not allowes



// numeric enum
enum RequestType {
    RedData = 1,
    SaveData,
    Deletedata = 4,
    Getdata,

}
// console.log(RequestType);
// console.log(RequestType.Getdata);
// console.log(RequestType["Deletedata"]);


// string enum 
enum RequestType2 {
    ReadData = "Read_Data",
    DeleteData = "Delete_Data"
}
// console.log(RequestType2.DeleteData);
// console.log(RequestType2["DeleteData"]);



//heatergenous enum
enum RequestType3 {
    ReadData = "Read_Data",
    DeleteData = "Delete_Data",
    id = 101,
}

console.log(RequestType3["DeleteData"]);

