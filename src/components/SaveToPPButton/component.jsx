/* @flow */
/* @jsx jsxDom */
/* eslint max-lines: 0 */

import { create } from 'xcomponent/src';

let xcomp = create({
    tag:        'checkbox-component',
    url:        'https://paypalshopping.herokuapp.com/cdn/checkbox.html',
    contexts: {
        iframe: true,
        popup:  false
    },

    dimensions: {
        width:  '250px',
        height: '50px'
    },

    scrolling: false,

    props: {

        env: {
            type:     'string',
            required: true
        },

        client: {
            type:     'object',
            required: true
        }//,

        // productDetails: {
        //     type:     'object',
        //     required: true
        // },

        // eventCallback: {
        //     type:     'function',
        //     required: false
        // }
    }
});

export let SaveToPPButton = {
    render: (options) => {
        let obj = {
            ...options,
            client: window.paypal.initData.client,
            env:    window.paypal.initData.env };
        xcomp.render(obj);
    }
};
