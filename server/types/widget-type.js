import { GraphQLObjectType, GraphQLString, GraphQLInt } from 'graphql';
import { globalIdField } from 'graphql-relay';

import { nodeInterface } from '../utils/node-definitions';
import { registerType } from '../utils/resolve-type';

import { Widget } from '../models/graphql-models';
import { WidgetData } from '../models/widget-data';

export const widgetType = new GraphQLObjectType({

  name: 'Widget',

  fields: () => ({

    id: globalIdField('Widget'),

    name: {
      type: GraphQLString,
      description: 'name of the widget',
    },

    description: {
      type: GraphQLString,
      description: 'description of the widget',
    },

    color: {
      type: GraphQLString,
      description: 'color of the widget',
    },

    size: {
      type: GraphQLString,
      description: 'size of the widget',
    },

    quantity: {
      type: GraphQLInt,
      description: 'quantity of the widget',
    },

  }),
  interfaces: () => [nodeInterface],

});

const widgetData = new WidgetData('http://localhost:3000/api');
registerType(Widget, widgetType, id => widgetData.one(id).then(widget => Object.assign(new Widget(), widget)));