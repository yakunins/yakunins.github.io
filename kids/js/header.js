(function () {
  const header = document.createElement('header');
  header.id = 'course-header';
  header.innerHTML = `
    <nav>
      <a href="../lessons/lesson-01.html" class="header-logo">
        <svg class="header-globe" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="12" r="10"/><ellipse cx="12" cy="12" rx="4" ry="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M4.5 6.5h15M4.5 17.5h15"/>
        </svg>
        Internet &amp; Web Course
      </a>
      <ul class="header-nav">
        <li><a href="../lessons/lesson-01.html" data-tooltip="What Is the Internet?">1</a></li>
        <li><a href="../lessons/lesson-02.html" data-tooltip="IP Addresses, DNS & How Data Finds Its Way">2</a></li>
        <li><a href="../lessons/lesson-03.html" data-tooltip="Protocols — The Rules of the Internet">3</a></li>
        <li><a href="../lessons/lesson-04.html" data-tooltip="Browsers — Your Window to the Web">4</a></li>
        <li><a href="../lessons/lesson-05.html" data-tooltip="Servers & Hosting — Where Websites Live">5</a></li>
        <li><a href="../lessons/lesson-06.html" data-tooltip="HTML — The Skeleton of Every Web Page">6</a></li>
        <li><a href="../lessons/lesson-07.html" data-tooltip="CSS — Making the Web Beautiful">7</a></li>
        <li><a href="../lessons/lesson-08.html" data-tooltip="JavaScript — Making the Web Interactive">8</a></li>
        <li><a href="../lessons/lesson-09.html" data-tooltip="How Web Apps Work — Putting It All Together">9</a></li>
        <li><a href="../lessons/lesson-10.html" data-tooltip="Your Digital Footprint">10</a></li>
        <li><a href="../lessons/lesson-11.html" data-tooltip="Passwords & Authentication">11</a></li>
        <li><a href="../lessons/lesson-12.html" data-tooltip="Phishing, Scams & Social Engineering">12</a></li>
        <li><a href="../lessons/lesson-13.html" data-tooltip="Privacy Settings & Safe Browsing">13</a></li>
        <li><a href="../lessons/lesson-14.html" data-tooltip="Cyberbullying & Online Behavior">14</a></li>
        <li><a href="../lessons/lesson-15.html" data-tooltip="Search Engines — How They Really Work">15</a></li>
        <li><a href="../lessons/lesson-16.html" data-tooltip="Social Media — Algorithms Behind Your Feed">16</a></li>
        <li><a href="../lessons/lesson-17.html" data-tooltip="E-Commerce & Online Payments">17</a></li>
        <li><a href="../lessons/lesson-18.html" data-tooltip="Cloud Computing & Online Storage">18</a></li>
        <li><a href="../lessons/lesson-19.html" data-tooltip="Emerging Technologies — AI, IoT & the Future">19</a></li>
        <li><a href="../lessons/lesson-20.html" data-tooltip="Your Internet Action Plan — Final Project">20</a></li>
      </ul>
    </nav>
  `;

  // Load header CSS
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = '../css/header.css';
  document.head.appendChild(link);

  document.body.prepend(header);

  // Highlight current lesson
  const path = window.location.pathname;
  const match = path.match(/lesson-(\d+)/);
  if (match) {
    const num = parseInt(match[1], 10);
    const links = header.querySelectorAll('.header-nav li a');
    if (links[num - 1]) {
      links[num - 1].classList.add('active');
    }
  }

})();
