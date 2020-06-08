/* vue initialised by type of building */
function vue_initial(e) {
    if (e.value == '0') {
        document.getElementById("1").style.display = "block";

        document.getElementById('title_NbAppart').innerHTML = "Number of Appartement";
        document.getElementById('title_NbEtage').innerHTML = "Number of Floor";
        document.getElementById('title_NbSsol').innerHTML = "Number of Basement";
        document.getElementById('title_NbPlStD').innerHTML = "";
        document.getElementById('title_NbCageDem').innerHTML = "";
        document.getElementById('title_NbOccParEt').innerHTML = "";
        document.getElementById('title_NbHrAcMax').innerHTML = "";
        
        document.getElementById('title_Esc_Estime').innerHTML = "Number of Escalador Estime";
        document.getElementById('title_Esc_Estime').style.display = "block";
        document.getElementById('Esc_Estime').style.display = "block";
       
        document.getElementById('title_NbAppart').style.display = "block";
        document.getElementById('title_NbEtage').style.display = "block";
        document.getElementById('title_NbSsol').style.display = "block";
        document.getElementById('title_NbPlStD').style.display = "none";
        document.getElementById('title_NbCageDem').style.display = "none";
        document.getElementById('title_NbOccParEt').style.display = "none";
        document.getElementById('title_NbHrAcMax').style.display = "none";
        
        


        document.getElementById('NbAppart').style.display = "block";
        document.getElementById('NbEtage').style.display = "block";
        document.getElementById('NbSsol').style.display = "block";
        document.getElementById('NbPlStD').style.display = "none";
        document.getElementById('NbCageDem').style.display = "none";
        document.getElementById('NbOccParEt').style.display = "none";
        document.getElementById('NbHrAcMax').style.display = "none";
        initialised_value();

    }
    if (e.value == '1') {
        document.getElementById("1").style.display = "block";
        document.getElementById("2").style.display = "block";
        document.getElementById("3").style.display = "block";

        document.getElementById('title_NbAppart').innerHTML = "Number of Shops";
        document.getElementById('title_NbEtage').innerHTML = "Number of Floors";
        document.getElementById('title_NbSsol').innerHTML = "Number of Basements";
        document.getElementById('title_NbPlStD').innerHTML = "Number of parking spaces available";
        document.getElementById('title_NbCageDem').innerHTML = "number of elevators to deploy";

        document.getElementById('title_Esc_Estime').innerHTML = "Number of Escalador Estime";
        document.getElementById('title_Esc_Estime').style.display = "block";
        document.getElementById('Esc_Estime').style.display = "block";

        document.getElementById('title_NbAppart').style.display = "block";
        document.getElementById('title_NbEtage').style.display = "block";
        document.getElementById('title_NbSsol').style.display = "block";
        document.getElementById('title_NbPlStD').style.display = "block";
        document.getElementById('title_NbCageDem').style.display = "block";
        document.getElementById('title_NbOccParEt').style.display = "none";
        document.getElementById('title_NbHrAcMax').style.display = "none";

        document.getElementById('NbAppart').style.display = "block";
        document.getElementById('NbEtage').style.display = "block";
        document.getElementById('NbSsol').style.display = "block";
        document.getElementById('NbPlStD').style.display = "block";
        document.getElementById('NbCageDem').style.display = "block";
        document.getElementById('NbOccParEt').style.display = "none";
        document.getElementById('NbHrAcMax').style.display = "none";
        initialised_value();
    }
    if (e.value == '2') {
        document.getElementById("1").style.display = "block";
        document.getElementById("2").style.display = "block";
        document.getElementById("4").style.display = "block";

        document.getElementById('title_NbAppart').innerHTML = "Number of Compagny";
        document.getElementById('title_NbEtage').innerHTML = "Number of Floors";
        document.getElementById('title_NbSsol').innerHTML = "Number of Basements";
        document.getElementById('title_NbPlStD').innerHTML = "Number of parking spaces available";
        document.getElementById('title_NbOccParEt').innerHTML = "Number maximum of Occupants per Floor";
        document.getElementById('title_NbAppart').style.display = "block";
        document.getElementById('title_NbEtage').style.display = "block";
        document.getElementById('title_NbSsol').style.display = "block";
        document.getElementById('title_NbPlStD').style.display = "block";
        document.getElementById('title_NbOccParEt').style.display = "block";
        document.getElementById('title_NbCageDem').style.display = "none";
        
        document.getElementById('title_Esc_Estime').innerHTML = "Number of Escalador Estime";
        document.getElementById('title_Esc_Estime').style.display = "block";
        document.getElementById('Esc_Estime').style.display = "block";

        document.getElementById('NbAppart').style.display = "block";
        document.getElementById('NbEtage').style.display = "block";
        document.getElementById('NbSsol').style.display = "block";
        document.getElementById('NbPlStD').style.display = "block";
        document.getElementById('NbCageDem').style.display = "none";
        document.getElementById('NbOccParEt').style.display = "block";
        document.getElementById('NbHrAcMax').style.display = "none";
        initialised_value();
    }
    if (e.value == '3') {
        document.getElementById("1").style.display = "block";
        document.getElementById("2").style.display = "block";
        document.getElementById("4").style.display = "block";
        document.getElementById("5").style.display = "block";

        document.getElementById('title_NbAppart').innerHTML = "Number of Compagny";
        document.getElementById('title_NbEtage').innerHTML = "Number of Floors";
        document.getElementById('title_NbSsol').innerHTML = "Number of Basements";
        document.getElementById('title_NbPlStD').innerHTML = "Number of parking spaces available";
        document.getElementById('title_NbOccParEt').innerHTML = "Number maximum of Occupants per Floor";
        document.getElementById('title_NbHrAcMax').innerHTML = "umber of active Hours in the Building";
       
        document.getElementById('title_Esc_Estime').innerHTML = "Number of Escalador Estime";
        document.getElementById('title_Esc_Estime').style.display = "block";
        document.getElementById('Esc_Estime').style.display = "block";

        document.getElementById('title_NbAppart').style.display = "block";
        document.getElementById('title_NbEtage').style.display = "block";
        document.getElementById('title_NbSsol').style.display = "block";
        document.getElementById('title_NbPlStD').style.display = "block";
        document.getElementById('title_NbOccParEt').style.display = "block";
        document.getElementById('title_NbHrAcMax').style.display = "block";
        document.getElementById('title_NbCageDem').style.display = "none";

        document.getElementById('NbAppart').style.display = "block";
        document.getElementById('NbEtage').style.display = "block";
        document.getElementById('NbSsol').style.display = "block";
        document.getElementById('NbPlStD').style.display = "block";
        document.getElementById('NbCageDem').style.display = "none";
        document.getElementById('NbOccParEt').style.display = "block";
        document.getElementById('NbHrAcMax').style.display = "block";
        initialised_value();
    }


};
/* initialised input of building type*/
function initialised_value() {
    document.getElementById('NbAppart').value = 0;
    document.getElementById('NbEtage').value = 0;
    document.getElementById('NbSsol').value = 0;
    document.getElementById('NbPlStD').value = 0;
    document.getElementById('NbCageDem').value = 0;
    document.getElementById('NbOccParEt').value = 0;
    document.getElementById('NbHrAcMax').value = 0;
};

/* INPUT */
/*let NbAppart = 0; NbEtage = 0; NbSsol = 0; NbPlStD = 0; NbCageDem = 0; NbOccParEt = 0; NbHrAcMax = 0;*/


/* OUTPUT */
/*let NbCageEstimate = 0; CostCages = 0; CostInst = 0; CostProj = 0; MoyAppartByEt = 0; NbCol = 0; NbrEscCol;*/

/* Vefify the input if is Number typeof */
function sanitise(x) {
    if (isNaN(x) || x < 0) {
        return 0;
    }
    return x;
}

/* controleur de calcul de l estimation du nbre de cage et du projet */
function calculated(e) {
    var NbAppart = 0; var NbEtage = 0; var NbSsol = 0; var NbPlStD = 0; var NbCageDem = 0; var NbOccParEt = 0; var NbHrAcMax = 0;
    var NbCageEstimate = 0; var MoyAppartByEt = 0; var NbCol = 0; var NbrEscCol;
    NbAppart = number(document.getElementById('NbAppart').value);
    NbEtage = number(document.getElementById('NbEtage').value);
    NbSsol = number(document.getElementById('NbSsol').value);
    NbPlStD = number(document.getElementById('NbPlStD').value);
    NbCageDem = number(document.getElementById('NbCageDem').value);
    NbOccParEt = number(document.getElementById('NbOccParEt').value);
    NbHrAcMax = number(document.getElementById('NbHrAcMax').value);
    if (e.value == '0') {
        MoyAppartByEt = math.ceil(NbAppart / NbEtage);
        NbEscByApparts = Math.ceil(NbAppart / 6);
        NbCol = math.round(NbEtage / 20);
        NbCageEstimate = NbEscByApparts * NbCol;
        console.log(NbCageEstimate);
        document.getElementById('title_Esc_Estime').innerHTML = "Number of Escalators Needed";
        document.getElementById('NbrEscEstimed').value = NbCageEstimate;
        /*calculated_Project(NbCageEstimate);*/
        /* vue d estimation ecaladeur number we need */


    }
    if (e.value == '1') {
        NbCageEstimate = NbCageDem;
        calculated_Project(NbCageEstimate);
        document.getElementById('title_Esc_Estime').innerHTML = "Number of Escalators Needed";
        document.getElementById('NbrEscEstimed').value = NbCageEstimate;
    }
    if (e.value == '2') {
        OccTotal = NbOccParEt * (NbEtage + NbSsol);
        NbrEsc = Math.ceil(OccTotal / 1000);
        NbCol = Math.round(NbEtage / 20);
        NbrEscCol = Math.ceil(NbrEsc / NbCol);
        NbCageEstimate = Math.ceil(NbrEscCol * NbrEscCol);
        document.getElementById('title_Esc_Estime').innerHTML = "Number of Escalators Needed";
        document.getElementById('NbrEscEstimed').value = NbCageEstimate;
        calculated_Project(NbCageEstimate);
    }
    if (e.value == '3') {
        OccTotal = NbOccParEt * (NbEtage + NbSsol);
        NbrEsc = Math.ceil(OccTotal / 1000);
        NbCol = Math.round(NbEtage / 20);
        NbrEscCol = Math.ceil(NbrEsc / NbCol);
        NbCageEstimate = Math.ceil(NbrEscCol * NbrEscCol);
        document.getElementById('title_Esc_Estime').innerHTML = "Number of Escalators Needed";
        document.getElementById('NbrEscEstimed').value = NbCageEstimate;
        calculated_Project(NbCageEstimate);

    }


};
/* controleur de calcul de l estimation du projet */
function calculated_Project(NbCageEstimate) {
    var CostCages = 0; var CostInst = 0; CostProj = 0;
    var ResRadio = document.getElementsByName('radio')
    if (ResRadio[0].checked && NbCageEstimate > 0) {
        CostCages = NbCageEstimate * ResRadio[0].value;
        CostInst = CostCages * 0.1;
        CostProj = CostCages + CostInst;
        vue_Project(CostCages, CostInst, CostProj);
    } else {
        initialised_Cost();
    };
    if (ResRadio[1].checked && NbCageEstimate > 0) {
        CostCages = NbCageEstimate * ResRadio[1].value;
        CostInst = CostCages * 0.13;
        CostProj = CostCages + CostInst;
        vue_Project(CostCages, CostInst, CostProj);
    } else {
        initialised_Cost();
    };
    if (ResRadio[2].checked && NbCageEstimate > 0) {
        CostCages = NbCageEstimate * ResRadio[2].value;
        CostInst = CostCages * 0.16;
        CostProj = CostCages + CostInst;
        vue_Project(CostCages, CostInst, CostProj);
    } else {
        initialised_Cost();
    };

};
/* Affichage du cout du projet */
function vue_Project(CostCages, CostInst, CostProj) {
    document.getElementById('title_P').innerHTML = "ESTIMATE PROJECT";
    document.getElementById('Cost_Cages').innerHTML = "Elevators cost $" + CostCages.toFixed(2);
    document.getElementById('Cost_Inst').innerHTML = "Installation costs $" + CostInst.toFixed(2);
    document.getElementById('Cost_P').innerHTML = "Project cost $" + CostProj.toFixed(2);
};
/*
let NbAppart=0;     NbEtage=0;  NbSsol=0;
let NbCommerce;     NbEtage;    NbSsol;   NbPlStD=0; NbCageDem=0;
let NbEtrLoc;       NbEtage;    NbSsol;   NbPlStD;                NbOccParEt=0;
let NbComLoc;       NbEtage;    NbSsol;   NbPlStD;                NbOccParEt;    NbHrAcMax=0;

*/
function initialised_Cost() {
    document.getElementById('title_P').innerHTML = "";
    document.getElementById('Cost_Cages').innerHTML = "";
    document.getElementById('Cost_Inst').innerHTML = "";
    document.getElementById('Cost_P').innerHTML = "";
    document.getElementById('title_P').style.display = "none";
    document.getElementById('Cost_Cages').style.display = "none";
    document.getElementById('Cost_Inst').style.display = "none";
    document.getElementById('Cost_P').style.display = "none";
};



