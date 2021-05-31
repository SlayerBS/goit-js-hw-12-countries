import { error } from '@pnotify/core';
import { defaults } from '@pnotify/core';
defaults.delay = 2000;

export default function errorMessage(text) {
  error(text);
}
