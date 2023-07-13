import { IPropertyPaneConfiguration } from '@microsoft/sp-property-pane';
import { BaseAdaptiveCardExtension } from '@microsoft/sp-adaptive-card-extension-base';
import { CardView } from './cardView/CardView';
import { QuickView } from './quickView/QuickView';
import { HelloCafeteriaPropertyPane } from './HelloCafeteriaPropertyPane';

export interface IHelloCafeteriaAdaptiveCardExtensionProps {
  title: string;
  listTitle: string;
  imageURL: string
}

export interface IHelloCafeteriaAdaptiveCardExtensionState {
}

const CARD_VIEW_REGISTRY_ID: string = 'HelloCafeteria_CARD_VIEW';
export const QUICK_VIEW_REGISTRY_ID: string = 'HelloCafeteria_QUICK_VIEW';

export default class HelloCafeteriaAdaptiveCardExtension extends BaseAdaptiveCardExtension<
  IHelloCafeteriaAdaptiveCardExtensionProps,
  IHelloCafeteriaAdaptiveCardExtensionState
> {
  private _deferredPropertyPane: HelloCafeteriaPropertyPane;

  public onInit(): Promise<void> {
    this.state = { };

    console.log(`this.properties.listTitle: ${this.properties.listTitle}`);

    this.cardNavigator.register(CARD_VIEW_REGISTRY_ID, () => new CardView());
    this.quickViewNavigator.register(QUICK_VIEW_REGISTRY_ID, () => new QuickView());

    return Promise.resolve();
  }

  protected loadPropertyPaneResources(): Promise<void> {
    return import(
      /* webpackChunkName: 'HelloCafeteria-property-pane'*/
      './HelloCafeteriaPropertyPane'
    )
      .then(
        (component) => {
          this._deferredPropertyPane = new component.HelloCafeteriaPropertyPane();
        }
      );
  }

  protected renderCard(): string | undefined {
    return CARD_VIEW_REGISTRY_ID;
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return this._deferredPropertyPane?.getPropertyPaneConfiguration();
  }
}
