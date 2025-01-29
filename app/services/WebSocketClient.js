import WebSocket  from 'react-native-websocket';

const ws = new WebSocket('ws://localhost:5000');

ws.onopen = () => {
  console.log('WebSocket connected');
};

ws.onmessage = (e) => {
  console.log('Message from server:', e.data);
  // Handle incoming messages (e.g., update chat)
};

ws.onerror = (e) => {
  console.error('WebSocket error:', e);
};

ws.onclose = () => {
  console.log('WebSocket disconnected');
};

export const sendMessage = (message) => {
  if (ws.readyState === WebSocket.OPEN) {
    ws.send(JSON.stringify(message));
  }
};

export default ws;