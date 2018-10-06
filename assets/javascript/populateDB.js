let populateDB = function(){
    dbRecords = [
        // {
        //     poId: "",
        //     zone: "",
        // },
        {
            poId: "1234",
            zone: "A",
            dateAdded: firebase.database.ServerValue.TIMESTAMP,
        },
        {
            poId: "456",
            zone: "B",
            dateAdded: firebase.database.ServerValue.TIMESTAMP,
        },
        {
            poId: "2187941",
            zone: "C",
            dateAdded: firebase.database.ServerValue.TIMESTAMP,
        },
    ]

    for(var i = 0; i < dbRecords.length; i++){
        console.log(dbRecords[i]);
        database.ref().push(dbRecords[i]);
    }

};