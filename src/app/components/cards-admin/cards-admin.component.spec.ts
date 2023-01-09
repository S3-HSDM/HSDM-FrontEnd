import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CardsAdminComponent } from './cards-admin.component';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { Card } from 'src/app/models/Card';
import { CardsService } from 'src/app/services/cards.service';
import { of } from 'rxjs';

describe('CardsAdminComponent', () => {
  let component: CardsAdminComponent;
  let fixture: ComponentFixture<CardsAdminComponent>;
  let service: any;

  const getCardsData: Card[] = [
    {
      id: 1,
      cardClass: "testClass",
      name: "testMinion",
      image: "testImage.png",
      cost: 1,
      rarity: "testRarity",
      set: "testSet",
      effect: "testEffect",
      attack: 1,
      health: 1,
      tribe: "testTribe"
    },
    {
      id: 2,
      cardClass: "testClass",
      name: "testHero",
      image: "testImage.png",
      cost: 2,
      rarity: "testRarity",
      set: "testSet",
      effect: "testEffect",
      heroPower: "testHeroPower",
      heroPowerCost: 2,
      heroPowerEffect: "testHeroPowerEffect"
    },
    {
      id: 3,
      cardClass: "testClass",
      name: "testSpell",
      image: "testImage.png",
      cost: 3,
      rarity: "testRarity",
      set: "testSet",
      effect: "testEffect",
      spellType: "testSpellType"
    },
    {
      id: 4,
      cardClass: "testClass",
      name: "testWeapon",
      image: "testImage.png",
      cost: 4,
      rarity: "testRarity",
      set: "testSet",
      effect: "testEffect",
      attack: 4,
      durability: 4
    }
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, MatButtonToggleModule, RouterTestingModule, ReactiveFormsModule],
      declarations: [ CardsAdminComponent ],
      providers: [
        {
          provide: CardsService,
          useValue: {
            // pass dummy data to TodoService getTasks method
            getCards: () => of(getCardsData)
          }
        }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardsAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return card length of getAllCards()', () => {
    fixture.detectChanges();
    expect(component.cardList.length).toEqual(4);
  });

  it('should return correct name', () => {
    fixture.detectChanges();
    expect(component.cardList[0].name).toEqual("testMinion");
    expect(component.cardList[1].name).toEqual("testHero");
    expect(component.cardList[2].name).toEqual("testSpell");
    expect(component.cardList[3].name).toEqual("testWeapon");
  });
});
