// Tableau de données spécifiques pour chaque carré
const stores = [
    
    
    
        {
            "id": 1,
            "name": "Intermarché",
            "logo": "https://storage.googleapis.com/glide-prod.appspot.com/uploads-v2/R2w6g3IgMRmRofVSYQaC/pub/L5FPQPE7Ht6dHpWx0bBo.png",
            "catégorie": "Alimentaire",
            "description": "Intermarché est une enseigne de grande distribution française fondée par Jean-Pierre Le Roch. Créée par le groupement Les Mousquetaires en 1969, sous le nom EX offices de distribution, elle deviendra Intermarché en 1972. Le siège social est situé à Paris.20 oct. 2021",
            "drive": "https://www.intermarche.com/boutique/1332?gclsrc=aw.ds&gclid=CjwKCAjwyJqzBhBaEiwAWDRJVElraHbNIJGCiTzVzdZReSfzksdD1mw3uqirXLtcfQMqL0laCiHPiRoC2d0QAvD_BwE",
            "position": "https://www.google.fr/maps/search/intermarch%C3%A9/@49.1762271,1.1860264,12z/data=!3m1!4b1?entry=ttu",
            "catalogue": "https://www.intermarche.com/catalogues/",
            "backgroundColor": "grey"
        },
        {
            "id": 2,
            "name": "Leclerc",
            "logo": "https://storage.googleapis.com/glide-prod.appspot.com/uploads-v2/R2w6g3IgMRmRofVSYQaC/pub/1GOdWZQd3br4y1FsfuyD.jpg",
            "catégorie": "Alimentaire",
            "description": "E.Leclerc est une coopérative de commerçants et une enseigne de grande distribution à prédominance alimentaire d'origine française, à partir du premier magasin ouvert par Édouard Leclerc en 1948, elle regroupe aujourd'hui des magasins indépendants.",
            "drive": "https://www.leclercdrive.fr/",
            "position": "https://www.google.fr/maps/search/leclerc/@49.176393,1.1860263,12z/data=!3m1!4b1?entry=ttu",
            "catalogue": "https://www.e.leclerc/prospectus?type=01",
            "backgroundColor": "grey"
        },
        {
            "id": 3,
            "name": "Carrefour",
            "logo": "https://storage.googleapis.com/glide-prod.appspot.com/uploads-v2/R2w6g3IgMRmRofVSYQaC/pub/Ff7pn09TJ6W7GHRbxdIT.png",
            "catégorie": "Alimentaire",
            "description": "Carrefour est un groupe français du secteur de la grande distribution, pionnier du concept d'hypermarché en 1963.",
            "drive": "https://www.carrefour.fr/services/drive",
            "position": "https://www.google.fr/maps/search/carrefour/@49.1765588,1.1860262,12z/data=!3m1!4b1?entry=ttu",
            "catalogue": "https://www.carrefour.fr/catalogue/",
            "backgroundColor": "grey"
        },
        {
            "id": 4,
            "name": "Lidl",
            "logo": "https://storage.googleapis.com/glide-prod.appspot.com/uploads-v2/R2w6g3IgMRmRofVSYQaC/pub/D9ba8lwxPh21LlX24a8x.png",
            "catégorie": "Alimentaire",
            "description": "Entreprise allemande de grande distribution créée en 1930, après s'être fait connaître en Allemagne, Lidl s'est peu à peu exportée pour être présente aujourd'hui au sein de 25 pays différents. Longtemps considéré comme un ancien magasin de hard-discount, la marque se transforme progressivement en soft-discount.",
            "drive": "https://sites.google.com/view/insisponible/home",
            "position": "https://www.google.fr/maps/search/Lidl/@49.1767246,1.1860261,12z/data=!3m1!4b1?entry=ttu",
            "catalogue": "https://www.lidl.fr/c/catalogues-en-ligne/s10017753",
            "backgroundColor": "grey"
        },
        {
            "id": 5,
            "name": "Auchan",
            "logo": "https://storage.googleapis.com/glide-prod.appspot.com/uploads-v2/R2w6g3IgMRmRofVSYQaC/pub/M4sFwabW0tdUsDAIeon0.png",
            "catégorie": "Alimentaire",
            "description": "Auchan Retail est un groupement rassemblant des hypermarchés, supermarchés et commerce de proximité. C'est le 11è groupe alimentaire mondial (source : Deloitte, 2018) tout en restant une entreprise familiale, fière de ses valeurs de confiance, d'excellence et d'ouverture.",
            "drive": "https://www.auchan.fr/magasins/drive/le-mans/s-948?source=google&medium=sea&utm_campaign=9307333182&term=auchan%20drive%20le%20mans&custparamtrafic=9307333182-129357586734-566812247656&qt_id=qid_gad_c9307333182_g129357586734_a566812247656&gclid=CjwKCAjwjaWoBhAmEiwAXz8DBfjAvwJOsIFZt_rJhAVMVWMyD04r9MbdMlSCcmczwHXZNfGyGyC6ixoCQJQQAvD_BwE&gclsrc=aw.ds",
            "position": "https://www.google.fr/maps/search/Auchan/@49.1768904,1.186026,12z/data=!3m1!4b1?entry=ttu",
            "catalogue": "https://catalogue.auchan.fr/special-calendrier-hyper?source=google&medium=sea&utm_campaign=9766913935&term=auchan%20catalogue&custparamtrafic=9766913935-98611223974-671934982940&qt_id=qid_gad_c9766913935_g98611223974_a671934982940&gclid=CjwKCAjwjaWoBhAmEiwAXz8DBRlJ0-bV6KpCSb2gp5nV6oPGVFOwPF0BaPpCCGtkrqq7LUEqyfJD5RoCrxIQAvD_BwE&gclsrc=aw.ds#nummag=1213&v=VU&l=fr",
            "backgroundColor": "grey"
        },
        {
            "id": 6,
            "name": "Cora",
            "logo": "https://storage.googleapis.com/glide-prod.appspot.com/uploads-v2/R2w6g3IgMRmRofVSYQaC/pub/5BceEAc9u6UlLNLjLA8n.png",
            "catégorie": "Alimentaire",
            "description": "Cora est une entreprise familiale décentralisée et organisée autour des 61 magasins. Les directeurs et leurs collaborateurs sont fortement responsabilisés. Ils adaptent leur hypermarché aux besoins du marché local. Les services centraux (centrale d'achat, marketing, logistique…)",
            "drive": "https://www.cora.fr/?utm_campaign=AWS%20%7C%20Search%20-%20HM%20-%20Fil%20Rouge%20%7C%20GEN&utm_source=google&utm_medium=cpc&utm_content=marquage_manuel&gclid=CjwKCAjwjaWoBhAmEiwAXz8DBbQdNNiKx6zRFeSBnS1yKW5J_AAhoEms16xNstArKRO60y4cvNvNThoCclYQAvD_BwE",
            "position": "https://www.google.fr/maps/search/Cora/@49.2514108,0.8522802,10z?entry=ttu",
            "catalogue": "https://www.cora.fr/prospectus",
            "backgroundColor": "grey"
        },
        {
            "id": 7,
            "name": "Aldi",
            "logo": "https://storage.googleapis.com/glide-prod.appspot.com/uploads-v2/R2w6g3IgMRmRofVSYQaC/pub/HlGH4zBFh7xiFuO5ANDO.png",
            "catégorie": "Alimentaire",
            "description": "C'est une société anonyme dont le siège social se trouve en Île-De-France. Aldi, c'est avant tout une entreprise familiale qui appartient à Anna Albrecht depuis 1916. Les fils Albrecht reprennent la société et décident d'appliquer des réductions sur les prix de vente, en 1946. Le hard-discount est né.",
            "drive": "https://sites.google.com/view/insisponible/home",
            "position": "https://www.google.fr/maps/search/ALDI/@49.2513695,0.8522787,10z/data=!3m1!4b1?entry=ttu",
            "catalogue": "https://www.aldi.fr/catalogues.html",
            "backgroundColor": "grey"
        },
        {
            "id": 8,
            "name": "Intersport",
            "logo": "https://storage.googleapis.com/glide-prod.appspot.com/uploads-v2/R2w6g3IgMRmRofVSYQaC/pub/i073BxtylXmsscFo7rLd.webp",
            "catégorie": "Sport",
            "description": "INTERSPORT est une coopérative française composée d'entrepreneurs indépendants engagés au quotidien pour rendre le sport plus accessible, plus solidaire et plus durable. En France, ce sont 813 magasins et 15 000 collaborateurs qui œuvrent depuis bientôt 100 ans pour toujours mieux vivre ensemble.",
            "drive": "https://sites.google.com/view/insisponible/home",
            "position": "https://www.google.fr/maps/search/Intersport/@49.2513282,0.8522772,10z/data=!3m1!4b1?entry=ttu",
            "catalogue": "https://www.intersport.fr/ope/rentree-de-la-mode/?utm_source=google&utm_medium=cpc&gclid=CjwKCAjwjaWoBhAmEiwAXz8DBUYyezqJ-FIIQdbaCMgTTE_ahWQWjXVWBIMF35LMsY0to-OycS8QRBoCG14QAvD_BwE",
            "backgroundColor": "grey"
        },
        {
            "id": 9,
            "name": "Decathlon",
            "logo": "https://storage.googleapis.com/glide-prod.appspot.com/uploads-v2/R2w6g3IgMRmRofVSYQaC/pub/mS0f5piC6uej5al6aUKp.png",
            "catégorie": "Sport",
            "description": "DECATHLON rassemble deux activités : la conception de produits sportifs ainsi que la vente physique et en ligne. Notre management repose sur le développement et l'enrichissement de tous les femmes et les hommes de l'entreprise au travers de nos valeurs communes : Vitalité, Responsabilité, Générosité et Authenticité.",
            "drive": "https://sites.google.com/view/insisponible/home",
            "position": "https://www.google.fr/maps/search/Decathlon/@49.251287,0.8522757,10z/data=!3m1!4b1?entry=ttu",
            "catalogue": "https://www.decathlon.fr/landing/catalogue-en-ligne-decathlon/_/R-a-catalogue-en-ligne",
            "backgroundColor": "grey"
        },
        {
            "id": 10,
            "name": "Kiabi",
            "logo": "https://storage.googleapis.com/glide-prod.appspot.com/uploads-v2/R2w6g3IgMRmRofVSYQaC/pub/tHIEm5SIYDs1iRwFkbmR.png",
            "catégorie": "Vetement",
            "description": "Kiabi est une enseigne de grande distribution spécialisée dans la vente de vêtements et de chaussures pour homme, femme, enfant et bébé à prix discount. 1ère enseigne de prêt-à-porter en France, sa cible prioritaire est depuis son origine les mères de familles entre 25 et 45 ans.",
            "drive": "https://sites.google.com/view/insisponible/home",
            "position": "https://www.google.fr/maps/search/Kiabi/@49.1762514,1.1036216,11z/data=!3m1!4b1?entry=ttu",
            "catalogue": "https://www.kiabi.com/?utm_adgroup=Groupe+d%27annonces&utm_adgroupid=&utm_campaign=FR+-+PM+-+Promo+-+PLA&utm_campaignid=19310295543&utm_medium=cpc&utm_source=google&utm_term=&gclid=CjwKCAjwsKqoBhBPEiwALrrqiOe64ZsMYrPN7TE5q82O_wddXUr7I9qOairL5Fw5AdIgMyAle8FSxRoCApoQAvD_BwE&gclsrc=aw.ds",
            "backgroundColor": "grey"
        },
        {
            "id": 11,
            "name": "Vertbaudet",
            "logo": "https://storage.googleapis.com/glide-prod.appspot.com/uploads-v2/R2w6g3IgMRmRofVSYQaC/pub/X6c19eOPfSHIx4oTni40.png",
            "catégorie": "Vetement",
            "description": "Créée en 1963, Vertbaudet est une enseigne française de magasins spécialisés dans la distribution d'articles de mode pour enfants, dont le siège est à Tourcoing dans le département du Nord. Vertbaudet fait partie du Groupe Redcats, filiale du groupe Kering.",
            "drive": "https://sites.google.com/view/insisponible/home",
            "position": "https://www.google.fr/maps/search/Vertbaudet/@49.1742575,0.6090998,9z/data=!3m1!4b1?entry=ttu",
            "catalogue": "https://www.vertbaudet.fr/page/feuilletez_nos_catalogues.htm",
            "backgroundColor": "grey"
        },
        {
            "id": 12,
            "name": "Super U",
            "logo": "https://storage.googleapis.com/glide-prod.appspot.com/uploads-v2/R2w6g3IgMRmRofVSYQaC/pub/T8n1HeU7ioZGUVvzCk3v.png",
            "catégorie": "Alimentaire",
            "description": "SUPER U est une enseigne du groupement SYSTEME U, spécialisée dans la distribution alimentaire, avec une surface comprise entre 1 000 m2 et 4 000 m2.",
            "drive": "https://www.coursesu.com/drive/home#utm_medium=cpc&utm_source=google&utm_campaign=EnseignesGeneriques&utm_content={adgroup}&utm_term=%2Bsuper%20%2Bu%20%2Bdrive&s_kwcid=AL!7209!3!315619685207!b!!g!!%2Bsuper%20%2Bu%20%2Bdrive",
            "position": "https://www.google.fr/maps/search/Super+U/@49.170504,0.6090929,9z/data=!3m1!4b1?entry=ttu",
            "catalogue": "https://www.magasins-u.com/catalogue-des-promotions-u?xtor=SEC-5-GOO-[enseignes+catalogue]-[0]-0-[0]&gclid=CjwKCAjwsKqoBhBPEiwALrrqiKeX8aPbXqQ7qeIANCobKsAhSYMshcHqt4o6EjVOQGFkDwH9rm_NhhoCnCYQAvD_BwE",
            "backgroundColor": "grey"
        },
        {
            "id": 13,
            "name": "Casino",
            "logo": "https://storage.googleapis.com/glide-prod.appspot.com/uploads-v2/R2w6g3IgMRmRofVSYQaC/pub/QefbfK1q5x5TawuuZvnX.jpg",
            "catégorie": "Alimentaire",
            "description": "Véritable référent alimentaire, Casino Supermarché propose à ses clients une expérience d'achat centrée sur le plaisir: le plaisir du goût, celui de la qualité avec des rayons à service et le plaisir de découvrir le meilleur des savoir-faire artisanaux.",
            "drive": "https://www.casino.fr/prehome/courses-en-ligne/magasins",
            "position": "https://www.google.fr/maps/search/Casino+supermarch%C3%A9/@49.1629969,0.6090791,9z/data=!3m1!4b1?entry=ttu",
            "catalogue": "https://www.supercasino.fr/promos-a-la-une/catalogues/",
            "backgroundColor": "grey"
        },
        {
            "id": 14,
            "name": "Okaidi",
            "logo": "https://storage.googleapis.com/glide-prod.appspot.com/uploads-v2/R2w6g3IgMRmRofVSYQaC/pub/d6miaecFQvEvGaEaWuWs.png",
            "catégorie": "Vetement",
            "description": "Okaïdi propose des collections créatives, modernes et faciles à porter pour permettre à chaque enfant d'affirmer sa personnalité. Des collections et des valeurs qui rapprochent toutes les cultures et créent des liens entre tous les enfants du monde.",
            "drive": "https://sites.google.com/view/insisponible/home",
            "position": "https://www.google.fr/maps/search/Oka%C3%AFdi/@49.1592432,0.6090722,9z/data=!3m1!4b1?entry=ttu",
            "catalogue": "https://www.okaidi.fr/?gclsrc=aw.ds&&gclid=CjwKCAjwsKqoBhBPEiwALrrqiPZMUQNVpUNz270I0vA9Hl50M6wkyNCWzeQYu5hOHPS6LulShza1ghoCHx8QAvD_BwE&gclsrc=aw.ds",
            "backgroundColor": "grey"
        },
        {
            "id": 15,
            "name": "Centrakor",
            "logo": "https://storage.googleapis.com/glide-prod.appspot.com/uploads-v2/R2w6g3IgMRmRofVSYQaC/pub/2OKf1CD322Q5n25doeTo.jpg",
            "catégorie": "Bazar",
            "description": "Centrakor est une enseigne de grande distribution, spécialisée dans l'équipement de maison et la décoration. Son concept est à mi-chemin entre discounter (Gifi, La Foir'Fouille) et magasin déco (Maisons du Monde). La chaîne possède 440 magasins.",
            "drive": "https://sites.google.com/view/insisponible/home",
            "position": "https://www.google.fr/maps/search/Centrakor/@49.1554895,0.6090653,9z/data=!3m1!4b1?entry=ttu",
            "catalogue": "https://www.centrakor.com/catalogues/",
            "backgroundColor": "grey"
        },
        {
            "id": 16,
            "name": "Gifi",
            "logo": "https://storage.googleapis.com/glide-prod.appspot.com/uploads-v2/R2w6g3IgMRmRofVSYQaC/pub/2Ds44iO4TyfMsxuQ6Yel.png",
            "catégorie": "Bazar",
            "description": "GiFi (abréviation de Ginestet Philippe) est une enseigne de distribution de produits à petits prix pour la maison et la famille, proche du hard-discount non alimentaire. GiFi est une marque connue pour son slogan « Des idées de génie ».",
            "drive": "https://sites.google.com/view/insisponible/home",
            "position": "https://www.google.fr/maps/search/GiFi/@49.1517357,0.6090584,9z/data=!3m1!4b1?entry=ttu",
            "catalogue": "https://www.gifi.fr/?utm_source=widely_search&utm_medium=Display_sea&utm_campaign=12526515026&utm_content=119328824789&utm_term=gifi%20fougeres",
            "backgroundColor": "grey"
        },
        {
            "id": 17,
            "name": "Maison du monde",
            "logo": "https://storage.googleapis.com/glide-prod.appspot.com/uploads-v2/R2w6g3IgMRmRofVSYQaC/pub/3EHWEi8G5movqG2VNPO4.png",
            "catégorie": "Decoratif",
            "description": "Maisons du Monde est spécialisé dans la création, la fabrication et la commercialisation d'articles de décoration (linge de maison, vaisselle, ustensiles de cuisine, miroirs, cadres, etc.) et de mobiliers (lits, tables, chaises, fauteuils, canapés, armoires, mobilier de jardin, etc.).",
            "drive": "https://sites.google.com/view/insisponible/home",
            "position": "https://www.google.fr/maps/search/Maisons+du+Monde/@49.1479818,0.6090515,9z/data=!3m1!4b1?entry=ttu",
            "catalogue": "https://www.maisonsdumonde.com/FR/fr/e/nos-catalogues/",
            "backgroundColor": "grey"
        },
        {
            "id": 18,
            "name": "King jouet",
            "logo": "https://storage.googleapis.com/glide-prod.appspot.com/uploads-v2/R2w6g3IgMRmRofVSYQaC/pub/Bpwj5U7OhoTLGd9cdN7n.png",
            "catégorie": "Jouet",
            "description": "King Jouet est une enseigne spécialisée dans la distribution de jeux et jouets pour les enfants de 0 à 10 ans et plus. Elle propose des dizaines de marques différentes et des catégories variées : peluches, poupées, jeux créatifs, jeux de construction, jeux éducatifs, jeux vidéo etc.",
            "drive": "https://sites.google.com/view/insisponible/home",
            "position": "https://www.google.fr/maps/search/King+Jouet/@49.1442279,0.6090447,9z/data=!3m1!4b1?entry=ttu",
            "catalogue": "https://www.king-jouet.com/catalogue-jeux-jouets-printemps.htm",
            "backgroundColor": "grey"
        },
        {
            "id": 19,
            "name": "La Foir'fouille",
            "logo": "https://storage.googleapis.com/glide-prod.appspot.com/uploads-v2/R2w6g3IgMRmRofVSYQaC/pub/Xnao9t9c1B9UT1JIgrZY.png",
            "catégorie": "Bazar",
            "description": "La Foir'Fouille est une chaîne de magasins française, fondée en 1975 par Louis Navarro, spécialisée dans le maxidiscount d'équipement pour la maison (ameublement, électroménager, etc.). En 2016, l'enseigne est présente sur l'ensemble du territoire français mais aussi aux DOM-TOM, en Belgique, Espagne et au Luxembourg.",
            "drive": "https://sites.google.com/view/insisponible/home",
            "position": "https://www.google.fr/maps/search/La+Foir'Fouille/@49.1404738,0.6090378,9z/data=!3m1!4b1?entry=ttu",
            "catalogue": "https://www.lafoirfouille.fr/catalogue.html",
            "backgroundColor": "grey"
        },
        {
            "id": 20,
            "name": "La Grande récré",
            "logo": "https://storage.googleapis.com/glide-prod.appspot.com/uploads-v2/R2w6g3IgMRmRofVSYQaC/pub/Me0ryIPBHV4NxUSTMwWC.jpg",
            "catégorie": "Jouet",
            "description": "Qui sommes-nous ? Animée par l'esprit de famille depuis sa création en 1977, La Grande Récré est un véritable expert du jouet. Forte de son réseau de plus de 140 magasins, de ses 900 Parents Conseils et des services Clients Privilégiés proposés, La Grande Récré met tout en œuvre pour vous satisfaire pleinement.",
            "drive": "https://sites.google.com/view/insisponible/home",
            "position": "https://www.google.fr/maps/search/La+Grande+R%C3%A9cr%C3%A9/@49.1367197,0.6090309,9z/data=!3m1!4b1?entry=ttu",
            "catalogue": "https://www.lagranderecre.fr/catalogue-le-printemps-jeux-et-jouets.html",
            "backgroundColor": "grey"
        },
        {
            "id": 21,
            "name": "Districenter",
            "logo": "https://storage.googleapis.com/glide-prod.appspot.com/uploads-v2/R2w6g3IgMRmRofVSYQaC/pub/rpIew3absJK9Whu1oVcs.png",
            "catégorie": "Vetement",
            "description": "Enseigne de proximité d'origine bretonne, nous accompagnons depuis 1986, toutes les familles, de 0 à 99 ans, dans tous leurs moments de vie. Avec nos univers vêtements, chaussures et maison, nous permettons à tous les styles et tous les âges de s'exprimer de manière décomplexée et toujours à petits prix !",
            "drive": "https://sites.google.com/view/insisponible/home",
            "position": "https://www.google.fr/maps/search/Distri+Center/@49.1329656,0.609024,9z/data=!3m1!4b1?entry=ttu",
            "catalogue": "https://www.districenter.fr/catalogue.html?distri_operation=Promotion",
            "backgroundColor": "grey"
        },
        {
            "id": 22,
            "name": "McDonald's",
            "logo": "https://storage.googleapis.com/glide-prod.appspot.com/uploads-v2/R2w6g3IgMRmRofVSYQaC/pub/ooTDm1ZxvNDXHemRvo2P.png",
            "catégorie": "Restaurant Fast-food",
            "description": "Le 17 septembre 1979, McDonald's ouvre son premier restaurant français à Strasbourg. Le succès est au rendez-vous et se confirme dans la durée. En témoigne l'ouverture en 2003 du 1000e McDonald's en France !",
            "drive": "https://www.mcdonalds.fr/nos-services/click-collect?gclsrc=aw.ds&gclsrc=aw.ds&gclid=CjwKCAjwsKqoBhBPEiwALrrqiMS36rBS8pRNUAeTDR5VTV6HJ5P_ehReGlj_WWlyDm1Z3qxVCE5JYBoCdkMQAvD_BwE",
            "position": "https://www.google.fr/maps/search/McDonald's/@49.1292113,0.6090171,9z/data=!3m1!4b1?entry=ttu",
            "catalogue": "https://www.mcdonalds.fr/nos-produits/menus",
            "backgroundColor": "grey"
        },
        {
            "id": 23,
            "name": "Jennyfer",
            "logo": "https://storage.googleapis.com/glide-prod.appspot.com/uploads-v2/R2w6g3IgMRmRofVSYQaC/pub/NaTVOVKQWPCZchr0xxKv.png",
            "catégorie": "Vetement",
            "description": "Leader français dans le domaine du prêt-à-porter féminin pour les 15-25 ans, Jennyfer est plus que jamais la marque de mode référence des adolescentes. Le coeur de cible de l'enseigne est constitué de jeunes-filles de 15 à 20, modernes, dynamiques et branchées.",
            "drive": "https://sites.google.com/view/insisponible/home",
            "position": "https://www.google.fr/maps/search/Jennyfer/@49.1759989,1.1036218,11z/data=!3m1!4b1?entry=ttu",
            "catalogue": "https://www.promocatalogues.fr/magasins/jennyfer/catalogues-promotions",
            "backgroundColor": "grey"
        },
        {
            "id": 24,
            "name": "Burger king",
            "logo": "https://storage.googleapis.com/glide-prod.appspot.com/uploads-v2/R2w6g3IgMRmRofVSYQaC/pub/r3HfTp336GlxBXCjLlwb.png",
            "catégorie": "Restaurant Fast-food",
            "description": "Une viande savoureuse, grillée à la flamme, des ingrédients frais comme les tomates et les oignons préparés chaque matin dans nos restaurants, des burgers préparés à la commande, généreux, que l'on tient à deux mains… c'est ce qui fait l'unicité du concept de Burger King®.",
            "drive": "https://www.burgerking.fr/page/livraison-app-bk?gclid=Cj0KCQjw06-oBhC6ARIsAGuzdw1oe4AIWatRfWOIY0LO9VWqHvuOAwVZ0RE9Ym07oTxWL454BP75ZykaAqO8EALw_wcB",
            "position": "https://www.google.fr/maps/search/Burger+King/@49.1757644,1.1036213,11z/data=!3m1!4b1?entry=ttu",
            "catalogue": "https://www.burgerking.fr/carte?gclid=Cj0KCQjw06-oBhC6ARIsAGuzdw3JKPg2rNfc891gC5igUIMP4kTvAhkVchxisuW44_a_zqpTeuFaS-0aAnR4EALw_wcB",
            "backgroundColor": "grey"
        },
        {
            "id": 25,
            "name": "KFC",
            "logo": "https://storage.googleapis.com/glide-prod.appspot.com/uploads-v2/R2w6g3IgMRmRofVSYQaC/pub/1SILz7iU5BTeIlsfu9gZ.png",
            "catégorie": "Restaurant Fast-food",
            "description": "On y trouve toujours de nombreuses variantes de buckets de poulet mais aussi des hamburgers, des wraps et des salades, tous déclinés autour de la célèbre recette de Sanders. On peut les accompagner de frites, d'onion rings ou de croustillants de fromage, et finir le repas sur une glace ou une petite pâtisserie.",
            "drive": "https://www.kfc.fr/click-and-collect",
            "position": "https://www.google.fr/maps/search/KFC/@49.1755299,1.1036209,11z/data=!3m1!4b1?entry=ttu",
            "catalogue": "https://www.kfc.fr/notre-carte",
            "backgroundColor": "grey"
        },
        {
            "id": 26,
            "name": "Le comptoir du malt",
            "logo": "https://storage.googleapis.com/glide-prod.appspot.com/uploads-v2/R2w6g3IgMRmRofVSYQaC/pub/5De17k8Ffm50wzoKguqp.jpg",
            "catégorie": "Restaurant ",
            "description": "C'est une cuisine brassicole, populaire et locale. En lien avec l'héritage culturel des régions du Nord et de l'Est, le Comptoir du Malt a également sélectionné des bières à la pression riches des qualités de ces terroirs et fabriquées par des partenaires respectant les méthodes de fabrication traditionnelles.",
            "drive": "https://sites.google.com/view/insisponible/home",
            "position": "https://www.google.fr/maps/search/Le+Comptoir+du+Malt/@49.1746584,0.6090969,9z/data=!3m1!4b1?entry=ttu",
            "catalogue": "https://www.lecomptoirdumalt.fr/la-carte/",
            "backgroundColor": "grey"
        },
        {
            "id": 27,
            "name": "Trois brasseurs",
            "logo": "https://storage.googleapis.com/glide-prod.appspot.com/uploads-v2/R2w6g3IgMRmRofVSYQaC/pub/QR2Xu1B71vesww1J9s7M.png",
            "catégorie": "Restaurant ",
            "description": "Une ambiance chaleureuse et conviviale, capable d'offrir un espace de tranquillité à ceux qui souhaitent passer un moment agréable en couple, autant qu'un moment de franche bonne humeur pour les groupes ou encore de convivialité pour les familles. Les 3 Brasseurs sont des restaurants où les enfants se sentent bien.",
            "drive": "https://sites.google.com/view/insisponible/home",
            "position": "https://www.google.fr/maps/search/Les+3+Brasseurs/@49.1756471,0.9387986,10z/data=!3m1!4b1?entry=ttu",
            "catalogue": "https://www.3brasseurs.com/cuisine-des-3brasseurs",
            "backgroundColor": "grey"
        },
        {
            "id": 28,
            "name": "Del Arte",
            "logo": "https://storage.googleapis.com/glide-prod.appspot.com/uploads-v2/R2w6g3IgMRmRofVSYQaC/pub/zJ5orD24CVN9Nz761d6j.png",
            "catégorie": "Restaurant ",
            "description": "Del Arte est une chaîne française spécialisée dans la restauration à table du Groupe Le Duff. Créée en 1984 par le groupe Accor, elle vend des pizzas, pâtes, salades, antipasti, dolci et autres spécialités italiennes3.\n\nSon siège social est basé à Rennes en Bretagne.",
            "drive": "https://sites.google.com/view/insisponible/home",
            "position": "https://www.google.fr/maps/search/del+arte/@49.174709,0.9387969,10z/data=!3m1!4b1?entry=ttu",
            "catalogue": "https://www.delarte.fr/carte/categorie/Menus/menu",
            "backgroundColor": "grey"
        },
        {
            "id": 29,
            "name": "Gémo",
            "logo": "https://storage.googleapis.com/glide-prod.appspot.com/uploads-v2/R2w6g3IgMRmRofVSYQaC/pub/EAls0vofm6C1oyutgARi.png",
            "catégorie": "Vetement",
            "description": "Gémo est une chaîne de magasins qui propose des vêtements pour toute la famille, des accessoires, ainsi que des chaussures, à bas prix. En 2011, l'enseigne occupe la deuxième place au niveau national, comme distributeur en périphérie des villes.",
            "drive": "https://sites.google.com/view/insisponible/home",
            "position": "https://www.google.fr/maps/search/G%C3%A9mo/@49.1759989,1.1036218,11z/data=!3m1!4b1?entry=ttu",
            "catalogue": "https://www.gemo.fr/?at_medium=sl&at_campaign=GEMO_Marque_Combi&at_platform=google&at_creation=Marque_Combi&at_variant=525709566450&at_network=search&at_term=gemo%20catalogue&gclid=CjwKCAjwmbqoBhAgEiwACIjzEHVNgCVMTcVTa7tWxHJRtQWJbYU-q_VfREhwSm5yOgXkLcjkhmqj6xoC0UMQAvD_BwE",
            "backgroundColor": "grey"
        },
        {
            "id": 30,
            "name": "Courtepaille",
            "logo": "https://storage.googleapis.com/glide-prod.appspot.com/uploads-v2/R2w6g3IgMRmRofVSYQaC/pub/ds09e2Ee3Rro8R5vFRfo.png",
            "catégorie": "Restaurant ",
            "description": "Courtepaille est la marque d'une chaîne française de restaurants spécialisée dans les grillades de viande. En 2021, la chaîne compte près de 240 établissements dont environ un tiers en franchise.",
            "drive": "https://sites.google.com/view/insisponible/home",
            "position": "https://www.google.fr/maps/search/Courtepaille/@49.1757644,1.1036213,11z/data=!3m1!4b1?entry=ttu",
            "catalogue": "https://www.courtepaille.com/la-carte/",
            "backgroundColor": "grey"
        },
        {
            "id": 31,
            "name": "Buffalo Grill",
            "logo": "https://storage.googleapis.com/glide-prod.appspot.com/uploads-v2/R2w6g3IgMRmRofVSYQaC/pub/bd987UVFy8gwaApPTiNT.png",
            "catégorie": "Restaurant ",
            "description": "Buffalo Grill est une chaîne de restauration française spécialisée dans les grillades de viande et ayant pour thème l'Amérique.\n\nL'enseigne compte, en août 2018, 360 restaurants, dont 94 en franchise, avec plus de 7 500 collaborateurs dans trois pays1 : la France, l'Espagne et la Suisse.",
            "drive": "https://sites.google.com/view/insisponible/home",
            "position": "https://www.google.fr/maps/search/Buffalo+Grill/@49.1755299,1.1036209,11z/data=!3m1!4b1?entry=ttu",
            "catalogue": "https://www.buffalo-grill.fr/la-carte/menus",
            "backgroundColor": "grey"
        },
        {
            "id": 32,
            "name": "Au bureau",
            "logo": "https://storage.googleapis.com/glide-prod.appspot.com/uploads-v2/R2w6g3IgMRmRofVSYQaC/pub/5ZkazEwoNEXhRdRCRZIx.png",
            "catégorie": "Restaurant ",
            "description": "A toute heure de la journée, faites une pause Au Bureau \n\nRendez-vous dans notre pub authentique et unique… Véritable lieu de vie au décor anglo-saxon, Au Bureau rythme votre journée du matin jusqu’au soir : repas entre amis, apéro, sport, musique, danse… vous allez aimer passer du temps Au Bureau !",
            "drive": "https://sites.google.com/view/insisponible/home",
            "position": "https://www.google.fr/maps/search/Au+Bureau/@49.1756471,0.9387986,10z/data=!3m1!4b1?entry=ttu",
            "catalogue": "https://www.aubureau.fr/carte-des-plats/",
            "backgroundColor": "grey"
        },
        {
            "id": 33,
            "name": "Action",
            "logo": "https://storage.googleapis.com/glide-prod.appspot.com/uploads-v2/R2w6g3IgMRmRofVSYQaC/pub/DYYA2ntTvVXV47xc0ozj.png",
            "catégorie": "Bazar",
            "description": "Action est un magasin à bas prix, ou se mêle décoration, jouets et loisirs, produits saisonniers, bricolage, épicerie, etc. On y trouve de tout à prix compétitif. Au sein des boutiques, plus de 6000 produits en rayon et 150 nouveautés arrivent chaque semaine.",
            "drive": "https://sites.google.com/view/insisponible/home",
            "position": "https://www.google.fr/maps/search/Action/@49.1760869,1.1860264,12z/data=!3m1!4b1?entry=ttu",
            "catalogue": "https://www.action.com/fr-fr/les-affaires-du-moment/?gclid=CjwKCAjw38SoBhB6EiwA8EQVLnQDbovwQydQie1bDfgPYhYZNMGzBSOUQwmdUzx9nSqHVQE6orWKqRoCUh0QAvD_BwE",
            "backgroundColor": "grey"
        },
        {
            "id": 34,
            "name": "Grand Frais",
            "logo": "https://storage.googleapis.com/glide-prod.appspot.com/uploads-v2/R2w6g3IgMRmRofVSYQaC/pub/ejkRgUNXTRr1PtzjhqMC.png",
            "catégorie": "Alimentaire",
            "description": "Nos magasins Grand Frais s'inspirent de l'ambiance et de la configuration des halles traditionnelles et des marchés couverts. Ils réunissent en un seul et même lieu, 5 professionnels de l'alimentation : un Primeur, un Épicier d'Ici et d'Ailleurs, un Fromager, un Boucher-Charcutier et un Poissonnier...",
            "drive": "https://sites.google.com/view/insisponible/home",
            "position": "https://www.google.fr/maps/search/Grand+Frais/@49.2072808,0.8521509,10z/data=!3m1!4b1?entry=ttu",
            "catalogue": "https://www.grandfrais.com/hem/promotions",
            "backgroundColor": "grey"
        },
        {
            "id": 35,
            "name": "Tedi",
            "logo": "https://storage.googleapis.com/glide-prod.appspot.com/uploads-v2/R2w6g3IgMRmRofVSYQaC/pub/R0ChWe8v5B5UHm9AKK2s.png",
            "catégorie": "Bazar",
            "description": "Histoire de la structure où se déroule le TEDI\nElle a un double mouvement de protection et d'intégration des enfants et des adolescents en difficultés, en situation de risque et de danger physique et moral.",
            "drive": "https://sites.google.com/view/insisponible/home",
            "position": "https://www.google.fr/maps/search/TEDi/@49.2063428,0.852149,10z/data=!3m1!4b1?entry=ttu",
            "catalogue": "https://www.cataloguemate.fr/tedi/?gad_source=1&gclid=CjwKCAiAjfyqBhAsEiwA-UdzJKrcTnc6w10Nq-GgK888O1WpAuBqutr9-gBvzjwNwjw-gH3bcmKHZhoCcL0QAvD_BwE",
            "backgroundColor": "grey"
        },
        {
            "id": 36,
            "name": "Noz",
            "logo": "https://storage.googleapis.com/glide-prod.appspot.com/uploads-v2/R2w6g3IgMRmRofVSYQaC/pub/dlWRh2aKWrxqw8XcIMxx.png",
            "catégorie": "Bazar",
            "description": "Noz, leader Européen du déstockage de produits sinistrés, fins de série ou encore dégriffés, depuis plus de 40 ans ! Notre mission : Dénicher les meilleures opportunités de marchandises auprès de nos 110 000 fournisseurs afin de les revaloriser en véritable succès commerciaux.",
            "drive": "https://noz-clickandcollect.com/",
            "position": "https://www.google.fr/maps/search/NOZ/@49.2054048,0.8521472,10z/data=!3m1!4b1?entry=ttu",
            "catalogue": "https://www.nozarrivages.com/",
            "backgroundColor": "grey"
        },
        {
            "id": 37,
            "name": "Ikea",
            "logo": "https://storage.googleapis.com/glide-prod.appspot.com/uploads-v2/R2w6g3IgMRmRofVSYQaC/pub/OMPLXnNCo1ynVwrzkwg6.jpg",
            "catégorie": "Ameublement",
            "description": "IKEA, acronyme de Ingvar Kamprad Elmtaryd Agunnaryd, est une entreprise d'origine suédoise dont le siège social se trouve à Delft aux Pays-Bas, spécialisée dans la conception et la vente de détail de mobilier et objets de décoration prêts à poser ou à monter en kit.",
            "drive": "https://www.ikea.com/fr/fr/customer-service/services/click-collect/",
            "position": "https://www.google.fr/maps/search/IKEA/@49.2328222,0.4811341,8z?entry=ttu",
            "catalogue": "https://www.ikea.com/ch/fr/customer-service/brochures/",
            "backgroundColor": "grey"
        },
        {
            "id": 38,
            "name": "Leroy Merlin",
            "logo": "https://storage.googleapis.com/glide-prod.appspot.com/uploads-v2/R2w6g3IgMRmRofVSYQaC/pub/Fiu7ORiEy9CnxcKlfXO0.webp",
            "catégorie": "Bricolage",
            "description": "La société LEROY MERLIN FRANCE a été créée le 17 février 1992, il y a 32 ans. Sa forme juridique est SA à conseil d'administration (s.a.i.). Son domaine d'activité est : commerce de détail de quincaillerie, peintures et verres en grandes surfaces (400 m² et plus). En 2020, elle était catégorisée Grande Entreprise.",
            "drive": "https://www.leroymerlin.fr/services/service-client/nos-retraits-et-modes-de-livraison.html",
            "position": "https://www.google.fr/maps/search/Leroy+Merlin/@49.2213947,0.481108,7.91z/data=!3m1!4b1?entry=ttu",
            "catalogue": "https://www.leroymerlin.fr/catalogue/",
            "backgroundColor": "grey"
        },
        {
            "id": 39,
            "name": "Castorama",
            "logo": "https://storage.googleapis.com/glide-prod.appspot.com/uploads-v2/R2w6g3IgMRmRofVSYQaC/pub/9bvvueCcZSa4of3QfCMJ.png",
            "catégorie": "Bricolage",
            "description": "Castorama est une entreprise de grande distribution de bricolage, de décoration et d'aménagement de la maison, jadis française, devenue filiale de la société britannique Kingfisher depuis 2002.",
            "drive": "https://www.castorama.fr/services/drive",
            "position": "https://www.google.fr/maps/search/Castorama/@49.2043675,0.4810743,7z/data=!3m1!4b1?entry=ttu",
            "catalogue": "https://www.castorama.fr/catalogues",
            "backgroundColor": "grey"
        },
        {
            "id": 40,
            "name": "JouéClub",
            "logo": "https://storage.googleapis.com/glide-prod.appspot.com/uploads-v2/R2w6g3IgMRmRofVSYQaC/pub/RqQHlfyZGEKeIeowEofg.png",
            "catégorie": "Jouet",
            "description": "JouéClub, c'est le spécialiste français du jouet de 0 à 15 ans, depuis 1950. Avec son réseau de plus de 300 points de vente et sa boutique en ligne, JouéClub offre un large choix de jeux et jouets pour bébé, pour les filles et les garçons, à des prix toujours compétitifs.\n",
            "drive": "https://sites.google.com/view/insisponible/home",
            "position": "https://www.google.fr/maps/search/Jou%C3%A9Club/@49.1442335,0.4809526,7z/data=!3m1!4b1?entry=ttu",
            "catalogue": "https://www.joueclub.fr/?gad_source=1&gclid=CjwKCAiAjfyqBhAsEiwA-UdzJDoJrVTpJl4P9xhG_WLg3i-cfS5y08lYJgZKhz4AjPmy4QF82s8A_BoC8xsQAvD_BwE",
            "backgroundColor": "grey"
        },
        {
            "id": 41,
            "name": "Smyths Toys",
            "logo": "https://storage.googleapis.com/glide-prod.appspot.com/uploads-v2/R2w6g3IgMRmRofVSYQaC/pub/WGGeF6fZFMeWRqZFT0Zl.png",
            "catégorie": "Jouet",
            "description": "Smyths est une chaîne multinationale irlandaise spécialisée dans la distribution de jouets et de produits de divertissement pour enfants.",
            "drive": "https://sites.google.com/view/insisponible/home",
            "position": "https://www.google.fr/maps/search/Smyths+Toys+Superstores/@49.3823685,1.368586,8.5z?entry=ttu",
            "catalogue": "https://www.smythstoys.com/fr/fr-fr/request-a-catalog",
            "backgroundColor": "grey"
        },
        {
            "id": 42,
            "name": "Okybul",
            "logo": "https://storage.googleapis.com/glide-prod.appspot.com/uploads-v2/R2w6g3IgMRmRofVSYQaC/pub/7uCRpU8S2unlEEhxCR1O.jpg",
            "catégorie": "Jouet",
            "description": "Oxybul éveil et jeux est une grande boutique leader dans les jouets en ligne. Vous retrouverez chez ce spécialiste, toutes les plus grandes marques de jeux et jouets, les nouveautés, les sélections au meilleur rapport qualité-prix.",
            "drive": "https://sites.google.com/view/insisponible/home",
            "position": "https://www.google.fr/maps/search/Oxybul/@49.3629165,1.4218841,8.25z?entry=ttu",
            "catalogue": "https://www.idkids.fr/catalogues-interactifs",
            "backgroundColor": "grey"
        },
        {
            "id": 43,
            "name": "Norauto",
            "logo": "https://storage.googleapis.com/glide-prod.appspot.com/uploads-v2/R2w6g3IgMRmRofVSYQaC/pub/tyomCRo6bJsjKMnBfWRF.png",
            "catégorie": "Garage",
            "description": "Leader européen de la maintenance automobile, Norauto est le pionnier du concept de centre auto en France, associant atelier et magasin. Nos centres proposent ainsi un large choix d'équipements à prix accessibles, des rendez-vous rapides et de larges amplitudes horaires.",
            "drive": "https://sites.google.com/view/insisponible/home",
            "position": "https://www.google.fr/maps/search/Norauto/@49.352307,1.4218632,8z/data=!3m1!4b1?entry=ttu",
            "catalogue": "https://www.norauto.fr/c/47611-jantes-enjoliveurs.html?cod=PSBGOO79579FR&s_kwcid=AL%2111721%213%21649618861112%21b%21%21g%21%21jantes%20norauto&gad_source=1&gclid=CjwKCAiAjfyqBhAsEiwA-UdzJLiRW1fnNjNntKwCARjOp8Pfa4p1WamKs4L-9Zavu4DlFVY3WYJNsxoChYcQAvD_BwE&gclsrc=aw.ds",
            "backgroundColor": "grey"
        },
        {
            "id": 44,
            "name": "Peugeot",
            "logo": "https://storage.googleapis.com/glide-prod.appspot.com/uploads-v2/R2w6g3IgMRmRofVSYQaC/pub/UZsUv5DqZAwtfjnDJpKP.png",
            "catégorie": "Garage",
            "description": "Peugeot est un constructeur automobile français filiale du groupe Néerlandais Stellantis depuis 2021. L'entreprise familiale qui précède l'actuelle entreprise Peugeot est fondée en 18102, lors de la transformation du moulin familial à Hérimoncourt en aciérie.",
            "drive": "https://sites.google.com/view/insisponible/home",
            "position": "https://www.google.fr/maps/search/Peugeot/@49.2269835,0.9330633,10z/data=!3m1!4b1?entry=ttu",
            "catalogue": "https://www.peugeot.fr/tools/telechargement-brochure.html",
            "backgroundColor": "grey"
        },
        {
            "id": 45,
            "name": "Renault",
            "logo": "https://storage.googleapis.com/glide-prod.appspot.com/uploads-v2/R2w6g3IgMRmRofVSYQaC/pub/jqhhkelNxIqjxSBjsGuP.png",
            "catégorie": "Garage",
            "description": "Renault est un constructeur automobile français. Il est lié aux constructeurs japonais Nissan depuis 1999 et Mitsubishi depuis 2017, à travers l'alliance Renault-Nissan-Mitsubishi, dont le siège social se situe au Pays-Bas, qui est au premier semestre 2017 le premier constructeur automobile mondial.",
            "drive": "https://sites.google.com/view/insisponible/home",
            "position": "https://www.google.fr/maps/search/Renault/@49.2260456,0.9330615,10z/data=!3m1!4b1?entry=ttu",
            "catalogue": "https://www.renault.fr/telechargez-une-brochure.html",
            "backgroundColor": "grey"
        },
        {
            "id": 46,
            "name": "Mercedes-Benz",
            "logo": "https://storage.googleapis.com/glide-prod.appspot.com/uploads-v2/R2w6g3IgMRmRofVSYQaC/pub/bMmsnTJKlQktMUD6NxW3.png",
            "catégorie": "Garage",
            "description": "Mercedes-Benz est une marque allemande d'automobiles, de camions, d'autocars et d'autobus indépendante, fondée en 1926 par trois constructeurs : Daimler-Motoren-Gesellschaft, Mercedes et Benz & Cie.",
            "drive": "https://sites.google.com/view/insisponible/home",
            "position": "https://www.google.fr/maps/search/Mercedes-Benz/@49.2251077,0.9330596,10z/data=!3m1!4b1?entry=ttu",
            "catalogue": "https://www.mercedes-benz.fr/passengercars.html?group=all&subgroup=see-all&view=BODYTYPE",
            "backgroundColor": "grey"
        },
        {
            "id": 47,
            "name": "Citroën",
            "logo": "https://storage.googleapis.com/glide-prod.appspot.com/uploads-v2/R2w6g3IgMRmRofVSYQaC/pub/mShLqY0mHbxwN3Gi24AK.png",
            "catégorie": "Garage",
            "description": "Citroën est un constructeur automobile français filiale du groupe Néerlandais Stellantis depuis 2021. Son nom en forme longue est Automobiles Citroën. L'entreprise a été fondée en juin 1919 par André Citroën.",
            "drive": "https://sites.google.com/view/insisponible/home",
            "position": "https://www.google.fr/maps/search/Citro%C3%ABn/@49.2241698,0.9330578,10z/data=!3m1!4b1?entry=ttu",
            "catalogue": "https://www.citroen.fr/outils/brochure.html",
            "backgroundColor": "grey"
        },
        {
            "id": 48,
            "name": "Sport 2000",
            "logo": "https://storage.googleapis.com/glide-prod.appspot.com/uploads-v2/R2w6g3IgMRmRofVSYQaC/pub/pfYty7y2u6Qrb0m9Wbfx.jpg",
            "catégorie": "Sport",
            "description": "LE GROUPE SPORT 2000\nEnseigne spécialiste Multisport, Sport 2000 est un groupement de commerçants indépendants, fort de 50 années d'expérience sur le marché du Sport et des Loisirs en France et à l'international. Le secteur du sport et des loisirs pèse environ 9,3 milliards d'euros en France (source Etude FPS 2012).",
            "drive": "https://sites.google.com/view/insisponible/home",
            "position": "https://www.google.fr/maps/search/Sport+2000/@49.2232318,0.933056,10z/data=!3m1!4b1?entry=ttu",
            "catalogue": "https://www.sport2000.fr/page/catalogues",
            "backgroundColor": "grey"
        },
        {
            "id": 49,
            "name": "Optic 2000",
            "logo": "https://storage.googleapis.com/glide-prod.appspot.com/uploads-v2/R2w6g3IgMRmRofVSYQaC/pub/G0hMhM96BzUr5Dt9as4H.svg",
            "catégorie": "Opticien",
            "description": "Optic 2000 est une coopérative créée en 1969 par le Groupement d'achats des opticiens lunetiers, en abrégé GADOL.",
            "drive": "https://sites.google.com/view/insisponible/home",
            "position": "https://www.google.fr/maps/search/Optic+2000/@49.2222939,0.9330541,10z/data=!3m1!4b1?entry=ttu",
            "catalogue": "https://www.optic2000.ch/catalogue/",
            "backgroundColor": "grey"
        },
        {
            "id": 50,
            "name": "Alain Afflelou",
            "logo": "https://storage.googleapis.com/glide-prod.appspot.com/uploads-v2/R2w6g3IgMRmRofVSYQaC/pub/4q3uB2wzbvR35wgnjQNk.jpg",
            "catégorie": "Opticien",
            "description": "Alain Afflelou est une entreprise française, chaîne d'opticiens spécialisée dans la distribution de montures, verres optiques et produits de contactologie. L'entreprise possède également une activité d'audioprothèse.",
            "drive": "https://sites.google.com/view/insisponible/home",
            "position": "https://www.google.fr/maps/search/Alain+Afflelou/@49.221356,0.9330523,10z/data=!3m1!4b1?entry=ttu",
            "catalogue": "https://www.afflelou.com/lunettes/",
            "backgroundColor": "grey"
        },
        {
            "id": 51,
            "name": "Optical Center",
            "logo": "https://storage.googleapis.com/glide-prod.appspot.com/uploads-v2/R2w6g3IgMRmRofVSYQaC/pub/goFNeFBrA6tLMwUGy2xW.svg",
            "catégorie": "Opticien",
            "description": "Optical Center est une entreprise française spécialisée dans l'optique et l'audition. Elle propose notamment la distribution de lunettes de vue, lunettes de soleil, lentilles de contact et audioprothèses.",
            "drive": "https://sites.google.com/view/insisponible/home",
            "position": "https://www.google.fr/maps/search/Optical+Center/@49.1762271,1.1860263,12z/data=!3m1!4b1?entry=ttu",
            "catalogue": "https://www.promocatalogues.fr/magasins/optical-center/catalogues-promotions",
            "backgroundColor": "grey"
        },
        {
            "id": 52,
            "name": "Cultura",
            "logo": "https://storage.googleapis.com/glide-prod.appspot.com/uploads-v2/R2w6g3IgMRmRofVSYQaC/pub/xlanMDt5jy0Si8FHRKa2.png",
            "catégorie": "Papeterie , Cuisine , Jouet , Jeux Vidéos , Librairie",
            "description": "Cultura est une enseigne de distribution française appartenant à la société Socultur, filiale de la holding Sodival. Elle est la troisième enseigne spécialisée dans la commercialisation de biens et loisirs culturels et créatifs en France derrière Leclerc et la Fnac avec (en 2016) 125 025 m2 de surface.",
            "drive": "https://sites.google.com/view/insisponible/home",
            "position": "https://www.google.fr/maps/search/Cultura/@49.1757288,0.938797,10z/data=!3m1!4b1?entry=ttu",
            "catalogue": "https://www.cultura.com/arts-et-loisirs-creatifs.html?utm_source=google&utm_medium=cpc&utm_campaign=PMAX_LC_Opportunit%C3%A9s&gad_source=1&gclid=CjwKCAiA9ourBhAVEiwA3L5RFkLR10DKeAbUL6AhMx5SDPZcxccTidIsi-cyc3k9TUXXVHPN9gIQkxoCvEEQAvD_BwE",
            "backgroundColor": "grey"
        },
        {
            "id": 53,
            "name": "Atol",
            "logo": "https://storage.googleapis.com/glide-prod.appspot.com/uploads-v2/R2w6g3IgMRmRofVSYQaC/pub/reWrsD0H158BO3XV0F0Q.png",
            "catégorie": "Opticien",
            "description": "Créé en 1970, Atol les Opticiens est une enseigne spécialisée dans la distribution optique en France qui appuie son développement sur une structure 100% coopérative, contrôlée par des opticiens de métier.",
            "drive": "https://sites.google.com/view/insisponible/home",
            "position": "https://www.google.fr/maps/search/Atol/@49.1747906,0.9387951,10z/data=!3m1!4b1?entry=ttu",
            "catalogue": "https://www.atol.fr/opticiens?wiz_source=google&wiz_medium=cpc&wiz_campaign=atol-iframe-experiment-v2&gad_source=1&gclid=CjwKCAiA9ourBhAVEiwA3L5RFp87CWR5Y0j3k1m7dHeuh-AYKRBz1knbGKbjiV96SPirGsd4QmuJoRoC0HkQAvD_BwE",
            "backgroundColor": "grey"
        },
        {
            "id": 54,
            "name": "Boulanger",
            "logo": "https://storage.googleapis.com/glide-prod.appspot.com/uploads-v2/R2w6g3IgMRmRofVSYQaC/pub/dbq4ujiXFpWq3M887XjH.png",
            "catégorie": "Electroménager , Multimédia",
            "description": "Boulanger est le spécialiste des équipements de la maison en électroménager et multimédia. Notre offre de 25 000 références regroupe les indispensables du quotidien.\n\nNous mettons tout notre savoir-faire au service de nos clients, grâce à nos marques exclusives et nos nombreux services d’accompagnement comme la livraison dans l’heure à Paris, la livraison le lendemain dans toute la France, l’accompagnement 7j/7, la mise en service, le dépannage, l’aide à la prise en main à distance ou à domicile, l’abonnement, la location et les offres de produits reconditionnés.",
            "drive": "https://sites.google.com/view/insisponible/home",
            "position": "https://www.google.fr/maps/search/Boulanger/@49.1738525,0.9387933,10z/data=!3m1!4b1?entry=ttu",
            "catalogue": "https://www.cataloguemate.fr/boulanger/?gad_source=1&gclid=CjwKCAiA9ourBhAVEiwA3L5RFowuXtTlsmMxQs90HFPgFB1ITHcXISanROeK7e2mcLbODAFzI_CqOhoCZ9wQAvD_BwE",
            "backgroundColor": "grey"
        },
        {
            "id": 55,
            "name": "Brico Dépot",
            "logo": "https://storage.googleapis.com/glide-prod.appspot.com/uploads-v2/R2w6g3IgMRmRofVSYQaC/pub/0DgpU0VyKIvvlF7kelb2.png",
            "catégorie": "Bricolage",
            "description": "Brico Dépôt est une enseigne de magasins de bricolage et d'amélioration de la maison présente majoritairement en France, mais également en Espagne, au Portugal et en Roumanie. En 2022, l'enseigne compte 123 points de vente et emploie 8 124 salariés. Si ce bandeau n'est plus pertinent, retirez-le.\n",
            "drive": "https://www.bricodepot.fr/catalogue/brico-depot-drive/",
            "position": "https://www.google.fr/maps/search/Bricodepot/@49.1729143,0.9387914,10z/data=!3m1!4b1?entry=ttu",
            "catalogue": "https://www.cataloguemate.fr/brico-depot/?gad_source=1&gclid=CjwKCAiA9ourBhAVEiwA3L5RFkCi6Mlb1WFPR10VIZr2MtInssunfQAUlmN2jMb3syssPFvtT1_yOBoCVagQAvD_BwE",
            "backgroundColor": "grey"
        },
        {
            "id": 56,
            "name": "Mr Bricolage",
            "logo": "https://storage.googleapis.com/glide-prod.appspot.com/uploads-v2/R2w6g3IgMRmRofVSYQaC/pub/B9TflL5rN7xS0gFcCwBh.jpg",
            "catégorie": "Bricolage",
            "description": "Bricolage est un groupement d'adhérents-entrepreneurs indépendants, spécialiste de la rénovation et de l'embellissement de la maison et du jardin. Nous sommes une enseigne populaire 84% de notoriété (source Ifop avril 2022), appréciée de nos clients et de nos partenaires.",
            "drive": "https://sites.google.com/view/insisponible/home",
            "position": "https://www.google.fr/maps/search/Mr+Bricolage/@48.7441636,0.754807,7.63z?entry=ttu",
            "catalogue": "https://www.mr-bricolage.fr/nos-catalogues-c.html",
            "backgroundColor": "grey"
        },
        {
            "id": 57,
            "name": "Bricoman",
            "logo": "https://storage.googleapis.com/glide-prod.appspot.com/uploads-v2/R2w6g3IgMRmRofVSYQaC/pub/3mPelgvOjRowV3mp67Q0.png",
            "catégorie": "Bricolage",
            "description": "Bricoman est une enseigne de distribution spécialisée dans les matériaux et l'outillage pour la construction et la rénovation exploitée par la société du même nom. Créée en 1998, l'enseigne est à l'origine spécialisée dans la grande distribution bricolage avec une offre discount.",
            "drive": "https://www.bricoman.fr/?at_sl_network=Google&at_medium=sea&at_account=Bricoman.fr&at_campaign=G_MQ_Text_Ads_Bricoman&at_adgroup_name=Marque_pure_Phrase&at_format=text_ads&gad_source=1&gclid=CjwKCAiAmZGrBhAnEiwAo9qHiVNvsuRmOyu3JU5HcsHeraR-B--sBK9wpVm2b5CaVW9KX7jyV_WwlhoCJAUQAvD_BwE",
            "position": "https://www.google.fr/maps/search/Bricoman/@49.159166,0.6857399,9z/data=!3m1!4b1?entry=ttu",
            "catalogue": "https://catalogue-365.com/bricoman/?gclid=CjwKCAiAmZGrBhAnEiwAo9qHiU1k9uCwIEYd8_LvKJnWo3UExRvz20T2Gody8F0qvzCk2lmvLAy3fxoCG_wQAvD_BwE",
            "backgroundColor": "grey"
        },
        {
            "id": 58,
            "name": "Brico Cash",
            "logo": "https://storage.googleapis.com/glide-prod.appspot.com/uploads-v2/R2w6g3IgMRmRofVSYQaC/pub/Z6oliNN5ELKOdzer1f3Y.png",
            "catégorie": "Bricolage",
            "description": "Brico Cash, l'enseigne au format entrepôt, offre tout le nécessaire pour des chantiers de construction et de rénovation : stocks importants et prix compétitifs sont garantis dans les univers du bricolage, du bâti, de la décoration et de l'aménagement extérieur.",
            "drive": "https://www.bricocash.fr/c/amenagement-exterieur/em01?et_keyword=&et_campaign=17630477989&et_device=c&et_matchtype=&gad_source=1&gclid=CjwKCAiA0PuuBhBsEiwAS7fsNTsPfPHO3Nxn6m0-JGmc2SLbxyxdWlf1VoOEvaAOOsThxUSRn923TRoCBFQQAvD_BwE",
            "position": "https://www.google.fr/maps/search/Brico+Cash/@48.9361602,-1.6721878,7z/data=!3m1!4b1?entry=ttu",
            "catalogue": "https://www.bricocash.fr/c/materiaux/em08?et_keyword=&et_campaign=18436797501&et_device=c&et_matchtype=&gad_source=1&gclid=CjwKCAiA0PuuBhBsEiwAS7fsNRpYPg7fa5G3qvByAXwjA_grAbOFIMTYVmGfC1srS6uzXKRptvuLvhoCabIQAvD_BwE",
            "backgroundColor": "grey"
        },
        {
            "id": 59,
            "name": "Bricorama",
            "logo": "https://storage.googleapis.com/glide-prod.appspot.com/uploads-v2/R2w6g3IgMRmRofVSYQaC/pub/qScdGh1kkJZ0mo2AGVjO.jpg",
            "catégorie": "Bricolage",
            "description": "Spécialisé dans l'aménagement et la décoration de la maison, le réseau Bricorama propose aux bricoleurs une gamme complète de produits, classifiés en 4 univers: bricolage, décoration, jardin et bâti. Au total, 30 000 références de marques nationales comme de marques propres sont disponibles dans ses rayons.",
            "drive": "https://sites.google.com/view/insisponible/home",
            "position": "https://www.google.com/maps/search/Bricorama/@49.1756471,0.9387883,10z/data=!3m1!4b1?entry=ttu",
            "catalogue": "https://www.bricorama.fr/nos-catalogues",
            "backgroundColor": "grey"
        },
        {
            "id": 60,
            "name": "Picard",
            "logo": "https://storage.googleapis.com/glide-prod.appspot.com/uploads-v2/R2w6g3IgMRmRofVSYQaC/pub/LpPU2uE2nTt7VGw4RbLc.jpg",
            "catégorie": "Surgelé",
            "description": "Picard Surgelés est une entreprise française spécialisée dans le commerce de détail de produits alimentaires surgelés sous marque de distributeur. Elle est le leader français dans ce secteur, contrôlant près de 20 % du marché en 2021. Logotype de Picard Surgelés dès le 19 juillet 2005.",
            "drive": "https://sites.google.com/view/insisponible/home",
            "position": "https://www.google.fr/maps/search/Picard/@49.1759989,1.1036192,11z/data=!3m1!4b1?entry=ttu&g_ep=EgoyMDI0MDkyNS4wIKXMDSoASAFQAw%3D%3D",
            "catalogue": "https://catalogues.picard.fr/?msclkid=4cd2bcdc11c31865d7e9da256156cc70&utm_source=bing&utm_medium=cpc&utm_campaign=marque%20-%20Bing&utm_term=picard%20catalogue&utm_content=Catalogue",
            "backgroundColor": "grey"
        },
        {
            "id": 61,
            "name": "Electro Depot",
            "logo": "https://storage.googleapis.com/glide-prod.appspot.com/uploads-v2/R2w6g3IgMRmRofVSYQaC/pub/05mTMXJlOPZQvtWFVdie.jpg",
            "catégorie": "Bricolage",
            "description": "Electro Depot est une enseigne spécialisée dans la vente d'équipements électroménagers, high-tech et de bricolage à prix discount. Avec un large choix de produits de qualité à des prix attractifs, Electro Depot facilite l'accès à la technologie pour tous.",
            "drive": "https://www.electrodepot.fr/livraison-retrait-magasin?srsltid=AfmBOop2bvo5Bl012h4ksiOPKmxGLsS6dm9Ja-0lNnqXG_YzSVK-AIAc",
            "position": "https://www.google.com/maps/search/ELECTRO+DEPOT/@49.1756471,0.9387883,10z/data=!3m1!4b1?entry=ttu&g_ep=EgoyMDI0MDkyOS4wIKXMDSoASAFQAw%3D%3D",
            "catalogue": "https://www.electrodepot.fr/arrivages.html?srsltid=AfmBOorWClh7TPxljIFRd7_GbiUsp5X0QwUJYQnAbj3_3kdn-yb6KzPt",
            "backgroundColor": "grey"
        },
        {
            "id": 62,
            "name": "Delbard",
            "logo": "https://storage.googleapis.com/glide-prod.appspot.com/uploads-v2/R2w6g3IgMRmRofVSYQaC/pub/b9bc6E7CuFKxMlb4jUer.png",
            "catégorie": "Jardinerie",
            "description": "Le pommier Delbard Jubilé® donne des pommes de couleur rouge et or. Les arômes sucrés de miel, de noisette et de banane de ces pommes en font des fruits délicieux à croquer, en compote ou en sorbet et qui accompagne à merveille le gibier.",
            "drive": "https://sites.google.com/view/insisponible/home",
            "position": "https://www.google.com/maps/search/Delbard/@49.1747089,0.9387856,10z/data=!3m1!4b1?entry=ttu&g_ep=EgoyMDI0MDkyOS4wIKXMDSoASAFQAw%3D%3D",
            "catalogue": "https://www.georgesdelbard.com/tpl/consulter-catalogue",
            "backgroundColor": "grey"
        },
        {
            "id": 63,
            "name": "Match",
            "logo": "https://storage.googleapis.com/glide-prod.appspot.com/uploads-v2/R2w6g3IgMRmRofVSYQaC/pub/T2bK7RFbieLIJmudjcbn.jpg",
            "catégorie": "Alimentaire",
            "description": "Match est une enseigne de grande distribution présente en Belgique, en France et au Luxembourg. Les supermarchés de la marque Match sont exploités en France par le groupe Carrefour depuis juillet 2024.",
            "drive": "https://www.supermarchesmatch.fr/fr/boutique",
            "position": "https://www.google.com/maps/search/Match/@49.2102647,1.5772853,8.75z?entry=ttu&g_ep=EgoyMDI0MDkyOS4wIKXMDSoASAFQAw%3D%3D",
            "catalogue": "https://www.supermarchesmatch.fr/fr/page/10320/nos-promotions-du-moment",
            "backgroundColor": "grey"
        },
        {
            "id": 64,
            "name": "Fnac",
            "logo": "https://storage.googleapis.com/glide-prod.appspot.com/uploads-v2/R2w6g3IgMRmRofVSYQaC/pub/rt9LBJYQ0rqgRfWw2Tot.jpg",
            "catégorie": "Electroménager, électronique, produits culturels",
            "description": "La Fnac est une chaîne de magasins française spécialisée dans la distribution de produits culturels et électroniques, à destination du grand public, dont la gamme s'est élargie en 2012 au petit électroménager, déjà présent à la création de l'enseigne et abandonné dans les années 1970.",
            "drive": "https://sites.google.com/view/insisponible/home",
            "position": "https://www.google.com/maps/search/Fnac/@49.1899343,1.5772263,8z/data=!3m1!4b1?entry=ttu&g_ep=EgoyMDI0MDkyOS4wIKXMDSoASAFQAw%3D%3D",
            "catalogue": "https://www.fnac.com/ia231265/Catalogue",
            "backgroundColor": "grey"
        },
        {
            "id": 65,
            "name": "Baobab & affiliés",
            "logo": "https://storage.googleapis.com/glide-prod.appspot.com/uploads-v2/R2w6g3IgMRmRofVSYQaC/pub/Eu5Yqv1177dmndyZ01Oa.png",
            "catégorie": "Jardinerie",
            "description": "Baobab & affiliés est une enseigne unique proposant une large sélection d'articles de décoration pour la maison et le jardin. Avec un style authentique et ethnique, elle saura séduire les amateurs de pièces originales et artisanales.",
            "drive": "https://sites.google.com/view/insisponible/home",
            "position": "https://www.google.com/maps/search/baobab/@46.9319625,-0.0072768,5z/data=!3m1!4b1?entry=ttu&g_ep=EgoyMDI0MDkzMC4wIKXMDSoASAFQAw%3D%3D",
            "catalogue": "https://www.bonial.fr/La-Ville-Aux-Dames/Baobab/p-r793",
            "backgroundColor": "grey"
        },
        {
            "id": 66,
            "name": "Quick",
            "logo": "https://storage.googleapis.com/glide-prod.appspot.com/uploads-v2/R2w6g3IgMRmRofVSYQaC/pub/4jarND9qAsoWVFztiVzS.png",
            "catégorie": "Restaurant Fast-food",
            "description": "Quick est une chaîne de restauration rapide créée en Belgique en 1971 et qui s'implante en France en 1980. Fin 2019, la société possède une centaine de restaurants, principalement en France, mais aussi en Europe.",
            "drive": "https://sites.google.com/view/insisponible/home",
            "position": "https://www.google.com/maps/search/Quick/@45.9537395,-0.0122402,5z/data=!3m1!4b1?entry=ttu&g_ep=EgoyMDI0MDkzMC4wIKXMDSoASAFQAw%3D%3D",
            "catalogue": "https://www.quick.fr/produits/menu",
            "backgroundColor": "grey"
        },
        {
            "id": 67,
            "name": "Domino's Pizza",
            "logo": "https://storage.googleapis.com/glide-prod.appspot.com/uploads-v2/R2w6g3IgMRmRofVSYQaC/pub/MhglJzHWkSmBVaPVsOlX.png",
            "catégorie": "Restaurant Fast-food",
            "description": "Domino's Pizza est une multinationale américaine de la restauration rapide spécialisée dans la préparation et la livraison de pizza.",
            "drive": "https://sites.google.com/view/insisponible/home",
            "position": "https://www.google.com/maps/search/Domino's+Pizza/@46.8986982,1.7820451,5.5z?entry=ttu&g_ep=EgoyMDI0MDkzMC4wIKXMDSoASAFQAw%3D%3D",
            "catalogue": "https://www.dominos.fr/la-carte/nos-pizzas",
            "backgroundColor": "grey"
        },
        {
            "id": 68,
            "name": "Micromania-Zing",
            "logo": "https://storage.googleapis.com/glide-prod.appspot.com/uploads-v2/R2w6g3IgMRmRofVSYQaC/pub/DNkmQCmuZZOWx7pMYZi1.jpeg",
            "catégorie": "Jeux Vidéos",
            "description": "Micromania-Zing est une société française créée en 1983 par Albert Loridan, spécialisée dans la vente de jeux vidéo. À ses débuts, l'entreprise était basée à Nice et vendait uniquement par correspondance.",
            "drive": "https://sites.google.com/view/insisponible/home",
            "position": "https://www.google.com/maps/search/micromania/@46.4110067,1.7801859,5z/data=!3m1!4b1?entry=ttu&g_ep=EgoyMDI0MDkzMC4wIKXMDSoASAFQAw%3D%3D",
            "catalogue": "https://www.micromania.fr/",
            "backgroundColor": "grey"
        },
        {
            "id": 69,
            "name": "Bureau Vallée",
            "logo": "https://storage.googleapis.com/glide-prod.appspot.com/uploads-v2/R2w6g3IgMRmRofVSYQaC/pub/dt87fE1g2MpYkBanWVwO.png",
            "catégorie": "Papeterie",
            "description": "Bureau Vallée est une enseigne de la grande distribution spécialisée dans la papeterie, les fournitures de bureau, bureautique et consommables informatiques. L'enseigne a été fondée en 1990 par Bruno Peyroles.",
            "drive": "https://sites.google.com/view/insisponible/home",
            "position": "https://www.google.com/maps/search/Bureau+Vall%C3%A9e/@49.1186896,0.6385701,9z/data=!3m1!4b1?entry=ttu&g_ep=EgoyMDI0MTAwMS4wIKXMDSoASAFQAw%3D%3D",
            "catalogue": "https://www.bureau-vallee.fr/nos-catalogues",
            "backgroundColor": "grey"
        },
        {
            "id": 70,
            "name": " Stokomani",
            "logo": "https://storage.googleapis.com/glide-prod.appspot.com/uploads-v2/R2w6g3IgMRmRofVSYQaC/pub/7mkgWHvB3ZBwepZ98iFL.jpg",
            "catégorie": "Bazar",
            "description": "Chez Stokomani, la majorité des produits est renouvelée à chaque nouvel arrivage, c'est-à-dire chaque semaine. Ainsi, les clients qui reviennent ne trouvent jamais deux fois le même choix. Consciemment ou inconsciemment, ils se plaisent à être surpris et à craquer sans mauvaise conscience…",
            "drive": "https://sites.google.com/view/insisponible/home",
            "position": "https://www.google.com/maps/search/Stokomani/@49.1149346,0.6385592,9z/data=!3m1!4b1?entry=ttu&g_ep=EgoyMDI0MTAwMS4wIKXMDSoASAFQAw%3D%3D",
            "catalogue": "https://www.stokomani.fr/catalogues.html",
            "backgroundColor": "grey"
        },
        {
            "id": 71,
            "name": "Flunch",
            "logo": "https://storage.googleapis.com/glide-prod.appspot.com/uploads-v2/R2w6g3IgMRmRofVSYQaC/pub/S8R1T2gz3FJrVeBxP6ke.png",
            "catégorie": "Restaurant Fast-food",
            "description": "Flunch est une chaîne de restauration en libre-service française. Elle est présente en France, en Espagne, en Italie et en Pologne. Cette chaîne est exploitée par la société Flunch qui appartient au groupe lillois Agapes Restauration de la famille Mulliez.",
            "drive": "https://sites.google.com/view/insisponible/home",
            "position": "https://www.google.com/maps/search/Flunch/@49.1074246,0.6385385,9z/data=!3m1!4b1?entry=ttu&g_ep=EgoyMDI0MTAwMS4wIKXMDSoASAFQAw%3D%3D",
            "catalogue": "https://www.flunch.fr/la-carte/",
            "backgroundColor": "grey"
        },
        {
            "id": 72,
            "name": "La Boucherie",
            "logo": "https://storage.googleapis.com/glide-prod.appspot.com/uploads-v2/R2w6g3IgMRmRofVSYQaC/pub/13mGXCjL2xaaamqFzMnT.jpg",
            "catégorie": "Restaurant",
            "description": "La Boucherie Restaurant est une chaîne de plus de 130 restaurants grills faisant partie du Groupe Baudaire.",
            "drive": "https://sites.google.com/view/insisponible/home",
            "position": "https://www.google.com/maps/search/LA+BOUCHERIE/@49.1036694,0.6385276,9z/data=!3m1!4b1?entry=ttu&g_ep=EgoyMDI0MTAwMS4wIKXMDSoASAFQAw%3D%3D",
            "catalogue": "https://www.la-boucherie.fr/notre-carte/",
            "backgroundColor": "grey"
        },
        {
            "id": 73,
            "name": "Léon",
            "logo": "https://storage.googleapis.com/glide-prod.appspot.com/uploads-v2/R2w6g3IgMRmRofVSYQaC/pub/NFJisNyKrqRO3S2COFtz.png",
            "catégorie": "Restaurant",
            "description": "Né à Bruxelles en 1893, la « Friture Léon », petit estaminet dédié aux moules et aux plats typiques belges est devenue Léon de Bruxelles, une enseigne française intergénérationnelle connue et reconnue de tous, centrée sur le frais, l'authenticité et la tradition d'un savoir faire centenaire.",
            "drive": "https://sites.google.com/view/insisponible/home",
            "position": "https://www.google.com/maps/search/L%C3%A9on+de+Bruxelles/@49.0999142,0.6385167,9z/data=!3m1!4b1?entry=ttu&g_ep=EgoyMDI0MTAwMS4wIKXMDSoASAFQAw%3D%3D",
            "catalogue": "https://www.restaurantleon.fr/la-carte/",
            "backgroundColor": "grey"
        },
        {
            "id": 74,
            "name": "Biocoop",
            "logo": "https://storage.googleapis.com/glide-prod.appspot.com/uploads-v2/R2w6g3IgMRmRofVSYQaC/pub/hRhuUgn3wVLtAZgWq3Jy.jpg",
            "catégorie": "Bio",
            "description": "Biocoop est une société coopérative à forme anonyme à capital variable, spécialisée dans la distribution commerciale de produits alimentaires labellisés Agriculture biologique, Bio Cohérence, Demeter, etc. et de produits du commerce équitable, d'écoproduits et de cosmétiques.",
            "drive": "https://sites.google.com/view/insisponible/home",
            "position": "https://www.google.com/maps/search/Biocoop/@49.0961588,0.6385059,9z/data=!3m1!4b1?entry=ttu&g_ep=EgoyMDI0MTAwMS4wIKXMDSoASAFQAw%3D%3D",
            "catalogue": "https://www.biocoop.fr/",
            "backgroundColor": "grey"
        },
        {
            "id": 75,
            "name": "B & M",
            "logo": "https://storage.googleapis.com/glide-prod.appspot.com/uploads-v2/R2w6g3IgMRmRofVSYQaC/pub/PeCn7d2ujJSuZBv9VY0l.svg",
            "catégorie": "Bazar",
            "description": "B&M est une entreprise britannique de grande distribution spécialisée dans les produits discounts fondée en 1978. En 2017, elle compte 28 000 employés avec 600 magasins. Son nom a pour origine les initiale des deux fondateurs, Billington et Mayman.",
            "drive": "https://sites.google.com/view/insisponible/home",
            "position": "https://www.google.com/maps/search/B%26M/@49.1756471,0.9387883,10z/data=!3m1!4b1?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D",
            "catalogue": "https://bmstores.fr/pages/category/3-catalogues",
            "backgroundColor": "grey"
        }
    
    
    
];

// Cible le conteneur de la grille et la barre de recherche
const gridContainer = document.getElementById("grid-container");
const searchBar = document.getElementById("search-bar");

// Fonction pour afficher les magasins dans la grille
function displayStores(filteredStores) {
    gridContainer.innerHTML = ""; // Vide la grille avant d'afficher les résultats filtrés
    filteredStores.forEach(store => {
        const square = document.createElement("div");
        square.className = "square";
        square.innerHTML = `
            <img src="${store.logo}" alt="${store.name}">
            <h3>${store.name}</h3>
            <button class="close-square">&times;</button>
        `;
        square.addEventListener("click", () => openModal(store));
        gridContainer.appendChild(square);
    });
}

// Fonction pour afficher les détails dans la modale
function openModal(store) {
    const modalTitle = document.getElementById("modal-title");
    const modalDescription = document.getElementById("modal-description");
    const modal = document.getElementById("modal");

    modalTitle.textContent = store.name;
    modalDescription.textContent = store.description;
    modal.style.display = "flex";
}

// Fonction pour filtrer les magasins selon la recherche
searchBar.addEventListener("input", function() {
    const searchQuery = searchBar.value.toLowerCase();
    const filteredStores = stores.filter(store => store.name.toLowerCase().includes(searchQuery));
    displayStores(filteredStores);
});

// Gestion de la fermeture de la modale
document.getElementById("close-modal").addEventListener("click", () => {
    document.getElementById("modal").style.display = "none";
});

// Gestion de la fermeture de la modale lorsqu'on clique à l'extérieur
window.addEventListener("click", (event) => {
    const modal = document.getElementById("modal");
    if (event.target === modal) {
        modal.style.display = "none"; // Ferme la modale
    }
});

// Affiche tous les magasins au départ
displayStores(stores);