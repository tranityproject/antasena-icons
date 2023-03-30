<p align="center">
    <img width="1200" alt="Antasena Icons" src="https://user-images.githubusercontent.com/4987902/228852549-5e427c38-8903-4846-a3a9-c53c09421b5a.png"> 
</p>
<p align="center">
    <i>A comprehensive library of React icons designed to help developers easily add scalable vector icons to their projects.</i>
    <br>
    <br>
    <a href="https://github.com/tranityproject/antasena-icons/actions">
      <img src="https://github.com/tranityproject/antasena-icons/workflows/ci/badge.svg?branch=main">
    </a>
    <a href="https://bundlephobia.com/package/antasena-icons">
      <img src="https://img.shields.io/bundlephobia/minzip/antasena-icons">
    </a>
    <a href="https://www.npmjs.com/package/antasena-icons">
      <img src="https://img.shields.io/npm/dw/antasena-icons">
    </a>
    <a href="https://github.com/tranityproject/antasena-icons/blob/main/LICENSE">
      <img src="https://img.shields.io/npm/l/antasena-icons">
    </a>
</p>
<p align="center">
  <a href="https://github.com/tranityproject/antasena-icons">Home</a>
  -
  <a href="https://github.com/tranityproject/antasena-icons">Documentation</a>
</p>

## Installation

To install Antasena Icons, run the following command:

```bash
$ yarn add antasena-icons
```

## Usage

To use an icon in your React application, simply import the icon from the antasena-icons package and render it as a component:

```typescript
import { IconName } from "antasena-icons";

export const MyComponent = () => {
  return (
    <div>
      <IconName />
    </div>
  );
};
```

Find the name of the icon you want to use. Each icon in the library is named `Icon{name}`, where `name` is the name of the icon in PascalCase. For example, the icon for the "add" action is named `IconAdd`.

## Customization

### SVG props

You can customize the color, size, and other properties of the icon by passing props to the component:

```typescript
import { IconName } from "antasena-icons";

export const MyComponent = () => {
  return (
    <div>
      <IconName color="red" size={24} />
    </div>
  );
};
```

### Tailwind CSS

If you're using Tailwind CSS, you can use the `className` prop to apply Tailwind classes to the icon:

```typescript
import { IconName } from "antasena-icons";

export const MyComponent = () => {
  return (
    <div>
      <IconName className="text-red-500" />
    </div>
  );
};
```

### Style props

You can also use the `style` prop to apply inline styles to the icon:

```typescript
import { IconName } from "antasena-icons";

export const MyComponent = () => {
  return (
    <div>
      <IconName style={{ color: "red" }} />
    </div>
  );
};
```

## Contributing

**TODO**: Add contributing guidelines

Contributions to Antasena Icons are welcome and encouraged! To get started, please read the contributing guidelines.

## Releasing

For releasing a new version on GitHub and NPM you don't need to create a tag. Just update the `package.json` version number and push.

For publishing a release candidate update your `package.json` with `1.3.4-rc.0` (`.1`, `.2`, ...). It also work if you do it from a branch that have an open PR on main.

## License

Antasena Icons is licensed under the MIT License.
