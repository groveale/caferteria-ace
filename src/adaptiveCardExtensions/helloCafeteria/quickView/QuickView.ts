import { ISPFxAdaptiveCard, BaseAdaptiveCardView } from '@microsoft/sp-adaptive-card-extension-base';
import { IHelloCafeteriaAdaptiveCardExtensionProps, IHelloCafeteriaAdaptiveCardExtensionState } from '../HelloCafeteriaAdaptiveCardExtension';

export interface IQuickViewData {
  menus: any;
  restaurant_name: string;
  restaurant_state: string;
  time_to_close: string;
}

export class QuickView extends BaseAdaptiveCardView<
  IHelloCafeteriaAdaptiveCardExtensionProps,
  IHelloCafeteriaAdaptiveCardExtensionState,
  IQuickViewData
> {
  public get data(): IQuickViewData {

    var dataString: string = `{
      "menus": [
        {
            "day" : "Today",
            "title" : "Korean Cuisine",
            "description" : "Description for the koren cuisine",
            "imageUrl" : "https://raw.githubusercontent.com/pnp/AdaptiveCards-Templates/main/samples/visual-list/assets/korean.jpg"
        },
        {
            "day" : "Tomorrow",
            "title" : "Italian Cuisine",
            "description" : "Description for the peruvian cuisine",
            "imageUrl" : "https://raw.githubusercontent.com/pnp/AdaptiveCards-Templates/main/samples/visual-list/assets/pizza.jpg"
        },
        {
            "day" : "Wednesday",
            "title" : "American Cuisine",
            "description" : "Description for the american cuisine",
            "imageUrl" : "https://raw.githubusercontent.com/pnp/AdaptiveCards-Templates/main/samples/visual-list/assets/burgers.jpg"
        }
      ],
      "restaurant_name": "The Bootcamp",
      "restaurant_state": "OPEN",
      "time_to_close": "1 hour"
    }`;

    const dataJson = JSON.parse(dataString);
    
    return {
      menus: dataJson.menus,
      restaurant_name: dataJson.restaurant_name,
      restaurant_state: dataJson.restaurant_state,
      time_to_close: dataJson.time_to_close
    };
  }

  public get template(): ISPFxAdaptiveCard {
    return require('./template/QuickViewTemplate.json');
  }
}