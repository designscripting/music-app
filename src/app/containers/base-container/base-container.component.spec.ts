/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { By } from '@angular/platform-browser'
import { DebugElement } from '@angular/core'

import { BaseContainerComponent } from './base-container.component'

describe('BaseContainerComponent', () => {
  let component: BaseContainerComponent
  let fixture: ComponentFixture<BaseContainerComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BaseContainerComponent]
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseContainerComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
