import { Subscribe, eventChannel } from "redux-saga"

function createSocketChannel(): any {
  const ws: WebSocket = new WebSocket("wss://ws.coincap.io/prices?assets=ALL")

  return eventChannel(emit => {
    ws.onmessage = (e: any) => {
      emit(JSON.parse(e.data))
    }

    return () => ws.close()
  })
}

export default createSocketChannel
