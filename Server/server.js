import express from "express"
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

let cart = [];
let favorites = [];

let listings = [
    {
        ID: 1,
        Name: "Černý gamepad pro Xbox 360 S (nové)",
        ImageLink: "https://i5.walmartimages.com/seo/Xbox-360-Video-Game-Console-Wireless-Remote-Controller-Black-Walmart-com_e4ebebab-175f-45a5-82a5-5b9927d93525_1.b89bec66632fe43719fd595857c90c51.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF",
        Description: "Oficiální bezdrátový ovladač pro Xbox 360 Slim v černém provedení. Ergonomický design s plnou podporou všech funkcí konzole včetně vibrací.",
        Price: 250,
    },
    {
        ID: 2,
        Name: "Hra Prototype na Playstation 3 (použité)",
        ImageLink: "https://cdn.awsli.com.br/2500x2500/138/138431/produto/13527427/bd2bdc606d.jpg",
        Description: "Akční hra s otevřeným světem pro PlayStation 3. Hrajete za Alexe Mercera, který se snaží odhalit svou minulost uprostřed virové apokalypsy v New Yorku.",
        Price: 125,
    },
    {
        ID: 3,
        Name: "Komponentní kabel pro Xbox 360 (nové)",
        ImageLink: "https://www.konzole-store.cz/resize/e/440/440/files/16317-xbox-360-komponentni-kabel-a.jpg",
        Description: "Oficiální komponentní kabel pro Xbox 360 umožňující připojení konzole k televizoru přes analogový komponentní vstup. Podporuje rozlišení až 1080i.",
        Price: 370,
    },
    {
        ID: 4,
        Name: "Konzole Xbox 360 Halo 3 edice (zánovní)",
        ImageLink: "https://uk.static.webuy.com/product_images/Gaming/Xbox%20360%20Consoles/SXB3XBOE009_l.jpg",
        Description: "Limitovaná edice konzole Xbox 360 s unikátním designem inspirovaným hrou Halo 3. Balení obsahuje jeden bezdrátový ovladač ve speciálním provedení.",
        Price: 3500,
    },
    {
        ID: 5,
        Name: "Kompletní černý housing shell pro gamepad Playstation 3 (nové)",
        ImageLink: "https://m.media-amazon.com/images/I/61QrBqVIXcL.jpg",
        Description: "Kompletní náhradní kryt pro ovladač DualShock 3 v černé barvě. Vhodný pro opravu poškozeného ovladače nebo změnu jeho vzhledu.",
        Price: 200,
    },
    {
        ID: 6,
        Name: "Resident Evil: The Umbrella Chronicles + Light Gun na Wii (nové)",
        ImageLink: "https://static.fnac-static.com/multimedia/0/Images/BE/NR/f4/d0/6a/7000308/1507-1/tsp20250217133539/RESIDENT-EVIL-THE-UMBRELLA-CHRONICLES-BUNDLE-MIX-WII.jpg",
        Description: "Balení obsahuje střílečku Resident Evil: The Umbrella Chronicles pro Nintendo Wii a světelnou pistoli. Projděte si klíčové momenty série očima Alberta Weskera.",
        Price: 550,
    },
    {
        ID: 7,
        Name: "Darksiders na Xbox 360 (zánovní)",
        ImageLink: "https://cdn.awsli.com.br/2500x2500/138/138431/produto/7988797/aae32f8e8d.jpg",
        Description: "Akční RPG zasazené do postapokalyptické Země, kde hrajete za jednoho ze čtyř jezdců Apokalypsy. Zánovní stav, minimální známky používání.",
        Price: 190,
    },
    {
        ID: 8,
        Name: "Černý Playstation 2 s gamepadem a modrým stojanem (použité)",
        ImageLink: "https://www.therage.ie/cdn/shop/products/PS2_in_box__39849.1643918849_250x.jpg?v=1668187039",
        Description: "Japonská herní konzole druhé generace od Sony v černém provedení. Balení obsahuje jeden gamepad DualShock 2 a modrý vertikální stojan.",
        Price: 2999,
    },
    {
        ID: 9,
        Name: "The House of the Dead: Overkill Extended Cut (nové)",
        ImageLink: "https://cdn.awsli.com.br/2500x2500/417/417035/produto/32223856/559eee5e8f.jpg",
        Description: "Střílečka na kolejnicích pro PlayStation 3 s podporou PlayStation Move. Rozšířená verze arkádového hitu plná zombie, brutální akce a béčkového humoru.",
        Price: 160,
    },
    {
        ID: 10,
        Name: "GameCube Resident Evil 4 (použité)",
        ImageLink: "https://images.tcdn.com.br/img/img_prod/1437389/nintendo_game_cube_resident_evil_4_limited_editi_1_20260114204020_293f97ced5c5.png",
        Description: "Limitovaná edice konzole Nintendo GameCube s předinstalovanou hrou Resident Evil 4. Konzole je v použitém stavu, plně funkční.",
        Price: 1500,
    }
];

app.get("/api/cart", (req, res) => {
    res.json(cart);
});

app.get("/api/favorites", (req, res) => {
    res.json(favorites);
});

app.get("/api/listings", (req, res) => {
    res.json(listings);
});

app.post("/api/addToCart", (req, res) => {
    let ID = req.body.ID;
    let existing = cart.find(i => i.ID === ID);
    if (existing) {
        existing.quantity += 1;
    } else {
        let item = { ...listings.find(i => i.ID === ID) };
        let newId = Math.max(...cart.map(item => item.cartID), 0) + 1;
        item.cartID = newId;
        item.quantity = 1;
        cart.push(item);
    }
    res.json({ success: true });
});

app.post("/api/addToFavs", (req, res) => {
    let ID = req.body.ID;
    let existing = favorites.find(i => i.ID === ID);
    if (existing) {
        res.json({ success: false, message: "Already in favorites" });
        return;
    }
    let item = { ...listings.find(i => i.ID === ID) };
    let newId = Math.max(...favorites.map(item => item.favID), 0) + 1;
    item.favID = newId;
    favorites.push(item);
    res.json({ success: true });
});

app.post("/api/delete", (req, res) => {
    let ID = req.body.cartID;
    let existing = cart.find(i => i.cartID === ID);
    if (existing && existing.quantity > 1) {
        existing.quantity -= 1;
    } else {
        cart = cart.filter(item => item.cartID !== ID);
    }
    res.json({ success: true });
});

app.post("/api/deleteFav", (req, res) => {
    let ID = req.body.favID;
    favorites = favorites.filter(item => item.favID !== ID);
    res.json({ success: true });
});

app.listen("3002");