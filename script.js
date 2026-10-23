// Language Change Function
function changeLanguage(language, action) {
    // Update text content
    if (language === 'en') {
        document.getElementById('akcijaText').innerText = 'Special Offers';
        document.getElementById('aperitiviText').innerText = 'Aperitifs and Liqueurs';
        document.getElementById('likeriText').innerText = 'Liqueurs';
        document.getElementById('rakijeText').innerText = 'Brandies';
        document.getElementById('vinaText').innerText = 'Wines';
        document.getElementById('pivaText').innerText = 'Beers';
        document.getElementById('tocenopivoText').innerText = 'Draft Beer';
        document.getElementById('toplinapiciText').innerText = 'Hot Drinks';
        document.getElementById('sokoviText').innerText = 'Juices';
        document.getElementById('energetskaText').innerText = 'Energy Drinks';
        document.getElementById('cedjenisokoviText').innerText = 'Fresh Juices';
        document.getElementById('vodaText').innerText = 'Water';
        document.getElementById('viskiText').innerText = 'Whiskey';
        document.getElementById('kokteliText').innerText = 'Cocktails';
        document.getElementById('bezalkoholniKokteliText').innerText = 'Non-Alcoholic Cocktails';
        document.getElementById('grickaliceText').innerText = 'Snacks';
        document.getElementById('digmeni').innerText = 'Digital Menu';
        document.getElementById('napomena').innerHTML = '<strong>Note:</strong> <em>Prices are in Serbian Dinars (RSD).</em>';
        document.querySelector('.copyright').innerHTML = '&copy; 2026 Cafe Kulturica - Your favorite spot.';
        document.title = 'Cafe Kulturica - Digital Menu';
    } else if (language === 'sr') {
        document.getElementById('akcijaText').innerText = 'Akcija';
        document.getElementById('aperitiviText').innerText = 'Žestoka pića';
        document.getElementById('likeriText').innerText = 'Likeri';
        document.getElementById('rakijeText').innerText = 'Rakije';
        document.getElementById('vinaText').innerText = 'Vina';
        document.getElementById('pivaText').innerText = 'Piva';
        document.getElementById('tocenopivoText').innerText = 'Točeno pivo';
        document.getElementById('toplinapiciText').innerText = 'Topli napici';
        document.getElementById('sokoviText').innerText = 'Sokovi';
        document.getElementById('energetskaText').innerText = 'Energetska pića';
        document.getElementById('cedjenisokoviText').innerText = 'Ceđeni sokovi';
        document.getElementById('vodaText').innerText = 'Voda';
        document.getElementById('viskiText').innerText = 'Viski';
        document.getElementById('kokteliText').innerText = 'Kokteli';
        document.getElementById('bezalkoholniKokteliText').innerText = 'Bezalkoholni kokteli';
        document.getElementById('grickaliceText').innerText = 'Grickalice';
        document.getElementById('digmeni').innerText = 'Digitalni Meni';
        document.getElementById('napomena').innerHTML = '<strong>Napomena:</strong> <em>Cene su izražene u dinarima (RSD).</em>';
        document.querySelector('.copyright').innerHTML = '&copy; 2026 Kafe Kulturica - Vaša omiljena lokacija.';
        document.title = 'Kafe Kulturica - Digitalni Meni';
    }

    // Update active button state
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-lang') === language) {
            btn.classList.add('active');
        }
    });

    localStorage.setItem('selectedLanguage', language);
    
    // Refresh menu items without page reload
    if (action === 'promeni') {
        // Close all open submenus
        document.querySelectorAll('.menu-item.active').forEach(item => {
            item.classList.remove('active');
            item.querySelector('.submenu').style.maxHeight = '0';
        });
    }
}

// Load saved language on page load
document.addEventListener('DOMContentLoaded', function() {
    const savedLanguage = localStorage.getItem('selectedLanguage');
    if (savedLanguage) {
        changeLanguage(savedLanguage, 'nista');
    }
});

// Menu Data

const menuData = {
  "categories": [
    {"name":"Akcija","items":[
      {"name":"Espreso + Cedevita","price":"340 RSD"},
      {"name":"Espreso + Starogradska šljiva","price":"340 RSD"},
      {"name":"Espreso + medovača","price":"340 RSD"}
    ]},
    {"name":"Special Offers","items":[
      {"name":"Espresso + Cedevita","price":"340 RSD"},
      {"name":"Espresso + Starogradska Plum","price":"340 RSD"},
      {"name":"Espresso + Honey Brandy","price":"340 RSD"}
    ]},
    {"name":"Žestoka pića","items":[
      {"name":"Tequila 0,03l","price":"290 RSD"},
      {"name":"Finlandia vodka 0,03l","price":"270 RSD"},
      {"name":"Vinjak 5 0,03l","price":"280 RSD"},
      {"name":"Starogradski vinjak 0,03l","price":"250 RSD"},
      {"name":"Bacardi rum 0,03l","price":"280 RSD"},
      {"name":"Jägermeister 0,03l","price":"290 RSD"},
      {"name":"Pelinkovac 0,05l","price":"220 RSD"},
      {"name":"Džin Zbir 0,03l","price":"260 RSD"},
      {"name":"Džin Rubin 0,03l","price":"220 RSD"},
      {"name":"Štok 0,03l","price":"230 RSD"}
    ]},
    {"name":"Aperitifs and Liqueurs","items":[
      {"name":"Tequila 0.03l","price":"290 RSD"},
      {"name":"Finlandia Vodka 0.03l","price":"270 RSD"},
      {"name":"Brandy 5 0.03l","price":"280 RSD"},
      {"name":"Starogradski Brandy 0.03l","price":"250 RSD"},
      {"name":"Bacardi Rum 0.03l","price":"280 RSD"},
      {"name":"Jägermeister 0.03l","price":"290 RSD"},
      {"name":"Pelinkovac 0.05l","price":"220 RSD"},
      {"name":"Gin Zbir 0.03l","price":"260 RSD"},
      {"name":"Gin Rubin 0.03l","price":"220 RSD"},
      {"name":"Štok 0.03l","price":"230 RSD"}
    ]},
    {"name":"Likeri","items":[
      {"name":"Starogradska Malina 0,05l","price":"250 RSD"},
      {"name":"Starogradska Višnja 0,05l","price":"290 RSD"},
      {"name":"Starogradska Kalvados 0,03l","price":"240 RSD"},
      {"name":"Baileys 0,03l","price":"310 RSD"},
      {"name":"Medovača 0,03l","price":"230 RSD"}
    ]},
    {"name":"Liqueurs","items":[
      {"name":"Starogradska Raspberry 0.05l","price":"250 RSD"},
      {"name":"Starogradska Sour Cherry 0.05l","price":"290 RSD"},
      {"name":"Starogradska Calvados 0.03l","price":"240 RSD"},
      {"name":"Baileys 0.03l","price":"310 RSD"},
      {"name":"Honey Brandy 0.03l","price":"230 RSD"}
    ]},
    {"name":"Rakije","items":[
      {"name":"Starogradska šljiva 0,03l","price":"240 RSD"},
      {"name":"Starogradska dunja 0,03l","price":"260 RSD"},
      {"name":"Starogradska dunja Barrique 0,03l","price":"280 RSD"},
      {"name":"Starogradska kajsija 0,03l","price":"260 RSD"},
      {"name":"Starogradska jabuka 0,03l","price":"210 RSD"},
      {"name":"Starogradska loza 0,03l","price":"210 RSD"},
      {"name":"Starogradska viljamovka 0,03l","price":"260 RSD"},
      {"name":"Kovilj šljiva 0,03l","price":"330 RSD"},
      {"name":"Kovilj dunja 0,03l","price":"330 RSD"},
      {"name":"Jezdić šljiva 0,03l","price":"320 RSD"},
      {"name":"Jezdić dunja 0,03l","price":"320 RSD"},
      {"name":"Jelički dukat šljiva 0,03l","price":"470 RSD"},
      {"name":"Viljamovka Takovo 0,03l","price":"290 RSD"}
    ]},
    {"name":"Brandies","items":[
      {"name":"Starogradska Plum 0.03l","price":"240 RSD"},
      {"name":"Starogradska Quince 0.03l","price":"260 RSD"},
      {"name":"Starogradska Quince Barrique 0.03l","price":"280 RSD"},
      {"name":"Starogradska Apricot 0.03l","price":"260 RSD"},
      {"name":"Starogradska Apple 0.03l","price":"210 RSD"},
      {"name":"Starogradska Grape 0.03l","price":"210 RSD"},
      {"name":"Starogradska Williams Pear 0.03l","price":"260 RSD"},
      {"name":"Kovilj Plum 0.03l","price":"330 RSD"},
      {"name":"Kovilj Quince 0.03l","price":"330 RSD"},
      {"name":"Jezdić Plum 0.03l","price":"320 RSD"},
      {"name":"Jezdić Quince 0.03l","price":"320 RSD"},
      {"name":"Jelički Dukat Plum 0.03l","price":"470 RSD"},
      {"name":"Takovo Williams Pear 0.03l","price":"290 RSD"}
    ]},
    {"name":"Vina","items":[
      {"name":"Kupinovo vino 0,187l","price":"330 RSD"},
      {"name":"Sangrija 0,187l","price":"320 RSD"},
      {"name":"Cabernet Sauvignon 0,187l","price":"320 RSD"},
      {"name":"Chardonnay 0,187l","price":"270 RSD"},
      {"name":"Vino belo 0,1l","price":"170 RSD"},
      {"name":"Vino belo 0,5l","price":"850 RSD"},
      {"name":"Vino crno 0,1l","price":"170 RSD"},
      {"name":"Vino crno 0,5l","price":"850 RSD"},
      {"name":"Rose 0,1l","price":"170 RSD"},
      {"name":"Rose 0,5l","price":"850 RSD"},
      {"name":"Bermet beli 0,1l","price":"280 RSD"},
      {"name":"Bermet crni 0,1l","price":"280 RSD"},
      {"name":"Vermut 0,1l","price":"210 RSD"},
      {"name":"Špricer 0,4l","price":"240 RSD"},
      {"name":"Bambus 0,4l","price":"240 RSD"}
    ]},
    {"name":"Wines","items":[
      {"name":"Blackberry Wine 0.187l","price":"330 RSD"},
      {"name":"Sangria 0.187l","price":"320 RSD"},
      {"name":"Cabernet Sauvignon 0.187l","price":"320 RSD"},
      {"name":"Chardonnay 0.187l","price":"270 RSD"},
      {"name":"White Wine 0.1l","price":"170 RSD"},
      {"name":"White Wine 0.5l","price":"850 RSD"},
      {"name":"Red Wine 0.1l","price":"170 RSD"},
      {"name":"Red Wine 0.5l","price":"850 RSD"},
      {"name":"Rosé 0.1l","price":"170 RSD"},
      {"name":"Rosé 0.5l","price":"850 RSD"},
      {"name":"White Bermet 0.1l","price":"280 RSD"},
      {"name":"Red Bermet 0.1l","price":"280 RSD"},
      {"name":"Vermouth 0.1l","price":"210 RSD"},
      {"name":"Spritzer 0.4l","price":"240 RSD"},
      {"name":"Bambus 0.4l","price":"240 RSD"}
    ]},
    {"name":"Piva","items":[
      {"name":"Heineken 0,25l","price":"340 RSD"},
      {"name":"Bavaria 0,25l","price":"340 RSD"},
      {"name":"Tuborg 0,33l","price":"260 RSD"},
      {"name":"Lav premium 0,33l","price":"240 RSD"},
      {"name":"Jelen 0,33l","price":"260 RSD"},
      {"name":"Somersby 0,33l","price":"310 RSD"}
    ]},
    {"name":"Beers","items":[
      {"name":"Heineken 0.25l","price":"340 RSD"},
      {"name":"Bavaria 0.25l","price":"340 RSD"},
      {"name":"Tuborg 0.33l","price":"260 RSD"},
      {"name":"Lav Premium 0.33l","price":"240 RSD"},
      {"name":"Jelen 0.33l","price":"260 RSD"},
      {"name":"Somersby 0.33l","price":"310 RSD"}
    ]},
    {"name":"Točeno pivo","items":[
      {"name":"Juice IPA 0,33l","price":"320 RSD"},
      {"name":"Juice IPA 0,5l","price":"370 RSD"},
      {"name":"Beogradski fantom 0,33l","price":"300 RSD"},
      {"name":"Beogradski fantom 0,5l","price":"350 RSD"},
      {"name":"Memento Mori 0,33l","price":"300 RSD"},
      {"name":"Memento Mori 0,5l","price":"350 RSD"},
      {"name":"Wartburg 0,33l","price":"220 RSD"},
      {"name":"Wartburg 0,5l","price":"270 RSD"},
      {"name":"Akira 0,33l","price":"300 RSD"},
      {"name":"Akira 0,5l","price":"350 RSD"},
      {"name":"Kulturica specijal 0,33l","price":"210 RSD"},
      {"name":"Kulturica specijal 0,5l","price":"260 RSD"}
    ]},
    {"name":"Draft Beer","items":[
      {"name":"Juice IPA 0.33l","price":"320 RSD"},
      {"name":"Juice IPA 0.5l","price":"370 RSD"},
      {"name":"Belgrade Phantom 0.33l","price":"300 RSD"},
      {"name":"Belgrade Phantom 0.5l","price":"350 RSD"},
      {"name":"Memento Mori 0.33l","price":"300 RSD"},
      {"name":"Memento Mori 0.5l","price":"350 RSD"},
      {"name":"Wartburg 0.33l","price":"220 RSD"},
      {"name":"Wartburg 0.5l","price":"270 RSD"},
      {"name":"Akira 0.33l","price":"300 RSD"},
      {"name":"Akira 0.5l","price":"350 RSD"},
      {"name":"Kulturica Special 0.33l","price":"210 RSD"},
      {"name":"Kulturica Special 0.5l","price":"260 RSD"}
    ]},
    {"name":"Topli napici","items":[
      {"name":"Espresso","price":"180 RSD"},
      {"name":"Espresso sa mlekom","price":"190 RSD"},
      {"name":"Espresso sa sojinim mlekom","price":"220 RSD"},
      {"name":"Espresso sa vanilom","price":"220 RSD"},
      {"name":"Espresso karamela","price":"220 RSD"},
      {"name":"Domaća kafa","price":"140 RSD"},
      {"name":"Nes kafa","price":"210 RSD"},
      {"name":"Nes sa sojinim mlekom","price":"240 RSD"},
      {"name":"Caffe latte","price":"230 RSD"},
      {"name":"Cappuccino","price":"200 RSD"},
      {"name":"Topla čokolada","price":"230 RSD"},
      {"name":"Nesquik","price":"190 RSD"},
      {"name":"Plazma šejk","price":"290 RSD"},
      {"name":"Mleko","price":"140 RSD"},
      {"name":"Premium čaj","price":"210 RSD"}
    ]},
    {"name":"Hot Drinks","items":[
      {"name":"Espresso","price":"180 RSD"},
      {"name":"Espresso with Milk","price":"190 RSD"},
      {"name":"Espresso with Soy Milk","price":"220 RSD"},
      {"name":"Espresso with Vanilla","price":"220 RSD"},
      {"name":"Espresso Caramel","price":"220 RSD"},
      {"name":"Turkish Coffee","price":"140 RSD"},
      {"name":"Instant Coffee","price":"210 RSD"},
      {"name":"Instant Coffee with Soy Milk","price":"240 RSD"},
      {"name":"Caffe Latte","price":"230 RSD"},
      {"name":"Cappuccino","price":"200 RSD"},
      {"name":"Hot Chocolate","price":"230 RSD"},
      {"name":"Nesquik","price":"190 RSD"},
      {"name":"Plazma Shake","price":"290 RSD"},
      {"name":"Milk","price":"140 RSD"},
      {"name":"Premium Tea","price":"210 RSD"}
    ]},
    {"name":"Sokovi","items":[
      {"name":"Coca Cola 0,25l","price":"240 RSD"},
      {"name":"Coca Cola zero 0,25l","price":"250 RSD"},
      {"name":"Schweppes Bitter Lemon 0,25l","price":"240 RSD"},
      {"name":"Schweppes Tonic 0,25l","price":"240 RSD"},
      {"name":"Schweppes Tangerina 0,25l","price":"240 RSD"},
      {"name":"Schweppes Grejp 0,25l","price":"240 RSD"},
      {"name":"Fanta 0,25l","price":"240 RSD"},
      {"name":"Sprite 0,25l","price":"240 RSD"},
      {"name":"Cocta 0,275l","price":"240 RSD"},
      {"name":"Orangina 0,25l","price":"310 RSD"},
      {"name":"Jagoda 0,2l","price":"240 RSD"},
      {"name":"Pomorandža 0,2l","price":"240 RSD"},
      {"name":"Jabuka 0,2l","price":"240 RSD"},
      {"name":"Breskva 0,2l","price":"240 RSD"},
      {"name":"Borovnica 0,2l","price":"240 RSD"},
      {"name":"Cedevita 0,2l","price":"220 RSD"},
      {"name":"Multi Sola 0,5l","price":"240 RSD"},
      {"name":"Sola Ice Tea 0,5l","price":"240 RSD"}
    ]},
    {"name":"Juices","items":[
      {"name":"Coca Cola 0.25l","price":"240 RSD"},
      {"name":"Coca Cola Zero 0.25l","price":"250 RSD"},
      {"name":"Schweppes Bitter Lemon 0.25l","price":"240 RSD"},
      {"name":"Schweppes Tonic 0.25l","price":"240 RSD"},
      {"name":"Schweppes Tangerine 0.25l","price":"240 RSD"},
      {"name":"Schweppes Grapefruit 0.25l","price":"240 RSD"},
      {"name":"Fanta 0.25l","price":"240 RSD"},
      {"name":"Sprite 0.25l","price":"240 RSD"},
      {"name":"Cocta 0.275l","price":"240 RSD"},
      {"name":"Orangina 0.25l","price":"310 RSD"},
      {"name":"Strawberry Juice 0.2l","price":"240 RSD"},
      {"name":"Orange Juice 0.2l","price":"240 RSD"},
      {"name":"Apple Juice 0.2l","price":"240 RSD"},
      {"name":"Peach Juice 0.2l","price":"240 RSD"},
      {"name":"Blueberry Juice 0.2l","price":"240 RSD"},
      {"name":"Cedevita 0.2l","price":"220 RSD"},
      {"name":"Multi Sola 0.5l","price":"240 RSD"},
      {"name":"Sola Ice Tea 0.5l","price":"240 RSD"}
    ]},
    {"name":"Energetska pića","items":[
      {"name":"Red Bull 0,25l","price":"310 RSD"},
      {"name":"Ultra 0,25l","price":"210 RSD"}
    ]},
    {"name":"Energy Drinks","items":[
      {"name":"Red Bull 0.25l","price":"310 RSD"},
      {"name":"Ultra 0.25l","price":"210 RSD"}
    ]},
    {"name":"Ceđeni sokovi","items":[
      {"name":"Limunada 0,3l","price":"210 RSD"},
      {"name":"Ceđena pomorandža 0,3l","price":"310 RSD"},
      {"name":"Ceđeni MIX 0,3l","price":"320 RSD"}
    ]},
    {"name":"Fresh Juices","items":[
      {"name":"Lemonade 0.3l","price":"210 RSD"},
      {"name":"Fresh Orange 0.3l","price":"310 RSD"},
      {"name":"Fresh MIX 0.3l","price":"320 RSD"}
    ]},
    {"name":"Voda","items":[
      {"name":"Rosa negazirana 0,33l","price":"170 RSD"},
      {"name":"Rosa gazirana 0,33l","price":"180 RSD"},
      {"name":"Rosa negazirana 0,75l","price":"250 RSD"},
      {"name":"Rosa gazirana 0,75l","price":"260 RSD"},
      {"name":"Limunska trava 0,33l","price":"240 RSD"},
      {"name":"Soda 0,2l","price":"50 RSD"},
      {"name":"Soda 1l","price":"220 RSD"}
    ]},
    {"name":"Water","items":[
      {"name":"Rosa Still 0.33l","price":"170 RSD"},
      {"name":"Rosa Sparkling 0.33l","price":"180 RSD"},
      {"name":"Rosa Still 0.75l","price":"250 RSD"},
      {"name":"Rosa Sparkling 0.75l","price":"260 RSD"},
      {"name":"Lemongrass Water 0.33l","price":"240 RSD"},
      {"name":"Soda Water 0.2l","price":"50 RSD"},
      {"name":"Soda Water 1l","price":"220 RSD"}
    ]},
    {"name":"Viski","items":[
      {"name":"Jack Daniel's 0,03l","price":"410 RSD"},
      {"name":"Jameson 0,03l","price":"370 RSD"},
      {"name":"Chivas 0,03l","price":"480 RSD"}
    ]},
    {"name":"Whiskey","items":[
      {"name":"Jack Daniel's 0.03l","price":"410 RSD"},
      {"name":"Jameson 0.03l","price":"370 RSD"},
      {"name":"Chivas 0.03l","price":"480 RSD"}
    ]},
    {"name":"Kokteli","items":[
      {"name":"Džin tonik","desc":"Džin · Tonik · Limeta","price":"410 RSD"},
      {"name":"Mojito","desc":"Beli rum · Nana · Limeta · Smeđi šećer · Soda","price":"440 RSD"},
      {"name":"Tekila sunrise","desc":"Tekila · Sok od pomorandže · Grenadin","price":"460 RSD"},
      {"name":"Cuba libre","desc":"Beli rum · Coca-Cola · Limeta","price":"410 RSD"},
      {"name":"Skinny Bitch","desc":"Vodka · Kisela voda · Limeta","price":"420 RSD"},
      {"name":"Blue Lagoon","desc":"Vodka · Blue Curaçao · Sprite · Limeta","price":"460 RSD"},
      {"name":"Aperol spritz","desc":"Aperol · Proseko · Soda · Pomorandža","price":"440 RSD"}
    ]},
    {"name":"Cocktails","items":[
      {"name":"Gin and Tonic","desc":"Gin · Tonic · Lime","price":"410 RSD"},
      {"name":"Mojito","desc":"White rum · Mint · Lime · Brown sugar · Soda","price":"440 RSD"},
      {"name":"Tequila Sunrise","desc":"Tequila · Orange juice · Grenadine","price":"460 RSD"},
      {"name":"Cuba Libre","desc":"White rum · Coca-Cola · Lime","price":"410 RSD"},
      {"name":"Skinny Bitch","desc":"Vodka · Soda water · Lime","price":"420 RSD"},
      {"name":"Blue Lagoon","desc":"Vodka · Blue Curaçao · Sprite · Lime","price":"460 RSD"},
      {"name":"Aperol Spritz","desc":"Aperol · Prosecco · Soda · Orange","price":"440 RSD"}
    ]},
    {"name":"Bezalkoholni kokteli","items":[
      {"name":"Virgin Mojito","desc":"Nana · Limeta · Smeđi šećer · Soda","price":"360 RSD"},
      {"name":"San Francisco","desc":"Pomorandža · Ananas · Breskva · Grenadin","price":"360 RSD"},
      {"name":"Blue Lemon","desc":"Blue Curaçao sirup · Sprite · Limeta","price":"370 RSD"},
      {"name":"Tropical Sunset","desc":"Ananas · Pomorandža · Grenadin","price":"360 RSD"},
      {"name":"Green Fresh","desc":"Jabuka · Nana · Limeta · Soda","price":"360 RSD"},
      {"name":"Cherry Fizz","desc":"Sirup od višnje · Limun · Kisela voda","price":"340 RSD"}
    ]},
    {"name":"Non-Alcoholic Cocktails","items":[
      {"name":"Virgin Mojito","desc":"Mint · Lime · Brown sugar · Soda","price":"360 RSD"},
      {"name":"San Francisco","desc":"Orange · Pineapple · Peach · Grenadine","price":"360 RSD"},
      {"name":"Blue Lemon","desc":"Blue Curaçao syrup · Sprite · Lime","price":"370 RSD"},
      {"name":"Tropical Sunset","desc":"Pineapple · Orange · Grenadine","price":"360 RSD"},
      {"name":"Green Fresh","desc":"Apple · Mint · Lime · Soda","price":"360 RSD"},
      {"name":"Cherry Fizz","desc":"Cherry syrup · Lemon · Soda water","price":"340 RSD"}
    ]},
    {"name":"Grickalice","items":[
      {"name":"Kikiriki slani","price":"270 RSD"},
      {"name":"Kikiriki Sweet Chilli","price":"490 RSD"}
    ]},
    {"name":"Snacks","items":[
      {"name":"Salted Peanuts","price":"270 RSD"},
      {"name":"Sweet Chilli Peanuts","price":"490 RSD"}
    ]}
  ]
};

// Toggle Submenu Function
function toggleSubMenu(menuItem) {
    const submenu = menuItem.querySelector('.submenu');
    const isActive = menuItem.classList.contains('active');

    // If clicking on already active menu, just close it
    if (isActive) {
        menuItem.classList.remove('active');
        submenu.style.maxHeight = '0';
        return;
    }

    // Find and close all other active menus first
    const activeMenus = document.querySelectorAll('.menu-item.active');
    
    // If there are active menus, close them first
    if (activeMenus.length > 0) {
        activeMenus.forEach(item => {
            item.classList.remove('active');
            item.querySelector('.submenu').style.maxHeight = '0';
        });
        
        // Wait for closing animation to complete, then open new menu
        setTimeout(() => {
            openMenu(menuItem, submenu);
        }, 300);
    } else {
        // No active menus, open immediately
        openMenu(menuItem, submenu);
    }
}

// Helper function to open menu and scroll
function openMenu(menuItem, submenu) {
    const categoryName = menuItem.querySelector('h2').textContent.trim();
    const category = menuData.categories.find(cat => cat.name === categoryName);

    if (category) {
        menuItem.classList.add('active');
        generateSubMenu(category, submenu);
        
        // Set max-height after content is generated
        setTimeout(() => {
            submenu.style.maxHeight = submenu.scrollHeight + 'px';
        }, 10);
        
        // Scroll to category header after opening animation starts
        setTimeout(() => {
            menuItem.scrollIntoView({ 
                behavior: 'smooth', 
                block: 'start'
            });
        }, 100);
    }
}

// Generate Submenu Function
function generateSubMenu(category, submenuContainer) {
    submenuContainer.innerHTML = '';

    category.items.forEach((item, index) => {
        const menuItemDetail = document.createElement('div');
        menuItemDetail.classList.add('menu-item-detail');
        
        // Add stagger animation
        menuItemDetail.style.animation = `fadeInUp 0.3s ease-out ${index * 0.03}s both`;

        const itemInfo = document.createElement('div');
        itemInfo.classList.add('menu-item-info');

        const itemName = document.createElement('p');
        itemName.classList.add('item');
        itemName.textContent = item.name;

        itemInfo.appendChild(itemName);

        if (item.desc) {
            const itemDesc = document.createElement('p');
            itemDesc.classList.add('item-desc');
            itemDesc.textContent = item.desc;
            itemInfo.appendChild(itemDesc);
        }

        const itemPrice = document.createElement('p');
        itemPrice.classList.add('item-price');
        itemPrice.textContent = item.price;

        menuItemDetail.appendChild(itemInfo);
        menuItemDetail.appendChild(itemPrice);

        submenuContainer.appendChild(menuItemDetail);
    });
}

// Copy WiFi Key Function
function copyWifiKey() {
    const wifiKey = document.getElementById('wifiKey').textContent;
    const language = localStorage.getItem('selectedLanguage') || 'sr';
    const message = language === 'en' ? 'Copied!' : 'Uspešno kopirano!';

    const showCopied = () => {
        toastr.success(message, '', {
            positionClass: 'toast-top-center',
            timeOut: 2000,
            closeButton: false,
            progressBar: true
        });
    };

    navigator.clipboard.writeText(wifiKey).then(showCopied).catch(() => {
        const textArea = document.createElement("textarea");
        textArea.value = wifiKey;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        showCopied();
    });
}



