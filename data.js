/* ============================================================
   CIBA · data.js
   Contenido maestro: 100 temas (25 CRIANZA, 25 INFORMÁTICA,
   25 BIENESTAR, 25 ACOMPAÑAMIENTO). Sin fusionar ni renumerar.
   ============================================================ */

const ETAPAS = [
  { id: "embarazo",     label: "Embarazo",           rango: "0" },
  { id: "nacimiento",   label: "Nacimiento",         rango: "0-1" },
  { id: "1-3",          label: "1 a 3 meses",        rango: "1-3" },
  { id: "4-6",          label: "4 a 6 meses",        rango: "4-6" },
  { id: "7-9",          label: "7 a 9 meses",        rango: "7-9" },
  { id: "10-12",        label: "10 a 12 meses",      rango: "10-12" },
  { id: "13-18",        label: "13 a 18 meses",      rango: "13-18" },
  { id: "19-24",        label: "19 a 24 meses",      rango: "19-24" }
];

const SECCIONES = [
  { id: "crianza",        nombre: "Crianza",            color: "#4A90A4", icono: "🧸" },
  { id: "informatica",    nombre: "Informática",        color: "#7FB685", icono: "💻" },
  { id: "bienestar",      nombre: "Bienestar",          color: "#E88A7D", icono: "💚" },
  { id: "acompanamiento", nombre: "Acompañamiento",     color: "#F2C57C", icono: "🤝" },
  { id: "biblioteca",     nombre: "Biblioteca CIBA",    color: "#8E7CC3", icono: "📚" },
  { id: "prescripcion",   nombre: "Prescripción Digital", color: "#5B8DC9", icono: "📱" },
  { id: "sobre",          nombre: "Sobre CIBA",         color: "#6B6B6B", icono: "ℹ️" }
];

/* ---------- 25 TEMAS · CRIANZA ---------- */
const TEMAS_CRIANZA = [
  { id:"CR-01", sec:"crianza", n:1, titulo:"Vínculo de apego en los primeros días", etapa:["nacimiento"], publicado:false, resumen:"Qué es el apego seguro y cómo se construye desde el nacimiento." },
  { id:"CR-02", sec:"crianza", n:2, titulo:"Contacto piel con piel inmediato", etapa:["nacimiento"], publicado:false, resumen:"Beneficios del piel con piel para el bebé y la madre." },
  { id:"CR-03", sec:"crianza", n:3, titulo:"Lactancia materna: primeros agarres", etapa:["nacimiento","1-3"], publicado:false, resumen:"Posturas, agarre correcto y señales de hambre." },
  { id:"CR-04", sec:"crianza", n:4, titulo:"Sueño seguro del recién nacido", etapa:["nacimiento","1-3","4-6"], publicado:false, resumen:"Cómo prevenir el sueño peligroso y crear rutinas." },
  { id:"CR-05", sec:"crianza", n:5, titulo:"Estimulación temprana respetuosa", etapa:["1-3","4-6"], publicado:false, resumen:"Actividades sencillas para el desarrollo sensorial." },
  { id:"CR-06", sec:"crianza", n:6, titulo:"El llanto del bebé y cómo calmarlo", etapa:["nacimiento","1-3"], publicado:false, resumen:"Tipos de llanto y técnicas de contención." },
  { id:"CR-07", sec:"crianza", n:7, titulo:"Introducción de la alimentación complementaria", etapa:["4-6"], publicado:false, resumen:"Cuándo y cómo iniciar los primeros sólidos." },
  { id:"CR-08", sec:"crianza", n:8, titulo:"Rutinas y ritmos del bebé", etapa:["1-3","4-6","7-9"], publicado:false, resumen:"Cómo establecer horarios flexibles y predecibles." },
  { id:"CR-09", sec:"crianza", n:9, titulo:"Gateo y exploración segura", etapa:["7-9","10-12"], publicado:false, resumen:"Preparar la casa para un bebé que se mueve." },
  { id:"CR-10", sec:"crianza", n:10, titulo:"Desarrollo del lenguaje: balbuceo a palabras", etapa:["7-9","10-12","13-18"], publicado:false, resumen:"Cómo acompañar la adquisición del lenguaje." },
  { id:"CR-11", sec:"crianza", n:11, titulo:"Juego libre y aprendizaje", etapa:["10-12","13-18","19-24"], publicado:false, resumen:"Por qué el juego es el trabajo del niño." },
  { id:"CR-12", sec:"crianza", n:12, titulo:"Caminar: primeros pasos y calzado", etapa:["10-12","13-18"], publicado:false, resumen:"Acompañar el desarrollo motor sin forzarlo." },
  { id:"CR-13", sec:"crianza", n:13, titulo:"Rabietas: comprender y acompañar", etapa:["13-18","19-24"], publicado:false, resumen:"Cómo responder a las rabietas con calma." },
  { id:"CR-14", sec:"crianza", n:14, titulo:"Límites con amor", etapa:["13-18","19-24"], publicado:false, resumen:"Disciplina positiva desde el primer año." },
  { id:"CR-15", sec:"crianza", n:15, titulo:"Autonomía: dejar hacer", etapa:["13-18","19-24"], publicado:false, resumen:"Favorecer la independencia en la alimentación y el juego." },
  { id:"CR-16", sec:"crianza", n:16, titulo:"Destete respetuoso", etapa:["13-18","19-24"], publicado:false, resumen:"Cómo acompañar el fin de la lactancia." },
  { id:"CR-17", sec:"crianza", n:17, titulo:"Pantallas y primera infancia", etapa:["13-18","19-24"], publicado:false, resumen:"Recomendaciones sobre tiempo de pantalla." },
  { id:"CR-18", sec:"crianza", n:18, titulo:"Cuentos y lectura temprana", etapa:["7-9","10-12","13-18","19-24"], publicado:false, resumen:"Cómo leer con un bebé y por qué importa." },
  { id:"CR-19", sec:"crianza", n:19, titulo:"Juego con el padre y cuidadores", etapa:["1-3","4-6","7-9"], publicado:false, resumen:"El rol del padre en el apego temprano." },
  { id:"CR-20", sec:"crianza", n:20, titulo:"Control de esfínteres: cuándo empezar", etapa:["19-24"], publicado:false, resumen:"Señales de madurez y respeto al ritmo del niño." },
  { id:"CR-21", sec:"crianza", n:21, titulo:"Desarrollo social: primeros amigos", etapa:["13-18","19-24"], publicado:false, resumen:"Socialización en la primera infancia." },
  { id:"CR-22", sec:"crianza", n:22, titulo:"Miedos infantiles", etapa:["13-18","19-24"], publicado:false, resumen:"Cómo acompañar miedos comunes." },
  { id:"CR-23", sec:"crianza", n:23, titulo:"Alimentación responsiva", etapa:["4-6","7-9","10-12"], publicado:false, resumen:"Respetar señales de hambre y saciedad." },
  { id:"CR-24", sec:"crianza", n:24, titulo:"Masaje infantil y contacto", etapa:["nacimiento","1-3","4-6"], publicado:false, resumen:"Técnicas sencillas de masaje y sus beneficios." },
  { id:"CR-25", sec:"crianza", n:25, titulo:"Desarrollo del vínculo en el embarazo", etapa:["embarazo"], publicado:false, resumen:"Cómo se construye el vínculo antes de nacer." }
];

/* ---------- 25 TEMAS · INFORMÁTICA ---------- */
const TEMAS_INFORMATICA = [
  { id:"IN-01", sec:"informatica", n:1, titulo:"Alfabetización sanitaria digital", etapa:["embarazo","nacimiento","1-3","4-6","7-9","10-12","13-18","19-24"], publicado:false, resumen:"Qué es y por qué importa para las familias." },
  { id:"IN-02", sec:"informatica", n:2, titulo:"Cómo evaluar una web de salud", etapa:["embarazo","nacimiento","1-3"], publicado:false, resumen:"Criterios para identificar fuentes confiables." },
  { id:"IN-03", sec:"informatica", n:3, titulo:"Privacidad de datos del bebé", etapa:["embarazo","nacimiento","1-3","4-6"], publicado:false, resumen:"Qué datos compartir y cuáles no en redes." },
  { id:"IN-04", sec:"informatica", n:4, titulo:"Aplicaciones de seguimiento del embarazo", etapa:["embarazo"], publicado:false, resumen:"Cómo elegir apps seguras y útiles." },
  { id:"IN-05", sec:"informatica", n:5, titulo:"Inteligencia artificial en pediatría", etapa:["embarazo","nacimiento","1-3"], publicado:false, resumen:"Qué puede y qué no puede hacer la IA." },
  { id:"IN-06", sec:"informatica", n:6, titulo:"Uso responsable de redes sociales", etapa:["embarazo","nacimiento","1-3","4-6"], publicado:false, resumen:"Publicar fotos de hijos sin exponerlos." },
  { id:"IN-07", sec:"informatica", n:7, titulo:"Verificación de noticias de salud", etapa:["embarazo","nacimiento","1-3"], publicado:false, resumen:"Cómo detectar bulos y desinformación." },
  { id:"IN-08", sec:"informatica", n:8, titulo:"Contraseñas y seguridad digital familiar", etapa:["embarazo","nacimiento","1-3","4-6"], publicado:false, resumen:"Proteger cuentas y dispositivos." },
  { id:"IN-09", sec:"informatica", n:9, titulo:"Telemedicina pediátrica", etapa:["nacimiento","1-3","4-6","7-9"], publicado:false, resumen:"Cuándo usar consulta virtual." },
  { id:"IN-10", sec:"informatica", n:10, titulo:"Apps de lactancia", etapa:["nacimiento","1-3","4-6"], publicado:false, resumen:"Herramientas digitales para la lactancia." },
  { id:"IN-11", sec:"informatica", n:11, titulo:"Huella digital de los niños", etapa:["embarazo","nacimiento","1-3","4-6"], publicado:false, resumen:"El rastro que dejamos al publicar." },
  { id:"IN-12", sec:"informatica", n:12, titulo:"Ciberacoso y primera infancia", etapa:["13-18","19-24"], publicado:false, resumen:"Prevención desde edades tempranas." },
  { id:"IN-13", sec:"informatica", n:13, titulo:"Publicidad dirigida a familias", etapa:["embarazo","nacimiento","1-3"], publicado:false, resumen:"Reconocer el marketing engañoso." },
  { id:"IN-14", sec:"informatica", n:14, titulo:"Foros y comunidades de crianza", etapa:["embarazo","nacimiento","1-3","4-6"], publicado:false, resumen:"Participar sin riesgos." },
  { id:"IN-15", sec:"informatica", n:15, titulo:"Pantallas y desarrollo infantil", etapa:["4-6","7-9","10-12","13-18","19-24"], publicado:false, resumen:"Evidencia sobre tiempo de pantalla." },
  { id:"IN-16", sec:"informatica", n:16, titulo:"Contenidos educativos digitales", etapa:["7-9","10-12","13-18","19-24"], publicado:false, resumen:"Seleccionar recursos de calidad." },
  { id:"IN-17", sec:"informatica", n:17, titulo:"Videojuegos y primera infancia", etapa:["13-18","19-24"], publicado:false, resumen:"Uso saludable desde pequeños." },
  { id:"IN-18", sec:"informatica", n:18, titulo:"Alfabetización mediática parental", etapa:["embarazo","nacimiento","1-3","4-6"], publicado:false, resumen:"Enseñar a leer medios con criterio." },
  { id:"IN-19", sec:"informatica", n:19, titulo:"Consentimiento digital infantil", etapa:["embarazo","nacimiento","1-3"], publicado:false, resumen:"Derechos digitales de los menores." },
  { id:"IN-20", sec:"informatica", n:20, titulo:"Apps de salud mental materna", etapa:["embarazo","nacimiento","1-3","4-6"], publicado:false, resumen:"Recursos digitales de apoyo emocional." },
  { id:"IN-21", sec:"informatica", n:21, titulo:"Phishing y estafas a familias", etapa:["embarazo","nacimiento","1-3","4-6"], publicado:false, resumen:"Detectar correos y mensajes falsos." },
  { id:"IN-22", sec:"informatica", n:22, titulo:"Dispositivos inteligentes en casa", etapa:["embarazo","nacimiento","1-3","4-6"], publicado:false, resumen:"Cámaras, monitores y asistentes: riesgos." },
  { id:"IN-23", sec:"informatica", n:23, titulo:"Búsqueda segura de información pediátrica", etapa:["embarazo","nacimiento","1-3","4-6"], publicado:false, resumen:"Cómo buscar sin caer en mitos." },
  { id:"IN-24", sec:"informatica", n:24, titulo:"Derechos digitales de la infancia", etapa:["embarazo","nacimiento","1-3","4-6","7-9"], publicado:false, resumen:"Marco de protección digital infantil." },
  { id:"IN-25", sec:"informatica", n:25, titulo:"Uso de inteligencia artificial en casa", etapa:["embarazo","nacimiento","1-3"], publicado:false, resumen:"Asistentes, chatbots y precauciones." }
];

/* ---------- 25 TEMAS · BIENESTAR ---------- */
const TEMAS_BIENESTAR = [
  { id:"BI-01", sec:"bienestar", n:1, titulo:"Salud mental en el embarazo", etapa:["embarazo"], publicado:false, resumen:"Cambios emocionales y cuándo buscar ayuda." },
  { id:"BI-02", sec:"bienestar", n:2, titulo:"Depresión posparto: señales", etapa:["nacimiento","1-3"], publicado:false, resumen:"Identificar síntomas y pedir apoyo." },
  { id:"BI-03", sec:"bienestar", n:3, titulo:"Nutrición durante la lactancia", etapa:["nacimiento","1-3","4-6"], publicado:false, resumen:"Qué comer y qué evitar." },
  { id:"BI-04", sec:"bienestar", n:4, titulo:"Sueño materno y descanso", etapa:["nacimiento","1-3","4-6"], publicado:false, resumen:"Cómo recuperar descanso real." },
  { id:"BI-05", sec:"bienestar", n:5, titulo:"Recuperación posparto física", etapa:["nacimiento","1-3","4-6"], publicado:false, resumen:"Cuidados y ejercicios seguros." },
  { id:"BI-06", sec:"bienestar", n:6, titulo:"Autocuidado sin culpa", etapa:["nacimiento","1-3","4-6"], publicado:false, resumen:"Pequeños hábitos para sostener." },
  { id:"BI-07", sec:"bienestar", n:7, titulo:"Ansiedad parental", etapa:["embarazo","nacimiento","1-3"], publicado:false, resumen:"Reconocer y manejar la ansiedad." },
  { id:"BI-08", sec:"bienestar", n:8, titulo:"Alimentación del bebé: introducción de sólidos", etapa:["4-6","7-9"], publicado:false, resumen:"Nutrición equilibrada en cada etapa." },
  { id:"BI-09", sec:"bienestar", n:9, titulo:"Prevención de anemia infantil", etapa:["4-6","7-9","10-12","13-18"], publicado:false, resumen:"Hierro y alimentación." },
  { id:"BI-10", sec:"bienestar", n:10, titulo:"Vitaminas y suplementos", etapa:["nacimiento","1-3","4-6","7-9"], publicado:false, resumen:"Vitamina D y otras recomendaciones." },
  { id:"BI-11", sec:"bienestar", n:11, titulo:"Fiebre en el bebé", etapa:["nacimiento","1-3","4-6","7-9","10-12"], publicado:false, resumen:"Qué hacer y cuándo consultar." },
  { id:"BI-12", sec:"bienestar", n:12, titulo:"Vacunas en la primera infancia", etapa:["nacimiento","1-3","4-6","7-9","10-12","13-18","19-24"], publicado:false, resumen:"Calendario y dudas frecuentes." },
  { id:"BI-13", sec:"bienestar", n:13, titulo:"Cólicos del lactante", etapa:["1-3","4-6"], publicado:false, resumen:"Manejo y cuándo consultar." },
  { id:"BI-14", sec:"bienestar", n:14, titulo:"Dentición y salud bucal", etapa:["4-6","7-9","10-12"], publicado:false, resumen:"Primeros dientes y hábitos." },
  { id:"BI-15", sec:"bienestar", n:15, titulo:"Alergias e intolerancias", etapa:["4-6","7-9","10-12","13-18"], publicado:false, resumen:"Detectar y manejar reacciones." },
  { id:"BI-16", sec:"bienestar", n:16, titulo:"Obesidad infantil: prevención", etapa:["13-18","19-24"], publicado:false, resumen:"Hábitos saludables desde el inicio." },
  { id:"BI-17", sec:"bienestar", n:17, titulo:"Salud respiratoria", etapa:["nacimiento","1-3","4-6","7-9"], publicado:false, resumen:"Prevención de infecciones respiratorias." },
  { id:"BI-18", sec:"bienestar", n:18, titulo:"Enfermedades eruptivas infantiles", etapa:["7-9","10-12","13-18","19-24"], publicado:false, resumen:"Sarampión, varicela y otras." },
  { id:"BI-19", sec:"bienestar", n:19, titulo:"Bienestar emocional del padre", etapa:["embarazo","nacimiento","1-3","4-6"], publicado:false, resumen:"La salud mental paterna también importa." },
  { id:"BI-20", sec:"bienestar", n:20, titulo:"Violencia obstétrica", etapa:["embarazo","nacimiento"], publicado:false, resumen:"Derechos y prevención." },
  { id:"BI-21", sec:"bienestar", n:21, titulo:"Planificación familiar posparto", etapa:["nacimiento","1-3","4-6","7-9"], publicado:false, resumen:"Métodos y tiempos." },
  { id:"BI-22", sec:"bienestar", n:22, titulo:"Salud sexual y reproductiva", etapa:["embarazo","19-24"], publicado:false, resumen:"Cuidar también la propia salud." },
  { id:"BI-23", sec:"bienestar", n:23, titulo:"Primeros auxilios básicos", etapa:["nacimiento","1-3","4-6","7-9","10-12","13-18","19-24"], publicado:false, resumen:"Atragantamiento, caídas y quemaduras." },
  { id:"BI-24", sec:"bienestar", n:24, titulo:"Prevención de accidentes en casa", etapa:["7-9","10-12","13-18","19-24"], publicado:false, resumen:"Hogar seguro para quien explora." },
  { id:"BI-25", sec:"bienestar", n:25, titulo:"Hidratación y alimentación infantil", etapa:["4-6","7-9","10-12","13-18","19-24"], publicado:false, resumen:"Agua, jugos y bebidas azucaradas." }
];

/* ---------- 25 TEMAS · ACOMPAÑAMIENTO ---------- */
const TEMAS_ACOMPANAMIENTO = [
  { id:"AC-01", sec:"acompanamiento", n:1, titulo:"Redes de apoyo familiar", etapa:["embarazo","nacimiento","1-3"], publicado:false, resumen:"Construir una red de sostén." },
  { id:"AC-02", sec:"acompanamiento", n:2, titulo:"Cómo pedir ayuda", etapa:["nacimiento","1-3","4-6"], publicado:false, resumen:"Herramientas para delegar y sostener." },
  { id:"AC-03", sec:"acompanamiento", n:3, titulo:"Pareja y crianza", etapa:["embarazo","nacimiento","1-3","4-6"], publicado:false, resumen:"Cuidar la relación en la transición." },
  { id:"AC-04", sec:"acompanamiento", n:4, titulo:"Abuelos y crianza", etapa:["nacimiento","1-3","4-6","7-9"], publicado:false, resumen:"Acuerdos intergeneracionales." },
  { id:"AC-05", sec:"acompanamiento", n:5, titulo:"Lactancia: apoyo práctico", etapa:["nacimiento","1-3","4-6"], publicado:false, resumen:"Grupos y profesionales de lactancia." },
  { id:"AC-06", sec:"acompanamiento", n:6, titulo:"Rutinas familiares", etapa:["1-3","4-6","7-9","10-12"], publicado:false, resumen:"Organizar la vida cotidiana." },
  { id:"AC-07", sec:"acompanamiento", n:7, titulo:"Prevención del maltrato infantil", etapa:["nacimiento","1-3","4-6","7-9"], publicado:false, resumen:"Señales y actuación." },
  { id:"AC-08", sec:"acompanamiento", n:8, titulo:"Crianza en solitario", etapa:["embarazo","nacimiento","1-3","4-6"], publicado:false, resumen:"Recursos para familias monoparentales." },
  { id:"AC-09", sec:"acompanamiento", n:9, titulo:"Discapacidad y primera infancia", etapa:["nacimiento","1-3","4-6","7-9"], publicado:false, resumen:"Apoyos y derechos." },
  { id:"AC-10", sec:"acompanamiento", n:10, titulo:"Duelo gestacional y perinatal", etapa:["embarazo","nacimiento"], publicado:false, resumen:"Acompañar la pérdida." },
  { id:"AC-11", sec:"acompanamiento", n:11, titulo:"Migración y crianza", etapa:["embarazo","nacimiento","1-3","4-6"], publicado:false, resumen:"Crianza en contexto migratorio." },
  { id:"AC-12", sec:"acompanamiento", n:12, titulo:"Crianza y trabajo", etapa:["embarazo","nacimiento","1-3","4-6"], publicado:false, resumen:"Conciliación y derechos laborales." },
  { id:"AC-13", sec:"acompanamiento", n:13, titulo:"Guarderías y jardines maternales", etapa:["1-3","4-6","7-9"], publicado:false, resumen:"Elegir y adaptarse." },
  { id:"AC-14", sec:"acompanamiento", n:14, titulo:"Crianza respetuosa: principios", etapa:["embarazo","nacimiento","1-3","4-6","7-9","10-12","13-18","19-24"], publicado:false, resumen:"Marco de la crianza respetuosa." },
  { id:"AC-15", sec:"acompanamiento", n:15, titulo:"Comunicación familiar asertiva", etapa:["embarazo","nacimiento","1-3","4-6"], publicado:false, resumen:"Herramientas para dialogar." },
  { id:"AC-16", sec:"acompanamiento", n:16, titulo:"Cuidadores y niñeras", etapa:["nacimiento","1-3","4-6","7-9"], publicado:false, resumen:"Selección y confianza." },
  { id:"AC-17", sec:"acompanamiento", n:17, titulo:"Grupos de crianza", etapa:["embarazo","nacimiento","1-3","4-6"], publicado:false, resumen:"Comunidades presenciales y virtuales." },
  { id:"AC-18", sec:"acompanamiento", n:18, titulo:"Paternidad activa", etapa:["embarazo","nacimiento","1-3","4-6"], publicado:false, resumen:"Rol del padre en el cuidado." },
  { id:"AC-19", sec:"acompanamiento", n:19, titulo:"Adopción y primera infancia", etapa:["nacimiento","1-3","4-6","7-9"], publicado:false, resumen:"Acompañar el vínculo adoptivo." },
  { id:"AC-20", sec:"acompanamiento", n:20, titulo:"Familias diversas", etapa:["embarazo","nacimiento","1-3","4-6"], publicado:false, resumen:"Diversidad familiar y crianza." },
  { id:"AC-21", sec:"acompanamiento", n:21, titulo:"Violencia de género y crianza", etapa:["embarazo","nacimiento","1-3","4-6"], publicado:false, resumen:"Recursos y protección." },
  { id:"AC-22", sec:"acompanamiento", n:22, titulo:"Crianza y adicciones", etapa:["embarazo","nacimiento","1-3"], publicado:false, resumen:"Apoyo y tratamiento." },
  { id:"AC-23", sec:"acompanamiento", n:23, titulo:"Derechos de la infancia", etapa:["embarazo","nacimiento","1-3","4-6","7-9"], publicado:false, resumen:"CDN y aplicación cotidiana." },
  { id:"AC-24", sec:"acompanamiento", n:24, titulo:"Primera visita pediátrica: qué esperar", etapa:["nacimiento","1-3"], publicado:false, resumen:"Preparar la consulta." },
  { id:"AC-25", sec:"acompanamiento", n:25, titulo:"Emergencias: a quién llamar", etapa:["nacimiento","1-3","4-6","7-9","10-12","13-18","19-24"], publicado:false, resumen:"Números y protocolos útiles." }
];

const TEMAS = [
  ...TEMAS_CRIANZA,
  ...TEMAS_INFORMATICA,
  ...TEMAS_BIENESTAR,
  ...TEMAS_ACOMPANAMIENTO
];

/* ---------- Prescripción Digital (catálogo confiable) ---------- */
const PRESCRIPCION = [
  { id:"PD-01", nombre:"OMS · Salud del recién nacido", tipo:"Web oficial", url:"https://www.who.int/es/health-topics/newborn-health", desc:"Guías internacionales de la Organización Mundial de la Salud." },
  { id:"PD-02", nombre:"UNICEF · Primera infancia", tipo:"Web oficial", url:"https://www.unicef.org/es/primera-infancia", desc:"Recursos sobre desarrollo infantil temprano." },
  { id:"PD-03", nombre:"OMS · Lactancia materna", tipo:"Web oficial", url:"https://www.who.int/es/health-topics/breastfeeding", desc:"Recomendaciones y evidencia sobre lactancia." },
  { id:"PD-04", nombre:"SAP · Sociedad Argentina de Pediatría", tipo:"Sociedad científica", url:"https://www.sap.org.ar", desc:"Contenidos pediátricos para familias y profesionales." },
  { id:"PD-05", nombre:"AAP · HealthyChildren.org", tipo:"Sociedad científica", url:"https://www.healthychildren.org", desc:"Academia Americana de Pediatría (español disponible)." },
  { id:"PD-06", nombre:"LactMed · Base de datos de medicamentos y lactancia", tipo:"Base de datos", url:"https://www.ncbi.nlm.nih.gov/books/NBK501922/", desc:"Seguridad de fármacos durante la lactancia." },
  { id:"PD-07", nombre:"OMS · Alimentación del lactante", tipo:"Web oficial", url:"https://www.who.int/es/health-topics/infant-nutrition", desc:"Guías de alimentación complementaria." },
  { id:"PD-08", nombre:"OPS · Salud materno-infantil", tipo:"Web oficial", url:"https://www.paho.org/es/temas/salud-materno-infantil", desc:"Recursos regionales para las Américas." },
  { id:"PD-09", nombre:"Fundación CONIN", tipo:"ONG", url:"https://www.conin.org.ar", desc:"Prevención de la desnutrición infantil." },
  { id:"PD-10", nombre:"Sociedad Argentina de Lactancia Materna", tipo:"Sociedad científica", url:"https://www.saplm.org.ar", desc:"Apoyo profesional a la lactancia." }
];

/* ---------- Biblioteca CIBA (recursos) ---------- */
const BIBLIOTECA = [
  { id:"BL-01", tipo:"Infografía", titulo:"Etapas del sueño del bebé", etapa:["1-3","4-6","7-9"], disponible:false },
  { id:"BL-02", tipo:"PDF", titulo:"Guía de alimentación complementaria", etapa:["4-6","7-9"], disponible:false },
  { id:"BL-03", tipo:"Pódcast", titulo:"Apego seguro: primeros días", etapa:["nacimiento","1-3"], disponible:false },
  { id:"BL-04", tipo:"Vídeo", titulo:"Cómo lograr un buen agarre en lactancia", etapa:["nacimiento","1-3"], disponible:false },
  { id:"BL-05", tipo:"Artículo", titulo:"Llanto del bebé: cuándo consultar", etapa:["nacimiento","1-3","4-6"], disponible:false },
  { id:"BL-06", tipo:"Audio", titulo:"Meditación para madres agotadas", etapa:["nacimiento","1-3","4-6"], disponible:false },
  { id:"BL-07", tipo:"Formulario", titulo:"Lista de comprobación: casa segura", etapa:["7-9","10-12","13-18"], disponible:false },
  { id:"BL-08", tipo:"Infografía", titulo:"Calendario de vacunas", etapa:["nacimiento","1-3","4-6","7-9","10-12","13-18","19-24"], disponible:false },
  { id:"BL-09", tipo:"PDF", titulo:"Carta de derechos de la infancia", etapa:["embarazo","nacimiento"], disponible:false },
  { id:"BL-10", tipo:"Vídeo", titulo:"Estimulación temprana en casa", etapa:["1-3","4-6","7-