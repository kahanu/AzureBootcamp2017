import { OpaqueToken, InjectionToken } from '@angular/core';
import { IToastr } from 'app/shared/services/interfaces';

export let TOASTR_TOKEN = new InjectionToken<IToastr>('toastr');
