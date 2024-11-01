import './index.scss';
import { useEffect, useRef, useState } from 'react';

export default function AnimatedSection({ children }) {
    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {
        if (ref.current) {
            const { top, bottom } = ref.current.getBoundingClientRect();
            const isInViewport = bottom >= 0 && top <= window.innerHeight;

            // Aplica a animação apenas se a seção entrar na viewport ao rolar para baixo
            if (isInViewport && !isVisible) {
                setIsVisible(true);
            }
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        // Chama a função de scroll inicialmente para verificar a posição da seção
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [isVisible]); // Adiciona isVisible como dependência para evitar múltiplas atualizações

    return (
        <div
            ref={ref}
            className={`animated-section ${isVisible ? 'fadeIn' : ''}`}
        >
            {children}
        </div>
    );
}
