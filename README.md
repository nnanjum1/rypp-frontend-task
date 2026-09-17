# RYPP – Vehicle Rental Homepage

A responsive vehicle rental homepage developed as part of the **RYPP Frontend Developer Task**.

The project recreates the provided RYPP homepage design using Next.js, React, TypeScript, and Tailwind CSS, with responsive layouts and interactive features.

## Live Demo

https://rypp-frontend-task.vercel.app/

## GitHub Repository

https://github.com/nnanjum1/rypp-frontend-task

## Features

* Responsive homepage for desktop, tablet, and mobile
* Responsive navigation with mobile menu
* Hero section based on the provided RYPP design
* Vehicle category filtering:

  * Bikes
  * Scooters
  * Cars
* Vehicle cards with mock/static data
* Book Now interaction
* Destination section with mock/static data
* Newsletter email validation
* Responsive footer
* Reusable React components
* Clean and organized code structure

## Tech Stack

* **Next.js**
* **React.js**
* **TypeScript**
* **Tailwind CSS**
* **Lucide React**
* **React Icons**

## Project Structure

```text
src/
├── app/
│   ├── page.tsx
│   └── ...
│
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── VehicleSection.tsx
│   ├── VehicleCard.tsx
│   ├── DestinationCard.tsx
│   ├── Newsletter.tsx
│   ├── Footer.tsx
│   └── ...
│
└── data/
    └── ...

public/
└── assets/
    └── ...
```

## Getting Started

### Clone the repository

```bash
git clone https://github.com/nnanjum1/rypp-frontend-task.git
```

### Navigate to the project

```bash
cd rypp-frontend-task
```

### Install dependencies

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

Open `http://localhost:3000` in your browser.

## Production Build

To create a production build:

```bash
npm run build
```

To run the production build locally:

```bash
npm run start
```

## Responsive Design

The homepage is designed to provide a responsive experience across:

* Desktop
* Laptop
* Tablet
* Mobile

The navigation, hero section, vehicle cards, images, buttons, and other content adapt to different screen sizes.

## Functionality

### Vehicle Filtering

Users can filter the available vehicles by category:

* Bikes
* Scooters
* Cars

### Book Now

The **Book Now** interaction allows users to start the vehicle booking flow using the available mock vehicle data.

### Newsletter

The newsletter form includes basic email validation to handle invalid email input.

## Data

The project uses mock/static data for vehicles and destinations as required by the task. No external booking or vehicle database is connected.

## Screenshot

![RYPP Vehicle Rental Homepage](./screenshots/rypp-homepage-desktop.png)



## Task

This project was developed as part of the **RYPP Frontend Developer hiring task**, with a focus on:

* UI implementation
* Responsive design
* React fundamentals
* Reusable components
* Interactive functionality
* Clean code structure
* User-friendly experience
