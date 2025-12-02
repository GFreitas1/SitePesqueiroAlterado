import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TermosepoliticasComponent } from './termosepoliticas.component';

describe('TermosepoliticasComponent', () => {
  let component: TermosepoliticasComponent;
  let fixture: ComponentFixture<TermosepoliticasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TermosepoliticasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TermosepoliticasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
