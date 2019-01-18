# Sandbox
Sandbox is an open source CSS framework. 

## Installation
```
npm install sandbox-css
```

## Description
Sandbox is a CSS only framework written in SASS, which complies to a single CSS file.

Sandbox is completely JavaScript free, leaving users the freedeom to implement their own JS if need be.

## Usage
Sandbox can be used as is, by inlcuding the `sandbox-min.css` file found in the the `node_modules/sandbox-css/dist/` drectory and linking to it in your `html` file.

The other (intended) way to use Sandbox is by customzing the variables, or editing the code as you see fit, and running your own build.

## Customization
After installing the package, go to `node_modules/sandbox-css` and run:

```
npm install
```

to install the dependencies used to create builds of the framework. 

## Build
After making your changes to the `src/`, run a build with:

```
npm run build
```

while inside of the `sandbox-css` directory. The SASS will compile and output your new `sandbox-min.css` to the `dist/` directory.

## Compatibility
Sandbox uses Autoprefixer to take care of vendor specific prefixes, so there's no need to write them yourself. 

## Documentation
[The docs](https://dlcnine.github.io/sandbox/) are currently under construction, but feel free to check them out as they progress. 