/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PromocaoComponent } from './Promocao.component';

describe('PromocaoComponent', () => {
  let component: PromocaoComponent;
  let fixture: ComponentFixture<PromocaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PromocaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PromocaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
