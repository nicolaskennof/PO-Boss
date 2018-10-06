let populateDB = function(){
    
    database.ref().remove();

    dbRecords = [
        // {
        //     poId: "",
        //     zone: "",
        //     company: "",
        //     street: "",
        //     colony: "",
        //     zone: "", // A, B, C ,D ,E.
        //     lon: "",
        //     lat: "",
        //     poDateTime: "",
        //     products: "",
        //     totalPrice: "",
        //     status: "", // ontrack, delivered, delayed, incomplete.
        //     dateAdded: firebase.database.ServerValue.TIMESTAMP,
        // },
        {
            poId: "12345",
            zone: "A",
            company: "Constructura X",
            street: "constituyentes",
            colony: "Pueblito",
            zone: "A", // A, B, C ,D ,E.
            lon: "-100.45178387",
            lat: "20.55877237",
            poDateTime: "",
            products: "",
            totalPrice: "",
            status: "", // ontrack, delivered, delayed, incomplete.
            dateAdded: firebase.database.ServerValue.TIMESTAMP,
        },
        {
            poId: "12345",
            zone: "",
            company: "",
            street: "Benito Juarez",
            colony: "ZIBATA",
            zone: "B", // A, B, C ,D ,E.
            lon: "-100.3331444",
            lat: "20.68051591",
            poDateTime: "",
            products: "",
            totalPrice: "200",
            status: "", // ontrack, delivered, delayed, incomplete.
            dateAdded: firebase.database.ServerValue.TIMESTAMP,
        },
    ]

    for(var i = 0; i < dbRecords.length; i++){
        console.log(dbRecords[i]);
        database.ref().push(dbRecords[i]);
    }

};