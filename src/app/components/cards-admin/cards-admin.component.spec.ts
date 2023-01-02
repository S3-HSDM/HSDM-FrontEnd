import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CardsAdminComponent } from './cards-admin.component';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule } from '@angular/forms';

describe('CardsAdminComponent', () => {
  let component: CardsAdminComponent;
  let fixture: ComponentFixture<CardsAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, MatButtonToggleModule, RouterTestingModule, ReactiveFormsModule],
      declarations: [ CardsAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardsAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
