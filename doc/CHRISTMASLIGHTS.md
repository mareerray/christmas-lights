$${\color{pink}\text{Christmas\, Lights\, Animation}}$$
>The Christmas lights are a row of circular bulbs whose glow is turned on and off over time using @keyframes animations and box-shadow.
​

## Structure of one bulb
Each bulb is a `.circle` element, with extra parts drawn using `::before` and `::after`.
​

- ${\color{pink}\text{.circle:}}$

    - `height: 50px; width: 50px; border-radius: 50%;` → makes the main bulb shape.
​

    - `background: rgba(0, 0, 0, 0.3);` → dark base color when not glowing.
​

    - `position: relative;` → so the “cap” and “wire” can be positioned relative to this bulb.
​

- ${\color{pink}\text{.circle::before (the cap on top):}}$

    - Small rectangle on top of the bulb:

        - `height: 15px; width: 15px; top: -15px; left: 17.5px;` so it sits nicely on the circle.
​

    - `background: rgb(68, 53, 73); border-bottom: 2px solid rgb(97, 81, 107);` gives a slightly 3D, plastic look.
​

- ${\color{pink}\text{.circle::after (the wire going to the next bulb):}}$

    - `top: -20px; left: 30px; width: 70px; height: 18.666...px;`.
​

    - `border-bottom: solid #222 2px; border-radius: 50%;` → draws a curved line, like a cable.
​

    - `.circle:last-child::after { border: none; }` removes the wire from the last bulb so it does not continue past the end.
​

So visually:

- The circle is the glass bulb.

- The `::before` block is the cap.

- The `::after` arc is the cable.

## Colors and which animation each uses
Different classes set the bulb color and give it a specific animation.
​

${\color{#FF69B4}\text{Pink\, bulb}}$

    .pink { background-color: #FF69B4; animation: glow-1 1.2s infinite; }.
​

${\color{#f1c40f}\text{Yellow\, bulb}}$


    .yellow { background-color: #f1c40f; animation: glow-2 1.2s infinite; }.
​

${\color{#64fcfe}\text{Blue\, bulb}}$


    .blue { background-color: #64fcfe; animation: glow-3 1.2s infinite; }.
​

${\color{#2ecc71}\text{Green\, bulb}}$


    .green { background-color: #2ecc71; animation: glow-4 1.2s infinite; }.
​

So in HTML you have something like:
```html
<div class="circle pink"></div>

<div class="circle yellow"></div>

<div class="circle blue"></div>

<div class="circle green"></div>
````

and they all run their own glow-* keyframes every 1.2 seconds, looping forever.
​

## How the glow animations work
The “glow” is not the background color itself but the `box-shadow` around the circle.
​

### ${\color{#FF69B4}\text{Pink glow (glow-1)}}$

```css
@keyframes glow-1 {
  0%, 100% {
    box-shadow: 0 0 20px 5px #FF69B4;
  }
  50% {
    box-shadow: none;
  }
}
````
- At `0%` and `100%`: strong pink glow (`box-shadow: 0 0 20px 5px #FF69B4`).
​

- At `50%`: glow disappears (`box-shadow: none`).
​

- Effect: pink bulb is bright → goes dark → bright again over 1.2s.
​

### ${\color{#f1c40f}\text{Yellow glow (glow-2)}}$

```css
@keyframes glow-2 {
  0%, 100% {
    box-shadow: none;
  }
  50% {
    box-shadow: 0 0 20px 5px #f1c40f;
  }
}
````
- At `0%` and `100%`: no glow.
​

- At `50%`: bright yellow glow (`#f1c40f`).
​

- Effect: opposite pattern of pink; yellow is off → bright → off.
​

### ${\color{#64fcfe}\text{Blue glow (glow-3)}}$

```css
@keyframes glow-3 {
  0%, 100% {
    box-shadow: 0 0 20px 5px #74f7e1;
  }
  50% {
    box-shadow: none;
  }
}
````
- Same pattern as pink: on → off → on, but with blue color.
​

### ${\color{#2ecc71}\text{Green glow (glow-4)}}$

```css
@keyframes glow-4 {
  0%, 100% {
    box-shadow: none;
  }
  50% {
    box-shadow: 0 0 20px 5px #2ecc71;
  }
}
````
- Same pattern as yellow: off → on → off, but with green.
​

### Key idea:

- Pink and blue: “bright at start/end, dark in middle”.

- Yellow and green: “dark at start/end, bright in middle”.

- Because they all run at the same speed but have opposite patterns, the bulbs take turns glowing instead of all blinking together.
​

##  How the row of lights is laid out
The lights sit inside a container like `.main.`
​

- .main:

    - `display: flex; justify-content: center; align-items: center; flex-wrap: wrap; gap: 0.5rem;`.
​

    - This puts bulbs next to each other in a line (or multiple lines on small screens), with some space between them.
​

    - The curved `::after` wire of each .circle visually connects one bulb to the next, so the whole thing looks like a single string of lights.
​

## Animation mental model:

- Every bulb has its own little “schedule” for when it should glow, described by `@keyframes`.

- CSS ticks through 0% → 50% → 100% for each bulb’s animation in 1.2 seconds, then repeats.

- Because pink/blue are “on–off–on” and yellow/green are “off–on–off”, the string looks like it’s constantly twinkling in an alternating pattern instead of flashing all at once.

​

## What is a pseudo‑element?
- A pseudo‑element (like `::before` or `::after`) is fake content that CSS can add to an element.

- It:

    - Does not exist in your HTML.

    - Is created only in CSS with `::before` or `::after`.

    - Needs `content: ""` to appear.

- You use it when you want extra shapes or decoration without adding more tags to the HTML.

So your HTML only has `<div class="circle">`, but visually it looks like:

- bulb (the real `.circle`)

- plus a cap (`.circle::before`)

- plus a wire (`.circle::after`)
all drawn by CSS.
​

### How `.circle::after` works here
From your CSS (simplified):
​

```css
.circle::after {
  content: "";
  position: absolute;
  top: -20px;
  left: 30px;
  width: 70px;
  height: 18.6667px;
  border-bottom: solid #222 2px;
  border-radius: 50%;
}
````

#### Line by line:

- `content: "";`

    - This tells the browser “create the pseudo‑element”. Without this, nothing shows.

- `position: absolute;`

    - The wire is positioned relative to `.circle` (because .circle is `position: relative;`).
​

    - So `top` and `left` are measured from the top‑left of the bulb.
    
- `top: -20px;`

    - Move the wire up 20px above the bulb.

    - Negative value means it sits above the circle.

- `left: 30px;`

    - Move the wire a bit to the right, so it starts near the right side of the bulb (where the cable would continue).
​

- `width: 70px; height: 18.6667px;`

    - This defines a rectangle area in which the curve will be drawn.
​

- `border-bottom: solid #222 2px;`

    - Draws only the bottom border of that rectangle.

    - That bottom border will become the cable line.

- `border-radius: 50%;`

    - Rounds the rectangle so the bottom border becomes a smooth curve, like a hanging wire.
​

So `.circle::after` = “an invisible rounded box above/right of the bulb whose curved bottom edge is drawn as a line”.

Then you also have:
​

```css
.circle:last-child::after {
  content: '';
  position: absolute;
  border: none;
}
````

- For the last bulb, the border is removed so the wire does not extend past the final light.

---