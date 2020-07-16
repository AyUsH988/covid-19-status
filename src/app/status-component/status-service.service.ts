import { Injectable } from '@angular/core';
import { CustomHttpService } from '../customhttp-service.service'

@Injectable({
  providedIn: 'root'
})
export class StatusService {

  constructor(private httpService : CustomHttpService) { }
}


