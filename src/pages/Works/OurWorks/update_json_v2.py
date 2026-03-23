import json

json_path = r"d:\kryoss\Kryoss-Work\src\pages\Works\OurWorks\UiUxData.json"

updates = {
    # Education
    "Vidyakul": {"play": "https://play.google.com/store/apps/details?id=com.vidyakul", "web": "https://vidyakul.com/"},
    "Classklap": {"play": "https://play.google.com/store/apps/details?id=com.vja.classclap", "web": "https://classclap.vn/en/"},
    "Study 247": {"play": "https://play.google.com/store/apps/details?id=com.stdy24x7", "web": "https://www.study24x7.com/"},
    "Smart keda": {"play": "https://play.google.com/store/apps/details?id=smk.smartkeeda", "web": "https://www.smartkeeda.com/"},
    "Tutllelus": {"play": "https://play.google.com/store/games?hl=en_IN", "web": "https://tutellus.com/"},
    "Study niti": {"play": "https://play.google.com/store/apps/details?id=com.learningnitiapp.android", "web": "https://www.studyniti.com/"},
    
    # Healthcare
    "app": {"play": "https://play.google.com/store/apps/details?id=cc.pacer.androidapp", "web": "https://www.mypacer.com/"}, # This matches Pedometer Pacer, myUpchar because alt is 'app' or '' but let's use title matching
}

title_updates = {
    # Education
    "Vidyakul": {"play": "https://play.google.com/store/apps/details?id=com.vidyakul", "web": "https://vidyakul.com/"},
    "ClassKlap": {"play": "https://play.google.com/store/apps/details?id=com.vja.classclap", "web": "https://classclap.vn/en/"},
    "Study24x7": {"play": "https://play.google.com/store/apps/details?id=com.stdy24x7", "web": "https://www.study24x7.com/"},
    "Smartkeeda": {"play": "https://play.google.com/store/apps/details?id=smk.smartkeeda", "web": "https://www.smartkeeda.com/"},
    "Tutellus": {"play": "https://play.google.com/store/games?hl=en_IN", "web": "https://tutellus.com/"},
    "StudyNiti": {"play": "https://play.google.com/store/apps/details?id=com.learningnitiapp.android", "web": "https://www.studyniti.com/"},

    # Healthcare
    "Pedometer": {"play": "https://play.google.com/store/apps/details?id=cc.pacer.androidapp", "web": "https://www.mypacer.com/"},
    "myUpchar": {"play": "https://play.google.com/store/apps/details?id=com.myupchar.user", "web": "https://www.myupchar.com/en"},
    "Truemeds": {"play": "https://play.google.com/store/search?q=truemeds&c=apps", "web": "https://www.truemeds.in/"},
    "Fitify": {"play": "https://play.google.com/store/apps/details?id=com.fitifyworkouts.bodyweight.workoutapp", "web": "https://gofitify.com/"},
    "NH Care": {"play": "https://play.google.com/store/apps/details?id=org.narayanahealth.nhcare", "web": "https://www.narayanahealth.org/"},
    "Amwell": {"play": "https://play.google.com/store/games?hl=en_IN", "web": "https://business.amwell.com/"},

    # ECommerce
    "Adorawe": {"play": "https://play.google.com/store/apps/details?id=com.ador.android", "web": "https://www.ador.com/"},
    "Cartlow": {"play": "https://play.google.com/store/apps/details?id=com.cartlow.android", "web": "https://www.cartlow.com/help/about-us"},
    "Jazp": {"play": "https://play.google.com/store/apps/details?id=www.jazp.com.jazp", "web": "https://uae.jazp.com/ae-en/"},
    "GeekBuying": {"play": "https://play.google.com/store/apps/details?id=com.geekbuy.geekbuying", "web": "https://www.geekbuying.com/help/student_discount"},
    "China Gadgets": {"play": "https://play.google.com/store/apps/details?id=de.appetites.chinagadgets", "web": "https://www.china-gadgets.de/"},
    "RunwaySale": {"play": "https://play.google.com/store/apps/details?id=io.flatcircle.runwaysaleandroid", "web": "https://myrunway.co.za/main/customer/account/login"},
    "FARFETCH": {"play": "https://play.google.com/store/apps/details?id=com.farfetch.farfetchshop", "web": "https://www.farfetch.com/in/"},
    
    # Entertainment
    "Watcho": {"play": "https://play.google.com/store/apps/details?id=com.watcho", "web": "https://www.watcho.com/"},
    "Rabbit": {"play": "https://play.google.com/store/apps/details?id=com.rabbit.mart", "web": "https://rabbitmovies.app/"},
    "Singapore Dating": {"play": "https://play.google.com/store/apps/details?id=com.innovate.SingaporeSocial", "web": "https://singapore.innovatedating.com/"},
    "Hong Kong Social": {"play": "https://play.google.com/store/apps/details?id=com.innovate.HongKongSocial", "web": "https://hongkong.innovatedating.com/"},
    "Indonesia Social": {"play": "https://play.google.com/store/apps/details?id=com.innovate.IndonesiaSocial", "web": "https://indo.innovatedating.com/"},
    "Hobi": {"play": "https://play.google.com/store/apps/details?id=com.hobi", "web": "http://hobi.com"},
    "Here TV": {"play": "https://play.google.com/store/apps/details?id=com.heremedia.heretv", "web": "https://www.heremedia.com/"},
    "DocuBay": {"play": "https://play.google.com/store/apps/details?id=com.epic.docubay", "web": "https://www.docubay.com/"},
    "HilalPlay": {"play": "https://play.google.com/store/apps/details?id=com.hilal.play", "web": "https://hilalplay.com/"},
    "Kindda": {"play": "https://play.google.com/store/apps/details?id=com.kindredsoul.kindredapp", "web": "https://kindda.app/"},
    "Vidol": {"play": "https://play.google.com/store/apps/details?id=com.inkriver.vidle", "web": "https://vidol.tv/"},

    # Food & Drinks
    "BAZAR": {"play": "https://play.google.com/store/apps/details?id=com.smartbazarin.website", "web": "https://reliancesmartbazaar.com/"},
    "Groxery": {"play": "https://play.google.com/store/apps/details?id=kiryana.store.kiryanastore", "web": "#"}, # Wait, original had store but no web. Prompt says "Play Store: " (blank), "web link: " (blank)
    "Kifayat": {"play": "https://play.google.com/store/apps/details?id=com.mm.kifayatbazaar", "web": "https://apps.apple.com/in/app/kifayat-online/id1436810493"},
    "AVEMART": {"play": "https://play.google.com/store/apps/details?id=com.ricomputech.avemartapp", "web": "https://play.google.com/store/apps/details?id=com.ricomputech.avemartapp"},
    "Untappd": {"play": "https://play.google.com/store/apps/details?id=com.untappdllc.app", "web": "https://play.google.com/store/apps/details?id=com.untappdllc.app"},
    "Eatiko": {"play": "https://play.google.com/store/apps/details?id=io.eatiko.main", "web": "https://play.google.com/store/apps/details?id=io.eatiko.main"},
    "Heritage TUCH": {"play": "https://play.google.com/store/apps/details?id=com.heritage.agent", "web": "https://play.google.com/store/apps/details?id=com.heritage.agent"},
    "Daily Moo": {"play": "https://play.google.com/store/apps/details?id=com.heritage.agent", "web": "https://play.google.com/store/apps/details?id=com.heritage.agent"},
    "Meatigo": {"play": "https://play.google.com/store/apps/details?id=com.urbanpiper.meatigo", "web": "https://play.google.com/store/apps/details?id=com.urbanpiper.meatigo"},
    "Superfoods": {"play": "https://play.google.com/store/apps/details?id=com.mobeasyapp.app591815334080", "web": "https://play.google.com/store/apps/details?id=com.mobeasyapp.app591815334080"},

    # Tour & Travel
    "KEYROOMS": {"play": "https://keyrooms.org/", "web": "https://keyrooms.org/"},
    "BreviStay": {"play": "https://play.google.com/store/apps/details?id=com.brevistay.customer", "web": "https://www.brevistay.com/"},
    "Samaya Rooms": {"play": "https://thesamaya.in/", "web": "https://thesamaya.in/"},
    "Travel Boutique": {"play": "https://play.google.com/store/apps/details?id=com.tbolite.app", "web": "https://play.google.com/store/apps/details?id=com.tbolite.app"}, # From original JSON "Travel Boutique Online"
    "Riyaconnect": {"play": "https://play.google.com/store/apps/details?id=com.riyaconnect.android", "web": "https://www.riya.travel/"},
    "Flyin.com": {"play": "https://play.google.com/store/apps/details?id=com.flyin.bookings", "web": "https://www.flyin.com/ar"},
    "Tajawal": {"play": "https://ae.almosafer.com/en", "web": "https://ae.almosafer.com/en"},
    "Rehlat": {"play": "https://play.google.com/store/apps/details?id=com.app.rehlat", "web": "https://www.rehlat.com/"},
    "TripViewL": {"play": "https://play.google.com/store/apps/details?id=com.grofsoft.tripview", "web": "https://tripview.com.au/"},
    "TripSource": {"play": "https://play.google.com/store/apps/details?id=com.mttnow.android.bcd.production", "web": "https://tripsource.com/"},
    "Afbudsrejser": {"play": "https://www.afbudsrejser.dk/", "web": "https://www.afbudsrejser.dk/"},

    # On-Demand
    "OyeBusy": {"play": "https://play.google.com/store/apps/details?id=ca.oyetoronto", "web": "https://play.google.com/store/apps/details?id=ca.oyetoronto"},
    "Laundryheap": {"play": "https://play.google.com/store/apps/details?id=com.encureit.laundryheap", "web": "https://play.google.com/store/apps/details?id=com.encureit.laundryheap"},
    "24Task": {"play": "https://discount.24task.com/", "web": "https://discount.24task.com/"},
    "Akshayakalpa": {"play": "https://play.google.com/store/apps/details?id=com.mrmilkman.akshayakalpa", "web": "https://play.google.com/store/apps/details?id=com.mrmilkman.akshayakalpa"},
    "OurFlat": {"play": "https://play.google.com/store/apps/details?id=com.ourflat.app", "web": "https://play.google.com/store/apps/details?id=com.ourflat.app"},
    "Shoopy": {"play": "https://play.google.com/store/apps/details?id=in.shoopy.business", "web": "https://in.shoopy.business"}, # Prompt says "Play Store: ...", "Web link: https://in.shoopy.business"
    "VegEase": {"play": "https://play.google.com/store/apps/details?id=com.vegease", "web": "https://vegease.in/?srsltid=AfmBOoohM45rXOTMN9F8McI26Sou4H5fexckP4FK3T1WItnotnr6Q3j1"},
    "ID Photo": {"play": "https://play.google.com/store/apps/details?id=idphoto.passport.portrait", "web": "https://www.idphotodiy.com/"},
}

# Apply to json
with open(json_path, 'r', encoding='utf-8') as f:
    data = json.load(f)

for section, items in data.get('sections', {}).items():
    for item in items:
        # Match from title_updates
        matched_key = None
        for key in title_updates.keys():
            if key.lower() in item.get('titleText', '').lower() or key.lower() in item.get('titleHtml', '').lower():
                matched_key = key
                break
        
        # fallback to alt
        if not matched_key:
            for key in title_updates.keys():
                if key.lower() in item.get('alt', '').lower():
                    matched_key = key
                    break

        if matched_key:
            u = title_updates[matched_key]
            item['links'] = [
                {
                    "href": u['play'],
                    "text": "Play Store"
                },
                {
                    "href": u['web'],
                    "text": "Website"
                }
            ]
        else:
            # Default fallback format
            item['links'] = [
                {
                    "href": "#",
                    "text": "Play Store"
                },
                {
                    "href": "#",
                    "text": "Website"
                }
            ]

with open(json_path, 'w', encoding='utf-8') as f:
    json.dump(data, f, indent=4, ensure_ascii=False)

print("Updated data written to UiUxData.json")
