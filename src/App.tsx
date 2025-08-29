import './App.css';
import ColorScheme from './components/ColorScheme';
import ComponentWithContainerQueries from './components/ComponentWithContainerQueries';
import ComponentWithCustomProps from './components/ComponentWithCustomProps';
import ComponentWithVariants from './components/componentWithVariants';
import LinearGradient from './components/LinearGradient'
import InsetShadowsAndRings from './components/InsetShadowsAndRings';
import Transform from './components/Transform';

function App() {
  return (
    <>
      <ColorScheme />
      <ComponentWithCustomProps text="Hello World" color="text-secondary" />
      <ComponentWithVariants />
      <ComponentWithContainerQueries />
      <LinearGradient />
      <InsetShadowsAndRings />
      <Transform />
    </>
  );
}

export default App;
