/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ["class"],
	content: [
	  "./index.html",
	  "./src/**/*.{ts,tsx,js,jsx}",
	  "./pages/**/*.{js,jsx}",
	  "./components/**/*.{js,jsx}",
	  "./app/**/*.{js,jsx}"
	],
	theme: {
	  container: {
		center: true,
		padding: "2rem",
		screens: {
		  "2xl": "1400px",
		},
	  },
	  extend: {
		borderRadius: {
		  lg: "var(--radius)",
		  md: "calc(var(--radius) - 2px)",
		  sm: "calc(var(--radius) - 4px)",
		},
		colors: {
		  border: "hsl(var(--border))",
		  input: "hsl(var(--input))",
		  ring: "hsl(var(--ring))",
		  background: "hsl(var(--background))",
		  foreground: "hsl(var(--foreground))",
		  primary: {
			DEFAULT: "#19376D",
			foreground: "#ffffff",
			secondary: "#19376D",
			accent: "#576CBC",
			light: "#A5D7E8",
		  },
		  secondary: {
			DEFAULT: "#576CBC",
			foreground: "#ffffff",
		  },
		  destructive: {
			DEFAULT: "hsl(var(--destructive))",
			foreground: "hsl(var(--destructive-foreground))",
		  },
		  muted: {
			DEFAULT: "#f3f4f6",
			foreground: "#576CBC",
		  },
		  accent: {
			DEFAULT: "#A5D7E8",
			foreground: "#0B2447",
		  },
		  popover: {
			DEFAULT: "hsl(var(--popover))",
			foreground: "hsl(var(--popover-foreground))",
		  },
		  card: {
			DEFAULT: "hsl(var(--card))",
			foreground: "hsl(var(--card-foreground))",
		  },
		  "blue-dark": "#0A2240",
		  "blue-navy": "#14396A",
		  "blue-medium": "#2A5395",
		  "blue-light": "#3A75C4",
		  chart: {
			"1": "hsl(var(--chart-1))",
			"2": "hsl(var(--chart-2))",
			"3": "hsl(var(--chart-3))",
			"4": "hsl(var(--chart-4))",
			"5": "hsl(var(--chart-5))",
		  },
		  sidebar: {
			DEFAULT: "hsl(var(--sidebar-background))",
			foreground: "hsl(var(--sidebar-foreground))",
			primary: "hsl(var(--sidebar-primary))",
			"primary-foreground": "hsl(var(--sidebar-primary-foreground))",
			accent: "hsl(var(--sidebar-accent))",
			"accent-foreground": "hsl(var(--sidebar-accent-foreground))",
			border: "hsl(var(--sidebar-border))",
			ring: "hsl(var(--sidebar-ring))",
		  },
		},
		gridTemplateColumns: {
			'auto': 'repeat(auto-fill, minmax(200px, 1fr))',
		}
	  },
	},
	plugins: [require("tailwindcss-animate")],
  };
  