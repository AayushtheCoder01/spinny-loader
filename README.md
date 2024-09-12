# spinny-loader

**spinny-loader** is a React component library for adding beautiful and customizable loading animations to your application. This package provides multiple loaders that are easy to use and highly configurable.

## Installation

To install the package, use npm:

```bash
npm install spinny-loader
```

## How to Use

```js
import { PulseSphere,SimpleLoader, WavyBars, WavyPulses} from 'spinny-loader'

function App() {
  return (
    <>
        <PulseSphere />
          <SimpleLoader size={"25px"}/>
          <WavyBars color={"orange"}/>
          <WavyPulses size='7px' color={"lightgreen"}/>
          <RotatingRing size='25px' color={"#1c64f2"} lineWidth='3px' speed={.7}/>
          <ScalingPulses size='9px' color={"#1c64f2"} speed={.7}/>
          <ButterflyWave width='5px' color={"#1c64f2"} speed={.6}/>
    </>
  )
}

export default App
 ```

## Example Components

```js 
<SimpleLoader/> // excepts props - size
<PulseSphere/> // excepts props - size, color, fillcolor
<WavyBars/> // excepts props - color
<WavyPulses/> // excepts props - size, color
```

### Wrapper Component

This components takes other loading components as children and align the loading component to the center of the page aslo it blurs the background by default to enhance the overall view of the page.

Recomended to use while loading the Dashboard, Login and Signup.

```js
<SpinnyWrapper backgroundEffect={true}> // background effect by default true.
  <WavyPulses size='7px' color={"lightgreen"}/>
</SpinnyWrapper>
```

### License

This project is licensed under the ISC License.


### Contact

For any questions or feedback, please feel free to contact me at [kumaraayush.user@gmail.com].

