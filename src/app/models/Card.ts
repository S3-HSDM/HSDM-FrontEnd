export class Card{
    id?: number;
    name: string | undefined;
    cardClass: string | undefined;
    image: string | undefined;
    cost: number | undefined;
    rarity: string | undefined;
    set: string | undefined;
    effect: string | undefined;
    attack?: number;
    health?: number;
    tribe?: string;
    spellType?: string;
    durability?: number;
    heroPower?: string;
    heroPowerEffect?: string;
    heroPowerCost?: number;

    constructor(name: string, cardClass: string, image: string, cost: number, rarity: string, set: string, effect: string, attack: number, health: number, tribe: string,
        spellType: string, durability: number, heroPower: string, heroPowerEffect: string, heroPowerCost: number){
        this.name = name;
        this.cardClass = cardClass;
        this.image = image;
        this.cost = cost;
        this.rarity = rarity;
        this.set = set;
        this.effect = effect;
        this.attack = attack;
        this.health = health;
        this.tribe = tribe;
        this.spellType = spellType;
        this.durability = durability;
        this.heroPower = heroPower;
        this.heroPowerEffect = heroPowerEffect;
        this.heroPowerCost = heroPowerCost;
    }
}