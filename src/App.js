import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './styles.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
            offset: 100,
            easing: 'ease-in-out',
        });

        const canvas = document.getElementById('matrix');
        const context = canvas.getContext('2d');

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const fontSize = 16;
        const columns = Math.floor(canvas.width / fontSize);
        const drops = Array(columns).fill(1);

        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%+-/~{[|`]}';
        const charArray = characters.split('');

        function drawMatrix() {
            context.fillStyle = 'rgba(0, 0, 0, 0.05)';
            context.fillRect(0, 0, canvas.width, canvas.height);

            context.fillStyle = '#0f0';
            context.font = `${fontSize}px monospace`;

            drops.forEach((y, index) => {
                const text = charArray[Math.floor(Math.random() * charArray.length)];
                const x = index * fontSize;

                context.fillText(text, x, y * fontSize);

                if (y * fontSize > canvas.height && Math.random() > 0.975) {
                    drops[index] = 0;
                }
                drops[index]++;
            });
        }

        setInterval(drawMatrix, 50);

        window.addEventListener('resize', () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        });
    }, []);

    return (
        <>
            <canvas id="matrix"></canvas>
            <Header />
            <Navbar />
            <Contact />
            <Footer />
        </>
    );
};

export default App;
