# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 14 TypeScript portfolio application featuring a dark-themed hero section with terminal-styled window cards. The app uses Tailwind CSS for styling with custom design tokens and responsive layouts.

## Development Commands

### Core Commands
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server

### Package Management
- `npm install` - Install dependencies

## Architecture

### Framework & Stack
- **Next.js 14** with TypeScript and App Router
- **Tailwind CSS** for styling with custom design system
- **React 18** with modern patterns
- **Lucide React** for icons

### File Structure
- `app/` - Next.js App Router pages and layouts
  - `layout.tsx` - Root layout with Inter font and global styling
  - `about.tsx` - Main about page component
  - `globals.css` - Global styles and CSS custom properties
- `components/` - Reusable React components
  - `WindowCard.tsx` - Main terminal-style card component
  - `HeroText.tsx` - Hero section text content
  - `NavBar.tsx` - Navigation with pills and social icons
  - `SocialIcons.tsx` - Social media icon links

### Design System

#### Colors & Theme
- Dark canvas background: `#0C0D0E` (--bg-base)
- Vignette gradients with subtle radial lighting effects
- Custom color palette defined in `tailwind.config.ts`

#### Layout Conventions
- **Desktop width**: Use `max-w-card` (880px) for central cards
- **Container**: `max-w-[1200px] mx-auto px-6` for page containers
- **Centering**: `mx-auto` with proper container padding

#### Typography
- **Inter font** loaded via Google Fonts with `--font-inter` variable
- Custom letter spacing: `tracking-tightest2` (-0.01em)
- Responsive text scaling across breakpoints

#### Components
- **WindowCard**: Terminal-style card with traffic light buttons, inner bezel, and radial overlay effects
- **NavBar**: Three-column grid layout with name, navigation pills, and social icons
- All components use consistent spacing and the established design tokens

### Styling Approach
- Tailwind utility classes with custom extensions
- CSS custom properties for consistent theming
- Responsive design with mobile-first approach
- Custom utilities in `globals.css` for specialized effects (vignette backgrounds, hairline borders)

### TypeScript Configuration
- Strict mode enabled
- Path mapping with `@/*` aliases to root directory
- Modern ES2022 target with Next.js optimizations