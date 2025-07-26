# K'Route – Kampala CBD Public Transport Navigator

This directory contains the **K'Route** React Native application. It currently exposes a very small example but is structured as an Nx project so that it can be expanded later.

## Development

1. Install the workspace dependencies with `npm install` or `yarn`.
2. The entry point for the app is `src/index.tsx` which registers the `App` component from `src/App.tsx`.
3. Targets for running the app (android, ios, start) are defined in `project.json` but require the `@nx/react-native` plugin.

Because the assessment environment does not include Node modules, the Nx tasks will not work until the dependencies are installed. In a full environment you would be able to run:

```bash
nx run kroute:start       # start the Metro bundler
nx run kroute:android     # run on Android device or emulator
nx run kroute:ios         # run on iOS simulator
```

## Future Features

- Interactive map displaying taxi stages and boda pickup points.
- Search from origin to destination with multiple route options and fare estimates.
- Live traffic reports and user submitted jam information.
- GPS tracking for nearby stages or bodas.
- Offline access for saved routes.

This app is an MVP placeholder and does not yet include dependencies such as React Navigation or mapping libraries.
