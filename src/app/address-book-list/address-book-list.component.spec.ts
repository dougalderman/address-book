import { ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { ActivatedRoute, RouterModule, convertToParamMap } from '@angular/router';
import { of } from 'rxjs';
import { NgxSpinnerComponent } from "ngx-spinner";

import { AddressBookListComponent } from './address-book-list.component';
import { AddressBookApiService } from '../address-book-api.service';
import { ContactModel } from '../contact-model';
import  mockData  from '../mock-data.json';

describe('AddressBookListComponent', () => {
  let component: AddressBookListComponent;
  let fixture: ComponentFixture<AddressBookListComponent>;
  let activatedRouteSpy;

  beforeEach(async () => {

    activatedRouteSpy = {
      snapshot: {
        paramMap: convertToParamMap({})
      }
    };

    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterModule
      ],
      declarations: [ 
        AddressBookListComponent,
        NgxSpinnerComponent,
     ],
     providers: [
      {
        provide: ActivatedRoute,
        useValue: activatedRouteSpy
      } 
    ]  
    })
    .compileComponents();

    const api = TestBed.inject(AddressBookApiService);
    const data: ContactModel[] = mockData;
    spyOn(api, 'getContacts').and.returnValue(of(data));

    fixture = TestBed.createComponent(AddressBookListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create',
    inject(
      [HttpTestingController],
      (httpMock: HttpTestingController) => {
    expect(component).toBeTruthy();
  }));

  it('should populate this.contacts', () => {
    expect(component.contacts).toBeDefined();
    expect(component.contacts).toHaveSize(2);
  });
});
