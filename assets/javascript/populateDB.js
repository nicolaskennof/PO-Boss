let populateDB = function(){
    dbRecords = [
        // {
        //     poId: "",
        //     zone: "",
        // },
        {
            poId: "1234",
            zone: "A",
        },
        {
            poId: "456",
            zone: "B",
        },
        {
            poId: "2187941",
            zone: "C",
        },
    ]

    for(var i = 0; i < dbRecords.length; i++){
        console.log(dbRecords[i]);
        // database.ref().push(dbRecords[i]);
    }

};