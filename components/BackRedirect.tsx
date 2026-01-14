'use client';

import { useEffect } from 'react';

export default function BackRedirect() {
    // ALTERE O LINK PARA A PÁGINA QUE QUISER MOSTRAR QUANDO O USUÁRIO TENTAR SAIR
    const REDIRECT_URL = 'https://pay.kiwify.com.br/P2vOqMs'; // Coloquei o seu checkout como padrão

    useEffect(() => {
        if (typeof window === 'undefined') return;

        function setBackRedirect(url: string) {
            let urlBackRedirect = url;
            urlBackRedirect = urlBackRedirect.trim() +
                (urlBackRedirect.indexOf('?') > 0 ? '&' : '?') +
                document.location.search.replace('?', '').toString();

            history.pushState({}, '', location.href);
            history.pushState({}, '', location.href);
            history.pushState({}, '', location.href);

            const handlePopState = () => {
                console.log('onpopstate', urlBackRedirect);
                setTimeout(() => {
                    window.location.href = urlBackRedirect;
                }, 1);
            };

            window.addEventListener('popstate', handlePopState);

            return () => {
                window.removeEventListener('popstate', handlePopState);
            };
        }

        return setBackRedirect(REDIRECT_URL);
    }, []);

    return null;
}
