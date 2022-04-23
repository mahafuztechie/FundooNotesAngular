import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { DashboardComponent } from './dashboard.component';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardComponent ],
      imports:[RouterTestingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('getAllBooks', () => {
    component.display()
    expect(component.display).toBeTruthy();
  });

  it('logout', () => {
    component.onLogout()
    expect(component.onLogout).toBeTruthy();
  });
  it('listview',()=>{
    component.listview()
    expect(component.listview).toBeTruthy();
  });
  it('gridview',()=>{
    component.gridview()
    expect(component.gridview).toBeTruthy();
  });
  it('display',()=>{
    component.display()
    expect(component.display).toBeTruthy();
  });
});
