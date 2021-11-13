export interface powerStats {
    'intelligence': string;
    'strength': string;
    'speed': string;
    'durability': string;
    'power': string;
    'combat': string
}
export interface biography {
    'full-name': string;
    'alter-egos': string;
    'aliases': string[];
    'place-of-birth': string;
    'first-appearance': string;
    'publisher': string;
    'alignment': string
}
export interface appearance {
    'gender': string;
    'race': string;
    'height': string[];
    'weight': string[];
    'eye-color': string;
    'hair-color': string
}
export interface work {
    'occupation': string;
    'base': string
}
export interface connections {
    'group-affiliation': string;
    'relatives': string
}
export interface image {
    'url': string
}

export interface IHero {
    'response': string;
    'id': string;
    'name': string;
    'powerstats': powerStats;
    'biography': biography;
    'appearance': appearance;
    'work': work;
    'connections': connections;
    'image': image
}
