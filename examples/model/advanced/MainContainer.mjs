import ComponentModel          from '../../../src/model/Component.mjs';
import MainContainerController from './MainContainerController.mjs'
import Panel                   from '../../../src/container/Panel.mjs';
import TextField               from '../../../src/form/field/Text.mjs';
import Viewport                from '../../../src/container/Viewport.mjs';

/**
 * @class Neo.examples.model.advanced.MainContainer
 * @extends Neo.container.Viewport
 */
class MainContainer extends Viewport {
    static getConfig() {return {
        /**
         * @member {String} className='Neo.examples.model.advanced.MainContainer'
         * @protected
         */
        className: 'Neo.examples.model.advanced.MainContainer',
        /**
         * @member {Boolean} autoMount=true
         */
        autoMount : true,
        /**
         * @member {Neo.controller.Component} controller=MainContainerController
         */
        controller: MainContainerController,
        /**
         * @member {Object|Neo.model.Component} model
         */
        model: {
            data: {
                button1Text: 'Button 1',
                button3Text: 'Button 3'
            }
        },
        /**
         * @member {Object} style
         */
        style: {
            padding: '20px'
        },
        /**
         * @member {Object[]} items
         */
        items: [{
            module   : Panel,
            reference: 'panel',

            model: {
                data: {
                    button2Text: 'Button 2'
                }
            },

            containerConfig: {
                reference: 'content-container',
                style    : {padding: '20px'},

                layout: {
                    ntype: 'vbox',
                    align: 'start'
                }
            },

            headers: [{
                dock     : 'top',
                reference: 'header-toolbar',

                items: [{
                    ntype: 'label',
                    text : 'model.Component: advanced'
                }, {
                    ntype: 'component',
                    flex : 1
                }, {
                    handler: 'onButton1Click',
                    iconCls: 'fa fa-home',

                    bind: {
                        text: 'Hello ${data.button1Text} ${1+2} ${data.button1Text + data.button2Text}'
                    }
                }, {
                    handler: 'onButton2Click',
                    iconCls: 'fa fa-user',
                    style  : {marginLeft: '10px'},

                    bind: {
                        text: '${data.button2Text}'
                    }
                }]
            }],

            items: [{
                module    : TextField,
                flex      : 'none',
                labelText : 'Button1 text:',
                labelWidth: 110,
                width     : 300,

                bind: {
                    value: '${data.button1Text}'
                },

                listeners: {
                    change: 'onTextField1Change'
                }
            }, {
                module    : TextField,
                flex      : 'none',
                labelText : 'Button2 text:',
                labelWidth: 110,
                width     : 300,

                bind: {
                    value: '${data.button2Text}'
                },

                listeners: {
                    change: 'onTextField2Change'
                }
            }, {
                ntype  : 'button',
                handler: 'onAddButtonTextfieldButtonClick',
                style  : {marginTop: '2em'},
                text   : 'Add a third button & textfield'
            }, {
                ntype  : 'button',
                handler: 'onLogMainModelIntoConsoleButtonClick',
                style  : {marginTop: '1em'},
                text   : 'Log main model into console'
            }, {
                ntype  : 'button',
                handler: 'onLogChildModelIntoConsoleButtonClick',
                style  : {marginTop: '1em'},
                text   : 'Log child model into console'
            }]
        }]
    }}
}

Neo.applyClassConfig(MainContainer);

export {MainContainer as default};