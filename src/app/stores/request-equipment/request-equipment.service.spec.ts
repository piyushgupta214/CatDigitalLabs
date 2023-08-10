import { TestBed } from "@angular/core/testing";
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { RequestEquipmentService } from "./request-equipment.service";

describe('RequestEquipmentService', ()=>{

    let httpMock: HttpTestingController;
    let requestEquipmentService: RequestEquipmentService;

    beforeEach(()=>{
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule]
        })
        requestEquipmentService = TestBed.inject(RequestEquipmentService);
        httpMock = TestBed.inject(HttpTestingController);
    });

    afterEach(()=>{
        httpMock.verify();
    })

    it('should create service', ()=>{
        expect(requestEquipmentService).toBeTruthy();
    })

    it('should fetch the catelogs', (done)=>{
      requestEquipmentService.getCatalog().subscribe(result=>{
        expect(result).toBeDefined();
        expect(result.length).toEqual(1);
        done();
      });
      const request = httpMock.expectOne(`http://yardclub.github.io/mobile-interview/api/catalog.json`);
      expect(request.request.method).toBe('GET');
      request.flush([{ id: '1' }]);
    })

});
