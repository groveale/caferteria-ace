import {
  BaseImageCardView,
  IImageCardParameters,
  IExternalLinkCardAction,
  IQuickViewCardAction,
  ICardButton
} from '@microsoft/sp-adaptive-card-extension-base';
import { IHelloCafeteriaAdaptiveCardExtensionProps, IHelloCafeteriaAdaptiveCardExtensionState, QUICK_VIEW_REGISTRY_ID } from '../HelloCafeteriaAdaptiveCardExtension';

export class CardView extends BaseImageCardView<IHelloCafeteriaAdaptiveCardExtensionProps, IHelloCafeteriaAdaptiveCardExtensionState> {
  public get cardButtons(): [ICardButton] | [ICardButton, ICardButton] | undefined {
    return [
      {
        title: "Menu",
        action: {
          type: 'QuickView',
          parameters: {
            view: QUICK_VIEW_REGISTRY_ID
          }
        }
      }
    ];
  }

  public get data(): IImageCardParameters {
    return {
      primaryText: "Bootcamp Cafe",
      imageUrl: this.properties.imageURL,
      title: this.properties.title
    };
  }

  public get onCardSelection(): IQuickViewCardAction | IExternalLinkCardAction | undefined {
    return {
      type: 'QuickView',
        parameters: {
          view: QUICK_VIEW_REGISTRY_ID
        }
    };
  }
}
