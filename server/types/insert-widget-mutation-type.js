import { mutationWithClientMutationId, offsetToCursor } from 'graphql-relay';

import { WidgetData } from '../models/widget-data';
import { Viewer, Widget } from '../models/graphql-models';

import { viewerType } from './viewer-type';
import { widgetEdgeType } from '../connections/widget-connection';
import { insertWidgetInputType } from './widget-input-types';

export const insertWidgetMutationType = mutationWithClientMutationId({

  name: 'InsertWidgetType',

  inputFields: {
    widget: { type: insertWidgetInputType }
  },

  outputFields: {
    viewer: {
      type: viewerType,
      resolve: () => Object.assign(new Viewer(), { id: 1 }),
    },
    widgetEdge: {
      type: widgetEdgeType,
      resolve: (widget, _, { baseUrl }) => {

        const widgetData = new WidgetData(baseUrl);

        return widgetData.all().then(widgets => {
          const offset = widgets.findIndex(w => w.id === widget.id);
          return {
            cursor: offsetToCursor(offset),
            node: widget
          };
        });
      }
    }
  },

  mutateAndGetPayload: ({ widget }, { baseUrl }) => {
    const widgetData = new WidgetData(baseUrl);
    return widgetData.insert(widget).then(widget => Object.assign(new Widget(), widget));
  },

});