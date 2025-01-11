# Etch-a-Sketch

A fun project to practice JavaScript, HTML, CSS, and Flexbox concepts. The goal is to build a dynamic webpage where users can draw on a grid using their mouse. Additional features like color randomization and progressive darkening provide an extra layer of challenge and interactivity.

## Assignment

1. **Create the Grid Structure**
   - [ ] Create a webpage with a 16x16 grid of square divs.
   - [ ] Use JavaScript to dynamically create the grid. Do not create the divs manually in your HTML file.
   - [ ] Place the grid squares inside a container `div` in your HTML file.
   - [ ] Use Flexbox to arrange the divs into a grid layout.
   - [ ] Avoid using CSS Grid for this project to specifically practice Flexbox.
       > **Hint**: Be cautious with borders and margins, as they can alter the size of your squares.

   - **Debugging Tips**:
     - [ ] Ensure your CSS stylesheet is properly linked.
     - [ ] Use browser developer tools to check for JavaScript errors or hidden elements.
     - [ ] Add `console.log` statements in your JavaScript for troubleshooting.

2. **Add a Hover Effect**
   - [ ] Set up a hover effect so that the grid squares change color when the mouse passes over them, leaving a trail like a pen.
   - [ ] Use event listeners for mouseenter or mouseover events to achieve the effect.
       > **Hint**: You can change the color of the divs by:
       - Adding a new class to the div.
       - Modifying the div's `background-color` using JavaScript.

3. **Add Dynamic Grid Resizing**
   - [ ] Add a button at the top of the screen to allow users to specify the number of squares per side for a new grid.
   - [ ] Use a `prompt` to ask the user for the grid size.
   - [ ] Remove the existing grid and generate a new grid in the same total space (e.g., 960px wide).
   - [ ] Limit the maximum input size to 100 squares per side to avoid performance issues.
       > **Tip**: If the user enters `64`, a new 64x64 grid should appear without altering the total space allocated for the grid.

4. **Push the Project to GitHub**
   - [ ] Once the project is complete, push it to a GitHub repository to showcase your work.

## Extra Credit

### **Randomized Colors**
- [ ] Transform the squares to display random RGB colors on hover instead of a fixed color.
- [ ] Ensure each interaction with a square results in a unique color.

### **Progressive Darkening**
- [ ] Introduce a progressive darkening effect where each interaction darkens the square by 10%.
- [ ] Ensure a square becomes fully black (or completely colored) after ten interactions.
    > **Hint**: `opacity` CSS property to implement this effect.[MDN's documentation on opacity](https://developer.mozilla.org/en-US/docs/Web/CSS/opacity) for guide.

### **Both Challenges**
- [ ] Combine both the randomized colors and progressive darkening effects for an advanced interactive experience.
