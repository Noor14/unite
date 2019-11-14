import { trigger, animate, transition, style, query, group, state } from '@angular/animations';

export const routeAnimation =

    trigger('fadeAnimation', [
      transition('* => *', [
        query(':enter', [
                style({ opacity: 0 })
            ], { optional: true }
        ),
        group([
            query(':leave', [
                    animate(300, style({ opacity: 0 }))
                ],
                { optional: true }
            ),
            query(':enter', [
                    style({ opacity: 0 }),
                    animate(300, style({ opacity: 1 }))
                ],
                { optional: true }
            )
        ])
    ])]);

export const enterLeaveAnimation =
    trigger('EnterLeave', [
      state('flyIn', style({ transform: 'translateX(0)' })),
      transition(':enter', [
        style({ transform: 'translateX(100%)' }),
        animate('0.5s 300ms ease-in')
      ]),
      transition(':leave', [
        animate('0.3s ease-out', style({ transform: 'translateX(-100%)' }))
      ])
  ]);
