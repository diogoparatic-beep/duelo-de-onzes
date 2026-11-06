const CLUBS=["1.FC K'lautern", "1860 Munich", "A. Bucaramanga", "A. Klagenfurt", "AC Ajaccio", "AC Arles-Avignon", "AC Horsens", "AC Milan", "ACSM Poli Iasi", "AD Alcorcón", "ADO Den Haag", "AE Larisa", "AEK Athens", "AEK Larnaca", "AIK", "AJ Auxerre", "AOK Kerkyra", "APOEL Nicosia", "AS Livorno", "AS Nancy", "ASEC Mimosas", "AVS", "AZ Alkmaar", "Aalborg BK", "Aalesunds FK", "Aarhus GF", "Aberdeen FC", "Académica", "Académico Viseu", "Adana Demirspor", "Adanaspor", "Adelaide United", "Ajax", "Akhisarspor", "Akhmat Grozny", "Akron Tolyatti", "Al-Ahli", "Al-Ain", "Al-Arabi SC", "Al-Duhail SC", "Al-Ettifaq", "Al-Fateh", "Al-Fayha", "Al-Gharafa", "Al-Hazem", "Al-Hilal", "Al-Ittihad", "Al-Jazira", "Al-Khaleej", "Al-Kholood", "Al-Najma", "Al-Nasr", "Al-Nassr", "Al-Okhdood", "Al-Orobah", "Al-Qadsiah", "Al-Raed", "Al-Rayyan", "Al-Riyadh", "Al-Sadd", "Al-Shabab", "Al-Taawoun", "Al-Wasl", "Al-Wehda", "Alania", "Alanyaspor", "Alavés", "Albacete", "Albirex Niigata", "Aldosivi", "Alianza FC", "Almere City", "Almería", "Altay SK", "Alverca", "Amiens SC", "Amkar Perm", "América", "América-MG", "América-RN", "Anderlecht", "Angers SCO", "Ankaragücü", "Anorthosis", "Antalyaspor", "Anzhi", "Anápolis", "Apol. Limassol", "Apollon Smyrnis", "Argentinos Jrs.", "Aris Saloniki", "Arm. Bielefeld", "Arouca", "Arsenal", "Arsenal Kyiv", "Arsenal Sarandí", "Arsenal Tula", "Ascoli", "Asteras Tripoli", "Aston Villa", "Atalanta", "Athletic Bilbao", "Athletico-PR", "Atl. Levante", "Atl. Madrileño", "Atl. Malagueño", "Atl. Nacional", "Atl. Tucumán", "Atlanta", "Atlas", "Atlético de Madrid", "Atlético-GO", "Atlético-MG", "Atromitos", "Auckland FC", "Augsburg", "Austin", "Austria Vienna", "Avellino", "Avispa Fukuoka", "B SAD", "BB Erzurumspor", "BJ Guoan", "Balikesirspor", "Baltika", "Banfield", "Banik Ostrava", "Barcelona", "Bari", "Barnsley", "Barracas C.", "Basaksehir", "Basel", "Bayern", "Beerschot AC", "Beerschot VA", "Beira-Mar", "Belenenses", "Belgrano", "Benevento", "Benfica", "Besiktas", "Betis", "Betis Deportivo", "Bilbao Athletic", "Birmingham", "Blackburn", "Blackpool", "Blau Weiss Linz", "Boavista", "Boca Juniors", "Bodrum FK", "Bodø/Glimt", "Bohemians 1905", "Bologna", "Bolton", "Bordéus", "Borussia Dortmund", "Borussia M'gladbach", "Botafogo", "Bournemouth", "Boyacá Chicó", "Bradford", "Braga", "Brentford", "Brescia", "Brighton", "Brisbane Roar", "Bristol City", "Bristol Rovers", "Brommapojkarna", "Bryne", "Bröndby IF", "Bucheon FC", "Burgos CF", "Burnley", "Bursaspor", "Burton Albion", "Bury", "C. Budejovice", "C. Rizespor", "CA Osasuna Yout", "CA Talleres", "CD América", "CD Basconia", "CD Cruz Azul", "CD Leganés", "CD Lugo", "CD Mirandés", "CD Tenerife", "CF Fuenlabrada", "CFR Cluj", "CRB", "CS Sedan", "CSKA de Moscovo", "CSKA-Sofia", "Cagliari", "Cardiff", "Carlisle United", "Carpi", "Casa Pia", "Catania", "Ceará SC", "Celta", "Celtic", "Central Coast", "Central Córdoba", "Cercle Brugge", "Cerezo Osaka", "Cesena", "Chamois Niort", "Chapecoense", "Charlotte", "Charlton", "Chaves", "Chelsea", "Cheltenham", "Chicago", "Chievo", "Chivas", "Chornomorets", "Cincinnati", "Cittadella", "Clermont Foot", "Club Brugge", "Club NXT", "Club Tijuana", "Colo-Colo", "Colon", "Colorado", "Columbus", "Colónia", "Como", "Copenhagen", "Corinthians", "Coritiba FC", "Coventry", "Cracovia", "Cremonese", "Crewe Alexandra", "Criciúma", "Crotone", "Cruzeiro", "Crystal Palace", "Cukaricki", "Cádiz CF", "Córdoba CF", "D.C. United", "Daegu FC", "Daejeon Hana C.", "Dallas", "Damac FC", "Danubio FC", "De Graafschap", "Defensa", "Defensor SC", "Degerfors", "Denizlispor", "Dep. Aragón", "Deportes Tolima", "Deportivo Cali", "Deportivo Pasto", "Deportivo da Corunha", "Derby", "Desna", "Desportivo das Aves", "Dijon", "Dinamo Makhach.", "Djurgården", "Dnipro", "Doncaster", "Dukla Prague", "Dundee FC", "Dundee United", "Dynamo Dresden", "Dínamo de Kiev", "Dínamo de Moscovo", "Dínamo de Zagreb", "E. Braunschweig", "EC Bahia", "EC Vitória", "Eintracht Frankfurt", "Elazigspor", "Elche CF", "Elfsborg", "Empoli", "Envigado", "Epicentr", "Ergotelis", "Esbjerg fB", "Eskisehirspor", "Espanyol", "Estoril Praia", "Estrasburgo", "Estrela Vermelha", "Estrela da Amadora", "Estudiantes LP", "Estudiantes RC", "Estugarda", "Everton", "Excelsior", "Eyüpspor", "F. Düsseldorf", "FC Anyang", "FC Arges", "FC Botosani", "FC Buzau", "FC Cartagena", "FC Dinamo", "FC Dordrecht", "FC Emmen", "FC Fredericia", "FC Groningen", "FC Helsingør", "FC Hermannstadt", "FC Ingolstadt", "FC Istres", "FC Juárez", "FC Liefering", "FC Lorient", "FC Lugano", "FC Luzern", "FC Mariupol", "FC Metz", "FC Oleksandriya", "FC Porto", "FC Rapid 1923", "FC Seoul", "FC Sevastopol", "FC Sion", "FC Sochaux", "FC St. Gallen", "FC Thun", "FC Tokyo", "FC Twente", "FC Viitorul", "FC Volendam", "FC Winterthur", "FC Zürich", "FCSB", "FCV Dender EH", "FK Csikszereda", "FK Sochi", "FK TSC", "Falkirk", "Famalicão", "Farense", "Fastav Zlin", "Fehérvár", "Feirense", "Felgueiras", "Fenerbahçe", "Ferencváros", "Ferroviária", "Feyenoord", "Figueirense FC", "Fiorentina", "Flamengo", "Fluminense", "Foggia", "Fortaleza", "Fortaleza CEIF", "Fortuna Sittard", "Freamunde", "Fredrikstad FK", "Freiburg", "Frosinone", "Fulham", "G. Ajaccio", "GAIS", "GKS Katowice", "Galatasaray", "Gamba Osaka", "Gangwon FC", "Gaziantep FK", "Gaziantepspor", "Genclerbirligi", "Genk", "Genoa", "Getafe", "Gil Vicente", "Gimcheon Sangmu", "Gimnasia", "Gimnasia (M)", "Gimnàstic", "Giresunspor", "Girona", "Go Ahead Eagles", "Godoy Cruz", "Goiás", "Granada", "Grasshoppers", "Grazer AK 1902", "Grenoble", "Greuther Fürth", "Grêmio", "Guarani", "Guaratinguetá", "Guingamp", "Gwangju FC", "Génération Foot", "Górnik Zabrze", "Göztepe", "HNK Gorica", "HNK Rijeka", "Hajduk Split", "Halmstads BK", "HamKam", "Hamburgo", "Hamilton Acad.", "Hammarby", "Hatayspor", "Haugesund", "Heart of Midl.", "Heerenveen", "Heidenheim", "Hellas Verona", "Heracles Almelo", "Hertha BSC", "Hibernian FC", "Hobro IK", "Hoffenheim", "Holstein Kiel", "Houston", "Hradec Kralove", "Huddersfield", "Hull City", "Huracán", "Hvidovre", "Häcken", "Hércules CF", "IFK Göteborg", "IK Start", "IMT Belgrad", "Incheon Utd.", "Ind. Rivadavia", "Indep. Medellín", "Indep. Santa Fe", "Independiente", "Instituto ACC", "Inter", "Inter Bogotá", "Inter Miami", "Internacional", "Inverness CT", "Ionikos Nikeas", "Ipatinga", "Ipswich", "Iraklis", "Istanbulspor", "Ituano", "J. Regensburg", "JEF Utd. Chiba", "Jablonec", "Jagiellonia", "Javor-Matis", "Jedinstvo Ub", "Jeju United", "Jeonbuk Hyundai", "Junior FC", "Juve Next Gen", "Juve Stabia", "Juventude", "Juventus", "K. Erciyesspor", "KAA Gent", "KAS Eupen", "KFUM Oslo", "KS Samara", "KSC Lokeren", "KV Kortrijk", "KV Mechelen", "KV Oostende", "KVC Westerlo", "Kallithea", "Kalmar FF", "Kansas City", "Karabükspor", "Karagümrük", "Karlsruher SC", "Karpaty Lviv", "Karvina", "Kashima Antlers", "Kashiwa Reysol", "Kasimpasa", "Kawasaki Front.", "Kayserispor", "Khimki", "Kifisia", "Kilmarnock FC", "Kocaelispor", "Kolos Kovalivka", "Konyaspor", "Korona Kielce", "Krasnodar", "Kristiansund BK", "Kryvbas", "Kuban Krasnodar", "Kyoto Sanga", "LA Galaxy", "LAFC", "LASK", "LB Châteauroux", "LDU Quito", "LNZ Cherkasy", "La Louvière", "Lanús", "Las Palmas", "Latina Calcio", "Lausanne-Sport", "Lazio", "Le Havre AC", "Le Mans FC", "Lecce", "Lech Poznan", "Lechia Gdansk", "Leeds", "Legia Warszawa", "Leicester", "Leiria", "Leixões", "Lens", "Levadiakos", "Levante", "Leverkusen", "Levski Sofia", "Leyton Orient", "León", "Libertad", "Lierse SK", "Lille", "Lillestrøm SK", "Liverpool", "Livingston FC", "Llaneros FC", "Loko Moscow", "Lommel SK", "Londrina-PR", "Ludogorets", "Luton", "Lyngby BK", "Lyon", "M. Tel Aviv", "MK Dons", "Macarthur", "Maccabi Haifa", "Machida Zelvia", "Mafra", "Mainz", "Maiorca", "Malmö", "Manchester City", "Manchester United", "Marselha", "Marítimo", "Mazatlán FC", "Melb. Victory", "Melbourne City", "Mersin IY", "Metalist", "Metalist 1925", "Metalist Kharkiv", "Metaloglobus", "Metalurg D.", "Metalurg Z.", "Middlesbrough", "Midtjylland", "Millonarios", "Millwall", "Minnesota", "Mirassol-SP", "Mito HollyHock", "Mjällby AIF", "Mlada Boleslav", "Mladost", "Modena", "Molde FK", "Monterrey", "Montpellier", "Montréal", "Monza", "Mordovia", "Moreirense", "Motherwell FC", "Motor Lublin", "Mouscron", "Málaga", "Mónaco", "NAC Breda", "NEC Nijmegen", "NEOM SC", "NK Istra", "NK Lokomotiva", "NK Maribor", "NK Osijek", "NK Varazdin", "NK Vukovar 1991", "Nacional", "Nacional (Uruguai)", "Nagoya Grampus", "Nantes", "Napoli", "Napredak", "Nashville", "Naval 1º de Maio", "Necaxa", "Neuchâtel Xamax", "New England", "New York", "New York City", "Newcastle", "Newell's", "Nice", "Nordsjaelland", "Norrköping", "Northampton", "Norwich", "Nottingham Forest", "Novara", "Novi Pazar", "Nuremberga", "Náutico", "Nîmes Olympique", "OFI Crete", "OFK Beograd", "OH Leuven", "Odense BK", "Oeste", "Oldham Athletic", "Olhanense", "Olimpik Donetsk", "Oliveirense", "Olympiacos", "Omonia Nicosia", "Once Caldas", "Orduspor", "Orenburg", "Orlando City", "Osasuna", "Osmanlispor FK", "Otelul Galati", "Oxford United", "PAOK", "PAS Giannina", "PAS Lamia", "PEC Zwolle", "PFC Lviv", "PSG", "PSV", "Pachuca", "Padova", "Pafos", "Palermo", "Palmeiras", "Panathinaikos", "Panetolikos", "Panionios", "Panserraikos", "Panthrakikos", "Paraná", "Pardubice", "Pari NN", "Paris FC", "Parma", "Partick Thistle", "Partizan", "Pau FC", "Paulista-SP", "Paços de Ferreira", "Penafiel", "Pendikspor", "Pereira", "Perth Glory", "Perugia", "Pescara", "Peterborough", "Petrolul", "Peñarol", "Philadelphia", "Piacenza", "Piast Gliwice", "Pisa", "Platanias", "Platense", "Plymouth", "Pogon Szczecin", "Pohang Steelers", "Polissya", "Ponferradina", "Ponte Preta", "Portimonense", "Portland", "Portsmouth", "Portuguesa", "Prato", "Preston", "Pro Vercelli", "Puebla FC", "QPR", "Qarabağ", "Qatar SC", "Querétaro FC", "R Charleroi SC", "RAEC Mons", "RB Bragantino", "RB Leipzig", "RFC Seraing", "RKC Waalwijk", "RWDM", "Racing", "Racing Club", "Rad", "Radnicki 1923", "Radnicki Nis", "Radomiak", "Raków", "Randers FC", "Rangers", "Rapid Vienna", "Rayo Vallecano", "Reading", "Real Madrid", "Real Murcia", "Real Oviedo", "Real SC", "Real Sociedad", "Recre Granada", "Red Star FC", "Reggiana", "Reggina", "Remo", "Rennes", "Rio Ave", "Rionegro Águila", "River Plate", "Roda JC", "Rodez AF", "Roma", "Rosario Central", "Rosenborg BK", "Ross County", "Rostov", "Rotherham", "Rotor Volgograd", "Royal Antwerp", "Rubin Kazan", "SC Bastia", "SC Cambuur", "SC Covilhã", "SC Dnipro-1", "SC Paderborn", "SC Tavriya", "SCR Altach", "SD Eibar", "SD Huesca", "SH Shenhua", "SJ Earthquakes", "SK Brann", "SKA Khabarovsk", "SM Caen", "SPAL", "SV Ried", "SV Sandhausen", "Saint-Étienne", "Salernitana", "Salgueiros", "Salt Lake", "Salzburg", "Sampdoria", "Samsunspor", "San Diego", "San Lorenzo", "San Luis", "San Martín (SJ)", "Sandefjord", "Sanf. Hiroshima", "Santa Clara", "Santos", "Santos Laguna", "Saragoça", "Sarmiento Junin", "Sassuolo", "Schalke", "Scunthorpe Utd.", "Seattle", "Sepsi OSK", "Servette FC", "Sevilha", "Shakhtar", "Sheff Wed", "Sheffield United", "Shimizu S-Pulse", "Shonan Bellmare", "Shrewsbury", "Siena", "Sigma Olomouc", "Silkeborg IF", "Sint-Truiden", "Sirius", "Sivasspor", "Slask Wroclaw", "Slaven Belupo", "Slavia de Praga", "Slovacko", "Slovan Liberec", "Southampton", "Sparta Prague", "Sparta Roterdão", "Spartak", "Spartak de Moscovo", "Spezia", "Sport Recife", "Sporting", "Sporting de Gijón", "St. Johnstone", "St. Louis CITY", "St. Mirren", "St. Pauli", "Stade Brestois", "Stade Lavallois", "Stade Reims", "Stal Mielec", "Standard de Liège", "Stevenage", "Stockport", "Stoke City", "Strømsgodset", "Sturm Graz", "Sunderland", "Suwon FC", "Swansea", "Swindon Town", "Sydney FC", "São Caetano", "São Paulo", "Sönderjyske", "TSV Hartberg", "Tambov", "Telstar", "Tenerife", "Teplice", "Ternana", "Tigre", "Tigres UANL", "Tokyo Verdy", "Toluca", "Tom Tomsk", "Tondela", "Torino", "Toronto", "Torpedo Moskau", "Torreense", "Tosno", "Tottenham", "Toulouse", "Tours FC", "Trabzonspor", "Trapani", "Treviso", "Triestina", "Trofense", "Tromsø IL", "Troyes", "U Cluj", "U. de Chile", "UNAM Pumas", "US Boulogne", "US Créteil-L", "US Orléans", "USL Dunkerque", "UTA Arad", "Udinese", "Ufa", "Ulsan Hyundai", "Union Berlin", "Union SG", "Unirea Slobozia", "Univ. Craiova", "União Madeira", "Unión Santa Fe", "Ural", "Urawa Reds", "Utrecht", "V-V. Nagasaki", "VVV-Venlo", "Valenciennes FC", "Valladolid", "Valladolid Prom", "Valência", "Vancouver", "Varese", "Varzim", "Vasco da Gama", "Vejle BK", "Vendsyssel FF", "Venezia", "Veres Rivne", "Veria NPS", "VfL Bochum", "VfL Osnabrück", "Viborg FF", "Viking FK", "Viktoria Plzeň", "Vila Nova FC", "Vilafranquense", "Villarreal", "Vissel Kobe", "Vitesse", "Vitória de Guimarães", "Vitória de Setúbal", "Vizela", "Vojvodina", "Volos NFC", "Vorskla Poltava", "Värnamo", "Västerås SK", "Vålerenga", "Vélez Sarsfield", "WSG Tirol", "Waasland-Beveren", "Walsall", "Watford", "Wellington", "Werder Bremen", "West Brom", "West Ham", "Western Sydney", "Western United", "Widzew Lodz", "Wigan", "Wisla Kraków", "Wisla Plock", "Wolfsberger AC", "Wolfsburgo", "Wolverhampton", "Wrexham", "Wycombe", "Xanthi", "Y. Malatyaspor", "Yeovil Town", "Yokohama F. M.", "Yokohama FC", "Young Boys", "Yverdon Sport", "Zaglebie Lubin", "Zelez. Pancevo", "Zenit", "Zenit S-Pb", "Zorya Lugansk", "Zulte Waregem", "Évian", "Örgryte", "Östers IF", "Ümraniyespor", "Al-Shamal SC", "Abha", "Corum FK", "Wydad AC", "Al-Diraiyah FC", "Al-Wahda", "Aktobe", "A. Baghdad SC", "Kaysar", "Persepolis FC", "Al-Ahli SC", "Santa Lucia FC", "Dep. Maipú", "Boston River", "Krasava ENY", "DL Yingbo", "GS Marko", "Derry City", "Al-Wakrah SC", "ML Vitebsk", "Júbilo Iwata", "Puerto Cabello", "ZJ FC", "AF Elbasani", "Eldense", "Arezzo", "Kalba FC", "Castellón", "Thór", "Lincoln City", "BATE Borisov", "Neftchi", "Hapoel Tel Aviv", "Mantova", "Olympiakos N.", "Raja Casablanca", "CSKA 1948", "A. Keciörengücü", "OC Safi", "GZ R&F", "Marcílio Dias", "CRAC (GO)", "Quilmes", "Pécsi MFC", "Banik Sokolov", "Paradou AC", "CA Fénix", "Zeljeznicar", "Ferro", "TOP Oss", "Rubio Ñú", "Tacuary FBC", "Luqueño", "Fréjus-St-Raph.", "O'Higgins", "Hyde United", "Goverla", "Palestino", "Thrasyvoulos", "Usti nad Labem", "1.SC Znojmo", "Olimpia", "Dinamo Tbilisi", "HJK Helsinki", "Oriente P.", "Dunajska Streda", "Levanger", "Michalovce", "FC Inter", "B. Banja Luka", "ETO FC", "Tacoma Defiance", "12 de Octubre", "Cavese", "AC Bellinzona", "Atletico Roma", "San Marino", "ND Gorica", "Marbella FC", "Bnei Yehuda", "Honvéd", "SV Mattersburg", "Rangers Talca", "Uni. Católica", "SD Aucas", "Lleida Esportiu", "Sp. Belgrano", "SFC Opava", "GKS Belchatow", "NK Olimpija", "FC Koper", "M. Petah Tikva", "Kaizer Chiefs", "Boluspor", "HB Köge", "Forest Green", "FC Malisheva", "FC Ballkani", "Antofagasta", "Stabæk", "Åsane", "Ayr United", "Queen's Park", "Dunfermline A.", "Östersund", "Örebro SK", "Assyriska FF", "Audax Italiano", "Liverpool FC", "Mvd City Torque", "Gaz Metan", "Teramo", "Spartak Trnava", "Juan Aurich", "Alianza Lima", "Tulsa", "El Paso", "Real Monarchs", "Mezőkövesd", "FC Samtredia", "Újpest FC", "Torpedo Kutaisi", "CD Olimpia", "Oita Trinita", "Monte. Yamagata", "Sagan Tosu", "Bolívar", "Helmond Sport", "Brage", "Solihull Moors", "Notts County", "Gloucester", "Accrington", "Skive IK", "Fremad Amager", "Guaraní", "Cork City", "Almirante Brown", "SV Horn", "Grödig", "ES Sétif", "Esperance", "Kongsvinger", "Odd", "Falkenbergs FF", "Varbergs BoIS", "Helsingborgs IF", "Landskrona", "CD Iquique", "Wanderers", "SU Agen", "Bayonne", "Le Puy Foot", "FC Schaffhausen", "Plaza Colonia", "Rentistas", "Pandurii", "Academica Clince", "Pirin", "Viktoria Berlin", "Bethlehem Steel", "Columbus 2", "Orange County", "Sacramento FC", "Casertana", "Mosta FC", "Sliema Wander.", "Savoia", "Pavia", "AS Gubbio", "CDS Vida", "Takushoku Univ.", "FC Saxan", "Gomel", "CS Emelec", "Gateshead", "Grimsby Town", "FC Ferizaj", "Uniautónoma", "Dundalk FC", "Montrose", "Eastleigh", "Macclesfield", "TJ Jinmen Tiger", "Guillermo Brown", "All Boys", "Juniors OÖ", "FC Den Bosch", "Rot-Weiß Erfurt", "Hallescher FC", "Portland 2", "Ranheim", "Stjørdals-Blink", "Mjøndalen", "East Stirling", "Dag & Red FC", "Aldershot", "IK Oddevold", "AFC Eskilstuna", "FC Trollhättan", "Trelleborg", "Gefle", "Huachipato", "U. Católica", "NK Dugopolje", "FC Wil 1900", "Rampla Jrs", "KF Trepca", "KF Skënderbeu", "FC Drita", "Newport County", "LD Alajuelense", "Guadalupe FC", "Switchbacks FC", "FC Dila", "Real España", "FC Aarau", "Manisaspor", "Sanliurfaspor", "Bechem United", "Isloch", "Slo. Bratislava", "Cambridge Utd.", "Badalona", "Puerto Rico FC", "Harrogate Town", "Alfreton", "Fylde", "Al-Faisaly", "JS Suning", "MSV Duisburg", "Shkendija", "FC Liria", "FC Prishtina", "Mansfield Town", "Fleetwood", "Gillingham", "Hayes & Yeading", "Barnet", "Boreham Wood", "FK Senica", "KSK Heist", "Olimpo", "Sp. Italiano", "Pribram", "SF Lotte", "Ruch Chorzow", "FC Flora", "Chorrillo FC", "Chepo FC", "Cowdenbeath", "Raith Rovers", "Elgin City", "Queen o. t. S.", "IK Frej Täby", "NK Lucko", "Segesta Sisak", "NK Sesvete", "FC Vaduz", "B. Podgorica", "Astra Giurgiu", "FC Voluntari", "D. Calarasi", "CS Avion", "Quevilly Rouen", "Condal", "K.V.V. Crossing Elewijt", "SK Vorwärts Steyr", "Aris Limassol", "Odesa", "Saint-Pierroise", "Blacktown City", "Vicenza Calcio", "The Football League XI", "Chemnitzer FC", "First Vienna", "SKN St. Pölten", "Kremser SC", "Madura United", "C.C.D. Arturo Fernández Vial", "Società Calcio Leffe", "Neza", "Cobh Ramblers", "Kickers Offenbach", "Marocaine Casablanca", "Deportivo La Coruña Brasil Futebol Clube", "Tampa Bay Mutiny", "Miami Fusion", "HSV Barmbek-Uhlenhorst", "Saarbrücken", "Rawmarsh Welfare", "Chesterfield", "Cleveland Stokers", "Hellenic", "St. Pat's", "Fort Lauderdale Strikers", "FC Goa", "Gansu Tianma", "Boston Utd", "Högaborgs BK", "Råå IF", "A.C. Legnano", "Basque Country regional football team", "Zawisza", "Reipas Lahti", "MYPA", "FC Lahti", "Hansa Rostock", "Atlanta Silverbacks", "Léopards Douala", "Tonnerre Yaoundé", "SC Toulon", "Bali United", "TBVfL Neustadt-Wildenheid", "US Thionville", "Sport Club Barueri", "São José-SP", "EC São José", "San Antonio Thunder", "Seattle Sounders", "Saipa FC", "Racing CFF", "Vegalta Sendai", "Coronel Bolognesi", "Brandsen", "FC Chiasso", "Wimbledon", "St. George Saints Football Club", "Ravenna", "RCH", "New York Cosmos", "Fort Lauderdale Sun", "Kansas City Comets", "Zug 94", "Cork Celtic", "Young Fellows Juventus", "Chester City", "Sydney Olympic", "IFK Norrköping FK", "Karlstad BK", "Nuorese Calcio", "Torres", "Americano Futebol Clube", "Clube Atlético Lençoense/Bariri", "Madureira Esporte Clube", "Club Sporting Cristal", "Tiburones Rojos de Veracruz", "Rayo Cantabria", "SD Unión Club", "KFC Uerdingen 05", "San Diego Sockers", "Atlante", "Linz", "Atlético Celaya", "Club Celaya", "Boyacá Patriotas", "Real Cartagena", "Asociación Civil Deportivo Lara", "Leones", "FC Heartland", "ACR Messina", "Unione Sportiva Altamura", "Bartınspor", "Bank Tejarat", "Al Shabab Al Arabi Club", "Sabaye Qom", "Kairat Almaty", "GZ Evergrande", "Semassi", "Hessen Combinatie '03", "AGOVV Apeldoorn", "Quick Boys", "Clausenengen FK", "ATK", "PFC Pirin Blagoevgrad", "Bayer 04 Leverkusen II", "Kerala Blasters", "Colchester Utd.", "Valur", "KR Reykjavík", "CZ Mighty Lions", "Pune", "LKS Lodz", "Legia Warsaw", "Botafogo-SP", "São Cristóvão de Futebol e Regatas", "Bonsucesso Futebol Clube", "Sport Club Brasil", "Miami Freedom", "La Calera", "Arona Calcio", "Vancouver Whitecaps", "Cannes", "Real Madrid C", "RM Castilla", "Aretxabaleta", "Spartak 2", "Volgar", "Savona F.B.C.", "Sambenedettese", "KSK Beveren", "Universitary Sport Club", "Kuwait SC", "Telford United", "Essex County Cricket Club", "Cape Town City", "AD Fafe", "Concordia Knurów", "GKS Tychy", "Marsala Football Club", "Chennaiyin FC", "Kuusankosken Kumu", "HNK Borovo", "W. Mannheim", "Alem. Aachen", "Club Atlético Lanús", "Lyon La Duchère"];
const CLUBCC=["", "", "COL", "AUT", "FRA", "", "DEN", "ITA", "ROU", "", "NED", "GRE", "GRE", "", "SWE", "FRA", "GRE", "", "ITA", "FRA", "", "PT", "NED", "DEN", "NOR", "DEN", "SCO", "PT", "", "TUR", "TUR", "AUS", "NED", "TUR", "RUS", "RUS", "KSA", "", "", "", "KSA", "KSA", "KSA", "", "KSA", "KSA", "KSA", "", "KSA", "KSA", "KSA", "", "KSA", "KSA", "KSA", "KSA", "KSA", "", "KSA", "", "KSA", "KSA", "", "KSA", "RUS", "TUR", "ESP", "", "JPN", "ARG", "COL", "NED", "ESP", "TUR", "PT", "FRA", "RUS", "MEX", "", "", "BEL", "FRA", "TUR", "", "TUR", "RUS", "", "", "GRE", "ARG", "GRE", "GER", "PT", "ENG", "UKR", "", "RUS", "", "GRE", "ENG", "ITA", "ESP", "BRA", "", "", "", "COL", "ARG", "USA", "MEX", "ESP", "", "BRA", "GRE", "AUS", "GER", "USA", "AUT", "", "JPN", "PT", "TUR", "", "TUR", "RUS", "ARG", "CZE", "ESP", "", "", "ARG", "TUR", "SUI", "GER", "BEL", "BEL", "PT", "PT", "ARG", "ITA", "PT", "TUR", "ESP", "", "", "", "ENG", "", "AUT", "PT", "ARG", "TUR", "NOR", "CZE", "ITA", "", "FRA", "GER", "GER", "BRA", "ENG", "COL", "", "PT", "ENG", "ITA", "ENG", "AUS", "", "", "SWE", "NOR", "DEN", "CRO", "", "ENG", "TUR", "", "", "CZE", "TUR", "", "ARG", "COL", "", "MEX", "ESP", "", "", "", "", "ROU", "", "", "RUS", "", "ITA", "ENG", "", "ITA", "PT", "ITA", "BRA", "ESP", "SCO", "AUS", "ARG", "BEL", "JPN", "ITA", "", "BRA", "USA", "ENG", "PT", "ENG", "", "USA", "ITA", "MEX", "UKR", "USA", "", "FRA", "BEL", "", "MEX", "", "", "USA", "USA", "GER", "ITA", "DEN", "BRA", "BRA", "", "POL", "ITA", "", "", "ITA", "BRA", "ENG", "SRB", "ESP", "ESP", "USA", "CRO", "CRO", "USA", "KSA", "", "NED", "ARG", "", "SWE", "TUR", "", "COL", "COL", "COL", "ESP", "", "UKR", "PT", "FRA", "RUS", "SWE", "UKR", "", "CZE", "SCO", "SCO", "", "UKR", "RUS", "KOR", "GER", "BRA", "BRA", "GER", "TUR", "ESP", "SWE", "ITA", "COL", "UKR", "GRE", "DEN", "TUR", "ESP", "PT", "FRA", "SRB", "PT", "ARG", "ARG", "GER", "ENG", "NED", "TUR", "GER", "CRO", "ROU", "ROU", "ROU", "", "ROU", "NED", "NED", "DEN", "NED", "DEN", "ROU", "GER", "", "MEX", "", "FRA", "SUI", "SUI", "UKR", "FRA", "UKR", "PT", "ROU", "CRO", "UKR", "SUI", "FRA", "SUI", "SUI", "JPN", "NED", "ROU", "NED", "SUI", "SUI", "ROU", "BEL", "ROU", "RUS", "SRB", "SCO", "PT", "PT", "CZE", "", "PT", "", "TUR", "", "", "NED", "", "ITA", "BRA", "BRA", "", "BRA", "COL", "NED", "", "NOR", "GER", "ITA", "ENG", "FRA", "SWE", "POL", "TUR", "JPN", "CRO", "TUR", "TUR", "TUR", "BEL", "ITA", "ESP", "PT", "CRO", "ARG", "ARG", "", "TUR", "ESP", "NED", "ARG", "", "ESP", "SUI", "AUT", "", "GER", "BRA", "", "", "FRA", "CRO", "", "POL", "TUR", "KOR", "KOR", "KOR", "SWE", "NOR", "GER", "SCO", "SWE", "TUR", "NOR", "SCO", "NED", "GER", "ITA", "NED", "GER", "SCO", "DEN", "GER", "GER", "USA", "CZE", "ENG", "ENG", "ARG", "DEN", "SWE", "", "SWE", "NOR", "SRB", "CRO", "ARG", "COL", "COL", "ARG", "ARG", "ITA", "COL", "USA", "BRA", "SCO", "GRE", "", "ENG", "GRE", "TUR", "", "", "JPN", "CZE", "POL", "SRB", "SRB", "CRO", "CRO", "COL", "", "", "BRA", "ITA", "TUR", "BEL", "BEL", "NOR", "RUS", "BEL", "BEL", "BEL", "BEL", "BEL", "GRE", "SWE", "USA", "TUR", "TUR", "", "UKR", "CZE", "JPN", "JPN", "TUR", "JPN", "TUR", "RUS", "GRE", "SCO", "TUR", "UKR", "TUR", "POL", "RUS", "NOR", "UKR", "RUS", "JPN", "USA", "USA", "AUT", "", "", "UKR", "BEL", "ARG", "ESP", "", "SUI", "ITA", "FRA", "", "ITA", "POL", "POL", "ENG", "POL", "ENG", "", "", "FRA", "GRE", "ESP", "GER", "", "", "MEX", "", "BEL", "FRA", "NOR", "ENG", "SCO", "COL", "RUS", "", "", "", "ENG", "DEN", "FRA", "", "", "AUS", "", "JPN", "", "GER", "ESP", "SWE", "ENG", "ENG", "FRA", "PT", "MEX", "AUS", "AUS", "TUR", "UKR", "UKR", "UKR", "ROU", "UKR", "UKR", "ENG", "DEN", "COL", "", "USA", "BRA", "JPN", "SWE", "CZE", "SRB", "", "NOR", "MEX", "FRA", "USA", "ITA", "RUS", "PT", "SCO", "POL", "BEL", "ESP", "FRA", "NED", "NED", "KSA", "KOR", "KOR", "", "KOR", "KOR", "KOR", "PT", "", "JPN", "FRA", "ITA", "SRB", "USA", "", "MEX", "", "USA", "USA", "USA", "ENG", "ARG", "FRA", "DEN", "SWE", "", "ENG", "ENG", "", "SRB", "GER", "", "FRA", "GRE", "SRB", "BEL", "DEN", "", "", "PT", "UKR", "", "GRE", "", "COL", "TUR", "RUS", "USA", "ESP", "TUR", "ROU", "", "GRE", "GRE", "GRE", "NED", "UKR", "FRA", "NED", "MEX", "", "", "ITA", "BRA", "GRE", "GRE", "GRE", "GRE", "GRE", "", "CZE", "RUS", "FRA", "ITA", "SCO", "SRB", "", "", "PT", "", "TUR", "COL", "AUS", "", "ITA", "", "ROU", "", "USA", "", "POL", "ITA", "GRE", "ARG", "", "POL", "CRO", "UKR", "", "", "PT", "USA", "", "", "", "", "", "MEX", "ENG", "", "", "MEX", "BEL", "BEL", "BRA", "GER", "BEL", "NED", "BEL", "", "ARG", "", "SRB", "SRB", "POL", "POL", "DEN", "SCO", "AUT", "ESP", "ENG", "ESP", "", "ESP", "", "ESP", "", "", "", "", "BRA", "FRA", "PT", "COL", "ARG", "NED", "", "ITA", "ARG", "NOR", "SCO", "RUS", "", "RUS", "BEL", "RUS", "FRA", "NED", "", "UKR", "GER", "UKR", "AUT", "ESP", "ESP", "", "USA", "NOR", "RUS", "FRA", "ITA", "AUT", "", "FRA", "ITA", "", "USA", "AUT", "ITA", "TUR", "USA", "ARG", "MEX", "ARG", "NOR", "JPN", "PT", "BRA", "MEX", "ESP", "ARG", "ITA", "GER", "", "USA", "ROU", "SUI", "ESP", "UKR", "", "ENG", "JPN", "JPN", "", "ITA", "CZE", "DEN", "BEL", "SWE", "TUR", "POL", "KOR", "CZE", "CZE", "CZE", "ENG", "CZE", "NED", "SRB", "RUS", "ITA", "BRA", "PT", "ESP", "SCO", "USA", "SCO", "GER", "FRA", "", "FRA", "POL", "BEL", "", "", "ENG", "NOR", "AUT", "ENG", "CRO", "ENG", "", "AUS", "", "BRA", "DEN", "AUT", "RUS", "NED", "ESP", "CZE", "", "ARG", "MEX", "JPN", "MEX", "RUS", "PT", "ITA", "USA", "RUS", "", "RUS", "ENG", "FRA", "", "TUR", "", "", "", "", "NOR", "FRA", "ROU", "", "MEX", "", "", "", "", "ROU", "ITA", "RUS", "CRO", "GER", "BEL", "ROU", "ROU", "PT", "ARG", "RUS", "JPN", "NED", "JPN", "NED", "FRA", "ESP", "", "ESP", "USA", "", "", "BRA", "DEN", "DEN", "ITA", "UKR", "GRE", "GER", "", "DEN", "NOR", "CZE", "", "", "ESP", "JPN", "NED", "PT", "PT", "PT", "SRB", "GRE", "UKR", "SWE", "SWE", "NOR", "ARG", "AUT", "BEL", "", "ENG", "AUS", "GER", "ENG", "ENG", "AUS", "AUS", "POL", "ENG", "", "POL", "AUT", "GER", "ENG", "", "", "GRE", "TUR", "", "JPN", "JPN", "SUI", "SUI", "POL", "SRB", "RUS", "RUS", "UKR", "BEL", "FRA", "SWE", "SWE", "TUR", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "UKR", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""];
const NATS=["", "Albânia", "Alemanha", "Angola", "Argentina", "Argélia", "Arménia", "Arábia Saudita", "Austrália", "Azerbaijão", "Bangladesh", "Barbados", "Benim", "Bermudas", "Bielorrússia", "Bolívia", "Brasil", "Bulgária", "Burkina Faso", "Burundi", "Bélgica", "Bósnia", "CSSR", "Cabo Verde", "Camarões", "Canadá", "Catar", "Cazaquistão", "Chade", "Chile", "China", "Chipre", "Chéquia", "Colômbia", "Comores", "Congo", "Coreia do Norte", "Coreia do Sul", "Costa Rica", "Costa do Marfim", "Croácia", "Cuba", "Curaçau", "Dinamarca", "Djibouti", "EUA", "East Germany (GDR)", "Egito", "El Salvador", "Equador", "Eritrea", "Escócia", "Eslováquia", "Eslovénia", "Espanha", "Estónia", "Filipinas", "Finlândia", "França", "Gabão", "Gana", "Geórgia", "Grenada", "Grécia", "Guadalupe", "Guatemala", "Guernsey", "Guiana Francesa", "Guiné", "Guiné Equatorial", "Guiné-Bissau", "Haiti", "Honduras", "Hungria", "Ilhas Faroé", "Indonésia", "Inglaterra", "Iraque", "Irlanda", "Irlanda do Norte", "Irão", "Isle of Man", "Islândia", "Israel", "Itália", "Jamaica", "Japão", "Jordânia", "Jugoslawien (SFR)", "Kosovo", "Kuwait", "Letónia", "Libéria", "Lituânia", "Luxemburgo", "Líbia", "Macedonia", "Macedónia do Norte", "Madagáscar", "Malaysia", "Mali", "Malta", "Marrocos", "Martinica", "Mauritius", "Mauritânia", "Mayotte", "Moldávia", "Monaco", "Montenegro", "Moçambique", "México", "Netherlands Antilles", "New Caledonia", "Nicaragua", "Nigéria", "Noruega", "Nova Caledónia", "Nova Zelândia", "Omã", "Palestina", "Panamá", "Paraguai", "País de Gales", "Países Baixos", "Peru", "Polónia", "Portugal", "Quénia", "RD Congo", "República Centro-Africana", "República Dominicana", "Roménia", "Réunion", "Rússia", "Senegal", "Serbia and Montenegro", "Serra Leoa", "Seychelles", "Singapore", "St. Kitts & Nevis", "Suriname", "Suécia", "Suíça", "São Tomé e Príncipe", "Sérvia", "Síria", "Tanzânia", "The Gambia", "Togo", "Trindade e Tobago", "Tunísia", "Turquia", "Ucrânia", "UdSSR", "Uganda", "União Soviética", "Uruguai", "Usbequistão", "Venezuela", "Yugoslavia (Republic)", "Zaire", "Zimbabué", "Zâmbia", "África do Sul", "Áustria"];
const TAGS=["bdo", "cBRA", "cENG", "cESP", "cFRA", "cGER", "cITA", "cPT", "euro", "t:Abel Ferreira", "t:Alex Ferguson", "t:Ancelotti", "t:André Villas-Boas", "t:Arne Slot", "t:Arrigo Sacchi", "t:Arsène Wenger", "t:Arteta", "t:Bielsa", "t:Bruno Lage", "t:Capello", "t:Carlos Queiroz", "t:Conte", "t:Cruyff", "t:Del Bosque", "t:Deschamps", "t:Fernando Santos", "t:Guardiola", "t:Hansi Flick", "t:Jesualdo Ferreira", "t:Joachim Löw", "t:Jorge Jesus", "t:José Mourinho", "t:José Peseiro", "t:Klopp", "t:Leonardo Jardim", "t:Lopetegui", "t:Luis Enrique", "t:Mancini", "t:Marco Silva", "t:Nuno Espírito Santo", "t:Paulo Bento", "t:Paulo Fonseca", "t:Pochettino", "t:Rafa Benítez", "t:Ranieri", "t:Roberto Martínez", "t:Rui Vitória", "t:Rúben Amorim", "t:Sarri", "t:Scaloni", "t:Scolari", "t:Simeone", "t:Sérgio Conceição", "t:Tuchel", "t:Van Gaal", "t:Vítor Pereira", "t:Xabi Alonso", "t:Zidane", "ucl", "uel", "wc"];
const DB=`Lionel Messi|AVA|4|99|127.647.442|1987||169|208|4|0.26.3.36.4.42.49.58.60|D
Cristiano Ronaldo|AVA|127|99|812.552.721.463.52|1985||185|234|127|0.10.11.2.20.25.3.30.31.40.43.45.48.50.57.58.6.8|
Pelé|AVA|16|94|777.1284|1940||173|92||60|
Maradona|AVA|4|94|150.127.601.787.611|1960||165|91||6.59.60|
Zinedine Zidane|MED|58|98|156.463.721|1972||185|108||0.3.6.8.11.20.23.58.60|
Beckenbauer|DEF|2|96|133.408|1945||181|103||0.5.8.58.60|
Eusébio|AVA|127|92|140.577.136|1942||175|64||0.7.58|
Cruyff|AVA|124|98|32.127.523.354|1947||178|50||0.3.58|
Di Stéfano|AVA|4|98|150.427.567.721.291.734|1926||178|41||0.3.58|
Ronaldo Fenómeno|AVA|16|97|648.127.440.721.7|1976||183|98||0.60|
Maldini|DEF|84|93|7|1968||186|126||6.11.14.19.21.37.58|
Platini|MED|58|96|19.763.463|1955||179|72||0.4.6.8.58|
Puskás|AVA|73|92|721|1927||172|89||3.58|
Andrés Iniesta|MED|54|94|127.906|1984||171|132|54|23.26.3.35.36.54.58.60.8|
Xavi|MED|54|94|127.59|1980||170|145|54|22.23.26.3.36.54.58.60.8|
Kylian Mbappé|AVA|58|93|587.647.721|1998||178|107|58|11.24.34.36.4.42.53.56.60|
Ronaldinho|AVA|16|97|395.647.127.7.357.112.701.358|1980||182|97||0.3.11.50.58.60|E
Van Basten|AVA|124|97|32.7|1964||188|58||0.6.8.14.19.22.58|
Gerd Müller|AVA|2|95|133|1945||176|62||0.5.8.58.60|
George Best|AVA|79|93|552.824.367.419.717.160|1946||176|37||0.2.58|D
Garrincha|AVA|16|87|159.234.892.459.357|1933||170|50||60|D
Gianluigi Buffon|GR|84|97|663.463.647|1978||192|176|84|11.19.21.24.4.44.48.53.59.6.60|
Luka Modrić|MED|40|99|277.853.721.7|1985||174|206|88|0.11.3.31.35.43.56.57.58|
Robert Lewandowski|AVA|126|95|514.157.133.127.217|1988||185|167|126|11.25.26.27.3.33.5.58|
Erling Haaland|AVA|116|94|171.576.767.157.551|2000||195|59|76|2.26.58|
Baresi|DEF|84|90|7|1960||176|81||6.11.14.19.58.60|
Matthäus|MED|2|94|158.133.440.608|1961||174|150||0.5.6.8.59.60|
Zico|MED|16|86|357.871.482|1953||172|71||1|
Bobby Charlton|MED|76|94|552.695.556|1937||173|106||0.2.58.60|
Figo|AVA|127|95|812.127.721.440|1972||180|127||0.3.6.20.22.23.31.37.50.54.58|D
Thierry Henry|AVA|58|97|587.463.93.127.608|1977||188|123||2.3.4.8.11.15.26.58.60|
Roberto Baggio|AVA|84|94|356.463.7.154.440.165|1967||174|56||0.6.11.14.19.59|
Kaká|MED|16|95|834.7.721.637|1982||186|92|16|0.11.3.31.50.58.6.60|
Manuel Neuer|GR|2|95|133.782|1986||193|128|2|11.26.27.29.5.53.58.60|
Sergio Ramos|DEF|54|93|787.721.647.577|1986||184|180|54|11.19.23.3.31.35.36.4.42.43.57.58.60.8|
Toni Kroos|MED|2|94|133.524.721|1990||182|114|46|11.26.27.29.3.35.43.5.54.57.58.60|
Luis Suárez|AVA|157|95|598.312.32.532.127.110.395.442|1987||182|143|157|17.3.36.51.58|
Neymar|AVA|16|94|777.127.647.45|1992||175|130|16|11.3.30.36.4.42.50.53.58|
Kevin De Bruyne|MED|20|91|377.215.923.933.551.601|1991||181|127|20|2.21.26.31.43.45.58|
Virgil van Dijk|DEF|124|91|312.204.805.532|1991||195|100|124|13.2.33.54.58|
Yashin|GR|156|90|276|1929||189|78||0.8|
Fabio Cannavaro|DEF|84|95|601.663.440.463.721|1973||176|136||0.3.6.11.19.44.59.60|
Roberto Carlos|DEF|16|93|85.112.653.440.721.351.234|1973||168|125||3.19.20.23.50.58.60|
Romário|AVA|16|93|892.648.127.357.888.358.59.31|1966||168|70||3.22.50.60|
Shevchenko|AVA|153|93|275.7.215|1976||183|111||0.6.11.31.50.58|
Steven Gerrard|MED|76|91|532.499|1980||185|114|76|19.43.58.59|
Zlatan Ibrahimović|AVA|142|91|550.32.463.440.127.7.647.552.499|1981||195|122|142|11.19.26.3.31.37.4.59.6|
Iker Casillas|GR|54|98|721.325|1981||185|167|54|11.19.20.23.3.31.32.35.39.52.58.60.7.8|
Andrea Pirlo|MED|84|91|165.440.729.7.463.609|1979||177|116|84|11.21.58.6.60|
Francesco Totti|AVA|84|92|737|1976||180|58|84|19.36.44.6.60|
Karim Benzema|AVA|58|95|541.721.46.45|1987||185|97|58|0.11.24.3.31.35.4.43.57.58|
Harry Kane|AVA|76|93|853.526.568.616.518.133|1993||188|125|76|12.21.31.39.42.5.53|
Mohamed Salah|AVA|47|94|132.215.356.737.532.856|1992||175|115|47|13.2.20.31.33.58|D
Rodri|MED|54|91|905.110.551.127|1996||190|74|54|0.2.26.36.51.58.60.8|
Vinicius Junior|AVA|16|91|357.721|2000||176|57|16|11.3.35.56.57.58|E
Nesta|DEF|84|90|510.7.579|1976||187|78||6.11.58.60|
Cafu|DEF|16|90|834.779.462.653.737.7|1970||176|142||6.11.19.50.58.60|
Nedvěd|MED|32|91|806.510.463|1972||177|91||0.6.11.19.24.44|
Gullit|MED|124|93|354.648.7.768.215|1962||191|66||0.6.8.14.19.58|
Rivaldo|AVA|16|95|667.234.653.262.127.7.242.632.834.833|1972||186|74||0.3.11.50.54.58.60|E
Del Piero|AVA|84|91|650.463.832|1974||173|91||6.11.14.19.21.24.44.58.60|
Batistuta|AVA|4|86|611.734.150.356.737.440.38|1969||185|78||6.17.19.44|
George Weah|AVA|92|92|587.647.7.215.551.553.47|1966||182|75||0.4.6.14.15.19|
Stoichkov|AVA|17|94|195.127.663.52.483.217.247|1966||178|85||0.3.22.54.58|E
Rummenigge|AVA|2|96|133.440.786|1955||182|95||0.5.8.58|
Philipp Lahm|DEF|2|91|133.298|1983||170|113|2|11.26.29.5.54.58.60|
Frank Lampard|MED|76|91|925.830.215.551.609|1978||184|106|76|11.12.19.2.31.43.44.50.58.59|
Wayne Rooney|AVA|76|93|299.552.247.263|1985||176|120|76|10.19.2.20.31.54.58.59|
Didier Drogba|AVA|39|91|512.398.553.215.755.371.579|1978||189|104|39|11.12.2.31.37.50.58|
Dani Alves|DEF|16|92|279.787.127.463.647.834.865|1983||172|118|16|26.3.36.4.50.53.58.59.6|
Sergio Agüero|AVA|4|90|438.110.551.127|1988||170|101|4|2.26.37.49.59.60|
Thiago Silva|DEF|16|89|358.462.325.276.7.647.215|1984||183|113|16|11.4.42.50.53.58.6.7|
Eden Hazard|AVA|20|92|530.215.721|1991||175|126|20|11.2.21.3.31.4.43.45.48.57.58.59|E
Philippe Coutinho|MED|16|90|440.892.291.532.127.133.99.39.777|1992||172|68|16|27.3.31.33.42.43.44.5.50.58.6|
Alisson|GR|16|90|443.737.532|1992||193|83|16|11.13.2.33.58|
Thibaut Courtois|GR|20|93|377.110.215.721|1992||200|115|20|11.12.2.21.3.31.35.43.45.51.56.57.58.59|
Jan Oblak|GR|53|86|140.136.629.519.732.110|1993||186|88|53|3.30.34.39.51.59.7|
Rui Costa (1996)|MED|127|74|891.690.345.9.262.776.346.140.356.7|1996||179||127||
Jude Bellingham|MED|76|90|145.157.721|2003||186|60|76|11.3.53.56.58|
Lamine Yamal|AVA|54|91|127|2007||180|37|54|27.3.60.8|D
Oliver Kahn|GR|2|96|479.133|1969||188|86||5.8.29.58.59|
Deco|MED|127|91|234.140.74.765.325.127.215.358|1977||174|75||2.3.7.11.20.25.31.50.58.59|
Mário Coluna|MED|127|83|140.541|1935||172|57||7.58|
Sócrates|MED|16|86|234.356.357.777|1954||192|60|||
Michael Laudrup|MED|43|90|172.463.510.127.721.906.32|1964||183|104||3.6.22.58|
Eto'o|AVA|24|95|721.186.291.549.127.440.85.215.299.768.84.492.700|1981||180|118||3.6.23.26.31.43.45.58|
Raúl González|AVA|54|93|721.59.782|1977||178|102||3.19.20.23.58|
Robben|AVA|124|91|312.648.215.721.133|1984||180|96||2.3.5.11.26.31.54.58|D
Bergkamp|AVA|124|88|32.440.93|1969||183|79||2.15.22.54.59|
Javier Zanetti|DEF|4|89|125.440|1973||178|145|4|17.31.37.43.44.58.59.6|
Bastian Schweinsteiger|MED|2|91|133.552.217|1984||183|121|2|26.29.31.5.54.58.59.60|
John Terry|DEF|76|90|215.617.99|1980||187|78|76|11.12.19.2.21.31.43.44.50.58.59|
Paul Scholes|MED|76|90|552|1974||168|66|76|10.2.20.58|
Petr Cech|GR|32|90|806.731.215.93|1982||196|124|22|11.12.15.2.31.43.50.58.59|
Carles Puyol|DEF|54|93|127|1978||178|106|54|22.23.26.3.54.58.60.8|
Ricardo Carvalho|DEF|127|90|325.909.74.215.721.587|1978||182|89|127|11.12.2.20.25.3.31.34.40.44.50.58.59.7.8|
Pepe|DEF|127|92|554.325.721.141|1984||188|141|16|11.20.25.28.3.31.40.43.45.50.52.57.58.7.8|
Casemiro|MED|16|92|834.721.325.552.442|1992||188|91|16|11.3.31.35.43.47.50.57.58|
Gerard Piqué|DEF|54|95|552.779.127|1987||194|112|54|10.2.20.22.23.26.3.35.36.58.60.8|
Franck Ribéry|AVA|58|91|866.818.323.371.553.133.356.764|1983||170|81|58|11.24.26.5.54.58|E
Giorgio Chiellini|DEF|84|90|18.737.463.356.500|1984||187|117|84|19.21.24.37.44.48.6.8|
Radamel Falcao|AVA|33|89|734.325.110.587.552.215.371.719.567|1986||177|104|33|12.20.28.31.34.4.44.51.54.59.7|
Gareth Bale|AVA|123|93|805.853.721.500|1989||185|111|123|11.12.3.31.35.43.57.58|D
Ángel Di María|AVA|4|90|738.140.721.552.647.463|1988||180|145|4|11.18.3.30.31.4.42.49.53.54.58.60.7|D
Marcelo|DEF|16|79|777.930.648.141.541.156.926.721.358|1987||191||16||
Thomas Müller|AVA|2|92|133.889|1989||185|131|2|11.26.27.29.5.53.54.58.60|
Romelu Lukaku|AVA|20|90|80.215.924.299.552.440.737.601.351|1993||191|132|20|12.21.31.42.43.45.53.58.6|
Antoine Griezmann|AVA|58|90|725.110.127.637|1991||176|137|58|24.51.59.60|
Raheem Sterling|AVA|76|89|532.551.215.93.354|1994||172|82|85|16.2.26.42.53|D
Joshua Kimmich|MED|2|87|705.133.298|1995||177|116|2|11.26.27.29.5.53.58|
N'Golo Kanté|MED|58|90|866.759.518.215.46.351|1991||171|69|58|2.21.24.44.48.53.58.59.60|
Bruno Fernandes|MED|127|89|618.871.768.812.552|1994||183|97|127|25.30.32.45.47|
Bernardo Silva|MED|127|88|140.587.551.721|1994||173|115|127|2.25.26.30.34.4.45.58.7|
Rúben Dias|DEF|127|87|140.551|1997||186|84|127|18.2.25.26.30.45.46.58.7|
Ousmane Dembélé|AVA|58|94|731.157.127.647|1997||179|71|58|0.24.3.36.4.53.58.60|
Alexander Isak|AVA|142|86|14.157.725.610.532|1999||190|63|142|13|
Phil Foden|MED|76|88|551|2000||171|49|76|2.26.53.58|
Raphinha|AVA|16|88|908.812.731.516.127|1996||177|43|16|11.17.27.3.32|E
Vitinha|MED|127|86|325.934.647|2000||172|47|127|4.7.25.36.39.45.52.58|
Michael Olise|AVA|58|85|720.243.133|2001||180|29|76|24.5|D
Pedri|MED|54|90|507.127|2002||174|53|54|27.3.36.60.8|
Peter Schmeichel|GR|43|94|428.172.552.812.99.551|1963||193|129||2.7.8.10.58|
Thuram|DEF|58|90|587.663.463.127|1972||182|142||6.8.11.15.19.59.60|
Sergio Busquets|MED|54|93|127.442|1988||189|151||3.8.22.23.26.35.36.54.58.60|
Patrick Vieira|MED|58|91|7.93.463.440.551|1976||192|107||2.6.8.15.19.31.37.60|
Yaya Touré|MED|39|90|563.632.587.127.551|1983||189|102||2.3.26.37.58|
Van Nistelrooy|AVA|124|91|414.648.552.721.408.586|1976||188|70||2.3.10.19.20.54|
Klinsmann|AVA|2|91|298.440.587.853.133.768|1964||181|108||5.8.15.59.60|
Cantona|AVA|58|89|15.156.578.622.516.552.553|1966||188|45||2.10|
Michael Owen|AVA|76|92|532.721.610.552.825|1979||172|89|76|0.10.19.2.59|
Rio Ferdinand|DEF|76|90|925.160.516.552.698|1978||189|81|76|10.19.2.20.58|
Wesley Sneijder|MED|124|90|32.721.440.371.612.43|1984||170|134|124|3.31.37.43.44.54.58.6|
Xabi Alonso|MED|54|93|753.725.532.721.133|1981||183|114|54|11.23.26.3.31.43.5.58.60.8|
Fernando Torres|AVA|54|93|110.532.215.7|1984||186|110|54|12.23.3.31.43.51.58.59.60.8|
David Villa|AVA|54|91|813.779.888.127.110.557.609.906|1981||175|98|54|23.26.3.51.58.60.8|
Cesc Fàbregas|MED|54|92|127.93.215.587.232|1987||179|113|54|15.2.21.22.23.26.3.31.34.48.59.60.8|
Nemanja Vidic‎|DEF|145|90|808.294.809.552.440|1981||190|76|88|10.2.20.37.58|
Ivan Rakitic|MED|40|91|132.787.127.60.405|1988||184|106|143|3.35.36.58.59|
David Silva|MED|54|91|753.888.203.551.725|1986||170|125|54|2.23.26.35.37.44.60.8|
Mats Hummels|DEF|2|89|133.157.737|1988||191|78|2|11.27.29.33.44.5.53.60|
Alexis Sánchez|AVA|29|90|227.871.734.127.93.552.440.553.787.579|1988||168|168|29|15.17.21.26.3.31.6|
Miralem Pjanić|MED|21|88|323.541.737.463.127.141.194|1990||178|115|88|36.48.6|
Edinson Cavani|AVA|157|89|252.652.601.647.552.888.150|1987||184|136|157|17.4.53|
Pierre-Emerick Aubameyang|AVA|59|88|819.7.266.530.587.763.157.93.127.215.553.55.262|1989||187|86|58|11.15.16.3.33.53.6|
Thiago Alcántara|MED|54|90|127.133.532|1991||174|46|84|11.23.26.27.3.33.35.36.5.58|
Christian Eriksen|MED|43|89|626.32.853.440.164.552.933|1992||182|146|43|12.21.31.42.47.6|
Marc-André ter Stegen|GR|2|87|158.127.386.32|1992||187|44|2|27.29.3.36.58|
Isco|MED|54|91|888.586.721.787.142|1992||176|39|54|11.23.3.35.36.43.57.58|
Kalidou Koulibaly|DEF|135|86|323.377.601.215.45|1991||188|103|58|11.30.43.48.53|
Jorginho|MED|84|90|416.601.215.93.357|1991||180|57|16|8.16.37.43.48.53.58.59|
Samuel Umtiti|DEF|58|89|541.127.513.530|1993||182|31|24|24.3.36.41.60|
Álvaro Morata|AVA|54|90|721.463.215.110.7.371.232.186|1992||187|87|54|11.21.23.3.31.35.36.41.48.51.52.57.58.59.6.8|
Lorenzo Insigne|AVA|84|86|601.359.674.849.768|1991||163|54|84|11.21.37.43.48.8|E
Leon Goretzka|MED|2|88|898.133.99|1995||189|73|2|27.29.5.53.58|
Serge Gnabry|AVA|2|88|93.924.923.133.421|1990||181|62|2|15.27.29.5.53.58|
Raphaël Varane|DEF|58|93|521.721.552.232|1993||191|93|58|11.24.3.31.35.43.57.58.60|
Timo Werner|AVA|2|87|298.705.215.853.756|1996||180|57|2|27.29.53.58.59|
Riyad Mahrez|AVA|5|90|511.518.551.36.954|1991||181|120|58|2.26.44.58|D
Aymeric Laporte|DEF|54|87|101.184.144.551.52|1994||191|52|58|17.2.23.26.35.36.58.60.8|
Marquinhos|DEF|16|88|234.737.647|1994||183|112|16|11.36.4.42.50.53.58|
John Stones|DEF|76|88|129.299.551.440|1994||188|94|76|2.26.45.53.58|
Leroy Sané|AVA|2|87|551.133.371|1996||183|72|2|2.26.27.29.5.53|D
Sadio Mané|AVA|135|90|400.323.767.805.532.133.52|1992||174|130|135|2.30.33.5.53.58|E
Jack Grealish|AVA|76|87|99.551.299|1995||180|39|76|2.26.53.58|E
Thomas Lemar|MED|58|84|759.587.110.386.283|1995||171|27|64|24.3.34.4.51.60|
Paulo Dybala|AVA|4|89|439.652.463.737|1993||177|40|4|31.44.48.49.6.60|
Fabinho|MED|16|86|358.732.721.587.532.46.856|1993||188|36|16|2.4.11.33.34.39.44.52.58|
Andrew Robertson|DEF|51|88|273.426.532.853|1994||178|101|51|13.2.33.38.58|
Kingsley Coman|AVA|58|88|647.463.133.52|1996||180|57|58|11.24.26.27.30.4.5.53.58.6|E
José María Giménez|DEF|157|83|252.110.262|1995||185|101|157|17.3.51.59|
Nicolò Barella|MED|84|87|196.232.440|1997||175|73|84|21.37.6.8|
Marcus Rashford|AVA|76|90|552.99.127|1997||188|78|76|27.3.31.47.53.54.59|E
Lucas Hernández|DEF|58|90|150.110.104.133.647|1996||184|42|58|24.27.36.4.5.51.58.59.60|
Marcos Llorente|DEF|54|89|721.66.110|1995||184|26|54|23.3.35.36.43.51.57.58.60|
Dani Olmo|MED|54|90|291.127.277.705|1998||176|61|54|26.27.3.36.58.60.8|
Marco Asensio|MED|54|91|549.721.291.647.99.351|1996||182|38|54|11.3.35.36.4.43.57.58|
Kai Havertz|AVA|2|89|524.215.93|1999||193|63|2|16.2.27.29.53.58|
Alessandro Bastoni|DEF|84|85|100.440.663|1999||190|46|84|21.37.6.8|
Gianluigi Donnarumma|GR|84|89|7.647.551|1999||196|72|84|26.36.37.4.42.58.8|
Martin Ødegaard|MED|116|90|826.721.414.907.725.93|1998||178|77|116|16.2.35.43.57|
Viktor Gyökeres|AVA|142|84|170.166.817.830.236.812.93|1998||189|41|142|16.2.47.7|
Frenkie de Jong|MED|124|88|32.127|1997||180|70|124|27.3.54|
Federico Chiesa|AVA|84|87|356.463.532|1997||175|51|84|13.2.37.8|D
Fabián Ruiz|MED|54|88|143.142.283.601.647|1996||189|52|54|11.36.4.58.60.8|
Mikel Oyarzabal|AVA|54|84|725.753|1997||181|64|54|35.36.60.8|
Gabriel Jesus|AVA|16|87|653.551.93.127|1997||177|64|16|11.16.2.26|
Federico Valverde|MED|157|90|677.262.721|1998||183|76|157|11.17.3.35.56.57.58|
Achraf Hakimi|DEF|102|91|721.157.440.647|1998||180|102|54|21.35.36.4.42.57.58.6|
Jadon Sancho|AVA|76|87|157.552.215.99|2000||180|23|76|47.59|E
Lautaro Martínez|AVA|4|88|710.440|1997||174|87|4|21.49.6.60|
Rodrygo|AVA|16|90|777.721|2001||174|37|16|11.3.56.57.58|D
Aurélien Tchouaméni|MED|58|89|156.587.721|2000||187|50|58|11.24.3.56.58|
Alphonso Davies|DEF|25|87|889.133|2000||183|59|60|27.5.53.58|
Dominik Szoboszlai|MED|73|85|318.767.705.532|2000||186|69|73|13.2.33|
Ryan Gravenberch|MED|124|86|648.32.133.532|2002||190|35|124|13.2.33.5.53.54|
Randal Kolo Muani|AVA|58|86|600.866.281.647.463.853|1998||187|32|58|24.36.4.58|
Khvicha Kvaratskhelia|AVA|61|87|535.745.601.647|2001||183|54|61|21.36.4.58.6|E
Cole Palmer|MED|76|87|551.215|2002||185|14|76|2.26.42.53.58|
Jamal Musiala|MED|2|86|133|2003||184|42|2|27.5.53|
Florian Wirtz|MED|2|85|524.532|2003||176|48|2|13.27.5.56|
Fermín López|MED|54|84|127|2003||176|10|54|27.3.8|
Eduardo Camavinga|MED|58|89|731.721|2002||182|29|3|11.24.3.56.58|
Willian Pacho|DEF|49|82|438.744.281.647|2001||188|41|49|36.4.58|
Moisés Caicedo|MED|49|84|438.166.135.215|2001||178|65|49|42|
Désiré Doué|AVA|58|84|731.647|2005||181|19|58|24.36.4.58|D
Van der Sar|GR|124|91|127.463.367.552.32|1970||197|130||2.10.11.20.22.54.58|
Hierro|DEF|54|90|887.886.721.57.155|1968||190|89||3.19.23.58|
Desailly|DEF|58|91|600.553.7.215.43.700|1968||185|116||4.6.8.14.19.44.58.60|
Koeman|DEF|124|91|312.32.648.127.354|1963||182|78||3.8.22.58|
Seedorf|MED|124|91|32.768.721.440.7.159|1976||176|87||3.6.11.19.54.58|
Riquelme|MED|4|87|150.127.905|1978||182|51||17.54|
Gheorghe Hagi|MED|132|89|335.339.721.165.127.371|1965||174|125||22.59|
Özil|MED|2|91|923.721.93.351.131|1988||180|92||3.15.16.29.31.55.60|
Fernando Redondo|MED|4|89|189.721.7|1969||186|29||3.6.11.17.19.23.58|
Fernando Gomes|AVA|127|82|325.813.812|1956||174|48||7.58|
Peyroteo|AVA|127|79|812.120|1918||0|20||7|
Giggs|AVA|123|91|552|1973||180|64||2.10.20.58|E
Van Persie|AVA|124|90|354.93.552.351|1983||183|102||2.10.15.54.55.59|
Jairzinho|AVA|16|81|159.553.242.693|1944||173|||60|D
Crespo|AVA|4|89|734.663.510.440.215.7.378|1975||185|64||6.11.17.31.37.44.59|
Miroslav Klose|AVA|2|92|0.923.133.510|1978||184|137|126|29.5.54.60|
Lúcio|DEF|16|89|443.524.133.440.463.834.653|1978||187|105|16|21.31.43.44.5.50.58.6.60|
David Beckham|MED|76|94|552.695.721.499.7.647|1975||183|115|76|10.11.19.2.20.3.4.58|
Ashley Cole|DEF|76|90|93.243.215.737.499.263|1980||176|107|76|11.12.15.19.2.31.43.50.58.59|
Nicolas Anelka|AVA|58|90|647.93.721.532.551.351.155.215.755.463.924|1979||185|69|58|11.12.15.2.21.23.50.58.6.8|
Ryan Giggs|MED|123|91|552|1973||180|64|123|10.2.20.58|
Carlos Tevez|AVA|4|91|150.234.925.552.551.463.755|1984||173|76|4|10.2.20.21.37.58.6|
Daniele De Rossi|MED|84|88|737.150|1983||184|117|84|19.21.36.44.60|
Luca Toni|AVA|84|89|575.285.858.165.652.356.133.737.378.463.51.416|1977||193|47|84|21.44.5.54.6.60|
Jérôme Boateng|DEF|2|91|418.408.551.133.541.764.501|1988||192|76|2|11.26.27.29.37.5.58.60|
Sami Khedira|MED|2|90|298.721.463.418|1987||189|77|2|11.29.3.31.48.5.58.6.60|
Arturo Vidal|MED|29|90|227.864.524.463.133.127.440.357.102|1987||180|147|29|11.17.21.26.3.5.6|
Gonzalo Higuaín|AVA|4|89|734.721.601.463.7.215.442|1987||184|75|58|3.31.43.48.49.59.6|
Leonardo Bonucci|DEF|84|90|440.858.681.378.128.463.7.874.351|1987||189|121|84|21.31.37.48.6.8|
Ivan Perišić|AVA|40|89|330.224.157.933.440.133.853.405.648|1989||186|150|88|21.27.33.37.5.58.6|E
Javi Martínez|MED|54|90|638.101.133.700|1988||192|18|54|11.17.23.26.27.5.58.60.8|
Juan Mata|MED|54|90|888.215.552.371.906.926.556|1988||170|41|54|12.23.31.43.54.58.59.60.8|
Diego Costa|AVA|54|89|163.669.110.203.67.886.719.215.112.934.159.395|1988||185|26|16|2.21.23.28.3.31.35.51.59|
Georginio Wijnaldum|MED|124|88|354.648.610.532.647.737.40.46|1990||173|96|124|2.31.33.4.42.43.54.58|
Mateo Kovacic|MED|40|91|277.440.721.215.551|1994||177|121|165|2.26.3.35.37.43.48.53.57.58.59|
İlkay Gündoğan|MED|2|89|620.157.551.127.371|1990||180|82|2|2.26.27.29.33.5.53.58|
Diego Godín|DEF|157|90|598.905.110.440.196.112.917|1986||188|161|157|21.3.51.59|
David Alaba|DEF|165|91|117.133.421.721.871|1992||180|117|165|11.26.27.3.5.54.56.58|
David de Gea|GR|54|90|104.110.552.356|1990||189|45|54|10.2.23.31.35.36.54.59|
Mauro Icardi|AVA|4|85|768.440.647.371|1993||181|8|4|21.37.4.42.49.53|
Koke|MED|54|88|104.110|1992||170|70|54|23.3.35.36.51.59|
Mario Götze|MED|2|89|157.133.648.281|1992||176|66|2|26.27.29.33.5.53.60|
Sergi Roberto|MED|54|89|127.232.499|1992||178|17|54|22.26.3.35.36.58|
Heung-min Son|AVA|37|88|408.524.853.500|1992||183|144|37|21.31.39.40.42.59|E
Alexandre Lacazette|AVA|58|85|541.93.590|1991||175|16|58|15.16.24.41|
Marco Verratti|MED|84|85|674.647.38.39|1992||190|55|84|11.21.37.4.42.53.8|
Ciro Immobile|AVA|84|90|463.794.674.378.848.157.787.510.141.154.662|1990||182|57|84|21.33.37.48.6.8|
Stefan de Vrij|DEF|124|86|354.510.440.654|1992||189|79|124|21.54.6|
Granit Xhaka|MED|143|88|132.158.93.524.828|1992||185|152|143|15.16.5.56|
Paul Pogba|MED|58|91|552.463.587|1993||191|91|58|10.21.24.31.59.6.60|
Daniel Carvajal|DEF|54|92|524.721.379|1992||168|52|54|11.23.3.35.36.43.56.57.58.8|
Saúl Ñíguez|MED|54|84|104.110.719.215.787.357|1994||183|19|54|3.35.36.51.53.59|
Marcelo Brozović|MED|40|86|592.277.440.52.59|1992||181|99|40|21.30.37.6|
Niklas Süle|DEF|2|87|421.133.157|1995||195|49|2|11.27.29.5.58|
Memphis Depay|AVA|124|89|648.552.541.127.110.234|1994||178|108|124|3.31.51.54.59|
Harry Maguire|DEF|76|89|790.426.929.518.552|1993||194|64|76|38.47.53|
Piotr Zielinski|MED|126|86|944.871.285.601.440|1994||180|113|126|11.25.48.6|
João Cancelo|DEF|127|88|140.888.440.463.551.133.127.45|1994||182|64|127|2.25.26.27.3.30.39.45.5.53.58.6.7|
Anthony Martial|AVA|58|89|541.587.552.787.12.577|1995||181|30|58|24.31.34.35.44.54.59|
Adrien Rabiot|MED|58|87|647.854.463.553.7|1995||191|69|58|11.24.4.48.53.6|
Corentin Tolisso|MED|58|86|541.133|1994||180|28|58|11.24.27.41.5.58.60|
Kepa Arrizabalaga|GR|54|89|101.184.144.688.886.215.721.160.93|1994||188|13|54|11.16.17.2.3.35.36.42.48.53.58.59|
Federico Dimarco|DEF|84|84|440.97.285.329.663.416|1997||175|38|84|21.37.6|
Nabil Fekir|MED|58|83|541.142.47.955|1993||173|25|58|24.60|
Milan Škriniar|DEF|52|86|768.440.647.351|1995||188|87|52|21.31.36.4.6|
Raúl Jiménez|AVA|111|84|77.110.140.934.367|1991||191|127|111|18.35.38.39.46.51.7|
Dele Alli|MED|76|85|543.853.299.141.232|1996||188|37|76|21.31.39.42|
Hakim Ziyech|AVA|102|88|414.334.32.215.371.39.159.957|1993||180|64|124|42.53.58|D
Ederson|GR|16|86|732.140.551.351|1993||188|29|16|11.2.26.39.46.58.7|
Youri Tielemans|MED|20|86|80.587.518.99.552|1997||176|93|20|34.45.59|
Luka Jović|AVA|145|87|294.87.140.281.721.356.7.12|1997||182|31|160|11.18.3.41.46.52.57.58.7|
Sergej Milinković-Savić|MED|145|84|911.377.510.45|1995||191|56|54|30.48|
Wilfred Ndidi|MED|115|83|377.518.141|1996||188|66|115|44|
Manuel Akanji|DEF|143|87|337.132.157.551.440|1995||186|86|143|2.26.58.6|
Marc Cucurella|DEF|54|87|291.127.753.379.166.215.721|1998||173|35|54|36.42.53.60.8|
James Maddison|MED|76|83|236.616.26.518.853|1996||175|7|76|53.59|
Franck Kessié|MED|39|87|100.209.7.127.36|1996||183|105|39|3.6|
Naby Keïta|MED|68|87|316.767.705.532.923.352|1995||172|58|68|2.33.58|
Trent Alexander-Arnold|DEF|76|89|532.721|1998||175|36|76|13.2.33.53.56.58|
Christian Pulisic|AVA|45|88|157.215.7|1998||177|90|45|41.42.48.52.53.58|D
Marcus Thuram|AVA|58|84|330.398.158.440|1997||192|35|84|24.6|
Ollie Watkins|AVA|76|84|164.99.45|1995||180|24|76|53.59|
Matthijs de Ligt|DEF|124|88|32.463.133.552|1999||189|50|124|47.48.5.53.54.6|
Theo Hernández|DEF|58|87|104.66.110.721.725.7.45|1997||184|42|58|24.35.41.52.57.58.6|
Davinson Sánchez|DEF|33|80|106.32.853.371|1996||188||33|20.21.31.39.42|
Nicolas Pépé|AVA|39|84|81.868.530.93.612.856.905|1995||183|37|58|16.17|D
Christopher Nkunku|AVA|58|84|647.705.215.7|1997||178|18|58|24.4.42.53|
Dayot Upamecano|DEF|58|85|318.767.705.133|1998||186|43|58|24.5.53|
Mason Mount|MED|76|88|907.215.263.552|1999||181|36|76|21.47.48.53.58|
Benjamin Pavard|DEF|58|87|530.298.133.440.553|1996||186|55|58|24.27.5.53.58.6.60|
Cristian Romero|DEF|4|85|138.378.463.100.853.110|1998||188|56|4|21.39.48.49.59.60|
Ibrahima Konaté|DEF|58|86|330.705.532.721|1999||194|30|58|13.2.24.33|
Rafael Leão|AVA|127|87|812.530.7.371|1999||188|49|127|25.30.41.45.52.6|E
Dušan Vlahović|AVA|145|86|665.356.463.141|2000||190|41|160||
Declan Rice|MED|76|87|925.93|1999||188|83|76|16.2.53|
Arthur Melo|MED|16|86|389.395.127.463.532.356.386.777|1996||171|22|16|3.33.50|
Richarlison|AVA|16|86|78.358.921.299.853|1997||184|54|16|11.21.38.43.59|
Marc Guéhi|DEF|76|85|215.830.243.551|2000||182|41|39|26.53|
Sandro Tonali|MED|84|83|165.7.610.853|2000||182|30|84|37.6|
Ferran Torres|AVA|54|89|888.551.127.647|2000||184|66|54|2.26.27.3.36.60.8|
Victor Osimhen|AVA|115|86|933.702.530.601.371|1998||186|51|115|21.6|
Takefusa Kubo|AVA|86|87|333.940.721.549.905.379.725|2001||169|54|86|11.57.59|D
Jules Koundé|DEF|58|87|156.787.127|1998||180|58|58|24.27.3.35.59|
Bryan Mbeumo|AVA|24|82|862.164.552|1999||171|32|58|47|D
Jurriën Timber|DEF|124|84|32.93|2001||179|23|124|16.2.54|
Martín Zubimendi|MED|54|83|725.93|1999||181|30|54|16.2.36.60.8|
Nahuel Molina|DEF|4|84|150.254.738.871.110.737|1998||175|65|4|49.51.60|
Morgan Gibbs-White|MED|76|81|934.830.790.617|2000||171|10|76|18.39.53.55|
Dejan Kulusevski|MED|142|84|100.663.463.853|2000||186|39|142|21.59|
Bukayo Saka|AVA|76|88|93.147.913|2001||178|59|76|16.2.53|D
Cody Gakpo|AVA|124|86|648.532|1999||193|56|124|13.2.33.54|E
Gabriel|DEF|16|84|530.862.277.93|1997||190|24|16|11.16.17.2|
Lucas Paquetá|MED|16|84|357.7.541.925|1997||180|67|16|11.35.39|
Omar Marmoush|AVA|47|84|933.817.298.281.551.853|1999||180|58|47|20.26|
Douglas Luiz|MED|16|83|892.551.386.99.463.617|1998||175|18|16|11.26.59|
Tanguy Ndombélé|MED|58|82|75.541.853.601.371.612|1996||181|7|58|21.24.31.39.42.6|
Nick Woltemade|AVA|2|82|923.298.610.463|2002||198|14|2||
Tijjani Reijnders|MED|124|83|645.22.707.7.551.55|1998||185|35|124|13.26.41.52|
Ansu Fati|AVA|54|87|127.166.587|2002||178|10|70|27.3.36|E
Reece James|DEF|76|87|215.929|1999||179|26|76|42.48.53.58|
Eberechi Eze|MED|76|83|698.936.243.93|1998||178|25|76|16.2.53|
Ronald Araujo|DEF|157|87|127.532|1999||191|27|157|17.27.3|
Luis Díaz|AVA|33|87|459.325.532.133|1997||178|79|33|13.2.20.33.5.52.7|E
Jérémy Doku|AVA|20|84|80.731.551|2002||173|41|20|2.26.45|E
Min-jae Kim|DEF|37|84|458.122.351.601.133|1996||190|85|37|40.5.53.55.6|
Anthony Gordon|AVA|76|84|299.695.610.127|2001||183|28|76|11.38.43.53|E
Morgan Rogers|MED|76|85|924.551.160.147.565.99.215|2002||187|26|76|26.53.59|
Matheus Cunha|AVA|16|84|329.705.418.110.934.552|1999||184|28|16|11.35.47.51.55|
Jonathan David|AVA|25|83|465.530.463.110|2000||178|82|45|4.41|
Micky van de Ven|DEF|124|83|336.933.853|2001||193|28|124|59|
Xavi Simons|MED|124|84|647.648.705.853|2003||179|34|124|36.4.42|
Elliot Anderson|MED|76|83|610.169.617.551|2002||179|21|76|39.53.55|
Julián Alvarez|AVA|4|87|734.551.110|2000||169|61|4|2.26.49.51.58.60|
Antoine Semenyo|AVA|60|82|168.828.160.551|2000||185|38|76|20.26|D
Antony|AVA|16|84|834.32.552.142|2000||172|16|16|11.47|D
Rayan Cherki|MED|58|83|541.551|2003||176|18|58|24.26.41|
Rasmus Højlund|AVA|43|84|233.827.100.552.601|2003||191|39|43|21.47|
Nuno Mendes|DEF|127|87|812.647|2002||183|43|127|25.36.4.42.45.47.58.7|
João Pedro (2001)|AVA|16|82|358.921.166.215|2001||186|8|16|11.44|
Benjamin Sesko|AVA|53|83|318.767.705.552|2003||195|45|53|47|
Evan Ferguson|AVA|78|77|166.925.737|2004||183||78||
Gabriel Martinelli|AVA|16|85|450.93.45|2001||180|27|16|11.16.2|E
João Neves|MED|127|85|140.647|2004||171|30|127|36.4.45.58.7|
Bradley Barcola|AVA|58|86|541.647.532|2002||182|28|58|24.36.4.58|E
Nico Williams|AVA|54|84|181.638.101.144|2002||181|38|54|60.8|E
Hugo Ekitiké|AVA|58|83|820.893.647.281.532|2002||190|8|58|13.24.36.4|
Nico O'Reilly|DEF|76|84|551|2005||193|13|76|26.53|
Adam Wharton|MED|76|80|146.243|2004||182|4|76|53|
Aleksandar Pavlovic|MED|2|83|133|2004||188|17|2|5.53|
Warren Zaïre-Emery|MED|58|84|647|2006||178|7|58|24.36.4.58|
Kobbie Mainoo|MED|76|86|552|2005||175|14|76|47.53|
Kenan Yıldız|AVA|152|83|460.463|2005||185|31|2||E
Arda Güler|MED|152|87|351.721|2005||176|36|152|11.3.30.55.56|
Dean Huijsen|DEF|54|81|586.460.463.737.160.721|2005||197|6|124|31.56|
Nico Paz|MED|4|82|721.232|2004||185|14|54|11.3.49.58|
Junior Kroupi|AVA|58|77|319.160|2006||179||58||
Pau Cubarsí|DEF|54|84|386.127|2007||184|17|54|27.3.60|
Estêvão|AVA|16|80|653.215|2007||176||16|9|D
Yan Diomande|AVA|39|81|186.705.721|2006||182|15|39||E
Vítor Baía|GR|127|86|325.127|1969||186|80||3.7.20.25.28.31.54.58.59|
Kompany|DEF|20|87|80.408.551|1986||193|89||2.26.37.45|
Stam|DEF|124|87|645.747.648.552.510.7.32|1972||191|67||2.10.11.37.54.58|
Jordi Alba|DEF|54|91|384.888.127.442|1989||170|98||3.8.22.23.35.36.58|
Makélélé|MED|58|89|818.600.553.203.721.215.647|1973||174|71||2.3.4.23.31.44.58|
Paulo Futre|AVA|127|86|812.325.110.140.553.728.7.925|1966||176|41||6.7.19.20.58|E
Mário Jardel|AVA|16|85|892.395.325.371.812.155.611.66.389.136.83.610.240|1973||188|10||7.25.50|
Madjer|AVA|5|83|855.325.888.700|1958||178|87||7.58|E
Kluivert|AVA|124|89|32.7.127.610.888.648.530|1976||187|79||3.19.54.58|
Foden|AVA|76|88|551|2000||171|49||2.26.53.58|
Forlán|AVA|157|94|438.552.905.110.440.443.208.677|1979||179|112||2.10.20.44.59|
Trezeguet|AVA|58|90|683.587.463.430.734.611|1977||190|71||4.6.8.11.19.24.44.60|
Pablo Aimar|MED|4|84|297.734.888.779.140|1979||170|52|4|17.3.30.43.44.59.7|
Dejan Stankovic|MED|145|88|294.510.440|1978||181|164|88|31.37.43.44.58.6|
Cristian Chivu|DEF|132|87|32.737.440|1980||184|75|132|19.31.37.43.44.58.6|
Patrice Evra|DEF|58|90|580.612.587.552.463.553.925|1981||173|81|135|10.2.20.24.58.6|
Alberto Gilardino|AVA|84|89|679.416.663.7.356.154.378.652.285.674.810|1982||185|57|84|11.58.60|
Mario Gómez|AVA|2|89|298.133.356.141.933|1985||189|78|2|29.5.54.58|
Víctor Valdés|GR|54|92|127.552.822.565|1982||183|32|54|22.23.26.3.54.58.60.8|
José Antonio Reyes|AVA|54|89|787.93.721.110.140.291.246|1983||178|21|54|15.19.3.51.59|D
Pepe Reina|GR|54|91|127.905.532.601.133.7.99.510.232|1982||183|37|54|23.26.43.48.5.60.8|
Jesús Navas|MED|54|90|787.551|1985||170|56|54|2.23.26.35.36.59.60.8|
Hugo Lloris|GR|58|88|612.541.853.500|1986||188|145|58|12.21.24.31.39.42.60|
Maicon (1981)|DEF|16|88|242.587.440.551.737.240|1981||184|76|16|6.24.31.37.43.50.58|
Javier Mascherano|MED|4|91|734.234.925.532.127.296|1984||174|147|4|17.26.3.36.43.58|
Diego Milito|AVA|4|87|710.378.779.440|1979||183|25|4|17.31.43.44.58.6|
Júlio César|GR|16|88|357.218.440.698.849.140|1979||186|87|16|30.31.37.43.44.46.50.58.6.7|
Edin Dzeko|AVA|21|88|840.933.551.737.440.351.356|1986||193|152|88|2.31.37.41.44.5|
Blaise Matuidi|MED|58|88|862.763.647.463.442|1987||180|84|58|11.24.4.48.6.60|
Mario Mandzukic|AVA|40|90|277.933.133.110.463.39.7|1986||190|89|88|26.48.5.51.58.6|
Marco Reus|MED|2|88|158.157.499|1989||180|48|2|29.33.53|
Marko Arnautovic|AVA|165|87|334.440.923.825.925.154.294|1989||189|136|165|31.58.6|
Toby Alderweireld|DEF|20|87|32.110.805.853.39.744|1989||187|127|20|3.31.42.45.51|
Jan Vertonghen|DEF|20|86|32.707.853.140.80|1987||189|157|20|12.30.31.42.45.7|
Wojciech Szczesny|GR|126|89|93.164.737.463.127|1990||196|84|126|15.25.27.3.48.6|
Andrej Kramaric|AVA|40|84|277.592.404.518.421|1991||180|119|88|2.44|
Willian|AVA|16|88|234.788.85.215.93.367.632.395|1988||175|70|16|16.2.21.31.38.48.50.55.59|E
Nicolás Otamendi|DEF|4|88|917.325.112.888.551.140.734|1988||183|139|4|12.18.2.26.30.31.39.41.49.55.59.60.7|
Henrikh Mkhitaryan|MED|6|89|563.788.157.552.93.737.440|1989||177|95|154|15.16.31.33.41.53.59.6|
César Azpilicueta|DEF|54|89|638.181.553.215.110.787|1989||178|44|54|2.21.23.24.31.35.36.43.48.51.53.58.59|
Nacho Fernández|DEF|54|91|721.55|1990||179|29|54|11.23.3.31.35.36.43.57.58.8|
Jordan Henderson|MED|76|90|828.236.532.40.32.164.215|1990||182|91|76|19.2.33.53.58|
Pedro (1987)|AVA|54|91|127.215.737.510|1987||169|65|54|2.3.8.21.23.26.31.35.36.41.48.58.59.60|D
Olivier Giroud|AVA|58|90|393.316.855.578.93.215.7.500.530|1986||193|137|58|15.21.24.4.48.53.58.59.6.60|
Julian Draxler|AVA|2|86|933.647.140|1993||185|58|2|27.29.4.42.53.60.7|E
Antonio Rüdiger|DEF|2|90|298.737.215.721|1993||190|86|2|11.21.27.29.3.48.53.56.58.59|
James Rodríguez|MED|33|92|286.125.325.587.721.133.299.57.632.834.719.527.569.106|1991||180|131|33|11.12.20.3.35.43.44.5.55.57.58.59.7|
Juan Cuadrado|MED|33|87|436.871.513.356.215.463.440.100.681.567|1988||178|116|33|2.20.21.31.48.6|
Kyle Walker|DEF|76|88|615.790.853.698.99.551.7.175|1990||178|96|76|12.19.2.26.42.52.58|
Marcel Sabitzer|MED|165|85|718.705.767.133.552.157|1994||176|102|165|5.53|
Stefan Savic|DEF|109|85|665.551.356.110.856|1991||187|78|88|2.3.37.51.59|
Emiliano Martínez|GR|4|88|93.641.789.742.934.379.720.99.215|1992||195|70|4|15.16.49.59.60|
Marcos Alonso|DEF|54|87|721.155.356.828.215.127.203|1990||189|9|54|2.21.3.31.36.48.53.58.59|
Hakan Çalhanoğlu|MED|152|87|479.408.524.7.440|1994||176|108|2|6|
Allan (1991)|MED|16|81|892.871.390.601.299.159|1991||175||16|11.43.48.50|
Paco Alcácer|AVA|54|85|888.379.127.157.905|1993||174|19|54|23.3.35.36.39.59|
Luis Alberto|MED|54|81|787.532.586.262.510.39|1992||182||54|48|
Jordan Pickford|GR|76|86|828.177.198.162.695.299|1994||185|93|76|11.38.43.53|
Nicolás Tagliafico|DEF|4|84|125.722.438.32.541|1992||172|83|4|41.49.60|
Rodrigo|AVA|54|83|140.155.888.516.57.43|1991||180|28|16|17.23.30.34.35.36.39.7|
Yannick Carrasco|AVA|20|86|587.110.60|1993||180|78|20|3.34.43.44.45.51.55.59|E
Wilfried Zaha|AVA|39|84|243.552.197.371.541.212|1992||180|35|39|10.41.54|E
Wissam Ben Yedder|AVA|58|83|854.787.587|1990||170|19|58|24.34|
Benjamin Mendy|DEF|58|85|511.553.587.551.319.338.685|1994||185|10|58|17.2.24.26.34.4.60|
Leandro Paredes|MED|4|85|150.218.737.285.947.647.463|1994||184|82|4|31.37.4.42.44.49.53.60|
Pierre-Emile Højbjerg|MED|43|85|133.115.805.853.553|1995||185|101|43|21.26.31.39.5|
Nathan Aké|DEF|124|87|215.720.921.160.551.351|1995||180|62|124|2.21.26.31.43.54.58.59|
Clément Lenglet|DEF|58|86|19.787.127.853.99.110.140|1995||186|16|58|21.24.27.3.51|
Mike Maignan|GR|58|86|647.530.7|1995||191|51|67|17.24.4.41.52.6|
Florian Thauvin|AVA|58|82|393.746.530.553.610.843.871.521|1993||179|13|58|12.17.24.60|D
Julian Brandt|MED|2|84|524.157.32|1996||185|48|2|27.29|
Fred|MED|16|86|443.788.552.351.112|1993||169|32|16|31.41|
Stanislav Lobotka|MED|52|84|613.203.601|1994||170|76|52|21.6|
Andreas Christensen|DEF|43|89|215.158.127|1996||187|81|43|2.21.27.3.48.53.58.59|
Federico Bernardeschi|AVA|84|86|356.241.463.849.154|1994||185|39|84|37.48.6.8|D
Alessio Romagnoli|DEF|84|84|737.768.7.510.59|1995||190|13|84|19.37.48.6|
Oleksandr Zinchenko|DEF|153|86|788.872.551.648.93.617.32|1996||175|75|153|16.2.26|
José Gayà|DEF|54|79|888|1995||172|22|54|36.39|
Moussa Dembélé|AVA|58|79|367.204.541.110.40|1996||183||58|3.41.51|
Thomas Partey|MED|60|86|104.110.549.72.93.905.60|1993||185|61|60|16.3.51.59|
André Onana|GR|24|87|32.440.552.856|1996||185|53|24|47|
Patrik Schick|AVA|32|84|806.153.768.737.705.524|1996||187|56|32|41.44.5.56|
Iñaki Williams|AVA|60|81|101.184.144|1994||186|29|54|17|D
Rodrigo De Paul|MED|4|85|710.888.871.110.442|1994||180|92|4|39.49.51.60|
Joe Gomez|DEF|76|83|213.532|1997||188|15|76|13.2.33.58|
Ángel Correa|AVA|4|84|771.110.843.734|1995||173|28|4|3.49.51.59.60|
Presnel Kimpembe|DEF|58|86|647.700|1995||183|28|58|24.36.4.42.53.58.60|
Tomáš Souček|MED|32|83|802.804.925|1995||192|91|32|35.39|
Donny van de Beek|MED|124|84|32.552.299.281.386|1997||184|17|124||
Ferland Mendy|DEF|58|88|511.541.721|1995||180|10|58|11.24.3.56.57.58|
Fikayo Tomori|DEF|76|84|215.166.426.263.7|1997||185|5|25|21.41.48.52.53.6|
Brahim Díaz|AVA|102|89|551.721.7|1999||170|35|54|11.2.26.3.56.57.58.6|D
Jarrod Bowen|AVA|76|80|426.925|1996||175||76|35.38.39.53|D
Scott McTominay|MED|51|87|552.601|1996||190|73|76|21.31.6|
Ben Chilwell|DEF|76|86|425.518.215.243.293|1996||178|21|76|42.44.53.58|
Hirving Lozano|AVA|111|84|649.648.601.770.499|1995||175|75|111|11.6|E
Lucas Torreira|MED|157|85|674.768.93.110.356.371|1996||168|40|157|16.17.3.51|
Dani Ceballos|MED|54|88|142.143.721.93|1996||179|13|54|11.16.3.35.36.56.57.58|
Çağlar Söyüncü|DEF|152|83|365.518.110.351.956|1996||185|61|152|31.51|
Donyell Malen|AVA|124|84|648.157.99.737|1999||179|56|124|54.59|
Tammy Abraham|AVA|76|85|215.168.830.99.737.7.141|1997||190|11|76|21.31.41.44.48.52.53.58.59|
Denis Zakaria|MED|143|85|786.942.158.463.215.587|1996||191|69|143||
Ben White|DEF|76|82|166.675.516.93|1997||186|6|76|16.17.2.53|
Mikel Merino|MED|54|85|181.638.157.610.725.93|1996||188|55|54|16.2.36.43.53.60.8|
Giovani Lo Celso|MED|4|84|738.647.142.853.905|1996||177|57|4|21.31.39.4.42.49.53|
Kalvin Phillips|MED|76|85|516.551.925.447.790|1995||178|31|76|17.2.26.58|
Rodrigo Bentancur|MED|157|87|150.463.853|1997||185|80|157|17.21.48.59.6|
Teun Koopmeiners|MED|124|84|22.100.463|1998||184|32|124|13.54.59|
Moise Kean|AVA|84|85|463.416.299.647.356.232|2000||183|26|84|11.37.38.42.43.53.6|
Loïs Openda|AVA|20|82|225.224.907.521.705.463.541|2000||175|33|20|45|
Carlos Soler|MED|54|82|888.647.925.725|1997||183||54|35.36.4|
Alessandro Buongiorno|DEF|84|81|199.848.857.601|1999||190|12|84|21.6|
Nico Schlotterbeck|DEF|2|83|923.705.365.874.157|1999||191|30|2|27|
Nicolò Zaniolo|AVA|84|81|440.737.371.99.100.356.871|1999||190||84|31.41.44|
Moussa Diaby|AVA|58|81|241.647.524.99.46|1999||170|11|58|24.4.52.53.56|D
Houssem Aouar|MED|5|81|541.737.46|1998||175||58|31.52|
Pau Torres|DEF|54|83|905.586.99|1997||191|23|54|36.59|
Éder Militão|DEF|16|89|834.325.721|1998||186|38|16|11.3.52.56.57.58|
Exequiel Palacios|MED|4|83|734.524.447|1998||177|41|4|49.5.56.60|
Ademola Lookman|AVA|115|84|213.299.705.367.518.100.110|1997||174|43|76|38.51.59|E
Amine Gouiri|AVA|5|79|541.612.731.553|2000||180||58||
Youssef En-Nesyri|AVA|102|84|586.105.186.787.351.46|1997||188|92|102|31.35.59|
Curtis Jones|MED|76|84|532.934.440|2001||185|6|76|13.2.33.53|
Joshua Zirkzee|AVA|124|84|133.663.80.154.552|2001||193|6|124|27.47.5.58|
Yann Bisseck|DEF|2|77|231.422.735.908.25.440|2000||196||2|6|
Brennan Johnson|AVA|123|80|617.853.243|2001||186||76|59|D
Wesley Fofana|DEF|58|82|763.81.518.215|2000||186||58|42|
Josko Gvardiol|DEF|40|84|277.705.551|2002||185|56|40|2.26|
Renan Lodi|DEF|16|82|102.110.617.553.45.112|1998||178|19|16|11.3.30.51|
Lisandro Martínez|DEF|4|87|254.611.32.552|1998||175|38|4|47.49.60|
Jeremie Frimpong|DEF|124|83|204.524.532|2000||171|15|124|13.5.56|
Amadou Onana|MED|20|83|408.530.299.99|2001||192|33|135|45.59|
Conor Gallagher|MED|76|85|215.213.830.924.243.110.853|2000||182|22|76|42.51.53|
William Saliba|DEF|58|85|763.93.612.553|2001||192|38|58|16.2.24|
Karim Adeyemi|AVA|2|83|767.318.157.127|2002||176|11|2|27|D
Riccardo Calafiori|DEF|84|83|737.378.132.154.93|2002||188|14|84|16.2.31.41|
Kaoru Mitoma|AVA|86|80|485.875.166|1997||178||86||E
Bremer|DEF|16|83|112.848.463|1997||188|8|16|11|
Bruno Guimarães|MED|16|84|102.541.610.93|1997||182|50|16|11|
Mason Greenwood|AVA|76|84|552.93.647.379.553.351|2001||181|1|76|31|D
Alexis Mac Allister|MED|4|86|89.166.150.532|1998||176|57|4|13.2.33.49.60|
Amad Diallo|AVA|39|83|100.552.717.828|2002||173||39|47|D
Mykhaylo Mudryk|AVA|153|84|788.94.264.215.853|2001||175|28|153|41.42|E
Mohammed Kudus|AVA|60|83|613.32.925.853|2000||175|46|60|35|D
Álex Baena|AVA|54|83|905.386.110|2001||174|28|54|51.59.60.8|E
Santiago Gimenez|AVA|111|83|185.354.7.325|2001||182|51|4|13.52|
Edmond Tapsoba|DEF|18|80|520.908.524|1999||190||18|5.56|
Oihan Sancet|MED|54|80|638.181.101.144|2000||188|4|54||
Anthony Elanga|AVA|142|83|552.617.610|2002||178|22|142|39|D
Levi Colwill|DEF|76|82|215.425.166|2003||187||76|42.53|
Iliman Ndiaye|AVA|135|82|790.553.299.551|2000||180|44|58||D
Alejandro Balde|DEF|54|86|291.127|2003||175|7|54|26.27.3.36|
Enzo Fernández|MED|4|86|734.254.140.215.551|2001||178|50|4|42.49.60.7|
Ilya Zabarnyi|DEF|153|83|275.160.647|2002||189|49|153|36.4.58|
Piero Hincapié|DEF|49|83|438.182.524.93|2002||184|56|49|16.2.5.56|
Igor Thiago|AVA|16|79|242.538.224.164|2001||193|5|16|50|
Savinho|AVA|16|81|112.862.648.386.551.853|2004||176|13|16|11.26|E
Abdukodir Khusanov|DEF|158|81|521.551|2004||186|33|158|26|
Pablo Barrios|MED|54|80|104.110|2003||191||54|51|
Nicolas Jackson|AVA|135|84|188.905.215.133.99|2001||187|37|148|42.5|
Mathys Tel|AVA|58|80|731.133.853|2005||183||58|5.53.59|
Álvaro Carreras|DEF|54|84|262.721.552.695.390.140|2003||186|1|54|18.56|
Mateus Fernandes|MED|127|76|812.292.805.925.853|2004||178|1|127|39.47.7|
Ethan Nwaneri|MED|76|81|93.553.157|2007||184||76|16.2|
Luka Vuskovic|DEF|40|80|405.714.473.853.408.166|2007||193|6|40||
Leny Yoro|DEF|58|80|530.552|2005||190||58|41.47|
Victor Froholdt|MED|43|76|233.325|2006||176||43|7|
Johan Manzambi|MED|143|80|365.99|2005||182|20|143||
Endrick|AVA|16|84|653.721.541|2006||173|21|16|11.41.56.9|
Carlos Baleba|MED|24|80|530.166.552|2004||179|16|24|41|
Jérémy Jacquet|DEF|58|76|731.223.532|2005||188||58||
Murillo|DEF|16|75|234.617|2002||182||16|39.55|
Rayan|AVA|16|77|892.160|2006||185||16||D
Lennart Karl|MED|2|81|133|2008||168|3|2|5|
Essien|MED|60|89|746.541.215.721.7.654|1982||177|59||2.4.11.12.31.43.50.58|
Juninho Pernambucano|MED|16|83|811.892.541.43.608|1975||179|40||4.50|
Rafa Márquez|DEF|111|90|109.587.127.608.527.416|1979||182|146|111|24.26.3.4.58|
William Gallas|DEF|58|87|759.553.215.93.853.672|1977||181|84|58|12.15.2.31.44|
Shaun Wright-Phillips|AVA|76|85|551.215.698.608|1981||168|36|76|19.2.31.37|D
Michael Carrick|MED|76|90|831.925.145.853.552|1981||188|34|76|10.19.2.20.31.54.58.59|
Mahamadou Diarra|MED|100|83|623.907.541.721.587.367|1981||183||100|19.3.31.4|
Florent Malouda|AVA|58|89|502.398.541.215.856.323|1980||184|80|67|11.12.2.4.43.50.58|E
Adrian Mutu|AVA|132|85|308.440.416.663.215.18.463.356.209.4.676|1979||180|77|132|19.44|
Simone Perrotta|MED|84|85|729.463.128.218.737|1977||178|48|76|11.36.44.60|
Walter Samuel|DEF|4|88|611.150.737.721.440.132|1978||183|56|4|17.19.31.37.43.44.58.6|
Mirko Vucinic|AVA|109|85|513.737.463.47|1983||186|49|88|21.44.6|
Juan Carlos Valerón|MED|54|82|507.549.110.262|1975||186|46|54|14.44|
Joaquín|AVA|54|83|143.142.888.586.356|1981||179|51|54||D
Simão|AVA|127|87|812.127.140.110.141.291|1979||170|85|127|20.25.28.42.50.54.59.7|E
Lukas Podolski|AVA|2|90|231.133.93.440.371.906.84.401|1985||182|130|126|15.29.37.5.60|
Santi Cazorla|MED|54|90|905.586.93.59.723|1984||165|81|54|15.23.35.36.8|
Júlio Baptista|MED|16|85|834.787.721.93.737.586.242.637.191|1981||185|47|16|15.19.3.44.50|
João Moutinho|MED|127|86|812.325.587.934.163|1986||171|146|127|4.7.8.12.18.20.25.32.34.35.39.40.44.50.55.59|
Fernando Llorente|AVA|54|89|101.144.463.787.830.853.601.871.753|1985||195|24|54|11.17.21.23.42.59.6.60.8|
Branislav Ivanovic|DEF|145|89|624.535.215.947.924|1984||188|105|88|11.12.2.21.31.37.43.50.58.59|
Mario Balotelli|AVA|84|90|440.551.7.532.612.553.165.580.29.329.378|1990||189|36|84|2.21.31.33.37.58.6|
Stevan Jovetić|AVA|109|86|665.356.551.440.787.587.418.632.633|1989||183|91|88|2.34.37|
Dries Mertens|AVA|20|86|465.882.648.601.371|1987||169|109|20|11.43.45.48|
Paulinho (1988)|MED|16|86|704.234.853.127.36|1988||182|56|16|3.12.42.50.55|
Duván Zapata|AVA|33|83|183.296.601.871.768.100.848|1991||188|34|33|20.43|
Pablo Sarabia|MED|54|84|721.379.787.647.812.934.38|1992||176|27|54|31.35.36.4.42.47.53.55|
Lucas Moura|AVA|16|84|834.647.853|1992||172|37|16|11.21.31.39.4.42.50|D
Hulk|AVA|16|86|280.485.844.325.947.112.358.946|1986||180|49|16|12.28.50.55.59.7|
Joel Matip|DEF|24|86|532|1991||195|27|2|2.33.58|
Xherdan Shaqiri|MED|143|90|132.133.440.825.532.541.217|1991||169|125|88|2.26.33.37.5.58|
Gylfi Sigurdsson|MED|82|85|720.793.239.421.830.853.299.540|1989||186|83|82|11.12.38.43|
Kieran Trippier|DEF|76|85|551.129.175.853.110.610.934|1990||178|54|76|2.3.37.42.51|
Thomas Meunier|DEF|20|85|224.647.157.856.530.828|1991||190|83|20|4.45.53|
Thorgan Hazard|MED|20|85|521.215.949.158.157.648.80|1993||174|47|20|43.45|
Konstantinos Manolas|DEF|63|83|12.632.737.601.764|1991||187|42|63|11.25.34.44|
Suso|MED|54|83|532.72.7.378.787.245|1993||177||54|35.59|
Emre Can|DEF|2|88|133.524.532.463.157|1994||184|48|2|27.29.33.48.5.6|
Matthias Ginter|DEF|2|85|365.157.158|1994||191|51|2|27.29.33.53.60|
Lucas Digne|DEF|58|87|530.647.737.127.299.99|1993||178|64|58|11.24.3.36.38.4.43.59|
Idrissa Gueye (1989)|MED|135|85|530.99.299.647|1989||174|136|135|4.38.42.53|
Alessandro Florenzi|DEF|84|87|737.241.888.647.7|1991||173|49|84|21.31.36.37.41.42.44.52.53.6.8|
Jesse Lingard|MED|76|88|552.518.145.166.263.925.617.327.234|1992||175|32|76|10.31.54.59|
Alex Oxlade-Chamberlain|MED|76|87|805.93.532.141.204|1993||180|35|76|15.2.33|
Leandro Trossard|AVA|20|85|377.536.473.625.166.93|1994||172|57|20|16.2.45|E
Danilo (1991)|DEF|16|89|78.777.325.721.551.463.357|1991||184|67|16|2.3.6.7.11.26.35.41.43.48.50.55.57.58|
Kurt Zouma|DEF|58|86|763.215.825.299.925.54.191.62|1994||190|11|58|2.21.24.31.35.38.48.53.58|
Yussuf Poulsen|AVA|43|83|540.705.408|1994||193|87|43||
Felipe Anderson|AVA|16|81|777.510.925.325.653|1993||175||16|11.48.52|E
Filip Kostić|MED|145|86|712.312.298.408.281.463.351.648|1992||184|72|160|31.59|
Andrea Belotti|AVA|84|85|652.848.737.356.232.140.196.575|1993||181|44|84|18.31.37.8|
Eric Dier|DEF|76|85|812.853.133.587|1994||188|49|76|21.28.31.34.39.42.5.53|
Domenico Berardi|AVA|84|83|781.463|1994||183|27|84|21.37.8|D
Michy Batshuayi|AVA|20|87|822.553.215.157.888.243.141.351.371.281.955|1993||185|55|20|17.2.21.30.45.48.53|
Sébastien Haller|AVA|39|84|15.882.281.925.32.157.186.775|1994||191|35|58||
Emerson|DEF|84|86|777.652.737.215.541.925.553|1994||175|29|16|21.35.37.48.53.58.59.8|
Tiemoué Bakayoko|MED|58|84|731.587.215.7.601.319.642|1994||189|1|58|21.34.4.48.53.6|
Luke Shaw|DEF|76|86|805.552|1995||178|34|76|31.42.47.54.59|
Ante Rebić|AVA|40|85|356.705.416.281.7.141.513.405|1993||185|42|40|25.6|E
Lucas Ocampos|AVA|4|83|734.587.553.378.7.787.32.577|1994||187|12|4|17.34.35.44.49.59|E
Arkadiusz Milik|AVA|126|87|401.524.115.32.601.553.463|1994||186|73|126|11.25.48|
Nico Elvedi|DEF|143|83|338.158.516|1996||188|77|143||
Alejandro Grimaldo|DEF|54|82|140.524.110.127|1995||170|14|54|18.30.46.5.56.60.7.8|
John McGinn|MED|51|84|816.419.99|1994||178|93|51|59|
Jonathan Tah|DEF|2|84|408.302.524.133|1996||193|53|2|27.29.5.56|
Adama Traoré (1996)|AVA|54|89|127.99.565.934.367.925.262|1996||178|8|54|3.18.26.35.36.38.39.58|D
Alex Meret|GR|84|83|871.760.601|1997||190|3|84|11.21.37.6.8|
Alex Iwobi|AVA|115|86|93.299.367|1996||180|101|115|11.15.38.43|E
Ivan Toney|AVA|76|81|615.129.610.793.783.929.675.164.36|1996||179|6|76|43.53|
Dominic Solanke|AVA|76|84|215.907.532.160.853|1997||187|5|76|21.33.53.59|
Unai Simón|GR|54|84|101.184.144|1997||192|69|54|36.60.8|
David Raya|GR|54|84|146.164.93|1995||184|14|54|16.2.36.60.8|
Manuel Locatelli|MED|84|86|7.781.463|1998||186|36|84|37.8|
Serhou Guirassy|AVA|68|82|819.530.15.231.75.731.298.157|1996||187|28|58||
Miguel Almirón|AVA|122|83|506.108.610|1994||174|68|122|43|D
Lorenzo Pellegrini|MED|84|83|737.781|1996||186|36|84|31.37.41.44|
Dominic Calvert-Lewin|AVA|76|82|790.615.299.516|1997||187||76|11.38.43.53|
Denzel Dumfries|DEF|124|86|807.414.648.440.721|1996||188|73|124|54.6|
Malcom|AVA|16|82|234.156.127.947.45.47|1997||171|2|16|3.30|D
Christoph Baumgartner|MED|165|82|421.705|1999||178|58|165||
Krzysztof Piatek|AVA|126|83|944.237.378.7.418.356.764.131.39|1995||183|37|126|25|
Diego Carlos|DEF|16|80|834.667.292.600.787.99.351.232.663|1993||186||16|31.35.44.52.59|
Diogo Jota|AVA|127|89|668.325.110.934.532|1996||178|49|127|13.2.25.33.39.41.45.51|E
Robin Le Normand|DEF|54|83|818.725.142.379.110|1996||187|28|58|51.8|
Ismaël Bennacer|MED|5|82|5.93.855.285.7.553.277|1997||175||58|15.41.52.6|
Frank Anguissa|MED|24|84|553.367.905.601|1995||184|67|24|21.38.44.6|
Arnaut Danjuma|AVA|124|81|589.224.160.905.853.299.386.888|1997||178|6|115|21.54|E
Diogo Costa|GR|127|83|325|1999||192|43|143|25.45.52.7|
Sven Botman|DEF|124|80|414.530.610|2000||193||124|4|
Nayef Aguerd|DEF|102|83|266.731.925.725.553|1996||190|43|102|35.39|
Dan Ndoye|AVA|143|79|509.612.132.154.617|2000||184||143|39.55|D
Leon Bailey|AVA|85|83|377.524.99.737.632|1997||181|41|85|59|D
Yoane Wissa|AVA|129|81|502.81.819.4.319.164.610|1996||176|33|58||
Edson Álvarez|MED|111|84|77.32.925.351|1997||185|102|111|35.39|
Giacomo Raspadori|AVA|84|80|781.601.110.100|2000||173||84|21.48.51.6.8|
Felix Nmecha|MED|2|81|551.933.157|2000||190||2||
Ismaïla Sarr|AVA|135|81|400.323.731.921.553.243|1998||180|8|135|44|D
Francisco Trincão|MED|127|83|163.127.934.812.36|1999||186|19|127|18.25.45.47.7.9|
Nikola Milenković|DEF|145|83|665.356.617|1997||195|71|160|39.55|
Jørgen Strand Larsen|AVA|116|79|312.203.934.243|2000||193||116|43.55|
Maxence Lacroix|DEF|58|81|330.933.243.215|2000||190|7|58||
Edouard Mendy|GR|135|84|820.731.215.36|1992||194|57|58|53.58|
Angelo Stiller|MED|2|80|133.421.298|2001||183|9|2|27|
Christos Tzolis|AVA|63|78|642.616.334.302.224|2002||174||63|9|E
Mattéo Guendouzi|MED|58|84|319.93.418.553.510.351|1999||185|14|58|16.24.48|
Eric García|DEF|54|86|551.127.386|2001||182|23|54|2.26.27.3.36.60|
Nico González (2002)|MED|54|83|127.888.325.551.610|2002||191||54|26.36.52|
David Neres|AVA|16|83|834.32.788.140.601|1997||175|8|16|11.21.6.7|D
Josip Stanisic|DEF|40|81|133.524|2000||186||2|5.53.56|
Pape Gueye|MED|135|80|511.553.787.905|1999||189||58|12|
Nico González (1998)|AVA|4|84|89.298.356.463.110|1998||180|39|4|49.51|E
Giorgi Mamardashvili|GR|61|84|888.532|2000||197|42|61|13|
Jacob Ramsey|MED|76|79|99.270.610|2001||180||76||
Tino Livramento|DEF|76|80|805.610|2002||173|6|76|53|
Noni Madueke|AVA|76|84|648.215.93|2002||182|16|76|16.2.42.53|D
Giovanni Reyna|MED|45|81|157.617.158|2002||185||76|39.42|
James Garner|MED|76|81|552.243.921.617.299|2001||182||76|31.47.53|
Malick Thiaw|DEF|2|81|7.610|2001||194||2|41.52|
Dani Vivian|DEF|54|80|66.184.144.188.101|1999||184|2|54|8|
Mateo Retegui|AVA|84|82|150.296.182.842.378.100.55|1999||186|28|4||
Destiny Udogie|DEF|84|80|416.871.853|2002||187|3|84|21.59|
Kang-in Lee|MED|37|85|813.379.888.549.647.110|2001||173|29|37|36.4.40.58|
Joan García|GR|54|82|291.127|2001||194|3|54|27.3.60|
Bart Verbruggen|GR|124|81|80.166|2002||193|37|124||
Johan Bakayoko|AVA|20|78|648.705|2003||179||20||D
Pape Matar Sarr|MED|135|83|400.323.853.463|2002||185|42|135|21.39.59|
Giorgio Scalvini|DEF|84|79|100|2003||194|11|84|37.48.59|
Strahinja Pavlović|DEF|145|83|665.587.207.132.767.7|2001||194|59|160|41.52|
Jan Paul van Hecke|DEF|124|79|588.166.414.146|2000||189||124||
Rayan Aït-Nouri|DEF|5|79|81.934.551|2001||180||58|18.26.35.39.55|
Éderson|MED|16|77|242.234.360.764.100|1999||182||16|48.59|
Castello Lukeba|DEF|58|79|541.705|2002||184||58|41|
Manu Koné|MED|58|80|854.158.737|2001||185||58|44|
Roméo Lavia|MED|20|81|551.805.215|2004||181||20|26.42|
Jarell Quansah|DEF|76|81|532.169.524|2003||190||76|13.2.33.53|
Victor Boniface|AVA|115|81|152.875.524.923|2000||189|13|115|5.56|
Jarrad Branthwaite|DEF|76|79|198.299.146.648|2002||195||76|11.43.53|
Jamie Gittens|AVA|76|80|157.215|2004||175||76||E
Rico Lewis|DEF|76|82|551|2004||169||76|2.26.53.58|
Abde Ezzalzouli|AVA|102|81|430.127.638.142|2001||178|7|102||E
Milos Kerkez|DEF|73|83|7.22.160.532|2003||180|23|136|13|
Alberto Moleiro|AVA|54|75|507.905|2003||169||54||E
Andrey Santos|MED|16|79|892.215.617.293|2004||180||16|39|
Maghnes Akliouche|AVA|58|81|587.647|2002||183|10|58|24|D
Alejandro Garnacho|AVA|4|84|552.215.99|2004||180|8|54|47.49|E
Can Uzun|MED|152|79|620.281|2005||186|4|2||
Alex Scott|MED|76|77|168.160|2003||178||66||
Myles Lewis-Skelly|DEF|76|81|93|2006||178||76|16.2|
Senny Mayulu|MED|58|81|647|2006||183||58|36.4.58|
Ibrahim Maza|MED|5|78|418.524|2005||177||2||
Lamine Camara|MED|135|78|400.323.587|2004||173||135||
Pio Esposito|AVA|84|77|440.810|2005||191||84|6|
Yankuba Minteh|AVA|148|79|626.610.354.166|2004||180|20|148|13|D
Franco Mastantuono|AVA|4|82|734.721.356|2007||177|4|4|49.56|D
Ayyoub Bouaddi|MED|102|80|530.551|2007||185|8|58|41|
Geovany Quenda|AVA|127|78|812.215|2007||172||70|47.7|D
Said El Mala|AVA|2|76|231|2006||183||2||E
Dida|GR|16|90|280.242.320.234.7.693.395.443|1973||195|91||6.11.50.58.60|
Fernando Couto|DEF|127|85|325.345.27.663.127.510|1969||184|110||3.6.7.20.37.44.50.54.59|
Humberto Coelho|DEF|127|81|140.647|1950||185|64||7|
David Luiz|DEF|16|90|834.280.140.215.647.93.357.360.651|1987||189|57||2.4.7.12.16.21.25.30.31.43.48.50.58.59|
Mozer|DEF|16|83|357.140.553.482|1960||187|32||4.7|
Paulo Sousa|MED|127|86|140.812.463.157.440.663.654.291|1970||177|52||6.7.20.58|
Okocha|MED|115|84|281.351.647.155.700.426|1973||175|75|||
Chalana|AVA|127|80|140.156.120.295|1959||165|27||4.7|E
Simão Sabrosa|AVA|127|87|812.127.140.110.141.291|1979||170|85||7.20.25.28.42.50.54.59|E
João Vieira Pinto|AVA|127|82|149.110.104.140.812.163|1971||170|81||7.20.25|
Tomas Rosicky|MED|32|87|806.157.93|1980||180|105|22|15.5|
John Arne Riise|DEF|116|88|24.587.532.737.367.17|1980||185|110|116|4.43.44.58|
Damien Duff|MED|78|85|146.215.610.367.557|1979||176|100|78|2.31.44|
Darren Fletcher|MED|51|89|552.924.825|1984||183|80|51|10.2.20.54.58|
Jamie Carragher|DEF|76|88|532|1978||185|38|76|19.43.58.59|
Joe Cole|MED|76|86|925.215.532.530.99.236|1981||175|56|76|11.19.2.31.44.50|
Djibril Cissé|AVA|58|86|15.532.553.828.654.510.698.43.497.746|1981||183|41|58|28.43.58|
Ricardo Quaresma|AVA|127|89|812.127.325.440.215.141.484.908|1983||175|80|127|11.20.25.28.31.35.40.41.50.58.6.7.8|D
Daniel Van Buyten|DEF|20|87|702.822.553.551.408.133|1978||203|84|20|26.5.54.58|
Ludovic Giuly|AVA|58|85|541.587.127.737.647.319|1976||164|18|58|24.3.4.58|D
Seydou Keita|MED|100|89|553.319.521.787.127.888.737|1980||183|102|100|26.3.39.58|
Jérémy Toulalan|MED|58|83|600.541.586.587.156|1983||183|36|58|34.4.44|
Antonio Cassano|AVA|84|86|128.737.721.768.7.440.663.416|1982||175|39|84|19.3|
Per Mertesacker|DEF|2|89|923.93|1984||200|104|2|15.29.60|
Andrea Barzagli|DEF|84|89|679.97.218.652.933.463|1981||187|73|84|21.5.6.60|
Carlos Marchena|DEF|54|87|787.140.888.905.262|1979||183|69|54|23.3.43.44.59.60.8|
David Albelda|MED|54|83|888.905|1977||183|51|54|3.43.44.59|
Thiago Motta|MED|84|90|127.110.378.440.647|1982||187|32|16|11.21.3.31.4.43.44.54.58.6|
Javier Saviola|AVA|4|89|734.127.587.787.721.140.586.632.416|1981||169|39|4|17.24.3.30.54.58.59.7|
Daley Blind|DEF|124|89|32.312.552.133.386|1990||180|108|124|31.5.53.54.59|
Goran Pandev|AVA|97|87|440.810.510.601.371.378.663|1983||184|75|88|31.43.44.58.6|
Luisão|DEF|16|83|242.140|1981||193|44|16|25.30.46.50.7|
Ashley Young|DEF|76|89|921.99.552.440.299.447|1985||175|39|76|10.19.2.21.31.54.59.6|
Darijo Srna|DEF|40|84|405.788.196|1982||182|134|88|41.59|
Raúl Albiol|DEF|54|89|379.888.721.601.905.681|1985||190|58|54|11.23.3.31.35.36.43.44.48.59.60.8|
Álvaro Negredo|AVA|54|86|719.72.721.787.551.888.565.141.51.245.886|1985||186|21|54|2.23.39.8|
Giuseppe Rossi|AVA|84|84|552.610.663.905.356.203.523.378|1987||174|30|45|10.2.20.44|
Lucho González|MED|4|83|427.734.325.553.57.102|1981||186|45|4|17.24.28.4.41.55.7|
Fernandinho|MED|16|86|102.788.551|1985||179|53|16|2.26.50.59|
Álvaro Arbeloa|DEF|54|92|779.721.262.532.925|1983||184|56|54|11.23.3.31.43.57.58.60.8|
Juan Manuel Vargas|DEF|125|82|228.201.356.378.142|1983||180|62|125||
Antonio Valencia|DEF|49|89|905.929.552.503.701|1985||180|99|49|10.2.31.54.59|
Fábio Coentrão|DEF|127|91|732.140.597.779.721.587.812|1988||178|52|127|11.20.25.3.30.31.34.40.43.57.58.7|
Nani|AVA|127|90|812.552.351.888.510.637.895.556.29.295.960|1986||175|112|127|10.2.20.25.32.38.40.50.54.55.58.8|E
Sokratis Papastathopoulos|DEF|63|86|12.378.7.923.157.93.632.142|1988||186|90|63|16.25.33.53.6|
Axel Witsel|MED|20|86|822.140.947.157.110.386.612.946|1989||186|140|20|12.30.45.51|
Dušan Tadić|AVA|145|85|911.312.334.805.32.351.589.959|1988||181|111|88|31|D
Alexandre Pato|AVA|16|86|443.7.234.834.215.905.637|1989||180|28|16|11.21.50.6|
Marouane Fellaini|MED|20|89|822.299.552|1987||194|87|20|31.45.54.59|
Claudio Bravo|GR|29|89|227.725.127.551.142|1983||184|150|29|17.2.26.3.36|
Adam Lallana|MED|76|87|805.160.532.166|1988||172|34|76|2.33.42.58|
Rui Patrício|GR|127|87|812.934.737.100.37|1988||189|108|127|25.28.30.31.34.38.39.40.45.8|
Jonas|AVA|16|81|396.777.395.693.888.140|1984||181|12|16|18.30.46.50.7|
Ezequiel Lavezzi|AVA|4|85|296.771.601.647|1985||173|51|4|11.4|E
Aleksandar Mitrović|AVA|145|85|665.80.610.367.45.57|1994||189|102|160|30.38.43.44|
Javier Pastore|MED|4|84|182.427.652.647.737.283.700|1989||187|29|4|11.4.41.44|
Andriy Yarmolenko|AVA|153|84|264.275.157.925.37|1989||189|122|154||D
Bernd Leno|GR|2|84|524.298.93.367|1992||189|9|2|16.27.29.38|
Steven Nzonzi|MED|58|84|75.146.825.787.737.371.731.57.492.869|1988||196|20|58|24.41.44.59.60|
Nemanja Matić|MED|145|87|215.907.140.552.737.731.541.781|1988||194|48|88|11.2.21.30.31.41.7|
Keylor Navas|GR|38|91|67.523.721.647.617.611.865|1986||185|127|38|11.3.35.36.39.4.42.43.53.57.58|
Alex Sandro|DEF|16|86|102.777.325.463.357|1991||180|45|16|11.35.41.48.50.55.6.7|
Shinji Kagawa|MED|86|87|208.157.552.141.779.642.797|1989||175|97|86|10.2.33.5.53|
Kevin Volland|MED|2|80|1.421.524.587.874|1992||179||2|27.29|
Ricardo Rodríguez|DEF|143|86|338.933.7.648.848.142|1992||180|148|143||
Shkodran Mustafi|DEF|2|88|299.768.888.93.523|1992||184|20|2|15.16.29.39.60|
Thomas Delaney|MED|43|82|233.923.157.787.421.80|1991||182|7|43|35|
Emil Forsberg|AVA|142|83|550.705.608|1991||178|92|142||E
Leonardo Spinazzola|DEF|84|85|463.285.794.100.673.737.601|1993||186|27|84|21.31.37.41.48.6.8|
Luis Muriel|AVA|33|84|260.871.390.513.768.787.356.100.637.459|1991||178|45|33|20.59|
Jesús Corona|AVA|111|78|577.334.325.787|1993||173||111|32.35.39.52.7|D
Rafinha|MED|16|85|127.203.440.647.725.38|1993||174|2|16|26.3.36.4.42.53.58|
Remo Freuler|MED|143|83|337.391.321.100.617.154.632|1992||180|94|143|39|
Felipe (1989)|DEF|16|80|704.27.234.325.110.617|1989||190||16|3.7.39.51.52|
Iñigo Martínez|DEF|54|83|725.101.127.52|1991||182|21|54|23.27.3.30.35.36|
Jordan Veretout|MED|58|82|600.99.763.356.737.553.541.38|1993||177|6|58|24.31.41|
Alassane Pléa|AVA|58|80|541.15.612.158.648|1993||180|1|58|24|
Leander Dendoncker|MED|20|83|80.934.99.601.723.405|1995||178|32|20|18.39.45|
Giovanni Di Lorenzo|DEF|84|86|729.285.601|1993||184|56|84|11.21.37.6.8|
Raphaël Guerreiro|DEF|127|87|759.319.157.133|1993||170|65|58|25.45.5.53.8|
Gerard Moreno|AVA|54|83|905.549.291|1992||180|21|54|36.59|
James Ward-Prowse|MED|76|81|805.925.617.175|1994||177|11|76|35.39.42|
Seko Fofana|MED|39|80|551.367.746.871.521.52.40.731.325|1995||183||58|7|
Héctor Bellerín|DEF|54|84|921.93.142.127.812|1995||178|4|54|15.16.3.35.36.47|
Ben Davies|DEF|123|84|830.853|1993||181|94|123|21.31.39.42.59|
Bryan Cristante|MED|84|82|7.140.652.674.100.737|1995||186||84|30.31.41.44.46.7.8|
Elseid Hysaj|DEF|1|85|285.601.510|1994||182|100|1|11.48|
Mario Pašalić|MED|40|87|405.215.283.587.7.809.100|1995||188|93|2|21.34.48.59|
Ruslan Malinovskyi|MED|153|82|328.788.948.377.100.553.378.856|1993||181|71|153||
Lukas Klostermann|DEF|2|80|898.705|1996||187|22|2|27.29|
Ricardo Pereira|DEF|127|79|908.325.612.518|1993||175||127|25.35.41.45.46.52.7|
Dakonam Djené|DEF|149|76|9.797.379|1991||178||149||
Konrad Laimer|DEF|165|84|767.318.705.133|1997||179|63|165|5.53|
Rúben Neves|MED|127|80|325.934.45|1997||185||127|18.25.32.35.39.45|
Joaquín Correa|AVA|4|82|296.768.787.510.440.553.159|1994||188||4||
Wout Weghorst|AVA|124|83|310.417.22.933.175.141.552.421.32|1992||197|23|124|54|
Thilo Kehrer|DEF|2|83|647.925.587.32|1996||186|27|2|27.29.4.42.53|
Rafa Silva|AVA|127|83|349.163.140.141|1993||170|25|127|18.25.28.30.31.41.46.52.7.8|
Jan Bednarek|DEF|126|83|514.805.99.325|1996||190|72|126|25.7|
Ayoze Pérez|AVA|54|82|189.610.518.142.905|1993||179|5|54|43.8|
Harry Winks|MED|76|82|853.768.518.196|1996||178|10|76|21.31.39.42|
Gelson Martins|AVA|127|82|812.110.587.632|1995||173|21|23|25.30.34.51|D
João Palhinha|MED|127|83|582.812.120.137.163.367.133.853.140|1995||190|37|127|25.30.32.38.45.47.5.7.9|
Gregor Kobel|GR|143|83|421.115.298.157|1997||194|30|143||
Joachim Andersen|DEF|43|79|334.768.541.367.243|1996||190||43|38|
Timothy Castagne|DEF|20|83|377.100.518.367|1995||180|69|20|38.45|
Aleksandr Golovin|MED|134|83|194.587|1996||178|53|134|34|
Viktor Tsygankov|AVA|153|82|275.386.32|1997||177|67|83||D
Issa Diop|DEF|102|80|854.925.367|1997||194||58|38|
Allan Saint-Maximin|AVA|58|80|763.587.746.612.610.36.351.77.521|1997||173||58|31.34|E
Robin Gosens|DEF|2|83|309.907.417.100.440.874.356|1994||181|24|2|27.29|
David Brooks|AVA|123|79|790.160.805|1997||173||76||D
Florian Neuhaus|MED|2|81|1.158.302|1997||182|10|2|27.29|
Álvaro Odriozola|DEF|54|86|725.721.133.356|1995||175|4|54|11.27.3.35.5.57.58|
Mario Hermoso|DEF|54|84|721.245.886.291.110.737.524|1995||184|5|54|11.19.3.31.36.44.51.56|
Steven Bergwijn|AVA|124|82|648.853.32.46|1997||171|35|124|21.31.39.52.54|E
Guglielmo Vicario|GR|84|81|871.895.196.673.285.853.463|1996||194|5|84|59|
Eric Bailly|DEF|39|86|291.905.552.553.141.723.230|1994||187|50|39|31.59|
Sofyan Amrabat|MED|102|85|882.354.224.416.356.552.351.142.32|1996||183|78|124|31|
Yerry Mina|DEF|33|85|261.437.653.127.299.356.196|1994||194|55|33|11.20.3.38.43.44|
Milot Rashica|AVA|89|81|907.923.616.371.141|1996||177|26|160|25|D
Nikola Vlašić|MED|40|83|405.299.194.925.848|1997||178|69|40|38|
Kieran Tierney|DEF|51|85|204.93.725|1997||178|46|81|16|
Nené|AVA|127|72|776.454.140|1995||184||127|7|
Albert Gudmundsson|AVA|82|82|648.22.378.356.510|1997||177|37|82|13|
Brais Méndez|MED|54|79|203.725.230|1997||187|4|54|36|
Gianluca Scamacca|AVA|84|82|781.238.645.97.378.925.100|1999||195|25|84|37.48.59|
Matvey Safonov|GR|134|82|494.647|1999||192|18|134|36.4.58|
Daniel James|AVA|123|82|830.793.552.516.367|1997||171||76|17.38.47|D
Everton|AVA|16|75|395.183.140.357|1996||174||16|11.30|E
Jonathan Ikoné|AVA|58|80|647.578.530.356.232.662|1998||175||58|4|D
Justin Kluivert|MED|124|69|32.737.705.612.888.160|1999||171||124|41.44|
Takehiro Tomiyasu|DEF|86|85|119.797.154.93.32.243|1998||188|46|86|16|
Weston McKennie|MED|45|85|463.516|1998||185|71|45|42|
Joelinton|MED|16|81|811.421.718.610|1996||186|7|16|11|
Jonathan Burkardt|AVA|2|78|548.281|2000||181|3|2||
Mile Svilar|GR|145|79|80.140.737|1999||189||20|18.30.31.38.44.46.7|
Joe Willock|MED|76|81|93.215.425.175.147.913.610|1999||186||76|15.16.59|
Noussair Mazraoui|DEF|102|83|32.133.552|1997||183||124|47.5.53|
Merih Demiral|DEF|152|84|812.65.781.463.100.36|1998||192|63|152|30.32.48.6|
Cengiz Ünder|AVA|152|83|131.737.518.553.351.500.141.956|1997||173|51|152|31.41.44|D
Guido Rodríguez|MED|4|79|734.254.226.77.142.925.888|1994||185||4|35.39.49.60|
Artem Dovbyk|AVA|153|82|269.566.835.749.386.737.154|1997||189|41|153|44|
Dan-Axel Zagadou|DEF|58|80|157.298|1999||196||58||
Trevoh Chalobah|DEF|76|83|215.447.425.319.243|1999||192||137|42.48.53|
Jerdy Schouten|MED|124|80|10.838.300.154.648|1997||185|13|124||
Pervis Estupiñán|DEF|49|83|503.726.921.390.871.72.549.638.905.166.7|1998||175|58|49|38.59|
Antonee Robinson|DEF|45|80|299.155.929.367|1997||183||76|38.42.45|
Hiroki Ito|DEF|86|78|599.298.133|1999||188||86|5|
Daichi Kamada|MED|86|85|281.797.510.243|1996||180|50|86|48.59|
Ozan Kabak|DEF|152|82|371.298.532.616.421|2000||186|26|152|33|
Ferdi Kadıoğlu|DEF|152|81|589.351.166|1999||174|20|124|30.31.55|
Evan Ndicka|DEF|39|79|15.281.737|1999||192||58|31.44.59|
Ibrahim Sangaré|MED|39|75|854.648.617|1997||191||39|39.55|
Axel Disasi|DEF|58|82|662.820.587.215.99.925.243|1998||190|5|58|24.39.42|
Emile Smith Rowe|MED|76|82|93.913.699.705.425.367|2000||182||76|15.16.38.53|
Callum Hudson-Odoi|AVA|76|84|215.921.348.524.617|2000||182|3|76|21.39.48.53.55.56.58.59|E
Ethan Ampadu|MED|123|86|215.705.790.895.810.516|2000||182|44|76|21.48.53.59|
Ryan Sessegnon|DEF|76|81|367.853.421|2000||178||76|21.31.38.39.44|
Brenden Aaronson|MED|45|76|678.767.516.874|2000||178||45|42|
Davide Frattesi|MED|84|83|781.97.285.580.440.510|1999||178|34|84|37.6|
Boubacar Kamara|MED|58|79|553.99|1999||184||58|12.59|
Maxi Gómez|AVA|157|80|255.203.888.856.245|1996||186||157||
Eljif Elmas|MED|97|84|351.601.705.848.100|1999||182|77|96|11.21.6|
Samuel Chukwueze|AVA|115|82|809.72.905.7.367|1999||172||115|38.41.52.59|D
Dávid Hancko|DEF|52|80|356.806.354.110|1997||188||52|13.51|
Yves Bissouma|MED|100|83|530.166.853.32|1996||181|50|39|17.21.59|
Ezri Konsa|DEF|76|84|213.164.99.93|1997||183|25|76|53.59|
Jean-Philippe Mateta|AVA|58|80|502.541.511.548.243|1997||192||58||
Lutsharel Geertruida|DEF|124|82|354.705.828.648|2000||184|21|124|13|
Quinten Timber|MED|124|81|882.354.553.243|2001||177|13|124|13|
Jakub Kiwior|DEF|126|83|810.93.325|2000||189|45|126|16.25.7|
Pedro Gonçalves|MED|127|79|934.345.812.356|1998||173|4|127|25.39.45.47.7|
Aaron Ramsdale|GR|76|83|790.160.93.805.610|1998||188|5|76|16.53|
Nicolò Fagioli|MED|84|81|460.463.238.356|2001||178||84||
Charles De Ketelaere|MED|20|84|225.224.7.100|2001||192|39|20|45.48.59|
Martin Terrier|AVA|58|78|530.293.541.731.524|1997||183||58|56|E
Andrea Cambiaso|DEF|84|74|378.285.463.154|2000||183||84||
João Félix|AVA|127|86|140.110.215.127.7.52|1999||180|52|127|18.25.3.30.45.46.51.52.7|
Lucas Chevalier|GR|58|78|530.885.647|2001||189||58|36.4.41.58|
Benoît Badiashile|DEF|58|82|587.215.601|2001||194|2|58|34.42|
Khéphren Thuram|MED|58|81|587.612.463|2001||191|4|84|24.34|
Malik Tillman|MED|45|83|133.717.648.524|2002||187|39|2|42.5.53|
Nathan Collins|DEF|78|78|825.175.934.164|2001||193||78|18.35|
Kevin Schade|AVA|2|77|365.164|2001||185||2||E
Brian Brobbey|AVA|124|82|32.705.828|2002||180|16|124||
Crysencio Summerville|AVA|124|78|309.10.516.925.45|2001||174||124|17.35.39|E
Aaron Wan-Bissaka|DEF|129|85|243.552.925.99|1997||183|16|76|35.39|
Ian Maatsen|DEF|124|82|215.213.236.175.157.99|2002||178||124|42.53.59|
Neco Williams|DEF|123|83|532.367.617|2001||183|61|123|2.33.38.39.55|
Folarin Balogun|AVA|45|83|93.565.820.587|2001||178|2|45|16.42|
Jamie Leweling|AVA|2|77|394.874.298|2001||184||2||D
Fisnik Asllani|AVA|89|75|421.117|2002||191||2||
Maximilian Kilman|DEF|76|71|934.925|1997||192||76|18.35.39|
Dilane Bakwa|AVA|58|74|156.293.617|2002||179||58|55|D
Cheick Doucouré|MED|100|76|521.243|2000||180||100||
Darwin Núñez|AVA|157|85|677.72.140.532.45.958|1999||187|41|157|13.17.2.30.33|
Gonçalo Inácio|DEF|127|81|812|2001||185|20|127|45.47.7|
Harvey Elliott|MED|76|82|367.532.146.99.888|2003||170||76|13.2.33.59|
Yéremy Pino|AVA|54|82|905.243|2002||172|27|54|36.59.60|D
Enzo Millot|MED|58|78|587.298.36.958|2002||174||58||
Maxi Araújo|DEF|157|75|697.845.812|2000||176||157|17.47.7|
Thiago Almada|AVA|4|81|917.108.159.541.110.734|2001||171|21|4|41.49.51.60|E
Maximilian Beier|AVA|2|81|421.157|2002||182|10|2||
Pierre Kalulu|DEF|58|82|7.463|2000||182||58|41.52.6|
Jean-Clair Todibo|DEF|58|82|854.127.140.612.925.521|1999||190|2|67|24.3.30.35.39|
Liam Delap|AVA|76|82|551.825.695.426.447.215.617|2003||186||76|2.26|
Malo Gusto|DEF|58|84|541.215|2003||179|16|58|24.42|
Georgiy Sudakov|MED|153|80|788.140|2002||177|36|153|31|
Conor Bradley|DEF|79|83|532.155|2003||180|24|79|13.2.33|
Kaishu Sano|MED|86|77|546.482.548|2000||176||86||
Odilon Kossounou|DEF|39|82|20.410.224.524.100|2001||191|40|39|48.5.56|
Gavi|MED|54|89|127|2004||173|32|54|27.3.36.60|
Cristhian Mosquera|DEF|54|80|888.93|2004||191||54|16.2|
Jhon Durán|AVA|33|80|286.217.99.52.351.947.140|2003||185|17|33|30.31|
Bilal El Khannouss|MED|102|81|377.518.298|2004||180|46|20||
Elye Wahi|AVA|39|78|578.521.553.281.612|2003||181||58||
Mohamed Simakan|DEF|58|77|293.705.52|2000||187||58||
Yasin Ayari|MED|142|79|14.166.236.146|2003||172||142||
Petar Sučić|MED|40|79|277.440|2003||183||21|6|
Máximo Perrone|MED|4|78|917.551.507.232|2003||178||4|2.26|
Lewis Hall|DEF|76|79|215.610|2004||179||76|42.53|
Nathaniel Brown|DEF|2|79|620.281|2003||180||2||
Gerard Martín|DEF|54|78|127|2002||186||54|27.3|
Evanilson|AVA|16|77|358.325.160|1999||181||16|52.7|
Matias Fernandez-Pardo|AVA|20|80|465.530.610|2005||188|5|20||
Noah Sadiki|MED|129|76|80.875.828|2004||173||20||
Georges Mikautadze|AVA|61|82|323.706.32.541.905|2000||175|47|58|41|
João Gomes|MED|16|78|357.934|2001||176||16|35.55|
Giuliano Simeone|AVA|4|83|110.104.779.66|2002||173|11|84|49.51|D
Mohamed Amoura|AVA|5|79|320.875.933.612|2000||168|48|5||
Alan Varela|MED|4|75|150.325|2001||177||4|52.7|
Jobe Bellingham|MED|76|87|145.828.157|2005||191||76||
Mamadou Sangaré|MED|100|75|767.318.392.949.836.718.521|2002||181||100||
Tom Bischof|MED|2|79|421.133|2005||183|3|2|5|
Dango Ouattara|AVA|18|79|319.160.164|2002||177||18||D
Michael Kayode|DEF|84|76|356.164|2004||179||84||
Ange-Yoan Bonny|AVA|39|78|663.440|2003||189||58|6|
Valentín Barco|MED|4|78|150.166.787.293|2004||170||4||
Lucas Bergvall|MED|142|79|170.268.853|2006||187||142|59|
Tyler Dibling|AVA|76|75|805.299|2006||178||76||D
Lucas Beraldo|DEF|16|82|834.647|2003||182|3|16|11.36.4.58|
Habib Diarra|MED|135|79|293.828|2004||179||135||
Antonio Nusa|AVA|116|79|224.705|2005||180||116||E
Jorrel Hato|DEF|124|81|32.215|2006||182||124||
Archie Gray|MED|76|79|516.853|2006||187||76|59|
Finn Jeltsch|DEF|2|73|620.298|2006||188||2||
Patrick Dorgu|AVA|43|79|513.552|2004||185||43|47|E
Hugo Larsson|MED|142|67|550.281|2004||187||142||
Raúl Asencio|DEF|54|77|721|2003||184||54|11.56|
Mikel Jauregizar|MED|54|76|101.184.144|2003||177||54||
Vitor Roque|AVA|16|79|242.102.127.142.653|2005||172|1|16|11.27.50.9|
Rodrigo Mora|MED|127|79|325.737|2007||168||127|7|
Wesley (2003)|DEF|16|76|357.737|2003||173||16||
Bazoumana Touré|AVA|39|77|20.410.421.610|2006||175|9|39||E
Christian Kofane|AVA|24|75|67.524|2006||189||24||
Jorge Costa|DEF|127|82|325.669.554.213.822|1971||188|50||7.25.31.58|
Maniche|MED|127|86|140.74.325.276.215.110.440.231.812|1977||173|53||2.7.20.31.37.50.58.59|
Balakov|MED|17|82|812.298|1966||176|92||20.29|
Pauleta|AVA|127|86|776.292.262.156.647|1973||180|88||3.50|
Jordão|AVA|127|80|140.779.812.909|1952||179|43||7|
Yazalde|AVA|4|80|438.812.553.611.427|1946||176|10||7|
Roque Santa Cruz|AVA|122|87|133.146.551.142.586.185.528.598|1981||191|112|122|2.37.5.58|
Claudio Pizarro|AVA|125|88|923.133.215.231|1978||184|85|125|26.5.50.58|
Alou Diarra|MED|58|86|133.511.532.717.746.521.541.156.553.925.731.213.19|1981||190|44|58|24.4.43.5.58|
Martín Demichelis|DEF|4|86|734.133.586.110.551.291|1980||184|51|4|2.5.54|
Shay Given|GR|78|85|831.146.828.610.551.99.565.825|1976||185|134|78|2.37|
Gareth Barry|MED|76|86|99.551.299.924|1981||183|53|76|19.2.37.45|
James Milner|MED|76|89|516.831.610.99.551.532.166|1986||175|61|76|19.2.33.37.58|
Scott Parker|MED|76|83|213.616.215.610.925.853.367|1980||175|18|76|12.19.2.31|
Louis Saha|AVA|58|86|323.610.367.552.299.853.828.510|1978||185|20|58|10.12.2.20.58|
Nigel de Jong|MED|124|86|32.408.551.7.499.371.548|1984||174|81|124|2.37.54|
Sébastien Squillaci|DEF|58|83|587.4.541.787.93.746|1980||185|24|58|15.24.4|
Philippe Mexès|DEF|58|85|15.737.7|1982||187|29|58|44|
Mario Yepes|DEF|33|85|260.734.600.647.218.7.100.771|1976||186|102|33|6|
Massimo Ambrosini|MED|84|88|209.7.356|1977||182|35|84|11.14.19.58.6|
Marco Borriello|AVA|84|86|859.858.7.285.729.768.378.737.463.925.199.100.196.760|1982||186|7|84|11.36.44.58.6|
Vincenzo Iaquinta|AVA|84|87|650.871.463.209|1979||189|40|84|21.44.6.60|
Antonio Di Natale|AVA|84|84|285.890.871|1977||170|42|84||
Amauri|AVA|84|82|663.601.679.285.218.652.463.356.848|1980||186|1|16|44|
Raúl Tamudo|AVA|54|80|291.66.725.719.649|1977||180|15|54|42|
Paulo Ferreira|DEF|127|90|292.909.325.215|1979||183|62|127|11.12.2.20.30.31.43.50.58.59.7|
Luiz Gustavo|MED|16|85|192.421.133.933.553.351.52.834.102|1987||187|41|16|12.5.50.55.58|
Lorik Cana|MED|1|84|647.553.828.371.510.600|1983||186|93|88||
Diego Lugano|DEF|157|84|598.834.351.647.586.924.429|1980||188|95|157|11|
Liedson|AVA|127|82|235.357.234.812.325|1977||175|15|16|20.25.32.40.41.55.7|
Alex|DEF|16|85|777.215.648.647.7|1982||188|17|16|11.12.2.31.4.50.58|
Dante|DEF|16|85|462.530.702.822.158.133.933.612|1983||188|13|16|26.5.50.58|
Sulley Muntari|MED|60|88|871.692.440.828.7.46.674.262.67|1984||179|84|60|31.43.44.58.6|
Yoann Gourcuff|MED|58|85|731.7.156.541.266|1986||185|31|58|11.24.4.58|
Mousa Dembélé|MED|20|84|135.22.367.853|1987||185|82|20|12.42.45.54|
Filipe Luís|DEF|16|87|355.32.262.110.215.357|1985||182|44|16|2.3.30.31.50.51.59|
Fabio Quagliarella|AVA|0|86|848.356.97.768.871.601.463|1983||180|25||21.44.6|
Lassana Diarra|MED|58|86|511.215.93.692.721.85.535.553.647|1985||173|34|58|12.15.2.24.3.31.4.53|
Antonio Candreva|MED|84|85|841.871.18.463.663.209.510.440.768.764|1987||180|54|84|21.44|
Salvatore Sirigu|GR|84|84|652.238.647.787.638.848.378.601.356.612.478|1987||192|28|84|11.21.37.4.8|
Bacary Sagna|DEF|58|87|15.93.551.139.579|1983||176|65|58|15.24.26|
Clint Dempsey|AVA|45|85|607.367.853.784|1983||185|141|45|12|
Lisandro López|AVA|4|81|710.325.541.43.443|1983||174|7|4|28.7|
Samir Handanovic|GR|0|86|871.858.510.440|1984||193|81||21.37.6|
Yohan Cabaye|MED|58|84|530.610.647.243.51.763|1986||174|48|58|24.4|
Jakub Blaszczykowski|AVA|126|86|930.157.356.933|1985||175|109|126|25.33.5.53|D
Miranda|DEF|16|86|235.330.834.110.440|1984||186|58|16|3.37.50.51.59|
Theo Walcott|AVA|76|87|805.93.299|1989||176|47|76|11.15.19.38|D
Diego López (1981)|GR|54|85|187.9.721.905.787.7.291.719|1981||196|4|54|3.11.19.31.58|
Roberto Soldado|AVA|54|84|721.638.379.888.853.905.351.390.523|1985||179|12|54|12.19.23.3.42|
Felipe Melo|MED|16|84|357.242.395.549.709.72.356.463.371.440.653.358|1983||183|22|16|21.37.50.6.9|
Ezequiel Garay|DEF|4|85|611.709.721.140.947.888.946|1986||189|32|4|12.30.31.7|
Dejan Lovren|DEF|40|89|277.541.805.532.947.642|1989||188|78|88|2.33.42.58|
Fernando Gago|MED|4|88|150.721.737.888.917|1986||178|61|4|3.31.36|
Joe Hart|GR|76|87|793.551.147.145.848.925.175.853.204|1987||196|75|76|19.2.26.31.37|
Jonny Evans|DEF|79|89|744.552.828.924.518|1988||188|107|79|10.2.20.47.54.58|
André Ayew|AVA|60|84|553.319.5.830.925.351.59.617.511.588|1989||176|120|58|17.24.4|
Moussa Sissoko|MED|58|85|854.610.853.921.600.654|1989||187|71|58|24.31.42.43.44|
Kamil Glik|DEF|126|84|680.652.128.848.587.139.237|1988||190|103|126|34.4|
Danny Rose|DEF|76|84|516.853.921.675.168.828.610|1990||173|29|76|12.31.42.44|
Hernanes|MED|16|85|834.510.440.463.811|1985||180|28|16|37.50.6|
Holger Badstuber|DEF|2|87|133.298.321|1989||189|31|2|11.26.29.5.54.58|
Morgan Schneiderlin|MED|58|84|293.805.552.299.612.926.492.488|1989||181|15|58|11.24.31.38.42.54.59|
Fernando Muslera|GR|157|85|598.510.371.296|1986||191|137|4|17.37|
Asier Illarramendi|MED|54|83|725.721.250|1990||179|3|54|11.35.36.58|
Dani Parejo|MED|54|82|698.722.721.379.888.905|1989||182||54|39.59|
Marcos Acuña|DEF|4|80|710.812.150.787.734|1991||172||4|30.32.35.47.49.59.60|
Kwadwo Asamoah|MED|60|86|848.871.463.440.196|1988||173|74|60|21.6|
Vitolo|AVA|54|81|507.787.110.379|1989||184||54|23.3.35.36.51.59|E
Kevin Strootman|MED|124|83|807.882.648.737.553.378.196|1990||186|46|124|12.54|
Luka Milivojevic|MED|145|82|712.711.294.80.632.243|1991||184|38|88|38.40.55|
Seydou Doumbia|AVA|39|84|20.483.942.194.737.610.132.812.386.329|1987||179|37|39|30|
Nico Gaitán|MED|4|81|140.150.110.530.163.668|1988||173||4|18.25.30.31.38.46.49.51.59.7|
Victor Wanyama|MED|128|79|135.204.805.853|1991||188||128|42|
Aïssa Mandi|DEF|5|80|820.142.905.530|1991||186||58||
Stephan El Shaarawy|AVA|84|86|378.650.7.587.737.755|1992||178|32|84|21.31.34.37.41.44|E
Simone Zaza|AVA|84|83|100.768.461.97.781.463.925.888.848|1991||186|18|84|21.6|
Ander Herrera|MED|54|85|258.779.101.552.647.150|1989||182|2|54|17.31.35.4.42.53.54.59|
Marc Bartra|DEF|54|90|291.127.157.142.856|1991||184|21|54|22.23.26.3.35.36.53.58|
Sebastián Coates|DEF|157|85|598.532.828.812|1990||196|51|157|30.32.47.7|
Erik Lamela|AVA|4|84|734.737.853.787.12|1992||189|25|4|12.31.35.36.42.49.59|D
Germán Pezzella|DEF|4|82|734.142.356|1991||187|42|4|49.60|
Michael Keane|DEF|76|83|552.518.263.146.175.299|1993||191||76|10.11.38.43.53.54|
Carlos Bacca|AVA|33|77|459.224.787.7.905.390|1986||181||33|20.59|
Willian José|AVA|16|79|834.395.777.721.779.507.725.934.142.809.279|1991||186||16|11.39|
Callum Wilson|AVA|76|82|236.160.610.925|1992||180|9|76|39|
Kerem Demirbay|MED|2|78|408.0.302.421.524.371.301.484|1993||185||2|56|
Cédric Bakambu|AVA|129|82|330.176.905.122.553.632.371.51.142.770|1991||183|73|58||
Geoffrey Kondogbia|MED|130|82|521.787.587.440.888.110.553|1993||188|5|58|24.3.34.37.44.51|
Ross Barkley|MED|76|88|299.789.516.215.99.612.539|1993||189|33|76|21.45.48.53.59|
Marten de Roon|MED|124|83|807.414.100.565.737|1991||185|44|124|54.59|
Danilo Pereira|MED|127|84|663.90.735.554.325.647.46|1991||188|74|70|25.32.35.36.39.4.42.45.52.53.7.8|
Matías Vecino|MED|157|85|598.356.196.285.440.510.203|1991||187|70|157|17.21.48.6|
Ryan Fraser|AVA|51|82|26.160.447.610.805.926|1994||163|26|51||E
Vincent Aboubakar|AVA|24|85|580.885.319.325.141.52.411.151|1992||184|117|24|25.32.35.39.52.7|
Divock Origi|AVA|20|88|377.530.532.933.7.617|1995||185|32|20|2.33.39.4.41.45.52.58|
Djibril Sidibé|DEF|58|83|862.530.587.299.12.854.512|1992||183|18|58|11.24.34.38.4.60|
Berat Djimsiti|DEF|1|80|338.100.118.139|1993||190||143|48.59|
Takumi Minamino|AVA|86|86|208.767.532.805.587|1995||172|73|86|2.33|E
Matteo Politano|AVA|84|83|737.673.674.781.440.601|1993||170|20|84|21.37.6|D
Morgan Sanson|MED|58|79|512.578.553.99.293.612|1994||180||58|12|
Sardar Azmoun|AVA|80|84|745.741.947.524.737|1995||186|91|80|20.31.56|
Jean-Philippe Gbamin|DEF|39|76|521.548.299.194.856.869.600.338.323|1995||186||39|43|
Shoya Nakajima|MED|86|82|844.333.690.39.325.37.84.881|1994||167|19|86|52.7|
Maximilian Eggestein|MED|2|79|923.365|1996||181||2||
Florian Grillitsch|MED|165|82|923.421.32.886.163.366|1995||186|61|165||
Julian Weigl|MED|2|81|1.157.140.158.55|1995||187|1|2|18.27.29.30.53.7|
Ruben Loftus-Cheek|MED|76|85|215.243.367.7|1996||191|10|76|2.21.31.41.48.52.53.59|
Chancel Mbemba|DEF|129|79|80.610.325.553.530|1994||182||161|43.52.7|
Álex Remiro|GR|54|80|101.184.144.523.754.725|1995||192|2|54|17.8|
Stefano Sensi|MED|84|79|209.781.236.440.768.580.83|1995||168||84|21.6|
Lucas Vázquez|DEF|54|91|721.291.524|1991||173|9|54|11.3.35.43.57.58|
Thomas Strakosha|GR|1|83|510.764.164.12|1995||186|31|63|48|
Xaver Schlager|MED|165|82|318.767.933.705.617|1997||174|59|165||
Otávio|MED|127|78|443.325.908.52.55|1995||171||16|32.35.39.46.52.7|
Ola Aina|DEF|115|80|215.426.848.367.617|1996||179||76|2.21.39.55|
Breel Embolo|AVA|143|84|132.158.587.731.108|1997||185|92|24||
Duje Caleta-Car|DEF|40|82|767.318.553.805.541.725.781|1996||193|23|40|12.41|
Alexander Sørloth|AVA|116|84|739.152.312.566.243.465.856.705.725.905.110|1995||194|77|116|51|
Keita Baldé|AVA|135|83|510.587.440.768.196.809.291.799.580|1995||178|40|54|34.44|E
Reinildo Mandava|DEF|110|70|748.120.530.110.828|1994||180||110|4.51|
Enes Ünal|AVA|152|82|176.377.551.588.334.523.905.886.379.160|1997||185|34|152|26|
Tyrone Mings|DEF|76|81|447.160.99|1993||196||76|53.59|
Yeray Álvarez|DEF|54|79|101.184.144|1995||182||54|17|
Santi Mina|AVA|54|77|203.888|1995||177||54|36.39|
Gianluca Mancini|DEF|84|82|673.356.100.737|1996||190|20|84|31.37.41.44|
Amir Rrahmani|DEF|89|83|277.592.416.601|1994||192|49|160|21.6|
Talisca|MED|16|79|279.140.141.52.351.47|1994||188||16|30.31.46.7|
Dean Henderson|GR|76|83|552.824.793.790.617.243|1997||188||76|31.53.54|
Jefferson Lerma|MED|33|82|523.160.243|1994||179|70|33|20|
Kevin Danso|DEF|165|82|115.805.302.521.853.828|1998||190|36|165|59|
Joan Jordán|MED|54|80|291.886.787.753.66|1994||184||54|35.59|
Patrick Cutrone|AVA|84|80|7.934.356.888.285.232.663.580|1998||183||84|39|
Chris Führich|AVA|2|80|231.750.298|1998||181|10|2||E
Nemanja Maksimovic|MED|145|81|888.379.654|1995||189|48|160|46|
Renato Tapia|MED|125|82|334.354.127.203.186.62|1995||185||125|27.36.43|
Angeliño|DEF|54|82|551.609.386.549.588.648.705.421.371.737.262|1997||171|1|54|26.44|
Borja Iglesias|AVA|54|82|888.905.203.779.291.142.524|1993||187|9|54|5.56.60|
Harry Wilson|AVA|123|80|239.532.426.263.160.197.367|1997||173||123|13.33.38|D
Sergio Reguilón|DEF|54|83|150.721.787.853.110.552.164.442|1996||178|6|54|21.31.35.36.39.51.59|
Kasper Dolberg|AVA|43|84|32.796.612.787.421.80|1997||186|56|43|35|
Mattia Zaccagni|AVA|84|81|416.895.222.510|1995||176|13|84|37.48|E
Ramy Bensebaini|DEF|5|80|529.578.731.158.157|1995||188||5||
Carles Aleñá|MED|54|83|127.142.379.66|1998||180||54|3.36|
Saïd Benrahma|AVA|5|80|612.81.368.502.164.925.541.590|1995||172|6|5|35.39|E
Hee-chan Hwang|AVA|37|83|318.767.408.705.934|1996||177|85|37|18.35.40.55|
Taiwo Awoniyi|AVA|115|84|532.589.585.465.548.874.617|1997||183|10|115|33.39.55|
Dodi Lukébakio|AVA|20|81|80.854.702.921.302.418.933.787.140|1997||184|33|20|31.45|D
Mehdi Taremi|AVA|80|84|43.732.325.440.632.62|1992||186|108|80|20.52.7|
Marcus Edwards|AVA|76|75|616.300.908.812.175|1998||176||76|47.7|D
Nahitan Nández|MED|157|79|677.150.196.55|1995||172||157|17.44|
David Raum|DEF|2|81|394.421.705|1998||180|40|2|27|
Mathias Jensen|MED|43|80|613.203.164|1996||180|32|43||
Emiliano Buendía|AVA|4|78|379.616.99.524|1996||172||4|56.59|E
Tyler Adams|MED|45|80|608.705.516.160|1999||175||45|42|
Sander Berge|MED|116|81|916.377.790.175.367|1998||195|46|116|38|
Ermedin Demirovic|AVA|21|81|66.330.72.331.365.115.298|1998||185|38|2||
Marc Roca|MED|54|81|291.133.516.142|1996||184|1|54|27.5.53|
Konstantinos Tsimikas|DEF|63|85|632.289.532.737|1996||179|51|63|13.2.33.38.40.55|
Deniz Undav|AVA|2|82|875.166.298|1996||178|13|2||
Eddie Nketiah|AVA|76|81|93.160.913.516.243|1999||180||76|15.16.17.53|
Caoimhín Kelleher|GR|78|83|532.164|1998||188|12|78|13.2.33|
Gerson (1997)|MED|16|79|358.737.356.357.553.947.242|1997||185||16|60|
Anton Stach|MED|2|78|394.548.421.516|1998||193|5|2|27|
Boubakary Soumaré|MED|58|78|530.518.787|1999||188||58|17.4|
Mouctar Diakhaby|DEF|68|79|541.888|1996||192||58||
Noah Okafor|AVA|143|79|132.767.7.601.516|2000||185||143|21.41.6|E
Igor Zubeldia|DEF|54|79|725|1997||185||54||
Pablo Fornals|MED|54|76|105.586.905.925.142|1996||160||54||
Ritsu Doan|AVA|86|84|372.312.648.91.365.281|1998||172|73|86||D
Sergiño Dest|DEF|45|86|32.127.7.648|2000||175|33|124|42|
Julian Ryerson|DEF|116|83|901.874.157|1997||183|39|116||
Marash Kumbulla|DEF|1|80|416.737.781.291.549|2000||192||84|31.41.44|
Amine Harit|AVA|102|79|600.553.131|1997||179||58|52|E
Yangel Herrera|MED|159|83|551.609.754.390.291.386.725|1998||184|40|159|26|
Wesley Moraes|AVA|16|80|224.99.443|1996||191||16||
Alexis Saelemaekers|MED|20|84|80.7.154.737|1999||180|28|20|41.44.45.52.6|
Kerem Aktürkoğlu|AVA|152|82|131.151.371.140.351|1998||173|34|152|18|E
Lovro Majer|MED|40|81|592.277.731.933|1998||176|22|40||
Jonas Wind|AVA|43|81|233.933|1999||190|27|43||
Angel Gomes|MED|76|80|552.149.530.553.934|2000||168||76|28.31.41.53|
Harvey Barnes|AVA|76|80|518.543.129.924.610|1997||174|1|76|44|E
Amadou Haidara|MED|100|78|767.318.705.521|1998||175||100||
Robert Sánchez|GR|54|82|166.215.232|1997||197|3|54|36.42|
Andriy Lunin|GR|153|87|269.948.721.186.886.723|1999||191|9|153|11.3.35.56.57.58|
Vitaliy Mykolenko|DEF|153|83|275.299|1999||181|55|153||
Nicolas Seiwald|MED|165|81|318.767.705|2001||179|55|165||
Jhon Lucumí|DEF|33|81|260.377.154.463|1998||187|42|33|20|
Mats Wieffer|DEF|124|80|334.300.354.166|1999||188|15|124|13|
Youcef Atal|DEF|5|75|470.612.29|1996||176||5||
Billy Gilmour|MED|51|82|215.616.166.601|2001||170||51|21.42.53.58.6|
Luis Suárez (1997)|AVA|33|79|726.886.921.887.384.779.390.553.72.812|1997||185||33|38|
Matty Cash|DEF|126|81|617.99|1997||185||76|25.59|
Lewis Ferguson|MED|51|79|409.26.154|1999||181||51||
Nikola Krstović|AVA|109|73|294.513.100|2000||185||160|48|
Galeno|AVA|16|76|86.325.690.732.163.36|1997||179||16|47.52.7|E
Marco Carnesecchi|GR|84|74|100.857.238|2000||191||84|48.59|
Estéban Lepaul|AVA|58|73|868.81.731|2000||177||58||
Calvin Bassey|DEF|115|78|717.32.367|1999||185||84|38|
Bafodé Diakité|DEF|58|76|854.530.160|2001||182||58|41|
Djordje Petrovic|GR|145|75|244.433.607.215.293.160|1999||194||160|42|
Youssoufa Moukoko|AVA|2|81|157.612.233|2004||179|2|24|27|
Samuele Ricci|MED|84|76|285.848.7|2001||180||84||
Kenneth Taylor|MED|124|80|32.510|2002||182||124|48|
Kiernan Dewsbury-Hall|MED|76|79|518.147.539.215.299|1998||178||76||
Emerson Royal|DEF|16|81|689.112.142.127.853.7.357|1999||183||16|21.39.41.52|
Juan Foyth|DEF|4|83|296.853.905|1998||187|22|4|31.42.49.59.60|
Djed Spence|DEF|76|82|565.617.853.731.516.378.440|2000||185|14|76|21.53.59|
Daniel Muñoz|DEF|33|81|733.106.377.243.617|1996||180|51|33||
Edon Zhegrova|AVA|89|76|377.132.530.463|1999||174||2|41|D
Evann Guessand|AVA|39|79|612.509.600.99.243|2001||185|10|58|59|D
Isak Hien|DEF|142|75|268.416.100|1999||191||142|48.59|
Senne Lammens|GR|20|80|225.224.744.552|2002||193|3|20|45.47|
Yunus Musah|MED|45|80|888.7.100|2002||178||45|41.42.52|
Fábio Silva|AVA|127|79|325.934.80.648.717.507.157|2002||185||127|18.35.39.52.55.7|
Jesper Lindstrøm|AVA|43|80|172.281.601.299.933|2000||181||43|59|D
Pepê|AVA|16|75|395.325|1997||175||16|50.52.7|D
Roger Ibañez|DEF|16|80|358.100.737.510.36|1998||187||16|31.41.48|
Miguel Gutiérrez|DEF|54|79|721.386.601.524|2001||180||54|11.21.3.57.58|
Nicolò Rovella|MED|84|78|378.463.580.510|2001||179||84|48|
Amine Adli|AVA|102|79|854.524.160|2000||174||58|5.56|E
Bryan Gil|AVA|54|81|787.186.753.853.888.386|2001||175||54|21.35.39.59|E
Fábio Vieira|MED|127|80|325.93.408|2000||170||127|16.52.7|
Terem Moffi|AVA|115|79|470.319.612.325.408|1999||178|23|115|7|
Georginio Rutter|AVA|58|77|731.421.516.166|2002||182||58||
Mikkel Damsgaard|MED|43|78|613.768.164|2000||180||43|44|
Sepp van den Berg|DEF|124|81|645.532.695.548.164|2001||192||124|33|
Mohamed Camara|MED|100|72|318.836.767.587|2000||175||100||
Zeno Debast|DEF|20|80|80.812|2003||191|26|20|47.7|
Troy Parrott|AVA|78|82|853.568.447.543.695.300.22.142|2002||185|37|78|21.31.39.42|
Pedro Porro|DEF|54|88|127.386.551.886.812.853|1999||176|22|54|21.26.3.36.47.58.59.60.7|
Mika Biereth|AVA|43|77|707.583.827.587|2003||187||76||
James Trafford|GR|76|82|551.155.175|2002||197||76|26.53|
Youssouf Fofana|MED|58|83|293.587.7.787|1999||185|25|58|24.41.52|
Armando Broja|AVA|1|82|215.907.805.367.299.175|2001||191||76|38.42.53|
Lorenzo Lucca|AVA|84|78|652.681.32.871.601.617|2000||201||84|21.55|
Chris Richards|DEF|45|81|250.133.421.243|2000||188||45|27.42.5.53|
Martin Baturina|MED|40|79|277.232|2003||172||143||
James McAtee|MED|76|78|790.551.617|2002||180||76|2.26.55|
Arnaud Kalimuendo|AVA|58|78|521.647.731.617.281|2002||178||58|4.42.53|
Carlos Augusto|DEF|16|81|234.580.440|1999||184|4|16|11.6|
Aaron Hickey|DEF|51|77|413.154.164|2002||185||51||
Rodrigo Zalazar|MED|157|80|105.281.493.817.163.812|1999||178||54||
Ardon Jashari|MED|143|79|321.224.7|2002||180|4|143||
Mario Gila|DEF|54|78|721.510.7|2000||185||54|48|
Tyler Morton|MED|76|76|146.426.532.541|2002||198||76|13.41|
Boulaye Dia|AVA|135|81|820.905.764.510.731|1996||180|38|58|48|
Ricardo Pepi|AVA|45|79|250.115.312.648|2003||185||45|42|
Marc Casadó|MED|54|82|127.262|2003||172|2|54|27.3|
Wilfried Singo|DEF|39|79|848.587.371|2000||190||39||
Igor Paixão|AVA|16|77|537.235.354.553|2000||168||16|13|E
Adrien Truffert|DEF|58|78|731.160|2001||176|3|20||
Simon Adingra|AVA|39|81|613.166.875.828.587.32|2002||175|30|39||E
Julio Enciso|MED|122|81|528.166.447.293|2004||168|39|122||
Oscar Bobb|AVA|116|80|551.367|2003||169||116|2.26.38|D
Leon Avdullahu|MED|89|71|132.421|2004||185||143||
Marcos Leonardo|AVA|16|78|777.140.45.32|2003||174||16|30.60|
Matías Soulé|AVA|4|76|460.463.366.737|2003||176||4|44|D
Andreas Schjelderup|AVA|116|77|613.140|2004||176||116|18.31.7|E
Jonathan Rowe|AVA|76|76|616.553.154.100|2003||178||76||E
Samuel Lino|AVA|16|80|380.110.888.357|1999||178|1|16|11.51|E
Gabri Veiga|MED|54|78|203.36.325|2002||184||54|7|
Brajan Gruda|MED|2|76|548.166.705|2004||178||2||
Geny Catamo|AVA|110|78|812.908.554|2001||172|32|110|47.7|D
Yegor Yarmolyuk|MED|153|74|749.164|2004||176||153||
Loïc Badé|DEF|58|77|511.521.731.617.787.524|2000||191||58|59|
Richard Ríos|MED|33|81|357.555.396.653.140.46|2000||187|37|33|18.31.38.9|
Omari Hutchinson|MED|76|78|215.447.617.7|2003||174|2|76|42.55|
Malick Fofana|AVA|20|77|465.541.828|2005||169|5|20|41|E
Robin Risser|GR|58|77|293.266.727.521|2004||193||58||
Aleksandar Stanković|MED|145|74|440.321.224|2005||185||84||
André|MED|16|76|358.934|2001||176||16|55|
Danilo (2001)|MED|16|79|653.617.159|2001||177||16|9.39|
Eliesse Ben Seghir|AVA|102|78|587.524|2005||179||58||E
Niccolò Pisilli|MED|84|75|737|2004||181||84|31.44|
Marc Pubill|DEF|54|79|103.523.72.110|2003||191||54|51.60|
Santiago Castro|AVA|4|75|917.154.737|2004||179||4||
Jack Hinshelwood|MED|76|76|166|2005||182||76||
Marco Palestra|DEF|84|79|100.196.215|2005||186|2|84|59|
Kevin|AVA|16|75|653.788.367|2003||176||16|38.9|E
Ismaël Koné|MED|25|81|579.921.553.731.781|2002||188|40|39||
Arthur Vermeeren|MED|20|80|744.110.705.553|2005||180|4|20|51|
Gonzalo García|AVA|54|79|721|2004||182||54|11.3.56|
Víctor Muñoz|AVA|54|80|721.638.532|2003||173|2|54|60|E
Thierno Barry|AVA|58|75|330.919.132.905.299|2002||195||58||
Jacobo Ramón|DEF|54|76|721.232|2005||196||54|11|
Rômulo (2002)|AVA|16|73|102.402.705|2002||193||16|50|
Vitor Reis|DEF|16|77|653.551.386|2006||186||16|26.9|
Jaydee Canvot|DEF|58|72|854.243|2006||182||58||
Marc Bernal|MED|54|79|127|2007||195||54|27.3|
Assane Diao|AVA|135|77|143.142.232|2005||185||135||E
Joaquín Panichelli|AVA|4|75|66.188.293|2002||190||4||
Honest Ahanor|DEF|84|76|378.100.243|2008||184|2|84|48|
Ayden Heaven|DEF|76|81|93.552|2006||189||76|16.47|
Rio Ngumoha|AVA|76|81|532|2008||170|1|76|13|E
El Hadji Malick Diouf|DEF|135|79|861.802.925.164|2004||183|23|135|39|
Ibrahim Mbaye|AVA|135|84|647.99|2008||185|15|58|36.4.58|D
Max Dowman|AVA|76|81|93|2009||183||76|16.2|D
Jesús Rodríguez|AVA|54|75|143.142.232|2005||185||54||E
Óscar Cardozo|AVA|122|83|598.611.140.856.632.528|1983||193|58||7.30.40|
Martin Petrov|AVA|17|84|195.786.933.110.551.155.291|1979||179|90|17|37|E
Stephan Lichtsteiner|DEF|143|87|391.530.510.463.93.115|1984||181|108|143|21.6|
Kieron Dyer|MED|76|82|447.610.925.698.565|1978||173|33|76|19|
Joseph Yobo|DEF|115|85|822.553.189.299.351.616|1980||188|101|115||
Craig Bellamy|AVA|123|85|616.236.610.204.146.532.925.551.197|1979||175|81|123|37.43|E
Jermaine Jenas|MED|76|82|617.610.853.99.698|1983||181|21|76|12.19|
Richard Dunne|DEF|78|84|299.551.99.698|1979||188|80|78||
Tim Howard|GR|45|88|608.552.299.229|1979||191|121|45|10.2.20.45|
Sidney Govou|AVA|58|83|541.654.950|1979||175|49|58|28.4|D
Jérémy Mathieu|DEF|58|84|330.854.888.127.812|1983||189|5|58|24.3.30.32.36.47.58|
David Pizarro|MED|29|83|871.864.440.737.551.356|1979||168|46|29|17.36.37.44.6|
Matuzalém|MED|16|79|280.663.601.679.165.788.779.510.378.154.416|1980||175||16||
Cristian Zaccardo|DEF|84|84|154.810.652.933.663.7.199|1981||184|17|84|5.60|
Tommaso Rocchi|AVA|84|82|463.232.858.285.510.440.650|1977||177|3|84|58.6|
Fabrizio Miccoli|AVA|84|82|841.463.673.356.140.652.513|1979||168|10|84|19.24.25.6|
Albert Riera|MED|54|83|549.156.291.551.532.632.371.921.871|1982||188|16|54|23.37.43|
Ivica Olic|AVA|40|86|277.194.408.133.933.1|1979||182|104|88|5.54.59|
Mikel Arteta|MED|54|85|127.647.717.725.299.93|1982||175||54|15.3|
Yossi Benayoun|AVA|83|88|545.709.925.532.215.93.698.542|1980||178|102|83|11.12.15.43.58.59|D
Salomon Kalou|AVA|39|88|20.354.300.215.530.418.159|1985||183|93|39|11.12.2.31.50.58|E
Tiago Mendes|MED|127|88|163.140.215.541.463.110|1981||183|66|127|2.20.25.28.3.31.4.40.44.50.51.59|
Michel Bastos|MED|16|81|354.300.102.395.355.530.541.37.737.834.653.811.78|1983||179|10|16|50.59|
Éver Banega|MED|4|86|150.888.110.611.787.440.60.254|1988||174|65|4|35.49.55.59|
Bruno Alves|DEF|127|88|325.346.908.947.351.196.717.663.88.946|1981||189|96|127|20.25.28.30.31.40.50.55.58.59.7.8|
Raúl Meireles|MED|127|87|149.265.325.532.215.351|1983||180|76|127|12.20.28.40.50.55.58.7|
Leighton Baines|DEF|76|85|929.299|1984||170|30|76|11.19.38.45|
Ricardo|GR|127|84|149.812.142.518.909.629|1976||185|79|127|25.32.40.50.52.7|
Helton|GR|16|81|892.519.325|1978||186|3|16|12.28.32.35.41.55.59.7|
Aaron Lennon|AVA|76|84|516.853.299.175.486|1987||165|21|76|12.19.42.45|D
Thomas Vermaelen|DEF|20|90|32.707.93.127.737.906|1985||183|85|20|15.3.36.45|
Marco Amelia|GR|84|85|737.18.513.663.652.378.7.673.215|1982||190|9|84|19.6.60|
Kevin-Prince Boateng|MED|60|86|418.853.157.692.378.7.507.281.781.127.356.141.580|1987||186|15|2|3.33.6|
Gökhan Inler|MED|143|84|338.871.601.518.141.131.29|1984||183|89|143|2.43.44|
Marouane Chamakh|AVA|102|84|156.93.925.243.197|1984||188|65|58|15.4|
Riccardo Montolivo|MED|84|86|100.356.7|1985||181|66|84|21|
Giampaolo Pazzini|AVA|84|84|100.356.768.440.7.416.523|1984||180|25|84|44|
Pablo Zabaleta|DEF|4|86|771.291.551.925|1985||176|58|4|2.26.37|
Steve Mandanda|GR|58|85|511.553.243.731|1985||185|35|161|12.17.24.4.60|
Kévin Gameiro|AVA|58|84|293.319.647.787.110.888|1987||172|13|58|11.24.4.51.59|
Gary Cahill|DEF|76|88|99.175.790.155.215.243.160|1985||193|61|76|19.2.21.31.43.48.59|
Lars Bender|MED|2|83|1.524|1989||185|19|2|29|
Armando Izzo|DEF|84|78|859.601.118.378.848.580|1992||183||84||
Danilo|DEF|16|75|450.667.102.653.871.154.325.721.551.463|1984||185||16|11.2.26.3.35.41.43.48.50.55.57.58.6.7|
Carlos Vela|AVA|111|87|93.203.638.924.725.500|1989||177|72|111|15|D
Nikola Kalinic|AVA|40|84|405.591.146.269.356.7.110.737.416|1988||187|42|88|41.51|
Fredy Guarín|MED|33|85|286.150.763.325.440.755.892.567|1986||183|57|33|12.28.37.55.59.7|
Borja Valero|MED|54|81|721.549.924.905.356.459.440|1985||175|1|54|21|
Ryan Bertrand|DEF|76|85|160.215.628.616.720.617.99.805.518|1989||179|19|76|11.12.2.31.43.50.58.59|
Loïc Rémy|AVA|58|84|541.521.612.553.610.698.215.243.507.379.530.180.29.818|1987||185|31|58|2.21.24.31.4|
Cenk Tosun|AVA|152|79|281.375.141.299.243.351.484|1991||183||2|11.25.31.38|
Aleksandar Kolarov|DEF|145|86|244.624.510.551.737.440|1985||187|94|88|2.21.26.37.41.44.6|
Mamadou Sakho|DEF|58|85|647.532.243.578|1990||187|29|58|11.24.33.4|
Joe Allen|MED|123|85|830.935.532.825|1990||168|77|123|33.45|
Sebastian Giovinco|AVA|84|85|463.285.663.849.45.768|1987||160|23|84|21.24.44.6|
Kevin Kampl|MED|53|80|524.394.899.767.157.705|1990||180||2|33.53.56|
Ramires|MED|16|87|242.140.215.653|1987||180|52|16|11.12.19.2.30.31.43.50.58.59.7|
Matteo Darmian|DEF|84|89|7.650.652.848.552.663.440.154|1989||182|46|84|11.21.31.37.54.58.59.6|
Sofiane Feghouli|MED|5|84|393.888.72.925.371.478.961|1989||178|82|58|39|
Giacomo Bonaventura|MED|84|84|100.650.7.356.60|1989||180|18|84|21.37|
Maximiliano Pereira|DEF|157|84|140.325.677.734|1984||173|125|157|30.32.35.39.52.7|
Wilson Palacios|MED|72|83|145.929.853.825|1984||178|97|72||
Victor Moses|MED|115|87|243.929.215.532.825.925.351.440.809.539.962|1990||177|38|115|2.21.43.45.46.48.59|
Nicolas N'Koulou|DEF|24|83|587.553.541.848.921.90.374|1990||180|83|24|17.24.44|
José Callejón|AVA|54|84|291.721.601.356.390|1987||178|5|54|11.23.3.31.35.42.43.48|D
Sergio Canales|MED|54|83|709.721.888.725.142.577|1991||180|11|54|3.31.36|
Danny Welbeck|AVA|76|88|552.695.828.93.921.166.215|1990||185|42|76|10.15.19.2|
Séamus Coleman|DEF|78|84|299.147|1988||177|81|78|11.38.43.45|
Nolito|AVA|54|85|127.140.390.203.551.787|1986||175|16|54|23.26.3.30.35.36.58.59|E
Iago Aspas|AVA|54|84|203.532.787|1987||176|22|54|35.36.43|
Jackson Martínez|AVA|33|82|436.325.110.690|1986||185|40|33|35.41.50.51.55.7|
Francis Coquelin|MED|58|82|93.319.365.213.888.905.600|1991||178||58|15.59|
Yannick Bolasie|AVA|129|80|684.168.243.299.99.80.812.565.180.830.240.242.211|1989||188||58|11.34.38.43|
Laurent Koscielny|DEF|58|86|398.855.319.93.156|1985||186|51|58|15.24|
Salomón Rondón|AVA|159|84|507.586.745.947.924.610.194.299.734.649.723|1989||189|122|159|12.28.43|
Eduardo Salvio|AVA|4|83|506.110.140.150.865|1990||171|14|4|18.30.46.49.51.59.7|D
Nico Schulz|DEF|2|80|418.158.421.157|1993||180||2||
Joshua King|AVA|116|84|552.695.158.426.146.160.299.921.351.854.48|1992||184|62|116|10.11.2.30.44|
Marcos Rojo|DEF|4|88|296.809.812.552.150.710|1990||187|61|4|28.31.34.49.54.59|
Willi Orbán|DEF|73|81|0.705|1992||185|72|2||
Sead Kolasinac|DEF|21|87|93.553.100|1993||183|73|2|15.16.48.59|
Jannik Vestergaard|DEF|43|80|421.923.158.805.518|1992||199||43||
William Carvalho|MED|127|84|812.207.142.649|1992||190|80|3|25.28.30.34.38.40.8|
Chris Smalling|DEF|76|88|367.552.737.42.325|1989||194|31|76|10.19.2.31.41.54.59|
Jonas Hector|DEF|2|83|231|1990||185|43|2|29|
Chris Wood|AVA|118|84|924.129.166.145.168.568.518.447.516.175.610.617|1991||191|95|118|39.55|
Mark Uth|AVA|2|78|231.414.417.421|1991||185|1|2||
Phil Jones|DEF|76|88|146.552|1992||182|27|76|10.19.2.31.54.59|
José Campaña|MED|54|79|787.243.768.620.325.9.523.507|1993||179||54|35|
Michael Gregoritsch|AVA|165|82|421.817.898.408.115.365.172|1994||194|81|165||
Santiago Arias|DEF|33|83|441.812.648.110.524.390.221.279.438|1992||175|63|33|20.28.51|
Alphonse Areola|GR|58|83|647.521.746.905.721.367.925|1993||195|5|58|24.3.35.39.4.42.53.57.60|
Faouzi Ghoulam|DEF|5|78|763.601.81.411|1991||188||58|11.21.43.48|
Layvin Kurzawa|DEF|58|82|587.647.367.149|1992||182|13|58|24.34.36.38.4.42.44.53|
Juan Bernat|DEF|54|84|888.133.647.140.905.379.753|1993||172|11|54|11.23.26.35.36.4.42.5.53|
Serge Aurier|DEF|39|83|521.854.647.853.905.617.371.963|1992||176|60|39|31.39.4.42|
Abdoulaye Doucouré|MED|100|78|731.921.390.299.590|1993||184||58|11.38.43|
Jack Butland|GR|76|81|145.216.129.825.516.263.243.552.717|1993||196|5|76|53|
Conor Coady|DEF|76|81|532.790.425.934.299.518.935.213|1993||185||76|18.35.39.53.55|
Gerard Deulofeu|AVA|54|85|127.299.787.7.921.871.508|1994||176||54|11.23.26.3.35.36.38.43.45.59|
Dennis Praet|MED|20|81|80.768.518.848.744.471|1994||181|15|20|45|
Simone Verdi|MED|84|80|7.848.461.285.753.199.154.601.764.416.232.781|1992||171||84|11.41.48.52.6|
Bertrand Traoré|AVA|18|82|215.907.32.541.99.131.905.828|1995||177||18|21|D
Thiago Mendes|MED|16|75|389.834.530.541.57.892|1992||175||16|17|
Leandro Damião|AVA|16|81|443.777.242.142.677|1989||187|17|16|50|
Matija Nastasić|DEF|145|83|665.356.551.549.186|1993||187|34|160|2.37|
Pavel Kaderabek|MED|32|79|806.421|1992||182||22||
Jasper Cillessen|GR|124|87|589.32.127.888.507|1989||187|65|124|3.36.54|
Lewis Dunk|DEF|76|76|166.168|1991||192||76|53|
Christian Nørgaard|MED|43|78|540.408.172.356.164.93|1994||185||43|16.2|
Raúl de Tomás|AVA|54|84|721.246.886.719.140.291|1994||180||54|11.18.35.43.57|
Josef Martínez|AVA|159|77|942.332.848.108.442.579.756.226|1993||170||159||
Daniele Rugani|DEF|84|80|285.463.731.196.32.356|1994||190||84|48.6|
Ahmed Musa|AVA|115|84|884.194.518.52.478.799|1992||170|111|115|44.46|E
Matt Doherty|DEF|78|78|934.419.178.853.110|1992||182||78|21.31.35.39.55|
James Tarkowski|DEF|76|79|628.164.175.299|1992||185||76|53|
Rony Lopes|AVA|127|79|551.530.587.787.612.632.862.163.65.346.847|1995||174||16|17.34.35.41.59|D
Quincy Promes|AVA|124|80|387.334.809.787.32|1992||174||124|46.54|E
Davy Klaassen|MED|124|84|32.299.923.440|1993||179|41|124|54.6|
Waldemar Anton|DEF|2|80|298.157|1996||182||158||
Mattia Caldara|DEF|84|78|100.857.209.463.7.895.810.575|1994||187||84||
Jamie Vardy|AVA|76|85|518.238.175|1987||179|26|76|2.44|
Andrija Zivkovic|AVA|145|82|665.140.642|1996||170|61|160|18.46.7.9|D
Yassine Bounou|GR|102|86|104.110.779.386.787.45|1991||195|93|25|30.35.51.59|
Djibril Sow|MED|143|83|158.942.281.787.378|1997||184|56|143|59|
Adam Webster|DEF|76|78|692.447.168.166|1995||191||76||
Alireza Jahanbakhsh|AVA|80|83|589.22.166.354.414.340.300|1993||180|101|80|13.20|D
Jérémie Boga|AVA|39|77|731.390.215.145.781.100.612.463|1997||172||58||E
Roman Yaremchuk|AVA|153|83|275.324.465.140.224.888.632.541|1995||186|69|153|30.41.7|
Marko Grujić|MED|145|84|294.532.197.418.325.12.525|1996||191|28|160|33.52.7|
Fredrik Aursnes|MED|116|77|576.354.140|1995||179||116|13.18.31.7|
Mariano Díaz|AVA|131|85|721.541.787.66|1993||181|4|54|11.3.35.57.58|
Philipp Lienhart|DEF|165|86|721.365|1996||189|45|165|43.57|
Wendell|DEF|16|75|537.659.395.524.325.834|1993||176||16|52.56.7|
Ondrej Duda|MED|52|82|517.418.616.231.416.40|1994||181|90|52||
Nadiem Amiri|MED|2|80|421.524.378.548|1996||178||2|5.56|
Costinha|MED|127|63|311.909.214.776.587.325|1992||170||127||
Gabriel Barbosa|AVA|16|83|777.440.140.357.242|1996||178|18|16|21.30.34.46|
Enis Bardhi|MED|97|76|523.856.151.492|1995||172||96||
Nabil Bentaleb|MED|5|81|853.610.81.530|1994||187||58|12.21.31.39.41.42|
Diego Llorente|DEF|54|87|721.719.586.725.516.737.142|1993||185|10|54|11.17.31.35.36.43.57|
Zeki Çelik|DEF|152|83|176.449.530.737.463|1997||180|63|152|31.4.44|
Alex Telles|DEF|16|84|462.395.371.440.325.552.787.52.159|1992||181|12|16|35.37.39.52.59.7|
Daniel Podence|AVA|127|79|812.582.632.934.60|1995||165||127|18.30.35.38.39|E
Renato Sanches|MED|127|89|140.133.830.530.647.737.654.7|1997||176|32|127|11.18.25.31.36.4.43.46.5.7.8|
Aleix García|MED|54|82|905.551.386.585.308.753.524|1997||173|8|54|26.56|
Suat Serdar|MED|2|77|548.418.416|1997||183||2||
Davide Calabria|DEF|84|83|7.154.654|1996||176|7|84|37.41.43.46.52.6|
Vitaly Janelt|MED|2|77|705.898.164|1998||184||2||
Antonín Barák|MED|32|80|802.871.513.416.356.484|1994||190||32||
Paul Onuachu|AVA|115|75|566.893.377.805.856|1994||202||115||
Giovanni Simeone|AVA|4|80|734.125.378.356.196.416.601.848|1995||180||4|21.6|
Pau López|GR|54|79|291.853.142.737.553.386.845|1994||188||54|41|
Ludovic Blas|MED|58|77|398.600.731|1997||180|4|58||
Orel Mangala|MED|20|78|298.408.617.541.299|1998||178||20|39.41|
Mauro Arambarri|MED|157|78|255.156.379.734|1995||175|12|157||
Demarai Gray|AVA|85|80|145.518.524.299.40|1996||178||76|2.43.44|E
Jonathan Bamba|AVA|39|78|763.662.797.81.530.194.203.217|1996||175||58|4.41.43|E
Borna Sosa|DEF|40|82|277.298.32.848.243.231|1998||176|26|40||
Kelechi Iheanacho|AVA|115|83|551.518.787.565.204|1996||185||115|26|
Arne Maier|MED|2|77|418.91.115|1999||183||2||
Joe Rodon|DEF|123|82|830.216.853.731.516|1997||180|62|123|21.31.39|
Gaetano Castrovilli|MED|84|80|128.356.238.510.580.209|1997||187||84||
Diadié Samassékou|MED|100|73|318.767.421.632.245.423|1996||175|1|100||
Olivier Boscagli|DEF|58|76|612.622.648.166|1997||181||108||
Philip Billing|MED|43|78|425.160.601.566|1996||193||43|21.6|
Sebastian Szymanski|MED|126|78|517.276.354.351.731|1999||174||126|13.31|
Rafael Borré|AVA|33|82|260.110.905.734.281.923.443|1995||179|44|33|20.51.59|
Vangelis Pavlidis|AVA|63|81|898.22.140|1998||186|50|63|18.31.38|
Jeff Reine-Adélaïde|MED|58|80|521.93.81.541.612.862.708.764.417|1998||183||58|15|
Ridle Baku|DEF|2|77|548.933.705|1998||176||2|27.29|
Manuel Lazzari|DEF|84|79|760.510|1993||174||84|48|
Riqui Puig|MED|54|83|127.499|1999||166|2|54|27|
Matteo Pessina|MED|84|82|580.513.7.201.232.100.810.416|1997||183|16|84|37.8|
Christian Kouamé|AVA|39|80|694.222.378.356.80.285.90|1997||193||39||
Gedson Fernandes|MED|127|79|140.853.371.180.141.809|1999||181||144|18.25.30.31.46.7|
Noa Lang|AVA|124|81|32.22.310.334.224.648.601.371|1999||176||124|21|E
Tyrell Malacia|DEF|124|81|354.552.648|1999||170||124|13.47|
Rico Henry|DEF|85|77|920.164|1997||170||76||
Nathan Tella|AVA|115|78|805.175.524|1999||173||76|5.56|D
Kyle Walker-Peters|DEF|76|80|853.805.925|1997||173||76|39.42.53|
Fran García|DEF|54|81|719.721.142|1999||169|2|54|11.3.56.58|
Ben Godfrey|DEF|76|79|616.793.299.100.447.790.172|1998||184||76|11.43.48.53|
Ladislav Krejci (1999)|DEF|32|80|806.386.934|1999||191|15|32|55|
Sean Longstaff|MED|76|79|489.147.610.532.516|1997||181||76|43|
Ché Adams|AVA|51|78|790.145.805.848|1996||175||76||
Nordi Mukiele|DEF|58|81|819.578.705.647.524.828|1997||187||58|36.4.56|
Lucas Tousart|MED|58|76|885.541.418.874.818|1997||185||58|41|
Amadou Diawara|MED|68|80|154.601.737.80|1997||183||68|11.31.41.44.48|
Diogo Dalot|DEF|127|86|325.552.7|1999||185|37|127|25.31.45.47.52.7|
Leandro Barreiro|MED|94|77|548.140|2000||170||94|18.31.38|
Raoul Bellanova|MED|84|81|156.100.674.196.440.848|2000||188|6|84|44.48|
Patson Daka|AVA|163|80|767.518|1998||183||163||
Sergio Gómez|DEF|54|82|157.754.80.551.725|2000||173||54|2.26.58|
Riccardo Orsolini|AVA|84|79|97.463.100.154|1997||183||84||D
Arthur Theate|DEF|20|82|472.154.731.281|2000||186|36|20|45|
Sasa Kalajdzic|AVA|165|75|298.934.281.501|1997||200||165|35.55|
Joakim Maehle|DEF|43|82|23.377.100.933|1997||186|55|43||
Timothy Weah|MED|45|84|647.204.530.463.553|2000||183|31|45|4.41.42.53|
Tetê|AVA|16|76|395.788.541.518.371.654|2000||175||16|43.46|D
Jaka Bijol|DEF|53|81|194.871.516|1999||190|77|53||
Junior Firpo|DEF|131|82|143.142.127.516|1996||184||131|17|
Mathías Olivera|DEF|157|78|598.379.67.601|1997||184||157|17.21.6|
Yusuf Yazıcı|MED|152|81|856.530.194.632|1997||183|45|152|4.41|
Hamed Traoré|AVA|39|77|285.781.160.601.15.553.378|2000||177||39||E
Maxence Caqueret|MED|58|78|541.232|2000||174||58||
Manor Solomon|AVA|83|81|788.367.853.516.905.356|1999||170|37|83|38.41|E
Marcus Tavernier|MED|76|76|543.565.160|1999||177||76||
Dodô (1998)|DEF|16|79|235.788.908.356|1998||166||16|41|
Gonzalo Montiel|DEF|4|83|734.787.617|1997||175|45|4|35.39.49.59.60|
Matt O'Riley|MED|43|78|367.543.204.166.553|2000||187|2|76||
James Justin|DEF|76|80|539.518.516|1998||183|1|76||
Konstantinos Mavropanos|DEF|63|83|643.93.620.298.925|1997||193|27|63|15.16.35.39|
Jack Harrison|AVA|76|78|217.609.551.565.516.299.356|1996||175||76|17|E
Perr Schuurs|DEF|124|79|362.32.848|1999||193||124||
Santiago Ascacíbar|MED|4|78|296.298.418.238.150|1997||168||4||
Paulinho (2000)|AVA|16|78|892.524.112.653|2000||177||16|9.56|
Maxim De Cuyper|DEF|20|80|225.224.473.166|2000||182|10|20||
Igor Jesus|AVA|16|78|235.159.617|2001||180|4|16|11.34.39.55|
Pedro (1997)|AVA|16|79|358.356.357|1997||185||16|30|
Andreas Skov Olsen|AVA|43|77|613.154.224.933.717|1999||187||43||D
Sam Beukema|DEF|124|74|387.22.154.601|1998||188||124|21|
Ramon Hendriks|DEF|124|73|354.588.882.907.298|2001||184||124|13|
Orkun Kökçü|MED|152|82|354.140.141|2000||175|50|124|13.18.31|
Morten Hjulmand|MED|43|81|513.812.110|1999||185|27|43|47.7|
Rodrigo Riquelme|AVA|54|78|104.110.160.188.386.142|2000||174||54|51|E
Oumar Solet|DEF|58|74|867.819.541.767.871|2000||192||58||
Marcos Senesi|DEF|4|78|771.354.160.853|1997||184||4|13|
Max Aarons|DEF|76|79|616.160.888.717|2000||200||76||
Facundo Medina|DEF|4|78|182.521.553|1999||184||4||
Sacha Boey|DEF|58|79|854.731.266.371.133|2000||178||58|5|
Lloyd Kelly|DEF|76|79|168.160.610.463|1998||178||76||
Musa Barrow|AVA|148|79|100.154.61|1998||184||148||E
Pedro Neto|AVA|127|84|163.510.934.215|2000||173|33|127|18.25.35.39.45.9|D
Koni De Winter|DEF|20|82|463.460.285.378.7|2002||191|8|20||
Krépin Diatta|MED|135|82|224.587|1999||175|52|135||
Hugo Guillamón|MED|54|81|888.405.813|2000||182|3|54|36|
Wendel|MED|16|75|358.812.947|1997||180||16|7.30.32.47|
Paul Nebel|MED|2|75|548.479|2002||169||2||
Dan Ballard|DEF|79|81|93.831.147.568.828|1999||187|8|76|16|
Taylor Harwood-Bellis|DEF|76|77|551.146.80.825.175.805|2002||188||76|26.53|
Zan Vipotnik|AVA|53|77|593.156.830|2002||185||53||
Federico Gatti|DEF|84|82|366.463|1998||190|8|84|37|
Luis Sinisterra|AVA|33|77|634.354.516.160.242|1999||172||33|13|E
Quilindschy Hartman|DEF|124|78|354.175.291|2001||183|5|124|13|
Trai Hume|DEF|79|75|828|2002||180||79||
Amar Dedić|DEF|21|81|767.318.932.553.140.610|2002||180|26|165|18.31|
Taty Castellanos|AVA|4|79|864.609.386.510.925|1998||178||4|39.48|
Anastasios Douvikas|AVA|63|76|98.912.882.203.232|1999||186||63|43|
Noah Atubolu|GR|2|74|365|2002||190||2||
Fotis Ioannidis|AVA|63|75|522.654.812|2000||187||63|46|
Nuno Tavares|DEF|127|80|140.93.553.617.510|2000||184||127|16.18.30.39.48|
Illan Meslier|GR|58|79|319.516|2000||193||58|17|
Kristjan Asllani|MED|1|80|285.440.848.141|2002||179||1|6|
Nathan Ngoy|DEF|20|78|822.530|2003||183||20||
Nicola Zalewski|MED|126|80|737.440.100|2002||175||84|31.44.48|
Gonçalo Ramos|AVA|127|85|140.647.7|2001||185|31|127|25.30.36.4.45.58.7|
Adam Hlozek|AVA|32|82|806.524.421|2002||185|50|32|5.56|
Gabriel Sara|MED|16|76|834.616.371|1999||177||16||
Emmanuel Emegha|AVA|124|76|807.744.827.293.215|2003||195||124||
Radu Drăgușin|DEF|132|83|460.463.768.764.378.853.356|2002||194|32|132|59|
Daniel Svensson|DEF|142|74|170.613.157|2002||183||142||
Albian Hajdari|DEF|89|72|132.460.320.421|2003||189||143||
Dwight McNeil|AVA|76|80|175.299|1999||183||76||E
Vitinha (2000)|AVA|127|86|163.553.378|2000||172|47|127||
Beto|AVA|70|79|690.871.299.356|1998||194|10|127||
Leif Davis|DEF|76|75|516.160.447|1999||182||76|17|
Charlie Cresswell|DEF|76|75|516.568.854|2002||190||76|17|
Igor Matanovic|AVA|40|81|817.281.479.365|2003||194|12|2||
Toti|DEF|127|73|292.934.391|1999||187||70|18.35.55|
William Osula|AVA|43|78|790.263.610|2003||191||43||
James Hill|DEF|76|71|160.413.146|2002||184||76||
Silas|AVA|129|77|662.298.294.548|1998||189||129||D
Matteo Ruggeri|DEF|84|79|100.764.110.99|2002||187||84|51.59|
Ilaix Moriba|MED|68|79|705.127.888.379.203|2003||185||68||
Kaio Jorge|AVA|16|80|777.463.366.242|2002||182||16|28|
Gabriel Veron|AVA|16|78|653.325.242.777.462.597|2002||176||16|52.9|D
Reinier|MED|16|83|357.721.157.386.366.390.112|2002||185||16|11.30.57|
Yan Couto|DEF|16|80|235.551.386.163.157|2002||168||16||
Wilfried Gnonto|AVA|84|77|338.516|2003||155||84||D
Enzo Le Fée|MED|58|76|319.731.737.828|2000||170||58|44|
Borja Sainz|AVA|54|77|101.66.779.385.616.325|2001||174||54|7|E
Keane Lewis-Potter|MED|76|75|426.164|2001||170||76||
Robin Roefs|GR|124|79|589.828|2003||193||124||
El Bilal Touré|AVA|100|76|820.72.100.298.141|2001||185||39|59|E
António Silva|DEF|127|79|140|2003||187||127|18.31.38.7|
Cher Ndour|MED|84|79|140.647.163.141.356|2004||190|2|84|36.4.7|
Hákon Arnar Haraldsson|MED|82|76|233.530|2003||180||82|41|
Diego Moreira|MED|20|79|140.215.541.293.7|2004||179||20|42|
Samson Baidoo|DEF|165|75|318.767.521|2004||190||165||
Carney Chukwuemeka|MED|165|82|99.215.157|2003||187|6|165|42|
Matthis Abline|AVA|58|73|731.511.15.600|2003||176||58||
Equi Fernández|MED|4|77|150.842.55.524|2002||170||4||
Yuito Suzuki|AVA|86|76|791.293.172.365|2001||175||86||
Konstantinos Koulierakis|DEF|63|76|642.933|2003||188||63||
Tarik Muharemović|DEF|21|77|932.460.781|2003||187|12|53||
Tolu Arokodare|AVA|115|75|231.75.377.934|2000||197||115|55|
Johnny Cardoso|MED|45|78|443.142.110|2001||182||45|42.51|
Luis Henrique|MED|16|76|159.553.440|2001||181||16|12.6|
Carlos Romero|DEF|54|75|905.291|2001||174||54||
Jon Gorrotxategi|MED|54|75|725.188|2002||177||54||
Lesley Ugochukwu|MED|58|79|731.215.805.175|2004||191||58|42|
Ernest Poku|AVA|124|74|22.524|2004||176||2||D
Tyrick Mitchell|DEF|76|78|243|1999||175||76|53|
Natan|DEF|16|78|357.704.601.142|2001||185||16|21|
Rodrigo Muniz|AVA|16|75|235.357.367.565|2001||185||16|38|
Chemsdine Talbi|AVA|102|78|225.224.828|2005||175||20||D
Wilson Odobert|AVA|58|77|862.175.853|2004||182||58|59|E
Kamaldeen Sulemana|AVA|60|76|613.731.805.100|2002||175||60|48|E
Pietro Comuzzo|DEF|84|74|356|2005||185||84||
Luiz Henrique|AVA|16|80|358.142.159.947|2001||182|14|16|11|D
Renato Veiga|DEF|127|80|115.132.215.463.905|2003||190||127|45|
Conrad Harder|AVA|43|75|613.812.705.293|2005||185|1|43|47.7|
Alisson Santos|AVA|16|70|280.621.355.519.812.601|2002||177||16|21|E
Mike Penders|GR|20|79|377.215.293|2005||200||20||
Javi Guerra|MED|54|75|888|2003||187||54||
Maxime Estève|DEF|58|75|578.175|2002||193||58||
Arthur Atta|MED|58|73|323.871|2003||189||58||
Davide Bartesaghi|DEF|84|75|7|2005||193||84|52|
Assan Ouédraogo|MED|2|79|705|2006||191||2||
Paul Wanner|MED|165|81|133.415.648|2005||185||165|5.53|
Neil El Aynaoui|MED|102|79|19.521.737.705|2001||185|22|58||
Roger Fernandes|AVA|127|73|163.46|2005||170||70|52|D
Mamadou Sarr|DEF|135|80|541.708.293.215.725|2005||194|8|58||
Lewis Miley|MED|76|78|610|2006||185||76||
Kerim Alajbegovic|AVA|21|81|767.463.524|2007||178|14|2||E
Tyrique George|AVA|76|77|215.299|2006||181||76||E
Jean-Mattéo Bahoya|AVA|58|75|81.281.516|2005||180||58||E
Chris Rigg|MED|76|74|828|2007||177||76||
Stefanos Tzimas|AVA|63|74|642.620.166|2006||186||63||
Ousmane Diomande|DEF|39|79|566.547.812.617|2003||188|12|39|47.7|
Gustavo Sá|MED|127|72|345|2004||186||127||
Luís Guilherme|AVA|16|76|653.925.812|2006||175||16|35.39.9|D
Diego Gómez|MED|122|79|528.442.166|2003||185|28|122||
Josh Acheampong|DEF|76|80|215|2006||190||76|42|
William Gomes|AVA|16|73|834.325|2006||171||16|7|D
Josh King|MED|76|74|367|2007||187||76|38|
Jon Martín|DEF|54|75|725|2006||187||54||
Charalampos Kostoulas|AVA|63|76|632.166|2007||186||63||
Karim Coulibaly|DEF|2|72|923.293|2007||191||2||
Giovanni Leoni|DEF|84|78|650.768.663.532|2006||196||84|13|
Samir El Mourabet|MED|102|76|293|2005||168||58||
Oskar Pietuszewski|AVA|126|74|454.325|2008||179||126|7|E
Tylel Tati|DEF|58|73|600|2008||190||58||
Christ Inao Oulaï|MED|39|77|746.856|2006||173||39||
Manuel Bento|GR|127|81|140|1948||174|63||7|
Jorge Andrade|DEF|127|83|295.325.262.463|1978||184|51||25.30.31.44.50|
Ricardo Gomes|DEF|16|82|358.140.647|1964||189|45||4.7|
Valdo|MED|16|84|355.395.140.647.599.242.777.811.112.462.833.159|1964||174|45||4.7.20.50|
Nuno Gomes|AVA|127|85|149.140.356.163.146|1976||180|79||7.20.25.28.30.34.37.40.50|
Yacine Brahimi|AVA|5|79|731.223.390.325|1990||175|||7.32.35.39.52|E
Gaitán|AVA|4|81|140.150.110|1988||173|||7.25.28.30.46.49.51.59|E
Levan Kobiashvili|MED|61|82|365.418|1977||183|100|154||
Ivan Klasnic|AVA|40|83|817.923.600.155.548|1980||186|41|2|5.53|
Kevin Kuranyi|AVA|2|83|298.276.421|1982||190|52|16|29|
Diego Benaglio|GR|143|83|391.298.597.933.587|1983||194|61|143|34.5|
Sylvain Distin|DEF|58|81|855.647.610.551.692.299.160|1977||192||58|45|
Phil Neville|DEF|76|87|552.299|1977||180|59|76|10.19.2.20.58|
Thomas Sörensen|GR|43|83|626.893.828.99.825.557|1976||193|101|43||
John O'Shea|DEF|78|89|552.160.744.828.720|1981||192|118|78|10.2.20.58|
Glen Johnson|DEF|76|87|568.925.215.692.532.825|1984||182|54|76|19.2.31.43.44|
Stewart Downing|AVA|76|84|565.828.99.532.925.146|1984||180|35|76|19|E
Peter Crouch|AVA|76|86|853.698.692.99.616.805.532.825.175|1981||201|42|76|19.43|
Maxwell|DEF|16|83|242.32.285.647|1981||176|10|16|11.4.50|
Steven Pienaar|MED|164|84|32.157.299.853.828|1982||170|61|164|45|
Jérôme Rothen|MED|58|81|759.862.587.647.717.82.746|1978||177|13|58|24|
Daniele Bonera|DEF|84|85|165.663.7.905|1981||183|16|84|11.58.6|
Matteo Brighi|MED|84|81|463.154.663.165.218.737.100.848.781.673.285|1981||178|4|84|11.36.44.6|
Alberto Aquilani|MED|84|86|737.859.532.463.7.356.812.674.781.507|1984||186|38|84|19.30.43|
Mohamed Sissoko|MED|100|84|15.888.532.463.647.356.523.721.755|1985||191|34|58|11.3.4.43.44.59|
Fabricio Coloccini|DEF|4|86|150.7.771.66.110.905.262.610.69|1982||183|39|4|11.17.58.6|
Gaetano D'Agostino|MED|84|80|737.128.871.356.794.674.139|1982||183|5|84|19.6|
Angelo Palombo|MED|84|82|356.768.440|1981||177|22|84|37|
Jonas Hofmann|MED|2|82|421.157.548.158.524|1992||176|23|2|27.29.33.5.53.56|
Juanfran|DEF|54|80|523.888.203.141.32.779|1976||183|11|54|23.44.8|
Fernando Navarro|DEF|54|86|127.67.549.787.262|1982||178|2|54|22.3.54.58.59.8|
Cani|MED|54|78|258.779.905.110.262|1981||178||54|51|
Bosingwa|DEF|127|86|149.363.325.215.698.856|1982||183|27|161|11.12.2.20.25.28.31.40.50.58.7|
Craig Gordon|GR|51|80|413.828.204|1982||193||51||
Alessio Cragno|GR|84|77|165.196.139.580.781.768|1994||184||84||
Darren Bent|AVA|76|83|447.213.853.828.99.367.166.263.177|1984||180|13|76|19|
Phil Jagielka|DEF|76|84|790.299.263.825|1982||180|40|76|19.38.45|
Andy Johnson|AVA|76|81|145.243.299.367.698|1981||170|8|76|19|
Artur Boruc|GR|126|83|517.204.356.805.160|1980||193|65|126|42|
Rodrigo Taddei|AVA|16|80|653.794.737.673|1980||177||16|36.44|D
Romaric|MED|39|80|20.512.787.291.779.746.633|1983||187||39|42|
Juanfran Torres|DEF|54|88|721.291.638.110.834|1985||180|22|54|23.3.51.59.8|
Alessandro Gamberini|DEF|84|81|154.416.356.601.378.218|1981||185|8|84|43|
Kasper Schmeichel|GR|43|87|551.178.344.197.236.516.518.612.80.204|1986||189|120|43|2.44|
Simone Pepe|AVA|84|85|737.652.679.196.871.463.218.674|1983||178|23|84|19.21.6|D
Papu Gómez|AVA|4|80|95.771.201.561.100.787.580|1988||165||4|35.51.59|E
Andrés Guardado|MED|111|84|109.262.888.524.648.142.527|1986||172|180|111|39|
Rolando Bianchi|AVA|84|79|100.196.729.551.510.848.154.549.673|1983||188||84||
Christian Maggio|DEF|84|84|356.858.768.601.139.513|1982||184|34|84|43.48|
Valon Behrami|MED|143|85|320.378.416.510.925.356.601.408.921.871.329.165|1985||184|83|88|43|
Federico Marchetti|GR|84|83|848.696.241.858.196.510.378.810|1983||188|11|84||
Gabi|MED|54|83|104.110.379.779.59|1983||180||54|3.51.59|
Brede Hangeland|DEF|116|82|901.233.367.243|1981||199|91|45||
Lukasz Piszczek|DEF|126|84|418.944.157|1985||184|66|126|33.5.53|
Dmytro Chygrynskyi|DEF|153|82|788.564.127.269.12.445|1986||189|29|154|26.3.59|
Juan Arango|MED|159|82|577.649.697.549.158.226|1980||180|129|159||
Mathieu Bodmer|MED|58|79|759.530.541.647.763.612.398.75|1982||190||58|11.4|
Mathieu Debuchy|DEF|58|85|530.610.93.156.763.885|1985||176|27|58|15.24.4|
Stéphane Mbia|MED|24|83|731.553.698.787.856.854.755.190.502|1986||190|68|24|24.4.59|
Sven Bender|MED|2|82|1.157.524|1989||186|7|2|29.33.5.53|
Naldo (1982)|DEF|16|80|462.923.933.587|1982||196|4|16|34|
Micah Richards|DEF|76|83|551.356.99|1988||180|13|76|19.2.37|
Kevin Mirallas|MED|20|84|530.763.632.299.356.744.374.582|1987||182|60|20|38.45|
Eduardo (1982)|GR|127|86|163.136.909.378.140.131.277.215.907|1982||187|36|127|8.20.21.25.28.30.40.48|
Daniel Osvaldo|AVA|84|83|427.100.513.356.154.291.737.805.463.440.325.150.125|1986||183|14|4|21.35.36.37.42.6|
Rodrigo Palacio|AVA|4|85|125.150.378.440.154.165|1982||175|27|4|37|
Bryan Ruiz|MED|38|84|465.334.367.648.812.777|1985||188|147|38|28.30|
Milan Badelj|MED|40|83|277.592.408.356.510.378|1989||186|55|88||
Alessandro Matri|AVA|84|85|7.694.196.463.356.378.510.781.165|1984||183|7|84|11.21.58.6|
Mathieu Valbuena|MED|58|84|553.276.541.351.632.87.474.965|1984||167|52|58|24.4|
Lucas Leiva|MED|16|85|395.532.510|1987||179|24|16|33.43.48.50|
Yann Sommer|GR|143|86|132.391.158.133.440.224|1988||183|94|143|5.53.6|
Ömer Toprak|DEF|152|82|365.524.157.923.84|1989||186|27|2||
Andrea Ranocchia|DEF|84|83|378.128.440.768.426.580|1988||195|21|84|21.37.38.43.44.48.6|
Giovani dos Santos|AVA|111|86|127.853.447.371.709.549.905.499.77|1989||174|106|111||
Bojan Krkic|AVA|54|87|127.737.7.32.825.548.66.579.906|1990||170||54|26.3.36.58|
James McCarthy|MED|78|83|409.929.299.243.204|1990||180|43|51|38.45|
Mateo Musacchio|DEF|4|80|734.905.7.510|1990||182|2|4|51|
Domagoj Vida|DEF|40|84|594.524.277.275.141.12|1989||184|105|88||
Lukas Hradecky|GR|57|83|289.172.281.524.587|1989||187|103|22|5.56|
Andy Carroll|AVA|76|84|610.695.532.925.720.924.75.156|1989||193|9|76|19|
Lars Stindl|MED|2|82|479.158|1988||180|11|2|29|
Simon Kjær|DEF|43|87|566.652.933.737.530.351.787.100.7|1989||190|132|43|35.36.55.6|
Fedor Smolov|AVA|134|82|276.354.85.880.494.535.203|1990||187|45|154|19|
Anthony Modeste|AVA|58|78|612.81.156.146.746.421.231.763.157|1988||185||58||
Adil Rami|DEF|58|86|530.888.7.787.553.351.342.149.862|1985||190|36|58|24.28.4.59.60|
Fernando (1987)|MED|16|81|903.325.295.551.371.787.443|1987||183||16|7.12.26.28.35.41.55.59|
Iker Muniain|AVA|54|81|101.144.771|1992||170|2|54|17.23.35.36|E
Lima|AVA|16|77|910.659.777.120.163.140|1983||178||16|7.30.32.34|
Martín Cáceres|DEF|157|90|905.127.463.787.805.416.510.356.196.523.499.528|1987||178|116|157|21.26.3.48.58.6|
Diego Perotti|AVA|4|81|787.150.378.737.351.764|1988||179|2|4|41.44.59|E
Bas Dost|AVA|124|82|310.417.414.933.812.281.224.882.589|1989||196|18|124|30.32|
Sebastian Rudy|MED|2|83|298.421.133|1990||180|29|2|11.29.5|
Kyriakos Papadopoulos|DEF|63|82|632.524.705.408.592.42.113.644.522|1992||186|35|63|25|
Lucas Barrios|AVA|122|83|842.109.227.157.809.578.653.395.427.382.254|1984||189|36|4|33.5|
Aleksandar Dragovic|DEF|165|83|117.132.275.524.518.294|1991||186|80|165|56|
Iago Falque|AVA|54|83|127.463.128.853.805.72.719.378.737.848.139.183|1990||174|1|54|12.3.44.58|D
Nacer Chadli|AVA|20|84|334.853.924.587.80.131.473|1989||187|67|20|12.34.42.45|E
Anthony Lopes|GR|127|82|541.600.81|1990||184|14|58|25.8|
Gary Medel|MED|29|86|150.787.197.440.141.154.892|1987||171|161|29|17.37|
Karim Bellarabi|AVA|2|79|278.524|1990||183||2|27.29.56|D
Yuri Berchiche|DEF|54|80|725.101.853.216.886.887.753.647|1990||181||54|4|
Tomáš Vaclík|GR|32|82|806.132.787.632.425.607.67.149|1989||188|54|22|35.59|
Pizzi|MED|127|80|163.748.668.110.262.140.291.131.17.292|1989||172||127|18.25.30.31.34.38.40.45.46.51.59.7|
Ganso|MED|16|81|777.834.787.75.358|1989||184|8|16|11.50|
Martín Montoya|DEF|54|85|127.440.142.888.166.90|1991||174|5|54|22.26.3.36.37.58|
Keirrison|AVA|16|81|235.653.140.127.356.777.242.537.92|1988||184||16|26.3.30.58.7|
Adem Ljajic|MED|145|81|665.356.737.440.848.141.478.619|1991||182||88|21.37|
Marcel Halstenberg|DEF|2|78|817.705|1991||186||2||
Jonjo Shelvey|MED|76|83|213.532.147.830.610.617.180.301.175|1992||184|6|76|39.43|
Rafael Tolói|DEF|84|81|389.834.737.100|1990||185||16|48.59.8|
Mario Gaspar|DEF|54|80|905.921.283|1990||178|3|54|23.59|
Danny Drinkwater|MED|76|84|552.425.197.921.129.518.215.146.175.99.484.720|1990||177|3|76|10.2.21.44.48.53|
Sandro|MED|16|81|443.853.698.924.84.139.378.871.120|1989||188|18|16|12|
Franco Vázquez|MED|4|80|138.652.719.787.663.238|1989||187||4|21.35.37.59|
Yuto Nagatomo|DEF|86|88|333.209.440.371.553|1986||170|145|86|12.37.44|
Josip Ilicic|MED|53|81|593.652.356.100|1988||190||88||
Diego Demme|MED|2|80|91.750.705.601.418|1991||170||2|21.27.29.6|
Christoph Kramer|MED|2|83|524.898.158|1991||189|12|2|29.60|
Nathaniel Clyne|DEF|76|85|243.805.532.160|1991||175|14|76|33.42|
Martin Hinteregger|DEF|165|81|767.158.115.281|1992||184||165|59|
Stefan Lainer|DEF|165|79|767.318.761.158|1992||176||165||
Mattia Destro|AVA|84|83|440.378.794.737.7.154.285|1991||182|8|84|31.58.6|
Aleksandr Kokorin|AVA|134|83|276.85.947.342.809.356|1991||184|48|154|12.19.37|
Charles Aránguiz|MED|29|83|227.864.871.443.524|1989||172|103|29|17.56|
Alfred Finnbogason|AVA|82|83|469.414.725.632.115.540.466|1989||184|73|82|38|
Portu|AVA|54|73|888.67.386.725.379|1992||167||54|39|D
Wahbi Khazri|AVA|151|82|746.156.828.731.763.578|1991||176|74|58||E
Michail Antonio|AVA|85|79|720.216.805.789.617.925|1990||180||76|35.39|
Mattia Perin|GR|84|83|378.650.674.463.652|1992||188|2|84|21.48.6|
Andrea Conti|DEF|84|76|100.673.7.663.768|1994||184||84|48.6|
Philipp Max|DEF|2|80|479.115.648.281.654.372|1993||178|3|2|43.46|
Neto|GR|16|84|102.356.463.888.127.160.93.159|1989||190|1|16|6.16|
Roberto Pereyra|MED|4|82|734.871.463.921.12|1991||182||4|38.48.49.51.6|
Manolo Gabbiadini|AVA|84|80|100.222.463.154.768.601.805|1991||181||84|11.21.37.43.44.48|
Sérgio Oliveira|MED|127|79|325.136.471.669.668.600.642.737.371.632|1992||181||127|28.31.32.34.35.39.41.52.7|
Maximilian Arnold|MED|2|80|933|1994||184|3|2|29|
Héctor Herrera|MED|111|84|649.325.110.423.845|1990||180|105|111|3.32.35.39.41.51.52.7|
Juan Fernando Quintero|MED|33|83|286.106.674.325.731.436.734.459.710.183|1993||169|53|33|20.32.35.39.41.52|
Tom Cairney|MED|51|78|426.146.367|1991||183||76|38.44|
Ismaily|DEF|16|75|292.629.163.788.530|1990||177||16|32.41.52|
Nikola Maksimović|DEF|145|77|294.87.848.601.809.378.411.578|1991||193||88|11.48|
John Brooks|DEF|45|82|418.933.140.421|1993||193|45|2|7|
Jérôme Roussillon|DEF|64|74|330.578.933.874.213.75|1993||175||58||
Nathan Redmond|AVA|76|79|145.177.616.805.141.175.789|1994||173|1|76||D
João Pedro (1992)|AVA|84|78|112.652.908.677.777.292.196.351.395.426.772|1992||184|1|16|30.37.38.46|
Steven Berghuis|AVA|124|79|334.884.22.921.354.32|1991||180||124|38.54|D
Giannelli Imbula|MED|129|78|398.553.325.825.854.719.513.342.690.449|1992||186||20|17.32.35|
Francesco Acerbi|DEF|84|85|859.810.729.378.218.7.781.510.440|1988||192|34|84|21.37.48.6.8|
Jeison Murillo|DEF|33|80|871.726.245.390.507.440.888.127.203.768|1992||182||33|20.21.3.37.44|
Danny Ings|AVA|76|83|160.175.532.805.99.925.790|1992||178||76|33.35.53|
Jesé|AVA|0|85|721.647.507.825.142.812.82.768.235|1993||178|||11.3.31.4.43.53.57.58|E
André Carrillo|MED|125|83|812.140.921.45.55.234|1991||180|103|125|18.28.30.34.38.46.7|
Fabian Schär|DEF|143|84|132.421.262.610|1991||186|86|143|43|
Manuel Lanzini|MED|4|81|734.358.47.925.917|1993||170|5|4|49|
Willy Boly|DEF|39|77|15.163.325.934.617|1991||195||58|18.32.39.41.52.9|
Maximilian Philipp|AVA|2|80|365.157.276.933.923|1994||184||2||
Lazar Markovic|AVA|145|79|665.140.532.351.812.426.80.367.374.856|1994||176||160|30.31.38.55.7|D
Wataru Endo|MED|86|87|792.881.797.298.532|1993||178|73|86|13.2.33|
Gabriel Paulista|DEF|16|81|280.905.93.888.110.141.234|1990||187||16|15.51|
João Mário|MED|127|85|812.909.440.925.535.140.141.12|1993||173|56|127|21.25.28.30.34.38.45.47.7.8|
Robert Andrich|MED|2|82|418.274.415.874.524|1994||187|19|2|5.56|
Niklas Stark|DEF|2|79|620.418.923|1995||189|2|2|29|
Denis Suárez|MED|54|84|551.127.787.905.93.203.291.66|1994||181|1|54|2.3.36.37.59|
Mario Lemina|MED|59|83|319.553.463.805.371.367.612.934|1993||184|42|59|17.35.55.6|
Fernando Pacheco|GR|54|82|721.66.72.291.41|1992||187||54|11.3.31|
Davide Zappacosta|MED|84|85|118.100.848.215.737.378|1992||182|14|84|21.37.41.48.59|
Bernard|AVA|16|82|112.788.299.654|1992||164|14|16|11.38.41.50|E
Jonny Otto|DEF|54|81|203.110.934.642.66|1994||175|5|54|18.35.36.39.51|
Davie Selke|AVA|2|78|923.705.418.231.408.131|1995||192||2||
Gaëtan Laborde|AVA|58|74|156.727.818.223.578.731.612|1994||181||58||
Wylan Cyprien|MED|58|76|521.612.663.600|1995||181||64||
Jamaal Lascelles|DEF|76|80|617.823.610.518|1993||188||76|43|
Patrick Bamford|AVA|76|82|617.543.215.263.565.243.616.175.516|1993||185||76|17.21.43.53|
Guido Carrillo|AVA|4|77|296.587.805.186.283|1991||187||4|34.4|
Alfred Duncan|MED|60|79|18.440.768.781.356.196.895|1993||178||60||
Jhon Córdoba|AVA|33|78|286.701.291.390.548.231.418.494|1993||188||33||
Valentino Lazaro|MED|165|83|767.318.418.440.610.158.140.848|1996||180|36|165|21.30|
Mohamed Elyounoussi|AVA|116|77|576.132.805.204.233|1994||178||102||
Manu Trigueros|MED|54|82|905.390|1991||178||54|59|
Sheraldo Becker|AVA|141|79|32.645.10.874.725.638.548|1995||180|7|124||E
Mahmoud Dahoud|MED|146|81|158.157.166.298.281|1996||176|2|146|27.29|
Nick Pope|GR|76|82|213.178.175.610|1992||199|10|76|53|
Álex Moreno|DEF|54|78|127.549.719.283.142.99.617.386|1993||179||54|26.39|
Lucas Alario|AVA|4|74|228.734.524.281.443.296|1992||186||4||
Samu Castillejo|AVA|54|81|105.185.586.905.7.888.781|1995||182||54|6|D
Luca Waldschmidt|AVA|2|80|281.408.365.140.933.231|1996||177||2|30|
Roberto Gagliardini|MED|84|76|100.209.810.440.580.416|1994||188||84|21.6|
Andrea Petagna|AVA|84|80|7.768.508.97.100.760.601.580.196|1995||188||84|44.48|
Marco Benassi|MED|84|79|440.18.848.356.285.238|1994||184||84||
Benjamin Henrichs|DEF|2|82|524.587.705|1997||183|19|2|27.29.34|
Andreas Pereira|MED|16|84|552.390.888.510.357.367.653|1996||177|10|20|11.31.38.54.9|
Dominik Livakovic|GR|40|83|277.351.386.127|1995||186|83|40|31|
Marko Pjaca|AVA|40|85|592.277.463.356.80.378.848.285.404.334|1995||185|24|40|48.6|E
Will Hughes|MED|76|77|263.921.243|1995||185||76|38|
Sergio Rico|GR|54|82|787.367.647.549.43|1993||194|1|54|35.36.4.42.44.53.59|
Alberto Moreno|DEF|54|86|787.532.905.232.549|1992||172|4|54|23.33.35.58.59|
Solly March|AVA|76|74|166|1994||180||76||D
Luciano Vietto|AVA|4|80|710.905.110.787.888.367.812.45.60.55.771|1993||173||4|44.47.51.7|
Matheus Uribe|MED|33|76|286.259.106.77.325.59|1991||182||33|20.52.7|
Óliver Torres|MED|54|80|104.110.905.325.787.577|1994||178||54|3.35.39.51.52.59.7|
Calum Chambers|DEF|76|82|805.93.565.367.99.197|1995||182||76|15.16.42.44.53|
Erick Pulgar|MED|29|73|154.356.371.357|1994||186||29||
Neal Maupay|AVA|58|78|612.763.818.164.166.299.553.787|1996||173||58||
Douglas Santos|DEF|16|80|621.871.390.112.408.947|1994||173|6|16|11|
Abdul Rahman Baba|DEF|60|83|394.115.215.820.549.642.720|1994||179||60|21.31.42.48.53|
Gonçalo Guedes|AVA|127|83|140.647.888.934.905.725|1996||178|32|127|18.25.30.35.4.46.55.7|E
Karol Linetty|MED|126|80|514.768.848.490|1995||176||126|25.44|
David Soria|GR|54|79|787.379|1993||192||54|59|
Harrison Reed|MED|76|78|805.616.146.367|1995||166||76|38.42|
Gerónimo Rulli|GR|4|83|296.725.551.578.905.32.553|1992||189|8|4|49.59.60|
Aritz Elustondo|DEF|54|78|725.642|1994||182||54||
Diego Laxalt|DEF|157|84|255.440.154.285.378.7.848.204.276.677|1993||178|24|157|37.48|
Nélson Semedo|DEF|127|86|140.127.934.351|1993||177|44|127|18.25.3.31.35.39.45.46.55.7|
Sofiane Boufal|MED|102|82|81.530.805.203.57.875.511.46|1993||175|46|58|34|
Maxwel Cornet|AVA|39|81|323.541.175.925.805.378|1996||179|31|39|35.39|E
Ihlas Bebou|AVA|149|76|302.421|1994||183||149||
Juan Musso|GR|4|82|710.871.100.110|1994||191|2|4|49.51.59|
Pierluigi Gollini|GR|84|80|416.99.100.853.356.601.378.737|1995||194||84|21.39.44.6|
Salih Özcan|MED|152|80|231.422.157.933.141|1998||180||2||
Saša Lukić|MED|145|81|665.848.523.367.447|1996||183|66|160|38|
Lewis Cook|MED|76|79|516.160|1997||175|1|76||
Guillermo Maripán|DEF|29|77|66.587.848|1994||193||29|34|
Adam Armstrong|AVA|76|78|610.236.129.155.146.805.924.934|1997||172||76||
Matt Targett|DEF|76|80|805.367.99.610.565.426|1995||183||76||
Sergi Canós|AVA|54|81|127.532.164.616.632.888|1997||177||54|26.3.33.58|E
Aarón Martín|DEF|54|77|291.548.203.378.709|1997||180||54||
Jesús Vallejo|DEF|54|87|779.721.281.934.390.67|1997||183||54|11.3.35.39.43.57.58|
Rob Holding|DEF|76|82|155.178.93.243.790.229|1995||189||76|15.16|
Aleksey Miranchuk|MED|134|81|535.100.848.108|1995||182||134|48.59|
Vedat Muriqi|AVA|89|82|385.376.180.351.510.549|1994||194|68|160|48|
Vanja Milinković-Savić|GR|145|79|911.552.515.848.760.97.822.601|1997||202||54|21.54|
Tosin Adarabioyo|DEF|76|81|551.924.146.367.215.853|1997||196||76|26.38|
Ricardo Horta|AVA|127|77|909.586.163|1994||173||127|25.32.45.47.9|E
Attila Szalai|DEF|73|79|87.351.421.365.822.484.685|1998||192||73|30.55|
Benjamin Bourigeaud|MED|58|75|521.731.39.964|1994||177||58||
Hans Hateboer|DEF|124|78|312.100.731.541|1994||185||124|41.59|
Ryan Kent|AVA|76|79|532.236.129.365.168.717.351.784|1996||172||76|13.33|E
Maximilian Mittelstädt|DEF|2|81|418.298|1997||178|16|2||
Ainsley Maitland-Niles|DEF|76|83|93.447.924.737.805.541.299|1997||180|5|76|15.16.31.41|
Ellyes Skhiri|MED|151|83|578.231.281|1995||185|86|58||
Maxime Lopez|MED|58|78|553.781.356.662|1997||167||58|12|
Moussa Niakhaté|DEF|135|77|885.323.548.617.541|1996||190||58|39.41|
Wout Faes|DEF|20|79|80.414.300.472.820.518.587|1998||187||20||
Jacob Bruun Larsen|AVA|43|80|157.298.421.80.175|1998||183||43||E
Josh Brownhill|MED|76|77|695.129.168.175.60|1995||180||76||
Ferro|DEF|127|75|140.888.405.907.295.292|1997||191||127|18.30.7|
Răzvan Marin|MED|132|82|335.822.32.196.285.12|1996||177|75|132|44|
David García|DEF|54|77|638.181.57|1994||186|3|54||
Borja Mayoral|AVA|54|86|721.933.523.737.379|1997||181||54|11.31.35.41.43.57.58|
Michele Di Gregorio|GR|84|79|440.618.118.580.463.160|1997||187||84|21|
Tom Davies|MED|76|80|299.790|1998||180||76|11.38.43|
Lukas Nmecha|AVA|2|78|695.551.933.565.80.516|1998||185||2|2|
Javairô Dilrosun|AVA|124|77|418.156.354.77|1998||175||124|13|D
Andrea Pinamonti|AVA|84|79|440.366.378.285.781.510|1999||185||84|21.6|
Jakub Jankto|MED|32|79|871.97.768.379.806.196|1996||184||32|44|
Matteo Gabbia|DEF|84|63|7.905|1999||189||84|41.52.6|
Panagiotis Retsos|DEF|63|78|632.524.790.763.416|1998||186||164|38.40|
Pepelu|MED|54|71|523.103.430.847.908.888|1998||185||54||
Kristoffer Ajer|DEF|116|79|432.204.489.164|1998||198||116||
Robin Koch|DEF|2|82|0.365.516.281|1996||190|15|2|17.27.29|
Óscar Mingueza|DEF|54|82|127.203.243|1999||184|4|54|36.43|
Todd Cantwell|MED|76|77|362.616.160.717|1998||177||76||
Roland Sallai|DEF|73|82|652.17.365.371|1997||183|64|73||
Valentin Rongier|MED|58|77|600.553.731|1994||172||58|12.44.52|
François Kamano|AVA|68|75|746.156.535.251.342|1996||182||68||E
Umar Sadiq|AVA|115|82|810.737.154.848.588.717.673.665.72.725.888|1997||192|7|115|41|
Unai Núñez|DEF|54|79|101.184.144.203.416.888.291|1997||186|1|54|36.43|
Zinho Vanheusden|DEF|20|77|440.822.378.22.471|1999||187||20||
Gorka Guruzeta|AVA|54|78|101.144.184.787.725.905|1996||188||54||
Reiss Nelson|AVA|76|82|93.421.354.367.164|1999||175||76|13.15.16.38|E
Franco Cervi|AVA|4|79|738.140.203|1994||167||4|18.30.43.46.7|E
Mattias Svanberg|MED|142|79|550.154.933|1999||185||142||
Odsonne Édouard|AVA|58|78|647.854.204.243.518.521|1998||187||67||
Malang Sarr|DEF|58|78|612.215.325.587.521|1999||182||58|52.53|
Simon Banza|AVA|129|76|521.345.163.856.47|1996||189||58||
Habib Diallo|AVA|135|76|400.323.818.293.60.251|1995||185||135||
Jamal Lewis|DEF|79|80|616.610.921.834.695|1998||178|39|76||
Romano Schmid|MED|165|82|827.318.767.923.932.366|2000||168|42|165||
Mason Holgate|DEF|85|81|129.299.924.805.790.43|1996||184|7|76|11.38.43.45|
Loren Morón|AVA|54|74|143.142.291.507.90|1993||188||54||
Alfonso Pedraza|DEF|54|73|905.187.516.66.142.510|1996||182||54|59|
Alban Lafont|GR|39|80|854.356.600.654|1999||193||18|43|
Diogo Leite|DEF|127|77|325.163.874|1999||190||127|52.7|
Eldor Shomurodov|AVA|158|76|741.378.737.810.196.131|1995||190||158|31.44|
Gabriel Gudmundsson|DEF|142|75|406.312.530.516|1999||180||142|41|
Jordan Teze|DEF|124|78|648.645.587|1999||176|4|124||
Jesper Karlsson|AVA|142|74|284.22.154.513.26.882|1998||171||142|13|E
Joël Piroe|AVA|141|76|807.648.830.516|1999||185||124||
André Almeida (2000)|MED|127|74|908.888|2000||176||127||
Anel Ahmedhodzic|DEF|21|77|550.420.156.790.354|1999||195||142||
Moatasem Al-Musrati|MED|95|74|46.908.732.163.141.587.416|1996||189||95|25.39.52|
Igor Julio|DEF|16|76|318.767.932.117.760.356.166.925|1998||184||16|39|
Nicolò Casale|DEF|84|73|416.673.694.895.285.510.154|1998||191||84|48|
Arthur Cabral|AVA|16|78|202.653.132.356.140.159|1998||186||16|18.50|
Tommaso Pobega|MED|84|79|7.841.810.848.154|1999||188||84||
Andrea Colpani|MED|84|76|100.857.580.356|1999||184||84||
Emmanuel Latte Lath|AVA|39|74|674.100.760.331.565.108|1999||177||39||
Josh Sargent|AVA|45|78|923.616.849|2000||185||45|42|
Yunus Akgün|AVA|152|77|371.29.518|2000||173||152||D
Dennis Man|AVA|132|81|870.339.663.648|1998||183|43|132||D
Mads Hermansen|GR|43|76|172.518.925|2000||187||43|39|
Dara O'Shea|DEF|78|76|924.175.447|1999||189||78||
Oliver Skipp|MED|76|80|853.616.518|2000||175||76|21.31.39.42|
Jakub Kamiński|AVA|126|77|514.933.231|2002||179||126||E
Calvin Stengs|MED|124|77|22.612.744.354.681|1998||187||124|13|
Pascal Struijk|DEF|124|77|516.166|1999||190||20|17|
Myron Boadu|AVA|124|77|22.587.334.898.648|2001||183||124|13|
Wouter Burger|MED|124|75|354.300.807.132.825.421|2001||190||124||
Caio Henrique|DEF|16|80|110.104.659.358.395.587.32|1997||178|5|16|11.51|
Victor Nelsson|DEF|43|78|613.233.371.737.416|1998||185||43|44|
Fran Beltrán|MED|54|78|719.203.386|1999||170||54|43|
Nathan Patterson|DEF|51|79|717.299|2001||183||51||
Ben Brereton Díaz|AVA|29|78|617.146.905.790.805.263|1999||190||76||
Roberto Piccoli|AVA|84|77|100.810.378.416.285.513.196.356|2001||187||84||
Zion Suzuki|GR|86|81|881.797.663.99|2002||190|28|45||
Diant Ramaj|GR|2|78|415.281.32.157.233|2001||189||2||
Jean-Ricner Bellegarde|MED|71|77|521.293.934|1998||172||58|55|
David Affengruber|DEF|165|77|318.767.827.283.367|2001||185|1|165||
Luiz Felipe|DEF|84|79|450.510.764.142.46.553.719|1997||187|1|16|48|
Nicolò Cambiaghi|AVA|84|73|728.100.285.154|2000||177||84||E
Cucho Hernández|AVA|33|79|671.921.183.754.549.379.230.142|1999||175||33|38.44|
Gustav Isaksen|AVA|43|77|566.510|2001||181||43|48|D
Yann Gboho|AVA|58|74|731.907.207.854|2001||173||39||E
Marcin Bulka|GR|126|79|647.307.502.612.590|1999||199|5|126|4.42.53|
Sergi Altimira|MED|54|75|379.142|2001||188||54||
Rocco Reitz|MED|2|75|158.797.705|2002||176||2||
Armel Bella-Kotchap|DEF|2|79|898.805.648.416|2001||190||58|27|
Ivan Ilić|MED|145|80|588.416.848|2001||185||160||
Manuel Ugarte|MED|157|83|345.812.647.552|2001||182|22|157|17.36.4.47|
Finn Azaz|MED|78|72|216.684.565.805|2000||170||76||
Kévin Denkey|AVA|149|75|622.207.221|2000||181||149||
Logan Costa|DEF|23|78|820.512.854.905|2001||190||58||
Francisco Conceição|AVA|127|84|325.32.463|2002||166|23|127|45.52.7|D
Enock Mwepu|MED|163|77|166|1998||184||163||
Wilson Isidor|AVA|71|79|587.819.535.947.828|2000||186||58|34|
Lucas Da Cunha|MED|58|75|731.612.509.223.232|2001||174||58||
Nicolás Domínguez|MED|4|75|917.154.617|1998||179||4|39.55|
David Carmo|DEF|3|76|163.325.632.617.723|1999||196||127|47.52|
Pavel Sulc|MED|32|79|902.179.453.541|2000||177|27|32|41|
Luka Sucic|MED|40|77|318.767.725|2002||185||165||
Mohamed Ihattaren|MED|102|77|648.463.768.32.769.802.707.362|2002||177||124||
Morten Frendrup|MED|43|75|172.378|2001||175||43||
Eduardo Quaresma|DEF|127|75|812.847.421|2002||185||127|47.7|
Tariq Lamptey|DEF|60|79|215.166.356|2000||163||76||
Stephen Eustaquio|MED|25|76|851.520.214.185.668.325.500|1996||178|56|25|52.7|
Pedrinho|AVA|16|77|234.140.788.112|1998||172||16|30.50|D
Carlos Vinícius|AVA|16|79|86.724.601.732.587.140.853.648.367.371.395|1995||190||16|18.30.31.34.38|
Andrei Rațiu|DEF|132|80|905.888.10.754.719|1998||183|34|132||
Lazar Samardžić|MED|145|77|418.705.871.100|2002||184||2|48|
Patrick Wimmer|AVA|165|81|117.91.933.421|2001||182|36|165||D
Cameron Archer|AVA|76|77|99.695.565.790.805.15|2001||175||76||
Anatoliy Trubin|GR|153|81|788.140|2001||199|26|153|18.31.38|
Thijs Dallinga|AVA|124|75|310.312.300.854.154|2000||190||124||
Enzo Boyomo|DEF|24|74|67.886.638|2001||184||58||
Franjo Ivanović|AVA|40|75|404.875.140|2003||185||165|18.31.38|
Kiliann Sildillia|DEF|58|76|365.648|2002||186||58||
Matheus Henrique|MED|16|75|833.395.781.242|1997||175||16|34|
Arsen Zakharyan|MED|134|78|276.725|2003||182||134||
Fábio Carvalho|MED|127|81|367.532.705.426.164|2002||170||127|13.33.38|
Edoardo Bove|MED|84|76|737.356.921|2002||181||84|31|
Mohammed Salisu|DEF|60|81|887.379.886.805.587|1999||191|22|60||
Arne Engels|MED|20|75|225.115.204|2003||185||20||
Chrislain Matsima|DEF|58|77|587.319.223.115|2002||190||58||
Sofiane Diop|AVA|102|77|587.330.612|2000||176||58|34|E
Leonardo Balerdi|DEF|4|80|150.157.553.737|1999||187|13|4|12.49|
Sebastian Nanasi|AVA|142|71|550.475.293|2002||178||142||E
Armand Laurienté|AVA|58|74|868.731.319.781|1998||171||58||E
Filip Jørgensen|GR|43|80|905.215|2002||190||142||
Gavin Bazunu|GR|78|78|692.805.822.825|2002||188||78||
Ryan Flamingo|DEF|124|75|71.781.907.882.648|2002||186||124||
Jhon Arias|AVA|33|80|534.183.437.358.934.653|1997||168|43|33|55|D
Jayden Oosterwolde|DEF|124|75|334.663.351|2001||189||124|30.31|
Aitor Paredes|DEF|54|78|101.184.144|2000||186|1|54||
Azzedine Ounahi|MED|102|82|81.553.654.386|2000||182|55|102|46|
Leopold Querfeld|DEF|165|78|718.874|2003||190||165||
Matheus Nunes|MED|127|82|292.812.934.551|1998||183|11|16|18.2.25.26.35.45.47.7|
Hannibal|MED|151|82|552.145.787.175|2003||177||58|47|
Jonas Urbig|GR|2|77|231.451.394.133|2003||189||2|5|
Merlin Röhl|MED|2|72|315.365.299|2002||192||2||
Unai Vencedor|MED|54|77|101.144.753.709.523.174|2000||176||54||
Ander Barrenetxea|AVA|54|78|725.127.291.66|2001||178||54|3|E
Beñat Prados|MED|54|76|101.144.184.188|2001||179||54||
Lucas Beltrán|AVA|4|78|734.228.356.888|2001||176||4||
Lukas Hornicek|GR|32|77|660.163.610|2002||197|1|32||
Beñat Turrientes|MED|54|78|725|2002||181||54||
Lamare Bogarde|MED|124|78|169.99|2004||183||124|59|
Alexsandro|DEF|16|74|214.530|1999||192||16|41|
Lucas Stassin|AVA|20|71|80.473.763|2004||183||20||
Orri Óskarsson|AVA|82|78|233.835.725|2004||186|8|82||
Diego Coppola|DEF|84|76|416.166.662|2003||192||84||
Jaden Philogene|AVA|76|77|99.825.197.426.447|2002||181||76||E
Dário Essugo|MED|127|78|812.214.507.215.293|2005||178||127|47.7|
Youssouf Ndayishimiye|DEF|19|75|938.131.612|1998||187||19||
Antoni Milambo|MED|124|76|354.164|2005||179||124|13|
Emmanuel Agbadou|DEF|39|70|466.820.934.141|1997||192||39|55|
Jaidon Anthony|AVA|76|74|160.516.175|1999||183||76||E
Nnamdi Collins|DEF|2|76|281|2004||191||2||
Isaac Romero|AVA|54|75|787|2000||183||54||
Salis Abdul Samed|MED|60|77|223.521.828.612|2000||179||60||
Jacob Greaves|DEF|76|74|216.426.447|2000||193||76||
Jay Stansfield|AVA|76|75|367.145|2002||187||76|38|
Tim Iroegbunam|MED|76|75|99.698.299.426|2003||183||76||
Daniele Ghilardi|DEF|84|73|416.768.737|2003||189||84||
Mandela Keita|MED|20|74|625.744.663|2002||180|1|20||
Nicolò Savona|DEF|84|78|460.463.617|2003||192||84||
Lorenzo Bernasconi|MED|84|70|238.100|2003||190||84|48|
Jake O'Brien|DEF|78|77|831.708.541.299|2001||197||78|41|
Andy Diouf|MED|58|77|731.132.521.440|2003||187||58|6|
Guéla Doué|DEF|39|79|731.293.524|2002||187|24|58||
Ben Gannon-Doak|AVA|51|81|204.532.565.160|2005||173|6|51|13.33|D
Álex Jiménez|DEF|54|75|7.160|2005||171||54|41.52|
Carlos Forbs|AVA|127|75|32.934.224|2004||169||127|55|D
Kévin Danois|MED|58|71|15|2004||183||64||
Jayden Addai|AVA|124|72|22.232|2005||180||124||D
Shea Charles|MED|79|75|551.805.789|2003||189||76|2|
Williot Swedberg|AVA|142|69|410.203|2004||185||142|43|E
Ismaël Doukouré|DEF|58|76|885.293|2003||183||58||
El Chadaille Bitshiabu|DEF|58|76|647.705.371|2005||196||58|4|
Vanderson|DEF|16|76|395.587|2001||173||16|50|
Pablo|AVA|16|72|345.668.380.925|2004||184||127|39|
Farès Chaïbi|MED|5|79|854.281|2002||183||58||
Yáser Asprilla|AVA|33|75|286.921.386.371|2003||186||33||D
Abdul Fatawu|AVA|60|81|812.518|2004||177|24|60|20.47|D
Ezechiel Banzuzi|MED|124|71|588.625.705|2005||191||124||
Alberto Costa|DEF|127|73|908.463.325|2003||186||127|7|
Hamza Igamane|AVA|102|74|717.530|2002||181||102||
Yarek Gasiorowski|DEF|54|75|888.648|2005||191||54||
Nilson Angulo|AVA|49|78|503.80.828|2003||182||49||E
Guillaume Restes|GR|58|77|854|2005||188||58||
Jannik Schuster|DEF|165|71|318.767.164|2006||190||165||
Jeanuël Belocian|DEF|58|75|731.524.933|2005||182||64|56|
Valentin Atangana|MED|58|73|820.36|2005||173||24||
Nathan Zézé|DEF|58|74|600.590|2005||190||58||
Noahkai Banks|DEF|45|72|115|2006||193||45||
Lucas Høgsberg|DEF|43|73|613.293|2006||182||43||
Jeff Ekhator|AVA|84|75|378.463|2006||188||84||
Chema Andrés|MED|54|76|721.298.166|2005||190||54|11.56|
Afonso Moreira|AVA|127|72|812.380.541|2005||175||127|41.7|E
Santiago Mouriño|DEF|157|74|710.110.779.66.905|2002||186||157|51|
Ernest Nuamah|AVA|60|79|613.708.541|2003||178||60|41|D
Rodrigo Mendoza|MED|54|75|283.110|2005||182||54|51|
Eliezer Mayenda|AVA|54|73|330.828.419|2005||180||54||
Aladji Bamba|MED|58|75|587.610|2006||181||58||
Facundo Buonanotte|MED|4|76|738.166.518.215.516|2004||174||4||
Sidiki Chérif|AVA|68|73|81.351.236|2006||188||68||
Veljko Milosavljevic|DEF|145|75|294.160|2007||192||145||
Martial Godo|AVA|39|71|929.367.293|2003||169||76|38|E
Claudio Echeverri|MED|4|79|734.551.524.386.140|2006||171||4|26|
Gianluca Prestianni|AVA|4|76|917.140|2006||165||4|18.31.38|D
Mikey Moore|AVA|76|73|853.717|2007||180||76|59|E
Gift Orban|AVA|115|76|465.541.421.416|2002||178||115||
Ismaëlo Ganiou|DEF|58|71|521.650|2005||185||58||
Karl Etta Eyong|AVA|24|75|245.905.523|2003||181||24||
Carlos Espí|AVA|54|78|103.523|2005||194||54||
Fer López|MED|54|67|203.934|2004||188||54|55|
Kacper Potulski|DEF|126|71|548|2007||195||126||
Arthur Avom|MED|24|72|319|2004||173||24||
Joane Gadou|DEF|58|74|767.157|2007||195||58||
Javi Rodríguez|DEF|54|71|203|2003||178||54||
Robinio Vaz|AVA|58|74|553.737|2007||185||58||
Kader Meïté|AVA|39|74|731.45|2007||191||58||
Dayann Methalie|DEF|58|72|854|2006||186||58||
Mateus Mané|MED|127|72|934|2007||175||127|55|
Rudy Matondo|MED|58|72|15.662|2008||180||58||
Thiago Pitarch|MED|54|81|110.379.186.721|2007||179||54|11.56|
Maxi Pereira|DEF|157|84|140.325.677.734|1984||173|125||7.30.32.35.39.52|
Rui Barros|MED|127|80|748.891.325.463.587.553|1965||159|36||7.15.20.25.59|
Trincão|AVA|127|83|163.127.934.812.36|1999||186|19||7.9.25.45.47|D
Roman Weidenfeller|GR|2|84|0.157|1980||188|5|2|29.33.5.53.60|
Sebastian Kehl|MED|2|83|365.157|1980||187|31|2|29.33.5|
Timo Hildebrand|GR|2|81|298.888.421.812.281|1979||186|7|2|29.5|
Simon Rolfes|MED|2|83|923.524|1982||189|26|2|29.5|
David Jarolim|MED|32|82|802.133.620.408.950.573|1979||174|29|22|5|
Tim Wiese|GR|2|82|0.923.421|1981||193|6|2|29|
Thomas Hitzlsperger|MED|2|85|133.99.298.510.925.933.299|1982||183|52|2|29.5.59|
René Adler|GR|2|82|524.408.548|1985||191|12|46|29|
Kevin Phillips|AVA|76|81|921.828.805.99.924.145.147.243.518|1973||170|8|76||
Jermaine Pennant|AVA|76|82|93.921.516.145.532.692.779.825.934.929|1983||175||76|15.2.43|D
Matthew Upson|DEF|76|84|539.93.617.243.720.145.925.825.166.518.543|1979||185|21|76|15.19.2|
Mark Schwarzer|GR|8|86|274.0.162.565.367.215.518|1972||194|109|8|31.44|
Wes Brown|DEF|76|88|552.828|1979||185|23|76|10.19.2.20.58|
Nicolás Burdisso|DEF|4|85|150.440.737.378.848|1981||182|49|4|17.31.36.37.44.6|
Christian Abbiati|GR|84|85|580.7.463.848.110|1977||191|4|84|11.19.58.6|
Mickaël Landreau|GR|58|82|600.647.530.746|1979||184|11|58|4|
Paul Robinson|GR|76|83|516.853.146.175|1979||193|41|76|19|
Wayne Bridge|DEF|76|85|805.215.367.551.925.828.166.720|1980||178|36|76|19.2.31.37.44.50|
Jussi Jääskeläinen|GR|57|82|155.925.929|1975||191|56|57||
Péguy Luyindula|AVA|58|80|210.293.541.553.15.523.647.608|1979||178|6|161|11.4|
Benoît Pedretti|MED|58|80|330.553.541.15.530.4.19|1980||177|22|58|4|
Benoît Cheyrou|MED|58|79|530.15.553.849|1981||182||58|24.4|
Obafemi Martins|AVA|115|83|728.440.610.933.745.145.523.784.755|1984||170||115|37.6|
Marco Marchionni|MED|84|81|285.663.679.463.356.768.508|1980||173|6|84|24.44|
Morgan De Sanctis|GR|84|84|674.463.871.787.371.601.737.587|1977||190|6|84|11.34.4.6|
Sergio Almirón|MED|4|79|611.871.416.285.463.587.356.128.201|1980||180||4|44|
John Mensah|DEF|60|82|378.218.575.238.731.541.828|1982||177|86|60||
Erjon Bogdani|AVA|1|80|376.277.729.764.416.794.218.18.209|1977||191|74|1||
David Di Michele|AVA|84|78|359.764.871.729.652.848.925.513.218|1976||171|6|84||
Manuele Blasi|MED|84|81|737.513.673.463.663.356.601.652.674.890|1980||178|8|84|19.24.6|
Stefan Kießling|AVA|2|82|620.524|1984||191|6|2|29|
Marco Donadel|MED|84|81|7.513.663.768.356.601.416.579|1983||179||84|11.43.58.6|
Joseba Llorente|AVA|54|77|725.753.886.905.638|1979||185||54||
Manuel Pablo|DEF|54|79|507.262|1976||176|13|54|3|
Andrés Palop|GR|54|81|888.905.787.524|1973||184||54|3.43.44.59.8|
Leo Franco|GR|4|82|438.549.110.371.779.771.754|1977||188|4|4||
Antonio López|DEF|54|83|104.110.638.549|1981||173|16|54|51.59|
Sergio García|AVA|54|83|127.523.779.142.291.57|1983||175|18|54|22.3.42.8|
Jaroslav Plasil|MED|32|83|424.587.867.638.156.201|1982||183|103|22|24|
Nery Castillo|AVA|111|80|252.632.788.551.269.217.90.649.527.719|1984||170|21|111|59|D
Blerim Dzemaili|MED|143|84|338.155.848.663.601.371.378.154.579|1986||179|69|88|43|
Michael Dawson|DEF|76|82|617.853.426|1983||188|4|76|12.19.38|
Souleymane Diawara|DEF|135|81|511.330.213.156.553.612|1978||187|47|135|24.4|
Peter Odemwingie|AVA|115|83|530.535.924.197.825.168|1981||182|63|154||D
José Moreira|GR|127|80|140.830.633.629.292|1982||185|23|127|25.28.30.50.7|
Danny|AVA|127|80|554.812.276.947.946|1983||178||159|12.20.25.32.37.40.45|
Stipe Pletikosa|GR|40|83|405.788.809.853.741.262|1979||193|114|88||
Razvan Rat|DEF|132|82|326.788.925.719.642|1981||179|113|132|59|
Carlos Cuéllar|DEF|54|80|638.717.99.828.616.72|1981||190||54||
Marcell Jansen|AVA|2|83|158.133.408|1985||191|45|2|29.5|
Ignazio Abate|DEF|84|85|7.601.679.575.285.848|1986||180|22|84|11.21.6|
Manuel Fernandes|MED|127|82|140.692.299.888.141.535.494.486.88|1986||176|15|127|20.25.40.50.7|
Mathieu Flamini|MED|58|83|553.93.7.243.379|1984||178|3|58|11.15.6|
Benoît Assou-Ekotto|DEF|24|83|521.853.698.763.323|1984||178|23|58|12.42|
Hatem Ben Arfa|MED|58|84|541.553.610.426.612.647.731.886.156.530|1987||178|15|58|24.4|
Heurelho Gomes|GR|16|82|242.648.853.421.921|1981||191|11|16|12.38|
Antonio Nocerino|MED|84|84|463.118.378.241.679.652.7.925.848.663.637.139|1985||175|15|84|44.6|
Manuel Pasqual|DEF|84|79|858.356.285|1982||178||84|21.37|
Mauro Zárate|AVA|4|81|917.59.145.510.440.925.698.356.921.683|1987||176||4|44|
Younès Kaboul|DEF|58|81|15.853.692.828.921|1986||193|5|58|12.38.42|
Rolando|DEF|127|83|120.325.601.440.80.553.163|1985||191|21|23|12.20.25.28.30.35.40.41.43.55.59.7|
Gonzalo Castro|MED|2|82|524.157.298.91|1987||170|5|2|53|
Sergio Floccari|AVA|84|79|378.100.510.663.781.154.760|1981||180||84||
Martin Harnik|AVA|165|83|923.302.298.408|1987||185|68|2||D
Adam Johnson|AVA|76|82|565.516.921.551.828|1987||181|12|76|19.2.37|D
Cristian Rodríguez|MED|157|85|677.647.325.110.663.395.438|1985||178|110|157|12.28.3.51.55.59.7|
José Fonte|DEF|127|84|350.909.140.668.295.243.805.925.530.163.200|1983||191|50|127|25.4.41.42.8|
Asmir Begovic|GR|21|85|692.160.939.447.825.215.699.7.299.698.518|1987||198|63|88|2.21.31.43|
Raúl García|AVA|54|83|638.110.101|1986||184|2|54|3.51.59|
Stephen Ireland|MED|78|82|551.99.610.825.155|1986||173|6|78|37|
Gabriel Agbonlahor|AVA|76|82|921.789.99|1986||180|3|76|19|
Éder (1986)|AVA|84|83|240.285.366.165.209.768.440.834|1986||178|26|16|21.37|
Camilo Zúñiga|DEF|33|84|106.794.601.154.921|1985||172|61|33|43.48|
Caner Erkin|DEF|152|79|194.371.351.141.440.478.131.301|1988||181||152|30.31.55|
Jack Cork|MED|76|82|160.215.783.805.921.236.175.830|1989||183||76|11.19.2.31.42.50|
Salvatore Bocchetti|DEF|84|80|97.366.378.745.809.7.416.674|1986||186|5|84||
Nacho Monreal|DEF|54|85|638.586.93.725|1986||180|22|54|15.23.35|
Miguel Veloso|MED|127|83|812.378.275.416.681|1986||180|57|127|20.25.40.50|
André-Pierre Gignac|AVA|58|83|319.666.854.553.843|1985||187|36|58|17.24|
Antonio Adán|GR|54|83|721.196.142.110.812|1987||190||54|3.31.47.51.7|
Domenico Criscito|DEF|84|82|768.440.728.947.378|1986||183|22|84|12.37|
Kieran Gibbs|DEF|76|84|93.616.924.442|1989||178|10|76|15.19|
Adrián López|AVA|54|82|723.262.66.586.110.325.905.638|1988||183|2|54|3.32.35.39.51.52.59|
Eric-Maxim Choupo-Moting|AVA|24|86|817.408.620.548.825.647.133.608|1989||191|76|2|27.4.5.53|
Pablo Hernández (1985)|MED|54|81|888.245.379.830.38.719.516|1985||173|4|54|17.23|
Ante Budimir|AVA|40|82|501.403.592.817.241.768.549.638|1991||190|30|88||
Angelo Ogbonna|DEF|84|83|848.241.463.925.921|1988||191|13|84|21.6|
Simon Mignolet|GR|20|87|797.828.532.224|1988||193|35|20|33.45|
Fabian Delph|MED|76|84|516.99.551.299|1989||174|20|76|11.2.26.38.43|
Fraser Forster|GR|76|82|610.824.169.616.204.805.853.160|1988||201|6|76|21.59|
Josué (1979)|MED|16|81|389.834.933.112|1979||169|28|16|5|
Danilo D'Ambrosio|DEF|84|80|356.461.848.440.580|1988||180||84|21.37.6|
Jorge Martínez|AVA|157|80|598.201.463.209.191.618|1983||181|18|157|21.6|D
Enzo Pérez|MED|4|83|388.296.140.888.734.89.966|1986||175|26|4|30.39.49.51.7|
Adrien Silva|MED|127|83|812.545.27.518.587.768.732|1989||175|26|58|25.28.30.34.38.40.44.8|
Péter Gulácsi|GR|73|85|532.426.767.705.905|1990||191|58|73|43|
Jack Rodwell|MED|76|82|299.551.828.146.790.926.832|1991||188|3|76|19.2.37|
Roman Bürki|GR|143|83|942.332.391.365.157.815|1990||187|9|143|53|
Maxime Gonalons|MED|58|81|541.737.787.390.223|1989||187|8|58|24.41|
Andros Townsend|AVA|76|81|526.939.853.543.447.921.568.516.145.698.610.243.299.539.84|1991||181||76|12.42.43.53|D
Roberto Soriano|MED|84|78|768.285.905.848.154|1991||182||2|21.37.44|
Daniel Wass|MED|43|83|172.364.140.950.203.888.110|1989||181|44|43|30|
Oriol Romeu|MED|54|86|127.215.888.298.805.386.119|1991||183|1|54|12.26.27.3.43.58|
Cheikhou Kouyaté|MED|135|83|80.470.925.243.617|1989||189|92|135|39|
Lacina Traore|AVA|39|81|191.497.85.587.299.194.813.75.891|1990||203|13|39|34.44.45|
Luuk de Jong|AVA|124|84|253.334.158.610.648.787.127.325|1990||188|39|143|35.54.59.7|
Lucas Pérez|AVA|54|81|66.719.480.275.642.262.93.925.283.245.648|1988||181|2|54|15|
Tom Cleverley|MED|76|86|552.518.921.929.99.299|1989||175|13|76|10.2.38.44.45.54|
Adrián Ramos|AVA|33|82|183.437.418.157.390|1986||185|36|33|33.40.53|
Niclas Füllkrug|AVA|2|83|923.394.620.157.925.7|1993||188|24|2|27.35.39|
Tomás Rincón|MED|159|80|408.378.463.848.768.777|1988||177||159|6|
Ricardo Álvarez|MED|4|83|917.440.828.768|1988||188|9|4|37.44|
Davy Pröpper|MED|124|78|907.648.166|1991||185||124|54|
Shinji Okazaki|AVA|86|86|791.298.548.518.586.754.307.797|1986||174|119|86|2.44.53|
Sung-yueng Ki|MED|37|83|327.204.830.828.610.549.686|1989||189|110|37|40.43|
Nicola Sansone|AVA|84|78|663.241.781.905.154.513|1991||173||2|21.37|E
Gökhan Töre|AVA|152|79|215.408.745.141.925.938.29.82.492|1992||176|1|2|11.2|D
Benjamin André|MED|58|76|4.731.530|1990||177||58|4.41|
Kevin Vogt|DEF|2|78|898.115.231.421.923.874|1991||194||2||
Danny da Costa|DEF|2|77|524.315.281.548|1993||185||2|56.59|
Mário Rui|DEF|127|83|140.663.810.285.737.601|1991||170|12|127|11.25.30.48.6|
Mattia De Sciglio|DEF|84|86|7.463.541.285|1992||183|40|84|21.37.48.6|
Riccardo Saponara|MED|84|80|285.7.356.768.378.513.810.416.82|1991||184||84|48|
Jóhann Berg Gudmundsson|AVA|82|80|22.213.175.54|1990||186||82||D
Marvin Plattenhardt|DEF|0|80|620.418|1992||181|7||29|
Eduardo Vargas|AVA|29|85|864.601.395.299.888.698.421.843.112.598|1989||176|120|29|17.39.43.45.50|
Josuha Guilavogui|MED|58|80|763.110.933.156.548|1990||187|7|58|24.3.51|
Martin Braithwaite|AVA|43|84|289.854.565.156.186.127.291.395|1991||177|69|43||
Andrea Bertolacci|MED|84|80|737.513.378.7.768.478.486.238|1991||179||84|21.36.37.41.44.52|
Jordan Ayew|AVA|60|84|553.330.319.99.830.243.518.790|1991||182|113|58|20.24.4|
Koen Casteels|GR|20|81|377.421.923.933.55|1992||196|20|20|45|
Rémy Cabella|MED|58|80|578.5.610.553.763.494.530.632.600|1990||171|1|58|12.24.4.41|
Younès Belhanda|MED|102|80|578.275.612.371.29|1990||177||58|4|
Mitchell Weiser|DEF|2|81|231.133.0.418.524.923|1994||176||2|26.5|
Shane Duffy|DEF|78|83|299.783.175.939.146.166.204.367.616|1992||193|61|79|38.45|
Hugo Mallo|DEF|54|78|203.443.90|1991||173|1|54|36|
Andre Gray|AVA|85|78|793.539.164.175.921.698.90.58.478|1991||178|6|76|38|
John Egan|DEF|78|78|828.243.790.162.164.175.426|1992||185||78||
Juan Jesus|DEF|16|83|443.440.737.601.895|1991||185|4|16|21.37.41.44.50.6|
Andy Delort|AVA|5|76|4.622.323.855.929.759.843.854.578.612.600|1991||180||58||
Vlad Chiricheș|MED|132|84|339.853.601.781.238|1989||184|78|132|11.12.42.48|
Gastón Ramírez|MED|157|82|677.154.805.426.565.768.580.771.967|1990||183|43|157|42.44|
Juanmi|AVA|54|79|105.586.709.805.725.142.58.245.379|1993||172|1|54|23.28.35.36|E
Benjamin Lecomte|GR|58|78|319.266.578.587.110.291.367|1991||186||58|34.38|
Ben Gibson|DEF|76|77|565.684.175.616|1993||185||76||
Mathew Ryan|GR|8|84|205.224.888.377.166.93.725.233.22.737.521.523|1992||184|105|8|16.39.44|
David López|DEF|54|79|291.186.754.601.386|1989||185||54|42.43.48|
Okay Yokuşlu|MED|152|77|73.486.856.203.924.379|1994||190||152||
Enner Valencia|AVA|49|85|649.925.299.843.351.443.150|1989||174|109|49|30.55|
Sergi Darder|MED|54|78|105.586.541.291.549|1993||180||54||
Omar Mascarell|MED|69|83|721.263.813.281.283.549|1993||181|1|54|11.31.35.43.56.57|
Bartosz Bereszyński|DEF|126|79|514.517.768.601.285.652|1992||183||126|25.44.6|
Munas Dabbur|AVA|83|79|542.391.767.787.421|1992||182|40|83|35.59|
M'Baye Niang|AVA|135|84|759.7.578.378.921.848.731.36.156.15.29.285.768.376.869|1994||184|23|58||
Vladimír Coufal|DEF|32|71|804.802.925.421|1992||174||22|35|
Roberto Inglese|AVA|84|75|218.199.663|1991||187||84||
Mohamed Elneny|MED|47|85|132.93.141.47|1992||179|101|47|15.16.20|
Gabriel Pires|MED|16|75|463.696.810.674.18.186.140.43.159.358.657.693.570|1993||186||16|18.30.46.7|
Chimy Ávila|AVA|4|76|771.754.638.142.438|1994||179||4||
Ludwig Augustinsson|DEF|142|83|170.431.233.923.787.99.549.80|1994||181|56|142|35|
Hélder Costa|AVA|3|78|140.262.587.934.516.888.46.292|1994||178||3|17.30.34.39|D
Islam Slimani|AVA|5|84|812.518.610.351.587.541.818.80.235.471.473.191|1988||188|104|5|30.34.38.43.44.47|
Jonathan Clauss|DEF|58|78|91.521.553.612|1992||178||58|24|
Adnan Januzaj|AVA|20|86|552.157.828.725.787.131.507|1995||182|15|20|31.45.53.54|D
Gonçalo Paciência|AVA|127|78|325.27.632.732.909.281.203.898.775.811.776|1994||184||127|32.35.39.52.59.7|
Ally Samatta|AVA|147|82|377.99.351.744.642.511|1992||183|27|147|55|
Karim Rekik|DEF|124|80|551.692.146.648.553.418.787|1994||186||124|12.2.35.37.54.59|
Tonny Vilhena|MED|124|79|354.494.291.764.654.65|1995||175||124|43.54|
Kevin Mbabu|DEF|143|79|786.610.717.942.933.367.115.566|1995||184||143|38.43|
Victor Lindelöf|DEF|142|87|915.140.552.99|1994||187|75|142|30.31.46.47.59.7|
Timo Baumgartl|DEF|2|77|298.648.874.815|1996||190||2||
Ryan Christie|MED|51|76|444.204.26.160|1995||178||51||
Emiliano Sala|AVA|4|80|156.868.210.759.600.197|1990||187||4|44.52|
Brice Samba|GR|58|79|511.553.19.759.617.521.731|1994||186||35|17|
Tim Kleindienst|AVA|2|79|365.415.465.158|1995||194|6|2||
Alexander Nübel|GR|2|82|750.133.587.298.141|1996||193||2|27.5.53|
Dwight Gayle|AVA|76|75|675.243.610.924.825.263.419|1989||177||76|43|
Joseba Zaldua|DEF|54|77|725.186.245|1992||176||54||
Rúben Semedo|DEF|127|78|812.909.905.754.732.632.325.39.21|1994||189||127|30.7|
Jacob Murphy|AVA|76|79|616.147.831.783.236.610.924.789|1995||176||76|43|D
Andreas Cornelius|AVA|43|80|233.197.100.156.663.856|1993||193||43|48|
Rick Karsdorp|DEF|124|80|354.737.648|1995||184||124|13.31.41.44|
Ibrahim Amadou|MED|58|76|19.530.787.616.186.81.323|1993||183||24|17.41|
Robin Quaison|AVA|142|75|14.652.548.40.90|1993||180||142||
Kenny Tete|DEF|124|80|32.541.367|1995||180||124|38.54|
Vincent Janssen|AVA|124|81|71.22.853.351.577.744|1994||180||124|21.31.39.42.54|
Bartłomiej Drągowski|GR|126|79|454.356.285.810.654.928|1997||192|4|126|25.43.46|
Paulinho (1992)|AVA|127|69|860.380.163.812.845|1992||187||127|7.9.47|
Badou Ndiaye|MED|135|75|152.639.371.825.856.478.37.90.29.670.374|1990||179||135||
Daniel Amartey|DEF|60|80|268.233.518.141|1994||182||60|2.25.44|
Riechedly Bazoer|DEF|42|82|32.933.325.882.907.22.492|1996||184|6|124|54|
Munir El Haddadi|MED|102|86|127.888.66.787.379.507.186.67|1995||175|12|54|3.35.36.58.59|
Stefan Posch|DEF|165|79|421.154.100.232.548|1997||189||165||
Matheus Pereira|MED|16|76|812.214.620.924.45.242|1996||175||16|30.32.34.47|
Trezeguet (1994)|AVA|47|83|80.585.484.99.131.856.57|1994||180|73|47|20|E
Denis Bouanga|AVA|59|76|319.293.855.622.763.500|1994||175||58||E
Léo Dubois|DEF|58|78|600.541.371.131.301|1994||178||58|44.52|
Clinton N'Jie|AVA|24|82|541.853.553.276.799.326|1993||175|44|24|42|D
Jordan Amavi|DEF|58|78|612.99.553.379.818|1994||176||58|12|
Oussama Idrissi|AVA|102|76|312.22.787.32.245.354.649|1996||183||124|13.35|E
Josh Cullen|MED|78|77|925.162.155.213.80.175|1996||180||76||
José Sá|GR|127|79|554.325.632.934|1993||192||127|18.35.39.52.55.7|
Pione Sisto|AVA|43|79|566.203.65.90.11|1995||171||155|43|E
Wesley Hoedt|DEF|124|78|22.510.805.203.744.80.921.60|1994||188||124|48|
Emil Audero|GR|75|80|463.895.768.440.232.652.238|1997||192||75|44.6|
Bruno Petkovic|AVA|40|81|201.890.728.857.154.416.277.490|1994||192|7|40||
Maximilian Wöber|DEF|165|77|718.32.787.767.516.158.923|1998||188||165||
Gastón Pereiro|MED|157|79|598.648.196.841.378.128|1995||188|13|157|44|
Robert Skov|MED|43|79|796.233.421.874|1996||183||54||
Abdülkadir Ömür|MED|152|78|856.426.180.84|1999||168|14|152||
Moses Simon|AVA|115|78|32.465.523.600.662|1995||168||115||E
Felix Uduokhai|DEF|2|77|1.933.115.141|1997||192||2||
Ludovic Ajorque|AVA|58|74|81.223.293.548.818|1994||197||133||
Óscar Rodríguez|MED|54|81|721.186.787.379.203|1998||174||54|35|
Baptiste Santamaria|MED|58|73|855.81.365.731.612.888|1995||183||58||
Fabián Balbuena|DEF|122|80|598.528.234.925.276.395|1991||188||122|55|
Alfie Mawson|DEF|76|76|164.539.936.129.830.367.168|1994||188||76|44|
Jeremiah St. Juste|DEF|124|76|414.354.548.812|1996||186||124|47.7|
Nuno Santos|DEF|127|76|140.909.732.812|1995||179||127|18.30.31.38.46.47.7|
Josip Brekalo|AVA|40|82|277.933.298.848.356.405.484.723.418|1998||180|35|40||E
Harry Souttar|DEF|8|80|825.273.740.518.790|1998||198||51||
Oli McBurnie|AVA|51|76|162.830.169.129.790.507.426|1996||188||76||
Jeff Chabot|DEF|2|76|807.312.768.810.231.298|1998||195||2|44|
Ionuț Radu|GR|132|80|440.118.378.663.238.15.160.895.203|1997||188|9|132|21.37.6|
Rolando Mandragora|MED|84|81|378.674.463.241.871.848.356|1997||183||84|48.6|
Justin Bijlow|GR|124|80|354.378|1998||188|8|124|13.54|
Marko Rog|MED|40|82|595.277.601.787.196.592|1995||180|21|40|11.35.44.48|
Gustavo Hamer|MED|124|75|354.309.645.236.790|1997||169||16||
Walace|MED|16|76|395.408.871.242|1995||188||16|50|
Jota|AVA|127|78|140.886.204.46.731|1999||175||127|7.18|E
Lucas Boyé|AVA|4|79|734.611.848.203.12.720.283.390.66|1996||179|1|4|49|
Philipp Treu|DEF|2|72|817.365|2000||172||2||
Nicolas Kühn|AVA|2|78|718.204.232|2000||174||2||D
Altay Bayındır|GR|152|83|82.351.552|1998||198|5|152|30.47.55|
Álex Berenguer|AVA|54|78|638.181.848.101|1995||175||54||E
Sebastiaan Bornauw|DEF|20|77|80.231.933.516|1999||191||20||
Josh Dasilva|MED|76|79|93.164|1998||184||76|15|
Cameron Carter-Vickers|DEF|45|80|853.790.447.830.825.539.160.204|1997||183||76|21.31.39.42|
Juan Miranda|DEF|54|79|127.142.154|2000||185||54||
Iván Martín|MED|54|76|905.291.188.66.386.709|1999||178||54||
Anders Dreyer|AVA|43|78|289.166.816.414.566.745.80.770|1998||174||43||D
Niklas Beste|AVA|2|77|157.923.310.451.415.140.365|1999||174||2|18|D
Cyle Larin|AVA|25|83|637.141.949.224.886.549.354.805|1995||188|91|25||
Jorge|DEF|16|78|357.587.325|1996||184||16|30.34.4|
Jens Odgaard|MED|43|78|540.781.414.320.674.707.22.154|1999||188||43||
Rubén Vargas|AVA|143|82|321.115.787|1998||174|66|143||E
Japhet Tanganga|DEF|76|79|853.115.568|1999||184||76|21.31.39.42|
Kamil Grabara|GR|126|80|25.425.233.933.463|1999||195|6|126|25|
Luca Pellegrini|DEF|84|80|737.196.463.378.281.510|1999||178||84|48|
Guilherme Arana|DEF|16|78|234.102.787.100.112.358|1997||180||16|55|
Lucas Perri|GR|16|77|834.243.621.159.541.516|1997||197||16|41|
Omar Alderete|DEF|122|78|382.427.132.418.888.379.828|1996||188||122||
Amir Murillo|DEF|121|81|608.80.553.141|1996||183|97|121||
Ko Itakura|DEF|86|84|485.551.312.158.32|1997||186|44|86|26|
Mitchel Bakker|MED|124|79|32.647.524.100.530|2000||185||124|4.42.48.53.56.59|
Rafa Mir|AVA|54|80|888.934.507.617.754.787.283|1997||189||54|35.39.59|
Leo Østigård|DEF|116|82|576.901.166.817.236.825.378.601.731.421|1999||182|43|116|6|
Thierry Correia|DEF|127|75|812.888|1999||176||127||
Rasmus Nissen Kristensen|DEF|43|79|566.32.767.516.737.281|1997||176||43|31|
Pablo Rosario|MED|131|74|71.648.612.325|1997||188|6|124|7|
Arijanet Murić|GR|89|83|551.588.617.386.29.175.447.781|1998||198|38|143|26|
Diego Lainez|AVA|111|77|77.142.163.843|2000||168||111||D
Guus Til|MED|124|79|22.809.365.354.648|1997||186||163|13.46.54|
Lucas Martínez Quarta|DEF|4|79|734.356|1996||181||4||
Marcelo Saracchi|DEF|157|78|252.734.705.371.523.150.204|1998||172||157|17|
Joris Gnagnon|DEF|58|78|731.787|1997||182||58|35|
Mike Tresor|MED|20|75|589.377.175|1999||173||20||
Albert Sambi Lokonga|MED|20|80|80.93.243.539.787.408|1999||183||20|16|
Tino Kadewere|AVA|162|78|268.511.541.549.600.90|1996||190||162|41|
Alexis Claude-Maurice|MED|58|75|319.612.521.115|1998||174||58||
Danilho Doekhi|DEF|124|76|300.907.874|1998||190||124||
Yacine Adli|MED|5|79|647.156.7.356.60|2000||186||58|4.53|
Gonzalo Villar|MED|54|73|283.737.379.768.390.277|1998||181||54|31.41|
Jordan Beyer|DEF|2|75|158.408.175|2000||187||2||
Yukinari Sugawara|DEF|86|82|599.22.805.923.196|2000||179|21|86|13|
Rhian Brewster|AVA|76|80|532.830.790|2000||180||76|33|
Ibrahima Diallo|MED|58|75|818.805|1999||180||58||
Marshall Munetsi|MED|162|75|820.934.662|1996||187||162|55|
Álvaro Valles|GR|54|64|143.507.142|1997||192||54||
Tiago Djaló|DEF|127|79|530.463.325.141|2000||190||127|4.41|
Daizen Maeda|AVA|86|83|571.554.940.204.447|1997||173|30|86||E
Elia Caprile|GR|84|75|128.601.285.196|2001||191||84|21.6|
Zuriko Davitashvili|AVA|61|77|745.743.96.156.763|2001||175||61||E
Ansgar Knauff|AVA|2|79|157.281|2002||180||2|59|D
Marcão|DEF|16|78|102.397.111.732.214.371.787|1996||184||16|59|
Matías Viña|DEF|157|80|598.653.737.160.781.357.734|1997||183||157|31.41|
Ethan Pinnock|DEF|85|73|129.164|1993||194||76||
Emmanuel Dennis|AVA|115|78|948.224.231.921.617.131.146.172|1997||174||115|44|
Cameron Puertas|MED|54|74|509.875.55.923|1998||178||143||
Jorge de Frutos|AVA|54|75|721.886.719.523|1997||173||54||D
Daniel Bragança|MED|127|75|346.292.812|1999||169||127|47.7|
Mads Bidstrup|MED|43|76|164.613.767|2001||175||43||
Torbjørn Heggem|DEF|116|72|170.924.154|1999||192||116||
Jayden Bogle|DEF|76|75|263.790.516|2000||178||76||
Adrián Bernabé|MED|54|82|291.127.551.663|2001||170||54|26|
Lyle Foster|AVA|164|81|587.207.908.473.175.423|2000||185|30|164|34|
Joe Aribo|MED|115|77|213.717.805.518|1996||183||76||
Sorba Thomas|AVA|123|77|425.146.600.825|1999||185||76||E
Francisco Moura|DEF|127|72|27.163.345.325|1999||181||127|7|
Chris Mepham|DEF|123|79|164.160.828.924|1997||191||76||
Mady Camara|MED|68|75|4.632.737.642|1997||182||68|31|
Moussa Djenepo|AVA|100|77|822.805.84|1998||177||100||E
Maarten Vandevoordt|GR|20|76|377.705|2002||192||20||
Ao Tanaka|MED|86|83|485.302.516|1998||177|38|86||
Kyogo Furuhashi|AVA|86|81|906.204.731.145|1995||170|22|86||
Albert Grønbaek|MED|43|74|25.152.731.805.378.408|2001||182||43||
Flynn Downes|MED|76|75|447.539.830.925.805|1999||173||76||
Fabian Rieder|MED|143|78|942.731.298.115|2002||181||143||
Melvin Bard|DEF|58|76|541.612|2000||173||58||
Johan Vásquez|DEF|111|79|843.577.865.378.238|1998||184||111||
Junior Dina Ebimbe|MED|24|74|647.511.266.281.818|2000||183||58|4.42|
João Mário (2000)|DEF|127|75|325.463.154|2000||178||127|7.52|
Sebastiano Esposito|AVA|84|80|440.760.895.132.80.128.768.285.196|2002||186||84|21|
Tuta|DEF|16|78|281.470.39|1999||184||16|59|
Jay Idzes|DEF|75|75|387.895.781|2000||190||124||
Zeki Amdouni|AVA|143|79|509.132.175.140|2000||175||143|18|
Mousa Tamari|AVA|87|81|17.625.578.731|1997||178|95|87||D
Tim Lemperle|AVA|2|74|231.394.421|2002||187||2||
Romain Faivre|MED|58|76|587.818.541.319.160.61.15|1998||180||58||
Quentin Merlin|DEF|58|75|600.553.731|2002||174||58||
Jack Clarke|AVA|76|77|516.853.698.825.828.447|2000||181||76|17.31|E
Hicham Boudaoui|MED|5|71|612|1999||175||5||
Victor Kristiansen|DEF|43|79|233.518.154|2002||179|1|43||
Lucien Agoumé|MED|58|79|330.440.810.818.862.787|2002||185||24|21.6|
Mathias Kvistgaarden|AVA|43|73|172.616|2002||174||43||
Fabio Miretti|MED|84|80|463.460.378.141|2003||180|1|84|37|
Hugo Duro|AVA|54|75|127.886.725.291.523.379.721.888|1999||180||54|3.57|
Gastón Álvarez|DEF|157|71|255.379.55|2000||184||157||
Jon Pacheco|DEF|54|77|725.66|2001||184||54||
CJ Egan-Riley|DEF|76|76|175.419.553|2003||183||76||
Saúl Coco|DEF|69|76|507.848|1999||188||54||
Akor Adams|AVA|115|77|531.578.787.895|2000||190|15|115||
Loum Tchaouna|AVA|58|74|731.266.764.510.175|2003||180||28||D
Bashir Humphreys|DEF|76|78|215.750.830.175|2003||186||76|42.53|
Tiago Tomás|AVA|127|76|812.298.933|2002||180||127|47.7|D
Mika Mármol|DEF|54|74|507|2002||182||54||
Diego López (2002)|AVA|54|77|888|2002||172||54||D
Mio Backhaus|GR|2|74|923.336.365|2004||194||2||
Ameen Al-Dakhil|DEF|20|77|822.797.175.298|2002||185|4|77||
Cesare Casadei|MED|84|78|440.215.720.518.848|2003||185||84|42|
Julen Agirrezabala|GR|54|77|101.184.144.888.709|2000||187||54||
Vladyslav Vanat|AVA|153|79|275.220.386|2002||182|16|153||
Aimar Oroz|MED|54|77|638.181|2001||177||54||
Tajon Buchanan|AVA|25|82|607.224.440.905|1999||183|61|25|6|D
Tommaso Baldanzi|MED|84|77|285.737.378|2003||170||84|44|
Oliver Provstgaard|DEF|43|72|893.510|2003||194||43|48|
Carl Rushworth|GR|76|73|920.166.830.426.236|2001||191||76||
Aaron Ramsey|MED|76|73|216.616.565.175.518|2003||181||76||
Martin Vitík|DEF|32|77|806.154|2003||193|11|32||
Samuel Mbangula|AVA|20|75|460.463.923.154|2004||181||20||E
Samú Costa|MED|127|79|163.72.549|2000||185||127||
Jon Aramburu|DEF|159|77|725|2002||176|1|159||
Jota Silva|AVA|127|75|520.200.908.617.141.632|1999||179|2|127|39.45|E
Vini Souza|MED|16|77|357.536.471.291.790.933|1999||187||16|30|
Rodrigo Gomes|MED|127|74|163.292.934|2003||171||127|55|
Oussama Targhalline|MED|102|75|553.65.511.354|2002||186||102||
Carlos Álvarez|MED|54|74|787.523.77|2003||168||54||
Youssef Chermiti|AVA|127|75|812.299.717|2004||192||127|47|
Mohamed-Ali Cho|AVA|58|77|81.725.612.426|2004||182||58||D
Álvaro Djaló|AVA|70|76|163.101.43|1999||175|5|54|9|E
Enzo Barrenechea|MED|4|74|329.460.463.366.99.888.140|2001||186||4|18.31|
Morato|DEF|16|77|834.140.617|2001||192||16|30.39.55.7|
Juanlu Sánchez|DEF|54|78|787.188.160|2003||186||54|35|
Chadi Riad|DEF|102|82|127.142.243|2003||186|2|54|27.3|
Antonio Vergara|MED|84|73|601.696.728|2003||182||84|21|
César Tárrega|DEF|54|69|888.886|2002||194||54||
Pau Víctor|AVA|54|77|386.127.163|2001||184||54|27.3|
Ilias Akhomach|AVA|102|79|127.905.719|2004||175||54||D
Marcelino Núñez|MED|29|74|616.447|2000||173||29||
Antonín Kinský|GR|32|76|271.802.660.853|2003||190||32||
Brooke Norton-Cuffy|DEF|76|76|93.742.236.568.378.426|2004||181||76|16|
Patrick de Paula|MED|16|74|653.159.240.292.730|1999||178||16|9|
Matheus França|MED|16|75|357.243.892|2004||182||16||
Ângelo|AVA|16|77|777.215.293.52|2004||173||16||D
Mamadou Coulibaly|MED|58|70|587|2004||180||58||
Soungoutou Magassa|MED|58|76|587.925|2003||188||58|39|
Ramón Sosa|AVA|122|78|734.382.182.617.653|1999||178|28|122|39.9|
Carlos Alcaraz|MED|4|78|710.805.463.357.299|2002||183||4||
Kike Salas|DEF|54|75|787.189|2002||185||54|35|
Valentín Carboni|MED|4|80|440.580.553.378.710|2005||182|3|4||
Roony Bardghji|AVA|142|79|233.127|2005||173||90|27.3|D
Nelson Weiper|AVA|2|74|548|2005||192||2||
Tommy Conway|AVA|51|75|168.565|2002||185|1|76||
Noah Nartey|MED|43|73|172.541|2005||180||43|41|
Pablo Pagis|AVA|58|72|622.319.819|2002||181||58||E
Tiago Santos|DEF|127|74|292.530|2002||175||127|41|
Dzenan Pejcinovic|AVA|2|74|933.302|2005||188||2||
Omar El Hilali|DEF|102|76|291|2003||183||54||
Bamba Dieng|AVA|135|75|553.319.81|2000||178||135||
Arnau Martínez|DEF|54|75|386|2003||182||54||
Oscar Højlund|MED|43|74|233.281|2005||184||43||
Mateo Pellegrino|AVA|4|72|917.296.683.663|2001||192||54||
Bruno Ogbus|DEF|143|70|365|2005||188||143||
Semih Kılıçsoy|AVA|152|77|141.196|2005||178||152|25|
Miguel Román|MED|54|68|203|2002||178||54||
Sverre Nypan|MED|116|76|739.551.565|2006||182||116|26|
Djaoui Cissé|MED|58|73|731|2004||188||58||
Iván Fresneda|DEF|54|82|721.186.886.887.812|2004||182||54|47.7|
Andrija Maksimovic|MED|145|73|294.705|2007||182||145||
Saïmon Bouabré|MED|58|71|587.590.45|2006||174||58||
João Simões|MED|127|73|812|2007||175||127|7|
Benja Domínguez|AVA|4|73|382.154|2003||172||4||E
Abakar Sylla|DEF|39|75|225.224.293.600|2002||188||39||
Jair Cunha|DEF|16|74|777.159.617|2005||198||16|55|
Zachary Athekame|DEF|143|73|606.942.7|2004||181||143||
Samu Aghehowa|AVA|54|78|726.390.110.66.325|2004||193|3|54|51.7|
Abdoul Ouattara|DEF|39|70|293|2005||180||39||
George Ilenikhena|AVA|115|74|75.744.587.46|2006||185||115||
Christian Mawissa|DEF|58|73|854.587|2005||184||58||
Ngal'ayel Mukau|MED|129|77|471.530|2004||186||20||
Samuele Inácio|AVA|84|74|157|2008||176||84||
Francesco Camarda|AVA|84|77|7.513|2008||189||84|41.52|
Montrell Culbreath|AVA|2|73|524|2007||172||2||D
Pau Navarro|DEF|54|73|905|2005||185||54||
Wael Mohya|MED|2|71|158|2008||179||2||
Gabriel Moscardo|MED|16|79|234.647.820.163.291|2005||185||16|36|
Arsène Kouassi|DEF|18|72|4.319|2004||178||39||
Prosper Peter|AVA|58|71|81|2007||177||58||
Ibrahim Osman|AVA|60|75|613.166.354.15.145|2004||179||60||E
Tiago Gabriel|DEF|127|68|295.513|2004||196||58||
Christantus Uche|AVA|115|75|379.243|2003||190||115||
Malick Yalcouyé|MED|39|73|20.431.166.827.830|2005||169||100||
Khalis Merah|MED|58|71|541|2007||178||58|41|
Alexis Vossah|MED|58|71|854|2008||181||58||
Jan Virgili|AVA|54|73|549|2006||177||54||E
Costa Pereira|GR|127|80|140|1929||188|22||7.58|
Damas|GR|127|78|812.709.908.690|1947||182|29||7|
Mlynarczyk|GR|126|79|928.746.325|1953||0|42||7.58|
Miguel|DEF|127|83|140.888|1980||180|59|||
Fernando Meira|DEF|127|82|908.140.298.371.947.779.946|1978||190|54||5.50|
Aloísio|DEF|16|80|443.127.325|1963||185|6||7.22.25|
Petit|MED|127|83|380.149.140.231|1976||172|57||7.25.28.50|
Carlos Manuel|MED|127|62|140.812|1962||0|||7|
Pedro Barbosa|MED|127|78|363.908.812|1970||185|22||7.20.25.32|
Toni|MED|127|78|27.140|1946||0|33||7|
Rui Águas|AVA|127|79|690.140.325.295.728|1960||179|31||7.11.20.25|
Domingos Paciência|AVA|127|80|325.189.839|1969||175|34||7.20.25|
Derlei|AVA|16|79|79.396.519.325.276.140.812.280|1975||175|||7.25.31.40.58.59|
Benni McCarthy|AVA|164|85|32.203.325.146.925|1977||183|79||7.20.31.58|
Tamás Hajnal|MED|73|81|352.797.0.479.157.298.315|1981||170|59|73|33|
Cacau|AVA|2|84|620.298.208|1981||178|23|16|29.5|
Halil Altintop|MED|152|82|0.281.856.115|1982||186|39|2||
Piotr Trochowski|MED|2|83|133.408.787.115|1984||169|35|126|29.5.59|
Paolo Guerrero|AVA|125|85|133.408.234.357.443.503.710|1984||185|128|125|5|
Richard Wright|GR|76|81|447.93.299.925.805.790.695.551|1977||188|2|76|15.2.37|
Joey Barton|MED|76|83|551.610.698.553.175.717|1982||180|1|76||
Paul Konchesky|DEF|76|80|213.853.925.367.532.617.518.698|1981||178|2|76|44|
Sylvain Armand|DEF|58|79|223.600.647.731|1980||182||58|11.4|
Jan Polak|MED|32|81|804.620.80.933|1981||181|57|22||
Steed Malbranque|MED|58|79|541.367.853.828.763.759|1980||171||20|41|
Leon Osman|MED|76|81|299.198.263|1981||173|2|76|45|
Bernard Mendy|DEF|58|79|759.647.155.426.626.818|1981||180|3|58||
Pierre-Alain Frau|AVA|58|77|330.541.521.647.530.759|1980||175||58|4|
Kevin Nolan|MED|76|80|155.610.925.526|1982||183||76||
Rory Delap|MED|78|80|198.263.805.825.828.129.177|1976||183|11|76||
Bobby Zamora|AVA|76|80|169.166.853.925.367.698|1981||185|2|76|19|
Hilton|DEF|16|77|211.659.235.786.746.521.553.578|1977||182||16|24.4|
Alexander Manninger|GR|165|84|767.93.356.291.848.154.165.794.871.463.115|1977||189|33|165|15.2.21.37.44.6|
Anthony Réveillère|DEF|58|82|731.888.541.601.828|1979||180|20|58|4.43|
Emiliano Moretti|DEF|84|79|356.463.575.154.663.888.378.848|1981||185||84|21.37.44.6|
Rubén Olivera|MED|157|82|252.463.110.768.677.378.513.356.165.508|1983||184|18|157|19.24.44.6|
Paolo Cannavaro|DEF|84|81|601.663.416.781|1981||185||84|43|
Nicola Legrottaglie|DEF|84|83|128.694.218.728.575.463.154.794.7.201|1976||189|16|84|19.24.44.6|
Ivan Pelizzoli|GR|84|80|100.859.737.729.535.196.650.674|1980||195|2|84|19|
Jonathan Zebina|DEF|58|81|196.737.463.165.818.854.5|1978||189|1|58|19.24.44.6|
Francesco Tavano|AVA|84|77|681.285.888.737.18.118|1979||175||84|48|
Stefano Mauri|MED|84|81|575.165.871.510|1980||184|11|84||
Georgios Karagounis|MED|63|87|88.654.440.140.367|1977||176|139|63|25.28.32.37.8|
Luciano (1975)|MED|16|76|653.154.218.440|1975||180||16||
Luca Antonini|DEF|84|82|650.694.7.768.575.674.794.285.378.97.18|1982||182||84|11.48.58.6|
Georgios Samaras|AVA|63|84|414.551.204.924.45.779.769|1985||192|81|63|25|E
Sotiris Kyrgiakos|DEF|63|83|654.717.281.532.933.828|1979||193|61|63|25.43|
Ricardo Costa|DEF|127|83|325.933.888.530.642.321.390.847.149|1981||183|22|127|20.28.31.40.5.50.58.59.7|
Ramiro Funes Mori|DEF|4|79|250.734.299.905.52.185.296|1991||193||4|11.38.43.45.49.59|
Rob Green|GR|76|83|616.925.698.516.425.215|1980||187|12|76|19.48|
Per Kröldrup|DEF|43|81|871.299.356.674.629|1979||194|33|43||
François Clerc|DEF|58|80|541.854.612.763.368|1983||187|13|58|4|
Oguchi Onyewu|DEF|45|83|323.822.610.7.334.812.586.698.789.213|1982||198|69|45|28.6|
James Collins|DEF|123|83|197.925.99.447|1983||188|51|123||
João Pereira|DEF|127|83|140.380.163.812.888.856|1984||172|40|127|30.39.40.47.7|
Tom Huddlestone|MED|76|82|263.934.853.426|1986||188|4|76|12.19.38|
Hilário|DEF|127|84|604.27.325.295.891.597.215.812|1975||189|1|127|11.12.2.25.30.31.43.50.58.59.7|
Carlos Martins|MED|127|80|812.27.140.390.137.120|1982||173|17|127|20.25.30.32.40.50.7|
Rio Mavuba|MED|58|81|156.905.530.806|1984||172|13||24.4|
Xabi Prieto|MED|54|79|725|1983||185||54||
Andoni Iraola|DEF|54|82|101.144.609|1982||182|7|54|17.23|
Enzo Maresca|MED|84|83|924.463.154.679.356.787.632.586.768.652.416|1981||180||84|11.59.6|
Alessandro Rosina|AVA|84|78|663.416.848.947.209.794.201.128|1984||168|1|84||D
Nélson|DEF|127|78|765.149.140.142.638.652.72.120.137.9|1983||171|4|23|20.25.40|
Szabolcs Huszti|MED|73|82|352.323.947.281|1983||173|51|73||
Gonzalo Rodríguez|DEF|4|79|771.905.356|1984||182||4|17.49|
José Sosa|MED|4|84|296.133.601.561.110.141.7.856.351|1985||183|19|4|3.5.51.54.55|
Ron-Robert Zieler|GR|2|84|552.615.518.298.231|1989||188|6|2|10.2.29.44.60|
Marek Cech|DEF|52|82|806.325.924.856.154.149.232|1983||183|52|22|28.7|
Mattia Cassani|DEF|84|81|463.768.416.652.356.378.663|1983||184|11|84|44.6|
Andrea Dossena|MED|84|82|416.858.871.532.601.652.828.526|1981||180|10|84|43|
Federico Balzaretti|DEF|84|84|848.890.794.463.356.652.737|1981||179|16|84|19.24|
Charles N'Zogbia|AVA|58|81|610.929.99|1986||170|2|58|45|D
Alessandro Diamanti|MED|84|82|694.285.356.18.925.165.154.921.100.652.673.927|1983||180|17|84||
Guillaume Hoarau|AVA|58|81|511.647.156.942.329|1984||192|5|133|11.4|
Michel Vorm|GR|124|81|882.830.853|1983||183||124|31.42.54|
Jonás Gutiérrez|MED|4|84|917.549.610.616.262.254.438.125|1983||185|22|4||
Markus Rosenberg|AVA|142|82|550.406.32.923.709.924|1982||184|33|142||
Joan Verdú|MED|54|82|127.262.291.142.356.523|1983||178|11|54|22.3.42.58|
José Manuel Jurado|MED|54|81|721.110.549.809.921.291.36.245|1986||176||54|59|
Steven Davis|MED|79|84|99.367.717.805|1985||170|140|79|42|
Aritz Aduriz|AVA|54|83|144.101.174.886.549.888|1981||182|13|54|17.23.35|
Guillermo Ochoa|GR|111|83|77.4.586.390.822.764.21|1985||183|153|111||
Graziano Pellè|AVA|84|82|513.201.241.209.22.663.768.354.805|1985||194|20|84|21.54|
Germán Denis|AVA|4|80|209.95.228.438.601.871.100|1981||182|5|4||
Sebastian Larsson|MED|142|85|93.145.828.426.14|1985||178|133|142|15|
Patrick Herrmann|AVA|2|79|158|1991||177||2|27.29|D
Cheik Tioté|MED|39|81|80.735.334.610|1986||180||39|43|
Kevin Doyle|AVA|78|82|720.934.698.243.229|1983||182|62|78||
Marcel Schmelzer|DEF|2|83|157|1988||181|16|46|29.33.5.53|
José Enrique|DEF|54|82|523.203.888.905.610.532.779|1986||184||54|33|
Max Kruse|AVA|2|81|923.817.365.158.933.351.874.750|1988||181|14|2|29|
Javi García|MED|54|83|721.638.140.551.947.142.149.946|1987||186|2|54|12.19.2.23.28.3.30.37.7|
Ola Toivonen|MED|142|83|256.550.648.731.828.854.556|1986||190|64|142||
Shane Long|AVA|78|83|720.924.426.805.160|1987||180|88|78||
Winston Reid|DEF|118|83|566.925.476.164|1988||190|33|118||
Felipe Caicedo|AVA|49|83|132.551.812.586.523.535.47.291.510.378.440|1988||183|68|49|28.37.40|
Matías Fernández|MED|29|80|227.905.812.356.7.605.459|1986||178||4|17.40|
Christian Träsch|MED|2|81|298.933.315.62|1987||180|10|2|29|
Jozy Altidore|AVA|45|83|608.905.426.176.22.828.849|1989||185|110|45|42|
Sandro Wagner|AVA|2|80|133.923.0.418.421|1987||194||2|5|
Beñat Etxebarria|MED|54|79|101.144.143.142.544|1987||177|4|54||
Diego Alves|GR|16|82|112.72.888.357.203|1985||188|10|16|30.39.50|
Nils Petersen|AVA|2|80|133.923.365|1988||189||46|27.29|
Kevin Großkreutz|DEF|2|84|157.371.298|1988||186|6|2|29.33.5.60|
Adel Taarabt|MED|102|82|521.853.698.367.7.140.378.51|1989||185|25|102|18.30.46.7|
Federico Fazio|DEF|4|83|787.853.737.764|1987||195|10|4|31.41.42.44.49.59|
Gregory van der Wiel|DEF|124|84|32.647.351.196.849|1988||182|46|124|11.4.54|
Jonathan Biabiany|AVA|58|81|218.440.575.663.768|1988||176||58|21.31.37.43.58.6|D
Kevin Trapp|GR|2|84|0.281.647.662|1990||189|9|2|27.29.4.53.59|
Ryan Shawcross|DEF|76|81|552.744.825.442|1987||191|1|76|10.2.20.58|
Zoran Tosic|AVA|145|83|665.552.231.194.644|1987||171|76|88|10|D
Sergio Asenjo|GR|54|82|887.886.110.586.905|1989||189|1|54|23.35.36.51.59|
Patrick van Aanholt|DEF|124|79|236.25.215.610.929.518.907.828.243.371.648.807|1990||175||124|45.54|
Mikel San José|MED|54|83|101.532.145|1989||188|7|54|17.23.43|
Henrique|DEF|16|85|235.653.524.127.709.601.358.120|1986||185|7|16|26.3.43.50.58|
Jay Rodríguez|AVA|76|79|175.129.805.924|1989||185||76|42.53|
André Santos (1983)|DEF|16|82|355.357.112.234.351.93.395|1983||182|24|16|15.50|
Álvaro Pereira|DEF|157|82|191.325.440.834.296.379|1985||182||157|12.17.28.55.59.7|
Leandro Castán|DEF|16|81|112.234.737.768.848.196.892.396|1986||184|2|16|50|
Cristian Ansaldi|DEF|4|83|611.745.947.110.378.440.848|1986||181|5|4|12.21.51|
Miguel Layún|DEF|111|83|701.100.77.921.325.787.905.577|1988||178|71|111|32.35.39.52.7|
Ignacio Camacho|MED|54|80|104.110.586.933|1990||182|1|54|59|
Junior Hoilett|AVA|25|81|750.146.817.698.197.720.889.26.419.831|1990||174|68|25||E
Cristhian Stuani|AVA|157|82|252.729.67.523.709.291.565.386|1986||186|50|157|42|
Jonathan dos Santos|MED|111|87|127.905.499.77|1990||172|57|111|26.3.58|
Senad Lulic|MED|21|78|391.942.510|1986||183||88|48|
Maynor Figueroa|DEF|72|82|929.426.229.250.423|1983||180|181|72|45|
Víctor Ruiz|DEF|54|79|291.601.888.905.141.142|1989||184||54|22.39.42|
Tomas Hubocan|DEF|52|82|947.276.553.856.633|1985||183|73|22||
Étienne Capoue|MED|58|81|854.853.921.905|1988||189|7|58|12.24.38.42.59|
Néstor Araújo|DEF|111|76|185.778.203.77|1991||187||111||
Leonardo Pavoletti|AVA|84|80|781.461.890.378.601.196|1988||186||84|11.21.44.48|
Ashley Williams|DEF|123|84|824.830.299.825.168|1984||183|86|76|38.45|
Steven Zuber|AVA|143|84|391.194.421.298.281.12.338.113|1991||181|56|143||E
Michu|AVA|54|80|723.203.719.830.601|1986||185|1|54|43|
Ander Iturraspe|MED|54|80|101.144.291|1989||187|2|54|17|
Clément Grenier|MED|0|80|541.737.398.731.549.709|1991||186|5||24|
Pierre-Michel Lasogga|AVA|2|79|933.524.418.408|1991||189||2|5|
David Ospina|GR|33|87|106.612.93.601.52|1988||183|130|33|11.15.20|
James Chester|DEF|123|85|552.675.684.198.426.924.99.825.263|1989||180|35|76|10.2.20.58|
Souza (1989)|MED|16|78|892.325.395.834.351.36.141.122.131|1989||188||16|7.11.12.30.31.55.59|
Gaël Kakuta|MED|129|84|215.367.155.266.907.510.719.787.262.75.521.11|1991||173||58|11.12.2.43.58|
Juraj Kucka|MED|52|84|806.378.7.856.663.921|1987||186|112|22|44|
Robin Olsen|GR|142|79|550.642.233.737.196.299.790.99|1990||196||142|11.44|
Marvin Martin|MED|58|80|330.530.266.820|1988||171|15|58||
Jeroen Zoet|GR|124|80|648.707.882.810.22|1991||189|11|124|54|
Daniel Ginczek|AVA|2|77|157.898.817.620.298.933|1991||191||2|33.5|
Joselu|AVA|54|85|203.721.421.281.825.262.610.66.291.43|1990||192|18|2|11.3.31.43.58.8|
Pascal Groß|MED|2|82|421.479.315.166.157|1991||181|12|2||
Davide Santon|DEF|84|83|440.209.610.737|1991||187|8|84|31.37.41.43.44.58.6|
Timo Horn|GR|2|78|231.767.898|1993||192||2||
Yunus Mallı|MED|152|78|548.933.874.856.484.492|1992||179||2|53|
Loris Karius|GR|2|84|548.532.141.874.610|1993||187||2|33.53|
Stefan Ortega|GR|2|81|91.1.551.617.632|1992||185||2|2.26.55.58|
Hiroshi Kiyotake|MED|86|83|208.620.787|1989||172|43|86||
Davide Astori|DEF|84|83|7.238.196.737.356|1987||189||84|11.21.37.58|
Dedryck Boyata|DEF|20|84|551.155.334.204.418.224|1990||188|31|20|2.37.45|
Jeffrey Bruma|DEF|124|82|215.518.408.648.933.548.484.414.707|1991||189||124|11.12.2.43.54.58|
Eliaquim Mangala|DEF|58|83|822.325.551.888.299.763.292|1991||188|8|58|2.24.26.41.55.7|
Steve Cook|DEF|76|78|166.160.617|1991||185||76||
Matt Ritchie|MED|51|79|692.831.160.610|1989||173||76|43|
Aaron Cresswell|DEF|76|79|447.925.825|1989||170||76|35.39.53|
Christian Günter|DEF|2|79|365|1993||184|1|2|27.29|
Robin Knoche|DEF|2|79|933.874.620|1992||190||2||
Filip Djuricic|MED|145|82|414.140.548.805.80.768.139.781.654.17|1992||181|44|88|30.43.46.7|
Marko Dmitrovic|GR|145|82|294.213.9.753.787.186.291|1992||194|19|88|35.59|
Denis Cheryshev|AVA|134|89|721.787.905.888.895.656.968|1990||173|33|154|11.19.43.58.59|E
Matej Vydra|AVA|32|81|126.871.224.921.924.720.263.175.902|1992||180|48|22||
Tiquinho Soares|AVA|16|72|79.597.908.325.632.159.777.570|1991||187||16|39.52.7|
Jordy Clasie|MED|124|82|354.300.805.224.22|1991||169|17|124|13.54.59|
Jeffrey Gouweleeuw|DEF|124|76|414.22.115|1991||187||124||
Sam Johnstone|GR|76|83|628.552.783.920.939.270.695.99.924.243.934|1993||193||76|10.31.53.54.55|
Nampalys Mendy|MED|135|79|587.612.518.521.921|1992||167||58|44|
Ahmed Hegazy|DEF|47|79|356.673.924.46.590|1991||190||47|20|
Bruno Martins Indi|DEF|124|83|354.325.825.22.807|1992||187|36|127|13.32.35.39.54|
Benito Raman|AVA|20|75|465.134.135.470.797.822.302.80.769.471|1994||172||20||
Cédric Soares|DEF|127|85|812.27.805.440.93.367.834|1991||169|34|2|16.21.25.28.34.38.8|
Rachid Ghezzal|AVA|5|80|587.541.518.356.141.180|1992||182|19|58|25.34.41.44|D
Kaan Ayhan|MED|152|81|281.302.781.371|1994||184||2||
Mislav Orsic|AVA|40|77|810.404.873.277.805.856.651|1992||178||40||E
Yannick Gerhardt|MED|2|78|231.933|1994||184||2||
Diafra Sakho|AVA|135|78|323.866.925.731.176|1989||184||135|35.39|
Odysseas Vlachodimos|GR|63|81|298.654.140.617.610.787|1994||191|42|2|18.30.39.46.7|
Cristiano Biraghi|DEF|84|80|100.440.461.222.201.218.390.674.356.848|1992||184||84|21.43|
Mark Flekken|GR|124|80|394.365.164.524|1993||194|7|124||
Téji Savanier|MED|58|74|5.622.578|1991||172||58||
Benjamin Stambouli|MED|58|80|578.853.647.29.820.323|1990||180||58|36.4.42.53|
Robbie Brady|MED|78|80|552.426.616.175.160.695|1992||178||78|10|
Charlie Austin|AVA|76|79|831.175.698.805.924|1989||188||76||
Joel Campbell|AVA|38|84|93.319.142.632.905.812.366.527.577.111|1992||178|93|38|15.30|
Dan Burn|DEF|76|81|367.939.145.929.166.610|1992||201||76||
Zé Luís|AVA|23|77|380.163.348.809.325.535.61.411.346.21|1991||170|12|23|32.34.46.52.7|
Youssouf Sabaly|DEF|135|77|647.950.600.156.142|1993||174||58|44.52|
Bruma|AVA|127|81|812.371.375.725.705.648.632.351.163.140.90|1994||173|12|70|18.25.28.30.31.37.45|E
Josip Drmic|AVA|143|82|338.620.524.158.408.616.404.277|1992||182|35|143||
Valon Berisha|MED|89|78|901.767.510.302.820.557.501.338|1993||181||142||
Hany Mukhtar|MED|2|77|418.140.767.172.603|1995||174||2|46.7|
Marco van Ginkel|MED|124|80|907.215.7.825.648.149|1992||186||124|31.54|
Nicolae Stanciu|MED|132|82|339.80.806.36.802.251.378.969|1993||170|90|132||
Ivan Cavaleiro|AVA|3|78|140.262.587.934.367.65.530.704.821.847.338|1993||175||127|25.30.34.35.38.39.4.41.45.55.7|E
Marco Friedl|DEF|165|82|133.923|1998||187|13|165|5|
Dyego Sousa|AVA|127|72|520.847.690.554.163.140.345.72.9.597|1989||190||16|18.9|
Jeffrey Schlupp|MED|60|82|518.164.243.204.616|1992||178|20|2|2.44|
Kevin Akpoguma|DEF|115|77|479.421.302|1995||192||2||
Grégoire Defrel|AVA|58|77|663.359.209.781.737.768|1991||179||58||
Soualiho Meïté|MED|58|80|15.530.949.587.156.848.7.140.238.642|1994||187||58|30.34.41.52|
Stefano Sturaro|MED|84|82|378.575.463.812.416.478.201|1993||178|1|84|37.6|
Silvan Widmer|DEF|143|79|390.871.132.548|1993||182||143||
Garry Rodrigues|AVA|23|79|525.309.10.283.642.371.46.351.632.82.799.87|1990||173||124|9|D
Kenny Lala|DEF|58|75|662.885.521.293.632.818|1991||178||58||
Vladimír Darida|MED|32|82|902.365.418.90.424|1990||170|79|22||
Arthur Masuaku|DEF|129|79|885.632.925.141.828.521|1993||179||58|25.38.40.55|
Anwar El Ghazi|AVA|124|80|32.530.99.299.648.548|1995||188||124|17.54|D
Vincenzo Grifo|AVA|84|78|421.274.365.158|1993||181||2|37|E
Britt Assombalonga|AVA|129|76|921.675.617.565.29.84|1992||177||161|39|
Bobby De Cordova-Reid|MED|85|74|216.168.628.684.197.367.518|1993||170||76|38|
Predrag Rajković|GR|145|80|294.542.820.549.46|1995||192|28|160|52|
Unai López|MED|54|78|725.101.144.186.719|1995||170||54|17|
Björn Engels|DEF|20|78|224.225.632.820.99.744|1994||193||20|45|
Chuba Akpom|AVA|76|81|93.164.236.617.426.166.516.797.642.565.32.530.447|1995||183||76|15.9|
Ivan Provedel|GR|84|76|218.681.673.575.696.285.461.810.510|1994||192||84|48|
André Silva|AVA|127|85|325.7.787.281.705.725.923.283|1995||185|53|127|25.32.35.39|
Sandro Ramírez|AVA|54|82|127.888.586.299.787.725.886.754.379.507|1995||175||54|3.36.39.58|
Milos Veljkovic|DEF|145|82|853.565.213.923.294|1995||184|35|143|12.42|
Roque Mesa|MED|54|78|507.830.787.186.886|1989||171||54|35|
Danny Ward|GR|123|79|935.532.26.425.518|1993||191||123|13.33|
Ruben Aguilar|DEF|58|75|763.393.15.578.587.521|1993||172||58|34|
Branco van den Boomen|MED|124|75|414.253.854.32.81|1995||189||124||
Romain Saïss|DEF|102|79|223.511.81.934.141.59.60|1990||190||58|18.39|
Oumar Niasse|AVA|135|80|757.33.535.299.426.197|1990||182||135|11.38.43.45|
Darwin Machís|AVA|159|76|726.390.908.430.754.186.871.245.317.886.183|1993||174||159|46|E
Jack O'Connell|DEF|76|76|146.742.164.790|1994||190||76||
Gustavo Gómez|DEF|122|80|528.506.150.7.653|1993||186||122|9|
Mijat Gacinovic|MED|145|82|911.281.87.421.654.12|1995||175|28|160||
Lucas Silva|MED|16|79|242.721.553.395|1993||182|4|16|11.12.43|
André Gomes|MED|127|85|140.888.127.299.530.230|1993||188|29|127|3.7.8.11.25.30.36.38.39.41.43|
Zack Steffen|GR|45|82|365.230.551.302.565.229|1995||191|26|45|2.26.42|
Jordan Torunarigha|DEF|115|77|418.465.408|1997||189||2||
Franck Honorat|AVA|58|75|612.330.223.763.818.158|1996||180||58||D
Atakan Karazor|MED|152|78|422.298|1996||191||2||
Aïssa Laïdouni|MED|151|79|81.352.874|1996||183|52|58||
Antonio Sanabria|AVA|122|82|781.737.813.142.378.848.238.443|1996||180|50|122||
Rui Silva|GR|127|76|597.390.142.812|1994||189||127|7|
Ozan Tufan|MED|152|79|176.351.65.921.426.856|1995||182||152|30.31.44.55|
Michel Aebischer|MED|143|82|942.154.681.874|1997||183|44|143||
Steve Mounié|AVA|12|76|578.622.425.818.115.65|1994||190||12||
Adam Marusic|DEF|109|74|470.472.510|1992||185||160|48|
László Bénes|MED|52|75|158.422.115.408.874.486|1997||181||52||
Nemanja Radonjic|AVA|145|82|737.244.294.553.418.140.848.549|1996||178|44|160|12.30|E
Carlton Morris|AVA|76|72|641.616.409.742.793.543.129.539|1995||185||76||
Angelo Fulgini|MED|113|73|885.81.548.521.61|1996||188||39||
Alexander Djiku|DEF|60|77|746.759.293.351.809|1994||182||58|31|
Finn Dahmen|GR|2|75|548.115|1998||186||2||
Niklas Dorsch|MED|2|80|133.415.465.115|1998||175||2|11.27.5.53|
Dennis Geiger|MED|2|75|421.26|1998||172||2||
Scott McKenna|DEF|51|74|26.617.233.507.277|1996||189||51|39|
Carlos Salcedo|DEF|111|77|766.219.356.281.843.849.317.185.577|1993||182||111||
Domingos Duarte|DEF|127|75|812.120.137.214.262.390.379|1995||191||127|30.32.38.47|
Mathias Normann|MED|116|75|152.166.576.741.616.276.56|1996||179||116||
Jonjoe Kenny|DEF|76|79|299.929.641.204.418.642|1997||176||76|11.38.43.45|
Rade Krunic|MED|21|83|416.285.7.351.294|1993||184|33|21|31.6|
Jiri Pavlenka|GR|32|76|126.802.923.642|1992||196||22||
Sandi Lovrić|MED|53|76|827.320.871.416|1998||180||165||
Viktor Johansson|GR|142|75|742.825|1998||186||142||
Emanuel Mammana|DEF|4|77|734.541.947.342.917|1996||184|1|4|37|
Gian Marco Ferrari|DEF|84|76|663.241.781.768|1992||189||84||
Daler Kuzyaev|MED|134|82|34.947.511.745.267|1993||182|51|134|37|
Théo Bongonda|AVA|129|78|949.203.856.377.245.809|1995||177||20||D
Kenedy|AVA|16|83|358.215.921.610.379.390.357.886.649|1996||182||16|2.21.31.42.43.48.53|E
Moussa Marega|AVA|100|79|75.554.325.908|1991||186|1|58|32.39.52.7|D
Robin Hack|AVA|2|76|421.620.91.158|1998||178||2||E
Fran Navarro|AVA|54|73|469.380.325.632.163|1998||179||54|52|
Jens Stage|MED|43|74|25.233.923|1996||187||43||
Lys Mousset|AVA|58|76|511.160.790.764.898.622|1996||184||58||
Sammie Szmodics|MED|78|75|168.675.146.447.263|1995||168||76||
Fodé Ballo-Touré|DEF|135|79|530.587.7.367.511.323|1997||182||58|17.34.38.6|
Walter Benítez|GR|4|76|612.648.243|1993||191||4||
Hamari Traoré|DEF|100|75|662.529.820.731.725|1992||175||100||
Pol Lirola|DEF|54|78|463.781.356.553.283.366.416|1997||183||54|12|
Mergim Berisha|AVA|2|72|318.767.501.752.351.115.421.0|1998||186||2|55|
Reece Oxford|DEF|76|78|925.720.158.115|1998||190||76|35.39|
Azor Matusiwa|MED|124|76|32.253.312.820.731.447|1998||178||124||
Myrto Uzuni|AVA|1|72|592.352.390.116|1995||178||1||E
Romain Perraud|DEF|58|74|612.662.818.805.142.530|1997||173||58||
Elijah Adebayo|AVA|76|73|216.831.823.920.539|1998||193||76||
Hannes Wolf|AVA|165|76|318.767.705.158.830.609|1999||179||165||D
Mahdi Camara|MED|58|74|763.819.818.731|1998||178||58||
Georgios Masouras|AVA|63|75|656.632.898.48|1994||184||63||E
Gustavo Scarpa|MED|16|78|358.834.653.617.632.112|1994||176||16||
Orbelín Pineda|MED|111|80|701.219.185.203.12.577|1996||168|94|111||
Akram Afif|AVA|26|82|59.466.813.905|1996||177|129|26|20.35.37|E
Alex Král|MED|32|79|840.802.809.925.874.291|1998||187||52|46|
Abel Ruiz|AVA|54|81|163.386|2000||182||54|47|
Oliver Burke|AVA|51|77|617.162.705.924.204.66.790.568.923.145.874|1997||189||51|39|
William|DEF|16|76|443.933.242|1995||176||16||
Grady Diangana|AVA|129|77|925.924.283|1998||180||129||D
Michaël Cuisance|MED|58|81|158.133.553.895.768|1999||181||58|12.27.5.53|
Luca Ranieri|DEF|84|77|356.359.97.760.764|1999||187||84||
Junya Ito|AVA|86|80|483.377.820|1993||176|3|86||D
Mert Müldür|DEF|152|79|718.781.351|1999||188||165|31|
Faitout Maouassa|DEF|58|74|19.731.622.224.578.521.390|1998||170||58||
Cyril Ngonge|AVA|20|74|225.224.707.312.416.601.848.291|2000||179||20|21.6|D
Isi Palazón|AVA|54|71|722.688.719|1994||169||54||
Josip Juranovic|DEF|40|74|405.517.204.874|1995||175||40||
Luís Maximiano|GR|127|76|163.812.390.510.72.590|1999||190||127|30.32.47.48.7|
Stanley Nsoki|DEF|58|77|647.612.224.421.874|1999||184||58|4.53|
Gabriel Brazão|GR|16|76|663.440.67.723.242.760.841.777|2000||192||16|21|
Henry Onyekuru|AVA|115|76|466.299.80.371.587.632.29.42.376|1997||175||115|34|E
Ilia Gruev|MED|17|76|923.516|2000||185||17||
Jakub Moder|MED|126|78|514.166.354|1999||190||126||
Petar Musa|AVA|40|76|802.804.874.149.140.250|1998||190||40|28.7|
Josep Martínez|GR|54|80|127.507.705.378.440|1998||191|1|54|36.6|
Nedim Bajrami|MED|1|77|391.285.781.717|1999||180||143||
Mads Roerslev|DEF|43|75|406.233.894.164.933.805|1999||184||43||
Zakaria Aboukhlal|AVA|102|81|648.22.854.848|2000||179|21|124|13|D
Adam Ounas|AVA|5|81|156.601.612.196.241.530|1996||172|9|58|11.21.41.48.6|D
Keito Nakamura|AVA|86|81|372.334.797.501.820.541|2000||180|30|86||E
Zian Flemming|AVA|124|77|645.589.362.568.175|1998||185||124||
Koki Machida|DEF|86|77|482.875.421|1997||190||86||
Joe Worrall|DEF|76|75|617.717.141.175|1997||190||76|25.39|
Hugo Cuypers|AVA|20|75|822.706.288.4.632.471.465.217|1997||185||20||
Frank Onyeka|MED|115|77|566.164.115.236|1998||183||115||
Jens Petter Hauge|AVA|116|82|152.24.7.281.465|1999||185||116|41.52.59|E
Matt Turner|GR|45|81|607.93.617.243.541|1994||191|23|45|16.39.42|
Ryan Yates|MED|76|73|617.793.783|1997||190||76|39.55|
Alexander Prass|MED|165|73|318.827.421|2001||180||165||
Patrick Osterhage|MED|2|72|898.365|2000||184||2||
Josha Vagnoman|DEF|2|77|408.298|2000||187||2||
Jovane Cabral|AVA|23|78|812.510.764.632.295|1998||176||23|32.47.48.7|E
Javi Galán|DEF|54|76|246.754.203.110.725.638|1994||172||54|51|
Yehvann Diouf|GR|135|76|862.820.612|1999||190||58||
Alexander Bah|DEF|43|79|835.802.140|1997||183||43|18.31.38.7|
Anthony Caci|DEF|58|74|293.548|1997||184||58||
Benedict Hollerbach|AVA|2|74|874.548|2001||181||2||
Tijjani Noslin|AVA|124|73|362.416.510|1999||181||124|48|D
Mostafa Mohamed|AVA|47|80|371.600|1997||185|38|47|20|
Willem Geubbels|AVA|58|77|541.587.600.331.662|2001||186||58|34|
Brian Rodríguez|AVA|157|77|677.500.72.77|2000||174||157|17|E
Ben Johnson|DEF|76|77|925.551.447|2000||175||76|2.35.39|
Jens Cajuste|MED|142|71|951.566.820.601.447|1999||188||142||
Marcos Antônio|MED|16|74|292.788.510.642.834|2000||169||16|41.48|
Anass Salah-Eddine|DEF|102|80|334.32.737.648|2002||181||124|44|
Lilian Brassier|DEF|58|74|885.818.731.553.281|1999||186||58||
Lorenzo Pirola|DEF|84|78|440.580.764.632|2002||188||84|21|
Jesús Areso|DEF|54|75|638.144.174.101|1999||183||54||
Anass Zaroury|AVA|102|78|536.702.175.426.521.654|2000||176|4|20|43.46|E
Nehuén Pérez|DEF|4|79|110.89.345.390.871.325|2000||184||4|51.7|
Ben Cabango|DEF|123|78|830|2001||188||123||
Emil Holm|DEF|142|74|431.835.810.100.154.463|2000||191||142|59|
Aster Vranckx|MED|20|76|471.933.7.781|2002||183||20||
Tomás Araújo|DEF|127|79|140.380|2002||187||127|18.31.38|
Joe Scally|DEF|45|79|609.158|2002||184||45||
Luke Thomas|DEF|76|75|518.790.565|2001||181||76||
Brandon Williams|DEF|76|81|552.616.447|2000||171||76|47|
Hidemasa Morita|MED|86|82|485.776.812.426|1995||177|40|86|47.7|
Tanguy Nianzou|DEF|58|80|647.133.787.530|2002||191||58|27.35.4.5.53.59|
Tomas Cvancara|AVA|32|74|453.806.158.84.204|2000||190||32||
Zaidu Sanusi|DEF|115|75|380.776.325|1997||182||115|52.7|
Sergio Carreira|DEF|54|73|203.188.283|2000||170||54||
Georgios Vagiannidis|DEF|63|75|654.440.797.812|2001||181||63|46|
Yusuf Demir|AVA|165|79|718.127.371.132|2003||173||165||D
Teden Mengi|DEF|76|80|552.263.145.539|2002||186||76||
Jon Moncayola|MED|54|76|638|1998||189||54||
Devyne Rensch|DEF|124|79|737.32|2003||176||124|31.41.44|
Sékou Mara|AVA|58|75|156.805.293.15|2002||183||58||
Kristian Thorstvedt|MED|116|76|901.377.781|1999||190||116||
Kirian Rodríguez|MED|54|73|507|1996||180||54||
Yanis Begraoui|AVA|102|75|15.854.666.292|2001||179||58||
Jean Lucas|MED|16|77|357.777.541.818.587.279|1998||181||16||
Ísak Jóhannesson|MED|82|69|614.233.302.231|2003||180||76||
Osame Sahraoui|AVA|102|65|916.414.530|2001||164||116||E
Samuel Iling-Junior|MED|76|79|460.463.99.154.565.924.681|2003||182||76||
Charlie Patino|MED|76|78|539.93.147.830.262|2003||182||76|16|
Mattia Zanotti|DEF|84|73|440.331.320|2003||173||84||
Gonzalo Plata|AVA|49|82|438.812.886.59.357.276|2000||178|54|49|47.7|D
Mohamed Bayo|AVA|68|77|223.869.530.511.744.374|1998||188||58|41|
Ferran Jutglà|AVA|54|77|888.127.224.203|1999||175||54||D
Samuel Dahl|DEF|142|74|268.737.140|2003||174||142|18.31|
Adolfo Gaich|AVA|4|75|771.194.139.754.416.180.84.468.296|1999||190||4||
Isaac Price|MED|79|73|299.822.924|2003||175||76||
Dion Beljo|AVA|40|74|594.591.115.718.277|2002||195||40||
Lucas Gourna-Douath|MED|58|75|763.767.737.511|2003||185||58|44|
Kasey McAteer|MED|78|73|518.447|2001||177||76||
Andrew Omobamidele|DEF|78|75|616.617.293|2002||188||78|39|
Urko González de Zárate|MED|54|74|66.725.291|2001||189||54||
Giovanni Fabbian|MED|84|77|440.729.154.356|2003||186||84||
Imrân Louza|MED|102|76|600.921.319|1999||178||58|44|
Tomás Händel|MED|127|71|908.294|2000||180||127||
Eren Dinkçi|AVA|152|74|923.415.365|2001||188||2||D
Issa Kaboré|DEF|18|81|471.551.862.553.539.140.923.935|2001||180||18|18.26|
David Møller Wolfe|DEF|116|70|757.22.934|2002||185||116|55|
Rafa Marín|DEF|54|75|721.66.601.905|2002||191||54|21.6|
Juan|AVA|16|74|834.805.402|2002||184||16||
Jordan James|MED|123|76|145.731.518|2004||190||76||
Kayky|AVA|16|76|358.668.279.807.443|2003||175||16||D
Marquinhos (2003)|AVA|16|79|834.93.616.600.358.242|2003||175||16|16|D
Tanner Tessmann|MED|45|78|250.895.541|2001||188|14|45|41.42|
Facundo Pellistri|AVA|157|83|677.552.66.390.654|2001||174|37|157|17.43.46|D
Anthony Rouault|DEF|58|74|854.298.731|2001||186||58||
Aljoscha Kemlein|MED|2|74|874.817|2004||185||2||
Thomas Kristensen|DEF|43|73|25.871|2002||198||43||
Hugo Bueno|DEF|54|77|934.354|2002||180|1|54|35.39.55|
Badredine Bouanani|AVA|5|74|612.319.298|2004||177||58||D
Álex Valle|DEF|54|75|523.127.204.232|2004||178||54||
José Ángel Carmona|DEF|54|74|787.283.379|2002||180||54|35|
Lorenz Assignon|DEF|58|73|746.731.175.298|2000||179||58||
Luiz Júnior|GR|16|73|570.345.905|2001||192||16||
Bryan Zaragoza|AVA|54|79|726.390.133.638.203.737.291|2001||164|3|54|53|E
Yerson Mosquera|DEF|33|74|106.934.221.905|2001||187||33|55|
Ilan Kebbal|AVA|5|72|820.869.662|1998||169||58||D
Luca Koleosho|AVA|84|77|291.175.662|2004||175||45||D
Justin Devenny|MED|79|75|243|2003||178||51||
Abdallah Sima|AVA|135|76|802.166.825.81.717.818.521|2001||188||135||E
Mert Kömür|MED|2|74|115|2005||183||2||
David Datro Fofana|AVA|39|79|576.215.874.175.402.478.293.786|2002||182||39|42|
Bence Dárdai|MED|73|62|418.933|2006||189||2||
Tom Rothe|DEF|2|74|157.422.874|2004||193||2||
Jan-Carlo Simić|DEF|145|75|7.80.46|2005||186||2|52|
Bradley Locko|DEF|58|75|820.818|2002||180||58||
Alessandro Marcandalli|DEF|84|70|378.728.895|2002||195||84||
Otávio (2002)|DEF|16|72|357.345.325.662|2002||178||16|52|
Jackson Tchatchoua|DEF|24|74|702.416.934|2001||186||20|55|
Stefan Bajcetic|MED|54|81|532.767.507|2004||185||54|13.33|
Alessandro Circati|DEF|8|78|663|2003||190||84||
Alejo Veliz|AVA|4|77|738.853.787.291.279|2003||187||4||
Hugo Sotelo|MED|54|74|203|2003||180|1|54|43|
Martim Fernandes|DEF|127|74|325|2006||181||127|52.7|
Héctor Fort|DEF|54|81|127.283.725|2006||185||54|27.3|
Marc Guiu|AVA|54|80|127.215.828.705|2006||190||54||
Kassoum Ouattara|DEF|58|74|75.587|2004||176||58||
Saël Kumbedi|DEF|58|75|511.541.933|2005||175||58|41|
Andrés Gómez|AVA|33|75|567.766.731.892|2002||171||33||E
Romain Esse|AVA|76|73|568.243.236|2005||178||76||D
Mats Rots|DEF|124|72|334.417.421|2006||178||124||
Valentín Gómez|DEF|4|74|917.142|2003||185||4||
Alex Tóth|MED|73|73|352.160|2005||181||73||
Giovane|AVA|16|74|234.416.601|2003||184||16|21.55|
Lorran|MED|16|73|357.681|2006||173||16||
Ilyas Ansah|AVA|2|72|750.874.426|2004||197||2||
Jan Ziolkowski|DEF|126|73|517.737|2005||194||126||
Kendry Páez|MED|49|79|438.215.293.734|2007||177||49||
Wagner Pina|DEF|23|75|137.292.856|2002||180||127||
Souza (2006)|DEF|16|73|777.853|2006||183||16||
Harrison Armstrong|MED|76|71|299.263.695|2007||185||76||
Louis Leroux|MED|58|71|600|2006||184||58||
Abdelhamid Ait Boudlal|DEF|102|74|731.75|2006||190||102||
Aarón Anselmino|DEF|4|78|150.215.157.293|2005||186||4||
Gessime Yassine|AVA|102|74|316.869.293|2005||172||58||D
Ibrahima Ba|DEF|135|68|885.345|2005||190||135||
Brian Madjo|AVA|76|75|323|2009||193||76||
Vicente Lucas|DEF|127|76|120.137|1935||0|20|||
Oceano|MED|127|79|597.812.725.854|1962||175|54||7.20|
Sá Pinto|AVA|127|81|765.812.725.822|1972||178|45||7.20.25.32.40|
Jorge Cadete|AVA|127|79|812.909.165.204.203.162.140.295.664|1968||177|33||20.28|
Simon Jentzsch|GR|2|76|479.1.933.115|1976||196|2|2|29.5|
Clemens Fritz|DEF|2|82|479.524.923|1980||183|22|46|29|
Nelson Valdez|AVA|122|84|923.157.430.745.888.47.632.281.784|1983||178|77|122|33.5|
Andreas Ivanschitz|MED|165|82|718.767.654.548.523.784.902|1983||184|69|165|28.32.53|
Roland Linz|AVA|165|80|1.117.612.827.149.163.391.375.137.120|1981||185|39|165|30|
Robert Huth|DEF|2|84|215.565.825.518|1984||191|19|46|2.29.31.44|
David Bellion|AVA|58|79|828.552.925.612.156.727|1982||181||58|10.20.4|
Carlo Cudicini|GR|84|82|7.232.694.510.215.853.499|1973||185||84|19.2.31.44.50.58.6|
Luke Young|DEF|76|81|853.213.565.99.698|1979||180|7|76||
Shola Ameobi|AVA|115|80|610.825.375.374.243.155|1981||191||115||
Jonathan Walters|AVA|78|81|146.155.426.239.129.783.935.447.825.175|1983||183|54|76||D
Brad Friedel|GR|45|85|610.172.371.230.532.146.99.853|1971||188|82|45|12.42|
Dudu Aouate|GR|83|80|545.542.709.262.549|1977||188|78|83||
Kieran Richardson|DEF|76|83|552.924.828.367.99|1984||173|8|76|10.2.20|
Massimo Maccarone|AVA|84|79|575.694.7.890.285.565.663.794.652.768|1979||180|2|84|48.6|
Matthew Etherington|MED|76|79|675.853.162.925.825|1981||178||76||
Gary Caldwell|DEF|51|82|610.419.236.263.204.929|1982||180|55|51|45|
Gary O'Neil|MED|76|78|692.920.197.565.925.698.616|1983||178||76||
Simon Davies|MED|123|83|675.853.299.367|1979||178|58|123||
Kader Mangane|DEF|135|74|606.942.521.731.45.828.464.368.293|1983||193||135||
Flavio Roma|GR|84|80|510.895.359.218.679.587.7|1974||191|3|84|24.44.6|
Gaël Givet|DEF|58|81|587.553.146.5.950.855|1981||181|12|58|24.4|
Jérémie Bréchet|DEF|58|79|541.440.725.330.648.862.156.368|1979||187|3|58|4|
Youssouf Hadji|AVA|102|78|19.746.731.38.282|1980||183|64|102||
Florent Balmont|MED|58|77|541.854.612.530.266|1980||167||58|4|
Camel Meriem|MED|58|77|330.156.553.587.90.5.612.87|1979||174|3|58||
Zoumana Camara|DEF|58|80|763.440.285.746.553.521.516.647|1979||182|1|58|11.4|
Rod Fanni|DEF|58|80|521.502.612.731.553.38.213|1981||186|5|58|17.24|
Matthieu Chalmé|DEF|58|76|530.156.4|1980||175||58|4|
Étienne Didot|MED|58|75|731.854.398|1983||175||58||
Cristian Brocchi|MED|84|83|7.416.440.356.510|1976||173|1|84|11.14.19.58.6|
Sergio Pellissier|AVA|84|75|848.890.218.760|1979||175|1|84||
Cesare Bovo|DEF|84|80|737.513.663.652.848.378.674|1983||181||84|19|
Dario Dainelli|DEF|84|79|575.285.513.165.416.356.378.218|1979||191|1|84||
Patrick Helmes|AVA|2|80|231.524.933|1984||182|13|2|29|
Christian Fuchs|DEF|165|83|898.548.518.212|1986||186|78|165|2.44.53|
Mario Santana|AVA|4|79|771.895.652.218.138.601.209.848.378.629.366|1981||178|7|4||
Luciano Zauri|DEF|84|79|100.218.510.356.768.674|1978||178|5|84|37|
Paolo Sammarco|MED|84|78|7.694.218.768.871.209.810.366|1983||183||84|11.58|
Lionel Scaloni|DEF|4|84|611.296.262.925.709.510.549.100|1978||182|7|4|17.3.60|
Alexis Ruano|DEF|54|79|586.379.888.787.141.66.36|1985||183||54||
Duda|MED|127|80|245.586.523.787|1980||175|18|127|20.28.50.59|
Matthew Taylor|MED|76|79|539.692.155.925.175.615.831|1981||178||76||
Alan Hutton|DEF|51|80|717.853.828.99.617.549.155|1984||185||51||
Hugo Almeida|AVA|127|85|519.325.149.923.141.209.497.85.12.405.27|1984||191|57|127|20.28.31.40.50.58.7|
Marc Planus|DEF|58|79|156|1982||180|1|58|4|
Arthur Boka|DEF|39|82|20.293.298.586.329|1983||166|84|39|5|
Nicky Shorey|DEF|76|79|526.720.99.617.367.924.168.692|1981||175|2|76||
Ben Foster|GR|76|86|825.168.935.552.921.145.924|1983||193|8|76|10.19.2.20.44.58|
Gaby Mudingayi|MED|20|80|875.465.848.510.154.440.283.209|1981||180|17|161||
Matt Jarvis|AVA|76|79|934.925.616.920|1986||173|1|76||E
Franco Brienza|MED|84|79|359.652.97.673.729.794.100.209.154|1979||172|2|84|21|
Antonio Floro Flores|AVA|84|79|601.768.673.871.378.390.781.218|1983||183||84|21.48|
Michele Pazienza|MED|84|79|359.871.356.601.463.154.728|1982||175||84|21.6|
Pasquale Foggia|MED|84|79|858.285.241.97.7.510.729.196.768.764|1983||167|3|84|11|
Marko Basa|DEF|109|78|624.512.535.530|1982||189|3|88|17.41|
Ilan|AVA|16|77|659.102.834.330.763.443.925.4.746.393|1980||181|3|16||
Nicolas Douchez|GR|58|79|511.502.854.731.647|1980||185||58|11.36.4.42.53|
Zoltán Gera|MED|73|83|352.924.367|1979||183|97|73||
Jean Beausejour|DEF|29|83|786.395.465.77.145.929.227.864|1984||198|109|29|17.45|
Jimmy Briand|AVA|58|80|731.541.398.156|1985||182|5|58||
Igor Budan|AVA|40|80|404.895.285.652.100.97.663.209|1980||185|6|88|44|
Raffael|AVA|16|78|338.418.275.158|1985||174||16||
Diego Pérez|MED|157|82|677.587.154|1980||177|89|157|24|
Artur Moraes|GR|16|78|667.242.235.209.794.737.163.140.639.265|1981||192||16|30.44.7|
Cristian Molinaro|DEF|84|81|764.463.794.298.663.848.366.895|1983||182|2|84|19.24.44|
Jaime Valdés|MED|29|79|128.356.513.100.812.663.227|1981||176|13|29|17|
Ferreira Pinto|AVA|16|75|673.209.100.890.513|1979||179||16||D
Milan Bisevac|DEF|145|80|294.521.885.647.541.510.323|1983||185|19|88|11|
Javier Arizmendi|AVA|54|79|104.110.709.262.888.779.379.606.549|1984||189|1|54||
Zdravko Kuzmanovic|MED|145|80|132.356.298.440.871.586|1987||186||143|37|
Nikica Jelavic|AVA|40|83|405.949.718.717.299.426.925.592|1985||188|36|88|45|
Emir Spahic|DEF|21|83|850.535.578.787.85.524.408|1980||186|94|88||
Ali Al-Habsi|GR|119|82|51.155.929.166.720.45.924|1981||194|136|119|30.45|
Abou Diaby|MED|58|84|15.93.553|1986||190|16|58|15|
Sidnei|DEF|16|78|443.140.141.291.262.142|1989||185||16|30.7|
Kiko Casilla|GR|54|86|245.291.307.721.516.283.379|1986||190|6|54|17.22.3.35.42.43.57.58|
James Morrison|MED|51|80|565.924|1986||180|46|76||
Max Gradel|AVA|39|79|518.160.516.763.854.799.374|1987||175||39||E
Kenwyne Jones|AVA|150|79|805.789.825.828.197.160.47|1984||188||150||
Christophe Jallet|DEF|58|82|210.319.647.541.612.75|1983||178|16|58|11.24.4|
Gojko Kacar|MED|145|82|911.418.408.208.115|1987||185|25|88||
Raffaele Palladino|AVA|84|81|139.764.463.18.378.663.241|1984||182|3|84|19.24.44.6|E
Ederson (1986)|MED|16|79|443.462.612.541.510.357|1986||181|1|16|30|
Lukasz Fabianski|GR|126|86|514.517.93.830.925|1985||190|57|126|15.35.39|
Michael Bradley|MED|45|84|608.414.158.99.218.737.849|1987||189|151|45||
Gabriel Paletta|DEF|84|83|125.532.150.663.7.100.580|1986||190|3|4|41.43.52|
Jonathan de Guzmán|MED|124|83|354.549.905.830.601.199.218.281.623.807|1987||173|14|25|43.48.54|
Anderson|MED|16|86|395.325.552.356.443|1988||176|8|16|2.7.10.20.28.54.58|
Tim Krul|GR|124|83|610.344.198.32.22.166.616.539|1988||193|15|124|43.54|
Alejandro Alonso|MED|4|76|427.156.587.763|1982||172||4|17|
David Nugent|AVA|76|80|178.695.692.175.518.565.263|1985||180|1|76||
Ismaël Bangoura|AVA|68|79|368.512.275.731.51.600.56|1985||174|52|68||
Vieirinha|DEF|127|83|325.520.642.933|1986||173|25|127|25.28.40.7.8.9|
Fernando Amorebieta|DEF|159|81|101.144.367.565.813.438|1985||192|15|159|17|
Robert Acquafresca|AVA|84|80|848.858.440.196.100.378.154.523|1987||185||84|31.37.6|
Miralem Sulejmani|MED|145|80|665.414.32.140.942|1988||178||88|30.7|
Chris Brunt|MED|79|81|565.789.924.168|1984||180|65|79||
McDonald Mariga|MED|128|82|663.440.725.508.723|1987||188|40|128|43.44|
Mario Suárez|DEF|54|81|104.110.886.203.549.356.921.888.719|1987||188||54|23.3.51.59|
Roberto|GR|54|80|104.110.384.779.140.632.291.586.925.66.886|1986||192||54|30.38.40.51.55.59|
Rubinho|GR|16|79|234.909.378.652.18.848.463|1983||186||16|21.48.6|
Daniel Carriço|DEF|127|80|629.812.720.787|1988||182||127|25.35.40.45.59|
Vincent Enyeama|GR|115|81|530.542|1982||180|101|115||
Kamil Grosicki|AVA|126|82|685.517.329.454.799.731.426.924|1988||180|100|126|25.38|E
Hugo Rodallega|AVA|33|80|260.577.109.605.929.367.33.856.257.279.437|1985||180|43|33|45|
Cata Díaz|DEF|4|80|738.185.228.150.379.110|1979||183|12|4|17.51|
Sylvain Marveaux|MED|58|78|731.610.398.319|1986||172||58||
Stéphane Ruffier|GR|58|80|587.763|1986||187|3|58|24|
Roman Neustädter|DEF|134|79|548.158.351.276.473|1988||190|2|154|29.33|
Fabrice Abriel|MED|58|77|647.786.75.398.319.553.612.885|1979||188||58|24.4|
Ricky van Wolfswinkel|AVA|124|79|907.882.812.616.763.142.132.334|1989||185|2|124|28.54|
Roger Johnson|DEF|76|78|936.197.145.934.789.925.213|1983||191||76||
Benoît Trémoulinas|DEF|58|81|156.275.763.787|1985||172|5|58|24.35.4.59|
Stefan Reinartz|MED|2|80|524.620.281|1989||189|3|2|29|
Esteban Granero|MED|54|82|379.721.698.725.291|1987||180||54|3.31|
Guilherme Siqueira|DEF|16|79|510.871.390.140.110.888|1986||181||16|30.51.7|
Bruno Soriano|MED|54|81|905|1984||184|10|54|23|
Stefan Radu|DEF|132|82|308.510|1986||183|13|132|48|
Sebastian Rode|MED|2|82|281.133.157|1990||179||2|26.5.53.59|
Luca Antonelli|DEF|84|81|7.128.663.378.285|1987||184||84|11.21.37.41.52.58|
Emiliano Insúa|DEF|4|82|150.532.371.812.110.719.298.499.69.710|1989||179|4|4|28.3.43.51|
Ljubomir Fejsa|MED|145|79|665.632.140.66|1988||185||88|18.30.31.34.38.46.7|
Tony Jantschke|DEF|2|78|158|1990||177||46||
Jordan Rhodes|AVA|51|77|641.447.164.425.146.565|1990||185||76||
Nicolás Spolli|DEF|4|75|611.201.737.199.218.378|1983||192||4|51|
Pedro León|AVA|54|80|722.523.886.379.721.865.753|1986||182||54|3.31|D
Walter Gargano|MED|157|82|252.601.440.663.577|1984||169||157|17.43|
Philipp Wollscheid|DEF|2|79|620.524.548.825.933.323|1989||194|2|2||
Carlos Zambrano|DEF|125|80|817.281.745.642.275.132.150|1989||185||125||
Markel Susaeta|AVA|54|81|101.144.372.557.544|1987||179|1|54|17|D
Agustín Marchesín|GR|4|75|506.778.77.325.203.395.150|1945||199||4|49.52.7|
Leonardo Ulloa|AVA|4|78|771.95.72.166.518|1986||185||4|2.44|
Oliver Baumann|GR|2|79|365.421|1990||187||2||
Lewis Holtby|MED|2|80|898.548.853.367.408.146.422.588|1990||176||2|12.29.42.53|
Álvaro González (1984)|MED|157|83|150.598.510.848.109|1984||176|72|157|17|
Pablo Piatti|AVA|4|80|296.72.888.291.283|1989||163||4|39.49.51|E
Mapou Yanga-Mbiwa|DEF|58|80|578.610.737.541|1989||184|4|130|24.4.41|
Marc Albrighton|MED|0|81|99.929.518.924|1989||175|||2.44|
Jake Livermore|MED|76|80|543.239.263.853.675.447.516.426.924|1989||181|1|76|12.38|
Adam Smith|DEF|76|80|853.936.160.543.516.568.263|1991||174||76|12|
James Tavernier|DEF|76|79|610.198.789.543.793.742.929.168.717|1991||175||76||
Álvaro Domínguez|DEF|54|82|104.110.158|1989||189|2|54|51.59|
Ashley Barnes|AVA|76|79|641.684.166.175.616|1989||186||76||
André André|MED|127|77|891.908.325.46|1989||177||127|25.32.35.39.45.46.52.7|
Vicente Guaita|GR|54|80|888.379.243.203.663|1987||191||54|43|
Douglas|DEF|124|76|334.276.856.812|1988||192||16|30|
Jaume Costa|DEF|54|78|888.245.905.549|1988||171||54|59|
Vicente Iborra|MED|54|81|103.523.787.518.905.632|1988||190||54|59|
Troy Deeney|AVA|76|76|920.921|1988||183||76|38|
Víctor Laguardia|DEF|54|76|258.779.507.721.66|1989||185||54|31|
Adrián San Miguel|GR|54|82|143.142.925.532|1987||190||54|2.33|
Josué (1990)|MED|127|77|748.325.669.884.668.176.163.371.639.33.517.235|1990||172||127|7.9.12.25.28.32.40.41.45.59|
Oliver Norwood|MED|79|80|236.552.198.783.425.720.166.367.790|1991||180||76|10.2|
Pablo Armero|DEF|33|81|183.653.871.601.925.7.357|1986||174||33|20.43|
Fredy Montero|AVA|33|77|260.784.567.812|1987||176|4|33|30.32.34.38|
Nemanja Gudelj|MED|145|83|588.22.32.812.787.379|1991||187|75|88|32.35.59|
Jefferson|DEF|16|74|833.397.653.292.358.621.812.163|1988||176||16|9.30.32.34.38.47|
Ben Mee|DEF|76|80|551.518.175.164|1989||180||76|2.37|
Martin Dúbravka|GR|52|83|289.804.806.610.552.175.853|1989||190|53|22|43|
Tino Costa|MED|4|79|666.578.888.809.378.356.771.72.106|1985||176|2|4||
Matt Phillips|AVA|51|79|936.147.790.698.924.641.823|1991||183|16|76||D
Etrit Berisha|GR|1|80|475.510.100.760.848.285.429|1989||194||88||
Ryad Boudebouz|MED|5|80|330.746.578.142.203.763.36|1990||177|22|58||
Christian Kabasele|DEF|20|80|466.471.538.377.921.871|1991||187|2|161|38.45|
Maya Yoshida|DEF|86|85|599.884.805.768.499|1988||189|126|86|42.44|
Chung-yong Lee|AVA|37|82|327.155.243.898.873.434|1988||180|89|37|40|D
Sergi Enrich|AVA|54|76|549.9.753.688.723|1990||180||54||
Hiroki Sakai|DEF|86|82|483.553.881.114|1990||185||86|12|
Marco Parolo|MED|84|83|232.416.209.663.510|1985||184|36|84|21|
Maicon (1988)|DEF|16|79|242.597.325.834.371.52.777.892.235|1988||191||16|7.12.28.32.35.41.55.59|
Emanuele Giaccherini|MED|84|84|209.463.828.154.601.218|1985||167|29|84|21.48.6|
Federico Fernández|DEF|4|80|296.601.379.830.610.283|1989||189||4|43.49|
Marco Silvestri|GR|84|74|575.218.728.650.196.516.416.871.768.285.238|1991||191||84|17|
James McClean|MED|78|82|828.929.924.825.935.971|1989||180|103|79||
Aleix Vidal|AVA|54|86|721.291.384.72.787.127.66|1989||175|5|54|3.35.36.59|D
Jonathan Kodjia|AVA|39|77|820.75.759.81.168.99.43|1989||191||58||
Rodrigo Battaglia|MED|4|77|427.710.163.582.738.214.812.66.549.112.150|1991||186|2|4|30.32.41.47.50.52.9|
Sergi Gómez|DEF|54|80|127.203.787.291.74|1992||185||54|26.35.59|
Alexander Schwolow|GR|2|77|365.91.418.874.413|1992||189||2||
Facundo Ferreyra|AVA|4|79|125.917.788.610.140.291.203|1991||183||4|18.30.41.46.7|
Connor Wickham|AVA|76|79|447.828.789.516.243|1993||191||76||
Youssef El Arabi|AVA|102|80|759.45.390.39.632.17.600.970|1987||183|47|58||
Óscar de Marcos|DEF|54|80|66.144.101|1989||182||54|17|
Rubén Pardo|MED|54|78|725.142.156.186.90|1992||182||54||
Pedro Obiang|MED|69|80|768.925.781|1992||185|9|54|35.39|
Leandro Cabrera|DEF|157|79|255.110.430.779.241.379.291|1991||187||157|51.59|
Dominique Heintz|DEF|2|76|0.231.365.874.898|1993||189||2||
Bruno César|MED|16|78|279.395.234.140.36.653.292.812|1988||178|2|16|30.32.47.55|
Francesco Bardi|GR|84|76|18.440.618.218.291.366.154|1992||188||84||
Joël Veltman|DEF|124|83|32.166.925|1992||182|28|124|54|
Andrey Lunev|GR|134|79|850.872.947.524.699.276|1991||189||154|37|
Aitor Fernández|GR|54|76|101.184.144.523.638|1991||182||54||
Rani Khedira|MED|151|79|298.705.115.874|1994||185||2||
Khouma Babacar|AVA|135|78|356.709.650.575.781.513.65.233|1993||185||135||
José Luis Palomino|DEF|4|76|771.89.323.538.100.196.182|1990||188||4|51.59|
Marvin Ducksch|AVA|2|79|157.750.817.422.302.923.145|1994||188|2|2|33|
Carl Jenkinson|DEF|76|82|213.93.925.145.617|1992||185||76|15.39.53|
Adama Soumaoro|DEF|58|76|530.378.154|1992||186||58|17.4.41|
Patric|DEF|54|79|127.510|1993||184||54|48|
Ezgjan Alioski|DEF|97|77|942.320.516.36.351|1992||172||96|30|
Gianluca Lapadula|AVA|125|79|696.663.209.366.674.7.378.513.139.196.810|1990||178||84|44|
Stuart Armstrong|MED|51|77|273.204.805.889.789.26|1992||183||51||
Diego Reyes|DEF|111|80|77.325.725.291.351.186.843.701|1992||193||111|32.35.39.41.52.7|
Daniele Baselli|MED|84|75|222.100.848.196.232.650.218|1992||182||84||
Rogelio Funes Mori|AVA|111|80|734.140.290.577.865.527|1991||186|1|4|30.7|
Andreas Samaris|MED|63|80|656.632.140.362.732.235|1989||189||63|18.25.30.46.7|
Lei Wu|AVA|30|79|291|1991||174||30|12|D
George Saville|MED|79|77|215.568.164.934.168.565.539|1993||176||76|35.39.43.55|
Saphir Taïder|MED|5|80|393.154.440.805.781|1992||180||58|37|
Jetro Willems|DEF|124|83|807.648.281.610.394.312.417.589|1994||177|22|112|54|
Gianluca Caprari|AVA|84|77|737.674.440.768.663.139.416.580|1993||171||84|36.44|
Jeff Hendrick|MED|78|80|263.175.610.698.720.789|1992||185||78||
Paul-Georges Ntep|AVA|24|78|15.731.933.763.486.398.149|1992||180|6|24|28|E
Vitor Hugo|DEF|16|77|811.450.202.78.653.356.856.279.654.112|1991||187||16|50.9|
Florian Niederlechner|AVA|2|77|1.415.548.365.115.418|1990||186||2||
Jonathan Viera|MED|54|78|507.888.719.822.122.72|1989||170||54||
John Lundstram|MED|76|77|299.270.939.526.147.783.641.790.717.856.426|1994||181||76|45|
Tom Ince|AVA|76|78|532.147.243.617.426.263.425|1992||178||76||D
Adrien Tamèze|MED|58|75|885.612.100.416.848|1994||180||58||
Alfred Gomis|GR|135|76|848.241.118.209.154.764.760.266.731.232.319.652|1993||196||135||
Adrian Grbic|AVA|165|76|752.223.319.907.885.321|1996||185||165||
Marcel Tisserand|DEF|129|78|587.521.854.315.933.351.40.48.832|1993||185|1|58|34.4.44.55|
Christophe Hérelle|DEF|103|69|330.867.862.612.818.323.151|1992||188||58||
Omar Colley|DEF|148|73|268.377.768.141.642|1992||192||148|25.44|
Moi Gómez|MED|54|78|905.379.813.754.638|1994||174||54|59|
Ole Selnæs|MED|116|76|739.763.338|1994||187||116||
Nuno Valente|DEF|127|70|163.910.748.92.909.812.325.299|1991||174||127|28.32.34.52.58.7|
Matheus|GR|16|72|78.163.32.294|1992||187||16|32.41.47.52.9|
Janik Haberer|MED|2|76|421.898.365.874|1994||186||2||
Jean-Eudes Aholou|MED|39|75|868.293.587.763.81|1994||188||39|34|
Abdoulaye Touré|MED|68|71|600.378.478.511|1994||187||58|44.52|
Álvaro González (1990)|DEF|54|76|709.779.291.905.553|1990||183||54|12|
Clinton Mata|DEF|3|76|466.702.377.224.541|1992||185||20|41|
Bouna Sarr|DEF|135|83|323.553.133|1992||177|13|58|12.27.5.53|
Marius Wolf|DEF|2|81|1.281.157.418.231.115|1995||188|5|2||
Jordon Ibe|AVA|76|79|936.532.145.263.160|1995||176||76|33|D
Bastos|DEF|3|75|741.510.37.36.159|1991||184||3||
Marvin Friedrich|DEF|2|77|115.874.158|1995||193||2||
Rubén Blanco|GR|54|72|203.553.386|1995||188||54|36.43|
Josh Murphy|AVA|76|75|616.929.543.197|1995||173||76||E
Danilo Cataldi|MED|84|77|510.241.378.139.356|1994||180||84|48|
Marco Sportiello|GR|84|76|100.199.356.366.7|1992||192||84|48|
Alex Pritchard|MED|76|78|853.675.831.164.924.616.425.828.145.799|1993||171||76|42|
Angus Gunn|GR|51|80|551.616.805.825.617|1996||196||76|26|
Flavien Tait|MED|58|72|502.81.731.769.736|1993||177||58||
Isaac Hayden|MED|85|80|93.426.610.616.822.698.692|1995||187||76|15.43|
Tin Jedvaj|DEF|40|83|277.737.524.115.535.37.654.60|1995||184|26|40|43.46|
Dawid Kownacki|AVA|126|79|514.768.302.923|1997||185||126|25|
Roger Martí|AVA|54|75|523.103.779.886.283.245|1991||179||54||
Rubén García|AVA|54|76|103.523.813.638|1993||171||54||D
Connor Roberts|DEF|123|77|830.939.169.565.175.516|1995||173||123||
Daley Sinkgraven|DEF|124|76|414.32.524.507.362|1995||179||124|56|
Adrien Thomasson|MED|58|74|950.600.293.521.731|1993||182||58|44.52|
Carlos Fernández|AVA|54|80|787.262.390.725|1996||188||54|35|
Óscar Romero|MED|122|75|710.755.66.771.150.670.159.443.427|1992||176||122||
Kiril Despodov|AVA|17|74|195.196.827.538.642|1996||180||17||D
Florent Mollet|MED|58|74|266.867.323.578.600.509|1991||174||58||
Fábio Martins|AVA|127|72|265.163.668.214.345.60.48.44|1993||178||127|32.41.52.9|E
Freddie Woodman|GR|76|74|610.489.26.830.160.695.532|1997||188||76|13.43|
Alen Halilovic|MED|40|84|277.127.813.408.507.7.822.414.145.720.404.362|1996||170|10|40|36|
Jaime Mata|AVA|54|73|386.886.379.507|1988||185||54||
Jony|AVA|54|78|723.813.586.66.510.638|1991||179||54|48|E
Yoshinori Muto|AVA|86|84|333.548.610.753.906|1992||178|29|86|43|
Wanderson|AVA|16|74|135.134.529.379.767.494.443.242|1994||175||16||E
Rubén Peña|DEF|54|76|887.886.186.753.905.638|1992||170||54|59|
Przemyslaw Frankowski|DEF|126|80|515.454.217.521.371.731|1995||175|55|126|25|
Lukas Haraslin|AVA|52|79|663.515.781.806.41|1996||175|52|52||E
Denis Vavro|DEF|52|81|233.510.754.933.902|1996||190|34|52|48|
Vaclav Cerny|AVA|32|80|32.882.334.933.717.141|1997||178||32||D
Glen Kamara|MED|57|80|93.273.272.717.516.731.60|1995||181||57|15|
Rubén Alcaraz|MED|54|74|386.72.886.245|1991||180||54||
Edimilson Fernandes|MED|143|78|329.925.356.548.91.942.818|1996||190||143||
Shon Weissman|AVA|83|75|545.932.886.390.764.148|1996||175||83||
Jonas Omlin|GR|143|77|321.132.578.158.524|1994||190||143||
Diego Rico|DEF|54|77|258.779.186.160.725.379|1993||181||54||
Johannes Eggestein|AVA|2|77|923.501.744.817.117|1998||183||2||
Pablo Maffeo|DEF|4|80|551.386.298.754.549|1997||173||54|26|
José Luis Morales|AVA|54|71|190.103.753.523.905|1987||180||54||
DeAndre Yedlin|DEF|45|75|784.853.828.610.371.442.221.766|1993||173||45|42.43|
Rúben Vezo|DEF|127|77|909.888.390.523.632.301|1994||182||127|39|
João Carvalho|MED|127|76|909.140.617.72.632.292|1997||172||127|46|
Diogo Gonçalves|AVA|127|77|140.617.345.233.766.492|1997||178||127|18.30.46.7|E
Álvaro Fidalgo|MED|111|75|721.77.142|1997||174||54||
Michael Olunga|AVA|128|76|268.386.483|1994||190||128||
Kasim Adams|DEF|60|77|186.549.942.421.302.132|1995||190||60||
Víctor Camarasa|MED|54|77|523.142.197.66.243.723|1994||183||54||
Youssef Aït Bennasser|MED|102|78|19.587.759.763.156.30.769.486|1996||184||58|34|
Adam Buksa|AVA|126|80|515.944.685.607.521.84.566.871.549|1996||191|25|126|25|
Júnior Alonso|DEF|122|76|530.203.150.112.494|1993||185||122|17|
Marlon (1995)|DEF|16|79|358.127.612.781.788.580.500|1995||185||16|36|
Youssouf Koné|DEF|100|76|530.820.541.283.411.862.4.708|1995||174||100|17.41|
Samuel Gigot|DEF|58|75|5.470.465.809.553.510|1993||187||58|46|
Marco Richter|MED|2|77|115.418.548.408|1997||176||2||
Marin Pongracic|DEF|40|81|1.767.933.157.513.356|1997||193||2||
Carles Pérez|AVA|54|79|127.737.203.379.90|1998||172||54|31.41.43|D
Iñaki Peña|GR|54|82|371.127.283|1999||185||54|27.3|
Ignacio Pussetto|AVA|4|72|427.871.921.768.865.438|1995||180||4||
Conan Ledesma|GR|4|73|738.245.734|1993||186||4||
Jonathan Calleri|AVA|4|79|150.834.925.507.66.291.638|1993||179||4||
Florian Müller|GR|2|76|548.365.298|1997||190||2||
Jorge Meré|DEF|54|78|813.231.77.555.245|1997||182||54||
Dejan Ljubicic|MED|165|78|718.231.277|1997||187||165||
Boschilia|MED|16|77|834.587.822.600|1996||172||16|34.4|
Andoni Gorosabel|DEF|54|76|725.66.101.291|1996||174||54||
Xeka|MED|127|75|748.163.530.266.731.59.292|1994||186||127|32.4|
Filip Benkovic|DEF|40|78|277.518.204.168.197.625.871.278.856|1997||194|1|40||
Amir Hadziahmetovic|MED|21|80|492.141.180.426|1997||179|34|43||
Thiago Maia|MED|16|77|777.530.357.443|1997||179||16|17.28|
Javi Ontiveros|AVA|54|74|586.905.754|1997||172||54||E
Patrick Berg|MED|116|77|152.521|1997||178||116||
Karlan Grant|AVA|76|73|213.425.924|1997||183||76||
Dominik Greif|GR|52|79|549.541|1997||197|8|52|41|
Nikola Moro|MED|40|78|277.276.154|1998||185||40||
Paul Bernardoni|GR|58|76|862.156.223.622.81.763.492.943|1997||190||58||
Jean-Victor Makengo|MED|58|75|759.612.854.871.319|1998||177||58||
Yann Karamoh|AVA|58|77|759.440.156.663.478.848.578.325|1998||185||39|7|E
Marvelous Nakamba|MED|162|79|19.907.224.99.539|1994||178||162||
Mama Baldé|AVA|70|64|265.266.862.541.818|1997||181||70||
Luis Abram|DEF|125|74|917.390.185.108|1996||184||125||
Franco Cristaldo|MED|4|74|150.283.719.254.773.206.427.395.182|1996||170||4||
Chiquinho (1995)|MED|127|72|520.592.27.140.582.163.385.632|1995||174||127|7.18.30|
Toma Bašić|MED|40|74|405.156.510.764.895|1996||189||40|48|
Linton Maina|AVA|2|74|231|1999||173||2||E
Senne Lynen|MED|20|75|224.225.838.875.923|1999||185||20||
Pierre Kunde|MED|24|79|104.390.548.632.898.113|1995||181||24||
Stephy Mavididi|AVA|76|80|93.213.695.463.460.266.578.518|1998||182||76|15.48|E
Maduka Okoye|GR|115|75|807.921.871|1999||198||2||
Hamza Choudhury|MED|10|80|177.518.921.790|1997||178||76|44|
Diego Conde|GR|54|74|104.186.379.905|1998||188||54||
Axel Tuanzebe|DEF|129|81|552.99.601.825.447.175|1997||185||129|31.47.54|
Sebastian Walukiewicz|DEF|126|74|685.196.285.848.781|2000||188||126||
Jonathan Cafu|AVA|16|72|149.689.834.538.156.294|1991||173||16||D
Romain Del Castillo|AVA|58|75|541.622.731.818.638|1996||172||58||D
Frédéric Guilbert|DEF|58|74|759.156.99.293.513.600|1994||178||58||
Shamar Nicholson|AVA|85|75|702.809.223.226.973|1997||192||85||
M'Bala Nzola|AVA|3|66|27.199.857.810.356.521.681.781|1996||185||3||
Jordan|AVA|45|75|820.502.731.942.874.158.847|1996||190||45||
Sergio Akieme|DEF|54|74|719.72.820|1997||175||54||
Mounir Chouiar|AVA|102|74|521.266.938.131.484.538.75.338|1999||180||58||E
Rúben Vinagre|MED|127|77|27.587.934.632.345.812.299.426.416.517|1999||174||127|34.39.47|
Florentino|MED|127|78|140.587.379.175|1999||183||3|18.7|
Fernando Calero|DEF|54|77|105.887.886.291.586|1995||184||54||
Bright Osayi-Samuel|DEF|115|78|147.698.351.145|1997||175|3|115|30.31.55|
Jurgen Ekkelenkamp|MED|124|78|32.418.744.871|2000||188||124||
Berke Özer|GR|152|76|351.473.690.301.953.530|2000||190||152|30.31.55|
Mateo Cassierra|AVA|33|75|260.32.312.710.120.342.947.112|1997||186||33||
Bernardo (1995)|DEF|16|77|689.767.318.705.166.898.421|1995||186||16||
José Manuel Arnáiz|AVA|54|80|886.887.127.186.638.390|1995||172||54|27.3|E
Andreas Hanche-Olsen|DEF|116|72|465.548|1997||185||116||
Myziane Maolida|AVA|34|76|541.612.418.820.419.49|1999||180||58||E
Kristijan Jakic|MED|40|76|592.591.277.281.115|1997||181||40|59|
Ismail Jakobs|DEF|135|79|231.587.371|1999||184||2||
Romário Baró|MED|127|75|325.292.200.132.714|2000||180||70|52.7|
Matías Vargas|AVA|4|75|917.291.29.41|1997||168||4||E
Michael Folorunsho|MED|84|79|601.128.729.416.356.196|1998||190||84|11.21.6|
Pierre Lees-Melou|MED|58|74|266.612.616.818.662|1993||185||58||
Riccardo Sottil|AVA|84|77|356.674.196.7.513|1999||180||84|52|E
Sam Lammers|AVA|124|76|648.414.100.281.285.768.717.882.334|1997||191||124|59|
César Montes|DEF|111|77|577.291.72.535|1997||191||111||
Auston Trusty|DEF|45|78|678.229.93.145.790.204|1998||191|10|45|42|
Chiedozie Ogbene|AVA|78|75|164.742.539.447.790|1997||181||115||D
Batista Mendy|MED|58|73|600.81.856.787|2000||191||58||
Javi Montero|DEF|54|78|104.787.291.224.523.754.386.110.262.141.408.92|1999||185||54|51|
Rémi Oudin|MED|58|74|820.156.513|1996||185||58||
Nikolas Nartey|MED|43|76|231.298.762|2000||183||43||
Rogério|DEF|16|78|443.781.463.933|1998||178||16||
Edgar González|DEF|54|73|143.142.723.72|1997||193||54||
Rabbi Matondo|AVA|123|78|825.207.717.757|2000||175||76||E
Javi Puado|AVA|54|78|291.779|1998||177||54||E
Rodrigo Becão|DEF|16|78|279.194.7.871.351.484|1996||191||16|31.41.52|
Lucas Veríssimo|DEF|16|79|777.140.234.39.972|1995||189|2|16|11.28.30.7|
Brenner|AVA|16|76|834.358.221.871.892|2000||175||16||
Giorgi Chakvetadze|MED|61|76|465.408.921|1999||183||61||
Keinan Davis|AVA|76|75|99.617.921.871|1998||189||76||
David Okereke|AVA|115|76|810.224.895.238.848.374|1997||181||115||
Ragnar Ache|AVA|2|78|807.281.394.0.231|1998||183||2|59|
Uros Racic|MED|145|79|294.888.189.345.163.781.924.90|1998||193||160||
Veljko Birmancevic|AVA|145|78|665.711.244.550.854.806.379.352|1998||179|17|160||E
George Hirst|AVA|51|75|625.518.742.692.146.447|1999||191||76||
Ghislain Konan|DEF|39|76|20.908.820.52.42.174.380|1995||176||39|32|
Meschack Elia|AVA|129|78|942.600.65|1997||173||129||
Samuel Kalu|AVA|115|75|465.156.921|1997||177||115||D
Mark McKenzie|DEF|45|77|678.377.854|1999||184||45|42|
Mateusz Bogusz|MED|126|74|516.500.185.423|2001||177||126|17|
Toni Fruk|MED|40|77|356.403.404|2001||174||40||
Tommy Doyle|MED|76|78|408.197.790.551.934.145|2001||172||76|26.55|
Luiz Araújo|AVA|16|76|834.530.108.357|1996||175||16|17.4|D
Santiago Bueno|DEF|157|81|386.934|1998||190||157|55|
Daniel Boloca|MED|84|67|366.781|1998||188||84||
Óscar Melendo|MED|54|76|291.390|1997||167||54||
Joseph Okumu|DEF|128|74|284.465.820|1997||193||128||
Gabriel Strefezza|AVA|16|73|760.461.238.513.232.632.663|1997||168||16||D
Marco Brescianini|MED|84|74|7.580.366.100.356|2000||191||84||
Eddie Salcedo|AVA|84|75|378.440.416.810.128.623|2001||178||84|37|
Caleb Okoli|DEF|84|74|100.760.238.366.518|2001||191||84||
Juan Brunetta|MED|4|71|95.138.388.663.778.843|1997||178||4||
Santiago Cáseres|MED|4|73|905|1997||177||4||
Cristian Cásseres Jr.|MED|159|74|608.854|2000||176||159||
Vitinho|DEF|16|74|242.207.175.159|1999||175||16||
Jan Thielmann|AVA|2|75|231|2002||178||2||D
Alexandre Penetra|DEF|127|72|345.22|2001||186||127||
Félix Correia|AVA|127|73|463.460.663.554.380.530|2001||178||127||E
Christos Mandas|GR|63|71|113.623.510.160|2001||189||63|48|
David Strelec|AVA|52|78|810.729.565|2001||185|17|52||
Gustaf Lagerbielke|DEF|142|72|915.284.256.204.334.163|2000||193||142||
Lorenzo Colombo|AVA|84|79|7.238.760.513.580.285.378|2002||183||84|41.52|
Ibrahima Niane|AVA|135|75|400.323.81|1999||187||135||
Benjamín Rollheiser|AVA|4|73|734.296.140.777|2000||166||4|18|D
Mattia Viti|DEF|84|73|285.612.781.356|2002||190||84||
Víctor Gómez|DEF|54|75|291.188.586.163|2000||171||54||
Antonio Blanco|MED|54|76|721.245.66|2000||191||54|57|
Montassar Talbi|DEF|151|79|180.139.745.319|1998||190|67|58||
Miguel Crespo|MED|127|74|163.292.351.719.131|1996||186||58|30.55.9|
Chidera Ejuke|AVA|115|75|916.414.194.418.744.787|1998||176||115||E
Adrià Pedrosa|DEF|54|78|291.787.283|1998||172||54||
Gianluca Busio|MED|45|74|476.895|2002||175||45||
Ryan Giles|DEF|76|75|934.793.236.742.197.146.565.539.426|2000||183||76|39|
Sergio Camello|AVA|54|79|523.104.110.188.719|2001||177||54|51|
Simon Sohm|MED|143|74|338.663.356.154|2001||188||143||
Aidan Morris|MED|45|72|230.565|2001||175||45||
Julián Araujo|DEF|111|77|499.127.507.160.204|2001||175||45||
Vítor Tormena|DEF|16|73|380.690.163.494|1996||192||16|47|
Largie Ramazani|AVA|20|75|552.72.516.888|2001||167||20||E
Luca Netz|DEF|2|75|418.158.617|2003||184||2|55|
Valentin Mihăilă|AVA|132|79|877.663.100.180|2000||180|36|132||E
Sergio Arribas|MED|54|75|721.72|2001||172||54|11.57|
Naouirou Ahamada|MED|58|75|460.298.243.731.15|2002||183||58||
Daniel Maldini|MED|84|81|7.810.285.580.100.510|2001||181||84|41.48.52.6|
Luca Jaquez|DEF|143|77|321.298|2003||187||143||
José Juan Macías|AVA|111|74|527.219.379.778.865|1999||178||111||
Brandon Soppy|MED|58|74|731.871.100.848.509|2002||181||58||
Fabiano Parisi|DEF|84|72|118.285.356|2000||178||84||
Fernando (1999)|AVA|16|75|653.788.812.767.704|1999||176||16|41|
Matej Kovar|GR|32|79|831.177.552.806.524.648|2000||183||32|5.56|
Kacper Kozlowski|MED|126|74|685.166.875.907.374|2003||177||126||
Nathanaël Mbuku|AVA|129|76|820.115.763|2002||170||58||E
Hyun-seok Hong|MED|37|74|873.501.465.548.600|1999||177||37||
Josh Doig|DEF|51|73|419.416.781|2002||189||51||
Lassine Sinayoko|AVA|100|75|15|1999||186||100||
Mohamed Daramy|AVA|43|76|6.613.233.32.820|2002||180||43||E
Hugo Souza|GR|16|75|357.214.234|1999||198||16|30|
Bright Arrey-Mbi|DEF|2|74|133.231.163|2003||187||24||
Andrej Ilic|AVA|145|73|602.455.916.530.874|2000||189||160|41|
Johann Lepenant|MED|58|75|759.541.600|2002||176||58||
Nicolai Remberg|MED|2|71|422.408|2000||187||2||
Pep Chavarría|DEF|54|76|779.719.215|1998||174||54||
Justin Njinmah|AVA|2|73|923.157|2000||184||2||D
Eric Martel|MED|2|75|705.117.231.548|2002||188||2||
Faris Moumbagna|AVA|24|75|495.835.152.553.238|2000||185|2|24||
Alfie Doughty|MED|76|72|213.825.197.539|1999||183||76||
Iván Jaime|MED|54|74|105.345.325.888.579|2000||180||54|52|
Marcos Paulo|AVA|127|75|358.110.345.188.834.708.149.462|2001||186||16||E
Jens Castrop|MED|37|69|620.158|2003||178||2||
Manu Sánchez|DEF|54|78|104.110.638.203.66.523|2000||179||54|3.43.51|
Robin Hranac|DEF|32|77|660.902.421|2000||190|3|32||
Joris Chotard|MED|58|76|578.818|2001||179||58||
Gorby|MED|58|66|163.668|2002||181||58||
Saud Abdulhamid|DEF|7|80|46.45.737.521|1999||178|49|7|30.37.44|
Aurèle Amenda|DEF|143|77|942.281|2003||194||143||
Martín Satriano|AVA|157|74|598.440.818.285.521.541.379|2001||187||157|41|
Abner|DEF|16|75|689.102.142.541|2000||181||16|41.50|
Tyrhys Dolan|AVA|76|75|695.146.291|2001||170||76||D
Moustapha Mbow|DEF|135|72|820.622.706.662|2000||192||135||
Dion Lopy|MED|135|75|820.72|2002||184||135||
Anton Kade|MED|2|71|418.132.115|2004||179||2||
Gabriel Slonina|GR|45|75|217.215.466.129|2004||193||45||
Soumaïla Coulibaly|DEF|58|74|157.744.818.293|2003||191||58||
Warren Bondo|MED|58|73|19.580.729.7.238|2003||177||58|52|
Félix Lemaréchal|MED|58|73|587.818.207.293.224|2003||180||58||
Bilal Nadir|MED|102|75|553|2003||172||58||
Mikayil Faye|DEF|135|73|127.731.238|2004||186||135||
Tom Cannon|AVA|78|75|299.695.518.825.790|2002||180||76||
Kamory Doumbia|MED|100|74|820.818|2003||170||100||
Noah Saviolo|AVA|127|70|908.856|2004||181||20||E
Sergi Cardona|DEF|54|74|384.507.905|1999||185||54||
Juan Cabal|DEF|33|73|106.416.463|2001||186||33||
Jacopo Fazzini|MED|84|74|285.356|2003||178||84||
Etienne Green|GR|76|74|763.175.311|2000||192||76||
Joel Chima Fujita|MED|86|75|844.940.797.817|2002||175||86||
Freddie Potts|MED|76|73|936.692.925|2003||183||76|39|
Manu Silva|MED|127|68|349.908.140|2001||189||127|18.31.38|
Sinaly Diomandé|DEF|39|76|541.15|2001||184||39|41|
Warmed Omari|DEF|34|74|731.541.408|2000||185||106|41|
David Da Costa|MED|127|73|521.691|2001||168||127||
Roberto Fernández|AVA|54|75|586.163.291|2002||183||54||
Arijon Ibrahimovic|MED|2|78|133.366.510.415|2005||176||2|5.53|
Cristian Volpato|MED|8|78|737.781|2003||187||8|31|
Amin Sarr|AVA|142|64|550.572.414.541.933.416|2001||188||142||
Jaouen Hadjam|DEF|5|75|662.600.942|2003||184||58||
Arouna Sangante|DEF|135|74|511|2002||189||135||
Alidu Seidu|DEF|60|78|223.731|2000||173||60||
Ayoube Amaimouni-Echghouyab|AVA|102|63|281|2004||178||54||D
Léo Scienza|MED|16|70|415.805|1998||175||16||
Clément Akpa|DEF|39|73|15.868|2001||181||58||
Felipe Loyola|MED|29|72|438.681|2000||180||29||
Petar Ratkov|AVA|145|77|343.767.510.523|2003||193|3|136|48|
Oumar Diakité|AVA|39|78|20.767.318.820.207|2003||182||39||
Kosta Nedeljkovic|DEF|145|75|294.99.705|2005||184||136||
Bénie Traoré|AVA|39|73|20.429.790.600.132|2002||172||39||E
Nasser Djiga|DEF|18|75|132.622.294.934.717|2002||187||18|55|
Matteo Prati|MED|84|72|760.196.848|2003||185||84|44|
Simone Pafundi|MED|84|73|871.509.768|2006||166||84||
Obed Vargas|MED|111|76|784.110|2005||175||45|51|
Cuiabano|DEF|16|73|395.159.617.892|2003||179||16||
Antoine Mendy|DEF|135|77|612|2004||187||58||
Hugo Álvarez|AVA|54|72|203|2003||180||54|43|E
Amir Richardson|MED|102|79|511.820.356.233|2002||195|9|58||
Ethan Mbappé|AVA|58|81|647.530|2006||180||58|36.4|D
Nelson Deossa|MED|33|73|296.459.106.649.577.142|2000||185||33||
Federico Redondo|MED|4|75|89.442.283|2003||188||54||
Keisuke Goto|AVA|86|77|80.797.365|2005||191||86||
Oliver Scarles|DEF|76|73|925|2005||180||76|39|
Lennon Miller|MED|51|74|583.871|2006||182||51||
Sascha Britschgi|DEF|143|71|321.663|2006||182||143||
Tom Watson|AVA|76|75|828.166.568|2006||190||76||E
Gustavo Puerta|MED|33|78|524.620.426.709.632|2003||172|11|33|5.56|
Jahmai Simpson-Pusey|DEF|76|73|551.204.231|2005||187||76|26|
Mario Martín|MED|54|76|721.886.379|2004||177||54|11.3|
Álvaro Rodríguez|AVA|157|79|721.379.283.160|2004||193||54|11.3|
Pape Demba Diop|MED|135|72|949.293.620.854|2003||178||135||
Nhoa Sangui|DEF|58|71|820.662|2006||177||58||
Pablo García|AVA|54|73|143.142.709|2006||175||54||D
Jacques Ekomié|DEF|59|71|156.81|2003||179||59||
Tani Oluwaseyi|AVA|25|77|569.905|2000||188|29|115||
Reda Belahyane|MED|102|73|612.416.510|2004||169||58|48|
Niccolò Fortini|DEF|84|73|356.461|2006||185||84||
Kauã Santos|GR|16|73|281|2003||196||16||
Alysson|AVA|16|71|395.99|2006||182||16||D
Wesley (2005)|AVA|16|76|234.52.725.242|2005||180||16|30.55|E
Mathis Amougou|MED|58|73|763.215.293|2006||183||58||
Oso|DEF|54|72|787.293|2003||183||54||
Mario Dorgeles|MED|39|71|613.163|2004||177||39||
Mamadou Diakhon|AVA|135|73|820.224|2005||180||58||E
Maroan Sannadi|AVA|102|71|66.101|2001||192|3|54||
Mathias de Amorim|MED|127|70|156.345|2004||174||58||
Dro Fernández|MED|54|78|127.647|2008||182||54|27.3.36.4.58|
Luca Reggiani|DEF|84|73|157|2008||194||84||
Deivid Washington|AVA|16|76|777.215|2005||185||16|42|
Moïse Bombito|DEF|25|74|229.612|2000||190|22|25||
Kojo Peprah Oppong|DEF|60|64|614.612|2004||185||60||
Juma Bah|DEF|137|75|886.551.521.612|2006||195||137||
Yassir Zabiri|AVA|102|71|345.731|2005||177||102||
Mariano Troilo|DEF|4|68|138.663|2003||190||4||
Rémi Himbert|AVA|58|71|541|2008||178||58|41|E
Juan Rodríguez (2005)|DEF|157|70|677.196|2005||190||157||
Adrian Lahdo|MED|142|62|410.232|2007||179||||
Kauã Prates|DEF|16|73|242.157|2008||184||16|34|
Believe Munongo|MED|58|71|323|2009||191||58||
Rui Jorge|DEF|127|81|325.732.812.120|1973||170|45||7.25.32.50|
Anderson Polga|DEF|16|81|395.812.234|1979||183|11||7.25.32.40.60|
Jaime Pacheco|MED|127|80|325.812.909.668.163.732|1958||170|25||7.58|
Paulo Assunção|MED|16|80|653.597.325.110.834.262.522|1980||173|||7.28.50.51.59|
Martin Stranzl|DEF|165|81|1.298.809.158|1980||190|56|165||
Manuel Friedrich|DEF|2|81|548.923.524.157|1979||189|9|2|29.33|
Emanuel Pogatetz|DEF|165|80|827.524.809.565.933.925.620.230.874|1983||190||165||
Mike Hanke|AVA|2|81|933.158.365|1983||185|12|2|29|
Patrick Owomoyela|DEF|2|81|899.750.91.923.157.408|1979||187|11|2|29.33.5|
Paul Scharner|MED|165|80|117.767.757.929.924.408|1980||191|40|165|45|
Titus Bramble|DEF|76|79|447.610.929.828|1981||185||76|45|
Ian Harte|DEF|78|81|516.523.828.147.198.720.160|1977||175|63|78||
Chris Baird|MED|79|82|805.920.921.367.720.175.924.263|1982||179|79|79||
Aaron Hunt|MED|2|80|923.933.408|1986||182|3|2|29|
Niklas Moisander|DEF|57|83|32.645.22.768.923.550|1985||183|62|57|54|
Sylvain Monsoreau|DEF|58|74|330.541.587.763.862|1981||186||58|4|
Ariza Makukula|AVA|127|77|908.186.600.886.787.384.554.140.155.486.909.623|1981||192|4|161|50.59|
Giovanni Pasquale|DEF|84|78|440.794.663.18.871.848|1982||181||84|37.6|
Ferdinando Coppola|GR|84|78|601.154.97.728.729.679.7.100.794.848.416|1978||188||84|11.21.58.6|
Giuseppe Sculli|AVA|84|79|463.241.575.218.165.378.510.674|1981||178||84|11.19.24.6|E
Luca Castellazzi|GR|84|80|580.890.650.674.165.729.201.768.440.848|1975||192||84|43.44|
Kalu Uche|AVA|115|81|291.930.156.72.606.484.57.523|1982||179|37|115|42|
Gabriel Tamas|DEF|132|82|308.371.809.203.15.924.191.270.921.339.197.676|1983||188|67|132||
Daniele Gastaldello|DEF|84|78|650.463.218.241.794.768.154.165|1983||185|1|84|6|
Javier Pinola|DEF|4|79|104.110.710.620.738.150|1983||181||4|49|
David Navarro|DEF|54|79|888.549.606.523|1980||188||54|3.43.44.59|
Daniel Aranzubia|GR|54|80|101.144.262.110|1979||186|1|54|3.51|
Albano Bizzarri|GR|4|80|710.721.886.384.201.510.378.218.674.871|1977||193||4|23.58|
Mario Abrante|DEF|54|77|104.886.127.379.142.779|1982||178||54||
Marcel Schäfer|DEF|2|79|1.933|1984||184|8|2|29.5|
Gustavo Munúa|GR|157|79|598.262.586.523.356|1978||189|21|157||
Sejad Salihovic|MED|21|80|418.421.408|1984||182||88||
Michael Turner|DEF|76|77|213.526.164.426.828.616.367.789|1983||193||76||
Jaroslav Drobny|GR|32|79|179.656.367.10.447.898.418.408.923.302|1979||192||22||
Steve Sidwell|MED|76|81|93.164.166.720.215.99.367.825|1982||178||76|15.2|
Quim|GR|127|82|163.140.265|1975||182|32|127|20.25.28.30.32.34.40.50.7|
José Nunes|DEF|127|75|163.765.380.549|1977||181||127|28|
Ángel López|DEF|54|79|507.203.905.142|1981||180|5|54||
Borja Oubiña|MED|54|78|203.145|1982||180|2|54|36|
Phil Bardsley|DEF|51|83|552.744.175.717.99.790.828.825|1985||180||76|10.2.20.58|
Cesare Natali|DEF|84|76|100.580.154.871.848.356.781|1979||191||84||
Albert Meyong|AVA|24|77|909.120.523.67.163|1980||184|12|24|30|
Hérita Ilunga|DEF|129|79|731.763.854.925.270.867|1982||180|32|161||
Derek Boateng|MED|60|81|654.623.14.231.379.269.367.719.753|1983||183|47|60|25|
Curtis Davies|DEF|76|81|539.924.99.518.145.426.263.216|1985||188|3|76|38|
Christian Gentner|MED|2|80|298.933.874|1985||189|5|2|29.5|
Marco Storari|GR|84|82|673.601.7.523.196.356.768.463|1977||187||84|11.21.44.6|
Dennis Aogo|DEF|2|82|365.408.298|1987||184|12|2|29|
Dusan Basta|DEF|145|79|294.456.871.513.510|1984||183|2|88|48|
Boško Janković|AVA|145|81|294.456.549.652.378.416|1984||183|31|88||D
Willy Caballero|GR|4|84|150.283.95.586.551.215.805|1981||186||4|21.26.42.48.53.59|
Gelson Fernandes|MED|143|84|329.551.763.218.518.871.812.365.731.281|1986||183|67|23|28|
Jussiê|MED|16|78|242.483.521.156.62|1983||181||16||
Christian Terlizzi|DEF|84|75|209.652.768.201.890.674.794.857|1979||195|1|84|51|
Daniele Mannini|MED|84|74|681.165.601.768.794.513|1983||183||84||
Giulio Migliaccio|MED|84|78|128.841.100.652.356|1981||180||84|48|
Hugo Campagnaro|DEF|4|84|679.768.601.440.674|1980||181|17|4|37|
Andrea Cossu|MED|84|78|416.196|1980||170|2|84||
Abdoulay Konko|DEF|58|80|463.241.794.378.787.510.100|1984||182||58|19.24.48.6|
Antonio Mirante|GR|84|80|463.241.794.768.663.154.737.7|1983||194||84|19.24.41.44.6|
Francesco Modesto|DEF|84|74|652.97.729.378.154.663.674.650.241|1982||177||84||
Loïc Perrin|DEF|58|78|763|1985||180||58||
Anders Lindegaard|GR|43|84|626.24.552.924.695.175|1984||193|5|43|10.2.54|
Benoît Costil|GR|58|79|759.193.731.156.15.530.764|1987||188|1|58|24.41|
Túlio de Melo|AVA|16|79|112.512.652.530.950.211.886.811|1985||193||16|4|
Riki|AVA|54|79|262.390|1980||187||54||
Barreto|AVA|16|76|858.871.128.848.895|1985||171||16|21|
Gianluca Curci|GR|84|79|737.794.768.154.548.410|1985||191||84|36|
Jonas Olsson|DEF|142|80|589.924.268.929|1983||193|25|142||
Maxi López|AVA|4|82|734.127.549.395.201.7.768.218.848.871.892.241|1984||186||4|3.51.58|
Óscar Serrano|MED|54|76|291.709.523.66|1981||175|7|54|22|
Danijel Subasic|GR|40|83|405.587|1984||192|44|88|34.4.44|
Francisco Rodríguez|DEF|111|82|219.648.298.77.185|1981||191|108|111||
Chory Castro|AVA|157|79|598.549.725.586.734|1984||176|5|157||E
Julien Féret|MED|58|75|210.820.19.731.759.15|1982||187|1|58||
Mile Jedinak|MED|8|84|595.205.376.84.243.99|1984||191|79|8||
Nedum Onuoha|DEF|76|80|551.828.698.766|1986||188||115|2.37|
Ryan Nelsen|DEF|118|82|247.146.853.698|1977||185|49|118|12|
Ibson|MED|16|77|357.325.809.777.234.811.154.569|1983||177||16|28.7|
Paulinho (1986)|AVA|16|74|462.18.38|1986||176||16||
Zlatko Junuzovic|MED|165|80|117.923|1987||172|47|88||
Silvestre Varela|AVA|127|83|812.200.909.295.325.924.663.486.120|1985||180|27|127|12.25.28.32.35.39.40.41.55.59.7|E
Mark Noble|MED|76|80|925.447.426|1987||180||76||
Pedro Geromel|DEF|16|79|653.214.908.231.549.395|1985||190||16|50|
Luca Cigarini|MED|84|80|663.100.601.787.768.196.241|1986||175||84|44.48|
Tom Heaton|GR|76|85|552.831.744.197.698.936.168.175.99|1986||188|3|76|10.2.20.47.58|
Srdjan Lakic|AVA|40|77|418.417.0.933.421.281.750|1983||186||88||
Lasse Schöne|MED|43|84|414.253.589.32.378|1986||178|51|43||
Toño|GR|54|75|430.709.390.283.719|1979||182||54||
Andrea Consigli|GR|84|78|100.781|1987||189||84||
Craig Gardner|MED|76|80|99.145.828.924|1986||178||76||
Marc Torrejón|DEF|54|76|291.709.0.365|1986||187||54|42|
Daniel Caligiuri|AVA|84|79|365.933.115|1988||182||2||D
Juan Pablo Carrizo|GR|4|82|734.510.779.201.440|1984||189|12|4|37|
Borna Barisic|DEF|40|79|594.277.592.717.856.186|1992||186||40||
Augusto Fernández|MED|4|81|734.763.917.203.110.245|1986||178||4|36.49.51|
Ivan Strinic|DEF|40|84|512.405.269.601.768.7|1987||186|49|88|43.48|
Mauro Boselli|AVA|4|79|150.296.929.378.652.527.234|1985||182|4|4|45|
James McArthur|MED|51|80|409.929.243|1987||178|32|51|45|
Havard Nordtveit|DEF|116|80|412.93.531.620.158.925.421.367|1990||186||116|15.35.39|
Sven Kums|MED|20|75|80.529.470.414.949.465.921.871|1988||176||20||
Jelle Vossen|AVA|20|77|377.207.565.175.224.949|1989||180|12|20||
André Hahn|AVA|2|75|115.158.408|1990||185||2|27.29|D
Clément Chantôme|MED|58|79|647.854.156.731|1987||179|1|58|11.4|
Erik Pieters|DEF|124|81|882.648.825.75.175.924.539.263|1988||184|18|124|54|
Jorge Fucile|DEF|157|80|325.777.598|1984||177||157|12.17.28.41.55.59.7|
Juan Albín|MED|157|77|598.379.291.676|1986||179||157|42|
Wayne Hennessey|GR|123|83|168.934.824.939.243.175.617|1987||196|109|123|39|
Sammir|MED|40|80|102.353.667.833.277.379|1987||178|7|16|19|
Nenê|AVA|16|76|242.446.597.196.416.810.128.582.520.904.21|1983||183||16||
Sotiris Ninis|MED|63|81|654.663.642.702.471.912.643.488|1990||173|33|1|25.28.32|
Fagner|DEF|16|80|234.280.648.892.933.242|1989||168||16|34.50.55|
William Vainqueur|MED|58|76|600.822.276.737.553.84.587.854|1988||180||58|31.41.44|
Roberto Rosales|DEF|159|80|465.334.586.291.186.13.811.975|1988||174|96|159||
Rickie Lambert|AVA|76|82|147.824.169.805.532.924.197|1982||187|11|76|42|
Sebastian Jung|DEF|2|80|281.933|1990||179|1|2||
Carlos Sánchez|MED|33|83|252.734.885.283.99.356.291.925.921.771.130|1986||182|88|33||
Mikel Rico|MED|54|78|754.390.101.307|1984||179||54||
Ángel Rodríguez|AVA|54|78|189.283.523.753.779.379.549|1987||172||54||
Bruno Saltor|DEF|54|78|384.291.72.888.166|1980||181||54|22|
Albert Crusat|AVA|54|76|291.719.72.929|1982||165||54|22.35.45|E
Benjamin Hübner|DEF|2|76|315.421|1989||193||2||
Fabiano (1988)|GR|31|77|834.79.629.325.351.633|1988||197||16|7.30.31.35.41.52.55|
Tolgay Arslan|MED|2|78|408.141.351.871.557.775|1990||179||2||
Jonathan|DEF|16|79|242.777.440.663.358|1986||170||16|37.44|
John Fleck|MED|51|77|717.147.236.790.146|1991||170||51||
Ciprian Tatarusanu|GR|132|83|339.356.600.541.7|1986||198|74|132|44.6|
Nordin Amrabat|AVA|102|80|71.884.648.486.371.586.921.186.52.12.426|1987||169||124|37.38|D
Marco Sau|AVA|84|76|196.359.461.768.139|1987||169|1|84||
Javi Fuego|MED|54|78|813.523.719.888.291.905|1984||181||54|39|
Fahid Ben Khalfallah|AVA|151|75|75.819.81.759.885.156.862.556|1982||174||58||D
Jean-Armel Kana-Biyik|DEF|24|76|511.731.854.486.374.323|1989||180||58||
Iván Marcano|DEF|54|78|709.905.379.632.745.325.142.737|1987||189||54|32.35.39.44.52.7|
Diego Castro|AVA|54|76|586.813.379.672|1982||174|2|54||E
Tobias Strobl|MED|2|76|421.231.158.115|1990||186||2||
Julian Schieber|AVA|2|80|298.620.157.418.115|1989||186||2|33|
Craig Cathcart|DEF|79|83|744.552.684.921.147.470|1989||188|73|79|10.2.20.38.44.58|
Fabián Orellana|AVA|29|81|871.390.203.888.753.886|1986||169|44|29|17.36|D
James Tomkins|DEF|76|80|925.263.243|1989||190||76||
Jack Colback|MED|76|79|828.447.610.617|1989||176||76|39.43|
Conor Hourihane|MED|78|76|828.447.684.129.99.830.790|1991||181||78||
Neil Etheridge|GR|56|79|367.213.169.239.628.920.197|1990||191||76||
Ryan Mason|MED|76|80|853.939.270.568.319.831.160.426|1991||175||76|38.42.53|
Fábio|DEF|16|84|358.552.698.197.565.600|1990||172|2|16|10.2|
Mohammed Abdellaoue|AVA|116|79|916.298|1985||182||116||
Roberto Torres|MED|54|75|638.384|1989||178||54||
Leroy Fer|MED|124|82|354.334.616.698.830.65.51|1990||188|11|124|13.54|
Franck Tabanou|DEF|58|76|854.763.830.390.398|1989||178||58||
Neil Taylor|DEF|123|83|935.830.99.565|1989||176|48|123||
Borja García|MED|54|75|719.246.386.754|1990||175||54||
Roman Zozulya|AVA|153|80|275.269.142.719.67.190|1989||176|33|154||
Mohamed Diamé|MED|135|81|719.929.925.426.610.190|1987||185|31|58|43.45|
Pedro Mendes|DEF|127|77|812.724.786.721.663.781.731.578.295|1990||187||143|28.3.31.40|
Davide Faraoni|DEF|84|76|440.871.921.673.618.241.416.356|1991||180||84|44|
Elias|MED|16|79|621.689.234.110.812.357.279|1985||173||16|11.28.30.34.50.55|
Felipe Pardo|AVA|33|75|260.436.163.632.600.845.649.733.70|1990||178||33|20.28.38.40.52|D
Alfred N'Diaye|MED|135|76|19.176.290.828.142.905.426.934|1990||188||58|38|
Lukasz Skorupski|GR|126|81|401.737.285.154|1991||188|10|126|25|
Celso Borges|MED|38|82|364.14.262.402|1988||186|164|38||
André Almeida (1990)|DEF|127|77|120.140.519|1990||186||127|7.18.25.30.40.45.46|
Sílvio|DEF|127|77|732.163.110.262.140.909.908|1987||178||127|18.25.30.31.38.40.45.46.51.59.7|
Francesco Caputo|AVA|84|75|128.764.794.285.781.768|1987||181||84|21|
Fabián Rinaudo|MED|4|77|382.812.201|1987||174|8|4|28.34|
Álex Fernández|MED|54|78|721.291.404.720.283.245|1992||180||54|31|
Iván Marcone|MED|4|71|95.506.185.150.283.438|1990||184||4||
Frederik Sörensen|DEF|43|80|540.463.154.416.231|1992||193||43|21.6|
Ja-cheol Koo|MED|37|82|457.933.115.548.43|1989||183|76|37|40.53|
Víctor Ibarbo|AVA|33|80|106.196.737.921.654|1990||188||33|20|
Leonardo Bittencourt|MED|2|78|157.231.421.923|1993||171||2|33|
Muhamed Besic|MED|21|79|408.352.299.565.790.808|1992||177||2|11.38.43.45|
Erik Durm|DEF|2|84|157.425.281.0|1992||183|7|2|33.53.59.60|
Sergio Escudero|DEF|54|80|722.379.787.390.886.262|1989||176||54|35.59|
Marko Livaja|AVA|40|81|405.440.320.209.100.745.285.507.12|1993||182||40|43.44|
Takashi Inui|AVA|86|85|940.208.898.281.753.142.66.791.906.974|1988||169|36|86||E
Romain Alessandrini|AVA|58|75|223.731.553|1989||173||58|12.17|D
Pelé (1991)|MED|70|78|120.378.7.94.629.137.140.668.349.732.587.345|1991||183||127|46|
Joel Robles|GR|54|81|104.110.719.929.299.142.516.55.292|1990||195||54|45.51.59|
Sébastien Corchia|DEF|58|79|512.330.530.787.140.291.600|1990||174|1|58|18.24.35.46.7|
Artjoms Rudnevs|AVA|91|81|514.408.231|1988||183|38|154||
Lucas Castro|MED|4|75|382.710.201.218.196.760.478.29.780.427|1989||182||4|51|
Yuya Osako|AVA|86|84|482.1.231.923.906|1990||182|57|86||
Lorenzo Tonelli|DEF|84|78|285.601.768|1990||183||84|11.21.44.48|
Massimo Bruno|MED|20|76|702.80.705.767.176.470|1993||178||20||
Rubén Pérez|MED|54|80|104.110.262.379.142.283.848.390.186.654.488|1989||178||54|51.59|
Juanpe|DEF|54|74|507.709.390.726.886.386.772|1991||190||54||
Jordan Ferri|MED|58|77|541.622.578.768|1992||172||58|41|
Alessandro Schöpf|MED|165|82|133.620.91.889.932.501|1994||178|35|165|26|
Dominik Kohr|DEF|2|79|524.115.281.548|1994||193||2||
Craig Dawson|DEF|76|79|924.155.921.925.934|1990||188||76|35.55|
Rômulo (1987)|MED|84|79|462.211.242.102.356.416.463.378.510.165|1987||178||16|6|
Wellington Nem|AVA|16|76|355.358.788.92|1992||165|3|16|41|D
Sam Clucas|MED|76|74|426.830|1990||178||76|38|
Jardel|DEF|16|76|280.777.450.292.629.140|1986||191||16|18.30.31.38.46.7|
Luca Marrone|DEF|0|80|463.794.781.199.416.949.241.580|1990||186|||21.6|
Lisandro López (1989)|DEF|4|77|95.379.140.440.378.150.226.48.174.138|1989||187||4|7.30.46.49|
Pontus Jansson|DEF|142|79|550.848.516.164|1991||194|6|142||
Florian Lejeune|DEF|58|77|316.905.818.386.551.753.610.66.719|1991||189||58|43|
Matz Sels|GR|20|80|529.465.610.80.293.617|1992||188|8|20|39.43.45.55|
Nathaniel Chalobah|MED|76|81|921.215.617.565.175.601.720.367|1994||187||137|2.21.38.42.43.48.53|
Alexandru Maxim|MED|132|80|291.298.548.374.141|1990||178|53|132|42|
Julien De Sart|MED|20|74|822.565.263.949.470.465.57|1994||187||20||
Kevin Lasagna|AVA|84|70|199.871.416.478.128|1992||186||84||
Sverrir Ingi Ingason|DEF|82|78|901.469.390.741.642.566.654|1993||188||82|43.46.9|
Marçal|DEF|16|78|397.851.597.140.375.398.541.934.159|1989||178||16|18.35.39.46.55|
Paulo Oliveira|DEF|127|75|908.669.812.753.163|1992||187||127|25.30.32.38.45.46.47|
Anthony Limbombe|AVA|20|74|377.529.589.224.600.822.71.919|1994||182||20|45|E
Jordan Lukaku|DEF|20|81|80.472.510.744.688|1994||177|8|20|45.48|
Tomas Koubek|GR|32|78|424.806.804.731.115|1992||198||22||
Tomas Kalas|DEF|32|83|795.215.907.231.565.367.168|1993||183||32|11.12.21.31.42.43.48.53.58|
Nikola Vukcevic|MED|109|74|163.523|1991||184||88|28.32.41.52.9|
Aderllan Santos|DEF|16|75|860.163.888.834.280.36.732.21|1989||193||16|28.32.39.52|
Adrien Trébel|MED|98|73|600.822.80.509.702|1991||170||58||
Marvin Schwäbe|GR|2|76|421.899.274.172.231|1995||189||2||
Marc Oliver Kempf|DEF|2|78|281.365.298.418.232|1995||185||2||
Marc Stendera|MED|2|79|281|1995||171||2||
Gonzalo Melero|MED|54|73|688.754.523.72|1994||183||54||
Connor Goldson|DEF|76|74|793.216.166.717|1992||191||76||
Jack Stephens|DEF|76|76|684.805.831.565.236.160|1994||185||76|42|
Paddy McNair|DEF|79|82|552.828.565.770.924.426|1995||183|11|79|31.47.54|
Paul Dummett|DEF|123|81|610.816|1991||185|5|76|43|
Stéphane Bahoken|AVA|24|75|612.816.293.81.484.486|1992||185||58||
Prince Gouano|DEF|58|76|511.463.100.707.732.155.375.908.75|1993||186||58|21.48.6|
Lucas Piazón|MED|16|83|215.586.907.281.720.367.218.732.163.159.21|1994||182||16|21.42.43.48.53|
Andraz Sporar|AVA|53|78|132.91.812.163.565.654.65|1994||180||53|43.46.47.7|
Wallace Oliveira|DEF|16|77|358.215.440.907.199.395|1994||174||16|50|
Lucas Lima|DEF|16|73|443.659.159.389.92.600.36.131|1991||178||16|44.52|
Carlos Mané|AVA|70|78|812.298.874.732.486|1994||172||127|30.32.34.38.47|D
Bruno Varela|GR|23|78|886.140.909.32.908.44|1994||191||127|46|
Wesley Saïd|AVA|58|74|731.819.266.854.521|1995||171||58||
Callum Robinson|AVA|78|75|99.695.168.790.924|1995||178||76||
Nicolás López|AVA|157|78|598.737.871.416.390|1993||175||157||
Carlos Gruezo|MED|49|79|438.298.250.115.756.503.778|1995||171||49||
Cristian Ramírez|DEF|49|75|438.302.620.352.494.535|1994||171||49||
Alan Ruiz|MED|4|75|382.771.395.228.812.69.95.92.811.295|1993||183||4|30.32.47.50|
Edgar Ié|DEF|70|79|127.137.120.530.600.856.354.131.308|1994||176|3|70|17.36|
Ryan Gauld|MED|51|76|273.812.909.265.346.419.889|1995||169||51|30.32.38.47|
Diego Rolán|AVA|157|80|156.586.262.186.66.317.677|1993||179|25|157|17|
Simy|AVA|115|74|690.380.241.764.663.139|1992||198||115||
Albian Ajeti|AVA|143|77|132.115.331.925.204.827.374|1997||183|2|143||
Timon Wellenreuther|GR|2|76|479.549.80.354|1995||186||2|13|
Alberto Grassi|MED|84|78|100.601.760.663.196.285.238|1995||183||84|11.21.48|
Ander Capa|DEF|54|78|101.753.523|1992||176||54||
Alberto Cerri|AVA|84|79|663.463.416.196.760.674.673.232.285.764.209|1996||194||84||
Caleb Ekuban|AVA|60|77|218.516.856.378.416|1994||182|13|84|17|
George Pușcaș|AVA|132|82|440.128.139.618.652.720.681.378.151.308|1996||184|46|132|37|
Samu García|AVA|54|75|586.905.186.745.523|1990||179||54||D
Alexandru Mitriță|AVA|132|76|335.339.674.877.609.36.642.56.976|1995||167|26|132||E
Dimitrios Pelkas|MED|63|75|642.909.351.426.131|1993||175|36|63|55.9|
Lucas Torró|MED|54|76|430.723.638.281.721|1994||188||54||
Matheus Dória|DEF|16|78|159.553.834.390.938.778.109|1994||188|1|16|17|
Thomas Foket|DEF|20|75|465.472.820.80|1994||177||20||
Almamy Touré|DEF|0|79|587.281|1996||182|||34.4.44.59|
Paulo Otávio|DEF|16|75|933|1994||173||16||
Léo Baptistão|AVA|16|79|719.110.142.905.291.777.72|1992||181||16|3.51|
Jean-Pierre Nsame|AVA|24|76|81.75.786.942.895.232.517.331|1993||188|1|24||
Patrick Roberts|AVA|76|80|367.551.204.386.616.565.828.145|1997||167||76|26|D
Morten Thorsby|MED|116|81|414.768.874.378.238|1996||186|32|116|44|
Jaume Doménech|GR|54|76|905.427.888|1990||187||54|39|
Zinedine Ferhat|AVA|5|72|622.65.81|1993||180|1|5||D
Kortney Hause|DEF|76|75|936.934.99.921|1995||191||76|35.39.55|
Grischa Prömel|MED|2|78|479.421.874.298|1995||180||2||
Alexis Blin|MED|58|74|512.854.75.513.652|1996||184||58||
Timo Hübers|DEF|2|75|231|1996||190||2||
Florent Hadergjonaj|MED|89|75|942.315.425.484.65|1994||182||143||
Luiz Phellype|AVA|16|69|822.292.136.349.668.812.776.623.333|1993||188||16|47|
Matías Kranevitter|MED|4|80|734.110.787.947.577.478|1993||179||4|37.49.51|
Jaïro Riedewald|MED|124|80|32.243.744.790|1996||186|3|124||
Antonio Barreca|DEF|84|74|848.222.196.587.610.378.356|1995||184||84|34.44|
Pedro Chirivella|MED|54|81|532.387.600.654|1997||178||54|33.43.46|
Pere Pons|MED|54|70|386.66|1993||177||54||
Tarik Tissoudali|AVA|102|77|838.511.747.884.253.135.465.642|1993||175|14|124||
Bartosz Kapustka|MED|126|81|237.518.365.625.517|1996||179|21|126|25.44|
Kevin Bonifazi|DEF|84|74|848.139.760.871.154.366.513.781|1996||187||84||
Christopher Martins|MED|94|76|541.862.942.809|1997||188||94||
Sergio Herrera|GR|54|75|188.66.754.638|1993||192||54||
Brendan Chardonnet|DEF|58|73|818|1994||181||58||
Philipp Köhn|GR|143|77|705.767.587|1998||190||2||
Semi Ajayi|DEF|115|78|213.93.197.239.742.924.426|1993||193||76|15|
Álex Granell|MED|54|70|245.386|1988||175||54||
Iñigo Lekue|DEF|54|77|184.144.101|1993||180||54||
Sergi Guardiola|AVA|54|75|9.726.31.722.246.379.886.719.245|1991||185||54||
Filippo Romagna|DEF|84|76|463.618.165.196.781.728|1997||185||84||
Wilson Manafá|DEF|127|62|136.891.690.325.390.755|1994||174||127|52.7|
Simone Bastoni|MED|84|72|810.794.857.618.285|1996||181||84||
Aurélio Buta|DEF|127|74|744.281.820.233|1997||172||3||
Chang-hoon Kwon|AVA|37|74|266.365.381.458.457|1994||174||37|40|D
Ui-jo Hwang|MED|37|78|372.156.617.632.327.616.65|1992||184||37|39.40|
Eduard Löwen|MED|2|76|620.418.115.898.815|1997||188||2||
Isaac Mbenza|AVA|20|72|885.822.578.425.75.700.702|1996||187||58||D
Filip Krovinovic|MED|40|73|732.140.924.617.405|1995||175||40|18.46.7|
Antonio Puertas|AVA|54|75|726.72.390.753|1993||175||54||D
Cristian Arango|AVA|33|69|286.567.265.847.500.649.766.756.106|1995||178||33||
Roger Assalé|AVA|39|75|942.186.266|1993||167||39||
Nicolás Ibáñez|AVA|4|75|382.772.110.649.843.185|1994||179||4|51|
Daniel-Kofi Kyereh|MED|60|71|817.365|1996||179||60||
Cristian Espinoza|AVA|4|77|427.66.905.886.150.756.603|1995||172||4||D
Elvis Rexhbecaj|MED|89|76|933.231.898.115|1997||182||160||
Ianis Hagi|MED|132|81|335.356.377.717.66.65|1998||182|54|152||
Birger Meling|DEF|116|74|739.622.731.233|1994||173||116||
Emiliano Rigoni|AVA|4|77|138.438.947.100.768.283.834.116.527|1993||180||4|37.44|D
Paul Jaeckel|DEF|2|74|933.394.874.278|1998||188||2||
Moritz Nicolas|GR|2|75|158.874.899.735|1997||193||2||
Adam Masina|DEF|102|78|154.921.871.848|1994||189||102|44|
Joe Lolley|AVA|76|64|425.783.617.832|1992||178|1|76||D
Jérémy Gélin|MED|58|70|731.744.75.657.19|1997||182||58||
Adrián Embarba|AVA|54|71|719.291.72|1992||173||54||D
Samuel Bastien|MED|129|74|80.118.218.822.175.484.362|1996||177||20||
Hassane Kamara|DEF|39|73|502.820.867.612.921.871|1994||168||58||
Jean Butez|GR|58|72|530.585.744.232|1995||189||58||
Jordan Hugill|AVA|76|72|695.925.565.197|1992||183||76||
Amer Gojak|MED|21|74|277.848.352.404|1997||184||21||
Dimitrios Giannoulis|DEF|63|77|642.897.83.113.616.115|1995||175|32|63|9|
Ezequiel Ponce|AVA|4|79|611.737.390.530.12.809.283.423|1997||178||4|17.46|
Tyler Roberts|AVA|123|78|924.920.516.698|1999||180||76|17|
Toni Martínez|AVA|54|76|641.925.886.187.345.325.66|1997||180||54|52.7|
Landry Dimata|AVA|20|76|472.933.80.291.589.769.651|1997||185||129||
Percy Tau|AVA|164|77|166.875.224.80.700|1994||170||164||D
Otávio (1994)|MED|16|74|102.156.112.358|1994||176||16|50|
Léo Duarte|DEF|16|78|357.7.131.112|1996||183||16||
Jordan Lotomba|DEF|143|76|509.942.612.354|1998||177||143||
Toni Lato|DEF|54|78|888.648.638.549|1997||173||54||
Flavius Daniliuc|DEF|165|75|612.764.767.416.132|2001||188||165||
Arnaud Nordin|AVA|58|76|763.19.578.548.731|1998||170||58||D
Filip Uremovic|DEF|40|74|277.745.790.418.405.485|1997||184||40||
Oliver Abildgaard|MED|43|74|23.745.204.416.232.681.768|1996||192||43||
Karol Świderski|AVA|126|78|454.642.212.416.654|1997||184||126|43.46.9|
Amos Pieper|DEF|2|75|91.923|1998||192||2||
Mërgim Vojvoda|DEF|89|80|822.797.585.848.232.871|1995||187|75|2||
Andrea Cistana|DEF|84|73|165|1997||187||84||
Irvin Cardona|AVA|101|77|587.207.818.115.763.291|1997||185||58|34.4|D
Michel Vlap|MED|124|73|414.80.91.334|1997||189||124||
Fiete Arp|MED|2|79|408.133.422.626|2000||184||2||
Erhan Masovic|DEF|145|72|244.224.6.898|1998||187||160||
Nathan Broadhead|AVA|123|77|177.828.299.929.447.935|1998||178||123||E
Kelvin Amian|DEF|58|65|854.810.600|1998||180||58||
Tahith Chong|MED|42|83|552.647.425.923.224.145.539.790|1999||185|7|42|31.47|
Matthieu Udol|DEF|58|72|323.706.521|1996||178||58||
Xadas|MED|127|76|163.554.585|1997||179||127|9|
Conor Chaplin|AVA|76|74|692.236.129.447|1997||168||76||
Federico Baschirotto|DEF|84|73|238.97.513|1996||184||84||
Gaëtan Perrin|AVA|58|75|541.868.15.494.530|1996||169||58|41|D
Giulio Maggiore|MED|84|73|810.764|1998||187||84||
Rick van Drongelen|DEF|124|76|807.408.874.471.769|1998||185||124||
Jorge Sánchez|DEF|111|82|778.77.32.325.185.642|1997||175|63|111|52|
Gautier Larsonneur|GR|58|74|818.885.763|1997||181||58||
Domagoj Bradarić|DEF|40|76|405.530.764.416|1999||178||40|4|
Joseph Aidoo|DEF|60|77|410.377.203.886|1995||184|17|60|43|
Rafa Mujica|AVA|54|74|516.723.507.92.59|1998||183||54|17|
Pietro Pellegri|AVA|84|78|378.587.7.848.285|2001||188||84|34.6|
Pape Abou Cissé|DEF|135|78|4.632.763.29|1995||198||135||
Moussa Wagué|DEF|135|83|466.127.612.642.403.83.657.977|1998||177|21|135|9|
Francis Guerrero|DEF|54|74|142|1996||185||54||
Nathaniel Phillips|DEF|76|81|532.298.160.204.197.263.924|1997||190||76|13.33|
Ibrahima Sissoko|MED|100|74|818.293.898.600|1997||193||58||
Adryelson|DEF|16|75|811.62.159.541.80|1998||182||16||
Selim Amallah|MED|102|78|585.822.886.888|1996||186||20||
Arnór Sigurdsson|AVA|82|70|614.194.895.146.550|1999||177||82||E
Gerzino Nyamsi|DEF|24|74|502.731.293.535|1997||195||58||
Matheus Reis|DEF|16|72|834.279.582.732.812.194|1995||184||16|47.7|
Lyanco|DEF|16|78|834.848.154.805.43.112|1997||188||16||
Santi Comesaña|MED|54|76|719.905|1996||184||54||
Cédric Zesiger|DEF|143|74|606.391.942.933.115|1998||194||143||
Fabien Centonze|DEF|58|74|950.223.521.323.600.416|1996||190||58||
Gabriel Suazo|DEF|29|74|227.854.787|1997||178||29||
Alberto Dossena|DEF|84|72|673.100.794.118.196.232|1998||188||84|44|
Szymon Żurkowski|MED|126|79|401.356.285.810|1997||185||126||
Noah Weißhaupt|AVA|2|71|365.817|2001||181||2||E
Hjalmar Ekdal|DEF|142|77|170.410.798.268.175.312|1998||188||142||
Gabriele Zappa|DEF|84|72|674.196|1999||187||84|44|
Nadir Zortea|DEF|84|74|100.238.764.781.366.196.154|1999||186||84|59|
Felix Agu|DEF|115|76|899.923|1999||180||2||
Filip Ugrinic|MED|143|74|321.310.942.888|1999||184||143||
Andreaw Gravillon|DEF|64|76|440.139.674.781.97.319.820.848.29|1998||188||64|21|
Elisha Owusu|MED|60|77|541.330.465.15|1997||182||58||
Sam Surridge|AVA|76|75|160.939.628.830.825.617.603|1998||191||76||
Mathieu Cafaro|AVA|58|74|854.820.822.763.662|1997||178||58||D
Yannik Engelhardt|MED|2|72|923.302.232.158|2001||184||2||
Tom Krauß|MED|2|76|705.620.548.539.898.231|2001||182||2||
Yan Valery|DEF|151|78|805.145.81.789.942|1999||180||58||
Peter Etebo|MED|115|75|349.507.825.379.371.921.90.376|1995||176||115||
Teddy Teuma|MED|101|74|866.727.875.820.822|1993||176||58||
Sikou Niakaté|DEF|100|74|885.398.323.163|1999||186||58||
Keven Schlotterbeck|DEF|2|75|365.874.898.115|1997||189||2||
Hervé Koffi|GR|18|77|20.530.120.585.702.521.81|1996||183||18|17|
Yahia Fofana|GR|39|78|511.81.180|2000||194||58||
Vladyslav Supryaga|AVA|153|75|749.275.768.948.287|2000||182||153||
Justin de Haas|DEF|124|72|592.345.888|2000||194||124||
Omar Richards|DEF|76|77|720.133.617.632.732|1998||174||76|5|
Vladan Kovacevic|GR|21|73|715.812.517.616|1998||192||21|47.7|
Hans Nicolussi Caviglia|MED|84|70|460.673.663.764.463.895.356|2000||184||84||
Rihito Yamamoto|MED|86|75|844.372.797.365|2001||179||86||
John Victor|GR|16|74|777.443.886.159.617|1996||192||16|28|
Tino Anjorin|MED|76|79|535.425.692.215.285.848|2001||185||76|58|
Adam Idah|AVA|78|77|234.616.204.830|2001||190||78||
Ardian Ismajli|DEF|1|79|405.810.285.848|1996||187|44|160||
Kilian Fischer|DEF|2|71|620.933|2000||182||2||
Nahuel Bustos|AVA|4|72|182.649.551.386.834.771.437|1998||176||4||
Valentin Rosier|DEF|58|76|736.266.812.141.612.186.638|1996||175||58|47|
Will Smallbone|MED|78|74|805.825.568|2000||173||76||
Juan Manuel Sanabria|DEF|157|76|104.779.110.772.766|2000||173||157|17|
Hamza Mendyl|DEF|102|79|530.266.374.625.90|1997||179||102|17|
Alejandro Catena|DEF|54|74|719.638|1994||194||54||
Dylan Bronn|DEF|151|77|210.465.323.764.786|1995||185||58||
Junior Adamu|AVA|165|72|318.767.331.365.204|2001||183||115||
Lucas Robertone|MED|4|73|917.72|1997||169||4||
Moritz Jenz|DEF|2|75|509.319.204.933.548.942|1999||190||2||
Gustavo Assunção|MED|16|75|345.371.21|2000||178||16||
Kjell Scherpen|GR|124|74|310.32.166.472.907.827.875|2000||204||124||
Casper Tengstedt|AVA|43|75|566.6.739.140.416.354|2000||184||43|7|
Ander Guevara|MED|54|77|725.66|1997||180||54||
Yukhym Konoplya|DEF|153|78|788.264.158|1999||180|27|153||
Léo Jabá|AVA|16|77|234.34.642.892.295|1998||178||16|9|D
Noah Katterbach|DEF|2|75|231.132.408|2001||180||2||
Zaydou Youssouf|MED|34|76|156.763.345.41|1999||182||58||
Steven Alzate|MED|33|76|526.831.166.822.426.108|1998||177||76||
Marcos André|AVA|16|67|397.887.886.188.888|1996||184||16||
Martín Aguirregabiria|DEF|54|75|66.345.307.779.188|1996||178||54||
Ki-Jana Hoever|DEF|124|78|532.934.648.825.15.790|2002||180||124|18.39.55|
Ludovit Reis|MED|124|76|312.899.408.224|2000||178||124||
Franco Israel|GR|157|77|463.460.812.848|2000||190|2|157|17.47.7|
Jorge Cuenca|DEF|54|78|9.127.72.905.379.367|1999||189||54|38|
Mujaid Sadick|DEF|54|74|262.377.719|2000||183||54||
David Jurásek|DEF|32|76|573.802.140.421.141|2000||183||32||
Joe Gelhardt|AVA|76|75|516|2002||179||76|17|
Tomás Esteves|MED|127|74|325.681|2002||180||127|52.7|
Hassane Bandé|AVA|18|77|471.32.332.591.75|1998||178||18||E
Becir Omeragic|DEF|143|75|338.578.132|2002||187||143||
Leonidas Stergiou|DEF|143|75|331.298.415|2002||181||143||
Anthony Musaba|AVA|124|72|589.587.207.414.323.789.769.351|2000||182||124||E
João Batxi|AVA|3|70|214.494|1998||175||127||D
Oliver Sørensen|MED|43|74|311.566.407.663|2002||180||43||
Aihen Muñoz|DEF|54|76|725.127.721.291.66.386|1997||175||54|3|
Walid Cheddira|AVA|102|80|663.128.366.601.291.781.513.118|1998||187|6|84|21.6|
Manu Vallejo|AVA|54|73|245.888.66.386.723.779|1997||167||54||
Fisayo Dele-Bashiru|MED|115|75|789.411.510|2001||176||115|48|
Ethan Laird|DEF|76|79|552|2001||177||76|47|
Ignatius Ganago|AVA|24|75|612.521.600.607|1999||176||24||
Eliot Matazo|MED|20|76|587.744.426|2002||170||20||
Arthur Zagré|DEF|18|78|647.587.266.882.300|2001||168||58|34.4|
Giulian Biancone|DEF|58|77|587.207.862.617.632|2000||187||58|34|
Han-Noah Massengo|MED|58|76|110.587.541.75.168.15.175.115|2001||178||58||
Timothée Pembélé|DEF|58|77|647.156.828.511|2002||182||58|4.42.53|
Tomas Suslov|MED|52|79|312.416|2002||173|40|52||
Billal Brahimi|AVA|5|74|512.820.81.612.818.797.777.295|2000||183||58||D
Stefano Turati|GR|84|74|781.729.366.580|2001||188||84||
David Zima|DEF|32|76|802.848|2000||190||32||
Osman Bukari|AVA|60|80|80.465.600.294.116.928|1998||170|18|60||D
Tomás Tavares|DEF|127|76|140.66.346.132.809.501.21.931|2001||182||127|18.30|
Shuto Machino|AVA|86|75|940.792.422.158|1999||185||86||
Abdel Abqar|DEF|102|76|105.66.379|1999||188||102||
Lewis O'Brien|MED|76|73|162.425.617.247.565.500.830.935|1998||173||76||
Michel Adopo|MED|58|75|848.100.196|2000||187||58|59|
Jeremy Sarmiento|AVA|49|78|166.924.447.175.238.565|2002||183||54||E
Dennis Cirkin|DEF|91|73|828|2002||182||78||
Javi López|DEF|54|75|66.725.723.354|2002||183||54||
Adam Obert|DEF|52|79|196|2002||188|12|52|44|
Issa Soumaré|AVA|135|66|868.135.511.15|2000||182||135||E
Umut Tohumcu|MED|2|73|421.422|2004||175||2||
Valentin Gendrey|DEF|58|73|75.513.421|2000||179||58||
Roberto López|MED|54|75|725.188.189.186.978|2000||179||54||
Nico Melamed|AVA|54|75|291|2001||173||54||E
Christopher Wooh|DEF|24|76|19.521.731.809|2001||191||58||
Ruben Kluivert|DEF|124|78|882.309.200.541|2001||187||124|41|
Eiran Cashin|DEF|78|71|263.166.145.146|2001||184||76||
Marcus Pedersen|DEF|116|75|861.576.354.781.848|2000||184||116|13|
Kelvin Yeboah|AVA|84|70|918.827.378.115.578.822.569|2000||182||60||
Niels Nkounkou|DEF|58|75|299.822.197.763.281.848|2000||180||58|11|
Himad Abdelli|MED|5|73|511.81.553|1999||185||58||
Marius Mouandilmadji|AVA|28|73|325.265.706.769|1998||190||28||
Max Rosenfelder|DEF|2|73|365|2003||186||2||
William Bøving|AVA|43|73|233.827.548|2003||176||43||
Matías Arezo|AVA|157|71|734.390.677.395|2002||180||157||
Fran Pérez|AVA|54|73|888.719|2002||176||54||D
Raúl Moro|AVA|54|76|510.841.723.886.32.638|2002||169||54|48|E
Gabriel Silva (2002)|AVA|16|70|653.776|2002||177||16||E
Filip Stevanovic|AVA|145|75|665.414.776.707|2002||177||160||E
Iván Romero|AVA|54|73|787.189.523|2001||172||54|35|
Rodri Sánchez|AVA|54|74|143.142.38|2000||175||54||D
Nicolò Bertola|DEF|84|71|810.871|2003||192||84||
Étienne Youté Kinkoué|DEF|58|71|511|2002||196||58||
Rav van den Berg|DEF|124|72|645.565.231|2004||190||124||
Juan Larios|DEF|54|70|805.779|2004||170||54||
Ángel Alarcón|AVA|54|79|127.325.882|2004||181||54|3.7|E
Nicolás Capaldo|DEF|4|76|150.767.408|1998||177||4||
Adam Karabec|MED|32|73|806.408.541|2003||187||32|41|
Rassoul Ndiaye|MED|135|72|330.511|2001||179||58||
Jacob Ondrejka|AVA|142|73|284.744.663|2002||180||142||E
Zito Luvumbo|AVA|3|71|232.196.549|2002||171|2|3|44|D
Maestro|MED|3|71|295.29.65|2003||173||3||
Matheus Martins|AVA|16|73|358.871.921.159|2003||179||16||E
Leonardo Lelo|DEF|127|68|629.200.163|2000||175||127||
João Victor|DEF|16|74|234.111.140.600.892.194|1998||187||16|31.38|
Bertuğ Yıldırım|AVA|152|77|411.84.731.379.131|2002||191|3|152||
Isidro Pitta|AVA|122|75|754.462.704|1999||183||122||
Samuel Edozie|AVA|76|74|805.80|2003||179||76||E
Younes Ebnoutalib|AVA|2|70|673.281|2003||191||2||
Romaine Mundle|AVA|76|73|822.828|2003||180||76||E
Kacper Urbański|MED|126|78|515.154.580.517.401|2004||183|11|126||
Isaak Touré|DEF|58|73|511.553.15.319.871|2003||206||58||
Kevin Paredes|MED|45|64|247.933|2003||170||45||
Pablo Torre|MED|54|80|709.127.386.549|2003||173||54|27.3|
Luca Lipani|MED|84|73|378.781|2005||185||84||
Clayton|AVA|16|64|903.235.200.892.732.632|1999||184||16||
Jonas Adjetey|DEF|60|76|132.933|2003||188||60|20|
Nicolás Fernández Mercau|AVA|4|72|771.283.609|2000||172||4||
Jordán Carrillo|AVA|111|73|778.813.865|2001||168||111||E
Mohamed Touré|AVA|8|74|31.820.662.716.616|2004||186||68||
Kaiky|DEF|16|73|777.72.67|2004||187||16||
Emersonn|AVA|16|73|102.402.854|2004||186||16||
Elias Baum|DEF|2|73|281|2005||178||2||
Caleb Wiley|DEF|45|78|108.293.215.921.695|2004||180|3|45||
Yoann Cathline|AVA|58|73|398.319.71.882|2002||176||58||E
Lukas Ullrich|DEF|2|74|418.158|2004||180||2||
Muhammed Damar|MED|2|73|421|2004||185||2||
Djeidi Gassama|AVA|105|76|647.466.789.717|2003||177||105|36|E
Paxten Aaronson|MED|45|74|678.281.907.882.229|2003||175||45||
Dennis Seimen|GR|2|71|298.750|2005||192||2||
Ousmane Camara|DEF|100|72|662.81|2003||197||58||
Ismaël Gharbi|AVA|151|78|647.163.115|2004||173||58|36.4.42|E
Agustín Álvarez|AVA|157|74|677.781.768.283.580|2001||180||157||
Luca Marianucci|DEF|84|73|285.601.848|2004||186||84|21|
Julien Duranville|AVA|20|76|80.157.132|2006||173||20||E
Damion Downs|AVA|45|75|315.231.805.408|2004||192||2||
Derry Scherhant|AVA|2|73|418.365|2002||185||2||E
Unai Gómez|MED|54|76|101.184.144.871|2003||183||54||
Marin Ljubicic|AVA|40|74|405.501.874.302|2002||183||40||
Matija Frigan|AVA|40|70|404.473.663|2003||185||40||
Max Alleyne|DEF|76|78|551.921|2005||185||76|26|
Metinho|MED|129|73|358.862.536.807.132|2003||178||129||
Ashley Phillips|DEF|76|75|146.853.684.825|2005||192||76||
Alan Matturro|DEF|157|75|255.378.523.788|2004||189||157||
Rafik Belghali|DEF|5|71|536.471.416|2002||186||20||
Demir Ege Tıknaz|MED|152|73|141.732.163|2004||193||152|25|
Adam Daghim|AVA|43|73|25.767.318.933|2005||186||43||D
Jeffinho|AVA|16|73|159.541|1999||181||16|41|E
Junior Olaitan|MED|12|73|210.862.393.402.141|2002||174||12||
Marius Broholm|AVA|116|71|739.495.530|2004||176||116||D
Saba Goglichidze|DEF|61|73|285.871.921|2004||193||61||
Pablo Marín|MED|54|75|725|2003||178||54||
Edoardo Motta|GR|84|70|728.510|2005||194||84|48|
Max Moerstedt|AVA|2|72|421|2006||194||2||
Samuel Amo-Ameyaw|AVA|76|72|805.293|2006||174||76||D
Rafiu Durosinmi|AVA|115|71|481.902.681|2003||192||115||
Diogo Sousa|MED|127|70|908|2006||176||127||
Adam Aznou|DEF|102|79|133.886.299|2006||178||54|5.53|
Vasilije Adžić|MED|109|76|463|2006||185||136||
César Palacios|MED|54|79|721.367|2004||182||54|11|
Bastien Meupiyou|DEF|58|74|600.934.74|2006||191||58|55|
Nestory Irankunda|AVA|8|79|31.133.391.921|2006||175||147||D
Jones El-Abdellaoui|AVA|102|73|916.467.203|2006||184||116||D
Ebenezer Akinsanmiro|MED|115|71|440.768.681|2004||184||115|6|
Jeremy Arévalo|AVA|49|76|709.298|2005||182||54||
Arthur|DEF|16|75|78.524|2003||173||16|5.56|
Ibrahim Sulemana|MED|60|72|416.196.100.154|2003||180||60|44|
Andrija Bulatovic|MED|109|73|521|2006||180||109||
Alessandro Vogt|AVA|143|71|331.421|2005||188||||
Julio Soler|DEF|4|75|506.160|2005||175||122||
Junior Mwanga|MED|58|71|156.293.511.600|2003||184||58||
Kaye Furo|AVA|20|70|225.224.164|2007||190||||
Adrian Przyborek|MED|126|73|685.510|2007||184||126||
Nobel Mendy|DEF|135|74|662.143.142.719.426|2004||187|1|135||
Yasin Özcan|DEF|152|72|484.99.80.141|2006||185||152||
Trey Nyoni|MED|76|78|532|2007||180||76|13|
Jay Robinson|AVA|76|71|805|2007||176||76||E
Oumar Camara|AVA|58|70|908|2007||176||58||E
Quentin Ndjantou|AVA|58|77|647|2007||182||58|36.4.58|E
Adrián Liso|AVA|54|73|258.779.379|2005||182||54||E
Andrés García|DEF|54|74|103.523.99|2003||185||54|59|
Axel Tape|DEF|58|74|647.524|2007||180||58|4|
Amorim|MED|16|65|360.74.378|2005||177||16||
Herba Guirassy|AVA|58|73|600|2006||177||58||E
Eivind Helland|DEF|116|71|757.154|2005||196||116||
Kento Shiogai|AVA|86|75|940.589.933|2005||180||86||
Cyriaque Irié|AVA|18|71|266.862.365|2005||185||39||D
Rayan Fofana|AVA|58|71|521|2006||180||58||
Darryl Bakola|MED|58|71|553.781|2007||178||58||
Mahamadou Nagida|DEF|24|72|731|2005||176||24||
Idrissa Gueye (2006)|AVA|135|68|400.323.871|2006||185||135||
Jorge Cestero|MED|54|73|721|2006||178||54||
Ricardo Rocha|DEF|127|78|345.163.140.853.822.692|1978||183|12||7.25.28.50|
Abel Xavier|DEF|127|83|295.140.128.723.648.299.532.371.737.565.499|1972||189|20||7|
Dimas|DEF|127|80|27.295.908.140.463.351.822.812.553|1969||185|44||6.7.29|
Hanno Balitsch|MED|2|78|231.524.548.620|1981||183|1|2|33|
Peer Kluge|MED|2|76|158.620.418.91|1980||179||46||
Raphael Schäfer|GR|2|76|620.298|1979||190||126||
Alexander Meier|AVA|2|79|817.408.281|1983||196||2||
Andreas Wolf|DEF|2|75|620.923.587|1982||182||154|44|
Alexander Madlung|DEF|2|78|418.933.281.302|1982||194|2|2|29.5|
Quique de Lucas|MED|54|77|291.647.215.66.722.307.203.430|1978||175||54|22.44|
Jérémie Aliadière|AVA|58|81|93.204.925.934.565.319|1983||183||58|15.2|
Hugo Viana|MED|127|82|812.610.888.638.163.62|1983||178|29|127|20.32.34.40.50.7|
Steve Harper|GR|76|79|610.162.824.425.166.426.828|1975||188||76||
Tony Hibbert|DEF|76|81|299|1981||172||76|45|
Jason Roberts|AVA|62|79|934.168.169.924.692.929.146.720|1978||185|15|76||
George McCartney|DEF|79|79|828.925.516|1981||183|34|79||
Malik Fathi|DEF|2|77|809.548.486.1|1983||185|2|2|53|
Bogdan Lobont|GR|132|84|326.32.308.356.737|1978||185|86|132|36.44|
Steve von Bergen|DEF|143|79|606.338.418.209.378.652.942|1983||186||143||
Hélder Postiga|AVA|127|85|325.853.763.654.812.779.888.510.262.732|1982||182|71|127|20.28.31.32.40.50.59.7|
Souleymane Camara|AVA|135|77|587.398.612.578|1982||174||135|24.4|D
Mauro Cetto|DEF|4|75|738.600.854.652.530.771|1982||182||4||
Grégory Pujol|AVA|58|74|600.80.193.885.368|1980||183||58||
Romain Pitau|MED|58|74|521.867.612.330.578|1977||178||58|4|
Cédric Kanté|DEF|100|78|293.316.612.654.330.4|1979||182|41|58|28|
Marc-Antoine Fortuné|AVA|67|76|530.818.882.19.924.204.270.929.236|1981||183||67||
Olivier Sorlin|MED|58|75|578.731.587.642.950|1979||183||58|25|
Cédric Barbosa|AVA|58|75|578.731.862.323.950|1976||179||58||E
Thomas Manfredini|DEF|84|75|760.871.356.201.100.154.378.781|1980||182||84||
Giampiero Pinzi|MED|84|79|510.871.218|1981||179|1|84|6|
Roberto Guana|MED|84|76|165.196.97.652.154.218.209.674|1981||178||84||
Stefano Lucchini|DEF|84|76|238.841.285.768.100.209|1980||186||84||
Francesco Lodi|MED|84|76|285.366.871.201.378.663|1984||183||84||
Abdoulaye Faye (1978)|DEF|135|81|521.316.155.610.825.925.426|1978||188|35|135||
Fabrice Pancrate|AVA|58|76|398.512.647.142.330.610.11.600|1980||185||58||D
Yohann Pelé|GR|58|75|512.854.330.553|1982||196||58|12|
Maurizio Domizzi|DEF|84|78|18.510.7.575.768.165.97.601.871.895|1980||185||84|11|
Steven Reid|DEF|78|80|568.146.698.924.175|1981||180|23|76||
Carlos Gurpegui|DEF|54|79|101.144|1980||181||54|17|
José María Movilla|MED|54|77|586.110.779.722.719|1975||170||54||
Óscar González|MED|54|76|887.886.779.632|1982||181||54||
Gorka Iraizoz|GR|54|79|144.753.291.101.386|1981||191||54|17|
Alberto Lopo|DEF|54|79|291.262.379.384|1980||186|9|54||
Miguel Ángel Corona|MED|54|76|779.67.72.167|1981||176||54||
Rui Fonte|AVA|127|77|93.243.812.909.291.140.137.120.163.367.530.292.345|1990||181||127|15.30.32.38.40.41.42.46.47.9|
Shaun Maloney|MED|51|79|204.99.929.217.426|1983||171||99|38.45|
Mike Williamson|DEF|76|79|805.270.936.921.692.610.934|1983||193||76|35.39.55|
Franck Béria|DEF|58|76|323.530|1983||180||58|4|
Franck Signorino|DEF|58|75|323.600.379.307.702.819.820|1981||175||58||
Jean-Pascal Mignot|DEF|58|74|15.763.330|1981||183||58||
Hassan Yebda|MED|5|79|15.819.512.140.692.601.390.871.137|1984||188||58|30.7|
Silvio Proto|GR|20|78|80.135.472.632.510|1983||184|13|20||
Michaël Ciani|DEF|58|79|702.15.193.319.156.510.812.291|1984||192|1|58|30|
Grant Holt|AVA|76|79|789.617.147.793.616.929.99.425.934.419|1981||183||76||
Dean Whitehead|MED|76|78|641.828.825.565.425|1982||180||76||
Custódio|MED|127|80|812.276.908.163.33|1983||180|10|127|25.28.32.34.40.52|
Tonel|DEF|127|78|325.27.554.812.277.136.349.120.137|1980||185|26|127|20.25.40.50|
Alan (1979)|AVA|16|76|446.554.325.908.163|1979||174||16|7.9.28.30.32.41.52|D
David Vaughan|MED|123|81|239.725.147.828.617|1983||170|42|123||
Eliseu|DEF|127|82|120.891.586.510.779.140|1983||176|29|127|20.25.28.30.40.46.7.8|
Antolín Alcaraz|DEF|122|82|710.356.136.224.929.299.507.528|1982||185|23|122|45|
Scott Carson|GR|76|84|516.532.789.213.99.924.176.929.263.551|1985||190|4|76|19.2.26.43|
Moisés Hurtado|MED|54|77|291.753.632.390.386|1981||185|1|54|42|
Josep Lluís Martí|MED|54|77|549.189.787.725|1975||180||54|43.59|
Esteban|GR|54|77|723.110.787.203.72|1975||176||54||
Juan Rodríguez (1982)|MED|54|77|586.262.379|1982||185||54||
Mickaël Chrétien Basser|DEF|102|76|19.176.293|1984||179|36|58||
Orestis Karnezis|GR|63|83|623.654.871.390.921.601|1985||189|49|63|11.21.25.28.32.38|
Marcin Wasilewski|DEF|126|83|800.931.514.80.518.930|1980||186|60|126|2.44|
Felipe (1984)|DEF|16|77|871.356.209.794.663.440.760|1984||188||16|37|
Steven Taylor|DEF|76|77|610.936|1986||188||76|43|
Karim Haggui|DEF|151|79|293.524.298.302.331|1984||190||151||
Michael Krohn-Dehli|MED|43|85|32.707.807.172.203.787.262|1983||170|62|43|36.59|
François Modesto|DEF|58|76|746.196.575.587.632|1978||184||58|24.34|
Víctor Montaño|AVA|33|74|567.316.578.731.845|1984||177|1|33||
Jérémy Clément|MED|58|77|541.717.647.763|1984||180||58|4|
Panagiotis Kone|MED|63|79|448.165.154.871.356.390.12|1987||183||1|25|
Pablo Barrientos|AVA|4|74|771.201.296|1985||175|1|4|51|D
Júlio Sérgio|GR|16|79|777.462.737.513|1978||184||16|36.44|
Daniele Conti|MED|84|77|737.196|1979||178||84||
Brett Holman|MED|8|82|354.300.589.22.99.51|1984||177|63|8|54|
Simone Tiribocchi|AVA|84|74|510.285.848.139.794.218.513.100.696|1978||178||84||
Simone Vergassola|MED|84|75|768.848.794|1976||174||84|21|
Daniele Cacia|AVA|84|74|679.841.760.356.513.729.650.416.154.97|1983||181||84||
Davide Biondini|MED|84|78|209.729.196.100.378.781|1983||178|2|84||
Luca Rigoni|MED|84|76|729.679.218.652.378.663|1984||185||84||
Cristian Raimondi|MED|84|76|100.696.652.18|1981||182||84|48|
Emanuele Calaiò|AVA|84|78|848.841.674.601.794.378.201.810|1982||179||84|21.43|
Weligton|DEF|16|76|659.669.391.586|1979||186||16|28|
Daniele Galloppa|MED|84|78|737.859.97.794.663.575|1985||181|2|84|19|
Cédric Hengbart|DEF|58|73|759.15.4|1980||183||58||
Asier Riesgo|GR|54|77|753.725.638.386.186|1983||185||54||
Laurent Bonnart|DEF|58|77|855.512.553.587.530.4.502|1979||170||58|24.4|
Dariusz Dudka|DEF|126|81|930.15.523.145.514|1983||183|65|126||
Rúben Amorim|MED|127|83|120.140.163|1985||178|14|127|30.32.40.46.7|
Evaldo|DEF|16|76|102.325.554.163.812.262.380.582|1982||184||16|28.30.34|
Rubén Castro|AVA|54|78|507.67.262.709.384.754.719.142.307.586|1981||174||54||
Matteo Contini|DEF|84|78|7.18.760.580.118.663.601.779.794.100.461.128|1980||184||84|11.44.6|
Andrea Pisanu|MED|84|74|196.794.416.890.663.154.694.579|1982||178||84|44|
Javier Flaño|DEF|54|74|638.283.188|1984||177||54||
Grégory Arnolin|DEF|103|74|647.727.380.554.908.813.668|1980||187||58||
Miguel Ángel Moyá|GR|54|81|549.888.379.110.725|1984||186||54|51.59|
Iván Ramis|DEF|54|76|549.886.929.523.753|1984||188||54|45|
Ragnar Klavan|DEF|55|83|916.417.22.115.532.196|1985||185|130|154|33|
Robert Koren|MED|53|82|531.924.426.557|1980||175|61|88||
Simon Vukcevic|AVA|109|78|665.812.146.911.480.522.214|1986||179|5|88|40|D
Diego Colotto|DEF|4|77|296.109.262.291|1981||184||4|42|
Damià Abella|DEF|54|80|127.709.142.638.565|1982||188|4|54|22.3.58|
Massimo Gobbi|DEF|84|78|858.196.356.663.218|1980||183|1|84||
Alessandro Lucarelli|DEF|84|77|679.652.165.356.18.729.794.378.663|1977||182||84||
Gennaro Bracigliano|GR|58|75|19.81.553|1980||182||58|24|
Olivier Sorin|GR|58|74|19.15.731|1981||189||58||
Davide Moro|MED|84|73|285.890.18.764|1982||176||84|48|
Michael Agazzi|GR|84|80|100.859.781.359.196.218.7.565|1984||189||84|41.52|
Jesús Gámez|DEF|54|78|586.110.610|1985||182||54|28.51|
Nino|AVA|54|75|283.523.189.638|1980||169||54||
Ivo Ilicevic|AVA|40|79|898.394.0.408.85.620|1986||174|8|2||E
Marco Motta|DEF|84|81|100.871.848.737.463.201.154.378.921.213|1986||186|1|84|21.44.6|
Alberto Rodríguez|DEF|125|77|163.812.732|1984||182||125|30.39|
Maxi Moralez|MED|4|78|710.917.100.527.609|1987||158|1|4||
Darío Cvitanich|AVA|4|79|125.32.649.150.612.182|1984||170||4||
Marco Ruben|AVA|4|77|738.734.905.275.950.843.102|1986||179||4||
Emmanuel Culio|MED|4|76|438.710.191.371.635.558.262.62.507.779.549|1983||176||4||
Chu-young Park|AVA|37|81|327.587.93.203.921.60.873|1985||182||37|15.40|
Fabian Johnson|AVA|45|79|1.933.421.158|1987||183||2|42|E
Lorenzo De Silvestri|DEF|84|79|510.356.768.848.154|1988||187||84|21.37.44|
André Luiz (1980)|DEF|16|74|242.446.112.19.653|1980||185||16|50|
Joe Ledley|MED|123|82|197.204.243.263.213.610|1987||183|77|123||
Julian Baumgartlinger|MED|0|80|1.117.548.524.115|1988||181|||53.56|
Mariano Andújar|GR|4|82|427.652.296.201.601|1983||194|11|4|43.48.51|
Ángel Lafita|AVA|54|77|258.779.262.379.47|1984||188||54||E
Simone Missiroli|MED|84|73|729.858.196.781.760|1986||191||84||
Nathan Dyer|AVA|76|79|175.805.790.830.518|1987||165||76|2.44|D
Somen Tchoyi|MED|24|78|767.924.115|1983||190|15|24||
Manu del Moral|AVA|54|80|104.110.379.787.283.753.886|1984||186|1|54||
Danny Simpson|DEF|76|82|744.552.828.447.146.610.698.518|1987||178||76|10.2.20.44.58|
Onyekachi Apam|DEF|115|78|717.612.731.784|1986||175|14|115||
Imanol Agirretxe|AVA|54|79|101.725|1987||187||54||
Ádám Szalai|AVA|73|80|548.421|1987||193||73|53|
Nicolai Müller|MED|2|77|394.762.548.408.281|1987||175|2|2|53|
Brad Guzan|GR|45|83|99.426.565.108|1984||193|64|45||
Victor Anichebe|AVA|115|83|299.924.828|1988||190|11|115||
Hélder Barbosa|AVA|127|76|325.27.860.909.163.72.12.33.655.411|1987||172|2|127|28.32.34.7|E
Morgan Amalfitano|MED|58|79|193.319.553.924.925.530.731|1985||176|1|58|24|
Leon Britton|MED|76|79|925.830.790|1982||165||76|45|
Sven Ulreich|GR|2|83|298.133.408|1988||192||2|11.26.27.5.53|
Nicolás Pareja|DEF|4|80|80.291.809.787|1984||183||4|35.42.49.59|
Gary Hooper|AVA|76|77|526.783.204.616.789|1988||175||76||
Kévin Constant|MED|68|79|854.502.218.378.7.856.154.329|1987||184||58||
Chris Gunter|DEF|123|83|197.853.617.720.213|1989||180|109|123||
Pedro Mosquera|MED|54|79|721.379.283.262.754.9|1988||184|1|54|31|
Cédric Mongongu|DEF|129|76|587.950.290.578|1989||189||161||
Antunes|DEF|127|81|363.668.737.513.520.18.656.586.275.379.812|1987||175|13|127|20.25.36.40.41.44.47.50.7|
Paolo De Ceglie|DEF|84|81|463.794.378.663.553|1986||184||84|12.21.24.44.6|
Fernando Forestieri|AVA|84|76|378.794.871.586.285.128.921.789|1990||173||4||
Valentin Stocker|AVA|143|78|132.418|1989||178||143||E
Miguel Torres|DEF|54|80|721.379.632.586|1986||183||54|19.3|
Gabriel Mercado|DEF|4|82|710.296.734.787.57.443|1987||181|25|4|49|
Claudio Yacob|MED|4|77|710.924|1987||198|2|4|51|
Joel Obi|MED|115|83|440.663.848.218.65.764.729|1991||177|17|115|37.43.44|
Glenn Murray|AVA|76|78|198.824.166.243.720.160|1983||183||76||
Modibo Maïga|AVA|100|78|512.330.925.698.323.52|1987||185||100||
Filip Djordjevic|AVA|145|81|294.711.600.510.218|1987||186|14|88||
Nenad Tomovic|DEF|145|78|711.294.378.513.356.218.760.13.244|1987||184||88||
Ibrahima Traoré|AVA|68|79|418.298.158|1988||170||58||D
Sam Vokes|AVA|123|80|160.934.516.168.616.790.175.166|1989||186||76||
Milos Ninkovic|MED|145|80|244.275.950.294.832|1984||180|28|88||
Bradley Johnson|MED|76|77|615.823.516.166.616.263.146|1987||183||76||
Andreas Weimann|AVA|165|82|99.921.263.934.168.924.146.718.216|1991||188|26|165|39|
Dale Stephens|MED|76|76|178.628.805.213.166.175|1989||185||76||
Ignacio Scocco|AVA|4|76|611.865.37.443.828|1985||177||4|49|
Mané|DEF|54|77|104.110.72.379.542|1981||174||54||
Zanka|DEF|43|82|233.648.425.351.302.164.80.499|1990||191|37|43||
Kolbeinn Sigthórsson|AVA|82|83|22.32.600.371.14.431|1990||186|64|82|44.52.54|
Gonzalo Bergessio|AVA|4|81|683.439.710.140.771.763.201.721.768.109|1984||179|3|4|11.3.31|
Dimitrios Siovas|DEF|63|76|937.445.656.632.186.754.362.644|1988||192||63|25.34.38.40.55|
André Dias|DEF|16|77|659.357.389.834.510|1979||184||16||
Alberto Botía|DEF|54|80|127.813.787.283.632.45.63.488|1989||187||54|26.3.30.38.40.55|
Maurício (1988, Portimonense)|MED|16|66|358.34.947.642.654.690|1988||184|0|16|9.12.37|
Bastian Oczipka|DEF|2|79|524.817.281.874.91|1989||184||2||
Sebastián Blanco|MED|4|74|561.924|1988||168||4|49|
Ilija Nestorovski|AVA|97|79|803.652.871.97.801|1990||183||88||
Marco Höger|MED|2|78|231|1989||186||2||
Emmanuel Mayuka|AVA|163|78|542.942.805.330.323|1990||180||163|42|
Harry Arter|MED|78|75|213.160.198.197.367.617|1989||176||76||
Luís Neto|DEF|127|76|891.597.794.947.351.812|1988||187||127|12.25.37.40.45.47.7|
Fabien Lemoine|MED|58|75|731.763.319|1987||175||58||
Fabiano Santacroce|DEF|84|77|232.165.601.663.650.841|1986||181||16||
Jordon Mutch|MED|76|77|145.270.921.197.698.243|1991||175||76||
Lamine Koné|DEF|39|77|502.319.828.293|1989||189||58||
Florin Gardos|DEF|132|79|339.805.877.8|1988||194|14|132||
Christopher Schindler|DEF|2|75|1.425|1990||189||2||
Daniel Didavi|MED|2|78|298.620.933|1990||179||2||
Castro|MED|127|77|325.629.813.484.402.163.582|1988||180||127|7.12.28.41.55.59|
Marco Estrada|MED|29|79|864.578|1983||177|33|29|17.4|
Bruno Ecuele Manga|DEF|59|78|156.736.81.319.197.266|1988||186||59||
Facundo Roncaglia|DEF|4|79|150.291.296.356.378.203.888.638|1987||175||4|42.49|
Barry Bannan|MED|51|82|99.263.147.516.243.155.789.568|1989||169|27|51||
Emmanuel Rivière|AVA|103|80|763.854.587.610.638.323.241|1990||182|5|103|43.44|
Petr Jiracek|MED|32|82|902.933.408.806.453.347|1986||180|28|22||
Libor Kozak|AVA|32|80|510.165.99.128.18.804.806|1989||193||22||
Bernardo Espinosa|DEF|33|76|709.787.813.565.386.291.106|1989||192||33||
Jordi Masip|GR|54|79|127.886|1989||179||54|3.36|
Kyle Naughton|DEF|76|80|790.853.565.518.616.830|1988||180||76|12.42|
Lisandro Magallán|DEF|4|77|382.150.738.254.32.66.241.80.283.865.917|1993||181||4||
Fabián Monzón|DEF|4|79|150.142.612.541.358.201.864|1987||179|7|4||
Ryan Bennett|DEF|76|75|675.616.934.518|1990||188||76|39|
Marco Fabián|MED|111|76|219.185.281.843|1989||170||111||
Alberto Paloschi|AVA|84|80|7.663.378.218.830.100.760.196.794|1990||182||84|11|
Javi Márquez|MED|54|77|291.549.283.390|1986||174||54|22.42|
Nélson Oliveira|AVA|127|81|140.732.668.262.731.830.617.616.720.12.642.492.908.346|1991||186|17|127|25.30.40.46.7|
Marc Muniesa|DEF|54|82|127.825.386.38.540|1992||181||54|22.26.3.58|
İsmail Köybaşı|DEF|152|76|375.141.351.390.180.856.402|1989||178||152||
Franco Jara|AVA|4|79|95.140.390.771.296.632.649.250.138.439|1988||179|4|4|30.38.55.7|
Liam Cooper|DEF|51|78|426.425.198.516|1991||188||76|17|
Ezequiel Muñoz|DEF|4|78|150.652.768.378.186.506.438.296.383|1990||185||4||
Kiko Femenía|DEF|54|78|430.9.66.921.905.379|1991||174||54|38.44|
Miguel Britos|DEF|157|80|154.601.921|1985||188||157|38.43|
Eiji Kawashima|GR|86|83|599.485.529.822.273.323.293|1983||185|95|86||
Jefferson Montero|AVA|49|81|438.905.523.142.830.379.924.145.701|1989||169|64|49||E
Genki Haraguchi|MED|86|83|881.418.302.874.298.135|1991||177|74|86||
Nolan Roux|AVA|58|77|521.818.530.763.323.398.622.502|1988||182||58||
Stefan Bell|DEF|2|77|548.1.281|1991||192||2|53|
Timothée Kolodziejczak|DEF|58|80|541.521.612.787.158.843.763.662|1991||185||58|35.59|
Rúben Micael|MED|127|80|878.597.325.110.779.163.668.909|1986||175||127|12.25.28.32.40.45.51.52.59.7|
Mirko Valdifiori|MED|84|77|209.285.601.848.760|1986||185||84|11.21.37.48|
Enda Stevens|DEF|78|77|99.270.615.692.790|1990||183||78||
Giulio Donati|DEF|84|79|440.513.650.524.548.580|1990||179||84|31.43.44.58.6|
André Martins|MED|127|73|812.724.120.632|1990||169|2|127|28.30.34.38.40|
Laurent Depoitre|AVA|20|74|585.472.465.325.425|1988||191||20|39.45|
Ashley Westwood|MED|76|76|239.99.175.212|1990||170||76||
Pablo Hernández (1986)|MED|29|76|107.710.247.203|1986||184||4|43|
Denys Boyko|GR|153|80|275.496.269.141.586.687|1988||194|7|154||
Alex McCarthy|GR|76|78|720.939.164.516.447.698.243.805|1989||193||76|19|
Ciaran Clark|DEF|78|83|99.610.790.825|1989||185|36|76|43|
Romain Hamouma|AVA|58|76|819.759.763.4|1987||177||58||
Artur Ioniță|MED|107|79|416.196.139.681.575.859.979|1990||185|81|154||
Federico Santander|AVA|122|77|854.710.842.233.154.729.598|1991||187||122|51|
Luigi Sepe|GR|84|77|601.681.285.356.663.764.510|1991||185||84|11.21.43.48|
Djamal|MED|95|73|765.292.136.163.380|1983||188||95|28.32.34|
Kevin Stöger|MED|165|77|298.0.750.898.302.548.158|1993||175|4|165||
Frederik Rönnow|GR|43|75|6.289.172.281.874|1992||188||43||
Emmanuel Badu|MED|60|75|871.176.416|1990||173||60||
Dodô (1992)|DEF|16|80|234.279.737.440.768|1992||177||16|11.37|
Eduardo (1989)|MED|16|76|450.358.292.325.612.45.36.159.242.570|1989||184||16|30.34.35.38.41|
Javier Aquino|DEF|111|79|185.905.719.843.219.317|1990||165||111||
Giancarlo González|DEF|38|82|916.230.652.154.499|1988||186|83|38||
Ezequiel Schelotto|DEF|84|79|209.100.201.781.440.663.218.812.166|1989||187|1|4|30.32.37.47|
Tom Carroll|MED|76|78|526.263.853.698.830|1992||171||76|12.21.31.39.42|
Grant Hanley|DEF|51|81|146.610.616.145.419|1991||188|66|51|43|
Nicolas de Préville|AVA|58|72|316.820.530.156.323|1991||182||58|17|
Zakaria Labyad|MED|102|81|648.812.907.367.882.32.234|1993||170|6|124|28.30.34.38|
Marco Bizot|GR|124|78|32.747.312.377.22.818.99|1991||183||124|13.54.59|
Pape Souaré|DEF|135|78|530.820.243.862.213.583|1990||178||135|4|
Loïs Diony|AVA|58|71|600.266.763.81|1992||183||58||
Kenny McLean|MED|51|76|816.26.616|1992||183||51||
Valentin Eysseric|MED|58|76|587.612.763.356.600.416.484.478|1992||181||58||
Mexer|DEF|110|77|812.629.597.731.156.292|1988||181||110|40.52|
Carles Gil|MED|54|79|888.283.99.262.607|1992||170||54|39|
Liam Moore|DEF|85|77|162.518.164.168.720|1993||186||76|44|
Andre Wisdom|DEF|76|80|532.263.924.616.767|1993||186||76|33|
Junior Malanda|MED|20|76|530.949.933|1994||181||20||
Jeremy Toljan|DEF|2|79|421.157.204.781.523|1994||182||2||
Pajtim Kasami|MED|143|79|652.367.321.632.617.329.132.768.337|1992||188||143|38.40.55|
Hördur Magnússon|DEF|82|80|810.463.209.168.194.654.522|1993||194||82|21.43.46|
Alfredo Donnarumma|AVA|84|73|201.232.222.674.764.165|1990||178||84|51|
Kenneth Omeruo|DEF|115|84|215.10.565.484.65.186.191|1993||185|69|115|21.43.48|
Karim Ansarifard|AVA|80|82|638.656.632.617.12.633.90|1990||181|104|80|20.40|
Nicola Leali|GR|84|78|165.463.810.209.366.632.949.673.359.97.378.416|1993||192||84|40|
Papy Djilobodji|DEF|135|79|600.215.923.828.266.398.374.484.478|1988||193||135||
Gino Peruzzi|DEF|4|75|917.201.150|1992||177||4|49|
Ricardo Esgaio|DEF|127|76|812.27.163.478.380|1993||171||127|28.30.32.34.38.47.7.9|
Ryan Fredericks|DEF|76|78|853.164.568.565.168.367.925.160|1992||181||76|12.38.42|
Ladislav Krejci (1992)|MED|32|81|806.154.424.840|1992||179|41|22||
Kemar Roofe|AVA|85|77|924.615.216.641.516.80.717|1993||178||76|17|
Kara Mbodj|DEF|135|76|861.377.80.600|1989||192||135||
Álvaro Vázquez|AVA|54|79|291.379.830.384.779.813|1991||182||54|22.42|
Nicolás Castillo|AVA|29|76|224.548.366.185.219.140.77|1993||178||29|18.46.7|
George Baldock|DEF|63|79|543.615.641.790.654|1993||178|12|76||
Sebastian Andersson|AVA|142|75|475.268.614.874.231|1991||190||142||
Abdoulay Diaby|AVA|100|77|193.585.530.224.812.141.379.80.47.670.149|1991||173||58|30.32.47|D
Miha Zajc|MED|53|80|285.351.378.854.277|1994||178|37|53|30.31.55|
Nicolás Blandi|AVA|4|75|150.771.950|1990||181||4||
Benjamin Corgnet|MED|58|75|266.319.763.293|1987||180||58||
Erik Thommy|MED|2|75|115.0.451.298.302.476.499|1994||174||2||
Michael Hector|DEF|85|78|720.793.216.26.215.281.426.789.367|1992||193||76|21.42.48.53|
Andreas Bouchalakis|MED|63|75|288.632.617.492.418.655.623|1993||186||63|38.40.55|
Ernesto Torregrossa|AVA|159|73|416.580.232.241.857.165.768.681|1992||184||84|44|
Javier Manquillo|DEF|54|80|104.110.532.553.828.610.203|1994||180||54|3.43.51|
Cauly|MED|16|70|750.538.279.834|1995||172||16||
Stole Dimitrievski|GR|97|81|726.390.384.719.888|1993||188|70|96||
Brian Oliván|DEF|54|75|195.887.886.726.245.386.549.291.813|1994||175||54||
Lukas Lerager|MED|43|78|900.949.156.378.233.928|1993||188||43||
Paolo Faragò|MED|84|72|618.196.154|1993||187|2|84||
Levin Öztunali|MED|2|79|524.923.548.874|1996||185||2||
Jairo Samperio|AVA|54|77|709.787.548.507|1993||170||54|59|D
Nicola Murru|DEF|84|77|196.768.848|1994||180||84|44|
Helton Leite|GR|16|75|446.240.159.833.149.140.84.262|1990||196||16|30|
Rubén Duarte|DEF|54|78|291.66.865|1995||172||54||
Florin Andone|AVA|132|80|246.262.166.371.245.507|1993||182|25|132||
Tiago Ilori|DEF|127|82|812.532.390.156.99.720.149.668|1993||190||76|13.28.33|
Dani García|MED|54|78|725.753.101.632|1990||180||54||
Sergi Samper|MED|54|78|127.390.507.906.584|1995||182||54|27.3.36.58|
Massimo Luongo|MED|8|81|853.447.831.698.789.565.568|1992||176|45|8|12|
Hernani|MED|16|73|102.947.763.663.378.729.580|1994||188||16|50|
Jean-Paul Boëtius|MED|124|79|354.132.377.548.418|1994||174|1|124||
Manolis Siopis|MED|63|74|632.682.656.90.65.856.197.654.478|1994||171||63|43.46|
Jean-Charles Castelletto|DEF|24|78|15.224.585.727.818.600.39|1995||185||58||
Stefano Denswil|DEF|141|77|32.224.154.856.486|1993||188||124||
Emil Krafth|DEF|142|82|952.154.75.610|1994||181|52|142||
Ahmed Hassan|AVA|47|79|732.163.632.492.65.670.511.40|1993||191|32|47|20.32.39.41.9|
Marek Rodák|GR|52|74|742.367.40|1996||188||52|38|
Leonardo Koutris|DEF|63|76|288.643.632.549.302.685|1995||175|3|16||
Ángelo Henríquez|AVA|29|81|864.552.929.779.109.277.360.124.644|1994||175||29|10.45.54|
Uros Djurdjevic|AVA|109|76|711.907.652.665.632.813.109.577|1994||182||160||
William Troost-Ekong|DEF|115|83|853.312.309.412.465.176.871.921.764.642.49.964|1993||191|83|124|12.44|
Iuri Medeiros|AVA|127|75|92.582.149.812.378.517.620.163|1994||174||127|30|D
Joe Bryan|DEF|76|74|168.684.367.612|1993||170||76|44|
Renato Steffen|AVA|143|78|332.942.132.933.320|1991||170||143||D
Pascal Stenzel|DEF|2|78|157.365.298|1996||183||2|53|
Charlie Taylor|DEF|76|77|516.162.444.175.805.924|1993||176||76||
John Swift|MED|76|75|742.215.831.164|1995||182||76|21.42.48.53|
Pedro Rebocho|DEF|127|74|582.140.398.141.668.514.48|1995||171||127||
Isaac Kiese Thelin|AVA|142|79|614.550.156.80.919.524.484.881|1992||189||142||
Christopher Jullien|DEF|64|77|15.365.266.854.204.578|1993||196||58||
Farid Boulaya|MED|5|74|316.223.746.386.323.43.433|1993||180||58||
Adrien Hunou|AVA|58|75|731.223.569.81|1994||176||58||
Viktor Kovalenko|MED|153|82|788.100.810.285|1996||182|33|153|41.48.59|
Saman Ghoddos|MED|80|78|75.164|1993||176||142|20|
Marco Ilaimaharitra|MED|98|74|330.702.470.822|1995||177||58||
Ibrahima Mbaye|DEF|135|79|440.18.154.191|1994||188||135|37|
Pablo Marí|DEF|54|80|549.384.386.551.588.262.357.93.871.580.356.45|1993||193||54|16.26.30|
Kiki Kouyaté|DEF|100|74|862.323.578.744|1997||192||100||
Dimitri Oberlin|AVA|143|74|338.767.318.132.285.949.785|1997||182||24||
Virgil Misidjan|MED|141|75|538.620.645.334.352.589|1993||173||124||
Lucas Olaza|DEF|157|75|734.102.203.252.182.150.886.283.494|1994||173||157|43|
Srdjan Babic|DEF|145|77|911.725.294.345.72.809|1996||192||21||
Arbër Zeneli|AVA|89|76|284.414.820.29|1995||176||142||E
Luciano (1993)|AVA|16|74|111.234.186.654.358.395.834|1993||178||16|55|
Ivo Grbic|GR|40|77|405.592.110.530.790.180.478|1996||195||40|51|
Ivan Šunjić|MED|21|79|277.592.145.418.651|1996||184|11|21||
Ridgeciano Haps|DEF|141|75|22.387.354.895.378|1993||175||124|13|
Bersant Celina|MED|89|81|551.334.447.830.266.484.825.14|1996||177||160|26|
Tom Lawrence|MED|123|79|552.198.742.939.518.146.197.447.263.717.672|1994||175||123|44|
Gilberto|DEF|16|76|159.443.356.416.508.892.358.140.279|1993||179||16|30.7|
Lucas João|AVA|3|75|597.789.146.720.953|1993||192||127|25.45|
Famara Diédhiou|AVA|135|75|368.330.223.81.168.65.390.197|1992||192|1|135||
Simone Scuffet|GR|84|79|871.232.484.810.17.191.196.601.681|1996||190|1|84|21.37.44.6|
José Mauri|MED|84|79|663.7.285|1996||169||4|41.52|
Stijn Spierings|MED|124|73|22.807.707.525.854.521.172.766|1996||187||124||
Josh Onomah|MED|76|79|853.99.367|1997||185||76|21.31.39.42|
Lucas Höler|AVA|2|70|762.365|1994||184||2||
Ken Sema|DEF|142|76|921.871.651|1993||177||142|44|
Samir Caetano|DEF|16|75|357.871.390.416.921.843.555.50|1994||188||16||
Álvaro García|AVA|54|73|726.390.709.245.719|1992||168||54||E
Carl Starfelt|DEF|142|75|170.431.745.204.203|1995||185||142|43|
Umut Bozok|AVA|152|74|622.319.862.484.856.301|1996||178||58||
Johan Mojica|DEF|33|76|260.534.719.886.386.100.283.905.638.549|1992||182||33|20|
Pep Biel|MED|54|75|258.779.233.632.115.212|1996||167||54||
Jason Remeseiro|AVA|54|74|523.103.67.888.379.66.92.42|1994||178||54||D
Matt Grimes|MED|76|77|830.146.516|1995||178||76||
Firmin Mubele|AVA|129|74|731.854|1994||174|28|161||
Brian Fernández|AVA|4|73|254.710.323|1994||168||4||
Sergi Palencia|DEF|54|75|156.127.763.186.500|1996||170||54||
Marcus Ingvartsen|AVA|43|76|613.377.874.548.770|1996||187||43||
Philip Zinckernagel|AVA|43|75|313.835.152.921.617.632.822.224.217|1994||175||43||D
Harold Moukoudi|DEF|24|75|511.763.565.12|1997||192||58||
Augusto Batalla|GR|4|73|734.107.842.771.390.719|1996||185||4||
Kieffer Moore|AVA|123|79|939.901.447.742.129.929.197.160.790.935|1992||195|1|76||
Martin Valjent|DEF|52|77|841.218.549|1995||186|13|52||
Alberth Elis|AVA|72|73|149.156.818|1996||184||72|28|D
Luis Milla|MED|54|75|9.190.189.390.379.232|1994||175||54||
Augusto Solari|MED|4|74|734.296.710.203.109.738.879|1992||180||4||
Monchu|MED|54|74|127.386.390.886.90.317|1999||173||54||
Rasmus Nicolaisen|DEF|43|74|566.692.854|1997||191||43||
Carlos Júnior|AVA|16|74|112.443.659.732.776.60.590|1995||172||16|50|D
Germán Conti|DEF|4|72|228.140.109.279.78.535.710.382|1994||194||4|46.7|
Krystian Bielik|MED|126|81|517.93.145.920.213.263|1998||189||126|15|
Antonino La Gumina|AVA|84|75|652.285.768|1996||184||84|44|
Léo Jardim|GR|16|75|395.732.530.149.892|1995||188||16|28.41.50|
Alessandro Murgia|MED|84|77|510.760.673.314.863|1996||185||84||
Kevin Rüegg|DEF|143|74|338.416.320.942.132|1998||173||143||
Eric Smith|DEF|142|75|406.614.465.861.817|1997||192||142||
Woo-yeong Jeong|MED|37|78|434.158.133.365.298.874|1999||179||37||
Antonio Sivera|GR|54|70|66.72|1996||184||54||
Mikel Vesga|MED|54|78|144.101.813.186.72|1993||191||54||
Rey Manaj|AVA|1|80|238.440.674.681.390.67.127.810.921.799|1997||182||1|37|
Alfonso Espino|DEF|157|74|598.245.719.710|1992||172||157||
Lewis Morgan|AVA|51|76|816.204.828.442.608.770|1996||178||51||E
Ramadan Sobhi|AVA|47|79|825.425|1997||183||47|20|E
Dael Fry|DEF|76|75|565|1997||185||76||
Chris Willock|AVA|76|78|93.140|1998||178||76|15.18.2.30.31.38.46|E
Jae-sung Lee|MED|37|81|458.422.548|1992||180|110|37|40|
Timothy Fosu-Mensah|DEF|124|82|552.243.367.524|1998||185||124|31.54.56.59|
Cyriel Dessers|AVA|115|76|625.469.588.882.417.377.354.238.717.654|1994||186||20|13.43|
Benson Manuel|AVA|3|76|529.377.585.744.645.175|1997||169||20||D
Derek Cornelius|DEF|25|80|455.889.655.550.553.717|1997||187|48|25||
André Horta|MED|127|74|909.140.163.500.632.72|1996||175||127|46.47.7.9|
Junior Sambia|DEF|58|70|210.578.764.285|1996||181||58||
Idrissa Touré|MED|2|75|705.460.907.681|1998||187||2||
Dejan Joveljić|AVA|145|79|294.281.80.932.499.476|1999||180||21||
Giuseppe Pezzella|DEF|84|77|652.871.378.663.100.513.285.238|1997||185||84||
Toni Villa|AVA|54|74|887.886.386.753|1995||175||54||E
Jordan Morris|AVA|45|75|784.830|1994||181||45|42|
Cristo|AVA|54|79|189.721.142.186.871.754.188.886.813.92.59|1997||180||54|35.57|E
Andrea Favilli|AVA|84|78|463.378.416|1997||191||84|48.6|
Alessio Castro-Montes|MED|20|72|466.465.875.231|1999||174||20||
Alfie Jones|DEF|25|75|816.426.565|1997||191||76||
Kévin N'Doram|MED|58|77|587.323.49|1996||184||58|34.4.44|
David Turnbull|MED|51|75|413.717.26.816.272.533.489.814.409.583.204.197|1999||185||51||
Radoslaw Majecki|GR|126|74|517.821.587.207.818|1999||191||126||
Dany Mota|AVA|127|72|460.580|1998||180||94||
Luan Peres|DEF|16|72|693.450.689.358.224.777.553.351|1994||190||16|30|
Juninho Bacuna|MED|42|79|312.425.717.145.63.374.336|1997||185|49|124||
Sead Haksabanovic|AVA|109|76|406.925.586.614.745.268.204.825.550|1999||174||142||E
Lincoln|MED|16|76|395.180.78.776.351.704.426.74.176|1998||178||16|30.31|
Léo Santos|DEF|16|77|234.358.689.353.202.396.597|1998||186||16||
Bruno Henrique (1990)|AVA|16|78|242.389.933.777.357|1990||184||16||
Samuel Moutoussamy|MED|129|78|541.600.362.799.113|1996||174||58|44.52|
Martin Erlić|DEF|40|79|781.810.154.566|1998||193||40||
Simone Canestrelli|DEF|84|64|285.241.681.232|2000||192||84||
Gianluca Gaetano|MED|84|78|601.238.196|2000||183||84|11.21.44.6|
Chidozie Awaziem|DEF|115|79|325.600.180.186.149.65.405.221.229|1997||189||115|28.32.39.44.52|
Jean-Philippe Krasso|AVA|39|77|763.512.4.294.662|1997||187||2||
Jack Hendry|DEF|51|75|664.929.793.543.272.204.557.472.224.238.40|1995||188||51||
Adama Traoré (1995)|AVA|100|76|323.868.352.376|1995||177|9|100||D
Bartol Franjic|DEF|40|73|277.933.788.895|2000||180||40||
Mads Bech Sørensen|DEF|43|75|6.164.612.312.566|1999||193||43||
Wuilker Fariñez|GR|159|75|567.521.733.441|1998||175||159||
Afonso Sousa|MED|127|74|120.514.769|2000||174||127||
Tyrese Campbell|AVA|76|74|825|1999||183||76||
Allan (1997)|MED|16|76|532.797.418.87.281.358.112.357.234|1997||172||16|13.33|
Lassana Coulibaly|MED|100|74|746.81.717.207.764.513|1996||183||100||
Óscar Estupiñán|AVA|33|72|634.908.257.426.323.279.317|1996||182||33|32|
Mateu Morey|DEF|54|79|549.157|2000||172||54||
Marco Grüll|AVA|165|73|761.718.923|1998||182||165||E
Derrick Köhn|DEF|60|77|371.923.874|1999||180||2||
Danny Namaso|AVA|24|75|720.325.15|2000||182||76|52.7|E
Enrico Delprato|DEF|84|76|100.18.729.663|1999||183||84|48|
Douglas Augusto|MED|16|76|358.234.279.642.600.494|1997||173||16|9|
Felix Bacher|DEF|165|70|918.292|2000||190||165||
Emanuel Vignato|AVA|84|73|218.154.285.681.764.11|2000||175||84||D
Alexis Flips|MED|58|73|4.820.80.82.702|2000||173||58||
Antoine Bernede|MED|58|78|647.767.509.416|1999||177||58|4.53|
Alessandro Zanoli|DEF|84|75|199.601.768.764.378.871|2000||188||84|21.6|
Martin Hongla|MED|24|78|726.390.480.744.416.886.90|1998||183||24||
Adam Gnezda Cerin|MED|53|74|620.404.654|1999||175||53|43.46|
Michal Karbownik|DEF|126|75|517.166.632|2001||175||126|25|
Giorgi Kochorashvili|MED|61|79|103.523.812.787|1999||178|24|61||
Yorbe Vertessen|AVA|20|76|648.875.874.767|2001||176||20||
Ronaël Pierre-Gabriel|DEF|58|76|763.587.548.818.293.291.600.277|1998||177||58|34|
Bruno Viana|DEF|16|74|242.632.163.357.487.235.44.374.65|1995||187||16|34.40.47.50.9|
Pol Lozano|MED|54|76|291.386.390|1999||176||54||
Arnaud Bodart|GR|20|74|822.323.530|1998||184||20||
Muhammed Cham|MED|165|74|223.894.856.802.294|2000||180||165||
Lebo Mothiba|AVA|164|75|885.530.293.862|1996||181||164||
Luan Cândido|DEF|16|74|653.705.704.395.811.280|2001||187||16||
Márton Dárdai|DEF|73|78|418|2002||188||2||
Aaron Connolly|AVA|78|76|166.565.426|2000||174||78||
Ronaldo Vieira|MED|70|76|516.768.416.848.756|1998||178||70|44|
Sydney van Hooijdonk|AVA|124|72|588.154.414.616.209.295|2000||190||124||
Daan Heymans|MED|20|70|473.919.536.895.702.377|1999||186||20||
Junior Messias|AVA|16|78|241.7.378|1991||178||16|6|D
Josh Maja|AVA|115|77|156.828.367|1998||180||76||
Adrian Benedyczak|AVA|126|75|685.663.484|2000||190||126||
Róbert Boženík|AVA|52|78|354.302.149.825|1999||188||52|13|
András Schäfer|MED|73|81|378.218.874|1999||179|49|73||
Robson Bambu|DEF|16|75|777.102.612.234.892.92.163.772|1997||184||16||
Matteo Lovato|DEF|84|74|650.416.100.196.764.848|2000||188||84||
Patrizio Masini|MED|84|71|378.618.97.366|2001||182||84||
Oleg Reabciuk|DEF|107|78|668.632.809|1998||177|45|107||
Nuno Moreira|AVA|127|65|910.200.892|1999||175||127||D
Nahuel Ferraresi|DEF|159|77|582.292.834.159|1998||188||159||
Ben Wilmot|DEF|76|75|823.921.871|1999||188||76||
Daniel Peretz|GR|83|79|542.133.408.805|2000||195|4|83|5.53|
Berkan Kutlu|MED|152|74|329.65.371.378.492|1998||186||143||
Jacob Brown|AVA|51|74|129.825.539|1998||178||76||
Ransford Königsdörffer|AVA|60|73|274.408.548|2001||183||2||
Hugo Magnetti|MED|58|72|746.818|1998||180||58||
Bryan Reynolds|DEF|45|73|250.737.470.473|2001||191||45|41|
Matteo Tramoni|MED|58|71|4.196.165.681|2000||175||58||
Jean Marcelin|DEF|98|73|15.587.207.156.718|2000||197||133||
Diogo Travassos|DEF|127|68|295.812.582.163|2004||185||127||
Edo Kayembe|MED|129|76|80.466.921|1998||183||129||
Vitezslav Jaros|GR|32|78|532.824.827.32|2001||190||32|13.2.33|
Facundo Colidio|AVA|4|74|67.440.797.842.734|2000||182||4||
Julián Carranza|AVA|4|74|125.442.678.354.518.605|2000||182||4||
Paulo Bernardo|MED|127|74|140.668.204|2002||180||127|30|
Edu Expósito|MED|54|76|262.753.291|1996||178||54||
Naci Ünüvar|AVA|152|77|32.856.334.291.417|2003||161||124||E
Sivert Mannsverk|MED|116|71|576.32.197.806|2002||185||116||
Rodrigão|DEF|16|73|112.27.353.380.342.947.294|1995||191||16||
Ellis Simms|AVA|76|73|147.299|2001||191||76||
Alexander Lind|AVA|43|73|796.681.613|2002||185||43||
Yusuf Sarı|AVA|152|75|553.223.856.180.29.131|1998||168||58||D
Willyan Rocha|DEF|16|74|690.194.47|1995||193||16||
Iago|DEF|16|75|443.115.279|1997||181||16||
Isak Jansson|AVA|142|65|475.307.718.612|2002||180||142||E
Alexis Beka Beka|MED|58|74|759.535.612.505|2001||178||58||
Costinha (2000)|DEF|127|73|732.632|2000||181||127||
Kevin Pina|MED|23|77|631.214.494|1997||181||23||
Lameck Banda|AVA|163|72|96.513|2001||160||163||E
Germán Valera|AVA|54|76|104.189.110.779.888.283|2002||170||54||E
Matteo Cancellieri|AVA|84|74|416.510.285.663|2002||185||84|48|D
Filip Stanković|GR|145|76|440.336.768.895|2002||189||84|21|
Bruno Méndez|DEF|157|77|234.443.390.845|1999||180||157|55|
Vítor Carvalho|MED|16|74|235.380.163|1997||183||16||
Filip Marchwinski|MED|126|75|514.513.237|2002||187|2|126||
Jorge Herrando|DEF|54|74|638|2001||192||54||
Martín Payero|MED|4|75|125.182.565.150.871.238|1998||182||4||
Leo Román|GR|54|74|549.723.262|2000||189||54||
Robert Navarro|AVA|54|80|638.181.127.587.725.245.549.101|2002||178||54||D
Nicolás Castro|MED|4|72|611.377.283.845|2000||183||4||
Mikael Egill Ellertsson|MED|82|74|810.760.895.378|2002||182||82||
Charles Vanhoutte|MED|20|71|207.875.612|1998||182||20||
Lázaro|AVA|16|74|357.72.653.50|2002||180||16|30.9|
Denso Kasius|DEF|124|73|336.154.718.22|2002||178||124||
Hugo Siquet|DEF|20|75|822.365.207.224|2002||180||20||
Joelson Fernandes|AVA|127|74|812.132.411.380|2003||172||70|47|E
Medon Berisha|MED|1|74|513|2003||186|1|143||
Festy Ebosele|DEF|78|73|263.871.921.131|2002||180||78||
Jesurun Rak-Sakyi|AVA|60|73|243.213.790.180.825|2002||178||76||D
Aune Heggebø|AVA|116|72|757.924|2001||185||116||
Stipe Biuk|AVA|40|73|405.500.886|2002||184||40||E
Luís Esteves|MED|127|64|597.380|2002||171||127||
Andrew|GR|16|66|159.380.357|2001||189||16||
Gaetano Oristanio|MED|84|73|336.440.196.895.663|2002||183||84|44|
Marko Stamenić|MED|118|76|233.294.617.632.830|2002||188||118||
Henrique Araújo|AVA|127|73|140.921.345.92|2002||182||127|18.31.38.7|
Mohamed Bamba (2001)|AVA|39|70|932.319|2001||187||39||
Olivier Deman|DEF|20|74|207.923.744|2000||181||20||
Rumarn Burrell|AVA|85|72|565.162.489.344.177.698|2000||184||76||
Álvaro Núñez|DEF|54|74|101.184.144.283.203|2000||174||54||
Lewis Dobbin|AVA|76|76|299.263.99.924.616.695|2003||175||76|43|E
Nathan Ngoumou|AVA|24|74|854.158|2000||182||58||D
Jordan Zemura|DEF|162|75|160.871|1999||173||76||
Miguel Rodríguez|AVA|54|75|203.882|2003||179|1|54|43|D
André Amaro|DEF|127|72|908.57|2002||188||127|34|
Carlos Miguel|GR|16|71|234.617.653|1998||204||16|39.55.9|
Kieron Bowie|AVA|51|71|615.419.416|2002||190||51||
Boubacar Traoré|MED|100|75|323.934|2001||183||100|35.55|
Javi Rueda|DEF|54|70|722.203.67|2002||177||54||
Jean Onana|MED|24|75|520.530.585.156.521.141.553.378|2000||189||24||
Cristian Olivera|AVA|157|69|72.677.500.395.279|2002||170||157||D
Hugo Bolin|AVA|142|74|550.256.158|2003||179|3|142||E
Nazinho|DEF|127|73|812.207|2003||178||127|47|
Divin Mubama|AVA|76|77|925.551.825|2004||182||76||
James Beadle|GR|76|74|239.641.789.166.145|2004||201||76||
Jovan Mijatovic|AVA|145|77|294.609.625.278|2005||185||136||
Abdoulaye Ndiaye|DEF|135|74|541.746.862.818.663|2002||185||135||
Tim Jabol-Folcarelli|MED|58|70|4.856|1999||187||58||
Joan González|MED|54|74|513|2002||190||54||
José Córdoba|DEF|121|67|438.525.616|2001||187||121||
Vanja Vlahović|AVA|145|66|665.100.810|2004||184||136||
Kévin Boma|DEF|149|73|736.292|2002||193||58||
Darlin Yongwa|DEF|24|69|210.319|2000||177||24||
Kevin Carlos|AVA|54|73|754.143.943.132.612.196|2001||180||54||
Andrés Castrín|DEF|54|71|187.787|2003||188||54||
Aaron Zehnter|DEF|2|72|115.750.933|2004||180||2||
Zaid Romero|DEF|4|71|388.503.296.224.379|1999||195||4||
Gabriel Pereira|DEF|16|70|904.380.233|2000||188||16||
Emirhan İlkhan|MED|152|76|141.848.768.131|2004||175||152||
Thiago Borbas|AVA|157|72|734.704.723|2002||186||157||
Daniel Jebbison|AVA|25|74|790.177.160.921.695|2003||190||25||
Obed Nkambadio|GR|58|75|662|2003||190||58||
Tom Louchet|MED|58|71|612|2003||176||58||
Omri Gandelman|MED|83|74|465.513|2000||188|5|83||
Benjamin Bouchouari|MED|102|74|919.735.763.856|2001||165||20||
Benjamin Tahirović|MED|21|81|737.32.172|2003||193|26|142|31|
Gvidas Gineitis|MED|93|76|848|2004||191||93||
Saïdou Sow|DEF|68|75|763.293.600.223|2002||185||68||
Bamo Meïté|DEF|39|74|819.319.553.578|2001||183||39||
Yassin Belkhdim|MED|102|71|81|2002||175||58||
Max Finkgräfe|DEF|2|71|231.705|2004||183||2||
Jordy Makengo|DEF|58|73|365|2001||191||58||
Pedro Malheiro|DEF|127|70|149.856.62|2001||179||127|28|
Nidal Celik|DEF|21|76|521|2006||192|2|21||
Ibrahima Bamba|DEF|84|72|908|2002||185||84||
Telasco Segovia|MED|159|76|768.200.442|2003||175||159||
Nicolás Valentini|DEF|4|76|150.69.356.416.66|2001||187||4||
Nacho Ferri|AVA|54|71|281.470.473|2004||192||54||
Adson|AVA|16|71|234.600.892|2000||171||16|55|D
Felix Afena-Gyan|AVA|60|75|737.238|2003||175||60|31|E
Joel Roca|AVA|54|73|386.188|2005||176||54||E
Noel Aseko|MED|2|73|418|2005||178||2||
Gabri Martínez|AVA|54|72|386.188.163|2003||185||54||E
André Luiz (2002)|AVA|16|68|357.295.732.632|2002||180||16||D
Dominik Prpić|DEF|40|71|405.325|2004||188||40|7|
Ibrahim Salah|AVA|102|74|465.731.818.132|2001||185||20||E
Francis Onyeka|MED|2|72|898.524|2007||186||2||
Jovan Milosevic|AVA|145|73|911.298.331.665.923|2005||192||136||
Damián Pizarro|AVA|29|73|227.871.511.710|2005||187||29||
Ümit Akdağ|DEF|132|72|65.402.854|2003||182||132||
Alphadjo Cissè|MED|84|73|416.7|2006||181||84||
Santiago Hidalgo|AVA|4|70|438.854|2005||174||4||
Tomás Palacios|DEF|4|73|182.435.440.580.296|2003||196||4||
Junior Diaz|DEF|39|68|600.862.818|2003||193||58||
Christian Ordóñez|MED|4|70|917.663|2004||177||4||
Deniz Gül|AVA|152|76|410.325.371|2004||190|8|142|7|
Sadibou Sané|DEF|135|73|400.323|2004||185||135||
Thiago Fernández|AVA|4|71|917.905.723|2004||175||4||E
Matías Moreno|DEF|4|68|138.356.523|2003||193||4||
Keita Kosugi|DEF|86|70|268.281|2006||168||86||
Amadou Koné|MED|39|72|820.590|2005||178||100||
Modou Kéba Cissé|DEF|135|72|501.99|2005||191||||
Paul Mendy|AVA|135|64|196|2007||196||135||
Renato Nhaga|MED|70|71|200.371|2007||172||70||
Neno|GR|127|77|908.140.909|1962||182|9||7.20|
Juary|AVA|16|77|777.118.440.97.238.325.693.149|1959||168|2||7.58|E
Tom Starke|GR|2|82|524.408.750.421.133|1981||194||46|11.26.27.5.53|
Sérgio da Silva Pinto|MED|2|76|523.302|1980||182||127||
Nikolce Noveski|DEF|97|79|548|1979||190|64|88|33.53|
Maik Franz|DEF|2|76|933.479.281.418|1981||190||46||
Markus Feulner|MED|2|79|133.231.548.157.620.115|1982||181||2|33.5|
Patrick Ochs|DEF|2|79|281.133.933.421|1984||179||2|5|
Michael Rensing|GR|2|82|133.231.524.302|1984||189||2|5.54|
Chris|DEF|16|78|235.443.817.281.933.421|1978||185||16||
Roberto Hilbert|DEF|2|80|394.298.141.524|1984||182|8|2|29.5.56|
Jerome Thomas|AVA|76|77|93.698.213.692.924.516.243.742|1983||178||76|15.2|E
Boaz Myhill|GR|123|81|99.825.168.162.824.426.924.145|1982||191|19|45||
Liam Ridgewell|DEF|76|80|160.99.145.924.691.929.166.426|1984||188||76||
Glenn Loovens|DEF|124|78|354.300.253.197.204.779.789.828|1983||188|2|124|59|
Kamel Chafni|MED|102|75|330.502.4.15.818|1982||181||58||
Gaël Danic|AVA|58|75|731.398.393.862.319.885.541.746.819|1981||176||58||E
Johan Audel|AVA|103|76|612.530.319.885.298.600|1983||180||58|44.52|E
Fabien Audard|GR|58|74|854.746.319.587|1978||189||58|24|
Mauricio Pinilla|AVA|29|81|218.440.203.812.709.413.864.892.87.652.196.378.100|1984||187||29|17.32.40|
Giuseppe Colucci|MED|84|74|359.737.156.416.575.165.729.18.201.218.209.674|1980||180||84|19|
Stefano Morrone|MED|84|76|285.510.679.895.652.218.18.663.508.681|1978||179||84||
Henri Bedimo|DEF|24|77|393.854.511.502.521.578.541.553|1984||180||24|4.41|
Juanma Ortiz|DEF|54|77|104.110.638.72.717.390.430.13|1982||179||54||
Borja Fernández|MED|54|82|721.549.886.379.262.753.72|1981||188|4|54|20.23.3.58|
Nano|DEF|54|78|127.110.379.245.638.66|1982||187||54|54|
Fernando Soriano|MED|54|75|258.779.72.638|1979||189||54||
Rob Hulse|AVA|76|76|239.924.516.790.263.698.213.568|1979||185||76||
Sylvain Marchal|DEF|58|74|323.502.319.763.746|1980||184||58||
Guirane N'Daw|MED|135|79|330.600.763.779.145.447.98.323.521|1984||190|44|135||
João Tomás|AVA|127|75|27.140.142.908.163.38.57.149.732|1975||188|4|127|28.30.39.50|
Karl Henry|MED|76|78|825.216.934.698.155.162|1982||183||76||
Ashkan Dejagah|AVA|80|80|418.933.367.38.617|1986||181||80|20.5|D
Wayne Routledge|AVA|76|79|243.853.692.367.197.99.698.610.830|1985||170||76||E
Geoffrey Dernis|AVA|58|75|530.763.578.818.11|1980||171||58|4|E
Aristide Bancé|AVA|18|77|469.563.135.548.769.115.302.20|1984||193||39|53|
Nicola Pozzi|AVA|84|78|209.7.601.674.285.768.794.663.218|1986||182||84|11.48|
Ayoze Díaz|DEF|54|75|189.709.549.262|1982||175||54|43|
Danny Guthrie|MED|76|81|552.532.805.155.610.720.367.146|1987||170||76|10.2.43|
Slawomir Peszko|AVA|126|81|931.514.231.934.663.515|1985||173|29|126|25|E
Julien Sablé|MED|58|75|763.521.612.746|1980||181||58||
Michele Canini|DEF|84|78|100.196.378.218.333.97|1985||187||84||
Andrea Lazzari|MED|84|77|100.209.679.196.356.871.199.128|1984||184||84||
Eugen Polanski|MED|126|81|158.379.548.421|1986||183|19|126|53|
Emmerson Boyce|DEF|11|79|539.243.929.147|1979||184|12|76|45|
David Barral|AVA|54|78|190.813.635.523.390.17|1983||183||54||
Arnold Mvuemba|MED|129|76|731.692.319.541|1985||172|1|58|41|
Federico Peluso|DEF|84|80|696.841.100.463.781|1984||188|3|84|21.6|
Giovanni Marchese|DEF|84|76|858.848.218.201.128.764.378|1984||180||84|21.51|
Stefano Sorrentino|GR|84|78|510.463.848.461.890.218.652|1979||186||84|6|
Andrea Campagnolo|GR|84|74|222.737.378.859.196.729.201.794.209|1978||184||84|19.51|
Marco Rossi|MED|84|76|764.356.232.378|1978||179||84|37|
Guglielmo Stendardo|DEF|84|79|601.768.764.201.673.510.463.513.100.674|1981||190||84|44|
Daniel Congré|DEF|58|75|854.578|1985||185||58||
Ronald Zubar|DEF|64|78|759.553.934.4.608.727|1985||186|2|64||
Emil Hallfredsson|MED|82|82|853.550.729.129.416.871.366.650|1984||185|73|82||
Javier Garrido|DEF|54|80|725.551.510.616.507.13|1985||180||54|37|
Alberto Rivera|MED|54|81|721.553.523.142.813.283|1978||170||54|19.23.3.58|
Reginaldo|AVA|16|77|858.356.663.794.452.892|1983||175||16|21|
Geoffrey Jourdren|GR|58|74|578|1986||181||58|4|
Joris Marveaux|MED|103|74|319.223.578|1982||178||58|4|
Wes Hoolahan|MED|78|81|533.147.616.924.610|1982||168|43|78||
Bruno Grougi|MED|103|72|759.223.818|1983||171||58||
Claudiu Keseru|AVA|132|79|600.855.81.746.339.43.538.870|1986||178|47|132||
Michael Kightly|AVA|76|77|934.921.825.175|1986||175||76||E
Valter Birsa|MED|53|81|330.15.378.848.7.218.196|1986||185||88|44|
Marcos Angeleri|DEF|4|77|296.828.586.771|1983||182|4|4|51|
Jesús Vázquez (1980)|MED|54|75|189.262|1980||182||54||
Antonio Rukavina|DEF|145|83|665.157.1.886.905|1984||177|59|88|33|
Andrea Coda|DEF|84|77|285.871.663.18.768.674|1985||190||84||
Andrea Raggi|DEF|84|78|285.652.768.154.128.587|1984||187||84|34.4.44|
Tiberio Guarente|MED|84|77|100.416.787.154.201.218.285|1985||182||84|48|
Paulo Machado|MED|127|77|325.295.519.520.763.854.632.277.265|1986||171||127|25.28.34.40.45.7|
Javier Camuñas|AVA|54|77|379.719.638.905.262|1980||175||54|35|D
Pedro Ríos|AVA|54|74|379.523.246|1981||175||54||D
John Ruddy|GR|76|80|920.299.824.935.168.239.583.616.934.145.610|1986||193|1|76|18.39|
Marc Wilson|DEF|78|76|939.692.539.160.825.924|1987||188||79||
Renato Civelli|DEF|4|76|125.553.382.771.612.176.530|1983||193||4|51|
Geoff Cameron|DEF|45|76|423.825|1985||191||45|42|
Antonio Barragán|DEF|54|81|532.262.886.888.565.142.283|1987||182|1|54|39.43|
Przemyslaw Tyton|GR|126|81|735.648.283.298.262.221.32.334|1987||195|14|126||
Ryan Taylor|DEF|76|78|929.610.426|1984||173||76||
Mouhamadou Dabo|DEF|58|77|763.787.541.862.759|1986||176||135||
Siaka Tiéné|DEF|39|79|20.763.820.885.647.578|1982||176||39|11.4|
Andrea Masiello|DEF|84|77|118.463.794.378.128.100|1986||185||84|19.21.48|
Xisco|AVA|54|79|262.610.709.246.549.638.677.9|1986||188||54||
Stephen Ward|DEF|78|82|934.166.175.825.447.920|1985||185|50|78||
Stefan Aigner|AVA|2|76|91.1.281|1987||183||2||D
Lewis Grabban|AVA|85|77|243.628.583.568.164.742.160.616|1988||183||76||
Mikel González|DEF|54|78|725.779.13|1985||190||54||
Miguel Flaño|DEF|54|76|638.246|1984||177||54||
Javier Balboa|AVA|69|80|127.721.140.307.67.136.292|1985||182||54|19.3.30.38.7|D
Dennis Oliech|AVA|128|78|38.600.15.4|1985||181|76|128||D
Fernando Tissone|MED|4|78|871.100.768.549.586.480.265.597|1986||182||4||
Marco Andreolli|DEF|84|81|440.737.781.218.787.196|1986||187||84|35.37.44.6|
Perparim Hetemaj|MED|57|78|334.165.218.139.729|1986||176|49|88||
Abel Aguilar|MED|33|82|260.97.871.430.779.262.854.137.120.250|1985||186|71|33||
DJ Campbell|AVA|76|77|823.164.145.518.147.263.698.447.146.568|1981||178|2|76||
David Cobeño|GR|54|78|688.719.721.787.72|1982||189||54|20.35.59|
Sebastian Prödl|DEF|165|83|827.923.921.871|1987||194|73|165|38|
Garry Bocaly|DEF|103|76|553.578.5|1988||180||103|24.4|
Federico Di Francesco|AVA|84|75|674.663.238.154.781.760.285.513.652|1994||178||84||E
Makoto Hasebe|DEF|86|83|881.933.620.281|1984||180||86|5.59|
Romain Danzé|DEF|58|74|731|1986||184||58||
Pape Diop|MED|135|77|731.855.384.709.523.291.753|1986||180||135||
Mathieu Coutadeur|MED|0|74|512.587.319.819.4|1986||170||||
Alaixys Romao|MED|149|78|854.393.319.553.632.820.398.445.474|1984||188||58|17.40|
Stefan Ilsanker|MED|165|78|767.705.281|1989||189||165|59|
Manuel Iturra|MED|29|79|864.519.722.586.390.871.719.605.905|1984||174|33|29|17|
Gonzalo Jara|DEF|29|83|227.924.166.617.548.864.296.555.226|1985||178|115|29|17|
Liam Bridcutt|MED|51|78|215.939.921.824.166.828.516|1989||175||76|11.17.2.50|
Manuel Schmiedebach|MED|2|76|418.874|1988||170||2||
Modibo Diakité|DEF|58|78|674.510.828.356.262.196.366.768|1987||192||58|44.48|
Philipp Bargfrede|MED|2|77|923|1989||174||2||
Dennis Diekmeier|DEF|2|77|923.620.408|1989||188||2||
Sone Aluko|AVA|115|78|145.26.147.717.426|1989||173||76|38|D
Fabian Lustenberger|DEF|143|77|321.418.942|1988||180||143||
Fraizer Campbell|AVA|76|83|744.552.426.853.828.197.243|1987||172|1|76|10.2.20.58|
Darron Gibson|MED|78|87|552.744.934.299.828.929|1987||183|27|79|10.2.20.45.58|
Timo Gebhart|MED|2|76|1.298.620.339|1989||182||2||
Fran Mérida|MED|54|83|127.93.725.110.163.430.102.754.638.719.291|1990||175||54|15.3.34.51.59|
Yannick Djaló|AVA|127|77|812.200.140.854.756.581.909|1986||171|1|70|30.40.46|E
Rudy Mater|DEF|58|73|885|1980||180||58||
Ikechukwu Uche|AVA|115|78|379.779.390.905.843.586.384|1984||172||115||
Beram Kayal|MED|83|78|545.204.166|1988||178||83||
Jonathan Howson|MED|76|77|516.616|1988||180||76||
Felipe Lopes|DEF|16|75|396.80.597.933.298.214|1987||189||16||
Fabri|GR|54|78|262.886.142.141.367.549|1987||180||54|38|
Sergio Álvarez (1986)|GR|54|78|203|1986||177|1|54|36|
Chris Martin|AVA|51|76|616.539.243.831.263|1988||178||76||
Duje Cop|AVA|40|79|405.597.277.196.586.813.822.886.592.404|1990||187||88||
Jason Puncheon|MED|76|77|543.684.805.568.698.147.243.425|1986||173||76|42|
Jonas Lössl|GR|43|79|566.398.548.425.299.164|1989||195||43|11.38.43|
Billy Sharp|AVA|76|78|790.783.270.805.617.720.516|1986||175||76|42|
Timothy Chandler|DEF|45|79|620.281|1990||186||2|42.59|
Licá|AVA|127|74|27.860.292.325.719.908.617.390.137.120.346|1988||181||127|12.25.32.35.38.39.40.41.45.52|E
Peter Pekarík|DEF|52|83|933.486.418.179|1986||176|137|22||
Marcel Risse|AVA|2|77|524.620.548.231|1989||183||2|53|D
Darren Randolph|GR|78|81|213.178.583.145.925.565.160|1987||188|50|78||
Raúl Bobadilla|AVA|122|78|734.391.158.90.942.132.115|1987||180||4||
Domingo Cisma|DEF|54|76|104.72.709.110.283.246|1982||184||54|51|
Henri Saivet|MED|135|79|156.81.610.763.799.176|1990||174||135|4.43|
Ermin Bicakcic|DEF|21|78|298.278.421|1990||185||88||
Didier Digard|MED|58|77|511.647.565.612.142.638|1986||184||58||
Marquinho|MED|16|77|653.159.355.358.737.416.46.871.36|1986||182||16||
Jonathan Cristaldo|AVA|4|75|917.561.154.710|1989||174|1|4||
Alan Kardec|AVA|16|77|892.443.140.777.653.834|1989||188||16|30|
Caiuby|AVA|16|76|353.834.234.833.397.933.315.115|1988||184||16|5|E
Maicosuel|AVA|16|75|659.242.653.159.421.871.112|1986||180||16||E
Steven Vitória|DEF|25|81|325.629.748.292.140.678.515.582.214.149|1987||195|39|25|28.30.38.7|
Miguel de las Cuevas|AVA|54|78|430.110.813.638.810|1986||175||54||D
Nicolas Höfler|MED|2|74|365|1990||181||2||
Simone Padoin|MED|84|81|100.463.196.97|1984||179||84|21.6|
Cheikh M'Bengue|DEF|135|75|854.731.763|1988||182||58||
Damien Da Silva|DEF|58|75|210.502.223.759.731.541.556.544|1988||183||58||
Foued Kadir|MED|5|78|75.885.553.731.142|1983||179||58|17|
Andrés Fernández|GR|54|76|638.754.325.390.905|1986||184||54|35|
Roberto Canella|DEF|54|76|813.262.187|1988||183||54||
Jorge Molina|AVA|54|74|283.142.379.390|1982||189||54||
Adrián Colunga|AVA|54|76|507.779.379.813.166.390.549.83|1984||172||54||
Miku Fedor|AVA|159|79|888.384.379.204.43.719|1985||182||159|44|
Carlos Martínez|DEF|54|77|725.723.174|1986||188||54||
David Abraham|DEF|4|78|438.384.132.379.421.281|1986||188||4||
Javi Varas|GR|54|78|787.203.886.507|1982||182||54|59|
Claudio Beauvue|AVA|64|78|862.502.746.398.541.203.186.759.262.866|1988||174|3|64||
Mário Felgueiras|GR|127|74|812.690.163.909.732.191.492.668|1986||184||127|30.34.40|
Fernando Varela|DEF|23|78|292.860.349.339.642.200.74|1987||182|40|127|9|
Marwin Hitz|GR|143|80|331.943.337.933.115.157.132|1987||191||143|5|
Miguel Lopes|DEF|127|80|732.325.142.163.812.541.390.33.486.295|1986||182|4|127|12.28.32.34.38.55.59.7|
Maciej Rybus|DEF|126|79|517.34.541.535.809.745|1989||173||126|25|
Maxime Le Marchand|DEF|58|77|511.731.612.367.744.293|1989||185||58|38.44|
Kévin Théophile-Catherine|DEF|103|76|731.197.763.277|1989||183||58||
Davide Lanzafame|AVA|84|79|463.128.652.663.165.201.673.618|1987||180||84|21.24.44|
Callum McManaman|AVA|76|76|929.147.924.789.828.539.556|1991||174||76|45|D
André Santos (1989)|MED|127|76|812.519.262.908.123.323.92.120|1989||178||127|25.28.40.45.46|
Marco Matias|AVA|127|72|812.891.724.908.363.597.789.120.346|1989||177||127|40.46|E
Stefan Johansen|MED|116|77|152.826.204.367|1991||182||116|44|
Vegard Forren|DEF|116|75|576.805|1988||186||116|42|
Scott Dann|DEF|76|79|920.236.145.146.243.720|1987||194||76||
Víctor Sánchez|MED|54|82|127.379.606.291|1987||174||54|26.3.42.58|
Nikolaos Karelis|AVA|63|76|288.76.654.377.642.164.10.655.657|1992||178||63||
Aron Gunnarsson|MED|82|82|22.236.197.38.43.700.982|1989||181|110|82|54|
Andreu Fontàs|DEF|54|84|386.127.549.203.476|1989||186|9|54|22.26.3.36.58|
Timm Klose|DEF|143|78|132.332.620.933.616|1988||193||2||
Innocent Emeghara|AVA|143|75|338.337.391.319.794.18.699.756|1989||170||115||
Ahmed Elmohamady|DEF|47|81|828.426.99|1987||182||47|20.38|
Ángel Rangel|DEF|54|74|386.830|1982||188||54|45|
Luke Freeman|MED|76|78|93.939.823.168.790.617|1992||181||76|15|
Gary Madine|AVA|76|74|198.236.789.147.155.197|1990||191||76||
Dídac Vilà|DEF|54|80|291.7.142.753.12|1989||184||54|22.42|
Anthony Pilkington|AVA|78|77|824.425.616.197|1988||183||76||E
Luke Ayling|DEF|0|75|93.939.168.516|1991||183|||15.17|
Maurício (1988, Spartak de Moscovo)|DEF|16|66|192.653.395.693.280.811.812.510.809|1988||185|0|16|34.38.50|
Paulo Victor (1987)|GR|16|73|357.375.395.554.40.57.65|1987||187||16|30|
Jens Stryger|DEF|43|78|172.613.117.871.856.550|1991||180||43||
El Fardou Ben|AVA|34|77|511.897.632.522.656.294.17.945|1989||173||106|38|
Ignasi Miquel|DEF|54|81|93.518.616.688.187.586.379.386.186.754.390|1992||193||54|15|
Jonathan Schmid|DEF|58|78|365.421.115|1990||179||58||
Darko Lazović|MED|145|79|294.378.416|1990||181|5|88||
Filippo Falco|AVA|84|74|513.729.461.857.154.209.139.673.674.294.196.191|1992||171||84|44|D
Gaizka Toquero|AVA|54|79|66.725.753.101.779|1984||182||54|17|D
Franco Zuculini|MED|4|78|710.421.378.779.95.154.416|1990||176|1|4|51|
Alberto de la Bella|DEF|54|77|725.632.507|1985||182||54|22.40|
Pedro Morales|MED|29|78|864.277.586.889.227|1985||181||29||
Ronny Rodelin|AVA|58|75|736.600.862.530.759.585.398|1989||192||133||D
Osvaldo|AVA|16|76|360.163.202.834.36.358.811.280|1987||170|2|16||D
Tjaronn Chery|MED|141|75|334.10.747.310.312.698.486.545.589.744|1988||170||124||
Cheick Diabaté|AVA|100|78|156.4.19.639.323.139|1988||194||100|4|
Martin Kelly|DEF|76|83|532.425.243.924.929|1990||191|1|76|43|
Sean Morrison|DEF|76|75|831.425.720.197|1991||193||76||
Grégory Sertic|MED|58|76|156.521.553|1989||181||58|4|
Moritz Leitner|MED|2|80|1.157.298.510.115.616.338|1992||176||2|33.5.53|
Lukas Rupp|MED|2|77|479.158.750.298.421.616.90|1991||178||2||
Albert Adomah|AVA|60|79|168.565.99.617.197.698|1987||185||76||D
Diego Farias|AVA|16|74|218.416.359.650.781.196.285.513.810|1990||172||16|44|E
Éder|AVA|127|83|27.163.830.530.535.56|1987||189|35|70|12.17.25.28.32.40.52.8|
Andre Hoffmann|DEF|2|75|302|1993||190||2||
Mikel Balenziaga|DEF|54|79|725.101.886.262|1988||177||54|17|
Jordi Amat|DEF|75|79|291.719.830.142.466|1992||185||54|42|
Rubén Sobrino|AVA|54|79|688.386.551.66.888.245|1992||185||54|26|
Gueïda Fofana|MED|58|76|511.541|1991||182||58||
Matthias Zimmermann|DEF|2|76|479.158.394.762.298.302|1992||178||2||
Cote|DEF|54|79|813.737.725.325.905.753.638|1989||182||54|32.35.36|
Junior Stanislas|AVA|76|77|925.175.160|1989||183||76||E
Alejandro Faurlín|MED|4|76|738.734.439.698.652|1986||185||4||
Rubén Botta|MED|4|76|842.18.440.218.649.771.254.128.228.182|1990||175||4|37|
Luca Caldirola|DEF|84|78|907.440.165.209.923.139.580|1991||189||84|43.44|
Felix Klaus|AVA|2|75|394.365.933|1992||179||2||D
Robert Beric|AVA|53|75|593.827.718.763.80|1991||188||88||
Sammy Ameobi|AVA|76|79|610.565.197|1992||192||76|43|E
Joel Ward|DEF|76|78|160.692.243.830|1989||188||76||
Mateusz Klich|MED|126|78|237.933.645.0.334.516.882.247.108|1990||183||126|17.25|
Tolga Cigerci|MED|152|76|933.158.418.371.351.131.82.799|1992||185||2||
Stanislav Kritsyuk|GR|134|75|732.163.494.120.380.947|1990||192||154|39.41.52|
Karl Darlow|GR|123|79|617.920.610.426.516|1990||185||76|43|
Matthew Lowton|DEF|76|79|790.352.99.175|1989||180||76||
Gotoku Sakai|DEF|86|82|68.298.408.906|1991||176||45||
Kléber|AVA|16|80|554.112.325.653.292.122|1990||189|2|16|35.41.55.7|
Luis Advíncula|DEF|125|78|751.421.689.909.176.611.843.719.150|1990||177||125||
Bram Nuytinck|DEF|124|75|589.80.871.768|1990||191||124||
Steve Morison|AVA|123|79|615.823.568.616.516|1983||188|28|76||
Florian Kainz|MED|165|80|827.718.923.231|1992||174|28|165||
Lucas Orbán|DEF|4|77|734.842.156.888.523.378|1989||184||4|39.49|
Arnaud Souquet|DEF|58|74|530.662.585.266.612.465.578|1992||180||58|4|
Neeskens Kebano|AVA|129|77|647.759.702.377.367|1992||180||58|11.38.44|E
Allan Nyom|DEF|24|80|5.871.390.921.924.186.379|1988||186|16|58||
Ryan Mendes|AVA|23|78|511.530.617.486.51.478.490|1990||178||23|39|E
Fransérgio|MED|16|72|102.659.240.443.202.397.554.163.156|1990||187||16|47.9|
Romaine Sawyers|MED|140|78|924.793.920.164.825.197|1991||173|30|76||
Gabriel Silva (1991)|DEF|16|77|653.618.390.871.199.378.763|1991||179||16|50|
Guilherme|MED|26|76|693.234.871.262.632.59|1991||177||16||
Koray Günter|DEF|2|78|157.371.378.416.768.478.402.53.980|1994||184||2|33.37|
Xavier Chavalerin|MED|58|71|855.727.820.862|1991||178||58||
Tae-hee Nam|MED|37|78|885.39.59.940.457.167|1991||174|54|37|40|
Ivan Ordets|DEF|153|75|788.322.276.898|1992||195||153|41.59|
Loris Benito|DEF|143|77|338.140.942.156.329|1992||182||143|30.7|
Diego Falcinelli|AVA|84|75|781.461.673.241.356.154|1991||185||84||
Karim Onisiwo|AVA|165|77|767.548|1992||188||165||
Adam Forshaw|MED|76|77|299.164.929.565.516|1991||185||76|17|
Markus Henriksen|DEF|116|76|739.22.426|1992||187||116|13.38|
Sargis Adamyan|AVA|6|75|451.421.224.231|1993||184||6||
Mathew Leckie|AVA|8|82|31.158.315.418.557|1991||180|78|8||E
Maxime Poundjé|DEF|58|75|156.622|1992||179||58||
Jonathan Gradit|DEF|58|72|855.759.521|1992||180||58||
Iñigo Ruiz de Galarreta|MED|54|77|101.144.188.779.186.507.549|1993||175||54|17|
Ali Ahamada|GR|34|76|854.486.757|1991||189||58||
Jonas Martin|MED|58|75|578.75.142.293.731.530.818.866|1990||182||58|41|
Nacho Martínez|DEF|54|72|719.886|1989||175||54||
Ibai Gómez|AVA|54|79|144.101.66.262|1989||177||54|17|E
Ravel Morrison|MED|85|79|552.925.145.197.698.510.109.790.565.10.263.247|1993||175||76|10.2.48|
Giannis Fetfatzidis|AVA|63|80|632.378.218.36.90.760.17|1990||164|27|63|25.34|D
Stiven Mendoza|AVA|33|74|286.183.260.234.609.279.75.202.777.29.527.102|1992||171||33||E
Choco Lozano|AVA|72|75|888.189.386.245.379.72.778|1993||183||72||
Jesse Joronen|GR|57|77|367.823.6.233.165.895.652|1993||197||57||
Jere Uronen|DEF|57|78|377.818.212.14.113|1994||177|16|57||
Felipe Gutiérrez|MED|29|78|334.142.443.476.864|1990||170||29|17|
Nick Powell|MED|76|81|239.552.929.518.426|1994||183||76|10.2.38.54|
Samba Diakité|MED|100|75|19.698.921.46|1989||186||58||
Tomás Pina|MED|54|77|549.905.224.66|1987||184||54||
Aleksandar Katai|MED|145|76|911.623.632.682.294.66.217.499|1991||182||88|34|
Daniel Bessa|MED|84|73|440.629.807.154.232.378.416|1993||173||16||
Anthony Ujah|AVA|115|78|531.548.231.923.874|1990||180|5|115|53|
Raúl Navas|DEF|54|77|787.887.886.203.753.725.638|1988||185||54||
Pantelis Hatzidiakos|DEF|63|74|22.196.233|1997||181||63|13.44|
Tim Ream|DEF|45|82|608.155.367.212|1987||186|50|45|38.42.44|
Sergio León|AVA|54|76|143.142.722.283.638.523.886|1989||178||54||
Majeed Waris|AVA|60|76|429.809.885.856.319.325.600.293|1991||172||60|52.7|
Michael Frey|AVA|143|75|942.530.321.338.351.620.919.744.698.391|1994||188||143||
Yvon Mvogo|GR|143|79|942.705.648.319|1994||186||24||
Cristian Lema|DEF|4|74|95.611.842.138.140.677.150|1990||190||4|18.30.31.38.46.7|
Louis Schaub|MED|165|79|718.231.408.321|1994||177|29|2||
Nicolas Isimat-Mirin|DEF|58|78|885.587.648.141.854.476.907.474|1991||189||58|34.44|
Naldo (1988)|DEF|16|77|627.689.242.395.154.390.871.379.812.494.291.84.61|1988||188||16|30.32.47|
Konstantinos Stafylidis|DEF|63|78|642.524.367.115.825.421.898|1993||178||63|25|
Ewerton (1989)|DEF|16|74|811.627.163.85.812.620|1989||188||16|30.38|
Recio|MED|54|74|586.390.186.753|1991||183||54|28|
Christopher Lenz|DEF|2|77|874.422.281.705.421.302|1994||180||2|59|
Ivica Ivusic|GR|40|76|694.440.591.632.594.651.405|1995||195||40|37|
Antonio Colak|AVA|40|77|479.620.515.0.421.315.404.642.550.717.663.810.517|1993||189||2|9|
Robin Zentner|GR|2|74|548.422|1994||194||2||
Álvaro Vadillo|AVA|54|76|143.142.390.291|1994||180||54||E
Adam Reach|MED|76|72|565.793.162.695.789|1993||185||76||
Moses Odubajo|DEF|76|74|526.164.426.789.698.90.12.633|1993||177||76|38|
Pedro Henrique|DEF|16|70|908|1992||190||16|32.52|
Raúl Silva|DEF|16|73|730.102.811.240.537.355.554.202.163.292.877.346|1989||191||16|47.9|
Kelvin|AVA|16|78|659.325.732.653.834|1993||175||16|35.41.55.7|D
Renaud Emond|AVA|20|70|919.822.600.466|1991||185||20||
Juan Sánchez Miño|DEF|4|75|150.848.296.242.283|1990||175||4||
Callum Paterson|AVA|51|75|413.197|1994||183||76||
Salih Uçan|MED|152|78|351.737.329.285.65.141.131|1994||188|1|152|25.31.41.44|
Nahki Wells|AVA|13|74|198.162.425.175.698|1990||170||13||
Joel Pohjanpalo|AVA|57|78|524.302.874.180.895.652|1994||186||57||
Robin Lod|MED|57|77|654.813.569.217|1993||180||57||
Óscar Duarte|DEF|38|82|224.291.523.63|1989||184|76|114||
André Ramalho|DEF|16|75|767.318.524.548.648.234|1992||182||16|56|
Isaac Cuenca|AVA|54|83|436.127.32.262.176.390|1991||181|1|54|26|E
Jota Peleteiro|AVA|54|77|203.753.164.145.99.66|1991||180|1|54|36|D
Emrah Başsan|AVA|152|67|670.84.371.180.362.909.121.486.799|1992||177||152||D
Charly Musonda Jr.|AVA|20|79|215.142.204.907|1996||173||20|21.42.48.53|E
Thomas Didillon-Hödl|GR|58|75|323.706.80.377.207.587|1995||193||58||
Koffi Djidji|DEF|39|75|600.848.241|1992||184||58|44.52|
Kalifa Coulibaly|AVA|100|75|702.465.600|1991||197||100|44|
Mitchell Dijks|DEF|124|76|32.414.616.154.907.362|1993||192||124||
Yassine Benzia|MED|5|78|541.530.351.632.266.411.699.42|1994||179||58|17.41|
Matteo Luigi Brunori|AVA|84|65|663|1994||180||16||
Marcel Hartel|MED|2|75|231.874.91.817.815|1996||176||2||
Rodrigo Aguirre|AVA|157|77|871.285.673.320.598.159.503.438.605.677.577.77.843|1994||186||157|48|
Derley|AVA|16|72|202.554.140.486.265|1987||183||16|30.7|
Paul Arriola|AVA|45|75|226.247.830.250.784|1995||167||45|42|D
Gerrit Holtmann|AVA|56|74|278.548.750.898.84|1995||183||2||E
Anthony Briançon|DEF|58|74|622.763.666|1994||185||58||
Baptiste Reynet|GR|58|73|266.319.854.622|1990||185||58||
Jackson Irvine|MED|8|82|204.489.740.177.426.419.817.208|1993||179|86|8||
Ulisses Garcia|DEF|143|76|391.923.620.942.553.781|1996||185||127||
Rachid Alioui|AVA|102|75|398.819.622.81.470|1992||186||58||
Sequeira|DEF|127|70|520.597.163.670|1990||178||127|47.9|
Kristoffer Olsson|MED|142|78|93.566.14.494.80|1995||178||142|15|
Salem Al-Dawsari|AVA|7|83|45.905|1991||171|98|7|30.34.37|E
Joe Ralls|MED|76|72|197.939|1993||178||76||
Michael Zetterer|GR|2|74|923.3.645.281|1995||187||2||
Harry Toffolo|DEF|76|75|616.831.742.675.783.270.568.425.617.212|1995||183||76|39|
Lewis Baker|MED|76|79|215.543.789.907.516.302.856|1995||182||76|21.42.48.53|
Davide Biraschi|DEF|84|76|118.378.478.366|1994||182||84||
Mattia Aramu|MED|84|73|848.857.18.696.794.895.378.128|1995||180||84||
Kevin Stewart|MED|85|76|239.853.532.177.216.831|1993||182||76|12.13.33|
Gennaro Tutino|AVA|84|67|601.118.128.416|1996||177||84|11.21.43.48|
Pedro Bigas|DEF|54|76|549.507.753.283|1990||180||54||
Tozé|MED|127|73|325.292.908.582.51.44.58|1993||174||127|32.35.41.52|
Xavi Quintillà|DEF|54|78|721.725.203.905.72.379.386.776|1996||183||54||
Opa Nguette|AVA|135|75|885.323|1994||181|2|58||E
Rúnar Alex Rúnarsson|GR|82|80|613.266.93.625.65.197.233|1995||185||82|16|
Eduard Sobol|DEF|153|77|564.788.563.561.948.802.453.224.293.377|1995||186||153||
Jimmy Cabot|MED|58|74|862.319.81.521|1994||164||58||
Kévin Rodrigues|DEF|127|76|854.266.725.186.753.719.29.55.484.374|1994||170|3|58|25.45|
Joshua Brenet|DEF|42|80|648.421.907.334.57.533.486|1994||181|17|124||
Prince Owusu|AVA|60|74|91.1.750.451.849.579|1997||191||2||
Jozabed Sánchez|MED|54|75|688.719.203|1991||180||54||
Mirko Marić|AVA|40|72|277.592.348.594.580.241.404.895|1995||186||21||
Felipe Avenatti|AVA|157|75|734.841.154.470.822.744.875.135|1993||196||157||
Julio Tavarès|AVA|23|74|266|1988||187||23||
Nacho Vidal|DEF|54|78|430.888.638.549.723|1995||180||54|39|
Aleix Febas|MED|54|76|779.67.549.586.283.203|1996||172||54||
Alexander Szymanowski|AVA|4|73|172.186|1988||175||4||E
Issiaga Sylla|DEF|68|74|854.368.521.578.98|1994||180||68||
Olivier Ntcham|MED|24|79|551.378.204.553.830.769|1996||180||58|26|
Lautaro Giannetti|DEF|4|74|917.871.84|1993||184||4||
Ricardo Centurión|AVA|4|74|710.378|1993||174||4||E
Bruno Gaspar|DEF|3|74|908.356.812.632.889.87|1993||180||127|32.46.52|
Renaud Ripart|AVA|0|71|622.862|1993||181||||D
Sam Byram|DEF|76|77|516.925.617.616|1993||180||76|35.39|
Silvan Hefti|DEF|143|74|331.942.378.578.408.247|1997||183||143||
Dereck Kutesa|AVA|143|74|786.132.321.331.820.949.12|1997||176||143||E
Filip Bradaric|MED|40|80|405.404.196.203.37.36|1992||185|5|40||
Wladimiro Falcone|GR|84|74|768.232.18.513|1995||195||84|44|
Francesco Vicari|DEF|84|73|618.760|1994||190||84||
Yoan Cardinale|GR|58|75|612|1994||181||58||
Federico Bonazzoli|AVA|84|77|440.768.165.760.650.848.764.416.238|1997||182||84|37.44|
Lorenzo Montipò|GR|84|71|618.794.199.139.416|1996||191||84||
Fede Cartabia|AVA|4|75|888.246.262.163|1993||170||4||D
Cedric Itten|AVA|143|77|132.321.331.717.394.942.302.923|1996||189||143||
Milan Gajic|DEF|145|74|624.156.294.194|1996||178||40||
Jon Gorenc Stankovic|MED|53|74|425.827|1996||190||53||
Takuma Asano|AVA|86|83|775.93.298.665.898.549|1994||173||86|15|D
Izzy Brown|AVA|76|79|924.215.907.166.516.789|1997||182||76|17.2.21.42.48.53|
Nikola Vasilj|GR|21|79|948.817|1995||193|25|21||
Paweł Dawidowicz|DEF|126|80|515.898.652.416.140.715|1995||188|17|126|25|
Berkay Özcan|MED|152|75|298.408.131.180.478|1998||174||2||
Pasquale Mazzocchi|DEF|84|74|663.673.895.764.601|1995||183||84|21.6|
Christian Fassnacht|MED|143|77|337.332.942.616|1993||185||143||
Niclas Eliasson|MED|142|66|14.614.168.622.12|1995||178||142||
Iñigo Córdoba|AVA|54|76|101.184.144.66.387.362.174.981|1997||180||54||E
Asier Villalibre|AVA|54|78|101.184.144.886.66.709|1997||184||54||
Álvaro Medrán|MED|54|77|721.379.888.66.719.217.61.40|1994||176||54|11|
Patrick Ciurria|MED|84|72|810.794.580|1995||178||84||
Daniele Verde|AVA|84|76|737.366.674.118.416.886.12.810.764.478|1996||169||84||D
Daniel Iversen|GR|43|77|518.628.742.625.695.825|1997||193||43||
Hayao Kawabe|MED|86|74|775.391.934.822|1995||178||86||
Riad Bajic|AVA|21|74|492.871.131.97.165.385.82|1994||189||21||
Vukasin Jovanovic|DEF|145|76|294.947.156.753.87.244.433|1996||188||160|37|
Gonzalo Escalante|MED|4|75|150.201.753.510.66.238.245|1993||175||4||
Renzo Saravia|DEF|4|77|138.710.325.443.159.112.888|1993||178||4|49.52|
Andrei Girotto|DEF|16|77|395.78.653.498.211.600.61|1992||186||16|44|
Lucas Evangelista|MED|16|76|834.871.654.292.600.908.704.653|1995||181||16|43.46|
Jérôme Onguéné|DEF|24|75|330.298.767.378.281.786.676.301|1997||190||24||
Jamiro Monteiro|MED|23|75|747.417.323.678.756.374.645|1993||175||124||
Manu García|MED|54|79|551.588.854.813.66.90.476|1998||170||54|26|
Bruno Henrique (1989)|MED|16|78|537.693.234.652.653.46.443|1989||180||16||
Rominigue Kouamé|MED|100|75|530.662.207.862.245|1996||177||39|17|
Sebastiano Luperto|DEF|84|77|601.696.285.241.196.238|1996||191||84|11.21.43.48|
Lukas Mühl|DEF|2|73|620.117.810.337|1997||189||2||
Dmitriy Skopintsev|DEF|134|73|705.318.741.124.494.276|1997||176||134||
Lukas Klünter|DEF|2|76|231.418|1996||184||2||
Emre Mor|AVA|152|82|613.157.203.371.632.478.351.301|1997||167|15|43|30.31.53|D
Roger Martínez|AVA|33|71|710.69.905.77.61|1994||180|1|33|20|
Assane Dioussé|MED|135|75|285.763.218.82.623.15|1997||175||135||
Enock Kwateng|DEF|58|75|600.156.82|1997||183||58|44.52|
Phillip Tietz|AVA|2|71|278.750.115.548|1997||190||2||
Jon Bautista|AVA|54|77|725.466.186.753|1995||182||54||
Jon Guridi|MED|54|76|725.188.66.787|1995||179||54||
Ashley Fletcher|AVA|76|76|552.129.925|1995||185||76|31.47.54|
Qazim Laci|MED|1|77|632.17.522.4.806.180|1996||179||1|38.40|
Sada Thioub|AVA|135|74|612.622.81.763|1995||179||58||D
Habib Maïga|MED|39|75|763.96.323.352|1996||181||39||
Isaac Success|AVA|115|77|726.390.921.586.871|1996||186||115|38|
Félix Eboa Eboa|DEF|24|72|398|1997||182||24||
Miro Muheim|DEF|143|78|338.331.408|1998||182||143||
Erick Cabaco|DEF|157|75|598.19.523.379.390.292|1995||186||157||
Nuno da Costa|AVA|23|74|885.293.617.585.759.15.484.131|1991||182||23||
Benjamin Tetteh|AVA|60|76|822.803.153.806.938.426.323.593|1997||193|7|60||
Masaya Okugawa|AVA|86|74|498.318.767.422.91.115.408|1996||176||86||E
Fede San Emeterio|MED|54|74|709.886.390.245|1997||174||54||
Giangiacomo Magnani|DEF|84|73|728.673.463.781.165.416.768|1995||190||84||
Georgios Kyriakopoulos|DEF|63|75|98.288.644.781.154.580.654|1996||182||63|43.46|
Carel Eiting|MED|124|77|32.425.377.336.334.807.633|1998||179||124||
Isac Lidberg|AVA|142|69|410.432.407.170.387.882.158|1998||186||142||
Enrico Brignola|AVA|84|76|139.781|1999||168||84||
Andrés Cubas|MED|122|75|150.674.254.182.622.889|1996||163||4||
Fabio Depaoli|DEF|84|74|218.768.100.139.416|1997||178||84|44|
Dimitrios Limnios|AVA|63|75|113.642.231.334.654.362|1998||178||63|46.9|D
Youssef Maleh|MED|102|71|209.895.356.513.285.238|1998||179||84||
Raúl Guti|MED|54|73|283|1996||177||54||
Valery Fernández|AVA|54|78|386.549.779|1999||179||54||D
Kristian Pedersen|DEF|43|75|874.145.231.830.789.311|1994||189||43||
Maxim Leitsch|DEF|2|74|898.548|1998||188||2||
Kevin Diks|DEF|75|79|907.356.354.285.25.233.158|1996||186||124||
Dani Martín|GR|54|74|813.142|1998||187||54||
Manu Morlanes|MED|54|75|717.186.905.72.291.549|1999||178||54||
Deyovaisio Zeefuik|DEF|124|74|32.312.418.416|1998||185||124||
Amath Ndiaye|AVA|135|76|104.110.189.379.549.886|1996||173|4|135|51|D
Iké Ugbo|AVA|25|79|207.862.377|1998||186||76||
Dani de Wit|MED|124|76|133.275.362.32.22.898.882|1998||183||124|13|
Philippe Sandler|DEF|124|80|645.551.80.862.354.589|1997||190||124|26|
Álex Pozo|AVA|54|76|787.390.549.753.72.454|1999||174||54|35.59|D
Yannik Keitel|MED|2|74|365.298.115|2000||184||2||
Enzo Ebosse|DEF|24|75|512.81.871.454.416.848|1999||185||58||
Ben Woodburn|MED|123|81|532.147.413|1999||174||76|13.33|
Lazar Carević|GR|109|73|911.345|1999||195||160||
Antonin Bobichon|MED|58|69|622.81.819|1995||170||58||
Gauthier Hein|AVA|58|74|323.855.885.15.612|1996||170||58||D
Kamil Piątkowski|DEF|126|76|944.715.767.465.390.484.517|2000||191||126||
Andi Zeqiri|AVA|143|77|509.166.115.132.377.822.928|1999||181||143||
Lyndon Dykes|AVA|51|77|533.698.145.213|1995||188||8||
Leonardo Lopes|MED|127|73|675.929.426.207.465|1998||168||127||
Darnell Furlong|DEF|76|72|698.615.924|1995||180||76||
Lucas Perrin|DEF|58|76|553.293.408.207.813|1998||187||58|12|
Robert Gumny|DEF|126|77|514.115|1998||182||126||
Alfon González|AVA|54|71|67.709.722.203.787.905|1999||172||54||E
Yordan Osorio|DEF|159|77|847.325.908.947.663.259|1994||189||159|52.7|
Alfa Semedo|MED|70|77|904.582.140.291.617.720.908.590.42|1997||190||70|46.7|
Mamadou Loum|MED|135|76|163.582.325.66.720.56.92.813|1996||188||135|52.7|
Falaye Sacko|DEF|100|73|797.908.763.578|1995||180||100|32|
Fousseni Diabaté|AVA|100|76|368.518.799.75.856.402.385.665.509.484|1995||175||58||D
Jailson|MED|16|76|395.211.351.653.203|1995||187||16|43.9|
Ante Palaversa|MED|40|74|405.551.472.379.470.862.26|2000||187||40||
Ivor Pandur|GR|40|77|404.416.362.426|2000||187||40||
Vakoun Bayo|AVA|39|74|204.854.465.702.921.871|1997||184||39||
Njegos Petrovic|MED|145|74|711.294.390.911|1999||185||160||
Jakub Piotrowski|MED|126|78|685.377.919.302.538.871|1997||184|14|126||
Aitor Ruibal|AVA|54|75|143.142.307.186|1996||176||54||D
Adrian Fein|MED|2|76|451.408.133.648.394.274.300|1999||186||2||
Victor Sá|AVA|16|76|501.933.47.159.494|1994||178||16||E
Luca Kilian|DEF|2|73|750.548.231|1999||190||2||
Juan Iglesias|DEF|54|73|379.787|1998||185||54||
Domingos Quina|MED|127|76|925.921.390.367.129.283.742.871.910|1999||173||70|38|
Antonino Gallo|DEF|84|73|652.513|2000||183||84||
Lennard Maloney|MED|45|75|874.157.415.548|1999||187||2|42|
Jonathan Panzo|DEF|76|76|587.207.266.617.236.197.822.732.145|2000||185||76||
James Sands|MED|45|74|609.717.817|2000||180||45||
Jusuf Gazibegovic|DEF|21|75|318.827.231|2000||174||165||
Rafik Guitane|AVA|5|73|511.731.554.820.292.163|1999||164||58||D
Peter Vindahl|GR|43|74|613.22.620.806|1998||195||43||
Samuel Essende|AVA|129|72|466.666.759.910.115.942|1998||192||58||
Gédéon Kalulu|DEF|129|71|4.319|1997||178||58||
Jimmy Dunne|DEF|78|72|413.828.175.698|1997||183||78||
Toni Borevković|DEF|40|70|732.908.405.769|1997||193||40||
Gideon Mensah|DEF|60|77|318.827.767.949.908.156.15|1998||178||60|20|
Hernán Toledo|AVA|4|75|507|1996||180||4||E
Braian Cufré|DEF|4|73|917.549.586.609.206.730|1996||179||4||
Tomás Conechny|AVA|4|66|691.388.66.710|1998||170||4||E
Kwang-song Han|AVA|36|75|196.673|1998||178||36||
Marcus Forss|AVA|57|78|164|1999||182||57||
Ayumu Seko|DEF|86|77|208.391.511|2000||185||86||
Marlon (1997)|DEF|16|73|240.358.149.856.82.242.395|1997||173||16||
Mads Andersen|DEF|43|69|172.6.129.539|1997||194||43||
Maik Nawrocki|DEF|126|73|923.517.204|2001||185||2||
Jerome Opoku|DEF|60|77|684.893.92.131|1998||194||76||
Afimico Pululu|AVA|129|75|132.606.394.454|1999||175||3||
Thomas Henry|AVA|58|73|600.625.895.416.652.822|1994||192||58||
Dani Raba|AVA|54|76|905.754.390.186.888|1995||184||54|59|
Kanya Fujimoto|MED|86|75|844.380.145|1999||175||86||
Richie Laryea|DEF|25|78|637.849.617.889|1995||175|77|25||
Théo Leoni|MED|20|73|80.820|2000||174||20||
Jesper Daland|DEF|116|71|432.207.197.302|2000||189||116||
Lenny Pintor|AVA|58|75|818.541.862.763.501.301|2000||179||58|41|E
Jesús Ramírez|AVA|159|63|554.597.908|1998||187||159||
Tom van de Looi|MED|124|72|312.589.165.345|1999||186||124||
Bernard Tekpetey|AVA|60|77|302|1997||172||60||D
Álex Centelles|DEF|54|71|888.345.72|1999||185||54||
Joaquín Pereyra|MED|4|71|738.345.107.569|1998||181||4||
Tom Holmes|DEF|76|72|720.539.340.742|2000||178||76||
Riley McGree|MED|8|76|31.224.610.557.212.145.565|1998||178||8||
Alan (2000)|MED|16|73|653.396.811.582|2000||161||16|9|
Jordan Holsgrove|MED|51|71|720.203.668.632.292|1999||180||51||
Olimpiu Moruțan|AVA|132|78|863.305.339.371.681.82.90.326|1999||172|18|132||D
Paul Akouokou|MED|39|76|143.142.541|1997||190||39|41|
Tiago Dantas|MED|127|76|140.133.847.642.22.594.404|2000||170||127|27.5|
Andrew Irving|MED|51|73|344.413.3.925.806|2000||177||51|35.39|
Samuel Grandsir|AVA|58|76|862.587.293.818.499.511|1996||170||58|34|D
Arvin Appiah|DEF|76|74|617.72.187.189.586.742.597.75|2001||173||124||
Tudor Băluță|MED|132|78|335.166.10.275.800.877|1999||191|14|132||
Sofiane Alakouch|DEF|102|75|622.323.509.662|1998||175||58||
Lazare Amani|MED|39|73|466.702.292.875.822.488|1998||172||39||
Gonzalo Maroni|MED|4|75|150.182.768.109.771.842.611.130|1999||170||4|44|
Didier Lamkel Zé|AVA|24|73|210.744.487.323.470.411.478.797|1996||192||24||E
Ylber Ramadani|MED|1|74|893.26.513|1996||183||2||
Michael Obafemi|AVA|78|77|805.830.175.568.684.898.147|2000||169||78||
Peru Nolaskoain|MED|54|76|101.144.110.127.719.787.523.262.753|1998||186||54|3|
Ross Stewart|AVA|51|74|816.740.828.805|1996||188||51||
Jessic Ngankam|AVA|2|74|418.394.281.548.932|2000||182||2||
Carlos Neva|DEF|54|74|726.390|1996||174||54||
Abdul Mumin|DEF|60|76|613.908.719.386|1998||188||60||
Jon Morcillo|AVA|54|75|144.101.886.67.72|1998||183||54||E
Samuele Mulattieri|AVA|84|73|336.440.241.366.781.262|2000||183||84||
Antoine Makoumbou|MED|35|72|4.593.196.769|1998||187||58|44|
Loïc Mbe Soh|DEF|58|77|647.81.617.398.71.135.797|2001||187||24|4|
Halil Dervişoğlu|AVA|152|77|807.164.334.371.175.411.374.180|1999||183||124||
Arnau Tenas|GR|54|80|647.905|2001||185||54|36.4|
Lucas Rosa|DEF|16|74|460.887.886.32|2000||177||16||
Yvan Neyou|MED|24|73|193.819.763.186.379.53|1997||180||24||
Marvin Pieringer|AVA|2|73|750.415|1999||189||2||
Oliver Christensen|GR|43|77|626.418.356.764.827|1999||190||43||
Bojan Miovski|AVA|97|75|26.386.717|1999||189||96||
Aron Dønnum|MED|116|74|916.407.822.854|1998||179||116||
Tiago Gouveia|AVA|127|74|140.292.612|2001||176||127|18|D
Gonçalo Borges|AVA|127|72|325.354|2001||184||127|52|D
Andrea Carboni|DEF|84|73|196.580.895|2001||187||84||
Matty Longstaff|MED|76|78|610.26.849.579|2000||171||76||
Nicolas Cozza|DEF|58|74|578.933.600|1999||178||58||
Filip Krastev|MED|17|71|536.862.747.525.500.645.641.402|2001||179||17||
Cezary Miszta|GR|126|72|517.714.732|2001||193||126||
Ibrahima Koné|AVA|100|72|412.29.319.72|1999||190||100||
Andy Pelmard|DEF|98|74|763.75.612.132.223.513.507.454|2000||180||58||
João Klauss|AVA|16|76|501.421.822.797.815.499|1997||190||16||
Leo Kokubo|GR|86|76|140.797|2001||193|6|86||
Rhys Williams|DEF|76|79|532.830.147.26|2001||195||76|13.33|
Nathan Wood|DEF|76|73|565.239.419.830.805|2002||188||76||
Víctor Mollejo|AVA|54|77|104.523.754.110.262.379.549.189.779.174|2001||176||54|51|D
Nathan Ferguson|DEF|76|75|924.243|2000||184||76||
Darian Males|MED|143|72|321.440.378.132.942|2001||189||143||
Felix Mambimbi|AVA|143|74|942.747.331.511|2001||171||143||E
Óscar Valentín|MED|54|73|719|1994||178||54||
Ousseynou Ba|DEF|135|74|368.632.131|1995||192||135||
José Copete|DEF|54|72|688.549.888|1999||192||54||
Santiago Arzamendia|DEF|122|73|245.296|1998||172||4||
Modibo Sagnan|DEF|100|75|521.725.188.847.882.578.180|1999||187||58||
Pathé Ciss|MED|135|74|878.345.190.719|1994||186||135||
Ricardo Velho|GR|127|73|346.376|1998||188||127||
Kike Pérez|MED|54|71|187.887.886.283.719.895|1997||184||54||
Tobias Bech|AVA|43|67|900.315.25|2002||189||43||D
Harry Clarke|DEF|76|73|628.740.419.825.447.790.213|2001||180||76||
Sam Greenwood|MED|76|73|516.565.695.685|2002||180||76|17|
Luke Cundle|MED|76|74|934.830.684.825.568|2002||170||76|18|
Facundo Garcés|DEF|99|73|228.66|1999||188||4||
Nahuel Tenaglia|DEF|4|75|108.182.66|1996||181||4||
Bartosz Bialek|AVA|126|71|944.933.907.466|2001||191||126||
Janis Antiste|AVA|103|73|854.810.781.75.728.620.718|2002||180||58||
Louis Munteanu|AVA|132|76|335.356.191.247|2002||184|6|132||
Martim Neto|MED|127|73|380.140.732.283|2003||185||127||
Rodrigo Pinheiro|DEF|127|71|345|2002||183||127||
Szymon Wlodarczyk|AVA|126|73|517.401.827.764.300|2003||192||126||
Ruan (1999)|DEF|16|71|395.781.834.112|1999||187||16|50|
Christian Oliva|MED|157|74|598.196.888.182.317.777|1996||178||157||
André Silva (1997)|AVA|16|67|732.92.908.834|1997||181||16||
Kazeem Olaigbe|AVA|20|72|740.207.731.856.492|2003||178||20||E
Mohamed Abdelmonem|DEF|47|77|612|1999||184||47||
Ebrima Colley|AVA|148|77|100.416.810.478.942|2000||179||148|48|E
Naatan Skyttä|MED|57|72|854.901.626.869.0|2002||170||57||
Filipe Relvas|DEF|127|66|690.908.12|1999||192||127||
Koba Koindredi|MED|58|75|888.723.292.812.509.132|2001||184||44|47.7|
Maxime Busi|DEF|20|72|702.663.820.588|1999||187||20||
Hrvoje Smolcic|DEF|40|74|404.281.501.490|2000||185||40||
Vasco Sousa|MED|127|70|325.582|2003||164||127||
Josh Wilson-Esbrand|DEF|76|79|551.236.820.197.825.714|2002||176||76|26.58|
Federico Viñas|AVA|157|76|77.527.723|1998||183||157|17|
Yvann Maçon|DEF|64|69|869.763.662.542.11|1998||177||64||
Jan Schöppner|MED|2|72|415|1999||190||2||
Enzo Loiodice|MED|58|72|266.507|2000||176||58||
Juan Cruz|AVA|54|73|586.105.143.142.186|2000||177||4||E
Sebastian Sebulonsen|DEF|116|65|901.172.231|2000||187||116||
Nikola Stulic|AVA|145|72|665.713.702.513|2001||188||160||
Bruno Duarte|AVA|16|72|693.646.908.251.346.294|1996||183||16||
Alessandro Bianco|MED|84|71|356.728.580.642|2002||173||84||
Jamil Siebert|DEF|2|71|302.513|2002||193||2||
Nediljko Labrovic|GR|40|77|404.115|1999||196||40||
Wahid Faghir|AVA|43|75|893.298.613|2003||190||43||
Sidny Lopes Cabral|DEF|23|78|295.140.856|2002||176||124|31|
Mirko Topić|MED|145|72|911.345.616|2001||190||160||
Cenk Özkacar|DEF|152|77|73.541.625.888.886.231.856|2000||190|9|152||
Jenson Seelt|DEF|124|71|828.933|2003||195||124||
Tanguy Coulibaly|AVA|58|75|298.578.769|2001||178||58||D
Haissem Hassan|AVA|47|77|502.188.813.905.723.204|2002||178|6|58||D
Jesús Vázquez (2003)|DEF|54|74|888|2003||182||54||
Lautaro Valenti|DEF|4|71|506.663|1999||188||4||
Adrian Barisic|DEF|21|71|594.366.132.163|2001||193||2||
Fer Niño|AVA|0|75|905.549|2000||190|||59|
Gabriele Piccinini|MED|84|64|728.681|2001||184||84||
Filippo Terracciano|DEF|84|73|416.7.238|2003||186||84|41.52|
Alejandro Francés|DEF|54|74|779.386|2002||182||54||
Calvin Ramsay|DEF|51|80|26.695.155.929.489.532|2003||177||51|13|
Rafael Luís|MED|127|72|293.140|2005||188||127|31.38|
Peque Fernández|AVA|54|73|709.787|2002||172||54||
Rafa Obrador|DEF|54|76|549.721.262.140.848|2004||181||54|11|
Manuel Ángel|MED|54|74|721|2004||170||54||
Malcom Bokele|DEF|24|64|156.402|2000||183||58||
Formose Mendy|DEF|135|75|225.75.319|2001||191||135||
Youssouph Badji|AVA|135|74|224.818.702.25.655|2001||192||135||
Myron van Brederode|AVA|124|73|22.302.471|2003||174||124||E
Toby Collyer|MED|76|75|552.924.426|2004||180||76|47|
Alan Virginius|MED|58|73|330.530.223.942|2003||175||58|41|
Serdar Saatçı|DEF|152|72|141.163.856|2003||190||152||
Léo Realpe|DEF|49|69|438.704.345|2001||186||49||
Abel Bretones|DEF|54|71|723.638|2000||188||54||
Federico Gattoni|DEF|4|75|771.787.80.734|1999||183||4||
Mathias Løvik|DEF|116|70|576.663.856|2003||183||116||
Yassine Kechta|MED|102|75|511|2002||174||58||
Hugo Novoa|DEF|54|76|705.132.882.66.188|2003||182||54||
Marcelo Flores|AVA|25|79|93.723.843|2003||164||25|16|E
Kota Takai|DEF|86|76|485.853.158|2004||193||86||
Lukas Ambros|MED|32|71|803.802.933.401|2004||182||32||
Daouda Guindo|DEF|100|75|767.318.331.818|2002||183||100||
Jay Enem|AVA|124|71|895.624.294|2003||195||124||
Matthew Hoppe|AVA|45|78|549.565.419.756.835|2001||191||45||
Denis Huseinbasic|MED|21|73|231.163|2001||184||2||
Philip Otele|AVA|115|73|870.191.132.408|1999||185||115||E
Serge-Philippe Raux-Yao|DEF|58|71|15.207.736.718|1999||197||58||
Calegari|DEF|16|71|358.499.345.301|2002||176||16||
Morgan Guilavogui|AVA|68|75|662.521.817.766|1998||188||58||D
Clemens Riedel|DEF|2|73|291|2003||186||2||
Linus Gechter|DEF|2|74|418|2004||188||2||
Chiquinho (2000)|AVA|127|73|292.934.825.345.549.74|2000||179||127|18.35|E
Tim Oermann|DEF|2|72|898.932.524.827|2003||189||2||
Enis Destan|AVA|152|73|856.426.473|2002||185||152||
Joel Mvuka|MED|116|73|152.319.942.204|2002||173||||
Keke Topp|AVA|2|71|923|2004||192||2||
Andréas Hountondji|AVA|12|70|759.868.736.175.822.817|2002||190||58||
Finn van Breemen|DEF|124|71|10.132.345|2003||193||124||
Samuele Angori|MED|84|68|673.285.681|2003||186||84||
Iker Muñoz|MED|54|74|181.638|2002||179||54||
Jon Karrikaburu|AVA|54|76|725.66.186.709.174|2002||183||54||
Bernardo (2002)|GR|16|62|847|2002||196||16||
Andreas Ntoi|DEF|63|71|632.732|2003||190||63||
Alfie Devine|MED|76|73|684.853.473.695|2004||182||76||
Jérémy Le Douaron|AVA|58|71|818.652|1998||189||58||
Youssef Enríquez|DEF|102|73|66|2005||170||54||
Iker Bravo|AVA|54|75|524.871.507|2005||182||54||
Stanis Idumbo|MED|20|71|787.587|2005||170||58||
Noah Mbamba|MED|20|77|225.224.524.302.340|2005||187||20|5.56|
Alieu Fadera|AVA|148|65|949.377.232.781|2001||182||148||E
Kaio César|AVA|16|73|235.908.45.234|2004||160||16|30|D
Théo Le Bris|MED|58|73|319.398|2002||165||58||
Luka Romero|AVA|4|80|549.510.7.72.66.185|2004||169||111|41.48.52|D
Simon Ebonog|MED|58|68|511.19|2004||186||24||
Rafiki Saïd|AVA|34|74|818.622.862.822|2000||178||34||E
Willy Kambwala|DEF|58|77|552.905|2004||192||129||
Khalil Fayad|MED|102|71|578|2004||172||58||
Alfie Gilchrist|DEF|76|75|215|2003||183||76|42|
Ange N'Guessan|DEF|58|68|848.841.804|2003||187||58||
MT|DEF|16|64|892.776|2001||185||16||
Antonio Raimondo|AVA|84|73|154.841.895.764.366|2004||185||84||
Hennes Behrens|DEF|2|72|421.415|2005||177||2||
Lautaro Blanco|DEF|4|73|738.283.150|1999||176||4||
Alejandro Rego|MED|54|75|101.184.144|2003||192||54||
Luis Vázquez|AVA|4|73|150.80.379|2001||190||4||
Milos Lukovic|AVA|145|74|433.293.414.507.695|2005||184||136||
Maxi Oyedele|MED|126|73|517.293|2004||183||76||
Cole Campbell|AVA|45|75|157.421|2006||170||45||D
Sorriso|AVA|16|70|462.704.345|2001||176||16||E
Taichi Fukui|MED|86|75|133.690.92|2004||172||86||
Tadeo Allende|AVA|4|75|439.388.203.442|1999||185||4|43|D
Diego González|AVA|122|72|510.109.778|2003||168||122|48|D
Biel|AVA|16|65|358.395.279.812.112.61|2001||169||16|7|E
Arthur Chaves|DEF|16|71|28.421.115|2001||187||16||
Amario Cozier-Duberry|AVA|76|68|166.146.155|2005||170||76||D
David Odogu|DEF|2|74|933.7|2006||191||2||
Lazar Jovanovic|AVA|145|72|911.294.624.298|2006||184||145||D
Chissumba|DEF|127|68|163.74|2005||180||127||
Louis Mouton|MED|58|68|763.666.81|2002||189||58||
Fábio Baldé|AVA|127|73|408|2005||182||2||E
Henrik Meister|AVA|43|69|731.681|2003||191||43||
Tochukwu Nnadi|MED|115|73|949.553|2003||176||115||
Steve Ngoura|AVA|58|71|511.207|2005||185||58||
Lucas Pires|DEF|16|74|777.245.175|2001||182||16||
Krisztián Lisztes|MED|73|73|352.281|2005||183||73||
Anrie Chase|DEF|86|75|298.767|2004||187||86||
Tidiam Gomis|AVA|58|73|759.705|2006||183||58||E
Buba Sangaré|DEF|54|72|737.283|2007||183||54|44|
Patrik Mercado|MED|49|71|438.787|2003||177||49||
Diego Rodrigues|MED|127|66|163|2005||185||127||
İsak Vural|MED|152|68|351.410.366.681|2006||189||142||
Benja Cremaschi|MED|45|76|442.663|2005||182||45||
Dehmaine Tabibou|MED|58|71|600|2005||181||58||
Harry Amass|DEF|76|76|552.789.616|2007||181||76|47|
Xavi Espart|DEF|54|76|127|2007||175||54|27.3|
Chido Obi|AVA|43|80|552|2007||181||43|47|
Artem Stepanov|AVA|153|71|524.620.882|2007||192||153||
Jeremy Agbonifo|AVA|142|70|429.521.132|2005||178||142||D
Matteo Palma|DEF|2|68|871.768|2008||194||2||
Lorenzo Venturino|AVA|84|73|378.737|2006||178||84||D
Jonah Kusi-Asare|AVA|142|72|14.133.367|2007||196||142|38.5|
Aleksa Damjanovic|AVA|145|71|294.524|2008||199||145||
Seny Koumbassa|DEF|58|66|854|2007||194||58||
Noah Edjouma|AVA|58|72|854.530|2005||181||58||D
Wisdom Mike|AVA|2|71|133|2008||176||2|5|E
Anísio Cabral|AVA|127|71|140|2008||187||127|31.38|
Kaïl Boudache|AVA|5|68|612|2006||0||58||D
Abdoul Koné|DEF|58|71|820.705|2005||192||58||
Daniel Banjaqui|DEF|127|68|140|2008||184||127||
Yunus Konak|MED|152|74|799.164.641.983|2006||181||152||
Alpha Touré|MED|135|70|400.323|2006||180||135||
Abdoulaye Faye (2004)|DEF|135|63|429.951.524.319|2004||191||135||
Soriba Diaoune|AVA|58|68|530|2007||174||58||E
Love Arrhov|MED|142|72|170.281|2008||178||142||
Pedro Lima (2006)|DEF|16|73|811.934|2006||178||16|55|
Alexander Røssing-Lelesiit|AVA|116|71|531.408|2007||184||116||E
Suleman Sani|AVA|115|71|705|2006||175||||E
Branimir Mlacic|DEF|40|73|405.871|2007||192||40||
Nathan Mbala|AVA|129|66|323|2008||179||129||
Christian Lell|DEF|2|80|133.231.418.523|1984||180||2|5.54|
Daniel Baier|MED|2|77|1.933.115|1984||174||2|5|
Cédric Varrault|DEF|58|73|612.763.656.266|1980||182||58||
Toifilou Maoulida|AVA|58|76|578.731.323.587.553.15.521.746.622|1979||184||58||
José Javier Barkero|MED|54|75|725.854.753.67.523.779|1979||180||54||
Toni Doblas|GR|54|77|143.142.779.754.601|1980||184||54|43|
Álvaro Rubio|MED|54|74|258.779.67.886|1979||178||54||
César Peixoto|MED|127|78|120.325.908.291.163.140.380|1980||182|1|127|28.30.31.58.59.7|
Almen Abdi|MED|143|79|338.512.871.921|1986||182|6|88|38|
Wes Morgan|DEF|85|80|617.518|1984||186||76|2.44|
Alexander Tettey|MED|116|77|739.731.616|1986||180||60||
Hugo|DEF|127|73|163.768.812.909.136|1976||182||127|25.32.34.40.7|
Zé Castro|DEF|127|78|27.110.262.719|1983||183|1|127||
Ben Watson|MED|76|77|243.698.929.924.921.617.213|1985||178||76|38.45|
Bo Svensson|DEF|43|77|233.158.548|1979||190|3|43|33.53|
Bruno Gama|AVA|127|78|163.325.909.732.262.269.90|1987||175||127|28.7|E
Jamie Mackie|AVA|51|78|543.684.698.617.720|1985||173|9|76||
Juan Calatayud|GR|54|76|586.379.709.430.549.348|1979||191||54||
Marco Russ|DEF|2|79|281.933|1985||190||2||
Nicolas Maurice-Belay|MED|58|77|587.193.330.156|1985||180||58|24|
Steeve Elana|GR|103|74|759.818.530|1980||185||58||
Carlitos|MED|127|74|292.140.909.329.132|1982||175||127|25.38.7|
Sébastien Roudet|MED|58|74|502.612.885.521.330|1981||174||58||
Per Ciljan Skjelbred|MED|116|78|739.408.418|1987||175||116||
Rémy Riou|GR|58|75|541.319.15.854.600.65.702.759.662|1987||189||58|4.44.52|
Renaud Cohade|MED|58|76|622.156.293.885.763.323|1984||180||58||
Goran Popov|DEF|97|76|294.522.414.275.924|1984||189||88||
Corentin Jean|AVA|58|75|862.587.854.521|1995||170||58|34.4|
Andrea Mantovani|DEF|84|77|848.859.218.652.154.673.618|1984||185||84||
Leandro Rinaudo|DEF|84|78|652.890.764.209.794.601.463.618.18.128|1983||191||84||
Jérémy Morel|DEF|98|80|319.553.541.731|1984||172|15|58|17.24|
Simon Pouplin|GR|58|75|731.365.330.612|1985||187||58||
Paul McShane|DEF|78|80|552.920.166.924.828.426.129.243.720|1986||183||78|10.20|
Momo|AVA|54|75|507.67.262.709.142|1982||177||54||E
Pedro López|DEF|54|75|888.709.886.523.754|1983||174||54|44|
Erwin Hoffer|AVA|165|81|718.601.0.281.302.479|1987||177|28|165||
Hernán Pellerano|DEF|4|74|917.72.611.226.438|1984||183||4||
Gerson Magrão|MED|16|75|242.354.357.446.275.777.355.812.192|1985||181||16|34|
Riccardo Meggiorini|AVA|84|77|440.810.222.128.154.378.618.848.218|1985||182||84|37.6|
Danny Graham|AVA|76|79|565.263.516.147.198.921.830.828.426.934.146|1985||185||76||
Cyril Théréau|AVA|58|76|868.81.702.339.80.218.871.356.196|1983||189||58||
Edinho|AVA|127|76|163.668.380.909.586.642.554.27.464.349|1982||182|6|127|20.28.40.52|
Julian Schuster|MED|2|78|298.365|1985||190||2||
Daniele Dessena|MED|84|77|663.768.196.165|1987||183||84|44|
Óscar Trejo|MED|4|77|150.549.283.719.813.854|1988||177||4||
Zé Love|AVA|16|76|653.693.102.446.704.242.811.395.360.353.833.78.777.378.794.235.389|1987||179||16||
Haris Medunjanin|MED|21|80|22.807.886.542.375.262.678.221|1985||188|60|88|54|
Mariano Izco|MED|4|74|842.201.218.241|1983||180||4|51|
Damien Perquis|DEF|126|80|862.763.330.142.849.617.368|1984||184|14|58||
Georg Niedermeier|DEF|2|79|133.298.365|1986||188||2||
Leon Barnett|DEF|76|76|539.924.236.616.197.929|1985||185||76||
Cristiano|AVA|16|73|668.642.812.136.240.909|1983||175||16|25|E
Vito Mannone|GR|84|82|93.129.426.828.720.569.289.587.319.530|1988||191||84|15|
Modou Sougou|AVA|135|76|519.909.27.191.553.950.789.582|1984||178|12|135|12.17|D
Sinan Bolat|GR|152|77|377.822.325.486.371.224.597.92.744.465.473.484|1988||186||152|32.35.39.41|
Mohamed Fofana|DEF|100|75|854.820|1985||181|5|58||
Nilson|GR|16|74|280.621.908.582|1975||185|1|16|46|
Lazaros Christodoulopoulos|MED|63|81|642.654.154.416.768.12.632.113.83.90.448|1986||183|35|63|25.28.32|
Vladimir Stojkovic|GR|145|83|294.600.907.812.379.929.665.288.545.617.42.712.244|1983||196|84|88|40.45|
Kamil Vacek|MED|32|74|795.91.806.218.573.680.545.800.626.153.660|1987||184||22||
Fin Bartels|AVA|2|76|422.817.923|1987||176||2||D
Sebastian Boenisch|DEF|126|82|923.524.1|1987||191|14|126||
Ion Ansotegi|DEF|54|77|753.725.549|1982||192||54||
Michael Mancienne|DEF|138|82|215.698.934.408.617.607.177|1988||184|5|76|11.2.31.50|
Adrian Mariappa|DEF|85|78|921.720.243|1986||180||76|38|
Sergio Sánchez|DEF|54|78|291.709.787.586.654.745|1986||185||54|22.42.43.46|
Johannes Flum|MED|2|76|365.281|1987||190||2||
Razak Boukari|AVA|149|75|502.521.731.934.330|1987||182||149||D
Tomas Pekhart|AVA|32|81|805.853.802.453.806.620.315.12.507.517.374.271|1989||192|26|22||
Diego Contento|DEF|2|83|133.156.302|1990||177||2|26.5.54.58|
Alejandro Alfaro|AVA|54|77|787.189.549.886.246.430|1986||173||54|59|E
Nuno André Coelho|DEF|127|75|325.822.690.295.812.163.123.476.214|1986||190||127|28.32.34.7|
Lino Marzorati|DEF|84|76|7.285.196.781.575|1986||182||84|11|
Takayuki Morimoto|AVA|86|81|844.201.618.51.452.485|1988||180|10|86|51|
Samir Ujkani|GR|89|82|652.618.218.378.508.180.848.285|1988||186|24|88||
Nivaldo|DEF|16|74|227.621.235.360.667.120.763.59.886.542.732|1980||187||16|30.39|
Paul Baysse|DEF|58|76|156.193.818.763.612.586.759|1988||184||58||
Ervin Zukanovic|DEF|21|79|340.466.470.465.218.768.737.100.378.36.760.478.98|1987||189||88|31.41.44|
Rafael Bracali|GR|16|72|667.462.597.325.629.655.92.149|1981||175||16|52.55.7|
Paulão|DEF|16|74|112.78.892.604.163.763.142.772|1982||188||16||
Paulo Vinícius|DEF|16|73|776.520.629.519.163.149.87.191.339|1984||186||16|28.32.34|
Jean-Sylvain Babin|DEF|103|75|502.321.9.390.813.542|1986||182||58||
George Boyd|AVA|51|79|823.675.617.426.175|1985||185|8|76||E
Alexander Esswein|AVA|2|77|0.933.274.620.115.418.298|1990||181||2|5|D
Manuel Gulde|DEF|2|75|421.750.479.365|1991||179||2||
Marco Stiepermann|MED|2|76|157.874.394.616|1991||190||2|33.5|
Adam Le Fondre|AVA|76|77|824.742.720.197.155.934.929.832.419|1986||177||76|35.39.55|
Juan Pablo Pino|AVA|33|76|436.587.702.371.52.632.746|1987||176|1|33|34|D
Marco Biagianti|MED|84|75|356.201.18|1984||180||84|21.37.51|
Casto|GR|54|76|67.143.142.722.507.72|1982||181||54||
Slobodan Medojevic|MED|145|76|911.933.281|1990||183||88||
James Perch|MED|76|77|617.610.929.698|1985||180||76||
Jan Kirchhoff|DEF|2|80|548.133.828.155|1990||195||2|26.5.53|
Djalma|AVA|3|78|554.325.484.492.376.642.65.346|1987||176||3|35.41.55.7|D
Markel Bergara|MED|54|78|753.725.379|1986||180||54||
Luis Aguiar|MED|157|75|295.325.27.163.276.677.812.771.280|1985||183||157|28.30.7|
Kike Sola|AVA|54|78|101.638.522.379.565|1986||185||54||
Wellington Paulista|AVA|16|76|570.659.777.66.159.242.653.240.925.443.235.358.689|1984||183||16|50|
Joaquín Larrivey|AVA|4|78|427.196.917.228.719.203|1984||185||4||
Diego Cavalieri|GR|16|80|653.532.209.358|1982||191|3|16|43.50|
Jonathan Pereira|AVA|54|78|905.709.142.719.886.187|1987||167|2|54||
Juan Forlín|DEF|4|78|150.291.57.701|1988||180||4|42|
Evandro|MED|16|75|102.653.389.112.280.294.292.325.426|1986||180||16|32.35.38.39.52|
Hernán Barcos|AVA|4|76|710.294.427.755.503.653.395.812|1984||189||4|30.32.47.50|
Egidio Arévalo Ríos|MED|157|78|677.577.252.159.226.652.217.843.109|1982||170||157|17|
Gabriel Hauche|AVA|4|74|710.218.226|1986||168|5|4|51|
Mauro dos Santos|DEF|4|75|125.722.72.753.186|1989||180||4||
Leonel Vangioni|DEF|4|77|611.734.7|1987||181|3|4||
Ukra|AVA|127|77|325.891.629.163.732.41.195.776|1988||175||127|12.25.28.34.39.45.55.59.7|D
José María Basanta|DEF|4|80|296.577.356|1984||188|12|4|51|
Andreas Bjelland|DEF|43|78|540.613.334.164.233|1988||188||43||
Karim Aït-Fana|AVA|102|74|578|1989||175||58|4|E
Jamel Saihi|MED|151|75|578.81|1987||181||58|4|
Petar Skuletic|AVA|145|74|501.911.713.665.535.376.578.799|1990||190||88||
André Pinto|DEF|127|77|325.776.909.690.629.654.163.812.41.346.308|1989||194|1|127|12.25.28.30.32.41.45.52.55.59.7|
Miguel Rosa|MED|127|73|140.292.120.137|1989||174||127|30.7|
Heinz Lindner|GR|165|79|117.281.391.132.329.875.942.338|1990||188||165||
Dani Aquino|AVA|54|74|722.886.723.110.104|1990||174||54|51|
David Zurutuza|MED|54|77|753.725|1986||184||58||
Jérémy Pied|DEF|58|76|323.541.612.398.805.530|1989||173||58|4|
Theodor Gebre Selassie|DEF|32|82|802.804.923|1986||181|54|22||
Jack Collison|MED|123|80|925.160.447.929.675|1988||183|15|76||
Guido Marilungo|AVA|84|76|768.513.100.209.285|1989||176||84||
Pablo Granoche|AVA|157|74|734.845.859.218.618.890.650.209.575|1983||182|1|157||
Federico Macheda|AVA|84|83|552.768.698.298.270.145.197.617.618.654.82.17.98|1991||184||84|10.2|
Panagiotis Tachtsidis|MED|63|80|12.378.209.416.737.201.848.196.632.617.513.42.191.730|1991||193|25|63|25|
Nathan Baker|DEF|76|77|99.568.168|1991||191||76||
Ryder Matos|AVA|16|77|356.279.246.653.199.871.416.285|1993||182||16||
Pietro Iemmello|AVA|84|74|356.696.618.359.810.781.139.673.507.366|1992||180||84||
Giuseppe De Luca|AVA|84|73|890.100.128|1991||168||84|48|
Tiago Pinto|DEF|127|74|812.860.163.732.262.709.639.82|1988||177||127|39.40|
Vaclav Pilar|MED|32|81|424.902.933.365.804.795.453.153|1988||169|22|22||
Sebastián Fernández|AVA|157|80|125.586.719.598.252|1985||166|14|157|28|
Xavi Torres|MED|54|76|127.586.523.379.142.813|1986||184||54|26.28|
Míchel Herrero|MED|54|77|888.262.430.523.379.723.886.189|1988||182||54||
Henri Bienvenu|AVA|24|75|942.351.779.290.862|1988||180||24||
Hal Robson-Kanu|AVA|123|83|720.831.924|1989||183|46|76||
Renan Bressan|MED|14|77|64.732.17.214.659.462.192.240.903|1988||182|29|16||
Kyle Bartley|DEF|76|79|93.790.717.830.145.516.924|1991||191||76|15|
Rubén Rochina|AVA|54|78|146.779.719.390.745.523|1991||182||54||D
Jonás Ramalho|DEF|3|78|101.144.386.638.586|1993||183|1|54|17|
Baba|AVA|135|77|554.787.523.379|1988||185||135||
Raffaele Di Gennaro|GR|84|79|440.222.508.841.810.674|1993||188||84|31.37.43.44.58.6|
Chechu Dorado|DEF|54|75|258.754.142.905.719|1982||180||54||
Xabi Etxeita|DEF|54|79|144.101.307.283.754.379.753|1987||186|1|54||
Iago Herrerín|GR|54|78|101.184.144.104.186.56.888.13.261|1988||187||54|17|
Coke|DEF|54|80|719.787.523|1987||182||54|35.59|
Niko Gießelmann|DEF|2|74|394.302.874|1991||182||2||
Rene Krhin|MED|53|81|440.154.246.390.600|1990||189||88|31.37.44.58.6|
Ørjan Nyland|GR|116|83|576.315.99.616.160.720.705.787|1990||192|75|116||
Jason Steele|GR|76|78|565.615.146.828.166|1990||188||76||
Hernán Pérez|AVA|122|80|528.905.632.291.886.66|1989||180|25|122||D
Aleksandar Ignjovski|MED|145|78|624.1.923.281.365|1991||175||88||
Abdelhamid El Kaoutari|DEF|102|77|578.652.820.746|1990||180||58|4|
Jonathan Urretaviscaya|AVA|157|79|734.140.677.262.908.668.649|1990||171||157|30.41.46.51.7|D
Adlène Guédioura|MED|5|81|193.867.470.702.934.617.243.921.565.43.790.39.177|1985||183|63|58||
Willians|MED|16|75|357.871.443.242.234|1986||175||16|55|
Carlos Carmona|MED|29|82|729.100.108.227|1987||178|51|29|17|
Abdelkader Ghezzal|AVA|5|80|241.794.128.209.523.508.663.232|1984||183|29|58||
Damián Suárez|DEF|157|76|255.813.283.379.159|1988||172||157||
Rajiv van La Parra|AVA|124|76|759.414.934.166.425.565.294.88.71.135|1991||181||124||E
Teófilo Gutiérrez|AVA|33|83|459.856.710.506.185.734.812.738.260.2|1985||178|52|33|30.51|
Daniel Ayala|DEF|54|79|532.426.263.616.617.565|1990||190||54|43|
Serdar Dursun|AVA|152|74|290.257.478.394.351.65.490|1991||190||2|30.55|
Janis Blaswich|GR|2|75|158.274.417.705.767.524|1991||193||2||
Denis Alibec|AVA|132|81|335.440.471.154.339.486.191.113|1991||187|45|132|44|
Ivo Pinto|DEF|127|77|325.380.909.748.519.732.191.277.616.345.362|1990||184||127|12.28.59.7|
Yoric Ravet|AVA|58|74|393.763.81.509.391.942.365|1989||178||58||D
Aridane Hernández|DEF|54|73|887.66.390.245.638.719|1989||186||54||
Marcelo Díaz|MED|29|81|864.132.408.203.865.710.528|1986||166|61|29||
Lucas Mendes|DEF|26|82|235.553.39.43|1990||183|27|16|20.35|
Iván Balliu|DEF|1|77|92.323.72.719|1992||175||54||
Luca Siligardi|AVA|84|77|128.440.679.859.154.18.416.663.241|1988||180||84|21.31.43.58.6|D
Marvin Zeegelaar|DEF|0|76|32.300.291.282.147.732.812.921.871|1990||186|||30.38.42|
Nick Viergever|DEF|124|76|807.22.32.648.394.882|1989||182||124|54|
Richard Strebinger|GR|165|74|418.923.451.718|1993||194||165||
Tom Trybull|MED|2|75|923.817.394.10.616.146.762.147.626|1993||181||2||
Kevin Möhwald|MED|2|72|620.923.874.466|1993||183||2||
Darko Brasanac|MED|145|77|665.142.186.66.638.586|1992||178||88||
Serdar Gürler|AVA|152|74|330.282.856.464.376.639.754.402.84.492.131.301|1991||173|2|58||E
Cicinho|DEF|16|77|450.627.653.787.279|1986||173||16|50|
Lago Júnior|AVA|39|75|753.384.188.549.754|1990||185|5|39||E
Édgar Badía|GR|54|70|726.283|1992||181||54||
Rafael Cabral|GR|16|80|777.601.768.720.242.395.766|1990||186|3|16|11.21.43.48|
Raphael Holzhauser|MED|165|77|718.298.115.117.391.135.625.1|1993||194|4|165||
Ikechi Anya|MED|51|76|936.615.787.203.245.390.921.263|1988||170||51|38|
Facundo Bertoglio|MED|4|75|228.275.395.950.842.98.17.644.69.90.912|1990||173|1|4||
Onel Hernández|AVA|41|76|91.923.933.278.616.565|1993||172||41||E
Sergio Araujo|AVA|4|77|150.842.507.12|1992||180||4||
Lorenzo Crisetig|MED|84|78|440.663.810.241.196.154.366|1993||183||84|37.44|
Eric Bauthéac|AVA|58|75|266.612.530|1987||168||58|17.41|D
Greg Cunningham|DEF|78|79|518.551.617.168.695.197|1991||183|4|78|2.37|
Bruno Zuculini|MED|4|78|710.551.888.246.565.719.12.416.734|1993||178||4|39.49.51|
Marcus Bettinelli|GR|76|80|367.565.215.551|1992||194||76|42.53|
Carlos Izquierdoz|DEF|4|72|506.108.778.150.813|1988||191||4||
Kevin Behrens|AVA|2|76|762.874.933.320|1991||184|1|2||
Aron Jóhannsson|AVA|45|78|25.22.923|1990||184||45|42|
Junya Tanaka|AVA|86|80|483.812.906|1987||181|4|86|30.38|
Sanjin Prcic|MED|21|75|330.731.848.673.523.293|1993||181||58||
Marcin Kamiński|DEF|126|79|514.298.302.931|1992||191||126|25|
Joris Kayembe|DEF|129|76|325.92.732.600.702.377|1994||180||20|35.44|
Gaku Shibasaki|MED|86|83|482.189.379.262.186|1992||175|60|86||
Hyun-jun Suk|AVA|37|79|32.312.554.36.597.909.325.856.862.820|1991||190||37|32.39.40.52.55|
Pedro Santos (1988)|AVA|127|73|200.520.909.163.732.230.247|1988||173||127|9.28.32.39.41.52|D
Samu Saiz|MED|54|74|379.104.754.516.386.799.301.670|1991||174||54||
André Simões|MED|127|72|776.582.12.345|1989||177||127||
Mehdi Bourabia|MED|102|74|393.525.492.781.810.366.486|1991||184||58||
Diego Lopes|MED|16|73|140.732.486.655|1994||171||16|30.39.46|
Lindsay Rose|DEF|104|75|819.885.541.319.746.90.517|1992||184||58||
Daniel Bentley|GR|76|76|164.168.934|1993||188||76|55|
Alejandro Arribas|DEF|54|77|719.638.787.262.865.723.317|1989||182||54|59|
Haris Belkebla|MED|5|72|855.818.81|1994||177||58||
Diego Maurício|AVA|16|74|357.64.811.909.55.704|1991||183||16||
Francisco Portillo|AVA|54|77|586.142.379.72|1990||169||54|28|D
Stefan Mitrovic|DEF|145|77|470.140.886.365.465.293.379.665|1990||189||88|30|
Jens Jønsson|MED|43|75|25.492.245.12|1993||182||43||
Onur Bulut|DEF|152|75|898.365.278.65.180.486.141.131|1994||181||2|25|
Mikael Ishak|AVA|142|77|231.331.663.241.716.620.514|1993||184||142||
Fábio Cardoso|DEF|127|75|668.909.717.776.325.37.787|1994||187||127|41.52.7|
Maxime Colin|DEF|58|74|866.862.80.164.145.323|1991||179||58||
Unai Bustinza|DEF|54|77|101.144.186.586|1992||175||54||
Stuart Dallas|DEF|79|77|164.615.516|1991||183||79|17|
Leonardo Mancuso|AVA|84|67|222.674|1992||182||84||
Valerio Verre|MED|84|76|737.378.794.871.652.673.674.768.416.285|1994||180||84|36.44|
Federico Ceccherini|DEF|84|74|18.241.356.416.478.238|1992||187||84||
Manuel Pucciarelli|AVA|84|75|285.218|1991||174||84|48|
Nicolas Benezet|AVA|58|74|622.950.759.398|1991||171||58||E
Gen Shoji|DEF|86|81|482.854.372.546|1992||182|20|86||
Federico Viviani|MED|84|76|737.650.674.508.416.154.760.366|1992||180||84|36|
Pedro Tiba|MED|127|69|909.163.886.214.514.380|1988||174||127|32.41.52.9|
Andrew Hjulsager|MED|43|75|172.203.390.472.465.893|1995||175||43||
Eddy Gnahoré|MED|58|74|145.601.199.241.673.652.75.97.308.339|1993||188||58|48|
Edenilson|MED|16|79|234.378.871.443.112.395.159|1989||175|2|16|11.50|
Daniel Johnson|MED|85|77|99.939.628.695.825.478|1992||174||85||
Dimitri Foulquier|DEF|64|76|731.390.921.293.379.888|1993||183||58||
Jean-Daniel Akpa Akpro|MED|39|76|854.764.510.285.580.416|1992||180||58|48|
Sasa Zdjelar|MED|145|76|624.632.549.665.194.947|1995||183||160|38.40|
Pablo Insua|DEF|54|76|262.186.754.813|1993||183||54||
Hernâni|AVA|127|72|908.325.632.523.63.507.732.50|1991||180||127|7.35.38.46.52|E
Fabrício|AVA|16|75|450.234.462.159.690|1990||180||16||
Rafał Wolski|MED|126|77|517.356.128.471.930.515.931.714|1992||179||126|25|
Michael Santos|AVA|157|76|734.586.813.186.233.182.317.917.206|1993||175||157|17|
Victorien Angban|MED|39|79|215.797.390.919.323.342.267.984|1996||180|1|39|21.48|
Diego Rubio|AVA|29|77|227.812.886.476|1993||180|3|29|28.34.38|
Josip Elez|DEF|40|75|405.510.25.404.596|1994||190||40||
Joe Rothwell|MED|76|76|552.129.147.641.146.160.805.516.717|1995||185||76|31.47.54|
Petar Stojanović|MED|53|80|593.277.285.768.764.517|1995||178|73|53||
Ambroise Oyongo|DEF|24|76|608.579.578.494|1991||175|9|24||
Giorgi Kvilitaia|AVA|61|75|718.465.83.17.323|1993||193||61||
Mike van der Hoorn|DEF|124|77|882.32.830.91|1992||190||124||
Luka Djordjevic|AVA|109|79|947.334.768.688.96.535.893.342.984|1994||185|11|160|12.37|
Gonzalo Bueno|AVA|157|76|598.497.878.296|1993||176||157||E
Jonathan Silva|DEF|4|78|296.812.150.737.186.379|1994||175|2|4|30.38|
Emiliano Velázquez|DEF|157|76|252.110.379.163.719|1994||185||157|17.32.51|
Juan Ramírez|MED|4|73|89.229.72.182.771.150.506|1993||174||4||
Nicolas Haas|MED|143|74|321.100.652.366.285|1996||178||143||
Nabil Ghilas|AVA|5|78|582.910.325.246.523.375.402.909|1990||183||58|32.35.41|
Paulo Gazzaniga|GR|4|78|805.719.853.283.367.386|1992||196||4|31.42|
Robert Glatzel|AVA|2|73|415.197.548.408|1994||194||2||
Rafa Soares|DEF|127|73|27.325.732.367.690.908.753.642.345|1995||184||127||
Filip Helander|DEF|142|78|550.416.154.717.626.633.429|1993||192||142||
Federico Ricci|AVA|84|76|737.241.781.378.139|1994||175||84||D
Haris Tabakovic|AVA|21|80|942.391.117.418.421.158|1994||194|10|143||
Zakaria Bakkali|AVA|20|78|648.888.262.80.135.707|1996||164||20|39.45|E
Matus Bero|MED|52|75|856.907.898|1995||181|1|52||
Cedric Teuchert|AVA|2|76|620.874.815|1997||182||2||
Mateusz Wieteska|DEF|126|77|517.401.223.196.642.490|1997||187|4|126|25.44|
Igor Lichnovsky|DEF|29|75|864.325.813.886.605.185.60.843.77.478|1994||187||29|32.35|
Mariusz Stępiński|AVA|126|77|928.620.930.600.218.416.513.633.493|1995||183|2|126|52|
Ali Abdi|DEF|151|78|662.759.612|1993||183|49|151||
László Kleinheisler|MED|73|81|348.923.352.594.654.405.392.341|1994||173|53|73|46|
Óscar Plano|AVA|54|74|9.886|1991||180||54||D
Jesper Karlström|MED|142|74|170.268.514.871|1995||179||142||
Sergio Peña|MED|125|78|726.390.847.310.550.642|1995||178|30|125||
Valentín Vada|MED|4|75|156.763.72.189.779.745.251|1996||172||4||
Luca Mazzitelli|MED|84|75|737.165.781.378.681.580.366.232.196|1995||184||84||
João Novais|MED|127|69|520.732.163.65|1993||180||127|47.9|
Jannes Horn|DEF|2|76|933.231.898.620.815.718|1997||186||2||
Birger Verstraete|MED|20|75|224.225.585.470.465.231.744.471.90.625|1994||171||20||
Oussama Tannane|MED|102|76|414.417.763.507.882.907.402.589|1994||177||102||
Fernando Andrade|AVA|16|74|906.396.669.776.325.799.180.42.200|1993||182||16|52.7|E
Aiyegun Tosin|AVA|12|73|338.319|1998||179||115||
Anastasios Donis|AVA|63|77|463.781.320.612.298.820.884.17.90|1996||178||76|48|E
Charles Pickel|MED|129|76|132.391.606.393.345.238.291|1997||180||143||
Fredrik Jensen|MED|57|77|334.115.90|1997||183||57||
Jack Stacey|DEF|76|73|720.198.160|1996||180||76||
Wilfrid Kaptoum|MED|24|76|127.143.142.72.607.507.13.657.384|1996||170||24|36|
Chico Geraldes|MED|127|76|812.582.732.12.292|1995||175||127|30.32.47|
Guga|MED|127|70|655.345.732.122.50|1997||167||127||
Jari Vandeputte|MED|20|69|465.238|1996||174||20||
Ryan Manning|DEF|78|75|698.742.830.805|1996||173||78||
Marcelo Meli|MED|4|74|228.150.812|1992||170||4||
Matías Nahuel|AVA|54|75|905.142.632.262.189.723.800.545.454|1996||175||4||E
Baptiste Guillaume|AVA|20|73|521.530.293.81.622.885.398.71.512|1995||189||20|17.41|
Arkadiusz Reca|MED|126|69|931.100.760.241.810.517|1995||187||126||
Fabrizio Angileri|DEF|4|72|388.734.379.234|1994||179||4||
Gerard Gumbau|MED|54|78|127.186.386.283.390.719|1994||187||54|3.36|
Henrique Dourado|AVA|16|74|211.777.570.693.653.242.908|1989||186||16|32.52|
Jhonder Cádiz|AVA|159|75|878.597.582.909.140.266.603.345.527.649|1995||191||159|18.30.31.38|
Mihailo Ristic|DEF|145|76|294.494.806.578.140.203|1995||183||21|43.7|
Ionuț Nedelcearu|DEF|132|79|308.872.12.241.652.35|1996||190|27|132||
Antonio Raíllo|DEF|54|75|143.291.688.549|1991||184||54||
Luis Rioja|AVA|54|74|72.66.888|1993||176||54||D
Vincent Sierro|MED|143|76|329.365.331.942.854.60|1995||185||143||
Iván Alejo|AVA|54|75|104.9.753.379.586.245|1995||186||54||D
Cheikh N'Doye|MED|135|73|867.81|1986||190||135||
Ivi López|MED|54|73|379.523.886.813.754.688.715|1994||174||54||
Gerson Rodrigues|AVA|94|80|838.275.82.862.301.63.799.21|1995||190||127||
Jacob Rasmussen|DEF|43|76|626.817.739.285.356.907.354.172.767.0|1997||190||43|13|
Tommaso Augello|DEF|84|73|810.768.196.652|1994||180||84|44|
Tiago Sá|GR|127|72|163|1995||188||127|32.41.9|
Mats Köhlert|DEF|2|74|408.414.172|1998||168||2||
Adrián Dalmau|AVA|54|74|549.417.882.807.9.493.680|1994||181||54||
Kamil Jóźwiak|AVA|126|76|514.370.263.212.390.454|1998||176||126||E
Luca Sangalli|MED|54|75|725.307.586|1995||167||54||
Yann Bodiger|MED|58|74|854.245|1995||186||58||
Alexandre Mendy|AVA|70|75|612.293.622.398.156.818.759.578|1994||184|7|58||
Cédric Yambéré|DEF|130|74|156.85.17.266|1990||192||58||
Jean-Luc Dompé|AVA|58|74|885.797.822.466.75.465.949.408|1995||170||58||E
Dimitrios Nikolaou|DEF|63|76|632.285.810|1998||188||63|40|
Keidi Bare|MED|1|79|104.110.586.291.779|1997||174|28|1||
Mikey Johnston|AVA|78|76|413.717.272.419.888.489.204.908.924|1999||176||51||E
Kike Barja|AVA|54|76|638.181|1997||178||54||D
Eray Cömert|DEF|143|80|132.320.329.888.600.886|1998||183||143||
Matt Clarke|DEF|76|73|447.692|1996||188||76||
Dario Maresic|DEF|165|73|827.820.501.591.405|1999||183||165||
Paolo Ghiglione|DEF|84|72|366.378.238|1997||188||84||
Ben Sheaf|MED|76|76|93.823.270.236|1998||185||76|15.16|
Ricardo Mangas|DEF|127|74|265.149.156.908.809.812|1998||181||127|28|
Aymen Barkok|MED|102|64|281.302.548.418|1998||188||2|59|
Luca de la Torre|MED|45|78|367.417.203.770.212|1998||175||45|43|
Vincent Thill|AVA|94|77|323.666.868.597.913.14|2000||176|10|94||D
Adrian Semper|GR|40|74|277.592.218.378.232.681|1998||192||40||
Florian Krüger|AVA|2|72|91.312.278.135|1999||186||2||
Dennis Hadzikadunic|DEF|21|80|550.741.549.408.768|1998||190|30|142||
Timothé Cognat|MED|58|74|541.786|1998||173||58||
Akim Zedadka|DEF|5|74|316.521.223.530.15.779.680|1995||173||58|41|
Gil Dias|AVA|127|73|587.891.732.356.617.632.390.345.140.298.517|1996||183||127|30.34|D
Jordi Mboula|AVA|54|75|587.207.754.549.292.709.416.380|1999||183||54|34|D
Jón Dagur Thorsteinsson|AVA|82|67|894.25.625.418.757|1998||177||82||E
Juan Otero|AVA|33|74|361.296.75.778.77.813|1995||179||33||D
Deiver Machado|DEF|33|75|106.70.567.465.854.521.600|1993||172||33||
Emmanuel Boateng|AVA|60|73|732.582.523.54.374|1996||175||60||
Sebastian Vasiliadis|MED|63|70|750.91|1997||177||2||
Ovie Ejaria|AVA|76|80|532.828.717.720.723|1997||183||76|13.33|E
Claud Adjapong|DEF|84|75|781.416|1998||180||84||
Hannes Delcroix|DEF|71|77|80.707.175.830.320|1999||185||71||
Thibault De Smet|DEF|20|73|465.797.820.135.662|1998||182||20||
Abdelhamid Sabiri|MED|102|80|620.425.750.97.768.356.42.61|1996||186|4|102||
Zan Celar|AVA|53|78|737|1999||187||53||
Jaime Seoane|MED|54|73|721.379.723.754|1997||175||54||
Güven Yalçın|AVA|152|76|141.513.378.478.92.65|1999||184||2||
Adrián Dela|DEF|54|71|905.523|1999||179||54||
Nabil Alioui|MED|102|74|207.511.29.251|1999||175||58||
Jean-Kévin Duverne|DEF|71|76|521.818.600.470.465|1997||184||58||
Andreas Poulsen|DEF|43|73|566.158.117.315.23.796|1999||188||43||
Dujon Sterling|DEF|76|78|215.236.929.147.825.717|1999||186||76||
Danel Sinani|MED|94|78|616.919.425.929.817|1997||185|21|160||
Matheus Fernandes|MED|16|76|159.653.127.886.102.704|1998||183||16|50.9|
Faïz Selemani|AVA|34|73|210.319.855.4.875.470.44.58.700|1993||181||58||E
Florian Sotoca|AVA|58|75|578.393.521|1990||187||58||
Cristián Borja|DEF|33|77|437.845.812.163.65.77|1993||179||33|20.47.7|
Diogo Queirós|DEF|127|74|325.585.345.886.335.869|1999||188||127|52|
Filipe Soares|MED|127|71|292.582.642.345.346.597|1999||177||127||
Jayson Molumby|MED|78|74|568.166.695.924|1999||176||78||
Mark Travers|GR|78|75|160.831.825.565.299|1999||191||78||
Sandro Kulenović|AVA|40|73|517.277.404.592.848|1999||191||40||
Davide Bettella|DEF|84|75|100.674.580.652.366|2000||185||84||
Jordy Caicedo|AVA|49|77|280.195.843.799.109.813.427|1997||187|23|49||
Tymoteusz Puchacz|DEF|126|75|514.370.874.856.654.0.422.684|1999||180||126||
Carlos Eduardo|AVA|16|68|389.653.102.704.292.65.280.570|1996||173||16||D
Moussa Koné|AVA|135|74|338.274.622.501.149|1996||175||135||
Fredrik Bjørkan|DEF|116|76|152.418.354|1998||180||116|13|
Ádám Nagy|MED|73|79|352.154|1995||187|10|73||
Doğukan Sinik|AVA|152|72|84.426.411|1999||180||152||E
Florian Ayé|AVA|58|73|15.223.165.786|1997||184||58||
Kristijan Bistrovic|MED|40|77|801.194.484.478.513.362.124.35|1998||183||40||
Martijn Kaars|AVA|124|71|336.817|1999||183||124||
Patrick Sequeira|GR|38|73|187.200|1999||190||38||
Omar Traoré|DEF|2|64|899.415|1998||187||2||
Maximilian Bauer|DEF|2|72|394.115.0.91|2000||189||2||
Philipp Sander|MED|2|71|422.158|1998||185||2||
Lamine Fomba|MED|58|72|15.622.763.786|1998||188||58||
Mert Çetin|DEF|152|79|376.737.416.486.513.29.82|1997||189|1|152|31.41.44|
Leon Flach|MED|45|73|817.678.454|2001||178||45||
Mitchell van Bergen|AVA|124|73|907.414.820.334.807|1999||170||124||D
Emanuel Aiwu|DEF|165|73|718.238.145.827|2000||184||165||
Santiago Colombatto|MED|4|75|681.196.857.673.416.797.527.345.723|1997||175||4||
Wilfried Kanga|AVA|39|77|647.867.81.486.942.418.822.197.277.465|1998||189||58|11|
Davidson|AVA|16|72|360.748.214.908.65.131|1991||177||16||E
Siebe Van der Heyden|DEF|20|74|472.875.549.817.465|1998||185||20||
Rafael Camacho|AVA|127|79|532.934.812.732.120.90|2000||175||127|47|D
Liziero|MED|16|73|834.443.235.943.597|1998||175||16||
Arthur Gomes|AVA|16|74|777.211.111.292.812.242.276|1998||175||16|28.47|E
Gabriel Batista|GR|16|73|357.776|1998||188||16|30|
Mamadou Fofana|DEF|100|75|65.323.75.607|1998||186||100||
Dario Špikić|AVA|40|74|403.277.90.732|1999||183||40||D
Aleksa Terzic|DEF|145|76|294.356.285.767|1999||184||160||
Denis Drăguș|AVA|132|79|335.822.241.378.374.856.301.339|1999||185|28|132||
Zé Pedro (1997)|DEF|127|68|295.325.196|1997||187||127|7.52|
Emil Bohinen|MED|116|74|194.764.378.366.895|1999||189||76||
Bakaye Dibassy|DEF|100|62|75|1989||183||58||
Giorgi Kvernadze|AVA|61|71|366|2003||183||61||E
Erik Botheim|AVA|116|74|739.152.494.764.550|2000||187||116||
Dimitri Lavalée|DEF|20|74|822.548.797.471.827|1997||187||20||
Juninho|AVA|16|74|690.355.903.292.214.699.357.865|1996||179||16||
Bosko Sutalo|DEF|40|74|594.100.416.277.822.237|2000||188||40||
Ola Solbakken|AVA|116|71|152.737.632.881.285.613|1998||186||116|31|D
Alessio Zerbin|MED|84|75|601.209.696.366.580.895.238|1999||182||84|21.6|
Álex Sola|AVA|54|75|725.66.379.390.72|1999||178||54||D
Callum Styles|DEF|73|78|178.129.568.828.924|2000||167|28|76||
Bruno Tabata|AVA|16|74|690.812.653.700.443|1997||175||16|47.7.9|D
Gaizka Larrazabal|DEF|54|73|144.101.779.200.155|1997||181||54||
Iddrisu Baba|MED|60|77|549.72.665|1996||182|29|60||
Patrick Burner|DEF|103|74|612.622|1996||170||103||
André Franco|MED|127|71|292.325.217|1998||177||127|52|
Enea Mihaj|DEF|1|75|655.642.345.108|1998||183||1|9|
Marco John|DEF|2|71|421.394|2002||184||2||
David Nemeth|DEF|165|71|827.548.817|2001||191||165||
Álvaro Fernández|GR|54|78|638.587.754.164.291.787.262|1998||186|1|54|34.36|
Nicolás Fonseca|MED|157|71|618.734.527.723|1998||181||84||
Nicolas Madsen|MED|43|72|566.414.473.698|2000||194||43||
Christopher Operi|DEF|39|74|502.465.511.131|1997||183||39||
Melayro Bogarde|MED|141|74|421.312.645.501|2002||184||124||
Reggie Cannon|DEF|45|74|250.149.698.229|1998||180||45|28.42|
Allahyar Sayyadmanesh|AVA|80|75|351.449.948.426.473|2001||182||80||D
João Ferreira|DEF|127|70|140.908.732.921.871.163.763|2001||185||127|30|
Sotiris Alexandropoulos|MED|63|74|654.812.632.822.302|2001||186||63|47|
Matthias Braunöder|MED|165|71|117.232.128|2002||173||165||
Filippo Ranocchia|MED|84|72|460.580.463.285.652|2001||186||84||
Ignace Van der Brempt|DEF|20|75|224.767.408.232|2002||187||20||
Seid Korac|DEF|94|70|289.256.911.895|2001||188||94||
Braian Ojeda|MED|122|75|254.617.766.637|2000||172||122||
Jackson Porozo|DEF|49|78|777.149.862.632.484.186.226|2000||192|7|49|28|
Frantzdy Pierrot|AVA|71|77|229.585.398.545.12.180|1995||194|47|71||
Karl Hein|GR|55|79|720.93.886.923|2002||193||55|16|
Víctor Chust|DEF|54|79|721.245.283|2000||184||54|57|
Devis Vásquez|GR|33|77|441.534.7.789.97.285.737.141|1998||195||33||
Dion Sanderson|DEF|76|73|934|1999||188||76||
Iván Angulo|AVA|33|67|286.653.242.159.690.637|1999||170||33|9|E
Koki Saito|AVA|86|75|941.536.807.698|2001||170||86||E
Jeremy Ngakia|DEF|129|75|925.921|2000||184||76|44|
Samuel Soares|GR|127|73|140|2002||190||127|18.31.38.7|
George Bello|DEF|45|74|108.91.501|2002||173||115|42|
Claudio Spinelli|AVA|4|70|842.773.378.241.89.382.324.506.255.438.892|1997||180||4||
Livan Burcu|AVA|152|71|762.874|2004||180||2||E
Mickaël Biron|AVA|103|72|19.472.708.625.620|1997||170||103||
Grégoire Coudert|GR|58|67|855.75.818|1999||188||58||
Luke McNally|DEF|78|68|641.175.236.825|1999||184||78||
Chris Ramos|AVA|54|70|886.187.245.159|1997||193||54||
Bryan Okoh|DEF|143|71|767.318.509.15|2003||191||45||
Giorgi Gocholeishvili|DEF|61|78|788.233.408|2001||178|10|61||
Carlos Vicente|AVA|54|73|258.384.66.145|1999||179||54||D
Oliver Sonne|DEF|125|73|796.175.806|2000||184||43||
Anis Ben Slimane|MED|151|76|172.790.616|2001||188||43||
Isaac Lihadji|AVA|58|77|553.530|2002||177||58|4|D
Neto Borges|DEF|16|74|410.377.892.847.223|1996||185||16||
Alemão|AVA|16|74|498.240.443.723.649.719|1998||182||16||
Randy Nteka|MED|3|70|190.719.283|1997||189||58||
Cheikh Sabaly|AVA|135|74|400.323.666.889|1999||168||135||E
Armindo Sieb|AVA|2|73|394.133.548|2003||175||2||
Tommaso Barbieri|DEF|84|72|618.460.463.681.238|2002||181||84||
Doğan Alemdar|GR|152|75|486.731.862.131|2002||189||152||
Augustine Boakye|AVA|60|76|932.763|2000||178||60||D
Joe Mendes|DEF|142|70|410.14.163.132.769|2002||177||142||
Kevin Agudelo|MED|33|75|378.356.810|1998||178||33||
Victor Parada|DEF|54|73|66.188|2002||187||54||
Ilyas Chaira|AVA|102|73|386.188.723|2001||179||54||E
Brian Ocampo|AVA|157|75|598.245|1999||172||157||E
Mohammad Mohebi|AVA|80|76|776.741|1998||176|3|80||E
Gabriel Vidovic|AVA|40|78|133.907.277.548|2003||180||2|5.53|E
Makhtar Gueye|AVA|135|72|763.19.472.779.708|1997||186||135||
Leonardo Campana|AVA|49|77|934.345.391.442.607|2000||188||49|35.39.55|
Oscar Fraulo|MED|43|74|566.158.882.263|2003||180||43||
Nemanja Jovic|AVA|145|73|665.292|2002||178||21||E
Carlos Martín|AVA|54|75|104.110.188.66.719|2002||184||54|51|E
Kristoffer Lund|DEF|45|74|566.289.429.652.231|2002||184||43||
Jon Ander Olasagasti|MED|54|74|725.523|2000||176||54||
Jofre Carreras|AVA|54|74|291.188|2001||173||54||D
Raúl Torrente|DEF|54|73|726.390.277|2001||193||54||
Cheikh Niasse|MED|135|74|530.654.942.416|2000||188||135||
Elias Achouri|AVA|151|76|292.860.900.233|1999||177||133||E
James Abankwah|DEF|78|74|871.213.921|2004||182||78||
Samuele Vignato|MED|84|72|580.404|2004||172||84||
Óscar Aranda|AVA|54|70|345|2002||181||54||E
Diogo Nascimento|MED|127|71|910.632|2002||166||127||
Abdoullah Ba|MED|58|71|511.828.869|2003||180||58||
John Mercado|AVA|49|70|904.21.806|2002||186||49||E
Beni Mukendi|MED|3|71|860.200.908|2002||180||3||
Souleymane Faye|AVA|135|72|726.143.390.812|2003||179||135||D
Wagner Leonardo|DEF|16|72|777.621.360.242.690.280.395|1999||183||16|28|
Leo Walta|MED|57|72|613.572.798.830|2003||170|6|57||
Santiago Pierotti|AVA|4|69|228.513|2001||184||4||D
Jacen Russell-Rowe|AVA|25|72|230.854|2002||183|9|25||
John Tolkin|DEF|45|76|608.422|2002||170|3|45|42|
Zidane Iqbal|MED|77|79|552.882|2003||181||76||
Rayan Philippe|AVA|58|72|266.19.278.408|2000||183||58||D
Abu Kamara|AVA|76|71|616.692.426.379|2003||183||76||D
Cheick Condé|MED|68|70|347.338.895.148|2000||185||68||
Bruno Onyemaechi|DEF|115|73|349.149.632|1999||184||115||
Figueiredo|AVA|16|66|892.235.78.74|2001||178||16||E
Sambou Soumano|AVA|135|70|319.466.736|2001||182||135||
Ugo Raghouber|MED|58|66|530.512.869.523|2003||188||58||
Thierno Baldé|DEF|58|71|862|2002||182||58||
Samed Bazdar|AVA|21|78|665.779.454|2004||186|12|136||
Jhoanner Chávez|DEF|49|73|438.279.521.806|2002||181||49||
Mory Gbane|MED|39|69|487.380.820|2000||188||39||
Justin Diehl|AVA|2|73|231.298|2004||174||2||E
Andrew Moran|MED|78|70|146.825.166.500.695|2003||177||78||
Roni|MED|16|71|234.111.570.21|1999||174||16|55|
Stefan Mitrović|AVA|145|74|713.294.416.625.300.98.911|2002||181||160||E
Rodrigo Ribeiro|AVA|127|73|812.617.21.115|2005||185||127|39.47.7|
Tomas Rigo|MED|52|73|802.126.825|2002||184|1|52||
Welington|DEF|16|73|834.805|2001||170||16||
Santi García|MED|54|70|379.380|2001||184||54||
Ronnie Edwards|DEF|76|73|675.805.698|2003||180||76||
Amine El Ouazzani|AVA|102|72|398.163.81|2001||188||58||
Jhon Solís|MED|33|74|106.386.145|2004||186||33||
Brahim Traoré|DEF|58|66|759.237|2004||190||58||
Chico Lamba|DEF|127|71|812.92.763|2003||189||70||
Josué Casimir|AVA|71|75|511.15|2001||178||64||D
Ismaël Boura|DEF|34|73|521.511.862|2000||173||106||
Marco Pellegrino|DEF|4|67|683.7.764.438.427.150|2002||184||4||
Lasse Nordås|AVA|116|64|152.861.539.414|2002||194||116||
Ramón Terrats|MED|54|76|386.905.379.291|2000||181||54||
Pablo Ibáñez|MED|54|73|638.66|1998||179||54||
Erison|AVA|16|70|355.159.292.834.485|1999||180||16||
Oscar Schwartau|MED|43|73|172.616|2006||186||43||
Frank Magri|AVA|24|74|746.854|1999||178||58||
Ayman Kari|MED|58|68|647.319|2004||182||58||
Lucas Michal|AVA|58|71|587.323|2005||185||58||E
Tim Drexler|DEF|2|72|421.620.767|2005||183||2||
Ilyes Housni|AVA|102|73|647.59.511|2005||176||58|4|
Max Weiß|GR|2|70|479.175|2004||190||2||
Maurice Krattenmacher|MED|2|73|133.418|2005||180||2||
Lilian Raolisoa|DEF|58|70|81|2000||178||58||
Mateo Joseph|AVA|54|74|516.549|2003||180||54||
Gaspar|DEF|3|71|295.513|1997||193||3||
Ignacio Miramón|MED|4|73|382.530.150|2003||173||4|41|
Mihajlo Ilić|DEF|145|73|665.154.80|2003||192||136||
Juan Carlos Gauto|AVA|4|74|427.132.262.683|2004||170||4||D
Amine Sbaï|AVA|102|75|393.41.81|2000||175||102||E
Étienne Camara|MED|58|74|425.871.702|2003||191||58||
Skelly Alvero|MED|58|71|330.541.923.75|2002||202||58||
Mohamed Belloumi|AVA|5|72|346|2002||177||5||D
Nesta Elphege|AVA|58|63|210.393.663|2001||196||58||
Marvin Elimbi|DEF|58|64|293.868.851.380|2003||186||58||
Rosen Bozhinov|DEF|17|63|195.744.681|2005||179||17||
Gonçalo Nogueira|MED|127|62|908.668|2003||185||127||
Reuell Walters|DEF|76|63|539|2004||186||76||
Riyad Idrissi|DEF|84|70|196.575|2005||182||84||
Djé D'Avilla|MED|39|63|519.27.217|2003||191||39||
João Marques|AVA|127|71|909.292.163.380.200|2002||179||127||E
Noah Darvich|MED|2|75|298|2006||184||2||
Sebastián Boselli|DEF|157|73|255.734.296.379|2003||183||157||
Pablo Durán|AVA|54|73|203|2001||176||54||
Thérence Koudou|DEF|58|71|820.666.471|2004||178||58||
Jun-ho Bae|MED|37|75|249.825|2003||180||37||
Lucas Cepeda|AVA|29|74|227.283|2002||177||29||E
Shavy Babicka|AVA|59|74|854.294.478|2000||179||59||D
Rémy Labeau Lascary|AVA|58|67|521.819.818|2003||185||64||
Lewis Koumas|AVA|123|74|532.825.145.426|2005||182||76||E
Noé Lebreton|MED|58|68|759.589|2004||178||58||
Chuki|MED|54|71|887.886|2004||176||54||
Martim Marques|DEF|127|68|320|2004||173||127||
Zach Abbott|DEF|76|72|617|2006||188|||55|
Ángel Ortiz|DEF|54|71|143.142|2004||167||54||
Yoel Lago|DEF|54|68|203|2004||185||54||
Nectarios Triantis|MED|63|71|926.205.828.419.569|2003||191||8||
Naves|DEF|16|70|653.74|2002||180||16|9|
Dermane Karim|MED|149|72|536.470.319|2003||178||149||
Óscar Cortés|AVA|33|74|567.521.717.813.427|2003||177||33||E
Alex Freeman|DEF|45|78|637.905|2004||188|22|45|42|
Brayan Medina|DEF|33|62|183.361.847|2002||195||33||
Massimo Pessina|GR|84|66|154|2007||188||84||
Thiago Helguera|MED|157|73|598.163.188|2006||179||157||
Mathys de Carvalho|MED|127|70|541|2005||183||58|41|
Tyler Bindon|DEF|118|79|720.617.790|2005||188|21|118|39|
Florian Hellstern|GR|2|63|298|2007||188||2||
Felipe Chávez|MED|125|73|133.231|2007||177||2|5|
Prosper Obah|AVA|115|68|910.504.788|2003||180||115||D
Gustavo Silva|AVA|16|63|597.908|1999||180||16||D
Rafael Nel|AVA|127|68|812|2005||182||127||
Otto Stange|AVA|2|71|408|2007||185||2||
Enso González|AVA|122|75|528.934|2005||169||122|55|E
Emmanuel Biumla|DEF|58|66|156.81|2005||185||39||
Deniz Zeitler|AVA|2|63|315.421|2006||181||2||E
Patrice Covic|MED|40|73|923|2007||182||2||
Luis Engelns|MED|2|66|750.421|2007||190||2||
Juan Arizala|MED|33|70|436.871|2005||183||33||
Mirza Catovic|MED|2|68|298|2007||190||145||
Nils Zätterström|DEF|142|72|550.790.378|2005||186||142||
Stephan Zagadou|DEF|58|66|511|2008||186||58||
Diego León|DEF|122|76|552|2007||177||122|47|
Uchenna Ogundu|AVA|115|65|65.115|2006||180||||
Bara Sapoko Ndiaye|MED|135|78|133|2007||180||135|5|
Martin Lanig|MED|2|77|421.394.298.231.281.17|1984||190||2|27|
Dean Marney|MED|76|77|853.831.698.616.426.175|1984||183||76||
Dominik Reinhardt|DEF|2|75|620.115|1984||188||2||
Hugo Leal|MED|127|77|140.74.110.647.325.27.163.120.860.909.292|1980||180|1|127|28.30.38.44|
Anthony Seric|DEF|40|80|405.663.416.165.510.654.141.477.629|1979||181|16|8||
Henok Goitom|AVA|50|79|871.722.886.72.14.756.379|1984||189|4|142||
Francesco Magnanelli|MED|84|75|218.356.781|1984||181||84||
Sébastien Grax|AVA|58|74|587.862.330.763.398|1984||178||58|24|
Ricardo Vaz Tê|AVA|127|78|155.426.656.419.129.925.33.213.690|1986||188||127||D
David Marshall|GR|51|79|204.616.197.426.929.263.698.419|1985||190||51||
Daniel Fernandes|GR|127|79|203.451.642.898.947.654.448.191.657.334.623.658|1983||195|2|25|20.25.28.50|
Alexander Farnerud|MED|142|78|293.298.172.942.848|1984||181|8|142|5|
Lionel Carole|DEF|58|76|600.140.193.862.371.787.293.486|1991||182||58|30|
Grégory Bourillon|DEF|58|76|819.731.647.319.820.81|1984||187||58||
Yann Jouffre|MED|58|74|622.398.319.323|1984||176||58||
Andy Wilkinson|DEF|76|76|825.664.793.147.568|1984||180||76||
Matty Fryatt|AVA|76|76|198.920.518.426.789.617|1986||178||76|39|
Cláudio Pitbull|AVA|16|75|395.462.777.46.325.358.27.909.326.554.279.380|1982||173||16|28.7|
Cadú|DEF|127|74|668.149.191.380.520|1981||182||127||
Miguel Garcia|DEF|127|74|812.729.629.163.635.549|1983||179||127|25.32.40|
Dániel Tőzsér|MED|73|77|371.352.377.378.921.663.698|1985||188||73||
Rafa López|DEF|54|75|887.886.753.379.750|1985||179||54||
Alessandro Potenza|DEF|84|77|440.663.218.549.356.378.201.575.359|1984||185||84|37.51.6|
Roberto Lago|DEF|54|77|203.379|1985||178|3|54||
Thomas Mangani|MED|58|76|587.818.4.19.81.218|1987||183||58||
Gladstone|DEF|16|75|242.463.416.812.653.621.693.192.380.396|1985||184||16|19.40|
Tobias Weis|MED|2|77|421.281.898|1985||170|1|2||
Martin Latka|DEF|32|74|179.802.145.656.302|1984||193||22||
Laurent Ciman|DEF|20|80|702.224.470.822.579.500.266.849|1985||180|20|20|45|
Alexis Thébaux|GR|58|73|600.266.759.818.662.746|1985||185||58||
Thiago Ribeiro|AVA|16|75|156.834.57.242.196.777.112.279.537.704|1986||183||16||E
Diogo Valente|AVA|127|74|149.214.325.554.520.163.27.191.380|1984||176||127|28.52.7|E
Lino|DEF|16|76|234.833.355.834.279.358.462.27.325.642.537|1977||184||16|25.28.7|
Tobias Werner|AVA|2|75|115|1985||176||46||E
Nicolas Fauvergue|AVA|58|75|530.293.193.820.323.4.662|1984||193||58|4|
Mensur Mujdza|DEF|21|81|365.0|1984||185|37|88||
Cícero|AVA|70|73|163.276.908.631.732.668.582|1986||189||127|28.41|
Paolo Dellafiore|DEF|84|76|440.810.858.652.848.663.209.618.794.650.508|1985||186||4|37.6|
Stefan Babovic|MED|145|77|665.624.600.354.779|1987||178|4|88||
Niko Bungert|DEF|2|74|548|1986||188||2|53|
Xabier Castillo|DEF|54|76|101.725.507.66|1986||185||54|17|
Emiliano Armenteros|AVA|4|76|125.438.787.719.638|1986||184||4||E
Tobias Levels|DEF|2|75|158.302.315|1986||186||2||
Markus Suttner|DEF|165|76|117.315.166.302|1987||177||165||
Nick Proschwitz|AVA|2|75|933.332.321.750.426.129.164.236.797.807|1986||192||46||
Danny Fox|DEF|51|78|299.920.236.204.175.805.617.929|1986||183|4|76|42|
Tobias Sippel|GR|2|76|0.158|1988||180||2||
Boukary Dramé|DEF|135|79|647.330.725.218.100.760|1985||181|12|58|48|
Lukas Jutkiewicz|AVA|76|78|831.299.684.425.583.236.565.155.175.145|1989||185||76||
Stefano Celozzi|DEF|2|77|479.298.281.898|1988||171||2||
Alex Smithies|GR|76|75|425.698.197|1990||185||76||
Kevin Lejeune|MED|58|73|15.600.855.323|1985||181||58||
Tarantini|MED|127|65|748.690.732|1983||188||127|39|
Aleandro Rosi|DEF|84|78|737.218.18.794.663.781.378.356.366.241.673|1987||184||84|36.44|
Richard Stearman|DEF|76|77|518.934.447.367.790.425.263|1987||191||76||
Draman Haminu|AVA|60|80|294.376.535.497.5.380|1986||173|43|60||E
Dusan Svento|DEF|52|77|802.767.231|1985||178||22||
Joey O'Brien|DEF|78|80|789.155.925|1986||180|5|78||
Banel Nicolita|AVA|132|79|339.763.600.335|1985||177|37|132||D
Simone Bentivoglio|MED|84|75|218.575.128.768.650.165|1985||184||84||
Mehdi Lacen|MED|5|78|819.66.709.379.586|1984||175||58||
Víctor Casadesús|AVA|54|76|549.725.384.523.189.9|1985||180||54||
Ustaritz|DEF|54|78|101.144.142.92.669|1983||183||54|17|
Francesco Pisano|DEF|84|76|196.155.118|1986||174||84||
Pavle Ninkov|DEF|145|76|711.244.294.854|1985||181|9|88||
Helgi Danielsson|MED|82|75|675.952.284.14.120.137.25|1981||183|33|142||
Gaëtan Bong|DEF|24|78|323.855.885.632.929.166.617|1988||187||24|55|
Tommy Elphick|DEF|76|76|166.160|1987||187||76||
Philipp Hosiner|AVA|165|76|762.117.731.231|1989||178||165||
Nabil El Zhar|AVA|102|81|532.642.523.507.186|1986||170||58|43|D
Mateus|AVA|3|78|812.200.380.149.597.92|1984||174|48|3|25|E
Juanito Gómez|AVA|4|70|859.416|1985||165||4||E
Jordi Gómez|MED|54|79|127.291.830.929.828.146.719.525.633|1985||178||54|42.45|
Sebastian Langkamp|DEF|2|76|408.479.115.418.923|1988||191||2||
Mario Vrancic|MED|21|76|548.750.616|1989||187||88|33.53|
Thomas Kraft|GR|2|80|133.418|1988||187||2|5.54|
Leandro Greco|MED|84|77|737.416.681.679.632.18.378|1986||184||84|19.34.36.44|
Régis Gurtner|GR|58|73|293.866.511.75.521|1986||183||58||
Paco Montañés|AVA|54|77|127.9.779.291|1986||172||54||E
Dominic Maroh|DEF|53|75|620.231|1987||186|7|2||
Michele Paolucci|AVA|84|77|463.97.871.100.201.794.652.508.676|1986||182||84|19.21.24|
André Leão|MED|127|73|363.136.191.668.886|1985||182||127|41.46|
Georgios Tzavellas|DEF|63|79|16.656.281.587.642.65.12.670.113|1987||183||63|25.44.9|
Elliott Bennett|MED|85|76|934.239.178.166.616.168.146|1988||175||76||
Daniel Brosinski|DEF|2|76|231.394.548|1988||178||2||
Kévin Monnet-Paquet|AVA|58|75|521.319.763|1988||183||58||E
Adrián González|MED|54|78|203.721.384.379.709.719.283.753.586|1988||183||54|3|
Christian Clemens|AVA|2|77|231.548|1991||181||2||D
Itay Shechter|AVA|83|77|0.830.600.545|1987||180|27|83||
Vítor Silva|MED|127|69|669.878.668.812|1984||169||127|34.41|
Henri Lansbury|MED|76|80|93.783.921.616.925.620.99|1990||183||76|15|
Dan Gosling|MED|76|80|684.299.610.147.160.921|1990||183||76||
Carlos Saleiro|AVA|127|74|812.909.27.786|1986||186||127|40|
Sercan Sararer|MED|152|75|394.298.302|1989||180||2||
Nauzet Alemán|AVA|54|72|886.507|1985||178||54||D
Pereirinha|AVA|127|77|812.908.510.102.137|1988||174||127|28.40.50|D
Mato Jajalo|MED|21|78|801.794.231.404.652.871|1988||182||88|21|
Danijel Aleksic|MED|145|75|911.378.394.763.5.515.331.938.36.131.492|1991||181|1|88||
Elias Kachunga|AVA|129|77|158.418.899.750.315.425|1992||176||2||
Francesco Bolzoni|MED|84|78|440.366.378.794.652.618|1989||183||84|21.31.6|
Alexander Kacaniklic|AVA|142|79|367.921.175.233.600|1991||180||142|44.52|D
Jens Hegeler|MED|2|78|524.620.418.168|1988||193||2||
Rémi Gomis|MED|135|74|819.759.885.523.600|1984||180||58||
Georg Margreitter|DEF|165|74|501.117.934.233.620|1988||187||165||
Marco Mancosu|MED|84|74|196.285.139.513.760|1988||180||84|44|
Jay Spearing|MED|76|81|532.518.155.146|1988||168||76|43|
Davide Di Gennaro|MED|84|79|7.154.378.729.18.650.575.810.652.196.510|1988||181||84|11.44.6|
Felipe Mattioni|DEF|16|79|395.7.549.291.299.270|1988||180||16|11.38.42.43.45|
Chris Basham|DEF|76|76|155.147.790|1988||190||76||
Adam Matuszczyk|MED|126|80|231.302.278.944|1989||183|21|126||
Nicolás Bertolo|AVA|4|78|150.598.125.652.779.185.734|1986||179|2|4||E
Renan (1986)|MED|16|74|112.203.360.811.908.136.191.768.51|1986||186||16|34|
Fabian Giefer|GR|2|77|524.302.168.115|1990||196||2||
Lars Unnerstall|GR|2|76|302.884.648.334|1990||198||2||
Renny Vega|GR|159|76|871.176.257.227.878|1979||180|63|159||
Leonardo Sigali|DEF|4|74|506.905.388.277.710.592|1987||179||4||
Cristian Álvarez|GR|4|78|738.291.771.719.779|1985||185||4|42|
Milton Caraglio|AVA|4|72|738.607.674.95.917|1988||188||4||
Scott Arfield|MED|25|80|344.425.175.717.212.155.533|1988||178|17|51||
Christoph Moritz|MED|2|77|548|1990||188||2|53|
Mauro Formica|MED|4|76|611.146.652.185|1988||176|1|4||
Carlos Matheu|DEF|4|74|438.196.100.794.254.125|1985||183|1|4||
Daniel Candeias|AVA|127|76|325.891.732.668.690.597.140.620.390.323.65.717.376|1988||180||127|18.28.30.31.38.46.7|D
Erwin Mulder|GR|124|78|354.300.414.830.387|1989||193||124||
Almog Cohen|MED|83|76|620.315|1988||170|13|83||
Alexandre Oukidja|GR|5|76|530.585.293.323.433|1988||184||58|4|
Sebastien De Maio|DEF|58|76|165.366.378.80.356.154.871|1987||189||58||
Francesco Della Rocca|MED|84|76|154.118.781.165.673.652.356.794|1987||182|2|84||
Diego Fabbrini|AVA|84|76|285.871.652.921.794.568.145.565.810.723.305.195.308.97|1990||182|1|84||E
Hanno Behrens|MED|2|74|408.620|1990||187||2||
Kévin Anin|MED|58|72|511.330.612|1986||189||58||
Lucas Deaux|MED|58|73|820.600.465.398.622|1988||180||58||
Antoine Devaux|MED|58|71|511.866.854.820|1985||185||58||
Romain Thomas|DEF|58|72|818.81|1988||193||58||
Alberto Lora|MED|54|75|813.633|1987||168||54||
Míchel Madera|MED|54|76|813.145.379.545.699|1985||183||54||
Yoel Rodríguez|GR|54|77|203.187.888.719.753.886|1988||185||54|36.39|
Boris Vukcevic|AVA|2|76|421|1990||182||88||D
Maximilian Beister|AVA|2|76|408.302.548.1|1990||180||2||D
Alfredo Morales|MED|45|76|418.315.302|1990||183||2|42|
Lolo|MED|54|76|586.787.638.779.283|1984||182||54||
Emilio Nsue|DEF|69|79|549.725.565|1989||178||54||
Prince Oniangué|MED|35|76|731.81.855.820.934.746.759|1988||188||58|39|
Yannick Sagbo|AVA|39|77|587.950.426.934|1988||178|2|58||
Garra Dembélé|AVA|100|76|15.316.25.525.365|1986||183||58||
Camillo Ciano|AVA|84|75|601.241.650.118.663.209.366|1990||176||84|43|
Jonathan Hogg|MED|76|77|99.692.921.425|1988||170||76||
Charlie Daniels|DEF|76|79|853.526.160|1986||178||76||
Abdoulaye Bamba|DEF|39|74|266.81|1990||182||39||
Nathan Delfouneso|AVA|76|80|99.175.518.147.236.146.178.831.155.162|1991||185||76||
Michele Camporese|DEF|84|76|356.209.128.285.139|1992||186||84||
Luis Hernández|DEF|54|79|813.518.586.542.245|1989||182||54|44|
Jan Moravek|MED|32|79|153.0.115|1989||180|3|22||
Fran Rico|MED|54|75|390.753|1987||178|1|54||
David Lombán|DEF|54|78|888.283.390.753|1987||188||54||
Josef Husbauer|MED|32|75|126.806.196.802|1990||182||22||
Matías Rodríguez|DEF|4|75|150.501.598.864.768.395|1986||178||4|50|
Sam Baldock|AVA|76|75|543.925.168.166|1989||170||76||
David Stockdale|GR|76|79|367.742.518.684.447.426.166.145.936.236.823.789|1985||191||76||
Jorge Pulido|DEF|54|78|104.110.719.67.797.754|1991||181||54|51.59|
Marco Terrazzino|AVA|2|75|421.479.365.898|1991||176||2||E
David Meyler|MED|78|80|828.426.720.236|1989||189|26|78|38|
Claudemir (1988)|MED|16|75|907.233.224.163.799.910|1988||185||16|9|
Vujadin Savic|DEF|145|75|294.711.156.274.91.921|1990||194||88||
Stefanos Kapino|GR|63|80|654.548.632.617.923.762.91.655.337|1994||196|9|63|25.28.38.40|
Vagner|GR|16|72|102.450.292.585.149|1986||185||16|38|
Saber Khalifa|AVA|151|75|950.553|1986||183||151||
Brek Shea|MED|45|75|250.825.129.145.637.889.108|1990||191||45|42|
Anaitz Arbilla|DEF|54|76|101.144.430.719.291.753|1987||178||54||
Oriol Riera|AVA|54|77|127.203.246.9.638.929.262|1986||184||54||
Álex Bergantiños|MED|54|77|262.390.384.813|1985||177|2|54||
Vasco Regini|DEF|84|78|209.768.359.285.601.760.663|1990||185||84|11.21.44.48|
Álvaro Cejudo|AVA|54|75|143.507.638.142|1984||180||54||
Adam Clayton|MED|76|77|551.198.516.675.543.425.565|1989||180||76|37|
Vid Belec|GR|53|80|440.241.629.492.199.768.139.764|1990||192|1|88|37.43.44|
Jordi Xumetra|AVA|54|74|386.283.523|1985||172||54||D
Emiliano Alfaro|AVA|157|77|771.62.510|1988||173|1|157||
Saúl Berjón|AVA|54|74|507.9.722.753.723.174|1986||178||54||E
Everton Luiz|MED|16|76|689.653.704.192.240.320.331.665.760|1988||175||16||
Radosav Petrovic|MED|145|78|456.665.146.376.275.812.732|1989||193||88|30.32|
Kristoffer Nordfeldt|GR|142|78|170.414.830.376.14|1989||190|1|142||
Christian Gytkjaer|AVA|43|74|540.613.412.739.1.580.895|1990||185||43||
Marco Pérez|AVA|33|72|161.382.779.438.138.436.259.56.260.634.733.459.671|1990||185||33||
Raúl Albentosa|DEF|54|76|283.722.245.753.263.586.262.384.195.308.893|1988||193||54||
Will Buckley|AVA|76|76|921.166.828.516.145|1989||183||76||D
Geoffroy Serey Dié|MED|39|78|329.215.132.298|1984||179||39|50|
Thomas Kaminski|GR|20|79|135.134.625.80.83.233.470.465.146.539|1992||190||20||
Christoph Zimmermann|DEF|2|76|616|1993||194||2||
Bamba Anderson|DEF|16|78|357.524.899.302.158.281|1988||188||16||
Sonny Kittel|AVA|2|79|281.315.408.715|1993||178||2||E
Simon Zoller|AVA|2|75|479.899.0.231.898.817|1991||179||2||
Darío Lezcano|AVA|122|74|332.321.315|1990||178||122||
Fausto Rossi|MED|84|76|463.165.886.246.696|1990||177||84|21.48.6|
Robbin Ruiter|GR|124|71|336.882.828.648.747.613|1987||196||124||
Gianluca Sansone|AVA|84|74|794.366.781.848.768.154.128|1987||173||84||
Matteo Ardemagni|AVA|84|75|7.673.859.222.100.650.575.218.199.810|1987||185||84|11.58|
Sami|AVA|70|72|265.554.163.325.908.33.92|1988||184||70|32.35.39.46.52|E
Yohan Tavares|DEF|127|71|136.822.292.218.909.847.120.819|1988||188||58|34.38|
Aleksandar Tonev|AVA|17|78|195.514.99.204.366.241|1990||178||17||E
Valentin Roberge|DEF|31|75|90.554.828.820|1987||185||58||
Marcelo Larrondo|AVA|4|75|734.794.356.848.842.738|1988||191||4|21|
Diego Novaretti|DEF|4|75|138.845.510.527|1985||194||4||
Eneko Bóveda|DEF|54|77|101.144.753.262|1988||182||54||
Yassine El Ghanassy|AVA|20|74|465.924.414.37.472.600|1990||175|2|20|44|E
Santiago García|DEF|4|78|738.652.618.923|1988||191||4||
Héldon|AVA|23|74|554.812.246.732.908|1988||174||23|32.34.38|E
Joe Bennett|DEF|76|78|565.99.166.160.789.197|1990||177||76||
Barry Douglas|DEF|51|75|273.514.492.934.516.146.814|1989||175||51||
Ryan Shotton|DEF|76|76|825.129.929.263.145|1988||191||76||
Dani Torres|MED|33|73|437.106.436.66.67.779|1989||181||33|20|
Lukas Kübler|DEF|2|73|231.762.365|1992||183||2||
Steven Skrzybski|AVA|2|75|874.302.422|1992||173||2||
Kike García|AVA|54|77|722.565.753.638.66.291|1989||186||54||
Renan Ribeiro|GR|16|73|112.834.292.812.36.295|1990||188||16|32|
Kévin Bérigaud|AVA|58|74|950.578.81.651|1988||178||58||
Scott Malone|DEF|76|74|934.177.160.568.197.425|1991||189||76||
Ángel Trujillo|DEF|54|73|72.523|1987||179||54||
Luca Ceppitelli|DEF|84|74|673.128.663.196|1989||189||84|44.48|
Lee Tomlin|AVA|76|76|675.565.160.168|1989||180|2|76||
Abdoulaye Ba|DEF|135|79|325.748.27.908.719.351.65.1.262.308.582.92|1991||197|3|135|12.32.35.39.41.46.55.59.7|
Adam Matthews|DEF|123|79|197.204.828.168|1992||178|12|123||
Laurens De Bock|DEF|20|76|469.224.516.472.828.10.949.113|1992||179||20|17|
Dennis Appiah|DEF|58|76|587.759.80.600.763|1992||179||58|44|
Yeni Ngbakoto|AVA|129|74|323.698.398.654.19.926.893.193|1992||173||58||D
Maxime Barthelmé|MED|58|72|319.662|1988||176||58||
Tomer Hemed|AVA|83|77|545.549.72.166.698|1987||182||83||
Jakub Brabec|DEF|32|75|806.377.180.902.90.732|1992||189||22||
Nikola Stojiljkovic|AVA|145|73|711.244.163.486.149.346|1992||184||160|32.41.9|
Enric Gallego|AVA|54|73|754.638.379|1986||190||54||
Marius Bülter|AVA|2|72|874.421.231|1993||188||2||E
Paweł Olkowski|DEF|126|76|944.370.401.231.155.374|1990||184|7|126|25|
Pablo Chavarría|AVA|4|74|138.80.470.466.521.820.549|1988||185||4||
Marcel Sobottka|MED|2|74|302|1994||185||2||
Mario Rondón|AVA|159|75|668.136.597.191.714|1986||182|13|159|34.46|
Federico Dionisi|AVA|84|72|764.18.629.366|1987||179||84||
Daniel Bachmann|GR|165|78|825.935.740.178.921.489|1994||191||165|38.44|
Joe Mason|AVA|78|76|684.197.155.934|1991||178||76|35.39.55|
Tommy Smith|DEF|76|74|425.825|1992||186||76||
Ahmad Benali|MED|95|76|551.165.652.674.241.681|1992||173||76|2.37|
Tobias Figueiredo|DEF|127|74|812.597.617.426.360.240.102.457|1994||188||127|30.32.38.47|
Michel|AVA|16|73|669.668.163.140|1986||181||16|30.32|
Nico Yennaris|MED|30|79|93.160.164.936|1993||174||76|15|
Hugo Vieira|AVA|127|77|292.380.813.140.163.850.294.940.799|1988||178||127|28.30|
Nathaniel Méndez-Laing|AVA|65|75|934.675.790.692.793.197.565.789.263.543|1992||178||76||D
Luis Fariña|MED|4|74|710.140.262.719.864.98.265|1991||177||4|18.30.31.38.46.51|
Toño García|DEF|54|73|523|1989||179||54||
Juan Rafael Fuentes|DEF|54|74|246.291.638|1990||176||54||
Alexander Hack|DEF|2|74|548.55.608.338|1993||193||2||
Vincent Pajot|MED|58|75|866.731.763.81.323|1990||180||58||
Thomas Monconduit|MED|58|72|15.75.319|1991||184||58||
Álex López|MED|54|77|203.789.886.813|1988||175|1|54|36|
Phillipp Mwene|DEF|165|78|0.548.648|1994||170||165||
Bo-kyung Kim|MED|37|80|208.197.929.458.483.873.303|1989||178|38|37|40|
Alejandro Gálvez|DEF|54|76|905.813.719.923.753.507|1989||188||54||
Marcello Trotta|AVA|84|76|367.936.921.164.129.118.781.241.366.345|1992||188||84||
Luíz Carlos|MED|16|70|446.363.668.163.639|1985||175||16|28.32.41.52.9|
Ryo Miyaichi|AVA|86|83|354.93.155.929.334.817.940|1992||183|2|86|15.45|D
Víctor Rodríguez|MED|54|76|258.779.283.379.813|1989||170||54||
Zeca|MED|63|75|200.909.654.233|1988||181||127|28.43.46|
Ramon Azeez|MED|115|77|72.187.390.307|1992||169|6|115||
Patrick Mainka|DEF|2|74|91.415|1994||194||2||
Edgar Méndez|AVA|54|76|143.72.189.390.66|1991||188||54||D
Carlos Carbonero|MED|33|77|634.296.95.734.209.768.260|1990||178||33|20|
Charalampos Mavrias|DEF|63|76|654.828.302.479.404.419.633.87.655|1994||177||63|25.28|
Danilo Dias|AVA|16|72|389.111.446.554.699.878|1985||173||16||E
Sergio Álvarez (1992)|MED|54|75|813.753|1992||180||54||
Achraf Lazaar|DEF|102|79|890.652.610.139.789.690|1992||184|18|102|43|
Nicolas Pallois|DEF|58|76|759.885.819.210.156.600.820|1987||190||58|44|
Tiago Rodrigues|MED|127|73|908.325.597.554|1992||177||127|41.46|
Zeki Fryers|DEF|76|78|552.822.853.243.742|1992||183||76|10.12|
David Texeira|AVA|157|75|312.250.799.908.582|1991||183|7|157|17|
Peter Ankersen|DEF|43|77|289.893.739.767.233.378.613|1990||180||43||
Mikel Agu|MED|115|77|325.224.909.176.908|1993||184||115|32.35.39.52|
Somália|MED|16|74|659.352.854|1988||181||16||
Fidel|AVA|54|74|283.246.72.507|1989||177||54||E
Léo Lacroix|DEF|143|75|329.763.132.408.927|1992||197||143||
Vicente Gómez|MED|54|67|507|1988||187||54||
Bebé|AVA|23|82|295.908.552.141.732.668.140.246.719.753.779|1990||190||127|10.2.30.39.7|E
Khaled Narey|AVA|149|74|750.394.408.302.642.48.53|1994||180||2||D
Kingsley Schindler|AVA|60|74|422.231.769|1993||180||2||D
Charles (1984)|AVA|16|76|349.246.72.203.586.753|1984||179||16|36|
Wesley Lautoa|DEF|117|74|193.319.266|1987||184||58||
Salvador Agra|AVA|127|75|891.629.142.794.163.27.597.140.265.390.245.517.847.149.520|1991||166||127|28.52|D
Javi Eraso|MED|54|77|101.144.186|1990||182||54||
Cyrus Christie|DEF|78|79|236.263.565.367.617.830.426|1992||188||76|38.44|
Sergio Postigo|DEF|54|73|186.810.523|1988||185||54||
Jordan Obita|DEF|155|73|720.692.628.641.936.419|1993||183||76||
Pablo Ceppelini|MED|157|74|677.196.593|1991||176||157||
Federico Rodríguez|AVA|157|74|677.378.154.679.320|1991||185||157||
Amato Ciciretti|AVA|84|75|139.663|1993||170||84||D
Benno Schmitz|DEF|2|76|318.767.705.231.391|1994||182||2||
Mame Thiam|AVA|135|78|118.440.463.949.642.285.484.351.486.670.301|1992||185|4|135|44|
Dimitri Bisoli|MED|84|64|694.165|1994||180||84||
David Juncà|DEF|54|76|386.753.203.930.384|1993||175||54||
Loïck Landre|DEF|58|73|647.223.368.521.378.681.622.488|1992||182||58|11|
José Rodríguez|MED|54|80|721.262.371.548.586.542.362.190.545.875.29|1994||180||54|11.31|
Mamadou Sylla|AVA|135|75|709.291.466.465.949.797.636.386.66.719.886.58|1994||184||135||
Luca Rizzo|MED|84|75|768.681.575.154.100.760|1992||185||84||
Filip Mladenovic|DEF|145|81|294.231.822.515.517.654.478.574|1991||180|34|88|43.46|
Lubomir Satka|DEF|52|79|610.514.769|1995||188|33|52|43|
Alhassan Wakaso|MED|60|71|690.732.319.908|1992||180||60|32.39|
Cauley Woodrow|AVA|76|74|539.367.177.168.129|1994||184||76|38|
Massadio Haïdara|DEF|100|76|19.610.521.818.490|1992||179||58|43|
Jérémie Bela|AVA|3|74|521.266.67.145.223|1993||173||58||E
Leo Stulac|MED|53|70|895.663.285.652.728.591|1994||175||53||
Branimir Hrgota|AVA|142|81|158.281.394|1993||187|3|21||
Jay Fulton|MED|51|73|344.830.628.929|1994||178||76||
Diogo Figueiras|DEF|127|78|668.582.787.378.632.163.732.345|1991||171||127|40.41.59.9|
Rúben|DEF|127|70|554.908.214|1990||183||127||
Mattia Bani|DEF|84|75|728.696.218.154.378.663.652|1993||188||84||
Thom Haye|MED|75|75|22.513.10.588.414.71|1995||187||124||
Philipp Förster|MED|2|72|620.762.298.898|1995||188||2||
Antonio Milic|DEF|40|75|405.472.80.719.514|1994||190||40||
Thievy Bifouma|AVA|35|77|291.507.924.72.390.820.746.639.799.82.938.176.623.488|1992||180||58|42|E
Mauro|MED|16|66|163|1990||178|0|16|28.32.41.52|
Ben Pearson|MED|0|75|552.129.695.160|1995||176|||54|
Paul Seguin|MED|2|76|933.394.874|1995||186||2||
Alexis Rolín|DEF|157|75|598.201.150|1989||183||157||
Kristoffer Peterson|AVA|142|76|532.882.735.417.830.302.362|1994||185||142||E
Rodrigo Lindoso|MED|16|70|358.240.554.159|1989||182||16||
Marko Bakic|MED|109|75|848.356.810.137.120.163.9.585.623|1993||185||160|32|
Patrick Twumasi|AVA|60|74|76.66.374.651.458|1994||176||60||D
Bruno González|DEF|54|74|189.142.379.523.886.186.813|1990||185||54||
Modou Barrow|AVA|148|75|614.830.146.617.516.720.257.458.36.799|1992||176||148||E
Paul Nardi|GR|58|76|19.587.731.207.319.465.698|1994||187||58|34|
Mats Møller Dæhli|MED|116|78|552.576.197.365.817.377.620|1995||172||116|10|
Dimitrios Goutas|DEF|63|73|937.632.470.797.514.113.799.197.376|1994||189||63|38|
Jordan Lefort|DEF|105|72|75.942.662.81|1993||183||58||
Sabin Merino|AVA|54|78|101.144.186.262.772.779|1992||187||54||
Carlos Clerc|DEF|54|73|291.386.638.523.283|1992||182||54||
Patrick Erras|DEF|2|72|620.923.422|1995||195||2||
Liam Henderson|MED|51|75|204.739.419.128.416.285.513.652|1996||183||51||
José Pozo|MED|54|77|551.72.719.800.685|1996||170||54||
Saidy Janko|DEF|148|78|552.155.204.129.763.325.617.942.886.898|1995||178||143|54|
Sinan Gümüş|AVA|152|76|371.378.84.351.301|1994||179||2||D
David Kinsombi|MED|2|74|548.281.479|1995||183||2|53|
Kenan Kodro|AVA|21|79|725.638.548.391.233.101.886.348.352.374.779.623|1993||190|15|54||
Cédric Hountondji|DEF|12|73|731.502.15.368.525.223.81|1994||194||58||
Jacek Goralski|MED|126|76|931.454.898|1992||172||126||
Pierre-Yves Hamel|AVA|58|72|319.223.662|1994||189||58||
Tom Lockyer|DEF|123|76|169.213.539|1994||180||123||
Brendan Galloway|DEF|162|79|543.299.924.539|1996||186||162|38.45|
Gustavo Henrique|DEF|16|77|777.357.351.886.234|1993||193||16|30|
Mauricio Cuero|AVA|33|73|441.125.523|1993||176||33||D
Florian Tardieu|MED|58|73|316.330.949.862.763|1992||182||58||
Alexy Bosetti|AVA|58|74|612.855.819|1993||172||58||
Eduardo Henrique|MED|16|73|396.834.112.120.812.241|1995||184||16|50|
Joakim Nilsson|DEF|142|74|284.91|1994||185||142||
Todor Nedelev|MED|17|72|548|1993||176||17||
Jacopo Petriccione|MED|84|72|513.241|1995||176||84||
Ben Osborn|MED|76|75|617.790.263|1994||176||76|39|
Sassá|AVA|16|67|159.621.627.554|1994||174||16||
Joaquín Fernández|DEF|54|74|72.886.856|1996||190||54||
Mikkel Desler|DEF|43|73|626.412.854.116|1995||187||43||
Tana|MED|54|69|507|1990||169||54||
Patrick Pentz|GR|165|77|117.820.524.172|1997||186||165||
Wilder Cartagena|MED|125|73|909.388.637|1994||180||125||
Pere Milla|AVA|54|76|379.753.283.291|1992||184||54||E
Oscar Benítez|AVA|4|71|163|1993||183||4|32|E
Cléber Reis|DEF|16|72|667.689.234.408|1990||186||16||
Robert Muric|AVA|40|75|277.32.674.404.492.801|1996||179||40||D
Josip Misic|MED|40|74|594.404.810.812.642.277|1994||187||40|30.9|
Younes Namli|AVA|43|74|414.645.494.229.807.511|1994||180||43||D
Benedikt Gimber|DEF|2|72|421.762.479.451.315.415|1997||185||2||
Sam Gallagher|AVA|76|76|805.543.146.145|1995||193||76|42|
Jorge Miramón|DEF|54|74|104.186.754.523|1989||176||54||
Julian Pollersbeck|GR|2|76|408.541|1994||195||2||
Ali Sowe|AVA|148|74|218.461.674.508.575.513.694.195.741.82.180|1994||186||148||
Adama Mbengue|DEF|135|67|759|1993||178||135||
Jaromir Zmrhal|MED|32|74|802.165|1993||189||32||
Sheyi Ojo|AVA|76|81|929.934.532.367.820.717.197.568.470|1997||177||76|33|D
Tiago Silva|MED|127|73|120.137.349.617.632.908.57|1993||170||127||
Rhys Healey|AVA|76|74|197.272.543.854|1994||180||76||
Laurent Abergel|MED|58|75|553.4.19.319|1993||170||58|17|
Maximilian Ullmann|DEF|165|71|501.718.895.932.391|1996||179||165||
Lorenzo Venuti|DEF|84|74|356.674.165.139.513.768|1995||180||84||
Riccardo Gagliolo|DEF|142|75|199.663.764|1990||180||84||
Filippo Bandinelli|MED|84|73|139.285|1995||180||84||
Thomas Ouwejan|DEF|124|74|22.871.589|1996||172||124|13|
Manolis Saliakas|DEF|63|74|632.644.643.817|1996||178||63|38.40.55|
Edoardo Goldaniga|DEF|84|71|652.681.673.463.781.366.378.196.232|1993||193||84|44|
Aaron Tshibola|MED|129|76|720.99.617.543.489.919.265.376.644.522|1995||191||76||
Vasyl Kravets|DEF|153|74|480.187.186.514.813.913.749.687.560|1997||183||153||
Stipe Perica|AVA|40|75|215.588.871.366.484.585.921.542.822.308.985|1995||192||40||
Matt Miazga|DEF|45|82|608.215.907.600.720.80.66.221|1995||191||45|21.42.48.53|
Burgui|AVA|54|76|291.813.66|1993||184||54||E
Duncan Watmore|AVA|76|72|828.419|1994||175||76||D
Chema Rodríguez|DEF|54|75|523.379|1992||189||54||
Pawel Bochniewicz|DEF|126|71|729.871.726.401.414|1996||193||126||
Gautier Lloris|DEF|58|74|612.368.15.511|1995||188||58||
Ertuğrul Ersoy|DEF|152|69|176.180.511.374.449|1997||187||152||
Fali|DEF|54|69|103.427.384.245|1993||186||54||
Lawrence Ati Zigi|GR|60|75|318.767.330.331|1996||188||60||
Jamilu Collins|DEF|115|73|404.750|1994||178||115||
Samuel Gustafson|MED|142|73|429.848.673.416.238.881|1995||186||142||
Awer Mabil|AVA|8|78|31.566.289.668.484.245.806|1995||179||128||E
Juanpi|MED|159|72|105.586.754.37.655.912|1994||171||159||
Duane Holmes|MED|45|72|425.178.939.783.263.695.423|1994||172||45||
Yuri Ribeiro|DEF|127|74|732.140.617.517.163.146|1997||178||127|18.46|
Kasey Palmer|MED|85|74|425.263.146.168.830.236.426.539|1996||175||76||
Calvin Verdonk|DEF|75|77|354.645.589.334.345.530|1997||174||124||
Vinícius Araújo|AVA|16|76|242.822.888.811|1993||176||16|39|
Cameron Borthwick-Jackson|DEF|76|82|552.934.516.783.628.177.800.740|1997||183||76|31.47.54|
Max Lowe|DEF|76|71|263.793.26.790.617.789|1997||175||76||
Kieran Dowell|MED|76|78|299.617.790.263.929.616.717.145.426|1997||175||76|11.38.43.45|
Gabriel Fernández|AVA|157|73|255.710.677.203.779.317.865.185|1994||186||157||
Anton Mitryushkin|GR|134|74|809.329.302.274.487.535|1996||190||134||
Iván Arboleda|GR|33|72|261.125.719.611.83.567.733|1996||183||33||
Asger Sörensen|DEF|43|73|566.767.318.451.620.806|1996||190||43||
Yony González|AVA|33|75|286.459.358.140.499.234.202.260.690.111.733.436|1994||182||33|30|D
Clifford Aboagye|MED|60|70|871.726.390|1995||167||60||
Uche Agbo|MED|115|70|871.726.390.822.719.163|1995||185|1|115||
Reece Burke|DEF|76|76|925.162.929.155.426.539|1996||188||76|35.39|
Robin Fellhauer|MED|2|70|115|1998||182||2||
Ajdin Hrustic|MED|8|79|312.281.416.417.764|1996||183||8|59|
Pablo Santos|DEF|16|72|554.163.745.411.582|1992||188||16|9|
Mathias Rasmussen|MED|116|74|432.613.757.875.817|1997||170||116||
César Martins|DEF|16|71|689.140.357.597.909.776.346|1992||190||16|30.7|
Lucão (1996)|DEF|16|75|834.292.389.570.396.623.78|1996||185||16||
Arnaud Lusamba|MED|129|75|19.612.207.75.65.670|1997||180||58||
Kingsley Ehizibue|DEF|124|76|645.231.871.378|1995||189||2||
Ivan Saponjic|AVA|145|76|665.949.110.245|1997||189||160|51|
Felix Passlack|DEF|2|80|157.421.616.362.898.419|1998||170||2|53|
Niklas Schmidt|MED|2|72|923.899.854|1998||184||2||
David Costas|DEF|54|76|203.549.723.127.72|1995||184||54|36|
Erik Palmer-Brown|DEF|45|77|476.325.470.588.551.117.862.654|1997||185||45|39.43.46.52|
José Carlos Lazo|AVA|54|74|187.291.72|1996||180||54||E
Javi Muñoz|MED|54|80|721.66.723.189.188.753.507.379|1995||175||54|11.35.43.56.57|
Adrián Guerrero|MED|54|67|888|1998||174||54||
Pablo Martínez (1989)|DEF|58|73|622.368.81.293.262|1989||182||58||
Aarón Escandell|GR|54|75|905.888.586.105.726.390.307.507.723|1995||187||54||
Federico Ricca|DEF|157|75|252.586.224.625.138|1994||176||157||
Emanuele Ndoj|MED|1|74|165|1996||189||84||
Tim Skarke|AVA|2|73|415.874|1996||181||2||
Sébastien Salles-Lamonge|MED|58|72|731.511.746.772|1996||170||58||
Mads Pedersen|DEF|43|74|613.115.338|1996||180||43||
Yakou Méïté|AVA|39|72|647.720.330.197.251|1996||184||58|4|
Aaron Leya Iseka|AVA|20|76|80.553.949.854.323.129.30.623.195|1997||182||20||
Álvaro Tejero|DEF|54|78|721.67.753.779.291.90|1996||173||54|3.35.57|
Rochinha|AVA|127|73|155.822.149.908.812.484.345|1995||172||127|47|E
Moreto Cassamá|MED|70|74|820|1998||165||70||
Nanu|DEF|70|73|136.349.554.325.250.776.769.295.17|1994||177||127|52|
Janni Serra|AVA|2|73|898.422.91.25.620|1998||193||2||
Chris Bedia|AVA|39|72|702.949.862.330.786.874.426.942|1996||190||39||
Leo Suárez|AVA|4|75|150.905.886.549.77.778.865.296|1996||164||4||D
Koji Miyoshi|MED|86|80|485.940.744.145.898|1997||167|5|86||
Souleyman Doumbia|DEF|39|73|128.391.731.81.822.212|1996||175||58||
Steffen Tigges|AVA|2|76|899.157.231.750|1998||195||2||
Liam Cullen|MED|123|74|830|1999||178||123||
Pontus Almqvist|AVA|142|74|614.741.882.685.513.663|1999||178||142||D
Francesco Cassata|MED|84|75|781.366.378|1997||183||84||
Jhon Murillo|AVA|159|74|140.847.484.772.109.183|1995||171||159|46|D
Jan Mlakar|AVA|53|77|356.895.593.698.166.929|1998||183||53||
Lennart Czyborra|MED|2|75|417.100.378.91.645.918|1999||181||2||
Timothy Tillman|MED|45|74|620.394.500|1999||183||2||
Pablo Galdames|MED|29|73|917.378.238.892|1996||175||29||
Jeffrey de Lange|GR|124|75|334.387.553|1998||191||124||
Kaj Sierhuis|AVA|124|76|32.312.820.417.362|1998||180||63||
Andrija Balic|MED|40|75|405.871.362.673|1997||180||40||
Jake Clarke-Salter|DEF|76|80|215.169.828.907.145.236|1997||188||76|21.42.48.53|
Karlo Letica|GR|40|75|405.224.760.768.191.314.509|1997||201||40|44|
Felix Beijmo|DEF|142|74|170.268.923.550.394.25.233|1998||185||142||
Joël Schmied|DEF|143|72|942.329.231|1998||188||143||
James Bree|DEF|76|76|129.99.447.539.805.213|1997||172||76||
Ahmed Touba|DEF|5|74|225.224.625.707.131.513.471.654|1998||184||58|43.46|
Smail Prevljak|AVA|21|75|705.318.767.466.418.591|1995||187|1|21||
Carlo Boukhalfa|MED|2|68|365.451.817.331|1999||186||2||
Kemal Ademi|AVA|143|74|606.132.351.478.487.750.762.321.594|1996||197||2||
Jonathan Klinsmann|GR|45|74|418.331.499.209|1997||194||2||
Finn Becker|MED|2|72|817.421.620|2000||177||2||
Jean Manuel Mbom|MED|2|72|923.900.898|2000||179||2||
Florent Muslija|AVA|89|75|479.750.365.302|1998||172|3|2||E
Abdu Conté|DEF|127|72|582.862.942.200|1998||183||70||
Pedro Ferreira|MED|127|63|547.891.23.776|1998||183||127||
Daam Foulon|DEF|20|69|919.139.471.744|1999||180||20||
Giovanni González|DEF|157|78|734.677.549.494|1994||173|16|157||
Tete Morente|AVA|54|63|104.384.187.586.283.513|1996||184||54||E
Jorge Sáenz|DEF|54|74|189.203.186|1996||192||54||
Javi Sánchez|DEF|54|80|721.203.902.886.92|1997||186||54|11.35.56.57|
Théo Valls|MED|58|73|622|1995||179||58||
Jorge Fernandes|DEF|127|72|325.847.484.908.41|1997||193||127||
Christoph Klarer|DEF|165|67|302.145|2000||191||165||
Allan Campbell|MED|51|72|583.539.568.213.273.816|1998||175||51||
João Amaral|MED|127|74|909.140.514.668.490|1991||172||127|46|
Marcus Coco|DEF|64|77|398.600.191.986|1996||184|6|64||
Sory Kaba|AVA|68|75|283.266.566.625.197.507|1995||191||68||
Miguel Luís|MED|127|75|812.908.715.655|1999||178||127|47|
André Pereira|AVA|127|73|891.325.909.908.779.732|1995||188||127|52.7|
Pedro Díaz|MED|54|74|813.156.719|1998||180||54||
Malte Amundsen|DEF|43|73|739.278.893.609.230|1998||179||43||
Gabriel Osho|DEF|115|72|169.939.539.15.197|1998||185||76||
Alexandru Dobre|AVA|132|76|160.178.939.929.266.345.326|1998||178|7|132||D
Maximiliano Caufriez|DEF|20|74|919.797.809.223.888.767|1997||189||20|46|
Cryzan|AVA|16|73|102.776|1996||191||16|50|
Brian Mansilla (1997)|AVA|4|72|710.382.909.346.683.636.34|1997||178||4||E
Vincent Marchetti|MED|58|72|4.19.662|1997||181||58||
Manuel De Luca|AVA|84|71|848.768.238|1998||192||84||
Marius Marin|MED|132|77|781.681.51|1998||180|35|132||
Noah Fadiga|DEF|135|73|225.336.417.818.465.90|1999||180||20||
Daniel Mancini|AVA|4|70|611.156.855.15.90.654.17|1996||179||4|43.46|D
Aiden O'Neill|MED|8|75|175.628.205.167.557.822.609|1998||178||8||
Julien Laporte|DEF|58|72|223.319|1993||185||58||
Darko Churlinov|AVA|97|78|231.298.175.454.490|2000||180||96||E
Przemysław Wiśniewski|DEF|126|73|401.895.810.928|1998||195||126||
Róber Pier|DEF|54|71|262.523.813.109|1995||182||54||
Sam Field|MED|76|75|924.213.698|1998||186||76||
Luther Singh|AVA|164|73|214.582.668.233|1997||171||164||E
Assan Ceesay|AVA|148|74|320.338.899.513.251|1994||188||148||
Ricard Sánchez|DEF|54|74|104.110.390.187.292|2000||175||54|3.51|
Salvatore Esposito|MED|84|73|760.218.810|2000||178||84||
Patric Pfeiffer|DEF|60|73|408.115.942|1999||196||2||
Marco Sala|DEF|84|73|440.781.760.241.652.232.513.118|1999||182||84||
Casimir Ninga|AVA|28|74|578.759.81.799|1993||186||28||
Sofian Kiyine|MED|102|73|218.764.510.895.625|1997||182||20||
Víctor Campuzano|AVA|54|74|291.813.832|1997||174||54||
Rayyan Baniya|DEF|152|67|416.478.856.652.492|1999||192||84||
Charles Traoré|DEF|100|74|862.600|1992||180||58||
Marios Vrousai|DEF|63|73|632.732|1998||183||1|40|
Giuseppe Caso|AVA|84|65|378.366|1998||172||84||E
Beni Baningime|MED|129|76|299.929.263.413|1998||178||129|11.38|
Kevin Van Den Kerkhof|DEF|5|73|746.323.702|1996||179||58||
Lukas Petkov|AVA|17|73|115.394|2000||183||2||D
Ignacio Ramírez|AVA|157|71|763.598.611.811|1997||180||157||
Morlaye Sylla|MED|68|67|92.251|1998||185||68||
Luquinhas|AVA|16|73|904.265.517.608.360.776.714|1996||167||16||E
Reda Khadra|MED|2|74|146.166.790.145.820.511.699|2001||175||2||
Bruno Rodrigues (1997)|AVA|16|71|659.689.834.345.242.653|1997||177||16|9|E
Moritz Broschinski|AVA|2|72|898.132|2000||188||2||
Justin Hoogma|DEF|124|73|417.421.817.882.394|1998||184||124||
Joel Latibeaudiere|DEF|85|78|551.334.830.236|2000||180|29|76|26|
Shurandy Sambo|DEF|42|77|807.648.175|2001||174|8|124||
Abdou Harroui|MED|102|74|807.781.366.416|1998||182||124||
Charles Abi|AVA|58|74|612.81.266.763|2000||187||58||
Giorgi Tsitaishvili|AVA|61|78|275.913.220.930.514.390.323|2000||171||83||E
Elias Cobbaut|DEF|20|74|471.80.663.806|1997||188||20||
Josh Tymon|DEF|76|74|426.825.345|1999||178||76|38|
Javi Hernández|DEF|54|73|723.186.386.245.38.654|1998||182||54|43|
Mathias Pereira Lage|AVA|127|71|223.81.818.817|1996||180||58||E
José Luis Rodríguez|AVA|121|80|465.591.66.187.813.345.294.317|1998||180|73|121||E
Stéphane Diarra|AVA|39|71|950.512.319.763.74|1998||173||39||D
Tom Edwards|DEF|76|72|825|1999||175||76||
Roberto Massimo|AVA|2|74|91.298.28.394.401|2000||184||60||D
Tomás Ribeiro|DEF|127|70|120.391.908.346|1999||185||127||
Scott Twine|MED|76|70|831.543.175.426.168|1999||174||76||
Michele Collocolo|MED|84|66|209.97.238|1999||188||84||
Bendegúz Bolla|DEF|73|73|348.934.391.786.718|1999||179||73||
Mateo García|AVA|4|74|439.507.638.9.90.294.109|1996||167||4||D
Houboulang Mendes|DEF|70|74|819.319.72.188.862.362.786|1998||184||58||
Emanuele Valeri|DEF|84|73|513.209.238.366.663|1998||180||84||
Heri Tavares|AVA|23|71|582.149.818.345.688.292.877|1997||181||127||E
Ryan Porteous|DEF|51|75|419.921.695.500|1999||188||51||
Álvaro Aguado|MED|54|74|246.886.190.291|1996||175||54||
Gaius Makouta|MED|35|72|90.748.149.65|1997||180||58|28|
Shinta Appelkamp|MED|2|73|302|2000||175||86||
Tomás Alarcón|MED|29|71|245|1999||174||29||
Emil Kornvig|MED|43|73|540.810.835.222.757.928|2000||187||43||
Jack Taylor|MED|78|71|675.447|1998||185||76||
Gennaro Borrelli|AVA|84|71|674.461.366.165.196|2000||194||84||
Samuele Birindelli|DEF|84|70|681.580|1999||175||84||
Oliver Villadsen|DEF|43|71|613.620.172|2001||173||43||
Filip Stojilkovic|AVA|143|63|329.0.624.237.681|2000||185||143||
Liberato Cacace|DEF|118|75|922.797.285.935|2000||183||118||
Jayden Braaf|AVA|124|74|871.416.362|2002||180||124||E
Boris Popović|DEF|145|71|207.92|2000||189||58||
Luis Binks|DEF|76|70|579.154.232.236.172|2001||188||76||
Regan Slater|MED|76|72|790.198.783.426|1999||171||76||
Kady Borges|AVA|16|76|235.537.292.904.699.494.352|1996||170||16||D
Liam Millar|AVA|25|81|489.532.426|1999||181|41|25||E
Alberto Soro|AVA|54|72|779.721.390.910.308.214|1999||173||54||D
Magnus Kofod Andersen|MED|43|73|613.895.806|1999||179||43||
Thórir Jóhann Helgason|MED|82|71|513.278|2000||187||82||
Ismaila Coulibaly|MED|100|74|790.135.14.501|2000||183||||
Mickaël Nadé|DEF|58|74|763|1999||186||58||
Lamine Diaby-Fadiga|MED|68|74|612.731.75.81.662.454.715|2001||183||58||
Andrias Edmundsson|DEF|74|71|931.416|2000||193||74||
Aziz Yakubu|AVA|60|72|910.908.292.732.791|1998||187||60||
Alejandro Gómez|DEF|111|69|109.149.778.226|2002||183||111|28|
Slobodan Tedic|AVA|145|71|244.551.645.129.213|2000||190||160||
Lukas Engel|DEF|43|71|893.796.565.221.766|1998||178||43||
Malcolm Ebiowei|AVA|76|72|263.243.426.708.641.147|2003||185||76||D
Fali Candé|DEF|70|66|200.690.323.895.781|1998||184||70||
Kaio|DEF|16|72|353.776.494.159|1995||186||16||
Oier Zarraga|MED|54|76|101.184.144.871|1999||175||54||
Kenneth Schmidt|DEF|2|71|365.302|2002||187||2||
Daniel Elfadli|DEF|95|73|408|1997||188||2||
Marc Aguado|MED|54|69|258.779.283|2000||178||54||
Di'Shon Bernard|DEF|76|78|552|2000||189||76||
Cody Drameh|DEF|76|75|516.197.539.145.426.378|2001||175||76|17|
Lee Buchanan|DEF|76|74|923|2001||179||76||
Shandon Baptiste|MED|62|76|641.164.539|1998||175||76||
Jamie Shackleton|MED|0|74|516.568|1999||168|||17|
Kays Ruiz-Atil|MED|0|79|647.15|2002||182|||36.42.53|
Ibrahim Karamoko|DEF|58|70|218.848.822|2001||190||58||
Jessy Deminguet|MED|58|72|759.293.323|1998||178||58||
Jonathan Fischer|GR|43|72|420.364.323|2001||197||||
Rasmus Carstensen|MED|43|74|796.465.377.231.514.25|2000||183||43||
Rhys Norrington-Davies|DEF|123|75|790.539.825.698|1999||180||7||
Óscar Gil|DEF|54|75|283.291.625|1998||175||54||
Yoël Armougom|DEF|58|71|759.330.223.657|1998||173||133||
Sander Tangvik|GR|116|76|739.408|2002||193||116||
Ilario Monterisi|DEF|84|66|513.366|2001||190||84||
Demba Seck|AVA|135|74|760.848.366.665|2001||190||135||D
Nahuel Estévez|MED|4|67|296.780.810.241.663|1995||183||4||
Yasser Larouci|DEF|5|78|532.862.790.921.488|2001||176||5||
José Gragera|MED|54|75|813.291.262|2000||186||54||
Noah Ohio|AVA|124|74|907.117.705.822.426.882.886|2003||185||124||
José Marsà|DEF|54|73|812.813.471|2002||185||54|47|
Million Manhoef|AVA|124|74|907.825|2002||179||124||D
Borja Garcés|AVA|54|76|110|1999||175||54||
Lamine Gueye|AVA|135|71|400.666.323.662|1998||178||135||D
Papa Ndiaga Yade|AVA|105|72|400.323.862.324|2000||187||135||E
Pablo Martínez (1998)|MED|54|64|9.103.523.188.754|1998||182||54||
Julien Ponceau|MED|58|72|319.736.622|2000||170||3||
Tim Breithaupt|MED|2|71|479.115.0.302|2002||192||2||
Joyskim Dawa|DEF|24|75|587.380.322.305.339|1996||194|10|58|34|
Mateusz Legowski|MED|126|73|685.764.943.301|2003||181||126||
Darlan|MED|16|71|395.462.211.525.776|1998||179||16|50|
Ivan Smolcic|DEF|40|72|404.232|2000||181||40||
Kristoffer Askildsen|MED|116|75|768.513.566.901|2001||190||116|44|
Garcia|DEF|16|73|653.597.345|2002||169||16|9|
Adrian Bajrami|DEF|143|75|140.321|2002||188||143|18|
Aiham Ousou|DEF|146|74|429.369.802.702.245|2000||186||142||
Gonçalo Cardoso|DEF|127|74|149|2000||189||127||
Pelle Mattsson|MED|43|69|796.616|2001||181||43||
Bartlomiej Wdowik|DEF|126|72|454.163|2000||184|1|126||
Andreas Jungdal|GR|43|77|7.752.238.473|2002||195||139|41.52|
Fabio Gruber|DEF|125|66|620|2002||188||2||
Arkadiusz Pyrka|DEF|126|72|680.817|2002||177|1|126||
Mattia Felici|AVA|84|70|513.652.859.196|2001||182||84||E
Luca Moro|AVA|84|68|650.201.781.366.810|2001||189||84||
Frans Krätzig|DEF|2|79|620.133.117.298.415.767|2003||170||2|27.53|
Louis Oppie|DEF|2|66|91.817|2002||184||2||
Melker Ellborg|GR|142|63|550.828|2003||191||142||
Lucas Ribeiro|DEF|16|74|421|1999||190||16||
Tomoya Ando|DEF|86|71|119.817|1999||191||86||
Vasilios Zagaritis|DEF|63|73|654.663.71.414|2001||178||63||
Drissa Camara|MED|39|68|663.374|2002||179||39||
Giorgio Cittadini|DEF|84|70|100.575.580.378.366|2002||193||84||
Erencan Yardımcı|AVA|152|71|371.301.65.670.421.827.278|2002||188||152||
Colin Kleine-Bekel|DEF|2|66|422.898.331|2003||192||2||
Juanmi Latasa|AVA|54|74|721.379.886|2001||193||54||
Carlos Dotor|MED|54|72|203.723|2001||180||54|43|
Danley Jean Jacques|MED|71|76|323.678|2000||180||71||
Kalidou Sidibé|MED|58|73|854|1999||200||58||
Iván Azón|AVA|54|73|779.232.447|2002||192||54||
Kaique Rocha|DEF|16|70|777.768.443.102.200|2001||197||16|44|
Alexander Bernhardsson|AVA|142|71|951.284.422|1998||185||142||D
Carlos Domínguez|DEF|54|74|203|2001||187|1|54|43|
Sang-bin Jeong|AVA|37|74|934.391.569.815|2002||175|1|37|35.40|
Bruno Amione|DEF|4|74|138.416.729.768.778|2002||187||4||
Zanocelo|MED|16|68|689.353.777.360.292.202|2001||185||16||
Riccieli|DEF|16|63|570.345.280|1998||184||16||
Thelo Aasgaard|MED|116|78|929.539.717|2002||188||76||
Léo Leroy|MED|58|70|502.578.132|2000||185||58||
Armin Gigovic|MED|21|79|741.626.566.422.942|2002||187|20|142||
Magnus Knudsen|MED|116|73|531.741.25.422|2001||175||116||
Leonardo Buta|DEF|127|71|871.380.582.753.732|2002||182||127||
Saba Sazonov|DEF|61|75|947.276.848.285|2002||192||134||
Sidney Lima|DEF|16|66|350.349.776|1997||180||16||
Fabiano (2000)|DEF|16|66|27.163.484.582.202|2000||175||16||
Joaquín Sosa|DEF|157|73|598.154.277.579|2002||189||157||
Víctor Meseguer|MED|54|70|722.188.390.886.709|1999||184||54||
Edouard Michut|MED|58|78|647.828.29.362|2003||178||58|36.4.42.53|
Gabriel Charpentier|AVA|35|73|118.378.729.97.366.663.237|1999||188||35||
Dinis Pinto|DEF|127|63|163.582|2000||178||127||
Darko Gyabi|MED|76|73|516|2004||196||76||
Daniel Fila|AVA|32|72|573.802.840.895.285|2002||190||32||
Paul Mukairu|AVA|115|73|84.80.233.720.685|2000||182||115||D
Samir Chergui|DEF|5|75|15.662|1999||185||58||
Maksym Taloverov|DEF|153|75|179.802.804.501.684.825|2000||195||134||
Gonçalo Franco|MED|127|68|520.582.830|2000||176||127||
João Mendes (2000)|DEF|127|62|325.908|2000||179||127|7.52|
Bernardo Vital|DEF|127|71|292.779.454|2000||187||127||
Noah Cadiou|MED|64|70|866.727.736.319|1998||191||58||
Serginho (2001)|AVA|23|71|292.631.900.62|2001||183||127||D
Mateja Stjepanović|MED|145|71|665.582|2004||185||136||
Marko Lazetić|AVA|145|77|294.7.752.362.343.26|2004||192||136|41.52|
Ruairi McConville|DEF|79|71|166.616|2005||193||79||
Marko Ivezic|DEF|145|73|422|2001||191||160||
Peter Federico|AVA|131|75|888.379.886|2002||180||54||D
Adama Boiro|DEF|54|75|638.181.144.101.925|2002||183||135||
Hamzat Ojediran|MED|115|73|521.229|2003||172||115||
Fabio Chiarodia|DEF|84|73|923.158|2005||186||2||
Bosun Lawal|DEF|78|70|204.825|2003||190||78||
Gonçalo Esteves|DEF|127|73|812.292.22.871.943.74|2004||171||127|47|
Igor Miladinovic|MED|145|74|244.763|2003||166||136||
Maxence Rivera|AVA|58|74|763.869.414|2002||168||58||E
Nathan|DEF|16|66|892.149.777.345|2001||183||16|28|
Cláudio Braga|AVA|127|66|24.413|1999||180||127||
Caden Clark|MED|45|73|608.705.894.569.579.247|2003||180||45||
William Mikelbrencis|DEF|58|73|323.408|2004||176||58||
Edan Diop|MED|58|72|587.207|2004||185||58||
Joseph Nonge|MED|20|73|460.463.862.786.490|2005||184||20||
Jozhua Vertrouwd|DEF|124|72|719|2004||187||124||
Telmo Arcanjo|AVA|23|75|847.908|2001||180||127||D
Mayckel Lahdo|AVA|142|64|410.22.600.172|2002||179||142||D
Justin Che|DEF|45|72|250.421.172.10.608|2003||185||45||
Jacques Siwe|AVA|58|68|266.398.745|2001||190||58||
Rareș Ilie|MED|132|73|562.326.612.542.509.285.987|2003||186||132||
Martin Adeline|MED|58|72|820.736.862|2003||180||58||
Tiago Morais|AVA|127|71|149.520.530.732.200|2003||168||127|28.41|E
Pedro Lima (2003)|MED|16|66|653.594.21.812|2003||171||16||
José Salinas|DEF|54|73|283.188.291|2000||179||54||
Check Keita|DEF|100|70|820.746.702|2003||185||58||
Fally Mayulu|AVA|58|71|148.718.168.827.92|2002||193||58||
Julián Malatini|DEF|4|71|182.254.923|2001||190||4||
Marvin Senaya|DEF|60|75|293.330.736.509.15|2001||181||58|20|
Gino Infantino|MED|4|75|738.356.37.89|2003||178||4||
Álex Padilla|GR|111|74|101.184.144.865|2003||190||54||
Hugo Rincón|DEF|54|74|638.181.101.144.184.188.386|2003||185||54||
Gonzalo Abrego|MED|4|68|388.238.771|2000||184||4||
Serginho (1999)|MED|127|62|350.631.776|1999||181||127||
Enzo Tchato|DEF|24|74|578|2002||182||58||
Tobias Slotsager|DEF|43|72|626.416|2006||189||43||
Moïse Sahi Dion|AVA|39|70|293.340|2001||175||39||
Kjell Wätjen|MED|2|73|157.898|2006||184||2||
Almugera Kabar|DEF|2|73|157|2006||186||2||
Lovro Zvonarek|MED|40|75|801.133.827.391|2005||180||40|53|
Santiago Homenchenko|MED|157|70|677.649.723.188.701|2003||185||157||
Farid Alfa-Ruprecht|AVA|2|64|524.898|2006||181||2||D
Kerwin Vargas|AVA|33|72|349.212|2002||180||33||D
Mohamed Kaba|MED|68|68|885.513.600|2001||185||58||
Tyler Fredricson|DEF|76|72|552|2005||188||76|47|
Francesco Coppola|DEF|84|63|681|2005||195||84||
João Rego|MED|127|71|140|2005||182||127|18.31.38|
Gustavo Varela|AVA|23|70|140.380|2005||184||127||
Alieu Njie|AVA|142|70|848|2005||185||142||E
David Jiménez|DEF|54|72|721|2004||170||54||
Hugo Picard|MED|58|70|398.230|2003||168||58||
Zinedin Smajlović|DEF|142|71|513.774|2003||191||142||
Adama Camara|MED|58|64|662|1996||180||58||
Pathé Mboup|AVA|135|71|708.666.818|2003||175||135||E
Oumar Ngom|MED|105|70|666.295.513|2004||190||58||
Amine Salama|AVA|58|72|869.81.820.759.848.588|2000||192||58||
Terry Yegbe|DEF|60|66|284.323|2001||195||60||
Min-hyeok Yang|AVA|37|75|373.853.698.692.236|2006||176||37||D
Sandro Vidigal|AVA|127|63|163|2007||172||127||D
Jan Bürger|DEF|2|66|933|2007||180||2||
Luis Balbo|DEF|159|71|356|2006||177||159||
Óscar Perea|AVA|33|71|106.293.21|2005||180||33||E
Coba da Costa|AVA|70|70|379.80|2002||182||54||E
Fallou Fall|DEF|135|70|820.364.815|2004||192||135||
Guille Fernández|MED|54|72|127|2008||181||54||
Mahamadou Diawara|MED|58|73|541.511.744|2005||187||58|41|
Ruan (2005)|MED|16|64|462.690.65|2005||172||16||
Fran González|GR|54|75|721|2005||199||54||
Jaurès Assoumou|AVA|39|68|862.769|2002||182||39||E
Rayane Messi|AVA|58|70|266.293.666.590|2007||175||58||E
Romelle Donovan|AVA|76|66|145.177.164|2006||171||76||D
Kingstone Mutandwa|AVA|163|66|196.761|2003||185||163|44|
David Santos Daiber|MED|127|71|133|2007||183|||5|
Ángel Pérez|AVA|54|66|754.66|2002||183||54||D
Joseph Liteta|MED|163|64|196|2006||175||||
Luck Zogbé|DEF|39|72|818|2005||183||39||
Pharell Hensel|MED|2|62|933|2007||188||2||
Tomás Pérez|MED|4|68|611.325.112|2005||182||4||
Pape Moussa Fall|AVA|135|64|400.706.323.505|2004||203||135||
Mohamed Bamba (2004)|MED|39|64|820.380|2004||177||39||
Kenny Quetant|AVA|58|68|511.923|2006||189||58||
Dastan Satpaev|AVA|27|76|215|2008||176||27||
Kyllian Antonio|DEF|58|71|521|2008||183||58||
Bogdan Popov|AVA|153|63|285|2007||193||153||
José Neto|DEF|127|66|140|2008||184||127|31|
Noham Kamara|DEF|58|76|647.541|2007||185||58|36.4|
Selton Sánchez|MED|54|73|101.184.144|2007||185||54||
Jocelin Ta Bi|AVA|39|63|828|2005||175||39||D
Carlos Macià|MED|54|68|905|2008||190||54||
Romuald Peiser|GR|58|73|647.524.326.862.604.27|1979||187||58|52|
Moreno|DEF|127|72|908.518.597|1981||188||127|32.46.52|
Manú|AVA|127|76|74.575.140.295.554.517.122.909|1982||172||127|25.7|D
Paulo César|AVA|16|74|903.380.908.732.519.163|1980||175||16|30.32.34|D
Zé Pedro (1978)|MED|127|67|149.909.120|1978||187||127|30|
Tony|DEF|127|72|214.295.191.908.668.669|1980||178||58|41.46|
Ricardo Nunes|GR|127|71|891.27.519.325.909.214|1982||188||127|12.32.35.39.52|
Bruno China|MED|127|72|520.549.732.27.137.120|1982||182||127|52|
Paulo Jorge|AVA|127|71|149.140.586.554.46.380.120.137|1981||176||127|25|D
Targino|AVA|127|70|908.716.909.629|1986||180||127|46.52|D
Dani|MED|127|72|910.668.191.448.937.909|1982||177||127||
Mário Camora|DEF|132|73|136.604.191|1986||178|10|127||
Henrique Sereno|DEF|127|78|908.345.886.325.231.486.548|1985||188|2|127|12.55.59.7|
Rúben Ribeiro|MED|127|69|520.669.136.668.732.380.149.812.37.411.214|1987||175||127|28.30.39.41|
Rafael Miranda|MED|16|71|112.102.554.279.908|1984||179||16|32|
Jorge Luiz|DEF|16|70|443.892.112.202.397.833.909.396|1982||192||16||
Marafona|GR|127|74|891.554.265.582.668.163.65|1987||190||127|32.41.9|
Bruno Moreira|AVA|127|71|891.582.597.195.214.668.732.690|1987||185||127|41|
Luísinho|DEF|127|75|582.732.265.668.140.262.754|1985||175||127|30|
Chris Malonga|AVA|35|74|19.587.509.908.819|1987||183||58|44.46|E
Rúben Lima|DEF|127|74|140.265.909.136.405.277.404.878.582.120.345.295|1989||177||127|30.34.7|
Orlando Sá|AVA|127|78|163.325.597.367.517.720.542.822|1988||188|1|127|12.28.30.59.7|
Issam El Adoua|MED|102|75|521.600.908.523.265|1986||189||102|46|
Pato Rodríguez|AVA|4|73|438.777.296.12.582|1990||170||4|28|E
Rafik Halliche|DEF|5|81|140.597.367.27.700.292.582|1986||187|41|5|30.52.7|
David Simão|MED|127|76|140.668.27.554.92.195.149.744.12.582|1990||183||58|30.46.7|
Diogo Amado|MED|127|71|724.812.519.292.789|1990||177||127|38.40|
Diogo Viana|DEF|127|75|325.884.265.669.380.195.137.120.163.346|1990||173||127|12.28.41.59.7|
Cauê Silva|MED|16|75|520.629.582.120|1989||184||16|52|
Braga|MED|127|65|765.520.732.669.214.265|1983||179||127|39|
João Aurélio|DEF|127|71|597.908.582.651|1988||185||127|32|
Leonel Olímpio|MED|16|71|573.192.79.380.668.908|1982||184||16|46|
Roderick Miranda|DEF|127|76|140.786.262.732.934.632.345.374.556|1991||194||127|30.39|
Osama Rashid|MED|77|72|346.776.374.910|1992||178||77||
Renan (1990)|GR|16|73|234.280.292.396.704|1990||192||16|38|
Henrique Almeida|AVA|16|76|834.280.811.390.159.279.235.395.120|1991||177||16|50|
Enzo Zidane|MED|58|81|721.66.509.265.736|1995||184||58|11.43.57|
Antonio Briseño|DEF|111|71|109.843.317.349.219.845|1994||185||111||
Flávio Ferreira|DEF|127|74|27.748.586|1991||180||127|12.52|
Vincent Sasso|DEF|58|73|600.136.163.789.137.120.786.149.869|1991||190||58|28.32.52|
Bebeto (1990)|DEF|16|69|279.554.847|1990||174||16|60|
Juankar|DEF|54|77|721.163.779.142.390.586.654.90|1990||178||54|31.34|
Joãozinho|DEF|127|72|547.136.812.163.878.470.847.292|1989||185||127|28.34|
Josué Sá|DEF|127|74|908.214.80.484.754.538.542.732.380|1992||183||127|46.52|
Tomané|AVA|127|73|908.655.92.847.294.769.17.346.21|1992||182||127|32.46.52|
Diogo Salomão|AVA|127|76|200.724.812.262.549.308.44.339.776|1988||176||127|28.30.34.38|D
Jubal|DEF|16|74|903.777.92.908.690.149.909.15.494|1993||190||16|32|
Luís Leal|AVA|144|74|582.292.519.36.120.375.17.137|1987||176||127|38.55|
Bruno Cortez|DEF|16|79|159.834.140.240.68|1987||179|1|16|30.7|
Joel Tagueu|AVA|24|75|537.235.242.777.554.597|1993||178||24|28|
Fábio Sturgeon|MED|127|70|120.137.908.349.937.623|1994||183||127|32|
Alexandre Guedes|AVA|0|70|265.908.345.668|1994||185||||
Tyler Boyd|AVA|45|72|922.908.847.82.141.799.180.499.603.500|1994||177|5|118|32.42.52|E
Naby Sarr|DEF|135|75|541.812.213|1993||196||58|38|
Mohamed Bouldini|AVA|102|73|631.27.776.190.523.262|1995||184||102||
Ewerton (1992)|MED|0|77|690.325|1992||179|||52|
Joel Pereira (1996, Lech Poznan)|DEF|127|66|28.633.380.514|1996||178|0|127||
Mattheus|MED|16|75|357.292.812.908.235.547.346|1994||185||16|32|
Amr Warda|AVA|47|79|812.655.642.113.11.912.83.87.657|1993||176|30|47|20.9|E
Aaron Appindangoyé|DEF|59|72|149.950.819.953.799.490|1992||183||59||
Douglas Coutinho|AVA|16|73|102.242.163|1994||183||16|34.50|
Uri Busquets|MED|54|79|127.334.223.92.466|1999||185||54||
Caio Rangel|AVA|16|73|196.92.242|1996||172||16|34.50|D
Dylan Batubinsika|DEF|129|75|744.345.545.763.11.339|1996||184||58||
Samu|MED|127|71|149.910.908|1996||170||127||
Fabio Abreu|AVA|3|70|554.582|1993||182||127||
Saviour Godwin|AVA|115|67|472.200.53|1996||173||115||E
Mikel Villanueva|DEF|159|70|105.586.245.384.776.908.42|1993||190||159||
Tyronne Ebuehi|DEF|115|78|10.140.334.895.285|1995||187||124|18.46|
Pedro Pereira|DEF|127|75|768.140.378.168.241.580.65.376|1998||174||127|44.7|
Racine Coly|DEF|135|74|165.612.345.75.292.449|1995||185||135||
Jérémy Livolant|AVA|58|71|398.866.502.330.156.200|1998||176||58||D
Felipe Pires|AVA|16|73|318.767.421.117.653.360.404.582.749.10.462.912|1995||178||16||E
Mehrdad Mohammadi|AVA|80|67|265|1993||178||80||D
Renat Dadashov|AVA|9|73|281.292.934.668.391.847.411.82.714.584|1999||186||2||
Gustavo Sauer|AVA|16|71|659.249.149.159.180|1993||181||16|28|D
Miguel Silva|GR|127|64|910.908.554|1995||191||127|32.52|
Lumor Agbenyenu|DEF|60|76|325.690.1.812.402.549.90.586.488.761|1996||175|14|60|30.32.35|
Bruno Costa|MED|127|75|325.690.668.885.910.597|1997||170||127|52.7|
Miguel Cardoso|AVA|127|70|724.262.878.847.276.837.120.486|1994||176||127||E
Aylton Boa Morte|AVA|127|65|765.292.690.486|1993||182||127||D
Dylan Saint-Louis|AVA|35|71|763.950.819.662.135.862.411.910|1995||175||58||D
Rodrigo Pinho|AVA|16|72|163.597.554.140.235.295|1991||185||2|30.32.41.7.9|
Dani Silva|MED|127|70|908.416.566.651|2000||180||127||
Ole Pohlmann|MED|2|71|157.732|2001||183||2||
Gelson Dala|AVA|3|77|812.732.84|1996||175||3|30.32.47|
Bruno Jordão|MED|127|76|519.163.510.934.345.391.776.714|1998||185||127|39|
Koffi Kouao|DEF|39|71|910.582.345.323|1998||173||39||
Tiago Araújo|DEF|127|70|92.292.465|2001||178||127||
Erick|AVA|16|67|621.280.380.202.834|1997||173||16||D
Anderson Silva|AVA|16|69|396.345.122.908.65.651|1997||186||16||
Miguel Baeza|MED|54|73|203.688.732.188.597|2000||177||54||
Alejandro Marqués|AVA|159|73|460.188.292|2000||189||159||
Milutin Osmajic|AVA|109|75|245.910.695.378|1999||186|36|160||
Show|MED|3|71|120.149.538.545.250.490|1999||180||3|28|
Yuki Soma|AVA|86|77|599.482.200.546|1997||165||86||E
Brandon Aguilera|MED|38|76|617.169.732|2003||168|3|38|39|
Amadou Dante|DEF|100|74|827.836.338.92|2000||179||||
Hugo Félix|MED|127|70|847|2004||170||127||
Adriano Firmino|MED|16|70|242.776|1999||187||16|50|
Vinícius Lopes|AVA|16|69|389.159.708.776|1999||180||16||D
Luis Asué|AVA|69|74|582.755.186|2001||184||69||
Hyun-ju Lee|MED|37|71|686.92|2003||172||37||
Danilo Veiga|DEF|127|66|350.380.404.295.513|2002||183||127||
Maga|DEF|127|68|908|2002||175||127||
Stefan Lekovic|DEF|145|73|294.905.580.295|2004||192||136||
Moisés Mosquera|DEF|33|66|554.317|2001||188||33||
Facundo Cáseres|MED|4|68|917.591.346.380|2001||178||4||
Hélio Varela|AVA|23|76|690.465.542|2002||176||127||E
Marko Milovanović|AVA|145|74|665.72.74|2003||196||136||
Mateo Tanlongo|MED|4|73|738.812.233.732|2003||183||4|47|
Zé Vítor|DEF|16|64|78.279.597|2001||189||16||
João Costa|AVA|127|71|737.40|2005||178||16||D
João Tornich|DEF|16|68|690.501|2002||194||16||
Antoine Joujou|AVA|58|71|511.663.345|2003||189||58||E
Salvador Blopa|DEF|127|66|812|2007||188||127||
Ricardo Silva (1975)|DEF|127|73|325.554.519.908.149.136.909|1975||188||127|7.25.31.59|
Fary Faye|AVA|135|74|136.149.265|1974||177|4|135|34|
Tiago Gomes|DEF|127|74|140.295.944.638.120.292.163.323.349|1986||175||127|25.38.45.52|
Miguel Fidalgo|AVA|127|66|597.13.878.27.909|1982||177||127|12|
Danielson|DEF|16|71|732.487.668.597.633.380.582|1981||189||16||
João Paulo (1980)|AVA|127|70|265.149.349.909.891.136.292.189.668.519.326.520.87.345|1980||184||127|7.30.38|
Joeano|AVA|16|71|360.27.909.92.732.519|1979||182||16|39|
Pawel Kieszek|GR|126|75|163.909.325.735.292.732|1984||187||126|12.30.55.59.7|
Ricardo Silva (1980)|DEF|23|72|345.363.136.668.908|1980||186|14|127|41|
Bruno Amaro|MED|127|71|669.597.27.909.92|1983||181||127|12|
Vasco Fernandes|DEF|127|73|629.156.520.203.283.136.682.90.909.953.214.200|1986||182||127|52|
Rui Miguel|MED|127|71|28.748.604.944.668.908.494.326.860|1983||175||127||
Paulo Lopes|GR|127|75|140.380.765.295.860.349|1978||184||127|18.30.31.38.46.7|
Rúben Fernandes|DEF|127|68|690.891.292.797.380.346|1986||186||127|38|
Marcelo Boeck|GR|16|75|443.554.812.211|1984||190||16|28.30.34.38|
Muriel|GR|16|72|443.693.137.120|1987||190||16||
João Guilherme|DEF|16|72|443.554.17|1986||185||16||
Arthuro|AVA|16|74|240.565.709.813.66.246.339.34.203.357.519.878.292|1982||190||16||
Djalmir|AVA|16|67|345.120.765.349.629|1976||185||16|52|
Gonçalo Santos|MED|127|70|27.776.265.292.277|1986||185||127|12.38|
Fernando Alexandre|MED|127|71|140.547.295.163.520.629.27.582|1985||182||127|25.34.52|
Gottardi|GR|16|71|443.693.627.462.519.597.554|1985||193||16||
Bakary Bouba Saré|MED|18|75|80.739.191.277.37.908.582.137|1990||182||39|32.46.52|
João Ribeiro|AVA|127|71|604.27.908.635.629|1987||176||127|12.46|E
Nuno Coelho|MED|127|74|748.519.325.27.140.136.90.92.120|1987||183||127|12.28.30.7|
Mario Martínez|MED|54|72|507.149|1985||174||54|28|
Bruno Teles|DEF|16|72|395.693.811.462.908.468.892.732.668|1986||183||16|46|
Maximilian Haas|DEF|2|73|133.565.519.163|1985||190||2|32.54|
Felipe Garcia|GR|16|72|777.659.621.358.693.582|1988||193||16||
Felipe Menezes|MED|16|74|389.667.140.159.811.653.689|1988||185||16|30.7|
Ânderson Luís|DEF|16|66|355.292.570.92|1988||175||16|38|
Edno|AVA|16|76|648.902.930.355.102.693.234.159.843.208.689.280.582|1983||183||16||
Marcos Díaz|GR|4|69|776|1986||186||4||
Rabiola|AVA|127|73|908.325.629.265.349.163.680.669.27|1989||182||127|12.28.59.7|
Marinho|AVA|127|65|604.27|1983||166||127|52|D
Rui Pedro (1988)|MED|127|76|325.295.690.380.520.191.27|1988||178||127|7.12.28.59|
Jorge Teixeira|DEF|127|74|200.545.338.794.822.213.797.21|1986||188||127||
Javier Cohene|DEF|120|72|629.734.668.909|1987||187||122|41.46|
Jean Sony Alcénat|DEF|71|75|520.732.676.339.349|1986||174|67|71||
Douglas Jesus|GR|16|69|777.446.908|1983||188||16|32.46.52|
Nuno Reis|DEF|127|74|812.207.629.323.654.909.525|1991||181||143|28.34.38.52|
Caetano|MED|127|69|668.380.669|1991||165||127|41.46|
Júlio Alves|MED|127|72|732.110.141|1991||178||127|39|
Fredy|MED|3|72|137.120.300.84.301.151|1990||170||3||
Patrick Bauer|DEF|2|73|298.554.213|1992||192||2||
Marlon de Jesús|AVA|49|73|395.734.545.577.697.92|1991||186||49||
Rafael Martins|AVA|16|73|395.258.102.211.909.523.582.908.200.776|1989||177||16|32|
Lassad Nouioui|AVA|151|80|4.502.262.204.92.333|1986||189|3|58||
Carlão|AVA|16|75|519.163.482.668|1986||190||16|32.34|
Florent Hanin|DEF|58|73|511.520.163.582.655.529.826.331.137.908.662.81|1990||177||58|28.32|
Amido Baldé|AVA|70|76|776.812.207.908.204.919.323.554.847|1991||193||70|46|
Jean Barrientos|MED|157|72|710.908.930.937.912.11|1990||174||157|46|
Matt Jones|GR|76|67|776.878.120.137.847.678|1986||190||76||
José Francisco Cevallos Jr.|MED|49|74|503.463.469.690|1995||186||49|21|
Igor Rossi|DEF|16|72|443.621.554.413.346|1989||189||16||
João Carlos Teixeira|MED|127|78|164.532.166.325.163.908.354.345|1993||177||127|13.33.39.9|
Zainadine|DEF|110|72|597.554|1988||178||110||
Emin Mahmudov|MED|9|76|809.846.468.581.149|1992||175||9||
Mika (1991)|GR|127|75|519.140.149.828.120.27.909.582|1991||184||143|28.30|
Rúben Pinto|MED|127|74|140.668.120.137|1992||181||127|30.41|
Junior Tallo|AVA|39|76|218.737.128.4.746.530.908.769.305|1992||187||39|32|
Cláudio Ramos|GR|127|72|908.847.325|1991||183||127|46.52.7|
Claudemir (1984)|MED|16|70|892.659.597|1984||173||16||
Uri Rosell|MED|54|77|476.812.908.120.137.690.637|1992||181|1|54|30.38.52|
Douglas Tanque|AVA|16|73|659.446.397.689.68.668.769.490.791|1993||188||16||
Simeon Slavchev|MED|17|74|812.87.155.525|1993||185|4|17|38|
Frederico Venâncio|DEF|127|71|909.789.908.187.753.776|1993||186||127||
Hélder Lopes|DEF|127|74|663.847.136.668.507.12|1989||179||127|41|
Jorge Rojas|AVA|122|72|137.120.382|1993||170||122||D
Charles (1994)|GR|16|71|892.554.910.908|1994||186||16||
Seba Pérez|MED|33|75|106.150.771.649.149.200|1993||175||33|20.28|
Welthon|AVA|16|70|668.908|1992||180||16|32|
Juan Delgado|DEF|0|75|227.384.847.668|1993||177||||
João Afonso (1990)|DEF|127|62|908.292.246.776.851.847|1990||188||127|32.46.52|
Filipe Augusto|MED|16|75|279.732.888.163.140.65|1993||182||16|32.39.41.46.7.9|
Ivo Rodrigues|MED|127|71|908.325.92.668.744.345.48.582.584|1995||182||127|32.35.39.46.52|
Sardor Rashidov|AVA|158|73|597|1991||184||154|50|D
Sebastián Rincón|AVA|33|65|691.842.908|1994||179||33||D
Miguel Rodrigues|DEF|127|69|519.597.655.732|1993||188||127||
Maurides|AVA|16|73|443.111.92.355.137.195.303.714.817|1994||189||16||
Salim Cissé|AVA|68|72|27.812.92.909|1992||185||68|30.32.34.38.47.52|
Tomas Dabo|DEF|70|70|163.92|1993||173||70|28|
Saleh Al-Shehri|AVA|7|80|136.36.56.45.46|1993||177|16|7|30.34.37.55|
Jonatan Álvez|AVA|157|74|252.908.503.106|1988||183||157|46|
Ali Alipour|AVA|80|74|554.380|1995||181||80||
Malick Evouna|AVA|59|74|492.776|1992||185||59||
Guillermo Celis|MED|33|71|459.140.908.228.259.634.733|1993||178||33|32.46.7|
Nikola Maras|DEF|145|75|711.214.72.719.66.523.813|1995||189||160||
Komnen Andric|AVA|145|71|712.624.137.277.872.223|1995||189||160||
Rúben Lameiras|AVA|127|72|853.236.684.345.908.214.200|1994||175||127|42|D
Iván Rossi|MED|4|71|554|1993||183||4||
Tomás Martínez|MED|4|73|734.189.254.163|1995||171||4||
Héctor Hernández|AVA|54|75|104.110.283.67.586.190.214.234.380|1995||180||54|51|
Djavan|DEF|16|70|349.192.27.140.163.214.582|1987||184||16|30.32.41.52.9|
Gastón Campi|DEF|4|71|710.296.214.856.478.92.938.771.130|1991||193||4||
Bozhidar Kraev|MED|17|73|525.566.380.345.922.926|1997||175||17||
Kento Misao|MED|86|79|844.482.776.625|1996||181|6|86||
Adrián Marín|DEF|54|74|905.186.66.390.345.380.163.637|1997||178||54||
Yan Eteki|MED|24|75|390.200|1997||180||24||
Pedro Sá|MED|127|64|891.690.295|1993||175||127||
Andre Green|AVA|76|77|99.692.695.213.789.742.657.21|1998||180||76||E
Eboue Kouassi|MED|39|74|494.204.377.92|1997||185||39||
Pedro Amaral|DEF|127|74|655.732.48.644.292|1997||178||127||
Nélson Monte|DEF|127|72|732.214|1995||187||127||
Miguel Campos|DEF|127|65|136.629.324|1996||188||127||
Gui Ramos|DEF|127|74|547.349.91.408.776.122|1997||191||127||
Maurício Antônio|DEF|16|75|690.554.881|1992||183||16||
Ponck|DEF|23|72|346.668.214.265.131.180.582.21|1995||182||23||
Bruno Paulista|MED|16|72|279.812|1995||190||16|30.32.47|
Neris|DEF|16|63|443.811.659.149.62.44.242.280|1992||192||16||
Sidy Sarr|MED|135|73|470.622.214|1996||196||135||
Godfried Frimpong|DEF|124|71|582.484|1999||180||124||
Ignacio de Arruabarrena|GR|157|70|92.63|1997||181||157||
Flávio|MED|16|70|280.353.149.279.856.385.61|1996||177||16||
Pedro Álvaro|DEF|127|70|120.292.90|2000||186||127||
Thiago Santana|AVA|16|71|355.621.909.776.791.881.883|1993||184||16||
Marc Gual|AVA|54|75|787.779.386.9.749.454.517.732|1996||186||54||
Jandro Orellana|MED|54|69|292|2000||177||54||
Matheusinho|MED|16|69|78.240.776.811.202|1998||164||16||
João Basso|DEF|16|70|659.292.724.92.777|1997||187||16||
Lucas Fernandes|MED|16|73|834.690.159.21.462|1997||177||16||
Matheus Jesus|MED|16|78|689.292.777.690.372.627.234.704.462.621.883|1997||187||16|55|
Sylvester Jasper|AVA|17|74|419.169.690.800.945|2001||180||76||E
Joe Hodge|MED|78|73|934.698.425.847|2002||172||76|35|
João Mendes (1994)|MED|127|67|631.847.27.292.214.908.486|1994||175||127||
Henrique Pereira|AVA|127|64|200.776.214|2002||178||127||E
Sidnei Tavares|MED|23|66|518.325.229.582.146|2001||188||127|52|
Kévin Zohi|AVA|100|72|293.910|1996||177||39||D
Lawrence Ofori|MED|60|65|520.349.345.92.582.200|1998||181||60||
João Goulart|DEF|127|63|547.200|2000||191||127||
Christian Marques|DEF|127|66|120.943.847|2003||188||143||
Ianis Stoica|AVA|132|74|339.676.562.863.314.295|2002||180||132||E
Matous Trmal|GR|32|69|803.908.554.573.840|1998||196||32||
Hernán de la Fuente|DEF|4|73|917.345.107.427.439|1997||178||4||
Madson|AVA|16|72|27.111.360.627.295.582.317|1999||164||16||E
Patrick William|DEF|16|64|202.903.345.292.732.498.173|1997||185||16||
Oday Dabbagh|AVA|120|75|92.702.26|1998||179|45|120||
Musa Juwara|AVA|148|75|218.154.149.241.626.893.685|2001||170||148||D
André Clóvis|AVA|16|64|690.292|1997||186||16||
Pedro Brazão|AVA|127|72|612.509.345.151|2002||176||127||D
Junior Kadile|AVA|58|66|345.731.819.71.786|2002||180||58||E
Mohanad Ali|AVA|77|69|39.690.90|2000||183||77||
Gabriel Poveda|AVA|16|62|396.74.102.462.903.730|1998||183||16||
Naïs Djouahra|AVA|58|71|725.188.404.186.92|1999||171||58||E
José Fontán|DEF|54|74|203.387.307.92|2000||183||54||
Antoñín|AVA|54|73|105.586.390.719.908.83.187.384.493|2000||179||54||
Zé Carlos (1998)|DEF|127|66|765.520.163.380|1998||177||127||
Yanis Hamache|DEF|5|71|727.612.149.749.92.324|1999||177||58|28|
Bruno Rodrigues (2001)|DEF|127|64|163.478.214|2001||192||127||
Luan Patrick|DEF|16|72|102.78.704.416.295|2002||190||16||
Capita|AVA|3|72|860.585.295.714.476|2002||171||3||E
Alaa Bellaarouch|GR|102|65|293.163.308|2002||188||102||
Rodri Alonso|MED|54|66|67.582|2003||172||54||
Diogo Prioste|MED|127|74|140|2004||179||127||
Silas Andersen|MED|43|71|882.429.812|2004||190||43||
Matchoi Djaló|MED|127|72|668.131.931|2003||175||70||
Igor Formiga|DEF|16|62|27.689.234.242.690.462.570|1999||177||16||
Abraham Marcus|AVA|115|70|349.690.714.325.295|2000||178||115||D
Léo Bolgado|DEF|16|67|27.74.520.200.191.326|1998||190||16||
Fábio Ronaldo|AVA|127|64|732.295.584|2001||178||127||D
Elias Manoel|AVA|16|71|395.608.766.159.776|2001||176||16||
Matheus Dias|MED|16|70|443.597|2002||189||16||
Andrian Kraev|MED|17|71|525.200|1999||191||17||
Pedro Santos (2003)|AVA|127|70|582.345|2003||178||127||D
Nuno Lima|DEF|127|64|668.350.65|2001||184||127||
Pedro Bondo|DEF|3|70|345|2004||183||3||
Tom Lacoux|MED|58|71|156.345|2002||182||58||
Ronald|AVA|16|63|86.396.295.830|2001||177||16||D
Paulo Victor (2001)|DEF|16|64|159.443.892.202.346.776|2001||180||16||
Vasconcelos|MED|127|64|163|2005||180||127||
Zé Carlos (2001)|MED|127|68|891.908.346.380|2001||172||127||
Diogo Bezerra|AVA|16|62|624.732|2002||186||16||D
Matija Mitrović|MED|145|66|945.908|2004||178||136||
Kaique Pereira|GR|16|68|653.346.597|2003||190||16|9|
Jalen Blesa|AVA|54|64|877.209.732|2001||187||54||
Tony Strata|DEF|132|71|4.908|2004||177|1|58||
Afonso Patrão|AVA|127|68|163.473|2007||182||127||
Gonçalo Oliveira|DEF|127|64|140|2006||183||||
Markus Berger|DEF|165|73|761.27.220.432.880.380.847|1985||186||165|12|
Manuel José|MED|127|74|325.908.27.909.149.191.668|1981||176||127|25.30.31.41.46.58.59.7|
Márcio Abreu|MED|127|73|554.494.850|1980||169||127||
Gonçalo Brandão|DEF|127|75|120.213.794.663.209.191.137.292|1986||182|2|127|21.30|
Ricardo Fernandes|DEF|127|70|765.582.597.326.732|1978||187||127||
Luís Filipe|DEF|127|73|27.104.163.812.519.554.140.908.629|1979||182||127|25.28.30.52.7|
Christian Kinkela|MED|129|71|727.819.855.875.75.662.866.4.193.582.502|1982||175||161||
Milhazes|DEF|127|65|891.149.732.908.214.623.522|1981||182||127||
Pedro Moreira (1983)|DEF|127|63|669.136|1983||177||127|34|
Nuno Piloto|MED|127|68|27.448.629|1982||177||127|52|
Artur|MED|127|70|136.220.554.92|1984||175||127|34|
Tiago Valente|DEF|127|70|668.265.515.669.909|1985||186||127|41|
China (1982)|DEF|127|71|604.120.563|1982||171||127||
Diego|GR|16|72|462.102.358.520.909|1979||188||16||
Pedro Botelho|DEF|16|80|93.203.307.719.523.102.112.292|1989||186||16|15|
Ladji Keita|AVA|135|70|74.732.113.909.163.122.597|1983||188||135||
Filipe Gonçalves|MED|127|71|163.520.909.668.860.582.292.597|1984||185||127|28.38|
Semedo (1985)|MED|127|74|812.200.349.196.213.789.909|1985||183||127|32.40|
Peçanha|GR|16|71|357.668.554.326.676.335.349.28.27|1980||173||16||
Ronny|AVA|16|72|79.240.338.668.755.136.191.732|1983||183||16|34.39|
Robert Ahman-Persson|MED|142|74|14.900.550.137|1987||186||142||
Hélder Guedes|AVA|127|67|669.668.732.909|1987||184||127||
Vítor Gomes|MED|127|71|732.196.348.582.123.137.265.633|1987||181||127|39|
Bédi Buval|AVA|103|73|155.727.716.656.515.349.402.27.893.668.629|1986||188||58|41.52|
Mourtala Diakité|DEF|100|73|136.149.308.120.554.137|1980||188|30|100||
Said Ahmed Said|AVA|84|74|440.378.580.629.405.732.469.304.657.876|1993||180||60|43|
Cássio|GR|16|72|892.668.163.92.732|1980||186||16|28.41.46|
Kayke Rodrigues|AVA|16|78|357.903.861.429.23.659.111.597.940.777|1988||182||16|28|
Giorgi Makaridze|GR|61|75|512.349.582.909.732.554|1990||193|5|154||
Aarón Ñíguez|AVA|54|78|888.448.717.203.72.283.163.189|1989||170||54|32.41.9|D
Hugo Ventura|GR|127|75|325.629.690.812.732.120.137|1988||186||127|12.28.34.39.52.55.59.7|
Thiago Carleto|DEF|16|76|777.888.283.834.78.358.689.159.92|1989||172||16||
Pedro Moreira (1989)|MED|127|72|149.325.380.690.732.314.92|1989||182||127|7.12.28.35.41.55.59|
Wíres|DEF|16|63|732|1982||176||16|39|
João Diogo|DEF|127|70|554.120.137.335|1988||175||127||
Bruno Wilson|DEF|127|71|847.163.189.910.756|1996||192||127|47|
Bruno Gallo|MED|16|72|892.520.909.554.214|1988||182||16||
Lionn|DEF|127|71|851.908.629.732.191.214.345|1989||182||16|39|
Ramón Cardozo|AVA|122|71|669.909.597.598.582|1986||190||122||
José Luis Fernández|MED|4|74|710.140.296.629.388.738|1987||168|1|4|30.52|
Eñaut Zubikarai|GR|54|76|753.725.847|1984||185||54||
Shuichi Gonda|GR|86|79|333.690.791.906|1989||188|3|86||
Babanco|MED|23|71|92.629.292.349|1985||177||23|38.52|
Marcelo Toscano|AVA|16|74|570.667.509.659.908.355.903.78.457|1985||184||16|46|
John Ogu|MED|115|74|519.27|1988||192||115|52|
André Claro|AVA|127|69|345.92.909.292.149|1991||183||127||
Cristiano Figueiredo|GR|127|73|163.910.27.655.137.120.909.314.191.308|1990||192||2|28|
Adriano Facchini|GR|16|70|149.79.878.380.477.597.265|1983||187||16||
Ulises Dávila|MED|111|79|219.907.215.246.189.909.778|1991||174||111|12.43.58|
Fábio Espinho|MED|127|72|520.582.538.586.149|1985||171||127||
Érick Moreno|AVA|33|70|671.567.163.655.886.847|1991||183||33|32.41.52.9|
José Valencia|AVA|33|70|691.738.438.349|1991||186||33||
Rui Rêgo|GR|127|65|214.136|1980||176||127|34|
Jeferson|DEF|16|66|732|1986||189|0|16|39|
Edgar Costa|AVA|127|69|878.597.582.554|1987||180||127||D
Gus Ledes|MED|127|74|732|1992||173||127|39|
Márcio Rosário|DEF|16|71|462.79.47.159.358.621.554|1983||187||16||
Betinho|AVA|127|73|812.909.164.120.137|1993||179||127|28.34.38|
Ricardo Ferreira (1992)|DEF|25|75|7.285.629.668.163.120.346|1992||190||25|9.32.41.48|
Marko Petkovic|DEF|145|73|624.294.809.847.343.713|1992||185||160||
Luís Carlos|AVA|16|69|380.493.582.944|1987||170||16||E
Kosuke Nakamura|GR|86|79|483.119.690.208|1995||184|6|86||
Esmaël Gonçalves|AVA|70|77|149.612.732.816.17.897.83.40.413.533|1991||184||70|39|
Arsénio|AVA|127|70|120.137.582.92|1989||180||127||E
Yusupha Njie|AVA|148|63|149.777.346|1994||188||148|28|
Dellatorre|AVA|16|73|443.325.102.698|1992||182||16|41.50|
Saleh Gomaa|MED|47|72|597|1993||175||47|20|
Jean Cleber|MED|16|65|554|1990||180||16||
Anderson Conceição|DEF|16|73|777.240.355.549.111.279.78.678.214|1989||188||16||
Luís Martins|DEF|127|74|140.380.390.638.554.214|1992||176||127|30|
Lucas|DEF|0|72|321.644.690.308|1992||193||||
Dener|MED|16|70|834.667.396.450.79.690|1992||187||16||
Wilmar Jordán Gil|AVA|33|72|195.214|1990||179||33||
Aleksandar Palocevic|MED|145|70|624.911.92.597.686.327|1993||180||160||
Luís Silva|MED|127|68|520.163.380.214.597.137.891.904.21.28|1992||184||127|28.32.41.52.9|
Gonçalo Silva|DEF|127|63|163.120.137.714.346|1991||186||127||
Víctor García|DEF|159|65|325.597.908|1994||175||159|32.35.39.41.52|
Gerso|AVA|70|69|27.292.582.137.476.457.434|1991||172||70|38|E
Raphael Guzzo|MED|127|71|214.847.345.910.389|1995||177||16||
Francisco Ramos|MED|127|76|325.908.776.597|1995||181||127|32.39.52|
João Schmidt|MED|16|77|834.909.100.732.599.485.777|1993||184||16||
Victor Andrade|AVA|16|76|777.140.908.292|1995||171||16|32.46.52.7|E
Ricardo Alves|MED|127|71|120.690.326.636|1993||184||127||
Maxime Dominguez|MED|143|71|786.338.509.606.715.380.892.849.237|1996||166||143||
Fran Varela|DEF|54|74|143.142.120|1994||174||54||
Bruno Mendes|AVA|16|74|396.159.102.908|1994||184||16|32.52|
Lucas Souza|MED|16|71|659.629.663.582.847|1990||186||16||
Amir Abedzadeh|GR|80|77|554.688|1993||186|9|80|20|
Eugeni|MED|54|72|384.67.754|1994||182||54||
Carlinhos|MED|16|74|524.451.443.332.292.822.396.909.892.690|1994||179||16||
Dankler|DEF|16|73|280.159.292.909|1992||188||16||
Hugo Basto|DEF|127|66|891.92.214|1993||188||127||
Leandrinho|MED|16|74|777.732.909|1993||178||16|28|
Erdal Rakip|MED|97|75|550.140.243.84|1996||179||142||
Renato Augusto|MED|16|72|653.582.689|1992||185||16|50.9|
Fahd Moufi|DEF|102|72|541.193.847.690.405.636|1996||175||58||
Artur Jorge|DEF|127|72|363.163.585.339.909.17.582.346|1994||186||127|32.9|
Claude Gonçalves|MED|127|73|4.847.862.380.538.517|1994||173||58||
Seung-woo Lee|AVA|37|77|127.416.797.690.829.458|1998||170||37|36|E
Raphael Silva|DEF|16|64|149|1992||190||16||
Ivan Zlobin|GR|134|73|140.345|1997||191||134|18|
Samuel Portugal|GR|16|72|235.86.690.325.53|1994||188||16|52|
Vinícius|GR|16|73|653.689.192.690|1994||194||16|9|
Ibrahim Blati Touré|MED|18|72|950|1994||185||39||
Ricardo Valente|AVA|127|69|349.520.908.668.554.847.445|1991||181||127|46.52|
Koki Anzai|DEF|86|77|844.482.690|1995||172||86||
Matheus Savio|MED|16|75|357.292.483.881|1997||172||16||
Iago Santos|DEF|16|64|27.582|1992||188||16||
Gustavo|AVA|16|76|597|1994||189||16||
Rafael Assis|MED|16|71|163.214.668|1990||170||16||
Philipe Sampaio|DEF|16|72|777.667.149.34.349.847.398.159.708|1994||191||16||
Fernando Fonseca|DEF|127|76|325.292.380.668.21|1997||182||127||
Murilo (1994)|AVA|16|74|159.462.597.163.813.549.380.498|1994||176||16|9|D
Joel Soñora|MED|45|74|554|1996||177||45||
Nuno Tomás|DEF|127|67|137.120|1995||184||127||
Gustavo Dulanto|DEF|125|71|149|1995||194||125||
Nico Mantl|GR|2|72|767.23.900.92.148|2000||193||2||
Jean|MED|16|74|554|1994||178||16||
Hélder Ferreira|AVA|127|74|908.668|1997||179||127||D
Andrezinho|MED|127|67|668|1995||174||127|41|
Ryoya Ogawa|DEF|86|75|333.908.797.482|1996||182||86||
João Gamboa|MED|127|70|891.163.554.214.292.625.685.458|1996||187||127|32.41.9|
Guilherme Schettine|AVA|16|72|397.693.776.163.72.910.391.880.582|1995||180||16||
Paulo Moreira|MED|127|63|891.350.295|2000||181||127||
Allano|AVA|16|74|159.242.292.176.776|1995||177||16|34.50|E
Leandro Antunes|AVA|127|67|904.519.349.58|1997||183||127||
Kobamelo Kodisang|AVA|164|64|582.21|1999||169||164||D
Úmaro Embaló|AVA|127|74|362.307.732.908|2001||170||70||D
Weverson|DEF|16|66|704.92.360.380|2000||185||16||
Lucão (2001)|GR|16|73|892.704.380|2001||190||16||
João Queirós|DEF|127|70|231.214.547|1998||192||127||
Rodrigo Conceição|DEF|127|63|582.325.338.847|2000||175||127|52|
André Vidigal|AVA|127|70|362.554|1998||176||127||E
Afonso Freitas|DEF|127|65|460.908.597.554|2000||181||127||
João Silva (1999)|DEF|127|68|591.470.811.847|1999||189||127||
Antoine Baroan|AVA|58|70|210.337.538.326.21|2000||188||58||
Antoine Leautey|AVA|58|67|380|1996||172||58||D
Rúben Ismael|MED|127|62|582.350.547.597.280|1999||190||127||
Dani Figueira|GR|127|65|292.520.380|1998||189||127||
Issah Abass|AVA|60|74|548.882.334.404.214.456.713|1998||173||60||E
Juan Manuel Boselli|AVA|157|71|255.102.78.847.380.661.494|1999||174||157||
Pedro Ganchas|DEF|127|68|668.796|2000||190||127||
Noah Holm|AVA|116|73|908.739.820.757|2001||186||43||
Patrick|MED|16|70|776|1998||176||16||
Quaresma|DEF|16|64|537.92|1996||181||16||
Paulinho Paula|MED|16|66|149.60.42.892.443|1997||173||16|28|
André Luis|AVA|16|70|149.355.214.582.755.570|1994||184||16||
Fábio Gomes|AVA|16|65|627.68.608.112.892.668.462.832.555|1997||173||16||
Nelson Abbey|DEF|76|70|720.632.830.732|2003||187||||
Yassin Oukili|MED|102|73|907.707.200.362|2001||175||124||
Pedrão|DEF|16|71|653.78.102.597.690|1997||193||16|50|
André Duarte|DEF|127|64|74.295.728.594.339|1997||195||127||
Junior Brandão|AVA|16|65|732|1995||187||16||
Espen van Ee|MED|124|71|414.92|2003||183||124||
Sam McCallum|DEF|76|72|236|2000||177||76||
Benji Michel|AVA|45|71|637.92.766.873|1997||177||45||E
Vaclav Sejk|AVA|32|71|806.840.453.735.944.345.414.795|2002||180||32||
Bruno Langa|DEF|110|75|909.214.72.651.295.699|1997||169|38|110||
João Veloso|MED|127|64|140|2005||185||127|31.38|
Ángel Algobia|MED|54|68|379.523.21|1999||180||54||
Maranhão|AVA|16|62|811.353.355.847|1999||172||16||D
Lucas Barros|DEF|16|71|159.748.380.847.911|1999||180||16||
Pedro Santos (2000)|MED|127|63|163.92|2000||183||127||
Kewin|GR|16|67|704.570.582.251|1995||189||||
Gabriel Brás|DEF|127|66|325|2004||186||127||
Ulisses|DEF|16|66|892.903.597|1999||183||16||
Sam Silvera|AVA|8|74|205.668.200.610.565.692.147.543|2000||173|8|76||E
Nilton|DEF|127|71|120.295.135|2001||182||127||
Lucas Soares|DEF|16|63|74.908.200.776|1998||174||16||
Gui Guedes|MED|127|71|908.72.187|2002||185||127||
Loide Augusto|AVA|3|72|346.547.65.892.180|2000||185||3||D
Roméo Beney|AVA|143|66|132.345|2005||187||143||E
Derik Lacerda|AVA|16|69|27.582.688.811.124|1999||190||16||
Silvano Vos|MED|124|73|32|2005||189||124||
Alfonso Trezza|AVA|157|66|598.92|1999||166||157||D
Rafael Fernandes|DEF|127|68|92.530.717|2002||191||127|41|
Simon Elisor|AVA|58|70|316.4.706.819.323.862.345.877|1999||185||58||
Adriel|GR|16|62|395.21|2001||195||16|50|
Gilberto Batista|DEF|70|66|582|2003||185||||
Tamble|AVA|70|63|350.690.732|2000||191||127||
Nuno Félix|MED|127|66|140|2004||182||127||
Gonçalo Ribeiro|GR|127|72|325|2006||187||127||
Kiko (2002)|DEF|127|66|582|2002||180||127||
Ageu|MED|16|62|242.776.120.74.413|2002||181||16|50|
Francisco Petrasso|DEF|4|62|435.732|2002||191||4||
Djibril Soumaré|MED|135|68|597.163.790|2003||185||135||
Adriano|MED|16|63|27.520.715|2002||175||16||
Gonçalo Sousa|AVA|127|66|325|2006||186||127||D
Marcos Peña|MED|54|63|72.345|2005||180||54||
Gustavo Mancha|DEF|16|66|360.632.732|2004||190||16||
João Afonso (2007)|GR|127|62|776.325|2007||187||127||
Rafael Lobato|AVA|16|62|159.732|2006||170||16||D
Miguel Nogueira|AVA|127|63|908|2005||182||127||D
Johnny Leoni|GR|143|79|329.338.633.554|1984||189|1|143||
Pedro Costa|DEF|127|70|149.345.163.27.92|1981||166||127|12.28|
Briguel|DEF|127|70|554|1979||174||127||
Pape Sow|DEF|135|72|330.502.519.27.654.282.732.113|1985||180||135||
Vasco Faísca|DEF|127|71|812.440.27.120.650.97.682|1980||184||127|30.7|
Luís Manuel|MED|127|64|520.597.910.380.519.265|1981||182||127||
Rui Duarte|MED|127|70|629.120.604.520.295.346|1978||175||127|52|
Miguel Pedro|MED|127|69|765.265.27.83.349.909|1983||176||127||
William Kwabena Tiero|MED|60|72|908.604.27.195.629.55.380|1980||174|18|60|12|
Hélder Cabral|DEF|127|72|908.582.295.893.27.17.909.633|1984||180||127|12.30.52|
João Real|DEF|127|65|748.604.27|1983||185||127|52|
David Caiado|MED|127|73|812.292.860.944.908.751.561.688.314.339.669|1987||176||94|40.46|
João Vilela|MED|127|70|140.380.120.137.519|1985||178||127||
Marcelo Oliveira|DEF|16|74|234.395.113.17.582|1981||185||16||
Serge N'Gal|AVA|24|71|818.519.384.27|1986||173||24||D
Nuno Pinto|DEF|127|72|149.860.597.525.751.909|1986||176||127||
Mano|DEF|127|70|120.522.292.909|1987||168||127|30.38|
Ney Santos|MED|16|70|79.295.163.909|1981||181||16||
Diego Barcelos|MED|16|73|443.777.355.811.597|1985||173||16||
Marcel Correia|DEF|127|72|0.278|1989||186||2||
Luciano Amaral|DEF|16|68|240.279.192.908.79.235.554.87.380|1982||181||16||
Emídio Rafael|DEF|127|74|812.200.724.690.27.325.163.682.292|1986||182||127|12.28.40.55.59.7|
Rafael Defendi|GR|16|67|265.86.570.704.668.345.346|1983||191||16|41|
Kermit Erasmus|AVA|164|75|354.300.731.909|1990||167||164||
Rodrigo Antônio|MED|16|70|892.554.446.120.668|1987||181||16||
Ytalo|AVA|16|75|554.443.667.397.102.834|1988||177||16||
Edimar|DEF|16|75|242.396.446.163.191.937.732.218.246.834.704.892.192|1986||180||16|30.39|
Ozéia|DEF|16|72|235.450.668.395.240.909|1982||191||16|46|
Theo Weeks|MED|92|70|639.82.180.402.554|1990||180||92||
Nathan Júnior|AVA|16|75|758.847|1989||184||16||
Daniel Heuer Fernandes|GR|127|76|898.899.750.408|1992||188||2||
Ricardo Dias|MED|127|71|325.776.136.137.120.349.27|1991||189||127|12.59.7|
Adilson (1982)|AVA|16|66|554|1982||192|0|16||
Manassé Enza-Yamissi|DEF|130|72|15.622.330.75.676.380.868|1989||190||130||
Rodney Wallace|MED|38|77|247.691.92.811.609.476|1988||180|32|38||
Héctor Quiñónes|DEF|33|72|325.668|1992||178||33|7|
Aníbal Capela|DEF|127|72|163.910.748.582.27.732|1991||181||127|28.32.34.52|
Tiago Ferreira|DEF|127|72|949.878.877|1993||176||127||
Maciej Makuszewski|AVA|126|74|454.34.515.909|1989||176||126||E
André Geraldes|DEF|127|72|214.732.265.131.120.137.812.909.813.542.17.200|1991||181||127|38.41|
Nildo Petrolina|AVA|16|70|860.136.348.92.582.265|1986||170||16||E
Manoel|AVA|16|63|306.669.86.27|1989||185||16|52|
Gegé|DEF|23|70|295.860.748.554.92.668|1988||184||23||
Rafa Lopes|AVA|127|70|891.909.582.669.27.214.149|1991||185||127|52|
Tiago Lopes|DEF|127|70|847.860.748.191.486.257|1989||178||127||
Nii Plange|AVA|18|71|20.812.908.27|1989||175||60|34.46|E
Filipe Ferreira|DEF|127|65|120.137.668.827.597.847.149|1990||178||127||
Daniel Giraldo|MED|33|71|260.629.261.437.567.459.462|1992||178||33||
Giorgi Aburjania|MED|61|74|83.384.787.187.334.723.307.380.411.21|1995||187||61||
Bas Kuipers|DEF|124|74|32.300.10.335.589.387.334.92|1994||180||124||
Minhoca|MED|127|64|776.668|1988||175||127|41|
Lazar Rosic|DEF|145|72|712.713.911.163.597.582.11|1993||190||160|32.9|
Charalampos Kyriakou|MED|31|72|87.292.308.13|1995||180|64|31||
Baptiste Aloé|DEF|58|74|553.885.135.92.308.19|1994||183||58|17|
Rui Moreira|MED|127|64|325|1996||172||127||
Rafael Barbosa|MED|127|72|878.690.668.292.847.346.714.21.520|1996||170||127||
Pedro Miguel|DEF|26|79|346.59|1990||188|80|127|20.35.37|
Luís Rocha|DEF|127|71|908.655.517|1993||174||127|32.46.52|
Wallyson|MED|16|70|812.612.582.822.909|1994||183||16|30.32.38.47|
Rui Correia|DEF|127|63|690.597.668|1990||188||127||
Shihao Wei|AVA|30|75|149.349.520.122|1995||177|22|30||E
Deni Júnior|AVA|0|67|358.726.668.847.345|1995||185||||
Easah Suliman|DEF|76|73|216.310.908|1998||188||76||
Stéphane Sparagna|DEF|58|75|553.15.149.904.727|1995||186||58|12.17|
Felipe Macedo|DEF|16|67|389.690|1994||187||16||
Sessi D'Almeida|MED|12|77|156.647.847|1995||177||58|36.42.53|
Branimir Kalaica|DEF|40|75|140|1998||192||40|7|
André Moreira|GR|127|74|582.110.878.137.163.99.349.120.391.56.912|1995||192||127|51|
Rui Pedro (1998)|MED|127|74|325.149.891.726.520.669.411|1998||182||127|39|
Dinis Almeida|DEF|127|73|137.937.744.538|1995||190||127||
Ivanildo Fernandes|DEF|23|73|582.856.180.812.72.910.597|1996||194||127|47|
Iago Maidana|DEF|16|73|240.834|1996||195||16||
Léo Natel|AVA|16|73|200|1997||179||16||E
Walter González|AVA|122|70|92.776|1995||175||122||
Takuma Nishimura|AVA|86|78|194.690.940.786.546|1996||178||86||
Hamdou Elhouni|AVA|95|74|776.214.265|1994||172||95||E
Bruno Almeida|AVA|127|63|860.776.346|1996||172||127||D
Thomas Rodríguez|AVA|29|70|125.378.909.864.174|1996||185||29||D
Alex Pinto|DEF|127|69|908.380.346.92|1998||187||127||
Kennedy Boateng|DEF|149|72|501.761.776.308.41|1996||191||60||
Naoufel Khacef|DEF|5|65|847.374|1997||179||5||
Sandro Cruz|DEF|3|68|140.214.380|2001||187||127||
Paulinho Bóia|AVA|16|75|834.690.462.559.78.498.570.597|1998||171||16||E
Léo Cordeiro|MED|16|67|380.904.547.295.880|1995||178||16||
Rafa Rodrigues|DEF|127|66|21|2002||174||127||
Owen Beck|DEF|123|71|345.155.272.532|2002||177||123||
Kelian Nsona|AVA|58|71|759.418.310.200|2002||189||58||E
Daniel Mantilla|AVA|33|62|27.441.106.260.605.567.534|1996||173||33||E
Enzo Martínez|DEF|157|71|677.847.917.701.649.255.382|1998||183||157||
Loreintz Rosier|MED|58|70|292.362.44|1998||190||58||
Felippe Cardoso|AVA|16|71|689.777.202.358.200.34.50|1998||187||16||
Zié Ouattara|DEF|39|71|20.908.690.519.714|2000||176||39||
Nikolaos Athanasiou|DEF|63|64|113.632.732.623|2001||177||63||
Gerson Sousa|AVA|127|66|295.488|2002||178||127||D
Simão Rocha|DEF|127|67|668.724.851.191|2000||186||127||
Hevertton|DEF|127|63|295.698.908.380|2001||182||16||
Otso Liimatta|MED|57|71|345.914.406|2004||169||57||
Jorge Meireles|AVA|127|67|295|2004||180||127||E
Daniel Jr|MED|16|71|242.34.280.78.693.597|2002||177||16||
Xander Severina|AVA|42|71|10.665.545.200|2001||185||124||D
Tiago Almeida|DEF|127|64|847|2001||177||127||
N'Dri Koffi|AVA|39|64|819.820.668|2002||183||39||
Rildo|MED|16|64|279.395.776.690.462.389.693.525|2000||178||16||
Rémy Vita|DEF|34|73|862.129.362.75.847|2001||170||58||
Benchimol|AVA|23|76|292.35|2001||187||23||
Houssem Mrezigue|MED|5|70|910.267|2000||185||5||
Diego Callai|GR|16|63|349.812|2004||192||16|47|
Alan Núñez|DEF|122|72|597|2004||176||122||
Paulo Vitor|DEF|16|65|597.35.908.21|2001||190||16||
Brian Mansilla (2002)|AVA|157|68|677.255.92|2002||176||157||E
André Vilas Boas|MED|127|71|732.325.554.690|1983||185||127|39|
Paulo Sérgio|MED|127|73|812.27.120.295.265.690.629.908.92|1984||165||127|25.32.40.46|
Rodrigo Defendi|DEF|16|76|853.871.737.118.653.659.908.159.280.593.265|1986||188||16|46.50|
Pedro Taborda|GR|127|69|363.325.910.604.748.582|1978||190||127|7|
Bruno Veríssimo|GR|127|66|629|1976||173|0|127||
Ricardo Batista|GR|3|74|367.543.936.812.629.597.909.200|1986||185||127|40|
Cris|MED|127|67|349.27.98|1984||178||127|12|
Ivanildo|AVA|70|73|325.519.27.380.690.629|1986||175||70|28.52.7|D
Vítor Vinha|DEF|127|67|27.295.265.629.380.136.345|1986||181||127|52|
Olberdam|MED|16|70|554.163.102.326|1985||182||16||
Ricardo Pateiro|MED|127|67|851.597.519.732|1980||178||127|39|
Pintassilgo|MED|127|69|908.582.92|1985||168||127||
Halisson|DEF|16|66|777.693.380.627|1985||189||16||
Christian Pouga|AVA|24|73|338.520.554.625.639.529.149|1986||193||24||
André Schembri|AVA|101|75|278.352.656.633.149|1986||178||101||
Vinicius|MED|16|71|597.878.265.629.163.582.17|1986||186||16|32.34|
Dejan Mezga|MED|40|69|593.405.87.597|1985||175||88||
Celestino|MED|127|73|812.292.295.120.191.629|1987||177||23|40|
Rene Mihelic|MED|53|74|593.597.525|1988||177|3|88||
Diogo Cunha|MED|127|64|629.349.582.214|1986||170||127||
Rui Sampaio|MED|127|71|214.669.136.196.629.92.727|1987||186||127|34.52|
Tozé Marreco|AVA|127|71|645.66.786.265.878.604.136.847.629.585.214|1987||183||127||
Zequinha|AVA|127|67|909.658.92.597|1987||183||127||
Vladan Giljen|GR|109|67|597.624|1989||187||88||
Diogo Rosado|MED|127|71|812.724.669.349.146.909.5.668|1990||185||127|40.41|
João Gonçalves (1988)|DEF|127|71|812.629.908|1988||180||127|28.40.46.52|
Tiago Terroso|MED|127|70|732.891.519.220.629.909|1988||178||127||
Paulo Tavares|MED|127|67|520.292.909|1985||179||127||
Leandro Pimenta|MED|127|71|140.136.380|1990||179||127|30.34.7|
Zezinho|MED|16|72|462.777.279.102.211.597|1992||174||16|50|
Dejan Skolnik|MED|40|70|593.597|1989||181||88||
Jaime Simões|DEF|127|67|136.191.87.878|1989||188||127|34|
Bolívia|MED|15|78|102.353.355.397.604.792.582|1985||180||16||
Viktor Lundberg|AVA|142|73|14.716.554|1991||183||||
Palmeira|DEF|127|70|163.295.910.847.120.137.200|1989||187||127|30.32.34|
Alex Gonçalves|AVA|16|72|358.443.79.582.938|1990||182||16||
Assis|GR|16|65|120.363.908.149|1989||187||16|46|
Adama François|DEF|135|67|149.909.122|1989||194||135||
Luisinho|AVA|127|63|28.149|1990||170||127||D
Pedro Queirós|DEF|127|69|668.631.349.909.214|1984||182||127|46|
Nélson Pedroso|DEF|127|64|909.668|1985||180||127|41|
Sebastian Mladen|DEF|132|68|737.335.629.655|1991||183||132||
Sema Velázquez|DEF|159|74|905.654.92|1990||184||159|28|
Mika (1987)|DEF|127|64|349.92|1987||180||58||
Khalil Chemmam|DEF|151|73|908|1987||180||151|46|
Freire|DEF|16|74|667.811.659.908.597.87.214|1989||187||16|46|
Fidelis|AVA|16|70|554|1989||185||16||
Zé Manuel|AVA|127|70|163.910.149.325.909.930.349.776.732.597.631|1990||178||127|39.52|D
Elizeu|MED|16|71|811.159.570.597.292.280.689|1989||183||16|38|
Afonso Taira|MED|127|70|246.292.314.120.200|1992||177||127||
Renato Santos|AVA|127|71|732.582.265.847.149.912|1991||175||127|28.39|D
Siaka Bamba|MED|39|65|214.349.908|1989||178||39|34.46|
João Silva (1990)|AVA|127|76|265.299.519.909.525.128.652.668.118.764.349.295.445|1990||189||127||
Ricardo Nascimento|DEF|16|71|653.669.690.582.27|1987||191||16||
Rafaël Dias|MED|127|70|330.5.867|1991||180||127||
Nwankwo Obiora|MED|115|76|722.440.663.650.191.246.27.522.149.214|1991||186||115|43|
Marco Baixinho|DEF|127|64|547.668|1989||186||127||
Kadú|GR|3|72|325.891|1994||190||3|32.35.39.41.52.55|
Buatu|DEF|3|74|822.377.367.919.732.585.265.797.301.885.380|1993||187||20||
Jason Davidson|DEF|8|76|668.748.417.924.425.312.404.672.873.556.466.657|1991||180||8|46|
Semedo (1988)|MED|23|70|690.554.629.380.349|1988||184||127||
Edder Farías|AVA|159|65|878|1988||184||159||
Rafael Crivellaro|MED|16|70|397.908.860.930.92.349|1989||183||16|46|
Peter Suswam|DEF|115|71|909|1991||185||115||
Adilson Goiano|MED|16|64|92|1988||180||16||
Marwan Mohsen|AVA|47|77|380|1989||188||47|20|
Frédéric Mendy|AVA|70|72|292.582.878.909|1988||192||58|38|
Renê Santos|DEF|16|74|395.485.554|1992||184||16||
Bruno Lopes|AVA|16|74|355.78.903.86.68.292|1986||167||16|38|
Quentin Beunardeau|GR|58|72|512.19.323.265.380|1994||185||58||
Leandro Barrera|AVA|4|71|756.554|1991||179||4||E
Abel Camará|AVA|70|72|120.295.136.676.137.547|1990||186||70||
Rafael Costa|MED|16|71|582.149|1991||183||16||
André Micael|DEF|127|70|582.629.668|1989||187||127|52|
Miguel Lourenço|DEF|127|65|909.200.776|1992||186||127||
Kuca|AVA|23|72|214.292.477.120.137.732.92.149.314.349|1989||181|15|23||E
Mateus Silva|MED|16|67|668|1991||184||16||
Brayan Beckeles|DEF|72|74|149.605|1985||186||72||
Alireza Haghighi|GR|80|78|745.748.669.554|1988||193||80|20|
Caio Secco|GR|16|67|235.192.280.663.241.349.554.669.582|1990||194||16||
César|GR|16|74|357.689.353.279.149|1992||194||16|30|
Mica Pinto|DEF|94|73|120.137.878.362.807.907.195.309|1993||176||94||
Bruno Brígido|GR|16|69|240.235.396.349.295.28|1991||187||16||
Cláudio Winck|DEF|16|72|443.416.211.811.892.554.484|1994||183||16||
João Teixeira|MED|127|71|140.908.934.617.909.214.732.380|1994||178||127|18.30.31.32.38.46.52|
Tomás Podstawski|MED|127|75|909|1995||182||127||
Leandro Silva|MED|127|70|27.668.92|1994||173||127||
Franck Bambock|MED|58|72|754.807.246.554.393.348.655|1995||181||24||
Éber Bessa|MED|16|71|579.242.554.909.597|1992||168||16||
Uche Nwofor|AVA|115|75|717.884.414.529.149|1991||184||115|28|
Omri Altman|AVA|83|72|367.542.654.92.13.912|1994||181||83||
Ygor Nogueira|DEF|16|72|465.358.355.192.380.555.462.776.214|1995||187||16||
André Sousa (1990)|MED|127|70|136.748.28.120.137.813.374.904.597|1990||181||127|34|
Lucas Tagliapietra|DEF|16|69|409.149.690|1990||194||16||
Fernando Ferreira|MED|127|69|200.724.28.847.120.137.554|1986||183||127||
Joel Pereira (1996, RKC Waalwijk)|GR|127|66|552.137.909.413.707|1996||189|0|143|31.47.54|
Nino Galović|DEF|40|74|801.404.92|1992||186||40||
Vítor Gonçalves|MED|127|70|690.380.597.200.346.547|1992||174||127||
Jander|DEF|16|70|462.629.380.582|1988||183||16|52|
Arnold|AVA|129|67|214.909.759.346.748|1992||185||161||D
Andreas Karo|DEF|31|72|87.651.510.764.554.17.623.314|1996||190||31||
Larry Azouni|MED|151|75|553.319.622.470.597|1994||175||58||
Talocha|DEF|127|63|345.910.149.113.380.346.847.891|1989||180||127||
Alex Soares|MED|127|63|657.554.633.582.912.292|1991||179||127||
Avto|AVA|61|65|631.380.597.214|1991||178||61||E
Gabriel Moura|DEF|16|71|669.380.83.785.308|1988||170||16||
Douglas Grolli|DEF|16|73|211.395.833.537.242.689.554|1989||190||16|50|
Vaná Alves|GR|16|71|211.235.349.325.345|1991||194||16|52.7|
Jhonatan|GR|16|65|582.908.732|1991||189||16||
Matheuzinho|MED|16|68|704.234.397.292|1993||171||16||
Miguel Vieira|DEF|127|70|668.265.131.919|1990||190||127|41|
Igor Julião|DEF|16|70|358.476.353.910|1994||175||16||
Jonatan Lucca|MED|16|73|737.102.397.120.346.21|1994||184||16||
Pedro Pinto|DEF|127|66|909|1994||185||127||
Cleyton|MED|16|64|27|1990||176||16|52|
Adam Dzwigala|DEF|126|71|454.515.401.931.265.817|1995||185||126||
Afonso Figueiredo|DEF|127|72|149.731.525.732.265.582|1993||170||127||
Santiago Montoya|MED|33|71|892.908|1991||173||33|32.52|
Pecks|DEF|23|70|380|1993||192||23||
Xavier|AVA|127|65|349.520.554.668.847.654.292.522|1992||180||127||E
Platiny|AVA|16|66|86.349.265.214|1990||178||16||
Jordi|GR|0|71|892.668|1993||192||||
Perdigão|AVA|16|63|345.265.214.149|1991||185||16||D
Uillian Correia|MED|16|67|668.349.202.242|1989||184||16|34.41.50|
Xande Silva|AVA|127|74|908.925.90|1997||177||127|32.52|D
Georgemy|GR|16|68|242.292.908.396.192.903.240.570|1995||198||16||
Ji-su Park|DEF|37|64|434.829.381.690.458|1994||184||37||
Welinton Junior|AVA|16|75|265.690|1993||178||16||D
Crislan|AVA|16|74|102.621.163.847|1992||186||16|32.41.9|
Felipe Abner|DEF|16|76|235.292.102.346.708.869|1996||171||16||
Flávio Ramos|DEF|16|65|349.376.668|1994||191||16||
Didi (1994)|MED|127|62|908|1994||177||127||
Christian|MED|16|67|17.86.191.597.668|1989||181||16||
Sandro Lima|AVA|16|66|86.732.28.214.292.380.376.399.670.111.74|1990||186||16|39|
André Ferreira|GR|127|71|520.265.776.668.390.886.582|1996||193||127||
Pedro Pacheco|DEF|127|63|132.547.776|1997||189||127||
Carraça|DEF|127|68|149.847.776.325.120.380.214|1993||177||127|28|
Simãozinho|DEF|127|63|860.163|1995||180||127|32|
Danielzinho|MED|16|62|27.659.353.627.570.834|1994||166||16||
Kuni|MED|86|74|200|1997||173||86||
José Gomes|DEF|127|70|163.669.214.597|1996||185||127||
Amine Oudrhiri|MED|102|69|727.600.5.193.520.346.732.295|1992||184||58|44.52|
Lucas Possignolo|DEF|16|67|690.834|1994||188||16||
Diego Moreno|MED|33|64|286.554.436|1996||186||33||
Brayan Riascos|AVA|33|73|234.860.704.345.631.597.559.391.48.554.374|1994||183||33||
Rivaldinho|AVA|16|73|149.443.308.525.335.877|1995||186||16||
Bruno Paz|MED|3|74|812.346.492.640.988|1998||182||127|32.47|
Nicolas Janvier|MED|58|74|731.908.65|1998||173||58||
Óscar Barreto|MED|33|65|732.776|1993||173||33||
João Virgínia|GR|127|78|93.299.720.812.747|1999||193||127|11.15.38.43.47|
Erick Ferigra|DEF|49|74|848.97.507.668.11|1999||180|1|49||
Patrick Andrade|MED|23|74|582.665|1993||190||23||
Bruno Santos|DEF|16|62|363.668|1993||183||16||
Seydou Sy|GR|135|74|587|1995||192||135|34.4|
Pedro Nuno|MED|127|71|27.140.847.582.120.30.493.640|1995||174||127|46|
Ricardinho (1994)|DEF|127|70|380.676|1994||179||127||
Zé Gomes|AVA|127|76|140.690.515.191.863.220|1999||178||70|18.30.46.7|
Caju|DEF|16|74|777.17.163.389.808|1995||185||16|28|
Rafael Silva|AVA|16|72|693.380.450.892.242|1990||182||16|34.50|
Zakaria Naidji|AVA|5|64|380.819|1995||178||5||
Marlos Moreno|AVA|33|80|106.262.551.386.357.778.690.536.470.862.492.189|1996||172||33|20.26.30|E
Ronie Carrillo|AVA|49|64|503.183.690.462|1996||188||49||
Mateus Pasinato|GR|16|62|582|1992||192||16||
Witi|AVA|110|73|597|1996||178||110||E
Dénis Duarte|DEF|127|69|851.908.669.846|1994||190||127|32.52|
João Lameira|MED|127|69|325.519.27.724.851.124.640.877|1999||175||127|52|
Júnior Tavares|DEF|16|73|768.690|1996||178||16||
Valeriy Bondarenko|DEF|153|72|324.788.908.913.491|1994||194||153||
Sergio Bermejo|AVA|54|72|203.779.283.380|1997||170||54||D
Maracás|DEF|16|69|280.79.627.668.582|1994||184||16||
Wellington Carvalho|MED|16|66|690|1992||182||16||
Kelechi Nwakali|MED|115|77|93.884.325.754.9.688.214|1998||181||115|15.52|
Kikas|AVA|127|65|120.904.547.519.295.466|1998||176||127||
Lucas Taylor|DEF|16|70|653.240.659.646.292.749.642.788.687|1995||177||16|50.9|
Jadson|DEF|16|70|690|1991||186||16||
Till Cissokho|DEF|58|72|223.295.736|2000||200||58||
Yann Kitala|AVA|129|71|319.330.511.71.910|1998||186||58||
Rodrigo Escoval|DEF|127|72|591.404.83.912.910.35|1997||187||127||
Diogo Calila|DEF|110|71|120.776|1998||180||127||
Rui Pires|MED|0|74|668|1998||182||||
Aleksandar Busnic|MED|145|68|711.911.910|1997||191||160||
Pedro Marques|AVA|127|68|309.380.812.345.589.87|1998||181||127||
Tashan Oakley-Boothe|MED|76|74|147.295|2000||182||76||
Mamadou Traoré|DEF|100|63|554|1994||191||100||
Rafael Gava|MED|16|67|668|1993||178||16||
Jhon Velásquez|MED|33|63|437.534.346.361|1995||174||33||
Romain Correia|DEF|127|71|325|1999||187||58||
Kevin Krygård|MED|116|66|412.200.531|2000||184||116||
Lucas França|GR|16|72|242.597.202.396|1996||194||16|50|
Hamidou Keyta|AVA|58|70|763.335.305.776.699.492|1994||186||58||E
Tianyu Guo|AVA|30|69|910|1999||192||||
Claudio Falcão|MED|16|64|265.346|1994||170||16||
Daniel Fuzato|GR|16|75|653.737.380.379.753.892|1997||190||16|31.41|
Benny (1997, Kifisia)|MED|127|66|520.860.668.214.748.904.21.582.488|1997||176|0|127||
Mehdi Merghem|AVA|5|70|502.398.19.346.746|1997||185||58||D
Celton Biai|GR|70|71|908.309|2000||188||127||
Pablo Moreno|AVA|54|66|554|2002||178||54||
Bobsin|MED|16|70|395.776.248.249|2000||182||16|50|
Kyosuke Tagawa|AVA|86|78|333.776.413.482|1999||182|2|86||
Radivoj Bosic|AVA|145|65|294.665.597.808.455.713.343.973|2000||183||160||E
Georgios Liavas|MED|63|67|655.732|2001||175||63||
Rodrigo Fernandes|MED|127|72|812|2001||184||127|47|
Tchamba|DEF|24|72|293.826.835.200.730|1998||191||24||
Antef Tsoungui|DEF|20|70|536.354.309.625.292|2002||185||20||
Reynaldo|DEF|16|64|582|1997||186||16||
Nélson da Luz|AVA|3|63|908|1998||177||3||E
Iván Barbero|AVA|54|72|638.72.9.262.92|1998||187||54||
Samuel Obeng|AVA|60|71|723.754.200.67|1997||183||60||
Gabrielzinho|AVA|16|65|102.732.582.62|1996||181||16||E
Ricardo Matos|AVA|127|64|97.629.690.120.137.306.304|2000||181||||
João Tomé|DEF|127|68|732|2003||185||127||
Ivan Dolcek|AVA|40|70|801.405.345.273|2000||181||40||E
Francisco Meixedo|GR|127|71|325.295.349|2001||190||127|7|
Diego Collado|AVA|54|65|905.380|2001||183||54||E
Frederik Winther|DEF|43|72|540.115.172.292.410|2001||186||43||
Tiago Esgaio|DEF|127|63|851.120.163.92|1995||175||127||
Kiko Bondoso|AVA|127|66|910.542.732.582|1995||169||127||E
Pablo Roberto|MED|16|63|903.730.200|1999||183||16||
Tiago Manso|DEF|127|62|860.137.847|1999||174||127||
Jeremy Antonisse|AVA|42|78|648.310.582.488|2002||184|26|124||E
Dudu Teodora|AVA|16|68|358.689.597.555|1999||179||16||
Samuel Teles|MED|127|63|349.640.877|1997||180||127||
Matheus Teixeira|GR|16|70|279.240.732|1999||188||16||
Pedro Pelágio|MED|127|66|554|2000||179||127||
João Paulo (1998)|MED|23|74|349.640.339|1998||176||23||
Paulo Eduardo|DEF|16|63|776|2002||187||16||
Matheus Bueno|MED|16|74|235.380.396.791|1998||178||16||
Tamás Nikitscher|MED|73|70|886.732|1999||193||73||
Kevin Villodres|AVA|54|68|380|2001||173||54||E
Pedro Bicalho|MED|16|71|242.653.776.280.74.699|2001||179||16|50.9|
Rhaldney|MED|16|63|621.111.402.74|1998||184||16||
Fabio Blanco|AVA|54|70|281.554.908|2004||173||54||E
Luquinha|MED|16|64|537.690|2000||167||16||
Vasco Moreira|MED|127|62|350.74|2001||180||127||
Vinicius Mingotti|AVA|16|70|102.570.279.582|2000||182||16||
Jesús Castillo|MED|125|79|380|2001||185|9|125||
Vladislav Morozov|AVA|14|73|92.668|2000||188|16|14||
Juan Castillo|GR|33|68|361.908|2003||190||33||
Rodrigo Varanda|AVA|16|63|234.211.78.776|2003||180||16||D
Ricardinho (1998)|AVA|127|65|776.851.317|1998||178||127||E
Yaw Ackah|MED|60|69|149.486.121|1999||169||60||
Malik Abubakari|AVA|60|74|582.200.550.900.540|2000||185||60||
Daniel Rivas|DEF|122|70|598.21|2001||177||122||
Jhonata Robert|AVA|16|67|345|1999||179||16||D
Bernardo Folha|MED|127|71|325|2002||180||127|52|
Cristian Devenish|DEF|33|71|149.106.732.21|2001||185||33|28|
Samuel Justo|MED|127|68|200.346|2004||178||127||
Jajá (2001)|AVA|16|71|192.242.102.850.200.651|2001||177||16||E
David Sousa|DEF|16|70|159.207.708.200|2001||190||16||
Pastor|DEF|16|66|537.353.520.690.346.195|2000||176||16||
Wallisson|MED|16|63|689.242.582.78.235|1997||184||16||
André Lacximicant|AVA|127|65|200.292|2001||190||127||E
Roberto Hinojosa|AVA|33|63|690|1999||170||33||D
Stênio|AVA|16|62|242.21.480.78|2003||182||16|50|D
Renato Júnior|AVA|16|71|690.389.900.62|2002||183||16||
Baptiste Roux|DEF|58|67|398.21.343.877|1999||190||58||
Alioune Ndoye|AVA|135|68|786.908|2001||191||135||
Miguel Menino|MED|127|63|812.346|2003||181||127|7|
Lucas Freitas|DEF|16|65|887.886.653.582.211.462.892|2001||184||16|9|
Makan Aïko|AVA|58|71|512.362.847|2001||180||58||E
Cauê|AVA|16|65|536.380.200.240|2002||184||16||
Vando Félix|AVA|70|66|851.908.911|2002||179||70||E
Tobías Medina|AVA|4|64|771.732|2004||170||4||E
Diogo Spencer|DEF|127|63|140.21.74|2004||178||||
Dylan Nandín|AVA|157|65|710.92|2002||179||157||
Ryan Guilherme|MED|16|63|149.519.242.732|2002||188||16||
Issiaka Kamate|MED|58|66|440.21.575|2004||186||58||
Óscar Rivas|DEF|54|66|9.908|2000||193||54||
Eric da Silva Moreira|DEF|2|71|817.617.732|2006||185||2|39|
Diogo Fernandes|GR|127|62|325|2005||185||127||
Henrique Arreiol|MED|127|71|812.517|2005||187||127|7|
Arthur Sales|AVA|16|71|668|2002||184||16||
Yago Cariello|AVA|16|68|690.373.873|1999||185||16||
Yellu Santiago|MED|54|72|379.416.92|2004||192||54||
Martín Tejón|AVA|54|66|888.554|2004||165||54||D
Karem Zoabi|AVA|83|66|732|2006||184||83||
Thiago Balieiro|DEF|16|63|908|2003||190||16||
Agustín Moreira|AVA|157|63|380|2001||187||157||D
Omar Fayed|DEF|47|74|619.351.135.92|2003||198||47|31|
Miro|AVA|3|65|380.847.267|2003||183||3||
Theofanis Bakoulas|MED|63|63|632.732|2005||180||||
Mateo Flores|MED|54|68|143.142.92|2004||178||54||
Jonatás Noro|DEF|127|63|163|2005||187||127||
Juanse Rodríguez|MED|49|63|503.847|2006||175||49||
Renan Santana|DEF|16|62|345|2005||182||16||
Umar Abubakar|AVA|115|68|345|2006||190||||
Leandro Santos|DEF|127|68|140.582|2005||181||127|18|
Landerson|AVA|16|63|582|2006||168||16||E
Filipe Anunciação|MED|127|65|349.668.265.149.582|1979||179||127|41.46|
Amoreirinha|DEF|127|73|74.140.292.295.191.870.27.909.776.669|1984||180||127|12.25.7|
Barge|DEF|127|64|349.292.120.631|1984||174||127||
Filipe da Costa|AVA|127|72|163.728.445.11.516.195.525.597.292.657.897|1984||180||127||E
Bruno Miguel|DEF|127|70|891.519.292|1982||188||127|38|
André Marques|DEF|127|73|812.519.363.909.448.136.329.582|1987||186||127|34.40|
Miguel Oliveira (1983)|DEF|127|70|163.292.582.92.214|1983||186||127|28|
João Coimbra|MED|127|71|140.597.554.380.292.28.326|1986||183||127|25.38|
Cédric Collet|AVA|64|72|193.855.818.703.822.820.136.867|1984||182||58||E
David Fleurival|MED|64|72|855.149.703.502.323.136.210.11|1984||184||58||
Igor Stefanovic|GR|145|70|713.776.92.214.582|1987||192||88||
Selim Bouadla|MED|58|71|511.662.27.819|1988||171||58||
Tengarrinha|MED|127|74|325.295.629.776.909.195.363.214.149|1989||187||127|12.28.59.7|
João Luiz|MED|16|67|554.136.30|1985||182||16|34|
Tiago Cintra|AVA|127|64|520.136.265.363|1989||185||127||
Félix Micolta|AVA|33|73|2.634.259.260.106.554.436.317|1989||179||33||
Elízio|DEF|16|65|903.669.86.380.582.87|1988||176||16||
João Dias|DEF|127|70|325.694.776.860.27.149|1986||180||127|52.7|
Trigueira|GR|127|70|149.732.860.878.27.909.582.847.904.21|1988||192||127||
Manuel Curto|MED|127|71|295.851.292.604.519.944.529|1986||186||127||
Kalidou Yero|AVA|135|72|316.325.690.631.380.669|1991||196|2|135|12.28.59.7|
Luís Felipe|DEF|16|72|653.704.240.140.909|1991||180||16|18.30.31.38.46.50|
Fábio Pacheco|MED|127|67|909.554.582|1988||178||127||
Luís Ribeiro|GR|127|63|292|1992||185||127||
André Fontes|MED|127|67|27.349.604.669.582.214|1985||179||127|12|
Emiliano Albín|DEF|157|74|677.150.92|1989||170||157||
Tony Taylor|AVA|121|72|292.633.607.609.668|1989||183||45|38|D
David Bruno|DEF|127|72|325.860.363.847.292|1992||176||127|12.28.32.35.39.41.55.59.7|
Pierre Sagna|DEF|135|70|582.120.776.655|1990||183||135||
Ramazotti|AVA|16|74|380.119.338.704|1988||193||16||
Vítor Bruno|DEF|127|65|669.191.349.149|1990||171||127||
Vasco Rocha|MED|127|64|265.668.349|1989||182||127|41|
Diego Galo|DEF|16|65|847.631.92.878.582.265|1984||185||16||
Filipe Melo|MED|127|66|136.92.604.582.789.668.214.346|1989||189||127|34|
Hélder Tavares|MED|23|67|136.640.847.73.385|1989||180|4|127||
Michael Uchebo|AVA|115|76|717.884.207.149|1990||204|5|115||
Fábio Nunes|AVA|127|73|690.325.663.146.508.120.137.847.16.346|1992||177||127|12.59.7|E
João Amorim|DEF|127|68|908.363.28.120.137|1992||178||127|46|
Vinicio Angulo|AVA|49|67|438.668|1988||189||49|41|
Edu Machado|DEF|127|64|214.363.847.149|1990||175||127||
Afonso|AVA|16|73|372.27.192|1991||172||16||
Daniel Martins|DEF|127|66|136.137|1993||189|0|127||
André Teixeira|DEF|127|67|120.137.520.547.860.488.83|1993||170||127||
Ricardo Ribeiro|GR|127|69|582.292.28.629.120.137.668|1990||183||127|38|
Nemanja Petrovic|DEF|145|72|665.214.602.711.343|1992||176||88||
Marllon|DEF|16|72|357.149.111.689.234.279.242.202.730|1992||186||16||
Josip Vukovic|MED|40|65|405.591.630.554.594.670.490|1992||186||40||
Ousmane Dramé|AVA|58|71|650.97.513.895.812.582.120|1992||174||58|30.32.38.47|E
Reiner Ferreira|DEF|16|71|86.240.62.396.462.27.29|1985||185||16|52|
João Meira|DEF|127|70|909.547.120.137.217.916|1987||185||127||
Anderson Carvalho|MED|16|77|777.906.149.852.776|1990||174||16||
Abdullah Al-Jawaey|AVA|7|67|554.61.251.60.42|1995||167|||55|E
Tiago Galvão|MED|16|67|667.244.214|1989||185||16||
Bruno Pirri|DEF|16|65|909|1992||184||16||
Yves Baraye|AVA|135|71|218.461.663.380.120|1992||177||135||D
Jô|AVA|16|69|519.582.591.405|1988||170||16||
Filipe Chaby|MED|127|66|812.878.137.120|1994||174||127|28.30.32.34.38.47|
Alhassane Keita|AVA|68|72|323.866.529.554.120|1992||183||68||
João Nunes|DEF|127|71|515.654.200|1995||188||127||
Carlos Santos|DEF|127|62|149|1989||188||127|28|
Mansur|DEF|16|73|279.280.112.357.811.659.776.295.113|1993||181||16|50|
Mauro Caballero|AVA|122|71|528.325.669.265|1994||175||122|41|
Magique|AVA|39|65|27.860|1993||180||39|52|E
Nelson Bonilla|AVA|48|71|335.597|1990||178||48||
Erivelto|AVA|16|64|149|1988||184||16||
Lolo Plá|AVA|54|71|887.886.187.245.283.384|1993||182||54||
Wellington|AVA|16|67|349|1987||186||16||
Luís Aurélio|MED|127|70|582.847.597.349.191|1988||179||127||
Kukula|AVA|23|69|554.349|1993||175||23||
Davi Mbala|AVA|129|63|669.149|1993||175||161||E
Nelsinho|DEF|16|65|690.92|1988||175||16||
Edson Farias|AVA|16|68|348.668.349|1992||170||16|41|D
Fabijan Buntic|GR|40|71|315.910.699|1997||194||2||
Heinz Mörschel|MED|131|72|422.274.910|1997||190||131||
Martin Chrien|MED|52|72|902.179.140.776|1995||182||52||
João Graça|MED|127|68|349.92.631.520.547.732|1995||177||127||
Luís Mata|DEF|127|75|944|1997||181||127||
Pedro Delgado|MED|127|75|265|1997||186||127||
João Camacho|AVA|127|71|597.582.478|1994||174||127||D
Kiki (1994)|DEF|127|67|732.380.629.349.350.120.910.880.21|1994||181||127|39|
Sebastián Ayala|MED|33|67|441.597|1995||181||33||
Berto|AVA|23|72|617.517.615.909.690.863|1996||177||127||D
Rafael Ramos|DEF|127|64|637.776|1995||170||127||
João Góis|DEF|127|63|878.214.668|1990||174||127||
Bruno Lourenço|MED|127|64|265.292.149.21|1998||179||127||
Madi Queta|AVA|70|73|346|1998||180||70||E
Breno Lorran|DEF|16|71|395.908|1995||178||16|32.46.50.52|
Barnes Osei|MED|60|69|668.878|1995||171||60|41|
Ronan|AVA|16|71|358.395.732.847|1995||195||16|50|
Joca|AVA|127|66|163.847.732.520.376.912|1996||167||127||D
Jaume Grau|MED|54|73|638.187.847.779.21|1997||182||54||
Leonardo Ruiz|AVA|33|72|106.812.149.948.891.292.732.327|1996||185||33||
Rodrigo Borges|DEF|127|63|163|1998||187||127||
Tiago Castro|MED|127|66|909|1996||176||127||
Joseph Amoah|MED|60|69|908|1994||198||60||
Rodrigo Abascal|DEF|157|69|677.149.908|1994||187||157||
Roko Baturina|AVA|40|74|352.514.593.709.380.586|2000||187||40||
Lenny Vallier|DEF|58|68|820.666.210.398.597|1999||178||58||
Lucas Marques|MED|16|62|776|1995||176||16||
Emmanuel Hackman|DEF|149|63|149.690.380|1995||187||60||
Carles Soria|DEF|54|69|13.292.643.644.912|1996||173||54||
Ziga Frelih|GR|53|71|380|1998||197||53||
Messias|DEF|16|71|732|1994||190||16||
Renato Pantalon|DEF|40|65|732.295.453|1997||194||40||
Álex Millán|AVA|54|72|905.207.875.345.723.346.307.186|1999||185||54||
Fuki Yamada|AVA|86|74|498.844.597.333|2001||180||86||D
Capixaba|AVA|16|70|112.353.78.211.903.27.462.208.791|1997||170||16||E
Benny (1997, B SAD)|MED|127|66|137.120|1997||177|0|127||
Murilo (1996)|AVA|16|68|847.732.668|1996||174||16||E
Abou Ouattara|AVA|18|72|471.530.908|1999||176||39||D
Álex Bermejo|AVA|54|72|189.174.346|1998||183||54||E
Andrés Sarmiento|AVA|33|64|585.106.70.2.910.183|1998||170||33||E
Marian Huja|DEF|127|67|676.685.191.989|1999||193||127||
Miguel Reisinho|MED|127|68|149|1999||184||127|28|
Rodrigo Valente|MED|127|63|292.776|2001||173||127||
Leonardo Rocha|AVA|127|71|536.466.708.714.715.944|1997||200||127||
Nabil Touaizi|MED|102|71|291.104.67.74|2001||183||54||
Rafael Brito|MED|127|67|554.200.640|2002||180||127||
Harouna Sy|DEF|58|65|727.869.75.912.292|1996||170||58||
David Luís|DEF|16|66|908|1995||180|0|16||
Bandeira|DEF|127|63|75.28.496|2001||182||127||
Alex Méndez|MED|45|74|910|2000||178||45||
Duarte Valente|MED|127|65|292|1999||182||127||
Yusuf Lawal|AVA|115|71|469.92|1998||175||115||E
Cedric Teguia|AVA|54|70|104.723.67.246.307.582|2001||180||24||E
Léo Andrade|DEF|16|68|462.554.487.644.730|1998||189||16||
Khalid Hachadi|AVA|102|69|909|1998||190||||
Abdullahi Tanko|AVA|115|63|380.214.765.126.660|1998||171||||D
Hélder Sá|DEF|127|63|908.714.732|2002||187||127||
Talys|DEF|16|62|594.651.801.346|1999||179||16||
Pedro Amador|DEF|127|71|163.582.108|1998||181||127||
Chico Banza|AVA|3|65|83.690.295|1998||182||3||E
Guilherme Montóia|DEF|127|65|295.454|2003||185||127||
Anderson Oliveira|AVA|16|67|537.690.389.829.327|1998||169||16||E
Ibrahima Camará|MED|68|70|582.149.714|1999||190||68||
Ángel Torres|AVA|33|72|74.205.275.301|2000||182||33||D
Momo Diaby|MED|58|66|776.668.690.789|1996||197||58||
Pablo Gozálbez|MED|54|68|888.92|2001||171||54||
Yevgeniy Serdyuk|AVA|153|70|149|1998||185||153||
André Oliveira|MED|127|62|325|2005||186||127||
Andrézinho|AVA|127|64|74.200.547.776.640|1996||174||127||E
Shaquil Delos|DEF|58|64|292|1999||183||58||
Mor Ndiaye|MED|135|67|292.474.685|2000||185||135||
Dailon Livramento|AVA|23|74|735.416.200|2001||185||124||
Jota Gonçalves|DEF|127|66|847.910|2000||186||127||
Nachon Nsingi|AVA|20|65|625.869.554.505|2001||176||20||
Jajá (1998)|AVA|16|69|149.240.305.51.333.693.389.730|1998||175||16|28|E
Marcelo Alves|DEF|16|68|892.280.847.342|1998||188||16||
Diogo Ferreira|GR|127|63|140|2007||191||127||
Mamadou Tounkara|DEF|100|70|908|2001||192||58||
Matheus Índio|MED|16|63|833.860.908.911|1999||182||16||
Cédric Nuozzi|AVA|20|65|74|2006||177||20||E
Joshua Wynder|DEF|45|64||2005||183||45||
Ítalo|DEF|16|65|355.776.880|2002||191||16||
Konstantinos Kostoulas|DEF|63|65|632.732.623|2005||187||63||
Tunde Akinsola|AVA|115|71|887.886.21|2003||175||115||E
Joel Silva|MED|127|65|149.597|2003||185||127||
André Dhominique|DEF|16|63|279.295|2003||178||16||
Habraão|DEF|16|63|360.211.776.102|2001||184||16||
Saná Fernandes|AVA|127|70|510.588|2006||165||70|48|E
David Moreira|DEF|23|65|812|2004||171||127||
Kelliano|MED|3|72|295.34|2003||185||3||
Fabrício Garcia|AVA|23|63|292.74|2001||172||||D
Pedro Carvalho|DEF|127|63|137.292|2003||196||127||
Djé|MED|23|63|776|2003||178||||
Igor|AVA|127|73|163.909.295.446.523.386.189.658|1980||190||16|28|
Luís Olim|DEF|127|66|554|1981||178||127||
Ricardo Pessoa|DEF|127|69|909.690.582|1982||176||127|30|
António Filipe|GR|127|67|668.214.292.597.295.27|1985||187||127|41.46|
Cristóvão Ramos|AVA|127|69|669.520.83.525.492.633|1983||174||58||D
Luis Tinoco|DEF|127|67|380.136.582.292.604.92.847|1986||186||127|34.38|
Furtado|AVA|127|71|200.195.668.519.445.643.12.657|1983||181||23||
Guima|AVA|127|69|349.28.631.191|1986||190||127||
Duarte Machado|DEF|127|64|200.120.137.629|1983||175||127||
Gonçalo Abreu|AVA|127|70|554.891.349.669|1986||190||127||D
Igor Rocha|DEF|127|62|909|1984||186||127||
Pedro Correia|DEF|127|72|140.629.241.908|1987||180||127|25.32.46.52|
Bura|DEF|127|72|325.690.748.380.669.668.136.214.28|1988||191||127|12.28.46.59.7|
Ricardo Ferreira (1989)|GR|127|69|163.629.554.690|1989||186||127|30|
Yago Fernández|DEF|127|72|380.550.386.12.429|1988||192||127||
Rafa Sousa|MED|127|66|669.597.582|1988||186||127||
Jorge Monteiro|AVA|127|71|325.295.748.776.582.13.448|1988||171||127|28.7|E
Pires|AVA|127|64|910.265.349.582.690|1981||178||127|41|
Fábio Ervões|DEF|127|64|748.878.669.149.910|1987||188||127|28|
Daniel|DEF|127|66|380|1987||185|0|127||
Vítor Bastos|DEF|127|67|908.910.363.629.591.727|1990||190||127|46|
Paulo Regula|MED|127|67|909.629.604|1989||184||127|52|
Elton Monteiro|DEF|127|72|224.27.509|1994||192||143||
Élio Martins|AVA|127|65|214.136.878|1985||185||127|34|
Tiago Mesquita|DEF|127|68|66.604.860.363.149.349|1990||177||127|28|
Romeu|MED|127|66|668|1986||185|0|127|41|
Coronas|DEF|127|69|669.909.582.554|1990||176||127||
Rúben Brígido|AVA|127|70|519.554.640|1991||172||127||E
Nuno Lopes|DEF|127|65|149.631.136.732.87|1986||184||127|39|
Feliz|MED|127|66|732|1989||164|0|127||
João Reis|DEF|127|63|346.214.776.847.891.295.910|1992||178||127||
Tiago Caeiro|AVA|127|63|120.137|1984||192||127||
João Patrão|MED|127|63|520.214|1990||175||127||
Ruca|DEF|127|69|380.847.547.909|1990||189||127||
Luís Machado|AVA|127|65|847.349.582|1992||168||127||E
Cristian Ponde|AVA|127|73|812.748.480.391.346.554.349.876|1995||179||132|30.32.47|D
Kiko (1993)|DEF|127|65|909.28|1993||183||127||
Diogo Verdasca|DEF|127|74|325|1996||185||127|39.52|
João Vieira|AVA|127|64|519.554.851.214.582.910|1991||189||127||
Frédéric Maciel|AVA|127|66|585.582.380.891.851.640.990|1994||175||58||D
Nuno Campos|DEF|127|71|597|1993||176||127||
Adriano Castanheira|AVA|127|63|748.668|1993||170||143||E
Joel Ferreira|DEF|127|72|292|1992||180||127||
Pedro Silva|GR|127|64|847.910.292|1997||189||127||
Paulo Henrique|DEF|127|72|776.668.748.669.714.554|1996||180||127||
Carlos Fortes|AVA|127|71|163.910.877.904|1994||188||127|41.52|
Pedro Monteiro|DEF|127|65|363.163.87.668.292|1994||192||127|32.41.9|
David Sualehe|DEF|127|68|668|1997||183||127||
André Sousa (1998)|DEF|127|67|909|1998||174||127||
André Pedrosa|MED|127|66|909|1997||185||127||
Gonçalo Costa|DEF|127|63|690.292|2000||179||127||
Asumah Abubakar|AVA|127|69|167|1997||183||60||
Miguel Nóbrega|DEF|127|67|391.732.680.908|2000||189||127||
China (1992)|DEF|127|66|554|1992||179||127||
Théo Fonseca|AVA|127|63|350.345|2000||178||58||D
Tomás Silva|AVA|127|70|812.910.891.454|1999||173||127|7|E
João Valido|GR|127|65|909.92|2001||185||127||
Pedro Aparício|MED|127|63|136.547.582|1995||171||127||
Rodrigo Martins|AVA|127|62|748.547.292.690|1998||177||127||E
João Gonçalves (2000)|GR|127|65|149.21.877|2000||188||127|28|
Braima|MED|127|63|120|2001||181||||
Luís Semedo|AVA|127|72|828.460.582|2003||192||127||
Tiago Freitas|MED|127|65|140|2006||186||127||
José Silva|DEF|127|63|812.92|2005||180||127|7|
Paulo Monteiro|DEF|127|64|163.316.335.213.776.28.214.878.349|1985||191||127|28|
Bruno Pinheiro|DEF|127|70|149.928.380.88|1987||185||127||
Thierry Moutinho|AVA|127|72|786.67.549.189.191.339.246.522.474.11|1991||178||143||D
Marco Paixão|AVA|127|73|409.800.806.515.73|1984||185||127||
Marco Pereira|GR|127|65|149.860.349.363.776|1987||184||127||
Traquina|AVA|127|67|27.292.604.748.120.137|1988||177||127|12|D
Rafael Veloso|GR|127|64|120.137|1993||192||127||
Augusto|DEF|127|64|582.867|1987||180||127||
Weldinho|DEF|16|74|667.234.653.627|1991||181||16||
Hugo Sousa|DEF|127|70|919.90.785.445.488|1992||184||127||
Sérgio Marakis|MED|127|70|554.812.597|1991||178||164||
Julián Montenegro|MED|127|65|910.149.346|1989||188||4||
Diogo Coelho|DEF|127|69|597.748|1993||183||127||
Rúben Macedo|AVA|127|73|214.265.554.597|1996||171||127||E
Rui Areias|AVA|127|66|908|1993||188||127|46|
Miguel Oliveira (1994)|GR|127|65|582|1994||196||127||
Adilson (1987)|DEF|127|62|120.878.137|1987||180||127||
Marcos Valente|DEF|127|64|669.265.908.668|1994||196||127||
Jucie Lupeta|AVA|127|73|348.909.305|1993||186||127||
Rúben Oliveira|MED|127|65|265.776.120|1994||170||127||
Vítor São Bento|GR|127|64|891.346.597.937|1992||190||127||
Eri|AVA|127|66|163.554|1994||178||127|28.32.41.52.9|D
Pité|MED|127|71|136.847.92|1994||188||127||
Hugo Seco|AVA|127|63|28.27.349.346|1988||178||127||D
Jorge Silva|DEF|127|70|520.668|1996||183||127||
João Lucas|DEF|127|73|776|1996||180||127||
Sérgio Conceição|DEF|127|63|706.690|1996||177||127||
Paulo Estrela|MED|127|70|690|1999||171||127||
Mésaque Djú|AVA|127|73|623|1999||178||70||D
Rúben Freitas|DEF|127|62|597|1993||180||127||
Diga|DEF|127|67|349|1998||173||127||
Diogo Pinto (1999)|MED|127|64|97.904.295.200.308|1999||175||127||
Tomás Domingos|DEF|127|62|776|1999||175||127||
Schürrle|MED|127|63|163|2001||173||127||
Diogo Almeida|AVA|127|70|668|2000||184||127||
Kiki (1998)|AVA|127|64|520.200|1998||172||127||D
Cláudio Silva|DEF|127|62|349|2000||188||127||
Miguel Sousa|MED|127|63|554.547.200.520|1998||176||127||
Robinho (1997)|DEF|127|64|120|1997||171||127||
Diogo Rodrigues|DEF|127|64|690.748.870.676|1999||183||127||
Herculano Nabian|AVA|127|68|908.285|2004||182||70||
Gustavo Mendonça|MED|127|63|21|2003||178||127||
Diogo Pinto (2004)|GR|127|68|812.295|2004||192||127|7.47|
Diogo Monteiro|DEF|127|71|786.92|2005||187||143||
Luís dos Santos|AVA|127|63|149.860|2000||175||127|28|D
Brian Araújo|GR|127|65|380.346|2000||189||58||
Leonardo Barroso|DEF|127|68|217|2005||170||127||
Miguel Falé|AVA|127|68|163.657|2004||178||127||D
Tiago Parente (2004)|DEF|127|65|292.350|2004||180||127||
Afonso Rodrigues|AVA|127|65|345.668.847|2002||178||127||D
Ivan Lima|AVA|127|63|140.680|2005||174||127||E
João Muniz|DEF|127|65|732.812|2005||190||127||
Vivaldo Semedo|AVA|127|71|871.336|2005||192||||
Pedro Gomes|DEF|127|64|149|2003||185||127||
João Aragão|AVA|127|68|163|2008||170||127||D
Tiago Parente (2006)|DEF|127|62|140|2006||181||127||
Cardoso Varela|AVA|127|73|277|2008||0||3||E
Afonso Assis|MED|127|63|582|2006||183||||
João Pinho|GR|127|62|631|1992||189||127||
Rui Mendes|AVA|127|66|310.312|1999||180||127||D
João Fonseca|DEF|127|62||2006||188||127||
Diogo Batista|MED|127|63|669.314|2000||184||127||
Frederico Duarte|AVA|127|64|904.655.930|1999||177||127||E
André Gonçalves|AVA|127|62|687.896|2003||178||127||E
Julian Quiñones|AVA|111|66|55|1997||180|0|||
Barış Alper Yılmaz|MED|152|79|371.991|2000||186||||
Uğurcan Çakır|GR|152|73|371.856|1996||191||||
Abdülkerim Bardakcı|DEF|152|73|371|1994||190||||
Hans Vanaken|MED|20|79|224.536.469|1992||194|40||45|
Bento|GR|16|76|52|1999||190||||
Lucas Zelarayán|MED|6|74|138.843.230.41|1992||180||||
Ismael Saibari|MED|102|83|648.133|2001||185|35|||
Abderrazak Hamdallah|AVA|102|79|60.992.24.993.57.52.46|1990||185|17||39.46.52|
Joey Veerman|MED|124|81|648.336.414.157|1998||185|20|||
Rodinei|DEF|16|77|632.994.234.995.689.357|1992||179|||30|
Evander|MED|16|74|221.892.566|1998||178||||
Alistair Johnston|DEF|25|81|204.603.579|1998||180|63|||
Milan Borjan|GR|25|79|58.150.493.598.734.996.711.799.538.713|1987||193||||
Mert Günok|GR|152|82|141.351.176.131|1989||196|37|||
İrfan Can Kahveci|AVA|152|80|351|1995||175||||D
Dénes Dibusz|GR|73|73|352.997|1990||188||||
Bryan Heynen|MED|20|75|377|1997||181||||
Marcelino Moreno|MED|4|71|506|1994||168||||
Lukáš Provod|MED|32|78|802.998.179|1996||189|19|||
Sem Steijn|MED|124|74|354.10|2001||173||||
Oscar Dorley|MED|92|71|802.804|1998||174||||
Adem Zorgane|MED|5|67|875.999|2000||184||||
Mykola Shaparenko|MED|153|79|275.322|1998||178|48|||
Leonardo Fernández|MED|157|71|677.843.1000|1998||166||||
Edin Višća|MED|21|76|856.1001.131|1990||172||||
Oğuz Aydın|AVA|152|75|351.65|2000||183|||31|E
İsmail Yüksek|MED|152|80|351.123.29.176|1999||183|32|||
Nicolas Raskin|MED|20|80|717.465.822|2001||178|19|||
Colin Coosemans|GR|20|74|80.224.919.471.465|1992||186||||
Sebastián Driussi|AVA|4|78|734|1996||174||||
Claudio Aquino|MED|4|74|227.1002.254.388.438.358|1991||172||||
Nick Olij|GR|124|75|648.22.1003.588.807|1995||184||||
Wouter Goes|DEF|124|71|22|2004||188||||
Raphael Onyedika|MED|115|76|224|2001||184||||
Gabriel Arias|GR|29|75|710.438|1987||187|||17|
Giannis Konstantelias|MED|63|76|642.466.157|2003||178|18|||
Dominik Kotarski|GR|40|77|233.32.403|2000||189||||
Diego Viera|DEF|122|67|598.1004.1005.1006.388|1991||186||||
Reo Hatate|MED|86|76|204.485|1997||172||||
Joseph Paintsil|MED|60|75|499.377|1998||170||||
Yeremay|MED|54|66|262|2003||170|0|||
Michael Cooper|GR|76|67|790.684|1999||186||||
Fayçal Fajr|MED|102|76|61.759.1007.283.262|1988||178||||
Jaminton Campaz|MED|33|77|738.395|2000||165||||
Davy Roef|GR|20|76|465.262.80|1994||187||||
Rob Schoofs|MED|20|72|875.797.465|1995||179||||
Matte Smets|DEF|20|72|377|2004||184||||
Brandon Mechele|DEF|20|78|224|1993||190|||45|
Malcom Braida|MED|4|64|150|1997||175||||
Maximiliano Salas|AVA|4|67|734.1008|1997||174||||
Jindřich Staněk|GR|32|78|802.806.299.1009.179.902|1996||191|9||45|
Michal Sadílek|MED|32|79|802|1999||169||||
Zlatko Tripić|AVA|116|66|901|1993||182|0|||D
Vitaliy Buyalskyi|MED|153|75|275.1010|1993||170||||
Paulo Díaz|DEF|29|76|734.1011.227.771|1994||180||||
Carlos Palacios|MED|29|74|150.443|2000||180||||
Anastasios Bakasetas|MED|63|79|654.98.1012.90.656.65.856|1993||181|82||43.46|
Oscar Gloukh|MED|83|76|32.542.767|2004||170||||
Miguel Ángel Merentiel|AVA|157|66|150|1996||175|0|||
Patrik Hrošovský|MED|52|72|377.902.998.1013.1014|1992||172||||
Guilherme Sityá|DEF|16|66|492|1990||180|0|||
Darlington Nagbe|MED|45|76|230.691.108|1990||175|18||42|
Djordje Mihailovic|MED|45|74|849.217.579|1998||178|||42|
Brian White|AVA|45|73|889.608|1996||177||||
Walker Zimmerman|DEF|45|75|603.250.500|1993||190|||42|
Fashion Sakala|AVA|163|77|42.809|1997||178||||E
Richard Sánchez|MED|122|72|710.1015|1996||176||||
Gabriel Ávalos|AVA|122|72|438|1990||187||||
Alex Arce|AVA|122|75|435|1995||187||||
Otar Kiteishvili|MED|61|76|827.1016|1996||173||||
Tsuyoshi Watanabe|DEF|86|80|354.333.470.465|1997||184|11|||
Aboubakary Koita|MED|105|74|12.465|1998||175||||
Günay Güvenç|GR|152|75|371.141.30.402.374.484|1991||185|4|||
İrfan Can Eğribayat|GR|152|74|351.30.402|1998||193|||30.31|
Ángelo Preciado|MED|49|66|806|1998||173|0|||
Joel Ordoñez|DEF|49|66|224|2004||188|0|||
Yazan Al Arab|DEF|87|66|327|1996||188|0|||
Anthony Moris|GR|94|75|48.822.797.471.875|1990||184||||
Musab Al Juwair|MED|7|66|55|2003||178|0|||
Firas Al Birekan|MED|7|66|36|2000||185|0|||
Álvaro Montero|GR|33|74|917|1995||196||||
Alfredo Morelos|AVA|33|75|106.717.436.1017|1996||177||||
Dayro Moreno|AVA|33|76|634.102.339.259.567.106.182.1018.2|1985||177|31|||
Yeimar Gómez Andrade|DEF|33|66|784|1992||187|0|||
Ortwin De Wolf|GR|20|72|471.469.466.744.949|1997||190||||
Adriano Bertaccini|AVA|20|72|80|2000||173||||
Jarne Steuckers|MED|20|68|377|2002||179||||
Maximiliano Meza|MED|4|78|734.382.438|1992||180|||49|
Kevin Zenón|MED|4|73|150.879.109|2001||177||||
Julio Furch|AVA|4|66|125|1989||188|0|||
Víctor Cuesta|DEF|4|74|150|1988||187||||
Christopher Trimmel|DEF|165|78|874.718|1987||189|3|||
Gernot Trauner|DEF|165|76|354.501.761|1992||183||||
Martin Jedlička|GR|32|70|902.1019|1998||186||||
Givairo Read|DEF|124|73|354|2006||184||||
Remko Pasveer|GR|124|78|32.334.417.387.648|1983||187||||
Youri Baas|DEF|124|74|32|2003||182||||
Fabian Reese|AVA|2|75|418.422.394.479|1997||187||||
Sampson Dweh|DEF|92|70|902|2001||180||||
Tomasz Kędziora|DEF|126|81|642.514.275|1994||183|33||25|
Igoh Ogbu|DEF|115|72|802.739|2000||186||||
Jonas Svensson|DEF|116|78|141.1020.739.22.29|1993||170|23||13|
Volodymyr Brazhko|MED|153|77|275.948|2002||184|3|||
Denys Popov|DEF|153|77|275|1999||185||||
Petros Mantalos|MED|63|74|12.937|1991||173||||
Lazaros Rota|DEF|63|74|12.1021.448|1997||180||||
Mohammed Abu Fani|MED|83|73|352|1998||164||||
Gabriel Neves|MED|157|74|296.598.834|1997||171|1|||
Tiago Palacios|MED|157|65|296|2001||165||||
Diego Rossi|MED|157|77|230.677.500.351|1998||170|7||17.30|
Kaan Kairinen|MED|57|74|806.1022.566|1998||178||||
Oliver Antman|MED|57|74|717.613|2001||175||||
Albert Rusnák|MED|52|77|784.551.628.747.145.312|1994||175|||2|
Oberdan|MED|16|65|686|1995||175||||
Taison|MED|16|78|642.443.561.788|1988||172|||41|
Miroslav Stevanović|MED|21|76|786.911.1023.787.283.66.1024.1001|1990||180|||59|
Ernest Muçi|MED|1|77|856.141|2001||180||||
Cristian Roldan|MED|45|71|784.1025|1995||173|||42|
Lorenzo Melgarejo|AVA|122|78|598.1026.1015.140.668.438.497.809|1990||171|2||30.46|E
Massimo Coda|AVA|84|76|768.1027.1028.1029.858.238.241.154.1030.1031.663.764|1988||184||||
Saba Lobjanidze|MED|61|66|108|1995||175|0|||
Magomed Ozdoev|MED|134|78|642|1992||184||||
Nikita Haikin|GR|134|72|152.1032.1033.168|1995||185||||
Joe Bell|MED|118|76|901.172|1999||182|12|||
Seiya Maikuma|DEF|86|75|22.883.208|1997||179||||
Ayase Ueda|AVA|86|82|354.482.207.530|1998||182|47||13|
Doğucan Haspolat|MED|152|71|473.300.484|2000||177||||
Dániel Gazdag|MED|73|76|230.1034.678|1996||178|26|||
Barnabás Varga|AVA|73|75|352.1035|1994||181||||
Song Bum Keun|GR|37|66|458|1997||194|0|||
Cédric Kipré|DEF|39|75|447.518.583.929.924.702|1996||193|||2.44|
Hernán Galíndez|GR|49|78|427.738.996.1036.1037.864.1038|1987||188|39|||
Brugui|AVA|54|66|523|1996||174|0|||
Jesús Imaz|MED|54|70|454.930.1039|1990||179||||
Elgezabal|DEF|54|66|523|1993||185|0|||
Harrison Burrows|DEF|76|71|790.675|2002||180||||
Sekou Koita|AVA|100|76|376|1999||170||||
Jakob Breum|MED|43|62|387|2003||178||||
Ilias Chair|MED|102|78|698.529.823|1997||164|5|||
Eduard Atuesta|MED|33|72|637.436.500|1997||180||||
Duván Vergara|AVA|33|69|710.286|1996||173||||E
William Tesillo|DEF|33|73|106|1990||184||||
Edwin Cardona|MED|33|77|106.459.150|1992||180|||20|
Liam Scales|DEF|78|75|204|1998||187||||
Michel Ange Balikwisha|MED|20|66|204|2001||178|0|||
Mario Stroeykens|MED|20|75|80|2004||174||||
Mika Godts|AVA|20|79|32.377.647|2005||176|2|||E
Nikola Storm|MED|20|73|84.224.949|1994||178||||
Giuliano Galoppo|MED|4|71|734.125|1999||179||||
Braian Romero|AVA|4|73|917.228|1991||175||||
Agustín Bouzat|MED|4|74|917.150|1994||173||||
Gabriel Rojas|MED|4|73|710.771|1997||178||||
Pedro De la Vega|MED|4|66|784|2001||175|0|||
Ayrton Costa|DEF|4|70|150|1999||179||||
Agustín García Basso|DEF|4|62|710.1040|1992||178||||
Exequiel Zeballos|MED|4|75|150|2002||174||||
Leonardo Morales|DEF|4|63|138|1991||180||||
Mathias Honsak|MED|165|72|415.318.761|1996||188||||
Petr Ševčík|MED|32|76|802.795.1041.804|1994||172|15|||
Filip Panák|DEF|32|70|806|1995||185||||
Mojmír Chytil|AVA|32|74|802.795.660|1999||187||||
Vasil Kušej|AVA|32|72|802.274|2000||168||||E
Bart Nieuwkoop|DEF|124|76|354.875|1996||180|||13|
Gijs Smal|DEF|124|71|354.336|1997||183||||
Thomas Beelen|DEF|124|71|354|2001||180||||
Daan Rots|MED|124|73|334|2001||179||||
Hauke Wahl|DEF|2|72|817.422.750|1994||189||||
Damian Szymański|MED|126|78|517.1042.454.931.34|1995||181|10||25|
Andrés Vombergar|AVA|53|72|771.1043|1994||187||||
Felix Horn Myhre|MED|116|72|757.916|1999||180||||
Magnus Wolff Eikrem|MED|116|79|576.552.414.197.550|1990||183|||2.10|
Greg Taylor|DEF|51|76|642.204.489|1997||175||||
Danylo Sikan|AVA|153|70|856.788.480.322|2001||185||||
Kerim Mrabti|MED|142|74|471.798.268.145|1994||175||||
Vasilios Barkas|GR|63|76|882|1994||196||||
Kristijan Kahlina|GR|40|71|212.1044|1992||188||||
Dominik Schmid|DEF|143|71|132|1998||182||||
Liel Abada|MED|83|79|212.1045.204|2001||168|9|||
Leandro Lozano|DEF|157|63|89|1998||169||||
Cesinha|AVA|16|72|248|1989||177||||
Julian Gressel|MED|45|74|569.108.247|1993||185||||
Haji Wright|AVA|45|79|830.762.884.835.84.236|1998||191|||42|
Brandon Vazquez|AVA|45|74|116.108.221|1998||188|8||42|
Matías Galarza|MED|122|78|734|2002||175||||
Agustín Sández|DEF|122|72|738.150|2001||179||||
Siyabonga Ngezana|DEF|164|74|339.1046|1997||191|7|||
Leonardo Sernicola|DEF|84|69|238.841|1997||187||||
César Huerta|AVA|111|76|80.219|2000||171||||E
Goduine Koyalipou|AVA|130|70|523.210|2000||183||||
Georgiy Dzhikiya|DEF|134|78|84|1993||188||||
Fedor Chalov|AVA|134|78|642|1998||183||||
Dayne St. Clair|GR|25|77|569.442|1997||191|20|||
Kervin Arriaga|MED|72|67|523|1998||191||||
Seydouba Cisse|MED|68|73|186|2001||178||||
Deniz Türüç|MED|152|73|131.253.387.486|1993||177||||
Berat Özdemir|MED|152|72|131.376|1998||187||||
Rıdvan Yılmaz|DEF|152|77|141|2001||174||||
Emre Kılınç|MED|152|69|769.1047|1994||174||||
Okan Kocuk|GR|152|73|769.176|1995||187||||
Aral Şimşir|AVA|152|70|566.1048|2002||177||||E
Emin Bayram|DEF|152|75|473.371|2003||192||||
Emirhan Topçu|DEF|152|73|141|2000||187||||
Christopher Bonsu Baah|MED|60|75|55.377|2004||172||||
Ebou Adams|MED|148|72|532.793.1049|1996||178||||
Shaquille Pinas|DEF|141|74|49.354.410|1998||182||||
Alexander Domínguez|GR|49|79|503|1987||196|67|||
Viti Rozada|DEF|54|72|507|1997||180||||
Damián|MED|54|66|203|2003||180|0|||
Oriol Rey|MED|54|71|523|1998||177||||
Antoniu Roca|MED|54|73|291|2002||180||||
Carracedo|AVA|54|66|246|1996||179|0|||D
Abdón Prats|AVA|54|74|549.174.189.188|1992||181||||
Dan Neil|MED|76|75|828|2001||178||||
Hayden Hackney|MED|76|72|565|2002||178||||
Luke Woolfenden|DEF|76|73|830.447|1998||193||||
Albion Rrahmani|AVA|89|71|806.1050.1051.326|2000||188||||
Casper Højer|DEF|43|66|180|1994||184|0|||
Carlo Holse|MED|43|75|769.233.289|1999||175||||
Elias Jelert|DEF|43|74|805.233|2003||178||||
Jeppe Tverskov|MED|43|71|770.540.716|1993||185||||
Frank Fabra|DEF|33|74|150.286.260.436|1991||172|||20|
Juan Camilo Portilla|MED|33|66|771|1998||185|0|||
Edwuin Cetré|MED|33|70|296.778|1998||179||||
Julián Millán|DEF|33|63|597|1998||184||||
Jorman Campuzano|MED|33|75|106.150|1996||175||||
Jason Knight|MED|78|74|175.263|2001||173||||
Craig Goodwin|MED|8|72|31.557.610|1991||180|||43|
Cameron Burgess|DEF|8|75|830.367.740.216|1995||194||||
Thibo Somers|MED|20|69|744.207|1999||173||||
Tobe Leysen|GR|20|71|625.377|2002||175||||
Matthieu Epolo|GR|20|76|822|2005||185||||
Jonathan Dubasin|MED|20|71|813.386.67.132.723|2000||179||||
Noë Dussenne|DEF|20|71|625.465.703.207.585.509|1992||191||||
Elías Gómez|DEF|4|67|917.738.254|1994||179||||
Eric Meza|DEF|4|65|296|1999||175||||
Alexis Castro|MED|4|70|296.228.254.226.598.771.842|1994||183||||
Francisco Ortega|DEF|4|74|632|1999||177||||
Agustín Almendra|MED|4|71|710.879|2000||177||||
Ulises Sánchez|MED|4|66|138|1998||167||||
Jorge Broun|GR|4|71|738.1052.228|1986||190||||
Hernán López Muñoz|MED|4|72|89|2000||169||||
Lautaro Rivero|DEF|4|68|734|2003||185||||
Milton Giménez|AVA|4|64|150|1996||184||||
Nazareno Colombo|DEF|4|71|710.296|1999||184||||
Matěj Jurásek|AVA|32|75|616.802.481|2003||181|4|||D
Lukáš Sadílek|MED|32|72|806.803.998.401|1996||171|3|||
Youri Regeer|MED|124|76|32|2003||177||||
Björn Meijer|DEF|124|66|224|2003||190|0|||
Kian Fitz-Jim|MED|124|74|32|2003||174||||
Mexx Meerdink|AVA|124|73|22|2003||182||||
Armando Obispo|DEF|124|76|648.907|1999||185||||
Mike Eerdhuijzen|DEF|124|69|882.336|2000||194||||
Patrick Soko|AVA|24|65|72.109|1997||176||||
Ramiz Zerrouki|MED|5|77|334|1998||183||||
Abdelkahar Kadri|MED|5|71|465|2000||170||||
Tomi Horvat|MED|53|75|827|1999||176||||
Obinna Nwobodo|MED|115|73|221|1996||180||||
Oliver Edvardsen|AVA|116|72|32.1053|1999||175||||E
Håkon Evjen|MED|116|74|152|2000||173||||
Simen Bolkan Nordli|MED|116|70|739.407|1999||181||||
Jakob Glesnes|DEF|116|72|678.1054|1994||187||||
Luke McCowan|MED|51|66|204.1055|1997||177||||
Lawrence Shankland|AVA|51|76|413.1056.26.1057.816|1995||185||||
Oleksandr Karavaiev|DEF|153|66|275|1992||175|0|||
Taras Stepanenko|MED|153|77|301.788|1989||181|31|||
Tesfaldet Tekie|MED|142|71|410.1058.465.614|1997||175||||
Anton Salétros|MED|142|69|830.14|1996||183||||
Nahir Besara|MED|142|73|410.1059.1060.402|1991||182||||
Victor Eriksson|DEF|142|68|410.914|2000||192||||
Matías Catalán|DEF|29|71|771|1992||182||||
Claudio Baeza|MED|29|76|917.227|1993||171||||
Sebastián Vegas|DEF|29|72|227.577.1061|1996||184||||
Alexandros Paschalakis|GR|63|74|632|1989||197||||
Stratos Svarnas|DEF|63|67|715|1997||183||||
Dinko Horkaš|GR|40|68|507|1999||189||||
Alvyn Sanches|MED|143|73|942.509|2003||183|1|||
Anan Khalaili|MED|83|75|875.545.243|2004||183|4|||
Luciano Boggio|MED|157|74|597.721|1999||175||||
Carlos Protesoni|MED|157|66|66|1998||185|0|||
Facundo Mallo|DEF|157|66|738.1062.1063.308.326|1995||188||||
Darius Olaru|MED|132|74|339.1064.875|1998||177|28|||
Daniel Bîrligea|AVA|132|75|339.1065.191.366|2000||184|9|||
Ivan Schranz|MED|52|79|802.1066.806.271.179.453|1993||187|35|||
Busanello|DEF|16|72|550|1998||179||||
Claudio Gomes|MED|58|78|652.551|2000||171||||
Rémy Descamps|GR|58|75|541.855.223.702.600|1996||196||||
Pedro Gallese|GR|125|78|637.1067.1068.260|1990||190|127|||
Alexander Callens|DEF|125|74|12.725|1992||187||||
Wes Burns|MED|123|72|447|1994||173||||
Ryan Hollingshead|DEF|45|63|500.250|1991||185||||
Jesús Ferreira|AVA|45|76|784.250.1069|2000||173|21||42|
Diego Luna|MED|45|73|617.1070.766.1071|2003||173|1||42|
Mark Delgado|MED|45|75|500.849.499|1995||175|6|||
Stefan Frei|GR|45|74|784.849|1986||191||||
Roman Celentano|GR|45|70|221|2000||193||||
Keaton Parks|MED|45|75|609.140|1997||193||||
Carlos Miguel Coronel|GR|122|72|608|1996||192||||
Matías Espinoza|DEF|122|69|598.528|1997||179||||
Gift Links|DEF|164|63|25|1998||170||||
Mirko Pigliacelli|GR|84|75|513.737.781.663.674.366.729.696.857.877.652|1993||184|||36|
Rodrigo Huescas|DEF|111|73|233|2003||172||||
Mateo Chávez|DEF|111|78|22|2004||177||||
Budu Zivzivadze|AVA|61|75|415.479.1072.1073.1074.289.348.1016.1075|1994||189||||
Andy Najar|DEF|72|80|603.247.80.500.1076|1993||171|53|||
Grigoris Kastanos|MED|31|77|416.674.463|1998||176||||
Raphael Obermair|MED|56|75|750.133|1996||182||||
Tomoki Iwata|MED|86|80|145.1077.940.204|1997||178|4|||
Miki Yamane|DEF|86|76|499.881.485.792|1993||178||||
Tatsuhiro Sakamoto|MED|86|74|830.1078.472|1996||170||||
Yohei Takaoka|GR|86|75|889.941.1079.940|1996||182||||
Emre Akbaba|MED|152|71|301.84.65|1992||187||||
Efecan Karaca|MED|152|73|65.371.374.30.29|1989||166||||
Guillermo Viscarra|GR|15|72|642.280.1080.1018|1993||190|1|||
Loïc Négo|DEF|73|66|511|1991||181|0|||
Ibrahim Sadiq|MED|60|73|22.613|2000||167||||
Karim Konaté|AVA|39|77|767|2004||178||||
Parfait Guiagon|MED|39|76|702|2001||169||||
Warner Hahn|GR|141|78|410.431.32.309.354.645.300.414.80|1992||198||||
Gyrano Kerk|MED|141|69|744.882.1081|1995||184||||
José Cifuentes|MED|49|79|849.1037.183.500.717.242.90|1999||175|20|||
Javier Burrai|GR|49|65|771.95|1990||187||||
Junior Sornoza|MED|49|72|438.649|1994||169||||
Steven Moreira|DEF|23|76|230.731.319.854|1994||176||||
Leandro Andrade|AVA|23|73|699|1999||176||||D
Corpas|MED|54|66|753|1991||178|0|||
Josan|MED|54|66|283|1990||175|0|||
Soberón|AVA|54|66|779|1997||178|0|||
Amor Layouni|AVA|151|71|429.1082.256.916.152|1992||191||||D
Zine|AVA|3|73|12|2002||181||||
Perry Ng|DEF|76|67|197.239.1009|1996||180||||
Dapo Afolayan|AVA|76|71|817.1083|1997||180||||D
Kaine Kesler-Hayden|DEF|76|73|830.99|2002||175||||
Colby Bishop|AVA|76|64|692.1084.1085|1996||183||||
Ross Sykes|DEF|76|72|875.1086|1999||196||||
Mohammed Kanno|MED|7|66|45|1994||191|0|||
Nawaf Al Aqidi|GR|7|66|52|2000||188|0|||
Hassan Tombakti|DEF|7|78|45.60.63|1999||182|11||30.37|
Mees Hilgers|DEF|75|75|334|2001||185||||
Leart Paqarada|DEF|89|75|415.524.762|1994||184||||
Gaoussou Diarra|AVA|100|71|354.449|2002||183||||E
Maurits Kjaergaard|MED|43|73|767|2003||192||||
Anton Gaaei|DEF|43|74|32.900|2002||183||||
Nicklas Røjkjær|MED|43|67|613.900.289|1998||179||||
Rasmus Falk|MED|43|75|626.233|1992||177||||
Mikael Uhre|AVA|43|74|678.835.1087.172|1994||188|1|||
Patrick Mortensen|AVA|43|71|25.1088.172.540|1989||188||||
Marwane Saadane|DEF|102|66|41|1992||188|0|||
Felipe Román|DEF|33|66|106|1995||183|0|||
Alexis Manyoma|MED|33|70|229.296|2003||169||||
Marino Hinestroza|MED|33|72|106.183.653.649.230|2002||170|||9|
Jhohan Romaña|DEF|33|66|771.734.436.1089.116|1998||185||||
Alan Browne|MED|78|73|565.1090.695|1995||173||||
Mats Rits|MED|20|76|80.135.32.471.224|1993||180||||
Casper De Norre|MED|20|71|825|1997||175||||
Mathias Delorge|MED|20|68|465|2004||189||||
Killian Sardella|DEF|20|75|80|2002||177||||
Anouar Ait El Hadj|MED|20|75|875.80.377|2002||168||||
Joaquin Seys|DEF|20|79|224|2005||178|6|||
Yari Verschaeren|MED|20|76|80|2001||172||||
Jari De Busser|GR|20|68|387|1999||190||||
Enzo Copetti|AVA|4|65|738|1996||180||||
Lautaro Acosta|MED|4|78|506.787.709.150|1988||164||||
Facundo Altamirano|GR|4|71|771|1996||185||||
Alexis Canelo|MED|4|67|506.1091.996|1992||182||||
Nery Domínguez|DEF|4|71|771.738.701|1990||184||||
Sebastián Meza|GR|4|64|427|2000||185||||
Agustín Urzi|MED|4|73|427.125|2000||168||||
Maximiliano Lovera|MED|4|71|738|1999||170||||
Rodrigo Castillo|AVA|4|66|506|1999||187||||
Sasha Marcich|DEF|4|65|506|1998||175||||
Richard Schunke|DEF|4|65|438|1991||185||||
Luciano Lollo|DEF|4|68|150.138.734|1987||183||||
Sascha Horvath|MED|165|74|501.117.827|1996||165|3|||
Thierno Ballo|AVA|165|73|825|2002||174||||E
Tobias Lawal|GR|165|73|377|2000||195||||
Dominik Baumgartner|DEF|165|65|932.1092.1093|1996||188||||
Jaroslav Zelený|DEF|32|76|806.424.481.453.802.573|1992||190|10|||
Ondřej Lingr|MED|32|77|423.481.802.354|1998||175|26||13|
Jakub Markovič|GR|32|72|802.573.660.126|2001||187||||
Franculino|AVA|70|75|566|2004||182|14|||
Melle Meulensteen|MED|124|70|387.707|1999||185||||
Joël Drommel|GR|124|75|807|1996||193||||
Owen Wijndal|DEF|124|77|32.22|1999||176||||
Enric Llansana Beuse|MED|124|66|80|2001||183|0|||
Kees Smit|MED|124|75|22|2006||180||||
Luciano Valente|MED|124|74|354|2003||189||||
Jasper Schendelaar|GR|124|73|645.22|2000||186||||
Bart Schenkeveld|DEF|124|74|48.354.300.417.645|1991||189||||
Joris Kramer|DEF|124|73|387.22|1996||187||||
Marnon Busch|DEF|2|75|415.923.1|1994||182||||
Romulo Otero|MED|159|72|597|1992||165||||
Sofiane Bendebka|MED|5|70|41|1992||180||||
Abdelkader Bedrane|DEF|5|68|251.1094.1095|1992||186||||
Yira Sor|AVA|115|74|377|2000||174||||
Hugo Vetlesen|MED|116|72|224.1053|2000||177||||
Ulrik Saltnes|MED|116|73|152|1992||187||||
Tobias Gulliksen|MED|116|72|718|2003||181||||
Martin Linnes|DEF|116|78|576.1096.371|1991||177||||
Warren Kamanzi|DEF|116|72|854|2000||177||||
Sondre Tronstad|MED|116|71|146.432.425.412|1995||174||||
Kristian Eriksen|MED|116|68|576.407|1995||177||||
Tobias Lauritsen|AVA|116|71|807.1097|1997||194||||
Luis Mejía|GR|121|75|597.1000.549.854.598|1991||191|7|||
Connor Barron|MED|51|71|717|2002||175||||
James Forrest|AVA|51|79|204|1991||170||||D
Vladyslav Kochergin|MED|153|66|715|1996||178|0|||
Arseniy Batagov|DEF|153|66|856|2002||185|0|||
John Björkengren|MED|142|67|716.1098|1998||180||||
Benjamin Nygren|MED|142|76|204.613.431|2001||184||||
Gustav Berggren|MED|142|72|608.1099.429|1997||180||||
Jordan Larsson|MED|142|79|233.14.127.1100.589.809|1997||175|||46|
Jonathan Levi|AVA|142|67|352.739.952.284.1101|1996||185||||D
Brayan Cortés|GR|29|69|677.1102|1995||185||||
Darío Osorio|AVA|29|66|566|2004||184|0|||D
Gabriel Castellón|GR|29|65|864.1103|1993||190||||
Vicente Pizarro|MED|29|72|227|2002||172||||
Giannis Michailidis|DEF|63|73|642|2000||185||||
Gerasimos Mitoglou|DEF|63|64|12.912|1999||184||||
Robert Ljubičić|MED|40|66|12|1999||180|0|||
Jim Allevinah|MED|59|72|81.1104.1105.1106.223|1995||172||||
Uran Bislimi|MED|143|73|320.1107|1999||183|4|||
Lucas Blondel|DEF|143|69|150|1996||178||||
Pascal Loretz|GR|143|70|321|2003||191||||
Marvin Keller|GR|143|77|942|2002||189||||
Stefan Gartenmann|DEF|143|72|352.414.835|1997||185||||
Tai Baribo|AVA|83|71|678.247.932.1045|1998||181||||
Facundo Waller|MED|157|67|427.1108|1997||173||||
Javier Méndez|DEF|157|65|677|1994||184||||
David Terans|MED|157|69|677.1109|1994||176||||
Octavio Rivero|AVA|157|70|92.1109.889.1008|1992||188||||
Emanuel Gularte|DEF|157|71|677.1103|1997||189||||
Deian Sorescu|MED|132|76|374.308.715.339|1997||175|25|||
Adrian Șut|MED|132|76|339.1110.1111.37.522|1999||186|8|||
Ștefan Târnovanu|GR|132|77|339|2000||197|5|||
Claudiu Petrila|AVA|132|73|326.191.785|2000||176|1|||E
Leo Sauer|AVA|52|78|354.588.298|2005||184|15||13|E
Cassiano|AVA|16|72|200|1989||185||||
Loïc Lapoussin|MED|98|70|797.727|1996||181||||
Gaëtan Poussin|GR|58|72|727.156|1999||186||||
Ibrahim Cissé|DEF|58|69|352.855|1996||185||||
Youssef Maziz|MED|58|73|625.323|1998||175||||
Anis Mehmeti|MED|1|73|175.936.168.447|2001||180|4|||
Cebrail Makreckis|DEF|91|76|352.524.1112.1113.699|2000||180||||
Marcos López|DEF|125|74|233.756|1999||176||||
Miguel Trauco|DEF|125|77|642.357.787|1992||169|2|||
Kenji Cabrera|MED|125|73|889|2003||174||||
Bryan Reyna|MED|125|73|138.549|1998||170||||
Kellyn Acosta|MED|45|75|217.250|1995||178|||42|
DeJuan Jones|DEF|45|74|756.607|1997||175|7||42|
Marlon Fossey|DEF|45|74|822|1998||179||||
Julian Green|MED|45|82|394.298.133.408|1995||172|||5.11.26.27.42.53.58|
Jack McGlynn|MED|45|73|423.1114.678.825|2003||180||||
Patrick Schulte|GR|45|73|230.1115|2001||196||||
Aaron Long|DEF|45|76|500.691.784.1116.1117.1025.608|1992||185|||42|
Jackson Ragen|DEF|45|63|784|1998||198||||
José Florentín|MED|122|66|206|1996||181||||
Robert Rojas|DEF|122|74|598.734|1996||176||||
Juan Espínola|GR|122|67|150.598|1994||185||||
Iván Ramírez|DEF|122|71|598.528|1994||177||||
Álvaro Campuzano|MED|122|66|598.528|1995||185||||
Iván Franco|AVA|122|71|598.528|2000||165|1|||D
Rodrigo Morínigo|GR|122|69|598.528|1998||189||||
Saúl Salcedo|DEF|122|72|150.1015|1997||180||||
Bongokuhle Hlongwane|DEF|164|74|569|2000||182||||
Juri Cisotti|MED|84|71|339.859.218.508.810.404.1118.1119.1120.640|1993||175||||
Anthony Partipilo|AVA|84|62|128.1121|1994||181||||
Nicholas Pierini|AVA|84|71|781.810|1998||176||||
Antonio Caracciolo|DEF|84|71|681.416.440.1122.1123.128.378.165.238|1990||185||||
Aarón Herrera|DEF|65|74|247|1997||180|19|||
Jonathan Osorio|MED|25|73|849|1992||175|92|||
Theo Bair|AVA|25|75|509.889.407.814.583.15.155|1999||191|7|||
Luis Palma|AVA|72|75|514.90.1071.204.1124|2000||179||||E
Nikolas Ioannou|DEF|31|74|768.17|1995||183||||
Mory Konaté|MED|68|73|471.797|1993||191||||
Adamo Nagalo|DEF|18|76|648.613.492|2002||185|24|||
Sota Kawasaki|MED|86|77|548|2001||171||||
Keigo Tsunemoto|DEF|86|76|132|1998||174||||
Hiroki Sekine|DEF|86|71|820.1125.483|2002||187||||
Dorukhan Toköz|MED|152|74|486.290|1996||180||||
Levent Mercan|DEF|152|76|351.478|2000||176|||31|
Ahmet Oğuz|DEF|152|65|490.376|1993||176||||
Mustafa Eskihellaç|DEF|152|70|856.282|1997||175||||
Zeki Yavru|DEF|152|73|769.856.486|1991||179||||
Muhammed Şengezer|GR|152|73|131.176|1997||192||||
Taha Şahin|DEF|152|66|180|2000||178|0|||
Halil Akbunar|MED|152|71|301.282.402|1993||170||||
Ahmetcan Kaplan|DEF|152|76|589|2003||189||||
Dániel Sallói|AVA|73|71|476.1074|1996||185|4|||E
Abdoulie Manneh|AVA|148|69|572|2005||168||||E
Ablie Jallow|MED|148|75|786.400.323.706|1998||166|2|||
Carlens Arcus|DEF|71|73|81.862|1996||180||||
Oh Hyeon Gyu|AVA|37|77|377|2001||183||||
Eom Ji Sung|MED|37|66|830|2002||178|0|||
Ranko Veselinović|DEF|145|72|889.911|1999||190||||
Nenad Cvetković|DEF|145|66|718|1996||195|0|||
Ismaila Soro|MED|39|73|58.1126.1127.204.92|1998||173||||
Leonel Quiñonez|DEF|49|66|503|1993||178|0|||
Fernando Gaibor|MED|49|72|642.1068.1128|1991||178||||
Janner Corozo|MED|49|62|92|1995||176||||
Olaetxea|MED|54|66|753|1993||179|0|||
Stoichkov (1993)|MED|54|73|262|1993||178||||
Ximo Navarro|DEF|54|66|262|1990||176|0|||
Casas|AVA|54|66|895|2000||183|0|||
Joan Sastre|DEF|54|66|642|1997||174|0|||
Loureiro|DEF|54|66|262|1996||178|0|||
Mella|MED|54|73|262|2005||169||||
Izeta|AVA|54|66|101|1999||175|0|||
Herzog|DEF|54|66|507|2004||186|0|||
Berrocal|DEF|54|66|108|2000||184|0|||
George Honeyman|MED|76|73|147.828.1129.426|1994||173||||
Archie Brown|DEF|76|75|351.263.509.465|2002||190||||
Jordan Storey|DEF|76|67|695|1997||188||||
Mattie Pollock|DEF|76|73|921.1130|2001||190||||
Hassan Kadish|DEF|7|66|46|1992||178|0|||
Ahmed Sharahili|DEF|7|73|46.45|1994||186|||30.34|
Emir Sahiti|AVA|89|73|408.405|1998||174||||D
Amir Saipi|GR|89|69|320.1107|2000||194||||
Ermal Krasniqi|AVA|89|73|517.1131.1051.191.326.806|1998||188|2|||E
Nene Dorgeles|AVA|100|76|351|2002||174||||
Mikkel Rygaard|MED|43|66|429|1991||176|0|||
Michael Barrios|MED|33|65|634.1132.250|1991||163||||
Raúl Loaiza|MED|33|69|506.106|1994||180||||
Luis Miguel Angulo|MED|33|65|771|2004||174||||
Jamie McGrath|MED|78|68|419.1133.26|1996||175||||
Darragh Lenihan|DEF|78|73|565.146.177|1994||187||||
Martin Boyle|AVA|8|74|419.1134.272|1993||172||||
Nicolas Milanović|MED|8|66|26|2001||185|0|||
Cameron Devlin|MED|8|76|413.832|1998||170||||
Alex Grant|DEF|8|73|832.1135.692.825.1136.672.686.1137|1994||191||||
Kye Rowles|DEF|8|74|247.205|1998||183||||
Rafael Delgado|DEF|4|70|254.106.738.296|1990||178||||
Kevin Gutiérrez|MED|4|66|254|1997||168|0|||
Agustín Lagos|DEF|4|66|917|2001||184||||
Gastón Benedetti|DEF|4|64|296.1138|2001||185||||
Vicente Taborda|MED|4|73|654.150.683|2001||178|||43|
Agustín Cardozo|MED|4|67|506|1997||182||||
Justo Giani|MED|4|64|69.996|1999||180||||
Alexis Soto|DEF|4|74|254.734|1993||178||||
Joaquín Tobio Burgos|MED|4|65|296|2004||177||||
Franco Ibarra|MED|4|70|738|2001||175||||
Gabriel Báez|DEF|4|70|771.611|1995||176||||
Maher Carrizo|MED|4|73|917|2006||180||||
Gastón Verón|AVA|4|71|206|2001||184||||
Nelson Insfrán|GR|4|67|382|1995||179||||
Bautista Merlini|MED|4|71|382.771|1995||179||||
Darío Benedetto|AVA|4|78|150.95.254.226|1990||178||||
Andrés Desábato|GR|4|70|683.917|1990||183||||
Emanuel Aguilera|DEF|4|70|254.226.388.438|1989||188||||
Nehuén Paz|DEF|4|67|427.1139.611|1993||191||||
David Schnegg|DEF|165|70|247.318|1998||185||||
Reinhold Ranftl|DEF|165|72|117.827.836.501|1992||180||||
Samuel Şahin-Radlinger|GR|165|66|117|1992||198|0|||
Nicolas Schmid|GR|165|66|692|1997||180||||
Niklas Hedl|GR|165|76|718|2001||188||||
Pavao Pervan|GR|165|71|933.1140.501|1987||194||||
Michal Sáček|DEF|32|74|401.806.454|1996||175||||
Milan Havel|DEF|32|72|902.153|1994||183||||
Radek Vitek|GR|32|73|175|2003||198||||
Karel Spáčil|DEF|32|66|902|2003||189|0|||
Ringo Meerveld|MED|124|66|414.1141|2002||177||||
Mattijs Branderhorst|GR|124|71|362.589|1993||192||||
Wessel Dammers|DEF|124|72|716.354.747|1995||185||||
Lion Lauberbach|AVA|2|67|471.1142|1998||194||||
Fabian Bredlow|GR|2|77|298.620.705.318.1143|1995||190||||
Jonas Föhrenbach|DEF|2|74|415.365|1996||185||||
Filip Bilbija|MED|2|71|750.315|2000||189||||
Steve Kapuadi|DEF|129|73|517|1998||193||||
Jeremy Ebobisse|AVA|24|73|500.691.1144|1997||184|||42|
Nouhou Tolo|DEF|24|71|784.1025|1997||175||||
Mehdi Dorval|DEF|5|68|128|2001||176||||
Antoni Kozubal|MED|126|71|514|2004||177||||
Taras Romanczuk|MED|126|70|454|1991||186|5||25|
Jure Balkovec|DEF|53|77|478|1994||185|38|||
David Zec|DEF|53|74|422|2000||188||||
Kristoffer Zachariassen|MED|116|70|352|1994||180||||
Dennis Johnsen|AVA|116|76|238.32|1998||185||||
Kristoffer Haugen|DEF|116|72|901|1994||188||||
Aslak Fonn Witry|DEF|116|73|739.268|1996||178||||
Sondre Langås|DEF|116|75|532.1145.1146.901.263|2001||180||||
Amahl Pellegrino|MED|116|73|770.531.1147.826.495.251.152.756|1990||190||||
Jonatan Braut-Brunes|AVA|116|66|715|2000||189|0|||
Jostein Gundersen|DEF|116|71|152.861|1996||186||||
Anthony Ralston|DEF|51|76|204.1056|1998||183||||
Kevin Nisbet|AVA|51|73|26.664.1148|1997||185||||
Dominic Hyam|DEF|51|77|935.720.1149.692.1150.236.146|1995||188|1|||
Vladyslav Kabaev|MED|153|66|275|1995||176|0|||
Elliot Stroud|DEF|142|72|572.1151|2002||180||||
Otto Rosengren|MED|142|71|550.572|2003||178||||
Pavle Vagić|DEF|142|73|410.550.1100.572.1152|2000||188||||
Zeidane Inoussa|AVA|142|69|830.170.429|2002||177||||E
Patrik Carlgren|GR|142|71|600.1082.14|1992||188|1|||
Johan Dahlin|GR|142|77|550.1153.1154.376.566|1986||190|4|||
Jacob Widell Zetterström|GR|142|75|532.268.263|1998||197||||
Patrik Wålemark|MED|142|70|514.429|2001||184||||
Sotirios Papagiannopoulos|DEF|142|66|830|1990||187|0|||
Axel Norén|DEF|142|69|572.1155.1098.369|1999||183||||
Javier Altamirano|MED|29|68|864.1156|1999||173||||
Mauricio Isla|DEF|29|86|227.871.463.698.553.196.351.357.1157.438|1988||176|145||6.17.21|
Lawrence Vigouroux|GR|29|74|830.853.1009.532.831|1993||194|||12|
Fernando De Paul|GR|29|66|227|1991||183|0|||
Matías Zaldivia|DEF|29|75|864.95.227|1991||182||||
Giannis Kotsiras|DEF|63|72|654.98|1992||183||||
Christos Mouzakitis|MED|63|74|632|2006||178||||
Fran Tudor|MED|40|74|715.405|1995||172||||
Franko Andrijašević|MED|40|75|690.465.405.1158.277.592.976|1991||188|1|||
Marco Pašalić|MED|40|79|637|2000||177||||
Anto Grgić|MED|143|73|320|1996||188||||
Isaac Schmidt|DEF|143|73|923|1999||172||||
Yanick Brecher|GR|143|72|338.1159|1993||196||||
Gavriel Kanichowsky|MED|83|71|352|1997||165||||
Jeremía Recoba|AVA|157|70|507|2003||176||||E
Camilo Cándido|DEF|157|67|106.1160|1995||174||||
Maximiliano Olivera|DEF|157|74|677.356.1103|1992||181||||
Thiago Cardozo|GR|157|71|138.677|1996||181||||
Armando Méndez|DEF|157|70|506.598|1996||183||||
Lucas Ferreira|DEF|157|62|254|2000||189||||
Adrián Balboa|AVA|157|66|710.654.252.1062|1994||186||||
Nicușor Bancu|DEF|132|67|877|1992||182|49|||
Horațiu Moldovan|GR|132|78|723.191.314.785.870.326.110.781.301|1998||186|10|||
Răzvan Sava|GR|132|73|871.848.191.877|2002||197||||
Artur (1996)|MED|16|73|423|1996||180||||
Milan Đurić|AVA|21|75|663.1030.209.97.241.238.857.222.168|1990||199||||
Rayan Raveloson|MED|98|74|942.855.862.499|1997||182||||
Cheick Souaré|MED|58|71|902|2002||185||||
Jonathan Varane|MED|58|73|698.521.736.813|2001||190||||
Abdellah Zoubir|AVA|58|74|699.316.419.393.676.521|1991||180||||E
Arbnor Muja|MED|1|73|797.1161.1162.1163.744.769|1998||179|5|||
Jean-Pierre Archimbaud|MED|125|66|642|1994||181|0|||
Renzo Garcés|DEF|125|71|642|1996||180||||
Ryan Hedges|MED|123|74|146.299.830.526.823|1995||185||||
Andrew Hughes|DEF|123|70|695.1164|1992||188|5|||
Alonso Martínez|AVA|38|72|609.1165.1166|1998||177|6|||
Shahruddin Magomedaliyev|GR|9|66|699|1994||185|0|||
Brooks Lennon|DEF|45|72|108.1071.532|1997||173||||
Griffin Dorsey|DEF|45|62|423.849|1999||183||||
Tristan Blackmon|DEF|45|62|889.1116|1996||185||||
Brandon Bye|DEF|45|71|607|1995||183||||
Cole Bassett|MED|45|70|229.1167|2001||180||||
Taylor Booth|MED|45|76|334|2001||173||||
Keegan Rosenberry|DEF|45|72|229.678|1993||173||||
Emmanuel Sabbi|AVA|45|73|889.507|1997||175||||D
Emeka Eneli|MED|45|72|617|1999||175||||
Daryl Dike|AVA|45|73|924.637.129|2000||187|||42|
Sean Nealis|DEF|45|71|608|1997||193||||
Henry Kessler|DEF|45|72|815.607|1998||193||||
Lucas Sanabria|MED|122|65|598.528|1999||175||||
Antonio Candela|DEF|84|72|810|2000||182||||
Pietro Ceccaroni|DEF|84|71|652.650.810|1995||187||||
Luka Gugeshashvili|GR|61|75|642.1016.454.1168.726.699.657|1999||196|1|||
Niko Sigur|DEF|25|79|405|2003||180|19|||
Bryan Acosta|MED|72|74|603.1169.189.250|1993||175||||
Joël Mall|GR|31|72|786.1170.391|1991||193||||
Ibrahima Sory Bangoura|MED|68|68|377|2004||182||||
Dejan Stojanović|GR|97|75|752.331.154.241|1993||196||||
Imanol Machuca|MED|99|73|917|2000||170||||
Yuya Kubo|MED|86|81|221.498.942.465.620|1993||177|13|||
Daiki Hashioka|DEF|86|79|802.539.881.797|1999||184|2|||
Güray Vural|DEF|152|74|84.257.33.856|1988||177||||
Volkan Babacan|GR|152|78|131.449.351.486.1171|1988||188||||
Kartal Yılmaz|MED|152|72|141|2000||178||||
Efkan Bekiroğlu|MED|152|70|402.1|1995||185||||
Bilal Bayazıt|GR|152|68|486|1999||185||||
Umut Nayir|AVA|152|72|492.82.639.938|1993||191||||
Adil Demirbağ|DEF|152|67|492|1997||185||||
Samet Akaydın|DEF|152|79|180.1047.1172.991.29.351.654.856|1994||190|19|||
Bence Ötvös|MED|73|66|352|1998||182||||
Áron Csongvai|MED|73|72|830.1074.14|2000||186||||
Botond Balogh|DEF|73|78|490.663|2002||189|3|||
Prince Kwabena Adu|AVA|60|71|902.1173.1174.496|2003||180||||
Hwang Jae Won|DEF|37|64|248|2002||180||||
Song Min Kyu|MED|37|66|458|1999||179|0|||
Cho Gue Sung|AVA|37|66|566|1998||188|0|||
Ali McCann|MED|79|66|695|2000||176|0|||
Ciaron Brown|DEF|79|65|641|1998||185||||
Boris Radunović|GR|145|71|196.711.100|1996||194|||48.59|
Romeo Amane|MED|39|66|718|2003||176|0|||
Ousmane Doumbia|MED|39|64|320.786|1992||175||||
Etienne Vaessen|GR|141|72|312.707|1995||189||||
Myenty Abena|DEF|141|74|374.253.1175.1066.352.809|1994||184||||
Renato Ibarra|MED|49|86|438.127.721.77|1991||180|||3.11.26.31.43.58|
José Quintero|DEF|49|70|503|1990||176||||
Alexander Alvarado|AVA|49|67|503|1999||165||||E
Yaimar Medina|DEF|49|75|377|2004||178||||
Jhegson Méndez|MED|49|78|438.637.500.834.283|1997||175|38|||
Alan Minda|MED|49|75|207|2003||170||||
Gabriel Cortez|MED|49|70|92.438|1995||179||||
Gonzalo Valle|GR|49|75|503|1996||185||||
Dimitar Mitov|GR|17|72|26.1176|1997||188||||
Cantero|GR|54|66|174|1995||189|0|||
Iza Carcelén|DEF|54|66|245|1993||174|0|||
Guille Rosas|DEF|54|74|813|2000||174||||
Vilarrasa|DEF|54|66|246|1999||183|0|||
Eric Curbelo|DEF|54|72|813.507|1994||173||||
Jordi Quintillà|MED|54|72|331.1177.4.476.1178|1993||184||||
Luna|DEF|54|66|72|2003||180|0|||
Caro|GR|54|66|507|1994||184|0|||
Atienza|MED|54|66|174|1999||186|0|||
Eguaras|MED|54|66|869|1992||181|0|||
Magunagoitia|GR|54|66|753|2000||183|0|||
Alkain|MED|54|66|753|1997||174|0|||
Chumi|DEF|54|75|72|1999||185||||
Egiluz|DEF|54|66|101|2002||186|0|||
Lalo Aguilar|DEF|54|66|186|2002||190||||
Saîf-Eddine Khaoui|MED|151|73|727.855|1995||180||||
Keshi Anderson|MED|76|66|145.243.270|1995||175||||
Sydie Peck|MED|76|66|790|2004||173||||
Lewie Coyle|DEF|76|72|426.1179.516|1995||173|||17|
Leighton Clarkson|MED|76|75|26.532|2001||175||||
Jed Wallace|MED|76|73|924.692.934.568|1994||178||||
Daniel Barlaser|MED|76|75|419.610|1997||184|||43|
George Tanner|DEF|76|75|175.552|1999||181||||
Femi Azeez|MED|76|72|825|2001||181||||
Louie Barry|MED|76|74|790.99|2003||174||||
Hayden Carter|DEF|76|70|146.177|1999||188||||
Karamoko Dembélé|MED|76|75|698.204|2003||167||||
George Edmundson|DEF|76|73|565.628.1180.1181.717|1997||190||||
Liam Kitching|DEF|76|65|830.1049|1999||191||||
Ali Lajami|DEF|7|79|45.48.41.52|1996||175|21||37.46|
Muhannad Al Shanqeeti|DEF|7|66|46|1999||173|0|||
Ali Majrashi|DEF|7|74|36.60.1182|1999||177|3||37|
Abdulrahman Ghareeb|MED|7|78|52|1997||164|13|||
Dean James|DEF|75|73|387|2000||177||||
Gao Tianyi|MED|30|69|755.1183|1998||185||||
Jiang Shenglong|DEF|30|72|755|2000||193||||
Zhu Chenjie|DEF|30|73|755|2000||185||||
Ousseynou Niang|MED|135|71|875|2001||168||||
Demba Thiam|GR|135|69|580.760|1998||202||||
Mory Diaw|GR|135|75|511.647.547|1993||195||||
Bingourou Kamara|GR|135|72|319.855.702|1996||193||||
Seny Dieng|GR|135|76|565.391.1184.698.823.272.270|1994||193||||
Pablo Sabbag|AVA|146|71|829.847|1997||189||||
Emiliano Amor|DEF|146|72|227.917|1995||183||||
Donat Rrudhani|MED|89|68|329.1170|1999||186||||
Meriton Korenica|AVA|89|72|191.1185.1186.1187.1051.339|1996||175|6|||E
Willum Þór Willumsson|MED|82|74|145.984.387|1998||193||||
Alfons Sampsted|DEF|82|67|145.614.1101|1998||188||||
Elías Rafn Ólafsson|GR|82|72|566|2000||201||||
Salim Diakité|DEF|100|66|652|2000||186|0|||
Amari'i Bell|DEF|85|74|539.145.1188.831.1189.1190|1994||180||||
Jamal Lowe|AVA|85|70|789.1191.1192.1193|1994||183||||
Zak Vyner|DEF|128|70|175.168|1997||178||||
Casper Nielsen|MED|43|75|822.289.626.875.224|1994||179||||
Nicolai Larsen|GR|43|69|796.23|1991||190||||
Emiliano Marcondes|MED|43|73|616.613|1995||183||||
Mark Brink|MED|43|69|613.289|1998||177||||
Isak Jensen|MED|43|72|22|2003||185||||
Henrik Dalsgaard|DEF|43|76|25.23.949|1989||192|1|||
Tonni Adamsen|AVA|43|70|796|1994||181||||
Tobias Salquist|DEF|43|70|613.796|1995||190||||
Couhaib Driouech|AVA|102|74|648.414|2002||175||||E
Mathys Tourraine|DEF|102|70|736|2001||172||||
Harlen Castillo|GR|33|62|106.671|1993||188||||
Frank Castañeda|MED|33|71|125.1194|1994||165||||
Jeison Medina|AVA|33|64|503.259|1995||180||||
Joan Castro|DEF|33|62|106|1997||176||||
Anderson Arroyo|DEF|33|71|174.361.465|1999||176||||
Max O'Leary|GR|78|68|175.168|1996||185||||
Will Keane|AVA|78|79|695.552.929.698.789|1993||188|||2.10.45|
Conor Shaughnessy|DEF|78|71|692.720|1996||192||||
Nick D'Agostino|AVA|8|66|901|1998||175|0|||
Paul Izzo|GR|8|74|716.31.205|1995||184||||
Anthony Carter|AVA|8|64|776.191.860|1994||192||||
Arno Verschueren|MED|20|70|334.473.588|1997||184||||
Matisse Samoise|DEF|20|74|465|2001||180||||
Brian De Keersmaecker|MED|20|68|641|2000||182||||
Kyriani Sabbe|DEF|20|73|224.225|2005||176||||
Louis Verstraete|MED|20|72|114.465.919.744.472|1999||186||||
Gary Magnée|MED|20|66|207|1999||175||||
Jorthy Mokio|MED|20|74|32|2008||182||||
Antoine Bernier|MED|20|64|702.744.706|1997||170||||
Philippe Rommens|MED|20|73|352|1997||175||||
Martin Delavallée|GR|20|66|702|2004||185||||
Hannes Van Der Bruggen|MED|20|66|207|1993||181|0|||
Geoffry Hairemans|MED|20|71|744.253.529.1195.471|1991||184||||
Thibaud Verlinden|MED|20|71|625.822.224.135.825.155.362.1019|1999||173||||
Christiaan Ravych|DEF|20|69|207|2002||192||||
Ewoud Pletinckx|DEF|20|66|625.949|2000||190|0|||
Andrés Herrera|DEF|4|73|230.771|1998||180||||
Luciano Gómez|DEF|4|69|435.125|1996||163||||
Ezequiel Bonifacio|DEF|4|71|435.382|1994||175||||
Leonardo Gil|MED|4|65|427.1196.296|1991||176||||
Francisco Pizzini|MED|4|72|917.857.438.1196.182|1993||179||||
Agustín Martegani|MED|4|71|150.771|2000||183||||
Iván Gómez|MED|4|67|206.296.683|1997||180||||
Felipe Peña Biafore|MED|4|65|506|2001||185||||
Néstor Breitenbruch|DEF|4|70|69.438.996|1995||178||||
Franco Zapiola|MED|4|68|683|2001||173||||
Leonardo Jara|DEF|4|74|388.296.150.247.917|1991||178||||
Adrían Spörle|DEF|4|66|138|1995||182|0|||
Ulises Ortegoza|MED|4|66|771|1997||178||||
Gaspar Gentile|MED|4|66|642|1995||183||||
Ignacio Schor|MED|4|65|683|2000||183||||
Aarón Quirós|DEF|4|66|917|2001||178|0|||
Franco Watson|MED|4|65|506|2002||177||||
David Barbona|MED|4|69|254.296|1995||179||||
Baltasar Rodríguez|MED|4|73|442.710.296|2003||173||||
Walter Mazzantti|MED|4|65|438.842|1996||173||||
Ramiro Enrique|AVA|4|71|49|2001||171||||
Agustín Ojeda|MED|4|71|609|2004||169||||
Jorge Carranza|GR|4|66|69|1981||187||||
Ramón Ábila|AVA|4|66|427|1989||177|0|||
Guido Villar|GR|4|66|438.1196|1998||193|0|||
Rodrigo Cabral|MED|4|69|427|2000||170||||
Joaquín Laso|DEF|4|64|842.1197|1990||185||||
Florián Monzón|AVA|4|65|917|2001||185||||
Kevin Lomónaco|DEF|4|71|438|2002||192||||
Fabián Noguera|DEF|4|71|150.125|1993||193||||
Manfred Fischer|MED|165|64|117|1995||179||||
Matthäus Taferner|MED|165|70|918.274.932|2001||170||||
Raphael Sallinger|GR|165|73|419.0|1995||196||||
Raul Florucz|AVA|165|73|875|2001||182||||D
Nikolas Sattlberger|MED|165|71|377|2004||189||||
Nicolas Wimmer|DEF|165|62|932|1995||190||||
Roman Květ|MED|32|65|340.1198|1997||187||||
Patrik Vydra|MED|32|70|806|2003||190||||
Patrik Hellebrand|MED|32|72|401.347.803.802.1041.179.493|1999||180|1|||
Václav Jurečka|AVA|32|73|180.1041.803.802|1994||182|9|||
Aleš Matějů|DEF|32|74|810.165.1198.902|1996||184||||
Kryštof Daněk|MED|32|72|501.795.806.660|2003||182||||
Štěpán Chaloupek|DEF|32|73|802.840|2003||190||||
Lukáš Hejda|DEF|32|73|902.806.1198.453|1990||188||||
Opa Sangante|DEF|70|66|869|1991||188|0|||
Dirk Proper|MED|124|72|589|2002||181||||
Andreas Müller|MED|2|70|479|2000||173||||
Calvin Brackelmann|DEF|2|65|750|1999||196||||
Maurice Malone|AVA|2|71|827|2000||186||||
Matheo Raab|GR|2|68|874|1998||186||||
Gerrit Nauber|DEF|2|63|387.1199|1992||185||||
Jackson Muleka|AVA|129|75|492.822|1999||180||||
Mouhamed Belkheir|AVA|5|66|505|1999||185||||D
Łukasz Łakomy|MED|126|71|625|2001||181||||
Radosław Murawski|MED|126|75|514.652.680|1994||173||||
Dominik Marczuk|MED|126|72|221.454.766|2003||180|1|||
Michał Helik|DEF|126|75|641.1200.237.129|1995||191||||
David Brekalo|DEF|53|76|637|1998||188|14|||
Anthony Dennis|MED|115|70|402|2004||179||||
Moses Usor|MED|115|71|501|2002||181||||
Chibuike Nwaiwu|DEF|115|73|932|2003||193||||
Adrian Nilsen Pereira|DEF|116|72|739|1999||185||||
Sondre Fet|MED|116|66|152|1997||177|0|||
Vetle Dragsnes|DEF|116|65|757.1147|1994||187||||
Conrad Wallem|MED|116|71|815|2000||180||||
Fredrik Gulbrandsen|AVA|116|75|576.531|1992||178||||
Stian Gregersen|DEF|116|74|108|1995||191||||
Odin Luraas Bjørtuft|DEF|116|66|152|1999||188|0|||
Egil Selvik|GR|116|74|921.1097|1997||187||||
Brede Mathias Moe|DEF|116|71|152|1991||184||||
Karol Mets|DEF|55|75|817.14.1201.901|1993||191||||
Orlando Mosquera|GR|121|75|42.542|1994||191||||
Eduardo Guerrero|AVA|121|64|275.1202|2000||177||||
Aníbal Godoy|MED|121|75|770.1203.388.1034.756|1990||182||||
Kal Naismith|DEF|51|71|539.717.1204.664.1086.692|1992||186||||
Nicky Cadden|MED|51|70|419.583|1996||178||||
Graeme Shinnie|MED|51|74|26.444.263.929|1991||175||||
Daniel Armstrong|MED|51|71|308.1057.1205.740.489|1997||175||||
James Penrice|DEF|51|69|12.664.533|1998||177||||
Zander Clark|GR|51|71|413.814.1206.1207|1992||191||||
Siriki Dembélé|MED|51|72|641.1130.675|1996||173||||
Nazar Voloshyn|MED|153|74|275|2003||175||||
Taras Mykhavko|DEF|153|74|275|2005||185||||
Jamie Roche|MED|142|69|509.798|2001||191||||
Linus Wahlqvist Egnell|DEF|142|76|685|1996||183|16|||
Oliver Dovin|GR|142|70|830.410.1208|2002||188||||
Noel Törnqvist|GR|142|66|572.1152.232|2002||197||||
Fernando Cornejo|MED|29|66|503|1996||174|0|||
Esteban Pavez|MED|29|69|227.102.1036|1990||179||||
Cristopher Toselli|GR|29|74|864.1157|1988||183|||17|
Luciano Cabral|MED|29|67|438|1995||170||||
Francisco Sierralta|DEF|29|75|15.871.663.1157|1997||192||||
Panos Katseris|MED|63|71|319|2001||183||||
Stavros Pilios|DEF|63|71|12|2000||175||||
Stanko Jurić|MED|40|73|886.405|1996||189||||
Šimun Hrgović|DEF|40|70|405|2004||173||||
Jakov Medić|DEF|40|63|616.1209|1998||193||||
Zoran Arsenić|DEF|40|64|715.930.1210.594.1211|1994||187||||
Niko Galešić|DEF|40|72|277|2001||182||||
Sandro Lauper|DEF|143|72|942.332|1996||185||||
Numa Lavanchy|DEF|143|70|329.509|1993||174||||
Christian Witzig|MED|143|71|331|2001||178||||
David von Ballmoos|GR|143|73|320.337.942|1994||192||||
Giotto Morandi|MED|143|69|786|1999||182||||
Jérémy Frick|GR|143|71|786|1993||192||||
Matteo Di Giusto|MED|143|73|321|2000||166||||
Benjamin Siegrist|GR|143|77|378.99.177.1176.1083.1212.936.273.204.326|1992||194||||
Risto Radunović|DEF|109|76|339.1213.1214|1992||184|41|||
Ramzi Safuri|MED|83|71|84|1995||184||||
Vicente Poggi|MED|157|71|388|2002||171||||
Jesús Trindade|MED|157|70|677.710|1993||176||||
Mauricio Pereyra|MED|157|75|597.598.494.637|1990||165||||
Pedro Milans|DEF|157|63|677|2002||172||||
Diego García|MED|157|64|677|1996||168||||
Rubén Bentancourt|AVA|157|74|89|1993||186||||
Alejo Cruz|AVA|157|63|677|2000||169||||E
Bruno Damiani|AVA|157|70|678.598.967|2002||185||||
Gonzalo Pérez|MED|157|70|506|2001||185||||
Agustín Rogel|DEF|157|75|418.598|1997||191||||
Robert Taylor|AVA|57|75|116.14|1994||181||||E
Cătălin Cîrjan|MED|132|71|308.326|2002||174|2|||
Valentin Cojocaru|GR|132|75|685.339.241.366.87.335.1215.749.354.625|1995||195|||13|
Ștefan Baiaram|MED|132|71|877|2002||185|6|||
Mihai Popescu|DEF|132|74|339.308.1216.1215.816.413.409.335|1993||188|8|||
Saulo Mineiro|AVA|16|71|755|1997||180||||
Alex Roldan|DEF|48|72|784.1025|1996||178||||
Edgaras Utkus|DEF|93|73|207|2000||187||||
Tom Ducrocq|MED|58|70|746.521|1999||176||||
Dylan Chambost|MED|58|71|230.862|1997||177||||
Alec Georgen|DEF|58|78|869.647|1998||172|||4.36.42.53.58|
Élie Youan|MED|58|73|419.600|1999||181||||
Teddy Okou|AVA|58|66|58|1998||166||||D
Brice Maubleu|GR|58|71|763.393.855|1989||192||||
Pierrick Capelle|MED|58|72|81.1217.1218.223|1987||180||||
Giovanni Haag|MED|58|71|727.19|2000||180||||
Léo Pétrot|DEF|58|74|283|1997||188||||
Cristian Shpendi|AVA|1|67|209|2003||181||||
Raymond Kopa|MED|58|91|81.820.721|1931||168|45||0.3.4.58|D
Luis Suárez Miramontes|MED|54|90|262.1219.127.440.768|1935||176|32||0.3.6.8.58|
Omar Sívori|AVA|4|90|734.463.601|1935||163|28||0.6|
Josef Masopust|MED|32|80|840.271.1220|1931||177|63||0|
Denis Law|AVA|51|91|425.551.848.552|1940||175|55||0.2.58|
Oleg Blokhin|AVA|156|90|275.1221.1222|1952||180|112||0|E
Allan Simonsen|AVA|43|90|893.158.127.213|1952||166|55||0.5.59|
Igor Belanov|AVA|156|86|1223.220.275.158.278.322|1960||173|33||0|
Jean-Pierre Papin|AVA|58|90|885.224.553.7.133.156.398.1224|1963||177|54||0.4.6.19.58.59|
Matthias Sammer|DEF|2|91|274.298.440.157|1967||181|74||0.5.8.58|
Kevin Keegan|AVA|76|94|783.532.408.805.610.1225|1951||173|63||0.2.5.58.59|
Paolo Rossi|AVA|84|94|463.232.1226.673.7.416|1956||174|48||0.6.58.60|
Stanley Matthews|AVA|76|88|825.1227.147|1915||174|56||0|D
Michael Ballack|MED|2|90|1228.0.524.133.215|1976||189|98||2.5.11.29.31.50|
Alan Shearer|AVA|76|86|805.146.610|1970||183|63||2|
Gary Lineker|AVA|76|89|518.299.127.853.599|1960||177|80||22|
Mario Kempes|AVA|4|87|439.738.888.734.430.1229.1230.1231.1232.1233|1954||182|43||60|
Frank Rijkaard|MED|124|91|32.812.779.7|1962||190|73||6.8.14.19.22.54.58|
Dino Zoff|GR|84|90|871.987.601.463|1942||182|112||6.8.59.60|
Giuseppe Meazza|AVA|84|90|440.7.463.890.100|1910||170|53||6.60|
Filippo Inzaghi|AVA|84|90|729.679.1234.416.663.100.463.7|1973||182|57||6.11.58.60|
Davor Šuker|AVA|40|89|594.277.787.721.93.925.1|1968||181|71||3.15.19.58|
Gennaro Gattuso|MED|84|90|673.717.764.7.329|1978||177|73||6.11.58.60|
Bebeto|AVA|16|86|279.280.357.892.262.242.787.159.1235.482.46|1964||174|75||60|
Roy Keane|MED|78|89|1236.617.552.204|1971||178|67||2.10.20.58|
Paul Breitner|DEF|2|90|133.721.278|1951||176|48||3.5.8.58.60|
Fabien Barthez|GR|58|92|854.553.587.552.600|1971||180|87||2.4.8.10.20.58.60|
Rudi Völler|AVA|2|89|1237.1.923.737.553.524|1960||179|90||4.58.60|
Rivelino|MED|16|87|234.358.45|1946||169|92||60|E
Kenny Dalglish|AVA|51|90|204.532|1951||173|102||2.10.58|
Just Fontaine|AVA|58|82|1238.612.820|1933||174|21||4|
Carlos Valderrama|MED|33|83|1239.567.260.578.886.436.459.1240.1241.229|1961||177|111|||
Andreas Brehme|DEF|2|88|1242.1243.0.133.440.779|1960||176|86||5.6.59.60|
Gordon Banks|GR|76|86|1244.1245.518.1246.825.1247.1248.1249|1937||183|73||60|
Robert Pires|MED|58|89|820.323.553.93.905.99.1250|1973||185|79||2.8.15.60|E
Paul Gascoigne|MED|76|85|610.853.510.717.565.299.175.1251.1252|1967||177|57|||
Henrik Larsson|AVA|142|90|1253.1100.354.204.127.552.1254|1971||177|106||3.10.20.58|
Gigi Riva|AVA|84|84|663.1255.196|1944||180|42||6.8|
Dragan Stojković|MED|145|84|713.294.553.416.599|1965||173|168||4.15.20|
Bixente Lizarazu|DEF|58|90|156.1256.101.133.647|1969||169|97||5.8.58.60|
Zbigniew Boniek|AVA|126|88|1257.928.463.737|1956||180|80||6.58|
Jari Litmanen|MED|57|88|1258.1017.32.1259.127.532.1260.1261.550.367|1971||181|137||54.58|
Edgar Davids|MED|124|88|32.7.463.440.127.853.243.1192|1973||168|77||6.11.14.37.54.58.59|
Roger Milla|AVA|24|83|1262.1263.1264.885.587.746.763.578.1224.1265.1232.1266|1952||176|63|||
Fritz Walter|MED|2|84|1267.0.1268|1920||175|61||60|
Daniel Passarella|DEF|4|88|780.734.356.440|1953||177|70||60|
Careca|AVA|16|86|396.834.601.483.777.1269.1270.1271|1960||182|64||6.44.59|
Bobby Moore|DEF|76|86|925.367.1272.566.1273|1941||177|108||60|
Berti Vogts|DEF|2|89|158|1946||168|96||5.8.59.60|
Pierre Littbarski|AVA|2|84|1212.1274.231.1275.452.1276|1960||168|73||60|D
Juan Sebastián Verón|MED|4|87|296.150.768.663.510.552.215.440.1277.1278|1975||186|73||2.6.10.17.20.37.44.51.59|
Gianluca Zambrotta|DEF|84|89|232.128.463.127.7.1279|1977||181|98||6.11.19.60|
Peter Shilton|GR|76|87|518.825.617.805.263.684.1280.155.236.925.526|1949||183|125||2.58|
Osvaldo Ardiles|MED|4|86|439.138.427.853.647.1281.698.146.1249.831|1952||169|52||60|
Christian Vieri|AVA|84|86|694.848.681.1282.895.100.463.110.510.440.7.587.356|1973||185|49||6.11.37|
Sepp Maier|GR|2|92|133|1944||183|95||5.8.58.60|
Johan Neeskens|MED|124|90|1283.32.127.1284.312.1285.1286.1287|1951||173|49||58|
Gianluca Vialli|AVA|84|87|238.768.463.215|1964||180|59||6.14.58.59|
Giacinto Facchetti|DEF|84|90|440|1942||188|94||6.8.58|
Uwe Seeler|AVA|2|85|408.1288|1936||170|72|||
Sándor Kocsis|AVA|73|87|352.1034.1289.127|1929||0|68||3|
Sol Campbell|DEF|76|86|925.853.93.692.1084.610|1974||188|73||2.15.19|
Ian Rush|AVA|123|89|1290.532.463.516.610.935.790.1291|1961||180|73||2.58|
Gunnar Nordahl|AVA|142|85|256.1292.7.737.1293|1921||180|33||6|
Giuseppe Bergomi|DEF|84|87|440|1963||183|81||6.11.14.59.60|
Djalma Santos|DEF|16|86|693.653.102|1929||172|98||60|
Paulo Roberto Falcão|MED|16|84|443.737.834|1953||183|28||6|
Nílton Santos|DEF|16|84|159|1925||180|75||60|
Gianfranco Zola|AVA|84|85|1294.1295.601.663.215.196|1966||168|35||6.11.14.44.59|
Didi|MED|16|87|1296.1297.1298.358.159.721.1299.1300.834|1929||174|68||58.60|
David Seaman|GR|76|86|516.675.145.698.93.551|1963||193|75||2.15|
Andy Cole|AVA|76|87|93.367.168.610.552.146.551.692.828.145.175.617|1971||178|15||2.10.58|
Paco Gento|AVA|54|91|1301.1302.709.721|1933||168|43||3.58|E
Oliver Bierhoff|AVA|2|87|1303.408.158.767.97.871.7.587.218|1968||191|70||6.8.24|
Marc Overmars|AVA|124|88|387.32.93.127|1973||173|86||2.15.54.58|E
Hugo Sánchez|AVA|111|91|865.1304.110.721.77.719.1305.501.1306.250.1307.1308|1958||174|58||3.59|
José Luis Chilavert|GR|122|82|1006.1089.771.779.917.293.677|1965||188|74||17|
René Higuita|GR|33|81|886.1309.106.1300.436.1310.459.671.1038.733.1311.1312|1966||172|68|||
Nwankwo Kanu|AVA|115|87|1313.32.440.93.924.692|1976||197|87||2.15.54.58.59|
Salvatore Schillaci|AVA|84|89|1314.463.440.974.1315|1964||173|16||59|
Hakan Şükür|AVA|152|85|1316.176.371.848.440.663.146|1971||191|112||59|
Ali Daei|AVA|80|84|1317.963.59.91.133.418.1318.1319.1274|1969||192|149||5|
Andrey Arshavin|AVA|134|88|947.93.497.1320|1981||172|75||12.15.59|E
Robinho|AVA|16|89|777.721.551.7.1321.112.799.131|1984||172|100||3.6.19.50|E
Emmanuel Adebayor|AVA|149|88|323.587.93.551.721.853.243.131.486.1015.1322|1984||191|87||12.15.24.31.37.42|
Klaas-Jan Huntelaar|AVA|124|87|1323.648.253.1324.414.32.721.7.782|1983||186|76||54|
Dirk Kuyt|AVA|124|88|882.354.532.351.1325|1980||184|104||43.54|D
Rafael van der Vaart|MED|124|88|32.408.721.853.142.566.289|1983||176|109||54|
Ole Gunnar Solskjær|AVA|116|89|1326.576.552|1973||179|67||2.10.20.58|
Robbie Keane|AVA|78|87|934.236.440.516.853.532.204.925.499.99.1327|1980||175|146||43|
Dimitar Berbatov|AVA|17|88|195.1328.524.1329.853.552.367.587.642.1330|1981||189|78||2.10.34|
Teddy Sheringham|AVA|76|88|568.268.1150.617.853.552.692.925.1331.823|1966||185|51||2.10.58|
Luís Fabiano|AVA|16|84|689.731.834.325.787.1137.892|1980||185|45||50.59|
Milan Baroš|AVA|32|88|126.532.99.541.692.371.84.573.804|1981||184|93||4.43.58|
Eiður Guðjohnsen|AVA|82|88|1332.648.1333.155.215.127.587.853.825.367.12.207.224.1334.576.1335|1978||187|88||2.3.26.31.44.58|
Leonardo|MED|16|66|357.834.888.482.647.7|1969||178|60||6.11.19.58.60|
Grzegorz Lato|AVA|126|79|821.469.1305|1950||175|100|||D
Kazimierz Deyna|MED|126|83|517.1336.1337.551.1304|1947||180|97|||
Raí|MED|16|84|1338.689.834.647|1965||189|49||4.60|
Juan Alberto Schiaffino|MED|157|86|677.7.737|1925||175|25||6.60|
Obdulio Varela|MED|157|82|1103.677|1917||178|45||60|
Enzo Francescoli|MED|157|83|1103.734.1275.553.196.848|1961||181|73||4.44|
Leônidas|AVA|16|83|1339.1340.677.892.159.1341.357.834|1913||173|19|||
Silvio Piola|AVA|84|86|696.510.848.463.618|1913||178|34||60|
Sandro Mazzola|MED|84|89|440|1942||179|70||6.8.58|
Teófilo Cubillas|MED|125|82|1068.132.325.1249.1285.1342|1949||173|81|||
Elías Figueroa|DEF|29|81|1103.1343.677.443.1011.227.1249|1946||183|47|||
Gaetano Scirea|DEF|84|87|100.463|1953||178|78||6.58.59.60|
Alessandro Costacurta|DEF|84|90|580.7|1966||182|59||6.11.14.19.58|
Claudio Gentile|DEF|84|87|1344.890.463.356.679|1953||178|71||6.59.60|
Ruud Krol|DEF|124|87|32.1345.601.1346|1949||184|83||58|
Günter Netzer|MED|2|89|158.721.391|1944||178|37||3.5.8.60|
Wolfgang Overath|MED|2|84|231|1943||176|81||5.60|
Bernd Schuster|MED|2|87|231.127.721.110.524.865|1959||181|21||3.8|
Gerson|MED|16|84|357.159.834.358|1941||170|70||60|
Tostão|AVA|16|82|78.242.892|1947||170|54||60|
Uli Hoeneß|MED|2|90|133.620|1952||180|35||5.8.58.60|
Emilio Butragueño|AVA|54|87|1347.1348.721.1307.1308|1963||168|69||3.59|
Míchel|MED|54|86|1348.721.1307|1963||183|66||3.59|D
Andoni Zubizarreta|GR|54|88|1349.725.66.144.101.127.1256.888|1961||187|126||3.22.44.58|
Rinat Dasayev|GR|156|83|1350.1351.809.787|1957||187|91|||
Walter Zenga|GR|84|91|764.440.1352.1353.768.650.607|1960||188|58||6.14.59|
Jean-Marie Pfaff|GR|20|85|1354.133.529.856|1953||180|64||5|
Cláudio Taffarel|GR|16|85|285.729.443.663.728.112.371|1966||180|104||59.60|
Ricardo Zamora|GR|54|87|1355.291.127.721.612|1901||181|92||3|
Geoff Hurst|AVA|76|84|1356.1357.925.1358.1227.825.1359.924.1273.1288|1941||0|49||60|
Rui Costa|MED|127|89|140.1360.356.7|1972||180|94||6.7.11.25.44.50.58|
Jens Lehmann|GR|2|87|782.7.157.93.298|1969||191|61||2.5.6.15.19.29.59|
Jerzy Dudek|GR|126|88|1361.1362.354.532.721|1973||187|60||3.31.43.58|
Rüştü Reçber|GR|152|88|84.351.127.141|1973||186|120||29|
Laurent Blanc|DEF|58|90|578.601.622.763.15.127.553.440.552|1965||192|97||2.4.8.10.20.44.60|
Marco Materazzi|DEF|84|89|510.1314.1363.857.673.199.299.440.1364|1973||193|41||6.31.37.43.58.60|
Tony Adams|DEF|76|86|93|1966||191|66||2.15|
Sami Hyypiä|DEF|57|88|1365.1259.532.524|1973||195|105||43.58.59|
Roberto Ayala|DEF|4|86|1002.734.601.7.888.779.905.710|1973||177|115||3.6.17.43.44.59|
Frank de Boer|DEF|124|89|32.127.371.57.717.954|1970||179|112||54.58.59|
Siniša Mihajlović|DEF|145|86|1366.911.294.737.768.510.440|1969||183|67||6.37.58|
Jürgen Kohler|DEF|2|90|1367.231.133.463.157|1965||186|105||5.6.8.58.59.60|
Esteban Cambiasso|MED|4|88|1348.438.734.721.440.518.632|1980||177|52||3.6.17.20.23.31.37.38.40.43.44.58|
Mark van Bommel|MED|124|88|362.648.127.133.7|1977||186|79||3.5.54.58|
Phillip Cocu|MED|124|88|22.907.648.127.47|1970||185|101||3.54|
Torsten Frings|MED|2|84|1368.923.157.133.849|1976||182|84||5.29|
Guti|MED|54|89|1347.721.1348.141|1976||185|13||3.19.20.23.58|
Mauro Camoranesi|MED|84|87|69.778.125.1103.185.416.463.298.1369.710|1976||174|55||6.19.24.44.60|
Youri Djorkaeff|MED|58|88|393.293.587.647.440.0.155.146.608|1968||178|82||8.15.59.60|
Hidetoshi Nakata|MED|86|86|792.673.737.663.154.356.155|1977||175|77||6.19|
Park Ji-sung|MED|37|66|498.648.552.698|1981||173|100||2.10.20.58|
Emre Belözoğlu|MED|152|86|371.440.610.351.110.131|1980||170|101||37.51.59|
Eric Abidal|DEF|58|90|1370.587.530.541.127.632|1979||186|67||3.4.24.26.44.58|
Christian Panucci|DEF|84|89|378.7.721.440.215.587.737.663|1973||184|57||6.11.14.19.58|`.split("\n").map(l=>{const[n,p,c,r,cl,by,ft,h,caps,born,tg,w]=l.split("|");return{n,p,c:NATS[c],r:+r,cl:cl?cl.split(".").map(i=>CLUBS[i]):[],by:+by,ft,h:+h,caps:+caps,born:born?NATS[born]:"",tg:tg?tg.split(".").map(i=>TAGS[i]):[],w:w||""}});
const COACHES=[
 {n:"José Mourinho",f:"4-2-3-1",t:"contra"},
 {n:"Guardiola",f:"4-3-3",t:"posse"},
 {n:"Klopp",f:"4-3-3",t:"pressao"},
 {n:"Alex Ferguson",f:"4-4-2",t:"alas"},
 {n:"Ancelotti",f:"4-3-3",t:"equilibrio"},
 {n:"Zidane",f:"4-3-3",t:"estrelas"},
 {n:"Simeone",f:"4-4-2",t:"bloco"},
 {n:"Conte",f:"3-5-2",t:"intensidade"},
 {n:"Jorge Jesus",f:"4-4-2",t:"ofensivo"},
 {n:"Fernando Santos",f:"4-3-3",t:"bloco"},
 {n:"Rúben Amorim",f:"3-4-3",t:"pressao"},
 {n:"Scolari",f:"4-2-3-1",t:"quimica"},
 {n:"Cruyff",f:"3-4-3",t:"ofensivo"},
 {n:"Arsène Wenger",f:"4-4-2",t:"ofensivo"},
 {n:"Arrigo Sacchi",f:"4-4-2",t:"pressao"},
 {n:"Luis Enrique",f:"4-3-3",t:"posse"},
 {n:"Sérgio Conceição",f:"4-4-2",t:"intensidade"},
 {n:"Abel Ferreira",f:"3-5-2",t:"contra"},
 {n:"Xabi Alonso",f:"3-4-3",t:"posse"},
 {n:"Del Bosque",f:"4-3-3",t:"equilibrio"}
];
