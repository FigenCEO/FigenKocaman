# Color Scheme Options

This document shows all available color schemes for the website. To switch between them, uncomment the desired option in `styles.css` and comment out the flag colors.

## Current: Flag Colors (Active)
- **Primary Red**: #C1272D
- **Primary Green**: #006C35
- **Secondary Green**: #00A859

## Option 1: Soft Blue/Teal - Professional & Calming
- **Primary**: #2C5282 (Soft Navy Blue)
- **Primary Green**: #38A169 (Fresh Green)
- **Secondary Green**: #4FD1C7 (Light Teal)
- *Feel: Professional, trustworthy, calm*

## Option 2: Muted Navy & Sage - Elegant & Soothing
- **Primary**: #1E3A5F (Deep Navy)
- **Primary Green**: #5F8A6B (Sage Green)
- **Secondary Green**: #7FA892 (Light Sage)
- *Feel: Elegant, sophisticated, natural*

## Option 3: Soft Purple & Teal - Modern & Calming
- **Primary**: #5B6E9F (Soft Purple-Blue)
- **Primary Green**: #4A9B8E (Muted Teal)
- **Secondary Green**: #6BB5A8 (Light Teal)
- *Feel: Modern, creative, calming*

## Option 4: Warm Charcoal & Slate Blue - Professional & Muted
- **Primary**: #4A5568 (Warm Charcoal)
- **Primary Green**: #4A90A4 (Slate Blue)
- **Secondary Green**: #5BA8B8 (Soft Blue)
- *Feel: Professional, muted, sophisticated*

## Option 5: Deep Teal & Soft Blue - Sophisticated & Easy on Eyes
- **Primary**: #2C5282 (Deep Blue)
- **Primary Green**: #2D7A7A (Deep Teal)
- **Secondary Green**: #3A9A9A (Brighter Teal)
- *Feel: Sophisticated, easy on eyes, professional*

## How to Switch Colors

1. Open `styles.css`
2. Find the `:root` section at the top
3. Comment out the current flag colors (add `/*` before and `*/` after)
4. Uncomment the color scheme you want (remove `/*` and `*/`)
5. Save and refresh the page

Example:
```css
:root {
    /* Comment out flag colors */
    /* --primary-red: #C1272D;
    --primary-green: #006C35; */
    
    /* Uncomment your choice */
    --primary-red: #2C5282;
    --primary-green: #38A169;
}
```
