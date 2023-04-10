import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { IgxTabsModule, IgxButtonModule, IgxRippleModule, IgxIconModule, IgxButtonModule, IgxRippleModule, IgxIconModule, IgxButtonModule, IgxRippleModule, IgxIconModule, IgxButtonModule, IgxRippleModule, IgxIconModule, IgxButtonModule, IgxRippleModule, IgxIconModule, IgxAccordionModule, IgxExpansionPanelModule, IgxAvatarModule, IgxCheckboxModule, IgxExpansionPanelModule, IgxExpansionPanelModule, IgxListModule, IgxAvatarModule, IgxAvatarModule, IgxExpansionPanelModule, IgxExpansionPanelModule, IgxExpansionPanelModule, IgxTabsModule, IgxButtonModule, IgxRippleModule, IgxIconModule, IgxButtonModule, IgxRippleModule, IgxIconModule, IgxButtonModule, IgxRippleModule, IgxIconModule, IgxAccordionModule, IgxExpansionPanelModule, IgxListModule, IgxAvatarModule, IgxChipsModule, IgxAvatarModule, IgxChipsModule, IgxAvatarModule, IgxChipsModule, IgxExpansionPanelModule, IgxExpansionPanelModule } from '@infragistics/igniteui-angular';
import { AccountSampleComponent } from './account-sample.component';

describe('AccountSampleComponent', () => {
  let component: AccountSampleComponent;
  let fixture: ComponentFixture<AccountSampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountSampleComponent ],
      imports: [ NoopAnimationsModule, FormsModule, IgxTabsModule, IgxButtonModule, IgxRippleModule, IgxIconModule, IgxButtonModule, IgxRippleModule, IgxIconModule, IgxButtonModule, IgxRippleModule, IgxIconModule, IgxButtonModule, IgxRippleModule, IgxIconModule, IgxButtonModule, IgxRippleModule, IgxIconModule, IgxAccordionModule, IgxExpansionPanelModule, IgxAvatarModule, IgxCheckboxModule, IgxExpansionPanelModule, IgxExpansionPanelModule, IgxListModule, IgxAvatarModule, IgxAvatarModule, IgxExpansionPanelModule, IgxExpansionPanelModule, IgxExpansionPanelModule, IgxTabsModule, IgxButtonModule, IgxRippleModule, IgxIconModule, IgxButtonModule, IgxRippleModule, IgxIconModule, IgxButtonModule, IgxRippleModule, IgxIconModule, IgxAccordionModule, IgxExpansionPanelModule, IgxListModule, IgxAvatarModule, IgxChipsModule, IgxAvatarModule, IgxChipsModule, IgxAvatarModule, IgxChipsModule, IgxExpansionPanelModule, IgxExpansionPanelModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
