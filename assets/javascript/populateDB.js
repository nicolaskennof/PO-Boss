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
        {status: "P",date: "1539012600",poId: "30105",clientSite: "KBR-Zibata-Atzala",totalPrice: "3111.89",zone: "C",lon: "20.671673",lat: "-100.336544"},
        {status: "P",date: "1538922600",poId: "12560",clientSite: "SCANIA-Bodega",totalPrice: "12340",zone: "H",lon: "20.569908",lat: "-100.256543"},
        {status: "P",date: "1539378000",poId: "345",clientSite: "VINTE-La vista, ofcinas",totalPrice: "22450",zone: "C",lon: "20.638525",lat: "-100.34837"},
        {status: "P",date: "1539298800",poId: "1209",clientSite: "CAISA-Juriquilla-Ambrosia",totalPrice: "2400",zone: "B",lon: "20.72883",lat: "-100.461099"},
        {status: "P",date: "1539176400",poId: "3498",clientSite: "HTRES-Juriquilla, Tres Vistas",totalPrice: "3400",zone: "B",lon: "20.693119",lat: "-100.473971"},
        {status: "P",date: "1538416800",poId: "5663040",clientSite: "SAMSUNG-DRO",totalPrice: "43000",zone: "B",lon: "20.827783",lat: "-100.443417"},
        {status: "P",date: "1539361440",poId: "3452-1",clientSite: "URBANA-Oficinas",totalPrice: "1500",zone: "A",lon: "20.614181",lat: "-100.386964"},
        {status: "P",date: "1538774700",poId: "7865",clientSite: "PYABSA-Bodega",totalPrice: "12500",zone: "E",lon: "20.590727",lat: "-100.455025"},
        {status: "P",date: "1539027900",poId: "AD-45",clientSite: "JAVER-Oficinas",totalPrice: "345",zone: "A",lon: "20.616596",lat: "-100.389772"},
        {status: "P",date: "1539270600",poId: "67430",clientSite: "GUTIERREZ-Tres Cantos",totalPrice: "10000",zone: "E",lon: "20.625156",lat: "-100.491998"},
    ]

    for(var i = 0; i < dbRecords.length; i++){
        console.log(dbRecords[i]);
        database.ref().push(dbRecords[i]);
    }

};
// var database = firebase.database();
// key = "-LOQWEZpkvZATqV5gxux"
// database.ref().child(key)
