import {
  BasePrimaryTextCardView,
  IPrimaryTextCardParameters,
  IExternalLinkCardAction,
  IQuickViewCardAction,
  ICardButton
} from '@microsoft/sp-adaptive-card-extension-base';
import { IHelloCafeteriaAdaptiveCardExtensionProps, IHelloCafeteriaAdaptiveCardExtensionState, QUICK_VIEW_REGISTRY_ID } from '../HelloCafeteriaAdaptiveCardExtension';

export class CardView extends BasePrimaryTextCardView<IHelloCafeteriaAdaptiveCardExtensionProps, IHelloCafeteriaAdaptiveCardExtensionState> {
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

  public get data(): IPrimaryTextCardParameters {
    return {
      primaryText: "Taco Tuesday",
      description: "We have Tacos and other tasty mexican food for you today!",
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
