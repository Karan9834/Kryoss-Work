const fs = require('fs');
const path = require('path');

const jsonPath = path.join(__dirname, 'UiUxData.json');

const titleUpdates = {
    // Education
    "vidyakul": {"play": "https://play.google.com/store/apps/details?id=com.vidyakul", "web": "https://vidyakul.com/"},
    "classklap": {"play": "https://play.google.com/store/apps/details?id=com.vja.classclap", "web": "https://classclap.vn/en/"},
    "study24x7": {"play": "https://play.google.com/store/apps/details?id=com.stdy24x7", "web": "https://www.study24x7.com/"},
    "smartkeeda": {"play": "https://play.google.com/store/apps/details?id=smk.smartkeeda", "web": "https://www.smartkeeda.com/"},
    "tutellus": {"play": "https://play.google.com/store/games?hl=en_IN", "web": "https://tutellus.com/"},
    "studyniti": {"play": "https://play.google.com/store/apps/details?id=com.learningnitiapp.android", "web": "https://www.studyniti.com/"},

    // Healthcare
    "pedometer": {"play": "https://play.google.com/store/apps/details?id=cc.pacer.androidapp", "web": "https://www.mypacer.com/"},
    "myupchar": {"play": "https://play.google.com/store/apps/details?id=com.myupchar.user", "web": "https://www.myupchar.com/en"},
    "truemeds": {"play": "https://play.google.com/store/search?q=truemeds&c=apps", "web": "https://www.truemeds.in/"},
    "fitify": {"play": "https://play.google.com/store/apps/details?id=com.fitifyworkouts.bodyweight.workoutapp", "web": "https://gofitify.com/"},
    "nh care": {"play": "https://play.google.com/store/apps/details?id=org.narayanahealth.nhcare", "web": "https://www.narayanahealth.org/"},
    "amwell": {"play": "https://play.google.com/store/games?hl=en_IN", "web": "https://business.amwell.com/"},

    // ECommerce
    "adorawe": {"play": "https://play.google.com/store/apps/details?id=com.ador.android", "web": "https://www.ador.com/"},
    "cartlow": {"play": "https://play.google.com/store/apps/details?id=com.cartlow.android", "web": "https://www.cartlow.com/help/about-us"},
    "jazp": {"play": "https://play.google.com/store/apps/details?id=www.jazp.com.jazp", "web": "https://uae.jazp.com/ae-en/"},
    "geekbuying": {"play": "https://play.google.com/store/apps/details?id=com.geekbuy.geekbuying", "web": "https://www.geekbuying.com/help/student_discount"},
    "china gadgets": {"play": "https://play.google.com/store/apps/details?id=de.appetites.chinagadgets", "web": "https://www.china-gadgets.de/"},
    "runwaysale": {"play": "https://play.google.com/store/apps/details?id=io.flatcircle.runwaysaleandroid", "web": "https://myrunway.co.za/main/customer/account/login"},
    "farfetch": {"play": "https://play.google.com/store/apps/details?id=com.farfetch.farfetchshop", "web": "https://www.farfetch.com/in/"},
    
    // Entertainment
    "watcho": {"play": "https://play.google.com/store/apps/details?id=com.watcho", "web": "https://www.watcho.com/"},
    "rabbit": {"play": "https://play.google.com/store/apps/details?id=com.rabbit.mart", "web": "https://rabbitmovies.app/"},
    "singapore dating": {"play": "https://play.google.com/store/apps/details?id=com.innovate.SingaporeSocial", "web": "https://singapore.innovatedating.com/"},
    "hong kong social": {"play": "https://play.google.com/store/apps/details?id=com.innovate.HongKongSocial", "web": "https://hongkong.innovatedating.com/"},
    "indonesia social": {"play": "https://play.google.com/store/apps/details?id=com.innovate.IndonesiaSocial", "web": "https://indo.innovatedating.com/"},
    "hobi": {"play": "https://play.google.com/store/apps/details?id=com.hobi", "web": "http://hobi.com"},
    "here tv": {"play": "https://play.google.com/store/apps/details?id=com.heremedia.heretv", "web": "https://www.heremedia.com/"},
    "docubay": {"play": "https://play.google.com/store/apps/details?id=com.epic.docubay", "web": "https://www.docubay.com/"},
    "hilalplay": {"play": "https://play.google.com/store/apps/details?id=com.hilal.play", "web": "https://hilalplay.com/"},
    "kindda": {"play": "https://play.google.com/store/apps/details?id=com.kindredsoul.kindredapp", "web": "https://kindda.app/"},
    "vidol": {"play": "https://play.google.com/store/apps/details?id=com.inkriver.vidle", "web": "https://vidol.tv/"},

    // Food & Drinks
    "bazar": {"play": "https://play.google.com/store/apps/details?id=com.smartbazarin.website", "web": "https://reliancesmartbazaar.com/"},
    "groxery": {"play": "https://play.google.com/store/apps/details?id=kiryana.store.kiryanastore", "web": "#"},
    "kifayat": {"play": "https://play.google.com/store/apps/details?id=com.mm.kifayatbazaar", "web": "https://apps.apple.com/in/app/kifayat-online/id1436810493"},
    "avemart": {"play": "https://play.google.com/store/apps/details?id=com.ricomputech.avemartapp", "web": "https://play.google.com/store/apps/details?id=com.ricomputech.avemartapp"},
    "untappd": {"play": "https://play.google.com/store/apps/details?id=com.untappdllc.app", "web": "https://play.google.com/store/apps/details?id=com.untappdllc.app"},
    "eatiko": {"play": "https://play.google.com/store/apps/details?id=io.eatiko.main", "web": "https://play.google.com/store/apps/details?id=io.eatiko.main"},
    "heritage tuch": {"play": "https://play.google.com/store/apps/details?id=com.heritage.agent", "web": "https://play.google.com/store/apps/details?id=com.heritage.agent"},
    "daily moo": {"play": "https://play.google.com/store/apps/details?id=com.heritage.agent", "web": "https://play.google.com/store/apps/details?id=com.heritage.agent"},
    "meatigo": {"play": "https://play.google.com/store/apps/details?id=com.urbanpiper.meatigo", "web": "https://play.google.com/store/apps/details?id=com.urbanpiper.meatigo"},
    "superfoods": {"play": "https://play.google.com/store/apps/details?id=com.mobeasyapp.app591815334080", "web": "https://play.google.com/store/apps/details?id=com.mobeasyapp.app591815334080"},

    // Tour & Travel
    "keyrooms": {"play": "https://keyrooms.org/", "web": "https://keyrooms.org/"},
    "brevistay": {"play": "https://play.google.com/store/apps/details?id=com.brevistay.customer", "web": "https://www.brevistay.com/"},
    "samaya rooms": {"play": "https://thesamaya.in/", "web": "https://thesamaya.in/"},
    "travel boutique": {"play": "https://play.google.com/store/apps/details?id=com.tbolite.app", "web": "https://play.google.com/store/apps/details?id=com.tbolite.app"},
    "riyaconnect": {"play": "https://play.google.com/store/apps/details?id=com.riyaconnect.android", "web": "https://www.riya.travel/"},
    "flyin.com": {"play": "https://play.google.com/store/apps/details?id=com.flyin.bookings", "web": "https://www.flyin.com/ar"},
    "tajawal": {"play": "https://ae.almosafer.com/en", "web": "https://ae.almosafer.com/en"},
    "rehlat": {"play": "https://play.google.com/store/apps/details?id=com.app.rehlat", "web": "https://www.rehlat.com/"},
    "tripviewl": {"play": "https://play.google.com/store/apps/details?id=com.grofsoft.tripview", "web": "https://tripview.com.au/"},
    "tripsource": {"play": "https://play.google.com/store/apps/details?id=com.mttnow.android.bcd.production", "web": "https://tripsource.com/"},
    "afbudsrejser": {"play": "https://www.afbudsrejser.dk/", "web": "https://www.afbudsrejser.dk/"},

    // On-Demand
    "oyebusy": {"play": "https://play.google.com/store/apps/details?id=ca.oyetoronto", "web": "https://play.google.com/store/apps/details?id=ca.oyetoronto"},
    "laundryheap": {"play": "https://play.google.com/store/apps/details?id=com.encureit.laundryheap", "web": "https://play.google.com/store/apps/details?id=com.encureit.laundryheap"},
    "24task": {"play": "https://discount.24task.com/", "web": "https://discount.24task.com/"},
    "akshayakalpa": {"play": "https://play.google.com/store/apps/details?id=com.mrmilkman.akshayakalpa", "web": "https://play.google.com/store/apps/details?id=com.mrmilkman.akshayakalpa"},
    "ourflat": {"play": "https://play.google.com/store/apps/details?id=com.ourflat.app", "web": "https://play.google.com/store/apps/details?id=com.ourflat.app"},
    "shoopy": {"play": "https://play.google.com/store/apps/details?id=in.shoopy.business", "web": "https://in.shoopy.business"},
    "vegease": {"play": "https://play.google.com/store/apps/details?id=com.vegease", "web": "https://vegease.in/?srsltid=AfmBOoohM45rXOTMN9F8McI26Sou4H5fexckP4FK3T1WItnotnr6Q3j1"},
    "id photo": {"play": "https://play.google.com/store/apps/details?id=idphoto.passport.portrait", "web": "https://www.idphotodiy.com/"}
};

let rawData = fs.readFileSync(jsonPath, 'utf8');
let data = JSON.parse(rawData);

if (data.sections) {
    for (const [section, items] of Object.entries(data.sections)) {
        for (let item of items) {
            let matchedKey = null;
            
            const titleTextLower = (item.titleText || '').toLowerCase();
            const titleHtmlLower = (item.titleHtml || '').toLowerCase();
            
            for (const key of Object.keys(titleUpdates)) {
                if (titleTextLower.includes(key) || titleHtmlLower.includes(key)) {
                    matchedKey = key;
                    break;
                }
            }
            
            if (!matchedKey) {
                const altLower = (item.alt || '').toLowerCase();
                for (const key of Object.keys(titleUpdates)) {
                    if (altLower.includes(key)) {
                        matchedKey = key;
                        break;
                    }
                }
            }
            
            if (matchedKey) {
                const u = titleUpdates[matchedKey];
                item.links = [
                    { "href": u.play, "text": "Play Store" },
                    { "href": u.web, "text": "Website" }
                ];
            } else {
                item.links = [
                    { "href": "#", "text": "Play Store" },
                    { "href": "#", "text": "Website" }
                ];
            }
        }
    }
}

fs.writeFileSync(jsonPath, JSON.stringify(data, null, 2), 'utf8');
console.log("Updated data written to UiUxData.json successfully.");
