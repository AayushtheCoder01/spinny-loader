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
        <PulseSphere size={"30px"} color={"blue"} fillcolor='transparent'/>
        <SimpleLoader size={"25px"}/>
        <WavyBars color={"orange"}/>
        <WavyPulses size='7px' color={"lightgreen"}/>
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

### License

This project is licensed under the ISC License.


### Contact

For any questions or feedback, please feel free to contact me at [kumaraayush.user@gmail.com].

