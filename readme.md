# TaskFlow

TaskFlow is a modern, responsive one-page web application designed to help individuals and teams organize tasks, boost productivity, and streamline workflows. Built with vanilla **HTML5, CSS3, and JavaScript**, TaskFlow offers a clean and intuitive interface that works seamlessly across mobile, tablet, and desktop devices.

---

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Responsive Design](#responsive-design)
- [Accessibility](#accessibility)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

---

## Features

TaskFlow includes the following sections and functionalities:

- **Hero Section**: Introduces TaskFlow with a prominent app name, tagline, and call-to-action button to encourage user engagement.
- **Features Section**: Showcases key functionalities (Task Management, Real-Time Collaboration, Analytics Dashboard, Integrations) with icons and descriptions, presented in a responsive grid layout.
- **Reviews Section**: Displays customer testimonials with avatars, ratings (⭐ 4 stars), and quotes, highlighting user satisfaction.
- **Marquee Section**: Features a scrolling logo carousel of enterprises (e.g., Google, Netflix) using TaskFlow, enhancing credibility.
- **Pricing Section**: Offers three pricing plans (Free, Standard, Premium) with clear perks, prices, and a "Purchase" button, styled with a _Most Popular_ badge for the Standard plan.
- **Footer Section**: Includes the TaskFlow logo, description, quick links, help center, contact information, and social media links. On mobile, links are presented in an accordion for better usability.

---

## Prerequisites

To run TaskFlow locally, ensure you have the following:

- A modern web browser (e.g., Chrome, Firefox, Safari).
- A local server (e.g., Live Server for VS Code or `python -m http.server`).
- **Font Awesome** for social media icons in the footer (via CDN):

```html
<script
  src="https://kit.fontawesome.com/your-kit-id.js" crossorigin="anonymous"
></script>
```

## Installation

### Clone the Repository

```bash
git clone https://github.com/your-username/taskflow.git
cd taskflow
```

# Project Directory

taskflow/
├── assets/
│ ├── icons/
│ │ ├── check-mark.svg
│ │ ├── star.svg
│ │ ├── task.svg
│ │ ├── collaboration.svg
│ │ ├── analytics.svg
│ │ ├── integrations.svg
│ ├── images/
│ │ ├── portraits/
│ │ │ ├── alice.jpeg
│ │ │ ├── bob.jpeg
│ │ │ ├── catherine.jpeg
│ │ │ ├── david.jpeg
│ ├── logo/
│ │ ├── google.svg
│ │ ├── netflix.svg
│ │ ├── puma.svg
│ │ ├── rakuten.svg
│ │ ├── airbnb.svg
│ │ ├── jeep.svg
├── index.html
├── styles.css
├── README.md
