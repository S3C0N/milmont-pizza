function loadMenu() {
    const content = document.getElementById('content');
    content.innerHTML = ''; // Clear existing content

    const menuDiv = document.createElement('div');
    menuDiv.classList.add('menu');

    const heading = document.createElement('h2');
    heading.textContent = 'Our Menu';
    menuDiv.appendChild(heading);

    const categories = [
        {
            title: 'Pizzas',
            items: [
                { name: 'Margherita', price: '$12.99' },
                { name: 'Pepperoni', price: '$14.99' },
                { name: 'Veggie', price: '$13.99' },
                { name: 'BBQ Chicken', price: '$15.99' },
                { name: 'Hawaiian', price: '$14.99' }
            ]
        },
        {
            title: 'Wings',
            items: [
                { name: '10 Wings', price: '$9.99' },
                { name: '20 Wings', price: '$18.99' },
                { name: '30 Wings', price: '$27.99' }
            ]
        },
        {
            title: 'Hoagies',
            items: [
                { name: 'Italian Hoagie', price: '$8.99' },
                { name: 'Turkey Hoagie', price: '$8.99' },
                { name: 'Veggie Hoagie', price: '$7.99' },
                { name: 'Cheesesteak Hoagie', price: '$9.99' },
                { name: 'Chicken Hoagie', price: '$9.99' }
            ]
        },
        {
            title: 'Salads',
            items: [
                { name: 'Caesar Salad', price: '$7.99' },
                { name: 'Garden Salad', price: '$6.99' },
                { name: 'Greek Salad', price: '$8.99' },
                { name: 'Chef Salad', price: '$8.99' },
                { name: 'Chicken Salad', price: '$9.99' }
            ]
        }
    ];

    categories.forEach(category => {
        const categoryDiv = document.createElement('div');
        categoryDiv.classList.add('menu-category');

        const categoryHeading = document.createElement('h3');
        categoryHeading.textContent = category.title;
        categoryDiv.appendChild(categoryHeading);

        const itemList = document.createElement('ul');
        category.items.forEach(item => {
            const itemLi = document.createElement('li');
            
            const itemName = document.createElement('span');
            itemName.classList.add('item-name');
            itemName.textContent = item.name;

            const itemPrice = document.createElement('span');
            itemPrice.classList.add('item-price');
            itemPrice.textContent = item.price;

            itemLi.appendChild(itemName);
            itemLi.appendChild(itemPrice);

            itemList.appendChild(itemLi);
        });

        categoryDiv.appendChild(itemList);
        menuDiv.appendChild(categoryDiv);
    });

    content.appendChild(menuDiv);
}

export default loadMenu;

