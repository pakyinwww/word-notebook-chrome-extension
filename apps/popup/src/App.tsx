import { Routes, Route, Navigate } from 'react-router-dom';
import { ApplicationShell } from './components/AppShell/AppShell';
import { Vocabulary } from './pages/Vocabulary';
import { Settings } from './pages/Settings';
import { useEffect } from 'react';
import { getConfig } from '@repo/config';
import { useTranslation } from 'react-i18next';

function App() {
    const { t, i18n } = useTranslation();

    useEffect(() => {
        getConfig().then((config) => {
            if (config.language && config.language !== i18n.language) {
                i18n.changeLanguage(config.language);
            }
        })
    }, [])

    return (
        <ApplicationShell>
            {/* @ts-ignore */}
            <Routes>
                {/* @ts-ignore */}
                <Route path="/" element={<Navigate to="/vocabulary" replace />} />
                {/* @ts-ignore */}
                <Route path="/vocabulary" element={<Vocabulary />} />
                {/* @ts-ignore */}
                <Route path="/settings" element={<Settings />} />
            </Routes>
        </ApplicationShell>
    );
}

export default App;
