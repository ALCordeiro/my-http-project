import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpWithPromissesComponent } from './http-with-promisses.component';

describe('HttpWithPromissesComponent', () => {
  let component: HttpWithPromissesComponent;
  let fixture: ComponentFixture<HttpWithPromissesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HttpWithPromissesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpWithPromissesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
