// @flow

import { publicUrl } from '../config';

export default function(event: { preventDefault: Function }) {
  if (event.preventDefault) {
    event.preventDefault();
  }

  if (document.referrer === '') {
    window.location.href = publicUrl;

    return;
  }

  return window.history.back();
};