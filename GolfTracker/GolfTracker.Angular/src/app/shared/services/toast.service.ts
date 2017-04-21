/**
 * DEPRECATED: This file is no longer being used.
 * The ngx-toast npm package is being used instead.
 * This is just here for reference.
 */

import { OpaqueToken, InjectionToken } from '@angular/core';
import { IToastr } from 'app/shared/services/interfaces';

export let TOASTR_TOKEN = new InjectionToken<IToastr>('toastr');
