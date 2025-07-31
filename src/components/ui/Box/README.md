# Box Component

The `Box` component is a unified, flexible container component that replaces all widget components in the application. It provides a consistent and controllable interface for creating various types of content containers.

## Features

- **Mandatory Header**: All boxes must have a title and description
- **Fullscreen Toggle**: Built-in fullscreen button in the top-right corner
- **Customizable Styling**: Control padding, shadows, borders, and background colors
- **Responsive Design**: Works well on all screen sizes
- **Dark Mode Support**: Automatic dark mode styling
- **Internationalization**: Support for multiple languages
- **Accessibility**: Proper semantic markup and ARIA support

## Props

| Prop                   | Type                                                                                                | Default      | Description                            |
| ---------------------- | --------------------------------------------------------------------------------------------------- | ------------ | -------------------------------------- |
| `children`             | `ReactNode`                                                                                         | -            | Content to display inside the box      |
| `className`            | `string`                                                                                            | `""`         | Additional CSS classes                 |
| `language`             | `Language`                                                                                          | `"en"`       | Language for translations              |
| `titleKey`             | `keyof Translations["widgets"]`                                                                     | -            | Translation key for the title          |
| `title`                | `string`                                                                                            | -            | Direct title text (overrides titleKey) |
| `description`          | `string`                                                                                            | **Required** | Description text for the header        |
| `headerColor`          | `"blue" \| "purple" \| "green" \| "orange" \| "pink" \| "teal" \| "emerald" \| "primary" \| "none"` | `"primary"`  | Color theme for the header             |
| `padding`              | `"none" \| "small" \| "medium" \| "large"`                                                          | `"medium"`   | Padding size for content               |
| `border`               | `boolean`                                                                                           | `true`       | Whether to show border                 |
| `shadow`               | `"none" \| "small" \| "medium" \| "large"`                                                          | `"medium"`   | Shadow size                            |
| `rounded`              | `"none" \| "small" \| "medium" \| "large"`                                                          | `"large"`    | Border radius size                     |
| `background`           | `"white" \| "transparent" \| "neutral" \| "primary" \| "accent"`                                    | `"white"`    | Background color                       |
| `showFullscreenButton` | `boolean`                                                                                           | `true`       | Whether to show fullscreen button      |

## Usage Examples

### Basic Box with Header

```tsx
import Box from "./components/ui/Box/Box";

<Box
  title="My Box"
  description="A simple box with header and fullscreen button"
  headerColor="primary"
>
  <p>This is the content of the box.</p>
</Box>;
```

### Box with Translation Key

```tsx
<Box
  titleKey="zeit"
  language="de"
  headerColor="blue"
  description="Time widget in German"
>
  <p>Zeitangaben und Uhrzeiten auf Deutsch</p>
</Box>
```

### Box with Custom Styling

```tsx
<Box
  title="Custom Styled Box"
  description="A box with custom styling options and fullscreen capability"
  padding="large"
  shadow="large"
  rounded="small"
  background="primary"
  headerColor="purple"
>
  <p>This box has custom styling options.</p>
</Box>
```

### Box with Custom Styling

```tsx
<Box
  title="Custom Styled Box"
  padding="large"
  shadow="large"
  rounded="small"
  background="primary"
  headerColor="purple"
>
  <p>This box has custom styling options.</p>
</Box>
```

### Box with No Padding

```tsx
<Box
  title="No Padding"
  description="A box with no internal padding and fullscreen button"
  padding="none"
  headerColor="green"
>
  <div className="p-4 bg-neutral-100">
    <p>Content with manual padding.</p>
  </div>
</Box>
```

## Migration from Widget Component

To migrate from the old `Widget` component to the new `Box` component:

1. Replace `Widget` import with `Box`
2. Update component usage:

   ```tsx
   // Old
   <Widget titleKey="zeit" language={language} headerColor="primary">
     {children}
   </Widget>

   // New
   <Box
     titleKey="zeit"
     language={language}
     headerColor="primary"
     description="Required description"
   >
     {children}
   </Box>
   ```

## Benefits

- **Unified Interface**: All containers use the same component
- **Fullscreen Support**: Built-in fullscreen toggle for better user experience
- **Better Control**: More styling options and flexibility
- **Consistent Design**: Ensures visual consistency across the app
- **Easier Maintenance**: Single component to maintain instead of multiple widgets
- **Better Performance**: Reduced bundle size with fewer components
- **Enhanced Accessibility**: Better semantic structure and ARIA support

## Color Themes

The component supports various header color themes:

- `primary`: Primary brand colors
- `blue`: Blue to purple gradient
- `purple`: Purple to pink gradient
- `green`: Green to teal gradient
- `orange`: Orange to red gradient
- `pink`: Pink to purple gradient
- `teal`: Teal to blue gradient
- `emerald`: Emerald to green gradient
- `none`: No header background

## Background Options

- `white`: White background (default)
- `transparent`: Transparent background
- `neutral`: Light neutral background
- `primary`: Primary color background
- `accent`: Accent color background

## Fullscreen Feature

The Box component includes a built-in fullscreen toggle button in the top-right corner of the header:

- **Default behavior**: Fullscreen button is shown by default
- **Toggle functionality**: Click to enter/exit fullscreen mode
- **Visual feedback**: Button icon changes based on fullscreen state
- **Accessibility**: Proper ARIA labels and keyboard support
- **Responsive**: Works on all screen sizes
- **Customizable**: Can be disabled with `showFullscreenButton={false}`

### Fullscreen Behavior

When in fullscreen mode:

- Box covers the entire screen (`fixed inset-0`)
- High z-index (`z-50`) to appear above other content
- Maintains all styling and functionality
- Exit button changes to "minimize" icon
