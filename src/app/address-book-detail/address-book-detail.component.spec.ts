import { ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { ActivatedRoute, convertToParamMap, RouterModule } from '@angular/router';
import { of } from 'rxjs';
import { NgxSpinnerComponent } from "ngx-spinner";


import { AddressBookDetailComponent } from './address-book-detail.component';
import { AddressBookApiService } from '../address-book-api.service';
import { ContactModel } from '../contact-model';
import  mockData  from '../mock-data.json';

describe('AddressBookDetailComponent', () => {
  let component: AddressBookDetailComponent;
  let fixture: ComponentFixture<AddressBookDetailComponent>;
  let activatedRouteSpy;

  beforeEach(async () => {

    activatedRouteSpy = {
      snapshot: {
        paramMap: convertToParamMap({
          index: '1'
        })
      }
    };

    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterModule
      ],
      declarations: [
         AddressBookDetailComponent,
         NgxSpinnerComponent ],
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

    fixture = TestBed.createComponent(AddressBookDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create',
    inject(
      [HttpTestingController],
      (httpMock: HttpTestingController) => {
    expect(component).toBeTruthy();
  }));

  it('should populate this.contact', () => {
    expect(component.contact).toBeDefined();
    expect(component.contact).toEqual(mockData[1]);
  });
});

