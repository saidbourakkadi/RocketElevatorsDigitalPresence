/**	SUBMISSION FORM HIDE PART
*************************************************** **/
function initialised() {
  document.getElementById('building-types').value = "";

};

function initialised_all() {
  document.getElementById('title_com').innerHTML = "";
  document.getElementById('PriceUnit_com').innerHTML = "";
  document.getElementById('PriceInst_com').innerHTML = "";
  document.getElementById('EstimateProject_com').innerHTML = "";

  document.getElementById('title_res').innerHTML = "";
  document.getElementById('PriceUnit_res').innerHTML = "";
  document.getElementById('PriceInst_res').innerHTML = "";
  document.getElementById('EstimateProject_res').innerHTML = "";

  document.getElementById('title_cor').innerHTML = "";
  document.getElementById('PriceUnit_cor').innerHTML = "";
  document.getElementById('PriceInst_cor').innerHTML = "";
  document.getElementById('EstimateProject_cor').innerHTML = "";

  document.getElementById('title_hyb').innerHTML = "";
  document.getElementById('PriceUnit_hyb').innerHTML = "";
  document.getElementById('PriceInst_hyb').innerHTML = "";
  document.getElementById('EstimateProject_hyb').innerHTML = "";

  document.getElementById('residen-app-num').value = null;
  document.getElementById('residen-floor-num').value = null;
  document.getElementById('residen-bas-num').value = null;
  document.getElementById('residential-total').value = null;

  document.getElementById("res-stand-radio").checked = false;
  document.getElementById("res-prem-radio").checked = false;
  document.getElementById("res-excel-radio").checked = false;

  document.getElementById('commercial-escalator-num').value= null;
  document.getElementById('commercial-Esc-total').value= null;
  document.getElementById("com-stand-radio").checked = false;
  document.getElementById("com-prem-radio").checked = false;
  document.getElementById("com-excel-radio").checked = false;

  document.getElementById("corp-stand-radio").checked = false;
  document.getElementById("corp-prem-radio").checked = false;
  document.getElementById("corp-excel-radio").checked = false;

  document.getElementById("hyp-stand-radio").checked = false;
  document.getElementById("hyp-prem-radio").checked = false;
  document.getElementById("hyp-excel-radio").checked = false;
};

function ChoiceTypebuilding(e) {

  if (e.value == '0') {

    document.getElementById('residential-details').style.display = "block";
    document.getElementById('commercial-details').style.display = "none";
    document.getElementById('corporate-details').style.display = "none";
    document.getElementById('hybride-details').style.display = "none";

  }
  if (e.value == '1') {

    document.getElementById('residential-details').style.display = "none";
    document.getElementById('commercial-details').style.display = "block";
    document.getElementById('corporate-details').style.display = "none";
    document.getElementById('hybride-details').style.display = "none";


  }

  if (e.value == '2') {

    document.getElementById('residential-details').style.display = "none";
    document.getElementById('commercial-details').style.display = "none";
    document.getElementById('corporate-details').style.display = "block";
    document.getElementById('hybride-details').style.display = "none";

  }

  if (e.value == '3') {
    document.getElementById('residential-details').style.display = "none";
    document.getElementById('commercial-details').style.display = "none";
    document.getElementById('corporate-details').style.display = "none";
    document.getElementById('hybride-details').style.display = "block";

  }


  if (e.value == 'none') {
    document.getElementById('residential-details').style.display = "none";
    document.getElementById('commercial-details').style.display = "none";
    document.getElementById('corporate-details').style.display = "none";
    document.getElementById('hybride-details').style.display = "none";

  }
};



/**	SUBMISSION FORM
*************************************************** **/
function Estimate() {

  /** -------------- commercial ---------------------**/

  /** calculation Number Escalators **/
  var ComEsc = document.getElementById('commercial-Esc-total');
  var ComNumEsc = document.getElementById('commercial-escalator-num');
  ComEsc.value = ComNumEsc.value;


  /** calculation price **/
  var ComInst;
  var ComPrise;
  var ComRadio = document.getElementsByName('commercial-radio');
  var floorCom = /[0-9][0-9][0-9][0-9]/gi;
  if (parseInt(ComNumEsc.value) <= 0 || ComNumEsc.value.match(floorCom)) {
    alert("Verify if : Number of Escalador is < 0 or over than 1 000");
    
    initialised_all();

  }
  if (ComRadio[0].checked && ComEsc.value != 0) {
    ComPrise = ComRadio[0].value * ComEsc.value;

    ComInst = 1.10;

    document.getElementById('title_com').innerHTML = "YOUR ESTIMATE";
    document.getElementById('PriceUnit_com').innerHTML = "Elevators cost $" + ComPrise.toFixed(2);
    document.getElementById('PriceInst_com').innerHTML = "Installation cost $" + (ComPrise * 0.1).toFixed(2);
    document.getElementById('EstimateProject_com').innerHTML = "Total project value $ " + (ComPrise * ComInst).toFixed(2);

  } else if (ComRadio[1].checked && ComEsc.value != 0) {
    ComPrise = ComRadio[1].value * ComEsc.value;
    ComInst = 1.13;

    document.getElementById('title_com').innerHTML = "YOUR ESTIMATE";
    document.getElementById('PriceUnit_com').innerHTML = "Elevators cost $" + ComPrise.toFixed(2);
    document.getElementById('PriceInst_com').innerHTML = "Installation cost $" + (ComPrise * 0.13).toFixed(2);
    document.getElementById('EstimateProject_com').innerHTML = "Total project value $ " + (ComPrise * ComInst).toFixed(2);

  } else if (ComRadio[2].checked && ComEsc.value != 0) {
    ComPrise = ComRadio[2].value * ComEsc.value
    ComInst = 1.16

    document.getElementById('title_com').innerHTML = "YOUR ESTIMATE";
    document.getElementById('PriceUnit_com').innerHTML = "Elevators cost $" + ComPrise.toFixed(2);
    document.getElementById('PriceInst_com').innerHTML = "Installation cost $" + (ComPrise * 0.16).toFixed(2);
    document.getElementById('EstimateProject_com').innerHTML = "Total project value $ " + (ComPrise * ComInst).toFixed(2);
  }
  /*var ComTotal = ComPrise * ComInst;
  document.getElementById('commercial-total-estimate').value = ComTotal.toFixed(2);*/


  /** --------------- residential -------------------- **/

  /** calculation Number Escalators **/
  
  var ResNumApp = (document.getElementById('residen-app-num').value);
  var ResNumFlo = (document.getElementById('residen-floor-num').value);
  var ResNumBas = (document.getElementById('residen-bas-num').value);
  var appartement = /[0-9][0-9][0-9][0-9][0-9]/gi;
  var floorRes = /[0-9][0-9][0-9][0-9]/gi;
  if (parseInt(ResNumFlo) < 0 || parseInt(ResNumApp) < 0 || parseInt(ResNumFlo) > parseInt(ResNumApp) || ResNumApp.match(appartement)
   || ResNumFlo.match(floorRes)) {
    alert("There is Sum Erros : Number of components must be > 0 Or number of floor is under than number of appartement ...");
    
    initialised_all();

  }

  var Div = Math.ceil(ResNumApp / (ResNumFlo-ResNumBas));

  var Ave = Math.ceil(Div / 6);
  var FloCheck = Math.ceil(ResNumFlo / 20);
  var ResEsc = Ave * FloCheck;

  document.getElementById('residential-total').value = ResEsc;


  /** calculation price **/
  var ResInst;
  var ResPrise;
  var ResRadio = document.getElementsByName('residential-radio');

  if (ResRadio[0].checked && document.getElementById('residential-total').value > 0) {
    ResPrise = ResRadio[0].value * ResEsc;
    ResInst = 1.10;
    document.getElementById('title_res').innerHTML = "YOUR ESTIMATE";
    document.getElementById('PriceUnit_res').innerHTML = "Elevators cost $" + ResPrise.toFixed(2);
    document.getElementById('PriceInst_res').innerHTML = "Installation costs $" + (ResPrise * 0.1).toFixed(2);
    document.getElementById('EstimateProject_res').innerHTML = "Total cost $" + (ResPrise * ResInst).toFixed(2);
  } else if (ResRadio[1].checked && document.getElementById('residential-total').value > 0) {
    ResPrise = ResRadio[1].value * ResEsc;
    ResInst = 1.13;
    document.getElementById('title_res').innerHTML = "YOUR ESTIMATE";
    document.getElementById('PriceUnit_res').innerHTML = "Elevators cost $" + ResPrise.toFixed(2);
    document.getElementById('PriceInst_res').innerHTML = "Installation costs $" + (ResPrise * 0.13).toFixed(2);
    document.getElementById('EstimateProject_res').innerHTML = "Total cost $" + (ResPrise * ResInst).toFixed(2);
  } else if (ResRadio[2].checked && document.getElementById('residential-total').value > 0) {
    ResPrise = ResRadio[2].value * ResEsc;
    ResInst = 1.16;
    document.getElementById('title_res').innerHTML = "YOUR ESTIMATE";
    document.getElementById('PriceUnit_res').innerHTML = "Elevators cost $" + ResPrise.toFixed(2);
    document.getElementById('PriceInst_res').innerHTML = "Installation costs $" + (ResPrise * 0.16).toFixed(2);
    document.getElementById('EstimateProject_res').innerHTML = "Total cost $" + (ResPrise * ResInst).toFixed(2);
  }
  /*var ResTotal = Math.ceil(ResPrise * ResInst);
 /document.getElementById('residential-total-estimate').value = ResTotal.toFixed(2);*/



  /** ------------------- corporate -------------------- **/
 
  var CorpNumBase = 0;
  CorpNumBase = Number(document.getElementById('corp-num-base').value);
  var CorpNumFlo = 0;
  CorpNumFlo = Number(document.getElementById('corp-num-flo').value);
  var CorpSum = CorpNumFlo + CorpNumBase; 
  console.log("toto");
  console.log("CorpSum");
  var CorpNumOcc = 0;
  CorpNumOcc = Number(document.getElementById('corp-num-occupant').value);
  var CorpOcpTotal = CorpSum * CorpNumOcc;
  var CorpEsc = Math.ceil(CorpOcpTotal / 1000);
  var CorpNumCol = Math.round(CorpSum / 20);
  var CorpNumEscCol = Math.ceil(CorpEsc / CorpNumCol);
  var CorpEscTotal = Math.ceil(CorpNumCol * CorpNumEscCol);
  document.getElementById('corporate-total').value = CorpEscTotal;

  /** calculation price **/
  var CorpInst; /** instalation **/
  var CorpPrise; /** valeur des ascensseur **/
  var CorpRadio = document.getElementsByName('corporate-radio');
  var floorCorp = /[0-9][0-9][0-9][0-9][0-9][0-9]/gi;
  
  if (CorpRadio[0].checked && document.getElementById('corporate-total').value != 0) {
    CorpPrise = CorpRadio[0].value * CorpEscTotal;
    CorpInst = 1.10;
    document.getElementById('title_cor').innerHTML = "YOUR ESTIMATE";
    document.getElementById('PriceUnit_cor').innerHTML = "Elevators cost $" + CorpPrise.toFixed(2);
    document.getElementById('PriceInst_cor').innerHTML = "Installation costs $" + (CorpPrise * 0.1).toFixed(2);
    document.getElementById('EstimateProject_cor').innerHTML = "Total project cost $ " + (CorpPrise * CorpInst).toFixed(2);
  } else if (CorpRadio[1].checked && document.getElementById('corporate-total').value != 0) {
    CorpPrise = CorpRadio[1].value * CorpEscTotal;
    CorpInst = 1.13;
    document.getElementById('title_cor').innerHTML = "YOUR ESTIMATE";
    document.getElementById('PriceUnit_cor').innerHTML = "Elevators cost $" + CorpPrise.toFixed(2);
    document.getElementById('PriceInst_cor').innerHTML = "Installation costs $" + (CorpPrise * 0.13).toFixed(2);
    document.getElementById('EstimateProject_cor').innerHTML = "Total project cost $ " + (CorpPrise * CorpInst).toFixed(2);
  } else if (CorpRadio[2].checked && document.getElementById('corporate-total').value != 0) {
    CorpPrise = CorpRadio[2].value * CorpEscTotal;
    CorpInst = 1.16;
    document.getElementById('title_cor').innerHTML = "YOUR ESTIMATE";
    document.getElementById('PriceUnit_cor').innerHTML = "Elevators cost $" + CorpPrise.toFixed(2);
    document.getElementById('PriceInst_cor').innerHTML = "Installation costs $" + (CorpPrise * 0.16).toFixed(2);
    document.getElementById('EstimateProject_cor').innerHTML = "Total project cost $ " + (CorpPrise * CorpInst).toFixed(2);
  }
  /*var CorpTotal = CorpPrise * CorpInst;
  document.getElementById('corporate-total-estimate').value = CorpTotal.toFixed(2);*/


  /** ------------------- hybride -------------------- **/
  var HybNumBase = 0;
  HybNumBase = Number(document.getElementById('hyb-num-base').value);
  var HybNumFlo = 0;
  HybNumFlo = Number(document.getElementById('hyb-num-flo').value);
  var HybSum = HybNumBase + HybNumFlo;
  var HypNumOcc = 0;
  HypNumOcc = Number(document.getElementById('hyb-num-occupant').value);
  var HybOcpTotal = HybSum * HypNumOcc;
  var HybEsc = Math.ceil(HybOcpTotal / 1000);
  var HybNumCol = Math.round(HybSum / 20);
  var HybNumEscCol = Math.ceil(HybEsc / HybNumCol);
  var HybEscTotal = Math.ceil(HybNumCol * HybNumEscCol);
  document.getElementById('hybride-total').value = HybEscTotal;


  /** calculation price **/
  var HybInst;
  var HybPrise;
  var HybRadio = document.getElementsByName('hybride-radio');
  if (HybRadio[0].checked && document.getElementById('hybride-total').value != 0) {
    HybPrise = HybRadio[0].value * HybEscTotal;
    HybInst = 1.10;
    document.getElementById('title_hyb').innerHTML = "YOUR ESTIMATE";
    document.getElementById('PriceUnit_hyb').innerHTML = "Elevators cost $" + HybPrise.toFixed(2);
    document.getElementById('PriceInst_hyb').innerHTML = "Installation cost $" + (HybPrise * 0.1).toFixed(2);
    document.getElementById('EstimateProject_hyb').innerHTML = "Total project cost $ " + (HybPrise * HybInst).toFixed(2);
  } else if (HybRadio[1].checked && document.getElementById('hybride-total').value != 0) {
    HybPrise = HybRadio[1].value * HybEscTotal;
    HybInst = 1.13;
    document.getElementById('title_hyb').innerHTML = "YOUR ESTIMATE";
    document.getElementById('PriceUnit_hyb').innerHTML = "Elevators cost $" + HybPrise.toFixed(2);
    document.getElementById('PriceInst_hyb').innerHTML = "Installation cost $" + (HybPrise * 0.13).toFixed(2);
    document.getElementById('EstimateProject_hyb').innerHTML = "Total project cost $ " + (HybPrise * HybInst).toFixed(2);
  } else if (HybRadio[2].checked && document.getElementById('hybride-total').value != 0) {
    HybPrise = HybRadio[2].value * HybEscTotal;
    HybInst = 1.16;
    document.getElementById('title_hyb').innerHTML = "YOUR ESTIMATE";
    document.getElementById('PriceUnit_hyb').innerHTML = "Elevators cost $" + HybPrise.toFixed(2);
    document.getElementById('PriceInst_hyb').innerHTML = "Installation cost $" + (HybPrise * 0.16).toFixed(2);
    document.getElementById('EstimateProject_hyb').innerHTML = "Total project cost $ " + (HybPrise * HybInst).toFixed(2);
  }
  /* var HybTotal = HybPrise * HybInst;
   document.getElementById('hybride-total-estimate').value = HybTotal.toFixed(2);*/


};