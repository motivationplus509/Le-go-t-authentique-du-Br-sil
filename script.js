document.addEventListener('DOMContentLoaded', () => {

    // --- LANGUAGE SWITCHER ---
    const translations = {
        fr: {
            scrolling_text: '🔥 Offre Spéciale : -15% sur votre première commande en ligne ! Bienvenue au Sabor do Brasil ! 🔥',
            nav_about: 'À Propos',
            nav_menu: 'Menu & Commande',
            nav_reservation: 'Réservation',
            nav_contact: 'Contact',
            hero_title: 'Le goût authentique du Brésil',
            hero_subtitle: 'Une explosion de saveurs tropicales au cœur de la ville.',
            hero_cta: 'Réserver une table',
            about_title: 'Notre Histoire',
            about_text: "Sabor do Brasil est né d'une passion pour la cuisine brésilienne authentique. Notre mission est de vous faire voyager à travers les saveurs riches et diverses du Brésil, en utilisant des ingrédients frais et des recettes traditionnelles transmises de génération en génération.",
            menu_title: 'Notre Menu & Commande en Ligne',
            menu_starters: 'Entrées (Aperitivos)',
            menu_item1_desc: "Petits pains au fromage, croustillants à l'extérieur et moelleux à l'intérieur.",
            menu_item2_desc: "Beignets de poulet déchiqueté, enrobés d'une pâte dorée.",
            menu_item3_desc: "Chausson frit et croustillant farci à la viande de bœuf.",
            add_to_cart: 'Ajouter',
            menu_mains: 'Plats Principaux (Pratos Principais)',
            menu_item4_desc: 'Le plat national brésilien. Ragoût de haricots noirs avec diverses viandes de porc, servi avec du riz, du chou vert et de la farofa.',
            menu_item5_desc: 'Ragoût de poisson crémeux à la noix de coco, tomates, oignons et coriandre.',
            menu_item6_desc: 'Le meilleur morceau de bœuf, grillé à la perfection et servi avec des frites et une vinaigrette.',
            menu_desserts: 'Desserts (Sobremesas)',
            menu_item7_desc: 'Truffes au chocolat brésiliennes traditionnelles.',
            menu_item8_desc: 'Flan au lait concentré, onctueux et délicieux.',
            menu_item9_desc: 'Mousse légère et acidulée au fruit de la passion.',
            order_summary_title: 'Votre Commande',
            order_total: 'Total',
            your_info_title: 'Vos informations',
            form_name: 'Nom',
            form_contact_label: 'Email ou N° de WhatsApp',
            form_contact_placeholder: 'Pour le code de confirmation',
            form_submit_payment: 'Passer au paiement',
            reservation_title: 'Réserver une Table',
            form_phone: 'Téléphone',
            form_email: 'Email',
            form_guests: 'Nombre de personnes',
            form_date: 'Date',
            form_time: 'Heure',
            form_placement: 'Préférence de placement',
            form_placement_any: 'Indifférent',
            form_placement_indoor: 'Intérieur',
            form_placement_terrace: 'Terrasse',
            form_occasion: 'Occasion (Optionnel)',
            form_occasion_choose: '-- Choisissez une occasion --',
            form_occasion_birthday: 'Anniversaire',
            form_occasion_business: "Repas d'affaires",
            form_occasion_romantic: 'Rendez-vous romantique',
            form_occasion_other: 'Autre',
            form_special_requests: 'Demandes spéciales (Optionnel)',
            form_special_requests_placeholder: "Ex: allergie aux arachides, besoin d'une chaise haute...",
            form_submit_reservation: 'Confirmer la réservation',
            contact_title: 'Contact & Accès',
            contact_address: 'Adresse',
            contact_reservations_info: 'Réservations & Informations',
            contact_phone: 'Téléphone',
            contact_hours: "Horaires d'ouverture",
            contact_hours_days: 'Mardi - Dimanche',
            newsletter_title: 'Restez Informé',
            newsletter_subtitle: 'Abonnez-vous à notre newsletter pour recevoir nos dernières actualités et offres spéciales.',
            newsletter_placeholder: 'Votre adresse email',
            newsletter_subscribe: "S'inscrire",
            footer_quick_links: 'Liens Rapides',
            footer_contact_us: 'Contactez-nous',
            footer_opening_hours: "Horaires d'ouverture",
            footer_closed: 'Fermé le Lundi',
            footer_rights: 'Tous droits réservés.',
        },
        pt: {
            scrolling_text: '🔥 Oferta Especial: -15% no seu primeiro pedido online! Bem-vindo ao Sabor do Brasil! 🔥',
            nav_about: 'Sobre Nós',
            nav_menu: 'Menu & Pedidos',
            nav_reservation: 'Reservas',
            nav_contact: 'Contato',
            hero_title: 'O sabor autêntico do Brasil',
            hero_subtitle: 'Uma explosão de sabores tropicais no coração da cidade.',
            hero_cta: 'Reservar uma mesa',
            about_title: 'Nossa História',
            about_text: 'O Sabor do Brasil nasceu da paixão pela auténtica culinária brasileira. Nossa missão é levá-lo a uma viagem pelos ricos e diversos sabores do Brasil, usando ingredientes frescos e receitas tradicionais passadas de geração em geração.',
            menu_title: 'Nosso Menu & Pedidos Online',
            menu_starters: 'Entradas (Aperitivos)',
            menu_item1_desc: 'Pãezinhos de queijo, crocantes por fora e macios por dentro.',
            menu_item2_desc: 'Salgadinhos de frango desfiado, envoltos em uma massa dourada.',
            menu_item3_desc: 'Pastel frito e crocante recheado com carne moída.',
            add_to_cart: 'Adicionar',
            menu_mains: 'Pratos Principais',
            menu_item4_desc: 'O prato nacional brasileiro. Feijoada com diversas carnes de porco, servida com arroz, couve e farofa.',
            menu_item5_desc: 'Ensopado de peixe cremoso com leite de coco, tomate, cebola e coentro.',
            menu_item6_desc: 'O melhor corte de carne, grelhado à perfeição e servido com batatas fritas e vinagrete.',
            menu_desserts: 'Sobremesas',
            menu_item7_desc: 'Tradicionais trufas de chocolate brasileiras.',
            menu_item8_desc: 'Pudim de leite condensado, cremoso e delicioso.',
            menu_item9_desc: 'Mousse leve e azedinha de maracujá.',
            order_summary_title: 'Seu Pedido',
            order_total: 'Total',
            your_info_title: 'Suas informações',
            form_name: 'Nome',
            form_contact_label: 'Email ou Número de WhatsApp',
            form_contact_placeholder: 'Para o código de confirmação',
            form_submit_payment: 'Ir para o pagamento',
            reservation_title: 'Reservar uma Mesa',
            form_phone: 'Telefone',
            form_email: 'Email',
            form_guests: 'Número de pessoas',
            form_date: 'Data',
            form_time: 'Hora',
            form_placement: 'Preferência de assento',
            form_placement_any: 'Indiferente',
            form_placement_indoor: 'Interior',
            form_placement_terrace: 'Terraço',
            form_occasion: 'Ocasião (Opcional)',
            form_occasion_choose: '-- Escolha uma ocasião --',
            form_occasion_birthday: 'Aniversário',
            form_occasion_business: 'Jantar de negócios',
            form_occasion_romantic: 'Encontro romântico',
            form_occasion_other: 'Outro',
            form_special_requests: 'Pedidos especiais (Opcional)',
            form_special_requests_placeholder: 'Eg: alergia a amendoim, bezwen yon chèz segondè...',
            form_submit_reservation: 'Confirmar a reserva',
            contact_title: 'Contato & Localização',
            contact_address: 'Endereço',
            contact_reservations_info: 'Reservas & Informações',
            contact_phone: 'Telefone',
            contact_hours: 'Horário de funcionamento',
            contact_hours_days: 'Terça - Domingo',
            newsletter_title: 'Fique Informado',
            newsletter_subtitle: 'Assine nossa newsletter para receber nossas últimas notícias e ofertas especiais.',
            newsletter_placeholder: 'Seu endereço de e-mail',
            newsletter_subscribe: 'Inscrever-se',
            footer_quick_links: 'Links Rápidos',
            footer_contact_us: 'Contate-nos',
            footer_opening_hours: 'Horário de funcionamento',
            footer_closed: 'Fechado às Segundas',
            footer_rights: 'Todos os direitos reservados.',
        },
        ht: {
            scrolling_text: '🔥 Òf Espesyal: -15% sou premye kòmand ou anliy! Byenveni nan Sabor do Brasil! 🔥',
            nav_about: 'Sou Nou',
            nav_menu: 'Meni & Kòmand',
            nav_reservation: 'Rezèvasyon',
            nav_contact: 'Kontak',
            hero_title: 'Gou otantik peyi Brezil',
            hero_subtitle: 'Yon eksplozyon gou twopikal nan kè vil la.',
            hero_cta: 'Rezève yon tab',
            about_title: 'Istwa Nou',
            about_text: 'Sabor do Brasil fèt nan yon pasyon pou kwizin brezilyen otantik. Misyon nou se fè w vwayaje atravè gou rich ak divès Brezil, lè nou itilize engredyan frè ak resèt tradisyonèl ki pase de jenerasyon an jenerasyon.',
            menu_title: 'Meni Nou & Kòmand Anliy',
            menu_starters: 'Antre (Aperitivos)',
            menu_item1_desc: 'Ti pen fwomaj, kroustiyan deyò epi mou anndan.',
            menu_item2_desc: 'Bènye poul dechire, vlope nan yon pat an lò.',
            menu_item3_desc: 'Yon paté fri kroustiyan boure ak vyann bèf.',
            add_to_cart: 'Ajoute',
            menu_mains: 'Pla Prensipal (Pratos Principais)',
            menu_item4_desc: 'Pla nasyonal brezilyen an. Ragou pwa nwa ak divès vyann kochon, sèvi ak diri, chou vèt ak farofa.',
            menu_item5_desc: 'Ragou pwason krèm ak kokoye, tomat, zonyon ak koryandè.',
            menu_item6_desc: 'Pi bon moso vyann bèf la, griye pafètman epi sèvi ak fri ak yon vinigrèt.',
            menu_desserts: 'Desè (Sobremesas)',
            menu_item7_desc: 'Trif chokola tradisyonèl brezilyen.',
            menu_item8_desc: 'Flan lèt konsantre, krèm ak bon gou.',
            menu_item9_desc: 'Mous lejè ak asid fwi pasyon.',
            order_summary_title: 'Kòmand Ou',
            order_total: 'Total',
            your_info_title: 'Enfòmasyon ou yo',
            form_name: 'Non',
            form_contact_label: 'Imèl oswa Nimewo WhatsApp',
            form_contact_placeholder: 'Pou kòd konfimasyon an',
            form_submit_payment: 'Ale nan peman',
            reservation_title: 'Rezève yon Tab',
            form_phone: 'Telefòn',
            form_email: 'Imèl',
            form_guests: 'Kantite moun',
            form_date: 'Dat',
            form_time: 'Lè',
            form_placement: 'Preferans plas',
            form_placement_any: 'Nenpòt',
            form_placement_indoor: 'Andan',
            form_placement_terrace: 'Teras',
            form_occasion: 'Okazyon (Opsyonèl)',
            form_occasion_choose: '-- Chwazi yon okazyon --',
            form_occasion_birthday: 'Anivèsè',
            form_occasion_business: 'Repa biznis',
            form_occasion_romantic: 'Cita amoure',
            form_occasion_other: 'Otro',
            form_special_requests: 'Demann espesyal (Opsyonèl)',
            form_special_requests_placeholder: 'Eg: alèji ak pistach, bezwen yon sèl segondè...',
            form_submit_reservation: 'Konfime rezèvasyon an',
            contact_title: 'Kontak & Aksè',
            contact_address: 'Adrès',
            contact_reservations_info: 'Rezèvasyon & Enfòmasyon',
            contact_phone: 'Telefòn',
            contact_hours: 'Lè Ouvèti',
            contact_hours_days: 'Madi - Dimanch',
            newsletter_title: 'Rete Enfòme',
            newsletter_subtitle: 'Abòne nan bilten nou an pou resevwa dènye nouvèl ak òf espesyal nou yo.',
            newsletter_placeholder: 'Adrès imèl ou',
            newsletter_subscribe: 'Abòne',
            footer_quick_links: 'Lyen Rapid',
            footer_contact_us: 'Kontakte Nou',
            footer_opening_hours: 'Lè Ouvèti',
            footer_closed: 'Cerrado los Lunes',
            footer_rights: 'Tout dwa rezève.',
        },
        en: {
            scrolling_text: '🔥 Special Offer: -15% on your first online order! Welcome to Sabor do Brasil! 🔥',
            nav_about: 'About Us',
            nav_menu: 'Menu & Order',
            nav_reservation: 'Reservation',
            nav_contact: 'Contact',
            hero_title: 'The authentic taste of Brazil',
            hero_subtitle: 'An explosion of tropical flavors in the heart of the city.',
            hero_cta: 'Book a table',
            about_title: 'Our Story',
            about_text: 'Sabor do Brasil was born from a passion for authentic Brazilian cuisine. Our mission is to take you on a journey through the rich and diverse flavors of Brazil, using fresh ingredients and traditional recipes passed down through generations.',
            menu_title: 'Our Menu & Online Ordering',
            menu_starters: 'Starters (Aperitivos)',
            menu_item1_desc: 'Small cheese breads, crispy on the outside and soft on the inside.',
            menu_item2_desc: 'Shredded chicken fritters, coated in a golden batter.',
            menu_item3_desc: 'Crispy fried pastry filled with ground beef.',
            add_to_cart: 'Add',
            menu_mains: 'Main Courses (Pratos Principais)',
            menu_item4_desc: 'The Brazilian national dish. Black bean stew with various pork meats, served with rice, collard greens, and farofa.',
            menu_item5_desc: 'Creamy fish stew with coconut milk, tomatoes, onions, and cilantro.',
            menu_item6_desc: 'The best cut of beef, grilled to perfection and served with fries and a vinaigrette.',
            menu_desserts: 'Desserts (Sobremesas)',
            menu_item7_desc: 'Traditional Brazilian chocolate truffles.',
            menu_item8_desc: 'Creamy and delicious condensed milk flan.',
            menu_item9_desc: 'Light and tangy passion fruit mousse.',
            order_summary_title: 'Your Order',
            order_total: 'Total',
            your_info_title: 'Your information',
            form_name: 'Name',
            form_contact_label: 'Email or WhatsApp Number',
            form_contact_placeholder: 'For the confirmation code',
            form_submit_payment: 'Proceed to payment',
            reservation_title: 'Book a Table',
            form_phone: 'Phone',
            form_email: 'Email',
            form_guests: 'Number of guests',
            form_date: 'Date',
            form_time: 'Time',
            form_placement: 'Seating preference',
            form_placement_any: 'Any',
            form_placement_indoor: 'Indoor',
            form_placement_terrace: 'Terrace',
            form_occasion: 'Occasion (Optional)',
            form_occasion_choose: '-- Choose an occasion --',
            form_occasion_birthday: 'Birthday',
            form_occasion_business: 'Business meal',
            form_occasion_romantic: 'Romantic date',
            form_occasion_other: 'Other',
            form_special_requests: 'Special requests (Optional)',
            form_special_requests_placeholder: 'e.g. peanut allergy, need a high chair...',
            form_submit_reservation: 'Confirm reservation',
            contact_title: 'Contact & Access',
            contact_address: 'Address',
            contact_reservations_info: 'Reservations & Information',
            contact_phone: 'Phone',
            contact_hours: 'Opening Hours',
            contact_hours_days: 'Tuesday - Sunday',
            newsletter_title: 'Stay Informed',
            newsletter_subtitle: 'Subscribe to our newsletter to receive our latest news and special offers.',
            newsletter_placeholder: 'Your email address',
            newsletter_subscribe: 'Subscribe',
            footer_quick_links: 'Quick Links',
            footer_contact_us: 'Contact Us',
            footer_opening_hours: 'Opening Hours',
            footer_closed: 'Closed on Monday',
            footer_rights: 'All rights reserved.',
        },
        es: {
            scrolling_text: '🔥 Oferta Especial: -15% en tu primer pedido en línea! ¡Bienvenido a Sabor do Brasil! 🔥',
            nav_about: 'Sobre Nosotros',
            nav_menu: 'Menú y Pedidos',
            nav_reservation: 'Reservas',
            nav_contact: 'Contacto',
            hero_title: 'El sabor auténtico de Brasil',
            hero_subtitle: 'Una explosión de sabores tropicales en el corazón de la ciudad.',
            hero_cta: 'Reservar una mesa',
            about_title: 'Nuestra Historia',
            about_text: 'Sabor do Brasil nació de la pasión por la auténtica cocina brasileña. Nuestra misión es llevarte a un viaje a través de los ricos y diversos sabores de Brasil, utilizando ingredientes frescos y recetas tradicionales transmitidas de generación en generación.',
            menu_title: 'Nuestro Menú y Pedidos en Línea',
            menu_starters: 'Entrantes (Aperitivos)',
            menu_item1_desc: 'Panecillos de queso, crujientes por fuera y suaves por dentro.',
            menu_item2_desc: 'Buñuelos de pollo desmenuzado, envueltos en una masa dorada.',
            menu_item3_desc: 'Pastel frito y crujiente relleno de carne de res.',
            add_to_cart: 'Añadir',
            menu_mains: 'Platos Principales',
            menu_item4_desc: 'El plato nacional brasileño. Guiso de frijoles negros con diversas carnes de cerdo, servido con arroz, col rizada y farofa.',
            menu_item5_desc: 'Guiso cremoso de pescado con leche de coco, tomates, cebollas y cilantro.',
            menu_item6_desc: 'El mejor corte de res, asado a la perfección y servido con patatas fritas y vinagreta.',
            menu_desserts: 'Postres (Sobremesas)',
            menu_item7_desc: 'Trufas de chocolate tradicionales brasileñas.',
            menu_item8_desc: 'Flan de leche condensada, cremoso y delicioso.',
            menu_item9_desc: 'Mousse ligera y ácida de maracuyá.',
            order_summary_title: 'Tu Pedido',
            order_total: 'Total',
            your_info_title: 'Tus datos',
            form_name: 'Nombre',
            form_contact_label: 'Email o Número de WhatsApp',
            form_contact_placeholder: 'Para el código de confirmación',
            form_submit_payment: 'Proceder al pago',
            reservation_title: 'Reservar una Mesa',
            form_phone: 'Teléfono',
            form_email: 'Email',
            form_guests: 'Número de personas',
            form_date: 'Fecha',
            form_time: 'Hora',
            form_placement: 'Preferencia de asiento',
            form_placement_any: 'Indiferente',
            form_placement_indoor: 'Interior',
            form_placement_terrace: 'Terraza',
            form_occasion: 'Ocasión (Opcional)',
            form_occasion_choose: '-- Elige una ocasión --',
            form_occasion_birthday: 'Cumpleaños',
            form_occasion_business: 'Comida de negocios',
            form_occasion_romantic: 'Cita romántica',
            form_occasion_other: 'Otro',
            form_special_requests: 'Solicitudes especiales (Opcional)',
            form_special_requests_placeholder: 'Ej: alergia al cacahuete, necesidad de una silla alta...',
            form_submit_reservation: 'Confirmar reserva',
            contact_title: 'Contacto y Acceso',
            contact_address: 'Dirección',
            contact_reservations_info: 'Reservas e Información',
            contact_phone: 'Teléfono',
            contact_hours: 'Horario de apertura',
            contact_hours_days: 'Martes - Domingo',
            newsletter_title: 'Mantente Informado',
            newsletter_subtitle: 'Suscríbete a nuestro boletín para recibir nuestras últimas noticias y ofertas especiales.',
            newsletter_placeholder: 'Tu dirección de correo electrónico',
            newsletter_subscribe: 'Suscribirse',
            footer_quick_links: 'Enlaces Rápidos',
            footer_contact_us: 'Contáctanos',
            footer_opening_hours: 'Horario de apertura',
            footer_closed: 'Cerrado los Lunes',
            footer_rights: 'Todos los derechos reservados.',
        }
    };

    const langSwitcher = document.getElementById('lang-switcher');
    const currentLangSpan = document.getElementById('current-lang');

    const switchLanguage = (lang) => {
        if (!translations[lang]) return;

        document.documentElement.lang = lang;
        localStorage.setItem('saborDoBrasilLang', lang);
        currentLangSpan.textContent = lang.toUpperCase();

        document.querySelectorAll('[data-key]').forEach(element => {
            const key = element.getAttribute('data-key');
            if (translations[lang][key]) {
                element.textContent = translations[lang][key];
            }
        });
        
        document.querySelectorAll('[data-placeholder-key]').forEach(element => {
            const key = element.getAttribute('data-placeholder-key');
            if (translations[lang][key]) {
                element.placeholder = translations[lang][key];
            }
        });
        
        document.querySelectorAll('[data-total-key]').forEach(element => {
            const key = element.getAttribute('data-total-key');
            if (element.innerHTML.includes('€')) {
                 const price = element.innerHTML.match(/(\d+\.\d+)/)[0];
                 element.innerHTML = `<h3>${translations[lang][key]}: ${price}€</h3>`;
            }
        });
    };

    langSwitcher.addEventListener('click', (e) => {
        if (e.target.matches('.lang-dropdown a')) {
            e.preventDefault();
            const lang = e.target.getAttribute('data-lang');
            switchLanguage(lang);
        }
    });

    // Load saved language
    const savedLang = localStorage.getItem('saborDoBrasilLang') || 'fr';
    switchLanguage(savedLang);

    // --- DATE & TIME ---
    const dateTimeContainer = document.getElementById('date-time');
    function updateDateTime() {
        const now = new Date();
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
        let locale = 'fr-FR';
        const currentLang = localStorage.getItem('saborDoBrasilLang') || 'fr';
        if (currentLang === 'pt') locale = 'pt-BR';
        if (currentLang === 'en') locale = 'en-US';
        if (currentLang === 'es') locale = 'es-ES';
        if (currentLang === 'ht') locale = 'fr-FR'; // Haitian Creole uses similar format

        dateTimeContainer.textContent = now.toLocaleDateString(locale, options);
    }
    setInterval(updateDateTime, 1000);
    updateDateTime();

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if(targetElement) {
                // Adjust for fixed header height
                const headerOffset = document.querySelector('header').offsetHeight + document.querySelector('#scrolling-text-bar').offsetHeight;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                     top: offsetPosition,
                     behavior: "smooth"
                });
            }
        });
    });

    // --- HAMBURGER MENU ---
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const mainNav = document.getElementById('main-nav');
    const navLinks = document.querySelectorAll('#main-nav a');

    hamburgerBtn.addEventListener('click', () => {
        mainNav.classList.toggle('active');
        const isExpanded = mainNav.classList.contains('active');
        hamburgerBtn.setAttribute('aria-expanded', isExpanded);
        // Toggle icon
        if (isExpanded) {
            hamburgerBtn.innerHTML = '<i class="fas fa-times"></i>';
        } else {
            hamburgerBtn.innerHTML = '<i class="fas fa-bars"></i>';
        }
    });

    // Close menu when a link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (mainNav.classList.contains('active')) {
                mainNav.classList.remove('active');
                hamburgerBtn.setAttribute('aria-expanded', 'false');
                hamburgerBtn.innerHTML = '<i class="fas fa-bars"></i>';
            }
        });
    });

    // Reservation form handler
    const reservationForm = document.getElementById('reservation-form');
    const confirmationMessage = document.getElementById('confirmation-message');

    if (reservationForm) {
        reservationForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const date = document.getElementById('date').value;
            const time = document.getElementById('time').value;
            const guests = document.getElementById('guests').value;
            const placement = document.querySelector('input[name="placement"]:checked').value;
            const occasion = document.getElementById('occasion').value;
            const requests = document.getElementById('requests').value;

            // Simple validation
            if (!name || !email || !date || !time || !guests) {
                showMessage('Veuillez remplir tous les champs obligatoires.', 'error');
                return;
            }

            // In a real application, you would send this data to a server.
            // Here, we just show a confirmation message.
            let message = `Merci ${name} ! Votre table pour ${guests} personnes est pré-réservée pour le ${date} à ${time}.`;
            message += `\nPlacement souhaité : ${placement}.`;
            if (occasion) {
                message += `\nOccasion : ${occasion}.`;
            }
            if (requests) {
                message += `\nDemandes spéciales : ${requests}.`;
            }
            message += `\nNous vous enverrons une confirmation à l'adresse ${email} bientôt.`;
            
            showMessage(message, 'success');

            reservationForm.reset();
        });
    }

    function showMessage(message, type) {
        confirmationMessage.textContent = message;
        confirmationMessage.className = type; // 'success' or 'error'
        confirmationMessage.style.whiteSpace = 'pre-wrap';
        confirmationMessage.style.display = 'block';

        setTimeout(() => {
            confirmationMessage.style.display = 'none';
        }, 10000); // Hide after 10 seconds
    }
    
    // Set min date for date input to today
    const dateInput = document.getElementById('date');
    if(dateInput) {
        const today = new Date().toISOString().split('T')[0];
        dateInput.setAttribute('min', today);
    }

    // --- ORDERING SYSTEM ---

    const cart = [];
    let confirmationCode = '';

    const orderSummarySection = document.getElementById('order-summary');
    const cartItemsContainer = document.getElementById('cart-items');
    const cartTotalContainer = document.getElementById('cart-total');
    const orderForm = document.getElementById('order-form');
    const modalOverlay = document.getElementById('modal-overlay');
    const modalBody = document.getElementById('modal-body');
    const modalClose = document.getElementById('modal-close');

    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', (e) => {
            const menuItem = e.target.closest('li');
            const id = menuItem.dataset.id;
            const name = menuItem.dataset.name;
            const price = parseFloat(menuItem.dataset.price);
            
            addToCart({ id, name, price });
        });
    });

    function addToCart(item) {
        const existingItem = cart.find(cartItem => cartItem.id === item.id);
        if (existingItem) {
            existingItem.quantity++;
        } else {
            cart.push({ ...item, quantity: 1 });
        }
        renderCart();
    }

    function renderCart() {
        if (cart.length === 0) {
            orderSummarySection.style.display = 'none';
            return;
        }

        orderSummarySection.style.display = 'block';
        cartItemsContainer.innerHTML = '';
        let total = 0;

        cart.forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.classList.add('cart-item');
            itemElement.innerHTML = `
                <span>${item.name}</span>
                <div class="quantity-controls">
                    <button class="quantity-btn" data-id="${item.id}" data-action="decrease">-</button>
                    <span>${item.quantity}</span>
                    <button class="quantity-btn" data-id="${item.id}" data-action="increase">+</button>
                </div>
                <span>${(item.price * item.quantity).toFixed(2)}€</span>
                <button class="remove-item" data-id="${item.id}">&times;</button>
            `;
            cartItemsContainer.appendChild(itemElement);
            total += item.price * item.quantity;
        });

        const lang = localStorage.getItem('saborDoBrasilLang') || 'fr';
        const totalText = translations[lang].order_total || 'Total';
        cartTotalContainer.innerHTML = `<h3>${totalText}: ${total.toFixed(2)}€</h3>`;
        addCartEventListeners();
        orderSummarySection.scrollIntoView({ behavior: 'smooth' });
    }
    
    function addCartEventListeners() {
        document.querySelectorAll('.quantity-btn').forEach(button => {
            button.addEventListener('click', handleQuantityChange);
        });
        document.querySelectorAll('.remove-item').forEach(button => {
            button.addEventListener('click', handleRemoveItem);
        });
    }

    function handleQuantityChange(e) {
        const id = e.target.dataset.id;
        const action = e.target.dataset.action;
        const item = cart.find(cartItem => cartItem.id === id);

        if (action === 'increase') {
            item.quantity++;
        } else if (action === 'decrease') {
            item.quantity--;
            if (item.quantity === 0) {
                const itemIndex = cart.findIndex(cartItem => cartItem.id === id);
                cart.splice(itemIndex, 1);
            }
        }
        renderCart();
    }
    
    function handleRemoveItem(e) {
        const id = e.target.dataset.id;
        const itemIndex = cart.findIndex(cartItem => cartItem.id === id);
        if (itemIndex > -1) {
            cart.splice(itemIndex, 1);
        }
        renderCart();
    }

    orderForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('order-name').value;
        const contact = document.getElementById('order-contact').value;

        if (!name || !contact) {
            alert('Veuillez remplir votre nom et votre contact.');
            return;
        }
        
        showPaymentModal();
    });
    
    // --- Modal Logic with Event Delegation ---

    modalBody.addEventListener('submit', (e) => {
        e.preventDefault();

        // Handle payment form submission
        if (e.target.id === 'payment-form') {
            showConfirmationCodeStep();
        }

        // Handle code confirmation form submission
        if (e.target.id === 'code-form') {
            const inputCode = document.getElementById('code-input').value;
            if (inputCode === confirmationCode) {
                showFinalConfirmation();
            } else {
                const errorDiv = document.getElementById('code-error');
                if (errorDiv) errorDiv.style.display = 'block';
            }
        }
    });

    function showPaymentModal() {
        modalBody.innerHTML = `
            <h2>Simulation de Paiement</h2>
            <p>Ceci est une démo. Aucun paiement réel ne sera effectué.</p>
            <form id="payment-form">
                <div class="form-group">
                    <label>Numéro de carte</label>
                    <input type="text" value="4242 4242 4242 4242" disabled>
                </div>
                <div class="form-group">
                    <label>Date d'expiration</label>
                    <input type="text" value="12/26" disabled>
                </div>
                <div class="form-group">
                    <label>CVC</label>
                    <input type="text" value="123" disabled>
                </div>
                <button type="submit" class="cta-button">Payer ${cart.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2)}€</button>
            </form>
        `;
        modalOverlay.classList.remove('modal-hidden');
    }

    function showConfirmationCodeStep() {
        confirmationCode = Math.floor(1000 + Math.random() * 9000).toString();
        
        modalBody.innerHTML = `
            <h2>Confirmez votre commande</h2>
            <p>Un code de confirmation vous a été envoyé.</p>
            <p class="demo-code">Pour la démo, votre code est : <strong>${confirmationCode}</strong></p>
            <form id="code-form">
                <div class="form-group">
                    <label for="code-input">Entrez le code à 4 chiffres</label>
                    <input type="text" id="code-input" required maxlength="4" pattern="[0-9]{4}" inputmode="numeric">
                </div>
                 <button type="submit" class="cta-button">Confirmer la commande</button>
            </form>
            <div id="code-error" style="color: red; margin-top: 1rem; display: none;">Code incorrect.</div>
        `;
    }

    function showFinalConfirmation() {
        const name = document.getElementById('order-name').value;
        modalBody.innerHTML = `
            <h2>Commande Confirmée !</h2>
            <p>Merci, ${name} ! Votre commande a été reçue et est en cours de préparation.</p>
            <p>Vous recevrez une notification lorsque votre commande sera prête.</p>
        `;
        // Reset cart and form
        cart.length = 0;
        renderCart();
        orderForm.reset();
    }

    modalClose.addEventListener('click', () => {
        modalOverlay.classList.add('modal-hidden');
    });

    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) {
            modalOverlay.classList.add('modal-hidden');
        }
    });

    // --- NEWSLETTER ---
    const newsletterForm = document.getElementById('newsletter-form');
    const newsletterEmail = document.getElementById('newsletter-email');
    const newsletterConfirmation = document.getElementById('newsletter-confirmation');

    if(newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = newsletterEmail.value;

            if (email) {
                newsletterConfirmation.textContent = `Merci ! L'adresse ${email} a bien été inscrite à notre newsletter.`;
                newsletterConfirmation.style.color = 'var(--primary-color)';
                newsletterConfirmation.style.display = 'block';
                newsletterEmail.value = '';
                
                setTimeout(() => {
                    newsletterConfirmation.style.display = 'none';
                }, 5000);
            }
        });
    }

});