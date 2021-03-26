import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeFileUploadComponent } from './employee-file-upload.component';

describe('EmployeeFileUploadComponent', () => {
  let component: EmployeeFileUploadComponent;
  let fixture: ComponentFixture<EmployeeFileUploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeFileUploadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeFileUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});