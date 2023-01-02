import { TestBed } from '@angular/core/testing';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { AuthModule } from '@auth0/auth0-angular';


describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule, 
        MatButtonToggleModule,
        AuthModule.forRoot({
          domain: 'dev-ahnspy3md2kbd5ya.eu.auth0.com',
          clientId: 'DJo4HHEVl4g5S5bMRJOp1y7i1ezS69ig'
        }),
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'HSDM'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('HSDM');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('a')?.textContent).toContain('HSDM');
  });
});
