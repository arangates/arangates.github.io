import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { usePlausible } from 'next-plausible';

export const useAnalytics = () => {
  const router = useRouter();
  const plausible = usePlausible();

  useEffect(() => {
    function onRouteChangeComplete() {
      plausible('customEventName')
    }

    router.events.on('routeChangeComplete', onRouteChangeComplete);

    return () => {
      router.events.off('routeChangeComplete', onRouteChangeComplete);
    };
  }, [router.events]);
};
