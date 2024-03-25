import React, {useState} from "react";


const Legal = () => {
    const [toggle, setToggle] = useState(false)
    const date = new Date().getFullYear()
    return (
        <>
            {
                toggle
                && <div className="fixed top-[5rem] bottom-[4rem] left-4 right-4 max-w-[768px] bg mx-auto text-lg overflow-hidden outline outline-1 rounded">
                    <article className="article shadow-2xl whitespace-wrap rounded-2xl flex flex-col h-full bg-stone-800 border-0">
                        <h3 className="article-title uppercase text-left">
                            Mentions Légales
                            <button className="outline outline-1 shadow rounded-2xl px-2 float-right" onClick={(e) => setToggle(false)}>X</button>
                        </h3>
                        <hr className="separator"/>
                        <div className="article-content text-justify max-w-full overflow-auto break-words text-white">
                            {/* Contenu des mentions légales */}
                            <h2 className="text-xl underline">Propriétaire du site :</h2>
                            <div>Nom : Alexis Fritsch</div>
                            <div>Adresse : 36 rue de Laneufville 54910 , VALLEROY</div>
                            <div>Email : <a href="mailto:alexis.fritsch68@gmail.com">alexis.fritsch68@gmail.com</a>
                            </div>
                            <hr className="separator opacity-50"/>
                            <h2 className="text-xl underline">Hébergeur :</h2>
                            <div>Nom : SCALEWAY</div>
                            <div>Adresse : 8 rue de la Ville l’Evêque, 75008 Paris</div>
                            <hr className="separator opacity-50"/>
                            <h2 className="text-xl underline">Propriété intellectuelle :</h2>
                            <div>Le contenu de ce site est libre de réutilisation, sauf indication contraire.
                                Vous êtes autorisé à utiliser, copier, modifier et distribuer le contenu à des fins
                                non commerciales, à condition de mentionner la source.
                            </div>
                            <hr className="separator opacity-50"/>
                            <h2 className="text-xl underline">Utilisation des données personnelles :</h2>
                            <p>Aucune donnée personnelle n'est collectée ni utilisée sur ce site.</p>
                            <hr className="separator opacity-50"/>
                            <h2 className="text-xl underline">Cookies :</h2>
                            <p>Ce site utilise des cookies uniquement pour des fonctionnalités spécifiques et ne
                                collecte pas de données personnelles.
                            </p>
                            <hr className="separator opacity-50"/>
                            <p>© {date} Tous droits réservés.</p>
                        </div>
                    </article>
                </div>
            }
            <button className="absolute" onClick={(e) => setToggle(!toggle)}>Mentions légales</button>
        </>
    )
}

export default Legal;