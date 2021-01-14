import { useEffect } from 'react'
import VideoPlayer from './components/VideoPlayer'
import useBodyPix from './hooks/useBodyPix'

type TFLiteExports = {
  add(a: number, b: number): number
}

function App() {
  // Load BodyPix only once outside of VideoPlayer component to prevent
  // GPU memory issues with Create React App HMR
  const bodyPixNeuralNetwork = useBodyPix()

  // Demo effect to test WASM function integration
  useEffect(() => {
    async function initTFLite() {
      const { instance } = await WebAssembly.instantiateStreaming(
        fetch(`${process.env.PUBLIC_URL}/tflite/tflite.wasm`)
      )
      const tfLite = instance.exports as TFLiteExports
      console.log('Demo WASM function result:', tfLite.add(1, 2))
    }

    initTFLite()
  }, [])

  return (
    bodyPixNeuralNetwork && (
      <VideoPlayer bodyPixNeuralNetwork={bodyPixNeuralNetwork}></VideoPlayer>
    )
  )
}

export default App
