import { IPropertyPaneConfiguration } from '@microsoft/sp-property-pane';
import { BaseAdaptiveCardExtension } from '@microsoft/sp-adaptive-card-extension-base';
import { CardView } from './cardView/CardView';
import { QuickView } from './quickView/QuickView';
import { HelloCafeteriaBonusPropertyPane } from './HelloCafeteriaBonusPropertyPane';

export interface IHelloCafeteriaBonusAdaptiveCardExtensionProps {
  title: string;
}

export interface IHelloCafeteriaBonusAdaptiveCardExtensionState {
}

const CARD_VIEW_REGISTRY_ID: string = 'HelloCafeteriaBonus_CARD_VIEW';
export const QUICK_VIEW_REGISTRY_ID: string = 'HelloCafeteriaBonus_QUICK_VIEW';

export default class HelloCafeteriaBonusAdaptiveCardExtension extends BaseAdaptiveCardExtension<
  IHelloCafeteriaBonusAdaptiveCardExtensionProps,
  IHelloCafeteriaBonusAdaptiveCardExtensionState
> {
  private _deferredPropertyPane: HelloCafeteriaBonusPropertyPane;

  public onInit(): Promise<void> {
    this.state = { };

    this.cardNavigator.register(CARD_VIEW_REGISTRY_ID, () => new CardView());
    this.quickViewNavigator.register(QUICK_VIEW_REGISTRY_ID, () => new QuickView());

    return Promise.resolve();
  }

  protected loadPropertyPaneResources(): Promise<void> {
    return import(
      /* webpackChunkName: 'HelloCafeteriaBonus-property-pane'*/
      './HelloCafeteriaBonusPropertyPane'
    )
      .then(
        (component) => {
          this._deferredPropertyPane = new component.HelloCafeteriaBonusPropertyPane();
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
