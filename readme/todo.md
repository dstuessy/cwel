# ToDo

Here go miscellaneous Todo items.

## Reset styles

Reset styles to implement for miscellaneous components in the future.

```
/**************************
 * IMAGE
 *************************/

svg:not(:root) {
    overflow: hidden; // hide the overflow in IE.
}

img,
.cwel-image {
    border-style: none; // Remove the border on images inside links in IE 10-.
}

/**************************
 * AUDIO
 *************************/

audio {
	display: inline-block; // Add the correct display in IE LTE 9.
}

audio:not([controls]) {
	display: none; // Add the correct display in iOS 4-7.
	height: 0; // Add the correct display in iOS 4-7.
}

/**************************
 * VIDEO
 *************************/

video {
	display: inline-block; // Add the correct display in IE LTE 9.
}


/**************************
 * BUTTONS
 *************************/

button {
	overflow: visible; // Show the overflow in Edge and IE.
	font-family: sans-serif; // Change the font styles in all browsers (opinionated).
	font-size: 100%; // Change the font styles in all browsers (opinionated).
	line-height: 1.15; // Change the font styles in all browsers (opinionated).
	margin: 0; // Remove the margin in Firefox and Safari.
}

button::-moz-focus-inner,
[type="button"]::-moz-focus-inner,
[type="reset"]::-moz-focus-inner,
[type="submit"]::-moz-focus-inner {
	padding: 0; // Remove the inner border and padding in Firefox.
	border-style: none; // Remove the inner border and padding in Firefox.
}

button:-moz-focusring,
[type="button"]:-moz-focusring,
[type="reset"]:-moz-focusring,
[type="submit"]:-moz-focusring {
	outline: 1px dotted ButtonText; // Restore the focus styles unset by the previous rule.
}

/**************************
 * FORMS
 *************************/

input,
optgroup,
select,
textarea {
	font-family: sans-serif; // Change the font styles in all browsers (opinionated).
	font-size: 100%; // Change the font styles in all browsers (opinionated).
	line-height: 1.15; // Change the font styles in all browsers (opinionated).
	margin: 0; // Remove the margin in Firefox and Safari.
}

input {
	overflow: visible; // Show the overflow in Edge and IE.
}

[type="number"]::-webkit-inner-spin-button,
[type="number"]::-webkit-outer-spin-button {
	height: auto; // Correct the cursor style of increment and decrement buttons in Chrome.
}

[type="search"] {
	-webkit-appearance: textfield; // Correct the odd appearance in Chrome and Safari.
	outline-offset: -2px; // Correct the outline style in Safari.
}

[type="search"]::-webkit-search-cancel-button,
[type="search"]::-webkit-search-decoration {
	-webkit-appearance: none; // Remove the inner padding and cancel buttons in Chrome and Safari on macOS.
}

::-webkit-file-upload-button {
	-webkit-appearance: button; // Correct the inability to style clickable types in iOS and Safari.
	font: inherit; // Change font properties to `inherit` in Safari.
}
```
