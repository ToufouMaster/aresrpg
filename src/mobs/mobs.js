import { chat_color } from '../chat.js'

export const mobs_dialogs = {
  'Citoyen de Thebes': {
    name: chat_color.bright_green + ' Citoyen ',
    dialogs: [
      chat_color.white + "C'est incroyable ce beau temps !",
      chat_color.white +
        "C'est toi {player} ? Je pensais que tu étais plus grand !",
      chat_color.white +
        "Fais attention à ne pas t'aventurer dans les catacombes, c'est dangereux !",
      chat_color.white +
        "Je n'ai pas le temps de te parler, va t'en ou j'apelle la garde !",
      chat_color.white + 'Encore toi ?',
      chat_color.white +
        'Un jour les dragons reviendront et ce sera la fin de notre monde !',
      chat_color.white + 'Laisse moi !',
    ],
  },
  Moine: {
    // Moine
    name: chat_color.bright_green + ' Moine ',
    dialogs: [
      chat_color.white + 'A Bien le bonjour étranger !',
      chat_color.white +
        "Le père Niflard n'est pas rentré de sa ceuillette de choux..",
      chat_color.white + 'Amen',
      chat_color.white +
        "A quelques lieues d'içi se trouve un gouffre terrible remplit d'Arakne.",
      chat_color.white + 'Je doit aller à la messe !',
      chat_color.white +
        'Un jour les dragons reviendront et ce sera la fin de notre monde !',
      chat_color.white + 'Diantre ! que tu est vilain..',
      chat_color.white + 'Oh !',
      chat_color.white + "Une bonne cervoise et c'est repartit !",
      chat_color.white + 'Hum ?',
    ],
  },
  'Citoyen de Segeste': {
    // Citoyen de Segeste
    name: chat_color.bright_green + ' Citoyen ',
    dialogs: [
      chat_color.white +
        'A Ségeste nous aimons la pêche et les belles villageoises !',
      chat_color.white +
        "Teh c'est le petit {player} ! On m'avait dit que tu étais moche mais je ne pensais pas à ce point !",
      chat_color.white +
        'On raconte que le puit de Ségeste est ensorcelé.. sans doute une vieille légende',
      chat_color.white +
        "Ne m'adresse pas la parole petit ! nous n'avons pas les mêmes valeurs.",
      chat_color.white + 'Encore toi ?',
      chat_color.white +
        'Un jour les dragons reviendront et ce sera la fin de notre monde !',
      chat_color.white +
        "AAAAAAAAAAAAAAH !!!! Oups pardon je t'avais prit pour un infécté..",
      chat_color.white + 'Ce maudit Craken a encore provoqué une inondation...',
      chat_color.white + "Une bonne bière et c'est repartit !",
      chat_color.white + 'Laisse moi !',
    ],
  },
  'Citoyen de Numen': {
    // Citoyen de Numen
    name: chat_color.bright_green + ' Citoyen ',
    dialogs: [
      chat_color.white + 'O man dôr túliel le ?',
      chat_color.white + 'Man anírach cerin an le ?',
      chat_color.white + 'Gwanno ereb nin !',
      chat_color.white + 'No dhínen !',
      chat_color.white + 'Garich i dhôl goll o Orch',
      chat_color.white + 'Nai Aragog meditha le!',
      chat_color.white + 'Heca, firimar !',
    ],
  },
}

export const mobs = {
  abrakleur: {
    displayName: 'Abrakleur',
    type: 'mob',
    mob: 'enderman',
  },
  centenary_abrakleur: {
    displayName: 'Abrakleur Centenaire',
    type: 'mob',
    mob: 'enderman',
  },
  atrophy_ankre: {
    displayName: 'Ankre Atrophié',
    type: 'mob',
    mob: 'squid',
  },
  harpoon_ankre: {
    displayName: 'Ankre Harpon',
    type: 'mob',
    mob: 'squid',
  },
  depths_ankre: {
    displayName: 'Ankre des Profondeurs',
    type: 'mob',
    mob: 'squid',
  },
  venerable_ankre: {
    displayName: 'Ankre Vénérables',
    type: 'mob',
    mob: 'squid',
  },
  hungry_arakne: {
    displayName: 'Arakne Affamée',
    type: 'mob',
    mob: 'cave_spider',
  },
  elven_arakne: {
    displayName: 'Arakne Elfique',
    type: 'mob',
    mob: 'spider',
  },
  harmless_arakne: {
    displayName: 'Arakne Innofensive',
    type: 'mob',
    mob: 'cave_spider',
  },
  darker_arakne: {
    displayName: 'Arakne Sombre',
    type: 'mob',
    mob: 'spider',
  },
  darkness_archer: {
    displayName: 'Archer des Ténèbres',
    type: 'mob',
    mob: 'zombified_piglin',
  },
  cannibal: {
    displayName: 'Cannibale',
    type: 'mob',
    mob: 'villager',
  },
  cerbere: {
    displayName: 'Cerbère',
    type: 'mob',
    mob: 'wolf',
  },
  shaman: {
    displayName: 'Chaman',
    type: 'mob',
    mob: 'villager',
  },
  war_chief: {
    displayName: 'Chef de Guerre',
    type: 'mob',
    mob: 'villager',
  },
  hades_horse: {
    displayName: 'Krizan',
    type: 'mob',
    mob: 'horse',
  },
  claqueur: {
    displayName: 'Claqueur',
    type: 'mob',
    mob: 'zombie',
  },
  decomposed_claqueur: {
    displayName: 'Claqueur Décomposé',
    type: 'mob',
    mob: 'zombie',
  },
  dark_claqueur: {
    displayName: 'Claqueur Sombre',
    type: 'mob',
    mob: 'zombie',
  },
  tormented_skull: {
    displayName: 'Crane Tourmenté',
    type: 'mob',
    mob: 'skeleton',
  },
  hungry_demon: {
    displayName: 'Démon Affamé',
    type: 'mob',
    mob: 'zombified_piglin',
  },
  caverns_devourer: {
    displayName: 'Dévoreuse des Cavernes',
    type: 'mob',
    mob: 'spider',
  },
  hairy_devourer: {
    displayName: 'Dévoreuse Velue',
    type: 'mob',
    mob: 'spider',
  },
  draugr: {
    displayName: 'Draugr',
    type: 'mob',
    mob: 'skeleton',
  },
  antic_draugr: {
    displayName: 'Draugr Antique',
    type: 'mob',
    mob: 'skeleton',
  },
  archer_draugr: {
    displayName: 'Draugr Archer',
    type: 'mob',
    mob: 'skeleton',
  },
  lancer_draugr: {
    displayName: 'Draugr Lancier',
    type: 'mob',
    mob: 'skeleton',
  },
  possesses_draugr: {
    displayName: 'Draugr Possédé',
    type: 'mob',
    mob: 'skeleton',
  },
  insolent_spirit: {
    displayName: 'Esprit Insolent',
    type: 'mob',
    mob: 'blaze',
  },
  snow_spirit: {
    displayName: 'Esprit des Glaces',
    type: 'mob',
    mob: 'skeleton',
  },
  abyss_guardian: {
    displayName: 'Gardien des Abysses',
    type: 'mob',
    mob: 'zombified_piglin',
  },
  wolf_guardian: {
    displayName: 'Guerrier Loup',
    type: 'mob',
    mob: 'zombie',
  },
  infected: {
    displayName: 'Infécté',
    type: 'mob',
    mob: 'zombie',
  },
  young_wolf: {
    displayName: 'Jeune Loup',
    type: 'mob',
    mob: 'wolf',
  },
  young_savage: {
    displayName: 'Jeune Sauvageon',
    type: 'mob',
    mob: 'villager',
  },
  young_poisonous: {
    displayName: 'Jeune Venimeuse',
    type: 'mob',
    mob: 'cave_spider',
  },
  wolf: {
    displayName: 'Loup',
    type: 'mob',
    mob: 'wolf',
  },
  hungry_wolf: {
    displayName: 'Loup Affamé',
    type: 'mob',
    mob: 'wolf',
  },
  antic_wolf: {
    displayName: 'Loup Antique',
    type: 'mob',
    mob: 'wolf',
  },
  white_wolf: {
    displayName: 'Loup Blanc',
    type: 'mob',
    mob: 'wolf',
  },
  caverns_wolf: {
    displayName: 'Loup des Cavernes',
    type: 'mob',
    mob: 'wolf',
  },
  enraged_wolf: {
    displayName: 'Loup Enragé',
    type: 'mob',
    mob: 'wolf',
  },
  she_wolf: {
    displayName: 'Louve',
    type: 'mob',
    mob: 'wolf',
  },
  cub: {
    displayName: 'Louveteau',
    type: 'mob',
    mob: 'wolf',
  },
  white_walker: {
    displayName: 'Marcheur Blanc',
    type: 'mob',
    mob: 'zombie',
  },
  sheep: {
    displayName: 'Mouton de Thebes',
    type: 'mob',
    mob: 'sheep',
  },
  nephilainaurata: {
    displayName: 'Néphila Inaurata',
    type: 'mob',
    mob: 'spider',
  },
  golden_nephile: {
    displayName: 'Néphile Dorée',
    type: 'mob',
    mob: 'spider',
  },
  immature_nephile: {
    displayName: 'Néphile Immature',
    type: 'mob',
    mob: 'cave_spider',
  },
  talus_pig: {
    displayName: 'Porc de Talus',
    type: 'mob',
    mob: 'pig',
  },
  bamboula_pig: {
    displayName: 'Porc Bamboula',
    type: 'mob',
    mob: 'pig',
  },
  savannah_pig: {
    displayName: 'Porc de Savanne',
    type: 'mob',
    mob: 'pig',
  },
  chicken: {
    displayName: 'Poule',
    type: 'mob',
    mob: 'chicken',
  },
  sick_chicken: {
    displayName: 'Poule Malade',
    type: 'mob',
    mob: 'chicken',
  },
  monk_chicken: {
    displayName: 'Poulet Moîne',
    type: 'mob',
    mob: 'chicken',
  },
  rat: {
    displayName: 'Rat',
    type: 'mob',
    mob: 'silverfish',
  },
  nordicRat: {
    displayName: 'Rat Nordique',
    type: 'mob',
    mob: 'silverfish',
  },
  plains_boar: {
    displayName: 'Sanglier des Plaines',
    type: 'mob',
    mob: 'pig',
  },
  savage: {
    displayName: 'Sauvageon',
    type: 'mob',
    mob: 'villager',
  },
  aggressive_savage: {
    displayName: 'Sauvageon Agressif',
    type: 'mob',
    mob: 'villager',
  },
  fallen_savage: {
    displayName: 'Sauvageon Déchu',
    type: 'mob',
    mob: 'villager',
  },
  slinger_savage: {
    displayName: 'Sauvageon Frondeur',
    type: 'mob',
    mob: 'villager',
  },
  fertile_savagene: {
    displayName: 'Sauvageonne Féconde',
    type: 'mob',
    mob: 'villager',
  },
  savagene: {
    displayName: 'Sauvageonne',
    type: 'mob',
    mob: 'villager',
  },
  savage_perjurer: {
    displayName: 'Sauvageon Parjure',
    type: 'mob',
    mob: 'villager',
  },
  darkness_soldier: {
    displayName: 'Soldat des Ténèbres',
    type: 'mob',
    mob: 'zombified_piglin',
  },
  skeleton: {
    displayName: 'Squelette',
    type: 'mob',
    mob: 'skeleton',
  },
  brittle_skeleton: {
    displayName: 'Squelette Fragile',
    type: 'mob',
    mob: 'skeleton',
  },
  nordic_skeleton: {
    displayName: 'Squelette Nordique',
    type: 'mob',
    mob: 'skeleton',
  },
  agressive_tegenarian: {
    displayName: 'Tégénaire Agressive',
    type: 'mob',
    mob: 'spider',
  },
  forest_tegenarian: {
    displayName: 'Tégénaire de Forett',
    type: 'mob',
    mob: 'spider',
  },
  cow: {
    displayName: 'Vache',
    type: 'mob',
    mob: 'cow',
  },
  hook_poisonous: {
    displayName: 'Venimeuse à Crochets',
    type: 'mob',
    mob: 'cave_spider',
  },
  araknea: {
    displayName: 'Araknéa la Couveuse',
    type: 'archiMob',
    mob: 'spider',
  },
  moutron: {
    displayName: "Moutron l'Epique",
    type: 'archiMob',
    mob: 'sheep',
  },
  nofus: {
    displayName: 'Nofus le Chafer',
    type: 'archiMob',
    mob: 'skeleton',
  },
  ramick: {
    displayName: 'Ramick Eymouse',
    type: 'archiMob',
    mob: 'silverfish',
  },
  raton: {
    displayName: "Raton L'immaculé",
    type: 'archiMob',
    mob: 'silverfish',
  },
  severin: {
    displayName: 'Severin le boursouflé',
    type: 'archiMob',
    mob: 'pig',
  },
  sparot: {
    displayName: 'Sparot le Pirate',
    type: 'archiMob',
    mob: 'zombie',
  },
  aragog: {
    displayName: "Aragog L'Acromentule",
    type: 'boss',
    mob: 'spider',
  },
  hades: {
    displayName: "Hades l'impitoyable",
    type: 'boss',
    mob: 'skeleton',
  },
  kraken: {
    displayName: 'Kraken',
    type: 'boss',
    mob: 'skeleton',
  },
  nerak: {
    displayName: "Nérak l'Invoqué",
    type: 'boss',
    mob: 'skeleton',
  },
  warthog: {
    displayName: 'Phacochère',
    type: 'boss',
    mob: 'pig',
  },
  numen_citizen: {
    displayName: 'Citoyen de Nùmen',
    type: 'npc',
    mob: 'villager',
  },
  segeste_citizen: {
    displayName: 'Citoyen de Ségeste',
    type: 'npc',
    mob: 'villager',
  },
  thebes_citizen: {
    displayName: 'Citoyen de Thebes',
    type: 'npc',
    mob: 'villager',
  },
  guardian: {
    displayName: 'Garde',
    type: 'garde',
    mob: 'villager',
  },
  monk: {
    displayName: 'Moine',
    type: 'npc',
    mob: 'villager',
  },
}
