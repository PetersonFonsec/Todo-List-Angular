import {
  animate,
  AnimationTriggerMetadata,
  style,
  transition,
  trigger,
  group,
} from '@angular/animations';

const enter = {
  opacity: 0,
  transform: 'translateY(-50px)',
};

const leave = {
  opacity: 1,
  transform: 'translateY(0px)',
};

export const animation: AnimationTriggerMetadata = trigger('Animation', [
  transition('* <=> *', [
    style(enter),
    group([animate('0.5s ease-in-out', style(leave))]),
  ]),
]);
