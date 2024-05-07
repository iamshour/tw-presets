const plugin = require("tailwindcss/plugin")

module.exports = plugin(function ({ addUtilities }) {
	addUtilities({
		/**
		 * Utility class for hiding the backface of an element.
		 *
		 * This utility class applies the style 'backface-visibility: hidden', which hides the backface of the element.
		 * This property is commonly used in 3D transforms to improve rendering performance and prevent flickering.
		 *
		 * @example
		 * // Apply the backface-hidden utility class to hide the backface of an element
		 * <div className="backface-hidden">
		 *   <!-- Content -->
		 * </div>
		 */
		".backface-hidden": { "backface-visibility": "hidden" },

		/**
		 * Utility class for showing the backface of an element.
		 *
		 * This utility class applies the style 'backface-visibility: visible', which shows the backface of the element.
		 * This property is commonly used in 3D transforms to ensure the backface is visible when needed.
		 *
		 * @example
		 * // Apply the backface-visible utility class to show the backface of an element
		 * <div className="backface-visible">
		 *   <!-- Content -->
		 * </div>
		 */
		".backface-visible": { "backface-visibility": "visible" },

		/**
		 * Utility class for creating a centered flex layout.
		 *
		 * This utility class simplifies the process of creating a flex container that is both horizontally and vertically centered.
		 *
		 * @example
		 * // Apply the flex-center utility class to create a flex container with centered content
		 * <div className="flex-center">
		 *   <!-- Content -->
		 * </div>
		 */
		".flex-center": { alignItems: "center", display: "flex", justifyContent: "center" },

		/**
		 * Utility class for creating a centered inline-flex layout.
		 *
		 * This utility class simplifies the process of creating an inline-flex container that is both horizontally and vertically centered.
		 *
		 * @example
		 * // Apply the flex-center utility class to create a flex container with centered content
		 * <div className="flex-center">
		 *   <!-- Content -->
		 * </div>
		 */
		".inline-flex-center": { alignItems: "center", display: "inline-flex", justifyContent: "center" },

		/**
		 * Utility class for preventing selection on elements.
		 *
		 * This utility class applies styles to prevent text selection on elements in various browsers.
		 *
		 * @example
		 * // Apply the prevent-selection utility class
		 * <div className="prevent-selection"></div>
		 */
		".prevent-selection": {
			MozUserSelect: "none",
			MsUserSelect: "none",
			"user-select": "none",
			WebkitTouchCallout: "none",
			WebkitUserDrag: "none",
			WebkitUserSelect: "none",
		},

		/**
		 * Utility class for defining custom basic animation style.
		 *
		 * This utility class applies a default animation styling for transition duration, transition property, and timing function.
		 *
		 * @example
		 * // Apply the custom animation utility class
		 * <div className="transition-basic"></div>
		 */
		".transition-basic": {
			transitionDuration: "300ms",
			transitionProperty: "all",
			transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
		},
	})
})
