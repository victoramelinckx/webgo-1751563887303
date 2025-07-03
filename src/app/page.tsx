
"use client";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { How } from "@/components/How";
import { Aboutus } from "@/components/Aboutus";
import { Services } from "@/components/Services";
import { BeforeAndAfter } from "@/components/BeforeAndAfter";
import { Faq } from "@/components/Faq";
import { BookAppointment } from "@/components/BookAppointment";
import { Footer } from "@/components/Footer";
export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
<Hero headline="Digitaliza tus Ventas en 24 Horas" subheadline="WebGo crea tu sitio de ventas en un día, con soporte continuo, para que tus clientes te encuentren fácilmente online." cta1="Empieza Ahora" />
<How step1Title="Solicita tu web" step1Desc="Completa un formulario rápido sobre tu negocio." step2Title="Diseño exprés" step2Desc="Creamos tu sitio en menos de 24 horas." step3Title="Soporte 24/7" step3Desc="Resolvemos tus dudas en cualquier momento." />
<Aboutus headline="WebGo: Crece tus ventas online" subheadline="Digitalizamos tu negocio, sin esfuerzo ni complicaciones, destacándonos con soluciones personalizadas." beneficiotitulo1="Presencia Rápida" beneficio1="Vende online sin complicaciones." beneficiotitulo2="Gestión Sencilla" beneficio2="Nosotros manejamos todo por ti." />
<Services heading="Transforma Tu Negocio en 24 Horas" description="Crusi digitaliza tus ventas rápidamente, ahorrándote tiempo y esfuerzo." services={[{"name":"Desarrollo Rápido","icon":"rocket","description":"Web de ventas en menos de 24 horas."},{"name":"Soporte 24/7","icon":"headset","description":"Asistencia continua para tu tranquilidad."},{"name":"SEO Optimizado","icon":"search","description":"Mejora tu visibilidad online rápidamente."},{"name":"Integración E-commerce","icon":"shopping-cart","description":"Facilita el proceso de compra a tus clientes."},{"name":"Consultoría Digital","icon":"lightbulb","description":"Consejos expertos para aumentar tus ventas online."},{"name":"Gestión de Contenido","icon":"edit","description":"Mantén tu web actualizada y relevante."}]} />
<BeforeAndAfter subheadline="Proyectos que transforman ideas en realidades impactantes y exitosas." />
<Faq faqs={[{"pregunta":"¿Cómo puede WebGo ayudarme a digitalizar mi negocio si solo vendo por recomendación?","respuesta":"WebGo te ayuda a crear una presencia online para que más personas descubran tus productos. Con un sitio web profesional, tus clientes pueden encontrarte fácilmente en internet, lo que aumenta tus posibilidades de venta."},{"pregunta":"¿Cuáles son los beneficios de usar los servicios de WebGo para mi negocio en Santiago?","respuesta":"Con WebGo, podrás tener un sitio web que atrae más clientes sin el estrés de gestionarlo tú mismo. Nos encargamos de todo, desde el diseño hasta el mantenimiento, para que puedas enfocarte en lo que mejor haces: atender a tus clientes."},{"pregunta":"¿Qué costo tiene digitalizar mi negocio con WebGo?","respuesta":"Nuestros servicios están diseñados para ser asequibles, adaptados a las necesidades de pequeños negocios. Contáctanos para obtener un presupuesto personalizado que se ajuste a tu presupuesto."},{"pregunta":"¿Qué hago si no tengo tiempo para gestionar un sitio web?","respuesta":"WebGo se encarga de todo por ti. Desde el diseño hasta la gestión diaria, nos aseguramos de que tu sitio web funcione sin problemas, así puedes concentrarte en servir a tus clientes."},{"pregunta":"¿Cómo puede mi negocio beneficiarse de las ventas online si nunca he vendido por internet?","respuesta":"Vender online te abre un mundo de oportunidades. Con WebGo, te ayudamos a llegar a clientes que nunca habrías alcanzado solo con recomendaciones. Además, podrás vender a cualquier hora del día, incluso mientras duermes."}]} />
<BookAppointment 
                      heading="Transforma Tus Recomendaciones en Ventas Online" 
                      description="Descubre cómo WebGo puede digitalizar tus ventas en Santiago, para que no pierdas tiempo ni oportunidades. ¡Empieza ahora y haz crecer tu negocio!"
                      formPostUrl="/api/sendForm"
                      siteOwnerId="undefined"
                    />
<Footer />
    </main>
  );
}
