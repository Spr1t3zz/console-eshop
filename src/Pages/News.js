import Header from "../Components/Header.js";
import Navigation from "../Components/Navigation.js";
import Footer from "../Components/Footer.js";

function News() {
    return (
        <div className="body-container">
            <Header />
            <Navigation />
            <div className="product-container">
                <div className="news-box">
                    <iframe id="commercial"
                            style={{ width: '100%' }}
                            height="500"
                            src="https://www.youtube.com/embed/1HiPGdQY9SU?si=Mc6wlbH2C0sC9r64&start=14&autoplay=1&mute=1&controls=0&disablekb=1&modestbranding=1&rel=0"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                    />
                    <div className="news-cards">
                        <div className="news-card">
                            <img src="https://i0.wp.com/aggronaut.com/wp-content/uploads/2020/09/TheDVDEra.jpg?resize=880%2C457&ssl=1" alt="Retro turnaj 2026" style={{ height: '140px', marginBottom: '8px' }} />
                            <h4>Retro turnaj 2026</h4>
                            <p>Retro herní turnaj se bude konat 18. 5. 2026 v 17:00. Více informací najdete na <a href="https://cibienscorner.cz" target="_blank" rel="noreferrer" style={{ color: '#5f9e1a' }}>cibienscorner.cz</a>. Soutěžit se bude v klasikách jako Halo 2, Guitar Hero a Mario Kart. Turnaj je otevřený pro všechny, vstup zdarma. Vítěz odnese retro balíček plný her a příslušenství.</p>
                        </div>
                        <div className="news-card">
                            <img src="https://press-start.com.au/wp-content/uploads/2015/06/4f928e22-875a-4d85-8018-009770067895-1200x720.jpg" alt="Nové produkty" style={{ height: '140px', marginBottom: '8px' }} />
                            <h4>Připravujeme nové produkty</h4>
                            <p>Brzy naskladníme PlayStation 3 Move motion controller, další příslušenství pro Nintendo Wii a nové herní tituly pro retro konzole. Chystáme také rozšíření nabídky o GameCube a originální Xbox příslušenství. Sledujte novinky na našem webu nebo nás najděte na Facebooku a Instagramu pod názvem <b>RetroVšem</b>.</p>
                        </div>
                        <div className="news-card">
                            <img src="https://cdn.mos.cms.futurecdn.net/ob6dq4RTSzpnnFT8ajNSnB.jpg" alt="Opravna konzolí" style={{ height: '140px', marginBottom: '8px' }} />
                            <h4>Stalo se něco s vaší konzolí?</h4>
                            <p>Nově spolupracujeme s obchodem Konzole-příslušenství. Specializují se na opravu Red Ring of Death, poškozené mechaniky, optiky, Kinectu, přehřívání a rozbitých ovladačů. Stačí nás kontaktovat a domluvíme se na předání. Více na <a href="https://www.konzole-prislusenstvi.cz/c/xbox-360-prislusebstvi-nahradni-dily-servis/xbox-360-servis-konzoli-nahradni-dily" target="_blank" rel="noreferrer" style={{ color: '#5f9e1a' }}>konzole-prislusenstvi.cz</a>.</p>
                        </div>

                    </div>

                    <div className="news-cards">
                        <div className="news-card">
                            <img src="https://file.garden/agGlWxEnpRn5fc3C/Untitled%20design%20(1).png" alt="Časopis zdarma" style={{ width: '860px', marginBottom: '8px' }} />
                            <h4>Časopis k vašemu prvnímu nákupu</h4>
                            <p>K prvnímu nákupu přidáme časopis zdarma. Ke konzolím Xbox přihodíme Official Xbox Magazine, k PlayStationu PlayStation Official Magazine a k Nintendo Wii časopis Nintendo Power. Pamatujete si, jak jste jako děti listovali stránkami plnými triků, cheatů a plakátů vašich oblíbených her? Ten pocit se teď vrací.</p>
                        </div>


                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default News;