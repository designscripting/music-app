/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing'
import { SongsListService } from './songs-list.service'

describe('Service: SongsList', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SongsListService]
    })
  })

  it('should ...', inject([SongsListService], (service: SongsListService) => {
    expect(service).toBeTruthy()
  }))
})
