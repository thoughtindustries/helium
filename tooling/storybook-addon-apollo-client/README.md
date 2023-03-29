# Custom storybook addon for apollo client

This addon extends the existing addon `storybook-addon-apollo-client` to adapt to Storybook V7 pre-releases.

## Changes

The current addon `storybook-addon-apollo-client` utilizes `useGlobals` to store mocked Apollo Provider queries for each applicable story. Starting in Storybook V7, it requires addons to register global variables with a default value. Otherwise, the settings of global variables will take no effect, thus it's causing the mocked queries not to be rendered.

The custom addon removes the utilization of global variables to store mocked queries, instead, it fetches story parameters and render the mocked queries based on the parameters. 

## Usage

How to use the custom addon will remain the same as the existing addon. Please refer to the existing addon's documentation for configurations.

## References

- Addon `storybook-addon-apollo-client` Github repository: https://github.com/lifeiscontent/storybook-addon-apollo-client