import express from "express" // npm i express
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

let cart = [];
let favorites = [];

let listings = [
    {
        ID: 1,
        Name: "Černý gamepad pro Xbox 360 S",
        ImageLink: "https://i5.walmartimages.com/seo/Xbox-360-Video-Game-Console-Wireless-Remote-Controller-Black-Walmart-com_e4ebebab-175f-45a5-82a5-5b9927d93525_1.b89bec66632fe43719fd595857c90c51.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF",
        Description: "Oficiální černý kontrolér Xbox 360 Slim.",
        Price: 250,
    },
    {
        ID: 2,
        Name: "Hra Prototype na Playstation 3",
        ImageLink: "https://cdn.awsli.com.br/2500x2500/138/138431/produto/13527427/bd2bdc606d.jpg",
        Description: "Ve hře Prototype ovládáte amnéziaka a měňavce Alexe Mercera, který se snaží zastavit šíření viru zvaného Blacklight v Manhattanu, jenž mění lidi v mocné a násilné monstra.",
        Price: 125,
    },
    {
        ID: 3,
        Name: "Komponentní kabel pro Xbox 360",
        ImageLink: "https://www.konzole-store.cz/resize/e/440/440/files/16317-xbox-360-komponentni-kabel-a.jpg",
        Description: "Komponentní kabel pro Xbox 360 pro kvalitní připojení k televizím podporujícím komponentní vstup.",
        Price: 370,
    },
    {
        ID: 4,
        Name: "Konzole Xbox 360 Halo 3 edice",
        ImageLink: "https://uk.static.webuy.com/product_images/Gaming/Xbox%20360%20Consoles/SXB3XBOE009_l.jpg",
        Description: "Xbox 360 Halo 3 edice je americká herní konzole od Microsoftu typu phat. Součástí je jeden ovladač a speciální design inspirovaný hrou Halo 3.",
        Price: 3500,
    },
    {
        ID: 5,
        Name: "Kompletní černý housing shell pro gamepad Playstation 3",
        ImageLink: "https://m.media-amazon.com/images/I/61QrBqVIXcL.jpg",
        Description: "Kompletní černý kryt pro gamepad PS3, ideální pro opravu nebo vylepšení vzhledu ovladače.",
        Price: 285,
    },
    {
        ID: 6,
        Name: "Resident Evil: The Umbrella Chronicles + Light Gun na Wii (nové)",
        ImageLink: "https://static.fnac-static.com/multimedia/0/Images/BE/NR/f4/d0/6a/7000308/1507-1/tsp20250217133539/RESIDENT-EVIL-THE-UMBRELLA-CHRONICLES-BUNDLE-MIX-WII.jpg",
        Description: "Ve hře odhalíte zásahy korporace Umbrella v průběhu série Resident Evil prostřednictvím vyprávění Alberta Weskera, bývalého vědce Umbrelly, a skrývaných dokumentů o tajných motivech a činech organizace.",
        Price: 550,
    },
    {
        ID: 7,
        Name: "Darksiders na Xbox 360 (zánovní)",
        ImageLink: "https://cdn.awsli.com.br/2500x2500/138/138431/produto/7988797/aae32f8e8d.jpg",
        Description: "Série se odehrává na postapokalyptické Zemi, kde lidstvo čelí téměř vyhynutí a andělé vedou marný boj proti démonickým hordám o nadvládu nad světem. Mezi nimi jsou Čtyři jezdci Apokalypsy, poslední z Nephilim, kteří mají za úkol přinést rovnováhu vesmíru.",
        Price: 190,
    },
    {
        ID: 8,
        Name: "Černý Playstation 2 s gamepadem a modrým stojanem",
        ImageLink: "https://www.therage.ie/cdn/shop/products/PS2_in_box__39849.1643918849_250x.jpg?v=1668187039",
        Description: "Sony PlayStation 2 je japonská herní konzole druhé generace, v černé barvě. Součástí je jeden gamepad a modrý stojan.",
        Price: 2999,
    }

]

app.get("/api/cart", (request, response) => {
    response.json(cart);
});

app.get("/api/favorites", (request, response) => {
    response.json(favorites);
});


app.get("/api/listings", (request, response) => {
    response.json(listings);
});

app.post("/api/addToCart", (req, res) => {
    let ID = req.body.ID;
    let item = { ...listings.find(i => i.ID === ID) };

    let newId = Math.max(...cart.map(item => item.ID)) + 1;

    if(newId === -Infinity){
        item.ID = 1;
    }else{
        item.ID = newId;
    }

    cart.push(item)

});

app.post("/api/addToFavs", (req, res) => {
    let ID = req.body.ID;
    let item = { ...listings.find(i => i.ID === ID) };

    let newId = Math.max(...favorites.map(item => item.ID)) + 1;

    if(newId === -Infinity){
        item.ID = 1;
    }else{
        item.ID = newId;
    }

    favorites.push(item)

});

app.post("/api/delete", (req, res) => {
    let ID = req.body.ID;
    cart = cart.filter(item => item.ID !== ID);

});

app.post("/api/deleteFav", (req, res) => {
    let ID = req.body.ID;
    favorites = favorites.filter(item => item.ID !== ID);

});

app.listen("3002")