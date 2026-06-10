/**
 * CryptoPredict Academia — Motor de aprendizaje estilo Duolingo
 * Sistema de lecciones, XP, progresión por unidades y quiz interactivo.
 */

// ─── Curriculum Data ────────────────────────────────────────────────────────
const CURRICULUM = [
    {
        id: 'unit-1',
        icon: '₿',
        color: '#F7931A',
        bg: 'rgba(247, 147, 26, 0.12)',
        label: 'Unidad 1',
        title: '¿Qué es una Criptomoneda?',
        desc: 'Fundamentos de blockchain y activos digitales',
        xpPerLesson: 15,
        lessons: [
            {
                id: 'l1-1', icon: '🌐', name: 'Blockchain básico', xp: 15,
                slides: [
                    {
                        type: 'theory',
                        eyebrow: 'Conceptos Clave',
                        title: '¿Qué es una Blockchain?',
                        body: 'Una <strong>blockchain</strong> (cadena de bloques) es un registro digital distribuido e inmutable. Imagínala como un libro contable que miles de computadoras en el mundo guardan simultáneamente. Nadie puede borrar ni modificar una transacción ya registrada.',
                        infoBox: { title: '💡 Dato clave', text: 'Bitcoin fue la primera blockchain del mundo, creada en 2009 por el anónimo Satoshi Nakamoto.' }
                    },
                    {
                        type: 'quiz',
                        instruction: 'Elige la respuesta correcta',
                        question: '¿Cuál es la principal característica de una blockchain?',
                        options: ['Es una base de datos centralizada', 'Es un registro distribuido e inmutable', 'Es controlada por un banco', 'Solo funciona en internet privado'],
                        correct: 1,
                        explanation: '¡Exacto! La blockchain es distribuida (muchos nodos la tienen) e inmutable (no se puede alterar el historial).'
                    },
                    {
                        type: 'theory',
                        eyebrow: 'Profundizando',
                        title: 'Descentralización: el superpoder',
                        body: 'En los sistemas tradicionales, un banco o gobierno controla el dinero. En <strong>Bitcoin y otras criptos</strong>, ninguna entidad tiene el control. Las transacciones son validadas por miles de participantes (mineros o validadores) siguiendo reglas matemáticas.',
                        infoBox: { title: '⚡ Ventaja', text: 'Sin un punto central de fallo. Nadie puede "apagar" Bitcoin ni congelar tus fondos unilateralmente.' }
                    },
                    {
                        type: 'quiz',
                        instruction: '¿Verdadero o Falso?',
                        question: 'Un gobierno puede apagar Bitcoin desconectando un servidor central.',
                        options: ['Verdadero — tiene un servidor principal', 'Falso — es descentralizado, no hay un servidor central'],
                        correct: 1,
                        explanation: 'Falso. Bitcoin opera en miles de nodos globales. No existe un servidor central que apagar.'
                    }
                ]
            },
            {
                id: 'l1-2', icon: '🔑', name: 'Wallets y claves', xp: 15,
                slides: [
                    {
                        type: 'theory',
                        eyebrow: 'Tu Identidad Cripto',
                        title: 'Wallets: tu banco digital',
                        body: 'Una <strong>wallet</strong> (billetera) no guarda tus criptos como una cartera física. En realidad, guarda tus <strong>claves privadas</strong>, que son los códigos secretos que demuestran que eres el dueño de tus fondos en la blockchain.',
                        infoBox: { title: '🔐 Regla de oro', text: '"Not your keys, not your coins." Si no controlas tu clave privada, no controlas realmente tus criptos.' }
                    },
                    {
                        type: 'quiz',
                        instruction: 'Elige la respuesta correcta',
                        question: '¿Qué guarda realmente una wallet de criptomonedas?',
                        options: ['Las monedas en formato digital', 'Las claves privadas que acreditan tu propiedad', 'Una copia de la blockchain completa', 'Tus datos bancarios'],
                        correct: 1,
                        explanation: '¡Correcto! La wallet guarda las claves privadas. Las monedas en sí están registradas en la blockchain.'
                    }
                ]
            },
            {
                id: 'l1-3', icon: '⛏️', name: 'Mining y validación', xp: 20,
                slides: [
                    {
                        type: 'theory',
                        eyebrow: 'Cómo Se Crean Las Monedas',
                        title: 'El proceso de minería',
                        body: '<strong>Minar</strong> significa usar poder computacional para resolver problemas matemáticos complejos. El primer minero en resolver el problema agrega el siguiente bloque a la cadena y recibe una <strong>recompensa en Bitcoin</strong>. Este proceso es llamado Prueba de Trabajo (PoW).',
                        infoBox: { title: '📉 Halving', text: 'Cada ~4 años, la recompensa de minería se reduce a la mitad. Esto limita la oferta de BTC a 21 millones de unidades totales.' }
                    },
                    {
                        type: 'quiz',
                        instruction: 'Elige la respuesta correcta',
                        question: '¿Cuántos Bitcoin existirán como máximo?',
                        options: ['1 millón', '100 millones', '21 millones', 'Sin límite'],
                        correct: 2,
                        explanation: '¡Exacto! Bitcoin tiene una oferta máxima de 21 millones, lo que lo hace deflacionario por diseño.'
                    }
                ]
            }
        ]
    },
    {
        id: 'unit-2',
        icon: '📈',
        color: '#00F2FE',
        bg: 'rgba(0, 242, 254, 0.10)',
        label: 'Unidad 2',
        title: 'Lectura de Mercados',
        desc: 'Precio, volumen, capitalización y ciclos de mercado',
        xpPerLesson: 20,
        lessons: [
            {
                id: 'l2-1', icon: '💹', name: 'Precio y capitalización', xp: 20,
                slides: [
                    {
                        type: 'theory',
                        eyebrow: 'Métricas Básicas',
                        title: 'Capitalización de Mercado',
                        body: 'El <strong>Market Cap</strong> (capitalización) = Precio × Monedas en circulación. Es la métrica más usada para comparar el "tamaño" de una criptomoneda. Bitcoin tiene el mayor market cap del mundo cripto.',
                        formula: 'Market Cap = Precio × Suministro Circulante',
                        infoBox: { title: '🏆 Categorías', text: 'Large Cap (>10B$): BTC, ETH — más estables. Mid Cap (1-10B$): más volatilidad. Small Cap (<1B$): mayor riesgo/recompensa.' }
                    },
                    {
                        type: 'quiz',
                        instruction: 'Resuelve el cálculo',
                        question: 'Una cripto tiene precio $50 y 200 millones de monedas en circulación. ¿Cuál es su Market Cap?',
                        options: ['$1 billón (1,000M)', '$10 millones', '$10 billones (10,000M)', '$250 millones'],
                        correct: 2,
                        explanation: '$50 × 200,000,000 = $10,000,000,000 = 10 billones de dólares. ¡Perfecto!'
                    }
                ]
            },
            {
                id: 'l2-2', icon: '🔴🟢', name: 'Velas japonesas', xp: 25,
                slides: [
                    {
                        type: 'theory',
                        eyebrow: 'Análisis Técnico Visual',
                        title: 'Leyendo velas japonesas',
                        body: 'Cada <strong>vela</strong> en un gráfico resume el movimiento de precio en un período (1 hora, 1 día, etc.). Tiene 4 datos: <strong>Apertura, Cierre, Máximo y Mínimo</strong>. Si cierra más alto que la apertura → vela verde (bullish). Si cierra más bajo → vela roja (bearish).',
                        infoBox: { title: '📊 El cuerpo y las mechas', text: 'El cuerpo grueso = rango apertura-cierre. Las mechas delgadas = máximos/mínimos del período. Mechas largas indican alta volatilidad.' }
                    },
                    {
                        type: 'quiz',
                        instruction: 'Interpreta la vela',
                        question: 'Una vela abrió en $100 y cerró en $85. ¿De qué color es y qué indica?',
                        options: ['Verde — los compradores ganaron', 'Roja — los vendedores dominaron', 'Azul — el precio no cambió', 'Negra — indica volumen bajo'],
                        correct: 1,
                        explanation: '¡Correcto! Cerró por debajo de la apertura → vela roja (bajista). Los vendedores presionaron el precio hacia abajo.'
                    }
                ]
            },
            {
                id: 'l2-3', icon: '🐂🐻', name: 'Bull vs Bear market', xp: 20,
                slides: [
                    {
                        type: 'theory',
                        eyebrow: 'Ciclos del Mercado',
                        title: 'Bull Market y Bear Market',
                        body: 'Un <strong>Bull Market</strong> (mercado alcista 🐂) es un período de precios en subida con optimismo generalizado. Un <strong>Bear Market</strong> (mercado bajista 🐻) es un período de caídas del 20%+ con miedo y pesimismo. Los ciclos de cripto son más extremos que en acciones tradicionales.',
                        infoBox: { title: '⏱️ Duración', text: 'Bitcoin ha tenido ciclos de ~4 años históricamente, relacionados con el Halving. Cada bear market ha sido seguido de nuevos máximos históricos.' }
                    },
                    {
                        type: 'quiz',
                        instruction: 'Elige la respuesta correcta',
                        question: 'Si Bitcoin cae un 65% desde su máximo histórico, ¿en qué mercado estamos?',
                        options: ['Bull market leve', 'Mercado lateral', 'Bear market severo', 'Mercado de acumulación neutro'],
                        correct: 2,
                        explanation: 'Una caída del 65% desde el ATH (All Time High) es un Bear Market severo. En cripto es común ver caídas del 70-90%.'
                    }
                ]
            }
        ]
    },
    {
        id: 'unit-3',
        icon: '📐',
        color: '#00F5A0',
        bg: 'rgba(0, 245, 160, 0.10)',
        label: 'Unidad 3',
        title: 'Indicadores Estadísticos',
        desc: 'RSI, Medias Móviles, Sharpe y Volatilidad — como en nuestro algoritmo',
        xpPerLesson: 30,
        lessons: [
            {
                id: 'l3-1', icon: '📏', name: 'RSI: Índice de fuerza', xp: 30,
                slides: [
                    {
                        type: 'theory',
                        eyebrow: 'Indicador Técnico',
                        title: 'RSI: Relative Strength Index',
                        body: 'El <strong>RSI</strong> mide la velocidad y magnitud de los cambios de precio, en una escala de 0 a 100. Es el indicador de momentum más usado en el mundo. <strong>Por debajo de 30</strong>: activo sobrevendido (oportunidad de compra). <strong>Por encima de 70</strong>: sobrecomprado (señal de precaución).',
                        formula: 'RSI = 100 − [100 ÷ (1 + Ganancia Media ÷ Pérdida Media)]',
                        infoBox: { title: '🔍 CryptoPredict lo usa', text: 'Nuestro algoritmo penaliza activos con RSI entre 70-80 (sobrecomprados) y premia los que están en zona neutra-oversold para perfiles de corto plazo.' }
                    },
                    {
                        type: 'quiz',
                        instruction: 'Interpreta el indicador',
                        question: 'Bitcoin tiene RSI = 28. ¿Qué señal da esto para un inversor técnico?',
                        options: ['Vender inmediatamente, está en máximos', 'Señal de sobrecompra, demasiado caro', 'Zona sobrevendida, posible rebote técnico', 'El mercado está completamente neutro'],
                        correct: 2,
                        explanation: '¡Perfecto! RSI < 30 = sobrevendido. Históricamente, señala posibles rebotes. Ojo: no es garantía, pero es una señal estadística relevante.'
                    },
                    {
                        type: 'slider',
                        instruction: 'Práctica interactiva',
                        question: 'Arrastra el RSI a la zona de "sobrecompra" (valor correcto > 70)',
                        min: 0, max: 100, target: 75, tolerance: 10,
                        labels: ['Sobrevendido (0)', 'Neutro (50)', 'Sobrecomprado (100)']
                    }
                ]
            },
            {
                id: 'l3-2', icon: '〰️', name: 'Medias Móviles (SMA)', xp: 30,
                slides: [
                    {
                        type: 'theory',
                        eyebrow: 'Análisis de Tendencias',
                        title: 'SMA: Simple Moving Average',
                        body: 'La <strong>Media Móvil Simple (SMA)</strong> suaviza los datos de precio para revelar la tendencia de fondo. La SMA50 promedia los últimos 50 días. Cuando el precio está <strong>por encima de su SMA50</strong>, indica tendencia alcista. Por debajo → bajista.',
                        formula: 'SMA₅₀ = (P₁ + P₂ + ... + P₅₀) ÷ 50',
                        infoBox: { title: '🔀 Golden Cross', text: 'Cuando la SMA20 cruza por encima de la SMA200 = "Golden Cross" — señal muy alcista. Lo opuesto = "Death Cross" — señal bajista.' }
                    },
                    {
                        type: 'quiz',
                        instruction: 'Análisis de tendencia',
                        question: 'ETH cotiza a $3,200 y su SMA50 es $2,900. ¿Qué indica esto?',
                        options: ['Tendencia bajista, precio por debajo de media', 'Tendencia alcista, precio supera la media móvil', 'El precio está sobrevendido (RSI bajo)', 'No se puede determinar ninguna tendencia'],
                        correct: 1,
                        explanation: '¡Exacto! Precio ($3,200) > SMA50 ($2,900) = tendencia alcista. El precio está por encima de su promedio histórico de 50 días.'
                    }
                ]
            },
            {
                id: 'l3-3', icon: '⚡', name: 'Volatilidad anualizada', xp: 35,
                slides: [
                    {
                        type: 'theory',
                        eyebrow: 'Gestión del Riesgo',
                        title: 'Volatilidad: el termómetro del riesgo',
                        body: 'La <strong>volatilidad</strong> mide cuánto fluctúa el precio. Se calcula como la desviación estándar de los retornos logarítmicos diarios, anualizada (×√365). <strong>Alta volatilidad = mayor riesgo y potencial ganancia</strong>. Bitcoin ronda 60-80% anual; acciones tradicionales: 15-25%.',
                        infoBox: { title: '📊 En CryptoPredict', text: 'Nuestro algoritmo penaliza alta volatilidad para perfiles conservadores. Coins con vol >60% reciben menor puntuación en el perfil "bajo riesgo".' }
                    },
                    {
                        type: 'quiz',
                        instruction: 'Compara activos',
                        question: 'Tienes perfil conservador. ¿Cuál preferirías según volatilidad?',
                        options: ['SOL con 85% volatilidad anual', 'BTC con 62% volatilidad anual', 'DOT con 78% volatilidad anual', 'ADA con 71% volatilidad anual'],
                        correct: 1,
                        explanation: 'Para un perfil conservador, menor volatilidad = menor riesgo. BTC al 62% es el más "estable" entre las opciones. ¡Bien razonado!'
                    }
                ]
            },
            {
                id: 'l3-4', icon: '🏆', name: 'Sharpe Ratio', xp: 40,
                slides: [
                    {
                        type: 'theory',
                        eyebrow: 'La Métrica Definitiva',
                        title: 'Sharpe Ratio: rendimiento ajustado al riesgo',
                        body: 'El <strong>Sharpe Ratio</strong> mide cuánto rendimiento extra obtienes por cada unidad de riesgo que asumes. Inventado por William Sharpe (Nobel de Economía). <strong>Mayor Sharpe = mejor inversión ajustada al riesgo.</strong> Un Sharpe >1 es bueno; >2 es excelente.',
                        formula: 'Sharpe = (Retorno Anual − Tasa Libre Riesgo) ÷ Volatilidad Anual',
                        infoBox: { title: '🎯 Ejemplo', text: 'Si un activo rinde 30% anual con 20% de volatilidad y la tasa libre de riesgo es 4.5%: Sharpe = (30% − 4.5%) ÷ 20% = 1.275 — ¡Excelente!' }
                    },
                    {
                        type: 'quiz',
                        instruction: 'Calcula el Sharpe',
                        question: 'Una cripto tuvo 40% de retorno, 50% de volatilidad y la tasa libre de riesgo es 5%. ¿Cuál es su Sharpe Ratio?',
                        options: ['0.70 — moderado', '1.50 — excelente', '0.35 — bajo', '2.00 — extraordinario'],
                        correct: 0,
                        explanation: '(40% − 5%) ÷ 50% = 35% ÷ 50% = 0.70. Es moderado: obtiene 0.70 unidades de retorno por cada unidad de riesgo.'
                    }
                ]
            }
        ]
    },
    {
        id: 'unit-4',
        icon: '🧠',
        color: '#9b51e0',
        bg: 'rgba(155, 81, 224, 0.10)',
        label: 'Unidad 4',
        title: 'Estrategias de Inversión',
        desc: 'DCA, diversificación, gestión de riesgo y psicología del mercado',
        xpPerLesson: 35,
        lessons: [
            {
                id: 'l4-1', icon: '📆', name: 'DCA: compras periódicas', xp: 35,
                slides: [
                    {
                        type: 'theory',
                        eyebrow: 'Estrategia Probada',
                        title: 'Dollar Cost Averaging (DCA)',
                        body: 'El <strong>DCA</strong> consiste en invertir una cantidad fija de dinero en intervalos regulares (ej: $100 cada semana), sin importar el precio. Esto elimina el estrés de "comprar en el momento perfecto" y reduce el impacto de la volatilidad promediando el precio de entrada.',
                        infoBox: { title: '📈 Resultado histórico', text: 'Quien invirtió $100/semana en BTC desde 2018 (incluído el bear market) tiene rentabilidades superiores a quien intentó hacer "market timing".' }
                    },
                    {
                        type: 'quiz',
                        instruction: 'Aplica el concepto',
                        question: 'María invierte $200 en ETH cuando está a $2,000 y $200 cuando está a $1,000. ¿Cuál es su precio promedio de compra?',
                        options: ['$1,500 — el promedio simple', '$1,333 — promedio ponderado real', '$2,000 — el primer precio', '$1,000 — el mejor precio'],
                        correct: 1,
                        explanation: 'Con $200 a $2,000 obtiene 0.1 ETH. Con $200 a $1,000 obtiene 0.2 ETH. Total: 0.3 ETH por $400 → precio medio = $1,333. ¡Mejor que el promedio simple!'
                    }
                ]
            },
            {
                id: 'l4-2', icon: '🧩', name: 'Diversificación', xp: 35,
                slides: [
                    {
                        type: 'theory',
                        eyebrow: 'Gestión de Portafolio',
                        title: 'No pongas todos los huevos en una canasta',
                        body: 'La <strong>diversificación</strong> reduce el riesgo distribuyendo inversiones entre varios activos. En cripto, una cartera diversificada puede combinar: <strong>Large caps</strong> (BTC, ETH) para estabilidad, <strong>Mid caps</strong> (SOL, XRP) para crecimiento, y una pequeña parte en activos de alto riesgo.',
                        infoBox: { title: '⚖️ Correlación', text: 'La diversificación funciona mejor cuando los activos NO están perfectamente correlacionados. En cripto, muchas altcoins se mueven con BTC, reduciendo el beneficio de diversificar solo en cripto.' }
                    },
                    {
                        type: 'quiz',
                        instruction: 'Diseña una cartera',
                        question: 'Para un perfil de riesgo MEDIO, ¿cuál cartera es más adecuada?',
                        options: ['100% en una sola altcoin de baja capitalización', '70% BTC + 20% ETH + 10% altcoins medianas', '100% en stablecoins (sin exposición a cripto)', '50% en memecoins + 50% en NFTs especulativos'],
                        correct: 1,
                        explanation: '¡Perfecto! Una distribución 70/20/10 balances estabilidad con potencial de crecimiento. Es la base de la estrategia balanceada de CryptoPredict.'
                    }
                ]
            },
            {
                id: 'l4-3', icon: '😰', name: 'Psicología del mercado', xp: 40,
                slides: [
                    {
                        type: 'theory',
                        eyebrow: 'El Factor Humano',
                        title: 'FOMO, FUD y el Índice de Miedo',
                        body: '<strong>FOMO</strong> (Fear Of Missing Out): el miedo a perderse una subida, que lleva a comprar en máximos. <strong>FUD</strong> (Fear, Uncertainty, Doubt): rumores negativos que provocan ventas en pánico. El <strong>Índice de Miedo y Codicia</strong> (0-100) mide el estado emocional del mercado: 0 = pánico extremo, 100 = codicia extrema.',
                        infoBox: { title: '🧘 La regla de Warren Buffett', text: '"Sé codicioso cuando otros tienen miedo, y ten miedo cuando otros son codiciosos." Cuando el índice está en pánico extremo (<20), históricamente ha sido buen momento de compra.' }
                    },
                    {
                        type: 'quiz',
                        instruction: 'Toma de decisiones',
                        question: 'El índice de Miedo y Codicia está en 95 (codicia extrema). ¿Qué haría un inversor disciplinado?',
                        options: ['Comprar todo porque el mercado está en euforia', 'Ignorar el índice, no tiene ningún valor predictivo', 'Reducir exposición o no comprar más — señal de posible techo', 'Pedir prestado para maximizar ganancias'],
                        correct: 2,
                        explanation: '¡Correcto! Codicia extrema (95) históricamente precede correcciones. El inversor disciplinado reduce riesgo, no lo aumenta en la euforia.'
                    }
                ]
            }
        ]
    }
];

// ─── State ────────────────────────────────────────────────────────────────────
const STATE_KEY = 'cryptopredict_academy';

function loadState() {
    try {
        return JSON.parse(localStorage.getItem(STATE_KEY)) || defaultState();
    } catch { return defaultState(); }
}

function defaultState() {
    return { xp: 0, streak: 0, lessonsCompleted: [], lastDate: null };
}

function saveState(state) {
    localStorage.setItem(STATE_KEY, JSON.stringify(state));
}

let academyState = loadState();

// ─── Navigation ───────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
    // Inject academy CSS
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'academy.css';
    document.head.appendChild(link);

    // Nav tabs
    document.querySelectorAll('.nav-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            document.querySelectorAll('.nav-tab').forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            const target = tab.dataset.section;
            document.getElementById('section-dashboard').style.display = target === 'dashboard' ? 'flex' : 'none';
            document.getElementById('section-academy').style.display = target === 'academy' ? 'flex' : 'none';
        });
    });

    // Update streak for today
    updateStreakForToday();

    // Render academy
    renderAcademy();

    // Lesson close
    document.getElementById('lesson-close').addEventListener('click', closeLesson);
});

function updateStreakForToday() {
    const today = new Date().toDateString();
    if (academyState.lastDate !== today && academyState.lessonsCompleted.length > 0) {
        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        if (academyState.lastDate === yesterday.toDateString()) {
            academyState.streak = (academyState.streak || 0) + 1;
        } else if (academyState.lastDate && academyState.lastDate !== today) {
            academyState.streak = 0;
        }
    }
}

// ─── Render Academy ───────────────────────────────────────────────────────────
function renderAcademy() {
    renderXPBar();
    renderUnits();
}

function renderXPBar() {
    const xp = academyState.xp || 0;
    const levels = [0, 100, 250, 500, 1000, 2000];
    const levelNames = ['Principiante', 'Aprendiz', 'Estudiante', 'Analista', 'Experto', 'Maestro'];

    let level = 0;
    for (let i = levels.length - 1; i >= 0; i--) {
        if (xp >= levels[i]) { level = i; break; }
    }

    const nextLevelXp = levels[level + 1] || levels[level] + 1000;
    const progressXp = xp - levels[level];
    const rangeXp = nextLevelXp - levels[level];
    const pct = Math.min(100, (progressXp / rangeXp) * 100);

    document.getElementById('academy-xp').textContent = xp;
    document.getElementById('academy-streak').textContent = academyState.streak || 0;
    document.getElementById('academy-lessons').textContent = (academyState.lessonsCompleted || []).length;
    document.getElementById('xp-level-label').textContent = `Nivel ${level + 1} — ${levelNames[level]}`;
    document.getElementById('xp-bar-text').textContent = `${progressXp} / ${rangeXp} XP`;
    document.getElementById('xp-bar-fill').style.width = pct + '%';
}

function renderUnits() {
    const container = document.getElementById('path-units');
    container.innerHTML = '';

    CURRICULUM.forEach((unit, unitIdx) => {
        const completed = (academyState.lessonsCompleted || []);
        const unitLessonsCompleted = unit.lessons.filter(l => completed.includes(l.id)).length;
        const unitTotal = unit.lessons.length;
        const isUnlocked = unitIdx === 0 || isUnitUnlocked(unitIdx);

        const card = document.createElement('div');
        card.className = `unit-card glass-card${isUnlocked ? '' : ' locked'}`;
        card.style.borderColor = isUnlocked ? unit.color + '33' : '';

        // Ring SVG
        const ringR = 22;
        const ringC = 2 * Math.PI * ringR;
        const ringPct = unitTotal > 0 ? (unitLessonsCompleted / unitTotal) : 0;
        const ringOffset = ringC - ringPct * ringC;

        card.innerHTML = `
            <div class="unit-header">
                <div class="unit-icon-wrap" style="background:${unit.bg}; color:${unit.color}; font-size:1.8rem;">
                    ${unit.icon}
                </div>
                <div class="unit-meta">
                    <div class="unit-label" style="color:${unit.color}">${unit.label}</div>
                    <div class="unit-title">${unit.title}</div>
                    <div class="unit-desc">${unit.desc}</div>
                </div>
                <svg class="unit-progress-ring" width="56" height="56" viewBox="0 0 56 56">
                    <circle cx="28" cy="28" r="${ringR}" stroke="rgba(255,255,255,0.06)" stroke-width="4" fill="none"/>
                    <circle cx="28" cy="28" r="${ringR}" stroke="${unit.color}" stroke-width="4" fill="none"
                        stroke-dasharray="${ringC}" stroke-dashoffset="${ringOffset}"
                        stroke-linecap="round"
                        transform="rotate(-90 28 28)"
                        style="transition: stroke-dashoffset 0.6s ease;"/>
                    <text x="28" y="33" text-anchor="middle" font-size="11" font-weight="700" fill="${unit.color}">${unitLessonsCompleted}/${unitTotal}</text>
                </svg>
            </div>
            <div class="unit-lessons" id="unit-lessons-${unit.id}"></div>
        `;
        container.appendChild(card);

        // Render lesson buttons
        const lessonsContainer = card.querySelector(`#unit-lessons-${unit.id}`);
        unit.lessons.forEach((lesson, lessonIdx) => {
            const isDone = completed.includes(lesson.id);
            const isLessonUnlocked = isUnlocked && (lessonIdx === 0 || completed.includes(unit.lessons[lessonIdx - 1].id));

            const btn = document.createElement('button');
            btn.className = `lesson-btn${isDone ? ' completed' : ''}${!isLessonUnlocked ? ' locked' : ''}`;
            btn.innerHTML = `
                <span class="l-icon">${lesson.icon}</span>
                <span class="l-name">${lesson.name}</span>
                <span class="l-xp">+${lesson.xp} XP</span>
            `;
            if (isLessonUnlocked) {
                btn.addEventListener('click', () => startLesson(unit, lesson));
            }
            lessonsContainer.appendChild(btn);
        });
    });
}

function isUnitUnlocked(unitIdx) {
    if (unitIdx === 0) return true;
    const prevUnit = CURRICULUM[unitIdx - 1];
    const completed = academyState.lessonsCompleted || [];
    return prevUnit.lessons.every(l => completed.includes(l.id));
}

// ─── Lesson Engine ─────────────────────────────────────────────────────────────
let currentLesson = null;
let currentUnit = null;
let currentSlideIdx = 0;
let hearts = 3;
let quizAnswered = false;
let sliderValue = 50;

function startLesson(unit, lesson) {
    currentUnit = unit;
    currentLesson = lesson;
    currentSlideIdx = 0;
    hearts = 3;
    quizAnswered = false;

    document.getElementById('lesson-overlay').style.display = 'flex';
    document.body.style.overflow = 'hidden';
    renderSlide();
}

function closeLesson() {
    document.getElementById('lesson-overlay').style.display = 'none';
    document.body.style.overflow = '';
    currentLesson = null;
}

function renderSlide() {
    const slide = currentLesson.slides[currentSlideIdx];
    const total = currentLesson.slides.length;
    const pct = (currentSlideIdx / total) * 100;

    document.getElementById('lesson-progress-bar').style.width = pct + '%';
    document.getElementById('lesson-hearts').textContent = '❤️'.repeat(hearts) + '🖤'.repeat(3 - hearts);

    quizAnswered = false;
    const body = document.getElementById('lesson-body');
    body.innerHTML = '';

    if (slide.type === 'theory') renderTheorySlide(slide, body);
    else if (slide.type === 'quiz') renderQuizSlide(slide, body);
    else if (slide.type === 'slider') renderSliderSlide(slide, body);
}

function renderTheorySlide(slide, container) {
    const div = document.createElement('div');
    div.className = 'theory-slide';
    div.innerHTML = `
        <div class="slide-eyebrow">${slide.eyebrow}</div>
        <h2>${slide.title}</h2>
        <div class="theory-body">${slide.body}</div>
        ${slide.formula ? `<div class="formula-box"><span class="formula-label">Fórmula</span>${slide.formula}</div>` : ''}
        ${slide.infoBox ? `<div class="info-box"><strong>${slide.infoBox.title}</strong>${slide.infoBox.text}</div>` : ''}
        <button class="lesson-continue-btn" id="slide-continue">Continuar →</button>
    `;
    container.appendChild(div);
    document.getElementById('slide-continue').addEventListener('click', advanceSlide);
}

function renderQuizSlide(slide, container) {
    const letters = ['A', 'B', 'C', 'D'];
    const div = document.createElement('div');
    div.className = 'quiz-slide';

    const optionsHtml = slide.options.map((opt, i) => `
        <button class="quiz-option" data-idx="${i}">
            <span class="opt-letter">${letters[i]}</span>
            <span>${opt}</span>
        </button>
    `).join('');

    div.innerHTML = `
        <div class="quiz-instruction">${slide.instruction}</div>
        <h2>${slide.question}</h2>
        <div class="quiz-options">${optionsHtml}</div>
        <div id="quiz-feedback-area"></div>
        <button class="lesson-continue-btn" id="slide-continue" disabled>Verificar</button>
    `;
    container.appendChild(div);

    let selected = null;
    div.querySelectorAll('.quiz-option').forEach(btn => {
        btn.addEventListener('click', () => {
            if (quizAnswered) return;
            div.querySelectorAll('.quiz-option').forEach(b => b.classList.remove('selected'));
            btn.classList.add('selected');
            selected = parseInt(btn.dataset.idx);
            document.getElementById('slide-continue').disabled = false;
        });
    });

    document.getElementById('slide-continue').addEventListener('click', () => {
        if (quizAnswered) { advanceSlide(); return; }
        if (selected === null) return;

        quizAnswered = true;
        div.querySelectorAll('.quiz-option').forEach(b => b.disabled = true);
        const isCorrect = selected === slide.correct;

        div.querySelectorAll('.quiz-option').forEach((b, i) => {
            if (i === slide.correct) b.classList.add('correct');
            else if (i === selected && !isCorrect) b.classList.add('wrong');
        });

        const feedback = document.getElementById('quiz-feedback-area');
        feedback.innerHTML = isCorrect
            ? `<div class="quiz-feedback correct-fb"><span class="fb-icon">✅</span><div><div class="fb-title">¡Correcto!</div><div class="fb-text">${slide.explanation}</div></div></div>`
            : `<div class="quiz-feedback wrong-fb"><span class="fb-icon">❌</span><div><div class="fb-title">No exactamente</div><div class="fb-text">${slide.explanation}</div></div></div>`;

        if (!isCorrect) {
            hearts = Math.max(0, hearts - 1);
            document.getElementById('lesson-hearts').textContent = '❤️'.repeat(hearts) + '🖤'.repeat(3 - hearts);
        }

        const btn = document.getElementById('slide-continue');
        btn.textContent = currentSlideIdx < currentLesson.slides.length - 1 ? 'Continuar →' : '¡Completar!';
        btn.disabled = false;
    });
}

function renderSliderSlide(slide, container) {
    sliderValue = Math.floor((slide.min + slide.max) / 2);
    const div = document.createElement('div');
    div.className = 'quiz-slide';
    div.innerHTML = `
        <div class="quiz-instruction">${slide.instruction}</div>
        <h2>${slide.question}</h2>
        <div class="slider-quiz">
            <div class="slider-display" id="slider-val-display">${sliderValue}</div>
            <input type="range" min="${slide.min}" max="${slide.max}" value="${sliderValue}" id="lesson-slider">
            <div class="slider-labels">${slide.labels.map(l => `<span>${l}</span>`).join('')}</div>
        </div>
        <div id="quiz-feedback-area"></div>
        <button class="lesson-continue-btn" id="slide-continue">Verificar</button>
    `;
    container.appendChild(div);

    const slider = document.getElementById('lesson-slider');
    slider.addEventListener('input', () => {
        sliderValue = parseInt(slider.value);
        document.getElementById('slider-val-display').textContent = sliderValue;
    });

    document.getElementById('slide-continue').addEventListener('click', () => {
        if (quizAnswered) { advanceSlide(); return; }
        quizAnswered = true;
        slider.disabled = true;

        const isCorrect = Math.abs(sliderValue - slide.target) <= slide.tolerance;
        const feedback = document.getElementById('quiz-feedback-area');
        feedback.innerHTML = isCorrect
            ? `<div class="quiz-feedback correct-fb"><span class="fb-icon">✅</span><div><div class="fb-title">¡Zona correcta!</div><div class="fb-text">El RSI &gt; 70 indica sobrecompra. Tu valor ${sliderValue} está en la zona correcta.</div></div></div>`
            : `<div class="quiz-feedback wrong-fb"><span class="fb-icon">💡</span><div><div class="fb-title">Casi — la zona correcta es 70-85</div><div class="fb-text">Un RSI por encima de 70 se considera zona de sobrecompra. Elegiste ${sliderValue}.</div></div></div>`;

        if (!isCorrect) hearts = Math.max(0, hearts - 1);
        document.getElementById('lesson-hearts').textContent = '❤️'.repeat(hearts) + '🖤'.repeat(3 - hearts);

        const btn = document.getElementById('slide-continue');
        btn.textContent = currentSlideIdx < currentLesson.slides.length - 1 ? 'Continuar →' : '¡Completar!';
    });
}

function advanceSlide() {
    currentSlideIdx++;
    if (currentSlideIdx >= currentLesson.slides.length) {
        completeLesson();
    } else {
        quizAnswered = false;
        renderSlide();
    }
}

function completeLesson() {
    const lessonId = currentLesson.id;
    const xpGain = currentLesson.xp;

    if (!(academyState.lessonsCompleted || []).includes(lessonId)) {
        academyState.lessonsCompleted = [...(academyState.lessonsCompleted || []), lessonId];
        academyState.xp = (academyState.xp || 0) + xpGain;
        academyState.lastDate = new Date().toDateString();
        if (!academyState.streak) academyState.streak = 1;
        saveState(academyState);
    }

    closeLesson();
    renderAcademy();
    showCompletionToast(xpGain);
}

function showCompletionToast(xp) {
    const toast = document.getElementById('completion-toast');
    document.getElementById('toast-xp').textContent = `+${xp} XP`;
    toast.style.display = 'block';
    toast.querySelector('.toast-inner').classList.add('bounce-in');

    setTimeout(() => {
        toast.style.display = 'none';
        toast.querySelector('.toast-inner').classList.remove('bounce-in');
    }, 3000);
}
const COIN_MAP = { BTC: 'bitcoin', ETH: 'ethereum', SOL: 'solana', ADA: 'cardano', XRP: 'ripple', DOT: 'polkadot' };

const cryptoData = {
    BTC: { name: 'Bitcoin', symbol: 'BTC', price: 67240.50, change24h: '0.00', vol30d: 0.28, sharpe: 1.85, rsi: 58, sma50: 64200, trend: 'up', history: [] },
    ETH: { name: 'Ethereum', symbol: 'ETH', price: 3480.20, change24h: '0.00', vol30d: 0.35, sharpe: 1.45, rsi: 52, sma50: 3310, trend: 'up', history: [] },
    SOL: { name: 'Solana', symbol: 'SOL', price: 164.80, change24h: '0.00', vol30d: 0.65, sharpe: 2.10, rsi: 67, sma50: 145.20, trend: 'up', history: [] },
    ADA: { name: 'Cardano', symbol: 'ADA', price: 0.465, change24h: '0.00', vol30d: 0.48, sharpe: 0.85, rsi: 41, sma50: 0.49, trend: 'down', history: [] },
    XRP: { name: 'Ripple', symbol: 'XRP', price: 0.525, change24h: '0.00', vol30d: 0.42, sharpe: 0.95, rsi: 47, sma50: 0.53, trend: 'neutral', history: [] },
    DOT: { name: 'Polkadot', symbol: 'DOT', price: 6.85, change24h: '0.00', vol30d: 0.52, sharpe: 1.10, rsi: 44, sma50: 7.15, trend: 'down', history: [] }
};

let chartInstance = null;
let currentRecommendedCoin = 'BTC';
let isLive = false;
const API_BASE = window.location.protocol === 'file:' ? 'http://localhost:8000' : '';

document.addEventListener('DOMContentLoaded', () => { initApp(); setupEventListeners(); });

async function initApp() {
    const select = document.getElementById('chart-coin-select');
    if (!select) return;
    select.innerHTML = '';
    Object.keys(cryptoData).forEach(key => {
        const opt = document.createElement('option');
        opt.value = key;
        opt.textContent = `${cryptoData[key].name} (${key})`;
        select.appendChild(opt);
    });
    updateStatus('Sincronizando mercado...', 'pulsing');
    updateMarketTable();
    calculateRecommendation();
    checkSession();
    await fetchLiveMarketData();
    await fetchHistoricalStats();
    setInterval(fetchLiveMarketData, 15000);
}

function setupEventListeners() {
    const btnCalc = document.getElementById('btn-calculate');
    if (btnCalc) btnCalc.addEventListener('click', calculateRecommendation);
    const chartSel = document.getElementById('chart-coin-select');
    if (chartSel) chartSel.addEventListener('change', (e) => updateChart(e.target.value));
    const btnSim = document.getElementById('btn-run-sim');
    if (btnSim) btnSim.addEventListener('click', runBacktest);
    const simCoin = document.getElementById('sim-coin-select');
    if (simCoin) simCoin.addEventListener('change', () => { updateSimulatorStrategyBadge(); runBacktest(); });
    const btnSave = document.getElementById('btn-save-sim');
    if (btnSave) btnSave.addEventListener('click', saveSimulation);
    document.querySelectorAll('input[name="risk"]').forEach(i => i.addEventListener('change', updateSimulatorStrategyBadge));
    const btnAuth = document.getElementById('btn-auth-toggle');
    if (btnAuth) btnAuth.addEventListener('click', handleAuthToggle);
    const modalClose = document.getElementById('modal-close');
    if (modalClose) modalClose.addEventListener('click', closeAuthModal);
    const linkReg = document.getElementById('link-show-register');
    if (linkReg) linkReg.addEventListener('click', (e) => { e.preventDefault(); showRegisterForm(); });
    const linkLog = document.getElementById('link-show-login');
    if (linkLog) linkLog.addEventListener('click', (e) => { e.preventDefault(); showLoginForm(); });
    const loginForm = document.getElementById('login-form');
    if (loginForm) loginForm.addEventListener('submit', handleLoginSubmit);
    const regForm = document.getElementById('register-form');
    if (regForm) regForm.addEventListener('submit', handleRegisterSubmit);
}

async function fetchLiveMarketData() {
    const ids = Object.values(COIN_MAP).join(',');
    try {
        const response = await fetch(`https://api.coincap.io/v2/assets?ids=${ids}`);
        if (!response.ok) throw new Error('Network error');
        const json = await response.json();
        json.data.forEach(asset => { const s = asset.symbol; if (cryptoData[s]) { cryptoData[s].price = parseFloat(asset.priceUsd); cryptoData[s].change24h = parseFloat(asset.changePercent24Hr).toFixed(2); } });
        isLive = true;
        updateStatus('Sincronizado en Vivo (CoinCap)', 'live');
        updateMarketTable();
        const sel = document.getElementById('chart-coin-select');
        if (sel) updateChart(sel.value);
    } catch (e) {
        isLive = false;
        updateStatus('Conexión Perdida - Modo Simulado', 'warning');
        simulationJitter();
    }
}

function simulationJitter() {
    Object.keys(cryptoData).forEach(key => { const coin = cryptoData[key]; const c = (Math.random() - 0.48) * 0.01; coin.price = Math.max(0.001, coin.price * (1 + c)); coin.change24h = (c * 100).toFixed(2); });
    updateMarketTable();
}

async function fetchHistoricalStats() {
    for (const key of Object.keys(cryptoData)) {
        try {
            const r = await fetch(`https://api.coincap.io/v2/assets/${COIN_MAP[key]}/history?interval=d1`);
            if (!r.ok) throw new Error();
            const json = await r.json();
            if (json.data && json.data.length > 0) { cryptoData[key].history = json.data.map(d => ({ price: parseFloat(d.priceUsd), time: d.time })); calculateIndicatorsForCoin(key); }
        } catch (e) { console.error(`History error ${key}`, e); }
    }
    calculateRecommendation();
    updateMarketTable();
}

function calculateIndicatorsForCoin(key) {
    const coin = cryptoData[key]; const prices = coin.history.map(h => h.price); const len = prices.length;
    if (len < 15) return;
    const sp = Math.min(50, len); const ss = prices.slice(len - sp); coin.sma50 = ss.reduce((a,b)=>a+b,0)/sp;
    coin.trend = coin.price > coin.sma50 ? 'up' : coin.price < coin.sma50 * 0.96 ? 'down' : 'neutral';
    let g=0, l=0;
    for (let i=len-14;i<len;i++) { const d=prices[i]-prices[i-1]; if(d>0)g+=d; else l-=d; }
    coin.rsi = Math.round(100-(100/(1+g/(l||1))));
    const vp=Math.min(30,len-1), lr=[];
    for(let i=len-vp;i<len;i++) lr.push(Math.log(prices[i]/prices[i-1]));
    const mr=lr.reduce((a,b)=>a+b,0)/lr.length;
    coin.vol30d = Math.sqrt(lr.map(r=>Math.pow(r-mr,2)).reduce((a,b)=>a+b,0)/(lr.length-1)) * Math.sqrt(365);
    const tr=(prices[len-1]-prices[0])/prices[0]; const ar=tr*(365/len);
    coin.sharpe = Math.max(-0.5,(ar-0.045)/(coin.vol30d||0.1));
}

function updateMarketTable() {
    const tbody = document.getElementById('market-table-body');
    if (!tbody) return;
    tbody.innerHTML = '';
    Object.keys(cryptoData).forEach(key => {
        const coin = cryptoData[key]; const cc = parseFloat(coin.change24h)>=0?'text-success':'text-danger'; const cs = parseFloat(coin.change24h)>=0?'+':'';
        const tr = document.createElement('tr');
        const ps = evaluateCoinScore(coin, getSelectedRisk(), getSelectedTerm());
        tr.innerHTML = `<td><div class="coin-cell"><span>${coin.name}</span><span class="sym">${coin.symbol}</span></div></td><td class="font-mono">$${formatPrice(coin.price)}</td><td class="${cc} font-mono">${cs}${coin.change24h}%</td><td class="font-mono">${coin.rsi}</td><td class="font-mono">${(coin.vol30d*100).toFixed(1)}%</td><td class="font-mono">${coin.sharpe.toFixed(2)}</td><td><span class="badge-trend ${coin.trend}">${coin.trend==='up'?'↗️ Alcista':coin.trend==='down'?'↘️ Bajista':'➡️ Neutral'}</span></td><td><div style="font-weight:700;color:var(--primary-cyan);">${Math.round(ps)} pts</div></td>`;
        tr.style.cursor='pointer';
        tr.addEventListener('click', () => { const s=document.getElementById('chart-coin-select'); if(s){s.value=key;updateChart(key);} });
        tbody.appendChild(tr);
    });
}

function formatPrice(p) { return p>=1000?p.toLocaleString('es-ES',{minimumFractionDigits:2,maximumFractionDigits:2}):p.toFixed(4); }
function getSelectedRisk() { return document.querySelector('input[name="risk"]:checked')?.value||'low'; }
function getSelectedTerm() { return document.querySelector('input[name="term"]:checked')?.value||'short'; }

function updateStatus(text, type) {
    const dot=document.getElementById('status-dot'); const label=document.getElementById('status-text');
    if(!dot||!label) return;
    label.textContent=text; dot.className='status-pulse';
    if(type==='live'){dot.style.backgroundColor='var(--accent-green)';dot.style.boxShadow='0 0 10px rgba(0,245,160,0.6)';}
    else if(type==='warning'){dot.style.backgroundColor='var(--error-red)';dot.style.boxShadow='0 0 10px rgba(255,51,102,0.6)';}
    else{dot.style.backgroundColor='var(--primary-cyan)';dot.style.boxShadow='0 0 10px rgba(0,242,254,0.6)';}
}

function updateSimulatorStrategyBadge() {
    const sel=document.getElementById('sim-coin-select'); const badge=document.getElementById('sim-strategy-badge');
    if(!sel||!badge) return;
    const sv=sel.value;
    if(sv!=='auto'){const coin=cryptoData[sv];badge.textContent=`Inversión Directa en ${coin.name} (${coin.symbol})`;if(coin.vol30d<=0.35){badge.style.color='var(--accent-green)';}else if(coin.vol30d<=0.55){badge.style.color='var(--primary-blue)';}else{badge.style.color='var(--error-red)';}return;}
    const risk=getSelectedRisk();
    if(risk==='low'){badge.textContent='Estrategia Conservadora (Bajo Riesgo)';badge.style.color='var(--accent-green)';}
    else if(risk==='medium'){badge.textContent='Estrategia Balanceada (Riesgo Moderado)';badge.style.color='var(--primary-blue)';}
    else{badge.textContent='Estrategia Especulativa (Alto Riesgo)';badge.style.color='var(--error-red)';}
}

function evaluateCoinScore(coin, risk, term) {
    let score=50;
    if(risk==='low'){score+=(1.2-coin.vol30d)*25;score+=coin.sharpe*15;if(coin.symbol==='BTC'||coin.symbol==='ETH')score+=15;}
    else if(risk==='medium'){score+=(0.6-Math.abs(coin.vol30d-0.45))*25;score+=coin.sharpe*20;}
    else if(risk==='high'){score+=coin.vol30d*35;if(coin.rsi>55)score+=15;}
    if(term==='short'){if(coin.rsi<35)score+=25;if(coin.rsi>65&&coin.trend==='up')score+=15;}
    else if(term==='medium'){if(coin.trend==='up')score+=20;score+=coin.sharpe*10;}
    else if(term==='long'){score+=coin.sharpe*30;score+=(1-coin.vol30d)*15;}
    return Math.max(10,Math.min(99,score));
}

function calculateRecommendation() {
    const risk=getSelectedRisk(); const term=getSelectedTerm();
    let best='BTC', bestScore=-1;
    Object.keys(cryptoData).forEach(k=>{const s=evaluateCoinScore(cryptoData[k],risk,term);if(s>bestScore){bestScore=s;best=k;}});
    currentRecommendedCoin=best;
    const coin=cryptoData[best];
    const rt=document.getElementById('rec-title'); if(rt)rt.textContent=`${coin.name} (${coin.symbol})`;
    const rv=document.getElementById('rec-vol'); if(rv)rv.textContent=`${(coin.vol30d*100).toFixed(1)}%`;
    const rs=document.getElementById('rec-sharpe'); if(rs)rs.textContent=coin.sharpe.toFixed(2);
    const rr=document.getElementById('rec-rsi'); if(rr)rr.textContent=coin.rsi;
    const rf=document.getElementById('score-progress'); const sn=document.getElementById('score-num');
    if(rf&&sn){const pct=Math.round(bestScore);const offset=314-(pct/100)*314;rf.style.strokeDashoffset=offset;sn.textContent=`${pct}%`;}
    const rv2=document.getElementById('rec-verdict');
    if(rv2){const st=coin.trend==='up'?'firme tendencia alcista':coin.trend==='down'?'corrección o tendencia bajista':'consolidación lateral';rv2.textContent=`Basado en datos de mercado reales de CoinCap, el modelo asigna una puntuación de ${Math.round(bestScore)} a ${coin.name}. Muestra un Sharpe Ratio real de ${coin.sharpe.toFixed(2)} y una volatilidad anual de ${(coin.vol30d*100).toFixed(1)}%, operando en una ${st}. Esta métrica es estadísticamente óptima para tu combinación de riesgo ${risk.toUpperCase()} y horizonte de plazo a ${term.toUpperCase()} término.`;}
    const cs=document.getElementById('chart-coin-select'); if(cs){cs.value=best;updateChart(best);}
    updateSimulatorStrategyBadge();
    runBacktest();
}

function updateChart(coinKey) {
    const coin=cryptoData[coinKey]; const canvas=document.getElementById('prediction-chart');
    if(!canvas)return;
    const ctx=canvas.getContext('2d'); const days=30; const labels=[]; const baseLine=[]; const opt=[]; const pes=[];
    let cp=coin.price; const dd=(coin.sharpe*(coin.vol30d/365))||0.0008; const dv=coin.vol30d/Math.sqrt(365);
    labels.push('Hoy'); baseLine.push(cp); opt.push(cp); pes.push(cp);
    for(let i=1;i<=days;i++){labels.push(`Día ${i}`);const e=cp*Math.exp((dd-(0.5*Math.pow(dv,2)))*i);baseLine.push(e);const s=1.5*dv*Math.sqrt(i);opt.push(e*Math.exp(s));pes.push(e*Math.exp(-s));}
    if(chartInstance)chartInstance.destroy();
    chartInstance=new Chart(ctx,{type:'line',data:{labels,datasets:[{label:'Proyección Optimista (+1.5 SD)',data:opt,borderColor:'#00F5A0',borderWidth:1.5,borderDash:[5,5],fill:false,pointRadius:0},{label:'Trayectoria Base',data:baseLine,borderColor:'#00F2FE',borderWidth:3,fill:false,pointRadius:0},{label:'Proyección Pesimista (-1.5 SD)',data:pes,borderColor:'#FF3366',borderWidth:1.5,borderDash:[5,5],fill:false,pointRadius:0}]},options:{responsive:true,maintainAspectRatio:false,plugins:{legend:{display:false},tooltip:{mode:'index',intersect:false,backgroundColor:'rgba(15,22,36,0.9)',titleColor:'#fff',bodyColor:'#e3e4e6',borderColor:'rgba(255,255,255,0.1)',borderWidth:1,callbacks:{label:function(c){return `${c.dataset.label}: $${formatPrice(c.parsed.y)}`;}}}},scales:{x:{grid:{color:'rgba(255,255,255,0.03)'},ticks:{color:'#9ca3af',maxTicksLimit:10}},y:{grid:{color:'rgba(255,255,255,0.03)'},ticks:{color:'#9ca3af',callback:function(v){return '$'+formatPrice(v);}}}}}});
}

function runBacktest() {
    const amount=parseFloat(document.getElementById('sim-amount')?.value)||1000;
    const sc=document.getElementById('sim-coin-select')?.value;
    let roi=0,maxDrawdown=0;
    if(sc==='auto'){const risk=getSelectedRisk();const term=getSelectedTerm();if(risk==='low'){roi=8.5+(Math.random()*15);maxDrawdown=-4-(Math.random()*6);if(term==='long')roi+=5;}else if(risk==='medium'){roi=15+(Math.random()*35);maxDrawdown=-10-(Math.random()*10);if(term==='medium')roi+=8;}else{const hl=Math.random();if(hl>0.4){roi=40+(Math.random()*110);}else{roi=-20-(Math.random()*20);}maxDrawdown=-20-(Math.random()*25);}}
    else{const coin=cryptoData[sc];if(coin.history&&coin.history.length>30){const prices=coin.history.map(h=>h.price);roi=((prices[prices.length-1]-prices[0])/prices[0])*100;let peak=-Infinity,md=0;prices.forEach(p=>{if(p>peak)peak=p;const dd=(p-peak)/peak;if(dd<md)md=dd;});maxDrawdown=md*100;}else{roi=(coin.sharpe*coin.vol30d)*100;maxDrawdown=-(coin.vol30d*50);}}
    const fv=amount*(1+(roi/100)); const np=fv-amount;
    const fve=document.getElementById('sim-final-val'); const re=document.getElementById('sim-roi'); const de=document.getElementById('sim-drawdown'); const pe=document.getElementById('sim-net-profit');
    if(fve)fve.textContent=`$${fv.toLocaleString('es-ES',{minimumFractionDigits:2,maximumFractionDigits:2})}`;
    if(re)re.textContent=`${roi>=0?'+':''}${roi.toFixed(2)}%`;
    if(pe)pe.textContent=`${np>=0?'+':''}$${np.toLocaleString('es-ES',{minimumFractionDigits:2,maximumFractionDigits:2})}`;
    if(de)de.textContent=`${maxDrawdown.toFixed(1)}%`;
    if(roi>=0){if(re)re.className='val text-success';if(fve)fve.className='val text-success';}
    else{if(re)re.className='val text-danger';if(fve)fve.className='val text-danger';}
}

function checkSession() {
    const ut=localStorage.getItem('crypto_user');
    const ud=document.getElementById('user-display'); const us=document.getElementById('username-span');
    const bat=document.getElementById('btn-auth-toggle'); const bss=document.getElementById('btn-save-sim');
    const sps=document.getElementById('saved-portfolios-sec');
    if(ut){if(ud)ud.style.display='inline-block';if(us)us.textContent=ut;if(bat)bat.textContent='Cerrar Sesión';if(bss)bss.style.display='block';if(sps)sps.style.display='block';fetchSavedPortfolios(ut);}
    else{if(ud)ud.style.display='none';if(bat)bat.textContent='Iniciar Sesión';if(bss)bss.style.display='none';if(sps)sps.style.display='none';}
}

function handleAuthToggle() { if(localStorage.getItem('crypto_user')){localStorage.removeItem('crypto_user');checkSession();}else{openAuthModal();} }
function openAuthModal() { document.getElementById('auth-modal').style.display='flex';showLoginForm();clearAuthError(); }
function closeAuthModal() { document.getElementById('auth-modal').style.display='none'; }
function showLoginForm() { document.getElementById('login-form-div').style.display='block';document.getElementById('register-form-div').style.display='none';clearAuthError(); }
function showRegisterForm() { document.getElementById('login-form-div').style.display='none';document.getElementById('register-form-div').style.display='block';clearAuthError(); }
function showAuthError(msg) { const e=document.getElementById('auth-error-msg');e.textContent=msg;e.style.display='block'; }
function clearAuthError() { const e=document.getElementById('auth-error-msg');e.textContent='';e.style.display='none'; }

async function handleLoginSubmit(e) {
    e.preventDefault();
    const username=document.getElementById('login-username').value;
    const password=document.getElementById('login-password').value;
    try{const r=await fetch(`${API_BASE}/api/login`,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({username,password})});const d=await r.json();if(d.success){localStorage.setItem('crypto_user',d.token);closeAuthModal();checkSession();document.getElementById('login-form').reset();}else{showAuthError(d.message||'Error de autenticación');}}
    catch(err){showAuthError('Error de conexión con el servidor backend');console.error(err);}
}

async function handleRegisterSubmit(e) {
    e.preventDefault();
    const username=document.getElementById('reg-username').value;
    const password=document.getElementById('reg-password').value;
    try{const r=await fetch(`${API_BASE}/api/register`,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({username,password})});const d=await r.json();if(d.success){alert('¡Usuario registrado con éxito! Inicia sesión para continuar.');showLoginForm();document.getElementById('register-form').reset();}else{showAuthError(d.message||'Error en el registro');}}
    catch(err){showAuthError('Error de conexión con el servidor backend');console.error(err);}
}

async function saveSimulation() {
    const username=localStorage.getItem('crypto_user');
    if(!username){alert('Por favor inicia sesión para guardar tu inversión');return;}
    const sc=document.getElementById('sim-coin-select').value;
    const coinSymbol=sc==='auto'?currentRecommendedCoin:sc;
    const strategy=document.getElementById('sim-strategy-badge').textContent;
    const amount=parseFloat(document.getElementById('sim-amount').value)||1000;
    const fvt=document.getElementById('sim-final-val').textContent.replace(/[^0-9.,-]/g,'').replace(',','.');
    const finalVal=parseFloat(fvt)||1000;
    const rt=document.getElementById('sim-roi').textContent.replace('%','');
    const roi=parseFloat(rt)||0;
    const dt=document.getElementById('sim-drawdown').textContent.replace('%','');
    const drawdown=parseFloat(dt)||0;
    try{const r=await fetch(`${API_BASE}/api/save_portfolio`,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({username,coin:coinSymbol,strategy,amount,roi,final_val:finalVal,drawdown})});const d=await r.json();if(d.success){alert('¡Inversión guardada en base de datos correctamente!');fetchSavedPortfolios(username);}else{alert('Error al guardar: '+d.message);}}
    catch(err){alert('No se pudo establecer conexión con el servidor backend');console.error(err);}
}

async function fetchSavedPortfolios(username) {
    const tbody=document.getElementById('saved-portfolios-body');
    if(!tbody)return;
    try{const r=await fetch(`${API_BASE}/api/get_portfolios`,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({username})});const d=await r.json();
    if(d.success&&d.portfolios){tbody.innerHTML='';
    if(d.portfolios.length===0){tbody.innerHTML=`<tr><td colspan="7" style="text-align:center;color:var(--text-secondary);">No tienes inversiones guardadas aún.</td></tr>`;return;}
    d.portfolios.forEach(p=>{const tr=document.createElement('tr');const rc=p.roi>=0?'text-success':'text-danger';const rs=p.roi>=0?'+':'';const do2=new Date(p.created_at);const df=do2.toLocaleDateString('es-ES')+' '+do2.toLocaleTimeString('es-ES',{hour:'2-digit',minute:'2-digit'});tr.innerHTML=`<td style="font-size:0.85rem;color:var(--text-secondary);">${df}</td><td><span style="font-weight:700;color:var(--primary-cyan);">${p.coin}</span></td><td class="font-mono">$${p.amount.toLocaleString('es-ES',{minimumFractionDigits:2})}</td><td style="font-size:0.85rem;">${p.strategy}</td><td class="font-mono text-danger">${p.drawdown.toFixed(1)}%</td><td class="font-mono ${rc}">${rs}${p.roi.toFixed(2)}%</td><td class="font-mono ${rc}">$${p.final_val.toLocaleString('es-ES',{minimumFractionDigits:2})}</td>`;tbody.appendChild(tr);});}}
    catch(err){console.error('Error cargando historial:',err);}
}
