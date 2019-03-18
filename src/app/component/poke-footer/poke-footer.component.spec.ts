import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokeFooterComponent } from './poke-footer.component';

describe('PokeFooterComponent', () => {
  let component: PokeFooterComponent;
  let fixture: ComponentFixture<PokeFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokeFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokeFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
