const flightWeather = [{"Abbr":"EGS","City":"Egilsstadir","Mode":"Sunny","Risks":[]},{"Abbr":"KEF","City":"Keflavik","Mode":"Snow","Risks":["Heavy rain","Heavy rain"]},{"Abbr":"YUL","City":"Montreal","Mode":"Light rain showers","Risks":["Heavy rain","Heavy rain","Heavy rain","Heavy rain","Heavy rain","Heavy rain"]},{"Abbr":"YYZ","City":"Toronto","Mode":"Clear sky","Risks":[]},{"Abbr":"BRU","City":"Brussels","Mode":"Partly cloudy","Risks":["Heavy rain","Heavy rain","Heavy rain","Heavy rain"]},{"Abbr":"SXF","City":"Berlin","Mode":"Snow","Risks":[]},{"Abbr":"FRA","City":"Frankfurt","Mode":"Clear sky","Risks":["Heavy rain","Heavy rain"]},{"Abbr":"HAM","City":"Hamburg","Mode":"Heavy rain","Risks":["Heavy rain","Heavy rain","Heavy rain"]},{"Abbr":"DUS","City":"Duesseldorf","Mode":"Sunny","Risks":[]},{"Abbr":"MUC","City":"Munich","Mode":"Light snow showers","Risks":[]},{"Abbr":"LEJ","City":"Leipzig","Mode":"Partly cloudy","Risks":[]},{"Abbr":"TXL","City":"Berlin","Mode":"Cloudy","Risks":[]},{"Abbr":"HHN","City":"Hahn","Mode":"Sunny","Risks":[]},{"Abbr":"XFW","City":"Hamburg","Mode":"Heavy rain","Risks":["Heavy rain","Heavy rain","Heavy rain"]},{"Abbr":"HEL","City":"Helsinki","Mode":"Cloudy","Risks":["Heavy rain","Heavy rain","Heavy rain"]},{"Abbr":"IVL","City":"Ivalo","Mode":"Sunny","Risks":[]},{"Abbr":"JOE","City":"Joensuu","Mode":"Light sleet","Risks":["Heavy sleet"]},{"Abbr":"JYV","City":"Jyvaskyla","Mode":"Sunny","Risks":[]},{"Abbr":"KEM","City":"Kemi","Mode":"Clear sky","Risks":[]},{"Abbr":"KAJ","City":"Kajaani","Mode":"Light snow","Risks":[]},{"Abbr":"KAO","City":"Kuusamo","Mode":"Light snow","Risks":[]},{"Abbr":"KTT","City":"Kittila","Mode":"Sunny","Risks":[]},{"Abbr":"KUO","City":"Kuopio","Mode":"Cloudy","Risks":[]},{"Abbr":"LPP","City":"Lappeenranta","Mode":"Partly cloudy","Risks":["Heavy snow","Heavy sleet","Heavy sleet"]},{"Abbr":"OUL","City":"Oulu","Mode":"Cloudy","Risks":[]},{"Abbr":"RVN","City":"Rovaniemi","Mode":"Snow","Risks":[]},{"Abbr":"TKU","City":"Turku","Mode":"Light rain","Risks":["Heavy rain","Heavy rain","Heavy rain"]},{"Abbr":"VAA","City":"Vaasa","Mode":"Sleet","Risks":[]},{"Abbr":"MAN","City":"Manchester","Mode":"Partly cloudy","Risks":["Heavy rain","Heavy rain","Heavy rain","Heavy rain","Heavy rain","Heavy rain","Heavy rain"]},{"Abbr":"LGW","City":"London","Mode":"Fair","Risks":[]},{"Abbr":"LHR","City":"London","Mode":"Partly cloudy","Risks":[]},{"Abbr":"EDI","City":"Edinburgh","Mode":"Partly cloudy","Risks":[]},{"Abbr":"CBG","City":"Cambridge","Mode":"Light rain showers","Risks":["Heavy rain showers","Heavy rain showers","Heavy rain"]},{"Abbr":"AMS","City":"Amsterdam","Mode":"Partly cloudy","Risks":["Heavy rain","Heavy rain"]},{"Abbr":"WOE","City":"Woensdrecht","Mode":"Sunny","Risks":[]},{"Abbr":"DUB","City":"Dublin","Mode":"Clear sky","Risks":[]},{"Abbr":"BLL","City":"Billund","Mode":"Sunny","Risks":[]},{"Abbr":"CPH","City":"Copenhagen","Mode":"Partly cloudy","Risks":[]},{"Abbr":"BGO","City":"Bergen","Mode":"Sunny","Risks":[]},{"Abbr":"OSL","City":"Oslo","Mode":"Sunny","Risks":[]},{"Abbr":"KRK","City":"Krakow","Mode":"Sunny","Risks":[]},{"Abbr":"WAW","City":"Warsaw","Mode":"Sunny","Risks":[]},{"Abbr":"GOT","City":"Gothenborg","Mode":"Cloudy","Risks":[]},{"Abbr":"MMX","City":"Malmoe","Mode":"Sunny","Risks":[]},{"Abbr":"ARN","City":"Stockholm","Mode":"Light snow","Risks":[]},{"Abbr":"FUE","City":"Fuerteventura","Mode":"Sunny","Risks":[]},{"Abbr":"LPA","City":"Gran Canaria","Mode":"Sunny","Risks":[]},{"Abbr":"ACE","City":"Arrecife","Mode":"Clear sky","Risks":[]},{"Abbr":"TFS","City":"Tenerife","Mode":"Sunny","Risks":[]},{"Abbr":"TFN","City":"Tenerife","Mode":"Sunny","Risks":[]},{"Abbr":"VAR","City":"Varna","Mode":"Rain showers","Risks":["Heavy rain","Heavy rain"]},{"Abbr":"PFO","City":"Paphos","Mode":"Clear sky","Risks":["Heavy rain showers","Heavy rain showers","Heavy rain showers","Heavy rain showers"]},{"Abbr":"DBV","City":"Dubrovnik","Mode":"Cloudy","Risks":["Heavy rain","Heavy rain showers","Heavy rain showers","Heavy rain","Heavy rain","Heavy rain showers","Heavy rain","Heavy rain","Heavy rain showers","Heavy rain","Heavy rain","Heavy rain","Heavy rain showers"]},{"Abbr":"PUY","City":"Pula","Mode":"Partly cloudy","Risks":["Heavy rain showers","Heavy rain","Heavy rain","Heavy rain showers","Heavy rain","Heavy rain showers"]},{"Abbr":"SPU","City":"Split","Mode":"Cloudy","Risks":["Heavy rain","Heavy rain","Heavy rain","Heavy rain","Heavy rain showers","Heavy rain","Heavy rain","Heavy rain","Heavy rain","Heavy rain showers"]},{"Abbr":"ZAG","City":"Zagreb","Mode":"Sleet","Risks":["Heavy rain","Heavy rain","Heavy rain","Heavy rain","Heavy rain","Heavy rain","Heavy rain","Heavy rain"]},{"Abbr":"ALC","City":"Alicante","Mode":"Rain","Risks":["Heavy rain"]},{"Abbr":"BCN","City":"Barcelona","Mode":"Rain showers","Risks":[]},{"Abbr":"IBZ","City":"Ibiza","Mode":"Rain","Risks":[]},{"Abbr":"MAD","City":"Madrid","Mode":"Cloudy","Risks":[]},{"Abbr":"AGP","City":"Malaga","Mode":"Heavy rain","Risks":["Heavy rain","Heavy rain","Heavy rain","Heavy rain","Heavy rain","Heavy rain","Heavy rain","Heavy rain","Heavy rain"]},{"Abbr":"MAH","City":"Menorca","Mode":"Sunny","Risks":[]},{"Abbr":"VLC","City":"Valencia","Mode":"Fair","Risks":["Heavy rain","Heavy rain"]},{"Abbr":"SVQ","City":"Sevilla","Mode":"Partly cloudy","Risks":["Heavy rain showers","Heavy rain showers"]},{"Abbr":"BOD","City":"Bordeaux","Mode":"Fair","Risks":["Heavy rain"]},{"Abbr":"TLS","City":"Toulouse","Mode":"Rain","Risks":[]},{"Abbr":"LDE","City":"Tarbes","Mode":"Rain showers","Risks":[]},{"Abbr":"BIQ","City":"Biarritz-bayonne","Mode":"Sunny","Risks":[]},{"Abbr":"NCE","City":"Nice","Mode":"Rain","Risks":[]},{"Abbr":"MPL","City":"Montpellier","Mode":"Heavy rain","Risks":["Heavy rain","Heavy rain","Heavy rain","Heavy rain","Heavy rain","Heavy rain","Heavy rain","Heavy rain","Heavy rain","Heavy rain"]},{"Abbr":"CDG","City":"Paris","Mode":"Heavy rain","Risks":["Heavy rain","Heavy rain","Heavy rain","Heavy rain"]},{"Abbr":"HER","City":"Heraklion","Mode":"Cloudy","Risks":["Heavy rain"]},{"Abbr":"KGS","City":"Kos","Mode":"Partly cloudy","Risks":[]},{"Abbr":"AOK","City":"Karpathos","Mode":"Sunny","Risks":[]},{"Abbr":"CFU","City":"Kerkyra/corfu","Mode":"Sunny","Risks":[]},{"Abbr":"MJT","City":"Mytilini","Mode":"Sunny","Risks":[]},{"Abbr":"PVK","City":"Preveza","Mode":"Clear sky","Risks":["Heavy rain","Heavy rain","Heavy rain showers","Heavy rain","Heavy rain","Heavy rain","Heavy rain","Heavy rain","Heavy rain","Heavy rain showers","Heavy rain","Heavy rain showers","Heavy rain showers","Heavy rain showers","Heavy rain showers","Heavy rain showers"]},{"Abbr":"RHO","City":"Rhodos","Mode":"Heavy rain showers","Risks":["Heavy rain showers","Heavy rain showers","Heavy rain","Heavy rain showers","Heavy rain showers","Heavy rain showers","Heavy rain"]},{"Abbr":"CHQ","City":"Chania","Mode":"Partly cloudy","Risks":["Heavy rain showers"]},{"Abbr":"JSI","City":"Skiathos","Mode":"Sunny","Risks":[]},{"Abbr":"JTR","City":"Thira","Mode":"Sunny","Risks":[]},{"Abbr":"ZTH","City":"Zakynthos","Mode":"Sunny","Risks":[]},{"Abbr":"BUD","City":"Budapest","Mode":"Partly cloudy","Risks":["Heavy sleet","Heavy sleet","Heavy snow","Heavy sleet","Heavy sleet","Heavy snow"]},{"Abbr":"CTA","City":"Catania","Mode":"Cloudy","Risks":[]},{"Abbr":"MXP","City":"Milano","Mode":"Cloudy","Risks":[]},{"Abbr":"LIN","City":"Milan","Mode":"Partly cloudy","Risks":[]},{"Abbr":"RMI","City":"Rimini","Mode":"Sunny","Risks":[]},{"Abbr":"VRN","City":"Villafranca","Mode":"Sunny","Risks":[]},{"Abbr":"VCE","City":"Venice","Mode":"Clear sky","Risks":[]},{"Abbr":"FCO","City":"Rome","Mode":"Rain","Risks":["Heavy rain","Heavy rain","Heavy rain","Heavy rain","Heavy rain","Heavy rain"]},{"Abbr":"NAP","City":"Naples","Mode":"Heavy rain showers","Risks":["Heavy rain","Heavy rain showers","Heavy rain showers","Heavy rain showers","Heavy rain showers","Heavy rain","Heavy rain showers","Heavy rain showers","Heavy rain showers","Heavy rain showers"]},{"Abbr":"PSA","City":"Pisa","Mode":"Fair","Risks":["Heavy rain","Heavy rain","Heavy rain"]},{"Abbr":"LJU","City":"Ljubljana","Mode":"Heavy rain","Risks":["Heavy rain","Heavy rain","Heavy rain","Heavy rain","Heavy rain","Heavy rain","Heavy rain","Heavy rain","Heavy rain","Heavy rain","Heavy rain","Heavy rain","Heavy rain","Heavy rain","Heavy rain"]},{"Abbr":"OSR","City":"Ostrava","Mode":"Partly cloudy","Risks":["Heavy sleet","Heavy sleet"]},{"Abbr":"PRG","City":"Prague","Mode":"Light snow","Risks":[]},{"Abbr":"TLV","City":"Tel-aviv","Mode":"Sunny","Risks":[]},{"Abbr":"VDA","City":"Ovda","Mode":"Sunny","Risks":[]},{"Abbr":"MLA","City":"Malta","Mode":"Sunny","Risks":[]},{"Abbr":"INN","City":"Innsbruck","Mode":"Snow","Risks":[]},{"Abbr":"SZG","City":"Salzburg","Mode":"Rain","Risks":["Heavy snow","Heavy snow"]},{"Abbr":"VIE","City":"Vienna","Mode":"Light snow","Risks":[]},{"Abbr":"PXO","City":"Porto Santo","Mode":"Sunny","Risks":[]},{"Abbr":"LIS","City":"Lisbon","Mode":"Cloudy","Risks":["Heavy rain","Heavy rain","Heavy rain","Heavy rain","Heavy rain","Heavy rain"]},{"Abbr":"GVA","City":"Geneva","Mode":"Partly cloudy","Risks":[]},{"Abbr":"ZRH","City":"Zurich","Mode":"Rain","Risks":[]},{"Abbr":"AYT","City":"Antalya","Mode":"Rain showers","Risks":["Heavy rain","Heavy rain","Heavy rain","Heavy rain","Heavy rain showers"]},{"Abbr":"DLM","City":"Dalaman","Mode":"Sunny","Risks":[]},{"Abbr":"BTS","City":"Bratislava","Mode":"Partly cloudy","Risks":[]},{"Abbr":"POP","City":"Puerto Plata","Mode":"Clear sky","Risks":[]},{"Abbr":"PVR","City":"Puerto Vallarta","Mode":"Partly cloudy","Risks":[]},{"Abbr":"HAV","City":"Havana","Mode":"Cloudy","Risks":["Heavy rain showers","Heavy rain showers","Heavy rain showers","Heavy rain showers"]},{"Abbr":"VRA","City":"Varadero","Mode":"Clear sky","Risks":[]},{"Abbr":"DXB","City":"Dubai","Mode":"Clear sky","Risks":[]},{"Abbr":"NRT","City":"Tokyo","Mode":"Light rain","Risks":[]},{"Abbr":"FUK","City":"Fukuoka","Mode":"Clear sky","Risks":["Heavy rain"]},{"Abbr":"TSE","City":"Tselinograd","Mode":"Sunny","Risks":[]},{"Abbr":"AKX","City":"Aktyubinsk","Mode":"Fair","Risks":[]},{"Abbr":"KHV","City":"Khabarovsk","Mode":"Snow","Risks":[]},{"Abbr":"VVO","City":"Vladivostok","Mode":"Cloudy","Risks":[]},{"Abbr":"LED","City":"St. Petersburg","Mode":"Sunny","Risks":[]},{"Abbr":"MMK","City":"Murmansk","Mode":"Light snow","Risks":[]},{"Abbr":"MSQ","City":"Minsk 2","Mode":"Sleet","Risks":[]},{"Abbr":"OMS","City":"Omsk","Mode":"Fair","Risks":[]},{"Abbr":"AER","City":"Sochi","Mode":"Cloudy","Risks":["Heavy rain","Heavy rain"]},{"Abbr":"CEK","City":"Chelyabinsk","Mode":"Cloudy","Risks":[]},{"Abbr":"MQF","City":"Magnetiogorsk","Mode":"Clear sky","Risks":[]},{"Abbr":"SVX","City":"Yekaterinburg","Mode":"Clear sky","Risks":[]},{"Abbr":"SVO","City":"Moscow","Mode":"Fair","Risks":[]},{"Abbr":"KZN","City":"Kazan","Mode":"Fair","Risks":[]},{"Abbr":"UFA","City":"Ufa","Mode":"Clear sky","Risks":[]},{"Abbr":"KUF","City":"Samara","Mode":"Cloudy","Risks":["Heavy rain showers","Heavy rain","Heavy snow","Heavy rain","Heavy snow"]},{"Abbr":"GOI","City":"Goa","Mode":"Sunny","Risks":[]},{"Abbr":"HKG","City":"Hong Kong","Mode":"Fair","Risks":[]},{"Abbr":"DEL","City":"Delhi","Mode":"Clear sky","Risks":[]},{"Abbr":"MFM","City":"Macau","Mode":"Sunny","Risks":[]},{"Abbr":"KBV","City":"Krabi","Mode":"Heavy rain","Risks":["Heavy rain","Heavy rain","Heavy rain","Heavy rain","Heavy rain showers"]},{"Abbr":"HKT","City":"Phuket","Mode":"Light rain","Risks":["Heavy rain","Heavy rain","Heavy rain","Heavy rain","Heavy rain","Heavy rain","Heavy rain","Heavy rain","Heavy rain","Heavy rain","Heavy rain","Heavy rain"]},{"Abbr":"SGN","City":"Ho Chi Minh City","Mode":"Fair","Risks":["Heavy rain","Heavy rain","Heavy rain","Heavy rain showers","Heavy rain","Heavy rain","Heavy rain","Heavy rain showers"]},{"Abbr":"SIN","City":"Singapore","Mode":"Light rain","Risks":["Heavy rain","Heavy rain","Heavy rain","Heavy rain","Heavy rain","Heavy rain","Heavy rain","Heavy rain","Heavy rain","Heavy rain"]},{"Abbr":"PEK","City":"Beijing","Mode":"Cloudy","Risks":[]},{"Abbr":"CAN","City":"Guangzhou","Mode":"Clear sky","Risks":[]},{"Abbr":"XIY","City":"Xi'an","Mode":"Partly cloudy","Risks":[]},{"Abbr":"SHA","City":"Shanghai","Mode":"Partly cloudy","Risks":["Heavy rain","Heavy rain"]},{"Abbr":"CKG","City":"Chongqing","Mode":"Cloudy","Risks":["Heavy rain"]},{"Abbr":"PVG","City":"Shanghai","Mode":"Rain","Risks":["Heavy rain","Heavy rain"]},{"Abbr":"SFO","City":"San Francisco","Mode":"Rain showers","Risks":["Heavy rain","Heavy rain showers","Heavy rain showers","Heavy rain","Heavy rain","Heavy rain","Heavy rain","Heavy rain","Heavy rain showers","Heavy rain showers","Heavy rain"]},{"Abbr":"MIA","City":"Miami","Mode":"Rain showers","Risks":[]},{"Abbr":"TUS","City":"Tucson","Mode":"Fair","Risks":["Heavy rain"]},{"Abbr":"ROW","City":"Roswell","Mode":"Cloudy","Risks":[]},{"Abbr":"JFK","City":"New York","Mode":"Clear sky","Risks":["Heavy rain","Heavy rain","Heavy rain","Heavy rain","Heavy rain","Heavy rain","Heavy rain","Heavy rain","Heavy rain","Heavy rain","Heavy rain","Heavy rain"]},{"Abbr":"ORD","City":"Chicago","Mode":"Cloudy","Risks":["Heavy rain","Heavy rain","Heavy rain","Heavy rain"]},{"Abbr":"BKK","City":"Bangkok","Mode":"Cloudy","Risks":[]},{"Abbr":"ICN","City":"Seoul","Mode":"Cloudy","Risks":[]},{"Abbr":"ATH","City":"Athens","Mode":"Rain showers","Risks":["Heavy rain","Heavy rain showers","Heavy rain","Heavy rain showers"]},{"Abbr":"NGO","City":"Nagoya","Mode":"Cloudy","Risks":["Heavy rain","Heavy rain","Heavy rain","Heavy rain showers","Heavy rain"]},{"Abbr":"RIX","City":"Riga","Mode":"Snow","Risks":[]},{"Abbr":"KUN","City":"Kaunas","Mode":"Sleet","Risks":[]},{"Abbr":"VNO","City":"Vilnius","Mode":"Rain","Risks":[]},{"Abbr":"KIX","City":"Osaka","Mode":"Clear sky","Risks":[]},{"Abbr":"PMI","City":"Palma de Mallorca","Mode":"Clear sky","Risks":[]},{"Abbr":"OVB","City":"Novosibirsk","Mode":"Snow","Risks":[]},{"Abbr":"FNC","City":"Funchal","Mode":"Fair","Risks":["Heavy rain","Heavy rain showers","Heavy rain","Heavy rain","Heavy rain","Heavy rain","Heavy rain","Heavy rain","Heavy rain","Heavy rain","Heavy rain","Heavy rain","Heavy rain","Heavy rain","Heavy rain","Heavy rain showers","Heavy rain showers","Heavy rain showers","Heavy rain","Heavy rain","Heavy rain","Heavy rain"]},{"Abbr":"GOJ","City":"Nizhniy Novgorod","Mode":"Fair","Risks":[]},{"Abbr":"CEE","City":"Cherepovets","Mode":"Cloudy","Risks":["Heavy snow"]},{"Abbr":"NOZ","City":"Novokuznetsk","Mode":"Partly cloudy","Risks":[]},{"Abbr":"HMA","City":"Khanty-Mansiysk","Mode":"Cloudy","Risks":[]},{"Abbr":"HET","City":"Hohhot","Mode":"Cloudy","Risks":[]},{"Abbr":"IAR","City":"Yaroslavl","Mode":"Snow","Risks":[]},{"Abbr":"NBC","City":"Nizhnekamsk","Mode":"Clear sky","Risks":[]},{"Abbr":"DWC","City":"Dubai","Mode":"Clear sky","Risks":[]},{"Abbr":"GZP","City":"Alanya","Mode":"Rain","Risks":["Heavy rain","Heavy rain","Heavy rain","Heavy rain","Heavy rain showers","Heavy rain showers","Heavy rain showers","Heavy rain","Heavy rain showers"]},{"Abbr":"TEV","City":"Teruel","Mode":"Fair","Risks":[]}]

export default flightWeather;
