/* vue initialised by type of building 
we show what we select */
function vue_initial(e) {


    if (e.value == '0') {
        initialised_value();
        document.getElementById("1").style.display = "block";
        document.getElementById("2").style.display = "none";
        document.getElementById("3").style.display = "none";
        document.getElementById("4").style.display = "none";
        document.getElementById("5").style.display = "none";
        document.getElementById("6").style.display = "block";
        document.getElementById("7").style.display = "block";
        document.getElementById("8").style.display = "none";
        document.getElementById("pu").style.display = "none";

        document.getElementById("stand-cost").style.display = "none";
        document.getElementById("prem-cost").style.display = "none";
        document.getElementById("excel-cost").style.display = "none";



        document.getElementById('title_NbAppart').innerHTML = "Number of Appartement";
        document.getElementById('title_NbEtage').innerHTML = "Number of Floor with basements";
        document.getElementById('title_NbSsol').innerHTML = "Number of basements";


        document.getElementById('title_Esc_Estime').innerHTML = "Number of Escalador needed";




    }
    if (e.value == '1') {
        initialised_value();
        document.getElementById("1").style.display = "block";
        document.getElementById("2").style.display = "block";
        document.getElementById("3").style.display = "block";
        document.getElementById("4").style.display = "none";
        document.getElementById("5").style.display = "none";
        document.getElementById("6").style.display = "block";
        document.getElementById("7").style.display = "block";
        document.getElementById("8").style.display = "none";
        document.getElementById("pu").style.display = "none";

        document.getElementById('title_NbAppart').innerHTML = "Number of Shops";
        document.getElementById('title_NbEtage').innerHTML = "Number of Floors with basements";
        document.getElementById('title_NbSsol').innerHTML = "Number of Basements";
        document.getElementById('title_NbPlStD').innerHTML = "Number of parking spaces available";
        document.getElementById('title_NbCageDem').innerHTML = "number of elevators to deploy";

        document.getElementById('title_Esc_Estime').innerHTML = "Number of Escalador needed";

        document.getElementById("stand-cost").style.display = "none";
        document.getElementById("prem-cost").style.display = "none";
        document.getElementById("excel-cost").style.display = "none";


    }
    if (e.value == '2') {
        initialised_value();
        document.getElementById("1").style.display = "block";
        document.getElementById("2").style.display = "block";
        document.getElementById("4").style.display = "block";
        document.getElementById("3").style.display = "none";
        document.getElementById("5").style.display = "none";
        document.getElementById("6").style.display = "block";
        document.getElementById("7").style.display = "block";
        document.getElementById("8").style.display = "none";
        document.getElementById("pu").style.display = "none";

        document.getElementById('title_NbAppart').innerHTML = "Number of Compagny";
        document.getElementById('title_NbEtage').innerHTML = "Number of Floors with basements";
        document.getElementById('title_NbSsol').innerHTML = "Number of Basements";
        document.getElementById('title_NbPlStD').innerHTML = "Number of parking spaces available";
        document.getElementById('title_NbOccParEt').innerHTML = "Number maximum of Occupants per Floor";


        document.getElementById('title_Esc_Estime').innerHTML = "Number of Escalador needed";
        document.getElementById('title_Esc_Estime').style.display = "block";
        document.getElementById('Esc_Estime').style.display = "block";

        document.getElementById("stand-cost").style.display = "none";
        document.getElementById("prem-cost").style.display = "none";
        document.getElementById("excel-cost").style.display = "none";


    }
    if (e.value == '3') {
        initialised_value();
        document.getElementById("1").style.display = "block";
        document.getElementById("2").style.display = "block";
        document.getElementById("4").style.display = "block";
        document.getElementById("5").style.display = "block";
        document.getElementById("3").style.display = "none";
        document.getElementById("6").style.display = "block";
        document.getElementById("7").style.display = "block";
        document.getElementById("8").style.display = "none";
        document.getElementById("pu").style.display = "none";

        document.getElementById("stand-cost").style.display = "none";
        document.getElementById("prem-cost").style.display = "none";
        document.getElementById("excel-cost").style.display = "none";



        document.getElementById('title_NbAppart').innerHTML = "Number of Compagny";
        document.getElementById('title_NbEtage').innerHTML = "Number of Floors with basements";
        document.getElementById('title_NbSsol').innerHTML = "Number of Basements";
        document.getElementById('title_NbPlStD').innerHTML = "Number of parking spaces available";
        document.getElementById('title_NbOccParEt').innerHTML = "Number maximum of Occupants per Floor";
        document.getElementById('title_NbHrAcMax').innerHTML = "Number of active Hours in the Building";

        document.getElementById('title_Esc_Estime').innerHTML = "Number of Escalador needed";
        document.getElementById('title_Esc_Estime').style.display = "block";
        document.getElementById('Esc_Estime').style.display = "block";



    }


}
/* initialised input of building type*/
function initialised_value() {
    document.getElementById('NbAppart').value = 0;
    document.getElementById('NbEtage').value = 0;
    document.getElementById('NbSsol').value = 0;
    document.getElementById('NbPlStD').value = 0;
    document.getElementById('NbCageDem').value = 0;
    document.getElementById('NbOccParEt').value = 0;
    document.getElementById('NbHrAcMax').value = 0;
    document.getElementById('NbrEscEstimed').value = 0;

    document.getElementById("stand-radio").checked = false;
    document.getElementById("prem-radio").checked = false;
    document.getElementById("excel-radio").checked = false;
}

/* -------------- INPUT --------------*/
/* 
   NbAppart : Nombre appartement, de shop ou entreprise
   NbEtage  : Nombre d etage 
   NbSsol   : Nombre de sous sol (basement)
   NbPlStD  : Nombre de stationnement free
   NbCageDem : nombre de cage demander
   NbOccParEt : Nombre occupant par etage
   NbHrAcMax = Nobre d'heure travailler par jour
*/


/* ---------------OUTPUT -----------------*/
/* NbCageEstimate : Nombre cage estimer
   CostCages    : cout des cages 
   CostInst     : cout d'installation
   CostProj     : Cout du projet
   MoyAppartByEt: Nombre moyen d appartement par etage
   NbCol        :nombre de colonne
   NbrEscCol    : nombre de sous sol
   
*/




/* Listner de calcul de l estimation du nbre de cage et du projet */
document.getElementById("global").addEventListener("change", estimate());
function estimate() {
    var e = document.getElementById('building-types').value;
    initialised_Cost()
    calculated(e);

}
/* function of calculate how many escalador we need */
function calculated(e) {
    
    var NbAppart = Number(document.getElementById('NbAppart').value);
    var NbEtage = Number(document.getElementById('NbEtage').value);
    var NbSsol = Number(document.getElementById('NbSsol').value);
    var NbPlStD = Number(document.getElementById('NbPlStD').value);
    var NbCageDem = Number(document.getElementById('NbCageDem').value);
    var NbOccParEt = Number(document.getElementById('NbOccParEt').value);
    var NbHrAcMax = Number(document.getElementById('NbHrAcMax').value);

    var NbCageEstimate = Number(document.getElementById('NbrEscEstimed').value = 0);

    /* Vefify the input if is Number and filter just we accepted */
    if (NbAppart < 0 || isNaN(parseInt(document.getElementById('NbAppart').value))) {
        document.getElementById('NbAppart').value = null;

    }
    if (NbEtage < 0 || isNaN(parseInt(document.getElementById('NbEtage').value))) {
        document.getElementById('NbEtage').value = null;
    }
    if (NbSsol < 0 || isNaN(parseInt(document.getElementById('NbSsol').value))) {
        document.getElementById('NbSsol').value = null;
    }
    if (NbPlStD < 0 || isNaN(parseInt(document.getElementById('NbPlStD').value))) {
        document.getElementById('NbPlStD').value = null;
    }
    if (NbCageDem < 0 || isNaN(parseInt(document.getElementById('NbCageDem').value))) {
        document.getElementById('NbCageDem').value = null;
    }
    if (NbOccParEt < 0 || isNaN(parseInt(document.getElementById('NbOccParEt').value))) {
        document.getElementById('NbOccParEt').value = null;
    }
    if (NbHrAcMax < 0 || NbHrAcMax > 24 || isNaN(parseInt(document.getElementById('NbHrAcMax').value))) {
        document.getElementById('NbHrAcMax').value = null;
    }
    /* depend type of building we applicate the different calcul */
    if (e == '0') {
        MoyAppartByEt = Math.ceil(NbAppart / (NbEtage - NbSsol));
        NbEscByApparts = Math.ceil(MoyAppartByEt / 6);
        NbCol = Math.ceil(NbEtage / 20);
        NbCageEstimate = NbEscByApparts * NbCol;

        /* vue d estimation escaladeur number we need */
        if (isNaN(NbCageEstimate) || NbCageEstimate == 0) {
            document.getElementById('NbrEscEstimed').value = "";

        } else { document.getElementById('NbrEscEstimed').value = NbCageEstimate; }
        
    }
    if (e == '1') {
        NbCageEstimate = NbCageDem;

        /* vue d estimation escaladeur number we need */
        if (isNaN(NbCageEstimate)) {
            document.getElementById('NbrEscEstimed').value = "";

        } else { document.getElementById('NbrEscEstimed').value = NbCageEstimate; }

    }
    if (e == '2') {
        OccTotal = NbOccParEt * (NbEtage + NbSsol);
        NbrEsc = Math.ceil(OccTotal / 1000);
        NbCol = Math.round(NbEtage / 20);
        NbrEscCol = Math.ceil(NbrEsc / NbCol);
        NbCageEstimate = Math.ceil(NbrEscCol * NbrEscCol);
        document.getElementById('title_Esc_Estime').innerHTML = "Number of Escalators Needed";

        /* vue d estimation escaladeur number we need */
        if (isNaN(NbCageEstimate)) {
            document.getElementById('NbrEscEstimed').value = "";

        } else { document.getElementById('NbrEscEstimed').value = NbCageEstimate; }

    }
    if (e == '3') {
        OccTotal = NbOccParEt * (NbEtage + NbSsol);
        NbrEsc = Math.ceil(OccTotal / 1000);
        NbCol = Math.round(NbEtage / 20);
        NbrEscCol = Math.ceil(NbrEsc / NbCol);
        NbCageEstimate = Math.ceil(NbrEscCol * NbrEscCol);

        /* vue d estimation escaladeur number we need */
        document.getElementById('title_Esc_Estime').innerHTML = "Number of Escalators Needed";
        if (isNaN(NbCageEstimate)) {
            document.getElementById('NbrEscEstimed').value = "";

        } else { document.getElementById('NbrEscEstimed').value = NbCageEstimate; }


    }

}


/* -- Initialised show costs */
function initialised_Cost() {
    document.getElementById('title_P').innerHTML = "";
    document.getElementById('Cost_Cages').innerHTML = "";
    document.getElementById('Cost_Inst').innerHTML = "";
    document.getElementById('Cost_P').innerHTML = "";
    document.getElementById('title_P').style.display = "none";
    document.getElementById('Cost_Cages').style.display = "none";
    document.getElementById('Cost_Inst').style.display = "none";
    document.getElementById('Cost_P').style.display = "none";
    document.getElementById("stand-radio").checked = false;
    document.getElementById("prem-radio").checked = false;
    document.getElementById("excel-radio").checked = false;

};

/* Show project cost depend many event */
document.getElementById("7").addEventListener("change", vue_Project);

function vue_Project() {
    document.getElementById("8").style.display = "block";
    document.getElementById("pu").style.display = "none";
    document.getElementById('title_P').style.display = "block";
    document.getElementById('Cost_Cages').style.display = "block";
    document.getElementById('Cost_Inst').style.display = "block";
    document.getElementById('Cost_P').style.display = "block";

    var CostCages = 0; var CostInst = 0; var CostProj = 0;

    NbCageEstimate = Number(document.getElementById('NbrEscEstimed').value);
    var radio = document.getElementsByName('radio');

    if (radio[0].checked && NbCageEstimate > 0) {
        CostCages = NbCageEstimate * radio[0].value;
        
        CostInst = CostCages * 0.1;
        CostProj = CostCages + CostInst;
        document.getElementById("pu").style.display = "block";
        document.getElementById("stand-cost").style.display = "block";
        document.getElementById("prem-cost").style.display = "none";
        document.getElementById("excel-cost").style.display = "none";

        document.getElementById('title_P').innerHTML = "TOTAL PROJECT COST";
        document.getElementById('Cost_Cages').innerHTML = "Elevators  $" + CostCages.toFixed(2);
        document.getElementById('Cost_Inst').innerHTML = "Installation  $" + CostInst.toFixed(2);
        document.getElementById('Cost_P').innerHTML = "Total  $" + CostProj.toFixed(2);
    }
    else if (radio[1].checked && NbCageEstimate > 0) {
        CostCages = NbCageEstimate * radio[1].value;
       
        CostInst = CostCages * 0.13;
        CostProj = CostCages + CostInst;
        document.getElementById("pu").style.display = "block";
        document.getElementById("stand-cost").style.display = "none";
        document.getElementById("prem-cost").style.display = "block";
        document.getElementById("excel-cost").style.display = "none";


        document.getElementById('title_P').innerHTML = "TOTAL PROJECT COST";
        document.getElementById('Cost_Cages').innerHTML = "Elevators  $" + CostCages.toFixed(2);
        document.getElementById('Cost_Inst').innerHTML = "Installation  $" + CostInst.toFixed(2);
        document.getElementById('Cost_P').innerHTML = "TOTAL  $" + CostProj.toFixed(2);
    }
    else if (radio[2].checked && NbCageEstimate > 0) {
        CostCages = NbCageEstimate * radio[2].value;
       
        CostInst = CostCages * 0.16;
        CostProj = CostCages + CostInst;

        document.getElementById("pu").style.display = "block";
        document.getElementById("stand-cost").style.display = "none";
        document.getElementById("prem-cost").style.display = "none";
        document.getElementById("excel-cost").style.display = "block";


        document.getElementById('title_P').innerHTML = "TOTAL PROJECT COST";
        document.getElementById('Cost_Cages').innerHTML = "Elevators  $" + CostCages.toFixed(2);
        document.getElementById('Cost_Inst').innerHTML = "Installation  $" + CostInst.toFixed(2);
        document.getElementById('Cost_P').innerHTML = "TOTAL  $" + CostProj.toFixed(2);
    }
    else {
        alert('There is no estimated so! ):');
        document.getElementById("stand-radio").checked = false;
        document.getElementById("prem-radio").checked = false;
        document.getElementById("excel-radio").checked = false;
        document.getElementById('title_P').innerHTML = "";
        document.getElementById('Cost_Cages').innerHTML = "";
        document.getElementById('Cost_Inst').innerHTML = "";
        document.getElementById('Cost_P').innerHTML = "";
        document.getElementById("8").style.display = "none";
        document.getElementById("pu").style.display = "none";

        document.getElementById("stand-cost").style.display = "none";
        document.getElementById("prem-cost").style.display = "none";
        document.getElementById("excel-cost").style.display = "none";
    }

}




