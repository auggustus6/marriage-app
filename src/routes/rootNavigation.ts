import { createNavigationContainerRef } from '@react-navigation/native';

export const navigationRef = createNavigationContainerRef()

export function navigate(name: never, params?:never) {
    if (navigationRef.isReady()) {
      // Perform navigation if the react navigation is ready to handle actions
      navigationRef.navigate(name, params!);
    } else {
        console.log('NAO RENDERIZOU')
      // You can decide what to do if react navigation is not ready
      // You can ignore this, or add these actions to a queue you can call later
    }
  }