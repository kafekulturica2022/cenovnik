// Language Change Function
function changeLanguage(language, action) {
    // Update text content
    if (language === 'en') {
        document.getElementById('aperitiviText').innerText = 'Aperitifs and Liqueurs';
        document.getElementById('rakijeText').innerText = 'Brandies';
        document.getElementById('vinaText').innerText = 'Wines';
        document.getElementById('pivaText').innerText = 'Beers';
        document.getElementById('tocenopivoText').innerText = 'Draft Beer';
        document.getElementById('toplinapiciText').innerText = 'Hot Drinks';
        document.getElementById('sokoviText').innerText = 'Juices';
        document.getElementById('cedjenisokoviText').innerText = 'Fresh Juices';
        document.getElementById('vodaText').innerText = 'Water';
        document.getElementById('viskiText').innerText = 'Whiskey';
        document.getElementById('kokteliText').innerText = 'Cocktails';
        document.getElementById('grickaliceText').innerText = 'Snacks';
        document.getElementById('digmeni').innerText = 'Digital Menu';
        document.getElementById('napomena').innerHTML = '<strong>Note:</strong> <em>Prices are in Serbian Dinars (RSD).</em>';
        document.querySelector('.copyright').innerHTML = '&copy; 2024 Cafe Kulturica - Your favorite spot.';
        document.title = 'Cafe Kulturica - Digital Menu';
    } else if (language === 'sr') {
        document.getElementById('aperitiviText').innerText = 'Žestoka pića';
        document.getElementById('rakijeText').innerText = 'Rakije';
        document.getElementById('vinaText').innerText = 'Vina';
        document.getElementById('pivaText').innerText = 'Piva';
        document.getElementById('tocenopivoText').innerText = 'Točeno pivo';
        document.getElementById('toplinapiciText').innerText = 'Topli Napici';
        document.getElementById('sokoviText').innerText = 'Sokovi';
        document.getElementById('cedjenisokoviText').innerText = 'Ceđeni sokovi';
        document.getElementById('vodaText').innerText = 'Voda';
        document.getElementById('viskiText').innerText = 'Viski';
        document.getElementById('kokteliText').innerText = 'Kokteli';
        document.getElementById('grickaliceText').innerText = 'Grickalice';
        document.getElementById('digmeni').innerText = 'Digitalni Meni';
        document.getElementById('napomena').innerHTML = '<strong>Napomena:</strong> <em>Cene su izražene u dinarima (RSD).</em>';
        document.querySelector('.copyright').innerHTML = '&copy; 2024 Kafe Kulturica - Vaša omiljena lokacija.';
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
    if (action === 'promeni') {
        location.reload();
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
        {
            "name": "Žestoka pića",
            "items": [
                { "name": "Tequila 0,03l", "price": "290 RSD" },
                { "name": "Finlandia vodka 0,03l", "price": "260 RSD" },
                { "name": "Vinjak 5 0,03l", "price": "260 RSD" },
                { "name": "Vinjak XO 0,03l", "price": "720 RSD" },
                { "name": "Bacardi rum 0,03l", "price": "280 RSD" },
                { "name": "Jägermeister 0,03l", "price": "290 RSD" },
                { "name": "Pelinkovac 0,03l", "price": "210 RSD" },
                { "name": "Džin Zbir 0,03l", "price": "240 RSD" }
            ]
        },
        {
            "name": "Aperitifs and Liqueurs",
            "items": [
                { "name": "Tequila 0.03l", "price": "290 RSD" },
                { "name": "Finlandia Vodka 0.03l", "price": "260 RSD" },
                { "name": "Brandy 5 0.03l", "price": "260 RSD" },
                { "name": "Brandy XO 0.03l", "price": "720 RSD" },
                { "name": "Bacardi Rum 0.03l", "price": "280 RSD" },
                { "name": "Jägermeister 0.03l", "price": "290 RSD" },
                { "name": "Pelinkovac 0.03l", "price": "210 RSD" },
                { "name": "Gin Zbir 0.03l", "price": "240 RSD" }
            ]
        },
        {
            "name": "Rakije",
            "items": [
                { "name": "Krstić šljiva 0,03l", "price": "210 RSD" },
                { "name": "Krstić kajsija 0,03l", "price": "220 RSD" },
                { "name": "Krstić loza 0,03l", "price": "190 RSD" },
                { "name": "Krstić dunja 0,03l", "price": "220 RSD" },
                { "name": "Krstić viljamovka 0,03l", "price": "220 RSD" },
                { "name": "Krstić jabuka 0,03l", "price": "190 RSD" },
                { "name": "Krstić malina 0,03l", "price": "210 RSD" },
                { "name": "Krstić višnja 0,03l", "price": "210 RSD" },
                { "name": "Kovilj dunja 0,03l", "price": "320 RSD" },
                { "name": "Kovilj šljiva 0,03l", "price": "310 RSD" },
                { "name": "Jelički dukat šljiva 0,03l", "price": "430 RSD" },
                { "name": "Potpis šljiva 0,03l", "price": "280 RSD" },
                { "name": "Gorda šljiva 0,03l", "price": "290 RSD" },
                { "name": "Zarić šljiva 0,03l", "price": "390 RSD" },
                { "name": "Žuta osa šljiva 0,03l", "price": "260 RSD" },
                { "name": "Sremica dunja 0,03l", "price": "290 RSD" },
                { "name": "Sremica šljiva 0,03l", "price": "270 RSD" },
                { "name": "Sremica kajsija 0,03l", "price": "270 RSD" },
                { "name": "Sremica kruška 0,03l", "price": "270 RSD" }
            ]
        },
        {
            "name": "Brandies",
            "items": [
                { "name": "Krstić Plum 0.03l", "price": "210 RSD" },
                { "name": "Krstić Apricot 0.03l", "price": "220 RSD" },
                { "name": "Krstić Grape 0.03l", "price": "190 RSD" },
                { "name": "Krstić Quince 0.03l", "price": "220 RSD" },
                { "name": "Krstić Williams Pear 0.03l", "price": "220 RSD" },
                { "name": "Krstić Apple 0.03l", "price": "190 RSD" },
                { "name": "Krstić Raspberry 0.03l", "price": "210 RSD" },
                { "name": "Krstić Sour Cherry 0.03l", "price": "210 RSD" },
                { "name": "Kovilj Quince 0.03l", "price": "320 RSD" },
                { "name": "Kovilj Plum 0.03l", "price": "310 RSD" },
                { "name": "Jelički Dukat Plum 0.03l", "price": "430 RSD" },
                { "name": "Potpis Plum 0.03l", "price": "280 RSD" },
                { "name": "Gorda Plum 0.03l", "price": "290 RSD" },
                { "name": "Zarić Plum 0.03l", "price": "390 RSD" },
                { "name": "Yellow Wasp Plum 0.03l", "price": "260 RSD" },
                { "name": "Sremica Quince 0.03l", "price": "290 RSD" },
                { "name": "Sremica Plum 0.03l", "price": "270 RSD" },
                { "name": "Sremica Apricot 0.03l", "price": "270 RSD" },
                { "name": "Sremica Pear 0.03l", "price": "270 RSD" }
            ]
        },
        {
            "name": "Vina",
            "items": [
                { "name": "Kupinovo vino 0,187l", "price": "320 RSD" },
                { "name": "Sangria 0,187l", "price": "310 RSD" },
                { "name": "Knežević belo vino 0,1l", "price": "160 RSD" },
                { "name": "Knežević belo vino 1L", "price": "1600 RSD" },
                { "name": "Knežević crno vino 0,1l", "price": "160 RSD" },
                { "name": "Knežević crno vino 1L", "price": "1600 RSD" }
            ]
        },
        {
            "name": "Wines",
            "items": [
                { "name": "Blackberry Wine 0.187l", "price": "320 RSD" },
                { "name": "Sangria 0.187l", "price": "310 RSD" },
                { "name": "Knežević White Wine 0.1l", "price": "160 RSD" },
                { "name": "Knežević White Wine 1L", "price": "1600 RSD" },
                { "name": "Knežević Red Wine 0.1l", "price": "160 RSD" },
                { "name": "Knežević Red Wine 1L", "price": "1600 RSD" }
            ]
        },
        {
            "name": "Piva",
            "items": [
                { "name": "Heineken 0,25l", "price": "320 RSD" },
                { "name": "Bavaria 0,25l", "price": "320 RSD" },
                { "name": "Zaječarsko 0,33l", "price": "230 RSD" },
                { "name": "Tuborg 0,33l", "price": "260 RSD" },
                { "name": "Lav premium 0,33l", "price": "240 RSD" },
                { "name": "Carlsberg 0,25l", "price": "290 RSD" },
                { "name": "Zbir 0,5l", "price": "350 RSD" }
            ]
        },
        {
            "name": "Beers",
            "items": [
                { "name": "Heineken 0.25l", "price": "320 RSD" },
                { "name": "Bavaria 0.25l", "price": "320 RSD" },
                { "name": "Zaječarsko 0.33l", "price": "230 RSD" },
                { "name": "Tuborg 0.33l", "price": "260 RSD" },
                { "name": "Lav Premium 0.33l", "price": "240 RSD" },
                { "name": "Carlsberg 0.25l", "price": "290 RSD" },
                { "name": "Zbir 0.5l", "price": "350 RSD" }
            ]
        },
        {
            "name": "Točeno pivo",
            "items": [
                { "name": "Akira 0,5l", "price": "350 RSD" },
                { "name": "Akira 0,3l", "price": "300 RSD" },
                { "name": "Juice Ipa 0,5l", "price": "350 RSD" },
                { "name": "Juice Ipa 0,3l", "price": "300 RSD" },
                { "name": "Wartburg 0,5l", "price": "270 RSD" },
                { "name": "Wartburg 0,3l", "price": "220 RSD" },
                { "name": "Beogradski fantom 0,5l", "price": "350 RSD" },
                { "name": "Beogradski fantom 0,3l", "price": "300 RSD" },
                { "name": "Memento mori 0,5l", "price": "350 RSD" },
                { "name": "Memento mori 0,3l", "price": "300 RSD" },
                { "name": "Kulturica specijal 0,5l", "price": "230 RSD" },
                { "name": "Kulturica specijal 0,3l", "price": "190 RSD" }
            ]
        },
        {
            "name": "Draft Beer",
            "items": [
                { "name": "Akira 0.5l", "price": "350 RSD" },
                { "name": "Akira 0.3l", "price": "300 RSD" },
                { "name": "Juice IPA 0.5l", "price": "350 RSD" },
                { "name": "Juice IPA 0.3l", "price": "300 RSD" },
                { "name": "Wartburg 0.5l", "price": "270 RSD" },
                { "name": "Wartburg 0.3l", "price": "220 RSD" },
                { "name": "Belgrade Phantom 0.5l", "price": "350 RSD" },
                { "name": "Belgrade Phantom 0.3l", "price": "300 RSD" },
                { "name": "Memento Mori 0.5l", "price": "350 RSD" },
                { "name": "Memento Mori 0.3l", "price": "300 RSD" },
                { "name": "Kulturica Special 0.5l", "price": "230 RSD" },
                { "name": "Kulturica Special 0.3l", "price": "190 RSD" }
            ]
        },
        {
            "name": "Topli Napici",
            "items": [
                { "name": "Espresso", "price": "170 RSD" },
                { "name": "Espresso sa mlekom", "price": "180 RSD" },
                { "name": "Espresso sa sojinim mlekom", "price": "190 RSD" },
                { "name": "Caffe latte", "price": "210 RSD" },
                { "name": "Cappuccino", "price": "190 RSD" },
                { "name": "Nescafe", "price": "190 RSD" },
                { "name": "Nesquik", "price": "190 RSD" },
                { "name": "Mleko", "price": "120 RSD" },
                { "name": "Čaj", "price": "170 RSD" },
                { "name": "Plazma šejk", "price": "290 RSD" }
            ]
        },
        {
            "name": "Hot Drinks",
            "items": [
                { "name": "Espresso", "price": "170 RSD" },
                { "name": "Espresso with Milk", "price": "180 RSD" },
                { "name": "Espresso with Soy Milk", "price": "190 RSD" },
                { "name": "Caffe Latte", "price": "210 RSD" },
                { "name": "Cappuccino", "price": "190 RSD" },
                { "name": "Nescafe", "price": "190 RSD" },
                { "name": "Nesquik", "price": "190 RSD" },
                { "name": "Milk", "price": "120 RSD" },
                { "name": "Tea", "price": "170 RSD" },
                { "name": "Plazma Shake", "price": "290 RSD" }
            ]
        },
        {
            "name": "Sokovi",
            "items": [
                { "name": "Coca Cola 0,25l", "price": "220 RSD" },
                { "name": "Coca Cola zero 0,25l", "price": "230 RSD" },
                { "name": "Schweppes Bitter Lemon 0,25l", "price": "220 RSD" },
                { "name": "Schweppes Tonic Water 0,25l", "price": "220 RSD" },
                { "name": "Schweppes Tangerine 0,25l", "price": "220 RSD" },
                { "name": "Fanta 0,25l", "price": "220 RSD" },
                { "name": "Sprite 0,25l", "price": "220 RSD" },
                { "name": "Multi Sola 0,5l", "price": "240 RSD" },
                { "name": "Sola Ice Tea 0,5l", "price": "240 RSD" },
                { "name": "Cocta 0,275l", "price": "220 RSD" },
                { "name": "Orangina 0,25l", "price": "310 RSD" },
                { "name": "Sok od jagode 0,2l", "price": "230 RSD" },
                { "name": "Sok od pomorandže 0,2l", "price": "230 RSD" },
                { "name": "Sok od jabuke 0,2l", "price": "230 RSD" },
                { "name": "Sok od breskve 0,2l", "price": "230 RSD" },
                { "name": "Sok od borovnice 0,2l", "price": "230 RSD" },
                { "name": "Cedevita 0,25l", "price": "210 RSD" }
            ]
        },
        {
            "name": "Juices",
            "items": [
                { "name": "Coca Cola 0.25l", "price": "220 RSD" },
                { "name": "Coca Cola Zero 0.25l", "price": "230 RSD" },
                { "name": "Schweppes Bitter Lemon 0.25l", "price": "220 RSD" },
                { "name": "Schweppes Tonic Water 0.25l", "price": "220 RSD" },
                { "name": "Schweppes Tangerine 0.25l", "price": "220 RSD" },
                { "name": "Fanta 0.25l", "price": "220 RSD" },
                { "name": "Sprite 0.25l", "price": "220 RSD" },
                { "name": "Multi Sola 0.5l", "price": "240 RSD" },
                { "name": "Sola Ice Tea 0.5l", "price": "240 RSD" },
                { "name": "Cocta 0.275l", "price": "220 RSD" },
                { "name": "Orangina 0.25l", "price": "310 RSD" },
                { "name": "Strawberry Juice 0.2l", "price": "230 RSD" },
                { "name": "Orange Juice 0.2l", "price": "230 RSD" },
                { "name": "Apple Juice 0.2l", "price": "230 RSD" },
                { "name": "Peach Juice 0.2l", "price": "230 RSD" },
                { "name": "Blueberry Juice 0.2l", "price": "230 RSD" },
                { "name": "Cedevita 0.25l", "price": "210 RSD" }
            ]
        },
        {
            "name": "Ceđeni sokovi",
            "items": [
                { "name": "Ceđeni limun 0,2l", "price": "190 RSD" },
                { "name": "Ceđena pomorandža 0,2l", "price": "290 RSD" },
                { "name": "Ceđeni MIX 0,2l", "price": "290 RSD" }
            ]
        },
        {
            "name": "Fresh Juices",
            "items": [
                { "name": "Fresh Lemon 0.2l", "price": "190 RSD" },
                { "name": "Fresh Orange 0.2l", "price": "290 RSD" },
                { "name": "Fresh MIX 0.2l", "price": "290 RSD" }
            ]
        },
        {
            "name": "Voda",
            "items": [
                { "name": "Rosa 0,33l negazirana", "price": "160 RSD" },
                { "name": "Rosa 0,33l gazirana", "price": "170 RSD" },
                { "name": "Rosa 0,75l negazirana", "price": "240 RSD" },
                { "name": "Rosa 0,75l gazirana", "price": "240 RSD" },
                { "name": "Romerquelle limunska trava 0,33l", "price": "240 RSD" }
            ]
        },
        {
            "name": "Water",
            "items": [
                { "name": "Rosa 0.33l Still", "price": "160 RSD" },
                { "name": "Rosa 0.33l Sparkling", "price": "170 RSD" },
                { "name": "Rosa 0.75l Still", "price": "240 RSD" },
                { "name": "Rosa 0.75l Sparkling", "price": "240 RSD" },
                { "name": "Romerquelle Lemongrass 0.33l", "price": "240 RSD" }
            ]
        },
        {
            "name": "Viski",
            "items": [
                { "name": "Jack Daniel's 0,03l", "price": "390 RSD" },
                { "name": "Jameson 0,03l", "price": "340 RSD" },
                { "name": "Gentleman Jack 0,03l", "price": "380 RSD" }
            ]
        },
        {
            "name": "Whiskey",
            "items": [
                { "name": "Jack Daniel's 0.03l", "price": "390 RSD" },
                { "name": "Jameson 0.03l", "price": "340 RSD" },
                { "name": "Gentleman Jack 0.03l", "price": "380 RSD" }
            ]
        },
        {
            "name": "Kokteli",
            "items": [
                { "name": "Gin Tonic", "price": "380 RSD" },
                { "name": "Mojito", "price": "420 RSD" },
                { "name": "Tequila Sunrise", "price": "430 RSD" },
                { "name": "Cuba Libre", "price": "360 RSD" }
            ]
        },
        {
            "name": "Cocktails",
            "items": [
                { "name": "Gin Tonic", "price": "380 RSD" },
                { "name": "Mojito", "price": "420 RSD" },
                { "name": "Tequila Sunrise", "price": "430 RSD" },
                { "name": "Cuba Libre", "price": "360 RSD" }
            ]
        },
        {
            "name": "Grickalice",
            "items": [
                { "name": "Kikiriki čaša običan", "price": "220 RSD" },
                { "name": "Kikiriki čaša sweet chilli", "price": "470 RSD" },
                { "name": "Lešnik čaša beli luk", "price": "470 RSD" },
                { "name": "Badem čaša slani", "price": "470 RSD" }
            ]
        },
        {
            "name": "Snacks",
            "items": [
                { "name": "Peanuts Regular", "price": "220 RSD" },
                { "name": "Peanuts Sweet Chilli", "price": "470 RSD" },
                { "name": "Hazelnuts Garlic", "price": "470 RSD" },
                { "name": "Almonds Salted", "price": "470 RSD" }
            ]
        }
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

    navigator.clipboard.writeText(wifiKey).then(() => {
        toastr.success('Uspešno kopirano!', '', {
            positionClass: 'toast-top-center',
            timeOut: 2000,
            closeButton: false,
            progressBar: true
        });
    }).catch(() => {
        // Fallback method
        const textArea = document.createElement("textarea");
        textArea.value = wifiKey;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);

        toastr.success('Uspešno kopirano!', '', {
            positionClass: 'toast-top-center',
            timeOut: 2000,
            closeButton: false,
            progressBar: true
        });
    });
}