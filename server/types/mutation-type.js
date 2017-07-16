import { GraphQLObjectType } from 'graphql';

import { insertWidgetMutationType } from './insert-widget-mutation-type';

export const mutation = new GraphQLObjectType({

  name: 'Mutation',

  fields: () => ({

    insertWidget: insertWidgetMutationType,

  }),

});