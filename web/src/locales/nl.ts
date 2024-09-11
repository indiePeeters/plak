import HomeFooter from "@/features/HomeFooter/HomeFooter.vue";
import OpeningTimes from "@/features/HomeFooter/openingtimes/OpeningTimes.vue";

export default {
  features: {
    homeHeader: {
      title: 'Genieten van lokale producten doe je bij Boerderijwinkel van de plak!',
      description: 'Ervaar het beste van het platteland, Bij ons vind je verse, ambachtelijke producten, vol van smaak en met liefde gemaakt. Van knapperige groenten tot lokaal vlees, alles wat je nodig hebt voor een gezonde maaltijd is hier te vinden. Kom langs en proef het verschil dat echt vers maakt!',
      primaryAction: 'Onze Producten',
      secondaryAction: 'Hoe het ooit begon…',
    },
    aboutUs: {
      title: 'Hoe het ooit begon…',
      text: `Er heeft altijd een boerin in mij gezeten, maar ik deed er nooit echt iets mee. Tot ik een paar jaar geleden een stukje grond van mijn ouders kreeg. Toen leerde ik boer Mathee kennen, kocht ik drie Merinoschapen van hem en zag ik een jaar later de eerste lammetjes geboren worden—een bijzondere ervaring! Merinoschapen staan bekend om hun fijne, niet-kriebelige wol. Deze wol gaat naar Reina van The Knitwith Stable, die er eerlijke kleding van maakt.
            
            Daarnaast raakte ik geïnspireerd door boerin Inge uit de Achterhoek, die scharrelvarkens houdt. Haar manier van varkens houden spreekt me aan: de dieren leven buiten, wroeten in de grond, slapen in een bed van stro en krijgen voer van reststromen en groenteafval. Dit leidt tot een mooi stukje vlees zonder medicatie, een voorbeeld van kringlooplandbouw.

            Op mijn grond plant ik ook hagen, fruit- en lindebomen, wat de biodiversiteit bevordert. Tussen mijn dieren voel ik me helemaal op mijn plek! Als ik tegen mijn kinderen zei “ik ga naar de plak,” wisten ze precies wat ik bedoelde. “De plak” betekent stukje grond in dialect en veel van wat in de boerderijwinkel verkocht wordt, komt letterlijk ‘van de plak’. Ik vind het belangrijk om samen te werken met gepassioneerde, liefst lokale leveranciers en alles onder één dak te brengen, zodat jij als consument de waarde van het product kunt waarderen. Dat maakt mij blij!`
    },
    ourProducts: {
      title: 'Onze Producten',
      products: {
        bread: {
          title: 'Brood',
          description: 'Hier is het allemaal mee begonnen, op deze plek wordt al brood gebakken sinds 1901! “Brood van v. Eijk” staat erom bekend dat het lekker lang vers blijft, ook vanuit de vriezer.'
        },
        cheese: {
          title: 'Zuivel en Kaas',
          description: 'Volgens hun eigen recept, worden er door de boeren mooie producten gemaakt. Pure producten met geen of zo min mogelijk toevoegingen.'
        },
        meat: {
          title: 'Vlees',
          description: 'Vlees van eigen scharrelvarkens en varkens- runds-, kippenvlees van een lokale slager die met passie over zijn product kan vertellen.'
        },
        other: {
          title: 'En nog meer...',
          description: 'Kruidenthee, eitjes, honing uit eigen dorp. Friet, snacks en houdbare producten en kadopakketjes.'
        }
      }
    },
    homeFooter: {
      openingTimes: {
        title: 'Openingstijden',
        description: 'Let op, niet iedere dag geopend.',
        daytimes: {
          monday: {
            day: 'Maandag',
            from: '',
            until: ''
          },
          tuesday: {
            day: 'Dinsdag',
            from: '09:00',
            until: '17:30'
          },
          wednesday: {
            day: 'Woensdag',
            from: '',
            until: ''
          },
          thursday: {
            day: 'Donderdag',
            from: '',
            until: ''
          },
          friday: {
            day: 'Vrijdag',
            from: '09:00',
            until: '17:30'
          },
          saturday: {
            day: 'Zaterdag',
            from: '09:00',
            until: '15:00'
          },
          sunday: {
            day: 'Zondag',
            from: '',
            until: ''
          },
        }
      },
      address: 'Boerderijwinkel van de plak Boerenkamplaan 54, 5712AG Someren',
      socials: {
        instagram: { 
          name: 'boerderijwinkelvandeplak',
          url: 'https://www.instagram.com/boerderijwinkelvandeplak/'
        },
        facebook: { 
          name: 'boerderijwinkelvandeplak',
          url: 'www.facebook.nl'
        },
        mail: { 
          name: 'info@boerderijwinkelvandeplak.nl',
          url: 'info@boerderijwinkelvandeplak.nl'
        },
      }
    }
  }
} as const
  