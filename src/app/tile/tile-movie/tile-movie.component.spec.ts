import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TileMovieComponent } from './tile-movie.component';

describe('TileMovieComponent', () => {
  let component: TileMovieComponent;
  let fixture: ComponentFixture<TileMovieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TileMovieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TileMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
