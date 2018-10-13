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
        {status: "P",poDateTime: "1539012600",poId: "30105",clientSite: "KBR-Zibata-Atzala",totalPrice: "3111.89",zone: "C",lat: "20.671673",lon: "-100.336544",createdBy:"admin",modifiedBy:"admin"},
{status: "C",poDateTime: "1538922600",poId: "12560",clientSite: "SCANIA-Bodega",totalPrice: "12340",zone: "H",lat: "20.569908",lon: "-100.256543",createdBy:"admin",modifiedBy:"admin"},
{status: "P",poDateTime: "1539118800",poId: "345",clientSite: "VINTE-La vista, ofcinas",totalPrice: "22450",zone: "C",lat: "20.638525",lon: "-100.34837",createdBy:"admin",modifiedBy:"admin"},
{status: "P",poDateTime: "1539126000",poId: "1209",clientSite: "CAISA-Juriquilla-Ambrosia",totalPrice: "2400",zone: "B",lat: "20.72883",lon: "-100.461099",createdBy:"admin",modifiedBy:"admin"},
{status: "C",poDateTime: "1539003600",poId: "3498",clientSite: "HTRES-Juriquilla, Tres Vistas",totalPrice: "3400",zone: "B",lat: "20.693119",lon: "-100.473971",createdBy:"admin",modifiedBy:"admin"},
{status: "P",poDateTime: "1538416800",poId: "5663040",clientSite: "SAMSUNG-DRO",totalPrice: "43000",zone: "B",lat: "20.827783",lon: "-100.443417",createdBy:"admin",modifiedBy:"admin"},
{status: "P",poDateTime: "1539015840",poId: "3452-1",clientSite: "URBANA-Oficinas",totalPrice: "1500",zone: "A",lat: "20.614181",lon: "-100.386964",createdBy:"admin",modifiedBy:"admin"},
{status: "C",poDateTime: "1538774700",poId: "7865",clientSite: "PYABSA-Bodega",totalPrice: "12500",zone: "E",lat: "20.590727",lon: "-100.455025",createdBy:"admin",modifiedBy:"admin"},
{status: "P",poDateTime: "1539027900",poId: "AD-45",clientSite: "JAVER-Oficinas",totalPrice: "345",zone: "A",lat: "20.616596",lon: "-100.389772",createdBy:"admin",modifiedBy:"admin"},
{status: "P",poDateTime: "1539097800",poId: "67430",clientSite: "GUTIERREZ-Tres Cantos",totalPrice: "10000",zone: "E",lat: "20.625156",lon: "-100.491998",createdBy:"admin",modifiedBy:"admin"},
{status: "P",poDateTime: "1539394987.46",poId: "98329",clientSite: "JAVER-Oficinas",totalPrice: "5400",zone: "A",lat: "20.616596",lon: "-100.389772",createdBy:"admin",modifiedBy:"admin"},
{status: "C",poDateTime: "1539291307.46",poId: "278",clientSite: "PONTY-Ofinas",totalPrice: "340",zone: "A",lat: "20.584328",lon: "-100.403505",createdBy:"admin",modifiedBy:"admin"},
{status: "P",poDateTime: "1539387211.46",poId: "12098",clientSite: "GUTIERREZ-Paseos del Bosque",totalPrice: "1250",zone: "G",lat: "20.560625",lon: "-100.44655",createdBy:"admin",modifiedBy:"admin"},
{status: "P",poDateTime: "1539377707.46",poId: "32602",clientSite: "KBR-Rincones del Marques",totalPrice: "12900",zone: "H",lat: "20.582454",lon: "-100.275595",createdBy:"admin",modifiedBy:"admin"},
{status: "P",poDateTime: "1539346603.46",poId: "21098",clientSite: "VINTE-La vista, ofcinas",totalPrice: "3245",zone: "C",lat: "20.638525",lon: "-100.34837",createdBy:"admin",modifiedBy:"admin"},
{status: "C",poDateTime: "1539384619.46",poId: "23419",clientSite: "JAVER-Manantiales",totalPrice: "92867",zone: "G",lat: "20.506338",lon: "-100.39774",createdBy:"admin",modifiedBy:"admin"},
{status: "P",poDateTime: "1539382891.46",poId: "15Z5S0",clientSite: "GUTIERREZ-Tres Cantos",totalPrice: "10203",zone: "E",lat: "20.625156",lon: "-100.491998",createdBy:"admin",modifiedBy:"admin"},
{status: "P",poDateTime: "1539325867.46",poId: "29200AS",clientSite: "PONTY-Ofinas",totalPrice: "150",zone: "A",lat: "20.584328",lon: "-100.403505",createdBy:"admin",modifiedBy:"admin"},
{status: "P",poDateTime: "1539360427.46",poId: "234280AA",clientSite: "SAMSUNG-DRO",totalPrice: "8722",zone: "B",lat: "20.827783",lon: "-100.443417",createdBy:"admin",modifiedBy:"admin"},
{status: "C",poDateTime: "1539369067.46",poId: "DF334",clientSite: "GUTIERREZ-Tres Cantos",totalPrice: "2452",zone: "E",lat: "20.625156",lon: "-100.491998",createdBy:"admin",modifiedBy:"admin"},
{status: "P",poDateTime: "1539373473.86",poId: "JK2342",clientSite: "HTRES-Juriquilla, Tres Vistas",totalPrice: "2452",zone: "B",lat: "20.693119",lon: "-100.473971",createdBy:"admin",modifiedBy:"admin"},
{status: "P",poDateTime: "1539291307.46",poId: "926",clientSite: "JAVER-Oficinas",totalPrice: "6578",zone: "A",lat: "20.616596",lon: "-100.389772",createdBy:"admin",modifiedBy:"admin"},
{status: "P",poDateTime: "1539308587.46",poId: "23667",clientSite: "PYABSA-Bodega",totalPrice: "430",zone: "E",lat: "20.590727",lon: "-100.455025",createdBy:"admin",modifiedBy:"admin"},
{status: "C",poDateTime: "1539318955.46",poId: "5629",clientSite: "SAMSUNG-DRO",totalPrice: "560",zone: "B",lat: "20.827783",lon: "-100.443417",createdBy:"admin",modifiedBy:"admin"},
{status: "P",poDateTime: "1539265387.46",poId: "AA234",clientSite: "URBANA-Oficinas",totalPrice: "26527",zone: "A",lat: "20.614181",lon: "-100.386964",createdBy:"admin",modifiedBy:"admin"},
{status: "P",poDateTime: "1539222187.46",poId: "AB234",clientSite: "GUTIERREZ-Tres Cantos",totalPrice: "1323",zone: "E",lat: "20.625156",lon: "-100.491998",createdBy:"admin",modifiedBy:"admin"},
{status: "P",poDateTime: "1539178987.46",poId: "981867",clientSite: "KBR-Oficinas",totalPrice: "15678",zone: "A",lat: "20.607174",lon: "-100.411518",createdBy:"admin",modifiedBy:"admin"},
{status: "C",poDateTime: "1539369067.46",poId: "3256776",clientSite: "GUTIERREZ-Oficinas",totalPrice: "2450",zone: "G",lat: "20.559239",lon: "-100.447897",createdBy:"admin",modifiedBy:"admin"},
{status: "C",poDateTime: "1539351787.46",poId: "241269",clientSite: "PYABSA-Bodega",totalPrice: "870",zone: "E",lat: "20.590727",lon: "-100.455025",createdBy:"admin",modifiedBy:"admin"},
{status: "C",poDateTime: "1539372782.66",poId: "24517",clientSite: "KBR-RIscos de Zakia",totalPrice: "562",zone: "C",lat: "20.64996",lon: "-100.315391",createdBy:"admin",modifiedBy:"admin"},
{status: "C",poDateTime: "1539288715.46",poId: "43527",clientSite: "CAISA-Juriquilla - Amara",totalPrice: "3400",zone: "B",lat: "20.690857",lon: "-100.466208",createdBy:"admin",modifiedBy:"admin"},
{status: "P",poDateTime: "1539260203.46",poId: "AA555",clientSite: "HTRES-Juriquilla, Tres Vistas",totalPrice: "6720",zone: "B",lat: "20.693119",lon: "-100.473971",createdBy:"admin",modifiedBy:"admin"},
{status: "P",poDateTime: "1539178987.46",poId: "12778",clientSite: "KNAUF-Planta Bunker",totalPrice: "2672",zone: "B",lat: "20.8323",lon: "-100.432346",createdBy:"admin",modifiedBy:"admin"},
{status: "C",poDateTime: "1539135787.46",poId: "98912",clientSite: "KBR-Zibata-Aurea",totalPrice: "9812",zone: "C",lat: "20.682167",lon: "-100.319285",createdBy:"admin",modifiedBy:"admin"},
{status: "C",poDateTime: "1539291307.46",poId: "63691",clientSite: "SAMSUNG-DRO",totalPrice: "5467",zone: "B",lat: "20.827783",lon: "-100.443417",createdBy:"admin",modifiedBy:"admin"},
{status: "C",poDateTime: "1539269707.46",poId: "24512",clientSite: "KBR-Heroes",totalPrice: "23424",zone: "H",lat: "20.624073",lon: "-100.258261",createdBy:"admin",modifiedBy:"admin"},
{status: "P",poDateTime: "1539183307.46",poId: "2452",clientSite: "KBR-Rincones del Marques",totalPrice: "2000",zone: "H",lat: "20.582454",lon: "-100.275595",createdBy:"admin",modifiedBy:"admin"},
{status: "P",poDateTime: "1539351787.46",poId: "1202",clientSite: "KBR-Puerta de Piedra",totalPrice: "42552",zone: "G",lat: "20.538886",lon: "-100.445726",createdBy:"admin",modifiedBy:"admin"},
{status: "P",poDateTime: "1539144427.46",poId: "FF46",clientSite: "KNAUF-Planta Bunker",totalPrice: "12003",zone: "B",lat: "20.8323",lon: "-100.432346",createdBy:"admin",modifiedBy:"admin"},
{status: "C",poDateTime: "1539288715.46",poId: "AF47",clientSite: "KBR-Oficinas",totalPrice: "227",zone: "A",lat: "20.607174",lon: "-100.411518",createdBy:"admin",modifiedBy:"admin"},
    ]

    for(var i = 0; i < dbRecords.length; i++){
        console.log(dbRecords[i]);
        database.ref().push(dbRecords[i]);
    }

};
// var database = firebase.database();
// key = "-LOQWEZpkvZATqV5gxux"
// database.ref().child(key)
