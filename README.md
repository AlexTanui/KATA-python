# Python Quiz 2{Groups of 5}

Create a component that displays chips, with the ability to specify the maximum
number of displayed chips and the maximum text length in a chip.

Introduction: Given a component called ChipList which accepts three parameters:

1. chips: the array of chips (optional);
2. maxChips: the maximum number of chips displayed (optional);
3. maxTextLength: the maximum length of text in a chip (optional);

write logic to display the component according to the requirements specified below.

# Requirements
Display the array of chips (the chips parameter) passed to the component according
to the following rules:

1. The number of displayed chips should be controlled by the maxChips
parameter.
2. If the maximum number of chips to be displayed is exceeded, indicate the
number of chips that are not shown in the aside element with
data-testid="exceeding-text".
3. The length of text in each chip should be controlled by the maxTextLength
parameter.
4. If the maximum length of text in a chip is exceeded, attach an ellipsis symbol
(…) after the last allowed letter.
5. If no parameters are passed or the chips array is empty, return an empty React
Fragment.
6. Handle the edge cases of:
○ no data being passed to the component;
○ an empty chips array;
○ the chips, maxChips and maxTextLength parameters being provided in
all possible configurations;
○ the maxChips and maxTextLength parameters having values less than
or equal to 0.
7. Do not change the way the App and ChipList components are exported.
8. ChipList is the component that will be tested against a set of Unit Tests. The
App component is only used for simulating the behaviour in the Preview tab;
it will be not used in the Unit Tests.
9. Ensure that the chips are displayed in the same order as they appear in the
chips property. Be sure to provide the correct index for each chip in the
data-testid property.

# Assumptions
● Components and styles will be prepared upfront; your only task is to focus on
the logic to handle the parameters.
● Try not to alter the existing components, or some tests might fail.
● The maxChips and maxTextLength parameters can be either a number or
undefined.
● The chips list can be undefined, an empty array or a non-empty array.
Hints
● Show the exceeding "n more items" label only if the number of chips is greater
than the maximum quantity of chips allowed to be displayed. There is no need
to display "0 more items". Be sure not to render the <aside> tag if there is no
need to display the label.
● If the maxTextLength property is less than 1, assume that all chips will only
show the ellipsis symbol.
● If the maxChips property is less than 1, assume that only the {n} more items
label will be displayed.
● Use the Preview tab to visually check the correctness of your code.
● Use the browser's developer tools in the Preview tab to debug your code
(console.log).

Available packages/libraries
● React version 18.2.0

# Examples
Given a list
const sampleChips = [
{ label: "123456" },
{ label: "1234567" },
{ label: "12345678" },
{ label: "12345" },
{ label: "123456789" }
];
and calling the <ChipList /> component with the following properties:
<ChipList
chips={chips}
maxChipsDisplayed={3}
maxTextLength={6}
/>