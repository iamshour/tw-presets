# tw-presets

> `tw-presets` Plugin is a collection of custom utility classes designed to simplify common layout and styling tasks. With presets for animations, text selection control, flexbox centering, and more, this plugin enhances the capabilities of Tailwind CSS, making it easier for developers to create modern and responsive web designs.

## Installation:

```bash
$ npm install tw-presets
```

## Usage

In order to use the plugin, add the plugin to your `tailwind.config.js` file:

```js
// tailwind.config.js
module.exports = {
  theme: {},
  variants: {},
  plugins: [
    // ...
    require('tw-presets'),
    // ...
  ],
};
```

## Classes to be used:


| Utility Class        | Description                                                                                                                                     |
|----------------------|-------------------------------------------------------------------------------------------------------------------------------------------------|
| `transition-basic` | Utility class for defining custom animations based on default transition properties like duration, property, and timing function.                |
| `prevent-selection`   | Utility class for preventing text selection on elements by applying various CSS properties such as `user-select`, `webkit-user-drag`, etc.       |
| `flex-center`         | Utility class for creating a centered flex layout by applying `display: flex`, `justify-content: center`, and `align-items: center` styles.  |
| `inline-flex-center`  | Utility class for creating a centered inline flex layout by applying `display: inline-flex`, `justify-content: center`, and `align-items: center` styles.  |
| `backface-hidden`       | Utility class for hiding the backface of an element by applying `backface-visibility: hidden`.                                                 |
| `backface-visible`       | Utility class for showing the backface of an element by applying `backface-visibility: visible`.                                               |


## License

tw-presets is licensed under the MIT License.
