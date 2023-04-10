import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { IgxCategoryChartModule, IgxGridModule, IgxListModule, IgxAvatarModule, IgxListModule, IgxAvatarModule, IgxListModule, IgxAvatarModule, IgxChipsModule, IgxListModule, IgxAvatarModule, IgxChipsModule } from 'igniteui-angular-core';
import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeComponent ],
      imports: [ NoopAnimationsModule, FormsModule, HttpClientTestingModule, IgxCategoryChartModule, IgxGridModule, IgxListModule, IgxAvatarModule, IgxListModule, IgxAvatarModule, IgxListModule, IgxAvatarModule, IgxChipsModule, IgxListModule, IgxAvatarModule, IgxChipsModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
