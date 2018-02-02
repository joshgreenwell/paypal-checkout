/* @flow */

import { Button } from './button';

import ShopList from './';

let settings = {};

const init = (options : Object) => {
    settings = options;
};

const render = (comp : Object, options : Object) => {
    comp.render({ ...settings, ...options });
};

const load = (file : String) => {
  return import(file)
  .then(module => {
    return module.default;
  })
};

// $FlowFixMe
Button.render = (options : Object) => {
    render(Button, options);
};

export { Button, init, ShopList };


