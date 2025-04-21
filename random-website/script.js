

let website_list = [
    "http://www.pointerpointer.com/",
    "http://www.koalastothemax.com/",
    "http://www.staggeringbeauty.com/",
    "http://www.zoomquilt.org/",
    "http://www.nyan.cat/",
    "http://www.donothingfor2minutes.com/",
    "http://www.hackertyper.net/",
    "http://www.sanger.dk/",
    "https://www.omfgdogs.com/",
    "http://www.yesnoif.com/",
    "http://www.fallingfalling.com/",
    "https://longdogechallenge.com/",
    "https://www.patience-is-a-virtue.org/",
    "https://heeeeeeeey.com/",
    "https://thatsthefinger.com/",
    "https://thisisnotajumpscare.com/",
    "http://www.eelslap.com/",
    "http://www.rrrgggbbb.com/",
    "http://www.republiquedesmangues.fr/",
    "http://www.partridgegetslucky.com/",
    "http://www.ismycomputeron.com/",
    "https://www.catslap.com/",
    "https://www.slowclap.com/",
    "https://www.trypap.com/",
    "https://mondrianandme.com/",
    "https://www.zenzone.space/",
    "https://puginarug.com/",
    "https://beesbeesbees.com/",
    "http://www.leduchamp.com/",
    "https://burymewithmymoney.com/",
    "http://www.republiquedesmangues.fr/",
    "http://www.ringingtelephone.com/",
    "http://www.movenowthinklater.com/",
    "http://www.bouncingdvdlogo.com/",
    "http://www.drawastickman.com/",
    "https://www.8bitdash.com/",
    "https://chillestmonkey.com/",
    "https://cat-bounce.com/",
    "https://theuselessweb.site/",
    "https://www.everydayim.com/",
    "https://www.fishslap.com/",
    "http://corndog.io/",
    "https://www.internetlivestats.com/one-second/",
    "https://www.pointerpointer.com/",
    "http://www.corgiorgy.com/",
    "https://www.omglasergunspewpewpew.com/",
    "https://www.froggymath.com/",
    "https://clickingbad.nullism.com/",
    "https://www.muchbetterthanthis.com/",
    "https://www.leekspin.com/"
];

let click_btn = document.querySelector(".click_btn");

click_btn.addEventListener("click", ()=>{
    let random_no = Math.round(Math.random() * 50);
    window.location.assign(website_list[random_no]);
})

