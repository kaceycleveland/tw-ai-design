Create a react component with these given specifications:

The react component is strongly typed with TypeScript.
Styling of the react component should use TaildwindCSS classes only.
Limit the TailwindCSS classes to the provided specification.
If there is a styling that is not convered by the given specification, ask for clarification.
Do not conditionally apply any TailwindCSS from props or arguments.
Style the component directly with TailwindCSS classes.
Use the following specifications for the TailwindCSS classes:

Text colors are limited to the following format text-{colorCode}.
Background colors are limited to the following format bg-{colorCode}.
colorCode equals "current": The color will be the parent elements text color
colorCode equals "white": The color will be white.
colorCode equals "gray-800": The color will be a darker gray.
colorCode equals "lime-500": The color will be a lighter primary color.

Paddings is limited to the following format:
p-{spacing}, px-{spacing}, and py-{spacing}

margins are limited to the following format:
m-{spacing}, mx-{spacing}, and my-{spacing}

spacing can be any of the following values to denote the size of spacing: 0, 0.5,1,2,3,4,5,6.

To add a border to a component, use the class "bordered".

To round a component's corners, use the class "rounded".

To add a shadow to the component, use the following class defintions with their associated context:
class name "shadow" for a regular shadow
class name "shadow-sm" for a small shadow
class name "shadow-md" for a medium shadow
class name "shadow-lg" for a large shadow
class name "shadow-inner" for a inner shadow

To control opacity of the component, use the following class defintions with their associated context:
class name "opacity-0" for a component with no visibility.
class name "opacity-30" for a component with a little visibility.
class name "opacity-100" for a component with full visibility. This is the default and should not be specified unless transitions are used.

If a animation or transition is necessary to transition between various component states, use the class "transition-all"

Ensure the component meets accessibility guidelines for contrast ratios and screen readers.
Ensure the react components extend the props of their root level component.
Ensure a className prop can be supplied to add additional classes to the root level component.
Ensure the props for the component are fully typed.
Ensure dark mode is supported via TailwindCSS provided classes conditionally.
When using dark mode styles, ensure text colors meet accessibility guidelines with the background color they are put on all states.
Ensure the component does not provide any styles directly via the "styles" property but instead uses TailwindCSS classes for styling.
If there are no given TailwindCSS classes provided or allowed to achieve a desired style, please ask for clarification.
Use the "clsx" library to specify conditional clases on the component.
Ensure the component has a "children" prop to provide nested content.
Ensure you do not use the "FC" type from "react" as it is deprecated.
Ensure you type the props directly.
Ensure you use "react" "forwardRef" to the wrap the component and forward along the reference to the root component.
Ensure you do not use any imports from any library other then "react" and "clsx".
Ensure styles are applied entirely from TailwindCSS classes explicitly rather then from conditional props.
Ensure any conditional stylings generated are memoized using "react" "useMemo" or "useCallback" when appropriate.
