const userId = (userId: (number | string | boolean)) => {
    console.log(userId);

}
userId(110)
userId("110")
userId(true)


function users(students: number | string) {
    console.log(students);

}
users(200)
users("200")