/*
    Simple template for an "ingredient".
*/
class Ingredient 
{
    // UI name
    uiname = "";

    // Make image
    imageURL = "";

    // Beneifits list.
    benefitsText = "";

    // Origin 
    // - Google maps link
    mapURL = "";
    // - Origin and history text
    historyOriginText = "";

    // Multi-language name text
    nameText = "";

    // SVG indicating hot/cold property
    hotColdURL = "";            

    // SVG indicating food category property
    categoryURL = "";
}

/*  Ingredients "database".
    TODO: move to real database.
 */
var ingredients;

/* 
    Sample ingredients.
    - Records can be added here for now.
*/
function loadData()
{
    let ginger = new Ingredient();
    ginger.uiname = "Ginger";
    ginger.imageURL = "images/ginger.jpg";
    ginger.benefitsText = "<ul> " +
        "<li>Contains gingerol, which has powerful medicinal properties." +
        "<li>Can treat many forms of nausea, especially morning sickness. " +
        "<li>May help with weight loss. " +
        "<li>Can help with osteoarthritis. " +
        "<li>May drastically lower blood sugars and improve heart disease risk factors. " +
        "<li>Can help treat chronic indigestion. " +
        "</ul>";
    ginger.historyOriginText = "The known history of ginger dates back about 5000 years. Its native home is debated but its " +
        "medicinal and spiritual uses were first documented in Southeast Asia, India and China. Like many " +
        "other spices, ginger was once a costly commodity. In the 14th century, a pound of ginger cost as " +
        "much as one sheep!";
    ginger.uinameText = "Ginger<br><div class=\"notranslate\">生姜<br>ショウガ<br>生姜생강<br></div>";
    ginger.hotColdURL = "images/cold.svg"
    ginger.mapURL = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56592457.93916351!2d67.47499015074814!3d30.033142049231426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31508e64e5c642c1%3A0x951daa7c349f366f!2sChina!5e0!3m2!1sen!2sca!4v1647628105514!5m2!1sen!2sca";
    ginger.categoryURL = "images/vegatable.svg";

    let garlic = new Ingredient();
    garlic.uiname = "Garlic";
    garlic.imageURL = "images/garlic.jpg";
    garlic.benefitsText = "<ul> " +
        "<li>Garlic acts as an anticoagulant and reduces the risk of heart attacks." +
        "<li>Can help fight off viruses and infection." +
        "<li>Can help support bone health and provide relief from osteoarthritis. " +
        "<li>Can reduce high blood pressure and lower the risk of heart diesease " +
        "<li>Can help protect the body from heavy metal toxicity " +
        "</ul>";
    garlic.historyOriginText = "The known medicinal history of garlic dates back about 5000 years. Its native home is debated but its " +
        "medicinal and spiritual uses were first documented in Egypt, India and China. Garlic " +
        "was first used as a food flavoring and for medicinal purposes. There are over 450 " +
        "varieties of garlic!";
    garlic.uinameText = "Garlic<br><div class=\"notranslate\">大蒜<br>ニンニク<br>마늘<br></div>";
    garlic.hotColdURL = "images/warm.svg"
    garlic.mapURL = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1300604.104516378!2d78.80624068116254!3d41.729923260085606!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3862d128e40fb863%3A0x7255827ae718ca82!2sTien%20Shan!5e0!3m2!1sen!2sca!4v1648404439008!5m2!1sen!2sca";
    garlic.categoryURL = "images/vegatable.svg";

    let mushroom = new Ingredient();
    mushroom.uiname = "Mushroom";
    mushroom.imageURL = "images/mushroom.jpg";
    mushroom.benefitsText = "<ul> " +
        "<li>Mushrooms  reduces the risk of heart disease, cancer and diabetes." +
        "<li>Can help fight off viruses and infection." +
        "<li>Can help improve memory, creativity and concentration. " +
        "<li>Can reduce high blood pressure and lower the risk of heart diesease "
    "</ul>";
    mushroom.historyOriginText = "The known medicinal history mushrooms dates back about 5300 years. Its native home is debated but its " +
        "medicinal uses were first documented in places such as anicent Greece, China and northern Italy. Amadou, birch polypore and puffball mushrooms " +
        "were used for consumption and for traditional medicine. There are over 20,000 mushcroom specieis in North America alone!"
    mushroom.uinameText = "Mushroom<br><div class=\"notranslate\">蘑菇<br>キノコ<br>버섯<br></div>";
    mushroom.hotColdURL = "images/cold.svg"
    mushroom.mapURL = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56592457.93916351!2d67.47499015074814!3d30.033142049231426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31508e64e5c642c1%3A0x951daa7c349f366f!2sChina!5e0!3m2!1sen!2sca!4v1647628105514!5m2!1sen!2sca";
    mushroom.categoryURL = "images/vegatable.svg";

    // Keep a list of ingreditients
    ingredients = new Map();
    ingredients.set("Ginger", ginger);
    ingredients.set("Garlic", garlic);
    ingredients.set("Mushroom", mushroom);
}