# Scroll-Based Video Animation with React and Framer Motion

This project demonstrates how to create a scroll-based video animation similar to those seen on Apple's website. It utilizes React and the `framer-motion` library to handle scroll events and animations. Instead of actual video playback, it displays a series of images on a canvas element. As the user scrolls, the images are dynamically rendered based on the scroll position, creating the illusion of a video playing.

## Features

- Dynamically loads images into memory for smoother performance.
- Maps scroll progress to display different images in the gallery.
- Uses the `framer-motion` library for handling scroll events and animations.

## Installation

1. Clone the repository:

   ```
   git clone https://github.com/tanbiralam/scroll-video-animation-like-apple.git
   ```

2. Navigate to the project directory:

   ```
   cd scroll-video-animation-like-apple
   ```

3. Install dependencies:

   ```
   npm install
   ```

4. Start the development server:

   ```
   npm run dev
   ```

5. Open your web browser and visit `http://localhost:5173` to see the scroll gallery in action.

## Usage

- Scroll up and down on the webpage to navigate through the image gallery.
- Images are loaded and rendered dynamically based on the scroll position.

## Dependencies

- [React](https://reactjs.org/): A JavaScript library for building user interfaces.
- [framer-motion](https://www.framer.com/motion/): A library for creating animations and gestures in React applications.
