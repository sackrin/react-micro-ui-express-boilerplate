import loadable from '@loadable/component';
import { hydrate, render } from "react-dom";
import { renderComponent, hydrateComponent, childComponent } from '@sackrin/react-micro-ui/lib/Helpers';

const ExampleComponent = loadable(() => import('./Components/ExampleComponent'));

export const Components = {
  ExampleComponent
};

export const Helpers = {
  TestHelper: () => { console.log('Hello World!'); }
};

export const Hydrate = hydrateComponent(hydrate, Components);
export const Render = renderComponent(render, Components);
export const Child = childComponent(Components);
