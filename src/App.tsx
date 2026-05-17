/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar.tsx';
import Hero from './components/Hero.tsx';
import Experience from './components/Experience.tsx';
import Skills from './components/Skills.tsx';
import Portfolio from './components/Portfolio.tsx';
import Certificates from './components/Certificates.tsx';
import Contact from './components/Contact.tsx';

export default function App() {
  return (
    <div className="relative">
      <Navbar />
      <main>
        <Hero />
        <Experience />
        <Skills />
        <Portfolio />
        <Certificates />
        <Contact />
      </main>
    </div>
  );
}
