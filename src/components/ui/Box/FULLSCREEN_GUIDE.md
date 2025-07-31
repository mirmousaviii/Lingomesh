# Fullscreen Functionality Guide

## Overview

The Box component now includes a comprehensive and systematic fullscreen implementation that provides a better user experience with proper state management, keyboard shortcuts, and smooth transitions.

## Features

### 1. **Systematic Implementation**

- Custom `useFullscreen` hook for reusable fullscreen logic
- Proper state management with React hooks
- Clean separation of concerns

### 2. **Keyboard Shortcuts**

- **Escape key**: Exit fullscreen mode
- Automatic event listener management
- Proper cleanup on component unmount

### 3. **Enhanced User Experience**

- Smooth transitions (300ms duration)
- Body scroll prevention during fullscreen
- High z-index (9999) to ensure proper layering
- Backdrop blur effect for better visual separation

### 4. **Accessibility**

- Proper ARIA labels
- Focus management
- Keyboard navigation support
- Screen reader friendly

### 5. **Responsive Design**

- Flexbox layout for proper content distribution
- Scrollable content area in fullscreen mode
- Maintains aspect ratios and proportions

## Usage

### Basic Usage

```tsx
<Box
  title="My Widget"
  description="A description of the widget"
  showFullscreenButton={true}
  fullscreenEnabled={true}
>
  <div>Your content here</div>
</Box>
```

### Disable Fullscreen

```tsx
<Box
  title="My Widget"
  description="A description of the widget"
  showFullscreenButton={false}
  fullscreenEnabled={false}
>
  <div>Your content here</div>
</Box>
```

### Using the Custom Hook

```tsx
import { useFullscreen } from "../../../hooks/useFullscreen";

const MyComponent = () => {
  const { isFullscreen, toggleFullscreen, enterFullscreen, exitFullscreen } =
    useFullscreen({
      enabled: true,
      onEnter: () => console.log("Entered fullscreen"),
      onExit: () => console.log("Exited fullscreen"),
      preventBodyScroll: true,
    });

  return (
    <div>
      <button onClick={toggleFullscreen}>
        {isFullscreen ? "Exit" : "Enter"} Fullscreen
      </button>
    </div>
  );
};
```

## Technical Implementation

### 1. **useFullscreen Hook**

- **Location**: `src/hooks/useFullscreen.ts`
- **Purpose**: Centralized fullscreen logic
- **Features**:
  - State management
  - Keyboard event handling
  - Body scroll control
  - Callback support

### 2. **Box Component Integration**

- **Location**: `src/components/ui/Box/Box.tsx`
- **Integration**: Uses `useFullscreen` hook
- **Styling**: Dynamic CSS classes based on fullscreen state

### 3. **CSS Classes**

```css
/* Fullscreen container */
fixed inset-0 z-[9999]
bg-white dark:bg-neutral-900
flex flex-col
transition-all duration-300 ease-in-out
backdrop-blur-sm

/* Fullscreen content */
flex-1 overflow-auto
p-6
bg-white dark:bg-neutral-900
```

## Configuration Options

### Box Component Props

- `showFullscreenButton`: Show/hide the fullscreen button (default: true)
- `fullscreenEnabled`: Enable/disable fullscreen functionality (default: true)

### useFullscreen Hook Options

- `enabled`: Enable/disable fullscreen functionality
- `onEnter`: Callback when entering fullscreen
- `onExit`: Callback when exiting fullscreen
- `preventBodyScroll`: Prevent body scroll during fullscreen (default: true)

## Best Practices

### 1. **Performance**

- Event listeners are properly cleaned up
- State updates are optimized with useCallback
- Minimal re-renders with proper dependency arrays

### 2. **Accessibility**

- Always provide meaningful ARIA labels
- Support keyboard navigation
- Maintain focus management

### 3. **User Experience**

- Provide visual feedback for state changes
- Include keyboard shortcuts in tooltips
- Ensure smooth transitions

### 4. **Error Handling**

- Graceful fallbacks when fullscreen is disabled
- Proper cleanup on component unmount
- Validation of required props

## Browser Compatibility

- **Modern browsers**: Full support
- **Mobile browsers**: Limited support (may not work as expected)
- **Fallback**: Graceful degradation when fullscreen is not supported

## Future Enhancements

1. **Fullscreen API Integration**: Use browser's native Fullscreen API
2. **Mobile Optimization**: Better mobile fullscreen experience
3. **Animation Customization**: Allow custom transition durations
4. **Multi-monitor Support**: Handle multiple display scenarios
5. **Accessibility Improvements**: Enhanced screen reader support

## Troubleshooting

### Common Issues

1. **Fullscreen not working**

   - Check if `fullscreenEnabled` is true
   - Verify browser compatibility
   - Check for conflicting z-index values

2. **Keyboard shortcuts not working**

   - Ensure no other components are capturing keyboard events
   - Check if event listeners are properly attached

3. **Body scroll not prevented**
   - Verify `preventBodyScroll` option is enabled
   - Check for CSS conflicts

### Debug Mode

```tsx
const { isFullscreen, toggleFullscreen } = useFullscreen({
  enabled: true,
  onEnter: () => console.log("Fullscreen entered"),
  onExit: () => console.log("Fullscreen exited"),
});
```

## Migration Guide

### From Old Implementation

The new implementation is backward compatible. No changes needed for existing code.

### To New Implementation

1. Update imports to use the new hook
2. Add any additional configuration options as needed
3. Test fullscreen functionality thoroughly

## Testing

### Manual Testing Checklist

- [ ] Fullscreen button appears/disappears correctly
- [ ] Clicking button toggles fullscreen state
- [ ] Escape key exits fullscreen
- [ ] Body scroll is prevented in fullscreen
- [ ] Transitions are smooth
- [ ] Content is properly scrollable in fullscreen
- [ ] Accessibility features work correctly

### Automated Testing

```tsx
// Example test
test("fullscreen functionality", () => {
  render(<Box title="Test" description="Test description" />);

  const fullscreenButton = screen.getByLabelText("Enter fullscreen");
  fireEvent.click(fullscreenButton);

  expect(screen.getByLabelText("Exit fullscreen")).toBeInTheDocument();
});
```
