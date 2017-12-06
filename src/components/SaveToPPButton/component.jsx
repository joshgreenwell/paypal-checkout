/* @flow */
/* @jsx jsxDom */
/* eslint max-lines: 0 */

import { create } from 'xcomponent/src';

export let SaveToPPButton = {
    render: (options) => {
        let obj = {...options, client: window.paypal.initData.client, env: window.paypal.initData.env}
        console.log(obj);
        xcomp.render(obj);
    }
}

let xcomp = create({
    tag:  'checkbox-component',
    url: 'https://paypalshopping.herokuapp.com/cdn/checkbox.html', //'file:///Users/josgreenwell/Documents/GitHub/PayPalAssistant/public/cdn/checkbox.js', // 'https://paypalshopping.herokuapp.com/cdn/checkbox.html',

    contexts: {
        iframe: true,
        popup:  false
    },

    scrolling: false,

    props: {

        env: {
            type:       'string',
            required:   true,     
        },

        client: {
            type:     'object',
            required: true,
        }
    }
});

