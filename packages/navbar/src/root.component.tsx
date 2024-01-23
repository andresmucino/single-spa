import '@elastic/eui/dist/eui_theme_light.css';

import { EuiButton, EuiProvider, EuiText } from '@elastic/eui';
import { Navbar } from './components';

export const Root = () => (
  <EuiProvider colorMode="light">
    <Navbar />
    <EuiText><p>Hello World!</p></EuiText>
    <EuiButton>hola</EuiButton>
  </EuiProvider>
);