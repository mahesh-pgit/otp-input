# 🔐 React OTP Input Component

A lightweight, fully functional, and accessible OTP (One-Time Password) input component built with React. Handles every edge case you can think of — clean UX, smart navigation, and keyboard-friendly controls out of the box.

## 🚀 Features

-   ✅ Auto focus on the first input
-   🔢 Only accepts numeric input
-   ⌨️ Smooth keyboard navigation
    -   Arrow keys to move left/right
    -   Backspace auto-focuses the previous input
    -   Enter key triggers submission
-   🧠 Smart focus logic
    -   Automatically focuses next input on valid entry
    -   Prevents jumping/skipping input
-   🖱️ Click & focus auto-selects current value
-   🔄 Reset functionality
-   📦 Controlled input via React state
-   ✨ No external libraries used — pure React!

## 📸 Demo

Live Preview: 👉 [Check it out on Netlify](https://otp-input.netlify.app)

## 🧪 Try It Out

```bash
git clone https://github.com/mahesh-pgit/otp-input
cd otp-input
npm install
npm start
```

## 🧠 How It Works

-   **State-Driven Inputs:**

    A `useState` array keeps track of the individual input values.

-   **Refs for Control:**

    A `useRef` array holds references to each input for manual focus control.

-   **Input Restrictions:**

    Non-numeric inputs are ignored and trimmed.

-   **Keyboard Navigation:**

    -   `Backspace`: If the current input is empty, focus moves to the previous field.

    -   `ArrowLeft`: Manually navigate to the previous field.

    -   `ArrowRight`: Move to the next field.

    -   `Enter`: Triggers OTP submission.

-   **UX Touches:**

    -   Clicking or focusing on an input auto-selects its value for quick overwriting.

    -   The **Clear** button resets all inputs and refocuses the first input box.

    -   Auto-focuses the first input on component mount.

## ✏️ Customization Tips

-   Change `OTP_LENGTH` to any number like 4 or 6 — the component updates dynamically.

-   Style the inputs using Tailwind, CSS modules, or any CSS-in-JS solution.

-   Plug into your API by replacing the `alert()` inside `submitOTP()` with your logic.

-   Modular enough to extract into a reusable `<OtpInput />` component.

## 🧼 TODOs / Ideas for V2

-   📋 Support for pasting entire OTP at once

-   📱 Mobile-friendly UI & keypad handling

-   🚨 Validation states / error styling (error, success, loading)

-   ♿ Accessibility improvements (ARIA attributes, screen reader support)

-   🧾 TypeScript support

## 🧑‍💻 Author

Built with 💛 by [Mahesh](https://github.com/mahesh-pgit)

Pull requests, issues, and feedback are always welcome — let's build cool stuff together! ✌️
