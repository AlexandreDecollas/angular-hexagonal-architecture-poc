import {Provider} from '@angular/core';

export const staffListerSymbol = Symbol('staffLister');

export const staffListerProvider: Provider = {
  provide: staffListerSymbol,
  useFactory: (staff: Staff): CreateUserService => {
    return new CreateUserService(userRepo);
  },
  inject: [UserRepository],
};

