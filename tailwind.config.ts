
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// Custom colors for the portfolio
				"deep-bg": "#1A1F2C",
				"darker-bg": "#15171E",
				"accent-purple": "#9b87f5",
				"accent-purple-light": "#B19CFF",
				"accent-blue": "#6FDBFF",
				"text-primary": "#FFFFFF",
				"text-secondary": "#A9B1D6",
				"card-bg": "#23283A",
				"card-hover": "#2A3047",
				"neuro-light": "rgba(255, 255, 255, 0.05)",
				"neuro-shadow": "rgba(0, 0, 0, 0.3)",
				"glass-bg": "rgba(26, 31, 44, 0.6)",
				"glass-border": "rgba(255, 255, 255, 0.08)",
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			fontFamily: {
				sans: ['Inter', 'sans-serif'],
				display: ['Space Grotesk', 'sans-serif'],
				mono: ['Fira Code', 'monospace'],
			},
			boxShadow: {
				'neuro': '-5px -5px 10px rgba(255, 255, 255, 0.05), 5px 5px 15px rgba(0, 0, 0, 0.2)',
				'neuro-inset': 'inset -5px -5px 10px rgba(255, 255, 255, 0.05), inset 5px 5px 15px rgba(0, 0, 0, 0.2)',
				'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.36)',
				'card-hover': '0 22px 40px rgba(0, 0, 0, 0.3), 0 10px 10px rgba(0, 0, 0, 0.22)',
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'gradient-x': {
					'0%, 100%': {
						backgroundPosition: '0% 50%',
					},
					'50%': {
						backgroundPosition: '100% 50%',
					},
				},
				'gradient-y': {
					'0%, 100%': {
						backgroundPosition: '50% 0%',
					},
					'50%': {
						backgroundPosition: '50% 100%',
					},
				},
				'gradient-xy': {
					'0%, 100%': {
						backgroundPosition: '0% 0%',
					},
					'25%': {
						backgroundPosition: '100% 0%',
					},
					'50%': {
						backgroundPosition: '100% 100%',
					},
					'75%': {
						backgroundPosition: '0% 100%',
					},
				},
				'pulse-slow': {
					'0%, 100%': { opacity: 1 },
					'50%': { opacity: 0.8 },
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' },
				},
				'glow': {
					'0%, 100%': { 
						boxShadow: '0 0 5px rgba(155, 135, 245, 0.5), 0 0 20px rgba(155, 135, 245, 0.2)' 
					},
					'50%': { 
						boxShadow: '0 0 20px rgba(155, 135, 245, 0.8), 0 0 30px rgba(155, 135, 245, 0.4)' 
					},
				},
				'card-flip': {
					'0%': { transform: 'rotateY(0)' },
					'100%': { transform: 'rotateY(180deg)' },
				},
				'card-flip-back': {
					'0%': { transform: 'rotateY(180deg)' },
					'100%': { transform: 'rotateY(0)' },
				},
				'fade-in': {
					'0%': { opacity: '0', transform: 'translateY(10px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' },
				},
				'slide-up': {
					'0%': { opacity: '0', transform: 'translateY(20px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' },
				},
				'slide-down': {
					'0%': { opacity: '0', transform: 'translateY(-20px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' },
				},
				'slide-in-right': {
					'0%': { transform: 'translateX(100%)', opacity: 0 },
					'100%': { transform: 'translateX(0)', opacity: 1 }
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'gradient-x': 'gradient-x 15s ease infinite',
				'gradient-y': 'gradient-y 15s ease infinite',
				'gradient-xy': 'gradient-xy 15s ease infinite',
				'pulse-slow': 'pulse-slow 3s ease-in-out infinite',
				'float': 'float 6s ease-in-out infinite',
				'glow': 'glow 2s ease-in-out infinite',
				'fade-in': 'fade-in 0.6s ease-out',
				'slide-up': 'slide-up 0.8s ease-out',
				'slide-down': 'slide-down 0.8s ease-out',
				'slide-in-right': 'slide-in-right 0.4s ease-out',
			},
			backgroundImage: {
				'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'hero-gradient': 'linear-gradient(135deg, #1A1F2C 0%, #262D46 100%)',
				'card-gradient': 'linear-gradient(135deg, #23283A 0%, #1E2236 100%)',
				'accent-gradient': 'linear-gradient(135deg, #9b87f5 0%, #6FDBFF 100%)',
			},
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
