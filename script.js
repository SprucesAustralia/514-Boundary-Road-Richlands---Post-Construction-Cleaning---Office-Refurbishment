/* ------------------------------
   BASIC RESET / GLOBAL STYLES
------------------------------ */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: Arial, sans-serif;
  background-color: #ffffff;
  color: #183630; /* Dark forest color */
  line-height: 1.5;
}
img {
  max-width: 100%;
  height: auto;
}

/* ------------------------------
   HEADER / NAV
------------------------------ */
header {
  background-color: #01c6a0; /* Aqua */
  color: #ffffff;
  padding: 1rem;
}
.header-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.logo {
  font-size: 1rem;
  max-width: 80%;
}
.menu-toggle {
  display: none;
  background: none;
  border: none;
  color: #ffffff;
  font-size: 1.5rem;
  cursor: pointer;
}
.main-nav {
  margin-top: 0.5rem;
}
.main-nav ul {
  list-style: none;
  display: flex;
  gap: 1rem;
}
.main-nav li a {
  color: #ffffff;
  text-decoration: none;
  font-weight: bold;
  padding: 0.5rem 0.75rem;
  transition: background 0.3s;
}
.main-nav li a:hover {
  background-color: rgba(255, 255, 255, 0.2);
}
.main-nav li a.active {
  border-bottom: 2px solid #ffffff;
}

/* ------------------------------
   HERO SECTION (HOME PAGE)
------------------------------ */
.hero {
  background-color: #f3f1c0; /* Lemon */
  text-align: center;
  padding: 2rem 1rem;
}
.hero h2 {
  margin-bottom: 1rem;
}
.hero p {
  margin-bottom: 1rem;
}
.home-buttons {
  display: flex;
  flex-wrap: wrap; 
  gap: 1rem; 
  justify-content: center;
  margin-top: 1rem;
}
.cta {
  background-color: #183630; /* Dark forest */
  color: #ffffff;
  border: none;
  padding: 0.75rem 1.5rem;
  cursor: pointer;
  font-size: 1rem;
  border-radius: 4px;
}
.cta:hover {
  background-color: #01c6a0;
}

/* ------------------------------
   TABLE STYLES
------------------------------ */
.responsive-table {
  margin: 1rem 0;
  overflow-x: auto; /* Horizontal scroll on mobile if needed */
}
table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 1rem;
  font-size: 0.95rem;
}
thead {
  background-color: #c7de6b; /* Lime */
}
thead th {
  padding: 0.75rem;
  text-align: left;
}
tbody tr:nth-child(even) {
  background-color: #f9f9f9;
}
td,
th {
  border: 1px solid #ddd;
  padding: 0.75rem;
  vertical-align: top;
}

/* ------------------------------
   SITE ACCESS IMAGE
------------------------------ */
.site-access-image {
  margin-top: 1rem;
}

/* ------------------------------
   FOOTER
------------------------------ */
footer {
  background-color: #183630; /* Dark forest */
  color: #ffffff;
  text-align: center;
  padding: 1rem;
  margin-top: 2rem;
  font-size: 0.9rem;
}

/* ------------------------------
   MEDIA QUERIES
------------------------------ */
@media (max-width: 768px) {
  .menu-toggle {
    display: block;
  }
  .main-nav ul {
    flex-direction: column;
    display: none; /* hidden by default on small screens */
  }
  .main-nav ul.show {
    display: flex; /* show when toggled */
  }
  .logo {
    font-size: 0.9rem;
  }
}
